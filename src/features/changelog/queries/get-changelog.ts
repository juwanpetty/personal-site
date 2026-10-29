import { getChangelogs } from "@/features/changelog/queries/get-changelogs";

export const getChangelog = (slug: string) =>
  getChangelogs().find((changelog) => changelog._meta.path === slug);
