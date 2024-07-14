import PostList from '@/components/PostList';
import { getPostList } from '@/utils/fetchData';
import { POSTS_PER_PAGE } from '@/utils/constants';

export default async function Home() {
  const postData = await getPostList(POSTS_PER_PAGE, '');
  const initialPosts = postData.posts;
  const initialCursor = postData.pagination.next_cursor;
  return (
    <>
      <div className='max-w-3xl mx-auto p-5'>
        <h1 className='text-center text-2xl mb-2'>Unified Coding Challenge</h1>
        <h3 className='text-center mb-5 text-slate-600'>Asynchronously Loading Post Feed</h3>
        <PostList initialPosts={initialPosts} initialCursor={initialCursor} />
      </div>
    </>
  );
}
