import { Outlet, useNavigate } from "react-router-dom"
import { Box, Button, Stack } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import BreadCrumb from "../../components/ui/bread-crumb"
import { ProfessorDataGrid } from "./datagrid";

function ProfessorLayout() {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/professors/new')
  }

  return (
    <>
    <Stack className="page-container">
        <BreadCrumb title="Cadastro de Professores" />
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

        <ProfessorDataGrid />
        
        <Outlet />
      </Stack>
    </>
  )
}

export default ProfessorLayout