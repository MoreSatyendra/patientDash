import { Box, Button, TextField } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTDM } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import AddLocationTwoToneIcon from "@mui/icons-material/AddLocationTwoTone";
import SendIcon from "@mui/icons-material/Send";


const TDMsection = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "registerId", headerName: "Register ID", flex: 1 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "liveLocation", headerName: "Live Location", flex: 1.5 },
    {
      field: "contactno",
      headerName: "Contact No",
      flex: 1,
    },
    {
      field: "drcount",
      headerName: "Doctor Count",
      flex: 1,
    },
  ];

  return (
    <>
      <Box m="18px">
        <Header title="TDM" subtitle="List of TDM near you location  ..." />
        <Box display="flex" justifyContent="space-around">
          <TextField id="outlined-basic" label="TDM ID" variant="outlined" />
          <TextField id="outlined-basic" label="Location" variant="outlined" />
          <Button
            size="large"
            color="secondary"
            startIcon={<AddLocationTwoToneIcon color="secondary" />}
          >
            Live Location
          </Button>
          <Button
            color="secondary"
            size="large"
            endIcon={<SendIcon color="secondary" />}
          >
            gooooooo
          </Button>
        </Box>
        <Box
          m="30px 0 0 0"
          height="60vh"
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
        <Box m="20px 0 0 0" display="flex" justifyContent="space-between">
          <Box>
            <Button
              color="secondary"
              variant="contained"
              sx={{ width: 50, height: 30 }}
            >
              Back
            </Button>
          </Box>
          <Box
            display="flex"
            sx={{ width: "15%" }}
            justifyContent="space-between"
          >
            <Button
              color="secondary"
              variant="contained"
              sx={{ width: 50, height: 30 }}
            >
              Refresh
            </Button>
            <Button
              color="secondary"
              variant="contained"
              sx={{ width: 50, height: 30 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TDMsection;
