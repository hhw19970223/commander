import { join } from "path";
import { config as dotenvConfig } from 'dotenv';
import { importESM } from './modules/util/file.js';
import { outputErr, skyBlue, outputInfo } from './modules/util/output.js';

dotenvConfig({path: join(__projectPath, '.env')});//解析环境参数

export async function requireCmdJS() {
    const config_path = join(__projectPath, 'config.js');
    const config = await importESM(config_path, true);

    let command_path = join(__projectPath, 'dist/modules/command', 'index.js');
    await importESM(command_path, true);
}
