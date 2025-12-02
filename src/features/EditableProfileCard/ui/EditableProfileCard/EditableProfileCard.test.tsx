import { screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender";
import EditableProfileCard from "./EditableProfileCard";
import { Profile } from "../../model/types/profile";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { profileReducers } from "../../model/slice/profileSlice";
import userEvent from "@testing-library/user-event";

const profile: Profile = {
  id: "1",
  firstname: "123",
  lastname: "123",
  age: 32,
  currency: Currency.EUR,
  country: Country.Belarus,
  city: "Ang",
  username: "ormina",
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: "1", username: "ormina" },
    },
  },
  asyncReducers: {
    profile: profileReducers,
  },
};

describe("features/EditableProfileCard", () => {
  test("readonly mode", async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId("ProfileCardHeader.EditBtn"));
    expect(
      screen.getByTestId("ProfileCardHeader.CancelBtn")
    ).toBeInTheDocument();
  });
  test("cancel reset", async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId("ProfileCardHeader.EditBtn"));
    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
    await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));
    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), 'user');
    await userEvent.type(screen.getByTestId("ProfileCard.lastname"), 'user');

    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue('user');
    expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue('user');

    await userEvent.click(screen.getByTestId("ProfileCardHeader.CancelBtn"));

    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue('123');
    expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue('123');
  });
});
