function doPost(e) {
  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    
    // Transforma a requisição (que vem do CRM) em JSON
    var data = JSON.parse(e.postData.contents);
    var sheetName = data.sheet; // "Financeiro" ou "Apoiadores"
    var sheet = doc.getSheetByName(sheetName);
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": "Aba não encontrada!" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Adiciona a nova linha de acordo com o módulo
    if (sheetName === "Financeiro") {
      sheet.appendRow([new Date(), data.id, data.descricao, data.tipo, data.valor]);
    } else if (sheetName === "Apoiadores") {
      sheet.appendRow([new Date(), data.id, data.nome, data.telefone, data.cidade, data.lideranca]);
    }

    return ContentService.createTextOutput(JSON.stringify({ "status": "sucesso", "message": "Linha salva no Google Drive!" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
