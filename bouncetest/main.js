// canvas
let c = document.querySelector("canvas");

// 2d context?? idk
let ctx = c.getContext("2d");

// misc. var
let degree = 45;
let fps = 60;

// holds the id of "setInterval"
let animation;

// idk
class Circle {
    constructor(x,y,radius,dx,dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.positions = [];
    }
}

// self-explanitory (pardon the spelling)
let circles = [
    {
        id: 0,
        x: 100,
        y: c.width/2,
        radius: 10,
        dx: 1*Math.cos((degree*Math.PI)/180),
        dy: 1*Math.sin((degree*Math.PI)/180),
        positions: []
    },
    {
        id: 1,
        x: 20,
        y: 20,
        radius: 10,
        dx: 1*Math.cos((degree*Math.PI)/180),
        dy: 1*Math.sin((degree*Math.PI)/180),
        positions: []
    }
]

// runs when DOMContentLoaded fires
function setup() {
    animation = setInterval(a=>{
        animate();
    },1000/fps);
}

// animation loop function
function animate() {
    ctx.clearRect(0,0,c.width,c.height);
    // draw da circles
    circles.forEach(circle=>{
        ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
        ctx.fill();
        ctx.beginPath();
        circle.x+=circle.dx;
        circle.y+=circle.dy;

        circlecollision(circle);

        ctx.beginPath();
        ctx.moveTo(circle.x,circle.y);
        ctx.lineTo(circle.x+circle.dx*10,circle.y+circle.dy*10);
        ctx.stroke();
        ctx.beginPath();

        // ctx.beginPath();
        // ctx.moveTo(circle.x+circle.dx*10,circle.y+circle.dy*10);
        
        // // very rong code
        // let px = (circle.x+circle.dx*10);
        // let py = (circle.y+circle.dy*10);
        // ctx.lineTo(
        //     (px*Math.cos((45*Math.PI)/180))-(py*Math.sin((45*Math.PI)/180)),
        //     (px*Math.sin((45*Math.PI)/180))+
        //     (py*Math.cos((45*Math.PI)/180))
        // );
        // ctx.stroke();
        // ctx.beginPath();


        // gravity (not sure about this but whatever its 4 testing anyway)
        circle.dy+=0.3;

        // momentem loss due to air resistance?? i hate physics
        if(circle.dx>0 && (circle.dx-0.01)>0){circle.dy-=0.01}
        if(circle.dx<0 && (circle.dx+0.01)<0){circle.dy+=0.01}
    })
}

// handle balls collision with frame/borders/walls
function circlecollision(circle) {
    let leftwall = circle.radius;
    let topwall = circle.radius;
    let rightwall = c.width-circle.radius;
    let bottomwall = c.height-circle.radius;

    // make it bounce when it hits right wall
    if(circle.x>=rightwall){
        circle.x=rightwall;
        circle.dx*=-1;
        // circle.dx*=0.5;
    }
    // make it bounce when it hits bottom wall
    if(circle.y>=bottomwall){
        circle.y=bottomwall;
        circle.dy*=-1;
        // circle.dy*=0.5;
    }
    // make it bounce when it hits the top
    if(circle.y<topwall){
        circle.y=topwall;
        circle.dy*=-1;
        // circle.dy*=1.5;
    }
    // make it bounce when it hits the left
    if(circle.x<leftwall){
        circle.x=leftwall;
        circle.dx*=-1;
        // circle.dx*=0.5;
    }
}

document.addEventListener("DOMContentLoaded",e=>{
    setup();
});