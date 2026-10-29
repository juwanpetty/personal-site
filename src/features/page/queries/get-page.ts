import { allPages } from "content-collections";

export const getPage = (slug: string) =>
  allPages.find((page) => page._meta.path === slug);
