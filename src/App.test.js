// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LearnZen title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LearnZen/i);
    expect(titleElement).toBeInTheDocument();
});
