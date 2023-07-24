import { createInterface } from 'readline';
import {blue, outputErr, outputInfo, outputWarn, skyBlue} from './output.js';
import { Color } from 'ora';
import ora from 'ora';
import Inquirer from 'inquirer';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

/** 提示输入 */
export function promptInput(msg): Promise<any> {
    return new Promise((resolve, reject) => {
        rl.question(blue(msg + ':   '), (input: string) => {
            resolve(input);
        });
    }).catch(err => {
        console.error(err);
    })
}

/** 选择 */
export async function promptListSelect (choices: (string | {name: string, value: string})[], message?: string, name?: string): Promise<string> {
    let rst = await new Inquirer.prompt([{
        type: "list",
        name: name || "type",
        message: message || '请选择类型',
        choices: choices.map(item => {
            if (item && typeof item === 'string') {
                return {name: item, value: item};
            } else {
                return item;
            }
        }).filter(item => item)
    }]);
    console.log(rst);
    return rst.type;
};

export function createSpinner(opt: {color?: Color, text?: string}) {
    return ora({
        color: opt.color,
        text: opt.text
    })
}