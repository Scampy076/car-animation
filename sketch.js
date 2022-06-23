function setup() {
  createCanvas(12000, 1000);
  background("lightblue");
 }
 let xPos = 200
 let yPos = 860
 let penis = 655
 let offset1 = -80
 let offset2 = -150
 let countdown = 3000
 let countdown1 = 2000
 let countdown3 = 1000
 let xSpeed = 20
 let ySpeed = 1
 let sun = 15
 let xSun = 2500
 let upperYCloud = 300
 let underYCloud = 400
 let xCloud1 = 2320
 let xCloud2 = 2450
 let xCloud3 = 2580
 let xCloud4 = 2400
 let xCloud5 = 2500
 let cloudSpeed = 0.5
 let yDummy = 670
 let dummYSpeed = 3
 let gWagonx = 200
 let gWagonSpeed = 15
 
 function draw() {
 
 background("lightblue");
 countdown3 = countdown3 - deltaTime;
 countdown1 = countdown1 - deltaTime;
 countdown = countdown - deltaTime;
 
 fill("green")
 stroke(51);
 rect(0, 870, 12000, 50)
 
 fill("grey")
 
 rect(992.5, 700, 15, 200, 15)
 rect(975, 625, 50, 110, 15)
 
  rect(0, 900, 12000, 100)
  rect(xPos - 5, yPos + 23, 55, 15, 5, 5, 15, 5);
  
  fill("gold")
  noStroke();
 
 circle(xSun, 250, 300)
 
 stroke(51);
 rect(0, 930, 100, 30, 10)
 rect(200, 930, 100, 30, 10)
 rect(400, 930, 100, 30, 10)
 rect(600, 930, 100, 30, 10)
 rect(800, 930, 100, 30, 10)
 rect(1000, 930, 100, 30, 10)
 rect(1200, 930, 100, 30, 10)
 rect(1400, 930, 100, 30, 10)
 rect(1600, 930, 100, 30, 10)
 rect(1800, 930, 100, 30, 10)
 rect(2000, 930, 100, 30, 10)
 rect(2200, 930, 100, 30, 10)
 rect(2400, 930, 100, 30, 10)
 rect(2600, 930, 100, 30, 10)
 rect(2800, 930, 100, 30, 10)
 rect(3000, 930, 100, 30, 10)
 rect(3200, 930, 100, 30, 10)
 rect(3400, 930, 100, 30, 10)
 rect(3600, 930, 100, 30, 10)
 rect(3800, 930, 100, 30, 10)
 rect(4000, 930, 100, 30, 10)
 rect(4200, 930, 100, 30, 10)
 rect(4400, 930, 100, 30, 10)
 rect(4600, 930, 100, 30, 10)
 rect(4800, 930, 100, 30, 10)
 rect(5000, 930, 100, 30, 10)
 rect(5200, 930, 100, 30, 10)
 rect(5400, 930, 100, 30, 10)
 rect(5600, 930, 100, 30, 10)
 rect(5800, 930, 100, 30, 10)
 rect(6000, 930, 100, 30, 10)
 rect(6200, 930, 100, 30, 10)
 rect(6400, 930, 100, 30, 10)
 rect(6600, 930, 100, 30, 10)
 rect(6800, 930, 100, 30, 10)
 rect(7000, 930, 100, 30, 10)
 rect(7200, 930, 100, 30, 10)
 rect(7400, 930, 100, 30, 10)
 rect(7600, 930, 100, 30, 10)
 rect(7800, 930, 100, 30, 10)
 rect(8000, 930, 100, 30, 10)
 rect(8200, 930, 100, 30, 10)
 rect(8400, 930, 100, 30, 10)
 rect(8600, 930, 100, 30, 10)
 rect(8800, 930, 100, 30, 10)
 rect(9000, 930, 100, 30, 10)
 rect(9200, 930, 100, 30, 10)
 rect(9400, 930, 100, 30, 10)
 rect(9600, 930, 100, 30, 10)
 rect(9800, 930, 100, 30, 10)
 rect(10000, 930, 100, 30, 10)
 rect(10200, 930, 100, 30, 10)
 rect(10400, 930, 100, 30, 10)
 rect(10600, 930, 100, 30, 10)
 rect(10800, 930, 100, 30, 10)
 rect(11000, 930, 100, 30, 10)
 rect(11200, 930, 100, 30, 10)
 rect(11400, 930, 100, 30, 10)
 rect(11600, 930, 100, 30, 10)
 rect(11800, 930, 100, 30, 10)
 rect(12000, 930, 100, 30, 10)
 
 //670
 fill(197, 140, 133)
 circle(2525, yDummy + 50, 50)
 rect(2500, yDummy + 80, 50, 90, 5)
 rect(2480, yDummy, 20, 80, 5)
 rect(2550, yDummy, 20, 80, 5)
 rect(2500, yDummy + 170, 25, 95, 5)
 rect(2525, yDummy + 170, 25, 95, 5)
 
 circle(5800, 720, 50)
 rect(5775, 750, 50, 90, 5)
 rect(5755, 670, 20, 80, 5)
 rect(5825, 670, 20, 80, 5)
 rect(5775, 840, 25, 95, 5)
 rect(5800, 840, 25, 95, 5)
 
 
 
 fill("white")
 noStroke();
 
 circle(xCloud1 - 2400, underYCloud + 100, 150)
 circle(xCloud2 - 2400, underYCloud + 100, 150)
 circle(xCloud3 - 2400, underYCloud + 100, 150)
 circle(xCloud4 - 2400, upperYCloud + 100, 150)
 circle(xCloud5 - 2400, upperYCloud + 100, 150)
 
 circle(xCloud1 - 1600, underYCloud, 150)
 circle(xCloud2 - 1600, underYCloud, 150)
 circle(xCloud3 - 1600, underYCloud, 150)
 circle(xCloud4 - 1600, upperYCloud, 150)
 circle(xCloud5 - 1600, upperYCloud, 150)
 
 circle(xCloud1 - 800, underYCloud + 100, 150)
 circle(xCloud2 - 800, underYCloud + 100, 150)
 circle(xCloud3 - 800, underYCloud + 100, 150)
 circle(xCloud4 - 800, upperYCloud + 100, 150)
 circle(xCloud5 - 800, upperYCloud + 100, 150)
 
 circle(xCloud1, underYCloud, 150)
 circle(xCloud2, underYCloud, 150)
 circle(xCloud3, underYCloud, 150)
 circle(xCloud4, upperYCloud, 150)
 circle(xCloud5, upperYCloud, 150)
 
 circle(xCloud1 + 800, underYCloud + 100, 150)
 circle(xCloud2 + 800, underYCloud + 100, 150)
 circle(xCloud3 + 800, underYCloud + 100, 150)
 circle(xCloud4 + 800, upperYCloud + 100, 150)
 circle(xCloud5 + 800, upperYCloud + 100, 150)
 
 circle(xCloud1 + 1600, underYCloud, 150)
 circle(xCloud2 + 1600, underYCloud, 150)
 circle(xCloud3 + 1600, underYCloud, 150)
 circle(xCloud4 + 1600, upperYCloud, 150)
 circle(xCloud5 + 1600, upperYCloud, 150)
 
 circle(xCloud1 + 2400, underYCloud + 100, 150)
 circle(xCloud2 + 2400, underYCloud + 100, 150)
 circle(xCloud3 + 2400, underYCloud + 100, 150)
 circle(xCloud4 + 2400, upperYCloud + 100, 150)
 circle(xCloud5 + 2400, upperYCloud + 100, 150)
 
 circle(xCloud1 + 3200, underYCloud, 150)
 circle(xCloud2 + 3200, underYCloud, 150)
 circle(xCloud3 + 3200, underYCloud, 150)
 circle(xCloud4 + 3200, upperYCloud, 150)
 circle(xCloud5 + 3200, upperYCloud, 150)
 
 circle(xCloud1 + 4000, underYCloud + 100, 150)
 circle(xCloud2 + 4000, underYCloud + 100, 150)
 circle(xCloud3 + 4000, underYCloud + 100, 150)
 circle(xCloud4 + 4000, upperYCloud + 100, 150)
 circle(xCloud5 + 4000, upperYCloud + 100, 150)
 
 circle(xCloud1 + 4800, underYCloud, 150)
 circle(xCloud2 + 4800, underYCloud, 150)
 circle(xCloud3 + 4800, underYCloud, 150)
 circle(xCloud4 + 4800, upperYCloud, 150)
 circle(xCloud5 + 4800, upperYCloud, 150)
 
 circle(xCloud1 + 5600, underYCloud + 100, 150)
 circle(xCloud2 + 5600, underYCloud + 100, 150)
 circle(xCloud3 + 5600, underYCloud + 100, 150)
 circle(xCloud4 + 5600, upperYCloud + 100, 150)
 circle(xCloud5 + 5600, upperYCloud + 100, 150)
 
 circle(xCloud1 + 6400, underYCloud, 150)
 circle(xCloud2 + 6400, underYCloud, 150)
 circle(xCloud3 + 6400, underYCloud, 150)
 circle(xCloud4 + 6400, upperYCloud, 150)
 circle(xCloud5 + 6400, upperYCloud, 150)
 
 circle(xCloud1 + 7200, underYCloud + 100, 150)
 circle(xCloud2 + 7200, underYCloud + 100, 150)
 circle(xCloud3 + 7200, underYCloud + 100, 150)
 circle(xCloud4 + 7200, upperYCloud + 100, 150)
 circle(xCloud5 + 7200, upperYCloud + 100, 150)
 
 circle(xCloud1 + 8000, underYCloud, 150)
 circle(xCloud2 + 8000, underYCloud, 150)
 circle(xCloud3 + 8000, underYCloud, 150)
 circle(xCloud4 + 8000, upperYCloud, 150)
 circle(xCloud5 + 8000, upperYCloud, 150)
 
 circle(xCloud1 + 8800, underYCloud + 100, 150)
 circle(xCloud2 + 8800, underYCloud + 100, 150)
 circle(xCloud3 + 8800, underYCloud + 100, 150)
 circle(xCloud4 + 8800, upperYCloud + 100, 150)
 circle(xCloud5 + 8800, upperYCloud + 100, 150)
 
 circle(xCloud1 + 9600, underYCloud, 150)
 circle(xCloud2 + 9600, underYCloud, 150)
 circle(xCloud3 + 9600, underYCloud, 150)
 circle(xCloud4 + 9600, upperYCloud, 150)
 circle(xCloud5 + 9600, upperYCloud, 150)
 
 circle(xCloud1 + 10400, underYCloud + 100, 150)
 circle(xCloud2 + 10400, underYCloud + 100, 150)
 circle(xCloud3 + 10400, underYCloud + 100, 150)
 circle(xCloud4 + 10400, upperYCloud + 100, 150)
 circle(xCloud5 + 10400, upperYCloud + 100, 150)
 
 circle(xCloud1 + 11200, underYCloud, 150)
 circle(xCloud2 + 11200, underYCloud, 150)
 circle(xCloud3 + 11200, underYCloud, 150)
 circle(xCloud4 + 11200, upperYCloud, 150)
 circle(xCloud5 + 11200, upperYCloud, 150)
 
 circle(xCloud1 + 12000, underYCloud + 100, 150)
 circle(xCloud2 + 12000, underYCloud + 100, 150)
 circle(xCloud3 + 12000, underYCloud + 100, 150)
 circle(xCloud4 + 12000, upperYCloud + 100, 150)
 circle(xCloud5 + 12000, upperYCloud + 100, 150)
 
 fill(color(0, 200, 500, 500));
 stroke(51);
 
  rect(xPos, yPos - 80, 700, 110, 80, 80, 3, 3);
  triangle(xPos, yPos - 150, xPos + 100, yPos - 150, xPos + 50, yPos - 200)
  triangle(xPos - 100, yPos - 200, xPos + 100, yPos - 150, xPos, yPos - 150)
  arc(xPos + 300, yPos - 75, 300, 200, PI, TWO_PI);
  line(xPos + 100, yPos + offset1, xPos + 75, yPos + offset2)
  line(xPos + 50, yPos + offset1, xPos + 25, yPos + offset2)
  line(xPos + 50, yPos + offset1, xPos + 75, yPos + offset2)
  line(xPos + 100, yPos + offset1, xPos + 25, yPos + offset2)
 
  fill(255, 204, 0);
  noStroke();
 
  rect(xPos + 80, yPos + 12, 530, 11);
  
 fill('white')
  stroke(51);
  
  rect(xPos + 310, yPos - 160, 90, 80, 15, 80, 5, 5);
  rect(xPos + 200, yPos - 160, 90, 80, 80, 15, 5, 5);
 
 fill('red')
 
  rect(xPos + 15, yPos - 70, 55, 15, 50, 15, 10, 5);
 
 fill('yellow')
 
  rect(xPos + 625, yPos - 70, 55, 15, 5, 50, 15, 10)
  
 
 fill('black')
 
  circle(xPos + 100, yPos, 100);
  circle(xPos + 600, yPos, 100);
  rect(xPos + 655, yPos - 40, 45, 50, 5, 10, 5, 5)
 
 fill('gray')
 
  rect(xPos + penis, yPos - 40, 45, 3, 5, 10, 5, 5)
  rect(xPos + penis, yPos - 35, 45, 3, 5, 10, 5, 5)
  rect(xPos + penis, yPos - 30, 45, 3, 5, 10, 5, 5)
  rect(xPos + penis, yPos - 25, 45, 3, 5, 10, 5, 5)
  rect(xPos + penis, yPos - 20, 45, 3, 5, 10, 5, 5)
  rect(xPos + penis, yPos - 15, 45, 3, 5, 10, 5, 5)
  rect(xPos + penis, yPos - 10, 45, 3, 5, 10, 5, 5)
  rect(xPos + penis, yPos - 5, 45, 3, 5, 10, 5, 5)
  rect(xPos + penis, yPos, 45, 3, 5, 10, 5, 5)
  rect(xPos + penis, yPos + 5, 45, 3, 5, 10, 5, 5)
  circle(xPos + 100, yPos, 90);
  circle(xPos + 600, yPos, 90);
  line(xPos + 300, yPos + 12, xPos + 300, yPos - 174);
  line(xPos + 450, yPos + 12, xPos + 450, yPos - 74);
 
 fill('black')
 
  circle(xPos + 100, yPos, 20);
  circle(xPos + 600, yPos, 20);
 
 fill('grey')
 
  rect(xPos + 305, yPos - 74, 30, 10, 20);
  triangle(xPos + 98, yPos, xPos + 100, yPos - 10,xPos + 102, yPos);
  triangle(xPos + 102, yPos - 1, xPos + 100, yPos + 1, xPos + 109, yPos + 6);
  triangle(xPos + 98, yPos, xPos + 101, yPos + 1, xPos + 93, yPos + 6);
  triangle(xPos + 598, yPos, xPos + 600, yPos - 10, xPos + 602, yPos);
  triangle(xPos + 602, yPos - 1, xPos + 600, yPos + 1, xPos + 609, yPos + 6);
  triangle(xPos + 598, yPos, xPos + 601, yPos + 1, xPos + 593, yPos + 6);
 
  fill(0);
  textSize(50);
  textFont('Arial Black');
  text('Stefan', xPos + 210, yPos - 200);
 
  //Gwagon abdul
 
 fill("black")
 rect(gWagonx + 520, 345 + 570, 55, 55);
 rect(gWagonx + 370, 300 + 570, 150, 100);
 triangle(gWagonx + 520, 300 + 570, gWagonx + 520, 345 + 570, gWagonx + 525, 345 + 570);
 triangle(gWagonx + 525, 340 + 570, gWagonx + 575, 345 + 570, gWagonx + 525, 345 + 570);
 
 
 fill("white")
 
 rect(gWagonx + 442, 400 + 570, 55, 4);
 rect(gWagonx + 370, 360 + 570, 205, 4);
 rect(gWagonx + 493, 372 + 570, 55, 30, 8);
 rect(gWagonx + 393, 372 + 570, 55, 30, 8);
 rect(gWagonx + 470, 310 + 570, 40, 30, 8);
 rect(gWagonx + 410, 310 + 570, 40, 30, 8);
 
 fill("black")
 
 circle(gWagonx + 520, 400 + 570, 45);
 circle(gWagonx + 420, 400 + 570, 45);
 
 fill("white")
 
 circle(gWagonx + 520, 400 + 570, 30);
 circle(gWagonx + 420, 400 + 570, 30);
 circle(gWagonx + 520, 400 + 570, 15);
 circle(gWagonx + 420, 400 + 570, 15);
 line(gWagonx + 520, 400 + 570, gWagonx + 520, 397 + 570);
 line(gWagonx + 520, 400 + 570, gWagonx + 523, 403 + 570);
 line(gWagonx + 520, 400 + 570, gWagonx + 517, 403 + 570);
 line(gWagonx + 420, 400 + 570, gWagonx + 420, 397 + 570);
 line(gWagonx + 420, 400 + 570, gWagonx + 423, 403 + 570);
 line(gWagonx + 420, 400 + 570, gWagonx + 417, 403 + 570);
 line(gWagonx + 405, 350 + 570, gWagonx + 405, 370 + 570);
 line(gWagonx + 465, 350 + 570, gWagonx + 465, 370 + 570);
 circle(gWagonx + 490, 323 + 570, 20);
 point(gWagonx + 495, 320 + 570);
 line(gWagonx + 490, 333 + 570, gWagonx + 490, 340 + 570);
 line(gWagonx + 490, 333 + 570, gWagonx + 500, 340 + 570);
 line(gWagonx + 510, 332 + 570, gWagonx + 500, 340 + 570);
 square(gWagonx + 563, 347 + 570, 12);
 quad(gWagonx + 572, 345 + 570, gWagonx + 556, 343 + 570, gWagonx + 556, 337 + 570, gWagonx + 563, 337 + 570);
 
 fill(0);
 textSize(50);
 textFont('Arial Black');
 text('Abdul-Malik', gWagonx + 310, 860);
 
 
 if (countdown3 <= 0){
     fill(0,90)
     noStroke();
      
      circle(xPos - 15, yPos + 20, 30)
 
      fill("red")
      stroke(51);
 
      circle(1000, 650, 30)
     }
 if (countdown1 <= 0){
     
     fill(0,90)
     noStroke();
 
     circle(xPos - 50, yPos + 10, 50)
 
     fill("orange")
     stroke(51);
 
     circle(1000, 680, 30)
 }
  if (countdown <= 0){
 
 fill(0,90)
 noStroke();
 
  circle(xPos - 95, yPos - 20, 70)
  
  fill("green")
 stroke(51);
 
  circle(1000, 710, 30)
 
 xPos = xPos + xSpeed
 yPos = yPos + ySpeed
 xSun = xSun + sun
 penis = penis + 0.003
 offset1 = offset1 
 offset2 = offset2 
 yDummy = yDummy + dummYSpeed
 xCloud1 = xCloud1 + cloudSpeed
 xCloud2 = xCloud2 + cloudSpeed
 xCloud3 = xCloud3 + cloudSpeed
 xCloud4 = xCloud4 + cloudSpeed
 xCloud5 = xCloud5 + cloudSpeed
 gWagonx = gWagonx + gWagonSpeed
  }
  if(xPos > 11300){
     xSpeed = xSpeed * -1
     }
 if(yPos > 950){
     ySpeed = ySpeed * -1
 }
 if(yPos < 860){
     ySpeed = ySpeed * -1
 }
 if(xPos < 150){
     xSpeed = xSpeed * -1
 }
 if(xSun > 10800){
     sun = sun * -1
 }
 if(xSun < 2500){
     sun = sun * -1
 }
 if(yDummy > 750){
     dummYSpeed = dummYSpeed * -1
 }
 if(yDummy < 600){
     dummYSpeed = dummYSpeed * -1
 }
 if(gWagonx > 11100){
     gWagonSpeed = gWagonSpeed * -10
 }
 if(xCloud1 > 2500){
     cloudSpeed = cloudSpeed * -1
 }
 if(xCloud1 < 2320){
     cloudSpeed = cloudSpeed * -1
 }
 }