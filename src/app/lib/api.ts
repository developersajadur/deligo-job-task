const BASE_URL = 'http://localhost:5000/api/v1';

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
