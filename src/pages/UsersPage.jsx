/* eslint-disable react/prop-types */
import React, { useCallback, useState } from "react";
import UserTable from "../components/UserTable";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsersExceptCurrent } from "../features/auth/authSlice";
import { deleteUser } from "../features/user/userSlice";
import { BackspaceIcon, ViewfinderCircleIcon } from "@heroicons/react/16/solid";
import ViewDialog from "../components/ViewDialog";

const UsersPage = () => {
    const dispatch = useDispatch();

    const users = useSelector(selectAllUsersExceptCurrent);

    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const [userId, setUserId] = useState("");

    const openAddDialog = () => {
        setIsAddDialogOpen(true);
    };

    const handleDelete = useCallback(
        (userId) => {
            dispatch(deleteUser(userId));
        },
        [dispatch]
    );

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
            {
                Header: "Actions",
                accessor: "actions",
                Cell: ({ row }) => (
                    <div className="flex gap-2">
                        <BackspaceIcon
                            className="text-red-500 cursor-pointer hover:underline size-8"
                            onClick={() => handleDelete(row.original.id)}
                        />
                        <ViewfinderCircleIcon
                            className=" cursor-pointer size-8"
                            onClick={() => {
                                openAddDialog();
                                setUserId(row.original.id);
                            }}
                        />
                    </div>
                    // <button
                    //     className="text-red-500 hover:underline"
                    //     onClick={() => handleDelete(row.original.id)}
                    // >
                    // </button>
                ),
            },
        ],
        [handleDelete]
    );
    return (
        <>
            <UserTable columns={columns} data={users} actions={true} />
            {userId && (
                <ViewDialog
                    userId={userId}
                    isOpen={isAddDialogOpen}
                    onClose={() => {
                        setIsAddDialogOpen(false);
                        setUserId("");
                    }}
                />
            )}
        </>
    );
};

export default UsersPage;
