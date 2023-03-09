// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(String) {
    cats.push(String);
}
function destructivelyPrependCat(String) {
    cats.unshift(String);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(String){
    const newCats = [...cats];
    newCats.push(String);
    return newCats;
}
function prependCat(String){
    const newCats = [...cats];
    newCats.unshift(String);
    return newCats;
}
function removeLastCat(){
    const newCats = cats.slice(0,-1);
    return newCats;
}
function removeFirstCat(){
    const newCats = cats.slice(1);
    return newCats;
}