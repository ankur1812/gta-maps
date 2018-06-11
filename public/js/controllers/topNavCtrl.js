/**
 * Created by aanmol on 6/3/18.
 */
app.controller('topNavCtrl', function($scope) {
    $scope.getMapAreas = function(){
        var list = [
            {name: "The Castle", map:'hogwarts', id:'castle'},
            {name: "Black Lake", map:'hogwarts', id:'lake'},
            {name: "Quidditch Pitch", map:'hogwarts', id:'quidditch'},
            {name: "The Forbidden Forest", map:'hogwarts', id:'forbiddenForest'},
            {name: "Hogsmeade", map:'hogwarts', id:'hogsmeade'},

        ];
        return list;
    }

});