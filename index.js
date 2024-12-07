const ingresos = [];
const gastos = [];

function AgregarIngreso(ingreso, concepto) {
    ingresos.push({
        ingreso,
        concepto
    });
}

function core() {
    let bandera = true;

    while (bandera) {
        let opciones = Number(
            prompt(
                "Elige una opción:\n 1-Ingreso\n 2-Gasto\n 3-Mostrar Ingresos y Gastos\n 4-Salir"
            )
        );

        switch (opciones) {
            case 1:
                let ingreso = Number(prompt("Importe de ingreso:"));
                if (!isNaN(ingreso) && ingreso > 0) {
                    let concepto = prompt("Concepto del ingreso:");
                    AgregarIngreso(ingreso, concepto);
                    alert("Ingreso registrado.");
                } else {
                    alert("Por favor, ingresa un importe válido.");
                }
                break;

            case 2:
                let gasto = Number(prompt("Importe del gasto:"));
                if (!isNaN(gasto) && gasto > 0) {
                    let descripcion = prompt("Descripción del gasto:");
                    gastos.push({
                        gasto,
                        descripcion
                    });
                    alert("Gasto registrado.");
                } else {
                    alert("Por favor, ingresa un importe válido.");
                }
                break;

            case 3:
                console.log("=== Ingresos ===");
                ingresos.forEach((ing, index) =>
                    console.log(`${index + 1}. ${ing.concepto}: $${ing.ingreso}`)
                );
                console.log("=== Gastos ===");
                gastos.forEach((g, index) =>
                    console.log(`${index + 1}. ${g.descripcion}: $${g.gasto}`)
                );
                break;

            case 4:
                bandera = false;
                alert("Saliendo del programa.");
                break;

            default:
                alert("Opción no válida. Inténtalo nuevamente.");
                break;
        }
    }
}

core();
