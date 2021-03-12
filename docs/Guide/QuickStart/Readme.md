# 快速上手

本章会帮助你从创建项目开始写一个 QQ群"复读机"项目。

## 环境要求

在开始之前，需要先检查本地的环境。具体要求如下:

- 基本要求
  - 如无意外，go-cqhttp 能在哪个平台运行，本框架就能在哪里运行
  
- SDK开发环境
    - 操作系统: Windows10 (64bit)
    - 编译环境: Visual Studio 2019 (带有MSBuild 16.5或以上)
    - 运行环境: .NET 5/.NET Framework 4.6.1以上*
    
*:对于更具体地支持列表请点击[这里](https://github.com/dotnet/standard/blob/master/docs/versions/netstandard2.0.md)跳转查看

## 创建项目
::: tip 提示
本章节是给不了解或不清楚应该创建什么项目的开发者检视的，如果你已经知道或使用其他模板创建项目请点[这里](/Guide/QuickStart/)跳过本章节
:::
1.创建项目

打开你的Visual Studio 创建一个你喜欢的项目，这里创建一个 .NET Framework 4.7.2 的控制台项目。
::: warning 务必留意
请务必确认能够运行本框架，如不确定请点击[这里](/Guide/QuickStart/#环境要求)检查运行要求
:::
![](/QuickStart/CreateProject.png)
![](/QuickStart/CreateProject-1.png)

2.打开项目的 NuGet 管理

打开菜单 “工具” -> “NuGet包管理器” -> "管理解决方案的 NuGet 程序包"，打开之后勾选 “包括预发行版本”，在搜索框内搜索 “AuroraNative”。选中之后将其安装到项目中

![](/QuickStart/CreateProject-2.png)

3.编写代码

创建一个事件类，命名为 EventHook，并继承 Event 类。

```cs
using AuroraNative;

namespace TestBot
{
    class EventHook : Event
    {
    }
}
```

随后打开 Program.cs 添加以下代码，本文使用了正向WebSocket。因此需要传入完整的IP地址带端口号，默认值是127.0.0.1:6700 如果没变可以不传。
::: tip 小提示
本框架是支持反向WebSocket的，只要将下面的Client转为Server后，传入port参数即可(Client是传入host参数)
:::

```cs
using AuroraNative.WebSockets;

Client client = new Client();
client.host = "127.0.0.1:6700";
client.EventHook = new EventHook();
client.Create();
```

::: warning 请注意
代码中所有的Client是可以对应替换成Server的
:::

---

写到这里其实已经可以运行并连接到 go-cqhttp 了，但是由于事件类没有写东西所以什么都看不见。

---

4.编写事件代码

打开到刚刚创建好的 EventHook 类，对照[事件列表](/Event/)重写你需要的方法。本文以群复读机为例，因此重写群消息事件。

```cs
using AuroraNative.EventArgs;

public override void GroupMessage(GroupMessageArgs e)
{
    
}
```

然后你会发现，没办法调用api发送信息。诶，别担心，打开 Program.cs 声明一个公开静态的Api。并在Create方法调用后边赋值即可。

``` cs
public static Api api;

//在 client.Create() 后面添加赋值，否则会报错
api = new Api(client);
```

回到 EventHook 类,在事件中添加以下代码

```cs
Program.api.SendGroupMessage(e.GroupID,e.Message);
```

---

大功告成！现在运行起来就可以看见复读的效果了，如果不清楚添加在哪可以点击下方的箭头查看完整示例。

<details>
<summary>完整的实例代码</summary>

**Program.cs**

```cs
using System;
using AuroraNative;
using AuroraNative.WebSockets;

namespace TestBot
{
    class Program
    {
        public static Api api;
        static void Main(string[] args)
        {
            Client client = new Client();
            client.host = "127.0.0.1:6700";
            client.EventHook = new EventHook();
            client.Create();
            api = new Api(client);
            Console.ReadKey();
        }
    }
}
```


**EventHook.cs**

```cs
using AuroraNative;
using AuroraNative.EventArgs;

namespace TestBot
{
    class EventHook : Event
    {
        public override void GroupMessage(GroupMessageArgs e)
        {
            Program.api.SendGroupMessage(e.GroupID,e.Message);
        }
    }
}
```

</details>