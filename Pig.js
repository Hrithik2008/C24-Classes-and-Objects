class Pig {    
    constructor(x,y){
        var option = {
            restitution : 0.8,
            density : 1,
            friction : 0.8
        }
        this.body = Bodies.rectangle(x,y,50,50,option);
        this.width = 50;
        this.height = 50;
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
        fill(20,255,10);
        strokeWeight(4);
        stroke(205,0,215);
        rectMode(CENTER);        
        rect(0,0,this.width,this.height);
        pop();
    }

}