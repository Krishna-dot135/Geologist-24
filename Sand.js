class Sand {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.8,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,5, options);
      this.radius = 5;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("white");
      fill("blue");
      rect(0, 0, this.radius);
      pop();
    }
  };
  