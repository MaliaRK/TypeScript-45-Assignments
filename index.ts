// Answer 2:
let name1 : string = 'solina';
console.log(`Hello ${name1}, would you like to learn some typescript today?`);


// Answer 3:
let name2 : string = "soLiNa";
console.log(name2.toUpperCase());
console.log(name2.toLowerCase());
console.log(name2.charAt(0).toUpperCase() + name1.slice(1).toLowerCase());


// Answer 4:
let famous_quote : string = 'Albert Einstine once said, "A person who never made a mistake never tried anything new".....';
console.log(famous_quote);


// Answer 5:
let famous_person : string = "Albert Einstine";
let quote : string = "A person who never made a mistake never tried anything new";
console.log(`${famous_person} said, '${quote}'....`);


// Answer 6:
let persons_name : string = "    \t\n  Robert William  \t\n       ";

// Print the name with whitespace
console.log(persons_name);

// Print the name after stripping whitespaces
console.log(persons_name.trim());


// Answer 7:
console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);


// Answer 8:
console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);


// Answer 9:
let favoriteNum : number = 35;
console.log(`${favoriteNum} is my favourite number.`)


// Answer 10:
// 'Malia Raees' , 5_3_2024
let myName : string = 'Malia Raees';
console.log(`Hiii dear ${myName}, how are you?`)


// Answer 11:
let names : string[] = ['faiza','laiba','mahnoor','areeba'];
for (let i = 0; i < names.length; i++){
    console.log(names[i])
}


// Answer 12:
let names1 : string[] = ['faiza','laiba','mahnoor','areeba'];
for (let name of names1){
    console.log(`Hii ${name}, would you like to learn typescript today?`);
}


// Answer 13:
let favouriteTransport : string[] = ['honda','car','suzuki','auto','cycle'];
favouriteTransport.forEach((mode : string)=>{
    console.log(`I would like own a ${mode}.`)
});


// Answer 14:
let guestLists : string[] = ['john','mac','luci','merlin'];
guestLists.forEach((guest : string)=>{
    let message  = 'You are cordially invited to dinner at my home.'
    console.log(`Dear ${guest.charAt(0).toUpperCase() + guest.slice(1).toLowerCase()}, ${message}`)
});


// Answer 15:
let guestList1 : string[] = ['john','mac','luci','merlin'];

console.log('In the guestList: Mr.luci can\'t make it to dinner');

guestList1.splice(2,1, 'samon');
console.log(`I replace 'luci' to 'samon' [${guestList1}]`);

guestList1.forEach(guest =>{
    let message = 'you are cordially invited to dinner at my home.';
    console.log(`Dear ${guest.charAt(0).toUpperCase() + guest.slice(1).toLowerCase()}, ${message}`)
})

console.log('=========OR============');  

let unableToAttend : string = 'luci';
console.log(`${unableToAttend} can\'t make it to dinner.`);

let newguest :string = 'samon'; 
guestList1[guestList1.indexOf(unableToAttend)] = newguest;

guestList1.forEach(guest =>{
    let message = 'You are cordially invited to dinner at my home.';
    console.log(`Dear ${guest.charAt(0).toUpperCase() + guest.slice(1).toLowerCase()}, ${message}`);
});


// Answer 16:
let guestList2 : string[] = ['john','mac','luci','merlin'];
let announcement : string = 'Great news! I extend my dinner table for more guests.';
console.log(announcement);


guestList2.unshift('elbert');
guestList2.splice(3,0,'montie');
guestList2.push('veronica');
console.log(guestList2);

guestList2.forEach(guest => {
    let message = 'you are invited to join us on dinner at my palace.';
    console.log(`Dear ${guest}, ${message}`)
})


// Answer 17:
let guestList3 : string[] = ['elbert','john','mac','montie','luci','merlin','veronica'];
let badNews : string = 'Its really bad to say that I can invite only two guest due to miss-management.'
console.log(badNews)

while (guestList3.length > 2){
    let removedguest = guestList3.pop();
    if (removedguest){
        console.log(`sorry dear ${removedguest}, I can't invite you.`)
    }
}

guestList3.forEach(guest =>{
    console.log(`Dear ${guest}, you are still invited.`);
})

guestList3.pop()
guestList3.pop()
console.log(`After remove the last two guest list is empty: [${guestList3}]`);


// Answer 18:
let city : string[] = ['Saudi-arabia','Phalestine','Kashmir','Dubai'];

console.log('original oeder:', city);
console.log('alphabetic order:', [...city].sort());
console.log('still in original order:', city);
console.log('reverse alphabetic order:', city.sort().reverse());
console.log('still in original order:', city);
console.log('reverse original order:', city.reverse());
console.log('back to its original order:', city.reverse());
console.log('sorted reverse order:', city.sort());
console.log('sorted reverse alphabetic order:', city.sort().reverse());


// Answer 19:
let guestList : string[] = ['john','mac','luci','merlin'];
console.log(`I'm inviting ${guestList.length} people to dinner.`);


