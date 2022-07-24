import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import querystring from 'query-string'
import { getHeroesByName } from "../helpers"



export const SearchPage = () => {



  const navigate = useNavigate()
  const location = useLocation()
  
  const { q = '' } = querystring.parse( location.search )

  const heroes = getHeroesByName(q) // recordar que la funcion getHeroesByName filtra los heroes. La q es el strign que se le pasa por paramtro para la busqueda
 
  const { formState, onInputChange, onResetForm, searchText  } = useForm({
    searchText: q
  })

  const showSearch = (q.length === 0);
  const showError = (q.length > 0 ) && heroes.length === 0;

  const onSearchSubmit = (e) => {
    e.preventDefault()
    // if(searchText.trim().length < 1) return

    navigate(`?q=${searchText}`)
   
}


  return (
    <>

       <h1> Search </h1>
       <hr/>

      <div className="row">
      <div className="col-5">
      <h4> Searching  </h4>
      <hr/>

      <form onSubmit={ onSearchSubmit } aria-label='form' >
      <input
        type='text'
        placeholder='Searh a Hero'
        className='form-control'
        name='searchText'
        autoComplete="off"
        onChange={ onInputChange }
        value={ searchText }
      />

      <button className="btn btn-outline-primary mt-1">
        Search
      </button>
      </form>

      </div>

      <div className="col-7">

      <h4> Results </h4>
      <hr/>

      {/* {
        (q === '')
        ? <div className="alert alert-primary"> Search a Hero </div>
        : (heroes.length === 0) && <div className="alert alert-danger"> There is a no Results { q } </div>
      } */}

    
      <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? '' : 'none' }}> 
      Search a Hero 
      </div>
      
      <div  aria-label='alert-danger' className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError ? '' : 'none'}}> 
      There is a no Results { q } 
      </div>
      

      {
        heroes.map(hero =>
        <HeroCard key={hero.id}
          {...hero}
        />
        )
      }

      
      </div>
      </div>

    </>
  )
}
