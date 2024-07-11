
export interface Post
{
  id: string;
  title: string;
  description: string;
  author: object;
  likes: number;
  liked: boolean;
  created_at: string;
  attachments: Array<Object>;
}