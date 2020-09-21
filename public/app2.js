function fetchAndVisualizeData1() {
    fetch("./data2.json")
      .then(r => r.json())
      .then(visualizeData1);
  }
  
  fetchAndVisualizeData1();
  
  function visualizeData1(data) {
    visualizeMatchesPlayedPerYear1(data.extraRunsConceded);
    return;
  }
  
  function visualizeMatchesPlayedPerYear1(extraRunsConceded) {
    const seriesData = [];
    for (let team in extraRunsConceded) {
      seriesData.push([team, extraRunsConceded[team]]);
    }
  
    Highcharts.chart("extra-runs-conceded", {
      chart: {
        type: "column"
      },
      title: {
        text: "3. Extra Runs Conceded By Each Team in 2016"
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
          text: "Runs"
        }
      },
      series: [
        {
          name: "Teams",
          data: seriesData
        }
      ]
    });
  }
  