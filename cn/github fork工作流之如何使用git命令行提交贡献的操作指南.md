# Github fork工作流之如何使用git命令行提交贡献的基本操作指南

　　**这篇教程除了pull request的操作需要在网页上提交，其他的操作都可以脱离github网页进行。**

　　使用工具：Git for Windows, 谷歌或者360等网页浏览器,Notepad++等文本编辑器。

----------------------------------

　 **一.fork仓库并且克隆到本地**
----------------------------------

　　首先，点击 fork 项目仓库到自己帐号下，然后就可以在自己的帐号下 clone 相应的仓库。

　　可以下载使用github desktop(github桌面端)或者git Gui(git图形界面)或者TortoiseGit(图形界面)或者git Bash 命令行或者 git cmd 命令行克隆下载fork的项目仓库到本地。

　　克隆一个仓库，首先必须知道仓库的地址，然后使用git clone命令克隆。Git支持多种协议，包括https，但通过ssh支持的原生git协议速度最快。

　　点击绿色的"clone and download"按钮，复制里面的链接，得到"https://github.com/你的github帐号/仓库名称.git"这样格式的https链接。

　　如果你配置了ssh密钥，可以点下"use SSH",复制里面的链接，得到"git@github.com:你的github帐号/仓库名称.git" 这样格式的ssh链接。

----------------------------------

　 **二.打开git命令行**
----------------------------------

　　Git Bash可以设置快速编辑模式，在输入命令示界面可以很方便的使用复制和粘贴(用左键选取要复制的，点右键直接就可以复制，粘贴时只需点一下右键。)

　　设置方法：Git Bash快捷图标（桌面图标）或者在打开的窗口标题位置，右键属性-选项，把快速编辑模式勾上就可以。

　　**1.如果在第一步你没有使用前面提到的图形界面软件克隆到本地，请打开git Bash。**

　　输入以下代码：

```Bash
git clone https://github.com/你的github帐号/仓库名称.git
```

　　或者SSH链接：

```Bash
git clone git@github.com:你的github帐号/仓库名称.git
```

　　**上述操作将拷贝该项目的master主分支，可能使用github desktop(github桌面端)或者git Gui(git图形界面)或者TortoiseGit可以把其他分支也拷贝到本地。**

　　**2.如果在第一步你已经把仓库已经克隆到本地了，可以输入本地已经克隆好的本地目录文件夹来切换到工作目录。**

```Bash
cd /f/code/githubtest　#其中f为F盘小写，参考这个格式，调整输入本地目录文件夹的路径,我电脑上文件夹是F:\code\github-test
```

　　或者也可以直接在克隆好的本地目录文件夹右击的菜单里点击“git Bash here”。

　　也可以github desktop(github桌面端)或者git Gui(git图形界面)里找到打开命令行的按钮，这样命令行会自动切换到本地仓库的文件夹。

----------------------------------

　 **三.设置远端仓库**
----------------------------------

```Bash
git remote -v　#查看当前的远端仓库地址
```

　　如果只有两行：

origin https://github.com/你的github帐号/仓库名称.git(fetch)

origin https://github.com/你的github帐号/仓库名称.git(push)

　　那么还需要输入：

```Bash
git remote add upstream https://github.com/上游的github帐号/仓库名称.git　#添加一个别名为 upstream（上游）的地址，指向之前 fork 的原仓库地址。

git remote -v　#再次查看当前的远端仓库地址
```

　　如果显示有四行：两行origin和两行upstream，说明已经成功设置远端仓库

----------------------------------

　 **四.在本地新建开发分支develop**
----------------------------------

```Bash
git branch develop　#新建分支develop

git checkout develop　#手动切换到develop分支
```

----------------------------------

　 **五.在本地修改内容(包括新增、删除、修改)**
----------------------------------

----------------------------------

　 **六.在本地改动内容之后上传到远端仓库**
----------------------------------

```Bash
git status　#查看项目的当前状态(或者使用 -s 查看项目的当前简要状态)

git add *　#或者git add .添加文件到缓存

git rm 文件名.扩展名　#移除文件。如果文件名包含空格如“1 2 3.txt”，`git rm 1" "2" "3.txt`(使用 --cached 移除出缓存区但是在文件夹里保留文件，或者 -f 强制删除)

git status -s　#再次查看项目的当前简要状态，确保所有改动文件添加到缓存

git commit -m '注释信息'　#记录缓存内容的快照并提交注释

git push origin develop　#推送到远端origin的develop分支
```

----------------------------------

　 **七.发起pull request**
----------------------------------

　　在github网页端develop分支上发起pr到上游项目仓库，等待上游项目仓库维护者审核合并到master主线。

　　此次提交的内容结束，你可以去干其他事情了。

----------------------------------

　 **八.手动更新自己帐号的fork项目的master分支**
----------------------------------

　　如果过了几小时或者几天，你发现上次你提交的内容已经合并到主线之后，上游项目维护者和其他贡献者也可能做了其他内容的修改并合并到了主线。

　　**所以，现在上游项目仓库的master主线比你fork的master主线已经领先了几个commit。**

　　而这时候，你还想继续提交新的内容。

　　**但是在这之前，你需要手动更新自己帐号的fork项目的master分支：**

```Bash
git checkout master　#手动切换到master分支

git branch -D develop　#强制删除本地的develop分支

git push origin --delete develop　#强制删除远端origin的develop分支

git fetch upstream　#同步远端上游upstream到本地仓库

git checkout master　#确保手动切换到master分支

git merge upstream/master　#合并远端上游upstream的master分支到本地的master分支

git push origin master　#推送本地的master分支到远端origin的master分支
```

----------------------------------

　　然后，从第四步开始在本地新建开发分支并手动切换develop。

　　进行本地的其他内容的修改，内容改动之后再上传和发起pr。
