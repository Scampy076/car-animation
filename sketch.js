function setup() {
    createCanvas(1200, 800);
    background("yellow");
fill(color(0, 200, 500, 500));
rect(200, 520, 700, 110);
circle(300,600,100);
circle(800,600,100);
triangle(200, 450, 300, 450, 250, 400)
arc(500, 525, 300, 200, PI, TWO_PI);
line(300, 520, 275, 450)
line(250, 520, 225, 450)
line(250, 520, 275, 450)
line(300, 520, 225, 450)
let img = createImage(740, 605);
img.loadPixels();
for (let i = 327; i < img.width; i++) {
  for (let j = 595; j < img.height; j++) {
    img.set(i, j, color(255, 204, 0));
  }
}
img.updatePixels();
image(img, 17, 17);

}