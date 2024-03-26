var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Answer 2:
var name1 = 'solina';
console.log("Hello ".concat(name1, ", would you like to learn some typescript today?"));
// Answer 3:
var name2 = "soLiNa";
console.log(name2.toUpperCase());
console.log(name2.toLowerCase());
console.log(name2.charAt(0).toUpperCase() + name1.slice(1).toLowerCase());
// Answer 4:
var famous_quote = 'Albert Einstine once said, "A person who never made a mistake never tried anything new".....';
console.log(famous_quote);
// Answer 5:
var famous_person = "Albert Einstine";
var quote = "A person who never made a mistake never tried anything new";
console.log("".concat(famous_person, " said, '").concat(quote, "'...."));
// Answer 6:
var persons_name = "    \t\n  Robert William  \t\n       ";
// Print the name with whitespace
console.log(persons_name);
// Print the name after stripping whitespaces
console.log(persons_name.trim());
// Answer 7:
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Answer 8:
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Answer 9:
var favoriteNum = 35;
console.log("".concat(favoriteNum, " is my favourite number."));
// Answer 10:
// 'Malia Raees' , 5_3_2024
var myName = 'Malia Raees';
console.log("Hiii dear ".concat(myName, ", how are you?"));
// Answer 11:
var names = ['faiza', 'laiba', 'mahnoor', 'areeba'];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Answer 12:
var names1 = ['faiza', 'laiba', 'mahnoor', 'areeba'];
for (var _i = 0, names1_1 = names1; _i < names1_1.length; _i++) {
    var name_1 = names1_1[_i];
    console.log("Hii ".concat(name_1, ", would you like to learn typescript today?"));
}
// Answer 13:
var favouriteTransport = ['honda', 'car', 'suzuki', 'auto', 'cycle'];
favouriteTransport.forEach(function (mode) {
    console.log("I would like own a ".concat(mode, "."));
});
// Answer 14:
var guestLists = ['john', 'mac', 'luci', 'merlin'];
guestLists.forEach(function (guest) {
    var message = 'You are cordially invited to dinner at my home.';
    console.log("Dear ".concat(guest.charAt(0).toUpperCase() + guest.slice(1).toLowerCase(), ", ").concat(message));
});
// Answer 15:
var guestList1 = ['john', 'mac', 'luci', 'merlin'];
console.log('In the guestList: Mr.luci can\'t make it to dinner');
guestList1.splice(2, 1, 'samon');
console.log("I replace 'luci' to 'samon' [".concat(guestList1, "]"));
guestList1.forEach(function (guest) {
    var message = 'you are cordially invited to dinner at my home.';
    console.log("Dear ".concat(guest.charAt(0).toUpperCase() + guest.slice(1).toLowerCase(), ", ").concat(message));
});
console.log('=========OR============');
var unableToAttend = 'luci';
console.log("".concat(unableToAttend, " can't make it to dinner."));
var newguest = 'samon';
guestList1[guestList1.indexOf(unableToAttend)] = newguest;
guestList1.forEach(function (guest) {
    var message = 'You are cordially invited to dinner at my home.';
    console.log("Dear ".concat(guest.charAt(0).toUpperCase() + guest.slice(1).toLowerCase(), ", ").concat(message));
});
// Answer 16:
var guestList2 = ['john', 'mac', 'luci', 'merlin'];
var announcement = 'Great news! I extend my dinner table for more guests.';
console.log(announcement);
guestList2.unshift('elbert');
guestList2.splice(3, 0, 'montie');
guestList2.push('veronica');
console.log(guestList2);
guestList2.forEach(function (guest) {
    var message = 'you are invited to join us on dinner at my palace.';
    console.log("Dear ".concat(guest, ", ").concat(message));
});
// Answer 17:
var guestList3 = ['elbert', 'john', 'mac', 'montie', 'luci', 'merlin', 'veronica'];
var badNews = 'Its really bad to say that I can invite only two guest due to miss-management.';
console.log(badNews);
while (guestList3.length > 2) {
    var removedguest = guestList3.pop();
    if (removedguest) {
        console.log("sorry dear ".concat(removedguest, ", I can't invite you."));
    }
}
guestList3.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited."));
});
guestList3.pop();
guestList3.pop();
console.log("After remove the last two guest list is empty: [".concat(guestList3, "]"));
// Answer 18:
var city = ['Saudi-arabia', 'Phalestine', 'Kashmir', 'Dubai'];
console.log('original oeder:', city);
console.log('alphabetic order:', __spreadArray([], city, true).sort());
console.log('still in original order:', city);
console.log('reverse alphabetic order:', city.sort().reverse());
console.log('still in original order:', city);
console.log('reverse original order:', city.reverse());
console.log('back to its original order:', city.reverse());
console.log('sorted reverse order:', city.sort());
console.log('sorted reverse alphabetic order:', city.sort().reverse());
// Answer 19:
var guestList = ['john', 'mac', 'luci', 'merlin'];
console.log("I'm inviting ".concat(guestList.length, " people to dinner."));
// Answer 20:
var languages = ['urdu', 'english', 'arabic', 'spanish'];
console.log('Many people speaks many languages like:', languages);
// Answer 21:
var studentsData = [
    { name: 'john', roll_No: 10, fatherName: 'elberg', height: 6.5 },
    { name: 'liza', roll_No: 20, fatherName: 'mathore', height: 5 },
    { name: 'zoya', roll_No: 30, fatherName: 'fakhar', height: 5.2 },
    { name: 'robert', roll_No: 40, fatherName: 'rozel', height: 7 }
];
for (var _a = 0, studentsData_1 = studentsData; _a < studentsData_1.length; _a++) {
    var data = studentsData_1[_a];
    console.log("Name: ".concat(data.name, ",roll_No: ").concat(data.roll_No, ", fatherName: ").concat(data.fatherName, ", heighr: ").concat(data.height));
}
;
// Answer 22:
// 0,1,2,3,4,5,6,7,8
var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = counting[9];
if (result == undefined) {
    console.log('IndexError');
}
//  let correct the error by valid index value  
console.log(counting[4]);
//  Answer 23:
var car1 = 'subaru';
console.log(car1 == 'subaru');
console.log(car1 != 'subaru');
var car2 = 'toyota';
console.log(car2 == 'toyota');
console.log(car2 == 'subaru');
var car3 = 'honda';
console.log(car3 == 'honda');
console.log(car3 == 'Honda');
var car4 = 'corolla';
console.log(car4 == 'corolla');
console.log(car4 == 'taxi');
var car5 = 'suzuki';
console.log(car5 == 'suzuki');
console.log(car5 == 'suzuki  ');
//  Answer 24:
console.log('mango' == 'mango');
// console.log('mango' == 'Mango');  //false
console.log('Mango'.toLowerCase() == 'mango');
var a = 5;
var b = 7;
console.log(a == b);
console.log(a != b);
console.log(a < b);
console.log(a > b);
console.log(a >= b);
console.log(a <= b);
console.log(true && false);
console.log(true, false);
var fruits = ['Apple', 'Mango', 'Banana'];
// Is 'Apple' in fruits?
console.log(fruits.includes('Apple'));
console.log(!fruits.includes('Apple'));
// Is 'Apple' not in fruits?
console.log(fruits.includes('apple'));
console.log(!fruits.includes('apple'));
// Answer 25:
var alien_color = 'green';
if (alien_color == 'green') {
    console.log('player earned 5 points.');
}
else {
    console.log("No output");
}
//  Answer 26:
var alien_color1 = 'yellow';
if (alien_color1 == 'green') {
    console.log('player earned 5 points.');
}
else if (alien_color1 == 'yellow') {
    console.log('player earned 10 points.');
}
else {
    console.log("No output");
}
//  Answer 27:
var alien_color2 = 'orange';
if (alien_color2 == 'green') {
    console.log('player earned 5 points.');
}
else if (alien_color2 == 'yellow') {
    console.log('player earned 10 points.');
}
else if (alien_color2 == 'red') {
    console.log('player earned 15 points.');
}
else {
    console.log("No output");
}
// Answer 28:
var age = 55;
if (age < 2) {
    console.log('The person is a baby.');
}
else if (age == 2 || age < 4) {
    console.log('The person is a toddler.');
}
else if (age == 4 || age < 13) {
    console.log('The person is a kid.');
}
else if (age == 13 || age < 20) {
    console.log('The person is a teenager.');
}
else if (age == 20 || age < 65) {
    console.log('The person is a adult.');
}
else if (age == 65 || age > 65) {
    console.log('The person is a elder.');
}
// Answer 29:
var favorite_fruits = ['Apple', 'Mango', 'Banana'];
if (favorite_fruits.includes('Banana')) {
    console.log("I love ".concat(favorite_fruits[2]));
}
if (favorite_fruits.includes('Apple')) {
    console.log("I like ".concat(favorite_fruits[0]));
}
if (favorite_fruits.includes('Mango')) {
    console.log("I eat ".concat(favorite_fruits[1]));
}
if (!favorite_fruits.includes('Orange')) {
    console.log("I'm a fruit lover");
}
// Answer 30:
var userName = ['Eric', 'Meldous', 'Admin', 'Sony'];
for (var _b = 0, userName_1 = userName; _b < userName_1.length; _b++) {
    var users = userName_1[_b];
    if (users == 'Admin') {
        console.log("Hello ".concat(users, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(users, ", thank you for logging in again."));
    }
}
// Answer 31:
var username = [];
if (username.length == 0) {
    console.log('we need to find some users.');
}
for (var _c = 0, username_1 = username; _c < username_1.length; _c++) {
    var users = username_1[_c];
    if (users == 'Admin') {
        console.log("Hello ".concat(users, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(users, ", thank you for logging in again."));
    }
}
// Answer 32:
var current_users = ['Meldon', 'Sheryll', 'Rita', 'Henry'];
var new_users = ['rita', 'George', 'MelDon', 'Veins'];
for (var _d = 0, new_users_1 = new_users; _d < new_users_1.length; _d++) {
    var newUser = new_users_1[_d];
    var usernameTaken = false;
    for (var _e = 0, current_users_1 = current_users; _e < current_users_1.length; _e++) {
        var currentUser = current_users_1[_e];
        if (newUser.toLowerCase() == currentUser.toLowerCase()) {
            usernameTaken = true;
            break;
        }
    }
    if (usernameTaken) {
        console.log("The username '".concat(newUser, "' is taken.Please enter new username."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
}
// Answer 33:
var ordinal_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _f = 0, ordinal_number_1 = ordinal_number; _f < ordinal_number_1.length; _f++) {
    var num = ordinal_number_1[_f];
    if (num == 1) {
        console.log(num + 'st');
    }
    else if (num == 2) {
        console.log(num + 'nd');
    }
    else if (num == 3) {
        console.log(num + 'rd');
    }
    else {
        console.log(num + 'th');
    }
}
// Answer 34:
var pizzas = ['BBq_flavour', 'fajita_flavour', 'spice_flavour'];
for (var _g = 0, pizzas_1 = pizzas; _g < pizzas_1.length; _g++) {
    var pizza = pizzas_1[_g];
    console.log(pizza);
}
console.log('\nstatement about favourite pizza\'s:');
for (var _h = 0, pizzas_2 = pizzas; _h < pizzas_2.length; _h++) {
    var pizza = pizzas_2[_h];
    console.log("I like pizza in ".concat(pizza, "."));
}
console.log("\n I'm a Pizza lover!");
// Answer 35:
var animals = ['cammel', 'goat', 'cow'];
for (var _j = 0, animals_1 = animals; _j < animals_1.length; _j++) {
    var animal = animals_1[_j];
    console.log(animal);
}
console.log('\nstatement of animals:');
for (var _k = 0, animals_2 = animals; _k < animals_2.length; _k++) {
    var animal = animals_2[_k];
    console.log("people bring ".concat(animal, " before 'Eid-ul-Adha'."));
}
console.log('\n kids love these animals!');
// Answer 36:
function make_shirt(size, message) {
    console.log("The shirt has size ".concat(size, " and has the message is: ").concat(message));
}
make_shirt(42, 'coming soon!');
// Answer 37:
function make_shirt1(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript.'; }
    if (size == 'large' || size == 'medium') {
        console.log("The shirt size is:'".concat(size, "' and has the message is: '").concat(message, "'..."));
    }
    else {
        var message_1 = 'I love JavaScript.';
        console.log("The shirt has size is: '".concat(size, "' and has the message is: '").concat(message_1, "'..."));
    }
}
// Make a large shirt with the default message
make_shirt1();
// Make a medium shirt with the default message
make_shirt1('medium');
// Make a small shirt with the default message
make_shirt1('small', 'custom message for a small shirt.');
// Answer 38:
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city('karachi');
describe_city('lahore');
describe_city('bombay', 'india');
// Answer 39:
function city_country(city, country) {
    console.log("".concat(city, ", ").concat(country));
}
city_country('Karachi', 'Pakistan');
city_country('Lahore', 'Pakistan');
city_country('Islamabad', 'Pakistan');
function make_album(artist_name, album_title, track) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (track != undefined) {
        album.track = track;
    }
    return album;
}
var album1 = make_album('Elbert', 'Wedding');
var album2 = make_album('Einistine', 'Reception', 45);
var album3 = make_album('Meldon', 'Birthday', 34);
console.log(album1);
console.log(album2);
console.log(album3);
// Answer 41:
var magicians_name = ['charlie', 'christ', 'admon'];
function show_magician(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magician(magicians_name);
console.log('===OR===');
// let try function wity empty list:
var magicians_name1 = [];
function show_magician1(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
show_magician1(['john', 'vens', 'nike']);
// Answer 42:
var magicians = ['charlie', 'christ', 'admon'];
function make_great(magician) {
    magician.forEach(function (magician) {
        console.log("".concat(magician, ", 'the great!'"));
    });
}
make_great(magicians);
// Answer 43:
var magicians1 = ['charlie', 'christ', 'admon'];
function make_great1(magicians) {
    var greatMagicians = [];
    magicians1.forEach(function (magician) {
        greatMagicians.push("".concat(magician, ", the great!"));
    });
    return greatMagicians;
}
var greatMagicians = make_great1(magicians1.slice());
console.log('original magicians:');
show_magician(magicians1);
console.log('\ngreat magicians:');
show_magician(greatMagicians);
// Answer 44:
function make_sandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwitch with: ".concat(items.join(', '), "."));
}
make_sandwitch('Chiken', 'Mayo');
make_sandwitch('MayoGarlic', 'Lettuces', 'Tomato');
make_sandwitch('Beef', 'Cheese', 'Butter', 'Peanut');
// Answer 45:
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car('Toyota', 'Corolla', ['color', 'red'], ['year', 2020]));
console.log(make_car('Ford', 'Fiesta', ['color', 'grey'], ['sunroof', true]));
