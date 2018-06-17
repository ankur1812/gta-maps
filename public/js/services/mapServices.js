app.service('MapServices', function() {
    return {
    	getAreas : function(searchString){
	        var list = [
	            {name: "Hogwarts", map:'hogwarts'},
	            {name: "The Castle", map:'hogwarts', id:'castle'},
	            {name: "Black Lake", map:'hogwarts', id:'lake'},
	            {name: "Quidditch Pitch", map:'hogwarts', id:'quidditch'},
	            {name: "The Forbidden Forest", map:'hogwarts', id:'forbiddenForest'},
	            {name: "Hogsmeade", map:'hogwarts', id:'hogsmeade'},

	            {name: "Vice City", map:'vice-city'},
	            {name: "Ocean Beach", map:'vice-city', id:'ocean-beach'},
	            {name: "Escobar International", map:'vice-city', id:'escobar-international'},
	            {name: "Vice Port", map:'vice-city', id:'vice-port'},
	            {name: "Washington Beach", map:'vice-city', id:'washington-beach'},
	            {name: "Starfish Island", map:'vice-city', id:'starfish-island'},
	            {name: "Little Haiti", map:'vice-city', id:'little-haiti'},
	            {name: "Little Havana", map:'vice-city', id:'little-havana'},
	            {name: "Downtown", map:'vice-city', id:'downtown'},
	            {name: "Prawn Island", map:'vice-city', id:'prawn-island'},
	            {name: "Vice Point", map:'vice-city', id:'vice-point'},
	            {name: "Leaf Links", map:'vice-city', id:'leaf-links'},

	            {name: "San Andreas", map:'san-andreas'},
	            {name: "San Fierro", map:'san-andreas', id:'san-fierro'},
	            {name: "Los Santos", map:'san-andreas', id:'los-santos'},
	            {name: "Flint County", map:'san-andreas', id:'flint-county'},
	            {name: "Red County", map:'san-andreas', id:'red-county'},
	            {name: "Tierra Robada", map:'san-andreas', id:'tierra-robada'},
	            {name: "Whetstone", map:'san-andreas', id:'whetstone'},
	            {name: "Bone County", map:'san-andreas', id:'bone-county'},
	            {name: "Las Venturas", map:'san-andreas', id:'las-venturas'}
	        ];
	        function checkArea(area, str){
	        	return area.name.toLowerCase().indexOf(str)>-1 || area.map.toLowerCase().indexOf(str)>-1 || (area.id && area.id.toLowerCase().indexOf(str)>-1);
	        }
	        return list.filter(function(area){
	        	return checkArea(area, searchString.toLowerCase());
	        });
	    },
	    getMapAreas : function(map){
    	    var hogwartsAreas = [
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
		    ];
    	    var viceCityAreas = [
		        {
		            id: 'ocean-beach', 
		            name:'Ocean Beach', 
		            imgList: ['https://vignette.wikia.nocookie.net/gtawiki/images/a/ae/OceanBeach-GTAVC-southwestwards.jpg/revision/latest?cb=20100323170846', 'https://pre00.deviantart.net/fd78/th/pre/f/2013/285/8/1/gta_ocean_beach_by_scifilicious-d6q9i2f.jpg', 'http://www.igrandtheftauto.com/img/content/640x0/2638.jpg'],
		            desc:'Ocean Beach is a shopping district on the eastern island of Vice City and has the majority of Vice City\'s beach. In the initial stages of Grand Theft Auto: Vice City protagonist Tommy Vercetti resides in Ocean Beach at the Ocean View Hotel and can later purchase the Ocean Heights Apartment. Ocean Drive, a long road on the east side of Ocean Beach, is lined with hotels and is located right next to the beach. Ocean Beach had a population of 4,451 as of 1984. It is based on its real world counterpart South Beach.',
		            shape:'rect', 
		            coords:'270,403,464,589'
		        },
		        {
		            id: 'escobar-international', 
		            name:'Escobar international', 
		            imgList: ['https://www.gtavision.com/images/content/vc_map/big_festland1.jpg', 'https://vignette.wikia.nocookie.net/gtawiki/images/3/3e/EscobarInternational-GTAVC-southwards.jpg/revision/latest?cb=20100324120847'],
		            desc:'Escobar International Airport (VCI), also known as Vice City International Airport, is the airport in Vice City for both Grand Theft Auto: Vice City and Grand Theft Auto: Vice City Stories.Further north is the Fort Baxter Air Base, a military installation that houses military equipment and personnel, while Viceport (also referred to in road signs as "Vice Port"), the city\'s seaport, is located to the southeast.',
		            shape:'rect', 
		            coords:'3,266,144,556'
		        },
		        {
		            id: 'vice-port', 
		            name:'Vice Port', 
		            imgList: ['https://vignette.wikia.nocookie.net/gtawiki/images/e/e2/Viceport-GTAVC-northeastwards.jpg/revision/latest?cb=20100324115111', 'https://vignette.wikia.nocookie.net/gtawiki/images/0/0b/Boatyard-GTAVC-exterior.jpg/revision/latest?cb=20100324115701'],
		            desc:'Viceport is an industrial area in Vice City. There are many laborers working in this district, and as a result, most of the traffic is for commercial purposes. A Boatyard is also located here among the many warehouses, which would eventually be purchased by the Vercetti Gang circa 1986, the setting of Grand Theft Auto: Vice City. There are also freight ships surrounding the whole district. One of these freighters is owned by the Vice City Triads, and is believed to be used for a large-scale counterfeit operation. The Triads pay the Patrol Invest Group to keep trespassers off the ship. Due to the fact that the Triads have their freighter there, it\'s considered that Viceport is Triads turf, with the exception of the Boatyard. A Chartered Libertine Lines boat is docked in the boatyard. Industrial vehicles are seen driving around, with a Squalo and Jetmax parked at Tommy Vercetti\'s boatyard, although entering them activates a side mission. Viceport had a population of 36 as of 1984. Viceport also features a fuel depot which was destroyed in 1984, and repaired again in 1986.',
		            shape:'rect', 
		            coords:'151,395,254,539'
		        },
		        {
		            id: 'washington-beach', 
		            name:'Washington Beach', 
		            imgList: ['https://vignette.wikia.nocookie.net/gtawiki/images/3/3a/WashingtonBeach-GTAVC-northwestwards.jpg/revision/latest?cb=20100323170615', 'http://www.igrandtheftauto.com/img/content/640x0/2638.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDL-sy0NtafNVQS3WONBAyK-lKxOkcTMDhixZ4nH3WkV9duG2F'],
		            desc:'Washington Beach is a small district in Vice City. The Washington Mall, a small open-air mall, is located in the area. Situated in between Vice Point and Ocean Beach, the district is only a few blocks long. 1102 Washington Street is located here, right across from Ken Rosenberg\'s office. The district seems to have several small shops, all inaccessible. This is where Tommy Vercetti begins his adventure (in Grand Theft Auto: Vice City). The area hasn\'t changed significantly between the events of Grand Theft Auto: Vice City Stories and Grand Theft Auto: Vice City, although the mall has yet to be constructed in GTA Vice City Stories, and the Washington Beach Fairground no longer exists in GTA Vice City. The district has a population of 2,330 as of 1984.',
		            shape:'rect', 
		            coords:'331,311,527,396'
		        },
		        {
		            id: 'starfish-island', 
		            name:'Starfish Island', 
		            imgList: ['https://vignette.wikia.nocookie.net/gtawiki/images/4/49/Starfish_Island_%28GTAVC%29.jpg/revision/latest?cb=20100914052419', 'http://www.igrandtheftauto.com/img/content/2643.jpg', 'https://vignette.wikia.nocookie.net/rockstargamesgtavicecity/images/3/3e/Starfish_island_overhead.png/revision/latest?cb=20110918012238'],
		            desc:'Starfish Island is a large oval-shaped island at the center of Vice City\'s bay. Located between southern Vice Beach and Vice City Mainland, Starfish Island is a wealthy district containing lavish mansions and large estates with swimming pools, large garages and parked speedboats. There are also two swimming pools in the shape of a Rockstar logo and a bikini clad woman on the island in the yards of two mansions. The island has an estimated population of 33. The Patrol Invest Group provide protection for most of the island\'s residents while the estate has its own gangs for protection, Diaz\'s Gang and the Vercetti Gang. VCPD officers however, are sometimes seen chasing the Patrol Invest Group guards.',
		            shape:'rect', 
		            coords:'228,304,322,392'
		        },
		        {
		            id: 'little-havana', 
		            name:'Little Havana', 
		            imgList: ['https://www.grandtheftwiki.com/images/thumb/LittleHavana-GTAVC-southeastwards.jpg/360px-LittleHavana-GTAVC-southeastwards.jpg', 'http://images1-1.gamewise.co/205632-full.jpeg'],
		            desc:'Little Havana is a district in the Grand Theft Auto: Vice City and Grand Theft Auto: Vice City Stories renditions of Vice City, Florida.Located in central Vice City Mainland, it neighbors Viceport and Escobar International (and Fort Baxter) to the south and southwest, Little Haiti to the north, and Starfish Island to the east. Little Havana is generally a low-rise, low density district implied by name to be an enclave for Cuban immigrants to Vice City, with larger buildings concentrated towards the northeast, and low density commercial and residential buildings huddled to the west. The Cuban flavor of the district is reflected by the presence of businesses with signage utilizing Spanish language, as well as the architectural aesthetics of the southern half of the district. While more dense than neighboring Little Haiti, the district still contains swatches of greenspace in the suburban block to the northwest and around Sunshine Autos to the south. In GTA Vice City Stories, set two years earlier in 1984, the latter is redesigned, relocating Sunshine Autos slightly northwards while a trailer park (the base of operation for the Trailer Park Mafia) is added in parts of the field. Like Little Haiti, Little Havana\'s eastern shoreline is lined with disused docks.In GTA Vice City Stories, connectivity between Little Havana and Escobar International is substantially improved with a road between the old Sunshine Autos and the road to Terminal A added to cut traveling time between much of Vice City Mainland and the airport. In addition, a wooden bridge is also placed between the road to Fort Baxter and Little Havana\'s old docks, in front of The Big Package Storage Co..',
		            shape:'rect', 
		            coords:'147,314,221,389'
		        },
		        {
		            id: 'little-haiti', 
		            name:'Little Haiti', 
		            imgList: ['https://www.grandtheftwiki.com/images/thumb/LittleHaiti-GTAVC-aerialview.jpg/800px-LittleHaiti-GTAVC-aerialview.jpg', 'https://www.grandtheftwiki.com/images/thumb/JunkYard-GTAVC-aerialview.jpg/800px-JunkYard-GTAVC-aerialview.jpg', 'https://www.grandtheftwiki.com/images/thumb/LittleHaiti-GTAVC-northeastwards.jpg/800px-LittleHaiti-GTAVC-northeastwards.jpg'],
		            desc:'Little Haiti is a district in Vice City, which is predominantly inhabited by Haitians and is home to the Haitians gang. The Haitians are led by Auntie Poulet, from her small wooden shack, which is in a slum in the center of Little Haiti. Little Haiti is noted to be more run-down than Little Havana, with the presence of poorly maintained buildings, low-wealth businesses and smaller homes. The gang\'s solvent factory, located at the west side of Little Haiti, was destroyed in a Cuban ambush, aided by Tommy Vercetti.A large printing press, which would be purchased by Tommy Vercetti later in the storyline for money counterfeiting, is located at the border between Little Haiti and Little Havana. Phil Cassidy\'s home and weapons armory is located on the northwest end of Little Haiti. Kaufman Cabs, a local taxi cab company, is also based in Little Haiti, located a block north of Auntie Poulet\'s shack.In Grand Theft Auto: Vice City Stories, Little Haiti is under control of the Cholos street gang at the time also controlled Little Havana. The Cholos were presumably to be wiped out after their weapon warehouse was destroyed by Victor Vance and the Cubans leaving Little Haiti open for the Haitian control which takes place two years later.An area within Little Haiti has its own zone name: Junk Yard. It consists of equipments and vehicles associated to junk yards in real life.',
		            shape:'rect', 
		            coords:'127,210,244,316'
		        },
		        {
		            id: 'downtown', 
		            name:'Downtown', 
		            imgList: ['https://vignette.wikia.nocookie.net/gtawiki/images/d/da/Downtown-GTAVC-southeastwards.jpg/revision/latest?cb=20100323112158'],
		            desc:'Downtown is the business sector of Vice City in Grand Theft Auto: Vice City and Grand Theft Auto: Vice City Stories. It is bordered by Little Haiti to the south and an unnamed body of water to the north, east and west. Downtown is the northernmost area in the city. Much like Downtown Miami, it contains most of the city\'s skyscrapers, including the tallest structure in the city. The Hyman Memorial Stadium hosts events such as concerts, stock car races, demolition derbies and dirt bike stunt shows. Downtown is the location for the local heavy metal radio station V-Rock and an enclosed recording studio. An Ammu-Nation store is also located here. The area had a population of 4,558 as of 1984.',
		            shape:'rect', 
		            coords:'92,10,313,202'
		        },
		        {
		            id: 'prawn-island', 
		            name:'Prawn Island', 
		            imgList: ['https://vignette.wikia.nocookie.net/gtawiki/images/0/04/Prawn_Island_%28GTAVC%29.jpg/revision/latest?cb=20100919180320', 'https://vignette.wikia.nocookie.net/gta/images/a/a1/PrawnIsland.jpg/revision/latest/scale-to-width-down/300?cb=20101213213859&path-prefix=pt'],
		            desc:'Located between Downtown and Vice Point, the island is a combination of both residential and industrial buildings, with the InterGlobal Films studios and several nondescript offices on the south side and several lavish mansions on the north. In Grand Theft Auto: Vice City, it is the turf of the Sharks. The name is play on the name for a crab, prawn, and pron, the alternative name for pornography, due to InterGlobal Films\' role in the pornographic film industry. The island had a estimated population of 66 as of 1984. During Grand Theft Auto: Vice City Stories, Prawn Island has several beautiful villas, but by the time of GTA: Vice City they have been abandoned, boarded up, and taken over by the Sharks. Prawn Island was the main base of the Mendez Cartel where their mansion was located, and was later abandoned upon the death of their leaders and fallen into the hands of the Sharks.',
		            shape:'rect', 
		            coords:'364,43,318,143'
		        },
		        {
		            id: 'vice-point', 
		            name:'Vice Point', 
		            imgList: ['https://vignette.wikia.nocookie.net/gtawiki/images/6/63/VicePoint-GTAVC-northwards.jpg/revision/latest/scale-to-width-down/325?cb=20091126151624', 'https://vignette.wikia.nocookie.net/gta-myths/images/4/4f/Vice_Point_VC.png/revision/latest?cb=20180409191639'],
		            desc:'Vice Point is a more middle class and residential area of Vice Beach, covering the remaining areas of the island at the north, and consisting of larger apartment buildings and hotels aligned along the shore as well as medium sized homes and smaller apartment complexes inland. The part of Vice Beach that is located in the area includes a dirtbike track (only in Grand Theft Auto: Vice City).The North Point Mall (known as Vice Point Mall in Grand Theft Auto: Vice City Stories), is a large mall located in the north end of Vice Point, which is accessible by the player. The mall, among others, contains a few eateries, as well as two weapons stores and a clothing pickup. In the GTA Vice City Stories rendition, the layout is essentially the same, though some of the businesses that are in 1986 are not there in 1984. There is only one weapons store. Vice Point had a population of 12,830 as of 1984, being the most populous neighborhood in the city.The Malibu Club is situated on southern Vice Point. A police department is also located further north, as is another hospital, along with the El Swanko Casa safehouse.',
		            shape:'rect', 
		            coords:'503,55,367,299'
		        },
		        {
		            id: 'leaf-links', 
		            name:'Leaf Links', 
		            imgList: ['https://vignette.wikia.nocookie.net/gta-myths/images/2/25/Leaf_Links_VC.png/revision/latest?cb=20180409184024', 'https://vignette.wikia.nocookie.net/gtawiki/images/b/b6/LeafLinks-GTAVC-northwestwards.jpg/revision/latest?cb=20100323165120'],
		            desc:'Leaf Links is a golf course in Grand Theft Auto: Vice City and Grand Theft Auto: Vice City Stories based on a chain of islands in Vice City. Located just west of Vice Beach, it is surrounded by water and condominiums, and is a major attraction for the wealthy. Golfers are constantly seen in the area. Caddies spawn around the course, and a Comet spawns outside the clubhouse on the driveway. Two Patrol Invest Group guards stand at the entrance.Firearms and other weapons (with the exception of brass knuckles) are not permitted on the course, and a metal-detector is located at the entrance, which automatically strips all weapons from the player and leaves them to be collected outside. However, only six weapons will be left outside, so if the player has more than six weapons in their inventory then not all will be returned.',
		            shape:'rect', 
		            coords:'294,165,388,306'
		        },
		    ];

    	    var sanAndreasAreas = [
		        {
		            id: 'san-fierro', 
		            name:'San Fierro', 
		            imgList: ['https://vignette.wikia.nocookie.net/gtawiki/images/4/44/SanFierro_GTASA_montage.jpeg/revision/latest?cb=20120227123715', 'https://vignette.wikia.nocookie.net/gtawiki/images/a/a7/DowntownSanFierro.jpg/revision/latest?cb=20100610111826', 'https://vignette.wikia.nocookie.net/gtawiki/images/7/74/SanFierro.jpg/revision/latest?cb=20080604043148'],
		            desc:'The City of San Fierro, commonly known as San Fierro, is a city located in San Andreas and is the second fictional city encountered in Grand Theft Auto: San Andreas, and is based on real-life San Francisco, California. San Fierro is the second largest city in population and smallest in area in San Andreas. San Fierro has a majority Asian population and is very diverse, economically and ethnically. It is the most urbanized city, and is situated on a peninsula on the western part of the state. South of the city lies the massive Mount Chiliad (based on Mount Diablo) and the small town of Angel Pine in Whetstone. To the north of the city, across the Gant Bridge (a re-creation of the famous Golden Gate Bridge), lies the town of Bayside, and northeast of the city lies the county of Tierra Robada. San Fierro is a moderately sized city with the beautiful San Fierro Bay (based on San Francisco Bay) to the northeast and The Panopticon to the east. San Fierro is connected to Los Santos and Las Venturas by road, rail and air.',
		            shape:'rect', 
		            coords:'250,113,3,317'
		        },
		        {
		            id: 'los-santos', 
		            name:'Los Santos', 
		            imgList: ['https://vignette.wikia.nocookie.net/gtawiki/images/0/00/DowntownLosSantos-GTASA-northwards.jpg/revision/latest?cb=20100321123244', 'https://vignette.wikia.nocookie.net/gtawiki/images/5/5f/L_S_3DU.jpg/revision/latest/scale-to-width-down/350?cb=20130428070518'],
		            desc:'The City of Los Santos, commonly known as Los Santos, is a fictional city located in the State of San Andreas, and it is the first city encountered in Grand Theft Auto: San Andreas. It is based on Los Angeles, California. Los Santos translates to \'The Saints\', a play on Los Angeles, meaning \'The Angels\'. This also applies to the two cities\' nicknames - "The City of the Saints" and "City of Angels". Los Santos is the largest and most populous city in the state. It is situated on the southeastern part of San Andreas, south of Red County and east of Flint County. Los Santos is a major world centre for motion picture, television and other related entertainment industries.',
		            shape:'rect', 
		            coords:'524,317,264,523'
		        },
		        {
		            id: 'flint-county', 
		            name:'Flint County', 
		            imgList: ['https://vignette.wikia.nocookie.net/gtawiki/images/6/67/Flint.jpg/revision/latest/scale-to-width-down/350?cb=20080711002031', 'https://vignette.wikia.nocookie.net/gtawiki/images/b/b3/FlintCountySafehouse.jpg/revision/latest?cb=20080702012348'],
		            desc:'Flint County is a heavily forested region of San Andreas, which appears in Grand Theft Auto: San Andreas. Flint County comprises the southwestern portion of the map, and is connected to the remaining land masses by numerous bridges. To the east of Flint County is Los Santos and Red County, to the north is San Fierro, and to the west is Whetstone. Flint County is the least populated area in San Andreas, and has no towns, yet is one of the largest counties in the state. Flint County is characterized by its rugged terrain. Back o Beyond, which includes the entire southern half of the county, is hilly and virtually uninhabited except for a couple gas stations. There are a few farms in the northern and western parts, and most of the northern part is mountainous and difficult to cross off-road. Sasquatch Creek separates Flint County and Whetstone, while Flint Water, the Los Santos Inlet, and an unnamed river form the border with Los Santos and Red County.',
		            shape:'rect', 
		            coords:'124,324,255,518'
		        },
		        {
		            id: 'red-county', 
		            name:'Red County', 
		            imgList: ['https://vignette.wikia.nocookie.net/gtawiki/images/2/21/RedCounty.jpg/revision/latest/scale-to-width-down/350?cb=20080608204335', 'http://www.gtainside.com/downloads/picr/2016-08/1472679295_gallery353.jpg'],
		            desc:'Red County is an area located just outside of Los Santos in the State of San Andreas. It appears in Grand Theft Auto: San Andreas. The area appears to be based the real-life Kern County and has four towns: Palomino Creek, Montgomery, Blueberry and Dillimore. Red County is a rural area, containing many hills and forests, and a stream resembling the real-life Kern River flows through it, from Palomino Creek in the east to Flint County in the west. There are also many farms in Red County, like Blueberry Acres and the Hilltop Farm.',
		            shape:'rect', 
		            coords:'255,234,524,311'
		        },
		        {
		            id: 'tierra-robada', 
		            name:'Tierra Robada', 
		            imgList: ['https://vignette.wikia.nocookie.net/gtawiki/images/4/47/TierraRobada.jpg/revision/latest?cb=20080617084500'],
		            desc:'Tierra Robada, which means Stolen Land in Spanish, is a semi-arid region of San Andreas in Grand Theft Auto: San Andreas. It is located in the very northwestern portion of the map, and is home to the city of Bayside and the marina, as well as the small towns of El Quebrados and Las Barrancas. It is usually considered to be a separate county from Bone County, since it is physically separated from Bone County by the Sherman Dam and the Sherman Reservoir, with only a land bridge in the north connecting the two land masses. The west side of Tierra Robada surrounding the freeway is oak savanna. The east side are badlands.Tierra Robada\'s southern tip also provides the land area for the Robada Intersection, which is the major interchange connecting the highways servicing Tierra Robada, San Fierro, Las Venturas, and Bone County.',
		            shape:'rect', 
		            coords:'249,109,3,2'
		        },
		        {
		            id: 'whetstone', 
		            name:'Whetstone', 
		            imgList: ['https://vignette.wikia.nocookie.net/gtawiki/images/a/a7/MountChiliad2.jpg/revision/latest?cb=20100418092556', 'http://www.gtainside.com/downloads/dl/NEW.jpg'],
		            desc:'Whetstone is a forested island region of San Andreas separated from the remaining landmass by a narrow channel. It is home to the small town of Angel Pine and the massive Mount Chiliad, the tallest feature in the entire state of San Andreas. Whetstone is one of the most sparsely-populated counties in San Andreas (second only to Flint County), with the only settlement being Angel Pine, which is located on a flat plain at the base of Mount Chiliad. There is a beach situated to the south of Angel Pine. The rest of the county consists of the forested region of Shady Creeks. It is somewhat based on Contra Costa County in California.',
		            shape:'rect', 
		            coords:'113,325,4,523'
		        },
		        {
		            id: 'bone-county', 
		            name:'Bone County', 
		            imgList: ['https://vignette.wikia.nocookie.net/gtawiki/images/4/40/Area69-GTASA-AerialView.jpg/revision/latest?cb=20110925130233', 'https://vignette.wikia.nocookie.net/gta-san-andreas-mysterien/images/7/7b/Bone_county.jpg/revision/latest?cb=20150109173904&path-prefix=de'],
		            desc:'Bone County is the desert region spanning the northern and northeastern portions of San Andreas in Grand Theft Auto: San Andreas.',
		            shape:'rect', 
		            coords:'250,229,348,5'
		        },
		        {
		            id: 'las-venturas', 
		            name:'Las Venturas', 
		            imgList: ['https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/7/72/LV_Strip.png/revision/latest?cb=20150528185445', 'https://vignette.wikia.nocookie.net/gtawiki/images/a/a4/LvPanoramoCha.JPG/revision/latest/scale-to-width-down/350?cb=20130428080548'],
		            desc:'The City of Las Venturas, commonly known as Las Venturas, is the second largest city by area and least populous in the State of San Andreas and the third and final city encountered in Grand Theft Auto: San Andreas. Las Venturas is Spanish for "The Fortunes".Las Venturas is the second largest city by area and least populous in the state of San Andreas. It is a gambling city located in a desert region in the north east of San Andreas, connected to the neighboring Bone County to the east, with Los Santos directly south of it and San Fierro to the south west. It is famous for its renowned Strip, which runs through the middle of the city and is lined with numerous casinos including Caligula\'s Palace and The Four Dragons Casino. Everything that can be bought in Las Venturas, except the Pay \'n\' Spray service, is 20% more expensive than in Los Santos or San Fierro.',
		            shape:'rect', 
		            coords:'344,212,518,6'
		        }


		    ];

		    if(map==='hogwarts')
		    	return hogwartsAreas;
		    else if(map==='vice-city')
		    	return viceCityAreas;
		    else if(map==='san-andreas')
		    	return viceCityAreas;
		    else
		    	return hogwartsAreas;

	    }


    }
});