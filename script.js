let x=document.querySelector('h1')
let h1=document.createElement("h1")
function Welcome() {


h1.innerText="Welcome"
// console.log(h1);


x.before(h1)
}
Welcome()