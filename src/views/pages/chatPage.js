import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Chat from "views/IndexSections/Chat.js";

export default function ChatPage() {
    React.useEffect(() => {
        document.body.classList.toggle("chat-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("chat-page");
        };
    }, []);
    return (
        <>
            <IndexNavbar />
            <div className="wrapper">
                <div className="main">
                    <Chat />
                </div>
                <Footer />
            </div>
        </>
    );
}
