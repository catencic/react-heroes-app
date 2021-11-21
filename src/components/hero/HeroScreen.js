import { useMemo } from "react";
import { Navigate, useParams } from "react-router"
import { useNavigate} from 'react-router-dom'
import { getHeroById } from "../../selectors/getHeroById";



export const HeroScreen = () => {

    
    const {heroeId} =useParams();

    const navigate = useNavigate();
    
    const hero = useMemo(()=> getHeroById(heroeId),[heroeId]);  
    
   if(!hero){
       return <Navigate to='/'/>
   };
   
   const {id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters} = hero;
    
    
    const imgPath = `/assets/heroes/${id}.jpg`; 


    const handleReturn = () => {
        navigate(-1);
        
    }


    return (
        <div className="row mt-5 animate__animated animate__bounceInLeft">
           <div className="col-4">
               <img 
                    src={imgPath}
                    alt= {superhero}
                    className="img-thumbnail"
               />
           </div>

             <div className="col-8">
                <h3>{superhero} </h3> 
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"> <b>Alter ego:</b> {alter_ego} </li>
                  <li className="list-group-item"> <b>Publisher:</b> {publisher} </li>
                  <li className="list-group-item"> <b>First appearance:</b> {first_appearance} </li>

                </ul>

                <h5 className="mt-3">characters</h5>
                <p>{ characters}</p>

                <button 
                className="btn btn-outline-info"
                onClick= {handleReturn}
                >

                    Regresar
                </button>

            </div>

        </div>
    )
}
