import React from 'react';
import Pagination from './Pagination';

const Table = (props) => {
    
    console.log(props);

    
    const headers = Object.keys(props.data[0]); 

    const rows = props.data.map(item => Object.values(item)); 

    return (
        
      <div>
        <Pagination></Pagination>
        <table border="1">
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