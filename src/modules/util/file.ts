import { promises, writeFileSync, appendFileSync, readFileSync, existsSync } from 'node:fs';

/** 写文件 */
export function writeFile(filePath: string, content: string) {
    writeFileSync(filePath, content);
}

/** 文件内容追加 */
export function appendFile(filePath: string, content: string) {
    appendFileSync(filePath, content);
}

/** 读文件 */
export function readFile(filePath: string) {
    let content = readFileSync(filePath, 'utf8');
    return content
}

/** 判断文件是否存在 */
export function checkFileExists(filePath: string) {
    return existsSync(filePath);
}

export async function importESM(path: string, absolute?: boolean) {
    if (absolute) {
        path = 'file://' + path;
    }
    return await import(path);
}