// Answer 20:
let languages : string[] = ['urdu','english','arabic','spanish'];
console.log('Many people speaks many languages like:', languages);


// Answer 21:
const studentsData : {name : string, roll_No: number, fatherName:string, height:number}[] = [
      {name : 'john', roll_No : 10, fatherName : 'elberg', height : 6.5},
      {name : 'liza', roll_No : 20, fatherName : 'mathore', height : 5},
      {name : 'zoya', roll_No : 30, fatherName : 'fakhar', height : 5.2},
      {name : 'robert', roll_No : 40, fatherName : 'rozel', height : 7}]
for (let data of studentsData){
console.log(`Name: ${data.name},roll_No: ${data.roll_No}, fatherName: ${data.fatherName}, heighr: ${data.height}`)
};


// Answer 22:
                        // 0,1,2,3,4,5,6,7,8
let counting : number[] = [1,2,3,4,5,6,7,8,9];
let result = counting[9];

  if (result ==  undefined){
      console.log('IndexError');
 }

//  let correct the error by valid index value  
 console.log(counting[4]);


//  Answer 23:
let car1 = 'subaru';
console.log(car1 == 'subaru');
console.log(car1 != 'subaru');

let car2 = 'toyota';
console.log(car2 == 'toyota');
console.log(car2 == 'subaru');

let car3 = 'honda';
console.log(car3 == 'honda');
console.log(car3 == 'Honda');

let car4 = 'corolla';
console.log(car4 == 'corolla');
console.log(car4 == 'taxi');

let car5 = 'suzuki';
console.log(car5 == 'suzuki');
console.log(car5 == 'suzuki  ');


//  Answer 24:
console.log('mango' == 'mango');
// console.log('mango' == 'Mango');  //false
console.log('Mango'.toLowerCase() == 'mango');


let a : number = 5;
let b : number = 7;

console.log(a == b);
console.log(a != b);
console.log(a < b);
console.log(a > b);
console.log(a >= b);
console.log(a <= b);
console.log(true && false);
console.log(true , false);

let fruits: string[] = ['Apple', 'Mango','Banana'];

// Is 'Apple' in fruits?
console.log(fruits.includes('Apple'));
console.log(!fruits.includes('Apple'));

// Is 'Apple' not in fruits?
console.log(fruits.includes('apple'));
console.log(!fruits.includes('apple'));


// Answer 25:
let alien_color : string = 'green';

if (alien_color == 'green'){
    console.log('player earned 5 points.');
} else {
    console.log("No output");
}


//  Answer 26:
let alien_color1 : string = 'yellow';

if (alien_color1 == 'green'){
     console.log('player earned 5 points.');

} else if (alien_color1 == 'yellow') {
    console.log('player earned 10 points.');

} else {
    console.log("No output");
}


//  Answer 27:
let alien_color2 : string = 'orange';

if (alien_color2 == 'green'){
     console.log('player earned 5 points.');

} else if (alien_color2 == 'yellow') {
    console.log('player earned 10 points.');

} else if (alien_color2 == 'red'){
    console.log('player earned 15 points.');

} else {
    console.log("No output");
}


// Answer 28:
let age : number = 55;

if (age < 2){
   console.log('The person is a baby.');

} else if (age == 2 || age < 4){
   console.log('The person is a toddler.');

} else if (age == 4 || age < 13){
   console.log('The person is a kid.');

} else if (age == 13 || age < 20){
   console.log('The person is a teenager.');

} else if (age == 20 || age < 65){
   console.log('The person is a adult.');

} else if (age == 65 || age > 65){
   console.log('The person is a elder.');

} 


// Answer 29:
let favorite_fruits : string[] = ['Apple','Mango','Banana'];

if (favorite_fruits.includes('Banana')){
   console.log(`I love ${favorite_fruits[2]}`);

} if (favorite_fruits.includes('Apple')){
   console.log(`I like ${favorite_fruits[0]}`);

} if (favorite_fruits.includes('Mango')){
   console.log(`I eat ${favorite_fruits[1]}`);

} if (!favorite_fruits.includes('Orange')){
   console.log("I'm a fruit lover");
}


// Answer 30:
let userName : string[] = ['Eric','Meldous','Admin','Sony'];
for (let users of userName){
    if (users == 'Admin'){
        console.log(`Hello ${users}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${users}, thank you for logging in again.`);
    }
}


// Answer 31:
let username : string[] = [];

if (username.length == 0){
    console.log('we need to find some users.');
}
for(let users of username){
    if (users == 'Admin'){
        console.log(`Hello ${users}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${users}, thank you for logging in again.`);
    }
}    


// Answer 32:
let current_users : string[] = ['Meldon','Sheryll','Rita','Henry'];
let new_users : string[] = ['rita','George','MelDon','Veins'];

