import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { TableToolBar } from "./TableToolbar";
import { useRenderTableCell } from "hooks/useRenderTableCell";

export const Table = ({
  rows,
  tableConfig,
  handleRowDoubleClick,
  handleRowClick = null,
  handleTableNewButton,
}: // todo: Define a good type. "Any" type temporarily permitted.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
any) => {
  const { tableColumns, initialState } = tableConfig;

  const DataGridStyles = {
    //Remove cell selection border
    "& .MuiDataGrid-cell:focus": {
      outline: "none",
    },
    ".MuiDataGrid-columnHeader": {
      background: "#0a1d41",
    },
    ".MuiDataGrid-iconSeparator, .MuiDataGrid-sortIcon, .MuiDataGrid-columnHeader, .MuiDataGrid-menuIcon,.MuiDataGrid-filterIcon,.MuiDataGrid-menuIconButton":
      {
        color: "#fff",
      },
    //  use rem instead of px
    "&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell": { py: "8px" },
    "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": { py: "15px" },
    "&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell": { py: "22px" },
  };

  const BoxStyles = { width: "100%" };

  return (
    <Box sx={BoxStyles}>
      {rows && (
        <DataGrid
          getRowHeight={() => "auto"}
          getEstimatedRowHeight={() => 400}
          columns={tableColumns}
          rows={rows}
          initialState={initialState}
          onRowClick={handleRowClick}
          onRowDoubleClick={handleRowDoubleClick}
          sx={DataGridStyles}
          slots={{ toolbar: () => TableToolBar(handleTableNewButton), cell: useRenderTableCell }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: {
                variant: "outlined",
                size: "small",
              },
            },
          }}
        />
      )}
    </Box>
  );
};
