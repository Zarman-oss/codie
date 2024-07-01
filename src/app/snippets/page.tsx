import React from 'react';
import Link from 'next/link';
import { db } from '@/db';
import { deleteSnippet } from '../../actions';

export default async function SnippetsPage() {
  const snippets = await db.snippet.findMany();

  return (
    <div className='min-h-screen bg-gray-900 flex flex-col items-center p-4'>
      <div className='relative bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-4xl'>
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
          Code Snippets
        </h1>
        {snippets.length === 0 ? (
          <p className='text-gray-300 text-lg text-center'>
            No snippets available.
          </p>
        ) : (
          <div className='space-y-4'>
            {snippets.map((snippet) => (
              <div key={snippet.id} className='bg-gray-700 p-4 rounded-md'>
                <h2 className='text-2xl text-white font-semibold mb-2'>
                  {snippet.title}
                </h2>
                <pre className='bg-gray-800 p-4 rounded-md text-gray-300 overflow-auto'>
                  <code>{snippet.code}</code>
                </pre>
                <div className='flex justify-end mt-4 space-x-2'>
                  <Link href={`/snippets/${snippet.id}`}>
                    <div className=' text-white px-4 py-2 rounded-md  transition duration-300'>
                      Edit Snippet
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
