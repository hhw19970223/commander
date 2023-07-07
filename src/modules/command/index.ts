import { Command, program } from 'commander';
import {blue, outputErr, outputInfo, outputWarn, skyBlue} from '../util/output.js';
// const program = new Command();
import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptInput(msg): Promise<any> {
    return new Promise((resolve, reject) => {
        rl.question(blue(msg + ':   '), (input: string) => {
            resolve(input);
        });
    }).catch(err => {
        console.error(err);
    })
}

export const hhw = program;

hhw
    .name('hhw')
    .usage(blue('欢迎使用hhw插件'))
    .version(process.env.version);

hhw
    .command('*')
    .action(async function() {
        console.log(skyBlue('欢迎使用hhw插件'));
        console.log(skyBlue('命令行版本:' + process.env.version));
        process.exit();
    });

hhw
    .command('cal [exp...]')
    .description('简单算术运算')
    .action(async function(exp) {
        if (!exp || !exp.length) {
            outputErr('请输入需要计算的公式');
        } else {let formula = exp.join('');
            try {
                let value = eval(formula);
                outputInfo(formula, ' = ', value);
            } catch (e) {
                outputErr('计算式有误', formula, e);
            }

        }
    });
hhw
    .command('structure')
    .description('自动化构建代码')
    .action(async function() {
        let input = await promptInput('test');
        console.log('哦吼你成功了', input);
        process.exit();
    });


hhw
    .addHelpText('after',`
  ${skyBlue('需要更多帮助详情请使用 --helpAll')}
    `);


(async function() {
    await hhw.parseAsync(process.argv);
})()









