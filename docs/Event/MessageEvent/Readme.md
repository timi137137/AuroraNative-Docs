# 消息事件

继承[基础类](/Event/#事件基础类)后，消息事件中所有事件的某些值将转为固定，并添加一些值，见下表:

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `PostType` | string | `message` | 上报类型 |
| `TempSource` | int [值说明](/API/Type/#tempsource-临时会话来源) | - | 临时会话来源 |
| `MessageID` | int | - | 消息 ID |
| `UserID` | long | - | 发送者 QQ 号 |
| `Message` | string | - | 消息内容 |
| `RawMessage` | string | - | 原始消息内容 |
| `Font` | int | - | 字体 |
| `Sender` | [Sender](/API/Type/#sender-发送者) | - | 发送人信息 |

## 私聊消息

方法名: `PrivateMessage`

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `MessageType` | string | `private` | 消息类型 |
| `SubType` | string | `friend`、`group`、`group_self`、`other` | 消息子类型, 如果是好友则是 `friend`, 如果是群临时会话则是 `group`, 如果是在群中自身发送则是 `group_self` |

## 群消息

方法名: `GroupMessage`

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `MessageType` | string | `group` | 消息类型 |
| `SubType` | string | `normal`、`anonymous`、`notice` | 消息子类型, 正常消息是 `normal`, 匿名消息是 `anonymous`, 系统提示 ( 如「管理员已禁止群内匿名聊天」 ) 是 `notice` |
| `GroupID` | long | - | 群号 |
| `Anonymous` | [Anonymous](/API/Type/#anonymous-匿名信息) | - | 匿名信息 |
