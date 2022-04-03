const product_01_image_01 = require('../images/products/product-01 (1).jpg').default
const product_01_image_02 = require('../images/products/product-01 (2).jpg').default
// const product_01_image_03 = require('../images/products/product-01 (3).jpg').default

const product_02_image_01 = require('../images/products/product-02 (1).jpg').default
const product_02_image_02 = require('../images/products/product-02 (2).jpg').default

const product_03_image_01 = require('../images/products/product-03 (1).jpg').default
const product_03_image_02 = require('../images/products/product-03 (2).jpg').default

const product_04_image_01 = require('../images/products/product-04 (1).jpg').default
const product_04_image_02 = require('../images/products/product-04 (2).jpg').default

const product_05_image_01 = require('../images/products/product-05 (1).jpg').default
const product_05_image_02 = require('../images/products/product-05 (2).jpg').default

const product_06_image_01 = require('../images/products/product-06 (1).jpg').default
const product_06_image_02 = require('../images/products/product-06 (2).jpg').default

const product_07_image_01 = require('../images/products/product-07 (1).jpg').default
const product_07_image_02 = require('../images/products/product-07 (2).jpg').default

const product_08_image_01 = require('../images/products/product-08 (1).jpg').default
const product_08_image_02 = require('../images/products/product-08 (2).jpg').default

const product_09_image_01 = require('../images/products/product-09 (1).jpg').default
const product_09_image_02 = require('../images/products/product-09 (2).jpg').default

const product_10_image_01 = require('../images/products/product-10 (1).jpg').default
const product_10_image_02 = require('../images/products/product-10 (2).jpg').default

const product_11_image_01 = require('../images/products/product-11 (1).jpg').default
const product_11_image_02 = require('../images/products/product-11 (2).jpg').default

const product_12_image_01 = require('../images/products/product-12 (1).jpg').default
const product_12_image_02 = require('../images/products/product-12 (2).jpg').default

const products = [
    {
        title: "Nike Superfly 7 Academy TF AT7978-606",
        price: '2650000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "giay-nike",
        colors: ["white", "red", "orange"],
        slug: "AT7978-606",
        size: ["41", "42", "43", "44"]
    },
    {
        title: "Nike Mercurial Vapor 14 Pro TF Blueprint pack  Chlorine Blue / Laser Orange DJ2851-484",
        price: '3200000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "giay-nike",
        colors: ["white", "red", "blue"],
        slug: "DJ2851-484",
        size: ["39","41", "42", "43", "44"]
    },
    {
        title: "Nike Phantom GT Academy Flyease FG/MG- Black/ Cyber/ Light Photo Blue DA2835-090",
        price: '2400000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "giay-nike",
        colors: ["white", "red", "orange", "yellow"],
        slug: "DA2835-090",
        size: ["39","41", "42", "43", "44"]
    },
    {
        title: "Nike Mercurial Vapor 14 Pro TF Silver Safari CV1001-107",
        price: '3200000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "giay-nike",
        colors: ["white", "red", "orange", "yellow"],
        slug: "CV1001-107",
        size: ["39","41", "42", "43", "44"]
    },
    {
        title: "Nike Mercurial Vapor 14 Pro FG- Bright Crimson/ Metallic Silver CU5693-600",
        price: '4000000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "giay-nike",
        colors: ["white", "red", "orange", "yellow"],
        slug: "CU5693-600",
        size: ["39","41", "42", "43", "44"]
    },
    {
        title: "Nike Tiempo Legend 9 Academy TF Motivation pack- White/ Volt/ Bright Crimson DA1191-176",
        price: '2200000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "giay-nike",
        colors: ["white", "red", "orange", "yellow"],
        slug: "DA1191-176",
        size: ["39","41", "42", "43", "44"]
    },
    {
        title: "Nike Tiempo Legend 9 Academy TF- Light Photo Blue/ Black/ Lime Glow DA1191-403",
        price: '2200000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "giay-nike",
        colors: ["white", "red", "orange", "yellow"],
        slug: "DA1191-403",
        size: ["39","41", "42", "43", "44"]
    },
    {
        title: "Nike Mercurial Superfly 8 Academy FG/AG- Bright Crimson/ Metallic Silver CV0843-600",
        price: '2600000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "giay-nike",
        colors: ["white", "red", "orange", "yellow"],
        slug: "CV0843-600",
        size: ["39","41", "42", "43", "44"]
    },
    {
        title: "Nike Premier II FG- White/ University Red 917803-161",
        price: '3200000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "giay-nike",
        colors: ["white", "red", "orange", "yellow"],
        slug: "917803-161",
        size: ["39","41", "42", "43", "44"]
    },
    {
        title: "Nike Mercurial Superfly 8 Academy TF Mbappe Flames- Light Thistle/ Metallic Silver DB2868-506",
        price: '2600000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "giay-nike",
        colors: ["white", "red", "orange", "yellow"],
        slug: "DB2868-506",
        size: ["39","41", "42", "43", "44"]
    },
    {
        title: "NIKE MERCURIAL ZOOM VAPOR 14 PRO TF SILVER SAFARI - WHITE/BLACK/METALLIC SILVER/VOLT",
        price: '3519000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "giay-nike",
        colors: ["blue", "black"],
        slug: "0000",
        size: ["39","41", "42", "43", "44"]
    },
    {
        title: "NIKE TIEMPO LEGEND 8 PRO TF PLAY MODE - CARDINAL RED/BLACK/CRIMSON TINT/WHITE",
        price: '3519000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "giay-nike",
        colors: ["blue"],
        slug: "0000",
        size: ["39","41", "42", "43", "44"]
    },
    {
        title: "Nike Superfly 7 Academy TF AT7978-606",
        price: '2650000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "giay-nike",
        colors: ["white", "red", "orange"],
        slug: "AT7978-606",
        size: ["41", "42", "43", "44"]
    },
    {
        title: "Nike Mercurial Vapor 14 Pro TF Blueprint pack  Chlorine Blue / Laser Orange DJ2851-484",
        price: '3200000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "giay-nike",
        colors: ["white", "red", "blue"],
        slug: "DJ2851-484",
        size: ["39","41", "42", "43", "44"]
    },
    {
        title: "Nike Phantom GT Academy Flyease FG/MG- Black/ Cyber/ Light Photo Blue DA2835-090",
        price: '2400000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "giay-nike",
        colors: ["white", "red", "orange", "yellow"],
        slug: "DA2835-090",
        size: ["39","41", "42", "43", "44"]
    },
    {
        title: "Nike Mercurial Superfly 8 Academy FG/AG- Bright Crimson/ Metallic Silver CV0843-600",
        price: '2600000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "giay-nike",
        colors: ["white", "red", "orange", "yellow"],
        slug: "CV0843-600",
        size: ["39","41", "42", "43", "44"]
    },
    {
        title: "Nike Premier II FG- White/ University Red 917803-161",
        price: '3200000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "giay-nike",
        colors: ["white", "red", "orange", "yellow"],
        slug: "917803-161",
        size: ["39","41", "42", "43", "44"]
    },
    {
        title: "Nike Mercurial Superfly 8 Academy TF Mbappe Flames- Light Thistle/ Metallic Silver DB2868-506",
        price: '2600000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "giay-nike",
        colors: ["white", "red", "orange", "yellow"],
        slug: "DB2868-506",
        size: ["39","41", "42", "43", "44"]
    },
    // 18 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const productData = {
    getAllProducts,
    getProducts
}

export default productData