export interface PostObj
{
  id: string;
  title: string;
  description: string;
  author: object;
  third_party_author: object;
  likes: number;
  liked: boolean;
  created_at: string;
  attachments: Array<Object>;
}
export interface AuthorObj {
  id: string;
  account_id: string;
  display_name: string;
  profile_pic: any;
}

interface Template {
  name: string;
}

export interface AttachmentObj {
  resource_type: string;
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  template: Template;
  creator: object;
  is_complete: boolean;
  completion_count: number;
  targets: Array<Object>;
}