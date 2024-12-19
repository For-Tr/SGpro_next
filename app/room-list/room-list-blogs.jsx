'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "../room-details/sidebar";

const Roomlistblogs = () => {
  const [roomList, setRoomList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://106.14.245.152/CSAA/projects/?keyword=');
        const data = await response.json();
        const Data = data.data;
        // Transform API data
        const transformedData = Data.map(project => ({
          title: project.project_name,
          des: `${project.district_planning_area} | ${project.developer} | ${project.tenure_period} | ${project.development_site_number_of_units} Units`,
          img: "https://newlauncher.com.sg/project_img/Perspective 1 (Bartley Vue).jpg",
          price: "TBA",
          bed: "Various",
          guest: project.development_site_number_of_units,
          star: 4.5
        }));

        setRoomList(transformedData.slice(0, 5));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return <div className="room__list section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            Loading...
          </div>
        </div>
      </div>
    </div>;
  }

  return (
    <div className="room__list section-padding">
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="col-xl-9 order-first order-xl-1 xl-mb-30">
            {roomList.map((item, index) => (
              <div key={index} className="room__list-item">
                <div className="room__list-item-left">
                  <div className="room__list-item-image">
                    <img style={{height:200}} src={item.img} alt="image" />
                  </div>
                </div>
                <div className="room__list-item-right">
                  <div className="room__list-item-right-content">
                    <h4>
                      <Link href="/room-details">{item.title}</Link>
                    </h4>
                    <p>{item.des}</p>
                    <ul>
                      <li>
                      </li>
                      <li>
                      </li>
                    </ul>
                  </div>
                  <div className="room__list-item-right-meta">
                    <div className="room__list-item-right-meta-top">
                      <p>
                      </p>
                    </div>
                    <a className="simple-btn" href="/">
                      <i className="far fa-chevron-right"></i>
                       More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roomlistblogs;