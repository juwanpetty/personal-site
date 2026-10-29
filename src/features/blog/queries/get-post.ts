import { getPosts } from "@/features/blog/queries/get-posts";

export const getPost = (slug: string) =>
  getPosts().find((post) => post._meta.path === slug);
