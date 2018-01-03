          
        
        var canvas = document.getElementById("canvas");
        var ctx = null;
          
      

        var tileH = 40;//tile height and width set to 40px
        var tileW = 40;
        var mapH; //number of tiles
        var mapW; 
        var currentSecond = 0, frameCount = 0, framesLastSecond = 0; var lastFrameTime = 0;
        var player = new Character();
        
        var wallPicture = new Array();
        wallPicture = [ "http://www.clker.com/cliparts/b/m/0/m/n/D/brick-wall-jail.svg",
        "https://s-media-cache-ak0.pinimg.com/236x/b2/5c/4e/b25c4e97e3ea30acaf41cfafff2e8191.jpg","https://s-media-cache-ak0.pinimg.com/originals/0e/98/9b/0e989bc5eae0aa4382e6ab07300b7b04.jpg"]; 
        //brick.src = wallPicture[0];
        var exit;
        var timeStart,gameTime = 0;
        var k =0;
        var gameTransistion;
        var moveX = 4;

        var time = 0;
        var gamePlay;
        var fiveMinutes;
        var spaceBarPressed = false;
        var status = 0;
        var levelStatus = 0;
        var dy = 3;
        var i = 0;
        var mapIndex;
        var n = 0;
        var enemyMotion = 0;
        var current_map = [];
         current_map = "Map"+n;
         var coinCollected = 0;
         var scoreFinal = 0;;
       
         
        var energyLevel = 200;
        
               
       
        
        var enemyInitialize = 0;


        var enemies = new Array();
        var bulletEnemy = new Array();
        var plan = new Array();
        var layouts = [Map0,Map1,Map2];
        var game = new Array;

        var de = 1;
        var ex = 10;
        var player_status = true;
        
        var player_enemy = true;
        var directionBullet;
                
        var shootBullet = false;
        var statusEnemies = true;
        var eneX, eneY, eneV,bneX, bneY;
        var bulletSpeed = 5;
        var coin = new Image;
        var player_Pic = new Image;
        var powerUpPic = new Image;
        var faster = new Image;
        var enemy_pic = new Image;
        var walkingArea = new Image;
        var brick = new Image;
        var image = new Image();
        var imageEnemy = new Image();

    
        imageEnemy.src = "https://www.programmingmind.com/assets/phaser/topdown/nazi-walk.png"
        image.src = "http://gamefroot.com/wp-content/files/2012/10/player-topdown.png";
        walkingArea.src = "https://s-media-cache-ak0.pinimg.com/736x/90/fc/e6/90fce6e9c6bd9581c6e10b5e1e75705f.jpg ";
        coin.src = "http://www.clker.com/cliparts/y/v/9/N/0/x/treasure-chest-hi.png";
        player_Pic.src = "https://themovieuniverse.files.wordpress.com/2012/04/wall-e.png";
        powerUpPic.src = "http://icons.iconarchive.com/icons/custom-icon-design/valentine/256/heart-icon.png";
        faster.src = "https://t7.rbxcdn.com/bd821fbe293d415cbd3520697f835735";
        enemy_pic.src = "https://s3.amazonaws.com/gameartpartnersimagehost/wp-content/uploads/2016/10/Fatty-Slug-Bug-featured.png";
        
        var shootingSound;
        var celebrationSound;
        var backgroundSound;
        var enemyShotSound;
        var playerDead = false;
        var shootSoundStatus = true;
        var celebrationSoundStatus = true;
        var enemyShotStatus = true; 
        var backgroundSoundStatus= true;



        function sound(src) {
          this.sound = document.createElement("audio");
          this.sound.src = src;
          this.sound.setAttribute("preload", "auto");
          this.sound.setAttribute("controls", "none");
          this.sound.style.display = "none";
          document.body.appendChild(this.sound);
          this.play = function(){

            this.sound.play();
             }
          this.stop = function(){

            this.sound.pause();
             }
           }


          
           shootingSound = new sound("Gun+Silencer.mp3");
           celebrationSound = new sound("celebration.wav");
           backgroundSound = new sound("background_music.mp3");
           enemyShotSound = new sound("EnemyKilled.wav");
