import React, { useState } from "react";
import "../../styles/UpcomingIpo.css";
import IpoCard from "./IpoCard"; // Import IPO Card component

const ipoData = [
    {
        id: 1,
        logo: "/images/nova.png",
        name: "Nova Agritech Ltd.",
        priceBand: "Rs 39 - 41",
        open: "2024-01-22",
        close: "2024-01-24",
        issueSize: "143.81 Cr.",
        issueType: "Book Built",
        listingDate: "2024-01-30",
    },
    {
        id: 2,
        logo: "/images/epack.png",
        name: "EPACK Durable Ltd.",
        priceBand: "Rs 218 - 230",
        open: "2024-01-19",
        close: "2024-01-23",
        issueSize: "640.05 Cr.",
        issueType: "Book Built",
        listingDate: "2024-01-29",
    },
    {
        id: 3,
        logo: "/images/oyo.png",
        name: "RK Swamy Ltd.",
        priceBand: "Not Issued",
        open: "Not Issued",
        close: "Not Issued",
        issueSize: "8430 Cr.",
        issueType: "Book Built",
        listingDate: "Not Issued",
    },
    {
        id: 1,
        logo: "/images/nova.png",
        name: "Oravel Stays Ltd.",
        priceBand: "Rs 39 - 41",
        open: "2024-01-22",
        close: "2024-01-24",
        issueSize: "143.81 Cr.",
        issueType: "Book Built",
        listingDate: "2024-01-30",
    },
    {
        id: 2,
        logo: "/images/epack.png",
        name: "Imagine marketing Ltd.",
        priceBand: "Rs 218 - 230",
        open: "2024-01-19",
        close: "2024-01-23",
        issueSize: "640.05 Cr.",
        issueType: "Book Built",
        listingDate: "2024-01-29",
    },
    {
        id: 3,
        logo: "/images/oyo.png",
        name: "Kids Clinic India Ltd.",
        priceBand: "Not Issued",
        open: "Not Issued",
        close: "Not Issued",
        issueSize: "8430 Cr.",
        issueType: "Book Built",
        listingDate: "Not Issued",
    },
    {
        id: 1,
        logo: "/images/nova.png",
        name: "OLA Electric Mobility Ltd.",
        priceBand: "Rs 39 - 41",
        open: "2024-01-22",
        close: "2024-01-24",
        issueSize: "143.81 Cr.",
        issueType: "Book Built",
        listingDate: "2024-01-30",
    },
    {
        id: 2,
        logo: "/images/epack.png",
        name: "One Mobikwik Systems Ltd.",
        priceBand: "Rs 218 - 230",
        open: "2024-01-19",
        close: "2024-01-23",
        issueSize: "640.05 Cr.",
        issueType: "Book Built",
        listingDate: "2024-01-29",
    },
    {
        id: 3,
        logo: "/images/oyo.png",
        name: "Le Travenues Technology",
        priceBand: "Not Issued",
        open: "Not Issued",
        close: "Not Issued",
        issueSize: "8430 Cr.",
        issueType: "Book Built",
        listingDate: "Not Issued",
    },
    {
        id: 1,
        logo: "/images/nova.png",
        name: "CMR Green Technologies",
        priceBand: "Rs 39 - 41",
        open: "2024-01-22",
        close: "2024-01-24",
        issueSize: "143.81 Cr.",
        issueType: "Book Built",
        listingDate: "2024-01-30",
    },
    {
        id: 2,
        logo: "/images/epack.png",
        name: "Wellness Forever",
        priceBand: "Rs 218 - 230",
        open: "2024-01-19",
        close: "2024-01-23",
        issueSize: "640.05 Cr.",
        issueType: "Book Built",
        listingDate: "2024-01-29",
    },
    {
        id: 3,
        logo: "/images/oyo.png",
        name: "PKH Ventures Ltd.",
        priceBand: "Not Issued",
        open: "Not Issued",
        close: "Not Issued",
        issueSize: "8430 Cr.",
        issueType: "Book Built",
        listingDate: "Not Issued",
    },
];

