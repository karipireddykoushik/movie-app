// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  // Define state for filters in the parent component
  const [filters, setFilters] = useState({});

  // Define the function to handle filter changes in the parent component
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      {/* Pass the handleFilterChange function as a prop to the ChildComponent */}
      <ChildComponent onFilterChange={handleFilterChange} />
    </div>
  );
};

export default ParentComponent;
