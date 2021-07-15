# 请求事件

继承[基础类](/Event/#事件基础类)后，消息事件中所有事件的某些值将转为固定，并添加一些值，见下表:

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `PostType` | string | `request` | 上报类型 |
| `UserID` | long | - | 发送请求的 QQ 号 |
| `Comment` | string | - | 验证信息 |
| `Flag` | string | - | 请求 flag, 在调用处理请求的 API 时需要传入 |

## 好友请求

方法名: `FriendAddRequest`

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `RequestType` | string | `friend` | 请求类型 |

## 群请求

方法名: `GroupAddRequest`

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `RequestType` | string | `group` | 请求类型 |
| `SubType` | string | `add`、`invite` | 请求子类型, 分别表示加群请求、邀请登录号入群 |
| `GroupID` | long | - | 群号 |
