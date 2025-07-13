import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className='w-64 bg-gray-100 p-4'>
      <h2 className='font-semibold pb-2 text-xl'>Filter by</h2>
      <div className="pb-4">
        <h3 className='font-semibold pb-2'>Categories</h3>
        <ul>
          <li><input type="checkbox" /> Electronics</li>
          <li><input type="checkbox" /> Fashion</li>
          <li><input type="checkbox" /> Home & Kitchen</li>
          <li><input type="checkbox" /> Sports</li>
        </ul>
      </div>
      <div className="pb-4">
        <h3 className='font-semibold pb-2'>Price Range</h3>
        <input type="range" min="0" max="1000" />
      </div>
      <div className="filter-rating">
        <h3 className='font-semibold pb-2'>Rating</h3>
        <ul>
          <li><input type="checkbox" /> 4 stars & up</li>
          <li><input type="checkbox" /> 3 stars & up</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;