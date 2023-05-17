export class Contact {
    first_name = '';
    last_name = '';
    email = '';
    connected = false;

    constructor(first_name, last_name, email, connected){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.connected = connected;
    }

}