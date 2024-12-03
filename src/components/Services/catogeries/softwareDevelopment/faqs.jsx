import React, { useState } from "react";
import ServiceAccordion from "./serviceacoordian"; // Adjust the path to your ServiceAccordion component
import { useNavigate } from "react-router-dom";

const features = [
  {
    sections: [
      {
        title:
          "I want to outsource software development. How do I get started?",
        content: `You send us a request (via a live chat, our email, or by phone). 
                  We schedule an introductory call to dive into your situation and identify value-adding opportunities you can seize. 
                  You receive a free proposal showcasing the scope of work / technical solution description, deliverables, team composition with a brief explanation of the expected input of each team member, cost estimates, project timelines, risks, and our mitigation strategy. 
                  We sign a development service contract that legally fixes our mutual obligations and rights. 
                  You can fully trust us to assemble a project team or can individually talk over the competencies and interview the candidates. Once the team is approved, we are ready to kick off!`,
        button: {
          text: "Get Started",
          link: "#",
        },
        heading: "At Xwola, the flow typically looks as follows:",
      },
      {
        title: "Can we discuss my project based on a high-level idea only?",
        content:
          "Sure. Just describe your idea in simple words – our consultants will help you draw detailed project requirements, turn the idea into a workable solution concept, and quickly assess its technical and economic feasibility.",
      },
      {
        title: "What industries do you specialize in?",
        content:
          "Having practical experience with 30+ industries, we give special attention to healthcare, BFSI, retail, manufacturing, telecoms, energy, transportation, and professional services. Whatever industry you’re focused on, Xwola consultants can help you adhere to the region-specific sectoral regulations, such as HIPAA, PCI DSS, SEC, NYDFS, CCPA, GDRP, SAMA, and more.",
      },
      {
        title:
          "How much would my development project cost? Can I get a tailored estimate?",
        content: `From Xwola experience, software development project costs may range from $30,000–$150,000+ (building a mobile app of average complexity) to $800,000–$4,000,000 (creating a large-scale system powered with big data and AI). 
                  At Xwola, we provide ballpark estimates so you can quickly see if our prices match your budget before we start working together.`,
      },
      {
        title: "Can I trust my information's confidentiality with your team?",
        content: `Sure. We are ready to sign an NDA before an introductory call to legally protect your sensitive data and intellectual property before the cooperation starts. In our projects, we establish secure and well-controlled collaborative environments by combining protective and detective cybersecurity mechanisms with robust physical security measures.

              There are no customer data security incidents overshadowing ScienceSoft’s 35-year history.`,
      },

      {
        title: "Who owns the code?",
        content: `The delivered code is in your sole ownership; we fix the ownership rights in a service contract.`,
      },
      {
        title:
          "How long does it take for Xwola to process my initial request and start cooperation?",
        content: `We process your initial request within 24 hours and guarantee cooperation start in 1–3 weeks, depending on the collaboration pace and service scope.`,
      },
    ],
  },
];

const Faqs = () => {
  const [selectedFeature, setSelectedFeature] = useState(0); // Default to the first feature
  const navigate = useNavigate(); // React Router navigation function

  const handleNavigation = () => {
    navigate("/some-link");
  };

  return (
    <div className="">
      <div className="container w-full p-8 py-16">
        {/* Heading with FAQ in a box */}
        <div className="flex mb-8">
          <span className="bg-gradient-to-r from-[#fab116]  to-white text-black py-3 rounded-lg inline-block font-semibold text-3xl ">
            FAQ{" "}
          </span>
          <span className="text-3xl text-black ml-2 mt-3">
            about Our Software Engineering Services{" "}
          </span>
        </div>

        {/* Section to display the accordion */}
        <div className="mt-12 ">
          <ServiceAccordion
            sections={features[selectedFeature].sections.map((section) => ({
              ...section,
              content: (
                <div>
                  {/* Heading above the content */}
                  {section.heading && (
                    <h3 className="text-xl font-medium text-gray-800 mb-4 ">
                      {section.heading}
                    </h3>
                  )}
                  {/* Break the content into separate rows */}
                  <div className="space-y-4 mb-4">
                    {section.content.split(". ").map((point, index) => (
                      <div key={index} className="text-gray-700">
                        {point.trim()}.
                      </div>
                    ))}
                  </div>
                  {/* Button below the rows */}
                  {section.button && (
                    <div className="mt-4">
                      <button
                        type="button"
                        className="rounded bg-indigo-50 px-2 py-1 text-xs font-semibold text-black shadow-sm hover:bg-[#fab116]"
                        onClick={() =>
                          (window.location.href = section.button.link)
                        }
                      >
                        {section.button.text}
                      </button>
                    </div>
                  )}
                </div>
              ),
            }))}
          />
        </div>
        <div className="flex justify-center mt-8">
          <a href="" className="inline-block">
            <button
              type="button"
              className=" mt-2 rounded-lg border border-black text-black px-4 py-2 text-sm sm:text-lg  hover:bg-black hover:text-white transition"
            >
              See all quetions
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
