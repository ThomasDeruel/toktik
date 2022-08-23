import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { IUser } from "../types";

interface StoreState {
  userProfile: IUser | null;
  addUser: (user: IUser) => void;
  removeUser: () => void;
}

const authStore = (set: any) => ({
  userProfile: null,
  addUser: (user: IUser) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),
});

const useAuthstore = create(
  persist(authStore, {
    name: "auth",
  })
);

export default useAuthstore;
