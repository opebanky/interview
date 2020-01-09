function convertTime(s){
   
    var slenght = s.length;
    var lasttwosliced = s.slice((slenght - 2),10);
    var slicefirsttwo = s.slice(0,2);
    var firsttwosliced = Number(slicefirsttwo);

    var myminute = s.slice(3,5);
    var myseconds = s.slice(6,8);
    var convertedHour = firsttwosliced;

    //Test for minutes and seconds goes here
    var myminuteNumber = Number(myminute);
    var mysecondsNumber = Number(myseconds);

    if(firsttwosliced > 12){
        return "Enter a 12 Hour format";
    }
    

    if((myminuteNumber > 59) || (mysecondsNumber > 59)){
        return "Either your seconds or Minute is above 59";
    }else{
//  Test for AM or PM goes here
        if(lasttwosliced == "PM"){
            if(firsttwosliced < 12){
                convertedHour = firsttwosliced + 12;
                return convertedHour + ":" + myminute + ":" + myseconds;
            }

            if(firsttwosliced == 12){
                return convertedHour + ":" + myminute + ":" + myseconds;
            }
        }

        if(lasttwosliced == "AM"){
            if(firsttwosliced < 12){
                convertedHour = firsttwosliced;
                if(firsttwosliced < 10){
                    return "0" + convertedHour + ":" + myminute + ":" + myseconds;
                }else{
                    return convertedHour + ":" + myminute + ":" + myseconds;
                }
            }

            if(firsttwosliced == 12){
                convertedHour = "00";
                return convertedHour + ":" + myminute + ":" + myseconds;
            }
        }
    }


    
}

console.log(convertTime("12:00:00AM"));