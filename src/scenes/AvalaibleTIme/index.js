import { Box} from "@mui/system";
 import {Button,Typography}   from "@mui/material";
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
                    variant="h4"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    textAlign="center"
                    sx={{ m: "0 0 5px 0" }}
                  >
                    TDM ID :TDMId01
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h4"
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
                    variant="h4"
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
                    variant="h4"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    textAlign="center"
                    sx={{ m: "0 0 5px 0" }}
                  >
                    Doctor Id : DocId01
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
          <Box>
            <Button
              color="secondary"
              variant="contained"
              sx={{ width: 120, height: 72 }}
              startIcon={<VerifiedIcon color={colors.grey[100]} />}
            >
              Verify
            </Button>
          </Box>
        </Box>
        <Box m="30px 0 0 0" height="60vh">
          HEY
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
}

export default AvalaibleTime