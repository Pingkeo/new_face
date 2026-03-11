// ໄຟລ໌ສຳລັບຈັດການຂໍ້ຄວາມພາສາລາວ
const translations = {
    // ຂໍ້ຄວາມທົ່ວໄປ
    appName: 'ບັນທຶກເວລາເຮັດວຽກດ້ວຍໃບໜ້າ',
    loading: 'ກຳລັງໂຫຼດ...',
    success: 'ສຳເລັດ',
    error: 'ເກີດຂໍ້ຜິດພາດ',
    confirm: 'ຢືນຢັນ',
    cancel: 'ຍົກເລີກ',
    save: 'ບັນທຶກ',
    back: 'ກັບ',
    
    // ໜ້າລົງທະບຽນ
    register: {
        title: 'ລົງທະບຽນພະນັກງານໃໝ່',
        nameLabel: 'ຊື່ ແລະ ນາມສະກຸນ',
        namePlaceholder: 'ຕົວຢ່າງ: ທະນົງສັກ ສຸລິຍະ',
        step1: 'ເບິ່ງກົງໄປທີ່ກ້ອງ ແລ້ວກົດ "ບັນທຶກໃບໜ້າ"',
        step2: 'ຫັນໜ້າໄປທາງຊ້າຍເລັກນ້ອຍ ແລ້ວກົດ "ບັນທຶກເພີ່ມ"',
        step3: 'ຫັນໜ້າໄປທາງຂວາເລັກນ້ອຍ ແລ້ວກົດ "ບັນທຶກເພີ່ມ"',
        saveFace: 'ບັນທຶກໃບໜ້າ',
        addMore: 'ບັນທຶກເພີ່ມ',
        register: 'ລົງທະບຽນ',
        capturing: 'ກຳລັງບັນທຶກ...',
        faceCount: 'ຈຳນວນໃບໜ້າທີ່ບັນທຶກແລ້ວ: {count}',
        minFaces: 'ກະລຸນາບັນທຶກຢ່າງໜ້ອຍ 3 ມຸມ',
        nameRequired: 'ກະລຸນາປ້ອນຊື່ ແລະ ນາມສະກຸນ',
        registerSuccess: 'ລົງທະບຽນສຳເລັດ',
        registerError: 'ລົງທະບຽນບໍ່ສຳເລັດ',
        cameraError: 'ບໍ່ສາມາດເປີດກ້ອງໄດ້'
    },
    
    // ໜ້າສະແກນ
    scan: {
        title: 'ສະແກນໃບໜ້າເຂົ້າວຽກ',
        startScan: 'ແຕະເພື່ອເລີ່ມສະແກນ',
        scanning: 'ກຳລັງສະແກນ...',
        matchFound: 'ພົບໃບໜ້າທີ່ກົງກັນ',
        confirmAttendance: 'ຢືນຢັນການເຂົ້າວຽກ',
        scanAgain: 'ສະແກນໃໝ່',
        locationCheck: 'ກຳລັງກວດສອບຕຳແໜ່ງ...',
        locationOk: 'ຕຳແໜ່ງຢູ່ໃນເຂດທີ່ກຳນົດ',
        locationError: 'ທ່ານຢູ່ນອກເຂດທີ່ກຳນົດ',
        gpsRequired: 'ກະລຸນາເປີດ GPS',
        attendanceSuccess: 'ບັນທຶກເວລາເຂົ້າວຽກສຳເລັດ',
        attendanceError: 'ບັນທຶກເວລາບໍ່ສຳເລັດ',
        name: 'ຊື່',
        time: 'ເວລາ',
        date: 'ວັນທີ'
    },
    
    // ໜ້າຕັ້ງຄ່າ
    config: {
        title: 'ຕັ້ງຄ່າລະບົບ',
        apiUrl: 'URL ຂອງ Google Apps Script',
        apiUrlPlaceholder: 'https://script.google.com/.../exec',
        currentLocation: 'ດຶງຕຳແໜ່ງປັດຈຸບັນ',
        latitude: 'ເສັ້ນຂະໜານ',
        longitude: 'ເສັ້ນແວງ',
        radius: 'ຣັດສະໝີທີ່ອະນຸຍາດ (ກິໂລແມັດ)',
        radiusPlaceholder: 'ຕົວຢ່າງ: 0.1 ແມ່ນ 100 ແມັດ',
        saveConfig: 'ບັນທຶກການຕັ້ງຄ່າທັງໝົດ',
        fetchConfig: 'ດຶງຂໍ້ມູນການຕັ້ງຄ່າ',
        saveSuccess: 'ບັນທຶກການຕັ້ງຄ່າສຳເລັດ',
        saveError: 'ບັນທຶກການຕັ້ງຄ່າບໍ່ສຳເລັດ',
        loadError: 'ດຶງຂໍ້ມູນການຕັ້ງຄ່າບໍ່ສຳເລັດ',
        radiusZero: 'ຖ້າໃສ່ 0 ຈະຂ້າມການກວດ GPS'
    },
    
    // ຂໍ້ຄວາມແຈ້ງເຕືອນ
    alert: {
        cameraPermission: 'ກະລຸນາອະນຸຍາດໃຫ້ເຂົ້າເຖິງກ້ອງ',
        locationPermission: 'ກະລຸນາອະນຸຍາດໃຫ້ເຂົ້າເຖິງຕຳແໜ່ງ',
        httpsRequired: 'ກະລຸນາໃຊ້ HTTPS ເທົ່ານັ້ນ'
    }
};

// ຟັງຊັນຊ່ວຍສຳລັບການແທນທີ່ຂໍ້ຄວາມ
function t(key, params = {}) {
    let keys = key.split('.');
    let value = translations;
    for (let k of keys) {
        if (value[k] === undefined) return key;
        value = value[k];
    }
    if (typeof value === 'string') {
        return value.replace(/{(\w+)}/g, (match, p1) => params[p1] || match);
    }
    return value;
}