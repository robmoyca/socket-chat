class Usuarios {
    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;

    }

    getPersona(id) {
        let persona = this.personas.filter(pers => {
            return pers.id === id;
        })[0];
        // Alternativa de la busqueda de arriba seria
        //let persona =  this.personas.filter( pers => persona.id === id)[0];
        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(pers => {
            return pers.sala === sala;
        });
        return personasEnSala;
    }


    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(pers => {
            return pers.id !== id;
        });
        // Alternativa de la busqueda de arriba seria
        //let personas =  this.personas.filter( pers => persona.id != id);
        return personaBorrada;
    }

}

module.exports = {
    Usuarios
};