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
var tr=cusTable.insertRow(1);
var td=document.createElement("td");
td=tr.insertCell(0);
td.innerText="agafgdafg";

var delb=document.createElement("button");
delb.setAttribute("value","delete");
delb.setAttribute("class","rec");

delb.innerText="sdfsdfasf";
td=tr.insertCell(1);
td.appendChild(delb);

var remButton=document.getElementById("rem-button");







remButton.addEventListener("click", function getInputValue(){
    // Selecting the input element and get its value
    var inputVal = document.getElementById("txt-id").value;

    if(/([C])\d{3}/.test(inputVal)){
        alert("success");
    }

    alert(inputVal);
});

remButton.addEventListener("mouseenter",function (){
   remButton.style.backgroundColor="red";
});





remButton.addEventListener("mouseleave",function (){
    remButton.style.backgroundColor="purple";
    console.log("safs"+inp);

});
