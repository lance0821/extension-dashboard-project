import { useExtensions } from "../hooks/useExtensions";

type ExtensionActionsProps = {
  isActive: boolean;
  index: number;
};

export function ExtensionActions({
  isActive,
  index,
}: ExtensionActionsProps) {
  const { toggleExtension, removeExtension } = useExtensions();

  return (
    <div className='flex items-center justify-between w-full'>
      <button
        className='btn-remove'
        type='button'
        onClick={() => removeExtension(index)}
      >
        Remove
      </button>
      <button
        onClick={() => toggleExtension(index)}
        className='toggle-switch group'
        type='button'
        aria-label={isActive ? "Deactivate extension" : "Activate extension"}
      >
        <div
          className={`toggle-switch-track ${
            isActive
              ? "toggle-switch-track-active"
              : "toggle-switch-track-inactive"
          }`}
        />
        <div
          className={`toggle-switch-thumb ${
            isActive
              ? "toggle-switch-thumb-active"
              : "toggle-switch-thumb-inactive"
          }`}
        />
      </button>
    </div>
  );
}
