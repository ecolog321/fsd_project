import { Country } from "@/entities/Country";
import { validateProfileData } from "./validateProfileData";
import { Currency } from "@/entities/Currency";
import { ValidateProfileError } from "../../consts/const";


const data = {
  username: "admin",
      age: 11,
      country: Country.Kazahstan,
      currency: Currency.RUB,
      firstname: "D",
      lastname: "Arkhipov",
      city: "Ang",
}

describe('validateProfileData.test', () => {
  test('0 errors', () => {
    const result = validateProfileData(data);

    expect(result).toEqual([])
  });
  test('without first and last name', () => {
    const result = validateProfileData({...data, firstname:'', lastname:''});

    expect(result).toEqual([
        ValidateProfileError.INCORRECT_USER_DATA
    ])
  });
  test('no age', () => {
    const result = validateProfileData({...data, age:undefined});

    expect(result).toEqual([
        ValidateProfileError.INCORRECT_AGE
    ])
  });
  test('no data', () => {
    const result = validateProfileData({});

    expect(result).toEqual([
        ValidateProfileError.INCORRECT_USER_DATA,
        ValidateProfileError.INCORRECT_AGE,
        ValidateProfileError.INCORRECT_COUNTRY,
    ])
  });
});