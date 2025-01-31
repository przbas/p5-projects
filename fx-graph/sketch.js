let w = 800,
    h = 600,
    xmin = 0,
    xmax = 0,
    ymin = 0,
    s = (w-10)/(xmax-xmin), //scale
    ox = 0,
    oy= 0;



function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    xmin=1*xmin-1;
    xmax=1*xmax-1;
    document.getElementById("xmin").value = xmin;
    document.getElementById("xmax").value = xmax;
  } else if (keyCode === RIGHT_ARROW) {
    xmin=1*xmin+1;
    xmax=1*xmax+1;
    document.getElementById("xmin").value = xmin;
    document.getElementById("xmax").value = xmax;
  } else if (keyCode === UP_ARROW) {
    ymin=1*ymin+1;
    document.getElementById("ymin").value = ymin;
  } else if (keyCode === DOWN_ARROW) {
    ymin=1*ymin-1;
    document.getElementById("ymin").value = ymin;
  } else if (keyCode === 107) {
    ymin=1*ymin+1;
    document.getElementById("ymin").value = ymin;
    xmin=1*xmin+1;
    xmax=1*xmax-1;
    document.getElementById("xmin").value = xmin;
    document.getElementById("xmax").value = xmax;
  } else if (keyCode === 109) {
    ymin=1*ymin-1;
    document.getElementById("ymin").value = ymin;
    xmin=1*xmin-1;
    xmax=1*xmax+1;
    document.getElementById("xmin").value = xmin;
    document.getElementById("xmax").value = xmax;
  }
}


function setup() {
    createCanvas(w, h);
    frameRate(5);
    xmin = document.getElementById("xmin").value;
    xmax = document.getElementById("xmax").value;
    ymin = document.getElementById("ymin").value;
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

    let a = 0, b = 0, c = 0, d = 0, e = 0;

    //fx
    if (document.getElementById("func-type-1").value == "wielomian-1") {
      a = document.getElementById("fx-1").value*1;
      b = document.getElementById("fx-2").value*1;
      c = document.getElementById("fx-3").value*1;
      d = document.getElementById("fx-4").value*1;
      e = document.getElementById("fx-5").value*1;
      stroke(document.getElementById("color-1").value);
      for (let i = 0; i < w*10; i++) {
        x = (i/10-ox)/s;
        y = a*x*x*x*x +b*x*x*x +c*x*x +d*x +e;
        point(ox+x*s,h-oy-(y*s));
      }  
    } else if (document.getElementById("func-type-1").value == "odwrotna-1") {
      a = document.getElementById("fx-1").value*1;
      b = document.getElementById("fx-2").value*1;
      stroke(document.getElementById("color-1").value);
      for (let i = 0; i < w*10; i++) {
        x = (i/10-ox)/s;
        y = a/x +b;
        point(ox+x*s,h-oy-(y*s));
      }     
    } else if (document.getElementById("func-type-1").value == "wykladnicza-1") {
      a = document.getElementById("fx-1").value*1;
      b = document.getElementById("fx-2").value*1;
      stroke(document.getElementById("color-1").value);
      for (let i = 0; i < w*10; i++) {
        x = (i/10-ox)/s;
        y = pow(a, x) +b;
        point(ox+x*s,h-oy-(y*s));
      }     
    } else if (document.getElementById("func-type-1").value == "logarytm-1") {
      a = document.getElementById("fx-1").value*1;
      b = document.getElementById("fx-2").value*1;
      c = document.getElementById("fx-3").value*1;
      stroke(document.getElementById("color-1").value);
      for (let i = 0; i < w*10; i++) {
        x = (i/10-ox)/s;
        y = a*(log(x)/log(b)) +c;
        point(ox+x*s,h-oy-(y*s));
      }     
    }
    

    //gx
    if (document.getElementById("func-type-2").value == "wielomian-2") {
      a = document.getElementById("gx-1").value*1;
      b = document.getElementById("gx-2").value*1;
      c = document.getElementById("gx-3").value*1;
      d = document.getElementById("gx-4").value*1;
      e = document.getElementById("gx-5").value*1;
      stroke(document.getElementById("color-2").value);
      for (let i = 0; i < w*10; i++) {
        x = (i/10-ox)/s;
        y = a*x*x*x*x +b*x*x*x +c*x*x +d*x +e;
        point(ox+x*s,h-oy-(y*s));
      }
    } else if (document.getElementById("func-type-2").value == "odwrotna-2") {
      a = document.getElementById("gx-1").value*1;
      b = document.getElementById("gx-2").value*1;
      stroke(document.getElementById("color-2").value);
      for (let i = 0; i < w*10; i++) {
        x = (i/10-ox)/s;
        y = a/x +b;
        point(ox+x*s,h-oy-(y*s));
      }     
    } else if (document.getElementById("func-type-2").value == "wykladnicza-2") {
      a = document.getElementById("gx-1").value*1;
      b = document.getElementById("gx-2").value*1;
      stroke(document.getElementById("color-2").value);
      for (let i = 0; i < w*10; i++) {
        x = (i/10-ox)/s;
        y = pow(a, x) +b;
        point(ox+x*s,h-oy-(y*s));
      }     
    } else if (document.getElementById("func-type-2").value == "logarytm-2") {
      a = document.getElementById("gx-1").value*1;
      b = document.getElementById("gx-2").value*1;
      c = document.getElementById("gx-3").value*1;
      stroke(document.getElementById("color-2").value);
      for (let i = 0; i < w*10; i++) {
        x = (i/10-ox)/s;
        y = a*(log(x)/log(b)) +c;
        point(ox+x*s,h-oy-(y*s));
      }     
    }

    //f(x) dowolna
    if (document.getElementById("func-type-1").value == "dowolna-1") {
      stroke(document.getElementById("color-1").value);
      for (let i = 0; i < w*10; i++) {
        x = (i/10-ox)/s;
        y = 2*x*x + 7*x; // tu zmienic
        point(ox+x*s,h-oy-(y*s));
      }
    }

    //g(x) dowolna
    if (document.getElementById("func-type-2").value == "dowolna-2") {
      stroke(document.getElementById("color-2").value);
      for (let i = 0; i < w*10; i++) {
        x = (i/10-ox)/s;
        y = -2*x + 6; // tu zmienic
        point(ox+x*s,h-oy-(y*s));
      }
    }
}

