import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const required=['artifacts/输入数据包.zip','artifacts/reference.zip','artifacts/关键标准答案.xlsx','artifacts/任务规格转化.xlsx','task/任务prompt.txt','task/评分表.txt','task/环境依赖.txt'];
for(const relative of required){const target=path.join(root,relative);if(!fs.existsSync(target)||fs.statSync(target).size===0)throw new Error(`缺少文件:${relative}`);}
const audit=JSON.parse(fs.readFileSync(path.join(root,'qa','windows-static-portability-audit.json'),'utf8'));
if(audit.result!=='PASS'||audit.actions_triggered!==false||audit.business_entry_run_locally!==false)throw new Error('静态兼容性审查记录不完整');
console.log(JSON.stringify({result:'PASS',files:required.length,portability:audit.result}));
