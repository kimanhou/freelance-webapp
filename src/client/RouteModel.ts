const RouteModel = {
    index : {
        getLink : () => "/",
        getPath : () => "/"
    },
    work : {
        getLink : () => "/work",
        getPath : () => "/work",
    },
    about : {
        getLink : () => "/about",
        getPath : () => "/about",
    },
    contact : {
        getLink : () => "/contact",
        getPath : () => "/contact",
    },
    contactUser : {
        getLink : (user : string) => `/contact/${user}`,
        getPath : () => "/contact/:user",
    }
}
export default RouteModel;