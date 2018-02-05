var img;


function preload(){
    img = loadImage("night-sky.jpg");
}

function setup(){
    createCanvas(img.width, img.height);
    background(0);
}

function draw(){
    image(img, 0, 0);
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col = 0; col < width; col++){
          var index = (col + row * width) * 4; 
          var r = pixels[index];
          var g = pixels[index + 1];
          var b = pixels[index + 2];
          var a = pixels[index + 3];
           
          if(keyIsPressed){
              if(key=="p"){
                  pink_filter(index, g);
              }
                if(key=="1"){
                  black_white(index, g,a);
              }
              if(key=="2"){
                  question_two(index,row,col,r,g,b,a);
              }
                if(key=="3"){
                  question_three(index, r,g,b,a);
              }
                if(key=="4"){
                  question_four(index, r,g,b,a);
              }
              if(key=="5"){
                  question_five(index, r,g,b,a);
              }
             
              if(key=="6"){
                 question_six(index, r,g,b,a);
              }
             
              if(key=="7"){
                 question_seven(index, row, col, r,g,b,a);
              }
              if(key=="9"){
                 question_nine(index, r,g,b,a);
              }
              if(key=="8"){
                  question_eight(index, r,g,b,a);
              }
          }
            
        }
    }
    
    updatePixels();
}

function pink_filter(index, g){
          pixels[index] = 255; //red
          pixels[index + 1] = g; //green
          pixels[index + 2] = 255; //blue
          pixels[index + 3] = 255; //alpha
}

function black_white(index, g,a){
          pixels[index] = g; //red
          pixels[index + 1] = g; //green
          pixels[index + 2] = g; //blue
          pixels[index + 3] = a; //alpha
}

function question_two(index, row, col, r,g,b,a){
    pixels[index] = r/2 - col - 123;
    pixels[index + 1] = g*2 - row - 123;
    pixels[index + 2] = b;
    pixels[index + 3] = 255;
}

function question_three(index, r,g,b,a){
          pixels[index] = r; //red
          pixels[index + 1] = b; //green
          pixels[index + 2] = g; //blue
          pixels[index + 3] = a; //alpha
}

function question_six(index, r,g,b,a){
          pixels[index] = 255-r; //red
          pixels[index + 1] = 255-g; //green
          pixels[index + 2] = 255-b; //blue
          pixels[index + 3] = a; //alpha
}

function question_four(index, r,g,b,a){
          pixels[index] = r/2; //red
          pixels[index + 1] = g/2; //green
          pixels[index + 2] = b/2; //blue
          pixels[index + 3] = a; //alpha
}

function question_five(index, r,g,b,a){
          pixels[index] = r*2; //red
          pixels[index + 1] = g*2; //green
          pixels[index + 2] = b*2; //blue
          pixels[index + 3] = a; //alpha
}

function question_seven(index, row, col, r,g,b,a){
          pixels[index] = r + row - 190; //red
          pixels[index + 1] = g + col -190; //green
          pixels[index + 2] = b; //blue
          pixels[index + 3] = a; //alpha
}

function question_eight(index, r,g,b,a){
    if(index % 40 == 0)
    pixels[index] = 210;
    pixels[index + 1] = r;
    pixels[index + 2] = r;
    pixels[index + 3] = a;
}

function question_nine(index, r,g,b,a){
            var lastPixel = pixels.length - 1;
           pixels[lastPixel - index - 3] = r; //red
           pixels[lastPixel - index - 2] = g; //green
           pixels[lastPixel - index - 1] = b; //blue
           pixels[lastPixel - index - 0] = a; //alpha
}
