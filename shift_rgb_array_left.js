let rgb = [];
let cap = 0xff; // 255

function left(arr,amt=15,times=1) {
  if(255 % amt !== 0)amt=15;
  if(!!!times)return arr;
  let rarr = [0,0,0];
  for(let i=0;i<times;i++){
    if(rgb[0]===cap)return arr;
    else if(arr[1]>0 && arr[2]===0) middleLeft();
    else if(arr[2]>0) rightLeft();
    arr = rarr;
  }
  function middleLeft() {
    rarr = [arr[0]+amt,arr[1]-amt,arr[2]];
  }
  function rightLeft() {
    rarr = [arr[0],arr[1]+15,arr[2]-15]
  }
  return rarr;
}

/*
[0,0,255] -> [0,15,240]
*/
//r.innerHTML = left([0,255,0],30);
let x = 15;
let array = [];
for(let i=0;i<=(255/x)*2;i++){
  array.push(left([0,0,255],15,i))
}
let [trash,...array2] = array;
array = [...array,...array2.reverse()];
array.shift();
array.forEach(ele=>{
  r.innerHTML+=`<div style="height:10px;width:10px;display:inline-block;background:rgb(${ele}"></div>`
});
