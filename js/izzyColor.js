/*Copyright(c)2009,www.izzy2.com/tools*/

;
if(typeof imageUrl === 'undefined')
	var imageUrl='editor_images/color.png';
	
var copyHTML='<a href="http://www.izzywebsite.com/tools" target="_blank" style="background:#000;text-align:center;margin-top:1px;display:block;color:#ccc;font:10px Arial, Helvetica, sans-serif;text-decoration:none">ColorPicker by Izzy Tools</a>';

function iColorShow(i,i2){

	var eIC=jQuery("#"+i2).position();
	var oldPos=jQuery("#"+i).css('position');
	
	jQuery("#"+i).css({'z-index':'9999','position':'relative'});
	jQuery("#izzyColor").css({'top':eIC.top+(jQuery("#"+i).outerHeight())+"px",'left':(eIC.left)+"px",'position':'absolute'}).fadeIn("fast");
	jQuery("#izzyColorBg").css({'opacity':'0.6','filter':'alpha(opacity=60)','z-index':'9997','background':'#000','position':'fixed','top':0,'left':0,'width':'100%','height':'100%'}).fadeIn("fast");

	var iC=jQuery("#"+i).val();

	jQuery('#colorPreview span').text(iC);
	jQuery('#colorPreview').css('background',iC);
	jQuery('#color').val(iC);

	jQuery(".izzyColors a, #colorPreview").unbind().mouseover(function(){
		var izzyColor=jQuery(this).attr("rel");
		jQuery("#colorPreview span").text('#'+izzyColor);
		jQuery("#colorPreview").css('background','#'+izzyColor).attr("rel",izzyColor);
		jQuery("#"+i).val('#'+izzyColor).css("background",'#'+izzyColor);
	}).click(function(){
		jQuery(".izzyColors a, #colorPreview").unbind();
		var izzyColor="#"+jQuery(this).attr("rel");
		jQuery("#"+i).val(izzyColor).css({'position':'static',"background":izzyColor});
		jQuery("#izzyColorBg").hide();
		jQuery("#izzyColor").fadeOut();
		return false;							
	})

}
	
