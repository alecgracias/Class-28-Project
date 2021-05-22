class Ground {
  
	constructor(){
       var options={
		   isStatic:true
	      }

       this.x=650
	   this.y=550
	   this.width=1300
	   this.height=30

	   this.body=Bodies.rectangle(650,600,1300,30,options)
	   World.add(world,this.body)
	}

    display(){

		var groundPos=this.body.position
		push()
		translate(groundPos.x,groundPos.y)
		rectMode(CENTER)
		fill("black")
		rect(0,0,this.width,this.height)
		pop()

	}


} 