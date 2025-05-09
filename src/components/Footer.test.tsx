import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { MemoryRouter } from 'react-router-dom';

describe('Footer', () => {
  it('renders all legal links and copyright', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByText(/terms and conditions/i)).toBeInTheDocument();
    expect(screen.getByText(/privacy policy/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2016 demo streaming/i)).toBeInTheDocument();
  });
});
