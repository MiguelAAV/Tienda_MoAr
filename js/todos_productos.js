const productos = [
{
    id: 1,
    marca: "APPLE",
    modelo: "iPhone 16",
    nombre: "Apple iPhone 16 Azul - 128GB",
    imagen: "image/productos/apple/iPhone 16 Azul-128GB/iphone_16_ultramarine_pdp_image_position_1__cles.jpg",
    precio: 953990,
    descripcion: "El iPhone 16 de Apple en color azul ultramarine con 128GB de almacenamiento ofrece un rendimiento excepcional, una cámara avanzada y una pantalla vibrante, todo en un diseño elegante y duradero.",
    categoria: "smartphones"
},
{
    id: 2,
    marca: "APPLE",
    modelo: "iPhone 16",
    nombre: "Apple iPhone 16 Rosado- 128GB",
    imagen: "image/productos/apple/iPhone 16 Rosado-128GB/iphone_16_pink_pdp_image_position_1__cles_1.jpg",
    precio: 923990,
    descripcion: "El iPhone 16 de Apple en color rosado con 128GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 3,
    marca: "APPLE",
    modelo: "iPhone 16 Pro Max",
    nombre: "Apple iPhone 16 Pro Max Desierto - 256 GB",
    imagen: "image/productos/apple/iPhone 16 Pro Max Desierto-256 GB/iphone_16_pro_max_desert_titanium_pdp_image_position_1__gens.jpg",
    precio: 1359990,
    descripcion: "El iPhone 16 Pro Max de Apple en color desierto con 256GB de almacenamiento ofrece un rendimiento excepcional, una cámara avanzada y una pantalla vibrante, todo en un diseño elegante y duradero.",
    categoria: "smartphones"
},
{
    id: 4,
    marca: "APPLE",
    modelo: "iPhone 16e",
    nombre: "Apple iPhone 16e Black - 128GB",
    imagen: "image/productos/apple/iPhone 16e Black-128GB/iphone_16e_black_pdp_image_position_1__cles.jpg",
    precio: 699990,
    descripcion: "El iPhone 16e de Apple en color negro con 128GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 5,
    marca: "APPLE",
    modelo: "iPhone 15",
    nombre: "Apple iPhone 15 Azul- 128GB",
    imagen: "image/productos/apple/iPhone 15 Azul-128GB/apple_iphone_13_5g-min_2.png",
    precio: 779990,
    descripcion: "El iPhone 15 de Apple en color azul con 128GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 6,
    marca: "APPLE",
    modelo: "iPhone 14 Medianoche",
    nombre: "Apple iPhone 14 Medianoche - 128GB",
    imagen: "image/productos/apple/iPhone 14 Medianoche-128GB/logo_okk_2.png",
    precio: 779990,
    descripcion: "El iPhone 14 de Apple en color medianoche con 128GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 7,
    marca: "HONOR",
    modelo: "X9C Smart",
    nombre: "Honor X9C Smart 256 GB Celeste",
    imagen: "image/productos/honor/Honor X9C Smart 256 GB Celeste/honor_-_x9c_smart_1.jpg",
    precio: 189990,
    descripcion: "El Honor X9C Smart en color celeste con 256GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 8,
    marca: "HONOR",
    modelo: "X6B",
    nombre: "Honor X6B 256 GB Verde",
    imagen: "image/productos/honor/Honor X6B 256 GB Verde/honor_-_x6b_5g_green_1.jpg",
    precio: 139990,
    descripcion: "El Honor X6B en color verde con 256GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 9,
    marca: "HONOR",
    modelo: "X6B",
    nombre: "Honor X6B 256 GB Black",
    imagen: "image/productos/honor/Honor X6B 256 GB Black/honor_-_x6b_5g_black_2_2.jpg",
    precio: 139990,
    descripcion: "El Honor X6B en color negro con 256GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 10,
    marca: "HONOR",
    modelo: "Magic 7 Lite",
    nombre: "Honor Magic 7 Lite 512GB Purple",
    imagen: "image/productos/honor/Honor Magic 7 Lite 512GB Pruple/honor_-_magic7_lite_purple_1.jpg",
    precio: 519990,
    descripcion: "El Honor Magic 7 Lite en color púrpura con 512GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{id: 11,
    marca: "HONOR",
    modelo: "Magic 7 Lite",
    nombre: "Honor Magic 7 Lite 512GB Negro",
    imagen: "image/productos/honor/Honor Magic 7 Lite 512GB Negro/honor_-_magic7_lite_black_7.jpg",
    precio: 519990,
    descripcion: "El Honor Magic 7 Lite en color negro con 512GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 12,
    marca: "HONOR",
    modelo: "400 Lite",
    nombre: "Honor 400 Lite 256 GB Negro + Choice X7 Lite",
    imagen: "image/productos/honor/Honor 400 Lite 256 GB Negro + Choice X7 Lite/gs-gs-honor_-_400_lite_black10.jpg",
    precio: 299990,
    descripcion: "El Honor lite es el equilibrio entre lo bueno, bonito y barato",
    categoria: "smartphones"
},
{
    id: 13,
    marca: "MOTOROLA",
    modelo: "Edge 30 Pro",
    nombre: "Motorola Edge 30 Pro",
    imagen: "image/productos/motorola/Motorola Edge 60 256 GB Verde/01-edge60_shamrock.jpg",
    precio: 459990,
    descripcion: "El Motorola Edge 30 Pro en color verde con 256GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 14,
    marca: "MOTOROLA",
    modelo: "Edge 60 Fusion",
    nombre: "Motorola Edge 60 Fusion 256 GB",
    imagen: "image/productos/motorola/Motorola Edge 60 Fusion 256 GB Azul/01-edge60fusion_slipstream.jpg",
    precio: 389990,
    descripcion: "El Motorola Edge 60 Fusion en color azul con 256GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 15,
    marca: "MOTOROLA",
    modelo: "G35 128 GB",
    nombre: "Motorola G35 128 GB Negro",
    imagen: "image/productos/motorola/Motorola G35 128 GB Negro/01_motog35-5g_negro_.png",
    precio: 159990,
    descripcion: "El Motorola G35 en color negro con 128GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 16,
    marca: "MOTOROLA",
    modelo: "G55 5G 256 GB",
    nombre: "Motorola G55 5G 256 GB Verde",
    imagen: "image/productos/motorola/Motorola G55 5G 256 GB Verde/motog55-5g__verde_04.png",
    precio: 229990,
    descripcion: "El Motorola G55 5G en color verde con 256GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 17,
    marca: "MOTOROLA",
    modelo: "G85 5G 256Gb - Azul",
    nombre: "Motorola G85 5G 256Gb - Azul",
    imagen: "image/productos/motorola/Motorola G85 5G 256Gb - Azul/motog85_azul_01.png",
    precio: 239990,
    descripcion: "El Motorola G85 5G en color azul con 256GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 18,
    marca: "SAMSUNG",
    modelo: "Galaxy S25 Ultra",
    nombre: "Samsung Galaxy S25 Ultra",
    imagen: "image/productos/samsung/Samsung Galaxy S25 Ultra 256 GB Titanium Black/sm-s938bakkltl_1_2.jpg",
    precio: 1399990,
    descripcion: "El Samsung Galaxy S25 Ultra en color titanium black con 256GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 19,
    marca: "SAMSUNG",
    modelo: "Galaxy S25",
    nombre: "Samsung Galaxy S25 128 GB IcyBlue",
    imagen: "image/productos/samsung/Samsung Galaxy S25 128 GB IcyBlue/sm-s931blbkltl_1.jpg",
    precio: 699990,
    descripcion: "El Samsung Galaxy S25 en color IcyBlue con 128GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 20,
    marca: "SAMSUNG",
    modelo: "Galaxy S24 FE",
    nombre: "Samsung Galaxy S24 FE 128 GB Black",
    imagen: "image/productos/samsung/Samsung Galaxy S24 FE 128 GB Black/sm-s721bzkjlel_1.jpg",
    precio: 709990,
    descripcion: "El Samsung Galaxy S24 FE en color black con 128GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 21,
    marca: "SAMSUNG",
    modelo: "Galaxy A56 5G 256 GB - Negro",
    nombre: "Samsung Galaxy A56 5G 256 GB - Negro",
    imagen: "image/productos/samsung/Samsung Galaxy A56 5G 256 GB - Negro/sm-a566ezkcltl_0_1.jpg",
    precio: 369990,
    descripcion:"Esta buenardo",
    categoria: "smartphones"
},
{
    id: 22,
    marca: "SAMSUNG",
    modelo: "Galaxy A56 5G 128 GB - Negro",
    nombre: "Samsung Galaxy A56 5G 128 GB Negro",
    imagen: "image/productos/samsung/Samsung Galaxy A56 5G 128 GB - Negro/sm-a566ezkcltl_3.jpg",
    precio: 314990,
    descripcion:"Esta filete",
    categoria: "smartphones"
},
{
    id: 23,
    marca: "SAMSUNG",
    modelo: "Galaxy A16 5G 128 GB Negro",
    nombre: "Samsung Galaxy A16 5G 128 GB Negro",
    imagen: "image/productos/samsung/Samsung Galaxy A16 5G 128 GB Negro/sm-a166mzkdltl_1.jpg",
    precio: 129990,
    descripcion:"Joya",
    categoria: "smartphones"
},
{
    id: 24,
    marca: "SAMSUNG",
    modelo: "Galaxy A06 128 GB Black",
    nombre: "Samsung A06 128 GB Black",
    imagen: "image/productos/samsung/Samsung A06 128 GB Black/sm-a065mzkgltl_1.jpg",
    precio: 89990,
    descripcion:"Esta modelo esta ya pasado de moda",
    categoria: "smartphones"
},
{
    id: 25,
    marca: "XIAOMI",
    modelo: "Redmi Note 14 Pro+ 256GB",
    nombre: "Xiaomi Redmi Note 14 Pro+ 256GB",
    imagen: "image/productos/xiaomi/Xiaomi Redmi Note 14 Pro+ 256GB/o16u-black-1200x1200-back_front_1.jpg",
    precio: 529990,
    descripcion: "El Xiaomi Redmi Note 14 Pro+ en color negro con 256GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 26,
    marca: "XIAOMI",
    modelo: "Redmi Note 14 Pro 256GB",
    nombre: "Xiaomi Redmi Note 14 Pro 256GB",
    imagen: "image/productos/xiaomi/Xiaomi Redmi Note 14 Pro 256GB/o16_black_back_45_r_2.jpg",
    precio: 439990,
    descripcion: "El Xiaomi Redmi Note 14 Pro en color negro con 256GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 27,
    marca: "XIAOMI",
    modelo: "Redmi 14C - 256 GB",
    nombre: "Xiaomi Redmi 14C - 256 GB",
    imagen: "image/productos/xiaomi/Xiaomi Redmi 14C - 256 GB/1_4_3.jpg",
    precio: 189990,
    descripcion: "El Xiaomi Redmi 14C en color negro con 256GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 28,
    marca: "XIAOMI",
    modelo: "Xiaomi 14T",
    nombre: "Xiaomi 14T 512GB Black",
    imagen: "image/productos/xiaomi/Xiaomi 14T 512GB Black/gs-xiaomi_14t_black-_v_1_1.jpg",
    precio: 569990,
    descripcion: "El Xiaomi 14T en color negro con 512GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 29,
    marca: "XIAOMI",
    modelo: "Xiaomi Redmi 13C",
    nombre: "Xiaomi Redmi 13C 5G - 256 GB",
    imagen: "image/productos/xiaomi/Xiaomi Redmi 13C 5G - 256 GB/google_shopping_-xiaomi_redmi_13c_5g-_v_1_1_.jpg",
    precio: 219990,
    descripcion: "El Xiaomi Redmi 13C 5G en color negro con 256GB de almacenamiento combina un diseño elegante con un rendimiento potente, ideal para capturar momentos inolvidables.",
    categoria: "smartphones"
},
{
    id: 30,
    marca: "APPLE",
    modelo: "Apple AirPods 4.1",
    nombre: "Apple AirPods 4",
    imagen: "image/productos/accesorios/Apple AirPods 4/gs-airpods_4-_v_1.jpg",
    precio: 199990,
    descripcion: "Los Apple AirPods 4 ofrecen una experiencia de audio envolvente con tecnología de cancelación de ruido y un diseño ergonómico para un ajuste perfecto.",
    categoria: "accesorios"
},
{
    id: 31,
    marca: "APPLE",
    modelo: "Apple AirTag 4.5.5",
    nombre: "Apple AirTag",
    imagen: "image/productos/accesorios/Apple AirTag/apple_airtag-1.jpg",
    precio: 39990,
    descripcion: "El Apple AirTag es un dispositivo de rastreo compacto y ligero que te ayuda a localizar tus objetos perdidos con facilidad.",
    categoria: "accesorios"
},
{
    id: 32,
    marca: "APPLE",
    modelo: "Apple EarPods Lxcvb",
    nombre: "Apple EarPods Lightning",
    imagen: "image/productos/accesorios/Apple EarPods Lightning/airpods_lightihng_ok.png",
    precio: 59990,
    descripcion: "Los Apple EarPods Lightning ofrecen un sonido de alta calidad y un diseño ergonómico para una experiencia auditiva cómoda.",
    categoria: "accesorios"
},
{
    id: 33,
    marca: "XIAOMI",
    modelo: "Batería Xiaomi Lite",
    nombre: "Batería 10.000 mAh Redmi 22.5W Lite",
    imagen: "image/productos/accesorios/Batería 10.000 mAh Redmi 22.5W Lite/bateria_xiaomi_10000_mah.png",
    precio: 39990,
    descripcion: "La Batería 10.000 mAh Redmi 22.5W Lite de Xiaomi ofrece una carga rápida y portátil para mantener tus dispositivos siempre encendidos.",
    categoria: "accesorios"
},
{
    id: 34,
    marca: "PHILIPS",
    modelo: "Audífonos Over-Ear TAH1205BK",
    nombre: "Audífonos Over-Ear",
    imagen: "image/productos/accesorios/Philips Audífonos Over-Ear TAH1205BK/audifonos_over_earok.png",
    precio: 59990,
    descripcion: "Los Audífonos Over-Ear TAH1205BK de Philips ofrecen un sonido nítido y un diseño cómodo para una experiencia auditiva inmersiva.",
    categoria: "accesorios"
},
{
    id: 35,
    marca: "SAMSUNG",
    modelo: "Tablet Galaxy S6 Lite",
    nombre: "Tablet Galaxy S6 Lite (2024) 64GB + Lápiz + Funda",
    imagen: "image/productos/accesorios/Tablet Galaxy S6 Lite (2024) 64GB + Lápiz + Funda/1tb06119_1.jpg",
    descripcion: "La Tablet Galaxy S6 Lite (2024) de Samsung con 64GB de almacenamiento, lápiz y funda ofrece una experiencia versátil para trabajo y entretenimiento.",
    precio: 127990,
    categoria: "accesorios"
},
{
    id: 36,
    marca: "XIAOMI",
    modelo: "Xiaomi Band 9 Active",
    nombre: "Xiaomi Band 9 Active Negro",
    imagen: "image/productos/accesorios/Xiaomi Band 9 Active Negro/band_9_1.jpg",
    descripcion: "La Xiaomi Band 9 Active en color negro ofrece un seguimiento de actividad física y monitoreo de salud en un diseño elegante y ligero.",
    precio: 19990,
    categoria: "accesorios"
},
{
    id: 37,
    marca: "XIAOMI",
    modelo: "Watch 5 Active",
    nombre: "Xiaomi Redmi Watch 5 Active",
    imagen: "image/productos/accesorios/Xiaomi Redmi Watch 5 Active/xiaomi_redmi_watch_5_active_3_ok.jpg",
    precio: 99990,
    descripcion: "El Xiaomi Redmi Watch 5 Active combina estilo y funcionalidad, ofreciendo seguimiento de actividad física y notificaciones inteligentes.",
    categoria: "accesorios"
}
];

