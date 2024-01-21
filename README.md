# Ou's Friends

你这是要，交换友链吗？(´·ω·`)

## 交换要求

- 友链友链先有后链嘛，所以最好是我眼熟或认识的人喔。
  - 「眼熟」的定义为：我见过一个人至少三次并与其有互动；
  - 来自陌生人的申请会延后处理，也有可能会拒绝
- 如果是为了新鲜感而随便搭来玩的网站还是不要来啦。
- 你的网站需要已有一个稳定的域名，包括但不限于：
  - 通过付费购买的域名；
  - 可设置二级前缀的免费域名，包括但不限于 `vercel.app` `github.io` `netlify.app`；
  - 你的域名已经启用了 HTTPS；
  - 因为一些原因，暂不接受使用 `coding.me` `coding-pages.com` `gitee.io` 域名的网站的申请。
- 你的网站出现下述内容的话，我的第一印象会直线下降：
  - 暴力、血腥、R-18G、NSFW 和同类内容；
  - 非常高对比颜色，这会让眼睛不适；
  - 遍布过多甚至影响到正常访问的广告内容；
  - 最重要的一点：内容农场和采集站是万万不可以的啦。

如果你认为自己符合了要求，就可以按照下述的流程来交换啦。
 
## 交换流程流程

- 将我的网站（下述信息示例为 blog）添加到你的友链列表中
  - 站点名称：Restent's Notebook [非强制]
  - URL：`https://blog.gxres.net`
  - Slogan：`静寂に問う 答えを求めて` [非强制]
  - Logo
    - [我的头像](https://library.gxres.net/images/icons/avatar.webp)
    - [站点图标](https://library.gxres.net/images/icons/favicon.webp)
  - Banner
    - 如果你的友链样式需要 Banner / 背景图，可以使用 [这个](https://library.gxres.net/images/bg.webp)
- 准备好你的网站信息
  - 标准情况下你需要提供 `站长名称`、`Slogan` 和 `网站链接`
  - 你需要自备一个 256x 的 WebP 格式头像，如果实在不方便可找我帮你转换；
  - 请确保你提供的信息是适合全年龄段的人群的内容。
- Fork 本仓库到你的账号。
- 打开本仓库的 `img` 文件夹，将你自备的头像上传到这里，并命名为你的名字（字母请小写）。
- 打开本仓库的 `links.json` 并在最末尾添加你的站点。
  - 下述是一个对你有用的示例：
    ``` json
    {
        "name": "站长名称",
        "slogan": "Slogan",
        "avatar": "https://links.slirv.vip/img/{你命名的名称}.webp",
        "link": "网站链接"
    }
    ```
    - 请将 `avatar` 一行的、包含括号在内的内容改为你命名的头像名称，注意 **不要更改原始 URL**。
  - 请严格遵循 JSON 的格式编写。
- 确认你填写的信息是否无误，并开启一个 Pull Request。
- 当你的 Pull Request 按流程顺利合并后，你的网站将会在 12 个小时内显示在我的友链页。

## 写在最后

严格来说，一旦最后 Pull Request 顺利合并，你的友链将不会被移除，除非这个仓库删库跑路了。

但是，因下述两种原因，你的友链可能在命中时被我移除：
- 逛友链时遇到了无法访问的问题（例如 `404`、`502`、`522` 等）；
- 在整理友链时不小心丢失数据。

你完全可以在出现这种状况时向我提出重新添加友链的要求，但请在发起 Pull Request 时带上 `#LOST` 的 Tag。

---

Repo inspired by [SukkaW/Friends](https://github.com/SukkaW/Friends)