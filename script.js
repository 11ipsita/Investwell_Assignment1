var selectedRow = null

function onFormSubmit(){
    if (validate()) {
        var formData = readFormData();

        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
            
            var firstName  = document.getElementById("firstName").value;
            var lastName = document.getElementById("lastName").value;
            var email  = document.getElementById("email").value;
            var salary  = document.getElementById("salary").value;
            var city  = document.getElementById("city").value;
            
            resetForm();
        }

    //Array for all entries
    var entryData = {
        "firstName": firstName,
        "lastName": lastName,
        "email":email,
        "salary":salary,
        "city":city
    };  


    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));  
    // VARIABLE for storing existing data by get 
  
    if(existingEntries == null) 
    existingEntries = [];


    localStorage.setItem("entryData", JSON.stringify(entryData));   //array store through json

    // Push the existing entries
    existingEntries.push(entryData);   
    localStorage.setItem("allEntries", JSON.stringify(existingEntries)); 


    /*window.localStorage.setItem('firstName', formData["firstName"])
    window.localStorage.setItem('lastName', formData["lastName"])
    window.localStorage.setItem('email', formData["email"])
    window.localStorage.setItem('salary', formData["salary"])
    window.localStorage.setItem('city', formData["city"])*/
    
}

//var formData  = localStorage.getItem("data"); daala to hain formdata

function readFormData(){
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["email"] = document.getElementById("email").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData; 
}

/*function save() {
   const listUpdate = formData.map((element) => JSON.stringify(element));
    localStorage.setItem("data", JSON.stringify(listUpdate));
    location.reload();
  }*/
  

function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

     cell1 = newRow.insertCell(0);
     cell1.innerHTML = data.firstName;
    
     cell2 = newRow.insertCell(1);
     cell2.innerHTML = data.lastName;
    
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.salary;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.city;
        
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> 
                           <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm(){
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[3].innerHTML;
    document.getElementById("city").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.salary;
    selectedRow.cells[4].innerHTML = formData.city;

}



function onDelete(td){
    if(confirm('Are you sure to delete this record ?')){
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    //window.localStorage.removeItem("employeeList")
    }
}



function validate() {
    isValid = true;
    if (document.getElementById("firstName").value == "") {
        isValid = false;
        document.getElementById("firstNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("firstNameValidationError").classList.contains("hide"))
            document.getElementById("firstNameValidationError").classList.add("hide");
    }

    isValid = true;
    if (document.getElementById("lastName").value == "") {
        isValid = false;
        document.getElementById("lastNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("lastNameValidationError").classList.contains("hide"))
            document.getElementById("lastNameValidationError").classList.add("hide");
    }

    isValid = true;
    if (document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("emailValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("emailValidationError").classList.contains("hide"))
            document.getElementById("emailValidationError").classList.add("hide");
    }

    return isValid;
}


