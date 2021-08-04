import React, { ChangeEvent, ReactElement, useState } from 'react';
import Input, { InputProps } from '@/components/Input';

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => string[]
  onSelect?: (item: string) => void
  renderOption?: (item: string) => ReactElement
}


export const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const { fetchSuggestions, value, onSelect, renderOption, ...restProps } = props;
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    if (value) {
      const results = fetchSuggestions(value);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };
  const handleSelect = (item: string) => {
    setInputValue(item);
    setSuggestions([]);
    onSelect && onSelect(item);
  };
  const renderTemplate = (item: string) => {
    return renderOption ? renderOption(item) : item;
  };
  const generateDropdown = () => {
    return (
      <ul>
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
      {(suggestions.length > 0) && generateDropdown()}
    </div>
  );
};

export default AutoComplete;
