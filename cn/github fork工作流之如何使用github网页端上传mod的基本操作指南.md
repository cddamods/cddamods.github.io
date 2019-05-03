　　Github fork工作流之如何使用github网页端上传mod的基本操作指南
---------------

　　**这篇教程介绍：如何用github网页端上传cataclysmdda的mod到Mod分享平台。**

　　ps：除了网页端操作之外，还可以用github desktop或TortoiseGit或git操作。尤其是一次性大批量对多个文件内容进行修改上传一起提交的时候，使用软件会更便捷高效。这里就不作详细介绍了。

　　1、首先要注册一个github帐号，如已有帐号请登录。

　　2、用浏览器打开https://github.com/cddamods/cddamods.github.io 

　　如图1点击fork，把这个项目仓库的副本复制到自己帐号里。
 
![图1](https://github.com/cddamods/cddamods.github.io/blob/master/cn/image/image001.png "图1")
　　　　　　　　　　　　　　　　　　　　　　　　　　　　图1

![图2](https://github.com/cddamods/cddamods.github.io/blob/master/cn/image/image002.png "图2") 
　　　　　　　　　　　　　　　　　　　　　　　　　　　　图2

　　Fork后回到仓库就能看到自己fork的项目，并可以看到项目是从哪个仓库fork来的。
 
![图3](https://github.com/cddamods/cddamods.github.io/blob/master/cn/image/image003.png "图3") 
　　　　　　　　　　　　　　　　　　　　　　　　　　　　图3

　　Ps：图3显示的3，表示已经有3个人fork了这个项目。

![图4](https://github.com/cddamods/cddamods.github.io/blob/master/cn/image/image004.png "图4") 
　　　　　　　　　　　　　　　　　　　　　　　　　　　　图4 主要按钮翻译
 
![图5](https://github.com/cddamods/cddamods.github.io/blob/master/cn/image/image005.png "图5") 
　　　　　　　　　　　　　　　　　　　　　　　　　　　　图5

　　3、如图5，创建新的分支，名称可随意，这里我创建了upload分支,系统自动切换到了upload分支。

　　4、在upload分支的cddamods.github.io/cn/mods里点击 upload files 上传文件。
 
![图6](https://github.com/cddamods/cddamods.github.io/blob/master/cn/image/image006.png "图6") 
　　　　　　　　　　　　　　　　　　　　　　　　　　　　图6

　　如图6，把mod压缩包拖到上图位置或者点choose your flies 手动选择文件(一次可以上传多个文件)。
 
![图7](https://github.com/cddamods/cddamods.github.io/blob/master/cn/image/image007.png "图7") 
　　　　　　　　　　　　　　　　　　　　　　　　　　　　图7

　　如图7，在Commit changes里输入说明，确定。压缩包上传完成。

　　5、直接在浏览器打开upload分支的cddamods.github.io/cn的modsinfo.json.
 
![图8](https://github.com/cddamods/cddamods.github.io/blob/master/cn/image/image008.png "图8") 
　　　　　　　　　　　　　　　　　　　　　　　　　　　　图8

　　如图8点击铅笔按钮，开始在浏览器里编辑modsinfo.json。按照readme.md的格式说明，参照已有内容，补充修改要增加的mod的介绍文字。

 
![图9](https://github.com/cddamods/cddamods.github.io/blob/master/cn/image/image009.png "图9") 
　　　　　　　　　　　　　　　　　　　　　　　　　　　　图9

　　如图9编辑好后，同样像图7那样在Commit changes里输入说明，确定。

 
![图10](https://github.com/cddamods/cddamods.github.io/blob/master/cn/image/image010.png "图10") 
　　　　　　　　　　　　　　　　　　　　　　　　　　　　图10

　　6、如图10，现在，点击上图的按钮，把upload分支与原项目（cddamods/cddamods.github.io的master分支）进行比较并推送到cddamods/cddamods.github.io。
 
![图11](https://github.com/cddamods/cddamods.github.io/blob/master/cn/image/image011.png "图11") 
　　　　　　　　　　　　　　　　　　　　　　　　　　　　图11

　　如图11，再次输入说明，确定。

![图12](https://github.com/cddamods/cddamods.github.io/blob/master/cn/image/image012.png "图12") 
　　　　　　　　　　　　　　　　　　　　　　　　　　　　图12

　　如图12，系统自动判断与原项目是否有冲突，绿√表示没有冲突。

---------------------------------

　　等项目作者或管理员审阅，如果审核通过，会将你提交的内容合并到master主分支。

　　一旦项目作者或管理员审核通过，你提交的内容就合并更新到cddamods/cddamods.github.io的master主分支。这样，mod上传就正式完成了。

---------------------------------

　　假设过了几天，你又想上传其他mod，而作者与其余贡献者已经对这个项目又做了一些修改。

　　**为了避免冲突，那你最好在他们的修改的基础上"同步你的fork"**

　　"同步你的fork"有2种有效方法：

　　方法1：直接在网页端删除你fork的项目，再重新fork。(这无疑是最暴力有效省事的方式)删除操作如下面3张图：

![图13](https://github.com/cddamods/cddamods.github.io/blob/master/cn/image/image013.png "图13") 
　　　　　　　　　　　　　　　　　　　　　　　　　　　　图13

![图14](https://github.com/cddamods/cddamods.github.io/blob/master/cn/image/image014.png "图14") 
　　　　　　　　　　　　　　　　　　　　　　　　　　　　图14

![图15](https://github.com/cddamods/cddamods.github.io/blob/master/cn/image/image015.png "图15") 
　　　　　　　　　　　　　　　　　　　　　　　　　　　　图15

　　方法2：使用git命令行同步你fork的项目，需要安装git。

　　参考：[github笔记一：保持fork之后的项目和上游同步 - 简书](https://www.jianshu.com/p/43dfe8d59b70)

---------------------------------

　　*另外，其实还有一种手动更新fork的方法：使用pull request从原项目仓库反向推送到fork仓库。*

　　**但是这样操作，好像会让之后的commit记录里出现重复的记录，所以不建议使用。**
