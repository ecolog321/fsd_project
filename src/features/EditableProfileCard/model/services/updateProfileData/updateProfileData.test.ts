import {
  ActionCreatorType,
  TestAsyncThunk,
} from "@/shared/lib/tests/TestAsyncThink/TestAsyncThunk";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { updateProfileData } from "./updateProfileData";
import { ValidateProfileError } from "../../consts/const";

const data = {
  username: "admin",
  age: 11,
  country: Country.Kazahstan,
  currency: Currency.RUB,
  firstname: "D",
  lastname: "Arkhipov",
  city: "Ang",
  id:'1'
};

describe("updateProfileData.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(
      updateProfileData as ActionCreatorType<unknown, unknown, unknown>,
      {
        profile: {
          form: data,
        },
      }
    );
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk(data);

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });
  test("with error", async () => {
    const thunk = new TestAsyncThunk(
      updateProfileData as ActionCreatorType<unknown, unknown, unknown>,
      {
        profile: {
          form: data,
        },
      }
    );
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(data);

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });
});
