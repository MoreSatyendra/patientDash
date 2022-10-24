import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataDocs } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const DoctorList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "registrarId", headerName: "Registrar ID", flex: 1.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1.5,
    },
    {
      field: "specialization",
      headerName: "Specialization",
      flex: 1.5,
    },
  ];

  return (
    <Box m="18px">
      <Header
        title="DOCTORS"
        subtitle="List of Doctors you have visited..."
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[500],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataDocs}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default DoctorList;
