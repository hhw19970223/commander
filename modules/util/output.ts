module.exports = {
    black(str) {
        return '\033[30m' + str + '\033[0m';
    },

    red(str) {
        // 添加 ANSI 转义字符，以将文本输出为红色
        // return `\x1b[31m${str}\x1b[0m`;
        return '\033[31m' + str + '\033[0m';
    },

    green(str) {
        return '\033[32m' + str + '\033[0m';
    },

    yellow(str) {
        return '\033[33m' + str + '\033[0m';
    },

    blue(str) {
        return '\033[34m' + str + '\033[0m';
    },

    white(str) {
        return '\033[37m' + str + '\033[0m';
    },

    skyBlue(str) {
        return '\033[1;36m' + str + '\033[0m';
    },

    outputBlue(str) {
        console.log(chalk.blue(str));
    },

    outputRed(str) {
        console.log(chalk.red(str));
    }
}