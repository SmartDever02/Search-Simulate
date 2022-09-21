import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from 'pages/index';
import ART from 'data/art.json';

describe('Home', () => {
  beforeEach(async () => {
    await render(<Home />);
  });

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: /image gallery/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders a search input', () => {
    const input: HTMLInputElement = screen.getByPlaceholderText('Search...');

    expect(input).toBeInTheDocument();
  });

  it('renders 4 items for initial states', async () => {
    for (let i = 0; i < ART.data.length; i++) {
      const item_component = await screen.findByTestId(ART.data[i].description);
      expect(item_component).toBeInTheDocument();
    }
  });
});
