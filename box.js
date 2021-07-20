class Box{
    constructor(x, y, width, height) {
        var options = {
          restitution :0.4,
          friction :0.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
        
      }
      display(){
        if(this.body.speed>3){
   World.remove(world,this.body);

              }
              else{
                var angle = this.body.angle;
                push();
                strokeWeight(10);
                translate(this.body.position.x, this.body.position.y);
                fill("brown")
                this.visibility = this.visibility-5;
                tint(987,this.visibility);
                rotate(angle);
                rectMode(CENTER);
                rect(0,0,this.width,this.height)
                pop();
      }
}
}