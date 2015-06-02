'use strict';

/**
 * @ngdoc overview
 * @name stablegridApp
 * @description
 * # stablegridApp
 *
 * Main module of the application.
 */
angular
  .module('stablegridApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap.position',
    'ui.bootstrap.bindHtml',
    'ui.bootstrap.dropdown',
    'ui.bootstrap.buttons',
    'ui.bootstrap.typeahead'
  ]);

  angular.module('stablegridApp')
    .controller('ExtendedCtrl', function ($scope,$http) {});

  angular.module('stablegridApp')
    .controller('MainCtrl', function ($scope,$http) {

      $scope.ddOptions1 = 'Basic Drop Down';

      $scope.ddOptions2 = {};

      $scope.viewOptions = {};

      $scope.hidecname = false;

      $scope.tabArray = [
          {'ind':0,'val':'Tab A'},
          {'ind':1,'val':'Tab B'},
          {'ind':2,'val':'Tab C'},
          {'ind':3,'val':'Tab D'},
          {'ind':4,'val':'Tab E'},
          {'ind':5,'val':'Tab F'},
          {'ind':6,'val':'Tab G'},
          {'ind':7,'val':'Tab H'},
          {'ind':8,'val':'Tab I'},
          {'ind':9,'val':'Tab J'}
      ];
      $scope.viewOptions = [
          {'show':true,'title':'Basic Blocks'},
          {'show':true,'title':'Media Width Blocks'},
          {'show':true,'title':'Nested Blocks'},
          {'show':true,'title':'Set Width Blocks'},
          {'show':true,'title':'Basic Buttons'},
          {'show':true,'title':'Button Sets'},
          {'show':true,'title':'Radio Buttons'},
          {'show':true,'title':'Dropdown Elements'},
          {'show':true,'title':'Inputs with Buttons'},
          {'show':true,'title':'Tabs'},
          {'show':true,'title':'Typeahead'},
          {'show':true,'title':'Typeahead Horizontal'},
      ];

      $scope.tabs = $scope.tabArray[0];


      // Watch for changens to the tab scope
      $scope.$watch('tabs',function(value){

          console.log(value,'Tab value');

      });

      $scope.hideClass = function(index,length){

          if(index < length){
              return true;
          }

          return false;

      };

      $scope.swapModel = function(index){

          $scope.tabs = $scope.tabArray[index];

          $scope.tabArray.splice(index,1);

          $scope.tabArray.unshift($scope.tabs);

      };

      // Functions for the Typeahead directive


          $scope.matches = ['Match 01','Match 02'];

          $scope.getLocation = function(val) {
             return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
               params: {
                 address: val,
                 sensor: false
               }
             }).then(function(response){

                var data = response.data.results.map(function(item){

                  return {'address':item.formatted_address};

                });

                // If the length of the input's value is longer than 2 then it should be added as an available match.
                if(val.length > 2){

                  data.push({'address':val,oclass:'Lgt5- c_Drk'});

                }

                return data;
             });
           };


          $scope.$watch('selected',function(value){

              if(angular.isObject(value)){

                  $scope.matches.push(value.address);

                  $scope.selected = '';
                  
              }
              // console.log(value);
          });

          $scope.$watch('selected2',function(value){

              if(angular.isObject(value)){

                  $scope.matches.push(value.address);

                  $scope.selected2 = '';
                  
              }
              // console.log(value);
          });

          $scope.removeLast = function($event,selected){

              if(!selected && $event.which === 8){

                  $scope.matches.pop();
                  
              }

          };

    });

    angular.module('stablegridApp')
      .controller('ColorsCtrl', function ($scope) {

        $scope.colours = [
          {
            'classname':'c_A_',
            'modifiers':[
              {'val':''},
              {'val':'Drk1-'},
              {'val':'Drk2-'},
              {'val':'Drk3-'},
              {'val':'Drk4-'},
              {'val':'Drk5-'},
              {'val':'Drk6-'},
              {'val':'Drk7-'},
              {'val':'Drk8-'},
              {'val':'Drk9-'},
            ]
          },
          {
            'classname':'c_A_',
            'modifiers':[
              {'val':'Lgt9-'},
              {'val':'Lgt8-'},
              {'val':'Lgt7-'},
              {'val':'Lgt6-'},
              {'val':'Lgt5-'},
              {'val':'Lgt4-'},
              {'val':'Lgt3-'},
              {'val':'Lgt2-'},
              {'val':'Lgt1-'},
              {'val':''},
            ]
          },
          {
            'classname':'c_Drk_',
            'modifiers':[
              {'val':'Lgt9-'},
              {'val':'Lgt8-'},
              {'val':'Lgt7-'},
              {'val':'Lgt6-'},
              {'val':'Lgt5-'},
              {'val':'Lgt4-'},
              {'val':'Lgt3-'},
              {'val':'Lgt2-'},
              {'val':'Lgt1-'},
              {'val':''},
            ]
          },
          {
            'classname':'c_Lgt_',
            'modifiers':[
              {'val':''},
              {'val':'Drk1-'},
              {'val':'Drk2-'},
              {'val':'Drk3-'},
              {'val':'Drk4-'},
              {'val':'Drk5-'},
              {'val':'Drk6-'},
              {'val':'Drk7-'},
              {'val':'Drk8-'},
              {'val':'Drk9-'}
            ]
          }
        ];

      });

'use strict';

/**
 * @ngdoc function
 * @name stablegridApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stablegridApp
 */
