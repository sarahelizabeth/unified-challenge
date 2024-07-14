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
export interface Author {
  id: string;
  account_id: string;
  display_name: string;
  profile_pic: any;
}