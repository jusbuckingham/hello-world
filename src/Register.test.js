import { render, screen } from '@testing-library/react';
import Register from '.Register'

test('renders text', () => {
  render(<Register />);
  const testElement = screen.getByAltText(/Bulma: a modern CSS framework based on Flexbox/i);
  expect(testElement).toBeInTheDocument();
});

test('renders Acount tag', () => {
  render(<Register />);
  const testElement = screen.getByText(/Account/i);
  expect(testElement).toBeInTheDocument();
});

test('renders Dashboard tag', () => {
  render(<Register />);
  const testElement = screen.getByText(/Dashboard/i);
  expect(testElement).toBeInTheDocument();
});

test('render Profile tag', () => {
  render(<Register />);
  const testElement = screen.getByText(/Profile/i);
  expect(testElement).toBeInTheDocument();
});

test('render Settings tag', () => {
  render(<Register />);
  const testElement = screen.getByText(/Settings/i);
  expect(testElement).toBeInTheDocument();
});

test('render Logout tag', () => {
  render(<Register />);
  const testElement = screen.getByText(/Logout/i);
  expect(testElement).toBeInTheDocument();
});

test('render Link tag', () => {
  render(<Register />);
  const testElement = screen.getByText(/Link/i);
  expect(testElement).toBeInTheDocument();
});

test('render Success tag', () => {
    render(<Register />);
    const testElement = screen.getByTitle(/Success/i);
    expect(testElement).toBeInTheDocument();
  });

  test('render Black tag', () => {
    render(<Register />);
    const testElement = screen.getByText(/Black/i);
    expect(testElement).toBeInTheDocument();
  });

  test('render Warning tag', () => {
    render(<Register />);
    const testElement = screen.getByTitle(/Warning/i);
    expect(testElement).toBeInTheDocument();
  });