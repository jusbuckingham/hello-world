import { render, screen } from '@testing-library/react';
import Cheatsheet from './Cheatsheet';

test('renders 2Pac', () => {
    render(<Cheatsheet />);
    const liElement = screen.getByText(/2Pac/i);
    expect(liElement).toBeInTheDocument();
});

test('renders Biggie', () => {
    render(<Cheatsheet />);
    const liElement = screen.getByText(/Biggie/i);
    expect(liElement).toBeInTheDocument();
});

test('renders Diddy', () => {
    render(<Cheatsheet />);
    const liElement = screen.getByText(/Diddy/i);
    expect(liElement).toBeInTheDocument();
});