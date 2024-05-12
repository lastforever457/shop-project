"use strict";

document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelector("#cards-row");
    let productCardsList = [
        {
            id: 1,
            image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1669189957.11567127.png",
            name: "Redmi 7",
            colors: ["gray", "black", "silver", "gold"],
            price: 150,
            count: 24,
            brandName: "Redmi",
        },
        {
            id: 2,
            image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666598561.94078322.png",
            name: "Redmi Note 8",
            colors: ["gray", "black", "blue", "white"],
            price: 200,
            count: 20,
            brandName: "Redmi",
        },
        {
            id: 3,
            image: "https://i02.appmifile.com/91_operatorx_operatorx_opx/24/02/2024/4eafcd40186edde466860564f9ff71e9.png",
            name: "Redmi 14 Ultra",
            colors: ["gray", "green", "blue", "white"],
            price: 250,
            count: 18,
            brandName: "Redmi",
        },
        {
            id: 4,
            image: "https://i02.appmifile.com/308_operatorx_operatorx_opx/26/09/2023/4796e703846ff6b8afdca74fc2755a10.png",
            name: "Redmi 8A",
            colors: ["black", "blue", "red"],
            price: 120,
            count: 22,
            brandName: "Redmi",
        },
        {
            id: 5,
            image: "https://i02.appmifile.com/851_operatorx_operatorx_opx/05/03/2024/c12e2ad71964ca90b59af9112407b9d7.png",
            name: "Redmi 9",
            colors: ["gray", "blue", "green", "purple"],
            price: 180,
            count: 26,
            brandName: "Redmi",
        },
        {
            id: 6,
            image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666350692.95218417.png",
            name: "Redmi Note 10",
            colors: ["gray", "black", "blue", "white"],
            price: 300,
            count: 15,
            brandName: "Redmi",
        },
        {
            id: 7,
            image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666350286.66957501.png",
            name: "Redmi 10",
            colors: ["black", "blue", "red", "green"],
            price: 220,
            count: 30,
            brandName: "Redmi",
        },
        {
            id: 8,
            image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666350161.25983265.png",
            name: "Redmi Note 11",
            colors: ["gray", "black", "green", "white"],
            price: 350,
            count: 25,
            brandName: "Redmi",
        },
        {
            id: 9,
            image: "https://i02.appmifile.com/686_operatorx_operatorx_opx/23/02/2024/a13c444dfc0b5db4ecae1e9d0ba10326.png",
            name: "Redmi 8",
            colors: ["gray", "black", "blue", "white"],
            price: 170,
            count: 28,
            brandName: "Redmi",
        },
        {
            id: 10,
            image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666350727.44153219.png",
            name: "Redmi 9A",
            colors: ["gray", "black", "blue", "green"],
            price: 100,
            count: 32,
            brandName: "Redmi",
        },
        {
            id: 11,
            image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1679574037.40791067.png",
            name: "Redmi Note 12",
            colors: ["gray", "black", "blue", "red"],
            price: 400,
            count: 20,
            brandName: "Redmi",
        },
        {
            id: 12,
            image: "https://i02.appmifile.com/851_operatorx_operatorx_opx/05/03/2024/c12e2ad71964ca90b59af9112407b9d7.png",
            name: "Redmi 11",
            colors: ["black", "blue", "red", "green"],
            price: 250,
            count: 18,
            brandName: "Redmi",
        },
        {
            id: 13,
            image: "https://i02.appmifile.com/994_operatorx_operatorx_opx/11/01/2024/72a71b312950178179eeb71425ef8def.png",
            name: "Redmi Note 13",
            colors: ["gray", "black", "green", "white"],
            price: 450,
            count: 22,
            brandName: "Redmi",
        },
        {
            id: 14,
            image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666350590.91427778.png",
            name: "Redmi 10A",
            colors: ["gray", "black", "blue", "white"],
            price: 130,
            count: 24,
            brandName: "Redmi",
        },
        {
            id: 15,
            image: "https://i02.appmifile.com/851_operatorx_operatorx_opx/05/03/2024/c12e2ad71964ca90b59af9112407b9d7.png",
            name: "Redmi 11A",
            colors: ["gray", "black", "blue", "red"],
            price: 110,
            count: 26,
            brandName: "Redmi",
        },
        {
            id: 16,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphone7_rosegold__l2umom2krz6i_large.jpg",
            name: "iPhone 7",
            colors: ["gray", "black", "silver", "gold"],
            price: 150,
            count: 24,
            brandName: "Apple",
        },
        {
            id: 17,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphone8_gold__i0h3tzi3t8y2_large.jpg",
            name: "iPhone 8",
            colors: ["red", "black", "gold", "white"],
            price: 200,
            count: 20,
            brandName: "Apple",
        },
        {
            id: 18,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphoneX_spacegray__bwbmykjnq7le_large.jpg",
            name: "iPhone X",
            colors: ["space gray", "silver", "gold"],
            price: 400,
            count: 15,
            brandName: "Apple",
        },
        {
            id: 19,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphoneX_spacegray__bwbmykjnq7le_large.jpg",
            name: "iPhone XR",
            colors: ["blue", "red", "yellow", "black", "white"],
            price: 500,
            count: 18,
            brandName: "Apple",
        },
        {
            id: 20,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphoneXS_gold__ecmnn7k3ajee_large.jpg",
            name: "iPhone XS",
            colors: ["space gray", "silver", "gold"],
            price: 700,
            count: 10,
            brandName: "Apple",
        },
        {
            id: 21,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphone11_red__c4kvr7si7526_large.jpg",
            name: "iPhone 11",
            colors: ["black", "green", "yellow", "purple", "red", "white"],
            price: 800,
            count: 12,
            brandName: "Apple",
        },
        {
            id: 22,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphone11_pro_gold__bci9jvstzx5u_large.jpg",
            name: "iPhone 11 Pro",
            colors: ["space gray", "silver", "gold", "midnight green"],
            price: 1000,
            count: 8,
            brandName: "Apple",
        },
        {
            id: 23,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphone11_pro_max_gold__bw2pmw5cb0ty_large.jpg",
            name: "iPhone 11 Pro Max",
            colors: ["space gray", "silver", "gold", "midnight green"],
            price: 1100,
            count: 6,
            brandName: "Apple",
        },
        {
            id: 24,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphoneSE_2nd_gen_red__dilajve2yw02_large.jpg",
            name: "iPhone SE (2nd generation)",
            colors: ["black", "white", "red"],
            price: 400,
            count: 20,
            brandName: "Apple",
        },
        {
            id: 25,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphone12_black__besvbyquul1e_large.jpg",
            name: "iPhone 12",
            colors: ["black", "white", "red", "green", "blue"],
            price: 1000,
            count: 8,
            brandName: "Apple",
        },
        {
            id: 26,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphone12_mini_black__ez60najx5d0m_large.jpg",
            name: "iPhone 12 Mini",
            colors: ["black", "white", "red", "green", "blue"],
            price: 900,
            count: 10,
            brandName: "Apple",
        },
        {
            id: 27,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphone12_pro_silver__n1gfwgh47r62_large.jpg",
            name: "iPhone 12 Pro",
            colors: ["graphite", "silver", "gold", "pacific blue"],
            price: 1200,
            count: 6,
            brandName: "Apple",
        },
        {
            id: 28,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphone12_pro_max_silver__edfvjnj8pjwy_large.jpg",
            name: "iPhone 12 Pro Max",
            colors: ["graphite", "silver", "gold", "pacific blue"],
            price: 1300,
            count: 5,
            brandName: "Apple",
        },
        {
            id: 29,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphone13_product_red__fsllefvsfwq6_large.jpg",
            name: "iPhone 13",
            colors: ["pink", "blue", "midnight", "starlight", "red"],
            price: 1100,
            count: 8,
            brandName: "Apple",
        },
        {
            id: 30,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphone13_mini_product_red__dnva9lbnblg2_large.jpg",
            name: "iPhone 13 Mini",
            colors: ["pink", "blue", "midnight", "starlight", "red"],
            price: 1000,
            count: 10,
            brandName: "Apple",
        },
        {
            id: 31,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphone14_red__ebv1f0m4gwmu_large.jpg",
            name: "iPhone 14",
            colors: ["black", "white", "blue", "green", "pink"],
            price: 1200,
            count: 8,
            brandName: "Apple",
        },
        {
            id: 32,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphone14_pro_max_space_black__bzjjitrfff2a_large.jpg",
            name: "iPhone 14 Pro Max",
            colors: ["graphite", "silver", "gold", "blue"],
            price: 1300,
            count: 10,
            brandName: "Apple",
        },
        {
            id: 33,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphone15_black__dctrrofz8vwy_large.jpg",
            name: "iPhone 15",
            colors: ["black", "white", "blue", "green", "pink"],
            price: 1400,
            count: 8,
            brandName: "Apple",
        },
        {
            id: 34,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphone15_pro_black_titanium__fqpdna4tvtym_large.jpg",
            name: "iPhone 15 Pro",
            colors: ["graphite", "silver", "gold", "blue"],
            price: 1500,
            count: 10,
            brandName: "Apple",
        },
        {
            id: 35,
            image: "https://www.apple.com/v/iphone/compare/ag/images/overview/compare_iphone15_pro_max_black_titanium__f84o6hevii2q_large.jpg",
            name: "iPhone 15 Pro Max",
            colors: ["graphite", "silver", "gold", "blue"],
            price: 1600,
            count: 10,
            brandName: "Apple",
        },
        {
            id: 36,
            image: "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/2401/gallery/uz-ru-galaxy-s24-sm-s921bzygskz-thumb-539363088?$172_172_PNG$",
            name: "Samsung Galaxy S21",
            colors: [
                "Phantom Black",
                "Phantom White",
                "Phantom Gray",
                "Phantom Pink",
            ],
            price: 1200,
            count: 15,
            brandName: "Samsung",
        },
        {
            id: 37,
            image: "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/2401/gallery/uz-ru-galaxy-s24-sm-s921bzygskz-thumb-539363088?$172_172_PNG$",
            name: "Samsung Galaxy S21 Plus",
            colors: [
                "Phantom Black",
                "Phantom White",
                "Phantom Pink",
                "Phantom Violet",
            ],
            price: 1300,
            count: 12,
            brandName: "Samsung",
        },
        {
            id: 38,
            image: "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/2307/gallery/uz-ru-galaxy-z-fold5-f946-sm-f946blbbskz-thumb-537419700?$172_172_PNG$",
            name: "Samsung Galaxy S21 Ultra",
            colors: [
                "Phantom Black",
                "Phantom White",
                "Phantom Silver",
                "Phantom Brown",
            ],
            price: 1500,
            count: 10,
            brandName: "Samsung",
        },
        {
            id: 39,
            image: "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/2202/gallery/uz-ru-galaxy-s22-s901-sm-s901bzkdskz-thumb-530860062?$172_172_PNG$",
            name: "Samsung Galaxy S22",
            colors: [
                "Phantom Black",
                "Phantom White",
                "Phantom Pink",
                "Phantom Green",
            ],
            price: 1400,
            count: 8,
            brandName: "Samsung",
        },
        {
            id: 40,
            image: "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/2202/gallery/uz-ru-galaxy-s22-plus-s906-sm-s906bzkdskz-thumb-530860306?$172_172_PNG$",
            name: "Samsung Galaxy S22 Plus",
            colors: [
                "Phantom Black",
                "Phantom White",
                "Phantom Pink",
                "Phantom Green",
            ],
            price: 1500,
            count: 6,
            brandName: "Samsung",
        },
        {
            id: 41,
            image: "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/2202/gallery/uz-ru-galaxy-s22-ultra-s908-sm-s908bzkdskz-thumb-530860455?$172_172_PNG$",
            name: "Samsung Galaxy S22 Ultra",
            colors: [
                "Phantom Black",
                "Phantom White",
                "Phantom Silver",
                "Phantom Green",
            ],
            price: 1700,
            count: 5,
            brandName: "Samsung",
        },
        {
            id: 42,
            image: "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/2307/gallery/uz-ru-galaxy-z-flip5-f731-sm-f731blggskz-thumb-537420473?$172_172_PNG$",
            name: "Samsung Galaxy S20 FE",
            colors: ["Cloud Navy", "Cloud Lavender", "Cloud Mint", "Cloud Red"],
            price: 900,
            count: 25,
            brandName: "Samsung",
        },
        {
            id: 43,
            image: "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/2208/gallery/uz-ru-galaxy-z-fold4-f936-sm-f936bzabskz-thumb-533214427?$172_172_PNG$",
            name: "Samsung Galaxy S20",
            colors: ["Cosmic Gray", "Cloud Blue", "Cloud White", "Cloud Pink"],
            price: 1000,
            count: 20,
            brandName: "Samsung",
        },
        {
            id: 44,
            image: "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/sm-f721blvgskz/gallery/uz-ru-galaxy-z-flip4-f721-sm-f721blvgskz-thumb-534252122?$172_172_PNG$",
            name: "Samsung Galaxy S20 Plus",
            colors: ["Cosmic Gray", "Cloud Blue", "Cloud White", "Cloud Pink"],
            price: 1200,
            count: 18,
            brandName: "Samsung",
        },
        {
            id: 45,
            image: "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/sm-a546ezkaskz/gallery/uz-ru-galaxy-a54-5g-sm-a546-sm-a546ezkaskz-thumb-536203905?$172_172_PNG$",
            name: "Samsung Galaxy S20 Ultra",
            colors: ["Cosmic Gray", "Cloud Blue", "Cloud White", "Cloud Pink"],
            price: 1400,
            count: 15,
            brandName: "Samsung",
        },
        {
            id: 46,
            image: "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/sm-a736bzadskz/gallery/uz-ru-galaxy-a73-5g-a736-sm-a736bzadskz-thumb-531865914?$172_172_PNG$",
            name: "Samsung Galaxy A72",
            colors: [
                "Awesome Black",
                "Awesome White",
                "Awesome Blue",
                "Awesome Violet",
            ],
            price: 600,
            count: 30,
            brandName: "Samsung",
        },
        {
            id: 47,
            image: "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/sm-a356elbgskz/gallery/uz-ru-galaxy-a35-5g-sm-a356-sm-a356elbgskz-thumb-540624313?$172_172_PNG$",
            name: "Samsung Galaxy A52",
            colors: [
                "Awesome Black",
                "Awesome White",
                "Awesome Blue",
                "Awesome Violet",
            ],
            price: 500,
            count: 35,
            brandName: "Samsung",
        },
        {
            id: 48,
            image: "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/2401/gallery/uz-ru-galaxy-s24-sm-s921bzygskz-thumb-539363088?$172_172_PNG$",
            name: "Samsung Galaxy S24",
            colors: [
                "Phantom Black",
                "Phantom White",
                "Phantom Gray",
                "Phantom Pink",
            ],
            price: 1600,
            count: 10,
            brandName: "Samsung",
        },
        {
            id: 49,
            image: "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/2401/gallery/uz-ru-galaxy-s24-s928-sm-s928bzkgskz-thumb-539398220?$172_172_PNG$",
            name: "Samsung Galaxy S24 Ultra",
            colors: [
                "Phantom Black",
                "Phantom White",
                "Phantom Silver",
                "Phantom Brown",
            ],
            price: 1800,
            count: 8,
            brandName: "Samsung",
        },
        {
            id: 50,
            image: "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/2401/gallery/uz-ru-galaxy-s24-plus-sm-s926bzvgskz-thumb-539363835?$172_172_PNG$",
            name: "Samsung Galaxy S24+",
            colors: [
                "Phantom Black",
                "Phantom White",
                "Phantom Pink",
                "Phantom Violet",
            ],
            price: 1700,
            count: 12,
            brandName: "Samsung",
        },
        {
            id: 51,
            image: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103602/P_setting_xxx_0_90_end_185.png?webp",
            name: "Asus Zenbook",
            colors: ["Royal Blue", "Pine Grey", "Lilac Mist"],
            price: 1200,
            count: 15,
            brandName: "Asus",
        },
        {
            id: 52,
            image: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103543/P_setting_xxx_0_90_end_185.png?webp",
            name: "Asus Zenbook S",
            colors: ["Jade Black", "Icicle Silver", "Rose Gold"],
            price: 1500,
            count: 10,
            brandName: "Asus",
        },
        {
            id: 53,
            image: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210107110320/P_setting_xxx_0_90_end_185.png?webp",
            name: "Asus Zenbook Duo",
            colors: ["Celestial Blue", "Royal Blue"],
            price: 1700,
            count: 8,
            brandName: "Asus",
        },
        {
            id: 54,
            image: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103628/P_setting_xxx_0_90_end_185.png?webp",
            name: "Asus Zenbook Flip",
            colors: ["Pine Grey", "Jade Black"],
            price: 1400,
            count: 12,
            brandName: "Asus",
        },
        {
            id: 55,
            image: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20220713111305/P_setting_xxx_0_90_end_185.png?webp",
            name: "Asus Zenbook Fold",
            colors: ["Glacier Silver", "Obsidian Black"],
            price: 1800,
            count: 6,
            brandName: "Asus",
        },
        {
            id: 56,
            image: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20230222110837/P_setting_xxx_0_90_end_185.png?webp",
            name: "Asus Vivobook Pro",
            colors: ["Slate Grey", "Transparent Silver", "Star Grey"],
            price: 1300,
            count: 14,
            brandName: "Asus",
        },
        {
            id: 57,
            image: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20230222110814/P_setting_xxx_0_90_end_185.png?webp",
            name: "Asus Vivobook S",
            colors: ["Gaia Green", "Resolute Red", "Dreamy White"],
            price: 1100,
            count: 18,
            brandName: "Asus",
        },
        {
            id: 58,
            image: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20230222110800/P_setting_xxx_0_90_end_185.png?webp",
            name: "Asus Vivobook",
            colors: ["Cobalt Blue", "Slate Grey", "Transparent Silver"],
            price: 1000,
            count: 20,
            brandName: "Asus",
        },
        {
            id: 59,
            image: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20230222110738/P_setting_xxx_0_90_end_185.png?webp",
            name: "Asus Vivobook Flip",
            colors: ["Peacock Blue", "Transparent Silver"],
            price: 1200,
            count: 16,
            brandName: "Asus",
        },
        {
            id: 60,
            image: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20230222110719/P_setting_xxx_0_90_end_185.png?webp",
            name: "Asus Vivobook Go",
            colors: ["Hearty Gold", "Transparent Silver", "Peacock Blue"],
            price: 900,
            count: 22,
            brandName: "Asus",
        },
        {
            id: 61,
            image: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20230222110700/P_setting_xxx_0_90_end_185.png?webp",
            name: "Asus Vivobook Slate",
            colors: ["Star Grey", "Cherry Red"],
            price: 800,
            count: 24,
            brandName: "Asus",
        },
    ];

    let searchBar = document.querySelector("#search");
    let searchBarText = "";
    let shopBtn = document.querySelector("#shop-btn");
    let shopTable = document.querySelector(".shop-table");
    let category = document.querySelector("#category");

    function renderProductCards() {
        cards.innerHTML = "";
        productCardsList.forEach((element) => {
            renderProductCard(element);
        });
    }
    renderProductCards();

    let selectedProducts = [];

    function checkingBadge(element) {
        if (element.brandName == "Redmi") {
            return "text-bg-warning";
        } else if (element.brandName == "Apple") {
            return "text-bg-success";
        } else if (element.brandName == "Samsung") {
            return "text-bg-primary";
        } else if (element.brandName == "Asus") {
            return "text-bg-emphasis";
        } else {
            return "text-bg-danger";
        }
    }

    function chooseProduct(element) {
        let existingProduct = selectedProducts.find(
            (item) => item.id === element.id
        );
        if (existingProduct) {
            // Product already exists, increment count
            existingProduct.count++;
        } else {
            // Product does not exist, add as new item
            selectedProducts.push({ ...element, count: 1 }); // Add count property
        }
        localStorage.setItem(
            "selectedProducts",
            JSON.stringify(selectedProducts)
        );
        updateShoppingCart();
    }

    function updateShoppingCart() {
        try {
            let selectedProducts1 = JSON.parse(
                localStorage.getItem("selectedProducts")
            );
            let shopTable = document.querySelector(".shop-table");
            shopTable.innerHTML = ""; // Clear previous content

            for (const product of selectedProducts1) {
                let stroke = document.createElement("tr");
                let row1 = document.createElement("td");
                row1.textContent = product.id;
                let row2 = document.createElement("td");
                row2.textContent = product.name;
                let row3 = document.createElement("td");
                row3.textContent = product.colors.join(", ");
                let row4 = document.createElement("td");
                row4.textContent = product.count;
                let row5 = document.createElement("td");
                row5.textContent = product.price + "$";
                let row6 = document.createElement("td");
                let removeBtn = document.createElement("button");
                removeBtn.textContent = "Remove";
                removeBtn.classList.add("btn", "btn-danger", "btn-sm");
                removeBtn.onclick = () => removeProduct(product);
                row6.appendChild(removeBtn);
                stroke.appendChild(row1);
                stroke.appendChild(row2);
                stroke.appendChild(row3);
                stroke.appendChild(row4);
                stroke.appendChild(row5);
                stroke.appendChild(row6);
                shopTable.appendChild(stroke);
            }
        } catch (e) {
            console.error(e);
        }
    }

    function removeProduct(element) {
        let existingProductIndex = selectedProducts.findIndex(
            (item) => item.id === element.id
        );
        if (existingProductIndex !== -1) {
            // Product exists in the cart
            let existingProduct = selectedProducts[existingProductIndex];
            if (existingProduct.count > 1) {
                // Decrement count by one
                existingProduct.count--;
            } else {
                // If count is 1, remove the entire product
                selectedProducts.splice(existingProductIndex, 1);
            }
            localStorage.setItem(
                "selectedProducts",
                JSON.stringify(selectedProducts)
            );
            updateShoppingCart();
        }
    }

    function renderProductCard(element) {
        let cardWrapper = document.createElement("div");
        cardWrapper.classList.add("col-md-3", "col-sm-4");
        cards.appendChild(cardWrapper);
        let card = document.createElement("div");
        card.classList.add("card", "my-3", "p-3");
        cardWrapper.appendChild(card);
        let cardImage = document.createElement("img");
        cardImage.src = element.image;
        cardImage.alt = "";
        cardImage.classList.add("card-img-top");
        cardImage.style.width = "100%";
        card.appendChild(cardImage);
        let cardBadge = document.createElement("span");
        cardBadge.classList.add("badge", `${checkingBadge(element)}`, "my-3");
        cardBadge.style.width = "5vw";
        cardBadge.innerHTML = element.brandName;
        card.appendChild(cardBadge);
        let cardTitle = document.createElement("h3");
        cardTitle.classList.add("card-title", "py-3");
        cardTitle.innerHTML = element.name;
        card.appendChild(cardTitle);
        let colorsWrapper = document.createElement("div");
        colorsWrapper.classList.add("colors-wrapper");
        card.appendChild(colorsWrapper);

        for (const color of element.colors) {
            let colorElement = document.createElement("span");
            colorElement.classList.add("card-color");
            colorElement.style.backgroundColor = color;
            colorsWrapper.appendChild(colorElement);
        }

        let priceWord = document.createElement("h4");
        priceWord.classList.add("price-word", "my-2");
        priceWord.innerHTML = `Price: ${element.price}$`;
        card.appendChild(priceWord);

        let buyBtn = document.createElement("button");
        buyBtn.classList.add("btn", "btn-success", "fw-medium");
        buyBtn.innerHTML = "Add To Card >>>";
        buyBtn.dataset.productId = element.id;
        buyBtn.addEventListener("click", function () {
            chooseProduct(element);
        });
        card.appendChild(buyBtn);
    }
});
