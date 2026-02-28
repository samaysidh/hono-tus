import { expect, test } from "bun:test";
import { hello } from "./index";

test("works", () => {
  expect(hello).toBeFunction();
});