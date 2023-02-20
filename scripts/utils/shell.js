const { exec } = require("child_process");

const config = {
  shell: true,
};

const shell = (command, callback) => {
  exec(command, config, (error, stdout, stderr) => {
    if (error) {
      console.log("\x1b[31m", `error: ${error.message}`, "\x1b[37m");
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
    if (stdout) {
      console.log(`stdout: ${stdout}`);
    }

    callback && callback();
  });
};

module.exports = shell;
