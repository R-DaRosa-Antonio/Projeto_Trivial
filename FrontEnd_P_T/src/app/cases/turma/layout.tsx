import { Outlet, useNavigate } from "react-router-dom"
import { Box, Button, Stack } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import BreadCrumb from "../../components/ui/bread-crumb"
import { TurmaDataGrid } from "./datagrid";

function TurmaLayout() {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/turmas/new')
  }

  return (
    <>
    <Stack className="page-container">
        <BreadCrumb title="Cadastro de Turmas" />
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'end',
            marginBottom: '1rem'
          }}
        >
          <Button 
            variant="contained"
            onClick={handleCreate}
          >
            <AddIcon />
            Adicionar
          </Button>
        </Box>

        <TurmaDataGrid />
        
        <Outlet />
      </Stack>
    </>
  )
}

export default TurmaLayout