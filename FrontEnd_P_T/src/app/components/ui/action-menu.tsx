import { IconButton, Tooltip } from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit'


type ActionsMenuProps = {
  itemId: string | number;
}
function ActionsMenu({
  itemId
}: ActionsMenuProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleView = () => {
    const baseUrl = location.pathname;
    navigate(`${baseUrl}/${itemId}`);
  };

  return (
    <Tooltip title="Editar/remover o registro">
      <IconButton onClick={handleView}>
        <EditIcon/>
      </IconButton>
    </Tooltip>
  );
}

export default ActionsMenu;