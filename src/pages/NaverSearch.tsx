import React, {useEffect} from "react";

export const NaverSearch: React.FC = () => {
  useEffect(() => {
    async function fetchPassengerData() {
      const res = await fetch("./api.js");
      const data = await res.json();
      console.log("data:", data);
    }
    fetchPassengerData();
  }, []);

  return <div></div>;
};
