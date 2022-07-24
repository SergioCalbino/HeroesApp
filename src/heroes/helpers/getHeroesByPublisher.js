import { heroes } from "../data/heroes";


// Esta es la funcion que me permite filtrar por heroes en base al publisher



export const getHeroesByPublisher = ( publisher ) => {
 
        const validPublishers = ['Marvel Comics', 'DC Comics' ]
        if( !validPublishers.includes( publisher ) ) {
            throw new Error( `El ${publisher} is a not valid publisher ` )
        }

        return heroes.filter( heroe => heroe.publisher === publisher )

}
