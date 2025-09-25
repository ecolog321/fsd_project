import ProfileCard from "./ui/ProfileCard/ProfileCard";

export { Profile, ProfileSchema } from "./modal/types/profile";

export { profileActions, profileReducers } from "./modal/slice/profileSlice";

export { fetchProfileData } from "./modal/services/fetchUserProfileData/fetchUserProfileData";

export {ProfileCard}