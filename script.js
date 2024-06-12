function updateDateTime(){
    const now= new Date();

    // Formatera tiden till HH:MM
    const hours=now.getHours().toString().padStart(2,'0');
    const minutes= now.getMinutes().toString().padStart(2,'0');
    const timeString=`${hours}.${minutes}`;

    //Formatera datum till YYYY-MM-DD
    const year=now.getFullYear();
    const month=(now.getMonth() + 1).toString().padStart(2,'0');
    const day=now.getDate().toString().padStart(2,'0');
    const dateString=`${year}-${month}-${day}`;

    document.getElementById('current-time').textContent=timeString;
    document.getElementById('current-date').textContent=dateString;


}

updateDateTime();

setInterval(updateDateTime, 60000);
