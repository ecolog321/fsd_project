import { profileReducers } from "./model/slice/profileSlice";
import ProfileCard from "./ui/ProfileCard/ProfileCard";

export {
  Profile,
  ProfileSchema,
  ValidateProfileError,
} from "./model/types/profile";

export { profileReducers, ProfileCard };
