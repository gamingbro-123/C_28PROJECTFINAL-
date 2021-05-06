class Stone {
    constructor(xpos,ypos,radius) {
      var options = {
          
          restitution:0.7,
          friction:1,
          density:1.2
      }

      this.radius = radius;
      this.body = Bodies.circle(xpos,ypos,radius,options);
      this.xpos = xpos;
      this.ypos = ypos;

      this.image = loadImage("stone.png");

      World.add(world, this.body);
    }

    display()
      {
        push();
        imageMode(CENTER)
         console.log(this.xpos)
         image(this.image,this.body.position.x,this.body.position.y,this.radius+50,this.radius+50);
        // image(this.image,100,200,this.radius,this.radius);
        pop();
      }
    }
    
    