angular.module('stablegridApp')
  .controller('MainCtrl', function ($scope,$http) {

    $scope.ddOptions1 = 'Basic Drop Down';

    $scope.ddOptions2 = {};

    $scope.viewOptions = {};

    $scope.hidecname = false;

    $scope.tabArray = [
        {'ind':0,'val':'Tab A'},
        {'ind':1,'val':'Tab B'},
        {'ind':2,'val':'Tab C'},
        {'ind':3,'val':'Tab D'},
        {'ind':4,'val':'Tab E'},
        {'ind':5,'val':'Tab F'},
        {'ind':6,'val':'Tab G'},
        {'ind':7,'val':'Tab H'},
        {'ind':8,'val':'Tab I'},
        {'ind':9,'val':'Tab J'}
    ];
    $scope.viewOptions = [
        {'show':true,'title':'Basic Blocks'},
        {'show':true,'title':'Media Width Blocks'},
        {'show':true,'title':'Nested Blocks'},
        {'show':true,'title':'Set Width Blocks'},
        {'show':true,'title':'Basic Buttons'},
        {'show':true,'title':'Button Sets'},
        {'show':true,'title':'Radio Buttons'},
        {'show':true,'title':'Dropdown Elements'},
        {'show':true,'title':'Inputs with Buttons'},
        {'show':true,'title':'Tabs'},
        {'show':true,'title':'Typeahead'},
        {'show':true,'title':'Typeahead Horizontal'},
    ];

    $scope.tabs = $scope.tabArray[0];


    // Watch for changens to the tab scope
    $scope.$watch('tabs',function(value){

        console.log(value,'Tab value');

    });

    $scope.hideClass = function(index,length){

        if(index < length){
            return true;
        }

        return false;

    };

    $scope.swapModel = function(index){

        $scope.tabs = $scope.tabArray[index];

        $scope.tabArray.splice(index,1);

        $scope.tabArray.unshift($scope.tabs);

    };

    // Functions for the Typeahead directive


        $scope.matches = ['Match 01','Match 02'];

        $scope.getLocation = function(val) {
           return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
             params: {
               address: val,
               sensor: false
             }
           }).then(function(response){

              var data = response.data.results.map(function(item){

                return {'address':item.formatted_address};

              });

              // If the length of the input's value is longer than 2 then it should be added as an available match.
              if(val.length > 2){

                data.push({'address':val,oclass:'Lgt5- c_Drk'});

              }

              return data;
           });
         };


        $scope.$watch('selected',function(value){

            if(angular.isObject(value)){

                $scope.matches.push(value.address);

                $scope.selected = '';
                
            }
            // console.log(value);
        });

        $scope.$watch('selected2',function(value){

            if(angular.isObject(value)){

                $scope.matches.push(value.address);

                $scope.selected2 = '';
                
            }
            // console.log(value);
        });

        $scope.removeLast = function($event,selected){

            if(!selected && $event.which === 8){

                $scope.matches.pop();
                
            }

        };

  });

'use strict';

/**
 * @ngdoc function
 * @name stablegridApp.controller:ColoursCtrl
 * @description
 * # ColoursCtrl
 * Controller of the stablegridApp
 */
angular.module('stablegridApp')
  .controller('ColorsCtrl', function ($scope) {

    $scope.colours = [
    	{
    		'classname':'c_A_',
    		'modifiers':[
    			{'val':''},
    			{'val':'Drk1-'},
    			{'val':'Drk2-'},
    			{'val':'Drk3-'},
    			{'val':'Drk4-'},
    			{'val':'Drk5-'},
    			{'val':'Drk6-'},
    			{'val':'Drk7-'},
    			{'val':'Drk8-'},
    			{'val':'Drk9-'},
    		]
    	},
    	{
    		'classname':'c_A_',
    		'modifiers':[
    			{'val':'Lgt9-'},
    			{'val':'Lgt8-'},
    			{'val':'Lgt7-'},
    			{'val':'Lgt6-'},
    			{'val':'Lgt5-'},
    			{'val':'Lgt4-'},
    			{'val':'Lgt3-'},
    			{'val':'Lgt2-'},
    			{'val':'Lgt1-'},
    			{'val':''},
    		]
    	},
    	{
    		'classname':'c_Drk_',
    		'modifiers':[
    			{'val':'Lgt9-'},
    			{'val':'Lgt8-'},
    			{'val':'Lgt7-'},
    			{'val':'Lgt6-'},
    			{'val':'Lgt5-'},
    			{'val':'Lgt4-'},
    			{'val':'Lgt3-'},
    			{'val':'Lgt2-'},
    			{'val':'Lgt1-'},
    			{'val':''},
    		]
    	},
    	{
    		'classname':'c_Lgt_',
    		'modifiers':[
    			{'val':''},
    			{'val':'Drk1-'},
    			{'val':'Drk2-'},
    			{'val':'Drk3-'},
    			{'val':'Drk4-'},
    			{'val':'Drk5-'},
    			{'val':'Drk6-'},
    			{'val':'Drk7-'},
    			{'val':'Drk8-'},
    			{'val':'Drk9-'}
    		]
    	}
    ];

  });

'use strict';

/**
 * @ngdoc function
 * @name stablegridApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stablegridApp
 */
angular.module('stablegridApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name stablegridApp.controller:ExtendedCtrl
 * @description
 * # ExtendedCtrl
 * Controller of the stablegridApp
 */




 
angular.module('stablegridApp')
  .controller('ExtendedCtrl', function ($scope,$http) {});
