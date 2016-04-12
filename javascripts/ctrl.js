
// ilandy ng-js -ctrl
(function(){
	angular
		.module('myApp')
		.controller('myCtrl',myCtrl);
	
	function myCtrl(){
		var vm = this;
		vm.isActive = false;
	}
})();
