function reminder()
{
var F_num=parseInt(document.getElementById("first_number").value);
var S_num=parseInt(document.getElementById("second_number").value);

var reminder=F_num%S_num;
alert("the reminder is " + reminder);
}