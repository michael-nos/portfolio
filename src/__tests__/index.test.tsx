import { render, screen } from '@testing-library/react';
import { App } from '@/components/App';

describe('index', () => {
  it('should render the mock App component', () => {
    render(<App />);
    expect(
      screen.getByText(/React \/ TypeScript \/ GraphQL/i)
    ).toBeInTheDocument();
  });
});
