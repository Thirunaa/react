import React, { useEffect } from "react";
import TeamMember from "./TeamMember";
import TeamMemberClass from "./TeamMemberClass";

const OurTeam = () => {
  //console.log("Parent - Func comp in Our team init");

  useEffect(() => {
    //console.log("Parent - This is useEffect in Func Comp");
  }, []);
  return (
    <div>
      {/* {console.log("Parent -  Func comp in Our team return")} */}
      <h1>Our Team</h1>
      <TeamMember name="Leela Manoj" role="Java  Developer" />
      <TeamMemberClass name="Vishnu" role="Angular Developer" />
      <TeamMember name="Thiru" role="React Developer" />
    </div>
  );
};

export default OurTeam;
