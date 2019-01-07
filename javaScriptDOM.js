
function addStudent()
{
    event.preventDefault(); 
    var studName = document.getElementById("stud-name-id").value;
    var studNumber = document.getElementById("stud-number-id").value;
    var studEmail = document.getElementById("stud-email-id").value;
    // var studRemove = "Remove";

    console.log(studName,studNumber,studEmail);

    var trStud = document.createElement("tr");
    var tdStudName = document.createElement("td");
    var tdStudNumber = document.createElement("td");
    var tdStudEmail = document.createElement("td");
    var tdStudremove = document.createElement("td");

    var tablestud = document.querySelector("table");

    trStud.className = "tr-stud-info";
    tdStudName.className = "td-stud-name";
    tdStudNumber.className = "td-stud-number";
    tdStudEmail.className = "td-stud-email";
    tdStudremove.className = "td-stud-remove";    
    

    //  var insertStudDetails = 
    // "<tr class='tr-stud-info'><td class='td-stud-name'>" +studName+ "</td>"
    // "<td class='td-stud-number'>" +studNumber+ "</td>"
    // "<td class='td-stud-email'>" +studEmail+ "</td>"
    // "<td class='td-stud-remove'>" + studRemove + "</td> </tr>"

     trStud.append(tdStudName);
     trStud.append(tdStudNumber);
     trStud.append(tdStudEmail);
     trStud.append(tdStudremove);

    tablestud.append(trStud);

     tdStudName.innerText = studName;
     tdStudNumber.innerText = studNumber;
     tdStudEmail.innerText = studEmail;
     tdStudremove.innerText = "Remove"

};