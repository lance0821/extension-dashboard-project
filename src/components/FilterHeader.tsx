import { TabButton } from "./TabButton";

type TabType = "all" | "active" | "inactive";

interface FilterHeaderProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function FilterHeader({
  activeTab,
  onTabChange,
}: FilterHeaderProps) {
  const tabs: { label: string; value: TabType }[] = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];

  return (
    <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-200 md:gap-150 mb-300'>
      <h2 className='text-[28px] md:text-preset-1 text-neutral-900 dark:text-neutral-0 flex-grow font-bold leading-none'>
        Extensions List
      </h2>
      <div className='flex gap-100 md:gap-150'>
        {tabs.map((tab) => (
          <TabButton
            key={tab.value}
            label={tab.label}
            isActive={activeTab === tab.value}
            onClick={() => onTabChange(tab.value)}
          />
        ))}
      </div>
    </div>
  );
}
