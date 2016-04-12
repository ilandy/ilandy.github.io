var myApp = angular.module('myApp', []);
var api = 'https://api.pinterest.com/v3/pidgets/boards/ilandychiu/海報dm設計/pins/';

/* function 名稱小寫開頭會出錯 */
var MyController = function($scope, $http) {
    $scope.pins = [];
    $http.jsonp(api + '?callback=JSON_CALLBACK').success(function(data) {
        $scope.pins = data.data.pins;
    }).error(function(data, status, headers, config) {
        console.log('error');
    });
};
/* 相依性注入：支援最小化 js 檔案 */
MyController.$inject = ['$scope', '$http'];
myApp.controller('MyController', MyController);

$(document).ready(function(){
    var t = "index",
        moveTo = 0,
        deviceW = screen.availWidth,
        galleryW = 90;
    console.log(deviceW);
    $('[data-scroll]').on('click',function(){
        t = $(this).attr('data-scroll');
        moveTo = $('#'+t).offset();
        $('body').animate({
            scrollTop: moveTo.top
        },500);
    });
    // $('#work').swipe( {
    //     swipeStatus:function(event, phase, direction, distance, duration,fingerCount) {
    //     $('.work-scroll').text("你用"+fingerCount+"个手指以"+duration+"秒的速度向" + direction + "滑动了" +distance+ "像素 " +"你在"+phase+"中");
    // }
    // });
});
