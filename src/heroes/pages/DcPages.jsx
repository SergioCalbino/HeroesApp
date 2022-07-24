import { HeroList } from "../components/HeroList"



export const DcPages = ( {publisher} ) => {

  console.log(publisher)
  return (
   <>

      <h1>DC Comics</h1>
      <hr />

      <HeroList 
          publisher='DC Comics'/>



   </>
  )
}
