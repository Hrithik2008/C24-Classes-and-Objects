class Bird {    
    constructor(x,y){
        var option = {
            restitution : 0.5,
            density : 1.5,
            friction : 1
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
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(255,0,0);
        rectMode(CENTER);        
        rect(0,0,this.width,this.height);
        pop();
    }

}