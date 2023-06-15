# Commander
> 先将hhw命令注册至全局<font color='red'> npm link ./</font>
<hr>

### 目录

- <h3>[Commander](#commander)</h3>
    - [安装](#安装)
    - [声明program变量](#声明program变量)
    - [选项](#选项)
    - [命令](#命令)
    - [自动化帮助信息](#自动化帮助信息)
    - [自定义事件监听](#自定义事件监听)
    - [零碎知识](#零碎知识)

<br>

### 安装

```sh
npm install commander
```

### 声明program变量

为简化使用，Commander 提供了一个全局对象。本文档的示例代码均按此方法使用：

```js
// CommonJS (.cjs)
const { program } = require('commander');
```

如果程序较为复杂，用户需要以多种方式来使用 Commander，如单元测试等。创建本地 Command 对象是一种更好的方式：

```js
// CommonJS (.cjs)
const { Command } = require('commander');
const program = new Command();
```
### 选项

### 命令

### 自动化帮助信息
可以添加额外的帮助信息，与内建的帮助一同展示。


```js
program
  .option('-f, --foo', 'enable some foo');

program.addHelpText('after', `

Example call:
  $ custom-help --help`);
```

将会输出以下的帮助信息：

```Text
Usage: custom-help [options]

Options:
  -f, --foo   enable some foo
  -h, --help  display help for command

Example call:
  $ custom-help --help
```

位置参数对应的展示方式如下：

- `beforeAll`：作为全局标头栏展示
- `before`：在内建帮助信息之前展示
- `after`：在内建帮助信息之后展示
- `afterAll`：作为全局末尾栏展示

`beforeAll`和`afterAll`两个参数作用于命令及其所有的子命令。

第二个参数可以是一个字符串，也可以是一个返回字符串的函数。对后者而言，为便于使用，该函数可以接受一个上下文对象，它有如下属性：

- `error`：boolean 值，代表该帮助信息是否由于不当使用而展示
- `command`：代表展示该帮助信息的`Command`对象


### 自定义事件监听

### 零碎知识