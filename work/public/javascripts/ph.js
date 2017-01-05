angular.module("myapp",[])
    .controller("phone",["$scope","$filter","$http",function($scope,$filter,$http){
        $http({url:"/ajax",method:"post"}),then(function(data){
            var data=data.data;
            var arr=[];
            for(var i = 0 ; i < data.length ; i++){
                var newarr=[];
                for(var j = 1 ; j < data.length; j++){
                    if(data[i].en==data[j].en && !data[j].flag){
                        data[j].flag=true;
                        newarr.push(data[i]);
                        newarr.en=data[i].en;
                    }
                }
                if(newarr.length>0){
                    arr.push(newarr);
                    var arr=$filter("orderBy")(arr,"en");
                }
            }
            $scope.data=arr;

        })
    }])