import React from "react";
import CanvasJSReact from '../charts/canvasjs.react';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const WebSiteChart = () => {

    const CombinedChart = {
		height: 200,
		width: 400,
    animationEnabled: true,
	theme: "light2",

	title: {
		text: "Website Analysis",
        horizontalAlign: "left",
        fontSize: 24,
        fontColor: "#000",
        fontFamily: "Roboto, sans-serif",
        fontWeight: "bold",
        padding: 20
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
	},
	data: [
	{
		type: "area",
		name: "amt",
		showInLegend: true,
		dataPoints: [
			{ label: "Page A", y: 1400 },
			{ label: "Page B", y: 1506 },
			{ label: "Page C", y: 989 },
			{ label: "Page D", y: 1228},
			{ label: "Page E", y: 1100 },
			{ label: "Page F", y: 1700 }
		],
		fillOpacity: .3
	},
	{
		type: "column",
		name: "pv",
		showInLegend: true,
		dataPoints: [
			{ label: "Page A", y: 300 },
			{ label: "Page B", y: 600 },
			{ label: "Page C", y: 1100 },
			{ label: "Page D", y: 700},
			{ label: "Page E", y: 1300 },
			{ label: "Page F", y: 1700 }
		]
	}, 
	
	{
		type: "line",
		name: "uv",
		markerBorderColor: "white",
		markerBorderThickness: 2,
		showInLegend: true,
		dataPoints: [
			{ label: "Page A", y: 590 },
			{ label: "Page B", y: 868 },
			{ label: "Page C", y: 1397 },
			{ label: "Page D", y: 1480},
			{ label: "Page E", y: 1520 },
			{ label: "Page F", y: 1400 }
		]
	}]
    }

    return(
        <div>
            <CanvasJSChart options = {CombinedChart} />
        </div>
    )
}

export default WebSiteChart;