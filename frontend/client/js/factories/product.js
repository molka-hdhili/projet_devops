/**
 * Created by Tejas on 10/24/2015.
 */

customersApp.factory('productFactory', function($http){

    var products = [];  
    var factory = {};

	factory.getProducts = function(callback){
		$http.get(backendUrl + '/products/show').success(function(output){
			console.log('products',output);
			callback(output);
		})		
	};

	factory.addProduct = function(newProduct,callback){
		$http.post(backendUrl + '/products/add',newProduct).success(function(output){
			console.log('added product', output);
			callback(output);
		})
	};

	factory.showProduct = function(id,callback){
		$http.get(backendUrl + '/products/show/'+id).success(function(output){
			console.log('show one in view factory', output);
			callback(output);
		})
	};

	factory.editProduct = function(product,callback){
		$http.post(backendUrl + '/products/edit',product).success(function(output){
			console.log('edited product', output);
			callback(output);
		})
	};

	factory.deleteProduct = function(id,callback){
		console.log('delete in factory:',id);
		$http.post(backendUrl + '/products/delete/',id).success(function(output){
			console.log('deleted product', output);
			callback(output);
		});
	}
    return factory;
});