import { useState, useEffect } from "react";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import {
  Paper,
  Box,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const DropFile = () => {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState("");
  const [validLink, setValidLink] = useState(true);

  const expresiones = {
    link: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
  };

  const handleValidationLink = (e: any) => {
    setLink(e.target.value);

    if (expresiones.link.test(e.target.value)) {
      setValidLink(true);
    } else {
      setValidLink(false);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDisabled = (validLink: any) => {
    if (validLink) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async(e: any) => {
    e.preventDefault()

    console.log(link)

    handleClose()

    await fetch("api/url", {
      method: "POST",
      body: link,
      headers: {
        "Content-Type": `text/plain`,
      },
    })
    
  };

  const download = () => {

    if(link){
      const linka = document.createElement("a");
      linka.download = "page.pdf";
      linka.href = "/page.pdf";
      linka.click();
    }

  }

  const deleteLink = () => {

    if(link){
      setLink('')
    }else{
      link
    }

  }

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
          <Button
            onClick={handleClickOpen}
            variant="contained"
            color="primary"
            sx={{ padding: "0px 38px 0px 38px", marginRight: "10px" }}
          >
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
                enlace
              </Typography>
            </Box>
          </Button>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Agrega Enlace</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Para transformar la pagina web a .pdf pega el enlace en el campo
                siguiente y presiona aceptar.
              </DialogContentText>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="enlace"
                  label="Enlace"
                  fullWidth
                  variant="standard"
                  value={link}
                  error={!validLink}
                  required
                  onChange={(e) => handleValidationLink(e)}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Box component="form" onSubmit={handleSubmit}>
                <Button
                  type="submit"
                  disabled={handleDisabled(validLink)}
                >
                  Aceptar
                </Button>
              </Box>
            </DialogActions>
          </Dialog>
          <Button variant="contained" color="secondary" onClick={deleteLink}>
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
                borrar enlace
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
            {link ? link : 'seleccione un enlace'}
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
          <Button variant="contained" color="secondary" onClick={download}>
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
                Descargar PDF
              </Typography>
            </Box>
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default DropFile;
