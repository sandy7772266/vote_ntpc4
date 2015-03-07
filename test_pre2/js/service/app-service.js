(function(undefined) {
    // Get angular app
    var app = angular.module("App");
 
    app.factory("XLSXReaderService", ['$q', '$rootScope',
        function($q, $rootScope) {
            var service = function(data) {
                angular.extend(this, data);
            };
 
            service.readFile = function(file, showPreview) {
                var deferred = $q.defer();
 
                XLSXReader(file, showPreview, true, function(data){
                    $rootScope.$apply(function() {
                        deferred.resolve(data);
                    });
                });
 
                return deferred.promise;
            };
 
            return service;
        }
    ]);


    app.factory('ApiSrv', ['$rootScope', '$resource', function ($rootScope, $resource) {
    
    var res = {

        todo:$resource(
            'http://127.0.0.1/test2/public/api/todos/:id:action',
            {id: '@id'},
            { 
                'update': {method: 'PUT'},
                'clean': {method: 'DELETE'}
            }),
        user:$resource(
            'http://127.0.0.1/vote_ntpc/test2/public/api/users/:id:action',
            {id: '@id'},
            { 
                'update': {method: 'PUT'},
                'clean': {method: 'DELETE'}
            }),
        vote:$resource(
            'http://127.0.0.1/vote_ntpc2/test2/public/api/votes/:id:action',
            {id: '@id'},
            { 
                'update': {method: 'PUT'},
                'clean': {method: 'DELETE'}
            }),
    }


    
    return res;
}]);

}).call(this);


