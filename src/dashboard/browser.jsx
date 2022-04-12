import React, { Component } from "react";
import CanvasJsReact from '../charts/canvasjs.react';
let CanvasJSChart = CanvasJsReact.CanvasJSChart;

class BrowserChart extends Component {

    render() {

        const DoughnetChart = {
			height: 200,
			animationEnabled: true,
			title: {
				text: "Browser Usage",
				horizontalAlign: "left",
				fontSize: 24,
				fontColor: "#000",
				fontFamily: "Roboto, sans-serif",
				fontWeight: "bold",
				padding: 20
			},
			// subtitles: [{
			// 	text: "71% Positive",
			// 	verticalAlign: "center",
			// 	fontSize: 24,
			// 	dockInsidePlotArea: true
			// }],
			data: [{
				type: "doughnut",
				showInLegend: true,
				legendMarkerType: "circle",
				legendMarkerSize: 50,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
                    { name: "Chrome", y: 45, color:"rgb(0, 172, 193)" },
					{ name: "Firefox", y: 33.5, color:"rgb(216, 27, 96)" },
					{ name: "Safari", y: 33.5, color:"rgb(142, 36, 170)" }
				]
			}]
		}

        return(
            <div>
                <CanvasJSChart options = {DoughnetChart} />
            </div>
        )
    }
}

export default BrowserChart;