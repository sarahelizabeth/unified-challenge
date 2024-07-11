'use client';

import { useState } from 'react';

import { getPostList } from '@/utils/fetchData';
import { Post } from '@/types/Post';
import { POSTS_PER_PAGE } from '@/utils/constants';

import PostItem from './Post';

type PostListProps = {
  initialPosts: Post[];
  initialCursor: string;
};

export default function PostList({ initialPosts, initialCursor }: PostListProps) {
  const [cursor, setCursor] = useState(initialCursor);
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [hasMoreData, setHasMoreData] = useState(true);

  const loadMorePosts = async () => {
    if (hasMoreData) {
      const postListData = await getPostList(POSTS_PER_PAGE, cursor);
      const apiPosts = postListData.posts;

      if (!apiPosts.length) {
        setHasMoreData(false);
      }

      setPosts((prevPosts) => [...prevPosts, ...apiPosts]);
      setCursor(postListData.pagination.next_cursor);
    }
  };

  return (
    <>
      <div className='post-list [counter-reset:post-index]'>
        {posts?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
      <div className='text-center mt-5'>
        {hasMoreData ? (
          <button
            className='px-4 py-3 bg-slate-500 hover:bg-slate-600 text-slate-50 rounded-md'
            onClick={loadMorePosts}
          >
            Load More Posts
          </button>
        ) : (
          <p className='text-slate-600'>No more posts to load</p>
        )}
      </div>
    </>
  );
}
