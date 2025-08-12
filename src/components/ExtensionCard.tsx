import { ExtensionActions } from "./ExtensionActions";
import { ExtensionInfo } from "./ExtensionInfo";

export type Extension = {
  name: string;
  description: string;
  logo: string;
  isActive: boolean;
};

type ExtensionCardProps = {
  extension: Extension;
  index: number;
};

export function ExtensionCard({
  extension,
  index,
}: ExtensionCardProps) {
  return (
    <article className='extension-card'>
      <ExtensionInfo
        icon={extension.logo}
        title={extension.name}
        description={extension.description}
      />
      <ExtensionActions isActive={extension.isActive} index={index} />
    </article>
  );
}
