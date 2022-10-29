import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTDM } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const TDMsection = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },

    {
      field: "name",
      headerName: "Name",
      flex: 1.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "location",
      headerName: "Location",
      flex: 1.5,
    },
    { field: "liveLocation", headerName: "Live Location", flex: 1.5 },
    {
      field: "specialization",
      headerName: "Specialization",
      flex: 1.5,
    },
  ];

  return (
    <Box m="18px">
      <Header title="TDM" subtitle="List of TDM near you ..." />
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
          rows={mockDataTDM}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default TDMsection;
