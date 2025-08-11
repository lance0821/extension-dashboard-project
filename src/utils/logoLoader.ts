// Dynamically import all logo SVG files
const logoModules = import.meta.glob("../assets/images/logo-*.svg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

// Create a clean mapping from filename to imported module
export const logoMap: Record<string, string> = {};

Object.entries(logoModules).forEach(([path, module]) => {
  // Extract filename from path
  const filename = path.split("/").pop() || "";
  // Convert to the expected path format used in data.json
  const key = `./assets/images/${filename}`;
  logoMap[key] = module;
});

// Helper function to get logo by path
export const getLogo = (path: string): string => {
  return logoMap[path] || path;
};
