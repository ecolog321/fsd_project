import { loginByUsername } from "./loginByUsername";
import { userActions, UserRole } from "@/entities/User";
import { ActionCreatorType, TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThink/TestAsyncThunk";

jest.mock("axios");


describe("loginByUsername.test", () => {
  test("success", async () => {
    const userValue = { username: "123", id: "123", role:[UserRole.ADMIN] };
    const thunk = new TestAsyncThunk(loginByUsername as ActionCreatorType<unknown, unknown, unknown>);
    thunk.api.post.mockReturnValue(Promise.resolve({data:userValue}))
    const result = await thunk.callThunk({ username: "123", password: "123" });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
  });
  test("with error", async () => {
   
    const thunk = new TestAsyncThunk(loginByUsername as ActionCreatorType<unknown, unknown, unknown>);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: "123", password: "123" });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
