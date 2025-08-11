import { type ReactNode } from "react";
import {
  ExtensionsContext,
  type ExtensionsContextType,
} from "./ExtensionsContext";

interface ExtensionsProviderProps {
  children: ReactNode;
  value: ExtensionsContextType;
}

export function ExtensionsProvider({
  children,
  value,
}: ExtensionsProviderProps) {
  return <ExtensionsContext value={value}>{children}</ExtensionsContext>;
}
