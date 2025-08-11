import { useContext } from "react";
import { ExtensionsContext } from "../context/ExtensionsContext";

export const useExtensions = () => {
  const context = useContext(ExtensionsContext);
  if (!context) {
    throw new Error("useExtensions must be used within an ExtensionsProvider");
  }
  return context;
};
