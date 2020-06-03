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

function strMethod(){
    var str = "The full name of China is the People's Republic of China.";
    var str1 = "Hello";
    var str2 = "World!";
    // 第二个参数为检索起始位置
    // var pos = str.lastIndexOf('China',50);
    // var pos = str.indexOf('China',18);
    // var pos = str.search('T');
    //slice可以为负数,但是第一个数小于第二个数
    // var pos = str.slice(-3,-1);
    //substring两个数不可以为负数
    // var pos = str.substring(1,4);
    //substr第二个数不能为负数
    // var pos  = str.substr(-5,3);
    // /i大小写不敏感
    // /g替换所有匹配
    //原字符串不发生变化
    // var pos = str.replace(/China/g,'china');
    //concat 第一个参数为字符串连接符,第二个参数为要连接的字符串
    // var  pos = str1.concat("#",str2);
    // var x = NaN;
    // //判断某个值是不是数,返回true不是数
    // var pos = isNaN(x);
    // var number = 128; 
    // //带参数的话就是表示进制
    // var pos = number.toString(8);
    var number = -9.656;
    //科学计数法
    // var pos = number.toExponential(4);
    //保留多少位小数的方法
    // var pos = number.toFixed(10);
    //字符的位数,不包含小数点 正负号
    // var pos = number.toPrecision(2);
    var pos = Number.MAX_VALUE;
    document.getElementById('ngybP').innerHTML = str;
    document.getElementById('ngybPNew').innerHTML = pos;
}