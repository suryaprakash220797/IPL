
function fetchAndVisualizeData3() {
    fetch("./data4.json")
      .then(r => r.json())
      .then(visualizeData3);
  }
  
  fetchAndVisualizeData3();
  
  function visualizeData3(data) {
    visualizeMatchesPlayedPerYear3(data.matchesWonByRcb);
    return;
  }
  
  function visualizeMatchesPlayedPerYear3(matchesWonByRcb) {
    const seriesData = [];
    for (let year in matchesWonByRcb) {
      seriesData.push([year, matchesWonByRcb[year]]);
    }
  
    Highcharts.chart("matches-won-by-rcb", {
      chart: {
        type: "column"
      },
      title: {
        text: "5. Matches Won By RCB In Each Year"
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
          text: "Matches"
        }
      },
      series: [
        {
          name: "Year",
          data: seriesData
        }
      ]
    });
  }
  
  