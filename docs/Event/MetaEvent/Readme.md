# 元事件

继承[基础类](/Event/#事件基础类)后，元事件中所有事件的某些值将转为固定，见下表:

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `PostType` | string | `meta_event` | 上报类型 |

## 生命周期

方法名: `LifeCycle`

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `MetaEventType` | string | `lifecycle` | 元事件类型 |
| `SubType` | string | `enable`、`disable`、`connect` | 事件子类型，分别表示 OneBot 启用、停用、WebSocket 连接成功 |

::: warning 注意
目前框架并不支持HTTP POST方法，因此无法接收`enable` 和 `disable`
:::

## 心跳

方法名: `HeartBeat`

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `MetaEventType` | string | `heartbeat` | 元事件类型 |
| `Status` | object | - | 状态信息 |
| `Interval` | long | - | 到下次心跳的间隔，单位毫秒 |
