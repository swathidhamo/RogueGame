  var random = Math.random();
      /*all the 0 and multiples of n of the n*n array as well as the value of 0 to n-1 as well as (n*n)-(n) = n(n-1) to n*n - 1
        will all have 0
       */
         

       //for random generation of the map for the different levels in the game
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