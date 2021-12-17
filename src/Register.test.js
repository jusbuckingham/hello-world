import { render, screen } from '@testing-library/react';
import Register from '.Register'

test('renders text', () => {
  render(<Register />);
  const testElement = screen.getByAltText(/Bulma: a modern CSS framework based on Flexbox/i);
  expect(testElement).toBeInTheDocument();
});

test('renders Country', () => {
  render(<Register />);
  const testElement = screen.getByText(/Country/i);
  expect(testElement).toBeInTheDocument();
});

test('renders Rap', () => {
  render(<Register />);
  const testElement = screen.getByText(/Rap/i);
  expect(testElement).toBeInTheDocument();
});

test('render Soul', () => {
  render(<Register />);
  const testElement = screen.getByText(/Soul/i);
  expect(testElement).toBeInTheDocument();
});
