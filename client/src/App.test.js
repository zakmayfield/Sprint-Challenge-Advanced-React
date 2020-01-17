import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'
import App from './App';

test('app renders', () => {
  render(<App />);
})
