import React, { useEffect, useState, useLayoutEffect } from "react";

const TeamMember = ({ name, role }) => {
  const [counter, setCounter] = useState(0);
  //console.log("State vars init in Func Comp");

  useEffect(() => {
    //console.log("This is useEffect in Func Comp" + name);

    return () => {
      //console.log("The component is unmounted in Fun comp");
    };
  }, []);

  //   useEffect(() => {
  //     console.log("This is useEffect after every update in Func Comp" + name);
  //   });

  //   useEffect(() => {
  //     console.log("This is useEffect after counter updated in Func Comp" + name);
  //   }, [counter]);

  //   useLayoutEffect(() => {
  //     console.log("This is useLayoutEffect in Func Comp " + name);
  //     return () => {
  //       console.log("The component is unmounted in Fun comp " + name);
  //     };
  //   }, []);

  return (
    <div>
      {/* {console.log("This is return from Func Component")} */}
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment Counter
      </button>
      <h1> Count: {counter}</h1>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
};

export default TeamMember;
