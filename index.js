
const gastos = [];

function AgregarIngreso(ingreso, concepto){
    ingresos.push({
        ingreso, 
        concepto
    })
}

function core(){
    let bandera = true

    while(bandera){
        let opciones = Number(prompt("Eloge una opción:\n 1-Ingreso\n 2-Gasto\n 3-Eliminar Ingreso\n 4-Eliminar Gasto\n 5-Mostrar Ingresos y Gastos\n "))
    
        switch(opciones){
            case 0:
                return
            case 1:
                let ingreso = Number(prompt("Importe de ingreso:"))
                let concepto = prompt("Concepto del ingreso")
                console.log(concepto + ingreso)
                AgregarIngreso()
                bandera = confirm("Continuar...")
                break
            case 2:
                bandera = confirm("Continuar...")
                break
            case 3:
                bandera = confirm("Continuar...")
                break
            case 4:
                bandera = confirm("Continuar...")
                break
            case 5:
                bandera = confirm("Continuar...")
                break
        }
    }
}

core()