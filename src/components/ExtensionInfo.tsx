interface ExtensionInfoProps {
  icon: string;
  title: string;
  description: string;
}

export default function ExtensionInfo({
  icon,
  title,
  description,
}: ExtensionInfoProps) {
  return (
    <div className='extension-info'>
      <img src={icon} alt={`${title} logo`} className='extension-info-icon' />
      <div className='extension-info-content'>
        <h3 className='extension-info-title'>{title}</h3>
        <p className='extension-info-description'>{description}</p>
      </div>
    </div>
  );
}
