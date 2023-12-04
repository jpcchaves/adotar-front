import React, { SyntheticEvent, useEffect, useState } from "react";

const Navdata = () => {
  //state data
  const [isPets, setIsPets] = useState<boolean>(false);
  const [isExample, setIsExample] = useState<boolean>(false);

  const [iscurrentState, setIscurrentState] = useState("Pets");

  function updateIconSidebar(e: any) {
    if (e && e.target && e.target.getAttribute("sub-items")) {
      const ul: any = document.getElementById("two-column-menu");
      const iconItems: any = ul.querySelectorAll(".nav-icon.active");
      const activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        const id = item.getAttribute("sub-items");
        const getID = document.getElementById(id) as HTMLElement;
        if (getID) getID.classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState !== "Pets") {
      setIsPets(() => false);
    }

    if (iscurrentState !== "Apps") {
      setIsExample(() => false);
    }
  }, [iscurrentState, isPets, isExample]);

  const menuItems: any = [
    {
      label: "Home",
      isHeader: true,
    },
    {
      id: "pets",
      label: "Pets",
      icon: "ri-dashboard-2-line",
      link: "/pets",
      stateVariables: isPets,
      click: function (e: SyntheticEvent) {
        e.preventDefault();
        setIsPets((prevState) => !prevState);
        setIscurrentState(() => "Pets");
        updateIconSidebar(e);
      },
    },
    {
      id: "example",
      label: "Example Page",
      icon: "ri-dashboard-2-line",
      link: "/example",
      stateVariables: isExample,
      click: function (e: SyntheticEvent) {
        e.preventDefault();
        setIsExample((prevState) => !prevState);
        setIscurrentState(() => "Example");
        updateIconSidebar(e);
      },
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
