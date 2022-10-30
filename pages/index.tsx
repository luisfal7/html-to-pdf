import { MainLayout } from "../components/layout/MainLayout";
import { Typography, Container, Box } from "@mui/material";
import DropFile from "../components/DropFile/DropFile";

export default function HomePage() {
  return (
    <MainLayout>
      <Container maxWidth="sm" sx={{border:'1px solid'}}>
        <Box padding={1}>
          <Typography variant="body1" gutterBottom sx={{ fontSize: 12 }}>
            Este conversor de PDF gratuito le permite guardar un documento como
            un grupo de imágenes PNG separadas, garantizando una mejor calidad y
            un mejor tamaño de imagen que cualquier otra herramienta para
            Convertir PDF a imágenes.
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
            Haga clic en el botón SUBIR y seleccione hasta 20 archivos PDF que
            desee convertir. Luego espere a que el proceso de conversión
            finalice.
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
            Descargue los resultados, ya sea archivo por archivo o haciendo clic
            en el botón TODOS LOS ARCHIVOS para guardarlos todos al mismo tiempo
            en un archivo ZIP comprimido.
          </Typography>
        </Box>
        <DropFile />
      </Container>
    </MainLayout>
  );
}
