class Usuarios {

    constructor() {
        this.personas = [];

    }

    agregarPersona(id, nombre, sala) {

        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;
    }


    getPersona(id) { //return     // Solo quiero el primero que encuentre (son unicos)
        let persona = this.personas.filter(person => person.id === id)[0];

        // si no encuentra es undefined o null
        return persona;
    }


    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(person => person.id != id);

        return personaBorrada;

    }

}

module.exports = {
    Usuarios
}