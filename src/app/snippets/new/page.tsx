import { redirect } from 'next/navigation';
import Link from 'next/link';
import { db } from '@/db';

export default function CreateSnippetPage() {
  async function createSnippet(formData: FormData) {
    'use server';
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    redirect('/snippets');
  }

  return (
    <div className='min-h-screen bg-gray-900 flex items-center justify-center'>
      <div className='bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md relative'>
        <Link href='/'>
          <div className='absolute top-4 left-4 text-gray-300 hover:text-white transition duration-300'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 19l-7-7 7-7'
              ></path>
            </svg>
          </div>
        </Link>
        <h1 className='text-3xl text-white font-bold mb-6 text-center'>
          Create New Snippet
        </h1>
        <form action={createSnippet} className='space-y-6'>
          <div>
            <label
              htmlFor='title'
              className='block text-sm font-medium text-gray-300'
            >
              Title
            </label>
            <input
              type='text'
              id='title'
              name='title'
              className='mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter snippet title'
              required
            />
          </div>
          <div>
            <label
              htmlFor='code'
              className='block text-sm font-medium text-gray-300'
            >
              Code
            </label>
            <textarea
              id='code'
              name='code'
              className='mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              rows={10}
              placeholder='Enter code snippet'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300'
          >
            Create Snippet
          </button>
        </form>
      </div>
    </div>
  );
}
