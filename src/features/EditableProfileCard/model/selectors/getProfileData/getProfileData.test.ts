import { StateSchema } from "@/app/providers/StoreProvider";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import Avatar from "@/shared/assets/tests/leo.jpeg";
import { getProfileData } from "./getProfileData";

describe("getProfileData.test", () => {
  test("should qual data", () => {
    const data = {
      username: "admin",
      age: 11,
      country: Country.Kazahstan,
      currency: Currency.RUB,
      firstname: "D",
      lastname: "Arkhipov",
      city: "Ang",
      avatar: Avatar,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data)
  });
  test("should work with undefined", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  });
});
