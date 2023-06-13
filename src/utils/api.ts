export interface Post {
  title: string;
  body: string;
}

export const fetchPosts = (): Promise<Post[]> =>
  fetch(import.meta.env.VITE_API_URL + "/posts/").then((res) => res.json());
