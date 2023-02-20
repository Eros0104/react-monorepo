const { exec } = require("child_process");
const { readdir } = require("fs/promises");

const config = {
  shell: true,
};

const getDirectories = async (source) =>
  (await readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const buildApp = (folderName, callback) => {
  const appName = `@mono/${folderName}`;

  exec(`npm run build ${appName}`, config, (error, stdout, stderr) => {
    if (error) {
      console.log("\x1b[31m", `error: ${error.message}`, "\x1b[37m");
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
    console.log("\x1b[32m", `"${appName}" built successfully!`, "\x1b[37m");
    callback && callback();
  });
};

const buildAll = async () => {
  const coreFolder = "core";

  const directories = await getDirectories("packages");
  const coreIdx = directories.indexOf(coreFolder);
  directories.splice(coreIdx, coreIdx);

  // Core should be built before other projects
  buildApp(coreFolder, () => {
    directories.forEach((directory) => {
      buildApp(directory);
    });
  });
};

buildAll();
