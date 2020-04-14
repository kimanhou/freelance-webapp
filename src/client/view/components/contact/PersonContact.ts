export default class PersonContact{
    private link : string;
    private tel : string;
    private email : string;
    private name : string;
    private linkedin : string;
    private postalAddress : string;

    constructor(name : string, link : string, tel : string, email : string, linkedin : string, postalAddress : string) {
        this.name = name;
        this.link = link;
        this.tel = tel;
        this.email = email;
        this.linkedin = linkedin;
        this.postalAddress = postalAddress;
    }

    getName = () => this.name;
    getLink = () => this.link;
    getTel = () => this.tel;
    getEmail = () => this.email;
    getLinkedin = () => this.linkedin;
    getPostalAddress = () => this.postalAddress;
}