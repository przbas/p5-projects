let w = 800,
    h = 600,
    scale = 10,
    ox = 200,
    oy= 150;

function setup() {
    createCanvas(w, h);
  }
  
  function draw() {
    background(240);
    stroke(0);
    line(ox, 0, ox, h);
    line(0, h-oy, w, h-oy);
    stroke(0, 150, 200);
    for (let i = 1; i < ox/scale; i++) {
        line(ox-i*scale, 0, ox-i*scale, h); 
    }

  }
