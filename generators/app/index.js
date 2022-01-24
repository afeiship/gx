"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const globby = require("globby");
const yoHelper = require("@jswork/yeoman-generator-helper");
const getp = require("@jswork/generator-prompts").default;
const GEN = "@jswork/scrapy";

require("@jswork/next-git-url");
require("@jswork/next-underscored");

module.exports = class extends Generator {
  get scrapAppName() {
    const appName = nx.get(this.props, "project_name");
    return appName ? nx.underscored(appName) : "";
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the praiseworthy ${chalk.red(
          "generator-scrapy"
        )} generator!`
      )
    );

    const prompts = getp(["scope", "registry", "project_name", "description"]);
    return this.prompt(prompts).then(props => {
      this.props = props;
      yoHelper.rewriteProps(props, {
        exclude: ["email", "description", "author", "homepage", "registry"]
      });
    });
  }

  writing() {
    const appName = this.scrapAppName;
    const opts = { appName };
    this.composeWith(`${GEN}:scrapy`, opts);
    this.composeWith(`${GEN}:activerecord`, opts);
    this.fs.copyTpl(
      globby.sync(this.templatePath("**"), { dot: true }),
      this.destinationPath(),
      this.props
    );
  }
};
