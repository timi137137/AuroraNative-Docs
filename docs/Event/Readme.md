# 事件

## 事件基础类

每个事件都必定拥有以下字段，框架中将其打包为`事件基础类(AuroraNative.EventArgs.Base)`供事件继承
| 字段名 | 数据类型 | 说明 |
| - | - | - |
| `TimeStamp` | long | 事件发生的时间戳 |
| `SelfID` | long | 收到事件的机器人 QQ 号 |
| `PostType` | string | 上报类型 |

## 事件分类

大致上，事件分为四大类：
- [元事件](/Event/MetaEvent/)
- [消息事件](/Event/MessageEvent/)
- [请求事件](/Event/RequestEvent/)
- [通知事件](/Event/NoticeEvent/)
