const start = document.querySelector("#start");
const stop = document.querySelector("#stop")
start.addEventListener('click',function(){
    const a=function(str){
        console.log(str ,Date.now())
    };
    const b=setInterval(a,1000,"hi")
    stop.addEventListener('click',function(){
        clearInterval(b)
    });
});
