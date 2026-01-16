import { Country } from "@/entities/Country";
import { ProfileSchema } from "../types/profile";
import { profileActions, profileReducers } from "./profileSlice";
import { Currency } from "@/entities/Currency";

const data = {
  username: "admin",
  age: 11,
  country: Country.Kazahstan,
  currency: Currency.RUB,
  firstname: "D",
  lastname: "Arkhipov",
  city: "Ang",
};

describe("profileSlice.test", () => {
  test("test set readonly true", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducers(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true });
  });
  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = { data, form:{username:''} };
    expect(
      profileReducers(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({ 
        readonly: true,
        validateErrors:undefined,
        data,
        form:data
     });
  });
});
