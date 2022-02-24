import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button, { ButtonProps } from './index';

const defaultProps: ButtonProps = {
  onClick: jest.fn(),
  btnType: 'primary',
  size: 'lg',
  className: 'klass',
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

let buttonElement: HTMLButtonElement;

describe('Button component test suite', () => {
  beforeEach(() => {
    render(<Button {...defaultProps}>Click Me</Button>);
    buttonElement = screen.getByText('Click Me');
  });
  it('should render the correct button', () => {
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toEqual('BUTTON');
    expect(buttonElement).toHaveClass('btn btn-primary btn-lg klass');
    fireEvent.click(buttonElement);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it('should render a link when buttonType is link and href is provided', () => {
    const { getByText } = render(
      <Button btnType="link" href="https://www.google.com">
        Click Me Link
      </Button>,
    );
    const buttonElement = getByText('Click Me Link');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('btn btn-link');
    expect(buttonElement.getAttribute('href')).toEqual(
      'https://www.google.com',
    );
    expect(buttonElement.tagName).toEqual('A');
  });
  it('should render disabled button when disabled is true', () => {
    const { getByText } = render(
      <Button {...disabledProps}>Click Me disabled</Button>,
    );
    const buttonElement = getByText('Click Me disabled') as HTMLButtonElement;
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.disabled).toBeTruthy();
    fireEvent.click(buttonElement);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
