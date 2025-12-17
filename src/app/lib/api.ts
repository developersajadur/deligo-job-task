const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchBlogs(lang: string) {
  const res = await fetch(`${BASE_URL}/blogs?lang=${lang}`, {
    cache: 'no-store',
  });
  return res.json();
}

export async function fetchBlogById(id: string, lang: string) {
  const res = await fetch(`${BASE_URL}/blogs/${id}?lang=${lang}`, {
    cache: 'no-store',
  });
  return res.json();
}
