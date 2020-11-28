class Boy{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.boy = Constraint.create(options);
        World.add(world, this.sling);
        this.image = loadImage("Images/boy.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
      image(this.image,200,20);
     
        if(this.boy.bodyA){
            var pointA = this.boy.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8);
            
            
        }
    }
    
}