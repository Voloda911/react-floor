import React, { useEffect, useState } from "react";
import mairImg from "./img/forTest.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function InfoReg() {
  const [open, setOpen] = useState(false);
  const [openCall, setOpenCall] = useState(false);
  const [step, setStep] = useState(1);
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitted2, setIsSubmitted2] = useState(false);

  const [isCurrentValue, setIsCurrentValue] = useState(false);
  const cleanValue = (event) => {
    event.preventDefault();
    if (numberValue.trim() && nameValue.trim() !== "") {
      setNameValue("");
      setNumberValue("");
      setIsSubmitted(true); // Указываем, что форма успешно отправлена

      // Здесь можно добавить задержку перед тем, как скрыть сообщение и форму
      setTimeout(() => {
        setIsSubmitted(false); // Скрываем сообщение об успешной отправке
        setOpenCall(false); // Закрываем форму/вызов
      }, 2000); // Длительность отображения сообщения об успехе
    } else {
      setTimeout(() => {
        setOpenCall(false); // Закрываем форму/вызов без установки isSubmitted, если поля пусты
      }, 2000);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };
  const checkValue = (event) => {
    event.preventDefault();
    if (event.target.placeholder === "Name") {
      setNameValue(event.target.value);
    }
    if (event.target.placeholder === "Number") {
      setNumberValue(event.target.value);
    }
  };
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        !event.target.closest("#remove") &&
        !event.target.closest(".remove")
      ) {
        setOpen(false);
        setOpenCall(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  useEffect(() => {
    setIsCurrentValue(nameValue.trim() !== "" && numberValue.trim() !== "");
  }, [nameValue, numberValue]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
    email: "",
  });
  const resetFormData = () => {
    setFormData({
      name: "",
      phone: "",
      address: "",
      date: "",
      email: "",
    });
  };
  useEffect(() => {
    if (step === 1) {
      resetFormData();
    }
  }, [step]);

  const handleNextStep = (event) => {
    event.preventDefault();

    let isCurrentFieldFilled = false;
    switch (step) {
      case 1:
        isCurrentFieldFilled = formData.name.trim() !== "";
        if (!isCurrentFieldFilled) {
          alert("Please fill in the name.");
        }
        break;
      case 2:
        isCurrentFieldFilled = formData.phone.trim() !== "";
        if (!isCurrentFieldFilled) {
          alert("Please fill in the phone.");
        }
        break;
      case 3:
        isCurrentFieldFilled = formData.address.trim() !== "";
        if (!isCurrentFieldFilled) {
          alert("Please fill in the address.");
        }
        break;
      case 4:
        isCurrentFieldFilled = formData.date.trim() !== "";
        if (!isCurrentFieldFilled) {
          alert("Please fill in the date.");
        }
        break;
      case 5:
        isCurrentFieldFilled = formData.email.trim() !== "";
        if (!isCurrentFieldFilled) {
          alert("Please fill in the email.");
        } else {
          setIsSubmitted2(true);

          setTimeout(() => {
            setIsSubmitted2(false);

            setTimeout(() => {
              setIsSubmitted(true);

              setTimeout(() => {
                setIsSubmitted(false);
                setStep(1);
                setOpen(true);
              }, 3000);
            }, 500);
          }, 2500);
        }
    }
    if (isCurrentFieldFilled) {
      if (step < 5) {
        setStep((prevStep) => prevStep + 1);
      } else {
        setStep(1);
        setOpen(true);
      }
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const toggleOpen = () => {
    if (window.innerWidth <= 2024) {
      setOpen((prevOpen) => !prevOpen);
      if (openCall) {
        setOpenCall(false);
      }
    } else {
      setOpen((prevOpen) => !prevOpen);
    }
  };
  const toggleCall = () => {
    if (window.innerWidth <= 2024) {
      setOpenCall(!openCall);
      if (open) setOpen(false);
    } else {
      setOpenCall(!openCall);
    }
  };
  return (
    <div className="info_reg">
      <img className="photo_reg" src={mairImg} alt="" />
      <div className="reg_content">
        <div className="elements_">
          <button
            className={`make_ remove ${open ? "hide_make" : ""}`}
            onClick={toggleOpen}
          >
            make
          </button>
          <div id="remove" className={`blck_reg ${open ? "open" : ""}`}>
            <form onSubmit={handleNextStep}>
              {step === 1 && (
                <input
                  className="data_"
                  placeholder="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              )}
              {step === 2 && (
                <input
                  className="data_"
                  placeholder="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                />
              )}
              {step === 3 && (
                <input
                  className="data_"
                  placeholder="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                />
              )}
              {step === 4 && (
                <input
                  className="data_"
                  placeholder="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  min="2023-01-01"
                  max="2025-12-31"
                />
              )}
              {step === 5 && (
                <input
                  className="data_"
                  placeholder="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              )}
            </form>
            <div className="info_success">
              {isSubmitted2 && (
                <div className="loading-spinner">
                  <div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}

              {isSubmitted && (
                <div className="secses-masengare">
                  <div className="success-checkmark">
                    <div className="check-icon">
                      <span className="icon-line line-tip"></span>
                      <span className="icon-line line-long"></span>
                      <div className="icon-circle"></div>
                      <div className="icon-fix"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button type="submit" className="btn_v2" onClick={handleNextStep}>
              {step < 5 ? "Next" : "Send"}
            </button>
          </div>
          <button
            id="remove"
            className={`btn_v3 ${openCall ? "showSend" : ""}`}
            onClick={toggleCall}
          >
            {" "}
            get a callback{" "}
          </button>
          <div
            id="remove"
            className={`blck_call ${openCall ? "openCall" : ""}`}
          >
            <input value={nameValue} placeholder="Name" onChange={checkValue} />
            <input
              value={numberValue}
              placeholder="Number"
              onChange={checkValue}
              maxLength="10"
            />{" "}
            {isSubmitted && (
              <div className="secses-masengare">
                <div className="success-checkmark">
                  <div className="check-icon">
                    <span className="icon-line line-tip"></span>
                    <span className="icon-line line-long"></span>
                    <div className="icon-circle"></div>
                    <div className="icon-fix"></div>
                  </div>
                </div>
              </div>
            )}
            <button onClick={cleanValue} className="btn_v3">
              {" "}
              send{" "}
            </button>
          </div>{" "}
        </div>
      </div>
      {/* fooser */}
      <div className="footer">
        <div className="foot_address">
          <p>545 NW 26th Street, Miami,FL 33127</p>
        </div>
        <div className="network">
          <a
            href="https://www.linkedin.com/in/volodymyr-siuryk-a837692b4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="icon_"
              target="_blank"
              icon={faLinkedinIn}
            />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100090156600273"
          >
            <FontAwesomeIcon className="icon_" icon={faFacebookF} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/vv.siuryk/?next=%2F"
          >
            {" "}
            <FontAwesomeIcon className="icon_" icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
}
export default InfoReg;
