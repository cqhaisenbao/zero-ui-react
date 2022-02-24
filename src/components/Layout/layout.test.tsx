import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './index';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Aside from './Aside';
import '@testing-library/jest-dom/extend-expect';

let layoutElement: HTMLElement;

describe('layout test', () => {
  beforeEach(() => {
    render(
      <Layout>
        <Aside>
          <div>Aside</div>
        </Aside>
        <Header>
          <div>Header</div>
        </Header>
        <Content>
          <div>Content</div>
        </Content>
        <Footer>
          <div>Footer</div>
        </Footer>
      </Layout>,
    );
    layoutElement = screen.getByTestId('layout');
  });
  it('should render the correct layout', () => {
    expect(layoutElement).toBeInTheDocument();
  });
  it('class should have aside when child is Aside', () => {
    expect(layoutElement).toHaveClass('zero-layout hasAside');
  });
});
