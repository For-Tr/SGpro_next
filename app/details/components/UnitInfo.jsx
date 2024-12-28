import { Table } from '../components/ui/Table'

export default function UnitInfo({ units }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Unit Mix</h2>
      <Table>
        <thead>
          <tr>
            <th>Unit Type</th>
            <th>Quantity</th>
            <th>Size Range</th>
            <th>Price Range</th>
            <th>PSF Range</th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit, index) => (
            <tr key={index}>
              <td>{unit.type}</td>
              <td>{unit.quantity}</td>
              <td>{unit.size_range}</td>
              <td>{unit.price_range}</td>
              <td>{unit.psf_range}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}