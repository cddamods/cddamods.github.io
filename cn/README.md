# mod上传教程
github网页端基本操作指南：https://github.com/cddamods/cddamods.github.io/blob/master/cn/github操作指南之如何在网页端上传mod.doc
先将你的mod压缩包传入mods文件夹，然后再modsinfo的第一个[后填入以下内容  
  
{  
	"modname":"mod名称",  
	"tags":["mod标签","标签2"],  
	"author":"mod作者名",  
	"ver":"mod版本",  
	"info":"mod简介",  
	"warning":"注意事项，可不写此行",  
	"addr":"mod下载地址，填 mods/压缩文件名 即可，也可指向外站"  
},  
  
**语法一定要正确，逗号不能漏！否则会无法加载页面**  
  
如果想添加作者信息，在authors中新建文件，命名为 作者名.json，填以下内容  
  
{  
	"email" : "作者邮箱"  
}  
  
# 待实现

1.mod分页  
2.mod搜索和分类  
3.页面美化  
4.更多作者信息，以及作者主页  
望有大佬帮忙实现  
