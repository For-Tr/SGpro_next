"use client"

import React, { useEffect, useState } from "react";
import { Blog, Home, Page, Room } from "./Menu";
import DropDown from "./DropDown";
import Link from "next/link";

export default function HeaderOne() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        });
    }, []);

    return (
        <header className={`header ${isSticky ? "sticky" : ""}`}>
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <Link href="/">
                            <div className="logo-container">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <circle cx="20" cy="20" r="20" fill="#0052FF"/>
                                    <text x="12" y="28" fill="white" fontSize="20" fontWeight="bold">HF</text>
                                </svg>
                                <span className="logo-text">FireFinder</span>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="search-bar">
                        <select className="currency-select">
                            <option>CCR</option>
                        </select>
                        <input type="text" placeholder="Enter the name of the project" />
                        <button className="search-button">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8Z" 
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>

                    <div className="auth-buttons">
                        <Link href="/signup" className="sign-up">Sign Up</Link>
                        <Link href="/login" className="log-in">Log In</Link>
                    </div>
                </div>
            </div>

            <style>{`
                .header {
                    background: white;
                    padding: 15px 0;
                    border-bottom: 1px solid #eaeaea;
                }
                
                .sticky {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    z-index: 1000;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .header-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                }

                .logo-container {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .logo-text {
                    font-size: 20px;
                    font-weight: 600;
                    color: #000;
                }

                .search-bar {
                    flex: 1;
                    max-width: 600px;
                    display: flex;
                    align-items: center;
                    border: 1px solid #eaeaea;
                    border-radius: 8px;
                    padding: 8px;
                }

                .currency-select {
                    border: none;
                    background: none;
                    padding: 0 10px;
                    font-size: 14px;
                }

                .search-bar input {
                    flex: 1;
                    border: none;
                    padding: 0 10px;
                    font-size: 14px;
                    outline: none;
                }

                .search-button {
                    background: none;
                    border: none;
                    padding: 5px;
                    cursor: pointer;
                    color: #666;
                }

                .auth-buttons {
                    display: flex;
                    gap: 10px;
                }

                .sign-up, .log-in {
                    padding: 8px 16px;
                    border-radius: 6px;
                    font-size: 14px;
                    font-weight: 500;
                    text-decoration: none;
                    background: #0052FF;
                }

                .sign-up {
                    color: white;
                    border: 1px solid #0052FF;
                }

                .log-in {
                    background: #0052FF;
                    color: white;
                }

                @media (max-width: 768px) {
                    .search-bar {
                        display: none;
                    }
                }
            `}</style>
        </header>
    );
}