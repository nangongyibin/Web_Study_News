function outsideJs() {
    document.getElementById('ngybP').innerHTML = '我的第一个JavaScripts';
}

function outPutLog() {
    // document.getElementById('ngybP').innerHTML = 5+6;
    // document.write(5+6);
    // window.alert(5+6);
    console.log(5+6);
}

function statement() {
    var x,y,z; 
    x = 22;
    y =11; 
    z =x+y;
    document.getElementById('ngybP').innerHTML = z;
}

function grammar() {
    var x=7,y = 8,i = 10;
    var z; 
    z = x; 
    z = (x+y)*i;
    z =z+x;
    document.getElementById('ngybP').innerHTML = z;
}