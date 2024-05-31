import React from "react";
import img1 from "../Images/Sugar-balance-buy.png";

const CreativeProduct = () => {
  const packages = [
    {
      id: 1,
      title: "6 Boxes of Sugar Balance",
      subtitle: "6 Month Best Value Package",
      description: "Save Up To $695",
      price: "$199.00",
      originalPrice: "$294.00",
      note: "One-time Purchase:",
      shipping: "FREE Global Shipping",
      guarantee: "180 DAY Conditional Money-Back Guarantee",
      button: "ORDER NOW",
    },
    {
      id: 2,
      title: "6 Boxes of Sugar Balance",
      subtitle: "6 Month Best Value Package",
      description: "Save Up To $695",
      price: "$199.00",
      originalPrice: "$294.00",
      note: "One-time Purchase:",
      shipping: "FREE Global Shipping",
      guarantee: "180 DAY Conditional Money-Back Guarantee",
      button: "ORDER NOW",
    },
    {
      id: 3,
      title: "6 Boxes of Sugar Balance",
      subtitle: "6 Month Best Value Package",
      description: "Save Up To $695",
      price: "$199.00",
      originalPrice: "$294.00",
      note: "One-time Purchase:",
      shipping: "FREE Global Shipping",
      guarantee: "180 DAY Conditional Money-Back Guarantee",
      button: "ORDER NOW",
    },
  ];

  return (
    <section className="saving-package">
      <h2>NOW CHOOSE YOUR SAVINGS PACKAGE</h2>
      <div className="packages">
        {packages.map((pkg) => (
          <div className="package" key={pkg.id}>
            <img
              src={img1}
              alt={pkg.title}
              className="package-image"
              style={{width:"150px",height:"100px"}}
            />
            <h3>{pkg.title}</h3>
            <h4>{pkg.subtitle}</h4>
            <p>{pkg.description}</p>
            <p className="price">
              <span className="original-price">{pkg.originalPrice}</span>{" "}
              {pkg.price}
            </p>
            <p>{pkg.note}</p>
            <p>{pkg.shipping}</p>
            <p className="guarantee">{pkg.guarantee}</p>
            <button className="order-button">{pkg.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreativeProduct;
