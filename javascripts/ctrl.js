
// ilandy ng-js -ctrl
(function(){
	angular
		.module('myApp')
		.controller('myCtrl',myCtrl);
	
	function myCtrl(){
		var vm = this;
		vm.isActive = false;
		vm.pageName = 'index';
		vm.changePages = changePages;

		function changePages (pgName){
			vm.pageName= pgName;
			vm.isActive= !vm.isActive;
		}
	}
	
})();
