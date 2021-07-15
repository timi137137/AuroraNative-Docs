# 通知事件

继承[基础类](/Event/#事件基础类)后，通知事件中所有事件的某些值将转为固定，并添加一些值，见下表:

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `NoticeType` | string | - | 通知类型 |
| `UserID` | long | - | 发送者QQ号 |

## 群文件上传

方法名: `GroupUpload`

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `File` | [File](/API/Type/#file-文件) | - | 文件信息 |

## 群管理员变动

方法名: `GroupManageChange`

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `SubType` | string | `set`,`unset` | 事件子类型, 分别表示设置和取消管理员 |

## 群成员减少

方法名: `GroupMemberDecrease`

::: tip 留意
该方法另外附带了一些属性，参见[群通知事件基类](/API/Type/#groupnoticeargs-群通知事件基类)
:::

**事件数据**

::: tip 小贴士
本方法没有更多数据
:::

## 群成员增加

方法名: `GroupMemberIncrease`

::: tip 留意
该方法另外附带了一些属性，参见[群通知事件基类](/API/Type/#groupnoticeargs-群通知事件基类)
:::

**事件数据**

::: tip 小贴士
本方法没有更多数据
:::

## 群禁言

方法名: `GroupBanSpeak`

::: tip 留意
该方法另外附带了一些属性，参见[群通知事件基类](/API/Type/#groupnoticeargs-群通知事件基类)
:::

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `Duration` | long | - | 禁言时长，单位秒 |

## 好友添加

方法名: `FriendAdd`

**事件数据**

::: tip 小贴士
本方法没有更多数据
:::

## 群消息撤回

方法名: `GroupMessageRecall`

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `OperatorID` | long | 操作者QQ |
| `MessageID` | long | 消息ID |

## 好友消息撤回

方法名: `PrivateMessageRecall`

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `MessageID` | long | 消息ID |

## 群内戳一戳

方法名: `GroupPoke`

::: tip 留意
该方法另外附带了一些属性，参见[戳一戳通知事件基类](/API/Type/#pokeeventargs-戳一戳通知事件基类)
:::

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |

## 好友戳一戳

方法名: `PrivatePoke`

::: tip 留意
该方法另外附带了一些属性，参见[戳一戳通知事件基类](/API/Type/#pokeeventargs-戳一戳通知事件基类)
:::

**事件数据**

::: tip 小贴士
本方法没有更多数据
:::

## 群红包运气王提示

方法名: `GroupRedPoketLuckyKing`

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `SubType` | string | - | 提示类型 |
| `TargetID` | long | - | 运气王 QQ 号 |

## 群成员荣耀变更提示

方法名: `GroupMemberHonorChange`

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `SubType` | string | - | 提示类型 |
| `HonorType` | string | - | 荣誉类型 |

## 群成员名片更新(核验)

方法名: `GroupCardVerify`

::: warning 注意
此事件不保证时效性, 仅在收到消息时校验卡片
:::

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `CardNew` | string | - | 新名片 |
| `CardOld` | string | - | 旧名片 |

## 接收到离线文件

方法名: `GetOfflineFile`

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `File` | [File](/API/Type/#file-文件) | - | 文件信息 |

## 其他客户端在线状态变更

方法名: `ClientStatusChange`

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `Client` | [Device](/API/Type/#device-设备) | - | 客户端信息 |
| `Online` | bool | - | 当前是否在线 |

## 精华消息变更

方法名: `EssenceMessageChange`

**事件数据**

| 字段名 | 数据类型 | 可能的值 | 说明 |
| - | - | - | - |
| `GroupID` | long | - | 群号 |
| `SubType` | string | `add`,`delete` | 子类型 |
| `OperatorID` | long | 操作者QQ |
| `MessageID` | long | 消息ID |
