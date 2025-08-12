type TabButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export function TabButton({
  label,
  isActive,
  onClick,
}: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`tab-button ${
        isActive ? "tab-button-active" : "tab-button-inactive"
      }`}
      type='button'
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
}
