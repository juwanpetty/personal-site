import { Post } from "content-collections";

interface PostsByYear {
  year: number;
  posts: Post[];
}

export function groupPostsByYear(posts: Post[]): PostsByYear[] {
  const postsByYear = posts.reduce<Record<number, Post[]>>((acc, post) => {
    const year = post.published.getFullYear();

    if (acc[year] === null || acc[year] === undefined) {
      acc[year] = [];
    }

    acc[year].push(post);
    return acc;
  }, {});

  return Object.entries(postsByYear)
    .map(([year, posts]) => {
      return {
        year: Number(year),
        posts: [...posts].toSorted(
          (a, b) => b.published.getTime() - a.published.getTime(),
        ),
      };
    })
    .toSorted((a, b) => b.year - a.year);
}
