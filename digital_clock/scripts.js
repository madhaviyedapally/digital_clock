function check(i){
    if(i<10)
    {
        i="0" + i;
    }
    return i;
}
function clock(){
    const date=new Date()
    const hours=date.getHours().toString().padStart(2,'0');
    
    document.getElementById('hrs').innerHTML=hours;
    document.getElementById('min').innerHTML=check(date.getMinutes());
    document.getElementById('sec').innerHTML=check(date.getSeconds());

    let wish;
    if(hours>=0 && hours<12)
    {
        wish="Good Morning!!";
    }
    else if(hours>=12 && hours<16)
    {
        wish="Good Afternoon!!";
    }
    else
        wish="Good Evening!!"


    document.getElementById('wishing').innerHTML=`Hello, ${wish}!`;

    let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let d=date.getDay();

    
    document.getElementById('day').innerHTML=days[d];

    let months=['January','February','March','April','May','June','July','September','October','November','December']
    let mon=date.getMonth();
    document.getElementById('month').innerHTML=months[mon]

    document.getElementById('date').innerHTML=date.getDate();

    if(hours>12)
    {
        document.getElementById('hrs').innerHTML=hours-12;
    }
    
    if(hours>=12)
    {
        document.getElementById('ampm').innerHTML='PM';
    }
    

}
setInterval(clock,10);
