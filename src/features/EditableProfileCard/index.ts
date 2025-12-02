
import { profileReducers } from "./model/slice/profileSlice";
import ProfileCard from "./ui/ProfileCard/ProfileCard";
import { ValidateProfileError } from "./model/consts/const";

export type {
  Profile,
  ProfileSchema,
} from "./model/types/profile";

export {ValidateProfileError}

export { profileReducers, ProfileCard };
