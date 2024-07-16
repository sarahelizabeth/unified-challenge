'use client';

import React, { useState, useRef, useEffect } from 'react';

import { getPostList } from '@/utils/fetchData';
import { getAuth } from '@/utils/api';
import { PostObj } from '@/types/Post';
import { POSTS_PER_PAGE } from '@/utils/constants';
import { useInView } from 'react-intersection-observer';

import Post from './Post';

type PostListProps = {
  initialPosts: PostObj[];
  initialCursor: string;
};

export default function PostList({ initialPosts, initialCursor }: PostListProps) {
  // const auth = getAuth();
  // console.log('auth ', auth)
  const [cursor, setCursor] = useState(initialCursor);
  const [posts, setPosts] = useState<PostObj[]>(initialPosts);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [scrollTrigger, isInView] = useInView();

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

  useEffect(() => {
    if (isInView && hasMoreData) {
      loadMorePosts();
    }
  }, [isInView, hasMoreData]);

  // useEffect(() => {
  //   if (typeof window === 'undefined' || !window.IntersectionObserver) {
  //     return;
  //   }

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (entries[0].isIntersecting) {
  //         loadMorePosts();
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );

  //   if (scrollTrigger.current) {
  //     observer.observe(scrollTrigger.current);
  //   }

  //   return () => {
  //     if (scrollTrigger.current) {
  //       observer.unobserve(scrollTrigger.current);
  //     }
  //   };
  // }, [hasMoreData]);

  return (
    <>
      <div className='post-list [counter-reset:post-index]'>
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <div className='text-center text-slate-600 mt-5'>
        {(hasMoreData && <div ref={scrollTrigger}>Loading...</div>) || (
          <p className='text-slate-600'>No more posts to load</p>
        )}
      </div>
    </>
  );
}
