import test from "node:test";
import assert from "node:assert/strict";

import { loginUser, registerUser } from "../src/modules/auth/auth.service";

test("registerUser rejects missing payload without crashing", async () => {
  await assert.rejects(
    () => registerUser(undefined as never),
    /Name, email and password are required/
  );
});

test("loginUser rejects missing payload without crashing", async () => {
  await assert.rejects(
    () => loginUser(undefined as never),
    /Email and password are required/
  );
});
