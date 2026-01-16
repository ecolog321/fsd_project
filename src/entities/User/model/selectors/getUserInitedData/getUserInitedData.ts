import { StateSchema } from "@/app/providers/StoreProvider";

export const getUserInitedData = (state:StateSchema)=>state.user._inited;