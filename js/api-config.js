// ກະລຸນາປ່ຽນ URL ນີ້ດ້ວຍ URL ຈາກ Google Apps Script ຂອງທ່ານ
const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbwS6izr0N9d1TIKKFDIFTqa2m53Zjfn7CQkwPHW_G_ms6WyDSWpGyHHrT5mY23Vk4AL9w/exec';

// ບໍ່ຄວນແກ້ໄຂຫຍັງຕໍ່ຈາກນີ້
if (!GAS_API_URL || GAS_API_URL.includes('ທີ່ຢູ່ຂອງທ່ານ')) {
    console.error('ກະລຸນາຕັ້ງຄ່າ GAS_API_URL ໃນໄຟລ໌ js/api-config.js');
}
