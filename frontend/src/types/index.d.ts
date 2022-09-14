import { GridRowsProp, GridColDef } from "@mui/x-data-grid";

// Data Structures
export interface IUser {
  created_at: string;
  email: string;
  id: number;
  name: string;
  updated_at: string;
  username: string;
  roles?: unknown;
}

// Hooks
export interface IUseDrawer {
  drawerOpen: boolean;
  handleDrawerToggle: (event: React.MouseEvent<HTMLElement>) => void;
}

// Components
export interface IPageHeader extends IUseDrawer {
  headerTitle: string;
}

export interface ISidebar extends IUseDrawer {}

export interface ITable {
  rows: GridRowsProp;
  columns: GridColDef[];
  loading: boolean;
  onRowClick?: Function;
}

// Tables
export interface IColumn {
  id: number;
  field: string;
  headerName: string;
  flex: number;
}

export interface ITableData {
  data: { data: Array<Object> };
}

//Declartion that adds custom types to material ui predefined interfaces
declare module "@mui/material/styles" {
  interface Theme {
    customSettings: {
      BCGovAccentLine: string;
      topBarHeight: string;
      drawerWidth: number;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    customSettings?: Theme["customSettings"];
  }
}

// Project layout types
export interface IFormLayout {
  children: JSX.Element[] | JSX.Element;
}

//Picker Types
export interface IPickerLookupData {
  id: number;
  name: string;
  title: string;
  description: string;
  definition: { dropDownValues: { data: Array<Object> } };
}

//picker options types
export interface IPickerProps {
  handleChange: Function;
  fieldValue: IOption;
  setFieldValue: Function;
  pickerData: {
    associated_table: string;
    definition: IOption[];
    description: string;
    id: number;
    name: string;
    title: string;
  };
}

//checkbox types
export interface ICheckboxProps {
  onChange: Function;
  checked: boolean;
  fieldName: string;
  setFieldValue: Function;
}

export interface IPickerTableData {
  data: {
    data: [
      {
        associated_table: string;
        definition: [IOption];
        description: string;
        id: number;
        name: string;
        title: string;
      }
    ];
  };
}

export interface IProjectLayout {
  children: JSX.Element;
}

//Picker Types
export interface IPickerLookupData {
  id: number;
  name: string;
  title: string;
  description: string;
  definition: { dropDownValues: { data: Array<Object> } };
}

//ChipNav Types
export interface IChipNav {
  key: number;
  name: string;
  url: string;
}

//Project Form Props
export interface IProjectFormProps {
  // todo: Define a good type. "Any" type temporarily permitted.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query?: any;
  handleChange: Function;
  // todo: Define a good type. "Any" type temporarily permitted.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values: any;
  // todo: Define a good type. "Any" type temporarily permitted.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFieldValue: any;
  dirty: boolean;
}

//Change Request row Props

export interface IChangeRequestRow {
  approval_date: string;
  cr_contact: string;
  fiscal_year: number;
  id: number;
  initiated_by: string;
  initiation_date: string;
  link_id: number;
  summary: string;
  version: string;
}

export interface IFormControls {
  handleEditMode: Function;
  handleOpen: Function;
  handleClose: Function;
  handleCurrentRowData: Function;
  open: boolean;
  editMode: boolean;
  currentRowData: unknown;
}

export interface IUseFormSubmitHandleSubmit {
  // todo: Define a good type. "Any" type temporarily permitted.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changedValues: any;
  // todo: Define a good type. "Any" type temporarily permitted.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentRowData: any;
  apiUrl: string;
  handleEditMode: Function;
  queryKeys: string[];
  successMessage?: string;
  errorMessage?: string;
}

export interface IUseFormSubmitHandlePost {
  // todo: Define a good type. "Any" type temporarily permitted.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formValues: any;
  apiUrl: string;
  handleEditMode: Function;
  queryKeys: string[];
  successMessage?: string;
  errorMessage?: string;
  handleClose: Function;
}

export interface IEditFields {
  fieldName: string;
  fieldType: "select" | "date" | "singleText" | "multiText" | "checkbox" | "number";
  fieldLabel: string;
  width: "half" | "full";
  tableName?: string;
}

export interface IRadioGroup {
  name: string;
  formLabel: string;
  defaultValue: string;
  options: {
    parent: string | null;
    value: string;
    label: string;
  }[];
}

export interface IRadioButton {
  parent: string | null;
  value: string;
  label: string;
}
[];

export interface ICheckbox {
  id: string;
  label: string;
  input: string;
  defaultValue: string;
  parents: string[];
  options: IOption[];
}

export interface IDate {
  parents: string[];
  id: string;
  label: string;
  input: string;
  defaultValue: string;
  options: IOption[];
}

export interface IOption {
  value: number | string;
  label?: string;
}

export interface ISelect {
  id: string;
  label: string;
  input: string;
  defaultValue: string;
  parents: string[];
  options: IOption[];
}

export interface IDescription {
  name: string;
  formLabel: string;
  options: { id: number; value: string; parent: string }[];
}

export interface IData {
  isLoading: boolean;
  reportCategory: {
    name: string;
    formLabel: string;
    defaultValue: string;
    options: {
      parent: string | null;
      value: string;
      label: string;
    }[];
  };
  reportType: {
    name: string;
    formLabel: string;
    defaultValue: string;
    options: {
      parent: string;
      value: string;
      label: string;
    }[];
  };
  reportParameters: {
    name: string;
    formLabel: string;
    components: Array<ISelect | IDate | ICheckbox>;
  };
  reportDescription: {
    name: string;
    formLabel: string;
    options: { id: number; value: string; parent: string }[];
  };
}

export interface ICurrentUser {
  id: number;
  name: string;
  email: string;
  role_id: {
    value: number;
    label: string;
  };
}
