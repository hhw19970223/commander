const path = require('path');
if (__dirname && __dirname.lastIndexOf('main') > -1) {
    __dirname = path.join(__dirname, '../');
}

const chalk = require('chalk');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
const { hhw } = require('./modules/index');
const fileUtil = require('./modules/util/file');
const output = require('./modules/util/output');
(async function requireCmdJS() {
    const config_path = path.join(__dirname, 'config');
    const { commands } = require(config_path);

    if (commands && commands.length) {
        for (let command of commands) {
            let command_path = path.join(__dirname, 'modules/command', command);
            if (!fileUtil(command_path)) {
                output.outputRed(`命令 【${command}】 不存在`);
            }
            require(command_path);
        }
    }


    hhw.addHelpText('after',`
  ${output.skyBlue('需要更多帮助详情请使用 --helpAll')}
    `)

    await hhw.parseAsync(process.argv);
})()

module.exports = {

}
