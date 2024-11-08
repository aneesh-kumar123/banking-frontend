import React from 'react';
// import './SizeBar.css'; 

const SizeBar = ({ setLimit}) => {
  console.log(setLimit)
    const handleSelectChange = (event) => {
        const selectedLimit = parseInt(event.target.value);
        setLimit(selectedLimit);
        
    };

    return (
        <div className="items-per-page-container">
            <label htmlFor="itemsPerPage"></label>
            <select id="itemsPerPage" onChange={handleSelectChange}>
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="12">12</option>
            </select>
        </div>
    );
};

export default SizeBar;