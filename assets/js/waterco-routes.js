/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var selectedRecord = null;
var selectedRecordID = null;
var baseUrl = "https://waterco-api-group7.herokuapp.com";

$(document).ready(function () {
        $.ajax({
            type: "GET",
            url: baseUrl + "/routes",
            cache: false,
            success: function (response) {
                console.log(response)
                var data = response.data;
                data.forEach((route) => {
                    addRecordToTableRoutes(route);
                });
            }
        });
});

function addRecordToTableRoutes(data) {
    var routeslist = document.getElementById("routeslist").getElementsByTagName("tbody")[0];
    var newRecord = routeslist.insertRow(routeslist.length);

    cell1 = newRecord.insertCell(0);
    cell1.innerHTML = data.RouteNumber;
    cell2 = newRecord.insertCell(1);
    cell2.innerHTML = data.RouteStatus;
    cell3 = newRecord.insertCell(2);
    cell3.innerHTML = data.ZoneID;
    cell4 = newRecord.insertCell(3);
    cell4.innerHTML = `<a onClick="onEditRoutes(this)">Edit</a> 
                        <a onClick="onDeleteRoutes(this)">Delete</a>`;

}

function onFormSubmitRoutes() {
    var formData = {};
    formData["RouteNumber"] = document.getElementById("RouteNumber").value;
    formData["RouteStatus"] = document.getElementById("RouteStatus").value;
    formData["ZoneID"] = document.getElementById("ZoneID").value;


    if (selectedRecord == null) {
        saveFormDataRoutes(formData);
        // console.log(formData)
    } else {
        updateFormRecordRoutes(formData);
    }
    clearFormRoutes();
}

function saveFormDataRoutes(data) {
    var postData = JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: baseUrl + "/routes",
        dataType: 'json',
        data: postData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (response) {
            addRecordToTableRoutes(response.data);
        }
    });
}

function onEditRoutes(td) {
    selectedRecord = td.parentElement.parentElement;
    selectedRecordID = selectedRecord.cells[0].innerHTML;
    document.getElementById("RouteNumber").value = selectedRecord.cells[0].innerHTML;
    document.getElementById("RouteStatus").value = selectedRecord.cells[1].innerHTML;
    document.getElementById("ZoneID").value = selectedRecord.cells[2].innerHTML;
}

function updateFormRecordRoutes(data) {
    var updateData = JSON.stringify(data);
    $.ajax({
        type: 'PUT',
        url: baseUrl + "/routes/" + selectedRecordID,
        dataType: 'json',
        data: updateData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function () {
            updateTableRecordRoutes(data);
        }
    });

}

function updateTableRecordRoutes(data) {
    selectedRecord.cells[0].innerHTML = selectedRecordID;
    selectedRecord.cells[0].innerHTML = data.RouteNumber; 
    selectedRecord.cells[1].innerHTML = data.RouteStatus;
    selectedRecord.cells[2].innerHTML = data.ZoneID;
}

function onDeleteRoutes(td) {
    var formData = {};
    formData["RouteNumber"] = document.getElementById("RouteNumber").value;
    formData["RouteStatus"] = document.getElementById("RouteStatus").value;
    formData["ZoneID"] = document.getElementById("ZoneID").value;

    if (confirm('Are you sure you want to delete this record')) {
        row = td.parentElement.parentElement;
        document.getElementById("routeslist").deleteRow(row.rowIndex);
        deleteFormDataRoutes(formData)
        clearFormRoutes();
    }

}

function deleteFormDataRoutes(data) {
    console.log(data)
    var postData = JSON.stringify(data);
    console.log(postData)
    $.ajax({
        type: "DELETE",
        url: baseUrl + "/routes",
        dataType: 'json',
        data: postData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        // success: function (response) {
        //     addRecordToTableBills(response.data);
        // }
    });
}

function clearFormRoutes() {
    document.getElementById("RouteNumber").value = "";
    document.getElementById("RouteStatus").value = "";
    document.getElementById("ZoneID").value = "";
}
