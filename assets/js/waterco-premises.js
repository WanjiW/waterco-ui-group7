var selectedRecord = null;
var selectedRecordID = null;
var baseUrl = "http://localhost:5029";

$(document).ready(function () {
     
        $.ajax({
            type: "GET",
            url: baseUrl + "/premises",
            cache: false,
            success: function (response) {
                console.log(response)
                var data = response.data;
                data.forEach((premise) => {
                    addRecordToTablePremise(premise);
                });
            }
        });

    

});

function addRecordToTablePremise(data) {
    var premiseslist = document.getElementById("premiseslist").getElementsByTagName("tbody")[0];
    var newRecord = premiseslist.insertRow(premiseslist.length);

    cell1 = newRecord.insertCell(0);
    cell1.innerHTML = data.PremiseID;
    cell2 = newRecord.insertCell(1);
    cell2.innerHTML = data.PremiseName;
    cell3 = newRecord.insertCell(2);
    cell3.innerHTML = data.CustomerID;
    cell4 = newRecord.insertCell(3);
    cell4.innerHTML = data.ZoneID;
    cell5 = newRecord.insertCell(4);
    cell5.innerHTML = data.Classification;
    cell6 = newRecord.insertCell(5);
    cell6.innerHTML = data.RouteNumber;
    cell7 = newRecord.insertCell(6);
    cell7.innerHTML = data.PremisesStatus;
    cell8=newRecord.insertCell(7);
    cell8.innerHTML=data.MeterNumber;
    cell9 = newRecord.insertCell(8);
    cell9.innerHTML = `<a onClick="onEditPremise(this)">Edit</a> 
                        <a onClick="onDeletePremise(this)">Delete</a>`;
}

function onFormSubmitPremise() {
    var formData = {};
    
    formData["PremiseName"] = document.getElementById("PremiseName").value;
    formData["CustomerID"] = document.getElementById("CustomerID").value;
    formData["ZoneID"] = document.getElementById("ZoneID").value;
    formData["Classification"] = document.getElementById("Classification").value;
    formData["RouteNumber"] = document.getElementById("RouteNumber").value;
    formData["PremiseStatus"] = document.getElementById("PremiseStatus").value;
    formData["MeterNumber"] = document.getElementById("MeterNumber").value;

    if (selectedRecord == null) {
        saveFormDataPremise(formData);
        // console.log(formData)
    } else {
        updateFormRecordPremise(formData);
    }
    clearFormPremise();
}

function saveFormDataPremise(data) {
    var postData = JSON.stringify(data);
     
        $.ajax({
            type: "POST",
            url: baseUrl + "/premises",
            dataType: 'json',
            data: postData,
            contentType: "application/json; charset=utf-8",
            cache: false,
            success: function (response) {
                addRecordToTablePremise(response.data);
            }
        });
    }



function onEditPremise(td) {
    selectedRecord = td.parentElement.parentElement;
    selectedRecordID = selectedRecord.cells[0].innerHTML;
    // document.getElementById("PremiseID").value = selectedRecord.cells[0].innerHTML;
    document.getElementById("PremiseName").value = selectedRecord.cells[1].innerHTML;
    document.getElementById("CustomerID").value = selectedRecord.cells[2].innerHTML;
    document.getElementById("ZoneID").value = selectedRecord.cells[3].innerHTML;
    document.getElementById("Classification").value = selectedRecord.cells[4].innerHTML;
    document.getElementById("RouteNumber").value = selectedRecord.cells[5].innerHTML;
    document.getElementById("PremiseStatus").value = selectedRecord.cells[6].innerHTML;
    document.getElementById("MeterNumber").value = selectedRecord.cells[7].innerHTML
}

function updateFormRecordPremise(data) {
    var updateData = JSON.stringify(data);
     
        $.ajax({
            type: 'PUT',
            url: baseUrl + "/premises/" + selectedRecordID,
            dataType: 'json',
            data: updateData,
            contentType: "application/json; charset=utf-8",
            cache: false,
            success: function () {
                updateTableRecordPremise(data);
            }
        });
    

    }
   

function updateTableRecordPremise(data) {
    selectedRecord.cells[0].innerHTML = selectedRecordID;
    selectedRecord.cells[1].innerHTML = data.PremiseName;
    selectedRecord.cells[2].innerHTML = data.CustomerID;
    selectedRecord.cells[3].innerHTML = data.ZoneID;
    selectedRecord.cells[4].innerHTML = data.Classification;
    selectedRecord.cells[5].innerHTML = data.RouteNumber;
    selectedRecord.cells[6].innerHTML = data.PremiseStatus;
    selectedRecord.cells[7].innerHTML = data.MeterNumber;
}

function onDeletePremise(td) {
    if (confirm('Are you sure you want to delete this record')) {
        row = td.parentElement.parentElement;
        document.getElementById("premiseslist").deleteRow(row.rowIndex);
        clearFormPremise();
    }

}

function clearFormPremise() {
     
    document.getElementById("PremiseName").value = "";
    document.getElementById("CustomerID").value = "";
    document.getElementById("ZoneID").value = "";
    document.getElementById("Classification").value = "";
    document.getElementById("RouteNumber").value = "";
    document.getElementById("PremiseStatus").value = "";
    document.getElementById("MeterNumber").value = "";
}