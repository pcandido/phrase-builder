import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from './App';

describe('App', () => {
    
  it('should render VerbInput', () => {
      render(<App />);
      const element = screen.getByText('Verb')
      expect(element).toBeInTheDocument()
  })

  it('should render SubjectInput', () => {
    render(<App />);
    const element = screen.getByText('Subject')
    expect(element).toBeInTheDocument()
})

})

