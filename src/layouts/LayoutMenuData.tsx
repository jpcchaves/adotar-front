import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  //state data
  const [isPets, setIsPets] = useState<boolean>(false);

  const [iscurrentState, setIscurrentState] = useState("");

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
  }, [history, iscurrentState, isPets]);

  const menuItems: any = [
    {
      label: "Home",
      isHeader: true,
    },
    {
      id: "pets",
      label: "Pets",
      icon: "ri-dashboard-2-line",
      link: "/#",
      stateVariables: isPets,
      click: function (e: any) {
        e.preventDefault();
        setIsPets((prevState) => !prevState);
        setIscurrentState(() => "Pets");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "available-pets",
          label: "Pets Disponiveis",
          link: "/pets",
          parentId: "pets",
        },
        {
          id: "example",
          label: "Pagina exemplo",
          link: "/example",
          parentId: "pets",
        },
      ],
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
