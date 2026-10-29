import { allPosts } from "content-collections";

export const getPosts = () =>
  allPosts.toSorted((a, b) => {
    const dateDiff = b.published.getTime() - a.published.getTime();
    return dateDiff || a.title.localeCompare(b.title);
  });
