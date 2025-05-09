import { render, screen } from '@testing-library/react';
import SectionHeading from './SectionHeading';

describe('SectionHeading', () => {
  it('renders the correct title', () => {
    render(<SectionHeading title="Popular Titles" />);
    expect(screen.getByText('Popular Titles')).toBeInTheDocument();
  });
});
