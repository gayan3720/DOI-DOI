function f1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const a of i.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
      o.crossorigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossorigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function p1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var ac = { exports: {} },
  sc = {},
  p = { exports: {} },
  $e = {};
var Ws = Symbol.for('react.element'),
  wE = Symbol.for('react.portal'),
  CE = Symbol.for('react.fragment'),
  EE = Symbol.for('react.strict_mode'),
  PE = Symbol.for('react.profiler'),
  TE = Symbol.for('react.provider'),
  OE = Symbol.for('react.context'),
  RE = Symbol.for('react.forward_ref'),
  ME = Symbol.for('react.suspense'),
  $E = Symbol.for('react.memo'),
  IE = Symbol.for('react.lazy'),
  pv = Symbol.iterator;
function kE(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (pv && e[pv]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var m1 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  h1 = Object.assign,
  v1 = {};
function ha(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = v1),
    (this.updater = n || m1);
}
ha.prototype.isReactComponent = {};
ha.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
ha.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function g1() {}
g1.prototype = ha.prototype;
function gm(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = v1),
    (this.updater = n || m1);
}
var ym = (gm.prototype = new g1());
ym.constructor = gm;
h1(ym, ha.prototype);
ym.isPureReactComponent = !0;
var mv = Array.isArray,
  y1 = Object.prototype.hasOwnProperty,
  xm = { current: null },
  x1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function b1(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      y1.call(t, r) && !x1.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Ws,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: xm.current,
  };
}
function AE(e, t) {
  return {
    $$typeof: Ws,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function bm(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ws;
}
function NE(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var hv = /\/+/g;
function vd(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? NE('' + e.key)
    : t.toString(36);
}
function Ul(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        a = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Ws:
          case wE:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === '' ? '.' + vd(a, 0) : r),
      mv(o)
        ? ((n = ''),
          e != null && (n = e.replace(hv, '$&/') + '/'),
          Ul(o, t, n, '', function (u) {
            return u;
          }))
        : o != null &&
          (bm(o) &&
            (o = AE(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ''
                  : ('' + o.key).replace(hv, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === '' ? '.' : r + ':'), mv(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + vd(i, s);
      a += Ul(i, t, n, l, o);
    }
  else if (((l = kE(e)), typeof l == 'function'))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + vd(i, s++)), (a += Ul(i, t, n, l, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return a;
}
function fl(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ul(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function LE(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var tn = { current: null },
  Wl = { transition: null },
  _E = {
    ReactCurrentDispatcher: tn,
    ReactCurrentBatchConfig: Wl,
    ReactCurrentOwner: xm,
  };
$e.Children = {
  map: fl,
  forEach: function (e, t, n) {
    fl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      fl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      fl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!bm(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
$e.Component = ha;
$e.Fragment = CE;
$e.Profiler = PE;
$e.PureComponent = gm;
$e.StrictMode = EE;
$e.Suspense = ME;
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _E;
$e.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = h1({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = xm.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      y1.call(t, l) &&
        !x1.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Ws, type: e.type, key: o, ref: i, props: r, _owner: a };
};
$e.createContext = function (e) {
  return (
    (e = {
      $$typeof: OE,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: TE, _context: e }),
    (e.Consumer = e)
  );
};
$e.createElement = b1;
$e.createFactory = function (e) {
  var t = b1.bind(null, e);
  return (t.type = e), t;
};
$e.createRef = function () {
  return { current: null };
};
$e.forwardRef = function (e) {
  return { $$typeof: RE, render: e };
};
$e.isValidElement = bm;
$e.lazy = function (e) {
  return { $$typeof: IE, _payload: { _status: -1, _result: e }, _init: LE };
};
$e.memo = function (e, t) {
  return { $$typeof: $E, type: e, compare: t === void 0 ? null : t };
};
$e.startTransition = function (e) {
  var t = Wl.transition;
  Wl.transition = {};
  try {
    e();
  } finally {
    Wl.transition = t;
  }
};
$e.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
$e.useCallback = function (e, t) {
  return tn.current.useCallback(e, t);
};
$e.useContext = function (e) {
  return tn.current.useContext(e);
};
$e.useDebugValue = function () {};
$e.useDeferredValue = function (e) {
  return tn.current.useDeferredValue(e);
};
$e.useEffect = function (e, t) {
  return tn.current.useEffect(e, t);
};
$e.useId = function () {
  return tn.current.useId();
};
$e.useImperativeHandle = function (e, t, n) {
  return tn.current.useImperativeHandle(e, t, n);
};
$e.useInsertionEffect = function (e, t) {
  return tn.current.useInsertionEffect(e, t);
};
$e.useLayoutEffect = function (e, t) {
  return tn.current.useLayoutEffect(e, t);
};
$e.useMemo = function (e, t) {
  return tn.current.useMemo(e, t);
};
$e.useReducer = function (e, t, n) {
  return tn.current.useReducer(e, t, n);
};
$e.useRef = function (e) {
  return tn.current.useRef(e);
};
$e.useState = function (e) {
  return tn.current.useState(e);
};
$e.useSyncExternalStore = function (e, t, n) {
  return tn.current.useSyncExternalStore(e, t, n);
};
$e.useTransition = function () {
  return tn.current.useTransition();
};
$e.version = '18.2.0';
(function (e) {
  e.exports = $e;
})(p);
const de = p1(p.exports),
  Yo = f1({ __proto__: null, default: de }, [p.exports]);
var DE = p.exports,
  jE = Symbol.for('react.element'),
  zE = Symbol.for('react.fragment'),
  BE = Object.prototype.hasOwnProperty,
  FE = DE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  VE = { key: !0, ref: !0, __self: !0, __source: !0 };
function S1(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) BE.call(t, r) && !VE.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: jE,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: FE.current,
  };
}
sc.Fragment = zE;
sc.jsx = S1;
sc.jsxs = S1;
(function (e) {
  e.exports = sc;
})(ac);
const HE = ac.exports.Fragment,
  M = ac.exports.jsx,
  ie = ac.exports.jsxs;
function ht() {
  return (
    (ht = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ht.apply(this, arguments)
  );
}
var Tt;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Tt || (Tt = {}));
const vv = 'popstate';
function UE(e) {
  e === void 0 && (e = {});
  function t(o, i) {
    let {
      pathname: a = '/',
      search: s = '',
      hash: l = '',
    } = sr(o.location.hash.substr(1));
    return vs(
      '',
      { pathname: a, search: s, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    );
  }
  function n(o, i) {
    let a = o.document.querySelector('base'),
      s = '';
    if (a && a.getAttribute('href')) {
      let l = o.location.href,
        u = l.indexOf('#');
      s = u === -1 ? l : l.slice(0, u);
    }
    return s + '#' + (typeof i == 'string' ? i : co(i));
  }
  function r(o, i) {
    WE(
      o.pathname.charAt(0) === '/',
      'relative pathnames are not supported in hash history.push(' +
        JSON.stringify(i) +
        ')'
    );
  }
  return GE(t, n, r, e);
}
function Oe(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function WE(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function KE() {
  return Math.random().toString(36).substr(2, 8);
}
function gv(e) {
  return { usr: e.state, key: e.key };
}
function vs(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ht(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? sr(t) : t,
      { state: n, key: (t && t.key) || r || KE() }
    )
  );
}
function co(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function sr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function gs(e) {
  let t =
      typeof window < 'u' &&
      typeof window.location < 'u' &&
      window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href,
    n = typeof e == 'string' ? e : co(e);
  return (
    Oe(
      t,
      'No window.location.(origin|href) available to create URL for href: ' + n
    ),
    new URL(n, t)
  );
}
function GE(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    s = Tt.Pop,
    l = null;
  function u() {
    (s = Tt.Pop), l && l({ action: s, location: d.location });
  }
  function c(m, v) {
    s = Tt.Push;
    let x = vs(d.location, m, v);
    n && n(x, m);
    let S = gv(x),
      y = d.createHref(x);
    try {
      a.pushState(S, '', y);
    } catch {
      o.location.assign(y);
    }
    i && l && l({ action: s, location: d.location });
  }
  function f(m, v) {
    s = Tt.Replace;
    let x = vs(d.location, m, v);
    n && n(x, m);
    let S = gv(x),
      y = d.createHref(x);
    a.replaceState(S, '', y), i && l && l({ action: s, location: d.location });
  }
  let d = {
    get action() {
      return s;
    },
    get location() {
      return e(o, a);
    },
    listen(m) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(vv, u),
        (l = m),
        () => {
          o.removeEventListener(vv, u), (l = null);
        }
      );
    },
    createHref(m) {
      return t(o, m);
    },
    encodeLocation(m) {
      let v = gs(typeof m == 'string' ? m : co(m));
      return { pathname: v.pathname, search: v.search, hash: v.hash };
    },
    push: c,
    replace: f,
    go(m) {
      return a.go(m);
    },
  };
  return d;
}
var zt;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(zt || (zt = {}));
function XE(e) {
  return e.index === !0;
}
function w1(e, t, n) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = new Set()),
    e.map((r, o) => {
      let i = [...t, o],
        a = typeof r.id == 'string' ? r.id : i.join('-');
      return (
        Oe(
          r.index !== !0 || !r.children,
          'Cannot specify children on an index route'
        ),
        Oe(
          !n.has(a),
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        n.add(a),
        XE(r)
          ? ht({}, r, { id: a })
          : ht({}, r, {
              id: a,
              children: r.children ? w1(r.children, i, n) : void 0,
            })
      );
    })
  );
}
function Ka(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? sr(t) : t,
    o = E1(r.pathname || '/', n);
  if (o == null) return null;
  let i = C1(e);
  QE(i);
  let a = null;
  for (let s = 0; a == null && s < i.length; ++s) a = oP(i[s], sP(o));
  return a;
}
function C1(e, t, n, r) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ''),
    e.forEach((o, i) => {
      let a = {
        relativePath: o.path || '',
        caseSensitive: o.caseSensitive === !0,
        childrenIndex: i,
        route: o,
      };
      a.relativePath.startsWith('/') &&
        (Oe(
          a.relativePath.startsWith(r),
          'Absolute route path "' +
            a.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            'must start with the combined path of all its parent routes.'
        ),
        (a.relativePath = a.relativePath.slice(r.length)));
      let s = Zr([r, a.relativePath]),
        l = n.concat(a);
      o.children &&
        o.children.length > 0 &&
        (Oe(
          o.index !== !0,
          'Index routes must not have child routes. Please remove ' +
            ('all child routes from route path "' + s + '".')
        ),
        C1(o.children, t, l, s)),
        !(o.path == null && !o.index) &&
          t.push({ path: s, score: nP(s, o.index), routesMeta: l });
    }),
    t
  );
}
function QE(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : rP(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const YE = /^:\w+$/,
  qE = 3,
  ZE = 2,
  JE = 1,
  eP = 10,
  tP = -2,
  yv = (e) => e === '*';
function nP(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(yv) && (r += tP),
    t && (r += ZE),
    n
      .filter((o) => !yv(o))
      .reduce((o, i) => o + (YE.test(i) ? qE : i === '' ? JE : eP), r)
  );
}
function rP(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function oP(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let s = n[a],
      l = a === n.length - 1,
      u = o === '/' ? t : t.slice(o.length) || '/',
      c = iP(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = s.route;
    i.push({
      params: r,
      pathname: Zr([o, c.pathname]),
      pathnameBase: dP(Zr([o, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== '/' && (o = Zr([o, c.pathnameBase]));
  }
  return i;
}
function iP(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = aP(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, '$1'),
    s = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      if (c === '*') {
        let d = s[f] || '';
        a = i.slice(0, i.length - d.length).replace(/(.)\/+$/, '$1');
      }
      return (u[c] = lP(s[f] || '', c)), u;
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function aP(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Sm(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/:(\w+)/g, (a, s) => (r.push(s), '([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function sP(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Sm(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function lP(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Sm(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    );
  }
}
function E1(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Sm(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function uP(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? sr(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : cP(n, t)) : t,
    search: fP(r),
    hash: pP(o),
  };
}
function cP(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function gd(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function wm(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function P1(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = sr(e))
    : ((o = ht({}, e)),
      Oe(
        !o.pathname || !o.pathname.includes('?'),
        gd('?', 'pathname', 'search', o)
      ),
      Oe(
        !o.pathname || !o.pathname.includes('#'),
        gd('#', 'pathname', 'hash', o)
      ),
      Oe(!o.search || !o.search.includes('#'), gd('#', 'search', 'hash', o)));
  let i = e === '' || o.pathname === '',
    a = i ? '/' : o.pathname,
    s;
  if (r || a == null) s = n;
  else {
    let f = t.length - 1;
    if (a.startsWith('..')) {
      let d = a.split('/');
      for (; d[0] === '..'; ) d.shift(), (f -= 1);
      o.pathname = d.join('/');
    }
    s = f >= 0 ? t[f] : '/';
  }
  let l = uP(o, s),
    u = a && a !== '/' && a.endsWith('/'),
    c = (i || a === '.') && n.endsWith('/');
  return !l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l;
}
const Zr = (e) => e.join('/').replace(/\/\/+/g, '/'),
  dP = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  fP = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  pP = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class xv extends Error {}
class mP {
  constructor(t) {
    (this.pendingKeys = new Set()),
      (this.subscriber = void 0),
      Oe(
        t && typeof t == 'object' && !Array.isArray(t),
        'defer() only accepts plain objects'
      );
    let n;
    (this.abortPromise = new Promise((o, i) => (n = i))),
      (this.controller = new AbortController());
    let r = () => n(new xv('Deferred data aborted'));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener('abort', r)),
      this.controller.signal.addEventListener('abort', r),
      (this.data = Object.entries(t).reduce((o, i) => {
        let [a, s] = i;
        return Object.assign(o, { [a]: this.trackPromise(a, s) });
      }, {}));
  }
  trackPromise(t, n) {
    if (!(n instanceof Promise)) return n;
    this.pendingKeys.add(t);
    let r = Promise.race([n, this.abortPromise]).then(
      (o) => this.onSettle(r, t, null, o),
      (o) => this.onSettle(r, t, o)
    );
    return (
      r.catch(() => {}),
      Object.defineProperty(r, '_tracked', { get: () => !0 }),
      r
    );
  }
  onSettle(t, n, r, o) {
    if (this.controller.signal.aborted && r instanceof xv)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, '_error', { get: () => r }),
        Promise.reject(r)
      );
    this.pendingKeys.delete(n), this.done && this.unlistenAbortSignal();
    const i = this.subscriber;
    return r
      ? (Object.defineProperty(t, '_error', { get: () => r }),
        i && i(!1),
        Promise.reject(r))
      : (Object.defineProperty(t, '_data', { get: () => o }), i && i(!1), o);
  }
  subscribe(t) {
    this.subscriber = t;
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeys.forEach((n, r) => this.pendingKeys.delete(r));
    let t = this.subscriber;
    t && t(!0);
  }
  async resolveData(t) {
    let n = !1;
    if (!this.done) {
      let r = () => this.cancel();
      t.addEventListener('abort', r),
        (n = await new Promise((o) => {
          this.subscribe((i) => {
            t.removeEventListener('abort', r), (i || this.done) && o(i);
          });
        }));
    }
    return n;
  }
  get done() {
    return this.pendingKeys.size === 0;
  }
  get unwrappedData() {
    return (
      Oe(
        this.data !== null && this.done,
        'Can only unwrap data on initialized and settled deferreds'
      ),
      Object.entries(this.data).reduce((t, n) => {
        let [r, o] = n;
        return Object.assign(t, { [r]: vP(o) });
      }, {})
    );
  }
}
function hP(e) {
  return e instanceof Promise && e._tracked === !0;
}
function vP(e) {
  if (!hP(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
class lc {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function T1(e) {
  return e instanceof lc;
}
const O1 = ['post', 'put', 'patch', 'delete'],
  gP = new Set(O1),
  yP = ['get', ...O1],
  xP = new Set(yP),
  bP = new Set([301, 302, 303, 307, 308]),
  SP = new Set([307, 308]),
  yd = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  wP = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  CP =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  EP = !CP;
function PP(e) {
  Oe(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let t = w1(e.routes),
    n = null,
    r = new Set(),
    o = null,
    i = null,
    a = null,
    s = !1,
    l = Ka(t, e.history.location, e.basename),
    u = null;
  if (l == null) {
    let _ = _o(404, { pathname: e.history.location.pathname }),
      { matches: A, route: D } = Ev(t);
    (l = A), (u = { [D.id]: _ });
  }
  let c = !l.some((_) => _.route.loader) || e.hydrationData != null,
    f,
    d = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: l,
      initialized: c,
      navigation: yd,
      restoreScrollPosition: null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || u,
      fetchers: new Map(),
    },
    m = Tt.Pop,
    v = !1,
    x,
    S = !1,
    y = !1,
    h = [],
    g = [],
    b = new Map(),
    C = 0,
    P = -1,
    w = new Map(),
    T = new Set(),
    $ = new Map(),
    N = new Map();
  function j() {
    return (
      (n = e.history.listen((_) => {
        let { action: A, location: D } = _;
        return E(A, D);
      })),
      d.initialized || E(Tt.Pop, d.location),
      f
    );
  }
  function F() {
    n && n(), r.clear(), x && x.abort(), d.fetchers.forEach((_, A) => pe(A));
  }
  function H(_) {
    return r.add(_), () => r.delete(_);
  }
  function z(_) {
    (d = ht({}, d, _)), r.forEach((A) => A(d));
  }
  function V(_, A) {
    var D;
    let U =
        d.actionData != null &&
        d.navigation.formMethod != null &&
        d.navigation.state === 'loading' &&
        ((D = d.navigation.formAction) == null ? void 0 : D.split('?')[0]) ===
          _.pathname,
      K = A.loaderData
        ? { loaderData: xd(d.loaderData, A.loaderData, A.matches || []) }
        : {};
    z(
      ht({}, U ? {} : { actionData: null }, A, K, {
        historyAction: m,
        location: _,
        initialized: !0,
        navigation: yd,
        revalidation: 'idle',
        restoreScrollPosition: d.navigation.formData
          ? !1
          : Ne(_, A.matches || d.matches),
        preventScrollReset: v,
      })
    ),
      S ||
        m === Tt.Pop ||
        (m === Tt.Push
          ? e.history.push(_, _.state)
          : m === Tt.Replace && e.history.replace(_, _.state)),
      (m = Tt.Pop),
      (v = !1),
      (S = !1),
      (y = !1),
      (h = []),
      (g = []);
  }
  async function R(_, A) {
    if (typeof _ == 'number') {
      e.history.go(_);
      return;
    }
    let { path: D, submission: U, error: K } = bv(_, A),
      Y = vs(d.location, D, A && A.state);
    Y = ht({}, Y, e.history.encodeLocation(Y));
    let le = (A && A.replace) === !0 || U != null ? Tt.Replace : Tt.Push,
      be =
        A && 'preventScrollReset' in A ? A.preventScrollReset === !0 : void 0;
    return await E(le, Y, {
      submission: U,
      pendingError: K,
      preventScrollReset: be,
      replace: A && A.replace,
    });
  }
  function O() {
    if (
      (ae(),
      z({ revalidation: 'loading' }),
      d.navigation.state !== 'submitting')
    ) {
      if (d.navigation.state === 'idle') {
        E(d.historyAction, d.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      E(m || d.historyAction, d.navigation.location, {
        overrideNavigation: d.navigation,
      });
    }
  }
  async function E(_, A, D) {
    x && x.abort(),
      (x = null),
      (m = _),
      (S = (D && D.startUninterruptedRevalidation) === !0),
      He(d.location, d.matches),
      (v = (D && D.preventScrollReset) === !0);
    let U = D && D.overrideNavigation,
      K = Ka(t, A, e.basename);
    if (!K) {
      let Ee = _o(404, { pathname: A.pathname }),
        { matches: De, route: Pe } = Ev(t);
      Re(), V(A, { matches: De, loaderData: {}, errors: { [Pe.id]: Ee } });
      return;
    }
    if ($P(d.location, A)) {
      V(A, { matches: K });
      return;
    }
    x = new AbortController();
    let Y = $a(A, x.signal, D && D.submission),
      le,
      be;
    if (D && D.pendingError) be = { [Mi(K).route.id]: D.pendingError };
    else if (D && D.submission) {
      let Ee = await k(Y, A, D.submission, K, { replace: D.replace });
      if (Ee.shortCircuited) return;
      (le = Ee.pendingActionData),
        (be = Ee.pendingActionError),
        (U = ht({ state: 'loading', location: A }, D.submission)),
        (Y = new Request(Y.url, { signal: Y.signal }));
    }
    let {
      shortCircuited: ue,
      loaderData: Se,
      errors: Ce,
    } = await I(Y, A, K, U, D && D.submission, D && D.replace, le, be);
    ue || ((x = null), V(A, { matches: K, loaderData: Se, errors: Ce }));
  }
  async function k(_, A, D, U, K) {
    ae();
    let Y = ht({ state: 'submitting', location: A }, D);
    z({ navigation: Y });
    let le,
      be = Rv(U, A);
    if (!be.route.action)
      le = {
        type: zt.error,
        error: _o(405, {
          method: _.method,
          pathname: A.pathname,
          routeId: be.route.id,
        }),
      };
    else if (
      ((le = await Ma('action', _, be, U, f.basename)), _.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Qi(le))
      return await ne(d, le, K && K.replace === !0), { shortCircuited: !0 };
    if (Ja(le)) {
      let ue = Mi(U, be.route.id);
      return (
        (K && K.replace) !== !0 && (m = Tt.Push),
        { pendingActionError: { [ue.route.id]: le.error } }
      );
    }
    if (jo(le)) throw new Error('defer() is not supported in actions');
    return { pendingActionData: { [be.route.id]: le.data } };
  }
  async function I(_, A, D, U, K, Y, le, be) {
    let ue = U;
    ue ||
      (ue = {
        state: 'loading',
        location: A,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      });
    let [Se, Ce] = Sv(d, D, K, A, y, h, g, le, be, $);
    if (
      (Re(
        (ye) =>
          !(D && D.some((ze) => ze.route.id === ye)) ||
          (Se && Se.some((ze) => ze.route.id === ye))
      ),
      Se.length === 0 && Ce.length === 0)
    )
      return (
        V(A, {
          matches: D,
          loaderData: xd(d.loaderData, {}, D),
          errors: be || null,
          actionData: le || null,
        }),
        { shortCircuited: !0 }
      );
    S ||
      (Ce.forEach((ye) => {
        let [ze] = ye,
          ut = d.fetchers.get(ze),
          tt = {
            state: 'loading',
            data: ut && ut.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
          };
        d.fetchers.set(ze, tt);
      }),
      z(
        ht(
          { navigation: ue, actionData: le || d.actionData || null },
          Ce.length > 0 ? { fetchers: new Map(d.fetchers) } : {}
        )
      )),
      (P = ++C),
      Ce.forEach((ye) => {
        let [ze] = ye;
        return b.set(ze, x);
      });
    let {
      results: Ee,
      loaderResults: De,
      fetcherResults: Pe,
    } = await q(d.matches, D, Se, Ce, _);
    if (_.signal.aborted) return { shortCircuited: !0 };
    Ce.forEach((ye) => {
      let [ze] = ye;
      return b.delete(ze);
    });
    let lt = Pv(Ee);
    if (lt) return await ne(d, lt, Y), { shortCircuited: !0 };
    let { loaderData: rt, errors: $t } = Cv(d, D, Se, De, be, Ce, Pe, N);
    N.forEach((ye, ze) => {
      ye.subscribe((ut) => {
        (ut || ye.done) && N.delete(ze);
      });
    }),
      Ae();
    let ke = Ve(P);
    return ht(
      { loaderData: rt, errors: $t },
      ke || Ce.length > 0 ? { fetchers: new Map(d.fetchers) } : {}
    );
  }
  function L(_) {
    return d.fetchers.get(_) || wP;
  }
  function B(_, A, D, U) {
    if (EP)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    b.has(_) && Z(_);
    let K = Ka(t, D, e.basename);
    if (!K) {
      se(_, A, _o(404, { pathname: D }));
      return;
    }
    let { path: Y, submission: le } = bv(D, U, !0),
      be = Rv(K, Y);
    if (le) {
      J(_, A, Y, be, K, le);
      return;
    }
    $.set(_, [Y, be, K]), Q(_, A, Y, be, K);
  }
  async function J(_, A, D, U, K, Y) {
    if ((ae(), $.delete(_), !U.route.action)) {
      let Te = _o(405, { method: Y.formMethod, pathname: D, routeId: A });
      se(_, A, Te);
      return;
    }
    let le = d.fetchers.get(_),
      be = ht({ state: 'submitting' }, Y, { data: le && le.data });
    d.fetchers.set(_, be), z({ fetchers: new Map(d.fetchers) });
    let ue = new AbortController(),
      Se = $a(D, ue.signal, Y);
    b.set(_, ue);
    let Ce = await Ma('action', Se, U, K, f.basename);
    if (Se.signal.aborted) {
      b.get(_) === ue && b.delete(_);
      return;
    }
    if (Qi(Ce)) {
      b.delete(_), T.add(_);
      let Te = ht({ state: 'loading' }, Y, { data: void 0 });
      return (
        d.fetchers.set(_, Te), z({ fetchers: new Map(d.fetchers) }), ne(d, Ce)
      );
    }
    if (Ja(Ce)) {
      se(_, A, Ce.error);
      return;
    }
    jo(Ce) && Oe(!1, 'defer() is not supported in actions');
    let Ee = d.navigation.location || d.location,
      De = $a(Ee, ue.signal),
      Pe =
        d.navigation.state !== 'idle'
          ? Ka(t, d.navigation.location, e.basename)
          : d.matches;
    Oe(Pe, "Didn't find any matches after fetcher action");
    let lt = ++C;
    w.set(_, lt);
    let rt = ht({ state: 'loading', data: Ce.data }, Y);
    d.fetchers.set(_, rt);
    let [$t, ke] = Sv(
      d,
      Pe,
      Y,
      Ee,
      y,
      h,
      g,
      { [U.route.id]: Ce.data },
      void 0,
      $
    );
    ke
      .filter((Te) => {
        let [ee] = Te;
        return ee !== _;
      })
      .forEach((Te) => {
        let [ee] = Te,
          we = d.fetchers.get(ee),
          re = {
            state: 'loading',
            data: we && we.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
          };
        d.fetchers.set(ee, re), b.set(ee, ue);
      }),
      z({ fetchers: new Map(d.fetchers) });
    let {
      results: ye,
      loaderResults: ze,
      fetcherResults: ut,
    } = await q(d.matches, Pe, $t, ke, De);
    if (ue.signal.aborted) return;
    w.delete(_),
      b.delete(_),
      ke.forEach((Te) => {
        let [ee] = Te;
        return b.delete(ee);
      });
    let tt = Pv(ye);
    if (tt) return ne(d, tt);
    let { loaderData: Ue, errors: gt } = Cv(
        d,
        d.matches,
        $t,
        ze,
        void 0,
        ke,
        ut,
        N
      ),
      Be = {
        state: 'idle',
        data: Ce.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      };
    d.fetchers.set(_, Be);
    let yt = Ve(lt);
    d.navigation.state === 'loading' && lt > P
      ? (Oe(m, 'Expected pending action'),
        x && x.abort(),
        V(d.navigation.location, {
          matches: Pe,
          loaderData: Ue,
          errors: gt,
          fetchers: new Map(d.fetchers),
        }))
      : (z(
          ht(
            { errors: gt, loaderData: xd(d.loaderData, Ue, Pe) },
            yt ? { fetchers: new Map(d.fetchers) } : {}
          )
        ),
        (y = !1));
  }
  async function Q(_, A, D, U, K) {
    let Y = d.fetchers.get(_),
      le = {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        data: Y && Y.data,
      };
    d.fetchers.set(_, le), z({ fetchers: new Map(d.fetchers) });
    let be = new AbortController(),
      ue = $a(D, be.signal);
    b.set(_, be);
    let Se = await Ma('loader', ue, U, K, f.basename);
    if (
      (jo(Se) && (Se = (await k1(Se, ue.signal, !0)) || Se),
      b.get(_) === be && b.delete(_),
      ue.signal.aborted)
    )
      return;
    if (Qi(Se)) {
      await ne(d, Se);
      return;
    }
    if (Ja(Se)) {
      let Ee = Mi(d.matches, A);
      d.fetchers.delete(_),
        z({
          fetchers: new Map(d.fetchers),
          errors: { [Ee.route.id]: Se.error },
        });
      return;
    }
    Oe(!jo(Se), 'Unhandled fetcher deferred data');
    let Ce = {
      state: 'idle',
      data: Se.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
    };
    d.fetchers.set(_, Ce), z({ fetchers: new Map(d.fetchers) });
  }
  async function ne(_, A, D) {
    var U;
    A.revalidate && (y = !0);
    let K = vs(_.location, A.location);
    if (
      (Oe(K, 'Expected a location on the redirect navigation'),
      typeof ((U = window) == null ? void 0 : U.location) < 'u')
    ) {
      let Ce = gs(A.location).origin;
      if (window.location.origin !== Ce) {
        D
          ? window.location.replace(A.location)
          : window.location.assign(A.location);
        return;
      }
    }
    x = null;
    let Y = D === !0 ? Tt.Replace : Tt.Push,
      {
        formMethod: le,
        formAction: be,
        formEncType: ue,
        formData: Se,
      } = _.navigation;
    SP.has(A.status) && le && I1(le) && ue && Se
      ? await E(Y, K, {
          submission: {
            formMethod: le,
            formAction: A.location,
            formEncType: ue,
            formData: Se,
          },
        })
      : await E(Y, K, {
          overrideNavigation: {
            state: 'loading',
            location: K,
            formMethod: le || void 0,
            formAction: be || void 0,
            formEncType: ue || void 0,
            formData: Se || void 0,
          },
        });
  }
  async function q(_, A, D, U, K) {
    let Y = await Promise.all([
        ...D.map((ue) => Ma('loader', K, ue, A, f.basename)),
        ...U.map((ue) => {
          let [, Se, Ce, Ee] = ue;
          return Ma('loader', $a(Se, K.signal), Ce, Ee, f.basename);
        }),
      ]),
      le = Y.slice(0, D.length),
      be = Y.slice(D.length);
    return (
      await Promise.all([
        Tv(_, D, le, K.signal, !1, d.loaderData),
        Tv(
          _,
          U.map((ue) => {
            let [, , Se] = ue;
            return Se;
          }),
          be,
          K.signal,
          !0
        ),
      ]),
      { results: Y, loaderResults: le, fetcherResults: be }
    );
  }
  function ae() {
    (y = !0),
      h.push(...Re()),
      $.forEach((_, A) => {
        b.has(A) && (g.push(A), Z(A));
      });
  }
  function se(_, A, D) {
    let U = Mi(d.matches, A);
    pe(_), z({ errors: { [U.route.id]: D }, fetchers: new Map(d.fetchers) });
  }
  function pe(_) {
    b.has(_) && Z(_),
      $.delete(_),
      w.delete(_),
      T.delete(_),
      d.fetchers.delete(_);
  }
  function Z(_) {
    let A = b.get(_);
    Oe(A, 'Expected fetch controller: ' + _), A.abort(), b.delete(_);
  }
  function me(_) {
    for (let A of _) {
      let U = {
        state: 'idle',
        data: L(A).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      };
      d.fetchers.set(A, U);
    }
  }
  function Ae() {
    let _ = [];
    for (let A of T) {
      let D = d.fetchers.get(A);
      Oe(D, 'Expected fetcher: ' + A),
        D.state === 'loading' && (T.delete(A), _.push(A));
    }
    me(_);
  }
  function Ve(_) {
    let A = [];
    for (let [D, U] of w)
      if (U < _) {
        let K = d.fetchers.get(D);
        Oe(K, 'Expected fetcher: ' + D),
          K.state === 'loading' && (Z(D), w.delete(D), A.push(D));
      }
    return me(A), A.length > 0;
  }
  function Re(_) {
    let A = [];
    return (
      N.forEach((D, U) => {
        (!_ || _(U)) && (D.cancel(), A.push(U), N.delete(U));
      }),
      A
    );
  }
  function Ie(_, A, D) {
    if (
      ((o = _), (a = A), (i = D || ((U) => U.key)), !s && d.navigation === yd)
    ) {
      s = !0;
      let U = Ne(d.location, d.matches);
      U != null && z({ restoreScrollPosition: U });
    }
    return () => {
      (o = null), (a = null), (i = null);
    };
  }
  function He(_, A) {
    if (o && i && a) {
      let D = A.map((K) => Ov(K, d.loaderData)),
        U = i(_, D) || _.key;
      o[U] = a();
    }
  }
  function Ne(_, A) {
    if (o && i && a) {
      let D = A.map((Y) => Ov(Y, d.loaderData)),
        U = i(_, D) || _.key,
        K = o[U];
      if (typeof K == 'number') return K;
    }
    return null;
  }
  return (
    (f = {
      get basename() {
        return e.basename;
      },
      get state() {
        return d;
      },
      get routes() {
        return t;
      },
      initialize: j,
      subscribe: H,
      enableScrollRestoration: Ie,
      navigate: R,
      fetch: B,
      revalidate: O,
      createHref: (_) => e.history.createHref(_),
      encodeLocation: (_) => e.history.encodeLocation(_),
      getFetcher: L,
      deleteFetcher: pe,
      dispose: F,
      _internalFetchControllers: b,
      _internalActiveDeferreds: N,
    }),
    f
  );
}
function TP(e) {
  return e != null && 'formData' in e;
}
function bv(e, t, n) {
  n === void 0 && (n = !1);
  let r = typeof e == 'string' ? e : co(e);
  if (!t || !TP(t)) return { path: r };
  if (t.formMethod && !kP(t.formMethod))
    return { path: r, error: _o(405, { method: t.formMethod }) };
  if (t.formMethod && I1(t.formMethod))
    return {
      path: r,
      submission: {
        formMethod: t.formMethod,
        formAction: $1(r),
        formEncType:
          (t && t.formEncType) || 'application/x-www-form-urlencoded',
        formData: t.formData,
      },
    };
  let o = sr(r);
  try {
    let i = M1(t.formData);
    n && o.search && A1(o.search) && i.append('index', ''),
      (o.search = '?' + i);
  } catch {
    return { path: r, error: _o(400) };
  }
  return { path: co(o) };
}
function OP(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Sv(e, t, n, r, o, i, a, s, l, u) {
  let c = l ? Object.values(l)[0] : s ? Object.values(s)[0] : null,
    f = l ? Object.keys(l)[0] : void 0,
    m = OP(t, f).filter(
      (x, S) =>
        x.route.loader != null &&
        (RP(e.loaderData, e.matches[S], x) ||
          i.some((y) => y === x.route.id) ||
          wv(e.location, e.matches[S], n, r, x, o, c))
    ),
    v = [];
  return (
    u &&
      u.forEach((x, S) => {
        let [y, h, g] = x;
        a.includes(S)
          ? v.push([S, y, h, g])
          : o && wv(y, h, n, y, h, o, c) && v.push([S, y, h, g]);
      }),
    [m, v]
  );
}
function RP(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function R1(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function wv(e, t, n, r, o, i, a) {
  let s = gs(e),
    l = t.params,
    u = gs(r),
    c = o.params,
    f = R1(t, o) || s.toString() === u.toString() || s.search !== u.search || i;
  if (o.route.shouldRevalidate) {
    let d = o.route.shouldRevalidate(
      ht({ currentUrl: s, currentParams: l, nextUrl: u, nextParams: c }, n, {
        actionResult: a,
        defaultShouldRevalidate: f,
      })
    );
    if (typeof d == 'boolean') return d;
  }
  return f;
}
async function Ma(e, t, n, r, o, i, a, s) {
  o === void 0 && (o = '/'), i === void 0 && (i = !1), a === void 0 && (a = !1);
  let l,
    u,
    c,
    f = new Promise((m, v) => (c = v)),
    d = () => c();
  t.signal.addEventListener('abort', d);
  try {
    let m = n.route[e];
    Oe(
      m,
      'Could not find the ' + e + ' to run on the "' + n.route.id + '" route'
    ),
      (u = await Promise.race([
        m({ request: t, params: n.params, context: s }),
        f,
      ])),
      Oe(
        u !== void 0,
        'You defined ' +
          (e === 'action' ? 'an action' : 'a loader') +
          ' for route ' +
          ('"' +
            n.route.id +
            '" but didn\'t return anything from your `' +
            e +
            '` ') +
          'function. Please return a value or `null`.'
      );
  } catch (m) {
    (l = zt.error), (u = m);
  } finally {
    t.signal.removeEventListener('abort', d);
  }
  if (IP(u)) {
    let m = u.status;
    if (bP.has(m)) {
      let S = u.headers.get('Location');
      if (
        (Oe(
          S,
          'Redirects returned/thrown from loaders/actions must have a Location header'
        ),
        !(/^[a-z+]+:\/\//i.test(S) || S.startsWith('//')))
      ) {
        let h = r.slice(0, r.indexOf(n) + 1),
          g = wm(h).map((C) => C.pathnameBase),
          b = P1(S, g, new URL(t.url).pathname);
        if ((Oe(co(b), 'Unable to resolve redirect location: ' + S), o)) {
          let C = b.pathname;
          b.pathname = C === '/' ? o : Zr([o, C]);
        }
        S = co(b);
      }
      if (i) throw (u.headers.set('Location', S), u);
      return {
        type: zt.redirect,
        status: m,
        location: S,
        revalidate: u.headers.get('X-Remix-Revalidate') !== null,
      };
    }
    if (a) throw { type: l || zt.data, response: u };
    let v,
      x = u.headers.get('Content-Type');
    return (
      x && x.startsWith('application/json')
        ? (v = await u.json())
        : (v = await u.text()),
      l === zt.error
        ? { type: l, error: new lc(m, u.statusText, v), headers: u.headers }
        : { type: zt.data, data: v, statusCode: u.status, headers: u.headers }
    );
  }
  return l === zt.error
    ? { type: l, error: u }
    : u instanceof mP
    ? { type: zt.deferred, deferredData: u }
    : { type: zt.data, data: u };
}
function $a(e, t, n) {
  let r = gs($1(e)).toString(),
    o = { signal: t };
  if (n) {
    let { formMethod: i, formEncType: a, formData: s } = n;
    (o.method = i.toUpperCase()),
      (o.body = a === 'application/x-www-form-urlencoded' ? M1(s) : s);
  }
  return new Request(r, o);
}
function M1(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    Oe(
      typeof r == 'string',
      'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'
    ),
      t.append(n, r);
  return t;
}
function MP(e, t, n, r, o) {
  let i = {},
    a = null,
    s,
    l = !1,
    u = {};
  return (
    n.forEach((c, f) => {
      let d = t[f].route.id;
      if (
        (Oe(!Qi(c), 'Cannot handle redirect results in processLoaderData'),
        Ja(c))
      ) {
        let m = Mi(e, d),
          v = c.error;
        r && ((v = Object.values(r)[0]), (r = void 0)),
          (a = Object.assign(a || {}, { [m.route.id]: v })),
          l || ((l = !0), (s = T1(c.error) ? c.error.status : 500)),
          c.headers && (u[d] = c.headers);
      } else
        jo(c)
          ? (o && o.set(d, c.deferredData), (i[d] = c.deferredData.data))
          : ((i[d] = c.data),
            c.statusCode != null &&
              c.statusCode !== 200 &&
              !l &&
              (s = c.statusCode),
            c.headers && (u[d] = c.headers));
    }),
    r && (a = r),
    { loaderData: i, errors: a, statusCode: s || 200, loaderHeaders: u }
  );
}
function Cv(e, t, n, r, o, i, a, s) {
  let { loaderData: l, errors: u } = MP(t, n, r, o, s);
  for (let c = 0; c < i.length; c++) {
    let [f, , d] = i[c];
    Oe(
      a !== void 0 && a[c] !== void 0,
      'Did not find corresponding fetcher result'
    );
    let m = a[c];
    if (Ja(m)) {
      let v = Mi(e.matches, d.route.id);
      (u && u[v.route.id]) || (u = ht({}, u, { [v.route.id]: m.error })),
        e.fetchers.delete(f);
    } else {
      if (Qi(m)) throw new Error('Unhandled fetcher revalidation redirect');
      if (jo(m)) throw new Error('Unhandled fetcher deferred data');
      {
        let v = {
          state: 'idle',
          data: m.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        };
        e.fetchers.set(f, v);
      }
    }
  }
  return { loaderData: l, errors: u };
}
function xd(e, t, n) {
  let r = ht({}, t);
  return (
    n.forEach((o) => {
      let i = o.route.id;
      t[i] === void 0 && e[i] !== void 0 && (r[i] = e[i]);
    }),
    r
  );
}
function Mi(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Ev(e) {
  let t = e.find((n) => n.index || !n.path || n.path === '/') || {
    id: '__shim-error-route__',
  };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function _o(e, t) {
  let { pathname: n, routeId: r, method: o } = t === void 0 ? {} : t,
    i = 'Unknown Server Error',
    a = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((i = 'Bad Request'),
        o && n && r
          ? (a =
              'You made a ' +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : (a = 'Cannot submit binary form data using GET'))
      : e === 403
      ? ((i = 'Forbidden'),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = 'Not Found'), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = 'Method Not Allowed'),
        o && n && r
          ? (a =
              'You made a ' +
              o.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : o && (a = 'Invalid request method "' + o.toUpperCase() + '"')),
    new lc(e || 500, i, new Error(a), !0)
  );
}
function Pv(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Qi(n)) return n;
  }
}
function $1(e) {
  let t = typeof e == 'string' ? sr(e) : e;
  return co(ht({}, t, { hash: '' }));
}
function $P(e, t) {
  return (
    e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
  );
}
function jo(e) {
  return e.type === zt.deferred;
}
function Ja(e) {
  return e.type === zt.error;
}
function Qi(e) {
  return (e && e.type) === zt.redirect;
}
function IP(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function kP(e) {
  return xP.has(e);
}
function I1(e) {
  return gP.has(e);
}
async function Tv(e, t, n, r, o, i) {
  for (let a = 0; a < n.length; a++) {
    let s = n[a],
      l = t[a],
      u = e.find((f) => f.route.id === l.route.id),
      c = u != null && !R1(u, l) && (i && i[l.route.id]) !== void 0;
    jo(s) &&
      (o || c) &&
      (await k1(s, r, o).then((f) => {
        f && (n[a] = f || n[a]);
      }));
  }
}
async function k1(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: zt.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: zt.error, error: o };
      }
    return { type: zt.data, data: e.deferredData.data };
  }
}
function A1(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Ov(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function Rv(e, t) {
  let n = typeof t == 'string' ? sr(t).search : t.search;
  if (e[e.length - 1].route.index && A1(n || '')) return e[e.length - 1];
  let r = wm(e);
  return r[r.length - 1];
}
function fu() {
  return (
    (fu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fu.apply(this, arguments)
  );
}
function AP(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const NP = typeof Object.is == 'function' ? Object.is : AP,
  { useState: LP, useEffect: _P, useLayoutEffect: DP, useDebugValue: jP } = Yo;
function zP(e, t, n) {
  const r = t(),
    [{ inst: o }, i] = LP({ inst: { value: r, getSnapshot: t } });
  return (
    DP(() => {
      (o.value = r), (o.getSnapshot = t), bd(o) && i({ inst: o });
    }, [e, r, t]),
    _P(
      () => (
        bd(o) && i({ inst: o }),
        e(() => {
          bd(o) && i({ inst: o });
        })
      ),
      [e]
    ),
    jP(r),
    r
  );
}
function bd(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !NP(n, r);
  } catch {
    return !0;
  }
}
function BP(e, t, n) {
  return t();
}
const FP =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  VP = !FP,
  HP = VP ? BP : zP,
  UP = 'useSyncExternalStore' in Yo ? ((e) => e.useSyncExternalStore)(Yo) : HP,
  WP = p.exports.createContext(null),
  N1 = p.exports.createContext(null),
  Cm = p.exports.createContext(null),
  Em = p.exports.createContext(null),
  uc = p.exports.createContext(null),
  Ks = p.exports.createContext({ outlet: null, matches: [] }),
  L1 = p.exports.createContext(null);
function cc() {
  return p.exports.useContext(uc) != null;
}
function _1() {
  return cc() || Oe(!1), p.exports.useContext(uc).location;
}
function KP() {
  cc() || Oe(!1);
  let { basename: e, navigator: t } = p.exports.useContext(Em),
    { matches: n } = p.exports.useContext(Ks),
    { pathname: r } = _1(),
    o = JSON.stringify(wm(n).map((s) => s.pathnameBase)),
    i = p.exports.useRef(!1);
  return (
    p.exports.useEffect(() => {
      i.current = !0;
    }),
    p.exports.useCallback(
      function (s, l) {
        if ((l === void 0 && (l = {}), !i.current)) return;
        if (typeof s == 'number') {
          t.go(s);
          return;
        }
        let u = P1(s, JSON.parse(o), r, l.relative === 'path');
        e !== '/' &&
          (u.pathname = u.pathname === '/' ? e : Zr([e, u.pathname])),
          (l.replace ? t.replace : t.push)(u, l.state, l);
      },
      [e, t, o, r]
    )
  );
}
const GP = p.exports.createContext(null);
function XP(e) {
  let t = p.exports.useContext(Ks).outlet;
  return t && p.exports.createElement(GP.Provider, { value: e }, t);
}
function QP(e, t) {
  cc() || Oe(!1);
  let { navigator: n } = p.exports.useContext(Em),
    r = p.exports.useContext(Cm),
    { matches: o } = p.exports.useContext(Ks),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : '/';
  i && i.route;
  let l = _1(),
    u;
  if (t) {
    var c;
    let x = typeof t == 'string' ? sr(t) : t;
    s === '/' || ((c = x.pathname) != null && c.startsWith(s)) || Oe(!1),
      (u = x);
  } else u = l;
  let f = u.pathname || '/',
    d = s === '/' ? f : f.slice(s.length) || '/',
    m = Ka(e, { pathname: d }),
    v = JP(
      m &&
        m.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, a, x.params),
            pathname: Zr([
              s,
              n.encodeLocation
                ? n.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === '/'
                ? s
                : Zr([
                    s,
                    n.encodeLocation
                      ? n.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      o,
      r || void 0
    );
  return t && v
    ? p.exports.createElement(
        uc.Provider,
        {
          value: {
            location: fu(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              u
            ),
            navigationType: Tt.Pop,
          },
        },
        v
      )
    : v;
}
function YP() {
  let e = t2(),
    t = T1(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    o = { padding: '0.5rem', backgroundColor: r },
    i = { padding: '2px 4px', backgroundColor: r };
  return p.exports.createElement(
    p.exports.Fragment,
    null,
    p.exports.createElement('h2', null, 'Unhandled Thrown Error!'),
    p.exports.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? p.exports.createElement('pre', { style: o }, n) : null,
    p.exports.createElement('p', null, '💿 Hey developer 👋'),
    p.exports.createElement(
      'p',
      null,
      'You can provide a way better UX than this when your app throws errors by providing your own ',
      p.exports.createElement('code', { style: i }, 'errorElement'),
      ' props on ',
      p.exports.createElement('code', { style: i }, '<Route>')
    )
  );
}
class qP extends p.exports.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? p.exports.createElement(L1.Provider, {
          value: this.state.error,
          children: this.props.component,
        })
      : this.props.children;
  }
}
function ZP(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = p.exports.useContext(WP);
  return (
    o && n.route.errorElement && (o._deepestRenderedBoundaryId = n.route.id),
    p.exports.createElement(Ks.Provider, { value: t }, r)
  );
}
function JP(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    o = n == null ? void 0 : n.errors;
  if (o != null) {
    let i = r.findIndex(
      (a) => a.route.id && (o == null ? void 0 : o[a.route.id])
    );
    i >= 0 || Oe(!1), (r = r.slice(0, Math.min(r.length, i + 1)));
  }
  return r.reduceRight((i, a, s) => {
    let l = a.route.id ? (o == null ? void 0 : o[a.route.id]) : null,
      u = n ? a.route.errorElement || p.exports.createElement(YP, null) : null,
      c = () =>
        p.exports.createElement(
          ZP,
          {
            match: a,
            routeContext: { outlet: i, matches: t.concat(r.slice(0, s + 1)) },
          },
          l ? u : a.route.element !== void 0 ? a.route.element : i
        );
    return n && (a.route.errorElement || s === 0)
      ? p.exports.createElement(qP, {
          location: n.location,
          component: u,
          error: l,
          children: c(),
        })
      : c();
  }, null);
}
var Mv;
(function (e) {
  e.UseRevalidator = 'useRevalidator';
})(Mv || (Mv = {}));
var Tf;
(function (e) {
  (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator');
})(Tf || (Tf = {}));
function e2(e) {
  let t = p.exports.useContext(Cm);
  return t || Oe(!1), t;
}
function t2() {
  var e;
  let t = p.exports.useContext(L1),
    n = e2(Tf.UseRouteError),
    r = p.exports.useContext(Ks),
    o = r.matches[r.matches.length - 1];
  return (
    t ||
    (r || Oe(!1),
    o.route.id || Oe(!1),
    (e = n.errors) == null ? void 0 : e[o.route.id])
  );
}
function n2(e) {
  let { fallbackElement: t, router: n } = e,
    r = UP(
      n.subscribe,
      () => n.state,
      () => n.state
    ),
    o = p.exports.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (a) => n.navigate(a),
        push: (a, s, l) =>
          n.navigate(a, {
            state: s,
            preventScrollReset: l == null ? void 0 : l.preventScrollReset,
          }),
        replace: (a, s, l) =>
          n.navigate(a, {
            replace: !0,
            state: s,
            preventScrollReset: l == null ? void 0 : l.preventScrollReset,
          }),
      }),
      [n]
    ),
    i = n.basename || '/';
  return p.exports.createElement(
    N1.Provider,
    { value: { router: n, navigator: o, static: !1, basename: i } },
    p.exports.createElement(
      Cm.Provider,
      { value: r },
      p.exports.createElement(
        i2,
        {
          basename: n.basename,
          location: n.state.location,
          navigationType: n.state.historyAction,
          navigator: o,
        },
        n.state.initialized ? p.exports.createElement(a2, null) : t
      )
    )
  );
}
function r2(e) {
  return XP(e.context);
}
function o2(e) {
  Oe(!1);
}
function i2(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = Tt.Pop,
    navigator: i,
    static: a = !1,
  } = e;
  cc() && Oe(!1);
  let s = t.replace(/^\/*/, '/'),
    l = p.exports.useMemo(
      () => ({ basename: s, navigator: i, static: a }),
      [s, i, a]
    );
  typeof r == 'string' && (r = sr(r));
  let {
      pathname: u = '/',
      search: c = '',
      hash: f = '',
      state: d = null,
      key: m = 'default',
    } = r,
    v = p.exports.useMemo(() => {
      let x = E1(u, s);
      return x == null
        ? null
        : { pathname: x, search: c, hash: f, state: d, key: m };
    }, [s, u, c, f, d, m]);
  return v == null
    ? null
    : p.exports.createElement(
        Em.Provider,
        { value: l },
        p.exports.createElement(uc.Provider, {
          children: n,
          value: { location: v, navigationType: o },
        })
      );
}
function a2(e) {
  let { children: t, location: n } = e,
    r = p.exports.useContext(N1),
    o = r && !t ? r.router.routes : Of(t);
  return QP(o, n);
}
var $v;
(function (e) {
  (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error');
})($v || ($v = {}));
new Promise(() => {});
function Of(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    p.exports.Children.forEach(e, (r, o) => {
      if (!p.exports.isValidElement(r)) return;
      if (r.type === p.exports.Fragment) {
        n.push.apply(n, Of(r.props.children, t));
        return;
      }
      r.type !== o2 && Oe(!1), !r.props.index || !r.props.children || Oe(!1);
      let i = [...t, o],
        a = {
          id: r.props.id || i.join('-'),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (a.children = Of(r.props.children, i)), n.push(a);
    }),
    n
  );
}
function D1(e) {
  return e.map((t) => {
    let n = fu({}, t);
    return (
      n.hasErrorBoundary == null &&
        (n.hasErrorBoundary = n.errorElement != null),
      n.children && (n.children = D1(n.children)),
      n
    );
  });
}
function Rf() {
  return (
    (Rf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Rf.apply(this, arguments)
  );
}
function s2(e, t) {
  return PP({
    basename: t == null ? void 0 : t.basename,
    history: UE({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || l2(),
    routes: D1(e),
  }).initialize();
}
function l2() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Rf({}, t, { errors: u2(t.errors) })), t;
}
function u2(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    o && o.__type === 'RouteErrorResponse'
      ? (n[r] = new lc(o.status, o.statusText, o.data, o.internal === !0))
      : (n[r] = o);
  return n;
}
var Iv;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmitImpl = 'useSubmitImpl'),
    (e.UseFetcher = 'useFetcher');
})(Iv || (Iv = {}));
var kv;
(function (e) {
  (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(kv || (kv = {}));
var Mf = {},
  oi = { exports: {} },
  xn = {},
  j1 = { exports: {} },
  z1 = {};
(function (e) {
  function t(E, k) {
    var I = E.length;
    E.push(k);
    e: for (; 0 < I; ) {
      var L = (I - 1) >>> 1,
        B = E[L];
      if (0 < o(B, k)) (E[L] = k), (E[I] = B), (I = L);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var k = E[0],
      I = E.pop();
    if (I !== k) {
      E[0] = I;
      e: for (var L = 0, B = E.length, J = B >>> 1; L < J; ) {
        var Q = 2 * (L + 1) - 1,
          ne = E[Q],
          q = Q + 1,
          ae = E[q];
        if (0 > o(ne, I))
          q < B && 0 > o(ae, ne)
            ? ((E[L] = ae), (E[q] = I), (L = q))
            : ((E[L] = ne), (E[Q] = I), (L = Q));
        else if (q < B && 0 > o(ae, I)) (E[L] = ae), (E[q] = I), (L = q);
        else break e;
      }
    }
    return k;
  }
  function o(E, k) {
    var I = E.sortIndex - k.sortIndex;
    return I !== 0 ? I : E.id - k.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    m = !1,
    v = !1,
    x = !1,
    S = typeof setTimeout == 'function' ? setTimeout : null,
    y = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(E) {
    for (var k = n(u); k !== null; ) {
      if (k.callback === null) r(u);
      else if (k.startTime <= E)
        r(u), (k.sortIndex = k.expirationTime), t(l, k);
      else break;
      k = n(u);
    }
  }
  function b(E) {
    if (((x = !1), g(E), !v))
      if (n(l) !== null) (v = !0), R(C);
      else {
        var k = n(u);
        k !== null && O(b, k.startTime - E);
      }
  }
  function C(E, k) {
    (v = !1), x && ((x = !1), y(T), (T = -1)), (m = !0);
    var I = d;
    try {
      for (
        g(k), f = n(l);
        f !== null && (!(f.expirationTime > k) || (E && !j()));

      ) {
        var L = f.callback;
        if (typeof L == 'function') {
          (f.callback = null), (d = f.priorityLevel);
          var B = L(f.expirationTime <= k);
          (k = e.unstable_now()),
            typeof B == 'function' ? (f.callback = B) : f === n(l) && r(l),
            g(k);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var J = !0;
      else {
        var Q = n(u);
        Q !== null && O(b, Q.startTime - k), (J = !1);
      }
      return J;
    } finally {
      (f = null), (d = I), (m = !1);
    }
  }
  var P = !1,
    w = null,
    T = -1,
    $ = 5,
    N = -1;
  function j() {
    return !(e.unstable_now() - N < $);
  }
  function F() {
    if (w !== null) {
      var E = e.unstable_now();
      N = E;
      var k = !0;
      try {
        k = w(!0, E);
      } finally {
        k ? H() : ((P = !1), (w = null));
      }
    } else P = !1;
  }
  var H;
  if (typeof h == 'function')
    H = function () {
      h(F);
    };
  else if (typeof MessageChannel < 'u') {
    var z = new MessageChannel(),
      V = z.port2;
    (z.port1.onmessage = F),
      (H = function () {
        V.postMessage(null);
      });
  } else
    H = function () {
      S(F, 0);
    };
  function R(E) {
    (w = E), P || ((P = !0), H());
  }
  function O(E, k) {
    T = S(function () {
      E(e.unstable_now());
    }, k);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || m || ((v = !0), R(C));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : ($ = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (E) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var k = 3;
          break;
        default:
          k = d;
      }
      var I = d;
      d = k;
      try {
        return E();
      } finally {
        d = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, k) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var I = d;
      d = E;
      try {
        return k();
      } finally {
        d = I;
      }
    }),
    (e.unstable_scheduleCallback = function (E, k, I) {
      var L = e.unstable_now();
      switch (
        (typeof I == 'object' && I !== null
          ? ((I = I.delay), (I = typeof I == 'number' && 0 < I ? L + I : L))
          : (I = L),
        E)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = I + B),
        (E = {
          id: c++,
          callback: k,
          priorityLevel: E,
          startTime: I,
          expirationTime: B,
          sortIndex: -1,
        }),
        I > L
          ? ((E.sortIndex = I),
            t(u, E),
            n(l) === null &&
              E === n(u) &&
              (x ? (y(T), (T = -1)) : (x = !0), O(b, I - L)))
          : ((E.sortIndex = B), t(l, E), v || m || ((v = !0), R(C))),
        E
      );
    }),
    (e.unstable_shouldYield = j),
    (e.unstable_wrapCallback = function (E) {
      var k = d;
      return function () {
        var I = d;
        d = k;
        try {
          return E.apply(this, arguments);
        } finally {
          d = I;
        }
      };
    });
})(z1);
(function (e) {
  e.exports = z1;
})(j1);
var B1 = p.exports,
  gn = j1.exports;
function W(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var F1 = new Set(),
  ys = {};
function ii(e, t) {
  ra(e, t), ra(e + 'Capture', t);
}
function ra(e, t) {
  for (ys[e] = t, e = 0; e < t.length; e++) F1.add(t[e]);
}
var Rr = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  $f = Object.prototype.hasOwnProperty,
  c2 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Av = {},
  Nv = {};
function d2(e) {
  return $f.call(Nv, e)
    ? !0
    : $f.call(Av, e)
    ? !1
    : c2.test(e)
    ? (Nv[e] = !0)
    : ((Av[e] = !0), !1);
}
function f2(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function p2(e, t, n, r) {
  if (t === null || typeof t > 'u' || f2(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function nn(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Vt = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Vt[e] = new nn(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Vt[t] = new nn(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Vt[e] = new nn(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Vt[e] = new nn(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Vt[e] = new nn(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Vt[e] = new nn(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Vt[e] = new nn(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Vt[e] = new nn(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Vt[e] = new nn(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Pm = /[\-:]([a-z])/g;
function Tm(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Pm, Tm);
    Vt[t] = new nn(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Pm, Tm);
    Vt[t] = new nn(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Pm, Tm);
  Vt[t] = new nn(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Vt[e] = new nn(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Vt.xlinkHref = new nn(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Vt[e] = new nn(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Om(e, t, n, r) {
  var o = Vt.hasOwnProperty(t) ? Vt[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (p2(t, n, o, r) && (n = null),
    r || o === null
      ? d2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nr = B1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pl = Symbol.for('react.element'),
  $i = Symbol.for('react.portal'),
  Ii = Symbol.for('react.fragment'),
  Rm = Symbol.for('react.strict_mode'),
  If = Symbol.for('react.profiler'),
  V1 = Symbol.for('react.provider'),
  H1 = Symbol.for('react.context'),
  Mm = Symbol.for('react.forward_ref'),
  kf = Symbol.for('react.suspense'),
  Af = Symbol.for('react.suspense_list'),
  $m = Symbol.for('react.memo'),
  Hr = Symbol.for('react.lazy'),
  U1 = Symbol.for('react.offscreen'),
  Lv = Symbol.iterator;
function Ia(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Lv && e[Lv]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var st = Object.assign,
  Sd;
function Ga(e) {
  if (Sd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Sd = (t && t[1]) || '';
    }
  return (
    `
` +
    Sd +
    e
  );
}
var wd = !1;
function Cd(e, t) {
  if (!e || wd) return '';
  wd = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l =
                  `
` + o[a].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (wd = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Ga(e) : '';
}
function m2(e) {
  switch (e.tag) {
    case 5:
      return Ga(e.type);
    case 16:
      return Ga('Lazy');
    case 13:
      return Ga('Suspense');
    case 19:
      return Ga('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Cd(e.type, !1)), e;
    case 11:
      return (e = Cd(e.type.render, !1)), e;
    case 1:
      return (e = Cd(e.type, !0)), e;
    default:
      return '';
  }
}
function Nf(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Ii:
      return 'Fragment';
    case $i:
      return 'Portal';
    case If:
      return 'Profiler';
    case Rm:
      return 'StrictMode';
    case kf:
      return 'Suspense';
    case Af:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case H1:
        return (e.displayName || 'Context') + '.Consumer';
      case V1:
        return (e._context.displayName || 'Context') + '.Provider';
      case Mm:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case $m:
        return (
          (t = e.displayName || null), t !== null ? t : Nf(e.type) || 'Memo'
        );
      case Hr:
        (t = e._payload), (e = e._init);
        try {
          return Nf(e(t));
        } catch {}
    }
  return null;
}
function h2(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Nf(t);
    case 8:
      return t === Rm ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function fo(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function W1(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function v2(e) {
  var t = W1(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = '' + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = '' + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ml(e) {
  e._valueTracker || (e._valueTracker = v2(e));
}
function K1(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = W1(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function pu(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Lf(e, t) {
  var n = t.checked;
  return st({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function _v(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = fo(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function G1(e, t) {
  (t = t.checked), t != null && Om(e, 'checked', t, !1);
}
function _f(e, t) {
  G1(e, t);
  var n = fo(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Df(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Df(e, t.type, fo(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Dv(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Df(e, t, n) {
  (t !== 'number' || pu(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Xa = Array.isArray;
function Yi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + fo(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function jf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(W(91));
  return st({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function jv(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(W(92));
      if (Xa(n)) {
        if (1 < n.length) throw Error(W(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: fo(n) };
}
function X1(e, t) {
  var n = fo(t.value),
    r = fo(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function zv(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Q1(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function zf(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Q1(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var hl,
  Y1 = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        hl = hl || document.createElement('div'),
          hl.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = hl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function xs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var es = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  g2 = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(es).forEach(function (e) {
  g2.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (es[t] = es[e]);
  });
});
function q1(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (es.hasOwnProperty(e) && es[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Z1(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = q1(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var y2 = st(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Bf(e, t) {
  if (t) {
    if (y2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(W(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(W(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(W(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(W(62));
  }
}
function Ff(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Vf = null;
function Im(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Hf = null,
  qi = null,
  Zi = null;
function Bv(e) {
  if ((e = Qs(e))) {
    if (typeof Hf != 'function') throw Error(W(280));
    var t = e.stateNode;
    t && ((t = hc(t)), Hf(e.stateNode, e.type, t));
  }
}
function J1(e) {
  qi ? (Zi ? Zi.push(e) : (Zi = [e])) : (qi = e);
}
function ex() {
  if (qi) {
    var e = qi,
      t = Zi;
    if (((Zi = qi = null), Bv(e), t)) for (e = 0; e < t.length; e++) Bv(t[e]);
  }
}
function tx(e, t) {
  return e(t);
}
function nx() {}
var Ed = !1;
function rx(e, t, n) {
  if (Ed) return e(t, n);
  Ed = !0;
  try {
    return tx(e, t, n);
  } finally {
    (Ed = !1), (qi !== null || Zi !== null) && (nx(), ex());
  }
}
function bs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = hc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(W(231, t, typeof n));
  return n;
}
var Uf = !1;
if (Rr)
  try {
    var ka = {};
    Object.defineProperty(ka, 'passive', {
      get: function () {
        Uf = !0;
      },
    }),
      window.addEventListener('test', ka, ka),
      window.removeEventListener('test', ka, ka);
  } catch {
    Uf = !1;
  }
function x2(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ts = !1,
  mu = null,
  hu = !1,
  Wf = null,
  b2 = {
    onError: function (e) {
      (ts = !0), (mu = e);
    },
  };
function S2(e, t, n, r, o, i, a, s, l) {
  (ts = !1), (mu = null), x2.apply(b2, arguments);
}
function w2(e, t, n, r, o, i, a, s, l) {
  if ((S2.apply(this, arguments), ts)) {
    if (ts) {
      var u = mu;
      (ts = !1), (mu = null);
    } else throw Error(W(198));
    hu || ((hu = !0), (Wf = u));
  }
}
function ai(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ox(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Fv(e) {
  if (ai(e) !== e) throw Error(W(188));
}
function C2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ai(e)), t === null)) throw Error(W(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Fv(o), e;
        if (i === r) return Fv(o), t;
        i = i.sibling;
      }
      throw Error(W(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(W(189));
      }
    }
    if (n.alternate !== r) throw Error(W(190));
  }
  if (n.tag !== 3) throw Error(W(188));
  return n.stateNode.current === n ? e : t;
}
function ix(e) {
  return (e = C2(e)), e !== null ? ax(e) : null;
}
function ax(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ax(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var sx = gn.unstable_scheduleCallback,
  Vv = gn.unstable_cancelCallback,
  E2 = gn.unstable_shouldYield,
  P2 = gn.unstable_requestPaint,
  vt = gn.unstable_now,
  T2 = gn.unstable_getCurrentPriorityLevel,
  km = gn.unstable_ImmediatePriority,
  lx = gn.unstable_UserBlockingPriority,
  vu = gn.unstable_NormalPriority,
  O2 = gn.unstable_LowPriority,
  ux = gn.unstable_IdlePriority,
  dc = null,
  or = null;
function R2(e) {
  if (or && typeof or.onCommitFiberRoot == 'function')
    try {
      or.onCommitFiberRoot(dc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Kn = Math.clz32 ? Math.clz32 : I2,
  M2 = Math.log,
  $2 = Math.LN2;
function I2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((M2(e) / $2) | 0)) | 0;
}
var vl = 64,
  gl = 4194304;
function Qa(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function gu(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (r = Qa(s)) : ((i &= a), i !== 0 && (r = Qa(i)));
  } else (a = n & ~o), a !== 0 ? (r = Qa(a)) : i !== 0 && (r = Qa(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Kn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function k2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function A2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Kn(i),
      s = 1 << a,
      l = o[a];
    l === -1
      ? (!(s & n) || s & r) && (o[a] = k2(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Kf(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function cx() {
  var e = vl;
  return (vl <<= 1), !(vl & 4194240) && (vl = 64), e;
}
function Pd(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Gs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Kn(t)),
    (e[t] = n);
}
function N2(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Kn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Am(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Kn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var We = 0;
function dx(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var fx,
  Nm,
  px,
  mx,
  hx,
  Gf = !1,
  yl = [],
  Jr = null,
  eo = null,
  to = null,
  Ss = new Map(),
  ws = new Map(),
  Kr = [],
  L2 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Hv(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Jr = null;
      break;
    case 'dragenter':
    case 'dragleave':
      eo = null;
      break;
    case 'mouseover':
    case 'mouseout':
      to = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Ss.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      ws.delete(t.pointerId);
  }
}
function Aa(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Qs(t)), t !== null && Nm(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function _2(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Jr = Aa(Jr, e, t, n, r, o)), !0;
    case 'dragenter':
      return (eo = Aa(eo, e, t, n, r, o)), !0;
    case 'mouseover':
      return (to = Aa(to, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Ss.set(i, Aa(Ss.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), ws.set(i, Aa(ws.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function vx(e) {
  var t = zo(e.target);
  if (t !== null) {
    var n = ai(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ox(n)), t !== null)) {
          (e.blockedOn = t),
            hx(e.priority, function () {
              px(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Kl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Vf = r), n.target.dispatchEvent(r), (Vf = null);
    } else return (t = Qs(n)), t !== null && Nm(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Uv(e, t, n) {
  Kl(e) && n.delete(t);
}
function D2() {
  (Gf = !1),
    Jr !== null && Kl(Jr) && (Jr = null),
    eo !== null && Kl(eo) && (eo = null),
    to !== null && Kl(to) && (to = null),
    Ss.forEach(Uv),
    ws.forEach(Uv);
}
function Na(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Gf ||
      ((Gf = !0),
      gn.unstable_scheduleCallback(gn.unstable_NormalPriority, D2)));
}
function Cs(e) {
  function t(o) {
    return Na(o, e);
  }
  if (0 < yl.length) {
    Na(yl[0], e);
    for (var n = 1; n < yl.length; n++) {
      var r = yl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Jr !== null && Na(Jr, e),
      eo !== null && Na(eo, e),
      to !== null && Na(to, e),
      Ss.forEach(t),
      ws.forEach(t),
      n = 0;
    n < Kr.length;
    n++
  )
    (r = Kr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kr.length && ((n = Kr[0]), n.blockedOn === null); )
    vx(n), n.blockedOn === null && Kr.shift();
}
var Ji = Nr.ReactCurrentBatchConfig,
  yu = !0;
function j2(e, t, n, r) {
  var o = We,
    i = Ji.transition;
  Ji.transition = null;
  try {
    (We = 1), Lm(e, t, n, r);
  } finally {
    (We = o), (Ji.transition = i);
  }
}
function z2(e, t, n, r) {
  var o = We,
    i = Ji.transition;
  Ji.transition = null;
  try {
    (We = 4), Lm(e, t, n, r);
  } finally {
    (We = o), (Ji.transition = i);
  }
}
function Lm(e, t, n, r) {
  if (yu) {
    var o = Xf(e, t, n, r);
    if (o === null) Ld(e, t, r, xu, n), Hv(e, r);
    else if (_2(o, e, t, n, r)) r.stopPropagation();
    else if ((Hv(e, r), t & 4 && -1 < L2.indexOf(e))) {
      for (; o !== null; ) {
        var i = Qs(o);
        if (
          (i !== null && fx(i),
          (i = Xf(e, t, n, r)),
          i === null && Ld(e, t, r, xu, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ld(e, t, r, null, n);
  }
}
var xu = null;
function Xf(e, t, n, r) {
  if (((xu = null), (e = Im(r)), (e = zo(e)), e !== null))
    if (((t = ai(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ox(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (xu = e), null;
}
function gx(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (T2()) {
        case km:
          return 1;
        case lx:
          return 4;
        case vu:
        case O2:
          return 16;
        case ux:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xr = null,
  _m = null,
  Gl = null;
function yx() {
  if (Gl) return Gl;
  var e,
    t = _m,
    n = t.length,
    r,
    o = 'value' in Xr ? Xr.value : Xr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (Gl = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Xl(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function xl() {
  return !0;
}
function Wv() {
  return !1;
}
function bn(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? xl
        : Wv),
      (this.isPropagationStopped = Wv),
      this
    );
  }
  return (
    st(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = xl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = xl));
      },
      persist: function () {},
      isPersistent: xl,
    }),
    t
  );
}
var va = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Dm = bn(va),
  Xs = st({}, va, { view: 0, detail: 0 }),
  B2 = bn(Xs),
  Td,
  Od,
  La,
  fc = st({}, Xs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: jm,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== La &&
            (La && e.type === 'mousemove'
              ? ((Td = e.screenX - La.screenX), (Od = e.screenY - La.screenY))
              : (Od = Td = 0),
            (La = e)),
          Td);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Od;
    },
  }),
  Kv = bn(fc),
  F2 = st({}, fc, { dataTransfer: 0 }),
  V2 = bn(F2),
  H2 = st({}, Xs, { relatedTarget: 0 }),
  Rd = bn(H2),
  U2 = st({}, va, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  W2 = bn(U2),
  K2 = st({}, va, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  G2 = bn(K2),
  X2 = st({}, va, { data: 0 }),
  Gv = bn(X2),
  Q2 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Y2 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  q2 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Z2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = q2[e]) ? !!t[e] : !1;
}
function jm() {
  return Z2;
}
var J2 = st({}, Xs, {
    key: function (e) {
      if (e.key) {
        var t = Q2[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Xl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Y2[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: jm,
    charCode: function (e) {
      return e.type === 'keypress' ? Xl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Xl(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  eT = bn(J2),
  tT = st({}, fc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Xv = bn(tT),
  nT = st({}, Xs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jm,
  }),
  rT = bn(nT),
  oT = st({}, va, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  iT = bn(oT),
  aT = st({}, fc, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  sT = bn(aT),
  lT = [9, 13, 27, 32],
  zm = Rr && 'CompositionEvent' in window,
  ns = null;
Rr && 'documentMode' in document && (ns = document.documentMode);
var uT = Rr && 'TextEvent' in window && !ns,
  xx = Rr && (!zm || (ns && 8 < ns && 11 >= ns)),
  Qv = String.fromCharCode(32),
  Yv = !1;
function bx(e, t) {
  switch (e) {
    case 'keyup':
      return lT.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Sx(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var ki = !1;
function cT(e, t) {
  switch (e) {
    case 'compositionend':
      return Sx(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Yv = !0), Qv);
    case 'textInput':
      return (e = t.data), e === Qv && Yv ? null : e;
    default:
      return null;
  }
}
function dT(e, t) {
  if (ki)
    return e === 'compositionend' || (!zm && bx(e, t))
      ? ((e = yx()), (Gl = _m = Xr = null), (ki = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return xx && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var fT = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function qv(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!fT[e.type] : t === 'textarea';
}
function wx(e, t, n, r) {
  J1(r),
    (t = bu(t, 'onChange')),
    0 < t.length &&
      ((n = new Dm('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var rs = null,
  Es = null;
function pT(e) {
  Ax(e, 0);
}
function pc(e) {
  var t = Li(e);
  if (K1(t)) return e;
}
function mT(e, t) {
  if (e === 'change') return t;
}
var Cx = !1;
if (Rr) {
  var Md;
  if (Rr) {
    var $d = 'oninput' in document;
    if (!$d) {
      var Zv = document.createElement('div');
      Zv.setAttribute('oninput', 'return;'),
        ($d = typeof Zv.oninput == 'function');
    }
    Md = $d;
  } else Md = !1;
  Cx = Md && (!document.documentMode || 9 < document.documentMode);
}
function Jv() {
  rs && (rs.detachEvent('onpropertychange', Ex), (Es = rs = null));
}
function Ex(e) {
  if (e.propertyName === 'value' && pc(Es)) {
    var t = [];
    wx(t, Es, e, Im(e)), rx(pT, t);
  }
}
function hT(e, t, n) {
  e === 'focusin'
    ? (Jv(), (rs = t), (Es = n), rs.attachEvent('onpropertychange', Ex))
    : e === 'focusout' && Jv();
}
function vT(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return pc(Es);
}
function gT(e, t) {
  if (e === 'click') return pc(t);
}
function yT(e, t) {
  if (e === 'input' || e === 'change') return pc(t);
}
function xT(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Qn = typeof Object.is == 'function' ? Object.is : xT;
function Ps(e, t) {
  if (Qn(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!$f.call(t, o) || !Qn(e[o], t[o])) return !1;
  }
  return !0;
}
function eg(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function tg(e, t) {
  var n = eg(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = eg(n);
  }
}
function Px(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Px(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Tx() {
  for (var e = window, t = pu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = pu(e.document);
  }
  return t;
}
function Bm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function bT(e) {
  var t = Tx(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Px(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Bm(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = tg(n, i));
        var a = tg(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ST = Rr && 'documentMode' in document && 11 >= document.documentMode,
  Ai = null,
  Qf = null,
  os = null,
  Yf = !1;
function ng(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Yf ||
    Ai == null ||
    Ai !== pu(r) ||
    ((r = Ai),
    'selectionStart' in r && Bm(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (os && Ps(os, r)) ||
      ((os = r),
      (r = bu(Qf, 'onSelect')),
      0 < r.length &&
        ((t = new Dm('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ai))));
}
function bl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Ni = {
    animationend: bl('Animation', 'AnimationEnd'),
    animationiteration: bl('Animation', 'AnimationIteration'),
    animationstart: bl('Animation', 'AnimationStart'),
    transitionend: bl('Transition', 'TransitionEnd'),
  },
  Id = {},
  Ox = {};
Rr &&
  ((Ox = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ni.animationend.animation,
    delete Ni.animationiteration.animation,
    delete Ni.animationstart.animation),
  'TransitionEvent' in window || delete Ni.transitionend.transition);
function mc(e) {
  if (Id[e]) return Id[e];
  if (!Ni[e]) return e;
  var t = Ni[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ox) return (Id[e] = t[n]);
  return e;
}
var Rx = mc('animationend'),
  Mx = mc('animationiteration'),
  $x = mc('animationstart'),
  Ix = mc('transitionend'),
  kx = new Map(),
  rg =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function go(e, t) {
  kx.set(e, t), ii(t, [e]);
}
for (var kd = 0; kd < rg.length; kd++) {
  var Ad = rg[kd],
    wT = Ad.toLowerCase(),
    CT = Ad[0].toUpperCase() + Ad.slice(1);
  go(wT, 'on' + CT);
}
go(Rx, 'onAnimationEnd');
go(Mx, 'onAnimationIteration');
go($x, 'onAnimationStart');
go('dblclick', 'onDoubleClick');
go('focusin', 'onFocus');
go('focusout', 'onBlur');
go(Ix, 'onTransitionEnd');
ra('onMouseEnter', ['mouseout', 'mouseover']);
ra('onMouseLeave', ['mouseout', 'mouseover']);
ra('onPointerEnter', ['pointerout', 'pointerover']);
ra('onPointerLeave', ['pointerout', 'pointerover']);
ii(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
ii(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
ii('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
ii(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
ii(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
ii(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Ya =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  ET = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ya));
function og(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), w2(r, t, void 0, e), (e.currentTarget = null);
}
function Ax(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e;
          og(o, s, u), (i = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          og(o, s, u), (i = l);
        }
    }
  }
  if (hu) throw ((e = Wf), (hu = !1), (Wf = null), e);
}
function Ye(e, t) {
  var n = t[tp];
  n === void 0 && (n = t[tp] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Nx(t, e, 2, !1), n.add(r));
}
function Nd(e, t, n) {
  var r = 0;
  t && (r |= 4), Nx(n, e, r, t);
}
var Sl = '_reactListening' + Math.random().toString(36).slice(2);
function Ts(e) {
  if (!e[Sl]) {
    (e[Sl] = !0),
      F1.forEach(function (n) {
        n !== 'selectionchange' && (ET.has(n) || Nd(n, !1, e), Nd(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Sl] || ((t[Sl] = !0), Nd('selectionchange', !1, t));
  }
}
function Nx(e, t, n, r) {
  switch (gx(t)) {
    case 1:
      var o = j2;
      break;
    case 4:
      o = z2;
      break;
    default:
      o = Lm;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Uf ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Ld(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = zo(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  rx(function () {
    var u = i,
      c = Im(n),
      f = [];
    e: {
      var d = kx.get(e);
      if (d !== void 0) {
        var m = Dm,
          v = e;
        switch (e) {
          case 'keypress':
            if (Xl(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = eT;
            break;
          case 'focusin':
            (v = 'focus'), (m = Rd);
            break;
          case 'focusout':
            (v = 'blur'), (m = Rd);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = Rd;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            m = Kv;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = V2;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = rT;
            break;
          case Rx:
          case Mx:
          case $x:
            m = W2;
            break;
          case Ix:
            m = iT;
            break;
          case 'scroll':
            m = B2;
            break;
          case 'wheel':
            m = sT;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = G2;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = Xv;
        }
        var x = (t & 4) !== 0,
          S = !x && e === 'scroll',
          y = x ? (d !== null ? d + 'Capture' : null) : d;
        x = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var b = g.stateNode;
          if (
            (g.tag === 5 &&
              b !== null &&
              ((g = b),
              y !== null && ((b = bs(h, y)), b != null && x.push(Os(h, b, g)))),
            S)
          )
            break;
          h = h.return;
        }
        0 < x.length &&
          ((d = new m(d, v, null, n, c)), f.push({ event: d, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (m = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== Vf &&
            (v = n.relatedTarget || n.fromElement) &&
            (zo(v) || v[Mr]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          m
            ? ((v = n.relatedTarget || n.toElement),
              (m = u),
              (v = v ? zo(v) : null),
              v !== null &&
                ((S = ai(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((m = null), (v = u)),
          m !== v)
        ) {
          if (
            ((x = Kv),
            (b = 'onMouseLeave'),
            (y = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((x = Xv),
              (b = 'onPointerLeave'),
              (y = 'onPointerEnter'),
              (h = 'pointer')),
            (S = m == null ? d : Li(m)),
            (g = v == null ? d : Li(v)),
            (d = new x(b, h + 'leave', m, n, c)),
            (d.target = S),
            (d.relatedTarget = g),
            (b = null),
            zo(c) === u &&
              ((x = new x(y, h + 'enter', v, n, c)),
              (x.target = g),
              (x.relatedTarget = S),
              (b = x)),
            (S = b),
            m && v)
          )
            t: {
              for (x = m, y = v, h = 0, g = x; g; g = xi(g)) h++;
              for (g = 0, b = y; b; b = xi(b)) g++;
              for (; 0 < h - g; ) (x = xi(x)), h--;
              for (; 0 < g - h; ) (y = xi(y)), g--;
              for (; h--; ) {
                if (x === y || (y !== null && x === y.alternate)) break t;
                (x = xi(x)), (y = xi(y));
              }
              x = null;
            }
          else x = null;
          m !== null && ig(f, d, m, x, !1),
            v !== null && S !== null && ig(f, S, v, x, !0);
        }
      }
      e: {
        if (
          ((d = u ? Li(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && d.type === 'file'))
        )
          var C = mT;
        else if (qv(d))
          if (Cx) C = yT;
          else {
            C = vT;
            var P = hT;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (C = gT);
        if (C && (C = C(e, u))) {
          wx(f, C, n, c);
          break e;
        }
        P && P(e, d, u),
          e === 'focusout' &&
            (P = d._wrapperState) &&
            P.controlled &&
            d.type === 'number' &&
            Df(d, 'number', d.value);
      }
      switch (((P = u ? Li(u) : window), e)) {
        case 'focusin':
          (qv(P) || P.contentEditable === 'true') &&
            ((Ai = P), (Qf = u), (os = null));
          break;
        case 'focusout':
          os = Qf = Ai = null;
          break;
        case 'mousedown':
          Yf = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Yf = !1), ng(f, n, c);
          break;
        case 'selectionchange':
          if (ST) break;
        case 'keydown':
        case 'keyup':
          ng(f, n, c);
      }
      var w;
      if (zm)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart';
              break e;
            case 'compositionend':
              T = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              T = 'onCompositionUpdate';
              break e;
          }
          T = void 0;
        }
      else
        ki
          ? bx(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart');
      T &&
        (xx &&
          n.locale !== 'ko' &&
          (ki || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && ki && (w = yx())
            : ((Xr = c),
              (_m = 'value' in Xr ? Xr.value : Xr.textContent),
              (ki = !0))),
        (P = bu(u, T)),
        0 < P.length &&
          ((T = new Gv(T, e, null, n, c)),
          f.push({ event: T, listeners: P }),
          w ? (T.data = w) : ((w = Sx(n)), w !== null && (T.data = w)))),
        (w = uT ? cT(e, n) : dT(e, n)) &&
          ((u = bu(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Gv('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = w)));
    }
    Ax(f, t);
  });
}
function Os(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function bu(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = bs(e, n)),
      i != null && r.unshift(Os(e, i, o)),
      (i = bs(e, t)),
      i != null && r.push(Os(e, i, o))),
      (e = e.return);
  }
  return r;
}
function xi(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ig(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = bs(n, i)), l != null && a.unshift(Os(n, l, s)))
        : o || ((l = bs(n, i)), l != null && a.push(Os(n, l, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var PT = /\r\n?/g,
  TT = /\u0000|\uFFFD/g;
function ag(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      PT,
      `
`
    )
    .replace(TT, '');
}
function wl(e, t, n) {
  if (((t = ag(t)), ag(e) !== t && n)) throw Error(W(425));
}
function Su() {}
var qf = null,
  Zf = null;
function Jf(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ep = typeof setTimeout == 'function' ? setTimeout : void 0,
  OT = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  sg = typeof Promise == 'function' ? Promise : void 0,
  RT =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof sg < 'u'
      ? function (e) {
          return sg.resolve(null).then(e).catch(MT);
        }
      : ep;
function MT(e) {
  setTimeout(function () {
    throw e;
  });
}
function _d(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Cs(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Cs(t);
}
function no(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function lg(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ga = Math.random().toString(36).slice(2),
  rr = '__reactFiber$' + ga,
  Rs = '__reactProps$' + ga,
  Mr = '__reactContainer$' + ga,
  tp = '__reactEvents$' + ga,
  $T = '__reactListeners$' + ga,
  IT = '__reactHandles$' + ga;
function zo(e) {
  var t = e[rr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Mr] || n[rr])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = lg(e); e !== null; ) {
          if ((n = e[rr])) return n;
          e = lg(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Qs(e) {
  return (
    (e = e[rr] || e[Mr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Li(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(W(33));
}
function hc(e) {
  return e[Rs] || null;
}
var np = [],
  _i = -1;
function yo(e) {
  return { current: e };
}
function qe(e) {
  0 > _i || ((e.current = np[_i]), (np[_i] = null), _i--);
}
function Qe(e, t) {
  _i++, (np[_i] = e.current), (e.current = t);
}
var po = {},
  Yt = yo(po),
  an = yo(!1),
  qo = po;
function oa(e, t) {
  var n = e.type.contextTypes;
  if (!n) return po;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function sn(e) {
  return (e = e.childContextTypes), e != null;
}
function wu() {
  qe(an), qe(Yt);
}
function ug(e, t, n) {
  if (Yt.current !== po) throw Error(W(168));
  Qe(Yt, t), Qe(an, n);
}
function Lx(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(W(108, h2(e) || 'Unknown', o));
  return st({}, n, r);
}
function Cu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || po),
    (qo = Yt.current),
    Qe(Yt, e),
    Qe(an, an.current),
    !0
  );
}
function cg(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(W(169));
  n
    ? ((e = Lx(e, t, qo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      qe(an),
      qe(Yt),
      Qe(Yt, e))
    : qe(an),
    Qe(an, n);
}
var xr = null,
  vc = !1,
  Dd = !1;
function _x(e) {
  xr === null ? (xr = [e]) : xr.push(e);
}
function kT(e) {
  (vc = !0), _x(e);
}
function xo() {
  if (!Dd && xr !== null) {
    Dd = !0;
    var e = 0,
      t = We;
    try {
      var n = xr;
      for (We = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (xr = null), (vc = !1);
    } catch (o) {
      throw (xr !== null && (xr = xr.slice(e + 1)), sx(km, xo), o);
    } finally {
      (We = t), (Dd = !1);
    }
  }
  return null;
}
var Di = [],
  ji = 0,
  Eu = null,
  Pu = 0,
  Pn = [],
  Tn = 0,
  Zo = null,
  Sr = 1,
  wr = '';
function $o(e, t) {
  (Di[ji++] = Pu), (Di[ji++] = Eu), (Eu = e), (Pu = t);
}
function Dx(e, t, n) {
  (Pn[Tn++] = Sr), (Pn[Tn++] = wr), (Pn[Tn++] = Zo), (Zo = e);
  var r = Sr;
  e = wr;
  var o = 32 - Kn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Kn(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (Sr = (1 << (32 - Kn(t) + o)) | (n << o) | r),
      (wr = i + e);
  } else (Sr = (1 << i) | (n << o) | r), (wr = e);
}
function Fm(e) {
  e.return !== null && ($o(e, 1), Dx(e, 1, 0));
}
function Vm(e) {
  for (; e === Eu; )
    (Eu = Di[--ji]), (Di[ji] = null), (Pu = Di[--ji]), (Di[ji] = null);
  for (; e === Zo; )
    (Zo = Pn[--Tn]),
      (Pn[Tn] = null),
      (wr = Pn[--Tn]),
      (Pn[Tn] = null),
      (Sr = Pn[--Tn]),
      (Pn[Tn] = null);
}
var vn = null,
  hn = null,
  nt = !1,
  Wn = null;
function jx(e, t) {
  var n = On(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function dg(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (vn = e), (hn = no(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (vn = e), (hn = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Zo !== null ? { id: Sr, overflow: wr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = On(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (vn = e),
            (hn = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function rp(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function op(e) {
  if (nt) {
    var t = hn;
    if (t) {
      var n = t;
      if (!dg(e, t)) {
        if (rp(e)) throw Error(W(418));
        t = no(n.nextSibling);
        var r = vn;
        t && dg(e, t)
          ? jx(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (nt = !1), (vn = e));
      }
    } else {
      if (rp(e)) throw Error(W(418));
      (e.flags = (e.flags & -4097) | 2), (nt = !1), (vn = e);
    }
  }
}
function fg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  vn = e;
}
function Cl(e) {
  if (e !== vn) return !1;
  if (!nt) return fg(e), (nt = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Jf(e.type, e.memoizedProps))),
    t && (t = hn))
  ) {
    if (rp(e)) throw (zx(), Error(W(418)));
    for (; t; ) jx(e, t), (t = no(t.nextSibling));
  }
  if ((fg(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(W(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              hn = no(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      hn = null;
    }
  } else hn = vn ? no(e.stateNode.nextSibling) : null;
  return !0;
}
function zx() {
  for (var e = hn; e; ) e = no(e.nextSibling);
}
function ia() {
  (hn = vn = null), (nt = !1);
}
function Hm(e) {
  Wn === null ? (Wn = [e]) : Wn.push(e);
}
var AT = Nr.ReactCurrentBatchConfig;
function Vn(e, t) {
  if (e && e.defaultProps) {
    (t = st({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Tu = yo(null),
  Ou = null,
  zi = null,
  Um = null;
function Wm() {
  Um = zi = Ou = null;
}
function Km(e) {
  var t = Tu.current;
  qe(Tu), (e._currentValue = t);
}
function ip(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ea(e, t) {
  (Ou = e),
    (Um = zi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (on = !0), (e.firstContext = null));
}
function Mn(e) {
  var t = e._currentValue;
  if (Um !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), zi === null)) {
      if (Ou === null) throw Error(W(308));
      (zi = e), (Ou.dependencies = { lanes: 0, firstContext: e });
    } else zi = zi.next = e;
  return t;
}
var Bo = null;
function Gm(e) {
  Bo === null ? (Bo = [e]) : Bo.push(e);
}
function Bx(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Gm(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    $r(e, r)
  );
}
function $r(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ur = !1;
function Xm(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Fx(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Er(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ro(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), _e & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      $r(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Gm(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    $r(e, n)
  );
}
function Ql(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Am(e, n);
  }
}
function pg(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ru(e, t, n, r) {
  var o = e.updateQueue;
  Ur = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (i = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var f = o.baseState;
    (a = 0), (c = u = l = null), (s = i);
    do {
      var d = s.lane,
        m = s.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var v = e,
            x = s;
          switch (((d = t), (m = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == 'function')) {
                f = v.call(m, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (d = typeof v == 'function' ? v.call(m, f, d) : v),
                d == null)
              )
                break e;
              f = st({}, f, d);
              break e;
            case 2:
              Ur = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [s]) : d.push(s));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (l = f)) : (c = c.next = m),
          (a |= d);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (d = s),
          (s = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = f),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (ei |= a), (e.lanes = a), (e.memoizedState = f);
  }
}
function mg(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(W(191, o));
        o.call(r);
      }
    }
}
var Vx = new B1.Component().refs;
function ap(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : st({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var gc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ai(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = en(),
      o = io(e),
      i = Er(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ro(e, i, o)),
      t !== null && (Gn(t, e, o, r), Ql(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = en(),
      o = io(e),
      i = Er(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ro(e, i, o)),
      t !== null && (Gn(t, e, o, r), Ql(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = en(),
      r = io(e),
      o = Er(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = ro(e, o, r)),
      t !== null && (Gn(t, e, r, n), Ql(t, e, r));
  },
};
function hg(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ps(n, r) || !Ps(o, i)
      : !0
  );
}
function Hx(e, t, n) {
  var r = !1,
    o = po,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Mn(i))
      : ((o = sn(t) ? qo : Yt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? oa(e, o) : po)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = gc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function vg(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && gc.enqueueReplaceState(t, t.state, null);
}
function sp(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Vx), Xm(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = Mn(i))
    : ((i = sn(t) ? qo : Yt.current), (o.context = oa(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (ap(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && gc.enqueueReplaceState(o, o.state, null),
      Ru(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function _a(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(W(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(W(147, e));
      var o = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs;
            s === Vx && (s = o.refs = {}),
              a === null ? delete s[i] : (s[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(W(284));
    if (!n._owner) throw Error(W(290, e));
  }
  return e;
}
function El(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      W(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function gg(e) {
  var t = e._init;
  return t(e._payload);
}
function Ux(e) {
  function t(y, h) {
    if (e) {
      var g = y.deletions;
      g === null ? ((y.deletions = [h]), (y.flags |= 16)) : g.push(h);
    }
  }
  function n(y, h) {
    if (!e) return null;
    for (; h !== null; ) t(y, h), (h = h.sibling);
    return null;
  }
  function r(y, h) {
    for (y = new Map(); h !== null; )
      h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling);
    return y;
  }
  function o(y, h) {
    return (y = ao(y, h)), (y.index = 0), (y.sibling = null), y;
  }
  function i(y, h, g) {
    return (
      (y.index = g),
      e
        ? ((g = y.alternate),
          g !== null
            ? ((g = g.index), g < h ? ((y.flags |= 2), h) : g)
            : ((y.flags |= 2), h))
        : ((y.flags |= 1048576), h)
    );
  }
  function a(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function s(y, h, g, b) {
    return h === null || h.tag !== 6
      ? ((h = Ud(g, y.mode, b)), (h.return = y), h)
      : ((h = o(h, g)), (h.return = y), h);
  }
  function l(y, h, g, b) {
    var C = g.type;
    return C === Ii
      ? c(y, h, g.props.children, b, g.key)
      : h !== null &&
        (h.elementType === C ||
          (typeof C == 'object' &&
            C !== null &&
            C.$$typeof === Hr &&
            gg(C) === h.type))
      ? ((b = o(h, g.props)), (b.ref = _a(y, h, g)), (b.return = y), b)
      : ((b = tu(g.type, g.key, g.props, null, y.mode, b)),
        (b.ref = _a(y, h, g)),
        (b.return = y),
        b);
  }
  function u(y, h, g, b) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = Wd(g, y.mode, b)), (h.return = y), h)
      : ((h = o(h, g.children || [])), (h.return = y), h);
  }
  function c(y, h, g, b, C) {
    return h === null || h.tag !== 7
      ? ((h = Wo(g, y.mode, b, C)), (h.return = y), h)
      : ((h = o(h, g)), (h.return = y), h);
  }
  function f(y, h, g) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = Ud('' + h, y.mode, g)), (h.return = y), h;
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case pl:
          return (
            (g = tu(h.type, h.key, h.props, null, y.mode, g)),
            (g.ref = _a(y, null, h)),
            (g.return = y),
            g
          );
        case $i:
          return (h = Wd(h, y.mode, g)), (h.return = y), h;
        case Hr:
          var b = h._init;
          return f(y, b(h._payload), g);
      }
      if (Xa(h) || Ia(h))
        return (h = Wo(h, y.mode, g, null)), (h.return = y), h;
      El(y, h);
    }
    return null;
  }
  function d(y, h, g, b) {
    var C = h !== null ? h.key : null;
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return C !== null ? null : s(y, h, '' + g, b);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case pl:
          return g.key === C ? l(y, h, g, b) : null;
        case $i:
          return g.key === C ? u(y, h, g, b) : null;
        case Hr:
          return (C = g._init), d(y, h, C(g._payload), b);
      }
      if (Xa(g) || Ia(g)) return C !== null ? null : c(y, h, g, b, null);
      El(y, g);
    }
    return null;
  }
  function m(y, h, g, b, C) {
    if ((typeof b == 'string' && b !== '') || typeof b == 'number')
      return (y = y.get(g) || null), s(h, y, '' + b, C);
    if (typeof b == 'object' && b !== null) {
      switch (b.$$typeof) {
        case pl:
          return (y = y.get(b.key === null ? g : b.key) || null), l(h, y, b, C);
        case $i:
          return (y = y.get(b.key === null ? g : b.key) || null), u(h, y, b, C);
        case Hr:
          var P = b._init;
          return m(y, h, g, P(b._payload), C);
      }
      if (Xa(b) || Ia(b)) return (y = y.get(g) || null), c(h, y, b, C, null);
      El(h, b);
    }
    return null;
  }
  function v(y, h, g, b) {
    for (
      var C = null, P = null, w = h, T = (h = 0), $ = null;
      w !== null && T < g.length;
      T++
    ) {
      w.index > T ? (($ = w), (w = null)) : ($ = w.sibling);
      var N = d(y, w, g[T], b);
      if (N === null) {
        w === null && (w = $);
        break;
      }
      e && w && N.alternate === null && t(y, w),
        (h = i(N, h, T)),
        P === null ? (C = N) : (P.sibling = N),
        (P = N),
        (w = $);
    }
    if (T === g.length) return n(y, w), nt && $o(y, T), C;
    if (w === null) {
      for (; T < g.length; T++)
        (w = f(y, g[T], b)),
          w !== null &&
            ((h = i(w, h, T)), P === null ? (C = w) : (P.sibling = w), (P = w));
      return nt && $o(y, T), C;
    }
    for (w = r(y, w); T < g.length; T++)
      ($ = m(w, y, T, g[T], b)),
        $ !== null &&
          (e && $.alternate !== null && w.delete($.key === null ? T : $.key),
          (h = i($, h, T)),
          P === null ? (C = $) : (P.sibling = $),
          (P = $));
    return (
      e &&
        w.forEach(function (j) {
          return t(y, j);
        }),
      nt && $o(y, T),
      C
    );
  }
  function x(y, h, g, b) {
    var C = Ia(g);
    if (typeof C != 'function') throw Error(W(150));
    if (((g = C.call(g)), g == null)) throw Error(W(151));
    for (
      var P = (C = null), w = h, T = (h = 0), $ = null, N = g.next();
      w !== null && !N.done;
      T++, N = g.next()
    ) {
      w.index > T ? (($ = w), (w = null)) : ($ = w.sibling);
      var j = d(y, w, N.value, b);
      if (j === null) {
        w === null && (w = $);
        break;
      }
      e && w && j.alternate === null && t(y, w),
        (h = i(j, h, T)),
        P === null ? (C = j) : (P.sibling = j),
        (P = j),
        (w = $);
    }
    if (N.done) return n(y, w), nt && $o(y, T), C;
    if (w === null) {
      for (; !N.done; T++, N = g.next())
        (N = f(y, N.value, b)),
          N !== null &&
            ((h = i(N, h, T)), P === null ? (C = N) : (P.sibling = N), (P = N));
      return nt && $o(y, T), C;
    }
    for (w = r(y, w); !N.done; T++, N = g.next())
      (N = m(w, y, T, N.value, b)),
        N !== null &&
          (e && N.alternate !== null && w.delete(N.key === null ? T : N.key),
          (h = i(N, h, T)),
          P === null ? (C = N) : (P.sibling = N),
          (P = N));
    return (
      e &&
        w.forEach(function (F) {
          return t(y, F);
        }),
      nt && $o(y, T),
      C
    );
  }
  function S(y, h, g, b) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === Ii &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case pl:
          e: {
            for (var C = g.key, P = h; P !== null; ) {
              if (P.key === C) {
                if (((C = g.type), C === Ii)) {
                  if (P.tag === 7) {
                    n(y, P.sibling),
                      (h = o(P, g.props.children)),
                      (h.return = y),
                      (y = h);
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == 'object' &&
                    C !== null &&
                    C.$$typeof === Hr &&
                    gg(C) === P.type)
                ) {
                  n(y, P.sibling),
                    (h = o(P, g.props)),
                    (h.ref = _a(y, P, g)),
                    (h.return = y),
                    (y = h);
                  break e;
                }
                n(y, P);
                break;
              } else t(y, P);
              P = P.sibling;
            }
            g.type === Ii
              ? ((h = Wo(g.props.children, y.mode, b, g.key)),
                (h.return = y),
                (y = h))
              : ((b = tu(g.type, g.key, g.props, null, y.mode, b)),
                (b.ref = _a(y, h, g)),
                (b.return = y),
                (y = b));
          }
          return a(y);
        case $i:
          e: {
            for (P = g.key; h !== null; ) {
              if (h.key === P)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  n(y, h.sibling),
                    (h = o(h, g.children || [])),
                    (h.return = y),
                    (y = h);
                  break e;
                } else {
                  n(y, h);
                  break;
                }
              else t(y, h);
              h = h.sibling;
            }
            (h = Wd(g, y.mode, b)), (h.return = y), (y = h);
          }
          return a(y);
        case Hr:
          return (P = g._init), S(y, h, P(g._payload), b);
      }
      if (Xa(g)) return v(y, h, g, b);
      if (Ia(g)) return x(y, h, g, b);
      El(y, g);
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        h !== null && h.tag === 6
          ? (n(y, h.sibling), (h = o(h, g)), (h.return = y), (y = h))
          : (n(y, h), (h = Ud(g, y.mode, b)), (h.return = y), (y = h)),
        a(y))
      : n(y, h);
  }
  return S;
}
var aa = Ux(!0),
  Wx = Ux(!1),
  Ys = {},
  ir = yo(Ys),
  Ms = yo(Ys),
  $s = yo(Ys);
function Fo(e) {
  if (e === Ys) throw Error(W(174));
  return e;
}
function Qm(e, t) {
  switch ((Qe($s, t), Qe(Ms, e), Qe(ir, Ys), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : zf(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = zf(t, e));
  }
  qe(ir), Qe(ir, t);
}
function sa() {
  qe(ir), qe(Ms), qe($s);
}
function Kx(e) {
  Fo($s.current);
  var t = Fo(ir.current),
    n = zf(t, e.type);
  t !== n && (Qe(Ms, e), Qe(ir, n));
}
function Ym(e) {
  Ms.current === e && (qe(ir), qe(Ms));
}
var ot = yo(0);
function Mu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var jd = [];
function qm() {
  for (var e = 0; e < jd.length; e++)
    jd[e]._workInProgressVersionPrimary = null;
  jd.length = 0;
}
var Yl = Nr.ReactCurrentDispatcher,
  zd = Nr.ReactCurrentBatchConfig,
  Jo = 0,
  at = null,
  Ot = null,
  Lt = null,
  $u = !1,
  is = !1,
  Is = 0,
  NT = 0;
function Ut() {
  throw Error(W(321));
}
function Zm(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Qn(e[n], t[n])) return !1;
  return !0;
}
function Jm(e, t, n, r, o, i) {
  if (
    ((Jo = i),
    (at = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Yl.current = e === null || e.memoizedState === null ? jT : zT),
    (e = n(r, o)),
    is)
  ) {
    i = 0;
    do {
      if (((is = !1), (Is = 0), 25 <= i)) throw Error(W(301));
      (i += 1),
        (Lt = Ot = null),
        (t.updateQueue = null),
        (Yl.current = BT),
        (e = n(r, o));
    } while (is);
  }
  if (
    ((Yl.current = Iu),
    (t = Ot !== null && Ot.next !== null),
    (Jo = 0),
    (Lt = Ot = at = null),
    ($u = !1),
    t)
  )
    throw Error(W(300));
  return e;
}
function eh() {
  var e = Is !== 0;
  return (Is = 0), e;
}
function tr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Lt === null ? (at.memoizedState = Lt = e) : (Lt = Lt.next = e), Lt;
}
function $n() {
  if (Ot === null) {
    var e = at.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ot.next;
  var t = Lt === null ? at.memoizedState : Lt.next;
  if (t !== null) (Lt = t), (Ot = e);
  else {
    if (e === null) throw Error(W(310));
    (Ot = e),
      (e = {
        memoizedState: Ot.memoizedState,
        baseState: Ot.baseState,
        baseQueue: Ot.baseQueue,
        queue: Ot.queue,
        next: null,
      }),
      Lt === null ? (at.memoizedState = Lt = e) : (Lt = Lt.next = e);
  }
  return Lt;
}
function ks(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Bd(e) {
  var t = $n(),
    n = t.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = e;
  var r = Ot,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (a = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Jo & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = f), (a = r)) : (l = l.next = f),
          (at.lanes |= c),
          (ei |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (a = r) : (l.next = s),
      Qn(r, t.memoizedState) || (on = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (at.lanes |= i), (ei |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Fd(e) {
  var t = $n(),
    n = t.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    Qn(i, t.memoizedState) || (on = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Gx() {}
function Xx(e, t) {
  var n = at,
    r = $n(),
    o = t(),
    i = !Qn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (on = !0)),
    (r = r.queue),
    th(qx.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Lt !== null && Lt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      As(9, Yx.bind(null, n, r, o, t), void 0, null),
      _t === null)
    )
      throw Error(W(349));
    Jo & 30 || Qx(n, t, o);
  }
  return o;
}
function Qx(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = at.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (at.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Yx(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Zx(t) && Jx(e);
}
function qx(e, t, n) {
  return n(function () {
    Zx(t) && Jx(e);
  });
}
function Zx(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qn(e, n);
  } catch {
    return !0;
  }
}
function Jx(e) {
  var t = $r(e, 1);
  t !== null && Gn(t, e, 1, -1);
}
function yg(e) {
  var t = tr();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ks,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = DT.bind(null, at, e)),
    [t.memoizedState, e]
  );
}
function As(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = at.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (at.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function eb() {
  return $n().memoizedState;
}
function ql(e, t, n, r) {
  var o = tr();
  (at.flags |= e),
    (o.memoizedState = As(1 | t, n, void 0, r === void 0 ? null : r));
}
function yc(e, t, n, r) {
  var o = $n();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ot !== null) {
    var a = Ot.memoizedState;
    if (((i = a.destroy), r !== null && Zm(r, a.deps))) {
      o.memoizedState = As(t, n, i, r);
      return;
    }
  }
  (at.flags |= e), (o.memoizedState = As(1 | t, n, i, r));
}
function xg(e, t) {
  return ql(8390656, 8, e, t);
}
function th(e, t) {
  return yc(2048, 8, e, t);
}
function tb(e, t) {
  return yc(4, 2, e, t);
}
function nb(e, t) {
  return yc(4, 4, e, t);
}
function rb(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ob(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), yc(4, 4, rb.bind(null, t, e), n)
  );
}
function nh() {}
function ib(e, t) {
  var n = $n();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zm(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ab(e, t) {
  var n = $n();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zm(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function sb(e, t, n) {
  return Jo & 21
    ? (Qn(n, t) || ((n = cx()), (at.lanes |= n), (ei |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (on = !0)), (e.memoizedState = n));
}
function LT(e, t) {
  var n = We;
  (We = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = zd.transition;
  zd.transition = {};
  try {
    e(!1), t();
  } finally {
    (We = n), (zd.transition = r);
  }
}
function lb() {
  return $n().memoizedState;
}
function _T(e, t, n) {
  var r = io(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ub(e))
  )
    cb(t, n);
  else if (((n = Bx(e, t, n, r)), n !== null)) {
    var o = en();
    Gn(n, e, r, o), db(n, t, r);
  }
}
function DT(e, t, n) {
  var r = io(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ub(e)) cb(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Qn(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Gm(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bx(e, t, o, r)),
      n !== null && ((o = en()), Gn(n, e, r, o), db(n, t, r));
  }
}
function ub(e) {
  var t = e.alternate;
  return e === at || (t !== null && t === at);
}
function cb(e, t) {
  is = $u = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function db(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Am(e, n);
  }
}
var Iu = {
    readContext: Mn,
    useCallback: Ut,
    useContext: Ut,
    useEffect: Ut,
    useImperativeHandle: Ut,
    useInsertionEffect: Ut,
    useLayoutEffect: Ut,
    useMemo: Ut,
    useReducer: Ut,
    useRef: Ut,
    useState: Ut,
    useDebugValue: Ut,
    useDeferredValue: Ut,
    useTransition: Ut,
    useMutableSource: Ut,
    useSyncExternalStore: Ut,
    useId: Ut,
    unstable_isNewReconciler: !1,
  },
  jT = {
    readContext: Mn,
    useCallback: function (e, t) {
      return (tr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Mn,
    useEffect: xg,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ql(4194308, 4, rb.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ql(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ql(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = tr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = tr();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = _T.bind(null, at, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = tr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: yg,
    useDebugValue: nh,
    useDeferredValue: function (e) {
      return (tr().memoizedState = e);
    },
    useTransition: function () {
      var e = yg(!1),
        t = e[0];
      return (e = LT.bind(null, e[1])), (tr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = at,
        o = tr();
      if (nt) {
        if (n === void 0) throw Error(W(407));
        n = n();
      } else {
        if (((n = t()), _t === null)) throw Error(W(349));
        Jo & 30 || Qx(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        xg(qx.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        As(9, Yx.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = tr(),
        t = _t.identifierPrefix;
      if (nt) {
        var n = wr,
          r = Sr;
        (n = (r & ~(1 << (32 - Kn(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Is++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = NT++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  zT = {
    readContext: Mn,
    useCallback: ib,
    useContext: Mn,
    useEffect: th,
    useImperativeHandle: ob,
    useInsertionEffect: tb,
    useLayoutEffect: nb,
    useMemo: ab,
    useReducer: Bd,
    useRef: eb,
    useState: function () {
      return Bd(ks);
    },
    useDebugValue: nh,
    useDeferredValue: function (e) {
      var t = $n();
      return sb(t, Ot.memoizedState, e);
    },
    useTransition: function () {
      var e = Bd(ks)[0],
        t = $n().memoizedState;
      return [e, t];
    },
    useMutableSource: Gx,
    useSyncExternalStore: Xx,
    useId: lb,
    unstable_isNewReconciler: !1,
  },
  BT = {
    readContext: Mn,
    useCallback: ib,
    useContext: Mn,
    useEffect: th,
    useImperativeHandle: ob,
    useInsertionEffect: tb,
    useLayoutEffect: nb,
    useMemo: ab,
    useReducer: Fd,
    useRef: eb,
    useState: function () {
      return Fd(ks);
    },
    useDebugValue: nh,
    useDeferredValue: function (e) {
      var t = $n();
      return Ot === null ? (t.memoizedState = e) : sb(t, Ot.memoizedState, e);
    },
    useTransition: function () {
      var e = Fd(ks)[0],
        t = $n().memoizedState;
      return [e, t];
    },
    useMutableSource: Gx,
    useSyncExternalStore: Xx,
    useId: lb,
    unstable_isNewReconciler: !1,
  };
function la(e, t) {
  try {
    var n = '',
      r = t;
    do (n += m2(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Vd(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function lp(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var FT = typeof WeakMap == 'function' ? WeakMap : Map;
function fb(e, t, n) {
  (n = Er(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Au || ((Au = !0), (yp = r)), lp(e, t);
    }),
    n
  );
}
function pb(e, t, n) {
  (n = Er(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        lp(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        lp(e, t),
          typeof r != 'function' &&
            (oo === null ? (oo = new Set([this])) : oo.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : '',
        });
      }),
    n
  );
}
function bg(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new FT();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = tO.bind(null, e, t, n)), t.then(e, e));
}
function Sg(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function wg(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Er(-1, 1)), (t.tag = 2), ro(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var VT = Nr.ReactCurrentOwner,
  on = !1;
function Zt(e, t, n, r) {
  t.child = e === null ? Wx(t, null, n, r) : aa(t, e.child, n, r);
}
function Cg(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    ea(t, o),
    (r = Jm(e, t, n, r, i, o)),
    (n = eh()),
    e !== null && !on
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ir(e, t, o))
      : (nt && n && Fm(t), (t.flags |= 1), Zt(e, t, r, o), t.child)
  );
}
function Eg(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !ch(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), mb(e, t, i, r, o))
      : ((e = tu(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ps), n(a, r) && e.ref === t.ref)
    )
      return Ir(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = ao(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function mb(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ps(i, r) && e.ref === t.ref)
      if (((on = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (on = !0);
      else return (t.lanes = e.lanes), Ir(e, t, o);
  }
  return up(e, t, n, r, o);
}
function hb(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Qe(Fi, pn),
        (pn |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Qe(Fi, pn),
          (pn |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Qe(Fi, pn),
        (pn |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Qe(Fi, pn),
      (pn |= r);
  return Zt(e, t, o, n), t.child;
}
function vb(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function up(e, t, n, r, o) {
  var i = sn(n) ? qo : Yt.current;
  return (
    (i = oa(t, i)),
    ea(t, o),
    (n = Jm(e, t, n, r, i, o)),
    (r = eh()),
    e !== null && !on
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ir(e, t, o))
      : (nt && r && Fm(t), (t.flags |= 1), Zt(e, t, n, o), t.child)
  );
}
function Pg(e, t, n, r, o) {
  if (sn(n)) {
    var i = !0;
    Cu(t);
  } else i = !1;
  if ((ea(t, o), t.stateNode === null))
    Zl(e, t), Hx(t, n, r), sp(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Mn(u))
      : ((u = sn(n) ? qo : Yt.current), (u = oa(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== r || l !== u) && vg(t, a, r, u)),
      (Ur = !1);
    var d = t.memoizedState;
    (a.state = d),
      Ru(t, r, a, o),
      (l = t.memoizedState),
      s !== r || d !== l || an.current || Ur
        ? (typeof c == 'function' && (ap(t, n, c, r), (l = t.memoizedState)),
          (s = Ur || hg(t, n, s, r, d, l, u))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = s))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Fx(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Vn(t.type, s)),
      (a.props = u),
      (f = t.pendingProps),
      (d = a.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = Mn(l))
        : ((l = sn(n) ? qo : Yt.current), (l = oa(t, l)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== f || d !== l) && vg(t, a, r, l)),
      (Ur = !1),
      (d = t.memoizedState),
      (a.state = d),
      Ru(t, r, a, o);
    var v = t.memoizedState;
    s !== f || d !== v || an.current || Ur
      ? (typeof m == 'function' && (ap(t, n, m, r), (v = t.memoizedState)),
        (u = Ur || hg(t, n, u, r, d, v, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(r, v, l),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(r, v, l)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (a.props = r),
        (a.state = v),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return cp(e, t, n, r, i, o);
}
function cp(e, t, n, r, o, i) {
  vb(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && cg(t, n, !1), Ir(e, t, i);
  (r = t.stateNode), (VT.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = aa(t, e.child, null, i)), (t.child = aa(t, null, s, i)))
      : Zt(e, t, s, i),
    (t.memoizedState = r.state),
    o && cg(t, n, !0),
    t.child
  );
}
function gb(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ug(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ug(e, t.context, !1),
    Qm(e, t.containerInfo);
}
function Tg(e, t, n, r, o) {
  return ia(), Hm(o), (t.flags |= 256), Zt(e, t, n, r), t.child;
}
var dp = { dehydrated: null, treeContext: null, retryLane: 0 };
function fp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function yb(e, t, n) {
  var r = t.pendingProps,
    o = ot.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Qe(ot, o & 1),
    e === null)
  )
    return (
      op(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: 'hidden', children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = Sc(a, r, 0, null)),
              (e = Wo(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = fp(n)),
              (t.memoizedState = dp),
              e)
            : rh(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return HT(e, t, a, r, s, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = ao(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = ao(s, i)) : ((i = Wo(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? fp(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = dp),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = ao(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function rh(e, t) {
  return (
    (t = Sc({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Pl(e, t, n, r) {
  return (
    r !== null && Hm(r),
    aa(t, e.child, null, n),
    (e = rh(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function HT(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Vd(Error(W(422)))), Pl(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Sc({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = Wo(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && aa(t, e.child, null, a),
        (t.child.memoizedState = fp(a)),
        (t.memoizedState = dp),
        i);
  if (!(t.mode & 1)) return Pl(e, t, a, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(W(419))), (r = Vd(i, r, void 0)), Pl(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), on || s)) {
    if (((r = _t), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), $r(e, o), Gn(r, e, o, -1));
    }
    return uh(), (r = Vd(Error(W(421)))), Pl(e, t, a, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = nO.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (hn = no(o.nextSibling)),
      (vn = t),
      (nt = !0),
      (Wn = null),
      e !== null &&
        ((Pn[Tn++] = Sr),
        (Pn[Tn++] = wr),
        (Pn[Tn++] = Zo),
        (Sr = e.id),
        (wr = e.overflow),
        (Zo = t)),
      (t = rh(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Og(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ip(e.return, t, n);
}
function Hd(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function xb(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Zt(e, t, r.children, n), (r = ot.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Og(e, n, t);
        else if (e.tag === 19) Og(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Qe(ot, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Mu(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Hd(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Mu(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Hd(t, !0, n, null, i);
        break;
      case 'together':
        Hd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Zl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ir(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ei |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(W(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ao(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ao(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function UT(e, t, n) {
  switch (t.tag) {
    case 3:
      gb(t), ia();
      break;
    case 5:
      Kx(t);
      break;
    case 1:
      sn(t.type) && Cu(t);
      break;
    case 4:
      Qm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Qe(Tu, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Qe(ot, ot.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? yb(e, t, n)
          : (Qe(ot, ot.current & 1),
            (e = Ir(e, t, n)),
            e !== null ? e.sibling : null);
      Qe(ot, ot.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xb(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Qe(ot, ot.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), hb(e, t, n);
  }
  return Ir(e, t, n);
}
var bb, pp, Sb, wb;
bb = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
pp = function () {};
Sb = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Fo(ir.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = Lf(e, o)), (r = Lf(e, r)), (i = []);
        break;
      case 'select':
        (o = st({}, o, { value: void 0 })),
          (r = st({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = jf(e, o)), (r = jf(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Su);
    }
    Bf(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var s = o[u];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (ys.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === 'style')
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ''));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(u, l))
            : u === 'children'
            ? (typeof l != 'string' && typeof l != 'number') ||
              (i = i || []).push(u, '' + l)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (ys.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && Ye('scroll', e),
                  i || s === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
wb = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Da(e, t) {
  if (!nt)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Wt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function WT(e, t, n) {
  var r = t.pendingProps;
  switch ((Vm(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Wt(t), null;
    case 1:
      return sn(t.type) && wu(), Wt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        sa(),
        qe(an),
        qe(Yt),
        qm(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Cl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Wn !== null && (Sp(Wn), (Wn = null)))),
        pp(e, t),
        Wt(t),
        null
      );
    case 5:
      Ym(t);
      var o = Fo($s.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Sb(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(W(166));
          return Wt(t), null;
        }
        if (((e = Fo(ir.current)), Cl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[rr] = t), (r[Rs] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Ye('cancel', r), Ye('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Ye('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < Ya.length; o++) Ye(Ya[o], r);
              break;
            case 'source':
              Ye('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              Ye('error', r), Ye('load', r);
              break;
            case 'details':
              Ye('toggle', r);
              break;
            case 'input':
              _v(r, i), Ye('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Ye('invalid', r);
              break;
            case 'textarea':
              jv(r, i), Ye('invalid', r);
          }
          Bf(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      wl(r.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      wl(r.textContent, s, e),
                    (o = ['children', '' + s]))
                : ys.hasOwnProperty(a) &&
                  s != null &&
                  a === 'onScroll' &&
                  Ye('scroll', r);
            }
          switch (n) {
            case 'input':
              ml(r), Dv(r, i, !0);
              break;
            case 'textarea':
              ml(r), zv(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Su);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Q1(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === 'select' &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[rr] = t),
            (e[Rs] = r),
            bb(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Ff(n, r)), n)) {
              case 'dialog':
                Ye('cancel', e), Ye('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Ye('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < Ya.length; o++) Ye(Ya[o], e);
                o = r;
                break;
              case 'source':
                Ye('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                Ye('error', e), Ye('load', e), (o = r);
                break;
              case 'details':
                Ye('toggle', e), (o = r);
                break;
              case 'input':
                _v(e, r), (o = Lf(e, r)), Ye('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = st({}, r, { value: void 0 })),
                  Ye('invalid', e);
                break;
              case 'textarea':
                jv(e, r), (o = jf(e, r)), Ye('invalid', e);
                break;
              default:
                o = r;
            }
            Bf(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === 'style'
                  ? Z1(e, l)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && Y1(e, l))
                  : i === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && xs(e, l)
                    : typeof l == 'number' && xs(e, '' + l)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (ys.hasOwnProperty(i)
                      ? l != null && i === 'onScroll' && Ye('scroll', e)
                      : l != null && Om(e, i, l, a));
              }
            switch (n) {
              case 'input':
                ml(e), Dv(e, r, !1);
                break;
              case 'textarea':
                ml(e), zv(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + fo(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Yi(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Yi(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = Su);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Wt(t), null;
    case 6:
      if (e && t.stateNode != null) wb(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(W(166));
        if (((n = Fo($s.current)), Fo(ir.current), Cl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[rr] = t),
            (i = r.nodeValue !== n) && ((e = vn), e !== null))
          )
            switch (e.tag) {
              case 3:
                wl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  wl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[rr] = t),
            (t.stateNode = r);
      }
      return Wt(t), null;
    case 13:
      if (
        (qe(ot),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (nt && hn !== null && t.mode & 1 && !(t.flags & 128))
          zx(), ia(), (t.flags |= 98560), (i = !1);
        else if (((i = Cl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(W(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(W(317));
            i[rr] = t;
          } else
            ia(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Wt(t), (i = !1);
        } else Wn !== null && (Sp(Wn), (Wn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ot.current & 1 ? Rt === 0 && (Rt = 3) : uh())),
          t.updateQueue !== null && (t.flags |= 4),
          Wt(t),
          null);
    case 4:
      return (
        sa(), pp(e, t), e === null && Ts(t.stateNode.containerInfo), Wt(t), null
      );
    case 10:
      return Km(t.type._context), Wt(t), null;
    case 17:
      return sn(t.type) && wu(), Wt(t), null;
    case 19:
      if ((qe(ot), (i = t.memoizedState), i === null)) return Wt(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Da(i, !1);
        else {
          if (Rt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Mu(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Da(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Qe(ot, (ot.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            vt() > ua &&
            ((t.flags |= 128), (r = !0), Da(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Mu(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Da(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !a.alternate && !nt)
            )
              return Wt(t), null;
          } else
            2 * vt() - i.renderingStartTime > ua &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Da(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = vt()),
          (t.sibling = null),
          (n = ot.current),
          Qe(ot, r ? (n & 1) | 2 : n & 1),
          t)
        : (Wt(t), null);
    case 22:
    case 23:
      return (
        lh(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? pn & 1073741824 && (Wt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Wt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(W(156, t.tag));
}
function KT(e, t) {
  switch ((Vm(t), t.tag)) {
    case 1:
      return (
        sn(t.type) && wu(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        sa(),
        qe(an),
        qe(Yt),
        qm(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ym(t), null;
    case 13:
      if (
        (qe(ot), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(W(340));
        ia();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return qe(ot), null;
    case 4:
      return sa(), null;
    case 10:
      return Km(t.type._context), null;
    case 22:
    case 23:
      return lh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Tl = !1,
  Gt = !1,
  GT = typeof WeakSet == 'function' ? WeakSet : Set,
  te = null;
function Bi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        ft(e, t, r);
      }
    else n.current = null;
}
function mp(e, t, n) {
  try {
    n();
  } catch (r) {
    ft(e, t, r);
  }
}
var Rg = !1;
function XT(e, t) {
  if (((qf = yu), (e = Tx()), Bm(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (o !== 0 && f.nodeType !== 3) || (s = a + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (l = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (d = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === o && (s = a),
                d === i && ++c === r && (l = a),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = m;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    Zf = { focusedElem: e, selectionRange: n }, yu = !1, te = t;
    te !== null;

  )
    if (((t = te), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (te = e);
    else
      for (; te !== null; ) {
        t = te;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    S = v.memoizedState,
                    y = t.stateNode,
                    h = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Vn(t.type, x),
                      S
                    );
                  y.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = '')
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(W(163));
            }
        } catch (b) {
          ft(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (te = e);
          break;
        }
        te = t.return;
      }
  return (v = Rg), (Rg = !1), v;
}
function as(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && mp(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function xc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function hp(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Cb(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Cb(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[rr], delete t[Rs], delete t[tp], delete t[$T], delete t[IT])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Eb(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Mg(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Eb(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function vp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Su));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (vp(e, t, n), e = e.sibling; e !== null; ) vp(e, t, n), (e = e.sibling);
}
function gp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (gp(e, t, n), e = e.sibling; e !== null; ) gp(e, t, n), (e = e.sibling);
}
var jt = null,
  Hn = !1;
function Br(e, t, n) {
  for (n = n.child; n !== null; ) Pb(e, t, n), (n = n.sibling);
}
function Pb(e, t, n) {
  if (or && typeof or.onCommitFiberUnmount == 'function')
    try {
      or.onCommitFiberUnmount(dc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Gt || Bi(n, t);
    case 6:
      var r = jt,
        o = Hn;
      (jt = null),
        Br(e, t, n),
        (jt = r),
        (Hn = o),
        jt !== null &&
          (Hn
            ? ((e = jt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : jt.removeChild(n.stateNode));
      break;
    case 18:
      jt !== null &&
        (Hn
          ? ((e = jt),
            (n = n.stateNode),
            e.nodeType === 8
              ? _d(e.parentNode, n)
              : e.nodeType === 1 && _d(e, n),
            Cs(e))
          : _d(jt, n.stateNode));
      break;
    case 4:
      (r = jt),
        (o = Hn),
        (jt = n.stateNode.containerInfo),
        (Hn = !0),
        Br(e, t, n),
        (jt = r),
        (Hn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Gt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && mp(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      Br(e, t, n);
      break;
    case 1:
      if (
        !Gt &&
        (Bi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          ft(n, t, s);
        }
      Br(e, t, n);
      break;
    case 21:
      Br(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Gt = (r = Gt) || n.memoizedState !== null), Br(e, t, n), (Gt = r))
        : Br(e, t, n);
      break;
    default:
      Br(e, t, n);
  }
}
function $g(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new GT()),
      t.forEach(function (r) {
        var o = rO.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Bn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (jt = s.stateNode), (Hn = !1);
              break e;
            case 3:
              (jt = s.stateNode.containerInfo), (Hn = !0);
              break e;
            case 4:
              (jt = s.stateNode.containerInfo), (Hn = !0);
              break e;
          }
          s = s.return;
        }
        if (jt === null) throw Error(W(160));
        Pb(i, a, o), (jt = null), (Hn = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        ft(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Tb(t, e), (t = t.sibling);
}
function Tb(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Bn(t, e), er(e), r & 4)) {
        try {
          as(3, e, e.return), xc(3, e);
        } catch (x) {
          ft(e, e.return, x);
        }
        try {
          as(5, e, e.return);
        } catch (x) {
          ft(e, e.return, x);
        }
      }
      break;
    case 1:
      Bn(t, e), er(e), r & 512 && n !== null && Bi(n, n.return);
      break;
    case 5:
      if (
        (Bn(t, e),
        er(e),
        r & 512 && n !== null && Bi(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          xs(o, '');
        } catch (x) {
          ft(e, e.return, x);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && G1(o, i),
              Ff(s, a);
            var u = Ff(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                f = l[a + 1];
              c === 'style'
                ? Z1(o, f)
                : c === 'dangerouslySetInnerHTML'
                ? Y1(o, f)
                : c === 'children'
                ? xs(o, f)
                : Om(o, c, f, u);
            }
            switch (s) {
              case 'input':
                _f(o, i);
                break;
              case 'textarea':
                X1(o, i);
                break;
              case 'select':
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? Yi(o, !!i.multiple, m, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Yi(o, !!i.multiple, i.defaultValue, !0)
                      : Yi(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[Rs] = i;
          } catch (x) {
            ft(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Bn(t, e), er(e), r & 4)) {
        if (e.stateNode === null) throw Error(W(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (x) {
          ft(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Bn(t, e), er(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Cs(t.containerInfo);
        } catch (x) {
          ft(e, e.return, x);
        }
      break;
    case 4:
      Bn(t, e), er(e);
      break;
    case 13:
      Bn(t, e),
        er(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ah = vt())),
        r & 4 && $g(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Gt = (u = Gt) || c), Bn(t, e), (Gt = u)) : Bn(t, e),
        er(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (te = e, c = e.child; c !== null; ) {
            for (f = te = c; te !== null; ) {
              switch (((d = te), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  as(4, d, d.return);
                  break;
                case 1:
                  Bi(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (x) {
                      ft(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Bi(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    kg(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (te = m)) : kg(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = f.stateNode),
                      (l = f.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (s.style.display = q1('display', a)));
              } catch (x) {
                ft(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
              } catch (x) {
                ft(e, e.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Bn(t, e), er(e), r & 4 && $g(e);
      break;
    case 21:
      break;
    default:
      Bn(t, e), er(e);
  }
}
function er(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Eb(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(W(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (xs(o, ''), (r.flags &= -33));
          var i = Mg(e);
          gp(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = Mg(e);
          vp(e, s, a);
          break;
        default:
          throw Error(W(161));
      }
    } catch (l) {
      ft(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function QT(e, t, n) {
  (te = e), Ob(e);
}
function Ob(e, t, n) {
  for (var r = (e.mode & 1) !== 0; te !== null; ) {
    var o = te,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Tl;
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || Gt;
        s = Tl;
        var u = Gt;
        if (((Tl = a), (Gt = l) && !u))
          for (te = o; te !== null; )
            (a = te),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Ag(o)
                : l !== null
                ? ((l.return = a), (te = l))
                : Ag(o);
        for (; i !== null; ) (te = i), Ob(i), (i = i.sibling);
        (te = o), (Tl = s), (Gt = u);
      }
      Ig(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (te = i)) : Ig(e);
  }
}
function Ig(e) {
  for (; te !== null; ) {
    var t = te;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Gt || xc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Gt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Vn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && mg(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                mg(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Cs(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(W(163));
          }
        Gt || (t.flags & 512 && hp(t));
      } catch (d) {
        ft(t, t.return, d);
      }
    }
    if (t === e) {
      te = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (te = n);
      break;
    }
    te = t.return;
  }
}
function kg(e) {
  for (; te !== null; ) {
    var t = te;
    if (t === e) {
      te = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (te = n);
      break;
    }
    te = t.return;
  }
}
function Ag(e) {
  for (; te !== null; ) {
    var t = te;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            xc(4, t);
          } catch (l) {
            ft(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ft(t, o, l);
            }
          }
          var i = t.return;
          try {
            hp(t);
          } catch (l) {
            ft(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            hp(t);
          } catch (l) {
            ft(t, a, l);
          }
      }
    } catch (l) {
      ft(t, t.return, l);
    }
    if (t === e) {
      te = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (te = s);
      break;
    }
    te = t.return;
  }
}
var YT = Math.ceil,
  ku = Nr.ReactCurrentDispatcher,
  oh = Nr.ReactCurrentOwner,
  Rn = Nr.ReactCurrentBatchConfig,
  _e = 0,
  _t = null,
  St = null,
  Bt = 0,
  pn = 0,
  Fi = yo(0),
  Rt = 0,
  Ns = null,
  ei = 0,
  bc = 0,
  ih = 0,
  ss = null,
  rn = null,
  ah = 0,
  ua = 1 / 0,
  yr = null,
  Au = !1,
  yp = null,
  oo = null,
  Ol = !1,
  Qr = null,
  Nu = 0,
  ls = 0,
  xp = null,
  Jl = -1,
  eu = 0;
function en() {
  return _e & 6 ? vt() : Jl !== -1 ? Jl : (Jl = vt());
}
function io(e) {
  return e.mode & 1
    ? _e & 2 && Bt !== 0
      ? Bt & -Bt
      : AT.transition !== null
      ? (eu === 0 && (eu = cx()), eu)
      : ((e = We),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : gx(e.type))),
        e)
    : 1;
}
function Gn(e, t, n, r) {
  if (50 < ls) throw ((ls = 0), (xp = null), Error(W(185)));
  Gs(e, n, r),
    (!(_e & 2) || e !== _t) &&
      (e === _t && (!(_e & 2) && (bc |= n), Rt === 4 && Gr(e, Bt)),
      ln(e, r),
      n === 1 && _e === 0 && !(t.mode & 1) && ((ua = vt() + 500), vc && xo()));
}
function ln(e, t) {
  var n = e.callbackNode;
  A2(e, t);
  var r = gu(e, e === _t ? Bt : 0);
  if (r === 0)
    n !== null && Vv(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Vv(n), t === 1))
      e.tag === 0 ? kT(Ng.bind(null, e)) : _x(Ng.bind(null, e)),
        RT(function () {
          !(_e & 6) && xo();
        }),
        (n = null);
    else {
      switch (dx(r)) {
        case 1:
          n = km;
          break;
        case 4:
          n = lx;
          break;
        case 16:
          n = vu;
          break;
        case 536870912:
          n = ux;
          break;
        default:
          n = vu;
      }
      n = Lb(n, Rb.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Rb(e, t) {
  if (((Jl = -1), (eu = 0), _e & 6)) throw Error(W(327));
  var n = e.callbackNode;
  if (ta() && e.callbackNode !== n) return null;
  var r = gu(e, e === _t ? Bt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Lu(e, r);
  else {
    t = r;
    var o = _e;
    _e |= 2;
    var i = $b();
    (_t !== e || Bt !== t) && ((yr = null), (ua = vt() + 500), Uo(e, t));
    do
      try {
        JT();
        break;
      } catch (s) {
        Mb(e, s);
      }
    while (1);
    Wm(),
      (ku.current = i),
      (_e = o),
      St !== null ? (t = 0) : ((_t = null), (Bt = 0), (t = Rt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Kf(e)), o !== 0 && ((r = o), (t = bp(e, o)))), t === 1)
    )
      throw ((n = Ns), Uo(e, 0), Gr(e, r), ln(e, vt()), n);
    if (t === 6) Gr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !qT(o) &&
          ((t = Lu(e, r)),
          t === 2 && ((i = Kf(e)), i !== 0 && ((r = i), (t = bp(e, i)))),
          t === 1))
      )
        throw ((n = Ns), Uo(e, 0), Gr(e, r), ln(e, vt()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(W(345));
        case 2:
          Io(e, rn, yr);
          break;
        case 3:
          if (
            (Gr(e, r), (r & 130023424) === r && ((t = ah + 500 - vt()), 10 < t))
          ) {
            if (gu(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              en(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ep(Io.bind(null, e, rn, yr), t);
            break;
          }
          Io(e, rn, yr);
          break;
        case 4:
          if ((Gr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Kn(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = vt() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * YT(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ep(Io.bind(null, e, rn, yr), r);
            break;
          }
          Io(e, rn, yr);
          break;
        case 5:
          Io(e, rn, yr);
          break;
        default:
          throw Error(W(329));
      }
    }
  }
  return ln(e, vt()), e.callbackNode === n ? Rb.bind(null, e) : null;
}
function bp(e, t) {
  var n = ss;
  return (
    e.current.memoizedState.isDehydrated && (Uo(e, t).flags |= 256),
    (e = Lu(e, t)),
    e !== 2 && ((t = rn), (rn = n), t !== null && Sp(t)),
    e
  );
}
function Sp(e) {
  rn === null ? (rn = e) : rn.push.apply(rn, e);
}
function qT(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Qn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Gr(e, t) {
  for (
    t &= ~ih,
      t &= ~bc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Kn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ng(e) {
  if (_e & 6) throw Error(W(327));
  ta();
  var t = gu(e, 0);
  if (!(t & 1)) return ln(e, vt()), null;
  var n = Lu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Kf(e);
    r !== 0 && ((t = r), (n = bp(e, r)));
  }
  if (n === 1) throw ((n = Ns), Uo(e, 0), Gr(e, t), ln(e, vt()), n);
  if (n === 6) throw Error(W(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Io(e, rn, yr),
    ln(e, vt()),
    null
  );
}
function sh(e, t) {
  var n = _e;
  _e |= 1;
  try {
    return e(t);
  } finally {
    (_e = n), _e === 0 && ((ua = vt() + 500), vc && xo());
  }
}
function ti(e) {
  Qr !== null && Qr.tag === 0 && !(_e & 6) && ta();
  var t = _e;
  _e |= 1;
  var n = Rn.transition,
    r = We;
  try {
    if (((Rn.transition = null), (We = 1), e)) return e();
  } finally {
    (We = r), (Rn.transition = n), (_e = t), !(_e & 6) && xo();
  }
}
function lh() {
  (pn = Fi.current), qe(Fi);
}
function Uo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), OT(n)), St !== null))
    for (n = St.return; n !== null; ) {
      var r = n;
      switch ((Vm(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && wu();
          break;
        case 3:
          sa(), qe(an), qe(Yt), qm();
          break;
        case 5:
          Ym(r);
          break;
        case 4:
          sa();
          break;
        case 13:
          qe(ot);
          break;
        case 19:
          qe(ot);
          break;
        case 10:
          Km(r.type._context);
          break;
        case 22:
        case 23:
          lh();
      }
      n = n.return;
    }
  if (
    ((_t = e),
    (St = e = ao(e.current, null)),
    (Bt = pn = t),
    (Rt = 0),
    (Ns = null),
    (ih = bc = ei = 0),
    (rn = ss = null),
    Bo !== null)
  ) {
    for (t = 0; t < Bo.length; t++)
      if (((n = Bo[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    Bo = null;
  }
  return e;
}
function Mb(e, t) {
  do {
    var n = St;
    try {
      if ((Wm(), (Yl.current = Iu), $u)) {
        for (var r = at.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        $u = !1;
      }
      if (
        ((Jo = 0),
        (Lt = Ot = at = null),
        (is = !1),
        (Is = 0),
        (oh.current = null),
        n === null || n.return === null)
      ) {
        (Rt = 1), (Ns = t), (St = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          s = n,
          l = t;
        if (
          ((t = Bt),
          (s.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = s,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = Sg(a);
          if (m !== null) {
            (m.flags &= -257),
              wg(m, a, s, i, t),
              m.mode & 1 && bg(i, u, t),
              (t = m),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              bg(i, u, t), uh();
              break e;
            }
            l = Error(W(426));
          }
        } else if (nt && s.mode & 1) {
          var S = Sg(a);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              wg(S, a, s, i, t),
              Hm(la(l, s));
            break e;
          }
        }
        (i = l = la(l, s)),
          Rt !== 4 && (Rt = 2),
          ss === null ? (ss = [i]) : ss.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var y = fb(i, l, t);
              pg(i, y);
              break e;
            case 1:
              s = l;
              var h = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (g !== null &&
                    typeof g.componentDidCatch == 'function' &&
                    (oo === null || !oo.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var b = pb(i, s, t);
                pg(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      kb(n);
    } catch (C) {
      (t = C), St === n && n !== null && (St = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function $b() {
  var e = ku.current;
  return (ku.current = Iu), e === null ? Iu : e;
}
function uh() {
  (Rt === 0 || Rt === 3 || Rt === 2) && (Rt = 4),
    _t === null || (!(ei & 268435455) && !(bc & 268435455)) || Gr(_t, Bt);
}
function Lu(e, t) {
  var n = _e;
  _e |= 2;
  var r = $b();
  (_t !== e || Bt !== t) && ((yr = null), Uo(e, t));
  do
    try {
      ZT();
      break;
    } catch (o) {
      Mb(e, o);
    }
  while (1);
  if ((Wm(), (_e = n), (ku.current = r), St !== null)) throw Error(W(261));
  return (_t = null), (Bt = 0), Rt;
}
function ZT() {
  for (; St !== null; ) Ib(St);
}
function JT() {
  for (; St !== null && !E2(); ) Ib(St);
}
function Ib(e) {
  var t = Nb(e.alternate, e, pn);
  (e.memoizedProps = e.pendingProps),
    t === null ? kb(e) : (St = t),
    (oh.current = null);
}
function kb(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = KT(n, t)), n !== null)) {
        (n.flags &= 32767), (St = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Rt = 6), (St = null);
        return;
      }
    } else if (((n = WT(n, t, pn)), n !== null)) {
      St = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      St = t;
      return;
    }
    St = t = e;
  } while (t !== null);
  Rt === 0 && (Rt = 5);
}
function Io(e, t, n) {
  var r = We,
    o = Rn.transition;
  try {
    (Rn.transition = null), (We = 1), eO(e, t, n, r);
  } finally {
    (Rn.transition = o), (We = r);
  }
  return null;
}
function eO(e, t, n, r) {
  do ta();
  while (Qr !== null);
  if (_e & 6) throw Error(W(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(W(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (N2(e, i),
    e === _t && ((St = _t = null), (Bt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ol ||
      ((Ol = !0),
      Lb(vu, function () {
        return ta(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Rn.transition), (Rn.transition = null);
    var a = We;
    We = 1;
    var s = _e;
    (_e |= 4),
      (oh.current = null),
      XT(e, n),
      Tb(n, e),
      bT(Zf),
      (yu = !!qf),
      (Zf = qf = null),
      (e.current = n),
      QT(n),
      P2(),
      (_e = s),
      (We = a),
      (Rn.transition = i);
  } else e.current = n;
  if (
    (Ol && ((Ol = !1), (Qr = e), (Nu = o)),
    (i = e.pendingLanes),
    i === 0 && (oo = null),
    R2(n.stateNode),
    ln(e, vt()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Au) throw ((Au = !1), (e = yp), (yp = null), e);
  return (
    Nu & 1 && e.tag !== 0 && ta(),
    (i = e.pendingLanes),
    i & 1 ? (e === xp ? ls++ : ((ls = 0), (xp = e))) : (ls = 0),
    xo(),
    null
  );
}
function ta() {
  if (Qr !== null) {
    var e = dx(Nu),
      t = Rn.transition,
      n = We;
    try {
      if (((Rn.transition = null), (We = 16 > e ? 16 : e), Qr === null))
        var r = !1;
      else {
        if (((e = Qr), (Qr = null), (Nu = 0), _e & 6)) throw Error(W(331));
        var o = _e;
        for (_e |= 4, te = e.current; te !== null; ) {
          var i = te,
            a = i.child;
          if (te.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (te = u; te !== null; ) {
                  var c = te;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      as(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (te = f);
                  else
                    for (; te !== null; ) {
                      c = te;
                      var d = c.sibling,
                        m = c.return;
                      if ((Cb(c), c === u)) {
                        te = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (te = d);
                        break;
                      }
                      te = m;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var S = x.sibling;
                    (x.sibling = null), (x = S);
                  } while (x !== null);
                }
              }
              te = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (te = a);
          else
            e: for (; te !== null; ) {
              if (((i = te), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    as(9, i, i.return);
                }
              var y = i.sibling;
              if (y !== null) {
                (y.return = i.return), (te = y);
                break e;
              }
              te = i.return;
            }
        }
        var h = e.current;
        for (te = h; te !== null; ) {
          a = te;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null) (g.return = a), (te = g);
          else
            e: for (a = h; te !== null; ) {
              if (((s = te), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xc(9, s);
                  }
                } catch (C) {
                  ft(s, s.return, C);
                }
              if (s === a) {
                te = null;
                break e;
              }
              var b = s.sibling;
              if (b !== null) {
                (b.return = s.return), (te = b);
                break e;
              }
              te = s.return;
            }
        }
        if (
          ((_e = o), xo(), or && typeof or.onPostCommitFiberRoot == 'function')
        )
          try {
            or.onPostCommitFiberRoot(dc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (We = n), (Rn.transition = t);
    }
  }
  return !1;
}
function Lg(e, t, n) {
  (t = la(n, t)),
    (t = fb(e, t, 1)),
    (e = ro(e, t, 1)),
    (t = en()),
    e !== null && (Gs(e, 1, t), ln(e, t));
}
function ft(e, t, n) {
  if (e.tag === 3) Lg(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Lg(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (oo === null || !oo.has(r)))
        ) {
          (e = la(n, e)),
            (e = pb(t, e, 1)),
            (t = ro(t, e, 1)),
            (e = en()),
            t !== null && (Gs(t, 1, e), ln(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function tO(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = en()),
    (e.pingedLanes |= e.suspendedLanes & n),
    _t === e &&
      (Bt & n) === n &&
      (Rt === 4 || (Rt === 3 && (Bt & 130023424) === Bt && 500 > vt() - ah)
        ? Uo(e, 0)
        : (ih |= n)),
    ln(e, t);
}
function Ab(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = gl), (gl <<= 1), !(gl & 130023424) && (gl = 4194304))
      : (t = 1));
  var n = en();
  (e = $r(e, t)), e !== null && (Gs(e, t, n), ln(e, n));
}
function nO(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ab(e, n);
}
function rO(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(W(314));
  }
  r !== null && r.delete(t), Ab(e, n);
}
var Nb;
Nb = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || an.current) on = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (on = !1), UT(e, t, n);
      on = !!(e.flags & 131072);
    }
  else (on = !1), nt && t.flags & 1048576 && Dx(t, Pu, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Zl(e, t), (e = t.pendingProps);
      var o = oa(t, Yt.current);
      ea(t, n), (o = Jm(null, t, r, e, o, n));
      var i = eh();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            sn(r) ? ((i = !0), Cu(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Xm(t),
            (o.updater = gc),
            (t.stateNode = o),
            (o._reactInternals = t),
            sp(t, r, e, n),
            (t = cp(null, t, r, !0, i, n)))
          : ((t.tag = 0), nt && i && Fm(t), Zt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Zl(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = iO(r)),
          (e = Vn(r, e)),
          o)
        ) {
          case 0:
            t = up(null, t, r, e, n);
            break e;
          case 1:
            t = Pg(null, t, r, e, n);
            break e;
          case 11:
            t = Cg(null, t, r, e, n);
            break e;
          case 14:
            t = Eg(null, t, r, Vn(r.type, e), n);
            break e;
        }
        throw Error(W(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Vn(r, o)),
        up(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Vn(r, o)),
        Pg(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((gb(t), e === null)) throw Error(W(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Fx(e, t),
          Ru(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = la(Error(W(423)), t)), (t = Tg(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = la(Error(W(424)), t)), (t = Tg(e, t, r, n, o));
            break e;
          } else
            for (
              hn = no(t.stateNode.containerInfo.firstChild),
                vn = t,
                nt = !0,
                Wn = null,
                n = Wx(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ia(), r === o)) {
            t = Ir(e, t, n);
            break e;
          }
          Zt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Kx(t),
        e === null && op(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Jf(r, o) ? (a = null) : i !== null && Jf(r, i) && (t.flags |= 32),
        vb(e, t),
        Zt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && op(t), null;
    case 13:
      return yb(e, t, n);
    case 4:
      return (
        Qm(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = aa(t, null, r, n)) : Zt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Vn(r, o)),
        Cg(e, t, r, o, n)
      );
    case 7:
      return Zt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Zt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Zt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          Qe(Tu, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (Qn(i.value, a)) {
            if (i.children === o.children && !an.current) {
              t = Ir(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Er(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      ip(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(W(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  ip(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        Zt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        ea(t, n),
        (o = Mn(o)),
        (r = r(o)),
        (t.flags |= 1),
        Zt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Vn(r, t.pendingProps)),
        (o = Vn(r.type, o)),
        Eg(e, t, r, o, n)
      );
    case 15:
      return mb(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Vn(r, o)),
        Zl(e, t),
        (t.tag = 1),
        sn(r) ? ((e = !0), Cu(t)) : (e = !1),
        ea(t, n),
        Hx(t, r, o),
        sp(t, r, o, n),
        cp(null, t, r, !0, e, n)
      );
    case 19:
      return xb(e, t, n);
    case 22:
      return hb(e, t, n);
  }
  throw Error(W(156, t.tag));
};
function Lb(e, t) {
  return sx(e, t);
}
function oO(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function On(e, t, n, r) {
  return new oO(e, t, n, r);
}
function ch(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function iO(e) {
  if (typeof e == 'function') return ch(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Mm)) return 11;
    if (e === $m) return 14;
  }
  return 2;
}
function ao(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = On(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function tu(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == 'function')) ch(e) && (a = 1);
  else if (typeof e == 'string') a = 5;
  else
    e: switch (e) {
      case Ii:
        return Wo(n.children, o, i, t);
      case Rm:
        (a = 8), (o |= 8);
        break;
      case If:
        return (
          (e = On(12, n, t, o | 2)), (e.elementType = If), (e.lanes = i), e
        );
      case kf:
        return (e = On(13, n, t, o)), (e.elementType = kf), (e.lanes = i), e;
      case Af:
        return (e = On(19, n, t, o)), (e.elementType = Af), (e.lanes = i), e;
      case U1:
        return Sc(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case V1:
              a = 10;
              break e;
            case H1:
              a = 9;
              break e;
            case Mm:
              a = 11;
              break e;
            case $m:
              a = 14;
              break e;
            case Hr:
              (a = 16), (r = null);
              break e;
          }
        throw Error(W(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = On(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Wo(e, t, n, r) {
  return (e = On(7, e, r, t)), (e.lanes = n), e;
}
function Sc(e, t, n, r) {
  return (
    (e = On(22, e, r, t)),
    (e.elementType = U1),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ud(e, t, n) {
  return (e = On(6, e, null, t)), (e.lanes = n), e;
}
function Wd(e, t, n) {
  return (
    (t = On(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function aO(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Pd(0)),
    (this.expirationTimes = Pd(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Pd(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function dh(e, t, n, r, o, i, a, s, l) {
  return (
    (e = new aO(e, t, n, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = On(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Xm(i),
    e
  );
}
function sO(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $i,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function _b(e) {
  if (!e) return po;
  e = e._reactInternals;
  e: {
    if (ai(e) !== e || e.tag !== 1) throw Error(W(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (sn(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(W(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (sn(n)) return Lx(e, n, t);
  }
  return t;
}
function Db(e, t, n, r, o, i, a, s, l) {
  return (
    (e = dh(n, r, !0, e, o, i, a, s, l)),
    (e.context = _b(null)),
    (n = e.current),
    (r = en()),
    (o = io(n)),
    (i = Er(r, o)),
    (i.callback = t ?? null),
    ro(n, i, o),
    (e.current.lanes = o),
    Gs(e, o, r),
    ln(e, r),
    e
  );
}
function wc(e, t, n, r) {
  var o = t.current,
    i = en(),
    a = io(o);
  return (
    (n = _b(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Er(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ro(o, t, a)),
    e !== null && (Gn(e, o, a, i), Ql(e, o, a)),
    a
  );
}
function _u(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _g(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fh(e, t) {
  _g(e, t), (e = e.alternate) && _g(e, t);
}
function lO() {
  return null;
}
var jb =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function ph(e) {
  this._internalRoot = e;
}
Cc.prototype.render = ph.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(W(409));
  wc(e, t, null, null);
};
Cc.prototype.unmount = ph.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ti(function () {
      wc(null, e, null, null);
    }),
      (t[Mr] = null);
  }
};
function Cc(e) {
  this._internalRoot = e;
}
Cc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = mx();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kr.length && t !== 0 && t < Kr[n].priority; n++);
    Kr.splice(n, 0, e), n === 0 && vx(e);
  }
};
function mh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ec(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Dg() {}
function uO(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = _u(a);
        i.call(u);
      };
    }
    var a = Db(t, r, e, 0, null, !1, !1, '', Dg);
    return (
      (e._reactRootContainer = a),
      (e[Mr] = a.current),
      Ts(e.nodeType === 8 ? e.parentNode : e),
      ti(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var u = _u(l);
      s.call(u);
    };
  }
  var l = dh(e, 0, !1, null, null, !1, !1, '', Dg);
  return (
    (e._reactRootContainer = l),
    (e[Mr] = l.current),
    Ts(e.nodeType === 8 ? e.parentNode : e),
    ti(function () {
      wc(t, l, n, r);
    }),
    l
  );
}
function Pc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == 'function') {
      var s = o;
      o = function () {
        var l = _u(a);
        s.call(l);
      };
    }
    wc(t, a, e, o);
  } else a = uO(n, t, e, o, r);
  return _u(a);
}
fx = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qa(t.pendingLanes);
        n !== 0 &&
          (Am(t, n | 1), ln(t, vt()), !(_e & 6) && ((ua = vt() + 500), xo()));
      }
      break;
    case 13:
      ti(function () {
        var r = $r(e, 1);
        if (r !== null) {
          var o = en();
          Gn(r, e, 1, o);
        }
      }),
        fh(e, 1);
  }
};
Nm = function (e) {
  if (e.tag === 13) {
    var t = $r(e, 134217728);
    if (t !== null) {
      var n = en();
      Gn(t, e, 134217728, n);
    }
    fh(e, 134217728);
  }
};
px = function (e) {
  if (e.tag === 13) {
    var t = io(e),
      n = $r(e, t);
    if (n !== null) {
      var r = en();
      Gn(n, e, t, r);
    }
    fh(e, t);
  }
};
mx = function () {
  return We;
};
hx = function (e, t) {
  var n = We;
  try {
    return (We = e), t();
  } finally {
    We = n;
  }
};
Hf = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((_f(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = hc(r);
            if (!o) throw Error(W(90));
            K1(r), _f(r, o);
          }
        }
      }
      break;
    case 'textarea':
      X1(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Yi(e, !!n.multiple, t, !1);
  }
};
tx = sh;
nx = ti;
var cO = { usingClientEntryPoint: !1, Events: [Qs, Li, hc, J1, ex, sh] },
  ja = {
    findFiberByHostInstance: zo,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  dO = {
    bundleType: ja.bundleType,
    version: ja.version,
    rendererPackageName: ja.rendererPackageName,
    rendererConfig: ja.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ix(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ja.findFiberByHostInstance || lO,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Rl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rl.isDisabled && Rl.supportsFiber)
    try {
      (dc = Rl.inject(dO)), (or = Rl);
    } catch {}
}
xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cO;
xn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!mh(t)) throw Error(W(200));
  return sO(e, t, null, n);
};
xn.createRoot = function (e, t) {
  if (!mh(e)) throw Error(W(299));
  var n = !1,
    r = '',
    o = jb;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = dh(e, 1, !1, null, null, n, !1, r, o)),
    (e[Mr] = t.current),
    Ts(e.nodeType === 8 ? e.parentNode : e),
    new ph(t)
  );
};
xn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(W(188))
      : ((e = Object.keys(e).join(',')), Error(W(268, e)));
  return (e = ix(t)), (e = e === null ? null : e.stateNode), e;
};
xn.flushSync = function (e) {
  return ti(e);
};
xn.hydrate = function (e, t, n) {
  if (!Ec(t)) throw Error(W(200));
  return Pc(null, e, t, !0, n);
};
xn.hydrateRoot = function (e, t, n) {
  if (!mh(e)) throw Error(W(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    a = jb;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Db(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[Mr] = t.current),
    Ts(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Cc(t);
};
xn.render = function (e, t, n) {
  if (!Ec(t)) throw Error(W(200));
  return Pc(null, e, t, !1, n);
};
xn.unmountComponentAtNode = function (e) {
  if (!Ec(e)) throw Error(W(40));
  return e._reactRootContainer
    ? (ti(function () {
        Pc(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Mr] = null);
        });
      }),
      !0)
    : !1;
};
xn.unstable_batchedUpdates = sh;
xn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ec(n)) throw Error(W(200));
  if (e == null || e._reactInternals === void 0) throw Error(W(38));
  return Pc(e, t, n, !1, r);
};
xn.version = '18.2.0-next-9e3b772b8-20220608';
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = xn);
})(oi);
const zb = p1(oi.exports),
  fO = f1({ __proto__: null, default: zb }, [oi.exports]);
var jg = oi.exports;
(Mf.createRoot = jg.createRoot), (Mf.hydrateRoot = jg.hydrateRoot);
const Bb = p.exports.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: 'never',
  }),
  Tc = p.exports.createContext({}),
  hh = p.exports.createContext(null),
  Oc = typeof document < 'u',
  pO = Oc ? p.exports.useLayoutEffect : p.exports.useEffect,
  Fb = p.exports.createContext({ strict: !1 });
function mO(e, t, n, r) {
  const { visualElement: o } = p.exports.useContext(Tc),
    i = p.exports.useContext(Fb),
    a = p.exports.useContext(hh),
    s = p.exports.useContext(Bb).reducedMotion,
    l = p.exports.useRef();
  (r = r || i.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s,
      }));
  const u = l.current;
  p.exports.useInsertionEffect(() => {
    u && u.update(n, a);
  });
  const c = p.exports.useRef(Boolean(window.HandoffAppearAnimations));
  return (
    pO(() => {
      !u ||
        (u.render(),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    p.exports.useEffect(() => {
      !u ||
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        (window.HandoffAppearAnimations = void 0),
        (c.current = !1));
    }),
    u
  );
}
function Vi(e) {
  return (
    typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current')
  );
}
function hO(e, t, n) {
  return p.exports.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == 'function' ? n(r) : Vi(n) && (n.current = r));
    },
    [t]
  );
}
function Ls(e) {
  return typeof e == 'string' || Array.isArray(e);
}
function Rc(e) {
  return typeof e == 'object' && typeof e.start == 'function';
}
const vh = [
    'animate',
    'whileInView',
    'whileFocus',
    'whileHover',
    'whileTap',
    'whileDrag',
    'exit',
  ],
  gh = ['initial', ...vh];
function Mc(e) {
  return Rc(e.animate) || gh.some((t) => Ls(e[t]));
}
function Vb(e) {
  return Boolean(Mc(e) || e.variants);
}
function vO(e, t) {
  if (Mc(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ls(n) ? n : void 0,
      animate: Ls(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function gO(e) {
  const { initial: t, animate: n } = vO(e, p.exports.useContext(Tc));
  return p.exports.useMemo(() => ({ initial: t, animate: n }), [zg(t), zg(n)]);
}
function zg(e) {
  return Array.isArray(e) ? e.join(' ') : e;
}
const Bg = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  _s = {};
for (const e in Bg) _s[e] = { isEnabled: (t) => Bg[e].some((n) => !!t[n]) };
function yO(e) {
  for (const t in e) _s[t] = { ..._s[t], ...e[t] };
}
const Hb = p.exports.createContext({}),
  Ub = p.exports.createContext({}),
  xO = Symbol.for('motionComponentSymbol');
function bO({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && yO(e);
  function i(s, l) {
    let u;
    const c = { ...p.exports.useContext(Bb), ...s, layoutId: SO(s) },
      { isStatic: f } = c,
      d = gO(s),
      m = r(s, f);
    if (!f && Oc) {
      d.visualElement = mO(o, m, c, t);
      const v = p.exports.useContext(Ub),
        x = p.exports.useContext(Fb).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, x, e, v));
    }
    return p.exports.createElement(
      Tc.Provider,
      { value: d },
      u && d.visualElement
        ? p.exports.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(o, s, hO(m, d.visualElement, l), m, f, d.visualElement)
    );
  }
  const a = p.exports.forwardRef(i);
  return (a[xO] = o), a;
}
function SO({ layoutId: e }) {
  const t = p.exports.useContext(Hb).id;
  return t && e !== void 0 ? t + '-' + e : e;
}
function wO(e) {
  function t(r, o = {}) {
    return bO(e(r, o));
  }
  if (typeof Proxy > 'u') return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o)),
  });
}
const CO = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
];
function yh(e) {
  return typeof e != 'string' || e.includes('-')
    ? !1
    : !!(CO.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Du = {};
function EO(e) {
  Object.assign(Du, e);
}
const qs = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  si = new Set(qs);
function Wb(e, { layout: t, layoutId: n }) {
  return (
    si.has(e) ||
    e.startsWith('origin') ||
    ((t || n !== void 0) && (!!Du[e] || e === 'opacity'))
  );
}
const un = (e) => Boolean(e && e.getVelocity),
  PO = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  },
  TO = qs.length;
function OO(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  o
) {
  let i = '';
  for (let a = 0; a < TO; a++) {
    const s = qs[a];
    if (e[s] !== void 0) {
      const l = PO[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return (
    t && !e.z && (i += 'translateZ(0)'),
    (i = i.trim()),
    o ? (i = o(e, r ? '' : i)) : n && r && (i = 'none'),
    i
  );
}
const Kb = (e) => (t) => typeof t == 'string' && t.startsWith(e),
  Gb = Kb('--'),
  wp = Kb('var(--'),
  RO =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  MO = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  mo = (e, t, n) => Math.min(Math.max(n, e), t),
  li = {
    test: (e) => typeof e == 'number',
    parse: parseFloat,
    transform: (e) => e,
  },
  us = { ...li, transform: (e) => mo(0, 1, e) },
  Ml = { ...li, default: 1 },
  cs = (e) => Math.round(e * 1e5) / 1e5,
  $c = /(-)?([\d]*\.?[\d])+/g,
  Xb =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  $O =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Zs(e) {
  return typeof e == 'string';
}
const Js = (e) => ({
    test: (t) => Zs(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Vr = Js('deg'),
  ar = Js('%'),
  ve = Js('px'),
  IO = Js('vh'),
  kO = Js('vw'),
  Fg = {
    ...ar,
    parse: (e) => ar.parse(e) / 100,
    transform: (e) => ar.transform(e * 100),
  },
  Vg = { ...li, transform: Math.round },
  Qb = {
    borderWidth: ve,
    borderTopWidth: ve,
    borderRightWidth: ve,
    borderBottomWidth: ve,
    borderLeftWidth: ve,
    borderRadius: ve,
    radius: ve,
    borderTopLeftRadius: ve,
    borderTopRightRadius: ve,
    borderBottomRightRadius: ve,
    borderBottomLeftRadius: ve,
    width: ve,
    maxWidth: ve,
    height: ve,
    maxHeight: ve,
    size: ve,
    top: ve,
    right: ve,
    bottom: ve,
    left: ve,
    padding: ve,
    paddingTop: ve,
    paddingRight: ve,
    paddingBottom: ve,
    paddingLeft: ve,
    margin: ve,
    marginTop: ve,
    marginRight: ve,
    marginBottom: ve,
    marginLeft: ve,
    rotate: Vr,
    rotateX: Vr,
    rotateY: Vr,
    rotateZ: Vr,
    scale: Ml,
    scaleX: Ml,
    scaleY: Ml,
    scaleZ: Ml,
    skew: Vr,
    skewX: Vr,
    skewY: Vr,
    distance: ve,
    translateX: ve,
    translateY: ve,
    translateZ: ve,
    x: ve,
    y: ve,
    z: ve,
    perspective: ve,
    transformPerspective: ve,
    opacity: us,
    originX: Fg,
    originY: Fg,
    originZ: ve,
    zIndex: Vg,
    fillOpacity: us,
    strokeOpacity: us,
    numOctaves: Vg,
  };
function xh(e, t, n, r) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (Gb(f)) {
      i[f] = d;
      continue;
    }
    const m = Qb[f],
      v = MO(d, m);
    if (si.has(f)) {
      if (((l = !0), (a[f] = v), !c)) continue;
      d !== (m.default || 0) && (c = !1);
    } else f.startsWith('origin') ? ((u = !0), (s[f] = v)) : (o[f] = v);
  }
  if (
    (t.transform ||
      (l || r
        ? (o.transform = OO(e.transform, n, c, r))
        : o.transform && (o.transform = 'none')),
    u)
  ) {
    const { originX: f = '50%', originY: d = '50%', originZ: m = 0 } = s;
    o.transformOrigin = `${f} ${d} ${m}`;
  }
}
const bh = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Yb(e, t, n) {
  for (const r in t) !un(t[r]) && !Wb(r, n) && (e[r] = t[r]);
}
function AO({ transformTemplate: e }, t, n) {
  return p.exports.useMemo(() => {
    const r = bh();
    return (
      xh(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function NO(e, t, n) {
  const r = e.style || {},
    o = {};
  return (
    Yb(o, r, e),
    Object.assign(o, AO(e, t, n)),
    e.transformValues ? e.transformValues(o) : o
  );
}
function LO(e, t, n) {
  const r = {},
    o = NO(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
      (o.touchAction =
        e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = o),
    r
  );
}
const _O = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'transformValues',
  'custom',
  'inherit',
  'onLayoutAnimationStart',
  'onLayoutAnimationComplete',
  'onLayoutMeasure',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'ignoreStrict',
  'viewport',
]);
function ju(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    _O.has(e)
  );
}
let qb = (e) => !ju(e);
function DO(e) {
  !e || (qb = (t) => (t.startsWith('on') ? !ju(t) : e(t)));
}
try {
  DO(require('@emotion/is-prop-valid').default);
} catch {}
function jO(e, t, n) {
  const r = {};
  for (const o in e)
    (o === 'values' && typeof e.values == 'object') ||
      ((qb(o) ||
        (n === !0 && ju(o)) ||
        (!t && !ju(o)) ||
        (e.draggable && o.startsWith('onDrag'))) &&
        (r[o] = e[o]));
  return r;
}
function Hg(e, t, n) {
  return typeof e == 'string' ? e : ve.transform(t + n * e);
}
function zO(e, t, n) {
  const r = Hg(t, e.x, e.width),
    o = Hg(n, e.y, e.height);
  return `${r} ${o}`;
}
const BO = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  FO = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function VO(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? BO : FO;
  e[i.offset] = ve.transform(-r);
  const a = ve.transform(t),
    s = ve.transform(n);
  e[i.array] = `${a} ${s}`;
}
function Sh(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: a,
    pathSpacing: s = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  f,
  d
) {
  if ((xh(e, u, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: m, style: v, dimensions: x } = e;
  m.transform && (x && (v.transform = m.transform), delete m.transform),
    x &&
      (o !== void 0 || i !== void 0 || v.transform) &&
      (v.transformOrigin = zO(
        x,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    a !== void 0 && VO(m, a, s, l, !1);
}
const Zb = () => ({ ...bh(), attrs: {} }),
  wh = (e) => typeof e == 'string' && e.toLowerCase() === 'svg';
function HO(e, t, n, r) {
  const o = p.exports.useMemo(() => {
    const i = Zb();
    return (
      Sh(i, t, { enableHardwareAcceleration: !1 }, wh(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    Yb(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function UO(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (yh(n) ? HO : LO)(r, i, a, n),
      c = { ...jO(r, typeof n == 'string', e), ...l, ref: o },
      { children: f } = r,
      d = p.exports.useMemo(() => (un(f) ? f.get() : f), [f]);
    return p.exports.createElement(n, { ...c, children: d });
  };
}
const Ch = (e) => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
function Jb(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const eS = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
]);
function tS(e, t, n, r) {
  Jb(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(eS.has(o) ? o : Ch(o), t.attrs[o]);
}
function Eh(e, t) {
  const { style: n } = e,
    r = {};
  for (const o in n)
    (un(n[o]) || (t.style && un(t.style[o])) || Wb(o, e)) && (r[o] = n[o]);
  return r;
}
function nS(e, t) {
  const n = Eh(e, t);
  for (const r in e)
    if (un(e[r]) || un(t[r])) {
      const o =
        qs.indexOf(r) !== -1
          ? 'attr' + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[o] = e[r];
    }
  return n;
}
function Ph(e, t, n, r = {}, o = {}) {
  return (
    typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, r, o)),
    typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, r, o)),
    t
  );
}
function WO(e) {
  const t = p.exports.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const zu = (e) => Array.isArray(e),
  KO = (e) => Boolean(e && typeof e == 'object' && e.mix && e.toValue),
  GO = (e) => (zu(e) ? e[e.length - 1] || 0 : e);
function nu(e) {
  const t = un(e) ? e.get() : e;
  return KO(t) ? t.toValue() : t;
}
function XO(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  o,
  i
) {
  const a = { latestValues: QO(r, o, i, e), renderState: t() };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const rS = (e) => (t, n) => {
  const r = p.exports.useContext(Tc),
    o = p.exports.useContext(hh),
    i = () => XO(e, t, r, o);
  return n ? i() : WO(i);
};
function QO(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const d in i) o[d] = nu(i[d]);
  let { initial: a, animate: s } = e;
  const l = Mc(e),
    u = Vb(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const f = c ? s : a;
  return (
    f &&
      typeof f != 'boolean' &&
      !Rc(f) &&
      (Array.isArray(f) ? f : [f]).forEach((m) => {
        const v = Ph(e, m);
        if (!v) return;
        const { transitionEnd: x, transition: S, ...y } = v;
        for (const h in y) {
          let g = y[h];
          if (Array.isArray(g)) {
            const b = c ? g.length - 1 : 0;
            g = g[b];
          }
          g !== null && (o[h] = g);
        }
        for (const h in x) o[h] = x[h];
      }),
    o
  );
}
const pt = (e) => e;
class Ug {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function YO(e) {
  let t = new Ug(),
    n = new Ug(),
    r = 0,
    o = !1,
    i = !1;
  const a = new WeakSet(),
    s = {
      schedule: (l, u = !1, c = !1) => {
        const f = c && o,
          d = f ? t : n;
        return u && a.add(l), d.add(l) && f && o && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), a.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            c(l), a.has(c) && (s.schedule(c), e());
          }
        (o = !1), i && ((i = !1), s.process(l));
      },
    };
  return s;
}
const $l = ['prepare', 'read', 'update', 'preRender', 'render', 'postRender'],
  qO = 40;
function ZO(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = $l.reduce((f, d) => ((f[d] = YO(() => (n = !0))), f), {}),
    a = (f) => i[f].process(o),
    s = () => {
      const f = performance.now();
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(f - o.timestamp, qO), 1)),
        (o.timestamp = f),
        (o.isProcessing = !0),
        $l.forEach(a),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(s));
    },
    l = () => {
      (n = !0), (r = !0), o.isProcessing || e(s);
    };
  return {
    schedule: $l.reduce((f, d) => {
      const m = i[d];
      return (f[d] = (v, x = !1, S = !1) => (n || l(), m.schedule(v, x, S))), f;
    }, {}),
    cancel: (f) => $l.forEach((d) => i[d].cancel(f)),
    state: o,
    steps: i,
  };
}
const {
    schedule: Ze,
    cancel: kr,
    state: Nt,
    steps: Kd,
  } = ZO(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : pt, !0),
  JO = {
    useVisualState: rS({
      scrapeMotionValuesFromProps: nS,
      createRenderState: Zb,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        Ze.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == 'function'
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          Ze.render(() => {
            Sh(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              wh(t.tagName),
              e.transformTemplate
            ),
              tS(t, n);
          });
      },
    }),
  },
  eR = {
    useVisualState: rS({
      scrapeMotionValuesFromProps: Eh,
      createRenderState: bh,
    }),
  };
function tR(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(yh(e) ? JO : eR),
    preloadedFeatures: n,
    useRender: UO(t),
    createVisualElement: r,
    Component: e,
  };
}
function Cr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const oS = (e) =>
  e.pointerType === 'mouse'
    ? typeof e.button != 'number' || e.button <= 0
    : e.isPrimary !== !1;
function Ic(e, t = 'page') {
  return { point: { x: e[t + 'X'], y: e[t + 'Y'] } };
}
const nR = (e) => (t) => oS(t) && e(t, Ic(t));
function Pr(e, t, n, r) {
  return Cr(e, t, nR(n), r);
}
const rR = (e, t) => (n) => t(e(n)),
  so = (...e) => e.reduce(rR);
function iS(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Wg = iS('dragHorizontal'),
  Kg = iS('dragVertical');
function aS(e) {
  let t = !1;
  if (e === 'y') t = Kg();
  else if (e === 'x') t = Wg();
  else {
    const n = Wg(),
      r = Kg();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function sS() {
  const e = aS(!0);
  return e ? (e(), !1) : !0;
}
class bo {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Gg(e, t) {
  const n = 'pointer' + (t ? 'enter' : 'leave'),
    r = 'onHover' + (t ? 'Start' : 'End'),
    o = (i, a) => {
      if (i.type === 'touch' || sS()) return;
      const s = e.getProps();
      e.animationState &&
        s.whileHover &&
        e.animationState.setActive('whileHover', t),
        s[r] && Ze.update(() => s[r](i, a));
    };
  return Pr(e.current, n, o, { passive: !e.getProps()[r] });
}
class oR extends bo {
  mount() {
    this.unmount = so(Gg(this.node, !0), Gg(this.node, !1));
  }
  unmount() {}
}
class iR extends bo {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(':focus-visible');
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = so(
      Cr(this.node.current, 'focus', () => this.onFocus()),
      Cr(this.node.current, 'blur', () => this.onBlur())
    );
  }
  unmount() {}
}
const lS = (e, t) => (t ? (e === t ? !0 : lS(e, t.parentElement)) : !1);
function Gd(e, t) {
  if (!t) return;
  const n = new PointerEvent('pointer' + e);
  t(n, Ic(n));
}
class aR extends bo {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = pt),
      (this.removeEndListeners = pt),
      (this.removeAccessibleListeners = pt),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          i = Pr(
            window,
            'pointerup',
            (s, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              Ze.update(() => {
                lS(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          a = Pr(window, 'pointercancel', (s, l) => this.cancelPress(s, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = so(i, a)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== 'Enter' || this.isPressing) return;
            const a = (s) => {
              s.key !== 'Enter' ||
                !this.checkPressEnd() ||
                Gd('up', (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && Ze.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Cr(this.node.current, 'keyup', a)),
              Gd('down', (s, l) => {
                this.startPress(s, l);
              });
          },
          n = Cr(this.node.current, 'keydown', t),
          r = () => {
            !this.isPressing || Gd('cancel', (i, a) => this.cancelPress(i, a));
          },
          o = Cr(this.node.current, 'blur', r);
        this.removeAccessibleListeners = so(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive('whileTap', !0),
      r && Ze.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !sS()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && Ze.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Pr(this.node.current, 'pointerdown', this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = Cr(this.node.current, 'focus', this.startAccessiblePress);
    this.removeStartListeners = so(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Cp = new WeakMap(),
  Xd = new WeakMap(),
  sR = (e) => {
    const t = Cp.get(e.target);
    t && t(e);
  },
  lR = (e) => {
    e.forEach(sR);
  };
function uR({ root: e, ...t }) {
  const n = e || document;
  Xd.has(n) || Xd.set(n, {});
  const r = Xd.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(lR, { root: e, ...t })), r[o];
}
function cR(e, t, n) {
  const r = uR(t);
  return (
    Cp.set(e, n),
    r.observe(e),
    () => {
      Cp.delete(e), r.unobserve(e);
    }
  );
}
const dR = { some: 0, all: 1 };
class fR extends bo {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = 'some', once: i } = t,
      a = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == 'number' ? o : dR[o],
      },
      s = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive('whileInView', u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return cR(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > 'u') return;
    const { props: t, prevProps: n } = this.node;
    ['amount', 'margin', 'root'].some(pR(t, n)) && this.startObserver();
  }
  unmount() {}
}
function pR({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const mR = {
  inView: { Feature: fR },
  tap: { Feature: aR },
  focus: { Feature: iR },
  hover: { Feature: oR },
};
function uS(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function hR(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function vR(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function kc(e, t, n) {
  const r = e.getProps();
  return Ph(r, t, n !== void 0 ? n : r.custom, hR(e), vR(e));
}
const gR = 'framerAppearId',
  yR = 'data-' + Ch(gR);
let xR = pt,
  Ac = pt;
const lo = (e) => e * 1e3,
  Tr = (e) => e / 1e3,
  Xg = { current: !1 },
  cS = (e) => Array.isArray(e) && typeof e[0] == 'number';
function dS(e) {
  return Boolean(
    !e ||
      (typeof e == 'string' && fS[e]) ||
      cS(e) ||
      (Array.isArray(e) && e.every(dS))
  );
}
const qa = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  fS = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: qa([0, 0.65, 0.55, 1]),
    circOut: qa([0.55, 0, 1, 0.45]),
    backIn: qa([0.31, 0.01, 0.66, -0.59]),
    backOut: qa([0.33, 1.53, 0.69, 0.99]),
  };
function pS(e) {
  if (!!e) return cS(e) ? qa(e) : Array.isArray(e) ? e.map(pS) : fS[e];
}
function bR(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o,
    repeat: i = 0,
    repeatType: a = 'loop',
    ease: s,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = pS(s);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? 'linear' : c,
      fill: 'both',
      iterations: i + 1,
      direction: a === 'reverse' ? 'alternate' : 'normal',
    })
  );
}
function SR(e, { repeat: t, repeatType: n = 'loop' }) {
  const r = t && n !== 'loop' && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const mS = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  wR = 1e-7,
  CR = 12;
function ER(e, t, n, r, o) {
  let i,
    a,
    s = 0;
  do (a = t + (n - t) / 2), (i = mS(a, r, o) - e), i > 0 ? (n = a) : (t = a);
  while (Math.abs(i) > wR && ++s < CR);
  return a;
}
function el(e, t, n, r) {
  if (e === t && n === r) return pt;
  const o = (i) => ER(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : mS(o(i), t, r));
}
const PR = el(0.42, 0, 1, 1),
  TR = el(0, 0, 0.58, 1),
  hS = el(0.42, 0, 0.58, 1),
  OR = (e) => Array.isArray(e) && typeof e[0] != 'number',
  vS = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  gS = (e) => (t) => 1 - e(1 - t),
  yS = (e) => 1 - Math.sin(Math.acos(e)),
  Th = gS(yS),
  RR = vS(Th),
  xS = el(0.33, 1.53, 0.69, 0.99),
  Oh = gS(xS),
  MR = vS(Oh),
  $R = (e) =>
    (e *= 2) < 1 ? 0.5 * Oh(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  IR = {
    linear: pt,
    easeIn: PR,
    easeInOut: hS,
    easeOut: TR,
    circIn: yS,
    circInOut: RR,
    circOut: Th,
    backIn: Oh,
    backInOut: MR,
    backOut: xS,
    anticipate: $R,
  },
  Qg = (e) => {
    if (Array.isArray(e)) {
      Ac(e.length === 4);
      const [t, n, r, o] = e;
      return el(t, n, r, o);
    } else if (typeof e == 'string') return IR[e];
    return e;
  },
  Rh = (e, t) => (n) =>
    Boolean(
      (Zs(n) && $O.test(n) && n.startsWith(e)) ||
        (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  bS = (e, t, n) => (r) => {
    if (!Zs(r)) return r;
    const [o, i, a, s] = r.match($c);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  },
  kR = (e) => mo(0, 255, e),
  Qd = { ...li, transform: (e) => Math.round(kR(e)) },
  Vo = {
    test: Rh('rgb', 'red'),
    parse: bS('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      'rgba(' +
      Qd.transform(e) +
      ', ' +
      Qd.transform(t) +
      ', ' +
      Qd.transform(n) +
      ', ' +
      cs(us.transform(r)) +
      ')',
  };
function AR(e) {
  let t = '',
    n = '',
    r = '',
    o = '';
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Ep = { test: Rh('#'), parse: AR, transform: Vo.transform },
  Hi = {
    test: Rh('hsl', 'hue'),
    parse: bS('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      ar.transform(cs(t)) +
      ', ' +
      ar.transform(cs(n)) +
      ', ' +
      cs(us.transform(r)) +
      ')',
  },
  qt = {
    test: (e) => Vo.test(e) || Ep.test(e) || Hi.test(e),
    parse: (e) =>
      Vo.test(e) ? Vo.parse(e) : Hi.test(e) ? Hi.parse(e) : Ep.parse(e),
    transform: (e) =>
      Zs(e) ? e : e.hasOwnProperty('red') ? Vo.transform(e) : Hi.transform(e),
  },
  it = (e, t, n) => -n * e + n * t + e;
function Yd(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function NR({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    a = 0;
  if (!t) o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - s;
    (o = Yd(l, s, e + 1 / 3)), (i = Yd(l, s, e)), (a = Yd(l, s, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r,
  };
}
const qd = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  LR = [Ep, Vo, Hi],
  _R = (e) => LR.find((t) => t.test(e));
function Yg(e) {
  const t = _R(e);
  let n = t.parse(e);
  return t === Hi && (n = NR(n)), n;
}
const SS = (e, t) => {
  const n = Yg(e),
    r = Yg(t),
    o = { ...n };
  return (i) => (
    (o.red = qd(n.red, r.red, i)),
    (o.green = qd(n.green, r.green, i)),
    (o.blue = qd(n.blue, r.blue, i)),
    (o.alpha = it(n.alpha, r.alpha, i)),
    Vo.transform(o)
  );
};
function DR(e) {
  var t, n;
  return (
    isNaN(e) &&
    Zs(e) &&
    (((t = e.match($c)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Xb)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const wS = { regex: RO, countKey: 'Vars', token: '${v}', parse: pt },
  CS = { regex: Xb, countKey: 'Colors', token: '${c}', parse: qt.parse },
  ES = { regex: $c, countKey: 'Numbers', token: '${n}', parse: li.parse };
function Zd(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  !i ||
    ((e['num' + n] = i.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...i.map(o)));
}
function Bu(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes('var(--') && Zd(n, wS), Zd(n, CS), Zd(n, ES), n;
}
function PS(e) {
  return Bu(e).values;
}
function TS(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = Bu(e),
    i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < r
        ? (s = s.replace(wS.token, a[l]))
        : l < r + n
        ? (s = s.replace(CS.token, qt.transform(a[l])))
        : (s = s.replace(ES.token, cs(a[l])));
    return s;
  };
}
const jR = (e) => (typeof e == 'number' ? 0 : e);
function zR(e) {
  const t = PS(e);
  return TS(e)(t.map(jR));
}
const ho = {
    test: DR,
    parse: PS,
    createTransformer: TS,
    getAnimatableNone: zR,
  },
  OS = (e, t) => (n) => `${n > 0 ? t : e}`;
function RS(e, t) {
  return typeof e == 'number'
    ? (n) => it(e, t, n)
    : qt.test(e)
    ? SS(e, t)
    : e.startsWith('var(')
    ? OS(e, t)
    : $S(e, t);
}
const MS = (e, t) => {
    const n = [...e],
      r = n.length,
      o = e.map((i, a) => RS(i, t[a]));
    return (i) => {
      for (let a = 0; a < r; a++) n[a] = o[a](i);
      return n;
    };
  },
  BR = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const o in n)
      e[o] !== void 0 && t[o] !== void 0 && (r[o] = RS(e[o], t[o]));
    return (o) => {
      for (const i in r) n[i] = r[i](o);
      return n;
    };
  },
  $S = (e, t) => {
    const n = ho.createTransformer(t),
      r = Bu(e),
      o = Bu(t);
    return r.numVars === o.numVars &&
      r.numColors === o.numColors &&
      r.numNumbers >= o.numNumbers
      ? so(MS(r.values, o.values), n)
      : OS(e, t);
  },
  Ds = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  qg = (e, t) => (n) => it(e, t, n);
function FR(e) {
  return typeof e == 'number'
    ? qg
    : typeof e == 'string'
    ? qt.test(e)
      ? SS
      : $S
    : Array.isArray(e)
    ? MS
    : typeof e == 'object'
    ? BR
    : qg;
}
function VR(e, t, n) {
  const r = [],
    o = n || FR(e[0]),
    i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || pt : t;
      s = so(l, s);
    }
    r.push(s);
  }
  return r;
}
function IS(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((Ac(i === t.length), i === 1)) return () => t[0];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = VR(t, r, o),
    s = a.length,
    l = (u) => {
      let c = 0;
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Ds(e[c], e[c + 1], u);
      return a[c](f);
    };
  return n ? (u) => l(mo(e[0], e[i - 1], u)) : l;
}
function HR(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Ds(0, t, r);
    e.push(it(n, 1, o));
  }
}
function UR(e) {
  const t = [0];
  return HR(t, e.length - 1), t;
}
function WR(e, t) {
  return e.map((n) => n * t);
}
function KR(e, t) {
  return e.map(() => t || hS).splice(0, e.length - 1);
}
function Fu({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = 'easeInOut',
}) {
  const o = OR(r) ? r.map(Qg) : Qg(r),
    i = { done: !1, value: t[0] },
    a = WR(n && n.length === t.length ? n : UR(t), e),
    s = IS(a, t, { ease: Array.isArray(o) ? o : KR(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = s(l)), (i.done = l >= e), i),
  };
}
function kS(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const GR = 5;
function AS(e, t, n) {
  const r = Math.max(t - GR, 0);
  return kS(n - e(r), t - r);
}
const Jd = 0.001,
  XR = 0.01,
  Zg = 10,
  QR = 0.05,
  YR = 1;
function qR({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o, i;
  xR(e <= lo(Zg));
  let a = 1 - t;
  (a = mo(QR, YR, a)),
    (e = mo(XR, Zg, Tr(e))),
    a < 1
      ? ((o = (u) => {
          const c = u * a,
            f = c * e,
            d = c - n,
            m = Pp(u, a),
            v = Math.exp(-f);
          return Jd - (d / m) * v;
        }),
        (i = (u) => {
          const f = u * a * e,
            d = f * n + n,
            m = Math.pow(a, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            x = Pp(Math.pow(u, 2), a);
          return ((-o(u) + Jd > 0 ? -1 : 1) * ((d - m) * v)) / x;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Jd + c * f;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const s = 5 / e,
    l = JR(o, i, s);
  if (((e = lo(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: a * 2 * Math.sqrt(r * u), duration: e };
  }
}
const ZR = 12;
function JR(e, t, n) {
  let r = n;
  for (let o = 1; o < ZR; o++) r = r - e(r) / t(r);
  return r;
}
function Pp(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const eM = ['duration', 'bounce'],
  tM = ['stiffness', 'damping', 'mass'];
function Jg(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function nM(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Jg(e, tM) && Jg(e, eM)) {
    const n = qR(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function NS({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: s,
      damping: l,
      mass: u,
      velocity: c,
      duration: f,
      isResolvedFromDuration: d,
    } = nM(r),
    m = c ? -Tr(c) : 0,
    v = l / (2 * Math.sqrt(s * u)),
    x = i - o,
    S = Tr(Math.sqrt(s / u)),
    y = Math.abs(x) < 5;
  n || (n = y ? 0.01 : 2), t || (t = y ? 0.005 : 0.5);
  let h;
  if (v < 1) {
    const g = Pp(S, v);
    h = (b) => {
      const C = Math.exp(-v * S * b);
      return (
        i - C * (((m + v * S * x) / g) * Math.sin(g * b) + x * Math.cos(g * b))
      );
    };
  } else if (v === 1) h = (g) => i - Math.exp(-S * g) * (x + (m + S * x) * g);
  else {
    const g = S * Math.sqrt(v * v - 1);
    h = (b) => {
      const C = Math.exp(-v * S * b),
        P = Math.min(g * b, 300);
      return (
        i - (C * ((m + v * S * x) * Math.sinh(P) + g * x * Math.cosh(P))) / g
      );
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (g) => {
      const b = h(g);
      if (d) a.done = g >= f;
      else {
        let C = m;
        g !== 0 && (v < 1 ? (C = AS(h, g, b)) : (C = 0));
        const P = Math.abs(C) <= n,
          w = Math.abs(i - b) <= t;
        a.done = P && w;
      }
      return (a.value = a.done ? i : b), a;
    },
  };
}
function e0({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: a,
  min: s,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    m = (T) => (s !== void 0 && T < s) || (l !== void 0 && T > l),
    v = (T) =>
      s === void 0
        ? l
        : l === void 0 || Math.abs(s - T) < Math.abs(l - T)
        ? s
        : l;
  let x = n * t;
  const S = f + x,
    y = a === void 0 ? S : a(S);
  y !== S && (x = y - f);
  const h = (T) => -x * Math.exp(-T / r),
    g = (T) => y + h(T),
    b = (T) => {
      const $ = h(T),
        N = g(T);
      (d.done = Math.abs($) <= u), (d.value = d.done ? y : N);
    };
  let C, P;
  const w = (T) => {
    !m(d.value) ||
      ((C = T),
      (P = NS({
        keyframes: [d.value, v(d.value)],
        velocity: AS(g, T, d.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    w(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let $ = !1;
        return (
          !P && C === void 0 && (($ = !0), b(T), w(T)),
          C !== void 0 && T > C ? P.next(T - C) : (!$ && b(T), d)
        );
      },
    }
  );
}
const rM = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Ze.update(t, !0),
      stop: () => kr(t),
      now: () => (Nt.isProcessing ? Nt.timestamp : performance.now()),
    };
  },
  t0 = 2e4;
function n0(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < t0; ) (t += n), (r = e.next(t));
  return t >= t0 ? 1 / 0 : t;
}
const oM = { decay: e0, inertia: e0, tween: Fu, keyframes: Fu, spring: NS };
function Vu({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = rM,
  keyframes: r,
  type: o = 'keyframes',
  repeat: i = 0,
  repeatDelay: a = 0,
  repeatType: s = 'loop',
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let m = 1,
    v = !1,
    x,
    S;
  const y = () => {
    S = new Promise((L) => {
      x = L;
    });
  };
  y();
  let h;
  const g = oM[o] || Fu;
  let b;
  g !== Fu &&
    typeof r[0] != 'number' &&
    ((b = IS([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const C = g({ ...d, keyframes: r });
  let P;
  s === 'mirror' &&
    (P = g({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let w = 'idle',
    T = null,
    $ = null,
    N = null;
  C.calculatedDuration === null && i && (C.calculatedDuration = n0(C));
  const { calculatedDuration: j } = C;
  let F = 1 / 0,
    H = 1 / 0;
  j !== null && ((F = j + a), (H = F * (i + 1) - a));
  let z = 0;
  const V = (L) => {
      if ($ === null) return;
      m > 0 && ($ = Math.min($, L)),
        m < 0 && ($ = Math.min(L - H / m, $)),
        T !== null ? (z = T) : (z = Math.round(L - $) * m);
      const B = z - t * (m >= 0 ? 1 : -1),
        J = m >= 0 ? B < 0 : B > H;
      (z = Math.max(B, 0)), w === 'finished' && T === null && (z = H);
      let Q = z,
        ne = C;
      if (i) {
        const pe = z / F;
        let Z = Math.floor(pe),
          me = pe % 1;
        !me && pe >= 1 && (me = 1), me === 1 && Z--, (Z = Math.min(Z, i + 1));
        const Ae = Boolean(Z % 2);
        Ae &&
          (s === 'reverse'
            ? ((me = 1 - me), a && (me -= a / F))
            : s === 'mirror' && (ne = P));
        let Ve = mo(0, 1, me);
        z > H && (Ve = s === 'reverse' && Ae ? 1 : 0), (Q = Ve * F);
      }
      const q = J ? { done: !1, value: r[0] } : ne.next(Q);
      b && (q.value = b(q.value));
      let { done: ae } = q;
      !J && j !== null && (ae = m >= 0 ? z >= H : z <= 0);
      const se = T === null && (w === 'finished' || (w === 'running' && ae));
      return f && f(q.value), se && E(), q;
    },
    R = () => {
      h && h.stop(), (h = void 0);
    },
    O = () => {
      (w = 'idle'), R(), x(), y(), ($ = N = null);
    },
    E = () => {
      (w = 'finished'), c && c(), R(), x();
    },
    k = () => {
      if (v) return;
      h || (h = n(V));
      const L = h.now();
      l && l(),
        T !== null ? ($ = L - T) : (!$ || w === 'finished') && ($ = L),
        w === 'finished' && y(),
        (N = $),
        (T = null),
        (w = 'running'),
        h.start();
    };
  e && k();
  const I = {
    then(L, B) {
      return S.then(L, B);
    },
    get time() {
      return Tr(z);
    },
    set time(L) {
      (L = lo(L)),
        (z = L),
        T !== null || !h || m === 0 ? (T = L) : ($ = h.now() - L / m);
    },
    get duration() {
      const L = C.calculatedDuration === null ? n0(C) : C.calculatedDuration;
      return Tr(L);
    },
    get speed() {
      return m;
    },
    set speed(L) {
      L === m || !h || ((m = L), (I.time = Tr(z)));
    },
    get state() {
      return w;
    },
    play: k,
    pause: () => {
      (w = 'paused'), (T = z);
    },
    stop: () => {
      (v = !0), w !== 'idle' && ((w = 'idle'), u && u(), O());
    },
    cancel: () => {
      N !== null && V(N), O();
    },
    complete: () => {
      w = 'finished';
    },
    sample: (L) => (($ = 0), V(L)),
  };
  return I;
}
function iM(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const aM = iM(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  sM = new Set([
    'opacity',
    'clipPath',
    'filter',
    'transform',
    'backgroundColor',
  ]),
  Il = 10,
  lM = 2e4,
  uM = (e, t) => t.type === 'spring' || e === 'backgroundColor' || !dS(t.ease);
function cM(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (
    !(
      aM() &&
      sM.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== 'mirror' &&
      o.damping !== 0 &&
      o.type !== 'inertia'
    )
  )
    return !1;
  let a = !1,
    s,
    l;
  const u = () => {
    l = new Promise((h) => {
      s = h;
    });
  };
  u();
  let { keyframes: c, duration: f = 300, ease: d, times: m } = o;
  if (uM(t, o)) {
    const h = Vu({ ...o, repeat: 0, delay: 0 });
    let g = { done: !1, value: c[0] };
    const b = [];
    let C = 0;
    for (; !g.done && C < lM; ) (g = h.sample(C)), b.push(g.value), (C += Il);
    (m = void 0), (c = b), (f = C - Il), (d = 'linear');
  }
  const v = bR(e.owner.current, t, c, { ...o, duration: f, ease: d, times: m });
  o.syncStart &&
    (v.startTime = Nt.isProcessing
      ? Nt.timestamp
      : document.timeline
      ? document.timeline.currentTime
      : performance.now());
  const x = () => v.cancel(),
    S = () => {
      Ze.update(x), s(), u();
    };
  return (
    (v.onfinish = () => {
      e.set(SR(c, o)), r && r(), S();
    }),
    {
      then(h, g) {
        return l.then(h, g);
      },
      attachTimeline(h) {
        return (v.timeline = h), (v.onfinish = null), pt;
      },
      get time() {
        return Tr(v.currentTime || 0);
      },
      set time(h) {
        v.currentTime = lo(h);
      },
      get speed() {
        return v.playbackRate;
      },
      set speed(h) {
        v.playbackRate = h;
      },
      get duration() {
        return Tr(f);
      },
      play: () => {
        a || (v.play(), kr(x));
      },
      pause: () => v.pause(),
      stop: () => {
        if (((a = !0), v.playState === 'idle')) return;
        const { currentTime: h } = v;
        if (h) {
          const g = Vu({ ...o, autoplay: !1 });
          e.setWithVelocity(g.sample(h - Il).value, g.sample(h).value, Il);
        }
        S();
      },
      complete: () => v.finish(),
      cancel: S,
    }
  );
}
function dM({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const o = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: pt,
      pause: pt,
      stop: pt,
      then: (i) => (i(), Promise.resolve()),
      cancel: pt,
      complete: pt,
    }
  );
  return t
    ? Vu({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o })
    : o();
}
const fM = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  pM = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  mM = { type: 'keyframes', duration: 0.8 },
  hM = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  vM = (e, { keyframes: t }) =>
    t.length > 2
      ? mM
      : si.has(e)
      ? e.startsWith('scale')
        ? pM(t[1])
        : fM
      : hM,
  Tp = (e, t) =>
    e === 'zIndex'
      ? !1
      : !!(
          typeof t == 'number' ||
          Array.isArray(t) ||
          (typeof t == 'string' &&
            (ho.test(t) || t === '0') &&
            !t.startsWith('url('))
        ),
  gM = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function yM(e) {
  const [t, n] = e.slice(0, -1).split('(');
  if (t === 'drop-shadow') return e;
  const [r] = n.match($c) || [];
  if (!r) return e;
  const o = n.replace(r, '');
  let i = gM.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + '(' + i + o + ')';
}
const xM = /([a-z-]*)\(.*?\)/g,
  Op = {
    ...ho,
    getAnimatableNone: (e) => {
      const t = e.match(xM);
      return t ? t.map(yM).join(' ') : e;
    },
  },
  bM = {
    ...Qb,
    color: qt,
    backgroundColor: qt,
    outlineColor: qt,
    fill: qt,
    stroke: qt,
    borderColor: qt,
    borderTopColor: qt,
    borderRightColor: qt,
    borderBottomColor: qt,
    borderLeftColor: qt,
    filter: Op,
    WebkitFilter: Op,
  },
  Mh = (e) => bM[e];
function LS(e, t) {
  let n = Mh(e);
  return (
    n !== Op && (n = ho), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const _S = (e) => /^0[^.\s]+$/.test(e);
function SM(e) {
  if (typeof e == 'number') return e === 0;
  if (e !== null) return e === 'none' || e === '0' || _S(e);
}
function wM(e, t, n, r) {
  const o = Tp(t, n);
  let i;
  Array.isArray(n) ? (i = [...n]) : (i = [null, n]);
  const a = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]),
      SM(i[u]) && l.push(u),
      typeof i[u] == 'string' && i[u] !== 'none' && i[u] !== '0' && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = LS(t, s);
    }
  return i;
}
function CM({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: a,
  repeatDelay: s,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function DS(e, t) {
  return e[t] || e.default || e;
}
const $h =
  (e, t, n, r = {}) =>
  (o) => {
    const i = DS(r, e) || {},
      a = i.delay || r.delay || 0;
    let { elapsed: s = 0 } = r;
    s = s - lo(a);
    const l = wM(t, e, n, i),
      u = l[0],
      c = l[l.length - 1],
      f = Tp(e, u),
      d = Tp(e, c);
    let m = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: 'easeOut',
      ...i,
      delay: -s,
      onUpdate: (v) => {
        t.set(v), i.onUpdate && i.onUpdate(v);
      },
      onComplete: () => {
        o(), i.onComplete && i.onComplete();
      },
    };
    if (
      (CM(i) || (m = { ...m, ...vM(e, m) }),
      m.duration && (m.duration = lo(m.duration)),
      m.repeatDelay && (m.repeatDelay = lo(m.repeatDelay)),
      !f || !d || Xg.current || i.type === !1)
    )
      return dM(Xg.current ? { ...m, delay: 0 } : m);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const v = cM(t, e, m);
      if (v) return v;
    }
    return Vu(m);
  };
function Hu(e) {
  return Boolean(un(e) && e.add);
}
const jS = (e) => /^\-?\d*\.?\d+$/.test(e);
function Ih(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function kh(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Ah {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Ih(this.subscriptions, t), () => kh(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (!!o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const EM = (e) => !isNaN(parseFloat(e));
class PM {
  constructor(t, n = {}) {
    (this.version = '10.16.4'),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: i, timestamp: a } = Nt;
        this.lastUpdated !== a &&
          ((this.timeDelta = i),
          (this.lastUpdated = a),
          Ze.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => Ze.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = EM(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on('change', t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ah());
    const r = this.events[t].add(n);
    return t === 'change'
      ? () => {
          r(),
            Ze.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? kS(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ca(e, t) {
  return new PM(e, t);
}
const zS = (e) => (t) => t.test(e),
  TM = { test: (e) => e === 'auto', parse: (e) => e },
  BS = [li, ve, ar, Vr, kO, IO, TM],
  za = (e) => BS.find(zS(e)),
  OM = [...BS, qt, ho],
  RM = (e) => OM.find(zS(e));
function MM(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ca(n));
}
function $M(e, t) {
  const n = kc(e, t);
  let {
    transitionEnd: r = {},
    transition: o = {},
    ...i
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = GO(i[a]);
    MM(e, a, s);
  }
}
function IM(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)),
    a = i.length;
  if (!!a)
    for (let s = 0; s < a; s++) {
      const l = i[s],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && o !== void 0
              ? o
              : t[l]),
        c != null &&
          (typeof c == 'string' && (jS(c) || _S(c))
            ? (c = parseFloat(c))
            : !RM(c) && ho.test(u) && (c = LS(l, u)),
          e.addValue(l, ca(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function kM(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function AM(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = kM(o, t);
    if (i !== void 0) r[o] = i;
    else {
      const a = n.getValue(o);
      a && (r[o] = a.get());
    }
  }
  return r;
}
function NM({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function FS(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: a,
    ...s
  } = e.makeTargetAnimatable(t);
  const l = e.getValue('willChange');
  r && (i = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const f in s) {
    const d = e.getValue(f),
      m = s[f];
    if (!d || m === void 0 || (c && NM(c, f))) continue;
    const v = { delay: n, elapsed: 0, ...i };
    if (window.HandoffAppearAnimations && !d.hasAnimated) {
      const S = e.getProps()[yR];
      S &&
        ((v.elapsed = window.HandoffAppearAnimations(S, f, d, Ze)),
        (v.syncStart = !0));
    }
    d.start($h(f, d, m, e.shouldReduceMotion && si.has(f) ? { type: !1 } : v));
    const x = d.animation;
    Hu(l) && (l.add(f), x.then(() => l.remove(f))), u.push(x);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        a && $M(e, a);
      }),
    u
  );
}
function Rp(e, t, n = {}) {
  const r = kc(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(FS(e, r, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = o;
            return LM(e, t, u + l, c, f, n);
          }
        : () => Promise.resolve(),
    { when: s } = o;
  if (s) {
    const [l, u] = s === 'beforeChildren' ? [i, a] : [a, i];
    return l().then(() => u());
  } else return Promise.all([i(), a(n.delay)]);
}
function LM(e, t, n = 0, r = 0, o = 1, i) {
  const a = [],
    s = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(_M)
      .forEach((u, c) => {
        u.notify('AnimationStart', t),
          a.push(
            Rp(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify('AnimationComplete', t)
            )
          );
      }),
    Promise.all(a)
  );
}
function _M(e, t) {
  return e.sortNodePosition(t);
}
function DM(e, t, n = {}) {
  e.notify('AnimationStart', t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Rp(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == 'string') r = Rp(e, t, n);
  else {
    const o = typeof t == 'function' ? kc(e, t, n.custom) : t;
    r = Promise.all(FS(e, o, n));
  }
  return r.then(() => e.notify('AnimationComplete', t));
}
const jM = [...vh].reverse(),
  zM = vh.length;
function BM(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => DM(e, n, r)));
}
function FM(e) {
  let t = BM(e);
  const n = HM();
  let r = !0;
  const o = (l, u) => {
    const c = kc(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...m } = c;
      l = { ...l, ...m, ...d };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function a(l, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      m = new Set();
    let v = {},
      x = 1 / 0;
    for (let y = 0; y < zM; y++) {
      const h = jM[y],
        g = n[h],
        b = c[h] !== void 0 ? c[h] : f[h],
        C = Ls(b),
        P = h === u ? g.isActive : null;
      P === !1 && (x = y);
      let w = b === f[h] && b !== c[h] && C;
      if (
        (w && r && e.manuallyAnimateOnMount && (w = !1),
        (g.protectedKeys = { ...v }),
        (!g.isActive && P === null) ||
          (!b && !g.prevProp) ||
          Rc(b) ||
          typeof b == 'boolean')
      )
        continue;
      const T = VM(g.prevProp, b);
      let $ = T || (h === u && g.isActive && !w && C) || (y > x && C);
      const N = Array.isArray(b) ? b : [b];
      let j = N.reduce(o, {});
      P === !1 && (j = {});
      const { prevResolvedValues: F = {} } = g,
        H = { ...F, ...j },
        z = (V) => {
          ($ = !0), m.delete(V), (g.needsAnimating[V] = !0);
        };
      for (const V in H) {
        const R = j[V],
          O = F[V];
        v.hasOwnProperty(V) ||
          (R !== O
            ? zu(R) && zu(O)
              ? !uS(R, O) || T
                ? z(V)
                : (g.protectedKeys[V] = !0)
              : R !== void 0
              ? z(V)
              : m.add(V)
            : R !== void 0 && m.has(V)
            ? z(V)
            : (g.protectedKeys[V] = !0));
      }
      (g.prevProp = b),
        (g.prevResolvedValues = j),
        g.isActive && (v = { ...v, ...j }),
        r && e.blockInitialAnimation && ($ = !1),
        $ &&
          !w &&
          d.push(
            ...N.map((V) => ({ animation: V, options: { type: h, ...l } }))
          );
    }
    if (m.size) {
      const y = {};
      m.forEach((h) => {
        const g = e.getBaseTarget(h);
        g !== void 0 && (y[h] = g);
      }),
        d.push({ animation: y });
    }
    let S = Boolean(d.length);
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (S = !1),
      (r = !1),
      S ? t(d) : Promise.resolve()
    );
  }
  function s(l, u, c) {
    var f;
    if (n[l].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((m) => {
        var v;
        return (v = m.animationState) === null || v === void 0
          ? void 0
          : v.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = a(c, l);
    for (const m in n) n[m].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => n,
  };
}
function VM(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !uS(t, e) : !1;
}
function Mo(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function HM() {
  return {
    animate: Mo(!0),
    whileInView: Mo(),
    whileHover: Mo(),
    whileTap: Mo(),
    whileDrag: Mo(),
    whileFocus: Mo(),
    exit: Mo(),
  };
}
class UM extends bo {
  constructor(t) {
    super(t), t.animationState || (t.animationState = FM(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Rc(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let WM = 0;
class KM extends bo {
  constructor() {
    super(...arguments), (this.id = WM++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o) return;
    const i = this.node.animationState.setActive('exit', !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const GM = { animation: { Feature: UM }, exit: { Feature: KM } },
  r0 = (e, t) => Math.abs(e - t);
function XM(e, t) {
  const n = r0(e.x, t.x),
    r = r0(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class VS {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = tf(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          f = XM(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f) return;
        const { point: d } = u,
          { timestamp: m } = Nt;
        this.history.push({ ...d, timestamp: m });
        const { onStart: v, onMove: x } = this.handlers;
        c ||
          (v && v(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          x && x(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = ef(c, this.transformPagePoint)),
          Ze.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: f, onSessionEnd: d } = this.handlers,
          m = tf(
            u.type === 'pointercancel'
              ? this.lastMoveEventInfo
              : ef(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && f && f(u, m), d && d(u, m);
      }),
      !oS(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const o = Ic(t),
      i = ef(o, this.transformPagePoint),
      { point: a } = i,
      { timestamp: s } = Nt;
    this.history = [{ ...a, timestamp: s }];
    const { onSessionStart: l } = n;
    l && l(t, tf(i, this.history)),
      (this.removeListeners = so(
        Pr(window, 'pointermove', this.handlePointerMove),
        Pr(window, 'pointerup', this.handlePointerUp),
        Pr(window, 'pointercancel', this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), kr(this.updatePoint);
  }
}
function ef(e, t) {
  return t ? { point: t(e.point) } : e;
}
function o0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function tf({ point: e }, t) {
  return {
    point: e,
    delta: o0(e, HS(t)),
    offset: o0(e, QM(t)),
    velocity: YM(t, 0.1),
  };
}
function QM(e) {
  return e[0];
}
function HS(e) {
  return e[e.length - 1];
}
function YM(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = HS(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > lo(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = Tr(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function yn(e) {
  return e.max - e.min;
}
function Mp(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function i0(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = it(t.min, t.max, e.origin)),
    (e.scale = yn(n) / yn(t)),
    (Mp(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = it(n.min, n.max, e.origin) - e.originPoint),
    (Mp(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ds(e, t, n, r) {
  i0(e.x, t.x, n.x, r ? r.originX : void 0),
    i0(e.y, t.y, n.y, r ? r.originY : void 0);
}
function a0(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + yn(t));
}
function qM(e, t, n) {
  a0(e.x, t.x, n.x), a0(e.y, t.y, n.y);
}
function s0(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + yn(t));
}
function fs(e, t, n) {
  s0(e.x, t.x, n.x), s0(e.y, t.y, n.y);
}
function ZM(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? it(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? it(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function l0(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function JM(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: l0(e.x, n, o), y: l0(e.y, t, r) };
}
function u0(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function e$(e, t) {
  return { x: u0(e.x, t.x), y: u0(e.y, t.y) };
}
function t$(e, t) {
  let n = 0.5;
  const r = yn(e),
    o = yn(t);
  return (
    o > r
      ? (n = Ds(t.min, t.max - r, e.min))
      : r > o && (n = Ds(e.min, e.max - o, t.min)),
    mo(0, 1, n)
  );
}
function n$(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const $p = 0.35;
function r$(e = $p) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = $p),
    { x: c0(e, 'left', 'right'), y: c0(e, 'top', 'bottom') }
  );
}
function c0(e, t, n) {
  return { min: d0(e, t), max: d0(e, n) };
}
function d0(e, t) {
  return typeof e == 'number' ? e : e[t] || 0;
}
const f0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ui = () => ({ x: f0(), y: f0() }),
  p0 = () => ({ min: 0, max: 0 }),
  xt = () => ({ x: p0(), y: p0() });
function nr(e) {
  return [e('x'), e('y')];
}
function US({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function o$({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function i$(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function nf(e) {
  return e === void 0 || e === 1;
}
function Ip({ scale: e, scaleX: t, scaleY: n }) {
  return !nf(e) || !nf(t) || !nf(n);
}
function ko(e) {
  return Ip(e) || WS(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function WS(e) {
  return m0(e.x) || m0(e.y);
}
function m0(e) {
  return e && e !== '0%';
}
function Uu(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function h0(e, t, n, r, o) {
  return o !== void 0 && (e = Uu(e, o, r)), Uu(e, n, r) + t;
}
function kp(e, t = 0, n = 1, r, o) {
  (e.min = h0(e.min, t, n, r, o)), (e.max = h0(e.max, t, n, r, o));
}
function KS(e, { x: t, y: n }) {
  kp(e.x, t.translate, t.scale, t.originPoint),
    kp(e.y, n.translate, n.scale, n.originPoint);
}
function a$(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    (i = n[s]), (a = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === 'contents') ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Wi(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), KS(e, a)),
      r && ko(i.latestValues) && Wi(e, i.latestValues));
  }
  (t.x = v0(t.x)), (t.y = v0(t.y));
}
function v0(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Wr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function g0(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    a = it(e.min, e.max, i);
  kp(e, t[n], t[r], a, t.scale);
}
const s$ = ['x', 'scaleX', 'originX'],
  l$ = ['y', 'scaleY', 'originY'];
function Wi(e, t) {
  g0(e.x, t, s$), g0(e.y, t, l$);
}
function GS(e, t) {
  return US(i$(e.getBoundingClientRect(), t));
}
function u$(e, t, n) {
  const r = GS(e, n),
    { scroll: o } = t;
  return o && (Wr(r.x, o.offset.x), Wr(r.y, o.offset.y)), r;
}
const c$ = new WeakMap();
class d$ {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = xt()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (l) => {
        this.stopAnimation(), n && this.snapToCursor(Ic(l, 'page').point);
      },
      i = (l, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (
          c &&
          !f &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = aS(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          nr((v) => {
            let x = this.getAxisMotionValue(v).get() || 0;
            if (ar.test(x)) {
              const { projection: S } = this.visualElement;
              if (S && S.layout) {
                const y = S.layout.layoutBox[v];
                y && (x = yn(y) * (parseFloat(x) / 100));
              }
            }
            this.originPoint[v] = x;
          }),
          d && Ze.update(() => d(l, u), !1, !0);
        const { animationState: m } = this.visualElement;
        m && m.setActive('whileDrag', !0);
      },
      a = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: f,
          onDirectionLock: d,
          onDrag: m,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: v } = u;
        if (f && this.currentDirection === null) {
          (this.currentDirection = f$(v)),
            this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis('x', u.point, v),
          this.updateAxis('y', u.point, v),
          this.visualElement.render(),
          m && m(l, u);
      },
      s = (l, u) => this.stop(l, u);
    this.panSession = new VS(
      t,
      { onSessionStart: o, onStart: i, onMove: a, onSessionEnd: s },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && Ze.update(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive('whileDrag', !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !kl(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (a = ZM(a, this.constraints[t], this.elastic[t])),
      i.set(a);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      o = this.constraints;
    t && Vi(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = JM(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = r$(n)),
      o !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        nr((i) => {
          this.getAxisMotionValue(i) &&
            (this.constraints[i] = n$(r.layoutBox[i], this.constraints[i]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Vi(t)) return !1;
    const r = t.current;
    Ac(r !== null);
    const { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = u$(r, o.root, this.visualElement.getTransformPagePoint());
    let a = e$(o.layout.layoutBox, i);
    if (n) {
      const s = n(o$(a));
      (this.hasMutatedConstraints = !!s), s && (a = US(s));
    }
    return a;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: a,
        onDragTransitionEnd: s,
      } = this.getProps(),
      l = this.constraints || {},
      u = nr((c) => {
        if (!kl(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        a && (f = { min: 0, max: 0 });
        const d = o ? 200 : 1e6,
          m = o ? 40 : 1e7,
          v = {
            type: 'inertia',
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...f,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start($h(t, r, 0, n));
  }
  stopAnimation() {
    nr((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = '_drag' + t.toUpperCase(),
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    nr((n) => {
      const { drag: r } = this.getProps();
      if (!kl(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[n];
        i.set(t[n] - it(a, s, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Vi(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    nr((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = t$({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, '') : 'none'),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      nr((a) => {
        if (!kl(a, t, null)) return;
        const s = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a];
        s.set(it(l, u, o[a]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    c$.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Pr(t, 'pointerdown', (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Vi(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener('measure', r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const a = Cr(window, 'resize', () => this.scalePositionWithinConstraints()),
      s = o.addEventListener(
        'didUpdate',
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (nr((c) => {
              const f = this.getAxisMotionValue(c);
              !f ||
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      a(), n(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: a = $p,
        dragMomentum: s = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s,
    };
  }
}
function kl(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function f$(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n;
}
class p$ extends bo {
  constructor(t) {
    super(t),
      (this.removeGroupControls = pt),
      (this.removeListeners = pt),
      (this.controls = new d$(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || pt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const y0 = (e) => (t, n) => {
  e && Ze.update(() => e(t, n));
};
class m$ extends bo {
  constructor() {
    super(...arguments), (this.removePointerDownListener = pt);
  }
  onPointerDown(t) {
    this.session = new VS(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: y0(t),
      onStart: y0(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && Ze.update(() => o(i, a));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Pr(this.node.current, 'pointerdown', (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function h$() {
  const e = p.exports.useContext(hh);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = p.exports.useId();
  return (
    p.exports.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0]
  );
}
const ru = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function x0(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Ba = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == 'string')
        if (ve.test(e)) e = parseFloat(e);
        else return e;
      const n = x0(e, t.target.x),
        r = x0(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  v$ = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = ho.parse(e);
      if (o.length > 5) return r;
      const i = ho.createTransformer(e),
        a = typeof o[0] != 'number' ? 1 : 0,
        s = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + a] /= s), (o[1 + a] /= l);
      const u = it(s, l, 0.5);
      return (
        typeof o[2 + a] == 'number' && (o[2 + a] /= u),
        typeof o[3 + a] == 'number' && (o[3 + a] /= u),
        i(o)
      );
    },
  };
class g$ extends de.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    EO(y$),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener('animationComplete', () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (ru.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      a = r.projection;
    return (
      a &&
        ((a.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? a.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? a.promote()
            : a.relegate() ||
              Ze.postRender(() => {
                const s = a.getStack();
                (!s || !s.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function XS(e) {
  const [t, n] = h$(),
    r = p.exports.useContext(Hb);
  return de.createElement(g$, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: p.exports.useContext(Ub),
    isPresent: t,
    safeToRemove: n,
  });
}
const y$ = {
    borderRadius: {
      ...Ba,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: Ba,
    borderTopRightRadius: Ba,
    borderBottomLeftRadius: Ba,
    borderBottomRightRadius: Ba,
    boxShadow: v$,
  },
  QS = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  x$ = QS.length,
  b0 = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  S0 = (e) => typeof e == 'number' || ve.test(e);
function b$(e, t, n, r, o, i) {
  o
    ? ((e.opacity = it(0, n.opacity !== void 0 ? n.opacity : 1, S$(r))),
      (e.opacityExit = it(t.opacity !== void 0 ? t.opacity : 1, 0, w$(r))))
    : i &&
      (e.opacity = it(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let a = 0; a < x$; a++) {
    const s = `border${QS[a]}Radius`;
    let l = w0(t, s),
      u = w0(n, s);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || S0(l) === S0(u)
        ? ((e[s] = Math.max(it(b0(l), b0(u), r), 0)),
          (ar.test(u) || ar.test(l)) && (e[s] += '%'))
        : (e[s] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = it(t.rotate || 0, n.rotate || 0, r));
}
function w0(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const S$ = YS(0, 0.5, Th),
  w$ = YS(0.5, 0.95, pt);
function YS(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Ds(e, t, r)));
}
function C0(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Cn(e, t) {
  C0(e.x, t.x), C0(e.y, t.y);
}
function E0(e, t, n, r, o) {
  return (
    (e -= t), (e = Uu(e, 1 / n, r)), o !== void 0 && (e = Uu(e, 1 / o, r)), e
  );
}
function C$(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (
    (ar.test(t) &&
      ((t = parseFloat(t)), (t = it(a.min, a.max, t / 100) - a.min)),
    typeof t != 'number')
  )
    return;
  let s = it(i.min, i.max, r);
  e === i && (s -= t),
    (e.min = E0(e.min, t, n, s, o)),
    (e.max = E0(e.max, t, n, s, o));
}
function P0(e, t, [n, r, o], i, a) {
  C$(e, t[n], t[r], t[o], t.scale, i, a);
}
const E$ = ['x', 'scaleX', 'originX'],
  P$ = ['y', 'scaleY', 'originY'];
function T0(e, t, n, r) {
  P0(e.x, t, E$, n ? n.x : void 0, r ? r.x : void 0),
    P0(e.y, t, P$, n ? n.y : void 0, r ? r.y : void 0);
}
function O0(e) {
  return e.translate === 0 && e.scale === 1;
}
function qS(e) {
  return O0(e.x) && O0(e.y);
}
function T$(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function ZS(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function R0(e) {
  return yn(e.x) / yn(e.y);
}
class O$ {
  constructor() {
    this.members = [];
  }
  add(t) {
    Ih(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (kh(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function M0(e, t, n) {
  let r = '';
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y;
  if (
    ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x,
    s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || 'none';
}
const R$ = (e, t) => e.depth - t.depth;
class M$ {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Ih(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    kh(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(R$),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function $$(e, t) {
  const n = performance.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (kr(r), e(i - t));
    };
  return Ze.read(r, !0), () => kr(r);
}
function I$(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function k$(e) {
  return e instanceof SVGElement && e.tagName !== 'svg';
}
function A$(e, t, n) {
  const r = un(e) ? e : ca(e);
  return r.start($h('', r, t, n)), r.animation;
}
const $0 = ['', 'X', 'Y', 'Z'],
  I0 = 1e3;
let N$ = 0;
const Ao = {
  type: 'projectionFrame',
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function JS({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      (this.id = N$++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (Ao.totalNodes =
            Ao.resolvedTargetDeltas =
            Ao.recalculatedProjection =
              0),
            this.nodes.forEach(D$),
            this.nodes.forEach(V$),
            this.nodes.forEach(H$),
            this.nodes.forEach(j$),
            I$(Ao);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = a),
        (this.root = s ? s.root || s : this),
        (this.path = s ? [...s.path, s] : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new M$());
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new Ah()),
        this.eventHandlers.get(a).add(s)
      );
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = k$(a)), (this.instance = a);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        s && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = $$(d, 250)),
            ru.hasAnimatedSinceResize &&
              ((ru.hasAnimatedSinceResize = !1), this.nodes.forEach(A0));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: m,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || c.getDefaultTransition() || X$,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: y } =
                  c.getProps(),
                h = !this.targetLayout || !ZS(this.targetLayout, v) || m,
                g = !d && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, g);
                const b = { ...DS(x, 'layout'), onPlay: S, onComplete: y };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((b.delay = 0), (b.type = !1)),
                  this.startAnimation(b);
              } else
                d || A0(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        kr(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(U$),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll('snapshot'),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners('willUpdate');
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(k0);
        return;
      }
      this.isUpdating || this.nodes.forEach(B$),
        (this.isUpdating = !1),
        this.nodes.forEach(F$),
        this.nodes.forEach(L$),
        this.nodes.forEach(_$),
        this.clearAllSnapshots();
      const s = performance.now();
      (Nt.delta = mo(0, 1e3 / 60, s - Nt.timestamp)),
        (Nt.timestamp = s),
        (Nt.isProcessing = !0),
        Kd.update.process(Nt),
        Kd.preRender.process(Nt),
        Kd.render.process(Nt),
        (Nt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(z$), this.sharedNodes.forEach(W$);
    }
    scheduleUpdateProjection() {
      Ze.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      Ze.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const a = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = xt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s &&
        s.notify(
          'LayoutMeasure',
          this.layout.layoutBox,
          a ? a.layoutBox : void 0
        );
    }
    updateScroll(a = 'measure') {
      let s = Boolean(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === a &&
        (s = !1),
        s &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: a,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!o) return;
      const a = this.isLayoutDirty || this.shouldResetTransform,
        s = this.projectionDelta && !qS(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, '') : void 0,
        c = u !== this.prevTransformTemplateValue;
      a &&
        (s || ko(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return (
        a && (l = this.removeTransform(l)),
        Q$(l),
        {
          animationId: this.root.animationId,
          measuredBox: s,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a) return xt();
      const s = a.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (Wr(s.x, l.offset.x), Wr(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = xt();
      Cn(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            Cn(s, a);
            const { scroll: d } = this.root;
            d && (Wr(s.x, -d.offset.x), Wr(s.y, -d.offset.y));
          }
          Wr(s.x, c.offset.x), Wr(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = xt();
      Cn(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Wi(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          ko(c.latestValues) && Wi(l, c.latestValues);
      }
      return ko(this.latestValues) && Wi(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = xt();
      Cn(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !ko(u.latestValues)) continue;
        Ip(u.latestValues) && u.updateSnapshot();
        const c = xt(),
          f = u.measurePageBox();
        Cn(c, f),
          T0(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return ko(this.latestValues) && T0(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      (this.targetDelta = a),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      !this.relativeParent ||
        (this.relativeParent.resolvedRelativeTargetAt !== Nt.timestamp &&
          this.relativeParent.resolveTargetDelta(!0));
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = Boolean(this.resumingFrom) || this !== l;
      if (
        !(
          a ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = Nt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = xt()),
              (this.relativeTargetOrigin = xt()),
              fs(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              Cn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = xt()), (this.targetWithTransforms = xt())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                qM(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (Boolean(this.resumingFrom)
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Cn(this.target, this.layout.layoutBox),
                KS(this.target, this.targetDelta))
              : Cn(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            Boolean(m.resumingFrom) === Boolean(this.resumingFrom) &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = xt()),
                (this.relativeTargetOrigin = xt()),
                fs(this.relativeTargetOrigin, this.target, m.target),
                Cn(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Ao.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ip(this.parent.latestValues) ||
          WS(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return Boolean(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
          this.layout
      );
    }
    calcProjection() {
      var a;
      const s = this.getLead(),
        l = Boolean(this.resumingFrom) || this !== s;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Nt.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = Boolean(
          (this.parent && this.parent.isTreeAnimating) ||
            this.currentAnimation ||
            this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Cn(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        m = this.treeScale.y;
      a$(this.layoutCorrected, this.treeScale, this.path, l),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (s.target = s.layout.layoutBox);
      const { target: v } = s;
      if (!v) {
        this.projectionTransform &&
          ((this.projectionDelta = Ui()),
          (this.projectionTransform = 'none'),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Ui()),
        (this.projectionDeltaWithTransform = Ui()));
      const x = this.projectionTransform;
      ds(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.projectionTransform = M0(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== x ||
          this.treeScale.x !== d ||
          this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', v)),
        Ao.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), a)) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = Ui();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s);
      const d = xt(),
        m = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        x = m !== v,
        S = this.getStack(),
        y = !S || S.members.length <= 1,
        h = Boolean(
          x && !y && this.options.crossfade === !0 && !this.path.some(G$)
        );
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (b) => {
        const C = b / 1e3;
        N0(f.x, a.x, C),
          N0(f.y, a.y, C),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (fs(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            K$(this.relativeTarget, this.relativeTargetOrigin, d, C),
            g && T$(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = xt()),
            Cn(g, this.relativeTarget)),
          x &&
            ((this.animationValues = c), b$(c, u, this.latestValues, C, h, y)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (kr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ze.update(() => {
          (ru.hasAnimatedSinceResize = !0),
            (this.currentAnimation = A$(0, I0, {
              ...a,
              onUpdate: (s) => {
                this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
              },
              onComplete: () => {
                a.onComplete && a.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const a = this.getStack();
      a && a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners('animationComplete');
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(I0),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let {
        targetWithTransforms: s,
        target: l,
        layout: u,
        latestValues: c,
      } = a;
      if (!(!s || !l || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          ew(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || xt();
          const f = yn(this.layout.layoutBox.x);
          (l.x.min = a.target.x.min), (l.x.max = l.x.min + f);
          const d = yn(this.layout.layoutBox.y);
          (l.y.min = a.target.y.min), (l.y.max = l.y.min + d);
        }
        Cn(s, l),
          Wi(s, c),
          ds(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new O$()),
        this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(s)
            : void 0,
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a) return;
      let s = !1;
      const { latestValues: l } = a;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s))
        return;
      const u = {};
      for (let c = 0; c < $0.length; c++) {
        const f = 'rotate' + $0[c];
        l[f] && ((u[f] = l[f]), a.setStaticValue(f, 0));
      }
      a.render();
      for (const c in u) a.setStaticValue(c, u[c]);
      a.scheduleRender();
    }
    getProjectionStyles(a = {}) {
      var s, l;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = '';
      else return { visibility: 'hidden' };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ''),
          (u.pointerEvents = nu(a.pointerEvents) || ''),
          (u.transform = c ? c(this.latestValues, '') : 'none'),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = nu(a.pointerEvents) || '')),
          this.hasProjected &&
            !ko(this.latestValues) &&
            ((x.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
          x
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = M0(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: m, y: v } = this.projectionDelta;
      (u.transformOrigin = `${m.origin * 100}% ${v.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (s = d.opacity) !== null && s !== void 0
                      ? s
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ''
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const x in Du) {
        if (d[x] === void 0) continue;
        const { correct: S, applyTo: y } = Du[x],
          h = u.transform === 'none' ? d[x] : S(d[x], f);
        if (y) {
          const g = y.length;
          for (let b = 0; b < g; b++) u[y[b]] = h;
        } else u[x] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = f === this ? nu(a.pointerEvents) || '' : 'none'),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0
          ? void 0
          : s.stop();
      }),
        this.root.nodes.forEach(k0),
        this.root.sharedNodes.clear();
    }
  };
}
function L$(e) {
  e.updateLayout();
}
function _$(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      a = n.source !== e.layout.source;
    i === 'size'
      ? nr((f) => {
          const d = a ? n.measuredBox[f] : n.layoutBox[f],
            m = yn(d);
          (d.min = r[f].min), (d.max = d.min + m);
        })
      : ew(i, n.layoutBox, r) &&
        nr((f) => {
          const d = a ? n.measuredBox[f] : n.layoutBox[f],
            m = yn(r[f]);
          (d.max = d.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + m));
        });
    const s = Ui();
    ds(s, r, n.layoutBox);
    const l = Ui();
    a ? ds(l, e.applyTransform(o, !0), n.measuredBox) : ds(l, r, n.layoutBox);
    const u = !qS(s);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: m } = f;
        if (d && m) {
          const v = xt();
          fs(v, n.layoutBox, d.layoutBox);
          const x = xt();
          fs(x, r, m.layoutBox),
            ZS(v, x) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function D$(e) {
  Ao.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = Boolean(
          e.isProjectionDirty ||
            e.parent.isProjectionDirty ||
            e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function j$(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function z$(e) {
  e.clearSnapshot();
}
function k0(e) {
  e.clearMeasurements();
}
function B$(e) {
  e.isLayoutDirty = !1;
}
function F$(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'),
    e.resetTransform();
}
function A0(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function V$(e) {
  e.resolveTargetDelta();
}
function H$(e) {
  e.calcProjection();
}
function U$(e) {
  e.resetRotation();
}
function W$(e) {
  e.removeLeadSnapshot();
}
function N0(e, t, n) {
  (e.translate = it(t.translate, 0, n)),
    (e.scale = it(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function L0(e, t, n, r) {
  (e.min = it(t.min, n.min, r)), (e.max = it(t.max, n.max, r));
}
function K$(e, t, n, r) {
  L0(e.x, t.x, n.x, r), L0(e.y, t.y, n.y, r);
}
function G$(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const X$ = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  _0 = (e) =>
    typeof navigator < 'u' && navigator.userAgent.toLowerCase().includes(e),
  D0 = _0('applewebkit/') && !_0('chrome/') ? Math.round : pt;
function j0(e) {
  (e.min = D0(e.min)), (e.max = D0(e.max));
}
function Q$(e) {
  j0(e.x), j0(e.y);
}
function ew(e, t, n) {
  return (
    e === 'position' || (e === 'preserve-aspect' && !Mp(R0(t), R0(n), 0.2))
  );
}
const Y$ = JS({
    attachResizeListener: (e, t) => Cr(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  rf = { current: void 0 },
  tw = JS({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!rf.current) {
        const e = new Y$({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (rf.current = e);
      }
      return rf.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none';
    },
    checkIsScrollRoot: (e) =>
      Boolean(window.getComputedStyle(e).position === 'fixed'),
  }),
  q$ = {
    pan: { Feature: m$ },
    drag: { Feature: p$, ProjectionNode: tw, MeasureLayout: XS },
  },
  Z$ = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function J$(e) {
  const t = Z$.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Ap(e, t, n = 1) {
  const [r, o] = J$(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return jS(a) ? parseFloat(a) : a;
  } else return wp(o) ? Ap(o, t, n + 1) : o;
}
function eI(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((o) => {
      const i = o.get();
      if (!wp(i)) return;
      const a = Ap(i, r);
      a && o.set(a);
    });
  for (const o in t) {
    const i = t[o];
    if (!wp(i)) continue;
    const a = Ap(i, r);
    !a || ((t[o] = a), n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const tI = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'x',
    'y',
    'translateX',
    'translateY',
  ]),
  nw = (e) => tI.has(e),
  nI = (e) => Object.keys(e).some(nw),
  z0 = (e) => e === li || e === ve,
  B0 = (e, t) => parseFloat(e.split(', ')[t]),
  F0 =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === 'none' || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/);
      if (o) return B0(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/);
        return i ? B0(i[1], e) : 0;
      }
    },
  rI = new Set(['x', 'y', 'z']),
  oI = qs.filter((e) => !rI.has(e));
function iI(e) {
  const t = [];
  return (
    oI.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const da = {
  width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: F0(4, 13),
  y: F0(5, 14),
};
da.translateX = da.x;
da.translateY = da.y;
const aI = (e, t, n) => {
    const r = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: a } = i,
      s = {};
    a === 'none' && t.setStaticValue('display', e.display || 'block'),
      n.forEach((u) => {
        s[u] = da[u](r, i);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(s[u]), (e[u] = da[u](l, i));
      }),
      e
    );
  },
  sI = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const o = Object.keys(t).filter(nw);
    let i = [],
      a = !1;
    const s = [];
    if (
      (o.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          f = za(c);
        const d = t[l];
        let m;
        if (zu(d)) {
          const v = d.length,
            x = d[0] === null ? 1 : 0;
          (c = d[x]), (f = za(c));
          for (let S = x; S < v && d[S] !== null; S++)
            m ? Ac(za(d[S]) === m) : (m = za(d[S]));
        } else m = za(d);
        if (f !== m)
          if (z0(f) && z0(m)) {
            const v = u.get();
            typeof v == 'string' && u.set(parseFloat(v)),
              typeof d == 'string'
                ? (t[l] = parseFloat(d))
                : Array.isArray(d) && m === ve && (t[l] = d.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            m != null &&
            m.transform &&
            (c === 0 || d === 0)
              ? c === 0
                ? u.set(m.transform(c))
                : (t[l] = f.transform(d))
              : (a || ((i = iI(e)), (a = !0)),
                s.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(d));
      }),
      s.length)
    ) {
      const l = s.indexOf('height') >= 0 ? window.pageYOffset : null,
        u = aI(t, e, s);
      return (
        i.length &&
          i.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        Oc && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function lI(e, t, n, r) {
  return nI(t) ? sI(e, t, n, r) : { target: t, transitionEnd: r };
}
const uI = (e, t, n, r) => {
    const o = eI(e, t, r);
    return (t = o.target), (r = o.transitionEnd), lI(e, t, n, r);
  },
  Np = { current: null },
  rw = { current: !1 };
function cI() {
  if (((rw.current = !0), !!Oc))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (Np.current = e.matches);
      e.addListener(t), t();
    } else Np.current = !1;
}
function dI(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o],
      a = n[o];
    if (un(i)) e.addValue(o, i), Hu(r) && r.add(o);
    else if (un(a)) e.addValue(o, ca(i, { owner: e })), Hu(r) && r.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, ca(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in n) t[o] === void 0 && e.removeValue(o);
  return t;
}
const V0 = new WeakMap(),
  ow = Object.keys(_s),
  fI = ow.length,
  H0 = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete',
  ],
  pI = gh.length;
class mI {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      visualState: i,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        !this.current ||
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => Ze.render(this.render, !1, !0));
    const { latestValues: s, renderState: l } = i;
    (this.latestValues = s),
      (this.baseTarget = { ...s }),
      (this.initialValues = n.initial ? { ...s } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.isControllingVariants = Mc(n)),
      (this.isVariantNode = Vb(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = Boolean(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      s[f] !== void 0 && un(d) && (d.set(s[f], !1), Hu(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      V0.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      rw.current || cI(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
          ? !0
          : Np.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    V0.delete(this.current),
      this.projection && this.projection.unmount(),
      kr(this.notifyUpdate),
      kr(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = si.has(t),
      o = n.on('change', (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && Ze.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on('renderRequest', this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, o, i) {
    let a, s;
    for (let l = 0; l < fI; l++) {
      const u = ow[l],
        {
          isEnabled: c,
          Feature: f,
          ProjectionNode: d,
          MeasureLayout: m,
        } = _s[u];
      d && (a = d),
        c(n) &&
          (!this.features[u] && f && (this.features[u] = new f(this)),
          m && (s = m));
    }
    if (!this.projection && a) {
      this.projection = new a(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: f,
        layoutScroll: d,
        layoutRoot: m,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: Boolean(c) || (f && Vi(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == 'string' ? u : 'both',
        initialPromotionConfig: i,
        layoutScroll: d,
        layoutRoot: m,
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : xt();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < H0.length; r++) {
      const o = H0[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t['on' + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    (this.prevMotionValues = dI(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < pI; r++) {
      const o = gh[r],
        i = this.props[o];
      (Ls(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = ca(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      o =
        typeof r == 'string' || typeof r == 'object'
          ? (n = Ph(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !un(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Ah()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class iw extends mI {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: o },
    i
  ) {
    let a = AM(r, t || {}, this);
    if ((o && (n && (n = o(n)), r && (r = o(r)), a && (a = o(a))), i)) {
      IM(this, r, a);
      const s = uI(this, r, a, n);
      (n = s.transitionEnd), (r = s.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function hI(e) {
  return window.getComputedStyle(e);
}
class vI extends iw {
  readValueFromInstance(t, n) {
    if (si.has(n)) {
      const r = Mh(n);
      return (r && r.default) || 0;
    } else {
      const r = hI(t),
        o = (Gb(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == 'string' ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return GS(t, n);
  }
  build(t, n, r, o) {
    xh(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Eh(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    un(t) &&
      (this.childSubscription = t.on('change', (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, o) {
    Jb(t, n, r, o);
  }
}
class gI extends iw {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (si.has(n)) {
      const r = Mh(n);
      return (r && r.default) || 0;
    }
    return (n = eS.has(n) ? n : Ch(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return xt();
  }
  scrapeMotionValuesFromProps(t, n) {
    return nS(t, n);
  }
  build(t, n, r, o) {
    Sh(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    tS(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = wh(t.tagName)), super.mount(t);
  }
}
const yI = (e, t) =>
    yh(e)
      ? new gI(t, { enableHardwareAcceleration: !1 })
      : new vI(t, { enableHardwareAcceleration: !0 }),
  xI = { layout: { ProjectionNode: tw, MeasureLayout: XS } },
  bI = { ...GM, ...mR, ...q$, ...xI },
  SI = wO((e, t) => tR(e, t, bI, yI));
var aw = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  U0 = de.createContext && de.createContext(aw),
  uo =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (uo =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        uo.apply(this, arguments)
      );
    },
  wI =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    };
function sw(e) {
  return (
    e &&
    e.map(function (t, n) {
      return de.createElement(t.tag, uo({ key: n }, t.attr), sw(t.child));
    })
  );
}
function ya(e) {
  return function (t) {
    return de.createElement(CI, uo({ attr: uo({}, e.attr) }, t), sw(e.child));
  };
}
function CI(e) {
  var t = function (n) {
    var r = e.attr,
      o = e.size,
      i = e.title,
      a = wI(e, ['attr', 'size', 'title']),
      s = o || n.size || '1em',
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + ' ' : '') + e.className),
      de.createElement(
        'svg',
        uo(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          a,
          {
            className: l,
            style: uo(uo({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        i && de.createElement('title', null, i),
        e.children
      )
    );
  };
  return U0 !== void 0
    ? de.createElement(U0.Consumer, null, function (n) {
        return t(n);
      })
    : t(aw);
}
function EI(e) {
  return ya({
    tag: 'svg',
    attr: { viewBox: '0 0 15 15', fill: 'none' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z',
          fill: 'currentColor',
        },
      },
    ],
  })(e);
}
function PI(e) {
  return ya({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24', fill: 'none' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z',
          fill: 'currentColor',
        },
      },
    ],
  })(e);
}
var TI = p.exports.createContext({});
const Nh = TI;
function Me() {
  return (
    (Me = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Me.apply(this, arguments)
  );
}
function lw(e) {
  if (Array.isArray(e)) return e;
}
function OI(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r,
      o,
      i,
      a,
      s = [],
      l = !0,
      u = !1;
    try {
      if (((i = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        l = !1;
      } else
        for (
          ;
          !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t);
          l = !0
        );
    } catch (c) {
      (u = !0), (o = c);
    } finally {
      try {
        if (!l && n.return != null && ((a = n.return()), Object(a) !== a))
          return;
      } finally {
        if (u) throw o;
      }
    }
    return s;
  }
}
function Lp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Lh(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Lp(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Lp(e, t);
  }
}
function uw() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function X(e, t) {
  return lw(e) || OI(e, t) || Lh(e, t) || uw();
}
function et(e) {
  return (
    (et =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    et(e)
  );
}
function RI(e, t) {
  if (et(e) !== 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (et(r) !== 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function cw(e) {
  var t = RI(e, 'string');
  return et(t) === 'symbol' ? t : String(t);
}
function fe(e, t, n) {
  return (
    (t = cw(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function MI(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Je(e, t) {
  if (e == null) return {};
  var n = MI(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]));
  }
  return n;
}
var dw = { exports: {} };
(function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (!!i) {
          var a = typeof i;
          if (a === 'string' || a === 'number') r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = n.apply(null, i);
              s && r.push(s);
            }
          } else if (a === 'object') {
            if (
              i.toString !== Object.prototype.toString &&
              !i.toString.toString().includes('[native code]')
            ) {
              r.push(i.toString());
              continue;
            }
            for (var l in i) t.call(i, l) && i[l] && r.push(l);
          }
        }
      }
      return r.join(' ');
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(dw);
const ge = dw.exports;
function Ft(e, t) {
  $I(e) && (e = '100%');
  var n = II(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  );
}
function Al(e) {
  return Math.min(1, Math.max(0, e));
}
function $I(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1;
}
function II(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1;
}
function fw(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Nl(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e;
}
function Ho(e) {
  return e.length === 1 ? '0' + e : String(e);
}
function kI(e, t, n) {
  return { r: Ft(e, 255) * 255, g: Ft(t, 255) * 255, b: Ft(n, 255) * 255 };
}
function W0(e, t, n) {
  (e = Ft(e, 255)), (t = Ft(t, 255)), (n = Ft(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    i = 0,
    a = 0,
    s = (r + o) / 2;
  if (r === o) (a = 0), (i = 0);
  else {
    var l = r - o;
    switch (((a = s > 0.5 ? l / (2 - r - o) : l / (r + o)), r)) {
      case e:
        i = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / l + 2;
        break;
      case n:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: a, l: s };
}
function of(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * (6 * n)
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function AI(e, t, n) {
  var r, o, i;
  if (((e = Ft(e, 360)), (t = Ft(t, 100)), (n = Ft(n, 100)), t === 0))
    (o = n), (i = n), (r = n);
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - a;
    (r = of(s, a, e + 1 / 3)), (o = of(s, a, e)), (i = of(s, a, e - 1 / 3));
  }
  return { r: r * 255, g: o * 255, b: i * 255 };
}
function _p(e, t, n) {
  (e = Ft(e, 255)), (t = Ft(t, 255)), (n = Ft(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    i = 0,
    a = r,
    s = r - o,
    l = r === 0 ? 0 : s / r;
  if (r === o) i = 0;
  else {
    switch (r) {
      case e:
        i = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / s + 2;
        break;
      case n:
        i = (e - t) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: l, v: a };
}
function NI(e, t, n) {
  (e = Ft(e, 360) * 6), (t = Ft(t, 100)), (n = Ft(n, 100));
  var r = Math.floor(e),
    o = e - r,
    i = n * (1 - t),
    a = n * (1 - o * t),
    s = n * (1 - (1 - o) * t),
    l = r % 6,
    u = [n, a, i, i, s, n][l],
    c = [s, n, n, a, i, i][l],
    f = [i, i, s, n, n, a][l];
  return { r: u * 255, g: c * 255, b: f * 255 };
}
function Dp(e, t, n, r) {
  var o = [
    Ho(Math.round(e).toString(16)),
    Ho(Math.round(t).toString(16)),
    Ho(Math.round(n).toString(16)),
  ];
  return r &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
    : o.join('');
}
function LI(e, t, n, r, o) {
  var i = [
    Ho(Math.round(e).toString(16)),
    Ho(Math.round(t).toString(16)),
    Ho(Math.round(n).toString(16)),
    Ho(_I(r)),
  ];
  return o &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1)) &&
    i[3].startsWith(i[3].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0)
    : i.join('');
}
function _I(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function K0(e) {
  return fn(e) / 255;
}
function fn(e) {
  return parseInt(e, 16);
}
function DI(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
}
var jp = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
};
function Ri(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    o = null,
    i = null,
    a = !1,
    s = !1;
  return (
    typeof e == 'string' && (e = BI(e)),
    typeof e == 'object' &&
      (vr(e.r) && vr(e.g) && vr(e.b)
        ? ((t = kI(e.r, e.g, e.b)),
          (a = !0),
          (s = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : vr(e.h) && vr(e.s) && vr(e.v)
        ? ((r = Nl(e.s)),
          (o = Nl(e.v)),
          (t = NI(e.h, r, o)),
          (a = !0),
          (s = 'hsv'))
        : vr(e.h) &&
          vr(e.s) &&
          vr(e.l) &&
          ((r = Nl(e.s)),
          (i = Nl(e.l)),
          (t = AI(e.h, r, i)),
          (a = !0),
          (s = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
    (n = fw(n)),
    {
      ok: a,
      format: e.format || s,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n,
    }
  );
}
var jI = '[-\\+]?\\d+%?',
  zI = '[-\\+]?\\d*\\.\\d+%?',
  Yr = '(?:'.concat(zI, ')|(?:').concat(jI, ')'),
  af = '[\\s|\\(]+('
    .concat(Yr, ')[,|\\s]+(')
    .concat(Yr, ')[,|\\s]+(')
    .concat(Yr, ')\\s*\\)?'),
  sf = '[\\s|\\(]+('
    .concat(Yr, ')[,|\\s]+(')
    .concat(Yr, ')[,|\\s]+(')
    .concat(Yr, ')[,|\\s]+(')
    .concat(Yr, ')\\s*\\)?'),
  Fn = {
    CSS_UNIT: new RegExp(Yr),
    rgb: new RegExp('rgb' + af),
    rgba: new RegExp('rgba' + sf),
    hsl: new RegExp('hsl' + af),
    hsla: new RegExp('hsla' + sf),
    hsv: new RegExp('hsv' + af),
    hsva: new RegExp('hsva' + sf),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function BI(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var t = !1;
  if (jp[e]) (e = jp[e]), (t = !0);
  else if (e === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
  var n = Fn.rgb.exec(e);
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = Fn.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = Fn.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = Fn.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = Fn.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = Fn.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = Fn.hex8.exec(e)),
                          n
                            ? {
                                r: fn(n[1]),
                                g: fn(n[2]),
                                b: fn(n[3]),
                                a: K0(n[4]),
                                format: t ? 'name' : 'hex8',
                              }
                            : ((n = Fn.hex6.exec(e)),
                              n
                                ? {
                                    r: fn(n[1]),
                                    g: fn(n[2]),
                                    b: fn(n[3]),
                                    format: t ? 'name' : 'hex',
                                  }
                                : ((n = Fn.hex4.exec(e)),
                                  n
                                    ? {
                                        r: fn(n[1] + n[1]),
                                        g: fn(n[2] + n[2]),
                                        b: fn(n[3] + n[3]),
                                        a: K0(n[4] + n[4]),
                                        format: t ? 'name' : 'hex8',
                                      }
                                    : ((n = Fn.hex3.exec(e)),
                                      n
                                        ? {
                                            r: fn(n[1] + n[1]),
                                            g: fn(n[2] + n[2]),
                                            b: fn(n[3] + n[3]),
                                            format: t ? 'name' : 'hex',
                                          }
                                        : !1)))))))));
}
function vr(e) {
  return Boolean(Fn.CSS_UNIT.exec(String(e)));
}
var Jt = (function () {
    function e(t, n) {
      t === void 0 && (t = ''), n === void 0 && (n = {});
      var r;
      if (t instanceof e) return t;
      typeof t == 'number' && (t = DI(t)), (this.originalInput = t);
      var o = Ri(t);
      (this.originalInput = t),
        (this.r = o.r),
        (this.g = o.g),
        (this.b = o.b),
        (this.a = o.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = (r = n.format) !== null && r !== void 0 ? r : o.format),
        (this.gradientType = n.gradientType),
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        (this.isValid = o.ok);
    }
    return (
      (e.prototype.isDark = function () {
        return this.getBrightness() < 128;
      }),
      (e.prototype.isLight = function () {
        return !this.isDark();
      }),
      (e.prototype.getBrightness = function () {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
      }),
      (e.prototype.getLuminance = function () {
        var t = this.toRgb(),
          n,
          r,
          o,
          i = t.r / 255,
          a = t.g / 255,
          s = t.b / 255;
        return (
          i <= 0.03928
            ? (n = i / 12.92)
            : (n = Math.pow((i + 0.055) / 1.055, 2.4)),
          a <= 0.03928
            ? (r = a / 12.92)
            : (r = Math.pow((a + 0.055) / 1.055, 2.4)),
          s <= 0.03928
            ? (o = s / 12.92)
            : (o = Math.pow((s + 0.055) / 1.055, 2.4)),
          0.2126 * n + 0.7152 * r + 0.0722 * o
        );
      }),
      (e.prototype.getAlpha = function () {
        return this.a;
      }),
      (e.prototype.setAlpha = function (t) {
        return (
          (this.a = fw(t)), (this.roundA = Math.round(100 * this.a) / 100), this
        );
      }),
      (e.prototype.isMonochrome = function () {
        var t = this.toHsl().s;
        return t === 0;
      }),
      (e.prototype.toHsv = function () {
        var t = _p(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
      }),
      (e.prototype.toHsvString = function () {
        var t = _p(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          o = Math.round(t.v * 100);
        return this.a === 1
          ? 'hsv('.concat(n, ', ').concat(r, '%, ').concat(o, '%)')
          : 'hsva('
              .concat(n, ', ')
              .concat(r, '%, ')
              .concat(o, '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toHsl = function () {
        var t = W0(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
      }),
      (e.prototype.toHslString = function () {
        var t = W0(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          o = Math.round(t.l * 100);
        return this.a === 1
          ? 'hsl('.concat(n, ', ').concat(r, '%, ').concat(o, '%)')
          : 'hsla('
              .concat(n, ', ')
              .concat(r, '%, ')
              .concat(o, '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toHex = function (t) {
        return t === void 0 && (t = !1), Dp(this.r, this.g, this.b, t);
      }),
      (e.prototype.toHexString = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex(t);
      }),
      (e.prototype.toHex8 = function (t) {
        return t === void 0 && (t = !1), LI(this.r, this.g, this.b, this.a, t);
      }),
      (e.prototype.toHex8String = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex8(t);
      }),
      (e.prototype.toHexShortString = function (t) {
        return (
          t === void 0 && (t = !1),
          this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
        );
      }),
      (e.prototype.toRgb = function () {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a,
        };
      }),
      (e.prototype.toRgbString = function () {
        var t = Math.round(this.r),
          n = Math.round(this.g),
          r = Math.round(this.b);
        return this.a === 1
          ? 'rgb('.concat(t, ', ').concat(n, ', ').concat(r, ')')
          : 'rgba('
              .concat(t, ', ')
              .concat(n, ', ')
              .concat(r, ', ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toPercentageRgb = function () {
        var t = function (n) {
          return ''.concat(Math.round(Ft(n, 255) * 100), '%');
        };
        return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
      }),
      (e.prototype.toPercentageRgbString = function () {
        var t = function (n) {
          return Math.round(Ft(n, 255) * 100);
        };
        return this.a === 1
          ? 'rgb('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%)')
          : 'rgba('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toName = function () {
        if (this.a === 0) return 'transparent';
        if (this.a < 1) return !1;
        for (
          var t = '#' + Dp(this.r, this.g, this.b, !1),
            n = 0,
            r = Object.entries(jp);
          n < r.length;
          n++
        ) {
          var o = r[n],
            i = o[0],
            a = o[1];
          if (t === a) return i;
        }
        return !1;
      }),
      (e.prototype.toString = function (t) {
        var n = Boolean(t);
        t = t ?? this.format;
        var r = !1,
          o = this.a < 1 && this.a >= 0,
          i = !n && o && (t.startsWith('hex') || t === 'name');
        return i
          ? t === 'name' && this.a === 0
            ? this.toName()
            : this.toRgbString()
          : (t === 'rgb' && (r = this.toRgbString()),
            t === 'prgb' && (r = this.toPercentageRgbString()),
            (t === 'hex' || t === 'hex6') && (r = this.toHexString()),
            t === 'hex3' && (r = this.toHexString(!0)),
            t === 'hex4' && (r = this.toHex8String(!0)),
            t === 'hex8' && (r = this.toHex8String()),
            t === 'name' && (r = this.toName()),
            t === 'hsl' && (r = this.toHslString()),
            t === 'hsv' && (r = this.toHsvString()),
            r || this.toHexString());
      }),
      (e.prototype.toNumber = function () {
        return (
          (Math.round(this.r) << 16) +
          (Math.round(this.g) << 8) +
          Math.round(this.b)
        );
      }),
      (e.prototype.clone = function () {
        return new e(this.toString());
      }),
      (e.prototype.lighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l += t / 100), (n.l = Al(n.l)), new e(n);
      }),
      (e.prototype.brighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toRgb();
        return (
          (n.r = Math.max(
            0,
            Math.min(255, n.r - Math.round(255 * -(t / 100)))
          )),
          (n.g = Math.max(
            0,
            Math.min(255, n.g - Math.round(255 * -(t / 100)))
          )),
          (n.b = Math.max(
            0,
            Math.min(255, n.b - Math.round(255 * -(t / 100)))
          )),
          new e(n)
        );
      }),
      (e.prototype.darken = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l -= t / 100), (n.l = Al(n.l)), new e(n);
      }),
      (e.prototype.tint = function (t) {
        return t === void 0 && (t = 10), this.mix('white', t);
      }),
      (e.prototype.shade = function (t) {
        return t === void 0 && (t = 10), this.mix('black', t);
      }),
      (e.prototype.desaturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s -= t / 100), (n.s = Al(n.s)), new e(n);
      }),
      (e.prototype.saturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s += t / 100), (n.s = Al(n.s)), new e(n);
      }),
      (e.prototype.greyscale = function () {
        return this.desaturate(100);
      }),
      (e.prototype.spin = function (t) {
        var n = this.toHsl(),
          r = (n.h + t) % 360;
        return (n.h = r < 0 ? 360 + r : r), new e(n);
      }),
      (e.prototype.mix = function (t, n) {
        n === void 0 && (n = 50);
        var r = this.toRgb(),
          o = new e(t).toRgb(),
          i = n / 100,
          a = {
            r: (o.r - r.r) * i + r.r,
            g: (o.g - r.g) * i + r.g,
            b: (o.b - r.b) * i + r.b,
            a: (o.a - r.a) * i + r.a,
          };
        return new e(a);
      }),
      (e.prototype.analogous = function (t, n) {
        t === void 0 && (t = 6), n === void 0 && (n = 30);
        var r = this.toHsl(),
          o = 360 / n,
          i = [this];
        for (r.h = (r.h - ((o * t) >> 1) + 720) % 360; --t; )
          (r.h = (r.h + o) % 360), i.push(new e(r));
        return i;
      }),
      (e.prototype.complement = function () {
        var t = this.toHsl();
        return (t.h = (t.h + 180) % 360), new e(t);
      }),
      (e.prototype.monochromatic = function (t) {
        t === void 0 && (t = 6);
        for (
          var n = this.toHsv(), r = n.h, o = n.s, i = n.v, a = [], s = 1 / t;
          t--;

        )
          a.push(new e({ h: r, s: o, v: i })), (i = (i + s) % 1);
        return a;
      }),
      (e.prototype.splitcomplement = function () {
        var t = this.toHsl(),
          n = t.h;
        return [
          this,
          new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
          new e({ h: (n + 216) % 360, s: t.s, l: t.l }),
        ];
      }),
      (e.prototype.onBackground = function (t) {
        var n = this.toRgb(),
          r = new e(t).toRgb(),
          o = n.a + r.a * (1 - n.a);
        return new e({
          r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
          g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
          b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
          a: o,
        });
      }),
      (e.prototype.triad = function () {
        return this.polyad(3);
      }),
      (e.prototype.tetrad = function () {
        return this.polyad(4);
      }),
      (e.prototype.polyad = function (t) {
        for (
          var n = this.toHsl(), r = n.h, o = [this], i = 360 / t, a = 1;
          a < t;
          a++
        )
          o.push(new e({ h: (r + a * i) % 360, s: n.s, l: n.l }));
        return o;
      }),
      (e.prototype.equals = function (t) {
        return this.toRgbString() === new e(t).toRgbString();
      }),
      e
    );
  })(),
  Ll = 2,
  G0 = 0.16,
  FI = 0.05,
  VI = 0.05,
  HI = 0.15,
  pw = 5,
  mw = 4,
  UI = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ];
function X0(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    o = _p(t, n, r);
  return { h: o.h * 360, s: o.s, v: o.v };
}
function _l(e) {
  var t = e.r,
    n = e.g,
    r = e.b;
  return '#'.concat(Dp(t, n, r, !1));
}
function WI(e, t, n) {
  var r = n / 100,
    o = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b,
    };
  return o;
}
function Q0(e, t, n) {
  var r;
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - Ll * t : Math.round(e.h) + Ll * t)
      : (r = n ? Math.round(e.h) + Ll * t : Math.round(e.h) - Ll * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  );
}
function Y0(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s;
  var r;
  return (
    n ? (r = e.s - G0 * t) : t === mw ? (r = e.s + G0) : (r = e.s + FI * t),
    r > 1 && (r = 1),
    n && t === pw && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  );
}
function q0(e, t, n) {
  var r;
  return (
    n ? (r = e.v + VI * t) : (r = e.v - HI * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  );
}
function ni(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = Ri(e),
      o = pw;
    o > 0;
    o -= 1
  ) {
    var i = X0(r),
      a = _l(Ri({ h: Q0(i, o, !0), s: Y0(i, o, !0), v: q0(i, o, !0) }));
    n.push(a);
  }
  n.push(_l(r));
  for (var s = 1; s <= mw; s += 1) {
    var l = X0(r),
      u = _l(Ri({ h: Q0(l, s), s: Y0(l, s), v: q0(l, s) }));
    n.push(u);
  }
  return t.theme === 'dark'
    ? UI.map(function (c) {
        var f = c.index,
          d = c.opacity,
          m = _l(WI(Ri(t.backgroundColor || '#141414'), Ri(n[f]), d * 100));
        return m;
      })
    : n;
}
var lf = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1677FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666',
  },
  ou = {},
  uf = {};
Object.keys(lf).forEach(function (e) {
  (ou[e] = ni(lf[e])),
    (ou[e].primary = ou[e][5]),
    (uf[e] = ni(lf[e], { theme: 'dark', backgroundColor: '#141414' })),
    (uf[e].primary = uf[e][5]);
});
var KI = ou.blue;
function Z0(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Z0(Object(n), !0).forEach(function (r) {
          fe(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Z0(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function cn() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  );
}
function GI(e, t) {
  if (!e) return !1;
  if (e.contains) return e.contains(t);
  for (var n = t; n; ) {
    if (n === e) return !0;
    n = n.parentNode;
  }
  return !1;
}
var J0 = 'data-rc-order',
  ey = 'data-rc-priority',
  XI = 'rc-util-key',
  zp = new Map();
function hw() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark;
  return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : XI;
}
function Nc(e) {
  if (e.attachTo) return e.attachTo;
  var t = document.querySelector('head');
  return t || document.body;
}
function QI(e) {
  return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append';
}
function vw(e) {
  return Array.from((zp.get(e) || e).children).filter(function (t) {
    return t.tagName === 'STYLE';
  });
}
function gw(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!cn()) return null;
  var n = t.csp,
    r = t.prepend,
    o = t.priority,
    i = o === void 0 ? 0 : o,
    a = QI(r),
    s = a === 'prependQueue',
    l = document.createElement('style');
  l.setAttribute(J0, a),
    s && i && l.setAttribute(ey, ''.concat(i)),
    n != null && n.nonce && (l.nonce = n == null ? void 0 : n.nonce),
    (l.innerHTML = e);
  var u = Nc(t),
    c = u.firstChild;
  if (r) {
    if (s) {
      var f = vw(u).filter(function (d) {
        if (!['prepend', 'prependQueue'].includes(d.getAttribute(J0)))
          return !1;
        var m = Number(d.getAttribute(ey) || 0);
        return i >= m;
      });
      if (f.length) return u.insertBefore(l, f[f.length - 1].nextSibling), l;
    }
    u.insertBefore(l, c);
  } else u.appendChild(l);
  return l;
}
function yw(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = Nc(t);
  return vw(n).find(function (r) {
    return r.getAttribute(hw(t)) === e;
  });
}
function Wu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = yw(e, t);
  if (n) {
    var r = Nc(t);
    r.removeChild(n);
  }
}
function YI(e, t) {
  var n = zp.get(e);
  if (!n || !GI(document, n)) {
    var r = gw('', t),
      o = r.parentNode;
    zp.set(e, o), e.removeChild(r);
  }
}
function fa(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = Nc(n);
  YI(r, n);
  var o = yw(t, n);
  if (o) {
    var i, a;
    if (
      (i = n.csp) !== null &&
      i !== void 0 &&
      i.nonce &&
      o.nonce !== ((a = n.csp) === null || a === void 0 ? void 0 : a.nonce)
    ) {
      var s;
      o.nonce = (s = n.csp) === null || s === void 0 ? void 0 : s.nonce;
    }
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var l = gw(e, n);
  return l.setAttribute(hw(n), t), l;
}
function xw(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0
    ? void 0
    : t.call(e);
}
function qI(e) {
  return xw(e) instanceof ShadowRoot;
}
function Ku(e) {
  return qI(e) ? xw(e) : null;
}
var Bp = {},
  ZI = function (t) {};
function JI(e, t) {}
function ek(e, t) {}
function tk() {
  Bp = {};
}
function bw(e, t, n) {
  !t && !Bp[n] && (e(!1, n), (Bp[n] = !0));
}
function ui(e, t) {
  bw(JI, e, t);
}
function nk(e, t) {
  bw(ek, e, t);
}
ui.preMessage = ZI;
ui.resetWarned = tk;
ui.noteOnce = nk;
function rk(e) {
  return e.replace(/-(.)/g, function (t, n) {
    return n.toUpperCase();
  });
}
function ok(e, t) {
  ui(e, '[@ant-design/icons] '.concat(t));
}
function ty(e) {
  return (
    et(e) === 'object' &&
    typeof e.name == 'string' &&
    typeof e.theme == 'string' &&
    (et(e.icon) === 'object' || typeof e.icon == 'function')
  );
}
function ny() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n];
    switch (n) {
      case 'class':
        (t.className = r), delete t.class;
        break;
      default:
        delete t[n], (t[rk(n)] = r);
    }
    return t;
  }, {});
}
function Fp(e, t, n) {
  return n
    ? de.createElement(
        e.tag,
        G(G({ key: t }, ny(e.attrs)), n),
        (e.children || []).map(function (r, o) {
          return Fp(r, ''.concat(t, '-').concat(e.tag, '-').concat(o));
        })
      )
    : de.createElement(
        e.tag,
        G({ key: t }, ny(e.attrs)),
        (e.children || []).map(function (r, o) {
          return Fp(r, ''.concat(t, '-').concat(e.tag, '-').concat(o));
        })
      );
}
function Sw(e) {
  return ni(e)[0];
}
function ww(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var ik = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  ak = function (t) {
    var n = p.exports.useContext(Nh),
      r = n.csp,
      o = n.prefixCls,
      i = ik;
    o && (i = i.replace(/anticon/g, o)),
      p.exports.useEffect(function () {
        var a = t.current,
          s = Ku(a);
        fa(i, '@ant-design-icons', { prepend: !0, csp: r, attachTo: s });
      }, []);
  },
  sk = [
    'icon',
    'className',
    'onClick',
    'style',
    'primaryColor',
    'secondaryColor',
  ],
  ps = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
function lk(e) {
  var t = e.primaryColor,
    n = e.secondaryColor;
  (ps.primaryColor = t),
    (ps.secondaryColor = n || Sw(t)),
    (ps.calculated = !!n);
}
function uk() {
  return G({}, ps);
}
var Lc = function (t) {
  var n = t.icon,
    r = t.className,
    o = t.onClick,
    i = t.style,
    a = t.primaryColor,
    s = t.secondaryColor,
    l = Je(t, sk),
    u = p.exports.useRef(),
    c = ps;
  if (
    (a && (c = { primaryColor: a, secondaryColor: s || Sw(a) }),
    ak(u),
    ok(ty(n), 'icon should be icon definiton, but got '.concat(n)),
    !ty(n))
  )
    return null;
  var f = n;
  return (
    f &&
      typeof f.icon == 'function' &&
      (f = G(G({}, f), {}, { icon: f.icon(c.primaryColor, c.secondaryColor) })),
    Fp(
      f.icon,
      'svg-'.concat(f.name),
      G(
        G(
          {
            className: r,
            onClick: o,
            style: i,
            'data-icon': f.name,
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          l
        ),
        {},
        { ref: u }
      )
    )
  );
};
Lc.displayName = 'IconReact';
Lc.getTwoToneColors = uk;
Lc.setTwoToneColors = lk;
const _h = Lc;
function Cw(e) {
  var t = ww(e),
    n = X(t, 2),
    r = n[0],
    o = n[1];
  return _h.setTwoToneColors({ primaryColor: r, secondaryColor: o });
}
function ck() {
  var e = _h.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var dk = [
  'className',
  'icon',
  'spin',
  'rotate',
  'tabIndex',
  'onClick',
  'twoToneColor',
];
Cw(KI.primary);
var _c = p.exports.forwardRef(function (e, t) {
  var n,
    r = e.className,
    o = e.icon,
    i = e.spin,
    a = e.rotate,
    s = e.tabIndex,
    l = e.onClick,
    u = e.twoToneColor,
    c = Je(e, dk),
    f = p.exports.useContext(Nh),
    d = f.prefixCls,
    m = d === void 0 ? 'anticon' : d,
    v = f.rootClassName,
    x = ge(
      v,
      m,
      ((n = {}),
      fe(n, ''.concat(m, '-').concat(o.name), !!o.name),
      fe(n, ''.concat(m, '-spin'), !!i || o.name === 'loading'),
      n),
      r
    ),
    S = s;
  S === void 0 && l && (S = -1);
  var y = a
      ? {
          msTransform: 'rotate('.concat(a, 'deg)'),
          transform: 'rotate('.concat(a, 'deg)'),
        }
      : void 0,
    h = ww(u),
    g = X(h, 2),
    b = g[0],
    C = g[1];
  return p.exports.createElement(
    'span',
    Me({ role: 'img', 'aria-label': o.name }, c, {
      ref: t,
      tabIndex: S,
      onClick: l,
      className: x,
    }),
    p.exports.createElement(_h, {
      icon: o,
      primaryColor: b,
      secondaryColor: C,
      style: y,
    })
  );
});
_c.displayName = 'AntdIcon';
_c.getTwoToneColor = ck;
_c.setTwoToneColor = Cw;
const xa = _c;
var fk = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z',
        },
      },
    ],
  },
  name: 'ellipsis',
  theme: 'outlined',
};
const pk = fk;
var mk = function (t, n) {
  return p.exports.createElement(xa, Me({}, t, { ref: n, icon: pk }));
};
const Ew = p.exports.forwardRef(mk);
var hk = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z',
        },
      },
    ],
  },
  name: 'loading',
  theme: 'outlined',
};
const vk = hk;
var gk = function (t, n) {
  return p.exports.createElement(xa, Me({}, t, { ref: n, icon: vk }));
};
const yk = p.exports.forwardRef(gk);
var xk = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z',
        },
      },
    ],
  },
  name: 'lock',
  theme: 'outlined',
};
const bk = xk;
var Sk = function (t, n) {
  return p.exports.createElement(xa, Me({}, t, { ref: n, icon: bk }));
};
const wk = p.exports.forwardRef(Sk);
var Ck = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z',
        },
      },
    ],
  },
  name: 'right',
  theme: 'outlined',
};
const Ek = Ck;
var Pk = function (t, n) {
  return p.exports.createElement(xa, Me({}, t, { ref: n, icon: Ek }));
};
const Tk = p.exports.forwardRef(Pk);
var Ok = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z',
        },
      },
    ],
  },
  name: 'setting',
  theme: 'outlined',
};
const Rk = Ok;
var Mk = function (t, n) {
  return p.exports.createElement(xa, Me({}, t, { ref: n, icon: Rk }));
};
const $k = p.exports.forwardRef(Mk);
var Ik = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z',
        },
      },
    ],
  },
  name: 'user',
  theme: 'outlined',
};
const kk = Ik;
var Ak = function (t, n) {
  return p.exports.createElement(xa, Me({}, t, { ref: n, icon: kk }));
};
const Pw = p.exports.forwardRef(Ak);
var Dc = { exports: {} },
  Ke = {};
var Dh = Symbol.for('react.element'),
  jh = Symbol.for('react.portal'),
  jc = Symbol.for('react.fragment'),
  zc = Symbol.for('react.strict_mode'),
  Bc = Symbol.for('react.profiler'),
  Fc = Symbol.for('react.provider'),
  Vc = Symbol.for('react.context'),
  Nk = Symbol.for('react.server_context'),
  Hc = Symbol.for('react.forward_ref'),
  Uc = Symbol.for('react.suspense'),
  Wc = Symbol.for('react.suspense_list'),
  Kc = Symbol.for('react.memo'),
  Gc = Symbol.for('react.lazy'),
  Lk = Symbol.for('react.offscreen'),
  Tw;
Tw = Symbol.for('react.module.reference');
function An(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Dh:
        switch (((e = e.type), e)) {
          case jc:
          case Bc:
          case zc:
          case Uc:
          case Wc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Nk:
              case Vc:
              case Hc:
              case Gc:
              case Kc:
              case Fc:
                return e;
              default:
                return t;
            }
        }
      case jh:
        return t;
    }
  }
}
Ke.ContextConsumer = Vc;
Ke.ContextProvider = Fc;
Ke.Element = Dh;
Ke.ForwardRef = Hc;
Ke.Fragment = jc;
Ke.Lazy = Gc;
Ke.Memo = Kc;
Ke.Portal = jh;
Ke.Profiler = Bc;
Ke.StrictMode = zc;
Ke.Suspense = Uc;
Ke.SuspenseList = Wc;
Ke.isAsyncMode = function () {
  return !1;
};
Ke.isConcurrentMode = function () {
  return !1;
};
Ke.isContextConsumer = function (e) {
  return An(e) === Vc;
};
Ke.isContextProvider = function (e) {
  return An(e) === Fc;
};
Ke.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Dh;
};
Ke.isForwardRef = function (e) {
  return An(e) === Hc;
};
Ke.isFragment = function (e) {
  return An(e) === jc;
};
Ke.isLazy = function (e) {
  return An(e) === Gc;
};
Ke.isMemo = function (e) {
  return An(e) === Kc;
};
Ke.isPortal = function (e) {
  return An(e) === jh;
};
Ke.isProfiler = function (e) {
  return An(e) === Bc;
};
Ke.isStrictMode = function (e) {
  return An(e) === zc;
};
Ke.isSuspense = function (e) {
  return An(e) === Uc;
};
Ke.isSuspenseList = function (e) {
  return An(e) === Wc;
};
Ke.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === jc ||
    e === Bc ||
    e === zc ||
    e === Uc ||
    e === Wc ||
    e === Lk ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Gc ||
        e.$$typeof === Kc ||
        e.$$typeof === Fc ||
        e.$$typeof === Vc ||
        e.$$typeof === Hc ||
        e.$$typeof === Tw ||
        e.getModuleId !== void 0))
  );
};
Ke.typeOf = An;
(function (e) {
  e.exports = Ke;
})(Dc);
function Xc(e, t, n) {
  var r = p.exports.useRef({});
  return (
    (!('value' in r.current) || n(r.current.condition, t)) &&
      ((r.current.value = e()), (r.current.condition = t)),
    r.current.value
  );
}
function zh(e, t) {
  typeof e == 'function'
    ? e(t)
    : et(e) === 'object' && e && 'current' in e && (e.current = t);
}
function ba() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t.filter(function (o) {
    return o;
  });
  return r.length <= 1
    ? r[0]
    : function (o) {
        t.forEach(function (i) {
          zh(i, o);
        });
      };
}
function tl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Xc(
    function () {
      return ba.apply(void 0, t);
    },
    t,
    function (r, o) {
      return (
        r.length !== o.length ||
        r.every(function (i, a) {
          return i !== o[a];
        })
      );
    }
  );
}
function So(e) {
  var t,
    n,
    r = Dc.exports.isMemo(e) ? e.type.type : e.type;
  return !(
    (typeof r == 'function' &&
      !((t = r.prototype) !== null && t !== void 0 && t.render)) ||
    (typeof e == 'function' &&
      !((n = e.prototype) !== null && n !== void 0 && n.render))
  );
}
function _k(e) {
  return !p.exports.isValidElement(e) || Dc.exports.isFragment(e) ? !1 : So(e);
}
function ri(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = [];
  return (
    de.Children.forEach(e, function (r) {
      (r == null && !t.keepEmpty) ||
        (Array.isArray(r)
          ? (n = n.concat(ri(r)))
          : Dc.exports.isFragment(r) && r.props
          ? (n = n.concat(ri(r.props.children, t)))
          : n.push(r));
    }),
    n
  );
}
function Gu(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function iu(e) {
  return Gu(e) ? e : e instanceof de.Component ? zb.findDOMNode(e) : null;
}
var Vp = p.exports.createContext(null);
function Dk(e) {
  var t = e.children,
    n = e.onBatchResize,
    r = p.exports.useRef(0),
    o = p.exports.useRef([]),
    i = p.exports.useContext(Vp),
    a = p.exports.useCallback(
      function (s, l, u) {
        r.current += 1;
        var c = r.current;
        o.current.push({ size: s, element: l, data: u }),
          Promise.resolve().then(function () {
            c === r.current && (n == null || n(o.current), (o.current = []));
          }),
          i == null || i(s, l, u);
      },
      [n, i]
    );
  return p.exports.createElement(Vp.Provider, { value: a }, t);
}
var Ow = (function () {
    if (typeof Map < 'u') return Map;
    function e(t, n) {
      var r = -1;
      return (
        t.some(function (o, i) {
          return o[0] === n ? ((r = i), !0) : !1;
        }),
        r
      );
    }
    return (function () {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, 'size', {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (n) {
          var r = e(this.__entries__, n),
            o = this.__entries__[r];
          return o && o[1];
        }),
        (t.prototype.set = function (n, r) {
          var o = e(this.__entries__, n);
          ~o ? (this.__entries__[o][1] = r) : this.__entries__.push([n, r]);
        }),
        (t.prototype.delete = function (n) {
          var r = this.__entries__,
            o = e(r, n);
          ~o && r.splice(o, 1);
        }),
        (t.prototype.has = function (n) {
          return !!~e(this.__entries__, n);
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function (n, r) {
          r === void 0 && (r = null);
          for (var o = 0, i = this.__entries__; o < i.length; o++) {
            var a = i[o];
            n.call(r, a[1], a[0]);
          }
        }),
        t
      );
    })();
  })(),
  Hp =
    typeof window < 'u' &&
    typeof document < 'u' &&
    window.document === document,
  Xu = (function () {
    return typeof global < 'u' && global.Math === Math
      ? global
      : typeof self < 'u' && self.Math === Math
      ? self
      : typeof window < 'u' && window.Math === Math
      ? window
      : Function('return this')();
  })(),
  jk = (function () {
    return typeof requestAnimationFrame == 'function'
      ? requestAnimationFrame.bind(Xu)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        };
  })(),
  zk = 2;
function Bk(e, t) {
  var n = !1,
    r = !1,
    o = 0;
  function i() {
    n && ((n = !1), e()), r && s();
  }
  function a() {
    jk(i);
  }
  function s() {
    var l = Date.now();
    if (n) {
      if (l - o < zk) return;
      r = !0;
    } else (n = !0), (r = !1), setTimeout(a, t);
    o = l;
  }
  return s;
}
var Fk = 20,
  Vk = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
  Hk = typeof MutationObserver < 'u',
  Uk = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = Bk(this.refresh.bind(this), Fk));
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (t) {
        var n = this.observers_,
          r = n.indexOf(t);
        ~r && n.splice(r, 1),
          !n.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        var t = this.updateObservers_();
        t && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (n) {
          return n.gatherActive(), n.hasActive();
        });
        return (
          t.forEach(function (n) {
            return n.broadcastActive();
          }),
          t.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        !Hp ||
          this.connected_ ||
          (document.addEventListener('transitionend', this.onTransitionEnd_),
          window.addEventListener('resize', this.refresh),
          Hk
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener('DOMSubtreeModified', this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        !Hp ||
          !this.connected_ ||
          (document.removeEventListener('transitionend', this.onTransitionEnd_),
          window.removeEventListener('resize', this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener('DOMSubtreeModified', this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var n = t.propertyName,
          r = n === void 0 ? '' : n,
          o = Vk.some(function (i) {
            return !!~r.indexOf(i);
          });
        o && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  Rw = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var o = r[n];
      Object.defineProperty(e, o, {
        value: t[o],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return e;
  },
  pa = function (e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || Xu;
  },
  Mw = Qc(0, 0, 0, 0);
function Qu(e) {
  return parseFloat(e) || 0;
}
function ry(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function (r, o) {
    var i = e['border-' + o + '-width'];
    return r + Qu(i);
  }, 0);
}
function Wk(e) {
  for (
    var t = ['top', 'right', 'bottom', 'left'], n = {}, r = 0, o = t;
    r < o.length;
    r++
  ) {
    var i = o[r],
      a = e['padding-' + i];
    n[i] = Qu(a);
  }
  return n;
}
function Kk(e) {
  var t = e.getBBox();
  return Qc(0, 0, t.width, t.height);
}
function Gk(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return Mw;
  var r = pa(e).getComputedStyle(e),
    o = Wk(r),
    i = o.left + o.right,
    a = o.top + o.bottom,
    s = Qu(r.width),
    l = Qu(r.height);
  if (
    (r.boxSizing === 'border-box' &&
      (Math.round(s + i) !== t && (s -= ry(r, 'left', 'right') + i),
      Math.round(l + a) !== n && (l -= ry(r, 'top', 'bottom') + a)),
    !Qk(e))
  ) {
    var u = Math.round(s + i) - t,
      c = Math.round(l + a) - n;
    Math.abs(u) !== 1 && (s -= u), Math.abs(c) !== 1 && (l -= c);
  }
  return Qc(o.left, o.top, s, l);
}
var Xk = (function () {
  return typeof SVGGraphicsElement < 'u'
    ? function (e) {
        return e instanceof pa(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof pa(e).SVGElement && typeof e.getBBox == 'function';
      };
})();
function Qk(e) {
  return e === pa(e).document.documentElement;
}
function Yk(e) {
  return Hp ? (Xk(e) ? Kk(e) : Gk(e)) : Mw;
}
function qk(e) {
  var t = e.x,
    n = e.y,
    r = e.width,
    o = e.height,
    i = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object,
    a = Object.create(i.prototype);
  return (
    Rw(a, {
      x: t,
      y: n,
      width: r,
      height: o,
      top: n,
      right: t + r,
      bottom: o + n,
      left: t,
    }),
    a
  );
}
function Qc(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var Zk = (function () {
    function e(t) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = Qc(0, 0, 0, 0)),
        (this.target = t);
    }
    return (
      (e.prototype.isActive = function () {
        var t = Yk(this.target);
        return (
          (this.contentRect_ = t),
          t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function () {
        var t = this.contentRect_;
        return (
          (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
        );
      }),
      e
    );
  })(),
  Jk = (function () {
    function e(t, n) {
      var r = qk(n);
      Rw(this, { target: t, contentRect: r });
    }
    return e;
  })(),
  eA = (function () {
    function e(t, n, r) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new Ow()),
        typeof t != 'function')
      )
        throw new TypeError(
          'The callback provided as parameter 1 is not a function.'
        );
      (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.');
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(t instanceof pa(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) ||
            (n.set(t, new Zk(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.');
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(t instanceof pa(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          !n.has(t) ||
            (n.delete(t), n.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var t = this;
        this.clearActive(),
          this.observations_.forEach(function (n) {
            n.isActive() && t.activeObservations_.push(n);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (!!this.hasActive()) {
          var t = this.callbackCtx_,
            n = this.activeObservations_.map(function (r) {
              return new Jk(r.target, r.broadcastRect());
            });
          this.callback_.call(t, n, t), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  $w = typeof WeakMap < 'u' ? new WeakMap() : new Ow(),
  Iw = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError('Cannot call a class as a function.');
      if (!arguments.length)
        throw new TypeError('1 argument required, but only 0 present.');
      var n = Uk.getInstance(),
        r = new eA(t, n, this);
      $w.set(this, r);
    }
    return e;
  })();
['observe', 'unobserve', 'disconnect'].forEach(function (e) {
  Iw.prototype[e] = function () {
    var t;
    return (t = $w.get(this))[e].apply(t, arguments);
  };
});
var tA = (function () {
    return typeof Xu.ResizeObserver < 'u' ? Xu.ResizeObserver : Iw;
  })(),
  qr = new Map();
function nA(e) {
  e.forEach(function (t) {
    var n,
      r = t.target;
    (n = qr.get(r)) === null ||
      n === void 0 ||
      n.forEach(function (o) {
        return o(r);
      });
  });
}
var kw = new tA(nA);
function rA(e, t) {
  qr.has(e) || (qr.set(e, new Set()), kw.observe(e)), qr.get(e).add(t);
}
function oA(e, t) {
  qr.has(e) &&
    (qr.get(e).delete(t), qr.get(e).size || (kw.unobserve(e), qr.delete(e)));
}
function wo(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function oy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, cw(r.key), r);
  }
}
function Co(e, t, n) {
  return (
    t && oy(e.prototype, t),
    n && oy(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function Up(e, t) {
  return (
    (Up = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Up(e, t)
  );
}
function Yc(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Up(e, t);
}
function Yu(e) {
  return (
    (Yu = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Yu(e)
  );
}
function iA() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Wp(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function aA(e, t) {
  if (t && (et(t) === 'object' || typeof t == 'function')) return t;
  if (t !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    );
  return Wp(e);
}
function qc(e) {
  var t = iA();
  return function () {
    var r = Yu(e),
      o;
    if (t) {
      var i = Yu(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return aA(this, o);
  };
}
var sA = (function (e) {
  Yc(n, e);
  var t = qc(n);
  function n() {
    return wo(this, n), t.apply(this, arguments);
  }
  return (
    Co(n, [
      {
        key: 'render',
        value: function () {
          return this.props.children;
        },
      },
    ]),
    n
  );
})(p.exports.Component);
function lA(e, t) {
  var n = e.children,
    r = e.disabled,
    o = p.exports.useRef(null),
    i = p.exports.useRef(null),
    a = p.exports.useContext(Vp),
    s = typeof n == 'function',
    l = s ? n(o) : n,
    u = p.exports.useRef({
      width: -1,
      height: -1,
      offsetWidth: -1,
      offsetHeight: -1,
    }),
    c = !s && p.exports.isValidElement(l) && So(l),
    f = c ? l.ref : null,
    d = tl(f, o),
    m = function () {
      var y;
      return (
        iu(o.current) ||
        (o.current && et(o.current) === 'object'
          ? iu(
              (y = o.current) === null || y === void 0
                ? void 0
                : y.nativeElement
            )
          : null) ||
        iu(i.current)
      );
    };
  p.exports.useImperativeHandle(t, function () {
    return m();
  });
  var v = p.exports.useRef(e);
  v.current = e;
  var x = p.exports.useCallback(function (S) {
    var y = v.current,
      h = y.onResize,
      g = y.data,
      b = S.getBoundingClientRect(),
      C = b.width,
      P = b.height,
      w = S.offsetWidth,
      T = S.offsetHeight,
      $ = Math.floor(C),
      N = Math.floor(P);
    if (
      u.current.width !== $ ||
      u.current.height !== N ||
      u.current.offsetWidth !== w ||
      u.current.offsetHeight !== T
    ) {
      var j = { width: $, height: N, offsetWidth: w, offsetHeight: T };
      u.current = j;
      var F = w === Math.round(C) ? C : w,
        H = T === Math.round(P) ? P : T,
        z = G(G({}, j), {}, { offsetWidth: F, offsetHeight: H });
      a == null || a(z, S, g),
        h &&
          Promise.resolve().then(function () {
            h(z, S);
          });
    }
  }, []);
  return (
    p.exports.useEffect(
      function () {
        var S = m();
        return (
          S && !r && rA(S, x),
          function () {
            return oA(S, x);
          }
        );
      },
      [o.current, r]
    ),
    p.exports.createElement(
      sA,
      { ref: i },
      c ? p.exports.cloneElement(l, { ref: d }) : l
    )
  );
}
var uA = p.exports.forwardRef(lA),
  cA = 'rc-observer-key';
function dA(e, t) {
  var n = e.children,
    r = typeof n == 'function' ? [n] : ri(n);
  return r.map(function (o, i) {
    var a = (o == null ? void 0 : o.key) || ''.concat(cA, '-').concat(i);
    return p.exports.createElement(
      uA,
      Me({}, e, { key: a, ref: i === 0 ? t : void 0 }),
      o
    );
  });
}
var nl = p.exports.forwardRef(dA);
nl.Collection = Dk;
function ci(e, t) {
  var n = G({}, e);
  return (
    Array.isArray(t) &&
      t.forEach(function (r) {
        delete n[r];
      }),
    n
  );
}
function fA(e) {
  if (Array.isArray(e)) return Lp(e);
}
function Aw(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function pA() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mt(e) {
  return fA(e) || Aw(e) || Lh(e) || pA();
}
var Nw = function (t) {
    return +setTimeout(t, 16);
  },
  Lw = function (t) {
    return clearTimeout(t);
  };
typeof window < 'u' &&
  'requestAnimationFrame' in window &&
  ((Nw = function (t) {
    return window.requestAnimationFrame(t);
  }),
  (Lw = function (t) {
    return window.cancelAnimationFrame(t);
  }));
var iy = 0,
  Bh = new Map();
function _w(e) {
  Bh.delete(e);
}
var Qt = function (t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  iy += 1;
  var r = iy;
  function o(i) {
    if (i === 0) _w(r), t();
    else {
      var a = Nw(function () {
        o(i - 1);
      });
      Bh.set(r, a);
    }
  }
  return o(n), r;
};
Qt.cancel = function (e) {
  var t = Bh.get(e);
  return _w(e), Lw(t);
};
function Fh(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
function Vh(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    r = new Set();
  function o(i, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      l = r.has(i);
    if ((ui(!l, 'Warning: There may be circular references'), l)) return !1;
    if (i === a) return !0;
    if (n && s > 1) return !1;
    r.add(i);
    var u = s + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(a) || i.length !== a.length) return !1;
      for (var c = 0; c < i.length; c++) if (!o(i[c], a[c], u)) return !1;
      return !0;
    }
    if (i && a && et(i) === 'object' && et(a) === 'object') {
      var f = Object.keys(i);
      return f.length !== Object.keys(a).length
        ? !1
        : f.every(function (d) {
            return o(i[d], a[d], u);
          });
    }
    return !1;
  }
  return o(e, t);
}
var ay = '%',
  mA = (function () {
    function e(t) {
      wo(this, e),
        fe(this, 'instanceId', void 0),
        fe(this, 'cache', new Map()),
        (this.instanceId = t);
    }
    return (
      Co(e, [
        {
          key: 'get',
          value: function (n) {
            return this.cache.get(n.join(ay)) || null;
          },
        },
        {
          key: 'update',
          value: function (n, r) {
            var o = n.join(ay),
              i = this.cache.get(o),
              a = r(i);
            a === null ? this.cache.delete(o) : this.cache.set(o, a);
          },
        },
      ]),
      e
    );
  })(),
  Kp = 'data-token-hash',
  Ko = 'data-css-hash',
  Ki = '__cssinjs_instance__';
function hA() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < 'u' && document.head && document.body) {
    var t = document.body.querySelectorAll('style['.concat(Ko, ']')) || [],
      n = document.head.firstChild;
    Array.from(t).forEach(function (o) {
      (o[Ki] = o[Ki] || e), o[Ki] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll('style['.concat(Ko, ']'))).forEach(
      function (o) {
        var i = o.getAttribute(Ko);
        if (r[i]) {
          if (o[Ki] === e) {
            var a;
            (a = o.parentNode) === null || a === void 0 || a.removeChild(o);
          }
        } else r[i] = !0;
      }
    );
  }
  return new mA(e);
}
var vA = p.exports.createContext({
  hashPriority: 'low',
  cache: hA(),
  defaultCache: !0,
});
const Hh = vA;
function gA(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var Uh = (function () {
  function e() {
    wo(this, e),
      fe(this, 'cache', void 0),
      fe(this, 'keys', void 0),
      fe(this, 'cacheCallTimes', void 0),
      (this.cache = new Map()),
      (this.keys = []),
      (this.cacheCallTimes = 0);
  }
  return (
    Co(e, [
      {
        key: 'size',
        value: function () {
          return this.keys.length;
        },
      },
      {
        key: 'internalGet',
        value: function (n) {
          var r,
            o,
            i =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            a = { map: this.cache };
          return (
            n.forEach(function (s) {
              if (!a) a = void 0;
              else {
                var l, u;
                a =
                  (l = a) === null ||
                  l === void 0 ||
                  (u = l.map) === null ||
                  u === void 0
                    ? void 0
                    : u.get(s);
              }
            }),
            (r = a) !== null &&
              r !== void 0 &&
              r.value &&
              i &&
              (a.value[1] = this.cacheCallTimes++),
            (o = a) === null || o === void 0 ? void 0 : o.value
          );
        },
      },
      {
        key: 'get',
        value: function (n) {
          var r;
          return (r = this.internalGet(n, !0)) === null || r === void 0
            ? void 0
            : r[0];
        },
      },
      {
        key: 'has',
        value: function (n) {
          return !!this.internalGet(n);
        },
      },
      {
        key: 'set',
        value: function (n, r) {
          var o = this;
          if (!this.has(n)) {
            if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
              var i = this.keys.reduce(
                  function (u, c) {
                    var f = X(u, 2),
                      d = f[1];
                    return o.internalGet(c)[1] < d
                      ? [c, o.internalGet(c)[1]]
                      : u;
                  },
                  [this.keys[0], this.cacheCallTimes]
                ),
                a = X(i, 1),
                s = a[0];
              this.delete(s);
            }
            this.keys.push(n);
          }
          var l = this.cache;
          n.forEach(function (u, c) {
            if (c === n.length - 1)
              l.set(u, { value: [r, o.cacheCallTimes++] });
            else {
              var f = l.get(u);
              f ? f.map || (f.map = new Map()) : l.set(u, { map: new Map() }),
                (l = l.get(u).map);
            }
          });
        },
      },
      {
        key: 'deleteByPath',
        value: function (n, r) {
          var o = n.get(r[0]);
          if (r.length === 1) {
            var i;
            return (
              o.map ? n.set(r[0], { map: o.map }) : n.delete(r[0]),
              (i = o.value) === null || i === void 0 ? void 0 : i[0]
            );
          }
          var a = this.deleteByPath(o.map, r.slice(1));
          return (!o.map || o.map.size === 0) && !o.value && n.delete(r[0]), a;
        },
      },
      {
        key: 'delete',
        value: function (n) {
          if (this.has(n))
            return (
              (this.keys = this.keys.filter(function (r) {
                return !gA(r, n);
              })),
              this.deleteByPath(this.cache, n)
            );
        },
      },
    ]),
    e
  );
})();
fe(Uh, 'MAX_CACHE_SIZE', 20);
fe(Uh, 'MAX_CACHE_OFFSET', 5);
var sy = 0,
  Dw = (function () {
    function e(t) {
      wo(this, e),
        fe(this, 'derivatives', void 0),
        fe(this, 'id', void 0),
        (this.derivatives = Array.isArray(t) ? t : [t]),
        (this.id = sy),
        t.length === 0 && (t.length > 0, void 0),
        (sy += 1);
    }
    return (
      Co(e, [
        {
          key: 'getDerivativeToken',
          value: function (n) {
            return this.derivatives.reduce(function (r, o) {
              return o(n, r);
            }, void 0);
          },
        },
      ]),
      e
    );
  })(),
  cf = new Uh();
function Gp(e) {
  var t = Array.isArray(e) ? e : [e];
  return cf.has(t) || cf.set(t, new Dw(t)), cf.get(t);
}
var yA = new WeakMap(),
  df = {};
function xA(e, t) {
  for (var n = yA, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, new WeakMap()), (n = n.get(o));
  }
  return n.has(df) || n.set(df, e()), n.get(df);
}
var ly = new WeakMap();
function qu(e) {
  var t = ly.get(e) || '';
  return (
    t ||
      (Object.keys(e).forEach(function (n) {
        var r = e[n];
        (t += n),
          r instanceof Dw
            ? (t += r.id)
            : r && et(r) === 'object'
            ? (t += qu(r))
            : (t += r);
      }),
      ly.set(e, t)),
    t
  );
}
function bA(e, t) {
  return Fh(''.concat(t, '_').concat(qu(e)));
}
var ms = 'random-'
    .concat(Date.now(), '-')
    .concat(Math.random())
    .replace(/\./g, ''),
  jw = '_bAmBoO_';
function SA(e, t, n) {
  if (cn()) {
    var r, o;
    fa(e, ms);
    var i = document.createElement('div');
    (i.style.position = 'fixed'),
      (i.style.left = '0'),
      (i.style.top = '0'),
      t == null || t(i),
      document.body.appendChild(i);
    var a = n
      ? n(i)
      : (r = getComputedStyle(i).content) === null || r === void 0
      ? void 0
      : r.includes(jw);
    return (
      (o = i.parentNode) === null || o === void 0 || o.removeChild(i), Wu(ms), a
    );
  }
  return !1;
}
var ff = void 0;
function wA() {
  return (
    ff === void 0 &&
      (ff = SA(
        '@layer '
          .concat(ms, ' { .')
          .concat(ms, ' { content: "')
          .concat(jw, '"!important; } }'),
        function (e) {
          e.className = ms;
        }
      )),
    ff
  );
}
var uy = cn() ? p.exports.useLayoutEffect : p.exports.useEffect,
  Xt = function (t, n) {
    var r = p.exports.useRef(!0);
    uy(function () {
      return t(r.current);
    }, n),
      uy(function () {
        return (
          (r.current = !1),
          function () {
            r.current = !0;
          }
        );
      }, []);
  },
  cy = function (t, n) {
    Xt(function (r) {
      if (!r) return t();
    }, n);
  },
  CA = G({}, Yo),
  dy = CA.useInsertionEffect,
  EA = function (t, n, r) {
    p.exports.useMemo(t, r),
      Xt(function () {
        return n(!0);
      }, r);
  },
  PA = dy
    ? function (e, t, n) {
        return dy(function () {
          return e(), t();
        }, n);
      }
    : EA;
const TA = PA;
var OA = G({}, Yo),
  RA = OA.useInsertionEffect,
  MA = function (t) {
    var n = [],
      r = !1;
    function o(i) {
      r || n.push(i);
    }
    return (
      p.exports.useEffect(function () {
        return (
          (r = !1),
          function () {
            (r = !0),
              n.length &&
                n.forEach(function (i) {
                  return i();
                });
          }
        );
      }, t),
      o
    );
  },
  $A = function () {
    return function (t) {
      t();
    };
  },
  IA = typeof RA < 'u' ? MA : $A;
const kA = IA;
function zw(e, t, n, r, o) {
  var i = p.exports.useContext(Hh),
    a = i.cache,
    s = [e].concat(Mt(t)),
    l = s.join('_'),
    u = kA([l]),
    c = function (v) {
      a.update(s, function (x) {
        var S = x || [],
          y = X(S, 2),
          h = y[0],
          g = h === void 0 ? 0 : h,
          b = y[1],
          C = b,
          P = C || n(),
          w = [g, P];
        return v ? v(w) : w;
      });
    };
  p.exports.useMemo(
    function () {
      c();
    },
    [l]
  );
  var f = a.get(s),
    d = f[1];
  return (
    TA(
      function () {
        o == null || o(d);
      },
      function (m) {
        return (
          c(function (v) {
            var x = X(v, 2),
              S = x[0],
              y = x[1];
            return m && S === 0 && (o == null || o(d)), [S + 1, y];
          }),
          function () {
            a.update(s, function (v) {
              var x = v || [],
                S = X(x, 2),
                y = S[0],
                h = y === void 0 ? 0 : y,
                g = S[1],
                b = h - 1;
              return b === 0
                ? (u(function () {
                    return r == null ? void 0 : r(g, !1);
                  }),
                  null)
                : [h - 1, g];
            });
          }
        );
      },
      [l]
    ),
    d
  );
}
var AA = {},
  NA = 'css',
  Do = new Map();
function LA(e) {
  Do.set(e, (Do.get(e) || 0) + 1);
}
function _A(e, t) {
  if (typeof document < 'u') {
    var n = document.querySelectorAll(
      'style['.concat(Kp, '="').concat(e, '"]')
    );
    n.forEach(function (r) {
      if (r[Ki] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var DA = 0;
function jA(e, t) {
  Do.set(e, (Do.get(e) || 0) - 1);
  var n = Array.from(Do.keys()),
    r = n.filter(function (o) {
      var i = Do.get(o) || 0;
      return i <= 0;
    });
  n.length - r.length > DA &&
    r.forEach(function (o) {
      _A(o, t), Do.delete(o);
    });
}
var zA = function (t, n, r, o) {
  var i = r.getDerivativeToken(t),
    a = G(G({}, i), n);
  return o && (a = o(a)), a;
};
function BA(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = p.exports.useContext(Hh),
    o = r.cache.instanceId,
    i = n.salt,
    a = i === void 0 ? '' : i,
    s = n.override,
    l = s === void 0 ? AA : s,
    u = n.formatToken,
    c = n.getComputedToken,
    f = xA(function () {
      return Object.assign.apply(Object, [{}].concat(Mt(t)));
    }, t),
    d = qu(f),
    m = qu(l),
    v = zw(
      'token',
      [a, e.id, d, m],
      function () {
        var x = c ? c(f, l, e) : zA(f, l, e, u),
          S = bA(x, a);
        (x._tokenKey = S), LA(S);
        var y = ''.concat(NA, '-').concat(Fh(S));
        return (x._hashId = y), [x, y];
      },
      function (x) {
        jA(x[0]._tokenKey, o);
      }
    );
  return v;
}
var FA = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Bw = 'comm',
  Fw = 'rule',
  Vw = 'decl',
  VA = '@import',
  HA = '@keyframes',
  UA = '@layer',
  WA = Math.abs,
  Wh = String.fromCharCode;
function Hw(e) {
  return e.trim();
}
function au(e, t, n) {
  return e.replace(t, n);
}
function KA(e, t) {
  return e.indexOf(t);
}
function js(e, t) {
  return e.charCodeAt(t) | 0;
}
function zs(e, t, n) {
  return e.slice(t, n);
}
function br(e) {
  return e.length;
}
function GA(e) {
  return e.length;
}
function Dl(e, t) {
  return t.push(e), e;
}
var Zc = 1,
  ma = 1,
  Uw = 0,
  In = 0,
  bt = 0,
  Sa = '';
function Kh(e, t, n, r, o, i, a, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Zc,
    column: ma,
    length: a,
    return: '',
    siblings: s,
  };
}
function XA() {
  return bt;
}
function QA() {
  return (
    (bt = In > 0 ? js(Sa, --In) : 0), ma--, bt === 10 && ((ma = 1), Zc--), bt
  );
}
function Xn() {
  return (
    (bt = In < Uw ? js(Sa, In++) : 0), ma++, bt === 10 && ((ma = 1), Zc++), bt
  );
}
function Go() {
  return js(Sa, In);
}
function su() {
  return In;
}
function Jc(e, t) {
  return zs(Sa, e, t);
}
function Xp(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function YA(e) {
  return (Zc = ma = 1), (Uw = br((Sa = e))), (In = 0), [];
}
function qA(e) {
  return (Sa = ''), e;
}
function pf(e) {
  return Hw(Jc(In - 1, Qp(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ZA(e) {
  for (; (bt = Go()) && bt < 33; ) Xn();
  return Xp(e) > 2 || Xp(bt) > 3 ? '' : ' ';
}
function JA(e, t) {
  for (
    ;
    --t &&
    Xn() &&
    !(bt < 48 || bt > 102 || (bt > 57 && bt < 65) || (bt > 70 && bt < 97));

  );
  return Jc(e, su() + (t < 6 && Go() == 32 && Xn() == 32));
}
function Qp(e) {
  for (; Xn(); )
    switch (bt) {
      case e:
        return In;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Qp(bt);
        break;
      case 40:
        e === 41 && Qp(e);
        break;
      case 92:
        Xn();
        break;
    }
  return In;
}
function eN(e, t) {
  for (; Xn() && e + bt !== 47 + 10; )
    if (e + bt === 42 + 42 && Go() === 47) break;
  return '/*' + Jc(t, In - 1) + '*' + Wh(e === 47 ? e : Xn());
}
function tN(e) {
  for (; !Xp(Go()); ) Xn();
  return Jc(e, In);
}
function nN(e) {
  return qA(lu('', null, null, null, [''], (e = YA(e)), 0, [0], e));
}
function lu(e, t, n, r, o, i, a, s, l) {
  for (
    var u = 0,
      c = 0,
      f = a,
      d = 0,
      m = 0,
      v = 0,
      x = 1,
      S = 1,
      y = 1,
      h = 0,
      g = '',
      b = o,
      C = i,
      P = r,
      w = g;
    S;

  )
    switch (((v = h), (h = Xn()))) {
      case 40:
        if (v != 108 && js(w, f - 1) == 58) {
          KA((w += au(pf(h), '&', '&\f')), '&\f') != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += pf(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += ZA(v);
        break;
      case 92:
        w += JA(su() - 1, 7);
        continue;
      case 47:
        switch (Go()) {
          case 42:
          case 47:
            Dl(rN(eN(Xn(), su()), t, n, l), l);
            break;
          default:
            w += '/';
        }
        break;
      case 123 * x:
        s[u++] = br(w) * y;
      case 125 * x:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            y == -1 && (w = au(w, /\f/g, '')),
              m > 0 &&
                br(w) - f &&
                Dl(
                  m > 32
                    ? py(w + ';', r, n, f - 1, l)
                    : py(au(w, ' ', '') + ';', r, n, f - 2, l),
                  l
                );
            break;
          case 59:
            w += ';';
          default:
            if (
              (Dl(
                (P = fy(w, t, n, u, c, o, s, g, (b = []), (C = []), f, i)),
                i
              ),
              h === 123)
            )
              if (c === 0) lu(w, t, P, P, b, i, f, s, C);
              else
                switch (d === 99 && js(w, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    lu(
                      e,
                      P,
                      P,
                      r && Dl(fy(e, P, P, 0, 0, o, s, g, o, (b = []), f, C), C),
                      o,
                      C,
                      f,
                      s,
                      r ? b : C
                    );
                    break;
                  default:
                    lu(w, P, P, P, [''], C, 0, s, C);
                }
        }
        (u = c = m = 0), (x = y = 1), (g = w = ''), (f = a);
        break;
      case 58:
        (f = 1 + br(w)), (m = v);
      default:
        if (x < 1) {
          if (h == 123) --x;
          else if (h == 125 && x++ == 0 && QA() == 125) continue;
        }
        switch (((w += Wh(h)), h * x)) {
          case 38:
            y = c > 0 ? 1 : ((w += '\f'), -1);
            break;
          case 44:
            (s[u++] = (br(w) - 1) * y), (y = 1);
            break;
          case 64:
            Go() === 45 && (w += pf(Xn())),
              (d = Go()),
              (c = f = br((g = w += tN(su())))),
              h++;
            break;
          case 45:
            v === 45 && br(w) == 2 && (x = 0);
        }
    }
  return i;
}
function fy(e, t, n, r, o, i, a, s, l, u, c, f) {
  for (
    var d = o - 1, m = o === 0 ? i : [''], v = GA(m), x = 0, S = 0, y = 0;
    x < r;
    ++x
  )
    for (var h = 0, g = zs(e, d + 1, (d = WA((S = a[x])))), b = e; h < v; ++h)
      (b = Hw(S > 0 ? m[h] + ' ' + g : au(g, /&\f/g, m[h]))) && (l[y++] = b);
  return Kh(e, t, n, o === 0 ? Fw : s, l, u, c, f);
}
function rN(e, t, n, r) {
  return Kh(e, t, n, Bw, Wh(XA()), zs(e, 2, -2), 0, r);
}
function py(e, t, n, r, o) {
  return Kh(e, t, n, Vw, zs(e, 0, r), zs(e, r + 1, -1), r, o);
}
function Yp(e, t) {
  for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || '';
  return n;
}
function oN(e, t, n, r) {
  switch (e.type) {
    case UA:
      if (e.children.length) break;
    case VA:
    case Vw:
      return (e.return = e.return || e.value);
    case Bw:
      return '';
    case HA:
      return (e.return = e.value + '{' + Yp(e.children, r) + '}');
    case Fw:
      if (!br((e.value = e.props.join(',')))) return '';
  }
  return br((n = Yp(e.children, r)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}
var my = 'data-ant-cssinjs-cache-path',
  Ww = '_FILE_STYLE__',
  Xo,
  Kw = !0;
function iN() {
  if (!Xo && ((Xo = {}), cn())) {
    var e = document.createElement('div');
    (e.className = my),
      (e.style.position = 'fixed'),
      (e.style.visibility = 'hidden'),
      (e.style.top = '-9999px'),
      document.body.appendChild(e);
    var t = getComputedStyle(e).content || '';
    (t = t.replace(/^"/, '').replace(/"$/, '')),
      t.split(';').forEach(function (o) {
        var i = o.split(':'),
          a = X(i, 2),
          s = a[0],
          l = a[1];
        Xo[s] = l;
      });
    var n = document.querySelector('style['.concat(my, ']'));
    if (n) {
      var r;
      (Kw = !1),
        (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function aN(e) {
  return iN(), !!Xo[e];
}
function sN(e) {
  var t = Xo[e],
    n = null;
  if (t && cn())
    if (Kw) n = Ww;
    else {
      var r = document.querySelector(
        'style['.concat(Ko, '="').concat(Xo[e], '"]')
      );
      r ? (n = r.innerHTML) : delete Xo[e];
    }
  return [n, t];
}
var hy = cn(),
  lN = '_skip_check_',
  Gw = '_multi_value_';
function vy(e) {
  var t = Yp(nN(e), oN);
  return t.replace(/\{%%%\:[^;];}/g, ';');
}
function uN(e) {
  return et(e) === 'object' && e && (lN in e || Gw in e);
}
function cN(e, t, n) {
  if (!t) return e;
  var r = '.'.concat(t),
    o = n === 'low' ? ':where('.concat(r, ')') : r,
    i = e.split(',').map(function (a) {
      var s,
        l = a.trim().split(/\s+/),
        u = l[0] || '',
        c =
          ((s = u.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) ||
          '';
      return (
        (u = ''.concat(c).concat(o).concat(u.slice(c.length))),
        [u].concat(Mt(l.slice(1))).join(' ')
      );
    });
  return i.join(',');
}
var dN = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { root: !0, parentSelectors: [] },
    o = r.root,
    i = r.injectHash,
    a = r.parentSelectors,
    s = n.hashId,
    l = n.layer;
  n.path;
  var u = n.hashPriority,
    c = n.transformers,
    f = c === void 0 ? [] : c;
  n.linters;
  var d = '',
    m = {};
  function v(g) {
    var b = g.getName(s);
    if (!m[b]) {
      var C = e(g.style, n, { root: !1, parentSelectors: a }),
        P = X(C, 1),
        w = P[0];
      m[b] = '@keyframes '.concat(g.getName(s)).concat(w);
    }
  }
  function x(g) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return (
      g.forEach(function (C) {
        Array.isArray(C) ? x(C, b) : C && b.push(C);
      }),
      b
    );
  }
  var S = x(Array.isArray(t) ? t : [t]);
  if (
    (S.forEach(function (g) {
      var b = typeof g == 'string' && !o ? {} : g;
      if (typeof b == 'string')
        d += ''.concat(
          b,
          `
`
        );
      else if (b._keyframe) v(b);
      else {
        var C = f.reduce(function (P, w) {
          var T;
          return (
            (w == null || (T = w.visit) === null || T === void 0
              ? void 0
              : T.call(w, P)) || P
          );
        }, b);
        Object.keys(C).forEach(function (P) {
          var w = C[P];
          if (
            et(w) === 'object' &&
            w &&
            (P !== 'animationName' || !w._keyframe) &&
            !uN(w)
          ) {
            var T = !1,
              $ = P.trim(),
              N = !1;
            (o || i) && s
              ? $.startsWith('@')
                ? (T = !0)
                : ($ = cN(P, s, u))
              : o && !s && ($ === '&' || $ === '') && (($ = ''), (N = !0));
            var j = e(w, n, {
                root: N,
                injectHash: T,
                parentSelectors: [].concat(Mt(a), [$]),
              }),
              F = X(j, 2),
              H = F[0],
              z = F[1];
            (m = G(G({}, m), z)), (d += ''.concat($).concat(H));
          } else {
            let E = function (k, I) {
              var L = k.replace(/[A-Z]/g, function (J) {
                  return '-'.concat(J.toLowerCase());
                }),
                B = I;
              !FA[k] &&
                typeof B == 'number' &&
                B !== 0 &&
                (B = ''.concat(B, 'px')),
                k === 'animationName' &&
                  I !== null &&
                  I !== void 0 &&
                  I._keyframe &&
                  (v(I), (B = I.getName(s))),
                (d += ''.concat(L, ':').concat(B, ';'));
            };
            var O = E,
              V,
              R =
                (V = w == null ? void 0 : w.value) !== null && V !== void 0
                  ? V
                  : w;
            et(w) === 'object' &&
            w !== null &&
            w !== void 0 &&
            w[Gw] &&
            Array.isArray(R)
              ? R.forEach(function (k) {
                  E(P, k);
                })
              : E(P, R);
          }
        });
      }
    }),
    !o)
  )
    d = '{'.concat(d, '}');
  else if (l && wA()) {
    var y = l.split(','),
      h = y[y.length - 1].trim();
    (d = '@layer '.concat(h, ' {').concat(d, '}')),
      y.length > 1 && (d = '@layer '.concat(l, '{%%%:%}').concat(d));
  }
  return [d, m];
};
function fN(e, t) {
  return Fh(''.concat(e.join('%')).concat(t));
}
function pN() {
  return null;
}
function qp(e, t) {
  var n = e.token,
    r = e.path,
    o = e.hashId,
    i = e.layer,
    a = e.nonce,
    s = e.clientOnly,
    l = e.order,
    u = l === void 0 ? 0 : l,
    c = p.exports.useContext(Hh),
    f = c.autoClear;
  c.mock;
  var d = c.defaultCache,
    m = c.hashPriority,
    v = c.container,
    x = c.ssrInline,
    S = c.transformers,
    y = c.linters,
    h = c.cache,
    g = n._tokenKey,
    b = [g].concat(Mt(r)),
    C = hy,
    P = zw(
      'style',
      b,
      function () {
        var j = b.join('|');
        if (aN(j)) {
          var F = sN(j),
            H = X(F, 2),
            z = H[0],
            V = H[1];
          if (z) return [z, g, V, {}, s, u];
        }
        var R = t(),
          O = dN(R, {
            hashId: o,
            hashPriority: m,
            layer: i,
            path: r.join('-'),
            transformers: S,
            linters: y,
          }),
          E = X(O, 2),
          k = E[0],
          I = E[1],
          L = vy(k),
          B = fN(b, L);
        return [L, g, B, I, s, u];
      },
      function (j, F) {
        var H = X(j, 3),
          z = H[2];
        (F || f) && hy && Wu(z, { mark: Ko });
      },
      function (j) {
        var F = X(j, 4),
          H = F[0];
        F[1];
        var z = F[2],
          V = F[3];
        if (C && H !== Ww) {
          var R = { mark: Ko, prepend: 'queue', attachTo: v, priority: u },
            O = typeof a == 'function' ? a() : a;
          O && (R.csp = { nonce: O });
          var E = fa(H, z, R);
          (E[Ki] = h.instanceId),
            E.setAttribute(Kp, g),
            Object.keys(V).forEach(function (k) {
              fa(vy(V[k]), '_effect-'.concat(k), R);
            });
        }
      }
    ),
    w = X(P, 3),
    T = w[0],
    $ = w[1],
    N = w[2];
  return function (j) {
    var F;
    if (!x || C || !d) F = p.exports.createElement(pN, null);
    else {
      var H;
      F = p.exports.createElement(
        'style',
        Me({}, ((H = {}), fe(H, Kp, $), fe(H, Ko, N), H), {
          dangerouslySetInnerHTML: { __html: T },
        })
      );
    }
    return p.exports.createElement(p.exports.Fragment, null, F, j);
  };
}
var Xe = (function () {
  function e(t, n) {
    wo(this, e),
      fe(this, 'name', void 0),
      fe(this, 'style', void 0),
      fe(this, '_keyframe', !0),
      (this.name = t),
      (this.style = n);
  }
  return (
    Co(e, [
      {
        key: 'getName',
        value: function () {
          var n =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
          return n ? ''.concat(n, '-').concat(this.name) : this.name;
        },
      },
    ]),
    e
  );
})();
function bi(e) {
  return (e.notSplit = !0), e;
}
bi(['borderTop', 'borderBottom']),
  bi(['borderTop']),
  bi(['borderBottom']),
  bi(['borderLeft', 'borderRight']),
  bi(['borderLeft']),
  bi(['borderRight']);
function mN(e) {
  return lw(e) || Aw(e) || Lh(e) || uw();
}
function Zp(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null) return;
    n = n[t[r]];
  }
  return n;
}
function Xw(e, t, n, r) {
  if (!t.length) return n;
  var o = mN(t),
    i = o[0],
    a = o.slice(1),
    s;
  return (
    !e && typeof i == 'number'
      ? (s = [])
      : Array.isArray(e)
      ? (s = Mt(e))
      : (s = G({}, e)),
    r && n === void 0 && a.length === 1
      ? delete s[i][a[0]]
      : (s[i] = Xw(s[i], a, n, r)),
    s
  );
}
function mf(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Zp(e, t.slice(0, -1))
    ? e
    : Xw(e, t, n, r);
}
function hN(e) {
  return (
    et(e) === 'object' &&
    e !== null &&
    Object.getPrototypeOf(e) === Object.prototype
  );
}
function gy(e) {
  return Array.isArray(e) ? [] : {};
}
var vN = typeof Reflect > 'u' ? Object.keys : Reflect.ownKeys;
function gN() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = gy(t[0]);
  return (
    t.forEach(function (o) {
      function i(a, s) {
        var l = new Set(s),
          u = Zp(o, a),
          c = Array.isArray(u);
        if (c || hN(u)) {
          if (!l.has(u)) {
            l.add(u);
            var f = Zp(r, a);
            c
              ? (r = mf(r, a, []))
              : (!f || et(f) !== 'object') && (r = mf(r, a, gy(u))),
              vN(u).forEach(function (d) {
                i([].concat(Mt(a), [d]), l);
              });
          }
        } else r = mf(r, a, u);
      }
      i([]);
    }),
    r
  );
}
function yN() {}
const xN = p.exports.createContext({}),
  Qw = () => {
    const e = () => {};
    return (e.deprecated = yN), e;
  },
  bN = p.exports.createContext(void 0),
  SN = {
    items_per_page: '/ page',
    jump_to: 'Go to',
    jump_to_confirm: 'confirm',
    page: 'Page',
    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
    page_size: 'Page Size',
  };
var wN = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'OK',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: !0,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century',
};
const CN = {
    placeholder: 'Select time',
    rangePlaceholder: ['Start time', 'End time'],
  },
  Yw = CN,
  EN = {
    lang: Object.assign(
      {
        placeholder: 'Select date',
        yearPlaceholder: 'Select year',
        quarterPlaceholder: 'Select quarter',
        monthPlaceholder: 'Select month',
        weekPlaceholder: 'Select week',
        rangePlaceholder: ['Start date', 'End date'],
        rangeYearPlaceholder: ['Start year', 'End year'],
        rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
        rangeMonthPlaceholder: ['Start month', 'End month'],
        rangeWeekPlaceholder: ['Start week', 'End week'],
      },
      wN
    ),
    timePickerLocale: Object.assign({}, Yw),
  },
  yy = EN,
  dn = '${label} is not a valid ${type}',
  PN = {
    locale: 'en',
    Pagination: SN,
    DatePicker: yy,
    TimePicker: Yw,
    Calendar: yy,
    global: { placeholder: 'Please select' },
    Table: {
      filterTitle: 'Filter menu',
      filterConfirm: 'OK',
      filterReset: 'Reset',
      filterEmptyText: 'No filters',
      filterCheckall: 'Select all items',
      filterSearchPlaceholder: 'Search in filters',
      emptyText: 'No data',
      selectAll: 'Select current page',
      selectInvert: 'Invert current page',
      selectNone: 'Clear all data',
      selectionAll: 'Select all data',
      sortTitle: 'Sort',
      expand: 'Expand row',
      collapse: 'Collapse row',
      triggerDesc: 'Click to sort descending',
      triggerAsc: 'Click to sort ascending',
      cancelSort: 'Click to cancel sorting',
    },
    Tour: { Next: 'Next', Previous: 'Previous', Finish: 'Finish' },
    Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
    Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Search here',
      itemUnit: 'item',
      itemsUnit: 'items',
      remove: 'Remove',
      selectCurrent: 'Select current page',
      removeCurrent: 'Remove current page',
      selectAll: 'Select all data',
      removeAll: 'Remove all data',
      selectInvert: 'Invert current page',
    },
    Upload: {
      uploading: 'Uploading...',
      removeFile: 'Remove file',
      uploadError: 'Upload error',
      previewFile: 'Preview file',
      downloadFile: 'Download file',
    },
    Empty: { description: 'No data' },
    Icon: { icon: 'icon' },
    Text: { edit: 'Edit', copy: 'Copy', copied: 'Copied', expand: 'Expand' },
    PageHeader: { back: 'Back' },
    Form: {
      optional: '(optional)',
      defaultValidateMessages: {
        default: 'Field validation error for ${label}',
        required: 'Please enter ${label}',
        enum: '${label} must be one of [${enum}]',
        whitespace: '${label} cannot be a blank character',
        date: {
          format: '${label} date format is invalid',
          parse: '${label} cannot be converted to a date',
          invalid: '${label} is an invalid date',
        },
        types: {
          string: dn,
          method: dn,
          array: dn,
          object: dn,
          number: dn,
          date: dn,
          boolean: dn,
          integer: dn,
          float: dn,
          regexp: dn,
          email: dn,
          url: dn,
          hex: dn,
        },
        string: {
          len: '${label} must be ${len} characters',
          min: '${label} must be at least ${min} characters',
          max: '${label} must be up to ${max} characters',
          range: '${label} must be between ${min}-${max} characters',
        },
        number: {
          len: '${label} must be equal to ${len}',
          min: '${label} must be minimum ${min}',
          max: '${label} must be maximum ${max}',
          range: '${label} must be between ${min}-${max}',
        },
        array: {
          len: 'Must be ${len} ${label}',
          min: 'At least ${min} ${label}',
          max: 'At most ${max} ${label}',
          range: 'The amount of ${label} must be between ${min}-${max}',
        },
        pattern: { mismatch: '${label} does not match the pattern ${pattern}' },
      },
    },
    Image: { preview: 'Preview' },
    QRCode: { expired: 'QR code expired', refresh: 'Refresh' },
    ColorPicker: { presetEmpty: 'Empty' },
  },
  ed = PN;
Object.assign({}, ed.Modal);
let uu = [];
const xy = () =>
  uu.reduce((e, t) => Object.assign(Object.assign({}, e), t), ed.Modal);
function TN(e) {
  if (e) {
    const t = Object.assign({}, e);
    return (
      uu.push(t),
      xy(),
      () => {
        (uu = uu.filter((n) => n !== t)), xy();
      }
    );
  }
  Object.assign({}, ed.Modal);
}
const ON = p.exports.createContext(void 0),
  qw = ON,
  RN = 'internalMark',
  MN = (e) => {
    const { locale: t = {}, children: n, _ANT_MARK__: r } = e;
    p.exports.useEffect(() => TN(t && t.Modal), [t]);
    const o = p.exports.useMemo(
      () => Object.assign(Object.assign({}, t), { exist: !0 }),
      [t]
    );
    return p.exports.createElement(qw.Provider, { value: o }, n);
  },
  $N = MN,
  IN = (e) => {
    const { controlHeight: t } = e;
    return {
      controlHeightSM: t * 0.75,
      controlHeightXS: t * 0.5,
      controlHeightLG: t * 1.25,
    };
  },
  kN = IN;
function AN(e) {
  const { sizeUnit: t, sizeStep: n } = e;
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3),
  };
}
const Zw = {
    blue: '#1677ff',
    purple: '#722ED1',
    cyan: '#13C2C2',
    green: '#52C41A',
    magenta: '#EB2F96',
    pink: '#eb2f96',
    red: '#F5222D',
    orange: '#FA8C16',
    yellow: '#FADB14',
    volcano: '#FA541C',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    lime: '#A0D911',
  },
  NN = Object.assign(Object.assign({}, Zw), {
    colorPrimary: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorLink: '',
    colorTextBase: '',
    colorBgBase: '',
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode:
      "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    lineWidth: 1,
    lineType: 'solid',
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    opacityImage: 1,
    wireframe: !1,
    motion: !0,
  }),
  Bs = NN;
function LN(e, t) {
  let { generateColorPalettes: n, generateNeutralColorPalettes: r } = t;
  const {
      colorSuccess: o,
      colorWarning: i,
      colorError: a,
      colorInfo: s,
      colorPrimary: l,
      colorBgBase: u,
      colorTextBase: c,
    } = e,
    f = n(l),
    d = n(o),
    m = n(i),
    v = n(a),
    x = n(s),
    S = r(u, c),
    y = e.colorLink || e.colorInfo,
    h = n(y);
  return Object.assign(Object.assign({}, S), {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
    colorSuccessBg: d[1],
    colorSuccessBgHover: d[2],
    colorSuccessBorder: d[3],
    colorSuccessBorderHover: d[4],
    colorSuccessHover: d[4],
    colorSuccess: d[6],
    colorSuccessActive: d[7],
    colorSuccessTextHover: d[8],
    colorSuccessText: d[9],
    colorSuccessTextActive: d[10],
    colorErrorBg: v[1],
    colorErrorBgHover: v[2],
    colorErrorBorder: v[3],
    colorErrorBorderHover: v[4],
    colorErrorHover: v[5],
    colorError: v[6],
    colorErrorActive: v[7],
    colorErrorTextHover: v[8],
    colorErrorText: v[9],
    colorErrorTextActive: v[10],
    colorWarningBg: m[1],
    colorWarningBgHover: m[2],
    colorWarningBorder: m[3],
    colorWarningBorderHover: m[4],
    colorWarningHover: m[4],
    colorWarning: m[6],
    colorWarningActive: m[7],
    colorWarningTextHover: m[8],
    colorWarningText: m[9],
    colorWarningTextActive: m[10],
    colorInfoBg: x[1],
    colorInfoBgHover: x[2],
    colorInfoBorder: x[3],
    colorInfoBorderHover: x[4],
    colorInfoHover: x[4],
    colorInfo: x[6],
    colorInfoActive: x[7],
    colorInfoTextHover: x[8],
    colorInfoText: x[9],
    colorInfoTextActive: x[10],
    colorLinkHover: h[4],
    colorLink: h[6],
    colorLinkActive: h[7],
    colorBgMask: new Jt('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff',
  });
}
const _N = (e) => {
    let t = e,
      n = e,
      r = e,
      o = e;
    return (
      e < 6 && e >= 5
        ? (t = e + 1)
        : e < 16 && e >= 6
        ? (t = e + 2)
        : e >= 16 && (t = 16),
      e < 7 && e >= 5
        ? (n = 4)
        : e < 8 && e >= 7
        ? (n = 5)
        : e < 14 && e >= 8
        ? (n = 6)
        : e < 16 && e >= 14
        ? (n = 7)
        : e >= 16 && (n = 8),
      e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
      e > 4 && e < 8 ? (o = 4) : e >= 8 && (o = 6),
      {
        borderRadius: e,
        borderRadiusXS: r,
        borderRadiusSM: n,
        borderRadiusLG: t,
        borderRadiusOuter: o,
      }
    );
  },
  DN = _N;
function jN(e) {
  const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: o } = e;
  return Object.assign(
    {
      motionDurationFast: `${(n + t).toFixed(1)}s`,
      motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
      motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
      lineWidthBold: o + 1,
    },
    DN(r)
  );
}
const gr = (e, t) => new Jt(e).setAlpha(t).toRgbString(),
  Fa = (e, t) => new Jt(e).darken(t).toHexString(),
  zN = (e) => {
    const t = ni(e);
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[4],
      6: t[5],
      7: t[6],
      8: t[4],
      9: t[5],
      10: t[6],
    };
  },
  BN = (e, t) => {
    const n = e || '#fff',
      r = t || '#000';
    return {
      colorBgBase: n,
      colorTextBase: r,
      colorText: gr(r, 0.88),
      colorTextSecondary: gr(r, 0.65),
      colorTextTertiary: gr(r, 0.45),
      colorTextQuaternary: gr(r, 0.25),
      colorFill: gr(r, 0.15),
      colorFillSecondary: gr(r, 0.06),
      colorFillTertiary: gr(r, 0.04),
      colorFillQuaternary: gr(r, 0.02),
      colorBgLayout: Fa(n, 4),
      colorBgContainer: Fa(n, 0),
      colorBgElevated: Fa(n, 0),
      colorBgSpotlight: gr(r, 0.85),
      colorBgBlur: 'transparent',
      colorBorder: Fa(n, 15),
      colorBorderSecondary: Fa(n, 6),
    };
  };
function FN(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const o = r - 1,
      i = e * Math.pow(2.71828, o / 5),
      a = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return (
    (t[1] = e),
    t.map((n) => {
      const r = n + 8;
      return { size: n, lineHeight: r / n };
    })
  );
}
const VN = (e) => {
    const t = FN(e),
      n = t.map((o) => o.size),
      r = t.map((o) => o.lineHeight);
    return {
      fontSizeSM: n[0],
      fontSize: n[1],
      fontSizeLG: n[2],
      fontSizeXL: n[3],
      fontSizeHeading1: n[6],
      fontSizeHeading2: n[5],
      fontSizeHeading3: n[4],
      fontSizeHeading4: n[3],
      fontSizeHeading5: n[2],
      lineHeight: r[1],
      lineHeightLG: r[2],
      lineHeightSM: r[0],
      lineHeightHeading1: r[6],
      lineHeightHeading2: r[5],
      lineHeightHeading3: r[4],
      lineHeightHeading4: r[3],
      lineHeightHeading5: r[2],
    };
  },
  HN = VN;
function UN(e) {
  const t = Object.keys(Zw)
    .map((n) => {
      const r = ni(e[n]);
      return new Array(10)
        .fill(1)
        .reduce(
          (o, i, a) => (
            (o[`${n}-${a + 1}`] = r[a]), (o[`${n}${a + 1}`] = r[a]), o
          ),
          {}
        );
    })
    .reduce((n, r) => ((n = Object.assign(Object.assign({}, n), r)), n), {});
  return Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, e), t),
            LN(e, {
              generateColorPalettes: zN,
              generateNeutralColorPalettes: BN,
            })
          ),
          HN(e.fontSize)
        ),
        AN(e)
      ),
      kN(e)
    ),
    jN(e)
  );
}
const Jw = Gp(UN),
  eC = { token: Bs, override: { override: Bs }, hashed: !0 },
  tC = de.createContext(eC),
  nC = 'anticon',
  WN = (e, t) => t || (e ? `ant-${e}` : 'ant'),
  Ht = p.exports.createContext({ getPrefixCls: WN, iconPrefixCls: nC }),
  KN = `-ant-${Date.now()}-${Math.random()}`;
function GN(e, t) {
  const n = {},
    r = (a, s) => {
      let l = a.clone();
      return (l = (s == null ? void 0 : s(l)) || l), l.toRgbString();
    },
    o = (a, s) => {
      const l = new Jt(a),
        u = ni(l.toRgbString());
      (n[`${s}-color`] = r(l)),
        (n[`${s}-color-disabled`] = u[1]),
        (n[`${s}-color-hover`] = u[4]),
        (n[`${s}-color-active`] = u[6]),
        (n[`${s}-color-outline`] = l.clone().setAlpha(0.2).toRgbString()),
        (n[`${s}-color-deprecated-bg`] = u[0]),
        (n[`${s}-color-deprecated-border`] = u[2]);
    };
  if (t.primaryColor) {
    o(t.primaryColor, 'primary');
    const a = new Jt(t.primaryColor),
      s = ni(a.toRgbString());
    s.forEach((u, c) => {
      n[`primary-${c + 1}`] = u;
    }),
      (n['primary-color-deprecated-l-35'] = r(a, (u) => u.lighten(35))),
      (n['primary-color-deprecated-l-20'] = r(a, (u) => u.lighten(20))),
      (n['primary-color-deprecated-t-20'] = r(a, (u) => u.tint(20))),
      (n['primary-color-deprecated-t-50'] = r(a, (u) => u.tint(50))),
      (n['primary-color-deprecated-f-12'] = r(a, (u) =>
        u.setAlpha(u.getAlpha() * 0.12)
      ));
    const l = new Jt(s[0]);
    (n['primary-color-active-deprecated-f-30'] = r(l, (u) =>
      u.setAlpha(u.getAlpha() * 0.3)
    )),
      (n['primary-color-active-deprecated-d-02'] = r(l, (u) => u.darken(2)));
  }
  return (
    t.successColor && o(t.successColor, 'success'),
    t.warningColor && o(t.warningColor, 'warning'),
    t.errorColor && o(t.errorColor, 'error'),
    t.infoColor && o(t.infoColor, 'info'),
    `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim()
  );
}
function XN(e, t) {
  const n = GN(e, t);
  cn() && fa(n, `${KN}-dynamic-theme`);
}
const Jp = p.exports.createContext(!1),
  QN = (e) => {
    let { children: t, disabled: n } = e;
    const r = p.exports.useContext(Jp);
    return p.exports.createElement(Jp.Provider, { value: n ?? r }, t);
  },
  rC = Jp,
  em = p.exports.createContext(void 0),
  YN = (e) => {
    let { children: t, size: n } = e;
    const r = p.exports.useContext(em);
    return p.exports.createElement(em.Provider, { value: n || r }, t);
  },
  td = em;
function qN() {
  const e = p.exports.useContext(rC),
    t = p.exports.useContext(td);
  return { componentDisabled: e, componentSize: t };
}
const Zu = [
    'blue',
    'purple',
    'cyan',
    'green',
    'magenta',
    'pink',
    'red',
    'orange',
    'yellow',
    'volcano',
    'geekblue',
    'lime',
    'gold',
  ],
  ZN = '5.11.2';
function hf(e) {
  return e >= 0 && e <= 255;
}
function jl(e, t) {
  const { r: n, g: r, b: o, a: i } = new Jt(e).toRgb();
  if (i < 1) return e;
  const { r: a, g: s, b: l } = new Jt(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const c = Math.round((n - a * (1 - u)) / u),
      f = Math.round((r - s * (1 - u)) / u),
      d = Math.round((o - l * (1 - u)) / u);
    if (hf(c) && hf(f) && hf(d))
      return new Jt({
        r: c,
        g: f,
        b: d,
        a: Math.round(u * 100) / 100,
      }).toRgbString();
  }
  return new Jt({ r: n, g: r, b: o, a: 1 }).toRgbString();
}
var JN =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
function oC(e) {
  const { override: t } = e,
    n = JN(e, ['override']),
    r = Object.assign({}, t);
  Object.keys(Bs).forEach((d) => {
    delete r[d];
  });
  const o = Object.assign(Object.assign({}, n), r),
    i = 480,
    a = 576,
    s = 768,
    l = 992,
    u = 1200,
    c = 1600;
  if (o.motion === !1) {
    const d = '0s';
    (o.motionDurationFast = d),
      (o.motionDurationMid = d),
      (o.motionDurationSlow = d);
  }
  return Object.assign(
    Object.assign(Object.assign({}, o), {
      colorFillContent: o.colorFillSecondary,
      colorFillContentHover: o.colorFill,
      colorFillAlter: o.colorFillQuaternary,
      colorBgContainerDisabled: o.colorFillTertiary,
      colorBorderBg: o.colorBgContainer,
      colorSplit: jl(o.colorBorderSecondary, o.colorBgContainer),
      colorTextPlaceholder: o.colorTextQuaternary,
      colorTextDisabled: o.colorTextQuaternary,
      colorTextHeading: o.colorText,
      colorTextLabel: o.colorTextSecondary,
      colorTextDescription: o.colorTextTertiary,
      colorTextLightSolid: o.colorWhite,
      colorHighlight: o.colorError,
      colorBgTextHover: o.colorFillSecondary,
      colorBgTextActive: o.colorFill,
      colorIcon: o.colorTextTertiary,
      colorIconHover: o.colorText,
      colorErrorOutline: jl(o.colorErrorBg, o.colorBgContainer),
      colorWarningOutline: jl(o.colorWarningBg, o.colorBgContainer),
      fontSizeIcon: o.fontSizeSM,
      lineWidthFocus: o.lineWidth * 4,
      lineWidth: o.lineWidth,
      controlOutlineWidth: o.lineWidth * 2,
      controlInteractiveSize: o.controlHeight / 2,
      controlItemBgHover: o.colorFillTertiary,
      controlItemBgActive: o.colorPrimaryBg,
      controlItemBgActiveHover: o.colorPrimaryBgHover,
      controlItemBgActiveDisabled: o.colorFill,
      controlTmpOutline: o.colorFillQuaternary,
      controlOutline: jl(o.colorPrimaryBg, o.colorBgContainer),
      lineType: o.lineType,
      borderRadius: o.borderRadius,
      borderRadiusXS: o.borderRadiusXS,
      borderRadiusSM: o.borderRadiusSM,
      borderRadiusLG: o.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: 'none',
      linkHoverDecoration: 'none',
      linkFocusDecoration: 'none',
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: o.sizeXXS,
      paddingXS: o.sizeXS,
      paddingSM: o.sizeSM,
      padding: o.size,
      paddingMD: o.sizeMD,
      paddingLG: o.sizeLG,
      paddingXL: o.sizeXL,
      paddingContentHorizontalLG: o.sizeLG,
      paddingContentVerticalLG: o.sizeMS,
      paddingContentHorizontal: o.sizeMS,
      paddingContentVertical: o.sizeSM,
      paddingContentHorizontalSM: o.size,
      paddingContentVerticalSM: o.sizeXS,
      marginXXS: o.sizeXXS,
      marginXS: o.sizeXS,
      marginSM: o.sizeSM,
      margin: o.size,
      marginMD: o.sizeMD,
      marginLG: o.sizeLG,
      marginXL: o.sizeXL,
      marginXXL: o.sizeXXL,
      boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS: i,
      screenXSMin: i,
      screenXSMax: a - 1,
      screenSM: a,
      screenSMMin: a,
      screenSMMax: s - 1,
      screenMD: s,
      screenMDMin: s,
      screenMDMax: l - 1,
      screenLG: l,
      screenLGMin: l,
      screenLGMax: u - 1,
      screenXL: u,
      screenXLMin: u,
      screenXLMax: c - 1,
      screenXXL: c,
      screenXXLMin: c,
      boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
      boxShadowCard: `
      0 1px 2px -2px ${new Jt('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new Jt('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new Jt('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
    }),
    r
  );
}
var by =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const iC = (e, t, n) => {
  const r = n.getDerivativeToken(e),
    { override: o } = t,
    i = by(t, ['override']);
  let a = Object.assign(Object.assign({}, r), { override: o });
  return (
    (a = oC(a)),
    i &&
      Object.entries(i).forEach((s) => {
        let [l, u] = s;
        const { theme: c } = u,
          f = by(u, ['theme']);
        let d = f;
        c &&
          (d = iC(Object.assign(Object.assign({}, a), f), { override: f }, c)),
          (a[l] = d);
      }),
    a
  );
};
function Eo() {
  const { token: e, hashed: t, theme: n, override: r } = de.useContext(tC),
    o = `${ZN}-${t || ''}`,
    i = n || Jw,
    [a, s] = BA(i, [Bs, e], {
      salt: o,
      override: r,
      getComputedToken: iC,
      formatToken: oC,
    });
  return [i, a, t ? s : ''];
}
function mn(e) {
  var t = p.exports.useRef();
  t.current = e;
  var n = p.exports.useCallback(function () {
    for (var r, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (r = t.current) === null || r === void 0
      ? void 0
      : r.call.apply(r, [t].concat(i));
  }, []);
  return n;
}
function na(e) {
  var t = p.exports.useRef(!1),
    n = p.exports.useState(e),
    r = X(n, 2),
    o = r[0],
    i = r[1];
  p.exports.useEffect(function () {
    return (
      (t.current = !1),
      function () {
        t.current = !0;
      }
    );
  }, []);
  function a(s, l) {
    (l && t.current) || i(s);
  }
  return [o, a];
}
function vf(e) {
  return e !== void 0;
}
function Qo(e, t) {
  var n = t || {},
    r = n.defaultValue,
    o = n.value,
    i = n.onChange,
    a = n.postState,
    s = na(function () {
      return vf(o)
        ? o
        : vf(r)
        ? typeof r == 'function'
          ? r()
          : r
        : typeof e == 'function'
        ? e()
        : e;
    }),
    l = X(s, 2),
    u = l[0],
    c = l[1],
    f = o !== void 0 ? o : u,
    d = a ? a(f) : f,
    m = mn(i),
    v = na([f]),
    x = X(v, 2),
    S = x[0],
    y = x[1];
  cy(
    function () {
      var g = S[0];
      u !== g && m(u, g);
    },
    [S]
  ),
    cy(
      function () {
        vf(o) || c(o);
      },
      [o]
    );
  var h = mn(function (g, b) {
    c(g, b), y([f], b);
  });
  return [d, h];
}
const e5 = (e, t, n, r, o) => {
    const i = e / 2,
      a = 0,
      s = i,
      l = (n * 1) / Math.sqrt(2),
      u = i - n * (1 - 1 / Math.sqrt(2)),
      c = i - t * (1 / Math.sqrt(2)),
      f = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)),
      d = 2 * i - c,
      m = f,
      v = 2 * i - l,
      x = u,
      S = 2 * i - a,
      y = s,
      h = i * Math.sqrt(2) + n * (Math.sqrt(2) - 2),
      g = n * (Math.sqrt(2) - 1);
    return {
      pointerEvents: 'none',
      width: e,
      height: e,
      overflow: 'hidden',
      '&::before': {
        position: 'absolute',
        bottom: 0,
        insetInlineStart: 0,
        width: e,
        height: e / 2,
        background: r,
        clipPath: {
          _multi_value_: !0,
          value: [
            `polygon(${g}px 100%, 50% ${g}px, ${
              2 * i - g
            }px 100%, ${g}px 100%)`,
            `path('M ${a} ${s} A ${n} ${n} 0 0 0 ${l} ${u} L ${c} ${f} A ${t} ${t} 0 0 1 ${d} ${m} L ${v} ${x} A ${n} ${n} 0 0 0 ${S} ${y} Z')`,
          ],
        },
        content: '""',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        width: h,
        height: h,
        bottom: 0,
        insetInline: 0,
        margin: 'auto',
        borderRadius: { _skip_check_: !0, value: `0 0 ${t}px 0` },
        transform: 'translateY(50%) rotate(-135deg)',
        boxShadow: o,
        zIndex: 0,
        background: 'transparent',
      },
    };
  },
  t5 = { overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' },
  Gh = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: e.colorText,
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
      listStyle: 'none',
      fontFamily: t ? 'inherit' : e.fontFamily,
    };
  },
  aC = () => ({
    display: 'inline-flex',
    alignItems: 'center',
    color: 'inherit',
    fontStyle: 'normal',
    lineHeight: 0,
    textAlign: 'center',
    textTransform: 'none',
    verticalAlign: '-0.125em',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '> *': { lineHeight: 1 },
    svg: { display: 'inline-block' },
  }),
  Sy = () => ({
    '&::before': { display: 'table', content: '""' },
    '&::after': { display: 'table', clear: 'both', content: '""' },
  }),
  n5 = (e) => ({
    a: {
      color: e.colorLink,
      textDecoration: e.linkDecoration,
      backgroundColor: 'transparent',
      outline: 'none',
      cursor: 'pointer',
      transition: `color ${e.motionDurationSlow}`,
      '-webkit-text-decoration-skip': 'objects',
      '&:hover': { color: e.colorLinkHover },
      '&:active': { color: e.colorLinkActive },
      [`&:active,
  &:hover`]: { textDecoration: e.linkHoverDecoration, outline: 0 },
      '&:focus': { textDecoration: e.linkFocusDecoration, outline: 0 },
      '&[disabled]': { color: e.colorTextDisabled, cursor: 'not-allowed' },
    },
  }),
  r5 = (e, t) => {
    const { fontFamily: n, fontSize: r } = e,
      o = `[class^="${t}"], [class*=" ${t}"]`;
    return {
      [o]: {
        fontFamily: n,
        fontSize: r,
        boxSizing: 'border-box',
        '&::before, &::after': { boxSizing: 'border-box' },
        [o]: {
          boxSizing: 'border-box',
          '&::before, &::after': { boxSizing: 'border-box' },
        },
      },
    };
  },
  sC = (e) => ({
    outline: `${e.lineWidthFocus}px solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: 'outline-offset 0s, outline 0s',
  }),
  tm = (e) => ({ '&:focus-visible': Object.assign({}, sC(e)) }),
  lC = typeof CSSINJS_STATISTIC < 'u';
let nm = !0;
function kn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!lC) return Object.assign.apply(Object, [{}].concat(t));
  nm = !1;
  const r = {};
  return (
    t.forEach((o) => {
      Object.keys(o).forEach((a) => {
        Object.defineProperty(r, a, {
          configurable: !0,
          enumerable: !0,
          get: () => o[a],
        });
      });
    }),
    (nm = !0),
    r
  );
}
const wy = {};
function o5() {}
function i5(e) {
  let t,
    n = e,
    r = o5;
  return (
    lC &&
      typeof Proxy < 'u' &&
      ((t = new Set()),
      (n = new Proxy(e, {
        get(o, i) {
          return nm && t.add(i), o[i];
        },
      })),
      (r = (o, i) => {
        var a;
        wy[o] = {
          global: Array.from(t),
          component: Object.assign(
            Object.assign(
              {},
              (a = wy[o]) === null || a === void 0 ? void 0 : a.component
            ),
            i
          ),
        };
      })),
    { token: n, keys: t, flush: r }
  );
}
const a5 = (e, t) => {
    const [n, r] = Eo();
    return qp(
      {
        theme: n,
        token: r,
        hashId: '',
        path: ['ant-design-icons', e],
        nonce: () => (t == null ? void 0 : t.nonce),
      },
      () => [
        {
          [`.${e}`]: Object.assign(Object.assign({}, aC()), {
            [`.${e} .${e}-icon`]: { display: 'block' },
          }),
        },
      ]
    );
  },
  uC = a5;
function di(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = Array.isArray(e) ? e : [e, e],
    [i] = o,
    a = o.join('-');
  return (s) => {
    const [l, u, c] = Eo(),
      { getPrefixCls: f, iconPrefixCls: d, csp: m } = p.exports.useContext(Ht),
      v = f(),
      x = {
        theme: l,
        token: u,
        hashId: c,
        nonce: () => (m == null ? void 0 : m.nonce),
        clientOnly: r.clientOnly,
        order: r.order || -999,
      };
    return (
      qp(
        Object.assign(Object.assign({}, x), {
          clientOnly: !1,
          path: ['Shared', v],
        }),
        () => [{ '&': n5(u) }]
      ),
      uC(d, m),
      [
        qp(Object.assign(Object.assign({}, x), { path: [a, s, d] }), () => {
          const { token: S, flush: y } = i5(u),
            h = Object.assign({}, u[i]);
          if (r.deprecatedTokens) {
            const { deprecatedTokens: T } = r;
            T.forEach(($) => {
              let [N, j] = $;
              var F;
              ((h != null && h[N]) || (h != null && h[j])) &&
                (((F = h[j]) !== null && F !== void 0) ||
                  (h[j] = h == null ? void 0 : h[N]));
            });
          }
          const g = typeof n == 'function' ? n(kn(S, h ?? {})) : n,
            b = Object.assign(Object.assign({}, g), h),
            C = `.${s}`,
            P = kn(
              S,
              {
                componentCls: C,
                prefixCls: s,
                iconCls: `.${d}`,
                antCls: `.${v}`,
              },
              b
            ),
            w = t(P, {
              hashId: c,
              prefixCls: s,
              rootPrefixCls: v,
              iconPrefixCls: d,
              overrideComponentToken: h,
            });
          return y(i, b), [r.resetStyle === !1 ? null : r5(P, s), w];
        }),
        c,
      ]
    );
  };
}
const s5 = (e, t, n, r) => {
  const o = di(e, t, n, Object.assign({ resetStyle: !1, order: -998 }, r));
  return (a) => {
    let { prefixCls: s } = a;
    return o(s), null;
  };
};
function l5(e, t) {
  return Zu.reduce((n, r) => {
    const o = e[`${r}1`],
      i = e[`${r}3`],
      a = e[`${r}6`],
      s = e[`${r}7`];
    return Object.assign(
      Object.assign({}, n),
      t(r, { lightColor: o, lightBorderColor: i, darkColor: a, textColor: s })
    );
  }, {});
}
function u5(e, t) {
  const n = e || {},
    r = n.inherit === !1 || !t ? eC : t;
  return Xc(
    () => {
      if (!e) return t;
      const o = Object.assign({}, r.components);
      return (
        Object.keys(e.components || {}).forEach((i) => {
          o[i] = Object.assign(Object.assign({}, o[i]), e.components[i]);
        }),
        Object.assign(Object.assign(Object.assign({}, r), n), {
          token: Object.assign(Object.assign({}, r.token), n.token),
          components: o,
        })
      );
    },
    [n, r],
    (o, i) =>
      o.some((a, s) => {
        const l = i[s];
        return !Vh(a, l, !0);
      })
  );
}
var c5 = ['children'],
  cC = p.exports.createContext({});
function d5(e) {
  var t = e.children,
    n = Je(e, c5);
  return p.exports.createElement(cC.Provider, { value: n }, t);
}
var f5 = (function (e) {
    Yc(n, e);
    var t = qc(n);
    function n() {
      return wo(this, n), t.apply(this, arguments);
    }
    return (
      Co(n, [
        {
          key: 'render',
          value: function () {
            return this.props.children;
          },
        },
      ]),
      n
    );
  })(p.exports.Component),
  No = 'none',
  zl = 'appear',
  Bl = 'enter',
  Fl = 'leave',
  Cy = 'none',
  Un = 'prepare',
  Gi = 'start',
  Xi = 'active',
  Xh = 'end',
  dC = 'prepared';
function Ey(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit'.concat(e)] = 'webkit'.concat(t)),
    (n['Moz'.concat(e)] = 'moz'.concat(t)),
    (n['ms'.concat(e)] = 'MS'.concat(t)),
    (n['O'.concat(e)] = 'o'.concat(t.toLowerCase())),
    n
  );
}
function p5(e, t) {
  var n = {
    animationend: Ey('Animation', 'AnimationEnd'),
    transitionend: Ey('Transition', 'TransitionEnd'),
  };
  return (
    e &&
      ('AnimationEvent' in t || delete n.animationend.animation,
      'TransitionEvent' in t || delete n.transitionend.transition),
    n
  );
}
var m5 = p5(cn(), typeof window < 'u' ? window : {}),
  fC = {};
if (cn()) {
  var h5 = document.createElement('div');
  fC = h5.style;
}
var Vl = {};
function pC(e) {
  if (Vl[e]) return Vl[e];
  var t = m5[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in fC)
        return (Vl[e] = t[i]), Vl[e];
    }
  return '';
}
var mC = pC('animationend'),
  hC = pC('transitionend'),
  vC = !!(mC && hC),
  Py = mC || 'animationend',
  Ty = hC || 'transitionend';
function Oy(e, t) {
  if (!e) return null;
  if (et(e) === 'object') {
    var n = t.replace(/-\w/g, function (r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return ''.concat(e, '-').concat(t);
}
const v5 = function (e) {
  var t = p.exports.useRef(),
    n = p.exports.useRef(e);
  n.current = e;
  var r = p.exports.useCallback(function (a) {
    n.current(a);
  }, []);
  function o(a) {
    a && (a.removeEventListener(Ty, r), a.removeEventListener(Py, r));
  }
  function i(a) {
    t.current && t.current !== a && o(t.current),
      a &&
        a !== t.current &&
        (a.addEventListener(Ty, r), a.addEventListener(Py, r), (t.current = a));
  }
  return (
    p.exports.useEffect(function () {
      return function () {
        o(t.current);
      };
    }, []),
    [i, o]
  );
};
var gC = cn() ? p.exports.useLayoutEffect : p.exports.useEffect;
const g5 = function () {
  var e = p.exports.useRef(null);
  function t() {
    Qt.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = Qt(function () {
      o <= 1
        ? r({
            isCanceled: function () {
              return i !== e.current;
            },
          })
        : n(r, o - 1);
    });
    e.current = i;
  }
  return (
    p.exports.useEffect(function () {
      return function () {
        t();
      };
    }, []),
    [n, t]
  );
};
var y5 = [Un, Gi, Xi, Xh],
  x5 = [Un, dC],
  yC = !1,
  b5 = !0;
function xC(e) {
  return e === Xi || e === Xh;
}
const S5 = function (e, t, n) {
  var r = na(Cy),
    o = X(r, 2),
    i = o[0],
    a = o[1],
    s = g5(),
    l = X(s, 2),
    u = l[0],
    c = l[1];
  function f() {
    a(Un, !0);
  }
  var d = t ? x5 : y5;
  return (
    gC(
      function () {
        if (i !== Cy && i !== Xh) {
          var m = d.indexOf(i),
            v = d[m + 1],
            x = n(i);
          x === yC
            ? a(v, !0)
            : v &&
              u(function (S) {
                function y() {
                  S.isCanceled() || a(v, !0);
                }
                x === !0 ? y() : Promise.resolve(x).then(y);
              });
        }
      },
      [e, i]
    ),
    p.exports.useEffect(function () {
      return function () {
        c();
      };
    }, []),
    [f, i]
  );
};
function w5(e, t, n, r) {
  var o = r.motionEnter,
    i = o === void 0 ? !0 : o,
    a = r.motionAppear,
    s = a === void 0 ? !0 : a,
    l = r.motionLeave,
    u = l === void 0 ? !0 : l,
    c = r.motionDeadline,
    f = r.motionLeaveImmediately,
    d = r.onAppearPrepare,
    m = r.onEnterPrepare,
    v = r.onLeavePrepare,
    x = r.onAppearStart,
    S = r.onEnterStart,
    y = r.onLeaveStart,
    h = r.onAppearActive,
    g = r.onEnterActive,
    b = r.onLeaveActive,
    C = r.onAppearEnd,
    P = r.onEnterEnd,
    w = r.onLeaveEnd,
    T = r.onVisibleChanged,
    $ = na(),
    N = X($, 2),
    j = N[0],
    F = N[1],
    H = na(No),
    z = X(H, 2),
    V = z[0],
    R = z[1],
    O = na(null),
    E = X(O, 2),
    k = E[0],
    I = E[1],
    L = p.exports.useRef(!1),
    B = p.exports.useRef(null);
  function J() {
    return n();
  }
  var Q = p.exports.useRef(!1);
  function ne() {
    R(No, !0), I(null, !0);
  }
  function q(A) {
    var D = J();
    if (!(A && !A.deadline && A.target !== D)) {
      var U = Q.current,
        K;
      V === zl && U
        ? (K = C == null ? void 0 : C(D, A))
        : V === Bl && U
        ? (K = P == null ? void 0 : P(D, A))
        : V === Fl && U && (K = w == null ? void 0 : w(D, A)),
        V !== No && U && K !== !1 && ne();
    }
  }
  var ae = v5(q),
    se = X(ae, 1),
    pe = se[0],
    Z = function (D) {
      var U, K, Y;
      switch (D) {
        case zl:
          return (U = {}), fe(U, Un, d), fe(U, Gi, x), fe(U, Xi, h), U;
        case Bl:
          return (K = {}), fe(K, Un, m), fe(K, Gi, S), fe(K, Xi, g), K;
        case Fl:
          return (Y = {}), fe(Y, Un, v), fe(Y, Gi, y), fe(Y, Xi, b), Y;
        default:
          return {};
      }
    },
    me = p.exports.useMemo(
      function () {
        return Z(V);
      },
      [V]
    ),
    Ae = S5(V, !e, function (A) {
      if (A === Un) {
        var D = me[Un];
        return D ? D(J()) : yC;
      }
      if (Ie in me) {
        var U;
        I(
          ((U = me[Ie]) === null || U === void 0
            ? void 0
            : U.call(me, J(), null)) || null
        );
      }
      return (
        Ie === Xi &&
          (pe(J()),
          c > 0 &&
            (clearTimeout(B.current),
            (B.current = setTimeout(function () {
              q({ deadline: !0 });
            }, c)))),
        Ie === dC && ne(),
        b5
      );
    }),
    Ve = X(Ae, 2),
    Re = Ve[0],
    Ie = Ve[1],
    He = xC(Ie);
  (Q.current = He),
    gC(
      function () {
        F(t);
        var A = L.current;
        L.current = !0;
        var D;
        !A && t && s && (D = zl),
          A && t && i && (D = Bl),
          ((A && !t && u) || (!A && f && !t && u)) && (D = Fl);
        var U = Z(D);
        D && (e || U[Un]) ? (R(D), Re()) : R(No);
      },
      [t]
    ),
    p.exports.useEffect(
      function () {
        ((V === zl && !s) || (V === Bl && !i) || (V === Fl && !u)) && R(No);
      },
      [s, i, u]
    ),
    p.exports.useEffect(function () {
      return function () {
        (L.current = !1), clearTimeout(B.current);
      };
    }, []);
  var Ne = p.exports.useRef(!1);
  p.exports.useEffect(
    function () {
      j && (Ne.current = !0),
        j !== void 0 &&
          V === No &&
          ((Ne.current || j) && (T == null || T(j)), (Ne.current = !0));
    },
    [j, V]
  );
  var _ = k;
  return (
    me[Un] && Ie === Gi && (_ = G({ transition: 'none' }, _)),
    [V, Ie, _, j ?? t]
  );
}
function C5(e) {
  var t = e;
  et(e) === 'object' && (t = e.transitionSupport);
  function n(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var r = p.exports.forwardRef(function (o, i) {
    var a = o.visible,
      s = a === void 0 ? !0 : a,
      l = o.removeOnLeave,
      u = l === void 0 ? !0 : l,
      c = o.forceRender,
      f = o.children,
      d = o.motionName,
      m = o.leavedClassName,
      v = o.eventProps,
      x = p.exports.useContext(cC),
      S = x.motion,
      y = n(o, S),
      h = p.exports.useRef(),
      g = p.exports.useRef();
    function b() {
      try {
        return h.current instanceof HTMLElement ? h.current : iu(g.current);
      } catch {
        return null;
      }
    }
    var C = w5(y, s, b, o),
      P = X(C, 4),
      w = P[0],
      T = P[1],
      $ = P[2],
      N = P[3],
      j = p.exports.useRef(N);
    N && (j.current = !0);
    var F = p.exports.useCallback(
        function (I) {
          (h.current = I), zh(i, I);
        },
        [i]
      ),
      H,
      z = G(G({}, v), {}, { visible: s });
    if (!f) H = null;
    else if (w === No)
      N
        ? (H = f(G({}, z), F))
        : !u && j.current && m
        ? (H = f(G(G({}, z), {}, { className: m }), F))
        : c || (!u && !m)
        ? (H = f(G(G({}, z), {}, { style: { display: 'none' } }), F))
        : (H = null);
    else {
      var V, R;
      T === Un
        ? (R = 'prepare')
        : xC(T)
        ? (R = 'active')
        : T === Gi && (R = 'start');
      var O = Oy(d, ''.concat(w, '-').concat(R));
      H = f(
        G(
          G({}, z),
          {},
          {
            className: ge(
              Oy(d, w),
              ((V = {}), fe(V, O, O && R), fe(V, d, typeof d == 'string'), V)
            ),
            style: $,
          }
        ),
        F
      );
    }
    if (p.exports.isValidElement(H) && So(H)) {
      var E = H,
        k = E.ref;
      k || (H = p.exports.cloneElement(H, { ref: F }));
    }
    return p.exports.createElement(f5, { ref: g }, H);
  });
  return (r.displayName = 'CSSMotion'), r;
}
const wa = C5(vC);
var rm = 'add',
  om = 'keep',
  im = 'remove',
  gf = 'removed';
function E5(e) {
  var t;
  return (
    e && et(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }),
    G(G({}, t), {}, { key: String(t.key) })
  );
}
function am() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(E5);
}
function P5() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = [],
    r = 0,
    o = t.length,
    i = am(e),
    a = am(t);
  i.forEach(function (u) {
    for (var c = !1, f = r; f < o; f += 1) {
      var d = a[f];
      if (d.key === u.key) {
        r < f &&
          ((n = n.concat(
            a.slice(r, f).map(function (m) {
              return G(G({}, m), {}, { status: rm });
            })
          )),
          (r = f)),
          n.push(G(G({}, d), {}, { status: om })),
          (r += 1),
          (c = !0);
        break;
      }
    }
    c || n.push(G(G({}, u), {}, { status: im }));
  }),
    r < o &&
      (n = n.concat(
        a.slice(r).map(function (u) {
          return G(G({}, u), {}, { status: rm });
        })
      ));
  var s = {};
  n.forEach(function (u) {
    var c = u.key;
    s[c] = (s[c] || 0) + 1;
  });
  var l = Object.keys(s).filter(function (u) {
    return s[u] > 1;
  });
  return (
    l.forEach(function (u) {
      (n = n.filter(function (c) {
        var f = c.key,
          d = c.status;
        return f !== u || d !== im;
      })),
        n.forEach(function (c) {
          c.key === u && (c.status = om);
        });
    }),
    n
  );
}
var T5 = ['component', 'children', 'onVisibleChanged', 'onAllRemoved'],
  O5 = ['status'],
  R5 = [
    'eventProps',
    'visible',
    'children',
    'motionName',
    'motionAppear',
    'motionEnter',
    'motionLeave',
    'motionLeaveImmediately',
    'motionDeadline',
    'removeOnLeave',
    'leavedClassName',
    'onAppearPrepare',
    'onAppearStart',
    'onAppearActive',
    'onAppearEnd',
    'onEnterStart',
    'onEnterActive',
    'onEnterEnd',
    'onLeaveStart',
    'onLeaveActive',
    'onLeaveEnd',
  ];
function M5(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wa,
    n = (function (r) {
      Yc(i, r);
      var o = qc(i);
      function i() {
        var a;
        wo(this, i);
        for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
          l[u] = arguments[u];
        return (
          (a = o.call.apply(o, [this].concat(l))),
          fe(Wp(a), 'state', { keyEntities: [] }),
          fe(Wp(a), 'removeKey', function (c) {
            var f = a.state.keyEntities,
              d = f.map(function (m) {
                return m.key !== c ? m : G(G({}, m), {}, { status: gf });
              });
            return (
              a.setState({ keyEntities: d }),
              d.filter(function (m) {
                var v = m.status;
                return v !== gf;
              }).length
            );
          }),
          a
        );
      }
      return (
        Co(
          i,
          [
            {
              key: 'render',
              value: function () {
                var s = this,
                  l = this.state.keyEntities,
                  u = this.props,
                  c = u.component,
                  f = u.children,
                  d = u.onVisibleChanged,
                  m = u.onAllRemoved,
                  v = Je(u, T5),
                  x = c || p.exports.Fragment,
                  S = {};
                return (
                  R5.forEach(function (y) {
                    (S[y] = v[y]), delete v[y];
                  }),
                  delete v.keys,
                  p.exports.createElement(
                    x,
                    v,
                    l.map(function (y, h) {
                      var g = y.status,
                        b = Je(y, O5),
                        C = g === rm || g === om;
                      return p.exports.createElement(
                        t,
                        Me({}, S, {
                          key: b.key,
                          visible: C,
                          eventProps: b,
                          onVisibleChanged: function (w) {
                            if ((d == null || d(w, { key: b.key }), !w)) {
                              var T = s.removeKey(b.key);
                              T === 0 && m && m();
                            }
                          },
                        }),
                        function (P, w) {
                          return f(G(G({}, P), {}, { index: h }), w);
                        }
                      );
                    })
                  )
                );
              },
            },
          ],
          [
            {
              key: 'getDerivedStateFromProps',
              value: function (s, l) {
                var u = s.keys,
                  c = l.keyEntities,
                  f = am(u),
                  d = P5(c, f);
                return {
                  keyEntities: d.filter(function (m) {
                    var v = c.find(function (x) {
                      var S = x.key;
                      return m.key === S;
                    });
                    return !(v && v.status === gf && m.status === im);
                  }),
                };
              },
            },
          ]
        ),
        i
      );
    })(p.exports.Component);
  return fe(n, 'defaultProps', { component: 'div' }), n;
}
M5(vC);
function $5(e) {
  const { children: t } = e,
    [, n] = Eo(),
    { motion: r } = n,
    o = p.exports.useRef(!1);
  return (
    (o.current = o.current || r === !1),
    o.current ? p.exports.createElement(d5, { motion: r }, t) : t
  );
}
const I5 = () => null;
var k5 =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const A5 = [
    'getTargetContainer',
    'getPopupContainer',
    'renderEmpty',
    'pageHeader',
    'input',
    'pagination',
    'form',
    'select',
    'button',
  ],
  N5 = 'ant';
let bC;
function L5() {
  return bC || N5;
}
function _5(e) {
  return Object.keys(e).some((t) => t.endsWith('Color'));
}
const D5 = (e) => {
    let { prefixCls: t, iconPrefixCls: n, theme: r } = e;
    t !== void 0 && (bC = t), r && _5(r) && XN(L5(), r);
  },
  j5 = (e) => {
    const {
        children: t,
        csp: n,
        autoInsertSpaceInButton: r,
        alert: o,
        anchor: i,
        form: a,
        locale: s,
        componentSize: l,
        direction: u,
        space: c,
        virtual: f,
        dropdownMatchSelectWidth: d,
        popupMatchSelectWidth: m,
        popupOverflow: v,
        legacyLocale: x,
        parentContext: S,
        iconPrefixCls: y,
        theme: h,
        componentDisabled: g,
        segmented: b,
        statistic: C,
        spin: P,
        calendar: w,
        carousel: T,
        cascader: $,
        collapse: N,
        typography: j,
        checkbox: F,
        descriptions: H,
        divider: z,
        drawer: V,
        skeleton: R,
        steps: O,
        image: E,
        layout: k,
        list: I,
        mentions: L,
        modal: B,
        progress: J,
        result: Q,
        slider: ne,
        breadcrumb: q,
        menu: ae,
        pagination: se,
        input: pe,
        empty: Z,
        badge: me,
        radio: Ae,
        rate: Ve,
        switch: Re,
        transfer: Ie,
        avatar: He,
        message: Ne,
        tag: _,
        table: A,
        card: D,
        tabs: U,
        timeline: K,
        timePicker: Y,
        upload: le,
        notification: be,
        tree: ue,
        colorPicker: Se,
        datePicker: Ce,
        rangePicker: Ee,
        flex: De,
        wave: Pe,
        dropdown: lt,
        warning: rt,
      } = e,
      $t = p.exports.useCallback(
        (ee, we) => {
          const { prefixCls: re } = e;
          if (we) return we;
          const he = re || S.getPrefixCls('');
          return ee ? `${he}-${ee}` : he;
        },
        [S.getPrefixCls, e.prefixCls]
      ),
      ke = y || S.iconPrefixCls || nC,
      ye = n || S.csp;
    uC(ke, ye);
    const ze = u5(h, S.theme),
      ut = {
        csp: ye,
        autoInsertSpaceInButton: r,
        alert: o,
        anchor: i,
        locale: s || x,
        direction: u,
        space: c,
        virtual: f,
        popupMatchSelectWidth: m ?? d,
        popupOverflow: v,
        getPrefixCls: $t,
        iconPrefixCls: ke,
        theme: ze,
        segmented: b,
        statistic: C,
        spin: P,
        calendar: w,
        carousel: T,
        cascader: $,
        collapse: N,
        typography: j,
        checkbox: F,
        descriptions: H,
        divider: z,
        drawer: V,
        skeleton: R,
        steps: O,
        image: E,
        input: pe,
        layout: k,
        list: I,
        mentions: L,
        modal: B,
        progress: J,
        result: Q,
        slider: ne,
        breadcrumb: q,
        menu: ae,
        pagination: se,
        empty: Z,
        badge: me,
        radio: Ae,
        rate: Ve,
        switch: Re,
        transfer: Ie,
        avatar: He,
        message: Ne,
        tag: _,
        table: A,
        card: D,
        tabs: U,
        timeline: K,
        timePicker: Y,
        upload: le,
        notification: be,
        tree: ue,
        colorPicker: Se,
        datePicker: Ce,
        rangePicker: Ee,
        flex: De,
        wave: Pe,
        dropdown: lt,
        warning: rt,
      },
      tt = Object.assign({}, S);
    Object.keys(ut).forEach((ee) => {
      ut[ee] !== void 0 && (tt[ee] = ut[ee]);
    }),
      A5.forEach((ee) => {
        const we = e[ee];
        we && (tt[ee] = we);
      });
    const Ue = Xc(
        () => tt,
        tt,
        (ee, we) => {
          const re = Object.keys(ee),
            he = Object.keys(we);
          return re.length !== he.length || re.some((je) => ee[je] !== we[je]);
        }
      ),
      gt = p.exports.useMemo(() => ({ prefixCls: ke, csp: ye }), [ke, ye]);
    let Be = p.exports.createElement(
      p.exports.Fragment,
      null,
      p.exports.createElement(I5, { dropdownMatchSelectWidth: d }),
      t
    );
    const yt = p.exports.useMemo(() => {
      var ee, we, re, he;
      return gN(
        ((ee = ed.Form) === null || ee === void 0
          ? void 0
          : ee.defaultValidateMessages) || {},
        ((re =
          (we = Ue.locale) === null || we === void 0 ? void 0 : we.Form) ===
          null || re === void 0
          ? void 0
          : re.defaultValidateMessages) || {},
        ((he = Ue.form) === null || he === void 0
          ? void 0
          : he.validateMessages) || {},
        (a == null ? void 0 : a.validateMessages) || {}
      );
    }, [Ue, a == null ? void 0 : a.validateMessages]);
    Object.keys(yt).length > 0 &&
      (Be = p.exports.createElement(bN.Provider, { value: yt }, Be)),
      s &&
        (Be = p.exports.createElement($N, { locale: s, _ANT_MARK__: RN }, Be)),
      (ke || ye) &&
        (Be = p.exports.createElement(Nh.Provider, { value: gt }, Be)),
      l && (Be = p.exports.createElement(YN, { size: l }, Be)),
      (Be = p.exports.createElement($5, null, Be));
    const Te = p.exports.useMemo(() => {
      const ee = ze || {},
        { algorithm: we, token: re, components: he } = ee,
        je = k5(ee, ['algorithm', 'token', 'components']),
        mt = we && (!Array.isArray(we) || we.length > 0) ? Gp(we) : Jw,
        Dt = {};
      Object.entries(he || {}).forEach((Lr) => {
        let [Nn, qn] = Lr;
        const Ct = Object.assign({}, qn);
        'algorithm' in Ct &&
          (Ct.algorithm === !0
            ? (Ct.theme = mt)
            : (Array.isArray(Ct.algorithm) ||
                typeof Ct.algorithm == 'function') &&
              (Ct.theme = Gp(Ct.algorithm)),
          delete Ct.algorithm),
          (Dt[Nn] = Ct);
      });
      const wt = Object.assign(Object.assign({}, Bs), re);
      return Object.assign(Object.assign({}, je), {
        theme: mt,
        token: wt,
        components: Dt,
        override: Object.assign({ override: wt }, Dt),
      });
    }, [ze]);
    return (
      h && (Be = p.exports.createElement(tC.Provider, { value: Te }, Be)),
      Ue.warning &&
        (Be = p.exports.createElement(xN.Provider, { value: Ue.warning }, Be)),
      g !== void 0 && (Be = p.exports.createElement(QN, { disabled: g }, Be)),
      p.exports.createElement(Ht.Provider, { value: Ue }, Be)
    );
  },
  Ca = (e) => {
    const t = p.exports.useContext(Ht),
      n = p.exports.useContext(qw);
    return p.exports.createElement(
      j5,
      Object.assign({ parentContext: t, legacyLocale: n }, e)
    );
  };
Ca.ConfigContext = Ht;
Ca.SizeContext = td;
Ca.config = D5;
Ca.useConfig = qN;
Object.defineProperty(Ca, 'SizeContext', { get: () => td });
const { isValidElement: vo } = Yo;
function SC(e) {
  return e && vo(e) && e.type === p.exports.Fragment;
}
function z5(e, t, n) {
  return vo(e)
    ? p.exports.cloneElement(e, typeof n == 'function' ? n(e.props || {}) : n)
    : t;
}
function fi(e, t) {
  return z5(e, e, t);
}
var ce = {
  MAC_ENTER: 3,
  BACKSPACE: 8,
  TAB: 9,
  NUM_CENTER: 12,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS_LOCK: 20,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PRINT_SCREEN: 44,
  INSERT: 45,
  DELETE: 46,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  QUESTION_MARK: 63,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  META: 91,
  WIN_KEY_RIGHT: 92,
  CONTEXT_MENU: 93,
  NUM_ZERO: 96,
  NUM_ONE: 97,
  NUM_TWO: 98,
  NUM_THREE: 99,
  NUM_FOUR: 100,
  NUM_FIVE: 101,
  NUM_SIX: 102,
  NUM_SEVEN: 103,
  NUM_EIGHT: 104,
  NUM_NINE: 105,
  NUM_MULTIPLY: 106,
  NUM_PLUS: 107,
  NUM_MINUS: 109,
  NUM_PERIOD: 110,
  NUM_DIVISION: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUMLOCK: 144,
  SEMICOLON: 186,
  DASH: 189,
  EQUALS: 187,
  COMMA: 188,
  PERIOD: 190,
  SLASH: 191,
  APOSTROPHE: 192,
  SINGLE_QUOTE: 222,
  OPEN_SQUARE_BRACKET: 219,
  BACKSLASH: 220,
  CLOSE_SQUARE_BRACKET: 221,
  WIN_KEY: 224,
  MAC_FF_META: 224,
  WIN_IME: 229,
  isTextModifyingKeyEvent: function (t) {
    var n = t.keyCode;
    if ((t.altKey && !t.ctrlKey) || t.metaKey || (n >= ce.F1 && n <= ce.F12))
      return !1;
    switch (n) {
      case ce.ALT:
      case ce.CAPS_LOCK:
      case ce.CONTEXT_MENU:
      case ce.CTRL:
      case ce.DOWN:
      case ce.END:
      case ce.ESC:
      case ce.HOME:
      case ce.INSERT:
      case ce.LEFT:
      case ce.MAC_FF_META:
      case ce.META:
      case ce.NUMLOCK:
      case ce.NUM_CENTER:
      case ce.PAGE_DOWN:
      case ce.PAGE_UP:
      case ce.PAUSE:
      case ce.PRINT_SCREEN:
      case ce.RIGHT:
      case ce.SHIFT:
      case ce.UP:
      case ce.WIN_KEY:
      case ce.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  isCharacterKey: function (t) {
    if (
      (t >= ce.ZERO && t <= ce.NINE) ||
      (t >= ce.NUM_ZERO && t <= ce.NUM_MULTIPLY) ||
      (t >= ce.A && t <= ce.Z) ||
      (window.navigator.userAgent.indexOf('WebKit') !== -1 && t === 0)
    )
      return !0;
    switch (t) {
      case ce.SPACE:
      case ce.QUESTION_MARK:
      case ce.NUM_PLUS:
      case ce.NUM_MINUS:
      case ce.NUM_PERIOD:
      case ce.NUM_DIVISION:
      case ce.SEMICOLON:
      case ce.DASH:
      case ce.EQUALS:
      case ce.COMMA:
      case ce.PERIOD:
      case ce.SLASH:
      case ce.APOSTROPHE:
      case ce.SINGLE_QUOTE:
      case ce.OPEN_SQUARE_BRACKET:
      case ce.BACKSLASH:
      case ce.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  },
};
const B5 = de.createContext(void 0),
  Qh = B5,
  Lo = 100,
  F5 = 10,
  V5 = Lo * F5,
  wC = {
    Modal: Lo,
    Drawer: Lo,
    Popover: Lo,
    Popconfirm: Lo,
    Tooltip: Lo,
    Tour: Lo,
  },
  H5 = { SelectLike: 50, Dropdown: 50, DatePicker: 50, Menu: 50 };
function U5(e) {
  return e in wC;
}
function Yh(e, t) {
  const [, n] = Eo(),
    r = de.useContext(Qh),
    o = U5(e);
  let i = r ?? 0;
  return (
    o
      ? ((i += (r ? 0 : n.zIndexPopupBase) + wC[e]),
        (i = Math.min(i, n.zIndexPopupBase + V5)))
      : (i += H5[e]),
    [r === void 0 ? t : i, i]
  );
}
function Fs() {
  Fs = function () {
    return t;
  };
  var e,
    t = {},
    n = Object.prototype,
    r = n.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (R, O, E) {
        R[O] = E.value;
      },
    i = typeof Symbol == 'function' ? Symbol : {},
    a = i.iterator || '@@iterator',
    s = i.asyncIterator || '@@asyncIterator',
    l = i.toStringTag || '@@toStringTag';
  function u(R, O, E) {
    return (
      Object.defineProperty(R, O, {
        value: E,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      R[O]
    );
  }
  try {
    u({}, '');
  } catch {
    u = function (E, k, I) {
      return (E[k] = I);
    };
  }
  function c(R, O, E, k) {
    var I = O && O.prototype instanceof y ? O : y,
      L = Object.create(I.prototype),
      B = new z(k || []);
    return o(L, '_invoke', { value: N(R, E, B) }), L;
  }
  function f(R, O, E) {
    try {
      return { type: 'normal', arg: R.call(O, E) };
    } catch (k) {
      return { type: 'throw', arg: k };
    }
  }
  t.wrap = c;
  var d = 'suspendedStart',
    m = 'suspendedYield',
    v = 'executing',
    x = 'completed',
    S = {};
  function y() {}
  function h() {}
  function g() {}
  var b = {};
  u(b, a, function () {
    return this;
  });
  var C = Object.getPrototypeOf,
    P = C && C(C(V([])));
  P && P !== n && r.call(P, a) && (b = P);
  var w = (g.prototype = y.prototype = Object.create(b));
  function T(R) {
    ['next', 'throw', 'return'].forEach(function (O) {
      u(R, O, function (E) {
        return this._invoke(O, E);
      });
    });
  }
  function $(R, O) {
    function E(I, L, B, J) {
      var Q = f(R[I], R, L);
      if (Q.type !== 'throw') {
        var ne = Q.arg,
          q = ne.value;
        return q && et(q) == 'object' && r.call(q, '__await')
          ? O.resolve(q.__await).then(
              function (ae) {
                E('next', ae, B, J);
              },
              function (ae) {
                E('throw', ae, B, J);
              }
            )
          : O.resolve(q).then(
              function (ae) {
                (ne.value = ae), B(ne);
              },
              function (ae) {
                return E('throw', ae, B, J);
              }
            );
      }
      J(Q.arg);
    }
    var k;
    o(this, '_invoke', {
      value: function (L, B) {
        function J() {
          return new O(function (Q, ne) {
            E(L, B, Q, ne);
          });
        }
        return (k = k ? k.then(J, J) : J());
      },
    });
  }
  function N(R, O, E) {
    var k = d;
    return function (I, L) {
      if (k === v) throw new Error('Generator is already running');
      if (k === x) {
        if (I === 'throw') throw L;
        return { value: e, done: !0 };
      }
      for (E.method = I, E.arg = L; ; ) {
        var B = E.delegate;
        if (B) {
          var J = j(B, E);
          if (J) {
            if (J === S) continue;
            return J;
          }
        }
        if (E.method === 'next') E.sent = E._sent = E.arg;
        else if (E.method === 'throw') {
          if (k === d) throw ((k = x), E.arg);
          E.dispatchException(E.arg);
        } else E.method === 'return' && E.abrupt('return', E.arg);
        k = v;
        var Q = f(R, O, E);
        if (Q.type === 'normal') {
          if (((k = E.done ? x : m), Q.arg === S)) continue;
          return { value: Q.arg, done: E.done };
        }
        Q.type === 'throw' && ((k = x), (E.method = 'throw'), (E.arg = Q.arg));
      }
    };
  }
  function j(R, O) {
    var E = O.method,
      k = R.iterator[E];
    if (k === e)
      return (
        (O.delegate = null),
        (E === 'throw' &&
          R.iterator.return &&
          ((O.method = 'return'),
          (O.arg = e),
          j(R, O),
          O.method === 'throw')) ||
          (E !== 'return' &&
            ((O.method = 'throw'),
            (O.arg = new TypeError(
              "The iterator does not provide a '" + E + "' method"
            )))),
        S
      );
    var I = f(k, R.iterator, O.arg);
    if (I.type === 'throw')
      return (O.method = 'throw'), (O.arg = I.arg), (O.delegate = null), S;
    var L = I.arg;
    return L
      ? L.done
        ? ((O[R.resultName] = L.value),
          (O.next = R.nextLoc),
          O.method !== 'return' && ((O.method = 'next'), (O.arg = e)),
          (O.delegate = null),
          S)
        : L
      : ((O.method = 'throw'),
        (O.arg = new TypeError('iterator result is not an object')),
        (O.delegate = null),
        S);
  }
  function F(R) {
    var O = { tryLoc: R[0] };
    1 in R && (O.catchLoc = R[1]),
      2 in R && ((O.finallyLoc = R[2]), (O.afterLoc = R[3])),
      this.tryEntries.push(O);
  }
  function H(R) {
    var O = R.completion || {};
    (O.type = 'normal'), delete O.arg, (R.completion = O);
  }
  function z(R) {
    (this.tryEntries = [{ tryLoc: 'root' }]),
      R.forEach(F, this),
      this.reset(!0);
  }
  function V(R) {
    if (R || R === '') {
      var O = R[a];
      if (O) return O.call(R);
      if (typeof R.next == 'function') return R;
      if (!isNaN(R.length)) {
        var E = -1,
          k = function I() {
            for (; ++E < R.length; )
              if (r.call(R, E)) return (I.value = R[E]), (I.done = !1), I;
            return (I.value = e), (I.done = !0), I;
          };
        return (k.next = k);
      }
    }
    throw new TypeError(et(R) + ' is not iterable');
  }
  return (
    (h.prototype = g),
    o(w, 'constructor', { value: g, configurable: !0 }),
    o(g, 'constructor', { value: h, configurable: !0 }),
    (h.displayName = u(g, l, 'GeneratorFunction')),
    (t.isGeneratorFunction = function (R) {
      var O = typeof R == 'function' && R.constructor;
      return (
        !!O && (O === h || (O.displayName || O.name) === 'GeneratorFunction')
      );
    }),
    (t.mark = function (R) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(R, g)
          : ((R.__proto__ = g), u(R, l, 'GeneratorFunction')),
        (R.prototype = Object.create(w)),
        R
      );
    }),
    (t.awrap = function (R) {
      return { __await: R };
    }),
    T($.prototype),
    u($.prototype, s, function () {
      return this;
    }),
    (t.AsyncIterator = $),
    (t.async = function (R, O, E, k, I) {
      I === void 0 && (I = Promise);
      var L = new $(c(R, O, E, k), I);
      return t.isGeneratorFunction(O)
        ? L
        : L.next().then(function (B) {
            return B.done ? B.value : L.next();
          });
    }),
    T(w),
    u(w, l, 'Generator'),
    u(w, a, function () {
      return this;
    }),
    u(w, 'toString', function () {
      return '[object Generator]';
    }),
    (t.keys = function (R) {
      var O = Object(R),
        E = [];
      for (var k in O) E.push(k);
      return (
        E.reverse(),
        function I() {
          for (; E.length; ) {
            var L = E.pop();
            if (L in O) return (I.value = L), (I.done = !1), I;
          }
          return (I.done = !0), I;
        }
      );
    }),
    (t.values = V),
    (z.prototype = {
      constructor: z,
      reset: function (O) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = e),
          this.tryEntries.forEach(H),
          !O)
        )
          for (var E in this)
            E.charAt(0) === 't' &&
              r.call(this, E) &&
              !isNaN(+E.slice(1)) &&
              (this[E] = e);
      },
      stop: function () {
        this.done = !0;
        var O = this.tryEntries[0].completion;
        if (O.type === 'throw') throw O.arg;
        return this.rval;
      },
      dispatchException: function (O) {
        if (this.done) throw O;
        var E = this;
        function k(ne, q) {
          return (
            (B.type = 'throw'),
            (B.arg = O),
            (E.next = ne),
            q && ((E.method = 'next'), (E.arg = e)),
            !!q
          );
        }
        for (var I = this.tryEntries.length - 1; I >= 0; --I) {
          var L = this.tryEntries[I],
            B = L.completion;
          if (L.tryLoc === 'root') return k('end');
          if (L.tryLoc <= this.prev) {
            var J = r.call(L, 'catchLoc'),
              Q = r.call(L, 'finallyLoc');
            if (J && Q) {
              if (this.prev < L.catchLoc) return k(L.catchLoc, !0);
              if (this.prev < L.finallyLoc) return k(L.finallyLoc);
            } else if (J) {
              if (this.prev < L.catchLoc) return k(L.catchLoc, !0);
            } else {
              if (!Q) throw new Error('try statement without catch or finally');
              if (this.prev < L.finallyLoc) return k(L.finallyLoc);
            }
          }
        }
      },
      abrupt: function (O, E) {
        for (var k = this.tryEntries.length - 1; k >= 0; --k) {
          var I = this.tryEntries[k];
          if (
            I.tryLoc <= this.prev &&
            r.call(I, 'finallyLoc') &&
            this.prev < I.finallyLoc
          ) {
            var L = I;
            break;
          }
        }
        L &&
          (O === 'break' || O === 'continue') &&
          L.tryLoc <= E &&
          E <= L.finallyLoc &&
          (L = null);
        var B = L ? L.completion : {};
        return (
          (B.type = O),
          (B.arg = E),
          L
            ? ((this.method = 'next'), (this.next = L.finallyLoc), S)
            : this.complete(B)
        );
      },
      complete: function (O, E) {
        if (O.type === 'throw') throw O.arg;
        return (
          O.type === 'break' || O.type === 'continue'
            ? (this.next = O.arg)
            : O.type === 'return'
            ? ((this.rval = this.arg = O.arg),
              (this.method = 'return'),
              (this.next = 'end'))
            : O.type === 'normal' && E && (this.next = E),
          S
        );
      },
      finish: function (O) {
        for (var E = this.tryEntries.length - 1; E >= 0; --E) {
          var k = this.tryEntries[E];
          if (k.finallyLoc === O)
            return this.complete(k.completion, k.afterLoc), H(k), S;
        }
      },
      catch: function (O) {
        for (var E = this.tryEntries.length - 1; E >= 0; --E) {
          var k = this.tryEntries[E];
          if (k.tryLoc === O) {
            var I = k.completion;
            if (I.type === 'throw') {
              var L = I.arg;
              H(k);
            }
            return L;
          }
        }
        throw new Error('illegal catch attempt');
      },
      delegateYield: function (O, E, k) {
        return (
          (this.delegate = { iterator: V(O), resultName: E, nextLoc: k }),
          this.method === 'next' && (this.arg = e),
          S
        );
      },
    }),
    t
  );
}
function Ry(e, t, n, r, o, i, a) {
  try {
    var s = e[i](a),
      l = s.value;
  } catch (u) {
    n(u);
    return;
  }
  s.done ? t(l) : Promise.resolve(l).then(r, o);
}
function CC(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, o) {
      var i = e.apply(t, n);
      function a(l) {
        Ry(i, r, o, a, s, 'next', l);
      }
      function s(l) {
        Ry(i, r, o, a, s, 'throw', l);
      }
      a(void 0);
    });
  };
}
var rl = G({}, fO),
  W5 = rl.version,
  K5 = rl.render,
  G5 = rl.unmountComponentAtNode,
  nd;
try {
  var X5 = Number((W5 || '').split('.')[0]);
  X5 >= 18 && (nd = rl.createRoot);
} catch {}
function My(e) {
  var t = rl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && et(t) === 'object' && (t.usingClientEntryPoint = e);
}
var Ju = '__rc_react_root__';
function Q5(e, t) {
  My(!0);
  var n = t[Ju] || nd(t);
  My(!1), n.render(e), (t[Ju] = n);
}
function Y5(e, t) {
  K5(e, t);
}
function q5(e, t) {
  if (nd) {
    Q5(e, t);
    return;
  }
  Y5(e, t);
}
function Z5(e) {
  return sm.apply(this, arguments);
}
function sm() {
  return (
    (sm = CC(
      Fs().mark(function e(t) {
        return Fs().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  'return',
                  Promise.resolve().then(function () {
                    var o;
                    (o = t[Ju]) === null || o === void 0 || o.unmount(),
                      delete t[Ju];
                  })
                );
              case 1:
              case 'end':
                return r.stop();
            }
        }, e);
      })
    )),
    sm.apply(this, arguments)
  );
}
function J5(e) {
  G5(e);
}
function e3(e) {
  return lm.apply(this, arguments);
}
function lm() {
  return (
    (lm = CC(
      Fs().mark(function e(t) {
        return Fs().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (nd === void 0) {
                  r.next = 2;
                  break;
                }
                return r.abrupt('return', Z5(t));
              case 2:
                J5(t);
              case 3:
              case 'end':
                return r.stop();
            }
        }, e);
      })
    )),
    lm.apply(this, arguments)
  );
}
const yf = () => ({ height: 0, opacity: 0 }),
  $y = (e) => {
    const { scrollHeight: t } = e;
    return { height: t, opacity: 1 };
  },
  t3 = (e) => ({ height: e ? e.offsetHeight : 0 }),
  xf = (e, t) =>
    (t == null ? void 0 : t.deadline) === !0 || t.propertyName === 'height',
  n3 = function () {
    return {
      motionName: `${
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'ant'
      }-motion-collapse`,
      onAppearStart: yf,
      onEnterStart: yf,
      onAppearActive: $y,
      onEnterActive: $y,
      onLeaveStart: t3,
      onLeaveActive: yf,
      onAppearEnd: xf,
      onEnterEnd: xf,
      onLeaveEnd: xf,
      motionDeadline: 500,
    };
  },
  r3 = (e, t, n) => (n !== void 0 ? n : `${e}-${t}`),
  o3 = n3,
  qh = function (e) {
    if (!e) return !1;
    if (e instanceof Element) {
      if (e.offsetParent) return !0;
      if (e.getBBox) {
        var t = e.getBBox(),
          n = t.width,
          r = t.height;
        if (n || r) return !0;
      }
      if (e.getBoundingClientRect) {
        var o = e.getBoundingClientRect(),
          i = o.width,
          a = o.height;
        if (i || a) return !0;
      }
    }
    return !1;
  },
  i3 = (e) => {
    const { componentCls: t, colorPrimary: n } = e;
    return {
      [t]: {
        position: 'absolute',
        background: 'transparent',
        pointerEvents: 'none',
        boxSizing: 'border-box',
        color: `var(--wave-color, ${n})`,
        boxShadow: '0 0 0 0 currentcolor',
        opacity: 0.2,
        '&.wave-motion-appear': {
          transition: [
            `box-shadow 0.4s ${e.motionEaseOutCirc}`,
            `opacity 2s ${e.motionEaseOutCirc}`,
          ].join(','),
          '&-active': { boxShadow: '0 0 0 6px currentcolor', opacity: 0 },
          '&.wave-quick': {
            transition: [
              `box-shadow 0.3s ${e.motionEaseInOut}`,
              `opacity 0.35s ${e.motionEaseInOut}`,
            ].join(','),
          },
        },
      },
    };
  },
  a3 = di('Wave', (e) => [i3(e)]);
function s3(e) {
  const t = (e || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function bf(e) {
  return (
    e &&
    e !== '#fff' &&
    e !== '#ffffff' &&
    e !== 'rgb(255, 255, 255)' &&
    e !== 'rgba(255, 255, 255, 1)' &&
    s3(e) &&
    !/rgba\((?:\d*, ){3}0\)/.test(e) &&
    e !== 'transparent'
  );
}
function l3(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r,
  } = getComputedStyle(e);
  return bf(t) ? t : bf(n) ? n : bf(r) ? r : null;
}
const EC = 'ant-wave-target';
function Sf(e) {
  return Number.isNaN(e) ? 0 : e;
}
const u3 = (e) => {
    const { className: t, target: n, component: r } = e,
      o = p.exports.useRef(null),
      [i, a] = p.exports.useState(null),
      [s, l] = p.exports.useState([]),
      [u, c] = p.exports.useState(0),
      [f, d] = p.exports.useState(0),
      [m, v] = p.exports.useState(0),
      [x, S] = p.exports.useState(0),
      [y, h] = p.exports.useState(!1),
      g = {
        left: u,
        top: f,
        width: m,
        height: x,
        borderRadius: s.map((P) => `${P}px`).join(' '),
      };
    i && (g['--wave-color'] = i);
    function b() {
      const P = getComputedStyle(n);
      a(l3(n));
      const w = P.position === 'static',
        { borderLeftWidth: T, borderTopWidth: $ } = P;
      c(w ? n.offsetLeft : Sf(-parseFloat(T))),
        d(w ? n.offsetTop : Sf(-parseFloat($))),
        v(n.offsetWidth),
        S(n.offsetHeight);
      const {
        borderTopLeftRadius: N,
        borderTopRightRadius: j,
        borderBottomLeftRadius: F,
        borderBottomRightRadius: H,
      } = P;
      l([N, j, H, F].map((z) => Sf(parseFloat(z))));
    }
    if (
      (p.exports.useEffect(() => {
        if (n) {
          const P = Qt(() => {
            b(), h(!0);
          });
          let w;
          return (
            typeof ResizeObserver < 'u' &&
              ((w = new ResizeObserver(b)), w.observe(n)),
            () => {
              Qt.cancel(P), w == null || w.disconnect();
            }
          );
        }
      }, []),
      !y)
    )
      return null;
    const C =
      (r === 'Checkbox' || r === 'Radio') &&
      (n == null ? void 0 : n.classList.contains(EC));
    return p.exports.createElement(
      wa,
      {
        visible: !0,
        motionAppear: !0,
        motionName: 'wave-motion',
        motionDeadline: 5e3,
        onAppearEnd: (P, w) => {
          var T;
          if (w.deadline || w.propertyName === 'opacity') {
            const $ =
              (T = o.current) === null || T === void 0
                ? void 0
                : T.parentElement;
            e3($).then(() => {
              $ == null || $.remove();
            });
          }
          return !1;
        },
      },
      (P) => {
        let { className: w } = P;
        return p.exports.createElement('div', {
          ref: o,
          className: ge(t, { 'wave-quick': C }, w),
          style: g,
        });
      }
    );
  },
  c3 = (e, t) => {
    var n;
    const { component: r } = t;
    if (
      r === 'Checkbox' &&
      !(!((n = e.querySelector('input')) === null || n === void 0) && n.checked)
    )
      return;
    const o = document.createElement('div');
    (o.style.position = 'absolute'),
      (o.style.left = '0px'),
      (o.style.top = '0px'),
      e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild),
      q5(p.exports.createElement(u3, Object.assign({}, t, { target: e })), o);
  },
  d3 = c3;
function f3(e, t, n) {
  const { wave: r } = p.exports.useContext(Ht),
    [, o, i] = Eo(),
    a = mn((u) => {
      const c = e.current;
      if ((r != null && r.disabled) || !c) return;
      const f = c.querySelector(`.${EC}`) || c,
        { showEffect: d } = r || {};
      (d || d3)(f, {
        className: t,
        token: o,
        component: n,
        event: u,
        hashId: i,
      });
    }),
    s = p.exports.useRef();
  return (u) => {
    Qt.cancel(s.current),
      (s.current = Qt(() => {
        a(u);
      }));
  };
}
const p3 = (e) => {
    const { children: t, disabled: n, component: r } = e,
      { getPrefixCls: o } = p.exports.useContext(Ht),
      i = p.exports.useRef(null),
      a = o('wave'),
      [, s] = a3(a),
      l = f3(i, ge(a, s), r);
    if (
      (de.useEffect(() => {
        const c = i.current;
        if (!c || c.nodeType !== 1 || n) return;
        const f = (d) => {
          !qh(d.target) ||
            !c.getAttribute ||
            c.getAttribute('disabled') ||
            c.disabled ||
            c.className.includes('disabled') ||
            c.className.includes('-leave') ||
            l(d);
        };
        return (
          c.addEventListener('click', f, !0),
          () => {
            c.removeEventListener('click', f, !0);
          }
        );
      }, [n]),
      !de.isValidElement(t))
    )
      return t ?? null;
    const u = So(t) ? ba(t.ref, i) : i;
    return fi(t, { ref: u });
  },
  m3 = p3,
  h3 = (e) => {
    const t = de.useContext(td);
    return de.useMemo(
      () =>
        e
          ? typeof e == 'string'
            ? e ?? t
            : e instanceof Function
            ? e(t)
            : t
          : t,
      [e, t]
    );
  },
  PC = h3,
  v3 = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        '&-block': { display: 'flex', width: '100%' },
        '&-vertical': { flexDirection: 'column' },
      },
    };
  },
  g3 = v3,
  y3 = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        display: 'inline-flex',
        '&-rtl': { direction: 'rtl' },
        '&-vertical': { flexDirection: 'column' },
        '&-align': {
          flexDirection: 'column',
          '&-center': { alignItems: 'center' },
          '&-start': { alignItems: 'flex-start' },
          '&-end': { alignItems: 'flex-end' },
          '&-baseline': { alignItems: 'baseline' },
        },
        [`${t}-item:empty`]: { display: 'none' },
      },
    };
  },
  x3 = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        '&-gap-row-small': { rowGap: e.spaceGapSmallSize },
        '&-gap-row-middle': { rowGap: e.spaceGapMiddleSize },
        '&-gap-row-large': { rowGap: e.spaceGapLargeSize },
        '&-gap-col-small': { columnGap: e.spaceGapSmallSize },
        '&-gap-col-middle': { columnGap: e.spaceGapMiddleSize },
        '&-gap-col-large': { columnGap: e.spaceGapLargeSize },
      },
    };
  },
  TC = di(
    'Space',
    (e) => {
      const t = kn(e, {
        spaceGapSmallSize: e.paddingXS,
        spaceGapMiddleSize: e.padding,
        spaceGapLargeSize: e.paddingLG,
      });
      return [y3(t), x3(t), g3(t)];
    },
    () => ({}),
    { resetStyle: !1 }
  );
var OC =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const rd = p.exports.createContext(null),
  RC = (e, t) => {
    const n = p.exports.useContext(rd),
      r = p.exports.useMemo(() => {
        if (!n) return '';
        const { compactDirection: o, isFirstItem: i, isLastItem: a } = n,
          s = o === 'vertical' ? '-vertical-' : '-';
        return ge(`${e}-compact${s}item`, {
          [`${e}-compact${s}first-item`]: i,
          [`${e}-compact${s}last-item`]: a,
          [`${e}-compact${s}item-rtl`]: t === 'rtl',
        });
      }, [e, t, n]);
    return {
      compactSize: n == null ? void 0 : n.compactSize,
      compactDirection: n == null ? void 0 : n.compactDirection,
      compactItemClassnames: r,
    };
  },
  MC = (e) => {
    let { children: t } = e;
    return p.exports.createElement(rd.Provider, { value: null }, t);
  },
  b3 = (e) => {
    var { children: t } = e,
      n = OC(e, ['children']);
    return p.exports.createElement(rd.Provider, { value: n }, t);
  },
  S3 = (e) => {
    const { getPrefixCls: t, direction: n } = p.exports.useContext(Ht),
      {
        size: r,
        direction: o,
        block: i,
        prefixCls: a,
        className: s,
        rootClassName: l,
        children: u,
      } = e,
      c = OC(e, [
        'size',
        'direction',
        'block',
        'prefixCls',
        'className',
        'rootClassName',
        'children',
      ]),
      f = PC((g) => r ?? g),
      d = t('space-compact', a),
      [m, v] = TC(d),
      x = ge(
        d,
        v,
        {
          [`${d}-rtl`]: n === 'rtl',
          [`${d}-block`]: i,
          [`${d}-vertical`]: o === 'vertical',
        },
        s,
        l
      ),
      S = p.exports.useContext(rd),
      y = ri(u),
      h = p.exports.useMemo(
        () =>
          y.map((g, b) => {
            const C = (g && g.key) || `${d}-item-${b}`;
            return p.exports.createElement(
              b3,
              {
                key: C,
                compactSize: f,
                compactDirection: o,
                isFirstItem:
                  b === 0 && (!S || (S == null ? void 0 : S.isFirstItem)),
                isLastItem:
                  b === y.length - 1 &&
                  (!S || (S == null ? void 0 : S.isLastItem)),
              },
              g
            );
          }),
        [r, y, S]
      );
    return y.length === 0
      ? null
      : m(
          p.exports.createElement('div', Object.assign({ className: x }, c), h)
        );
  },
  w3 = S3;
var C3 =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const $C = p.exports.createContext(void 0),
  E3 = (e) => {
    const { getPrefixCls: t, direction: n } = p.exports.useContext(Ht),
      { prefixCls: r, size: o, className: i } = e,
      a = C3(e, ['prefixCls', 'size', 'className']),
      s = t('btn-group', r),
      [, , l] = Eo();
    let u = '';
    switch (o) {
      case 'large':
        u = 'lg';
        break;
      case 'small':
        u = 'sm';
        break;
    }
    const c = ge(s, { [`${s}-${u}`]: u, [`${s}-rtl`]: n === 'rtl' }, i, l);
    return p.exports.createElement(
      $C.Provider,
      { value: o },
      p.exports.createElement('div', Object.assign({}, a, { className: c }))
    );
  },
  P3 = E3,
  Iy = /^[\u4e00-\u9fa5]{2}$/,
  um = Iy.test.bind(Iy);
function ky(e) {
  return typeof e == 'string';
}
function wf(e) {
  return e === 'text' || e === 'link';
}
function T3(e, t) {
  if (e == null) return;
  const n = t ? ' ' : '';
  return typeof e != 'string' &&
    typeof e != 'number' &&
    ky(e.type) &&
    um(e.props.children)
    ? fi(e, { children: e.props.children.split('').join(n) })
    : ky(e)
    ? um(e)
      ? de.createElement('span', null, e.split('').join(n))
      : de.createElement('span', null, e)
    : SC(e)
    ? de.createElement('span', null, e)
    : e;
}
function O3(e, t) {
  let n = !1;
  const r = [];
  return (
    de.Children.forEach(e, (o) => {
      const i = typeof o,
        a = i === 'string' || i === 'number';
      if (n && a) {
        const s = r.length - 1,
          l = r[s];
        r[s] = `${l}${o}`;
      } else r.push(o);
      n = a;
    }),
    de.Children.map(r, (o) => T3(o, t))
  );
}
const R3 = p.exports.forwardRef((e, t) => {
    const { className: n, style: r, children: o, prefixCls: i } = e,
      a = ge(`${i}-icon`, n);
    return de.createElement('span', { ref: t, className: a, style: r }, o);
  }),
  IC = R3,
  Ay = p.exports.forwardRef((e, t) => {
    let { prefixCls: n, className: r, style: o, iconClassName: i } = e;
    const a = ge(`${n}-loading-icon`, r);
    return de.createElement(
      IC,
      { prefixCls: n, className: a, style: o, ref: t },
      de.createElement(yk, { className: i })
    );
  }),
  Cf = () => ({ width: 0, opacity: 0, transform: 'scale(0)' }),
  Ef = (e) => ({ width: e.scrollWidth, opacity: 1, transform: 'scale(1)' }),
  M3 = (e) => {
    const {
        prefixCls: t,
        loading: n,
        existIcon: r,
        className: o,
        style: i,
      } = e,
      a = !!n;
    return r
      ? de.createElement(Ay, { prefixCls: t, className: o, style: i })
      : de.createElement(
          wa,
          {
            visible: a,
            motionName: `${t}-loading-icon-motion`,
            motionLeave: a,
            removeOnLeave: !0,
            onAppearStart: Cf,
            onAppearActive: Ef,
            onEnterStart: Cf,
            onEnterActive: Ef,
            onLeaveStart: Ef,
            onLeaveActive: Cf,
          },
          (s, l) => {
            let { className: u, style: c } = s;
            return de.createElement(Ay, {
              prefixCls: t,
              className: o,
              style: Object.assign(Object.assign({}, i), c),
              ref: l,
              iconClassName: u,
            });
          }
        );
  },
  $3 = M3,
  Ny = (e, t) => ({
    [`> span, > ${e}`]: {
      '&:not(:last-child)': {
        [`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineEndColor: t } },
      },
      '&:not(:first-child)': {
        [`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineStartColor: t } },
      },
    },
  }),
  I3 = (e) => {
    const {
      componentCls: t,
      fontSize: n,
      lineWidth: r,
      groupBorderColor: o,
      colorErrorHover: i,
    } = e;
    return {
      [`${t}-group`]: [
        {
          position: 'relative',
          display: 'inline-flex',
          [`> span, > ${t}`]: {
            '&:not(:last-child)': {
              [`&, & > ${t}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
              },
            },
            '&:not(:first-child)': {
              marginInlineStart: -r,
              [`&, & > ${t}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
              },
            },
          },
          [t]: {
            position: 'relative',
            zIndex: 1,
            [`&:hover,
          &:focus,
          &:active`]: { zIndex: 2 },
            '&[disabled]': { zIndex: 0 },
          },
          [`${t}-icon-only`]: { fontSize: n },
        },
        Ny(`${t}-primary`, o),
        Ny(`${t}-danger`, i),
      ],
    };
  },
  k3 = I3,
  A3 = (e) => {
    const { componentCls: t, iconCls: n, fontWeight: r } = e;
    return {
      [t]: {
        outline: 'none',
        position: 'relative',
        display: 'inline-block',
        fontWeight: r,
        whiteSpace: 'nowrap',
        textAlign: 'center',
        backgroundImage: 'none',
        backgroundColor: 'transparent',
        border: `${e.lineWidth}px ${e.lineType} transparent`,
        cursor: 'pointer',
        transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
        userSelect: 'none',
        touchAction: 'manipulation',
        lineHeight: e.lineHeight,
        color: e.colorText,
        '&:disabled > *': { pointerEvents: 'none' },
        '> span': { display: 'inline-block' },
        [`${t}-icon`]: { lineHeight: 0 },
        [`> ${n} + span, > span + ${n}`]: { marginInlineStart: e.marginXS },
        [`&:not(${t}-icon-only) > ${t}-icon`]: {
          [`&${t}-loading-icon, &:not(:last-child)`]: {
            marginInlineEnd: e.marginXS,
          },
        },
        '> a': { color: 'currentColor' },
        '&:not(:disabled)': Object.assign({}, tm(e)),
        [`&${t}-two-chinese-chars::first-letter`]: { letterSpacing: '0.34em' },
        [`&${t}-two-chinese-chars > *:not(${n})`]: {
          marginInlineEnd: '-0.34em',
          letterSpacing: '0.34em',
        },
        [`&-icon-only${t}-compact-item`]: { flex: 'none' },
        [`&-compact-item${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]:
            {
              position: 'relative',
              '&:before': {
                position: 'absolute',
                top: -e.lineWidth,
                insetInlineStart: -e.lineWidth,
                display: 'inline-block',
                width: e.lineWidth,
                height: `calc(100% + ${e.lineWidth * 2}px)`,
                backgroundColor: e.colorPrimaryHover,
                content: '""',
              },
            },
        },
        '&-compact-vertical-item': {
          [`&${t}-primary`]: {
            [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]:
              {
                position: 'relative',
                '&:before': {
                  position: 'absolute',
                  top: -e.lineWidth,
                  insetInlineStart: -e.lineWidth,
                  display: 'inline-block',
                  width: `calc(100% + ${e.lineWidth * 2}px)`,
                  height: e.lineWidth,
                  backgroundColor: e.colorPrimaryHover,
                  content: '""',
                },
              },
          },
        },
      },
    };
  },
  Ar = (e, t, n) => ({
    [`&:not(:disabled):not(${e}-disabled)`]: { '&:hover': t, '&:active': n },
  }),
  N3 = (e) => ({
    minWidth: e.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: '50%',
  }),
  L3 = (e) => ({
    borderRadius: e.controlHeight,
    paddingInlineStart: e.controlHeight / 2,
    paddingInlineEnd: e.controlHeight / 2,
  }),
  _3 = (e) => ({
    cursor: 'not-allowed',
    borderColor: e.borderColorDisabled,
    color: e.colorTextDisabled,
    backgroundColor: e.colorBgContainerDisabled,
    boxShadow: 'none',
  }),
  Vs = (e, t, n, r, o, i, a, s) => ({
    [`&${e}-background-ghost`]: Object.assign(
      Object.assign(
        {
          color: n || void 0,
          backgroundColor: t,
          borderColor: r || void 0,
          boxShadow: 'none',
        },
        Ar(
          e,
          Object.assign({ backgroundColor: t }, a),
          Object.assign({ backgroundColor: t }, s)
        )
      ),
      {
        '&:disabled': {
          cursor: 'not-allowed',
          color: o || void 0,
          borderColor: i || void 0,
        },
      }
    ),
  }),
  Zh = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, _3(e)),
  }),
  kC = (e) => Object.assign({}, Zh(e)),
  ec = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: {
      cursor: 'not-allowed',
      color: e.colorTextDisabled,
    },
  }),
  AC = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, kC(e)), {
            backgroundColor: e.defaultBg,
            borderColor: e.defaultBorderColor,
            color: e.defaultColor,
            boxShadow: e.defaultShadow,
          }),
          Ar(
            e.componentCls,
            { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
            { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive }
          )
        ),
        Vs(
          e.componentCls,
          e.ghostBg,
          e.defaultGhostColor,
          e.defaultGhostBorderColor,
          e.colorTextDisabled,
          e.colorBorder
        )
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            Object.assign(
              { color: e.colorError, borderColor: e.colorError },
              Ar(
                e.componentCls,
                {
                  color: e.colorErrorHover,
                  borderColor: e.colorErrorBorderHover,
                },
                { color: e.colorErrorActive, borderColor: e.colorErrorActive }
              )
            ),
            Vs(
              e.componentCls,
              e.ghostBg,
              e.colorError,
              e.colorError,
              e.colorTextDisabled,
              e.colorBorder
            )
          ),
          Zh(e)
        ),
      }
    ),
  D3 = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, kC(e)), {
            color: e.primaryColor,
            backgroundColor: e.colorPrimary,
            boxShadow: e.primaryShadow,
          }),
          Ar(
            e.componentCls,
            {
              color: e.colorTextLightSolid,
              backgroundColor: e.colorPrimaryHover,
            },
            {
              color: e.colorTextLightSolid,
              backgroundColor: e.colorPrimaryActive,
            }
          )
        ),
        Vs(
          e.componentCls,
          e.ghostBg,
          e.colorPrimary,
          e.colorPrimary,
          e.colorTextDisabled,
          e.colorBorder,
          { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
          { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive }
        )
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            Object.assign(
              {
                backgroundColor: e.colorError,
                boxShadow: e.dangerShadow,
                color: e.dangerColor,
              },
              Ar(
                e.componentCls,
                { backgroundColor: e.colorErrorHover },
                { backgroundColor: e.colorErrorActive }
              )
            ),
            Vs(
              e.componentCls,
              e.ghostBg,
              e.colorError,
              e.colorError,
              e.colorTextDisabled,
              e.colorBorder,
              { color: e.colorErrorHover, borderColor: e.colorErrorHover },
              { color: e.colorErrorActive, borderColor: e.colorErrorActive }
            )
          ),
          Zh(e)
        ),
      }
    ),
  j3 = (e) =>
    Object.assign(Object.assign({}, AC(e)), { borderStyle: 'dashed' }),
  z3 = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          { color: e.colorLink },
          Ar(
            e.componentCls,
            { color: e.colorLinkHover, backgroundColor: e.linkHoverBg },
            { color: e.colorLinkActive }
          )
        ),
        ec(e)
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            { color: e.colorError },
            Ar(
              e.componentCls,
              { color: e.colorErrorHover },
              { color: e.colorErrorActive }
            )
          ),
          ec(e)
        ),
      }
    ),
  B3 = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          {},
          Ar(
            e.componentCls,
            { color: e.colorText, backgroundColor: e.textHoverBg },
            { color: e.colorText, backgroundColor: e.colorBgTextActive }
          )
        ),
        ec(e)
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign({ color: e.colorError }, ec(e)),
          Ar(
            e.componentCls,
            { color: e.colorErrorHover, backgroundColor: e.colorErrorBg },
            { color: e.colorErrorHover, backgroundColor: e.colorErrorBg }
          )
        ),
      }
    ),
  F3 = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-default`]: AC(e),
      [`${t}-primary`]: D3(e),
      [`${t}-dashed`]: j3(e),
      [`${t}-link`]: z3(e),
      [`${t}-text`]: B3(e),
      [`${t}-ghost`]: Vs(
        e.componentCls,
        e.ghostBg,
        e.colorBgContainer,
        e.colorBgContainer,
        e.colorTextDisabled,
        e.colorBorder
      ),
    };
  },
  Jh = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const {
        componentCls: n,
        controlHeight: r,
        fontSize: o,
        lineHeight: i,
        lineWidth: a,
        borderRadius: s,
        buttonPaddingHorizontal: l,
        iconCls: u,
      } = e,
      c = Math.max(0, (r - o * i) / 2 - a),
      f = `${n}-icon-only`;
    return [
      {
        [`${n}${t}`]: {
          fontSize: o,
          height: r,
          padding: `${c}px ${l}px`,
          borderRadius: s,
          [`&${f}`]: {
            width: r,
            paddingInlineStart: 0,
            paddingInlineEnd: 0,
            [`&${n}-round`]: { width: 'auto' },
            [u]: { fontSize: e.buttonIconOnlyFontSize },
          },
          [`&${n}-loading`]: { opacity: e.opacityLoading, cursor: 'default' },
          [`${n}-loading-icon`]: {
            transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          },
        },
      },
      { [`${n}${n}-circle${t}`]: N3(e) },
      { [`${n}${n}-round${t}`]: L3(e) },
    ];
  },
  V3 = (e) => Jh(kn(e, { fontSize: e.contentFontSize })),
  H3 = (e) => {
    const t = kn(e, {
      controlHeight: e.controlHeightSM,
      fontSize: e.contentFontSizeSM,
      padding: e.paddingXS,
      buttonPaddingHorizontal: e.paddingInlineSM,
      borderRadius: e.borderRadiusSM,
      buttonIconOnlyFontSize: e.onlyIconSizeSM,
    });
    return Jh(t, `${e.componentCls}-sm`);
  },
  U3 = (e) => {
    const t = kn(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.contentFontSizeLG,
      buttonPaddingHorizontal: e.paddingInlineLG,
      borderRadius: e.borderRadiusLG,
      buttonIconOnlyFontSize: e.onlyIconSizeLG,
    });
    return Jh(t, `${e.componentCls}-lg`);
  },
  W3 = (e) => {
    const { componentCls: t } = e;
    return { [t]: { [`&${t}-block`]: { width: '100%' } } };
  },
  NC = (e) => {
    const { paddingInline: t, onlyIconSize: n } = e;
    return kn(e, { buttonPaddingHorizontal: t, buttonIconOnlyFontSize: n });
  },
  LC = (e) => ({
    fontWeight: 400,
    defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
    primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
    dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
    primaryColor: e.colorTextLightSolid,
    dangerColor: e.colorTextLightSolid,
    borderColorDisabled: e.colorBorder,
    defaultGhostColor: e.colorBgContainer,
    ghostBg: 'transparent',
    defaultGhostBorderColor: e.colorBgContainer,
    paddingInline: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineSM: 8 - e.lineWidth,
    onlyIconSize: e.fontSizeLG,
    onlyIconSizeSM: e.fontSizeLG - 2,
    onlyIconSizeLG: e.fontSizeLG + 2,
    groupBorderColor: e.colorPrimaryHover,
    linkHoverBg: 'transparent',
    textHoverBg: e.colorBgTextHover,
    defaultColor: e.colorText,
    defaultBg: e.colorBgContainer,
    defaultBorderColor: e.colorBorder,
    defaultBorderColorDisabled: e.colorBorder,
    contentFontSize: e.fontSize,
    contentFontSizeSM: e.fontSize,
    contentFontSizeLG: e.fontSizeLG,
  }),
  K3 = di(
    'Button',
    (e) => {
      const t = NC(e);
      return [A3(t), H3(t), V3(t), U3(t), W3(t), F3(t), k3(t)];
    },
    LC
  );
function G3(e, t, n) {
  const { focusElCls: r, focus: o, borderElCls: i } = n,
    a = i ? '> *' : '',
    s = ['hover', o ? 'focus' : null, 'active']
      .filter(Boolean)
      .map((l) => `&:${l} ${a}`)
      .join(',');
  return {
    [`&-item:not(${t}-last-item)`]: { marginInlineEnd: -e.lineWidth },
    '&-item': Object.assign(
      Object.assign(
        { [s]: { zIndex: 2 } },
        r ? { [`&${r}`]: { zIndex: 2 } } : {}
      ),
      { [`&[disabled] ${a}`]: { zIndex: 0 } }
    ),
  };
}
function X3(e, t, n) {
  const { borderElCls: r } = n,
    o = r ? `> ${r}` : '';
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0,
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
      },
    },
  };
}
function Q3(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { focus: !0 };
  const { componentCls: n } = e,
    r = `${n}-compact`;
  return { [r]: Object.assign(Object.assign({}, G3(e, r, t)), X3(n, r, t)) };
}
function Y3(e, t) {
  return {
    [`&-item:not(${t}-last-item)`]: { marginBottom: -e.lineWidth },
    '&-item': {
      '&:hover,&:focus,&:active': { zIndex: 2 },
      '&[disabled]': { zIndex: 0 },
    },
  };
}
function q3(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: { borderRadius: 0 },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0,
      },
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0,
      },
    },
  };
}
function Z3(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, Y3(e, t)), q3(e.componentCls, t)),
  };
}
const J3 = s5(
  ['Button', 'compact'],
  (e) => {
    const t = NC(e);
    return [Q3(t), Z3(t)];
  },
  LC
);
var eL =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
function tL(e) {
  if (typeof e == 'object' && e) {
    let t = e == null ? void 0 : e.delay;
    return (
      (t = !Number.isNaN(t) && typeof t == 'number' ? t : 0),
      { loading: t <= 0, delay: t }
    );
  }
  return { loading: !!e, delay: 0 };
}
const nL = (e, t) => {
    var n, r;
    const {
        loading: o = !1,
        prefixCls: i,
        type: a = 'default',
        danger: s,
        shape: l = 'default',
        size: u,
        styles: c,
        disabled: f,
        className: d,
        rootClassName: m,
        children: v,
        icon: x,
        ghost: S = !1,
        block: y = !1,
        htmlType: h = 'button',
        classNames: g,
        style: b = {},
      } = e,
      C = eL(e, [
        'loading',
        'prefixCls',
        'type',
        'danger',
        'shape',
        'size',
        'styles',
        'disabled',
        'className',
        'rootClassName',
        'children',
        'icon',
        'ghost',
        'block',
        'htmlType',
        'classNames',
        'style',
      ]),
      {
        getPrefixCls: P,
        autoInsertSpaceInButton: w,
        direction: T,
        button: $,
      } = p.exports.useContext(Ht),
      N = P('btn', i),
      [j, F] = K3(N),
      H = p.exports.useContext(rC),
      z = f ?? H,
      V = p.exports.useContext($C),
      R = p.exports.useMemo(() => tL(o), [o]),
      [O, E] = p.exports.useState(R.loading),
      [k, I] = p.exports.useState(!1),
      B = ba(t, p.exports.createRef()),
      J = p.exports.Children.count(v) === 1 && !x && !wf(a);
    p.exports.useEffect(() => {
      let D = null;
      R.delay > 0
        ? (D = setTimeout(() => {
            (D = null), E(!0);
          }, R.delay))
        : E(R.loading);
      function U() {
        D && (clearTimeout(D), (D = null));
      }
      return U;
    }, [R]),
      p.exports.useEffect(() => {
        if (!B || !B.current || w === !1) return;
        const D = B.current.textContent;
        J && um(D) ? k || I(!0) : k && I(!1);
      }, [B]);
    const Q = (D) => {
        const { onClick: U } = e;
        if (O || z) {
          D.preventDefault();
          return;
        }
        U == null || U(D);
      },
      ne = w !== !1,
      { compactSize: q, compactItemClassnames: ae } = RC(N, T),
      se = { large: 'lg', small: 'sm', middle: void 0 },
      pe = PC((D) => {
        var U, K;
        return (K = (U = u ?? q) !== null && U !== void 0 ? U : V) !== null &&
          K !== void 0
          ? K
          : D;
      }),
      Z = (pe && se[pe]) || '',
      me = O ? 'loading' : x,
      Ae = ci(C, ['navigate']),
      Ve = ge(
        N,
        F,
        {
          [`${N}-${l}`]: l !== 'default' && l,
          [`${N}-${a}`]: a,
          [`${N}-${Z}`]: Z,
          [`${N}-icon-only`]: !v && v !== 0 && !!me,
          [`${N}-background-ghost`]: S && !wf(a),
          [`${N}-loading`]: O,
          [`${N}-two-chinese-chars`]: k && ne && !O,
          [`${N}-block`]: y,
          [`${N}-dangerous`]: !!s,
          [`${N}-rtl`]: T === 'rtl',
        },
        ae,
        d,
        m,
        $ == null ? void 0 : $.className
      ),
      Re = Object.assign(Object.assign({}, $ == null ? void 0 : $.style), b),
      Ie = ge(
        g == null ? void 0 : g.icon,
        (n = $ == null ? void 0 : $.classNames) === null || n === void 0
          ? void 0
          : n.icon
      ),
      He = Object.assign(
        Object.assign({}, (c == null ? void 0 : c.icon) || {}),
        ((r = $ == null ? void 0 : $.styles) === null || r === void 0
          ? void 0
          : r.icon) || {}
      ),
      Ne =
        x && !O
          ? de.createElement(IC, { prefixCls: N, className: Ie, style: He }, x)
          : de.createElement($3, {
              existIcon: !!x,
              prefixCls: N,
              loading: !!O,
            }),
      _ = v || v === 0 ? O3(v, J && ne) : null;
    if (Ae.href !== void 0)
      return j(
        de.createElement(
          'a',
          Object.assign({}, Ae, {
            className: ge(Ve, { [`${N}-disabled`]: z }),
            style: Re,
            onClick: Q,
            ref: B,
            tabIndex: z ? -1 : 0,
          }),
          Ne,
          _
        )
      );
    let A = de.createElement(
      'button',
      Object.assign({}, C, {
        type: h,
        className: Ve,
        style: Re,
        onClick: Q,
        disabled: z,
        ref: B,
      }),
      Ne,
      _,
      ae && de.createElement(J3, { key: 'compact', prefixCls: N })
    );
    return (
      wf(a) ||
        (A = de.createElement(m3, { component: 'Button', disabled: !!O }, A)),
      j(A)
    );
  },
  ev = p.exports.forwardRef(nL);
ev.Group = P3;
ev.__ANT_BUTTON = !0;
const Ly = ev;
var _C = p.exports.createContext(null),
  _y = [];
function rL(e, t) {
  var n = p.exports.useState(function () {
      if (!cn()) return null;
      var v = document.createElement('div');
      return v;
    }),
    r = X(n, 1),
    o = r[0],
    i = p.exports.useRef(!1),
    a = p.exports.useContext(_C),
    s = p.exports.useState(_y),
    l = X(s, 2),
    u = l[0],
    c = l[1],
    f =
      a ||
      (i.current
        ? void 0
        : function (v) {
            c(function (x) {
              var S = [v].concat(Mt(x));
              return S;
            });
          });
  function d() {
    o.parentElement || document.body.appendChild(o), (i.current = !0);
  }
  function m() {
    var v;
    (v = o.parentElement) === null || v === void 0 || v.removeChild(o),
      (i.current = !1);
  }
  return (
    Xt(
      function () {
        return e ? (a ? a(d) : d()) : m(), m;
      },
      [e]
    ),
    Xt(
      function () {
        u.length &&
          (u.forEach(function (v) {
            return v();
          }),
          c(_y));
      },
      [u]
    ),
    [o, f]
  );
}
var Pf;
function oL(e) {
  if (typeof document > 'u') return 0;
  if (e || Pf === void 0) {
    var t = document.createElement('div');
    (t.style.width = '100%'), (t.style.height = '200px');
    var n = document.createElement('div'),
      r = n.style;
    (r.position = 'absolute'),
      (r.top = '0'),
      (r.left = '0'),
      (r.pointerEvents = 'none'),
      (r.visibility = 'hidden'),
      (r.width = '200px'),
      (r.height = '150px'),
      (r.overflow = 'hidden'),
      n.appendChild(t),
      document.body.appendChild(n);
    var o = t.offsetWidth;
    n.style.overflow = 'scroll';
    var i = t.offsetWidth;
    o === i && (i = n.clientWidth), document.body.removeChild(n), (Pf = o - i);
  }
  return Pf;
}
function Dy(e) {
  var t = e.match(/^(.*)px$/),
    n = Number(t == null ? void 0 : t[1]);
  return Number.isNaN(n) ? oL() : n;
}
function iL(e) {
  if (typeof document > 'u' || !e || !(e instanceof Element))
    return { width: 0, height: 0 };
  var t = getComputedStyle(e, '::-webkit-scrollbar'),
    n = t.width,
    r = t.height;
  return { width: Dy(n), height: Dy(r) };
}
function aL() {
  return (
    document.body.scrollHeight >
      (window.innerHeight || document.documentElement.clientHeight) &&
    window.innerWidth > document.body.offsetWidth
  );
}
var sL = 'rc-util-locker-'.concat(Date.now()),
  jy = 0;
function lL(e) {
  var t = !!e,
    n = p.exports.useState(function () {
      return (jy += 1), ''.concat(sL, '_').concat(jy);
    }),
    r = X(n, 1),
    o = r[0];
  Xt(
    function () {
      if (t) {
        var i = iL(document.body).width,
          a = aL();
        fa(
          `
html body {
  overflow-y: hidden;
  `.concat(
            a ? 'width: calc(100% - '.concat(i, 'px);') : '',
            `
}`
          ),
          o
        );
      } else Wu(o);
      return function () {
        Wu(o);
      };
    },
    [t, o]
  );
}
var zy = !1;
function uL(e) {
  return typeof e == 'boolean' && (zy = e), zy;
}
var By = function (t) {
    return t === !1
      ? !1
      : !cn() || !t
      ? null
      : typeof t == 'string'
      ? document.querySelector(t)
      : typeof t == 'function'
      ? t()
      : t;
  },
  DC = p.exports.forwardRef(function (e, t) {
    var n = e.open,
      r = e.autoLock,
      o = e.getContainer;
    e.debug;
    var i = e.autoDestroy,
      a = i === void 0 ? !0 : i,
      s = e.children,
      l = p.exports.useState(n),
      u = X(l, 2),
      c = u[0],
      f = u[1],
      d = c || n;
    p.exports.useEffect(
      function () {
        (a || n) && f(n);
      },
      [n, a]
    );
    var m = p.exports.useState(function () {
        return By(o);
      }),
      v = X(m, 2),
      x = v[0],
      S = v[1];
    p.exports.useEffect(function () {
      var j = By(o);
      S(j ?? null);
    });
    var y = rL(d && !x),
      h = X(y, 2),
      g = h[0],
      b = h[1],
      C = x ?? g;
    lL(r && n && cn() && (C === g || C === document.body));
    var P = null;
    if (s && So(s) && t) {
      var w = s;
      P = w.ref;
    }
    var T = tl(P, t);
    if (!d || !cn() || x === void 0) return null;
    var $ = C === !1 || uL(),
      N = s;
    return (
      t && (N = p.exports.cloneElement(s, { ref: T })),
      p.exports.createElement(
        _C.Provider,
        { value: b },
        $ ? N : oi.exports.createPortal(N, C)
      )
    );
  });
function cL() {
  var e = G({}, Yo);
  return e.useId;
}
var Fy = 0,
  Vy = cL();
const dL = Vy
    ? function (t) {
        var n = Vy();
        return t || n;
      }
    : function (t) {
        var n = p.exports.useState('ssr-id'),
          r = X(n, 2),
          o = r[0],
          i = r[1];
        return (
          p.exports.useEffect(function () {
            var a = Fy;
            (Fy += 1), i('rc_unique_'.concat(a));
          }, []),
          t || o
        );
      },
  fL = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
  pL = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
  tv = function (e, t, n, r) {
    const i = (
      arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
    )
      ? '&'
      : '';
    return {
      [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: Object.assign(Object.assign({}, fL(r)), {
        animationPlayState: 'paused',
      }),
      [`${i}${e}-leave`]: Object.assign(Object.assign({}, pL(r)), {
        animationPlayState: 'paused',
      }),
      [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: 'running' },
      [`${i}${e}-leave${e}-leave-active`]: {
        animationName: n,
        animationPlayState: 'running',
        pointerEvents: 'none',
      },
    };
  },
  mL = new Xe('antMoveDownIn', {
    '0%': {
      transform: 'translate3d(0, 100%, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
  }),
  hL = new Xe('antMoveDownOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
    '100%': {
      transform: 'translate3d(0, 100%, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
  }),
  vL = new Xe('antMoveLeftIn', {
    '0%': {
      transform: 'translate3d(-100%, 0, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
  }),
  gL = new Xe('antMoveLeftOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
    '100%': {
      transform: 'translate3d(-100%, 0, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
  }),
  yL = new Xe('antMoveRightIn', {
    '0%': {
      transform: 'translate3d(100%, 0, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
  }),
  xL = new Xe('antMoveRightOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
    '100%': {
      transform: 'translate3d(100%, 0, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
  }),
  bL = new Xe('antMoveUpIn', {
    '0%': {
      transform: 'translate3d(0, -100%, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
    '100%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
  }),
  SL = new Xe('antMoveUpOut', {
    '0%': {
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: '0 0',
      opacity: 1,
    },
    '100%': {
      transform: 'translate3d(0, -100%, 0)',
      transformOrigin: '0 0',
      opacity: 0,
    },
  }),
  wL = {
    'move-up': { inKeyframes: bL, outKeyframes: SL },
    'move-down': { inKeyframes: mL, outKeyframes: hL },
    'move-left': { inKeyframes: vL, outKeyframes: gL },
    'move-right': { inKeyframes: yL, outKeyframes: xL },
  },
  Hy = (e, t) => {
    const { antCls: n } = e,
      r = `${n}-${t}`,
      { inKeyframes: o, outKeyframes: i } = wL[t];
    return [
      tv(r, o, i, e.motionDurationMid),
      {
        [`
        ${r}-enter,
        ${r}-appear
      `]: { opacity: 0, animationTimingFunction: e.motionEaseOutCirc },
        [`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
      },
    ];
  },
  jC = new Xe('antSlideUpIn', {
    '0%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    '100%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
  }),
  zC = new Xe('antSlideUpOut', {
    '0%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
    '100%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
  }),
  BC = new Xe('antSlideDownIn', {
    '0%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '100% 100%',
      opacity: 0,
    },
    '100%': {
      transform: 'scaleY(1)',
      transformOrigin: '100% 100%',
      opacity: 1,
    },
  }),
  FC = new Xe('antSlideDownOut', {
    '0%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
    '100%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '100% 100%',
      opacity: 0,
    },
  }),
  CL = new Xe('antSlideLeftIn', {
    '0%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    '100%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
  }),
  EL = new Xe('antSlideLeftOut', {
    '0%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
    '100%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
  }),
  PL = new Xe('antSlideRightIn', {
    '0%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
    '100%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
  }),
  TL = new Xe('antSlideRightOut', {
    '0%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
    '100%': {
      transform: 'scaleX(0.8)',
      transformOrigin: '100% 0%',
      opacity: 0,
    },
  }),
  OL = {
    'slide-up': { inKeyframes: jC, outKeyframes: zC },
    'slide-down': { inKeyframes: BC, outKeyframes: FC },
    'slide-left': { inKeyframes: CL, outKeyframes: EL },
    'slide-right': { inKeyframes: PL, outKeyframes: TL },
  },
  tc = (e, t) => {
    const { antCls: n } = e,
      r = `${n}-${t}`,
      { inKeyframes: o, outKeyframes: i } = OL[t];
    return [
      tv(r, o, i, e.motionDurationMid),
      {
        [`
      ${r}-enter,
      ${r}-appear
    `]: {
          transform: 'scale(0)',
          transformOrigin: '0% 0%',
          opacity: 0,
          animationTimingFunction: e.motionEaseOutQuint,
          ['&-prepare']: { transform: 'scale(1)' },
        },
        [`${r}-leave`]: { animationTimingFunction: e.motionEaseInQuint },
      },
    ];
  },
  RL = new Xe('antZoomIn', {
    '0%': { transform: 'scale(0.2)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  }),
  ML = new Xe('antZoomOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.2)', opacity: 0 },
  }),
  Uy = new Xe('antZoomBigIn', {
    '0%': { transform: 'scale(0.8)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  }),
  Wy = new Xe('antZoomBigOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.8)', opacity: 0 },
  }),
  $L = new Xe('antZoomUpIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
  }),
  IL = new Xe('antZoomUpOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
  }),
  kL = new Xe('antZoomLeftIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
  }),
  AL = new Xe('antZoomLeftOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
  }),
  NL = new Xe('antZoomRightIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
  }),
  LL = new Xe('antZoomRightOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
    '100%': {
      transform: 'scale(0.8)',
      transformOrigin: '100% 50%',
      opacity: 0,
    },
  }),
  _L = new Xe('antZoomDownIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
  }),
  DL = new Xe('antZoomDownOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
    '100%': {
      transform: 'scale(0.8)',
      transformOrigin: '50% 100%',
      opacity: 0,
    },
  }),
  jL = {
    zoom: { inKeyframes: RL, outKeyframes: ML },
    'zoom-big': { inKeyframes: Uy, outKeyframes: Wy },
    'zoom-big-fast': { inKeyframes: Uy, outKeyframes: Wy },
    'zoom-left': { inKeyframes: kL, outKeyframes: AL },
    'zoom-right': { inKeyframes: NL, outKeyframes: LL },
    'zoom-up': { inKeyframes: $L, outKeyframes: IL },
    'zoom-down': { inKeyframes: _L, outKeyframes: DL },
  },
  nv = (e, t) => {
    const { antCls: n } = e,
      r = `${n}-${t}`,
      { inKeyframes: o, outKeyframes: i } = jL[t];
    return [
      tv(
        r,
        o,
        i,
        t === 'zoom-big-fast' ? e.motionDurationFast : e.motionDurationMid
      ),
      {
        [`
        ${r}-enter,
        ${r}-appear
      `]: {
          transform: 'scale(0)',
          opacity: 0,
          animationTimingFunction: e.motionEaseOutCirc,
          '&-prepare': { transform: 'none' },
        },
        [`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
      },
    ];
  },
  zL = (e) => ({
    [e.componentCls]: {
      [`${e.antCls}-motion-collapse-legacy`]: {
        overflow: 'hidden',
        '&-active': {
          transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`,
        },
      },
      [`${e.antCls}-motion-collapse`]: {
        overflow: 'hidden',
        transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`,
      },
    },
  }),
  BL = zL;
function FL(e) {
  return function (n) {
    return p.exports.createElement(
      Ca,
      { theme: { token: { motion: !1, zIndexPopupBase: 0 } } },
      p.exports.createElement(e, Object.assign({}, n))
    );
  };
}
function VL(e, t, n, r) {
  function o(i) {
    const { prefixCls: a, style: s } = i,
      l = p.exports.useRef(null),
      [u, c] = p.exports.useState(0),
      [f, d] = p.exports.useState(0),
      [m, v] = Qo(!1, { value: i.open }),
      { getPrefixCls: x } = p.exports.useContext(Ht),
      S = x(t || 'select', a);
    p.exports.useEffect(() => {
      if ((v(!0), typeof ResizeObserver < 'u')) {
        const h = new ResizeObserver((b) => {
            const C = b[0].target;
            c(C.offsetHeight + 8), d(C.offsetWidth);
          }),
          g = setInterval(() => {
            var b;
            const C = n ? `.${n(S)}` : `.${S}-dropdown`,
              P =
                (b = l.current) === null || b === void 0
                  ? void 0
                  : b.querySelector(C);
            P && (clearInterval(g), h.observe(P));
          }, 10);
        return () => {
          clearInterval(g), h.disconnect();
        };
      }
    }, []);
    let y = Object.assign(Object.assign({}, i), {
      style: Object.assign(Object.assign({}, s), { margin: 0 }),
      open: m,
      visible: m,
      getPopupContainer: () => l.current,
    });
    return (
      r && (y = r(y)),
      p.exports.createElement(
        'div',
        {
          ref: l,
          style: { paddingBottom: u, position: 'relative', minWidth: f },
        },
        p.exports.createElement(e, Object.assign({}, y))
      )
    );
  }
  return FL(o);
}
const HL = function () {
  if (typeof navigator > 'u' || typeof window > 'u') return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
      e
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
      e == null ? void 0 : e.substr(0, 4)
    )
  );
};
var UL = [
    'prefixCls',
    'invalidate',
    'item',
    'renderItem',
    'responsive',
    'responsiveDisabled',
    'registerSize',
    'itemKey',
    'className',
    'style',
    'children',
    'display',
    'order',
    'component',
  ],
  Si = void 0;
function WL(e, t) {
  var n = e.prefixCls,
    r = e.invalidate,
    o = e.item,
    i = e.renderItem,
    a = e.responsive,
    s = e.responsiveDisabled,
    l = e.registerSize,
    u = e.itemKey,
    c = e.className,
    f = e.style,
    d = e.children,
    m = e.display,
    v = e.order,
    x = e.component,
    S = x === void 0 ? 'div' : x,
    y = Je(e, UL),
    h = a && !m;
  function g(T) {
    l(u, T);
  }
  p.exports.useEffect(function () {
    return function () {
      g(null);
    };
  }, []);
  var b = i && o !== Si ? i(o) : d,
    C;
  r ||
    (C = {
      opacity: h ? 0 : 1,
      height: h ? 0 : Si,
      overflowY: h ? 'hidden' : Si,
      order: a ? v : Si,
      pointerEvents: h ? 'none' : Si,
      position: h ? 'absolute' : Si,
    });
  var P = {};
  h && (P['aria-hidden'] = !0);
  var w = p.exports.createElement(
    S,
    Me({ className: ge(!r && n, c), style: G(G({}, C), f) }, P, y, { ref: t }),
    b
  );
  return (
    a &&
      (w = p.exports.createElement(
        nl,
        {
          onResize: function ($) {
            var N = $.offsetWidth;
            g(N);
          },
          disabled: s,
        },
        w
      )),
    w
  );
}
var hs = p.exports.forwardRef(WL);
hs.displayName = 'Item';
function KL(e) {
  if (typeof MessageChannel > 'u') Qt(e);
  else {
    var t = new MessageChannel();
    (t.port1.onmessage = function () {
      return e();
    }),
      t.port2.postMessage(void 0);
  }
}
function GL() {
  var e = p.exports.useRef(null),
    t = function (r) {
      e.current ||
        ((e.current = []),
        KL(function () {
          oi.exports.unstable_batchedUpdates(function () {
            e.current.forEach(function (o) {
              o();
            }),
              (e.current = null);
          });
        })),
        e.current.push(r);
    };
  return t;
}
function Va(e, t) {
  var n = p.exports.useState(t),
    r = X(n, 2),
    o = r[0],
    i = r[1],
    a = mn(function (s) {
      e(function () {
        i(s);
      });
    });
  return [o, a];
}
var nc = de.createContext(null),
  XL = ['component'],
  QL = ['className'],
  YL = ['className'],
  qL = function (t, n) {
    var r = p.exports.useContext(nc);
    if (!r) {
      var o = t.component,
        i = o === void 0 ? 'div' : o,
        a = Je(t, XL);
      return p.exports.createElement(i, Me({}, a, { ref: n }));
    }
    var s = r.className,
      l = Je(r, QL),
      u = t.className,
      c = Je(t, YL);
    return p.exports.createElement(
      nc.Provider,
      { value: null },
      p.exports.createElement(hs, Me({ ref: n, className: ge(s, u) }, l, c))
    );
  },
  VC = p.exports.forwardRef(qL);
VC.displayName = 'RawItem';
var ZL = [
    'prefixCls',
    'data',
    'renderItem',
    'renderRawItem',
    'itemKey',
    'itemWidth',
    'ssr',
    'style',
    'className',
    'maxCount',
    'renderRest',
    'renderRawRest',
    'suffix',
    'component',
    'itemComponent',
    'onVisibleChange',
  ],
  HC = 'responsive',
  UC = 'invalidate';
function JL(e) {
  return '+ '.concat(e.length, ' ...');
}
function e_(e, t) {
  var n = e.prefixCls,
    r = n === void 0 ? 'rc-overflow' : n,
    o = e.data,
    i = o === void 0 ? [] : o,
    a = e.renderItem,
    s = e.renderRawItem,
    l = e.itemKey,
    u = e.itemWidth,
    c = u === void 0 ? 10 : u,
    f = e.ssr,
    d = e.style,
    m = e.className,
    v = e.maxCount,
    x = e.renderRest,
    S = e.renderRawRest,
    y = e.suffix,
    h = e.component,
    g = h === void 0 ? 'div' : h,
    b = e.itemComponent,
    C = e.onVisibleChange,
    P = Je(e, ZL),
    w = f === 'full',
    T = GL(),
    $ = Va(T, null),
    N = X($, 2),
    j = N[0],
    F = N[1],
    H = j || 0,
    z = Va(T, new Map()),
    V = X(z, 2),
    R = V[0],
    O = V[1],
    E = Va(T, 0),
    k = X(E, 2),
    I = k[0],
    L = k[1],
    B = Va(T, 0),
    J = X(B, 2),
    Q = J[0],
    ne = J[1],
    q = Va(T, 0),
    ae = X(q, 2),
    se = ae[0],
    pe = ae[1],
    Z = p.exports.useState(null),
    me = X(Z, 2),
    Ae = me[0],
    Ve = me[1],
    Re = p.exports.useState(null),
    Ie = X(Re, 2),
    He = Ie[0],
    Ne = Ie[1],
    _ = p.exports.useMemo(
      function () {
        return He === null && w ? Number.MAX_SAFE_INTEGER : He || 0;
      },
      [He, j]
    ),
    A = p.exports.useState(!1),
    D = X(A, 2),
    U = D[0],
    K = D[1],
    Y = ''.concat(r, '-item'),
    le = Math.max(I, Q),
    be = v === HC,
    ue = i.length && be,
    Se = v === UC,
    Ce = ue || (typeof v == 'number' && i.length > v),
    Ee = p.exports.useMemo(
      function () {
        var re = i;
        return (
          ue
            ? j === null && w
              ? (re = i)
              : (re = i.slice(0, Math.min(i.length, H / c)))
            : typeof v == 'number' && (re = i.slice(0, v)),
          re
        );
      },
      [i, c, j, v, ue]
    ),
    De = p.exports.useMemo(
      function () {
        return ue ? i.slice(_ + 1) : i.slice(Ee.length);
      },
      [i, Ee, ue, _]
    ),
    Pe = p.exports.useCallback(
      function (re, he) {
        var je;
        return typeof l == 'function'
          ? l(re)
          : (je = l && (re == null ? void 0 : re[l])) !== null && je !== void 0
          ? je
          : he;
      },
      [l]
    ),
    lt = p.exports.useCallback(
      a ||
        function (re) {
          return re;
        },
      [a]
    );
  function rt(re, he, je) {
    (He === re && (he === void 0 || he === Ae)) ||
      (Ne(re),
      je || (K(re < i.length - 1), C == null || C(re)),
      he !== void 0 && Ve(he));
  }
  function $t(re, he) {
    F(he.clientWidth);
  }
  function ke(re, he) {
    O(function (je) {
      var mt = new Map(je);
      return he === null ? mt.delete(re) : mt.set(re, he), mt;
    });
  }
  function ye(re, he) {
    ne(he), L(Q);
  }
  function ze(re, he) {
    pe(he);
  }
  function ut(re) {
    return R.get(Pe(Ee[re], re));
  }
  Xt(
    function () {
      if (H && typeof le == 'number' && Ee) {
        var re = se,
          he = Ee.length,
          je = he - 1;
        if (!he) {
          rt(0, null);
          return;
        }
        for (var mt = 0; mt < he; mt += 1) {
          var Dt = ut(mt);
          if ((w && (Dt = Dt || 0), Dt === void 0)) {
            rt(mt - 1, void 0, !0);
            break;
          }
          if (
            ((re += Dt),
            (je === 0 && re <= H) || (mt === je - 1 && re + ut(je) <= H))
          ) {
            rt(je, null);
            break;
          } else if (re + le > H) {
            rt(mt - 1, re - Dt - se + Q);
            break;
          }
        }
        y && ut(0) + se > H && Ve(null);
      }
    },
    [H, R, Q, se, Pe, Ee]
  );
  var tt = U && !!De.length,
    Ue = {};
  Ae !== null && ue && (Ue = { position: 'absolute', left: Ae, top: 0 });
  var gt = { prefixCls: Y, responsive: ue, component: b, invalidate: Se },
    Be = s
      ? function (re, he) {
          var je = Pe(re, he);
          return p.exports.createElement(
            nc.Provider,
            {
              key: je,
              value: G(
                G({}, gt),
                {},
                {
                  order: he,
                  item: re,
                  itemKey: je,
                  registerSize: ke,
                  display: he <= _,
                }
              ),
            },
            s(re, he)
          );
        }
      : function (re, he) {
          var je = Pe(re, he);
          return p.exports.createElement(
            hs,
            Me({}, gt, {
              order: he,
              key: je,
              item: re,
              renderItem: lt,
              itemKey: je,
              registerSize: ke,
              display: he <= _,
            })
          );
        },
    yt,
    Te = {
      order: tt ? _ : Number.MAX_SAFE_INTEGER,
      className: ''.concat(Y, '-rest'),
      registerSize: ye,
      display: tt,
    };
  if (S)
    S &&
      (yt = p.exports.createElement(
        nc.Provider,
        { value: G(G({}, gt), Te) },
        S(De)
      ));
  else {
    var ee = x || JL;
    yt = p.exports.createElement(
      hs,
      Me({}, gt, Te),
      typeof ee == 'function' ? ee(De) : ee
    );
  }
  var we = p.exports.createElement(
    g,
    Me({ className: ge(!Se && r, m), style: d, ref: t }, P),
    Ee.map(Be),
    Ce ? yt : null,
    y &&
      p.exports.createElement(
        hs,
        Me({}, gt, {
          responsive: be,
          responsiveDisabled: !ue,
          order: _,
          className: ''.concat(Y, '-suffix'),
          registerSize: ze,
          display: !0,
          style: Ue,
        }),
        y
      )
  );
  return (
    be &&
      (we = p.exports.createElement(nl, { onResize: $t, disabled: !ue }, we)),
    we
  );
}
var Or = p.exports.forwardRef(e_);
Or.displayName = 'Overflow';
Or.Item = VC;
Or.RESPONSIVE = HC;
Or.INVALIDATE = UC;
function t_(e) {
  var t = e.prefixCls,
    n = e.align,
    r = e.arrow,
    o = e.arrowPos,
    i = r || {},
    a = i.className,
    s = i.content,
    l = o.x,
    u = l === void 0 ? 0 : l,
    c = o.y,
    f = c === void 0 ? 0 : c,
    d = p.exports.useRef();
  if (!n || !n.points) return null;
  var m = { position: 'absolute' };
  if (n.autoArrow !== !1) {
    var v = n.points[0],
      x = n.points[1],
      S = v[0],
      y = v[1],
      h = x[0],
      g = x[1];
    S === h || !['t', 'b'].includes(S)
      ? (m.top = f)
      : S === 't'
      ? (m.top = 0)
      : (m.bottom = 0),
      y === g || !['l', 'r'].includes(y)
        ? (m.left = u)
        : y === 'l'
        ? (m.left = 0)
        : (m.right = 0);
  }
  return p.exports.createElement(
    'div',
    { ref: d, className: ge(''.concat(t, '-arrow'), a), style: m },
    s
  );
}
function n_(e) {
  var t = e.prefixCls,
    n = e.open,
    r = e.zIndex,
    o = e.mask,
    i = e.motion;
  return o
    ? p.exports.createElement(
        wa,
        Me({}, i, { motionAppear: !0, visible: n, removeOnLeave: !0 }),
        function (a) {
          var s = a.className;
          return p.exports.createElement('div', {
            style: { zIndex: r },
            className: ge(''.concat(t, '-mask'), s),
          });
        }
      )
    : null;
}
var r_ = p.exports.memo(
    function (e) {
      var t = e.children;
      return t;
    },
    function (e, t) {
      return t.cache;
    }
  ),
  o_ = p.exports.forwardRef(function (e, t) {
    var n = e.popup,
      r = e.className,
      o = e.prefixCls,
      i = e.style,
      a = e.target,
      s = e.onVisibleChanged,
      l = e.open,
      u = e.keepDom,
      c = e.fresh,
      f = e.onClick,
      d = e.mask,
      m = e.arrow,
      v = e.arrowPos,
      x = e.align,
      S = e.motion,
      y = e.maskMotion,
      h = e.forceRender,
      g = e.getPopupContainer,
      b = e.autoDestroy,
      C = e.portal,
      P = e.zIndex,
      w = e.onMouseEnter,
      T = e.onMouseLeave,
      $ = e.onPointerEnter,
      N = e.ready,
      j = e.offsetX,
      F = e.offsetY,
      H = e.offsetR,
      z = e.offsetB,
      V = e.onAlign,
      R = e.onPrepare,
      O = e.stretch,
      E = e.targetWidth,
      k = e.targetHeight,
      I = typeof n == 'function' ? n() : n,
      L = l || u,
      B = (g == null ? void 0 : g.length) > 0,
      J = p.exports.useState(!g || !B),
      Q = X(J, 2),
      ne = Q[0],
      q = Q[1];
    if (
      (Xt(
        function () {
          !ne && B && a && q(!0);
        },
        [ne, B, a]
      ),
      !ne)
    )
      return null;
    var ae = 'auto',
      se = { left: '-1000vw', top: '-1000vh', right: ae, bottom: ae };
    if (N || !l) {
      var pe,
        Z = x.points,
        me =
          x.dynamicInset ||
          ((pe = x._experimental) === null || pe === void 0
            ? void 0
            : pe.dynamicInset),
        Ae = me && Z[0][1] === 'r',
        Ve = me && Z[0][0] === 'b';
      Ae ? ((se.right = H), (se.left = ae)) : ((se.left = j), (se.right = ae)),
        Ve
          ? ((se.bottom = z), (se.top = ae))
          : ((se.top = F), (se.bottom = ae));
    }
    var Re = {};
    return (
      O &&
        (O.includes('height') && k
          ? (Re.height = k)
          : O.includes('minHeight') && k && (Re.minHeight = k),
        O.includes('width') && E
          ? (Re.width = E)
          : O.includes('minWidth') && E && (Re.minWidth = E)),
      l || (Re.pointerEvents = 'none'),
      p.exports.createElement(
        C,
        {
          open: h || L,
          getContainer:
            g &&
            function () {
              return g(a);
            },
          autoDestroy: b,
        },
        p.exports.createElement(n_, {
          prefixCls: o,
          open: l,
          zIndex: P,
          mask: d,
          motion: y,
        }),
        p.exports.createElement(
          nl,
          { onResize: V, disabled: !l },
          function (Ie) {
            return p.exports.createElement(
              wa,
              Me(
                {
                  motionAppear: !0,
                  motionEnter: !0,
                  motionLeave: !0,
                  removeOnLeave: !1,
                  forceRender: h,
                  leavedClassName: ''.concat(o, '-hidden'),
                },
                S,
                {
                  onAppearPrepare: R,
                  onEnterPrepare: R,
                  visible: l,
                  onVisibleChanged: function (Ne) {
                    var _;
                    S == null ||
                      (_ = S.onVisibleChanged) === null ||
                      _ === void 0 ||
                      _.call(S, Ne),
                      s(Ne);
                  },
                }
              ),
              function (He, Ne) {
                var _ = He.className,
                  A = He.style,
                  D = ge(o, _, r);
                return p.exports.createElement(
                  'div',
                  {
                    ref: ba(Ie, t, Ne),
                    className: D,
                    style: G(
                      G(
                        G(
                          G(
                            {
                              '--arrow-x': ''.concat(v.x || 0, 'px'),
                              '--arrow-y': ''.concat(v.y || 0, 'px'),
                            },
                            se
                          ),
                          Re
                        ),
                        A
                      ),
                      {},
                      { boxSizing: 'border-box', zIndex: P },
                      i
                    ),
                    onMouseEnter: w,
                    onMouseLeave: T,
                    onPointerEnter: $,
                    onClick: f,
                  },
                  m &&
                    p.exports.createElement(t_, {
                      prefixCls: o,
                      arrow: m,
                      arrowPos: v,
                      align: x,
                    }),
                  p.exports.createElement(r_, { cache: !l && !c }, I)
                );
              }
            );
          }
        )
      )
    );
  }),
  i_ = p.exports.forwardRef(function (e, t) {
    var n = e.children,
      r = e.getTriggerDOMNode,
      o = So(n),
      i = p.exports.useCallback(
        function (s) {
          zh(t, r ? r(s) : s);
        },
        [r]
      ),
      a = tl(i, n.ref);
    return o ? p.exports.cloneElement(n, { ref: a }) : n;
  }),
  Ky = p.exports.createContext(null);
function Gy(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
function a_(e, t, n, r) {
  return p.exports.useMemo(
    function () {
      var o = Gy(n ?? t),
        i = Gy(r ?? t),
        a = new Set(o),
        s = new Set(i);
      return (
        e &&
          (a.has('hover') && (a.delete('hover'), a.add('click')),
          s.has('hover') && (s.delete('hover'), s.add('click'))),
        [a, s]
      );
    },
    [e, t, n, r]
  );
}
function s_() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function l_(e, t, n, r) {
  for (var o = n.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
    var s,
      l = i[a];
    if (s_((s = e[l]) === null || s === void 0 ? void 0 : s.points, o, r))
      return ''.concat(t, '-placement-').concat(l);
  }
  return '';
}
function Xy(e, t, n, r) {
  return (
    t ||
    (n
      ? { motionName: ''.concat(e, '-').concat(n) }
      : r
      ? { motionName: r }
      : null)
  );
}
function ol(e) {
  return e.ownerDocument.defaultView;
}
function cm(e) {
  for (
    var t = [],
      n = e == null ? void 0 : e.parentElement,
      r = ['hidden', 'scroll', 'clip', 'auto'];
    n;

  ) {
    var o = ol(n).getComputedStyle(n),
      i = o.overflowX,
      a = o.overflowY,
      s = o.overflow;
    [i, a, s].some(function (l) {
      return r.includes(l);
    }) && t.push(n),
      (n = n.parentElement);
  }
  return t;
}
function Hs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Ha(e) {
  return Hs(parseFloat(e), 0);
}
function Qy(e, t) {
  var n = G({}, e);
  return (
    (t || []).forEach(function (r) {
      if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
        var o = ol(r).getComputedStyle(r),
          i = o.overflow,
          a = o.overflowClipMargin,
          s = o.borderTopWidth,
          l = o.borderBottomWidth,
          u = o.borderLeftWidth,
          c = o.borderRightWidth,
          f = r.getBoundingClientRect(),
          d = r.offsetHeight,
          m = r.clientHeight,
          v = r.offsetWidth,
          x = r.clientWidth,
          S = Ha(s),
          y = Ha(l),
          h = Ha(u),
          g = Ha(c),
          b = Hs(Math.round((f.width / v) * 1e3) / 1e3),
          C = Hs(Math.round((f.height / d) * 1e3) / 1e3),
          P = (v - x - h - g) * b,
          w = (d - m - S - y) * C,
          T = S * C,
          $ = y * C,
          N = h * b,
          j = g * b,
          F = 0,
          H = 0;
        if (i === 'clip') {
          var z = Ha(a);
          (F = z * b), (H = z * C);
        }
        var V = f.x + N - F,
          R = f.y + T - H,
          O = V + f.width + 2 * F - N - j - P,
          E = R + f.height + 2 * H - T - $ - w;
        (n.left = Math.max(n.left, V)),
          (n.top = Math.max(n.top, R)),
          (n.right = Math.min(n.right, O)),
          (n.bottom = Math.min(n.bottom, E));
      }
    }),
    n
  );
}
function Yy(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = ''.concat(t),
    r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function qy(e, t) {
  var n = t || [],
    r = X(n, 2),
    o = r[0],
    i = r[1];
  return [Yy(e.width, o), Yy(e.height, i)];
}
function Zy() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
  return [e[0], e[1]];
}
function wi(e, t) {
  var n = t[0],
    r = t[1],
    o,
    i;
  return (
    n === 't'
      ? (i = e.y)
      : n === 'b'
      ? (i = e.y + e.height)
      : (i = e.y + e.height / 2),
    r === 'l'
      ? (o = e.x)
      : r === 'r'
      ? (o = e.x + e.width)
      : (o = e.x + e.width / 2),
    { x: o, y: i }
  );
}
function Fr(e, t) {
  var n = { t: 'b', b: 't', l: 'r', r: 'l' };
  return e
    .map(function (r, o) {
      return o === t ? n[r] || 'c' : r;
    })
    .join('');
}
function u_(e, t, n, r, o, i, a) {
  var s = p.exports.useState({
      ready: !1,
      offsetX: 0,
      offsetY: 0,
      offsetR: 0,
      offsetB: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: o[r] || {},
    }),
    l = X(s, 2),
    u = l[0],
    c = l[1],
    f = p.exports.useRef(0),
    d = p.exports.useMemo(
      function () {
        return t ? cm(t) : [];
      },
      [t]
    ),
    m = p.exports.useRef({}),
    v = function () {
      m.current = {};
    };
  e || v();
  var x = mn(function () {
      if (t && n && e) {
        let At = function (ul, hr) {
            var Ro =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : D,
              yi = I.x + ul,
              Ra = I.y + hr,
              dd = yi + pe,
              fd = Ra + se,
              pd = Math.max(yi, Ro.left),
              md = Math.max(Ra, Ro.top),
              oe = Math.min(dd, Ro.right),
              xe = Math.min(fd, Ro.bottom);
            return Math.max(0, (oe - pd) * (xe - md));
          },
          Oa = function () {
            (Ln = I.y + ee), (_n = Ln + se), (Zn = I.x + Te), (lr = Zn + pe);
          };
        var bE = At,
          SE = Oa,
          h,
          g,
          b = t,
          C = b.ownerDocument,
          P = ol(b),
          w = P.getComputedStyle(b),
          T = w.width,
          $ = w.height,
          N = w.position,
          j = b.style.left,
          F = b.style.top,
          H = b.style.right,
          z = b.style.bottom,
          V = b.style.overflow,
          R = G(G({}, o[r]), i),
          O = C.createElement('div');
        (h = b.parentElement) === null || h === void 0 || h.appendChild(O),
          (O.style.left = ''.concat(b.offsetLeft, 'px')),
          (O.style.top = ''.concat(b.offsetTop, 'px')),
          (O.style.position = N),
          (O.style.height = ''.concat(b.offsetHeight, 'px')),
          (O.style.width = ''.concat(b.offsetWidth, 'px')),
          (b.style.left = '0'),
          (b.style.top = '0'),
          (b.style.right = 'auto'),
          (b.style.bottom = 'auto'),
          (b.style.overflow = 'hidden');
        var E;
        if (Array.isArray(n)) E = { x: n[0], y: n[1], width: 0, height: 0 };
        else {
          var k = n.getBoundingClientRect();
          E = { x: k.x, y: k.y, width: k.width, height: k.height };
        }
        var I = b.getBoundingClientRect(),
          L = C.documentElement,
          B = L.clientWidth,
          J = L.clientHeight,
          Q = L.scrollWidth,
          ne = L.scrollHeight,
          q = L.scrollTop,
          ae = L.scrollLeft,
          se = I.height,
          pe = I.width,
          Z = E.height,
          me = E.width,
          Ae = { left: 0, top: 0, right: B, bottom: J },
          Ve = { left: -ae, top: -q, right: Q - ae, bottom: ne - q },
          Re = R.htmlRegion,
          Ie = 'visible',
          He = 'visibleFirst';
        Re !== 'scroll' && Re !== He && (Re = Ie);
        var Ne = Re === He,
          _ = Qy(Ve, d),
          A = Qy(Ae, d),
          D = Re === Ie ? A : _,
          U = Ne ? A : D;
        (b.style.left = 'auto'),
          (b.style.top = 'auto'),
          (b.style.right = '0'),
          (b.style.bottom = '0');
        var K = b.getBoundingClientRect();
        (b.style.left = j),
          (b.style.top = F),
          (b.style.right = H),
          (b.style.bottom = z),
          (b.style.overflow = V),
          (g = b.parentElement) === null || g === void 0 || g.removeChild(O);
        var Y = Hs(Math.round((pe / parseFloat(T)) * 1e3) / 1e3),
          le = Hs(Math.round((se / parseFloat($)) * 1e3) / 1e3);
        if (Y === 0 || le === 0 || (Gu(n) && !qh(n))) return;
        var be = R.offset,
          ue = R.targetOffset,
          Se = qy(I, be),
          Ce = X(Se, 2),
          Ee = Ce[0],
          De = Ce[1],
          Pe = qy(E, ue),
          lt = X(Pe, 2),
          rt = lt[0],
          $t = lt[1];
        (E.x -= rt), (E.y -= $t);
        var ke = R.points || [],
          ye = X(ke, 2),
          ze = ye[0],
          ut = ye[1],
          tt = Zy(ut),
          Ue = Zy(ze),
          gt = wi(E, tt),
          Be = wi(I, Ue),
          yt = G({}, R),
          Te = gt.x - Be.x + Ee,
          ee = gt.y - Be.y + De,
          we = At(Te, ee),
          re = At(Te, ee, A),
          he = wi(E, ['t', 'l']),
          je = wi(I, ['t', 'l']),
          mt = wi(E, ['b', 'r']),
          Dt = wi(I, ['b', 'r']),
          wt = R.overflow || {},
          Lr = wt.adjustX,
          Nn = wt.adjustY,
          qn = wt.shiftX,
          Ct = wt.shiftY,
          Sn = function (hr) {
            return typeof hr == 'boolean' ? hr : hr >= 0;
          },
          Ln,
          _n,
          Zn,
          lr;
        Oa();
        var Po = Sn(Nn),
          To = Ue[0] === tt[0];
        if (Po && Ue[0] === 't' && (_n > U.bottom || m.current.bt)) {
          var ur = ee;
          To ? (ur -= se - Z) : (ur = he.y - Dt.y - De);
          var cr = At(Te, ur),
            Pa = At(Te, ur, A);
          cr > we || (cr === we && (!Ne || Pa >= re))
            ? ((m.current.bt = !0),
              (ee = ur),
              (De = -De),
              (yt.points = [Fr(Ue, 0), Fr(tt, 0)]))
            : (m.current.bt = !1);
        }
        if (Po && Ue[0] === 'b' && (Ln < U.top || m.current.tb)) {
          var Et = ee;
          To ? (Et += se - Z) : (Et = mt.y - je.y - De);
          var Oo = At(Te, Et),
            dr = At(Te, Et, A);
          Oo > we || (Oo === we && (!Ne || dr >= re))
            ? ((m.current.tb = !0),
              (ee = Et),
              (De = -De),
              (yt.points = [Fr(Ue, 0), Fr(tt, 0)]))
            : (m.current.tb = !1);
        }
        var _r = Sn(Lr),
          pi = Ue[1] === tt[1];
        if (_r && Ue[1] === 'l' && (lr > U.right || m.current.rl)) {
          var fr = Te;
          pi ? (fr -= pe - me) : (fr = he.x - Dt.x - Ee);
          var mi = At(fr, ee),
            hi = At(fr, ee, A);
          mi > we || (mi === we && (!Ne || hi >= re))
            ? ((m.current.rl = !0),
              (Te = fr),
              (Ee = -Ee),
              (yt.points = [Fr(Ue, 1), Fr(tt, 1)]))
            : (m.current.rl = !1);
        }
        if (_r && Ue[1] === 'r' && (Zn < U.left || m.current.lr)) {
          var wn = Te;
          pi ? (wn += pe - me) : (wn = mt.x - je.x - Ee);
          var vi = At(wn, ee),
            Dr = At(wn, ee, A);
          vi > we || (vi === we && (!Ne || Dr >= re))
            ? ((m.current.lr = !0),
              (Te = wn),
              (Ee = -Ee),
              (yt.points = [Fr(Ue, 1), Fr(tt, 1)]))
            : (m.current.lr = !1);
        }
        Oa();
        var Dn = qn === !0 ? 0 : qn;
        typeof Dn == 'number' &&
          (Zn < A.left &&
            ((Te -= Zn - A.left - Ee),
            E.x + me < A.left + Dn && (Te += E.x - A.left + me - Dn)),
          lr > A.right &&
            ((Te -= lr - A.right - Ee),
            E.x > A.right - Dn && (Te += E.x - A.right + Dn)));
        var Jn = Ct === !0 ? 0 : Ct;
        typeof Jn == 'number' &&
          (Ln < A.top &&
            ((ee -= Ln - A.top - De),
            E.y + Z < A.top + Jn && (ee += E.y - A.top + Z - Jn)),
          _n > A.bottom &&
            ((ee -= _n - A.bottom - De),
            E.y > A.bottom - Jn && (ee += E.y - A.bottom + Jn)));
        var jr = I.x + Te,
          zr = jr + pe,
          jn = I.y + ee,
          gi = jn + se,
          pr = E.x,
          Fe = pr + me,
          Le = E.y,
          Ge = Le + Z,
          It = Math.max(jr, pr),
          kt = Math.min(zr, Fe),
          zn = (It + kt) / 2,
          mr = zn - jr,
          Ta = Math.max(jn, Le),
          sl = Math.min(gi, Ge),
          ld = (Ta + sl) / 2,
          ud = ld - jn;
        a == null || a(t, yt);
        var ll = K.right - I.x - (Te + I.width),
          cd = K.bottom - I.y - (ee + I.height);
        c({
          ready: !0,
          offsetX: Te / Y,
          offsetY: ee / le,
          offsetR: ll / Y,
          offsetB: cd / le,
          arrowX: mr / Y,
          arrowY: ud / le,
          scaleX: Y,
          scaleY: le,
          align: yt,
        });
      }
    }),
    S = function () {
      f.current += 1;
      var g = f.current;
      Promise.resolve().then(function () {
        f.current === g && x();
      });
    },
    y = function () {
      c(function (g) {
        return G(G({}, g), {}, { ready: !1 });
      });
    };
  return (
    Xt(y, [r]),
    Xt(
      function () {
        e || y();
      },
      [e]
    ),
    [
      u.ready,
      u.offsetX,
      u.offsetY,
      u.offsetR,
      u.offsetB,
      u.arrowX,
      u.arrowY,
      u.scaleX,
      u.scaleY,
      u.align,
      S,
    ]
  );
}
function c_(e, t, n, r, o) {
  Xt(
    function () {
      if (e && t && n) {
        let d = function () {
          r(), o();
        };
        var f = d,
          i = t,
          a = n,
          s = cm(i),
          l = cm(a),
          u = ol(a),
          c = new Set([u].concat(Mt(s), Mt(l)));
        return (
          c.forEach(function (m) {
            m.addEventListener('scroll', d, { passive: !0 });
          }),
          u.addEventListener('resize', d, { passive: !0 }),
          r(),
          function () {
            c.forEach(function (m) {
              m.removeEventListener('scroll', d),
                u.removeEventListener('resize', d);
            });
          }
        );
      }
    },
    [e, t, n]
  );
}
function d_(e, t, n, r, o, i, a, s) {
  var l = p.exports.useRef(e),
    u = p.exports.useRef(!1);
  l.current !== e && ((u.current = !0), (l.current = e)),
    p.exports.useEffect(
      function () {
        var c = Qt(function () {
          u.current = !1;
        });
        return function () {
          Qt.cancel(c);
        };
      },
      [e]
    ),
    p.exports.useEffect(
      function () {
        if (t && r && (!o || i)) {
          var c = function () {
              var P = !1,
                w = function (N) {
                  var j = N.target;
                  P = a(j);
                },
                T = function (N) {
                  var j = N.target;
                  !u.current && l.current && !P && !a(j) && s(!1);
                };
              return [w, T];
            },
            f = c(),
            d = X(f, 2),
            m = d[0],
            v = d[1],
            x = c(),
            S = X(x, 2),
            y = S[0],
            h = S[1],
            g = ol(r);
          g.addEventListener('mousedown', m, !0),
            g.addEventListener('click', v, !0),
            g.addEventListener('contextmenu', v, !0);
          var b = Ku(n);
          return (
            b &&
              (b.addEventListener('mousedown', y, !0),
              b.addEventListener('click', h, !0),
              b.addEventListener('contextmenu', h, !0)),
            function () {
              g.removeEventListener('mousedown', m, !0),
                g.removeEventListener('click', v, !0),
                g.removeEventListener('contextmenu', v, !0),
                b &&
                  (b.removeEventListener('mousedown', y, !0),
                  b.removeEventListener('click', h, !0),
                  b.removeEventListener('contextmenu', h, !0));
            }
          );
        }
      },
      [t, n, r, o, i]
    );
}
var f_ = [
  'prefixCls',
  'children',
  'action',
  'showAction',
  'hideAction',
  'popupVisible',
  'defaultPopupVisible',
  'onPopupVisibleChange',
  'afterPopupVisibleChange',
  'mouseEnterDelay',
  'mouseLeaveDelay',
  'focusDelay',
  'blurDelay',
  'mask',
  'maskClosable',
  'getPopupContainer',
  'forceRender',
  'autoDestroy',
  'destroyPopupOnHide',
  'popup',
  'popupClassName',
  'popupStyle',
  'popupPlacement',
  'builtinPlacements',
  'popupAlign',
  'zIndex',
  'stretch',
  'getPopupClassNameFromAlign',
  'fresh',
  'alignPoint',
  'onPopupClick',
  'onPopupAlign',
  'arrow',
  'popupMotion',
  'maskMotion',
  'popupTransitionName',
  'popupAnimation',
  'maskTransitionName',
  'maskAnimation',
  'className',
  'getTriggerDOMNode',
];
function p_() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DC,
    t = p.exports.forwardRef(function (n, r) {
      var o = n.prefixCls,
        i = o === void 0 ? 'rc-trigger-popup' : o,
        a = n.children,
        s = n.action,
        l = s === void 0 ? 'hover' : s,
        u = n.showAction,
        c = n.hideAction,
        f = n.popupVisible,
        d = n.defaultPopupVisible,
        m = n.onPopupVisibleChange,
        v = n.afterPopupVisibleChange,
        x = n.mouseEnterDelay,
        S = n.mouseLeaveDelay,
        y = S === void 0 ? 0.1 : S,
        h = n.focusDelay,
        g = n.blurDelay,
        b = n.mask,
        C = n.maskClosable,
        P = C === void 0 ? !0 : C,
        w = n.getPopupContainer,
        T = n.forceRender,
        $ = n.autoDestroy,
        N = n.destroyPopupOnHide,
        j = n.popup,
        F = n.popupClassName,
        H = n.popupStyle,
        z = n.popupPlacement,
        V = n.builtinPlacements,
        R = V === void 0 ? {} : V,
        O = n.popupAlign,
        E = n.zIndex,
        k = n.stretch,
        I = n.getPopupClassNameFromAlign,
        L = n.fresh,
        B = n.alignPoint,
        J = n.onPopupClick,
        Q = n.onPopupAlign,
        ne = n.arrow,
        q = n.popupMotion,
        ae = n.maskMotion,
        se = n.popupTransitionName,
        pe = n.popupAnimation,
        Z = n.maskTransitionName,
        me = n.maskAnimation,
        Ae = n.className,
        Ve = n.getTriggerDOMNode,
        Re = Je(n, f_),
        Ie = $ || N || !1,
        He = p.exports.useState(!1),
        Ne = X(He, 2),
        _ = Ne[0],
        A = Ne[1];
      Xt(function () {
        A(HL());
      }, []);
      var D = p.exports.useRef({}),
        U = p.exports.useContext(Ky),
        K = p.exports.useMemo(
          function () {
            return {
              registerSubPopup: function (xe, ct) {
                (D.current[xe] = ct), U == null || U.registerSubPopup(xe, ct);
              },
            };
          },
          [U]
        ),
        Y = dL(),
        le = p.exports.useState(null),
        be = X(le, 2),
        ue = be[0],
        Se = be[1],
        Ce = mn(function (oe) {
          Gu(oe) && ue !== oe && Se(oe), U == null || U.registerSubPopup(Y, oe);
        }),
        Ee = p.exports.useState(null),
        De = X(Ee, 2),
        Pe = De[0],
        lt = De[1],
        rt = p.exports.useRef(null),
        $t = mn(function (oe) {
          Gu(oe) && Pe !== oe && (lt(oe), (rt.current = oe));
        }),
        ke = p.exports.Children.only(a),
        ye = (ke == null ? void 0 : ke.props) || {},
        ze = {},
        ut = mn(function (oe) {
          var xe,
            ct,
            Pt = Pe;
          return (
            (Pt == null ? void 0 : Pt.contains(oe)) ||
            ((xe = Ku(Pt)) === null || xe === void 0 ? void 0 : xe.host) ===
              oe ||
            oe === Pt ||
            (ue == null ? void 0 : ue.contains(oe)) ||
            ((ct = Ku(ue)) === null || ct === void 0 ? void 0 : ct.host) ===
              oe ||
            oe === ue ||
            Object.values(D.current).some(function (dt) {
              return (dt == null ? void 0 : dt.contains(oe)) || oe === dt;
            })
          );
        }),
        tt = Xy(i, q, pe, se),
        Ue = Xy(i, ae, me, Z),
        gt = p.exports.useState(d || !1),
        Be = X(gt, 2),
        yt = Be[0],
        Te = Be[1],
        ee = f ?? yt,
        we = mn(function (oe) {
          f === void 0 && Te(oe);
        });
      Xt(
        function () {
          Te(f || !1);
        },
        [f]
      );
      var re = p.exports.useRef(ee);
      re.current = ee;
      var he = p.exports.useRef([]);
      he.current = [];
      var je = mn(function (oe) {
          var xe;
          we(oe),
            ((xe = he.current[he.current.length - 1]) !== null && xe !== void 0
              ? xe
              : ee) !== oe && (he.current.push(oe), m == null || m(oe));
        }),
        mt = p.exports.useRef(),
        Dt = function () {
          clearTimeout(mt.current);
        },
        wt = function (xe) {
          var ct =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          Dt(),
            ct === 0
              ? je(xe)
              : (mt.current = setTimeout(function () {
                  je(xe);
                }, ct * 1e3));
        };
      p.exports.useEffect(function () {
        return Dt;
      }, []);
      var Lr = p.exports.useState(!1),
        Nn = X(Lr, 2),
        qn = Nn[0],
        Ct = Nn[1];
      Xt(
        function (oe) {
          (!oe || ee) && Ct(!0);
        },
        [ee]
      );
      var Sn = p.exports.useState(null),
        Ln = X(Sn, 2),
        _n = Ln[0],
        Zn = Ln[1],
        lr = p.exports.useState([0, 0]),
        Po = X(lr, 2),
        To = Po[0],
        ur = Po[1],
        cr = function (xe) {
          ur([xe.clientX, xe.clientY]);
        },
        Pa = u_(ee, ue, B ? To : Pe, z, R, O, Q),
        Et = X(Pa, 11),
        Oo = Et[0],
        dr = Et[1],
        _r = Et[2],
        pi = Et[3],
        fr = Et[4],
        mi = Et[5],
        hi = Et[6],
        wn = Et[7],
        vi = Et[8],
        Dr = Et[9],
        Dn = Et[10],
        Jn = a_(_, l, u, c),
        jr = X(Jn, 2),
        zr = jr[0],
        jn = jr[1],
        gi = zr.has('click'),
        pr = jn.has('click') || jn.has('contextMenu'),
        Fe = mn(function () {
          qn || Dn();
        }),
        Le = function () {
          re.current && B && pr && wt(!1);
        };
      c_(ee, Pe, ue, Fe, Le),
        Xt(
          function () {
            Fe();
          },
          [To, z]
        ),
        Xt(
          function () {
            ee && !(R != null && R[z]) && Fe();
          },
          [JSON.stringify(O)]
        );
      var Ge = p.exports.useMemo(
        function () {
          var oe = l_(R, i, Dr, B);
          return ge(oe, I == null ? void 0 : I(Dr));
        },
        [Dr, I, R, i, B]
      );
      p.exports.useImperativeHandle(r, function () {
        return { nativeElement: rt.current, forceAlign: Fe };
      });
      var It = p.exports.useState(0),
        kt = X(It, 2),
        zn = kt[0],
        mr = kt[1],
        Ta = p.exports.useState(0),
        sl = X(Ta, 2),
        ld = sl[0],
        ud = sl[1],
        ll = function () {
          if (k && Pe) {
            var xe = Pe.getBoundingClientRect();
            mr(xe.width), ud(xe.height);
          }
        },
        cd = function () {
          ll(), Fe();
        },
        bE = function (xe) {
          Ct(!1), Dn(), v == null || v(xe);
        },
        SE = function () {
          return new Promise(function (xe) {
            ll(),
              Zn(function () {
                return xe;
              });
          });
        };
      Xt(
        function () {
          _n && (Dn(), _n(), Zn(null));
        },
        [_n]
      );
      function At(oe, xe, ct, Pt) {
        ze[oe] = function (dt) {
          var cl;
          Pt == null || Pt(dt), wt(xe, ct);
          for (
            var hd = arguments.length,
              fv = new Array(hd > 1 ? hd - 1 : 0),
              dl = 1;
            dl < hd;
            dl++
          )
            fv[dl - 1] = arguments[dl];
          (cl = ye[oe]) === null ||
            cl === void 0 ||
            cl.call.apply(cl, [ye, dt].concat(fv));
        };
      }
      (gi || pr) &&
        (ze.onClick = function (oe) {
          var xe;
          re.current && pr ? wt(!1) : !re.current && gi && (cr(oe), wt(!0));
          for (
            var ct = arguments.length,
              Pt = new Array(ct > 1 ? ct - 1 : 0),
              dt = 1;
            dt < ct;
            dt++
          )
            Pt[dt - 1] = arguments[dt];
          (xe = ye.onClick) === null ||
            xe === void 0 ||
            xe.call.apply(xe, [ye, oe].concat(Pt));
        }),
        d_(ee, pr, Pe, ue, b, P, ut, wt);
      var Oa = zr.has('hover'),
        ul = jn.has('hover'),
        hr,
        Ro;
      Oa &&
        (At('onMouseEnter', !0, x, function (oe) {
          cr(oe);
        }),
        At('onPointerEnter', !0, x, function (oe) {
          cr(oe);
        }),
        (hr = function () {
          (ee || qn) && wt(!0, x);
        }),
        B &&
          (ze.onMouseMove = function (oe) {
            var xe;
            (xe = ye.onMouseMove) === null || xe === void 0 || xe.call(ye, oe);
          })),
        ul &&
          (At('onMouseLeave', !1, y),
          At('onPointerLeave', !1, y),
          (Ro = function () {
            wt(!1, y);
          })),
        zr.has('focus') && At('onFocus', !0, h),
        jn.has('focus') && At('onBlur', !1, g),
        zr.has('contextMenu') &&
          (ze.onContextMenu = function (oe) {
            var xe;
            re.current && jn.has('contextMenu') ? wt(!1) : (cr(oe), wt(!0)),
              oe.preventDefault();
            for (
              var ct = arguments.length,
                Pt = new Array(ct > 1 ? ct - 1 : 0),
                dt = 1;
              dt < ct;
              dt++
            )
              Pt[dt - 1] = arguments[dt];
            (xe = ye.onContextMenu) === null ||
              xe === void 0 ||
              xe.call.apply(xe, [ye, oe].concat(Pt));
          }),
        Ae && (ze.className = ge(ye.className, Ae));
      var yi = G(G({}, ye), ze),
        Ra = {},
        dd = [
          'onContextMenu',
          'onClick',
          'onMouseDown',
          'onTouchStart',
          'onMouseEnter',
          'onMouseLeave',
          'onFocus',
          'onBlur',
        ];
      dd.forEach(function (oe) {
        Re[oe] &&
          (Ra[oe] = function () {
            for (
              var xe, ct = arguments.length, Pt = new Array(ct), dt = 0;
              dt < ct;
              dt++
            )
              Pt[dt] = arguments[dt];
            (xe = yi[oe]) === null ||
              xe === void 0 ||
              xe.call.apply(xe, [yi].concat(Pt)),
              Re[oe].apply(Re, Pt);
          });
      });
      var fd = p.exports.cloneElement(ke, G(G({}, yi), Ra)),
        pd = { x: mi, y: hi },
        md = ne ? G({}, ne !== !0 ? ne : {}) : null;
      return p.exports.createElement(
        p.exports.Fragment,
        null,
        p.exports.createElement(
          nl,
          { disabled: !ee, ref: $t, onResize: cd },
          p.exports.createElement(i_, { getTriggerDOMNode: Ve }, fd)
        ),
        p.exports.createElement(
          Ky.Provider,
          { value: K },
          p.exports.createElement(o_, {
            portal: e,
            ref: Ce,
            prefixCls: i,
            popup: j,
            className: ge(F, Ge),
            style: H,
            target: Pe,
            onMouseEnter: hr,
            onMouseLeave: Ro,
            onPointerEnter: hr,
            zIndex: E,
            open: ee,
            keepDom: qn,
            fresh: L,
            onClick: J,
            mask: b,
            motion: tt,
            maskMotion: Ue,
            onVisibleChanged: bE,
            onPrepare: SE,
            forceRender: T,
            autoDestroy: Ie,
            getPopupContainer: w,
            align: Dr,
            arrow: md,
            arrowPos: pd,
            ready: Oo,
            offsetX: dr,
            offsetY: _r,
            offsetR: pi,
            offsetB: fr,
            onAlign: Fe,
            stretch: k,
            targetWidth: zn / wn,
            targetHeight: ld / vi,
          })
        )
      );
    });
  return t;
}
const rv = p_(DC);
function WC(e) {
  var t = e.children,
    n = e.prefixCls,
    r = e.id,
    o = e.overlayInnerStyle,
    i = e.className,
    a = e.style;
  return p.exports.createElement(
    'div',
    { className: ge(''.concat(n, '-content'), i), style: a },
    p.exports.createElement(
      'div',
      { className: ''.concat(n, '-inner'), id: r, role: 'tooltip', style: o },
      typeof t == 'function' ? t() : t
    )
  );
}
var Ci = { shiftX: 64, adjustY: 1 },
  Ei = { adjustX: 1, shiftY: !0 },
  En = [0, 0],
  m_ = {
    left: {
      points: ['cr', 'cl'],
      overflow: Ei,
      offset: [-4, 0],
      targetOffset: En,
    },
    right: {
      points: ['cl', 'cr'],
      overflow: Ei,
      offset: [4, 0],
      targetOffset: En,
    },
    top: {
      points: ['bc', 'tc'],
      overflow: Ci,
      offset: [0, -4],
      targetOffset: En,
    },
    bottom: {
      points: ['tc', 'bc'],
      overflow: Ci,
      offset: [0, 4],
      targetOffset: En,
    },
    topLeft: {
      points: ['bl', 'tl'],
      overflow: Ci,
      offset: [0, -4],
      targetOffset: En,
    },
    leftTop: {
      points: ['tr', 'tl'],
      overflow: Ei,
      offset: [-4, 0],
      targetOffset: En,
    },
    topRight: {
      points: ['br', 'tr'],
      overflow: Ci,
      offset: [0, -4],
      targetOffset: En,
    },
    rightTop: {
      points: ['tl', 'tr'],
      overflow: Ei,
      offset: [4, 0],
      targetOffset: En,
    },
    bottomRight: {
      points: ['tr', 'br'],
      overflow: Ci,
      offset: [0, 4],
      targetOffset: En,
    },
    rightBottom: {
      points: ['bl', 'br'],
      overflow: Ei,
      offset: [4, 0],
      targetOffset: En,
    },
    bottomLeft: {
      points: ['tl', 'bl'],
      overflow: Ci,
      offset: [0, 4],
      targetOffset: En,
    },
    leftBottom: {
      points: ['br', 'bl'],
      overflow: Ei,
      offset: [-4, 0],
      targetOffset: En,
    },
  },
  h_ = [
    'overlayClassName',
    'trigger',
    'mouseEnterDelay',
    'mouseLeaveDelay',
    'overlayStyle',
    'prefixCls',
    'children',
    'onVisibleChange',
    'afterVisibleChange',
    'transitionName',
    'animation',
    'motion',
    'placement',
    'align',
    'destroyTooltipOnHide',
    'defaultVisible',
    'getTooltipContainer',
    'overlayInnerStyle',
    'arrowContent',
    'overlay',
    'id',
    'showArrow',
  ],
  v_ = function (t, n) {
    var r = t.overlayClassName,
      o = t.trigger,
      i = o === void 0 ? ['hover'] : o,
      a = t.mouseEnterDelay,
      s = a === void 0 ? 0 : a,
      l = t.mouseLeaveDelay,
      u = l === void 0 ? 0.1 : l,
      c = t.overlayStyle,
      f = t.prefixCls,
      d = f === void 0 ? 'rc-tooltip' : f,
      m = t.children,
      v = t.onVisibleChange,
      x = t.afterVisibleChange,
      S = t.transitionName,
      y = t.animation,
      h = t.motion,
      g = t.placement,
      b = g === void 0 ? 'right' : g,
      C = t.align,
      P = C === void 0 ? {} : C,
      w = t.destroyTooltipOnHide,
      T = w === void 0 ? !1 : w,
      $ = t.defaultVisible,
      N = t.getTooltipContainer,
      j = t.overlayInnerStyle;
    t.arrowContent;
    var F = t.overlay,
      H = t.id,
      z = t.showArrow,
      V = z === void 0 ? !0 : z,
      R = Je(t, h_),
      O = p.exports.useRef(null);
    p.exports.useImperativeHandle(n, function () {
      return O.current;
    });
    var E = G({}, R);
    'visible' in t && (E.popupVisible = t.visible);
    var k = function () {
      return p.exports.createElement(
        WC,
        { key: 'content', prefixCls: d, id: H, overlayInnerStyle: j },
        F
      );
    };
    return p.exports.createElement(
      rv,
      Me(
        {
          popupClassName: r,
          prefixCls: d,
          popup: k,
          action: i,
          builtinPlacements: m_,
          popupPlacement: b,
          ref: O,
          popupAlign: P,
          getPopupContainer: N,
          onPopupVisibleChange: v,
          afterPopupVisibleChange: x,
          popupTransitionName: S,
          popupAnimation: y,
          popupMotion: h,
          defaultPopupVisible: $,
          autoDestroy: T,
          mouseLeaveDelay: u,
          popupStyle: c,
          mouseEnterDelay: s,
          arrow: V,
        },
        E
      ),
      m
    );
  };
const g_ = p.exports.forwardRef(v_),
  KC = 8;
function ov(e) {
  const t = KC,
    { contentRadius: n, limitVerticalRadius: r } = e,
    o = n > 12 ? n + 2 : 12;
  return { dropdownArrowOffset: o, dropdownArrowOffsetVertical: r ? t : o };
}
function Hl(e, t) {
  return e ? t : {};
}
function GC(e, t) {
  const {
      componentCls: n,
      sizePopupArrow: r,
      borderRadiusXS: o,
      borderRadiusOuter: i,
      boxShadowPopoverArrow: a,
    } = e,
    {
      colorBg: s,
      contentRadius: l = e.borderRadiusLG,
      limitVerticalRadius: u,
      arrowDistance: c = 0,
      arrowPlacement: f = { left: !0, right: !0, top: !0, bottom: !0 },
    } = t,
    { dropdownArrowOffsetVertical: d, dropdownArrowOffset: m } = ov({
      contentRadius: l,
      limitVerticalRadius: u,
    });
  return {
    [n]: Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {
              [`${n}-arrow`]: [
                Object.assign(
                  Object.assign(
                    { position: 'absolute', zIndex: 1, display: 'block' },
                    e5(r, o, i, s, a)
                  ),
                  { '&:before': { background: s } }
                ),
              ],
            },
            Hl(!!f.top, {
              [[
                `&-placement-top ${n}-arrow`,
                `&-placement-topLeft ${n}-arrow`,
                `&-placement-topRight ${n}-arrow`,
              ].join(',')]: {
                bottom: c,
                transform: 'translateY(100%) rotate(180deg)',
              },
              [`&-placement-top ${n}-arrow`]: {
                left: { _skip_check_: !0, value: '50%' },
                transform: 'translateX(-50%) translateY(100%) rotate(180deg)',
              },
              [`&-placement-topLeft ${n}-arrow`]: {
                left: { _skip_check_: !0, value: m },
              },
              [`&-placement-topRight ${n}-arrow`]: {
                right: { _skip_check_: !0, value: m },
              },
            })
          ),
          Hl(!!f.bottom, {
            [[
              `&-placement-bottom ${n}-arrow`,
              `&-placement-bottomLeft ${n}-arrow`,
              `&-placement-bottomRight ${n}-arrow`,
            ].join(',')]: { top: c, transform: 'translateY(-100%)' },
            [`&-placement-bottom ${n}-arrow`]: {
              left: { _skip_check_: !0, value: '50%' },
              transform: 'translateX(-50%) translateY(-100%)',
            },
            [`&-placement-bottomLeft ${n}-arrow`]: {
              left: { _skip_check_: !0, value: m },
            },
            [`&-placement-bottomRight ${n}-arrow`]: {
              right: { _skip_check_: !0, value: m },
            },
          })
        ),
        Hl(!!f.left, {
          [[
            `&-placement-left ${n}-arrow`,
            `&-placement-leftTop ${n}-arrow`,
            `&-placement-leftBottom ${n}-arrow`,
          ].join(',')]: {
            right: { _skip_check_: !0, value: c },
            transform: 'translateX(100%) rotate(90deg)',
          },
          [`&-placement-left ${n}-arrow`]: {
            top: { _skip_check_: !0, value: '50%' },
            transform: 'translateY(-50%) translateX(100%) rotate(90deg)',
          },
          [`&-placement-leftTop ${n}-arrow`]: { top: d },
          [`&-placement-leftBottom ${n}-arrow`]: { bottom: d },
        })
      ),
      Hl(!!f.right, {
        [[
          `&-placement-right ${n}-arrow`,
          `&-placement-rightTop ${n}-arrow`,
          `&-placement-rightBottom ${n}-arrow`,
        ].join(',')]: {
          left: { _skip_check_: !0, value: c },
          transform: 'translateX(-100%) rotate(-90deg)',
        },
        [`&-placement-right ${n}-arrow`]: {
          top: { _skip_check_: !0, value: '50%' },
          transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)',
        },
        [`&-placement-rightTop ${n}-arrow`]: { top: d },
        [`&-placement-rightBottom ${n}-arrow`]: { bottom: d },
      })
    ),
  };
}
function y_(e, t, n, r) {
  if (r === !1) return { adjustX: !1, adjustY: !1 };
  const o = r && typeof r == 'object' ? r : {},
    i = {};
  switch (e) {
    case 'top':
    case 'bottom':
      (i.shiftX = t.dropdownArrowOffset * 2 + n),
        (i.shiftY = !0),
        (i.adjustY = !0);
      break;
    case 'left':
    case 'right':
      (i.shiftY = t.dropdownArrowOffsetVertical * 2 + n),
        (i.shiftX = !0),
        (i.adjustX = !0);
      break;
  }
  const a = Object.assign(Object.assign({}, i), o);
  return a.shiftX || (a.adjustX = !0), a.shiftY || (a.adjustY = !0), a;
}
const Jy = {
    left: { points: ['cr', 'cl'] },
    right: { points: ['cl', 'cr'] },
    top: { points: ['bc', 'tc'] },
    bottom: { points: ['tc', 'bc'] },
    topLeft: { points: ['bl', 'tl'] },
    leftTop: { points: ['tr', 'tl'] },
    topRight: { points: ['br', 'tr'] },
    rightTop: { points: ['tl', 'tr'] },
    bottomRight: { points: ['tr', 'br'] },
    rightBottom: { points: ['bl', 'br'] },
    bottomLeft: { points: ['tl', 'bl'] },
    leftBottom: { points: ['br', 'bl'] },
  },
  x_ = {
    topLeft: { points: ['bl', 'tc'] },
    leftTop: { points: ['tr', 'cl'] },
    topRight: { points: ['br', 'tc'] },
    rightTop: { points: ['tl', 'cr'] },
    bottomRight: { points: ['tr', 'bc'] },
    rightBottom: { points: ['bl', 'cr'] },
    bottomLeft: { points: ['tl', 'bc'] },
    leftBottom: { points: ['br', 'cl'] },
  },
  b_ = new Set([
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom',
  ]);
function XC(e) {
  const {
      arrowWidth: t,
      autoAdjustOverflow: n,
      arrowPointAtCenter: r,
      offset: o,
      borderRadius: i,
      visibleFirst: a,
    } = e,
    s = t / 2,
    l = {};
  return (
    Object.keys(Jy).forEach((u) => {
      const c = (r && x_[u]) || Jy[u],
        f = Object.assign(Object.assign({}, c), {
          offset: [0, 0],
          dynamicInset: !0,
        });
      switch (((l[u] = f), b_.has(u) && (f.autoArrow = !1), u)) {
        case 'top':
        case 'topLeft':
        case 'topRight':
          f.offset[1] = -s - o;
          break;
        case 'bottom':
        case 'bottomLeft':
        case 'bottomRight':
          f.offset[1] = s + o;
          break;
        case 'left':
        case 'leftTop':
        case 'leftBottom':
          f.offset[0] = -s - o;
          break;
        case 'right':
        case 'rightTop':
        case 'rightBottom':
          f.offset[0] = s + o;
          break;
      }
      const d = ov({ contentRadius: i, limitVerticalRadius: !0 });
      if (r)
        switch (u) {
          case 'topLeft':
          case 'bottomLeft':
            f.offset[0] = -d.dropdownArrowOffset - s;
            break;
          case 'topRight':
          case 'bottomRight':
            f.offset[0] = d.dropdownArrowOffset + s;
            break;
          case 'leftTop':
          case 'rightTop':
            f.offset[1] = -d.dropdownArrowOffset - s;
            break;
          case 'leftBottom':
          case 'rightBottom':
            f.offset[1] = d.dropdownArrowOffset + s;
            break;
        }
      (f.overflow = y_(u, d, t, n)), a && (f.htmlRegion = 'visibleFirst');
    }),
    l
  );
}
const S_ = (e) => {
    const {
      componentCls: t,
      tooltipMaxWidth: n,
      tooltipColor: r,
      tooltipBg: o,
      tooltipBorderRadius: i,
      zIndexPopup: a,
      controlHeight: s,
      boxShadowSecondary: l,
      paddingSM: u,
      paddingXS: c,
      tooltipRadiusOuter: f,
    } = e;
    return [
      {
        [t]: Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, Gh(e)), {
              position: 'absolute',
              zIndex: a,
              display: 'block',
              width: 'max-content',
              maxWidth: n,
              visibility: 'visible',
              transformOrigin: 'var(--arrow-x, 50%) var(--arrow-y, 50%)',
              '&-hidden': { display: 'none' },
              '--antd-arrow-background-color': o,
              [`${t}-inner`]: {
                minWidth: s,
                minHeight: s,
                padding: `${u / 2}px ${c}px`,
                color: r,
                textAlign: 'start',
                textDecoration: 'none',
                wordWrap: 'break-word',
                backgroundColor: o,
                borderRadius: i,
                boxShadow: l,
                boxSizing: 'border-box',
              },
              [[
                '&-placement-left',
                '&-placement-leftTop',
                '&-placement-leftBottom',
                '&-placement-right',
                '&-placement-rightTop',
                '&-placement-rightBottom',
              ].join(',')]: {
                [`${t}-inner`]: { borderRadius: Math.min(i, KC) },
              },
              [`${t}-content`]: { position: 'relative' },
            }),
            l5(e, (d, m) => {
              let { darkColor: v } = m;
              return {
                [`&${t}-${d}`]: {
                  [`${t}-inner`]: { backgroundColor: v },
                  [`${t}-arrow`]: { '--antd-arrow-background-color': v },
                },
              };
            })
          ),
          { '&-rtl': { direction: 'rtl' } }
        ),
      },
      GC(kn(e, { borderRadiusOuter: f }), {
        colorBg: 'var(--antd-arrow-background-color)',
        contentRadius: i,
        limitVerticalRadius: !0,
      }),
      {
        [`${t}-pure`]: {
          position: 'relative',
          maxWidth: 'none',
          margin: e.sizePopupArrow,
        },
      },
    ];
  },
  QC = (e, t) =>
    di(
      'Tooltip',
      (r) => {
        if (t === !1) return [];
        const {
            borderRadius: o,
            colorTextLightSolid: i,
            colorBgDefault: a,
            borderRadiusOuter: s,
          } = r,
          l = kn(r, {
            tooltipMaxWidth: 250,
            tooltipColor: i,
            tooltipBorderRadius: o,
            tooltipBg: a,
            tooltipRadiusOuter: s > 4 ? 4 : s,
          });
        return [S_(l), nv(r, 'zoom-big-fast')];
      },
      (r) => {
        let { zIndexPopupBase: o, colorBgSpotlight: i } = r;
        return { zIndexPopup: o + 70, colorBgDefault: i };
      },
      { resetStyle: !1 }
    )(e),
  w_ = Zu.map((e) => `${e}-inverse`);
function C_(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0)
    ? [].concat(Mt(w_), Mt(Zu)).includes(e)
    : Zu.includes(e);
}
function YC(e, t) {
  const n = C_(t),
    r = ge({ [`${e}-${t}`]: t && n }),
    o = {},
    i = {};
  return (
    t && !n && ((o.background = t), (i['--antd-arrow-background-color'] = t)),
    { className: r, overlayStyle: o, arrowStyle: i }
  );
}
const E_ = (e) => {
    const {
        prefixCls: t,
        className: n,
        placement: r = 'top',
        title: o,
        color: i,
        overlayInnerStyle: a,
      } = e,
      { getPrefixCls: s } = p.exports.useContext(Ht),
      l = s('tooltip', t),
      [u, c] = QC(l, !0),
      f = YC(l, i),
      d = f.arrowStyle,
      m = Object.assign(Object.assign({}, a), f.overlayStyle),
      v = ge(c, l, `${l}-pure`, `${l}-placement-${r}`, n, f.className);
    return u(
      p.exports.createElement(
        'div',
        { className: v, style: d },
        p.exports.createElement('div', { className: `${l}-arrow` }),
        p.exports.createElement(
          WC,
          Object.assign({}, e, {
            className: c,
            prefixCls: l,
            overlayInnerStyle: m,
          }),
          o
        )
      )
    );
  },
  P_ = E_;
var T_ =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const qC = p.exports.forwardRef((e, t) => {
  var n, r;
  const {
      prefixCls: o,
      openClassName: i,
      getTooltipContainer: a,
      overlayClassName: s,
      color: l,
      overlayInnerStyle: u,
      children: c,
      afterOpenChange: f,
      afterVisibleChange: d,
      destroyTooltipOnHide: m,
      arrow: v = !0,
      title: x,
      overlay: S,
      builtinPlacements: y,
      arrowPointAtCenter: h = !1,
      autoAdjustOverflow: g = !0,
    } = e,
    b = !!v,
    [, C] = Eo(),
    {
      getPopupContainer: P,
      getPrefixCls: w,
      direction: T,
    } = p.exports.useContext(Ht),
    $ = Qw(),
    N = p.exports.useRef(null),
    j = () => {
      var K;
      (K = N.current) === null || K === void 0 || K.forceAlign();
    };
  p.exports.useImperativeHandle(t, () => ({
    forceAlign: j,
    forcePopupAlign: () => {
      $.deprecated(!1, 'forcePopupAlign', 'forceAlign'), j();
    },
  }));
  const [F, H] = Qo(!1, {
      value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
      defaultValue:
        (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible,
    }),
    z = !x && !S && x !== 0,
    V = (K) => {
      var Y, le;
      H(z ? !1 : K),
        z ||
          ((Y = e.onOpenChange) === null || Y === void 0 || Y.call(e, K),
          (le = e.onVisibleChange) === null || le === void 0 || le.call(e, K));
    },
    R = p.exports.useMemo(() => {
      var K, Y;
      let le = h;
      return (
        typeof v == 'object' &&
          (le =
            (Y =
              (K = v.pointAtCenter) !== null && K !== void 0
                ? K
                : v.arrowPointAtCenter) !== null && Y !== void 0
              ? Y
              : h),
        y ||
          XC({
            arrowPointAtCenter: le,
            autoAdjustOverflow: g,
            arrowWidth: b ? C.sizePopupArrow : 0,
            borderRadius: C.borderRadius,
            offset: C.marginXXS,
            visibleFirst: !0,
          })
      );
    }, [h, v, y, C]),
    O = p.exports.useMemo(() => (x === 0 ? x : S || x || ''), [S, x]),
    E = p.exports.createElement(MC, null, typeof O == 'function' ? O() : O),
    {
      getPopupContainer: k,
      placement: I = 'top',
      mouseEnterDelay: L = 0.1,
      mouseLeaveDelay: B = 0.1,
      overlayStyle: J,
      rootClassName: Q,
    } = e,
    ne = T_(e, [
      'getPopupContainer',
      'placement',
      'mouseEnterDelay',
      'mouseLeaveDelay',
      'overlayStyle',
      'rootClassName',
    ]),
    q = w('tooltip', o),
    ae = w(),
    se = e['data-popover-inject'];
  let pe = F;
  !('open' in e) && !('visible' in e) && z && (pe = !1);
  const Z = vo(c) && !SC(c) ? c : p.exports.createElement('span', null, c),
    me = Z.props,
    Ae =
      !me.className || typeof me.className == 'string'
        ? ge(me.className, i || `${q}-open`)
        : me.className,
    [Ve, Re] = QC(q, !se),
    Ie = YC(q, l),
    He = Ie.arrowStyle,
    Ne = Object.assign(Object.assign({}, u), Ie.overlayStyle),
    _ = ge(s, { [`${q}-rtl`]: T === 'rtl' }, Ie.className, Q, Re),
    [A, D] = Yh('Tooltip', ne.zIndex),
    U = p.exports.createElement(
      g_,
      Object.assign({}, ne, {
        zIndex: A,
        showArrow: b,
        placement: I,
        mouseEnterDelay: L,
        mouseLeaveDelay: B,
        prefixCls: q,
        overlayClassName: _,
        overlayStyle: Object.assign(Object.assign({}, He), J),
        getTooltipContainer: k || a || P,
        ref: N,
        builtinPlacements: R,
        overlay: E,
        visible: pe,
        onVisibleChange: V,
        afterVisibleChange: f ?? d,
        overlayInnerStyle: Ne,
        arrowContent: p.exports.createElement('span', {
          className: `${q}-arrow-content`,
        }),
        motion: {
          motionName: r3(ae, 'zoom-big-fast', e.transitionName),
          motionDeadline: 1e3,
        },
        destroyTooltipOnHide: !!m,
      }),
      pe ? fi(Z, { className: Ae }) : Z
    );
  return Ve(p.exports.createElement(Qh.Provider, { value: D }, U));
});
qC._InternalPanelDoNotUseOrYouWillBeFired = P_;
const O_ = qC;
var R_ = ce.ESC,
  M_ = ce.TAB;
function $_(e) {
  var t = e.visible,
    n = e.triggerRef,
    r = e.onVisibleChange,
    o = e.autoFocus,
    i = e.overlayRef,
    a = p.exports.useRef(!1),
    s = function () {
      if (t) {
        var f, d;
        (f = n.current) === null ||
          f === void 0 ||
          (d = f.focus) === null ||
          d === void 0 ||
          d.call(f),
          r == null || r(!1);
      }
    },
    l = function () {
      var f;
      return (f = i.current) !== null && f !== void 0 && f.focus
        ? (i.current.focus(), (a.current = !0), !0)
        : !1;
    },
    u = function (f) {
      switch (f.keyCode) {
        case R_:
          s();
          break;
        case M_: {
          var d = !1;
          a.current || (d = l()), d ? f.preventDefault() : s();
          break;
        }
      }
    };
  p.exports.useEffect(
    function () {
      return t
        ? (window.addEventListener('keydown', u),
          o && Qt(l, 3),
          function () {
            window.removeEventListener('keydown', u), (a.current = !1);
          })
        : function () {
            a.current = !1;
          };
    },
    [t]
  );
}
var I_ = p.exports.forwardRef(function (e, t) {
    var n = e.overlay,
      r = e.arrow,
      o = e.prefixCls,
      i = p.exports.useMemo(
        function () {
          var s;
          return typeof n == 'function' ? (s = n()) : (s = n), s;
        },
        [n]
      ),
      a = ba(t, i == null ? void 0 : i.ref);
    return de.createElement(
      de.Fragment,
      null,
      r && de.createElement('div', { className: ''.concat(o, '-arrow') }),
      de.cloneElement(i, { ref: So(i) ? a : void 0 })
    );
  }),
  Pi = { adjustX: 1, adjustY: 1 },
  Ti = [0, 0],
  k_ = {
    topLeft: {
      points: ['bl', 'tl'],
      overflow: Pi,
      offset: [0, -4],
      targetOffset: Ti,
    },
    top: {
      points: ['bc', 'tc'],
      overflow: Pi,
      offset: [0, -4],
      targetOffset: Ti,
    },
    topRight: {
      points: ['br', 'tr'],
      overflow: Pi,
      offset: [0, -4],
      targetOffset: Ti,
    },
    bottomLeft: {
      points: ['tl', 'bl'],
      overflow: Pi,
      offset: [0, 4],
      targetOffset: Ti,
    },
    bottom: {
      points: ['tc', 'bc'],
      overflow: Pi,
      offset: [0, 4],
      targetOffset: Ti,
    },
    bottomRight: {
      points: ['tr', 'br'],
      overflow: Pi,
      offset: [0, 4],
      targetOffset: Ti,
    },
  },
  A_ = [
    'arrow',
    'prefixCls',
    'transitionName',
    'animation',
    'align',
    'placement',
    'placements',
    'getPopupContainer',
    'showAction',
    'hideAction',
    'overlayClassName',
    'overlayStyle',
    'visible',
    'trigger',
    'autoFocus',
    'overlay',
    'children',
    'onVisibleChange',
  ];
function N_(e, t) {
  var n,
    r = e.arrow,
    o = r === void 0 ? !1 : r,
    i = e.prefixCls,
    a = i === void 0 ? 'rc-dropdown' : i,
    s = e.transitionName,
    l = e.animation,
    u = e.align,
    c = e.placement,
    f = c === void 0 ? 'bottomLeft' : c,
    d = e.placements,
    m = d === void 0 ? k_ : d,
    v = e.getPopupContainer,
    x = e.showAction,
    S = e.hideAction,
    y = e.overlayClassName,
    h = e.overlayStyle,
    g = e.visible,
    b = e.trigger,
    C = b === void 0 ? ['hover'] : b,
    P = e.autoFocus,
    w = e.overlay,
    T = e.children,
    $ = e.onVisibleChange,
    N = Je(e, A_),
    j = de.useState(),
    F = X(j, 2),
    H = F[0],
    z = F[1],
    V = 'visible' in e ? g : H,
    R = de.useRef(null),
    O = de.useRef(null),
    E = de.useRef(null);
  de.useImperativeHandle(t, function () {
    return R.current;
  });
  var k = function (se) {
    z(se), $ == null || $(se);
  };
  $_({
    visible: V,
    triggerRef: E,
    onVisibleChange: k,
    autoFocus: P,
    overlayRef: O,
  });
  var I = function (se) {
      var pe = e.onOverlayClick;
      z(!1), pe && pe(se);
    },
    L = function () {
      return de.createElement(I_, {
        ref: O,
        overlay: w,
        prefixCls: a,
        arrow: o,
      });
    },
    B = function () {
      return typeof w == 'function' ? L : L();
    },
    J = function () {
      var se = e.minOverlayWidthMatchTrigger,
        pe = e.alignPoint;
      return 'minOverlayWidthMatchTrigger' in e ? se : !pe;
    },
    Q = function () {
      var se = e.openClassName;
      return se !== void 0 ? se : ''.concat(a, '-open');
    },
    ne = de.cloneElement(T, {
      className: ge(
        (n = T.props) === null || n === void 0 ? void 0 : n.className,
        V && Q()
      ),
      ref: So(T) ? ba(E, T.ref) : void 0,
    }),
    q = S;
  return (
    !q && C.indexOf('contextMenu') !== -1 && (q = ['click']),
    de.createElement(
      rv,
      Me({ builtinPlacements: m }, N, {
        prefixCls: a,
        ref: R,
        popupClassName: ge(y, fe({}, ''.concat(a, '-show-arrow'), o)),
        popupStyle: h,
        action: C,
        showAction: x,
        hideAction: q,
        popupPlacement: f,
        popupAlign: u,
        popupTransitionName: s,
        popupAnimation: l,
        popupVisible: V,
        stretch: J() ? 'minWidth' : '',
        popup: B(),
        onPopupVisibleChange: k,
        onPopupClick: I,
        getPopupContainer: v,
      }),
      ne
    )
  );
}
const L_ = de.forwardRef(N_);
var ZC = p.exports.createContext(null);
function iv(e, t) {
  return e === void 0 ? null : ''.concat(e, '-').concat(t);
}
function JC(e) {
  var t = p.exports.useContext(ZC);
  return iv(t, e);
}
var __ = ['children', 'locked'],
  Yn = p.exports.createContext(null);
function D_(e, t) {
  var n = G({}, e);
  return (
    Object.keys(t).forEach(function (r) {
      var o = t[r];
      o !== void 0 && (n[r] = o);
    }),
    n
  );
}
function Us(e) {
  var t = e.children,
    n = e.locked,
    r = Je(e, __),
    o = p.exports.useContext(Yn),
    i = Xc(
      function () {
        return D_(o, r);
      },
      [o, r],
      function (a, s) {
        return !n && (a[0] !== s[0] || !Vh(a[1], s[1], !0));
      }
    );
  return p.exports.createElement(Yn.Provider, { value: i }, t);
}
var j_ = [],
  eE = p.exports.createContext(null);
function od() {
  return p.exports.useContext(eE);
}
var tE = p.exports.createContext(j_);
function Ea(e) {
  var t = p.exports.useContext(tE);
  return p.exports.useMemo(
    function () {
      return e !== void 0 ? [].concat(Mt(t), [e]) : t;
    },
    [t, e]
  );
}
var nE = p.exports.createContext(null),
  av = p.exports.createContext({});
function e1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (qh(e)) {
    var n = e.nodeName.toLowerCase(),
      r =
        ['input', 'select', 'textarea', 'button'].includes(n) ||
        e.isContentEditable ||
        (n === 'a' && !!e.getAttribute('href')),
      o = e.getAttribute('tabindex'),
      i = Number(o),
      a = null;
    return (
      o && !Number.isNaN(i) ? (a = i) : r && a === null && (a = 0),
      r && e.disabled && (a = null),
      a !== null && (a >= 0 || (t && a < 0))
    );
  }
  return !1;
}
function z_(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = Mt(e.querySelectorAll('*')).filter(function (r) {
      return e1(r, t);
    });
  return e1(e, t) && n.unshift(e), n;
}
var dm = ce.LEFT,
  fm = ce.RIGHT,
  pm = ce.UP,
  cu = ce.DOWN,
  du = ce.ENTER,
  rE = ce.ESC,
  Ua = ce.HOME,
  Wa = ce.END,
  t1 = [pm, cu, dm, fm];
function B_(e, t, n, r) {
  var o,
    i,
    a,
    s,
    l = 'prev',
    u = 'next',
    c = 'children',
    f = 'parent';
  if (e === 'inline' && r === du) return { inlineTrigger: !0 };
  var d = ((o = {}), fe(o, pm, l), fe(o, cu, u), o),
    m =
      ((i = {}),
      fe(i, dm, n ? u : l),
      fe(i, fm, n ? l : u),
      fe(i, cu, c),
      fe(i, du, c),
      i),
    v =
      ((a = {}),
      fe(a, pm, l),
      fe(a, cu, u),
      fe(a, du, c),
      fe(a, rE, f),
      fe(a, dm, n ? c : f),
      fe(a, fm, n ? f : c),
      a),
    x = {
      inline: d,
      horizontal: m,
      vertical: v,
      inlineSub: d,
      horizontalSub: v,
      verticalSub: v,
    },
    S =
      (s = x[''.concat(e).concat(t ? '' : 'Sub')]) === null || s === void 0
        ? void 0
        : s[r];
  switch (S) {
    case l:
      return { offset: -1, sibling: !0 };
    case u:
      return { offset: 1, sibling: !0 };
    case f:
      return { offset: -1, sibling: !1 };
    case c:
      return { offset: 1, sibling: !1 };
    default:
      return null;
  }
}
function F_(e) {
  for (var t = e; t; ) {
    if (t.getAttribute('data-menu-list')) return t;
    t = t.parentElement;
  }
  return null;
}
function V_(e, t) {
  for (var n = e || document.activeElement; n; ) {
    if (t.has(n)) return n;
    n = n.parentElement;
  }
  return null;
}
function oE(e, t) {
  var n = z_(e, !0);
  return n.filter(function (r) {
    return t.has(r);
  });
}
function n1(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e) return null;
  var o = oE(e, t),
    i = o.length,
    a = o.findIndex(function (s) {
      return n === s;
    });
  return (
    r < 0 ? (a === -1 ? (a = i - 1) : (a -= 1)) : r > 0 && (a += 1),
    (a = (a + i) % i),
    o[a]
  );
}
function H_(e, t, n, r, o, i, a, s, l, u) {
  var c = p.exports.useRef(),
    f = p.exports.useRef();
  f.current = t;
  var d = function () {
    Qt.cancel(c.current);
  };
  return (
    p.exports.useEffect(function () {
      return function () {
        d();
      };
    }, []),
    function (m) {
      var v = m.which;
      if ([].concat(t1, [du, rE, Ua, Wa]).includes(v)) {
        var x,
          S,
          y,
          h = function () {
            (x = new Set()), (S = new Map()), (y = new Map());
            var V = i();
            return (
              V.forEach(function (R) {
                var O = document.querySelector(
                  "[data-menu-id='".concat(iv(r, R), "']")
                );
                O && (x.add(O), y.set(O, R), S.set(R, O));
              }),
              x
            );
          };
        h();
        var g = S.get(t),
          b = V_(g, x),
          C = y.get(b),
          P = B_(e, a(C, !0).length === 1, n, v);
        if (!P && v !== Ua && v !== Wa) return;
        (t1.includes(v) || [Ua, Wa].includes(v)) && m.preventDefault();
        var w = function (V) {
          if (V) {
            var R = V,
              O = V.querySelector('a');
            O != null && O.getAttribute('href') && (R = O);
            var E = y.get(V);
            s(E),
              d(),
              (c.current = Qt(function () {
                f.current === E && R.focus();
              }));
          }
        };
        if ([Ua, Wa].includes(v) || P.sibling || !b) {
          var T;
          !b || e === 'inline' ? (T = o.current) : (T = F_(b));
          var $,
            N = oE(T, x);
          v === Ua
            ? ($ = N[0])
            : v === Wa
            ? ($ = N[N.length - 1])
            : ($ = n1(T, x, b, P.offset)),
            w($);
        } else if (P.inlineTrigger) l(C);
        else if (P.offset > 0)
          l(C, !0),
            d(),
            (c.current = Qt(function () {
              h();
              var z = b.getAttribute('aria-controls'),
                V = document.getElementById(z),
                R = n1(V, x);
              w(R);
            }, 5));
        else if (P.offset < 0) {
          var j = a(C, !0),
            F = j[j.length - 2],
            H = S.get(F);
          l(F, !1), w(H);
        }
      }
      u == null || u(m);
    }
  );
}
function U_(e) {
  Promise.resolve().then(e);
}
var sv = '__RC_UTIL_PATH_SPLIT__',
  r1 = function (t) {
    return t.join(sv);
  },
  W_ = function (t) {
    return t.split(sv);
  },
  mm = 'rc-menu-more';
function K_() {
  var e = p.exports.useState({}),
    t = X(e, 2),
    n = t[1],
    r = p.exports.useRef(new Map()),
    o = p.exports.useRef(new Map()),
    i = p.exports.useState([]),
    a = X(i, 2),
    s = a[0],
    l = a[1],
    u = p.exports.useRef(0),
    c = p.exports.useRef(!1),
    f = function () {
      c.current || n({});
    },
    d = p.exports.useCallback(function (g, b) {
      var C = r1(b);
      o.current.set(C, g), r.current.set(g, C), (u.current += 1);
      var P = u.current;
      U_(function () {
        P === u.current && f();
      });
    }, []),
    m = p.exports.useCallback(function (g, b) {
      var C = r1(b);
      o.current.delete(C), r.current.delete(g);
    }, []),
    v = p.exports.useCallback(function (g) {
      l(g);
    }, []),
    x = p.exports.useCallback(
      function (g, b) {
        var C = r.current.get(g) || '',
          P = W_(C);
        return b && s.includes(P[0]) && P.unshift(mm), P;
      },
      [s]
    ),
    S = p.exports.useCallback(
      function (g, b) {
        return g.some(function (C) {
          var P = x(C, !0);
          return P.includes(b);
        });
      },
      [x]
    ),
    y = function () {
      var b = Mt(r.current.keys());
      return s.length && b.push(mm), b;
    },
    h = p.exports.useCallback(function (g) {
      var b = ''.concat(r.current.get(g)).concat(sv),
        C = new Set();
      return (
        Mt(o.current.keys()).forEach(function (P) {
          P.startsWith(b) && C.add(o.current.get(P));
        }),
        C
      );
    }, []);
  return (
    p.exports.useEffect(function () {
      return function () {
        c.current = !0;
      };
    }, []),
    {
      registerPath: d,
      unregisterPath: m,
      refreshOverflowKeys: v,
      isSubPathKey: S,
      getKeyPath: x,
      getKeys: y,
      getSubPathKeys: h,
    }
  );
}
function Za(e) {
  var t = p.exports.useRef(e);
  t.current = e;
  var n = p.exports.useCallback(function () {
    for (var r, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (r = t.current) === null || r === void 0
      ? void 0
      : r.call.apply(r, [t].concat(i));
  }, []);
  return e ? n : void 0;
}
var G_ = Math.random().toFixed(5).toString().slice(2),
  o1 = 0;
function X_(e) {
  var t = Qo(e, { value: e }),
    n = X(t, 2),
    r = n[0],
    o = n[1];
  return (
    p.exports.useEffect(function () {
      o1 += 1;
      var i = ''.concat(G_, '-').concat(o1);
      o('rc-menu-uuid-'.concat(i));
    }, []),
    r
  );
}
function iE(e, t, n, r) {
  var o = p.exports.useContext(Yn),
    i = o.activeKey,
    a = o.onActive,
    s = o.onInactive,
    l = { active: i === e };
  return (
    t ||
      ((l.onMouseEnter = function (u) {
        n == null || n({ key: e, domEvent: u }), a(e);
      }),
      (l.onMouseLeave = function (u) {
        r == null || r({ key: e, domEvent: u }), s(e);
      })),
    l
  );
}
function aE(e) {
  var t = p.exports.useContext(Yn),
    n = t.mode,
    r = t.rtl,
    o = t.inlineIndent;
  if (n !== 'inline') return null;
  var i = e;
  return r ? { paddingRight: i * o } : { paddingLeft: i * o };
}
function sE(e) {
  var t = e.icon,
    n = e.props,
    r = e.children,
    o;
  return t === null || t === !1
    ? null
    : (typeof t == 'function'
        ? (o = p.exports.createElement(t, G({}, n)))
        : typeof t != 'boolean' && (o = t),
      o || r || null);
}
var Q_ = ['item'];
function rc(e) {
  var t = e.item,
    n = Je(e, Q_);
  return (
    Object.defineProperty(n, 'item', {
      get: function () {
        return (
          ui(
            !1,
            '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.'
          ),
          t
        );
      },
    }),
    n
  );
}
var Y_ = ['title', 'attribute', 'elementRef'],
  q_ = [
    'style',
    'className',
    'eventKey',
    'warnKey',
    'disabled',
    'itemIcon',
    'children',
    'role',
    'onMouseEnter',
    'onMouseLeave',
    'onClick',
    'onKeyDown',
    'onFocus',
  ],
  Z_ = ['active'],
  J_ = (function (e) {
    Yc(n, e);
    var t = qc(n);
    function n() {
      return wo(this, n), t.apply(this, arguments);
    }
    return (
      Co(n, [
        {
          key: 'render',
          value: function () {
            var o = this.props,
              i = o.title,
              a = o.attribute,
              s = o.elementRef,
              l = Je(o, Y_),
              u = ci(l, [
                'eventKey',
                'popupClassName',
                'popupOffset',
                'onTitleClick',
              ]);
            return (
              ui(
                !a,
                '`attribute` of Menu.Item is deprecated. Please pass attribute directly.'
              ),
              p.exports.createElement(
                Or.Item,
                Me({}, a, { title: typeof i == 'string' ? i : void 0 }, u, {
                  ref: s,
                })
              )
            );
          },
        },
      ]),
      n
    );
  })(p.exports.Component),
  e4 = p.exports.forwardRef(function (e, t) {
    var n,
      r = e.style,
      o = e.className,
      i = e.eventKey;
    e.warnKey;
    var a = e.disabled,
      s = e.itemIcon,
      l = e.children,
      u = e.role,
      c = e.onMouseEnter,
      f = e.onMouseLeave,
      d = e.onClick,
      m = e.onKeyDown,
      v = e.onFocus,
      x = Je(e, q_),
      S = JC(i),
      y = p.exports.useContext(Yn),
      h = y.prefixCls,
      g = y.onItemClick,
      b = y.disabled,
      C = y.overflowDisabled,
      P = y.itemIcon,
      w = y.selectedKeys,
      T = y.onActive,
      $ = p.exports.useContext(av),
      N = $._internalRenderMenuItem,
      j = ''.concat(h, '-item'),
      F = p.exports.useRef(),
      H = p.exports.useRef(),
      z = b || a,
      V = tl(t, H),
      R = Ea(i),
      O = function (Z) {
        return {
          key: i,
          keyPath: Mt(R).reverse(),
          item: F.current,
          domEvent: Z,
        };
      },
      E = s || P,
      k = iE(i, z, c, f),
      I = k.active,
      L = Je(k, Z_),
      B = w.includes(i),
      J = aE(R.length),
      Q = function (Z) {
        if (!z) {
          var me = O(Z);
          d == null || d(rc(me)), g(me);
        }
      },
      ne = function (Z) {
        if ((m == null || m(Z), Z.which === ce.ENTER)) {
          var me = O(Z);
          d == null || d(rc(me)), g(me);
        }
      },
      q = function (Z) {
        T(i), v == null || v(Z);
      },
      ae = {};
    e.role === 'option' && (ae['aria-selected'] = B);
    var se = p.exports.createElement(
      J_,
      Me(
        {
          ref: F,
          elementRef: V,
          role: u === null ? 'none' : u || 'menuitem',
          tabIndex: a ? null : -1,
          'data-menu-id': C && S ? null : S,
        },
        x,
        L,
        ae,
        {
          component: 'li',
          'aria-disabled': a,
          style: G(G({}, J), r),
          className: ge(
            j,
            ((n = {}),
            fe(n, ''.concat(j, '-active'), I),
            fe(n, ''.concat(j, '-selected'), B),
            fe(n, ''.concat(j, '-disabled'), z),
            n),
            o
          ),
          onClick: Q,
          onKeyDown: ne,
          onFocus: q,
        }
      ),
      l,
      p.exports.createElement(sE, {
        props: G(G({}, e), {}, { isSelected: B }),
        icon: E,
      })
    );
    return N && (se = N(se, e, { selected: B })), se;
  });
function t4(e, t) {
  var n = e.eventKey,
    r = od(),
    o = Ea(n);
  return (
    p.exports.useEffect(
      function () {
        if (r)
          return (
            r.registerPath(n, o),
            function () {
              r.unregisterPath(n, o);
            }
          );
      },
      [o]
    ),
    r ? null : p.exports.createElement(e4, Me({}, e, { ref: t }))
  );
}
const id = p.exports.forwardRef(t4);
var n4 = ['className', 'children'],
  r4 = function (t, n) {
    var r = t.className,
      o = t.children,
      i = Je(t, n4),
      a = p.exports.useContext(Yn),
      s = a.prefixCls,
      l = a.mode,
      u = a.rtl;
    return p.exports.createElement(
      'ul',
      Me(
        {
          className: ge(
            s,
            u && ''.concat(s, '-rtl'),
            ''.concat(s, '-sub'),
            ''.concat(s, '-').concat(l === 'inline' ? 'inline' : 'vertical'),
            r
          ),
          role: 'menu',
        },
        i,
        { 'data-menu-list': !0, ref: n }
      ),
      o
    );
  },
  lv = p.exports.forwardRef(r4);
lv.displayName = 'SubMenuList';
function uv(e, t) {
  return ri(e).map(function (n, r) {
    if (p.exports.isValidElement(n)) {
      var o,
        i,
        a = n.key,
        s =
          (o = (i = n.props) === null || i === void 0 ? void 0 : i.eventKey) !==
            null && o !== void 0
            ? o
            : a,
        l = s == null;
      l && (s = 'tmp_key-'.concat([].concat(Mt(t), [r]).join('-')));
      var u = { key: s, eventKey: s };
      return p.exports.cloneElement(n, u);
    }
    return n;
  });
}
var Kt = { adjustX: 1, adjustY: 1 },
  o4 = {
    topLeft: { points: ['bl', 'tl'], overflow: Kt },
    topRight: { points: ['br', 'tr'], overflow: Kt },
    bottomLeft: { points: ['tl', 'bl'], overflow: Kt },
    bottomRight: { points: ['tr', 'br'], overflow: Kt },
    leftTop: { points: ['tr', 'tl'], overflow: Kt },
    leftBottom: { points: ['br', 'bl'], overflow: Kt },
    rightTop: { points: ['tl', 'tr'], overflow: Kt },
    rightBottom: { points: ['bl', 'br'], overflow: Kt },
  },
  i4 = {
    topLeft: { points: ['bl', 'tl'], overflow: Kt },
    topRight: { points: ['br', 'tr'], overflow: Kt },
    bottomLeft: { points: ['tl', 'bl'], overflow: Kt },
    bottomRight: { points: ['tr', 'br'], overflow: Kt },
    rightTop: { points: ['tr', 'tl'], overflow: Kt },
    rightBottom: { points: ['br', 'bl'], overflow: Kt },
    leftTop: { points: ['tl', 'tr'], overflow: Kt },
    leftBottom: { points: ['bl', 'br'], overflow: Kt },
  };
function lE(e, t, n) {
  if (t) return t;
  if (n) return n[e] || n.other;
}
var a4 = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop',
};
function s4(e) {
  var t = e.prefixCls,
    n = e.visible,
    r = e.children,
    o = e.popup,
    i = e.popupStyle,
    a = e.popupClassName,
    s = e.popupOffset,
    l = e.disabled,
    u = e.mode,
    c = e.onVisibleChange,
    f = p.exports.useContext(Yn),
    d = f.getPopupContainer,
    m = f.rtl,
    v = f.subMenuOpenDelay,
    x = f.subMenuCloseDelay,
    S = f.builtinPlacements,
    y = f.triggerSubMenuAction,
    h = f.forceSubMenuRender,
    g = f.rootClassName,
    b = f.motion,
    C = f.defaultMotions,
    P = p.exports.useState(!1),
    w = X(P, 2),
    T = w[0],
    $ = w[1],
    N = G(m ? G({}, i4) : G({}, o4), S),
    j = a4[u],
    F = lE(u, b, C),
    H = p.exports.useRef(F);
  u !== 'inline' && (H.current = F);
  var z = G(
      G({}, H.current),
      {},
      {
        leavedClassName: ''.concat(t, '-hidden'),
        removeOnLeave: !1,
        motionAppear: !0,
      }
    ),
    V = p.exports.useRef();
  return (
    p.exports.useEffect(
      function () {
        return (
          (V.current = Qt(function () {
            $(n);
          })),
          function () {
            Qt.cancel(V.current);
          }
        );
      },
      [n]
    ),
    p.exports.createElement(
      rv,
      {
        prefixCls: t,
        popupClassName: ge(
          ''.concat(t, '-popup'),
          fe({}, ''.concat(t, '-rtl'), m),
          a,
          g
        ),
        stretch: u === 'horizontal' ? 'minWidth' : null,
        getPopupContainer: d,
        builtinPlacements: N,
        popupPlacement: j,
        popupVisible: T,
        popup: o,
        popupStyle: i,
        popupAlign: s && { offset: s },
        action: l ? [] : [y],
        mouseEnterDelay: v,
        mouseLeaveDelay: x,
        onPopupVisibleChange: c,
        forceRender: h,
        popupMotion: z,
        fresh: !0,
      },
      r
    )
  );
}
function l4(e) {
  var t = e.id,
    n = e.open,
    r = e.keyPath,
    o = e.children,
    i = 'inline',
    a = p.exports.useContext(Yn),
    s = a.prefixCls,
    l = a.forceSubMenuRender,
    u = a.motion,
    c = a.defaultMotions,
    f = a.mode,
    d = p.exports.useRef(!1);
  d.current = f === i;
  var m = p.exports.useState(!d.current),
    v = X(m, 2),
    x = v[0],
    S = v[1],
    y = d.current ? n : !1;
  p.exports.useEffect(
    function () {
      d.current && S(!1);
    },
    [f]
  );
  var h = G({}, lE(i, u, c));
  r.length > 1 && (h.motionAppear = !1);
  var g = h.onVisibleChanged;
  return (
    (h.onVisibleChanged = function (b) {
      return !d.current && !b && S(!0), g == null ? void 0 : g(b);
    }),
    x
      ? null
      : p.exports.createElement(
          Us,
          { mode: i, locked: !d.current },
          p.exports.createElement(
            wa,
            Me({ visible: y }, h, {
              forceRender: l,
              removeOnLeave: !1,
              leavedClassName: ''.concat(s, '-hidden'),
            }),
            function (b) {
              var C = b.className,
                P = b.style;
              return p.exports.createElement(
                lv,
                { id: t, className: C, style: P },
                o
              );
            }
          )
        )
  );
}
var u4 = [
    'style',
    'className',
    'title',
    'eventKey',
    'warnKey',
    'disabled',
    'internalPopupClose',
    'children',
    'itemIcon',
    'expandIcon',
    'popupClassName',
    'popupOffset',
    'popupStyle',
    'onClick',
    'onMouseEnter',
    'onMouseLeave',
    'onTitleClick',
    'onTitleMouseEnter',
    'onTitleMouseLeave',
  ],
  c4 = ['active'],
  d4 = function (t) {
    var n,
      r = t.style,
      o = t.className,
      i = t.title,
      a = t.eventKey;
    t.warnKey;
    var s = t.disabled,
      l = t.internalPopupClose,
      u = t.children,
      c = t.itemIcon,
      f = t.expandIcon,
      d = t.popupClassName,
      m = t.popupOffset,
      v = t.popupStyle,
      x = t.onClick,
      S = t.onMouseEnter,
      y = t.onMouseLeave,
      h = t.onTitleClick,
      g = t.onTitleMouseEnter,
      b = t.onTitleMouseLeave,
      C = Je(t, u4),
      P = JC(a),
      w = p.exports.useContext(Yn),
      T = w.prefixCls,
      $ = w.mode,
      N = w.openKeys,
      j = w.disabled,
      F = w.overflowDisabled,
      H = w.activeKey,
      z = w.selectedKeys,
      V = w.itemIcon,
      R = w.expandIcon,
      O = w.onItemClick,
      E = w.onOpenChange,
      k = w.onActive,
      I = p.exports.useContext(av),
      L = I._internalRenderSubMenuItem,
      B = p.exports.useContext(nE),
      J = B.isSubPathKey,
      Q = Ea(),
      ne = ''.concat(T, '-submenu'),
      q = j || s,
      ae = p.exports.useRef(),
      se = p.exports.useRef(),
      pe = c ?? V,
      Z = f ?? R,
      me = N.includes(a),
      Ae = !F && me,
      Ve = J(z, a),
      Re = iE(a, q, g, b),
      Ie = Re.active,
      He = Je(Re, c4),
      Ne = p.exports.useState(!1),
      _ = X(Ne, 2),
      A = _[0],
      D = _[1],
      U = function (ye) {
        q || D(ye);
      },
      K = function (ye) {
        U(!0), S == null || S({ key: a, domEvent: ye });
      },
      Y = function (ye) {
        U(!1), y == null || y({ key: a, domEvent: ye });
      },
      le = p.exports.useMemo(
        function () {
          return Ie || ($ !== 'inline' ? A || J([H], a) : !1);
        },
        [$, Ie, H, A, a, J]
      ),
      be = aE(Q.length),
      ue = function (ye) {
        q ||
          (h == null || h({ key: a, domEvent: ye }),
          $ === 'inline' && E(a, !me));
      },
      Se = Za(function (ke) {
        x == null || x(rc(ke)), O(ke);
      }),
      Ce = function (ye) {
        $ !== 'inline' && E(a, ye);
      },
      Ee = function () {
        k(a);
      },
      De = P && ''.concat(P, '-popup'),
      Pe = p.exports.createElement(
        'div',
        Me(
          {
            role: 'menuitem',
            style: be,
            className: ''.concat(ne, '-title'),
            tabIndex: q ? null : -1,
            ref: ae,
            title: typeof i == 'string' ? i : null,
            'data-menu-id': F && P ? null : P,
            'aria-expanded': Ae,
            'aria-haspopup': !0,
            'aria-controls': De,
            'aria-disabled': q,
            onClick: ue,
            onFocus: Ee,
          },
          He
        ),
        i,
        p.exports.createElement(
          sE,
          {
            icon: $ !== 'horizontal' ? Z : void 0,
            props: G(G({}, t), {}, { isOpen: Ae, isSubMenu: !0 }),
          },
          p.exports.createElement('i', { className: ''.concat(ne, '-arrow') })
        )
      ),
      lt = p.exports.useRef($);
    if (
      ($ !== 'inline' && Q.length > 1
        ? (lt.current = 'vertical')
        : (lt.current = $),
      !F)
    ) {
      var rt = lt.current;
      Pe = p.exports.createElement(
        s4,
        {
          mode: rt,
          prefixCls: ne,
          visible: !l && Ae && $ !== 'inline',
          popupClassName: d,
          popupOffset: m,
          popupStyle: v,
          popup: p.exports.createElement(
            Us,
            { mode: rt === 'horizontal' ? 'vertical' : rt },
            p.exports.createElement(lv, { id: De, ref: se }, u)
          ),
          disabled: q,
          onVisibleChange: Ce,
        },
        Pe
      );
    }
    var $t = p.exports.createElement(
      Or.Item,
      Me({ role: 'none' }, C, {
        component: 'li',
        style: r,
        className: ge(
          ne,
          ''.concat(ne, '-').concat($),
          o,
          ((n = {}),
          fe(n, ''.concat(ne, '-open'), Ae),
          fe(n, ''.concat(ne, '-active'), le),
          fe(n, ''.concat(ne, '-selected'), Ve),
          fe(n, ''.concat(ne, '-disabled'), q),
          n)
        ),
        onMouseEnter: K,
        onMouseLeave: Y,
      }),
      Pe,
      !F && p.exports.createElement(l4, { id: De, open: Ae, keyPath: Q }, u)
    );
    return (
      L && ($t = L($t, t, { selected: Ve, active: le, open: Ae, disabled: q })),
      p.exports.createElement(
        Us,
        {
          onItemClick: Se,
          mode: $ === 'horizontal' ? 'vertical' : $,
          itemIcon: pe,
          expandIcon: Z,
        },
        $t
      )
    );
  };
function ad(e) {
  var t = e.eventKey,
    n = e.children,
    r = Ea(t),
    o = uv(n, r),
    i = od();
  p.exports.useEffect(
    function () {
      if (i)
        return (
          i.registerPath(t, r),
          function () {
            i.unregisterPath(t, r);
          }
        );
    },
    [r]
  );
  var a;
  return (
    i ? (a = o) : (a = p.exports.createElement(d4, e, o)),
    p.exports.createElement(tE.Provider, { value: r }, a)
  );
}
var f4 = ['className', 'title', 'eventKey', 'children'],
  p4 = ['children'],
  m4 = function (t) {
    var n = t.className,
      r = t.title;
    t.eventKey;
    var o = t.children,
      i = Je(t, f4),
      a = p.exports.useContext(Yn),
      s = a.prefixCls,
      l = ''.concat(s, '-item-group');
    return p.exports.createElement(
      'li',
      Me({ role: 'presentation' }, i, {
        onClick: function (c) {
          return c.stopPropagation();
        },
        className: ge(l, n),
      }),
      p.exports.createElement(
        'div',
        {
          role: 'presentation',
          className: ''.concat(l, '-title'),
          title: typeof r == 'string' ? r : void 0,
        },
        r
      ),
      p.exports.createElement(
        'ul',
        { role: 'group', className: ''.concat(l, '-list') },
        o
      )
    );
  };
function sd(e) {
  var t = e.children,
    n = Je(e, p4),
    r = Ea(n.eventKey),
    o = uv(t, r),
    i = od();
  return i ? o : p.exports.createElement(m4, ci(n, ['warnKey']), o);
}
function cv(e) {
  var t = e.className,
    n = e.style,
    r = p.exports.useContext(Yn),
    o = r.prefixCls,
    i = od();
  return i
    ? null
    : p.exports.createElement('li', {
        role: 'separator',
        className: ge(''.concat(o, '-item-divider'), t),
        style: n,
      });
}
var h4 = ['label', 'children', 'key', 'type'];
function hm(e) {
  return (e || [])
    .map(function (t, n) {
      if (t && et(t) === 'object') {
        var r = t,
          o = r.label,
          i = r.children,
          a = r.key,
          s = r.type,
          l = Je(r, h4),
          u = a ?? 'tmp-'.concat(n);
        return i || s === 'group'
          ? s === 'group'
            ? p.exports.createElement(
                sd,
                Me({ key: u }, l, { title: o }),
                hm(i)
              )
            : p.exports.createElement(
                ad,
                Me({ key: u }, l, { title: o }),
                hm(i)
              )
          : s === 'divider'
          ? p.exports.createElement(cv, Me({ key: u }, l))
          : p.exports.createElement(id, Me({ key: u }, l), o);
      }
      return null;
    })
    .filter(function (t) {
      return t;
    });
}
function v4(e, t, n) {
  var r = e;
  return t && (r = hm(t)), uv(r, n);
}
var g4 = [
    'prefixCls',
    'rootClassName',
    'style',
    'className',
    'tabIndex',
    'items',
    'children',
    'direction',
    'id',
    'mode',
    'inlineCollapsed',
    'disabled',
    'disabledOverflow',
    'subMenuOpenDelay',
    'subMenuCloseDelay',
    'forceSubMenuRender',
    'defaultOpenKeys',
    'openKeys',
    'activeKey',
    'defaultActiveFirst',
    'selectable',
    'multiple',
    'defaultSelectedKeys',
    'selectedKeys',
    'onSelect',
    'onDeselect',
    'inlineIndent',
    'motion',
    'defaultMotions',
    'triggerSubMenuAction',
    'builtinPlacements',
    'itemIcon',
    'expandIcon',
    'overflowedIndicator',
    'overflowedIndicatorPopupClassName',
    'getPopupContainer',
    'onClick',
    'onOpenChange',
    'onKeyDown',
    'openAnimation',
    'openTransitionName',
    '_internalRenderMenuItem',
    '_internalRenderSubMenuItem',
  ],
  Oi = [],
  y4 = p.exports.forwardRef(function (e, t) {
    var n,
      r,
      o = e,
      i = o.prefixCls,
      a = i === void 0 ? 'rc-menu' : i,
      s = o.rootClassName,
      l = o.style,
      u = o.className,
      c = o.tabIndex,
      f = c === void 0 ? 0 : c,
      d = o.items,
      m = o.children,
      v = o.direction,
      x = o.id,
      S = o.mode,
      y = S === void 0 ? 'vertical' : S,
      h = o.inlineCollapsed,
      g = o.disabled,
      b = o.disabledOverflow,
      C = o.subMenuOpenDelay,
      P = C === void 0 ? 0.1 : C,
      w = o.subMenuCloseDelay,
      T = w === void 0 ? 0.1 : w,
      $ = o.forceSubMenuRender,
      N = o.defaultOpenKeys,
      j = o.openKeys,
      F = o.activeKey,
      H = o.defaultActiveFirst,
      z = o.selectable,
      V = z === void 0 ? !0 : z,
      R = o.multiple,
      O = R === void 0 ? !1 : R,
      E = o.defaultSelectedKeys,
      k = o.selectedKeys,
      I = o.onSelect,
      L = o.onDeselect,
      B = o.inlineIndent,
      J = B === void 0 ? 24 : B,
      Q = o.motion,
      ne = o.defaultMotions,
      q = o.triggerSubMenuAction,
      ae = q === void 0 ? 'hover' : q,
      se = o.builtinPlacements,
      pe = o.itemIcon,
      Z = o.expandIcon,
      me = o.overflowedIndicator,
      Ae = me === void 0 ? '...' : me,
      Ve = o.overflowedIndicatorPopupClassName,
      Re = o.getPopupContainer,
      Ie = o.onClick,
      He = o.onOpenChange,
      Ne = o.onKeyDown;
    o.openAnimation, o.openTransitionName;
    var _ = o._internalRenderMenuItem,
      A = o._internalRenderSubMenuItem,
      D = Je(o, g4),
      U = p.exports.useMemo(
        function () {
          return v4(m, d, Oi);
        },
        [m, d]
      ),
      K = p.exports.useState(!1),
      Y = X(K, 2),
      le = Y[0],
      be = Y[1],
      ue = p.exports.useRef(),
      Se = X_(x),
      Ce = v === 'rtl',
      Ee = Qo(N, {
        value: j,
        postState: function (Le) {
          return Le || Oi;
        },
      }),
      De = X(Ee, 2),
      Pe = De[0],
      lt = De[1],
      rt = function (Le) {
        var Ge =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        function It() {
          lt(Le), He == null || He(Le);
        }
        Ge ? oi.exports.flushSync(It) : It();
      },
      $t = p.exports.useState(Pe),
      ke = X($t, 2),
      ye = ke[0],
      ze = ke[1],
      ut = p.exports.useRef(!1),
      tt = p.exports.useMemo(
        function () {
          return (y === 'inline' || y === 'vertical') && h
            ? ['vertical', h]
            : [y, !1];
        },
        [y, h]
      ),
      Ue = X(tt, 2),
      gt = Ue[0],
      Be = Ue[1],
      yt = gt === 'inline',
      Te = p.exports.useState(gt),
      ee = X(Te, 2),
      we = ee[0],
      re = ee[1],
      he = p.exports.useState(Be),
      je = X(he, 2),
      mt = je[0],
      Dt = je[1];
    p.exports.useEffect(
      function () {
        re(gt), Dt(Be), ut.current && (yt ? lt(ye) : rt(Oi));
      },
      [gt, Be]
    );
    var wt = p.exports.useState(0),
      Lr = X(wt, 2),
      Nn = Lr[0],
      qn = Lr[1],
      Ct = Nn >= U.length - 1 || we !== 'horizontal' || b;
    p.exports.useEffect(
      function () {
        yt && ze(Pe);
      },
      [Pe]
    ),
      p.exports.useEffect(function () {
        return (
          (ut.current = !0),
          function () {
            ut.current = !1;
          }
        );
      }, []);
    var Sn = K_(),
      Ln = Sn.registerPath,
      _n = Sn.unregisterPath,
      Zn = Sn.refreshOverflowKeys,
      lr = Sn.isSubPathKey,
      Po = Sn.getKeyPath,
      To = Sn.getKeys,
      ur = Sn.getSubPathKeys,
      cr = p.exports.useMemo(
        function () {
          return { registerPath: Ln, unregisterPath: _n };
        },
        [Ln, _n]
      ),
      Pa = p.exports.useMemo(
        function () {
          return { isSubPathKey: lr };
        },
        [lr]
      );
    p.exports.useEffect(
      function () {
        Zn(
          Ct
            ? Oi
            : U.slice(Nn + 1).map(function (Fe) {
                return Fe.key;
              })
        );
      },
      [Nn, Ct]
    );
    var Et = Qo(
        F || (H && ((n = U[0]) === null || n === void 0 ? void 0 : n.key)),
        { value: F }
      ),
      Oo = X(Et, 2),
      dr = Oo[0],
      _r = Oo[1],
      pi = Za(function (Fe) {
        _r(Fe);
      }),
      fr = Za(function () {
        _r(void 0);
      });
    p.exports.useImperativeHandle(t, function () {
      return {
        list: ue.current,
        focus: function (Le) {
          var Ge,
            It =
              dr ??
              ((Ge = U.find(function (Ta) {
                return !Ta.props.disabled;
              })) === null || Ge === void 0
                ? void 0
                : Ge.key);
          if (It) {
            var kt, zn, mr;
            (kt = ue.current) === null ||
              kt === void 0 ||
              (zn = kt.querySelector(
                "li[data-menu-id='".concat(iv(Se, It), "']")
              )) === null ||
              zn === void 0 ||
              (mr = zn.focus) === null ||
              mr === void 0 ||
              mr.call(zn, Le);
          }
        },
      };
    });
    var mi = Qo(E || [], {
        value: k,
        postState: function (Le) {
          return Array.isArray(Le) ? Le : Le == null ? Oi : [Le];
        },
      }),
      hi = X(mi, 2),
      wn = hi[0],
      vi = hi[1],
      Dr = function (Le) {
        if (V) {
          var Ge = Le.key,
            It = wn.includes(Ge),
            kt;
          O
            ? It
              ? (kt = wn.filter(function (mr) {
                  return mr !== Ge;
                }))
              : (kt = [].concat(Mt(wn), [Ge]))
            : (kt = [Ge]),
            vi(kt);
          var zn = G(G({}, Le), {}, { selectedKeys: kt });
          It ? L == null || L(zn) : I == null || I(zn);
        }
        !O && Pe.length && we !== 'inline' && rt(Oi);
      },
      Dn = Za(function (Fe) {
        Ie == null || Ie(rc(Fe)), Dr(Fe);
      }),
      Jn = Za(function (Fe, Le) {
        var Ge = Pe.filter(function (kt) {
          return kt !== Fe;
        });
        if (Le) Ge.push(Fe);
        else if (we !== 'inline') {
          var It = ur(Fe);
          Ge = Ge.filter(function (kt) {
            return !It.has(kt);
          });
        }
        Vh(Pe, Ge, !0) || rt(Ge, !0);
      }),
      jr = function (Le, Ge) {
        var It = Ge ?? !Pe.includes(Le);
        Jn(Le, It);
      },
      zr = H_(we, dr, Ce, Se, ue, To, Po, _r, jr, Ne);
    p.exports.useEffect(function () {
      be(!0);
    }, []);
    var jn = p.exports.useMemo(
        function () {
          return { _internalRenderMenuItem: _, _internalRenderSubMenuItem: A };
        },
        [_, A]
      ),
      gi =
        we !== 'horizontal' || b
          ? U
          : U.map(function (Fe, Le) {
              return p.exports.createElement(
                Us,
                { key: Fe.key, overflowDisabled: Le > Nn },
                Fe
              );
            }),
      pr = p.exports.createElement(
        Or,
        Me(
          {
            id: x,
            ref: ue,
            prefixCls: ''.concat(a, '-overflow'),
            component: 'ul',
            itemComponent: id,
            className: ge(
              a,
              ''.concat(a, '-root'),
              ''.concat(a, '-').concat(we),
              u,
              ((r = {}),
              fe(r, ''.concat(a, '-inline-collapsed'), mt),
              fe(r, ''.concat(a, '-rtl'), Ce),
              r),
              s
            ),
            dir: v,
            style: l,
            role: 'menu',
            tabIndex: f,
            data: gi,
            renderRawItem: function (Le) {
              return Le;
            },
            renderRawRest: function (Le) {
              var Ge = Le.length,
                It = Ge ? U.slice(-Ge) : null;
              return p.exports.createElement(
                ad,
                {
                  eventKey: mm,
                  title: Ae,
                  disabled: Ct,
                  internalPopupClose: Ge === 0,
                  popupClassName: Ve,
                },
                It
              );
            },
            maxCount: we !== 'horizontal' || b ? Or.INVALIDATE : Or.RESPONSIVE,
            ssr: 'full',
            'data-menu-list': !0,
            onVisibleChange: function (Le) {
              qn(Le);
            },
            onKeyDown: zr,
          },
          D
        )
      );
    return p.exports.createElement(
      av.Provider,
      { value: jn },
      p.exports.createElement(
        ZC.Provider,
        { value: Se },
        p.exports.createElement(
          Us,
          {
            prefixCls: a,
            rootClassName: s,
            mode: we,
            openKeys: Pe,
            rtl: Ce,
            disabled: g,
            motion: le ? Q : null,
            defaultMotions: le ? ne : null,
            activeKey: dr,
            onActive: pi,
            onInactive: fr,
            selectedKeys: wn,
            inlineIndent: J,
            subMenuOpenDelay: P,
            subMenuCloseDelay: T,
            forceSubMenuRender: $,
            builtinPlacements: se,
            triggerSubMenuAction: ae,
            getPopupContainer: Re,
            itemIcon: pe,
            expandIcon: Z,
            onItemClick: Dn,
            onOpenChange: Jn,
          },
          p.exports.createElement(nE.Provider, { value: Pa }, pr),
          p.exports.createElement(
            'div',
            { style: { display: 'none' }, 'aria-hidden': !0 },
            p.exports.createElement(eE.Provider, { value: cr }, U)
          )
        )
      )
    );
  }),
  il = y4;
il.Item = id;
il.SubMenu = ad;
il.ItemGroup = sd;
il.Divider = cv;
globalThis && globalThis.__rest;
const uE = p.exports.createContext({});
var x4 =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const b4 = (e) => {
    const { prefixCls: t, className: n, dashed: r } = e,
      o = x4(e, ['prefixCls', 'className', 'dashed']),
      { getPrefixCls: i } = p.exports.useContext(Ht),
      a = i('menu', t),
      s = ge({ [`${a}-item-divider-dashed`]: !!r }, n);
    return p.exports.createElement(cv, Object.assign({ className: s }, o));
  },
  cE = b4,
  S4 = p.exports.createContext({
    prefixCls: '',
    firstLevel: !0,
    inlineCollapsed: !1,
  }),
  oc = S4,
  w4 = (e) => {
    var t;
    const { className: n, children: r, icon: o, title: i, danger: a } = e,
      {
        prefixCls: s,
        firstLevel: l,
        direction: u,
        disableMenuItemTitleTooltip: c,
        inlineCollapsed: f,
      } = p.exports.useContext(oc),
      d = (h) => {
        const g = p.exports.createElement(
          'span',
          { className: `${s}-title-content` },
          r
        );
        return (!o || (vo(r) && r.type === 'span')) &&
          r &&
          h &&
          l &&
          typeof r == 'string'
          ? p.exports.createElement(
              'div',
              { className: `${s}-inline-collapsed-noicon` },
              r.charAt(0)
            )
          : g;
      },
      { siderCollapsed: m } = p.exports.useContext(uE);
    let v = i;
    typeof i > 'u' ? (v = l ? r : '') : i === !1 && (v = '');
    const x = { title: v };
    !m && !f && ((x.title = null), (x.open = !1));
    const S = ri(r).length;
    let y = p.exports.createElement(
      id,
      Object.assign({}, ci(e, ['title', 'icon', 'danger']), {
        className: ge(
          {
            [`${s}-item-danger`]: a,
            [`${s}-item-only-child`]: (o ? S + 1 : S) === 1,
          },
          n
        ),
        title: typeof i == 'string' ? i : void 0,
      }),
      fi(o, {
        className: ge(
          vo(o)
            ? (t = o.props) === null || t === void 0
              ? void 0
              : t.className
            : '',
          `${s}-item-icon`
        ),
      }),
      d(f)
    );
    return (
      c ||
        (y = p.exports.createElement(
          O_,
          Object.assign({}, x, {
            placement: u === 'rtl' ? 'left' : 'right',
            overlayClassName: `${s}-inline-collapsed-tooltip`,
          }),
          y
        )),
      y
    );
  },
  dE = w4,
  C4 = (e) => {
    var t;
    const { popupClassName: n, icon: r, title: o, theme: i } = e,
      a = p.exports.useContext(oc),
      { prefixCls: s, inlineCollapsed: l, theme: u } = a,
      c = Ea();
    let f;
    if (!r)
      f =
        l && !c.length && o && typeof o == 'string'
          ? p.exports.createElement(
              'div',
              { className: `${s}-inline-collapsed-noicon` },
              o.charAt(0)
            )
          : p.exports.createElement(
              'span',
              { className: `${s}-title-content` },
              o
            );
    else {
      const v = vo(o) && o.type === 'span';
      f = p.exports.createElement(
        p.exports.Fragment,
        null,
        fi(r, {
          className: ge(
            vo(r)
              ? (t = r.props) === null || t === void 0
                ? void 0
                : t.className
              : '',
            `${s}-item-icon`
          ),
        }),
        v
          ? o
          : p.exports.createElement(
              'span',
              { className: `${s}-title-content` },
              o
            )
      );
    }
    const d = p.exports.useMemo(
        () => Object.assign(Object.assign({}, a), { firstLevel: !1 }),
        [a]
      ),
      [m] = Yh('Menu');
    return p.exports.createElement(
      oc.Provider,
      { value: d },
      p.exports.createElement(
        ad,
        Object.assign({}, ci(e, ['icon']), {
          title: f,
          popupClassName: ge(s, n, `${s}-${i || u}`),
          popupStyle: { zIndex: m },
        })
      )
    );
  },
  fE = C4;
var E4 =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
function vm(e) {
  return (e || [])
    .map((t, n) => {
      if (t && typeof t == 'object') {
        const r = t,
          { label: o, children: i, key: a, type: s } = r,
          l = E4(r, ['label', 'children', 'key', 'type']),
          u = a ?? `tmp-${n}`;
        return i || s === 'group'
          ? s === 'group'
            ? p.exports.createElement(
                sd,
                Object.assign({ key: u }, l, { title: o }),
                vm(i)
              )
            : p.exports.createElement(
                fE,
                Object.assign({ key: u }, l, { title: o }),
                vm(i)
              )
          : s === 'divider'
          ? p.exports.createElement(cE, Object.assign({ key: u }, l))
          : p.exports.createElement(dE, Object.assign({ key: u }, l), o);
      }
      return null;
    })
    .filter((t) => t);
}
function P4(e) {
  return p.exports.useMemo(() => e && vm(e), [e]);
}
var T4 =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const ic = p.exports.createContext(null),
  O4 = p.exports.forwardRef((e, t) => {
    const { children: n } = e,
      r = T4(e, ['children']),
      o = p.exports.useContext(ic),
      i = p.exports.useMemo(
        () => Object.assign(Object.assign({}, o), r),
        [o, r.prefixCls, r.mode, r.selectable]
      ),
      a = _k(n),
      s = tl(t, a ? n.ref : null);
    return p.exports.createElement(
      ic.Provider,
      { value: i },
      p.exports.createElement(
        MC,
        null,
        a ? p.exports.cloneElement(n, { ref: s }) : n
      )
    );
  }),
  R4 = (e) => {
    const {
      componentCls: t,
      motionDurationSlow: n,
      horizontalLineHeight: r,
      colorSplit: o,
      lineWidth: i,
      lineType: a,
      itemPaddingInline: s,
    } = e;
    return {
      [`${t}-horizontal`]: {
        lineHeight: r,
        border: 0,
        borderBottom: `${i}px ${a} ${o}`,
        boxShadow: 'none',
        '&::after': {
          display: 'block',
          clear: 'both',
          height: 0,
          content: '"\\20"',
        },
        [`${t}-item, ${t}-submenu`]: {
          position: 'relative',
          display: 'inline-block',
          verticalAlign: 'bottom',
          paddingInline: s,
        },
        [`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]: {
          backgroundColor: 'transparent',
        },
        [`${t}-item, ${t}-submenu-title`]: {
          transition: [`border-color ${n}`, `background ${n}`].join(','),
        },
        [`${t}-submenu-arrow`]: { display: 'none' },
      },
    };
  },
  M4 = R4,
  $4 = (e) => {
    let { componentCls: t, menuArrowOffset: n } = e;
    return {
      [`${t}-rtl`]: { direction: 'rtl' },
      [`${t}-submenu-rtl`]: { transformOrigin: '100% 0' },
      [`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]: {
        [`${t}-submenu-arrow`]: {
          '&::before': { transform: `rotate(-45deg) translateY(-${n})` },
          '&::after': { transform: `rotate(45deg) translateY(${n})` },
        },
      },
    };
  },
  I4 = $4,
  i1 = (e) => Object.assign({}, sC(e)),
  k4 = (e, t) => {
    const {
      componentCls: n,
      itemColor: r,
      itemSelectedColor: o,
      groupTitleColor: i,
      itemBg: a,
      subMenuItemBg: s,
      itemSelectedBg: l,
      activeBarHeight: u,
      activeBarWidth: c,
      activeBarBorderWidth: f,
      motionDurationSlow: d,
      motionEaseInOut: m,
      motionEaseOut: v,
      itemPaddingInline: x,
      motionDurationMid: S,
      itemHoverColor: y,
      lineType: h,
      colorSplit: g,
      itemDisabledColor: b,
      dangerItemColor: C,
      dangerItemHoverColor: P,
      dangerItemSelectedColor: w,
      dangerItemActiveBg: T,
      dangerItemSelectedBg: $,
      itemHoverBg: N,
      itemActiveBg: j,
      menuSubMenuBg: F,
      horizontalItemSelectedColor: H,
      horizontalItemSelectedBg: z,
      horizontalItemBorderRadius: V,
      horizontalItemHoverBg: R,
      popupBg: O,
    } = e;
    return {
      [`${n}-${t}, ${n}-${t} > ${n}`]: {
        color: r,
        background: a,
        [`&${n}-root:focus-visible`]: Object.assign({}, i1(e)),
        [`${n}-item-group-title`]: { color: i },
        [`${n}-submenu-selected`]: { [`> ${n}-submenu-title`]: { color: o } },
        [`${n}-item-disabled, ${n}-submenu-disabled`]: {
          color: `${b} !important`,
        },
        [`${n}-item:not(${n}-item-selected):not(${n}-submenu-selected)`]: {
          [`&:hover, > ${n}-submenu-title:hover`]: { color: y },
        },
        [`&:not(${n}-horizontal)`]: {
          [`${n}-item:not(${n}-item-selected)`]: {
            '&:hover': { backgroundColor: N },
            '&:active': { backgroundColor: j },
          },
          [`${n}-submenu-title`]: {
            '&:hover': { backgroundColor: N },
            '&:active': { backgroundColor: j },
          },
        },
        [`${n}-item-danger`]: {
          color: C,
          [`&${n}-item:hover`]: {
            [`&:not(${n}-item-selected):not(${n}-submenu-selected)`]: {
              color: P,
            },
          },
          [`&${n}-item:active`]: { background: T },
        },
        [`${n}-item a`]: { '&, &:hover': { color: 'inherit' } },
        [`${n}-item-selected`]: {
          color: o,
          [`&${n}-item-danger`]: { color: w },
          ['a, a:hover']: { color: 'inherit' },
        },
        [`& ${n}-item-selected`]: {
          backgroundColor: l,
          [`&${n}-item-danger`]: { backgroundColor: $ },
        },
        [`${n}-item, ${n}-submenu-title`]: {
          [`&:not(${n}-item-disabled):focus-visible`]: Object.assign({}, i1(e)),
        },
        [`&${n}-submenu > ${n}`]: { backgroundColor: F },
        [`&${n}-popup > ${n}`]: { backgroundColor: O },
        [`&${n}-horizontal`]: Object.assign(
          Object.assign({}, t === 'dark' ? { borderBottom: 0 } : {}),
          {
            [`> ${n}-item, > ${n}-submenu`]: {
              top: f,
              marginTop: -f,
              marginBottom: 0,
              borderRadius: V,
              '&::after': {
                position: 'absolute',
                insetInline: x,
                bottom: 0,
                borderBottom: `${u}px solid transparent`,
                transition: `border-color ${d} ${m}`,
                content: '""',
              },
              ['&:hover, &-active, &-open']: {
                background: R,
                '&::after': { borderBottomWidth: u, borderBottomColor: H },
              },
              ['&-selected']: {
                color: H,
                backgroundColor: z,
                '&:hover': { backgroundColor: z },
                '&::after': { borderBottomWidth: u, borderBottomColor: H },
              },
            },
          }
        ),
        [`&${n}-root`]: {
          [`&${n}-inline, &${n}-vertical`]: {
            borderInlineEnd: `${f}px ${h} ${g}`,
          },
        },
        [`&${n}-inline`]: {
          [`${n}-sub${n}-inline`]: { background: s },
          [`${n}-item, ${n}-submenu-title`]:
            f && c ? { width: `calc(100% + ${f}px)` } : {},
          [`${n}-item`]: {
            position: 'relative',
            '&::after': {
              position: 'absolute',
              insetBlock: 0,
              insetInlineEnd: 0,
              borderInlineEnd: `${c}px solid ${o}`,
              transform: 'scaleY(0.0001)',
              opacity: 0,
              transition: [`transform ${S} ${v}`, `opacity ${S} ${v}`].join(
                ','
              ),
              content: '""',
            },
            [`&${n}-item-danger`]: { '&::after': { borderInlineEndColor: w } },
          },
          [`${n}-selected, ${n}-item-selected`]: {
            '&::after': {
              transform: 'scaleY(1)',
              opacity: 1,
              transition: [`transform ${S} ${m}`, `opacity ${S} ${m}`].join(
                ','
              ),
            },
          },
        },
      },
    };
  },
  a1 = k4,
  s1 = (e) => {
    const {
        componentCls: t,
        itemHeight: n,
        itemMarginInline: r,
        padding: o,
        menuArrowSize: i,
        marginXS: a,
        itemMarginBlock: s,
      } = e,
      l = o + i + a;
    return {
      [`${t}-item`]: { position: 'relative', overflow: 'hidden' },
      [`${t}-item, ${t}-submenu-title`]: {
        height: n,
        lineHeight: `${n}px`,
        paddingInline: o,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        marginInline: r,
        marginBlock: s,
        width: `calc(100% - ${r * 2}px)`,
      },
      [`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]: {
        height: n,
        lineHeight: `${n}px`,
      },
      [`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]: { paddingInlineEnd: l },
    };
  },
  A4 = (e) => {
    const {
        componentCls: t,
        iconCls: n,
        itemHeight: r,
        colorTextLightSolid: o,
        dropdownWidth: i,
        controlHeightLG: a,
        motionDurationMid: s,
        motionEaseOut: l,
        paddingXL: u,
        itemMarginInline: c,
        fontSizeLG: f,
        motionDurationSlow: d,
        paddingXS: m,
        boxShadowSecondary: v,
        collapsedWidth: x,
        collapsedIconSize: S,
      } = e,
      y = {
        height: r,
        lineHeight: `${r}px`,
        listStylePosition: 'inside',
        listStyleType: 'disc',
      };
    return [
      {
        [t]: {
          ['&-inline, &-vertical']: Object.assign(
            { [`&${t}-root`]: { boxShadow: 'none' } },
            s1(e)
          ),
        },
        [`${t}-submenu-popup`]: {
          [`${t}-vertical`]: Object.assign(Object.assign({}, s1(e)), {
            boxShadow: v,
          }),
        },
      },
      {
        [`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
          minWidth: i,
          maxHeight: `calc(100vh - ${a * 2.5}px)`,
          padding: '0',
          overflow: 'hidden',
          borderInlineEnd: 0,
          "&:not([class*='-active'])": {
            overflowX: 'hidden',
            overflowY: 'auto',
          },
        },
      },
      {
        [`${t}-inline`]: {
          width: '100%',
          [`&${t}-root`]: {
            [`${t}-item, ${t}-submenu-title`]: {
              display: 'flex',
              alignItems: 'center',
              transition: [
                `border-color ${d}`,
                `background ${d}`,
                `padding ${s} ${l}`,
              ].join(','),
              [`> ${t}-title-content`]: {
                flex: 'auto',
                minWidth: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
              '> *': { flex: 'none' },
            },
          },
          [`${t}-sub${t}-inline`]: {
            padding: 0,
            border: 0,
            borderRadius: 0,
            boxShadow: 'none',
            [`& > ${t}-submenu > ${t}-submenu-title`]: y,
            [`& ${t}-item-group-title`]: { paddingInlineStart: u },
          },
          [`${t}-item`]: y,
        },
      },
      {
        [`${t}-inline-collapsed`]: {
          width: x,
          [`&${t}-root`]: {
            [`${t}-item, ${t}-submenu ${t}-submenu-title`]: {
              [`> ${t}-inline-collapsed-noicon`]: {
                fontSize: f,
                textAlign: 'center',
              },
            },
          },
          [`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]: {
            insetInlineStart: 0,
            paddingInline: `calc(50% - ${f / 2}px - ${c}px)`,
            textOverflow: 'clip',
            [`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]: { opacity: 0 },
            [`${t}-item-icon, ${n}`]: {
              margin: 0,
              fontSize: S,
              lineHeight: `${r}px`,
              '+ span': { display: 'inline-block', opacity: 0 },
            },
          },
          [`${t}-item-icon, ${n}`]: { display: 'inline-block' },
          '&-tooltip': {
            pointerEvents: 'none',
            [`${t}-item-icon, ${n}`]: { display: 'none' },
            'a, a:hover': { color: o },
          },
          [`${t}-item-group-title`]: Object.assign(Object.assign({}, t5), {
            paddingInline: m,
          }),
        },
      },
    ];
  },
  N4 = A4,
  l1 = (e) => {
    const {
      componentCls: t,
      motionDurationSlow: n,
      motionDurationMid: r,
      motionEaseInOut: o,
      motionEaseOut: i,
      iconCls: a,
      iconSize: s,
      iconMarginInlineEnd: l,
    } = e;
    return {
      [`${t}-item, ${t}-submenu-title`]: {
        position: 'relative',
        display: 'block',
        margin: 0,
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        transition: [
          `border-color ${n}`,
          `background ${n}`,
          `padding ${n} ${o}`,
        ].join(','),
        [`${t}-item-icon, ${a}`]: {
          minWidth: s,
          fontSize: s,
          transition: [
            `font-size ${r} ${i}`,
            `margin ${n} ${o}`,
            `color ${n}`,
          ].join(','),
          '+ span': {
            marginInlineStart: l,
            opacity: 1,
            transition: [`opacity ${n} ${o}`, `margin ${n}`, `color ${n}`].join(
              ','
            ),
          },
        },
        [`${t}-item-icon`]: Object.assign({}, aC()),
        [`&${t}-item-only-child`]: {
          [`> ${a}, > ${t}-item-icon`]: { marginInlineEnd: 0 },
        },
      },
      [`${t}-item-disabled, ${t}-submenu-disabled`]: {
        background: 'none !important',
        cursor: 'not-allowed',
        '&::after': { borderColor: 'transparent !important' },
        a: { color: 'inherit !important' },
        [`> ${t}-submenu-title`]: {
          color: 'inherit !important',
          cursor: 'not-allowed',
        },
      },
    };
  },
  u1 = (e) => {
    const {
      componentCls: t,
      motionDurationSlow: n,
      motionEaseInOut: r,
      borderRadius: o,
      menuArrowSize: i,
      menuArrowOffset: a,
    } = e;
    return {
      [`${t}-submenu`]: {
        ['&-expand-icon, &-arrow']: {
          position: 'absolute',
          top: '50%',
          insetInlineEnd: e.margin,
          width: i,
          color: 'currentcolor',
          transform: 'translateY(-50%)',
          transition: `transform ${n} ${r}, opacity ${n}`,
        },
        '&-arrow': {
          '&::before, &::after': {
            position: 'absolute',
            width: i * 0.6,
            height: i * 0.15,
            backgroundColor: 'currentcolor',
            borderRadius: o,
            transition: [
              `background ${n} ${r}`,
              `transform ${n} ${r}`,
              `top ${n} ${r}`,
              `color ${n} ${r}`,
            ].join(','),
            content: '""',
          },
          '&::before': { transform: `rotate(45deg) translateY(-${a})` },
          '&::after': { transform: `rotate(-45deg) translateY(${a})` },
        },
      },
    };
  },
  L4 = (e) => {
    const {
      antCls: t,
      componentCls: n,
      fontSize: r,
      motionDurationSlow: o,
      motionDurationMid: i,
      motionEaseInOut: a,
      paddingXS: s,
      padding: l,
      colorSplit: u,
      lineWidth: c,
      zIndexPopup: f,
      borderRadiusLG: d,
      subMenuItemBorderRadius: m,
      menuArrowSize: v,
      menuArrowOffset: x,
      lineType: S,
      menuPanelMaskInset: y,
      groupTitleLineHeight: h,
      groupTitleFontSize: g,
    } = e;
    return [
      {
        '': {
          [`${n}`]: Object.assign(Object.assign({}, Sy()), {
            ['&-hidden']: { display: 'none' },
          }),
        },
        [`${n}-submenu-hidden`]: { display: 'none' },
      },
      {
        [n]: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(Object.assign(Object.assign({}, Gh(e)), Sy()), {
                  marginBottom: 0,
                  paddingInlineStart: 0,
                  fontSize: r,
                  lineHeight: 0,
                  listStyle: 'none',
                  outline: 'none',
                  transition: `width ${o} cubic-bezier(0.2, 0, 0, 1) 0s`,
                  ['ul, ol']: { margin: 0, padding: 0, listStyle: 'none' },
                  ['&-overflow']: {
                    display: 'flex',
                    [`${n}-item`]: { flex: 'none' },
                  },
                  [`${n}-item, ${n}-submenu, ${n}-submenu-title`]: {
                    borderRadius: e.itemBorderRadius,
                  },
                  [`${n}-item-group-title`]: {
                    padding: `${s}px ${l}px`,
                    fontSize: g,
                    lineHeight: h,
                    transition: `all ${o}`,
                  },
                  [`&-horizontal ${n}-submenu`]: {
                    transition: [
                      `border-color ${o} ${a}`,
                      `background ${o} ${a}`,
                    ].join(','),
                  },
                  [`${n}-submenu, ${n}-submenu-inline`]: {
                    transition: [
                      `border-color ${o} ${a}`,
                      `background ${o} ${a}`,
                      `padding ${i} ${a}`,
                    ].join(','),
                  },
                  [`${n}-submenu ${n}-sub`]: {
                    cursor: 'initial',
                    transition: [
                      `background ${o} ${a}`,
                      `padding ${o} ${a}`,
                    ].join(','),
                  },
                  [`${n}-title-content`]: {
                    transition: `color ${o}`,
                    [`> ${t}-typography-ellipsis-single-line`]: {
                      display: 'inline',
                      verticalAlign: 'unset',
                    },
                  },
                  [`${n}-item a`]: {
                    '&::before': {
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'transparent',
                      content: '""',
                    },
                  },
                  [`${n}-item-divider`]: {
                    overflow: 'hidden',
                    lineHeight: 0,
                    borderColor: u,
                    borderStyle: S,
                    borderWidth: 0,
                    borderTopWidth: c,
                    marginBlock: c,
                    padding: 0,
                    '&-dashed': { borderStyle: 'dashed' },
                  },
                }),
                l1(e)
              ),
              {
                [`${n}-item-group`]: {
                  [`${n}-item-group-list`]: {
                    margin: 0,
                    padding: 0,
                    [`${n}-item, ${n}-submenu-title`]: {
                      paddingInline: `${r * 2}px ${l}px`,
                    },
                  },
                },
                '&-submenu': {
                  '&-popup': {
                    position: 'absolute',
                    zIndex: f,
                    borderRadius: d,
                    boxShadow: 'none',
                    transformOrigin: '0 0',
                    [`&${n}-submenu`]: { background: 'transparent' },
                    '&::before': {
                      position: 'absolute',
                      inset: `${y}px 0 0`,
                      zIndex: -1,
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      content: '""',
                    },
                  },
                  '&-placement-rightTop::before': {
                    top: 0,
                    insetInlineStart: y,
                  },
                  [`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]: { transformOrigin: '100% 0' },
                  [`
          &-placement-leftBottom,
          &-placement-topRight,
          `]: { transformOrigin: '100% 100%' },
                  [`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]: { transformOrigin: '0 100%' },
                  [`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]: { transformOrigin: '0 0' },
                  [`
          &-placement-leftTop,
          &-placement-leftBottom
          `]: { paddingInlineEnd: e.paddingXS },
                  [`
          &-placement-rightTop,
          &-placement-rightBottom
          `]: { paddingInlineStart: e.paddingXS },
                  [`
          &-placement-topRight,
          &-placement-topLeft
          `]: { paddingBottom: e.paddingXS },
                  [`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]: { paddingTop: e.paddingXS },
                  [`> ${n}`]: Object.assign(
                    Object.assign(
                      Object.assign({ borderRadius: d }, l1(e)),
                      u1(e)
                    ),
                    {
                      [`${n}-item, ${n}-submenu > ${n}-submenu-title`]: {
                        borderRadius: m,
                      },
                      [`${n}-submenu-title::after`]: {
                        transition: `transform ${o} ${a}`,
                      },
                    }
                  ),
                },
              }
            ),
            u1(e)
          ),
          {
            [`&-inline-collapsed ${n}-submenu-arrow,
        &-inline ${n}-submenu-arrow`]: {
              '&::before': { transform: `rotate(-45deg) translateX(${x})` },
              '&::after': { transform: `rotate(45deg) translateX(-${x})` },
            },
            [`${n}-submenu-open${n}-submenu-inline > ${n}-submenu-title > ${n}-submenu-arrow`]:
              {
                transform: `translateY(-${v * 0.2}px)`,
                '&::after': { transform: `rotate(-45deg) translateX(-${x})` },
                '&::before': { transform: `rotate(45deg) translateX(${x})` },
              },
          }
        ),
      },
      { [`${t}-layout-header`]: { [n]: { lineHeight: 'inherit' } } },
    ];
  },
  _4 = (e, t) =>
    di(
      'Menu',
      (r) => {
        if (t === !1) return [];
        const {
            colorBgElevated: o,
            colorPrimary: i,
            colorTextLightSolid: a,
            controlHeightLG: s,
            fontSize: l,
            darkItemColor: u,
            darkDangerItemColor: c,
            darkItemBg: f,
            darkSubMenuItemBg: d,
            darkItemSelectedColor: m,
            darkItemSelectedBg: v,
            darkDangerItemSelectedBg: x,
            darkItemHoverBg: S,
            darkGroupTitleColor: y,
            darkItemHoverColor: h,
            darkItemDisabledColor: g,
            darkDangerItemHoverColor: b,
            darkDangerItemSelectedColor: C,
            darkDangerItemActiveBg: P,
          } = r,
          w = (l / 7) * 5,
          T = kn(r, {
            menuArrowSize: w,
            menuHorizontalHeight: s * 1.15,
            menuArrowOffset: `${w * 0.25}px`,
            menuPanelMaskInset: -7,
            menuSubMenuBg: o,
          }),
          $ = kn(T, {
            itemColor: u,
            itemHoverColor: h,
            groupTitleColor: y,
            itemSelectedColor: m,
            itemBg: f,
            popupBg: f,
            subMenuItemBg: d,
            itemActiveBg: 'transparent',
            itemSelectedBg: v,
            activeBarHeight: 0,
            activeBarBorderWidth: 0,
            itemHoverBg: S,
            itemDisabledColor: g,
            dangerItemColor: c,
            dangerItemHoverColor: b,
            dangerItemSelectedColor: C,
            dangerItemActiveBg: P,
            dangerItemSelectedBg: x,
            menuSubMenuBg: d,
            horizontalItemSelectedColor: a,
            horizontalItemSelectedBg: i,
          });
        return [
          L4(T),
          M4(T),
          N4(T),
          a1(T, 'light'),
          a1($, 'dark'),
          I4(T),
          BL(T),
          tc(T, 'slide-up'),
          tc(T, 'slide-down'),
          nv(T, 'zoom-big'),
        ];
      },
      (r) => {
        const {
            colorPrimary: o,
            colorError: i,
            colorTextDisabled: a,
            colorErrorBg: s,
            colorText: l,
            colorTextDescription: u,
            colorBgContainer: c,
            colorFillAlter: f,
            colorFillContent: d,
            lineWidth: m,
            lineWidthBold: v,
            controlItemBgActive: x,
            colorBgTextHover: S,
            controlHeightLG: y,
            lineHeight: h,
            colorBgElevated: g,
            marginXXS: b,
            padding: C,
            fontSize: P,
            controlHeightSM: w,
            fontSizeLG: T,
            colorTextLightSolid: $,
            colorErrorHover: N,
          } = r,
          j = new Jt($).setAlpha(0.65).toRgbString();
        return {
          dropdownWidth: 160,
          zIndexPopup: r.zIndexPopupBase + 50,
          radiusItem: r.borderRadiusLG,
          itemBorderRadius: r.borderRadiusLG,
          radiusSubMenuItem: r.borderRadiusSM,
          subMenuItemBorderRadius: r.borderRadiusSM,
          colorItemText: l,
          itemColor: l,
          colorItemTextHover: l,
          itemHoverColor: l,
          colorItemTextHoverHorizontal: o,
          horizontalItemHoverColor: o,
          colorGroupTitle: u,
          groupTitleColor: u,
          colorItemTextSelected: o,
          itemSelectedColor: o,
          colorItemTextSelectedHorizontal: o,
          horizontalItemSelectedColor: o,
          colorItemBg: c,
          itemBg: c,
          colorItemBgHover: S,
          itemHoverBg: S,
          colorItemBgActive: d,
          itemActiveBg: x,
          colorSubItemBg: f,
          subMenuItemBg: f,
          colorItemBgSelected: x,
          itemSelectedBg: x,
          colorItemBgSelectedHorizontal: 'transparent',
          horizontalItemSelectedBg: 'transparent',
          colorActiveBarWidth: 0,
          activeBarWidth: 0,
          colorActiveBarHeight: v,
          activeBarHeight: v,
          colorActiveBarBorderSize: m,
          activeBarBorderWidth: m,
          colorItemTextDisabled: a,
          itemDisabledColor: a,
          colorDangerItemText: i,
          dangerItemColor: i,
          colorDangerItemTextHover: i,
          dangerItemHoverColor: i,
          colorDangerItemTextSelected: i,
          dangerItemSelectedColor: i,
          colorDangerItemBgActive: s,
          dangerItemActiveBg: s,
          colorDangerItemBgSelected: s,
          dangerItemSelectedBg: s,
          itemMarginInline: r.marginXXS,
          horizontalItemBorderRadius: 0,
          horizontalItemHoverBg: 'transparent',
          itemHeight: y,
          groupTitleLineHeight: h,
          collapsedWidth: y * 2,
          popupBg: g,
          itemMarginBlock: b,
          itemPaddingInline: C,
          horizontalLineHeight: `${y * 1.15}px`,
          iconSize: P,
          iconMarginInlineEnd: w - P,
          collapsedIconSize: T,
          groupTitleFontSize: P,
          darkItemDisabledColor: new Jt($).setAlpha(0.25).toRgbString(),
          darkItemColor: j,
          darkDangerItemColor: i,
          darkItemBg: '#001529',
          darkSubMenuItemBg: '#000c17',
          darkItemSelectedColor: $,
          darkItemSelectedBg: o,
          darkDangerItemSelectedBg: i,
          darkItemHoverBg: 'transparent',
          darkGroupTitleColor: j,
          darkItemHoverColor: $,
          darkDangerItemHoverColor: N,
          darkDangerItemSelectedColor: $,
          darkDangerItemActiveBg: i,
        };
      },
      {
        deprecatedTokens: [
          ['colorGroupTitle', 'groupTitleColor'],
          ['radiusItem', 'itemBorderRadius'],
          ['radiusSubMenuItem', 'subMenuItemBorderRadius'],
          ['colorItemText', 'itemColor'],
          ['colorItemTextHover', 'itemHoverColor'],
          ['colorItemTextHoverHorizontal', 'horizontalItemHoverColor'],
          ['colorItemTextSelected', 'itemSelectedColor'],
          ['colorItemTextSelectedHorizontal', 'horizontalItemSelectedColor'],
          ['colorItemTextDisabled', 'itemDisabledColor'],
          ['colorDangerItemText', 'dangerItemColor'],
          ['colorDangerItemTextHover', 'dangerItemHoverColor'],
          ['colorDangerItemTextSelected', 'dangerItemSelectedColor'],
          ['colorDangerItemBgActive', 'dangerItemActiveBg'],
          ['colorDangerItemBgSelected', 'dangerItemSelectedBg'],
          ['colorItemBg', 'itemBg'],
          ['colorItemBgHover', 'itemHoverBg'],
          ['colorSubItemBg', 'subMenuItemBg'],
          ['colorItemBgActive', 'itemActiveBg'],
          ['colorItemBgSelectedHorizontal', 'horizontalItemSelectedBg'],
          ['colorActiveBarWidth', 'activeBarWidth'],
          ['colorActiveBarHeight', 'activeBarHeight'],
          ['colorActiveBarBorderSize', 'activeBarBorderWidth'],
          ['colorItemBgSelected', 'itemSelectedBg'],
        ],
      }
    )(e);
var D4 =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const j4 = p.exports.forwardRef((e, t) => {
    var n, r;
    const o = p.exports.useContext(ic),
      i = o || {},
      {
        getPrefixCls: a,
        getPopupContainer: s,
        direction: l,
        menu: u,
      } = p.exports.useContext(Ht),
      c = a(),
      {
        prefixCls: f,
        className: d,
        style: m,
        theme: v = 'light',
        expandIcon: x,
        _internalDisableMenuItemTitleTooltip: S,
        inlineCollapsed: y,
        siderCollapsed: h,
        items: g,
        children: b,
        rootClassName: C,
        mode: P,
        selectable: w,
        onClick: T,
        overflowedIndicatorPopupClassName: $,
      } = e,
      N = D4(e, [
        'prefixCls',
        'className',
        'style',
        'theme',
        'expandIcon',
        '_internalDisableMenuItemTitleTooltip',
        'inlineCollapsed',
        'siderCollapsed',
        'items',
        'children',
        'rootClassName',
        'mode',
        'selectable',
        'onClick',
        'overflowedIndicatorPopupClassName',
      ]),
      j = ci(N, ['collapsedWidth']),
      F = P4(g) || b;
    (n = i.validator) === null || n === void 0 || n.call(i, { mode: P });
    const H = mn(function () {
        var Q;
        T == null || T.apply(void 0, arguments),
          (Q = i.onClick) === null || Q === void 0 || Q.call(i);
      }),
      z = i.mode || P,
      V = w ?? i.selectable,
      R = p.exports.useMemo(() => (h !== void 0 ? h : y), [y, h]),
      O = {
        horizontal: { motionName: `${c}-slide-up` },
        inline: o3(c),
        other: { motionName: `${c}-zoom-big` },
      },
      E = a('menu', f || i.prefixCls),
      [k, I] = _4(E, !o),
      L = ge(`${E}-${v}`, u == null ? void 0 : u.className, d);
    let B;
    if (typeof x == 'function') B = x;
    else if (x === null || x === !1) B = null;
    else if (i.expandIcon === null || i.expandIcon === !1) B = null;
    else {
      const Q = x ?? i.expandIcon;
      B = fi(Q, {
        className: ge(
          `${E}-submenu-expand-icon`,
          vo(Q)
            ? (r = Q.props) === null || r === void 0
              ? void 0
              : r.className
            : ''
        ),
      });
    }
    const J = p.exports.useMemo(
      () => ({
        prefixCls: E,
        inlineCollapsed: R || !1,
        direction: l,
        firstLevel: !0,
        theme: v,
        mode: z,
        disableMenuItemTitleTooltip: S,
      }),
      [E, R, l, S, v]
    );
    return k(
      p.exports.createElement(
        ic.Provider,
        { value: null },
        p.exports.createElement(
          oc.Provider,
          { value: J },
          p.exports.createElement(
            il,
            Object.assign(
              {
                getPopupContainer: s,
                overflowedIndicator: p.exports.createElement(Ew, null),
                overflowedIndicatorPopupClassName: ge(E, `${E}-${v}`, $),
                mode: z,
                selectable: V,
                onClick: H,
              },
              j,
              {
                inlineCollapsed: R,
                style: Object.assign(
                  Object.assign({}, u == null ? void 0 : u.style),
                  m
                ),
                className: L,
                prefixCls: E,
                direction: l,
                defaultMotions: O,
                expandIcon: B,
                ref: t,
                rootClassName: ge(C, I),
              }
            ),
            F
          )
        )
      )
    );
  }),
  z4 = j4,
  al = p.exports.forwardRef((e, t) => {
    const n = p.exports.useRef(null),
      r = p.exports.useContext(uE);
    return (
      p.exports.useImperativeHandle(t, () => ({
        menu: n.current,
        focus: (o) => {
          var i;
          (i = n.current) === null || i === void 0 || i.focus(o);
        },
      })),
      p.exports.createElement(z4, Object.assign({ ref: n }, e, r))
    );
  });
al.Item = dE;
al.SubMenu = fE;
al.Divider = cE;
al.ItemGroup = sd;
const B4 = al,
  F4 = (e) => {
    const {
        componentCls: t,
        menuCls: n,
        colorError: r,
        colorTextLightSolid: o,
      } = e,
      i = `${n}-item`;
    return {
      [`${t}, ${t}-menu-submenu`]: {
        [`${n} ${i}`]: {
          [`&${i}-danger:not(${i}-disabled)`]: {
            color: r,
            '&:hover': { color: o, backgroundColor: r },
          },
        },
      },
    };
  },
  V4 = F4,
  H4 = (e) => {
    const {
      componentCls: t,
      menuCls: n,
      zIndexPopup: r,
      dropdownArrowDistance: o,
      sizePopupArrow: i,
      antCls: a,
      iconCls: s,
      motionDurationMid: l,
      dropdownPaddingVertical: u,
      fontSize: c,
      dropdownEdgeChildPadding: f,
      colorTextDisabled: d,
      fontSizeIcon: m,
      controlPaddingHorizontal: v,
      colorBgElevated: x,
    } = e;
    return [
      {
        [t]: Object.assign(Object.assign({}, Gh(e)), {
          position: 'absolute',
          top: -9999,
          left: { _skip_check_: !0, value: -9999 },
          zIndex: r,
          display: 'block',
          '&::before': {
            position: 'absolute',
            insetBlock: -o + i / 2,
            zIndex: -9999,
            opacity: 1e-4,
            content: '""',
          },
          [`&-trigger${a}-btn`]: {
            [`& > ${s}-down, & > ${a}-btn-icon > ${s}-down`]: { fontSize: m },
          },
          [`${t}-wrap`]: {
            position: 'relative',
            [`${a}-btn > ${s}-down`]: { fontSize: m },
            [`${s}-down::before`]: { transition: `transform ${l}` },
          },
          [`${t}-wrap-open`]: {
            [`${s}-down::before`]: { transform: 'rotate(180deg)' },
          },
          [`
        &-hidden,
        &-menu-hidden,
        &-menu-submenu-hidden
      `]: { display: 'none' },
          [`&${a}-slide-down-enter${a}-slide-down-enter-active${t}-placement-bottomLeft,
          &${a}-slide-down-appear${a}-slide-down-appear-active${t}-placement-bottomLeft,
          &${a}-slide-down-enter${a}-slide-down-enter-active${t}-placement-bottom,
          &${a}-slide-down-appear${a}-slide-down-appear-active${t}-placement-bottom,
          &${a}-slide-down-enter${a}-slide-down-enter-active${t}-placement-bottomRight,
          &${a}-slide-down-appear${a}-slide-down-appear-active${t}-placement-bottomRight`]:
            { animationName: jC },
          [`&${a}-slide-up-enter${a}-slide-up-enter-active${t}-placement-topLeft,
          &${a}-slide-up-appear${a}-slide-up-appear-active${t}-placement-topLeft,
          &${a}-slide-up-enter${a}-slide-up-enter-active${t}-placement-top,
          &${a}-slide-up-appear${a}-slide-up-appear-active${t}-placement-top,
          &${a}-slide-up-enter${a}-slide-up-enter-active${t}-placement-topRight,
          &${a}-slide-up-appear${a}-slide-up-appear-active${t}-placement-topRight`]:
            { animationName: BC },
          [`&${a}-slide-down-leave${a}-slide-down-leave-active${t}-placement-bottomLeft,
          &${a}-slide-down-leave${a}-slide-down-leave-active${t}-placement-bottom,
          &${a}-slide-down-leave${a}-slide-down-leave-active${t}-placement-bottomRight`]:
            { animationName: zC },
          [`&${a}-slide-up-leave${a}-slide-up-leave-active${t}-placement-topLeft,
          &${a}-slide-up-leave${a}-slide-up-leave-active${t}-placement-top,
          &${a}-slide-up-leave${a}-slide-up-leave-active${t}-placement-topRight`]:
            { animationName: FC },
        }),
      },
      GC(e, {
        colorBg: x,
        limitVerticalRadius: !0,
        arrowPlacement: { top: !0, bottom: !0 },
      }),
      {
        [`${t} ${n}`]: { position: 'relative', margin: 0 },
        [`${n}-submenu-popup`]: {
          position: 'absolute',
          zIndex: r,
          background: 'transparent',
          boxShadow: 'none',
          transformOrigin: '0 0',
          'ul, li': { listStyle: 'none', margin: 0 },
        },
        [`${t}, ${t}-menu-submenu`]: {
          [n]: Object.assign(
            Object.assign(
              {
                padding: f,
                listStyleType: 'none',
                backgroundColor: x,
                backgroundClip: 'padding-box',
                borderRadius: e.borderRadiusLG,
                outline: 'none',
                boxShadow: e.boxShadowSecondary,
              },
              tm(e)
            ),
            {
              [`${n}-item-group-title`]: {
                padding: `${u}px ${v}px`,
                color: e.colorTextDescription,
                transition: `all ${l}`,
              },
              [`${n}-item`]: {
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              },
              [`${n}-item-icon`]: {
                minWidth: c,
                marginInlineEnd: e.marginXS,
                fontSize: e.fontSizeSM,
              },
              [`${n}-title-content`]: {
                flex: 'auto',
                '> a': {
                  color: 'inherit',
                  transition: `all ${l}`,
                  '&:hover': { color: 'inherit' },
                  '&::after': { position: 'absolute', inset: 0, content: '""' },
                },
              },
              [`${n}-item, ${n}-submenu-title`]: Object.assign(
                Object.assign(
                  {
                    clear: 'both',
                    margin: 0,
                    padding: `${u}px ${v}px`,
                    color: e.colorText,
                    fontWeight: 'normal',
                    fontSize: c,
                    lineHeight: e.lineHeight,
                    cursor: 'pointer',
                    transition: `all ${l}`,
                    borderRadius: e.borderRadiusSM,
                    ['&:hover, &-active']: {
                      backgroundColor: e.controlItemBgHover,
                    },
                  },
                  tm(e)
                ),
                {
                  '&-selected': {
                    color: e.colorPrimary,
                    backgroundColor: e.controlItemBgActive,
                    '&:hover, &-active': {
                      backgroundColor: e.controlItemBgActiveHover,
                    },
                  },
                  '&-disabled': {
                    color: d,
                    cursor: 'not-allowed',
                    '&:hover': {
                      color: d,
                      backgroundColor: x,
                      cursor: 'not-allowed',
                    },
                    a: { pointerEvents: 'none' },
                  },
                  '&-divider': {
                    height: 1,
                    margin: `${e.marginXXS}px 0`,
                    overflow: 'hidden',
                    lineHeight: 0,
                    backgroundColor: e.colorSplit,
                  },
                  [`${t}-menu-submenu-expand-icon`]: {
                    position: 'absolute',
                    insetInlineEnd: e.paddingXS,
                    [`${t}-menu-submenu-arrow-icon`]: {
                      marginInlineEnd: '0 !important',
                      color: e.colorTextDescription,
                      fontSize: m,
                      fontStyle: 'normal',
                    },
                  },
                }
              ),
              [`${n}-item-group-list`]: {
                margin: `0 ${e.marginXS}px`,
                padding: 0,
                listStyle: 'none',
              },
              [`${n}-submenu-title`]: { paddingInlineEnd: v + e.fontSizeSM },
              [`${n}-submenu-vertical`]: { position: 'relative' },
              [`${n}-submenu${n}-submenu-disabled ${t}-menu-submenu-title`]: {
                [`&, ${t}-menu-submenu-arrow-icon`]: {
                  color: d,
                  backgroundColor: x,
                  cursor: 'not-allowed',
                },
              },
              [`${n}-submenu-selected ${t}-menu-submenu-title`]: {
                color: e.colorPrimary,
              },
            }
          ),
        },
      },
      [
        tc(e, 'slide-up'),
        tc(e, 'slide-down'),
        Hy(e, 'move-up'),
        Hy(e, 'move-down'),
        nv(e, 'zoom-big'),
      ],
    ];
  },
  pE = di(
    'Dropdown',
    (e, t) => {
      let { rootPrefixCls: n } = t;
      const {
          marginXXS: r,
          sizePopupArrow: o,
          controlHeight: i,
          fontSize: a,
          lineHeight: s,
          paddingXXS: l,
          componentCls: u,
          borderRadiusLG: c,
        } = e,
        f = (i - a * s) / 2,
        { dropdownArrowOffset: d } = ov({ contentRadius: c }),
        m = kn(e, {
          menuCls: `${u}-menu`,
          rootPrefixCls: n,
          dropdownArrowDistance: o / 2 + r,
          dropdownArrowOffset: d,
          dropdownPaddingVertical: f,
          dropdownEdgeChildPadding: l,
        });
      return [H4(m), V4(m)];
    },
    (e) => ({ zIndexPopup: e.zIndexPopupBase + 50 })
  ),
  dv = (e) => {
    const {
        menu: t,
        arrow: n,
        prefixCls: r,
        children: o,
        trigger: i,
        disabled: a,
        dropdownRender: s,
        getPopupContainer: l,
        overlayClassName: u,
        rootClassName: c,
        overlayStyle: f,
        open: d,
        onOpenChange: m,
        visible: v,
        onVisibleChange: x,
        mouseEnterDelay: S = 0.15,
        mouseLeaveDelay: y = 0.1,
        autoAdjustOverflow: h = !0,
        placement: g = '',
        overlay: b,
        transitionName: C,
      } = e,
      {
        getPopupContainer: P,
        getPrefixCls: w,
        direction: T,
        dropdown: $,
      } = p.exports.useContext(Ht);
    Qw();
    const N = p.exports.useMemo(() => {
        const Z = w();
        return C !== void 0
          ? C
          : g.includes('top')
          ? `${Z}-slide-down`
          : `${Z}-slide-up`;
      }, [w, g, C]),
      j = p.exports.useMemo(
        () =>
          g
            ? g.includes('Center')
              ? g.slice(0, g.indexOf('Center'))
              : g
            : T === 'rtl'
            ? 'bottomRight'
            : 'bottomLeft',
        [g, T]
      ),
      F = w('dropdown', r),
      [H, z] = pE(F),
      [, V] = Eo(),
      R = p.exports.Children.only(o),
      O = fi(R, {
        className: ge(
          `${F}-trigger`,
          { [`${F}-rtl`]: T === 'rtl' },
          R.props.className
        ),
        disabled: a,
      }),
      E = a ? [] : i;
    let k;
    E && E.includes('contextMenu') && (k = !0);
    const [I, L] = Qo(!1, { value: d ?? v }),
      B = mn((Z) => {
        m == null || m(Z, { source: 'trigger' }), x == null || x(Z), L(Z);
      }),
      J = ge(u, c, z, $ == null ? void 0 : $.className, {
        [`${F}-rtl`]: T === 'rtl',
      }),
      Q = XC({
        arrowPointAtCenter: typeof n == 'object' && n.pointAtCenter,
        autoAdjustOverflow: h,
        offset: V.marginXXS,
        arrowWidth: n ? V.sizePopupArrow : 0,
        borderRadius: V.borderRadius,
      }),
      ne = p.exports.useCallback(() => {
        (t != null && t.selectable && t != null && t.multiple) ||
          (m == null || m(!1, { source: 'menu' }), L(!1));
      }, [t == null ? void 0 : t.selectable, t == null ? void 0 : t.multiple]),
      q = () => {
        let Z;
        return (
          t != null && t.items
            ? (Z = p.exports.createElement(B4, Object.assign({}, t)))
            : typeof b == 'function'
            ? (Z = b())
            : (Z = b),
          s && (Z = s(Z)),
          (Z = p.exports.Children.only(
            typeof Z == 'string' ? p.exports.createElement('span', null, Z) : Z
          )),
          p.exports.createElement(
            O4,
            {
              prefixCls: `${F}-menu`,
              expandIcon: p.exports.createElement(
                'span',
                { className: `${F}-menu-submenu-arrow` },
                p.exports.createElement(Tk, {
                  className: `${F}-menu-submenu-arrow-icon`,
                })
              ),
              mode: 'vertical',
              selectable: !1,
              onClick: ne,
              validator: (me) => {},
            },
            Z
          )
        );
      },
      [ae, se] = Yh('Dropdown', f == null ? void 0 : f.zIndex);
    let pe = p.exports.createElement(
      L_,
      Object.assign({ alignPoint: k }, ci(e, ['rootClassName']), {
        mouseEnterDelay: S,
        mouseLeaveDelay: y,
        visible: I,
        builtinPlacements: Q,
        arrow: !!n,
        overlayClassName: J,
        prefixCls: F,
        getPopupContainer: l || P,
        transitionName: N,
        trigger: E,
        overlay: q,
        placement: j,
        onVisibleChange: B,
        overlayStyle: Object.assign(
          Object.assign(Object.assign({}, $ == null ? void 0 : $.style), f),
          { zIndex: ae }
        ),
      }),
      O
    );
    return (
      ae && (pe = p.exports.createElement(Qh.Provider, { value: se }, pe)),
      H(pe)
    );
  };
function U4(e) {
  return Object.assign(Object.assign({}, e), {
    align: { overflow: { adjustX: !1, adjustY: !1 } },
  });
}
const W4 = VL(dv, 'dropdown', (e) => e, U4),
  K4 = (e) =>
    p.exports.createElement(
      W4,
      Object.assign({}, e),
      p.exports.createElement('span', null)
    );
dv._InternalPanelDoNotUseOrYouWillBeFired = K4;
const mE = dv;
function c1(e) {
  return ['small', 'middle', 'large'].includes(e);
}
function d1(e) {
  return e ? typeof e == 'number' && !Number.isNaN(e) : !1;
}
const hE = de.createContext({ latestIndex: 0 }),
  G4 = hE.Provider,
  X4 = (e) => {
    let { className: t, index: n, children: r, split: o, style: i } = e;
    const { latestIndex: a } = p.exports.useContext(hE);
    return r == null
      ? null
      : p.exports.createElement(
          p.exports.Fragment,
          null,
          p.exports.createElement('div', { className: t, style: i }, r),
          n < a &&
            o &&
            p.exports.createElement('span', { className: `${t}-split` }, o)
        );
  },
  Q4 = X4;
var Y4 =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const q4 = p.exports.forwardRef((e, t) => {
    var n, r;
    const {
        getPrefixCls: o,
        space: i,
        direction: a,
      } = p.exports.useContext(Ht),
      {
        size: s = (i == null ? void 0 : i.size) || 'small',
        align: l,
        className: u,
        rootClassName: c,
        children: f,
        direction: d = 'horizontal',
        prefixCls: m,
        split: v,
        style: x,
        wrap: S = !1,
        classNames: y,
        styles: h,
      } = e,
      g = Y4(e, [
        'size',
        'align',
        'className',
        'rootClassName',
        'children',
        'direction',
        'prefixCls',
        'split',
        'style',
        'wrap',
        'classNames',
        'styles',
      ]),
      [b, C] = Array.isArray(s) ? s : [s, s],
      P = c1(C),
      w = c1(b),
      T = d1(C),
      $ = d1(b),
      N = ri(f, { keepEmpty: !0 }),
      j = l === void 0 && d === 'horizontal' ? 'center' : l,
      F = o('space', m),
      [H, z] = TC(F),
      V = ge(
        F,
        i == null ? void 0 : i.className,
        z,
        `${F}-${d}`,
        {
          [`${F}-rtl`]: a === 'rtl',
          [`${F}-align-${j}`]: j,
          [`${F}-gap-row-${C}`]: P,
          [`${F}-gap-col-${b}`]: w,
        },
        u,
        c
      ),
      R = ge(
        `${F}-item`,
        (n = y == null ? void 0 : y.item) !== null && n !== void 0
          ? n
          : (r = i == null ? void 0 : i.classNames) === null || r === void 0
          ? void 0
          : r.item
      );
    let O = 0;
    const E = N.map((L, B) => {
        var J, Q;
        L != null && (O = B);
        const ne = (L && L.key) || `${R}-${B}`;
        return p.exports.createElement(
          Q4,
          {
            className: R,
            key: ne,
            index: B,
            split: v,
            style:
              (J = h == null ? void 0 : h.item) !== null && J !== void 0
                ? J
                : (Q = i == null ? void 0 : i.styles) === null || Q === void 0
                ? void 0
                : Q.item,
          },
          L
        );
      }),
      k = p.exports.useMemo(() => ({ latestIndex: O }), [O]);
    if (N.length === 0) return null;
    const I = {};
    return (
      S && (I.flexWrap = 'wrap'),
      !w && $ && (I.columnGap = b),
      !P && T && (I.rowGap = C),
      H(
        p.exports.createElement(
          'div',
          Object.assign(
            {
              ref: t,
              className: V,
              style: Object.assign(
                Object.assign(
                  Object.assign({}, I),
                  i == null ? void 0 : i.style
                ),
                x
              ),
            },
            g
          ),
          p.exports.createElement(G4, { value: k }, E)
        )
      )
    );
  }),
  vE = q4;
vE.Compact = w3;
const gE = vE;
var Z4 =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const yE = (e) => {
  const {
      getPopupContainer: t,
      getPrefixCls: n,
      direction: r,
    } = p.exports.useContext(Ht),
    {
      prefixCls: o,
      type: i = 'default',
      danger: a,
      disabled: s,
      loading: l,
      onClick: u,
      htmlType: c,
      children: f,
      className: d,
      menu: m,
      arrow: v,
      autoFocus: x,
      overlay: S,
      trigger: y,
      align: h,
      open: g,
      onOpenChange: b,
      placement: C,
      getPopupContainer: P,
      href: w,
      icon: T = p.exports.createElement(Ew, null),
      title: $,
      buttonsRender: N = (Z) => Z,
      mouseEnterDelay: j,
      mouseLeaveDelay: F,
      overlayClassName: H,
      overlayStyle: z,
      destroyPopupOnHide: V,
      dropdownRender: R,
    } = e,
    O = Z4(e, [
      'prefixCls',
      'type',
      'danger',
      'disabled',
      'loading',
      'onClick',
      'htmlType',
      'children',
      'className',
      'menu',
      'arrow',
      'autoFocus',
      'overlay',
      'trigger',
      'align',
      'open',
      'onOpenChange',
      'placement',
      'getPopupContainer',
      'href',
      'icon',
      'title',
      'buttonsRender',
      'mouseEnterDelay',
      'mouseLeaveDelay',
      'overlayClassName',
      'overlayStyle',
      'destroyPopupOnHide',
      'dropdownRender',
    ]),
    E = n('dropdown', o),
    k = `${E}-button`,
    [I, L] = pE(E),
    B = {
      menu: m,
      arrow: v,
      autoFocus: x,
      align: h,
      disabled: s,
      trigger: s ? [] : y,
      onOpenChange: b,
      getPopupContainer: P || t,
      mouseEnterDelay: j,
      mouseLeaveDelay: F,
      overlayClassName: H,
      overlayStyle: z,
      destroyPopupOnHide: V,
      dropdownRender: R,
    },
    { compactSize: J, compactItemClassnames: Q } = RC(E, r),
    ne = ge(k, Q, d, L);
  'overlay' in e && (B.overlay = S),
    'open' in e && (B.open = g),
    'placement' in e
      ? (B.placement = C)
      : (B.placement = r === 'rtl' ? 'bottomLeft' : 'bottomRight');
  const q = p.exports.createElement(
      Ly,
      {
        type: i,
        danger: a,
        disabled: s,
        loading: l,
        onClick: u,
        htmlType: c,
        href: w,
        title: $,
      },
      f
    ),
    ae = p.exports.createElement(Ly, { type: i, danger: a, icon: T }),
    [se, pe] = N([q, ae]);
  return I(
    p.exports.createElement(
      gE.Compact,
      Object.assign({ className: ne, size: J, block: !0 }, O),
      se,
      p.exports.createElement(mE, Object.assign({}, B), pe)
    )
  );
};
yE.__ANT_BUTTON = !0;
const J4 = yE,
  xE = mE;
xE.Button = J4;
const eD = xE,
  tD = ({ props: e }) =>
    M(eD, {
      menu: { items: e.items },
      open: !!e.showDrop,
      overlayStyle: { background: 'transparent' },
      children: M('a', {
        onClick: (t) => t.preventDefault(),
        children: M(gE, { children: M(Pw, {}) }),
      }),
    }),
  nD = () => {
    const [e, t] = p.exports.useState(!1),
      [n, r] = p.exports.useState(window.innerWidth),
      [o, i] = p.exports.useState(!1),
      a = KP();
    p.exports.useEffect(() => {
      const S = () => {
        r(window.innerWidth), window.innerWidth > 1200 && t(!1);
      };
      return (
        window.addEventListener('resize', S),
        () => {
          window.removeEventListener('resize', S);
        }
      );
    }, []);
    const s = () => {
        i(!o);
      },
      l = () => {
        a('/doctors');
      },
      u = () => {
        a('/packages');
      },
      c = () => {
        a('/location');
      },
      f = () => {
        a('/treatments');
      },
      d = () => {
        a('/aboutus');
      },
      m = () => {
        a('/contactus');
      },
      v = () => {
        a('/services');
      },
      x = {
        items: [
          {
            key: 1,
            label: M('a', {
              target: '_blank',
              rel: 'noopener noreferrer',
              href: 'https://www.antgroup.com',
              children: 'Profile',
            }),
            icon: M(Pw, {}),
            danger: !1,
          },
          {
            key: 2,
            label: M('a', {
              target: '_blank',
              rel: 'noopener noreferrer',
              href: 'https://www.aliyun.com',
              children: 'Settings',
            }),
            icon: M($k, {}),
          },
          {
            key: 3,
            label: M('a', {
              target: '_blank',
              rel: 'noopener noreferrer',
              href: 'https://www.aliyun.com',
              children: 'Logout',
            }),
            icon: M(wk, {}),
          },
        ],
        showDrop: o,
      };
    return M(HE, {
      children: ie('nav', {
        className: 'navBar',
        children: [
          ie('div', {
            className: 'leftSection',
            children: [
              M('a', {
                href: '/',
                target: '_blank',
                style: { textDecoration: 'none', outline: 'none' },
                children: ie('div', {
                  className: 'companyLogo',
                  children: [
                    M(SI.img, {
                      initial: { scale: 0 },
                      animate: { rotate: 360, scale: 1 },
                      transition: { duration: 3, stiffness: 260 },
                      whileHover: { scale: 1.1, rotate: 0 },
                      whileTap: {
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: '100%',
                      },
                      src: './images/logo.jpg',
                    }),
                    M('h1', { children: 'DOI DOI' }),
                  ],
                }),
              }),
              ie('div', {
                className: 'navBtns',
                children: [
                  M('button', { onClick: d, children: 'ABOUT US' }),
                  M('button', { onClick: l, children: 'OUR DOCTORS' }),
                  M('button', { onClick: f, children: 'OUR TREATMENTS' }),
                  M('button', { onClick: u, children: 'OUR PACKAGES' }),
                  M('button', { onClick: v, children: 'SERVICES' }),
                  M('button', { onClick: c, children: 'OUR LOCATIONS' }),
                  M('button', { onClick: m, children: 'CONTACT US' }),
                ],
              }),
            ],
          }),
          ie('div', {
            className: 'rightSection',
            children: [
              ie('div', {
                className: 'accountSection',
                children: [
                  M('button', { children: 'BOOKINGS' }),
                  M('div', {
                    className: 'profile_section',
                    children: M('button', {
                      onClick: s,
                      children: M(tD, { props: x }),
                    }),
                  }),
                ],
              }),
              M('div', {
                className: 'menuSection',
                children: e
                  ? M(PI, { className: 'hideBtn', onClick: () => t(!1) })
                  : M(EI, { className: 'menuBtn', onClick: () => t(!0) }),
              }),
            ],
          }),
          ie('div', {
            className: 'sideMenu',
            style: { display: !e || n > 1200 ? 'none' : 'flex' },
            children: [
              ie('div', {
                className: 'sideMenuSiteSections',
                children: [
                  M('button', { children: 'About Us' }),
                  M('button', { children: 'Services' }),
                  M('button', { children: 'Community' }),
                  M('button', { children: 'Blog' }),
                  M('button', { children: 'Contact Us' }),
                ],
              }),
              ie('div', {
                className: 'sideMenuContent',
                children: [
                  M('div', {
                    className: 'sideMenuAccountHeader',
                    children: M('h1', { children: 'Login or Sign Up' }),
                  }),
                  ie('div', {
                    className: 'loginSignUpSection',
                    children: [
                      ie('div', {
                        className: 'sideMenuAccountBtns',
                        children: [
                          M('button', { children: 'Login' }),
                          M('button', { children: 'Sign Up' }),
                        ],
                      }),
                      M('div', {
                        className: 'disclaimer',
                        children: '© SPARK All rights reserved.',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  };
const rD = () => {
  const e = p.exports.useRef();
  return (
    p.exports.useEffect(() => {
      new IntersectionObserver(
        (n) => {
          n.forEach((r) => {
            r.isIntersecting && r.target.classList.add('fadeIn');
          });
        },
        { threshold: 0.5 }
      ).observe(e.current);
    }, []),
    ie('section', {
      className: 'welcomeSection',
      children: [
        ie('div', {
          className: 'welcomeText',
          children: [
            M('div', {
              className: 'motto',
              children: 'Come Experience The Secrets Of Relaxation.',
            }),
            M('div', {
              className: 'mottoSubtitle',
              children:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            }),
            ie('div', {
              className: 'welcomeButtons',
              children: [
                M('button', { children: 'Learn More' }),
                M('button', { children: 'Watch Intro Video' }),
              ],
            }),
          ],
        }),
        M('div', {
          className: 'imageSection',
          children: M('img', {
            src: './images/welcomeImage.png',
            className: 'welcomeImage',
            ref: e,
            width: 576 * 1.1,
            height: 360 * 1.1,
          }),
        }),
      ],
    })
  );
};
const oD = () => {
  const e = p.exports.useRef();
  return (
    p.exports.useEffect(() => {
      new IntersectionObserver(
        (n) => {
          n.forEach((r) => {
            r.isIntersecting && r.target.classList.add('fadeIn');
          });
        },
        { threshold: 0.5 }
      ).observe(e.current);
    }, []),
    ie('section', {
      className: 'aboutSection',
      children: [
        M('div', {
          className: 'aboutLeft',
          children: M('img', {
            src: './images/aboutUsImage.png',
            className: 'aboutImage',
            ref: e,
            width: 750,
            height: 450,
          }),
        }),
        ie('div', {
          className: 'aboutRight',
          children: [
            M('div', { className: 'header', children: 'About Us' }),
            ie('div', {
              className: 'body',
              children: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                M('br', {}),
                M('br', {}),
                'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              ],
            }),
            M('div', {
              className: 'button',
              children: M('button', { children: 'Read More' }),
            }),
          ],
        }),
      ],
    })
  );
};
const iD = () => {
  const e = p.exports.useRef();
  return (
    p.exports.useEffect(() => {
      new IntersectionObserver(
        (n) => {
          n.forEach((r) => {
            r.isIntersecting && r.target.classList.add('fadeIn');
          });
        },
        { threshold: 0.5 }
      ).observe(e.current);
    }, []),
    ie('section', {
      className: 'serviceSection',
      children: [
        ie('div', {
          className: 'serviceText',
          children: [
            M('div', { className: 'motto', children: 'Services' }),
            ie('div', {
              className: 'mottoSubtitle',
              children: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                M('br', {}),
                M('br', {}),
                'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              ],
            }),
            M('div', {
              className: 'serviceButtons',
              children: M('button', { children: 'Learn More' }),
            }),
          ],
        }),
        M('div', {
          className: 'imageSection',
          children: M('img', {
            src: './images/servicesImage.png',
            className: 'serviceImage',
            ref: e,
            width: 515,
            height: 515,
          }),
        }),
      ],
    })
  );
};
function aD(e) {
  return ya({
    tag: 'svg',
    attr: { viewBox: '0 0 1024 1024' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z',
        },
      },
    ],
  })(e);
}
function sD(e) {
  return ya({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'g',
        attr: {},
        child: [
          { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' } },
          {
            tag: 'path',
            attr: {
              d: 'M4 16h16V5H4v11zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z',
            },
          },
        ],
      },
    ],
  })(e);
}
function lD(e) {
  return ya({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' } },
      {
        tag: 'path',
        attr: {
          d: 'M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z',
        },
      },
      { tag: 'circle', attr: { cx: '9', cy: '13', r: '1' } },
      { tag: 'circle', attr: { cx: '15', cy: '13', r: '1' } },
      {
        tag: 'path',
        attr: {
          d: 'M18 11.03A6.04 6.04 0 0012.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 004.86-5.89c1.31 2.63 4 4.44 7.12 4.47z',
        },
      },
    ],
  })(e);
}
function uD(e) {
  return ya({
    tag: 'svg',
    attr: { viewBox: '0 0 640 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm125.7 372.1l-44-110-41.1 46.4-2 18.2 27.7 69.2c5 12.5 17 20.1 29.7 20.1 4 0 8-.7 11.9-2.3 16.4-6.6 24.4-25.2 17.8-41.6zm-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9-18.5-8-39-6.7-56.1 3.3-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8 416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2-11.3-33.9c-8.3-25-25.4-46-48.1-59.4-17.2-10-37.6-11.3-56.1-3.3-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9 10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2 17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49 17.6-70.3 6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4 17.6 70.3-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3 1.2.1 2.3.2 3.5.2 16.1 0 30-12.1 31.8-28.5l10.1-92.6 67.2-75.9c13.6-15.5 19-36.7 14.4-56.7zM46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6 16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2-2-18.2-41.1-46.4z',
        },
      },
    ],
  })(e);
}
const cD = () => {
  const e = p.exports.useRef();
  return (
    p.exports.useEffect(() => {
      new IntersectionObserver(
        (n) => {
          n.forEach((r) => {
            r.isIntersecting && r.target.classList.add('fadeIn');
          });
        },
        { threshold: 0.5 }
      ).observe(e.current);
    }, []),
    ie('section', {
      className: 'chooseUsSection',
      children: [
        M('div', { className: 'sectionTitle', children: 'Why Choose Us' }),
        ie('div', {
          className: 'reasonCards',
          ref: e,
          children: [
            ie('div', {
              className: 'card',
              children: [
                M('div', {
                  className: 'cardSymbol',
                  children: M(aD, {
                    size: '100px',
                    color: 'rgb(127, 127, 127)',
                  }),
                }),
                M('div', {
                  className: 'cardTitle',
                  children: 'Management & Marketing',
                }),
                M('div', {
                  className: 'cardDesc',
                  children:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                }),
              ],
            }),
            ie('div', {
              className: 'card',
              children: [
                M('div', {
                  className: 'cardSymbol',
                  children: M(sD, {
                    size: '100px',
                    color: 'rgb(127, 127, 127)',
                  }),
                }),
                M('div', {
                  className: 'cardTitle',
                  children: 'High Quality Service',
                }),
                M('div', {
                  className: 'cardDesc',
                  children:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
                }),
              ],
            }),
            ie('div', {
              className: 'card',
              children: [
                M('div', {
                  className: 'cardSymbol',
                  children: M(uD, {
                    size: '100px',
                    color: 'rgb(127, 127, 127)',
                  }),
                }),
                M('div', {
                  className: 'cardTitle',
                  children: 'A Strong, Growing Community',
                }),
                M('div', {
                  className: 'cardDesc',
                  children:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
                }),
              ],
            }),
            ie('div', {
              className: 'card',
              children: [
                M('div', {
                  className: 'cardSymbol',
                  children: M(lD, {
                    size: '100px',
                    color: 'rgb(127, 127, 127)',
                  }),
                }),
                M('div', {
                  className: 'cardTitle',
                  children: '24/7 Customer Support',
                }),
                M('div', {
                  className: 'cardDesc',
                  children:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
};
const dD = () =>
  ie('section', {
    className: 'reviewsSection',
    children: [
      ie('div', {
        className: 'reviewTextSection',
        children: [
          M('div', { className: 'reviewSectionTitle', children: 'Reviews' }),
          M('div', {
            className: 'reviewSectionSubtitle',
            children:
              'Have a look at what some of our customers are saying about us!',
          }),
        ],
      }),
      ie('div', {
        className: 'allReviews',
        children: [
          ie('div', {
            className: 'review',
            children: [
              M('div', {
                className: 'profilePic',
                children: M('img', { src: './images/profPic1.png' }),
              }),
              ie('div', {
                className: 'reviewText',
                children: [
                  M('div', {
                    className: 'reviewerName',
                    children: 'David Wilson',
                  }),
                  M('div', {
                    className: 'reviewerLocation',
                    children: 'San Francisco, CA',
                  }),
                  M('div', {
                    className: 'reviewerReview',
                    children: M('em', {
                      children:
                        '"I have been a customer of this company for years and have always been extremely satisfied with their products and services. The staff is friendly and helpful, and they always go above and beyond to make sure I have everything I need. Highly recommend!"',
                    }),
                  }),
                ],
              }),
            ],
          }),
          ie('div', {
            className: 'review',
            children: [
              M('div', {
                className: 'profilePic',
                children: M('img', { src: './images/profPic2.png' }),
              }),
              ie('div', {
                className: 'reviewText',
                children: [
                  M('div', {
                    className: 'reviewerName',
                    children: 'Sarah Lee',
                  }),
                  M('div', {
                    className: 'reviewerLocation',
                    children: 'Seattle, WA',
                  }),
                  M('div', {
                    className: 'reviewerReview',
                    children: M('em', {
                      children:
                        '"I have been a customer of this company for years and have always been extremely satisfied with their products and services. The staff is friendly and helpful, and they always go above and beyond to make sure I have everything I need. Highly recommend!"',
                    }),
                  }),
                ],
              }),
            ],
          }),
          ie('div', {
            className: 'review',
            children: [
              M('div', {
                className: 'profilePic',
                children: M('img', { src: './images/profPic3.png' }),
              }),
              ie('div', {
                className: 'reviewText',
                children: [
                  M('div', {
                    className: 'reviewerName',
                    children: 'Frank Jones',
                  }),
                  M('div', {
                    className: 'reviewerLocation',
                    children: 'Houston, TX',
                  }),
                  M('div', {
                    className: 'reviewerReview',
                    children: M('em', {
                      children:
                        '"I have had nothing but positive experiences with this company. They have always been prompt and efficient, and the products I have purchased from them have exceeded my expectations. I will definitely be a repeat customer!"',
                    }),
                  }),
                ],
              }),
            ],
          }),
          ie('div', {
            className: 'review',
            children: [
              M('div', {
                className: 'profilePic',
                children: M('img', { src: './images/profPic4.png' }),
              }),
              ie('div', {
                className: 'reviewText',
                children: [
                  M('div', {
                    className: 'reviewerName',
                    children: 'Samantha Smith',
                  }),
                  M('div', {
                    className: 'reviewerLocation',
                    children: 'Austin, TX',
                  }),
                  M('div', {
                    className: 'reviewerReview',
                    children: M('em', {
                      children:
                        '"I was blown away by the level of service I received from this company. They were extremely knowledgeable and helped me find exactly what I was looking for. I will definitely be using them again in the future."',
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
const fD = () => {
  const e = p.exports.useRef();
  return (
    p.exports.useEffect(() => {
      new IntersectionObserver(
        (n) => {
          n.forEach((r) => {
            r.isIntersecting && r.target.classList.add('fadeIn');
          });
        },
        { threshold: 0.5 }
      ).observe(e.current);
    }, []),
    ie('section', {
      className: 'downloadSection',
      children: [
        M('div', {
          className: 'imageSection',
          children: M('img', {
            src: './images/appsImage.png',
            className: 'downloadImage',
            ref: e,
            width: 576,
            height: 360,
          }),
        }),
        ie('div', {
          className: 'downloadText',
          children: [
            M('div', {
              className: 'downloadTitle',
              children: 'Our Services Are Available Anytime, Anywhere.',
            }),
            M('div', {
              className: 'downloadSubtitle',
              children: 'Download the app today!',
            }),
            ie('div', {
              className: 'downloadButtons',
              children: [
                M('button', {
                  children: M('img', {
                    src: './images/downloadAppAndroid.png',
                    height: 50,
                    width: 147,
                  }),
                }),
                M('button', {
                  children: M('img', {
                    src: './images/downloadAppApple.png',
                    height: 43,
                    width: 148,
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
};
const pD = () =>
  M('footer', {
    className: 'footer',
    children: ie('div', {
      className: 'footerContainer',
      children: [
        ie('div', {
          className: 'footerColumn',
          children: [
            ie('div', {
              className: 'columnTitle',
              children: ['Company', M('hr', { className: 'columnTitleHR' })],
            }),
            ie('div', {
              className: 'columnText',
              children: [
                M('div', {
                  className: 'columnTextItem',
                  children: M('a', { href: '#', children: 'About' }),
                }),
                M('div', {
                  className: 'columnTextItem',
                  children: M('a', { href: '#', children: 'Services' }),
                }),
                M('div', {
                  className: 'columnTextItem',
                  children: M('a', { href: '#', children: 'Community' }),
                }),
                M('div', {
                  className: 'columnTextItem',
                  children: M('a', { href: '#', children: 'Blog' }),
                }),
              ],
            }),
          ],
        }),
        ie('div', {
          className: 'footerColumn',
          children: [
            ie('div', {
              className: 'columnTitle',
              children: ['Resources', M('hr', { className: 'columnTitleHR' })],
            }),
            ie('div', {
              className: 'columnText',
              children: [
                M('div', {
                  className: 'columnTextItem',
                  children: M('a', { href: '#', children: 'Help' }),
                }),
                M('div', {
                  className: 'columnTextItem',
                  children: M('a', { href: '#', children: 'Terms' }),
                }),
                M('div', {
                  className: 'columnTextItem',
                  children: M('a', { href: '#', children: 'Privacy' }),
                }),
              ],
            }),
          ],
        }),
        ie('div', {
          className: 'footerColumn',
          children: [
            ie('div', {
              className: 'columnTitle',
              children: ['Support', M('hr', { className: 'columnTitleHR' })],
            }),
            ie('div', {
              className: 'columnText',
              children: [
                M('div', {
                  className: 'columnTextItem',
                  children: M('a', { href: '#', children: 'Quick Search' }),
                }),
                M('div', {
                  className: 'columnTextItem',
                  children: M('a', {
                    href: '#',
                    children: 'Popular Help Topics',
                  }),
                }),
                M('div', {
                  className: 'columnTextItem',
                  children: M('a', { href: '#', children: 'Product FAQs' }),
                }),
                M('div', {
                  className: 'columnTextItem',
                  children: M('a', { href: '#', children: 'Policies' }),
                }),
              ],
            }),
          ],
        }),
        ie('div', {
          className: 'footerColumn',
          children: [
            ie('div', {
              className: 'columnTitle',
              children: ['Contact', M('hr', { className: 'columnTitleHR' })],
            }),
            ie('div', {
              className: 'columnText',
              children: [
                M('div', {
                  className: 'columnTextItem',
                  children: 'Phone: +94 77 456-7890',
                }),
                ie('div', {
                  className: 'columnTextItem',
                  children: [
                    'Email:',
                    ' ',
                    M('u', {
                      children: M('a', {
                        href: '#',
                        children: 'support.company@gmail.com',
                      }),
                    }),
                  ],
                }),
                ie('div', {
                  className: 'columnTextItem',
                  children: [
                    'Address: 321 Main Street, ',
                    M('br', {}),
                    'Borella, Colombo 10.',
                  ],
                }),
              ],
            }),
          ],
        }),
        ie('div', {
          className: 'footerColumn',
          children: [
            ie('div', {
              className: 'columnTitle',
              children: [
                'Sign Up For Our Newsletter',
                M('hr', { className: 'columnTitleHR' }),
              ],
            }),
            M('div', {
              className: 'columnText',
              children: ie('span', {
                children: [
                  M('input', {
                    type: 'text',
                    placeholder: 'Enter email...',
                    className: 'newsletterEmailInput',
                  }),
                  M('input', {
                    type: 'submit',
                    value: 'Sign Up',
                    className: 'newsletterEmailSubmit',
                  }),
                ],
              }),
            }),
          ],
        }),
        M('div', {
          className: 'disclaimer',
          children: '© SPARK All rights reserved.',
        }),
      ],
    }),
  });
const mD = () =>
    ie('div', {
      className: 'App',
      children: [M(nD, {}), M(r2, {}), M(pD, {})],
    }),
  hD = () =>
    ie('div', {
      children: [
        M(rD, {}),
        M(oD, {}),
        M(iD, {}),
        M(cD, {}),
        M(dD, {}),
        M(fD, {}),
      ],
    }),
  vD = () => {
    const e = p.exports.useRef();
    return (
      p.exports.useEffect(() => {
        new IntersectionObserver(
          (n) => {
            n.forEach((r) => {
              r.isIntersecting && r.target.classList.add('fadeIn');
            });
          },
          { threshold: 0.5 }
        ).observe(e.current);
      }, []),
      M('div', {
        children: ie('section', {
          className: 'aboutSection',
          children: [
            M('div', {
              className: 'aboutLeft',
              children: M('img', {
                src: './images/aboutUsImage.png',
                className: 'aboutImage',
                ref: e,
                width: 750,
                height: 450,
              }),
            }),
            ie('div', {
              className: 'aboutRight',
              children: [
                M('div', { className: 'header', children: 'About Us' }),
                ie('div', {
                  className: 'body',
                  children: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    M('br', {}),
                    M('br', {}),
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    M('br', {}),
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    M('br', {}),
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  ],
                }),
                M('div', {
                  className: 'button',
                  children: M('button', { children: 'Read More' }),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  gD = s2([
    {
      path: '/',
      element: M(mD, {}),
      children: [
        { path: '/', element: M(hD, {}) },
        { path: 'aboutus', element: M(vD, {}) },
      ],
    },
  ]);
function yD() {
  return M('div', { className: 'App', children: M(n2, { router: gD }) });
}
Mf.createRoot(document.getElementById('root')).render(
  M(de.StrictMode, { children: M(yD, {}) })
);
