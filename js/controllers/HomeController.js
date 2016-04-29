app.controller('HomeController', ['$scope', function($scope) {
	
	
	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//	
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating 
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    { 
      title:	'The Shawshank Redemption', 
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '10', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    { 
      title:	'The Godfather', 
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '03', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'[http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    { 
      title:	'The Godfather: Part II', 
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '12', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    { 
      title:	'The Dark Knight', 
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '07', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    { 
      title:	'Schindler\'s List', 
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '11', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},
    { 
      title:	'Titanic', 
      iscore:	7.7,
      rating:	'PG-13',
      runtime:	194,
      released:	new Date('1997', '12', '19'),
      country:	'USA',
      posters:	['img/titanic.jpg','img/titanic2.jpg','img/titanic3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0120338/',
      website:	'http://www.paramount.com/movies/titanic',
      likes:	1012,
      dislikes:	101,
      posterindex: 0
	},
    { 
      title:	'Harry Potter and the Deathly Hallows Part2', 
      iscore:	8.1,
      rating:	'PG-13',
      runtime:	130,
      released:	new Date('2011 ', '07', '15'),
      country:	'USA',
      posters:	['img/hp.jpg','img/hp2.jpg','img/hp3.jpg'],
      imdb:		'http://www.imdb.com/title/tt1201607/?ref_=nv_sr_2',
      website:	'https://www.warnerbros.co.uk/movies/harry-potter-and-the-deathly-hallows-part-2',
      likes:	1312,
      dislikes:	91,
      posterindex: 0
	},
	{ 
      title:	'Star Wars the Empire Strikes Back', 
      iscore:	8.8,
      rating:	'PG',
      runtime:	124,
      released:	new Date('1980', '06', '20'),
      country:	'USA',
      posters:	['img/sw1.jpg','img/sw2.jpg','img/sw3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0080684/',
      website:	'http://www.starwars.com/films/star-wars-episode-v-the-empire-strikes-back',
      likes:	982,
      dislikes:	111,
      posterindex: 0
	}
	
  ];
	
	

	
	/* ADD VARIABLES FOR STEP 3 HERE */
	
	
	$scope.title = "IMDB + Brittany's Top 8 Movies";
  
    $scope.owner = "Brittany";
  
    $scope.github = "https://github.com/bhobbs92/is219s2016-hobanp3";
	
	
	
	
	
	/* ADD FUNCTIONS FOR STEP 7 HERE */
    
	$scope.like = function(index) {
        
            $scope.movies[index].likes++;
            
        };
	$scope.dislike = function(index) {
        
            $scope.movies[index].dislikes--;
            
        };
  
      
    $scope.posterClick = function(index) 
    {
     //index=$scope.movies[index].posters;
          
      
  //Makes sure it loops the images
    if ($scope.movies[index].posterindex > $scope.movies[index].posters.length - 1) {
       $scope.movies[index].posterindex = 0;
    } else {
        $scope.movies[index].posterindex++;

    }
      
      

    };
  
  $scope.timeText= function(minutes)
  {
   
  
      $scope.hours = (Math.floor(Math.abs(minutes) / 60));  
      $scope.minutes = (Math.abs(minutes) % 60);  
      return  $scope.hours +'hrs '+$scope.minutes + 'min';  
  
    } ; 
  

  
	
	
}]);
