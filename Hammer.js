class Hammer {
    constructor(x, y,) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':2
      }
      this.body = Bodies.rectangle(x, y,50,150, options);
      this.width = 50;
      this.height = 150;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  