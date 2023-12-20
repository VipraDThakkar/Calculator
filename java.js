let val = document.getElementById('text')
function input(x){
    val.value= val.value+x;
}
function allclear(){
    val.value=' ';
}
function del() {
    val.value=val.value.slice(0,-1);
}
function cal(){
    try{    
        val.value=eval(val.value);
    }
    catch{
        val.value='Error';
    }
}