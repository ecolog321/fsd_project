import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { UserRole } from "../../consts/const";


export const getUserRoles = (state:StateSchema)=>state.user.authData?.role;

export const isUserAdmin = createSelector(getUserRoles, (roles)=> Boolean(roles?.includes(UserRole.ADMIN)))