import { posts } from "../data/posts.json";
import { useState } from "react";

function Post({
  children: post,
}: {
  children: { title: string; date: string; body: string };
}) {
  const [isTruncated, setIsTruncated] = useState(true);
  return (
    <li className="flex flex-col gap-2 bg-slate-100 p-2">
      <div className="text-lg">{post.title}</div>
      <div className="text-sm">{post.date}</div>
      <div
        className={`${
          isTruncated ? "line-clamp-5" : "line-clamp-none"
        } max-w-prose`}
      >
        {post.body}
      </div>
      <div>
        <button
          onClick={() => setIsTruncated(!isTruncated)}
          className="underline text-slate-600"
        >
          {isTruncated ? "Visa mer" : "Visa mindre"}
        </button>
      </div>
    </li>
  );
}

function Blog() {
  return (
    <section className="flex flex-col gap-4 py-4 container max-w-screen-xl">
      <h1 className="text-3xl">Någonstans måste jag ju skriva av mig...</h1>
      <ul className="flex flex-col gap-4">
        {posts
          .sort((b, a) => a.date.localeCompare(b.date))
          .map((post) => (
            <Post key={post.title}>{post}</Post>
          ))}
      </ul>
    </section>
  );
}

export default Blog;
