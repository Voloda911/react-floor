import React, { useState, useRef, useEffect } from "react";
import instoll from "./img/instoll.jpg";
import logo from "./img/LOGO1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import corouselImg13 from "./img/pexels-max-rahubovskiy-7018824.jpg";
import corouselImg14 from "./img/pexels-max-rahubovskiy-7214467.jpg";
function FloorMain() {
  const [showInfo, setShowInfo] = useState(false);
  const [anima, setAnima] = useState(false);
  const [openedAnswers, setOpenedAnswers] = useState({});
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const infoRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (infoRef.current && !infoRef.current.contains(event.target)) {
        setIsInfoVisible(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const toggleInfoBlock = (event) => {
    event.stopPropagation();
    setIsInfoVisible(!isInfoVisible);
  };
  useEffect(() => {
    if (isInfoVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });
  const issues = [
    {
      questions: "How much does floor installation cost?",
      answer:
        "The price of having a new laminate floor installed depends on the size of your space and the materials you choose, which include your laminate flooring, molding, and trim. The installation project includes a professional measure, underlayment, and installation. On average, laminate customers spend $3,400, including all labor and materials. For additional details, visit our laminate flooring installation cost guide. The Home Depot offers financing options to help with your payment plan.",
    },
    {
      questions: "What types of flooring are available?",
      answer:
        "Yes, moldings and trims cover blank space and create a transition from one floor to the next, or from the floor to the wall. These items are included in your laminate floor installation project.",
    },
    {
      questions: "Where can laminate flooring be installed?      ",
      answer:
        "Laminate flooring is an excellent choice for many rooms in your home, including your living room, bedrooms, dining room, hall, stairs or basement. Waterproof laminate or water-resistant laminate are also good options for kitchens and bathrooms.",
    },
    {
      questions: "Is underlayment required for installing laminate?      ",
      answer:
        "Underlayment is not required when installing laminate flooring, but it is recommended. Underlayment helps reduce noise when your floor is walked on. Many underlayments are mold- and mildew-resistant, sealing out moisture toprotect your floors. Our laminate installers can help you choose the right underlayment option for your floor.",
    },
    {
      questions: "  Can laminate be installed over an uneven subfloor?",
      answer:
        "Yes, you would still be able to install laminate, but it is not recommended. Our professional installers will level your subfloor prior to installation. Their expertise will ensure you have a flat surface.",
    },
    {
      questions: "How do I clean and maintain laminate flooring?",
      answer:
        "Caring for your new laminate flooring is easy. Laminate may be mopped, but must be dried after. Blot spills as soon as they happen. Do not use chemicals, wax, polish or any abrasive cleaners. Use protective pads or sliders for furniture. When properly cared for, laminate can last 15-20 years.",
    },
  ];
  const toggleParagraph = (index) => {
    setOpenedAnswers((prevState) => {
      if (prevState[index]) {
        return {};
      }

      return { [index]: true };
    });
  };
  function toggleInformation() {
    setShowInfo(!showInfo);

    setAnima(!showInfo);
  }

  return (
    <div className="floor_main">
      <img className="fullscreen-img2" src={instoll} alt="" />

      <div className="animationClass"></div>
      <div className="maine-content">
        {" "}
        <h1>Author's projects</h1>
        <p className="p_">
          Have our experts to measure your floors and give you an estimate based
          on the The specific flooring you will choose.
        </p>
        <div className="block_project">
          <div>
            {" "}
            <span>500 sq.ft </span>
          </div>
          <div>
            {" "}
            <span>1100sq.ft</span>
          </div>
          <div>
            {" "}
            <span>2100sq.ft</span>
          </div>{" "}
        </div>
      </div>
      <div className="block_info_goods">
        <button className="btn_v4" onClick={toggleInfoBlock}>
          let's compare the difference{" "}
        </button>
        {isInfoVisible && (
          <div className="info_goods">
            <div
              ref={infoRef}
              className={`goods ${isInfoVisible ? "anima_g" : ""}`}
            >
              <div className="left_info">
                <h3>work hytte</h3>
                <img src={corouselImg13} alt="" />
                <ul>
                  <li>Personalized approach</li>
                  <li>Flexibility and adapt</li>
                  <li>Openness and transp</li>
                  <li>After-sales service and support</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, possimus? Voluptatum numquam expedita qui similique
                  blanditiis, aspernatur quisquam. Voluptatem eligendi in
                  exercitationem deserunt, amet consequuntur consequatur quis
                  saepe possimus modi!
                </p>
              </div>
              <div className="right_info">
                <h3>classic market</h3>

                <img src={corouselImg14} alt="" />
                <ul>
                  <li>Standardized</li>
                  <li>Limited flexibility</li>
                  <li>Focus on volume rather than quality</li>
                  <li>Limited after-sales support</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, possimus? Voluptatum numquam expedita qui similique
                  blanditiis, aspernatur quisquam. Voluptatem eligendi in
                  exercitationem deserunt, amet consequuntur consequatur quis
                  saepe possimus modi!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <FontAwesomeIcon
        onClick={toggleInformation}
        className="arroy"
        icon={faAnglesDown}
      />

      <div className={`element_block ${anima ? "animate" : ""}`}>
        <h1>Frequently Asked Questions</h1>
        <div className="question_sec">
          {issues.map((issue, index) => (
            <div key={index}>
              <h2
                className="question_to"
                onClick={() => toggleParagraph(index)}
              >
                {issue.questions}
              </h2>
              {openedAnswers[index] && (
                <p className={`answers ${openedAnswers ? "animate_p" : ""}`}>
                  {issue.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FloorMain;
