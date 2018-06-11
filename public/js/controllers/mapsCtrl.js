app.controller('mapsCtrl', function($scope, $location, $timeout, MapServices) {

    $scope.map= $location.search().map;
    $scope.id = $location.search().id;
    $scope.selectedAreaId = null;


    $scope.mapAreas = MapServices.getMapAreas();

    $scope.showAreaDetails = function(area){
        $scope.selectedArea = area;
        if($scope.selectedAreaId && $scope.selectedAreaId!='#'+area.id){
            var data = $($scope.selectedAreaId).mouseout().data('maphilight') || {};
            data.alwaysOn = false;
            $($scope.selectedAreaId).data('maphilight', data).trigger('alwaysOn.maphilight');
        }
        // else{}
        $scope.selectedAreaId = '#' + area.id;
        $($scope.selectedAreaId).mouseover();
        var data = $($scope.selectedAreaId).mouseout().data('maphilight') || {};
        data.alwaysOn = !data.alwaysOn;
        $($scope.selectedAreaId).data('maphilight', data).trigger('alwaysOn.maphilight');
    }


    if($scope.map === 'hogwarts')
        $scope.imgSrc = 'images/hogwarts.jpg';
    else 
        $scope.imgSrc = '';

    if($scope.id){
        var selectedArea=null;
        $scope.mapAreas.some(function(area){
            if(area.id===$scope.id){
                selectedArea = area;
                return true;
            }
        })
        $timeout(function(){
            $scope.showAreaDetails(selectedArea);
        }, 200)
    }

    $(function() {  
        $('.map').maphilight({
            fillColor: '008800'
        });

        //Highlight Area from Outside
        $('#hilightlink').mouseover(function(e) {
            $('#lake').mouseover();
        }).mouseout(function(e) {
            $('#lake').mouseout();
        }).click(function(e) { e.preventDefault(); });

        //Toggle Area Visibility
        $('#starlink').click(function(e) {
            e.preventDefault();
            var data = $('#lake').data('maphilight') || {};
            data.neverOn = !data.neverOn;
            $('#lake').data('maphilight', data);
        });

        //Toggle Always On
        $('#star,#starlink2').click(function(e) {
            e.preventDefault();
            var data = $('#lake').mouseout().data('maphilight') || {};
            data.alwaysOn = !data.alwaysOn;
            $('#lake').data('maphilight', data).trigger('alwaysOn.maphilight');
        });
    });
});
