import React from "react";
import fda from "../Images/fda.png";

const DetailsChild = () => {
  return (
    <div className="detailsChild">
      <section>
        <h2>
          <span className="highlight">Sugar Balance</span> How It Works?
        </h2>
        <p>
          Sugar balance works naturally. Will you believe someone tells you that it helps to remove excess fat around the liver? This is great for fatty liver patients. It detoxifies your body and burns all the extra fat.
        </p>
        <p>
          Sugar balance reduces your high cholesterol level and removes toxins from your blood, arteries, and veins, which helps to improve the natural circulation of the body. It targets the root cause of diabetes, which is excess liver fat.
        </p>
        <p>
          This supplement works on improving the function of the pancreas. Once you start taking this supplement, all the undesired fat around your body starts to melt, and you healthily lose weight.
        </p>
        <p>
          Moreover, it burns extra blood sugar, so you are always full of energy. Also, your mental and physical health is not compromised.
        </p>
        <p>
          Another benefit you would notice with these pills is increased energy and metabolism levels. As you would be losing and eating like a normal person, but you will not feel sluggish at all. But to get maximum benefits, it is better to follow a controlled diet and exercise routine.
        </p>
      </section>

      <section>
        <h2>why <span className="highlight">Sugar Balance</span>?</h2>
        <p>
          Sugar Balance is an excellent herbal supplement that supports you to stay healthy by controlling your blood sugar level with the aid of scientifically proven herbs and ingredients to stay healthy and fit forever. With the help of this supplement in your routine you can control your sugar cravings and maintain balance in your glucose level.
        </p>
        <ul>
          <li>It also supports the functions of your pancreas,</li>
          <li>It detoxifies the liver function,</li>
          <li>It cures diabetes without any side effects,</li>
          <li>It balances blood glucose levels and lowers your sugar craving,</li>
          <li>You can improve your health that you never experienced before,</li>
          <li>It helps to restore normal blood glucose levels.</li>
        </ul>
      </section>

      <section>
        <h2>How Do I Take <span className="highlight">Sugar Balance</span>?</h2>
        <p>
          As a dietary supplement, adults should take one (1) vegetarian capsule 3 times daily with meals, or as directed by a healthcare professional. It's always a good idea to drink lots of water throughout the day when using SugarBalance.
        </p>
      </section>

      <section className="certifications">
        <img src={fda} alt="FDA" />
        <img src={fda} alt="GMP Certified" />
        <img src={fda} alt="Made in USA" />
        <img src={fda} alt="NSF" />
      </section>
    </div>
  );
};

export default DetailsChild;
