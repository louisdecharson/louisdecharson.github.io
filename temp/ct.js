function draw(n) {
    var Sn = 0,
        sigma = 0.5/Math.sqrt(3),
        mu = 0.5;
    for (var k=0;k<n;k++) {
        Sn = Sn + Math.random();
    }
    return Math.sqrt(n)*(Sn/n-mu)/sigma;
}
function getHist(v,precision){
    var ans = Array(2*precision+1).fill(0);
    v.forEach(function(it,ind){
        var i = Math.floor(it*precision/5)+precision;
        if (i > -1 && i < 2*precision){
            ans[i]++;
        }
    });
    return ans.map(x=>x/(v.length*5/precision));
}
function normal(n) {return Array(2*n+1).fill().map((x,i)=>Math.exp(-25*(i/n-1)*(i/n-1)/2)/Math.sqrt(2*3.14159265359));}
function getX(n){return Array(2*n+1).fill().map((x,i)=>-5+5*i/n);}
function getBar(n,precision,N) {
    return getHist(Array(2*N+1).fill().map(x=>draw(n)),precision);
}
var N = 1000; // Nb of trials
var precision = 20; // nb of bars in the histogram
var n = 100; // length of the sum
var graphData = {
    labels:getX(precision),
    datasets:[
        {
            label:"Theoretical normal distribution",
            data:normal(precision),
            type:'line',
            borderColor: 'rgba(230,76,60,1)',
            backgroundColor: 'rgba(230,76,60,0.1)'
        },
        {
            label:"Histogram of draws",
            data: getBar(n,precision,N),
            borderColor: 'rgba(240,195,15,1)',
            backgroundColor: 'rgba(240,195,15,0.8)'
        }
    ]};
window.onload = function() {
    var ctx = document.getElementById("myChart").getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: graphData,
        options:{
            responsive: true,
            title: {
                display: true,
                text: 'Central Limit Theorem'
            }
        }
    });
};
document.getElementById('go').addEventListener('click', function() {
    var nUser = document.getElementById('n').value;
    var precisionUser = parseInt(document.getElementById('precision').value);
    graphData.labels = getX(precisionUser);
    graphData.datasets[1].data = getBar(nUser,precisionUser,N);
    graphData.datasets[0].data = normal(precisionUser);
    window.myBar.update();
});
