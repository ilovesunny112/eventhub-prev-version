(function () {
    "use strict";
    /**
     * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
     * Released under MIT license, http://github.com/requirejs/almond/LICENSE
     */
    var requirejs, require, define, __extends;
    (function (n) {
        function r(n, t) {
            return w.call(n, t)
        }

        function s(n, t) {
            var o, s, f, e, h, p, c, b, r, l, w, k, u = t && t.split("/"),
                a = i.map,
                y = a && a["*"] || {};
            if (n) {
                for (n = n.split("/"),
                    h = n.length - 1,
                    i.nodeIdCompat && v.test(n[h]) && (n[h] = n[h].replace(v, "")),
                    n[0].charAt(0) === "." && u && (k = u.slice(0, u.length - 1),
                        n = k.concat(n)),
                    r = 0; r < n.length; r++)
                    if (w = n[r],
                        w === ".")
                        n.splice(r, 1),
                        r -= 1;
                    else if (w === "..")
                    if (r === 0 || r === 1 && n[2] === ".." || n[r - 1] === "..")
                        continue;
                    else
                        r > 0 && (n.splice(r - 1, 2),
                            r -= 2);
                n = n.join("/")
            }
            if ((u || y) && a) {
                for (o = n.split("/"),
                    r = o.length; r > 0; r -= 1) {
                    if (s = o.slice(0, r).join("/"),
                        u)
                        for (l = u.length; l > 0; l -= 1)
                            if (f = a[u.slice(0, l).join("/")],
                                f && (f = f[s],
                                    f)) {
                                e = f;
                                p = r;
                                break
                            }
                    if (e)
                        break;
                    !c && y && y[s] && (c = y[s],
                        b = r)
                }!e && c && (e = c,
                    p = b);
                e && (o.splice(0, p, e),
                    n = o.join("/"))
            }
            return n
        }

        function y(t, i) {
            return function () {
                var r = b.call(arguments, 0);
                return typeof r[0] != "string" && r.length === 1 && r.push(null),
                    u.apply(n, r.concat([t, i]))
            }
        }

        function k(n) {
            return function (t) {
                return s(t, n)
            }
        }

        function d(n) {
            return function (i) {
                t[n] = i
            }
        }

        function h(i) {
            if (r(e, i)) {
                var u = e[i];
                delete e[i];
                l[i] = !0;
                o.apply(n, u)
            }
            if (!r(t, i) && !r(l, i))
                throw new Error("No " + i);
            return t[i]
        }

        function a(n) {
            var i, t = n ? n.indexOf("!") : -1;
            return t > -1 && (i = n.substring(0, t),
                n = n.substring(t + 1, n.length)), [i, n]
        }

        function p(n) {
            return n ? a(n) : []
        }

        function g(n) {
            return function () {
                return i && i.config && i.config[n] || {}
            }
        }
        var o, u, c, f, t = {},
            e = {},
            i = {},
            l = {},
            w = Object.prototype.hasOwnProperty,
            b = [].slice,
            v = /\.js$/;
        c = function (n, t) {
            var r, u = a(n),
                i = u[0],
                f = t[1];
            return n = u[1],
                i && (i = s(i, f),
                    r = h(i)),
                i ? n = r && r.normalize ? r.normalize(n, k(f)) : s(n, f) : (n = s(n, f),
                    u = a(n),
                    i = u[0],
                    n = u[1],
                    i && (r = h(i))), {
                    f: i ? i + "!" + n : n,
                    n: n,
                    pr: i,
                    p: r
                }
        };
        f = {
            require: function (n) {
                    return y(n)
                },
                exports: function (n) {
                    var i = t[n];
                    return typeof i != "undefined" ? i : t[n] = {}
                },
                module: function (n) {
                    return {
                        id: n,
                        uri: "",
                        exports: t[n],
                        config: g(n)
                    }
                }
        };
        o = function (i, u, o, s) {
            var b, a, g, k, v, nt, w = [],
                tt = typeof o,
                it;
            if (s = s || i,
                nt = p(s),
                tt === "undefined" || tt === "function") {
                for (u = !u.length && o.length ? ["require", "exports", "module"] : u,
                    v = 0; v < u.length; v += 1)
                    if (k = c(u[v], nt),
                        a = k.f,
                        a === "require")
                        w[v] = f.require(i);
                    else if (a === "exports")
                    w[v] = f.exports(i),
                    it = !0;
                else if (a === "module")
                    b = w[v] = f.module(i);
                else if (r(t, a) || r(e, a) || r(l, a))
                    w[v] = h(a);
                else if (k.p)
                    k.p.load(k.n, y(s, !0), d(a), {}),
                    w[v] = t[a];
                else
                    throw new Error(i + " missing " + a);
                g = o ? o.apply(t[i], w) : undefined;
                i && (b && b.exports !== n && b.exports !== t[i] ? t[i] = b.exports : g === n && it || (t[i] = g))
            } else
                i && (t[i] = o)
        };
        requirejs = require = u = function (t, r, e, s, l) {
            if (typeof t == "string")
                return f[t] ? f[t](r) : h(c(t, p(r)).f);
            if (!t.splice) {
                if (i = t,
                    i.deps && u(i.deps, i.callback), !r)
                    return;
                r.splice ? (t = r,
                    r = e,
                    e = null) : t = n
            }
            return r = r || function () {},
                typeof e == "function" && (e = s,
                    s = l),
                s ? o(n, t, r, e) : setTimeout(function () {
                    "use strict";
                    o(n, t, r, e)
                }, 4),
                u
        };
        u.config = function (n) {
            return u(n)
        };
        requirejs._defined = t;
        define = function (n, i, u) {
            if (typeof n != "string")
                throw new Error("See almond README: incorrect module build, no module name");
            i.splice || (u = i,
                i = []);
            r(t, n) || r(e, n) || (e[n] = [n, i, u])
        };
        define.amd = {
            jQuery: !0
        }
    })();
    define("pageBehaviors", ["require", "exports", "htmlExtensions", "removeFocus"], function (n, t, i, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function () {
            function n() {
                i.removeClass(document.documentElement, "no-js");
                i.addClass(document.documentElement, "js");
                i.hasClass(document.body, "c_native") && window.navigator && typeof window.navigator.gamepadInputEmulation == "string" && (window.navigator.gamepadInputEmulation = "keyboard");
                r.setupRemoveFocus()
            }
            return n.typeName = "PageBehaviors",
                n
        }();
        t.PageBehaviors = u
    });
    require(["pageBehaviors", "componentFactory"], function (n, t) {
        t.ComponentFactory && t.ComponentFactory.create && t.ComponentFactory.create([{
            component: n.PageBehaviors
        }])
    });
    define("removeFocus", ["require", "exports", "htmlExtensions"], function (n, t, i) {
        function e() {
            return f ? !1 : (f = !0,
                i.addEvent(document.body, i.eventTypes.mousedown, s),
                i.addEvents(document.body, "blur keydown", o), !0)
        }

        function o() {
            i.removeClass(r, u);
            r.length = 0
        }

        function s(n) {
            var t = i.getEventTargetOrSrcElement(n);
            i.addClass(t, u);
            r.push(t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = "x-hidden-focus",
            f = !1,
            r = [];
        t.setupRemoveFocus = e
    });
    define("componentFactory", ["require", "exports", "htmlExtensions", "utility", "stringExtensions"], function (n, t, i, r, u) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = function () {
            function n() {}
            return n.create = function (t) {
                    for (var i, r = 0, u = t; r < u.length; r++) {
                        if (i = u[r], !i.c && !i.component)
                            throw "factoryInput should has either component or c to tell the factory what component to create.Eg.ComponentFactory.create([{ c: Carousel] or ComponentFactory.create([component: Carousel]))";
                        n.createComponent(i.component || i.c, i)
                    }
                },
                n.createComponent = function (t, r) {
                    if (t) {
                        var o = r && r.eventToBind ? r.eventToBind : "",
                            f = r && r.selector ? r.selector : t.selector,
                            s = r && r.context ? r.context : null,
                            u = [],
                            e = function (n, f, e) {
                                var a, c, l, o, h;
                                for (a = r.elements ? r.elements : f ? i.selectElementsT(f, s) : [document.body],
                                    c = 0,
                                    l = a; c < l.length; c++)
                                    o = l[c],
                                    o.mwfInstances || (o.mwfInstances = {}),
                                    o.mwfInstances[n] ? u.push(o.mwfInstances[n]) : (h = new t(o, e), (!h.isObserving || h.isObserving()) && (o.mwfInstances[n] = h,
                                        u.push(h)))
                            };
                        switch (o) {
                        case "DOMContentLoaded":
                            if (n.onDomReadyHappened)
                                n.callBindFunction(t, f, e, r, u);
                            else {
                                n.domReadyFunctions.push(function () {
                                    return n.callBindFunction(t, f, e, r, u)
                                });
                                break
                            }
                            break;
                        case "load":
                        default:
                            if (n.onDeferredHappened)
                                n.callBindFunction(t, f, e, r, u);
                            else {
                                n.deferredFunctions.push(function () {
                                    return n.callBindFunction(t, f, e, r, u)
                                });
                                break
                            }
                        }
                    }
                },
                n.callBindFunction = function (t, i, u, f, e) {
                    f === void 0 && (f = null);
                    var o = n.getTypeName(t),
                        s = o || i || "",
                        h = f && f.params ? f.params : {};
                    h.mwfClass = o;
                    r.createPerfMarker(s + "_Begin");
                    u(o, i, h);
                    r.createPerfMarker(s + "_End");
                    f && f.callback && f.callback(e)
                },
                n.getTypeName = function (t) {
                    if (t.typeName)
                        return t.typeName;
                    if (t.name)
                        return t.name;
                    var i = n.typeNameRegEx.exec(t.toString());
                    if (i && i.length > 1)
                        return i[1]
                },
                n.enumerateComponents = function (n, t) {
                    var i, r, u;
                    if (n && t) {
                        i = n.mwfInstances;
                        for (r in i)
                            if (i.hasOwnProperty(r) && (u = i[r],
                                u && !t(r, u)))
                                break
                    }
                },
                n.detach = function (n, t) {
                    var i = n,
                        r;
                    i && i.mwfInstances && !u.isNullOrWhiteSpace(t) && i.mwfInstances.hasOwnProperty(t) && (r = i.mwfInstances[t],
                        i.mwfInstances[t] = null,
                        r && r.detach && r.detach())
                },
                n.typeNameRegEx = /function\s+(\S+)\s*\(/,
                n.onLoadTimeoutMs = 6e3,
                n.onDeferredHappened = !1,
                n.deferredFunctions = [],
                n.onDomReadyHappened = !1,
                n.domReadyFunctions = [],
                n
        }();
        t.ComponentFactory = f,
            function () {
                i.onDeferred(function () {
                    var n, t, r, u;
                    if (f.onDeferredHappened = !0,
                        n = f.deferredFunctions, !n || n.length > 0)
                        for (t = 0,
                            r = n; t < r.length; t++)
                            u = r[t],
                            typeof u == "function" && i.SafeBrowserApis.requestAnimationFrame.call(window, u);
                    f.deferredFunctions = null
                }, f.onLoadTimeoutMs);
                i.documentReady(function () {
                    var n, t, r, u;
                    if (f.onDomReadyHappened = !0,
                        n = f.domReadyFunctions, !n || n.length > 0)
                        for (t = 0,
                            r = n; t < r.length; t++)
                            u = r[t],
                            typeof u == "function" && i.SafeBrowserApis.requestAnimationFrame.call(window, u);
                    f.domReadyFunctions = null
                }, f.onLoadTimeoutMs)
            }()
    });
    define("htmlExtensions", ["require", "exports", "stringExtensions"], function (n, t, i) {
        function e(n, t, i, f) {
            var e, o, s;
            for (f === void 0 && (f = !1),
                e = 0,
                o = u(n); e < o.length; e++)
                s = o[e],
                y(s, i, f, r[t])
        }

        function g(n, t, r, f) {
            var e, s, l, o, h, c;
            if (f === void 0 && (f = !1), !i.isNullOrWhiteSpace(t))
                for (e = 0,
                    s = u(n); e < s.length; e++)
                    for (l = s[e],
                        o = 0,
                        h = t.split(/\s+/); o < h.length; o++)
                        c = h[o],
                        i.isNullOrWhiteSpace(c) || y(l, r, f, c)
        }

        function nt(n, t, r, f) {
            var e, s, l, o, h, c;
            for (f === void 0 && (f = !1),
                e = 0,
                s = u(n); e < s.length; e++)
                for (l = s[e],
                    o = 0,
                    h = u(t); o < h.length; o++)
                    c = h[o],
                    i.isNullOrWhiteSpace(c) || d(l, r, f, c)
        }

        function tt(n) {
            n = v(n);
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        }

        function it(n, t, i, r) {
            r === void 0 && (r = 150);
            var f, u = 0,
                o = function (n) {
                    var t = Date.now();
                    clearTimeout(f);
                    !!u && t < u + r ? f = setTimeout(function () {
                        u = t;
                        i(n)
                    }, r - (t - u)) : (u = t,
                        i(n))
                };
            return e(n, t, o),
                o
        }

        function rt(n, t, r, f, e) {
            function p(n) {
                var i, t = 0;
                return function (r) {
                    var u = Date.now();
                    clearTimeout(i);
                    !!t && u < t + e ? i = setTimeout(function () {
                        t = u;
                        n(r)
                    }, e - (u - t)) : (t = u,
                        n(r))
                }
            }
            var o, h, a, s, c, l, v;
            if (f === void 0 && (f = !1),
                e === void 0 && (e = 150), !i.isNullOrWhiteSpace(t))
                for (o = 0,
                    h = u(n); o < h.length; o++)
                    for (a = h[o],
                        s = 0,
                        c = t.split(/\s+/); s < c.length; s++)
                        l = c[s],
                        i.isNullOrWhiteSpace(l) || (v = p(r),
                            y(a, v, f, l))
        }

        function ut(n, t, i, r) {
            r === void 0 && (r = 150);
            var u, f = function (n) {
                window.clearTimeout(u);
                u = setTimeout(function () {
                    i(n)
                }, r)
            };
            return e(n, t, f),
                f
        }

        function ft(n, t) {
            if (t === void 0 && (t = 5e3),
                document.readyState === "complete") {
                n.call(null);
                return
            }
            if (!document.attachEvent && document.readyState === "interactive") {
                n.call(null);
                return
            }
            var o, i, u, f = function () {
                clearTimeout(o);
                i && c(document, r.DOMContentLoaded, i);
                u && c(document, r.onreadystatechange, u);
                l.requestAnimationFrame.call(window, n)
            };
            if (o = setTimeout(function () {
                    f("timedout")
                }, t),
                document.addEventListener) {
                i = function () {
                    f("domcontentloaded")
                };
                e(document, r.DOMContentLoaded, i, !1);
                return
            }
            document.attachEvent && (u = function () {
                    document.readyState === "complete" && f("readystatecomplete")
                },
                e(document, r.onreadystatechange, u, !1))
        }

        function et(n, t) {
            t === void 0 && (t = 5e3);
            var i, u = setTimeout(function () {
                clearTimeout(u);
                c(window, r.load, i);
                n.call(null)
            }, t);
            i = function () {
                clearTimeout(u);
                l.requestAnimationFrame.call(window, n)
            };
            document.readyState === "complete" ? (clearTimeout(u),
                n.call(null)) : e(window, r.load, i)
        }

        function p(n, t) {
            !n || i.isNullOrWhiteSpace(t) || b(n, t) || (n.classList ? n.classList.add(t) : n.className = i.trim(n.className + " " + t))
        }

        function w(n, t) {
            var o, f, s, e, r;
            if (!!n && !i.isNullOrWhiteSpace(t))
                for (o = " " + i.trim(t) + " ",
                    f = 0,
                    s = u(n); f < s.length; f++)
                    if (e = s[f], !i.isNullOrWhiteSpace(e.className)) {
                        for (r = " " + e.className + " "; r.indexOf(o) > -1;)
                            r = r.replace(o, " ");
                        e.className = i.trim(r)
                    }
        }

        function ot(n, t) {
            var i, r, u;
            if (t)
                for (i = 0,
                    r = t; i < r.length; i++)
                    u = r[i],
                    w(n, u)
        }

        function st(n, t) {
            var i, r, u;
            if (t)
                for (i = 0,
                    r = t; i < r.length; i++)
                    u = r[i],
                    p(n, u)
        }

        function ht(n, t) {
            var u, f, r;
            if (n && t)
                for (u = 0,
                    f = t; u < f.length; u++)
                    r = f[u],
                    i.isNullOrWhiteSpace(r.name) || i.isNullOrWhiteSpace(r.value) || n.setAttribute(r.name, r.value)
        }

        function b(n, t) {
            return !n || i.isNullOrWhiteSpace(t) || i.isNullOrWhiteSpace(n.className) ? !1 : (" " + n.className + " ").indexOf(" " + i.trim(t) + " ") > -1
        }

        function ct(n) {
            return n ? n.parentElement.removeChild(n) : n
        }

        function lt(n, t) {
            return h(n, t)
        }

        function at(n, t) {
            var i = h(n, t);
            return !i || !i.length ? null : i[0]
        }

        function h(n, t) {
            var r, u;
            if (i.isNullOrWhiteSpace(n) || n === "#")
                return [];
            if (r = t || document,
                /^[\#.]?[\w-]+$/.test(n)) {
                switch (n[0]) {
                case ".":
                    return r.getElementsByClassName ? o(r.getElementsByClassName(n.slice(1))) : o(r.querySelectorAll(n));
                case "#":
                    return u = r.querySelector(n),
                        u ? [u] : []
                }
                return o(r.getElementsByTagName(n))
            }
            return o(r.querySelectorAll(n))
        }

        function vt(n, t) {
            var i = h(n, t);
            return !i || !i.length ? null : i[0]
        }

        function yt(n, t) {
            var o = t || document,
                u, f, i, r, e;
            for (u = n.split(","),
                i = 0,
                r = u; i < r.length; i++)
                e = r[i],
                f += this.selectElements(e, o);
            return f
        }

        function o(n) {
            var i, t;
            if (!n)
                return [];
            for (i = [],
                t = 0; t < n.length; t++)
                i.push(n[t]);
            return i
        }

        function pt(n) {
            for (n === void 0 && (n = document.documentElement); n !== null;) {
                var t = n.getAttribute("dir");
                if (!t)
                    n = n.parentElement;
                else
                    return t === "rtl" ? s.right : s.left
            }
            return s.left
        }

        function a(n) {
            var i, t, r;
            if (n) {
                i = n.getBoundingClientRect();
                t = {};
                for (r in i)
                    t[r] = i[r];
                return typeof t.width == "undefined" && (t.width = n.offsetWidth),
                    typeof t.height == "undefined" && (t.height = n.offsetHeight),
                    t
            }
        }

        function wt(n) {
            if (n)
                return {
                    width: parseFloat(a(n).width) + parseFloat(f(n, "margin-left")) + parseFloat(f(n, "margin-right")),
                    height: parseFloat(a(n).height) + parseFloat(f(n, "margin-top")) + parseFloat(f(n, "margin-bottom"))
                }
        }

        function f(n, t, r) {
            if (!n)
                return null;
            if (!r && r !== "")
                return r = n.style[t],
                    i.isNullOrWhiteSpace(r) && (r = getComputedStyle(n),
                        r = r[t]),
                    r;
            n.style[t] = r
        }

        function c(n, t, i, f) {
            var e, o, s;
            if (n && t && i)
                for (e = 0,
                    o = u(n); e < o.length; e++)
                    s = o[e],
                    d(s, i, f, r[t])
        }

        function k(n) {
            return Array.isArray ? Array.isArray(n) : {}.toString.call(n) === "[object Array]"
        }

        function u(n) {
            return k(n) ? n : [n]
        }

        function bt(n, t) {
            return !!n && n !== t && n.contains(t)
        }

        function kt(n, t) {
            return !!n && n.contains(t)
        }

        function dt(n) {
            return !n ? "" : n.textContent || n.innerText || ""
        }

        function gt(n, t) {
            !n || t === null || (n.textContent ? n.textContent = t : n.innerHTML = t)
        }

        function ni(n) {
            n && (n.innerHTML = "")
        }

        function ti(n) {
            return n = v(n),
                n.target || n.srcElement
        }

        function v(n) {
            return n || window.event
        }

        function y(n, t, i, r) {
            i === void 0 && (i = !1);
            !n || (window.addEventListener ? n.addEventListener(r, t, i) : n.attachEvent("on" + r, t))
        }

        function d(n, t, i, r) {
            i === void 0 && (i = !1);
            !n || (window.removeEventListener ? n.removeEventListener(r, t, i) : n.detachEvent("on" + r, t))
        }

        function ii(n, t, i) {
            if (i === void 0 && (i = {}), !n || !t)
                return null;
            var f = typeof t == "string" ? t : r[t],
                u = null;
            if (i.bubbles = typeof i.bubbles == "undefined" ? !0 : i.bubbles,
                i.cancelable = typeof i.cancelable == "undefined" ? !0 : i.cancelable,
                window.CustomEvent && typeof CustomEvent == "function")
                u = new CustomEvent(f, i);
            else if (document.createEvent)
                u = document.createEvent("CustomEvent"),
                u.initCustomEvent(f, i.bubbles, i.cancelable, i.detail);
            else {
                u = document.createEventObject();
                try {
                    n.fireEvent("on" + f, u)
                } catch (e) {
                    return undefined
                }
                return u
            }
            return n.dispatchEvent(u),
                u
        }

        function ri(n) {
            n.stopPropagation ? n.stopPropagation() : n.returnValue = !1
        }

        function ui(n) {
            return n === void 0 && (n = window),
                n.scrollY || n.pageYOffset || (n.document.compatMode === "CSS1Compat" ? n.document.documentElement.scrollTop : n.document.body.scrollTop)
        }

        function fi(n) {
            if (!n)
                return window.document.documentElement;
            for (var i = n.ownerDocument.documentElement, t = n.offsetParent; t && f(t, "position") == "static";)
                t = t.offsetParent;
            return t || i
        }

        function ei(n, t) {
            if (n && t) {
                var i = t.clientHeight,
                    r = t.scrollHeight;
                r > i && (t.scrollTop = Math.min(n.offsetTop - t.firstElementChild.offsetTop, r - i))
            }
        }

        function oi(n) {
            return n && typeof n.complete != "undefined" && typeof n.naturalHeight != "undefined" ? n && n.complete && n.naturalWidth == 0 && n.naturalHeight == 0 : !1
        }

        function si(n) {
            var i = n.touches && n.touches.length ? n.touches : [n],
                t = n.changedTouches && n.changedTouches[0] || i[0];
            return {
                x: t.clientX,
                y: t.clientY
            }
        }

        function hi(n, t) {
            for (var i = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector; n;) {
                if (i.call(n, t))
                    break;
                n = n.parentElement
            }
            return n
        }

        function ci(n, t) {
            t === void 0 && (t = !0);
            !!n && window.navigator.pointerEnabled && f(n, "touchAction", t ? "pan-y" : "pan-x")
        }
        var l, s, r;
        Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function (n) {
                n.requestAnimationFrame = window.requestAnimationFrame || function (n) {
                    typeof n == "function" && window.setTimeout(n, 16.7)
                }
            }(l = t.SafeBrowserApis || (t.SafeBrowserApis = {})),
            function (n) {
                n[n.right = 0] = "right";
                n[n.left = 1] = "left"
            }(s = t.Direction || (t.Direction = {})),
            function (n) {
                n[n.animationend = 0] = "animationend";
                n[n.blur = 1] = "blur";
                n[n.change = 2] = "change";
                n[n.click = 3] = "click";
                n[n.DOMContentLoaded = 4] = "DOMContentLoaded";
                n[n.DOMNodeInserted = 5] = "DOMNodeInserted";
                n[n.DOMNodeRemoved = 6] = "DOMNodeRemoved";
                n[n.ended = 7] = "ended";
                n[n.error = 8] = "error";
                n[n.focus = 9] = "focus";
                n[n.focusin = 10] = "focusin";
                n[n.focusout = 11] = "focusout";
                n[n.input = 12] = "input";
                n[n.load = 13] = "load";
                n[n.keydown = 14] = "keydown";
                n[n.keypress = 15] = "keypress";
                n[n.keyup = 16] = "keyup";
                n[n.loadedmetadata = 17] = "loadedmetadata";
                n[n.mousedown = 18] = "mousedown";
                n[n.mousemove = 19] = "mousemove";
                n[n.mouseout = 20] = "mouseout";
                n[n.mouseover = 21] = "mouseover";
                n[n.mouseup = 22] = "mouseup";
                n[n.onreadystatechange = 23] = "onreadystatechange";
                n[n.resize = 24] = "resize";
                n[n.scroll = 25] = "scroll";
                n[n.submit = 26] = "submit";
                n[n.timeupdate = 27] = "timeupdate";
                n[n.touchcancel = 28] = "touchcancel";
                n[n.touchend = 29] = "touchend";
                n[n.touchmove = 30] = "touchmove";
                n[n.touchstart = 31] = "touchstart";
                n[n.wheel = 32] = "wheel"
            }(r = t.eventTypes || (t.eventTypes = {}));
        t.addEvent = e;
        t.addEvents = g;
        t.removeEvents = nt;
        t.preventDefault = tt;
        t.addThrottledEvent = it;
        t.addThrottledEvents = rt;
        t.addDebouncedEvent = ut;
        t.documentReady = ft;
        t.onDeferred = et;
        t.addClass = p;
        t.removeClass = w;
        t.removeClasses = ot;
        t.addClasses = st;
        t.addAttribute = ht;
        t.hasClass = b;
        t.removeElement = ct;
        t.selectElements = lt;
        t.selectFirstElement = at;
        t.selectElementsT = h;
        t.selectFirstElementT = vt;
        t.selectElementsFromSelectors = yt;
        t.nodeListToArray = o;
        t.getDirection = pt;
        t.getClientRect = a;
        t.getClientRectWithMargin = wt;
        t.css = f;
        t.removeEvent = c;
        t.isArray = k;
        t.toArray = u;
        t.isDescendant = bt;
        t.isDescendantOrSelf = kt;
        t.getText = dt;
        t.setText = gt;
        t.removeInnerHtml = ni;
        t.getEventTargetOrSrcElement = ti;
        t.getEvent = v;
        t.customEvent = ii;
        t.stopPropagation = ri;
        t.getScrollY = ui;
        t.getOffsetParent = fi;
        t.scrollElementIntoView = ei;
        t.isImageLoadFailed = oi;
        t.getCoordinates = si;
        t.getParent = hi;
        t.preventDefaultSwipeAction = ci
    });
    define("keycodes", ["require", "exports"], function (n, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    });
    define("observableComponent", ["require", "exports", "htmlExtensions"], function (n, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function () {
            function n(t, i) {
                i === void 0 && (i = null);
                this.element = t;
                this.ignoreNextDOMChange = !1;
                this.observing = !1;
                n.shouldInitializeAsClass(t, i) && this.setObserver()
            }
            return n.prototype.detach = function () {
                    this.unObserve();
                    this.teardown()
                },
                n.prototype.isObserving = function () {
                    return this.observing
                },
                n.prototype.unObserve = function () {
                    this.observing = !1;
                    this.modernObserver && this.modernObserver.disconnect();
                    i.removeEvent(this.element, i.eventTypes.DOMNodeInserted, this.obsoleteNodeInsertedEventHander);
                    i.removeEvent(this.element, i.eventTypes.DOMNodeRemoved, this.obsoleteNodeRemovedEventHandler)
                },
                n.prototype.setObserver = function () {
                    this.observing = !0;
                    typeof n.mutationObserver != "undefined" ? this.observeModern() : "MutationEvent" in window && this.observeObsolete()
                },
                n.prototype.observeModern = function () {
                    var t = this,
                        i = function (n) {
                            t.onModernMutations(n)
                        };
                    this.modernObserver = new n.mutationObserver(i);
                    this.modernObserver.observe(this.element, {
                        childList: !0,
                        subtree: !0
                    })
                },
                n.prototype.onModernMutations = function (n) {
                    var r, u, f, e, i, o, t, s;
                    if (this.ignoreNextDOMChange) {
                        this.ignoreNextDOMChange = !1;
                        return
                    }
                    for (r = !1,
                        u = !1,
                        f = 0,
                        e = n; f < e.length; f++) {
                        for (i = e[f],
                            t = 0,
                            o = i.addedNodes.length; t < o; t++)
                            i.addedNodes[t].nodeType === Node.ELEMENT_NODE && (r = !0,
                                u = !0);
                        for (t = 0,
                            s = i.removedNodes.length; t < s; t++)
                            i.removedNodes[t].nodeType === Node.ELEMENT_NODE && (r = !0,
                                i.removedNodes[t] !== this.element && (u = !0))
                    }
                    r && this.teardown();
                    u && this.update()
                },
                n.prototype.observeObsolete = function () {
                    var n = this;
                    this.obsoleteNodeInsertedEventHander = i.addDebouncedEvent(this.element, i.eventTypes.DOMNodeInserted, function () {
                        n.onObsoleteNodeInserted()
                    });
                    this.obsoleteNodeRemovedEventHandler = i.addDebouncedEvent(this.element, i.eventTypes.DOMNodeRemoved, function (t) {
                        n.onObsoleteNodeRemoved(t)
                    })
                },
                n.prototype.onObsoleteNodeInserted = function () {
                    this.ignoreNextDOMChange || (this.teardown(),
                        this.update())
                },
                n.prototype.onObsoleteNodeRemoved = function (n) {
                    this.ignoreNextDOMChange || (this.teardown(),
                        i.getEventTargetOrSrcElement(n) !== this.element && this.update())
                },
                n.shouldInitializeAsClass = function (t, i) {
                    var r = t ? t.getAttribute(n.mwfClassAttribute) : null,
                        u = t ? t.getAttribute(n.initializeAttribute) : null;
                    return u === "false" ? !1 : !!t && (!r || !!i && r === i.mwfClass)
                },
                n.mwfClassAttribute = "data-mwf-class",
                n.initializeAttribute = "data-js-initialize",
                n.mutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                n
        }();
        t.ObservableComponent = r
    });
    __extends = this && this.__extends || function () {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (n, t) {
            n.__proto__ = t
        } || function (n, t) {
            for (var i in t)
                t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function (t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
                new r)
        }
    }();
    define("publisher", ["require", "exports", "observableComponent"], function (n, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function (n) {
            function t(t, i) {
                i === void 0 && (i = null);
                var r = n.call(this, t, i) || this;
                return r.element = t,
                    r
            }
            return __extends(t, n),
                t.prototype.subscribe = function (n) {
                    if (!n)
                        return !1;
                    if (this.subscribers) {
                        if (this.subscribers.indexOf(n) !== -1)
                            return !1
                    } else
                        this.subscribers = [];
                    return this.subscribers.push(n), !0
                },
                t.prototype.unsubscribe = function (n) {
                    if (!n || !this.subscribers || !this.subscribers.length)
                        return !1;
                    var t = this.subscribers.indexOf(n);
                    return t === -1 ? !1 : (this.subscribers.splice(t, 1), !0)
                },
                t.prototype.hasSubscribers = function () {
                    return !!this.subscribers && this.subscribers.length > 0
                },
                t.prototype.initiatePublish = function (n) {
                    var t, i, r;
                    if (this.hasSubscribers())
                        for (t = 0,
                            i = this.subscribers; t < i.length; t++)
                            r = i[t],
                            this.publish(r, n)
                },
                t.prototype.update = function () {},
                t.prototype.teardown = function () {},
                t
        }(i.ObservableComponent);
        t.Publisher = r
    });
    define("stringExtensions", ["require", "exports"], function (n, t) {
        function r(n) {
            return !n || !i(n)
        }

        function i(n) {
            return n ? n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "") : n
        }

        function u(n, t, i) {
            return (i === void 0 && (i = !0), !n || !t) ? !1 : (i && (n = n.toLocaleLowerCase(),
                    t = t.toLocaleLowerCase()),
                n.startsWith) ? n.startsWith(t) : n.indexOf(t) === 0
        }

        function f(n, t, i) {
            return (i === void 0 && (i = !0), !n || !t) ? !1 : (i && (n = n.toLocaleLowerCase(),
                    t = t.toLocaleLowerCase()),
                n.endsWith) ? n.endsWith(t) : n.lastIndexOf(t) === n.length - t.length
        }

        function e(n, t, i) {
            if (i === void 0 && (i = !0), !n || !t)
                return 0;
            var r = 0;
            for (i && (n = n.toLocaleLowerCase(),
                t = t.toLocaleLowerCase()); n.charCodeAt(r) === t.charCodeAt(r);)
                r++;
            return r
        }

        function o(n) {
            for (var i = [], t = 1; t < arguments.length; t++)
                i[t - 1] = arguments[t];
            return n.replace(/{(\d+)}/g, function (n, t) {
                if (t >= i.length)
                    return n;
                var r = i[t];
                return typeof r != "number" && !r ? "" : typeof r == "string" ? r : r.toString()
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.isNullOrWhiteSpace = r;
        t.trim = i;
        t.startsWith = u;
        t.endsWith = f;
        t.getMatchLength = e;
        t.format = o
    });
    define("utility", ["require", "exports", "stringExtensions"], function (n, t, i) {
        function r(n) {
            return !isNaN(n) && typeof n == "number"
        }

        function f() {
            return window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth
        }

        function h() {
            return window.innerHeight && document.documentElement.clientHeight ? Math.min(window.innerHeight, document.documentElement.clientHeight) : window.innerHeight || document.documentElement.clientHeight
        }

        function c(n) {
            if (n != null)
                return {
                    width: n.clientWidth,
                    height: n.clientHeight
                }
        }

        function l(n) {
            var t;
            if ((n = n || window.event, !n) || (t = n.key || n.keyIdentifier, !t))
                return t;
            switch (t) {
            case "Left":
                return "ArrowLeft";
            case "Right":
                return "ArrowRight";
            case "Up":
                return "ArrowUp";
            case "Down":
                return "ArrowDown";
            case "Esc":
                return "Escape";
            default:
                return t
            }
        }

        function a(n) {
            return n = n || window.event,
                n == null ? null : n.which || n.keyCode || n.charCode
        }

        function v(n, t, i, r, u) {
            var o = "",
                f, e;
            r && (f = new Date,
                f.setTime(f.getTime() + r * 864e5),
                o = "; expires=" + f.toUTCString());
            e = "";
            u && (e = ";domain=" + u);
            window.document.cookie = n + "=" + encodeURIComponent(t) + o + ("; path=" + i + ";") + e
        }

        function y(n) {
            var t, i;
            if (!!n)
                for (t = 0,
                    i = document.cookie.split("; "); t < i.length; t++) {
                    var r = i[t],
                        f = r.indexOf("="),
                        u = e(r.substring(0, f));
                    if (u === n)
                        return e(r.substring(u.length + 1))
                }
            return null
        }

        function e(n) {
            return n = decodeURIComponent(n.replace("/+/g", " ")),
                n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")),
                n
        }

        function p(n) {
            var u;
            if (!!n && n.length === 6) {
                var t = parseInt(n.substring(0, 2), 16),
                    i = parseInt(n.substring(2, 4), 16),
                    r = parseInt(n.substring(4, 6), 16);
                if (!isNaN(t) && !isNaN(i) && !isNaN(r))
                    return u = (t * 299 + i * 587 + r * 114) / 255e3,
                        u >= .5 ? 2 : 1
            }
            return null
        }

        function w(n, t, i) {
            return !i || !r(n) || !r(t) || !r(i.left) || !r(i.right) || !r(i.top) || !r(i.bottom) ? !1 : n >= i.left && n <= i.right && t >= i.top && t <= i.bottom
        }

        function b(n) {
            console && console.warn ? console.warn(n) : console && console.error && console.error(n)
        }

        function k(n, t) {
            if (t || !(o("item").toLowerCase().indexOf("perf_marker_global:true") < 0)) {
                /*!/#IFDEF perf_marker_global || log_define_timing */
                if (!i.isNullOrWhiteSpace(n) && window.performance && window.performance.mark) {
                    var r = n.split(" ").join("_");
                    window.performance.mark(r);
                    window.console && window.console.timeStamp && window.console.timeStamp(r);
                    /*!/#ENDIF*/
                }
            }
        }

        function d(n) {
            if (i.isNullOrWhiteSpace(n) || !window.performance || !window.performance.mark)
                return 0;
            var r = n.split(" ").join("_"),
                t = window.performance.getEntriesByName(r);
            return t && t.length ? Math.round(t[t.length - 1].startTime) : 0
        }

        function g(n, t) {
            var f;
            if (!r(n))
                return "00:00";
            f = n < 0;
            f && (n *= -1);
            var u = Math.floor(n / 3600),
                e = n % 3600,
                o = Math.floor(e / 60),
                i = "";
            return i = t ? u > 0 ? u + ":" : "00:" : u > 0 ? u + ":" : "",
                n = Math.floor(e % 60),
                i += (o < 10 ? "0" : "") + o,
                i += ":" + (n === 0 ? "00" : (n < 10 ? "0" : "") + n),
                f ? "-" + i : i
        }

        function nt(n) {
            if (!JSON || !JSON.parse)
                throw new Error("JSON.parse unsupported.");
            if (!n)
                throw new Error("Invalid json.");
            return JSON.parse(n)
        }

        function u() {
            for (var e, t, o, n, f, i, r = [], c = 0; c < arguments.length; c++)
                r[c] = arguments[c];
            if (!r || !r.length)
                return null;
            if (e = typeof r[0] == "boolean" && r[0],
                r.length < 2)
                return e ? null : r[0];
            if (e && r.length < 3)
                return r[1];
            for (t = e ? r[1] : r[0],
                o = e ? 2 : 1; o < r.length; o++)
                for (n in r[o])
                    if (r[o].hasOwnProperty(n)) {
                        if (f = r[o][n],
                            e) {
                            var s = Array.isArray ? Array.isArray(f) : {}.toString.call(f) === "[object Array]",
                                h = !!t[n] && (Array.isArray ? Array.isArray(t[n]) : {}.toString.call(t[n]) === "[object Array]"),
                                l = !s && typeof f == "object",
                                a = !h && !!t[n] && typeof t[n] == "object";
                            if (s && h) {
                                for (i = 0; i < f.length; i++)
                                    s = Array.isArray ? Array.isArray(f[i]) : {}.toString.call(f[i]) === "[object Array]",
                                    h = !!t[n][i] && (Array.isArray ? Array.isArray(t[n][i]) : {}.toString.call(t[n][i]) === "[object Array]"),
                                    l = !s && typeof f[i] == "object",
                                    a = !h && !!t[n][i] && typeof t[n][i] == "object",
                                    t[n][i] = s ? u(!0, h ? t[n][i] : [], f[i]) : l ? u(!0, a ? t[n][i] : {}, f[i]) : f[i];
                                continue
                            } else if (s) {
                                t[n] = u(!0, [], f);
                                continue
                            } else if (l) {
                                t[n] = u(!0, a ? t[n] : {}, f);
                                continue
                            }
                        }
                        t[n] = f
                    }
            return t
        }

        function tt(n, t, i, r, u) {
            var f = !i || i < 0 ? -1 : Number(new Date) + i;
            t = t || 100,
                function e() {
                    var i = n();
                    if (i && r)
                        r();
                    else {
                        if (i)
                            return;
                        if (f === -1 || Number(new Date) < f)
                            setTimeout(e, t);
                        else if (u)
                            u();
                        else
                            return
                    }
                }()
        }

        function o(n, t) {
            return t === void 0 && (t = !0),
                s(location.search, n, t)
        }

        function it(n, t, i) {
            return i === void 0 && (i = !0),
                s(n, t, i)
        }

        function s(n, t, i) {
            if (i === void 0 && (i = !0), !t || !n)
                return "";
            var r = "[\\?&]" + t.replace(/[\[\]]/g, "\\$&") + "=([^&#]*)",
                f = i ? new RegExp(r, "i") : new RegExp(r),
                u = f.exec(n);
            return u === null ? "" : decodeURIComponent(u[1].replace(/\+/g, " "))
        }

        function rt(n, t) {
            var i, r;
            if (!t)
                return n;
            if (n.indexOf("//") === -1)
                throw 'To avoid unexpected results in URL parsing, url must begin with "http://", "https://", or "//"';
            return i = document.createElement("a"),
                i.href = n,
                i.search = (i.search ? i.search + "&" : "?") + t,
                r = i.href,
                i = null,
                r
        }

        function ut(n, t) {
            if (window.sessionStorage && n && t)
                try {
                    sessionStorage.setItem(n, t)
                } catch (i) {}
        }

        function ft(n) {
            if (!window.sessionStorage || !n)
                return null;
            try {
                return sessionStorage.getItem(n)
            } catch (t) {
                return null
            }
        }

        function et(n, t) {
            if (window.localStorage && n && t)
                try {
                    localStorage.setItem(n, t)
                } catch (i) {}
        }

        function ot(n) {
            if (!window.localStorage || !n)
                return null;
            try {
                return localStorage.getItem(n)
            } catch (t) {
                return null
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.isNumber = r;
        t.getWindowWidth = f;
        t.getWindowHeight = h;
        t.getDimensions = c;
        t.getVirtualKey = l;
        t.getKeyCode = a;
        t.setCookie = v;
        t.getCookie = y;
        t.detectContrast = p;
        t.pointInRect = w;
        t.apiDeprecated = b;
        t.createPerfMarker = k;
        t.getPerfMarkerValue = d;
        t.toElapsedTimeString = g;
        t.parseJson = nt;
        t.extend = u;
        t.poll = tt;
        t.getQSPValue = o;
        t.getQSPFromUrl = it;
        t.addQSP = rt;
        t.saveToSessionStorage = ut;
        t.getValueFromSessionStorage = ft;
        t.saveToLocalStorage = et;
        t.getValueFromLocalStorage = ot;
        var st;
        (function (n) {
            function t() {
                var t;
                if (window.matchMedia) {
                    for (t = 0; t < n.allWidths.length; ++t)
                        if (!window.matchMedia("(min-width:" + n.allWidths[t] + "px)").matches)
                            return t
                } else
                    for (t = 0; t < n.allWidths.length; ++t)
                        if (!(f() >= n.allWidths[t]))
                            return t;
                return n.allWidths.length
            }
            n.allWidths = [320, 540, 768, 1084, 1400, 1779];
            n.vpMin = n.allWidths[0];
            n.vpMax = 2048;
            n.getViewport = t
        })(st = t.Viewports || (t.Viewports = {}))
    });
    __extends = this && this.__extends || function () {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (n, t) {
            n.__proto__ = t
        } || function (n, t) {
            for (var i in t)
                t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function (t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
                new r)
        }
    }();
    define("alert", ["require", "exports", "publisher", "htmlExtensions"], function (n, t, i, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function (n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.closeAlertAndRemoveEvent = function () {
                        r.removeEvent(i.closeButton, r.eventTypes.click, i.closeAlertAndRemoveEvent);
                        r.removeElement(i.element);
                        i.initiatePublish()
                    },
                    i.update(),
                    i
            }
            return __extends(t, n),
                t.prototype.update = function () {
                    this.element && (this.closeButton = r.selectFirstElement("button.c-action-trigger.glyph-cancel", this.element), !this.closeButton || r.addEvent(this.closeButton, r.eventTypes.click, this.closeAlertAndRemoveEvent, !1))
                },
                t.prototype.teardown = function () {
                    r.removeEvent(this.closeButton, r.eventTypes.click, this.closeAlertAndRemoveEvent, !1)
                },
                t.prototype.publish = function (n) {
                    n.onAlertClosed()
                },
                t.selector = ".m-alert",
                t.typeName = "Alert",
                t
        }(i.Publisher);
        t.Alert = u
    });
    require(["alert", "componentFactory"], function (n, t) {
        t.ComponentFactory && t.ComponentFactory.create && t.ComponentFactory.create([{
            component: n.Alert
        }])
    });
    __extends = this && this.__extends || function () {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (n, t) {
            n.__proto__ = t
        } || function (n, t) {
            for (var i in t)
                t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function (t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
                new r)
        }
    }();
    define("autosuggest", ["require", "exports", "publisher", "htmlExtensions", "stringExtensions", "utility"], function (n, t, i, r, u, f) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var e = function (n) {
            function t(i, e) {
                var o, s;
                return e === void 0 && (e = null),
                    o = n.call(this, i, f.isNumber(e) ? {} : e) || this,
                    o.hideNoResults = !1,
                    o.suggestionClickListeners = [],
                    o.publishInProgress = [],
                    o.updateSuggestions = function (n) {
                        o.publishInProgress.length > 0 && o.publishInProgress.pop();
                        var t = o.reconstructMenu(n);
                        o.show();
                        t && o.setFocusToInput()
                    },
                    o.handleInputKeyup = function (n) {
                        o.input && o.input.value && (o.cachedInputValue = o.input.value);
                        switch (f.getKeyCode(n)) {
                        case 27:
                            break;
                        case 38:
                            break;
                        case 40:
                            break;
                        default:
                            o.initiatePublish({
                                notification: "onMatchPatternChanged",
                                properties: {
                                    pattern: o.input.value
                                }
                            });
                            o.publishInProgress.push(!0)
                        }
                    },
                    o.handleInputKeydown = function (n) {
                        switch (f.getKeyCode(n)) {
                        case 9:
                        case 27:
                            o.hide();
                            break;
                        case 38:
                            r.preventDefault(n);
                            o.handleInputArrowKey(!0);
                            break;
                        case 40:
                            r.preventDefault(n);
                            o.handleInputArrowKey(!1)
                        }
                    },
                    o.handleMenuKeydown = function (n) {
                        switch (f.getKeyCode(n)) {
                        case 13:
                            o.selectSuggestion(o.selectedSuggestion, !0);
                            break;
                        case 27:
                            o.hide();
                            break;
                        case 38:
                            r.preventDefault(n);
                            o.handleMenuArrowKey(!0);
                            break;
                        case 40:
                            r.preventDefault(n);
                            o.handleMenuArrowKey(!1)
                        }
                    },
                    o.handleClickWhenMenuOpen = function (n) {
                        o.closeMenuFromClick(r.getEventTargetOrSrcElement(n))
                    },
                    o.handleInputClick = function () {
                        o.show()
                    },
                    o.selectSuggestionFromClick = function (n) {
                        o.selectSuggestion(n, !0)
                    },
                    o.buildStringSuggestionHtml = function (n, t) {
                        var i = document.createElement("li");
                        i.setAttribute("class", "c-menu-item");
                        i.setAttribute("role", "presentation");
                        i.setAttribute("title", n);
                        i.innerHTML = '<span role="option" aria-label="' + n + '" tabindex="0">' + o.highlight(n) + "<\/span>";
                        r.addAttribute(i, t);
                        o.ignoreNextDOMChange = !0;
                        o.menu.appendChild(i)
                    },
                    o.buildProductSuggestionHtml = function (n, t) {
                        var h = !n.category ? "" : " - " + n.category,
                            f = document.createElement("li"),
                            i, e, s, c, l;
                        f.setAttribute("class", "c-menu-item");
                        f.setAttribute("role", "presentation");
                        f.setAttribute("title", n.title + h);
                        o.searchable(f, !1);
                        i = document.createElement("a");
                        i.setAttribute("role", "option");
                        i.setAttribute("aria-label", n.title + h + " - Link");
                        i.setAttribute("class", "f-product");
                        i.setAttribute("href", n.targetUrl);
                        r.addAttribute(i, t);
                        e = "";
                        n.imageSrc && (s = "",
                            c = 'class="c-image' + (n.isImageRound ? " f-round" : "") + '"',
                            u.isNullOrWhiteSpace(n.backgroundColor) || n.backgroundColor.toLowerCase() === "transparent" || (s = 'style="background:' + n.backgroundColor + '"'),
                            e = "<img " + c + ' src="' + n.imageSrc + '" ' + s + ' role="none"/>');
                        l = n.category ? '<span class="c-meta-text">' + n.category + "<\/span>" : "";
                        i.innerHTML = e + "<div><span>" + o.highlight(n.title) + "<\/span>" + l + "<\/div>";
                        f.appendChild(i);
                        o.ignoreNextDOMChange = !0;
                        o.menu.appendChild(f)
                    },
                    o.setFocusToInput = function () {
                        o.input && o.input.focus()
                    },
                    f.isNumber(e) ? s = e : e && (f.isNumber(e.scrollLimit) && (s = e.scrollLimit),
                        e.hideNoResults && (o.hideNoResults = e.hideNoResults)),
                    o.itemScrollCount = Math.max(t.minimumItemScrollCount, s || t.defaultItemScrollCount),
                    o.update(),
                    o
            }
            return __extends(t, n),
                t.prototype.update = function () {
                    this.element && (this.input = r.selectFirstElement("[aria-controls=" + this.element.id + "]"),
                        this.input) && (this.menu = r.selectFirstElement(".c-menu", this.element),
                        this.menu) && (this.noResults = r.selectFirstElement(".f-auto-suggest-no-results", this.element),
                        this.noResults) && (this.noResultsItem = r.selectFirstElement(".c-menu-item span", this.noResults),
                        this.noResultsItem) && (this.noResultsString = this.noResultsItem.textContent,
                        this.noResultsString) && (this.form = this.element.parentElement,
                        this.form) && (this.addMenuStateAnnouncement(),
                        r.addEvent(this.input, r.eventTypes.keyup, this.handleInputKeyup, !0),
                        r.addEvent(this.input, r.eventTypes.keydown, this.handleInputKeydown, !0),
                        r.addEvent(this.input, r.eventTypes.click, this.handleInputClick, !0),
                        this.reconstructMenu(null, !0))
                },
                t.prototype.teardown = function () {
                    r.removeEvent(this.input, r.eventTypes.keyup, this.handleInputKeyup, !0);
                    r.removeEvent(this.input, r.eventTypes.keydown, this.handleInputKeydown, !0);
                    r.removeEvent(this.input, r.eventTypes.click, this.handleInputClick, !0);
                    r.removeEvent(document.body, r.eventTypes.click, this.handleClickWhenMenuOpen);
                    for (var n = 0; n < this.suggestions.length; ++n)
                        r.removeEvent(this.suggestions[n], r.eventTypes.keydown, this.handleMenuKeydown),
                        r.removeEvent(this.suggestions[n], r.eventTypes.click, this.suggestionClickListeners[n++]);
                    this.form = null;
                    this.input = null;
                    this.menu = null;
                    this.noResults = null;
                    this.suggestions = null;
                    this.selectedSuggestion = null
                },
                t.prototype.searchable = function (n, t) {
                    var i = "data-is-searchable";
                    if (t === undefined)
                        return n.getAttribute(i) !== "false";
                    n.setAttribute(i, t.toString())
                },
                t.prototype.publish = function (n, t) {
                    if (n.onMatchPatternChanged && t.notification === "onMatchPatternChanged")
                        n.onMatchPatternChanged(t.properties);
                    else if (n.onSuggestionSelected && t.notification === "onSuggestionSelected")
                        n.onSuggestionSelected(t.properties)
                },
                t.prototype.handleInputArrowKey = function (n) {
                    var t = this.suggestions,
                        r = this.suggestions ? this.suggestions.length : 0,
                        i;
                    r > 0 && (!this.selectedSuggestion && n ? this.selectSuggestion(t[r - 1]) : this.selectedSuggestion ? (i = t.indexOf(this.selectedSuggestion),
                        n && i === 0 ? this.selectSuggestion(t[r - 1]) : n ? this.selectSuggestion(t[i - 1]) : i === r - 1 ? this.selectSuggestion(t[0]) : this.selectSuggestion(t[i + 1])) : this.selectSuggestion(t[0]))
                },
                t.prototype.handleMenuArrowKey = function (n) {
                    var i = this.suggestions,
                        r = this.suggestions ? this.suggestions.length : 0,
                        t;
                    r > 0 && (t = i.indexOf(this.selectedSuggestion),
                        n && t === 0 || !n && t === r - 1 ? (this.input.value = this.cachedInputValue,
                            this.setFocusToInput(),
                            this.selectedSuggestion.setAttribute("data-selected", "false"),
                            this.selectedSuggestion = null) : n ? this.selectSuggestion(i[t - 1]) : this.selectSuggestion(i[t + 1]))
                },
                t.prototype.selectSuggestion = function (n, t) {
                    var i, u, f;
                    (t === void 0 && (t = !1),
                        n) && (this.selectedSuggestion && this.selectedSuggestion.setAttribute("data-selected", "false"),
                        this.selectedSuggestion = n,
                        this.selectedSuggestion.setAttribute("data-selected", "true"),
                        r.selectFirstElement("li > a, li > span", this.selectedSuggestion).focus(),
                        i = "product",
                        this.searchable(this.selectedSuggestion) ? (u = r.getText(this.selectedSuggestion),
                            this.input.value = u,
                            i = "term") : this.publishInProgress.length === 0 && (this.input.value = ""),
                        t && (this.hide(),
                            f = this.suggestions.indexOf(this.selectedSuggestion),
                            this.initiatePublish({
                                notification: "onSuggestionSelected",
                                properties: {
                                    srchq: this.cachedInputValue,
                                    suggestion: this.selectedSuggestion,
                                    suggestionType: i,
                                    aslinkpos: f,
                                    qrylngth: this.cachedInputValue.length,
                                    resultselected: this.selectedSuggestion.innerText
                                }
                            }),
                            this.searchable(this.selectedSuggestion) && this.form.submit()))
                },
                t.prototype.hide = function () {
                    this.menu.setAttribute(t.ariaHidden, "true");
                    this.noResults.setAttribute(t.ariaHidden, "true");
                    this.noResultsItem.removeAttribute("aria-label");
                    this.noResultsItem.textContent = "";
                    this.form.setAttribute(t.ariaExpanded, "false");
                    r.setText(this.ariaLiveRegion, "");
                    r.removeEvent(document.body, r.eventTypes.click, this.handleClickWhenMenuOpen)
                },
                t.prototype.show = function () {
                    if (u.isNullOrWhiteSpace(this.input.value)) {
                        this.hide();
                        return
                    }
                    if (this.form.setAttribute(t.ariaExpanded, "true"),
                        this.suggestions && this.suggestions.length)
                        r.setText(this.ariaLiveRegion, this.menuOpenLocString);
                    else {
                        this.hideNoResults ? this.noResults.setAttribute(t.ariaHidden, "true") : (this.noResults.setAttribute(t.ariaHidden, "false"),
                            this.noResultsItem.setAttribute("aria-label", this.noResultsString),
                            this.noResultsItem.textContent = this.noResultsString);
                        this.menu.setAttribute(t.ariaHidden, "true");
                        return
                    }
                    this.noResults.setAttribute(t.ariaHidden, "true");
                    this.menu.setAttribute(t.ariaHidden, "false");
                    r.hasClass(this.menu, "f-auto-suggest-scroll") && r.css(this.menu, "maxHeight", this.suggestions[0].offsetHeight * this.itemScrollCount + "px");
                    r.addEvent(document.body, r.eventTypes.click, this.handleClickWhenMenuOpen)
                },
                t.prototype.closeMenuFromClick = function (n) {
                    this.form.contains(n) || this.hide()
                },
                t.prototype.reconstructMenu = function (n, t) {
                    var s = this,
                        f, o, i, h, u, e;
                    if (t === void 0 && (t = !1),
                        this.suggestions = null,
                        this.suggestionClickListeners = [], !t)
                        for (this.ignoreNextDOMChange = !0,
                            r.removeInnerHtml(this.menu),
                            f = 0,
                            o = n; f < o.length; f++) {
                            i = o[f];
                            switch (i.type) {
                            case "string":
                                this.buildStringSuggestionHtml(i.value, i.attributes);
                                break;
                            case "product":
                                this.buildProductSuggestionHtml(i.value, i.attributes)
                            }
                        }
                    for (this.suggestions = r.nodeListToArray(this.menu.children),
                        h = function (n) {
                            r.addEvent(u.suggestions[n], r.eventTypes.keydown, u.handleMenuKeydown);
                            r.addEvent(u.suggestions[n], r.eventTypes.click, u.suggestionClickListeners[n] = function () {
                                s.selectSuggestionFromClick(s.suggestions[n])
                            })
                        },
                        u = this,
                        e = 0; e < this.suggestions.length; ++e)
                        h(e);
                    return !!this.selectedSuggestion
                },
                t.prototype.addMenuStateAnnouncement = function () {
                    this.ariaLiveRegion || (this.ariaLiveRegion = document.createElement("div"),
                        r.addClass(this.ariaLiveRegion, "x-screen-reader"),
                        this.ariaLiveRegion.setAttribute("aria-live", "assertive"),
                        this.input.parentNode.insertBefore(this.ariaLiveRegion, this.input.nextSibling),
                        this.ignoreNextDOMChange = !0,
                        this.menuOpenLocString = this.element.getAttribute("data-f-loc-menu-open") || t.menuOpenFallbackString)
                },
                t.prototype.highlight = function (n) {
                    var t = new RegExp(this.input.value, "ig");
                    return n.replace(t, function (n) {
                        return "<b>" + n + "<\/b>"
                    })
                },
                t.selector = ".m-auto-suggest",
                t.typeName = "AutoSuggest",
                t.menuOpenFallbackString = "results are available, use up and down arrow keys to navigate.",
                t.defaultItemScrollCount = 5,
                t.minimumItemScrollCount = 2,
                t.ariaHidden = "aria-hidden",
                t.ariaExpanded = "aria-expanded",
                t
        }(i.Publisher);
        t.AutoSuggest = e
    });
    require(["autosuggest"]);
    define("msccHelper", ["require", "exports"], function (n, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function n() {}
            return n.prototype.setConsent = function () {
                    var n = window.mscc,
                        t;
                    n && !n.hasConsent() && (n.setConsent(),
                        t = document.querySelector("header.c-uhfh.context-uhf.f-transparent.js"),
                        t && t.setAttribute("style", "margin-top:0px"))
                },
                n
        }();
        t.MsccHelper = i
    });
    define("navigationMenus", ["require", "exports", "utility", "htmlExtensions", "jquery", "msccHelper"], function (n, t, i, r, u, f) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = ".c-uhfh",
            k = ".js-global-head",
            s = "#uhf-c-nav",
            l = "#uhf-g-nav",
            ut = "#uhf-l-nav",
            e = ".js-nav-menu",
            g = ".js-subm-uhf-nav-link",
            h = ".f-mobile-title .c-action-trigger.glyph-chevron-left",
            c = ".f-mobile-title .c-action-trigger.glyph-chevron-right",
            y = ".js-global-head .c-action-trigger.glyph-global-nav-button",
            v = ".js-mobile-title",
            d = ".glyph-shopping-cart",
            a = "aria-expanded",
            p = "ms.interactiontype",
            nt = "aria-hidden",
            tt = "f-opened",
            it = "f-closed",
            w = "f-flip",
            b = "f-current",
            rt = new f.MsccHelper,
            ft = function () {
                function n() {}
                return n.closeMenu = function (t, i) {
                        var f = t.filter(n.$menus),
                            e, o;
                        f.length !== 0 && (e = f.children("button"),
                            e.attr(a, "false"),
                            f.children("ul").attr(nt, "true"),
                            e.attr(p) !== undefined && e.attr(p, "14"),
                            i && e.focus(),
                            u(w, f).removeClass(w),
                            o = r.getDirection() === r.Direction.left ? "margin-left" : "margin-right",
                            u(" > ul", f).css(o, "").height(""),
                            f.closest("ul").height(""))
                    },
                    n.openMenu = function (t) {
                        var f = t.filter(n.$menus),
                            h, s, l, v, g, tt;
                        if (f.length !== 0) {
                            h = f.children("button");
                            h.attr(a, "true");
                            f.children("ul").attr(nt, "false");
                            h.attr(p) !== undefined && h.attr(p, "15");
                            var e = f.find("ul").first(),
                                i = e[0].getBoundingClientRect(),
                                c = u(window).width(),
                                y = r.getDirection();
                            if (f.is(n.$levelTwoMenus)) {
                                if (s = f.parent("ul"),
                                    s.height(""),
                                    e.height(""),
                                    l = s.height(),
                                    v = e.height(),
                                    l > v ? e.height(l) : l < v && s.height(v),
                                    g = y === r.Direction.left && i.right > c || y === r.Direction.right && i.left < 0,
                                    e.hasClass(w))
                                    return;
                                g && s.find("ul").addClass(w)
                            } else if (!n.isMobile() && f.is(n.$menus.not(n.$levelTwoMenus))) {
                                var b = e[0].offsetWidth,
                                    o = 0,
                                    k = 20,
                                    d = e.hasClass("f-multi-column");
                                d && i.right > c ? (o = i.right - c,
                                    k = Math.abs(o - i.left) / 2,
                                    o += k) : d && i.left < 0 ? o = -i.left + k : !d && i.left + b * 2 > c && i.right - b * 2 < 0 && (o = b - f[0].offsetWidth);
                                tt = y === r.Direction.left ? "marginLeft" : "marginRight";
                                e[0].style[tt] = -o + "px"
                            }
                        }
                    },
                    n.isOpen = function (n) {
                        return n.children("button").attr(a) === "true"
                    },
                    n.toggleMenu = function (t, i) {
                        if (n.isOpen(t)) {
                            var r = u(e, t).add(t);
                            n.closeMenu(r, i)
                        } else
                            n.closeAllOpenMenus(t.parents()),
                            n.openMenu(t)
                    },
                    n.wasClickFromKeyboard = function (n) {
                        return n.keyCode === 13
                    },
                    n.isMobile = function () {
                        return i.Viewports.getViewport() < 3
                    },
                    n.getOriginalGlobalTitle = function () {
                        return u(o + " " + v).data().globalTitle
                    },
                    n.closeIfBlurred = function (t) {
                        (u(t.target).is(".c-uhf-nav-link") || !u(t.target).parents().is(s + ",\n            " + l + ", " + ut)) && n.closeAllOpenMenus()
                    },
                    n.handleEscapeCloseMenu = function (t) {
                        if (t.keyCode === 27 && t.currentTarget === u(t.target).closest(e)[0]) {
                            var i = u(t.currentTarget).closest(e);
                            n.isOpen(i) ? n.closeMenu(i, !0) : n.closeMenu(i.parent().closest(e), !0)
                        }
                    },
                    n.closeOpenSiblingMenusOnFocusChange = function (t) {
                        var i = u(t.target).closest(e).first(),
                            r;
                        i.is(n.$menus) && (r = i.parents(e),
                            n.closeAllOpenMenus(r.add(i)))
                    },
                    n.closeAllOpenMenus = function (t) {
                        n.closeMenu(u(' > [aria-expanded="true"]', n.$menus).parent().not(t))
                    },
                    n.init = function () {
                        u(o).removeClass("no-js").addClass("js").on("keyup", n.menuSelector, n.handleEscapeCloseMenu);
                        n.originalMobileTitle = u(v).text();
                        n.$menus = u(e);
                        n.$levelTwoMenus = u(e + " " + e);
                        n.$multiColumnMenus = u(".f-multi-column " + e)
                    },
                    n.clearCustomMenuHeights = function () {
                        u(" > ul[style]", n.$menus).height("")
                    },
                    n.handleMoveIntoDesktopViewport = function () {
                        n.openMenu(n.$multiColumnMenus);
                        n.clearCustomMenuHeights();
                        n.$multiColumnMenus.children("button").attr("tabindex", -1);
                        n.$menus = n.$menus.not(n.$multiColumnMenus);
                        u(".js-cat-head").show();
                        u(s).show();
                        u(l).show();
                        u("#meControl").show();
                        u(o + " .c-search").show();
                        u(o + " " + d).show();
                        u("body").css("overflow-y", "auto");
                        u(o).data("magict") === !0 && (n.isMagicTriangleEnabled = !0);
                        u(document).off("click", n.closeIfBlurred).on("click", n.closeIfBlurred);
                        u(document).off("focusin", n.closeIfBlurred).on("focusin", n.closeIfBlurred);
                        u(y).off("click", n.toggleHamburger);
                        u(h).off("click", n.handleMobilePrimaryButton);
                        u(c).off("click", n.handleMobileSecondaryButton);
                        u(o).off("click", n.handleMobileMenuClick).off("click", n.handleDesktopMenuClick).on("click", n.handleDesktopMenuClick).off("focusin", n.closeOpenSiblingMenusOnFocusChange).on("focusin", n.closeOpenSiblingMenusOnFocusChange).off("touchstart", n.setTouched).on("touchstart", n.setTouched).off("pointerenter", n.setTouchedIfPointer).on("pointerenter", n.setTouchedIfPointer).off("mouseover", n.handleDesktopMenuMouseEnter).on("mouseover", n.handleDesktopMenuMouseEnter).off("mouseout", n.handleDesktopMenuMouseLeave).on("mouseout", n.handleDesktopMenuMouseLeave);
                        n.resetTitleMobileText();
                        n.closeAllOpenMenus()
                    },
                    n.setTouchedIfPointer = function (t) {
                        t && t.originalEvent.pointerType === "touch" && n.setTouched()
                    },
                    n.setTouched = function () {
                        n.wasTouched = !0
                    },
                    n.handleDesktopMenuClick = function (t) {
                        var i, r;
                        if (u(t.target).is(g)) {
                            n.closeAllOpenMenus();
                            return
                        }
                        t.target.tagName !== "A" && (i = u(t.target).closest(e),
                            i.is(n.$menus)) && ((t.preventDefault(),
                            u("> a, > button", i).hasClass("f-hidden")) || (rt.setConsent(),
                            r = n.wasClickFromKeyboard(t),
                            n.toggleMenu(i, r)))
                    },
                    n.handleDesktopMenuMouseEnter = function (t) {
                        var i = u(t.target).closest(e);
                        !n.wasTouched && i.is(n.$levelTwoMenus) && (n.closeAllOpenMenus(i.parents()),
                            n.openMenu(i))
                    },
                    n.handleDesktopMenuMouseLeave = function (t) {
                        var i = u(t.target).closest(e);
                        n.wasTouched || !i.is(n.$levelTwoMenus) || i[0] && i[0].contains(t.relatedTarget) || n.closeMenu(i)
                    },
                    n.handleMobileMenuClick = function (t) {
                        var i, r;
                        if (u(t.target).is("nav a")) {
                            n.toggleHamburger();
                            return
                        }
                        (i = u(t.target).closest(e),
                            i.is(n.$menus) && !n.isOpen(i)) && (r = u(t.target).text(),
                            n.setTitleMobileText(r),
                            u(h).show(),
                            u(c).hide(),
                            n.openMenu(i))
                    },
                    n.handleMoveIntoMobileViewport = function () {
                        n.$menus = n.$menus.add(n.$multiColumnMenus);
                        n.$multiColumnMenus.children("button").attr("tabindex", null);
                        u(c).hide();
                        u(s).hide();
                        u(l).hide();
                        u(y).attr(a, "false");
                        u(k).addClass(it).removeClass(tt);
                        u("#meControl").hide();
                        u(o + " .c-search").show();
                        u(o + " " + d).show();
                        u(document).off("click", n.closeIfBlurred);
                        u(document).off("focusin", n.closeIfBlurred);
                        u(y).off("click", n.toggleHamburger).on("click", n.toggleHamburger);
                        u(h).off("click", n.handleMobilePrimaryButton).on("click", n.handleMobilePrimaryButton);
                        u(c).off("click", n.handleMobileSecondaryButton).on("click", n.handleMobileSecondaryButton);
                        u(o).off("touchstart", n.setTouched).off("pointerenter", n.setTouchedIfPointer).off("mouseover", n.handleDesktopMenuMouseEnter).off("mouseout", n.handleDesktopMenuMouseLeave).off("click", n.handleDesktopMenuClick).off("click", n.handleMobileMenuClick).on("click", n.handleMobileMenuClick).off("focusin", n.closeOpenSiblingMenusOnFocusChange).off("click", n.handleDesktopMenuClick);
                        n.closeAllOpenMenus()
                    },
                    n.setTitleMobileText = function (n) {
                        u(v).text(n)
                    },
                    n.hasCategoryMenu = function () {
                        return u(s).length > 0
                    },
                    n.hasGlobalNavItems = function () {
                        return u(l).length > 0
                    },
                    n.resetTitleMobileText = function () {
                        var i = u(v),
                            t = n.originalMobileTitle;
                        !t || i.text(t)
                    },
                    n.handleMobilePrimaryButton = function () {
                        var r = u(' > [aria-expanded="true"]', n.$menus),
                            t, i;
                        r[0] ? (t = r.last().parent(e),
                            n.closeMenu(t),
                            i = !u(' > [aria-expanded="true"]', n.$menus)[0],
                            i && !u(s).is(":visible") ? (u(h).hide(),
                                n.hasCategoryMenu() && u(c).show(),
                                n.setTitleMobileText(n.getOriginalGlobalTitle())) : i && u(s).is(":visible") ? (n.resetTitleMobileText(),
                                n.hasGlobalNavItems() || u(h).hide()) : n.setTitleMobileText(t.parents(e).first().children("button").first().text())) : (u(s).hide(),
                            u(l).show(),
                            u(h).hide(),
                            n.hasCategoryMenu() && u(c).show(),
                            n.setTitleMobileText(n.getOriginalGlobalTitle()))
                    },
                    n.handleMobileSecondaryButton = function () {
                        u(l).hide();
                        u(s).show();
                        u(h).show();
                        u(c).hide();
                        n.resetTitleMobileText()
                    },
                    n.toggleHamburger = function () {
                        var t = u(y),
                            i = "#meControl, " + s + ", " + l,
                            r = o + " .c-search,\n                " + o + " " + d;
                        t.attr(a) === "false" ? (u(k).addClass("f-opened").removeClass("f-closed"),
                            u(r).hide(),
                            u(i).show(),
                            u("body").css("overflow-y", "hidden"),
                            t.attr(a, "true"),
                            n.hasCategoryMenu() && n.hasGlobalNavItems() ? (u(h).show(),
                                u(c).hide(),
                                u(l).hide()) : u(h + ", " + c).hide()) : (u(k).removeClass(tt).addClass(it),
                            u(r).show(),
                            u(i).hide(),
                            u("body").css("overflow-y", "auto"),
                            t.attr(a, "false"));
                        n.resetTitleMobileText();
                        n.closeAllOpenMenus();
                        rt.setConsent()
                    },
                    n.resetNavHighlight = function (n) {
                        r.removeClass(r.selectElements("." + b, n), b)
                    },
                    n.setCurrentMenuItemId = function (t) {
                        var i = null,
                            f = r.selectFirstElement(o);
                        try {
                            i = r.selectFirstElement("#" + t, f)
                        } catch (e) {
                            return
                        }
                        i && (n.resetNavHighlight(f),
                            r.addClass(i, b),
                            u(i).parents("ul").siblings("button").addClass(b))
                    },
                    n.wasTouched = !1,
                    n.isMagicTriangleEnabled = !1,
                    n.mobilePrimaryButtonSelector = h,
                    n.globalNavSelector = l,
                    n.categoryNavSelector = s,
                    n.mobileSecondaryButtonSelector = c,
                    n.mobileTitleSelector = v,
                    n.menuSelector = e,
                    n.subMenuLinkSelector = g,
                    n.uhfSelector = o,
                    n.originalMobileTitle = "",
                    n
            }();
        t.NavigationMenus = ft
    });
    define("shoppingCart", ["require", "exports", "jquery", "htmlExtensions"], function (n, t, i, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = "x-hidden",
            f = function () {
                function n() {
                    if (this.shoppingCartFrame = document.getElementById(n.shoppingCartFrameId), !this.shoppingCartFrame)
                        return null;
                    var t = this.shoppingCartFrame.getAttribute("data-src");
                    !t || this.shoppingCartFrame.setAttribute("src", t);
                    i(window).on("message onmessage", this.handleEvent)
                }
                return n.prototype.handleEvent = function (t) {
                        var s = t.originalEvent.data,
                            f = "0",
                            e = r.selectFirstElement(n.shoppingCartCountSelector),
                            o = r.selectFirstElement(n.shoppingCartLabel),
                            h, c;
                        if (s && s.split && e && (h = s.split("="),
                            h[0] === "DR_Cart_Count")) {
                            if (f = h[1],
                                f === "0") {
                                r.addClass(e, u);
                                o && r.removeClass(o, u);
                                return
                            }
                            o && r.addClass(o, u);
                            r.removeClass(e, u);
                            e.innerText = f;
                            c = i(n.shoppingCartAnchorId).attr("aria-label").replace(/\d+/, f);
                            i(n.shoppingCartAnchorId).attr("aria-label", c)
                        }
                    },
                    n.shoppingCartFrameId = "shell-cart-count",
                    n.shoppingCartCountSelector = ".shopping-cart-amount",
                    n.shoppingCartAnchorId = "#uhf-shopping-cart",
                    n.shoppingCartLabel = ".c-cart-lbl",
                    n
            }();
        t.ShoppingCart = f
    });
    __extends = this && this.__extends || function () {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (n, t) {
            n.__proto__ = t
        } || function (n, t) {
            for (var i in t)
                t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function (t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
                new r)
        }
    }();
    __extends = this && this.__extends || function () {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (n, t) {
            n.__proto__ = t
        } || function (n, t) {
            for (var i in t)
                t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function (t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
                new r)
        }
    }();
    define("uhfAutoSuggest", ["require", "exports", "autosuggest", "htmlExtensions", "utility", "uhfTelemetryHelper"], function (n, t, i, r, u, f) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var e = {
                hideNoResults: !0
            },
            o = function (n) {
                function t() {
                    var i = n.call(this, r.selectFirstElement(t.autoSuggestSelector), e) || this,
                        s, o;
                    if (i.latestTimestampReceived = 0,
                        i.autoSuggestCallback = function (n) {
                            var t = window.msCommonShell && window.msCommonShell.as,
                                r;
                            t && t.callback ? t.callback({
                                text: n.pattern,
                                response: i.updateSuggestions
                            }) : t && t.legacyCallback ? t.legacyCallback({
                                text: n.pattern,
                                response: i.mapLegacyCallback
                            }) : t && t.ussAPIParams && t.ussAPIParams.clientId && t.ussAPIParams.sources ? (t.ussAPIParams.query = n.pattern,
                                t.ussAPIParams.market = t.ussAPIParams.market || i.params.market,
                                r = i.autoSuggestUrl + "?" + $.param(t.ussAPIParams),
                                i.ajaxCall(r, i.updateSuggestions)) : i.params && i.params.clientId && i.params.sources && (i.params.query = n.pattern,
                                r = i.autoSuggestUrl + "?" + $.param(i.params),
                                i.ajaxCall(r, i.updateSuggestions))
                        },
                        i.suggestionSelectedCallback = function (n) {
                            if (n && n.suggestion && n.suggestionType) {
                                try {
                                    f.fireBeacon(n.suggestion.firstChild.getAttribute("iris-onclick-url"))
                                } catch (r) {}
                                if (event.type && i.telemetryType) {
                                    var t = {
                                        trackType: "autosuggest",
                                        telemetryType: i.telemetryType,
                                        event: event.type === "click" ? "CL" : "KE",
                                        title: n.suggestion.title,
                                        suggestionType: n.suggestionType,
                                        aslinkpos: n.aslinkpos,
                                        qrylngth: n.qrylngth,
                                        resultselected: n.resultselected,
                                        srchq: n.srchq
                                    };
                                    f.trackEvent(t)
                                }
                            }
                        },
                        i.mapLegacyCallback = function (n) {
                            for (var t, r = [], u = 0, f = n.suggestions; u < f.length; u++)
                                t = f[u],
                                t.image && t.title ? r.push({
                                    type: "product",
                                    value: {
                                        title: t.title,
                                        targetUrl: t.target,
                                        imageSrc: t.image
                                    }
                                }) : t.title && r.push({
                                    type: "string",
                                    value: t.title
                                });
                            i.updateSuggestions(r)
                        },
                        i.ajaxCall = function (n, t) {
                            var u = Date.now(),
                                r = new XMLHttpRequest,
                                f = i;
                            r.open("GET", n, !0);
                            r.onreadystatechange = function () {
                                if (this.readyState === 4 && this.status >= 200 && this.status < 400)
                                    try {
                                        f.processJsonData(u, JSON.parse(this.responseText), t)
                                    } catch (n) {}
                            };
                            r.send();
                            r = null
                        },
                        i.responseHandlers = {
                            Term: function (n) {
                                    var t = [];
                                    return i.telemetryType === "wedcs" && t.concat(i.getWedcsAttributes(n.Txt)), {
                                        type: "string",
                                        value: n.Txt,
                                        attributes: t
                                    }
                                },
                                Product: function (n) {
                                    for (var r, o = null, u = [], e = 0, s = n.Metas; e < s.length; e++) {
                                        if (r = s[e],
                                            r.Key === "AppBgColor") {
                                            o = r.Value;
                                            continue
                                        }
                                        if (r.Key === "IrisBiClickBeacon") {
                                            u.push({
                                                name: "iris-onclick-url",
                                                value: r.Value
                                            });
                                            continue
                                        }
                                        if (r.Key === "IrisBiImpressionBeacon") {
                                            f.fireBeacon(r.Value);
                                            continue
                                        }
                                    }
                                    return i.telemetryType === "wedcs" && u.concat(i.getWedcsAttributes(n.Title)), {
                                        type: "product",
                                        value: {
                                            title: n.Title,
                                            category: i.familyNames[n.Source],
                                            backgroundColor: o,
                                            imageSrc: t.transformImageUrl(n.ImageUrl),
                                            targetUrl: n.Url,
                                            isImageRound: n.Source === "MusicArtists" || n.Source === "VideoActor"
                                        },
                                        attributes: u
                                    }
                                }
                        },
                        i.configurationElement = r.selectFirstElement(t.configElementSelector),
                        i.configurationElement) {
                        i.autoSuggestUrl = i.configurationElement.getAttribute(t.apiUrlAttribute);
                        s = r.selectFirstElement("[" + t.telemetryAttribute + "]", i.configurationElement);
                        !s || (i.telemetryType = s.getAttribute(t.telemetryAttribute));
                        o = void 0;
                        try {
                            o = u.parseJson(i.configurationElement.getAttribute(t.configDataAttribute))
                        } catch (h) {}
                        i.autoSuggestUrl && o && o.queryParams && (i.params = o.queryParams,
                            i.familyNames = o.familyNames);
                        i.subscribe({
                            onMatchPatternChanged: i.autoSuggestCallback,
                            onSuggestionSelected: i.suggestionSelectedCallback
                        })
                    }
                    return i
                }
                return __extends(t, n),
                    t.transformImageUrl = function (n) {
                        return n && n.indexOf(t.badImageDomain) === 0 ? n.replace(t.badImageDomain, t.goodImageDomain) : n
                    },
                    t.prototype.processJsonData = function (n, t, i) {
                        var r, f, h, u, e, c, s, l, o;
                        if (t && t.ResultSets && !(n < this.latestTimestampReceived)) {
                            for (this.latestTimestampReceived = n,
                                r = [],
                                f = 0,
                                h = t.ResultSets; f < h.length; f++)
                                if (u = h[f],
                                    u.Source.toLowerCase().indexOf("-terms") !== -1)
                                    for (e = 0,
                                        c = u.Suggests; e < c.length; e++)
                                        o = c[e],
                                        r.push(this.responseHandlers.Term(o));
                                else if (u.Source.toLowerCase().indexOf("-products") !== -1)
                                for (s = 0,
                                    l = u.Suggests; s < l.length; s++)
                                    o = l[s],
                                    r.push(this.responseHandlers.Product(o));
                            r && i(r)
                        }
                    },
                    t.prototype.getWedcsAttributes = function (n) {
                        var t = [];
                        return n.length > 0 && (t.push({
                                    name: "ms.title",
                                    value: n
                                }),
                                t.push({
                                    name: "ms.cmpnm",
                                    value: n
                                }),
                                t.push({
                                    name: "ms.cn",
                                    value: n
                                })),
                            t
                    },
                    t.autoSuggestSelector = "#universal-header-search-auto-suggest-transparent",
                    t.configElementSelector = ".js-global-head .c-search",
                    t.configDataAttribute = "data-seautosuggest",
                    t.apiUrlAttribute = "data-seautosuggestapi",
                    t.telemetryAttribute = "data-tel",
                    t.badImageDomain = "//compass.",
                    t.goodImageDomain = "https://compass-ssl.",
                    t
            }(i.AutoSuggest);
        t.UhfAutoSuggest = o
    });
    __extends = this && this.__extends || function () {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (n, t) {
            n.__proto__ = t
        } || function (n, t) {
            for (var i in t)
                t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function (t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
                new r)
        }
    }();
    __extends = this && this.__extends || function () {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (n, t) {
            n.__proto__ = t
        } || function (n, t) {
            for (var i in t)
                t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function (t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
                new r)
        }
    }();
    define("uhfCookieAlert", ["require", "exports", "htmlExtensions", "utility", "publisher"], function (n, t, i, r, u) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = function (n) {
            function t(t) {
                var u = n.call(this, t) || this,
                    f;
                return (u.cookieAlertElement = t,
                    u.closeSelector = "button.c-action-trigger.glyph-cancel",
                    u.cookieName = "uhf_hide_cn",
                    u.hiddenClass = "x-hidden",
                    u.msccCookieName = "MSCC",
                    u.getHeight = function () {
                        return u.cookieAlertElement ? i.getClientRect(u.cookieAlertElement).height : 0
                    },
                    u.closeAndSetCookie = function () {
                        r.setCookie(u.cookieName, "true", "/", 365);
                        i.addClass(u.cookieAlertElement, u.hiddenClass);
                        u.initiatePublish({
                            height: u.getHeight()
                        })
                    }, !t || !(r.getCookie(u.cookieName) !== "true") || r.getCookie(u.msccCookieName) !== null) ? u : (i.removeClass(u.cookieAlertElement, u.hiddenClass),
                    f = i.selectFirstElement(u.closeSelector, t),
                    i.addEvent(f, i.eventTypes.click, u.closeAndSetCookie),
                    u)
            }
            return __extends(t, n),
                t.prototype.publish = function (n, t) {
                    n.onBannerClosed(t)
                },
                t
        }(u.Publisher);
        t.UhfCookieAlert = f
    });
    define("uhfCookieAuditor", ["require", "exports", "htmlExtensions", "stringExtensions", "uhfTelemetryHelper"], function (n, t, i, r, u) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f;
        (function (n) {
            function t() {
                try {
                    var n = i.selectFirstElement(".c-uhfh").getAttribute("data-ckrate");
                    return Math.random() < parseFloat(n)
                } catch (t) {
                    return !1
                }
            }

            function f() {
                if (t() && window.btoa && Array.prototype.map) {
                    var n = window.btoa(document.cookie.split(";").map(function (n) {
                            return r.trim(n.substr(0, n.indexOf("=")))
                        }).sort().join(";")),
                        i = "https://uhf.microsoft.com/_log?c=" + n + "&h=" + window.location.hostname;
                    u.fireBeacon(i)
                }
            }
            n.audit = f
        })(f = t.UhfCookieAuditor || (t.UhfCookieAuditor = {}))
    });
    define("uhfGreenId", ["require", "exports", "htmlExtensions", "stringExtensions"], function (n, t, i, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function () {
            function n() {}
            return n.prototype.createGreenIdIframe = function () {
                    var t = i.selectFirstElement("#uhf-footer"),
                        u = window.mscc,
                        n;
                    if (t !== null) {
                        n = document.createElement("iframe");
                        n.id = "uhfGreenId";
                        var f = t.getAttribute("data-uhf-green-id"),
                            e = t.getAttribute("data-uhf-mscc-rq"),
                            o = "https://fpt.microsoft.com/tags?session_id=" + f;
                        n.src = o;
                        r.isNullOrWhiteSpace(f) || (!r.isNullOrWhiteSpace(e) && e === "false" || typeof u == "undefined" || u.hasConsent()) && document.body.appendChild(n)
                    }
                },
                n
        }();
        t.UhfGreenId = u
    });
    define("uhfLanguageToggle", ["require", "exports", "htmlExtensions", "stringExtensions", "navigationMenus"], function (n, t, i, r, u) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = "#uhf-l-nav",
            e = function () {
                function n(t) {
                    var r = this;
                    this.handleLangugeToggleClick = function () {
                        u.NavigationMenus.isOpen($(n.instance.languageToggleElement)) || n.instance.createLanguageToggleUrls()
                    };
                    this.setLangLocaleInUrls = function (n, t, i) {
                        n.setAttribute("href", r.currentUrl.replace("/" + t + "/", "/" + i + "/"))
                    };
                    this.createLangLocaleArray = function (n, t) {
                        var i = [];
                        return n && t.match(n) && (i = t.match(n)[0].split("-")),
                            i
                    };
                    this.languageToggleElement = t;
                    i.removeEvent(this.languageToggleElement, i.eventTypes.click, this.handleLangugeToggleClick);
                    i.addEvent(this.languageToggleElement, i.eventTypes.click, this.handleLangugeToggleClick)
                }
                return n.prototype.createLanguageToggleUrls = function (n) {
                        var o, t, f, e, u, h, c, s, l;
                        if ((n === void 0 && (n = window.location.href),
                            this.currentUrl = n.toLowerCase(),
                            o = i.selectFirstElement("ul", this.languageToggleElement),
                            t = i.selectElements("a", this.languageToggleElement),
                            o && t) && (f = o.getAttribute("data-localsettings"),
                            f))
                            for (e = this.createLangLocaleArray(f, this.currentUrl),
                                u = 0,
                                h = t.length; u < h; u++)
                                c = r.trim(t[u].getAttribute("href")),
                                s = t[u].getAttribute("lang"),
                                c != null && !!s && e && e.length > 1 && (l = (s + "-" + e[1]).toLowerCase(),
                                    this.setLangLocaleInUrls(t[u], f, l))
                    },
                    n.instance = null,
                    n.init = function () {
                        var t = i.selectFirstElement(f);
                        t && n.instance === null && (n.instance = new n(t))
                    },
                    n
            }();
        t.UhfLanguageToggle = e
    });
    define("uhfMeControl", ["require", "exports", "uhfMeControlLoader"], function (n, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function () {
            function n() {
                i.Loader.init()
            }
            return n.selector = ".js-global-head",
                n
        }();
        t.UhfMeControl = r
    });
    define("uhfMeControlLoader", ["require", "exports", "jquery", "navigationMenus", "universalHeader", "utility", "htmlExtensions", "msccHelper"], function (n, t, i, r, u, f, e, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s;
        (function (n) {
            function k() {
                var n = t;
                if (n)
                    n.events.onEventLog("loadMeControl", {
                        type: "qos",
                        success: "0",
                        errorCode: "LoadFailed: Reverted to fallback",
                        duration: l
                    })
            }

            function a(n) {
                if (n && (n.extensibleLinks && t.extensibleLinks && (n.extensibleLinks.push.apply(n.extensibleLinks, t.extensibleLinks),
                            t.extensibleLinks = null),
                        t = i.extend(!0, {}, t, n)),
                    t.enabled)
                    if (window.MSA && window.MSA.MeControl)
                        window.MSA.MeControl.Loader.load(t);
                    else {
                        var r = setTimeout(function () {
                            k()
                        }, l);
                        window.onMeControlReadyToLoad = function () {
                            t.events.onEventLog("loadMeControl", {
                                type: "qos",
                                success: "1"
                            });
                            clearTimeout(r);
                            window.onMeControlReadyToLoad = null;
                            window.MSA.MeControl.Loader.load(t)
                        }
                    }
            }

            function v(n) {
                var t = document.createElement("a");
                return t.href = n,
                    t.href
            }

            function d(n) {
                n != null && (n.rpData.aadInfo && n.rpData.aadInfo.siteUrl && (n.rpData.aadInfo.siteUrl = v(n.rpData.aadInfo.siteUrl)),
                    n.rpData.msaInfo && n.rpData.msaInfo.meUrl && (n.rpData.msaInfo.meUrl = n.rpData.msaInfo.meUrl + "&wreply=" + encodeURIComponent(window.location.protocol + "//" + window.location.host)),
                    n.events = {
                        onEventLog: function (n, t) {
                            if (h && h.onEventLog)
                                h.onEventLog("MeControl_" + n, t);
                            n && (n === "SignIn" || n === "DropdownOpen") && b.setConsent()
                        }
                    },
                    t = i.extend(!0, {}, n, t || {}))
            }

            function y(n) {
                n != null && n.events != null && (h = n.events);
                !n.currentGlobalItemId || r.NavigationMenus.setCurrentMenuItemId(n.currentGlobalItemId);
                !n.currentMenuItemId || r.NavigationMenus.setCurrentMenuItemId(n.currentMenuItemId);
                n && n.theme && u.UniversalHeader.setTheme(n.theme)
            }

            function g(n) {
                var t, i, r;
                (window.msCommonShell && n.as ? window.msCommonShell.as = n.as : window.msCommonShell && n.searchSuggestCallback && (window.msCommonShell.as = {
                        legacyCallback: n.searchSuggestCallback
                    }),
                    window.msCommonShell && n.events && (window.msCommonShell.events = n.events),
                    t = document.getElementById("meControl"),
                    t) && (i = t.getAttribute("data-signinsettings"),
                    i !== null && (r = JSON.parse(i),
                        r && d(r),
                        n != null ? (y(n),
                            a(n.meControlOptions)) : a(null),
                        c() && (s = !0,
                            window.MSA && window.MSA.MeControl && window.MSA.MeControl.API.setMobileState(1))))
            }

            function c() {
                return f.Viewports.getViewport() < 5
            }

            function p() {
                w()
            }

            function w() {
                return window.MSA && window.MSA.MeControl && (c() && !s ? (s = !0,
                        window.MSA.MeControl.API.setMobileState(1)) : !c() && s && (s = !1,
                        window.MSA.MeControl.API.setMobileState(0))),
                    s
            }

            function nt() {
                var n = {
                    AuthState: {
                        SignedIn: 1,
                        SignedInIdp: 2,
                        NotSignedIn: 3
                    },
                    SupportedAuthIdp: {
                        MSA: "msa",
                        AAD: "aad"
                    },
                    meControlOptions: function () {
                            return t
                        },
                        load: function (n) {
                            g(n)
                        },
                        update: function (n) {
                            y(n)
                        }
                };
                window.msCommonShell = i.extend(!0, window.msCommonShell, n);
                window.msCommonShell.swapCategoryHeader || (window.msCommonShell.swapCategoryHeader = function (n) {
                    window.msCommonShell._catHTML = n
                });
                window.onShellReadyToLoad && window.onShellReadyToLoad()
            }
            var t = null,
                l = 5e3,
                h = null,
                s = !1,
                b = new o.MsccHelper;
            n.absolutifyUrl = v;
            n.isMobile = c;
            n.onWindowResize = p;
            n.setMeControlMobileState = w;
            n.init = nt;
            e.addThrottledEvent(window, e.eventTypes.resize, p, 66)
        })(s = t.Loader || (t.Loader = {}))
    });
    define("uhfPaddles", ["require", "exports", "htmlExtensions"], function (n, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = ".js-primary-paddle",
            f = ".js-secondary-paddle",
            e = ".js-paddle-items",
            r = "f-hidden",
            o = function () {
                function n(n) {
                    var t = this;
                    (this.disabledPrimaryNavItems = [],
                        this.disabledSecondaryNavItems = [],
                        this.slidePrimary = function () {
                            t.setCurrentSlidePosition(t.getNextValidPosition(!0))
                        },
                        this.slideSecondary = function () {
                            t.setCurrentSlidePosition(t.getNextValidPosition(!1))
                        },
                        this.handleSlideIfDisabled = function (n) {
                            for (var r = 0; r < t.nav.children.length; ++r)
                                t.disabledPrimaryNavItems[r] === n.currentTarget ? (t.slidePrimary(),
                                    i.preventDefault(n)) : t.disabledSecondaryNavItems[r] === n.currentTarget && (t.slideSecondary(),
                                    i.preventDefault(n))
                        },
                        this.handleFromKeyboardSlideIfDisabled = function (n) {
                            for (var i = 0; i < t.nav.children.length; ++i)
                                (t.disabledPrimaryNavItems[i] === n.currentTarget || t.disabledSecondaryNavItems[i] === n.currentTarget) && (t.navItemPositions[i] > t.getMaxSlideAmount() ? t.setCurrentSlidePosition(t.getMaxSlideAmount()) : t.setCurrentSlidePosition(t.navItemPositions[i]))
                        },
                        n) && (this.primaryPaddle = i.selectFirstElement(u, n),
                        this.secondaryPaddle = i.selectFirstElement(f, n),
                        this.nav = i.selectFirstElement(e, n),
                        this.nav) && (this.isLtr = this.nav.currentStyle ? this.nav.currentStyle.direction === "ltr" : getComputedStyle(this.nav, null).direction === "ltr",
                        this.slideMarginProperty = this.isLtr ? "marginLeft" : "marginRight",
                        this.firstMenuItem = this.nav.children[0])
                }
                return n.prototype.initializeNavItemsWidths = function () {
                        var t, n;
                        if (this.nav)
                            for (t = this.nav.children,
                                this.navItemsWidth = 0,
                                this.navItemPositions = [],
                                n = 0; n < t.length; ++n)
                                this.navItemPositions.push(this.navItemsWidth),
                                this.navItemsWidth += t[n].offsetWidth
                    },
                    n.prototype.setCurrentSlidePosition = function (n) {
                        (n < 0 && (n = 0),
                            this.firstMenuItem.style[this.slideMarginProperty] = -n + "px",
                            this.nav) && (this.updatePaddleDisplayStates(),
                            this.disablePartiallyHiddenNavItems(),
                            this.nav.scrollLeft = this.isLtr ? 0 : this.nav.scrollWidth)
                    },
                    n.prototype.getCurrentSlidePosition = function () {
                        var n = this.firstMenuItem.style[this.slideMarginProperty];
                        return n === "" ? 0 : -parseInt(n, 10)
                    },
                    n.prototype.show = function (n) {
                        n.style.display = "block"
                    },
                    n.prototype.hide = function (n) {
                        n.style.display = "none"
                    },
                    n.prototype.isShowing = function (n) {
                        return n.style.display !== "none"
                    },
                    n.prototype.disablePartiallyHiddenNavItems = function () {
                        for (var u, t = this.nav.children, e = this.nav.offsetWidth, f = this.getCurrentSlidePosition(), n = 0; n < t.length; ++n)
                            u = t[n].querySelector("button") || t[n],
                            this.navItemPositions[n] < f ? (i.addClass(u, r),
                                this.disabledPrimaryNavItems[n] = t[n]) : this.navItemPositions[n] + t[n].offsetWidth > f + e ? (i.addClass(u, r),
                                this.disabledSecondaryNavItems[n] = t[n]) : (i.removeClass(u, r),
                                this.disabledPrimaryNavItems[n] = null,
                                this.disabledSecondaryNavItems[n] = null)
                    },
                    n.prototype.updatePaddleDisplayStates = function () {
                        var t = this.nav.offsetWidth,
                            i = t + this.primaryPaddle.offsetWidth + this.secondaryPaddle.offsetWidth,
                            n;
                        i >= this.navItemsWidth ? (this.hide(this.primaryPaddle),
                            this.hide(this.secondaryPaddle)) : (n = this.getCurrentSlidePosition(),
                            n === 0 ? (this.hide(this.primaryPaddle),
                                this.show(this.secondaryPaddle)) : n >= this.getMaxSlideAmount() ? (this.show(this.primaryPaddle),
                                this.hide(this.secondaryPaddle)) : (this.show(this.primaryPaddle),
                                this.show(this.secondaryPaddle)))
                    },
                    n.prototype.getMaxSlideAmount = function () {
                        var n = this.isShowing(this.primaryPaddle) && this.isShowing(this.secondaryPaddle) ? this.primaryPaddle.offsetWidth : 0,
                            t = this.nav.offsetWidth + n;
                        return this.navItemsWidth - t
                    },
                    n.prototype.handleWidthChange = function () {
                        if (this.primaryPaddle && this.nav) {
                            var n = this.getCurrentSlidePosition(),
                                t = this.nav.offsetWidth,
                                i = t + this.primaryPaddle.offsetWidth + this.secondaryPaddle.offsetWidth;
                            i > this.navItemsWidth ? this.setCurrentSlidePosition(0) : this.navItemsWidth < n + this.nav.offsetWidth && this.setCurrentSlidePosition(Math.abs(this.nav.offsetWidth - this.navItemsWidth));
                            this.updatePaddleDisplayStates();
                            this.disablePartiallyHiddenNavItems()
                        }
                    },
                    n.prototype.getNextValidPosition = function (n) {
                        var i = this.getCurrentSlidePosition(),
                            r = this.nav.offsetWidth,
                            t;
                        if (n) {
                            for (t = 0; t < this.navItemPositions.length; ++t)
                                if (this.navItemPositions[t] > i)
                                    return Math.max(0, this.navItemPositions[t] - r);
                            return 0
                        }
                        for (t = 0; t < this.navItemPositions.length - 1; ++t)
                            if (this.navItemPositions[t + 1] > i + r)
                                return Math.min(this.getMaxSlideAmount(), this.navItemPositions[t]);
                        return this.getMaxSlideAmount()
                    },
                    n.prototype.handleMoveIntoDesktopViewport = function () {
                        if (this.primaryPaddle && this.nav) {
                            this.primaryPaddle.tabIndex = -1;
                            this.secondaryPaddle.tabIndex = -1;
                            this.initializeNavItemsWidths();
                            this.updatePaddleDisplayStates();
                            this.disablePartiallyHiddenNavItems();
                            this.firstMenuItem.style.transition = "margin .667s cubic-bezier(.16, 1, .29, .99)";
                            i.addEvent(this.primaryPaddle, i.eventTypes.click, this.slidePrimary);
                            i.addEvent(this.secondaryPaddle, i.eventTypes.click, this.slideSecondary);
                            var n = i.nodeListToArray(this.nav.children);
                            i.addEvent(n, i.eventTypes.click, this.handleSlideIfDisabled);
                            i.addEvent(n, i.eventTypes.focusin, this.handleFromKeyboardSlideIfDisabled)
                        }
                    },
                    n.prototype.handleMoveIntoMobileViewport = function () {
                        var t, n, u;
                        if (this.primaryPaddle && this.nav) {
                            for (this.hide(this.primaryPaddle),
                                this.hide(this.secondaryPaddle),
                                this.primaryPaddle.tabIndex = 0,
                                this.secondaryPaddle.tabIndex = 0,
                                this.firstMenuItem.style.transition = "",
                                i.removeEvent(this.primaryPaddle, i.eventTypes.click, this.slidePrimary),
                                i.removeEvent(this.secondaryPaddle, i.eventTypes.click, this.slideSecondary),
                                t = i.nodeListToArray(this.nav.children),
                                i.removeEvent(t, i.eventTypes.click, this.handleSlideIfDisabled),
                                i.removeEvent(t, i.eventTypes.focusin, this.handleFromKeyboardSlideIfDisabled),
                                n = 0; n < t.length; ++n)
                                u = t[n].querySelector("button") || t[n],
                                i.removeClass(u, r),
                                this.disabledPrimaryNavItems[n] = null,
                                this.disabledSecondaryNavItems[n] = null;
                            this.firstMenuItem.style[this.slideMarginProperty] = null
                        }
                    },
                    n
            }();
        t.UhfPaddles = o
    });
    __extends = this && this.__extends || function () {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (n, t) {
            n.__proto__ = t
        } || function (n, t) {
            for (var i in t)
                t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function (t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
                new r)
        }
    }();
    __extends = this && this.__extends || function () {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (n, t) {
            n.__proto__ = t
        } || function (n, t) {
            for (var i in t)
                t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function (t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
                new r)
        }
    }();
    define("uhfPromoBanner", ["require", "exports", "htmlExtensions", "utility", "publisher"], function (n, t, i, r, u) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = function (n) {
            function t(u) {
                var f = n.call(this, u) || this;
                return (f.promoElement = u,
                    f.closeSelector = "#close-epb",
                    f.cookieName = "uhf_hide_epb",
                    f.cookieNameV3 = "msstore_hide_epb",
                    f.hiddenClass = "x-hidden",
                    f.rollupAnimationClass = "epb-rollup",
                    f.telemetryQsp = "epb=1",
                    f.showPromoBanner = function () {
                        var n = i.selectFirstElement("#epbTryNow"),
                            t = i.selectFirstElement(".f-img-lzy"),
                            e = n.getAttribute("data-telem-qsp"),
                            u, o, s;
                        !n || (u = r.addQSP(window.location.toString(), f.telemetryQsp),
                            e ? n.setAttribute("href", "Microsoft-edge:" + r.addQSP(u, e)) : n.setAttribute("href", "Microsoft-edge:" + u));
                        t && (o = t.getAttribute("data-src"),
                            t.setAttribute("src", o));
                        s = i.selectFirstElement(f.closeSelector, f.promoElement);
                        i.addEvent(s, i.eventTypes.click, f.closeAndSetCookie);
                        i.removeClass(f.promoElement, f.hiddenClass)
                    },
                    f.getHeight = function () {
                        return f.promoElement ? i.getClientRect(f.promoElement).height : 0
                    },
                    f.closeAndSetCookie = function () {
                        f.setCookieOnRootDomain(f.cookieName, "true", "/", 7);
                        i.addClass(f.promoElement, f.rollupAnimationClass);
                        i.addEvent(f.promoElement, i.eventTypes.animationend, f.rollUpBanner);
                        f.trackEpbDismissal()
                    },
                    f.rollUpBanner = function () {
                        i.removeClass(f.promoElement, f.rollupAnimationClass);
                        i.addClass(f.promoElement, f.hiddenClass);
                        f.initiatePublish({
                            height: f.getHeight()
                        })
                    }, !u || !(r.getCookie(f.cookieName) !== "true") || !(r.getCookie(f.cookieNameV3) !== "true")) ? f : (t.resolveTreatment() && f.showPromoBanner(),
                    f)
            }
            return __extends(t, n),
                t.resolveTreatment = function (n) {
                    n === void 0 && (n = "noEdgeWin10");
                    switch (n) {
                    case "noEdgeWin10":
                        return t.isNotEdgeWin10();
                    case "gteRs1OnChrome":
                        return t.isGteRs1OnChrome();
                    default:
                        return !1
                    }
                },
                t.prototype.setCookieOnRootDomain = function (n, t, i, u) {
                    var e = document.location.hostname.split("."),
                        f = e.pop();
                    if (f === "localhost")
                        r.setCookie(n, t, i, u);
                    else
                        while (r.getCookie(n) !== t && e.length !== 0)
                            f = e.pop() + "." + f,
                            r.setCookie(n, t, i, u, f)
                },
                t.prototype.publish = function (n, t) {
                    n.onBannerClosed(t)
                },
                t.prototype.trackEpbDismissal = function () {
                    typeof MscomCustomEvent == "function" && window.MscomCustomEvent("wcs.cn", "EdgePromoBannerDismissed", "wcs.cot", 4)
                },
                t.isGteRs1OnChrome = function () {
                    var t = document.createElement("canvas").getContext("2d"),
                        i, n;
                    return t.font = "64px Segoe UI Emoji",
                        i = t.measureText("?????").width,
                        n = navigator.userAgent.toLowerCase(), !window.chrome || n.indexOf("edge") >= 0 ? !1 : n.indexOf("windows nt") === -1 ? !1 : i <= 90 ? !0 : !1
                },
                t.isNotEdgeWin10 = function () {
                    var n = navigator.userAgent.toLowerCase();
                    return !(n.indexOf("edge") >= 0) && n.indexOf("windows nt 10") >= 0
                },
                t
        }(u.Publisher);
        t.UhfPromoBanner = f
    });
    define("uhfSearchModule", ["require", "exports", "htmlExtensions", "stringExtensions", "utility", "uhfUssCategoryService", "msccHelper", "uhfTelemetryHelper"], function (n, t, i, r, u, f, e, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = new e.MsccHelper,
            h = function () {
                function n(n, t, e) {
                    var h = this,
                        c, l, a;
                    if (this.searchForm = n,
                        this.showCallback = t,
                        this.autoSuggest = e,
                        this.width = "",
                        this.searchOpenedClass = "f-search-opened",
                        this.focusedClass = "js-focused",
                        this.stSelector = ".c-sgl-stck",
                        this.searchLabelSelector = "#search span",
                        this.ussCategoryExpId = "StoreSearch",
                        this.ussCategoryCtrlId = "AllSearch",
                        this.onSearchBoxChange = function () {
                            h.searchBox.value.trim() !== "" && s.setConsent()
                        },
                        this.log = function () {
                            if (window.msCommonShell) {
                                (typeof window.msCommonShell.events == "undefined" || typeof window.msCommonShell.events.onSearch == "undefined") && (window.msCommonShell.events = {
                                    onSearch: function () {
                                        if (event.type) {
                                            var n = document.getElementById("cli_shellHeaderSearchInput"),
                                                t = {
                                                    title: "Search",
                                                    trackType: "manual",
                                                    telemetryType: "jsll",
                                                    event: event.type === "click" ? "CL" : "KE",
                                                    srchq: n ? n.value : ""
                                                };
                                            o.trackEvent(t)
                                        }
                                    }
                                });
                                var n = window.msCommonShell.events.onSearch;
                                n && n(h.searchForm)
                            }
                        },
                        this.addQsp = function (n, t) {
                            if (n && t) {
                                var i = document.createElement("input");
                                i.setAttribute("type", "hidden");
                                i.setAttribute("name", n);
                                i.setAttribute("value", t);
                                i.setAttribute("data-bi-dnt", "");
                                h.searchForm.appendChild(i)
                            }
                        },
                        this.isHidden = function () {
                            return h.singleStackEnabled ? i.css(h.searchBox, "display") === "none" || h.searchBox.getAttribute("aria-expended") === "false" ? !0 : !i.hasClass(h.searchParentElement, h.searchOpenedClass) : u.getWindowWidth() >= 1400 ? !1 : !i.hasClass(h.searchParentElement, h.searchOpenedClass)
                        },
                        this.showAndFocus = function () {
                            h.showCallback && h.showCallback();
                            i.addClass(h.searchParentElement, h.searchOpenedClass);
                            h.singleStackEnabled && u.getWindowWidth() >= 1400 ? (i.addClass(h.searchButton, "btn-hide-lbl"),
                                i.css(h.searchBox, "display", "block")) : i.css(h.searchBox, "width", h.width);
                            h.searchCloseButton.setAttribute("aria-expanded", "true");
                            h.searchBox.focus()
                        },
                        this.hide = function () {
                            h.autoSuggest && h.autoSuggest.hide();
                            i.css(h.searchBox, "width", "");
                            i.removeClass(h.searchParentElement, h.searchOpenedClass);
                            h.searchCloseButton.setAttribute("aria-expanded", "false");
                            h.singleStackEnabled && u.getWindowWidth() >= 1400 && (i.removeClass(h.searchButton, "btn-hide-lbl"),
                                i.css(h.searchBox, "display", "none"))
                        },
                        this.removeTabIndex = function () {
                            h.searchBox.removeAttribute("tabindex")
                        },
                        this.addMinusTabIndex = function () {
                            h.searchBox.setAttribute("tabindex", "-1")
                        },
                        this.handleSearchButtonClick = function (n) {
                            if (!h.isHidden()) {
                                h.onSearch(n);
                                return
                            }
                            i.preventDefault(n);
                            h.showAndFocus()
                        },
                        this.toggleFocusAndClickListeners = function (n, t, r) {
                            var u = r ? i.removeEvent : i.addEvent;
                            u(n, i.eventTypes.focus, t, !0);
                            u(n, i.eventTypes.click, t, !0)
                        },
                        this.focusInHandler = function () {
                            i.addClass(h.searchForm, h.focusedClass);
                            h.toggleFocusAndClickListeners(h.searchForm, h.focusInHandler, !0);
                            h.toggleFocusAndClickListeners(document.body, h.focusOutHandler)
                        },
                        this.focusOutHandler = function (n) {
                            h.parentHasClass(n.target, h.focusedClass) || (i.removeClass(h.searchForm, h.focusedClass),
                                h.toggleFocusAndClickListeners(document.body, h.focusOutHandler, !0),
                                h.toggleFocusAndClickListeners(h.searchForm, h.focusInHandler),
                                h.autoSuggest && h.autoSuggest.hide(),
                                h.hide())
                        },
                        this.parentHasClass = function (n, t) {
                            if (n) {
                                if (i.hasClass(n, t))
                                    return !0
                            } else
                                return !1;
                            return h.parentHasClass(n.parentNode, t)
                        },
                        n) {
                        this.searchBox = i.selectFirstElement("input", this.searchForm);
                        try {
                            c = window._pageBITags.pageTags;
                            l = c.expId.toLowerCase().split(",");
                            this.ussCategoryExpEnabled = l.indexOf("ex:" + this.ussCategoryExpId.toLowerCase()) > -1;
                            this.ussCategoryCtrlEnabled = l.indexOf("ex:" + this.ussCategoryCtrlId.toLowerCase()) > -1;
                            this.market = c.mkt
                        } catch (v) {
                            this.ussCategoryExpEnabled = !1
                        }
                        this.ussCategoryExpEnabled && this.market ? (this.categoryService = new f.UhfUssCategoryService(this.market),
                            i.addDebouncedEvent(this.searchBox, i.eventTypes.keyup, function () {
                                h.categoryService.queryService(r.trim(h.searchBox.value))
                            }, 100),
                            this.addQsp("flt", this.ussCategoryExpId)) : this.ussCategoryCtrlEnabled && this.addQsp("flt", this.ussCategoryCtrlId);
                        this.searchParentElement = i.selectFirstElement(".js-global-head");
                        this.searchButton = i.selectFirstElement("button", this.searchForm);
                        i.addEvent(this.searchButton, i.eventTypes.click, this.handleSearchButtonClick);
                        this.searchCloseButton = i.selectFirstElement(".c-action-trigger.glyph-arrow-htmllegacy");
                        i.addEvent(this.searchCloseButton, i.eventTypes.click, this.hide);
                        i.addEvent(this.searchBox, i.eventTypes.input, this.onSearchBoxChange);
                        this.toggleFocusAndClickListeners(this.searchForm, this.focusInHandler);
                        a = i.selectFirstElement(this.stSelector);
                        this.singleStackEnabled = a !== null;
                        this.searchLabel = i.selectFirstElement(this.searchLabelSelector)
                    }
                }
                return n.prototype.onSearch = function (n) {
                        var t = this,
                            u = r.trim(this.searchBox.value),
                            i;
                        return u.length ? this.ussCategoryExpEnabled ? (n.preventDefault(),
                            i = !1,
                            this.categoryService.getCategory(u, function (n) {
                                !i && n && (t.searchForm.setAttribute("action", "/" + t.market + "/store/search/" + n),
                                    t.log(),
                                    t.searchForm.submit(),
                                    i = !0)
                            }),
                            setTimeout(function () {
                                i || (t.log(),
                                    t.searchForm.submit(),
                                    i = !0)
                            }, 100), !1) : (this.log(), !0) : (n.preventDefault(),
                            this.searchBox.focus(), !1)
                    },
                    n.prototype.setSearchBoxWidth = function (n) {
                        this.width = n;
                        this.isHidden() || i.css(this.searchBox, "width", n)
                    },
                    n.prototype.getSearchFormElement = function () {
                        return this.searchForm
                    },
                    n
            }();
        t.UhfSearchModule = h
    });
    require(["componentFactory", "universalHeader", "uhfMeControl"], function (n, t, i) {
        n.ComponentFactory && n.ComponentFactory.create && (n.ComponentFactory.create([{
                c: t.UniversalHeader
            }]),
            n.ComponentFactory.create([{
                c: i.UhfMeControl,
                eventToBind: "DOMContentLoaded"
            }]))
    });
    require(["componentFactory", "universalHeader", "uhfMeControl"], function (n, t, i) {
        n.ComponentFactory && n.ComponentFactory.create && (n.ComponentFactory.create([{
                c: t.UniversalHeader
            }]),
            n.ComponentFactory.create([{
                c: i.UhfMeControl,
                eventToBind: "DOMContentLoaded"
            }]))
    });
    define("jquery", [], function () {
        return jQuery
    });
    define("uhfTelemetryHelper", ["require", "exports"], function (n, t) {
        function u(n) {
            var t = !1;
            if (n)
                switch (n.trackType) {
                case "autosuggest":
                    t = i(n);
                    break;
                case "manual":
                    t = r(n)
                }
            return t
        }

        function i(n) {
            if (n.telemetryType === "jsll") {
                var t = n.suggestionType,
                    i = t,
                    r = {
                        term: "microsoftterm",
                        product: "microsoftproduct"
                    }[i],
                    u = {
                        behavior: 60,
                        actionType: n.event,
                        contentTags: {
                            cN: r,
                            srchq: n.srchq,
                            srchtype: "auto suggest",
                            asdisplayed: !0,
                            aslinkpos: n.aslinkpos,
                            qrylngth: n.qrylngth,
                            resultselected: n.resultselected
                        }
                    };
                if (window.awa && window.awa.ct && typeof window.awa.ct.captureContentPageAction == "function")
                    return window.awa.ct.captureContentPageAction(u), !0
            } else if (n.telemetryType === "wedcs" && typeof MscomCustomEvent == "function")
                return window.MscomCustomEvent("wcs.cn", n.title, "wcs.cot", 4), !0;
            return !1
        }

        function r(n) {
            if (n.telemetryType === "jsll") {
                var t = {
                    behavior: 61,
                    actionType: n.event,
                    contentTags: {
                        cN: n.title,
                        srchq: n.srchq,
                        srchtype: "manual"
                    }
                };
                if (window.awa && window.awa.ct && typeof window.awa.ct.captureContentPageAction == "function")
                    return window.awa.ct.captureContentPageAction(t), !0
            }
            return !1
        }

        function f(n) {
            if (n) {
                var t = new Image;
                t.src = n
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.trackEvent = u;
        t.trackAutoSuggestEvents = i;
        t.trackManualEvents = r;
        t.fireBeacon = f
    });
    define("uhfUssCategoryService", ["require", "exports"], function (n, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function n(n) {
                this.market = n;
                this.responseCache = {};
                this.ajaxCall = function (n, t) {
                    var i = new XMLHttpRequest;
                    i.open("GET", n);
                    i.onreadystatechange = function () {
                        this.readyState === 4 && this.status >= 200 && this.status < 400 && t(this.responseText)
                    };
                    i.send();
                    i = null
                }
            }
            return n.prototype.getServiceUrl = function (n) {
                    return "https://ussearchprod.trafficmanager.net/services/api/v1.0/store/categories" + ("?clientid=7f27b536-cf6b-4c65-8638-a0f8cbdfca65&scope=games,apps,devices,software&query=" + n + "&markets=" + this.market)
                },
                n.prototype.getCachedCategory = function (n) {
                    return this.responseCache[this.getCacheKey(n)]
                },
                n.prototype.getCategory = function (n, t) {
                    var i = this.getCachedCategory(n);
                    i ? t(i) : this.queryService(n, t)
                },
                n.prototype.queryService = function (n, t) {
                    var i = this;
                    if (!n || this.getCachedCategory(n)) {
                        t && t(null);
                        return
                    }
                    this.ajaxCall(this.getServiceUrl(n), function (n) {
                        try {
                            var r = JSON.parse(n),
                                u = r.categories && r.categories[0],
                                f = r.query;
                            !u || !f.trim() ? t && t(null) : (i.responseCache[i.getCacheKey(f)] = u,
                                t && t(u))
                        } catch (e) {
                            t && t(null)
                        }
                    })
                },
                n.prototype.getCacheKey = function (n) {
                    return encodeURIComponent(n.trim().toLowerCase())
                },
                n
        }();
        t.UhfUssCategoryService = i
    });
    define("universalHeader", ["require", "exports", "uhfPaddles", "shoppingCart", "uhfSearchModule", "navigationMenus", "htmlExtensions", "utility", "uhfAutoSuggest", "uhfCookieAlert", "uhfPromoBanner", "uhfLanguageToggle", "removeFocus", "uhfCookieAuditor", "uhfGreenId"], function (n, t, i, r, u, f, e, o, s, h, c, l, a, v, y) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var w = ".js-global-head",
            p = ".js-cat-head",
            b = function () {
                function n() {
                    var t = this,
                        k, g, b, it, rt, ut;
                    this.hiddenClass = "x-hidden";
                    this.isMobile = function () {
                        return o.Viewports.getViewport() < 3
                    };
                    this.onWindowResize = function () {
                        t.checkForViewportChange();
                        t.wasMobile || (t.catPaddles.handleWidthChange(),
                            t.globalPaddles.handleWidthChange());
                        t.searchModule && t.setSearchWidth();
                        t.searchModule && t.searchModule.isHidden() ? t.searchModule.addMinusTabIndex() : t.searchModule && !t.searchModule.isHidden() && t.searchModule.removeTabIndex();
                        t.updateBannerBufferHeight()
                    };
                    this.setSearchWidth = function () {
                        var n = "";
                        if (o.Viewports.getViewport() >= 3 && o.Viewports.getViewport() <= 4) {
                            var i = e.getClientRect(t.globalLogo),
                                r = e.getClientRect(t.searchModule.getSearchFormElement()),
                                u = i.right < r.right ? "right" : "left";
                            n = Math.abs(r[u] - i[u]) - 60 + "px"
                        }
                        t.searchModule.setSearchBoxWidth(n)
                    };
                    this.updateBannerBufferHeight = function () {
                        if (e.css(t.headerElement, "position") === "absolute") {
                            var u = parseInt(e.css(t.headerElement, "top"), 10) || 0,
                                n = t.cookieAlert != null ? t.cookieAlert.getHeight() : 0,
                                i = t.edgePromoBanner != null ? t.edgePromoBanner.getHeight() : 0,
                                r = n > i ? n : i;
                            r !== u && t.setHeaderTop(r + "px")
                        }
                    };
                    this.delegateBannerNotification = function (n) {
                        t.setHeaderTop(n.height + "px")
                    };
                    this.swapCategoryHeader = function (n) {
                        if (n) {
                            var r = e.selectFirstElement(p),
                                u = document.createElement("DIV");
                            u.innerHTML = n;
                            r.parentNode.replaceChild(u.querySelector(p), r);
                            f.NavigationMenus.init();
                            t.catPaddles = new i.UhfPaddles(e.selectFirstElement(p));
                            t.isMobile() ? (f.NavigationMenus.handleMoveIntoMobileViewport(),
                                t.catPaddles.handleMoveIntoMobileViewport()) : (f.NavigationMenus.handleMoveIntoDesktopViewport(),
                                t.catPaddles.handleMoveIntoDesktopViewport())
                        }
                    };
                    this.headerElement = e.selectFirstElement(n.selector);
                    this.globalLogo = e.selectFirstElement(w + " .c-logo");
                    f.NavigationMenus.init();
                    this.catPaddles = new i.UhfPaddles(e.selectFirstElement(p));
                    this.globalPaddles = new i.UhfPaddles(e.selectFirstElement(w));
                    this.applyFlexClassNameForLegacyBrowsers();
                    this.isMobile() && !this.wasMobile ? (this.wasMobile = !0,
                        f.NavigationMenus.handleMoveIntoMobileViewport(),
                        this.catPaddles.handleMoveIntoMobileViewport(),
                        this.globalPaddles.handleMoveIntoMobileViewport()) : (this.wasMobile = !1,
                        f.NavigationMenus.handleMoveIntoDesktopViewport(),
                        this.catPaddles.handleMoveIntoDesktopViewport(),
                        this.globalPaddles.handleMoveIntoDesktopViewport());
                    k = e.selectFirstElement(w + "  .c-search");
                    !k || (this.uhfAutoSuggest = new s.UhfAutoSuggest,
                        this.searchModule = new u.UhfSearchModule(k, this.setSearchWidth, this.uhfAutoSuggest));
                    this.searchModule && this.searchModule.isHidden() && this.searchModule.addMinusTabIndex();
                    g = !!e.selectFirstElement("#" + r.ShoppingCart.shoppingCartFrameId);
                    g && new r.ShoppingCart;
                    e.addThrottledEvent(window, e.eventTypes.resize, this.onWindowResize, 66);
                    b = e.selectFirstElement("#uhfCookieAlert");
                    b && (this.cookieAlert = new h.UhfCookieAlert(b),
                        this.cookieAlert.subscribe({
                            onBannerClosed: this.delegateBannerNotification
                        }),
                        this.updateBannerBufferHeight());
                    var nt = window.mscc,
                        d = e.selectFirstElement("#epb"),
                        tt = e.hasClass(b, this.hiddenClass) || nt && !nt.isVisible();
                    (!b || tt) && (this.edgePromoBanner = new c.UhfPromoBanner(d),
                        this.edgePromoBanner.subscribe({
                            onBannerClosed: this.delegateBannerNotification
                        }),
                        this.updateBannerBufferHeight());
                    (!b || tt) && (!d || e.hasClass(d, this.hiddenClass)) && (it = e.selectFirstElement("#swp"),
                        e.removeClass(it, this.hiddenClass));
                    l.UhfLanguageToggle.init();
                    a.setupRemoveFocus();
                    v.UhfCookieAuditor.audit();
                    rt = new y.UhfGreenId;
                    setTimeout(rt.createGreenIdIframe, 6e3);
                    window.msCommonShell = window.msCommonShell || {};
                    ut = window.msCommonShell._catHTML;
                    window.msCommonShell._catHTML = null;
                    window.msCommonShell.swapCategoryHeader = this.swapCategoryHeader.bind(this);
                    this.swapCategoryHeader(ut)
                }
                return n.prototype.setHeaderTop = function (n) {
                        e.css(this.headerElement, "top", n)
                    },
                    n.prototype.checkForViewportChange = function () {
                        var n = this.isMobile();
                        n && !this.wasMobile ? (f.NavigationMenus.handleMoveIntoMobileViewport(),
                            this.searchModule && this.searchModule.hide(),
                            this.catPaddles.handleMoveIntoMobileViewport(),
                            this.globalPaddles.handleMoveIntoMobileViewport(),
                            this.wasMobile = !0) : !n && this.wasMobile && (f.NavigationMenus.handleMoveIntoDesktopViewport(),
                            this.searchModule && this.searchModule.hide(),
                            this.catPaddles.handleMoveIntoDesktopViewport(),
                            this.globalPaddles.handleMoveIntoDesktopViewport(),
                            this.wasMobile = !1)
                    },
                    n.setTheme = function (t) {
                        var s = e.selectFirstElement(".c-uhfh.f-transparent"),
                            u, f, o;
                        if (s) {
                            var h = e.selectElements(w + "," + p, s),
                                i = ("theme-" + t).toLowerCase(),
                                c = /theme-(dark|light)/,
                                r = c.test(i) ? h[0].className.match(c)[0] : !1;
                            if (!!r && r !== i)
                                for (n.swapLogoImage(i, r),
                                    u = 0,
                                    f = h; u < f.length; u++)
                                    o = f[u],
                                    e.removeClass(o, r),
                                    e.addClass(o, i)
                        }
                    },
                    n.swapLogoImage = function (t, i) {
                        var r = e.selectFirstElement(n.logoImageSelector);
                        if (r) {
                            var u = function (n) {
                                    return n === "theme-light" ? "gray" : "white"
                                },
                                f = u(i),
                                o = u(t);
                            r.setAttribute("src", r.src.replace(f, o))
                        }
                    },
                    n.prototype.applyFlexClassNameForLegacyBrowsers = function () {
                        for (var i, r = document.createElement("p").style, n = 0, t = ["flex", "msFlex", "OFlex", "MozFlex", "WebkitFlex"]; n < t.length; n++)
                            if (i = t[n],
                                r[i] !== undefined)
                                return;
                        e.addClass(this.headerElement, "context-noflex")
                    },
                    n.selector = ".c-uhfh",
                    n.logoImageSelector = ".c-uhfh > div:first-child .c-logo .c-image",
                    n
            }();
        t.UniversalHeader = b
    })
})()