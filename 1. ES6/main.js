// concept 1: Logical &&(AND) and ||(OR)------------------------------

let a  = false;
let b = true;

console.log(a && b)
// && return true if both and and b are true else false
// imp concept: if first('a') val is true then only && checks second('b') val , if first val is false it will never check second val and directly returns false



console.log(a || b);
// || return true if either of a or b is true .
// it alwyas check both values a and b

//Concept 2: Template literals----------------------------------------

let name1 = "Josh";
let name2 = "Rock";

console.log(name1 +" "+ name2)
// instead of above method we can do is-
console.log(`${name1} and ${name2} are swimming`);




// Concept 3: Ternary Operator-----------------------------------------

const showRecipeOne = true;
function getRecipeOne(recipeName){
    return recipeName;
}
function getRecipeTwo(recipeName){
    return recipeName;
}

// use of ternary 
// condition ? statement1 : statement2
// if condition is satisfied then executes statement 1 else executes statement 2

showRecipeOne 
    ? console.log(getRecipeOne("Pizza"))
    : console.log(getRecipeTwo("Burger"));


// Concept 4: Object and array destructuring----------------------------------------
const id = 1;
const productName = "Product Apple Watch";
const rating = 5;

// const product = {
//     id:id,
//     productName:productName,
//     rating:rating,
// };

// when both keys and values var name like in above are matching then instead of rewriting it u can simply pass the variable then it will automatically use variable name as key

const product = {
    id,
    productName,
    rating,
};
console.log(products);

//destructuring objects******
const product2 = {
    description: "Product 2 description",
    id,
    productName,
}

// m1:
const getProductDescription = product2.description;

// m2 :Imp
//  destructure all properties of product 2 then use them
//  inside {} ctrl + space gives all options of properties for the object (product2)
const {description} = product2;
console.log(description);




// desctructuring arrays******
const array = [1,2,3];

// m1: 
let getArrayFirstElement = array[0];
let getArraySecondElement = array[1];
console.log(getArrayFirstElement, getArraySecondElement)

// m2: Imp 
const [arrayFirstElement, arraySecondElement] = array;
console.log(arrayFirstElement, arraySecondElement);


const [
    arrayFirstElement1, 
    arraySecondElement2, 
    arrayThirdElement, 
    arrayFourthElement
] = array;

console.log(
    arrayFirstElement1, 
    arraySecondElement2, 
    arrayThirdElement, 
    arrayFourthElement
);
// output :   1 2 3 undefined
// Imp: when you try destructure fourth element of array that has only three element then fourth element is made undefined bcoz 4th element doesn't exist array has only three elements




// Concept 5:default parameters , spread, and rest operators-------------------------------------

//****************************** */
// default parameters
function nultiplyTwoNumbers(num1 = 1, num2 = 2){
    console.log(num1, num2);
    return num1*num2;
}
console.log(nultiplyTwoNumbers(10));

//************************************
// spread: to spread values from a array/object?
// to wrap the spread values in form of array just spread inside []  ex: [...array1]

const array1 = [1,2,3]
console.log(...array1)

// spread into array , can be used to merge arrays
const array2 = [4,5,6]
const array3 = [7,8,9]
console.log([...array1])

console.log([100,...array2,99,...array3,10001]);



//*************************

//rest
// when you want to recieve many more arguments ex like you are recieving 100 arguments then we  spread the arguments  so that we can add as many arg as we want and they are in form of array when accessed inside fucntion
// remember the rest parament must be always at last of parameter list 
function getInfo(a,b, ...c){
    console.log(a,b,c)

}
// output when run
getInfo(1,2,3,4,5);
// output:   1 2 [3,4,5]



// Concept 6: mpa, filter, find, some, every, includes, indexOf , findIndex

// 1. Map

const personsArray = [
    {
        name:'Person 1',
        age:30,
        country:'USA'
    },
    {
        name:'Person 2',
        age:50,
        country:'USA',
    },
    {
        name:'Person 3',
        age:40,
        country:'India'
    }
]


// I want a array that contains only the name of each and every person
//  we use map we map on  each and every object of the personsArray and from each object wethe name and then we will return it

let getAllNames = personsArray.map((person, index)=>{
    // return person.name;
    return `${person.name} age is ${person.age}`;
})

console.log(getAllNames)
// output: ['person 1', 'person 2' , 'person 3']


// 2. find: checks condition is satisfied and when it gets condition satisfied  then returns that object 

let personFromUSA = personsArray.find((singlePerson, index)=>{
    return singlePerson.country === 'USA'
})
console.log(personFromUSA);
// output:{ name: Person 1, age: 30, country: 'USA'}


// 3. filter: check all objects that satiisifies the condition , returns list of objects that satisfied the condition ex: people from USA


let peopleFromUSA = personsArray.filter((singlePerson, index)=>{
    return singlePerson.country === 'USA'
})
console.log(peopleFromUSA);
// output:[
//        { name: Person 1, age: 30, country: 'USA'},
//        { name: Person 2, age: 50, country: 'USA'}
//      ]       


// 3. some returns true if even if just one member of arrays satisfied condition 
let checkSomeArrayMethodWithExample = personsArray.some((singlePerson) => {
    return singlePerson.age > 40;
  });
  
  console.log(checkSomeArrayMethodWithExample);
  

//4 every: returs true only if all members of array satisfy the  conditi on
let checkEveryArrayMethodWithExample = personsArray.every((singlePerson) => {
    return singlePerson.age > 25;
  });
  
  console.log(checkEveryArrayMethodWithExample);
  


// 5 includes: checks if an element  is present in array or not and returns true/false 
const fruitsArray1 = ["apple", "banana", "orange"];

console.log(fruitsArray1.includes("orange"));


// 6 indexOf returns index of element if present else returns -1
const fruitsArray = ["apple", "banana", "orange"];

console.log(fruitsArray.indexOf("apple"));



// 7 findIndex find index of element that satisfies the mentioned conditions
    // if not found then returns -1
let IndexOfPErsonFromINDIA=  personsArray.findIndex((singlePerson) =>{
    return singlePerson.country === "India";
} )





