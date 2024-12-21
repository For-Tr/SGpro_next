"use strict";
exports.id = 24;
exports.ids = [24];
exports.modules = {

/***/ 7740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StyledProjectList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4667);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6775);
/* __next_internal_client_entry_do_not_use__ default auto */ 


 // 需要安装 react-icons
const ProjectList = ()=>{
    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const [pageSize] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(9);
    const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [marketSegment, setMarketSegment] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("All Areas");
    const [rentalYield, setRentalYield] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [hasNearbySchool, setHasNearbySchool] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const fetchProjects = async ()=>{
            try {
                const response = await fetch("http://106.14.245.152/CSAA/projects/?keyword=");
                const data = await response.json();
                const transformedData = data.data.map((project)=>{
                    const unitTypesSet = new Set();
                    project.floor_plans.forEach((plan)=>{
                        unitTypesSet.add(plan.bedroom_type_display.split(" ")[0]);
                    });
                    const unitTypesArray = Array.from(unitTypesSet);
                    unitTypesArray.sort((a, b)=>a.localeCompare(b));
                    const unitTypesStr = unitTypesArray.join(" / ");
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
                        unitTypes: unitTypesStr + " Bedroom",
                        size: "527 - 1,507 sqft",
                        pricePerSqft: "2,200",
                        totalPrice: "$2.22M - $3.54M",
                        image: "http://106.14.245.152" + project.cover_image
                    };
                });
                setProjects(transformedData);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setIsLoading(false);
            }
        };
        fetchProjects();
    }, [
        currentPage,
        pageSize,
        marketSegment,
        rentalYield,
        hasNearbySchool
    ]);
    const generatePaginationItems = ()=>{
        const items = [];
        const maxVisiblePages = 7;
        if (totalPages <= maxVisiblePages) {
            for(let i = 1; i <= totalPages; i++){
                items.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for(let i = 1; i <= 5; i++)items.push(i);
                items.push("...");
                items.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                items.push(1);
                items.push("...");
                for(let i = totalPages - 4; i <= totalPages; i++)items.push(i);
            } else {
                items.push(1);
                items.push("...");
                for(let i = currentPage - 1; i <= currentPage + 1; i++)items.push(i);
                items.push("...");
                items.push(totalPages);
            }
        }
        return items;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "projects-container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "filters",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "filter-item",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: "Market Segment"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                value: marketSegment,
                                onChange: (e)=>setMarketSegment(e.target.value),
                                className: "market-segment-select",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "All Areas",
                                        children: "All Areas"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "CCR",
                                        children: "CCR"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "RCR",
                                        children: "RCR"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "OCR",
                                        children: "OCR"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "filter-item rental-yield",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: "Projected Rental Yield"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "slider-container",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "range",
                                        min: "0",
                                        max: "10",
                                        value: rentalYield,
                                        onChange: (e)=>setRentalYield(e.target.value)
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "slider-value",
                                        children: [
                                            rentalYield,
                                            "%"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "filter-item",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "checkbox-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "checkbox",
                                    checked: hasNearbySchool,
                                    onChange: (e)=>setHasNearbySchool(e.target.checked)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "checkmark"
                                }),
                                "Primary School within 1km"
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "projects-header",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        children: [
                            projects.length,
                            " Available New Launches"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "header-actions",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "filter-btn",
                                children: "Filter"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                className: "sort-select",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "newest",
                                        children: "Newest to Oldest"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "oldest",
                                        children: "Oldest to Newest"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "projects-grid",
                children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "project-card",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "project-image",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: project.image,
                                        alt: project.projectName
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `status-badge ${project.status === "0" ? "upcoming" : "on-sale"}`,
                                        children: project.status === "0" ? "Upcoming" : "On Sale"
                                    }),
                                    project.status !== "0" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "sold-percentage",
                                        children: "21% Sold"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "project-info",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: project.projectName
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "location",
                                        children: [
                                            "in ",
                                            project.location
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "project-details",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "tag",
                                                children: project.propertyType
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "tag",
                                                children: project.district
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "tag",
                                                children: project.tenure
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "unit-info",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "info-row",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__/* .FaBed */ .f0S, {
                                                        className: "icon"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            "Unit Type: ",
                                                            project.unitTypes
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "info-row",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__/* .FaRuler */ .BxQ, {
                                                        className: "icon"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            "Size: ",
                                                            project.size
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "pricing",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                children: [
                                                    "$",
                                                    project.pricePerSqft,
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "SGD/sqft (Average)"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "total-price",
                                                children: [
                                                    "Total Price: ",
                                                    project.totalPrice
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, project.id))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pagination",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "nav-button prev",
                        disabled: currentPage === 1,
                        onClick: ()=>setCurrentPage((p)=>p - 1),
                        children: "Previous"
                    }),
                    generatePaginationItems().map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: `page-button ${currentPage === item ? "active" : ""} ${item === "..." ? "dots" : ""}`,
                            onClick: ()=>typeof item === "number" && setCurrentPage(item),
                            disabled: item === "...",
                            children: item
                        }, index)),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "nav-button next",
                        disabled: currentPage === totalPages,
                        onClick: ()=>setCurrentPage((p)=>p + 1),
                        children: "Next"
                    })
                ]
            })
        ]
    });
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
  }

  .status-badge.on-sale {
    background: #6b7280;
  }

  .sold-percentage {
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 6px 12px;
    border-radius: 20px;
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
function StyledProjectList() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: styles.__hash,
                children: styles
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProjectList, {})
        ]
    });
}


/***/ }),

/***/ 6877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\PRO\1118 地产信息\react\app\room-list\room-list-blogs.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 4686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\PRO\1118 地产信息\react\app\scroll-to-top\scrollToTop.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;