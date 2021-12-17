import { render, screen } from '@testing-library/react';
import Personal from './personal';

test('renders about tag', () => {
    render(<Personal />);
    const spanElement = screen.getByTitle(/About/i);
    expect(spanElement).toBeInTheDocument();
  });
  test('renders services tag', () => {
    render(<Personal />);
    const spanElement = screen.getByTitle(/Services/i);
    expect(spanElement).toBeInTheDocument();
  });