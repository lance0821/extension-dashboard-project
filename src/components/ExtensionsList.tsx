import { useState } from "react";
import { ExtensionsProvider } from "../context/ExtensionsProvider";
import { useExtensionsState } from "../hooks/useExtensionsState";
import { useFilteredExtensions } from "../hooks/useFilteredExtensions";
import { getLogo } from "../utils/logoLoader";
import ExtensionCard from "./ExtensionCard";
import FilterHeader from "./FilterHeader";

type TabType = "all" | "active" | "inactive";

export default function ExtensionsList() {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const { extensions, handleToggleExtension, handleRemoveExtension } =
    useExtensionsState();
  const filteredExtensions = useFilteredExtensions(extensions, activeTab);

  return (
    <ExtensionsProvider
      value={{
        toggleExtension: handleToggleExtension,
        removeExtension: handleRemoveExtension,
      }}
    >
      <main className='w-full'>
        <FilterHeader activeTab={activeTab} onTabChange={setActiveTab} />
        <div className='extensions-grid'>
          {filteredExtensions.map((extension) => (
            <ExtensionCard
              key={extension.name}
              extension={{
                ...extension,
                logo: getLogo(extension.logo),
              }}
              index={extension.originalIndex}
            />
          ))}
        </div>
      </main>
    </ExtensionsProvider>
  );
}
