import React, { Component } from "react";
import CanvasJsReact from '../charts/canvasjs.react';
let CanvasJSChart = CanvasJsReact.CanvasJSChart;

class OrderChart extends Component {
    render() {
        const SplineChart = {
			title:{
				text: "New Orders",
				horizontalAlign: "left",
				fontSize: 24,
				fontColor: "#FFFFFF",
				fontFamily: "Roboto, sans-serif",
				fontWeight: "bold",
				padding: 20
			},
			height: 170,
			toolTip:{
				enabled: false
			},
			animationEnabled: true,
			backgroundColor: "#8E24AA",
			axisX: {
				// valueFormatString: "MMM"
				// lineDashType: "none"
				lineThickness: 0,
				gridThickness: 0,
				tickLength: 0,
				labelFormatter: function () {
					return "";
				}
			},
			axisY: {
				// title: "Sales (in USD)",
				// prefix: "$"
				lineThickness: 0,
				gridThickness: 0,
				tickLength: 0,
				labelFormatter: function () {
					return "";
				}
			},
			data: [{
				type: "spline",
				dataPoints: [
					{ x: new Date(2017, 0), y: 28260 },
					{ x: new Date(2017, 1), y: 23980 },
					{ x: new Date(2017, 2), y: 35800 },
					{ x: new Date(2017, 3), y: 30400 },
					{ x: new Date(2017, 4), y: 31260 },
					{ x: new Date(2017, 5), y: 29900 },
					{ x: new Date(2017, 6), y: 32000 },
				],
				markerSize: 10,
				markerColor: "#FFFFFF",
				markerBorderColor: "#00aaff",
				markerBorderThickness: 2
			}]
		}

        return(
            <div>
                <CanvasJSChart options = {SplineChart} />
            </div>
        )
    }
}

export default OrderChart;