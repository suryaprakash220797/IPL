
function fetchAndVisualizeData2() {
    fetch("./data3.json")
      .then(r => r.json())
      .then(visualizeData2);
  }
  
  fetchAndVisualizeData2();
  
  function visualizeData2(data) {
    visualizeMatchesPlayedPerYear2(data.economicBowlers);
    return;
  }
  
  function visualizeMatchesPlayedPerYear2(economicBowlers) {
    const seriesData = [];
    for (let bowler in economicBowlers) {
      seriesData.push([bowler, economicBowlers[bowler]]);
    }
  
    Highcharts.chart("economic-bowlers", {
      chart: {
        type: "column"
      },
      title: {
        text: "4. Top Economic Bowlers In 2015 Season"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Economy"
        }
      },
      series: [
        {
          name: "Bowlers",
          data: seriesData
        }
      ]
    });
  }
  
  