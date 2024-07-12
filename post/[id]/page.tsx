import { getPost } from '@/utils/fetchData';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const post = await getPost(params.id);
  console.log(post)
  // if (!post) return notFound();
  return <div>post</div>;
}