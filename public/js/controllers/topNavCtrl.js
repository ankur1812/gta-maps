/**
 * Created by aanmol on 6/3/18.
 */
app.controller('topNavCtrl', function($scope, MapServices) {
    $scope.getMapAreas = function(){
        var list = MapServices.getAreas();
        return list;
    }

});