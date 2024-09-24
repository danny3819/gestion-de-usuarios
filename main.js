const hoja = SpreadsheetApp.openById("1b7elak8Q0SBfJn9-MTdnCgNm4WG2nwTBMns4oWqTrxo").getSheetByName("users");

function doGet() {
    return HtmlService.createTemplateFromFile("index").evaluate().setTitle("gestion de usuarios");
}

// function doPost(datosResividos) {
//     insertarUsuario(datosResividos.parameter.correo,
//                      datosResividos.parameter.nombre,
//                      "USER",
//                      datosResividos.parameter.turno,
//                      datosResividos.parameter.contrasena,)

//     return HtmlService.createTemplateFromFile("index").evaluate().setTitle("gestion de usuarios");
// }

function obtenerUsuarios() {
    let datos = hoja.getDataRange().getValues()
    return datos;
}

function insertarUsuariogs(correo, nombre, tipo, turno, contrasena) {
    hoja.appendRow([correo, nombre, tipo, turno, contrasena])
}