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
        mark : {
            getLink : () => `/about/mark`,
            getPath : () => "/about/mark",
        },
        kimAnh : {
            getLink : () => `/about/kim-anh`,
            getPath : () => "/about/kim-anh",
        }
    },
    contact : {
        getLink : () => "/contact",
        getPath : () => "/contact",
    },
    contactUser : {
        getLink : (user : string) => `/contact/${user}`,
        getPath : () => "/contact/:user",
    },
}
export default RouteModel;