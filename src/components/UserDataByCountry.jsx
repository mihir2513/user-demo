import ReactECharts from "echarts-for-react";
import PropTypes from "prop-types";
import NoDataFound from "./NoDataFound";

const UserDataByCountry = ({ users }) => {
    const transformUserDataByCountry = (users) => {
        const countryCount = users.reduce((acc, user) => {
            acc[user.country] = (acc[user.country] || 0) + 1;
            return acc;
        }, {});

        return Object.keys(countryCount).map((country) => ({
            name: country,
            value: countryCount[country],
        }));
    };

    const graphData = transformUserDataByCountry(users);

    const chartOptions = {
        tooltip: {
            trigger: "item",
        },
        legend: {
            top: "5%",
            left: "center",
            textStyle: {
                color: "#fff",
            },
        },
        series: [
            {
                name: "Access From",
                type: "pie",
                radius: ["40%", "70%"],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: "#fff",
                    borderWidth: 2,
                },
                label: {
                    show: false,
                    position: "center",
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 20, // Adjust font size for responsiveness
                        fontWeight: "bold",
                    },
                },
                labelLine: {
                    show: false,
                },
                data: graphData,
                // Custom color theme
                color: ["#4A90E2", "#50E3C2", "#B8E986", "#F5A623", "#D0021B", "#BD10E0", "#9013FE"],
            },
        ],
    };

    return (
        <div className="p-6 bg-gray-800 rounded-lg overflow-hidden text-white shadow-md">
            <h4 className="text-2xl font-semibold mb-4">User&apos;s Distribution by Country</h4>
            {graphData && graphData.length > 0 ? (
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

UserDataByCountry.propTypes = {
    users: PropTypes.array.isRequired,
};

export default UserDataByCountry;
