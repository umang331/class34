class Ball {
    constructor(){
        this.x =200 ;
        this.y = 200;
        this.width =80 ;
        this.height = 80;
        var option = {
            density:1,
            frictionAir:0.005
        }
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,option)
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}