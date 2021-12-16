import { render, screen } from '@testing-library/react';
import Kanban from './Kanban'

test('renders text', () => {
  render(<Kanban />);
  const logoElement = screen.getByAltText(/Bulma: a modern CSS framework based on Flexbox/i);
  expect(logoElement).toBeInTheDocument();
});

test('renders Acount tag', () => {
  render(<Kanban />);
  const logoElement = screen.getByText(/Account/i);
  expect(logoElement).toBeInTheDocument();
});

test('renders Dashboard tag', () => {
  render(<Kanban />);
  const logoElement = screen.getByText(/Dashboard/i);
  expect(logoElement).toBeInTheDocument();
});

test('render Profile tag', () => {
  render(<Kanban />);
  const logoElement = screen.getByText(/Profile/i);
  expect(logoElement).toBeInTheDocument();
});

test('render Settings tag', () => {
  render(<Kanban />);
  const logoElement = screen.getByText(/Settings/i);
  expect(logoElement).toBeInTheDocument();
});

test('render Logout tag', () => {
  render(<Kanban />);
  const logoElement = screen.getByText(/Logout/i);
  expect(logoElement).toBeInTheDocument();
});

test('render Link tag', () => {
  render(<Kanban />);
  const logoElement = screen.getByText(/Link/i);
  expect(logoElement).toBeInTheDocument();
});

test('render Success tag', () => {
    render(<Kanban />);
    const logoElement = screen.getByTitle(/Success/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('render Black tag', () => {
    render(<Kanban />);
    const logoElement = screen.getByText(/Black/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('render Warning tag', () => {
    render(<Kanban />);
    const logoElement = screen.getByTitle(/Warning/i);
    expect(logoElement).toBeInTheDocument();
  });