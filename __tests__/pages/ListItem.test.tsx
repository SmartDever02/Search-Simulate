import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListItem from 'components/ListItem';
import ART from 'data/art.json';

describe('List Item Component', () => {
  var chosen_data: ArtDataType;
  beforeEach(() => {
    var random = Math.floor(Math.random() * ART.data.length);
    chosen_data = ART.data[random];

    render(<ListItem key={chosen_data.description} {...chosen_data} />);
  });

  it('test if correct article shows', async () => {
    const article = await screen.findByTestId(chosen_data.description);
    expect(article).toBeInTheDocument();
  });

  it('test if correct image shows', async () => {
    const image = await screen.findByAltText(chosen_data.description);
    expect(image).toBeInTheDocument();
  });

  it('test if correct artist names shows', async () => {
    const artist = await screen.findByText(chosen_data.artist);
    expect(artist).toBeInTheDocument();
  });
});
