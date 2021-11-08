var enterButton = document.getElementById("enter")
var input = document.getElementById("userinput")
var ul = document.querySelector("ul")
var items = document.getElementsByTagName("li")
function createListElement()
{
  var li=document.createElement("li")
  li.appendChild(document.createTextNode(input.value))
  ul.appendChild(li)
  input.value=""

  function crossout(){
    li.classList.toggle("done")
  }
  li.addEventListener("click", crossout)

  function deleteListItem()
  {
    li.classList.add("delete")
  }
  var dbtn = document.createElement("button")
  dbtn.appendChild(document.createTextNode("x"))
  li.appendChild(dbtn)
  dbtn.addEventListener("click", deleteListItem)
}
function addlistafterclick()
{
  if(input.value.length > 0){
    createListElement()
  }
}
function addlistafterkeypress(){
  if(input.value.length>0 && event.which ===13){
    createListElement()
  }
}
enterButton.addEventListener("click", addlistafterclick)
input.addEventListener("keypress", addlistafterkeypress)
