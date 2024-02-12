export interface Article {
  author: string;
  created_at_i: number;
  objectID: ArticleId;
  story_title?: string;
  title?: string;
  story_url?: string;
}

export interface ArticleId {
  objectID: string;
}
