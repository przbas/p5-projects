let w = 800,
    h = 600,
    xmin = -10,
    xmax = 20,
    ymin = -5,
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
    }
    for (let i = 1; i < w-ox/s; i++) {
      line(ox+i*s, h-oy+5, ox+i*s, h-oy-5);
    }
    for (let i = 1; i < oy/s; i++) {
      line(ox-5, h-oy+i*s, ox+5, h-oy+i*s);
    }
    for (let i = 1; i < h-oy/s; i++) {
      line(ox-5, h-oy-i*s, ox+5, h-oy-i*s);
    }

    // draw function
    let x=0;
    let y=0;  
    //point(ox+x*s,h-oy-(y*s));
    strokeWeight(3);

    // parabola ax2+bx+c
    let a = 2, b = -12, c = 10;   
    stroke(250, 0, 0);
    for (let i = 0; i < w; i++) {
      x = (i-ox)/s;
      y = a*x*x +b*x +c;
      point(ox+x*s,h-oy-(y*s));
    }

    // prosta ax+b
    a = 0.5, b = -5;
    stroke(0, 255, 0);
    for (let i = 0; i < w; i++) {
      x = (i-ox)/s;
      y = a*x +b;
      point(ox+x*s,h-oy-(y*s));
    }

    // hiperbola a/x
    a = 5;
    stroke(0, 255, 255);
    for (let i = 0; i < w; i++) {
      x = (i-ox)/s;
      y = a/x;
      point(ox+x*s,h-oy-(y*s));
    }
    

  }
