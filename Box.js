class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visiblity = 255;
     this.image = loadImage("sprites/box.png");
    }
    display(){
      //console.log(this.body.speed);
      if(this.body.speed < 3){
       super.display();
      }
      else{
        
        var pos = this.body.position;
        push();
        World.remove(world, this.body);
        this.Visiblity = this.Visiblity - 30;
        tint(255,this.Visiblity);
        image(this.image,pos.x,pos.y,40,50);
        
        pop(); 
        
        
      }
      
    }
   
  }