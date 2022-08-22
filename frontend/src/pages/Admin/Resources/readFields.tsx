import { FormikValues } from "formik";
import { UseQueryResult } from "react-query";

/**
 * The view fields.
 *
 * @param   {UseQueryResult<FormikValues>} resourcesQuery The react query data for specific resource.
 * @returns {Array}
 */
export const readFields = (resourcesQuery: UseQueryResult<FormikValues>) => {
  return [
    { width: "half", title: "Supplier", value: resourcesQuery?.data?.supplier_id.label },
    { width: "half", title: "Subcontractor", value: resourcesQuery?.data?.subcontractor_id.label },
    { width: "half", title: "First Name", value: resourcesQuery?.data?.resource_first_name },
    { width: "half", title: "Last Name", value: resourcesQuery?.data?.resource_last_name },
  ];
};
