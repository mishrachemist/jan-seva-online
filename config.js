// =====================================================================
//  Jan Seva Online — SETTINGS FILE
//  Sirf ye file badalni hai. Baaki code ko haath lagane ki zaroorat nahi.
// =====================================================================
window.JSO_CONFIG = {

  // 1) Firebase console > Project settings > "Your apps" > Web app ka config yahan paste karein
  firebase: {
    apiKey: "AIzaSyD8kgTcxnSUI8HCOERrnOg28zU0-K3uZl8",
    authDomain: "jan-seva-online.firebaseapp.com",
    projectId: "jan-seva-online",
    storageBucket: "jan-seva-online.firebasestorage.app",
    messagingSenderId: "203706116538",
    appId: "1:203706116538:web:a44510b9ec207762219583"
  },

  // 2) Aapka UPI ID aur bank mein darj naam (customer ke UPI app mein yahi dikhega)
  upiId: "mishrachemist-1@oksbi",
  payeeName: "Durgesh Mishra",

  // 3) OTP aapki screen par kitne minute dikhe (1 se 5 ke beech rakhein —
  //    firestore.rules mein 6 minute ki seema hai)
  otpMinutes: 5,

  // 4) Services. "total" = kul daam (₹), "fee" = official fee (₹), null = NOT FOUND.
  //    Daam baad mein app ke Admin > Rate list se bhi badal sakte hain.
  services: [
    { id: "pan-phys", cat: "PAN", name: "PAN card — physical card", portal: "Protean (paperless)", total: 130, fee: 101, feeNote: "GST sahit",
      mode: "ok", docs: ["Aadhaar", "Ek aur ID / address / DOB proof (1 Apr 2026 se sirf Aadhaar kaafi nahi)"],
      otpPurpose: "Protean par aapke PAN form ka Aadhaar e-Sign" },
    { id: "pan-pdf", cat: "PAN", name: "PAN card — sirf PDF (e-PAN)", portal: "Protean (paperless)", total: 80, fee: 66, feeNote: "GST sahit",
      mode: "ok", docs: ["Aadhaar", "Ek aur ID / address / DOB proof (1 Apr 2026 se sirf Aadhaar kaafi nahi)"],
      otpPurpose: "Protean par aapke PAN form ka Aadhaar e-Sign" },
    { id: "passport", cat: "Passport", name: "Passport fresh — 36 pages, normal", portal: "passportindia.gov.in", total: 3000, fee: 2500, feeNote: "1 Jul 2026 se",
      mode: "visit", docs: null,
      visit: "Hum form bharne mein madad karte hain. Jaldi appointment ka koi vaada nahi. Passport Seva Kendra jaana zaroori." },
    { id: "dl", cat: "Driving licence", name: "Driving licence — learner + permanent (1 vehicle class)", portal: "parivahan.gov.in (Sarathi)", total: 2500, fee: 700,
      feeNote: "learner ₹150 + test ₹50, DL ₹200 + test ₹300", mode: "visit", docs: null,
      visit: "Driving test ke liye RTO jaana zaroori. Smart card ya user charge: NOT FOUND. Extra vehicle class par fee badhegi." },
    { id: "itr1", cat: "ITR", name: "ITR-1 filing", portal: "incometax.gov.in", total: 500, fee: 0, mode: "ok", docs: ["PAN", "Aadhaar", "Income documents (jaise Form 16)"] },
    { id: "itr2", cat: "ITR", name: "ITR-2 filing", portal: "incometax.gov.in", total: 1000, fee: 0, mode: "ok", docs: ["PAN", "Aadhaar", "Income documents (jaise Form 16)"] },
    { id: "itr-any", cat: "ITR", name: "ITR filing — baaki forms", portal: "incometax.gov.in", total: 1500, fee: 0, mode: "ok", docs: ["PAN", "Aadhaar", "Income documents (jaise Form 16)"] },
    { id: "voter-reg", cat: "Voter ID", name: "Voter ID registration (Form 6)", portal: "voters.eci.gov.in", total: 100, fee: 0, mode: "ok", docs: ["Photo", "Age proof", "Address proof"] },
    { id: "voter-print", cat: "Voter ID", name: "Voter ID print (e-EPIC)", portal: "voters.eci.gov.in", total: 50, fee: 0, feeNote: "download", mode: "ok", docs: null },
    { id: "khatauni", cat: "Zameen", name: "Khatauni", portal: "upbhulekh.gov.in", total: 60, fee: 0, feeNote: "online nakal", mode: "ok", docs: [],
      details: "Jila, tehsil, gaon aur khata / khasra number (ya khatedar ka naam)",
      info: "Online nakal sirf jaankari ke liye; certified copy tehsil se." },
    { id: "bhunaksha", cat: "Zameen", name: "Bhu Naksha", portal: "upbhunaksha.gov.in", total: 60, fee: 0, feeNote: "online", mode: "ok", docs: [],
      details: "Jila, tehsil, gaon aur khasra number",
      info: "Download kiya naksha sirf jaankari ke liye; certified copy tehsil se." }
  ]
};
