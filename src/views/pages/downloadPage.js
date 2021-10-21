import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Download from "views/IndexSections/Download.js";

export default function DownloadPage() {
    React.useEffect(() => {
        document.body.classList.toggle("index-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("index-page");
        };
    }, []);
    return (
        <>
            <IndexNavbar />
            <div className="wrapper">
                <div className="main">
                    <Download />
                </div>
                <Footer />
            </div>
        </>
    );
}
