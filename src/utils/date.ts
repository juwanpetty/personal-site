export const formatDate = (date: Date, options?: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat(
    "en-US",
    options ?? {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  ).format(date);
