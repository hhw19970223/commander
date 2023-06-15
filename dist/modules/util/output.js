export function black(str) {
    //@ts-ignore
    return "\u001B[30m" + str + "\u001B[0m";
}
export function red(str) {
    // 添加 ANSI 转义字符，以将文本输出为红色
    // return `\x1b[31m${str}\x1b[0m`;
    return "\u001B[31m" + str + "\u001B[0m";
}
export function green(str) {
    return "\u001B[32m" + str + "\u001B[0m";
}
export function yellow(str) {
    return "\u001B[33m" + str + "\u001B[0m";
}
export function blue(str) {
    return "\u001B[34m" + str + "\u001B[0m";
}
export function white(str) {
    return "\u001B[37m" + str + "\u001B[0m";
}
export function skyBlue(str) {
    return "\u001B[1;36m" + str + "\u001B[0m";
}
export function outputInfo() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < arguments.length; i++) {
        arguments[i] = skyBlue(arguments[i]);
    }
    console.log.apply(console, arguments);
}
export function outputErr() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < arguments.length; i++) {
        arguments[i] = red(arguments[i]);
    }
    console.log.apply(console, arguments);
}
export function outputWarn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < arguments.length; i++) {
        arguments[i] = yellow(arguments[i]);
    }
    console.log.apply(arguments);
}
export function outputSucc() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < arguments.length; i++) {
        arguments[i] = green(arguments[i]);
    }
    console.log.apply(arguments);
}
//# sourceMappingURL=output.js.map