/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var selectedRecord = null;
var selectedRecordID = null;
var baseUrl = "http://localhost:5029";
//
$(document).ready(function () {
     
        $.ajax({
            type: "GET",
            url: baseUrl + "/members",
            cache: false,
            success: function (response) {
                var data = response.data;
                data.forEach((Customer) => {
                   addRecordToTableCustomers(Customer);
                });
            }
        });   
});

function addRecordToTableCustomers(data) {
    var memberslist = document.getElementById("memberslist").getElementsByTagName("tbody")[0];
    var newRecord = memberslist.insertRow(memberslist.length);

    cell1 = newRecord.insertCell(0);
    cell1.innerHTML = data.CustomerID;
    cell2 = newRecord.insertCell(1);
    cell2.innerHTML = data.CustomerName;
    cell3 = newRecord.insertCell(2);
    cell3.innerHTML = data.PhoneNo;
    cell4 = newRecord.insertCell(3);
    cell4.innerHTML = data.EmailAddress;
    cell5=newRecord.insertCell(4);
    cell5.innerHTML = `<a onClick="onEditCustomers(this)">Edit</a> 
                        <a onClick="onDeleteCustomers(this)">Delete</a>`;
}

function onFormSubmitCustomers() {
   var formData = {};
   formData["CustomerName"] = document.getElementById("CustomerName").value; 
   formData["PhoneNo"]=document.getElementById("PhoneNo").value
   formData["EmailAddress"]=document.getElementById("EmailAddress").value;

   if (selectedRecord==null){
    saveFormDataCustomers(formData);
   }else{
       updateFormRecordCustomers=(formData)
   }

       
      clearFormCustomers();
}

function saveFormDataCustomers(data) {
    var postData = JSON.stringify(data);
     
        $.ajax({
            type: "POST",
            url: baseUrl + "/members",
           dataType: 'json',
           data: postData,
            contentType: "application/json; charset=utf-8",
            cache: false,
           success: function (response) {
                addRecordToTableCustomers(response.data);
            }
        });
    }


function onEditCustomers(td) {
    selectedRecord = td.parentElement.parentElement;
    selectedRecordID=selectedRecord.cells[0].innerHTML; 
    document.getElementById("CustomerName").value=selectedRecord.cells[1].innerHTML;
    document.getElementById("PhoneNo").value=selectedRecord.cells[2].innerHTML ;
    document.getElementById("EmailAddress").value=selectedRecord.cells[3].innerHTML;
     
}

function updateFormRecordCustomers(){
    var updateData = JSON.stringify(data);
     
        $.ajax({
            type: 'PUT',
            url: baseUrl + "/members/" + selectedRecordID,
            dataType: 'json',
            data: updateData,
             contentType: "application/json; charset=utf-8",
            cache: false,
            success: function () {
             updateTableRecordCustomers(data);
            }
         });

}

function updateTableRecordCustomers(data){
    selectedRecord.cells[0].innerHTML=selectedRecordID;
    selectedRecord.cells[1].innerHTML=data.CustomerName;
    selectedRecord.cells[2].innerHTML=data.PhoneNo;
    selectedRecord.cells[3].innerHTML=data.EmailAddress;

}
function onDeleteCustomers(td){
    if(confirm("Are you sure You want to delete this record")){
        row=td.parentElement.parentElement;
        document.getElementById("memberslist").deleteRow(row.rowIndex);
        clearFormCustomers();



    }

}

 
function clearFormCustomers() {
   document.getElementById("CustomerName").value ="";
  document.getElementById("PhoneNo").value = "";
   document.getElementById("EmailAddress").value = "";
     
}
