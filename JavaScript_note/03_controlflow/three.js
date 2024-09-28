// ===================
// const coding=["js","ruby","java","python","cpp"]
// // for each does not return anything
// const values=coding.forEach((item)=>{
//    return item
// })
// console.log(values);
// ============ filter function ===
const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.filter((num)=> num>4)
// ==================
// newNums=myNums.filter((num)=>{
//     // if we are open scope always return keyword write
//     return num>4;
// })
// =========== using for each=========
const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num);
    }
})
//console.log(newNums);
// ==============================

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  
//const userBooks=books.filter((br)=>br.genre==='History')

// const userBooks=books.filter((bk)=>{
//     if(bk.publish>=2000){
//         return bk.publish;
//     }
// })
// console.log(userBooks);

const userBooks=books.filter((bk)=>{
    if(bk.publish>=1995 && bk.genre==="History"){
        return bk.publish;
    }
})
//console.log(userBooks);

// ++++++++++ map ++++++++++++++++++++

// const mynums=[1,2,3,4,5,6,7,8,9,10]
// // const new_nums=mynums.map((num)=>{
// //     return num+10
// // })
// // ===============
// const new_nums= mynums.map((num)=>num*10)
//                       .map((num)=>num+1)
//                       .filter((num)=>num>=40)
// console.log(new_nums);

// +++++++++++++++++++ Reduce ++++++++++++++++++++++++++++

const my_nums=[1,2,3,4]
// 0 is inital value of "acc"
// steps1: acc=0 currval=1
// step2: acc=1 currval=2
// step3: acc=3 currval=3
// step4: acc=6 currval=4
// step5: myTotal=10 
// const myTotal=my_nums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
//      return acc+currval
// },0)
// anythigs we can given in place "0"
// =====================
// const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
// console.log(myTotal);
// +++++++++++++++++++++++++++++

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay)

