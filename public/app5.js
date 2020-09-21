
function fetchAndVisualizeData5() {
    fetch("./data5.json")
      .then(r => r.json())
      .then(visualizeData5);
  }
  
  fetchAndVisualizeData5();
  
  function visualizeData5(data) {
    visualizeMatchesPlayedPerYear5(data.matchesWonByEachTeam1);
    return;
  }
  
  function visualizeMatchesPlayedPerYear5(matchesWonByEachTeam1) {
    const seriesData = [];
    for (let team in matchesWonByEachTeam1) {
      seriesData.push([team, matchesWonByEachTeam1[team]]);
    }
  
    Highcharts.chart("matches-won-by-each-team1", {
      chart: {
        type: "column"
      },
      title: {
        text: "2. Number Of Matches Won By Each Team"
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
          name: "Team",
          data: seriesData
        }
      ]
    });
  }
  
  