const UpcomingIpo = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="upcoming-ipo">
            <div className="titleName">
                <h1>Upcoming IPO</h1>
                <p>
                    Companies that have filed for an IPO with SEBI. Few details might be disclosed by the companies later.
                </p>
            </div>

            <div className="ipo-cards">
                {ipoData.map((ipo) => (
                    <IpoCard key={ipo.id} ipo={ipo} />
                ))}
            </div>

            {/* FAQ Section */}
            <div className="faq-container">
                <div className="faq-header">
                    <h1>Frequently Asked Questions?</h1>
                    <p>Find answers to common questions that come in your mind related to IPO.</p>
                </div>

                <div className="faq-sections">
                    <div className={`faq-section ${activeSection === 1 ? "active" : ""}`}>
                        <button className="faq-question" onClick={() => toggleSection(1)}>
                            How to Subscribe to an IPO?
                            <span className="toggle-icon">{activeSection === 1 ? "−" : "+"}</span>
                        </button>
                        {activeSection === 1 && (
                            <div className="faq-answer">
                                <ul>
                                    <li>Step 1: Login to your respective service provider.</li>
                                    <li>Step 2: Click on the IPO button.</li>
                                    <li>Step 3: Select the IPO you want to bid and enter the relevant details.</li>
                                    <li>Step 4: Your subscription will be completed once you make the payment or give permission.</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className={`faq-section ${activeSection === 2 ? "active" : ""}`}>
                        <button className="faq-question" onClick={() => toggleSection(2)}>
                            Should I buy an IPO first day?
                            <span className="toggle-icon">{activeSection === 2 ? "−" : "+"}</span>
                        </button>
                        {activeSection === 2 && (
                            <div className="faq-answer">
                                <p>It depends on the demand and fundamentals of the IPO. Research before investing.</p>
                            </div>
                        )}
                    </div>

                    <div className={`faq-section ${activeSection === 3 ? "active" : ""}`}>
                        <button className="faq-question" onClick={() => toggleSection(3)}>
                            How do you know if an IPO is good?
                            <span className="toggle-icon">{activeSection === 3 ? "−" : "+"}</span>
                        </button>
                        {activeSection === 3 && (
                            <div className="faq-answer">
                                <p>Analyze the company's financials, industry trends, and market sentiment before investing.</p>
                            </div>
                        )}
                    </div>

                    <div className={`faq-section ${activeSection === 3 ? "active" : ""}`}>
                        <button className="faq-question" onClick={() => toggleSection(3)}>
                           How to check IPO start date?
                            <span className="toggle-icon">{activeSection === 3 ? "−" : "+"}</span>
                        </button>
                        {activeSection === 3 && (
                            <div className="faq-answer">
                                <p>Analyze the company's financials, industry trends, and market sentiment before investing.</p>
                            </div>
                        )}
                    </div>

                    <div className={`faq-section ${activeSection === 3 ? "active" : ""}`}>
                        <button className="faq-question" onClick={() => toggleSection(3)}>
                        What is issue size?
                            <span className="toggle-icon">{activeSection === 3 ? "−" : "+"}</span>
                        </button>
                        {activeSection === 3 && (
                            <div className="faq-answer">
                                <p>Analyze the company's financials, industry trends, and market sentiment before investing.</p>
                            </div>
                        )}
                    </div>

                    <div className={`faq-section ${activeSection === 3 ? "active" : ""}`}>
                        <button className="faq-question" onClick={() => toggleSection(3)}>
                        How many shares in a lot?
                            <span className="toggle-icon">{activeSection === 3 ? "−" : "+"}</span>
                        </button>
                        {activeSection === 3 && (
                            <div className="faq-answer">
                                <p>Analyze the company's financials, industry trends, and market sentiment before investing.</p>
                            </div>
                        )}
                    </div>

                    <div className={`faq-section ${activeSection === 3 ? "active" : ""}`}>
                        <button className="faq-question" onClick={() => toggleSection(3)}>
                        How is the lot size calculated?
                            <span className="toggle-icon">{activeSection === 3 ? "−" : "+"}</span>
                        </button>
                        {activeSection === 3 && (
                            <div className="faq-answer">
                                <p>Analyze the company's financials, industry trends, and market sentiment before investing.</p>
                            </div>
                        )}
                    </div>

                    <div className={`faq-section ${activeSection === 3 ? "active" : ""}`}>
                        <button className="faq-question" onClick={() => toggleSection(3)}>
                        Who decides the IPO price band?
                            <span className="toggle-icon">{activeSection === 3 ? "−" : "+"}</span>
                        </button>
                        {activeSection === 3 && (
                            <div className="faq-answer">
                                <p>Analyze the company's financials, industry trends, and market sentiment before investing.</p>
                            </div>
                        )}
                    </div>

                    <div className={`faq-section ${activeSection === 3 ? "active" : ""}`}>
                        <button className="faq-question" onClick={() => toggleSection(3)}>
                        What is IPO GMP?
                            <span className="toggle-icon">{activeSection === 3 ? "−" : "+"}</span>
                        </button>
                        {activeSection === 3 && (
                            <div className="faq-answer">
                                <p>Analyze the company's financials, industry trends, and market sentiment before investing.</p>
                            </div>
                        )}
                    </div>

                    <div className={`faq-section ${activeSection === 3 ? "active" : ""}`}>
                        <button className="faq-question" onClick={() => toggleSection(3)}>
                        How many lots should I apply for IPO?
                            <span className="toggle-icon">{activeSection === 3 ? "−" : "+"}</span>
                        </button>
                        {activeSection === 3 && (
                            <div className="faq-answer">
                                <p>Analyze the company's financials, industry trends, and market sentiment before investing.</p>
                            </div>
                        )}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default UpcomingIpo;
