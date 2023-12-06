# 简介

## AuroraNative

基于 [go-cqhttp](https://github.com/Mrs4s/go-cqhttp) 与 [OneBot](https://github.com/howmanybots/onebot) 标准所实现的一个 C# 开发框架，由于某些原因部分功能暂无法使用。如快速操作等。

并且本框架可以支持.NET 5/.NET Framework 4.6.1以上使用，使用.NET 5可以快捷开发一个跨平台的机器人。

::: warning 注意
由于go-cqhttp 项目遭到不可抗力因素，本项目现已停止更新并归档，详情请看 —> https://github.com/Mrs4s/go-cqhttp/issues/2471
:::

![](https://img.shields.io/badge/OneBot-v11-blue?style=flat-square)
![](https://img.shields.io/badge/go--cqhttp-v1.0.0--beta4-blueviolet?style=flat-square)
![](https://img.shields.io/nuget/vpre/AuroraNative?style=flat-square)

## go-cqhttp - 来自官方文档

使用 [mirai](https://github.com/mamoe/mirai) 以及 [MiraiGo](https://github.com/Mrs4s/MiraiGo) 开发的 cqhttp golang 原生实现, 并在 [cqhttp 原版](https://github.com/richardchien/coolq-http-api) 的基础上做了部分修改和拓展。
文档目前还在撰写中。

测试版可前往 [go-cqhttp Release](https://github.com/Mrs4s/go-cqhttp/releases) 下载。

<a href="https://github.com/Mrs4s/go-cqhttp/releases">
    <img src="https://img.shields.io/github/v/release/Mrs4s/go-cqhttp?color=blueviolet&include_prereleases" alt="release">
</a>
<a href="https://github.com/Mrs4s/go-cqhttp/actions">
    <img src="https://github.com/Mrs4s/go-cqhttp/workflows/CI/badge.svg" alt="action">
</a>

## 兼容性

通讯方式
- [ ] HTTP
- [ ] HTTP POST
- [x] 正向 WebSocket
- [x] 反向 WebSocket

## 关于 Issue
如果没有大问题请到 Discussions 处提问

以下 Issue 会被直接关闭
- 询问已知问题
- 提问找不到重点
- 重复提问

::: warning 注意
不管什么时候，开发者并没有义务回复您的问题, 您应该具备基本的提问技巧。
:::
