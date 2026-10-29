import { Feed } from "feed";
import { getPosts } from "@/features/blog/queries/get-posts";
import { siteConfig } from "@/config/site";

export function generateRssFeed() {
  const posts = getPosts();

  const feed = new Feed({
    title: siteConfig.name,
    description:
      "A collection of my thoughts, interests, and everything else I post on my blog.",
    id: siteConfig.url,
    link: siteConfig.url,
    language: "en-us",
    favicon: `${siteConfig.url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss: `${siteConfig.url}/rss.xml`,
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${siteConfig.url}/blog/${post._meta.path}`,
      link: `${siteConfig.url}/blog/${post._meta.path}`,
      date: post.published,
      published: post.published,
      description: post.description,
      content: post.html,
    });
  });

  return feed.rss2();
}
