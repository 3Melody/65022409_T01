let randNum = Math.floor(Math.random() * 101);
let x = 0;

function GN(){
    const Guess_Number = document.getElementById('G_N').value;
    if(Guess_Number>randNum){
        x +=1;
        alert("มากกว่า")
    }else if (Guess_Number<randNum){
        x +=1;
        alert("น้อยกว่า")
    }else{
        x +=1;
        alert("ถูกต้อง ค่าที่ถูกต้องคือ : "+randNum+" คุณทายไปทั้งหมด : " + x +" ครั้ง")
    }
}

