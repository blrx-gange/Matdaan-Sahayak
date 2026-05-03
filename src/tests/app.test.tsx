import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Component', () => {
  it('renders landing page with title', async () => {
    render(<App />);
    // Check for "Matdaan Mitra" which is visible on login or loading
    const title = await screen.findByText(/Matdaan Mitra/i);
    expect(title).toBeDefined();
  });

  it('shows login button when not authenticated', async () => {
    render(<App />);
    const loginButton = await screen.findByRole('button', { name: /Continue with Google/i });
    expect(loginButton).toBeDefined();
  });
});
