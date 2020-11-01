
var card = { securityCode: "666", number: "4539666666666666", type: "001", expirationMonth: "10", expirationYear: "2021" };
var keyId = 'eyJraWQiOiJsbiIsImFsZyI6IlJTMjU2In0.eyJmbHgiOnsicGF0aCI6Ii9mbGV4L3YyL3Rva2VucyIsImRhdGEiOiJ6d25FalhtQVN0dGhwR1BYSTY0cWl4QUFFQko5bnQ5ZEI4ZnZrdjBxSlN6UHk4STFodTA0bWM5VkdsS0labzg3TlF3a29LaTk1OTUxOWFtYlY1RHF2WDJhU3FuUmR1UWt2aGZ6QzFqcG1abDZtVFNzZllsZkpwcDR2dUpVSkhKNW0zUnMiLCJvcmlnaW4iOiJodHRwczovL2ZsZXguY3liZXJzb3VyY2UuY29tIiwiandrIjp7Imt0eSI6IlJTQSIsImUiOiJBUUFCIiwidXNlIjoiZW5jIiwibiI6IjBSSHR6Sl9FRkRxRG1BWmY4TklfbjNjRzV5ZTZ3cmlSSW9YNnlVeWRWQ1l4bWhGcXVteDhpSlFQNUJCWTdRSktsQ2NTWEN3ZWZDOEJmSjhrVmFac09PTHowRTNqRGtjclFhdlkyamJNdm0zX2xFeGl3ckVFenIwdlVJNGczTm5qQm96Nm12ZTFrRWdNY1JLMjc1TXpHTUdta2Z0LUwwSVVpT2xhOUFzR3hGQnZSc0VVTDZMVHRYcTZPd0txbUh1NV9UZ2VSWE4zUldEdl9jUkdDcUMyUWVoMmJhd1JyQmtaZHE3M001OVZ2WGVycDlqVmV3RjZVZHhSWEI1aFdINUVWenl4WDQ4b1FTQVVzR0l1QVkzczJYa2JRdXR2MTFHTXUxRjRPbTZKT0JUV0thSlBWX2IwWVV4amNkcHB2RVpZWVNnRjlUZkFjajZITG9XNjJ2aHRsdyIsImtpZCI6IjAzWWR4UHhZQUxzTmFTOUdTVm1hd3pISU9ZckEzYjNnIn19LCJjdHgiOlt7ImRhdGEiOnsidGFyZ2V0T3JpZ2lucyI6WyJodHRwczovL3d3dy5wb2tlbW9uY2VudGVyLmNvbSIsImh0dHBzOi8vdGVzdC5wb2tlbW9uY2VudGVyLmNvbSIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCJdLCJtZk9yaWdpbiI6Imh0dHBzOi8vZmxleC5jeWJlcnNvdXJjZS5jb20ifSwidHlwZSI6Im1mLTAuMTEuMCJ9XSwiaXNzIjoiRmxleCBBUEkiLCJleHAiOjE2MDQxMDUyNTMsImlhdCI6MTYwNDEwNDM1MywianRpIjoicm5YNXRDSWJMUHYyZzN6TCJ9.fmsy86U2OfMVIzU5y7gh09wkov90TM-G6S4xNjCOdBfHDyfWl19SAD2A9DG2aVqZsyBAp5TX5osF-TIkDBFka5_qM8s5k1yixDir0vjcxY3rX3878JUR34Bq5bJKYMmCb34ZG0L3sbx0W5OuZZAx9hKajcLndh-2pZURVBCjtWzs4kQoi_5nFXt0maZpaCrx8B0Bt4V3n2-p_Jn0gKG6EG44Wz5PISDg8C34E4WYD4X-kwx6bDYrlnmXhRCEy7-5ZgNrzZIpjZPvC7XGnx-PK0zl-8pnPYgMUCx11w_2wtSZR1umb7uwlmEzPQzZBYd3SttFVjoW3h61zxja1_-CBg';

var splitkeyId = keyId.split('.');
var header = JSON.parse(atob(splitkeyId[0]));
var body = JSON.parse(atob(splitkeyId[1]));
var decodedkeyId = { header: header, body: body, signature: splitkeyId[2]};

function arrayBufferToString(e) {
    return String.fromCharCode.apply(null, new Uint8Array(e))
}

function stringToArrayBuffer(e) {
    for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t), r = 0, o = e.length; r < o; r += 1) n[r] = e.charCodeAt(r);
    return t
}

function r(e) {
    return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

function u() {
    return window.crypto.subtle.generateKey({
        name: "AES-GCM",
        length: 256
    }, !0, ["encrypt"])
}

function s(e, t, n, o) {
    var a = {
        name: "AES-GCM",
        iv: o,
        additionalData: stringToArrayBuffer(r(JSON.stringify(n))),
        tagLength: 128
    };
    return window.crypto.subtle.encrypt(a, t, stringToArrayBuffer(JSON.stringify(e))).then(function (e) {
        return [e, t]
    })
}

var l = function () {
    function e(e, t) {
        var n = [],
            r = !0,
            o = !1,
            a = void 0;
        try {
            for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
        } catch (e) {
            o = !0, a = e
        } finally {
            try {
                !r && u.return && u.return()
            } finally {
                if (o) throw a
            }
        }
        return n
    }
    return function (t, n) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}();

function o(e) {
    var t = e;
    var h = {
        name: "RSA-OAEP",
        hash: {
            name: "SHA-1"
        }
    }
    return /Edge/.test(window.navigator.userAgent) && delete t.use, window.crypto.subtle.importKey("jwk", t, h, !1, ["wrapKey"])
}

function a(e, t) {
    return o(t).then(function (t) {
        return window.crypto.subtle.wrapKey("raw", e, t, {
            name: "RSA-OAEP",
            hash: {
                name: "SHA-1"
            }
        })
    })
}

function i(e, t, n, o, i) {
    var u = e.byteLength - (128 + 7 >> 3);
    return a(t, i).then(function (t) {
        return [r(JSON.stringify(o)), r(arrayBufferToString(t)), r(arrayBufferToString(n)), r(arrayBufferToString(e.slice(0, u))), r(arrayBufferToString(e.slice(u)))].join(".")
    })
}

function c(e, t, n, r) {
        var o = {
                kid: t.body.flx.jwk.kid || "",
                alg: "RSA-OAEP",
                enc: "A256GCM"
            },
            a = {
                data: e,
                context: n,
                index: r
            },
            c = crypto.getRandomValues(new Uint8Array(12));
        return u().then(function (e) {
            //a = payload, e = key, o = header, c = IV
            return s(a, e, o, c)
        }).then(function (e) {
            var n = l(e, 2);
            return i(n[0], n[1], c, o, t.body.flx.jwk || "")
        })
    }

var a = await c(card, decodedkeyId, keyId, 0);
console.log(a);
