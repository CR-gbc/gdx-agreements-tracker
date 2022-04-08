import React from "react";
import { useParams } from "react-router-dom";
import { DetailsList } from "../../../components";

export const Project = () => {
  let { projectId } = useParams();

  return (
    <>
      <DetailsList id={projectId} title={"project"} />
    </>
  );
};