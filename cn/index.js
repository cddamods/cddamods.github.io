var mods = null;
//加载页面
function LoadMods(){
	for(var i = 0;i<mods.length;i++){
		var mod = mods[i];
		var content = "<div class=\"Mod\">";
		
		content += "<h4>" + mod.modname + "</h4>"
		
		content += "<p class=\"tag\">";
		for(var j = 0;j<mod.tags.length;j++){
			content += mod.tags[i] + " ";
		}
		content += "</p>";
		
		content += "<p class=\"author " + mod.author + "\">作者：" + mod.author + "</p>";
		//获取作者信息
		$.getJSON("authors/" + mod.author + ".json",function(data) {
				if(data.email != undefined){
					$("." + mod.author).after("<p class=\"authormsg\">作者邮箱：" + data.email + " </p>");
				}
	   			
   			});
		
		content += "<p class=\"Modver\">版本：" + mod.ver + "</p>";
		
		content += "<p class=\"Msg\">" + mod.info + "</p>";
		
		content += "<p class=\"warning\">" + mod.warning + "</p>";
		
		content += "<a class=\"download\" href=\"" + mod.addr + "\">下载</a>"
		
		content += "</div>"
		
		$(".Mods").append(content);
	}
}
//加载信息
$.getJSON("modsinfo.json",function(data) {
	   mods = data;
	   LoadMods();
   });
