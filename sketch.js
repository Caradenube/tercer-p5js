function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    
  //---------- LADO A
   
    // Pared edificio
    background('#B0E0E6');
    
    // Ventanas redondas acanaladas
    strokeWeight(2);
    stroke('white');
    fill('#1d536c');
    ellipse(30,50,50,50);
    ellipse(30,350,50,50);
  
    // Ventanas redondas
    strokeWeight(5);
    ellipse(120,50,50,50);
    ellipse(120,350,50,50);
    strokeWeight(1);
    line(110,55,127,40);
    line(118,55,133,42);
    line(110,355,127,340);
    line(118,355,133,342);
    
    // Canaletas ventana superior
    strokeWeight(2);
    line(5,50,55,50);
    line(10,65,49,65);
    line(10,35,49,35);
    
    // Canaletas ventana inferior
    strokeWeight(2);
    line(5,350,55,350);
    line(10,365,49,365);
    line(10,335,49,335);
    
    // Línea vertical izquierda
    stroke('black');
    line(75,1,75,500);
    
    // Canaleta vertical
    strokeWeight(2);
    line(180,1,180,500);
    line(240,1,240,500); 
    line(180,170,240,170);
    line(180,470,240,470);
    
    // Marco ventana superior
    strokeWeight(5);
    stroke('white');
    fill('#1d536c');
    rect(240,-5,500,200);
    rect(240,300,500,500);
    
    // Hoja ventana superior
    strokeWeight(5);
    rect(240,-5,100,140);
    line(340,95,340,195);
    
    // Hoja ventana inferior
    strokeWeight(5);
    rect(240,300,100,140);
    line(340,95,340,195);
    line(340,440,340,500);
  
    // Aire acondicionado superior
    strokeWeight(2);
    stroke('black');
    fill('#f5f1f2');
    rect(270,160,160,100);
    fill('white');
    ellipse(320,210,80,80);
    fill('white');
    line(370,160,370,260);
    line(280,212,360,212);
    line(281,202,359,202);
    line(284,192,356,192);
    line(291,182,349,182);
    line(281,222,359,222);
    line(289,232,354,232);
    line(297,242,344,242);
    rect(380,180,40,25);
    line(380,214,420,214);
    
    
    // Aire acondicionado inferior
    strokeWeight(2);
    fill('#f5f1f2');
    rect(270,460,160,100);
    fill('white');
    ellipse(320,510,80,80);
    line(285,492,355,492);
    line(293,482,347,482);
    line(370,460,370,555);
    fill('white');
    rect(380,478,40,25);
    
    // Reflejos
    strokeWeight(1);
    stroke('white');
    line(255,385,299,340);
    line(273,375,315,333);
    line(265,65,305,20);
    line(280,55,320,12);
    line(390,115,475,45);
    line(410,105,490,40);
    line(380,420,470,345);
    line(400,410,490,335);
    
    // Hacer que el primer grupo de ondas aparezcan y desaparezcan
    push();
    if (frameCount % 120 < 60) {
    fill('#ffffff');
    stroke('#ffffff');
    bezier(0,230,30,204,60,228,106,207);
    bezier(40,446,65,428,109,443,146,422);
    bezier(141,104,175,116,207,101,250,108);
    bezier(211,344,249,330,280,343,312,321);
    }
    pop();
    
    // Hacer que el segundo grupo de ondas aparecan y desaparezcan
    push();
    if (frameCount % 150 < 90) {
    fill('#ffffff');
    fill('#ffffff');
    stroke('#ffffff');
    bezier(315,422,348,434,382,411,412,423);
    bezier(385,45,413,28,448,46,500,27);
    bezier(368,271,400,286,431,268,464,283);
    bezier(105,274,147,255,188,277,250,268);
    }
    pop();
    
  //---------- LADO B
    
    if (mouseIsPressed) {
    if (mouseButton == RIGHT) {
    // Pared edificio
    background('black');
    
    // Ventanas redondas acanaladas
    strokeWeight(2);
    stroke('#cfff00');
    fill('#ff0000');
    ellipse(30,50,50,50);
    ellipse(30,350,50,50);
  
    // Ventanas redondas
    strokeWeight(5);
    ellipse(120,50,50,50);
    ellipse(120,350,50,50);
    strokeWeight(1);
    line(110,55,127,40);
    line(118,55,133,42);
    line(110,355,127,340);
    line(118,355,133,342);
    
    // Canaletas ventana superior
    strokeWeight(2);
    line(5,50,55,50);
    line(10,65,49,65);
    line(10,35,49,35);
    
    // Canaletas ventana inferior
    strokeWeight(2);
    line(5,350,55,350);
    line(10,365,49,365);
    line(10,335,49,335);
    
    // Línea vertical izquierda
    stroke('#f56f00');
    line(75,1,75,500);
    
    // Canaleta vertical
    strokeWeight(2);
    line(180,1,180,500);
    line(240,1,240,500); 
    line(180,170,240,170);
    line(180,470,240,470);
    
    // Marco ventana superior
    strokeWeight(5);
    stroke('#cfff00');
    fill('#ff0000');
    rect(240,-5,500,200);
    rect(240,300,500,500);
    
    // Hoja ventana superior
    strokeWeight(5);
    rect(240,-5,100,140);
    line(340,95,340,195);
    
    // Hoja ventana inferior
    strokeWeight(5);
    rect(240,300,100,140);
    line(340,95,340,195);
    line(340,440,340,500);
  
    // Aire acondicionado superior
    strokeWeight(2);
    stroke('#f56f00');
    fill('#0000ff');
    rect(270,160,160,100);
    fill('#00ff00');
    ellipse(320,210,80,80);
    fill('#00ff00');
    line(370,160,370,260);
    line(280,212,360,212);
    line(281,202,359,202);
    line(284,192,356,192);
    line(291,182,349,182);
    line(281,222,359,222);
    line(289,232,354,232);
    line(297,242,344,242);
    rect(380,180,40,25);
    line(380,214,420,214);
    
    
    // Aire acondicionado inferior
    strokeWeight(2);
    fill('#0000ff');
    rect(270,460,160,100);
    fill('#00ff00');
    ellipse(320,510,80,80);
    line(285,492,355,492);
    line(293,482,347,482);
    line(370,460,370,555);
    fill('#00ff00');
    rect(380,478,40,25);
    
    // Reflejos
    strokeWeight(1);
    stroke('#cfff00');
    line(255,385,299,340);
    line(273,375,315,333);
    line(265,65,305,20);
    line(280,55,320,12);
    line(390,115,475,45);
    line(410,105,490,40);
    line(380,420,470,345);
    line(400,410,490,335);
      
    // Quebraduras en la pared verdes
    stroke('#00ff00');
    line(74,292,140,232);
    line(99,269,89,223);
    line(94,248,117,225);
    line(117,225,101,196);
    line(117,225,128,195);
    line(237,138,205,102);
    line(237,136,208,150);
    line(208,150,200,133);
    line(222,122,205,118);
    line(212,109,220,86);
    line(220,86,198,77);
    line(220,86,217,65);
    line(440,298,464,268);
    line(464,268,448,244);
    line(464,268,483,258);
    line(456,257,476,232);
    line(466,244,453,213);
    line(458,223,473,207);
    line(0,500,28,472);
    line(12,488,11,456);
    line(11,456,38,440);
    line(27,471,50,476);
    line(34,472,46,455);
    
    // Quebradura en la pares violetas
    stroke('#7244b1');
    line(140,500,127,470);
    line(133,486,151,463);
    line(151,463,130,423);
    line(142,446,158,430);
    line(142,473,121,443);
    line(131,75,143,93);
    line(143,93,124,102);
    line(124,102,140,107);
    line(137,85,154,80);
    line(154,80,154,95);
    line(236,347,202,345);
    line(202,345,193,310);
    line(196,325,212,295);
    line(212,295,199,280);
    line(211,295,223,279);
    line(226,345,217,313);
    line(0,99,22,124);
    line(22,124,45,160);
    line(24,125,52,115);
    line(52,115,48,133);
    line(29,136,17,154);
    line(17,154,27,174);
      
    // Hacer que el primer grupo de ondas aparezcan y desaparezcan
    push();
    if (frameCount % 120 < 60) {
    stroke('#ffffff');
    fill('#ffffff');
    bezier(0,230,30,204,60,228,106,207);
    bezier(40,446,65,428,109,443,146,422);
    bezier(141,104,175,116,207,101,250,108);
    bezier(211,344,249,330,280,343,312,321);
    }
    pop();
      
    // Hacer que el segundo grupo de ondas aparezcan y desaparezcan
    push();
    if (frameCount % 150 < 90) {
    fill('#ffffff');
    stroke('#ffffff');
    bezier(315,422,348,434,382,411,412,423);
    bezier(385,45,413,28,448,46,500,27);
    bezier(368,271,400,286,431,268,464,283);
    bezier(105,274,147,255,188,277,250,268);
    }
    pop();
      
   }
      
  }
    
    // Para que al apretar click derecho no se abra el menu
    document.oncontextmenu = function () {
      return false;
    };
      console.log("X:",mouseX, "Y: ",mouseY)
  }
  
  