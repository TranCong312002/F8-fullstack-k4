var a=11;
var b=18;
var c=12;

if (a>b){
    if(a>c){
        if(b>c){
            console.log(c,b,a);
        }
        else{
            console.log(b,c,a);
        }
    }
    else{
        console.log(b,a,c);
    }
}
else{
    if(b>c){
        if(a>c){
            console.log(b,a,c);
        }
        else{
            console.log(a,c,b);
        }
    }
    else{
        console.log(a,b,c);
    }
}