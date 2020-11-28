class Stone{
    constructor(x,y,width,height){
        var options ={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width =width;
        this.image = image("Images/stone.png");
        World.add(world,this.body);
    }
    display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    imageMode(CENTER);
   image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();
    }
}