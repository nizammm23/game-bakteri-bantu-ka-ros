
const questionBank = {
  topic: {
    title: { en: "Archaea Quest", id: "Archaea Quest" },
    subtitle: { en: "Evolution & Molecular Classification of Microbes", id: "Evolusi dan Klasifikasi Molekuler Mikroba" }
  },
  groups: 6,
  teacherPin: "1234",          // PIN the teacher/moderator types to log in
  groupIcons: ["🦠","🧬","🔬","🌋","🧂","🔥"],
  groupColors: ["#a78bfa", "#60a5fa", "#34d399", "#fbbf24", "#f87171", "#fb923c"],
  timerSeconds: 360,
  shuffleOptions: true,
  difficulties: {
    1: { points: 20, color: "#22c55e", label: { en: "Easy", id: "Mudah" } },
    2: { points: 30, color: "#3b82f6", label: { en: "Easy-Medium", id: "Mudah-Sedang" } },
    3: { points: 40, color: "#eab308", label: { en: "Medium", id: "Sedang" } },
    4: { points: 50, color: "#a855f7", label: { en: "Medium-Hard", id: "Sedang-Sulit" } },
    5: { points: 60, color: "#ef4444", label: { en: "Hard", id: "Sulit" } },
    6: { points: 80, color: "#52525b", label: { en: "Very Hard", id: "Sangat Sulit" } }
  },
  // Stage 1: 4 points | 2: 8 | 3-4: 12 (stable) | 5-7: 20 points + Bomb mode
  stages: [
    { reveal: 4,  label: { en: "PHASE 1 - SMALL MAZE", id: "FASE 1 - LABIRIN KECIL" } },
    { reveal: 8,  label: { en: "PHASE 2 - WIDE MAZE (8 POINTS)", id: "FASE 2 - LABIRIN LUAS (8 TITIK)" } },
    { reveal: 12, label: { en: "PHASE 3 - EXTENDED MAZE (12 POINTS)", id: "FASE 3 - LABIRIN EKSTREM (12 TITIK)" } },
    { reveal: 12, label: { en: "PHASE 3 - STAGE 2", id: "FASE 3 - TAHAP 2" } },
    { reveal: 20, bomb: true, label: { en: "BOMB POINTS 1/3", id: "TITIK BOM 1/3" } },
    { reveal: 20, bomb: true, label: { en: "BOMB POINTS 2/3", id: "TITIK BOM 2/3" } },
    { reveal: 20, bomb: true, label: { en: "BOMB POINTS 3/3", id: "TITIK BOM 3/3" } }],
  // Serpentine maze path: nodes are connected in this order
  nodes: [
    {x:10,y:14,d:1},{x:30,y:14,d:1},{x:50,y:14,d:2},{x:70,y:14,d:2},{x:90,y:14,d:3},
    {x:90,y:38,d:3},{x:70,y:38,d:2},{x:50,y:38,d:4},{x:30,y:38,d:4},{x:10,y:38,d:5},
    {x:10,y:62,d:3},{x:30,y:62,d:5},{x:50,y:62,d:4},{x:70,y:62,d:6},{x:90,y:62,d:5},
    {x:90,y:86,d:6},{x:70,y:86,d:4},{x:50,y:86,d:6},{x:30,y:86,d:5},{x:10,y:86,d:6}
  ],
  questions: [
    // ---- Difficulty 1
    { id:1, d:1, q:{en:"Which of the following organisms belongs to the Archaea group?", id:"Organisme berikut yang termasuk dalam kelompok Archaea adalah..."},
      o:{en:["Escherichia coli","Halobacterium","Saccharomyces cerevisiae","Amoeba"], id:["Escherichia coli","Halobacterium","Saccharomyces cerevisiae","Amoeba"]}, a:1 },
    { id:2, d:1, q:{en:"The three domains of life are...", id:"Tiga domain kehidupan adalah..."},
      o:{en:["Bacteria, Archaea, Eukarya","Bacteria, Fungi, Plantae","Archaea, Protista, Animalia","Virus, Bacteria, Eukarya"], id:["Bacteria, Archaea, Eukarya","Bacteria, Fungi, Plantae","Archaea, Protista, Animalia","Virus, Bacteria, Eukarya"]}, a:0 },
    { id:3, d:1, q:{en:"Which cell-wall component is ABSENT in Archaea?", id:"Komponen dinding sel apa yang TIDAK dimiliki Archaea?"},
      o:{en:["True peptidoglycan (murein)","S-layer protein","Pseudomurein","Glycoprotein"], id:["Peptidoglikan sejati (murein)","Protein S-layer","Pseudomurein","Glikoprotein"]}, a:0 },
    // ---- Difficulty 2
    { id:4, d:2, q:{en:"Archaea that produce methane gas are called...", id:"Archaea yang menghasilkan gas metana disebut..."},
      o:{en:["Halophiles","Methanogens","Thermoacidophiles","Cyanobacteria"], id:["Halofil","Metanogen","Termoasidofil","Sianobakteri"]}, a:1 },
    { id:5, d:2, q:{en:"Archaeal membrane lipids are linked by which bond (unlike Bacteria and Eukarya)?", id:"Lipid membran Archaea terhubung oleh ikatan apa (berbeda dari Bacteria dan Eukarya)?"},
      o:{en:["Ester bonds","Peptide bonds","Ether bonds","Hydrogen bonds"], id:["Ikatan ester","Ikatan peptida","Ikatan eter","Ikatan hidrogen"]}, a:2 },
    { id:6, d:2, q:{en:"Which feature do Archaea and Bacteria share?", id:"Ciri apa yang dimiliki bersama oleh Archaea dan Bacteria?"},
      o:{en:["Membrane-bound nucleus","Prokaryotic cell organization (no nucleus)","Mitochondria","Introns in most genes"], id:["Inti sel berselaput","Organisasi sel prokariotik (tanpa inti sejati)","Mitokondria","Intron pada sebagian besar gen"]}, a:1 },
    // ---- Difficulty 3
    { id:7, d:3, q:{en:"Extreme halophiles thrive in which environment?", id:"Halofil ekstrem hidup di lingkungan..."},
      o:{en:["Very high salt concentration","Very low temperature only","Strongly alkaline desert soil only","Freshwater lakes"], id:["Kadar garam sangat tinggi","Hanya suhu sangat rendah","Hanya tanah gurun sangat basa","Danau air tawar"]}, a:0 },
    { id:8, d:3, q:{en:"Which Archaea components resemble those of Eukarya?", id:"Komponen Archaea mana yang mirip dengan Eukarya?"},
      o:{en:["Peptidoglycan wall","RNA polymerase and histone-like proteins","Ester-linked lipids","70S ribosomes only"], id:["Dinding peptidoglikan","RNA polimerase dan protein mirip histon","Lipid berikatan ester","Hanya ribosom 70S"]}, a:1 },
    { id:9, d:3, q:{en:"Sulfolobus, a hot acidic-spring microbe, is classified in which phylum?", id:"Sulfolobus, mikroba mata air panas asam, termasuk filum..."},
      o:{en:["Euryarchaeota","Proteobacteria","Crenarchaeota","Firmicutes"], id:["Euryarchaeota","Proteobacteria","Crenarchaeota","Firmicutes"]}, a:2 },
    // ---- Difficulty 4
    { id:10, d:4, q:{en:"Why is 16S rRNA widely used for molecular classification?", id:"Mengapa 16S rRNA banyak dipakai untuk klasifikasi molekuler?"},
      o:{en:["It is found only in Archaea","It is universal, functionally conserved, and has variable regions","It changes extremely fast so it cannot be compared","It is a protein enzyme"], id:["Hanya ditemukan pada Archaea","Universal, fungsinya lestari, dan punya daerah variabel","Berubah sangat cepat sehingga tak bisa dibandingkan","Merupakan enzim protein"]}, a:1 },
    { id:11, d:4, q:{en:"Who proposed the three-domain system using 16S rRNA comparisons?", id:"Siapa yang mengusulkan sistem tiga domain berdasarkan perbandingan 16S rRNA?"},
      o:{en:["Louis Pasteur","Robert Koch","Carl Woese","Robert Whittaker"], id:["Louis Pasteur","Robert Koch","Carl Woese","Robert Whittaker"]}, a:2 },
    { id:12, d:4, q:{en:"Archaea start protein synthesis with which amino acid (as Eukarya do)?", id:"Archaea memulai sintesis protein dengan asam amino (seperti Eukarya)..."},
      o:{en:["Formyl-methionine","Methionine","Glycine","Alanine"], id:["Formil-metionin","Metionin","Glisin","Alanin"]}, a:1 },
    // ---- Difficulty 5
    { id:13, d:5, q:{en:"In a phylogenetic tree, two species that are closely related...", id:"Pada pohon filogenetik, dua spesies yang berkerabat dekat..."},
      o:{en:["Share a more recent common ancestor","Always live in the same habitat","Have identical genomes","Branch from the root first"], id:["Memiliki nenek moyang bersama yang lebih baru","Selalu hidup di habitat sama","Memiliki genom identik","Bercabang paling awal dari akar"]}, a:0 },
    { id:14, d:5, q:{en:"Methanogens and extreme halophiles are grouped in which phylum?", id:"Metanogen dan halofil ekstrem dikelompokkan dalam filum..."},
      o:{en:["Crenarchaeota","Euryarchaeota","Actinobacteria","Chlamydiae"], id:["Crenarchaeota","Euryarchaeota","Actinobacteria","Chlamydiae"]}, a:1 },
    { id:15, d:5, q:{en:"Why do scientists often use several genes instead of one to build a tree?", id:"Mengapa ilmuwan sering memakai banyak gen, bukan satu, untuk membangun pohon?"},
      o:{en:["Horizontal gene transfer can make a single-gene tree misleading","One gene is always too long","Genes never mutate","Trees need exactly 5 genes"], id:["Transfer gen horizontal dapat menyesatkan pohon satu gen","Satu gen selalu terlalu panjang","Gen tidak pernah bermutasi","Pohon butuh tepat 5 gen"]}, a:0 },
    // ---- Difficulty 6
    { id:16, d:6, q:{en:"16S rRNA difference: A-B = 2%, A-C = 15%, B-C = 14%. Which pair is most closely related?", id:"Selisih 16S rRNA: A-B = 2%, A-C = 15%, B-C = 14%. Pasangan mana yang paling berkerabat dekat?"},
      o:{en:["A and B","A and C","B and C","All equally related"], id:["A dan B","A dan C","B dan C","Semuanya sama dekat"]}, a:0 },
    { id:17, d:6, q:{en:"Molecular phylogeny suggests Archaea are closer to which lineage than Bacteria are?", id:"Filogeni molekuler menunjukkan Archaea lebih dekat dengan garis keturunan mana dibanding Bacteria?"},
      o:{en:["Viruses","Eukarya","Fungi only","None of them"], id:["Virus","Eukarya","Hanya Fungi","Tidak ada"]}, a:1 },
    { id:18, d:6, q:{en:"Which archaeal lineage is considered closest to the ancestor of Eukarya?", id:"Garis keturunan Archaea mana yang dianggap paling dekat dengan nenek moyang Eukarya?"},
      o:{en:["Halobacteria","Asgard archaea","Thermoplasmata","Methanococci"], id:["Halobakteria","Archaea Asgard","Thermoplasmata","Metanokoki"]}, a:1 }
  ]
};


/* =====================================================================
 * FIREBASE CONFIG (needed so teacher + student devices can sync)
 * Paste your Firebase web-app config here (see README.md, step 1).
 * Leave databaseURL empty to run in demo mode (same-browser tabs only).
 * ===================================================================== */

const firebaseConfig = {
  apiKey: "AIzaSyAwJb-jzpppT76-gytDky3Lc03znLqBp_g",
  authDomain: "archaea-quest.firebaseapp.com",
  databaseURL: "https://archaea-quest-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "archaea-quest",
  storageBucket: "archaea-quest.firebasestorage.app",
  messagingSenderId: "667304237737",
  appId: "1:667304237737:web:dc4583db32c12f91ede7b8"
};