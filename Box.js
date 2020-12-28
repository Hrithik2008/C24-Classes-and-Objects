class Box {    
    constructor(x,y,width,height){
        var option = {
            restitution : 0.8,
            density : 1,
            friction : 0.8
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height =  height;
        this.x = x;
        this.y = y;
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