import type { Post } from "content-collections";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PostDetail } from "./post-detail";

vi.mock("@content-collections/mdx/react", () => ({
  MDXContent: () => null,
}));

const post = {
  title: "Hello, World!",
  published: new Date(2026, 6, 21),
  content: "",
  mdx: "",
} as Post;

describe("<PostDetail />", () => {
  it("renders a heading with the correct title", () => {
    render(<PostDetail post={post} />);

    expect(
      screen.getByRole("heading", { level: 1, name: post.title }),
    ).toBeDefined();
  });
});
