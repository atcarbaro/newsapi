import { TextFieldProps } from "@mui/material/TextField";

export interface NewsCardProps {
  title: string;
  description: string;
}

export interface NewsGridProps {
  data?: NewsItem[];
}

export interface SearchBoxProps extends Omit<TextFieldProps, "variant"> {
  placeholder?: string;
}

export interface Source {
  id: string | null;
  name: string;
}

export interface NewsItem {
  source?: Source;
  author: string | null;
  title: string;
  description: string | null;
  url?: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
  cardIndex?: number;
}

export interface NewsResponse {
  articles: NewsItem[];
  status: string;
  totalResults: number;
}
