import { useTable, useSortBy, useFilters } from "react-table";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import PropTypes from "prop-types";
import { useState } from "react";
import AddDialog from "./AddDialog";

const UserTable = ({ columns, data, actions }) => {
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

    const openAddDialog = () => {
        setIsAddDialogOpen(true);
    };

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data,
        },
        useFilters,
        useSortBy
    );

    return (
        <div className="p-6 bg-gray-800 rounded-lg overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-2xl font-semibold text-white">Users</h2>
                    {/* <p className="text-gray-400">
                        A list of all the users .
                    </p> */}
                </div>
                {actions && (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                        onClick={openAddDialog}
                    >
                        Add User
                    </button>
                )}
            </div>
            <div className="overflow-x-auto">
                <table {...getTableProps()} className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-700">
                        {headerGroups.map((headerGroup, index) => (
                            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column, columnIndex) => (
                                    <th
                                        key={columnIndex}
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                                    >
                                        <div className="flex items-center">
                                            {column.render("Header")}
                                            {column.isSorted ? (
                                                column.isSortedDesc ? (
                                                    <FaSortDown className="ml-2" />
                                                ) : (
                                                    <FaSortUp className="ml-2" />
                                                )
                                            ) : (
                                                <FaSort className="ml-2" />
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()} className="bg-gray-800 divide-y divide-gray-700">
                        {rows.map((row, index) => {
                            prepareRow(row);
                            return (
                                <tr key={index} {...row.getRowProps()}>
                                    {row.cells.map((cell, cellIndex) => (
                                        <td
                                            key={cellIndex}
                                            {...cell.getCellProps()}
                                            className="px-6 py-4 text-sm text-gray-300"
                                        >
                                            {cell.render("Cell")}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <AddDialog isOpen={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)} />
        </div>
    );
};

UserTable.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    actions: PropTypes.bool.isRequired,
};

export default UserTable;
