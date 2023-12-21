class Libro {
    constructor(titulo, autor, texto) {
        this.autor = autor;
        this.titulo = titulo;
        this.texto = `${this.titulo}, de ${this.autor.toUpperCase()}`
    }
    mostrarDatosEnConsola() {
        console.log(`${this.texto}`)
    }
    mostrarDatosEnAlert() {
        alert(`${this.texto}`)
    }
    getTitulo() {
        return this.titulo
    }
    mostrarDatos(notificacion) {
        if (notificacion === "alert") {
            alert(this.texto)
        } else if (notificacion === "console" || notificacion !== "") {

            console.log(this.texto)
        }
    }
}

let unLibro = new Libro('Ángeles y Demonios', 'Dan Brown')
// punto 3
unLibro.mostrarDatosEnConsola()
// punto 4
unLibro.mostrarDatosEnAlert()

// punto 5
let nuevolibro = new Libro('Fuego y Sangre', 'George R. R. Martin');
let tituloDelNuevoLibro = nuevolibro.getTitulo();
alert(tituloDelNuevoLibro)
// punto 6
nuevolibro.mostrarDatos()