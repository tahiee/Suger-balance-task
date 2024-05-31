import React from "react";
import img1 from "../Images/privacy.jpg";
import img2 from "../Images/globel shipping.webp";
import img3 from "../Images/panpapper.jpg";
const PrivacyPolicy = () => {
  const policies = [
    {
      imgSrc: img1, // Replace with the actual image path
      title: "Private Policy",
      link: "#",
    },
    {
      imgSrc: img2, // Replace with the actual image path
      title: "Private Policy",
      link: "#",
    },
    {
      imgSrc: img3 , // Replace with the actual image path
      title: "Private Policy",
      link: "#",
    },
  ];

  return (
    <section className="privacyPolicySection">
      <h2>OTHER IMPORTANT PAGE</h2>
      <div className="policyCards">
        {policies.map((policy, index) => (
          <div className="policyCard" key={index}>
            <img
              src={policy.imgSrc}
              alt={policy.title}
              width="600px"
              height="160px"
            />
            <h3>{policy.title}</h3>
            <a href={policy.link} className="readMoreBtn">
              READ MORE
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyPolicy;
