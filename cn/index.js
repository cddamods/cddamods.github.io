var mods = null;
var pagemax = 10;
//加载页面
function LoadMods(pageindex){
	$(".Mods").empty();
	var modindex = pageindex * pagemax;
	for(var i = modindex;i<(modindex + pagemax < mods.length ? modindex+pagemax : mods.length);i++){
		var mod = mods[i];
		var content = "<div class=\"Mod\">";
		
		content += "<h4>" + mod.modname + "</h4>"
		
		content += "<p class=\"tag\">";
		for(var j = 0;j<mod.tags.length;j++){
			content += mod.tags[j] + " ";
		}
		content += "</p>";
		
		content += "<p class=\"author\" id=\"" + i + "\">作者：" + mod.author + "</p>";
		//获取作者信息
		LoadAuthorInfo(mod.author,i);
		
		content += "<p class=\"Modver\">版本：" + mod.ver + "</p>";
		
		content += "<p class=\"Msg\">" + mod.info + "</p>";
		
		if(mod.warning != undefined){
			content += "<p class=\"warning\">" + mod.warning + "</p>";
		}
		
		content += "<a class=\"download\" href=\"" + mod.addr + "\">下载</a>"
		
		content += "</div>"
		
		$(".Mods").append(content);
		
	}
	//添加换页
		if(pageindex == 0){
			$(".Mods").append("<a onClick=\"LoadMods(" + (modindex + 1) + ")\">下一页</a>");
		}else if(modindex + pagemax >= mods.length){//当到了最后一页
			$(".Mods").append("<a onClick=\"LoadMods(" + (modindex - 1) + ")\">上一页</a>");
		}else{
			$(".Mods").append("<a onClick=\"LoadMods(" + (modindex - 1) + ")\">上一页</a>");
			$(".Mods").append("<a onClick=\"LoadMods(" + (modindex + 1) + ")\">下一页</a>");
		}
}
function LoadAuthorInfo(name,id){
	$.getJSON("authors/" + name + ".json",function(data) {
				if(data.email != undefined){
					$("#" + id).after("<p class=\"authormsg\">作者邮箱：" + data.email + " </p>");
				}
	   			
   			});
}
//加载信息
$.getJSON("modsinfo.json",function(data) {
	   mods = data;
	   LoadMods(0);
   });
