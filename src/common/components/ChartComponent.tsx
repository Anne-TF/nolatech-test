import Chart from "react-apexcharts";

export interface ISerie {
    name: string;
    data: number[];
}

interface Props {
    id: string;
    series: ISerie[] | number[];
    categories: number[];
    colors: string[];
    labels?: string[];
    type: | "line"
        | "area"
        | "bar"
        | "pie"
        | "donut"
        | "radialBar"
        | "scatter"
        | "bubble"
        | "heatmap"
        | "candlestick"
        | "boxPlot"
        | "radar"
        | "polarArea"
        | "rangeBar"
        | "rangeArea"
        | "treemap";
}

export const ChartComponent = ({ id, series, categories, colors, type, labels = [] }: Props) => {
    const options = {
        chart: {
            id,
        },
        xaxis: {
            categories,
        },
        colors,
        grid: {
            borderColor: '#38393c',
            clipMarkers: false,
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        labels,
    };

    return (
        <Chart
            options={options}
            series={series}
            type={type}
            style={{ maxHeight: '100px !important' }}
            width="100%"
        />
    );
};
export default ChartComponent;