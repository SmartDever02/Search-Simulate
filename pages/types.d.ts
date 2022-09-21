interface ArtDataType {
  index?: number;
  artist: string;
  title: string;
  created_at: string;
  medium: string;
  description: string;
  image_url: string;
}

interface SearchInputType {
  query: string;
  onChange: any;
}
