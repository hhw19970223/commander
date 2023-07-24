import { Command, program } from 'commander';
import { blue, outputErr, outputInfo, outputWarn, skyBlue } from '../utils/output.js';
import {promptInput, createSpinner, promptListSelect} from '../utils/common.js';
// const program = new Command();


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
        process.exit();
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
    .command('test')
    .description('测试')
    .action(async function () {
        let spinner = createSpinner({color: 'yellow', text: 'test'});
        spinner.start();
        await sleep(5000);
        spinner.succeed('成功');

        let rst = await promptListSelect(['vue', 'react', {name: 'dom1', value: 'dom2'}, 'vite'])

        console.log(rst);

        // spinner.fail("请求失败，正在重试...");
        // spinner.stop();
        // process.exit();
    })
hhw
    .addHelpText('after',`
  ${skyBlue('需要更多帮助详情请使用 --helpAll')}
    `);


(async function() {
    await hhw.parseAsync(process.argv);
})()









