function getRandonNumber(limit = 100) {
  return Math.floor(Math.random() * limit);
}

export function generateHighChartData(type = "pie") {
  if (type === "pie") {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Browser market shares in January, 2018",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      series: [
        {
          name: "Brands",
          colorByPoint: true,
          data: [
            {
              name: "Chrome",
              y: getRandonNumber(),
            },
            {
              name: "Internet Explorer",
              y: getRandonNumber(),
            },
            {
              name: "Firefox",
              y: getRandonNumber(),
            },
            {
              name: "Edge",
              y: getRandonNumber(),
            },
          ],
        },
      ],
    };
  } else if (type === "line") {
    return {
      title: {
        text: "Solar Employment Growth by Sector, 2010-2016",
      },

      subtitle: {
        text: "Source: thesolarfoundation.com",
      },

      yAxis: {
        title: {
          text: "Number of Employees",
        },
      },

      xAxis: {
        accessibility: {
          rangeDescription: "Range: 2010 to 2017",
        },
      },

      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 2010,
        },
      },

      series: [
        {
          name: "Installation",
          data: [
            getRandonNumber(100000),
            getRandonNumber(100000),
            getRandonNumber(100000),
            getRandonNumber(100000),
            getRandonNumber(100000),
          ],
        },
        {
          name: "Manufacturing",
          data: [
            getRandonNumber(100000),
            getRandonNumber(100000),
            getRandonNumber(100000),
            getRandonNumber(100000),
            getRandonNumber(100000),
          ],
        },
        {
          name: "Other",
          data: [
            getRandonNumber(100000),
            getRandonNumber(100000),
            getRandonNumber(100000),
            getRandonNumber(100000),
            getRandonNumber(100000),
          ],
        },
      ],
    };
  } else if (type === "bar") {
    return {
      chart: {
        type: "bar",
      },
      title: {
        text: "Historic World Population by Region",
      },
      xAxis: {
        categories: ["Africa", "America", "Asia", "Europe", "Oceania"],
        title: {
          text: null,
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: "Population (millions)",
          align: "high",
        },
        labels: {
          overflow: "justify",
        },
      },
      tooltip: {
        valueSuffix: " millions",
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "top",
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: "#FFFFFF",
        shadow: true,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "Year 1800",
          data: [
            getRandonNumber(1000),
            getRandonNumber(1000),
            getRandonNumber(1000),
            getRandonNumber(1000),
            getRandonNumber(1000),
          ],
        },
        {
          name: "Year 1900",
          data: [
            getRandonNumber(1000),
            getRandonNumber(1000),
            getRandonNumber(1000),
            getRandonNumber(1000),
            getRandonNumber(1000),
          ],
        },
        {
          name: "Year 2000",
          data: [
            getRandonNumber(1000),
            getRandonNumber(1000),
            getRandonNumber(1000),
            getRandonNumber(1000),
            getRandonNumber(1000),
          ],
        },
        {
          name: "Year 2016",
          data: [
            getRandonNumber(1000),
            getRandonNumber(1000),
            getRandonNumber(1000),
            getRandonNumber(1000),
            getRandonNumber(1000),
          ],
        },
      ],
    };
  } else {
    const yearData = new Array(78).fill(1);
    return {
      chart: {
        type: "area",
      },
      title: {
        text: "US and USSR nuclear stockpiles",
      },
      xAxis: {
        allowDecimals: false,
        labels: {
          formatter: function () {
            return this.value; // clean, unformatted number for year
          },
        },
        accessibility: {
          rangeDescription: "Range: 1940 to 2017.",
        },
      },
      yAxis: {
        title: {
          text: "Nuclear weapon states",
        },
        labels: {
          formatter: function () {
            return this.value / 1000 + "k";
          },
        },
      },
      tooltip: {
        pointFormat:
          "{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}",
      },
      plotOptions: {
        area: {
          pointStart: 1940,
          marker: {
            enabled: false,
            symbol: "circle",
            radius: 2,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
        },
      },
      series: [
        {
          name: "USA",
          data: yearData.map(() => getRandonNumber(10000)),
        },
        {
          name: "USSR/Russia",
          data: yearData.map(() => getRandonNumber(10000)),
        },
      ],
    };
  }
}
