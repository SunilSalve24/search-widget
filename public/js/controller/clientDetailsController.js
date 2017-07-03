var searchTypeheadApp = angular.module('searchTypeheadApp',[])

.controller('clientDetailscontroller', ['clientDetails', function (clientDetails) {
    
    var vm = this;

    vm.clientList = [];

    vm.getClientList = function(searchText) {

       vm.clientList = clientDetails.getData(searchText);

    }

  }]);