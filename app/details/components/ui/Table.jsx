export function Table({ children }) {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          {children}
        </table>
      </div>
    )
  }
  
  export function Thead({ children }) {
    return (
      <thead className="bg-gray-50">
        {children}
      </thead>
    )
  }
  
  export function Th({ children }) {
    return (
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        {children}
      </th>
    )
  }
  
  export function Td({ children }) {
    return (
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {children}
      </td>
    )
  }