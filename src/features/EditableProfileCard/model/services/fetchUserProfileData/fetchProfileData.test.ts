import { ActionCreatorType, TestAsyncThunk } from "shared/lib/tests/TestAsyncThink/TestAsyncThunk";
import { fetchProfileData } from "./fetchUserProfileData";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

const data = {
  username: "admin",
      age: 11,
      country: Country.Kazahstan,
      currency: Currency.RUB,
      firstname: "D",
      lastname: "Arkhipov",
      city: "Ang",
}

describe("fetchProfileData.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData as ActionCreatorType<unknown, unknown, unknown>);
    thunk.api.get.mockReturnValue(Promise.resolve({data:data}))
    const result = await thunk.callThunk(data);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data)
  });
  test("with error", async () => {
   
    const thunk = new TestAsyncThunk(fetchProfileData as ActionCreatorType<unknown, unknown, unknown>);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(data);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
