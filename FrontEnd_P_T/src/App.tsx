import { Route } from "react-router-dom"
import { AlunoCreate } from "./app/cases/aluno/create"
import { AlunoEdit } from "./app/cases/aluno/edit"
import AlunoLayout from "./app/cases/aluno/layout"
import { CursoCreate } from "./app/cases/curso/create"
import { CursoEdit } from "./app/cases/curso/edit"
import CursoLayout from "./app/cases/curso/layout"
import { ProfessorCreate } from "./app/cases/professor/create"
import { ProfessorEdit } from "./app/cases/professor/edit"
import ProfessorLayout from "./app/cases/professor/layout"
import { TurmaCreate } from "./app/cases/turma/create"
import { TurmaEdit } from "./app/cases/turma/edit"
import TurmaLayout from "./app/cases/turma/layout"
import Header from "./app/components/ui/header"
import SideMenu from "./app/components/ui/side-menu"
import { ToastContainer } from "react-toastify"


function App() {

  return (
    <div className="wrapper">
      <Header />
      <main>
        <SideMenu/>
        <Route>
          <Route path="/categories" element={ <AlunoLayout/> }>
            <Route path="new" element={<AlunoCreate/>} />
            <Route path=":id" element={<AlunoEdit/>} />
          </Route>
          <Route path="/genres" element={ <ProfessorLayout/> }>
            <Route path="new" element={<ProfessorCreate />} />
            <Route path=":id" element={<ProfessorEdit/>} />
          </Route>
          <Route path="/movies" element={ <CursoLayout /> }>
            <Route path="new" element={<CursoCreate/>} />
            <Route path=":id" element={<CursoEdit/>} />
          </Route>
          <Route path="/movies" element={ <TurmaLayout/> }>
          <Route path="new" element={<TurmaCreate />} />
          <Route path=":id" element={<TurmaEdit/>} />
          </Route>
        </Route>
      </main>
      <ToastContainer />
    </div>
  )
}

export default App
