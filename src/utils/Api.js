import config from "../utils/config";

export class Api {
    constructor() {
        this.baseUrl = config.api;
        this.error = {};
    };

    async get(url) {
        try {
            this.options = {
                method: "GET",
            };
            let response = await fetch(this.baseUrl + url, this.options);
            let json = await response.json();
            return json;
        } catch(err) {
            console.log(err);
            this.error.status = "Error";
            this.error.message = err.message || "Ocorreu um erro de conexão. Tente novamente mais tarde";
            return this.error;
        }
    };
}