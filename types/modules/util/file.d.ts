/** 写文件 */
export declare function writeFile(filePath: string, content: string): void;
/** 文件内容追加 */
export declare function appendFile(filePath: string, content: string): void;
/** 读文件 */
export declare function readFile(filePath: string): string;
/** 判断文件是否存在 */
export declare function checkFileExists(filePath: string): boolean;
export declare function importESM(path: string, absolute?: boolean): Promise<any>;