this.izzyColor=function(){

	var colors="000000 000000 000000 000000 003300 006600 009900 00CC00 00FF00 330000 333300 336600 339900 33CC00 33FF00 660000 663300 666600 669900 66CC00 66FF00 000000 333333 000000 000033 003333 006633 009933 00CC33 00FF33 330033 333333 336633 339933 33CC33 33FF33 660033 663333 666633 669933 66CC33 66FF33 000000 666666 000000 000066 003366 006666 009966 00CC66 00FF66 330066 333366 336666 339966 33CC66 33FF66 660066 663366 666666 669966 66CC66 66FF66 000000 999999 000000 000099 003399 006699 009999 00CC99 00FF99 330099 333399 336699 339999 33CC99 33FF99 660099 663399 666699 669999 66CC99 66FF99 000000 CCCCCC 000000 0000CC 0033CC 0066CC 0099CC 00CCCC 00FFCC 3300CC 3333CC 3366CC 3399CC 33CCCC 33FFCC 6600CC 6633CC 6666CC 6699CC 66CCCC 66FFCC 000000 FFFFFF 000000 0000FF 0033FF 0066FF 0099FF 00CCFF 00FFFF 3300FF 3333FF 3366FF 3399FF 33CCFF 33FFFF 6600FF 6633FF 6666FF 6699FF 66CCFF 66FFFF 000000 FF0000 000000 990000 993300 996600 999900 99CC00 99FF00 CC0000 CC3300 CC6600 CC9900 CCCC00 CCFF00 FF0000 FF3300 FF6600 FF9900 FFCC00 FFFF00 000000 00FF00 000000 990033 993333 996633 999933 99CC33 99FF33 CC0033 CC3333 CC6633 CC9933 CCCC33 CCFF33 FF0033 FF3333 FF6633 FF9933 FFCC33 FFFF33 000000 0000FF 000000 990066 993366 996666 999966 99CC66 99FF66 CC0066 CC3366 CC6666 CC9966 CCCC66 CCFF66 FF0066 FF3366 FF6666 FF9966 FFCC66 FFFF66 000000 FFFF00 000000 990099 993399 996699 999999 99CC99 99FF99 CC0099 CC3399 CC6699 CC9999 CCCC99 CCFF99 FF0099 FF3399 FF6699 FF9999 FFCC99 FFFF99 000000 00FFFF 000000 9900CC 9933CC 9966CC 9999CC 99CCCC 99FFCC CC00CC CC33CC CC66CC CC99CC CCCCCC CCFFCC FF00CC FF33CC FF66CC FF99CC FFCCCC FFFFCC 000000 FF00FF 000000 9900FF 9933FF 9966FF 9999FF 99CCFF 99FFFF CC00FF CC33FF CC66FF CC99FF CCCCFF CCFFFF FF00FF FF33FF FF66FF FF99FF FFCCFF FFFFFF";
	//var colors="000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000000 000033 000066 000099 0000CC 0000FF 0000FF 003300 003333 003366 003399 0033CC 0033FF 006600 006633 006666 006699 0066CC 0066FF 009900 009933 009966 009999 0099CC 0099FF 00CC00 00CC33 00CC66 00CC99 00CCCC 00CCFF 00FF00 00FF00 00FF33 00FF66 00FF99 00FFCC 00FFFF 00FFFF 330000 330033 330066 330099 3300CC 3300FF 333300 333333 333333 333366 333399 3333CC 3333FF 336600 336633 336666 336699 3366CC 3366FF 339900 339933 339966 339999 3399CC 3399FF 33CC00 33CC33 33CC66 33CC99 33CCCC 33CCFF 33FF00 33FF33 33FF66 33FF99 33FFCC 33FFFF 660000 660033 660066 660099 6600CC 6600FF 663300 663333 663366 663399 6633CC 6633FF 666600 666633 666666 666666 666699 6666CC 6666FF 669900 669933 669966 669999 6699CC 6699FF 66CC00 66CC33 66CC66 66CC99 66CCCC 66CCFF 66FF00 66FF33 66FF66 66FF99 66FFCC 66FFFF 990000 990033 990066 990099 9900CC 9900FF 993300 993333 993366 993399 9933CC 9933FF 996600 996633 996666 996699 9966CC 9966FF 999900 999933 999966 999999 999999 9999CC 9999FF 99CC00 99CC33 99CC66 99CC99 99CCCC 99CCFF 99FF00 99FF33 99FF66 99FF99 99FFCC 99FFFF CC0000 CC0033 CC0066 CC0099 CC00CC CC00FF CC3300 CC3333 CC3366 CC3399 CC33CC CC33FF CC6600 CC6633 CC6666 CC6699 CC66CC CC66FF CC9900 CC9933 CC9966 CC9999 CC99CC CC99FF CCCC00 CCCC33 CCCC66 CCCC99 CCCCCC CCCCCC CCCCFF CCFF00 CCFF33 CCFF66 CCFF99 CCFFCC CCFFFF FF0000 FF0000 FF0033 FF0066 FF0099 FF00CC FF00FF FF00FF FF3300 FF3333 FF3366 FF3399 FF33CC FF33FF FF6600 FF6633 FF6666 FF6699 FF66CC FF66FF FF9900 FF9933 FF9966 FF9999 FF99CC FF99FF FFCC00 FFCC33 FFCC66 FFCC99 FFCCCC FFCCFF FFFF00 FFFF00 FFFF33 FFFF66 FFFF99 FFFFCC FFFFFF FFFFFF ";

	var temp = new Array();
	temp = colors.split(' ');
	var output='<div class="izzyColors" style="width:231px;overflow:auto; border:1px solid black; background:black;padding:1px 0 0 0px">';
	for (i=0;i<temp.length;i++){
		output+='<a href="#" rel="'+temp[i]+'" style="height:10px;width:10px;display:block;text-indent:-9999px;float:left;background:#'+temp[i]+';margin:0 1px 1px 0"></a>';
	}
	output+='</div>';
	output+='<div style="border:1px solid #000;background:#fff;cursor:pointer;height:35px;text-align:center;padding-top:20px" id="colorPreview"><span style="color:#000;border:1px #000;padding:5px;background-color:#fff;font:11px Arial,Helvetica,sans-serif"></span></div>';

	if(typeof copyHTML !== 'undefined')
	output+=copyHTML;

	jQuery("input.izzyColor").each(function(i){

		if(i==0){

			jQuery(document.createElement("div")).attr("id","izzyColor").css('display','none').html(output).appendTo("body");
			jQuery(document.createElement("div")).attr("id","izzyColorBg").click(
					function(){
						jQuery("#izzyColorBg").hide();
						jQuery("#izzyColor").fadeOut();
						jQuery("input.izzyColor").css({'position':'static'});
					}
				).appendTo("body");

			jQuery('#izzyColor').css({'border':'1px solid #000','background':'#fff','padding':'1px','z-index':9999})

		}
				
		jQuery(this).css("backgroundColor",jQuery(this).val())
		.after('<a href="javascript:void(null)" id="icp_'+this.id+'" onclick="iColorShow(\''+this.id+'\',\'icp_'+this.id+'\')"><img src="'+imageUrl+'" style="border:0;margin:0 0 0 3px" align="absmiddle" ></a>')

	})
};
jQuery(function(){izzyColor()});
