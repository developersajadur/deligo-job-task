/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchBlogs } from '../lib/api';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: PageProps) {
  const { locale } = await params;

  const res = await fetchBlogs(locale);
  const blogs = res.data;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {blogs.map((blog: any) => (
        <a
          key={blog._id}
          href={`/${locale}/blogs/${blog._id}`}
          className="bg-white p-4 rounded shadow"
        >
          <h2 className="text-xl font-semibold">{blog.title}</h2>
          <p className="text-gray-600 line-clamp-3">{blog.content}</p>
        </a>
      ))}
    </div>
  );
}
