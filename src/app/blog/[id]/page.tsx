import JSON_POSTS from "@/data/data.json";
import { notFound } from "next/navigation";
import Head from "next/head";
import moment from "moment";

export async function generateStaticParams() {
  return JSON_POSTS.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = JSON_POSTS.find((post) => post.id.toString() === params.id);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 150),
  };
}

export default function PostDetail({ params }: { params: { id: string } }) {
  const post = JSON_POSTS.find((post) => post.id.toString() === params.id);

  if (!post) {
    notFound();
    return null;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.content.substring(0, 150)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex justify-center text-gray-500">
          {moment(post.created_at).format("DD-MM-YYYY")}
        </div>
        <div className="text-white flex justify-center text-4xl py-4">
          {post.title}
        </div>
        <div className="text-gray-400">{post.content}</div>
      </main>
    </>
  );
}
