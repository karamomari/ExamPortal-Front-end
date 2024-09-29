const element =<HTMLButtonElement>document.getElementById("myBtn");
element.addEventListener("click", function() {

  document.getElementById("question")?.classList.add("displayblock")
  document.getElementById("qs4")?.classList.add("displaynone")
  document.getElementById("qs2")?.classList.add("displaynone")
  document.getElementById("qs3")?.classList.add("displaynone")


});