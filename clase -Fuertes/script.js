class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getApellido() {
    return this.apellido;
  }

  setApellido(apellido) {
    this.apellido = apellido;
  }

  getLibros() {
    return this.libros;
  }

  setLibros(libros) {
    this.libros = libros;
  }

  getMascotas() {
    return this.mascotas;
  }

  setMascotas(mascotas) {
    this.mascotas = mascotas;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(libro, autor) {
    let newBook = { libro: libro, autor: autor };
    this.libros.push(newBook);
  }

  getBookNames() {
    let bookNameList = [];
    this.libros.forEach((element) => {
      bookNameList.push(element.libro);
    });

    return bookNameList;
  }
}
/** Fin de la clase Usuario */

/** Clase principal */

let libros = [
  { libro: "El señor de las moscas", autor: "William Golding" },
  { libro: "Fundacion", autor: "Isaac Asimov" },
];

let user = new Usuario("Alejandro", "Fuertes", libros, [
  "Perro",
  "Gato",
  "Conejo",
]);

console.log(user.getFullName());
console.log(user.getMascotas());

user.addMascota("Caballo");
console.log(user.getMascotas());
console.log(user.countMascotas());

/** En este sector estoy presentando un problema:
 * Si dejo comentada la linea user.addBook(...) en el primer console log que esta debajo, me muestra correctamente 2 libros:
 * El señor de las moscas
 * Fundacion
 *
 * PERO si dejo la linea user.addBook(...) en el primer console log que esta debajo, me muestra:
 * El señor de las moscas
 * Fundacion
 * Game of thrones
 *
 * No se supone que en el primer console log deberia mostrarse solo El señor de las moscas y fundacion? y ya despues que haya pasado por addBook,
 * deberia mostrarse los 3 libros ?
 */
console.log(user.getLibros());
user.addBook("Game of thrones", "George R. R. Martin");
console.log(user.getLibros());

/** FIN DEL PROBLEMA */

console.log("Los libros son los siguientes: " + user.getBookNames());
