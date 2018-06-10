app.controller('mapsCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";

    $scope.mapAreas = [
    	{
    		id: 'lake', 
    		name:'The Black Lake', 
    		imgList: ['images/hogwarts/blacklake.jpg'],
    		desc:'The Great Lake[1][2] (alternatively known as the Black Lake[3]) is a large body of water, freshwater and landlocked, located to the south of Hogwarts Castle. It is about half a mile in diameter and the castle\'s plumbing network drains into it.\nEvery school year at Hogwarts, after the Hogwarts Express arrives at Hogsmeade Station, Rubeus Hagrid (or a substitute) calls the first years to follow him to the lake shore and the magic boats. Whereupon Hagrid occupies one boat and each other boat carries up to four students. The boats then self-propels across the lake to a dock under Hogwarts Castle as per tradition. (at the start of the 1994–1995 school year, first year Dennis Creevey said he fell into the lake and the Giant Squid pushed him back into a boat). Upon reaching the castle, Hagrid and the first years disembark and climb the stairs to the lawn, entering the castle through the front doors. First years then waited until summoned into the Great Hall to get Sorted into their houses. At the end of their first year, students take the boats back to Hogsmeade Station, while most older students ride down the lane in carriages.',
    		shape:'poly', 
    		coords:'218,178,305,175,297,191,363,243,360,248,390,248,394,236,438,262,413,282,386,279,370,298,386,317,350,320,301,298,312,277,270,295,255,289,215,272,223,249,214,230,158,213,214,206,230,189'
    	},
    	{
    		id: 'castle', 
    		name:'The Castle', 
    		imgList: ['images/hogwarts/castle.jpg'],
    		desc: 'In the novels, Hogwarts is somewhere in Scotland.(The film Prisoner of Azkaban says that Dufftown is near.) The school is depicted as having numerous charms and spells on and around it that make it impossible for a Muggle to locate it. Muggles cannot see the school; rather, they see only ruins and several warnings of danger.[GF Ch.11] The castle\'s setting is described as having extensive grounds with sloping lawns, flowerbeds and vegetable patches, a loch (called The Black Lake), a large dense forest (called the Forbidden Forest), several greenhouses and other outbuildings, and a full-size Quidditch pitch. There is also an owlery, which houses all the owls owned by the school and those owned by students. Some rooms in the school tend to "move around", and so do the stairs in the grand staircase.[12] Witches and wizards cannot Apparate or Disapparate in Hogwarts grounds, except when the Headmaster lifts the enchantment, whether only in certain areas or for the entire campus, so as to make the school less vulnerable when it serves the headmaster to allow Apparition.[GF Ch.28] Electricity and electronic devices are not found at Hogwarts. In Harry Potter and the Goblet of Fire, Hermione indicates that due to the high levels of magic, "substitutes for magic (that) Muggles use" such as computers, radar and electricity "go haywire" around Hogwarts. Radios however, make an exception. Rowling explains this by saying that the radios are not powered by electricity but by magic. Hogwarts is on the shore of a lake, sometimes called the Black Lake. In that lake are merpeople, Grindylows, and a giant squid. The giant squid does not attack humans and sometimes acts as a lifeguard when students are in the lake. Hogwarts is a coeducational, secondary boarding school, taking children from ages eleven to eighteen.[4] Education at Hogwarts is not compulsory, with some students being home schooled as stated in the seventh book. Rowling initially said there are about one thousand students at Hogwarts.[13] She later suggested around six hundred, while acknowledging that this number was still inconsistent with the small number of people in Harry\'s year. She further explained that this had resulted from her creating only 40 characters for Harry\'s year.Rowling has said that Hogwarts is "a multifaith school".[15] She has further stated on the subject, "The only people I never imagined there are Wiccans."[16] In response to the query, "[D]o you think there are a lot of LGBT students in modern age Hogwarts? I like to imagine they formed an LGBT club," Rowling replied, "But of course."',
    		shape:'poly', 
    		coords:'373,118,361,157,345,149,331,157,332,175,366,205,376,200,376,211,386,217,385,225,408,228,411,210,422,212,436,232,489,224,485,208,491,202,504,178,487,143,455,143,445,106,438,117,419,121,421,133,416,136,415,127,397,144,383,145'
    	},
    	{
    		id: 'quidditch', 
    		name:'Quidditch Pitch', 
    		imgList: ['images/hogwarts/quidditch.jpg'],
    		shape:'poly', 
    		desc:'Quidditch is a wizarding sport played on broomsticks. It is the most popular game and most well-known game among wizards and witches, and, according to Rubeus Hagrid, the equivalent to Muggles\' passion for football.The object of the game is to score more points than your opponents. Each goal is worth ten points and catching the Snitch is worth one-hundred fifty points. The game ends when the Snitch is caught or an agreement is reached between the captains of both teams. Some games can go on for many days if the Snitch is not caught (the record, according to Quidditch Through the Ages , is three months).',
    		coords:'206,146,238,148,242,152,248,149,248,145,256,139,257,124,255,124,249,114,240,122,224,125,220,120,208,128'
    	},
    	{
    		id: 'forbiddenForest', 
    		name:'The Forbidden Forest', 
    		imgList: ['images/hogwarts/forbiddenforest.jpg'],
    		shape:'poly', 
    		desc:'The Forbidden Forest, also known as the Dark Forest,[1][2] borders the edges of the Hogwarts School of Witchcraft and Wizardry grounds.The forest is a very old place that holds many secrets and houses many creatures, some dark and Dangerous, others friendly. The trees in the forest are considered ancient, they are dense and rough looking from years of exposure to the elements.As the forest\'s name suggests, it is strictly off limits to students — except in the case of detention, or Care of Magical Creatures lessons that occasionally take place there. Of course, with the various dangerous creatures living in the Forest, few students would even want to venture into it. Black flowers are known to grow in the forest.',
    		coords:'549,7,311,10,340,51,307,91,359,60,358,94,381,104,401,51,423,53,441,77,478,79,491,121,501,120,506,92,511,139,529,139,549,116'
    	},
    	{
    		id: 'hogsmeade', 
    		name:'Hogmeade', 
    		imgList: ['images/hogwarts/hogsmeadestation.jpg'],
    		shape:'poly', 
    		desc:'Hogsmeade Village, or simply called Hogsmeade, is the only all-wizarding village in Britain. It was founded by Hengist of Woodcroft who was in Hufflepuff. Since before 1714 (when the 1714 Edict was passed), Hogwarts third years and above have been permitted weekend trips into the village.[1] Mainly, students frequent the High Street in the village which contains the named specialty shops and pubs such as Zonko\'s Joke Shop and Honeydukes. Otherwise, they wander on to observe the infamous Shrieking Shack.Hogsmeade is a picturesque little village of cottages and shops, with enchanted candles hanging in the trees during the holidays. It is also near the location of the train station used by the Hogwarts Express.',
    		coords:'22,10,158,11,129,51,149,61,122,100,96,97,89,144,49,131,44,163,22,169'
    	}

    	
    	

    	// {id: 'lake', name:'Black Lake', shape:'poly', coords:'218,178,305,175,297,191,363,243,360,248,390,248,394,236,438,262,413,282,386,279,370,298,386,317,350,320,301,298,312,277,270,295,255,289,215,272,223,249,214,230,158,213,214,206,230,189'},
    ];

	$scope.selectedAreaId = null;
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
