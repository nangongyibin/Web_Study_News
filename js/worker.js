var i = 0;

function timeCount() {
    i = i + 1;
    // 向html传递消息
    postMessage(i);
    setTimeout("timeCount()", 500);
}
timeCount();