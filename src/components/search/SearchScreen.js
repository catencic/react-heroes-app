import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../../selectors/getHeroByName";
import { HeroCard } from "../hero/HeroCard";
import { useMemo } from "react";

 


 export const SearchScreen = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const {q = ''} = queryString.parse(location.search);
    

    const [ formValues, handleInputChange ] = useForm( {
        searchText: q
    } );

    const {searchText} = formValues;

    
    
    const heroesFileted = useMemo(()=> getHeroByName(q),[q]); 

   
    
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
        
    }

    

    


    return (
        <>
            <h1>Búsqueda</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                <h4>Buscar</h4>
                <hr/>

                <form onSubmit={handleSearch}>
                    <input
                    type="text"
                    placeholder="Buscar un héroe"
                    className="form-control"
                    name="searchText"
                    autoComplete="off"
                    value={searchText}
                    onChange={ handleInputChange }
                    />

                  <button
                  className="btn btn-outline-primary mt-1 "
                  type="submit"
                 
                  >

                      Buscar...
                  </button>

                </form>



                </div>

                <div className="col-7">
                 <h2>Resultados</h2>
                 <hr/>
                 
                 {
                     (q === '')
                     ? <div className="alert alert-info">Buscar un héroe</div>
                     : (heroesFileted.length === 0 ) && <div className="alert alert-danger">No hay resultados: { q }</div>
                 }

                 {
                     heroesFileted.map( hero =>(

                         <HeroCard 
                         key={hero.id}
                         {...hero}
                         />
                     ))
                     
                 }
                     
                     
                 

                </div>

            </div>

           
        </>
    )
}