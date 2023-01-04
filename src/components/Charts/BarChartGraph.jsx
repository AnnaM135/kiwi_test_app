import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);
const dataSource = {
  chart: {
    caption: "",
    yaxisname: "",
    showvalues: "1",
    numberprefix: "%",
    theme: "fusion",
    palettecolors: "937EC1",
    bgColor: "#212834",
    canvasbgAlpha: "0",
    showCanvasBase: "0",
    divlineColor: "#212834",
    rotateLabels: "0",
    labelDisplay: "wrap",
    valueFontColor: "#fff",
    yAxisValueFontColor: "#212834",
    labelFontColor: "#fff",
    showBorder: '0',
  },
  data: [
    {
      label: "Gate.io",
      value: "25",
    },
    {
      label: "Coinbase",
      value: "76",
    },
    {
      label: "Binance",
      value: "39",
    },
    {
      label: "Huobi",
      value: "52",
    },
  ],
};

export function BarChartGraph() {
  return (
    <ReactFusioncharts
      type="column3d"
      width="100%"
      height="20%"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
}
