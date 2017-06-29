angular.module('searchTypeheadApp')

.service('clientDetails', function($filter) {

    var self = this;

    self.dummyDataList =  [
         {name:'Scott Bryan', email: 'sb@gmail.com', contact: '+91-750-665-4881',  policyNo: '001345221'},
         {name:'Scotty Bryan', email: 'sb@gmail.com', contact: '+91-750-665-4881',  policyNo: '001345221'},
         {name:'Ann Liebmann', email: 'alieb@gmail.com', contact: '+91-750-665-4881',  policyNo: '001345221'}
        ];
          
    self.getData = function(searchText) {
        var dataList = [];
        if(searchText && searchText.length > 0)
          dataList = $filter('filter')(self.dummyDataList, searchText)
        
        return dataList;
      }
  });
