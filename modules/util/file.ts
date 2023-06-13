module.exports = {
    /** 写文件 */
    writeFile(filePath: string, content: string) {
        fs.writeFileSync(filePath, content);
    },

    /** 文件内容追加 */
    appendFile(filePath: string, content: string) {
        fs.appendFile(filePath, content);
    },

    /** 读文件 */
    readFile(filePath: string) {
        let content = fs.readFileSync(filePath, 'utf8');
        return content
    },

    /** 判断文件是否存在 */
    checkFileExists: async (filePath: string) => {
        try {
            await fs.promises.access(filePath);
            return true;
        } catch (error) {
            return false;
        }
    }
}

async function checkFileExists(filePath) {

}
