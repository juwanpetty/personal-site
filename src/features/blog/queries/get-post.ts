import { allPosts } from "content-collections";

export const getPost = (slug: string) =>
  allPosts.find((post) => post._meta.path === slug);
