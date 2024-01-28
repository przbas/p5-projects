let w = 800,
    h = 600,
    xmin = 0,
    xmax = 0,
    ymin = 0,
    s = (w-10)/(xmax-xmin), //scale
    ox = 0,
    oy= 0;
    xmin = document.getElementById("xmin").value;
    xmax = document.getElementById("xmax").value;
    ymin = document.getElementById("ymin").value;


function setup() {
    createCanvas(w, h);
  }
  
  function draw() {
    background(240);
    // axis
    xmin = document.getElementById("xmin").value;
    xmax = document.getElementById("xmax").value;
    ymin = document.getElementById("ymin").value;
    s = (w-10)/(xmax-xmin), //scale
    s = floor(s);
    ox = 5-xmin*s;
    oy = 5-ymin*s;

    stroke(0);
    strokeWeight(1);
    line(ox, 0, ox, h);
    line(0, h-oy, w, h-oy);    
    stroke(0, 150, 200);
    for (let i = 1; i < ox/s; i++) {
        line(ox-i*s, 0, ox-i*s, h);
    }
    for (let i = 1; i < w-ox/s; i++) {
      line(ox+i*s, 0, ox+i*s, h);
    }
    for (let i = 1; i < oy/s; i++) {
      line(0, h-oy+i*s, w, h-oy+i*s);
    }
    for (let i = 1; i < h-oy/s; i++) {
      line(0, h-oy-i*s, w, h-oy-i*s);
    }
    stroke(0);
    for (let i = 1; i < ox/s; i++) {
      line(ox-i*s, h-oy+5, ox-i*s, h-oy-5);
      text(i*(-1), ox-i*s-6, h-oy+20);
    }
    for (let i = 1; i < w-ox/s; i++) {
      line(ox+i*s, h-oy+5, ox+i*s, h-oy-5);
      text(i, ox+i*s-4, h-oy+20);
    }
    for (let i = 1; i < oy/s; i++) {
      line(ox-5, h-oy+i*s, ox+5, h-oy+i*s);
      text(i*(-1), ox-25, h-oy+i*s+5);
    }
    for (let i = 1; i < h-oy/s; i++) {
      line(ox-5, h-oy-i*s, ox+5, h-oy-i*s);
      text(i, ox-25, h-oy-i*s+5);
    }

    // draw function
    let x=0;
    let y=0;  
    //point(ox+x*s,h-oy-(y*s));
    strokeWeight(3);

    let a = 0, b = 0, c = 0;

    //fx
    a = document.getElementById("fx-1").value*1;
    b = document.getElementById("fx-2").value*1;
    c = document.getElementById("fx-3").value*1;
    stroke(20, 150, 0);
    for (let i = 0; i < w; i++) {
      x = (i-ox)/s;
      y = a*x*x +b*x +c;
      point(ox+x*s,h-oy-(y*s));
    }
    
  }
