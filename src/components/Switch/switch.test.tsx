import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switch from '../Switch';
import '@testing-library/jest-dom/extend-expect';

describe('Switch test', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Switch size={'sm'} checked />);
    const switchElement = getByTestId('test-switch');
    const buttonElement = getByTestId('test-switch-button');
    expect(switchElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(switchElement.className).toEqual('switch-sm switchWrapper');
    expect(buttonElement.className).toEqual('zero-checked zero-switch');
  });

  it('should render disabled switch when disabled props to be set', () => {
    const fn = jest.fn();
    const { getByTestId } = render(<Switch disabled onChange={fn} />);
    const buttonElement = getByTestId('test-switch-button');
    fireEvent.click(buttonElement);
    expect(fn).not.toBeCalled();
  });

  it('callback should be called when switch clicked', () => {
    const fn = jest.fn();
    const { getByTestId } = render(<Switch onChange={fn} />);
    const buttonElement = getByTestId('test-switch-button');
    fireEvent.click(buttonElement);
    expect(fn).toBeCalled();
    expect(fn).toBeCalledWith(true);
  });
});
