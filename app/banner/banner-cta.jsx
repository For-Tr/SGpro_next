const BannerCta = () => {
  const handleSearch = (searchTerm) => {
    // TODO: Implement search functionality
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="banner-cta">
      <input 
        type="text"
        placeholder="Enter the name of the project"
        className="search-input"
      />
      <button className="search-button" onClick={() => handleSearch(document.querySelector('.search-input').value)}>
        <SearchIcon />
      </button>
      <style jsx>{`
        .banner-cta {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 10px 15px;
          gap: 4px;
          position: absolute;
          width: 90%; /* Changed to percentage for responsiveness */
          max-width: 720px; /* Maintains max width */
          height: 72px;
          left: 50%;
          transform: translateX(-50%);
          top: 230px;
          background: #FFFFFF;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .search-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 16px;
          color: #333;
          background: transparent;
        }

        .search-input::placeholder {
          color: #999;
        }

        .search-button {
          background: none;
          border: none;
          padding: 5px;
          cursor: pointer;
          color: #666;
        }

        @media (max-width: 600px) {
          .banner-cta {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
          }
          .search-input {
            width: 100%; /* Full width on smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

// Search icon component
const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#0050F5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default BannerCta;