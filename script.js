// declaring a variable for course 1
const gs = "General Studies & University Studies ";

//Placing the value of the variablein the HTMl file
document.querySelector("#name ").textContent = gs;

// making the the course text bold
document.getElementById("name").style.fontWeight = "900"
var a = document.createElement('a');
var linkText = document.createTextNode("Click to read more about General Science");
a.appendChild(linkText);
a.title = "Click to read more about GGeneral Studies & University Studies";
a.href = "https://www2.byui.edu/catalog-archive/2005-2006/viewDepartment18.htm";
document.body.appendChild(a);

// declaring a variable for course 1
const bu = "Business";

//Placing the value of the variablein the HTMl file
document.querySelector("#name2").textContent = bu;

// making the the course text bold
document.getElementById("name2").style.fontWeight = "900";

// declaring a variable for course 1
const ch = "Chemistry";

//Placing the value of the variablein the HTMl file
document.querySelector("#name3").textContent = ch;

// making the the course text bold
document.getElementById("name3").style.fontWeight = "900";

// declaring a variable for course 1
const en = "Engineering";

//Placing the value of the variablein the HTMl file
document.querySelector("#name4").textContent = en;

// making the the course text bold
document.getElementById("name4").style.fontWeight = "900";
document.getElementById("name4").style.fontWeight = "900";