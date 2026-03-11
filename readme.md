# ລະບົບບັນທຶກເວລາເຮັດວຽກດ້ວຍໃບໜ້າ

> ລະບົບບັນທຶກເວລາເຂົ້າວຽກຜ່ານການສະແກນໃບໜ້າ ຮ່ວມກັບການກວດສອບພິກັດ GPS (Geofencing) ໂດຍນຳໃຊ້ face-api.js ແລະ Google Sheets ເປັນຖານຂໍ້ມູນ.

## ✨ ຄຸນສົມບັດ

- 📷 **ຈົດຈຳໃບໜ້າ**: ໃຊ້ face-api.js (SSD MobileNet + FaceNet) ຄ່າ threshold 0.45
- 📍 **ກວດສອບ GPS**: ຄຳນວນໄລຍະທາງດ້ວຍສູດ Haversine ກຳນົດຣັດສະໝີໄດ້ຕາມຕ້ອງການ
- 📊 **Google Sheets**: ບັນທຶກຂໍ້ມູນພະນັກງານ, ປະຫວັດເຂົ້າວຽກ, ຕັ້ງຄ່າລະບົບ
- 🌐 **Static Hosting**: ສ້າງດ້ວຍ HTML/CSS/JS ລ້ວນໆ, ສາມາດ Deploy ຂຶ້ນ Netlify ໄດ້ທັນທີ
- 📱 **Mobile-First**: ອອກແບບມາເພື່ອການໃຊ້ງານບົນມືຖືເປັນຫຼັກ
- 🌙 **Dark Glassmorphism UI**: ດີໄຊນ໌ທັນສະໄໝ ພ້ອມເອັບເຟັກເງົາແກ້ວ

## 🛠️ ເທັກໂນໂລຢີທີ່ໃຊ້

- Frontend: HTML5, CSS3, JavaScript (Vanilla)
- Face AI: face-api.js v0.22.2
- Backend API: Google Apps Script Web App
- Database: Google Sheets
- Hosting: Netlify
- ຟອນ: Noto Sans Lao (Google Fonts)

## 🚀 ວິທີຕິດຕັ້ງ ແລະ ນຳໃຊ້

### ຂັ້ນຕອນທີ 1 — ສ້າງ Google Sheets ແລະ Google Apps Script

1. ສ້າງ **Google Sheets** ໃໝ່ (ລະບົບຈະສ້າງແຜ່ນງານໃຫ້ອັດຕະໂນມັດ)
2. ໄປທີ່ **Extensions → Apps Script**
3. ລຶບໂຄດເດີມຖິ້ມ, ແລ້ວ **ວາງໂຄດຈາກໄຟລ໌ `code.gs`** ໃສ່
4. ຄລິກ **Deploy → New deployment**
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. ຄລິກ **Deploy** ແລະ **ຄັດລອກ Web App URL** ທີ່ໄດ້

### ຂັ້ນຕອນທີ 2 — ແກ້ໄຂໄຟລ໌ `js/api-config.js`

ເປີດໄຟລ໌ `js/api-config.js` ແລ້ວແທນທີ່ URL ດ້ວຍ URL ທີ່ໄດ້ຈາກຂັ້ນຕອນທີ 1.

### ຂັ້ນຕອນທີ 3 — Deploy ຂຶ້ນ Netlify

**ວິທີທີ່ 1 — ລາກ ແລະ ວາງ (ງ່າຍທີ່ສຸດ)**

1. ໄປທີ່ [app.netlify.com/drop](https://app.netlify.com/drop)
2. ລາກໂຟນເດີທີ່ມີໄຟລ໌ທັງໝົດນີ້ໄປວາງ
3. ລໍຖ່າ 2-3 ວິນາທີ ຈະໄດ້ URL ເວັບໄຊທ໌ ເຊັ່ນ: `https://amazing-site-123.netlify.app`

**ວິທີທີ່ 2 — GitHub + Auto Deploy**

1. Push ໂຄດຂຶ້ນ GitHub repository
2. ໄປທີ່ app.netlify.com → **Add new site → Import an existing project**
3. ເລືອກ GitHub repo → Netlify ຈະ auto deploy ທຸກຄັ້ງທີ່ມີການ push

### ຂັ້ນຕອນທີ 4 — ຕັ້ງຄ່າລະບົບຄັ້ງທຳອິດ

1. ເປີດເວັບໄຊທີ່ Deploy ແລ້ວ: `https://your-site.netlify.app/config.html`
2. ກວດສອບວ່າ **GAS URL** ໃນຊ່ອງຖືກຕ້ອງ
3. ກົດ **"ດຶງຕຳແໜ່ງປັດຈຸບັນ"** ຫຼື ປ້ອນເສັ້ນຂະໜານ / ເສັ້ນແວງ ຂອງຈຸດທີ່ຕ້ອງການໃຫ້ເປັນຈຸດເຊັກອິນ
4. ກຳນົດ **ຣັດສະໝີ** ທີ່ອະນຸຍາດ (ໜ່ວຍ: ກິໂລແມັດ) ເຊັ່ນ `0.1` ແມ່ນ 100 ແມັດ
5. ກົດ **"ບັນທຶກການຕັ້ງຄ່າທັງໝົດ"**

## 📖 ວິທີໃຊ້ງານ

### 👤 ລົງທະບຽນພະນັກງານໃໝ່ — `/register.html`

1. ປ້ອນຊື່-ນາມສະກຸນ
2. ເບິ່ງກົງໄປທີ່ກ້ອງ ແລ້ວກົດ **"ບັນທຶກໃບໜ້າ"** (ຄັ້ງທີ 1)
3. ຫັນໜ້າໄປທາງຊ້າຍເລັກນ້ອຍ ກົດ **"ບັນທຶກເພີ່ມ"** (ຄັ້ງທີ 2)
4. ຫັນໜ້າໄປທາງຂວາເລັກນ້ອຍ ກົດ **"ບັນທຶກເພີ່ມ"** (ຄັ້ງທີ 3)

### 📷 ສະແກນເຂົ້າວຽກ — `/scan.html`

1. ກົດ **"ແຕະເພື່ອເລີ່ມສະແກນ"**
2. ລະບົບຈະກວດ GPS ວ່າຢູ່ໃນເຂດທີ່ກຳນົດບໍ່
3. ຖ້າຜ່ານ, ກ້ອງຈະເປີດ ແລະ ສະແກນໃບໜ້າອັດຕະໂນມັດ
4. ເມື່ອພົບໃບໜ້າທີ່ກົງກັນ, ຈະມີໜ້າຕ່າງຢືນຢັນປະກົດຂຶ້ນ
5. ກົດ **"ຢືນຢັນ"** ເພື່ອບັນທຶກເວລາ

### 📊 ເບິ່ງລາຍງານ

ເປີດ **Google Sheets** ທີ່ທ່ານສ້າງໄວ້ → ແຜ່ນ **"ປະຫວັດເຂົ້າວຽກ"**

## ⚙️ ການປັບຄ່າ

### ປັບຄວາມເຂັ້ມງວດຂອງການຈົດຈຳໃບໜ້າ

ເປີດໄຟລ໌ `scan.html` ຊອກຫາຄ່າ:

```javascript
const MATCH_THRESHOLD = 0.45;