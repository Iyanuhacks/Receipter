(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
    .push([
    [888], {
        6840: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || [])
                .push(["/_app", function() {
                return t(7571)
            }])
        },
        7571: function(e, n, t) {
            "use strict";

            function r(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }
            function i(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {}, i = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t)
                        .filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e)
                            .enumerable
                    })))), i.forEach((function(n) {
                        r(e, n, t[n])
                    }))
                }
                return e
            }
            t.r(n), t.d(n, {
                default: function() {
                    return s
                }
            });
            var o = t(5893),
                c = t(9008),
                a = t.n(c);

            function s(e) {
                var n = e.Component,
                    t = e.pageProps;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)(a(), {
                        children: [(0, o.jsx)("meta", {
                            charSet: "utf-8"
                        }), (0, o.jsx)("meta", {
                            httpEquiv: "X-UA-Compatible",
                            content: "IE=edge"
                        }), (0, o.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                        }), (0, o.jsx)("meta", {
                            name: "description",
                            content: "Description"
                        }), (0, o.jsx)("meta", {
                            name: "keywords",
                            content: "Keywords"
                        }), (0, o.jsx)("title", {
                            children: "Receipter"
                        }), (0, o.jsx)("link", {
                            rel: "manifest",
                            href: "/manifest.json"
                        }), (0, o.jsx)("link", {
                            href: "/icons/favicon-16x16.png",
                            rel: "icon",
                            type: "image/png",
                            sizes: "16x16"
                        }), (0, o.jsx)("link", {
                            href: "/icons/favicon-32x32.png",
                            rel: "icon",
                            type: "image/png",
                            sizes: "32x32"
                        }), (0, o.jsx)("link", {
                            rel: "apple-touch-icon",
                            href: "/apple-icon.png"
                        }), (0, o.jsx)("meta", {
                            name: "theme-color",
                            content: "#317EFB"
                        }), (0, o.jsx)("meta", {
                            name: "tlsdk",
                            content: "e46425836f7640d2bf6000f4190d9b1a"
                        })]
                    }), (0, o.jsx)(n, i({}, t))]
                })
            }
            t(906)
        },
        906: function() {},
        9008: function(e, n, t) {
            e.exports = t(5443)
        }
    },
    function(e) {
        var n = function(n) {
            return e(e.s = n)
        };
        e.O(0, [774, 179], (function() {
            return n(6840), n(387)
        }));
        var t = e.O();
        _N_E = t
    }]);