import { allChangelogs } from "content-collections";

export const getChangelogs = () =>
  allChangelogs.toSorted((a, b) => {
    return b.published.getTime() - a.published.getTime();
  });
