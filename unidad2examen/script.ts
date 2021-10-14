class examen{//juan carlos mendez jimenez
   public actividad1() : void{
        console.log("Hola Mundo");
    }
    public actividad2() : void{
        let cadena: string= "Hola Mundo:D";
        console.log(cadena);
    }
    public actividad3(nombre:any){
        nombre = prompt("Cual es  tu nombre :p");
        nombre = console.log("Hola " + nombre)
        return nombre;

    }
    public actividad4(nombre:any,numero:any){
        nombre = prompt("Cual es  tu nombre");
        numero = prompt("Tu numero es ")
        numero = parseInt(numero);
        for (var i = 0; i < numero; i++){
            document.write(nombre)
        }
    }
        public actividad6(edad : any){
            edad = prompt("ingrese tu edad")
            if (edad >= 18) {
                alert("Eres mayor de edad")
            } else {
                alert("Eres menor de edad")
            }
        }
        public actividad8(numero : any){
            numero = prompt("ingrese una palabra");
            for (let i = 0; i < 10; i++) {
                document.write(numero)
                
            }
        }
        public actividad9(años : any){
        años = prompt("años cumplidos")
        for (let i = 0; i < años; i++) {
            document.write((i + 1) + " Años ")
            
        }
    }
    public actividad7(password:any,contraseña:any){
        contraseña = "admin";
        password = prompt("Ingresa la contraseña")
        password = password.toLowerCase()
        if (contraseña == password) {
            console.log("La contraseña es correcta")
        } else {
            alert("La contraseña es incorrecta")
        }
    }
    public actividad5(nombre : any){
        nombre = prompt("cuales tu nombre")
        for (let i = 0; i < 3; i++) {
            document.write(nombre.toLowerCase())
            document.write(nombre.toUpperCase())
            
        }
    }

}
    const ejercicio = new examen();
ejercicio.actividad5();