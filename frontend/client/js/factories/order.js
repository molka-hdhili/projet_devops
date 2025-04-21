/**
 * Created by Tejas on 10/24/2015.
 */
customersApp.factory('orderFactory', function($http){
    var orders = [];  
    var factory = {};


    factory.getOrders = function(callback){
        $http.get(backendUrl + '/orders/show').success(function(output){
            callback(output);
        })
    }

    factory.addOrder = function(newOrder,callback) {
        newOrder.created_at = new Date();

        $http.post(backendUrl + '/orders/add',newOrder).success(function(output){
            console.log('new order added in client factory',output);
            console.log(output);
            callback(output);
        });
    };

    factory.editOrder = function(order, callback){
        console.log(order);
        $http.post(backendUrl + '/orders/edit',order).success(function(output){
            console.log('factory data edited:',output);
            callback(output);
        });
    };

    factory.deleteOrder = function(order,callback){
        $http.post(backendUrl + '/orders/delete',order).success(function(output){
            console.log(output);
            callback(output);
        })
    }
    return factory;
})