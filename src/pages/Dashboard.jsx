import { useSelector } from "react-redux";
// import ProfileOverview from "../components/ProfileOverview";
import UserTable from "../components/UserTable";
import { selectAllUsersExceptCurrent } from "../features/auth/authSlice";
import React from "react";
import DashBoardBarChart from "../components/DashBoardBarChart";
import UserDataByCountry from "../components/UserDataByCountry";

const Dashboard = () => {
    const users = useSelector(selectAllUsersExceptCurrent);

    const columns = React.useMemo(
        () => [
            {
                Header: "Name",
                accessor: (row) => `${row.firstName} ${row.lastName}`,
            },
            {
                Header: "Email",
                accessor: "email",
            },
            {
                Header: "Age",
                accessor: "age", // Example, replace with actual accessor for age
            },
            {
                Header: "Gender",
                accessor: "gender", // Example, replace with actual accessor for gender
            },
            {
                Header: "Country",
                accessor: "country", // Example, replace with actual accessor for country
            },
        ],
        []
    );
    return (
        <>
            <div className="flex flex-col min-h-screen gap-4 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* <ProfileOverview /> */}
                    <UserDataByCountry users={users} />

                    {/* <Statistics data={statisticsData} /> */}
                    <DashBoardBarChart users={users} />
                </div>
                <div className="flex flex-col gap-4">
                    <UserTable columns={columns} data={users} actions={false} />
                    {/* <UserDataByCountry users={users} /> */}
                </div>
            </div>
        </>
    );
};

export default Dashboard;
