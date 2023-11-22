function SelectF(){
    alert("Metin sectiniz");
}

function KeyUp(){
    let x=document.getElementById("inid");
    x.value=x.value.toUpperCase();
}

function SearchF(){
    var y=document,getElementById("inid").value;
    document.getElementById("h3id").innerHTML="arama yaptiginiz kelime"+y;
}