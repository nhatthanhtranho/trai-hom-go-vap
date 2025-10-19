export interface SEOMetadata {
  title?: string;
  description?: string;
  keywords?: string;
  alternates?: {
    canonical: string
  };
  image?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
}