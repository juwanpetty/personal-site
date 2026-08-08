import { Feed } from "feed";
import { getPosts } from "@/features/blog/queries/get-posts";

const SITE_URL = "https://juwanpetty.com";

export function generateRssFeed() {
  const posts = getPosts();

  const feed = new Feed({
    title: "Juwan Petty",
    description:
      "A collection of my thoughts, interests, and everything else I post on my blog.",
    id: `${SITE_URL}`,
    link: `${SITE_URL}`,
    language: "en-us",
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss: `${SITE_URL}/rss.xml`,
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${SITE_URL}/blog/${post._meta.path}`,
      link: `${SITE_URL}/blog/${post._meta.path}`,
      date: post.published,
      published: post.published,
      description: post.description,
      content: post.html,
    });
  });

  return feed.rss2();
}
