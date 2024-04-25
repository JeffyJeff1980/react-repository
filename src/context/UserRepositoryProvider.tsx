import React from "react";
import UserRepository from "../repositories/UserRepository";

// Create a context with a default value or null
export const UserRepositoryContext = React.createContext<UserRepository | null>(null);

// Define the props for the provider component
type ProviderProps = {
  children: React.ReactNode;
};

export const UserRepositoryProvider = ({ children }: ProviderProps) => {
  const userRepository = new UserRepository();

  return <UserRepositoryContext.Provider value={userRepository}>{children}</UserRepositoryContext.Provider>;
};
