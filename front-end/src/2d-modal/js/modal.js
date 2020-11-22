


class Modal{

}


class Renderer{
    constructor(){

    }

    render(){

    }
}
/*
function drawJawline(ctx){
    const start = {
        x:160,
        y:200
    };
    const startControlChange = {
        x:-9.5,
        y:0
    };
    const endControlChange = {
        x:-18.6,
        y:-3
    };
    const endChange = {
        x:-26.1,
        y:-8.8
    }
    ctx.beginPath();
    ctx.moveTo(start.x,start.y);
    ctx.bezierCurveTo(
        start.x+startControlChange.x,
        start.y+startControlChange.y,
        start.x+endControlChange.x,
        start.y+endControlChange.y,
        start.x+endChange.x,
        start.y+endChange.y
    );
    ctx.moveTo(start.x,start.y);
    ctx.bezierCurveTo(
        start.x-startControlChange.x,
        start.y+startControlChange.y,
        start.x-endControlChange.x,
        start.y+endControlChange.y,
        start.x-endChange.x,
        start.y+endChange.y
    );
    ctx.stroke();
    ctx.beginPath();
    const factor = 30;
    //ctx.moveTo(start.x+50,start.y-50);
    //ctx.ellipse(start.x, start.y+endChange.y-156.1, 156.1, 156.1, 0, -Math.PI, -Math.PI - Math.tan((156.1+-endChange.y)/156.1),1);
    ctx.moveTo(start.x+endChange.x,start.y+endChange.y);
    ctx.bezierCurveTo(
        start.x+endChange.x-30,
        start.y+endChange.y-10,
        start.x+endChange.x-50-30,
        start.y+endChange.y-100+30,
        start.x+endChange.x-70,
        start.y+endChange.y-100+factor,
    );
    ctx.moveTo(start.x-endChange.x,start.y+endChange.y);
    ctx.bezierCurveTo(
        start.x-endChange.x+30,
        start.y+endChange.y-10,
        start.x-endChange.x+50+30,
        start.y+endChange.y-100+30,
        start.x-endChange.x+70,
        start.y+endChange.y-100+factor
    );
    ctx.stroke();

}
*/
let times = 0;
function drawJawline(ctx,aspectRatio=1.4,factor=1){
    const start = {
        x:160,
        y:200
    };
    const width = 150;
    const startOffsetRadian = 0.5;
    ctx.beginPath();
    ctx.ellipse(
        start.x,
        start.y,
        width/2,
        width/2 * aspectRatio,
        0,
        startOffsetRadian,
        Math.PI-startOffsetRadian
    )
    ctx.stroke();

    if(aspectRatio<=0.5){
       factor = -1;
    }else if(aspectRatio>=1.4){
        factor = 1;
        times++;
    }

    if(times>2)
        return;

    setTimeout(()=>{
        ctx.clearRect(160-150,200,150*2,150 * aspectRatio);
        drawJawline(ctx,aspectRatio-0.01*factor,factor);
    },10);
    
}

function drawMouth(ctx){
    const start = {
        x:160,
        y:200
    };

    ctx.beginPath();
    ctx.moveTo(start.x,start.y);
    ctx.lineTo(start.x+10,start.y);
    ctx.stroke();

    const startControlChange = {
        x:-9.5,
        y:0
    };
    const endControlChange = {
        x:-18.6,
        y:-3
    };
    const endChange = {
        x:-26.1,
        y:-8.8
    }
    ctx.beginPath();
    ctx.moveTo(start.x,start.y);
    ctx.bezierCurveTo(
        start.x+startControlChange.x,
        start.y+startControlChange.y,
        start.x+endControlChange.x,
        start.y+endControlChange.y,
        start.x+endChange.x,
        start.y+endChange.y
    );
    ctx.moveTo(start.x,start.y);
    ctx.bezierCurveTo(
        start.x-startControlChange.x,
        start.y+startControlChange.y,
        start.x-endControlChange.x,
        start.y+endControlChange.y,
        start.x-endChange.x,
        start.y+endChange.y
    );
    ctx.stroke();
    ctx.beginPath();
    const factor = 30;
    //ctx.moveTo(start.x+50,start.y-50);
    //ctx.ellipse(start.x, start.y+endChange.y-156.1, 156.1, 156.1, 0, -Math.PI, -Math.PI - Math.tan((156.1+-endChange.y)/156.1),1);
    ctx.moveTo(start.x+endChange.x,start.y+endChange.y);
    ctx.bezierCurveTo(
        start.x+endChange.x-30,
        start.y+endChange.y-10,
        start.x+endChange.x-50-30,
        start.y+endChange.y-100+30,
        start.x+endChange.x-70,
        start.y+endChange.y-100+factor,
    );
    ctx.moveTo(start.x-endChange.x,start.y+endChange.y);
    ctx.bezierCurveTo(
        start.x-endChange.x+30,
        start.y+endChange.y-10,
        start.x-endChange.x+50+30,
        start.y+endChange.y-100+30,
        start.x-endChange.x+70,
        start.y+endChange.y-100+factor
    );
    ctx.stroke();
}

function moveMouth(ctx,aspectRatio=1.4){
    let direction = -1;
    if(aspectRatio<=0){
        direction = -1;
    }else if(aspectRatio>=1.4){
        direction=1;
    }
    
    let requestId = window.requestAnimationFrame(moveMouth);
    drawJawline(ctx,aspectRatio + (0.1*direction));
    ctx.clearRect(160-150,200,150*2,150 * aspectRatio);
}

const modalElement = document.querySelector('#modal');
modalElement.height = "500";
modalElement.width = "500"
const modalContext = modalElement.getContext('2d');
ctx = modalContext;
ctx.imageSmoothingEnabled = 1;
drawJawline(ctx);
drawMouth(ctx);
console.log(modalElement);
//requestId = window.requestAnimationFrame(moveMouth)

/*
window.requestAnimationFrame(function(){
    moveMouth(modalContext);
});*/