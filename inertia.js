/*!
 * InertiaPlugin 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2021, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */ !(function (t, n) {
  'object' == typeof exports && 'undefined' != typeof module
    ? n(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], n)
    : n(((t = t || self).window = t.window || {}));
})(this, function (t) {
  'use strict';
  function n() {
    return s || ('undefined' != typeof window && (s = window.gsap));
  }
  function e(t) {
    return v(t).id;
  }
  function i(t) {
    return _[e('string' == typeof t ? c(t)[0] : t)];
  }
  function r(t) {
    var n,
      e = p;
    if (0.05 <= t - l)
      for (l = t; e; )
        ((n = e.g(e.t, e.p)) !== e.v1 || 0.2 < t - e.t1) &&
          ((e.v2 = e.v1), (e.v1 = n), (e.t2 = e.t1), (e.t1 = t)),
          (e = e._next);
  }
  function o() {
    (s = n()) &&
      ((c = s.utils.toArray),
      (f = s.utils.getUnit),
      (v = s.core.getCache),
      (g = s.ticker),
      (u = 1));
  }
  function a(t, n, e, i) {
    (this.t = t),
      (this.p = n),
      (this.g = t._gsap.get),
      (this.rCap = d[e || f(this.g(t, n))]),
      (this.v1 = this.v2 = 0),
      (this.t1 = this.t2 = g.time),
      i && ((this._next = i)._prev = this);
  }
  var s,
    u,
    c,
    f,
    p,
    g,
    l,
    v,
    _ = {},
    d = { deg: 360, rad: 2 * Math.PI },
    h = (function () {
      function t(t, n) {
        u || o(),
          (this.target = c(t)[0]),
          ((_[e(this.target)] = this)._props = {}),
          n && this.add(n);
      }
      t.register = function t(n) {
        (s = n), o();
      };
      var n = t.prototype;
      return (
        (n.get = function t(n, e) {
          var i,
            r,
            o,
            a =
              this._props[n] ||
              console.warn('Not tracking ' + n + ' velocity.');
          return (
            (i = parseFloat(e ? a.v1 : a.g(a.t, a.p)) - parseFloat(a.v2)),
            (r = a.rCap) &&
              (i %= r) != i % (r / 2) &&
              (i = i < 0 ? i + r : i - r),
            Math.round(1e4 * (i / ((e ? a.t1 : g.time) - a.t2))) / 1e4
          );
        }),
        (n.getAll = function t() {
          var n,
            e = {},
            i = this._props;
          for (n in i) e[n] = this.get(n);
          return e;
        }),
        (n.isTracking = function t(n) {
          return n in this._props;
        }),
        (n.add = function t(n, e) {
          n in this._props ||
            (p || (g.add(r), (l = g.time)),
            (p = this._props[n] = new a(this.target, n, e, p)));
        }),
        (n.remove = function t(n) {
          var e,
            i,
            o = this._props[n];
          o &&
            ((e = o._prev),
            (i = o._next),
            e && (e._next = i),
            i ? (i._prev = e) : p === o && (g.remove(r), (p = 0)),
            delete this._props[n]);
        }),
        (n.kill = function t(n) {
          for (var i in this._props) this.remove(i);
          n || delete _[e(this.target)];
        }),
        (t.track = function n(e, r, a) {
          u || o();
          for (
            var s,
              f,
              p = [],
              g = c(e),
              l = r.split(','),
              v = (a || '').split(','),
              _ = g.length;
            _--;

          ) {
            for (s = i(g[_]) || new t(g[_]), f = l.length; f--; )
              s.add(l[f], v[f] || v[0]);
            p.push(s);
          }
          return p;
        }),
        (t.untrack = function t(n, e) {
          var r = (e || '').split(',');
          c(n).forEach(function (t) {
            var n = i(t);
            n &&
              (r.length
                ? r.forEach(function (t) {
                    return n.remove(t);
                  })
                : n.kill(1));
          });
        }),
        (t.isTracking = function t(n, e) {
          var r = i(n);
          return r && r.isTracking(e);
        }),
        (t.getVelocity = function t(n, e) {
          var r = i(n);
          return r && r.isTracking(e)
            ? r.get(e)
            : console.warn('Not tracking velocity of ' + e);
        }),
        t
      );
    })();
  function $() {
    return (
      I ||
      ('undefined' != typeof window &&
        (I = window.gsap) &&
        I.registerPlugin &&
        I)
    );
  }
  function m(t) {
    return 'number' == typeof t;
  }
  function y(t) {
    return 'object' == typeof t;
  }
  function k(t) {
    return 'function' == typeof t;
  }
  function x(t) {
    return t;
  }
  function w(t) {
    return Math.round(1e4 * t) / 1e4;
  }
  function T(t, n, e) {
    for (var i in n) i in t || i === e || (t[i] = n[i]);
    return t;
  }
  function P(t) {
    var n,
      e,
      i = {};
    for (n in t) i[n] = y((e = t[n])) && !Q(e) ? P(e) : e;
    return i;
  }
  function b(t, n, e, i, r) {
    var o,
      a,
      s,
      u,
      c = n.length,
      f = 0,
      p = S;
    if (y(t)) {
      for (; c--; ) {
        for (s in ((o = n[c]), (a = 0), t)) a += (u = o[s] - t[s]) * u;
        a < p && ((f = c), (p = a));
      }
      if ((r || S) < S && r < Math.sqrt(p)) return t;
    } else for (; c--; ) (a = (o = n[c]) - t) < 0 && (a = -a), a < p && i <= o && o <= e && ((f = c), (p = a));
    return n[f];
  }
  function F(t, n, e, i, r, o, a) {
    if ('auto' === t.end) return t;
    var s,
      u,
      c = t.end;
    if (((e = isNaN(e) ? S : e), (i = isNaN(i) ? -S : i), y(n))) {
      if (
        ((s = n.calculated ? n : (k(c) ? c(n, a) : b(n, c, e, i, o)) || n),
        !n.calculated)
      ) {
        for (u in s) n[u] = s[u];
        n.calculated = !0;
      }
      s = s[r];
    } else s = k(c) ? c(n, a) : Q(c) ? b(n, c, e, i, o) : parseFloat(c);
    return (
      e < s ? (s = e) : s < i && (s = i),
      { max: s, min: s, unitFactor: t.unitFactor }
    );
  }
  function C(t, n, e) {
    return isNaN(t[n]) ? e : +t[n];
  }
  function A(t, n) {
    return (0.05 * n * t) / G;
  }
  function E(t, n, e) {
    return Math.abs(((n - t) * G) / e / 0.05);
  }
  function O(t, n, e, i) {
    if (n.linkedProps) {
      var r,
        o,
        a,
        s,
        u,
        c,
        f = n.linkedProps.split(','),
        p = {};
      for (r = 0; r < f.length; r++)
        (a = n[(o = f[r])]) &&
          ((c = Math.abs(
            (s = m(a.velocity)
              ? a.velocity
              : (u = u || K(t)) && u.isTracking(o)
              ? u.get(o)
              : 0) / C(a, 'resistance', i)
          )),
          (p[o] = parseFloat(e(t, o)) + A(s, c)));
      return p;
    }
  }
  function N() {
    (I = $()) &&
      ((V = I.parseEase),
      (j = I.utils.toArray),
      (M = I.utils.getUnit),
      (D = I.core.getCache),
      (H = I.utils.clamp),
      (G = (U = V('power3'))(0.05)),
      (z = I.core.PropTween),
      I.config({
        resistance: 100,
        unitFactors: {
          time: 1e3,
          totalTime: 1e3,
          progress: 1e3,
          totalProgress: 1e3,
        },
      }),
      (q = I.config()),
      I.registerPlugin(h),
      (R = 1));
  }
  (h.getByTarget = i), n() && s.registerPlugin(h);
  var B,
    I,
    R,
    V,
    j,
    U,
    q,
    M,
    z,
    D,
    G,
    H,
    J,
    K = h.getByTarget,
    L =
      ((function t() {
        return String.fromCharCode.apply(null, arguments);
      })(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
      void (window && window.location.host)),
    Q = Array.isArray,
    S = 1e10,
    W = {
      resistance: 1,
      checkpoint: 1,
      preventOvershoot: 1,
      linkedProps: 1,
      radius: 1,
      duration: 1,
    },
    X = {
      version: '3.8.0',
      name: 'inertia',
      register: function t(n) {
        (I = n), N();
      },
      init: function t(n, e, i, r, o) {
        R || N();
        var a = K(n);
        if ('auto' === e) {
          if (!a)
            return void console.warn(
              'No inertia tracking on ' +
                n +
                '. InertiaPlugin.track(target) first.'
            );
          e = a.getAll();
        }
        (this.target = n), (this.tween = i), (J = e);
        var s,
          u,
          c,
          f,
          p,
          g,
          l,
          v,
          _,
          d = n._gsap,
          h = d.get,
          $ = e.duration,
          w = y($),
          b = e.preventOvershoot || (w && 0 === $.overshoot),
          B = C(e, 'resistance', q.resistance),
          I = m($)
            ? $
            : (function t(n, e, i, r, o, a) {
                if (
                  (void 0 === i && (i = 10),
                  void 0 === r && (r = 0.2),
                  void 0 === o && (o = 1),
                  void 0 === a && (a = 0),
                  'string' == typeof (s = n) && (n = j(n)[0]),
                  !n)
                )
                  return 0;
                var s,
                  u,
                  c,
                  f,
                  p,
                  g,
                  l,
                  v,
                  _,
                  d,
                  h,
                  $ = 0,
                  k = S,
                  x = e.inertia || e,
                  w = D(n).get,
                  b = C(x, 'resistance', q.resistance);
                for (u in ((h = O(n, x, w, b)), x))
                  W[u] ||
                    (y((c = x[u])) ||
                      ((_ = _ || K(n)) && _.isTracking(u)
                        ? (c = m(c) ? { velocity: c } : { velocity: _.get(u) })
                        : (f = Math.abs((p = +c || 0) / b))),
                    y(c) &&
                      ((p = m(c.velocity)
                        ? c.velocity
                        : (_ = _ || K(n)) && _.isTracking(u)
                        ? _.get(u)
                        : 0),
                      (f = H(r, i, Math.abs(p / C(c, 'resistance', b)))),
                      (l = (g = parseFloat(w(n, u)) || 0) + A(p, f)),
                      'end' in c &&
                        ((c = F(
                          c,
                          h && u in h ? h : l,
                          c.max,
                          c.min,
                          u,
                          x.radius,
                          p
                        )),
                        a &&
                          (J === e && (J = x = P(e)),
                          (x[u] = T(c, x[u], 'end')))),
                      'max' in c && l > +c.max + 1e-10
                        ? ((d = c.unitFactor || q.unitFactors[u] || 1),
                          (v =
                            (g > c.max && c.min !== c.max) ||
                            (-15 < p * d && p * d < 45)
                              ? r + 0.1 * (i - r)
                              : E(g, c.max, p)) +
                            o <
                            k && (k = v + o))
                        : 'min' in c &&
                          l < c.min - 1e-10 &&
                          ((d = c.unitFactor || q.unitFactors[u] || 1),
                          (v =
                            (g < c.min && c.min !== c.max) ||
                            (-45 < p * d && p * d < 15)
                              ? r + 0.1 * (i - r)
                              : E(g, c.min, p)) +
                            o <
                            k && (k = v + o)),
                      $ < v && ($ = v)),
                    $ < f && ($ = f));
                return k < $ && ($ = k), i < $ ? i : $ < r ? r : $;
              })(
                n,
                e,
                (w && $.max) || 10,
                (w && $.min) || 0.2,
                w && 'overshoot' in $ ? +$.overshoot : b ? 0 : 1,
                !0
              );
        for (s in ((e = J), (J = 0), (_ = O(n, e, h, B)), e))
          W[s] ||
            (k((u = e[s])) && (u = u(r, n, o)),
            m(u)
              ? (p = u)
              : y(u) && !isNaN(u.velocity)
              ? (p = +u.velocity)
              : a && a.isTracking(s)
              ? (p = a.get(s))
              : console.warn(
                  'ERROR: No velocity was defined for ' + n + ' property: ' + s
                ),
            (g = A(p, I)),
            (v = 0),
            (c = h(n, s)),
            (f = M(c)),
            (c = parseFloat(c)),
            y(u) &&
              ((l = c + g),
              'end' in u &&
                (u = F(u, _ && s in _ ? _ : l, u.max, u.min, s, e.radius, p)),
              'max' in u && +u.max < l
                ? b || u.preventOvershoot
                  ? (g = u.max - c)
                  : (v = u.max - c - g)
                : 'min' in u &&
                  +u.min > l &&
                  (b || u.preventOvershoot
                    ? (g = u.min - c)
                    : (v = u.min - c - g))),
            this._props.push(s),
            (this._pt = new z(this._pt, n, s, c, 0, x, 0, d.set(n, s, this))),
            (this._pt.u = f || 0),
            (this._pt.c1 = g),
            (this._pt.c2 = v));
        return i.duration(I), L;
      },
      render: function t(n, e) {
        var i = e._pt;
        for (n = U(e.tween._time / e.tween._dur); i; )
          i.set(i.t, i.p, w(i.s + i.c1 * n + i.c2 * n * n) + i.u, i.d, n),
            (i = i._next);
      },
    };
  'track,untrack,isTracking,getVelocity,getByTarget'
    .split(',')
    .forEach(function (t) {
      return (X[t] = h[t]);
    }),
    $() && I.registerPlugin(X),
    (t.InertiaPlugin = X),
    (t.VelocityTracker = h),
    (t.default = X),
    'undefined' == typeof window || window !== t
      ? Object.defineProperty(t, '__esModule', { value: !0 })
      : delete t.default;
});
