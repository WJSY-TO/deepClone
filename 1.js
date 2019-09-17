// 简单类型的拷贝是拷贝值
let a = 1;//值
let b = a;

b=2;

console.log(a);
// 复杂数据类型时候，拷贝是引用式赋值
let obj = {
    a:1,
    b:function(){
        console.log('b');
    }
};
//二线公司
//深拷贝
// 数组之中有什么操作，返回新数组？
obj2 = JSON.parse(JSON.stringify(obj));
obj2.a = 2;
console.log(obj);//创业公司
console.log(obj2);
