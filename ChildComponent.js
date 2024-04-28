// ChildComponent.js
import React, { useState } from 'react';

const ChildComponent = ({ onFilterChange }) => {
  // Define state for filters in the child component if needed
  const [filters, setFilters] = useState({});

  // Define the function to handle input changes in the child component
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newFilters = { ...filters, [name]: value };
    
    // Call the onFilterChange function passed down from the parent
    onFilterChange(newFilters);
  };

  return (
    <div>
      {/* Input fields in the child component */}
      <input type="text" name="language" onChange={handleInputChange} />
      {/* Other input fields */}
    </div>
  );
};

export default ChildComponent;
