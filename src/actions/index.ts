'use server';
import { redirect } from 'next/navigation';
import { db } from '../db';

export async function editSnippet(formData: FormData) {
  const id = parseInt(formData.get('id') as string);
  const title = formData.get('title') as string;
  const code = formData.get('code') as string;

  await db.snippet.update({
    where: { id },
    data: { title, code },
  });

  redirect('/snippets');
}
export async function deleteSnippet(formData: FormData) {
  const id = parseInt(formData.get('id') as string);
  await db.snippet.delete({
    where: { id },
  });
  redirect('/');
}
