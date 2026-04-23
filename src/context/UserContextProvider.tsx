import { useEffect, useReducer, type ReactNode } from "react";
import { UserContext, type User } from "./UserContext";

export const ACTION = {
  ADD: "add",
  UPDATE: "update",
  DELETE: "delete",
} as const;

export type UserAction =
  | { type: "add"; payload: User }
  | { type: "update"; payload: User }
  | { type: "delete"; payload: string };

const userReducer = (state: User[], action: UserAction): User[] => {
  switch (action.type) {
    case ACTION.ADD:
      return [...state, action.payload];
    case ACTION.UPDATE:
      return state.map((user) =>
        user.id === action.payload.id ? action.payload : user,
      );
    case ACTION.DELETE:
      return state.filter((user) => user.id !== action.payload);
    default:
      return state;
  }
};

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(userReducer, [], () => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const STORAGE_KEY = "users";

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
