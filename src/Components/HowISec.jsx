import React, { useState, useRef, useEffect } from "react";
import howWorks from "./img/howWokrs.jpg";
import forHowWork from "./img/forHowWorks.jpg";

function HowItWorks() {
  const [visibleBlocks, setVisibleBlocks] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const steps = [
    {
      number: 1,
      title: "Pick your flooring",
      description:
        "The our company has a wide range of flooring choices to fit any room, lifestyle, budget and timeline. We offer the best assortment with the newest looks and colors along with timeless choices.",
    },
    {
      number: 2,
      title: "Schedule an in-home appointment",
      description:
        "Once you have selected your flooring, We will send a certified technician to your home to review the rooms needing new flooring, take precise measurements, and make note of any special installation requirements. We come when it works for you.",
    },
    {
      number: 3,
      title: "Receive your personalized quote",
      description:
        "You will receive a personalized project quote within 48 hours of your in-home appointment. We can review this quote with you over the phone, or back in the store, and make any necessary changes.",
    },
    {
      number: 4,
      title: "Complete your purchase",
      description:
        "After finalizing your quote, there are multiple ways to pay for your project. You can complete your purchase over the phone or back in our store. Home Depot offers a range of flexible credit options.",
    },
    {
      number: 5,
      title: "New flooring installed",
      description:
        "We set up your installation appointment within 24-48 hours of your purchase. Our local, licensed installers take care of everything to get your new flooring installed. Most flooring installations are completed in 1 day.",
    },
  ];

  const blockRefs = useRef([]);
  blockRefs.current = [];

  useEffect(() => {
    blockRefs.current = blockRefs.current.slice(0, steps.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = blockRefs.current.indexOf(entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleBlocks((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    blockRefs.current.forEach((block) => observer.observe(block));
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="section_how">
      <img className="how_works_picture" src={howWorks} alt="" />
      <h1 className="text_how">How it works</h1>
      <div className="info_how">
        {steps.map((step, index) => (
          <div
            className="block_how_check"
            key={step.number}
            ref={(el) => (blockRefs.current[index] = el)}
            style={{
              opacity: visibleBlocks[index] ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <div className="number-circle">{step.number}</div>
            <div>
              <h1>{step.title}</h1>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="block_">
        <img className="img_block" src={forHowWork} alt="" />
      </div>
    </div>
  );
}
export default HowItWorks;
