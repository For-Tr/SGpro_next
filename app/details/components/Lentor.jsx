import React, { useState } from 'react';
import { Bell, ChevronLeft, ChevronRight, Video } from 'lucide-react';

const LentorMansion = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
  

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <button className="text-blue-600">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-6">
            <div className="text-center">
              <div className="text-xs text-gray-500">Sat</div>
              <div className="font-medium">23</div>
              <div className="text-xs text-gray-500">Nov</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500">Sun</div>
              <div className="font-medium">24</div>
              <div className="text-xs text-gray-500">Nov</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500">Fri</div>
              <div className="font-medium">15</div>
              <div className="text-xs text-gray-500">Nov</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500">Sat</div>
              <div className="font-medium">16</div>
              <div className="text-xs text-gray-500">Nov</div>
            </div>
          </div>
          <button className="text-blue-600">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <select className="w-full p-2.5 border border-gray-200 rounded-lg text-gray-400 mb-4">
          <option>Please select the time</option>
        </select>

        <div className="flex gap-3 mb-6">
          <button className="flex-1 py-2.5 border border-gray-200 rounded-lg text-blue-600 text-sm flex items-center justify-center">
            In Person
          </button>
          <button className="flex-1 py-2.5 border border-gray-200 rounded-lg text-gray-600 text-sm flex items-center justify-center gap-2">
            <Video className="w-4 h-4" />
            Video Chat
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2.5 border border-gray-200 rounded-lg"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2.5 border border-gray-200 rounded-lg"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            className="w-full p-2.5 border border-gray-200 rounded-lg"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            className="w-full p-2.5 border border-gray-200 rounded-lg"
            rows={3}
            placeholder='I would like to schedule a tour for " Suburb Home for Sale "'
            value={formData.message}
            onChange={handleInputChange}
          />
          <button type="submit" className="w-full py-2.5 bg-blue-600 text-white rounded-lg">
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default LentorMansion;