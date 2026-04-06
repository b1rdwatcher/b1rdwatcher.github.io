# 复古论坛网站：最简单部署说明

这个文件夹里有 3 个主要文件：

- `index.html`：网页本体
- `config.js`：你以后改图片、改公告、填 Supabase 信息的地方
- `README.md`：这份说明书

---

## 一、先别怕，你只要记住一件事

你不需要会编程。

你要做的，其实像做菜一样，只有 4 步：

1. 先去做一个 **Supabase 账号**
2. 把我给你的那段 **数据库文字** 复制进去
3. 把 Supabase 给你的两串信息，粘贴到 `config.js`
4. 把整个文件夹上传到 **Netlify**

做完以后，你的网站就能：
- 大家一起留言
- 大家一起累计献花
- 你自己换图片

---

## 二、你最需要改的地方只有一个文件

打开 `config.js`

你会看到这些内容：

- `topIpImage`
- `leftFigureImage`
- `rightFigureImage`
- `block2Images`
- `block3Images`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

### 它们是干什么的

#### 1）顶部小图
`topIpImage`

把引号里的内容改成图片网址。

例子：

```js
topIpImage: 'https://你的图片地址.com/a.png',
```

#### 2）左边小人和右边小人
```js
leftFigureImage: '图片地址',
rightFigureImage: '图片地址',
```

#### 3）板块2和板块3随机图
把 7 张图的网址填进去：

```js
block2Images: [
  '图1地址',
  '图2地址',
  '图3地址',
  '图4地址',
  '图5地址',
  '图6地址',
  '图7地址'
],
```

---

## 三、先去做 Supabase

### 第一步：注册
打开 Supabase 网站，注册一个账号。

### 第二步：新建项目
登录后，点：

- `New project`

然后照着填：
- 名字随便起，比如 `retro-forum`
- 密码自己记好
- 地区随便选离你近的

等它自己建好，通常要等一会儿。

---

## 四、把数据库建出来

项目建好后，找到左边菜单里的：

- `SQL Editor`

进去后，点新建查询，把 `config.js` 最下面那段 `SUPABASE_SQL` 全部复制进去，再点运行。

### 怎么复制那段 SQL

打开 `config.js`，找到：

```js
export const SUPABASE_SQL = `
...
`;
```

把反引号里面的所有内容复制出来，粘贴到 Supabase 的 SQL Editor 里运行。

运行成功后，你的网站数据库就做好了。

---

## 五、把 Supabase 的两串钥匙抄回来

在 Supabase 项目里找到：

- `Project Settings`
- `API`

你会看到两样东西：

### 1）Project URL
把它复制下来，填进 `config.js` 的：

```js
export const SUPABASE_URL = '这里';
```

### 2）anon public key
把它复制下来，填进：

```js
export const SUPABASE_ANON_KEY = '这里';
```

保存文件。

---

## 六、最适合新手的发布方法：Netlify

### 方法非常简单

1. 去注册 Netlify
2. 登录后，找到上传网站的地方
3. 把整个 `retro_forum_publishable` 文件夹拖进去

它会自动给你一个网址。

这一步很像把照片拖进网盘。

---

## 七、最笨也能成功的发布顺序

你就按这个顺序做：

### 第 1 步
把这个文件夹下载到电脑上

### 第 2 步
打开 `config.js`

### 第 3 步
把你自己的图片网址填进去

### 第 4 步
去 Supabase 建项目

### 第 5 步
把 SQL 粘进去运行

### 第 6 步
把 Supabase 的 URL 和 key 粘贴回 `config.js`

### 第 7 步
保存

### 第 8 步
把整个文件夹拖到 Netlify 发布

---

## 八、如果你不会“打开代码文件”

最简单的方法：

### Windows
1. 在文件上点右键
2. 选“打开方式”
3. 选“记事本”

### Mac
1. 双击不行的话，右键
2. 选“打开方式”
3. 选“文本编辑”

---

## 九、哪些地方以后你可以自己改

### 改公告
在 `config.js` 里改：

```js
marqueeContent: '这里改成你的公告',
```

### 改左右小人
```js
leftFigureImage: '左边图片地址',
rightFigureImage: '右边图片地址',
```

### 改顶部小图
```js
topIpImage: '顶部图片地址',
```

### 改板块2和板块3图片
把数组里的地址换掉就行。

---

## 十、如果页面打开后不显示留言和献花

通常只看这 3 件事：

### 1）`SUPABASE_URL` 有没有填对
### 2）`SUPABASE_ANON_KEY` 有没有填对
### 3）SQL 有没有真的运行成功

---

## 十一、最常见的小提醒

- 图片最好用能直接打开的图片网址
- 改完 `config.js` 一定要保存
- 发布时要上传整个文件夹，不是只上传 `index.html`
- 如果你以后换图，只要改 `config.js` 再重新上传一次

---

## 十二、给你一句最短版本

### 你只需要记住：

**改 `config.js` → 去 Supabase 建库 → 把整个文件夹拖到 Netlify**

---

## 十三、文件夹内容检查

上传前，请确认文件夹里至少有：

- `index.html`
- `config.js`
- `README.md`

这样就可以了。
