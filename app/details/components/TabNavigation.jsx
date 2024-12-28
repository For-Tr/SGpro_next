export default function TabNavigation({ activeTab, onTabChange }) {
    const tabs = [
      { id: 'floor-plan', label: 'Floor Plan' },
      { id: 'transactions', label: 'Sales Transactions' },
      { id: 'site', label: 'Site Plan' },

      { id: 'location', label: 'Location' },
      { id: 'report', label: 'Report' },

      { id: 'ask', label: 'Ask A Question' },
    ]
  
    return (
      <div className="border-b">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    )
  }