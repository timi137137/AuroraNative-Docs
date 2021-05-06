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

## InvitedRequest - 邀请消息

::: tip 提醒
本类型基于[BaseRequest - 群系统消息基类](/API/Type/#anonymous-匿名信息)扩展，因此包含其所有属性
:::

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `InvitorUserID` | long | 邀请者QQ号 |
| `InvitorNickName` | string | 邀请者昵称 |

## JoinRequest - 进群

::: tip 提醒
本类型基于[BaseRequest - 群系统消息基类](/API/Type/#anonymous-匿名信息)扩展，因此包含其所有属性
:::

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `RequesterUserID` | long | 请求者QQ号 |
| `RequesterNickName` | string | 请求者昵称 |
| `Message` | string | 验证信息 |

## OCRTextDetection - OCR结果信息

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `Text` | string | 文本 |
| `Confidence` | int | 置信度 |
| `Coordinates` | Vector2 | 坐标 |

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