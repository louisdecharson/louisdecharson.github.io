$(document).ready(function(){

    function getStdev(arr) {

        var stdev = 0;
        var m = 0;
        var len = arr.length;
        arr.forEach(function(it,ind) {
             m += it/len;
        });
        arr.forEach(function(it,ind) {
            stdev += (it-m)*(it-m)/len;
        });
        return Math.sqrt(stdev);
        
    };

    function getAbsdev(arr) {

        var absdev = 0;
        var m = 0;
        var len = arr.length;
        arr.forEach(function(it,ind) {
             m += it/len;
        });
        arr.forEach(function(it,ind) {
            absdev += Math.abs(it-m)/len;
        });
        return Math.sqrt(absdev);
    };

    function getHarmonicMean(arr) {

        var h = 0;
        var len = arr.length;
        arr.forEach(function(it,ind) {
            h += 1/it; 
        });

        return len/h;
        
    }

    function getAVR(arr) {

        var avr = 1;
        arr.forEach(function(it) {
            avr = avr*(1+it/100);
        });
        return Math.pow(avr,1/arr.length)-1;
        
        
    }


    // QUESTION 1
    var S1 = [];
    for (var i=1; i< 12; i++) {
        var mySpan = ".n" +i.toString();
        S1.push(Math.floor((Math.random()*10)+1));
        $(mySpan).text(S1[i-1]);
    }

    // QUESTION 2
    var S2  = [];
    for (var i=0; i<6; i++) {
        var mySpan = ".m" +i.toString();
        S2.push(Math.floor((Math.random()*20))-5);
        $(mySpan).text(S2[i]+"%");
    }

    // QUESTION 3
    var S3 = [20];
    S3.push(Math.floor(Math.random()*10)+3);
    $(".l0").text(S3[1]);

    // QUESTION 4
    var S4 = [];
    S4.push(Math.floor(Math.random()*2+1));
    S4.push(Math.floor(Math.random()*10+10));
    $(".l1").text(S4[0]);
    $(".l2").text(S4[1]+"%");

    // QUESTION 5
    var S5 = [];
    for (var k=3; k < 7; k++) {
        S5.push(Math.floor(Math.random()*10)+1);
        mySpan = ".l"+k.toString();
        $(mySpan).text(S5[k-3]+"%");
    }
    
    // ANSWERS ! 
    $("button").click(function(){
        $(".a1").text(Math.round(getStdev(S1)*1000)/1000);
        $(".a2").text(Math.round(getAbsdev(S1)*1000)/1000);
        $(".a3").text(Math.round(getHarmonicMean(S1)*1000)/1000);
        $(".a4").text(Math.round(100000*(S2[4]/100+1)*(S2[5]/100+1)*1000)/1000);
        $(".a5").text(Math.round(100/(1+S2[3]/100))+"%");
        $(".a6").text(Math.round(getHarmonicMean(S3)*1000)/1000);
        $(".a7").text(Math.round(S4[0]/(1+S4[1]/100)*1000)/1000);
        $(".a8").text(Math.round(getAVR(S5)*100*1000)/1000+"%");
    });
});
