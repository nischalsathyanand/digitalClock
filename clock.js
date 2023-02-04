function setTime()
{
    var newTime=new Date();
    var hrs=newTime.getHours();
    var min=newTime.getMinutes();
    var sec=newTime.getSeconds();
    var meridian=document.getElementById('meridian');
    if(hrs>=12)
    {
      meridian.innerHTML='PM';
    }
    else{
        meridian.innerHTML='AM';
    }


    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minitues').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
    


}
setInterval(setTime,10);