exports.id = 2602;
exports.ids = [2602];
exports.modules = {

/***/ 4063:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7734, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8709, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2698, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7833, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9150, 23))

/***/ }),

/***/ 5101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// First create an async function to fetch and process the data
async function fetchProjects() {
    try {
        const response = await fetch("http://106.14.245.152/CSAA/projects/?keyword=");
        const data = await response.json();
        // Transform API data into required format
        const roomStyleAllBlogs = data.map((project)=>({
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
        console.error("Error fetching projects:", error);
        return [];
    }
}
// Initial empty array
let roomStyleAllBlogs = [];
// Immediately invoke async function to populate the array
(async ()=>{
    roomStyleAllBlogs = await fetchProjects();
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (roomStyleAllBlogs);


/***/ })

};
;