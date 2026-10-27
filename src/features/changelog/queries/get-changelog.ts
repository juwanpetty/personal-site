import { allChangelogs } from "content-collections";

export const getChangelog = (slug: string) =>
  allChangelogs.find((changelog) => changelog._meta.path === slug);
