import Link from 'next/link';
import { PostObj } from '@/types/Post';
import dayjs from 'dayjs';

type PostProps = {
  post: PostObj;
};

export default function Post({ post }: PostProps) {
  const created_date = dayjs(post.created_at).format('MMM DD, YYYY');
  
  return (
    <Link href={`/post/${post.id}`}>
      <div className='p-8 mb-1 relative border-l-8 transition-all bg-white border-slate-400 hover:border-cyan-400 [counter-increment:post-index] before:content-[counter(post-index)] before:p-2 before:leading-none before:absolute before:top-0 before:right-0 before:transition-all before:bg-slate-100 hover:before:bg-cyan-100 '>
        <h2 className='mt-0 mb-4 text-xl font-extrabold first-letter:uppercase'>{post.title}</h2>
        <p className='py-3 text-gray-600 first-letter:uppercase'>{post.description}</p>
        <div className='flex justify-between items-end'>
          <p className='text-blue-800'>Likes: {post.likes}</p>
          <p className='text-blue-300'>{created_date}</p>
        </div>
      </div>
    </Link>
  );
}
