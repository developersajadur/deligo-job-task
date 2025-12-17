/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchBlogById } from "@/src/app/lib/api";

type PageProps = {
  params: Promise<{
    locale: string;
    id: string;
  }>;
};

export default async function BlogDetails({ params }: PageProps) {
  const { id, locale } = await params;

  const res = await fetchBlogById(id, locale);
  const blog = res.data;

  return (
    <article className="bg-white p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-4">
        {blog?.title}
      </h1>

      <p className="text-sm text-gray-500 mb-6">
        By {blog?.author?.name} ({blog?.author?.email})
      </p>

      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
        {blog?.content}
      </div>
    </article>
  );
}
