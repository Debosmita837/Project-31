class Plinkos {
    constructor(x, y, r){
    
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r);
        World.add(world, this.body);
    }
    display(){
        var plinkosPos = this.body.position

        push()
        translate(plinkosPos.x, plinkosPos.y);
        ellipseMode(CENTER);
        strokeWeight(3);
        fill("white");
        ellipse(plinkosPos.x, plinkosPos.y, this.r, this.r);
        pop();
    }
}