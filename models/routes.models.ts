export const Routes = {
    HOME:{
        name:'HOME',
        path:'/'
    },
    CHARACTERS:{
        name:'CHARACTERS',
        path:'information/characters'
    },
    LOCATIONS:{
        name:'LOCATIONS',
        path:'information/locations'
    },
}

export interface Route {
    name: string,
    path:string
}