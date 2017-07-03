angular.module('searchTypeheadApp')

.service('clientDetails', function($filter) {

    var self = this;

    self.dummyDataList =  [
         {name:'Scott Bryan', email: 'scottb@gmail.com', contact: '+91-750-665-4881',  policyNo: '001345221'},
         {name:'Aaron Hank', email: 'aronhank@gmail.com', contact: '+91-750-665-4881',  policyNo: '001345221'},
         {name:'Ann Liebmann', email: 'alieb@gmail.com', contact: '+91-750-665-4881',  policyNo: '001345221'},
         {name:'Scotty Bryan', email: 'sb@gmail.com', contact: '+91-750-665-4881',  policyNo: '001345221'},
         {name:'Chrysostom, John', email: 'johnc@gmail.com', contact: '+91-750-665-4881',  policyNo: '001345221'},
         {name:'Zappa, Frank', email: 'zapfrank@gmail.com', contact: '+91-750-665-4881',  policyNo: '001345221'}
        ];
          
    self.getData = function(searchText) {
        var dataList = [];
        if(searchText && searchText.length > 0)
          dataList = _.filter(self.dummyDataList, function (item) {
                  return self.searchfilter(item, searchText);
              });
        
        return dataList;
      }

      self.searchfilter = function(item, toSearch) {    
        return (item.name.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || item.policyNo.toLowerCase().indexOf(toSearch.toLowerCase()) > -1) ? true : false;
      } 

  });
