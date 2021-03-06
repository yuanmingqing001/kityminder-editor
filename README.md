KityMinder Editor
==========



## 简介

基于 [kityminder-editor](https://github.com/fex-team/kityminder-editor) 修改，由于没有学习过AngularJS，都是照葫芦画瓢添加的代码，只是为了方便个人在不登录的情况下编辑和查看思维导图。



**在线：**[http://mind.clboy.cn](http://mind.clboy.cn)

可以在访问链接中加上md参数，指向json数据的请求地址(带上http/https)，md参数要进行URL编码，请求的地址要允许跨域，为了方便，加载后的思维导图禁止直接编辑，可先下载到本地，然后从本地加载

**例：**[http://mind.clboy.cn?md=http%3a%2f%2fmind.clboy.cn%2fdemo.json](http://mind.clboy.cn?md=http%3a%2f%2fmind.clboy.cn%2fdemo.json)



## 新增

- 导出HTML+SVG
- 根据md参数远程加载，远程加载的目的就是为了方便查看，所以禁止直接编辑，可下载到本地后从本地加载
- 原图片搜索由于跨域拿不到搜索数据，改为Bing图片搜索
- 新增`更多...`选项卡
- 新增收起全部节点按钮(原先是只收起节点Leave相同的，现改为>=)，意思就是说如果折叠2级节点，2级节点下面的都会被折叠
- 新增关闭顶部菜单按钮
- 新增只读模式和编辑模式切换
- 新增全屏模式
- 修复在只读模式开启拖拽的情况下双击会调用编辑方法，原先是根据状态判断是否是'readonly'，但是选择开启拖拽后的状态是'hand'，所以会进入编辑方法，但是此时是看不到编辑框的，就会导致选择的节点的文本变为空字符



## `已知`问题

- 图片跨域无法生成PNG
- 360安全浏览器右键菜单无法显示
- 火狐浏览器节点中如果存在链接导出PNG可能会无效，导入json可能会错位
- Chrome暂未发现问题 :white_check_mark:（强烈建议）



## 本地运行

```shell
git clone git@github.com:cloudlandboy/kityminder-editor.git
```

- 进入kityminder-editor的目录执行`bower install`(使用cdn则不需要下载)

- 打开`docs`目录下的`index.html`即可
- 脱离网络，把`docs/index.html`中css和js，bower部分注释打开，cdn部分注释掉



## 其他格式导入

对于以下格式可以在百度脑图官方的网站导入，然后以JSON格式导出。

- Freemind 格式(.mm)
- XMind 格式(.xmind)
- MindManager 格式(.mmap)



由于百度脑图官方并没有提供导出和导入JSON的快捷方式，这里借助浏览器插件[Tampermonkey](https://greasyfork.org/zh-CN) ，脚本已经上传

[<https://greasyfork.org/zh-CN/scripts/394815-%E7%99%BE%E5%BA%A6%E8%84%91%E5%9B%BE%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BAjson%E6%A0%BC%E5%BC%8F>](https://greasyfork.org/zh-CN/scripts/394815-%E7%99%BE%E5%BA%A6%E8%84%91%E5%9B%BE%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BAjson%E6%A0%BC%E5%BC%8F)

点击安装，然后刷新页面即可看到导入导出按钮