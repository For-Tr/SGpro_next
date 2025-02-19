import React from 'react';
import { Maximize2, X } from 'lucide-react';
import { useState } from 'react'
const floorPlans = [
  {
    id: 38,
    project_name: "Emerald of Katong",
    bedroom_type: "1",
    has_study: false,
    plan_type: "0",
    size: 484,
    psf: "undefined",
    price: "undefined",
    floor_plan_image: null,
    basic_info: 27
  },
  {
    id: 39,
    project_name: "Emerald of Katong",
    bedroom_type: "2",
    has_study: false,
    plan_type: "0",
    size: 624,
    psf: "undefined",
    price: "undefined",
    floor_plan_image: null,
    basic_info: 27
  },
  {
    id: 40,
    project_name: "Emerald of Katong",
    bedroom_type: "2",
    has_study: false,
    plan_type: "0",
    size: 646,
    psf: "undefined",
    price: "undefined",
    floor_plan_image: null,
    basic_info: 27
  },
  {
    id: 41,
    project_name: "Emerald of Katong",
    bedroom_type: "3",
    has_study: false,
    plan_type: "0",
    size: 883,
    psf: "undefined",
    price: "undefined",
    floor_plan_image: null,
    basic_info: 27
  },
  {
    id: 42,
    project_name: "Emerald of Katong",
    bedroom_type: "4",
    has_study: false,
    plan_type: "0",
    size: 1152,
    psf: "undefined",
    price: "undefined",
    floor_plan_image: null,
    basic_info: 27
  },
  {
    id: 43,
    project_name: "Emerald of Katong",
    bedroom_type: "5",
    has_study: false,
    plan_type: "0",
    size: 1475,
    psf: "undefined",
    price: "undefined",
    floor_plan_image: null,
    basic_info: 27
  }
];

const FloorPlans = () => {
  const types = ['1BR', '2BR', '2BR + Study', '3BR', '3BR+', '5BR'];
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold">Floor Plans</h2>
          <p className="text-sm text-gray-500">Showing 1 - 10 of 53 Floor Plans</p>
        </div>
        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Unit Mix
        </button>
      </div>
      
      <div className="flex gap-4 mb-4 overflow-x-auto">
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg">
          View all
        </button>
        {types.map((type, index) => (
          <button key={index} className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50">
            {type}
          </button>
        ))}
      </div>
      

      <div className="flex flex-col md:flex-row gap-6 p-4">
      {/* Left side - Floor plan list */}
      <div className="w-full md:w-1/2">
        <div className="h-96 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {floorPlans.map((plan) => (
            <div
              key={plan.id}
              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                selectedPlan?.id === plan.id ? 'bg-blue-50 border-blue-300' : 'hover:bg-gray-50'
              }`}
              onClick={() => setSelectedPlan(plan)}
            >
              <div className="font-medium mb-2">
                {plan.bedroom_type} Bedroom
                {plan.has_study && ' + Study'}
              </div>
              <div className="text-sm text-gray-500">
                Size: {plan.size} sqft / {Math.round(plan.size * 0.092903)} sqm
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Floor plan preview */}
      <div className="w-full md:w-1/2">
        {selectedPlan ? (
          <div className="relative">
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              {selectedPlan.floor_plan_image ? (
                <img
                  src={selectedPlan.floor_plan_image}
                  alt={`${selectedPlan.bedroom_type} Bedroom Floor Plan`}
                  className="object-contain h-full w-full"
                />
              ) : (
                <div className="text-gray-400">No floor plan image available</div>
              )}
            </div>
            <button
              onClick={() => setIsZoomed(true)}
              className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center text-gray-400">
            Select a floor plan to view
          </div>
        )}
      </div>

      {/* Zoom Modal */}
      {isZoomed && selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-lg">
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="h-screen max-h-96 p-4">
              {selectedPlan.floor_plan_image ? (
                <img
                  src={selectedPlan.floor_plan_image}
                  alt={`${selectedPlan.bedroom_type} Bedroom Floor Plan`}
                  className="object-contain w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  No floor plan image available
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        /* Custom scrollbar styles */
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #cecece;
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </div>

    </div>
  );
};

export default FloorPlans;