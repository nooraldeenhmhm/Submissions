function ShoeFunction(){
var shoe=parseInt(document.getElementById("shoe_size").value) ;
var birth=parseInt(document.getElementById("year").value);
shoe=shoe*2;
shoe+=5;
shoe=shoe*50;
shoe=shoe-birth+1766;
alert("your shoe size is "+shoe);




}