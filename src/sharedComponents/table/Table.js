import React from 'react';
// import './Table.css'; // Import the CSS file
import Pagination from './Pagination';
import SizeBar from './SizeBar';

const Table = ({ data, setLimit, page, setPage, totalPages }) => {
    const headers = Object.keys(data[0]);
    const rows = data.map(item => Object.values(item));

    return (
        <div className="table-container">
            <div className="table-header-controls">
                <SizeBar setLimit={setLimit}  />
                <Pagination page={page} setPage={setPage} totalPages={totalPages} />
            </div>
            <table>
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;