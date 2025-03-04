"use client";
import NextTopLoader from "nextjs-toploader";
import { useEffect } from "react";
import "./assets/css/all.css";
import "./assets/css/meanmenu.min.css";
import "./assets/sass/style.css";
import './globals.css'
export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return (
    <html lang="en"> 
	    <link rel="icon" type="image/png" href="favicon.png" />
      <body>
        <NextTopLoader showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
