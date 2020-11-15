/*
 *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *                     Version 2, December 2004
 *
 *  Copyright (C) 2020 IJSE
 *
 *  Everyone is permitted to copy and distribute verbatim or modified
 *  copies of this license document, and changing it is allowed as long
 *  as the name is changed.
 *
 *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 *
 *   0. You just DO WHAT THE FUCK YOU WANT TO.
 */


/**
 * @author : Ranjith Suranga <suranga@ijse.lk>
 * @since : 11/15/20
 **/


/*===============================================================================
 * Global Variables
 *===============================================================================*/


// Todo: add all global variable declaration here


/*===============================================================================
 * Init
 *===============================================================================*/


init();

function init(){
    // Todo: add the initialization code if any
}

/*===============================================================================
 * Event Handlers and Timers
 *===============================================================================*/

// Todo: add all event listeners and handlers here

/*===============================================================================
 * Functions
 *===============================================================================*/

// Todo: add all functions
/*([C])\d{3}*/
/*   cusTable.deleteRow(1);*/

var cusTable=document.getElementById("tbl-customers");
/*
var tr=cusTable.insertRow(1);
var td=document.createElement("td");
td=tr.insertCell(0);
td.innerText="agafgdafg";

var delb=document.createElement("button");
delb.setAttribute("value","delete");
delb.setAttribute("class","rec");

delb.innerText="sdfsdfasf";
td=tr.insertCell(1);
td.appendChild(delb);*/

/*var remButton=document.getElementById("rem-button");

var saveButton=document.getElementById("btn-save");*/





var txtid = document.getElementById("txt-id").value;

remButton.addEventListener("click", function getInputValue(){
    // Selecting the input element and get its value
    var txtid = document.getElementById("txt-id").value;

    if(/([C])\d{3}/.test(txtid)){
        alert("success");
    }

    alert(txtid);
});

var txtIdElement=document.getElementById("txt-id");

function validateInput(){
    // Selecting the input element and get its value
    var txtid = document.getElementById("txt-id").value;
    var txtName = document.getElementById("txt-name").value;
    var txtAddress=document.getElementById("txt-address").value;



    if(/([C])\d{3}$/.test(txtid)){

    }else{
        txtIdElement.focus();
        alert("Please enter a valid ID");
        return  false;


    }

    if(/[[a-zA-Z.]{3,}[a-zA-Z. ]/.test(txtName)){

    }else{
        txtIdElement.focus();
        alert("Please enter a valid Name");
        return  false;
    }


    if(/[a-z|A-Z|0-9.| |,|/]/.test(txtAddress) ){
        console.log(txtAddress);


    }else{
        alert("Please enter a valid address");
        return  false;
    }


}

function saveDetails(){
    if(validateInput()===false){
        alert("validation failed");

    }else{

        var txtid = document.getElementById("txt-id").value;
        var txtName = document.getElementById("txt-name").value;
        var txtAddress=document.getElementById("txt-address").value;



        var inputData=[txtid,txtName,txtAddress];


        var tr=cusTable.insertRow(cusTable.rows.length);


        var td=document.createElement("td");
        td=tr.insertCell(0);
        td.innerText=inputData[0];

        alert("input data" +inputData[0]);
        td=tr.insertCell(1);
        td.innerText=inputData[1];

        td=tr.insertCell(2);
        td.innerText=inputData[2];




    }
    alert("saved detail executed");




}


saveButton.addEventListener("click",function (){

    var customerIdElement = document.getElementById("txt-id");
    var customerNameElement = document.getElementById("txt-name");
    var customerAddressElement=document.getElementById("txt-address");
    var tableData=[];
    var footerElement = document.querySelector('#table-footer');

    var tableRowElement=document.createElement('tr');

    var cellIdElement =document.createElement('td');
    cellIdElement.innerText=customerIdElement.value;
    cellIdElement.className='text-center';
    tableRowElement.appendChild(cellIdElement);

    var cellNameElement=document.createElement('td');
    cellNameElement.innerText=customerNameElement.value;
    tableRowElement.appendChild(cellNameElement);

    var cellAddressElement=document.createElement('td');
    cellAddressElement.innerText=customerAddressElement.value;
    tableRowElement.appendChild(customerAddressElement);


    var cellBinIconElement= document.createElement('td');
    var binIconElement=document.createElement('i');
    binIconElement.className="fas fa-trash";
    cellBinIconElement.appendChild(binIconElement);
    cellBinIconElement.className='text-center';
    tableRowElement.appendChild(cellBinIconElement);
    cellBinIconElement.addEventListener('click',function (){
        if(confirm("Dou you want to delete")){
            for(var i=0;i<tableData.length;i++){
                if(tableData[i]===tableRowElement){
                    tableData.splice(i,1);
                        if(tableData.length===0){
                            footerElement.style.visibility='visible';


                        }
                    }
                }tableRowElement.remove();


        }

    });

    cellBinIconElement.addEventListener('mouseover',function (){
        binIconElement.className='fas fa-trash-alt';
    });

    cellBinIconElement.addEventListener('mouseout',function (){
        binIconElement.className='fas fa-trash';
    });

    tableRowElement.addEventListener('click',function (){
        customerIdElement.value = tableRowElement.children[0].innerText;
        customerIdElement.readOnly = true;
        customerNameElement.value = tableRowElement.children[1].innerText;
        customerAddressElement.value = tableRowElement.children[2].innerText;
    });

    tableData.push(tableRowElement);
    footerElement.style.visibility='hidden';
    cusTable.appendChild(tableRowElement);



});




/*
saveButton.addEventListener("click", function getInputValue(){
    // Selecting the input element and get its value
    var txtid = document.getElementById("txt-id").value;

    if(/([C])\d{3}/.test(txtid)){

    }else{
        alert("Please enter a valid ID");

    }

    alert(txtid);
});
*/




/*remButton.addEventListener("mouseenter",function (){
   remButton.style.backgroundColor="red";
});





remButton.addEventListener("mouseleave",function (){
    remButton.style.backgroundColor="purple";


});*/

