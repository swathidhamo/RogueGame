
        

        var canvas = document.getElementById("canvas");
        var ctx = null;
  
        var random = Math.random();
      /*all the 0 and multiples of n of the n*n array as well as the value of 0 to n-1 as well as (n*n)-(n) = n(n-1) to n*n - 1
        will all have 0
       */
         


       var i ;

       var array = [];
       for(i=0;i<3;i++){

              array[i] = [];
       }
      
       var random_e = Math.random();
       var exit = 0;

       var i ;

       var array = [];
       for(i=0;i<3;i++){

              array[i] = [];
       }
      
       var random_e = Math.random();
       var exit = 0;
    
    



  for(j=0;j<3;j++){
      
       n = 15 +(5*j);

       for(i = 0;i<n*n;i++){
        random = Math.random();
        random_e  = Math.random();

           if(i>=0&&i<=n-1){
             array[j][i] = 0;

             if(i==0||i==1){//for the entry into the maze
             array[j][i] = 4;
              }
   
            }
      

           else if( i>=((n-1)*n) &&(i<n*n) ){
             array[j][i] = 0;
             
            }
   
   
           //now we generate a random matrix inside this (n-2)*(n-2) array

           else if(random<0.65){

             array[j][i] = 1;

            }

           else if(random>0.70&&random<0.85){

             array[j][i] = 0;
           }
           else if(random>0.90&&random<0.94){

             array[j][i] = 6;
           }

           else if(random>0.97){

             if(random_e>0.51){

                array[j][i] = 8;
    
              }

             else{

                array[j][i] = 9;

              }
          }

         if(i==(n+1)){

            array[j][i] = 1;
          }

        
         else if((i+1)%n==0){

           array[j][i] = 0;//t0 have impassable areas around the right border
                  
         }

          else if(i%n==0){//to have impassable border along the left area
        
            if(i == ((n*n)-n)){

              array[j][i] = 3;//for the exit
            }
          
             else if( i == ((n*n))-n-n-1 ){
              array[j][i] = 1;

            }

            else {

            array[j][i] = 0;
           }

          
         }

        if(i == (n*n)-(n-1) ) {

            array[j][i] = 3;

            }

        if(i == (n*n)-(2*n)){

            array[j][i] = 3;
            }

        if(i== (n*n)-(2*n -1)){

            array[j][i] = 1;
            }

        array[j][( (n*n)-(3*n -1) )] = 1;
        array[j][((n*n)-(2*n -2))] = 1;
           /*for(var k = Math.round(n*n)/(j+2);k<=(Math.round(n*n)/(j+2))+(n-3);k++)
            array[j][k] = 1;*/


          }
    
        }
    
    

    
          
         var Map0 = array[0];
         var Map1 = array[1];
         var Map2 = array[2];

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

       // imageEnemy.src = "https://www.chronocompendium.com/images/wiki/b/bc/Bone_Knight_DS_Sprite.png";
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



        function level(n){//building a level object using a constructor to characterize each of the three levels
           //this.gameMap = "gameMap" + n;//nth level corresponds to the nth element of the gamemap array
           this.height = n*5 + 15;
           this.width = n*5 + 15;
           this.index = n;
           this.gameTime = 45 + (n*30);
           this.wallPicture = wallPicture[n];
           this.mapH = n*5 + 15;
           this.mapW = n*5 + 15;
           this.layout = layouts[n];
         }

        for(var j = 0;j<3;j++){
           plan[j] = new level(j);//to create three instances of the object with each level
         }
          
        var keysDown = {
            37: false,//left arrow
            38: false,//up arrow
            39: false,//right arrow
            40: false//down arrow
        };

        
      

        var viewport = {//creating a viewport object
           screen:     [0,0],//dimensions of the canvas width and height
           startTile:  [0,0],//the top left tile from which the canvas is starting
           endTile:    [0,0],//the bottom right tile at which the canvs finishes
           offSet:     [0,0],//the pixels by which we draw relative position with respect to which we will draw the canvas

          update:  function(px,py){//here px and py are the coordinates of the points around which the viewport is centered
              this.offSet[0] = Math.floor((this.screen[0]/2)-px);//set new offsets according to the px and py value
              this.offSet[1] = Math.floor((this.screen[1]/2)-py);


              var tile = [
                Math.floor(px/tileW),
                Math.floor(py/tileH)
              ];


              this.startTile[0] = tile[0] - 1 -Math.ceil((this.screen[0]/2)/tileW);
              this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/2)/tileH);

              if(this.startTile[0]<0){this.startTile[0]=0;}//checking for boundary conditions for the startTile
              if(this.startTile[1]<0){this.startTile[1]=0;}

              this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/2)/tileW);
              this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/2)/tileH);

              if(this.endTile[0]>=mapW){this.endTile[0] = mapW;}
              if(this.endTile[1]>=mapW){this.endTile[1] = mapH;}

            },

        }

        function Character(){//class that gives all the information about the character or player's movement and position
              this.tileFrom = [1,1];//position of the tile the character is moving from
              this.tileTo = [1,1];//position of the tile it is moving to
              this.timeMoved = 0; //time since it started moving
              this.dimension = [32,32];//dimension of the character 
              this.position = [45,45];//absolute position of the character
              this.delay = 700; //700ms delay
          }

       

          Character.prototype.placeAt = function(x,y)
            {//method to place the function to x,y position
              this.tileFrom = [x,y];
              this.tileTo = [x,y];
              this.position[0] = x*tileW + ((tileW-this.dimension[0])/2);
              this.position[1] = y*tileH + ((tileH-this.dimension[1])/2);
            };

          Character.prototype.processMovement = function(t)
            {
              if(this.tileFrom[0]==this.tileTo[0] && this.tileFrom[1]==this.tileTo[1]){   
                                                                //since the character has already moved to it's destination file 
                return false;
              }
              if(t-this.timeMoved>=this.delay){
                  this.placeAt(this.tileTo[0],this.tileTo[1]);
              }

              else{
                this.position[0] = tileW*this.tileFrom[0] + ((tileW-this.dimension[0])/2);
                this.position[1] = tileW*this.tileFrom[1] + ((tileW-this.dimension[1])/2);
              

                      if(this.tileTo[0]!=this.tileFrom[0]){
                        var diff = (tileW/this.delay)*(t-this.timeMoved);
                        this.position[0] += (this.tileTo[0]<this.tileFrom[0]) ? 0-diff:diff;
                             }

                      if(this.tileTo[1]!=this.tileFrom[1]){
                        var diff = (tileH/this.delay)*(t-this.timeMoved);
                        this.position[1] += (this.tileTo[1]<this.tileFrom[1]) ? 0-diff:diff;
                             }       
                this.position[0] = Math.round(this.position[0]);
                this.position[1] = Math.round(this.position[1]);

              }
                     
                return true;

            }

        //to create a constructor for a character bullet that can be fired by the player
        function characterBullet(x,y,width,height,velocityX){

              this.x = x;
              this.y = y;
              this.width = width;
              this.height = height;
              this.velocityX = velocityX;

            }

         //to have a constructor that can draw a bullet given the viewport offSets
          characterBullet.prototype.draw = function(px,py){

              ctx.fillStyle = "0ed00e";
              ctx.fillRect(this.x+px,this.y+py,this.width,this.height);
              ctx.fill();
              
            }

