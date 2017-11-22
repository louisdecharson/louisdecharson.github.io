function uniform(a,b) {
    return Array(b-a+1).fill().map((x,i)=>1/(b-a+1));
}

function poisson(lambda){
    var ans = [];
    for (var k=0; k<Math.max(10,5*lambda);k++){
        var lk = 1,
            kfact = 1;
        for (var i=1;i<k+1;i++) {
            lk = lk*lambda;
            kfact = kfact*i;
        }
        ans.push(lk/kfact*Math.exp(-lambda));
    }
    return ans;
}
function factorial(n) {
    if (n===0 || n===1){
        return 1;
    }
    if (n>1) {
        return n*factorial(n-1);
    }
};

function binomial(n,p) {
    return Array(Math.max(n+1)).fill().map(
        (x,k) => factorial(n)*Math.pow(p,k)*Math.pow(1-p,n-k)/(factorial(k)*factorial(n-k)));
};

function normal(mu,sigma,precision) {
    return Array(8*sigma*precision+1).fill().map(
        (x,i) => Math.exp(-(Math.floor(mu-4*sigma)+i/precision-mu)*(Math.floor(mu-4*sigma)+i/precision-mu)/(2*sigma*sigma))/Math.sqrt(2*3.14159265359*sigma));
}

function getX(type,lb,up,precision){
    switch (type){
    case 0:
        return Array(precision+1).fill().map((x,i)=>lb+i*(up-lb)/precision);
        break;
    default:
        return Array(up-lb+1).fill().map((x,i)=>lb+i);
    }
}

var graphData = {
    labels: getX(0,-4,4,80),
    datasets :[
        {
            label:'Normal istribution',
            data:normal(0,1,10),
            type: 'line',
            borderColor: 'rgba(230,76,60,1)',
            backgroundColor: 'rgba(230,76,60,0.1)',
            showLine: true
        }]
};
var graphTitle = 'Distribution';
window.onload = function(){
var ctx = document.getElementById("myChart").getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: graphData,
        options:{
            responsive: true,
            title: {
                display: true,
                text: graphTitle
            }
        }
    });
};

document.getElementById('go').addEventListener('click', function() {
    var distrib = document.querySelector('.distrib:checked').value;
    switch (distrib) {
    case "normal":
        var mu = parseFloat(document.getElementById('mu').value);
        var sigma = parseFloat(document.getElementById('sigma').value);
        graphData.labels = getX(0,mu-4*sigma,mu+4*sigma,80*sigma);
        graphData.datasets[0].data = normal(mu,sigma,10);
        graphData.datasets[0].label = 'Normal distribution';
        graphData.datasets[0].showLine = true;
        break;
    case "poisson":
        var lambda = parseFloat(document.getElementById('lambda').value);
        graphData.labels = getX(1,0,Math.max(10,Math.round(5*lambda)),1);
        graphData.datasets[0].data = poisson(lambda);
        graphData.datasets[0].label = 'Poisson distribution';
        graphData.datasets[0].showLine = false;
        break;
    case "binomial":
        var n = parseInt(document.getElementById('n').value),
        p = parseFloat(document.getElementById('p').value);
        if (p <= 1) {
            graphData.labels = getX(1,0,n,1);
            graphData.datasets[0].data = binomial(n,p);
            graphData.datasets[0].label = 'Binomial distribution';
            graphData.datasets[0].showLine = false;
        } else {
            window.alert('p must be inferior or equal to 1');
        }
        break;
    case "uniform":
        var a = parseFloat(document.getElementById('a').value),
        b = parseFloat(document.getElementById('b').value);
        graphData.labels = getX(1,a,b,1);
        graphData.datasets[0].data = uniform(a,b);
        graphData.datasets[0].label = 'Uniform distribution';
        graphData.datasets[0].showLine = false;
        break;
    }
    window.myBar.update();
});
