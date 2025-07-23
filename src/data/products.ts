import { Product } from "@/types/product";

// Función para mapear los datos al formato esperado por la interfaz Product
const mapProductData = (data: any): Product => {
  // Limpiar espacios en blanco al final de los valores
  const marca = data.marca.trim();
  const descripcion = data.descripcion.trim();
  const categoria = data.categoria.trim();
  
  return {
    id: data.referencia,
    name: descripcion,
    category: categoria.toLowerCase() === "dama" ? "femeninos" : 
              categoria.toLowerCase() === "caballero" ? "masculinos" : "unisex",
    price: data.precio,
    description: `${marca} - ${descripcion}`,
    inStock: data.inStock,
    marca: marca // Añadimos la marca para facilitar la búsqueda
  };
};

// Datos originales
const productData = [
  {
    "marca": "SWISS ARMY",
    "referencia": "E001",
    "descripcion": "PERFUME SWISS ARMY DM",
    "categoria": "DAMA",
    "image": "https://i5.walmartimages.com/asr/8f9ba72a-dc05-441b-94bc-0533ffb531db.fea459e892e537206fde7b4e373b6711.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "SWISS ARMY",
    "referencia": "E002",
    "descripcion": "PERFUME SWISS ARMY HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BRITNEY SPEARS",
    "referencia": "E003",
    "descripcion": "PERFUME FANTASY DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "SHAKIRA",
    "referencia": "E004",
    "descripcion": "PERFUME SHAKIRA ROCK    ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E005",
    "descripcion": "PERFUME L YARA MOI DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E006",
    "descripcion": "PERFUME CAROLINA HERRERA DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GUESS",
    "referencia": "E007",
    "descripcion": "PERFUME GUESS DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PARIS HILTON ",
    "referencia": "E008",
    "descripcion": "PERFUME CAN CAN DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ARIANA GRANDE",
    "referencia": "E009",
    "descripcion": "PERFUME CLOUD PINK DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "SOFIA ",
    "referencia": "E010",
    "descripcion": "PERFUME SOFIA BY SOFIA DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E011",
    "descripcion": "PERFUME COCONUT PASSION DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PARFUMS DE MARLY",
    "referencia": "E012",
    "descripcion": "PERFUME DELINA DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E013",
    "descripcion": "PERFUME 212 VIP DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CLINIQUE",
    "referencia": "E014",
    "descripcion": "PERFUME HAPPY CLINIQUE DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E015",
    "descripcion": "PERFUME OLYMPEA DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PARIS HILTON ",
    "referencia": "E016",
    "descripcion": "PERFUME CAN CAN BURLESQUE DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PARIS HILTON ",
    "referencia": "E017",
    "descripcion": "PERFUME HEIRES DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "JEAN PAUL GAULTIER",
    "referencia": "E018",
    "descripcion": "PERFUME SCANDAL DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "TOMMY HILFIGER",
    "referencia": "E019",
    "descripcion": "PERFUME TOMMY GIRL DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MOSCHINO",
    "referencia": "E020",
    "descripcion": "PERFUME TOY 2 DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "JEAN PAUL GAULTIER",
    "referencia": "E021",
    "descripcion": "PERFUME LA BELLE FLEUR TERRIBLE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ARMAF",
    "referencia": "E022",
    "descripcion": "PERFUME CLUB DE NUIT DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E023",
    "descripcion": "PERFUME GOOD GIRL DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ARIANA GRANDE",
    "referencia": "E024",
    "descripcion": "PERFUME SWEET LIKE CANDY DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PARIS HILTON ",
    "referencia": "E025",
    "descripcion": "PERFUME PARIS HILTON DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CHRISTIAN DIOR",
    "referencia": "E026",
    "descripcion": "PERFUME MISS DIOR BLOOMING DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E027",
    "descripcion": "PERFUME 212 VIP ROSE EXTRA DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CHANEL",
    "referencia": "E028",
    "descripcion": "PERFUME COCO MADEMOISELLE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CALVIN KLEIN",
    "referencia": "E029",
    "descripcion": "PERFUME EUPHORIA DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CACHAREL",
    "referencia": "E030",
    "descripcion": "PERFUME AMOR AMOR DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GIORGIO ARMANI",
    "referencia": "E031",
    "descripcion": "PERFUME AQUA DI GIO DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "KATY PERRY ",
    "referencia": "E032",
    "descripcion": "PERFUME MEOU DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ESCADA",
    "referencia": "E033",
    "descripcion": "PERFUME TAJ SUNSET DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CHRISTIAN DIOR",
    "referencia": "E034",
    "descripcion": "PERFUME JADORE DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E035",
    "descripcion": "PERFUME L YARA DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E036",
    "descripcion": "PERFUME LADY MILLION DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E037",
    "descripcion": "PERFUME 212 HEROES DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E038",
    "descripcion": "PERFUME LOVE SPELL DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BVLGARI",
    "referencia": "E039",
    "descripcion": "PERFUME OMNIA PARAIBA DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BVLGARI",
    "referencia": "E040",
    "descripcion": "PERFUME OMNIA CORAL DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BVLGARI",
    "referencia": "E041",
    "descripcion": "PERFUME OMNIA CRISTALLINE DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "KENZO",
    "referencia": "E042",
    "descripcion": "PERFUME FLOWER BY KENZO DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LANCOME",
    "referencia": "E043",
    "descripcion": "PERFUME LA VIDA ES BELLA DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BRITNEY SPEARS",
    "referencia": "E044",
    "descripcion": "PERFUME FANTASY NOCHE DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CALVIN KLEIN",
    "referencia": "E045",
    "descripcion": "PERFUME ESCAPE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E046",
    "descripcion": "PERFUME BOMBSHELL DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PERRI HELIS",
    "referencia": "E047",
    "descripcion": "PERFUME 360 DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E048",
    "descripcion": "PERFUME 212 VIP ROSE DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E049",
    "descripcion": "PERFUME 212 VIP WINS DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E050",
    "descripcion": "PERFUME 212 VIP ROSE I LOVE NY DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "KIM KARDASHIAN",
    "referencia": "E051",
    "descripcion": "PERFUME KIM KARDASHIAN BFF DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VERSACE",
    "referencia": "E052",
    "descripcion": "PERFUME EROS VERSACE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BVLGARI",
    "referencia": "E053",
    "descripcion": "PERFUME OMNIA PINK DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MOSCHINO",
    "referencia": "E054",
    "descripcion": "PERFUME TOY 2 BUBBLE GUM DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ANIMALE",
    "referencia": "E055",
    "descripcion": "PERFUME ANIMALE DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "RALPH LAUREN",
    "referencia": "E056",
    "descripcion": "PERFUME RALPH LAUREN DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E057",
    "descripcion": "PERFUME 212 SEXY DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ISSEY MIYAKE",
    "referencia": "E058",
    "descripcion": "PERFUME ISSEY MIYAKE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CALVIN KLEIN",
    "referencia": "E059",
    "descripcion": "PERFUME CK IN 2U DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CALVIN KLEIN",
    "referencia": "E060",
    "descripcion": "PERFUME ETERNITY HM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E061",
    "descripcion": "PERFUME 212 VIP ROSE RED DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BVLGARI",
    "referencia": "E062",
    "descripcion": "PERFUME OMNIA AMATHISTA DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "TIZIANA TERENZI",
    "referencia": "E063",
    "descripcion": "PERFUME TELEA UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "INITIO",
    "referencia": "E064",
    "descripcion": "PERFUME OUD FOR GREATNEES UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E065",
    "descripcion": "PERFUME L BASE AL OUD HONOR & GLORY",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MAISON FRANCIS KURKDJIAN",
    "referencia": "E066",
    "descripcion": "PERFUME BACCARAT ROUGE UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "TOM FORD ",
    "referencia": "E067",
    "descripcion": "PERFUME TOBACCO VANILLE UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E068",
    "descripcion": "PERFUME L OUD FOR GLORY UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PARFUMS DE MARLY",
    "referencia": "E069",
    "descripcion": "PERFUME LAYTON UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "TIZIANA TERENZI",
    "referencia": "E070",
    "descripcion": "PERFUME ANDROMEDA UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BHARARA",
    "referencia": "E071",
    "descripcion": "PERFUME BHARARA VIKING UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MOSCHINO",
    "referencia": "E072",
    "descripcion": "PERFUME TOY 2 PEARL UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "INITIO",
    "referencia": "E073",
    "descripcion": "PERFUME REHAB UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E074",
    "descripcion": "PERFUME L AJWAD UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GUERLAIN",
    "referencia": "E075",
    "descripcion": "PERFUME SANTAL PAO ROSA UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "TOM FORD ",
    "referencia": "E076",
    "descripcion": "PERFUME SOLEI DE FEU UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "TERO",
    "referencia": "E077",
    "descripcion": "PERFUME TERO UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "RAMON MONEGAL ",
    "referencia": "E078",
    "descripcion": "PERFUME FLAMENCO UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ORIENTICA",
    "referencia": "E079",
    "descripcion": "PERFUME O ROYAL AMBER UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ORIENTICA",
    "referencia": "E080",
    "descripcion": "PERFUME O AMBER ROUGE UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "TIZIANA TERENZI",
    "referencia": "E081",
    "descripcion": "PERFUME AL CONTRARIO UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "TIZIANA TERENZI",
    "referencia": "E082",
    "descripcion": "PERFUME ORZA UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "SANTAL 33",
    "referencia": "E083",
    "descripcion": "PERFUME SANTAL 33 UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ORIENTICA",
    "referencia": "E084",
    "descripcion": "PERFUME O AMBER NOIR UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "XERJOFF",
    "referencia": "E085",
    "descripcion": "PERFUME ERBA PURA UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "TOM FORD ",
    "referencia": "E086",
    "descripcion": "PERFUME OMBRE LEARTHER 16 UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E087",
    "descripcion": "PERFUME L PINK TO PINK UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E088",
    "descripcion": "PERFUME ONE MILLION GOLDEN OUD UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "TIZIANA TERENZI",
    "referencia": "E089",
    "descripcion": "PERFUME KIRKE UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "TIZIANA TERENZI",
    "referencia": "E090",
    "descripcion": "PERFUME CASSIOPEA UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E091",
    "descripcion": "PERFUME L AMETHYSTE UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MONTALE",
    "referencia": "E092",
    "descripcion": "PERFUME ARABIANS TONKA UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ALHARAMAIN",
    "referencia": "E093",
    "descripcion": "PERFUME ALHARAMAIN AMBER OUD GOLD UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "HUGO BOSS",
    "referencia": "E094",
    "descripcion": "PERFUME HUGO BOSS VERDE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E095",
    "descripcion": "PERFUME INVICTUS INTENSE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VERSACE",
    "referencia": "E096",
    "descripcion": "PERFUME EROS VERSACE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "JEAN PAUL GAULTIER",
    "referencia": "E097",
    "descripcion": "PERFUME JEAN PAUL CLASSICA HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "YANBAL",
    "referencia": "E098",
    "descripcion": "PERFUME OHM SOUL HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E099",
    "descripcion": "PERFUME PHANTOM HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DOLCE  & GABBANA",
    "referencia": "E100",
    "descripcion": "PERFUME D&G POUR HOMME HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ALHARAMAIN",
    "referencia": "E101",
    "descripcion": "PERFUME ALHARAMAIN AVENTURE BLANCHE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CHRISTIAN DIOR",
    "referencia": "E102",
    "descripcion": "PERFUME SAUVAGE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BHARARA",
    "referencia": "E103",
    "descripcion": "PERFUME BHARARA KING HM",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "TOMMY HILFIGER",
    "referencia": "E104",
    "descripcion": "PERFUME TOMMY HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E105",
    "descripcion": "PERFUME ONE MILLION HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GIORGIO ARMANI",
    "referencia": "E106",
    "descripcion": "PERFUME ACQUA DI GIO PARFUM HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GIORGIO ARMANI",
    "referencia": "E107",
    "descripcion": "PERFUME ACQUA DI GIO HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LACOSTE",
    "referencia": "E108",
    "descripcion": "PERFUME L12 BLANCA HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ARMAF",
    "referencia": "E109",
    "descripcion": "PERFUME CLUB DE NUIT INTENSE HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E110",
    "descripcion": "PERFUME 212 HEROES HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MOSCHINO",
    "referencia": "E111",
    "descripcion": "PERFUME TOY BOY HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E112",
    "descripcion": "PERFUME ONE MILLION LUCKY HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E113",
    "descripcion": "PERFUME INVICTUS CLASICA HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ISSEY MIYAKE",
    "referencia": "E114",
    "descripcion": "PERFUME ISSEY MIYAKE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E115",
    "descripcion": "PERFUME 212 VIP HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "JEAN PAUL GAULTIER",
    "referencia": "E116",
    "descripcion": "PERFUME SCANDAL HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E117",
    "descripcion": "PERFUME ONE MILLION ELIXIR HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E118",
    "descripcion": "PERFUME 212 SEXY HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E119",
    "descripcion": "PERFUME BAD BOY HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "HUGO BOSS",
    "referencia": "E120",
    "descripcion": "PERFUME HUGO BOSS GRIS HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MANCERA",
    "referencia": "E121",
    "descripcion": "PERFUME CEDRAT BOISE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ANTONIO BANDERAS",
    "referencia": "E122",
    "descripcion": "PERFUME BLUE SEDUCTION HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CREED",
    "referencia": "E123",
    "descripcion": "PERFUME CREED AVENTUS HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E124",
    "descripcion": "PERFUME 212 VIP BLACK HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PARIS HILTON ",
    "referencia": "E125",
    "descripcion": "PERFUME PARIS HILTON HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MONT BLANC ",
    "referencia": "E126",
    "descripcion": "PERFUME MONT BLANC LEGEND HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "POLO RALPH LAUREN",
    "referencia": "E127",
    "descripcion": "PERFUME POLO BLUE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PARFUMS DE MARLY",
    "referencia": "E128",
    "descripcion": "PERFUME ALTHAIR HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DOLCE  & GABBANA",
    "referencia": "E129",
    "descripcion": "PERFUME LIGHT BLUE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "JEAN PAUL GAULTIER",
    "referencia": "E130",
    "descripcion": "PERFUME JEAN PAUL ULTRA MALE HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VERSACE",
    "referencia": "E131",
    "descripcion": "PERFUME V BLUE JEANS HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CREED",
    "referencia": "E132",
    "descripcion": "PERFUME CREED SILVER HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E133",
    "descripcion": "PERFUME INVICTUS AQUA HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DIESEL",
    "referencia": "E134",
    "descripcion": "PERFUME DIESEL PLUS BLANCA HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "NAUTICA ",
    "referencia": "E135",
    "descripcion": "PERFUME NAUTICA VOYAGE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BVLGARI",
    "referencia": "E136",
    "descripcion": "PERFUME BVLGARY MAN IN BLACK HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "YVES SAINT LAURENT",
    "referencia": "E137",
    "descripcion": "PERFUME YVES  SAINT L HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DOLCE  & GABBANA",
    "referencia": "E138",
    "descripcion": "PERFUME K BY D&G HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GIORGIO ARMANI",
    "referencia": "E139",
    "descripcion": "PERFUME ACQUA DI GIO PROFUMO HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ALHARAMAIN",
    "referencia": "E140",
    "descripcion": "PERFUME ALHARAMAIN L AVETURE KNIGHT HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E141",
    "descripcion": "PERFUME ONE MILLION PRIVE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E142",
    "descripcion": "PERFUME CAROLINA HERRERA HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E143",
    "descripcion": "PERFUME CAROLINA HERRERA PRIVE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PERRI HELIS",
    "referencia": "E144",
    "descripcion": "PERFUME 360 HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GIORGIO ARMANI",
    "referencia": "E145",
    "descripcion": "PERFUME ARMANI BECAUSE ITS YOU DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BURBERRY",
    "referencia": "E146",
    "descripcion": "PERFUME BURBERRY DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CACHAREL",
    "referencia": "E147",
    "descripcion": "PERFUME CACHAREL YES 1AM DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E148",
    "descripcion": "PERFUME 212 VIP FEVER DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E149",
    "descripcion": "PERFUME GOOD GIRL LEGERE DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E150",
    "descripcion": "PERFUME VERY GOOD GIRL GLAM DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CHANEL",
    "referencia": "E151",
    "descripcion": "PERFUME CHANCE CHANNEL DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CHANEL",
    "referencia": "E152",
    "descripcion": "PERFUME CHANNEL N 5 DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DOLCE  & GABBANA",
    "referencia": "E153",
    "descripcion": "PERFUME IMPERATRICE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DOLCE  & GABBANA",
    "referencia": "E154",
    "descripcion": "PERFUME LIGHT BLUE DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DOLCE  & GABBANA",
    "referencia": "E155",
    "descripcion": "PERFUME Q BY DYG DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DKNY",
    "referencia": "E156",
    "descripcion": "PERFUME DELICIOUS DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ELIZABETH ARDEN",
    "referencia": "E157",
    "descripcion": "PERFUME 5TA AVENIDA DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ESCADA",
    "referencia": "E158",
    "descripcion": "PERFUME CHERRY ESCADA DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ESCADA",
    "referencia": "E159",
    "descripcion": "PERFUME MIAMI BLOSOOM DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ESCADA",
    "referencia": "E160",
    "descripcion": "PERFUME ROCKIN RIO DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ESCADA",
    "referencia": "E161",
    "descripcion": "PERFUME SORBETO ROSO DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GIVENCHY",
    "referencia": "E162",
    "descripcion": "PERFUME ANGEL Y DEMONIO DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "HALLOWEEN",
    "referencia": "E163",
    "descripcion": "PERFUME HALLOWEN DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "JEAN PAUL GAULTIER",
    "referencia": "E164",
    "descripcion": "PERFUME JEAN PAUL DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LACOSTE",
    "referencia": "E165",
    "descripcion": "PERFUME L12 MAGNETIC DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LACOSTE",
    "referencia": "E166",
    "descripcion": "PERFUME L12 NATURAL DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LACOSTE",
    "referencia": "E167",
    "descripcion": "PERFUME L12 SPARKLING DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LACOSTE",
    "referencia": "E168",
    "descripcion": "PERFUME L12 TOUCH PINK DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LANCOME",
    "referencia": "E169",
    "descripcion": "PERFUME LANCOME LA NUIT TRESOR DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MOSCHINO",
    "referencia": "E170",
    "descripcion": "PERFUME FUNNY MOCHINO DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "NARCISO RODRIGUEZ ",
    "referencia": "E171",
    "descripcion": "PERFUME NARCISO RODRIGUEZ MUSC NOIR DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E172",
    "descripcion": "PERFUME BLACK XS DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E173",
    "descripcion": "PERFUME FAME DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E174",
    "descripcion": "PERFUME LADY MILLION LUCKY DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PARIS HILTON ",
    "referencia": "E175",
    "descripcion": "PERFUME  GOLD RUSH DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PARIS HILTON ",
    "referencia": "E176",
    "descripcion": "PERFUME DAZZLE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PARIS HILTON ",
    "referencia": "E177",
    "descripcion": "PERFUME PASSPORT DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PERRI HELIS",
    "referencia": "E178",
    "descripcion": "PERFUME 360 CORAL DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "NINA RICCI",
    "referencia": "E179",
    "descripcion": "PERFUME NINA RICHI DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "SELENA GOMEZ",
    "referencia": "E180",
    "descripcion": "PERFUME SELENA GOMEZ DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "THIERRY MUGLER",
    "referencia": "E181",
    "descripcion": "PERFUME THIERRY MUGLER ANGEL DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VERSACE",
    "referencia": "E182",
    "descripcion": "PERFUME VERSACE CRISTAL DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VERSACE",
    "referencia": "E183",
    "descripcion": "PERFUME DYLAN BLUE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VERSACE",
    "referencia": "E184",
    "descripcion": "PERFUME DYLAN PURPLE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VERSACE",
    "referencia": "E185",
    "descripcion": "PERFUME YELLOW DIAMON DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VIKTOR & ROLF",
    "referencia": "E186",
    "descripcion": "PERFUME BONBON DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E187",
    "descripcion": "PERFUME AMBER ROMANCE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E188",
    "descripcion": "PERFUME AQUA KISS DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E189",
    "descripcion": "PERFUME COOL AND BRIGTH DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E190",
    "descripcion": "PERFUME EAU SO SEXY DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E191",
    "descripcion": "PERFUME ENDLESS LOVE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E192",
    "descripcion": "PERFUME FRESH AND CLEAN DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E193",
    "descripcion": "PERFUME GLAM ANGEL DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E194",
    "descripcion": "PERFUME GOLD ANGEL DM",
    "categoria": "#N/D",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E195",
    "descripcion": "PERFUME HOT CRUSH DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E196",
    "descripcion": "PERFUME JUICED BERRY DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E197",
    "descripcion": "PERFUME LOST IN FANTASY DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E198",
    "descripcion": "PERFUME LOVE ADICT DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E199",
    "descripcion": "PERFUME MANDARINA DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E200",
    "descripcion": "PERFUME MANGO TENTACION DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E201",
    "descripcion": "PERFUME MARACUYA DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E202",
    "descripcion": "PERFUME NIGHT ANGEL DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E203",
    "descripcion": "PERFUME PASSION STRUCK DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E204",
    "descripcion": "PERFUME PERA DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E205",
    "descripcion": "PERFUME PLUM DROP PRUNA DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E206",
    "descripcion": "PERFUME PRETTY AND PURE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E207",
    "descripcion": "PERFUME PRISA DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E208",
    "descripcion": "PERFUME PURE DAY DREAM DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E209",
    "descripcion": "PERFUME PURPLE IRIS DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E210",
    "descripcion": "PERFUME SANDIA DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E211",
    "descripcion": "PERFUME SECRET CHARM DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E212",
    "descripcion": "PERFUME SEXY ANGEL DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E213",
    "descripcion": "PERFUME SHEER LOVE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E214",
    "descripcion": "PERFUME STRAWBERRY CHAMPAGNE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E215",
    "descripcion": "PERFUME SWEET FLIRTY DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E216",
    "descripcion": "PERFUME TOTAL FLIRT DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E217",
    "descripcion": "PERFUME VAINILLA LACE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E218",
    "descripcion": "PERFUME VELVET PETALS DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E219",
    "descripcion": "PERFUME WILD AND BREZY DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E220",
    "descripcion": "PERFUME WICKIE WICKIE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ANIMALE",
    "referencia": "E221",
    "descripcion": "PERFUME ANIMALE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ANTONIO BANDERAS",
    "referencia": "E222",
    "descripcion": "PERFUME KING OF SEDUCTION ANTONIO B HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GIORGIO ARMANI",
    "referencia": "E223",
    "descripcion": "PERFUME ARMANI CODE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GIORGIO ARMANI",
    "referencia": "E224",
    "descripcion": "PERFUME OUD STRONGE WITH YOU HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "AZZARO ",
    "referencia": "E225",
    "descripcion": "PERFUME AZZARO POUR HOMME HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BVLGARI",
    "referencia": "E226",
    "descripcion": "PERFUME BVLGARI POUR HOMME HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BVLGARI",
    "referencia": "E227",
    "descripcion": "PERFUME BVLGARI POUR HOMME SOIR HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BVLGARI",
    "referencia": "E228",
    "descripcion": "PERFUME BVLGARI WOOD HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CALVIN KLEIN",
    "referencia": "E229",
    "descripcion": "PERFUME CK ESCAPE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CALVIN KLEIN",
    "referencia": "E230",
    "descripcion": "PERFUME CK ETERNITY HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CALVIN KLEIN",
    "referencia": "E231",
    "descripcion": "PERFUME CK ONE UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E232",
    "descripcion": "PERFUME 212 NYC AQUA HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E233",
    "descripcion": "PERFUME 212 NYC HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E234",
    "descripcion": "PERFUME 212 VIP FEVER HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E235",
    "descripcion": "PERFUME 212 VIP WINS HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CHANEL",
    "referencia": "E236",
    "descripcion": "PERFUME CHANNEL ALLURE SPORT HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CHANEL",
    "referencia": "E237",
    "descripcion": "PERFUME BLUE DE CHANNEL HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CHRISTIAN DIOR",
    "referencia": "E238",
    "descripcion": "PERFUME CRISTIAN DIOR FAHRENHEIT HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CHRISTIAN DIOR",
    "referencia": "E239",
    "descripcion": "PERFUME SAUVAGE ELIXIR HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CLINIQUE",
    "referencia": "E240",
    "descripcion": "PERFUME HAPPY CLINIQUE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CRISTIANO",
    "referencia": "E241",
    "descripcion": "PERFUME CRISTIANO HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DIESEL",
    "referencia": "E242",
    "descripcion": "PERFUME DIESEL BAD HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DIESEL",
    "referencia": "E243",
    "descripcion": "PERFUME DIESEL ONLY THE BRAVE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DOLCE  & GABBANA",
    "referencia": "E244",
    "descripcion": "PERFUME INTENSO HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DOLCE  & GABBANA",
    "referencia": "E245",
    "descripcion": "PERFUME THE ONE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DOLCE  & GABBANA",
    "referencia": "E246",
    "descripcion": "PERFUME THE ONE LUMINOUS NIGHT HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "FERRARI",
    "referencia": "E247",
    "descripcion": "PERFUME ESCUDERIA FERRARI HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GIVENCHY",
    "referencia": "E248",
    "descripcion": "PERFUME GIVENCHY PI HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GIVENCHY",
    "referencia": "E249",
    "descripcion": "PERFUME GIVENCHY GENTLEMAN RESERVE P. HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GUCCI ",
    "referencia": "E250",
    "descripcion": "PERFUME GUCCI POUR HOMME II HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "HUGO BOSS",
    "referencia": "E251",
    "descripcion": "PERFUME HUGO BOSS BOTTLE NIGTH HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "HUGO BOSS",
    "referencia": "E252",
    "descripcion": "PERFUME HUGO BOSS BOTTLE UNITED  HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GIORGIO ARMANI",
    "referencia": "E253",
    "descripcion": "PERFUME HUGO BOSS ENERGISE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "HUGO BOSS",
    "referencia": "E254",
    "descripcion": "PERFUME HUGO BOSS ICED HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "HUGO BOSS",
    "referencia": "E255",
    "descripcion": "PERFUME HUGO BOSS IN MOTION HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "HUGO BOSS",
    "referencia": "E256",
    "descripcion": "PERFUME HUGO BOSS JUST DIFERENT HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "HUGO BOSS",
    "referencia": "E257",
    "descripcion": "PERFUME HUGO BOSS ORANGE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "HUGO BOSS",
    "referencia": "E258",
    "descripcion": "PERFUME HUGO BOSS RED HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "HUGO BOSS",
    "referencia": "E259",
    "descripcion": "PERFUME HUGO BOSS THE SCENT HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "HUGO BOSS",
    "referencia": "E260",
    "descripcion": "PERFUME HUGO BOSS UNLIMITED HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E261",
    "descripcion": "PERFUME ZLATAN HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ISSEY MIYAKE",
    "referencia": "E262",
    "descripcion": "PERFUME ISSEY MIYAKE NUIT HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "JOOP",
    "referencia": "E263",
    "descripcion": "PERFUME JOOP HOMME HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LACOSTE",
    "referencia": "E264",
    "descripcion": "PERFUME L12 ENERGISE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LACOSTE",
    "referencia": "E265",
    "descripcion": "PERFUME L12 ESSENCIAL HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LACOSTE",
    "referencia": "E266",
    "descripcion": "PERFUME L12 BLEU HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LACOSTE",
    "referencia": "E267",
    "descripcion": "PERFUME L12 JAUNE AMARILLA HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LACOSTE",
    "referencia": "E268",
    "descripcion": "PERFUME L12 ROUGE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LACOSTE",
    "referencia": "E269",
    "descripcion": "PERFUME L12 MAGNETIC HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LACOSTE",
    "referencia": "E270",
    "descripcion": "PERFUME L12 NOIR NEGRA HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LACOSTE",
    "referencia": "E271",
    "descripcion": "PERFUME L12 RED HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LOEWE",
    "referencia": "E272",
    "descripcion": "PERFUME SOLO LOEWE HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MALUMA",
    "referencia": "E273",
    "descripcion": "PERFUME MALUMA GARNET HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MALUMA",
    "referencia": "E274",
    "descripcion": "PERFUME MALUMA ONYX HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MONT BLANC ",
    "referencia": "E275",
    "descripcion": "PERFUME MONT BLANC EMBLEM HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MONT BLANC ",
    "referencia": "E276",
    "descripcion": "PERFUME MONT BLANC LEGEND SPIRIT HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MONT BLANC ",
    "referencia": "E277",
    "descripcion": "PERFUME MONT BLANC EXPLORER HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MONT BLANC ",
    "referencia": "E278",
    "descripcion": "PERFUME MONT BLANC STARWALKER HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E279",
    "descripcion": "PERFUME BLACK XS APHRODISIAQUE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E280",
    "descripcion": "PERFUME BLACK XS BE A LEGEND HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E281",
    "descripcion": "PERFUME BLACK XS LEXCES HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E282",
    "descripcion": "PERFUME BLACK XS PURE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E283",
    "descripcion": "PERFUME BLACK XS TRADICI HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E284",
    "descripcion": "PERFUME INVICTUS VICTORY HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E285",
    "descripcion": "PERFUME INVICTUS VICTORY ELIXIR HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E286",
    "descripcion": "PERFUME ONE MILLION ROYAL HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E287",
    "descripcion": "PERFUME PHANTOM LEGION HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PARIS HILTON ",
    "referencia": "E288",
    "descripcion": "PERFUME GOLD RUSH HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PERRI HELIS",
    "referencia": "E289",
    "descripcion": "PERFUME 360 RED HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PHILIPP PLEIN ",
    "referencia": "E290",
    "descripcion": "PERFUME PHILIPP PLEIN NO LIMITS HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PRADA",
    "referencia": "E291",
    "descripcion": "PERFUME  LUNA ROSSA OCEAN HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PRADA",
    "referencia": "E292",
    "descripcion": "PERFUME  LUNA ROSSA CARBON HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "POLO RALPH LAUREN",
    "referencia": "E293",
    "descripcion": "PERFUME POLO RED HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LAPIDUS",
    "referencia": "E294",
    "descripcion": "PERFUME LAPIDUSS HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "THIERRY MUGLER",
    "referencia": "E295",
    "descripcion": "PERFUME THIERRY MUGLER ANGEL HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VALENTINO",
    "referencia": "E296",
    "descripcion": "PERFUME VALENTINO VOMO HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VERSACE",
    "referencia": "E297",
    "descripcion": "PERFUME DYLAN BLUE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VERSACE",
    "referencia": "E298",
    "descripcion": "PERFUME FREICHE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VIKTOR & ROLF",
    "referencia": "E299",
    "descripcion": "PERFUME VICTOR ROLF SPICEBOMB HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "AFNAN",
    "referencia": "E300",
    "descripcion": "PERFUME 9 PM HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "AHLI ",
    "referencia": "E301",
    "descripcion": "PERFUME AHLI AURIGA UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "AHLI ",
    "referencia": "E302",
    "descripcion": "PERFUME AHLI OCTANS UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "AHLI ",
    "referencia": "E303",
    "descripcion": "PERFUME AHLI VEGA UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ALEXANDRE",
    "referencia": "E304",
    "descripcion": "PERFUME ALEXANDRE J BLACK MUSCS UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ALEXANDRE",
    "referencia": "E305",
    "descripcion": "PERFUME ALEXANDRE J ROSE ALBA DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "AMOUAGE",
    "referencia": "E306",
    "descripcion": "PERFUME AMOUAGE SUNSHINE DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BHARARA",
    "referencia": "E307",
    "descripcion": "PERFUME BHARARA NICHE FEMME DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BOND NO. 9 ",
    "referencia": "E308",
    "descripcion": "PERFUME BOND N 9 LAFAYETTE STREET UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CREED",
    "referencia": "E309",
    "descripcion": "PERFUME CREED VIKING COLOGNE HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DUBAI",
    "referencia": "E310",
    "descripcion": "PERFUME EMIRATO 2 DUBAI UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ALHARAMAIN",
    "referencia": "E311",
    "descripcion": "PERFUME ALHARAMAIN L AVENTURE ROSE UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ALHARAMAIN",
    "referencia": "E312",
    "descripcion": "PERFUME ALHARAMAIN MANEGE BLANCHE UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ALHARAMAIN",
    "referencia": "E313",
    "descripcion": "PERFUME ALHARAMAIN MANEGE ROUGE UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ILMIN IL",
    "referencia": "E314",
    "descripcion": "PERFUME ILMIN IL DOLCE UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ILMIN IL",
    "referencia": "E315",
    "descripcion": "PERFUME ILMIN IL EGO UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ILMIN IL",
    "referencia": "E316",
    "descripcion": "PERFUME ILMIN IL FEMME UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ILMIN IL",
    "referencia": "E317",
    "descripcion": "PERFUME ILMIN IL KAKUNO UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ILMIN IL",
    "referencia": "E318",
    "descripcion": "PERFUME ILMIN IL SEXUEL UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E319",
    "descripcion": "PERFUME L ASAD HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E320",
    "descripcion": "PERFUME L KHAMRAH UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E321",
    "descripcion": "PERFUME L PRIDE SHAHEEN GOLD HM ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LOUIS VUITTON",
    "referencia": "E322",
    "descripcion": "PERFUME IMMENSITE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LOUIS VUITTON",
    "referencia": "E323",
    "descripcion": "PERFUME OMBRE NOMADE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MANCERA",
    "referencia": "E324",
    "descripcion": "PERFUME MANCERA BLACK GOLD HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MANCERA",
    "referencia": "E325",
    "descripcion": "PERFUME MANCERA INSTANT CRUSH UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MONTALE ",
    "referencia": "E326",
    "descripcion": "PERFUME MONTALE CHOCOLATE GREEDY UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MONTALE ",
    "referencia": "E327",
    "descripcion": "PERFUME MONTALE DAY DREAMS DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MONTALE ",
    "referencia": "E328",
    "descripcion": "PERFUME MONTALE STARRY NIGTH UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ORIENTICA",
    "referencia": "E329",
    "descripcion": "PERFUME ORIENTICA ROYAL BLEU UNX ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ORIENTICA",
    "referencia": "E330",
    "descripcion": "PERFUME ORIENTICA VELVET GOLD UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PARFUMS DE MARLY",
    "referencia": "E331",
    "descripcion": "PERFUME MARLY HEROD HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PARFUMS DE MARLY",
    "referencia": "E332",
    "descripcion": "PERFUME MARLY PEGASUS HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "XERJOFF",
    "referencia": "E333",
    "descripcion": "PERFUME ALEXANDRIA II XERJOFF UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "XERJOFF",
    "referencia": "E334",
    "descripcion": "PERFUME BOUQUET IDEALE XERJOFF DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "XERJOFF",
    "referencia": "E335",
    "descripcion": "PERFUME NAXOS XERJOFF UNX ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E336",
    "descripcion": "PERFUME CH WOMAN DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E337",
    "descripcion": "PERFUME BLACK XS PURE DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DOLCE  & GABBANA",
    "referencia": "E338",
    "descripcion": "PERFUME LIGHT BLUE POUR HOMME S VIBER HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E339",
    "descripcion": "PERFUME FAMME BLOOMING PINK DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GIVENCHY",
    "referencia": "E340",
    "descripcion": "PERFUME GIVENCHY IRRESISTIBLE DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E341",
    "descripcion": "PERFUME OLYMPEA FLORA DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MONT BLANC ",
    "referencia": "E342",
    "descripcion": "PERFUME MONT BLANC LADY EMBLEM DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GIORGIO ARMANI",
    "referencia": "E343",
    "descripcion": "PERFUME SI EAU DE PARFUM INTENSE DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GIVENCHY",
    "referencia": "E344",
    "descripcion": "PERFUME GIVENCHY PLAY HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BURBERRY",
    "referencia": "E345",
    "descripcion": "PERFUME BURBERRY HEROEAUDE PARFUM HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ILMIN IL",
    "referencia": "E346",
    "descripcion": "PERFUME ILMIN IL EROTIQUE UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ILMIN IL",
    "referencia": "E347",
    "descripcion": "PERFUME ILMIN IL ORGASME UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MALUMA",
    "referencia": "E348",
    "descripcion": "PERFUME MALUMA JADE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E349",
    "descripcion": "PERFUME PINEAPPLE COVE NEON PAPAYA DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "YVES SAINT LAURENT",
    "referencia": "E350",
    "descripcion": "PERFUME YVES SAINT LORANT M7 HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GUCCI ",
    "referencia": "E351",
    "descripcion": "PERFUME GUCCI POUR HOMME HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E352",
    "descripcion": "PERFUME CH MEN ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ARIANA GRANDE",
    "referencia": "E353",
    "descripcion": "PERFUME ARI BY ARIANA GRANDE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ARIANA GRANDE",
    "referencia": "E354",
    "descripcion": "PERFUME CLOUD ARIANA GRANDE DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "HUGO BOSS",
    "referencia": "E355",
    "descripcion": "PERFUME HUGO BOSS XX DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "JUSTIN BIEBER'S ",
    "referencia": "E356",
    "descripcion": "PERFUME JUSTIN BIEBER NEXT GIRLFRIEND DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E357",
    "descripcion": "PERFUME INVICTUS LEGEND HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E358",
    "descripcion": "PERFUME LATTAFA HAYA DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E359",
    "descripcion": "PERFUME LATTAFA MAYAR DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "AHLI ",
    "referencia": "E360",
    "descripcion": "PERFUME AHLI KARPOS UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VERSACE",
    "referencia": "E361",
    "descripcion": "PERFUME VERSACE EROS FLAME HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E362",
    "descripcion": "PERFUME BAD BOY DAZZLING GARDEN HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "JEAN PAUL GAULTIER",
    "referencia": "E363",
    "descripcion": "PERFUME JEAN PAUL GAULTIER DIVINE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GIORGIO ARMANI",
    "referencia": "E364",
    "descripcion": "PERFUME STRONGER WITH YOU HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E365",
    "descripcion": "PERFUME BADEE AL OUD NOBLE BLUSH",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CALVIN KLEIN",
    "referencia": "E366",
    "descripcion": "PERFUME CK IN 2U HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "JO MILANO ",
    "referencia": "E367",
    "descripcion": "PERFUME JOMILANO GAME OF SPADES BID UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E368",
    "descripcion": "PERFUME YARA TOUS DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ARMAF",
    "referencia": "E369",
    "descripcion": "PERFUME ODISSEY MANDARIN SKY MEN",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E370",
    "descripcion": "PERFUME INVICTUS PLATINUM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VICTORIAS SECRET",
    "referencia": "E371",
    "descripcion": "PERFUME V.S ENCHANTED NIGTH DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GIORGIO ARMANI",
    "referencia": "E372",
    "descripcion": "PERFUME ACQUA DIO GIO PROFONDO HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BVLGARI",
    "referencia": "E373",
    "descripcion": "PERFUME BVLGARI AQUA DE BVLGARY MEN",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E374",
    "descripcion": "PERFUME 212 VIP BLACK EXTRA MEN",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E375",
    "descripcion": "PERFUME 212 VIP CLUB MEN",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ALHARAMAIN",
    "referencia": "E376",
    "descripcion": "PERFUME ALHARAMAIN AMBER ROUGE UNISEX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "AFNAN",
    "referencia": "E377",
    "descripcion": "PERFUME 9 PM DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DOLCE  & GABBANA",
    "referencia": "E378",
    "descripcion": "PERFUME DOLCE GABBANA DEVOTION DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "COUTURE",
    "referencia": "E379",
    "descripcion": "PERFUME JUICY COUTURE VIVA LA JUICY DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E380",
    "descripcion": "PERFUME LATTAFA YARA CANDY DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GUESS",
    "referencia": "E381",
    "descripcion": "PERFUME GUESS GOLD DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "AFNAN",
    "referencia": "E382",
    "descripcion": "PERFUME 9 AM DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BVLGARI",
    "referencia": "E383",
    "descripcion": "PERFUME BVLGARY MAN HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VERSACE",
    "referencia": "E384",
    "descripcion": "PERFUME VERSACE POUR HOMME HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "JEAN PAUL GAULTIER",
    "referencia": "E385",
    "descripcion": "PERFUME JEAN PAUL LE BEAU HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "JEAN PAUL GAULTIER",
    "referencia": "E386",
    "descripcion": "PERFUME JEAN PAUL GAULTIER ULT. MAL E HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E387",
    "descripcion": "PERFUME ONE MILLION GOLD HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VALENTINO",
    "referencia": "E388",
    "descripcion": "PERFUME VALENTINO BORN IN ROMA HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PACO RABANNE ",
    "referencia": "E389",
    "descripcion": "PERFUME PHANTOM INTENSE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ALHARAMAIN",
    "referencia": "E390",
    "descripcion": "PERFUME AMBER OUD UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LORENZO PAZZAGLIA",
    "referencia": "E391",
    "descripcion": "PERFUME LORENZO PAZZAGLIA SUMMER HAMMER",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E392",
    "descripcion": "PERFUME L OUD SUBLIME UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E393",
    "descripcion": "PERFUME QAED AL FURSAN UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DIESEL",
    "referencia": "E394",
    "descripcion": "PERFUME LOQUITO POR TI DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "AFNAN",
    "referencia": "E395",
    "descripcion": "PERFUME 9 AM UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BOND NO. 9 ",
    "referencia": "E396",
    "descripcion": "PERFUME BOND 9 BLEECKER ST UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "NISHANE ",
    "referencia": "E397",
    "descripcion": "PERFUME  NISHANE HACIVAT",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E398",
    "descripcion": "PERFUME  CH 212",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "HUGO BOSS",
    "referencia": "E399",
    "descripcion": "PERFUME HUGO BOSS BOTTLED",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "HUGO BOSS",
    "referencia": "E400",
    "descripcion": "PERFUME HUGO BOSS ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "YANBAL",
    "referencia": "E401",
    "descripcion": "PERFUME OHM CLASICA ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "THIERRY MUGLER",
    "referencia": "E402",
    "descripcion": "PERFUME A MEN THIERRY MUGLER",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "PRADA",
    "referencia": "E403",
    "descripcion": "PERFUME PRADA PARADOX",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "SOL DE JANEIRO",
    "referencia": "E404",
    "descripcion": "PERFUME BRAZILIAN CRUSH CHEIROSA 62",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "SOL DE JANEIRO",
    "referencia": "E405",
    "descripcion": "PERFUME BRAZILIAN CRUSH CHEIROSA 71",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "SOL DE JANEIRO",
    "referencia": "E406",
    "descripcion": "PERFUME CHEIROSA 40",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "SOL DE JANEIRO",
    "referencia": "E407",
    "descripcion": "PERFUME BRAZILIAN CRUSH CHEIROSA 68",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "SOL DE JANEIRO",
    "referencia": "E408",
    "descripcion": "PERFUME BRAZILIAN CRUSH CHEIROSA 59",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BURBERRY",
    "referencia": "E409",
    "descripcion": "PERFUME BURBERRY HER",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LACOSTE",
    "referencia": "E410",
    "descripcion": "PERFUME L12 ELEGANT",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E411",
    "descripcion": "PERFUME VERY GOOD GIRL",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "YVES",
    "referencia": "E412",
    "descripcion": "PERFUME YVES Y EAU PARFUM DE INTENSE",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VIKTOR & ROLF",
    "referencia": "E413",
    "descripcion": "PERFUME SPICEBOMB DARK LEATHER",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "FERRARI",
    "referencia": "E414",
    "descripcion": "PERFUME FERRARI RED POWER",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VALENTINO",
    "referencia": "E415",
    "descripcion": "PERFUME VALENTINO BORN IN ROMA INTENSE",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BVLGARY",
    "referencia": "E416",
    "descripcion": "PERFUME BVLGARY TYGAR",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VERSACE",
    "referencia": "E417",
    "descripcion": "PERFUME EROS ENERGY",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LOUIS VUITTON",
    "referencia": "E418",
    "descripcion": "PERFUME LOUIS VUITTON METEORE",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LOUIS VUITTON",
    "referencia": "E419",
    "descripcion": "PERFUME LOUIS VUITTON IMAGINATION",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E420",
    "descripcion": "PERFUME CH 212 FOR MEN",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LACOSTE",
    "referencia": "E421",
    "descripcion": "PERFUME L12  STYLE IN PLAY",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "INITIO",
    "referencia": "E422",
    "descripcion": "PERFUME NARCOTIC DELIGHT",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MAISON",
    "referencia": "E423",
    "descripcion": "PERFUME MAISON GENTLE FLUIDITY GOLD",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "FRANCIS KURKDJIAN",
    "referencia": "E424",
    "descripcion": "PERFUME CLUB DE NUIT SILLAGE",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LOUIS VUITTON",
    "referencia": "E425",
    "descripcion": "PERFUME LES SABLES ROSES",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "SOL DE JANEIRO",
    "referencia": "E426",
    "descripcion": "PERFUME CHEIROSA 76",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MONTALE ",
    "referencia": "E427",
    "descripcion": "PERFUME INTENSE CAFÉ",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E428",
    "descripcion": "PERFUME FAKHAR BLACK HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "JEAN PAUL GAULTIER",
    "referencia": "E429",
    "descripcion": "PERFUME LE BEAU LE PARFUM HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "JESUS DEL POZO",
    "referencia": "E430",
    "descripcion": "PERFUME HALLOWEN HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E431",
    "descripcion": "PERFUME ASAD BOURBON HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "JEAN PAUL GAULTIER",
    "referencia": "E432",
    "descripcion": "PERFUME  LE BEAU PARADISE GARDEN HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DIESEL",
    "referencia": "E433",
    "descripcion": "PERFUME FUEL FOR LIFE HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ENRIQUE IGLESIAS ",
    "referencia": "E434",
    "descripcion": "PERFUME ADRENALINA HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "JEAN PAUL GAULTIER HM",
    "referencia": "E435",
    "descripcion": "PERFUME LE MALE ELIXIR HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ARMAF",
    "referencia": "E436",
    "descripcion": "PERFUME ODYSSEY SPECTRA HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ARMAF",
    "referencia": "E437",
    "descripcion": "PERFUME ODYSSEY HOME WHITE EDITION HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E438",
    "descripcion": "PERFUME 212 VIP BLACK RED HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VIDAL",
    "referencia": "E439",
    "descripcion": "PERFUME PINO SILVESTRE HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "DUMONT ",
    "referencia": "E440",
    "descripcion": "PERFUME NITRO RED ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "HUGO BOSS",
    "referencia": "E441",
    "descripcion": "PERFUME DARK BLUE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "OSCAR DE LA RENTA",
    "referencia": "E442",
    "descripcion": "PERFUME POUR LUI HM ",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ÉSIKA",
    "referencia": "E443",
    "descripcion": "PERFUME DORSAY HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "REVLON",
    "referencia": "E444",
    "descripcion": "PERFUME JEAN NATTE HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "RASASI",
    "referencia": "E445",
    "descripcion": "PERFUME HAWAS HM",
    "categoria": "CABALLERO",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E446",
    "descripcion": "PERFUME GOOD GIRL SUPREME DM ",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ARIANA GRANDE",
    "referencia": "E447",
    "descripcion": "PERFUME THANK U NEXT DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CRISTIAN DIOR",
    "referencia": "E448",
    "descripcion": "PERFUME MISS DIOR PARFUM DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ARMAF",
    "referencia": "E449",
    "descripcion": "PERFUME ODYSSEY CANDEE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E450",
    "descripcion": "PERFUME GOOD GIRL DAZZLING GARDEN DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "VALENTINO",
    "referencia": "E451",
    "descripcion": "PERFUME DONNA BORN IN ROMAN CORAL FANTAS",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "YANBAL",
    "referencia": "E452",
    "descripcion": "PERFUME ADRENALINE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ARMAF",
    "referencia": "E453",
    "descripcion": "PERFUME YUM YUM DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LANCOME",
    "referencia": "E454",
    "descripcion": "PERFUME LA VIDA ES BELLA ELIXIR DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BHARARA",
    "referencia": "E455",
    "descripcion": "PERFUME BHARARA ROSE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E456",
    "descripcion": "PERFUME MAYAR INTENSE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "SOL DE JANEIRO",
    "referencia": "E457",
    "descripcion": "PERFUME RIO RADIANCE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BATH AND BODY ",
    "referencia": "E458",
    "descripcion": "PERFUME VELVET SUGAR DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BURBERRY",
    "referencia": "E459",
    "descripcion": "PERFUME BURBERRY HER ELIXIR DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E460",
    "descripcion": "PERFUME ECLAIRE DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E461",
    "descripcion": "PERFUME GOOD GIRL BLUSH DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "BILLIE EILISH",
    "referencia": "E462",
    "descripcion": "PERFUME BILLIE EILISH ELISH DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "CAROLINA HERRERA",
    "referencia": "E463",
    "descripcion": "PERFUME AFRIKA DM",
    "categoria": "DAMA",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ORTO PARISI",
    "referencia": "E464",
    "descripcion": "PERFUME MEGAMARE UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "AFNAN",
    "referencia": "E465",
    "descripcion": "PERFUME 9PM REBEL UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ARMAF",
    "referencia": "E466",
    "descripcion": "PERFUME CLUB DE NUIT MILESTONE UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "GIARDINI DI TOSCANA ",
    "referencia": "E467",
    "descripcion": "PERFUME BIANCO LATTE UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MARLY",
    "referencia": "E468",
    "descripcion": "PERFUME KALAN UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATAFFA",
    "referencia": "E469",
    "descripcion": "PERFUME TERIAQ UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "MONTALE ",
    "referencia": "E470",
    "descripcion": "PERFUME ROSES MUSK UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "LATTAFA",
    "referencia": "E471",
    "descripcion": "PERFUME EMEER UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  },
  {
    "marca": "ARMAF",
    "referencia": "E472",
    "descripcion": "PERFUME 9AM DIVE UNX",
    "categoria": "UNISEX",
    "precio": 2.5,
    "inStock": true
  }
];

// Mapear los datos originales al formato esperado por la interfaz Product
export const products: Product[] = productData.map(mapProductData);
