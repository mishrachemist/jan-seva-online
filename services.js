// =====================================================================
//  Jan Seva Online — SERVICES (each service has options)
//  "total" = total price (₹, starting value — change later in Admin > Price list)
//  "fee"   = official fee (₹); null = NOT FOUND
//  "feeByState" = official fee by state; states not listed = NOT FOUND
//  "onlyStates" = service is offered only in these states
//  Do not change an option "id" — the price list and old applications use it.
//  "form" = applicant details the customer types in (keys from JSO_FORM_FIELDS below);
//           the admin copies them field by field into the portal.
//  "portalUrl" / "portalUrlByState" = official site opened from the Admin card.
//  English text here is the default; translations live in i18n.js.
// =====================================================================
window.JSO_FORM_FIELDS = {
  fullName:   { label: "Full name (as on Aadhaar)", type: "text", max: 80, req: true },
  fatherName: { label: "Father's name", type: "text", max: 80, req: true },
  dob:        { label: "Date of birth", type: "date", req: true },
  gender:     { label: "Gender", type: "select", options: ["Male", "Female", "Transgender"], req: true },
  email:      { label: "Email (optional)", type: "email", max: 80 },
  address:    { label: "Full address (house, street, village / town)", type: "textarea", max: 300, req: true },
  pin:        { label: "PIN code", type: "pin", req: true },
  pan:        { label: "PAN number", type: "pan", req: true },
  epic:       { label: "Voter ID (EPIC) number", type: "epic", req: true }
};
const BASIC_FORM = ["fullName", "fatherName", "dob", "gender", "email", "address", "pin"];

window.JSO_SERVICES = [
  {
    id: "pan", cat: "PAN", name: "PAN card", portal: "Protean (paperless)", mode: "ok",
    portalUrl: "https://tinpan.proteantech.in/services/pan/pan-index", form: BASIC_FORM,
    docs: ["Aadhaar", "One more ID / address / date-of-birth proof (from 1 Apr 2026 Aadhaar alone is not enough)"],
    otpPurpose: "Aadhaar e-Sign of your PAN form on Protean",
    options: [
      { id: "pan-phys", label: "Physical card", total: 130, fee: 101, feeNote: "incl. GST" },
      { id: "pan-pdf", label: "PDF only (e-PAN)", total: 80, fee: 66, feeNote: "incl. GST" }
    ]
  },
  {
    id: "passport", cat: "Passport", name: "Passport", portal: "passportindia.gov.in", mode: "visit", docs: null,
    portalUrl: "https://www.passportindia.gov.in/", form: BASIC_FORM,
    visit: "We help you fill the form. No promise of a faster appointment. A visit to the Passport Seva Kendra is required.",
    options: [
      { id: "passport", label: "Fresh — 36 pages, normal", total: 3000, fee: 2500, feeNote: "from 1 Jul 2026" }
    ]
  },
  {
    id: "dl", cat: "Driving licence", name: "Driving licence", portal: "parivahan.gov.in (Sarathi)", mode: "visit", docs: null,
    portalUrl: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do", form: BASIC_FORM,
    onlyStates: ["Uttar Pradesh"],
    visit: "Uttar Pradesh only for now. A visit to the RTO is required for the driving test. Smart card or user charge: NOT FOUND. The fee rises for each extra vehicle class.",
    options: [
      { id: "dl", label: "Learner + permanent (1 vehicle class)", total: 2500, fee: 700, feeNote: "UP: learner ₹150 + test ₹50, DL ₹200 + test ₹300" }
    ]
  },
  {
    id: "itr", cat: "ITR", name: "ITR filing", portal: "incometax.gov.in", mode: "ok",
    portalUrl: "https://eportal.incometax.gov.in/", form: ["pan", "fullName", "dob", "email", "address", "pin"],
    docs: ["PAN", "Aadhaar", "Income documents (e.g. Form 16)"],
    options: [
      { id: "itr1", label: "ITR-1", total: 500, fee: 0 },
      { id: "itr2", label: "ITR-2", total: 1000, fee: 0 },
      { id: "itr-any", label: "Other ITR forms", total: 1500, fee: 0 }
    ]
  },
  {
    id: "voter", cat: "Voter ID", name: "Voter ID", portal: "voters.eci.gov.in", mode: "ok",
    portalUrl: "https://voters.eci.gov.in/", form: BASIC_FORM,
    options: [
      { id: "voter-reg", label: "New registration (Form 6)", total: 100, fee: 0, docs: ["Photo", "Age proof", "Address proof"] },
      { id: "voter-print", label: "Print (e-EPIC)", total: 50, fee: 0, feeNote: "download", docs: null, form: ["fullName", "epic"] }
    ]
  },
  {
    id: "land", cat: "Land", name: "Land record", portal: "Your state's land records portal", mode: "ok", docs: [],
    details: "Khata / khasra number (or the land owner's name)",
    info: "Each state has its own portal. The online copy is for information only; a certified copy comes from the tehsil. Online fee in states other than UP: NOT FOUND.",
    allowUnknownFee: true,
    options: [
      { id: "khatauni", label: "Khatauni / record of rights (RoR)", total: 60, fee: null, feeByState: { "Uttar Pradesh": 0 }, feeNote: "online copy",
        portalUrlByState: { "Uttar Pradesh": "https://upbhulekh.gov.in/" } },
      { id: "bhunaksha", label: "Bhu Naksha (land map)", total: 60, fee: null, feeByState: { "Uttar Pradesh": 0 }, feeNote: "online",
        portalUrlByState: { "Uttar Pradesh": "https://upbhunaksha.gov.in/" } }
    ]
  }
];
