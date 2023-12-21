```javascript

 

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

Arr1.push('SAMIksha')

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



        


// ***calculate the Area of trangle***************


function areOfTrangle(base,height){

    return (base * height ) / 2
}

console.log(`area of trangle is :- ${areOfTrangle(5,10)} `);



        ```
          