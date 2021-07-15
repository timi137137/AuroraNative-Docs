# 类型

## Anonymous - 匿名信息

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `ID` | long | 匿名用户ID |
| `Name` | string | 匿名用户名称 |
| `Flag` | string | 匿名用户 flag, 在调用禁言 API 时需要传入 |

## BaseRequest - 群系统消息基类

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `RequestID` | long | 请求ID |
| `GroupID` | long | 群号 |
| `GroupName` | string | 群名称 |
| `Checked` | bool | 是否已处理 |
| `Actor` | long | 处理者QQ号,未处理则为0 |

## Device - 设备

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `AppID`        | long | 客户端ID                 |
| `Name`      | string | 设备名称                 |
| `Type`          | string  | 设备类型               |

## Essences - 精华消息

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `SenderID`        | long | 发送者QQ号                 |
| `SenderNickName`      | string | 发送者昵称                 |
| `SenderTime`          | string  | 消息发送时间               |
| `OperatorID`        | long | 操作者 QQ号                 |
| `OperatorNickName`      | string | 操作者昵称                 |
| `OperatorTime`          | string  | 精华设置时间               |
| `MessageID`          | string  | 消息ID               |

## File - 文件

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `FileID`        | string | 文件ID                 |
| `FileName`      | string | 文件名                 |
| `BusID`          | int  | 文件类型               |
| `FileSize`      | long  | 文件大小               |
| `UploadTime`    | long  | 上传时间               |
| `DeadTime`      | long  | 过期时间,永久文件恒为0 |
| `ModifyTime`    | long  | 最后修改时间           |
| `DownloadsCount` | int  | 下载次数               |
| `Uploader`       | long  | 上传者ID               |
| `UploaderName`  | string | 上传者名字             |

## Folder - 文件夹

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `FolderID`        | string | 文件夹ID   |
| `FolderName`      | string | 文件名     |
| `CreateTime`      | long  | 创建时间   |
| `Creator`          | long  | 创建者     |
| `CreatoName`     | string | 创建者名字 |
| `TotalFilesCount` | int  | 子文件数量 |

## Friends - 好友

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `UserID` | long | QQ号 |
| `NickName` | string | 昵称 |
| `Remark` | string | 备注 |

## Groups - 群组

::: warning 留意
请注意，以下字段可能因为各种原因不存在。请注意甄别

`GroupCreateTime`
`GroupLevel`
`MemberCount`
`MaxMemberCount`
:::

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `GroupID` | long | 群号 |
| `GroupName` | string | 群名称 |
| `GroupRemark` | string | 群备注 |
| `GroupCreateTime` | uint | 群创建时间 |
| `GroupLevel` | uint | 群等级 |
| `MemberCount` | int | 成员数 |
| `MaxMemberCount` | int | 最大成员数(群容量) |

## GroupNoticeArgs - 群通知事件基类

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `GroupID` | long | 群号 |
| `SubType` | string | 事件子类型 |
| `OperatorID` | long | 操作者QQ |

## GroupMember - 群成员

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `GroupID` | long | 群号 |
| `UserID` | long | QQ 号 |
| `NickName` | string | 昵称 |
| `Card` | string | 群名片／备注 |
| `Sex` | string | 性别, `male` 或 `female` 或 `unknown` |
| `Age` | int | 年龄 |
| `Area` | string | 地区 |
| `JoinTime` | int | 加群时间戳 |
| `LastSentTime` | int | 最后发言时间戳 |
| `Level` | string | 成员等级 |
| `Role` | string | 角色, `owner` 或 `admin` 或 `member` |
| `UnFriendly` | bool | 是否不良记录成员 |
| `ExclusiveTitle` | string | 专属头衔 |
| `ExclusiveTitleTime` | long | 专属头衔过期时间戳 |
| `IsChangeCard` | bool | 是否允许修改群名片 |

## HonorListInfo - 群荣耀信息

::: warning 留意
请注意，以下字段可能因为各种原因不存在。请注意甄别

`Description`
`DayCount`
:::

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `UserID` | long | QQ号 |
| `NickName` | string | 昵称 |
| `Avater` | string | 头像URL |
| `Description` | string | 荣耀描述 |
| `DayCount` | string | 持续天数 |

## InvitedRequest - 邀请信息

::: tip 提醒
本类型基于[BaseRequest - 群系统消息基类](/API/Type/#baserequest-群系统消息基类)扩展，因此包含其所有属性
:::

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `InvitorUserID` | long | 邀请者QQ号 |
| `InvitorNickName` | string | 邀请者昵称 |

## JoinRequest - 进群信息

::: tip 提醒
本类型基于[BaseRequest - 群系统消息基类](/API/Type/#baserequest-群系统消息基类)扩展，因此包含其所有属性
:::

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `RequesterUserID` | long | 请求者QQ号 |
| `RequesterNickName` | string | 请求者昵称 |
| `Message` | string | 验证信息 |

## Messages - 消息

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `Anonymous` | [Anonymous](/API/Type/#anonymous-匿名信息) | 请求者QQ号 |
| `Font` | int | 请求者昵称 |
| `GroupID` | long | 群号 |
| `Message` | string | 消息内容 |
| `RawMessage` | string | 原始消息内容 |
| `MessageID` | int | 消息ID |
| `MessageSeq` | long | 消息序号 |
| `MessageType` | string | 消息类型 |
| `PostType` | string | 消息事件主类型 |
| `SubType` | string | 消息事件子类型 |
| `SelfID` | int | 收到事件的机器人QQ号 |
| `Sender` | [Sender](/API/Type/#sender-发送者) | 发送者 |
| `TimeStamp` | long | 消息时间戳 |
| `UserID` | long | 发送者QQ号 |

## Model - 机型

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `Name` | string | 机型名称 |
| `IsPay` | bool | 是否需要付费 |

## OCRTextDetection - OCR结果信息

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `Text` | string | 文本 |
| `Confidence` | int | 置信度 |
| `Coordinates` | Vector2 | 坐标 |

## PokeEventArgs - 戳一戳通知事件基类

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `SubType` | string | 提示类型 |
| `TargetID` | long | 被戳QQ |

## RunningStatistics - 运行统计

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `PacketReceived`  | ulong | 收到的数据包总数 |
| `PacketSent`      | ulong | 发送的数据包总数 |
| `PacketLost`      | uint | 数据包丢失总数   |
| `MessageReceived` | ulong | 接受信息总数     |
| `MessageSent`     | ulong | 发送信息总数     |
| `DisconnectsCount` | uint | TCP 链接断开次数 |
| `LostsCount`       | uint | 账号掉线次数     |

## Sender - 发送者

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `UserID`  | long | 发送者QQ号 |
| `NickName`      | string | 昵称 |
| `Sex`      | string | 性别   |
| `Age` | int | 年龄     |
| `Card`     | string | 群名片 / 备注     |
| `Area` | string | 地区 |
| `Level`       | string | 成员等级     |
| `Role`       | string | 角色     |
| `Title`       | string | 专属头衔     |

## TempSource - 临时会话来源

| 类型 | 来源 |
| - | - |
| 0 | 群聊 |
| 1 | QQ咨询 |
| 2 | 查找 |
| 3 | QQ电影 |
| 4 | 热聊 |
| 6 | 验证消息 |
| 7 | 多人聊天 |
| 8 | 约会 |
| 9 | 通讯录 |
