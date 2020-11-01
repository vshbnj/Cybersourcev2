var r = [{
            name: "visa",
            brandedName: "Visa",
            cybsCardType: "001",
            spaces: [4, 8, 12],
            lengths: [13, 14, 15, 16, 17, 18, 19],
            securityCode: {
                name: "CVV",
                length: 3
            },
            luhn: !0,
            binRange: [4]
        }, {
            name: "mastercard",
            brandedName: "MasterCard",
            cybsCardType: "002",
            spaces: [4, 8, 12],
            lengths: [16],
            securityCode: {
                name: "CVC",
                length: 3
            },
            luhn: !0,
            binRange: [
                [51, 55],
                [2221, 2720]
            ]
        }, {
            name: "amex",
            brandedName: "American Express",
            cybsCardType: "003",
            spaces: [4, 10],
            lengths: [15],
            securityCode: {
                name: "CID",
                length: 4
            },
            luhn: !0,
            binRange: [34, 37]
        }, {
            name: "maestro",
            brandedName: "Maestro",
            cybsCardType: "042",
            spaces: [4, 8, 12],
            lengths: [12, 13, 14, 15, 16, 17, 18, 19],
            securityCode: {
                name: "CVC",
                length: 3
            },
            luhn: !0,
            binRange: [50, [5600, 6010],
                [60111, 60111],
                [601150, 601173],
                [601175, 601176],
                [601180, 601185],
                [601200, 622125],
                [622926, 623999],
                [6270, 6281],
                [6289, 6439],
                [66, 69]
            ]
        }, {
            name: "discover",
            brandedName: "Discover",
            cybsCardType: "004",
            spaces: [4, 8, 12],
            lengths: [16, 19],
            securityCode: {
                name: "CID",
                length: 3
            },
            luhn: !0,
            binRange: [60110, [60112, 60114],
                [601174, 601174],
                [601177, 601179],
                [601186, 601199],
                [622126, 622925],
                [644, 659],
                [81e4, 817199]
            ]
        }, {
            name: "diners-club",
            brandedName: "Diners Club",
            cybsCardType: "005",
            spaces: [4, 10],
            lengths: [14, 16],
            securityCode: {
                name: "CVV",
                length: 3
            },
            luhn: !0,
            binRange: [
                [300, 305], 3095, 36, [38, 39]
            ]
        }, {
            name: "jcb",
            brandedName: "JCB",
            cybsCardType: "007",
            spaces: [4, 8, 12],
            lengths: [16],
            securityCode: {
                name: "CVV",
                length: 3
            },
            luhn: !0,
            binRange: [
                [3528, 3589]
            ]
        }, {
            name: "cup",
            brandedName: "China UnionPay",
            cybsCardType: "062",
            spaces: [4, 8, 12],
            lengths: [16, 19],
            securityCode: {
                name: "CVN2",
                length: 3
            },
            luhn: !0,
            binRange: [
                [62e4, 629999],
                [81e4, 817199]
            ]
        }];
