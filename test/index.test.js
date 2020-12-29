const PromiseQuene = require('../lib/index');
const pq = new PromiseQuene({
  concurrency:3
});
[1,2,3,4,5].forEach((v)=>{
  pq.add(()=>new Promise((resolve)=>{
    setTimeout(()=>{
      console.log(v);
      resolve();
    },1000);
  }))
});