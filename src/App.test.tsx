import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from './App';

describe('App', () => {
    
  it('should render VerbInput', () => {
      render(<App />);
      const linkElement = screen.getByLabelText('Verb')
      expect(linkElement).toBeInTheDocument()
  })

})

