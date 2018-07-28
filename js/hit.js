function ea_dcd( data ) {
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
var ea_action='//borisovden.e-autopay.com/hit.php';
var ea_pid=window.location.hash.replace('#','');
if(ea_pid!='' || ea_referer!='')
{
 var ea_div = document.createElement('div');
 ea_div.style.display = "none";
 document.body.appendChild(ea_div);
 
 eval(ea_dcd('ZWFfZGl2LmlubmVySFRNTCA9ICc8aWYnKydyYW1lIHNyYz0iIiBuYW1lPSJmcnRnaGp1eXZjIiB3aWR0aD0wIGhlaWdodD0wIGZyYW1lYm9yZGVyPTA+PC9pZnInKydhbWU+PGZvcm0gbWV0aG9kPSJQT1NUIiB0YXJnZXQ9ImZydGdoanV5dmMiIGFjdGlvbj0iJytlYV9hY3Rpb24rJyIgYWNjZXB0LWNoYXJzZXQ9InV0Zi04Ij48aW5wdXQgdHlwZT0iaGlkZGVuIiBuYW1lPSJyZWZlcmVyIiB2YWx1ZT0iJytlYV9yZWZlcmVyKyciIC8+PGlucHV0IHR5cGU9ImhpZGRlbiIgbmFtZT0iYW5jaG9yIiB2YWx1ZT0iJytlYV9waWQrJyIgLz48L2Zvcm0+Jzs='));
 ea_div.getElementsByTagName('form')[0].submit();
}
