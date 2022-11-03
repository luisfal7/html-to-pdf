import { MainLayout } from "../components/layout/MainLayout";
import { Typography, Container, Box } from "@mui/material";
import DropFile from "../components/DropFile/DropFile";

export default function HomePage() {
  return (
    <MainLayout>
      <Container maxWidth="sm">
        <Box padding={1}>
          <Typography variant="body1" gutterBottom sx={{ fontSize: 12 }}>
          Convierta instantáneamente archivos .HTML a formato .PDF con este convertidor en línea gratuito. Nada que instalar, sin registro, sin marca de agua.
          </Typography>
        </Box>
        <Box padding={1} sx={{ display: "flex" }}>
          <Typography
            mr={1}
            pr={1}
            variant="body1"
            gutterBottom
            sx={{ fontSize: 12, borderRight: "1px solid" }}
          >
            1
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ fontSize: 12 }}>
            Haga clic en el botón SUBIR ENLACE y copie el enlace que
            desea convertir y presione descargar.
          </Typography>
        </Box>
        <Box padding={1} sx={{ display: "flex" }}>
          <Typography
            mr={1}
            pr={1}
            variant="body1"
            gutterBottom
            sx={{ fontSize: 12, borderRight: "1px solid" }}
          >
            2
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ fontSize: 12 }}>
            Espere a que finalice el proceso de conversión, se descargará un archivo pdf automaticamente.
          </Typography>
        </Box>
        <DropFile />
      </Container>
    </MainLayout>
  );
}