/*          To have another constructor to shoot the bullet
            Depending on the direction of the player to change the velocity sign                                         */

          characterBullet.prototype.shoot = function(px,py){

              if(directionBullet==2&&this.x==player.position[0]){

                this.velocityX = bulletSpeed;
              }

              else if(directionBullet==3&&this.x==player.position[0]){
                this.velocityX = -bulletSpeed;
              }
             // console.log(this.velocityX);
              this.x += this.velocityX;
              this.draw(px,py);
            }

          var playerBullet = new characterBullet(player.position[0],player.position[1],17,6,5);

          function toIndex(x,y){
          
              return (x+(y*mapW));
            }


               eneX = 220; 
               eneY = 280;
               eneV = 2.5;
               //to create an array containg instances of the enemy and enemy bullet objects, depending on the level there will be one, two and three enemies respectively

               for(j = 0;j<3;j++){
                enemies[j] = new enemy(eneX,eneY,35,35,eneV,0,true);
                bulletEnemy[j] = new enemyBullet(eneX+12,eneY+12,15,4,eneV,0,true);
                eneX+= 130;
                eneY+= 150;
               }


           
          

            function enemy(x,y,width,height,velocityX,velocityY,status){
                  this.x = x;
                  this.y = y;
                  this.width = width;
                  this.height = height;
                  this.velocityX = velocityX;
                  this.velocityY = velocityY;
                  this.status = true;
                  this.tileTo = [0,0];
                  this.tileFrom = [0,0];


                 }
            enemy.prototype.placeAt = function(){

                  /*this.tileFrom = [ex,ey];
                  this.tileTo = [ex,ey];
                  this.x = ex*tileW + ((tileW-this.height)/2);
                  this.y = ey*tileH + ((tileH-this.width)/2);*/

                  ex = Math.round(this.x - ((tileW-this.height)/2))/tileW;
                  ey = Math.round(this.y - ((tileH-this.width)/2))/tileH;
                  this.tileFrom = [ex,ey];

                  gameMap[toIndex(this.tileFrom[0],this.tileFrom[1])] = 1;
 
            };

            enemy.prototype.draw = function(ox,oy,k,statusEnemies){


                   if(statusEnemies){
                   ctx.fillStyle = "34e00f";
                   ctx.drawImage(player_Pic,this.x+ox,this.y+oy,this.width,this.height);
                   //ctx.drawImage(imageEnemy,widthEnemy*currentFrameEnemy, heightEnemy*directionEnemy ,widthEnemy,heightEnemy,enemies[k].x+ox,enemies[k].y+oy ,enemies[k].width,enemies[k].height);
                  }
                 
                };

            enemy.prototype.move = function(ox,oy,k,statusEnemies){
                  enemies[k].placeAt();

                  if(this.x+this.velocityX>235){
                     this.velocityX = -2.5;
                      if(enemies[k].x==bulletEnemy[k].x){
                      bulletEnemy[k].velocityX = eneV;
                       }
                     directionEnemy = 2;

                    }
                    else if(this.x+this.velocityX<160){
                     this.velocityX = 2.5;
                     if(this.x==bulletEnemy[k].x){
                        bulletEnemy[k].velocityX = -eneV;
                      }
                     directionEnemy = 3;
                    }
                    this.x += this.velocityX;

                  /*  if(gameMap[toIndex(enemies[k].tileFrom[0]-1,enemies[k].tileFrom[1])]!=0) 
                    {
                    this.x += this.velocityX;
                    }

                    if(gameMap[toIndex(enemies[k].tileFrom[0]+1,enemies[k].tileFrom[1])]!=0) 
                    {
                    this.x += this.velocityX;
                    }*/


              
                   this.draw(ox,oy,k,statusEnemies);
                };



            function enemyBullet(x,y,width,height,velocityX,status){
                  this.x = x;
                  this.y = y;
                  this.width = width;
                  this.height = height;
                  this.velocityX = velocityX;
                  this.status = true;
               
                }
            enemyBullet.prototype.drawB = function(bx,by,statusBullet){

                  if(statusBullet){
                  ctx.fillStyle = "#0000ff";
                  ctx.fillRect(this.x+bx,this.y+by,this.width,this.height);
                  ctx.fill();
                  }
                    
                };

            enemyBullet.prototype.moveB = function(bx,by,statusBullet,k){
                   if(this.x-this.velocityX<35){
                     this.x = enemies[k].x;
                     player_status = true;
                  }

                   this.x -= this.velocityX;
                   this.drawB(bx,by,statusBullet);
                  

                };


            
      

            function colliosionBullet(x1,y1,w1,h1,x2,y2,w2,h2,k){//for checking colliosion between the player and the enemy's bullet
                 
                  if((x1<x2+w2)&&(x1+w1>x2)&&(y1<y2+h2)&&(y1+h1>y2)&&player_status&&bulletEnemy[k].status){
                    energyLevel -= Math.round(100/3);
                    player.delay += 50;
                    player_status = false;
                    
                   }
          
                 }

            function colliosionEnemy(x1,y1,w1,h1,x2,y2,w2,h2,k){//to check for colliosion between the enemy and the player
                 
                  if((x1<x2+w2)&&(x1+w1>x2)&&(y1<y2+h2)&&(y1+h1>y2)&&player_enemy&&enemies[k].status){
                    energyLevel -= Math.round(100/6);
                    player.delay += 50;
                    player_enemy = false;
    
                    
                   }
          
                 }

            function colliosionPlayer(x1,y1,w1,h1,x2,y2,w2,h2,k){//to check if the player's bullet has shot the enemy
                 
                  if((x1<x2+w2)&&(x1+w1>x2)&&(y1<y2+h2)&&(y1+h1>y2)&&player_enemy){
                    energyLevel += Math.round(100/6);
                    enemies[k].status = false;//once the enemy has been shot the status of the enemy and the bullet is set to false so as to not draw the bullet in the further level
                    bulletEnemy[k].status = false;
                    if(enemyShotStatus){
                      enemyShotSound.play();
                    }                 
                  }
          
                 }



            function playerEnergy(){//to check if the player's energy has reached 0 yet
                if(energyLevel<0){

                    clearInterval(game[i]);

                     i = 0;                      //to reset the game once the player energy reaches 0
                    levelStatus = 0;
                    updateLevel();

                  }
                }

            function gameOver(){
               scoreFinal = coinCollected*50 + energyLevel* 10;//to calculate the score when the game is over
               alert("You have scored " + scoreFinal + " points");
               cancelAnimationFrame(gamePlay);

           }     

                  
                    

              
          
            


   
    
            window.onload = function(){

                  ctx = canvas.getContext("2d");
                  ctx.font = "bold 10pt sans-serif";
                  timeStart = Math.floor(Date.now()/1000);       
                  display = document.querySelector('#time');
      
   


                  window.addEventListener("keyup",function(e){
                     if(e.keyCode>=37&&e.keyCode<=40){

                        keysDown[e.keyCode] = false;
                      }

                     if(e.keyCode==32&&status==0){

                         spaceBarPressed = false;
                         status++;
                      }
                      else if(e.keyCode==32&&status!=0){
                         shootBullet = false;
                         playerBullet.x = player.position[0];
                         playerBullet.y = player.position[1];
                      }
                  
              });

                  window.addEventListener("keydown",function(e){
                     if(e.keyCode>=37&&e.keyCode<=40){

                         keysDown[e.keyCode] = true;
                         if(e.keyCode==37){
                          directionBullet = 3;
                         }
                         else if(e.keyCode == 39){
                          directionBullet = 2;
                         }
                         currentFrame++;
                         if(currentFrame==frames){
                          currentFrame=0;
                         }
                      }

                      if(e.keyCode==32&&status==0){
                         spaceBarPressed = true;
                         display = document.querySelector('#time');
                         updateLevel();       
                         var info = document.getElementById("instruction");
                         info.style.display = "none";                 
                         status++;
                      }

                      else if(e.keyCode==32&&status!=0&&shootSoundStatus){
                        shootBullet = true;
                        shootingSound.play();
                          }
              });

          

                  viewport.screen = [document.getElementById("canvas").width,document.getElementById("canvas").height];//to set the viewport dimensions once the page is loaded
        };  
         

             level.prototype.clock = function (duration, display,i) {//to have the count down timer for each level

                 var timer = duration, minutes, seconds;

                 clearInterval(game);


                    function  timerDisplay() {
                     minutes = parseInt(timer / 60, 10);
                     seconds = parseInt(timer % 60, 10);

                     minutes = minutes < 10 ? "0" + minutes : minutes;
                     seconds = seconds < 10 ? "0" + seconds : seconds;

                     display.textContent = minutes + ":" + seconds;


                     if (--timer < 0) {
                       timer = duration;
                      }
                    }


                    function check(){

                      if(minutes=="00"&& seconds == "00"){
          
                       clearInterval(game[i]);
                       if(levelStatus==i){
                       //  clearInterval(game[i]);
                         updateLevel();
                        }
                      }

                    }
                    timerDisplay();
                    clearInterval(game[i-1]);

                    game[i] = setInterval(function(){        
                    clearInterval(game[i-1]);
                    //if(i != levelStatus){
                      //clearInterval(game[i]);
                    
                     timerDisplay();
                     check();
                    }, 1000);
                  };



                                     
             function drawGame(){   
                          
                if(ctx==null){
                    return;
                      }

                var currentFrameTime = Date.now();
                var timeElapsed = currentFrameTime - lastFrameTime; 
                gameTime += timeElapsed;                                  
                var sec = Math.floor(Date.now()/1000);

      

                if(currentSecond!=sec){
                currentSecond = sec;
                framesLastSecond = frameCount;
                 frameCount = 1
                 }



                else{
                frameCount++;
                player_enemy = true;
                }



                if(!player.processMovement(currentFrameTime)){
                

                // *We check for 3 conditions before moving the character to a tile
                //* if the right key is pressed, if it's position is not out of bounds and if the new position is ascessable 

                    if(keysDown[37]&&player.tileFrom[0]>0){   //to move to the left

                       direction = 2;
                      if(gameMap[toIndex(player.tileFrom[0]-1,player.tileFrom[1])]!=0){
                          player.tileTo[0] -= 1;
                            
               

                       if(gameMap[toIndex(player.tileFrom[0]-1,player.tileFrom[1])]==3){//to check if the the next level exit has been reached
                 
                        levelStatus++; 
                        timer = 0;
                        updateLevel();                                      
                            }

                      else if(gameMap[toIndex(player.tileFrom[0]-1,player.tileFrom[1])]==6){//to collect the coins and remove them once collected
                        coinCollected++;
                        gameMap[toIndex(player.tileTo[0],player.tileTo[1])]=1;

                            }
                      else if(gameMap[toIndex(player.tileFrom[0]-1,player.tileFrom[1])]==8){//to make the player move faster by decreasing the delay
                    
                         player.delay -= 250;
                         gameMap[toIndex(player.tileTo[0],player.tileTo[1])]=1;
                      
                    
                          }        
                      else if(gameMap[toIndex(player.tileFrom[0]-1,player.tileFrom[1])]==9){//to collect the energy boosters
                          
                          energyLevel += 100;
                          gameMap[toIndex(player.tileTo[0],player.tileTo[1])]=1;

                            }
     
                        }
                                      
                      }         

                  
                                        
                  //to move up
                else if(keysDown[38]&&player.tileFrom[1]>0){
                       direction = 1;//to set the column for the sprite
                      if(gameMap[toIndex(player.tileFrom[0],player.tileFrom[1]-1)]!=0){
                          player.tileTo[1] -= 1;
                            
                       if(gameMap[toIndex(player.tileFrom[0],player.tileFrom[1]-1)]==8){

                          player.delay -= 250;
                          gameMap[toIndex(player.tileTo[0],player.tileTo[1])]=1;
                

                      }        

                       else if(gameMap[toIndex(player.tileFrom[0],player.tileFrom[1]-1)]==3){      
                            levelStatus++;
                            timer = 0;
                            updateLevel();
                            }
                       else if(gameMap[toIndex(player.tileFrom[0],player.tileFrom[1]-1)]==6){
          
                             coinCollected++;
                             gameMap[toIndex(player.tileTo[0],player.tileTo[1])]=1;
            
                      
                            }

                        else if(gameMap[toIndex(player.tileFrom[0],player.tileFrom[1]-1)]==9){
          
                              energyLevel += 100;
                              gameMap[toIndex(player.tileTo[0],player.tileTo[1])]=1;
                
                      
                           }  
                         }

                  }

      
                else if(keysDown[39]&&player.tileFrom[0]<(mapW-1)){//to move to the right
                          direction = 3;

                         if(gameMap[toIndex(player.tileFrom[0]+1,player.tileFrom[1])]!=0){
                              player.tileTo[0] += 1;
                            

                          if(gameMap[toIndex(player.tileFrom[0]+1,player.tileFrom[1])]==3){
        
                               levelStatus++;
                               timer = 0;
                               updateLevel();
                    
                            } 
                          else if(gameMap[toIndex(player.tileFrom[0]+1,player.tileFrom[1])]==6){
                                
                                coinCollected++;
                                gameMap[toIndex(player.tileTo[0],player.tileTo[1])]=1;
                            }    

                          else if(gameMap[toIndex(player.tileFrom[0]+1,player.tileFrom[1])]==8){
    
                                player.delay -= 250;
                                gameMap[toIndex(player.tileTo[0],player.tileTo[1])]=1;
                      
                            }    
                          else if(gameMap[toIndex(player.tileFrom[0]+1,player.tileFrom[1])]==9){
                                
                                energyLevel += 100;
                                gameMap[toIndex(player.tileTo[0],player.tileTo[1])]=1;
                            }                
                          }  
                                                  
                  }

                  else if(keysDown[40]&&player.tileFrom[1]<(mapH-1)) {// to move down
                       direction = 0;

                          if(gameMap[toIndex(player.tileFrom[0],player.tileFrom[1]+1)]!=0){
                                player.tileTo[1] += 1;

                            

                            if(gameMap[toIndex(player.tileFrom[0],player.tileFrom[1]+1)]==3){
            
                                 levelStatus++;
                                 timer = 0;
                                 updateLevel();
                    
                            } 
                            
                            else if(gameMap[toIndex(player.tileFrom[0],player.tileFrom[1]+1)]==6){ 

                                  coinCollected++;        
                                  gameMap[toIndex(player.tileTo[0],player.tileTo[1])]=1;

                            }
                             else if(gameMap[toIndex(player.tileFrom[0],player.tileFrom[1]+1)]==8){
                  
                                  player.delay -= 250;
                                  gameMap[toIndex(player.tileTo[0],player.tileTo[1])]=1;
        
            
                             }      

                             else if(gameMap[toIndex(player.tileFrom[0],player.tileFrom[1]+1)]==9){
                  
                                   energyLevel += 100;
                                   gameMap[toIndex(player.tileTo[0],player.tileTo[1])]=1;
        
            
                              } 
                            }

                   
                   }

                if(player.tileTo[0]!=player.tileFrom[0]||player.tileFrom[1]!=player.tileTo[0]){
                       player.timeMoved = currentFrameTime;
                   }


                if(shootBullet){
                       playerBullet.x = player.position[0];
                       playerBullet.y = player.position[1];
                    //playerBullet.shoot(viewport.offSet[0]+10,viewport.offSet[1]+15);
                   }

                } 

                viewport.update(player.position[0]+(player.dimension[0]/2),player.position[1]+(player.dimension[1]/2));   
                ctx.fillStyle = "#000000";
                ctx.fillRect(0,0,viewport.screen[0],viewport.screen[1]);





              for(var y = viewport.startTile[1]; y<viewport.endTile[1];y++){
                for(var x =viewport.startTile[0];x<viewport.endTile[0];x++){
                 // gameMap = plan[i].layout;
                  mapIndex = (y*mapW+x);
                  
                  dy = 0;
            

                  switch(gameMap[mapIndex])
                  {
                   case 0:
                     ctx.drawImage(brick,viewport.offSet[0]+x*tileW,viewport.offSet[1]+ y*tileH,tileW,tileH);
                     ctx.fillStyle = "#00000b";
                     
                    break;

                   case 3:                     
                     ctx.fillStyle = "#08af4b";
                     ctx.fillRect(x*tileW+viewport.offSet[0],y*tileH+viewport.offSet[1],tileW,tileH);
                    break;

                   case 4:                     
                     ctx.fillStyle = "#0000ff";                                                           
                     ctx.fillRect(x*tileW+viewport.offSet[0],y*tileH+viewport.offSet[1],tileW,tileH);
                    break;

                   case 6:                                         
                     ctx.drawImage(coin,x*tileW+viewport.offSet[0],y*tileH+viewport.offSet[1],tileW,tileH);              
                    break;

                   case 8: 
                     ctx.drawImage(faster,x*tileW+viewport.offSet[0],y*tileH+viewport.offSet[1],tileW,tileH);
                     break;

                    case 9:                     
                     ctx.drawImage(powerUpPic,x*tileW+viewport.offSet[0],y*tileH+viewport.offSet[1],tileW,tileH);
                     break;  

                    default:
                       ctx.drawImage(walkingArea,x*tileW+viewport.offSet[0],y*tileH+viewport.offSet[1],tileW,tileH);
                     
                  }

                  
                 }
              }
            

              ctx.fillStyle = "#ff0000";//to display the FPS
              ctx.fillText("FPS: " + framesLastSecond, 10, 20);

              ctx.fillStyle = "#ff0000";//to display the number of coins collected so far
              ctx.fillText("Coin: " + coinCollected, 10, 30);

              ctx.fillStyle = "#ff0000";//to display the energy level
              ctx.fillText("Energy: " + energyLevel + "%", 10, 40);

                    
              gamePlay =  requestAnimationFrame(function(){
              drawGame();
              drawSprite();
              playerBullet.shoot(viewport.offSet[0]+10,viewport.offSet[1]+15);
              
              for(k=0;k<=i;k++){
                bulletEnemy[k].moveB(viewport.offSet[0],viewport.offSet[1],bulletEnemy[k].status,k); 
               enemies[k].move(viewport.offSet[0],viewport.offSet[1],k,enemies[k].status); 

          
               colliosionEnemy(enemies[k].x,enemies[k].y,enemies[k].width,enemies[k].height,player.position[0],player.position[1],player.dimension[0]+15,player.dimension[1]+15,k);
               playerEnergy();
        
               colliosionBullet(bulletEnemy[k].x,bulletEnemy[k].y,bulletEnemy[k].width,bulletEnemy[k].height,player.position[0],player.position[1],player.dimension[0],player.dimension[1],k);
               colliosionPlayer(enemies[k].x,enemies[k].y,enemies[k].width,enemies[k].height,playerBullet.x+10,playerBullet.y+15,playerBullet.width,playerBullet.height,k);
               playerEnergy();
             }
  
           });



           

         }
       

      
          function updateLevel(){

            
             if(levelStatus==i+1){
              i++;
                 if(celebrationSoundStatus){
                    celebrationSound.play();
                  }
              framesLastSecond = 0;
              frameCount = 0;
              currentFrameTime = 0;
              timeElapsed = 0;
            


              for(var m = 0;m<i;m++){
                 enemies[m].status = true;
                 enemies[m].velocityX -= 1;
                 //bulletEnemy[m].x = enemies[m].x + 12;
                 bulletEnemy[m].status = true;
                 //bulletEnemy[m].velocityX -= 1;
                }
                if(i==3){
    
                cancelAnimationFrame(gamePlay);
                gameOver();

               }

                clearInterval(game[i]);


              }

                if(backgroundSoundStatus){
                  backgroundSound.play();
                }
                brick.src = plan[i].wallPicture; 
                fiveMinutes = plan[i].gameTime;
                gameMap = plan[i].layout;
                mapW = plan[i].mapW;
                mapH = plan[i].mapH;
                player.delay = 700;
            
                player.placeAt(10,10);
                framesLastSecond = 0;
                frameCount = 0;
                currentFrameTime = 0;
                timeElapsed = 0;
         
                  
              
  
         
                 plan[i].clock(fiveMinutes, display,i);
                 display = document.querySelector('#time');
                 energyLevel  =100;
                 gamePlay = requestAnimationFrame(function(){
                 drawGame();
                 drawSprite();

                 playerBullet.shoot(viewport.offSet[0]+10,viewport.offSet[1]+15);
                 
            


                 for(k=0;k<=i;k++){
                 bulletEnemy[k].moveB(viewport.offSet[0],viewport.offSet[1],bulletEnemy[k].status,k); 
                 enemies[k].move(viewport.offSet[0],viewport.offSet[1],k,enemies[k].status); 
          
                 colliosionEnemy(enemies[k].x,enemies[k].y,enemies[k].width,enemies[k].height,player.position[0],player.position[1],player.dimension[0]+15,player.dimension[1]+15,k);
                 playerEnergy();
        
                 colliosionBullet(bulletEnemy[k].x,bulletEnemy[k].y,bulletEnemy[k].width,bulletEnemy[k].height,player.position[0],player.position[1],player.dimension[0],player.dimension[1],k);
                 colliosionPlayer(enemies[k].x,enemies[k].y,enemies[k].width,enemies[k].height,playerBullet.x,playerBullet.y,playerBullet.width,playerBullet.height,k);
                  playerEnergy();
                  
            }
                 
                 
                       

              });
            scoreFinal = coinCollected*50 + energyLevel* 10;
          


        }


                var width = 150,
                height = 127,
                frames = 7,
                 
                currentFrame = 0,

                 
                canvas = document.getElementById("canvas");
                ctx = canvas.getContext("2d");

                var direction = 0, directionEnemy = 0;
                var currentFrameEnemy = 0, framesEnemy = 7,widthEnemy = 120, heightEnemy = 120;
          
                
         
                function drawSprite(){
                ctx.clearRect(player.position[0]+viewport.offSet[0], player.position[1]+viewport.offSet[1], player.dimension[0], player.dimension[1]);
                
                ctx.drawImage(image, width*currentFrame +20 , height * direction +7, width, height, player.position[0]+viewport.offSet[0],player.position[1]+viewport.offSet[1] , player.dimension[0]+15,player.dimension[1]+15);
                 
                  }


                var mute = document.getElementById("mute");
                mute.addEventListener("click",function(){
                backgroundSound.stop();
                celebrationSoundStatus = false;
                shootSoundStatus = false;
                enemyShotStatus = false;
                backgroundSoundStatus = false;

                shootingSound.stop();
                celebrationSound.stop();
               });

                mute.addEventListener("dblclick",function(){
                 backgroundSound.play();
                 celebrationSoundStatus = true;
                 shootSoundStatus = true;
                 enemyShotStatus = true;
                 backgroundSoundStatus = true;
                 
               });
         

                 



        

