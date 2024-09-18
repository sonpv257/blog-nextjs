export type PostType = {
  id: number;
  title: string;
  content: string;
  created_at: string;
};

import Link from 'next/link';
import JSON_POSTS from '@/data/data.json';
import moment from 'moment';

export const Post = () => (
  <>
    <div className="text-white py-4">
      <h1 className="text-4xl">Latest Posts</h1>
      <div className="text-gray-500 py-4 border-b border-gray-700">
        A blog created with Next.js and Tailwind CSS
      </div>
    </div>
    {JSON_POSTS.map((post: PostType) => (
      <div key={post.id} className="py-10 border-b border-gray-700">
        <div className="text-gray-500">{moment(post.created_at).fromNow()}</div>
        <div className="text-white text-2xl py-2">{post.title}</div>
        <div className="text-emerald-600">
          <Link href={`/blog/${post.id}`}>Read more →</Link>
        </div>
      </div>
    ))}
  </>
);
