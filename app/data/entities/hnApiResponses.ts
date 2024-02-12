export interface HackerNewsResponse {
  exhaustive: Exhaustive;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  hits: Article[];
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: ProcessingTimingsMS;
  query: Query;
  serverTimeMS: number;
}

export interface Exhaustive {
  nbHits: boolean;
  typo: boolean;
}

export interface Article {
  _highlightResult: HighlightResult;
  _tags: string[];
  author: string;
  comment_text: string;
  created_at: string;
  created_at_i: number;
  objectID: string;
  parent_id: number;
  story_id: number;
  story_title: string;
  story_url?: string;
  updated_at: string;
  children?: number[];
}

export interface HighlightResult {
  author: Author;
  comment_text: Author;
  story_title: Author;
  story_url?: Author;
}

export interface Author {
  matchLevel: MatchLevel;
  matchedWords: Query[];
  value: string;
  fullyHighlighted?: boolean;
}

export enum MatchLevel {
  Full = 'full',
  None = 'none',
}

export enum Query {
  Mobile = 'mobile',
}

export interface ProcessingTimingsMS {
  _request: Request;
  afterFetch: AfterFetch;
  fetch: Fetch;
  total: number;
}

export interface Request {
  roundTrip: number;
}

export interface AfterFetch {
  format: Format;
  merge: Merge;
  total: number;
}

export interface Format {
  highlighting: number;
  total: number;
}

export interface Merge {
  total: number;
}

export interface Fetch {
  query: number;
  total: number;
}
