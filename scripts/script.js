const expandButton1 = document.getElementById("tijn");
const expandButton2 = document.getElementById("sarah");
const expandButton3 = document.getElementById("manon");
const expandButton4 = document.getElementById("ahmed");
const expandButton5 = document.getElementById("olivia");
const expandButton6 = document.getElementById("karel");
const expandButton7 = document.getElementById("wafa");
const expandButton8 = document.getElementById("witcher");

console.log(expandButton3);

expandButton1.addEventListener('click', expand1);
expandButton2.addEventListener('click', expand2);
expandButton3.addEventListener('click', expand3);
expandButton4.addEventListener('click', expand4);
expandButton5.addEventListener('click', expand5);
expandButton6.addEventListener('click', expand6);
expandButton7.addEventListener('click', expand7);
expandButton8.addEventListener('click', expand8);

function expand1 () {
  document.body.classList.toggle('expand1')
  console.log("test1")
}

function expand2 () {
  document.body.classList.toggle('expand2')
  console.log("test2")
}

function expand3 () {
  document.body.classList.toggle('expand3')
  console.log("test3")
}

function expand4 () {
  document.body.classList.toggle('expand4')
  console.log("test4")
}

function expand5 () {
  document.body.classList.toggle('expand')
  console.log("test5")
}

function expand6 () {
  document.body.classList.toggle('expand')
  console.log("test6")
}

function expand7 () {
  document.body.classList.toggle('expand')
  console.log("test7")
}

function expand8 () {
  document.body.classList.toggle('expand')
  console.log("test8")
}