
    var selectedRow =null;
    
    function onFormSubmit(e){
        event.preventDefault();
        var formData = readFormData();
        if( selectedRow == null){
            insertNewRecord(formData);
        }
        else{
            updateRecord(formData);
        }
        resetForm();
    }

    // Retrive data
    function readFormData(){
        var formData = {};
        formData["fname"]= document.getElementById("fname").value;
        formData["lname"]= document.getElementById("lname").value;
        formData["p_no"]= document.getElementById("p_no").value;
        formData["email"]= document.getElementById("email").value;
        return formData;
    }

    //insert the data
    function insertNewRecord(data){
        var table = document.getElementById("StoreList").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);
        var cell1 = newRow.insertCell(0);
            cell1.innerHTML = data.fname;
        var cell2 = newRow.insertCell(1);
            cell2.innerHTML = data.lname;
        var cell3 = newRow.insertCell(2);
            cell3.innerHTML = data.p_no;
        var cell4 = newRow.insertCell(3);
            cell4.innerHTML = data.email;
        var cell4 = newRow.insertCell(4);
            cell4.innerHTML ='<button onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>';
    }

    //Edit the data
    function onEdit(td){
        selectedRow = td.parentElement.parentElement;
        document.getElementById('fname').value = selectedRow.cells[0].innerHTML;
        document.getElementById('lname').value = selectedRow.cells[1].innerHTML;
        document.getElementById('p_no').value = selectedRow.cells[2].innerHTML;
        document.getElementById('email').value = selectedRow.cells[3].innerHTML;
    }

    function updateRecord(formData){
        selectedRow.cells[0].innerHTML=formData.fname;
        selectedRow.cells[1].innerHTML=formData.lname;
        selectedRow.cells[2].innerHTML=formData.p_no;
        selectedRow.cells[3].innerHTML=formData.email;
    }

    //delete the data
    function onDelete(td){
        if(confirm('delete this record?')){
            row = td.parentElement.parentElement;
            document.getElementById('Storelist').deleteRow(row.rowIndex);
            resetForm();
        }
        
    }

    //reset
    function resetForm(){
        document.getElementById('fname').value='';
        document.getElementById('lname').value='';
        document.getElementById('p_no').value='';
        document.getElementById('email').value='';
        selectedRow = null;
    }
