function setup() {
  createCanvas(1200, 800);
  background("yellow");
  fill('grey')
  rect(195, 623, 55, 15, 5, 5, 15, 5);
describe('white rect with black outline and round edges of different radii');
fill(color(0, 200, 500, 500));
rect(200, 520, 700, 110, 80, 80, 3, 3);
describe('white rect with black outline and round edges of different radii');
triangle(200, 450, 300, 450, 250, 400)
triangle(100, 400, 300, 450, 200, 450)
arc(500, 525, 300, 200, PI, TWO_PI);
line(300, 520, 275, 450)
line(250, 520, 225, 450)
triangle(xPos - 100, 400, xPos + 100, 450, xPos, 450)
line(xPos + 50, 520, xPos + 75, 450)
line(xPos + 100, 520, xPos + 25, 450)

let img = createImage(740, 605);
img.loadPixels();
for (let i = 327; i < img.width; i++) {
@@ -23,57 +25,61 @@ for (let i = 327; i < img.width; i++) {
 }
}
fill('white')

img.updatePixels();
image(img, 17, 17);
rect(xPos + 310, 440, 90, 80, 15, 80, 5, 5);
rect(xPos * 2, 440, 90, 80, 80, 15, 5, 5);

fill('red')

rect(xPos + 15, 530, 55, 15, 50, 15, 10, 5);

fill('yellow')

rect(xPos + 625, 530, 55, 15, 5, 50, 15, 10)

fill('black')

circle(xPos + 100,600,100);
circle(xPos * 4,600,100);
rect(xPos + 655, 560, 45, 50, 5, 10, 5, 5)

fill('gray')
let offset = 655
 rect(xPos + offset, 560, 45, 3, 5, 10, 5, 5)
 rect(xPos + offset, 565, 45, 3, 5, 10, 5, 5)
 rect(xPos + offset, 570, 45, 3, 5, 10, 5, 5)
 rect(xPos + offset, 575, 45, 3, 5, 10, 5, 5)
 rect(xPos + offset, 580, 45, 3, 5, 10, 5, 5)
 rect(xPos + offset, 585, 45, 3, 5, 10, 5, 5)
 rect(xPos + offset, 590, 45, 3, 5, 10, 5, 5)
 rect(xPos + offset, 595, 45, 3, 5, 10, 5, 5)
 rect(xPos + offset, 600, 45, 3, 5, 10, 5, 5)
 rect(xPos + offset, 605, 45, 3, 5, 10, 5, 5)
 circle(xPos + 100, 600, 90);
 circle(xPos + 600, 600, 90);
 line(xPos + 300, 612, 500, 426);
 line(xPos + 450, 612, xPos + 450, 526);

fill('black')

circle(xPos + 100, 600, 20);
circle(xPos + 600, 600, 20);

fill('grey')

rect(xPos + 305, 526, 30, 10, 20);
triangle(xPos + 98, 600, xPos + 100, 590,xPos + 102, 600);
triangle(xPos + 102, 599, xPos + 100, 601, xPos + 109, 606);
triangle(xPos + 98, 600, xPos + 101, 601, xPos + 93, 606);
triangle(xPos + 598, 600, xPos + 600, 590, xPos + 602, 600);
triangle(xPos + 602, 599, xPos + 600, 601, xPos + 609, 606);
triangle(xPos + 598, 600, xPos + 601, 601, xPos + 593, 606);

fill(0,90)

circle(xPos - 15, 620, 30)
circle(xPos - 50, 610, 50)
circle(xPos - 95, 580, 70)
}