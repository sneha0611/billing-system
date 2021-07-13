const c1=document.getElementById('c1');
const c2=document.getElementById('c2');
const c3=document.getElementById('c3');
const d1=document.getElementById('d1');
const d2=document.getElementById('d2');
const d3=document.getElementById('d3');
const L1=document.getElementById('L1');
const L2=document.getElementById('L2');
const L3=document.getElementById('L3');
const b1=document.getElementById('b1');
const b2=document.getElementById('b2');
const b3=document.getElementById('b3');
const list=document.getElementById('list');
const total=document.getElementById('total');
const calculate=document.getElementById('calculate');

let bill=[];

 c1.addEventListener('click',()=>{
     let data = {
        name:"HOTCOFFEE LATTE",
        price:219
     };
     bill.push(data)
     add()
 })

 c2.addEventListener('click',()=>{
    let data = {
       name:"CINAMON SHORTBREAD LATTE",
       price:275
    }
    bill.push(data)
    add()
})

c3.addEventListener('click',()=>{
    let data = {
       name:"CAPUCHINO LATTEE",
       price:215
    }
    bill.push(data)
    add()
})

d1.addEventListener('click',()=>{
    let data = {
       name:"AMERICANO+MUFFIN",
       price:315
    }
    bill.push(data)
    add()
})


d2.addEventListener('click',()=>{
    let data = {
       name:"CAFE MOCHA'S",
       price:520
    }
    bill.push(data)
    add()
})


d3.addEventListener('click',()=>{
    let data = {
       name:"CAFELATTEE+WHITEMOCHA",
       price:450
    }
    bill.push(data)
    add()
})

L1.addEventListener('click',()=>{
    let data = {
       name:"ICED GREEN LEMONADE",
       price:260
    }
    bill.push(data)
    add()
})

L2.addEventListener('click',()=>{
    let data = {
       name:"IRISH CREAME CREW",
       price:360
    }
    bill.push(data)
    add()
})


L3.addEventListener('click',()=>{
    let data = {
       name:"CHERRY MOCHA",
       price:345
    }
    bill.push(data)
    add()
})

b1.addEventListener('click',()=>{
    let data = {
       name:"HAPPY HOUR",
       price:440
    }
    bill.push(data)
    add()
})

b2.addEventListener('click',()=>{
    let data = {
       name:"SPECIAL OFFER",
       price:200
    }
    bill.push(data)
    add()
})

b3.addEventListener('click',()=>{
    let data = {
       name:"HALF PRICE",
       price:250
    }
    bill.push(data)
    add()
})

function add(){
list.innerHTML=null;
for(let i=0;i<bill.length;i++){


    let li = document.createElement('li');
    li.style.display= "flex";
    li.style.justifyContent="space-between";
    li.style.alignItems="center";

    let no = document.createElement('p')
    no.innerText=i+1 +".";

    let n = document.createElement('p')
    n.innerText=bill[i].name;

    let p =document.createElement('p')
    p.innerText = bill[i].price +"/-";

     let button = document.createElement('button') 
     button.innerText="X";
     button.style.cursor="pointer";



     button.addEventListener('click',function(e){
         console.log(bill[i],bill,i);
         bill.splice(i,1);
         console.log(bill[i],bill,i);
         total.innerText= "/-";
         add();
     })

li.appendChild(no);
li.appendChild(n);
li.appendChild(p);
li.appendChild(button);
list.appendChild(li);

let sum=0;
for(let j=0;j<bill.length;j++){
    sum+= bill[j].price;    
}
total.innerText =sum+ "/-";
}
}
calculate.addEventListener('click',function(e){
    list.innerHTML =null;
    bill=[];
    total.innerText ="/-";
})




