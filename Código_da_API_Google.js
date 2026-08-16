function doPost(e) {
  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);
    var sheetName = data.sheet; 
    var sheet = doc.getSheetByName(sheetName);
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": "Aba não encontrada!" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
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

function doGet(e) {
  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName("Apoiadores");
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": "Aba Apoiadores não encontrada!" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    var data = sheet.getDataRange().getValues();
    var result = [];
    
    // Ignora o cabeçalho (linha 0)
    for (var i = 1; i < data.length; i++) {
      result.push({
        data: data[i][0],
        id: data[i][1],
        nome: data[i][2],
        telefone: data[i][3],
        cidade: data[i][4],
        lideranca: data[i][5]
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
