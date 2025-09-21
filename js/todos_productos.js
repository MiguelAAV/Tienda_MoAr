const productos = [
{
    id: 1,
    marca: "APPLE",
    nombre: "Apple iPhone 16 Azul - 128GB",
    imagen: "image/productos/apple/iPhone 16 Azul-128GB/iphone_16_ultramarine_pdp_image_position_1__cles.jpg",
    precio: 953990,
    categoria: "smartphones"
},
{
    id: 2,
    marca: "APPLE",
    nombre: "Apple iPhone 16 Rosado- 128GB",
    imagen: "image/productos/apple/iPhone 16 Rosado-128GB/iphone_16_pink_pdp_image_position_1__cles_1.jpg",
    precio: 923990,
    categoria: "smartphones"
},
{
    id: 3,
    marca: "APPLE",
    nombre: "Apple iPhone 16 Pro Max Desierto - 256 GB",
    imagen: "image/productos/apple/iPhone 16 Pro Max Desierto-256 GB/iphone_16_pro_max_desert_titanium_pdp_image_position_1__gens.jpg",
    precio: 1359990,
    categoria: "smartphones"
},
{
    id: 4,
    marca: "APPLE",
    nombre: "Apple iPhone 16e Black - 128GB",
    imagen: "image/productos/apple/iPhone 16e Black-128GB/iphone_16e_black_pdp_image_position_1__cles.jpg",
    precio: 699990,
    categoria: "smartphones"
},
{
    id: 5,
    marca: "APPLE",
    nombre: "Apple iPhone 15 Azul- 128GB",
    imagen: "image/productos/apple/iPhone 15 Azul-128GB/apple_iphone_13_5g-min_2.png",
    precio: 779990,
    categoria: "smartphones"
},
{
    id: 6,
    marca: "APPLE",
    nombre: "Apple iPhone 14 Medianoche - 128GB",
    imagen: "image/productos/apple/iPhone 14 Medianoche-128GB/logo_okk_2.png",
    precio: 779990,
    categoria: "smartphones"
},
{
    id: 7,
    marca: "HONOR",
    nombre: "Honor X9C Smart 256 GB Celeste",
    imagen: "image/productos/honor/Honor X9C Smart 256 GB Celeste/honor_-_x9c_smart_1.jpg",
    precio: 189990,
    categoria: "smartphones"
},
{
    id: 8,
    marca: "HONOR",
    nombre: "Honor X6B 256 GB Verde",
    imagen: "image/productos/honor/Honor X6B 256 GB Verde/honor_-_x6b_5g_green_1.jpg",
    precio: 139990,
    categoria: "smartphones"
},
{
    id: 9,
    marca: "HONOR",
    nombre: "Honor X6B 256 GB Black",
    imagen: "image/productos/honor/Honor X6B 256 GB Black/honor_-_x6b_5g_black_2_2.jpg",
    precio: 139990,
    categoria: "smartphones"
},
{
    id: 10,
    marca: "HONOR",
    nombre: "Honor Magic 7 Lite 512GB Purple",
    imagen: "image/productos/honor/Honor Magic 7 Lite 512GB Pruple/honor_-_magic7_lite_purple_1.jpg",
    precio: 519990,
    categoria: "smartphones"
},
{id: 11,
    marca: "HONOR",
    nombre: "Honor Magic 7 Lite 512GB Negro",
    imagen: "image/productos/honor/Honor Magic 7 Lite 512GB Negro/honor_-_magic7_lite_black_7.jpg",
    precio: 519990,
    categoria: "smartphones"
},
{
    id: 12,
    marca: "HONOR",
    nombre: "Honor 400 Lite 256 GB Negro + Choice X7 Lite",
    imagen: "image/productos/honor/Honor 400 Lite 256 GB Negro + Choice X7 Lite/gs-gs-honor_-_400_lite_black10.jpg",
    precio: 299990,
    categoria: "smartphones"
},
{
    id: 13,
    marca: "MOTOROLA",
    nombre: "Motorola Edge 30 Pro",
    imagen: "image/productos/motorola/Motorola Edge 60 256 GB Verde/01-edge60_shamrock.jpg",
    precio: 459990,
    categoria: "smartphones"
},
{
    id: 14,
    marca: "MOTOROLA",
    nombre: "Motorola Edge 60 Fusion 256 GB",
    imagen: "image/productos/motorola/Motorola Edge 60 Fusion 256 GB Azul/01-edge60fusion_slipstream.jpg",
    precio: 389990,
    categoria: "smartphones"
},
{
    id: 15,
    marca: "MOTOROLA",
    nombre: "Motorola G35 128 GB Negro",
    imagen: "image/productos/motorola/Motorola G35 128 GB Negro/01_motog35-5g_negro_.png",
    precio: 159990,
    categoria: "smartphones"
},
{
    id: 16,
    marca: "MOTOROLA",
    nombre: "Motorola G55 5G 256 GB Verde",
    imagen: "image/productos/motorola/Motorola G55 5G 256 GB Verde/motog55-5g__verde_04.png",
    precio: 229990,
    categoria: "smartphones"
},
{
    id: 17,
    marca: "MOTOROLA",
    nombre: "Motorola G85 5G 256Gb - Azul",
    imagen: "image/productos/motorola/Motorola G85 5G 256Gb - Azul/motog85_azul_01.png",
    precio: 239990,
    categoria: "smartphones"
},
{
    id: 18,
    marca: "SAMSUNG",
    nombre: "Samsung Galaxy S25 Ultra",
    imagen: "image/productos/samsung/Samsung Galaxy S25 Ultra 256 GB Titanium Black/sm-s938bakkltl_1_2.jpg",
    precio: 1399990,
    categoria: "smartphones"
},
{
    id: 19,
    marca: "SAMSUNG",
    nombre: "Samsung Galaxy S25 128 GB IcyBlue",
    imagen: "image/productos/samsung/Samsung Galaxy S25 128 GB IcyBlue/sm-s931blbkltl_1.jpg",
    precio: 699990,
    categoria: "smartphones"
},
{
    id: 20,
    marca: "SAMSUNG",
    nombre: "Samsung Galaxy S24 FE 128 GB Black",
    imagen: "image/productos/samsung/Samsung Galaxy S24 FE 128 GB Black/sm-s721bzkjlel_1.jpg",
    precio: 709990,
    categoria: "smartphones"
},
{
    id: 21,
    marca: "SAMSUNG",
    nombre: "Samsung Galaxy A56 5G 256 GB - Negro",
    imagen: "image/productos/samsung/Samsung Galaxy A56 5G 256 GB - Negro/sm-a566ezkcltl_0_1.jpg",
    precio: 369990,
    categoria: "smartphones"
},
{
    id: 22,
    marca: "SAMSUNG",
    nombre: "Samsung Galaxy A56 5G 128 GB Negro",
    imagen: "image/productos/samsung/Samsung Galaxy A56 5G 128 GB - Negro/sm-a566ezkcltl_3.jpg",
    precio: 314990,
    categoria: "smartphones"
},
{
    id: 23,
    marca: "SAMSUNG",
    nombre: "Samsung Galaxy A16 5G 128 GB Negro",
    imagen: "image/productos/samsung/Samsung Galaxy A16 5G 128 GB Negro/sm-a166mzkdltl_1.jpg",
    precio: 129990,
    categoria: "smartphones"
},
{
    id: 24,
    marca: "SAMSUNG",
    nombre: "Samsung A06 128 GB Black",
    imagen: "image/productos/samsung/Samsung A06 128 GB Black/sm-a065mzkgltl_1.jpg",
    precio: 89990,
    categoria: "smartphones"
},
{
    id: 25,
    marca: "XIAOMI",
    nombre: "Xiaomi Redmi Note 14 Pro+ 256GB",
    imagen: "image/productos/xiaomi/Xiaomi Redmi Note 14 Pro+ 256GB/o16u-black-1200x1200-back_front_1.jpg",
    precio: 529990,
    categoria: "smartphones"
},
{
    id: 26,
    marca: "XIAOMI",
    nombre: "Xiaomi Redmi Note 14 Pro 256GB",
    imagen: "image/productos/xiaomi/Xiaomi Redmi Note 14 Pro 256GB/o16_black_back_45_r_2.jpg",
    precio: 439990,
    categoria: "smartphones"
},
{
    id: 27,
    marca: "XIAOMI",
    nombre: "Xiaomi Redmi 14C - 256 GB",
    imagen: "image/productos/xiaomi/Xiaomi Redmi 14C - 256 GB/1_4_3.jpg",
    precio: 189990,
    categoria: "smartphones"
},
{
    id: 28,
    marca: "XIAOMI",
    nombre: "Xiaomi 14T 512GB Black",
    imagen: "image/productos/xiaomi/Xiaomi 14T 512GB Black/gs-xiaomi_14t_black-_v_1_1.jpg",
    precio: 569990,
    categoria: "smartphones"
},
{
    id: 29,
    marca: "XIAOMI",
    nombre: "Xiaomi Redmi 13C 5G - 256 GB",
    imagen: "image/productos/xiaomi/Xiaomi Redmi 13C 5G - 256 GB/google_shopping_-xiaomi_redmi_13c_5g-_v_1_1_.jpg",
    precio: 219990,
    categoria: "smartphones"
},
{
    id: 30,
    marca: "APPLE",
    nombre: "Apple AirPods 4",
    imagen: "image/productos/accesorios/Apple AirPods 4/gs-airpods_4-_v_1.jpg",
    precio: 199990,
    categoria: "accesorios"
},
{
    id: 31,
    marca: "APPLE",
    nombre: "Apple AirTag",
    imagen: "image/productos/accesorios/Apple AirTag/apple_airtag-1.jpg",
    precio: 39990,
    categoria: "accesorios"
},
{
    id: 32,
    marca: "APPLE",
    nombre: "Apple EarPods Lightning",
    imagen: "image/productos/accesorios/Apple EarPods Lightning/airpods_lightihng_ok.png",
    precio: 59990,
    categoria: "accesorios"
},
{
    id: 33,
    marca: "XIAOMI",
    nombre: "Batería 10.000 mAh Redmi 22.5W Lite",
    imagen: "image/productos/accesorios/Batería 10.000 mAh Redmi 22.5W Lite/bateria_xiaomi_10000_mah.png",
    precio: 39990,
    categoria: "accesorios"
},
{
    id: 34,
    marca: "PHILIPS",
    nombre: "Audífonos Over-Ear TAH1205BK",
    imagen: "image/productos/accesorios/Philips Audífonos Over-Ear TAH1205BK/audifonos_over_earok.png",
    precio: 59990,
    categoria: "accesorios"
},
{
    id: 35,
    marca: "SAMSUNG",
    nombre: "Tablet Galaxy S6 Lite (2024) 64GB + Lápiz + Funda",
    imagen: "image/productos/accesorios/Tablet Galaxy S6 Lite (2024) 64GB + Lápiz + Funda/1tb06119_1.jpg",
    precio: 127990,
    categoria: "accesorios"
},
{
    id: 36,
    marca: "XIAOMI",
    nombre: "Xiaomi Band 9 Active Negro",
    imagen: "image/productos/accesorios/Xiaomi Band 9 Active Negro/band_9_1.jpg",
    precio: 19990,
    categoria: "accesorios"
},
{
    id: 37,
    marca: "XIAOMI",
    nombre: "Xiaomi Redmi Watch 5 Active",
    imagen: "image/productos/accesorios/Xiaomi Redmi Watch 5 Active/xiaomi_redmi_watch_5_active_3_ok.jpg",
    precio: 99990,
    categoria: "accesorios"
}
];

