- 为什么所有公司都考这道题
  内部性能优化的考点
- 性能优化
    1. chrome 自带的性能优化工具
    console.warn()  console.error()
    console.time('for-in') console.timeEnd('for-in')
    顺序执行 瞬间执行
    2. for key in 性能不太好 用for代替吧，while最快
- 浅拷贝
   返回的对象 并不是独立的新的对象
   跟直观理解有差异

- 浅拷贝 深拷贝 规避内存指向同一地址问题
  要不要返回新对象? JSON.parse(JSON.stringfy()) 会返回一个对象 解决大部分问题
  JSON.stringfy() 只会对简单的key value处理，对复杂的部分会忽略掉，如下obj2只打印出{a:2}
  let obj = {
    a:1,
    b:function(){
        console.log('b');
    }
   };
   obj2 = JSON.parse(JSON.stringify(obj));
   obj2.a = 2;
   console.log(obj);
   console.log(obj2); //{a:2}


- 递归
   大的问题，有多个类似(clone) 问题构成，
   并且，有一个推出条件，
   clone 多层JSON嵌套 由内到外的一层层解决
   一层时，直接返回 

