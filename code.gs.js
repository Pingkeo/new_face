// ໄຟລ໌ນີ້ໃຫ້ຄັດລອກໄປໃສ່ Google Apps Script Editor

// ຊື່ Sheets (ສາມາດປ່ຽນເປັນພາສາລາວໄດ້)
const SHEET_NAMES = {
  USERS: 'ພະນັກງານ',
  ATTENDANCE: 'ປະຫວັດເຂົ້າວຽກ',
  CONFIG: 'ການຕັ້ງຄ່າ'
};

// ຟັງຊັນສຳລັບຮັບຄຳຂໍແບບ GET
function doGet(e) {
  const action = e.parameter.action;
  
  if (action === 'getConfig') {
    return getConfig();
  } else if (action === 'getKnownFaces') {
    return getKnownFaces();
  } else {
    return ContentService.createTextOutput(JSON.stringify({ error: 'ບໍ່ຮູ້ຈັກ action' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ຟັງຊັນສຳລັບຮັບຄຳຂໍແບບ POST
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const action = data.action;
  
  if (action === 'registerUser') {
    return registerUser(data);
  } else if (action === 'logAttendance') {
    return logAttendance(data);
  } else if (action === 'saveConfig') {
    return saveConfig(data);
  } else {
    return ContentService.createTextOutput(JSON.stringify({ error: 'ບໍ່ຮູ້ຈັກ action' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ສ້າງ Sheets ຖ້າຍັງບໍ່ມີ
function ensureSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // ກວດເບິ່ງ ແລະ ສ້າງແຕ່ລະ sheet
  for (const [key, name] of Object.entries(SHEET_NAMES)) {
    let sheet = ss.getSheetByName(name);
    if (!sheet) {
      sheet = ss.insertSheet(name);
      if (key === 'USERS') {
        sheet.getRange('A1:C1').setValues([['ຊື່', 'ຂໍ້ມູນໃບໜ້າ (JSON)', 'ວັນທີລົງທະບຽນ']]);
        sheet.getRange('A1:C1').setFontWeight('bold');
      } else if (key === 'ATTENDANCE') {
        sheet.getRange('A1:F1').setValues([['ຊື່', 'ເວລາ', 'ວັນທີ', 'ເສັ້ນຂະໜານ', 'ເສັ້ນແວງ', 'ລິ້ງແຜນທີ່']]);
        sheet.getRange('A1:F1').setFontWeight('bold');
      } else if (key === 'CONFIG') {
        sheet.getRange('A1:B1').setValues([['ພາລາມິເຕີ', 'ຄ່າ']]);
        sheet.getRange('A1:B1').setFontWeight('bold');
        // ຕັ້ງຄ່າເລີ່ມຕົ້ນ
        sheet.getRange('A2:B4').setValues([
          ['Target Latitude', '13.7563'],
          ['Target Longitude', '100.5018'],
          ['Allowed Radius (KM)', '0.1']
        ]);
      }
    }
  }
}

// ດຶງຂໍ້ມູນການຕັ້ງຄ່າ
function getConfig() {
  ensureSheets();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAMES.CONFIG);
  const data = sheet.getDataRange().getValues();
  
  let config = {};
  for (let i = 1; i < data.length; i++) {
    const param = data[i][0];
    const value = data[i][1];
    if (param === 'Target Latitude') config.targetLat = value;
    else if (param === 'Target Longitude') config.targetLng = value;
    else if (param === 'Allowed Radius (KM)') config.radius = value;
  }
  
  return ContentService.createTextOutput(JSON.stringify(config))
    .setMimeType(ContentService.MimeType.JSON);
}

// ບັນທຶກການຕັ້ງຄ່າ
function saveConfig(data) {
  ensureSheets();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAMES.CONFIG);
  
  // ລຶບຂໍ້ມູນເກົ່າ ແລະ ບັນທຶກໃໝ່
  sheet.getRange('A2:B').clear();
  sheet.getRange('A2:B4').setValues([
    ['Target Latitude', data.targetLat],
    ['Target Longitude', data.targetLng],
    ['Allowed Radius (KM)', data.radius]
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ດຶງຂໍ້ມູນໃບໜ້າທີ່ຮູ້ຈັກ
function getKnownFaces() {
  ensureSheets();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAMES.USERS);
  const data = sheet.getDataRange().getValues();
  
  let faces = [];
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] && data[i][1]) {
      faces.push({
        name: data[i][0],
        descriptors: JSON.parse(data[i][1]) // ຄາດຫວັງວ່າເປັນ array ຂອງ descriptors
      });
    }
  }
  
  return ContentService.createTextOutput(JSON.stringify(faces))
    .setMimeType(ContentService.MimeType.JSON);
}

// ລົງທະບຽນຜູ້ໃຊ້ໃໝ່
function registerUser(data) {
  ensureSheets();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAMES.USERS);
  
  // ບັນທຶກຊື່, descriptors (ເປັນ JSON), ແລະ ເວລາ
  sheet.appendRow([
    data.name,
    JSON.stringify(data.descriptors),
    new Date().toLocaleString()
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ບັນທຶກປະຫວັດການເຂົ້າວຽກ
function logAttendance(data) {
  ensureSheets();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAMES.ATTENDANCE);
  
  // ສ້າງລິ້ງ Google Maps
  const mapLink = `https://www.google.com/maps?q=${data.latitude},${data.longitude}`;
  
  sheet.appendRow([
    data.name,
    data.time,
    data.date,
    data.latitude,
    data.longitude,
    mapLink
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}