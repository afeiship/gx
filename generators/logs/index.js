"use strict";
const Generator = require("yeoman-generator");
const globby = require("globby");
const { execSync } = require("child_process");

module.exports = class extends Generator {
  writing() {
    const dist = this.destinationPath();
    execSync(`cd ${dist} && mkdir logs && cd logs && touch .gitkeep`);
  }

  updateSetttings() {
    const { appName } = this.options;
    const filename = this.destinationPath(`${appName}/settings.py`);

    this.fs.append(
      filename,
      ['\nLOG_LEVEL = "WARNING"', 'LOG_FILE = "./logs/spider.log"'].join("\n")
    );
  }
};
