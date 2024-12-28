import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="filter-sidebar">
      <div className="filter-section">
        <h5>Filter</h5>
        
        {/* Project Name */}
        <div className="filter-group">
          <div className="filter-header">
            <h6>Project Name</h6>
            <span className="expand-icon">^</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search project name" />
          </div>
          <div className="checkbox-list">
            <label><input type="checkbox" /> JD Evelyn</label>
            <label><input type="checkbox" /> JD Nassim</label>
            <label><input type="checkbox" /> 8@8RT</label>
            <label><input type="checkbox" /> Altura</label>
            <label><input type="checkbox" /> Atlassia</label>
          </div>
          <button className="show-more">Show More</button>
        </div>

        {/* Project Developer */}
        <div className="filter-group">
          <div className="filter-header">
            <h6>Project Developer</h6>
            <span className="expand-icon">^</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search project developer" />
          </div>
          <div className="checkbox-list">
            <label><input type="checkbox" /> Amara Holdings</label>
            <label><input type="checkbox" /> Bukit Sembawang Estates</label>
            <label><input type="checkbox" /> Capital and Group</label>
            <label><input type="checkbox" /> Chip Eng Seng Corporation</label>
          </div>
          <button className="show-more">Show More</button>
        </div>

        {/* Market Segment */}
        <div className="filter-group">
          <div className="filter-header">
            <h6>Market Segment</h6>
            <span className="expand-icon">^</span>
          </div>
          <div className="checkbox-list">
            <label><input type="checkbox" /> CCR - Core Central Region</label>
            <label><input type="checkbox" /> RCR - Rest of Central Region</label>
            <label><input type="checkbox" /> OCR - Outside Central Region</label>
          </div>
        </div>

        {/* Project Location */}
        <div className="filter-group">
          <div className="filter-header">
            <h6>Project Location</h6>
            <div className="header-right">
              <span className="badge">10</span>
              <span className="expand-icon">^</span>
            </div>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search district name" />
          </div>
          <div className="checkbox-list">
            <label><input type="checkbox" /> Downtown Core +</label>
            <label><input type="checkbox" /> Prime District +</label>
            <label><input type="checkbox" /> City Fringe +</label>
            <label><input type="checkbox" /> East Region +</label>
            <label><input type="checkbox" /> West Region +</label>
            <label className="selected"><input type="checkbox" checked /> North East Region +</label>
            <label><input type="checkbox" /> North Region +</label>
          </div>
        </div>

        {/* Distance to MRT */}
        <div className="filter-group">
          <div className="filter-header">
            <h6>Distance to MRT</h6>
            <span className="expand-icon">^</span>
          </div>
          <div className="range-inputs">
            <input type="number" placeholder="Min. Distance (m)" />
            <span>-</span>
            <input type="number" placeholder="Max. Distance (m)" />
          </div>
        </div>

        {/* Unit Category */}
        <div className="filter-group">
          <div className="filter-header">
            <h6>Unit Category</h6>
            <span className="expand-icon">^</span>
          </div>
          <div className="checkbox-list">
            <label><input type="checkbox" /> Private Condo</label>
            <label><input type="checkbox" /> Executive Condo</label>
            <label><input type="checkbox" /> Landed House</label>
          </div>
        </div>
      </div>

      <style jsx>{`
        .filter-sidebar {
          width: 100%;
          max-width: 300px;
          background: #fff;
          padding: 15px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        h5 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .filter-group {
          margin-bottom: 20px;
          border-bottom: 1px solid #eee;
          padding-bottom: 20px;
        }

        .filter-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .filter-header h6 {
          font-size: 14px;
          font-weight: 600;
          margin: 0;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .badge {
          background: #6c39bd;
          color: white;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 12px;
        }

        .expand-icon {
          color: #666;
          font-size: 12px;
        }

        .search-box {
          margin-bottom: 15px;
        }

        .search-box input {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }

        .checkbox-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .checkbox-list label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #333;
          cursor: pointer;
        }

        .checkbox-list label.selected {
          color: #6c39bd;
        }

        .checkbox-list input[type="checkbox"] {
          width: 16px;
          height: 16px;
          border: 1px solid #ddd;
          border-radius: 3px;
        }

        .show-more {
          background: none;
          border: none;
          color: #6c39bd;
          font-size: 14px;
          padding: 0;
          margin-top: 10px;
          cursor: pointer;
        }

        .range-inputs {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .range-inputs input {
          flex: 1;
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }

        .range-inputs span {
          color: #666;
        }

        input::placeholder {
          color: #999;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;