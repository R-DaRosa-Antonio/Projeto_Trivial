import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProfessor } from "../../../@libs/types";
import { ProfessorService } from "../../../services/professor.service";
import { ProfessorForm } from "./form";

export function ProfessorEdit() {
  const params = useParams();

  const [professor, setProfessor] = useState<IProfessor>({} as IProfessor);

  useEffect(() => {
    
    if (params?.id) {
      ProfessorService.getById(params.id)
        .then(result => {
          setProfessor(result.data)
        })
    }
  }, [params]);

  return (
    <>
      <ProfessorForm professor={professor} setProfessor={setProfessor} showForm={true} />
    </>
    
  )
}