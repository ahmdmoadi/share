let c = document.querySelector("canvas");
let ctx = c.getContext("2d");

let md = false;
c.addEventListener("mousedown",e=>md=!0);
c.addEventListener("mouseup",e=>md=!1);

let start = {
    x: 0,
    y: 0,
    state: !1
}
let end = {
    x: 0,
    y: 0,
    state: !1
}

setup();
function setup() {
    loop();
}

function loop() {
    ctx.clearRect(0,0,c.width,c.height);

    if(md){
        let angle = Math.acos(distance(start.x,start.y,end.x,start.y) / distance(start.x,start.y,end.x,end.y));

        (angle<=Math.PI/4)?ctx.fillStyle="lime":ctx.fillStyle="tomato";
        ctx.beginPath();
        ctx.moveTo(start.x,start.y);
        ctx.arc(start.x,start.y,40,0,angle);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle="black";

        let angle2 = Math.acos(distance(start.x,start.y,start.x,end.y) / distance(start.x,start.y,end.x,end.y));
        // console.clear();
        // console.log(r2d(angle2));

        if(!(angle<=Math.PI/4)){
            ctx.fillStyle="red";
            ctx.beginPath();
            let c=[start.x,start.y]
            ctx.moveTo(c[0],c[1]);
            ctx.arc(c[0],c[1],40,angle,angle+angle2,false);
            ctx.lineTo(c[0],c[1]);
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle="black";
        }
    }

    if(end.state && md){

        ctx.font="20px 'Segoe UI'"
        ctx.fillText(`(${end.x}, ${end.y})`,end.x+7, end.y+20);
        ctx.beginPath();

        ctx.font="20px 'Segoe UI'"
        ctx.fillText(`h0=${Math.trunc(distance(start.x,start.y,end.x,end.y))}`,((end.x+start.x)/2)-11, ((end.y+start.y)/2)-14);
        ctx.beginPath();

        ctx.lineWidth=3;
        ctx.moveTo(start.x,start.y);
        ctx.lineTo(end.x,end.y);
        ctx.stroke();
        ctx.beginPath();

        ctx.moveTo(start.x,start.y);
        ctx.lineTo(start.x,end.y);
        ctx.stroke();
        ctx.beginPath();

        ctx.font="20px 'Segoe UI'"
        ctx.fillText(`a1=${distance(start.x,start.y,start.x,end.y)}`,((start.x+start.x)/2)-35, ((end.y+start.y)/2));
        ctx.beginPath();

        ctx.arc(start.x,end.y,10,0,Math.PI*2,!1);
        ctx.fill();
        ctx.beginPath();

        ctx.moveTo(start.x,end.y);
        ctx.lineTo(end.x,end.y);
        ctx.stroke();
        ctx.beginPath();

        ctx.font="20px 'Segoe UI'"
        ctx.fillText(`o1=${distance(start.x,end.y,end.x,end.y)}`,((start.x+end.x)/2)-10, ((end.y+end.y)/2)+20);
        ctx.beginPath();

        ctx.moveTo(start.x,start.y);
        ctx.lineTo(end.x,start.y);
        ctx.stroke();
        ctx.beginPath();

        ctx.font="20px 'Segoe UI'"
        ctx.fillText(`a0=${Math.trunc(distance(start.x,start.y,end.x,start.y))}`,((start.x+end.x)/2)-10, ((start.y+start.y)/2)+20);
        ctx.beginPath();

        ctx.arc(end.x,start.y,10,0,Math.PI*2,!1);
        ctx.fill();
        ctx.beginPath();

        ctx.moveTo(end.x,start.y);
        ctx.lineTo(end.x,end.y);
        ctx.stroke();
        ctx.beginPath();

        ctx.font="20px 'Segoe UI'"
        ctx.fillText(`o1=${Math.trunc(distance(end.x,start.y,end.x,end.y))}`,((end.x+end.x)/2)+6, ((start.y+end.y)/2));
        ctx.beginPath();

        ctx.fillStyle="lime"
        ctx.arc(end.x,end.y,10,0,Math.PI*2,!1);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle="black"

        if(start.state && md){

            ctx.fillStyle="blue"
            ctx.arc(start.x,start.y,10,0,Math.PI*2,!1);
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle="#000"
    
            ctx.font="20px 'Segoe UI'"
            ctx.fillText(`(${start.x}, ${start.y})`,start.x-11, start.y-14);
            ctx.beginPath();
        }
    }

    setInterval(loop,1000/60);
}

c.addEventListener("mousedown",e=>{
    start.x = e.offsetX;
    start.y = e.offsetY;
    start.state = !0;
});

c.addEventListener("mousemove",e=>{
    end.x = e.offsetX;
    end.y = e.offsetY;
    end.state = !0;
});

function distance(x1,y1,x2,y2) {
    let dx=x2-x1;
    let dy=y2-y1;
    return Math.sqrt((dx*dx) + (dy*dy));
}

function d2r(d) {return (d*Math.PI)/180}
function r2d(r) {return (r*180)/Math.PI}