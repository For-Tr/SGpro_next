import React from 'react';

export default function UnitMix () {
  const unitData = [
    { type: '2 Bedroom', units: 16, available: 16, size: '732-893', psf: '$2,501-$2,619', price: '$1.868M-$2.055M', mix: '11.27%' },
    { type: '2 Bedroom + Study', units: 56, available: 56, size: '753-995', psf: '$2,501-$2,619', price: '$1.868M-$2.055M', mix: '39.44%' },
    { type: '3 Bedroom', units: 38, available: 38, size: '947-1,227', psf: '$2,501-$2,619', price: '$1.868M-$2.055M', mix: '26.76%' },
    { type: '3 Bedroom + Study', units: 28, available: 28, size: '1,012-1,259', psf: '$2,501-$2,619', price: '$1.868M-$2.055M', mix: '18.31%' },
    { type: '4 Bedroom', units: 6, available: 6, size: '1,227-1,410', psf: '$2,501-$2,619', price: '$1.868M-$2.055M', mix: '4.23%' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold">Unit Mix</h2>
          <p className="text-sm text-gray-500">Showing 1 - 10 of 53 Filter Match</p>
        </div>
        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Unit Mix
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-blue-600">
              <th className="px-4 py-3 text-left text-sm font-medium text-white">Unit Type</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white">Total Units</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white">Available Units</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white">Size (sqft)</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white">PSF</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white">Price</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white">Unit Mix</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {unitData.map((unit, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900">{unit.type}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{unit.units}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{unit.available}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{unit.size}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{unit.psf}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{unit.price}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{unit.mix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

;