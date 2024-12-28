import { Table } from './ui/Table'

export default function SalesTransactions({ transactions }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Sales Transactions</h2>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Unit</th>
            <th>Size (sqft)</th>
            <th>Price</th>
            <th>PSF</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.unit}</td>
              <td>{transaction.size}</td>
              <td>${transaction.price.toLocaleString()}</td>
              <td>${transaction.psf}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}