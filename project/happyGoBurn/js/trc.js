var lastAnchor = {p0:null, p1:null, p2:null, p3:null};
var TRC = {
    //header
    logo:	            {p0:"/CTR.dat" ,p1:"Header" ,p2:"Logo" ,p3:"na"},
	navEstore:	        {p0:"/CTR.dat" ,p1:"Header" ,p2:"網路門市" ,p3:"na"},
	navDevice:	        {p0:"/CTR.dat" ,p1:"Header" ,p2:"手機平板" ,p3:"na"},
    navPostpaid:        {p0:"/CTR.dat" ,p1:"Header" ,p2:"月租型方案" ,p3:"na"},
    navPrepaid:         {p0:"/CTR.dat" ,p1:"Header" ,p2:"預付型方案" ,p3:"na"},
	navMycenter:	    {p0:"/CTR.dat" ,p1:"Header" ,p2:"我的專區" ,p3:"na"},
    navService:         {p0:"/CTR.dat" ,p1:"Header" ,p2:"用戶服務" ,p3:"na"},
    navSearchRetail:    {p0:"/CTR.dat" ,p1:"Header" ,p2:"找門市" ,p3:"na"},
    navSearchRetail_m:  {p0:"/CTR.dat" ,p1:"Header" ,p2:"找門市" ,p3:"na"},
    navBackHome:        {p0:"/CTR.dat" ,p1:"Header" ,p2:"回首頁" ,p3:"na"},
    //kv quickMenu
    quickMenuVip:        {p0:"/CTR.dat" ,p1:"主視覺" ,p2:"VIP白金" ,p3:"na"},
    quickMenuOld:        {p0:"/CTR.dat" ,p1:"主視覺" ,p2:"老客戶" ,p3:"na"},
    quickMenuMem:        {p0:"/CTR.dat" ,p1:"主視覺" ,p2:"遠傳用戶" ,p3:"na"},
	//vip
    vipMore:             {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"更多權益說明" ,p3:"na"},
    vipMore_m:           {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"更多權益說明" ,p3:"na"},
    vipAD01:             {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"精選活動" ,p3:"AirAsia爽飛東南亞$1,180起"},
    vipAD01_m:           {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"精選活動" ,p3:"AirAsia爽飛東南亞$1,180起"},
    vipAD02:             {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"精選活動" ,p3:"KLOOK客路全站93折優惠"},
    vipAD02_m:           {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"精選活動" ,p3:"KLOOK客路全站93折優惠"},
    vipAD03:             {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"精選活動" ,p3:"Foodpanda外送，首次體驗省很大"},
    vipAD03_m:           {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"精選活動" ,p3:"Foodpanda外送，首次體驗省很大"},
    vipAD04:             {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"專屬禮遇" ,p3:"專屬客服人員，優先進線接聽"},
    vipAD04_m:           {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"專屬禮遇" ,p3:"專屬客服人員，優先進線接聽"},
    vipAD05:             {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"優惠方案" ,p3:"品牌新機優惠，指定配件66折起"},
    vipAD05_m:           {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"優惠方案" ,p3:"品牌新機優惠，指定配件66折起"},
    vipAD06:             {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"專屬好禮" ,p3:"生日當月好禮，小禮心意無限大"},
    vipAD06_m:           {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"專屬好禮" ,p3:"生日當月好禮，小禮心意無限大"},
    vipAD07:             {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"精選活動" ,p3:"動動手指線上購物輕鬆省200元"},
    vipAD07_m:           {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"精選活動" ,p3:"動動手指線上購物輕鬆省200元"},
    vipAD08:             {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"精選活動" ,p3:"friDay影音訂購送影劇館30天無限暢看"},
    vipAD08_m:           {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"精選活動" ,p3:"friDay影音訂購送影劇館30天無限暢看"},
    vipAD09:             {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"精選活動" ,p3:"friDay音樂加碼贈送30天，續用享終身9折"},
    vipAD09_m:           {p0:"/CTR.dat" ,p1:"VIP白金會員" ,p2:"精選活動" ,p3:"friDay音樂加碼贈送30天，續用享終身9折"},
    //old
    oldMore:             {p0:"/CTR.dat" ,p1:"遠傳老客戶" ,p2:"更多權益說明" ,p3:"na"},
    oldMore_m:           {p0:"/CTR.dat" ,p1:"遠傳老客戶" ,p2:"更多權益說明" ,p3:"na"},
    oldAD01:             {p0:"/CTR.dat" ,p1:"遠傳老客戶" ,p2:"免費流量最高可享100GB" ,p3:"na"},
    oldAD01_m:           {p0:"/CTR.dat" ,p1:"遠傳老客戶" ,p2:"免費流量最高可享100GB" ,p3:"na"},
    oldAD02:             {p0:"/CTR.dat" ,p1:"遠傳老客戶" ,p2:"國際漫遊金200元回饋" ,p3:"na"},
    oldAD02_m:           {p0:"/CTR.dat" ,p1:"遠傳老客戶" ,p2:"國際漫遊金200元回饋" ,p3:"na"},
    oldAD03:             {p0:"/CTR.dat" ,p1:"遠傳老客戶" ,p2:"Vitantonio鬆餅機爽快折扣1000元" ,p3:"na"},
    oldAD03_m:           {p0:"/CTR.dat" ,p1:"遠傳老客戶" ,p2:"Vitantonio鬆餅機爽快折扣1000元" ,p3:"na"},
    oldAD04:             {p0:"/CTR.dat" ,p1:"遠傳老客戶" ,p2:"皮套背蓋類商品老客戶再折50元" ,p3:"na"},
    oldAD04_m:           {p0:"/CTR.dat" ,p1:"遠傳老客戶" ,p2:"皮套背蓋類商品老客戶再折50元" ,p3:"na"},
    //mem
    memMore:             {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"更多權益說明" ,p3:""},
    memMore_m:           {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"更多權益說明" ,p3:""},
    memAD01:             {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"旅遊玩樂" ,p3:"AirAsia爽飛東南亞$1,180起"},
    memAD01_m:           {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"旅遊玩樂" ,p3:"AirAsia爽飛東南亞$1,180起"},
    memAD02:             {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"免費優惠" ,p3:"10時有優惠，人人搶好康"},
    memAD02_m:           {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"免費優惠" ,p3:"10時有優惠，人人搶好康"},
    memAD03:             {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"旅遊玩樂" ,p3:"KLOOK客路全站95折優惠"},
    memAD03_m:           {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"旅遊玩樂" ,p3:"KLOOK客路全站95折優惠"},
    //memAD04:             {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"免費優惠" ,p3:"台北老爺大酒店下午茶2人同行1人免費"},
    //memAD04_m:           {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"免費優惠" ,p3:"台北老爺大酒店下午茶2人同行1人免費"},
    //memAD05:             {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"免費優惠" ,p3:"樂活網線上訂票平台免費電影序號"},
    //memAD05_m:           {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"免費優惠" ,p3:"樂活網線上訂票平台免費電影序號"},
    memAD04:             {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"美食饗宴" ,p3:"foodpanda首購滿300抵100"},
    memAD04_m:           {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"美食饗宴" ,p3:"foodpanda首購滿300抵100"},
    memAD05:             {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"購物生活" ,p3:"HappyGO點數好處多多"},
    memAD05_m:           {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"購物生活" ,p3:"HappyGO點數好處多多"},
    memAD06:             {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"購物生活" ,p3:"Happy CASH有錢卡點數10倍狂飆"},
    memAD06_m:           {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"購物生活" ,p3:"Happy CASH有錢卡點數10倍狂飆"},
    memAD07:             {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"特別企劃" ,p3:"遠傳20周年多重好禮感恩回饋"},
    memAD07_m:           {p0:"/CTR.dat" ,p1:"遠傳用戶" ,p2:"特別企劃" ,p3:"遠傳20周年多重好禮感恩回饋"},
    //quickMenu
    quickMenuVip2:        {p0:"/CTR.dat" ,p1:"浮動連結" ,p2:"VIP白金" ,p3:"na"},
    quickMenuOld2:        {p0:"/CTR.dat" ,p1:"浮動連結" ,p2:"老客戶" ,p3:"na"},
    quickMenuMem2:        {p0:"/CTR.dat" ,p1:"浮動連結" ,p2:"遠傳用戶" ,p3:"na"},
    //share
    shareFacebook:       {p0:"/CTR.dat" ,p1:"分享" ,p2:"FB" ,p3:"na"},
    shareLine:           {p0:"/CTR.dat" ,p1:"分享" ,p2:"LINE" ,p3:"na"},
    //backtop
    backtop:                {p0:"/CTR.dat" ,p1:"往上" ,p2:"na" ,p3:"na"},
    //footer
    linkPrivacy:            {p0:"/CTR.dat" ,p1:"Footer" ,p2:"隱私條款" ,p3:"na"},
    linkCopyright:          {p0:"/CTR.dat" ,p1:"Footer" ,p2:"著作權條款" ,p3:"na"},
    linkMediad:             {p0:"/CTR.dat" ,p1:"Footer" ,p2:"媒體行銷" ,p3:"na"},
    linkProposal:           {p0:"/CTR.dat" ,p1:"Footer" ,p2:"合作提案" ,p3:"na"},
    linkEmployment:         {p0:"/CTR.dat" ,p1:"Footer" ,p2:"菁英招募" ,p3:"na"},
    linkCpc:                {p0:"/CTR.dat" ,p1:"Footer" ,p2:"行政院消保會" ,p3:"na"},
    linkBusinessRegulation: {p0:"/CTR.dat" ,p1:"Footer" ,p2:"營業規章/服務契約" ,p3:"na"},
    linkSociety:            {p0:"/CTR.dat" ,p1:"Footer" ,p2:"企業社會責任" ,p3:"na"},
    navMycenter_m:          {p0:"/CTR.dat" ,p1:"Footer" ,p2:"我的專區" ,p3:"na"},
    navService_m:           {p0:"/CTR.dat" ,p1:"Footer" ,p2:"用戶服務" ,p3:"na"},
    linkProposal_m:         {p0:"/CTR.dat" ,p1:"Footer" ,p2:"合作提案" ,p3:"na"},
};
function sendCTRLog(arg){
    if (arg == undefined){return false;}
    if (lastAnchor.p0 == arg.p0 && lastAnchor.p1 == arg.p1 && lastAnchor.p2 == arg.p2 && lastAnchor.p3 == arg.p3){
    	return false;
    }
    //lastAnchor = arg;
    dcsMultiTrack('DCS.dcsuri',arg.p0, 'DCSext.WTlayout_block',gCtr, 'DCSext.WTlayout_type', arg.p1, 'DCSext.WTlayout_type2', arg.p2, 'DCSext.WTlayout_type3', arg.p3);
    /*
    window['ctrlocation'] = arg.p0;
    gImages[gIndex - 1].onload = function () {
    window.location.href = window['ctrlocation']; }
    setTimeout(function() {
        window.location.href = arg.p0;
    }, 5000);
    */
    var output="", property;
    for (property in arg) {
        //output += property + ':' + arg[property] + ', ';
        output += arg[property] + ', ';
    }
    console.log("dcsMultiTrack > "+output,gDcsId,gCtr);
}

