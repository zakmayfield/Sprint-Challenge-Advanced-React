import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'
import App from './App';

test('app renders', () => {
  render(<App />);
})

test('if dark mode button renders Dark Mode Enabled', () => {
  const app = render(<App />);
  const darkModeBtn = app.getByTestId(/darkModeBtn/i);
  const darkModeEnabler = app.getByTestId(/dmEnabler/i);

  fireEvent.click(darkModeBtn)
  expect(darkModeEnabler.textContent).toBe('Dark Mode Enabled')
})

test('if dark mode button renders Dark Mode Not Enabled', () => {
  const app = render(<App />);
  const darkModeBtn = app.getByTestId(/darkModeBtn/i);
  const darkModeEnabler = app.getByTestId(/dmEnabler/i);

  fireEvent.click(darkModeBtn)
  fireEvent.click(darkModeBtn)
  expect(darkModeEnabler.textContent).toBe('Dark Mode Not Enabled')
})