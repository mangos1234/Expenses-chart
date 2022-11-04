var xValues = [];
var yValues = [];
var barColours = ["hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)"];
const d = new Date();
var day = d.getDay() - 1;
barColours[day] = "hsl(186, 34%, 60%)";

fetch('./data.json')
.then(response => response.json())
.then(data => {
  for(var x = 0; x < 7; x++){
    xValues.push(data[x].day);
    yValues.push(data[x].amount);

    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColours,
          data: yValues
        }],
        
      },
      options: {
        legend: {display: false},
        title: {display: false},
        scales: {
          yAxes: [{
            scaleLabel: {
              display: false
            },
            ticks:{
              display: false
            },
            gridLines:{
              color: "rgba(0, 0, 0, 0)",
              drawBorder: false,
              display: false,
            },
          }],
          xAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            }
          }],
        },
      }
    });
  }
});