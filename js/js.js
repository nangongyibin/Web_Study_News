function outsideJs() {
    document.getElementById('ngybP').innerHTML = '我的第一个JavaScripts';
}

function outPutLog() {
    // document.getElementById('ngybP').innerHTML = 5+6;
    // document.write(5+6);
    // window.alert(5+6);
    console.log(5 + 6);
}

function statement() {
    var x, y, z;
    x = 22;
    y = 11;
    z = x + y;
    document.getElementById('ngybP').innerHTML = z;
}

function grammar() {
    var x = 7,
        y = 8,
        i = 10;
    var z;
    z = x;
    z = (x + y) * i;
    z = z + x;
    document.getElementById('ngybP').innerHTML = z;
}

function strMethod() {
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

function arrayMethod() {
    var text;
    var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
    var Name = ['xiaohong', 'xiaoming', 'xiaobai'];
    var number = [1, 99, 43, 23, 3, 5];
    // text = "<ul>";
    //第一个参数为函数,第二个参数是数组值为空时的替代值
    // fruits.forEach(getArrayData);
    // text += "</ul>";
    // text = new Array(2,5);
    //判断是否是个数组
    //方法一
    // text = Array.isArray(text);
    //方法二
    // text= isArray(text);
    //方法三
    // text = text instanceof Array;
    //将数组拼接成字符串
    // text = fruits.join('*');
    // pop 移除最后一个数组元素 返回移除的元素
    // text= fruits.pop();
    //push在数组最后添加一个元素,返回数组的角标
    // text = fruits.push('Ngyb');
    //shift和unshift分别是从数组头移除和添加元素
    //删除元素
    // delete fruits[1];
    //splice 拼接数组
    //第一个参数为数组的起始位置
    //第二个参数为要删除的数组个数
    //第三个参数往后为要添加的数组元素
    // fruits.splice(2,0,'Lemon','Kiwi');
    // splice数组元素删除
    // 第一个参数为数组的起始位置
    // 第二个参数为要删除数组元素的个数
    // fruits.splice(1,2);
    //数组拼接  参数为任意数量的数组参数
    // text = fruits.concat(Name);
    //截取数组成新的数组
    // text = fruits.slice(1,2);
    //排序
    // fruits.sort();
    //反转数组元素
    // fruits.reverse();
    // number.sort(function (a,b) {
    //     return b-a; 
    // });
    //创建新数组
    // text = number.map(function (value,index,array) {
    //     return value*2;
    // })
    //
    //根据函数取出符合要求的数据
    // text = number.filter(function (value,index,array) {
    //     return value >50;
    // },100);
    //检查数组的所有值是否大于50
    // text = number.every(function (value,index,array) {
    //     return value >50;
    // },100);
    //求和
    // text = number.reduce(function (total,value,index,array) {
    //     return total+value; 
    // })
    // text = number.reduceRight(function (total,value,index,array) {
    //     return total+value; 
    // })
    //只要有值符合函数规定即可返回true
    // text = number.some(function (value,index,array) {
    //     return value >99
    // })
    //符合要求的索引
    text = number.findIndex(function (value, index, array) {
        return value > 3;
    })
    // document.getElementById('ngybP').innerHTML = fruits;
    document.getElementById('ngybPNew').innerHTML = text;
    document.getElementById("ngybP").innerHTML = number;

    function getArrayData(value, index, array) {
        text += "<li>" + value + "===" + index + "####" + array + "</li>";
    }

    function isArray(x) {
        return x.constructor.toString().indexOf('Array') > -1;
    }
}

//随机数
function getRandom() {
    document.getElementById('ngybP').innerHTML = Math.random();
}

function getValue() {
    var number = [1, 99, 43, 23, 3, 5];
    var text = Math.max.apply(null, number);
    document.getElementById('ngybP').innerHTML = text;
}

function getDate() {
    // var date = new Date("October 13, 2014 11:13:00");
    // var date = new Date('2015-03');
    // var date = new Date('2018');
    // var date = new Date('2018-09-12T12:00:00');
    // var date = new Date('02/19/2018');
    // var date = new Date('Feb 19 2019');
    //月和日的顺序徐没有具体规定  月全称或拼写均可  忽略大小写
    // var date = new Date('19 Feb 2019');
    // var date = new Date('February,19,2019');
    // var date  = new Date('Fri Mar 26 2018 09:56:24 GMT+0100 (Tokyo Time)');
    var date = new Date();
    var text = date.getDate() + "@" + date.getDay() + "@" + date.getFullYear() + "@" + date.getHours() + "@" + date.getMilliseconds() + "@" + date.getMinutes() + "@" + date.getMonth() + "@" + date.getSeconds() + "@" + date.getTime();
    //转化成utc字符串
    // var text = date.toUTCString();
    //一种日期显示标准
    // var text =date.toDateString();
    document.getElementById('ngybP').innerHTML = date;
    document.getElementById('ngybPNew').innerHTML = text;
}


function mathMethod() {
    var text;
    //π
    // text = Math.PI;;
    //四舍五入
    // text = Math.round(2.3);
    //几次方
    // text =Math.pow(8,2);
    //开根号
    // text = Math.sqrt(64);
    //绝对值
    // text = Math.abs(-4);
    //向上进位
    // text = Math.ceil(-6.4);
    //向下舍弃
    // text = Math.floor(6.7);
    //sin方法
    // text = Math.sin(60);
    //cos方法
    // text = Math.cos(30);
    document.getElementById('ngybP').innerHTML = text;
}

function forMethod() {
    var person = {
        fname: 'Bill',
        lname: 'Gates',
        age: 62
    };
    var text = "";
    var x;
    //x为属性名
    for (x in person) {
        // text+=person[x];
        text += x;
    }
    document.getElementById('ngybP').innerHTML = text;
}

function breakMethod() {
    var cars = ['BMW', 'Volvo', 'porsche', 'Ford'];
    var text = '';
    list: {
        text += cars[0] + "<br>";
        text += cars[1] + "<br>";
        //跳出代码块
        break list;
        text += cars[2] + "<br>";
        text += cars[3] + "<br>";
    }
    document.getElementById('ngybP').innerHTML = text;
}

function twoAndTen() {
    var text;
    var number = -5;
    // var number = 5; 
    // text = number >>> 0 ; 
    // text = number >>> 0;
    text = (number >>> 0).toString(2);
    // text =parseInt(text,2);
    text = parseInt(text, 2).toString(10);
    document.getElementById('ngybP').innerHTML = text;
}

function reg() {
    var str = "The full name of China is the People's Republic of China."
    //多个修饰符可以并列使用
    var text = str.replace(/China/ig, 'china');
    document.getElementById('ngybP').innerHTML = text;
}

function jsonTest() {
    //json属性必须用双引号引起来
    var text = '{"fname":"zhang", "lname":"san", "age":"11"}';
    // var text = '{"name":"Bill Gates", "age":62, "city":"Seattle"}';
    var str = JSON.parse(text);
    str = JSON.stringify(text);
    // document.getElementById('ngybP').innerHTML = text.age;
    // document.getElementById('ngybPNew').innerHTML= str.age;
    document.getElementById('ngybPNew').innerHTML = str;
}

function arrowFunction() {
    // const str = (x, y) => x * y ;
    const str = (x, y) => {
        return x * y;
    }
    document.getElementById('ngybP').innerHTML = str(2, 3);
}

function submitFunction() {
    var name = document.forms['ngybForm']['username'].value;
    if (name == '') {
        alert("请输入用户名");
        return false;
    }
}

function formFunction() {
    var pwd = document.getElementById('pwd');
    // if(pwd.checkValidity() ==false){
    //     //validationMessage包含当validity为false时浏览器显示的消息
    //     document.getElementById('ngybP').innerHTML = pwd.validationMessage;
    // }
    var txt;
    if (pwd.validity.rangeUnderflow) {
        txt = '值太小';
    }
    if (pwd.validity.rangeOverflow) {
        txt = '值太大';
    }
    document.getElementById('ngybP').innerHTML = txt;
}

function JSObject() {
    var object = {
        fname: "zhang",
        lname: "san",
        age: 45,
        get fn() {
            return this.fname;
        },
        set fn(name) {
            this.fname = name;
        }
    };
    // //删除对象的属性
    // // delete object.age;
    // // object["age"] = 56;
    // object.name = function () {
    //     return this.fname + "==" + this.lname;
    // }

    // function object(fname, lname, age) {
    //     this.fname = fname;
    //     this.lname = lname;
    //     this.age = age;
    //     this.changeName = function (name) {
    //         this.lname = name;
    //     }
    //     this.fullname = function () {
    //         return this.fname + "==" + this.lname;
    //     }
    // }
    // var person = new object('南宫', '问天', 29);
    // person.changeName("燚滨");
    // document.getElementById('ngybP').innerHTML = object.age;
    //document.getElementById('ngybP').innerHTML = person.fullname();
}