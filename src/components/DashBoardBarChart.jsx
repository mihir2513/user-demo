import ReactECharts from "echarts-for-react";
import PropTypes from "prop-types";
import NoDataFound from "./NoDataFound";

const DashBoardBarChart = ({ users }) => {
    const transformUserListToNameAgeObject = (users) => {
        const nameAgeObject = {};
        users.forEach((user) => {
            const fullName = `${user.firstName} ${user.lastName}`;
            nameAgeObject[fullName] = user.age;
        });
        return nameAgeObject;
    };

    const graphData = transformUserListToNameAgeObject(users);

    const chartOptions = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        legend: {},
        grid: {
            top: "3%",
            left: "3%",
            right: "1%",
            bottom: "3%",
            containLabel: true,
        },
        yAxis: {
            type: "value",
            boundaryGap: [0, 0.01],
            splitLine: {
                show: false,
            },
        },
        xAxis: {
            type: "category",
            data: Object.keys(graphData),
            axisLabel: {
                color: "#FFFFFF",
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
        series: [
            {
                type: "bar",
                data: Object.values(graphData),
                showBackground: true,
                backgroundStyle: {
                    color: "#112038", // Example background color
                },
                label: {
                    show: true,
                    precision: 1,
                    position: "right",
                    valueAnimation: true,
                    color: "#FFFFFF",
                },
                itemStyle: {
                    borderRadius: [4, 4, 4, 4],
                    color: (params) => {
                        const colors = [
                            "#4A90E2",
                            "#50E3C2",
                            "#B8E986",
                            "#F5A623",
                            "#D0021B",
                            "#BD10E0",
                            "#9013FE",
                            "#4A90E2",
                        ];
                        return colors[params.dataIndex % colors.length];
                    },
                },
            },
        ],
    };

    return (
        <div className="p-6 bg-gray-800 rounded-lg overflow-x-auto text-white shadow-md">
            <h4 className="text-2xl font-semibold mb-4">User&apos;s Age</h4>
            {graphData && Object.keys(graphData).length > 0 ? (
                <div style={{ width: "100%", height: "400px" }}>
                    <ReactECharts
                        option={chartOptions}
                        style={{ width: "100%", height: "100%" }}
                        notMerge={true}
                        lazyUpdate={true}
                    />
                </div>
            ) : (
                <NoDataFound />
            )}
        </div>
    );
};

DashBoardBarChart.propTypes = {
    users: PropTypes.array.isRequired,
};

export default DashBoardBarChart;
