import Image from 'next/image';
import { getPost } from '@/utils/fetchData';
import { notFound } from 'next/navigation';
import AuthorPage from '@/components/Author';

export default async function PostPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const post = await getPost(params.id);
  console.log(post)
  if (!post) return notFound();
  return (
    <div className='max-w-sm w-full lg:max-w-full lg:flex'>
      <Image
        src='https://gravatar.com/avatar/1ea2ab024bbf4516fee051b29cb7bd3b?s=400&d=identicon&r=g'
        className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
        alt='Post Image'
        width={400}
        height={600}
      />
      <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
        <div className='mb-8'>
          <div className='text-gray-900 font-bold text-xl mb-2'>Title: {post.title}</div>
          <p className='text-gray-700 text-base'>{post.description}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-blue-800'>Likes: {post.likes}</p>
          <p className='text-blue-300'>{post.created_at}</p>
        </div>
        <AuthorPage author={post.author} />
      </div>
    </div>
  );
}