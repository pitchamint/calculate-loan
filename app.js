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

    let status = '';

    if(loan <= 1500000){
        status = "คอนโดมิเนี่ยม,ห้องชุด"
    }else if(loan > 1500000 && loan <= 2500000){
        status = "ทาวน์เฮ้าส์ หรือ บ้านเดี่ยว 1 ชั้น"
    }else if(loan > 2500000 && loan <= 2900000){
        status = "บ้านแฝด 2 ชั้น"
    }else if(loan >=3000000){
        status = "บ้านเดี่ยว 2 ชั้น"
    }else{
        status = "สร้างเองตามงบที่มี"
    }

    document.querySelector('.comment').innerHTML = `ประเภทบ้านจัดสรรที่เหมาะกับวงเงิน:<span id="comment">${status}</span>`;
});

//สูตรการคำนวณ (ความสารถในการผ่อนสูงสุด = (รายได้ทั้งหมด *70%ของรายได้)-หนี้สินทั้งหมด)*150 = วงเงิน
