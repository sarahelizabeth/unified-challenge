import Image from 'next/image';
import Link from 'next/link';
import { getPost } from '@/utils/fetchData';
import { notFound } from 'next/navigation';
import Author from '@/components/Author';
import Attachment from '@/components/Attachment';
import dayjs from 'dayjs';

export default async function PostPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const post = await getPost(params.id);
  if (!post) return notFound();
  console.log('page post ****************** ', post)
  const created_date = dayjs(post.created_at).format('MMM DD, YYYY');
  const author = post.third_party_author ? post.third_party_author : post.author;
  const hasAttachments = post.attachments.length > 0;

  return (
    <div className='max-w-2xl mx-auto w-full'>
      <button className='w-full mb-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
        <Link href='/'>Back to Feed</Link>
      </button>
      <div className='border border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal'>
        <div className='mb-8'>
          <div className='text-gray-900 font-bold text-xl mb-2'>Title: {post.title}</div>
          <p className='text-gray-700 text-base'>{post.description}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-blue-900'>Likes: {post.likes}</p>
          <p className='text-blue-300'>{created_date}</p>
        </div>
        <Author author={author} />
      </div>
      <>
        {hasAttachments && (
          <>
            <h2 className='text-gray-900 font-bold text-xl my-2'>Attachments:</h2>
            {post.attachments.map((item: any) => (
              <Attachment attachment={item} />
            ))}
          </>
        )}
      </>
    </div>
  );
}