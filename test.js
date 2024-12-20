test();

function test() {
    //console.log('here');
}

//const test2 =() =>{
//console.log('here');
//


const obj={
    name:"Adrian",
    email:"adrian.geanta@csie.ase.ro"
}

obj.yearsOld=25

//obj={}

//console.log(obj)

const arr=[1,2,3,4]

for(let i=0; i< arr.length-1; i++){
    console.log(arr[i])
}

const forEachArr=arr.forEach((el,index)=>{
    console.log(el,index)
})

arr.map((el,index)=>{
    return el *2;
})


for(el of arr) {
    console.log(el)
}

for (el in arr){
    console.log(el)
}