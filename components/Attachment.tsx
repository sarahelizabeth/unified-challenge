import { AttachmentObj } from '@/types/Post';
import dayjs from 'dayjs';

type AttachmentProps = {
  attachment: AttachmentObj;
};

export default async function Attachment({ attachment }: AttachmentProps) {
  const start_date = dayjs(attachment.start_date).format('MMM DD, YYYY');

  return (
    <div className='max-w-sm w-full lg:max-w-full'>
      <div className='rounded shadow-md p-4 mt-4 flex flex-col justify-between leading-normal'>
        <div className='mb-8'>
          <p className='text-sm text-gray-600 flex items-center'>{attachment.template.name} action</p>
          <div className='text-gray-900 font-bold text-xl mb-2'>{attachment.title}</div>
          <p className='text-gray-700 text-base'>{attachment.description}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-blue-900'>Number completed: {attachment.completion_count}</p>
          <p className='text-blue-300'>{start_date}</p>
        </div>
      </div>
    </div>
  );
}
