import React from "react";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { Paper, Box, Typography, Button } from "@mui/material";

const DropFile = () => {
  return (
    <Box m={3}>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "250px",
          borderRadius: "10px",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          m={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button variant="contained" color="primary" sx={{ padding:'0px 38px 0px 38px', marginRight:'10px' }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowCircleUpOutlinedIcon sx={{ marginRight: "12px" }} />
              <Typography
                variant="inherit"
                sx={{
                  fontSize: 10,
                }}
              >
                subir
              </Typography>
            </Box>
          </Button>
          <Button variant="contained" color="secondary">
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <HighlightOffOutlinedIcon sx={{ marginRight: "12px" }} />
              <Typography
                variant="inherit"
                sx={{
                  fontSize: 10,
                }}
              >
                borrar cola
              </Typography>
            </Box>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            border: "1px gray dashed",
            borderRadius: "10px",
          }}
        >
          <Typography
            mt={5}
            mr={15}
            mb={5}
            ml={15}
            variant="body1"
            gutterBottom
            sx={{ fontSize: 12 }}
          >
            Arrastre aquí sus archivos.
          </Typography>
        </Box>
        <Box
          m={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button variant="contained" color="secondary">
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowCircleDownIcon sx={{ marginRight: "12px" }} />
              <Typography
                variant="inherit"
                sx={{
                  fontSize: 10,
                }}
              >
                todos los archivos
              </Typography>
            </Box>
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default DropFile;
