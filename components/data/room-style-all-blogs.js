// First create an async function to fetch and process the data
async function fetchProjects() {
  try {
    const response = await fetch('http://106.14.245.152/CSAA/projects/?keyword=');
    const data = await response.json();

    // Transform API data into required format
    const roomStyleAllBlogs = data.map(project => ({
      title: project.project_name,
      des: `${project.district_planning_area} | ${project.developer} | ${project.tenure_period} | ${project.development_site_number_of_units} Units`,
      img: "https://newlauncher.com.sg/project_img/Perspective 1 (Bartley Vue).jpg",
      price: "TBA", 
      bed: "Various",
      guest: project.development_site_number_of_units,
      star: 4.5
    }));

    return roomStyleAllBlogs;

  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

// Initial empty array
let roomStyleAllBlogs = [];

// Immediately invoke async function to populate the array
(async () => {
  roomStyleAllBlogs = await fetchProjects();
})();

export default roomStyleAllBlogs;