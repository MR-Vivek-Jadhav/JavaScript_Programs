

    // Q.1 *******ADD TO NUMBER***************

    let a = 10

    let b=20

    console.log("addition or a and b :-" , a+ b);



    // let num1=prompt("Enter First Number")

    // let num2=prompt("Enter Second Number")

    // let total= parseInt(num1) + parseInt(num2)

    // console.log(total);


// Q.2********SQUARE ROOT************


  let square=Math.sqrt(81)

  console.log(square);

  let RandomSqrt=Math.floor(Math.trunc(Math.random()) *100)

 let squareRoot= Math.sqrt(RandomSqrt)

 let squareOfNumber=(squareRoot*squareRoot)

 console.log(squareRoot);

 console.log(squareOfNumber);
  

//Q.3  ******PUSH THE ELEMENT IN THE EMPTY ARRAY*************

let Arr1=[]

let push1=Arr1.push(1)

Arr1.push(10)

console.log(Arr1,typeof Arr1);

let push2=Arr1.push('vivek')

Arr1.push('laxman')

Arr1.push('saurabh')

Arr1.push('vicky')

console.log(Arr1,typeof Arr1);


// Q.3 *********ACCESSING THE ABOVE DATA BY LOOP*******************


for (let i = 0; i < Arr1.length ; i++) {

    console.log(Arr1[i]);
    
}

 Arr1.forEach(function(data){
    console.log(data);
 })


// Q.4  INSEART 1 TO 10 IN EMPTY ARRAY BY USING FOR LOOP**************


let emptyArray=[ ]

for (let i = 1; i <= 10; i++) {
     
    let pushInArray=i;

    emptyArray.push(pushInArray)

//    console.log(emptyArray);
}
console.log(emptyArray);


// Q.5 ********SWAPPING OF NUMBER ***************

let A=10;

let B=30;

console.log("Before Swapping A:-",A);

console.log("Before Swapping B:-",B);

A=A+B

// console.log(A);

B=A-B

console.log("After Swapping B:-",B);

A=A-B

console.log("After Swapping A :-",A);


// Q.6 >>>>>>>>REMOVE ; AND , FROM THE STRING>>>>>>>>>>>>>>>>>>>>>>>>>












// *********calculate the Area of trangle*****************************


function areOfTrangle(base,height){

    return (base * height ) / 2
}

console.log(`area of trangle is :- ${areOfTrangle(5,10)} `);


// *************Print A to Z************************

let Arr=[...new Array(26)]

start=65

Arr.forEach(function(e,i){
    console.log(String.fromCharCode(start++),i+1);
})


// ******CHECK NUM IS + , _ , OR zERO*********************************

let Input=document.createElement("input")

Input.setAttribute=("type","text")

document.body.append(Input)

let btn=document.createElement("button")

btn.innerHTML="click Me"

document.body.append(btn)

let val

btn.addEventListener("click",function(){
   val=(Input.value)
    console.log(Math.sign(val,"Math.sign"));
})

// or 

btn.addEventListener("click",function(){
    if(val > 0){
        console.log(`${val} is Positive NUmber`);
    }else if(val < 0){
        console.log(`${val} is Negative Number`);
    }else if(val == 0) {
        console.log(`${val} is Zero`);
    }else{
        console.log("not a Number");
    }
})

btn.addEventListener("click",function(){
    switch (val) {
        case (val < 0):
            console.log(val,"negative");
            break;
            case(val>0):
                      console.log("greater");
            break;
    
        default:console.log("default");
            break;
    }  
})

// ***********getData from Api*****************************

async function getApi(){
    let val=await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json")
   let  ResultResponse=await val.json()
console.log(ResultResponse.usd.inr);

}
getApi()



// **********check number even or odd***********************************

     let NumBer = 6

     if(NumBer%2==0){
        console.log(`${NumBer} is even Number`);
     }else if (NumBer%2==1){
        console.log(`${NumBer} is Odd Number`);
     }

     let ternary = NumBer%2==0 ? `${NumBer} is Even Number BY Ternary` : "Odd NUmber"

     console.log(ternary);

    //  *****************************