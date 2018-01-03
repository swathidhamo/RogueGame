


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
