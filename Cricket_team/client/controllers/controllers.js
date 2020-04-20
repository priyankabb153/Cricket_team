myApp.controller('plaController', function($scope,$route,$routeParams,$http){
	$scope.getPlayer = function(){
		$http.get('/api/players/').then(function(response){
			$scope.players = response.data;
		});
	};
	$scope.showPlayer = function(){
		var id = $routeParams.id;
		$http.get('/api/players/'+ id).then(function(response){
			$scope.players = response.data;
		});
	};
	$scope.addPlayer = function(){
		//var id = $routeParams.id;
		$http.post('/api/players/', $scope.players).then(function(response){
			//$scope.players = response.data;
			window.location.href = '/';
		});
	};
	$scope.updatePlayer = function(){
		var id = $routeParams.id;
		$http.put('/api/players/'+ id , $scope.players).then(function(response){
			//$scope.players = response.data;
			window.location.href = '/';
		});
	};
	$scope.deletePlayer = function(id){
		var id = id;
		$http.delete('/api/players/'+ id).then(function(response){
			$route.reload();
		});
	};
	
});