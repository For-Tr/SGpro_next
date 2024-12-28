export default function Location({ locationData }) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Location</h2>
        <div className="mb-6">
          <h3 className="font-medium mb-2">Address</h3>
          <p>{locationData.address}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium mb-2">Nearby MRT</h3>
            <ul className="space-y-2">
              {locationData.nearby_amenities.mrt.map((station, index) => (
                <li key={index}>{station}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Schools</h3>
            <ul className="space-y-2">
              {locationData.nearby_amenities.schools.map((school, index) => (
                <li key={index}>{school}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Shopping</h3>
            <ul className="space-y-2">
              {locationData.nearby_amenities.shopping.map((mall, index) => (
                <li key={index}>{mall}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }