"use strict"

var jobs = ["Data Analyst","Data Scientist","Data Engineer","Business Intelligence Analyst","Software Developer"];

var skills = [
  "Programming skills,Data visualization",
  "Programming skills,Data visualization,Data wrangling, Data intuition,Business acumen, Machine & Deep learning, Software engineering,Database skills",
  "Programming skills,Data Wrangling,Software Engineering, Database skills , Expertise in data analysis",
  "Programming skills, Data visualization, Database skills,Data mining, Business acumen",
  "Programming skills, Strong mathematical foundation,Database skills"
];

var salary = ["$60000","$80000","$77000","$75000","$60000"];


var mytable = ""
mytable += "<div class='table-responsive'>"
mytable += "<table class='table table-hover table-info'>"
mytable += "<thead>"
mytable += "<tr>"
mytable += "<th scope='col'>Jobs</th><th scope='col'>Skills required</th><th scope='col'>Estimated Annual Salary</th>"
mytable += "</tr>"
mytable += "</thead>"
mytable += "<tbody>"

for (var i = 0; i < 5; i++) {
  mytable += "<tr>"
  mytable += "<td>" + jobs[i] + "</td>"
  mytable += "<td>" + skills[i] + "</td>"
  mytable += "<td>" + salary[i] + "</td>"
  mytable += "</tr>"
}

mytable += "</tbody>"
mytable += "</table>"
mytable += "</div>"

document.getElementById("manyjobs").innerHTML = mytable;


function asksalary(){
  var show = "";
  var income = document.getElementById("cash").value;
  if(income>120000){
    show += "Not in this field of career.";
  }
  else if (income>=80000){
    show += jobs[1];
  }
  else if(income>=70000){
    show += jobs[1] + " , " + jobs[2] + " , " + jobs[3];
  }
  else if(income<70000){
    show += jobs[0] + " , " + jobs[1] + " , " + jobs[2] + " , " + jobs[3] + " , " + jobs[4];
  }
  else show += "Please enter a valid amount."

  document.getElementById("money").innerHTML = show;
}

