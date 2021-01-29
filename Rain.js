class Rain{
constructor(x,y,width,height){
    var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
    }
this.rain=Bodies.rectangle(x,y,width,height,options)
this.x=x;
this.y=y;
this.width=width;
this.height=height;

this.drops=[]
World.add(world,this.rain)
}
display(){
    
    
    var position=[this.rain.position.x,this.rain.position.y]
    this.drops.push(position)
    fill("blue")
    
       
        for (var i=0;i<100;i++){
     ellipse(this.drops[i][0],this.drops[i][1],this.width,this.height) 
            }  
            
    
       
    }

}




