import type { Extension } from "../components/ExtensionCard";

type TabType = "all" | "active" | "inactive";

export function useFilteredExtensions(
  extensions: Extension[],
  activeTab: TabType
) {
  return extensions
    .map((ext, index) => ({ ...ext, originalIndex: index }))
    .filter((ext) => {
      if (activeTab === "active") return ext.isActive;
      if (activeTab === "inactive") return !ext.isActive;
      return true;
    });
}
