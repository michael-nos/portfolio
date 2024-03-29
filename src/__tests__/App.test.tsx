import { render, screen } from '@testing-library/react';
import { App } from '@/components/App';

describe('App', () => {
  it('should match the snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('should render the heading text', () => {
    render(<App />);
    expect(screen.getByText(/I'm Michael/i)).toBeInTheDocument();
  });
});
