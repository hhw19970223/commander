var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { program } from 'commander';
import { blue, outputErr, outputInfo, skyBlue } from '../util/output.js';
// const program = new Command();
import { createInterface } from 'readline';
var rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
function promptInput(msg) {
    return new Promise(function (resolve, reject) {
        rl.question(blue(msg + ':   '), function (input) {
            resolve(input);
        });
    }).catch(function (err) {
        console.error(err);
    });
}
export var hhw = program;
hhw
    .name('hhw')
    .usage(blue('欢迎使用hhw插件'))
    .version(process.env.version);
hhw
    .command('*')
    .action(function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log(skyBlue('欢迎使用hhw插件'));
            console.log(skyBlue('命令行版本:' + process.env.version));
            process.exit();
            return [2 /*return*/];
        });
    });
});
hhw
    .command('cal [exp...]')
    .description('简单算术运算')
    .action(function (exp) {
    return __awaiter(this, void 0, void 0, function () {
        var formula, value;
        return __generator(this, function (_a) {
            if (!exp || !exp.length) {
                outputErr('请输入需要计算的公式');
            }
            else {
                formula = exp.join('');
                try {
                    value = eval(formula);
                    outputInfo(formula, ' = ', value);
                }
                catch (e) {
                    outputErr('计算式有误', formula, e);
                }
            }
            return [2 /*return*/];
        });
    });
});
hhw
    .command('structure')
    .description('自动化构建代码')
    .action(function () {
    return __awaiter(this, void 0, void 0, function () {
        var input;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, promptInput('test')];
                case 1:
                    input = _a.sent();
                    console.log('哦吼你成功了', input);
                    process.exit();
                    return [2 /*return*/];
            }
        });
    });
});
hhw
    .addHelpText('after', "\n  ".concat(skyBlue('需要更多帮助详情请使用 --helpAll'), "\n    "));
(function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, hhw.parseAsync(process.argv)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
})();
//# sourceMappingURL=index.js.map