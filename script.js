function zamow(){
    var kształt = document.getElementById("kształt").value;
    var wynik = document.getElementById("wynik");
    var przycisk = document.getElementById("przycisk");

    var R = document.getElementById("R").value;
    var G = document.getElementById("G").value;
    var B = document.getElementById("B").value;
    
    var tekst = "Zamówiłeś żelka: ";
    
    if(kształt==1){
        tekst+="miś";
    }else if(kształt==2){
        tekst+="żabka";
    }else if(kształt==3){
        tekst+="serce";
    }else{
        tekst+="inny";
    }

    wynik.innerHTML=tekst;

    przycisk.style.backgroundColor="rgb("+R+","+G+","+B+")";

}