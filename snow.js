class snow {

    constructor(x, y, width, height) {
        this.image=loadImage("snow5.webp")
        var options={
         restitution: 0.1,
         friction: 0.001
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      fill("blue");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
     update(){
       if(this.body.position.y<400){
          console.log(this.body.position.y);
          Matter.Body.setPosition (this.body,{x: random(0,400),
          y: random(0,400)
          });
        }
     }
  }