class Log {    
    constructor(x,y,height,angle){
        var option = {
            restitution : 0.8,
            density : 1,
            friction : 1
        }
        this.body = Bodies.rectangle(x,y,20,height,option);
        this.width = 20;
        this.height =  height;
        this.x = x;
        this.y = y;
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body);
    }    

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(30,80,160);
        strokeWeight(4);
        stroke(225,175,120);
        rectMode(CENTER);        
        rect(0,0,this.width,this.height);
        pop();
    }

}