const { readdir } = require("fs/promises");
const shell = require("./utils/shell");
const {
  coreFolderName,
  packagesPath,
  projectPrefix,
} = require("./utils/constants");

const getDirectories = async (source) =>
  (await readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const buildApp = (folderName, callback) => {
  const appName = `${projectPrefix}/${folderName}`;

  shell(`npm run build ${appName}`, () => {
    console.log("\x1b[32m", `"${appName}" built successfully!`, "\x1b[37m");
    callback && callback();
  });
};

const buildAll = async () => {
  const directories = await getDirectories(packagesPath);
  const coreIdx = directories.indexOf(coreFolderName);
  directories.splice(coreIdx, coreIdx);

  // Core should be built before other projects
  buildApp(coreFolderName, () => {
    directories.forEach((directory) => {
      buildApp(directory);
    });
  });
};

buildAll();
