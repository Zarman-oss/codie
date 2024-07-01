import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4'>
      <div className='bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-2xl text-center '>
        <h1 className='text-5xl text-white font-bold mb-6'>Welcome to Codie</h1>
        <p className='text-gray-300 text-lg mb-6'>
          Your ultimate platform for managing and sharing code snippets.
          Effortlessly create, store, and share your code snippets with the
          world.
        </p>
        <Link href='/snippets/new'>
          <div className='inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300'>
            Create a Snippet
            <svg
              className='ml-2 w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              ></path>
            </svg>
          </div>
        </Link>
        <Link href='/snippets'>
          <div className='mt-4 m-8 inline-flex items-center px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-md hover:bg-green-700 transition duration-300'>
            View Snippets
            <svg
              className='ml-2 w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              ></path>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
