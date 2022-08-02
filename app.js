const btn =document.getElementById('calculate');

btn.addEventListener('click',function(){

    let income = document.querySelector('#money').value;
    let dept = document.querySelector('#neesin').value;

    if(income == '' || dept == ''){
        alert('กรุณากรอกข้อมูลให้ครบถ้วน')
        return;
    }
    income = income*0.7
    let loan = (income - dept)*150 
    loan = loan.toFixed(0)

    document.querySelector('#result').innerHTML = loan;

});

//สูตรการคำนวณ (ความสารถในการผ่อนสูงสุด = (รายได้ทั้งหมด *70%ของรายได้)-หนี้สินทั้งหมด)*150 = วงเงิน
