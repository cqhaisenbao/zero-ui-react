import React, { ChangeEvent, KeyboardEvent, ReactElement, useEffect, useState } from 'react';
import Input, { InputProps } from '@/components/Input';
import Icon from '@/components/Icon';
import './index.scss';
import useDebounce from '@/hooks/useDebounce';
import classNames from 'classnames';

interface DataSourceObject {
  value: string
}

export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>
  onSelect?: (item: DataSourceType) => void
  renderOption?: (item: DataSourceType) => ReactElement
  delay?: number
}

export const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const { fetchSuggestions, value, onSelect, renderOption, delay, ...restProps } = props;
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [inputValue, setInputValue] = useState(value as string);
  const [loading, setLoading] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const debounceValue = useDebounce(inputValue, delay);

  useEffect(() => {
    if (debounceValue) {
      const results = fetchSuggestions(debounceValue);
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
    setHighlightIndex(-1);
  }, [debounceValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
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
      <ul className='suggestionsWrapper'>
        {suggestions.map((item, index) => {
          const cnames = classNames('suggestion-item', {
            'item-highlighted': index === highlightIndex,
          });
          return (
            <li key={index} className={cnames} onClick={() => handleSelect(item)}>
              {renderTemplate(item)}
            </li>
          );
        })}
      </ul>
    );
  };
  const highlight = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggestions.length) {
      index = suggestions.length - 1;
    }
    setHighlightIndex(index);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      case 13:
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex]);
        }
        break;
      case 38:
        highlight(highlightIndex - 1);
        break;
      case 40:
        highlight(highlightIndex + 1);
        break;
      case 27:
        setSuggestions([]);
        break;
      default:
        break;
    }
  };

  return (
    <div className='zero-auto-complete'>
      <Input value={inputValue} onKeyDown={handleKeyDown} onChange={handleChange} {...restProps} />
      {loading && <ul><Icon icon='spinner' spin /></ul>}
      {(suggestions.length > 0) && generateDropdown()}
    </div>
  );
};

export default AutoComplete;
