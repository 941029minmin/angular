angular.module("directives",[])
    .directive("menu",function(){
        return {
            restrict:"A",
            //template:"<div>div</div>"
            templateUrl:"demo.html",
            //replace:true
            transclude:true,
            //scope:true
            scope:{

            },
            link:function($scope,b,c){
                //a.abc="指令的scope";
                $scope.data=[
                    {
                        name:"111",
                        son:[
                            {name:"1-1"},
                            {name:"1-1"},
                            {name:"1-1"},
                        ]
                    },
                    {
                        name:"222",
                        son:[
                            {name:"1-1"},
                            {name:"1-1"},
                            {name:"1-1"},
                        ]
                    }
                ];
                $scope.a=0;
                $scope.change=function(id){
                    $scope.a=id;
                }
            }
        }
    }).directive("abc",function(){
    return
})