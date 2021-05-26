google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
['Version','Android 7 Chrome 72','Android 6 Chrome 46','Android Phone','Google AdsBot','Google AdsBot Mobile','GoogleBot Mobile Android','GoogleBot','Hacker SQL','Hacker ShellShock','iPad','iPhone','iPhone FacebookApp','Linux Chrome 72','Win 10 Chrome 51','Win 10 Edge13','Win 7 IE11','Win 10 IE 11'],
['v4.0',0.487,0.511,0.660,0.192,0.318,0.543,0.222,0.172,0.154,0.293,0.288,0.580,0.265,0.262,0.278,0.316,0.311],
['v4.1',0.477,0.500,0.641,0.186,0.313,0.531,0.218,0.168,0.150,0.288,0.282,0.567,0.262,0.258,0.275,0.311,0.305],
['v4.2',0.497,0.520,0.668,0.195,0.325,0.552,0.228,0.176,0.157,0.299,0.295,0.588,0.273,0.270,0.287,0.326,0.320],
['v4.3',0.542,0.566,0.720,0.218,0.353,0.600,0.250,0.196,0.175,0.325,0.320,0.616,0.301,0.296,0.314,0.350,0.342],
['v4.4',0.504,0.528,0.663,0.208,0.332,0.563,0.239,0.189,0.171,0.306,0.301,0.581,0.283,0.279,0.295,0.330,0.325],
['v4.5',0.511,0.534,0.672,0.214,0.335,0.565,0.244,0.195,0.176,0.310,0.304,0.583,0.286,0.282,0.298,0.337,0.331],
['v5.0',0.528,0.553,0.699,0.216,0.343,0.585,0.249,0.197,0.179,0.317,0.312,0.601,0.293,0.289,0.306,0.347,0.341],
['v5.2',0.588,0.614,0.762,0.253,0.396,0.652,0.286,0.228,0.210,0.362,0.367,0.665,0.338,0.335,0.354,0.392,0.383],
['v5.3',0.564,0.586,0.732,0.237,0.381,0.623,0.272,0.217,0.197,0.347,0.350,0.641,0.323,0.318,0.336,0.374,0.364],
['v5.4',0.586,0.606,0.754,0.242,0.389,0.645,0.279,0.221,0.199,0.353,0.358,0.656,0.328,0.325,0.343,0.379,0.371],
['v5.5',0.773,0.787,0.934,0.314,0.464,0.817,0.347,0.289,0.266,0.425,0.423,0.740,0.401,0.397,0.415,0.452,0.439],
['v5.6',0.396,0.412,0.551,0.138,0.276,0.449,0.174,0.120,0.098,0.241,0.247,0.531,0.224,0.218,0.235,0.271,0.266],
['v5.7',0.421,0.437,0.579,0.155,0.295,0.476,0.191,0.136,0.115,0.259,0.265,0.554,0.241,0.235,0.252,0.292,0.289],
['v5.8',0.383,0.399,0.531,0.138,0.274,0.438,0.173,0.118,0.096,0.238,0.244,0.513,0.220,0.215,0.233,0.265,0.261],
['v5.9',0.350,0.378,0.527,0.090,0.223,0.418,0.129,0.055,0.022,0.177,0.198,0.478,0.171,0.169,0.187,0.224,0.211],
['v5.10',0.351,0.377,0.527,0.091,0.225,0.416,0.131,0.056,0.023,0.177,0.197,0.474,0.173,0.171,0.188,0.222,0.209],
['v5.11',0.346,0.376,0.517,0.095,0.227,0.416,0.135,0.058,0.025,0.181,0.200,0.473,0.177,0.174,0.192,0.223,0.210],
['v5.12',0.362,0.394,0.543,0.099,0.236,0.434,0.138,0.060,0.026,0.186,0.205,0.491,0.184,0.182,0.203,0.234,0.219],
['v5.13',0.340,0.369,0.506,0.089,0.224,0.411,0.135,0.059,0.024,0.176,0.194,0.470,0.172,0.170,0.189,0.217,0.205],
['v5.14',0.331,0.357,0.500,0.080,0.215,0.401,0.120,0.046,0.020,0.167,0.188,0.454,0.162,0.162,0.177,0.208,0.197],
['v5.14.1',0.334,0.360,0.502,0.081,0.215,0.403,0.121,0.046,0.021,0.174,0.183,0.462,0.162,0.159,0.178,0.209,0.198],
['v5.15',0.324,0.350,0.490,0.080,0.213,0.395,0.119,0.050,0.022,0.166,0.177,0.450,0.159,0.157,0.175,0.204,0.193],
['v5.16',0.350,0.376,0.519,0.088,0.235,0.421,0.128,0.053,0.023,0.188,0.197,0.486,0.176,0.174,0.192,0.224,0.211],
['v5.17',0.341,0.366,0.508,0.086,0.229,0.414,0.124,0.052,0.023,0.180,0.191,0.472,0.171,0.169,0.188,0.216,0.204],
['v5.18',0.373,0.394,0.540,0.103,0.246,0.440,0.143,0.064,0.029,0.193,0.209,0.504,0.187,0.187,0.207,0.240,0.226],
['v5.19',0.367,0.389,0.536,0.100,0.247,0.438,0.142,0.062,0.029,0.195,0.209,0.505,0.187,0.185,0.206,0.239,0.226],
['v5.20',0.378,0.396,0.546,0.101,0.249,0.445,0.143,0.064,0.031,0.195,0.211,0.510,0.190,0.187,0.208,0.245,0.232],
['v5.21',0.373,0.404,0.546,0.100,0.251,0.447,0.143,0.064,0.031,0.198,0.211,0.513,0.190,0.189,0.209,0.244,0.230],
['v5.22',0.377,0.403,0.555,0.104,0.255,0.450,0.145,0.066,0.032,0.199,0.214,0.528,0.192,0.193,0.214,0.247,0.235],
['v5.23',0.375,0.400,0.556,0.105,0.253,0.447,0.146,0.066,0.032,0.198,0.214,0.518,0.192,0.192,0.214,0.245,0.231],
    ]);
    var options = {
        title: 'Yauaa Performance (uncached speed in milliseconds)',
        chartArea:{ left: 50, right:50 , top: 50, bottom:300},
        legend: { position: 'top', maxLines:4 }
    };
    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    chart.draw(data, options);
}
