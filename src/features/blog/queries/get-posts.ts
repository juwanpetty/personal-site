import { allPosts } from "content-collections";

export const getPosts = () =>
  allPosts.sort((a, b) => {
    const dateDiff = b.published.getTime() - a.published.getTime();
    return dateDiff || a.title.localeCompare(b.title);
  });
