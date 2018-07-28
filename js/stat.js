function ea_dcd2( data ) {
	var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var o1, o2, o3, h1, h2, h3, h4, bits, i=0, enc='';
	do {
		h1 = b64.indexOf(data.charAt(i++));
		h2 = b64.indexOf(data.charAt(i++));
		h3 = b64.indexOf(data.charAt(i++));
		h4 = b64.indexOf(data.charAt(i++));
		bits = h1<<18 | h2<<12 | h3<<6 | h4;
		o1 = bits>>16 & 0xff;
		o2 = bits>>8 & 0xff;
		o3 = bits & 0xff;
		if (h3 == 64)	   enc += String.fromCharCode(o1);
		else if (h4 == 64) enc += String.fromCharCode(o1, o2);
		else			   enc += String.fromCharCode(o1, o2, o3);
	} while(i < data.length);
	return enc;
}
var ea_referer=document.referrer;
var ea_action='//borisovden.e-autopay.com/stat.php';

var tmp = new Array();
var tmp2 = new Array();
var param = new Array();

var get = location.search;
if(get != '') {
	tmp = (get.substr(1)).split('&');
	for(var i=0; i < tmp.length; i++) {
		tmp2 = tmp[i].split('=');
		param[tmp2[0]] = tmp2[1];
	}
}


if(param['channel_id']!==undefined && param['channel_id'].match(/^[\d]{1,10}$/i))
{

 var channel_id = param['channel_id'];
 var stat_div = document.createElement('div');
 stat_div.style.display = "none";
 document.body.appendChild(stat_div);
 
 eval(ea_dcd2('c3RhdF9kaXYuaW5uZXJIVE1MID0gJzxpZicrJ3JhbWUgc3JjPSIiIG5hbWU9ImVhX3N0YXRfZnJhbWUiIHdpZHRoPTAgaGVpZ2h0PTAgZnJhbWVib3JkZXI9MD48L2lmcicrJ2FtZT48Zm9ybSBtZXRob2Q9IlBPU1QiIHRhcmdldD0iZWFfc3RhdF9mcmFtZSIgYWN0aW9uPSInK2VhX2FjdGlvbisnIiBhY2NlcHQtY2hhcnNldD0idXRmLTgiPjxpbnB1dCB0eXBlPSJoaWRkZW4iIG5hbWU9InJlZmVyZXIiIHZhbHVlPSInK2VhX3JlZmVyZXIrJyIgLz48aW5wdXQgdHlwZT0iaGlkZGVuIiBuYW1lPSJjaGFubmVsX2lkIiB2YWx1ZT0iJytjaGFubmVsX2lkKyciIC8+PGlucHV0IHR5cGU9ImhpZGRlbiIgbmFtZT0iYWRkX2hpdCIgdmFsdWU9InllcyIgLz48L2Zvcm0+Jzs='));
 stat_div.getElementsByTagName('form')[0].submit();
}
