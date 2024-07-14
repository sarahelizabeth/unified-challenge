import Image from 'next/image';
import { Author } from '@/types/Post';

type AuthorProps = {
  author: Author;
}

export default async function AuthorPage({ author }: AuthorProps) {
  const url = author.profile_pic
    ? author.profile_pic?.uri
    : 'https://gravatar.com/avatar/1ea2ab024bbf4516fee051b29cb7bd3b?s=400&d=identicon&r=g';
  return (
    <div className='flex items-center'>
      <Image
        src={url}
        className='w-10 h-10 rounded-full mr-4'
        width={80}
        height={80}
        alt='Profile Image'
      />
      <div className='text-sm'>
        <p className='text-gray-900 leading-none'>{author.display_name}</p>
      </div>
    </div>
  );
}
