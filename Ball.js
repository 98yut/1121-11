// 物件導向格式
class Ball{
  // 建構
  constructor(x,y,s=20){
    this.x=x;
    this.y=y;
    this.size=s;
    this.movex =random(-1.0,1.0);
    this.movey =random(-1.0,1.0);
    
    // color
    this.cR = 255;
    this.cG = 0;
    this.cB = 0;
    // animation
    this.chP = 200;
    this.chval = 0;
    this.trigger =false;
  }
  // 能力為何
  display(){
    this.selfbounce();
    this.bounce();
    this.move();
    this.animate();
    fill(this.cR,this.cG,this.cB);
    circle(this.x,this.y,this.size);
  }
  move(){
    this.x = this.x + this.movex;
    this.y = this.y + this.movey;
  }
  animate(){
    if (this.trigger){
      this.chval = this.chP;
      this.trigger=false;
    }else{
      this.cG=this.chval;
    }
    if (this.chval>0){
      this.chval-=1;
    }
  }
  bounce(){
    // 上方反彈 或 下方反彈
    if (this.y-this.size/2<0 || this.y+this.size/2>height){
      this.movey = -1*this.movey;
      // 撞後一段時間無敵 還是 一撞就變
      if (this.chval==0) this.trigger=true;
    }
    
    // 左方反彈 或 右方反彈
    if (this.x-this.size/2<0 || this.x+this.size/2>width){
      this.movex = -1*this.movex;
      if (this.chval>0) this.trigger=true;
    }
  }
  // 物件彼此反彈
  selfbounce(){
    bs.forEach((nb)=>{
      if (nb === this){
        // 若不是自己
        //console.log('a');
      }else{
        // 若x方向距離太近
        if (abs(this.x-nb.x)<this.size && 
            dist(this.x,this.y,nb.x,nb.y)<this.size)
          {this.movex=-1*this.movex;
           if (this.chval==0) this.trigger=true;
           }
        if (abs(this.y-nb.y)<this.size&& 
            dist(this.x,this.y,nb.x,nb.y)<this.size)
          {this.movey=-1*this.movey;
           if (this.chval==0) this.trigger=true;
           }
      }
      
      });
  }
}

class brick{
  constructor(x,y,s=20){
    this.x=x;
    this.y=y;
    this.size=s;
    //this.distory=false;
  }
  display(){
      this.boom();
      fill(255);
      rect(this.x,this.y,20,20);
  }
  boom(){
    bs.forEach((nb)=>{
        if (dist(nb.x,nb.y,this.x,this.y)<this.size/2+nb.size/2){
          //console.log('b');
          
          let index = bricks.indexOf(this);
          if (index > -1) {
            bricks.splice(index, 1);
          }
        }
    });
    
  }
}