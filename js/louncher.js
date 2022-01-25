class louncher{
    constructor(bodyA,pointB){
        var config = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            lenght: 10
        }
        this.body = Constraint.create(config);
        this.pointB = pointB;
        this.bodyA = bodyA;
        World.add(world,this.body);
    }
    
    display(){
        
        if(this.body.bodyA){
            strokeWeight(5);
            line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }

    fly(){
        this.body.bodyA = null;
    }

    attach(bodyA){
        this.body.bodyA = bodyA;
    }
}