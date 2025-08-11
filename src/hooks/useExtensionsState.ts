import { useEffect, useState } from "react";
import type { Extension } from "../components/ExtensionCard";
import extensionsData from "../data.json";

export function useExtensionsState() {
  const [extensions, setExtensions] = useState<Extension[]>([]);

  useEffect(() => {
    const storedExtensions = localStorage.getItem("extensions");
    if (storedExtensions) {
      setExtensions(JSON.parse(storedExtensions));
    } else {
      setExtensions(extensionsData);
    }
  }, []);

  useEffect(() => {
    if (extensions.length > 0) {
      localStorage.setItem("extensions", JSON.stringify(extensions));
    }
  }, [extensions]);

  const handleToggleExtension = (index: number) => {
    setExtensions((prev) =>
      prev.map((ext, i) =>
        i === index ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const handleRemoveExtension = (index: number) => {
    setExtensions((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    extensions,
    handleToggleExtension,
    handleRemoveExtension,
  };
}
