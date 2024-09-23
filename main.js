function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate().setTitle("gestion de usuarios");
}

function obtenerUsuarios(){
    let hoja = SpreadsheetApp.openById("1b7elak8Q0SBfJn9-MTdnCgNm4WG2nwTBMns4oWqTrxo").getSheetByName("users");
    let datos = hoja.getDataRange().getValues();
    return datos
}