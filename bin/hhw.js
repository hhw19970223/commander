#!/usr/bin/env node

import { URL } from 'url'; // in Browser, the URL in native accessible on window
import { join, dirname } from "path";
import { fileURLToPath } from 'url';

(async function () {
    //定义全局变量
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    globalThis.__projectPath = join(__dirname , '../');//指向项目根目录

    const root = await import('../dist/index.js');
    root.requireCmdJS();
})()
