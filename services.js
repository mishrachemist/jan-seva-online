// =====================================================================
//  Jan Seva Online — SERVICES (har service ke andar options)
//  "total" = kul daam (₹, shuruaati — baad mein Admin > Rate list se badlein)
//  "fee"   = official fee (₹); null = NOT FOUND
//  "feeByState" = rajya ke hisaab se official fee; jo rajya list mein nahi, uski fee NOT FOUND
//  "onlyStates" = service sirf in rajyon ke liye
//  Option ki "id" mat badlein — rate list aur purani applications isi se judi hain.
// =====================================================================
window.JSO_SERVICES = [
  {
    id: "pan", cat: "PAN", name: "PAN card", portal: "Protean (paperless)", mode: "ok",
    docs: ["Aadhaar", "Ek aur ID / address / DOB proof (1 Apr 2026 se sirf Aadhaar kaafi nahi)"],
    otpPurpose: "Protean par aapke PAN form ka Aadhaar e-Sign",
    options: [
      { id: "pan-phys", label: "Physical card", total: 130, fee: 101, feeNote: "GST sahit" },
      { id: "pan-pdf", label: "Sirf PDF (e-PAN)", total: 80, fee: 66, feeNote: "GST sahit" }
    ]
  },
  {
    id: "passport", cat: "Passport", name: "Passport", portal: "passportindia.gov.in", mode: "visit", docs: null,
    visit: "Hum form bharne mein madad karte hain. Jaldi appointment ka koi vaada nahi. Passport Seva Kendra jaana zaroori.",
    options: [
      { id: "passport", label: "Fresh — 36 pages, normal", total: 3000, fee: 2500, feeNote: "1 Jul 2026 se" }
    ]
  },
  {
    id: "dl", cat: "Driving licence", name: "Driving licence", portal: "parivahan.gov.in (Sarathi)", mode: "visit", docs: null,
    onlyStates: ["Uttar Pradesh"],
    visit: "Abhi sirf Uttar Pradesh ke liye. Driving test ke liye RTO jaana zaroori. Smart card ya user charge: NOT FOUND. Extra vehicle class par fee badhegi.",
    options: [
      { id: "dl", label: "Learner + permanent (1 vehicle class)", total: 2500, fee: 700, feeNote: "UP: learner ₹150 + test ₹50, DL ₹200 + test ₹300" }
    ]
  },
  {
    id: "itr", cat: "ITR", name: "ITR filing", portal: "incometax.gov.in", mode: "ok",
    docs: ["PAN", "Aadhaar", "Income documents (jaise Form 16)"],
    options: [
      { id: "itr1", label: "ITR-1", total: 500, fee: 0 },
      { id: "itr2", label: "ITR-2", total: 1000, fee: 0 },
      { id: "itr-any", label: "Baaki ITR forms", total: 1500, fee: 0 }
    ]
  },
  {
    id: "voter", cat: "Voter ID", name: "Voter ID", portal: "voters.eci.gov.in", mode: "ok",
    options: [
      { id: "voter-reg", label: "Naya registration (Form 6)", total: 100, fee: 0, docs: ["Photo", "Age proof", "Address proof"] },
      { id: "voter-print", label: "Print (e-EPIC)", total: 50, fee: 0, feeNote: "download", docs: null }
    ]
  },
  {
    id: "land", cat: "Zameen", name: "Zameen ka record", portal: "Aapke rajya ka bhulekh / land records portal", mode: "ok", docs: [],
    details: "Tehsil, gaon aur khata / khasra number (ya khatedar ka naam)",
    info: "Har rajya ka portal alag hai. Online copy sirf jaankari ke liye; certified copy tehsil se milti hai. UP ke alawa rajyon ki online fee: NOT FOUND.",
    allowUnknownFee: true,
    options: [
      { id: "khatauni", label: "Khatauni / record of rights (RoR)", total: 60, fee: null, feeByState: { "Uttar Pradesh": 0 }, feeNote: "online nakal" },
      { id: "bhunaksha", label: "Bhu Naksha (zameen ka naksha)", total: 60, fee: null, feeByState: { "Uttar Pradesh": 0 }, feeNote: "online" }
    ]
  }
];
