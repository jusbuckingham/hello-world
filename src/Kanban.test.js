import { render, screen } from '@testing-library/react';
import Kanban from './Kanban'

test('renders Dashboard tag', () => {
  render(<Kanban />);
  const logoElement = screen.getAllByAltText(/Bulma: a modern CSS framework based on Flexbox/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders Customers tag', () => {
  render(<Kanban />);
  const spanElement = screen.getByText(/Customers/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders Authentication tag', () => {
  render(<Kanban />);
  const spanElement = screen.getByText(/Authentication/i);
  expect(spanElement).toBeInTheDocument();
});

test('render Payments tag', () => {
  render(<Kanban />);
  const spanElement = screen.getByText(/Payments/i);
  expect(spanElement).toBeInTheDocument();
});

test('render Transfers tag', () => {
  render(<Kanban />);
  const spanElement = screen.getByText(/Transfers/i);
  expect(spanElement).toBeInTheDocument();
});

test('render Balance tag', () => {
  render(<Kanban />);
  const spanElement = screen.getByText(/Balance/i);
  expect(spanElement).toBeInTheDocument();
});

test('render Question tag', () => {
  render(<Kanban />);
  const spanElement = screen.getByTitle(/question/i);
  expect(spanElement).toBeInTheDocument();
});