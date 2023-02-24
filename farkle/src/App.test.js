import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import App from './App';

describe('App component', () => {
  it('renders title h1', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('heading').textContent).toMatch('Farkle!');
  });
});

