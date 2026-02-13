import { UserRole } from "@/entities/User";
import { RouteProps } from "react-router-dom";


export type AppRoutesProsp = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
