// Index HTML
$(document).ready(function(){
    $("#name, #lastName, #age, #email, #italy, #telCode, #tel, #doctor").on('input', function(){
        var emailCheck = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        if(!$("#name").val()){
            $("#name").addClass('error');
        }
        else{
            $("#name").removeClass('error');
        }
    
        if(!$("#lastName").val()){
            $("#lastName").addClass('error');
        }
        else{
            $("#lastName").removeClass('error');
        }
    
        if(!$("#age").val() || $("#age").val() < 18 || $("#age").val() > 120){
            $("#age").addClass('error');
        }
        else{
            $("#age").removeClass('error');
        }

        if(!$("#email").val() || emailCheck.test($("#email").val()) == false){
            $("#email").addClass('error');
        }
        else{
            $("#email").removeClass('error');
        }

        if(!$('#telCode :selected').text()){
            $("#telCode").addClass('error');
        }
        else{
            $("#telCode").removeClass('error');
        }

        if(!$("#tel").val() || $("#tel").val() > 69999999 || $("#tel").val() < 60000000){
            $("#tel").addClass('error');
        }
        else{
            $("#tel").removeClass('error');
        }

        if(!$('#doctor :selected').text()){
            $("#doctor").addClass('error');
        }
        else{
            $("#doctor").removeClass('error');
        }

        if(!$("#name").val() || !$("#lastName").val() || !$("#age").val() || $("#age").val() < 18 || $("#age").val() > 120 || !$("#email").val() || emailCheck.test($("#email").val()) == false || !$('#telCode :selected').text() || !$("#tel").val() || $("#tel").val() > 69999999 || $("#tel").val() < 60000000 || !document.querySelector('input[name="italy"]:checked').value || !$('#doctor :selected').text()){
            $('#regBtn').attr('disabled', true);
        }
        else {
            $('#regBtn').removeAttr('disabled');  
        }
    });
});
let oldReg = [];
function addReg (){
    if(JSON.parse(localStorage.getItem("corRegList")!= null)){
        oldReg = JSON.parse(localStorage.getItem("corRegList"));
    }
    var values = $('input[name=italy]:checked').val();
    let newReg = {
        id: Date.now(),
        name: document.getElementById('name').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        tel: document.getElementById('telCode').value + document.getElementById('tel').value,
        italy: values,
        doctor: document.getElementById('doctor').value
    }
    oldReg.push(newReg);
    document.querySelector('form').reset();
    localStorage.setItem('corRegList', JSON.stringify(oldReg));
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('regBtn').addEventListener('click', addReg);    
});
// List HTML
$( document ).ready(function() {
    var corRegList, dmTable, rcTable, vtTable, djTable, i;
    dmTable = rcTable = vtTable = djTable = "";
    corRegList = JSON.parse(localStorage.getItem("corRegList"));
    if(corRegList != null)
    {
    for (i = 0; i < corRegList.length; i++) {
        if(corRegList[i].doctor === "Dominykas Mykolaitis"){
            dmTable += "<tr>";
            dmTable += "<td>" + corRegList[i].id+ "</td>";
            dmTable += "<td>" + corRegList[i].name+ "</td>";
            dmTable += "<td>" + corRegList[i].lastName+ "</td>";
            dmTable += "<td>" + corRegList[i].age+ "</td>";
            dmTable += "<td>" + corRegList[i].email+ "</td>";
            dmTable += "<td>" + corRegList[i].tel+ "</td>";
            dmTable += "<td>" + corRegList[i].italy+ "</td>";
            dmTable += "<td>" + corRegList[i].doctor+ "</td></tr>";
        }
        else if(corRegList[i].doctor === "Raivydas Česlauskas"){
            rcTable += "<tr>";
            rcTable += "<td>" + corRegList[i].id+ "</td>";
            rcTable += "<td>" + corRegList[i].name+ "</td>";
            rcTable += "<td>" + corRegList[i].lastName+ "</td>";
            rcTable += "<td>" + corRegList[i].age+ "</td>";
            rcTable += "<td>" + corRegList[i].email+ "</td>";
            rcTable += "<td>" + corRegList[i].tel+ "</td>";
            rcTable += "<td>" + corRegList[i].italy+ "</td>";
            rcTable += "<td>" + corRegList[i].doctor+ "</td></tr>";
        }
        else if(corRegList[i].doctor === "Valerij Trekailo"){
            vtTable += "<tr>";
            vtTable += "<td>" + corRegList[i].id+ "</td>";
            vtTable += "<td>" + corRegList[i].name+ "</td>";
            vtTable += "<td>" + corRegList[i].lastName+ "</td>";
            vtTable += "<td>" + corRegList[i].age+ "</td>";
            vtTable += "<td>" + corRegList[i].email+ "</td>";
            vtTable += "<td>" + corRegList[i].tel+ "</td>";
            vtTable += "<td>" + corRegList[i].italy+ "</td>";
            vtTable += "<td>" + corRegList[i].doctor+ "</td></tr>";
        }
        else if(corRegList[i].doctor === "Dainius Jankevičius"){
            djTable += "<tr>";
            djTable += "<td>" + corRegList[i].id+ "</td>";
            djTable += "<td>" + corRegList[i].name+ "</td>";
            djTable += "<td>" + corRegList[i].lastName+ "</td>";
            djTable += "<td>" + corRegList[i].age+ "</td>";
            djTable += "<td>" + corRegList[i].email+ "</td>";
            djTable += "<td>" + corRegList[i].tel+ "</td>";
            djTable += "<td>" + corRegList[i].italy+ "</td>";
            djTable += "<td>" + corRegList[i].doctor+ "</td></tr>";
        }
        document.getElementById("dmTable").innerHTML = dmTable;
        document.getElementById("rcTable").innerHTML = rcTable;
        document.getElementById("vtTable").innerHTML = vtTable;
        document.getElementById("djTable").innerHTML = djTable;
    }
}
});