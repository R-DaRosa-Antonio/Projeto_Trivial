import { Outlet, useNavigate } from "react-router-dom"
import { Box, Button, Stack } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import BreadCrumb from "../../components/ui/bread-crumb"
import { AlunoDataGrid } from "./datagrid";

function AlunoLayout() {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/alunos/new')
  }

  return (
    <>
    <Stack className="page-container">
        <BreadCrumb title="Cadastro de Gêneros" />
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

        <AlunoDataGrid />
        
        <Outlet />
      </Stack>
    </>
  )
}

export default AlunoLayout