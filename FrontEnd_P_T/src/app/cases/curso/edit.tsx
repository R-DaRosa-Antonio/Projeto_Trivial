import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICurso } from "../../../@libs/types";
import { CursoService } from "../../../services/curso.service";
import { CursoForm } from "./form";

export function CursoEdit() {
  const params = useParams();

  const [curso, setCurso] = useState<ICurso>({} as ICurso);

  useEffect(() => {
    
    if (params?.id) {
      CursoService.getById(Number(params.id))
        .then(result => {
          setCurso(result.data)
        })
    }
  }, [params]);

  return (
    <>
      <CursoForm curso={curso} setCurso={setCurso} showForm={true} />
    </>
    
  )
}