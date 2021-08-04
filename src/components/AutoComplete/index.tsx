import React, { ChangeEvent, ReactElement, useState } from 'react';
import Input, { InputProps } from '@/components/Input';
import Icon from '@/components/Icon';
import './index.scss'

interface DataSourceObject {
  value: string
}

export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>
  onSelect?: (item: DataSourceType) => void
  renderOption?: (item: DataSourceType) => ReactElement
}

export const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const { fetchSuggestions, value, onSelect, renderOption, ...restProps } = props;
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [inputValue, setInputValue] = useState(value);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    if (value) {
      const results = fetchSuggestions(value);
      if (results instanceof Promise) {
        setLoading(true);
        results.then(data => {
          setLoading(false);
          setSuggestions(data);
        });
      } else {
        setSuggestions(results);
      }
    } else {
      setSuggestions([]);
    }
  };
  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value);
    setSuggestions([]);
    onSelect && onSelect(item);
  };
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };
  const generateDropdown = () => {
    return (
      <ul className="suggestionsWrapper">
        {suggestions.map((item, index) => {
          return (
            <li key={index} onClick={() => handleSelect(item)}>
              {renderTemplate(item)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className='zero-auto-complete'>
      <Input value={inputValue} onChange={handleChange} {...restProps} />
      {loading && <ul><Icon icon="spinner" spin/></ul>}
      {(suggestions.length > 0) && generateDropdown()}
    </div>
  );
};

export default AutoComplete;
