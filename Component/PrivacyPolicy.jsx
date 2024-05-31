import React from 'react';

const PrivacyPolicy = () => {
  const policies = [
    {
      imgSrc: '../Images/privacy.jpg', // Replace with the actual image path
      title: 'Private Policy',
      link: '#',
    },
    {
      imgSrc: '../Images/globel shipping.webp', // Replace with the actual image path
      title: 'Private Policy',
      link: '#',
    },
    {
      imgSrc: '../Images/panpapper.jpg', // Replace with the actual image path
      title: 'Private Policy',
      link: '#',
    },
  ];

  return (
    <section className="privacyPolicySection">
      <h2>OTHER IMPORTANT PAGE</h2>
      <div className="policyCards">
        {policies.map((policy, index) => (
          <div className="policyCard" key={index}>
            <img src={policy.imgSrc} alt={policy.title} width='600px' height='160px' />
            <h3>{policy.title}</h3>
            <a href={policy.link} className="readMoreBtn">READ MORE</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyPolicy;
