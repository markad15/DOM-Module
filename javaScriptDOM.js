document.addEventListener("DOMContentLoaded",function(){

function addStudent()
{
    var studName = document.getElementById("stud-name-id").Value;
    var studNumber = document.getElementById("stud-number-id").Value;
    var studEmail = document.getElementById("stud-email-id").Value;
    var studRemove = "Remove";

    var trStud = document.createElement("tr");
    var tdStudName = document.createElement("td");
    var tdStudNumber = document.createElement("td");
    var tdStudEmail = document.createElement("td");
    var tdStudremove = document.createElement("td");

    trStud.className = "tr-stud-info";
    tdStudName.className = "td-stud-name";
    tdStudNumber.className = "td-stud-number";
    tdStudEmail.className = "td-stud-email";
    tdStudremove.className = "td-stud-remove";
    
    var insertStudDetails = 
    "<td class='td-stud-name'>" +studName+ "</td>"
    "<td class='td-stud-number'>" +studNumber+ "</td>"
    "<td class='td-stud-email'>" +studEmail+ "</td>"
    "<td class='td-stud-remove'>" + studRemove + "</td>"

    trStud.append(insertStudDetails);
}



})
