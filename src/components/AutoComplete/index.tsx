import React, { ChangeEvent, useState } from 'react';
import Input, { InputProps } from '@/components/Input';

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => string[]
  onSelect?: (item: string) => void
}


export const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const { fetchSuggestions, value, onSelect, ...restProps } = props;
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState(value);

  console.log(suggestions);
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
  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          return (
            <li key={index}>
              {item}
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
