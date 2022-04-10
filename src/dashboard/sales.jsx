import React from "react";
import CanvasJSReact from '../charts/canvasjs.react';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SalesChart = () => {

    const ColumnChart = {
        title: {
            text: "Monthly Sales",
            horizontalAlign: "left",
            fontSize: 24,
            fontColor: "#FFFFFF",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "bold",
            padding: 20
        },
        height: 200,
        toolTip:{
            enabled: false
        },
        backgroundColor: "#D81B60",
        data: [
        {
            type: "column",
            color: "#E91E63",
            dataPoints: [
                { label: "jan",  y: 32  },
                { label: "feb", y: 31  },
                { label: "mar", y: 30 },
                { label: "apr",  y: 29  },
                { label: "may",  y: 30  },
                { label: "jun",  y: 29  },
                { label: "jul", y: 31  },
                { label: "aug", y: 30  },
                { label: "sep",  y: 31  },
                { label: "oct",  y: 32  },
                { label: "nov",  y: 31  },
                { label: "dec",  y: 30  }
            ]
        }
        ],
        axisY: [
            {
                lineThickness: 0,
				gridThickness: 0,
				tickLength: 0,
				labelFormatter: function () {
					return "";
				},
            }
        ],
        axisX: [
            {
                lineThickness: 0,
                tickLength: 0,
                labelFontColor: "white",
                lineColor: "#D81B60",
            }
        ]
    }

    return(
        <div>
            <CanvasJSChart options = {ColumnChart} />
        </div>
    )
}

export default SalesChart;