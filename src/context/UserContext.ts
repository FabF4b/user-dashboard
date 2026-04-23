import { createContext, useContext } from "react";
import type { UserAction } from "./UserContextProvider";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  birthday: string;
  address: string;
  phone: string;
  email: string;
  website: string;
};

export type UserContextType = {
  state: User[];
  dispatch: React.Dispatch<UserAction>;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export function useUserContext() {
  const userContext = useContext(UserContext);

  if (userContext === undefined) {
    throw new Error("userContext needs a provider");
  }
  return userContext;
}
