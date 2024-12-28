'use client';
import { useState, useEffect } from "react";
import { FaBed, FaRuler } from 'react-icons/fa'; // 需要安装 react-icons
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(9);
  const [totalPages, setTotalPages] = useState(0);
  const [marketSegment, setMarketSegment] = useState("All Areas");
  const [rentalYield, setRentalYield] = useState(0);
  const [hasNearbySchool, setHasNearbySchool] = useState(false);
  const router = useRouter();
  const handleProjectClick = (projectId) => {
    router.push(`/details/${projectId}`);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://129.226.92.69/CSAA/projects/?keyword=');
        const data = await response.json();
        const transformedData = data.data.map(project => {
          const unitTypesSet = new Set();
          project.floor_plans.forEach(plan => {
            unitTypesSet.add(plan.bedroom_type_display.split(' ')[0]);
          });
          const unitTypesArray = Array.from(unitTypesSet);
          unitTypesArray.sort((a, b) => a.localeCompare(b));
          const unitTypesStr = unitTypesArray.join(' / ');
    
          return {
            id: project.id,
            projectName: project.project_name,
            location: project.street_name,
            district: project.district_planning_area,
            propertyType: project.property_type,
            tenure: project.tenure_period,
            status: project.status,
            totalUnits: project.development_site_number_of_units,
            launchDate: project.launch_date,
            expectedTOP: project.expected_TOP_date,
            sale_percent: project.sale_percent,
            unitTypes: unitTypesStr + ' Bedroom',
            size: project.size_range + "sqft", // 这里暂时按示例写死，实际应从API获取
            pricePerSqft: project.average, 
            totalPrice: "$" + project.price_range + "M", // 这里暂时按示例写死，实际应从API获取
            image: "http://129.226.92.69" + project.images[0].image, // 这里暂时按示例写死，实际应从API获取
          };
        });
    

        setProjects(transformedData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [currentPage, pageSize, marketSegment, rentalYield, hasNearbySchool]);

  const generatePaginationItems = () => {
    const items = [];
    const maxVisiblePages = 7;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) items.push(i);
        items.push('...');
        items.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        items.push(1);
        items.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) items.push(i);
      } else {
        items.push(1);
        items.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) items.push(i);
        items.push('...');
        items.push(totalPages);
      }
    }
    return items;
  };

  return (
    <div className="projects-container">
      <div className="filters">
        <div className="filter-item">
        <label>Market Segment</label>
          <select 
            value={marketSegment}
            onChange={(e) => setMarketSegment(e.target.value)}
            className="market-segment-select"
          >
            <option value="All Areas">All Areas</option>
            <option value="CCR">CCR</option>
            <option value="RCR">RCR</option>
            <option value="OCR">OCR</option>
          </select>
        </div>

        <div className="filter-item rental-yield">
          <label>Projected Rental Yield</label>
          <div className="slider-container">
            <input 
              type="range" 
              min="0" 
              max="10" 
              value={rentalYield}
              onChange={(e) => setRentalYield(e.target.value)}
            />
            <span className="slider-value">{rentalYield}%</span>
          </div>
        </div>

        <div className="filter-item">
          <label className="checkbox-container">
            <input 
              type="checkbox"
              checked={hasNearbySchool}
              onChange={(e) => setHasNearbySchool(e.target.checked)}
            />
            <span className="checkmark"></span>
            Primary School within 1km
          </label>
        </div>
      </div>

      <div className="projects-header">
        <h2>{projects.length} Available New Launches</h2>
        <div className="header-actions">
          <button className="filter-btn">Filter</button>
          <select className="sort-select">
            <option value="newest">Newest to Oldest</option>
            <option value="oldest">Oldest to Newest</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card"  onClick={() => handleProjectClick(project.id)}>
            <div className="project-image">
              <img src={project.image} alt={project.projectName} />
              <span className={`status-badge ${project.status === "0" ? "upcoming" : "on-sale"}`}>
                {project.status === "0" ? "Upcoming" : `${project.sale_percent}% Sold`}
              </span>
              {project.status !== "0" && (
                <span className="sold-percentage">On Sale</span>
              )}
            </div>
            
            <div className="project-info">
              <h3>{project.projectName}</h3>
              <p className="location">in {project.location}</p>
              
              <div className="project-details">
                <span className="tag">{project.propertyType}</span>
                <span className="tag">{project.district}</span>
                <span className="tag">{project.tenure}</span>
              </div>

              <div className="unit-info">
                <div className="info-row">
                  <FaBed className="icon" />
                  <span>Unit Type: {project.unitTypes}</span>
                </div>
                <div className="info-row">
                  <FaRuler className="icon" />
                  <span>Size: {project.size}</span>
                </div>
              </div>

              <div className="pricing">
                <h4>${project.pricePerSqft} <span>SGD/sqft (Average)</span></h4>
                <p className="total-price">Total Price: {project.totalPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button 
          className="nav-button prev"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(p => p - 1)}
        >
          Previous
        </button>
        
        {generatePaginationItems().map((item, index) => (
          <button
            key={index}
            className={`page-button ${currentPage === item ? 'active' : ''} ${item === '...' ? 'dots' : ''}`}
            onClick={() => typeof item === 'number' && setCurrentPage(item)}
            disabled={item === '...'}
          >
            {item}
          </button>
        ))}
        
        <button 
          className="nav-button next"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(p => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const styles = `
.projects-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            padding-top: 40px;
        }

        .filters {
            display: flex;
            gap: 20px;
            align-items: center;
            flex-wrap: wrap;
            background: #fff;
            padding: 15px;
            border-radius: 8px;
        }

        .filter-item {
            flex: 1;
            min-width: 200px;
        }

        .market-segment-select {
            width: 100%;
            padding: 10px;
            border: 1px solid #e0e0e0;
            border-radius: 6px;
            background: #fff;
            font-size: 14px;
            cursor: pointer;
        }

        .rental-yield label {
            display: block;
            margin-bottom: 8px;
            color: #333;
            font-size: 14px;
        }

        .slider-container {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .slider-container input[type="range"] {
            flex: 1;
            height: 4px;
            background: #e0e0e0;
            border-radius: 2px;
            appearance: none;
        }

        .slider-container input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 16px;
            height: 16px;
            background: #2196F3;
            border-radius: 50%;
            cursor: pointer;
        }

        .slider-value {
            min-width: 40px;
            color: #666;
            font-size: 14px;
        }

        .checkbox-container {
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            font-size: 14px;
            color: #333;
        }

        .checkbox-container input[type="checkbox"] {
            width: 18px;
            height: 18px;
            margin: 0;
            cursor: pointer;
            display:none;
        }

        .checkmark {
            position: relative;
            display: inline-block;
            width: 18px;
            height: 18px;
            background: #fff;
            border: 2px solid #e0e0e0;
            border-radius: 4px;
        }

        .checkbox-container input[type="checkbox"]:checked + .checkmark:after {
            content: '';
            position: absolute;
            left: 5px;
            top: 2px;
            width: 5px;
            height: 10px;
            border: solid #2196F3;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }

        @media (max-width: 768px) {
            .filters {
                flex-direction: column;
                gap: 15px;
            }

            .filter-item {
                width: 100%;
            }
        }

  .projects-header {
  margin-top:20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .header-actions {
    display: flex;
    gap: 15px;
  }

  .filter-btn {
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    color:black;
    background: white;
  }

  .sort-select {
    padding: 8px 12px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
  }


  /* Project Card Styles */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 30px;
  }
  .project-card {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    background: white;
    transition: transform 0.2s;
  }

  .project-card:hover {
    transform: translateY(-4px);
  }

  .project-image {
    position: relative;
    height: 220px;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .status-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    color: white;
  }

  .status-badge.upcoming {
    background: #2563eb;
    top: 0px;
  }

  .status-badge.on-sale {
    background: #2563eb;
    
    top: 0px;

  }

  .sold-percentage {
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 6px 12px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 12px;
  }

  .project-info {
    padding: 20px;
  }

  .project-info h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
  }

  .location {
    color: #6b7280;
    margin: 4px 0 12px;
  }

  .project-details {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }

  .tag {
    padding: 4px 8px;
    border-radius: 4px;
    background: #f3f4f6;
    font-size: 12px;
    color: #374151;
  }

  .info-row {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #6b7280;
    font-size: 14px;
  }

  .icon {
    color: #9ca3af;
    font-size: 16px;
  }

  .pricing {
    margin-top: 16px;
  }

  .pricing h4 {
    color: #2563eb;
    font-size: 24px;
    margin: 0;
  }

  .pricing h4 span {
    font-size: 14px;
    color: #6b7280;
    font-weight: normal;
  }

  .total-price {
    color: #6b7280;
    font-size: 14px;
    margin: 4px 0 0;
  }

  /* Pagination Styles */
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin-top: 40px;
  }

  .nav-button {
    padding: 8px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    background: white;
    color: #374151;
    font-size: 14px;
    cursor: pointer;
  }

  .nav-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .page-button {
    min-width: 36px;
    height: 36px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    background: white;
    color: #374151;
    font-size: 14px;
    cursor: pointer;
  }

  .page-button.active {
    background: #2563eb;
    color: white;
    border-color: #2563eb;
  }

  .page-button.dots {
    border: none;
    background: none;
    cursor: default;
  }

  @media (max-width: 1024px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .filters {
      flex-direction: column;
    }
  }

  @media (max-width: 640px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default function StyledProjectList() {
  return (
    <>
      <style jsx>{styles}</style>
      <ProjectList />
    </>
  );
}