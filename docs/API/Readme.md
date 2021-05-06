# API

::: tip 小贴士
如果响应数据多于一项，通常会采用Dictionary字典格式返回，因此，你可以使用以下方法使用
`方法名()['字段名']`

`Dictionary<string, object> xxx =方法名();`
`xxx['字段名'];`
:::

## 发送消息

方法名: `SendMsg`

**参数**

| 字段名 | 数据类型 | 默认值 | 说明 |
| - | - | - | - |
| `Message` | string | - | 要发送的内容 |
| `MessageType` | string | - | 消息类型, 支持 `private`、`group` , 分别对应私聊、群组, 如不传入, 则根据传入的 `*_id` 参数判断 |
| `UserID` | long | - | 对方 QQ 号 ( 消息类型为 `private` 时需要 ) |
| `GroupID` | long | - | 群号 ( 消息类型为 `group` 时需要 ) |
| `AutoEscape` | bool | `false` | 消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `MessageID` | string | 消息 ID |

## 发送私聊消息

方法名: `SendPrivateMessage`

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `UserID` | long | - | 对方 QQ 号 |
| `Message` | string | - | 要发送的内容 |
| `AutoEscape` | bool | `false` | 消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `MessageID` | string | 消息 ID |

## 发送群聊消息

方法名: `SendGroupMessage`

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 要发送的群号 |
| `Message` | string | - | 要发送的内容 |
| `AutoEscape` | bool | `false` | 消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `MessageID` | string | 消息 ID |

## 撤回消息

方法名: `DeleteMessage`

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `MessageID` | string | - | 消息 ID |

**响应数据**

::: tip 无响应
本接口无响应数据
:::

## 获取消息

方法名: `GetMsg`

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `MessageID` | string | - | 消息 ID |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `MessageID` | string    | 消息id      |
| `RealID`    | int    | 消息真实id   |
| `Sender`     | Sender   | 发送者      |
| `Time`       | int    | 发送时间    |
| `Message`    | string  | 消息内容    |
| `RawMessage`| string  | 原始消息内容 |

## 获取合并转发内容

方法名: `GetForwardMsg`

::: danger 不可用
该方法暂时不可用 - 等待 go-cqhttp修复
:::

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `MessageID` | string | - | 消息 ID |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `Message` | JObject | 消息节点 |

## 转发合并消息到群

方法名: `SendGroupForwardMessage`

::: danger 不可用
该方法暂时不可用 - 等待 go-cqhttp修复
:::

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 要发送的群号 |
| `Message` | JArray | - | 要发送的内容 |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `MessageID` | string | 消息 ID |

## 群组踢人

方法名: `SetGroupKick`

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `UserID` | long | - | 要踢的 QQ 号  |
| `RejectAddRequest` | bool | `false` | 拒绝此人的加群请求 |

**响应数据**

::: tip 无响应
本接口无响应数据
:::

## 群组单人禁言

方法名: `SetGroupBan`

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `UserID` | long | - | 要禁言的 QQ 号  |
| `Duration` | int | `30 * 60` | 禁言时长, 单位秒, 0 表示取消禁言 |

**响应数据**

::: tip 无响应
本接口无响应数据
:::

## 群组匿名用户禁言

