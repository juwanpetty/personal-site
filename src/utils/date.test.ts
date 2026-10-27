import { describe, expect, it } from "vitest";
import { formatDate } from "./date";

describe("formatDate", () => {
  it("formats a date as long-form month, day, year", () => {
    const formattedDate = formatDate(new Date(2026, 6, 21));

    expect(formattedDate).toBe("July 21, 2026");
  });
});