for (let newUser of new_users){
    let usernameTaken = false;

    for (let currentUser of current_users){
        if (newUser.toLowerCase() == currentUser.toLowerCase()){
            usernameTaken = true;
            break;
        }
    }
    if (usernameTaken){
        console.log(`The username '${newUser}' is taken.Please enter new username.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}


// Answer 33:
let ordinal_number : number[] = [1,2,3,4,5,6,7,8,9];

for (let num of ordinal_number){
    if (num == 1){
        console.log(num + 'st');

    } else if (num == 2){
        console.log(num + 'nd');

    } else if (num == 3){
        console.log(num + 'rd');

    } else {
        console.log(num + 'th');
    }
}


// Answer 34:
let pizzas :string[] = ['BBq_flavour','fajita_flavour','spice_flavour'];

for (let pizza of pizzas){
    console.log(pizza);
}

console.log('\nstatement about favourite pizza\'s:');
for (let pizza of pizzas){
    console.log(`I like pizza in ${pizza}.`);
}

console.log("\n I'm a Pizza lover!");


// Answer 35:
let animals : string[] = ['cammel','goat','cow'];
for (let animal of animals){
    console.log(animal);
}

console.log('\nstatement of animals:');
for (let animal of animals){
    console.log(`people bring ${animal} before 'Eid-ul-Adha'.`);
}

console.log('\n kids love these animals!');


// Answer 36:
function make_shirt(size : number, message : string): void{
    console.log(`The shirt has size ${size} and has the message is: ${message}`);
}

make_shirt(42,'coming soon!');


// Answer 37:
function make_shirt1(size : string = 'large' , message : string = 'I love TypeScript.') : void {
    if (size == 'large' || size == 'medium'){
        console.log(`The shirt size is:'${size}' and has the message is: '${message}'...`);

    } else {
        let message : string = 'I love JavaScript.'
        console.log(`The shirt has size is: '${size}' and has the message is: '${message}'...`);

    }
}
// Make a large shirt with the default message
make_shirt1();

// Make a medium shirt with the default message
make_shirt1('medium');

// Make a small shirt with the default message
make_shirt1('small', 'custom message for a small shirt.');


// Answer 38:
function describe_city(city : string, country : string = 'Pakistan'): void{
    console.log(`${city} is in ${country}.`);
}

describe_city('karachi');
describe_city('lahore');
describe_city('bombay','india');


// Answer 39:
function city_country(city : string, country : string): void {
    console.log(`${city}, ${country}`);
}

city_country('Karachi','Pakistan');
city_country('Lahore','Pakistan');
city_country('Islamabad','Pakistan');


// Answer 40:
interface Album{
    artist : string;
    title : string;
    track? : number
}

function make_album(artist_name : string, album_title : string, track? : number){
    const album : Album = {
        artist : artist_name,
        title : album_title,
    }
    if (track != undefined){
        album.track = track
    }
    return album;
}

const album1 = make_album('Elbert','Wedding');
const album2 = make_album('Einistine','Reception',45);
const album3 = make_album('Meldon','Birthday',34);

console.log(album1);
console.log(album2);
console.log(album3);


// Answer 41:
let magicians_name : string[] = ['charlie','christ','admon'];

function show_magician(magicians : string[]){
    magicians.forEach(magician =>{
        console.log(magician);
    });
}

show_magician(magicians_name);

console.log('===OR===');

// let try function wity empty list:
let  magicians_name1 : string[] = [];

function show_magician1(magicians : string[]){
    magicians.forEach((magicians) =>{
        console.log(magicians);
    });
}

show_magician1(['john','vens','nike']);


// Answer 42:
let magicians : string[] = ['charlie','christ','admon'];

function make_great(magician : string[]){
    magician.forEach((magician) =>{
        console.log(`${magician}, 'the great!'`);
    });
}
make_great(magicians);


// Answer 43:
let magicians1 : string[] = ['charlie','christ','admon'];

function make_great1(magicians : string[]): string[] {
    let greatMagicians = [];
    magicians1.forEach(magician => {
       greatMagicians.push(`${magician}, the great!`);
    });
       return greatMagicians;
}

let greatMagicians = make_great1(magicians1.slice());
console.log('original magicians:');
show_magician(magicians1);
console.log('\ngreat magicians:');
show_magician(greatMagicians);


// Answer 44:
function make_sandwitch(...items: string[]){
    console.log(`Making a sandwitch with: ${items.join(', ')}.`);
    
}

make_sandwitch('Chiken', 'Mayo');
make_sandwitch('MayoGarlic','Lettuces','Tomato');
make_sandwitch('Beef','Cheese','Butter','Peanut');


// Answer 45:
function make_car(manufacturer: string, model: string, ...options: [string,any][]): object{
    let car = {manufacturer, model};
    options.forEach(([key, value])=> car[key] = value);
    return car;
}

console.log(make_car('Toyota','Corolla',['color','red'],['year', 2020]));
console.log(make_car('Ford','Fiesta',['color','grey'],['sunroof',true]));
