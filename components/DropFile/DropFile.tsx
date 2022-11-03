import { useState } from "react";
import { saveAs } from "file-saver";
import { useSnackbar } from "notistack";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
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
  DialogTitle
} from "@mui/material";

const DropFile = () => {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState("");
  const [validLink, setValidLink] = useState(true);
  const { enqueueSnackbar } = useSnackbar()

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    handleClose();

    try{
      enqueueSnackbar('Descargando PDF',{
        variant:'success',
        autoHideDuration: 4000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        }
      })
      await fetch("api/download", {
        method: "POST",
        body: link,
        headers: {
          "Content-Type": `text/plain`,
        }
      }).then((res) => {
        return res
          .arrayBuffer()
          .then((res) => {
            const blob = new Blob([res], { type: "application/pdf" });
            saveAs(blob, "page-lf.pdf");
          })
          .catch((e) => alert(e));
      });
    }catch(error){
      enqueueSnackbar('Algo salio mal!',{
        variant:'error',
        autoHideDuration: 4000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        }
      })
      console.log(error)
    }
    
  };

  const deleteLink = () => {
    if (link) {
      setLink("");
    } else {
      link;
    }
  };

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
          justifyContent: "center"
        }}
      >
        <Box
          m={2}
          mb={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%"
          }}
        >
          <Button
            onClick={handleClickOpen}
            variant="contained"
            color="success"
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
              <ContentCopyOutlinedIcon sx={{ marginRight: "12px" }} />
              <Typography
                variant="inherit"
                sx={{
                  fontSize: 10,
                }}
              >
                copiar enlace
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
                <Button type="submit" disabled={handleDisabled(validLink)}>
                  Descargar
                </Button>
              </Box>
            </DialogActions>
          </Dialog>
          <Button variant="contained" color="error" onClick={deleteLink}>
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
            {link ? link : "seleccione un enlace"}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default DropFile;
