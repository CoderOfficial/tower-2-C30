class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);

    }
    fly(){
        this.sling.bodyA =null;
    }
    attach(body){
        this.sling.bodyA=body;
    }
    display(){
        if(this.sling.bodyA){
        var pointa = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("red");
        line(pointa.x, pointa.y, pointB.x, pointB.y);
        if(pointa.x<220){
            line(pointa.x-20 ,pointa.y, pointB.x-10, pointB.y )
            rect(this.body,pointa.x-30,pointa.y-15,15,30);
        }

        }
        }
        
    
}