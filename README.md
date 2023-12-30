# Ou's Friends

~~完了，身边人怎么个个都是 dalao~~

## 要求

- 最好是我比较眼熟的人喔
  - 「眼熟」的定义为：我见过你至少 3-5 次
  - 一般路过陌生人的申请我可能也会通过，但是通过率未知
- 站点请务必使用一个能稳定服务的域名
  - 定义 1：你在一年内没有频繁更换的付费域名
  - 定义 2：能够设定二级前缀的免费域名（诸如 `vercel.app`、`github.io`、`js.org`）
  - 由于一些原因，你不得在申请时使用下述域名：
    - `gitee.io`
    - `coding.me`
    - `coding.io`
    - `coding-pages.com`
- 请务必确认网站内没有安插有令人不适的内容
  - 示例 1：暴力、血腥、R-18、NSFW 等；
  - 示例 2：非常高对比颜色（这会让人的眼睛很不适）；
  - 示例 3：遍布过多甚至影响正常访问的广告内容；
  - 更详细的「令人不适的内容」的最终解释权归我所有
- 我并不喜欢划水到极致的网站，下述是相关定义：
  - 标准情况下指过度采集他人文章、接近 0 原创文章的现象
  - 「字数少的实质文稿」、「少量性转载」等并不在内
 
如果你认为自己符合了要求，可以来交换啦。
 
## 流程

- 将我的网站（下述信息示例为 blog）添加到你的友链列表中
  - 站点名称：Restent's Notebook [非强制]
  - URL：`https://blog.restent.win`
  - Slogan：`静寂に問う 答えを求めて` [非强制]
  - Logo
    - [我的头像](https://library.restent.win/images/icons/avatar.webp)
    - [SliverRiver's avatar](https://library.restent.win/images/icons/SliverRiver.webp)
    - [站点图标](https://library.restent.win/images/icons/favicon.webp)
  - Banner
    - 如果你的友链样式需要 Banner / 背景图，可以使用 [这个](https://library.restent.win/images/profile.webp)
- 准备好你的网站信息
  - 标准情况下你需要提供 `站长名称`、`Slogan`、`头像链接` 和 `网站链接`
    - 在很久之前，出于一些方面考虑，目前友链 Title 只能使用站长名称
    - 你的头像应为对称的 方形 或 圆形，否则加载时可能出现一些问题
    - **请确认你提供的头像链接对国内访问友好并且能够正常加载，否则通过申请时的头像链接将会指向你的 GitHub 头像。**
  - 请确保你提供的信息是适合全年龄段的人群的内容
- 打开本仓库的 `links.json` 并在最末尾添加你的站点
  - 下述是一个对你有用的示例：
    ``` json
    {
        "name": "站长名称",
        "slogan": "Slogan",
        "avatar": "头像链接",
        "link": "网站链接"
    }
    ```
  - 请严格遵循 JSON 的格式编写。
- 确认你填写的信息是否无误，并开启一个 Pull Request。
- 当你的 Pull Request 按流程顺利合并后，你的网站将会在 12 个小时内显示在我的友链页。

## 写在最后

严格来说，一旦最后 Pull Request 顺利合并，你的友链将不会被移除，除非这个仓库删库跑路了。

但是，因下述两种原因，你的友链可能在命中时被我移除：
- 逛友链时遇到了无法访问的问题（例如 `404`、`502`、`522` 等）；
- 在整理友链时不小心丢失数据。

你完全可以在出现这种状况时向我提出重新添加友链的要求，但请在发起 Pull Request 时带上 `#LOST` 的 Tag。
