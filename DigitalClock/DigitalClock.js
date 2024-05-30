const getclock=()=>{
    const date=new Date()            // Date()--> gives current date 
                                      //we are geting time for the given date.
    const hour=date.getHours()      //getHours() is a predefined function that gives hour
    const min=date.getMinutes()     //getMinutes()--> gives minutes
    const sec=date.getSeconds()      //getSeconds()--> gives seconds

    const time=hour+":"+min+":"+sec
    
    document.getElementById("clock").innerHTML=time     //document--> display o|p in webpage
                                                        //getElementById--> is used to connect document to the given id "clock"
                                                        //innerHTML--> used to connect inner html in index.html and change it to time
}

setInterval(getclock,1000)            //used to run infinite loop with time-interval of 1ms