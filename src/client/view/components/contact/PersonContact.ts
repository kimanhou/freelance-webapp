export default class PersonContact{
    private link : string;
    private tel : string;
    private email : string;
    private name : string;

    constructor(name : string, link : string, tel : string, email : string){
        this.name = name;
        this.link = link;
        this.tel = tel;
        this.email = email;
    }

    getName = () => this.name;
    getLink = () => this.link;
    getTel = () => this.tel;
    getEmail = () => this.email;
}