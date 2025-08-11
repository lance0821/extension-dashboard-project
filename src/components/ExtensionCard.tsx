import ExtensionActions from "./ExtensionActions";
import ExtensionInfo from "./ExtensionInfo";

export interface Extension {
  name: string;
  description: string;
  logo: string;
  isActive: boolean;
}

interface ExtensionCardProps {
  extension: Extension;
  index: number;
}

export default function ExtensionCard({
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
