// ກະລຸນາປ່ຽນ URL ນີ້ດ້ວຍ URL ຈາກ Google Apps Script ຂອງທ່ານ
const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbxTt9TRGBEvQ09ERcjQovDRZ9lDUG_NL03vsTkWpz1poVi-5ro50OThetH443RLeYVrkw/exec';

// ບໍ່ຄວນແກ້ໄຂຫຍັງຕໍ່ຈາກນີ້
if (!GAS_API_URL || GAS_API_URL.includes('ທີ່ຢູ່ຂອງທ່ານ')) {
    console.error('ກະລຸນາຕັ້ງຄ່າ GAS_API_URL ໃນໄຟລ໌ js/api-config.js');
}