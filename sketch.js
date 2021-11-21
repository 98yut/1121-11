let numX=3;
let numY=3;

// 陣列 list 
let bs = [];
let bricks =[];

function setup() {
  createCanvas(400, 400);

  for(let i=0;i<numX;i=i+1){
    for(let j=0;j<numY;j=j+1){
      // 把東西塞入 [] list 中的方法
      // xxx.push(新建的物件)
      bs.push(new Ball(i*width/numX + width/numX/2,
                       j*height/numY + height/numY/2));
    }
  }
  rectMode(CENTER);
  
  for(let bi=0;bi<10;bi=bi+1){
      // 把東西塞入 [] list 中的方法
      // xxx.push(新建的物件)
      bricks.push(new brick(bi*width/10 + width/10/2, 50));
    }
}
 // 持續重複執行
function draw() {
  background(220); 
  // 讓袋子中的 每物件 各自執行動作
  // xxx.forEach((v)=>{ v.display(); });
  bs.forEach((v,i)=>{
    v.display();
    //console.log(v.x+','+i);
  });
  
  bricks.forEach((b)=>{
    b.display();
    //b.boom();
  })
}

