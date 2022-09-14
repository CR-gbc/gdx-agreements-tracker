import React from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { IChipNav } from "types";
import { ChipNav } from "../../../components/GDXForm/ChipNav";

/**
 * This reusable component renders the projects component
 *
 * @param   {object}             query React query that contains all projects
 * @returns {React.ReactElement}       The project component
 */

export const Project = () => {
  const { projectId } = useParams();

  const chipNavLinks: IChipNav[] = [
    {
      key: 0,
      name: "Project Details",
      url: `/projects/${projectId}`,
    },
    {
      key: 1,
      name: "Change Request",
      url: `/projects/${projectId}/change-request`,
    },
    {
      key: 2,
      name: "Billing",
      url: `/projects/${projectId}/billing`,
    },
  ];

  const chipNavLinksRight: IChipNav[] = [
    {
      key: 5,
      name: "Close Out",
      url: `/projects/${projectId}/close-out`,
    },
  ];

  return (
    <>
      <ChipNav navLinks={chipNavLinks} navLinksRight={chipNavLinksRight} />
      <Outlet />
    </>
  );
};