方法名: `SetGroupAnonymousBan`

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `Duration` | int | `30 * 60` | 禁言时长, 单位秒, 0 表示取消禁言 |
| `AnonymousFlag` | string | - | 可选, 要禁言的匿名用户的 flag (需从群消息上报的数据中获得) |
| `Anonymous` | [Anonymous](/API/Type/#anonymous-匿名信息) | - | 可选, 要禁言的匿名用户的对象 (需从群消息上报的数据中获得) |

::: tip 小贴士
AnonymousFlag 与 Anonymous 任选其一填入即可
:::

**响应数据**

::: tip 无响应
本接口无响应数据
:::

## 群组全体禁言

方法名: `SetGroupWholeBan`

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `Enable` | bool | `true` | 是否开启  |

**响应数据**

::: tip 无响应
本接口无响应数据
:::

## 群组设置管理员

方法名: `SetGroupAdmin`

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `UserID` | long | - | 要设置为管理员的 QQ 号  |
| `Enable` | bool | `true` | `true`是设置，`false` 是取消设置 |

**响应数据**

::: tip 无响应
本接口无响应数据
:::

## 设置群名片 (群备注)

方法名: `SetGroupCard`

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `UserID` | long | - | 要设置的 QQ 号  |
| `Card` | string | `null` | 群名片内容,传入`null`代表删除群名片 |

**响应数据**

::: tip 无响应
本接口无响应数据
:::

## 设置群名称

方法名: `SetGroupName`

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `GroupName` | string | - | 新群名称 |

**响应数据**

::: tip 无响应
本接口无响应数据
:::

## 设置群组成员专属头衔

方法名: `SetGroupSpecialTitle`

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `UserID` | long | - | 要设置的 QQ 号  |
| `SpecialTitle` | string | `null` | 专属头衔, 传入`null`代表删除专属头衔 |
| `Duration` | int | `-1` | 专属头衔有效期, 单位秒, -1 表示永久, 不过此项似乎没有效果, 可能是只有某些特殊的时间长度有效, 有待测试 |

**响应数据**

::: tip 无响应
本接口无响应数据
:::

## 退出群组

方法名: `SetGroupLeave`

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `IsDismiss` | bool | `false` | 是否解散(登录号必须是群主且本参数为`true`时能解散) |

**响应数据**

::: tip 无响应
本接口无响应数据
:::

## 处理加群请求 / 邀请

方法名: `SetGroupAddRequest`

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `Flag` | string | - | 加好友请求的 flag(需从上报的数据中获得) |
| `SubType`| string | - | `add` 或 `invite`, 请求类型(需要和上报消息中的 `SubType` 字段相符) |
| `Approve` | bool | `true` | 是否同意请求 |
| `Remark` | string | `null` | 添加后的好友备注(仅在同意时有效) |

**响应数据**

::: tip 无响应
本接口无响应数据
:::

## 处理加好友请求

方法名: `SetFriendAddRequest`

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `Flag` | string | - | 加好友请求的 flag(需从上报的数据中获得) |
| `Approve` | bool | `true` | 是否同意请求 |
| `Remark` | string | `null` | 添加后的好友备注(仅在同意时有效) |

**响应数据**

::: tip 无响应
本接口无响应数据
:::

## 获取登录号信息

方法名: `GetLoginInfo`

**参数**
::: tip 无参数
本接口无需参数
:::

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `UserID` | long | QQ 号 |
| `NickName` | string | QQ 昵称 |

## 获取陌生人信息

方法名: `GetStrangerInfo`

**参数**

| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `UserID` | long | - | QQ 号 |
| `Cache` | bool | `false` | 是否**不**使用缓存（使用缓存可能更新不及时, 但响应更快） |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `UserID` | long | QQ 号 |
| `NickName` | string | 昵称 |
| `Sex` | string | 性别, `male` 或 `female` 或 `unknown` |
| `Age` | int | 年龄 |
| `QID` | string | QID ID身份卡 |

## 获取好友列表

方法名: `GetFriendList`

**参数**
::: tip 无参数
本接口无需参数
:::

**响应数据**

| 字段名 | 数据类型 | 说明 |
| ----- | ------- | --- |
| `Friends` | List<[Friends](/API/Type/#friends-好友)> | 好友列表 |


## 获取群信息

方法名: `GetGroupInfo`

**参数**

| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `Cache` | bool | `false` | 是否**不**使用缓存（使用缓存可能更新不及时, 但响应更快） |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `Group` | [Groups](/API/Type/#groups-群组) | 群组对象 |

## 获取群头像

方法名: `DownloadGroupImage`

**参数**

| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `SaveTo` | string | - | 图片保存路径，需要携带文件名和文件后缀，通常后缀为.jpg |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `Yes` | bool | 返回一个布尔值确定是否成功 |

## 设置群头像

方法名: `SetGroupPortrait`

**参数**

| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `File` | string | - | 图片文件名 |
| `Cache` | int | `1` | 表示是否使用已缓存的文件 |

[1] `File` **参数**支持以下几种格式：

- 绝对路径, 例如 `file:///C:\\Users\Admin\Pictures\x.png`, 格式使用 [`file` URI](https://tools.ietf.org/html/rfc8089)
- 网络 URL, 例如 `http://i1.piimg.com/xxxx/xxxx.jpg`
- Base64 编码, 例如 `base64://iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAIAAADxJt1n/AAAAKElEQsVQ4EWPk5+RmIBcwkasRpG9UM4mhNxpgowFGMARGEwnBIEJVAAAdBgBNAZf+QAAAAABJRU5ErkJggg==`

[2] `Cache`**参数**: 通过网络 URL 发送时有效, `1`表示使用缓存, `0`关闭关闭缓存, 默认 为`1`

[3] 目前这个API在登录一段时间后因cookie失效而失效, 请考虑后使用

**响应数据**

::: tip 无响应
本接口无响应数据
:::

## 获取群列表

方法名: `GetGroupList`

**参数**
::: tip 无参数
本接口无需参数
:::

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `Groups` | List<[Groups](/API/Type/#groups-群组)> | 群列表 |

## 获取群成员信息

方法名: `GetGroupMemberInfo`

**参数**

| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `UserID` | long | - | QQ号 |
| `Cache` | bool | `false` | 是否**不**使用缓存（使用缓存可能更新不及时, 但响应更快） |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `GroupMember` | [GroupMember](/API/Type/#groupmember-群成员) | 群成员对象 |

## 获取群成员列表

方法名: `GetGroupMemberList`

**参数**

| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |

**响应数据**

::: warning 留意
有些字段可能因为内部接口原因不一致或不存在，具体信息请根据[*获取群信息*](/API/#获取群信息)为准
:::

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `GroupMembers` | List<[GroupMember](/API/Type/#groupmember-群成员)> | 群成员列表 |

## 获取群荣誉信息

方法名: `GetGroupHonorInfo`

**参数**

| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `Type` | string | - | 要获取的群荣誉类型, 可传入 `talkative` `performer` `legend` `strong_newbie` `emotion` 以分别获取单个类型的群荣誉数据, 或传入 `all` 获取所有数据 |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `HonorListInfos` | List<[HonorListInfo](/API/Type/#honorlistInfo-群荣耀信息)> | 群荣耀信息列表 |

## 获取群文件系统信息

方法名: `GetGroupFileSystemInfo`

**参数**

| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `FileCount`  | int | 文件总数   |
| `LimitCount` | int | 文件上限   |
| `UsedSpace`  | long | 已使用空间 |
| `TotalSpace` | long | 空间上限   |

## 获取群文件资源链接

方法名: `GetGroupFilesURL`

**参数**

| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `FileID` | string | - | 文件ID 参见 [File](/API/Type/#file-文件) |
| `BusID` | int | - | 文件类型 参见 [File](/API/Type/#file-文件) |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `URL`  | string | 文件下载链接   |

## 上传群文件

方法名: `UploadGroupFile`

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long  | - | 群号 |
| `FilePath`     | string | - |  本地文件路径 |
| `SaveName`     | string | - | 储存名称 |
| `Folder`   | string | `null` | 父目录ID |

::: warning 注意
在不提供 `Folder` 参数的情况下默认上传到根目录

只能上传本地文件, 需要上传 `HTTP` 文件的话请先调用 [*下载*](#下载文件到缓存目录)下载
:::

**响应数据**

::: tip 无响应
本接口无响应数据
:::

## 获取群系统消息

方法名: `GetGroupSystemMsg`

**参数**
::: tip 无参数
本接口无需参数
:::

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `InvitedRequest` | List<[InvitedRequest](/API/Type/#invitedrequest-邀请消息)> | 邀请消息列表 |
| `JoinRequest` | List<[JoinRequest](/API/Type/#joinrequest-进群)> | 进群消息列表 |

## 获取群根目录文件列表

方法名: `GetGroupRootFiles`

**参数**

| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `Files` | List<[File](/API/Type/#file-文件)> | 文件列表 |
| `Folder` | List<[Folder](/API/Type/#folder-文件夹)> | 文件夹列表 |

## 获取群子目录文件列表

方法名: `GetGroupFilesByFolder`

**参数**

| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `FolderID` | string | - | 文件夹ID |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `Files` | List<[File](/API/Type/#file-文件)> | 文件列表 |
| `Folder` | List<[Folder](/API/Type/#folder-文件夹)> | 文件夹列表 |

## 获取版本信息

方法名: `GetVersionInfo`

**参数**
::: tip 无参数
本接口无需参数
:::

**响应数据**

| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `AppName` | string | `go-cqhttp` | 应用标识, 如 `go-cqhttp` 固定值 |
| `AppVersion` | string | - | 应用版本, 如 `v0.9.40-fix5` |
| `AppFullName` | string | - | 应用完整名称 |
| `ProtocolVersion` | string | `v11` | OneBot 标准版本 固定值 |
| `CQEdition` | string | `pro` | 原CQ版本 固定值 |
| `CQDirectory` | string | - | - |
| `IsGoCqhttp` | bool | true| 是否为 go-cqhttp 固定值 |
| `PluginVersion` | string | `4.15.0` | 固定值 |
| `PluginBuildNumber` | int | 99 | 固定值 |
| `PluginBuildConfiguration` | string | `release` | 固定值 |
| `RuntimeVersion` | string | - | - |
| `RuntimeOS` | string | - | - |
| `Version` | string | - | 应用版本, 如 `v0.9.40-fix4` |
| `Protocol` | int | `0/1/2/3/-1` | 当前登陆使用协议类型 |

## 获取图片信息

方法名: `GetImage`

**参数**

| 字段名 | 数据类型   | 说明 |
| - | - | - |
| `Filename` | string | 图片缓存文件名(可以带后缀也可以不带后缀) |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `Size`     | int  | 图片源文件大小 |
| `FileName` | string | 图片文件原名   |
| `Url`      | string | 图片下载地址   |

## 检查是否可以发送图片

方法名: `CanSendImage`

**参数**
::: tip 无参数
本接口无需参数
:::

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `Yes` | bool | 是/否 |

## 检查是否可以发送语音

方法名: `CanSendRecord`

**参数**
::: tip 无参数
本接口无需参数
:::

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `Yes` | bool | 是/否 |

## 重启 go-cqhttp - 请慎用!

方法名: `SetRestart`

::: warning 留意
由于重启 go-cqhttp 同时需要重启 API 服务, 这意味着当前的 API 请求会被中断, 因此需要异步地重启, 接口返回的状态是异步的
:::

**参数**
| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `Delay` | int | 0 | 要延迟的毫秒数, 如果默认情况下无法重启, 可以尝试设置延迟为 2000 左右 |

**响应数据**

::: tip 无响应
本接口无响应数据
:::

## 获取状态

方法名: `GetStatus`

**参数**
::: tip 无参数
本接口无需参数
:::

**响应数据**

::: warning 留意
所有统计信息将在重启后重新计算
:::

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `AppInitialized` | bool       | 原 `CQHTTP` 字段, 恒定为 `true` |
| `AppEnabled`     | bool       | 原 `CQHTTP` 字段, 恒定为 `true` |
| `PluginsGood`    | bool       | 原 `CQHTTP` 字段, 恒定为 `true` |
| `AppGood`        | bool       | 原 `CQHTTP` 字段, 恒定为 `true` |
| `Online` | bool | BOT是否在线 |
| `Good`            | bool       | 同 `Online`                    |
| `Statistics` | [RunningStatistics](/API/Type/#runningstatistics-运行统计) | 运行统计 |

## 图片 OCR

方法名: `GetGroupInfo`

**参数**

| 字段名 | 数据类型  | 默认值 | 说明 |
| - | - | - | - |
| `Image` | string | - | 图片ID |

**响应数据**

| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `Texts` | List<[OCRTextDetection](/API/Type/#ocrtextdetection-ocr结果信息)> | OCR结果 |
| `Language` | string | 语言 |