import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { compileMarkdown } from "@content-collections/markdown";
import rehypeSlug from "rehype-slug";
import { z } from "zod";

const mdxOptions = {
  rehypePlugins: [rehypeSlug],
};

// Articles: dated, prose-first content that appears in feeds
const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  published: z.coerce.date(),
  draft: z.boolean().default(false),
  content: z.string(),
});

function defineArticleCollection(name: string, directory: string) {
  return defineCollection({
    name,
    directory,
    include: "**/*.mdx",
    schema: articleSchema,
    transform: async (document, context) => {
      const mdx = await compileMDX(context, document, mdxOptions);
      const html = await compileMarkdown(context, document);
      return { ...document, mdx, html };
    },
  });
}

const posts = defineArticleCollection("posts", "src/content/posts");
const changelogs = defineArticleCollection(
  "changelogs",
  "src/content/changelogs",
);

const pages = defineCollection({
  name: "pages",
  directory: "src/content/pages",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.coerce.date().optional(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, mdxOptions);
    return { ...document, mdx };
  },
});

export default defineConfig({
  content: [posts, changelogs, pages],
});
