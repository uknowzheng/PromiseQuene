# PromiseQuene

# Summary
Provide a current-limiting Promise queue for solving multiple Promise concurrency.

Main scene:
- Large file downloads need to control the number of concurrent download tasks

# How to use?
install by npm:
```
npm i promise-quene
```

example:
```
const PromiseQuene = require('promise-quene');
const pq = new PromiseQuene({
  concurrency:3 // you can set the max concurrency number
});

[1,2,3,4,5].forEach((v)=>{
  pq.add(()=>new Promise((resolve)=>{
    // you can do something async
    setTimeout(()=>{
      console.log(v);
      resolve();
    },1000);
  }))
});

```
