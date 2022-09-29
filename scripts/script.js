const expandButton = document.getElementById("button");

expandButton.addEventListener('click', expand)

function expand () {
  document.body.classList.toggle('expand')
  console.log("test")
}

