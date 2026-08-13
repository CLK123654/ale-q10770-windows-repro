# SQLite帮助中心全文索引与语言回退排名

本仓库保存帮助中心全文索引修复材料。业务附件位于artifacts，任务说明位于task。

解压输入包后，在与input_data同级的位置建立output/tools和output/reports，完成修复数据库、重建SQL与audit_search.mjs。随后进入input_data执行：

```powershell
npm run process
```
