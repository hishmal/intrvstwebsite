import { React } from "react";
import "./Contact.css";
import Select from "react-select";

function Contact() {
  const options = [
    { value: "INTRVST", label: "INTRVST", name: "INTRVST" },
    { value: "INTRVST Healthcare", label: "INTRVST Healthcare" },
    { value: "INTRVST Energy", label: "INTRVST Energy" },
    { value: "INTRVST Finance", label: "INTRVST Finance" },
    { value: "INTRVST Agriculture", label: "INTRVST Agriculture" },
    { value: "INTRVST Edge Computing", label: "INTRVST Edge Computing" },
    {
      value: "INTRVST Commercial Foods",
      label: "INTRVST Commercial Foods",
    },
  ];

  return (
    <div className="section contact">
      <span>Reasons for Inquiry</span>

      <form
        accept-charset="UTF-8"
        action="https://formsubmit.co/hishi2021@outlook.com"
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://intrvst.co/thanks" />
        <div
          className="selectDiv"
          style={{ marginBlockEnd: "50px", marginBlockStart: "20px" }}
        >
          <select
            name="Product"
            style={{
              height: "60px",
              padding: "10px",
              width: "100%",
              color: "#000",
              fontSize: "16px",
            }}
          >
            <option value="INTRVST" label="INTRVST" name="INTRVST">
              INTRVST
            </option>
            <option value="INTRVST Healthcare" label="INTRVST Healthcare">
              INTRVST Healthcare
            </option>
            <option value="INTRVST Energy" label="INTRVST Energy">
              INTRVST Energy
            </option>
            <option value="INTRVST Finance" label="INTRVST Finance">
              INTRVST Finance
            </option>
            <option value="INTRVST Agriculture" label="INTRVST Agriculture">
              INTRVST Agriculture
            </option>
            <option
              value="INTRVST Edge Computing"
              label="INTRVST Edge Computing"
            >
              Edge Computing
            </option>
            <option
              value="INTRVST Commercial Foods"
              label="INTRVST Commercial Foods"
            >
              INTRVST Commercial Foods
            </option>
          </select>
        </div>

        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Company Name
          <input type="text" name="companyName" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Phone number
          <input type="number" name="phone" required />
        </label>
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ cursor: "pointer" }}
        />
      </form>
    </div>
  );
}

export default Contact;
