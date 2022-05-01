
 const input = document.getElementById('input') 
document.getElementById('input').addEventListener('input', function(){

    const btc = document.getElementById('btc').innerHTML = input.value * 480;
    // const eth = document.getElementById('eth').innerHTML = input.value/ 250;
    // const ltc = document.getElementById('ltc').innerHTML= input.value *5
})



const allEqual = arr => arr.every(val => val === arr[0])

const equal1 = allEqual([1,2,3,4,5,6])
const equal2 = allEqual([1,1,1,1])
console.log(equal1)

console.log(equal2)


var age = 5 

while(age < 10){
    console.log('This statement is very true')
    age ++
}

for(age = 5; age < 10; age ++ ){
    console.log('Age is always greater than 5 but less than 10')
}

var links = document.getElementsByTagName("a")

for (i = 0; i < links.length;i++){
    console.log("This is link number "+ i)
}

function getAverage(a,b){
    var average = (a+b)/2
    return average
}


var average = getAverage(5,14)

console.log("The Average is: " , average)


var a = '5'
var b = 5
console.log(a*b)


console.log(typeof(a+b))

console.log(Math.round(78.9999999))
console.log(Math.ceil(55.4))
console.log(Math.PI)


var myString = "\n I\'m a big boy ninja"
console.log(myString)
console.log(myString.length)
console.log(myString.toUpperCase())
console.log(myString.toLowerCase())
console.log(myString.indexOf('big'))

if (myString.indexOf('ninja') ===-1){
    console.log('the word ninja is not in the string')
}else{
    console.log('the word ninja starts at position ' + myString.indexOf('ninja'))
};

var string1 = 'abc';
var string2 = 'abc';

console.log(string1 === string2)

// Arrays, i love arrays 


var myArray = [25, 35, 'Hello', true]
console.log(myArray)

console.log(myArray.length)
console.log(myArray.push('Chima'))

const items = [
    {name:'bike', price:100},
    {name:'tv', price:200},
    {name:'album', price:10},
    {name:'book', price:5},
    {name:'phone', price:500},
    {name:'computer', price:1000},
    {name:'keyboard', price:25}
]


const filteredItems = items.filter((item) => {
    return item.price<=100
})


console.log(filteredItems)

const filterednames = items.filter((item) => {
    return item.name === 'phone'
})


console.log(filterednames)



const itemNames = items.map((item) => {
    return item.name
})

console.log(itemNames)


const findItem = items.find((item)=> {
    return item.name === 'book'
})

console.log(findItem)



items.forEach((item) =>{
    console.log(item.name)
    console.log(item.price)
} )

const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})

console.log(hasInexpensiveItems)




const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

const items2 = [1,2,3,4,5]

const includesTwo  = items2.includes(2)

console.log(includesTwo)


function greet(){
    console.log('Greet');
}
greet()


const speak = function(name, time){
    console.log(`Good ${time} ${name}`)
}


speak('chima', 'morning');
speak('chidinma', 'afternoon');
speak('uche', 'evening');


// const calcArea = function(radius){
//     return 3.14 * radius **2;
// }

// const area = calcArea(5);

// console.log('Area is:', area)


const calcArea = (radius) => {
    return 3.14 * radius **2
}

const area = calcArea(10)

console.log('Area is:', area)


const greet2 = () => 'hello world';

console.log(greet2())

const capitalize = ([first, ...rest]) => 
   first.toUpperCase() + rest.join('');


const cap = capitalize('fooBar');
const cap2 = capitalize('fooBar', true);

console.log(cap)

console.log(cap2)



// Destructuring in JS
const item = {
    model : "JK-9000",
    displayName : "Jake 9000"
}

const {model, displayName } = item

console.log(model)

console.log(displayName)

// working with Date object 

const date = new Date(
    '2021-03-25 18:15:07'
)
const date2 = date.toLocaleString('en-US')
const date3 = date.toLocaleString('en-GB')


console.log(date2)
console.log(date3)


const messageEl = document.getElementById('remove')

document.addEventListener('click', () =>{
    console.log('Handling Click!')
    messageEl.remove()
}, {once: true})




//Email verification JS

let emailId = document.getElementById("email-id")
let errorMsg = document.getElementById("errorMsg")
let icon  = document.getElementById("icon")


let mailRegex;