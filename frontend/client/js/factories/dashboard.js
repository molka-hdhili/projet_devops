/**
 * Created by Tejas on 10/24/2015.
 */
// Dashboard FACTORY
customersApp.factory('dashboardFactory', function($http){
    var factory = {};
    
    // Exemple de requête vers le backend, utilise backendUrl
    factory.getDashboardData = function(callback){
        $http.get(backendUrl + '/dashboard/data').success(function(output){
            console.log(output);
            callback(output);
        });
    };
    return factory;
});
