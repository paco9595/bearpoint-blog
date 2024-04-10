import { ErrorMessage } from '@/types/errorFetch';
import { ErrorMessage } from "./errorFetch";

export type FetchArticleResponse = {
  data?: ArticleDev[],
  error?: string,
  status? : number
}

export interface ArticleDev {
  type_of: string;
  id: number;
  title: string;
  description: string;
  published: boolean;
  published_at: Date;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  page_views_count: number;
  published_timestamp: Date;
  body_markdown: string;
  positive_reactions_count: number;
  cover_image: string | null;
  tag_list: string[];
  canonical_url: string;
  reading_time_minutes: number;
  user: User;
}

export interface UserDev {
  name: string;
  username: string;
  twitter_username: null;
  github_username: string;
  user_id: number;
  website_url: null;
  profile_image: string;
  profile_image_90: string;
}
