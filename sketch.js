function setup() {
  createCanvas(1200, 800);
  background("yellow");
 }
 let xPos = 200
 let yPos = 600
 let penis = 655
 let offset1 = -80
 let offset2 = -150
 
 function draw() {
 
 background("yellow");
 fill('grey')
 stroke(51);
 
  rect(xPos - 5, yPos + 23, 55, 15, 5, 5, 15, 5);
 
 fill(color(0, 200, 500, 500));
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

fill(0,90)
noStroke();

 circle(xPos - 15, yPos + 20, 30)
 circle(xPos - 50, yPos + 10, 50)
 circle(xPos - 95, yPos - 20, 70)
xPos = xPos + 1
yPos = yPos + 0.01
penis = penis + 0.003
offset1 = offset1 + 0.0000000000000003
offset2 = offset2 + 0.0000000000000003
}