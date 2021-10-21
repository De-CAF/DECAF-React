import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import AccountSettings from "views/IndexSections/accountSettings.js";

export default function Index() {
    React.useEffect(() => {
        document.body.classList.toggle("account-settings");
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("account-settings");
        };
    }, []);
    return (
        <>
            <IndexNavbar />
            <div className="wrapper">
                <div className="main">
                    <AccountSettings />
                </div>
                <Footer />
            </div>
        </>
    );
}
