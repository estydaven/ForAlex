(function(){var A=function(g,m){return function(){return g.apply(m,arguments)}},B=[].indexOf||function(g){for(var m=0,y=this.length;m<y;m++)if(m in this&&this[m]===g)return m;return-1},D={}.hasOwnProperty;this.flipchartCss='<link href="https://kran.kupiltovar.ru/css/time.css" rel="stylesheet" type="text/css">';this.MegaTimer=function(){function g(a,b){this.plateTick=A(this.plateTick,this);this.circleTick=A(this.circleTick,this);this.newTime=A(this.newTime,this);this.id=a;this.params=b;this.timerElements=
this.cloneObject(C);this.tickEvent=[];m(window,"load",function(a){return function(){return a.run()}}(this));m(window,"focus",function(a){return function(){a.initType();return a.newTime(!0)}}(this))}var m,y,z,C;y=null;z=[];C={secundes:{max:60,min:0,text:"\u0441\u0435\u043a\u0443\u043d\u0434",value:0,view:!0,updated:!1},minutes:{max:60,min:0,text:"\u043c\u0438\u043d\u0443\u0442",value:0,view:!0,updated:!1},hours:{max:24,min:0,text:"\u0447\u0430\u0441\u043e\u0432",value:0,view:!0,updated:!1},days:{max:1E3,
min:0,text:"\u0434\u043d\u0435\u0439",value:0,view:!0,updated:!1}};g.prototype.destroy=function(){null!=this.interval&&clearInterval(this.interval);null!=this.container&&(this.container.innerHTML="");$("#timer-"+this.id+"-style").remove();return z=[]};g.prototype.run=function(){var a,b,c,d,e,f,l,h;if(null!=this.id&&(b=this.id,0>B.call(z,b))&&(z.push(this.id),this.initView(),this.initType(),null!=this.id)){this.container=document.getElementById("timer"+this.id);this.container.innerHTML="";b=!0;d=[];
for(c in this.timerElements)d.push(c);d.reverse();this.showText=this.params.design.params["text-on"];null==this.showText&&(this.showText=!1);l=0;for(h=d.length;l<h;l++)c=d[l],e=document.createElement("span"),e.id="timer-number-"+this.id+"-"+c,a=document.createElement("span"),a.id="timer-number-value-"+this.id+"-"+c,e.appendChild(a),f=document.createElement("span"),f.id="timer-text-"+this.id+"-"+c,f.innerHTML=this.timerElements[c].text,a=document.createElement("span"),a.className="timer-element",a.id=
"timer-element-"+this.id+"-"+c,a.appendChild(e),a.appendChild(f),b?b=!1:(e=document.createElement("span"),e.className="timer-separator",e.id="timer-separator-"+this.id+"-"+c,this.container.appendChild(e)),this.container.appendChild(a);this.initDesign();this.newTime(!0);return this.interval=setInterval(this.newTime,1E3)}};g.prototype.initDesign=function(){var a;if(null!=this.params.design){null!=this.getIEVersion()&&9>this.getIEVersion()&&(this.params.design.type="text");a=this.params.design.type;
if(null==a||"text"!==a&&"plate"!==a&&"circle"!==a)a="text";a=a.charAt(0).toUpperCase()+a.substr(1);this.initCommonDesign();this["init"+a+"Design"]()}};g.prototype.initCommonDesign=function(){var a,b,c,d,e,f;this.container.style.textAlign="center";f=[];for(e in this.timerElements)a=document.getElementById("timer-element-"+this.id+"-"+e),b=document.getElementById("timer-number-"+this.id+"-"+e),d=document.getElementById("timer-text-"+this.id+"-"+e),c=document.getElementById("timer-separator-"+this.id+
"-"+e),a.style.display="inline-block",b.style.display="inline-block",d.style.display=this.showText?"block":"none",a.style.lineHeight=1,b.style.lineHeight=1,d.style.lineHeight=1,this.setMargin(a,0),this.setMargin(b,0),this.setMargin(d,0),null!=c&&(c.style.display="inline",c.style.verticalAlign="top",c.style.lineHeight=1,this.setMargin(c,0)),this.timerElements[e].view?f.push(void 0):(a.style.display="none",b.style.display="none",d.style.display="none",null!=c?f.push(c.style.display="none"):f.push(void 0));
return f};g.prototype.initTextDesign=function(){var a,b,c,d,e;b=[];d=[];for(e in this.timerElements)b.push(document.getElementById("timer-number-"+this.id+"-"+e)),c=document.getElementById("timer-text-"+this.id+"-"+e),null!=c&&(d.push(c),null!=this.params.design.params["text-margin"]&&(a=this.params.design.params["text-margin"],"auto"!==a&&(a=parseInt(a)+"px"),c.style.marginTop=a));this.setFonts(b,"number");this.setFonts(d,"text");return this.setSeparators()};g.prototype.initCircleDesign=function(){var a,
b,c,d,e;b=[];d=[];for(e in this.timerElements)b.push(document.getElementById("timer-number-"+this.id+"-"+e)),a=document.getElementById("timer-text-"+this.id+"-"+e),null!=a&&(d.push(a),null!=this.params.design.params["text-margin"]&&(c=this.params.design.params["text-margin"],"auto"!==c&&(c=parseInt(c)+"px"),a.style.marginTop=c));this.setFonts(b,"number");this.setFonts(d,"text");this.setSeparators();this.container.style.display="table";0>this.params.design.params.radius&&(this.params.design.params.radius=
0);0>this.params.design.params.width&&(this.params.design.params.width=0);c=2+2*(parseInt(this.params.design.params.radius)+parseInt(this.params.design.params.width));for(e in this.timerElements)this.timerElements[e].view&&(a=document.createElement("canvas"),a.id="timer-canvas-"+this.id+"-"+e,a.style.position="absolute",a.style.left=0,a.style.right=0,a.style.top=0,a.style.bottom=0,a.width=c,a.height=c,b=document.createElement("span"),b.appendChild(a),a=document.getElementById("timer-element-"+this.id+
"-"+e),a.appendChild(b),a.style.position="relative",a.style.display="table-cell",a.style.width=c+"px",a.style.height=c+"px",a.style.verticalAlign="middle",b=document.getElementById("timer-separator-"+this.id+"-"+e),null!=b&&(b.style.height=c+"px",b.style.verticalAlign="middle","none"!==b.style.display.toLowerCase()&&(b.style.display="table-cell")));this.container.style.marginTop=0;this.container.style.marginRight="auto";this.container.style.marginBottom=0;this.container.style.marginLeft="auto";"opacity"===
this.params.design.params.background&&(this.params.design.params["background-color"]="opacity");this.circleTick();return this.tickEvent.push(this.circleTick)};g.prototype.initPlateDesign=function(){var a,b,c,d,e,f,l,h,k,g,n;a=function(a){return function(b,c,d){var e,f;null==d&&(d=!1);f=a.params.design.params.effect;e=document.createElement("span");e.id="timer-number-"+f+c+"-"+a.id+"-"+b;e.className="timer-"+f+"-inner";d&&null!=a.params.design.params.space&&(b=parseInt(a.params.design.params.space),
0>=b&&(b=1),e.style.marginRight=b+"px");b=8;null!=a.params.design.params["number-font-family"]&&null!=a.params.design.params["number-font-family"].family&&"Poiret One"===a.params.design.params["number-font-family"].family&&(b=0);switch(f){case "flipchart":e.innerHTML="<span class='timer-flipchart-card' style='display:none;'><span class='timer-flipchart-front timer-flipchart-face'></span><span class='timer-flipchart-back timer-flipchart-face'></span><span class='timer-flipchart-top timer-flipchart-face'></span><span class='timer-flipchart-bottom timer-flipchart-face'></span><span class='timer-flipchart-bounding'>"+
b+"</span></span>";break;case "slide":e.innerHTML="<span class='timer-slide-old'></span><span class='timer-slide-new'></span><span class='timer-slide-bounding' style='visibility: hidden;'>"+b+"</span>"}return e}}(this);b=function(a){return function(b,c,d,e){null==d&&(d="");null==e&&(e=null);return null!=a.params.design.params[c]||null!=e?(null==e&&(e=a.params.design.params[c]),""+b+":"+e+d+";"):""}}(this);d=function(a){return function(b){var c;c=a.params.design.params[b];null!=c&&(c=k(c),a.params.design.params[b]=
c);return c}}(this);k=function(a){return function(a){var b;null!=a&&a.match(/^rgba\(.*\)/)&&(b=/^rgba\((\d+),\s*(\d+),\s*(\d+),(.*)\)$/,a=a.replace(b,"rgb($1,$2,$3)"));return a}}(this);f=function(a){return function(a,b){return"background: "+a+"; /* Old browsers */ background: -moz-linear-gradient(top, "+a+" 0%, "+b+" 100%); /* FF3.6+ */ background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,"+a+"), color-stop(100%,"+b+")); /* Chrome,Safari4+ */ background: -webkit-linear-gradient(top, "+
a+" 0%,"+b+" 100%); /* Chrome10+,Safari5.1+ */ background: -o-linear-gradient(top, "+a+" 0%,"+b+" 100%); /* Opera 11.10+ */ background: -ms-linear-gradient(top, "+a+" 0%,"+b+" 100%); /* IE10+ */ background: linear-gradient(to bottom, "+a+" 0%,"+b+" 100%); /* W3C */ filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='"+a+"', endColorstr='"+b+"',GradientType=0);"}}(this);h=[];g=[];e=this.params.design.params.effect;if(null==e||"none"!==e&&"flipchart"!==e&&"slide"!==e&&"no-slide"!==e||
!this.animationSupport())e="none";this.params.design.params.animation=!0;"none"===e?(this.params.design.params.effect="flipchart",this.params.design.params.animation=!1):"no-slide"===e&&(this.params.design.params.effect="slide",this.params.design.params.animation=!1);e="";c=this.params.design.params.background;if(null==c||"solid"!==c&&"gradient"!==c&&"opacity"!==c)c="solid";switch(this.params.design.params.effect){case "flipchart":l=e="";switch(c){case "opacity":this.params.design.params.animation?
d("background-color"):(this.params.design.params["background-color"]="rgba(110,110,100,0)",e+="#timer"+this.id+" .timer-flipchart-top:before, #timer"+this.id+" .timer-flipchart-front:before, #timer"+this.id+" .timer-flipchart-bottom:before, #timer"+this.id+" .timer-flipchart-back:before { opacity: 0!important; }");break;case "solid":this.params.design.params.animation&&d("background-color");break;case "gradient":d=this.params.design.params["background-color"],null!=d&&"object"===typeof d&&1<d.length&&
(this.params.design.params.animation&&(d[0]=k(d[0])),this.params.design.params.animation&&(d[1]=k(d[1])),l="#timer"+this.id+" .timer-flipchart-top, #timer"+this.id+" .timer-flipchart-front {"+f(d[0],d[1])+"}"+("#timer"+this.id+" .timer-flipchart-bottom, #timer"+this.id+" .timer-flipchart-back {")+f(d[1],d[0])+"}")}e+="#timer"+this.id+" .timer-flipchart-face{"+b("background-color","background-color")+this.getCssFonts("number")+"}"+("#timer"+this.id+" .timer-separator{")+b("padding-top","padding","px!important")+
b("padding-bottom","padding","px!important")+"}"+("#timer"+this.id+" .timer-flipchart-bounding{")+b("padding-left","padding","px")+b("padding-right","padding","px")+b("padding-top","padding","px")+b("padding-bottom","padding","px")+"}"+("#timer"+this.id+" .timer-flipchart-top, #timer"+this.id+" .timer-flipchart-front{")+b("padding-left","padding","px")+b("padding-right","padding","px")+b("padding-top","padding","px")+b("padding-bottom","padding","px",0)+"}"+("#timer"+this.id+" .timer-flipchart-bottom, #timer"+
this.id+" .timer-flipchart-back{")+b("padding-left","padding","px")+b("padding-right","padding","px")+b("padding-top","padding","px",0)+b("padding-bottom","padding","px")+"}"+("#timer"+this.id+" .timer-flipchart-top, #timer"+this.id+" .timer-flipchart-front {")+b("border-top-left-radius","round","px")+b("border-top-right-radius","round","px")+b("border-bottom-left-radius","","px",0)+b("border-bottom-right-radius","","px",0)+"}"+("#timer"+this.id+" .timer-flipchart-bottom, #timer"+this.id+" .timer-flipchart-back {")+
b("border-top-left-radius","","px",0)+b("border-top-right-radius","","px",0)+b("border-bottom-left-radius","round","px")+b("border-bottom-right-radius","round","px")+"}"+("#timer"+this.id+" .timer-flipchart-bottom:after {")+b("border-top-left-radius","","px",0)+b("border-top-right-radius","","px",0)+b("border-bottom-left-radius","round","px")+b("border-bottom-right-radius","round","px")+"}"+("#timer"+this.id+" .timer-flipchart-front:after, #timer"+this.id+" .timer-flipchart-top:after{")+b("border-top-left-radius",
"round","px")+b("border-top-right-radius","round","px")+b("border-bottom-left-radius","","px",0)+b("border-bottom-right-radius","","px",0)+"}"+("#timer"+this.id+" .timer-flipchart-card {")+b("border-radius","round","px")+"}"+l;this.params.design.params.animation||(e+="#timer"+this.id+" .timer-flipchart-top:after{display:none!important;} #timer"+this.id+" .timer-flipchart-front{display:none!important;}");break;case "slide":l="";switch(c){case "opacity":this.params.design.params["background-color"]=
"rgba(110,110,100,0)";break;case "gradient":d=this.params.design.params["background-color"],null!=d&&"object"===typeof d&&1<d.length&&(l="#timer"+this.id+" .timer-slide-new, #timer"+this.id+" .timer-slide-old {"+f(d[0],d[1])+"}")}e="#timer"+this.id+" .timer-slide-inner{"+b("border-radius","round","px")+b("background-color","background-color")+this.getCssFonts("number")+"}"+("#timer"+this.id+" .timer-separator{")+b("padding-top","padding","px!important")+b("padding-bottom","padding","px!important")+
"}"+("#timer"+this.id+" .timer-slide-bounding, #timer"+this.id+" .timer-slide-new, #timer"+this.id+" .timer-slide-old{")+b("padding-left","padding","px")+b("padding-right","padding","px")+b("padding-top","padding","px")+b("padding-bottom","padding","px")+"}"+l}this.addCssLink(flipchartCss);this.addCustomCss(e);for(n in this.timerElements)f=document.getElementById("timer-number-"+this.id+"-"+n),null!=f&&(h.push(f),b=document.getElementById("timer-number-value-"+this.id+"-"+n),b.style.display="none",
"days"===n?0<Math.floor(this.timerElements[n].value/100)?(f.appendChild(a(n,2,!0)),f.appendChild(a(n,1,!0))):0<Math.floor(this.timerElements[n].value/10)&&f.appendChild(a(n,1,!0)):f.appendChild(a(n,1,!0)),f.appendChild(a(n,0))),f=document.getElementById("timer-text-"+this.id+"-"+n),null!=f&&(g.push(f),null!=this.params.design.params["text-margin"]&&(b=this.params.design.params["text-margin"],"auto"!==b&&(b=parseInt(b)+"px"),f.style.marginTop=b));this.setFonts(h,"number");this.setFonts(g,"text");this.setSeparators();
this.plateTick();return this.tickEvent.push(this.plateTick)};g.prototype.setSeparators=function(){var a,b,c,d,e,f,l,h,k;b=this.params.design.params["separator-margin"];0>=b&&(b=1);f=null!=this.params.design.params["separator-on"]&&this.params.design.params["separator-on"]?this.params.design.params["separator-text"]:"";d=[];e=[];h=[];for(l in this.timerElements)h.push(this.timerElements[l].view);for(a=c=k=h.length-1;0>=k?0>=c:0<=c;a=0>=k?++c:--c)if(h[a]){h[a]=!1;break}a=0;for(l in this.timerElements)c=
document.getElementById("timer-separator-"+this.id+"-"+l),null!=c&&d.push(c),e.push(h[a]?"inline-block":"none"),a++;l=a=0;for(h=d.length;l<h;l++)c=d[l],c.style.display=e[a],c.innerHTML=f,c.style.paddingTop=0,c.style.paddingRight=b+"px",c.style.paddingBottom=0,c.style.paddingLeft=b+"px",a++;return this.setFonts(d,"number")};g.prototype.getCssFonts=function(a){var b,c,d;null==a&&(a="");b="";if(null!=this.params.design&&null!=this.params.design.params&&(c=this.params.design.params[a+"-font-family"],
d=this.params.design.params[a+"-font-size"],a=this.params.design.params[a+"-font-color"],null!=d&&0<=parseInt(d)&&(b+="font-size:"+parseInt(d)+"px;"),null!=a&&(b+="color:"+a+";"),null!=c))return c=null!=c.family?c.family:null,b+("font-family:'"+c+"';")};g.prototype.setFonts=function(a,b){var c,d,e,f,l,h,k;null==b&&(b="");if(null!=this.params.design&&null!=this.params.design.params&&(d=this.params.design.params[b+"-font-family"],e=this.params.design.params[b+"-font-size"],c=this.params.design.params[b+
"-font-color"],null!=d&&(null!=d.link&&this.addCssLink(d.link),d=null!=d.family?d.family:null),null!=a&&0<a.length)){k=[];l=0;for(h=a.length;l<h;l++)f=a[l],null!=e&&(f.style.fontSize=parseInt(e)+"px"),null!=c&&(f.style.color=c),null!=d?k.push(f.style.fontFamily=d):k.push(void 0);return k}};g.prototype.setMargin=function(a,b){"auto"!==b&&(b=parseInt(b)+"px");a.style.marginBottom=b;a.style.marginLeft=b;a.style.marginRight=b;return a.style.marginTop=b};g.prototype.initView=function(){var a;a=[1,1,1,
1];null!=this.params&&null!=this.params.view&&4===this.params.view.length&&(a=this.params.view);this.timerElements.days.view=1===a[0];this.timerElements.hours.view=1===a[1];this.timerElements.minutes.view=1===a[2];return this.timerElements.secundes.view=1===a[3]};g.prototype.initType=function(){var a,b,c,d,e,f,l,h;if(null!=this.params&&null!=this.params.type&&null!=this.params.type.currentType&&null!=this.params.type.params){a=0;e=new Date;switch(parseInt(this.params.type.currentType)){case 1:null!=
this.params.type.params.utc&&(f=0,this.params.type.params.usertime&&(f=6E4*e.getTimezoneOffset()),f=new Date(this.params.type.params.utc+f),a=Math.round((f.getTime()-e.getTime())/1E3));break;case 2:a=parseInt(this.params.type.params.days);c=parseInt(this.params.type.params.hours);d=parseInt(this.params.type.params.minutes);if(null==a||isNaN(a))a=0;if(null==c||isNaN(c))c=0;if(null==d||isNaN(d))d=0;this.params.type.params.startByFirst?(b=this.getCookie("timer"+this.id),isNaN(b)&&(b=null),null!=b&&(f=
new Date(parseInt(b)),null==f&&(b=null)),null==b&&(f=new Date,f.setDate(f.getDate()+a),f.setHours(f.getHours()+c),f.setMinutes(f.getMinutes()+d),this.setCookie("timer"+this.id,f.getTime()))):null!=this.params.type.params.utc&&(f=new Date(this.params.type.params.utc),f.setDate(f.getDate()+a),f.setHours(f.getHours()+c),f.setMinutes(f.getMinutes()+d));a=Math.round((f.getTime()-e.getTime())/1E3);break;case 3:if(null!=this.params.type.params.weekdays&&null!=this.params.type.params.time&&null!=this.params.type.params.usertime&&
null!=this.params.type.params.hours&&null!=this.params.type.params.minutes){c=this.params.type.params.time.split(":");2===c.length&&0<=c[0]&&23>=c[0]&&0<=c[1]&&59>=c[1]||(c=[0,0]);d=e.getDay();f=null;b=l=0;for(h=Math.floor(parseInt(this.params.type.params.hours)/24);0<=h?l<=h:l>=h;b=0<=h?++l:--l)if(d--,0>d&&(d=6),1===this.params.type.params.weekdays[d]&&(a=new Date,a.setDate(a.getDate()-b),this.params.type.params.usertime||a.setTime(a.getTime()-6E4*e.getTimezoneOffset()+6E4*this.params.type.params.tz),
a.setHours(parseInt(c[0])),a.setMinutes(parseInt(c[1])),a.setSeconds(0),e.getTime()>=a.getTime()&&(a.setHours(a.getHours()+parseInt(this.params.type.params.hours)),a.setMinutes(a.getMinutes()+parseInt(this.params.type.params.minutes)),a.getTime()>=e.getTime()))){f=a;break}a=null;null!=f&&(a=Math.round((f.getTime()-e.getTime())/1E3))}break;default:this.params=this.id=null}if(null==a||0>a)a=0;this.timerElements.secundes.value=Math.floor(a%60);a/=60;this.timerElements.minutes.value=Math.floor(a%60);
a/=60;this.timerElements.hours.value=Math.floor(a%24);return this.timerElements.days.value=Math.floor(a/24)}};g.prototype.newTime=function(a){var b,c,d,e,f,l;null==a&&(a=!1);if(a||0!==this.timerElements.days.value||0!==this.timerElements.hours.value||0!==this.timerElements.minutes.value||0!==this.timerElements.secundes.value){e=!a;for(f in this.timerElements)c=document.getElementById("timer-number-value-"+this.id+"-"+f),d=this.timerElements[f],l=d.value,b=!1,e&&(--l,b=!0),e=!1,l<d.min&&(l=d.max,b=
e=!0),l>=d.max&&(l=d.max-1,b=!0),b||a?(null!=c&&(c.innerHTML=l),d.value=l,d.updated=!0):d.updated=!1;if(0<this.tickEvent.length){d=this.tickEvent;e=[];b=0;for(c=d.length;b<c;b++)a=d[b],e.push(a());return e}}else clearInterval(this.interval)};g.prototype.getColorBetween=function(a,b,c){var d,e;e=function(a,b){return a+Math.round((b-a)*c)};d=function(a){a=Math.min(a,255);a=Math.max(a,0);a=a.toString(16);2>a.length&&(a="0"+a);return a};if(1===a.a&&1===b.a||!(null==this.getIEVersion()||9>this.getIEVersion()))return"#"+
d(e(a.r,b.r))+d(e(a.g,b.g))+d(e(a.b,b.b));d=(a.a+(b.a-a.a)*c).toFixed(2);return"rgba("+e(a.r,b.r)+","+e(a.g,b.g)+","+e(a.b,b.b)+","+d+")"};g.prototype.getGradientColors=function(a,b,c){var d,e,f,l;e=[];l=1/(c-1);for(f=d=0;c>f;)e[f]=this.getColorBetween(a,b,d),d+=l,f++;return e};g.prototype.hexToRgb=function(a){var b,c;if(b=/^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(a))1===b[1].length&&(b[1]+=""+b[1]),1===b[2].length&&(b[2]+=""+b[2]),1===b[3].length&&(b[3]+=""+b[3]),b={r:parseInt(b[1],
16),g:parseInt(b[2],16),b:parseInt(b[3],16),a:1};else if(0===a.indexOf("rgb"))if(a=a.match(/\d+(\.\d+)?%?/g),2<a.length){for(b=c=0;2>=c;b=++c)0>a[b]&&(a[b]=0),255<a[b]&&(a[b]=255);b={r:parseInt(a[0]),g:parseInt(a[1]),b:parseInt(a[2]),a:1}}else b={r:0,g:0,b:0,a:1};return b};g.prototype.drawGradientArc=function(a,b,c,d,e,f,l,h,k,g,n,m){var u,v,x,p,q,t,r;g&&this.drawArc(a,b,c,d,e,f,l,"transparent",g,n,m);m||(1===f?e=1-f:f=1-f);h=this.hexToRgb(h);g=this.hexToRgb(k);k=this.hexToRgb(this.getColorBetween(h,
g,e));g=this.hexToRgb(this.getColorBetween(h,g,f));h=Math.ceil(30*Math.abs(f-e));x=this.getGradientColors(k,g,h);k=-.5*Math.PI+2*Math.PI*e;h=x.length;m?(p=2*Math.PI*(f-e)/h,u=1):(p=-2*Math.PI*(f+e)/h,u=-1);g=function(e){return function(e,f,h){var g,k,n,q,w;k=x[e];e=x[e+1]||k;g=b+Math.cos(f)*d;q=b+Math.cos(f+p)*d;n=c+Math.sin(f)*d;w=c+Math.sin(f+p)*d;a.beginPath();g=a.createLinearGradient(g,n,q,w);g.addColorStop(0,k);g.addColorStop(1,e);a.lineCap=h;a.strokeStyle=g;a.arc(b,c,d,f-.005*u,f+p+.005*u,!m);
a.lineWidth=l;a.stroke();return a.closePath()}}(this);if(h){v=k+p*(h-1);if(1<h){f=Math.ceil(h/2);e=t=0;for(r=f-1;0<=r?t<=r:t>=r;e=0<=r?++t:--t)0===e&&(q=p,p*=.01,g(e,k,n),p=q),g(e,k,"butt"),k+=p;k=v;r=[];for(e=v=t=h-1;t<=f?v<=f:v>=f;e=t<=f?++v:--v)e===h-1&&(q=p,p*=.01,g(e,k+.99*q,n),p=q),g(e,k,"butt"),r.push(k-=p);return r}if(1===h)return g(0,k,n)}};g.prototype.drawArc=function(a,b,c,d,e,f,g,h,k,w,n){if(e<=f){if("string"!==typeof h)return this.drawGradientArc(a,b,c,d,e,f,g,h[0],h[1],k,w,n);a.beginPath();
a.lineWidth=g;a.strokeStyle="transparent"===h||"opacity"===h?"rgba(0,0,0,0)":h;a.arc(b,c,d,-.5*Math.PI+2*Math.PI*e,-.5*Math.PI+2*Math.PI*f,!n);a.lineCap=w;return a.stroke()}};g.prototype.drawRing=function(a,b,c,d,e,f,g,h,k,w,n,m,u,v,x){var p,q,t,r;q=1;1<q+0&&(q-=-1+q+0,e+=0);t=e;p=e+q;q*=d;r=.5-Math.abs(-.5+d);d=e+(q-0*r);if(f||w)return this.drawArc(a,b,c,f,e+(q+0*(1-r)),p,g,h,k,v,x),this.drawArc(a,b,c,w,t,d,n,m,u,v,x)};g.prototype.circleTick=function(){var a,b,c,d,e,f,g,h,k,m,n;m=parseInt(this.params.design.params.width);
g=parseInt(this.params.design.params.radius)+Math.round(m/2);e=this.params.design.params["line-color"];h=this.params.design.params["background-color"];d="direct"===this.params.design.params.direction;n=[];for(k in this.timerElements)this.timerElements[k].view&&this.timerElements[k].updated?(a=document.getElementById("timer-canvas-"+this.id+"-"+k),a.getContext?(c=a.getContext("2d"),c.clearRect(0,0,a.width,a.height),b=Math.round(a.width/2),a=Math.round(a.height/2),f=this.timerElements[k].value/this.timerElements[k].max,
d&&(f=1-f),n.push(this.drawRing(c,b,a,f,0,g,m,h,null,g,m,e,null,"round",d))):n.push(void 0)):n.push(void 0);return n};g.prototype.plateTick=function(){var a,b,c,d,e,f,g,h,k,m;g=function(a){return function(b,c){var d,e;if(a.animationSupport()&&a.params.design.params.animation)return e=a.params.design.params.effect,d=document.getElementById("timer-number-"+e+b+"-"+a.id+"-"+c),a.removeClass(d,"timer-"+e+"-animate"),requestAnimationFrame(function(){d.offsetLeft;return a.addClass(d,"timer-"+e+"-animate")})}}(this);
m=[];for(f in this.timerElements)this.timerElements[f].updated?(e=this.timerElements[f].value,k=[e%10,Math.floor(e/10%10),Math.floor(e/100)],b=0,m.push(function(){var e,m,u;u=[];e=0;for(m=k.length;e<m;e++){h=k[e];switch(this.params.design.params.effect){case "flipchart":d=document.getElementById("timer-number-flipchart"+b+"-"+this.id+"-"+f);null!=d&&null!=d.childNodes&&1===d.childNodes.length&&(a=d.childNodes[0].childNodes)&&null!=a&&5===a.length&&a[0].innerHTML!==h&&(c=parseInt(a[1].innerHTML),null!=
c&&0<=c&&9>=c||(c=""),this.params.design.params.animation||(c=h),c===h&&this.params.design.params.animation||(a[0].innerHTML=c,a[1].innerHTML=h,a[2].innerHTML=h,a[3].innerHTML=c,g(b,f)));break;case "slide":d=document.getElementById("timer-number-slide"+b+"-"+this.id+"-"+f),null!=d&&null!=d.childNodes&&3===d.childNodes.length&&(a=d.childNodes)&&a[1].innerHTML!==h&&(c=parseInt(a[1].innerHTML),null!=c&&0<=c&&9>=c||(c=""),this.params.design.params.animation||(c=h),c===h&&this.params.design.params.animation||
(a[0].innerHTML=c,a[1].innerHTML=h,g(b,f)))}u.push(b++)}return u}.call(this))):m.push(void 0);return m};g.prototype.getCookie=function(a){return(a=document.cookie.match(new RegExp("(?:^|; )"+a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")))?decodeURIComponent(a[1]):null};g.prototype.setCookie=function(a,b,c){var d,e;c=c||{};e=c.expires;"number"===typeof e&&e&&(d=new Date,d.setTime(d.getTime()+1E3*e),e=c.expires=d);e&&e.toUTCString&&(c.expires=e.toUTCString());b=encodeURIComponent(b);
a=a+"="+b;b=0;for(d=c.length;b<d;b++)e=c[b],a+="; "+e,e=c[e],!0!==e&&(a+="="+e);return document.cookie=a};g.prototype.cloneObject=function(a){var b,c,d;if(!a||"object"!==typeof a)return a;b="function"===typeof a.pop?[]:{};for(c in a)D.call(a,c)&&(d=a[c],b[c]=d&&"object"===typeof d?this.cloneObject(d):d);return b};m=function(a,b,c,d){null==d&&(d=!1);return null!=a.addEventListener?a.addEventListener(b,c,d):null!=a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=function(){return c()}};g.prototype.addCustomCss=
function(a){var b,c;y="timer-"+this.id+"-style";c=document.getElementById(y);null!=c&&(c.styleSheet?c.styleSheet.cssText="":c.innerHTML="",c.parentNode.removeChild(c));b=document.getElementsByTagName("head")[0];c=document.createElement("style");c.setAttribute("type","text/css");c.id=y;c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));return b.appendChild(c)};g.prototype.addCssLink=function(a){var b,c,d,e,f;if(null!=a&&(b=document.createElement("div"),b.innerHTML=a,a=document.getElementsByTagName("head"),
null!=a&&0<a.length&&b.childNodes.length)){b=b.childNodes[0];f=a[0].childNodes;d=0;for(e=f.length;d<e;d++)if(c=f[d],this.isEqualsNodes(c,b))return;return a[0].appendChild(b)}};g.prototype.isEqualsNodes=function(a,b){var c,d,e,f,g,h;if(null!=a&&null!=b)if("#text"===a.nodeName||"#text"===b.nodeName){if("#text"===a.nodeName&&"#text"===b.nodeName&&a.data===b.data)return!0}else if(null!=a.tagName&&null!=b.tagName&&a.tagName.toLowerCase()===b.tagName.toLowerCase()){f=a.attributes;d=0;for(e=f.length;d<e;d++)if(c=
f[d],(g=!c,0<=B.call(b.attributes,g))||c.value!==b.getAttribute(c.nodeName))return!1;f=b.attributes;d=0;for(e=f.length;d<e;d++)if(c=f[d],(h=!c,0<=B.call(a.attributes,h))||c.value!==a.getAttribute(c.nodeName))return!1;return!0}return!1};g.prototype.addClass=function(a,b){if(!this.hasClass(a,b))return a.className=""===a.className?b:a.className+" "+b};g.prototype.removeClass=function(a,b){return a.className=a.className.replace(new RegExp("(?:^|\\s)"+b+"(?!\\S)","g"),"")};g.prototype.hasClass=function(a,
b){return null!=a.className&&-1!==a.className.indexOf(b)};g.prototype.animationSupport=function(){var a,b,c,d,e;if(null!=window.animationSupport)return window.animationSupport;b=!1;d=["Webkit","Moz","O","ms","Khtml"];"undefined"!==typeof document.body.style.animationName&&(b=!0);if(!b)for(a=0;d.length>a;){if("undefined"!==typeof document.body.style[d[a]+"AnimationName"]){b=!0;break}a++}if(b){d=document.createElement("div");c=["-webkit-","-moz-","-ms-",""];b="";for(a=0;c.length>a;)b+="@"+c[a]+"keyframes csspseudoanimations { from { font-size: 10px; } }",
a++;b+='#timer-tester:before { content:" "; font-size:5px;';for(a=0;c.length>a;)b+=c[a]+"animation:csspseudoanimations 1ms infinite;",b+=c[a]+"animation-fill-mode: forwards;",a++;a='<style id="s-timer-tester">'+(b+"}")+"</style>";d.id="timer-tester";d.innerHTML+=a;a=document.body;null==a&&(a=document.createElement("body"),a.fake=!0);a.appendChild(d);null!=a.fake&&(a.style.background="",a.style.overflow="hidden",e=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(a));
b="10px"===window.getComputedStyle(d,":before").getPropertyValue("font-size");null!=a.fake?(a.parentNode.removeChild(a),docElement.style.overflow=e,docElement.offsetHeight):d.parentNode.removeChild(d)}return window.animationSupport=b};g.prototype.getIEVersion=function(){var a;a=window.navigator.userAgent.match(/MSIE *\d+\.\w+/i);return null!=a&&(a=a[0].split(/[ \/\.]/i),1<a.length)?parseInt(a[1]):null};return g}()}).call(this);