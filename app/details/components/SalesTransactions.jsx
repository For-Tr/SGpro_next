import React, { useState } from 'react';


const SortIcon = ({ direction }) => (
  <div className="inline-flex flex-col ml-1">
    <svg 
      className={`w-2 h-2 mb-0.5 ${direction === 'asc' ? 'text-white' : 'text-white/50'}`} 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>
    <svg 
      className={`w-2 h-2 ${direction === 'desc' ? 'text-white' : 'text-white/50'}`} 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </svg>
  </div>
);

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
  }).format(value);
};


export default function SalesTransactions( {transactions} ) {
  const [sortConfig, setSortConfig] = useState({
    key: 'date',
    direction: 'desc'
  });
  const [sortedData, setSortedData] = useState([...transactions]);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sorted = [...sortedData].sort((a, b) => {
      if (key === 'date') {
        return direction === 'asc' 
          ? new Date(a[key]) - new Date(b[key])
          : new Date(b[key]) - new Date(a[key]);
      }
      
      if (['unit_area_sqft', 'transaction.price_psf', 'price'].includes(key)) {
        return direction === 'asc' 
          ? a[key] - b[key]
          : b[key] - a[key];
      }

      // String comparison for other fields
      return direction === 'asc'
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key]);
    });

    setSortedData(sorted);
    setSortConfig({ key, direction });
  };

  const TableHeader = ({ children, sortKey }) => (
    <th 
      className="px-3 py-3 text-left text-sm font-medium text-white bg-[#0052FF] cursor-pointer select-none"
      onClick={() => handleSort(sortKey)}
    >
      <div className="flex items-center">
        {children}
        <SortIcon 
          direction={sortConfig.key === sortKey ? sortConfig.direction : null} 
        />
      </div>
    </th>
  );

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold">Sales Transactions</h2>
          <p className="text-sm text-gray-500">Showing 1 - 10 of 53 Filter Match</p>
        </div>
        <button className="flex items-center px-3 py-1 text-sm border rounded-lg hover:bg-gray-50">
          Filter
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <TableHeader sortKey="date">Date</TableHeader>
              <TableHeader sortKey="beds">Unit Type</TableHeader>
              <TableHeader sortKey="unit_area_sqft">Size (sqft)</TableHeader>
              <TableHeader sortKey="price_psf">PSF</TableHeader>
              <TableHeader sortKey="price">Price</TableHeader>
              <TableHeader sortKey="block">Block</TableHeader>
              <TableHeader sortKey="floor">Floor</TableHeader>
              <TableHeader sortKey="stack">Stack</TableHeader>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedData.map((transaction, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{transaction.date}</td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{transaction.beds}</td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{transaction.unit_area_sqft}</td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{formatCurrency(transaction.price_psf)}</td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{formatCurrency(transaction.price)}</td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{transaction.block}</td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{transaction.floor}</td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{transaction.stack}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex items-center justify-between mt-4">
        <select className="text-sm border rounded-lg px-2 py-1 hover:bg-gray-50">
          <option>10 Transactions / page</option>
        </select>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm border rounded-lg bg-blue-600 text-white hover:bg-blue-700">1</button>
          <button className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-50">2</button>
          <button className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-50">-</button>
          <button className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-50">5</button>
          <button className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-50">&gt;</button>
        </div>
      </div>
    </div>
  );
}