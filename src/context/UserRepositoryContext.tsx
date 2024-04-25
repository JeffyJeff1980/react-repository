import React from "react";
import UserRepository from "../repositories/UserRepository";

// Create a context with a default value or null
export const UserRepositoryContext = React.createContext<UserRepository | null>(null);

export const UserRepositoryProvider = ({ children }: any) => {
  const userRepository = new UserRepository();

  return <UserRepositoryContext.Provider value={userRepository}>{children}</UserRepositoryContext.Provider>;
};
