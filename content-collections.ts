import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { compileMarkdown } from "@content-collections/markdown";
import rehypeSlug from "rehype-slug";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "src/content/posts",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [rehypeSlug],
    });
    const html = await compileMarkdown(context, document);
    return {
      ...document,
      mdx,
      html,
    };
  },
});

export default defineConfig({
  content: [posts],
});
