# mod上传教程

[github fork工作流之如何使用github网页端上传mod的基本操作指南](https://github.com/cddamods/cddamods.github.io/blob/master/cn/github%20fork%E5%B7%A5%E4%BD%9C%E6%B5%81%E4%B9%8B%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8github%E7%BD%91%E9%A1%B5%E7%AB%AF%E4%B8%8A%E4%BC%A0mod%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C%E6%8C%87%E5%8D%97.md)

[github fork工作流之如何使用git命令行提交贡献的操作指南](https://github.com/cddamods/cddamods.github.io/blob/master/cn/github%20fork%E5%B7%A5%E4%BD%9C%E6%B5%81%E4%B9%8B%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8git%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%8F%90%E4%BA%A4%E8%B4%A1%E7%8C%AE%E7%9A%84%E6%93%8D%E4%BD%9C%E6%8C%87%E5%8D%97.md)

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
