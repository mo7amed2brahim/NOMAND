// Nomad shared data — places, guides, tickets (used by every page)
(function(){
  "use strict";
  const U = (id,w)=>`https://images.unsplash.com/${id}?q=80&w=${w||1200}&auto=format&fit=crop`;
  const IMG = {
    pyr:"photo-1503177119275-0aa32b3a9368",      // Giza pyramids + camel
    cairo:"photo-1553913861-c0fddf2619ee",       // Cairo city / mosque
    bazaar:"photo-1519817650390-64a93db51149",   // lantern souk
    temple:"photo-1539768942893-daf53e448371",   // ancient Egyptian temple
    luxor:"photo-1572252009286-268acec5ca0a",    // Luxor
    dive:"photo-1544551763-46a013bb70d5",        // scuba diver over reef
    turtle:"photo-1437622368342-7a3d73a34c8f",   // sea turtle
    beach:"photo-1507525428034-b723cf961d3e",    // turquoise beach
    beach2:"photo-1519046904884-53103b34b206",   // seashore
    desert:"photo-1473580044384-7ba9967e16a0",   // desert dunes
    food:"photo-1555939594-58d7cb561ad1"         // grilled skewers
  };
  const G = (...ids)=>ids.map(id=>U(IMG[id],1200));

  const PLACES = {
    pyramids:{ name:"Pyramids of Giza & Sphinx", sub:"Ancient wonder • Giza plateau", ticket:25,
      cover:U(IMG.pyr,1600), gallery:G("pyr","temple","luxor","cairo"),
      info:["📍 Giza plateau","⏱ 1 day","☀️ Best: Oct–Apr","🎟 Pyramid + Sphinx entry"],
      overview:"The last surviving wonder of the ancient world — and it still silences crowds. Arrive at sunrise to walk the plateau before the heat, stand small beneath Khufu's 146 metres, meet the Sphinx face-to-face, then step into the Grand Egyptian Museum where Tutankhamun's treasures finally have room to breathe.",
      highlights:["Sunrise entry to Giza plateau & Sphinx","Great Pyramid + panoramic viewpoint","Grand Egyptian Museum with Egyptologist","Camel ride & golden-hour photos"],
      reviews:[{n:"Mohamed",r:5,t:"Sunrise at the pyramids gave me goosebumps. Ahmed explained every carving.",d:"Sep 2026"},{n:"Lena K.",r:5,t:"Museum + pyramids in one day was perfectly paced.",d:"Aug 2026"}] },
    cairoTower:{ name:"Cairo Tower", sub:"Nile skyline • Zamalek, Cairo", ticket:12,
      cover:U(IMG.cairo,1600), gallery:G("cairo","pyr","bazaar","food"),
      info:["📍 Zamalek island","⏱ Half day","🌇 Best: sunset","🎟 Tower deck ticket"],
      overview:"Cairo's 187-metre lotus-shaped icon on Gezira island. Ride to the revolving observatory at sunset and watch a city of 20 million turn gold — pyramids hazy on one horizon, the Nile glittering below. Pair it with a Zamalek stroll and koshary on the way down.",
      highlights:["360° revolving deck at sunset","Nile + pyramid views on clear days","Zamalek gardens & galleries walk","Koshary tasting nearby"],
      reviews:[{n:"Priya",r:5,t:"Sunset from the deck is unreal — whole city glowing.",d:"Aug 2026"},{n:"Omar",r:4,t:"Queues at sunset, but worth it. Go 30 min early.",d:"Jul 2026"}] },
    khan:{ name:"Khan el-Khalili", sub:"Historic bazaar • Islamic Cairo", ticket:10,
      cover:U(IMG.bazaar,1600), gallery:G("bazaar","cairo","food","temple"),
      info:["📍 Islamic Cairo","⏱ 1 evening","🌙 Lantern-lit walk","🍢 Tastings included"],
      overview:"Six centuries of haggling under one lantern-lit roof. Brass lamps, spice pyramids, silver cartouches and the great medieval thoroughfare of Al-Muizz street next door. Come hungry: koshary where locals queue, sugarcane juice pressed to order, rooftop mint tea over a thousand minarets.",
      highlights:["Khan el-Khalili souk with bargaining tips","Al-Muizz street mosques & madrasas","Koshary + sugarcane juice tasting","Rooftop tea at golden hour"],
      reviews:[{n:"Omar",r:5,t:"Al-Muizz at night is magic. Best koshary of my life.",d:"Sep 2026"},{n:"Claire",r:5,t:"Felt safe, fun and delicious.",d:"Jun 2026"}] },
    karnak:{ name:"Karnak Temple", sub:"Hypostyle halls • Luxor", ticket:20,
      cover:U(IMG.temple,1600), gallery:G("temple","luxor","pyr","cairo"),
      info:["📍 Luxor East Bank","⏱ Half–1 day","☀️ Best: early morning","🎟 Temple complex entry"],
      overview:"Two thousand years of pharaohs built — and outbuilt — each other here. Walk the avenue of ram-headed sphinxes into a forest of 134 stone columns, each tall enough to swallow a house. Come at opening for empty colonnades, stay for the sound-and-light show after dark.",
      highlights:["Great Hypostyle Hall at opening time","Sacred lake & scarab ritual","Luxor Temple by night (linked avenue)","Sound & light show option"],
      reviews:[{n:"Jonas",r:5,t:"The columns are beyond scale. Go at 6am, have it alone.",d:"Jul 2026"},{n:"Salma",r:5,t:"Night show gave me chills.",d:"Sep 2026"}] },
    valley:{ name:"Valley of the Kings", sub:"Royal tombs • Luxor West Bank", ticket:30,
      cover:U(IMG.luxor,1600), gallery:G("luxor","temple","pyr","desert"),
      info:["📍 Luxor West Bank","⏱ Half–1 day","☀️ Tombs are cool inside","🎟 3-tomb ticket + Tut add-on"],
      overview:"A hidden wadi holding 63 royal tombs, painted as vividly as the day they were sealed. Descend into Seti I's impossibly long corridors, stand in Tutankhamun's burial chamber, then rise above it all in a sunrise hot-air balloon as the Nile lights up green-gold.",
      highlights:["Seti I + Ramses III painted tombs","Tutankhamun burial chamber","Sunrise balloon over West Bank","Hatshepsut temple & Colossi stop"],
      reviews:[{n:"Mohamed",r:5,t:"Balloon at dawn, tombs after — perfect Luxor day.",d:"Sep 2026"},{n:"Lena K.",r:4,t:"Bring water; tombs involve stairs.",d:"Aug 2026"}] },
    bluehole:{ name:"Dahab Blue Hole", sub:"Coral sinkhole • Dahab, Red Sea", ticket:40,
      cover:U(IMG.dive,1600), gallery:G("dive","turtle","beach","beach2"),
      info:["📍 Dahab, Sinai","⏱ Half–2 days","🤿 PADI intro incl.","🐢 Turtles + coral walls"],
      overview:"A 100-metre-deep sapphire well in the reef, and one of the planet's great snorkel sites. Coral walls blaze with anthias, turtles cruise the shallows, and the Bedouin promenade behind you serves the freshest grilled fish in Sinai. Beginners get a calm intro dive; divers get the Arch.",
      highlights:["Blue Hole + Coral Garden dive/snorkel","Turtle bay with marine guide","All gear, wetsuit & boat included","Bedouin beach lunch + lagoon swim"],
      reviews:[{n:"Salma",r:5,t:"Saw three turtles on my first dive! Water like glass.",d:"Sep 2026"},{n:"Jonas",r:4,t:"Amazing reef. Go early — windy afternoons.",d:"Jul 2026"}] },
    ras:{ name:"Ras Mohamed", sub:"Marine park • Sharm el-Sheikh", ticket:35,
      cover:U(IMG.turtle,1600), gallery:G("turtle","dive","beach","beach2"),
      info:["📍 Sharm el-Sheikh","⏱ Full day","🐠 Shark & Yolanda reefs","⛵ Boat + lunch incl."],
      overview:"Where the Gulfs of Suez and Aqaba collide, the reef explodes. Ras Mohamed's Shark Observatory drops into blue infinity while Yolanda Reef's scattered cargo delights wreck fans. Expect turtles, napoleon wrasse, clouds of glassfish — and a seafood grill back on deck.",
      highlights:["Shark Observatory + Yolanda Reef","Turtles, rays & glassfish schools","Snorkel boat with sundeck lunch","Mangrove channel photo stop"],
      reviews:[{n:"Jonas",r:5,t:"Best visibility I've dived anywhere.",d:"Jul 2026"},{n:"Priya",r:5,t:"Crew brilliant with nervous swimmers.",d:"Aug 2026"}] },
    agiba:{ name:"Agiba Beach", sub:"Turquoise cove • Marsa Matruh", ticket:8,
      cover:U(IMG.beach,1600), gallery:G("beach","beach2","turtle","dive"),
      info:["📍 Marsa Matruh coast","⏱ Day trip","🏖 Cliff viewpoint","🍤 Seafood grill"],
      overview:"The Med at its most Caribbean: a white-sand cove under ochre cliffs, water shading from ice-blue to deep teal. Climb to the viewpoint, swim the calm lagoon, then grill the morning's catch in Matruh town. Egypt's summer secret, two hours from Alexandria.",
      highlights:["Cliff-top viewpoint photos","Calm lagoon swim + snorkel","Matruh seafood lunch","Cleopatra Bath sunset stop"],
      reviews:[{n:"Nour",r:5,t:"Water colour is unreal. Not crowded on weekdays.",d:"Aug 2026"},{n:"Karim",r:4,t:"Stairs down are steep — wear sandals.",d:"Jul 2026"}] },
    qaitbay:{ name:"Qaitbay Citadel", sub:"Sea fortress • Alexandria", ticket:10,
      cover:U(IMG.beach2,1600), gallery:G("beach2","beach","cairo","bazaar"),
      info:["📍 Alexandria corniche","⏱ Half day","🌊 Sea-breeze fort","📚 + Bibliotheca option"],
      overview:"A 15th-century Mamluk fortress on the very rock where the Pharos lighthouse — Wonder of the World — once stood. Sea spray, fishing boats, salt wind, then the corniche: Bibliotheca Alexandrina, Stanley Bridge at sunset, and a proper Alexandrian fish dinner.",
      highlights:["Citadel ramparts + sea museum","Pharos lighthouse site story","Bibliotheca Alexandrina visit","Stanley Bridge sunset + fish dinner"],
      reviews:[{n:"Mariam",r:5,t:"History + sea air = perfect Alex day.",d:"Sep 2026"},{n:"Omar",r:4,t:"Combine with the library, easy tram ride.",d:"Aug 2026"}] },
    siwa:{ name:"Siwa Oasis", sub:"Salt lakes & oracle • Western Desert", ticket:15,
      cover:U(IMG.desert,1600), gallery:G("desert","pyr","beach","temple"),
      info:["📍 Western Desert","⏱ 2–3 days","🌴 Dates + olives","🏜 Safari + salt float"],
      overview:"Nine hours from Cairo and a world away: Berber Siwa floats salt lakes you bob in like the Dead Sea, hides Alexander's oracle temple, and buries you in hot sand for healing. Days end at Fatnas Island as the sun melts into the lake — dates and hibiscus in hand.",
      highlights:["Salt-lake float + Cleopatra Spring dip","Oracle of Amun temple","Great Sand Sea safari + sandboarding","Fatnas Island sunset + Siwan dinner"],
      reviews:[{n:"Karim",r:5,t:"Floating in the salt lakes is pure magic.",d:"Jul 2026"},{n:"Lena K.",r:5,t:"Stars over the desert — best night of my trip.",d:"Aug 2026"}] }
  };

  const GUIDES = {
    ahmed:{ name:"Ahmed Rudi", role:"Certified Egyptologist • Cairo / Giza", rate:45,
      img:U("photo-1506794778202-cad84cf45f1d",300),
      langs:"EN / AR / DE", tags:["Hieroglyphs","Private van"], cred:"Ministry Licensed", years:"10 yrs",
      rating:"5.0", count:"412 reviews", stars:5,
      quote:"Ahmed decoded every carving and timed the crowds perfectly. Felt like family by lunch." },
    salma:{ name:"Salma El-Nour", role:"Red Sea Dive Master • Dahab", rate:60,
      img:U("photo-1494790108377-be9c29b29330",300),
      langs:"EN / AR / FR", tags:["PADI","Free-diving"], cred:"PADI Certified", years:"8 yrs",
      rating:"5.0", count:"298 reviews", stars:5,
      quote:"Nervous first-timer to confident diver in one afternoon. The reef with Salma is heaven." },
    omar:{ name:"Omar Fathy", role:"Food & Bazaar Insider • Cairo", rate:30,
      img:U("photo-1500648767791-00dcc994a43e",300),
      langs:"EN / AR / ES", tags:["Street food","Photography"], cred:"Top Rated", years:"6 yrs",
      rating:"4.9", count:"531 reviews", stars:4,
      quote:"Ate things I'd never dare order alone — every one incredible. Rooftop finale unforgettable." },
    nour:{ name:"Nour Hassan", role:"Nubian Culture Host • Aswan", rate:35,
      img:U("photo-1544005313-94ddf0286df2",300),
      langs:"EN / AR / IT", tags:["Nubian village","Felucca"], cred:"Community Certified", years:"7 yrs",
      rating:"5.0", count:"264 reviews", stars:5,
      quote:"Tea with a Nubian family, henna, drums on the felucca — the warmest day of our honeymoon." },
    karim:{ name:"Karim Adel", role:"Desert Safari Lead • Siwa", rate:40,
      img:U("photo-1472099645785-5658abf4ff4e",300),
      langs:"EN / AR / FR", tags:["4x4 safari","Stargazing"], cred:"Wilderness First Aid", years:"9 yrs",
      rating:"4.9", count:"187 reviews", stars:5,
      quote:"Sandboarding, salt lakes, dinner under the Milky Way. Karim runs a flawless desert." },
    mariam:{ name:"Mariam Saeed", role:"Alexandria Historian • Alexandria", rate:35,
      img:U("photo-1531123897727-8f129e1688ce",300),
      langs:"EN / AR / GR", tags:["Greco-Roman","Seafood"], cred:"Ministry Licensed", years:"8 yrs",
      rating:"4.9", count:"203 reviews", stars:5,
      quote:"Alexandria finally made sense — layers of history plus the best fish dinner ever." }
  };

  // merge persisted user reviews
  try{
    const saved = JSON.parse(localStorage.getItem("nomad-reviews")||"{}");
    Object.keys(saved).forEach(k=>{ if(PLACES[k]) PLACES[k].reviews = [...saved[k], ...PLACES[k].reviews]; });
  }catch(e){}

  function saveReview(key, rev){
    try{
      const saved = JSON.parse(localStorage.getItem("nomad-reviews")||"{}");
      saved[key] = [rev, ...(saved[key]||[])];
      localStorage.setItem("nomad-reviews", JSON.stringify(saved));
    }catch(e){}
  }

  // booking prices + seeded open-group counts (threshold to confirm: 5 people)
  const BOOKING = {
    pyramids:{ priv:149, group:89, seed:3 }, cairoTower:{ priv:59, group:35, seed:4 },
    khan:{ priv:79, group:45, seed:2 }, karnak:{ priv:95, group:59, seed:3 },
    valley:{ priv:120, group:75, seed:4 }, bluehole:{ priv:199, group:129, seed:2 },
    ras:{ priv:149, group:95, seed:3 }, agiba:{ priv:99, group:59, seed:1 },
    qaitbay:{ priv:69, group:39, seed:2 }, siwa:{ priv:289, group:179, seed:4 }
  };
  Object.entries(BOOKING).forEach(([k,v])=>{ if(PLACES[k]) PLACES[k].booking = v; });
  const GROUP_MIN = 5;

  function getGroup(key){
    try{ return JSON.parse(localStorage.getItem("nomad-groups")||"{}")[key] || null; }catch(e){ return null; }
  }
  function setGroup(key, val){
    try{
      const all = JSON.parse(localStorage.getItem("nomad-groups")||"{}");
      if(val) all[key] = val; else delete all[key];
      localStorage.setItem("nomad-groups", JSON.stringify(all));
    }catch(e){}
  }
  function groupCount(key){ const g = getGroup(key); return PLACES[key].booking.seed + (g ? g.seats : 0); }

  window.NOMAD = { U, PLACES, GUIDES, saveReview, BASE_PPD:55, GROUP_MIN, getGroup, setGroup, groupCount };
})();

