import { createContext } from "react";

export interface ExtensionsContextType {
  toggleExtension: (index: number) => void;
  removeExtension: (index: number) => void;
}

export const ExtensionsContext = createContext<
  ExtensionsContextType | undefined
>(undefined);
