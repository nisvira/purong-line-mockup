/* ============================================================
   Mockup LINE OA อบต.ปุโรง — shared helpers
   ============================================================ */
(function () {
  const ORG = {
    name: "องค์การบริหารส่วนตำบลปุโรง",
    short: "อบต.ปุโรง",
    area: "อ.กรงปินัง จ.ยะลา",
    address: "เลขที่ 26/3 หมู่ที่ 3 ต.ปุโรง อ.กรงปินัง จ.ยะลา 95000",
    web: "www.pu-rong.go.th",
    villages: ["หมู่ที่ 1 บ้านโฉลง", "หมู่ที่ 2 บ้านปุโรง", "หมู่ที่ 3 บ้านตะโล๊ะปานะ", "หมู่ที่ 4 บ้านลูโบ๊ะกาโล"],
  };

  /* ---------- icons (stroke, 24px viewBox) ---------- */
  const P = {
    megaphone: '<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/><path d="M8 14h2v2H8z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    news: '<path d="M4 5h13v14H6a2 2 0 0 1-2-2V5Z"/><path d="M17 9h3v8a2 2 0 0 1-2 2"/><path d="M8 9h5M8 13h5M8 16h3"/>',
    coin: '<circle cx="12" cy="12" r="9"/><path d="M14.8 9.2c-.5-.8-1.5-1.2-2.8-1.2-1.7 0-2.8.8-2.8 2s1.1 1.7 2.8 2 2.8.8 2.8 2-1.1 2-2.8 2c-1.3 0-2.4-.5-2.9-1.3M12 6.5V8m0 8v1.5"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    more: '<circle cx="5" cy="12" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/><circle cx="19" cy="12" r="1.3" fill="currentColor"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    keyboard: '<rect x="2.5" y="6" width="19" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>',
    chevDown: '<path d="m6 9 6 6 6-6"/>',
    chevRight: '<path d="m9 6 6 6-6 6"/>',
    send: '<path d="M4 12 20 4l-5 16-3-7-8-1Z"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
    bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z"/>',
    road: '<path d="M8 3 4 21M16 3l4 18M12 4v3M12 11v3M12 18v2"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/>',
    shield: '<path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
    alert: '<path d="M12 4 2.5 20h19L12 4Z"/><path d="M12 10v4M12 17h.01"/>',
    tree: '<path d="M12 21v-5M7 16h10l-3-4h2l-4-6-4 6h2l-3 4Z"/>',
    dots: '<circle cx="6" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="18" cy="12" r="1.6"/>',
    house: '<path d="M4 11 12 4l8 7v9H4v-9Z"/><path d="M10 20v-5h4v5"/>',
    elder: '<circle cx="11" cy="5" r="2"/><path d="M11 8v6l-2 7M11 14l3 7M8 11l3-3 4 3M17 12v9"/>',
    wheel: '<circle cx="10" cy="5" r="2"/><path d="M10 8v6h5l2 5"/><path d="M13.5 18.5A5 5 0 1 1 7 11.3"/>',
    baby: '<circle cx="12" cy="8" r="4"/><path d="M10 8h.01M14 8h.01M6 21c0-3.3 2.7-6 6-6s6 2.7 6 6"/>',
    doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
    truck: '<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
    building: '<path d="M4 21V8l8-5 8 5v13"/><path d="M9 21v-6h6v6M9 10h.01M15 10h.01"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    check: '<path d="m5 12 5 5 9-10"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    map: '<path d="m9 4-6 2v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z"/>',
    fb: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8Z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>',
    share: '<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4"/>',
  };
  function icon(name, size = 22, sw = 1.9) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ""}</svg>`;
  }

  /* ---------- official emblem (assets/logo.png) ---------- */
  function seal(size = 36) {
    return `<img class="logo" src="assets/logo.png" width="${size}" height="${size}" alt="ตราสัญลักษณ์ ${ORG.short}">`;
  }

  /* ---------- Thai date helpers ---------- */
  const TH_MONTH = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
  const TH_MONTH_FULL = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
  const TH_DAY = ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."];
  const TH_DAY_FULL = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"];
  const thDate = (d, full) => `${d.getDate()} ${(full ? TH_MONTH_FULL : TH_MONTH)[d.getMonth()]} ${d.getFullYear() + 543}`;
  const hhmm = (d = new Date()) => d.toTimeString().slice(0, 5);
  const ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const fromYmd = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };

  /* ---------- shared mock data (localStorage) ----------
     ข้อมูลตัวอย่างที่หน้า LIFF และหน้าแอดมินใช้ร่วมกัน เก็บในเบราว์เซอร์เครื่องนี้เท่านั้น */
  const STORE_KEY = "purong-mockup-v1";
  const ST = { wait: "รอตรวจสอบ", doing: "กำลังดำเนินการ", done: "เสร็จสิ้น" };
  const QST = { q: "รอรับบริการ", called: "กำลังให้บริการ", done: "รับบริการแล้ว", cancel: "ยกเลิก / ไม่มา" };
  const NEWS_CAT = { pr: ["ประชาสัมพันธ์", "#0f8c8c", "megaphone"], ann: ["ประกาศ", "#0a6b34", "doc"], act: ["กิจกรรม", "#2a72d4", "star"], wel: ["สวัสดิการ", "#c9971c", "elder"] };
  const DEPTS = ["สำนักปลัด", "กองคลัง", "กองช่าง", "กองการศึกษาฯ", "สำนักปลัด (ป้องกันฯ)", "หน่วยตรวจสอบภายใน"];

  function seedDb() {
    const at = (daysAgo, t = "09:00") => { const d = new Date(); d.setDate(d.getDate() - daysAgo); const [h, m] = t.split(":"); d.setHours(+h, +m, 0, 0); return +d; };
    const day = (n) => { const d = new Date(); d.setDate(d.getDate() + n); while (n >= 0 && d.getDay() % 6 === 0) d.setDate(d.getDate() + 1); return ymd(d); };
    const yy = String(new Date().getFullYear() + 543).slice(2);
    const c = (n, ic, cat, t, v, dept, s, name, log, extra = {}) => ({ id: `PR-${yy}-${n}`, ic, cat, t, v, dept, s, name, tel: name ? "08X-XXX-" + n : "", detail: t, photos: 1, located: true, created: log[0].at, log, ...extra });
    return {
      complaints: [
        c("0421", "road", "ถนน / ทางชำรุด", "ถนนเป็นหลุมลึก น้ำขังหลังฝนตก", "หมู่ที่ 4 บ้านลูโบ๊ะกาโล", "กองช่าง", "wait", "อับดุลเลาะ สาและ",
          [{ at: at(0, "07:58"), b: "รับเรื่องเข้าระบบ" }]),
        c("0420", "drop", "น้ำประปา / น้ำท่วม", "ท่อประปาแตก น้ำไหลตลอดคืน หน้ามัสยิด", "หมู่ที่ 1 บ้านโฉลง", "กองช่าง", "wait", "ซูไฮมี ดอเลาะ",
          [{ at: at(0, "06:41"), b: "รับเรื่องเข้าระบบ" }]),
        c("0418", "tree", "ต้นไม้ / กิ่งไม้", "กิ่งไม้ใหญ่พาดสายไฟ เสี่ยงหักโค่น", "หมู่ที่ 2 บ้านปุโรง", "สำนักปลัด", "wait", "",
          [{ at: at(1, "16:20"), b: "รับเรื่องเข้าระบบ" }], { anon: true }),
        c("0412", "bulb", "ไฟฟ้าส่องสว่าง", "ไฟถนนดับ 3 ต้น ถนน รพช. สายบาโงยีรา", "หมู่ที่ 2 บ้านปุโรง", "กองช่าง", "doing", "สมชาย ใจดี", [
          { at: at(3, "09:12"), b: "รับเรื่องเข้าระบบ" },
          { at: at(3, "10:40"), b: "ส่งต่อกองช่าง", p: "มอบหมายช่างไฟฟ้า นายสุริยา (ตัวอย่าง)" },
          { at: at(1, "14:05"), b: "ลงพื้นที่ตรวจสอบ", p: "สั่งซื้อหลอดไฟ LED ทดแทน คาดว่าแล้วเสร็จภายใน 3 วัน" }]),
        c("0405", "megaphone", "เหตุเดือดร้อนรำคาญ", "เสียงดังจากโรงเลื่อยช่วงกลางคืน", "หมู่ที่ 3 บ้านตะโล๊ะปานะ", "สำนักปลัด", "doing", "รอฮานี เจ๊ะมะ", [
          { at: at(6, "20:15"), b: "รับเรื่องเข้าระบบ" },
          { at: at(5, "09:00"), b: "ส่งต่อสำนักปลัด", p: "นัดเจรจาผู้ประกอบการ" }]),
        c("0387", "trash", "ขยะ / สิ่งแวดล้อม", "ขยะตกค้างบริเวณจุดพักขยะหน้าตลาด", "หมู่ที่ 3 บ้านตะโล๊ะปานะ", "สำนักปลัด", "done", "มะรอนิง ยูโซะ", [
          { at: at(12, "08:44"), b: "รับเรื่องเข้าระบบ" },
          { at: at(12, "09:30"), b: "ส่งต่อสำนักปลัด" },
          { at: at(11, "07:30"), b: "ลงพื้นที่เก็บขยะ", p: "เพิ่มรอบเก็บขยะเป็นสัปดาห์ละ 2 ครั้ง" },
          { at: at(11, "11:00"), b: "เสร็จสิ้น", p: "ขอบคุณที่แจ้งเรื่อง 🙏" }], { rating: 5 }),
        c("0371", "bulb", "ไฟฟ้าส่องสว่าง", "ไฟส่องสว่างสนามฟุตบอลหมู่บ้านไม่ติด", "หมู่ที่ 1 บ้านโฉลง", "กองช่าง", "done", "ฮาซัน มามะ", [
          { at: at(18, "18:02"), b: "รับเรื่องเข้าระบบ" },
          { at: at(17, "09:10"), b: "ส่งต่อกองช่าง" },
          { at: at(15, "15:30"), b: "เสร็จสิ้น", p: "เปลี่ยนสวิตช์ตั้งเวลาใหม่แล้ว" }], { rating: 4 }),
        c("0360", "road", "ถนน / ทางชำรุด", "สะพานไม้ทางเข้าสวนยางชำรุด", "หมู่ที่ 4 บ้านลูโบ๊ะกาโล", "กองช่าง", "done", "อิสมาแอ สาเมาะ", [
          { at: at(25, "10:00"), b: "รับเรื่องเข้าระบบ" },
          { at: at(24, "13:00"), b: "ส่งต่อกองช่าง" },
          { at: at(20, "16:00"), b: "เสร็จสิ้น", p: "ซ่อมแซมพื้นสะพานด้วยไม้ใหม่" }]),
      ],
      queues: [
        { id: "A021", svc: "ชำระภาษีที่ดินและสิ่งปลูกสร้าง", ic: "coin", dept: "กองคลัง", day: day(0), time: "08:30", name: "มะยาเตะ ดือราแม", tel: "08X-XXX-1021", vill: "หมู่ที่ 2 บ้านปุโรง", s: "done" },
        { id: "B011", svc: "ลงทะเบียนเบี้ยยังชีพผู้สูงอายุ", ic: "elder", dept: "สำนักปลัด", day: day(0), time: "09:00", name: "แวมือรี แวนิ", tel: "08X-XXX-2011", vill: "หมู่ที่ 1 บ้านโฉลง", s: "called" },
        { id: "A024", svc: "ชำระภาษีที่ดินและสิ่งปลูกสร้าง", ic: "coin", dept: "กองคลัง", day: day(0), time: "09:30", name: "นูรีดา หะยีสะมะแอ", tel: "08X-XXX-1024", vill: "หมู่ที่ 3 บ้านตะโล๊ะปานะ", s: "q" },
        { id: "C005", svc: "ขออนุญาตก่อสร้าง / ดัดแปลงอาคาร", ic: "building", dept: "กองช่าง", day: day(0), time: "10:00", name: "สุภาพร แก้วทอง", tel: "08X-XXX-3005", vill: "หมู่ที่ 2 บ้านปุโรง", s: "q" },
        { id: "B013", svc: "เงินอุดหนุนเพื่อการเลี้ยงดูเด็กแรกเกิด", ic: "baby", dept: "สำนักปลัด", day: day(0), time: "10:30", name: "ฟาตีเมาะ บือราเฮง", tel: "08X-XXX-2013", vill: "หมู่ที่ 4 บ้านลูโบ๊ะกาโล", s: "q" },
        { id: "D002", svc: "สมัครเรียนศูนย์พัฒนาเด็กเล็ก", ic: "house", dept: "กองการศึกษาฯ", day: day(0), time: "13:00", name: "ซารีฟะห์ อาแว", tel: "08X-XXX-4002", vill: "หมู่ที่ 1 บ้านโฉลง", s: "q" },
        { id: "A027", svc: "ชำระภาษีที่ดินและสิ่งปลูกสร้าง", ic: "coin", dept: "กองคลัง", day: day(2), time: "09:30", name: "สมชาย ใจดี", tel: "08X-XXX-1027", vill: "หมู่ที่ 2 บ้านปุโรง", s: "q", mine: true },
        { id: "B019", svc: "ลงทะเบียนเบี้ยความพิการ", ic: "wheel", dept: "สำนักปลัด", day: day(3), time: "14:00", name: "อาลี ยะโกะ", tel: "08X-XXX-2019", vill: "หมู่ที่ 3 บ้านตะโล๊ะปานะ", s: "q" },
        { id: "B014", svc: "ลงทะเบียนเบี้ยยังชีพผู้สูงอายุ", ic: "elder", dept: "สำนักปลัด", day: day(-20), time: "10:00", name: "สมชาย ใจดี", tel: "08X-XXX-2014", vill: "หมู่ที่ 2 บ้านปุโรง", s: "done", mine: true },
      ],
      news: [
        { id: "n7", cat: "pr", t: "ประชาสัมพันธ์โครงการปรับปรุงจัดทำฐานภาษี ออกสำรวจข้อมูลที่ดินและสิ่งปลูกสร้าง", body: "เจ้าหน้าที่กองคลังจะลงพื้นที่สำรวจทั้ง 4 หมู่บ้าน ขอความร่วมมือเจ้าของที่ดิน", at: at(1), reads: 6, pub: true },
        { id: "n6", cat: "ann", t: "จัดส่งประกาศรายงานการรับ–จ่ายเงิน ประจำปีงบประมาณ", body: "", at: at(4), reads: 9, pub: true },
        { id: "n5", cat: "wel", t: "ประกาศบัญชีรายชื่อผู้มีสิทธิรับเงินเบี้ยยังชีพผู้พิการ", body: "ตรวจสอบรายชื่อได้ที่ อบต. หรือจองคิวยื่นเอกสารผ่าน LINE", at: at(6), reads: 10, pub: true },
        { id: "n4", cat: "wel", t: "ประกาศบัญชีรายชื่อผู้มีสิทธิรับเงินเบี้ยยังชีพผู้สูงอายุ", body: "ตรวจสอบรายชื่อได้ที่ อบต. หรือจองคิวยื่นเอกสารผ่าน LINE", at: at(6), reads: 10, pub: true },
        { id: "n3", cat: "ann", t: "ประกาศผลการประเมินมาตรฐานขั้นต่ำการจัดบริการสาธารณะขององค์กรปกครองส่วนท้องถิ่น", body: "", at: at(9), reads: 15, pub: true },
        { id: "n2", cat: "act", t: "โครงการพัฒนาศักยภาพให้แก่ผู้นำต่าง ๆ และแกนนำชุมชน ประจำปีงบประมาณ 2568", body: "ภาพบรรยากาศกิจกรรมของผู้นำชุมชนตำบลปุโรง", at: at(14), reads: 42, pub: true },
        { id: "n1", cat: "act", t: "โครงการจิตอาสาบำเพ็ญประโยชน์ พัฒนาพื้นที่สาธารณะในตำบลปุโรง", body: "", at: at(20), reads: 37, pub: true },
      ],
      broadcasts: [
        { at: at(6, "15:00"), to: "ทุกคน", text: "📢 ประกาศบัญชีรายชื่อผู้มีสิทธิรับเบี้ยยังชีพ ปีงบประมาณใหม่ ตรวจสอบได้ที่เมนู ข่าวสาร", sent: 1284 },
      ],
      followers: 1284,
    };
  }
  let _db = null;
  const store = {
    get() {
      if (_db) return _db;
      try { _db = JSON.parse(localStorage.getItem(STORE_KEY)); } catch (e) { _db = null; }
      if (!_db) { _db = seedDb(); store.save(); }
      return _db;
    },
    save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(_db)); } catch (e) { /* storage blocked: keep in memory */ } },
    reset() { _db = seedDb(); store.save(); return _db; },
  };
  /* citizen-facing timeline derived from a complaint's log + status */
  function complaintTimeline(c) {
    const tl = c.log.map((e) => ["done", e.b, `${thDate(new Date(e.at))} · ${hhmm(new Date(e.at))} น.`, e.p]);
    if (c.s === "wait") tl.push(["now", "รอเจ้าหน้าที่ตรวจสอบ", "ภายใน 1 วันทำการ"], ["todo", "ลงพื้นที่ดำเนินการ"], ["todo", "แจ้งผลการดำเนินการ"]);
    if (c.s === "doing") tl.push(["now", "กำลังดำเนินการ"], ["todo", "แจ้งผลการดำเนินการ"]);
    return tl;
  }

  /* ---------- shell: status bar + side navigator ---------- */
  const PAGES = [
    ["index.html", "หน้าแชท + Rich Menu", "LINE OA"],
    ["complaint.html", "แจ้งเรื่องร้องเรียน", "LIFF"],
    ["booking.html", "จองคิวรับบริการ", "LIFF"],
    ["track.html", "ติดตามสถานะ", "LIFF"],
    ["news.html", "ข่าวสาร / ประกาศ", "LIFF"],
    ["contact.html", "ติดต่อ อบต.", "LIFF"],
    ["richmenu.html", "แบบ Rich Menu 2500×1686", "Spec"],
    ["admin.html", "ระบบหลังบ้าน (เจ้าหน้าที่)", "Admin"],
  ];
  function mountShell() {
    const phone = document.querySelector(".phone");
    if (phone && !phone.querySelector(".statusbar")) {
      const sb = document.createElement("div");
      sb.className = "statusbar";
      sb.innerHTML = `<span class="sb-time">${hhmm()}</span><span class="sb-icons">
        <svg width="18" height="12" viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx="1" fill="#111"/><rect x="5" y="5.5" width="3" height="6.5" rx="1" fill="#111"/><rect x="10" y="3" width="3" height="9" rx="1" fill="#111"/><rect x="15" y="0" width="3" height="12" rx="1" fill="#111"/></svg>
        <svg width="16" height="12" viewBox="0 0 16 12"><path d="M8 11.5 10.5 9a3.5 3.5 0 0 0-5 0L8 11.5ZM3.4 6.9a6.5 6.5 0 0 1 9.2 0l1.4-1.4a8.5 8.5 0 0 0-12 0l1.4 1.4ZM.6 4.1a10.5 10.5 0 0 1 14.8 0L16 3.5A11.5 11.5 0 0 0 0 3.5l.6.6Z" fill="#111"/></svg>
        <svg width="26" height="12" viewBox="0 0 26 12"><rect x=".5" y=".5" width="22" height="11" rx="3" fill="none" stroke="#111" opacity=".4"/><rect x="2" y="2" width="17" height="8" rx="1.6" fill="#111"/><rect x="23.5" y="4" width="1.8" height="4" rx=".9" fill="#111" opacity=".4"/></svg>
      </span>`;
      phone.prepend(sb);
      setInterval(() => (sb.querySelector(".sb-time").textContent = hhmm()), 30000);
    }
    const notes = document.querySelector(".notes");
    if (notes) {
      const here = location.pathname.split("/").pop() || "index.html";
      notes.innerHTML = `
        ${seal(72)}
        <h1>LINE OA ${ORG.short}</h1>
        <div class="sub">Mockup ระบบบริการประชาชนผ่าน LINE<br>${ORG.area}</div>
        <h2>หน้าจอในชุดนี้</h2>
        <ul>${PAGES.map(([href, label, kind]) =>
          `<li><a href="${href}" class="${href === here ? "on" : ""}">${label}<span class="k">${kind}</span></a></li>`).join("")}</ul>
        <p class="tip">กดเมนูใน Rich Menu เพื่อทดลองการทำงาน ข้อมูลทั้งหมดเป็นตัวอย่าง ไม่มีการส่งข้อมูลจริง
        ข้อมูลพื้นฐานอ้างอิงจาก ${ORG.web}</p>`;
    }
  }

  /* ---------- toast + loading ---------- */
  function toast(text) {
    const phone = document.querySelector(".phone") || document.body;
    let t = phone.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; phone.appendChild(t); }
    t.textContent = text;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove("show"), 1900);
  }
  function loading(ms = 900) {
    const phone = document.querySelector(".phone") || document.body;
    const o = document.createElement("div");
    o.className = "overlay";
    o.innerHTML = '<div class="spin"></div>';
    phone.appendChild(o);
    return new Promise((r) => setTimeout(() => { o.remove(); r(); }, ms));
  }

  /* ---------- fake QR (deterministic pattern from a string) ---------- */
  function fakeQR(canvas, text) {
    const n = 25, ctx = canvas.getContext("2d");
    canvas.width = canvas.height = n;
    let h = 2166136261;
    for (const c of text) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
    const rnd = () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296;
    ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, n, n);
    ctx.fillStyle = "#13261b";
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (rnd() > 0.52) ctx.fillRect(x, y, 1, 1);
    const finder = (x, y) => {
      ctx.fillStyle = "#13261b"; ctx.fillRect(x, y, 7, 7);
      ctx.fillStyle = "#fff"; ctx.fillRect(x + 1, y + 1, 5, 5); ctx.fillRect(x - 1 < 0 ? x : x - 1, y + 7 > n - 1 ? y - 1 : y + 7, 8, 1);
      ctx.fillStyle = "#13261b"; ctx.fillRect(x + 2, y + 2, 3, 3);
    };
    finder(0, 0); finder(n - 7, 0); finder(0, n - 7);
  }

  function liffHeader(title, opts = {}) {
    return `<div class="liff-head">
      <a class="hb" href="${opts.back || "index.html"}" aria-label="ปิด">${icon("close", 22)}</a>
      <div class="ttl"><b>${title}</b><small>${icon("lock", 11, 2.2)} liff.line.me · ${ORG.short}</small></div>
      <button class="hb" type="button" aria-label="เพิ่มเติม" onclick="PR.toast('แชร์ / เปิดในเบราว์เซอร์')">${icon("more", 22)}</button>
    </div>`;
  }

  window.PR = { ORG, icon, seal, thDate, hhmm, ymd, fromYmd, TH_DAY, TH_DAY_FULL, TH_MONTH, TH_MONTH_FULL, toast, loading, fakeQR, liffHeader, mountShell,
    store, complaintTimeline, ST, QST, NEWS_CAT, DEPTS };
  // favicon on every page
  if (!document.querySelector('link[rel="icon"]'))
    document.head.insertAdjacentHTML("beforeend", '<link rel="icon" type="image/png" href="assets/logo.png">');
  document.addEventListener("DOMContentLoaded", mountShell);
})();
