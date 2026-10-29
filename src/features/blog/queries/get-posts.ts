import { allPosts, type Post } from "content-collections";

const isVisible = (post: Post) =>
  !post.draft || process.env.NODE_ENV === "development";

export const getPosts = () =>
  allPosts.filter(isVisible).toSorted((a, b) => {
    const dateDiff = b.published.getTime() - a.published.getTime();
    return dateDiff || a.title.localeCompare(b.title);
  });
