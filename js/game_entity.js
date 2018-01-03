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

                  
                    

              
          