
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
        url: baseUrl + "/payments",
        cache: false,
        success: function (response) {
            console.log(response)
            var data = response.data;
            data.forEach((payment) => {
                addRecordToTablePayments(payment);
            });
        }
    });
});

function addRecordToTablePayments(data) {
    var paymentslist = document.getElementById("paymentslist").getElementsByTagName("tbody")[0];
    var newRecord = paymentslist.insertRow(paymentslist.length);

    cell1 = newRecord.insertCell(0);
    cell1.innerHTML = data.PaymentID;
    cell2 = newRecord.insertCell(1);
    cell2.innerHTML = data.BillStatus;
    cell3 = newRecord.insertCell(2);
    cell3.innerHTML = data.Bill;
    cell4 = newRecord.insertCell(3);
    cell4.innerHTML = data.CustomerID;
    cell5 = newRecord.insertCell(4);
    cell5.innerHTML = data.StaffID;
    cell6 = newRecord.insertCell(5);
    cell6.innerHTML = data.Balance;
    // cell7 = newRecord.insertCell(6);
    // cell7.innerHTML = `<a onClick="onEditPayments(this)">Edit</a> 
    //                     <a onClick="onDeletePayments(this)">Delete</a>`;
}

function onFormSubmitPayments() {
    var formData = {};
    console.log("hello");
    // formData["PaymentID"] = document.getElementById("PaymentID").value;
    formData["BillStatus"] = document.getElementById("BillStatus").value;
    formData["Bill"] = document.getElementById("Bill").value;
    formData["CustomerID"] = document.getElementById("CustomerID").value;
    formData["StaffID"] = document.getElementById("StaffID").value;
    formData["Balance"] = document.getElementById("Balance").value;

    if (selectedRecord == null) {
        saveFormDataPayments(formData);
        console.log(formData)
    } else {
        updateFormRecordPayments(formData);
    }
    clearFormPayments();
}

function saveFormDataPayments(data) {
    console.log(data)
    var postData = JSON.stringify(data);
    console.log(postData)

    $.ajax({
        type: "POST",
        url: baseUrl + "/payments",
        dataType: 'json',
        data: postData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (response) {
            addRecordToTablePayments(response.data);
        }
    });
}

function onEditPayments(td) {
    selectedRecord = td.parentElement.parentElement;
    selectedRecordID = selectedRecord.cells[0].innerHTML;
    // document.getElementById("PaymentID").value = selectedRecord.cells[0].innerHTML;
    document.getElementById("BillStatus").value = selectedRecord.cells[1].innerHTML;
    document.getElementById("Bill").value = selectedRecord.cells[2].innerHTML;
    document.getElementById("CustomerID").value = selectedRecord.cells[3].innerHTML;
    document.getElementById("StaffID").value = selectedRecord.cells[4].innerHTML;
    document.getElementById("Balance").value = selectedRecord.cells[5].innerHTML;
}

function updateFormRecordPayments(data) {
    console.log("update for customers called");
    var updateData = JSON.stringify(data);
    $.ajax({
        type: 'PUT',
        url: baseUrl + "/payments/" + selectedRecordID,
        dataType: 'json',
        data: updateData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function () {
            console.log("update successful");
            updateTableRecordPayments(data);
        }
    });

}

function updateTableRecordPayments(data) {
    selectedRecord.cells[0].innerHTML = selectedRecordID;
    selectedRecord.cells[0].innerHTML = data.PaymentID;
    selectedRecord.cells[1].innerHTML = data.BillStatus;
    selectedRecord.cells[2].innerHTML = data.Bill;
    selectedRecord.cells[3].innerHTML = data.CustomerID;
    selectedRecord.cells[4].innerHTML = data.StaffID;
    selectedRecord.cells[5].innerHTML = data.Balance;
}

function onDeletePayments(td) {
    if (confirm('Are you sure you want to delete this record')) {
        row = td.parentElement.parentElement;
        document.getElementById("paymentslist").deleteRow(row.rowIndex);
        clearFormPayments();
    }

}

function clearFormPayments() {
    // document.getElementById("PaymentID").value = "";
    document.getElementById("BillStatus").value = "";
    document.getElementById("Bill").value = "";
    document.getElementById("CustomerID").value = "";
    document.getElementById("StaffID").value = "";
    document.getElementById("Balance").value = "";
}