// Nomad shared site JS — nav, toast, wallpaper, plates, place detail, guides, planner+chat
(function(){
  "use strict";
  const page = document.body.dataset.page || "home";
  const N = window.NOMAD;

  /* ---------- toast ---------- */
  const toast = document.getElementById("toast");
  let toastT = null;
  function say(m){ if(!toast) return; toast.textContent = m; toast.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(()=>toast.classList.remove("show"), 2600); }
  window.nomadSay = say;

  /* ---------- mobile nav ---------- */
  const ham = document.getElementById("hamburger"), links = document.getElementById("navLinks");
  if(ham && links){
    ham.addEventListener("click", ()=>{ const o = links.classList.toggle("open"); ham.setAttribute("aria-expanded", o); });
    links.addEventListener("click", e=>{ if(e.target.tagName==="A") links.classList.remove("open"); });
  }
  /* ---------- AUTH: Sign in with Google (demo, stored locally) ---------- */
  const Auth = {
    get user(){ try{ return JSON.parse(localStorage.getItem("nomad_user")||"null"); }catch(e){ return null; } },
    set user(u){ u ? localStorage.setItem("nomad_user", JSON.stringify(u)) : localStorage.removeItem("nomad_user"); }
  };
  // one-time migration from the legacy session key (avatar -> picture)
  try{
    if(!localStorage.getItem("nomad_user") && localStorage.getItem("nomad-user")){
      const old = JSON.parse(localStorage.getItem("nomad-user"));
      if(old) localStorage.setItem("nomad_user", JSON.stringify({ name:old.name, email:old.email, picture:old.avatar || old.picture, googleId:old.googleId || ("demo-" + old.email), points:150 }));
      localStorage.removeItem("nomad-user");
    }
  }catch(e){}
  // Google Client ID Configuration
  const GOOGLE_CLIENT_ID = "YOUR_ACTUAL_CLIENT_ID_HERE.apps.googleusercontent.com"; // Replace with the actual generated client ID
  // Real client IDs look like 123456789012-abc123.apps.googleusercontent.com; anything else stays in safe demo mode
  const GIS_READY = /^[0-9]+-[a-z0-9-]+\.apps\.googleusercontent\.com$/i.test(GOOGLE_CLIENT_ID || "");
  const DEMO_ACCOUNTS = [
    { name:"Mohamed Ebrahim", email:"mohamed.ebrahin@gmail.com", picture:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop", googleId:"demo-mohamed" },
    { name:"Sara Adel", email:"sara.adel@gmail.com", picture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop", googleId:"demo-sara" }
  ];
  let pendingAction = null;
  function signInWithProfile(profile){
    let bonus = 150;
    try{
      const reg = JSON.parse(localStorage.getItem("nomad-bonus") || "{}");
      if(reg[profile.email]) bonus = 0; // welcome bonus granted once per profile
      else { reg[profile.email] = 150; localStorage.setItem("nomad-bonus", JSON.stringify(reg)); }
    }catch(e){}
    Auth.user = { name:profile.name, email:profile.email, picture:profile.picture, googleId:profile.googleId, points:bonus, via:profile.via || "google" };
    renderAuth(); closeAuthModal(); say("Signed in with Google — bookings secured ✔");
    if(pendingAction){ const a = pendingAction; pendingAction = null; a(); }
  }
  function signOut(){
    Auth.user = null;
    try{ if(window.google && google.accounts && google.accounts.id) google.accounts.id.disableAutoSelect(); }catch(e){}
    renderAuth(); say("Signed out. See you soon!");
  }
  // per-user linked storage: bookings, trips and programs follow the signed-in profile
  function scope(){ const u = Auth.user; return u ? "u-" + u.email.toLowerCase() : "guest"; }
  const DB = {
    get(k, fb){ try{
      const v = localStorage.getItem("nomad-" + scope() + "-" + k);
      if(v !== null) return JSON.parse(v);
      if(Auth.user){ const l = localStorage.getItem("nomad-" + k); if(l !== null) return JSON.parse(l); }
      return fb; }catch(e){ return fb; } },
    set(k, v){ try{ localStorage.setItem("nomad-" + scope() + "-" + k, JSON.stringify(v)); }catch(e){} }
  };
  // scoped open-group store (seed counts stay global, personal joins are per profile)
  const gGet = key=>DB.get("groups", {})[key] || null;
  const gSet = (key, val)=>{ const all = DB.get("groups", {}); if(val) all[key] = val; else delete all[key]; DB.set("groups", all); };
  const gCount = key=>N.PLACES[key].booking.seed + ((gGet(key) || {}).seats || 0);
  function ensureModal(){
    if(document.getElementById("authModal")) return;
    const m = document.createElement("div");
    m.className = "auth-backdrop hidden"; m.id = "authModal";
    m.innerHTML = `<div class="auth-card" role="dialog" aria-modal="true" aria-label="Sign in with Google">
      <div class="g-mark big">G</div><h3>Sign in</h3>
      <p class="muted" style="margin:0">to continue to <b>Nomad</b></p>
      <p class="auth-note" id="authNote"></p>
      <div id="authAccts">${DEMO_ACCOUNTS.map((a,i)=>`<button class="auth-acct" data-acct="${i}"><img src="${a.picture}" alt="" /><span><b>${a.name}</b><small>${a.email}</small></span></button>`).join("")}</div>
      <button class="linklike" id="authCancel">Cancel</button>
      <p class="tiny">Choose an account to secure your bookings &amp; profile. Live Google sign-in activates once a real client ID is set in site.js. <a href="privacy.html">Privacy Policy</a></p>
    </div>`;
    document.body.appendChild(m);
    document.getElementById("authCancel").addEventListener("click", closeAuthModal);
    m.addEventListener("click", e=>{ if(e.target===m) closeAuthModal(); });
    m.querySelectorAll("[data-acct]").forEach(b=>b.addEventListener("click", function(){
      this.innerHTML = "Signing in…";
      const acct = DEMO_ACCOUNTS[+this.dataset.acct];
      setTimeout(()=>signInWithProfile(acct), 900);
    }));
  }
  // Initialize Google Sign-In on window load
  window.addEventListener('DOMContentLoaded', () => {
      if (typeof google !== 'undefined' && google.accounts && GIS_READY) {
          google.accounts.id.initialize({
              client_id: GOOGLE_CLIENT_ID,
              callback: handleCredentialResponse,
              auto_select: false,
              cancel_on_tap_outside: true
          });

          // Render the Google Sign-In button if container exists
          const signinContainer = document.getElementById('googleSignInDiv');
          if (signinContainer) {
              signinContainer.innerHTML = "";
              google.accounts.id.renderButton(
                  signinContainer,
                  { theme: 'outline', size: 'large', width: '100%', text: 'signin_with' }
              );
          }
      }
  });

  // Handle the credential response (JWT Token) from Google
  function handleCredentialResponse(response) {
      try {
          const responsePayload = parseJwt(response.credential);

          const userData = {
              name: responsePayload.name,
              email: responsePayload.email,
              picture: responsePayload.picture,
              googleId: responsePayload.sub,
              points: 150 // Welcome bonus points for real sign-in
          };

          // Save user session locally
          signInWithProfile({ ...userData, via:"google-live" });

          console.log("Successfully signed in as:", userData.name);
      } catch (error) {
          console.error("Error processing Google Sign-In response:", error);
      }
  }

  // Helper to decode JWT token securely without external libraries
  function parseJwt(token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
  }
  window.handleCredentialResponse = handleCredentialResponse;
  window.parseJwt = parseJwt;

  // Update UI elements in the header and profile modal
  function updateUserProfileUI(user) {
      const profileContainer = document.getElementById('userProfileContainer');
      const signinButtonContainer = document.getElementById('googleSignInDiv');

      if (profileContainer) {
          profileContainer.classList.remove("hidden");
          profileContainer.innerHTML = `
              <button class="profile-chip" id="userChip" aria-label="Profile and settings menu" onclick="toggleSettingsDropdown()">
                  <img src="${user.picture}" alt="${user.name}" />
                  <span>${user.name.split(" ")[0]}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/></svg>
              </button>
          `;
      }
      if (signinButtonContainer) {
          signinButtonContainer.style.display = 'none';
      }
  }
  window.updateUserProfileUI = updateUserProfileUI;
  function toggleSettingsDropdown(){
      renderMenu();
      document.getElementById("accMenu")?.classList.toggle("hidden");
  }
  window.toggleSettingsDropdown = toggleSettingsDropdown;
  function closeAuthModal(){ document.getElementById("authModal")?.classList.add("hidden"); }
  function openAuthModal(msg, action){
    ensureModal(); pendingAction = action || null;
    document.getElementById("authNote").textContent = msg || "";
    document.getElementById("authModal").classList.remove("hidden");
  }
  function requireAuth(action){ Auth.user ? action() : openAuthModal("🔒 Sign in to secure your booking", action); }
  // inject header auth containers: official GIS button slot + dynamic profile slot
  document.querySelectorAll(".nav-right").forEach(nr=>{
    const chip = nr.querySelector(".profile-chip");
    if(!nr.querySelector("#googleSignInDiv")){
      const slot = document.createElement("span");
      slot.id = "googleSignInDiv";
      slot.innerHTML = '<button class="btn btn-google btn-small hide-mobile" id="googleBtn"><span class="g-mark">G</span><span>Sign in with Google</span></button>';
      slot.querySelector("#googleBtn").addEventListener("click", ()=>openAuthModal("", null));
      nr.insertBefore(slot, chip);
    }
    if(!nr.querySelector("#userProfileContainer")){
      const wrap = document.createElement("span");
      wrap.id = "userProfileContainer"; wrap.className = "hidden";
      nr.insertBefore(wrap, chip);
    }
    if(chip) chip.remove();
  });
  function renderAuth(){
    const u = Auth.user;
    if(u) updateUserProfileUI(u);
    else {
      const pc = document.getElementById("userProfileContainer");
      if(pc){ pc.classList.add("hidden"); pc.innerHTML = ""; }
      const sb = document.getElementById("googleSignInDiv");
      if(sb) sb.style.display = "";
    }
    const h = document.getElementById("heroTitle");
    if(h) h.textContent = "Discover the Endless Wonders of Egypt, " + (u ? u.name.split(" ")[0] : "Mohamed") + ".";
    renderMenu();
  }
  renderAuth();

  /* ---------- LOYALTY POINTS & TIERS ---------- */
  const TIERS = [
    { min:0, name:"Bronze", off:0 },
    { min:50, name:"Silver", off:5 },
    { min:150, name:"Gold", off:10 },
    { min:300, name:"Platinum", off:15 }
  ];
  function getPoints(){
    let pts = 0;
    try{
      if(Auth.user && Auth.user.points) pts += Auth.user.points; // welcome bonus
      const groups = DB.get("groups", {});
      Object.entries(groups).forEach(([k,g])=>{
        const b = N.PLACES[k] && N.PLACES[k].booking; if(!b) return;
        if(g.status==="private") pts += Math.round(b.priv/10);
        else if(g.status==="confirmed") pts += Math.round(b.group/10);
      });
      DB.get("trips", []).forEach(t=>{ pts += Math.round((t.total||0)/10); });
    }catch(e){}
    return pts;
  }
  function getTier(pts){
    let cur = TIERS[0], next = null;
    TIERS.forEach((t,i)=>{ if(pts>=t.min){ cur = t; next = TIERS[i+1] || null; } });
    return { cur, next };
  }
  function getPrograms(){ return DB.get("programs", []); }
  function setPrograms(p){ DB.set("programs", p); }

  /* ---------- PROFILE / SETTINGS MENU ---------- */
  function renderMenu(){
    const panel = document.getElementById("accMenu"); if(!panel) return;
    const u = Auth.user, pts = getPoints(), tier = getTier(pts), cur = tier.cur, next = tier.next;
    panel.querySelector("#mAvatar").innerHTML = u ? `<img src="${u.picture}" alt="Profile photo" />` : "G";
    panel.querySelector("#mName").textContent = u ? u.name : "Guest traveler";
    panel.querySelector("#mEmail").textContent = u ? u.email : "Sign in to sync profile & points";
    panel.querySelector("#mAuthBtn").textContent = u ? "Sign out" : "Sign in with Google";
    panel.querySelector("#mPoints").textContent = pts + " pts";
    panel.querySelector("#mTierName").textContent = cur.name + (cur.off ? " • " + cur.off + "% trip discount" : " • Member");
    const span = next ? next.min - pts : 0;
    panel.querySelector("#mTierHint").textContent = next ? span + " pts to " + next.name + " (" + next.off + "% off)" : "Top tier reached — enjoy 15% off!";
    panel.querySelector("#mTierBar").style.width = (next ? Math.min(100, pts/next.min*100) : 100) + "%";
    panel.querySelector("#mTierList").innerHTML = TIERS.map(t=>`<span class="${pts>=t.min?"hit":""}">${t.name} ${t.min}+</span>`).join("");
    const progs = getPrograms();
    panel.querySelector("#mPrograms").innerHTML = progs.length ? progs.map((p,i)=>`
      <div class="prog-row"><div><strong>${esc(p.name)}</strong><small>${p.people}p × ${p.days}d • ${esc(p.guideName)} • $${p.total}</small></div>
      <button class="load" data-load="${i}">Load</button><button data-del="${i}" aria-label="Delete">✕</button></div>`).join("")
      : `<p class="muted small" style="margin:0">No saved programs yet — build one on the Plan page.</p>`;
    panel.querySelectorAll("[data-load]").forEach(b=>b.addEventListener("click", ()=>{
      const p = getPrograms()[+b.dataset.load]; if(!p) return;
      if(page === "plan" && window.nomadLoadProgram){ window.nomadLoadProgram(p); closeMenu(); }
      else { try{ sessionStorage.setItem("nomad-load", JSON.stringify(p)); }catch(e){} location.href = "plan.html"; }
    }));
    panel.querySelectorAll("[data-del]").forEach(b=>b.addEventListener("click", ()=>{
      const arr = getPrograms(); arr.splice(+b.dataset.del, 1); setPrograms(arr); renderMenu(); say("Program deleted.");
    }));
  }
  function closeMenu(){ document.getElementById("accMenu")?.classList.add("hidden"); }
  // inject gear button + dropdown shell
  document.querySelectorAll(".nav-right").forEach(nr=>{
    if(nr.querySelector("#accBtn")) return;
    const b = document.createElement("button");
    b.id = "accBtn"; b.setAttribute("aria-label", "Settings and profile menu"); b.textContent = "⚙";
    b.addEventListener("click", e=>{ e.stopPropagation(); toggleSettingsDropdown(); });
    nr.insertBefore(b, nr.querySelector(".hamburger"));
  });
  if(!document.getElementById("accMenu")){
    const m = document.createElement("div");
    m.id = "accMenu"; m.classList.add("hidden");
    m.innerHTML = `
      <div class="acc-sec"><h4>Profile</h4>
        <div class="acc-profile"><span class="av" id="mAvatar">G</span>
          <div><strong id="mName">Guest traveler</strong><small id="mEmail"></small></div>
          <button class="btn btn-google btn-small" id="mAuthBtn">Sign in with Google</button>
        </div>
      </div>
      <div class="acc-sec"><h4>Loyalty points</h4>
        <div class="loyal-top"><span id="mTierName"></span><span class="pts" id="mPoints"></span></div>
        <div class="tier-bar"><i id="mTierBar"></i></div>
        <small class="muted" id="mTierHint"></small>
        <div class="tier-list" id="mTierList"></div>
      </div>
      <div class="acc-sec"><h4>Your saved programs</h4><div id="mPrograms"></div></div>
      <div class="acc-sec"><h4>Support</h4>
        <div class="acc-links">
          <button class="rowlink" id="mSupport">💬 Customer support chat</button>
          <a href="tel:19772">📞 Hotline 19772 • 24/7</a>
          <a href="about.html">☀️ About Us — mission &amp; vision</a>
        </div>
      </div>`;
    document.body.appendChild(m);
    document.getElementById("mAuthBtn").addEventListener("click", ()=>{
      closeMenu();
      if(Auth.user) signOut();
      else openAuthModal("", null);
    });
    document.getElementById("mSupport").addEventListener("click", ()=>{
      closeMenu();
      if(page === "home" && window.nomadSupportOpen) window.nomadSupportOpen();
      else { try{ sessionStorage.setItem("nomad-open-support", "1"); }catch(e){} location.href = "index.html"; }
    });
    document.addEventListener("click", e=>{ if(!e.target.closest("#accMenu") && !e.target.closest("#accBtn")) closeMenu(); });
    document.addEventListener("keydown", e=>{ if(e.key === "Escape") closeMenu(); });
  }
  // footer: About Us + Privacy Policy links everywhere
  document.querySelectorAll(".foot-links").forEach(f=>{
    if(!f.querySelector('[href="about.html"]')){ const a = document.createElement("a"); a.href = "about.html"; a.textContent = "About Us"; f.appendChild(a); }
    if(!f.querySelector('[href="privacy.html"]')){ const a = document.createElement("a"); a.href = "privacy.html"; a.textContent = "Privacy Policy"; f.appendChild(a); }
  });

  document.querySelectorAll(".book-btn").forEach(b=>b.addEventListener("click", ()=>{
    const t = b.closest(".card")?.querySelector("h3")?.textContent || "experience";
    requireAuth(()=>say("☀️ Nice choice! “"+t+"” reserved — check email to confirm."));
  }));

  const esc = s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

  /* ---------- HOME: wallpaper slideshow ---------- */
  if(page === "home"){
    const WALLS = [
      { title:"Ancient Egypt", sub:"Pyramids & Temples" },
      { title:"Red Sea Diving", sub:"Coral reefs, marine life in Dahab / Sharm" },
      { title:"Arabian Nights", sub:"Cairo bazaars, Khan el-Khalili, Al-Muizz street" },
      { title:"Luxor & Aswan", sub:"Nile river cruises" }
    ];
    const slides = [...document.querySelectorAll(".wall-slide")];
    const dotsWrap = document.getElementById("dots");
    const wt = document.getElementById("wallTitle"), ws = document.getElementById("wallSub"), wk = document.getElementById("wallKicker");
    let idx = 0, timer = null; const DUR = 5000;
    WALLS.forEach((_,i)=>{ const b=document.createElement("button"); b.setAttribute("aria-label","Show wallpaper "+(i+1)); if(!i)b.classList.add("active"); b.addEventListener("click",()=>{go(i);restart();}); dotsWrap.appendChild(b); });
    const dots = [...dotsWrap.children];
    const render = ()=>{ slides.forEach((s,i)=>s.classList.toggle("active",i===idx)); dots.forEach((d,i)=>d.classList.toggle("active",i===idx)); wt.textContent=WALLS[idx].title; ws.textContent=WALLS[idx].sub; wk.textContent=(idx+1)+" / 4 — Now showing"; };
    const go = i=>{ idx=(i+WALLS.length)%WALLS.length; render(); };
    const restart = ()=>{ clearInterval(timer); timer=setInterval(()=>go(idx+1),DUR); };
    document.getElementById("prevBtn").addEventListener("click",()=>{go(idx-1);restart();});
    document.getElementById("nextBtn").addEventListener("click",()=>{go(idx+1);restart();});
    const hero = document.querySelector(".hero");
    hero.addEventListener("mouseenter",()=>clearInterval(timer));
    hero.addEventListener("mouseleave",restart);
    let x0=null;
    hero.addEventListener("touchstart",e=>x0=e.touches[0].clientX,{passive:true});
    hero.addEventListener("touchend",e=>{ if(x0==null)return; const dx=e.changedTouches[0].clientX-x0; if(Math.abs(dx)>40){go(idx+(dx<0?1:-1));restart();} x0=null; },{passive:true});
    render(); restart();
    // search -> destinations page
    document.getElementById("searchForm").addEventListener("submit",e=>{ e.preventDefault();
      const q = document.getElementById("searchInput").value.trim();
      location.href = "destinations.html" + (q ? ("?q="+encodeURIComponent(q)) : "");
    });
    document.querySelectorAll(".search-tags button").forEach(b=>b.addEventListener("click",()=>{ location.href = "destinations.html?q="+encodeURIComponent(b.dataset.q); }));
  }

  /* ---------- DESTINATIONS: render 10 plates ---------- */
  if(page === "destinations"){
    const grid = document.getElementById("plateGrid");
    const params = new URLSearchParams(location.search);
    const q0 = (params.get("q")||"").toLowerCase();
    const input = document.getElementById("destSearch");
    if(input && params.get("q")) input.value = params.get("q");
    const keys = Object.keys(N.PLACES);
    grid.innerHTML = keys.map(k=>{ const p=N.PLACES[k]; return `
      <a class="plate" href="place.html?place=${k}" data-key="${k}">
        <img src="${p.cover.replace("w=1600","w=900")}" alt="${esc(p.name)}" loading="lazy" onerror="this.src='${N.PLACES.pyramids.cover.replace("w=1600","w=900")}'" />
        <span class="plate-shade"></span>
        <span class="plate-text"><strong>${esc(p.name)}</strong><em>${esc(p.sub)}</em><span class="plate-open">Open detail →</span></span>
      </a>`; }).join("");
    const count = document.getElementById("plateCount");
    const apply = ()=>{
      const q = (input.value||"").trim().toLowerCase(); let vis = 0;
      grid.querySelectorAll(".plate").forEach(a=>{
        const p = N.PLACES[a.dataset.key];
        const show = !q || (p.name+" "+p.sub+" "+p.overview).toLowerCase().includes(q);
        a.style.display = show ? "" : "none"; if(show) vis++;
      });
      count.textContent = vis + " of " + keys.length + " destinations";
      document.getElementById("noPlates").classList.toggle("hidden", vis>0);
    };
    input.addEventListener("input", apply);
    if(q0){ apply(); }
    count.textContent = keys.length + " of " + keys.length + " destinations";
  }

  /* ---------- PLACE DETAIL ---------- */
  if(page === "place"){
    const key = new URLSearchParams(location.search).get("place");
    const p = N.PLACES[key];
    if(!p){ location.href = "destinations.html"; return; }
    document.title = "Nomad — " + p.name;
    const wb = (u,w)=>u.replace(/w=\d+/, "w="+w);
    document.getElementById("dCover").src = p.cover;
    document.getElementById("dCover").alt = p.name;
    document.getElementById("dTitle").textContent = p.name;
    document.getElementById("dSub").textContent = p.sub;
    document.getElementById("gMain").src = p.gallery[0];
    const th = document.getElementById("gThumbs"); th.innerHTML = "";
    p.gallery.forEach((src,i)=>{ const im=document.createElement("img"); im.src=wb(src,300); im.alt=p.name+" photo "+(i+1); if(!i)im.classList.add("on");
      im.onerror = ()=>{ im.src = wb(N.PLACES.pyramids.cover,300); };
      im.addEventListener("click",()=>{ document.getElementById("gMain").src=src; [...th.children].forEach(x=>x.classList.remove("on")); im.classList.add("on"); });
      th.appendChild(im); });
    document.getElementById("dInfo").innerHTML = p.info.map(s=>`<span>${esc(s)}</span>`).join("");
    document.getElementById("dOverview").textContent = p.overview;
    document.getElementById("dHighlights").innerHTML = p.highlights.map(h=>`<li>✔ ${esc(h)}</li>`).join("");
    // booking: private (instant) vs group join (waiting list until 5 people)
    const bk = p.booking, $id = id=>document.getElementById(id);
    $id("privPrice").textContent = "$" + bk.priv + " / person";
    $id("grpPrice").textContent = "$" + bk.group + " / person";
    const paintGroup = ()=>{
      const count = gCount(key), mine = gGet(key);
      const need = Math.max(0, N.GROUP_MIN - count);
      const confirmed = need === 0;
      $id("groupLabel").textContent = count + " / " + N.GROUP_MIN + " travelers joined" + (mine ? " (including your " + mine.seats + " seat" + (mine.seats>1?"s":"") + ")" : "");
      const pill = $id("groupPill");
      pill.textContent = confirmed ? "Confirmed" : "Waiting List";
      pill.className = "status-pill " + (confirmed ? "ok" : "wait");
      $id("groupBar").style.width = Math.min(100, count / N.GROUP_MIN * 100) + "%";
      $id("groupHint").textContent = confirmed ? "Group is full — new joins start the next group." : need + " more " + (need===1?"person":"people") + " to confirm this trip.";
      const mb = $id("myBooking"), btn = $id("dBook");
      document.querySelectorAll('input[name="btype"]').forEach(r=>{
        r.closest(".book-opt").classList.toggle("on", r.checked);
      });
      const mode = document.querySelector('input[name="btype"]:checked').value;
      $id("groupBox").style.display = mode === "group" ? "" : "none";
      if(mine && mine.status === "private"){
        mb.textContent = "✔ You have a private booking for " + p.name + " ($" + bk.priv + " / person). See you there!";
        mb.classList.remove("hidden"); btn.textContent = "Book another private seat";
      } else if(mine && mine.status === "waiting"){
        mb.textContent = "⏳ You are on the Waiting List with " + mine.seats + " seat" + (mine.seats>1?"s":"") + " — " + need + " more to confirm.";
        mb.classList.remove("hidden"); btn.textContent = "Leave waiting list";
      } else if(mine && mine.status === "confirmed"){
        mb.textContent = "✔ Group confirmed! " + p.name + " is on — details were sent to your email.";
        mb.classList.remove("hidden"); btn.textContent = "Book another private seat";
      } else { mb.classList.add("hidden"); btn.textContent = "Confirm booking"; }
    };
    document.querySelectorAll('input[name="btype"]').forEach(r=>r.addEventListener("change", paintGroup));
    $id("dBook").addEventListener("click", ()=>requireAuth(()=>{
      const mode = document.querySelector('input[name="btype"]:checked').value;
      const mine = gGet(key);
      if(mine && mine.status === "waiting" && mode === "group"){ gSet(key, null); paintGroup(); say("You left the waiting list."); return; }
      if(mode === "private"){
        gSet(key, { seats: 1, status: "private" }); paintGroup();
        say("☀️ Private booking confirmed for “" + p.name + "” — check email.");
        return;
      }
      const seats = +$id("groupSeats").value;
      const count = gCount(key) + seats;
      const status = count >= N.GROUP_MIN ? "confirmed" : "waiting";
      gSet(key, { seats, status }); paintGroup();
      say(status === "confirmed" ? "✔ Group reached 5 — trip confirmed!" : "⏳ Added to Waiting List (" + count + " / 5).");
    }));
    paintGroup();
    const paint = ()=>{
      const list = p.reviews;
      const avg = list.length ? (list.reduce((a,r)=>a+r.r,0)/list.length) : 0;
      document.getElementById("dAvg").textContent = list.length ? `★ ${avg.toFixed(1)} • ${list.length} reviews` : "No reviews yet";
      document.getElementById("dReviews").innerHTML = list.map(r=>`<div class="review"><strong>${esc(r.n)} <span class="r-stars">${"★".repeat(r.r)}${"☆".repeat(5-r.r)}</span></strong><small>${esc(r.d||"")}</small><p>${esc(r.t)}</p></div>`).join("");
    };
    paint();
    let myRating = 5;
    const si = document.getElementById("starsInput");
    si.addEventListener("click",e=>{ const b=e.target.closest("button"); if(!b)return; myRating=+b.dataset.v; [...si.children].forEach(x=>x.classList.toggle("on",+x.dataset.v<=myRating)); });
    document.getElementById("reviewForm").addEventListener("submit",e=>{ e.preventDefault();
      const t = document.getElementById("reviewText").value.trim(); if(!t) return;
      if(!Auth.user){ openAuthModal("🔒 Sign in to post your review", null); return; }
      const who = Auth.user.name.split(" ")[0];
      const rev = { n:who, r:myRating, t, d:"Just now" };
      p.reviews.unshift(rev); N.saveReview(key, rev);
      document.getElementById("reviewText").value = ""; paint(); say("Thank you! Your review was posted ★");
    });
  }

  /* ---------- GUIDES ---------- */
  if(page === "guides"){
    const grid = document.getElementById("guideGrid");
    const badge = c=>c.includes("PADI")?"aqua":(c.includes("Top")?"gold":"");
    grid.innerHTML = Object.entries(N.GUIDES).map(([k,g])=>`
      <article class="card guide">
        <div class="guide-top">
          <img src="${g.img}" alt="${esc(g.name)} portrait" loading="lazy" />
          <div><h3>${esc(g.name)} <span class="verified">✔</span></h3><p class="role">${esc(g.role)}</p>
          <p class="stars">${"★".repeat(g.stars)}${"☆".repeat(5-g.stars)} <span>${g.rating} • ${g.count}</span></p></div>
        </div>
        <div class="tags"><span>${esc(g.tags[0])}</span><span>${esc(g.tags[1])}</span><span>${g.langs}</span></div>
        <div class="cred"><span class="cred-badge ${badge(g.cred)}">${esc(g.cred)}</span><span class="cred-badge light">${g.years}</span></div>
        <blockquote class="feedback">“${esc(g.quote)}”</blockquote>
        <div class="guide-foot"><strong>$${g.rate} / day</strong><a class="btn btn-terra btn-small" href="plan.html?guide=${k}">Chat →</a></div>
      </article>`).join("");
  }

  /* ---------- PLAN: calculator + real guide chat ---------- */
  if(page === "plan"){
    const T = {}; Object.entries(N.PLACES).forEach(([k,p])=>T[k]={label:p.name.split(" &")[0],fee:p.ticket});
    const state = { people:2, days:3, guide:"ahmed", discount:0 };
    const params = new URLSearchParams(location.search);
    if(params.get("guide") && N.GUIDES[params.get("guide")]) state.guide = params.get("guide");
    const $ = id=>document.getElementById(id);
    const money = n=>"$"+Math.round(n).toLocaleString("en-US");
    const selTickets = ()=>[...document.querySelectorAll("[data-place-ticket]:checked")].map(c=>({key:c.dataset.placeTicket,...T[c.dataset.placeTicket]}));

    function calc(){
      const g = N.GUIDES[state.guide], sel = selTickets();
      const per = sel.reduce((a,s)=>a+s.fee,0);
      const base = state.people*state.days*N.BASE_PPD;
      const tickets = state.people*per;
      const guideFee = state.days*g.rate*(1-state.discount);
      const subtotal = base+tickets+guideFee;
      const tier = getTier(getPoints());
      const loyal = subtotal*tier.cur.off/100;
      const total = subtotal-loyal;
      $("peopleVal").textContent = state.people; $("daysVal").textContent = state.days;
      $("baseDetail").textContent = `${state.people} people × ${state.days} days × $${N.BASE_PPD} (hotel + daily baseline)`;
      $("baseVal").textContent = money(base);
      $("ticketDetail").textContent = sel.length ? `${state.people} people × (${sel.map(s=>"$"+s.fee).join("+")})` : "No places selected yet";
      $("ticketVal").textContent = money(tickets);
      $("guideDetail").textContent = `${g.name.split(" ")[0]} × ${state.days} days × $${g.rate}/day${state.discount?" (−10% negotiated)":""}`;
      $("guideVal").textContent = money(guideFee);
      $("totalVal").textContent = money(total);
      $("perPerson").textContent = `≈ ${money(total/Math.max(1,state.people))} / person`;
      $("discountNote").classList.toggle("hidden", !state.discount);
      $("loyalRow").classList.toggle("hidden", !loyal);
      if(loyal){ $("loyalDetail").textContent = tier.cur.name + " tier −" + tier.cur.off + "%"; $("loyalVal").textContent = "−" + money(loyal); }
      return { base, tickets, guideFee, loyal, total, sel, g };
    }
    // render place checkboxes + guide picker from data
    const pc = $("placeChecks");
    pc.innerHTML = Object.entries(T).map(([k,t],i)=>`<label class="place-check"><input type="checkbox" data-place-ticket="${k}" ${i<2?"checked":""} /><span>${esc(t.label)} <b>$${t.fee}</b><small>Entry + fees / person</small></span></label>`).join("");
    const gp = $("guidePick");
    gp.innerHTML = Object.entries(N.GUIDES).map(([k,g])=>`<label class="g-pick ${k===state.guide?"on":""}"><input type="radio" name="guide" value="${k}" ${k===state.guide?"checked":""} /><img src="${g.img}" alt="" /><span>${esc(g.name)}<small>${esc(g.role.split("•")[0].trim())} • $${g.rate}/day</small></span></label>`).join("");
    document.querySelectorAll("[data-step]").forEach(b=>b.addEventListener("click",()=>{
      const [k,d] = b.dataset.step.split(":"); const dl = +d;
      if(k==="people") state.people = Math.min(20,Math.max(1,state.people+dl));
      if(k==="days") state.days = Math.min(21,Math.max(1,state.days+dl));
      calc();
    }));
    pc.querySelectorAll("input").forEach(c=>c.addEventListener("change",calc));
    gp.querySelectorAll("input").forEach(r=>r.addEventListener("change",()=>{
      state.guide = gp.querySelector("input:checked").value;
      gp.querySelectorAll(".g-pick").forEach(l=>l.classList.toggle("on",l.querySelector("input").checked));
      setGuide(state.guide,true); calc();
    }));

    const chatMsgs = $("chatMsgs");
    const bubble = (who,html)=>{ const d=document.createElement("div"); d.className="bubble "+who;
      d.innerHTML = `${html}<small>${who==="me"?"Mohamed • now":N.GUIDES[state.guide].name+" • online"}</small>`;
      chatMsgs.appendChild(d); chatMsgs.scrollTop = chatMsgs.scrollHeight; };
    const typing = on=>{ chatMsgs.querySelectorAll(".typing").forEach(t=>t.remove()); if(!on)return;
      const t=document.createElement("div"); t.className="typing"; t.textContent=N.GUIDES[state.guide].name.split(" ")[0]+" is typing…";
      chatMsgs.appendChild(t); chatMsgs.scrollTop=chatMsgs.scrollHeight; };
    function reply(q0){
      const t = calc(), q = q0.toLowerCase(), first = N.GUIDES[state.guide].name.split(" ")[0];
      let reply;
      if(/discount|cheaper|lower|negotiat|price|cost|deal/.test(q)){
        if(!state.discount){
          typing(true);
          setTimeout(()=>{ typing(false);
            bubble("guide",`Hello Mohamed! For ${state.days} days with ${state.people} people (total ${money(t.total)}) I can do <b>10% off my guiding fee</b> if we confirm today. Tap below to apply it! 🙏`);
            const o=document.createElement("div"); o.className="chat-offer";
            o.innerHTML=`🎁 ${first}'s offer: guide fee ${money(t.guideFee)} → ${money(t.guideFee*0.9)}<br><button class="btn btn-terra btn-small" id="applyDeal">Apply 10% discount</button>`;
            chatMsgs.appendChild(o); chatMsgs.scrollTop=chatMsgs.scrollHeight;
            document.getElementById("applyDeal").addEventListener("click",()=>{ state.discount=0.10; const n=calc();
              o.innerHTML="✔ Discount applied — new total <b>"+money(n.total)+"</b>. Wonderful news, Mohamed!"; say("10% guide discount applied ✔"); });
          },1400); return;
        }
        reply=`Your 10% is already applied — total <b>${money(t.total)}</b>. I can add a free felucca sunset if we lock the date today. ⛵`;
      } else if(/free|available|date|oct|when/.test(q)){
        reply=`Yes! I'm free around <b>${$("tripDate").value||"your date"}</b>. ${state.days} days / ${state.people} people works — shall I hold ${t.sel.map(s=>s.label).join(", ")||"your places"}?`;
      } else if(/includ|total|cover|ticket|hotel|transport/.test(q)){
        reply=`No hidden fees: Base ${money(t.base)} (hotel + transport ${state.people}×${state.days}), Tickets ${money(t.tickets)} (${t.sel.map(s=>s.label+" $"+s.fee).join(", ")||"none yet"} × ${state.people}), my guiding ${money(t.guideFee)}. <b>Total ${money(t.total)}</b>.`;
      } else if(/hello|^hi|morning|evening/.test(q)){
        const g=N.GUIDES[state.guide];
        reply=`Hello and welcome, Mohamed! 🌞 I'm <b>${g.name}</b> (${g.role}). I see ${state.people} × ${state.days} = <b>${money(t.total)}</b> so far. Ask or negotiate — I reply myself, no bots.`;
      } else {
        reply=`For ${state.people} people, ${state.days} days, ${t.sel.length} places = <b>${money(t.total)}</b> — I'd start at sunrise to beat the heat. Ask about price, date or inclusions! 👍`;
      }
      typing(true); setTimeout(()=>{ typing(false); bubble("guide",reply); },1100);
    }
    function setGuide(key,greeted){
      const g=N.GUIDES[key];
      $("chatAvatar").src=g.img; $("chatName").textContent=g.name; $("chatRate").textContent="$"+g.rate+"/day";
      $("chatText").placeholder=`Talk to ${g.name.split(" ")[0]} directly… negotiate, ask anything`;
      if(greeted){ chatMsgs.innerHTML=""; const t=calc();
        bubble("guide",`Hello Mohamed, I'm <b>${g.name}</b> (${g.role}) 🌞 — ${state.people} × ${state.days} = <b>${money(t.total)}</b>. How can I help?`); }
    }
    $("chatForm").addEventListener("submit",e=>{ e.preventDefault();
      const v=$("chatText").value.trim(); if(!v)return;
      bubble("me",v.replace(/</g,"&lt;")); $("chatText").value=""; reply(v); });
    document.querySelectorAll("[data-quick]").forEach(b=>b.addEventListener("click",()=>{ bubble("me",b.dataset.quick.replace(/</g,"&lt;")); reply(b.dataset.quick); }));
    $("confirmTrip").addEventListener("click",()=>{ requireAuth(()=>{ const t=calc();
      try{ const arr = DB.get("trips", []); arr.push({ total:t.total, date:new Date().toISOString().slice(0,10) }); DB.set("trips", arr); }catch(e){}
      renderMenu(); calc();
      $("formNote").textContent=`✔ Wonderful! ${state.people} × ${state.days} with ${t.g.name.split(" ")[0]} — ${money(t.total)} reserved. Points earned! Confirmed in chat.`;
      bubble("guide",`Done! Your ${money(t.total)} program is with me personally. Thank you! 🐪`); say("Trip confirmed at "+money(t.total)+" ✔"); }); });
    // save / load custom programs
    const progName = ()=>`${state.people}p × ${state.days}d • ${N.GUIDES[state.guide].name.split(" ")[0]} • $${Math.round(calc().total)}`;
    $("saveProgram").addEventListener("click", ()=>{
      const arr = getPrograms();
      arr.push({ name:progName(), people:state.people, days:state.days, places:selTickets().map(s=>s.key), guide:state.guide, date:$("tripDate").value, notes:$("tripNotes").value, total:Math.round(calc().total) });
      setPrograms(arr); say("Program saved — find it in the profile menu ♡");
    });
    window.nomadLoadProgram = p=>{
      state.people = Math.min(20, Math.max(1, p.people||2));
      state.days = Math.min(21, Math.max(1, p.days||3));
      state.discount = 0;
      document.querySelectorAll("[data-place-ticket]").forEach(c=>{ c.checked = (p.places||[]).includes(c.dataset.placeTicket); });
      if(p.guide && N.GUIDES[p.guide]){ state.guide = p.guide;
        gp.querySelectorAll("input").forEach(r=>{ r.checked = r.value===p.guide; });
        gp.querySelectorAll(".g-pick").forEach(l=>l.classList.toggle("on", l.querySelector("input").checked));
        setGuide(state.guide, true);
      }
      if(p.date) $("tripDate").value = p.date;
      if(p.notes !== undefined) $("tripNotes").value = p.notes || "";
      calc(); say("Program loaded: " + p.name);
      document.querySelector(".plan-grid").scrollIntoView({ behavior:"smooth" });
    };
    try{
      const stored = sessionStorage.getItem("nomad-load");
      if(stored){ sessionStorage.removeItem("nomad-load"); window.nomadLoadProgram(JSON.parse(stored)); }
    }catch(e){}
    setGuide(state.guide,true); calc();
  }

  /* ---------- HOME: customer support widget + hotline/SIM ---------- */
  if(page === "home"){
    const fab = document.createElement("button");
    fab.id = "supFab"; fab.setAttribute("aria-label", "Open customer support chat"); fab.textContent = "💬";
    const panel = document.createElement("div");
    panel.id = "supPanel"; panel.classList.add("hidden");
    panel.innerHTML = `
      <div class="sup-head"><span style="font-size:1.4rem">🌞</span><div><strong>Nomad Support</strong><small>Online • general inquiries &amp; booking help</small></div><button id="supClose" aria-label="Close support">✕</button></div>
      <div id="supMsgs"></div>
      <div class="sup-quick">
        <button type="button" data-sq="Where is my booking?">My booking?</button>
        <button type="button" data-sq="How do I meet my guide?">Meet my guide?</button>
        <button type="button" data-sq="How much does a trip cost?">Trip cost?</button>
        <button type="button" data-sq="I need a local SIM card">SIM card?</button>
      </div>
      <form id="supForm"><input id="supText" placeholder="Ask about bookings, guides, prices…" autocomplete="off" /><button class="btn btn-terra btn-small" type="submit">Send</button></form>
      <div class="hotline">
        <span>📞 Hotline <span class="num">19772</span> • 24/7 booking help</span>
        <a class="sim-cta" href="sim.html">Need a local SIM card? Click here 📶</a>
      </div>`;
    document.body.append(fab, panel);
    const msgs = panel.querySelector("#supMsgs");
    const add = (who, html)=>{ const d = document.createElement("div"); d.className = "bubble " + (who === "me" ? "me" : "guide");
      d.innerHTML = html + `<small>${who === "me" ? "You • now" : "Nomad Support • online"}</small>`;
      msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight; };
    const answer = q0=>{
      const q = q0.toLowerCase();
      let a;
      if(/book|reserv|confirm/.test(q)) a = `You can track any booking from the <b>Plan My Trip</b> page — totals, guide chat and confirmations live there. Need changes? <a href="plan.html">Open Plan My Trip →</a>`;
      else if(/guide|meet|human|talk/.test(q)) a = `To talk to a real certified guide (not a bot), open <a href="guides.html">Guides</a> and tap <b>Chat</b> — Ahmed, Salma and 4 more reply personally.`;
      else if(/sim card|sim|chip|internet|data/.test(q)) a = `Easy! Tourist SIMs from ~$18 at airport stores (passport needed). See options + our $15 delivery concierge: <a href="sim.html">SIM card guide →</a> — or call <b>19772</b>.`;
      else if(/cost|price|much|cheap/.test(q)) a = `Pricing is fully transparent: the <a href="plan.html">Plan page calculator</a> updates Base + Tickets + Guide fee live as you change people, days and places.`;
      else if(/cancel|refund/.test(q)) a = `Free cancellation up to 48h before your trip — just tell your guide in chat or call <b>19772</b> and we refund in full.`;
      else if(/hello|^hi|morning|evening/.test(q)) a = `Hello and welcome! 🌞 Ask me about bookings, guides, prices, cancellations — or tap a topic below.`;
      else if(/destination|where|place|visit/.test(q)) a = `Start with our <a href="destinations.html">10 destinations</a> — Pyramids, Blue Hole, Siwa and more, each with gallery + reviews.`;
      else a = `Got it! For that, a human guide can help best — <a href="plan.html">chat with one here →</a> — or call <b>19772</b> (24/7). Try: bookings, prices, SIM, guides.`;
      const t = document.createElement("div"); t.className = "typing"; t.textContent = "Support is typing…";
      msgs.appendChild(t); msgs.scrollTop = msgs.scrollHeight;
      setTimeout(()=>{ t.remove(); add("bot", a); }, 800);
    };
    fab.addEventListener("click", ()=>{
      const open = panel.classList.toggle("hidden");
      if(!open && !msgs.children.length) add("bot", `Hello, Mohamed! 🌞 I'm <b>Nomad Support</b> — bookings, navigation, prices. What's up?`);
      if(open) fab.textContent = "💬"; else fab.textContent = "✕";
    });
    panel.querySelector("#supClose").addEventListener("click", ()=>{ panel.classList.add("hidden"); fab.textContent = "💬"; });
    panel.querySelector("#supForm").addEventListener("submit", e=>{ e.preventDefault();
      const inp = panel.querySelector("#supText"), v = inp.value.trim(); if(!v) return;
      add("me", v.replace(/</g, "&lt;")); inp.value = ""; answer(v); });
    panel.querySelectorAll("[data-sq]").forEach(b=>b.addEventListener("click", ()=>{ add("me", b.dataset.sq); answer(b.dataset.sq); }));
    window.nomadSupportOpen = ()=>{
      panel.classList.remove("hidden"); fab.textContent = "✕";
      if(!msgs.children.length) add("bot", `Hello, Mohamed! 🌞 I'm <b>Nomad Support</b> — bookings, navigation, prices. What's up?`);
      panel.scrollIntoView({ behavior:"smooth", block:"nearest" });
    };
    try{ if(sessionStorage.getItem("nomad-open-support")){ sessionStorage.removeItem("nomad-open-support"); setTimeout(()=>window.nomadSupportOpen(), 600); } }catch(e){}
  }

  /* ---------- SIM page: concierge request ---------- */
  if(page === "sim"){
    document.getElementById("simForm").addEventListener("submit", e=>{ e.preventDefault();
      requireAuth(()=>{
        const pkg = document.getElementById("simPack");
        const ref = "NOMAD-" + Math.floor(1000 + Math.random()*9000);
        document.getElementById("simDone").innerHTML =
          `✔ Request <b>${ref}</b> received! We’ll secure a <b>${pkg.options[pkg.selectedIndex].text}</b> line and deliver it to <b>${document.getElementById("simWhere").value}</b> on <b>${document.getElementById("simDate").value || "your arrival date"}</b>. Concierge fee $15 — pay on delivery. Thank you! 📶`;
        document.getElementById("simDone").classList.remove("hidden");
        say("SIM concierge requested ✔ " + ref);
      });
    });
  }
})();
