<!-- START OF SmartSource Data Collector TAG -->
<!-- Copyright (c) 1996-2007 WebTrends Inc.  All rights reserved. -->
<!-- V8.0 -->
<!-- $DateTime: 2007/02/02 09:07:21 $ -->
var gDomain="weblog.fetnet.net";
var gDcsId="dcs9tz6g5vd0ousspd9j1urky_5d4y";
var gCtr="VIP_Promotion";
var gFpc="WT_FPC";
var gConvert=true;
var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (mobile){
	gDcsId = "dcsj3lkf5vd0ousspd9j1urky_5d9c";
	gCtr="VIP_Promotion_m";
}
//alert(gDcsId);
//alert(gCtr);
if ((typeof(gConvert)!="undefined")&&gConvert&&(document.cookie.indexOf(gFpc+"=")==-1)&&(document.cookie.indexOf("WTLOPTOUT=")==-1)){
	document.write("<SCR"+"IPT TYPE='text/javascript' SRC='"+"http"+(window.location.protocol.indexOf('https:')==0?'s':'')+"://"+gDomain+"/"+gDcsId+"/wtid.js"+"'><\/SCR"+"IPT>");
}
//-->