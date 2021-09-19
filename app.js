let bt1 = document.getElementById('bt1');
let bt2 = document.getElementById('bt2');
let bt3 = document.getElementById('bt3');
let valuet = document.querySelector('#st').value;
let score1 = 0;
let nd1 = true;
let nd2 = true;
let score2 = 0;
document.querySelector('#st').addEventListener('input', function(e){
    nd1 = true;
    nd2 = true;
    document.getElementById('s2').style.color="black";
    document.getElementById('s1').style.color="black";
    if(valuet > document.querySelector('#st').value){
        document.getElementById('s1').innerText = 0;
        document.getElementById('s2').innerText = 0;
        score1 = 0;
        score2 = 0;
    }
    valuet = document.querySelector('#st').value;
});
bt1.addEventListener('click', function(){
    if(score1 < valuet && nd2){
        score1= score1 + 1;
        document.getElementById('s1').innerText = score1;
    }
    if(score1 == valuet && nd2){
        document.getElementById('s1').style.color="white";
        nd1 = false;
    }
});
bt2.addEventListener('click', function(){
    if(score2 < valuet && nd1){
        score2= score2 + 1;
        document.getElementById('s2').innerText = score2;
    }
    if(score2 == valuet && nd1){
        document.getElementById('s2').style.color="white";
        nd2 = false;
    }
});
bt3.addEventListener('click', function(){
    nd1 = true;
    nd2 = true;
    document.getElementById('s2').style.color="black";
    document.getElementById('s1').style.color="black";
    document.querySelector('#st').value = 1;
    valuet = 1;
    document.getElementById('s1').innerText = 0;
    document.getElementById('s2').innerText = 0;
    score1 = 0;
    score2 = 0;
});
