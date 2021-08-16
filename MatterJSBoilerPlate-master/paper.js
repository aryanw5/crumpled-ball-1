class Paper{
    constructor(x, y ,r){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction:0.5,
            density:1.2

        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);

    }
    display() {
        var paperPos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(this.x, this.y, this.r);
        fill("yellow");

        circle(this.body.position.x, this.body.position.y, this.r);
        
        
    }
}