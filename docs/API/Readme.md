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

| 字段          | 类型     | 说明       |
| ------------ | -------- | ---------- |
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

## 获取图片信息

方法名: `GetImage`

**参数**

| 字段   | 类型   | 说明           |
| ------ | ------ | -------------- |
| `Filename` | string | 图片缓存文件名(可以带后缀也可以不带后缀) |

**响应数据**

| 字段       | 类型   | 说明           |
| ---------- | ------ | -------------- |
| `Size`     | int  | 图片源文件大小 |
| `FileName` | string | 图片文件原名   |
| `Url`      | string | 图片下载地址   |

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