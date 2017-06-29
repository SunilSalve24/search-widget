angular.module('searchTypeheadApp')

.component("searchWidget",{

    templateUrl: "components/search-widget.html",

     bindings: {
        onUpdate: '&',
        clientList: '<'
      },
    controller: function () {
    
    }
});
