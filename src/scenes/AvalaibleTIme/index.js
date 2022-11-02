import { Box} from "@mui/system";
 import {Button,Grid,Typography}   from "@mui/material";
import React from 'react'
import Header from '../../components/Header';
import AddLocationTwoToneIcon from "@mui/icons-material/AddLocationTwoTone";
import {  useTheme } from "@mui/material";
import { tokens } from "../../theme";
import VerifiedTwoToneIcon from "@mui/icons-material/VerifiedTwoTone";
import VerifiedIcon from "@mui/icons-material/Verified";
const AvalaibleTime = () => {
      const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box m="18px">
        <Header
          title="Avalaible Time"
          subtitle="Find your suitable TimeSlots  ..."
        />
        <Box mb="34px">
          <Typography
            variant="h4"
            color={colors.greenAccent[500]}
            fontWeight="bold"
            sx={{ m: "0 0 5px 0" }}
            textAlign="center"
          >
            Appoinment Details
          </Typography>
        </Box>

        <Box m="20px" display="flex" justifyContent="space-around">
          <Box
            display="flex"
            justifyContent="space-around"
            sx={{ border: 1, width: "85%" }}
          >
            <Box
              sx={{ width: "70%", height: 75 }}
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              borderRadius="4"
            >
              <Box display="flex" justifyContent="space-around">
                <Box>
                  <Typography
                    variant="h5"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    textAlign="center"
                    sx={{ m: "0 0 5px 0" }}
                  >
                    TDM ID : TDMId01
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    textAlign="center"
                    sx={{ m: "0 0 5px 0" }}
                  >
                    Date : 12.03.12
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-around">
                <Box>
                  <Typography
                    variant="h5"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    textAlign="center"
                    sx={{ m: "0 0 5px 0" }}
                  >
                    Doctor Name : Alex Rayan
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    textAlign="center"
                    sx={{ m: "0 0 5px 0" }}
                  >
                    Doctor ID : DocId01
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <AddLocationTwoToneIcon
                color="secondary"
                size="large"
                sx={{ width: 70, height: 67 }}
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button
               color="secondary"
              variant="contained"
              sx={{ width: "5rem", height: "3rem" }}
              startIcon={<VerifiedIcon color={colors.grey[100]} />}
            >
              Verify
            </Button>
          </Box>
        </Box>
        <Box m="30px 0 0 0" height="60vh">
          <Box mb="34px">
            <Typography
              variant="h4"
              color={colors.greenAccent[500]}
              fontWeight="bold"
              sx={{ m: "0 0 5px 0" }}
              textAlign="center"
            >
              Book your Time slot
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" m="24px">
            <Box
              sx={{
                height: "55vh",

                minWidth: "35vw",
                border: 1,
                borderRadius: "7px",
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ m: "0 0 5px 0" }}
                  textAlign="center"
                >
                  Morning-AM
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  rowGap: 2,
                  columnGap: 3,
                  width: "100%",
                  height: "75%",
                  marginTop: 4,
                }}
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                    disabled
                  >
                    6.15
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    7.15
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    8.00
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    6.30
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                    disabled
                  >
                    7.30
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    8.15
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    6.45
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    7.45
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    8.30
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    8.45
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    9.00
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    9.30
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                height: "55vh",
                minWidth: "35vw",
                border: 1,
                borderRadius: "7px",
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ m: "0 0 5px 0" }}
                  textAlign="center"
                >
                  Evening-PM
                </Typography>
              </Box>
              <Grid
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  rowGap: 2,
                  columnGap: 3,
                  width: "100%",
                  height: "75%",
                  marginTop: 4,
                }}
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    6.15
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    7.15
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                    disabled
                  >
                    8.00
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    6.30
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                    disabled
                  >
                    7.30
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    8.15
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    6.45
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    7.45
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    8.30
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    8.45
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    9.00
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    color="success"
                    variant="contained"
                    sx={{ fontSize: "1rem", color: "white" }}
                  >
                    9.15{" "}
                  </Button>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box m="20px 0 0 0" display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center">
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
          margin="18px"
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
    </>
  );
}

export default AvalaibleTime