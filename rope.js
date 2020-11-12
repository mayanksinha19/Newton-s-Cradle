class rope{
    constructor(point1,body2){
        //this.offsetX=offsetX;
        //this.offsetY=offsetY;
        var options={
            bodyA:body2,
            //bodyB:body2,
            pointA:{x:this.bodyX,y:this.bodyY}
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
}