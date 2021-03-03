# nano-indexed

nano indexed 是一个简化的 web-indexedDB 方法

## Feature

- gzip 0.3kb, 仅仅是一个工具方法
- 很好的抽象了 set / get / remove 方法
- 自动 parse/format 对象
- 支持 uint8Array 数据结构
- 支持 autoIncrement
- 支持 Typescript
- 完全 Promise 增删查改
- 兼容没有 indexedDB，使用 localStorage 进行存储
- 兼容没有 uint8Array 的环境

## Use

```js
import { NanoIndexed } from "nano-indexed";

// 主动声明建的例子
const example = async () => {
  const db = NanoIndexed({
    dbName: "my-db",
    store: "user",
    // version?: number; // 版本
    // keyPath?: string; // 自定义对象内容作为 主键
    // autoIncrement?: boolean; // 是否自增主键
    // uint8Array?: boolean; // 是否存储为 unit8Array 数据结构
  });

  // 存储
  await db.set("page", { name: "bobo", age: 20 });

  // 读取
  const data = await db.get("page");

  // 更新部分值
  const nextData = await db.update("page", { name: "dog" });

  // 删除
  await db.remove("page");
};
example();

// 自增类型例子
const autoIncrementExample = async () => {
  const db = NanoIndexed({
    dbName: "my-db",
    store: "user",
    autoIncrement?: boolean; // 自增主键
  });

  // 存储
  await db.set(null, { name: "bobo", age: 20 });

  // 读取, 使用 int id 读取
  const data = await db.get(1);

  // 更新部分值
  const nextData = await db.update(1, { name: "dog" });

  // 删除
  await db.remove(1);
};

autoIncrementExample();
```
