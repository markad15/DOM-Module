

function removeStudent()
{
    var trList = document.querySelectorAll(".tr-stud-info");

    trList.forEach(function(studElement,index,nodelist){
        var removeStudItem = studElement.querySelector(".td-stud-remove");
        removeStudItem.addEventListener("click",function(event){
            studElement.remove();
        // removeStudItem.parentElement.remove();
        })
    },false)

}

function addStudent()
{
    event.preventDefault(); 
    var studName = document.getElementById("stud-name-id").value;
    var studNumber = document.getElementById("stud-number-id").value;
    var studEmail = document.getElementById("stud-email-id").value;

    console.log(studName,studNumber,studEmail);

    var trStud = document.createElement("tr");
    var tdStudName = document.createElement("td");
    var tdStudNumber = document.createElement("td");
    var tdStudEmail = document.createElement("td");
    var tdStudremove = document.createElement("td");
    
    var btnStudremove = document.createElement("BUTTON");
    var btnText = document.createTextNode("Remove Student");
    btnStudremove.appendChild(btnText);
    
    btnStudremove.onclick = removeStudent;

    //tdStudremove.innerHTML = '<input class="btn-delete-remove" type="Submit" value="Remove Student" onclick="removeStudent()" />'

    var tablestud = document.querySelector("table");

    trStud.className = "tr-stud-info";
    tdStudName.className = "td-stud-name";
    tdStudNumber.className = "td-stud-number";
    tdStudEmail.className = "td-stud-email";
    tdStudremove.className = "td-stud-remove";    
   // btnStudremove.className = "btn-delete-remove";



    tdStudremove.append(btnStudremove);
     trStud.append(tdStudName);
     trStud.append(tdStudNumber);
     trStud.append(tdStudEmail);
     trStud.append(tdStudremove);

    tablestud.append(trStud);

     tdStudName.innerText = studName;
     tdStudNumber.innerText = studNumber;
     tdStudEmail.innerText = studEmail;
    // tdStudremove.innerText = btnStudremove;

    document.getElementById("stud-name-id").value = "";
    document.getElementById("stud-number-id").value = "";
    document.getElementById("stud-email-id").value = "";

}
