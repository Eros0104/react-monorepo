import path from "path";

const removeSlash = (value) => {
  return value.endsWith("/*") ? value.substring(0, value.length - 2) : value;
};

const convertTsConfigPathsToPluginAlias = ({ compilerOptions }) => {
  const { baseUrl, paths } = compilerOptions;

  const parsedPaths = Object.entries(paths)
    .map(([key, value]) => {
      const newKey = removeSlash(key);
      const newValue = removeSlash(value[0]);
      const replacementPath = path.join(baseUrl, newValue);

      return {
        find: new RegExp(`^${newKey}(.*)`),
        replacement: `${replacementPath}$1`,
      };
    })
    .filter(
      (value, index, self) =>
        index === self.findIndex((t) => String(t.find) === String(value.find))
    );

  return parsedPaths;
};

export default convertTsConfigPathsToPluginAlias;
