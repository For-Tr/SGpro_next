export default function FloorPlan({ floorPlans }) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Floor Plans</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {floorPlans.map((plan) => (
            <div key={plan.id} className="border rounded-lg p-4">
              <img 
                src={plan.image_url} 
                alt={plan.title}
                className="w-full h-auto" 
              />
              <p className="mt-2 text-center font-medium">{plan.title}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }