import { useEffect, useState } from "react";
import data from "../db.json";

const Banner = (props) => {
  const [familyData, setFamilyData] = useState([]);

  useEffect(() => {
    setFamilyData(data.family);
  }, []);

  const showFamily = () => {
    return familyData.map((member) => {
      let textColor = "";
      if (member.gender === "female") {
        textColor = "yellow";
      } else {
        textColor = "green";
      }
      return (
        <div style={{ color: textColor }}>
          {member.name} as a {member.role}
        </div>
      );
    });
  };

  return (
    <>
      <div className="banner-area">
        <div className="side-banner"></div>
        <img className="badder" src={props.url} alt="" />
        <div className="side-banner"></div>
      </div>
      {/* <div>
        <h1 className="family">Soundify family member:</h1>
        <div className="member">{showFamily()}</div>
      </div> */}
    </>
  );
};

export default Banner;
