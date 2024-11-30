import { Divider, List, ListItemButton, ListItemText } from "@mui/material";

function SideMenu() {
  return (
    <aside>
      <List
        component="nav"
      >
        <ListItemText
          primary="Cadastros" 
        />
        <ListItemButton
          href="/cursos"
        >
          <ListItemText primary="Cursos" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/Turmas"
        >
          <ListItemText 
            primary="Turmas" 
          />
        </ListItemButton>
        <Divider />
        <ListItemButton
          href="/alunos"
        >
          <ListItemText primary="Alunos" />
        </ListItemButton>
        <Divider />
      </List>
    </aside>
  )
}

export default SideMenu;