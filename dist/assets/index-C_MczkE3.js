function LE(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in t)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              t,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
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
function Kg(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Gg = { exports: {} },
  cc = {},
  Wg = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ta = Symbol.for("react.element"),
  DE = Symbol.for("react.portal"),
  UE = Symbol.for("react.fragment"),
  FE = Symbol.for("react.strict_mode"),
  HE = Symbol.for("react.profiler"),
  $E = Symbol.for("react.provider"),
  BE = Symbol.for("react.context"),
  zE = Symbol.for("react.forward_ref"),
  jE = Symbol.for("react.suspense"),
  VE = Symbol.for("react.memo"),
  KE = Symbol.for("react.lazy"),
  Yf = Symbol.iterator;
function GE(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Yf && t[Yf]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var qg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Yg = Object.assign,
  Qg = {};
function $o(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = Qg),
    (this.updater = n || qg);
}
$o.prototype.isReactComponent = {};
$o.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
$o.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Jg() {}
Jg.prototype = $o.prototype;
function Ud(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = Qg),
    (this.updater = n || qg);
}
var Fd = (Ud.prototype = new Jg());
Fd.constructor = Ud;
Yg(Fd, $o.prototype);
Fd.isPureReactComponent = !0;
var Qf = Array.isArray,
  Xg = Object.prototype.hasOwnProperty,
  Hd = { current: null },
  Zg = { key: !0, ref: !0, __self: !0, __source: !0 };
function ev(t, e, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (a = e.ref),
    e.key !== void 0 && (i = "" + e.key),
    e))
      Xg.call(e, r) && !Zg.hasOwnProperty(r) && (o[r] = e[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var c = Array(s), l = 0; l < s; l++) c[l] = arguments[l + 2];
    o.children = c;
  }
  if (t && t.defaultProps)
    for (r in ((s = t.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: ta,
    type: t,
    key: i,
    ref: a,
    props: o,
    _owner: Hd.current,
  };
}
function WE(t, e) {
  return {
    $$typeof: ta,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function $d(t) {
  return typeof t == "object" && t !== null && t.$$typeof === ta;
}
function qE(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var Jf = /\/+/g;
function ul(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? qE("" + t.key)
    : e.toString(36);
}
function Wa(t, e, n, r, o) {
  var i = typeof t;
  (i === "undefined" || i === "boolean") && (t = null);
  var a = !1;
  if (t === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case ta:
          case DE:
            a = !0;
        }
    }
  if (a)
    return (
      (a = t),
      (o = o(a)),
      (t = r === "" ? "." + ul(a, 0) : r),
      Qf(o)
        ? ((n = ""),
          t != null && (n = t.replace(Jf, "$&/") + "/"),
          Wa(o, e, n, "", function (l) {
            return l;
          }))
        : o != null &&
          ($d(o) &&
            (o = WE(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Jf, "$&/") + "/") +
                t
            )),
          e.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Qf(t)))
    for (var s = 0; s < t.length; s++) {
      i = t[s];
      var c = r + ul(i, s);
      a += Wa(i, e, n, c, o);
    }
  else if (((c = GE(t)), typeof c == "function"))
    for (t = c.call(t), s = 0; !(i = t.next()).done; )
      (i = i.value), (c = r + ul(i, s++)), (a += Wa(i, e, n, c, o));
  else if (i === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function ga(t, e, n) {
  if (t == null) return t;
  var r = [],
    o = 0;
  return (
    Wa(t, r, "", "", function (i) {
      return e.call(n, i, o++);
    }),
    r
  );
}
function YE(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var dt = { current: null },
  qa = { transition: null },
  QE = {
    ReactCurrentDispatcher: dt,
    ReactCurrentBatchConfig: qa,
    ReactCurrentOwner: Hd,
  };
Q.Children = {
  map: ga,
  forEach: function (t, e, n) {
    ga(
      t,
      function () {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function (t) {
    var e = 0;
    return (
      ga(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      ga(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!$d(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  },
};
Q.Component = $o;
Q.Fragment = UE;
Q.Profiler = HE;
Q.PureComponent = Ud;
Q.StrictMode = FE;
Q.Suspense = jE;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = QE;
Q.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        "."
    );
  var r = Yg({}, t.props),
    o = t.key,
    i = t.ref,
    a = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((i = e.ref), (a = Hd.current)),
      e.key !== void 0 && (o = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var s = t.type.defaultProps;
    for (c in e)
      Xg.call(e, c) &&
        !Zg.hasOwnProperty(c) &&
        (r[c] = e[c] === void 0 && s !== void 0 ? s[c] : e[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    s = Array(c);
    for (var l = 0; l < c; l++) s[l] = arguments[l + 2];
    r.children = s;
  }
  return { $$typeof: ta, type: t.type, key: o, ref: i, props: r, _owner: a };
};
Q.createContext = function (t) {
  return (
    (t = {
      $$typeof: BE,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: $E, _context: t }),
    (t.Consumer = t)
  );
};
Q.createElement = ev;
Q.createFactory = function (t) {
  var e = ev.bind(null, t);
  return (e.type = t), e;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (t) {
  return { $$typeof: zE, render: t };
};
Q.isValidElement = $d;
Q.lazy = function (t) {
  return { $$typeof: KE, _payload: { _status: -1, _result: t }, _init: YE };
};
Q.memo = function (t, e) {
  return { $$typeof: VE, type: t, compare: e === void 0 ? null : e };
};
Q.startTransition = function (t) {
  var e = qa.transition;
  qa.transition = {};
  try {
    t();
  } finally {
    qa.transition = e;
  }
};
Q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Q.useCallback = function (t, e) {
  return dt.current.useCallback(t, e);
};
Q.useContext = function (t) {
  return dt.current.useContext(t);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (t) {
  return dt.current.useDeferredValue(t);
};
Q.useEffect = function (t, e) {
  return dt.current.useEffect(t, e);
};
Q.useId = function () {
  return dt.current.useId();
};
Q.useImperativeHandle = function (t, e, n) {
  return dt.current.useImperativeHandle(t, e, n);
};
Q.useInsertionEffect = function (t, e) {
  return dt.current.useInsertionEffect(t, e);
};
Q.useLayoutEffect = function (t, e) {
  return dt.current.useLayoutEffect(t, e);
};
Q.useMemo = function (t, e) {
  return dt.current.useMemo(t, e);
};
Q.useReducer = function (t, e, n) {
  return dt.current.useReducer(t, e, n);
};
Q.useRef = function (t) {
  return dt.current.useRef(t);
};
Q.useState = function (t) {
  return dt.current.useState(t);
};
Q.useSyncExternalStore = function (t, e, n) {
  return dt.current.useSyncExternalStore(t, e, n);
};
Q.useTransition = function () {
  return dt.current.useTransition();
};
Q.version = "18.2.0";
Wg.exports = Q;
var S = Wg.exports;
const K = Kg(S),
  uu = LE({ __proto__: null, default: K }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var JE = S,
  XE = Symbol.for("react.element"),
  ZE = Symbol.for("react.fragment"),
  eT = Object.prototype.hasOwnProperty,
  tT = JE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  nT = { key: !0, ref: !0, __self: !0, __source: !0 };
function tv(t, e, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    e.key !== void 0 && (i = "" + e.key),
    e.ref !== void 0 && (a = e.ref);
  for (r in e) eT.call(e, r) && !nT.hasOwnProperty(r) && (o[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) o[r] === void 0 && (o[r] = e[r]);
  return {
    $$typeof: XE,
    type: t,
    key: i,
    ref: a,
    props: o,
    _owner: tT.current,
  };
}
cc.Fragment = ZE;
cc.jsx = tv;
cc.jsxs = tv;
Gg.exports = cc;
var b = Gg.exports;
/*! @azure/msal-common v14.9.0 2024-04-11 */ const T = {
    LIBRARY_NAME: "MSAL.JS",
    SKU: "msal.js.common",
    CACHE_PREFIX: "msal",
    DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
    DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
    DEFAULT_COMMON_TENANT: "common",
    ADFS: "adfs",
    DSTS: "dstsv2",
    AAD_INSTANCE_DISCOVERY_ENDPT:
      "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
    CIAM_AUTH_URL: ".ciamlogin.com",
    AAD_TENANT_DOMAIN_SUFFIX: ".onmicrosoft.com",
    RESOURCE_DELIM: "|",
    NO_ACCOUNT: "NO_ACCOUNT",
    CLAIMS: "claims",
    CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
    OPENID_SCOPE: "openid",
    PROFILE_SCOPE: "profile",
    OFFLINE_ACCESS_SCOPE: "offline_access",
    EMAIL_SCOPE: "email",
    CODE_RESPONSE_TYPE: "code",
    CODE_GRANT_TYPE: "authorization_code",
    RT_GRANT_TYPE: "refresh_token",
    FRAGMENT_RESPONSE_MODE: "fragment",
    S256_CODE_CHALLENGE_METHOD: "S256",
    URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
    AUTHORIZATION_PENDING: "authorization_pending",
    NOT_DEFINED: "not_defined",
    EMPTY_STRING: "",
    NOT_APPLICABLE: "N/A",
    FORWARD_SLASH: "/",
    IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
    IMDS_VERSION: "2020-06-01",
    IMDS_TIMEOUT: 2e3,
    AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
    REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
    KNOWN_PUBLIC_CLOUDS: [
      "login.microsoftonline.com",
      "login.windows.net",
      "login.microsoft.com",
      "sts.windows.net",
    ],
    TOKEN_RESPONSE_TYPE: "token",
    ID_TOKEN_RESPONSE_TYPE: "id_token",
    SHR_NONCE_VALIDITY: 240,
    INVALID_INSTANCE: "invalid_instance",
  },
  va = {
    SUCCESS_RANGE_START: 200,
    SUCCESS: 200,
    SUCCESS_RANGE_END: 299,
    REDIRECT: 302,
    CLIENT_ERROR_RANGE_START: 400,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    REQUEST_TIMEOUT: 408,
    TOO_MANY_REQUESTS: 429,
    CLIENT_ERROR_RANGE_END: 499,
    SERVER_ERROR_RANGE_START: 500,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    SERVER_ERROR_RANGE_END: 599,
  },
  Bo = [T.OPENID_SCOPE, T.PROFILE_SCOPE, T.OFFLINE_ACCESS_SCOPE],
  Xf = [...Bo, T.EMAIL_SCOPE],
  cn = {
    CONTENT_TYPE: "Content-Type",
    RETRY_AFTER: "Retry-After",
    CCS_HEADER: "X-AnchorMailbox",
    WWWAuthenticate: "WWW-Authenticate",
    AuthenticationInfo: "Authentication-Info",
    X_MS_REQUEST_ID: "x-ms-request-id",
    X_MS_HTTP_VERSION: "x-ms-httpver",
  },
  Ve = {
    ID_TOKEN: "idtoken",
    CLIENT_INFO: "client.info",
    ADAL_ID_TOKEN: "adal.idtoken",
    ERROR: "error",
    ERROR_DESC: "error.description",
    ACTIVE_ACCOUNT: "active-account",
    ACTIVE_ACCOUNT_FILTERS: "active-account-filters",
  },
  Qn = {
    COMMON: "common",
    ORGANIZATIONS: "organizations",
    CONSUMERS: "consumers",
  },
  ya = { ACCESS_TOKEN: "access_token", XMS_CC: "xms_cc" },
  We = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
    CREATE: "create",
    NO_SESSION: "no_session",
  },
  Zf = { PLAIN: "plain", S256: "S256" },
  na = { QUERY: "query", FRAGMENT: "fragment" },
  rT = { ...na, FORM_POST: "form_post" },
  nv = {
    IMPLICIT_GRANT: "implicit",
    AUTHORIZATION_CODE_GRANT: "authorization_code",
    CLIENT_CREDENTIALS_GRANT: "client_credentials",
    RESOURCE_OWNER_PASSWORD_GRANT: "password",
    REFRESH_TOKEN_GRANT: "refresh_token",
    DEVICE_CODE_GRANT: "device_code",
    JWT_BEARER: "urn:ietf:params:oauth:grant-type:jwt-bearer",
  },
  Ca = {
    MSSTS_ACCOUNT_TYPE: "MSSTS",
    ADFS_ACCOUNT_TYPE: "ADFS",
    MSAV1_ACCOUNT_TYPE: "MSA",
    GENERIC_ACCOUNT_TYPE: "Generic",
  },
  at = { CACHE_KEY_SEPARATOR: "-", CLIENT_INFO_SEPARATOR: "." },
  W = {
    ID_TOKEN: "IdToken",
    ACCESS_TOKEN: "AccessToken",
    ACCESS_TOKEN_WITH_AUTH_SCHEME: "AccessToken_With_AuthScheme",
    REFRESH_TOKEN: "RefreshToken",
  },
  Bd = "appmetadata",
  oT = "client_info",
  Ci = "1",
  fs = { CACHE_KEY: "authority-metadata", REFRESH_TIME_SECONDS: 3600 * 24 },
  wt = {
    CONFIG: "config",
    CACHE: "cache",
    NETWORK: "network",
    HARDCODED_VALUES: "hardcoded_values",
  },
  Je = {
    SCHEMA_VERSION: 5,
    MAX_CUR_HEADER_BYTES: 80,
    MAX_LAST_HEADER_BYTES: 330,
    MAX_CACHED_ERRORS: 50,
    CACHE_KEY: "server-telemetry",
    CATEGORY_SEPARATOR: "|",
    VALUE_SEPARATOR: ",",
    OVERFLOW_TRUE: "1",
    OVERFLOW_FALSE: "0",
    UNKNOWN_ERROR: "unknown_error",
  },
  le = { BEARER: "Bearer", POP: "pop", SSH: "ssh-cert" },
  Si = {
    DEFAULT_THROTTLE_TIME_SECONDS: 60,
    DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
    THROTTLING_PREFIX: "throttling",
    X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429",
  },
  ep = {
    INVALID_GRANT_ERROR: "invalid_grant",
    CLIENT_MISMATCH_ERROR: "client_mismatch",
  },
  tp = { username: "username", password: "password" },
  Sa = { httpSuccess: 200, httpBadRequest: 400 },
  Kr = {
    FAILED_AUTO_DETECTION: "1",
    INTERNAL_CACHE: "2",
    ENVIRONMENT_VARIABLE: "3",
    IMDS: "4",
  },
  dl = {
    CONFIGURED_MATCHES_DETECTED: "1",
    CONFIGURED_NO_AUTO_DETECTION: "2",
    CONFIGURED_NOT_DETECTED: "3",
    AUTO_DETECTION_REQUESTED_SUCCESSFUL: "4",
    AUTO_DETECTION_REQUESTED_FAILED: "5",
  },
  zn = {
    NOT_APPLICABLE: "0",
    FORCE_REFRESH_OR_CLAIMS: "1",
    NO_CACHED_ACCESS_TOKEN: "2",
    CACHED_ACCESS_TOKEN_EXPIRED: "3",
    PROACTIVELY_REFRESHED: "4",
  },
  iT = { Jwt: "JWT", Jwk: "JWK", Pop: "pop" },
  aT = 300;
/*! @azure/msal-common v14.9.0 2024-04-11 */ const zd = "unexpected_error",
  sT = "post_request_failed";
/*! @azure/msal-common v14.9.0 2024-04-11 */ const np = {
  [zd]: "Unexpected error in authentication.",
  [sT]: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details.",
};
class ke extends Error {
  constructor(e, n, r) {
    const o = n ? `${e}: ${n}` : e;
    super(o),
      Object.setPrototypeOf(this, ke.prototype),
      (this.errorCode = e || T.EMPTY_STRING),
      (this.errorMessage = n || T.EMPTY_STRING),
      (this.subError = r || T.EMPTY_STRING),
      (this.name = "AuthError");
  }
  setCorrelationId(e) {
    this.correlationId = e;
  }
}
function rv(t, e) {
  return new ke(t, e ? `${np[t]} ${e}` : np[t]);
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ const jd =
    "client_info_decoding_error",
  ov = "client_info_empty_error",
  Vd = "token_parsing_error",
  iv = "null_or_empty_token",
  wn = "endpoints_resolution_error",
  av = "network_error",
  sv = "openid_config_error",
  cv = "hash_not_deserialized",
  ko = "invalid_state",
  lv = "state_mismatch",
  ps = "state_not_found",
  uv = "nonce_mismatch",
  Kd = "auth_time_not_found",
  dv = "max_age_transpired",
  cT = "multiple_matching_tokens",
  lT = "multiple_matching_accounts",
  hv = "multiple_matching_appMetadata",
  fv = "request_cannot_be_made",
  pv = "cannot_remove_empty_scope",
  mv = "cannot_append_scopeset",
  du = "empty_input_scopeset",
  uT = "device_code_polling_cancelled",
  dT = "device_code_expired",
  hT = "device_code_unknown_error",
  Gd = "no_account_in_silent_request",
  gv = "invalid_cache_record",
  Wd = "invalid_cache_environment",
  hu = "no_account_found",
  fu = "no_crypto_object",
  pu = "unexpected_credential_type",
  fT = "invalid_assertion",
  pT = "invalid_client_credential",
  An = "token_refresh_required",
  mT = "user_timeout_reached",
  vv = "token_claims_cnf_required_for_signedjwt",
  yv = "authorization_code_missing_from_server_response",
  Cv = "binding_key_not_removed",
  Sv = "end_session_endpoint_not_supported",
  qd = "key_id_missing",
  gT = "no_network_connectivity",
  vT = "user_canceled",
  yT = "missing_tenant_id_error",
  Y = "method_not_implemented",
  CT = "nested_app_auth_bridge_disabled";
/*! @azure/msal-common v14.9.0 2024-04-11 */ const rp = {
  [jd]: "The client info could not be parsed/decoded correctly",
  [ov]: "The client info was empty",
  [Vd]: "Token cannot be parsed",
  [iv]: "The token is null or empty",
  [wn]: "Endpoints cannot be resolved",
  [av]: "Network request failed",
  [sv]: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints.",
  [cv]: "The hash parameters could not be deserialized",
  [ko]: "State was not the expected format",
  [lv]: "State mismatch error",
  [ps]: "State not found",
  [uv]: "Nonce mismatch error",
  [Kd]: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information.",
  [dv]: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication.",
  [cT]: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account.",
  [lT]: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account",
  [hv]: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata",
  [fv]: "Token request cannot be made without authorization code or refresh token.",
  [pv]: "Cannot remove null or empty scope from ScopeSet",
  [mv]: "Cannot append ScopeSet",
  [du]: "Empty input ScopeSet cannot be processed",
  [uT]: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true.",
  [dT]: "Device code is expired.",
  [hT]: "Device code stopped polling for unknown reasons.",
  [Gd]: "Please pass an account object, silent flow is not supported without account information",
  [gv]: "Cache record object was null or undefined.",
  [Wd]: "Invalid environment when attempting to create cache entry",
  [hu]: "No account found in cache for given key.",
  [fu]: "No crypto object detected.",
  [pu]: "Unexpected credential type.",
  [fT]: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515",
  [pT]: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential",
  [An]: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired.",
  [mT]: "User defined timeout for device code polling reached",
  [vv]: "Cannot generate a POP jwt if the token_claims are not populated",
  [yv]: "Server response does not contain an authorization code to proceed",
  [Cv]: "Could not remove the credential's binding key from storage.",
  [Sv]: "The provided authority does not support logout",
  [qd]: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key.",
  [gT]: "No network connectivity. Check your internet connection.",
  [vT]: "User cancelled the flow.",
  [yT]: "A tenant id - not common, organizations, or consumers - must be specified when using the client_credentials flow.",
  [Y]: "This method has not been implemented",
  [CT]: "The nested app auth bridge is disabled",
};
class lc extends ke {
  constructor(e, n) {
    super(e, n ? `${rp[e]}: ${n}` : rp[e]),
      (this.name = "ClientAuthError"),
      Object.setPrototypeOf(this, lc.prototype);
  }
}
function O(t, e) {
  return new lc(t, e);
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ const ms = {
  createNewGuid: () => {
    throw O(Y);
  },
  base64Decode: () => {
    throw O(Y);
  },
  base64Encode: () => {
    throw O(Y);
  },
  async getPublicKeyThumbprint() {
    throw O(Y);
  },
  async removeTokenBindingKey() {
    throw O(Y);
  },
  async clearKeystore() {
    throw O(Y);
  },
  async signJwt() {
    throw O(Y);
  },
  async hashString() {
    throw O(Y);
  },
};
/*! @azure/msal-common v14.9.0 2024-04-11 */ var ce;
(function (t) {
  (t[(t.Error = 0)] = "Error"),
    (t[(t.Warning = 1)] = "Warning"),
    (t[(t.Info = 2)] = "Info"),
    (t[(t.Verbose = 3)] = "Verbose"),
    (t[(t.Trace = 4)] = "Trace");
})(ce || (ce = {}));
class ir {
  constructor(e, n, r) {
    this.level = ce.Info;
    const o = () => {},
      i = e || ir.createDefaultLoggerOptions();
    (this.localCallback = i.loggerCallback || o),
      (this.piiLoggingEnabled = i.piiLoggingEnabled || !1),
      (this.level = typeof i.logLevel == "number" ? i.logLevel : ce.Info),
      (this.correlationId = i.correlationId || T.EMPTY_STRING),
      (this.packageName = n || T.EMPTY_STRING),
      (this.packageVersion = r || T.EMPTY_STRING);
  }
  static createDefaultLoggerOptions() {
    return {
      loggerCallback: () => {},
      piiLoggingEnabled: !1,
      logLevel: ce.Info,
    };
  }
  clone(e, n, r) {
    return new ir(
      {
        loggerCallback: this.localCallback,
        piiLoggingEnabled: this.piiLoggingEnabled,
        logLevel: this.level,
        correlationId: r || this.correlationId,
      },
      e,
      n
    );
  }
  logMessage(e, n) {
    if (n.logLevel > this.level || (!this.piiLoggingEnabled && n.containsPii))
      return;
    const i = `${`[${new Date().toUTCString()}] : [${
      n.correlationId || this.correlationId || ""
    }]`} : ${this.packageName}@${this.packageVersion} : ${
      ce[n.logLevel]
    } - ${e}`;
    this.executeCallback(n.logLevel, i, n.containsPii || !1);
  }
  executeCallback(e, n, r) {
    this.localCallback && this.localCallback(e, n, r);
  }
  error(e, n) {
    this.logMessage(e, {
      logLevel: ce.Error,
      containsPii: !1,
      correlationId: n || T.EMPTY_STRING,
    });
  }
  errorPii(e, n) {
    this.logMessage(e, {
      logLevel: ce.Error,
      containsPii: !0,
      correlationId: n || T.EMPTY_STRING,
    });
  }
  warning(e, n) {
    this.logMessage(e, {
      logLevel: ce.Warning,
      containsPii: !1,
      correlationId: n || T.EMPTY_STRING,
    });
  }
  warningPii(e, n) {
    this.logMessage(e, {
      logLevel: ce.Warning,
      containsPii: !0,
      correlationId: n || T.EMPTY_STRING,
    });
  }
  info(e, n) {
    this.logMessage(e, {
      logLevel: ce.Info,
      containsPii: !1,
      correlationId: n || T.EMPTY_STRING,
    });
  }
  infoPii(e, n) {
    this.logMessage(e, {
      logLevel: ce.Info,
      containsPii: !0,
      correlationId: n || T.EMPTY_STRING,
    });
  }
  verbose(e, n) {
    this.logMessage(e, {
      logLevel: ce.Verbose,
      containsPii: !1,
      correlationId: n || T.EMPTY_STRING,
    });
  }
  verbosePii(e, n) {
    this.logMessage(e, {
      logLevel: ce.Verbose,
      containsPii: !0,
      correlationId: n || T.EMPTY_STRING,
    });
  }
  trace(e, n) {
    this.logMessage(e, {
      logLevel: ce.Trace,
      containsPii: !1,
      correlationId: n || T.EMPTY_STRING,
    });
  }
  tracePii(e, n) {
    this.logMessage(e, {
      logLevel: ce.Trace,
      containsPii: !0,
      correlationId: n || T.EMPTY_STRING,
    });
  }
  isPiiLoggingEnabled() {
    return this.piiLoggingEnabled || !1;
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ const wv = "@azure/msal-common",
  Yd = "14.9.0";
/*! @azure/msal-common v14.9.0 2024-04-11 */ const Qd = {
  None: "none",
  AzurePublic: "https://login.microsoftonline.com",
  AzurePpe: "https://login.windows-ppe.net",
  AzureChina: "https://login.chinacloudapi.cn",
  AzureGermany: "https://login.microsoftonline.de",
  AzureUsGovernment: "https://login.microsoftonline.us",
};
/*! @azure/msal-common v14.9.0 2024-04-11 */ function Dr(t, e) {
  const n = ST(t);
  try {
    const r = e(n);
    return JSON.parse(r);
  } catch {
    throw O(Vd);
  }
}
function ST(t) {
  if (!t) throw O(iv);
  const n = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(t);
  if (!n || n.length < 4) throw O(Vd);
  return n[2];
}
function Ev(t, e) {
  if (e === 0 || Date.now() - 3e5 > t + e) throw O(dv);
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ function gn() {
  return Math.round(new Date().getTime() / 1e3);
}
function mu(t, e) {
  const n = Number(t) || 0;
  return gn() + e > n;
}
function wT(t) {
  return Number(t) > gn();
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ function eo(t) {
  return [ET(t), TT(t), IT(t), AT(t), kT(t)]
    .join(at.CACHE_KEY_SEPARATOR)
    .toLowerCase();
}
function uc(t, e, n, r, o) {
  return {
    credentialType: W.ID_TOKEN,
    homeAccountId: t,
    environment: e,
    clientId: r,
    secret: n,
    realm: o,
  };
}
function dc(t, e, n, r, o, i, a, s, c, l, u, d, h, v, g) {
  var C, f;
  const m = {
    homeAccountId: t,
    credentialType: W.ACCESS_TOKEN,
    secret: n,
    cachedAt: gn().toString(),
    expiresOn: a.toString(),
    extendedExpiresOn: s.toString(),
    environment: e,
    clientId: r,
    realm: o,
    target: i,
    tokenType: u || le.BEARER,
  };
  if (
    (d && (m.userAssertionHash = d),
    l && (m.refreshOn = l.toString()),
    v && ((m.requestedClaims = v), (m.requestedClaimsHash = g)),
    ((C = m.tokenType) == null ? void 0 : C.toLowerCase()) !==
      le.BEARER.toLowerCase())
  )
    switch (
      ((m.credentialType = W.ACCESS_TOKEN_WITH_AUTH_SCHEME), m.tokenType)
    ) {
      case le.POP:
        const p = Dr(n, c);
        if (!((f = p == null ? void 0 : p.cnf) != null && f.kid)) throw O(vv);
        m.keyId = p.cnf.kid;
        break;
      case le.SSH:
        m.keyId = h;
    }
  return m;
}
function Tv(t, e, n, r, o, i, a) {
  const s = {
    credentialType: W.REFRESH_TOKEN,
    homeAccountId: t,
    environment: e,
    clientId: r,
    secret: n,
  };
  return (
    i && (s.userAssertionHash = i),
    o && (s.familyId = o),
    a && (s.expiresOn = a.toString()),
    s
  );
}
function Jd(t) {
  return (
    t.hasOwnProperty("homeAccountId") &&
    t.hasOwnProperty("environment") &&
    t.hasOwnProperty("credentialType") &&
    t.hasOwnProperty("clientId") &&
    t.hasOwnProperty("secret")
  );
}
function op(t) {
  return t
    ? Jd(t) &&
        t.hasOwnProperty("realm") &&
        t.hasOwnProperty("target") &&
        (t.credentialType === W.ACCESS_TOKEN ||
          t.credentialType === W.ACCESS_TOKEN_WITH_AUTH_SCHEME)
    : !1;
}
function ip(t) {
  return t
    ? Jd(t) && t.hasOwnProperty("realm") && t.credentialType === W.ID_TOKEN
    : !1;
}
function ap(t) {
  return t ? Jd(t) && t.credentialType === W.REFRESH_TOKEN : !1;
}
function ET(t) {
  return [t.homeAccountId, t.environment]
    .join(at.CACHE_KEY_SEPARATOR)
    .toLowerCase();
}
function TT(t) {
  const e = (t.credentialType === W.REFRESH_TOKEN && t.familyId) || t.clientId;
  return [t.credentialType, e, t.realm || ""]
    .join(at.CACHE_KEY_SEPARATOR)
    .toLowerCase();
}
function IT(t) {
  return (t.target || "").toLowerCase();
}
function AT(t) {
  return (t.requestedClaimsHash || "").toLowerCase();
}
function kT(t) {
  return t.tokenType && t.tokenType.toLowerCase() !== le.BEARER.toLowerCase()
    ? t.tokenType.toLowerCase()
    : "";
}
function _T(t, e) {
  const n = t.indexOf(Je.CACHE_KEY) === 0;
  let r = !0;
  return (
    e &&
      (r =
        e.hasOwnProperty("failedRequests") &&
        e.hasOwnProperty("errors") &&
        e.hasOwnProperty("cacheHits")),
    n && r
  );
}
function RT(t, e) {
  let n = !1;
  t && (n = t.indexOf(Si.THROTTLING_PREFIX) === 0);
  let r = !0;
  return e && (r = e.hasOwnProperty("throttleTime")), n && r;
}
function bT({ environment: t, clientId: e }) {
  return [Bd, t, e].join(at.CACHE_KEY_SEPARATOR).toLowerCase();
}
function OT(t, e) {
  return e
    ? t.indexOf(Bd) === 0 &&
        e.hasOwnProperty("clientId") &&
        e.hasOwnProperty("environment")
    : !1;
}
function PT(t, e) {
  return e
    ? t.indexOf(fs.CACHE_KEY) === 0 &&
        e.hasOwnProperty("aliases") &&
        e.hasOwnProperty("preferred_cache") &&
        e.hasOwnProperty("preferred_network") &&
        e.hasOwnProperty("canonical_authority") &&
        e.hasOwnProperty("authorization_endpoint") &&
        e.hasOwnProperty("token_endpoint") &&
        e.hasOwnProperty("issuer") &&
        e.hasOwnProperty("aliasesFromNetwork") &&
        e.hasOwnProperty("endpointsFromNetwork") &&
        e.hasOwnProperty("expiresAt") &&
        e.hasOwnProperty("jwks_uri")
    : !1;
}
function sp() {
  return gn() + fs.REFRESH_TIME_SECONDS;
}
function wa(t, e, n) {
  (t.authorization_endpoint = e.authorization_endpoint),
    (t.token_endpoint = e.token_endpoint),
    (t.end_session_endpoint = e.end_session_endpoint),
    (t.issuer = e.issuer),
    (t.endpointsFromNetwork = n),
    (t.jwks_uri = e.jwks_uri);
}
function hl(t, e, n) {
  (t.aliases = e.aliases),
    (t.preferred_cache = e.preferred_cache),
    (t.preferred_network = e.preferred_network),
    (t.aliasesFromNetwork = n);
}
function cp(t) {
  return t.expiresAt <= gn();
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ const Iv = "redirect_uri_empty",
  NT = "claims_request_parsing_error",
  Av = "authority_uri_insecure",
  fi = "url_parse_error",
  kv = "empty_url_error",
  _v = "empty_input_scopes_error",
  Rv = "invalid_prompt_value",
  Xd = "invalid_claims",
  bv = "token_request_empty",
  Ov = "logout_request_empty",
  Pv = "invalid_code_challenge_method",
  Zd = "pkce_params_missing",
  eh = "invalid_cloud_discovery_metadata",
  Nv = "invalid_authority_metadata",
  Mv = "untrusted_authority",
  hc = "missing_ssh_jwk",
  xv = "missing_ssh_kid",
  MT = "missing_nonce_authentication_header",
  xT = "invalid_authentication_header",
  Lv = "cannot_set_OIDCOptions",
  Dv = "cannot_allow_native_broker",
  Uv = "authority_mismatch";
/*! @azure/msal-common v14.9.0 2024-04-11 */ const LT = {
  [Iv]: "A redirect URI is required for all calls, and none has been set.",
  [NT]: "Could not parse the given claims request object.",
  [Av]: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
  [fi]: "URL could not be parsed into appropriate segments.",
  [kv]: "URL was empty or null.",
  [_v]: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token.",
  [Rv]: "Please see here for valid configuration options: https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_common.html#commonauthorizationurlrequest",
  [Xd]: "Given claims parameter must be a stringified JSON object.",
  [bv]: "Token request was empty and not found in cache.",
  [Ov]: "The logout request was null or undefined.",
  [Pv]: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".',
  [Zd]: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request",
  [eh]: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields",
  [Nv]: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields.",
  [Mv]: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter.",
  [hc]: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme.",
  [xv]: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme.",
  [MT]: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce.",
  [xT]: "Invalid authentication header provided",
  [Lv]: "Cannot set OIDCOptions parameter. Please change the protocol mode to OIDC or use a non-Microsoft authority.",
  [Dv]: "Cannot set allowNativeBroker parameter to true when not in AAD protocol mode.",
  [Uv]: "Authority mismatch error. Authority provided in login request or PublicClientApplication config does not match the environment of the provided account. Please use a matching account or make an interactive request to login to this authority.",
};
class th extends ke {
  constructor(e) {
    super(e, LT[e]),
      (this.name = "ClientConfigurationError"),
      Object.setPrototypeOf(this, th.prototype);
  }
}
function de(t) {
  return new th(t);
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ class Yt {
  static isEmptyObj(e) {
    if (e)
      try {
        const n = JSON.parse(e);
        return Object.keys(n).length === 0;
      } catch {}
    return !0;
  }
  static startsWith(e, n) {
    return e.indexOf(n) === 0;
  }
  static endsWith(e, n) {
    return e.length >= n.length && e.lastIndexOf(n) === e.length - n.length;
  }
  static queryStringToObject(e) {
    const n = {},
      r = e.split("&"),
      o = (i) => decodeURIComponent(i.replace(/\+/g, " "));
    return (
      r.forEach((i) => {
        if (i.trim()) {
          const [a, s] = i.split(/=(.+)/g, 2);
          a && s && (n[o(a)] = o(s));
        }
      }),
      n
    );
  }
  static trimArrayEntries(e) {
    return e.map((n) => n.trim());
  }
  static removeEmptyStringsFromArray(e) {
    return e.filter((n) => !!n);
  }
  static jsonParseHelper(e) {
    try {
      return JSON.parse(e);
    } catch {
      return null;
    }
  }
  static matchPattern(e, n) {
    return new RegExp(
      e.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?")
    ).test(n);
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ class Ne {
  constructor(e) {
    const n = e ? Yt.trimArrayEntries([...e]) : [],
      r = n ? Yt.removeEmptyStringsFromArray(n) : [];
    this.validateInputScopes(r),
      (this.scopes = new Set()),
      r.forEach((o) => this.scopes.add(o));
  }
  static fromString(e) {
    const r = (e || T.EMPTY_STRING).split(" ");
    return new Ne(r);
  }
  static createSearchScopes(e) {
    const n = new Ne(e);
    return (
      n.containsOnlyOIDCScopes()
        ? n.removeScope(T.OFFLINE_ACCESS_SCOPE)
        : n.removeOIDCScopes(),
      n
    );
  }
  validateInputScopes(e) {
    if (!e || e.length < 1) throw de(_v);
  }
  containsScope(e) {
    const n = this.printScopesLowerCase().split(" "),
      r = new Ne(n);
    return e ? r.scopes.has(e.toLowerCase()) : !1;
  }
  containsScopeSet(e) {
    return !e || e.scopes.size <= 0
      ? !1
      : this.scopes.size >= e.scopes.size &&
          e.asArray().every((n) => this.containsScope(n));
  }
  containsOnlyOIDCScopes() {
    let e = 0;
    return (
      Xf.forEach((n) => {
        this.containsScope(n) && (e += 1);
      }),
      this.scopes.size === e
    );
  }
  appendScope(e) {
    e && this.scopes.add(e.trim());
  }
  appendScopes(e) {
    try {
      e.forEach((n) => this.appendScope(n));
    } catch {
      throw O(mv);
    }
  }
  removeScope(e) {
    if (!e) throw O(pv);
    this.scopes.delete(e.trim());
  }
  removeOIDCScopes() {
    Xf.forEach((e) => {
      this.scopes.delete(e);
    });
  }
  unionScopeSets(e) {
    if (!e) throw O(du);
    const n = new Set();
    return (
      e.scopes.forEach((r) => n.add(r.toLowerCase())),
      this.scopes.forEach((r) => n.add(r.toLowerCase())),
      n
    );
  }
  intersectingScopeSets(e) {
    if (!e) throw O(du);
    e.containsOnlyOIDCScopes() || e.removeOIDCScopes();
    const n = this.unionScopeSets(e),
      r = e.getScopeCount(),
      o = this.getScopeCount();
    return n.size < o + r;
  }
  getScopeCount() {
    return this.scopes.size;
  }
  asArray() {
    const e = [];
    return this.scopes.forEach((n) => e.push(n)), e;
  }
  printScopes() {
    return this.scopes ? this.asArray().join(" ") : T.EMPTY_STRING;
  }
  printScopesLowerCase() {
    return this.printScopes().toLowerCase();
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ function gs(t, e) {
  if (!t) throw O(ov);
  try {
    const n = e(t);
    return JSON.parse(n);
  } catch {
    throw O(jd);
  }
}
function to(t) {
  if (!t) throw O(jd);
  const e = t.split(at.CLIENT_INFO_SEPARATOR, 2);
  return { uid: e[0], utid: e.length < 2 ? T.EMPTY_STRING : e[1] };
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ function gu(t, e) {
  return !!t && !!e && t === e.split(".")[1];
}
function nh(t, e) {
  const { oid: n, sub: r, tid: o, name: i, tfp: a, acr: s } = e,
    c = o || a || s || "";
  return {
    tenantId: c,
    localAccountId: n || r || "",
    name: i,
    isHomeTenant: gu(c, t),
  };
}
function rh(t, e, n, r) {
  let o = t;
  if (e) {
    const { isHomeTenant: i, ...a } = e;
    o = { ...t, ...a };
  }
  if (n) {
    const { isHomeTenant: i, ...a } = nh(t.homeAccountId, n);
    return (o = { ...o, ...a, idTokenClaims: n, idToken: r }), o;
  }
  return o;
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ const Vt = {
  Default: 0,
  Adfs: 1,
  Dsts: 2,
  Ciam: 3,
};
/*! @azure/msal-common v14.9.0 2024-04-11 */ function Fv(t) {
  return (t && (t.tid || t.tfp || t.acr)) || null;
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ const bn = {
  AAD: "AAD",
  OIDC: "OIDC",
};
/*! @azure/msal-common v14.9.0 2024-04-11 */ class $e {
  generateAccountId() {
    return [this.homeAccountId, this.environment]
      .join(at.CACHE_KEY_SEPARATOR)
      .toLowerCase();
  }
  generateAccountKey() {
    return $e.generateAccountCacheKey({
      homeAccountId: this.homeAccountId,
      environment: this.environment,
      tenantId: this.realm,
      username: this.username,
      localAccountId: this.localAccountId,
    });
  }
  getAccountInfo() {
    return {
      homeAccountId: this.homeAccountId,
      environment: this.environment,
      tenantId: this.realm,
      username: this.username,
      localAccountId: this.localAccountId,
      name: this.name,
      nativeAccountId: this.nativeAccountId,
      authorityType: this.authorityType,
      tenantProfiles: new Map(
        (this.tenantProfiles || []).map((e) => [e.tenantId, e])
      ),
    };
  }
  isSingleTenant() {
    return !this.tenantProfiles;
  }
  static generateAccountCacheKey(e) {
    const n = e.homeAccountId.split(".")[1];
    return [e.homeAccountId, e.environment || "", n || e.tenantId || ""]
      .join(at.CACHE_KEY_SEPARATOR)
      .toLowerCase();
  }
  static createAccount(e, n, r) {
    const o = new $e();
    n.authorityType === Vt.Adfs
      ? (o.authorityType = Ca.ADFS_ACCOUNT_TYPE)
      : n.protocolMode === bn.AAD
      ? (o.authorityType = Ca.MSSTS_ACCOUNT_TYPE)
      : (o.authorityType = Ca.GENERIC_ACCOUNT_TYPE);
    let i;
    e.clientInfo && r && (i = gs(e.clientInfo, r)),
      (o.clientInfo = e.clientInfo),
      (o.homeAccountId = e.homeAccountId),
      (o.nativeAccountId = e.nativeAccountId);
    const a = e.environment || (n && n.getPreferredCache());
    if (!a) throw O(Wd);
    (o.environment = a),
      (o.realm = (i == null ? void 0 : i.utid) || Fv(e.idTokenClaims) || ""),
      (o.localAccountId =
        (i == null ? void 0 : i.uid) ||
        e.idTokenClaims.oid ||
        e.idTokenClaims.sub ||
        "");
    const s = e.idTokenClaims.preferred_username || e.idTokenClaims.upn,
      c = e.idTokenClaims.emails ? e.idTokenClaims.emails[0] : null;
    if (
      ((o.username = s || c || ""),
      (o.name = e.idTokenClaims.name),
      (o.cloudGraphHostName = e.cloudGraphHostName),
      (o.msGraphHost = e.msGraphHost),
      e.tenantProfiles)
    )
      o.tenantProfiles = e.tenantProfiles;
    else {
      const l = [];
      if (e.idTokenClaims) {
        const u = nh(e.homeAccountId, e.idTokenClaims);
        l.push(u);
      }
      o.tenantProfiles = l;
    }
    return o;
  }
  static createFromAccountInfo(e, n, r) {
    var i;
    const o = new $e();
    return (
      (o.authorityType = e.authorityType || Ca.GENERIC_ACCOUNT_TYPE),
      (o.homeAccountId = e.homeAccountId),
      (o.localAccountId = e.localAccountId),
      (o.nativeAccountId = e.nativeAccountId),
      (o.realm = e.tenantId),
      (o.environment = e.environment),
      (o.username = e.username),
      (o.name = e.name),
      (o.cloudGraphHostName = n),
      (o.msGraphHost = r),
      (o.tenantProfiles = Array.from(
        ((i = e.tenantProfiles) == null ? void 0 : i.values()) || []
      )),
      o
    );
  }
  static generateHomeAccountId(e, n, r, o, i) {
    if (!(n === Vt.Adfs || n === Vt.Dsts)) {
      if (e)
        try {
          const a = gs(e, o.base64Decode);
          if (a.uid && a.utid) return `${a.uid}.${a.utid}`;
        } catch {}
      r.warning("No client info in response");
    }
    return (i == null ? void 0 : i.sub) || "";
  }
  static isAccountEntity(e) {
    return e
      ? e.hasOwnProperty("homeAccountId") &&
          e.hasOwnProperty("environment") &&
          e.hasOwnProperty("realm") &&
          e.hasOwnProperty("localAccountId") &&
          e.hasOwnProperty("username") &&
          e.hasOwnProperty("authorityType")
      : !1;
  }
  static accountInfoIsEqual(e, n, r) {
    if (!e || !n) return !1;
    let o = !0;
    if (r) {
      const i = e.idTokenClaims || {},
        a = n.idTokenClaims || {};
      o = i.iat === a.iat && i.nonce === a.nonce;
    }
    return (
      e.homeAccountId === n.homeAccountId &&
      e.localAccountId === n.localAccountId &&
      e.username === n.username &&
      e.tenantId === n.tenantId &&
      e.environment === n.environment &&
      e.nativeAccountId === n.nativeAccountId &&
      o
    );
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ function Hv(t) {
  return t.startsWith("#/")
    ? t.substring(2)
    : t.startsWith("#") || t.startsWith("?")
    ? t.substring(1)
    : t;
}
function vs(t) {
  if (!t || t.indexOf("=") < 0) return null;
  try {
    const e = Hv(t),
      n = Object.fromEntries(new URLSearchParams(e));
    if (n.code || n.error || n.error_description || n.state) return n;
  } catch {
    throw O(cv);
  }
  return null;
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ class X {
  get urlString() {
    return this._urlString;
  }
  constructor(e) {
    if (((this._urlString = e), !this._urlString)) throw de(kv);
    e.includes("#") || (this._urlString = X.canonicalizeUri(e));
  }
  static canonicalizeUri(e) {
    if (e) {
      let n = e.toLowerCase();
      return (
        Yt.endsWith(n, "?")
          ? (n = n.slice(0, -1))
          : Yt.endsWith(n, "?/") && (n = n.slice(0, -2)),
        Yt.endsWith(n, "/") || (n += "/"),
        n
      );
    }
    return e;
  }
  validateAsUri() {
    let e;
    try {
      e = this.getUrlComponents();
    } catch {
      throw de(fi);
    }
    if (!e.HostNameAndPort || !e.PathSegments) throw de(fi);
    if (!e.Protocol || e.Protocol.toLowerCase() !== "https:") throw de(Av);
  }
  static appendQueryString(e, n) {
    return n ? (e.indexOf("?") < 0 ? `${e}?${n}` : `${e}&${n}`) : e;
  }
  static removeHashFromUrl(e) {
    return X.canonicalizeUri(e.split("#")[0]);
  }
  replaceTenantPath(e) {
    const n = this.getUrlComponents(),
      r = n.PathSegments;
    return (
      e &&
        r.length !== 0 &&
        (r[0] === Qn.COMMON || r[0] === Qn.ORGANIZATIONS) &&
        (r[0] = e),
      X.constructAuthorityUriFromObject(n)
    );
  }
  getUrlComponents() {
    const e = RegExp(
        "^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"
      ),
      n = this.urlString.match(e);
    if (!n) throw de(fi);
    const r = {
      Protocol: n[1],
      HostNameAndPort: n[4],
      AbsolutePath: n[5],
      QueryString: n[7],
    };
    let o = r.AbsolutePath.split("/");
    return (
      (o = o.filter((i) => i && i.length > 0)),
      (r.PathSegments = o),
      r.QueryString &&
        r.QueryString.endsWith("/") &&
        (r.QueryString = r.QueryString.substring(0, r.QueryString.length - 1)),
      r
    );
  }
  static getDomainFromUrl(e) {
    const n = RegExp("^([^:/?#]+://)?([^/?#]*)"),
      r = e.match(n);
    if (!r) throw de(fi);
    return r[2];
  }
  static getAbsoluteUrl(e, n) {
    if (e[0] === T.FORWARD_SLASH) {
      const o = new X(n).getUrlComponents();
      return o.Protocol + "//" + o.HostNameAndPort + e;
    }
    return e;
  }
  static constructAuthorityUriFromObject(e) {
    return new X(
      e.Protocol + "//" + e.HostNameAndPort + "/" + e.PathSegments.join("/")
    );
  }
  static hashContainsKnownProperties(e) {
    return !!vs(e);
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ const $v = {
    endpointMetadata: {
      "login.microsoftonline.com": {
        token_endpoint:
          "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/token",
        jwks_uri:
          "https://login.microsoftonline.com/{tenantid}/discovery/v2.0/keys",
        issuer: "https://login.microsoftonline.com/{tenantid}/v2.0",
        authorization_endpoint:
          "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/authorize",
        end_session_endpoint:
          "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/logout",
      },
      "login.chinacloudapi.cn": {
        token_endpoint:
          "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/token",
        jwks_uri:
          "https://login.chinacloudapi.cn/{tenantid}/discovery/v2.0/keys",
        issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0",
        authorization_endpoint:
          "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/authorize",
        end_session_endpoint:
          "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/logout",
      },
      "login.microsoftonline.us": {
        token_endpoint:
          "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/token",
        jwks_uri:
          "https://login.microsoftonline.us/{tenantid}/discovery/v2.0/keys",
        issuer: "https://login.microsoftonline.us/{tenantid}/v2.0",
        authorization_endpoint:
          "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/authorize",
        end_session_endpoint:
          "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/logout",
      },
    },
    instanceDiscoveryMetadata: {
      tenant_discovery_endpoint:
        "https://{canonicalAuthority}/v2.0/.well-known/openid-configuration",
      metadata: [
        {
          preferred_network: "login.microsoftonline.com",
          preferred_cache: "login.windows.net",
          aliases: [
            "login.microsoftonline.com",
            "login.windows.net",
            "login.microsoft.com",
            "sts.windows.net",
          ],
        },
        {
          preferred_network: "login.partner.microsoftonline.cn",
          preferred_cache: "login.partner.microsoftonline.cn",
          aliases: [
            "login.partner.microsoftonline.cn",
            "login.chinacloudapi.cn",
          ],
        },
        {
          preferred_network: "login.microsoftonline.de",
          preferred_cache: "login.microsoftonline.de",
          aliases: ["login.microsoftonline.de"],
        },
        {
          preferred_network: "login.microsoftonline.us",
          preferred_cache: "login.microsoftonline.us",
          aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"],
        },
        {
          preferred_network: "login-us.microsoftonline.com",
          preferred_cache: "login-us.microsoftonline.com",
          aliases: ["login-us.microsoftonline.com"],
        },
      ],
    },
  },
  lp = $v.endpointMetadata,
  oh = $v.instanceDiscoveryMetadata,
  Bv = new Set();
oh.metadata.forEach((t) => {
  t.aliases.forEach((e) => {
    Bv.add(e);
  });
});
function DT(t, e) {
  var o;
  let n;
  const r = t.canonicalAuthority;
  if (r) {
    const i = new X(r).getUrlComponents().HostNameAndPort;
    n =
      up(
        i,
        (o = t.cloudDiscoveryMetadata) == null ? void 0 : o.metadata,
        wt.CONFIG,
        e
      ) ||
      up(i, oh.metadata, wt.HARDCODED_VALUES, e) ||
      t.knownAuthorities;
  }
  return n || [];
}
function up(t, e, n, r) {
  if (
    (r == null || r.trace(`getAliasesFromMetadata called with source: ${n}`),
    t && e)
  ) {
    const o = ys(e, t);
    if (o)
      return (
        r == null ||
          r.trace(
            `getAliasesFromMetadata: found cloud discovery metadata in ${n}, returning aliases`
          ),
        o.aliases
      );
    r == null ||
      r.trace(
        `getAliasesFromMetadata: did not find cloud discovery metadata in ${n}`
      );
  }
  return null;
}
function UT(t) {
  return ys(oh.metadata, t);
}
function ys(t, e) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (r.aliases.includes(e)) return r;
  }
  return null;
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ const zv = "cache_quota_exceeded",
  ih = "cache_error_unknown";
/*! @azure/msal-common v14.9.0 2024-04-11 */ const fl = {
  [zv]: "Exceeded cache storage capacity.",
  [ih]: "Unexpected error occurred when using cache storage.",
};
class go extends Error {
  constructor(e, n) {
    const r = n || (fl[e] ? fl[e] : fl[ih]);
    super(`${e}: ${r}`),
      Object.setPrototypeOf(this, go.prototype),
      (this.name = "CacheError"),
      (this.errorCode = e),
      (this.errorMessage = r);
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ class _o {
  constructor(e, n, r, o) {
    (this.clientId = e),
      (this.cryptoImpl = n),
      (this.commonLogger = r.clone(wv, Yd)),
      (this.staticAuthorityOptions = o);
  }
  getAllAccounts(e) {
    return this.buildTenantProfiles(this.getAccountsFilteredBy(e || {}), e);
  }
  getAccountInfoFilteredBy(e) {
    const n = this.getAllAccounts(e);
    return n.length > 1
      ? n.sort((o) => (o.idTokenClaims ? -1 : 1))[0]
      : n.length === 1
      ? n[0]
      : null;
  }
  getBaseAccountInfo(e) {
    const n = this.getAccountsFilteredBy(e);
    return n.length > 0 ? n[0].getAccountInfo() : null;
  }
  buildTenantProfiles(e, n) {
    return e.flatMap((r) => this.getAccountInfoForTenantProfiles(r, n));
  }
  getAccountInfoForTenantProfiles(e, n) {
    return this.getTenantProfilesFromAccountEntity(
      e,
      n == null ? void 0 : n.tenantId,
      n
    );
  }
  getTenantedAccountInfoByFilter(e, n, r, o) {
    let i = null,
      a;
    if (o && !this.tenantProfileMatchesFilter(r, o)) return null;
    const s = this.getIdToken(e, n, r.tenantId);
    return s &&
      ((a = Dr(s.secret, this.cryptoImpl.base64Decode)),
      !this.idTokenClaimsMatchTenantProfileFilter(a, o))
      ? null
      : ((i = rh(e, r, a, s == null ? void 0 : s.secret)), i);
  }
  getTenantProfilesFromAccountEntity(e, n, r) {
    const o = e.getAccountInfo();
    let i = o.tenantProfiles || new Map();
    const a = this.getTokenKeys();
    if (n) {
      const c = i.get(n);
      if (c) i = new Map([[n, c]]);
      else return [];
    }
    const s = [];
    return (
      i.forEach((c) => {
        const l = this.getTenantedAccountInfoByFilter(o, a, c, r);
        l && s.push(l);
      }),
      s
    );
  }
  tenantProfileMatchesFilter(e, n) {
    return !(
      (n.localAccountId &&
        !this.matchLocalAccountIdFromTenantProfile(e, n.localAccountId)) ||
      (n.name && e.name !== n.name) ||
      (n.isHomeTenant !== void 0 && e.isHomeTenant !== n.isHomeTenant)
    );
  }
  idTokenClaimsMatchTenantProfileFilter(e, n) {
    return !(
      n &&
      ((n.localAccountId &&
        !this.matchLocalAccountIdFromTokenClaims(e, n.localAccountId)) ||
        (n.loginHint && !this.matchLoginHintFromTokenClaims(e, n.loginHint)) ||
        (n.username && !this.matchUsername(e.preferred_username, n.username)) ||
        (n.name && !this.matchName(e, n.name)) ||
        (n.sid && !this.matchSid(e, n.sid)))
    );
  }
  async saveCacheRecord(e, n, r) {
    var o, i, a, s;
    if (!e) throw O(gv);
    try {
      e.account && this.setAccount(e.account),
        e.idToken &&
          (n == null ? void 0 : n.idToken) !== !1 &&
          this.setIdTokenCredential(e.idToken),
        e.accessToken &&
          (n == null ? void 0 : n.accessToken) !== !1 &&
          (await this.saveAccessToken(e.accessToken)),
        e.refreshToken &&
          (n == null ? void 0 : n.refreshToken) !== !1 &&
          this.setRefreshTokenCredential(e.refreshToken),
        e.appMetadata && this.setAppMetadata(e.appMetadata);
    } catch (c) {
      throw (
        ((o = this.commonLogger) == null ||
          o.error("CacheManager.saveCacheRecord: failed"),
        c instanceof Error
          ? ((i = this.commonLogger) == null ||
              i.errorPii(`CacheManager.saveCacheRecord: ${c.message}`, r),
            c.name === "QuotaExceededError" ||
            c.name === "NS_ERROR_DOM_QUOTA_REACHED" ||
            c.message.includes("exceeded the quota")
              ? ((a = this.commonLogger) == null ||
                  a.error(
                    "CacheManager.saveCacheRecord: exceeded storage quota",
                    r
                  ),
                new go(zv))
              : new go(c.name, c.message))
          : ((s = this.commonLogger) == null ||
              s.errorPii(`CacheManager.saveCacheRecord: ${c}`, r),
            new go(ih)))
      );
    }
  }
  async saveAccessToken(e) {
    const n = {
        clientId: e.clientId,
        credentialType: e.credentialType,
        environment: e.environment,
        homeAccountId: e.homeAccountId,
        realm: e.realm,
        tokenType: e.tokenType,
        requestedClaimsHash: e.requestedClaimsHash,
      },
      r = this.getTokenKeys(),
      o = Ne.fromString(e.target),
      i = [];
    r.accessToken.forEach((a) => {
      if (!this.accessTokenKeyMatchesFilter(a, n, !1)) return;
      const s = this.getAccessTokenCredential(a);
      s &&
        this.credentialMatchesFilter(s, n) &&
        Ne.fromString(s.target).intersectingScopeSets(o) &&
        i.push(this.removeAccessToken(a));
    }),
      await Promise.all(i),
      this.setAccessTokenCredential(e);
  }
  getAccountsFilteredBy(e) {
    const n = this.getAccountKeys(),
      r = [];
    return (
      n.forEach((o) => {
        var c;
        if (!this.isAccountKey(o, e.homeAccountId)) return;
        const i = this.getAccount(o, this.commonLogger);
        if (
          !i ||
          (e.homeAccountId && !this.matchHomeAccountId(i, e.homeAccountId)) ||
          (e.username && !this.matchUsername(i.username, e.username)) ||
          (e.environment && !this.matchEnvironment(i, e.environment)) ||
          (e.realm && !this.matchRealm(i, e.realm)) ||
          (e.nativeAccountId &&
            !this.matchNativeAccountId(i, e.nativeAccountId)) ||
          (e.authorityType && !this.matchAuthorityType(i, e.authorityType))
        )
          return;
        const a = {
            localAccountId: e == null ? void 0 : e.localAccountId,
            name: e == null ? void 0 : e.name,
          },
          s =
            (c = i.tenantProfiles) == null
              ? void 0
              : c.filter((l) => this.tenantProfileMatchesFilter(l, a));
        (s && s.length === 0) || r.push(i);
      }),
      r
    );
  }
  isAccountKey(e, n, r) {
    return !(
      e.split(at.CACHE_KEY_SEPARATOR).length < 3 ||
      (n && !e.toLowerCase().includes(n.toLowerCase())) ||
      (r && !e.toLowerCase().includes(r.toLowerCase()))
    );
  }
  isCredentialKey(e) {
    if (e.split(at.CACHE_KEY_SEPARATOR).length < 6) return !1;
    const n = e.toLowerCase();
    if (
      n.indexOf(W.ID_TOKEN.toLowerCase()) === -1 &&
      n.indexOf(W.ACCESS_TOKEN.toLowerCase()) === -1 &&
      n.indexOf(W.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) === -1 &&
      n.indexOf(W.REFRESH_TOKEN.toLowerCase()) === -1
    )
      return !1;
    if (n.indexOf(W.REFRESH_TOKEN.toLowerCase()) > -1) {
      const r = `${W.REFRESH_TOKEN}${at.CACHE_KEY_SEPARATOR}${this.clientId}${at.CACHE_KEY_SEPARATOR}`,
        o = `${W.REFRESH_TOKEN}${at.CACHE_KEY_SEPARATOR}${Ci}${at.CACHE_KEY_SEPARATOR}`;
      if (
        n.indexOf(r.toLowerCase()) === -1 &&
        n.indexOf(o.toLowerCase()) === -1
      )
        return !1;
    } else if (n.indexOf(this.clientId.toLowerCase()) === -1) return !1;
    return !0;
  }
  credentialMatchesFilter(e, n) {
    return !(
      (n.clientId && !this.matchClientId(e, n.clientId)) ||
      (n.userAssertionHash &&
        !this.matchUserAssertionHash(e, n.userAssertionHash)) ||
      (typeof n.homeAccountId == "string" &&
        !this.matchHomeAccountId(e, n.homeAccountId)) ||
      (n.environment && !this.matchEnvironment(e, n.environment)) ||
      (n.realm && !this.matchRealm(e, n.realm)) ||
      (n.credentialType && !this.matchCredentialType(e, n.credentialType)) ||
      (n.familyId && !this.matchFamilyId(e, n.familyId)) ||
      (n.target && !this.matchTarget(e, n.target)) ||
      ((n.requestedClaimsHash || e.requestedClaimsHash) &&
        e.requestedClaimsHash !== n.requestedClaimsHash) ||
      (e.credentialType === W.ACCESS_TOKEN_WITH_AUTH_SCHEME &&
        ((n.tokenType && !this.matchTokenType(e, n.tokenType)) ||
          (n.tokenType === le.SSH && n.keyId && !this.matchKeyId(e, n.keyId))))
    );
  }
  getAppMetadataFilteredBy(e) {
    const n = this.getKeys(),
      r = {};
    return (
      n.forEach((o) => {
        if (!this.isAppMetadata(o)) return;
        const i = this.getAppMetadata(o);
        i &&
          ((e.environment && !this.matchEnvironment(i, e.environment)) ||
            (e.clientId && !this.matchClientId(i, e.clientId)) ||
            (r[o] = i));
      }),
      r
    );
  }
  getAuthorityMetadataByAlias(e) {
    const n = this.getAuthorityMetadataKeys();
    let r = null;
    return (
      n.forEach((o) => {
        if (!this.isAuthorityMetadata(o) || o.indexOf(this.clientId) === -1)
          return;
        const i = this.getAuthorityMetadata(o);
        i && i.aliases.indexOf(e) !== -1 && (r = i);
      }),
      r
    );
  }
  async removeAllAccounts() {
    const e = this.getAccountKeys(),
      n = [];
    e.forEach((r) => {
      n.push(this.removeAccount(r));
    }),
      await Promise.all(n);
  }
  async removeAccount(e) {
    const n = this.getAccount(e, this.commonLogger);
    n && (await this.removeAccountContext(n), this.removeItem(e));
  }
  async removeAccountContext(e) {
    const n = this.getTokenKeys(),
      r = e.generateAccountId(),
      o = [];
    n.idToken.forEach((i) => {
      i.indexOf(r) === 0 && this.removeIdToken(i);
    }),
      n.accessToken.forEach((i) => {
        i.indexOf(r) === 0 && o.push(this.removeAccessToken(i));
      }),
      n.refreshToken.forEach((i) => {
        i.indexOf(r) === 0 && this.removeRefreshToken(i);
      }),
      await Promise.all(o);
  }
  updateOutdatedCachedAccount(e, n, r) {
    var o;
    if (n && n.isSingleTenant()) {
      (o = this.commonLogger) == null ||
        o.verbose(
          "updateOutdatedCachedAccount: Found a single-tenant (outdated) account entity in the cache, migrating to multi-tenant account entity"
        );
      const i = this.getAccountKeys().filter((u) =>
          u.startsWith(n.homeAccountId)
        ),
        a = [];
      i.forEach((u) => {
        const d = this.getCachedAccountEntity(u);
        d && a.push(d);
      });
      const s = a.find((u) => gu(u.realm, u.homeAccountId)) || a[0];
      s.tenantProfiles = a.map((u) => ({
        tenantId: u.realm,
        localAccountId: u.localAccountId,
        name: u.name,
        isHomeTenant: gu(u.realm, u.homeAccountId),
      }));
      const c = _o.toObject(new $e(), { ...s }),
        l = c.generateAccountKey();
      return (
        i.forEach((u) => {
          u !== l && this.removeOutdatedAccount(e);
        }),
        this.setAccount(c),
        r == null ||
          r.verbose("Updated an outdated account entity in the cache"),
        c
      );
    }
    return n;
  }
  async removeAccessToken(e) {
    const n = this.getAccessTokenCredential(e);
    if (n) {
      if (
        n.credentialType.toLowerCase() ===
          W.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase() &&
        n.tokenType === le.POP
      ) {
        const o = n.keyId;
        if (o)
          try {
            await this.cryptoImpl.removeTokenBindingKey(o);
          } catch {
            throw O(Cv);
          }
      }
      return this.removeItem(e);
    }
  }
  removeAppMetadata() {
    return (
      this.getKeys().forEach((n) => {
        this.isAppMetadata(n) && this.removeItem(n);
      }),
      !0
    );
  }
  readAccountFromCache(e) {
    const n = $e.generateAccountCacheKey(e);
    return this.getAccount(n, this.commonLogger);
  }
  getIdToken(e, n, r, o, i) {
    this.commonLogger.trace("CacheManager - getIdToken called");
    const a = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: W.ID_TOKEN,
        clientId: this.clientId,
        realm: r,
      },
      s = this.getIdTokensByFilter(a, n),
      c = s.size;
    if (c < 1)
      return (
        this.commonLogger.info("CacheManager:getIdToken - No token found"), null
      );
    if (c > 1) {
      let l = s;
      if (!r) {
        const u = new Map();
        s.forEach((h, v) => {
          h.realm === e.tenantId && u.set(v, h);
        });
        const d = u.size;
        if (d < 1)
          return (
            this.commonLogger.info(
              "CacheManager:getIdToken - Multiple ID tokens found for account but none match account entity tenant id, returning first result"
            ),
            s.values().next().value
          );
        if (d === 1)
          return (
            this.commonLogger.info(
              "CacheManager:getIdToken - Multiple ID tokens found for account, defaulting to home tenant profile"
            ),
            u.values().next().value
          );
        l = u;
      }
      return (
        this.commonLogger.info(
          "CacheManager:getIdToken - Multiple matching ID tokens found, clearing them"
        ),
        l.forEach((u, d) => {
          this.removeIdToken(d);
        }),
        o && i && o.addFields({ multiMatchedID: s.size }, i),
        null
      );
    }
    return (
      this.commonLogger.info("CacheManager:getIdToken - Returning ID token"),
      s.values().next().value
    );
  }
  getIdTokensByFilter(e, n) {
    const r = (n && n.idToken) || this.getTokenKeys().idToken,
      o = new Map();
    return (
      r.forEach((i) => {
        if (!this.idTokenKeyMatchesFilter(i, { clientId: this.clientId, ...e }))
          return;
        const a = this.getIdTokenCredential(i);
        a && this.credentialMatchesFilter(a, e) && o.set(i, a);
      }),
      o
    );
  }
  idTokenKeyMatchesFilter(e, n) {
    const r = e.toLowerCase();
    return !(
      (n.clientId && r.indexOf(n.clientId.toLowerCase()) === -1) ||
      (n.homeAccountId && r.indexOf(n.homeAccountId.toLowerCase()) === -1)
    );
  }
  removeIdToken(e) {
    this.removeItem(e);
  }
  removeRefreshToken(e) {
    this.removeItem(e);
  }
  getAccessToken(e, n, r, o, i, a) {
    this.commonLogger.trace("CacheManager - getAccessToken called");
    const s = Ne.createSearchScopes(n.scopes),
      c = n.authenticationScheme || le.BEARER,
      l =
        c && c.toLowerCase() !== le.BEARER.toLowerCase()
          ? W.ACCESS_TOKEN_WITH_AUTH_SCHEME
          : W.ACCESS_TOKEN,
      u = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: l,
        clientId: this.clientId,
        realm: o || e.tenantId,
        target: s,
        tokenType: c,
        keyId: n.sshKid,
        requestedClaimsHash: n.requestedClaimsHash,
      },
      d = (r && r.accessToken) || this.getTokenKeys().accessToken,
      h = [];
    d.forEach((g) => {
      if (this.accessTokenKeyMatchesFilter(g, u, !0)) {
        const m = this.getAccessTokenCredential(g);
        m && this.credentialMatchesFilter(m, u) && h.push(m);
      }
    });
    const v = h.length;
    return v < 1
      ? (this.commonLogger.info("CacheManager:getAccessToken - No token found"),
        null)
      : v > 1
      ? (this.commonLogger.info(
          "CacheManager:getAccessToken - Multiple access tokens found, clearing them"
        ),
        h.forEach((g) => {
          this.removeAccessToken(eo(g));
        }),
        i && a && i.addFields({ multiMatchedAT: h.length }, a),
        null)
      : (this.commonLogger.info(
          "CacheManager:getAccessToken - Returning access token"
        ),
        h[0]);
  }
  accessTokenKeyMatchesFilter(e, n, r) {
    const o = e.toLowerCase();
    if (
      (n.clientId && o.indexOf(n.clientId.toLowerCase()) === -1) ||
      (n.homeAccountId && o.indexOf(n.homeAccountId.toLowerCase()) === -1) ||
      (n.realm && o.indexOf(n.realm.toLowerCase()) === -1) ||
      (n.requestedClaimsHash &&
        o.indexOf(n.requestedClaimsHash.toLowerCase()) === -1)
    )
      return !1;
    if (n.target) {
      const i = n.target.asArray();
      for (let a = 0; a < i.length; a++) {
        if (r && !o.includes(i[a].toLowerCase())) return !1;
        if (!r && o.includes(i[a].toLowerCase())) return !0;
      }
    }
    return !0;
  }
  getAccessTokensByFilter(e) {
    const n = this.getTokenKeys(),
      r = [];
    return (
      n.accessToken.forEach((o) => {
        if (!this.accessTokenKeyMatchesFilter(o, e, !0)) return;
        const i = this.getAccessTokenCredential(o);
        i && this.credentialMatchesFilter(i, e) && r.push(i);
      }),
      r
    );
  }
  getRefreshToken(e, n, r, o, i) {
    this.commonLogger.trace("CacheManager - getRefreshToken called");
    const a = n ? Ci : void 0,
      s = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: W.REFRESH_TOKEN,
        clientId: this.clientId,
        familyId: a,
      },
      c = (r && r.refreshToken) || this.getTokenKeys().refreshToken,
      l = [];
    c.forEach((d) => {
      if (this.refreshTokenKeyMatchesFilter(d, s)) {
        const h = this.getRefreshTokenCredential(d);
        h && this.credentialMatchesFilter(h, s) && l.push(h);
      }
    });
    const u = l.length;
    return u < 1
      ? (this.commonLogger.info(
          "CacheManager:getRefreshToken - No refresh token found."
        ),
        null)
      : (u > 1 && o && i && o.addFields({ multiMatchedRT: u }, i),
        this.commonLogger.info(
          "CacheManager:getRefreshToken - returning refresh token"
        ),
        l[0]);
  }
  refreshTokenKeyMatchesFilter(e, n) {
    const r = e.toLowerCase();
    return !(
      (n.familyId && r.indexOf(n.familyId.toLowerCase()) === -1) ||
      (!n.familyId &&
        n.clientId &&
        r.indexOf(n.clientId.toLowerCase()) === -1) ||
      (n.homeAccountId && r.indexOf(n.homeAccountId.toLowerCase()) === -1)
    );
  }
  readAppMetadataFromCache(e) {
    const n = { environment: e, clientId: this.clientId },
      r = this.getAppMetadataFilteredBy(n),
      o = Object.keys(r).map((a) => r[a]),
      i = o.length;
    if (i < 1) return null;
    if (i > 1) throw O(hv);
    return o[0];
  }
  isAppMetadataFOCI(e) {
    const n = this.readAppMetadataFromCache(e);
    return !!(n && n.familyId === Ci);
  }
  matchHomeAccountId(e, n) {
    return typeof e.homeAccountId == "string" && n === e.homeAccountId;
  }
  matchLocalAccountIdFromTokenClaims(e, n) {
    const r = e.oid || e.sub;
    return n === r;
  }
  matchLocalAccountIdFromTenantProfile(e, n) {
    return e.localAccountId === n;
  }
  matchName(e, n) {
    var r;
    return (
      n.toLowerCase() === ((r = e.name) == null ? void 0 : r.toLowerCase())
    );
  }
  matchUsername(e, n) {
    return !!(
      e &&
      typeof e == "string" &&
      (n == null ? void 0 : n.toLowerCase()) === e.toLowerCase()
    );
  }
  matchUserAssertionHash(e, n) {
    return !!(e.userAssertionHash && n === e.userAssertionHash);
  }
  matchEnvironment(e, n) {
    if (this.staticAuthorityOptions) {
      const o = DT(this.staticAuthorityOptions, this.commonLogger);
      if (o.includes(n) && o.includes(e.environment)) return !0;
    }
    const r = this.getAuthorityMetadataByAlias(n);
    return !!(r && r.aliases.indexOf(e.environment) > -1);
  }
  matchCredentialType(e, n) {
    return (
      e.credentialType && n.toLowerCase() === e.credentialType.toLowerCase()
    );
  }
  matchClientId(e, n) {
    return !!(e.clientId && n === e.clientId);
  }
  matchFamilyId(e, n) {
    return !!(e.familyId && n === e.familyId);
  }
  matchRealm(e, n) {
    var r;
    return (
      ((r = e.realm) == null ? void 0 : r.toLowerCase()) === n.toLowerCase()
    );
  }
  matchNativeAccountId(e, n) {
    return !!(e.nativeAccountId && n === e.nativeAccountId);
  }
  matchLoginHintFromTokenClaims(e, n) {
    return e.login_hint === n || e.preferred_username === n || e.upn === n;
  }
  matchSid(e, n) {
    return e.sid === n;
  }
  matchAuthorityType(e, n) {
    return !!(
      e.authorityType && n.toLowerCase() === e.authorityType.toLowerCase()
    );
  }
  matchTarget(e, n) {
    return (e.credentialType !== W.ACCESS_TOKEN &&
      e.credentialType !== W.ACCESS_TOKEN_WITH_AUTH_SCHEME) ||
      !e.target
      ? !1
      : Ne.fromString(e.target).containsScopeSet(n);
  }
  matchTokenType(e, n) {
    return !!(e.tokenType && e.tokenType === n);
  }
  matchKeyId(e, n) {
    return !!(e.keyId && e.keyId === n);
  }
  isAppMetadata(e) {
    return e.indexOf(Bd) !== -1;
  }
  isAuthorityMetadata(e) {
    return e.indexOf(fs.CACHE_KEY) !== -1;
  }
  generateAuthorityMetadataCacheKey(e) {
    return `${fs.CACHE_KEY}-${this.clientId}-${e}`;
  }
  static toObject(e, n) {
    for (const r in n) e[r] = n[r];
    return e;
  }
}
class FT extends _o {
  setAccount() {
    throw O(Y);
  }
  getAccount() {
    throw O(Y);
  }
  getCachedAccountEntity() {
    throw O(Y);
  }
  setIdTokenCredential() {
    throw O(Y);
  }
  getIdTokenCredential() {
    throw O(Y);
  }
  setAccessTokenCredential() {
    throw O(Y);
  }
  getAccessTokenCredential() {
    throw O(Y);
  }
  setRefreshTokenCredential() {
    throw O(Y);
  }
  getRefreshTokenCredential() {
    throw O(Y);
  }
  setAppMetadata() {
    throw O(Y);
  }
  getAppMetadata() {
    throw O(Y);
  }
  setServerTelemetry() {
    throw O(Y);
  }
  getServerTelemetry() {
    throw O(Y);
  }
  setAuthorityMetadata() {
    throw O(Y);
  }
  getAuthorityMetadata() {
    throw O(Y);
  }
  getAuthorityMetadataKeys() {
    throw O(Y);
  }
  setThrottlingCache() {
    throw O(Y);
  }
  getThrottlingCache() {
    throw O(Y);
  }
  removeItem() {
    throw O(Y);
  }
  getKeys() {
    throw O(Y);
  }
  getAccountKeys() {
    throw O(Y);
  }
  getTokenKeys() {
    throw O(Y);
  }
  async clear() {
    throw O(Y);
  }
  updateCredentialCacheKey() {
    throw O(Y);
  }
  removeOutdatedAccount() {
    throw O(Y);
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ const jv = {
    tokenRenewalOffsetSeconds: aT,
    preventCorsPreflight: !1,
  },
  HT = {
    loggerCallback: () => {},
    piiLoggingEnabled: !1,
    logLevel: ce.Info,
    correlationId: T.EMPTY_STRING,
  },
  $T = { claimsBasedCachingEnabled: !1 },
  BT = {
    async sendGetRequestAsync() {
      throw O(Y);
    },
    async sendPostRequestAsync() {
      throw O(Y);
    },
  },
  zT = { sku: T.SKU, version: Yd, cpu: T.EMPTY_STRING, os: T.EMPTY_STRING },
  jT = { clientSecret: T.EMPTY_STRING, clientAssertion: void 0 },
  VT = { azureCloudInstance: Qd.None, tenant: `${T.DEFAULT_COMMON_TENANT}` },
  KT = { application: { appName: "", appVersion: "" } };
function GT({
  authOptions: t,
  systemOptions: e,
  loggerOptions: n,
  cacheOptions: r,
  storageInterface: o,
  networkInterface: i,
  cryptoInterface: a,
  clientCredentials: s,
  libraryInfo: c,
  telemetry: l,
  serverTelemetryManager: u,
  persistencePlugin: d,
  serializableCache: h,
}) {
  const v = { ...HT, ...n };
  return {
    authOptions: WT(t),
    systemOptions: { ...jv, ...e },
    loggerOptions: v,
    cacheOptions: { ...$T, ...r },
    storageInterface: o || new FT(t.clientId, ms, new ir(v)),
    networkInterface: i || BT,
    cryptoInterface: a || ms,
    clientCredentials: s || jT,
    libraryInfo: { ...zT, ...c },
    telemetry: { ...KT, ...l },
    serverTelemetryManager: u || null,
    persistencePlugin: d || null,
    serializableCache: h || null,
  };
}
function WT(t) {
  return {
    clientCapabilities: [],
    azureCloudOptions: VT,
    skipAuthorityMetadataCache: !1,
    ...t,
  };
}
function vu(t) {
  return t.authOptions.authority.options.protocolMode === bn.OIDC;
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ class ar extends ke {
  constructor(e, n, r) {
    super(e, n, r),
      (this.name = "ServerError"),
      Object.setPrototypeOf(this, ar.prototype);
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ class an {
  static generateThrottlingStorageKey(e) {
    return `${Si.THROTTLING_PREFIX}.${JSON.stringify(e)}`;
  }
  static preProcess(e, n) {
    var i;
    const r = an.generateThrottlingStorageKey(n),
      o = e.getThrottlingCache(r);
    if (o) {
      if (o.throttleTime < Date.now()) {
        e.removeItem(r);
        return;
      }
      throw new ar(
        ((i = o.errorCodes) == null ? void 0 : i.join(" ")) || T.EMPTY_STRING,
        o.errorMessage,
        o.subError
      );
    }
  }
  static postProcess(e, n, r) {
    if (an.checkResponseStatus(r) || an.checkResponseForRetryAfter(r)) {
      const o = {
        throttleTime: an.calculateThrottleTime(
          parseInt(r.headers[cn.RETRY_AFTER])
        ),
        error: r.body.error,
        errorCodes: r.body.error_codes,
        errorMessage: r.body.error_description,
        subError: r.body.suberror,
      };
      e.setThrottlingCache(an.generateThrottlingStorageKey(n), o);
    }
  }
  static checkResponseStatus(e) {
    return e.status === 429 || (e.status >= 500 && e.status < 600);
  }
  static checkResponseForRetryAfter(e) {
    return e.headers
      ? e.headers.hasOwnProperty(cn.RETRY_AFTER) &&
          (e.status < 200 || e.status >= 300)
      : !1;
  }
  static calculateThrottleTime(e) {
    const n = e <= 0 ? 0 : e,
      r = Date.now() / 1e3;
    return Math.floor(
      Math.min(
        r + (n || Si.DEFAULT_THROTTLE_TIME_SECONDS),
        r + Si.DEFAULT_MAX_THROTTLE_TIME_SECONDS
      ) * 1e3
    );
  }
  static removeThrottle(e, n, r, o) {
    const i = {
        clientId: n,
        authority: r.authority,
        scopes: r.scopes,
        homeAccountIdentifier: o,
        claims: r.claims,
        authenticationScheme: r.authenticationScheme,
        resourceRequestMethod: r.resourceRequestMethod,
        resourceRequestUri: r.resourceRequestUri,
        shrClaims: r.shrClaims,
        sshKid: r.sshKid,
      },
      a = this.generateThrottlingStorageKey(i);
    e.removeItem(a);
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ class qT {
  constructor(e, n) {
    (this.networkClient = e), (this.cacheManager = n);
  }
  async sendPostRequest(e, n, r) {
    an.preProcess(this.cacheManager, e);
    let o;
    try {
      o = await this.networkClient.sendPostRequestAsync(n, r);
    } catch (i) {
      throw i instanceof ke ? i : O(av);
    }
    return an.postProcess(this.cacheManager, e, o), o;
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ const It = {
  HOME_ACCOUNT_ID: "home_account_id",
  UPN: "UPN",
};
/*! @azure/msal-common v14.9.0 2024-04-11 */ const Ro = "client_id",
  YT = "redirect_uri",
  dp = "response_type",
  QT = "response_mode",
  JT = "grant_type",
  XT = "claims",
  ZT = "scope",
  e0 = "refresh_token",
  t0 = "state",
  n0 = "nonce",
  r0 = "prompt",
  o0 = "code",
  i0 = "code_challenge",
  a0 = "code_challenge_method",
  s0 = "code_verifier",
  c0 = "client-request-id",
  l0 = "x-client-SKU",
  u0 = "x-client-VER",
  d0 = "x-client-OS",
  h0 = "x-client-CPU",
  f0 = "x-client-current-telemetry",
  p0 = "x-client-last-telemetry",
  m0 = "x-ms-lib-capability",
  g0 = "x-app-name",
  v0 = "x-app-ver",
  y0 = "post_logout_redirect_uri",
  C0 = "id_token_hint",
  S0 = "device_code",
  w0 = "client_secret",
  E0 = "client_assertion",
  T0 = "client_assertion_type",
  hp = "token_type",
  fp = "req_cnf",
  I0 = "assertion",
  A0 = "requested_token_use",
  pp = "return_spa_code",
  k0 = "nativebroker",
  _0 = "logout_hint",
  R0 = "sid",
  b0 = "login_hint",
  O0 = "domain_hint";
/*! @azure/msal-common v14.9.0 2024-04-11 */ class mr {
  static validateRedirectUri(e) {
    if (!e) throw de(Iv);
  }
  static validatePrompt(e) {
    const n = [];
    for (const r in We) n.push(We[r]);
    if (n.indexOf(e) < 0) throw de(Rv);
  }
  static validateClaims(e) {
    try {
      JSON.parse(e);
    } catch {
      throw de(Xd);
    }
  }
  static validateCodeChallengeParams(e, n) {
    if (!e || !n) throw de(Zd);
    this.validateCodeChallengeMethod(n);
  }
  static validateCodeChallengeMethod(e) {
    if ([Zf.PLAIN, Zf.S256].indexOf(e) < 0) throw de(Pv);
  }
  static sanitizeEQParams(e, n) {
    return e
      ? (n.forEach((r, o) => {
          e[o] && delete e[o];
        }),
        Object.fromEntries(Object.entries(e).filter((r) => r[1] !== "")))
      : {};
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ class wi {
  constructor() {
    this.parameters = new Map();
  }
  addResponseTypeCode() {
    this.parameters.set(dp, encodeURIComponent(T.CODE_RESPONSE_TYPE));
  }
  addResponseTypeForTokenAndIdToken() {
    this.parameters.set(
      dp,
      encodeURIComponent(`${T.TOKEN_RESPONSE_TYPE} ${T.ID_TOKEN_RESPONSE_TYPE}`)
    );
  }
  addResponseMode(e) {
    this.parameters.set(QT, encodeURIComponent(e || rT.QUERY));
  }
  addNativeBroker() {
    this.parameters.set(k0, encodeURIComponent("1"));
  }
  addScopes(e, n = !0, r = Bo) {
    n && !r.includes("openid") && !e.includes("openid") && r.push("openid");
    const o = n ? [...(e || []), ...r] : e || [],
      i = new Ne(o);
    this.parameters.set(ZT, encodeURIComponent(i.printScopes()));
  }
  addClientId(e) {
    this.parameters.set(Ro, encodeURIComponent(e));
  }
  addRedirectUri(e) {
    mr.validateRedirectUri(e), this.parameters.set(YT, encodeURIComponent(e));
  }
  addPostLogoutRedirectUri(e) {
    mr.validateRedirectUri(e), this.parameters.set(y0, encodeURIComponent(e));
  }
  addIdTokenHint(e) {
    this.parameters.set(C0, encodeURIComponent(e));
  }
  addDomainHint(e) {
    this.parameters.set(O0, encodeURIComponent(e));
  }
  addLoginHint(e) {
    this.parameters.set(b0, encodeURIComponent(e));
  }
  addCcsUpn(e) {
    this.parameters.set(cn.CCS_HEADER, encodeURIComponent(`UPN:${e}`));
  }
  addCcsOid(e) {
    this.parameters.set(
      cn.CCS_HEADER,
      encodeURIComponent(`Oid:${e.uid}@${e.utid}`)
    );
  }
  addSid(e) {
    this.parameters.set(R0, encodeURIComponent(e));
  }
  addClaims(e, n) {
    const r = this.addClientCapabilitiesToClaims(e, n);
    mr.validateClaims(r), this.parameters.set(XT, encodeURIComponent(r));
  }
  addCorrelationId(e) {
    this.parameters.set(c0, encodeURIComponent(e));
  }
  addLibraryInfo(e) {
    this.parameters.set(l0, e.sku),
      this.parameters.set(u0, e.version),
      e.os && this.parameters.set(d0, e.os),
      e.cpu && this.parameters.set(h0, e.cpu);
  }
  addApplicationTelemetry(e) {
    e != null && e.appName && this.parameters.set(g0, e.appName),
      e != null && e.appVersion && this.parameters.set(v0, e.appVersion);
  }
  addPrompt(e) {
    mr.validatePrompt(e), this.parameters.set(`${r0}`, encodeURIComponent(e));
  }
  addState(e) {
    e && this.parameters.set(t0, encodeURIComponent(e));
  }
  addNonce(e) {
    this.parameters.set(n0, encodeURIComponent(e));
  }
  addCodeChallengeParams(e, n) {
    if ((mr.validateCodeChallengeParams(e, n), e && n))
      this.parameters.set(i0, encodeURIComponent(e)),
        this.parameters.set(a0, encodeURIComponent(n));
    else throw de(Zd);
  }
  addAuthorizationCode(e) {
    this.parameters.set(o0, encodeURIComponent(e));
  }
  addDeviceCode(e) {
    this.parameters.set(S0, encodeURIComponent(e));
  }
  addRefreshToken(e) {
    this.parameters.set(e0, encodeURIComponent(e));
  }
  addCodeVerifier(e) {
    this.parameters.set(s0, encodeURIComponent(e));
  }
  addClientSecret(e) {
    this.parameters.set(w0, encodeURIComponent(e));
  }
  addClientAssertion(e) {
    e && this.parameters.set(E0, encodeURIComponent(e));
  }
  addClientAssertionType(e) {
    e && this.parameters.set(T0, encodeURIComponent(e));
  }
  addOboAssertion(e) {
    this.parameters.set(I0, encodeURIComponent(e));
  }
  addRequestTokenUse(e) {
    this.parameters.set(A0, encodeURIComponent(e));
  }
  addGrantType(e) {
    this.parameters.set(JT, encodeURIComponent(e));
  }
  addClientInfo() {
    this.parameters.set(oT, "1");
  }
  addExtraQueryParameters(e) {
    const n = mr.sanitizeEQParams(e, this.parameters);
    Object.keys(n).forEach((r) => {
      this.parameters.set(r, e[r]);
    });
  }
  addClientCapabilitiesToClaims(e, n) {
    let r;
    if (!e) r = {};
    else
      try {
        r = JSON.parse(e);
      } catch {
        throw de(Xd);
      }
    return (
      n &&
        n.length > 0 &&
        (r.hasOwnProperty(ya.ACCESS_TOKEN) || (r[ya.ACCESS_TOKEN] = {}),
        (r[ya.ACCESS_TOKEN][ya.XMS_CC] = { values: n })),
      JSON.stringify(r)
    );
  }
  addUsername(e) {
    this.parameters.set(tp.username, encodeURIComponent(e));
  }
  addPassword(e) {
    this.parameters.set(tp.password, encodeURIComponent(e));
  }
  addPopToken(e) {
    e &&
      (this.parameters.set(hp, le.POP),
      this.parameters.set(fp, encodeURIComponent(e)));
  }
  addSshJwk(e) {
    e &&
      (this.parameters.set(hp, le.SSH),
      this.parameters.set(fp, encodeURIComponent(e)));
  }
  addServerTelemetry(e) {
    this.parameters.set(f0, e.generateCurrentRequestHeaderValue()),
      this.parameters.set(p0, e.generateLastRequestHeaderValue());
  }
  addThrottling() {
    this.parameters.set(m0, Si.X_MS_LIB_CAPABILITY_VALUE);
  }
  addLogoutHint(e) {
    this.parameters.set(_0, encodeURIComponent(e));
  }
  createQueryString() {
    const e = new Array();
    return (
      this.parameters.forEach((n, r) => {
        e.push(`${r}=${n}`);
      }),
      e.join("&")
    );
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ function P0(t) {
  return (
    t.hasOwnProperty("authorization_endpoint") &&
    t.hasOwnProperty("token_endpoint") &&
    t.hasOwnProperty("issuer") &&
    t.hasOwnProperty("jwks_uri")
  );
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ function N0(t) {
  return (
    t.hasOwnProperty("tenant_discovery_endpoint") &&
    t.hasOwnProperty("metadata")
  );
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ function M0(t) {
  return t.hasOwnProperty("error") && t.hasOwnProperty("error_description");
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ const E = {
    AcquireTokenByCode: "acquireTokenByCode",
    AcquireTokenByRefreshToken: "acquireTokenByRefreshToken",
    AcquireTokenSilent: "acquireTokenSilent",
    AcquireTokenSilentAsync: "acquireTokenSilentAsync",
    AcquireTokenPopup: "acquireTokenPopup",
    AcquireTokenRedirect: "acquireTokenRedirect",
    CryptoOptsGetPublicKeyThumbprint: "cryptoOptsGetPublicKeyThumbprint",
    CryptoOptsSignJwt: "cryptoOptsSignJwt",
    SilentCacheClientAcquireToken: "silentCacheClientAcquireToken",
    SilentIframeClientAcquireToken: "silentIframeClientAcquireToken",
    AwaitConcurrentIframe: "awaitConcurrentIframe",
    SilentRefreshClientAcquireToken: "silentRefreshClientAcquireToken",
    SsoSilent: "ssoSilent",
    StandardInteractionClientGetDiscoveredAuthority:
      "standardInteractionClientGetDiscoveredAuthority",
    FetchAccountIdWithNativeBroker: "fetchAccountIdWithNativeBroker",
    NativeInteractionClientAcquireToken: "nativeInteractionClientAcquireToken",
    BaseClientCreateTokenRequestHeaders: "baseClientCreateTokenRequestHeaders",
    RefreshTokenClientExecutePostToTokenEndpoint:
      "refreshTokenClientExecutePostToTokenEndpoint",
    AuthorizationCodeClientExecutePostToTokenEndpoint:
      "authorizationCodeClientExecutePostToTokenEndpoint",
    BrokerHandhshake: "brokerHandshake",
    AcquireTokenByRefreshTokenInBroker: "acquireTokenByRefreshTokenInBroker",
    AcquireTokenByBroker: "acquireTokenByBroker",
    RefreshTokenClientExecuteTokenRequest:
      "refreshTokenClientExecuteTokenRequest",
    RefreshTokenClientAcquireToken: "refreshTokenClientAcquireToken",
    RefreshTokenClientAcquireTokenWithCachedRefreshToken:
      "refreshTokenClientAcquireTokenWithCachedRefreshToken",
    RefreshTokenClientAcquireTokenByRefreshToken:
      "refreshTokenClientAcquireTokenByRefreshToken",
    RefreshTokenClientCreateTokenRequestBody:
      "refreshTokenClientCreateTokenRequestBody",
    AcquireTokenFromCache: "acquireTokenFromCache",
    SilentFlowClientAcquireCachedToken: "silentFlowClientAcquireCachedToken",
    SilentFlowClientGenerateResultFromCacheRecord:
      "silentFlowClientGenerateResultFromCacheRecord",
    AcquireTokenBySilentIframe: "acquireTokenBySilentIframe",
    InitializeBaseRequest: "initializeBaseRequest",
    InitializeSilentRequest: "initializeSilentRequest",
    InitializeClientApplication: "initializeClientApplication",
    SilentIframeClientTokenHelper: "silentIframeClientTokenHelper",
    SilentHandlerInitiateAuthRequest: "silentHandlerInitiateAuthRequest",
    SilentHandlerMonitorIframeForHash: "silentHandlerMonitorIframeForHash",
    SilentHandlerLoadFrame: "silentHandlerLoadFrame",
    SilentHandlerLoadFrameSync: "silentHandlerLoadFrameSync",
    StandardInteractionClientCreateAuthCodeClient:
      "standardInteractionClientCreateAuthCodeClient",
    StandardInteractionClientGetClientConfiguration:
      "standardInteractionClientGetClientConfiguration",
    StandardInteractionClientInitializeAuthorizationRequest:
      "standardInteractionClientInitializeAuthorizationRequest",
    StandardInteractionClientInitializeAuthorizationCodeRequest:
      "standardInteractionClientInitializeAuthorizationCodeRequest",
    GetAuthCodeUrl: "getAuthCodeUrl",
    HandleCodeResponseFromServer: "handleCodeResponseFromServer",
    HandleCodeResponse: "handleCodeResponse",
    UpdateTokenEndpointAuthority: "updateTokenEndpointAuthority",
    AuthClientAcquireToken: "authClientAcquireToken",
    AuthClientExecuteTokenRequest: "authClientExecuteTokenRequest",
    AuthClientCreateTokenRequestBody: "authClientCreateTokenRequestBody",
    AuthClientCreateQueryString: "authClientCreateQueryString",
    PopTokenGenerateCnf: "popTokenGenerateCnf",
    PopTokenGenerateKid: "popTokenGenerateKid",
    HandleServerTokenResponse: "handleServerTokenResponse",
    DeserializeResponse: "deserializeResponse",
    AuthorityFactoryCreateDiscoveredInstance:
      "authorityFactoryCreateDiscoveredInstance",
    AuthorityResolveEndpointsAsync: "authorityResolveEndpointsAsync",
    AuthorityResolveEndpointsFromLocalSources:
      "authorityResolveEndpointsFromLocalSources",
    AuthorityGetCloudDiscoveryMetadataFromNetwork:
      "authorityGetCloudDiscoveryMetadataFromNetwork",
    AuthorityUpdateCloudDiscoveryMetadata:
      "authorityUpdateCloudDiscoveryMetadata",
    AuthorityGetEndpointMetadataFromNetwork:
      "authorityGetEndpointMetadataFromNetwork",
    AuthorityUpdateEndpointMetadata: "authorityUpdateEndpointMetadata",
    AuthorityUpdateMetadataWithRegionalInformation:
      "authorityUpdateMetadataWithRegionalInformation",
    RegionDiscoveryDetectRegion: "regionDiscoveryDetectRegion",
    RegionDiscoveryGetRegionFromIMDS: "regionDiscoveryGetRegionFromIMDS",
    RegionDiscoveryGetCurrentVersion: "regionDiscoveryGetCurrentVersion",
    AcquireTokenByCodeAsync: "acquireTokenByCodeAsync",
    GetEndpointMetadataFromNetwork: "getEndpointMetadataFromNetwork",
    GetCloudDiscoveryMetadataFromNetworkMeasurement:
      "getCloudDiscoveryMetadataFromNetworkMeasurement",
    HandleRedirectPromiseMeasurement: "handleRedirectPromise",
    HandleNativeRedirectPromiseMeasurement: "handleNativeRedirectPromise",
    UpdateCloudDiscoveryMetadataMeasurement:
      "updateCloudDiscoveryMetadataMeasurement",
    UsernamePasswordClientAcquireToken: "usernamePasswordClientAcquireToken",
    NativeMessageHandlerHandshake: "nativeMessageHandlerHandshake",
    NativeGenerateAuthResult: "nativeGenerateAuthResult",
    RemoveHiddenIframe: "removeHiddenIframe",
    ClearTokensAndKeysWithClaims: "clearTokensAndKeysWithClaims",
    CacheManagerGetRefreshToken: "cacheManagerGetRefreshToken",
    GeneratePkceCodes: "generatePkceCodes",
    GenerateCodeVerifier: "generateCodeVerifier",
    GenerateCodeChallengeFromVerifier: "generateCodeChallengeFromVerifier",
    Sha256Digest: "sha256Digest",
    GetRandomValues: "getRandomValues",
  },
  x0 = { NotStarted: 0, InProgress: 1, Completed: 2 };
/*! @azure/msal-common v14.9.0 2024-04-11 */ const Ur =
    (t, e, n, r, o) =>
    (...i) => {
      n.trace(`Executing function ${e}`);
      const a = r == null ? void 0 : r.startMeasurement(e, o);
      if (o) {
        const s = e + "CallCount";
        r == null || r.incrementFields({ [s]: 1 }, o);
      }
      try {
        const s = t(...i);
        return (
          a == null || a.end({ success: !0 }),
          n.trace(`Returning result from ${e}`),
          s
        );
      } catch (s) {
        n.trace(`Error occurred in ${e}`);
        try {
          n.trace(JSON.stringify(s));
        } catch {
          n.trace("Unable to print error message.");
        }
        throw (a == null || a.end({ success: !1 }, s), s);
      }
    },
  x =
    (t, e, n, r, o) =>
    (...i) => {
      n.trace(`Executing function ${e}`);
      const a = r == null ? void 0 : r.startMeasurement(e, o);
      if (o) {
        const s = e + "CallCount";
        r == null || r.incrementFields({ [s]: 1 }, o);
      }
      return (
        r == null || r.setPreQueueTime(e, o),
        t(...i)
          .then(
            (s) => (
              n.trace(`Returning result from ${e}`),
              a == null || a.end({ success: !0 }),
              s
            )
          )
          .catch((s) => {
            n.trace(`Error occurred in ${e}`);
            try {
              n.trace(JSON.stringify(s));
            } catch {
              n.trace("Unable to print error message.");
            }
            throw (a == null || a.end({ success: !1 }, s), s);
          })
      );
    };
/*! @azure/msal-common v14.9.0 2024-04-11 */ class fc {
  constructor(e, n, r, o) {
    (this.networkInterface = e),
      (this.logger = n),
      (this.performanceClient = r),
      (this.correlationId = o);
  }
  async detectRegion(e, n) {
    var o;
    (o = this.performanceClient) == null ||
      o.addQueueMeasurement(E.RegionDiscoveryDetectRegion, this.correlationId);
    let r = e;
    if (r) n.region_source = Kr.ENVIRONMENT_VARIABLE;
    else {
      const i = fc.IMDS_OPTIONS;
      try {
        const a = await x(
          this.getRegionFromIMDS.bind(this),
          E.RegionDiscoveryGetRegionFromIMDS,
          this.logger,
          this.performanceClient,
          this.correlationId
        )(T.IMDS_VERSION, i);
        if (
          (a.status === Sa.httpSuccess &&
            ((r = a.body), (n.region_source = Kr.IMDS)),
          a.status === Sa.httpBadRequest)
        ) {
          const s = await x(
            this.getCurrentVersion.bind(this),
            E.RegionDiscoveryGetCurrentVersion,
            this.logger,
            this.performanceClient,
            this.correlationId
          )(i);
          if (!s) return (n.region_source = Kr.FAILED_AUTO_DETECTION), null;
          const c = await x(
            this.getRegionFromIMDS.bind(this),
            E.RegionDiscoveryGetRegionFromIMDS,
            this.logger,
            this.performanceClient,
            this.correlationId
          )(s, i);
          c.status === Sa.httpSuccess &&
            ((r = c.body), (n.region_source = Kr.IMDS));
        }
      } catch {
        return (n.region_source = Kr.FAILED_AUTO_DETECTION), null;
      }
    }
    return r || (n.region_source = Kr.FAILED_AUTO_DETECTION), r || null;
  }
  async getRegionFromIMDS(e, n) {
    var r;
    return (
      (r = this.performanceClient) == null ||
        r.addQueueMeasurement(
          E.RegionDiscoveryGetRegionFromIMDS,
          this.correlationId
        ),
      this.networkInterface.sendGetRequestAsync(
        `${T.IMDS_ENDPOINT}?api-version=${e}&format=text`,
        n,
        T.IMDS_TIMEOUT
      )
    );
  }
  async getCurrentVersion(e) {
    var n;
    (n = this.performanceClient) == null ||
      n.addQueueMeasurement(
        E.RegionDiscoveryGetCurrentVersion,
        this.correlationId
      );
    try {
      const r = await this.networkInterface.sendGetRequestAsync(
        `${T.IMDS_ENDPOINT}?format=json`,
        e
      );
      return r.status === Sa.httpBadRequest &&
        r.body &&
        r.body["newest-versions"] &&
        r.body["newest-versions"].length > 0
        ? r.body["newest-versions"][0]
        : null;
    } catch {
      return null;
    }
  }
}
fc.IMDS_OPTIONS = { headers: { Metadata: "true" } };
/*! @azure/msal-common v14.9.0 2024-04-11 */ class it {
  constructor(e, n, r, o, i, a, s, c) {
    (this.canonicalAuthority = e),
      this._canonicalAuthority.validateAsUri(),
      (this.networkInterface = n),
      (this.cacheManager = r),
      (this.authorityOptions = o),
      (this.regionDiscoveryMetadata = {
        region_used: void 0,
        region_source: void 0,
        region_outcome: void 0,
      }),
      (this.logger = i),
      (this.performanceClient = s),
      (this.correlationId = a),
      (this.managedIdentity = c || !1),
      (this.regionDiscovery = new fc(
        n,
        this.logger,
        this.performanceClient,
        this.correlationId
      ));
  }
  getAuthorityType(e) {
    if (e.HostNameAndPort.endsWith(T.CIAM_AUTH_URL)) return Vt.Ciam;
    const n = e.PathSegments;
    if (n.length)
      switch (n[0].toLowerCase()) {
        case T.ADFS:
          return Vt.Adfs;
        case T.DSTS:
          return Vt.Dsts;
      }
    return Vt.Default;
  }
  get authorityType() {
    return this.getAuthorityType(this.canonicalAuthorityUrlComponents);
  }
  get protocolMode() {
    return this.authorityOptions.protocolMode;
  }
  get options() {
    return this.authorityOptions;
  }
  get canonicalAuthority() {
    return this._canonicalAuthority.urlString;
  }
  set canonicalAuthority(e) {
    (this._canonicalAuthority = new X(e)),
      this._canonicalAuthority.validateAsUri(),
      (this._canonicalAuthorityUrlComponents = null);
  }
  get canonicalAuthorityUrlComponents() {
    return (
      this._canonicalAuthorityUrlComponents ||
        (this._canonicalAuthorityUrlComponents =
          this._canonicalAuthority.getUrlComponents()),
      this._canonicalAuthorityUrlComponents
    );
  }
  get hostnameAndPort() {
    return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
  }
  get tenant() {
    return this.canonicalAuthorityUrlComponents.PathSegments[0];
  }
  get authorizationEndpoint() {
    if (this.discoveryComplete())
      return this.replacePath(this.metadata.authorization_endpoint);
    throw O(wn);
  }
  get tokenEndpoint() {
    if (this.discoveryComplete())
      return this.replacePath(this.metadata.token_endpoint);
    throw O(wn);
  }
  get deviceCodeEndpoint() {
    if (this.discoveryComplete())
      return this.replacePath(
        this.metadata.token_endpoint.replace("/token", "/devicecode")
      );
    throw O(wn);
  }
  get endSessionEndpoint() {
    if (this.discoveryComplete()) {
      if (!this.metadata.end_session_endpoint) throw O(Sv);
      return this.replacePath(this.metadata.end_session_endpoint);
    } else throw O(wn);
  }
  get selfSignedJwtAudience() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.issuer);
    throw O(wn);
  }
  get jwksUri() {
    if (this.discoveryComplete())
      return this.replacePath(this.metadata.jwks_uri);
    throw O(wn);
  }
  canReplaceTenant(e) {
    return (
      e.PathSegments.length === 1 &&
      !it.reservedTenantDomains.has(e.PathSegments[0]) &&
      this.getAuthorityType(e) === Vt.Default &&
      this.protocolMode === bn.AAD
    );
  }
  replaceTenant(e) {
    return e.replace(/{tenant}|{tenantid}/g, this.tenant);
  }
  replacePath(e) {
    let n = e;
    const o = new X(this.metadata.canonical_authority).getUrlComponents(),
      i = o.PathSegments;
    return (
      this.canonicalAuthorityUrlComponents.PathSegments.forEach((s, c) => {
        let l = i[c];
        if (c === 0 && this.canReplaceTenant(o)) {
          const u = new X(
            this.metadata.authorization_endpoint
          ).getUrlComponents().PathSegments[0];
          l !== u &&
            (this.logger.verbose(
              `Replacing tenant domain name ${l} with id ${u}`
            ),
            (l = u));
        }
        s !== l && (n = n.replace(`/${l}/`, `/${s}/`));
      }),
      this.replaceTenant(n)
    );
  }
  get defaultOpenIdConfigurationEndpoint() {
    const e = this.hostnameAndPort;
    return this.canonicalAuthority.endsWith("v2.0/") ||
      this.authorityType === Vt.Adfs ||
      (this.protocolMode !== bn.AAD &&
        !this.isAliasOfKnownMicrosoftAuthority(e))
      ? `${this.canonicalAuthority}.well-known/openid-configuration`
      : `${this.canonicalAuthority}v2.0/.well-known/openid-configuration`;
  }
  discoveryComplete() {
    return !!this.metadata;
  }
  async resolveEndpointsAsync() {
    var o, i;
    (o = this.performanceClient) == null ||
      o.addQueueMeasurement(
        E.AuthorityResolveEndpointsAsync,
        this.correlationId
      );
    const e = this.getCurrentMetadataEntity(),
      n = await x(
        this.updateCloudDiscoveryMetadata.bind(this),
        E.AuthorityUpdateCloudDiscoveryMetadata,
        this.logger,
        this.performanceClient,
        this.correlationId
      )(e);
    this.canonicalAuthority = this.canonicalAuthority.replace(
      this.hostnameAndPort,
      e.preferred_network
    );
    const r = await x(
      this.updateEndpointMetadata.bind(this),
      E.AuthorityUpdateEndpointMetadata,
      this.logger,
      this.performanceClient,
      this.correlationId
    )(e);
    this.updateCachedMetadata(e, n, { source: r }),
      (i = this.performanceClient) == null ||
        i.addFields(
          { cloudDiscoverySource: n, authorityEndpointSource: r },
          this.correlationId
        );
  }
  getCurrentMetadataEntity() {
    let e = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort);
    return (
      e ||
        (e = {
          aliases: [],
          preferred_cache: this.hostnameAndPort,
          preferred_network: this.hostnameAndPort,
          canonical_authority: this.canonicalAuthority,
          authorization_endpoint: "",
          token_endpoint: "",
          end_session_endpoint: "",
          issuer: "",
          aliasesFromNetwork: !1,
          endpointsFromNetwork: !1,
          expiresAt: sp(),
          jwks_uri: "",
        }),
      e
    );
  }
  updateCachedMetadata(e, n, r) {
    n !== wt.CACHE &&
      (r == null ? void 0 : r.source) !== wt.CACHE &&
      ((e.expiresAt = sp()), (e.canonical_authority = this.canonicalAuthority));
    const o = this.cacheManager.generateAuthorityMetadataCacheKey(
      e.preferred_cache
    );
    this.cacheManager.setAuthorityMetadata(o, e), (this.metadata = e);
  }
  async updateEndpointMetadata(e) {
    var o, i, a;
    (o = this.performanceClient) == null ||
      o.addQueueMeasurement(
        E.AuthorityUpdateEndpointMetadata,
        this.correlationId
      );
    const n = this.updateEndpointMetadataFromLocalSources(e);
    if (n) {
      if (
        n.source === wt.HARDCODED_VALUES &&
        (i = this.authorityOptions.azureRegionConfiguration) != null &&
        i.azureRegion &&
        n.metadata
      ) {
        const s = await x(
          this.updateMetadataWithRegionalInformation.bind(this),
          E.AuthorityUpdateMetadataWithRegionalInformation,
          this.logger,
          this.performanceClient,
          this.correlationId
        )(n.metadata);
        wa(e, s, !1), (e.canonical_authority = this.canonicalAuthority);
      }
      return n.source;
    }
    let r = await x(
      this.getEndpointMetadataFromNetwork.bind(this),
      E.AuthorityGetEndpointMetadataFromNetwork,
      this.logger,
      this.performanceClient,
      this.correlationId
    )();
    if (r)
      return (
        (a = this.authorityOptions.azureRegionConfiguration) != null &&
          a.azureRegion &&
          (r = await x(
            this.updateMetadataWithRegionalInformation.bind(this),
            E.AuthorityUpdateMetadataWithRegionalInformation,
            this.logger,
            this.performanceClient,
            this.correlationId
          )(r)),
        wa(e, r, !0),
        wt.NETWORK
      );
    throw O(sv, this.defaultOpenIdConfigurationEndpoint);
  }
  updateEndpointMetadataFromLocalSources(e) {
    this.logger.verbose(
      "Attempting to get endpoint metadata from authority configuration"
    );
    const n = this.getEndpointMetadataFromConfig();
    if (n)
      return (
        this.logger.verbose(
          "Found endpoint metadata in authority configuration"
        ),
        wa(e, n, !1),
        { source: wt.CONFIG }
      );
    if (
      (this.logger.verbose(
        "Did not find endpoint metadata in the config... Attempting to get endpoint metadata from the hardcoded values."
      ),
      this.authorityOptions.skipAuthorityMetadataCache)
    )
      this.logger.verbose(
        "Skipping hardcoded metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get endpoint metadata from the network metadata cache."
      );
    else {
      const o = this.getEndpointMetadataFromHardcodedValues();
      if (o) return wa(e, o, !1), { source: wt.HARDCODED_VALUES, metadata: o };
      this.logger.verbose(
        "Did not find endpoint metadata in hardcoded values... Attempting to get endpoint metadata from the network metadata cache."
      );
    }
    const r = cp(e);
    return this.isAuthoritySameType(e) && e.endpointsFromNetwork && !r
      ? (this.logger.verbose("Found endpoint metadata in the cache."),
        { source: wt.CACHE })
      : (r && this.logger.verbose("The metadata entity is expired."), null);
  }
  isAuthoritySameType(e) {
    return (
      new X(e.canonical_authority).getUrlComponents().PathSegments.length ===
      this.canonicalAuthorityUrlComponents.PathSegments.length
    );
  }
  getEndpointMetadataFromConfig() {
    if (this.authorityOptions.authorityMetadata)
      try {
        return JSON.parse(this.authorityOptions.authorityMetadata);
      } catch {
        throw de(Nv);
      }
    return null;
  }
  async getEndpointMetadataFromNetwork() {
    var r;
    (r = this.performanceClient) == null ||
      r.addQueueMeasurement(
        E.AuthorityGetEndpointMetadataFromNetwork,
        this.correlationId
      );
    const e = {},
      n = this.defaultOpenIdConfigurationEndpoint;
    this.logger.verbose(
      `Authority.getEndpointMetadataFromNetwork: attempting to retrieve OAuth endpoints from ${n}`
    );
    try {
      const o = await this.networkInterface.sendGetRequestAsync(n, e);
      return P0(o.body)
        ? o.body
        : (this.logger.verbose(
            "Authority.getEndpointMetadataFromNetwork: could not parse response as OpenID configuration"
          ),
          null);
    } catch (o) {
      return (
        this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: ${o}`),
        null
      );
    }
  }
  getEndpointMetadataFromHardcodedValues() {
    return this.hostnameAndPort in lp ? lp[this.hostnameAndPort] : null;
  }
  async updateMetadataWithRegionalInformation(e) {
    var r, o, i;
    (r = this.performanceClient) == null ||
      r.addQueueMeasurement(
        E.AuthorityUpdateMetadataWithRegionalInformation,
        this.correlationId
      );
    const n =
      (o = this.authorityOptions.azureRegionConfiguration) == null
        ? void 0
        : o.azureRegion;
    if (n) {
      if (n !== T.AZURE_REGION_AUTO_DISCOVER_FLAG)
        return (
          (this.regionDiscoveryMetadata.region_outcome =
            dl.CONFIGURED_NO_AUTO_DETECTION),
          (this.regionDiscoveryMetadata.region_used = n),
          it.replaceWithRegionalInformation(e, n)
        );
      const a = await x(
        this.regionDiscovery.detectRegion.bind(this.regionDiscovery),
        E.RegionDiscoveryDetectRegion,
        this.logger,
        this.performanceClient,
        this.correlationId
      )(
        (i = this.authorityOptions.azureRegionConfiguration) == null
          ? void 0
          : i.environmentRegion,
        this.regionDiscoveryMetadata
      );
      if (a)
        return (
          (this.regionDiscoveryMetadata.region_outcome =
            dl.AUTO_DETECTION_REQUESTED_SUCCESSFUL),
          (this.regionDiscoveryMetadata.region_used = a),
          it.replaceWithRegionalInformation(e, a)
        );
      this.regionDiscoveryMetadata.region_outcome =
        dl.AUTO_DETECTION_REQUESTED_FAILED;
    }
    return e;
  }
  async updateCloudDiscoveryMetadata(e) {
    var o;
    (o = this.performanceClient) == null ||
      o.addQueueMeasurement(
        E.AuthorityUpdateCloudDiscoveryMetadata,
        this.correlationId
      );
    const n = this.updateCloudDiscoveryMetadataFromLocalSources(e);
    if (n) return n;
    const r = await x(
      this.getCloudDiscoveryMetadataFromNetwork.bind(this),
      E.AuthorityGetCloudDiscoveryMetadataFromNetwork,
      this.logger,
      this.performanceClient,
      this.correlationId
    )();
    if (r) return hl(e, r, !0), wt.NETWORK;
    throw de(Mv);
  }
  updateCloudDiscoveryMetadataFromLocalSources(e) {
    this.logger.verbose(
      "Attempting to get cloud discovery metadata  from authority configuration"
    ),
      this.logger.verbosePii(
        `Known Authorities: ${
          this.authorityOptions.knownAuthorities || T.NOT_APPLICABLE
        }`
      ),
      this.logger.verbosePii(
        `Authority Metadata: ${
          this.authorityOptions.authorityMetadata || T.NOT_APPLICABLE
        }`
      ),
      this.logger.verbosePii(
        `Canonical Authority: ${e.canonical_authority || T.NOT_APPLICABLE}`
      );
    const n = this.getCloudDiscoveryMetadataFromConfig();
    if (n)
      return (
        this.logger.verbose(
          "Found cloud discovery metadata in authority configuration"
        ),
        hl(e, n, !1),
        wt.CONFIG
      );
    if (
      (this.logger.verbose(
        "Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the hardcoded values."
      ),
      this.options.skipAuthorityMetadataCache)
    )
      this.logger.verbose(
        "Skipping hardcoded cloud discovery metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get cloud discovery metadata from the network metadata cache."
      );
    else {
      const o = UT(this.hostnameAndPort);
      if (o)
        return (
          this.logger.verbose(
            "Found cloud discovery metadata from hardcoded values."
          ),
          hl(e, o, !1),
          wt.HARDCODED_VALUES
        );
      this.logger.verbose(
        "Did not find cloud discovery metadata in hardcoded values... Attempting to get cloud discovery metadata from the network metadata cache."
      );
    }
    const r = cp(e);
    return this.isAuthoritySameType(e) && e.aliasesFromNetwork && !r
      ? (this.logger.verbose("Found cloud discovery metadata in the cache."),
        wt.CACHE)
      : (r && this.logger.verbose("The metadata entity is expired."), null);
  }
  getCloudDiscoveryMetadataFromConfig() {
    if (this.authorityType === Vt.Ciam)
      return (
        this.logger.verbose(
          "CIAM authorities do not support cloud discovery metadata, generate the aliases from authority host."
        ),
        it.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)
      );
    if (this.authorityOptions.cloudDiscoveryMetadata) {
      this.logger.verbose(
        "The cloud discovery metadata has been provided as a network response, in the config."
      );
      try {
        this.logger.verbose(
          "Attempting to parse the cloud discovery metadata."
        );
        const e = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata),
          n = ys(e.metadata, this.hostnameAndPort);
        if ((this.logger.verbose("Parsed the cloud discovery metadata."), n))
          return (
            this.logger.verbose(
              "There is returnable metadata attached to the parsed cloud discovery metadata."
            ),
            n
          );
        this.logger.verbose(
          "There is no metadata attached to the parsed cloud discovery metadata."
        );
      } catch {
        throw (
          (this.logger.verbose(
            "Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error."
          ),
          de(eh))
        );
      }
    }
    return this.isInKnownAuthorities()
      ? (this.logger.verbose(
          "The host is included in knownAuthorities. Creating new cloud discovery metadata from the host."
        ),
        it.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort))
      : null;
  }
  async getCloudDiscoveryMetadataFromNetwork() {
    var o;
    (o = this.performanceClient) == null ||
      o.addQueueMeasurement(
        E.AuthorityGetCloudDiscoveryMetadataFromNetwork,
        this.correlationId
      );
    const e = `${T.AAD_INSTANCE_DISCOVERY_ENDPT}${this.canonicalAuthority}oauth2/v2.0/authorize`,
      n = {};
    let r = null;
    try {
      const i = await this.networkInterface.sendGetRequestAsync(e, n);
      let a, s;
      if (N0(i.body))
        (a = i.body),
          (s = a.metadata),
          this.logger.verbosePii(
            `tenant_discovery_endpoint is: ${a.tenant_discovery_endpoint}`
          );
      else if (M0(i.body)) {
        if (
          (this.logger.warning(
            `A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: ${i.status}`
          ),
          (a = i.body),
          a.error === T.INVALID_INSTANCE)
        )
          return (
            this.logger.error(
              "The CloudInstanceDiscoveryErrorResponse error is invalid_instance."
            ),
            null
          );
        this.logger.warning(
          `The CloudInstanceDiscoveryErrorResponse error is ${a.error}`
        ),
          this.logger.warning(
            `The CloudInstanceDiscoveryErrorResponse error description is ${a.error_description}`
          ),
          this.logger.warning(
            "Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"
          ),
          (s = []);
      } else
        return (
          this.logger.error(
            "AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"
          ),
          null
        );
      this.logger.verbose(
        "Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."
      ),
        (r = ys(s, this.hostnameAndPort));
    } catch (i) {
      if (i instanceof ke)
        this.logger
          .error(`There was a network error while attempting to get the cloud discovery instance metadata.
Error: ${i.errorCode}
Error Description: ${i.errorMessage}`);
      else {
        const a = i;
        this.logger
          .error(`A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.
Error: ${a.name}
Error Description: ${a.message}`);
      }
      return null;
    }
    return (
      r ||
        (this.logger.warning(
          "The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request."
        ),
        this.logger.verbose(
          "Creating custom Authority for custom domain scenario."
        ),
        (r = it.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort))),
      r
    );
  }
  isInKnownAuthorities() {
    return (
      this.authorityOptions.knownAuthorities.filter(
        (n) => n && X.getDomainFromUrl(n).toLowerCase() === this.hostnameAndPort
      ).length > 0
    );
  }
  static generateAuthority(e, n) {
    let r;
    if (n && n.azureCloudInstance !== Qd.None) {
      const o = n.tenant ? n.tenant : T.DEFAULT_COMMON_TENANT;
      r = `${n.azureCloudInstance}/${o}/`;
    }
    return r || e;
  }
  static createCloudDiscoveryMetadataFromHost(e) {
    return { preferred_network: e, preferred_cache: e, aliases: [e] };
  }
  getPreferredCache() {
    if (this.managedIdentity) return T.DEFAULT_AUTHORITY_HOST;
    if (this.discoveryComplete()) return this.metadata.preferred_cache;
    throw O(wn);
  }
  isAlias(e) {
    return this.metadata.aliases.indexOf(e) > -1;
  }
  isAliasOfKnownMicrosoftAuthority(e) {
    return Bv.has(e);
  }
  static isPublicCloudAuthority(e) {
    return T.KNOWN_PUBLIC_CLOUDS.indexOf(e) >= 0;
  }
  static buildRegionalAuthorityString(e, n, r) {
    const o = new X(e);
    o.validateAsUri();
    const i = o.getUrlComponents();
    let a = `${n}.${i.HostNameAndPort}`;
    this.isPublicCloudAuthority(i.HostNameAndPort) &&
      (a = `${n}.${T.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX}`);
    const s = X.constructAuthorityUriFromObject({
      ...o.getUrlComponents(),
      HostNameAndPort: a,
    }).urlString;
    return r ? `${s}?${r}` : s;
  }
  static replaceWithRegionalInformation(e, n) {
    const r = { ...e };
    return (
      (r.authorization_endpoint = it.buildRegionalAuthorityString(
        r.authorization_endpoint,
        n
      )),
      (r.token_endpoint = it.buildRegionalAuthorityString(r.token_endpoint, n)),
      r.end_session_endpoint &&
        (r.end_session_endpoint = it.buildRegionalAuthorityString(
          r.end_session_endpoint,
          n
        )),
      r
    );
  }
  static transformCIAMAuthority(e) {
    let n = e;
    const o = new X(e).getUrlComponents();
    if (
      o.PathSegments.length === 0 &&
      o.HostNameAndPort.endsWith(T.CIAM_AUTH_URL)
    ) {
      const i = o.HostNameAndPort.split(".")[0];
      n = `${n}${i}${T.AAD_TENANT_DOMAIN_SUFFIX}`;
    }
    return n;
  }
}
it.reservedTenantDomains = new Set([
  "{tenant}",
  "{tenantid}",
  Qn.COMMON,
  Qn.CONSUMERS,
  Qn.ORGANIZATIONS,
]);
function L0(t) {
  var o;
  const r =
    (o = new X(t).getUrlComponents().PathSegments.slice(-1)[0]) == null
      ? void 0
      : o.toLowerCase();
  switch (r) {
    case Qn.COMMON:
    case Qn.ORGANIZATIONS:
    case Qn.CONSUMERS:
      return;
    default:
      return r;
  }
}
function Vv(t) {
  return t.endsWith(T.FORWARD_SLASH) ? t : `${t}${T.FORWARD_SLASH}`;
}
function D0(t) {
  const e = t.cloudDiscoveryMetadata;
  let n;
  if (e)
    try {
      n = JSON.parse(e);
    } catch {
      throw de(eh);
    }
  return {
    canonicalAuthority: t.authority ? Vv(t.authority) : void 0,
    knownAuthorities: t.knownAuthorities,
    cloudDiscoveryMetadata: n,
  };
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ async function Kv(
  t,
  e,
  n,
  r,
  o,
  i,
  a
) {
  a == null ||
    a.addQueueMeasurement(E.AuthorityFactoryCreateDiscoveredInstance, i);
  const s = it.transformCIAMAuthority(Vv(t)),
    c = new it(s, e, n, r, o, i, a);
  try {
    return (
      await x(
        c.resolveEndpointsAsync.bind(c),
        E.AuthorityResolveEndpointsAsync,
        o,
        a,
        i
      )(),
      c
    );
  } catch {
    throw O(wn);
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ class ah {
  constructor(e, n) {
    (this.config = GT(e)),
      (this.logger = new ir(this.config.loggerOptions, wv, Yd)),
      (this.cryptoUtils = this.config.cryptoInterface),
      (this.cacheManager = this.config.storageInterface),
      (this.networkClient = this.config.networkInterface),
      (this.networkManager = new qT(this.networkClient, this.cacheManager)),
      (this.serverTelemetryManager = this.config.serverTelemetryManager),
      (this.authority = this.config.authOptions.authority),
      (this.performanceClient = n);
  }
  createTokenRequestHeaders(e) {
    const n = {};
    if (
      ((n[cn.CONTENT_TYPE] = T.URL_FORM_CONTENT_TYPE),
      !this.config.systemOptions.preventCorsPreflight && e)
    )
      switch (e.type) {
        case It.HOME_ACCOUNT_ID:
          try {
            const r = to(e.credential);
            n[cn.CCS_HEADER] = `Oid:${r.uid}@${r.utid}`;
          } catch (r) {
            this.logger.verbose(
              "Could not parse home account ID for CCS Header: " + r
            );
          }
          break;
        case It.UPN:
          n[cn.CCS_HEADER] = `UPN: ${e.credential}`;
          break;
      }
    return n;
  }
  async executePostToTokenEndpoint(e, n, r, o, i, a) {
    var c, l, u, d;
    a && ((c = this.performanceClient) == null || c.addQueueMeasurement(a, i));
    const s = await this.networkManager.sendPostRequest(o, e, {
      body: n,
      headers: r,
    });
    return (
      (d = this.performanceClient) == null ||
        d.addFields(
          {
            refreshTokenSize:
              ((l = s.body.refresh_token) == null ? void 0 : l.length) || 0,
            httpVerToken:
              ((u = s.headers) == null ? void 0 : u[cn.X_MS_HTTP_VERSION]) ||
              "",
          },
          i
        ),
      this.config.serverTelemetryManager &&
        s.status < 500 &&
        s.status !== 429 &&
        this.config.serverTelemetryManager.clearTelemetryCache(),
      s
    );
  }
  async updateAuthority(e, n) {
    var i;
    (i = this.performanceClient) == null ||
      i.addQueueMeasurement(E.UpdateTokenEndpointAuthority, n);
    const r = `https://${e}/${this.authority.tenant}/`,
      o = await Kv(
        r,
        this.networkClient,
        this.cacheManager,
        this.authority.options,
        this.logger,
        n,
        this.performanceClient
      );
    this.authority = o;
  }
  createTokenQueryParameters(e) {
    const n = new wi();
    return (
      e.tokenQueryParameters &&
        n.addExtraQueryParameters(e.tokenQueryParameters),
      n.createQueryString()
    );
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ const Cs = "no_tokens_found",
  Gv = "native_account_unavailable",
  sh = "refresh_token_expired",
  U0 = "interaction_required",
  F0 = "consent_required",
  H0 = "login_required",
  pc = "bad_token";
/*! @azure/msal-common v14.9.0 2024-04-11 */ const mp = [U0, F0, H0, pc],
  $0 = [
    "message_only",
    "additional_action",
    "basic_action",
    "user_password_expired",
    "consent_required",
    "bad_token",
  ],
  B0 = {
    [Cs]: "No refresh token found in the cache. Please sign-in.",
    [Gv]: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API.",
    [sh]: "Refresh token has expired.",
    [pc]: "Identity provider returned bad_token due to an expired or invalid refresh token. Please invoke an interactive API to resolve.",
  };
class Zt extends ke {
  constructor(e, n, r, o, i, a, s) {
    super(e, n, r),
      Object.setPrototypeOf(this, Zt.prototype),
      (this.timestamp = o || T.EMPTY_STRING),
      (this.traceId = i || T.EMPTY_STRING),
      (this.correlationId = a || T.EMPTY_STRING),
      (this.claims = s || T.EMPTY_STRING),
      (this.name = "InteractionRequiredAuthError");
  }
}
function gp(t, e, n) {
  const r = !!t && mp.indexOf(t) > -1,
    o = !!n && $0.indexOf(n) > -1,
    i = !!e && mp.some((a) => e.indexOf(a) > -1);
  return r || i || o;
}
function yu(t) {
  return new Zt(t, B0[t]);
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ class vo {
  constructor(e, n, r, o, i) {
    (this.account = e || null),
      (this.idToken = n || null),
      (this.accessToken = r || null),
      (this.refreshToken = o || null),
      (this.appMetadata = i || null);
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ class Qt {
  static setRequestState(e, n, r) {
    const o = Qt.generateLibraryState(e, r);
    return n ? `${o}${T.RESOURCE_DELIM}${n}` : o;
  }
  static generateLibraryState(e, n) {
    if (!e) throw O(fu);
    const r = { id: e.createNewGuid() };
    n && (r.meta = n);
    const o = JSON.stringify(r);
    return e.base64Encode(o);
  }
  static parseRequestState(e, n) {
    if (!e) throw O(fu);
    if (!n) throw O(ko);
    try {
      const r = n.split(T.RESOURCE_DELIM),
        o = r[0],
        i = r.length > 1 ? r.slice(1).join(T.RESOURCE_DELIM) : T.EMPTY_STRING,
        a = e.base64Decode(o),
        s = JSON.parse(a);
      return { userRequestState: i || T.EMPTY_STRING, libraryState: s };
    } catch {
      throw O(ko);
    }
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ const z0 = {
  SW: "sw",
  UHW: "uhw",
};
class bo {
  constructor(e, n) {
    (this.cryptoUtils = e), (this.performanceClient = n);
  }
  async generateCnf(e, n) {
    var i;
    (i = this.performanceClient) == null ||
      i.addQueueMeasurement(E.PopTokenGenerateCnf, e.correlationId);
    const r = await x(
        this.generateKid.bind(this),
        E.PopTokenGenerateCnf,
        n,
        this.performanceClient,
        e.correlationId
      )(e),
      o = this.cryptoUtils.base64Encode(JSON.stringify(r));
    return {
      kid: r.kid,
      reqCnfString: o,
      reqCnfHash: await this.cryptoUtils.hashString(o),
    };
  }
  async generateKid(e) {
    var r;
    return (
      (r = this.performanceClient) == null ||
        r.addQueueMeasurement(E.PopTokenGenerateKid, e.correlationId),
      { kid: await this.cryptoUtils.getPublicKeyThumbprint(e), xms_ksl: z0.SW }
    );
  }
  async signPopToken(e, n, r) {
    return this.signPayload(e, n, r);
  }
  async signPayload(e, n, r, o) {
    const {
        resourceRequestMethod: i,
        resourceRequestUri: a,
        shrClaims: s,
        shrNonce: c,
        shrOptions: l,
      } = r,
      u = a ? new X(a) : void 0,
      d = u == null ? void 0 : u.getUrlComponents();
    return this.cryptoUtils.signJwt(
      {
        at: e,
        ts: gn(),
        m: i == null ? void 0 : i.toUpperCase(),
        u: d == null ? void 0 : d.HostNameAndPort,
        nonce: c || this.cryptoUtils.createNewGuid(),
        p: d == null ? void 0 : d.AbsolutePath,
        q: d != null && d.QueryString ? [[], d.QueryString] : void 0,
        client_claims: s || void 0,
        ...o,
      },
      n,
      l,
      r.correlationId
    );
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ class j0 {
  constructor(e, n) {
    (this.cache = e), (this.hasChanged = n);
  }
  get cacheHasChanged() {
    return this.hasChanged;
  }
  get tokenCache() {
    return this.cache;
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ class kr {
  constructor(e, n, r, o, i, a, s) {
    (this.clientId = e),
      (this.cacheStorage = n),
      (this.cryptoObj = r),
      (this.logger = o),
      (this.serializableCache = i),
      (this.persistencePlugin = a),
      (this.performanceClient = s);
  }
  validateServerAuthorizationCodeResponse(e, n) {
    if (!e.state || !n)
      throw e.state ? O(ps, "Cached State") : O(ps, "Server State");
    let r, o;
    try {
      r = decodeURIComponent(e.state);
    } catch {
      throw O(ko, e.state);
    }
    try {
      o = decodeURIComponent(n);
    } catch {
      throw O(ko, e.state);
    }
    if (r !== o) throw O(lv);
    if (e.error || e.error_description || e.suberror)
      throw gp(e.error, e.error_description, e.suberror)
        ? new Zt(
            e.error || "",
            e.error_description,
            e.suberror,
            e.timestamp || "",
            e.trace_id || "",
            e.correlation_id || "",
            e.claims || ""
          )
        : new ar(e.error || "", e.error_description, e.suberror);
  }
  validateTokenResponse(e, n) {
    if (e.error || e.error_description || e.suberror) {
      const r = `${e.error_codes} - [${e.timestamp}]: ${e.error_description} - Correlation ID: ${e.correlation_id} - Trace ID: ${e.trace_id}`,
        o = new ar(e.error, r, e.suberror);
      if (
        n &&
        e.status &&
        e.status >= va.SERVER_ERROR_RANGE_START &&
        e.status <= va.SERVER_ERROR_RANGE_END
      ) {
        this.logger
          .warning(`executeTokenRequest:validateTokenResponse - AAD is currently unavailable and the access token is unable to be refreshed.
${o}`);
        return;
      } else if (
        n &&
        e.status &&
        e.status >= va.CLIENT_ERROR_RANGE_START &&
        e.status <= va.CLIENT_ERROR_RANGE_END
      ) {
        this.logger
          .warning(`executeTokenRequest:validateTokenResponse - AAD is currently available but is unable to refresh the access token.
${o}`);
        return;
      }
      throw gp(e.error, e.error_description, e.suberror)
        ? new Zt(
            e.error,
            e.error_description,
            e.suberror,
            e.timestamp || T.EMPTY_STRING,
            e.trace_id || T.EMPTY_STRING,
            e.correlation_id || T.EMPTY_STRING,
            e.claims || T.EMPTY_STRING
          )
        : o;
    }
  }
  async handleServerTokenResponse(e, n, r, o, i, a, s, c, l) {
    var g;
    (g = this.performanceClient) == null ||
      g.addQueueMeasurement(E.HandleServerTokenResponse, e.correlation_id);
    let u;
    if (e.id_token) {
      if (
        ((u = Dr(e.id_token || T.EMPTY_STRING, this.cryptoObj.base64Decode)),
        i && i.nonce && u.nonce !== i.nonce)
      )
        throw O(uv);
      if (o.maxAge || o.maxAge === 0) {
        const m = u.auth_time;
        if (!m) throw O(Kd);
        Ev(m, o.maxAge);
      }
    }
    this.homeAccountIdentifier = $e.generateHomeAccountId(
      e.client_info || T.EMPTY_STRING,
      n.authorityType,
      this.logger,
      this.cryptoObj,
      u
    );
    let d;
    i && i.state && (d = Qt.parseRequestState(this.cryptoObj, i.state)),
      (e.key_id = e.key_id || o.sshKid || void 0);
    const h = this.generateCacheRecord(e, n, r, o, u, a, i);
    let v;
    try {
      if (
        (this.persistencePlugin &&
          this.serializableCache &&
          (this.logger.verbose(
            "Persistence enabled, calling beforeCacheAccess"
          ),
          (v = new j0(this.serializableCache, !0)),
          await this.persistencePlugin.beforeCacheAccess(v)),
        s && !c && h.account)
      ) {
        const m = h.account.generateAccountKey();
        if (!this.cacheStorage.getAccount(m, this.logger))
          return (
            this.logger.warning(
              "Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"
            ),
            await kr.generateAuthenticationResult(
              this.cryptoObj,
              n,
              h,
              !1,
              o,
              u,
              d,
              void 0,
              l
            )
          );
      }
      await this.cacheStorage.saveCacheRecord(
        h,
        o.storeInCache,
        o.correlationId
      );
    } finally {
      this.persistencePlugin &&
        this.serializableCache &&
        v &&
        (this.logger.verbose("Persistence enabled, calling afterCacheAccess"),
        await this.persistencePlugin.afterCacheAccess(v));
    }
    return kr.generateAuthenticationResult(
      this.cryptoObj,
      n,
      h,
      !1,
      o,
      u,
      d,
      e,
      l
    );
  }
  generateCacheRecord(e, n, r, o, i, a, s) {
    const c = n.getPreferredCache();
    if (!c) throw O(Wd);
    const l = Fv(i);
    let u, d;
    e.id_token &&
      i &&
      ((u = uc(
        this.homeAccountIdentifier,
        c,
        e.id_token,
        this.clientId,
        l || ""
      )),
      (d = ch(
        this.cacheStorage,
        n,
        this.homeAccountIdentifier,
        i,
        this.cryptoObj.base64Decode,
        e.client_info,
        c,
        l,
        s,
        void 0,
        this.logger
      )));
    let h = null;
    if (e.access_token) {
      const m = e.scope ? Ne.fromString(e.scope) : new Ne(o.scopes || []),
        C =
          (typeof e.expires_in == "string"
            ? parseInt(e.expires_in, 10)
            : e.expires_in) || 0,
        f =
          (typeof e.ext_expires_in == "string"
            ? parseInt(e.ext_expires_in, 10)
            : e.ext_expires_in) || 0,
        p =
          (typeof e.refresh_in == "string"
            ? parseInt(e.refresh_in, 10)
            : e.refresh_in) || void 0,
        y = r + C,
        w = y + f,
        I = p && p > 0 ? r + p : void 0;
      h = dc(
        this.homeAccountIdentifier,
        c,
        e.access_token,
        this.clientId,
        l || n.tenant || "",
        m.printScopes(),
        y,
        w,
        this.cryptoObj.base64Decode,
        I,
        e.token_type,
        a,
        e.key_id,
        o.claims,
        o.requestedClaimsHash
      );
    }
    let v = null;
    if (e.refresh_token) {
      let m;
      if (e.refresh_token_expires_in) {
        const C =
          typeof e.refresh_token_expires_in == "string"
            ? parseInt(e.refresh_token_expires_in, 10)
            : e.refresh_token_expires_in;
        m = r + C;
      }
      v = Tv(
        this.homeAccountIdentifier,
        c,
        e.refresh_token,
        this.clientId,
        e.foci,
        a,
        m
      );
    }
    let g = null;
    return (
      e.foci &&
        (g = { clientId: this.clientId, environment: c, familyId: e.foci }),
      new vo(d, u, h, v, g)
    );
  }
  static async generateAuthenticationResult(e, n, r, o, i, a, s, c, l) {
    var y, w, I, k, A;
    let u = T.EMPTY_STRING,
      d = [],
      h = null,
      v,
      g,
      m = T.EMPTY_STRING;
    if (r.accessToken) {
      if (r.accessToken.tokenType === le.POP) {
        const R = new bo(e),
          { secret: j, keyId: U } = r.accessToken;
        if (!U) throw O(qd);
        u = await R.signPopToken(j, U, i);
      } else u = r.accessToken.secret;
      (d = Ne.fromString(r.accessToken.target).asArray()),
        (h = new Date(Number(r.accessToken.expiresOn) * 1e3)),
        (v = new Date(Number(r.accessToken.extendedExpiresOn) * 1e3)),
        r.accessToken.refreshOn &&
          (g = new Date(Number(r.accessToken.refreshOn) * 1e3));
    }
    r.appMetadata && (m = r.appMetadata.familyId === Ci ? Ci : "");
    const C =
        (a == null ? void 0 : a.oid) || (a == null ? void 0 : a.sub) || "",
      f = (a == null ? void 0 : a.tid) || "";
    c != null &&
      c.spa_accountid &&
      r.account &&
      (r.account.nativeAccountId = c == null ? void 0 : c.spa_accountid);
    const p = r.account
      ? rh(
          r.account.getAccountInfo(),
          void 0,
          a,
          (y = r.idToken) == null ? void 0 : y.secret
        )
      : null;
    return {
      authority: n.canonicalAuthority,
      uniqueId: C,
      tenantId: f,
      scopes: d,
      account: p,
      idToken:
        ((w = r == null ? void 0 : r.idToken) == null ? void 0 : w.secret) ||
        "",
      idTokenClaims: a || {},
      accessToken: u,
      fromCache: o,
      expiresOn: h,
      extExpiresOn: v,
      refreshOn: g,
      correlationId: i.correlationId,
      requestId: l || T.EMPTY_STRING,
      familyId: m,
      tokenType:
        ((I = r.accessToken) == null ? void 0 : I.tokenType) || T.EMPTY_STRING,
      state: s ? s.userRequestState : T.EMPTY_STRING,
      cloudGraphHostName:
        ((k = r.account) == null ? void 0 : k.cloudGraphHostName) ||
        T.EMPTY_STRING,
      msGraphHost:
        ((A = r.account) == null ? void 0 : A.msGraphHost) || T.EMPTY_STRING,
      code: c == null ? void 0 : c.spa_code,
      fromNativeBroker: !1,
    };
  }
}
function ch(t, e, n, r, o, i, a, s, c, l, u) {
  u == null || u.verbose("setCachedAccount called");
  const h = t.getAccountKeys().find((C) => C.startsWith(n));
  let v = null;
  h && (v = t.getAccount(h, u));
  const g =
      v ||
      $e.createAccount(
        {
          homeAccountId: n,
          idTokenClaims: r,
          clientInfo: i,
          environment: a,
          cloudGraphHostName: c == null ? void 0 : c.cloud_graph_host_name,
          msGraphHost: c == null ? void 0 : c.msgraph_host,
          nativeAccountId: l,
        },
        e,
        o
      ),
    m = g.tenantProfiles || [];
  if (s && !m.find((C) => C.tenantId === s)) {
    const C = nh(n, r);
    m.push(C);
  }
  return (g.tenantProfiles = m), g;
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ class Wv extends ah {
  constructor(e, n) {
    var r;
    super(e, n),
      (this.includeRedirectUri = !0),
      (this.oidcDefaultScopes =
        (r = this.config.authOptions.authority.options.OIDCOptions) == null
          ? void 0
          : r.defaultScopes);
  }
  async getAuthCodeUrl(e) {
    var r;
    (r = this.performanceClient) == null ||
      r.addQueueMeasurement(E.GetAuthCodeUrl, e.correlationId);
    const n = await x(
      this.createAuthCodeUrlQueryString.bind(this),
      E.AuthClientCreateQueryString,
      this.logger,
      this.performanceClient,
      e.correlationId
    )(e);
    return X.appendQueryString(this.authority.authorizationEndpoint, n);
  }
  async acquireToken(e, n) {
    var s, c;
    if (
      ((s = this.performanceClient) == null ||
        s.addQueueMeasurement(E.AuthClientAcquireToken, e.correlationId),
      !e.code)
    )
      throw O(fv);
    const r = gn(),
      o = await x(
        this.executeTokenRequest.bind(this),
        E.AuthClientExecuteTokenRequest,
        this.logger,
        this.performanceClient,
        e.correlationId
      )(this.authority, e),
      i = (c = o.headers) == null ? void 0 : c[cn.X_MS_REQUEST_ID],
      a = new kr(
        this.config.authOptions.clientId,
        this.cacheManager,
        this.cryptoUtils,
        this.logger,
        this.config.serializableCache,
        this.config.persistencePlugin,
        this.performanceClient
      );
    return (
      a.validateTokenResponse(o.body),
      x(
        a.handleServerTokenResponse.bind(a),
        E.HandleServerTokenResponse,
        this.logger,
        this.performanceClient,
        e.correlationId
      )(o.body, this.authority, r, e, n, void 0, void 0, void 0, i)
    );
  }
  handleFragmentResponse(e, n) {
    if (
      (new kr(
        this.config.authOptions.clientId,
        this.cacheManager,
        this.cryptoUtils,
        this.logger,
        null,
        null
      ).validateServerAuthorizationCodeResponse(e, n),
      !e.code)
    )
      throw O(yv);
    return e;
  }
  getLogoutUri(e) {
    if (!e) throw de(Ov);
    const n = this.createLogoutUrlQueryString(e);
    return X.appendQueryString(this.authority.endSessionEndpoint, n);
  }
  async executeTokenRequest(e, n) {
    var l, u;
    (l = this.performanceClient) == null ||
      l.addQueueMeasurement(E.AuthClientExecuteTokenRequest, n.correlationId);
    const r = this.createTokenQueryParameters(n),
      o = X.appendQueryString(e.tokenEndpoint, r),
      i = await x(
        this.createTokenRequestBody.bind(this),
        E.AuthClientCreateTokenRequestBody,
        this.logger,
        this.performanceClient,
        n.correlationId
      )(n);
    let a;
    if (n.clientInfo)
      try {
        const d = gs(n.clientInfo, this.cryptoUtils.base64Decode);
        a = {
          credential: `${d.uid}${at.CLIENT_INFO_SEPARATOR}${d.utid}`,
          type: It.HOME_ACCOUNT_ID,
        };
      } catch (d) {
        this.logger.verbose("Could not parse client info for CCS Header: " + d);
      }
    const s = this.createTokenRequestHeaders(a || n.ccsCredential),
      c = {
        clientId:
          ((u = n.tokenBodyParameters) == null ? void 0 : u.clientId) ||
          this.config.authOptions.clientId,
        authority: e.canonicalAuthority,
        scopes: n.scopes,
        claims: n.claims,
        authenticationScheme: n.authenticationScheme,
        resourceRequestMethod: n.resourceRequestMethod,
        resourceRequestUri: n.resourceRequestUri,
        shrClaims: n.shrClaims,
        sshKid: n.sshKid,
      };
    return x(
      this.executePostToTokenEndpoint.bind(this),
      E.AuthorizationCodeClientExecutePostToTokenEndpoint,
      this.logger,
      this.performanceClient,
      n.correlationId
    )(
      o,
      i,
      s,
      c,
      n.correlationId,
      E.AuthorizationCodeClientExecutePostToTokenEndpoint
    );
  }
  async createTokenRequestBody(e) {
    var i, a;
    (i = this.performanceClient) == null ||
      i.addQueueMeasurement(
        E.AuthClientCreateTokenRequestBody,
        e.correlationId
      );
    const n = new wi();
    if (
      (n.addClientId(
        ((a = e.tokenBodyParameters) == null ? void 0 : a[Ro]) ||
          this.config.authOptions.clientId
      ),
      this.includeRedirectUri
        ? n.addRedirectUri(e.redirectUri)
        : mr.validateRedirectUri(e.redirectUri),
      n.addScopes(e.scopes, !0, this.oidcDefaultScopes),
      n.addAuthorizationCode(e.code),
      n.addLibraryInfo(this.config.libraryInfo),
      n.addApplicationTelemetry(this.config.telemetry.application),
      n.addThrottling(),
      this.serverTelemetryManager &&
        !vu(this.config) &&
        n.addServerTelemetry(this.serverTelemetryManager),
      e.codeVerifier && n.addCodeVerifier(e.codeVerifier),
      this.config.clientCredentials.clientSecret &&
        n.addClientSecret(this.config.clientCredentials.clientSecret),
      this.config.clientCredentials.clientAssertion)
    ) {
      const s = this.config.clientCredentials.clientAssertion;
      n.addClientAssertion(s.assertion),
        n.addClientAssertionType(s.assertionType);
    }
    if (
      (n.addGrantType(nv.AUTHORIZATION_CODE_GRANT),
      n.addClientInfo(),
      e.authenticationScheme === le.POP)
    ) {
      const s = new bo(this.cryptoUtils, this.performanceClient),
        c = await x(
          s.generateCnf.bind(s),
          E.PopTokenGenerateCnf,
          this.logger,
          this.performanceClient,
          e.correlationId
        )(e, this.logger);
      n.addPopToken(c.reqCnfString);
    } else if (e.authenticationScheme === le.SSH)
      if (e.sshJwk) n.addSshJwk(e.sshJwk);
      else throw de(hc);
    const r = e.correlationId || this.config.cryptoInterface.createNewGuid();
    n.addCorrelationId(r),
      (!Yt.isEmptyObj(e.claims) ||
        (this.config.authOptions.clientCapabilities &&
          this.config.authOptions.clientCapabilities.length > 0)) &&
        n.addClaims(e.claims, this.config.authOptions.clientCapabilities);
    let o;
    if (e.clientInfo)
      try {
        const s = gs(e.clientInfo, this.cryptoUtils.base64Decode);
        o = {
          credential: `${s.uid}${at.CLIENT_INFO_SEPARATOR}${s.utid}`,
          type: It.HOME_ACCOUNT_ID,
        };
      } catch (s) {
        this.logger.verbose("Could not parse client info for CCS Header: " + s);
      }
    else o = e.ccsCredential;
    if (this.config.systemOptions.preventCorsPreflight && o)
      switch (o.type) {
        case It.HOME_ACCOUNT_ID:
          try {
            const s = to(o.credential);
            n.addCcsOid(s);
          } catch (s) {
            this.logger.verbose(
              "Could not parse home account ID for CCS Header: " + s
            );
          }
          break;
        case It.UPN:
          n.addCcsUpn(o.credential);
          break;
      }
    return (
      e.tokenBodyParameters && n.addExtraQueryParameters(e.tokenBodyParameters),
      e.enableSpaAuthorizationCode &&
        (!e.tokenBodyParameters || !e.tokenBodyParameters[pp]) &&
        n.addExtraQueryParameters({ [pp]: "1" }),
      n.createQueryString()
    );
  }
  async createAuthCodeUrlQueryString(e) {
    var i, a;
    (i = this.performanceClient) == null ||
      i.addQueueMeasurement(E.AuthClientCreateQueryString, e.correlationId);
    const n = new wi();
    n.addClientId(
      ((a = e.extraQueryParameters) == null ? void 0 : a[Ro]) ||
        this.config.authOptions.clientId
    );
    const r = [...(e.scopes || []), ...(e.extraScopesToConsent || [])];
    n.addScopes(r, !0, this.oidcDefaultScopes), n.addRedirectUri(e.redirectUri);
    const o = e.correlationId || this.config.cryptoInterface.createNewGuid();
    if (
      (n.addCorrelationId(o),
      n.addResponseMode(e.responseMode),
      n.addResponseTypeCode(),
      n.addLibraryInfo(this.config.libraryInfo),
      vu(this.config) ||
        n.addApplicationTelemetry(this.config.telemetry.application),
      n.addClientInfo(),
      e.codeChallenge &&
        e.codeChallengeMethod &&
        n.addCodeChallengeParams(e.codeChallenge, e.codeChallengeMethod),
      e.prompt && n.addPrompt(e.prompt),
      e.domainHint && n.addDomainHint(e.domainHint),
      e.prompt !== We.SELECT_ACCOUNT)
    )
      if (e.sid && e.prompt === We.NONE)
        this.logger.verbose(
          "createAuthCodeUrlQueryString: Prompt is none, adding sid from request"
        ),
          n.addSid(e.sid);
      else if (e.account) {
        const s = this.extractAccountSid(e.account);
        let c = this.extractLoginHint(e.account);
        if (
          (c &&
            e.domainHint &&
            (this.logger.warning(
              'AuthorizationCodeClient.createAuthCodeUrlQueryString: "domainHint" param is set, skipping opaque "login_hint" claim. Please consider not passing domainHint'
            ),
            (c = null)),
          c)
        ) {
          this.logger.verbose(
            "createAuthCodeUrlQueryString: login_hint claim present on account"
          ),
            n.addLoginHint(c);
          try {
            const l = to(e.account.homeAccountId);
            n.addCcsOid(l);
          } catch {
            this.logger.verbose(
              "createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header"
            );
          }
        } else if (s && e.prompt === We.NONE) {
          this.logger.verbose(
            "createAuthCodeUrlQueryString: Prompt is none, adding sid from account"
          ),
            n.addSid(s);
          try {
            const l = to(e.account.homeAccountId);
            n.addCcsOid(l);
          } catch {
            this.logger.verbose(
              "createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header"
            );
          }
        } else if (e.loginHint)
          this.logger.verbose(
            "createAuthCodeUrlQueryString: Adding login_hint from request"
          ),
            n.addLoginHint(e.loginHint),
            n.addCcsUpn(e.loginHint);
        else if (e.account.username) {
          this.logger.verbose(
            "createAuthCodeUrlQueryString: Adding login_hint from account"
          ),
            n.addLoginHint(e.account.username);
          try {
            const l = to(e.account.homeAccountId);
            n.addCcsOid(l);
          } catch {
            this.logger.verbose(
              "createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header"
            );
          }
        }
      } else
        e.loginHint &&
          (this.logger.verbose(
            "createAuthCodeUrlQueryString: No account, adding login_hint from request"
          ),
          n.addLoginHint(e.loginHint),
          n.addCcsUpn(e.loginHint));
    else
      this.logger.verbose(
        "createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints"
      );
    if (
      (e.nonce && n.addNonce(e.nonce),
      e.state && n.addState(e.state),
      (e.claims ||
        (this.config.authOptions.clientCapabilities &&
          this.config.authOptions.clientCapabilities.length > 0)) &&
        n.addClaims(e.claims, this.config.authOptions.clientCapabilities),
      e.extraQueryParameters &&
        n.addExtraQueryParameters(e.extraQueryParameters),
      e.nativeBroker &&
        (n.addNativeBroker(), e.authenticationScheme === le.POP))
    ) {
      const s = new bo(this.cryptoUtils),
        c = await x(
          s.generateCnf.bind(s),
          E.PopTokenGenerateCnf,
          this.logger,
          this.performanceClient,
          e.correlationId
        )(e, this.logger);
      n.addPopToken(c.reqCnfHash);
    }
    return n.createQueryString();
  }
  createLogoutUrlQueryString(e) {
    const n = new wi();
    return (
      e.postLogoutRedirectUri &&
        n.addPostLogoutRedirectUri(e.postLogoutRedirectUri),
      e.correlationId && n.addCorrelationId(e.correlationId),
      e.idTokenHint && n.addIdTokenHint(e.idTokenHint),
      e.state && n.addState(e.state),
      e.logoutHint && n.addLogoutHint(e.logoutHint),
      e.extraQueryParameters &&
        n.addExtraQueryParameters(e.extraQueryParameters),
      n.createQueryString()
    );
  }
  extractAccountSid(e) {
    var n;
    return ((n = e.idTokenClaims) == null ? void 0 : n.sid) || null;
  }
  extractLoginHint(e) {
    var n;
    return ((n = e.idTokenClaims) == null ? void 0 : n.login_hint) || null;
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ const V0 = 300;
class Cu extends ah {
  constructor(e, n) {
    super(e, n);
  }
  async acquireToken(e) {
    var a, s;
    (a = this.performanceClient) == null ||
      a.addQueueMeasurement(E.RefreshTokenClientAcquireToken, e.correlationId);
    const n = gn(),
      r = await x(
        this.executeTokenRequest.bind(this),
        E.RefreshTokenClientExecuteTokenRequest,
        this.logger,
        this.performanceClient,
        e.correlationId
      )(e, this.authority),
      o = (s = r.headers) == null ? void 0 : s[cn.X_MS_REQUEST_ID],
      i = new kr(
        this.config.authOptions.clientId,
        this.cacheManager,
        this.cryptoUtils,
        this.logger,
        this.config.serializableCache,
        this.config.persistencePlugin
      );
    return (
      i.validateTokenResponse(r.body),
      x(
        i.handleServerTokenResponse.bind(i),
        E.HandleServerTokenResponse,
        this.logger,
        this.performanceClient,
        e.correlationId
      )(r.body, this.authority, n, e, void 0, void 0, !0, e.forceCache, o)
    );
  }
  async acquireTokenByRefreshToken(e) {
    var r;
    if (!e) throw de(bv);
    if (
      ((r = this.performanceClient) == null ||
        r.addQueueMeasurement(
          E.RefreshTokenClientAcquireTokenByRefreshToken,
          e.correlationId
        ),
      !e.account)
    )
      throw O(Gd);
    if (this.cacheManager.isAppMetadataFOCI(e.account.environment))
      try {
        return await x(
          this.acquireTokenWithCachedRefreshToken.bind(this),
          E.RefreshTokenClientAcquireTokenWithCachedRefreshToken,
          this.logger,
          this.performanceClient,
          e.correlationId
        )(e, !0);
      } catch (o) {
        const i = o instanceof Zt && o.errorCode === Cs,
          a =
            o instanceof ar &&
            o.errorCode === ep.INVALID_GRANT_ERROR &&
            o.subError === ep.CLIENT_MISMATCH_ERROR;
        if (i || a)
          return x(
            this.acquireTokenWithCachedRefreshToken.bind(this),
            E.RefreshTokenClientAcquireTokenWithCachedRefreshToken,
            this.logger,
            this.performanceClient,
            e.correlationId
          )(e, !1);
        throw o;
      }
    return x(
      this.acquireTokenWithCachedRefreshToken.bind(this),
      E.RefreshTokenClientAcquireTokenWithCachedRefreshToken,
      this.logger,
      this.performanceClient,
      e.correlationId
    )(e, !1);
  }
  async acquireTokenWithCachedRefreshToken(e, n) {
    var i;
    (i = this.performanceClient) == null ||
      i.addQueueMeasurement(
        E.RefreshTokenClientAcquireTokenWithCachedRefreshToken,
        e.correlationId
      );
    const r = Ur(
      this.cacheManager.getRefreshToken.bind(this.cacheManager),
      E.CacheManagerGetRefreshToken,
      this.logger,
      this.performanceClient,
      e.correlationId
    )(e.account, n, void 0, this.performanceClient, e.correlationId);
    if (!r) throw yu(Cs);
    if (
      r.expiresOn &&
      mu(r.expiresOn, e.refreshTokenExpirationOffsetSeconds || V0)
    )
      throw yu(sh);
    const o = {
      ...e,
      refreshToken: r.secret,
      authenticationScheme: e.authenticationScheme || le.BEARER,
      ccsCredential: {
        credential: e.account.homeAccountId,
        type: It.HOME_ACCOUNT_ID,
      },
    };
    try {
      return await x(
        this.acquireToken.bind(this),
        E.RefreshTokenClientAcquireToken,
        this.logger,
        this.performanceClient,
        e.correlationId
      )(o);
    } catch (a) {
      if (a instanceof Zt && a.subError === pc) {
        this.logger.verbose(
          "acquireTokenWithRefreshToken: bad refresh token, removing from cache"
        );
        const s = eo(r);
        this.cacheManager.removeRefreshToken(s);
      }
      throw a;
    }
  }
  async executeTokenRequest(e, n) {
    var c, l;
    (c = this.performanceClient) == null ||
      c.addQueueMeasurement(
        E.RefreshTokenClientExecuteTokenRequest,
        e.correlationId
      );
    const r = this.createTokenQueryParameters(e),
      o = X.appendQueryString(n.tokenEndpoint, r),
      i = await x(
        this.createTokenRequestBody.bind(this),
        E.RefreshTokenClientCreateTokenRequestBody,
        this.logger,
        this.performanceClient,
        e.correlationId
      )(e),
      a = this.createTokenRequestHeaders(e.ccsCredential),
      s = {
        clientId:
          ((l = e.tokenBodyParameters) == null ? void 0 : l.clientId) ||
          this.config.authOptions.clientId,
        authority: n.canonicalAuthority,
        scopes: e.scopes,
        claims: e.claims,
        authenticationScheme: e.authenticationScheme,
        resourceRequestMethod: e.resourceRequestMethod,
        resourceRequestUri: e.resourceRequestUri,
        shrClaims: e.shrClaims,
        sshKid: e.sshKid,
      };
    return x(
      this.executePostToTokenEndpoint.bind(this),
      E.RefreshTokenClientExecutePostToTokenEndpoint,
      this.logger,
      this.performanceClient,
      e.correlationId
    )(
      o,
      i,
      a,
      s,
      e.correlationId,
      E.RefreshTokenClientExecutePostToTokenEndpoint
    );
  }
  async createTokenRequestBody(e) {
    var o, i, a;
    (o = this.performanceClient) == null ||
      o.addQueueMeasurement(
        E.RefreshTokenClientCreateTokenRequestBody,
        e.correlationId
      );
    const n = e.correlationId,
      r = new wi();
    if (
      (r.addClientId(
        ((i = e.tokenBodyParameters) == null ? void 0 : i[Ro]) ||
          this.config.authOptions.clientId
      ),
      e.redirectUri && r.addRedirectUri(e.redirectUri),
      r.addScopes(
        e.scopes,
        !0,
        (a = this.config.authOptions.authority.options.OIDCOptions) == null
          ? void 0
          : a.defaultScopes
      ),
      r.addGrantType(nv.REFRESH_TOKEN_GRANT),
      r.addClientInfo(),
      r.addLibraryInfo(this.config.libraryInfo),
      r.addApplicationTelemetry(this.config.telemetry.application),
      r.addThrottling(),
      this.serverTelemetryManager &&
        !vu(this.config) &&
        r.addServerTelemetry(this.serverTelemetryManager),
      r.addCorrelationId(n),
      r.addRefreshToken(e.refreshToken),
      this.config.clientCredentials.clientSecret &&
        r.addClientSecret(this.config.clientCredentials.clientSecret),
      this.config.clientCredentials.clientAssertion)
    ) {
      const s = this.config.clientCredentials.clientAssertion;
      r.addClientAssertion(s.assertion),
        r.addClientAssertionType(s.assertionType);
    }
    if (e.authenticationScheme === le.POP) {
      const s = new bo(this.cryptoUtils, this.performanceClient),
        c = await x(
          s.generateCnf.bind(s),
          E.PopTokenGenerateCnf,
          this.logger,
          this.performanceClient,
          e.correlationId
        )(e, this.logger);
      r.addPopToken(c.reqCnfString);
    } else if (e.authenticationScheme === le.SSH)
      if (e.sshJwk) r.addSshJwk(e.sshJwk);
      else throw de(hc);
    if (
      ((!Yt.isEmptyObj(e.claims) ||
        (this.config.authOptions.clientCapabilities &&
          this.config.authOptions.clientCapabilities.length > 0)) &&
        r.addClaims(e.claims, this.config.authOptions.clientCapabilities),
      this.config.systemOptions.preventCorsPreflight && e.ccsCredential)
    )
      switch (e.ccsCredential.type) {
        case It.HOME_ACCOUNT_ID:
          try {
            const s = to(e.ccsCredential.credential);
            r.addCcsOid(s);
          } catch (s) {
            this.logger.verbose(
              "Could not parse home account ID for CCS Header: " + s
            );
          }
          break;
        case It.UPN:
          r.addCcsUpn(e.ccsCredential.credential);
          break;
      }
    return (
      e.tokenBodyParameters && r.addExtraQueryParameters(e.tokenBodyParameters),
      r.createQueryString()
    );
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ class K0 extends ah {
  constructor(e, n) {
    super(e, n);
  }
  async acquireToken(e) {
    var n;
    try {
      const [r, o] = await this.acquireCachedToken({
        ...e,
        scopes: (n = e.scopes) != null && n.length ? e.scopes : [...Bo],
      });
      return (
        o === zn.PROACTIVELY_REFRESHED &&
          (this.logger.info(
            "SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed."
          ),
          new Cu(this.config, this.performanceClient)
            .acquireTokenByRefreshToken(e)
            .catch(() => {})),
        r
      );
    } catch (r) {
      if (r instanceof lc && r.errorCode === An)
        return new Cu(
          this.config,
          this.performanceClient
        ).acquireTokenByRefreshToken(e);
      throw r;
    }
  }
  async acquireCachedToken(e) {
    var c;
    (c = this.performanceClient) == null ||
      c.addQueueMeasurement(
        E.SilentFlowClientAcquireCachedToken,
        e.correlationId
      );
    let n = zn.NOT_APPLICABLE;
    if (
      e.forceRefresh ||
      (!this.config.cacheOptions.claimsBasedCachingEnabled &&
        !Yt.isEmptyObj(e.claims))
    )
      throw (
        (this.setCacheOutcome(zn.FORCE_REFRESH_OR_CLAIMS, e.correlationId),
        O(An))
      );
    if (!e.account) throw O(Gd);
    const r = e.account.tenantId || L0(e.authority),
      o = this.cacheManager.getTokenKeys(),
      i = this.cacheManager.getAccessToken(
        e.account,
        e,
        o,
        r,
        this.performanceClient,
        e.correlationId
      );
    if (i) {
      if (
        wT(i.cachedAt) ||
        mu(i.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)
      )
        throw (
          (this.setCacheOutcome(
            zn.CACHED_ACCESS_TOKEN_EXPIRED,
            e.correlationId
          ),
          O(An))
        );
      i.refreshOn && mu(i.refreshOn, 0) && (n = zn.PROACTIVELY_REFRESHED);
    } else
      throw (
        (this.setCacheOutcome(zn.NO_CACHED_ACCESS_TOKEN, e.correlationId),
        O(An))
      );
    const a = e.authority || this.authority.getPreferredCache(),
      s = {
        account: this.cacheManager.readAccountFromCache(e.account),
        accessToken: i,
        idToken: this.cacheManager.getIdToken(
          e.account,
          o,
          r,
          this.performanceClient,
          e.correlationId
        ),
        refreshToken: null,
        appMetadata: this.cacheManager.readAppMetadataFromCache(a),
      };
    return (
      this.setCacheOutcome(n, e.correlationId),
      this.config.serverTelemetryManager &&
        this.config.serverTelemetryManager.incrementCacheHits(),
      [
        await x(
          this.generateResultFromCacheRecord.bind(this),
          E.SilentFlowClientGenerateResultFromCacheRecord,
          this.logger,
          this.performanceClient,
          e.correlationId
        )(s, e),
        n,
      ]
    );
  }
  setCacheOutcome(e, n) {
    var r, o;
    (r = this.serverTelemetryManager) == null || r.setCacheOutcome(e),
      (o = this.performanceClient) == null ||
        o.addFields({ cacheOutcome: e }, n),
      e !== zn.NOT_APPLICABLE &&
        this.logger.info(
          `Token refresh is required due to cache outcome: ${e}`
        );
  }
  async generateResultFromCacheRecord(e, n) {
    var o;
    (o = this.performanceClient) == null ||
      o.addQueueMeasurement(
        E.SilentFlowClientGenerateResultFromCacheRecord,
        n.correlationId
      );
    let r;
    if (
      (e.idToken &&
        (r = Dr(e.idToken.secret, this.config.cryptoInterface.base64Decode)),
      n.maxAge || n.maxAge === 0)
    ) {
      const i = r == null ? void 0 : r.auth_time;
      if (!i) throw O(Kd);
      Ev(i, n.maxAge);
    }
    return kr.generateAuthenticationResult(
      this.cryptoUtils,
      this.authority,
      e,
      !0,
      n,
      r
    );
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ const G0 = {
  sendGetRequestAsync: () => Promise.reject(O(Y)),
  sendPostRequestAsync: () => Promise.reject(O(Y)),
};
/*! @azure/msal-common v14.9.0 2024-04-11 */ const qv = "missing_kid_error",
  Yv = "missing_alg_error";
/*! @azure/msal-common v14.9.0 2024-04-11 */ const W0 = {
  [qv]: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided.",
  [Yv]: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided.",
};
class lh extends ke {
  constructor(e, n) {
    super(e, n),
      (this.name = "JoseHeaderError"),
      Object.setPrototypeOf(this, lh.prototype);
  }
}
function vp(t) {
  return new lh(t, W0[t]);
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ class uh {
  constructor(e) {
    (this.typ = e.typ), (this.alg = e.alg), (this.kid = e.kid);
  }
  static getShrHeaderString(e) {
    if (!e.kid) throw vp(qv);
    if (!e.alg) throw vp(Yv);
    const n = new uh({ typ: e.typ || iT.Pop, kid: e.kid, alg: e.alg });
    return JSON.stringify(n);
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ class Ss {
  constructor(e, n) {
    (this.cacheOutcome = zn.NOT_APPLICABLE),
      (this.cacheManager = n),
      (this.apiId = e.apiId),
      (this.correlationId = e.correlationId),
      (this.wrapperSKU = e.wrapperSKU || T.EMPTY_STRING),
      (this.wrapperVer = e.wrapperVer || T.EMPTY_STRING),
      (this.telemetryCacheKey =
        Je.CACHE_KEY + at.CACHE_KEY_SEPARATOR + e.clientId);
  }
  generateCurrentRequestHeaderValue() {
    const e = `${this.apiId}${Je.VALUE_SEPARATOR}${this.cacheOutcome}`,
      n = [this.wrapperSKU, this.wrapperVer].join(Je.VALUE_SEPARATOR),
      r = this.getRegionDiscoveryFields(),
      o = [e, r].join(Je.VALUE_SEPARATOR);
    return [Je.SCHEMA_VERSION, o, n].join(Je.CATEGORY_SEPARATOR);
  }
  generateLastRequestHeaderValue() {
    const e = this.getLastRequests(),
      n = Ss.maxErrorsToSend(e),
      r = e.failedRequests.slice(0, 2 * n).join(Je.VALUE_SEPARATOR),
      o = e.errors.slice(0, n).join(Je.VALUE_SEPARATOR),
      i = e.errors.length,
      a = n < i ? Je.OVERFLOW_TRUE : Je.OVERFLOW_FALSE,
      s = [i, a].join(Je.VALUE_SEPARATOR);
    return [Je.SCHEMA_VERSION, e.cacheHits, r, o, s].join(
      Je.CATEGORY_SEPARATOR
    );
  }
  cacheFailedRequest(e) {
    const n = this.getLastRequests();
    n.errors.length >= Je.MAX_CACHED_ERRORS &&
      (n.failedRequests.shift(), n.failedRequests.shift(), n.errors.shift()),
      n.failedRequests.push(this.apiId, this.correlationId),
      e instanceof Error && e && e.toString()
        ? e instanceof ke
          ? e.subError
            ? n.errors.push(e.subError)
            : e.errorCode
            ? n.errors.push(e.errorCode)
            : n.errors.push(e.toString())
          : n.errors.push(e.toString())
        : n.errors.push(Je.UNKNOWN_ERROR),
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, n);
  }
  incrementCacheHits() {
    const e = this.getLastRequests();
    return (
      (e.cacheHits += 1),
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e),
      e.cacheHits
    );
  }
  getLastRequests() {
    const e = { failedRequests: [], errors: [], cacheHits: 0 };
    return this.cacheManager.getServerTelemetry(this.telemetryCacheKey) || e;
  }
  clearTelemetryCache() {
    const e = this.getLastRequests(),
      n = Ss.maxErrorsToSend(e),
      r = e.errors.length;
    if (n === r) this.cacheManager.removeItem(this.telemetryCacheKey);
    else {
      const o = {
        failedRequests: e.failedRequests.slice(n * 2),
        errors: e.errors.slice(n),
        cacheHits: 0,
      };
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, o);
    }
  }
  static maxErrorsToSend(e) {
    let n,
      r = 0,
      o = 0;
    const i = e.errors.length;
    for (n = 0; n < i; n++) {
      const a = e.failedRequests[2 * n] || T.EMPTY_STRING,
        s = e.failedRequests[2 * n + 1] || T.EMPTY_STRING,
        c = e.errors[n] || T.EMPTY_STRING;
      if (
        ((o += a.toString().length + s.toString().length + c.length + 3),
        o < Je.MAX_LAST_HEADER_BYTES)
      )
        r += 1;
      else break;
    }
    return r;
  }
  getRegionDiscoveryFields() {
    const e = [];
    return (
      e.push(this.regionUsed || T.EMPTY_STRING),
      e.push(this.regionSource || T.EMPTY_STRING),
      e.push(this.regionOutcome || T.EMPTY_STRING),
      e.join(",")
    );
  }
  updateRegionDiscoveryMetadata(e) {
    (this.regionUsed = e.region_used),
      (this.regionSource = e.region_source),
      (this.regionOutcome = e.region_outcome);
  }
  setCacheOutcome(e) {
    this.cacheOutcome = e;
  }
}
/*! @azure/msal-common v14.9.0 2024-04-11 */ class yp {
  startMeasurement() {}
  endMeasurement() {}
  flushMeasurement() {
    return null;
  }
}
class q0 {
  generateId() {
    return "callback-id";
  }
  startMeasurement(e, n) {
    return {
      end: () => null,
      discard: () => {},
      add: () => {},
      increment: () => {},
      event: {
        eventId: this.generateId(),
        status: x0.InProgress,
        authority: "",
        libraryName: "",
        libraryVersion: "",
        clientId: "",
        name: e,
        startTimeMs: Date.now(),
        correlationId: n || "",
      },
      measurement: new yp(),
    };
  }
  startPerformanceMeasurement() {
    return new yp();
  }
  calculateQueuedTime() {
    return 0;
  }
  addQueueMeasurement() {}
  setPreQueueTime() {}
  endMeasurement() {
    return null;
  }
  discardMeasurements() {}
  removePerformanceCallback() {
    return !0;
  }
  addPerformanceCallback() {
    return "";
  }
  emitEvents() {}
  addFields() {}
  incrementFields() {}
  cacheEventByCorrelationId() {}
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ const dh = "pkce_not_created",
  Qv = "crypto_nonexistent",
  mc = "empty_navigate_uri",
  Jv = "hash_empty_error",
  hh = "no_state_in_hash",
  Xv = "hash_does_not_contain_known_properties",
  Zv = "unable_to_parse_state",
  ey = "state_interaction_type_mismatch",
  ty = "interaction_in_progress",
  ny = "popup_window_error",
  ry = "empty_window_error",
  _r = "user_cancelled",
  Y0 = "monitor_popup_timeout",
  oy = "monitor_window_timeout",
  iy = "redirect_in_iframe",
  ay = "block_iframe_reload",
  sy = "block_nested_popups",
  Q0 = "iframe_closed_prematurely",
  gc = "silent_logout_unsupported",
  cy = "no_account_error",
  J0 = "silent_prompt_value_error",
  ly = "no_token_request_cache_error",
  uy = "unable_to_parse_token_request_cache_error",
  fh = "no_cached_authority_error",
  X0 = "auth_request_not_set_error",
  Z0 = "invalid_cache_type",
  dy = "non_browser_environment",
  Jr = "database_not_open",
  ws = "no_network_connectivity",
  hy = "post_request_failed",
  fy = "get_request_failed",
  Su = "failed_to_parse_response",
  zt = "unable_to_load_token",
  ph = "crypto_key_not_found",
  py = "auth_code_required",
  my = "auth_code_or_nativeAccountId_required",
  gy = "spa_code_and_nativeAccountId_present",
  mh = "database_unavailable",
  vy = "unable_to_acquire_token_from_native_platform",
  yy = "native_handshake_timeout",
  Cy = "native_extension_not_installed",
  ra = "native_connection_not_established",
  Sy = "uninitialized_public_client_application",
  wy = "native_prompt_not_supported",
  Ey = "invalid_base64_string";
/*! @azure/msal-browser v3.13.0 2024-04-11 */ const Cn =
    "For more visit: aka.ms/msaljs/browser-errors",
  eI = {
    [dh]: "The PKCE code challenge and verifier could not be generated.",
    [Qv]: "The crypto object or function is not available.",
    [mc]: "Navigation URI is empty. Please check stack trace for more info.",
    [Jv]: `Hash value cannot be processed because it is empty. Please verify that your redirectUri is not clearing the hash. ${Cn}`,
    [hh]: "Hash does not contain state. Please verify that the request originated from msal.",
    [Xv]: `Hash does not contain known properites. Please verify that your redirectUri is not changing the hash.  ${Cn}`,
    [Zv]: "Unable to parse state. Please verify that the request originated from msal.",
    [ey]: "Hash contains state but the interaction type does not match the caller.",
    [ty]: `Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API.   ${Cn}`,
    [ny]: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser.",
    [ry]: "window.open returned null or undefined window object.",
    [_r]: "User cancelled the flow.",
    [Y0]: `Token acquisition in popup failed due to timeout.  ${Cn}`,
    [oy]: `Token acquisition in iframe failed due to timeout.  ${Cn}`,
    [iy]: "Redirects are not supported for iframed or brokered applications. Please ensure you are using MSAL.js in a top frame of the window if using the redirect APIs, or use the popup APIs.",
    [ay]: `Request was blocked inside an iframe because MSAL detected an authentication response.  ${Cn}`,
    [sy]: "Request was blocked inside a popup because MSAL detected it was running in a popup.",
    [Q0]: "The iframe being monitored was closed prematurely.",
    [gc]: "Silent logout not supported. Please call logoutRedirect or logoutPopup instead.",
    [cy]: "No account object provided to acquireTokenSilent and no active account has been set. Please call setActiveAccount or provide an account on the request.",
    [J0]: "The value given for the prompt value is not valid for silent requests - must be set to 'none' or 'no_session'.",
    [ly]: "No token request found in cache.",
    [uy]: "The cached token request could not be parsed.",
    [fh]: "No cached authority found.",
    [X0]: "Auth Request not set. Please ensure initiateAuthRequest was called from the InteractionHandler",
    [Z0]: "Invalid cache type",
    [dy]: "Login and token requests are not supported in non-browser environments.",
    [Jr]: "Database is not open!",
    [ws]: "No network connectivity. Check your internet connection.",
    [hy]: "Network request failed: If the browser threw a CORS error, check that the redirectUri is registered in the Azure App Portal as type 'SPA'",
    [fy]: "Network request failed. Please check the network trace to determine root cause.",
    [Su]: "Failed to parse network response. Check network trace.",
    [zt]: "Error loading token to cache.",
    [ph]: "Cryptographic Key or Keypair not found in browser storage.",
    [py]: "An authorization code must be provided (as the `code` property on the request) to this flow.",
    [my]: "An authorization code or nativeAccountId must be provided to this flow.",
    [gy]: "Request cannot contain both spa code and native account id.",
    [mh]: "IndexedDB, which is required for persistent cryptographic key storage, is unavailable. This may be caused by browser privacy features which block persistent storage in third-party contexts.",
    [vy]: `Unable to acquire token from native platform.  ${Cn}`,
    [yy]: "Timed out while attempting to establish connection to browser extension",
    [Cy]: "Native extension is not installed. If you think this is a mistake call the initialize function.",
    [ra]: `Connection to native platform has not been established. Please install a compatible browser extension and run initialize().  ${Cn}`,
    [Sy]: `You must call and await the initialize function before attempting to call any other MSAL API.  ${Cn}`,
    [wy]: "The provided prompt is not supported by the native platform. This request should be routed to the web based flow.",
    [Ey]: "Invalid base64 encoded string.",
  };
class oa extends ke {
  constructor(e) {
    super(e, eI[e]),
      Object.setPrototypeOf(this, oa.prototype),
      (this.name = "BrowserAuthError");
  }
}
function L(t) {
  return new oa(t);
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ const Gt = {
    INTERACTION_IN_PROGRESS_VALUE: "interaction_in_progress",
    INVALID_GRANT_ERROR: "invalid_grant",
    POPUP_WIDTH: 483,
    POPUP_HEIGHT: 600,
    POPUP_NAME_PREFIX: "msal",
    DEFAULT_POLL_INTERVAL_MS: 30,
    MSAL_SKU: "msal.js.browser",
  },
  pi = {
    CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836",
    PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji",
    MATS_TELEMETRY: "MATS",
  },
  yr = {
    HandshakeRequest: "Handshake",
    HandshakeResponse: "HandshakeResponse",
    GetToken: "GetToken",
    Response: "Response",
  },
  Ue = {
    LocalStorage: "localStorage",
    SessionStorage: "sessionStorage",
    MemoryStorage: "memoryStorage",
  },
  Cp = { GET: "GET", POST: "POST" },
  oe = {
    AUTHORITY: "authority",
    ACQUIRE_TOKEN_ACCOUNT: "acquireToken.account",
    SESSION_STATE: "session.state",
    REQUEST_STATE: "request.state",
    NONCE_IDTOKEN: "nonce.id_token",
    ORIGIN_URI: "request.origin",
    RENEW_STATUS: "token.renew.status",
    URL_HASH: "urlHash",
    REQUEST_PARAMS: "request.params",
    SCOPES: "scopes",
    INTERACTION_STATUS_KEY: "interaction.status",
    CCS_CREDENTIAL: "ccs.credential",
    CORRELATION_ID: "request.correlationId",
    NATIVE_REQUEST: "request.native",
    REDIRECT_CONTEXT: "request.redirect.context",
  },
  Hn = { ACCOUNT_KEYS: "msal.account.keys", TOKEN_KEYS: "msal.token.keys" },
  Ea = { WRAPPER_SKU: "wrapper.sku", WRAPPER_VER: "wrapper.version" },
  pe = {
    acquireTokenRedirect: 861,
    acquireTokenPopup: 862,
    ssoSilent: 863,
    acquireTokenSilent_authCode: 864,
    handleRedirectPromise: 865,
    acquireTokenByCode: 866,
    acquireTokenSilent_silentFlow: 61,
    logout: 961,
    logoutPopup: 962,
  };
var H;
(function (t) {
  (t.Redirect = "redirect"),
    (t.Popup = "popup"),
    (t.Silent = "silent"),
    (t.None = "none");
})(H || (H = {}));
const Ie = {
    Startup: "startup",
    Login: "login",
    Logout: "logout",
    AcquireToken: "acquireToken",
    SsoSilent: "ssoSilent",
    HandleRedirect: "handleRedirect",
    None: "none",
  },
  Sp = { scopes: Bo },
  Ty = "jwk",
  tI = { React: "@azure/msal-react", Angular: "@azure/msal-angular" },
  wu = "msal.db",
  nI = 1,
  rI = `${wu}.keys`,
  Et = {
    Default: 0,
    AccessToken: 1,
    AccessTokenAndRefreshToken: 2,
    RefreshToken: 3,
    RefreshTokenAndNetwork: 4,
    Skip: 5,
  },
  oI = [Et.Default, Et.Skip, Et.RefreshTokenAndNetwork],
  iI = "msal.browser.log.level",
  aI = "msal.browser.log.pii";
/*! @azure/msal-browser v3.13.0 2024-04-11 */ function pl(t) {
  return encodeURIComponent(
    gh(t).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
  );
}
function vc(t) {
  return Iy(t).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function gh(t) {
  return Iy(new TextEncoder().encode(t));
}
function Iy(t) {
  const e = Array.from(t, (n) => String.fromCodePoint(n)).join("");
  return btoa(e);
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ const sI = "RSASSA-PKCS1-v1_5",
  Ay = "SHA-256",
  cI = 2048,
  lI = new Uint8Array([1, 0, 1]),
  wp = "0123456789abcdef",
  Ep = new Uint32Array(1),
  vh = { name: sI, hash: Ay, modulusLength: cI, publicExponent: lI };
function uI(t) {
  if ("crypto" in window)
    t.verbose("BrowserCrypto: modern crypto interface available");
  else throw (t.error("BrowserCrypto: crypto interface is unavailable"), L(Qv));
}
async function ky(t, e, n) {
  e == null || e.addQueueMeasurement(E.Sha256Digest, n);
  const o = new TextEncoder().encode(t);
  return window.crypto.subtle.digest(Ay, o);
}
function dI(t) {
  return window.crypto.getRandomValues(t);
}
function ml() {
  return window.crypto.getRandomValues(Ep), Ep[0];
}
function Pn() {
  const t = Date.now(),
    e = ml() * 1024 + (ml() & 1023),
    n = new Uint8Array(16),
    r = Math.trunc(e / 2 ** 30),
    o = e & (2 ** 30 - 1),
    i = ml();
  (n[0] = t / 2 ** 40),
    (n[1] = t / 2 ** 32),
    (n[2] = t / 2 ** 24),
    (n[3] = t / 2 ** 16),
    (n[4] = t / 2 ** 8),
    (n[5] = t),
    (n[6] = 112 | (r >>> 8)),
    (n[7] = r),
    (n[8] = 128 | (o >>> 24)),
    (n[9] = o >>> 16),
    (n[10] = o >>> 8),
    (n[11] = o),
    (n[12] = i >>> 24),
    (n[13] = i >>> 16),
    (n[14] = i >>> 8),
    (n[15] = i);
  let a = "";
  for (let s = 0; s < n.length; s++)
    (a += wp.charAt(n[s] >>> 4)),
      (a += wp.charAt(n[s] & 15)),
      (s === 3 || s === 5 || s === 7 || s === 9) && (a += "-");
  return a;
}
async function hI(t, e) {
  return window.crypto.subtle.generateKey(vh, t, e);
}
async function gl(t) {
  return window.crypto.subtle.exportKey(Ty, t);
}
async function fI(t, e, n) {
  return window.crypto.subtle.importKey(Ty, t, vh, e, n);
}
async function pI(t, e) {
  return window.crypto.subtle.sign(vh, t, e);
}
async function _y(t) {
  const e = await ky(t),
    n = new Uint8Array(e);
  return vc(n);
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ const Es =
    "storage_not_supported",
  Pe = "stubbed_public_client_application_called",
  Ts = "in_mem_redirect_unavailable";
/*! @azure/msal-browser v3.13.0 2024-04-11 */ const Ya = {
  [Es]: "Given storage configuration option was not supported.",
  [Pe]: "Stub instance of Public Client Application was called. If using msal-react, please ensure context is not used without a provider. For more visit: aka.ms/msaljs/browser-errors",
  [Ts]: "Redirect cannot be supported. In-memory storage was selected and storeAuthStateInCookie=false, which would cause the library to be unable to handle the incoming hash. If you would like to use the redirect API, please use session/localStorage or set storeAuthStateInCookie=true.",
};
Ya[Es], Ya[Pe], Ya[Ts];
class yh extends ke {
  constructor(e, n) {
    super(e, n),
      (this.name = "BrowserConfigurationAuthError"),
      Object.setPrototypeOf(this, yh.prototype);
  }
}
function De(t) {
  return new yh(t, Ya[t]);
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ function mI(t) {
  (t.location.hash = ""),
    typeof t.history.replaceState == "function" &&
      t.history.replaceState(
        null,
        "",
        `${t.location.origin}${t.location.pathname}${t.location.search}`
      );
}
function gI(t) {
  const e = t.split("#");
  e.shift(), (window.location.hash = e.length > 0 ? e.join("#") : "");
}
function Ch() {
  return window.parent !== window;
}
function vI() {
  return (
    typeof window < "u" &&
    !!window.opener &&
    window.opener !== window &&
    typeof window.name == "string" &&
    window.name.indexOf(`${Gt.POPUP_NAME_PREFIX}.`) === 0
  );
}
function kn() {
  return window.location.href.split("?")[0].split("#")[0];
}
function yI() {
  const e = new X(window.location.href).getUrlComponents();
  return `${e.Protocol}//${e.HostNameAndPort}/`;
}
function CI() {
  if (X.hashContainsKnownProperties(window.location.hash) && Ch()) throw L(ay);
}
function SI(t) {
  if (Ch() && !t) throw L(iy);
}
function wI() {
  if (vI()) throw L(sy);
}
function EI() {
  if (typeof window > "u") throw L(dy);
}
function Ry(t) {
  if (!t) throw L(Sy);
}
function Xr(t) {
  EI(), CI(), wI(), Ry(t);
}
function Tp(t, e) {
  if (
    (Xr(t),
    SI(e.system.allowRedirectInIframe),
    e.cache.cacheLocation === Ue.MemoryStorage &&
      !e.cache.storeAuthStateInCookie)
  )
    throw De(Ts);
}
function by(t) {
  const e = document.createElement("link");
  (e.rel = "preconnect"),
    (e.href = new URL(t).origin),
    (e.crossOrigin = "anonymous"),
    document.head.appendChild(e),
    window.setTimeout(() => {
      try {
        document.head.removeChild(e);
      } catch {}
    }, 1e4);
}
const TI = "modulepreload",
  II = function (t) {
    return "/" + t;
  },
  Ip = {},
  AI = function (e, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"),
        a =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute("nonce"));
      o = Promise.all(
        n.map((s) => {
          if (((s = II(s)), s in Ip)) return;
          Ip[s] = !0;
          const c = s.endsWith(".css"),
            l = c ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${s}"]${l}`)) return;
          const u = document.createElement("link");
          if (
            ((u.rel = c ? "stylesheet" : TI),
            c || ((u.as = "script"), (u.crossOrigin = "")),
            (u.href = s),
            a && u.setAttribute("nonce", a),
            document.head.appendChild(u),
            c)
          )
            return new Promise((d, h) => {
              u.addEventListener("load", d),
                u.addEventListener("error", () =>
                  h(new Error(`Unable to preload CSS for ${s}`))
                );
            });
        })
      );
    }
    return o
      .then(() => e())
      .catch((i) => {
        const a = new Event("vite:preloadError", { cancelable: !0 });
        if (((a.payload = i), window.dispatchEvent(a), !a.defaultPrevented))
          throw i;
      });
  };
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class Is {
  navigateInternal(e, n) {
    return Is.defaultNavigateWindow(e, n);
  }
  navigateExternal(e, n) {
    return Is.defaultNavigateWindow(e, n);
  }
  static defaultNavigateWindow(e, n) {
    return (
      n.noHistory ? window.location.replace(e) : window.location.assign(e),
      new Promise((r) => {
        setTimeout(() => {
          r(!0);
        }, n.timeout);
      })
    );
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class kI {
  async sendGetRequestAsync(e, n) {
    let r;
    try {
      r = await fetch(e, { method: Cp.GET, headers: this.getFetchHeaders(n) });
    } catch {
      throw window.navigator.onLine ? L(fy) : L(ws);
    }
    try {
      return {
        headers: this.getHeaderDict(r.headers),
        body: await r.json(),
        status: r.status,
      };
    } catch {
      throw L(Su);
    }
  }
  async sendPostRequestAsync(e, n) {
    const r = (n && n.body) || T.EMPTY_STRING;
    let o;
    try {
      o = await fetch(e, {
        method: Cp.POST,
        headers: this.getFetchHeaders(n),
        body: r,
      });
    } catch {
      throw window.navigator.onLine ? L(hy) : L(ws);
    }
    try {
      return {
        headers: this.getHeaderDict(o.headers),
        body: await o.json(),
        status: o.status,
      };
    } catch {
      throw L(Su);
    }
  }
  getFetchHeaders(e) {
    const n = new Headers();
    if (!(e && e.headers)) return n;
    const r = e.headers;
    return (
      Object.keys(r).forEach((o) => {
        n.append(o, r[o]);
      }),
      n
    );
  }
  getHeaderDict(e) {
    const n = {};
    return (
      e.forEach((r, o) => {
        n[o] = r;
      }),
      n
    );
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ const _I = 6e4,
  Eu = 1e4,
  RI = 3e4,
  bI = 2e3;
function OI({ auth: t, cache: e, system: n, telemetry: r }, o) {
  const i = {
      clientId: T.EMPTY_STRING,
      authority: `${T.DEFAULT_AUTHORITY}`,
      knownAuthorities: [],
      cloudDiscoveryMetadata: T.EMPTY_STRING,
      authorityMetadata: T.EMPTY_STRING,
      redirectUri: T.EMPTY_STRING,
      postLogoutRedirectUri: T.EMPTY_STRING,
      navigateToLoginRequestUrl: !0,
      clientCapabilities: [],
      protocolMode: bn.AAD,
      OIDCOptions: {
        serverResponseType: na.FRAGMENT,
        defaultScopes: [
          T.OPENID_SCOPE,
          T.PROFILE_SCOPE,
          T.OFFLINE_ACCESS_SCOPE,
        ],
      },
      azureCloudOptions: {
        azureCloudInstance: Qd.None,
        tenant: T.EMPTY_STRING,
      },
      skipAuthorityMetadataCache: !1,
      supportsNestedAppAuth: !1,
    },
    a = {
      cacheLocation: Ue.SessionStorage,
      temporaryCacheLocation: Ue.SessionStorage,
      storeAuthStateInCookie: !1,
      secureCookies: !1,
      cacheMigrationEnabled: !!(e && e.cacheLocation === Ue.LocalStorage),
      claimsBasedCachingEnabled: !1,
    },
    s = { loggerCallback: () => {}, logLevel: ce.Info, piiLoggingEnabled: !1 },
    l = {
      ...{
        ...jv,
        loggerOptions: s,
        networkClient: o ? new kI() : G0,
        navigationClient: new Is(),
        loadFrameTimeout: 0,
        windowHashTimeout: (n == null ? void 0 : n.loadFrameTimeout) || _I,
        iframeHashTimeout: (n == null ? void 0 : n.loadFrameTimeout) || Eu,
        navigateFrameWait: 0,
        redirectNavigationTimeout: RI,
        asyncPopups: !1,
        allowRedirectInIframe: !1,
        allowNativeBroker: !1,
        nativeBrokerHandshakeTimeout:
          (n == null ? void 0 : n.nativeBrokerHandshakeTimeout) || bI,
        pollIntervalMilliseconds: Gt.DEFAULT_POLL_INTERVAL_MS,
      },
      ...n,
      loggerOptions: (n == null ? void 0 : n.loggerOptions) || s,
    },
    u = {
      application: { appName: T.EMPTY_STRING, appVersion: T.EMPTY_STRING },
      client: new q0(),
    };
  if (
    ((t == null ? void 0 : t.protocolMode) !== bn.OIDC &&
      t != null &&
      t.OIDCOptions &&
      new ir(l.loggerOptions).warning(JSON.stringify(de(Lv))),
    t != null &&
      t.protocolMode &&
      t.protocolMode !== bn.AAD &&
      l != null &&
      l.allowNativeBroker)
  )
    throw de(Dv);
  return {
    auth: {
      ...i,
      ...t,
      OIDCOptions: {
        ...i.OIDCOptions,
        ...(t == null ? void 0 : t.OIDCOptions),
      },
    },
    cache: { ...a, ...e },
    system: l,
    telemetry: { ...u, ...r },
  };
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ const PI = "@azure/msal-browser",
  Sh = "3.13.0";
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class wh {
  static loggerCallback(e, n) {
    switch (e) {
      case ce.Error:
        console.error(n);
        return;
      case ce.Info:
        console.info(n);
        return;
      case ce.Verbose:
        console.debug(n);
        return;
      case ce.Warning:
        console.warn(n);
        return;
      default:
        console.log(n);
        return;
    }
  }
  constructor(e) {
    var c;
    (this.browserEnvironment = typeof window < "u"),
      (this.config = OI(e, this.browserEnvironment));
    let n;
    try {
      n = window[Ue.SessionStorage];
    } catch {}
    const r = n == null ? void 0 : n.getItem(iI),
      o =
        (c = n == null ? void 0 : n.getItem(aI)) == null
          ? void 0
          : c.toLowerCase(),
      i = o === "true" ? !0 : o === "false" ? !1 : void 0,
      a = { ...this.config.system.loggerOptions },
      s = r && Object.keys(ce).includes(r) ? ce[r] : void 0;
    s && ((a.loggerCallback = wh.loggerCallback), (a.logLevel = s)),
      i !== void 0 && (a.piiLoggingEnabled = i),
      (this.logger = new ir(a, PI, Sh)),
      (this.available = !1);
  }
  getConfig() {
    return this.config;
  }
  getLogger() {
    return this.logger;
  }
  isAvailable() {
    return this.available;
  }
  isBrowserEnvironment() {
    return this.browserEnvironment;
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class Rr extends wh {
  getModuleName() {
    return Rr.MODULE_NAME;
  }
  getId() {
    return Rr.ID;
  }
  async initialize() {
    return (this.available = typeof window < "u"), this.available;
  }
}
Rr.MODULE_NAME = "";
Rr.ID = "StandardOperatingContext";
async function NI(t) {
  const e = new Rr(t);
  return (
    await e.initialize(),
    (
      await AI(() => Promise.resolve().then(() => hA), void 0)
    ).StandardController.createController(e)
  );
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ function dn(t) {
  return new TextDecoder().decode(MI(t));
}
function MI(t) {
  let e = t.replace(/-/g, "+").replace(/_/g, "/");
  switch (e.length % 4) {
    case 0:
      break;
    case 2:
      e += "==";
      break;
    case 3:
      e += "=";
      break;
    default:
      throw L(Ey);
  }
  const n = atob(e);
  return Uint8Array.from(n, (r) => r.codePointAt(0) || 0);
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class xI {
  constructor() {
    (this.dbName = wu),
      (this.version = nI),
      (this.tableName = rI),
      (this.dbOpen = !1);
  }
  async open() {
    return new Promise((e, n) => {
      const r = window.indexedDB.open(this.dbName, this.version);
      r.addEventListener("upgradeneeded", (o) => {
        o.target.result.createObjectStore(this.tableName);
      }),
        r.addEventListener("success", (o) => {
          const i = o;
          (this.db = i.target.result), (this.dbOpen = !0), e();
        }),
        r.addEventListener("error", () => n(L(mh)));
    });
  }
  closeConnection() {
    const e = this.db;
    e && this.dbOpen && (e.close(), (this.dbOpen = !1));
  }
  async validateDbIsOpen() {
    if (!this.dbOpen) return this.open();
  }
  async getItem(e) {
    return (
      await this.validateDbIsOpen(),
      new Promise((n, r) => {
        if (!this.db) return r(L(Jr));
        const a = this.db
          .transaction([this.tableName], "readonly")
          .objectStore(this.tableName)
          .get(e);
        a.addEventListener("success", (s) => {
          const c = s;
          this.closeConnection(), n(c.target.result);
        }),
          a.addEventListener("error", (s) => {
            this.closeConnection(), r(s);
          });
      })
    );
  }
  async setItem(e, n) {
    return (
      await this.validateDbIsOpen(),
      new Promise((r, o) => {
        if (!this.db) return o(L(Jr));
        const s = this.db
          .transaction([this.tableName], "readwrite")
          .objectStore(this.tableName)
          .put(n, e);
        s.addEventListener("success", () => {
          this.closeConnection(), r();
        }),
          s.addEventListener("error", (c) => {
            this.closeConnection(), o(c);
          });
      })
    );
  }
  async removeItem(e) {
    return (
      await this.validateDbIsOpen(),
      new Promise((n, r) => {
        if (!this.db) return r(L(Jr));
        const a = this.db
          .transaction([this.tableName], "readwrite")
          .objectStore(this.tableName)
          .delete(e);
        a.addEventListener("success", () => {
          this.closeConnection(), n();
        }),
          a.addEventListener("error", (s) => {
            this.closeConnection(), r(s);
          });
      })
    );
  }
  async getKeys() {
    return (
      await this.validateDbIsOpen(),
      new Promise((e, n) => {
        if (!this.db) return n(L(Jr));
        const i = this.db
          .transaction([this.tableName], "readonly")
          .objectStore(this.tableName)
          .getAllKeys();
        i.addEventListener("success", (a) => {
          const s = a;
          this.closeConnection(), e(s.target.result);
        }),
          i.addEventListener("error", (a) => {
            this.closeConnection(), n(a);
          });
      })
    );
  }
  async containsKey(e) {
    return (
      await this.validateDbIsOpen(),
      new Promise((n, r) => {
        if (!this.db) return r(L(Jr));
        const a = this.db
          .transaction([this.tableName], "readonly")
          .objectStore(this.tableName)
          .count(e);
        a.addEventListener("success", (s) => {
          const c = s;
          this.closeConnection(), n(c.target.result === 1);
        }),
          a.addEventListener("error", (s) => {
            this.closeConnection(), r(s);
          });
      })
    );
  }
  async deleteDatabase() {
    return (
      this.db && this.dbOpen && this.closeConnection(),
      new Promise((e, n) => {
        const r = window.indexedDB.deleteDatabase(wu),
          o = setTimeout(() => n(!1), 200);
        r.addEventListener("success", () => (clearTimeout(o), e(!0))),
          r.addEventListener("blocked", () => (clearTimeout(o), e(!0))),
          r.addEventListener("error", () => (clearTimeout(o), n(!1)));
      })
    );
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class Tu {
  constructor() {
    this.cache = new Map();
  }
  getItem(e) {
    return this.cache.get(e) || null;
  }
  setItem(e, n) {
    this.cache.set(e, n);
  }
  removeItem(e) {
    this.cache.delete(e);
  }
  getKeys() {
    const e = [];
    return (
      this.cache.forEach((n, r) => {
        e.push(r);
      }),
      e
    );
  }
  containsKey(e) {
    return this.cache.has(e);
  }
  clear() {
    this.cache.clear();
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class LI {
  constructor(e) {
    (this.inMemoryCache = new Tu()),
      (this.indexedDBCache = new xI()),
      (this.logger = e);
  }
  handleDatabaseAccessError(e) {
    if (e instanceof oa && e.errorCode === mh)
      this.logger.error(
        "Could not access persistent storage. This may be caused by browser privacy features which block persistent storage in third-party contexts."
      );
    else throw e;
  }
  async getItem(e) {
    const n = this.inMemoryCache.getItem(e);
    if (!n)
      try {
        return (
          this.logger.verbose(
            "Queried item not found in in-memory cache, now querying persistent storage."
          ),
          await this.indexedDBCache.getItem(e)
        );
      } catch (r) {
        this.handleDatabaseAccessError(r);
      }
    return n;
  }
  async setItem(e, n) {
    this.inMemoryCache.setItem(e, n);
    try {
      await this.indexedDBCache.setItem(e, n);
    } catch (r) {
      this.handleDatabaseAccessError(r);
    }
  }
  async removeItem(e) {
    this.inMemoryCache.removeItem(e);
    try {
      await this.indexedDBCache.removeItem(e);
    } catch (n) {
      this.handleDatabaseAccessError(n);
    }
  }
  async getKeys() {
    const e = this.inMemoryCache.getKeys();
    if (e.length === 0)
      try {
        return (
          this.logger.verbose(
            "In-memory cache is empty, now querying persistent storage."
          ),
          await this.indexedDBCache.getKeys()
        );
      } catch (n) {
        this.handleDatabaseAccessError(n);
      }
    return e;
  }
  async containsKey(e) {
    const n = this.inMemoryCache.containsKey(e);
    if (!n)
      try {
        return (
          this.logger.verbose(
            "Key not found in in-memory cache, now querying persistent storage."
          ),
          await this.indexedDBCache.containsKey(e)
        );
      } catch (r) {
        this.handleDatabaseAccessError(r);
      }
    return n;
  }
  clearInMemory() {
    this.logger.verbose("Deleting in-memory keystore"),
      this.inMemoryCache.clear(),
      this.logger.verbose("In-memory keystore deleted");
  }
  async clearPersistent() {
    try {
      this.logger.verbose("Deleting persistent keystore");
      const e = await this.indexedDBCache.deleteDatabase();
      return e && this.logger.verbose("Persistent keystore deleted"), e;
    } catch (e) {
      return this.handleDatabaseAccessError(e), !1;
    }
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class Oo {
  constructor(e, n) {
    (this.logger = e),
      uI(e),
      (this.cache = new LI(this.logger)),
      (this.performanceClient = n);
  }
  createNewGuid() {
    return Pn();
  }
  base64Encode(e) {
    return gh(e);
  }
  base64Decode(e) {
    return dn(e);
  }
  async getPublicKeyThumbprint(e) {
    var u;
    const n =
        (u = this.performanceClient) == null
          ? void 0
          : u.startMeasurement(
              E.CryptoOptsGetPublicKeyThumbprint,
              e.correlationId
            ),
      r = await hI(Oo.EXTRACTABLE, Oo.POP_KEY_USAGES),
      o = await gl(r.publicKey),
      i = { e: o.e, kty: o.kty, n: o.n },
      a = Ap(i),
      s = await this.hashString(a),
      c = await gl(r.privateKey),
      l = await fI(c, !1, ["sign"]);
    return (
      await this.cache.setItem(s, {
        privateKey: l,
        publicKey: r.publicKey,
        requestMethod: e.resourceRequestMethod,
        requestUri: e.resourceRequestUri,
      }),
      n && n.end({ success: !0 }),
      s
    );
  }
  async removeTokenBindingKey(e) {
    return await this.cache.removeItem(e), !(await this.cache.containsKey(e));
  }
  async clearKeystore() {
    this.cache.clearInMemory();
    try {
      return await this.cache.clearPersistent(), !0;
    } catch (e) {
      return (
        e instanceof Error
          ? this.logger.error(
              `Clearing keystore failed with error: ${e.message}`
            )
          : this.logger.error("Clearing keystore failed with unknown error"),
        !1
      );
    }
  }
  async signJwt(e, n, r, o) {
    var y;
    const i =
        (y = this.performanceClient) == null
          ? void 0
          : y.startMeasurement(E.CryptoOptsSignJwt, o),
      a = await this.cache.getItem(n);
    if (!a) throw L(ph);
    const s = await gl(a.publicKey),
      c = Ap(s),
      l = pl(JSON.stringify({ kid: n })),
      u = uh.getShrHeaderString({
        ...(r == null ? void 0 : r.header),
        alg: s.alg,
        kid: l,
      }),
      d = pl(u);
    e.cnf = { jwk: JSON.parse(c) };
    const h = pl(JSON.stringify(e)),
      v = `${d}.${h}`,
      m = new TextEncoder().encode(v),
      C = await pI(a.privateKey, m),
      f = vc(new Uint8Array(C)),
      p = `${v}.${f}`;
    return i && i.end({ success: !0 }), p;
  }
  async hashString(e) {
    return _y(e);
  }
}
Oo.POP_KEY_USAGES = ["sign", "verify"];
Oo.EXTRACTABLE = !0;
function Ap(t) {
  return JSON.stringify(t, Object.keys(t).sort());
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class kp {
  constructor(e) {
    this.validateWindowStorage(e), (this.windowStorage = window[e]);
  }
  validateWindowStorage(e) {
    if ((e !== Ue.LocalStorage && e !== Ue.SessionStorage) || !window[e])
      throw De(Es);
  }
  getItem(e) {
    return this.windowStorage.getItem(e);
  }
  setItem(e, n) {
    this.windowStorage.setItem(e, n);
  }
  removeItem(e) {
    this.windowStorage.removeItem(e);
  }
  getKeys() {
    return Object.keys(this.windowStorage);
  }
  containsKey(e) {
    return this.windowStorage.hasOwnProperty(e);
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ function Oy(t, e) {
  if (!e) return null;
  try {
    return Qt.parseRequestState(t, e).libraryState.meta;
  } catch {
    throw O(ko);
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class Iu extends _o {
  constructor(e, n, r, o, i, a) {
    super(e, r, o, i),
      (this.COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1e3),
      (this.cacheConfig = n),
      (this.logger = o),
      (this.internalStorage = new Tu()),
      (this.browserStorage = this.setupBrowserStorage(
        this.cacheConfig.cacheLocation
      )),
      (this.temporaryCacheStorage = this.setupTemporaryCacheStorage(
        this.cacheConfig.temporaryCacheLocation,
        this.cacheConfig.cacheLocation
      )),
      n.cacheMigrationEnabled &&
        (this.migrateCacheEntries(), this.createKeyMaps()),
      (this.performanceClient = a);
  }
  setupBrowserStorage(e) {
    switch (e) {
      case Ue.LocalStorage:
      case Ue.SessionStorage:
        try {
          return new kp(e);
        } catch (n) {
          this.logger.verbose(n);
          break;
        }
    }
    return (this.cacheConfig.cacheLocation = Ue.MemoryStorage), new Tu();
  }
  setupTemporaryCacheStorage(e, n) {
    switch (n) {
      case Ue.LocalStorage:
      case Ue.SessionStorage:
        try {
          return new kp(e || Ue.SessionStorage);
        } catch (r) {
          return this.logger.verbose(r), this.internalStorage;
        }
      case Ue.MemoryStorage:
      default:
        return this.internalStorage;
    }
  }
  migrateCacheEntries() {
    const e = `${T.CACHE_PREFIX}.${Ve.ID_TOKEN}`,
      n = `${T.CACHE_PREFIX}.${Ve.CLIENT_INFO}`,
      r = `${T.CACHE_PREFIX}.${Ve.ERROR}`,
      o = `${T.CACHE_PREFIX}.${Ve.ERROR_DESC}`,
      i = this.browserStorage.getItem(e),
      a = this.browserStorage.getItem(n),
      s = this.browserStorage.getItem(r),
      c = this.browserStorage.getItem(o),
      l = [i, a, s, c];
    [Ve.ID_TOKEN, Ve.CLIENT_INFO, Ve.ERROR, Ve.ERROR_DESC].forEach((d, h) => {
      const v = l[h];
      v && this.setTemporaryCache(d, v, !0);
    });
  }
  createKeyMaps() {
    this.logger.trace("BrowserCacheManager - createKeyMaps called.");
    const e = this.getItem(Hn.ACCOUNT_KEYS),
      n = this.getItem(`${Hn.TOKEN_KEYS}.${this.clientId}`);
    if (e && n) {
      this.logger.verbose(
        "BrowserCacheManager:createKeyMaps - account and token key maps already exist, skipping migration."
      );
      return;
    }
    this.browserStorage.getKeys().forEach((o) => {
      if (this.isCredentialKey(o)) {
        const i = this.getItem(o);
        if (i) {
          const a = this.validateAndParseJson(i);
          if (a && a.hasOwnProperty("credentialType"))
            switch (a.credentialType) {
              case W.ID_TOKEN:
                if (ip(a)) {
                  this.logger.trace(
                    "BrowserCacheManager:createKeyMaps - idToken found, saving key to token key map"
                  ),
                    this.logger.tracePii(
                      `BrowserCacheManager:createKeyMaps - idToken with key: ${o} found, saving key to token key map`
                    );
                  const s = a,
                    c = this.updateCredentialCacheKey(o, s);
                  this.addTokenKey(c, W.ID_TOKEN);
                  return;
                } else
                  this.logger.trace(
                    "BrowserCacheManager:createKeyMaps - key found matching idToken schema with value containing idToken credentialType field but value failed IdTokenEntity validation, skipping."
                  ),
                    this.logger.tracePii(
                      `BrowserCacheManager:createKeyMaps - failed idToken validation on key: ${o}`
                    );
                break;
              case W.ACCESS_TOKEN:
              case W.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                if (op(a)) {
                  this.logger.trace(
                    "BrowserCacheManager:createKeyMaps - accessToken found, saving key to token key map"
                  ),
                    this.logger.tracePii(
                      `BrowserCacheManager:createKeyMaps - accessToken with key: ${o} found, saving key to token key map`
                    );
                  const s = a,
                    c = this.updateCredentialCacheKey(o, s);
                  this.addTokenKey(c, W.ACCESS_TOKEN);
                  return;
                } else
                  this.logger.trace(
                    "BrowserCacheManager:createKeyMaps - key found matching accessToken schema with value containing accessToken credentialType field but value failed AccessTokenEntity validation, skipping."
                  ),
                    this.logger.tracePii(
                      `BrowserCacheManager:createKeyMaps - failed accessToken validation on key: ${o}`
                    );
                break;
              case W.REFRESH_TOKEN:
                if (ap(a)) {
                  this.logger.trace(
                    "BrowserCacheManager:createKeyMaps - refreshToken found, saving key to token key map"
                  ),
                    this.logger.tracePii(
                      `BrowserCacheManager:createKeyMaps - refreshToken with key: ${o} found, saving key to token key map`
                    );
                  const s = a,
                    c = this.updateCredentialCacheKey(o, s);
                  this.addTokenKey(c, W.REFRESH_TOKEN);
                  return;
                } else
                  this.logger.trace(
                    "BrowserCacheManager:createKeyMaps - key found matching refreshToken schema with value containing refreshToken credentialType field but value failed RefreshTokenEntity validation, skipping."
                  ),
                    this.logger.tracePii(
                      `BrowserCacheManager:createKeyMaps - failed refreshToken validation on key: ${o}`
                    );
                break;
            }
        }
      }
      if (this.isAccountKey(o)) {
        const i = this.getItem(o);
        if (i) {
          const a = this.validateAndParseJson(i);
          a &&
            $e.isAccountEntity(a) &&
            (this.logger.trace(
              "BrowserCacheManager:createKeyMaps - account found, saving key to account key map"
            ),
            this.logger.tracePii(
              `BrowserCacheManager:createKeyMaps - account with key: ${o} found, saving key to account key map`
            ),
            this.addAccountKeyToMap(o));
        }
      }
    });
  }
  validateAndParseJson(e) {
    try {
      const n = JSON.parse(e);
      return n && typeof n == "object" ? n : null;
    } catch {
      return null;
    }
  }
  getItem(e) {
    return this.browserStorage.getItem(e);
  }
  setItem(e, n) {
    this.browserStorage.setItem(e, n);
  }
  getAccount(e, n) {
    this.logger.trace("BrowserCacheManager.getAccount called");
    const r = this.getCachedAccountEntity(e);
    return this.updateOutdatedCachedAccount(e, r, n);
  }
  getCachedAccountEntity(e) {
    const n = this.getItem(e);
    if (!n) return this.removeAccountKeyFromMap(e), null;
    const r = this.validateAndParseJson(n);
    return !r || !$e.isAccountEntity(r)
      ? (this.removeAccountKeyFromMap(e), null)
      : _o.toObject(new $e(), r);
  }
  setAccount(e) {
    this.logger.trace("BrowserCacheManager.setAccount called");
    const n = e.generateAccountKey();
    this.setItem(n, JSON.stringify(e)), this.addAccountKeyToMap(n);
  }
  getAccountKeys() {
    this.logger.trace("BrowserCacheManager.getAccountKeys called");
    const e = this.getItem(Hn.ACCOUNT_KEYS);
    return e
      ? JSON.parse(e)
      : (this.logger.verbose(
          "BrowserCacheManager.getAccountKeys - No account keys found"
        ),
        []);
  }
  addAccountKeyToMap(e) {
    this.logger.trace("BrowserCacheManager.addAccountKeyToMap called"),
      this.logger.tracePii(
        `BrowserCacheManager.addAccountKeyToMap called with key: ${e}`
      );
    const n = this.getAccountKeys();
    n.indexOf(e) === -1
      ? (n.push(e),
        this.setItem(Hn.ACCOUNT_KEYS, JSON.stringify(n)),
        this.logger.verbose(
          "BrowserCacheManager.addAccountKeyToMap account key added"
        ))
      : this.logger.verbose(
          "BrowserCacheManager.addAccountKeyToMap account key already exists in map"
        );
  }
  removeAccountKeyFromMap(e) {
    this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap called"),
      this.logger.tracePii(
        `BrowserCacheManager.removeAccountKeyFromMap called with key: ${e}`
      );
    const n = this.getAccountKeys(),
      r = n.indexOf(e);
    r > -1
      ? (n.splice(r, 1),
        this.setItem(Hn.ACCOUNT_KEYS, JSON.stringify(n)),
        this.logger.trace(
          "BrowserCacheManager.removeAccountKeyFromMap account key removed"
        ))
      : this.logger.trace(
          "BrowserCacheManager.removeAccountKeyFromMap key not found in existing map"
        );
  }
  async removeAccount(e) {
    super.removeAccount(e), this.removeAccountKeyFromMap(e);
  }
  removeOutdatedAccount(e) {
    this.removeItem(e), this.removeAccountKeyFromMap(e);
  }
  removeIdToken(e) {
    super.removeIdToken(e), this.removeTokenKey(e, W.ID_TOKEN);
  }
  async removeAccessToken(e) {
    super.removeAccessToken(e), this.removeTokenKey(e, W.ACCESS_TOKEN);
  }
  removeRefreshToken(e) {
    super.removeRefreshToken(e), this.removeTokenKey(e, W.REFRESH_TOKEN);
  }
  getTokenKeys() {
    this.logger.trace("BrowserCacheManager.getTokenKeys called");
    const e = this.getItem(`${Hn.TOKEN_KEYS}.${this.clientId}`);
    if (e) {
      const n = this.validateAndParseJson(e);
      if (
        n &&
        n.hasOwnProperty("idToken") &&
        n.hasOwnProperty("accessToken") &&
        n.hasOwnProperty("refreshToken")
      )
        return n;
      this.logger.error(
        "BrowserCacheManager.getTokenKeys - Token keys found but in an unknown format. Returning empty key map."
      );
    } else
      this.logger.verbose(
        "BrowserCacheManager.getTokenKeys - No token keys found"
      );
    return { idToken: [], accessToken: [], refreshToken: [] };
  }
  addTokenKey(e, n) {
    this.logger.trace("BrowserCacheManager addTokenKey called");
    const r = this.getTokenKeys();
    switch (n) {
      case W.ID_TOKEN:
        r.idToken.indexOf(e) === -1 &&
          (this.logger.info(
            "BrowserCacheManager: addTokenKey - idToken added to map"
          ),
          r.idToken.push(e));
        break;
      case W.ACCESS_TOKEN:
        r.accessToken.indexOf(e) === -1 &&
          (this.logger.info(
            "BrowserCacheManager: addTokenKey - accessToken added to map"
          ),
          r.accessToken.push(e));
        break;
      case W.REFRESH_TOKEN:
        r.refreshToken.indexOf(e) === -1 &&
          (this.logger.info(
            "BrowserCacheManager: addTokenKey - refreshToken added to map"
          ),
          r.refreshToken.push(e));
        break;
      default:
        throw (
          (this.logger.error(
            `BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: ${n}`
          ),
          O(pu))
        );
    }
    this.setItem(`${Hn.TOKEN_KEYS}.${this.clientId}`, JSON.stringify(r));
  }
  removeTokenKey(e, n) {
    this.logger.trace("BrowserCacheManager removeTokenKey called");
    const r = this.getTokenKeys();
    switch (n) {
      case W.ID_TOKEN:
        this.logger.infoPii(
          `BrowserCacheManager: removeTokenKey - attempting to remove idToken with key: ${e} from map`
        );
        const o = r.idToken.indexOf(e);
        o > -1
          ? (this.logger.info(
              "BrowserCacheManager: removeTokenKey - idToken removed from map"
            ),
            r.idToken.splice(o, 1))
          : this.logger.info(
              "BrowserCacheManager: removeTokenKey - idToken does not exist in map. Either it was previously removed or it was never added."
            );
        break;
      case W.ACCESS_TOKEN:
        this.logger.infoPii(
          `BrowserCacheManager: removeTokenKey - attempting to remove accessToken with key: ${e} from map`
        );
        const i = r.accessToken.indexOf(e);
        i > -1
          ? (this.logger.info(
              "BrowserCacheManager: removeTokenKey - accessToken removed from map"
            ),
            r.accessToken.splice(i, 1))
          : this.logger.info(
              "BrowserCacheManager: removeTokenKey - accessToken does not exist in map. Either it was previously removed or it was never added."
            );
        break;
      case W.REFRESH_TOKEN:
        this.logger.infoPii(
          `BrowserCacheManager: removeTokenKey - attempting to remove refreshToken with key: ${e} from map`
        );
        const a = r.refreshToken.indexOf(e);
        a > -1
          ? (this.logger.info(
              "BrowserCacheManager: removeTokenKey - refreshToken removed from map"
            ),
            r.refreshToken.splice(a, 1))
          : this.logger.info(
              "BrowserCacheManager: removeTokenKey - refreshToken does not exist in map. Either it was previously removed or it was never added."
            );
        break;
      default:
        throw (
          (this.logger.error(
            `BrowserCacheManager:removeTokenKey - CredentialType provided invalid. CredentialType: ${n}`
          ),
          O(pu))
        );
    }
    this.setItem(`${Hn.TOKEN_KEYS}.${this.clientId}`, JSON.stringify(r));
  }
  getIdTokenCredential(e) {
    const n = this.getItem(e);
    if (!n)
      return (
        this.logger.trace(
          "BrowserCacheManager.getIdTokenCredential: called, no cache hit"
        ),
        this.removeTokenKey(e, W.ID_TOKEN),
        null
      );
    const r = this.validateAndParseJson(n);
    return !r || !ip(r)
      ? (this.logger.trace(
          "BrowserCacheManager.getIdTokenCredential: called, no cache hit"
        ),
        this.removeTokenKey(e, W.ID_TOKEN),
        null)
      : (this.logger.trace(
          "BrowserCacheManager.getIdTokenCredential: cache hit"
        ),
        r);
  }
  setIdTokenCredential(e) {
    this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
    const n = eo(e);
    this.setItem(n, JSON.stringify(e)), this.addTokenKey(n, W.ID_TOKEN);
  }
  getAccessTokenCredential(e) {
    const n = this.getItem(e);
    if (!n)
      return (
        this.logger.trace(
          "BrowserCacheManager.getAccessTokenCredential: called, no cache hit"
        ),
        this.removeTokenKey(e, W.ACCESS_TOKEN),
        null
      );
    const r = this.validateAndParseJson(n);
    return !r || !op(r)
      ? (this.logger.trace(
          "BrowserCacheManager.getAccessTokenCredential: called, no cache hit"
        ),
        this.removeTokenKey(e, W.ACCESS_TOKEN),
        null)
      : (this.logger.trace(
          "BrowserCacheManager.getAccessTokenCredential: cache hit"
        ),
        r);
  }
  setAccessTokenCredential(e) {
    this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
    const n = eo(e);
    this.setItem(n, JSON.stringify(e)), this.addTokenKey(n, W.ACCESS_TOKEN);
  }
  getRefreshTokenCredential(e) {
    const n = this.getItem(e);
    if (!n)
      return (
        this.logger.trace(
          "BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"
        ),
        this.removeTokenKey(e, W.REFRESH_TOKEN),
        null
      );
    const r = this.validateAndParseJson(n);
    return !r || !ap(r)
      ? (this.logger.trace(
          "BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"
        ),
        this.removeTokenKey(e, W.REFRESH_TOKEN),
        null)
      : (this.logger.trace(
          "BrowserCacheManager.getRefreshTokenCredential: cache hit"
        ),
        r);
  }
  setRefreshTokenCredential(e) {
    this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
    const n = eo(e);
    this.setItem(n, JSON.stringify(e)), this.addTokenKey(n, W.REFRESH_TOKEN);
  }
  getAppMetadata(e) {
    const n = this.getItem(e);
    if (!n)
      return (
        this.logger.trace(
          "BrowserCacheManager.getAppMetadata: called, no cache hit"
        ),
        null
      );
    const r = this.validateAndParseJson(n);
    return !r || !OT(e, r)
      ? (this.logger.trace(
          "BrowserCacheManager.getAppMetadata: called, no cache hit"
        ),
        null)
      : (this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit"), r);
  }
  setAppMetadata(e) {
    this.logger.trace("BrowserCacheManager.setAppMetadata called");
    const n = bT(e);
    this.setItem(n, JSON.stringify(e));
  }
  getServerTelemetry(e) {
    const n = this.getItem(e);
    if (!n)
      return (
        this.logger.trace(
          "BrowserCacheManager.getServerTelemetry: called, no cache hit"
        ),
        null
      );
    const r = this.validateAndParseJson(n);
    return !r || !_T(e, r)
      ? (this.logger.trace(
          "BrowserCacheManager.getServerTelemetry: called, no cache hit"
        ),
        null)
      : (this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit"),
        r);
  }
  setServerTelemetry(e, n) {
    this.logger.trace("BrowserCacheManager.setServerTelemetry called"),
      this.setItem(e, JSON.stringify(n));
  }
  getAuthorityMetadata(e) {
    const n = this.internalStorage.getItem(e);
    if (!n)
      return (
        this.logger.trace(
          "BrowserCacheManager.getAuthorityMetadata: called, no cache hit"
        ),
        null
      );
    const r = this.validateAndParseJson(n);
    return r && PT(e, r)
      ? (this.logger.trace(
          "BrowserCacheManager.getAuthorityMetadata: cache hit"
        ),
        r)
      : null;
  }
  getAuthorityMetadataKeys() {
    return this.internalStorage
      .getKeys()
      .filter((n) => this.isAuthorityMetadata(n));
  }
  setWrapperMetadata(e, n) {
    this.internalStorage.setItem(Ea.WRAPPER_SKU, e),
      this.internalStorage.setItem(Ea.WRAPPER_VER, n);
  }
  getWrapperMetadata() {
    const e = this.internalStorage.getItem(Ea.WRAPPER_SKU) || T.EMPTY_STRING,
      n = this.internalStorage.getItem(Ea.WRAPPER_VER) || T.EMPTY_STRING;
    return [e, n];
  }
  setAuthorityMetadata(e, n) {
    this.logger.trace("BrowserCacheManager.setAuthorityMetadata called"),
      this.internalStorage.setItem(e, JSON.stringify(n));
  }
  getActiveAccount() {
    const e = this.generateCacheKey(Ve.ACTIVE_ACCOUNT_FILTERS),
      n = this.getItem(e);
    if (!n) {
      this.logger.trace(
        "BrowserCacheManager.getActiveAccount: No active account filters cache schema found, looking for legacy schema"
      );
      const o = this.generateCacheKey(Ve.ACTIVE_ACCOUNT),
        i = this.getItem(o);
      if (!i)
        return (
          this.logger.trace(
            "BrowserCacheManager.getActiveAccount: No active account found"
          ),
          null
        );
      const a = this.getAccountInfoFilteredBy({ localAccountId: i });
      return a
        ? (this.logger.trace(
            "BrowserCacheManager.getActiveAccount: Legacy active account cache schema found"
          ),
          this.logger.trace(
            "BrowserCacheManager.getActiveAccount: Adding active account filters cache schema"
          ),
          this.setActiveAccount(a),
          a)
        : null;
    }
    const r = this.validateAndParseJson(n);
    return r
      ? (this.logger.trace(
          "BrowserCacheManager.getActiveAccount: Active account filters schema found"
        ),
        this.getAccountInfoFilteredBy({
          homeAccountId: r.homeAccountId,
          localAccountId: r.localAccountId,
          tenantId: r.tenantId,
        }))
      : (this.logger.trace(
          "BrowserCacheManager.getActiveAccount: No active account found"
        ),
        null);
  }
  setActiveAccount(e) {
    const n = this.generateCacheKey(Ve.ACTIVE_ACCOUNT_FILTERS),
      r = this.generateCacheKey(Ve.ACTIVE_ACCOUNT);
    if (e) {
      this.logger.verbose("setActiveAccount: Active account set");
      const o = {
        homeAccountId: e.homeAccountId,
        localAccountId: e.localAccountId,
        tenantId: e.tenantId,
      };
      this.browserStorage.setItem(n, JSON.stringify(o)),
        this.browserStorage.setItem(r, e.localAccountId);
    } else
      this.logger.verbose(
        "setActiveAccount: No account passed, active account not set"
      ),
        this.browserStorage.removeItem(n),
        this.browserStorage.removeItem(r);
  }
  getThrottlingCache(e) {
    const n = this.getItem(e);
    if (!n)
      return (
        this.logger.trace(
          "BrowserCacheManager.getThrottlingCache: called, no cache hit"
        ),
        null
      );
    const r = this.validateAndParseJson(n);
    return !r || !RT(e, r)
      ? (this.logger.trace(
          "BrowserCacheManager.getThrottlingCache: called, no cache hit"
        ),
        null)
      : (this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit"),
        r);
  }
  setThrottlingCache(e, n) {
    this.logger.trace("BrowserCacheManager.setThrottlingCache called"),
      this.setItem(e, JSON.stringify(n));
  }
  getTemporaryCache(e, n) {
    const r = n ? this.generateCacheKey(e) : e;
    if (this.cacheConfig.storeAuthStateInCookie) {
      const i = this.getItemCookie(r);
      if (i)
        return (
          this.logger.trace(
            "BrowserCacheManager.getTemporaryCache: storeAuthStateInCookies set to true, retrieving from cookies"
          ),
          i
        );
    }
    const o = this.temporaryCacheStorage.getItem(r);
    if (!o) {
      if (this.cacheConfig.cacheLocation === Ue.LocalStorage) {
        const i = this.browserStorage.getItem(r);
        if (i)
          return (
            this.logger.trace(
              "BrowserCacheManager.getTemporaryCache: Temporary cache item found in local storage"
            ),
            i
          );
      }
      return (
        this.logger.trace(
          "BrowserCacheManager.getTemporaryCache: No cache item found in local storage"
        ),
        null
      );
    }
    return (
      this.logger.trace(
        "BrowserCacheManager.getTemporaryCache: Temporary cache item returned"
      ),
      o
    );
  }
  setTemporaryCache(e, n, r) {
    const o = r ? this.generateCacheKey(e) : e;
    this.temporaryCacheStorage.setItem(o, n),
      this.cacheConfig.storeAuthStateInCookie &&
        (this.logger.trace(
          "BrowserCacheManager.setTemporaryCache: storeAuthStateInCookie set to true, setting item cookie"
        ),
        this.setItemCookie(o, n));
  }
  removeItem(e) {
    this.browserStorage.removeItem(e);
  }
  removeTemporaryItem(e) {
    this.temporaryCacheStorage.removeItem(e),
      this.cacheConfig.storeAuthStateInCookie &&
        (this.logger.trace(
          "BrowserCacheManager.removeItem: storeAuthStateInCookie is true, clearing item cookie"
        ),
        this.clearItemCookie(e));
  }
  getKeys() {
    return this.browserStorage.getKeys();
  }
  async clear() {
    await this.removeAllAccounts(),
      this.removeAppMetadata(),
      this.temporaryCacheStorage.getKeys().forEach((e) => {
        (e.indexOf(T.CACHE_PREFIX) !== -1 || e.indexOf(this.clientId) !== -1) &&
          this.removeTemporaryItem(e);
      }),
      this.browserStorage.getKeys().forEach((e) => {
        (e.indexOf(T.CACHE_PREFIX) !== -1 || e.indexOf(this.clientId) !== -1) &&
          this.browserStorage.removeItem(e);
      }),
      this.internalStorage.clear();
  }
  async clearTokensAndKeysWithClaims(e) {
    e.addQueueMeasurement(E.ClearTokensAndKeysWithClaims);
    const n = this.getTokenKeys(),
      r = [];
    n.accessToken.forEach((o) => {
      const i = this.getAccessTokenCredential(o);
      i != null &&
        i.requestedClaimsHash &&
        o.includes(i.requestedClaimsHash.toLowerCase()) &&
        r.push(this.removeAccessToken(o));
    }),
      await Promise.all(r),
      r.length > 0 &&
        this.logger.warning(
          `${r.length} access tokens with claims in the cache keys have been removed from the cache.`
        );
  }
  setItemCookie(e, n, r) {
    let o = `${encodeURIComponent(e)}=${encodeURIComponent(
      n
    )};path=/;SameSite=Lax;`;
    if (r) {
      const i = this.getCookieExpirationTime(r);
      o += `expires=${i};`;
    }
    this.cacheConfig.secureCookies && (o += "Secure;"), (document.cookie = o);
  }
  getItemCookie(e) {
    const n = `${encodeURIComponent(e)}=`,
      r = document.cookie.split(";");
    for (let o = 0; o < r.length; o++) {
      let i = r[o];
      for (; i.charAt(0) === " "; ) i = i.substring(1);
      if (i.indexOf(n) === 0)
        return decodeURIComponent(i.substring(n.length, i.length));
    }
    return T.EMPTY_STRING;
  }
  clearMsalCookies() {
    const e = `${T.CACHE_PREFIX}.${this.clientId}`;
    document.cookie.split(";").forEach((r) => {
      for (; r.charAt(0) === " "; ) r = r.substring(1);
      if (r.indexOf(e) === 0) {
        const o = r.split("=")[0];
        this.clearItemCookie(o);
      }
    });
  }
  clearItemCookie(e) {
    this.setItemCookie(e, T.EMPTY_STRING, -1);
  }
  getCookieExpirationTime(e) {
    const n = new Date();
    return new Date(
      n.getTime() + e * this.COOKIE_LIFE_MULTIPLIER
    ).toUTCString();
  }
  generateCacheKey(e) {
    return this.validateAndParseJson(e)
      ? JSON.stringify(e)
      : Yt.startsWith(e, T.CACHE_PREFIX) || Yt.startsWith(e, Ve.ADAL_ID_TOKEN)
      ? e
      : `${T.CACHE_PREFIX}.${this.clientId}.${e}`;
  }
  generateAuthorityKey(e) {
    const {
      libraryState: { id: n },
    } = Qt.parseRequestState(this.cryptoImpl, e);
    return this.generateCacheKey(`${oe.AUTHORITY}.${n}`);
  }
  generateNonceKey(e) {
    const {
      libraryState: { id: n },
    } = Qt.parseRequestState(this.cryptoImpl, e);
    return this.generateCacheKey(`${oe.NONCE_IDTOKEN}.${n}`);
  }
  generateStateKey(e) {
    const {
      libraryState: { id: n },
    } = Qt.parseRequestState(this.cryptoImpl, e);
    return this.generateCacheKey(`${oe.REQUEST_STATE}.${n}`);
  }
  getCachedAuthority(e) {
    const n = this.generateStateKey(e),
      r = this.getTemporaryCache(n);
    if (!r) return null;
    const o = this.generateAuthorityKey(r);
    return this.getTemporaryCache(o);
  }
  updateCacheEntries(e, n, r, o, i) {
    this.logger.trace("BrowserCacheManager.updateCacheEntries called");
    const a = this.generateStateKey(e);
    this.setTemporaryCache(a, e, !1);
    const s = this.generateNonceKey(e);
    this.setTemporaryCache(s, n, !1);
    const c = this.generateAuthorityKey(e);
    if ((this.setTemporaryCache(c, r, !1), i)) {
      const l = { credential: i.homeAccountId, type: It.HOME_ACCOUNT_ID };
      this.setTemporaryCache(oe.CCS_CREDENTIAL, JSON.stringify(l), !0);
    } else if (o) {
      const l = { credential: o, type: It.UPN };
      this.setTemporaryCache(oe.CCS_CREDENTIAL, JSON.stringify(l), !0);
    }
  }
  resetRequestCache(e) {
    this.logger.trace("BrowserCacheManager.resetRequestCache called"),
      e &&
        (this.temporaryCacheStorage.getKeys().forEach((n) => {
          n.indexOf(e) !== -1 && this.removeTemporaryItem(n);
        }),
        this.removeTemporaryItem(this.generateStateKey(e)),
        this.removeTemporaryItem(this.generateNonceKey(e)),
        this.removeTemporaryItem(this.generateAuthorityKey(e))),
      this.removeTemporaryItem(this.generateCacheKey(oe.REQUEST_PARAMS)),
      this.removeTemporaryItem(this.generateCacheKey(oe.ORIGIN_URI)),
      this.removeTemporaryItem(this.generateCacheKey(oe.URL_HASH)),
      this.removeTemporaryItem(this.generateCacheKey(oe.CORRELATION_ID)),
      this.removeTemporaryItem(this.generateCacheKey(oe.CCS_CREDENTIAL)),
      this.removeTemporaryItem(this.generateCacheKey(oe.NATIVE_REQUEST)),
      this.setInteractionInProgress(!1);
  }
  cleanRequestByState(e) {
    if (
      (this.logger.trace("BrowserCacheManager.cleanRequestByState called"), e)
    ) {
      const n = this.generateStateKey(e),
        r = this.temporaryCacheStorage.getItem(n);
      this.logger.infoPii(
        `BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: ${r}`
      ),
        this.resetRequestCache(r || T.EMPTY_STRING);
    }
    this.clearMsalCookies();
  }
  cleanRequestByInteractionType(e) {
    this.logger.trace(
      "BrowserCacheManager.cleanRequestByInteractionType called"
    ),
      this.temporaryCacheStorage.getKeys().forEach((n) => {
        if (n.indexOf(oe.REQUEST_STATE) === -1) return;
        const r = this.temporaryCacheStorage.getItem(n);
        if (!r) return;
        const o = Oy(this.cryptoImpl, r);
        o &&
          o.interactionType === e &&
          (this.logger.infoPii(
            `BrowserCacheManager.cleanRequestByInteractionType: Removing temporary cache items for state: ${r}`
          ),
          this.resetRequestCache(r));
      }),
      this.clearMsalCookies(),
      this.setInteractionInProgress(!1);
  }
  cacheCodeRequest(e) {
    this.logger.trace("BrowserCacheManager.cacheCodeRequest called");
    const n = gh(JSON.stringify(e));
    this.setTemporaryCache(oe.REQUEST_PARAMS, n, !0);
  }
  getCachedRequest(e) {
    this.logger.trace("BrowserCacheManager.getCachedRequest called");
    const n = this.getTemporaryCache(oe.REQUEST_PARAMS, !0);
    if (!n) throw L(ly);
    let r;
    try {
      r = JSON.parse(dn(n));
    } catch (o) {
      throw (
        (this.logger.errorPii(`Attempted to parse: ${n}`),
        this.logger.error(
          `Parsing cached token request threw with error: ${o}`
        ),
        L(uy))
      );
    }
    if (
      (this.removeTemporaryItem(this.generateCacheKey(oe.REQUEST_PARAMS)),
      !r.authority)
    ) {
      const o = this.generateAuthorityKey(e),
        i = this.getTemporaryCache(o);
      if (!i) throw L(fh);
      r.authority = i;
    }
    return r;
  }
  getCachedNativeRequest() {
    this.logger.trace("BrowserCacheManager.getCachedNativeRequest called");
    const e = this.getTemporaryCache(oe.NATIVE_REQUEST, !0);
    if (!e)
      return (
        this.logger.trace(
          "BrowserCacheManager.getCachedNativeRequest: No cached native request found"
        ),
        null
      );
    const n = this.validateAndParseJson(e);
    return (
      n ||
      (this.logger.error(
        "BrowserCacheManager.getCachedNativeRequest: Unable to parse native request"
      ),
      null)
    );
  }
  isInteractionInProgress(e) {
    const n = this.getInteractionInProgress();
    return e ? n === this.clientId : !!n;
  }
  getInteractionInProgress() {
    const e = `${T.CACHE_PREFIX}.${oe.INTERACTION_STATUS_KEY}`;
    return this.getTemporaryCache(e, !1);
  }
  setInteractionInProgress(e) {
    const n = `${T.CACHE_PREFIX}.${oe.INTERACTION_STATUS_KEY}`;
    if (e) {
      if (this.getInteractionInProgress()) throw L(ty);
      this.setTemporaryCache(n, this.clientId, !1);
    } else
      !e &&
        this.getInteractionInProgress() === this.clientId &&
        this.removeTemporaryItem(n);
  }
  getLegacyLoginHint() {
    const e = this.getTemporaryCache(Ve.ADAL_ID_TOKEN);
    e &&
      (this.browserStorage.removeItem(Ve.ADAL_ID_TOKEN),
      this.logger.verbose("Cached ADAL id token retrieved."));
    const n = this.getTemporaryCache(Ve.ID_TOKEN, !0);
    n &&
      (this.browserStorage.removeItem(this.generateCacheKey(Ve.ID_TOKEN)),
      this.logger.verbose("Cached MSAL.js v1 id token retrieved"));
    const r = n || e;
    if (r) {
      const o = Dr(r, dn);
      if (o.preferred_username)
        return (
          this.logger.verbose(
            "No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 preferred_username as loginHint"
          ),
          o.preferred_username
        );
      if (o.upn)
        return (
          this.logger.verbose(
            "No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 upn as loginHint"
          ),
          o.upn
        );
      this.logger.verbose(
        "No SSO params used and ADAL/MSAL v1 token retrieved, however, no account hint claim found. Enable preferred_username or upn id token claim to get SSO."
      );
    }
    return null;
  }
  updateCredentialCacheKey(e, n) {
    const r = eo(n);
    if (e !== r) {
      const o = this.getItem(e);
      if (o)
        return (
          this.browserStorage.removeItem(e),
          this.setItem(r, o),
          this.logger.verbose(
            `Updated an outdated ${n.credentialType} cache key`
          ),
          r
        );
      this.logger.error(
        `Attempted to update an outdated ${n.credentialType} cache key but no item matching the outdated key was found in storage`
      );
    }
    return e;
  }
  async hydrateCache(e, n) {
    var s, c, l, u, d;
    const r = uc(
      (s = e.account) == null ? void 0 : s.homeAccountId,
      (c = e.account) == null ? void 0 : c.environment,
      e.idToken,
      this.clientId,
      e.tenantId
    );
    let o;
    n.claims && (o = await this.cryptoImpl.hashString(n.claims));
    const i = dc(
        (l = e.account) == null ? void 0 : l.homeAccountId,
        e.account.environment,
        e.accessToken,
        this.clientId,
        e.tenantId,
        e.scopes.join(" "),
        ((u = e.expiresOn) == null ? void 0 : u.getTime()) || 0,
        ((d = e.extExpiresOn) == null ? void 0 : d.getTime()) || 0,
        dn,
        void 0,
        e.tokenType,
        void 0,
        n.sshKid,
        n.claims,
        o
      ),
      a = new vo(void 0, r, i);
    return this.saveCacheRecord(a);
  }
  async saveCacheRecord(e, n, r) {
    try {
      await super.saveCacheRecord(e, n, r);
    } catch (o) {
      if (o instanceof go && this.performanceClient && r)
        try {
          const i = this.getTokenKeys();
          this.performanceClient.addFields(
            {
              cacheRtCount: i.refreshToken.length,
              cacheIdCount: i.idToken.length,
              cacheAtCount: i.accessToken.length,
            },
            r
          );
        } catch {}
      throw o;
    }
  }
}
const DI = (t, e) => {
  const n = {
    cacheLocation: Ue.MemoryStorage,
    temporaryCacheLocation: Ue.MemoryStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    cacheMigrationEnabled: !1,
    claimsBasedCachingEnabled: !1,
  };
  return new Iu(t, n, ms, e);
};
/*! @azure/msal-browser v3.13.0 2024-04-11 */ const F = {
  INITIALIZE_START: "msal:initializeStart",
  INITIALIZE_END: "msal:initializeEnd",
  ACCOUNT_ADDED: "msal:accountAdded",
  ACCOUNT_REMOVED: "msal:accountRemoved",
  ACTIVE_ACCOUNT_CHANGED: "msal:activeAccountChanged",
  LOGIN_START: "msal:loginStart",
  LOGIN_SUCCESS: "msal:loginSuccess",
  LOGIN_FAILURE: "msal:loginFailure",
  ACQUIRE_TOKEN_START: "msal:acquireTokenStart",
  ACQUIRE_TOKEN_SUCCESS: "msal:acquireTokenSuccess",
  ACQUIRE_TOKEN_FAILURE: "msal:acquireTokenFailure",
  ACQUIRE_TOKEN_NETWORK_START: "msal:acquireTokenFromNetworkStart",
  SSO_SILENT_START: "msal:ssoSilentStart",
  SSO_SILENT_SUCCESS: "msal:ssoSilentSuccess",
  SSO_SILENT_FAILURE: "msal:ssoSilentFailure",
  ACQUIRE_TOKEN_BY_CODE_START: "msal:acquireTokenByCodeStart",
  ACQUIRE_TOKEN_BY_CODE_SUCCESS: "msal:acquireTokenByCodeSuccess",
  ACQUIRE_TOKEN_BY_CODE_FAILURE: "msal:acquireTokenByCodeFailure",
  HANDLE_REDIRECT_START: "msal:handleRedirectStart",
  HANDLE_REDIRECT_END: "msal:handleRedirectEnd",
  POPUP_OPENED: "msal:popupOpened",
  LOGOUT_START: "msal:logoutStart",
  LOGOUT_SUCCESS: "msal:logoutSuccess",
  LOGOUT_FAILURE: "msal:logoutFailure",
  LOGOUT_END: "msal:logoutEnd",
  RESTORE_FROM_BFCACHE: "msal:restoreFromBFCache",
};
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class UI {
  constructor(e, n) {
    (this.eventCallbacks = new Map()),
      (this.logger = e),
      (this.browserCrypto = n),
      (this.listeningToStorageEvents = !1),
      (this.handleAccountCacheChange =
        this.handleAccountCacheChange.bind(this));
  }
  addEventCallback(e) {
    if (typeof window < "u") {
      const n = Pn();
      return (
        this.eventCallbacks.set(n, e),
        this.logger.verbose(`Event callback registered with id: ${n}`),
        n
      );
    }
    return null;
  }
  removeEventCallback(e) {
    this.eventCallbacks.delete(e),
      this.logger.verbose(`Event callback ${e} removed.`);
  }
  enableAccountStorageEvents() {
    typeof window > "u" ||
      (this.listeningToStorageEvents
        ? this.logger.verbose("Account storage listener already registered.")
        : (this.logger.verbose("Adding account storage listener."),
          (this.listeningToStorageEvents = !0),
          window.addEventListener("storage", this.handleAccountCacheChange)));
  }
  disableAccountStorageEvents() {
    typeof window > "u" ||
      (this.listeningToStorageEvents
        ? (this.logger.verbose("Removing account storage listener."),
          window.removeEventListener("storage", this.handleAccountCacheChange),
          (this.listeningToStorageEvents = !1))
        : this.logger.verbose("No account storage listener registered."));
  }
  emitEvent(e, n, r, o) {
    if (typeof window < "u") {
      const i = {
        eventType: e,
        interactionType: n || null,
        payload: r || null,
        error: o || null,
        timestamp: Date.now(),
      };
      this.logger.info(`Emitting event: ${e}`),
        this.eventCallbacks.forEach((a, s) => {
          this.logger.verbose(`Emitting event to callback ${s}: ${e}`),
            a.apply(null, [i]);
        });
    }
  }
  handleAccountCacheChange(e) {
    var n;
    try {
      (n = e.key) != null &&
        n.includes(Ve.ACTIVE_ACCOUNT_FILTERS) &&
        this.emitEvent(F.ACTIVE_ACCOUNT_CHANGED);
      const r = e.newValue || e.oldValue;
      if (!r) return;
      const o = JSON.parse(r);
      if (typeof o != "object" || !$e.isAccountEntity(o)) return;
      const a = _o.toObject(new $e(), o).getAccountInfo();
      !e.oldValue && e.newValue
        ? (this.logger.info("Account was added to cache in a different window"),
          this.emitEvent(F.ACCOUNT_ADDED, void 0, a))
        : !e.newValue &&
          e.oldValue &&
          (this.logger.info(
            "Account was removed from cache in a different window"
          ),
          this.emitEvent(F.ACCOUNT_REMOVED, void 0, a));
    } catch {
      return;
    }
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class Py {
  constructor(e, n, r, o, i, a, s, c, l) {
    (this.config = e),
      (this.browserStorage = n),
      (this.browserCrypto = r),
      (this.networkClient = this.config.system.networkClient),
      (this.eventHandler = i),
      (this.navigationClient = a),
      (this.nativeMessageHandler = c),
      (this.correlationId = l || Pn()),
      (this.logger = o.clone(Gt.MSAL_SKU, Sh, this.correlationId)),
      (this.performanceClient = s);
  }
  async clearCacheOnLogout(e) {
    if (e) {
      $e.accountInfoIsEqual(e, this.browserStorage.getActiveAccount(), !1) &&
        (this.logger.verbose("Setting active account to null"),
        this.browserStorage.setActiveAccount(null));
      try {
        await this.browserStorage.removeAccount($e.generateAccountCacheKey(e)),
          this.logger.verbose(
            "Cleared cache items belonging to the account provided in the logout request."
          );
      } catch {
        this.logger.error(
          "Account provided in logout request was not found. Local cache unchanged."
        );
      }
    } else
      try {
        this.logger.verbose(
          "No account provided in logout request, clearing all cache items.",
          this.correlationId
        ),
          await this.browserStorage.clear(),
          await this.browserCrypto.clearKeystore();
      } catch {
        this.logger.error(
          "Attempted to clear all MSAL cache items and failed. Local cache unchanged."
        );
      }
  }
  getRedirectUri(e) {
    this.logger.verbose("getRedirectUri called");
    const n = e || this.config.auth.redirectUri || kn();
    return X.getAbsoluteUrl(n, kn());
  }
  initializeServerTelemetryManager(e, n) {
    this.logger.verbose("initializeServerTelemetryManager called");
    const r = {
      clientId: this.config.auth.clientId,
      correlationId: this.correlationId,
      apiId: e,
      forceRefresh: n || !1,
      wrapperSKU: this.browserStorage.getWrapperMetadata()[0],
      wrapperVer: this.browserStorage.getWrapperMetadata()[1],
    };
    return new Ss(r, this.browserStorage);
  }
  async getDiscoveredAuthority(e, n, r) {
    this.performanceClient.addQueueMeasurement(
      E.StandardInteractionClientGetDiscoveredAuthority,
      this.correlationId
    );
    const o = {
        protocolMode: this.config.auth.protocolMode,
        OIDCOptions: this.config.auth.OIDCOptions,
        knownAuthorities: this.config.auth.knownAuthorities,
        cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
        authorityMetadata: this.config.auth.authorityMetadata,
        skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache,
      },
      i = e || this.config.auth.authority,
      a = it.generateAuthority(i, n || this.config.auth.azureCloudOptions),
      s = await x(
        Kv,
        E.AuthorityFactoryCreateDiscoveredInstance,
        this.logger,
        this.performanceClient,
        this.correlationId
      )(
        a,
        this.config.system.networkClient,
        this.browserStorage,
        o,
        this.logger,
        this.correlationId,
        this.performanceClient
      );
    if (r && !s.isAlias(r.environment)) throw de(Uv);
    return s;
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ const FI = 32;
async function HI(t, e, n) {
  t.addQueueMeasurement(E.GeneratePkceCodes, n);
  const r = Ur($I, E.GenerateCodeVerifier, e, t, n)(t, e, n),
    o = await x(BI, E.GenerateCodeChallengeFromVerifier, e, t, n)(r, t, e, n);
  return { verifier: r, challenge: o };
}
function $I(t, e, n) {
  try {
    const r = new Uint8Array(FI);
    return Ur(dI, E.GetRandomValues, e, t, n)(r), vc(r);
  } catch {
    throw L(dh);
  }
}
async function BI(t, e, n, r) {
  e.addQueueMeasurement(E.GenerateCodeChallengeFromVerifier, r);
  try {
    const o = await x(ky, E.Sha256Digest, n, e, r)(t, e, r);
    return vc(new Uint8Array(o));
  } catch {
    throw L(dh);
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ async function Eh(t, e, n, r) {
  n.addQueueMeasurement(E.InitializeBaseRequest, t.correlationId);
  const o = t.authority || e.auth.authority,
    i = [...((t && t.scopes) || [])],
    a = { ...t, correlationId: t.correlationId, authority: o, scopes: i };
  if (!a.authenticationScheme)
    (a.authenticationScheme = le.BEARER),
      r.verbose(
        `Authentication Scheme wasn't explicitly set in request, defaulting to "Bearer" request`
      );
  else {
    if (a.authenticationScheme === le.SSH) {
      if (!t.sshJwk) throw de(hc);
      if (!t.sshKid) throw de(xv);
    }
    r.verbose(
      `Authentication Scheme set to "${a.authenticationScheme}" as configured in Auth request`
    );
  }
  return (
    e.cache.claimsBasedCachingEnabled &&
      t.claims &&
      !Yt.isEmptyObj(t.claims) &&
      (a.requestedClaimsHash = await _y(t.claims)),
    a
  );
}
async function zI(t, e, n, r, o) {
  r.addQueueMeasurement(E.InitializeSilentRequest, t.correlationId);
  const i = await x(
    Eh,
    E.InitializeBaseRequest,
    o,
    r,
    t.correlationId
  )(t, n, r, o);
  return { ...t, ...i, account: e, forceRefresh: t.forceRefresh || !1 };
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class zo extends Py {
  async initializeAuthorizationCodeRequest(e) {
    this.performanceClient.addQueueMeasurement(
      E.StandardInteractionClientInitializeAuthorizationCodeRequest,
      this.correlationId
    );
    const n = await x(
        HI,
        E.GeneratePkceCodes,
        this.logger,
        this.performanceClient,
        this.correlationId
      )(this.performanceClient, this.logger, this.correlationId),
      r = {
        ...e,
        redirectUri: e.redirectUri,
        code: T.EMPTY_STRING,
        codeVerifier: n.verifier,
      };
    return (
      (e.codeChallenge = n.challenge),
      (e.codeChallengeMethod = T.S256_CODE_CHALLENGE_METHOD),
      r
    );
  }
  initializeLogoutRequest(e) {
    this.logger.verbose(
      "initializeLogoutRequest called",
      e == null ? void 0 : e.correlationId
    );
    const n = { correlationId: this.correlationId || Pn(), ...e };
    if (e)
      if (e.logoutHint)
        this.logger.verbose("logoutHint has already been set in logoutRequest");
      else if (e.account) {
        const r = this.getLogoutHintFromIdTokenClaims(e.account);
        r &&
          (this.logger.verbose(
            "Setting logoutHint to login_hint ID Token Claim value for the account provided"
          ),
          (n.logoutHint = r));
      } else
        this.logger.verbose(
          "logoutHint was not set and account was not passed into logout request, logoutHint will not be set"
        );
    else
      this.logger.verbose(
        "logoutHint will not be set since no logout request was configured"
      );
    return (
      !e || e.postLogoutRedirectUri !== null
        ? e && e.postLogoutRedirectUri
          ? (this.logger.verbose(
              "Setting postLogoutRedirectUri to uri set on logout request",
              n.correlationId
            ),
            (n.postLogoutRedirectUri = X.getAbsoluteUrl(
              e.postLogoutRedirectUri,
              kn()
            )))
          : this.config.auth.postLogoutRedirectUri === null
          ? this.logger.verbose(
              "postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect",
              n.correlationId
            )
          : this.config.auth.postLogoutRedirectUri
          ? (this.logger.verbose(
              "Setting postLogoutRedirectUri to configured uri",
              n.correlationId
            ),
            (n.postLogoutRedirectUri = X.getAbsoluteUrl(
              this.config.auth.postLogoutRedirectUri,
              kn()
            )))
          : (this.logger.verbose(
              "Setting postLogoutRedirectUri to current page",
              n.correlationId
            ),
            (n.postLogoutRedirectUri = X.getAbsoluteUrl(kn(), kn())))
        : this.logger.verbose(
            "postLogoutRedirectUri passed as null, not setting post logout redirect uri",
            n.correlationId
          ),
      n
    );
  }
  getLogoutHintFromIdTokenClaims(e) {
    const n = e.idTokenClaims;
    if (n) {
      if (n.login_hint) return n.login_hint;
      this.logger.verbose(
        "The ID Token Claims tied to the provided account do not contain a login_hint claim, logoutHint will not be added to logout request"
      );
    } else
      this.logger.verbose(
        "The provided account does not contain ID Token Claims, logoutHint will not be added to logout request"
      );
    return null;
  }
  async createAuthCodeClient(e, n, r, o) {
    this.performanceClient.addQueueMeasurement(
      E.StandardInteractionClientCreateAuthCodeClient,
      this.correlationId
    );
    const i = await x(
      this.getClientConfiguration.bind(this),
      E.StandardInteractionClientGetClientConfiguration,
      this.logger,
      this.performanceClient,
      this.correlationId
    )(e, n, r, o);
    return new Wv(i, this.performanceClient);
  }
  async getClientConfiguration(e, n, r, o) {
    this.performanceClient.addQueueMeasurement(
      E.StandardInteractionClientGetClientConfiguration,
      this.correlationId
    );
    const i = await x(
        this.getDiscoveredAuthority.bind(this),
        E.StandardInteractionClientGetDiscoveredAuthority,
        this.logger,
        this.performanceClient,
        this.correlationId
      )(n, r, o),
      a = this.config.system.loggerOptions;
    return {
      authOptions: {
        clientId: this.config.auth.clientId,
        authority: i,
        clientCapabilities: this.config.auth.clientCapabilities,
      },
      systemOptions: {
        tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds,
        preventCorsPreflight: !0,
      },
      loggerOptions: {
        loggerCallback: a.loggerCallback,
        piiLoggingEnabled: a.piiLoggingEnabled,
        logLevel: a.logLevel,
        correlationId: this.correlationId,
      },
      cacheOptions: {
        claimsBasedCachingEnabled: this.config.cache.claimsBasedCachingEnabled,
      },
      cryptoInterface: this.browserCrypto,
      networkInterface: this.networkClient,
      storageInterface: this.browserStorage,
      serverTelemetryManager: e,
      libraryInfo: {
        sku: Gt.MSAL_SKU,
        version: Sh,
        cpu: T.EMPTY_STRING,
        os: T.EMPTY_STRING,
      },
      telemetry: this.config.telemetry,
    };
  }
  async initializeAuthorizationRequest(e, n) {
    this.performanceClient.addQueueMeasurement(
      E.StandardInteractionClientInitializeAuthorizationRequest,
      this.correlationId
    );
    const r = this.getRedirectUri(e.redirectUri),
      o = { interactionType: n },
      i = Qt.setRequestState(
        this.browserCrypto,
        (e && e.state) || T.EMPTY_STRING,
        o
      ),
      s = {
        ...(await x(
          Eh,
          E.InitializeBaseRequest,
          this.logger,
          this.performanceClient,
          this.correlationId
        )(
          { ...e, correlationId: this.correlationId },
          this.config,
          this.performanceClient,
          this.logger
        )),
        redirectUri: r,
        state: i,
        nonce: e.nonce || Pn(),
        responseMode: this.config.auth.OIDCOptions.serverResponseType,
      },
      c = e.account || this.browserStorage.getActiveAccount();
    if (
      (c &&
        (this.logger.verbose(
          "Setting validated request account",
          this.correlationId
        ),
        this.logger.verbosePii(
          `Setting validated request account: ${c.homeAccountId}`,
          this.correlationId
        ),
        (s.account = c)),
      !s.loginHint && !c)
    ) {
      const l = this.browserStorage.getLegacyLoginHint();
      l && (s.loginHint = l);
    }
    return s;
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ const jI = "ContentError",
  Ny = "user_switch";
/*! @azure/msal-browser v3.13.0 2024-04-11 */ const VI =
    "USER_INTERACTION_REQUIRED",
  KI = "USER_CANCEL",
  GI = "NO_NETWORK",
  WI = "PERSISTENT_ERROR",
  qI = "DISABLED",
  YI = "ACCOUNT_UNAVAILABLE";
/*! @azure/msal-browser v3.13.0 2024-04-11 */ const QI = -2147186943,
  JI = {
    [Ny]: "User attempted to switch accounts in the native broker, which is not allowed. All new accounts must sign-in through the standard web flow first, please try again.",
  };
class In extends ke {
  constructor(e, n, r) {
    super(e, n),
      Object.setPrototypeOf(this, In.prototype),
      (this.name = "NativeAuthError"),
      (this.ext = r);
  }
}
function Zr(t) {
  if (
    (t.ext && t.ext.status && (t.ext.status === WI || t.ext.status === qI)) ||
    (t.ext && t.ext.error && t.ext.error === QI)
  )
    return !0;
  switch (t.errorCode) {
    case jI:
      return !0;
    default:
      return !1;
  }
}
function Au(t, e, n) {
  if (n && n.status)
    switch (n.status) {
      case YI:
        return yu(Gv);
      case VI:
        return new Zt(t, e);
      case KI:
        return L(_r);
      case GI:
        return L(ws);
    }
  return new In(t, JI[t] || e, n);
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class My extends zo {
  async acquireToken(e) {
    this.performanceClient.addQueueMeasurement(
      E.SilentCacheClientAcquireToken,
      e.correlationId
    );
    const n = this.initializeServerTelemetryManager(
        pe.acquireTokenSilent_silentFlow
      ),
      r = await x(
        this.getClientConfiguration.bind(this),
        E.StandardInteractionClientGetClientConfiguration,
        this.logger,
        this.performanceClient,
        this.correlationId
      )(n, e.authority, e.azureCloudOptions, e.account),
      o = new K0(r, this.performanceClient);
    this.logger.verbose("Silent auth client created");
    try {
      const a = (
        await x(
          o.acquireCachedToken.bind(o),
          E.SilentFlowClientAcquireCachedToken,
          this.logger,
          this.performanceClient,
          e.correlationId
        )(e)
      )[0];
      return (
        this.performanceClient.addFields({ fromCache: !0 }, e.correlationId), a
      );
    } catch (i) {
      throw (
        (i instanceof oa &&
          i.errorCode === ph &&
          this.logger.verbose(
            "Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair."
          ),
        i)
      );
    }
  }
  logout(e) {
    this.logger.verbose("logoutRedirect called");
    const n = this.initializeLogoutRequest(e);
    return this.clearCacheOnLogout(n == null ? void 0 : n.account);
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ const vl = {
  BROKER_CLIENT_ID: "brk_client_id",
  BROKER_REDIRECT_URI: "brk_redirect_uri",
};
class yo extends Py {
  constructor(e, n, r, o, i, a, s, c, l, u, d, h) {
    super(e, n, r, o, i, a, c, l, h),
      (this.apiId = s),
      (this.accountId = u),
      (this.nativeMessageHandler = l),
      (this.nativeStorageManager = d),
      (this.silentCacheClient = new My(
        e,
        this.nativeStorageManager,
        r,
        o,
        i,
        a,
        c,
        l,
        h
      ));
  }
  async acquireToken(e) {
    this.performanceClient.addQueueMeasurement(
      E.NativeInteractionClientAcquireToken,
      e.correlationId
    ),
      this.logger.trace("NativeInteractionClient - acquireToken called.");
    const n = this.performanceClient.startMeasurement(
        E.NativeInteractionClientAcquireToken,
        e.correlationId
      ),
      r = gn(),
      o = await this.initializeNativeRequest(e);
    try {
      const c = await this.acquireTokensFromCache(this.accountId, o);
      return n.end({ success: !0, isNativeBroker: !1, fromCache: !0 }), c;
    } catch {
      this.logger.info(
        "MSAL internal Cache does not contain tokens, proceed to make a native call"
      );
    }
    const i = { method: yr.GetToken, request: o },
      a = await this.nativeMessageHandler.sendMessage(i),
      s = this.validateNativeResponse(a);
    return this.handleNativeResponse(s, o, r)
      .then(
        (c) => (
          n.end({ success: !0, isNativeBroker: !0, requestId: c.requestId }), c
        )
      )
      .catch((c) => {
        throw (
          (n.end({
            success: !1,
            errorCode: c.errorCode,
            subErrorCode: c.subError,
            isNativeBroker: !0,
          }),
          c)
        );
      });
  }
  createSilentCacheRequest(e, n) {
    return {
      authority: e.authority,
      correlationId: this.correlationId,
      scopes: Ne.fromString(e.scope).asArray(),
      account: n,
      forceRefresh: !1,
    };
  }
  async acquireTokensFromCache(e, n) {
    if (!e)
      throw (
        (this.logger.warning(
          "NativeInteractionClient:acquireTokensFromCache - No nativeAccountId provided"
        ),
        O(hu))
      );
    const r = this.browserStorage.getBaseAccountInfo({ nativeAccountId: e });
    if (!r) throw O(hu);
    try {
      const o = this.createSilentCacheRequest(n, r),
        i = await this.silentCacheClient.acquireToken(o),
        a = {
          ...r,
          idTokenClaims: i == null ? void 0 : i.idTokenClaims,
          idToken: i == null ? void 0 : i.idToken,
        };
      return { ...i, account: a };
    } catch (o) {
      throw o;
    }
  }
  async acquireTokenRedirect(e) {
    this.logger.trace("NativeInteractionClient - acquireTokenRedirect called.");
    const n = await this.initializeNativeRequest(e),
      r = { method: yr.GetToken, request: n };
    try {
      const a = await this.nativeMessageHandler.sendMessage(r);
      this.validateNativeResponse(a);
    } catch (a) {
      if (a instanceof In && Zr(a)) throw a;
    }
    this.browserStorage.setTemporaryCache(
      oe.NATIVE_REQUEST,
      JSON.stringify(n),
      !0
    );
    const o = {
        apiId: pe.acquireTokenRedirect,
        timeout: this.config.system.redirectNavigationTimeout,
        noHistory: !1,
      },
      i = this.config.auth.navigateToLoginRequestUrl
        ? window.location.href
        : this.getRedirectUri(e.redirectUri);
    await this.navigationClient.navigateExternal(i, o);
  }
  async handleRedirectPromise(e, n) {
    if (
      (this.logger.trace(
        "NativeInteractionClient - handleRedirectPromise called."
      ),
      !this.browserStorage.isInteractionInProgress(!0))
    )
      return (
        this.logger.info(
          "handleRedirectPromise called but there is no interaction in progress, returning null."
        ),
        null
      );
    const r = this.browserStorage.getCachedNativeRequest();
    if (!r)
      return (
        this.logger.verbose(
          "NativeInteractionClient - handleRedirectPromise called but there is no cached request, returning null."
        ),
        e &&
          n &&
          (e == null || e.addFields({ errorCode: "no_cached_request" }, n)),
        null
      );
    const { prompt: o, ...i } = r;
    o &&
      this.logger.verbose(
        "NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window."
      ),
      this.browserStorage.removeItem(
        this.browserStorage.generateCacheKey(oe.NATIVE_REQUEST)
      );
    const a = { method: yr.GetToken, request: i },
      s = gn();
    try {
      this.logger.verbose(
        "NativeInteractionClient - handleRedirectPromise sending message to native broker."
      );
      const c = await this.nativeMessageHandler.sendMessage(a);
      this.validateNativeResponse(c);
      const l = this.handleNativeResponse(c, i, s);
      return this.browserStorage.setInteractionInProgress(!1), await l;
    } catch (c) {
      throw (this.browserStorage.setInteractionInProgress(!1), c);
    }
  }
  logout() {
    return (
      this.logger.trace("NativeInteractionClient - logout called."),
      Promise.reject("Logout not implemented yet")
    );
  }
  async handleNativeResponse(e, n, r) {
    var u;
    this.logger.trace("NativeInteractionClient - handleNativeResponse called.");
    const o = Dr(e.id_token, dn),
      i = this.createHomeAccountIdentifier(e, o),
      a =
        (u = this.browserStorage.getAccountInfoFilteredBy({
          nativeAccountId: n.accountId,
        })) == null
          ? void 0
          : u.homeAccountId;
    if (i !== a && e.account.id !== n.accountId) throw Au(Ny);
    const s = await this.getDiscoveredAuthority(n.authority),
      c = ch(
        this.browserStorage,
        s,
        i,
        o,
        dn,
        e.client_info,
        void 0,
        o.tid,
        void 0,
        e.account.id,
        this.logger
      ),
      l = await this.generateAuthenticationResult(
        e,
        n,
        o,
        c,
        s.canonicalAuthority,
        r
      );
    return (
      this.cacheAccount(c),
      this.cacheNativeTokens(e, n, i, o, l.accessToken, l.tenantId, r),
      l
    );
  }
  createHomeAccountIdentifier(e, n) {
    return $e.generateHomeAccountId(
      e.client_info || T.EMPTY_STRING,
      Vt.Default,
      this.logger,
      this.browserCrypto,
      n
    );
  }
  generateScopes(e, n) {
    return e.scope ? Ne.fromString(e.scope) : Ne.fromString(n.scope);
  }
  async generatePopAccessToken(e, n) {
    if (n.tokenType === le.POP) {
      if (e.shr)
        return (
          this.logger.trace(
            "handleNativeServerResponse: SHR is enabled in native layer"
          ),
          e.shr
        );
      const r = new bo(this.browserCrypto),
        o = {
          resourceRequestMethod: n.resourceRequestMethod,
          resourceRequestUri: n.resourceRequestUri,
          shrClaims: n.shrClaims,
          shrNonce: n.shrNonce,
        };
      if (!n.keyId) throw O(qd);
      return r.signPopToken(e.access_token, n.keyId, o);
    } else return e.access_token;
  }
  async generateAuthenticationResult(e, n, r, o, i, a) {
    const s = this.addTelemetryFromNativeResponse(e),
      c = e.scope ? Ne.fromString(e.scope) : Ne.fromString(n.scope),
      l = e.account.properties || {},
      u = l.UID || r.oid || r.sub || T.EMPTY_STRING,
      d = l.TenantId || r.tid || T.EMPTY_STRING,
      h = rh(o.getAccountInfo(), void 0, r, e.id_token);
    h.nativeAccountId !== e.account.id && (h.nativeAccountId = e.account.id);
    const v = await this.generatePopAccessToken(e, n),
      g = n.tokenType === le.POP ? le.POP : le.BEARER;
    return {
      authority: i,
      uniqueId: u,
      tenantId: d,
      scopes: c.asArray(),
      account: h,
      idToken: e.id_token,
      idTokenClaims: r,
      accessToken: v,
      fromCache: s ? this.isResponseFromCache(s) : !1,
      expiresOn: new Date(Number(a + e.expires_in) * 1e3),
      tokenType: g,
      correlationId: this.correlationId,
      state: e.state,
      fromNativeBroker: !0,
    };
  }
  cacheAccount(e) {
    this.browserStorage.setAccount(e),
      this.browserStorage.removeAccountContext(e).catch((n) => {
        this.logger.error(
          `Error occurred while removing account context from browser storage. ${n}`
        );
      });
  }
  cacheNativeTokens(e, n, r, o, i, a, s) {
    const c = uc(r, n.authority, e.id_token || "", n.clientId, o.tid || ""),
      l =
        n.tokenType === le.POP
          ? T.SHR_NONCE_VALIDITY
          : (typeof e.expires_in == "string"
              ? parseInt(e.expires_in, 10)
              : e.expires_in) || 0,
      u = s + l,
      d = this.generateScopes(e, n),
      h = dc(
        r,
        n.authority,
        i,
        n.clientId,
        o.tid || a,
        d.printScopes(),
        u,
        0,
        dn
      ),
      v = new vo(void 0, c, h);
    this.nativeStorageManager.saveCacheRecord(v, n.storeInCache);
  }
  addTelemetryFromNativeResponse(e) {
    const n = this.getMATSFromResponse(e);
    return n
      ? (this.performanceClient.addFields(
          {
            extensionId: this.nativeMessageHandler.getExtensionId(),
            extensionVersion: this.nativeMessageHandler.getExtensionVersion(),
            matsBrokerVersion: n.broker_version,
            matsAccountJoinOnStart: n.account_join_on_start,
            matsAccountJoinOnEnd: n.account_join_on_end,
            matsDeviceJoin: n.device_join,
            matsPromptBehavior: n.prompt_behavior,
            matsApiErrorCode: n.api_error_code,
            matsUiVisible: n.ui_visible,
            matsSilentCode: n.silent_code,
            matsSilentBiSubCode: n.silent_bi_sub_code,
            matsSilentMessage: n.silent_message,
            matsSilentStatus: n.silent_status,
            matsHttpStatus: n.http_status,
            matsHttpEventCount: n.http_event_count,
          },
          this.correlationId
        ),
        n)
      : null;
  }
  validateNativeResponse(e) {
    if (
      e.hasOwnProperty("access_token") &&
      e.hasOwnProperty("id_token") &&
      e.hasOwnProperty("client_info") &&
      e.hasOwnProperty("account") &&
      e.hasOwnProperty("scope") &&
      e.hasOwnProperty("expires_in")
    )
      return e;
    throw rv(zd, "Response missing expected properties.");
  }
  getMATSFromResponse(e) {
    if (e.properties.MATS)
      try {
        return JSON.parse(e.properties.MATS);
      } catch {
        this.logger.error(
          "NativeInteractionClient - Error parsing MATS telemetry, returning null instead"
        );
      }
    return null;
  }
  isResponseFromCache(e) {
    return typeof e.is_cached > "u"
      ? (this.logger.verbose(
          "NativeInteractionClient - MATS telemetry does not contain field indicating if response was served from cache. Returning false."
        ),
        !1)
      : !!e.is_cached;
  }
  async initializeNativeRequest(e) {
    this.logger.trace(
      "NativeInteractionClient - initializeNativeRequest called"
    );
    const n = e.authority || this.config.auth.authority;
    e.account &&
      (await this.getDiscoveredAuthority(n, e.azureCloudOptions, e.account));
    const r = new X(n);
    r.validateAsUri();
    const { scopes: o, ...i } = e,
      a = new Ne(o || []);
    a.appendScopes(Bo);
    const s = () => {
        switch (this.apiId) {
          case pe.ssoSilent:
          case pe.acquireTokenSilent_silentFlow:
            return (
              this.logger.trace(
                "initializeNativeRequest: silent request sets prompt to none"
              ),
              We.NONE
            );
        }
        if (!e.prompt) {
          this.logger.trace("initializeNativeRequest: prompt was not provided");
          return;
        }
        switch (e.prompt) {
          case We.NONE:
          case We.CONSENT:
          case We.LOGIN:
            return (
              this.logger.trace(
                "initializeNativeRequest: prompt is compatible with native flow"
              ),
              e.prompt
            );
          default:
            throw (
              (this.logger.trace(
                `initializeNativeRequest: prompt = ${e.prompt} is not compatible with native flow`
              ),
              L(wy))
            );
        }
      },
      c = {
        ...i,
        accountId: this.accountId,
        clientId: this.config.auth.clientId,
        authority: r.urlString,
        scope: a.printScopes(),
        redirectUri: this.getRedirectUri(e.redirectUri),
        prompt: s(),
        correlationId: this.correlationId,
        tokenType: e.authenticationScheme,
        windowTitleSubstring: document.title,
        extraParameters: {
          ...e.extraQueryParameters,
          ...e.tokenQueryParameters,
        },
        extendedExpiryToken: !1,
      };
    if (
      (this.handleExtraBrokerParams(c),
      (c.extraParameters = c.extraParameters || {}),
      (c.extraParameters.telemetry = pi.MATS_TELEMETRY),
      e.authenticationScheme === le.POP)
    ) {
      const l = {
          resourceRequestUri: e.resourceRequestUri,
          resourceRequestMethod: e.resourceRequestMethod,
          shrClaims: e.shrClaims,
          shrNonce: e.shrNonce,
        },
        u = new bo(this.browserCrypto),
        d = await x(
          u.generateCnf.bind(u),
          E.PopTokenGenerateCnf,
          this.logger,
          this.performanceClient,
          this.correlationId
        )(l, this.logger);
      (c.reqCnf = d.reqCnfHash), (c.keyId = d.kid);
    }
    return c;
  }
  handleExtraBrokerParams(e) {
    if (
      e.extraParameters &&
      e.extraParameters.hasOwnProperty(vl.BROKER_CLIENT_ID) &&
      e.extraParameters.hasOwnProperty(vl.BROKER_REDIRECT_URI) &&
      e.extraParameters.hasOwnProperty(Ro)
    ) {
      const n = e.extraParameters[Ro],
        r = e.redirectUri,
        o = e.extraParameters[vl.BROKER_REDIRECT_URI];
      (e.extraParameters = { child_client_id: n, child_redirect_uri: r }),
        (e.redirectUri = o);
    }
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class ln {
  constructor(e, n, r, o) {
    (this.logger = e),
      (this.handshakeTimeoutMs = n),
      (this.extensionId = o),
      (this.resolvers = new Map()),
      (this.handshakeResolvers = new Map()),
      (this.messageChannel = new MessageChannel()),
      (this.windowListener = this.onWindowMessage.bind(this)),
      (this.performanceClient = r),
      (this.handshakeEvent = r.startMeasurement(
        E.NativeMessageHandlerHandshake
      ));
  }
  async sendMessage(e) {
    this.logger.trace("NativeMessageHandler - sendMessage called.");
    const n = {
      channel: pi.CHANNEL_ID,
      extensionId: this.extensionId,
      responseId: Pn(),
      body: e,
    };
    return (
      this.logger.trace(
        "NativeMessageHandler - Sending request to browser extension"
      ),
      this.logger.tracePii(
        `NativeMessageHandler - Sending request to browser extension: ${JSON.stringify(
          n
        )}`
      ),
      this.messageChannel.port1.postMessage(n),
      new Promise((r, o) => {
        this.resolvers.set(n.responseId, { resolve: r, reject: o });
      })
    );
  }
  static async createProvider(e, n, r) {
    e.trace("NativeMessageHandler - createProvider called.");
    try {
      const o = new ln(e, n, r, pi.PREFERRED_EXTENSION_ID);
      return await o.sendHandshakeRequest(), o;
    } catch {
      const i = new ln(e, n, r);
      return await i.sendHandshakeRequest(), i;
    }
  }
  async sendHandshakeRequest() {
    this.logger.trace("NativeMessageHandler - sendHandshakeRequest called."),
      window.addEventListener("message", this.windowListener, !1);
    const e = {
      channel: pi.CHANNEL_ID,
      extensionId: this.extensionId,
      responseId: Pn(),
      body: { method: yr.HandshakeRequest },
    };
    return (
      this.handshakeEvent.add({
        extensionId: this.extensionId,
        extensionHandshakeTimeoutMs: this.handshakeTimeoutMs,
      }),
      (this.messageChannel.port1.onmessage = (n) => {
        this.onChannelMessage(n);
      }),
      window.postMessage(e, window.origin, [this.messageChannel.port2]),
      new Promise((n, r) => {
        this.handshakeResolvers.set(e.responseId, { resolve: n, reject: r }),
          (this.timeoutId = window.setTimeout(() => {
            window.removeEventListener("message", this.windowListener, !1),
              this.messageChannel.port1.close(),
              this.messageChannel.port2.close(),
              this.handshakeEvent.end({
                extensionHandshakeTimedOut: !0,
                success: !1,
              }),
              r(L(yy)),
              this.handshakeResolvers.delete(e.responseId);
          }, this.handshakeTimeoutMs));
      })
    );
  }
  onWindowMessage(e) {
    if (
      (this.logger.trace("NativeMessageHandler - onWindowMessage called"),
      e.source !== window)
    )
      return;
    const n = e.data;
    if (
      !(!n.channel || n.channel !== pi.CHANNEL_ID) &&
      !(n.extensionId && n.extensionId !== this.extensionId) &&
      n.body.method === yr.HandshakeRequest
    ) {
      const r = this.handshakeResolvers.get(n.responseId);
      if (!r) {
        this.logger.trace(
          `NativeMessageHandler.onWindowMessage - resolver can't be found for request ${n.responseId}`
        );
        return;
      }
      this.logger.verbose(
        n.extensionId
          ? `Extension with id: ${n.extensionId} not installed`
          : "No extension installed"
      ),
        clearTimeout(this.timeoutId),
        this.messageChannel.port1.close(),
        this.messageChannel.port2.close(),
        window.removeEventListener("message", this.windowListener, !1),
        this.handshakeEvent.end({ success: !1, extensionInstalled: !1 }),
        r.reject(L(Cy));
    }
  }
  onChannelMessage(e) {
    this.logger.trace("NativeMessageHandler - onChannelMessage called.");
    const n = e.data,
      r = this.resolvers.get(n.responseId),
      o = this.handshakeResolvers.get(n.responseId);
    try {
      const i = n.body.method;
      if (i === yr.Response) {
        if (!r) return;
        const a = n.body.response;
        if (
          (this.logger.trace(
            "NativeMessageHandler - Received response from browser extension"
          ),
          this.logger.tracePii(
            `NativeMessageHandler - Received response from browser extension: ${JSON.stringify(
              a
            )}`
          ),
          a.status !== "Success")
        )
          r.reject(Au(a.code, a.description, a.ext));
        else if (a.result)
          a.result.code && a.result.description
            ? r.reject(Au(a.result.code, a.result.description, a.result.ext))
            : r.resolve(a.result);
        else throw rv(zd, "Event does not contain result.");
        this.resolvers.delete(n.responseId);
      } else if (i === yr.HandshakeResponse) {
        if (!o) {
          this.logger.trace(
            `NativeMessageHandler.onChannelMessage - resolver can't be found for request ${n.responseId}`
          );
          return;
        }
        clearTimeout(this.timeoutId),
          window.removeEventListener("message", this.windowListener, !1),
          (this.extensionId = n.extensionId),
          (this.extensionVersion = n.body.version),
          this.logger.verbose(
            `NativeMessageHandler - Received HandshakeResponse from extension: ${this.extensionId}`
          ),
          this.handshakeEvent.end({ extensionInstalled: !0, success: !0 }),
          o.resolve(),
          this.handshakeResolvers.delete(n.responseId);
      }
    } catch (i) {
      this.logger.error("Error parsing response from WAM Extension"),
        this.logger.errorPii(`Error parsing response from WAM Extension: ${i}`),
        this.logger.errorPii(`Unable to parse ${e}`),
        r ? r.reject(i) : o && o.reject(i);
    }
  }
  getExtensionId() {
    return this.extensionId;
  }
  getExtensionVersion() {
    return this.extensionVersion;
  }
  static isNativeAvailable(e, n, r, o) {
    if ((n.trace("isNativeAvailable called"), !e.system.allowNativeBroker))
      return (
        n.trace(
          "isNativeAvailable: allowNativeBroker is not enabled, returning false"
        ),
        !1
      );
    if (!r)
      return (
        n.trace(
          "isNativeAvailable: WAM extension provider is not initialized, returning false"
        ),
        !1
      );
    if (o)
      switch (o) {
        case le.BEARER:
        case le.POP:
          return (
            n.trace(
              "isNativeAvailable: authenticationScheme is supported, returning true"
            ),
            !0
          );
        default:
          return (
            n.trace(
              "isNativeAvailable: authenticationScheme is not supported, returning false"
            ),
            !1
          );
      }
    return !0;
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class Th {
  constructor(e, n, r, o, i) {
    (this.authModule = e),
      (this.browserStorage = n),
      (this.authCodeRequest = r),
      (this.logger = o),
      (this.performanceClient = i);
  }
  async handleCodeResponse(e, n) {
    this.performanceClient.addQueueMeasurement(
      E.HandleCodeResponse,
      n.correlationId
    );
    let r;
    try {
      r = this.authModule.handleFragmentResponse(e, n.state);
    } catch (o) {
      throw o instanceof ar && o.subError === _r ? L(_r) : o;
    }
    return x(
      this.handleCodeResponseFromServer.bind(this),
      E.HandleCodeResponseFromServer,
      this.logger,
      this.performanceClient,
      n.correlationId
    )(r, n);
  }
  async handleCodeResponseFromServer(e, n, r = !0) {
    if (
      (this.performanceClient.addQueueMeasurement(
        E.HandleCodeResponseFromServer,
        n.correlationId
      ),
      this.logger.trace(
        "InteractionHandler.handleCodeResponseFromServer called"
      ),
      (this.authCodeRequest.code = e.code),
      e.cloud_instance_host_name &&
        (await x(
          this.authModule.updateAuthority.bind(this.authModule),
          E.UpdateTokenEndpointAuthority,
          this.logger,
          this.performanceClient,
          n.correlationId
        )(e.cloud_instance_host_name, n.correlationId)),
      r && (e.nonce = n.nonce || void 0),
      (e.state = n.state),
      e.client_info)
    )
      this.authCodeRequest.clientInfo = e.client_info;
    else {
      const i = this.createCcsCredentials(n);
      i && (this.authCodeRequest.ccsCredential = i);
    }
    return await x(
      this.authModule.acquireToken.bind(this.authModule),
      E.AuthClientAcquireToken,
      this.logger,
      this.performanceClient,
      n.correlationId
    )(this.authCodeRequest, e);
  }
  createCcsCredentials(e) {
    return e.account
      ? { credential: e.account.homeAccountId, type: It.HOME_ACCOUNT_ID }
      : e.loginHint
      ? { credential: e.loginHint, type: It.UPN }
      : null;
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ function xy(t, e, n) {
  const r = vs(t);
  if (!r)
    throw Hv(t)
      ? (n.error(
          `A ${e} is present in the iframe but it does not contain known properties. It's likely that the ${e} has been replaced by code running on the redirectUri page.`
        ),
        n.errorPii(`The ${e} detected is: ${t}`),
        L(Xv))
      : (n.error(
          `The request has returned to the redirectUri but a ${e} is not present. It's likely that the ${e} has been removed or the page has been redirected by code running on the redirectUri page.`
        ),
        L(Jv));
  return r;
}
function XI(t, e, n) {
  if (!t.state) throw L(hh);
  const r = Oy(e, t.state);
  if (!r) throw L(Zv);
  if (r.interactionType !== n) throw L(ey);
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class ZI extends zo {
  constructor(e, n, r, o, i, a, s, c, l, u) {
    super(e, n, r, o, i, a, s, l, u),
      (this.unloadWindow = this.unloadWindow.bind(this)),
      (this.nativeStorage = c);
  }
  acquireToken(e) {
    try {
      const n = this.generatePopupName(
          e.scopes || Bo,
          e.authority || this.config.auth.authority
        ),
        r = e.popupWindowAttributes || {};
      if (this.config.system.asyncPopups)
        return (
          this.logger.verbose("asyncPopups set to true, acquiring token"),
          this.acquireTokenPopupAsync(e, n, r)
        );
      {
        this.logger.verbose(
          "asyncPopup set to false, opening popup before acquiring token"
        );
        const o = this.openSizedPopup("about:blank", n, r);
        return this.acquireTokenPopupAsync(e, n, r, o);
      }
    } catch (n) {
      return Promise.reject(n);
    }
  }
  logout(e) {
    try {
      this.logger.verbose("logoutPopup called");
      const n = this.initializeLogoutRequest(e),
        r = this.generateLogoutPopupName(n),
        o = e && e.authority,
        i = e && e.mainWindowRedirectUri,
        a = (e == null ? void 0 : e.popupWindowAttributes) || {};
      if (this.config.system.asyncPopups)
        return (
          this.logger.verbose("asyncPopups set to true"),
          this.logoutPopupAsync(n, r, a, o, void 0, i)
        );
      {
        this.logger.verbose("asyncPopup set to false, opening popup");
        const s = this.openSizedPopup("about:blank", r, a);
        return this.logoutPopupAsync(n, r, a, o, s, i);
      }
    } catch (n) {
      return Promise.reject(n);
    }
  }
  async acquireTokenPopupAsync(e, n, r, o) {
    this.logger.verbose("acquireTokenPopupAsync called");
    const i = this.initializeServerTelemetryManager(pe.acquireTokenPopup),
      a = await x(
        this.initializeAuthorizationRequest.bind(this),
        E.StandardInteractionClientInitializeAuthorizationRequest,
        this.logger,
        this.performanceClient,
        this.correlationId
      )(e, H.Popup);
    by(a.authority);
    try {
      const s = await x(
          this.initializeAuthorizationCodeRequest.bind(this),
          E.StandardInteractionClientInitializeAuthorizationCodeRequest,
          this.logger,
          this.performanceClient,
          this.correlationId
        )(a),
        c = await x(
          this.createAuthCodeClient.bind(this),
          E.StandardInteractionClientCreateAuthCodeClient,
          this.logger,
          this.performanceClient,
          this.correlationId
        )(i, a.authority, a.azureCloudOptions, a.account),
        l = ln.isNativeAvailable(
          this.config,
          this.logger,
          this.nativeMessageHandler,
          e.authenticationScheme
        );
      let u;
      l &&
        (u = this.performanceClient.startMeasurement(
          E.FetchAccountIdWithNativeBroker,
          e.correlationId
        ));
      const d = await c.getAuthCodeUrl({ ...a, nativeBroker: l }),
        h = new Th(
          c,
          this.browserStorage,
          s,
          this.logger,
          this.performanceClient
        ),
        v = { popup: o, popupName: n, popupWindowAttributes: r },
        g = this.initiateAuthRequest(d, v);
      this.eventHandler.emitEvent(
        F.POPUP_OPENED,
        H.Popup,
        { popupWindow: g },
        null
      );
      const m = await this.monitorPopupForHash(g),
        C = Ur(
          xy,
          E.DeserializeResponse,
          this.logger,
          this.performanceClient,
          this.correlationId
        )(m, this.config.auth.OIDCOptions.serverResponseType, this.logger);
      if (
        (an.removeThrottle(this.browserStorage, this.config.auth.clientId, s),
        C.accountId)
      ) {
        if (
          (this.logger.verbose(
            "Account id found in hash, calling WAM for token"
          ),
          u && u.end({ success: !0, isNativeBroker: !0 }),
          !this.nativeMessageHandler)
        )
          throw L(ra);
        const p = new yo(
            this.config,
            this.browserStorage,
            this.browserCrypto,
            this.logger,
            this.eventHandler,
            this.navigationClient,
            pe.acquireTokenPopup,
            this.performanceClient,
            this.nativeMessageHandler,
            C.accountId,
            this.nativeStorage,
            a.correlationId
          ),
          { userRequestState: y } = Qt.parseRequestState(
            this.browserCrypto,
            a.state
          );
        return await p.acquireToken({ ...a, state: y, prompt: void 0 });
      }
      return await h.handleCodeResponse(C, a);
    } catch (s) {
      throw (
        (o && o.close(),
        s instanceof ke &&
          (s.setCorrelationId(this.correlationId), i.cacheFailedRequest(s)),
        s)
      );
    }
  }
  async logoutPopupAsync(e, n, r, o, i, a) {
    var c, l;
    this.logger.verbose("logoutPopupAsync called"),
      this.eventHandler.emitEvent(F.LOGOUT_START, H.Popup, e);
    const s = this.initializeServerTelemetryManager(pe.logoutPopup);
    try {
      await this.clearCacheOnLogout(e.account);
      const u = await x(
        this.createAuthCodeClient.bind(this),
        E.StandardInteractionClientCreateAuthCodeClient,
        this.logger,
        this.performanceClient,
        this.correlationId
      )(s, o, void 0, e.account || void 0);
      try {
        u.authority.endSessionEndpoint;
      } catch {
        if (
          (c = e.account) != null &&
          c.homeAccountId &&
          e.postLogoutRedirectUri &&
          u.authority.protocolMode === bn.OIDC
        ) {
          if (
            (this.browserStorage.removeAccount(
              (l = e.account) == null ? void 0 : l.homeAccountId
            ),
            this.eventHandler.emitEvent(F.LOGOUT_SUCCESS, H.Popup, e),
            a)
          ) {
            const v = {
                apiId: pe.logoutPopup,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1,
              },
              g = X.getAbsoluteUrl(a, kn());
            await this.navigationClient.navigateInternal(g, v);
          }
          i && i.close();
          return;
        }
      }
      const d = u.getLogoutUri(e);
      this.eventHandler.emitEvent(F.LOGOUT_SUCCESS, H.Popup, e);
      const h = this.openPopup(d, {
        popupName: n,
        popupWindowAttributes: r,
        popup: i,
      });
      if (
        (this.eventHandler.emitEvent(
          F.POPUP_OPENED,
          H.Popup,
          { popupWindow: h },
          null
        ),
        await this.monitorPopupForHash(h).catch(() => {}),
        a)
      ) {
        const v = {
            apiId: pe.logoutPopup,
            timeout: this.config.system.redirectNavigationTimeout,
            noHistory: !1,
          },
          g = X.getAbsoluteUrl(a, kn());
        this.logger.verbose(
          "Redirecting main window to url specified in the request"
        ),
          this.logger.verbosePii(`Redirecting main window to: ${g}`),
          await this.navigationClient.navigateInternal(g, v);
      } else this.logger.verbose("No main window navigation requested");
    } catch (u) {
      throw (
        (i && i.close(),
        u instanceof ke &&
          (u.setCorrelationId(this.correlationId), s.cacheFailedRequest(u)),
        this.browserStorage.setInteractionInProgress(!1),
        this.eventHandler.emitEvent(F.LOGOUT_FAILURE, H.Popup, null, u),
        this.eventHandler.emitEvent(F.LOGOUT_END, H.Popup),
        u)
      );
    }
    this.eventHandler.emitEvent(F.LOGOUT_END, H.Popup);
  }
  initiateAuthRequest(e, n) {
    if (e)
      return this.logger.infoPii(`Navigate to: ${e}`), this.openPopup(e, n);
    throw (this.logger.error("Navigate url is empty"), L(mc));
  }
  monitorPopupForHash(e) {
    return new Promise((n, r) => {
      this.logger.verbose("PopupHandler.monitorPopupForHash - polling started");
      const o = setInterval(() => {
        if (e.closed) {
          this.logger.error("PopupHandler.monitorPopupForHash - window closed"),
            clearInterval(o),
            r(L(_r));
          return;
        }
        let i = "";
        try {
          i = e.location.href;
        } catch {}
        if (!i || i === "about:blank") return;
        clearInterval(o);
        let a = "";
        const s = this.config.auth.OIDCOptions.serverResponseType;
        e && (s === na.QUERY ? (a = e.location.search) : (a = e.location.hash)),
          this.logger.verbose(
            "PopupHandler.monitorPopupForHash - popup window is on same origin as caller"
          ),
          n(a);
      }, this.config.system.pollIntervalMilliseconds);
    }).finally(() => {
      this.cleanPopup(e);
    });
  }
  openPopup(e, n) {
    try {
      let r;
      if (
        (n.popup
          ? ((r = n.popup),
            this.logger.verbosePii(`Navigating popup window to: ${e}`),
            r.location.assign(e))
          : typeof n.popup > "u" &&
            (this.logger.verbosePii(`Opening popup window to: ${e}`),
            (r = this.openSizedPopup(e, n.popupName, n.popupWindowAttributes))),
        !r)
      )
        throw L(ry);
      return (
        r.focus && r.focus(),
        (this.currentWindow = r),
        window.addEventListener("beforeunload", this.unloadWindow),
        r
      );
    } catch (r) {
      throw (
        (this.logger.error("error opening popup " + r.message),
        this.browserStorage.setInteractionInProgress(!1),
        L(ny))
      );
    }
  }
  openSizedPopup(e, n, r) {
    var h, v, g, m;
    const o = window.screenLeft ? window.screenLeft : window.screenX,
      i = window.screenTop ? window.screenTop : window.screenY,
      a =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      s =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    let c = (h = r.popupSize) == null ? void 0 : h.width,
      l = (v = r.popupSize) == null ? void 0 : v.height,
      u = (g = r.popupPosition) == null ? void 0 : g.top,
      d = (m = r.popupPosition) == null ? void 0 : m.left;
    return (
      (!c || c < 0 || c > a) &&
        (this.logger.verbose(
          "Default popup window width used. Window width not configured or invalid."
        ),
        (c = Gt.POPUP_WIDTH)),
      (!l || l < 0 || l > s) &&
        (this.logger.verbose(
          "Default popup window height used. Window height not configured or invalid."
        ),
        (l = Gt.POPUP_HEIGHT)),
      (!u || u < 0 || u > s) &&
        (this.logger.verbose(
          "Default popup window top position used. Window top not configured or invalid."
        ),
        (u = Math.max(0, s / 2 - Gt.POPUP_HEIGHT / 2 + i))),
      (!d || d < 0 || d > a) &&
        (this.logger.verbose(
          "Default popup window left position used. Window left not configured or invalid."
        ),
        (d = Math.max(0, a / 2 - Gt.POPUP_WIDTH / 2 + o))),
      window.open(
        e,
        n,
        `width=${c}, height=${l}, top=${u}, left=${d}, scrollbars=yes`
      )
    );
  }
  unloadWindow(e) {
    this.browserStorage.cleanRequestByInteractionType(H.Popup),
      this.currentWindow && this.currentWindow.close(),
      e.preventDefault();
  }
  cleanPopup(e) {
    e && e.close(),
      window.removeEventListener("beforeunload", this.unloadWindow),
      this.browserStorage.setInteractionInProgress(!1);
  }
  generatePopupName(e, n) {
    return `${Gt.POPUP_NAME_PREFIX}.${this.config.auth.clientId}.${e.join(
      "-"
    )}.${n}.${this.correlationId}`;
  }
  generateLogoutPopupName(e) {
    const n = e.account && e.account.homeAccountId;
    return `${Gt.POPUP_NAME_PREFIX}.${this.config.auth.clientId}.${n}.${this.correlationId}`;
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class _p {
  constructor(e, n, r, o, i) {
    (this.authModule = e),
      (this.browserStorage = n),
      (this.authCodeRequest = r),
      (this.logger = o),
      (this.performanceClient = i);
  }
  async initiateAuthRequest(e, n) {
    if (
      (this.logger.verbose("RedirectHandler.initiateAuthRequest called"), e)
    ) {
      n.redirectStartPage &&
        (this.logger.verbose(
          "RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page"
        ),
        this.browserStorage.setTemporaryCache(
          oe.ORIGIN_URI,
          n.redirectStartPage,
          !0
        )),
        this.browserStorage.setTemporaryCache(
          oe.CORRELATION_ID,
          this.authCodeRequest.correlationId,
          !0
        ),
        this.browserStorage.cacheCodeRequest(this.authCodeRequest),
        this.logger.infoPii(
          `RedirectHandler.initiateAuthRequest: Navigate to: ${e}`
        );
      const r = {
        apiId: pe.acquireTokenRedirect,
        timeout: n.redirectTimeout,
        noHistory: !1,
      };
      if (typeof n.onRedirectNavigate == "function")
        if (
          (this.logger.verbose(
            "RedirectHandler.initiateAuthRequest: Invoking onRedirectNavigate callback"
          ),
          n.onRedirectNavigate(e) !== !1)
        ) {
          this.logger.verbose(
            "RedirectHandler.initiateAuthRequest: onRedirectNavigate did not return false, navigating"
          ),
            await n.navigationClient.navigateExternal(e, r);
          return;
        } else {
          this.logger.verbose(
            "RedirectHandler.initiateAuthRequest: onRedirectNavigate returned false, stopping navigation"
          );
          return;
        }
      else {
        this.logger.verbose(
          "RedirectHandler.initiateAuthRequest: Navigating window to navigate url"
        ),
          await n.navigationClient.navigateExternal(e, r);
        return;
      }
    } else
      throw (
        (this.logger.info(
          "RedirectHandler.initiateAuthRequest: Navigate url is empty"
        ),
        L(mc))
      );
  }
  async handleCodeResponse(e, n) {
    this.logger.verbose("RedirectHandler.handleCodeResponse called"),
      this.browserStorage.setInteractionInProgress(!1);
    const r = this.browserStorage.generateStateKey(n),
      o = this.browserStorage.getTemporaryCache(r);
    if (!o) throw O(ps, "Cached State");
    let i;
    try {
      i = this.authModule.handleFragmentResponse(e, o);
    } catch (l) {
      throw l instanceof ar && l.subError === _r ? L(_r) : l;
    }
    const a = this.browserStorage.generateNonceKey(o),
      s = this.browserStorage.getTemporaryCache(a);
    if (
      ((this.authCodeRequest.code = i.code),
      i.cloud_instance_host_name &&
        (await x(
          this.authModule.updateAuthority.bind(this.authModule),
          E.UpdateTokenEndpointAuthority,
          this.logger,
          this.performanceClient,
          this.authCodeRequest.correlationId
        )(i.cloud_instance_host_name, this.authCodeRequest.correlationId)),
      (i.nonce = s || void 0),
      (i.state = o),
      i.client_info)
    )
      this.authCodeRequest.clientInfo = i.client_info;
    else {
      const l = this.checkCcsCredentials();
      l && (this.authCodeRequest.ccsCredential = l);
    }
    const c = await this.authModule.acquireToken(this.authCodeRequest, i);
    return this.browserStorage.cleanRequestByState(n), c;
  }
  checkCcsCredentials() {
    const e = this.browserStorage.getTemporaryCache(oe.CCS_CREDENTIAL, !0);
    if (e)
      try {
        return JSON.parse(e);
      } catch {
        this.authModule.logger.error("Cache credential could not be parsed"),
          this.authModule.logger.errorPii(
            `Cache credential could not be parsed: ${e}`
          );
      }
    return null;
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class eA extends zo {
  constructor(e, n, r, o, i, a, s, c, l, u) {
    super(e, n, r, o, i, a, s, l, u), (this.nativeStorage = c);
  }
  async acquireToken(e) {
    const n = await x(
      this.initializeAuthorizationRequest.bind(this),
      E.StandardInteractionClientInitializeAuthorizationRequest,
      this.logger,
      this.performanceClient,
      this.correlationId
    )(e, H.Redirect);
    this.browserStorage.updateCacheEntries(
      n.state,
      n.nonce,
      n.authority,
      n.loginHint || "",
      n.account || null
    );
    const r = this.initializeServerTelemetryManager(pe.acquireTokenRedirect),
      o = (i) => {
        i.persisted &&
          (this.logger.verbose(
            "Page was restored from back/forward cache. Clearing temporary cache."
          ),
          this.browserStorage.cleanRequestByState(n.state),
          this.eventHandler.emitEvent(F.RESTORE_FROM_BFCACHE, H.Redirect));
      };
    try {
      const i = await x(
          this.initializeAuthorizationCodeRequest.bind(this),
          E.StandardInteractionClientInitializeAuthorizationCodeRequest,
          this.logger,
          this.performanceClient,
          this.correlationId
        )(n),
        a = await x(
          this.createAuthCodeClient.bind(this),
          E.StandardInteractionClientCreateAuthCodeClient,
          this.logger,
          this.performanceClient,
          this.correlationId
        )(r, n.authority, n.azureCloudOptions, n.account),
        s = new _p(
          a,
          this.browserStorage,
          i,
          this.logger,
          this.performanceClient
        ),
        c = await a.getAuthCodeUrl({
          ...n,
          nativeBroker: ln.isNativeAvailable(
            this.config,
            this.logger,
            this.nativeMessageHandler,
            e.authenticationScheme
          ),
        }),
        l = this.getRedirectStartPage(e.redirectStartPage);
      return (
        this.logger.verbosePii(`Redirect start page: ${l}`),
        window.addEventListener("pageshow", o),
        await s.initiateAuthRequest(c, {
          navigationClient: this.navigationClient,
          redirectTimeout: this.config.system.redirectNavigationTimeout,
          redirectStartPage: l,
          onRedirectNavigate: e.onRedirectNavigate,
        })
      );
    } catch (i) {
      throw (
        (i instanceof ke &&
          (i.setCorrelationId(this.correlationId), r.cacheFailedRequest(i)),
        window.removeEventListener("pageshow", o),
        this.browserStorage.cleanRequestByState(n.state),
        i)
      );
    }
  }
  async handleRedirectPromise(e, n, r) {
    const o = this.initializeServerTelemetryManager(pe.handleRedirectPromise);
    try {
      if (!this.browserStorage.isInteractionInProgress(!0))
        return (
          this.logger.info(
            "handleRedirectPromise called but there is no interaction in progress, returning null."
          ),
          null
        );
      const [i, a] = this.getRedirectResponse(e || "");
      if (!i)
        return (
          this.logger.info(
            "handleRedirectPromise did not detect a response as a result of a redirect. Cleaning temporary cache."
          ),
          this.browserStorage.cleanRequestByInteractionType(H.Redirect),
          n &&
            r &&
            (n == null || n.addFields({ errorCode: "no_server_response" }, r)),
          null
        );
      const s =
          this.browserStorage.getTemporaryCache(oe.ORIGIN_URI, !0) ||
          T.EMPTY_STRING,
        c = X.removeHashFromUrl(s),
        l = X.removeHashFromUrl(window.location.href);
      if (c === l && this.config.auth.navigateToLoginRequestUrl)
        return (
          this.logger.verbose(
            "Current page is loginRequestUrl, handling response"
          ),
          s.indexOf("#") > -1 && gI(s),
          await this.handleResponse(i, o)
        );
      if (this.config.auth.navigateToLoginRequestUrl) {
        if (!Ch() || this.config.system.allowRedirectInIframe) {
          this.browserStorage.setTemporaryCache(oe.URL_HASH, a, !0);
          const u = {
            apiId: pe.handleRedirectPromise,
            timeout: this.config.system.redirectNavigationTimeout,
            noHistory: !0,
          };
          let d = !0;
          if (!s || s === "null") {
            const h = yI();
            this.browserStorage.setTemporaryCache(oe.ORIGIN_URI, h, !0),
              this.logger.warning(
                "Unable to get valid login request url from cache, redirecting to home page"
              ),
              (d = await this.navigationClient.navigateInternal(h, u));
          } else
            this.logger.verbose(`Navigating to loginRequestUrl: ${s}`),
              (d = await this.navigationClient.navigateInternal(s, u));
          if (!d) return await this.handleResponse(i, o);
        }
      } else
        return (
          this.logger.verbose(
            "NavigateToLoginRequestUrl set to false, handling response"
          ),
          await this.handleResponse(i, o)
        );
      return null;
    } catch (i) {
      throw (
        (i instanceof ke &&
          (i.setCorrelationId(this.correlationId), o.cacheFailedRequest(i)),
        this.browserStorage.cleanRequestByInteractionType(H.Redirect),
        i)
      );
    }
  }
  getRedirectResponse(e) {
    this.logger.verbose("getRedirectResponseHash called");
    let n = e;
    n ||
      (this.config.auth.OIDCOptions.serverResponseType === na.QUERY
        ? (n = window.location.search)
        : (n = window.location.hash));
    let r = vs(n);
    if (r) {
      try {
        XI(r, this.browserCrypto, H.Redirect);
      } catch (i) {
        return (
          i instanceof ke &&
            this.logger.error(
              `Interaction type validation failed due to ${i.errorCode}: ${i.errorMessage}`
            ),
          [null, ""]
        );
      }
      return (
        mI(window),
        this.logger.verbose(
          "Hash contains known properties, returning response hash"
        ),
        [r, n]
      );
    }
    const o = this.browserStorage.getTemporaryCache(oe.URL_HASH, !0);
    return (
      this.browserStorage.removeItem(
        this.browserStorage.generateCacheKey(oe.URL_HASH)
      ),
      o && ((r = vs(o)), r)
        ? (this.logger.verbose(
            "Hash does not contain known properties, returning cached hash"
          ),
          [r, o])
        : [null, ""]
    );
  }
  async handleResponse(e, n) {
    const r = e.state;
    if (!r) throw L(hh);
    const o = this.browserStorage.getCachedRequest(r);
    if (
      (this.logger.verbose("handleResponse called, retrieved cached request"),
      e.accountId)
    ) {
      if (
        (this.logger.verbose("Account id found in hash, calling WAM for token"),
        !this.nativeMessageHandler)
      )
        throw L(ra);
      const c = new yo(
          this.config,
          this.browserStorage,
          this.browserCrypto,
          this.logger,
          this.eventHandler,
          this.navigationClient,
          pe.acquireTokenPopup,
          this.performanceClient,
          this.nativeMessageHandler,
          e.accountId,
          this.nativeStorage,
          o.correlationId
        ),
        { userRequestState: l } = Qt.parseRequestState(this.browserCrypto, r);
      return c.acquireToken({ ...o, state: l, prompt: void 0 }).finally(() => {
        this.browserStorage.cleanRequestByState(r);
      });
    }
    const i = this.browserStorage.getCachedAuthority(r);
    if (!i) throw L(fh);
    const a = await x(
      this.createAuthCodeClient.bind(this),
      E.StandardInteractionClientCreateAuthCodeClient,
      this.logger,
      this.performanceClient,
      this.correlationId
    )(n, i);
    return (
      an.removeThrottle(this.browserStorage, this.config.auth.clientId, o),
      new _p(
        a,
        this.browserStorage,
        o,
        this.logger,
        this.performanceClient
      ).handleCodeResponse(e, r)
    );
  }
  async logout(e) {
    var o, i;
    this.logger.verbose("logoutRedirect called");
    const n = this.initializeLogoutRequest(e),
      r = this.initializeServerTelemetryManager(pe.logout);
    try {
      this.eventHandler.emitEvent(F.LOGOUT_START, H.Redirect, e),
        await this.clearCacheOnLogout(n.account);
      const a = {
          apiId: pe.logout,
          timeout: this.config.system.redirectNavigationTimeout,
          noHistory: !1,
        },
        s = await x(
          this.createAuthCodeClient.bind(this),
          E.StandardInteractionClientCreateAuthCodeClient,
          this.logger,
          this.performanceClient,
          this.correlationId
        )(r, e && e.authority, void 0, (e && e.account) || void 0);
      if (s.authority.protocolMode === bn.OIDC)
        try {
          s.authority.endSessionEndpoint;
        } catch {
          if ((o = n.account) != null && o.homeAccountId) {
            this.browserStorage.removeAccount(
              (i = n.account) == null ? void 0 : i.homeAccountId
            ),
              this.eventHandler.emitEvent(F.LOGOUT_SUCCESS, H.Redirect, n);
            return;
          }
        }
      const c = s.getLogoutUri(n);
      if (
        (this.eventHandler.emitEvent(F.LOGOUT_SUCCESS, H.Redirect, n),
        e && typeof e.onRedirectNavigate == "function")
      )
        if (e.onRedirectNavigate(c) !== !1) {
          this.logger.verbose(
            "Logout onRedirectNavigate did not return false, navigating"
          ),
            this.browserStorage.getInteractionInProgress() ||
              this.browserStorage.setInteractionInProgress(!0),
            await this.navigationClient.navigateExternal(c, a);
          return;
        } else
          this.browserStorage.setInteractionInProgress(!1),
            this.logger.verbose(
              "Logout onRedirectNavigate returned false, stopping navigation"
            );
      else {
        this.browserStorage.getInteractionInProgress() ||
          this.browserStorage.setInteractionInProgress(!0),
          await this.navigationClient.navigateExternal(c, a);
        return;
      }
    } catch (a) {
      throw (
        (a instanceof ke &&
          (a.setCorrelationId(this.correlationId), r.cacheFailedRequest(a)),
        this.eventHandler.emitEvent(F.LOGOUT_FAILURE, H.Redirect, null, a),
        this.eventHandler.emitEvent(F.LOGOUT_END, H.Redirect),
        a)
      );
    }
    this.eventHandler.emitEvent(F.LOGOUT_END, H.Redirect);
  }
  getRedirectStartPage(e) {
    const n = e || window.location.href;
    return X.getAbsoluteUrl(n, kn());
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ async function tA(t, e, n, r, o) {
  if ((e.addQueueMeasurement(E.SilentHandlerInitiateAuthRequest, r), !t))
    throw (n.info("Navigate url is empty"), L(mc));
  return o
    ? x(rA, E.SilentHandlerLoadFrame, n, e, r)(t, o, e, r)
    : Ur(oA, E.SilentHandlerLoadFrameSync, n, e, r)(t);
}
async function nA(t, e, n, r, o, i, a) {
  return (
    r.addQueueMeasurement(E.SilentHandlerMonitorIframeForHash, i),
    new Promise((s, c) => {
      e < Eu &&
        o.warning(
          `system.loadFrameTimeout or system.iframeHashTimeout set to lower (${e}ms) than the default (${Eu}ms). This may result in timeouts.`
        );
      const l = window.setTimeout(() => {
          window.clearInterval(u), c(L(oy));
        }, e),
        u = window.setInterval(() => {
          let d = "";
          const h = t.contentWindow;
          try {
            d = h ? h.location.href : "";
          } catch {}
          if (!d || d === "about:blank") return;
          let v = "";
          h &&
            (a === na.QUERY ? (v = h.location.search) : (v = h.location.hash)),
            window.clearTimeout(l),
            window.clearInterval(u),
            s(v);
        }, n);
    }).finally(() => {
      Ur(iA, E.RemoveHiddenIframe, o, r, i)(t);
    })
  );
}
function rA(t, e, n, r) {
  return (
    n.addQueueMeasurement(E.SilentHandlerLoadFrame, r),
    new Promise((o, i) => {
      const a = Ly();
      window.setTimeout(() => {
        if (!a) {
          i("Unable to load iframe");
          return;
        }
        (a.src = t), o(a);
      }, e);
    })
  );
}
function oA(t) {
  const e = Ly();
  return (e.src = t), e;
}
function Ly() {
  const t = document.createElement("iframe");
  return (
    (t.className = "msalSilentIframe"),
    (t.style.visibility = "hidden"),
    (t.style.position = "absolute"),
    (t.style.width = t.style.height = "0"),
    (t.style.border = "0"),
    t.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"),
    document.body.appendChild(t),
    t
  );
}
function iA(t) {
  document.body === t.parentNode && document.body.removeChild(t);
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class aA extends zo {
  constructor(e, n, r, o, i, a, s, c, l, u, d) {
    super(e, n, r, o, i, a, c, u, d),
      (this.apiId = s),
      (this.nativeStorage = l);
  }
  async acquireToken(e) {
    this.performanceClient.addQueueMeasurement(
      E.SilentIframeClientAcquireToken,
      e.correlationId
    ),
      !e.loginHint &&
        !e.sid &&
        (!e.account || !e.account.username) &&
        this.logger.warning(
          "No user hint provided. The authorization server may need more information to complete this request."
        );
    const n = { ...e };
    n.prompt
      ? n.prompt !== We.NONE &&
        n.prompt !== We.NO_SESSION &&
        (this.logger.warning(
          `SilentIframeClient. Replacing invalid prompt ${n.prompt} with ${We.NONE}`
        ),
        (n.prompt = We.NONE))
      : (n.prompt = We.NONE);
    const r = await x(
      this.initializeAuthorizationRequest.bind(this),
      E.StandardInteractionClientInitializeAuthorizationRequest,
      this.logger,
      this.performanceClient,
      e.correlationId
    )(n, H.Silent);
    by(r.authority);
    const o = this.initializeServerTelemetryManager(this.apiId);
    try {
      const i = await x(
        this.createAuthCodeClient.bind(this),
        E.StandardInteractionClientCreateAuthCodeClient,
        this.logger,
        this.performanceClient,
        e.correlationId
      )(o, r.authority, r.azureCloudOptions, r.account);
      return await x(
        this.silentTokenHelper.bind(this),
        E.SilentIframeClientTokenHelper,
        this.logger,
        this.performanceClient,
        e.correlationId
      )(i, r);
    } catch (i) {
      throw (
        (i instanceof ke &&
          (i.setCorrelationId(this.correlationId), o.cacheFailedRequest(i)),
        i)
      );
    }
  }
  logout() {
    return Promise.reject(L(gc));
  }
  async silentTokenHelper(e, n) {
    const r = n.correlationId;
    this.performanceClient.addQueueMeasurement(
      E.SilentIframeClientTokenHelper,
      r
    );
    const o = await x(
        this.initializeAuthorizationCodeRequest.bind(this),
        E.StandardInteractionClientInitializeAuthorizationCodeRequest,
        this.logger,
        this.performanceClient,
        r
      )(n),
      i = await x(
        e.getAuthCodeUrl.bind(e),
        E.GetAuthCodeUrl,
        this.logger,
        this.performanceClient,
        r
      )({
        ...n,
        nativeBroker: ln.isNativeAvailable(
          this.config,
          this.logger,
          this.nativeMessageHandler,
          n.authenticationScheme
        ),
      }),
      a = new Th(
        e,
        this.browserStorage,
        o,
        this.logger,
        this.performanceClient
      ),
      s = await x(
        tA,
        E.SilentHandlerInitiateAuthRequest,
        this.logger,
        this.performanceClient,
        r
      )(
        i,
        this.performanceClient,
        this.logger,
        r,
        this.config.system.navigateFrameWait
      ),
      c = this.config.auth.OIDCOptions.serverResponseType,
      l = await x(
        nA,
        E.SilentHandlerMonitorIframeForHash,
        this.logger,
        this.performanceClient,
        r
      )(
        s,
        this.config.system.iframeHashTimeout,
        this.config.system.pollIntervalMilliseconds,
        this.performanceClient,
        this.logger,
        r,
        c
      ),
      u = Ur(
        xy,
        E.DeserializeResponse,
        this.logger,
        this.performanceClient,
        this.correlationId
      )(l, c, this.logger);
    if (u.accountId) {
      if (
        (this.logger.verbose("Account id found in hash, calling WAM for token"),
        !this.nativeMessageHandler)
      )
        throw L(ra);
      const d = new yo(
          this.config,
          this.browserStorage,
          this.browserCrypto,
          this.logger,
          this.eventHandler,
          this.navigationClient,
          this.apiId,
          this.performanceClient,
          this.nativeMessageHandler,
          u.accountId,
          this.browserStorage,
          r
        ),
        { userRequestState: h } = Qt.parseRequestState(
          this.browserCrypto,
          n.state
        );
      return x(
        d.acquireToken.bind(d),
        E.NativeInteractionClientAcquireToken,
        this.logger,
        this.performanceClient,
        r
      )({ ...n, state: h, prompt: n.prompt || We.NONE });
    }
    return x(
      a.handleCodeResponse.bind(a),
      E.HandleCodeResponse,
      this.logger,
      this.performanceClient,
      r
    )(u, n);
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class sA extends zo {
  async acquireToken(e) {
    this.performanceClient.addQueueMeasurement(
      E.SilentRefreshClientAcquireToken,
      e.correlationId
    );
    const n = await x(
        Eh,
        E.InitializeBaseRequest,
        this.logger,
        this.performanceClient,
        e.correlationId
      )(e, this.config, this.performanceClient, this.logger),
      r = { ...e, ...n };
    e.redirectUri && (r.redirectUri = this.getRedirectUri(e.redirectUri));
    const o = this.initializeServerTelemetryManager(
        pe.acquireTokenSilent_silentFlow
      ),
      i = await this.createRefreshTokenClient(
        o,
        r.authority,
        r.azureCloudOptions,
        r.account
      );
    return x(
      i.acquireTokenByRefreshToken.bind(i),
      E.RefreshTokenClientAcquireTokenByRefreshToken,
      this.logger,
      this.performanceClient,
      e.correlationId
    )(r).catch((a) => {
      throw (
        (a.setCorrelationId(this.correlationId), o.cacheFailedRequest(a), a)
      );
    });
  }
  logout() {
    return Promise.reject(L(gc));
  }
  async createRefreshTokenClient(e, n, r, o) {
    const i = await x(
      this.getClientConfiguration.bind(this),
      E.StandardInteractionClientGetClientConfiguration,
      this.logger,
      this.performanceClient,
      this.correlationId
    )(e, n, r, o);
    return new Cu(i, this.performanceClient);
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class cA {
  constructor(e, n, r, o) {
    (this.isBrowserEnvironment = typeof window < "u"),
      (this.config = e),
      (this.storage = n),
      (this.logger = r),
      (this.cryptoObj = o);
  }
  loadExternalTokens(e, n, r) {
    if (
      (this.logger.info("TokenCache - loadExternalTokens called"), !n.id_token)
    )
      throw L(zt);
    const o = Dr(n.id_token, dn);
    let i, a, s;
    if (e.account)
      (s = $e.createFromAccountInfo(e.account)),
        (i = new vo(
          s,
          this.loadIdToken(
            n.id_token,
            s.homeAccountId,
            e.account.environment,
            e.account.tenantId
          ),
          this.loadAccessToken(
            e,
            n,
            s.homeAccountId,
            e.account.environment,
            e.account.tenantId,
            r
          ),
          this.loadRefreshToken(e, n, s.homeAccountId, e.account.environment)
        ));
    else if (e.authority) {
      const c = it.generateAuthority(e.authority, e.azureCloudOptions),
        l = {
          protocolMode: this.config.auth.protocolMode,
          knownAuthorities: this.config.auth.knownAuthorities,
          cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
          authorityMetadata: this.config.auth.authorityMetadata,
          skipAuthorityMetadataCache:
            this.config.auth.skipAuthorityMetadataCache,
        };
      if (
        ((a = new it(
          c,
          this.config.system.networkClient,
          this.storage,
          l,
          this.logger,
          e.correlationId || Pn()
        )),
        r.clientInfo)
      )
        this.logger.trace("TokenCache - homeAccountId from options"),
          (s = this.loadAccount(o, a, r.clientInfo)),
          (i = new vo(
            s,
            this.loadIdToken(
              n.id_token,
              s.homeAccountId,
              a.hostnameAndPort,
              a.tenant
            ),
            this.loadAccessToken(
              e,
              n,
              s.homeAccountId,
              a.hostnameAndPort,
              a.tenant,
              r
            ),
            this.loadRefreshToken(e, n, s.homeAccountId, a.hostnameAndPort)
          ));
      else if (n.client_info)
        this.logger.trace("TokenCache - homeAccountId from response"),
          (s = this.loadAccount(o, a, n.client_info)),
          (i = new vo(
            s,
            this.loadIdToken(
              n.id_token,
              s.homeAccountId,
              a.hostnameAndPort,
              a.tenant
            ),
            this.loadAccessToken(
              e,
              n,
              s.homeAccountId,
              a.hostnameAndPort,
              a.tenant,
              r
            ),
            this.loadRefreshToken(e, n, s.homeAccountId, a.hostnameAndPort)
          ));
      else throw L(zt);
    } else throw L(zt);
    return this.generateAuthenticationResult(e, o, i, s, a);
  }
  loadAccount(e, n, r, o) {
    if (this.isBrowserEnvironment) {
      this.logger.verbose("TokenCache - loading account");
      let i;
      if (
        (o
          ? (i = o)
          : n.authorityType !== void 0 &&
            r &&
            (i = $e.generateHomeAccountId(
              r,
              n.authorityType,
              this.logger,
              this.cryptoObj,
              e
            )),
        !i)
      )
        throw L(zt);
      const a = e.tid,
        s = ch(
          this.storage,
          n,
          i,
          e,
          dn,
          r,
          n.hostnameAndPort,
          a,
          void 0,
          void 0,
          this.logger
        );
      return this.storage.setAccount(s), s;
    } else throw L(zt);
  }
  loadIdToken(e, n, r, o) {
    const i = uc(n, r, e, this.config.auth.clientId, o);
    if (this.isBrowserEnvironment)
      return (
        this.logger.verbose("TokenCache - loading id token"),
        this.storage.setIdTokenCredential(i),
        i
      );
    throw L(zt);
  }
  loadAccessToken(e, n, r, o, i, a) {
    if (!n.access_token)
      return (
        this.logger.verbose(
          "TokenCache - No access token provided for caching"
        ),
        null
      );
    if (!n.expires_in || !a.extendedExpiresOn) throw L(zt);
    const s = new Ne(e.scopes).printScopes(),
      c = a.expiresOn || n.expires_in + new Date().getTime() / 1e3,
      l = a.extendedExpiresOn,
      u = dc(r, o, n.access_token, this.config.auth.clientId, i, s, c, l, dn);
    if (this.isBrowserEnvironment)
      return (
        this.logger.verbose("TokenCache - loading access token"),
        this.storage.setAccessTokenCredential(u),
        u
      );
    throw L(zt);
  }
  loadRefreshToken(e, n, r, o) {
    if (!n.refresh_token)
      return (
        this.logger.verbose(
          "TokenCache - No refresh token provided for caching"
        ),
        null
      );
    const i = Tv(r, o, n.refresh_token, this.config.auth.clientId);
    if (this.isBrowserEnvironment)
      return (
        this.logger.verbose("TokenCache - loading refresh token"),
        this.storage.setRefreshTokenCredential(i),
        i
      );
    throw L(zt);
  }
  generateAuthenticationResult(e, n, r, o, i) {
    var h, v;
    let a = T.EMPTY_STRING,
      s = [],
      c = null,
      l;
    r != null &&
      r.accessToken &&
      ((a = r.accessToken.secret),
      (s = Ne.fromString(r.accessToken.target).asArray()),
      (c = new Date(Number(r.accessToken.expiresOn) * 1e3)),
      (l = new Date(Number(r.accessToken.extendedExpiresOn) * 1e3)));
    const u = n.oid || n.sub || T.EMPTY_STRING,
      d = n.tid || T.EMPTY_STRING;
    return {
      authority: i ? i.canonicalAuthority : T.EMPTY_STRING,
      uniqueId: u,
      tenantId: d,
      scopes: s,
      account: o.getAccountInfo(),
      idToken: ((h = r.idToken) == null ? void 0 : h.secret) || "",
      idTokenClaims: n || {},
      accessToken: a,
      fromCache: !0,
      expiresOn: c,
      correlationId: e.correlationId || T.EMPTY_STRING,
      requestId: T.EMPTY_STRING,
      extExpiresOn: l,
      familyId: T.EMPTY_STRING,
      tokenType:
        ((v = r == null ? void 0 : r.accessToken) == null
          ? void 0
          : v.tokenType) || T.EMPTY_STRING,
      state: T.EMPTY_STRING,
      cloudGraphHostName: o.cloudGraphHostName || T.EMPTY_STRING,
      msGraphHost: o.msGraphHost || T.EMPTY_STRING,
      code: void 0,
      fromNativeBroker: !1,
    };
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class lA extends Wv {
  constructor(e) {
    super(e), (this.includeRedirectUri = !1);
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class uA extends zo {
  constructor(e, n, r, o, i, a, s, c, l, u) {
    super(e, n, r, o, i, a, c, l, u), (this.apiId = s);
  }
  async acquireToken(e) {
    if (!e.code) throw L(py);
    const n = await x(
        this.initializeAuthorizationRequest.bind(this),
        E.StandardInteractionClientInitializeAuthorizationRequest,
        this.logger,
        this.performanceClient,
        e.correlationId
      )(e, H.Silent),
      r = this.initializeServerTelemetryManager(this.apiId);
    try {
      const o = { ...n, code: e.code },
        i = await x(
          this.getClientConfiguration.bind(this),
          E.StandardInteractionClientGetClientConfiguration,
          this.logger,
          this.performanceClient,
          e.correlationId
        )(r, n.authority, n.azureCloudOptions, n.account),
        a = new lA(i);
      this.logger.verbose("Auth code client created");
      const s = new Th(
        a,
        this.browserStorage,
        o,
        this.logger,
        this.performanceClient
      );
      return await x(
        s.handleCodeResponseFromServer.bind(s),
        E.HandleCodeResponseFromServer,
        this.logger,
        this.performanceClient,
        e.correlationId
      )(
        {
          code: e.code,
          msgraph_host: e.msGraphHost,
          cloud_graph_host_name: e.cloudGraphHostName,
          cloud_instance_host_name: e.cloudInstanceHostName,
        },
        n,
        !1
      );
    } catch (o) {
      throw (
        (o instanceof ke &&
          (o.setCorrelationId(this.correlationId), r.cacheFailedRequest(o)),
        o)
      );
    }
  }
  logout() {
    return Promise.reject(L(gc));
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class yc {
  constructor(e) {
    (this.operatingContext = e),
      (this.isBrowserEnvironment =
        this.operatingContext.isBrowserEnvironment()),
      (this.config = e.getConfig()),
      (this.initialized = !1),
      (this.logger = this.operatingContext.getLogger()),
      (this.networkClient = this.config.system.networkClient),
      (this.navigationClient = this.config.system.navigationClient),
      (this.redirectResponse = new Map()),
      (this.hybridAuthCodeResponses = new Map()),
      (this.performanceClient = this.config.telemetry.client),
      (this.browserCrypto = this.isBrowserEnvironment
        ? new Oo(this.logger, this.performanceClient)
        : ms),
      (this.eventHandler = new UI(this.logger, this.browserCrypto)),
      (this.browserStorage = this.isBrowserEnvironment
        ? new Iu(
            this.config.auth.clientId,
            this.config.cache,
            this.browserCrypto,
            this.logger,
            D0(this.config.auth),
            this.performanceClient
          )
        : DI(this.config.auth.clientId, this.logger));
    const n = {
      cacheLocation: Ue.MemoryStorage,
      temporaryCacheLocation: Ue.MemoryStorage,
      storeAuthStateInCookie: !1,
      secureCookies: !1,
      cacheMigrationEnabled: !1,
      claimsBasedCachingEnabled: !1,
    };
    (this.nativeInternalStorage = new Iu(
      this.config.auth.clientId,
      n,
      this.browserCrypto,
      this.logger,
      void 0,
      this.performanceClient
    )),
      (this.tokenCache = new cA(
        this.config,
        this.browserStorage,
        this.logger,
        this.browserCrypto
      )),
      (this.activeSilentTokenRequests = new Map()),
      (this.trackPageVisibility = this.trackPageVisibility.bind(this)),
      (this.trackPageVisibilityWithMeasurement =
        this.trackPageVisibilityWithMeasurement.bind(this));
  }
  static async createController(e) {
    const n = new yc(e);
    return await n.initialize(), n;
  }
  trackPageVisibility(e) {
    e &&
      (this.logger.info("Perf: Visibility change detected"),
      this.performanceClient.incrementFields({ visibilityChangeCount: 1 }, e));
  }
  async initialize() {
    if ((this.logger.trace("initialize called"), this.initialized)) {
      this.logger.info("initialize has already been called, exiting early.");
      return;
    }
    const e = this.config.system.allowNativeBroker,
      n = this.performanceClient.startMeasurement(
        E.InitializeClientApplication
      );
    if ((this.eventHandler.emitEvent(F.INITIALIZE_START), e))
      try {
        this.nativeExtensionProvider = await ln.createProvider(
          this.logger,
          this.config.system.nativeBrokerHandshakeTimeout,
          this.performanceClient
        );
      } catch (r) {
        this.logger.verbose(r);
      }
    this.config.cache.claimsBasedCachingEnabled ||
      (this.logger.verbose(
        "Claims-based caching is disabled. Clearing the previous cache with claims"
      ),
      await x(
        this.browserStorage.clearTokensAndKeysWithClaims.bind(
          this.browserStorage
        ),
        E.ClearTokensAndKeysWithClaims,
        this.logger,
        this.performanceClient
      )(this.performanceClient)),
      (this.initialized = !0),
      this.eventHandler.emitEvent(F.INITIALIZE_END),
      n.end({ allowNativeBroker: e, success: !0 });
  }
  async handleRedirectPromise(e) {
    if (
      (this.logger.verbose("handleRedirectPromise called"),
      Ry(this.initialized),
      this.isBrowserEnvironment)
    ) {
      const n = e || "";
      let r = this.redirectResponse.get(n);
      return (
        typeof r > "u"
          ? ((r = this.handleRedirectPromiseInternal(e)),
            this.redirectResponse.set(n, r),
            this.logger.verbose(
              "handleRedirectPromise has been called for the first time, storing the promise"
            ))
          : this.logger.verbose(
              "handleRedirectPromise has been called previously, returning the result from the first call"
            ),
        r
      );
    }
    return (
      this.logger.verbose(
        "handleRedirectPromise returns null, not browser environment"
      ),
      null
    );
  }
  async handleRedirectPromiseInternal(e) {
    const n = this.getAllAccounts(),
      r = this.browserStorage.getCachedNativeRequest(),
      o =
        r &&
        ln.isNativeAvailable(
          this.config,
          this.logger,
          this.nativeExtensionProvider
        ) &&
        this.nativeExtensionProvider &&
        !e,
      i = o
        ? r == null
          ? void 0
          : r.correlationId
        : this.browserStorage.getTemporaryCache(oe.CORRELATION_ID, !0) || "",
      a = this.performanceClient.startMeasurement("acquireTokenRedirect", i);
    this.eventHandler.emitEvent(F.HANDLE_REDIRECT_START, H.Redirect);
    let s;
    if (o && this.nativeExtensionProvider) {
      this.logger.trace(
        "handleRedirectPromise - acquiring token from native platform"
      );
      const c = new yo(
        this.config,
        this.browserStorage,
        this.browserCrypto,
        this.logger,
        this.eventHandler,
        this.navigationClient,
        pe.handleRedirectPromise,
        this.performanceClient,
        this.nativeExtensionProvider,
        r.accountId,
        this.nativeInternalStorage,
        r.correlationId
      );
      s = x(
        c.handleRedirectPromise.bind(c),
        E.HandleNativeRedirectPromiseMeasurement,
        this.logger,
        this.performanceClient,
        a.event.correlationId
      )(this.performanceClient, a.event.correlationId);
    } else {
      this.logger.trace(
        "handleRedirectPromise - acquiring token from web flow"
      );
      const c = this.createRedirectClient(i);
      s = x(
        c.handleRedirectPromise.bind(c),
        E.HandleRedirectPromiseMeasurement,
        this.logger,
        this.performanceClient,
        a.event.correlationId
      )(e, this.performanceClient, a.event.correlationId);
    }
    return s
      .then(
        (c) => (
          c &&
            (n.length < this.getAllAccounts().length
              ? (this.eventHandler.emitEvent(F.LOGIN_SUCCESS, H.Redirect, c),
                this.logger.verbose(
                  "handleRedirectResponse returned result, login success"
                ))
              : (this.eventHandler.emitEvent(
                  F.ACQUIRE_TOKEN_SUCCESS,
                  H.Redirect,
                  c
                ),
                this.logger.verbose(
                  "handleRedirectResponse returned result, acquire token success"
                )),
            a.end({ success: !0 })),
          this.eventHandler.emitEvent(F.HANDLE_REDIRECT_END, H.Redirect),
          a.end({ success: !1 }),
          c
        )
      )
      .catch((c) => {
        const l = c;
        throw (
          (n.length > 0
            ? this.eventHandler.emitEvent(
                F.ACQUIRE_TOKEN_FAILURE,
                H.Redirect,
                null,
                l
              )
            : this.eventHandler.emitEvent(F.LOGIN_FAILURE, H.Redirect, null, l),
          this.eventHandler.emitEvent(F.HANDLE_REDIRECT_END, H.Redirect),
          a.end({ success: !1 }, l),
          c)
        );
      });
  }
  async acquireTokenRedirect(e) {
    const n = this.getRequestCorrelationId(e);
    this.logger.verbose("acquireTokenRedirect called", n),
      Tp(this.initialized, this.config),
      this.browserStorage.setInteractionInProgress(!0);
    const r = this.getAllAccounts().length > 0;
    r
      ? this.eventHandler.emitEvent(F.ACQUIRE_TOKEN_START, H.Redirect, e)
      : this.eventHandler.emitEvent(F.LOGIN_START, H.Redirect, e);
    let o;
    return (
      this.nativeExtensionProvider && this.canUseNative(e)
        ? (o = new yo(
            this.config,
            this.browserStorage,
            this.browserCrypto,
            this.logger,
            this.eventHandler,
            this.navigationClient,
            pe.acquireTokenRedirect,
            this.performanceClient,
            this.nativeExtensionProvider,
            this.getNativeAccountId(e),
            this.nativeInternalStorage,
            n
          )
            .acquireTokenRedirect(e)
            .catch((a) => {
              if (a instanceof In && Zr(a))
                return (
                  (this.nativeExtensionProvider = void 0),
                  this.createRedirectClient(n).acquireToken(e)
                );
              if (a instanceof Zt)
                return (
                  this.logger.verbose(
                    "acquireTokenRedirect - Resolving interaction required error thrown by native broker by falling back to web flow"
                  ),
                  this.createRedirectClient(n).acquireToken(e)
                );
              throw (this.browserStorage.setInteractionInProgress(!1), a);
            }))
        : (o = this.createRedirectClient(n).acquireToken(e)),
      o.catch((i) => {
        throw (
          (r
            ? this.eventHandler.emitEvent(
                F.ACQUIRE_TOKEN_FAILURE,
                H.Redirect,
                null,
                i
              )
            : this.eventHandler.emitEvent(F.LOGIN_FAILURE, H.Redirect, null, i),
          i)
        );
      })
    );
  }
  acquireTokenPopup(e) {
    const n = this.getRequestCorrelationId(e),
      r = this.performanceClient.startMeasurement(E.AcquireTokenPopup, n);
    try {
      this.logger.verbose("acquireTokenPopup called", n),
        Xr(this.initialized),
        this.browserStorage.setInteractionInProgress(!0);
    } catch (a) {
      return Promise.reject(a);
    }
    const o = this.getAllAccounts();
    o.length > 0
      ? this.eventHandler.emitEvent(F.ACQUIRE_TOKEN_START, H.Popup, e)
      : this.eventHandler.emitEvent(F.LOGIN_START, H.Popup, e);
    let i;
    return (
      this.canUseNative(e)
        ? (i = this.acquireTokenNative(
            { ...e, correlationId: n },
            pe.acquireTokenPopup
          )
            .then(
              (a) => (
                this.browserStorage.setInteractionInProgress(!1),
                r.end({
                  success: !0,
                  isNativeBroker: !0,
                  requestId: a.requestId,
                }),
                a
              )
            )
            .catch((a) => {
              if (a instanceof In && Zr(a))
                return (
                  (this.nativeExtensionProvider = void 0),
                  this.createPopupClient(n).acquireToken(e)
                );
              if (a instanceof Zt)
                return (
                  this.logger.verbose(
                    "acquireTokenPopup - Resolving interaction required error thrown by native broker by falling back to web flow"
                  ),
                  this.createPopupClient(n).acquireToken(e)
                );
              throw (this.browserStorage.setInteractionInProgress(!1), a);
            }))
        : (i = this.createPopupClient(n).acquireToken(e)),
      i
        .then(
          (a) => (
            o.length < this.getAllAccounts().length
              ? this.eventHandler.emitEvent(F.LOGIN_SUCCESS, H.Popup, a)
              : this.eventHandler.emitEvent(
                  F.ACQUIRE_TOKEN_SUCCESS,
                  H.Popup,
                  a
                ),
            r.add({
              accessTokenSize: a.accessToken.length,
              idTokenSize: a.idToken.length,
            }),
            r.end({ success: !0, requestId: a.requestId }),
            a
          )
        )
        .catch(
          (a) => (
            o.length > 0
              ? this.eventHandler.emitEvent(
                  F.ACQUIRE_TOKEN_FAILURE,
                  H.Popup,
                  null,
                  a
                )
              : this.eventHandler.emitEvent(F.LOGIN_FAILURE, H.Popup, null, a),
            r.end({ success: !1 }, a),
            Promise.reject(a)
          )
        )
    );
  }
  trackPageVisibilityWithMeasurement() {
    const e =
      this.ssoSilentMeasurement || this.acquireTokenByCodeAsyncMeasurement;
    e &&
      (this.logger.info("Perf: Visibility change detected in ", e.event.name),
      e.increment({ visibilityChangeCount: 1 }));
  }
  async ssoSilent(e) {
    var i;
    const n = this.getRequestCorrelationId(e),
      r = { ...e, prompt: e.prompt, correlationId: n };
    Xr(this.initialized),
      (this.ssoSilentMeasurement = this.performanceClient.startMeasurement(
        E.SsoSilent,
        n
      )),
      (i = this.ssoSilentMeasurement) == null ||
        i.increment({ visibilityChangeCount: 0 }),
      document.addEventListener(
        "visibilitychange",
        this.trackPageVisibilityWithMeasurement
      ),
      this.logger.verbose("ssoSilent called", n),
      this.eventHandler.emitEvent(F.SSO_SILENT_START, H.Silent, r);
    let o;
    return (
      this.canUseNative(r)
        ? (o = this.acquireTokenNative(r, pe.ssoSilent).catch((a) => {
            if (a instanceof In && Zr(a))
              return (
                (this.nativeExtensionProvider = void 0),
                this.createSilentIframeClient(r.correlationId).acquireToken(r)
              );
            throw a;
          }))
        : (o = this.createSilentIframeClient(r.correlationId).acquireToken(r)),
      o
        .then((a) => {
          var s, c;
          return (
            this.eventHandler.emitEvent(F.SSO_SILENT_SUCCESS, H.Silent, a),
            (s = this.ssoSilentMeasurement) == null ||
              s.add({
                accessTokenSize: a.accessToken.length,
                idTokenSize: a.idToken.length,
              }),
            (c = this.ssoSilentMeasurement) == null ||
              c.end({
                success: !0,
                isNativeBroker: a.fromNativeBroker,
                requestId: a.requestId,
              }),
            a
          );
        })
        .catch((a) => {
          var s;
          throw (
            (this.eventHandler.emitEvent(
              F.SSO_SILENT_FAILURE,
              H.Silent,
              null,
              a
            ),
            (s = this.ssoSilentMeasurement) == null ||
              s.end({ success: !1 }, a),
            a)
          );
        })
        .finally(() => {
          document.removeEventListener(
            "visibilitychange",
            this.trackPageVisibilityWithMeasurement
          );
        })
    );
  }
  async acquireTokenByCode(e) {
    const n = this.getRequestCorrelationId(e);
    this.logger.trace("acquireTokenByCode called", n),
      Xr(this.initialized),
      this.eventHandler.emitEvent(F.ACQUIRE_TOKEN_BY_CODE_START, H.Silent, e);
    const r = this.performanceClient.startMeasurement(E.AcquireTokenByCode, n);
    try {
      if (e.code && e.nativeAccountId) throw L(gy);
      if (e.code) {
        const o = e.code;
        let i = this.hybridAuthCodeResponses.get(o);
        return (
          i
            ? (this.logger.verbose(
                "Existing acquireTokenByCode request found",
                n
              ),
              r.discard())
            : (this.logger.verbose(
                "Initiating new acquireTokenByCode request",
                n
              ),
              (i = this.acquireTokenByCodeAsync({ ...e, correlationId: n })
                .then(
                  (a) => (
                    this.eventHandler.emitEvent(
                      F.ACQUIRE_TOKEN_BY_CODE_SUCCESS,
                      H.Silent,
                      a
                    ),
                    this.hybridAuthCodeResponses.delete(o),
                    r.add({
                      accessTokenSize: a.accessToken.length,
                      idTokenSize: a.idToken.length,
                    }),
                    r.end({
                      success: !0,
                      isNativeBroker: a.fromNativeBroker,
                      requestId: a.requestId,
                    }),
                    a
                  )
                )
                .catch((a) => {
                  throw (
                    (this.hybridAuthCodeResponses.delete(o),
                    this.eventHandler.emitEvent(
                      F.ACQUIRE_TOKEN_BY_CODE_FAILURE,
                      H.Silent,
                      null,
                      a
                    ),
                    r.end({ success: !1 }, a),
                    a)
                  );
                })),
              this.hybridAuthCodeResponses.set(o, i)),
          await i
        );
      } else if (e.nativeAccountId) {
        if (this.canUseNative(e, e.nativeAccountId))
          return await this.acquireTokenNative(
            { ...e, correlationId: n },
            pe.acquireTokenByCode,
            e.nativeAccountId
          ).catch((o) => {
            throw (
              (o instanceof In &&
                Zr(o) &&
                (this.nativeExtensionProvider = void 0),
              o)
            );
          });
        throw L(vy);
      } else throw L(my);
    } catch (o) {
      throw (
        (this.eventHandler.emitEvent(
          F.ACQUIRE_TOKEN_BY_CODE_FAILURE,
          H.Silent,
          null,
          o
        ),
        r.end({ success: !1 }, o),
        o)
      );
    }
  }
  async acquireTokenByCodeAsync(e) {
    var o;
    return (
      this.logger.trace("acquireTokenByCodeAsync called", e.correlationId),
      (this.acquireTokenByCodeAsyncMeasurement =
        this.performanceClient.startMeasurement(
          E.AcquireTokenByCodeAsync,
          e.correlationId
        )),
      (o = this.acquireTokenByCodeAsyncMeasurement) == null ||
        o.increment({ visibilityChangeCount: 0 }),
      document.addEventListener(
        "visibilitychange",
        this.trackPageVisibilityWithMeasurement
      ),
      await this.createSilentAuthCodeClient(e.correlationId)
        .acquireToken(e)
        .then((i) => {
          var a;
          return (
            (a = this.acquireTokenByCodeAsyncMeasurement) == null ||
              a.end({
                success: !0,
                fromCache: i.fromCache,
                isNativeBroker: i.fromNativeBroker,
                requestId: i.requestId,
              }),
            i
          );
        })
        .catch((i) => {
          var a;
          throw (
            ((a = this.acquireTokenByCodeAsyncMeasurement) == null ||
              a.end({ success: !1 }, i),
            i)
          );
        })
        .finally(() => {
          document.removeEventListener(
            "visibilitychange",
            this.trackPageVisibilityWithMeasurement
          );
        })
    );
  }
  async acquireTokenFromCache(e, n) {
    switch (
      (this.performanceClient.addQueueMeasurement(
        E.AcquireTokenFromCache,
        e.correlationId
      ),
      n)
    ) {
      case Et.Default:
      case Et.AccessToken:
      case Et.AccessTokenAndRefreshToken:
        const r = this.createSilentCacheClient(e.correlationId);
        return x(
          r.acquireToken.bind(r),
          E.SilentCacheClientAcquireToken,
          this.logger,
          this.performanceClient,
          e.correlationId
        )(e);
      default:
        throw O(An);
    }
  }
  async acquireTokenByRefreshToken(e, n) {
    switch (
      (this.performanceClient.addQueueMeasurement(
        E.AcquireTokenByRefreshToken,
        e.correlationId
      ),
      n)
    ) {
      case Et.Default:
      case Et.AccessTokenAndRefreshToken:
      case Et.RefreshToken:
      case Et.RefreshTokenAndNetwork:
        const r = this.createSilentRefreshClient(e.correlationId);
        return x(
          r.acquireToken.bind(r),
          E.SilentRefreshClientAcquireToken,
          this.logger,
          this.performanceClient,
          e.correlationId
        )(e);
      default:
        throw O(An);
    }
  }
  async acquireTokenBySilentIframe(e) {
    this.performanceClient.addQueueMeasurement(
      E.AcquireTokenBySilentIframe,
      e.correlationId
    );
    const n = this.createSilentIframeClient(e.correlationId);
    return x(
      n.acquireToken.bind(n),
      E.SilentIframeClientAcquireToken,
      this.logger,
      this.performanceClient,
      e.correlationId
    )(e);
  }
  async logout(e) {
    const n = this.getRequestCorrelationId(e);
    return (
      this.logger.warning(
        "logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead.",
        n
      ),
      this.logoutRedirect({ correlationId: n, ...e })
    );
  }
  async logoutRedirect(e) {
    const n = this.getRequestCorrelationId(e);
    return (
      Tp(this.initialized, this.config),
      this.browserStorage.setInteractionInProgress(!0),
      this.createRedirectClient(n).logout(e)
    );
  }
  logoutPopup(e) {
    try {
      const n = this.getRequestCorrelationId(e);
      return (
        Xr(this.initialized),
        this.browserStorage.setInteractionInProgress(!0),
        this.createPopupClient(n).logout(e)
      );
    } catch (n) {
      return Promise.reject(n);
    }
  }
  async clearCache(e) {
    const n = this.getRequestCorrelationId(e);
    return this.createSilentCacheClient(n).logout(e);
  }
  getAllAccounts(e) {
    return (
      this.logger.verbose("getAllAccounts called"),
      this.isBrowserEnvironment ? this.browserStorage.getAllAccounts(e) : []
    );
  }
  getAccount(e) {
    if ((this.logger.trace("getAccount called"), Object.keys(e).length === 0))
      return this.logger.warning("getAccount: No accountFilter provided"), null;
    const n = this.browserStorage.getAccountInfoFilteredBy(e);
    return n
      ? (this.logger.verbose(
          "getAccount: Account matching provided filter found, returning"
        ),
        n)
      : (this.logger.verbose(
          "getAccount: No matching account found, returning null"
        ),
        null);
  }
  getAccountByUsername(e) {
    if ((this.logger.trace("getAccountByUsername called"), !e))
      return (
        this.logger.warning("getAccountByUsername: No username provided"), null
      );
    const n = this.browserStorage.getAccountInfoFilteredBy({ username: e });
    return n
      ? (this.logger.verbose(
          "getAccountByUsername: Account matching username found, returning"
        ),
        this.logger.verbosePii(
          `getAccountByUsername: Returning signed-in accounts matching username: ${e}`
        ),
        n)
      : (this.logger.verbose(
          "getAccountByUsername: No matching account found, returning null"
        ),
        null);
  }
  getAccountByHomeId(e) {
    if ((this.logger.trace("getAccountByHomeId called"), !e))
      return (
        this.logger.warning("getAccountByHomeId: No homeAccountId provided"),
        null
      );
    const n = this.browserStorage.getAccountInfoFilteredBy({
      homeAccountId: e,
    });
    return n
      ? (this.logger.verbose(
          "getAccountByHomeId: Account matching homeAccountId found, returning"
        ),
        this.logger.verbosePii(
          `getAccountByHomeId: Returning signed-in accounts matching homeAccountId: ${e}`
        ),
        n)
      : (this.logger.verbose(
          "getAccountByHomeId: No matching account found, returning null"
        ),
        null);
  }
  getAccountByLocalId(e) {
    if ((this.logger.trace("getAccountByLocalId called"), !e))
      return (
        this.logger.warning("getAccountByLocalId: No localAccountId provided"),
        null
      );
    const n = this.browserStorage.getAccountInfoFilteredBy({
      localAccountId: e,
    });
    return n
      ? (this.logger.verbose(
          "getAccountByLocalId: Account matching localAccountId found, returning"
        ),
        this.logger.verbosePii(
          `getAccountByLocalId: Returning signed-in accounts matching localAccountId: ${e}`
        ),
        n)
      : (this.logger.verbose(
          "getAccountByLocalId: No matching account found, returning null"
        ),
        null);
  }
  setActiveAccount(e) {
    this.browserStorage.setActiveAccount(e);
  }
  getActiveAccount() {
    return this.browserStorage.getActiveAccount();
  }
  async hydrateCache(e, n) {
    this.logger.verbose("hydrateCache called");
    const r = $e.createFromAccountInfo(
      e.account,
      e.cloudGraphHostName,
      e.msGraphHost
    );
    return (
      this.browserStorage.setAccount(r),
      e.fromNativeBroker
        ? (this.logger.verbose(
            "Response was from native broker, storing in-memory"
          ),
          this.nativeInternalStorage.hydrateCache(e, n))
        : this.browserStorage.hydrateCache(e, n)
    );
  }
  async acquireTokenNative(e, n, r) {
    if (
      (this.logger.trace("acquireTokenNative called"),
      !this.nativeExtensionProvider)
    )
      throw L(ra);
    return new yo(
      this.config,
      this.browserStorage,
      this.browserCrypto,
      this.logger,
      this.eventHandler,
      this.navigationClient,
      n,
      this.performanceClient,
      this.nativeExtensionProvider,
      r || this.getNativeAccountId(e),
      this.nativeInternalStorage,
      e.correlationId
    ).acquireToken(e);
  }
  canUseNative(e, n) {
    if (
      (this.logger.trace("canUseNative called"),
      !ln.isNativeAvailable(
        this.config,
        this.logger,
        this.nativeExtensionProvider,
        e.authenticationScheme
      ))
    )
      return (
        this.logger.trace(
          "canUseNative: isNativeAvailable returned false, returning false"
        ),
        !1
      );
    if (e.prompt)
      switch (e.prompt) {
        case We.NONE:
        case We.CONSENT:
        case We.LOGIN:
          this.logger.trace(
            "canUseNative: prompt is compatible with native flow"
          );
          break;
        default:
          return (
            this.logger.trace(
              `canUseNative: prompt = ${e.prompt} is not compatible with native flow, returning false`
            ),
            !1
          );
      }
    return !n && !this.getNativeAccountId(e)
      ? (this.logger.trace(
          "canUseNative: nativeAccountId is not available, returning false"
        ),
        !1)
      : !0;
  }
  getNativeAccountId(e) {
    const n =
      e.account ||
      this.getAccount({ loginHint: e.loginHint, sid: e.sid }) ||
      this.getActiveAccount();
    return (n && n.nativeAccountId) || "";
  }
  createPopupClient(e) {
    return new ZI(
      this.config,
      this.browserStorage,
      this.browserCrypto,
      this.logger,
      this.eventHandler,
      this.navigationClient,
      this.performanceClient,
      this.nativeInternalStorage,
      this.nativeExtensionProvider,
      e
    );
  }
  createRedirectClient(e) {
    return new eA(
      this.config,
      this.browserStorage,
      this.browserCrypto,
      this.logger,
      this.eventHandler,
      this.navigationClient,
      this.performanceClient,
      this.nativeInternalStorage,
      this.nativeExtensionProvider,
      e
    );
  }
  createSilentIframeClient(e) {
    return new aA(
      this.config,
      this.browserStorage,
      this.browserCrypto,
      this.logger,
      this.eventHandler,
      this.navigationClient,
      pe.ssoSilent,
      this.performanceClient,
      this.nativeInternalStorage,
      this.nativeExtensionProvider,
      e
    );
  }
  createSilentCacheClient(e) {
    return new My(
      this.config,
      this.browserStorage,
      this.browserCrypto,
      this.logger,
      this.eventHandler,
      this.navigationClient,
      this.performanceClient,
      this.nativeExtensionProvider,
      e
    );
  }
  createSilentRefreshClient(e) {
    return new sA(
      this.config,
      this.browserStorage,
      this.browserCrypto,
      this.logger,
      this.eventHandler,
      this.navigationClient,
      this.performanceClient,
      this.nativeExtensionProvider,
      e
    );
  }
  createSilentAuthCodeClient(e) {
    return new uA(
      this.config,
      this.browserStorage,
      this.browserCrypto,
      this.logger,
      this.eventHandler,
      this.navigationClient,
      pe.acquireTokenByCode,
      this.performanceClient,
      this.nativeExtensionProvider,
      e
    );
  }
  addEventCallback(e) {
    return this.eventHandler.addEventCallback(e);
  }
  removeEventCallback(e) {
    this.eventHandler.removeEventCallback(e);
  }
  addPerformanceCallback(e) {
    return this.performanceClient.addPerformanceCallback(e);
  }
  removePerformanceCallback(e) {
    return this.performanceClient.removePerformanceCallback(e);
  }
  enableAccountStorageEvents() {
    this.eventHandler.enableAccountStorageEvents();
  }
  disableAccountStorageEvents() {
    this.eventHandler.disableAccountStorageEvents();
  }
  getTokenCache() {
    return this.tokenCache;
  }
  getLogger() {
    return this.logger;
  }
  setLogger(e) {
    this.logger = e;
  }
  initializeWrapperLibrary(e, n) {
    this.browserStorage.setWrapperMetadata(e, n);
  }
  setNavigationClient(e) {
    this.navigationClient = e;
  }
  getConfiguration() {
    return this.config;
  }
  getPerformanceClient() {
    return this.performanceClient;
  }
  isBrowserEnv() {
    return this.isBrowserEnvironment;
  }
  getEventHandler() {
    return this.eventHandler;
  }
  getRequestCorrelationId(e) {
    return e != null && e.correlationId
      ? e.correlationId
      : this.isBrowserEnvironment
      ? Pn()
      : T.EMPTY_STRING;
  }
  async loginRedirect(e) {
    const n = this.getRequestCorrelationId(e);
    return (
      this.logger.verbose("loginRedirect called", n),
      this.acquireTokenRedirect({ correlationId: n, ...(e || Sp) })
    );
  }
  loginPopup(e) {
    const n = this.getRequestCorrelationId(e);
    return (
      this.logger.verbose("loginPopup called", n),
      this.acquireTokenPopup({ correlationId: n, ...(e || Sp) })
    );
  }
  async acquireTokenSilent(e) {
    const n = this.getRequestCorrelationId(e),
      r = this.performanceClient.startMeasurement(E.AcquireTokenSilent, n);
    r.add({ cacheLookupPolicy: e.cacheLookupPolicy }),
      Xr(this.initialized),
      this.logger.verbose("acquireTokenSilent called", n);
    const o = e.account || this.getActiveAccount();
    if (!o) throw L(cy);
    const i = {
        clientId: this.config.auth.clientId,
        authority: e.authority || T.EMPTY_STRING,
        scopes: e.scopes,
        homeAccountIdentifier: o.homeAccountId,
        claims: e.claims,
        authenticationScheme: e.authenticationScheme,
        resourceRequestMethod: e.resourceRequestMethod,
        resourceRequestUri: e.resourceRequestUri,
        shrClaims: e.shrClaims,
        sshKid: e.sshKid,
        shrOptions: e.shrOptions,
      },
      a = JSON.stringify(i),
      s = this.activeSilentTokenRequests.get(a);
    if (typeof s > "u") {
      this.logger.verbose(
        "acquireTokenSilent called for the first time, storing active request",
        n
      );
      const c = x(
        this.acquireTokenSilentAsync.bind(this),
        E.AcquireTokenSilentAsync,
        this.logger,
        this.performanceClient,
        n
      )({ ...e, correlationId: n }, o)
        .then(
          (l) => (
            this.activeSilentTokenRequests.delete(a),
            r.add({
              accessTokenSize: l.accessToken.length,
              idTokenSize: l.idToken.length,
            }),
            r.end({
              success: !0,
              fromCache: l.fromCache,
              isNativeBroker: l.fromNativeBroker,
              cacheLookupPolicy: e.cacheLookupPolicy,
              requestId: l.requestId,
            }),
            l
          )
        )
        .catch((l) => {
          throw (
            (this.activeSilentTokenRequests.delete(a),
            r.end({ success: !1 }, l),
            l)
          );
        });
      return (
        this.activeSilentTokenRequests.set(a, c),
        { ...(await c), state: e.state }
      );
    } else
      return (
        this.logger.verbose(
          "acquireTokenSilent has been called previously, returning the result from the first call",
          n
        ),
        r.discard(),
        { ...(await s), state: e.state }
      );
  }
  async acquireTokenSilentAsync(e, n) {
    this.performanceClient.addQueueMeasurement(
      E.AcquireTokenSilentAsync,
      e.correlationId
    ),
      this.eventHandler.emitEvent(F.ACQUIRE_TOKEN_START, H.Silent, e),
      e.correlationId &&
        this.performanceClient.incrementFields(
          { visibilityChangeCount: 0 },
          e.correlationId
        ),
      document.addEventListener("visibilitychange", () =>
        this.trackPageVisibility(e.correlationId)
      );
    const r = await x(
        zI,
        E.InitializeSilentRequest,
        this.logger,
        this.performanceClient,
        e.correlationId
      )(e, n, this.config, this.performanceClient, this.logger),
      o = e.cacheLookupPolicy || Et.Default;
    return this.acquireTokenSilentNoIframe(r, o)
      .catch(async (a) => {
        if (dA(a, o))
          if (this.activeIframeRequest)
            if (o !== Et.Skip) {
              const [c, l] = this.activeIframeRequest;
              this.logger.verbose(
                `Iframe request is already in progress, awaiting resolution for request with correlationId: ${l}`,
                r.correlationId
              );
              const u = this.performanceClient.startMeasurement(
                E.AwaitConcurrentIframe,
                r.correlationId
              );
              return (
                u.add({ awaitIframeCorrelationId: l }),
                await c.catch(() => {
                  throw (
                    (u.end({ success: !1 }),
                    this.logger.info(
                      `Iframe request with correlationId: ${l} failed. Interaction is required.`
                    ),
                    a)
                  );
                }),
                c.then(
                  () => (
                    u.end({ success: !0 }),
                    this.logger.verbose(
                      `Parallel iframe request with correlationId: ${l} succeeded. Retrying cache and/or RT redemption`,
                      r.correlationId
                    ),
                    this.acquireTokenSilentNoIframe(r, o)
                  )
                )
              );
            } else
              return (
                this.logger.warning(
                  "Another iframe request is currently in progress and CacheLookupPolicy is set to Skip. This may result in degraded performance and/or reliability for both calls. Please consider changing the CacheLookupPolicy to take advantage of request queuing and token cache.",
                  r.correlationId
                ),
                x(
                  this.acquireTokenBySilentIframe.bind(this),
                  E.AcquireTokenBySilentIframe,
                  this.logger,
                  this.performanceClient,
                  r.correlationId
                )(r)
              );
          else {
            let c, l;
            return (
              (this.activeIframeRequest = [
                new Promise((u, d) => {
                  (c = u), (l = d);
                }),
                r.correlationId,
              ]),
              this.logger.verbose(
                "Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.",
                r.correlationId
              ),
              x(
                this.acquireTokenBySilentIframe.bind(this),
                E.AcquireTokenBySilentIframe,
                this.logger,
                this.performanceClient,
                r.correlationId
              )(r)
                .then((u) => (c(), u))
                .catch((u) => {
                  throw (l(u), u);
                })
                .finally(() => {
                  this.activeIframeRequest = void 0;
                })
            );
          }
        else throw a;
      })
      .then(
        (a) => (
          this.eventHandler.emitEvent(F.ACQUIRE_TOKEN_SUCCESS, H.Silent, a),
          e.correlationId &&
            this.performanceClient.addFields(
              {
                fromCache: a.fromCache,
                isNativeBroker: a.fromNativeBroker,
                requestId: a.requestId,
              },
              e.correlationId
            ),
          a
        )
      )
      .catch((a) => {
        throw (
          (this.eventHandler.emitEvent(
            F.ACQUIRE_TOKEN_FAILURE,
            H.Silent,
            null,
            a
          ),
          a)
        );
      })
      .finally(() => {
        document.removeEventListener("visibilitychange", () =>
          this.trackPageVisibility(e.correlationId)
        );
      });
  }
  async acquireTokenSilentNoIframe(e, n) {
    return ln.isNativeAvailable(
      this.config,
      this.logger,
      this.nativeExtensionProvider,
      e.authenticationScheme
    ) && e.account.nativeAccountId
      ? (this.logger.verbose(
          "acquireTokenSilent - attempting to acquire token from native platform"
        ),
        this.acquireTokenNative(e, pe.acquireTokenSilent_silentFlow).catch(
          async (r) => {
            throw r instanceof In && Zr(r)
              ? (this.logger.verbose(
                  "acquireTokenSilent - native platform unavailable, falling back to web flow"
                ),
                (this.nativeExtensionProvider = void 0),
                O(An))
              : r;
          }
        ))
      : (this.logger.verbose(
          "acquireTokenSilent - attempting to acquire token from web flow"
        ),
        x(
          this.acquireTokenFromCache.bind(this),
          E.AcquireTokenFromCache,
          this.logger,
          this.performanceClient,
          e.correlationId
        )(e, n).catch((r) => {
          if (n === Et.AccessToken) throw r;
          return (
            this.eventHandler.emitEvent(
              F.ACQUIRE_TOKEN_NETWORK_START,
              H.Silent,
              e
            ),
            x(
              this.acquireTokenByRefreshToken.bind(this),
              E.AcquireTokenByRefreshToken,
              this.logger,
              this.performanceClient,
              e.correlationId
            )(e, n)
          );
        }));
  }
}
function dA(t, e) {
  const n = !(t instanceof Zt && t.subError !== pc),
    r = t.errorCode === Gt.INVALID_GRANT_ERROR || t.errorCode === An,
    o = (n && r) || t.errorCode === Cs || t.errorCode === sh,
    i = oI.includes(e);
  return o && i;
}
const hA = Object.freeze(
  Object.defineProperty(
    { __proto__: null, StandardController: yc },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class Ih {
  static async createPublicClientApplication(e) {
    const n = await NI(e);
    return new Ih(e, n);
  }
  constructor(e, n) {
    if (n) this.controller = n;
    else {
      const r = new Rr(e);
      this.controller = new yc(r);
    }
  }
  async initialize() {
    return this.controller.initialize();
  }
  async acquireTokenPopup(e) {
    return this.controller.acquireTokenPopup(e);
  }
  acquireTokenRedirect(e) {
    return this.controller.acquireTokenRedirect(e);
  }
  acquireTokenSilent(e) {
    return this.controller.acquireTokenSilent(e);
  }
  acquireTokenByCode(e) {
    return this.controller.acquireTokenByCode(e);
  }
  addEventCallback(e) {
    return this.controller.addEventCallback(e);
  }
  removeEventCallback(e) {
    return this.controller.removeEventCallback(e);
  }
  addPerformanceCallback(e) {
    return this.controller.addPerformanceCallback(e);
  }
  removePerformanceCallback(e) {
    return this.controller.removePerformanceCallback(e);
  }
  enableAccountStorageEvents() {
    this.controller.enableAccountStorageEvents();
  }
  disableAccountStorageEvents() {
    this.controller.disableAccountStorageEvents();
  }
  getAccount(e) {
    return this.controller.getAccount(e);
  }
  getAccountByHomeId(e) {
    return this.controller.getAccountByHomeId(e);
  }
  getAccountByLocalId(e) {
    return this.controller.getAccountByLocalId(e);
  }
  getAccountByUsername(e) {
    return this.controller.getAccountByUsername(e);
  }
  getAllAccounts(e) {
    return this.controller.getAllAccounts(e);
  }
  handleRedirectPromise(e) {
    return this.controller.handleRedirectPromise(e);
  }
  loginPopup(e) {
    return this.controller.loginPopup(e);
  }
  loginRedirect(e) {
    return this.controller.loginRedirect(e);
  }
  logout(e) {
    return this.controller.logout(e);
  }
  logoutRedirect(e) {
    return this.controller.logoutRedirect(e);
  }
  logoutPopup(e) {
    return this.controller.logoutPopup(e);
  }
  ssoSilent(e) {
    return this.controller.ssoSilent(e);
  }
  getTokenCache() {
    return this.controller.getTokenCache();
  }
  getLogger() {
    return this.controller.getLogger();
  }
  setLogger(e) {
    this.controller.setLogger(e);
  }
  setActiveAccount(e) {
    this.controller.setActiveAccount(e);
  }
  getActiveAccount() {
    return this.controller.getActiveAccount();
  }
  initializeWrapperLibrary(e, n) {
    return this.controller.initializeWrapperLibrary(e, n);
  }
  setNavigationClient(e) {
    this.controller.setNavigationClient(e);
  }
  getConfiguration() {
    return this.controller.getConfiguration();
  }
  async hydrateCache(e, n) {
    return this.controller.hydrateCache(e, n);
  }
  clearCache(e) {
    return this.controller.clearCache(e);
  }
}
/*! @azure/msal-browser v3.13.0 2024-04-11 */ const fA = {
  initialize: () => Promise.reject(De(Pe)),
  acquireTokenPopup: () => Promise.reject(De(Pe)),
  acquireTokenRedirect: () => Promise.reject(De(Pe)),
  acquireTokenSilent: () => Promise.reject(De(Pe)),
  acquireTokenByCode: () => Promise.reject(De(Pe)),
  getAllAccounts: () => [],
  getAccountByHomeId: () => null,
  getAccountByUsername: () => null,
  getAccountByLocalId: () => null,
  handleRedirectPromise: () => Promise.reject(De(Pe)),
  loginPopup: () => Promise.reject(De(Pe)),
  loginRedirect: () => Promise.reject(De(Pe)),
  logout: () => Promise.reject(De(Pe)),
  logoutRedirect: () => Promise.reject(De(Pe)),
  logoutPopup: () => Promise.reject(De(Pe)),
  ssoSilent: () => Promise.reject(De(Pe)),
  addEventCallback: () => null,
  removeEventCallback: () => {},
  addPerformanceCallback: () => "",
  removePerformanceCallback: () => !1,
  enableAccountStorageEvents: () => {},
  disableAccountStorageEvents: () => {},
  getTokenCache: () => {
    throw De(Pe);
  },
  getLogger: () => {
    throw De(Pe);
  },
  setLogger: () => {},
  setActiveAccount: () => {},
  getActiveAccount: () => null,
  initializeWrapperLibrary: () => {},
  setNavigationClient: () => {},
  getConfiguration: () => {
    throw De(Pe);
  },
  hydrateCache: () => Promise.reject(De(Pe)),
  clearCache: () => Promise.reject(De(Pe)),
};
/*! @azure/msal-browser v3.13.0 2024-04-11 */ class pA {
  static getInteractionStatusFromEvent(e, n) {
    switch (e.eventType) {
      case F.LOGIN_START:
        return Ie.Login;
      case F.SSO_SILENT_START:
        return Ie.SsoSilent;
      case F.ACQUIRE_TOKEN_START:
        if (e.interactionType === H.Redirect || e.interactionType === H.Popup)
          return Ie.AcquireToken;
        break;
      case F.HANDLE_REDIRECT_START:
        return Ie.HandleRedirect;
      case F.LOGOUT_START:
        return Ie.Logout;
      case F.SSO_SILENT_SUCCESS:
      case F.SSO_SILENT_FAILURE:
        if (n && n !== Ie.SsoSilent) break;
        return Ie.None;
      case F.LOGOUT_END:
        if (n && n !== Ie.Logout) break;
        return Ie.None;
      case F.HANDLE_REDIRECT_END:
        if (n && n !== Ie.HandleRedirect) break;
        return Ie.None;
      case F.LOGIN_SUCCESS:
      case F.LOGIN_FAILURE:
      case F.ACQUIRE_TOKEN_SUCCESS:
      case F.ACQUIRE_TOKEN_FAILURE:
      case F.RESTORE_FROM_BFCACHE:
        if (e.interactionType === H.Redirect || e.interactionType === H.Popup) {
          if (n && n !== Ie.Login && n !== Ie.AcquireToken) break;
          return Ie.None;
        }
        break;
    }
    return null;
  }
}
var ku = {},
  Dy = { exports: {} },
  Ot = {},
  Uy = { exports: {} },
  Fy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(M, B) {
    var V = M.length;
    M.push(B);
    e: for (; 0 < V; ) {
      var re = (V - 1) >>> 1,
        q = M[re];
      if (0 < o(q, B)) (M[re] = B), (M[V] = q), (V = re);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var B = M[0],
      V = M.pop();
    if (V !== B) {
      M[0] = V;
      e: for (var re = 0, q = M.length, Ee = q >>> 1; re < Ee; ) {
        var Te = 2 * (re + 1) - 1,
          Oe = M[Te],
          ve = Te + 1,
          Qe = M[ve];
        if (0 > o(Oe, V))
          ve < q && 0 > o(Qe, Oe)
            ? ((M[re] = Qe), (M[ve] = V), (re = ve))
            : ((M[re] = Oe), (M[Te] = V), (re = Te));
        else if (ve < q && 0 > o(Qe, V)) (M[re] = Qe), (M[ve] = V), (re = ve);
        else break e;
      }
    }
    return B;
  }
  function o(M, B) {
    var V = M.sortIndex - B.sortIndex;
    return V !== 0 ? V : M.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    t.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    t.unstable_now = function () {
      return a.now() - s;
    };
  }
  var c = [],
    l = [],
    u = 1,
    d = null,
    h = 3,
    v = !1,
    g = !1,
    m = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(M) {
    for (var B = n(l); B !== null; ) {
      if (B.callback === null) r(l);
      else if (B.startTime <= M)
        r(l), (B.sortIndex = B.expirationTime), e(c, B);
      else break;
      B = n(l);
    }
  }
  function w(M) {
    if (((m = !1), y(M), !g))
      if (n(c) !== null) (g = !0), se(I);
      else {
        var B = n(l);
        B !== null && je(w, B.startTime - M);
      }
  }
  function I(M, B) {
    (g = !1), m && ((m = !1), f(R), (R = -1)), (v = !0);
    var V = h;
    try {
      for (
        y(B), d = n(c);
        d !== null && (!(d.expirationTime > B) || (M && !ee()));

      ) {
        var re = d.callback;
        if (typeof re == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var q = re(d.expirationTime <= B);
          (B = t.unstable_now()),
            typeof q == "function" ? (d.callback = q) : d === n(c) && r(c),
            y(B);
        } else r(c);
        d = n(c);
      }
      if (d !== null) var Ee = !0;
      else {
        var Te = n(l);
        Te !== null && je(w, Te.startTime - B), (Ee = !1);
      }
      return Ee;
    } finally {
      (d = null), (h = V), (v = !1);
    }
  }
  var k = !1,
    A = null,
    R = -1,
    j = 5,
    U = -1;
  function ee() {
    return !(t.unstable_now() - U < j);
  }
  function ue() {
    if (A !== null) {
      var M = t.unstable_now();
      U = M;
      var B = !0;
      try {
        B = A(!0, M);
      } finally {
        B ? Re() : ((k = !1), (A = null));
      }
    } else k = !1;
  }
  var Re;
  if (typeof p == "function")
    Re = function () {
      p(ue);
    };
  else if (typeof MessageChannel < "u") {
    var ze = new MessageChannel(),
      ge = ze.port2;
    (ze.port1.onmessage = ue),
      (Re = function () {
        ge.postMessage(null);
      });
  } else
    Re = function () {
      C(ue, 0);
    };
  function se(M) {
    (A = M), k || ((k = !0), Re());
  }
  function je(M, B) {
    R = C(function () {
      M(t.unstable_now());
    }, B);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      g || v || ((g = !0), se(I));
    }),
    (t.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (j = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (t.unstable_next = function (M) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = h;
      }
      var V = h;
      h = B;
      try {
        return M();
      } finally {
        h = V;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (M, B) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var V = h;
      h = M;
      try {
        return B();
      } finally {
        h = V;
      }
    }),
    (t.unstable_scheduleCallback = function (M, B, V) {
      var re = t.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? re + V : re))
          : (V = re),
        M)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = V + q),
        (M = {
          id: u++,
          callback: B,
          priorityLevel: M,
          startTime: V,
          expirationTime: q,
          sortIndex: -1,
        }),
        V > re
          ? ((M.sortIndex = V),
            e(l, M),
            n(c) === null &&
              M === n(l) &&
              (m ? (f(R), (R = -1)) : (m = !0), je(w, V - re)))
          : ((M.sortIndex = q), e(c, M), g || v || ((g = !0), se(I))),
        M
      );
    }),
    (t.unstable_shouldYield = ee),
    (t.unstable_wrapCallback = function (M) {
      var B = h;
      return function () {
        var V = h;
        h = B;
        try {
          return M.apply(this, arguments);
        } finally {
          h = V;
        }
      };
    });
})(Fy);
Uy.exports = Fy;
var mA = Uy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hy = S,
  bt = mA;
function N(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var $y = new Set(),
  Pi = {};
function Fr(t, e) {
  Po(t, e), Po(t + "Capture", e);
}
function Po(t, e) {
  for (Pi[t] = e, t = 0; t < e.length; t++) $y.add(e[t]);
}
var Nn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  _u = Object.prototype.hasOwnProperty,
  gA =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Rp = {},
  bp = {};
function vA(t) {
  return _u.call(bp, t)
    ? !0
    : _u.call(Rp, t)
    ? !1
    : gA.test(t)
    ? (bp[t] = !0)
    : ((Rp[t] = !0), !1);
}
function yA(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function CA(t, e, n, r) {
  if (e === null || typeof e > "u" || yA(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function ht(t, e, n, r, o, i, a) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var tt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    tt[t] = new ht(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  tt[e] = new ht(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  tt[t] = new ht(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  tt[t] = new ht(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    tt[t] = new ht(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  tt[t] = new ht(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  tt[t] = new ht(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  tt[t] = new ht(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  tt[t] = new ht(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Ah = /[\-:]([a-z])/g;
function kh(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Ah, kh);
    tt[e] = new ht(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Ah, kh);
    tt[e] = new ht(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(Ah, kh);
  tt[e] = new ht(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  tt[t] = new ht(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
tt.xlinkHref = new ht(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
  tt[t] = new ht(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function _h(t, e, n, r) {
  var o = tt.hasOwnProperty(e) ? tt[e] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (CA(e, n, o, r) && (n = null),
    r || o === null
      ? vA(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : o.mustUseProperty
      ? (t[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((e = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var Un = Hy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ta = Symbol.for("react.element"),
  no = Symbol.for("react.portal"),
  ro = Symbol.for("react.fragment"),
  Rh = Symbol.for("react.strict_mode"),
  Ru = Symbol.for("react.profiler"),
  By = Symbol.for("react.provider"),
  zy = Symbol.for("react.context"),
  bh = Symbol.for("react.forward_ref"),
  bu = Symbol.for("react.suspense"),
  Ou = Symbol.for("react.suspense_list"),
  Oh = Symbol.for("react.memo"),
  jn = Symbol.for("react.lazy"),
  jy = Symbol.for("react.offscreen"),
  Op = Symbol.iterator;
function ei(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Op && t[Op]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var we = Object.assign,
  yl;
function mi(t) {
  if (yl === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      yl = (e && e[1]) || "";
    }
  return (
    `
` +
    yl +
    t
  );
}
var Cl = !1;
function Sl(t, e) {
  if (!t || Cl) return "";
  Cl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (l) {
          var r = l;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (l) {
          r = l;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l) {
        r = l;
      }
      t();
    }
  } catch (l) {
    if (l && r && typeof l.stack == "string") {
      for (
        var o = l.stack.split(`
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
                var c =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", t.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (Cl = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? mi(t) : "";
}
function SA(t) {
  switch (t.tag) {
    case 5:
      return mi(t.type);
    case 16:
      return mi("Lazy");
    case 13:
      return mi("Suspense");
    case 19:
      return mi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = Sl(t.type, !1)), t;
    case 11:
      return (t = Sl(t.type.render, !1)), t;
    case 1:
      return (t = Sl(t.type, !0)), t;
    default:
      return "";
  }
}
function Pu(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case ro:
      return "Fragment";
    case no:
      return "Portal";
    case Ru:
      return "Profiler";
    case Rh:
      return "StrictMode";
    case bu:
      return "Suspense";
    case Ou:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case zy:
        return (t.displayName || "Context") + ".Consumer";
      case By:
        return (t._context.displayName || "Context") + ".Provider";
      case bh:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Oh:
        return (
          (e = t.displayName || null), e !== null ? e : Pu(t.type) || "Memo"
        );
      case jn:
        (e = t._payload), (t = t._init);
        try {
          return Pu(t(e));
        } catch {}
    }
  return null;
}
function wA(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Pu(e);
    case 8:
      return e === Rh ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function sr(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function Vy(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function EA(t) {
  var e = Vy(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Ia(t) {
  t._valueTracker || (t._valueTracker = EA(t));
}
function Ky(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = Vy(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function As(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Nu(t, e) {
  var n = e.checked;
  return we({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function Pp(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (n = sr(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function Gy(t, e) {
  (e = e.checked), e != null && _h(t, "checked", e, !1);
}
function Mu(t, e) {
  Gy(t, e);
  var n = sr(e.value),
    r = e.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? xu(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && xu(t, e.type, sr(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function Np(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function xu(t, e, n) {
  (e !== "number" || As(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var gi = Array.isArray;
function Co(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var o = 0; o < n.length; o++) e["$" + n[o]] = !0;
    for (n = 0; n < t.length; n++)
      (o = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== o && (t[n].selected = o),
        o && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + sr(n), e = null, o = 0; o < t.length; o++) {
      if (t[o].value === n) {
        (t[o].selected = !0), r && (t[o].defaultSelected = !0);
        return;
      }
      e !== null || t[o].disabled || (e = t[o]);
    }
    e !== null && (e.selected = !0);
  }
}
function Lu(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(N(91));
  return we({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function Mp(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(N(92));
      if (gi(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: sr(n) };
}
function Wy(t, e) {
  var n = sr(e.value),
    r = sr(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r);
}
function xp(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function qy(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Du(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? qy(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var Aa,
  Yy = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, o);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        Aa = Aa || document.createElement("div"),
          Aa.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = Aa.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function Ni(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Ei = {
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
  TA = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ei).forEach(function (t) {
  TA.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Ei[e] = Ei[t]);
  });
});
function Qy(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (Ei.hasOwnProperty(t) && Ei[t])
    ? ("" + e).trim()
    : e + "px";
}
function Jy(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Qy(n, e[n], r);
      n === "float" && (n = "cssFloat"), r ? t.setProperty(n, o) : (t[n] = o);
    }
}
var IA = we(
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
function Uu(t, e) {
  if (e) {
    if (IA[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(N(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(N(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(N(62));
  }
}
function Fu(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Hu = null;
function Ph(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var $u = null,
  So = null,
  wo = null;
function Lp(t) {
  if ((t = sa(t))) {
    if (typeof $u != "function") throw Error(N(280));
    var e = t.stateNode;
    e && ((e = Tc(e)), $u(t.stateNode, t.type, e));
  }
}
function Xy(t) {
  So ? (wo ? wo.push(t) : (wo = [t])) : (So = t);
}
function Zy() {
  if (So) {
    var t = So,
      e = wo;
    if (((wo = So = null), Lp(t), e)) for (t = 0; t < e.length; t++) Lp(e[t]);
  }
}
function eC(t, e) {
  return t(e);
}
function tC() {}
var wl = !1;
function nC(t, e, n) {
  if (wl) return t(e, n);
  wl = !0;
  try {
    return eC(t, e, n);
  } finally {
    (wl = !1), (So !== null || wo !== null) && (tC(), Zy());
  }
}
function Mi(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = Tc(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !r);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(N(231, e, typeof n));
  return n;
}
var Bu = !1;
if (Nn)
  try {
    var ti = {};
    Object.defineProperty(ti, "passive", {
      get: function () {
        Bu = !0;
      },
    }),
      window.addEventListener("test", ti, ti),
      window.removeEventListener("test", ti, ti);
  } catch {
    Bu = !1;
  }
function AA(t, e, n, r, o, i, a, s, c) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, l);
  } catch (u) {
    this.onError(u);
  }
}
var Ti = !1,
  ks = null,
  _s = !1,
  zu = null,
  kA = {
    onError: function (t) {
      (Ti = !0), (ks = t);
    },
  };
function _A(t, e, n, r, o, i, a, s, c) {
  (Ti = !1), (ks = null), AA.apply(kA, arguments);
}
function RA(t, e, n, r, o, i, a, s, c) {
  if ((_A.apply(this, arguments), Ti)) {
    if (Ti) {
      var l = ks;
      (Ti = !1), (ks = null);
    } else throw Error(N(198));
    _s || ((_s = !0), (zu = l));
  }
}
function Hr(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function rC(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function Dp(t) {
  if (Hr(t) !== t) throw Error(N(188));
}
function bA(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = Hr(t)), e === null)) throw Error(N(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
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
        if (i === n) return Dp(o), t;
        if (i === r) return Dp(o), e;
        i = i.sibling;
      }
      throw Error(N(188));
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
        if (!a) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? t : e;
}
function oC(t) {
  return (t = bA(t)), t !== null ? iC(t) : null;
}
function iC(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = iC(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var aC = bt.unstable_scheduleCallback,
  Up = bt.unstable_cancelCallback,
  OA = bt.unstable_shouldYield,
  PA = bt.unstable_requestPaint,
  be = bt.unstable_now,
  NA = bt.unstable_getCurrentPriorityLevel,
  Nh = bt.unstable_ImmediatePriority,
  sC = bt.unstable_UserBlockingPriority,
  Rs = bt.unstable_NormalPriority,
  MA = bt.unstable_LowPriority,
  cC = bt.unstable_IdlePriority,
  Cc = null,
  hn = null;
function xA(t) {
  if (hn && typeof hn.onCommitFiberRoot == "function")
    try {
      hn.onCommitFiberRoot(Cc, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var Jt = Math.clz32 ? Math.clz32 : UA,
  LA = Math.log,
  DA = Math.LN2;
function UA(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((LA(t) / DA) | 0)) | 0;
}
var ka = 64,
  _a = 4194304;
function vi(t) {
  switch (t & -t) {
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
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function bs(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = t.suspendedLanes,
    i = t.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (r = vi(s)) : ((i &= a), i !== 0 && (r = vi(i)));
  } else (a = n & ~o), a !== 0 ? (r = vi(a)) : i !== 0 && (r = vi(i));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & o) &&
    ((o = r & -r), (i = e & -e), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      (n = 31 - Jt(e)), (o = 1 << n), (r |= t[n]), (e &= ~o);
  return r;
}
function FA(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
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
      return e + 5e3;
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
function HA(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      o = t.expirationTimes,
      i = t.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Jt(i),
      s = 1 << a,
      c = o[a];
    c === -1
      ? (!(s & n) || s & r) && (o[a] = FA(s, e))
      : c <= e && (t.expiredLanes |= s),
      (i &= ~s);
  }
}
function ju(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function lC() {
  var t = ka;
  return (ka <<= 1), !(ka & 4194240) && (ka = 64), t;
}
function El(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function ia(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - Jt(e)),
    (t[e] = n);
}
function $A(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var o = 31 - Jt(n),
      i = 1 << o;
    (e[o] = 0), (r[o] = -1), (t[o] = -1), (n &= ~i);
  }
}
function Mh(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - Jt(n),
      o = 1 << r;
    (o & e) | (t[r] & e) && (t[r] |= e), (n &= ~o);
  }
}
var ie = 0;
function uC(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var dC,
  xh,
  hC,
  fC,
  pC,
  Vu = !1,
  Ra = [],
  Jn = null,
  Xn = null,
  Zn = null,
  xi = new Map(),
  Li = new Map(),
  Kn = [],
  BA =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Fp(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      Jn = null;
      break;
    case "dragenter":
    case "dragleave":
      Xn = null;
      break;
    case "mouseover":
    case "mouseout":
      Zn = null;
      break;
    case "pointerover":
    case "pointerout":
      xi.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Li.delete(e.pointerId);
  }
}
function ni(t, e, n, r, o, i) {
  return t === null || t.nativeEvent !== i
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      e !== null && ((e = sa(e)), e !== null && xh(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      o !== null && e.indexOf(o) === -1 && e.push(o),
      t);
}
function zA(t, e, n, r, o) {
  switch (e) {
    case "focusin":
      return (Jn = ni(Jn, t, e, n, r, o)), !0;
    case "dragenter":
      return (Xn = ni(Xn, t, e, n, r, o)), !0;
    case "mouseover":
      return (Zn = ni(Zn, t, e, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return xi.set(i, ni(xi.get(i) || null, t, e, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Li.set(i, ni(Li.get(i) || null, t, e, n, r, o)), !0
      );
  }
  return !1;
}
function mC(t) {
  var e = Cr(t.target);
  if (e !== null) {
    var n = Hr(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = rC(n)), e !== null)) {
          (t.blockedOn = e),
            pC(t.priority, function () {
              hC(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function Qa(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Ku(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Hu = r), n.target.dispatchEvent(r), (Hu = null);
    } else return (e = sa(n)), e !== null && xh(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function Hp(t, e, n) {
  Qa(t) && n.delete(e);
}
function jA() {
  (Vu = !1),
    Jn !== null && Qa(Jn) && (Jn = null),
    Xn !== null && Qa(Xn) && (Xn = null),
    Zn !== null && Qa(Zn) && (Zn = null),
    xi.forEach(Hp),
    Li.forEach(Hp);
}
function ri(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    Vu ||
      ((Vu = !0),
      bt.unstable_scheduleCallback(bt.unstable_NormalPriority, jA)));
}
function Di(t) {
  function e(o) {
    return ri(o, t);
  }
  if (0 < Ra.length) {
    ri(Ra[0], t);
    for (var n = 1; n < Ra.length; n++) {
      var r = Ra[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    Jn !== null && ri(Jn, t),
      Xn !== null && ri(Xn, t),
      Zn !== null && ri(Zn, t),
      xi.forEach(e),
      Li.forEach(e),
      n = 0;
    n < Kn.length;
    n++
  )
    (r = Kn[n]), r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < Kn.length && ((n = Kn[0]), n.blockedOn === null); )
    mC(n), n.blockedOn === null && Kn.shift();
}
var Eo = Un.ReactCurrentBatchConfig,
  Os = !0;
function VA(t, e, n, r) {
  var o = ie,
    i = Eo.transition;
  Eo.transition = null;
  try {
    (ie = 1), Lh(t, e, n, r);
  } finally {
    (ie = o), (Eo.transition = i);
  }
}
function KA(t, e, n, r) {
  var o = ie,
    i = Eo.transition;
  Eo.transition = null;
  try {
    (ie = 4), Lh(t, e, n, r);
  } finally {
    (ie = o), (Eo.transition = i);
  }
}
function Lh(t, e, n, r) {
  if (Os) {
    var o = Ku(t, e, n, r);
    if (o === null) Nl(t, e, r, Ps, n), Fp(t, r);
    else if (zA(o, t, e, n, r)) r.stopPropagation();
    else if ((Fp(t, r), e & 4 && -1 < BA.indexOf(t))) {
      for (; o !== null; ) {
        var i = sa(o);
        if (
          (i !== null && dC(i),
          (i = Ku(t, e, n, r)),
          i === null && Nl(t, e, r, Ps, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Nl(t, e, r, null, n);
  }
}
var Ps = null;
function Ku(t, e, n, r) {
  if (((Ps = null), (t = Ph(r)), (t = Cr(t)), t !== null))
    if (((e = Hr(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = rC(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (Ps = t), null;
}
function gC(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (NA()) {
        case Nh:
          return 1;
        case sC:
          return 4;
        case Rs:
        case MA:
          return 16;
        case cC:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wn = null,
  Dh = null,
  Ja = null;
function vC() {
  if (Ja) return Ja;
  var t,
    e = Dh,
    n = e.length,
    r,
    o = "value" in Wn ? Wn.value : Wn.textContent,
    i = o.length;
  for (t = 0; t < n && e[t] === o[t]; t++);
  var a = n - t;
  for (r = 1; r <= a && e[n - r] === o[i - r]; r++);
  return (Ja = o.slice(t, 1 < r ? 1 - r : void 0));
}
function Xa(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function ba() {
  return !0;
}
function $p() {
  return !1;
}
function Pt(t) {
  function e(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in t)
      t.hasOwnProperty(s) && ((n = t[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ba
        : $p),
      (this.isPropagationStopped = $p),
      this
    );
  }
  return (
    we(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ba));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ba));
      },
      persist: function () {},
      isPersistent: ba,
    }),
    e
  );
}
var jo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Uh = Pt(jo),
  aa = we({}, jo, { view: 0, detail: 0 }),
  GA = Pt(aa),
  Tl,
  Il,
  oi,
  Sc = we({}, aa, {
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
    getModifierState: Fh,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== oi &&
            (oi && t.type === "mousemove"
              ? ((Tl = t.screenX - oi.screenX), (Il = t.screenY - oi.screenY))
              : (Il = Tl = 0),
            (oi = t)),
          Tl);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : Il;
    },
  }),
  Bp = Pt(Sc),
  WA = we({}, Sc, { dataTransfer: 0 }),
  qA = Pt(WA),
  YA = we({}, aa, { relatedTarget: 0 }),
  Al = Pt(YA),
  QA = we({}, jo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  JA = Pt(QA),
  XA = we({}, jo, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  ZA = Pt(XA),
  ek = we({}, jo, { data: 0 }),
  zp = Pt(ek),
  tk = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  nk = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  rk = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ok(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = rk[t]) ? !!e[t] : !1;
}
function Fh() {
  return ok;
}
var ik = we({}, aa, {
    key: function (t) {
      if (t.key) {
        var e = tk[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = Xa(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? nk[t.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fh,
    charCode: function (t) {
      return t.type === "keypress" ? Xa(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? Xa(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  ak = Pt(ik),
  sk = we({}, Sc, {
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
  jp = Pt(sk),
  ck = we({}, aa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fh,
  }),
  lk = Pt(ck),
  uk = we({}, jo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dk = Pt(uk),
  hk = we({}, Sc, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
        ? -t.wheelDeltaY
        : "wheelDelta" in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  fk = Pt(hk),
  pk = [9, 13, 27, 32],
  Hh = Nn && "CompositionEvent" in window,
  Ii = null;
Nn && "documentMode" in document && (Ii = document.documentMode);
var mk = Nn && "TextEvent" in window && !Ii,
  yC = Nn && (!Hh || (Ii && 8 < Ii && 11 >= Ii)),
  Vp = " ",
  Kp = !1;
function CC(t, e) {
  switch (t) {
    case "keyup":
      return pk.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function SC(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var oo = !1;
function gk(t, e) {
  switch (t) {
    case "compositionend":
      return SC(e);
    case "keypress":
      return e.which !== 32 ? null : ((Kp = !0), Vp);
    case "textInput":
      return (t = e.data), t === Vp && Kp ? null : t;
    default:
      return null;
  }
}
function vk(t, e) {
  if (oo)
    return t === "compositionend" || (!Hh && CC(t, e))
      ? ((t = vC()), (Ja = Dh = Wn = null), (oo = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return yC && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var yk = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
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
function Gp(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!yk[t.type] : e === "textarea";
}
function wC(t, e, n, r) {
  Xy(r),
    (e = Ns(e, "onChange")),
    0 < e.length &&
      ((n = new Uh("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e }));
}
var Ai = null,
  Ui = null;
function Ck(t) {
  NC(t, 0);
}
function wc(t) {
  var e = so(t);
  if (Ky(e)) return t;
}
function Sk(t, e) {
  if (t === "change") return e;
}
var EC = !1;
if (Nn) {
  var kl;
  if (Nn) {
    var _l = "oninput" in document;
    if (!_l) {
      var Wp = document.createElement("div");
      Wp.setAttribute("oninput", "return;"),
        (_l = typeof Wp.oninput == "function");
    }
    kl = _l;
  } else kl = !1;
  EC = kl && (!document.documentMode || 9 < document.documentMode);
}
function qp() {
  Ai && (Ai.detachEvent("onpropertychange", TC), (Ui = Ai = null));
}
function TC(t) {
  if (t.propertyName === "value" && wc(Ui)) {
    var e = [];
    wC(e, Ui, t, Ph(t)), nC(Ck, e);
  }
}
function wk(t, e, n) {
  t === "focusin"
    ? (qp(), (Ai = e), (Ui = n), Ai.attachEvent("onpropertychange", TC))
    : t === "focusout" && qp();
}
function Ek(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return wc(Ui);
}
function Tk(t, e) {
  if (t === "click") return wc(e);
}
function Ik(t, e) {
  if (t === "input" || t === "change") return wc(e);
}
function Ak(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var en = typeof Object.is == "function" ? Object.is : Ak;
function Fi(t, e) {
  if (en(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!_u.call(e, o) || !en(t[o], e[o])) return !1;
  }
  return !0;
}
function Yp(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Qp(t, e) {
  var n = Yp(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
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
    n = Yp(n);
  }
}
function IC(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? IC(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function AC() {
  for (var t = window, e = As(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = As(t.document);
  }
  return e;
}
function $h(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function kk(t) {
  var e = AC(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    IC(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && $h(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !t.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Qp(n, i));
        var a = Qp(n, r);
        o &&
          a &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== o.node ||
            t.anchorOffset !== o.offset ||
            t.focusNode !== a.node ||
            t.focusOffset !== a.offset) &&
          ((e = e.createRange()),
          e.setStart(o.node, o.offset),
          t.removeAllRanges(),
          i > r
            ? (t.addRange(e), t.extend(a.node, a.offset))
            : (e.setEnd(a.node, a.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var _k = Nn && "documentMode" in document && 11 >= document.documentMode,
  io = null,
  Gu = null,
  ki = null,
  Wu = !1;
function Jp(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wu ||
    io == null ||
    io !== As(r) ||
    ((r = io),
    "selectionStart" in r && $h(r)
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
    (ki && Fi(ki, r)) ||
      ((ki = r),
      (r = Ns(Gu, "onSelect")),
      0 < r.length &&
        ((e = new Uh("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = io))));
}
function Oa(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var ao = {
    animationend: Oa("Animation", "AnimationEnd"),
    animationiteration: Oa("Animation", "AnimationIteration"),
    animationstart: Oa("Animation", "AnimationStart"),
    transitionend: Oa("Transition", "TransitionEnd"),
  },
  Rl = {},
  kC = {};
Nn &&
  ((kC = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ao.animationend.animation,
    delete ao.animationiteration.animation,
    delete ao.animationstart.animation),
  "TransitionEvent" in window || delete ao.transitionend.transition);
function Ec(t) {
  if (Rl[t]) return Rl[t];
  if (!ao[t]) return t;
  var e = ao[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in kC) return (Rl[t] = e[n]);
  return t;
}
var _C = Ec("animationend"),
  RC = Ec("animationiteration"),
  bC = Ec("animationstart"),
  OC = Ec("transitionend"),
  PC = new Map(),
  Xp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ur(t, e) {
  PC.set(t, e), Fr(e, [t]);
}
for (var bl = 0; bl < Xp.length; bl++) {
  var Ol = Xp[bl],
    Rk = Ol.toLowerCase(),
    bk = Ol[0].toUpperCase() + Ol.slice(1);
  ur(Rk, "on" + bk);
}
ur(_C, "onAnimationEnd");
ur(RC, "onAnimationIteration");
ur(bC, "onAnimationStart");
ur("dblclick", "onDoubleClick");
ur("focusin", "onFocus");
ur("focusout", "onBlur");
ur(OC, "onTransitionEnd");
Po("onMouseEnter", ["mouseout", "mouseover"]);
Po("onMouseLeave", ["mouseout", "mouseover"]);
Po("onPointerEnter", ["pointerout", "pointerover"]);
Po("onPointerLeave", ["pointerout", "pointerover"]);
Fr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Fr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Fr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Fr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Fr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var yi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ok = new Set("cancel close invalid load scroll toggle".split(" ").concat(yi));
function Zp(t, e, n) {
  var r = t.type || "unknown-event";
  (t.currentTarget = n), RA(r, e, void 0, t), (t.currentTarget = null);
}
function NC(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (e)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            c = s.instance,
            l = s.currentTarget;
          if (((s = s.listener), c !== i && o.isPropagationStopped())) break e;
          Zp(o, s, l), (i = c);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (c = s.instance),
            (l = s.currentTarget),
            (s = s.listener),
            c !== i && o.isPropagationStopped())
          )
            break e;
          Zp(o, s, l), (i = c);
        }
    }
  }
  if (_s) throw ((t = zu), (_s = !1), (zu = null), t);
}
function fe(t, e) {
  var n = e[Xu];
  n === void 0 && (n = e[Xu] = new Set());
  var r = t + "__bubble";
  n.has(r) || (MC(e, t, 2, !1), n.add(r));
}
function Pl(t, e, n) {
  var r = 0;
  e && (r |= 4), MC(n, t, r, e);
}
var Pa = "_reactListening" + Math.random().toString(36).slice(2);
function Hi(t) {
  if (!t[Pa]) {
    (t[Pa] = !0),
      $y.forEach(function (n) {
        n !== "selectionchange" && (Ok.has(n) || Pl(n, !1, t), Pl(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Pa] || ((e[Pa] = !0), Pl("selectionchange", !1, e));
  }
}
function MC(t, e, n, r) {
  switch (gC(e)) {
    case 1:
      var o = VA;
      break;
    case 4:
      o = KA;
      break;
    default:
      o = Lh;
  }
  (n = o.bind(null, e, n, t)),
    (o = void 0),
    !Bu ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: o })
        : t.addEventListener(e, n, !0)
      : o !== void 0
      ? t.addEventListener(e, n, { passive: o })
      : t.addEventListener(e, n, !1);
}
function Nl(t, e, n, r, o) {
  var i = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === o || (c.nodeType === 8 && c.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = Cr(s)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            r = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  nC(function () {
    var l = i,
      u = Ph(n),
      d = [];
    e: {
      var h = PC.get(t);
      if (h !== void 0) {
        var v = Uh,
          g = t;
        switch (t) {
          case "keypress":
            if (Xa(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = ak;
            break;
          case "focusin":
            (g = "focus"), (v = Al);
            break;
          case "focusout":
            (g = "blur"), (v = Al);
            break;
          case "beforeblur":
          case "afterblur":
            v = Al;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Bp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = qA;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = lk;
            break;
          case _C:
          case RC:
          case bC:
            v = JA;
            break;
          case OC:
            v = dk;
            break;
          case "scroll":
            v = GA;
            break;
          case "wheel":
            v = fk;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ZA;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = jp;
        }
        var m = (e & 4) !== 0,
          C = !m && t === "scroll",
          f = m ? (h !== null ? h + "Capture" : null) : h;
        m = [];
        for (var p = l, y; p !== null; ) {
          y = p;
          var w = y.stateNode;
          if (
            (y.tag === 5 &&
              w !== null &&
              ((y = w),
              f !== null && ((w = Mi(p, f)), w != null && m.push($i(p, w, y)))),
            C)
          )
            break;
          p = p.return;
        }
        0 < m.length &&
          ((h = new v(h, g, null, n, u)), d.push({ event: h, listeners: m }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((h = t === "mouseover" || t === "pointerover"),
          (v = t === "mouseout" || t === "pointerout"),
          h &&
            n !== Hu &&
            (g = n.relatedTarget || n.fromElement) &&
            (Cr(g) || g[Mn]))
        )
          break e;
        if (
          (v || h) &&
          ((h =
            u.window === u
              ? u
              : (h = u.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = l),
              (g = g ? Cr(g) : null),
              g !== null &&
                ((C = Hr(g)), g !== C || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = l)),
          v !== g)
        ) {
          if (
            ((m = Bp),
            (w = "onMouseLeave"),
            (f = "onMouseEnter"),
            (p = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((m = jp),
              (w = "onPointerLeave"),
              (f = "onPointerEnter"),
              (p = "pointer")),
            (C = v == null ? h : so(v)),
            (y = g == null ? h : so(g)),
            (h = new m(w, p + "leave", v, n, u)),
            (h.target = C),
            (h.relatedTarget = y),
            (w = null),
            Cr(u) === l &&
              ((m = new m(f, p + "enter", g, n, u)),
              (m.target = y),
              (m.relatedTarget = C),
              (w = m)),
            (C = w),
            v && g)
          )
            t: {
              for (m = v, f = g, p = 0, y = m; y; y = Gr(y)) p++;
              for (y = 0, w = f; w; w = Gr(w)) y++;
              for (; 0 < p - y; ) (m = Gr(m)), p--;
              for (; 0 < y - p; ) (f = Gr(f)), y--;
              for (; p--; ) {
                if (m === f || (f !== null && m === f.alternate)) break t;
                (m = Gr(m)), (f = Gr(f));
              }
              m = null;
            }
          else m = null;
          v !== null && em(d, h, v, m, !1),
            g !== null && C !== null && em(d, C, g, m, !0);
        }
      }
      e: {
        if (
          ((h = l ? so(l) : window),
          (v = h.nodeName && h.nodeName.toLowerCase()),
          v === "select" || (v === "input" && h.type === "file"))
        )
          var I = Sk;
        else if (Gp(h))
          if (EC) I = Ik;
          else {
            I = Ek;
            var k = wk;
          }
        else
          (v = h.nodeName) &&
            v.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (I = Tk);
        if (I && (I = I(t, l))) {
          wC(d, I, n, u);
          break e;
        }
        k && k(t, h, l),
          t === "focusout" &&
            (k = h._wrapperState) &&
            k.controlled &&
            h.type === "number" &&
            xu(h, "number", h.value);
      }
      switch (((k = l ? so(l) : window), t)) {
        case "focusin":
          (Gp(k) || k.contentEditable === "true") &&
            ((io = k), (Gu = l), (ki = null));
          break;
        case "focusout":
          ki = Gu = io = null;
          break;
        case "mousedown":
          Wu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Wu = !1), Jp(d, n, u);
          break;
        case "selectionchange":
          if (_k) break;
        case "keydown":
        case "keyup":
          Jp(d, n, u);
      }
      var A;
      if (Hh)
        e: {
          switch (t) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        oo
          ? CC(t, n) && (R = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (yC &&
          n.locale !== "ko" &&
          (oo || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && oo && (A = vC())
            : ((Wn = u),
              (Dh = "value" in Wn ? Wn.value : Wn.textContent),
              (oo = !0))),
        (k = Ns(l, R)),
        0 < k.length &&
          ((R = new zp(R, t, null, n, u)),
          d.push({ event: R, listeners: k }),
          A ? (R.data = A) : ((A = SC(n)), A !== null && (R.data = A)))),
        (A = mk ? gk(t, n) : vk(t, n)) &&
          ((l = Ns(l, "onBeforeInput")),
          0 < l.length &&
            ((u = new zp("onBeforeInput", "beforeinput", null, n, u)),
            d.push({ event: u, listeners: l }),
            (u.data = A)));
    }
    NC(d, e);
  });
}
function $i(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Ns(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var o = t,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Mi(t, n)),
      i != null && r.unshift($i(t, i, o)),
      (i = Mi(t, e)),
      i != null && r.push($i(t, i, o))),
      (t = t.return);
  }
  return r;
}
function Gr(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function em(t, e, n, r, o) {
  for (var i = e._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      c = s.alternate,
      l = s.stateNode;
    if (c !== null && c === r) break;
    s.tag === 5 &&
      l !== null &&
      ((s = l),
      o
        ? ((c = Mi(n, i)), c != null && a.unshift($i(n, c, s)))
        : o || ((c = Mi(n, i)), c != null && a.push($i(n, c, s)))),
      (n = n.return);
  }
  a.length !== 0 && t.push({ event: e, listeners: a });
}
var Pk = /\r\n?/g,
  Nk = /\u0000|\uFFFD/g;
function tm(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      Pk,
      `
`
    )
    .replace(Nk, "");
}
function Na(t, e, n) {
  if (((e = tm(e)), tm(t) !== e && n)) throw Error(N(425));
}
function Ms() {}
var qu = null,
  Yu = null;
function Qu(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var Ju = typeof setTimeout == "function" ? setTimeout : void 0,
  Mk = typeof clearTimeout == "function" ? clearTimeout : void 0,
  nm = typeof Promise == "function" ? Promise : void 0,
  xk =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof nm < "u"
      ? function (t) {
          return nm.resolve(null).then(t).catch(Lk);
        }
      : Ju;
function Lk(t) {
  setTimeout(function () {
    throw t;
  });
}
function Ml(t, e) {
  var n = e,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((t.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          t.removeChild(o), Di(e);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Di(e);
}
function er(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function rm(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var Vo = Math.random().toString(36).slice(2),
  sn = "__reactFiber$" + Vo,
  Bi = "__reactProps$" + Vo,
  Mn = "__reactContainer$" + Vo,
  Xu = "__reactEvents$" + Vo,
  Dk = "__reactListeners$" + Vo,
  Uk = "__reactHandles$" + Vo;
function Cr(t) {
  var e = t[sn];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[Mn] || n[sn])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = rm(t); t !== null; ) {
          if ((n = t[sn])) return n;
          t = rm(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function sa(t) {
  return (
    (t = t[sn] || t[Mn]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function so(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(N(33));
}
function Tc(t) {
  return t[Bi] || null;
}
var Zu = [],
  co = -1;
function dr(t) {
  return { current: t };
}
function me(t) {
  0 > co || ((t.current = Zu[co]), (Zu[co] = null), co--);
}
function he(t, e) {
  co++, (Zu[co] = t.current), (t.current = e);
}
var cr = {},
  ct = dr(cr),
  gt = dr(!1),
  br = cr;
function No(t, e) {
  var n = t.type.contextTypes;
  if (!n) return cr;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = e[i];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function vt(t) {
  return (t = t.childContextTypes), t != null;
}
function xs() {
  me(gt), me(ct);
}
function om(t, e, n) {
  if (ct.current !== cr) throw Error(N(168));
  he(ct, e), he(gt, n);
}
function xC(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in e)) throw Error(N(108, wA(t) || "Unknown", o));
  return we({}, n, r);
}
function Ls(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || cr),
    (br = ct.current),
    he(ct, t),
    he(gt, gt.current),
    !0
  );
}
function im(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((t = xC(t, e, br)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      me(gt),
      me(ct),
      he(ct, t))
    : me(gt),
    he(gt, n);
}
var Tn = null,
  Ic = !1,
  xl = !1;
function LC(t) {
  Tn === null ? (Tn = [t]) : Tn.push(t);
}
function Fk(t) {
  (Ic = !0), LC(t);
}
function hr() {
  if (!xl && Tn !== null) {
    xl = !0;
    var t = 0,
      e = ie;
    try {
      var n = Tn;
      for (ie = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      (Tn = null), (Ic = !1);
    } catch (o) {
      throw (Tn !== null && (Tn = Tn.slice(t + 1)), aC(Nh, hr), o);
    } finally {
      (ie = e), (xl = !1);
    }
  }
  return null;
}
var lo = [],
  uo = 0,
  Ds = null,
  Us = 0,
  Mt = [],
  xt = 0,
  Or = null,
  _n = 1,
  Rn = "";
function gr(t, e) {
  (lo[uo++] = Us), (lo[uo++] = Ds), (Ds = t), (Us = e);
}
function DC(t, e, n) {
  (Mt[xt++] = _n), (Mt[xt++] = Rn), (Mt[xt++] = Or), (Or = t);
  var r = _n;
  t = Rn;
  var o = 32 - Jt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Jt(e) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (_n = (1 << (32 - Jt(e) + o)) | (n << o) | r),
      (Rn = i + t);
  } else (_n = (1 << i) | (n << o) | r), (Rn = t);
}
function Bh(t) {
  t.return !== null && (gr(t, 1), DC(t, 1, 0));
}
function zh(t) {
  for (; t === Ds; )
    (Ds = lo[--uo]), (lo[uo] = null), (Us = lo[--uo]), (lo[uo] = null);
  for (; t === Or; )
    (Or = Mt[--xt]),
      (Mt[xt] = null),
      (Rn = Mt[--xt]),
      (Mt[xt] = null),
      (_n = Mt[--xt]),
      (Mt[xt] = null);
}
var _t = null,
  At = null,
  ye = !1,
  Wt = null;
function UC(t, e) {
  var n = Lt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function am(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (_t = t), (At = er(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (_t = t), (At = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = Or !== null ? { id: _n, overflow: Rn } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Lt(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (_t = t),
            (At = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ed(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function td(t) {
  if (ye) {
    var e = At;
    if (e) {
      var n = e;
      if (!am(t, e)) {
        if (ed(t)) throw Error(N(418));
        e = er(n.nextSibling);
        var r = _t;
        e && am(t, e)
          ? UC(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (ye = !1), (_t = t));
      }
    } else {
      if (ed(t)) throw Error(N(418));
      (t.flags = (t.flags & -4097) | 2), (ye = !1), (_t = t);
    }
  }
}
function sm(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  _t = t;
}
function Ma(t) {
  if (t !== _t) return !1;
  if (!ye) return sm(t), (ye = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !Qu(t.type, t.memoizedProps))),
    e && (e = At))
  ) {
    if (ed(t)) throw (FC(), Error(N(418)));
    for (; e; ) UC(t, e), (e = er(e.nextSibling));
  }
  if ((sm(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(N(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              At = er(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      At = null;
    }
  } else At = _t ? er(t.stateNode.nextSibling) : null;
  return !0;
}
function FC() {
  for (var t = At; t; ) t = er(t.nextSibling);
}
function Mo() {
  (At = _t = null), (ye = !1);
}
function jh(t) {
  Wt === null ? (Wt = [t]) : Wt.push(t);
}
var Hk = Un.ReactCurrentBatchConfig;
function jt(t, e) {
  if (t && t.defaultProps) {
    (e = we({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var Fs = dr(null),
  Hs = null,
  ho = null,
  Vh = null;
function Kh() {
  Vh = ho = Hs = null;
}
function Gh(t) {
  var e = Fs.current;
  me(Fs), (t._currentValue = e);
}
function nd(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function To(t, e) {
  (Hs = t),
    (Vh = ho = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (mt = !0), (t.firstContext = null));
}
function Ht(t) {
  var e = t._currentValue;
  if (Vh !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), ho === null)) {
      if (Hs === null) throw Error(N(308));
      (ho = t), (Hs.dependencies = { lanes: 0, firstContext: t });
    } else ho = ho.next = t;
  return e;
}
var Sr = null;
function Wh(t) {
  Sr === null ? (Sr = [t]) : Sr.push(t);
}
function HC(t, e, n, r) {
  var o = e.interleaved;
  return (
    o === null ? ((n.next = n), Wh(e)) : ((n.next = o.next), (o.next = n)),
    (e.interleaved = n),
    xn(t, r)
  );
}
function xn(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Vn = !1;
function qh(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function $C(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function On(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function tr(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var o = r.pending;
    return (
      o === null ? (e.next = e) : ((e.next = o.next), (o.next = e)),
      (r.pending = e),
      xn(t, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((e.next = e), Wh(r)) : ((e.next = o.next), (o.next = e)),
    (r.interleaved = e),
    xn(t, n)
  );
}
function Za(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Mh(t, n);
  }
}
function cm(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
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
      i === null ? (o = i = e) : (i = i.next = e);
    } else o = i = e;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function $s(t, e, n, r) {
  var o = t.updateQueue;
  Vn = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var c = s,
      l = c.next;
    (c.next = null), a === null ? (i = l) : (a.next = l), (a = c);
    var u = t.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (s = u.lastBaseUpdate),
      s !== a &&
        (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
        (u.lastBaseUpdate = c)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (u = l = c = null), (s = i);
    do {
      var h = s.lane,
        v = s.eventTime;
      if ((r & h) === h) {
        u !== null &&
          (u = u.next =
            {
              eventTime: v,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var g = t,
            m = s;
          switch (((h = e), (v = n), m.tag)) {
            case 1:
              if (((g = m.payload), typeof g == "function")) {
                d = g.call(v, d, h);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = m.payload),
                (h = typeof g == "function" ? g.call(v, d, h) : g),
                h == null)
              )
                break e;
              d = we({}, d, h);
              break e;
            case 2:
              Vn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((t.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [s]) : h.push(s));
      } else
        (v = {
          eventTime: v,
          lane: h,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          u === null ? ((l = u = v), (c = d)) : (u = u.next = v),
          (a |= h);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (h = s),
          (s = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (u === null && (c = d),
      (o.baseState = c),
      (o.firstBaseUpdate = l),
      (o.lastBaseUpdate = u),
      (e = o.shared.interleaved),
      e !== null)
    ) {
      o = e;
      do (a |= o.lane), (o = o.next);
      while (o !== e);
    } else i === null && (o.shared.lanes = 0);
    (Nr |= a), (t.lanes = a), (t.memoizedState = d);
  }
}
function lm(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(N(191, o));
        o.call(r);
      }
    }
}
var BC = new Hy.Component().refs;
function rd(t, e, n, r) {
  (e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : we({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var Ac = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? Hr(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = ut(),
      o = rr(t),
      i = On(r, o);
    (i.payload = e),
      n != null && (i.callback = n),
      (e = tr(t, i, o)),
      e !== null && (Xt(e, t, o, r), Za(e, t, o));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = ut(),
      o = rr(t),
      i = On(r, o);
    (i.tag = 1),
      (i.payload = e),
      n != null && (i.callback = n),
      (e = tr(t, i, o)),
      e !== null && (Xt(e, t, o, r), Za(e, t, o));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = ut(),
      r = rr(t),
      o = On(n, r);
    (o.tag = 2),
      e != null && (o.callback = e),
      (e = tr(t, o, r)),
      e !== null && (Xt(e, t, r, n), Za(e, t, r));
  },
};
function um(t, e, n, r, o, i, a) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(r, i, a)
      : e.prototype && e.prototype.isPureReactComponent
      ? !Fi(n, r) || !Fi(o, i)
      : !0
  );
}
function zC(t, e, n) {
  var r = !1,
    o = cr,
    i = e.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ht(i))
      : ((o = vt(e) ? br : ct.current),
        (r = e.contextTypes),
        (i = (r = r != null) ? No(t, o) : cr)),
    (e = new e(n, i)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = Ac),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = o),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    e
  );
}
function dm(t, e, n, r) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && Ac.enqueueReplaceState(e, e.state, null);
}
function od(t, e, n, r) {
  var o = t.stateNode;
  (o.props = n), (o.state = t.memoizedState), (o.refs = BC), qh(t);
  var i = e.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Ht(i))
    : ((i = vt(e) ? br : ct.current), (o.context = No(t, i))),
    (o.state = t.memoizedState),
    (i = e.getDerivedStateFromProps),
    typeof i == "function" && (rd(t, e, i, n), (o.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((e = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      e !== o.state && Ac.enqueueReplaceState(o, o.state, null),
      $s(t, n, o, r),
      (o.state = t.memoizedState)),
    typeof o.componentDidMount == "function" && (t.flags |= 4194308);
}
function ii(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, t));
      var o = r,
        i = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === i
        ? e.ref
        : ((e = function (a) {
            var s = o.refs;
            s === BC && (s = o.refs = {}),
              a === null ? delete s[i] : (s[i] = a);
          }),
          (e._stringRef = i),
          e);
    }
    if (typeof t != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, t));
  }
  return t;
}
function xa(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      N(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t
      )
    ))
  );
}
function hm(t) {
  var e = t._init;
  return e(t._payload);
}
function jC(t) {
  function e(f, p) {
    if (t) {
      var y = f.deletions;
      y === null ? ((f.deletions = [p]), (f.flags |= 16)) : y.push(p);
    }
  }
  function n(f, p) {
    if (!t) return null;
    for (; p !== null; ) e(f, p), (p = p.sibling);
    return null;
  }
  function r(f, p) {
    for (f = new Map(); p !== null; )
      p.key !== null ? f.set(p.key, p) : f.set(p.index, p), (p = p.sibling);
    return f;
  }
  function o(f, p) {
    return (f = or(f, p)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, p, y) {
    return (
      (f.index = y),
      t
        ? ((y = f.alternate),
          y !== null
            ? ((y = y.index), y < p ? ((f.flags |= 2), p) : y)
            : ((f.flags |= 2), p))
        : ((f.flags |= 1048576), p)
    );
  }
  function a(f) {
    return t && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, p, y, w) {
    return p === null || p.tag !== 6
      ? ((p = Bl(y, f.mode, w)), (p.return = f), p)
      : ((p = o(p, y)), (p.return = f), p);
  }
  function c(f, p, y, w) {
    var I = y.type;
    return I === ro
      ? u(f, p, y.props.children, w, y.key)
      : p !== null &&
        (p.elementType === I ||
          (typeof I == "object" &&
            I !== null &&
            I.$$typeof === jn &&
            hm(I) === p.type))
      ? ((w = o(p, y.props)), (w.ref = ii(f, p, y)), (w.return = f), w)
      : ((w = is(y.type, y.key, y.props, null, f.mode, w)),
        (w.ref = ii(f, p, y)),
        (w.return = f),
        w);
  }
  function l(f, p, y, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== y.containerInfo ||
      p.stateNode.implementation !== y.implementation
      ? ((p = zl(y, f.mode, w)), (p.return = f), p)
      : ((p = o(p, y.children || [])), (p.return = f), p);
  }
  function u(f, p, y, w, I) {
    return p === null || p.tag !== 7
      ? ((p = Tr(y, f.mode, w, I)), (p.return = f), p)
      : ((p = o(p, y)), (p.return = f), p);
  }
  function d(f, p, y) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Bl("" + p, f.mode, y)), (p.return = f), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ta:
          return (
            (y = is(p.type, p.key, p.props, null, f.mode, y)),
            (y.ref = ii(f, null, p)),
            (y.return = f),
            y
          );
        case no:
          return (p = zl(p, f.mode, y)), (p.return = f), p;
        case jn:
          var w = p._init;
          return d(f, w(p._payload), y);
      }
      if (gi(p) || ei(p))
        return (p = Tr(p, f.mode, y, null)), (p.return = f), p;
      xa(f, p);
    }
    return null;
  }
  function h(f, p, y, w) {
    var I = p !== null ? p.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return I !== null ? null : s(f, p, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ta:
          return y.key === I ? c(f, p, y, w) : null;
        case no:
          return y.key === I ? l(f, p, y, w) : null;
        case jn:
          return (I = y._init), h(f, p, I(y._payload), w);
      }
      if (gi(y) || ei(y)) return I !== null ? null : u(f, p, y, w, null);
      xa(f, y);
    }
    return null;
  }
  function v(f, p, y, w, I) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (f = f.get(y) || null), s(p, f, "" + w, I);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ta:
          return (f = f.get(w.key === null ? y : w.key) || null), c(p, f, w, I);
        case no:
          return (f = f.get(w.key === null ? y : w.key) || null), l(p, f, w, I);
        case jn:
          var k = w._init;
          return v(f, p, y, k(w._payload), I);
      }
      if (gi(w) || ei(w)) return (f = f.get(y) || null), u(p, f, w, I, null);
      xa(p, w);
    }
    return null;
  }
  function g(f, p, y, w) {
    for (
      var I = null, k = null, A = p, R = (p = 0), j = null;
      A !== null && R < y.length;
      R++
    ) {
      A.index > R ? ((j = A), (A = null)) : (j = A.sibling);
      var U = h(f, A, y[R], w);
      if (U === null) {
        A === null && (A = j);
        break;
      }
      t && A && U.alternate === null && e(f, A),
        (p = i(U, p, R)),
        k === null ? (I = U) : (k.sibling = U),
        (k = U),
        (A = j);
    }
    if (R === y.length) return n(f, A), ye && gr(f, R), I;
    if (A === null) {
      for (; R < y.length; R++)
        (A = d(f, y[R], w)),
          A !== null &&
            ((p = i(A, p, R)), k === null ? (I = A) : (k.sibling = A), (k = A));
      return ye && gr(f, R), I;
    }
    for (A = r(f, A); R < y.length; R++)
      (j = v(A, f, R, y[R], w)),
        j !== null &&
          (t && j.alternate !== null && A.delete(j.key === null ? R : j.key),
          (p = i(j, p, R)),
          k === null ? (I = j) : (k.sibling = j),
          (k = j));
    return (
      t &&
        A.forEach(function (ee) {
          return e(f, ee);
        }),
      ye && gr(f, R),
      I
    );
  }
  function m(f, p, y, w) {
    var I = ei(y);
    if (typeof I != "function") throw Error(N(150));
    if (((y = I.call(y)), y == null)) throw Error(N(151));
    for (
      var k = (I = null), A = p, R = (p = 0), j = null, U = y.next();
      A !== null && !U.done;
      R++, U = y.next()
    ) {
      A.index > R ? ((j = A), (A = null)) : (j = A.sibling);
      var ee = h(f, A, U.value, w);
      if (ee === null) {
        A === null && (A = j);
        break;
      }
      t && A && ee.alternate === null && e(f, A),
        (p = i(ee, p, R)),
        k === null ? (I = ee) : (k.sibling = ee),
        (k = ee),
        (A = j);
    }
    if (U.done) return n(f, A), ye && gr(f, R), I;
    if (A === null) {
      for (; !U.done; R++, U = y.next())
        (U = d(f, U.value, w)),
          U !== null &&
            ((p = i(U, p, R)), k === null ? (I = U) : (k.sibling = U), (k = U));
      return ye && gr(f, R), I;
    }
    for (A = r(f, A); !U.done; R++, U = y.next())
      (U = v(A, f, R, U.value, w)),
        U !== null &&
          (t && U.alternate !== null && A.delete(U.key === null ? R : U.key),
          (p = i(U, p, R)),
          k === null ? (I = U) : (k.sibling = U),
          (k = U));
    return (
      t &&
        A.forEach(function (ue) {
          return e(f, ue);
        }),
      ye && gr(f, R),
      I
    );
  }
  function C(f, p, y, w) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === ro &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Ta:
          e: {
            for (var I = y.key, k = p; k !== null; ) {
              if (k.key === I) {
                if (((I = y.type), I === ro)) {
                  if (k.tag === 7) {
                    n(f, k.sibling),
                      (p = o(k, y.props.children)),
                      (p.return = f),
                      (f = p);
                    break e;
                  }
                } else if (
                  k.elementType === I ||
                  (typeof I == "object" &&
                    I !== null &&
                    I.$$typeof === jn &&
                    hm(I) === k.type)
                ) {
                  n(f, k.sibling),
                    (p = o(k, y.props)),
                    (p.ref = ii(f, k, y)),
                    (p.return = f),
                    (f = p);
                  break e;
                }
                n(f, k);
                break;
              } else e(f, k);
              k = k.sibling;
            }
            y.type === ro
              ? ((p = Tr(y.props.children, f.mode, w, y.key)),
                (p.return = f),
                (f = p))
              : ((w = is(y.type, y.key, y.props, null, f.mode, w)),
                (w.ref = ii(f, p, y)),
                (w.return = f),
                (f = w));
          }
          return a(f);
        case no:
          e: {
            for (k = y.key; p !== null; ) {
              if (p.key === k)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === y.containerInfo &&
                  p.stateNode.implementation === y.implementation
                ) {
                  n(f, p.sibling),
                    (p = o(p, y.children || [])),
                    (p.return = f),
                    (f = p);
                  break e;
                } else {
                  n(f, p);
                  break;
                }
              else e(f, p);
              p = p.sibling;
            }
            (p = zl(y, f.mode, w)), (p.return = f), (f = p);
          }
          return a(f);
        case jn:
          return (k = y._init), C(f, p, k(y._payload), w);
      }
      if (gi(y)) return g(f, p, y, w);
      if (ei(y)) return m(f, p, y, w);
      xa(f, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        p !== null && p.tag === 6
          ? (n(f, p.sibling), (p = o(p, y)), (p.return = f), (f = p))
          : (n(f, p), (p = Bl(y, f.mode, w)), (p.return = f), (f = p)),
        a(f))
      : n(f, p);
  }
  return C;
}
var xo = jC(!0),
  VC = jC(!1),
  ca = {},
  fn = dr(ca),
  zi = dr(ca),
  ji = dr(ca);
function wr(t) {
  if (t === ca) throw Error(N(174));
  return t;
}
function Yh(t, e) {
  switch ((he(ji, e), he(zi, t), he(fn, ca), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Du(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = Du(e, t));
  }
  me(fn), he(fn, e);
}
function Lo() {
  me(fn), me(zi), me(ji);
}
function KC(t) {
  wr(ji.current);
  var e = wr(fn.current),
    n = Du(e, t.type);
  e !== n && (he(zi, t), he(fn, n));
}
function Qh(t) {
  zi.current === t && (me(fn), me(zi));
}
var Ce = dr(0);
function Bs(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var Ll = [];
function Jh() {
  for (var t = 0; t < Ll.length; t++)
    Ll[t]._workInProgressVersionPrimary = null;
  Ll.length = 0;
}
var es = Un.ReactCurrentDispatcher,
  Dl = Un.ReactCurrentBatchConfig,
  Pr = 0,
  Se = null,
  Fe = null,
  Ge = null,
  zs = !1,
  _i = !1,
  Vi = 0,
  $k = 0;
function nt() {
  throw Error(N(321));
}
function Xh(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!en(t[n], e[n])) return !1;
  return !0;
}
function Zh(t, e, n, r, o, i) {
  if (
    ((Pr = i),
    (Se = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (es.current = t === null || t.memoizedState === null ? Vk : Kk),
    (t = n(r, o)),
    _i)
  ) {
    i = 0;
    do {
      if (((_i = !1), (Vi = 0), 25 <= i)) throw Error(N(301));
      (i += 1),
        (Ge = Fe = null),
        (e.updateQueue = null),
        (es.current = Gk),
        (t = n(r, o));
    } while (_i);
  }
  if (
    ((es.current = js),
    (e = Fe !== null && Fe.next !== null),
    (Pr = 0),
    (Ge = Fe = Se = null),
    (zs = !1),
    e)
  )
    throw Error(N(300));
  return t;
}
function ef() {
  var t = Vi !== 0;
  return (Vi = 0), t;
}
function nn() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ge === null ? (Se.memoizedState = Ge = t) : (Ge = Ge.next = t), Ge;
}
function $t() {
  if (Fe === null) {
    var t = Se.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = Fe.next;
  var e = Ge === null ? Se.memoizedState : Ge.next;
  if (e !== null) (Ge = e), (Fe = t);
  else {
    if (t === null) throw Error(N(310));
    (Fe = t),
      (t = {
        memoizedState: Fe.memoizedState,
        baseState: Fe.baseState,
        baseQueue: Fe.baseQueue,
        queue: Fe.queue,
        next: null,
      }),
      Ge === null ? (Se.memoizedState = Ge = t) : (Ge = Ge.next = t);
  }
  return Ge;
}
function Ki(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Ul(t) {
  var e = $t(),
    n = e.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = t;
  var r = Fe,
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
      c = null,
      l = i;
    do {
      var u = l.lane;
      if ((Pr & u) === u)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: l.action,
              hasEagerState: l.hasEagerState,
              eagerState: l.eagerState,
              next: null,
            }),
          (r = l.hasEagerState ? l.eagerState : t(r, l.action));
      else {
        var d = {
          lane: u,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null,
        };
        c === null ? ((s = c = d), (a = r)) : (c = c.next = d),
          (Se.lanes |= u),
          (Nr |= u);
      }
      l = l.next;
    } while (l !== null && l !== i);
    c === null ? (a = r) : (c.next = s),
      en(r, e.memoizedState) || (mt = !0),
      (e.memoizedState = r),
      (e.baseState = a),
      (e.baseQueue = c),
      (n.lastRenderedState = r);
  }
  if (((t = n.interleaved), t !== null)) {
    o = t;
    do (i = o.lane), (Se.lanes |= i), (Nr |= i), (o = o.next);
    while (o !== t);
  } else o === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function Fl(t) {
  var e = $t(),
    n = e.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    o = n.pending,
    i = e.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = t(i, a.action)), (a = a.next);
    while (a !== o);
    en(i, e.memoizedState) || (mt = !0),
      (e.memoizedState = i),
      e.baseQueue === null && (e.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function GC() {}
function WC(t, e) {
  var n = Se,
    r = $t(),
    o = e(),
    i = !en(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (mt = !0)),
    (r = r.queue),
    tf(QC.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || i || (Ge !== null && Ge.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gi(9, YC.bind(null, n, r, o, e), void 0, null),
      qe === null)
    )
      throw Error(N(349));
    Pr & 30 || qC(n, e, o);
  }
  return o;
}
function qC(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = Se.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Se.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function YC(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), JC(e) && XC(t);
}
function QC(t, e, n) {
  return n(function () {
    JC(e) && XC(t);
  });
}
function JC(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !en(t, n);
  } catch {
    return !0;
  }
}
function XC(t) {
  var e = xn(t, 1);
  e !== null && Xt(e, t, 1, -1);
}
function fm(t) {
  var e = nn();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ki,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = jk.bind(null, Se, t)),
    [e.memoizedState, t]
  );
}
function Gi(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = Se.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Se.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function ZC() {
  return $t().memoizedState;
}
function ts(t, e, n, r) {
  var o = nn();
  (Se.flags |= t),
    (o.memoizedState = Gi(1 | e, n, void 0, r === void 0 ? null : r));
}
function kc(t, e, n, r) {
  var o = $t();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Fe !== null) {
    var a = Fe.memoizedState;
    if (((i = a.destroy), r !== null && Xh(r, a.deps))) {
      o.memoizedState = Gi(e, n, i, r);
      return;
    }
  }
  (Se.flags |= t), (o.memoizedState = Gi(1 | e, n, i, r));
}
function pm(t, e) {
  return ts(8390656, 8, t, e);
}
function tf(t, e) {
  return kc(2048, 8, t, e);
}
function eS(t, e) {
  return kc(4, 2, t, e);
}
function tS(t, e) {
  return kc(4, 4, t, e);
}
function nS(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function rS(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), kc(4, 4, nS.bind(null, e, t), n)
  );
}
function nf() {}
function oS(t, e) {
  var n = $t();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Xh(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function iS(t, e) {
  var n = $t();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Xh(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function aS(t, e, n) {
  return Pr & 21
    ? (en(n, e) || ((n = lC()), (Se.lanes |= n), (Nr |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (mt = !0)), (t.memoizedState = n));
}
function Bk(t, e) {
  var n = ie;
  (ie = n !== 0 && 4 > n ? n : 4), t(!0);
  var r = Dl.transition;
  Dl.transition = {};
  try {
    t(!1), e();
  } finally {
    (ie = n), (Dl.transition = r);
  }
}
function sS() {
  return $t().memoizedState;
}
function zk(t, e, n) {
  var r = rr(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    cS(t))
  )
    lS(e, n);
  else if (((n = HC(t, e, n, r)), n !== null)) {
    var o = ut();
    Xt(n, t, r, o), uS(n, e, r);
  }
}
function jk(t, e, n) {
  var r = rr(t),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cS(t)) lS(e, o);
  else {
    var i = t.alternate;
    if (
      t.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = e.lastRenderedReducer), i !== null)
    )
      try {
        var a = e.lastRenderedState,
          s = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), en(s, a))) {
          var c = e.interleaved;
          c === null
            ? ((o.next = o), Wh(e))
            : ((o.next = c.next), (c.next = o)),
            (e.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = HC(t, e, o, r)),
      n !== null && ((o = ut()), Xt(n, t, r, o), uS(n, e, r));
  }
}
function cS(t) {
  var e = t.alternate;
  return t === Se || (e !== null && e === Se);
}
function lS(t, e) {
  _i = zs = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function uS(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Mh(t, n);
  }
}
var js = {
    readContext: Ht,
    useCallback: nt,
    useContext: nt,
    useEffect: nt,
    useImperativeHandle: nt,
    useInsertionEffect: nt,
    useLayoutEffect: nt,
    useMemo: nt,
    useReducer: nt,
    useRef: nt,
    useState: nt,
    useDebugValue: nt,
    useDeferredValue: nt,
    useTransition: nt,
    useMutableSource: nt,
    useSyncExternalStore: nt,
    useId: nt,
    unstable_isNewReconciler: !1,
  },
  Vk = {
    readContext: Ht,
    useCallback: function (t, e) {
      return (nn().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Ht,
    useEffect: pm,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        ts(4194308, 4, nS.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return ts(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return ts(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = nn();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var r = nn();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = zk.bind(null, Se, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = nn();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: fm,
    useDebugValue: nf,
    useDeferredValue: function (t) {
      return (nn().memoizedState = t);
    },
    useTransition: function () {
      var t = fm(!1),
        e = t[0];
      return (t = Bk.bind(null, t[1])), (nn().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = Se,
        o = nn();
      if (ye) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = e()), qe === null)) throw Error(N(349));
        Pr & 30 || qC(r, e, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: e };
      return (
        (o.queue = i),
        pm(QC.bind(null, r, i, t), [t]),
        (r.flags |= 2048),
        Gi(9, YC.bind(null, r, i, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = nn(),
        e = qe.identifierPrefix;
      if (ye) {
        var n = Rn,
          r = _n;
        (n = (r & ~(1 << (32 - Jt(r) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = Vi++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = $k++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  Kk = {
    readContext: Ht,
    useCallback: oS,
    useContext: Ht,
    useEffect: tf,
    useImperativeHandle: rS,
    useInsertionEffect: eS,
    useLayoutEffect: tS,
    useMemo: iS,
    useReducer: Ul,
    useRef: ZC,
    useState: function () {
      return Ul(Ki);
    },
    useDebugValue: nf,
    useDeferredValue: function (t) {
      var e = $t();
      return aS(e, Fe.memoizedState, t);
    },
    useTransition: function () {
      var t = Ul(Ki)[0],
        e = $t().memoizedState;
      return [t, e];
    },
    useMutableSource: GC,
    useSyncExternalStore: WC,
    useId: sS,
    unstable_isNewReconciler: !1,
  },
  Gk = {
    readContext: Ht,
    useCallback: oS,
    useContext: Ht,
    useEffect: tf,
    useImperativeHandle: rS,
    useInsertionEffect: eS,
    useLayoutEffect: tS,
    useMemo: iS,
    useReducer: Fl,
    useRef: ZC,
    useState: function () {
      return Fl(Ki);
    },
    useDebugValue: nf,
    useDeferredValue: function (t) {
      var e = $t();
      return Fe === null ? (e.memoizedState = t) : aS(e, Fe.memoizedState, t);
    },
    useTransition: function () {
      var t = Fl(Ki)[0],
        e = $t().memoizedState;
      return [t, e];
    },
    useMutableSource: GC,
    useSyncExternalStore: WC,
    useId: sS,
    unstable_isNewReconciler: !1,
  };
function Do(t, e) {
  try {
    var n = "",
      r = e;
    do (n += SA(r)), (r = r.return);
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
  return { value: t, source: e, stack: o, digest: null };
}
function Hl(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function id(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Wk = typeof WeakMap == "function" ? WeakMap : Map;
function dS(t, e, n) {
  (n = On(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      Ks || ((Ks = !0), (md = r)), id(t, e);
    }),
    n
  );
}
function hS(t, e, n) {
  (n = On(-1, n)), (n.tag = 3);
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = e.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        id(t, e);
      });
  }
  var i = t.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        id(t, e),
          typeof r != "function" &&
            (nr === null ? (nr = new Set([this])) : nr.add(this));
        var a = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function mm(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new Wk();
    var o = new Set();
    r.set(e, o);
  } else (o = r.get(e)), o === void 0 && ((o = new Set()), r.set(e, o));
  o.has(n) || (o.add(n), (t = s_.bind(null, t, e, n)), e.then(t, t));
}
function gm(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function vm(t, e, n, r, o) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = o), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = On(-1, 1)), (e.tag = 2), tr(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var qk = Un.ReactCurrentOwner,
  mt = !1;
function lt(t, e, n, r) {
  e.child = t === null ? VC(e, null, n, r) : xo(e, t.child, n, r);
}
function ym(t, e, n, r, o) {
  n = n.render;
  var i = e.ref;
  return (
    To(e, o),
    (r = Zh(t, e, n, r, i, o)),
    (n = ef()),
    t !== null && !mt
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~o),
        Ln(t, e, o))
      : (ye && n && Bh(e), (e.flags |= 1), lt(t, e, r, o), e.child)
  );
}
function Cm(t, e, n, r, o) {
  if (t === null) {
    var i = n.type;
    return typeof i == "function" &&
      !df(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = i), fS(t, e, i, r, o))
      : ((t = is(n.type, null, r, e, e.mode, o)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((i = t.child), !(t.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Fi), n(a, r) && t.ref === e.ref)
    )
      return Ln(t, e, o);
  }
  return (
    (e.flags |= 1),
    (t = or(i, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function fS(t, e, n, r, o) {
  if (t !== null) {
    var i = t.memoizedProps;
    if (Fi(i, r) && t.ref === e.ref)
      if (((mt = !1), (e.pendingProps = r = i), (t.lanes & o) !== 0))
        t.flags & 131072 && (mt = !0);
      else return (e.lanes = t.lanes), Ln(t, e, o);
  }
  return ad(t, e, n, r, o);
}
function pS(t, e, n) {
  var r = e.pendingProps,
    o = r.children,
    i = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        he(po, Tt),
        (Tt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = i !== null ? i.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          he(po, Tt),
          (Tt |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        he(po, Tt),
        (Tt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (e.memoizedState = null)) : (r = n),
      he(po, Tt),
      (Tt |= r);
  return lt(t, e, o, n), e.child;
}
function mS(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function ad(t, e, n, r, o) {
  var i = vt(n) ? br : ct.current;
  return (
    (i = No(e, i)),
    To(e, o),
    (n = Zh(t, e, n, r, i, o)),
    (r = ef()),
    t !== null && !mt
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~o),
        Ln(t, e, o))
      : (ye && r && Bh(e), (e.flags |= 1), lt(t, e, n, o), e.child)
  );
}
function Sm(t, e, n, r, o) {
  if (vt(n)) {
    var i = !0;
    Ls(e);
  } else i = !1;
  if ((To(e, o), e.stateNode === null))
    ns(t, e), zC(e, n, r), od(e, n, r, o), (r = !0);
  else if (t === null) {
    var a = e.stateNode,
      s = e.memoizedProps;
    a.props = s;
    var c = a.context,
      l = n.contextType;
    typeof l == "object" && l !== null
      ? (l = Ht(l))
      : ((l = vt(n) ? br : ct.current), (l = No(e, l)));
    var u = n.getDerivedStateFromProps,
      d =
        typeof u == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== r || c !== l) && dm(e, a, r, l)),
      (Vn = !1);
    var h = e.memoizedState;
    (a.state = h),
      $s(e, r, a, o),
      (c = e.memoizedState),
      s !== r || h !== c || gt.current || Vn
        ? (typeof u == "function" && (rd(e, n, u, r), (c = e.memoizedState)),
          (s = Vn || um(e, n, s, r, h, c, l))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = c)),
          (a.props = r),
          (a.state = c),
          (a.context = l),
          (r = s))
        : (typeof a.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1));
  } else {
    (a = e.stateNode),
      $C(t, e),
      (s = e.memoizedProps),
      (l = e.type === e.elementType ? s : jt(e.type, s)),
      (a.props = l),
      (d = e.pendingProps),
      (h = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Ht(c))
        : ((c = vt(n) ? br : ct.current), (c = No(e, c)));
    var v = n.getDerivedStateFromProps;
    (u =
      typeof v == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== d || h !== c) && dm(e, a, r, c)),
      (Vn = !1),
      (h = e.memoizedState),
      (a.state = h),
      $s(e, r, a, o);
    var g = e.memoizedState;
    s !== d || h !== g || gt.current || Vn
      ? (typeof v == "function" && (rd(e, n, v, r), (g = e.memoizedState)),
        (l = Vn || um(e, n, l, r, h, g, c) || !1)
          ? (u ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, g, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, g, c)),
            typeof a.componentDidUpdate == "function" && (e.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === t.memoizedProps && h === t.memoizedState) ||
              (e.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === t.memoizedProps && h === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = g)),
        (a.props = r),
        (a.state = g),
        (a.context = c),
        (r = l))
      : (typeof a.componentDidUpdate != "function" ||
          (s === t.memoizedProps && h === t.memoizedState) ||
          (e.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === t.memoizedProps && h === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return sd(t, e, n, r, i, o);
}
function sd(t, e, n, r, o, i) {
  mS(t, e);
  var a = (e.flags & 128) !== 0;
  if (!r && !a) return o && im(e, n, !1), Ln(t, e, i);
  (r = e.stateNode), (qk.current = e);
  var s =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && a
      ? ((e.child = xo(e, t.child, null, i)), (e.child = xo(e, null, s, i)))
      : lt(t, e, s, i),
    (e.memoizedState = r.state),
    o && im(e, n, !0),
    e.child
  );
}
function gS(t) {
  var e = t.stateNode;
  e.pendingContext
    ? om(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && om(t, e.context, !1),
    Yh(t, e.containerInfo);
}
function wm(t, e, n, r, o) {
  return Mo(), jh(o), (e.flags |= 256), lt(t, e, n, r), e.child;
}
var cd = { dehydrated: null, treeContext: null, retryLane: 0 };
function ld(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function vS(t, e, n) {
  var r = e.pendingProps,
    o = Ce.current,
    i = !1,
    a = (e.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = t !== null && t.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (o |= 1),
    he(Ce, o & 1),
    t === null)
  )
    return (
      td(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((a = r.children),
          (t = r.fallback),
          i
            ? ((r = e.mode),
              (i = e.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = bc(a, r, 0, null)),
              (t = Tr(t, r, n, null)),
              (i.return = e),
              (t.return = e),
              (i.sibling = t),
              (e.child = i),
              (e.child.memoizedState = ld(n)),
              (e.memoizedState = cd),
              t)
            : rf(e, a))
    );
  if (((o = t.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return Yk(t, e, a, r, s, o, n);
  if (i) {
    (i = r.fallback), (a = e.mode), (o = t.child), (s = o.sibling);
    var c = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && e.child !== o
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (e.deletions = null))
        : ((r = or(o, c)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = or(s, i)) : ((i = Tr(i, a, n, null)), (i.flags |= 2)),
      (i.return = e),
      (r.return = e),
      (r.sibling = i),
      (e.child = r),
      (r = i),
      (i = e.child),
      (a = t.child.memoizedState),
      (a =
        a === null
          ? ld(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = t.childLanes & ~n),
      (e.memoizedState = cd),
      r
    );
  }
  return (
    (i = t.child),
    (t = i.sibling),
    (r = or(i, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function rf(t, e) {
  return (
    (e = bc({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function La(t, e, n, r) {
  return (
    r !== null && jh(r),
    xo(e, t.child, null, n),
    (t = rf(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function Yk(t, e, n, r, o, i, a) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = Hl(Error(N(422)))), La(t, e, a, r))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((i = r.fallback),
        (o = e.mode),
        (r = bc({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Tr(i, o, a, null)),
        (i.flags |= 2),
        (r.return = e),
        (i.return = e),
        (r.sibling = i),
        (e.child = r),
        e.mode & 1 && xo(e, t.child, null, a),
        (e.child.memoizedState = ld(a)),
        (e.memoizedState = cd),
        i);
  if (!(e.mode & 1)) return La(t, e, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(N(419))), (r = Hl(i, r, void 0)), La(t, e, a, r);
  }
  if (((s = (a & t.childLanes) !== 0), mt || s)) {
    if (((r = qe), r !== null)) {
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
          ((i.retryLane = o), xn(t, o), Xt(r, t, o, -1));
    }
    return uf(), (r = Hl(Error(N(421)))), La(t, e, a, r);
  }
  return o.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = c_.bind(null, t)),
      (o._reactRetry = e),
      null)
    : ((t = i.treeContext),
      (At = er(o.nextSibling)),
      (_t = e),
      (ye = !0),
      (Wt = null),
      t !== null &&
        ((Mt[xt++] = _n),
        (Mt[xt++] = Rn),
        (Mt[xt++] = Or),
        (_n = t.id),
        (Rn = t.overflow),
        (Or = e)),
      (e = rf(e, r.children)),
      (e.flags |= 4096),
      e);
}
function Em(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), nd(t.return, e, n);
}
function $l(t, e, n, r, o) {
  var i = t.memoizedState;
  i === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = e),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function yS(t, e, n) {
  var r = e.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((lt(t, e, r.children, n), (r = Ce.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Em(t, n, e);
        else if (t.tag === 19) Em(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    r &= 1;
  }
  if ((he(Ce, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = e.child, o = null; n !== null; )
          (t = n.alternate),
            t !== null && Bs(t) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = e.child), (e.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          $l(e, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = e.child, e.child = null; o !== null; ) {
          if (((t = o.alternate), t !== null && Bs(t) === null)) {
            e.child = o;
            break;
          }
          (t = o.sibling), (o.sibling = n), (n = o), (o = t);
        }
        $l(e, !0, n, null, i);
        break;
      case "together":
        $l(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function ns(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Ln(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (Nr |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(N(153));
  if (e.child !== null) {
    for (
      t = e.child, n = or(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = or(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function Qk(t, e, n) {
  switch (e.tag) {
    case 3:
      gS(e), Mo();
      break;
    case 5:
      KC(e);
      break;
    case 1:
      vt(e.type) && Ls(e);
      break;
    case 4:
      Yh(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        o = e.memoizedProps.value;
      he(Fs, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (he(Ce, Ce.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? vS(t, e, n)
          : (he(Ce, Ce.current & 1),
            (t = Ln(t, e, n)),
            t !== null ? t.sibling : null);
      he(Ce, Ce.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return yS(t, e, n);
        e.flags |= 128;
      }
      if (
        ((o = e.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        he(Ce, Ce.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), pS(t, e, n);
  }
  return Ln(t, e, n);
}
var CS, ud, SS, wS;
CS = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ud = function () {};
SS = function (t, e, n, r) {
  var o = t.memoizedProps;
  if (o !== r) {
    (t = e.stateNode), wr(fn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Nu(t, o)), (r = Nu(t, r)), (i = []);
        break;
      case "select":
        (o = we({}, o, { value: void 0 })),
          (r = we({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Lu(t, o)), (r = Lu(t, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (t.onclick = Ms);
    }
    Uu(n, r);
    var a;
    n = null;
    for (l in o)
      if (!r.hasOwnProperty(l) && o.hasOwnProperty(l) && o[l] != null)
        if (l === "style") {
          var s = o[l];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          l !== "dangerouslySetInnerHTML" &&
            l !== "children" &&
            l !== "suppressContentEditableWarning" &&
            l !== "suppressHydrationWarning" &&
            l !== "autoFocus" &&
            (Pi.hasOwnProperty(l)
              ? i || (i = [])
              : (i = i || []).push(l, null));
    for (l in r) {
      var c = r[l];
      if (
        ((s = o != null ? o[l] : void 0),
        r.hasOwnProperty(l) && c !== s && (c != null || s != null))
      )
        if (l === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                s[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else n || (i || (i = []), i.push(l, n)), (n = c);
        else
          l === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (s = s ? s.__html : void 0),
              c != null && s !== c && (i = i || []).push(l, c))
            : l === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (i = i || []).push(l, "" + c)
            : l !== "suppressContentEditableWarning" &&
              l !== "suppressHydrationWarning" &&
              (Pi.hasOwnProperty(l)
                ? (c != null && l === "onScroll" && fe("scroll", t),
                  i || s === c || (i = []))
                : (i = i || []).push(l, c));
    }
    n && (i = i || []).push("style", n);
    var l = i;
    (e.updateQueue = l) && (e.flags |= 4);
  }
};
wS = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function ai(t, e) {
  if (!ye)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function rt(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var o = t.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = t),
        (o = o.sibling);
  else
    for (o = t.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = t),
        (o = o.sibling);
  return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function Jk(t, e, n) {
  var r = e.pendingProps;
  switch ((zh(e), e.tag)) {
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
      return rt(e), null;
    case 1:
      return vt(e.type) && xs(), rt(e), null;
    case 3:
      return (
        (r = e.stateNode),
        Lo(),
        me(gt),
        me(ct),
        Jh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (Ma(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Wt !== null && (yd(Wt), (Wt = null)))),
        ud(t, e),
        rt(e),
        null
      );
    case 5:
      Qh(e);
      var o = wr(ji.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        SS(t, e, n, r, o),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(N(166));
          return rt(e), null;
        }
        if (((t = wr(fn.current)), Ma(e))) {
          (r = e.stateNode), (n = e.type);
          var i = e.memoizedProps;
          switch (((r[sn] = e), (r[Bi] = i), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              fe("cancel", r), fe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              fe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < yi.length; o++) fe(yi[o], r);
              break;
            case "source":
              fe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              fe("error", r), fe("load", r);
              break;
            case "details":
              fe("toggle", r);
              break;
            case "input":
              Pp(r, i), fe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                fe("invalid", r);
              break;
            case "textarea":
              Mp(r, i), fe("invalid", r);
          }
          Uu(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Na(r.textContent, s, t),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Na(r.textContent, s, t),
                    (o = ["children", "" + s]))
                : Pi.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  fe("scroll", r);
            }
          switch (n) {
            case "input":
              Ia(r), Np(r, i, !0);
              break;
            case "textarea":
              Ia(r), xp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ms);
          }
          (r = o), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = qy(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = a.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == "string"
                ? (t = a.createElement(n, { is: r.is }))
                : ((t = a.createElement(n)),
                  n === "select" &&
                    ((a = t),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (t = a.createElementNS(t, n)),
            (t[sn] = e),
            (t[Bi] = r),
            CS(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((a = Fu(n, r)), n)) {
              case "dialog":
                fe("cancel", t), fe("close", t), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", t), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < yi.length; o++) fe(yi[o], t);
                o = r;
                break;
              case "source":
                fe("error", t), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", t), fe("load", t), (o = r);
                break;
              case "details":
                fe("toggle", t), (o = r);
                break;
              case "input":
                Pp(t, r), (o = Nu(t, r)), fe("invalid", t);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = we({}, r, { value: void 0 })),
                  fe("invalid", t);
                break;
              case "textarea":
                Mp(t, r), (o = Lu(t, r)), fe("invalid", t);
                break;
              default:
                o = r;
            }
            Uu(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var c = s[i];
                i === "style"
                  ? Jy(t, c)
                  : i === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && Yy(t, c))
                  : i === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && Ni(t, c)
                    : typeof c == "number" && Ni(t, "" + c)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Pi.hasOwnProperty(i)
                      ? c != null && i === "onScroll" && fe("scroll", t)
                      : c != null && _h(t, i, c, a));
              }
            switch (n) {
              case "input":
                Ia(t), Np(t, r, !1);
                break;
              case "textarea":
                Ia(t), xp(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + sr(r.value));
                break;
              case "select":
                (t.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Co(t, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Co(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (t.onclick = Ms);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return rt(e), null;
    case 6:
      if (t && e.stateNode != null) wS(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(N(166));
        if (((n = wr(ji.current)), wr(fn.current), Ma(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[sn] = e),
            (i = r.nodeValue !== n) && ((t = _t), t !== null))
          )
            switch (t.tag) {
              case 3:
                Na(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  Na(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          i && (e.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[sn] = e),
            (e.stateNode = r);
      }
      return rt(e), null;
    case 13:
      if (
        (me(Ce),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (ye && At !== null && e.mode & 1 && !(e.flags & 128))
          FC(), Mo(), (e.flags |= 98560), (i = !1);
        else if (((i = Ma(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = e.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[sn] = e;
          } else
            Mo(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          rt(e), (i = !1);
        } else Wt !== null && (yd(Wt), (Wt = null)), (i = !0);
        if (!i) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || Ce.current & 1 ? He === 0 && (He = 3) : uf())),
          e.updateQueue !== null && (e.flags |= 4),
          rt(e),
          null);
    case 4:
      return (
        Lo(), ud(t, e), t === null && Hi(e.stateNode.containerInfo), rt(e), null
      );
    case 10:
      return Gh(e.type._context), rt(e), null;
    case 17:
      return vt(e.type) && xs(), rt(e), null;
    case 19:
      if ((me(Ce), (i = e.memoizedState), i === null)) return rt(e), null;
      if (((r = (e.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) ai(i, !1);
        else {
          if (He !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((a = Bs(t)), a !== null)) {
                for (
                  e.flags |= 128,
                    ai(i, !1),
                    r = a.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  (i = n),
                    (t = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = t),
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
                        (t = a.dependencies),
                        (i.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return he(Ce, (Ce.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          i.tail !== null &&
            be() > Uo &&
            ((e.flags |= 128), (r = !0), ai(i, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = Bs(a)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              ai(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !ye)
            )
              return rt(e), null;
          } else
            2 * be() - i.renderingStartTime > Uo &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), ai(i, !1), (e.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = e.child), (e.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (e.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((e = i.tail),
          (i.rendering = e),
          (i.tail = e.sibling),
          (i.renderingStartTime = be()),
          (e.sibling = null),
          (n = Ce.current),
          he(Ce, r ? (n & 1) | 2 : n & 1),
          e)
        : (rt(e), null);
    case 22:
    case 23:
      return (
        lf(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? Tt & 1073741824 && (rt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : rt(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, e.tag));
}
function Xk(t, e) {
  switch ((zh(e), e.tag)) {
    case 1:
      return (
        vt(e.type) && xs(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        Lo(),
        me(gt),
        me(ct),
        Jh(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return Qh(e), null;
    case 13:
      if (
        (me(Ce), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(N(340));
        Mo();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return me(Ce), null;
    case 4:
      return Lo(), null;
    case 10:
      return Gh(e.type._context), null;
    case 22:
    case 23:
      return lf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Da = !1,
  st = !1,
  Zk = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function fo(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ae(t, e, r);
      }
    else n.current = null;
}
function dd(t, e, n) {
  try {
    n();
  } catch (r) {
    Ae(t, e, r);
  }
}
var Tm = !1;
function e_(t, e) {
  if (((qu = Os), (t = AC()), $h(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
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
            c = -1,
            l = 0,
            u = 0,
            d = t,
            h = null;
          t: for (;;) {
            for (
              var v;
              d !== n || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (c = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (v = d.firstChild) !== null;

            )
              (h = d), (d = v);
            for (;;) {
              if (d === t) break t;
              if (
                (h === n && ++l === o && (s = a),
                h === i && ++u === r && (c = a),
                (v = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = v;
          }
          n = s === -1 || c === -1 ? null : { start: s, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Yu = { focusedElem: t, selectionRange: n }, Os = !1, D = e; D !== null; )
    if (((e = D), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (D = t);
    else
      for (; D !== null; ) {
        e = D;
        try {
          var g = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var m = g.memoizedProps,
                    C = g.memoizedState,
                    f = e.stateNode,
                    p = f.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? m : jt(e.type, m),
                      C
                    );
                  f.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var y = e.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (w) {
          Ae(e, e.return, w);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (D = t);
          break;
        }
        D = e.return;
      }
  return (g = Tm), (Tm = !1), g;
}
function Ri(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & t) === t) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && dd(e, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function _c(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function hd(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function ES(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), ES(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[sn], delete e[Bi], delete e[Xu], delete e[Dk], delete e[Uk])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function TS(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Im(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || TS(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function fd(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = Ms));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (fd(t, e, n), t = t.sibling; t !== null; ) fd(t, e, n), (t = t.sibling);
}
function pd(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && ((t = t.child), t !== null))
    for (pd(t, e, n), t = t.sibling; t !== null; ) pd(t, e, n), (t = t.sibling);
}
var Xe = null,
  Kt = !1;
function $n(t, e, n) {
  for (n = n.child; n !== null; ) IS(t, e, n), (n = n.sibling);
}
function IS(t, e, n) {
  if (hn && typeof hn.onCommitFiberUnmount == "function")
    try {
      hn.onCommitFiberUnmount(Cc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      st || fo(n, e);
    case 6:
      var r = Xe,
        o = Kt;
      (Xe = null),
        $n(t, e, n),
        (Xe = r),
        (Kt = o),
        Xe !== null &&
          (Kt
            ? ((t = Xe),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : Xe.removeChild(n.stateNode));
      break;
    case 18:
      Xe !== null &&
        (Kt
          ? ((t = Xe),
            (n = n.stateNode),
            t.nodeType === 8
              ? Ml(t.parentNode, n)
              : t.nodeType === 1 && Ml(t, n),
            Di(t))
          : Ml(Xe, n.stateNode));
      break;
    case 4:
      (r = Xe),
        (o = Kt),
        (Xe = n.stateNode.containerInfo),
        (Kt = !0),
        $n(t, e, n),
        (Xe = r),
        (Kt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !st &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && dd(n, e, a),
            (o = o.next);
        } while (o !== r);
      }
      $n(t, e, n);
      break;
    case 1:
      if (
        !st &&
        (fo(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Ae(n, e, s);
        }
      $n(t, e, n);
      break;
    case 21:
      $n(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((st = (r = st) || n.memoizedState !== null), $n(t, e, n), (st = r))
        : $n(t, e, n);
      break;
    default:
      $n(t, e, n);
  }
}
function Am(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new Zk()),
      e.forEach(function (r) {
        var o = l_.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Bt(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = t,
          a = e,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Xe = s.stateNode), (Kt = !1);
              break e;
            case 3:
              (Xe = s.stateNode.containerInfo), (Kt = !0);
              break e;
            case 4:
              (Xe = s.stateNode.containerInfo), (Kt = !0);
              break e;
          }
          s = s.return;
        }
        if (Xe === null) throw Error(N(160));
        IS(i, a, o), (Xe = null), (Kt = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (l) {
        Ae(o, e, l);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) AS(e, t), (e = e.sibling);
}
function AS(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Bt(e, t), tn(t), r & 4)) {
        try {
          Ri(3, t, t.return), _c(3, t);
        } catch (m) {
          Ae(t, t.return, m);
        }
        try {
          Ri(5, t, t.return);
        } catch (m) {
          Ae(t, t.return, m);
        }
      }
      break;
    case 1:
      Bt(e, t), tn(t), r & 512 && n !== null && fo(n, n.return);
      break;
    case 5:
      if (
        (Bt(e, t),
        tn(t),
        r & 512 && n !== null && fo(n, n.return),
        t.flags & 32)
      ) {
        var o = t.stateNode;
        try {
          Ni(o, "");
        } catch (m) {
          Ae(t, t.return, m);
        }
      }
      if (r & 4 && ((o = t.stateNode), o != null)) {
        var i = t.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          s = t.type,
          c = t.updateQueue;
        if (((t.updateQueue = null), c !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Gy(o, i),
              Fu(s, a);
            var l = Fu(s, i);
            for (a = 0; a < c.length; a += 2) {
              var u = c[a],
                d = c[a + 1];
              u === "style"
                ? Jy(o, d)
                : u === "dangerouslySetInnerHTML"
                ? Yy(o, d)
                : u === "children"
                ? Ni(o, d)
                : _h(o, u, d, l);
            }
            switch (s) {
              case "input":
                Mu(o, i);
                break;
              case "textarea":
                Wy(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? Co(o, !!i.multiple, v, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Co(o, !!i.multiple, i.defaultValue, !0)
                      : Co(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Bi] = i;
          } catch (m) {
            Ae(t, t.return, m);
          }
      }
      break;
    case 6:
      if ((Bt(e, t), tn(t), r & 4)) {
        if (t.stateNode === null) throw Error(N(162));
        (o = t.stateNode), (i = t.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (m) {
          Ae(t, t.return, m);
        }
      }
      break;
    case 3:
      if (
        (Bt(e, t), tn(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Di(e.containerInfo);
        } catch (m) {
          Ae(t, t.return, m);
        }
      break;
    case 4:
      Bt(e, t), tn(t);
      break;
    case 13:
      Bt(e, t),
        tn(t),
        (o = t.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (sf = be())),
        r & 4 && Am(t);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((st = (l = st) || u), Bt(e, t), (st = l)) : Bt(e, t),
        tn(t),
        r & 8192)
      ) {
        if (
          ((l = t.memoizedState !== null),
          (t.stateNode.isHidden = l) && !u && t.mode & 1)
        )
          for (D = t, u = t.child; u !== null; ) {
            for (d = D = u; D !== null; ) {
              switch (((h = D), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ri(4, h, h.return);
                  break;
                case 1:
                  fo(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (e = r),
                        (g.props = e.memoizedProps),
                        (g.state = e.memoizedState),
                        g.componentWillUnmount();
                    } catch (m) {
                      Ae(r, n, m);
                    }
                  }
                  break;
                case 5:
                  fo(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    _m(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = h), (D = v)) : _m(d);
            }
            u = u.sibling;
          }
        e: for (u = null, d = t; ; ) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                (o = d.stateNode),
                  l
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (c = d.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (s.style.display = Qy("display", a)));
              } catch (m) {
                Ae(t, t.return, m);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = l ? "" : d.memoizedProps;
              } catch (m) {
                Ae(t, t.return, m);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === t) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === t) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === t) break e;
            u === d && (u = null), (d = d.return);
          }
          u === d && (u = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Bt(e, t), tn(t), r & 4 && Am(t);
      break;
    case 21:
      break;
    default:
      Bt(e, t), tn(t);
  }
}
function tn(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (TS(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ni(o, ""), (r.flags &= -33));
          var i = Im(t);
          pd(t, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = Im(t);
          fd(t, s, a);
          break;
        default:
          throw Error(N(161));
      }
    } catch (c) {
      Ae(t, t.return, c);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function t_(t, e, n) {
  (D = t), kS(t);
}
function kS(t, e, n) {
  for (var r = (t.mode & 1) !== 0; D !== null; ) {
    var o = D,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Da;
      if (!a) {
        var s = o.alternate,
          c = (s !== null && s.memoizedState !== null) || st;
        s = Da;
        var l = st;
        if (((Da = a), (st = c) && !l))
          for (D = o; D !== null; )
            (a = D),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Rm(o)
                : c !== null
                ? ((c.return = a), (D = c))
                : Rm(o);
        for (; i !== null; ) (D = i), kS(i), (i = i.sibling);
        (D = o), (Da = s), (st = l);
      }
      km(t);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (D = i)) : km(t);
  }
}
function km(t) {
  for (; D !== null; ) {
    var e = D;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              st || _c(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !st)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : jt(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = e.updateQueue;
              i !== null && lm(e, i, r);
              break;
            case 3:
              var a = e.updateQueue;
              if (a !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                lm(e, a, n);
              }
              break;
            case 5:
              var s = e.stateNode;
              if (n === null && e.flags & 4) {
                n = s;
                var c = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
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
              if (e.memoizedState === null) {
                var l = e.alternate;
                if (l !== null) {
                  var u = l.memoizedState;
                  if (u !== null) {
                    var d = u.dehydrated;
                    d !== null && Di(d);
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
              throw Error(N(163));
          }
        st || (e.flags & 512 && hd(e));
      } catch (h) {
        Ae(e, e.return, h);
      }
    }
    if (e === t) {
      D = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (D = n);
      break;
    }
    D = e.return;
  }
}
function _m(t) {
  for (; D !== null; ) {
    var e = D;
    if (e === t) {
      D = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (D = n);
      break;
    }
    D = e.return;
  }
}
function Rm(t) {
  for (; D !== null; ) {
    var e = D;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            _c(4, e);
          } catch (c) {
            Ae(e, n, c);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = e.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Ae(e, o, c);
            }
          }
          var i = e.return;
          try {
            hd(e);
          } catch (c) {
            Ae(e, i, c);
          }
          break;
        case 5:
          var a = e.return;
          try {
            hd(e);
          } catch (c) {
            Ae(e, a, c);
          }
      }
    } catch (c) {
      Ae(e, e.return, c);
    }
    if (e === t) {
      D = null;
      break;
    }
    var s = e.sibling;
    if (s !== null) {
      (s.return = e.return), (D = s);
      break;
    }
    D = e.return;
  }
}
var n_ = Math.ceil,
  Vs = Un.ReactCurrentDispatcher,
  of = Un.ReactCurrentOwner,
  Dt = Un.ReactCurrentBatchConfig,
  Z = 0,
  qe = null,
  xe = null,
  et = 0,
  Tt = 0,
  po = dr(0),
  He = 0,
  Wi = null,
  Nr = 0,
  Rc = 0,
  af = 0,
  bi = null,
  pt = null,
  sf = 0,
  Uo = 1 / 0,
  En = null,
  Ks = !1,
  md = null,
  nr = null,
  Ua = !1,
  qn = null,
  Gs = 0,
  Oi = 0,
  gd = null,
  rs = -1,
  os = 0;
function ut() {
  return Z & 6 ? be() : rs !== -1 ? rs : (rs = be());
}
function rr(t) {
  return t.mode & 1
    ? Z & 2 && et !== 0
      ? et & -et
      : Hk.transition !== null
      ? (os === 0 && (os = lC()), os)
      : ((t = ie),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : gC(t.type))),
        t)
    : 1;
}
function Xt(t, e, n, r) {
  if (50 < Oi) throw ((Oi = 0), (gd = null), Error(N(185)));
  ia(t, n, r),
    (!(Z & 2) || t !== qe) &&
      (t === qe && (!(Z & 2) && (Rc |= n), He === 4 && Gn(t, et)),
      yt(t, r),
      n === 1 && Z === 0 && !(e.mode & 1) && ((Uo = be() + 500), Ic && hr()));
}
function yt(t, e) {
  var n = t.callbackNode;
  HA(t, e);
  var r = bs(t, t === qe ? et : 0);
  if (r === 0)
    n !== null && Up(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && Up(n), e === 1))
      t.tag === 0 ? Fk(bm.bind(null, t)) : LC(bm.bind(null, t)),
        xk(function () {
          !(Z & 6) && hr();
        }),
        (n = null);
    else {
      switch (uC(r)) {
        case 1:
          n = Nh;
          break;
        case 4:
          n = sC;
          break;
        case 16:
          n = Rs;
          break;
        case 536870912:
          n = cC;
          break;
        default:
          n = Rs;
      }
      n = xS(n, _S.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function _S(t, e) {
  if (((rs = -1), (os = 0), Z & 6)) throw Error(N(327));
  var n = t.callbackNode;
  if (Io() && t.callbackNode !== n) return null;
  var r = bs(t, t === qe ? et : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = Ws(t, r);
  else {
    e = r;
    var o = Z;
    Z |= 2;
    var i = bS();
    (qe !== t || et !== e) && ((En = null), (Uo = be() + 500), Er(t, e));
    do
      try {
        i_();
        break;
      } catch (s) {
        RS(t, s);
      }
    while (!0);
    Kh(),
      (Vs.current = i),
      (Z = o),
      xe !== null ? (e = 0) : ((qe = null), (et = 0), (e = He));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((o = ju(t)), o !== 0 && ((r = o), (e = vd(t, o)))), e === 1)
    )
      throw ((n = Wi), Er(t, 0), Gn(t, r), yt(t, be()), n);
    if (e === 6) Gn(t, r);
    else {
      if (
        ((o = t.current.alternate),
        !(r & 30) &&
          !r_(o) &&
          ((e = Ws(t, r)),
          e === 2 && ((i = ju(t)), i !== 0 && ((r = i), (e = vd(t, i)))),
          e === 1))
      )
        throw ((n = Wi), Er(t, 0), Gn(t, r), yt(t, be()), n);
      switch (((t.finishedWork = o), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          vr(t, pt, En);
          break;
        case 3:
          if (
            (Gn(t, r), (r & 130023424) === r && ((e = sf + 500 - be()), 10 < e))
          ) {
            if (bs(t, 0) !== 0) break;
            if (((o = t.suspendedLanes), (o & r) !== r)) {
              ut(), (t.pingedLanes |= t.suspendedLanes & o);
              break;
            }
            t.timeoutHandle = Ju(vr.bind(null, t, pt, En), e);
            break;
          }
          vr(t, pt, En);
          break;
        case 4:
          if ((Gn(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Jt(r);
            (i = 1 << a), (a = e[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = be() - r),
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
                : 1960 * n_(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = Ju(vr.bind(null, t, pt, En), r);
            break;
          }
          vr(t, pt, En);
          break;
        case 5:
          vr(t, pt, En);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return yt(t, be()), t.callbackNode === n ? _S.bind(null, t) : null;
}
function vd(t, e) {
  var n = bi;
  return (
    t.current.memoizedState.isDehydrated && (Er(t, e).flags |= 256),
    (t = Ws(t, e)),
    t !== 2 && ((e = pt), (pt = n), e !== null && yd(e)),
    t
  );
}
function yd(t) {
  pt === null ? (pt = t) : pt.push.apply(pt, t);
}
function r_(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!en(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function Gn(t, e) {
  for (
    e &= ~af,
      e &= ~Rc,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - Jt(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function bm(t) {
  if (Z & 6) throw Error(N(327));
  Io();
  var e = bs(t, 0);
  if (!(e & 1)) return yt(t, be()), null;
  var n = Ws(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = ju(t);
    r !== 0 && ((e = r), (n = vd(t, r)));
  }
  if (n === 1) throw ((n = Wi), Er(t, 0), Gn(t, e), yt(t, be()), n);
  if (n === 6) throw Error(N(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    vr(t, pt, En),
    yt(t, be()),
    null
  );
}
function cf(t, e) {
  var n = Z;
  Z |= 1;
  try {
    return t(e);
  } finally {
    (Z = n), Z === 0 && ((Uo = be() + 500), Ic && hr());
  }
}
function Mr(t) {
  qn !== null && qn.tag === 0 && !(Z & 6) && Io();
  var e = Z;
  Z |= 1;
  var n = Dt.transition,
    r = ie;
  try {
    if (((Dt.transition = null), (ie = 1), t)) return t();
  } finally {
    (ie = r), (Dt.transition = n), (Z = e), !(Z & 6) && hr();
  }
}
function lf() {
  (Tt = po.current), me(po);
}
function Er(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), Mk(n)), xe !== null))
    for (n = xe.return; n !== null; ) {
      var r = n;
      switch ((zh(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && xs();
          break;
        case 3:
          Lo(), me(gt), me(ct), Jh();
          break;
        case 5:
          Qh(r);
          break;
        case 4:
          Lo();
          break;
        case 13:
          me(Ce);
          break;
        case 19:
          me(Ce);
          break;
        case 10:
          Gh(r.type._context);
          break;
        case 22:
        case 23:
          lf();
      }
      n = n.return;
    }
  if (
    ((qe = t),
    (xe = t = or(t.current, null)),
    (et = Tt = e),
    (He = 0),
    (Wi = null),
    (af = Rc = Nr = 0),
    (pt = bi = null),
    Sr !== null)
  ) {
    for (e = 0; e < Sr.length; e++)
      if (((n = Sr[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    Sr = null;
  }
  return t;
}
function RS(t, e) {
  do {
    var n = xe;
    try {
      if ((Kh(), (es.current = js), zs)) {
        for (var r = Se.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        zs = !1;
      }
      if (
        ((Pr = 0),
        (Ge = Fe = Se = null),
        (_i = !1),
        (Vi = 0),
        (of.current = null),
        n === null || n.return === null)
      ) {
        (He = 1), (Wi = e), (xe = null);
        break;
      }
      e: {
        var i = t,
          a = n.return,
          s = n,
          c = e;
        if (
          ((e = et),
          (s.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var l = c,
            u = s,
            d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = u.alternate;
            h
              ? ((u.updateQueue = h.updateQueue),
                (u.memoizedState = h.memoizedState),
                (u.lanes = h.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var v = gm(a);
          if (v !== null) {
            (v.flags &= -257),
              vm(v, a, s, i, e),
              v.mode & 1 && mm(i, l, e),
              (e = v),
              (c = l);
            var g = e.updateQueue;
            if (g === null) {
              var m = new Set();
              m.add(c), (e.updateQueue = m);
            } else g.add(c);
            break e;
          } else {
            if (!(e & 1)) {
              mm(i, l, e), uf();
              break e;
            }
            c = Error(N(426));
          }
        } else if (ye && s.mode & 1) {
          var C = gm(a);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              vm(C, a, s, i, e),
              jh(Do(c, s));
            break e;
          }
        }
        (i = c = Do(c, s)),
          He !== 4 && (He = 2),
          bi === null ? (bi = [i]) : bi.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (e &= -e), (i.lanes |= e);
              var f = dS(i, c, e);
              cm(i, f);
              break e;
            case 1:
              s = c;
              var p = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (nr === null || !nr.has(y))))
              ) {
                (i.flags |= 65536), (e &= -e), (i.lanes |= e);
                var w = hS(i, s, e);
                cm(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      PS(n);
    } catch (I) {
      (e = I), xe === n && n !== null && (xe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function bS() {
  var t = Vs.current;
  return (Vs.current = js), t === null ? js : t;
}
function uf() {
  (He === 0 || He === 3 || He === 2) && (He = 4),
    qe === null || (!(Nr & 268435455) && !(Rc & 268435455)) || Gn(qe, et);
}
function Ws(t, e) {
  var n = Z;
  Z |= 2;
  var r = bS();
  (qe !== t || et !== e) && ((En = null), Er(t, e));
  do
    try {
      o_();
      break;
    } catch (o) {
      RS(t, o);
    }
  while (!0);
  if ((Kh(), (Z = n), (Vs.current = r), xe !== null)) throw Error(N(261));
  return (qe = null), (et = 0), He;
}
function o_() {
  for (; xe !== null; ) OS(xe);
}
function i_() {
  for (; xe !== null && !OA(); ) OS(xe);
}
function OS(t) {
  var e = MS(t.alternate, t, Tt);
  (t.memoizedProps = t.pendingProps),
    e === null ? PS(t) : (xe = e),
    (of.current = null);
}
function PS(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = Xk(n, e)), n !== null)) {
        (n.flags &= 32767), (xe = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (He = 6), (xe = null);
        return;
      }
    } else if (((n = Jk(n, e, Tt)), n !== null)) {
      xe = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      xe = e;
      return;
    }
    xe = e = t;
  } while (e !== null);
  He === 0 && (He = 5);
}
function vr(t, e, n) {
  var r = ie,
    o = Dt.transition;
  try {
    (Dt.transition = null), (ie = 1), a_(t, e, n, r);
  } finally {
    (Dt.transition = o), (ie = r);
  }
  return null;
}
function a_(t, e, n, r) {
  do Io();
  while (qn !== null);
  if (Z & 6) throw Error(N(327));
  n = t.finishedWork;
  var o = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(N(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    ($A(t, i),
    t === qe && ((xe = qe = null), (et = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ua ||
      ((Ua = !0),
      xS(Rs, function () {
        return Io(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Dt.transition), (Dt.transition = null);
    var a = ie;
    ie = 1;
    var s = Z;
    (Z |= 4),
      (of.current = null),
      e_(t, n),
      AS(n, t),
      kk(Yu),
      (Os = !!qu),
      (Yu = qu = null),
      (t.current = n),
      t_(n),
      PA(),
      (Z = s),
      (ie = a),
      (Dt.transition = i);
  } else t.current = n;
  if (
    (Ua && ((Ua = !1), (qn = t), (Gs = o)),
    (i = t.pendingLanes),
    i === 0 && (nr = null),
    xA(n.stateNode),
    yt(t, be()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (o = e[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ks) throw ((Ks = !1), (t = md), (md = null), t);
  return (
    Gs & 1 && t.tag !== 0 && Io(),
    (i = t.pendingLanes),
    i & 1 ? (t === gd ? Oi++ : ((Oi = 0), (gd = t))) : (Oi = 0),
    hr(),
    null
  );
}
function Io() {
  if (qn !== null) {
    var t = uC(Gs),
      e = Dt.transition,
      n = ie;
    try {
      if (((Dt.transition = null), (ie = 16 > t ? 16 : t), qn === null))
        var r = !1;
      else {
        if (((t = qn), (qn = null), (Gs = 0), Z & 6)) throw Error(N(331));
        var o = Z;
        for (Z |= 4, D = t.current; D !== null; ) {
          var i = D,
            a = i.child;
          if (D.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var c = 0; c < s.length; c++) {
                var l = s[c];
                for (D = l; D !== null; ) {
                  var u = D;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ri(8, u, i);
                  }
                  var d = u.child;
                  if (d !== null) (d.return = u), (D = d);
                  else
                    for (; D !== null; ) {
                      u = D;
                      var h = u.sibling,
                        v = u.return;
                      if ((ES(u), u === l)) {
                        D = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = v), (D = h);
                        break;
                      }
                      D = v;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var m = g.child;
                if (m !== null) {
                  g.child = null;
                  do {
                    var C = m.sibling;
                    (m.sibling = null), (m = C);
                  } while (m !== null);
                }
              }
              D = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (D = a);
          else
            e: for (; D !== null; ) {
              if (((i = D), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ri(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (D = f);
                break e;
              }
              D = i.return;
            }
        }
        var p = t.current;
        for (D = p; D !== null; ) {
          a = D;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null) (y.return = a), (D = y);
          else
            e: for (a = p; D !== null; ) {
              if (((s = D), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _c(9, s);
                  }
                } catch (I) {
                  Ae(s, s.return, I);
                }
              if (s === a) {
                D = null;
                break e;
              }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (D = w);
                break e;
              }
              D = s.return;
            }
        }
        if (
          ((Z = o), hr(), hn && typeof hn.onPostCommitFiberRoot == "function")
        )
          try {
            hn.onPostCommitFiberRoot(Cc, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ie = n), (Dt.transition = e);
    }
  }
  return !1;
}
function Om(t, e, n) {
  (e = Do(n, e)),
    (e = dS(t, e, 1)),
    (t = tr(t, e, 1)),
    (e = ut()),
    t !== null && (ia(t, 1, e), yt(t, e));
}
function Ae(t, e, n) {
  if (t.tag === 3) Om(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Om(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (nr === null || !nr.has(r)))
        ) {
          (t = Do(n, t)),
            (t = hS(e, t, 1)),
            (e = tr(e, t, 1)),
            (t = ut()),
            e !== null && (ia(e, 1, t), yt(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function s_(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
    (e = ut()),
    (t.pingedLanes |= t.suspendedLanes & n),
    qe === t &&
      (et & n) === n &&
      (He === 4 || (He === 3 && (et & 130023424) === et && 500 > be() - sf)
        ? Er(t, 0)
        : (af |= n)),
    yt(t, e);
}
function NS(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = _a), (_a <<= 1), !(_a & 130023424) && (_a = 4194304))
      : (e = 1));
  var n = ut();
  (t = xn(t, e)), t !== null && (ia(t, e, n), yt(t, n));
}
function c_(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), NS(t, n);
}
function l_(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        o = t.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(e), NS(t, n);
}
var MS;
MS = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || gt.current) mt = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (mt = !1), Qk(t, e, n);
      mt = !!(t.flags & 131072);
    }
  else (mt = !1), ye && e.flags & 1048576 && DC(e, Us, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      ns(t, e), (t = e.pendingProps);
      var o = No(e, ct.current);
      To(e, n), (o = Zh(null, e, r, t, o, n));
      var i = ef();
      return (
        (e.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            vt(r) ? ((i = !0), Ls(e)) : (i = !1),
            (e.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            qh(e),
            (o.updater = Ac),
            (e.stateNode = o),
            (o._reactInternals = e),
            od(e, r, t, n),
            (e = sd(null, e, r, !0, i, n)))
          : ((e.tag = 0), ye && i && Bh(e), lt(null, e, o, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (ns(t, e),
          (t = e.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (e.type = r),
          (o = e.tag = d_(r)),
          (t = jt(r, t)),
          o)
        ) {
          case 0:
            e = ad(null, e, r, t, n);
            break e;
          case 1:
            e = Sm(null, e, r, t, n);
            break e;
          case 11:
            e = ym(null, e, r, t, n);
            break e;
          case 14:
            e = Cm(null, e, r, jt(r.type, t), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (o = e.pendingProps),
        (o = e.elementType === r ? o : jt(r, o)),
        ad(t, e, r, o, n)
      );
    case 1:
      return (
        (r = e.type),
        (o = e.pendingProps),
        (o = e.elementType === r ? o : jt(r, o)),
        Sm(t, e, r, o, n)
      );
    case 3:
      e: {
        if ((gS(e), t === null)) throw Error(N(387));
        (r = e.pendingProps),
          (i = e.memoizedState),
          (o = i.element),
          $C(t, e),
          $s(e, r, null, n);
        var a = e.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (e.updateQueue.baseState = i),
            (e.memoizedState = i),
            e.flags & 256)
          ) {
            (o = Do(Error(N(423)), e)), (e = wm(t, e, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Do(Error(N(424)), e)), (e = wm(t, e, r, n, o));
            break e;
          } else
            for (
              At = er(e.stateNode.containerInfo.firstChild),
                _t = e,
                ye = !0,
                Wt = null,
                n = VC(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Mo(), r === o)) {
            e = Ln(t, e, n);
            break e;
          }
          lt(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        KC(e),
        t === null && td(e),
        (r = e.type),
        (o = e.pendingProps),
        (i = t !== null ? t.memoizedProps : null),
        (a = o.children),
        Qu(r, o) ? (a = null) : i !== null && Qu(r, i) && (e.flags |= 32),
        mS(t, e),
        lt(t, e, a, n),
        e.child
      );
    case 6:
      return t === null && td(e), null;
    case 13:
      return vS(t, e, n);
    case 4:
      return (
        Yh(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = xo(e, null, r, n)) : lt(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (o = e.pendingProps),
        (o = e.elementType === r ? o : jt(r, o)),
        ym(t, e, r, o, n)
      );
    case 7:
      return lt(t, e, e.pendingProps, n), e.child;
    case 8:
      return lt(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return lt(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (o = e.pendingProps),
          (i = e.memoizedProps),
          (a = o.value),
          he(Fs, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (en(i.value, a)) {
            if (i.children === o.children && !gt.current) {
              e = Ln(t, e, n);
              break e;
            }
          } else
            for (i = e.child, i !== null && (i.return = e); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var c = s.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (i.tag === 1) {
                      (c = On(-1, n & -n)), (c.tag = 2);
                      var l = i.updateQueue;
                      if (l !== null) {
                        l = l.shared;
                        var u = l.pending;
                        u === null
                          ? (c.next = c)
                          : ((c.next = u.next), (u.next = c)),
                          (l.pending = c);
                      }
                    }
                    (i.lanes |= n),
                      (c = i.alternate),
                      c !== null && (c.lanes |= n),
                      nd(i.return, n, e),
                      (s.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (i.tag === 10) a = i.type === e.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(N(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  nd(a, n, e),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === e) {
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
        lt(t, e, o.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (o = e.type),
        (r = e.pendingProps.children),
        To(e, n),
        (o = Ht(o)),
        (r = r(o)),
        (e.flags |= 1),
        lt(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (o = jt(r, e.pendingProps)),
        (o = jt(r.type, o)),
        Cm(t, e, r, o, n)
      );
    case 15:
      return fS(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (o = e.pendingProps),
        (o = e.elementType === r ? o : jt(r, o)),
        ns(t, e),
        (e.tag = 1),
        vt(r) ? ((t = !0), Ls(e)) : (t = !1),
        To(e, n),
        zC(e, r, o),
        od(e, r, o, n),
        sd(null, e, r, !0, t, n)
      );
    case 19:
      return yS(t, e, n);
    case 22:
      return pS(t, e, n);
  }
  throw Error(N(156, e.tag));
};
function xS(t, e) {
  return aC(t, e);
}
function u_(t, e, n, r) {
  (this.tag = t),
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
    (this.pendingProps = e),
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
function Lt(t, e, n, r) {
  return new u_(t, e, n, r);
}
function df(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function d_(t) {
  if (typeof t == "function") return df(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === bh)) return 11;
    if (t === Oh) return 14;
  }
  return 2;
}
function or(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = Lt(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function is(t, e, n, r, o, i) {
  var a = 2;
  if (((r = t), typeof t == "function")) df(t) && (a = 1);
  else if (typeof t == "string") a = 5;
  else
    e: switch (t) {
      case ro:
        return Tr(n.children, o, i, e);
      case Rh:
        (a = 8), (o |= 8);
        break;
      case Ru:
        return (
          (t = Lt(12, n, e, o | 2)), (t.elementType = Ru), (t.lanes = i), t
        );
      case bu:
        return (t = Lt(13, n, e, o)), (t.elementType = bu), (t.lanes = i), t;
      case Ou:
        return (t = Lt(19, n, e, o)), (t.elementType = Ou), (t.lanes = i), t;
      case jy:
        return bc(n, o, i, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case By:
              a = 10;
              break e;
            case zy:
              a = 9;
              break e;
            case bh:
              a = 11;
              break e;
            case Oh:
              a = 14;
              break e;
            case jn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(N(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = Lt(a, n, e, o)), (e.elementType = t), (e.type = r), (e.lanes = i), e
  );
}
function Tr(t, e, n, r) {
  return (t = Lt(7, t, r, e)), (t.lanes = n), t;
}
function bc(t, e, n, r) {
  return (
    (t = Lt(22, t, r, e)),
    (t.elementType = jy),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function Bl(t, e, n) {
  return (t = Lt(6, t, null, e)), (t.lanes = n), t;
}
function zl(t, e, n) {
  return (
    (e = Lt(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function h_(t, e, n, r, o) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = El(0)),
    (this.expirationTimes = El(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = El(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function hf(t, e, n, r, o, i, a, s, c) {
  return (
    (t = new h_(t, e, n, s, c)),
    e === 1 ? ((e = 1), i === !0 && (e |= 8)) : (e = 0),
    (i = Lt(3, null, null, e)),
    (t.current = i),
    (i.stateNode = t),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    qh(i),
    t
  );
}
function f_(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: no,
    key: r == null ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function LS(t) {
  if (!t) return cr;
  t = t._reactInternals;
  e: {
    if (Hr(t) !== t || t.tag !== 1) throw Error(N(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (vt(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(N(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (vt(n)) return xC(t, n, e);
  }
  return e;
}
function DS(t, e, n, r, o, i, a, s, c) {
  return (
    (t = hf(n, r, !0, t, o, i, a, s, c)),
    (t.context = LS(null)),
    (n = t.current),
    (r = ut()),
    (o = rr(n)),
    (i = On(r, o)),
    (i.callback = e ?? null),
    tr(n, i, o),
    (t.current.lanes = o),
    ia(t, o, r),
    yt(t, r),
    t
  );
}
function Oc(t, e, n, r) {
  var o = e.current,
    i = ut(),
    a = rr(o);
  return (
    (n = LS(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = On(i, a)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = tr(o, e, a)),
    t !== null && (Xt(t, o, a, i), Za(t, o, a)),
    a
  );
}
function qs(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function Pm(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function ff(t, e) {
  Pm(t, e), (t = t.alternate) && Pm(t, e);
}
function p_() {
  return null;
}
var US =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function pf(t) {
  this._internalRoot = t;
}
Pc.prototype.render = pf.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(N(409));
  Oc(t, e, null, null);
};
Pc.prototype.unmount = pf.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    Mr(function () {
      Oc(null, t, null, null);
    }),
      (e[Mn] = null);
  }
};
function Pc(t) {
  this._internalRoot = t;
}
Pc.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = fC();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < Kn.length && e !== 0 && e < Kn[n].priority; n++);
    Kn.splice(n, 0, t), n === 0 && mC(t);
  }
};
function mf(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Nc(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function Nm() {}
function m_(t, e, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var l = qs(a);
        i.call(l);
      };
    }
    var a = DS(e, r, t, 0, null, !1, !1, "", Nm);
    return (
      (t._reactRootContainer = a),
      (t[Mn] = a.current),
      Hi(t.nodeType === 8 ? t.parentNode : t),
      Mr(),
      a
    );
  }
  for (; (o = t.lastChild); ) t.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var l = qs(c);
      s.call(l);
    };
  }
  var c = hf(t, 0, !1, null, null, !1, !1, "", Nm);
  return (
    (t._reactRootContainer = c),
    (t[Mn] = c.current),
    Hi(t.nodeType === 8 ? t.parentNode : t),
    Mr(function () {
      Oc(e, c, n, r);
    }),
    c
  );
}
function Mc(t, e, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var c = qs(a);
        s.call(c);
      };
    }
    Oc(e, a, t, o);
  } else a = m_(n, e, t, o, r);
  return qs(a);
}
dC = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = vi(e.pendingLanes);
        n !== 0 &&
          (Mh(e, n | 1), yt(e, be()), !(Z & 6) && ((Uo = be() + 500), hr()));
      }
      break;
    case 13:
      Mr(function () {
        var r = xn(t, 1);
        if (r !== null) {
          var o = ut();
          Xt(r, t, 1, o);
        }
      }),
        ff(t, 1);
  }
};
xh = function (t) {
  if (t.tag === 13) {
    var e = xn(t, 134217728);
    if (e !== null) {
      var n = ut();
      Xt(e, t, 134217728, n);
    }
    ff(t, 134217728);
  }
};
hC = function (t) {
  if (t.tag === 13) {
    var e = rr(t),
      n = xn(t, e);
    if (n !== null) {
      var r = ut();
      Xt(n, t, e, r);
    }
    ff(t, e);
  }
};
fC = function () {
  return ie;
};
pC = function (t, e) {
  var n = ie;
  try {
    return (ie = t), e();
  } finally {
    ie = n;
  }
};
$u = function (t, e, n) {
  switch (e) {
    case "input":
      if ((Mu(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var o = Tc(r);
            if (!o) throw Error(N(90));
            Ky(r), Mu(r, o);
          }
        }
      }
      break;
    case "textarea":
      Wy(t, n);
      break;
    case "select":
      (e = n.value), e != null && Co(t, !!n.multiple, e, !1);
  }
};
eC = cf;
tC = Mr;
var g_ = { usingClientEntryPoint: !1, Events: [sa, so, Tc, Xy, Zy, cf] },
  si = {
    findFiberByHostInstance: Cr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  v_ = {
    bundleType: si.bundleType,
    version: si.version,
    rendererPackageName: si.rendererPackageName,
    rendererConfig: si.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Un.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = oC(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: si.findFiberByHostInstance || p_,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fa.isDisabled && Fa.supportsFiber)
    try {
      (Cc = Fa.inject(v_)), (hn = Fa);
    } catch {}
}
Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g_;
Ot.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!mf(e)) throw Error(N(200));
  return f_(t, e, null, n);
};
Ot.createRoot = function (t, e) {
  if (!mf(t)) throw Error(N(299));
  var n = !1,
    r = "",
    o = US;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (o = e.onRecoverableError)),
    (e = hf(t, 1, !1, null, null, n, !1, r, o)),
    (t[Mn] = e.current),
    Hi(t.nodeType === 8 ? t.parentNode : t),
    new pf(e)
  );
};
Ot.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(N(188))
      : ((t = Object.keys(t).join(",")), Error(N(268, t)));
  return (t = oC(e)), (t = t === null ? null : t.stateNode), t;
};
Ot.flushSync = function (t) {
  return Mr(t);
};
Ot.hydrate = function (t, e, n) {
  if (!Nc(e)) throw Error(N(200));
  return Mc(null, t, e, !0, n);
};
Ot.hydrateRoot = function (t, e, n) {
  if (!mf(t)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = US;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (e = DS(e, null, t, 1, n ?? null, o, !1, i, a)),
    (t[Mn] = e.current),
    Hi(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (o = n._getVersion),
        (o = o(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, o])
          : e.mutableSourceEagerHydrationData.push(n, o);
  return new Pc(e);
};
Ot.render = function (t, e, n) {
  if (!Nc(e)) throw Error(N(200));
  return Mc(null, t, e, !1, n);
};
Ot.unmountComponentAtNode = function (t) {
  if (!Nc(t)) throw Error(N(40));
  return t._reactRootContainer
    ? (Mr(function () {
        Mc(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[Mn] = null);
        });
      }),
      !0)
    : !1;
};
Ot.unstable_batchedUpdates = cf;
Ot.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!Nc(n)) throw Error(N(200));
  if (t == null || t._reactInternals === void 0) throw Error(N(38));
  return Mc(t, e, n, !1, r);
};
Ot.version = "18.2.0-next-9e3b772b8-20220608";
function FS() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(FS);
    } catch (t) {
      console.error(t);
    }
}
FS(), (Dy.exports = Ot);
var gf = Dy.exports;
const y_ = Kg(gf);
var Mm = gf;
(ku.createRoot = Mm.createRoot), (ku.hydrateRoot = Mm.hydrateRoot);
/*! @azure/msal-react v2.0.15 2024-04-11 */ const C_ = {
    instance: fA,
    inProgress: Ie.None,
    accounts: [],
    logger: new ir({}),
  },
  vf = S.createContext(C_);
vf.Consumer;
/*! @azure/msal-react v2.0.15 2024-04-11 */ function xm(t, e) {
  if (t.length !== e.length) return !1;
  const n = [...e];
  return t.every((r) => {
    const o = n.shift();
    return !r || !o
      ? !1
      : r.homeAccountId === o.homeAccountId &&
          r.localAccountId === o.localAccountId &&
          r.username === o.username;
  });
}
/*! @azure/msal-react v2.0.15 2024-04-11 */ const S_ = "@azure/msal-react",
  Lm = "2.0.15";
/*! @azure/msal-react v2.0.15 2024-04-11 */ const Ys = {
    UNBLOCK_INPROGRESS: "UNBLOCK_INPROGRESS",
    EVENT: "EVENT",
  },
  w_ = (t, e) => {
    const { type: n, payload: r } = e;
    let o = t.inProgress;
    switch (n) {
      case Ys.UNBLOCK_INPROGRESS:
        t.inProgress === Ie.Startup &&
          ((o = Ie.None),
          r.logger.info(
            "MsalProvider - handleRedirectPromise resolved, setting inProgress to 'none'"
          ));
        break;
      case Ys.EVENT:
        const a = r.message,
          s = pA.getInteractionStatusFromEvent(a, t.inProgress);
        s &&
          (r.logger.info(
            `MsalProvider - ${a.eventType} results in setting inProgress from ${t.inProgress} to ${s}`
          ),
          (o = s));
        break;
      default:
        throw new Error(`Unknown action type: ${n}`);
    }
    const i = r.instance.getAllAccounts();
    return o !== t.inProgress && !xm(i, t.accounts)
      ? { ...t, inProgress: o, accounts: i }
      : o !== t.inProgress
      ? { ...t, inProgress: o }
      : xm(i, t.accounts)
      ? t
      : { ...t, accounts: i };
  };
function E_({ instance: t, children: e }) {
  S.useEffect(() => {
    t.initializeWrapperLibrary(tI.React, Lm);
  }, [t]);
  const n = S.useMemo(() => t.getLogger().clone(S_, Lm), [t]),
    [r, o] = S.useReducer(w_, void 0, () => ({
      inProgress: Ie.Startup,
      accounts: t.getAllAccounts(),
    }));
  S.useEffect(() => {
    const a = t.addEventCallback((s) => {
      o({ payload: { instance: t, logger: n, message: s }, type: Ys.EVENT });
    });
    return (
      n.verbose(`MsalProvider - Registered event callback with id: ${a}`),
      t
        .initialize()
        .then(() => {
          t.handleRedirectPromise()
            .catch(() => {})
            .finally(() => {
              o({
                payload: { instance: t, logger: n },
                type: Ys.UNBLOCK_INPROGRESS,
              });
            });
        })
        .catch(() => {}),
      () => {
        a &&
          (n.verbose(`MsalProvider - Removing event callback ${a}`),
          t.removeEventCallback(a));
      }
    );
  }, [t, n]);
  const i = {
    instance: t,
    inProgress: r.inProgress,
    accounts: r.accounts,
    logger: n,
  };
  return K.createElement(vf.Provider, { value: i }, e);
}
/*! @azure/msal-react v2.0.15 2024-04-11 */ const xc = () => S.useContext(vf);
/*! @azure/msal-react v2.0.15 2024-04-11 */ function Dm(t, e) {
  return t.length > 0;
}
function HS(t) {
  const { accounts: e, inProgress: n } = xc(),
    [r, o] = S.useState(() => (n === Ie.Startup ? !1 : Dm(e)));
  return (
    S.useEffect(() => {
      o(Dm(e));
    }, [e, t]),
    r
  );
}
function pn(t) {
  return Object.keys(t);
}
function jl(t) {
  return t && typeof t == "object" && !Array.isArray(t);
}
function yf(t, e) {
  const n = { ...t },
    r = e;
  return (
    jl(t) &&
      jl(e) &&
      Object.keys(e).forEach((o) => {
        jl(r[o]) && o in t ? (n[o] = yf(n[o], r[o])) : (n[o] = r[o]);
      }),
    n
  );
}
function T_(t) {
  return t.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
function I_(t) {
  var e;
  return typeof t != "string" || !t.includes("var(--mantine-scale)")
    ? t
    : (e = t.match(/^calc\((.*?)\)$/)) == null
    ? void 0
    : e[1].split("*")[0].trim();
}
function A_(t) {
  const e = I_(t);
  return typeof e == "number"
    ? e
    : typeof e == "string"
    ? e.includes("calc") || e.includes("var")
      ? e
      : e.includes("px")
      ? Number(e.replace("px", ""))
      : e.includes("rem")
      ? Number(e.replace("rem", "")) * 16
      : e.includes("em")
      ? Number(e.replace("em", "")) * 16
      : Number(e)
    : NaN;
}
function Vl(t) {
  return `calc(${t} * var(--mantine-scale))`;
}
function $S(t, { shouldScale: e = !1 } = {}) {
  function n(r) {
    if (r === 0 || r === "0") return `0${t}`;
    if (typeof r == "number") {
      const o = `${r / 16}${t}`;
      return e ? Vl(o) : o;
    }
    if (typeof r == "string") {
      if (
        r.startsWith("calc(") ||
        r.startsWith("var(") ||
        r.startsWith("clamp(")
      )
        return r;
      if (r.includes(" "))
        return r
          .split(" ")
          .map((i) => n(i))
          .join(" ");
      if (r.includes(t)) return e ? Vl(r) : r;
      const o = r.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const i = `${Number(o) / 16}${t}`;
        return e ? Vl(i) : i;
      }
    }
    return r;
  }
  return n;
}
const P = $S("rem", { shouldScale: !0 }),
  Um = $S("em");
function Cf(t) {
  return Object.keys(t).reduce(
    (e, n) => (t[n] !== void 0 && (e[n] = t[n]), e),
    {}
  );
}
function BS(t) {
  return typeof t == "number"
    ? !0
    : typeof t == "string"
    ? t.startsWith("calc(") ||
      t.startsWith("var(") ||
      (t.includes(" ") && t.trim() !== "")
      ? !0
      : /[0-9]/.test(t.trim().replace("-", "")[0])
    : !1;
}
function k_(t) {
  const e = S.createContext(null);
  return [
    ({ children: o, value: i }) => K.createElement(e.Provider, { value: i }, o),
    () => {
      const o = S.useContext(e);
      if (o === null) throw new Error(t);
      return o;
    },
  ];
}
function xr(t, e = "size", n = !0) {
  if (t !== void 0) return BS(t) ? (n ? P(t) : t) : `var(--${e}-${t})`;
}
function __(t) {
  return xr(t, "mantine-spacing");
}
function zS(t) {
  return t === void 0
    ? "var(--mantine-radius-default)"
    : xr(t, "mantine-radius");
}
function Fm(t) {
  return xr(t, "mantine-font-size");
}
function R_(t) {
  if (t) return xr(t, "mantine-shadow", !1);
}
function b_(t, e) {
  try {
    return (
      t.addEventListener("change", e), () => t.removeEventListener("change", e)
    );
  } catch {
    return t.addListener(e), () => t.removeListener(e);
  }
}
function O_(t, e) {
  return typeof window < "u" && "matchMedia" in window
    ? window.matchMedia(t).matches
    : !1;
}
function P_(
  t,
  e,
  { getInitialValueInEffect: n } = { getInitialValueInEffect: !0 }
) {
  const [r, o] = S.useState(n ? e : O_(t)),
    i = S.useRef();
  return (
    S.useEffect(() => {
      if ("matchMedia" in window)
        return (
          (i.current = window.matchMedia(t)),
          o(i.current.matches),
          b_(i.current, (a) => o(a.matches))
        );
    }, [t]),
    r
  );
}
const jS = typeof document < "u" ? S.useLayoutEffect : S.useEffect;
function N_(t, e) {
  const n = S.useRef(!1);
  S.useEffect(
    () => () => {
      n.current = !1;
    },
    []
  ),
    S.useEffect(() => {
      if (n.current) return t();
      n.current = !0;
    }, e);
}
function M_(t, e) {
  return P_("(prefers-reduced-motion: reduce)", t, e);
}
function VS(t) {
  var e,
    n,
    r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var o = t.length;
      for (e = 0; e < o; e++)
        t[e] && (n = VS(t[e])) && (r && (r += " "), (r += n));
    } else for (n in t) t[n] && (r && (r += " "), (r += n));
  return r;
}
function $r() {
  for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++)
    (t = arguments[n]) && (e = VS(t)) && (r && (r += " "), (r += e));
  return r;
}
const x_ = {};
function L_(t) {
  const e = {};
  return (
    t.forEach((n) => {
      Object.entries(n).forEach(([r, o]) => {
        e[r] ? (e[r] = $r(e[r], o)) : (e[r] = o);
      });
    }),
    e
  );
}
function Sf({ theme: t, classNames: e, props: n, stylesCtx: r }) {
  const i = (Array.isArray(e) ? e : [e]).map((a) =>
    typeof a == "function" ? a(t, n, r) : a || x_
  );
  return L_(i);
}
function Cd({ theme: t, styles: e, props: n, stylesCtx: r }) {
  return (Array.isArray(e) ? e : [e]).reduce(
    (i, a) =>
      typeof a == "function" ? { ...i, ...a(t, n, r) } : { ...i, ...a },
    {}
  );
}
const KS = S.createContext(null);
function la() {
  const t = S.useContext(KS);
  if (!t)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return t;
}
function D_() {
  return la().cssVariablesResolver;
}
function U_() {
  return la().classNamesPrefix;
}
function wf() {
  return la().getStyleNonce;
}
function F_() {
  return la().withStaticClasses;
}
function H_() {
  return la().headless;
}
function $_(t) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(t);
}
function B_(t) {
  let e = t.replace("#", "");
  if (e.length === 3) {
    const a = e.split("");
    e = [a[0], a[0], a[1], a[1], a[2], a[2]].join("");
  }
  if (e.length === 8) {
    const a = parseInt(e.slice(6, 8), 16) / 255;
    return {
      r: parseInt(e.slice(0, 2), 16),
      g: parseInt(e.slice(2, 4), 16),
      b: parseInt(e.slice(4, 6), 16),
      a,
    };
  }
  const n = parseInt(e, 16),
    r = (n >> 16) & 255,
    o = (n >> 8) & 255,
    i = n & 255;
  return { r, g: o, b: i, a: 1 };
}
function z_(t) {
  const [e, n, r, o] = t
    .replace(/[^0-9,./]/g, "")
    .split(/[/,]/)
    .map(Number);
  return { r: e, g: n, b: r, a: o || 1 };
}
function j_(t) {
  const e =
      /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i,
    n = t.match(e);
  if (!n) return { r: 0, g: 0, b: 0, a: 1 };
  const r = parseInt(n[1], 10),
    o = parseInt(n[2], 10) / 100,
    i = parseInt(n[3], 10) / 100,
    a = n[5] ? parseFloat(n[5]) : void 0,
    s = (1 - Math.abs(2 * i - 1)) * o,
    c = r / 60,
    l = s * (1 - Math.abs((c % 2) - 1)),
    u = i - s / 2;
  let d, h, v;
  return (
    c >= 0 && c < 1
      ? ((d = s), (h = l), (v = 0))
      : c >= 1 && c < 2
      ? ((d = l), (h = s), (v = 0))
      : c >= 2 && c < 3
      ? ((d = 0), (h = s), (v = l))
      : c >= 3 && c < 4
      ? ((d = 0), (h = l), (v = s))
      : c >= 4 && c < 5
      ? ((d = l), (h = 0), (v = s))
      : ((d = s), (h = 0), (v = l)),
    {
      r: Math.round((d + u) * 255),
      g: Math.round((h + u) * 255),
      b: Math.round((v + u) * 255),
      a: a || 1,
    }
  );
}
function Ef(t) {
  return $_(t)
    ? B_(t)
    : t.startsWith("rgb")
    ? z_(t)
    : t.startsWith("hsl")
    ? j_(t)
    : { r: 0, g: 0, b: 0, a: 1 };
}
function Ha(t, e) {
  if (t.startsWith("var("))
    return `color-mix(in srgb, ${t}, black ${e * 100}%)`;
  const { r: n, g: r, b: o, a: i } = Ef(t),
    a = 1 - e,
    s = (c) => Math.round(c * a);
  return `rgba(${s(n)}, ${s(r)}, ${s(o)}, ${i})`;
}
function qi(t, e) {
  return typeof t.primaryShade == "number"
    ? t.primaryShade
    : e === "dark"
    ? t.primaryShade.dark
    : t.primaryShade.light;
}
function Kl(t) {
  return t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4;
}
function V_(t) {
  const e = t.match(/oklch\((.*?)%\s/);
  return e ? parseFloat(e[1]) : null;
}
function K_(t) {
  if (t.startsWith("oklch(")) return (V_(t) || 0) / 100;
  const { r: e, g: n, b: r } = Ef(t),
    o = e / 255,
    i = n / 255,
    a = r / 255,
    s = Kl(o),
    c = Kl(i),
    l = Kl(a);
  return 0.2126 * s + 0.7152 * c + 0.0722 * l;
}
function ci(t, e = 0.179) {
  return t.startsWith("var(") ? !1 : K_(t) > e;
}
function ua({ color: t, theme: e, colorScheme: n }) {
  if (typeof t != "string")
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof t}`
    );
  if (t === "bright")
    return {
      color: t,
      value: n === "dark" ? e.white : e.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: ci(n === "dark" ? e.white : e.black, e.luminanceThreshold),
      variable: "--mantine-color-bright",
    };
  if (t === "dimmed")
    return {
      color: t,
      value: n === "dark" ? e.colors.dark[2] : e.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: ci(
        n === "dark" ? e.colors.dark[2] : e.colors.gray[6],
        e.luminanceThreshold
      ),
      variable: "--mantine-color-dimmed",
    };
  if (t === "white" || t === "black")
    return {
      color: t,
      value: t === "white" ? e.white : e.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: ci(t === "white" ? e.white : e.black, e.luminanceThreshold),
      variable: `--mantine-color-${t}`,
    };
  const [r, o] = t.split("."),
    i = o ? Number(o) : void 0,
    a = r in e.colors;
  if (a) {
    const s = i !== void 0 ? e.colors[r][i] : e.colors[r][qi(e, n || "light")];
    return {
      color: r,
      value: s,
      shade: i,
      isThemeColor: a,
      isLight: ci(s, e.luminanceThreshold),
      variable: o ? `--mantine-color-${r}-${i}` : `--mantine-color-${r}-filled`,
    };
  }
  return {
    color: t,
    value: t,
    isThemeColor: a,
    isLight: ci(t, e.luminanceThreshold),
    shade: i,
    variable: void 0,
  };
}
function Sd(t, e) {
  const n = ua({ color: t || e.primaryColor, theme: e });
  return n.variable ? `var(${n.variable})` : t;
}
function Hm(t, e) {
  const n = {
      from: (t == null ? void 0 : t.from) || e.defaultGradient.from,
      to: (t == null ? void 0 : t.to) || e.defaultGradient.to,
      deg: (t == null ? void 0 : t.deg) || e.defaultGradient.deg || 0,
    },
    r = Sd(n.from, e),
    o = Sd(n.to, e);
  return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`;
}
function Sn(t, e) {
  if (typeof t != "string" || e > 1 || e < 0) return "rgba(0, 0, 0, 1)";
  if (t.startsWith("var(")) {
    const i = (1 - e) * 100;
    return `color-mix(in srgb, ${t}, transparent ${i}%)`;
  }
  if (t.startsWith("oklch"))
    return t.includes("/")
      ? t.replace(/\/\s*[\d.]+\s*\)/, `/ ${e})`)
      : t.replace(")", ` / ${e})`);
  const { r: n, g: r, b: o } = Ef(t);
  return `rgba(${n}, ${r}, ${o}, ${e})`;
}
const Wr = Sn,
  G_ = ({ color: t, theme: e, variant: n, gradient: r, autoContrast: o }) => {
    const i = ua({ color: t, theme: e }),
      a = typeof o == "boolean" ? o : e.autoContrast;
    if (n === "filled") {
      const s =
        a && i.isLight
          ? "var(--mantine-color-black)"
          : "var(--mantine-color-white)";
      return i.isThemeColor
        ? i.shade === void 0
          ? {
              background: `var(--mantine-color-${t}-filled)`,
              hover: `var(--mantine-color-${t}-filled-hover)`,
              color: s,
              border: `${P(1)} solid transparent`,
            }
          : {
              background: `var(--mantine-color-${i.color}-${i.shade})`,
              hover: `var(--mantine-color-${i.color}-${
                i.shade === 9 ? 8 : i.shade + 1
              })`,
              color: s,
              border: `${P(1)} solid transparent`,
            }
        : {
            background: t,
            hover: Ha(t, 0.1),
            color: s,
            border: `${P(1)} solid transparent`,
          };
    }
    if (n === "light") {
      if (i.isThemeColor) {
        if (i.shade === void 0)
          return {
            background: `var(--mantine-color-${t}-light)`,
            hover: `var(--mantine-color-${t}-light-hover)`,
            color: `var(--mantine-color-${t}-light-color)`,
            border: `${P(1)} solid transparent`,
          };
        const s = e.colors[i.color][i.shade];
        return {
          background: Sn(s, 0.1),
          hover: Sn(s, 0.12),
          color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
          border: `${P(1)} solid transparent`,
        };
      }
      return {
        background: Sn(t, 0.1),
        hover: Sn(t, 0.12),
        color: t,
        border: `${P(1)} solid transparent`,
      };
    }
    if (n === "outline")
      return i.isThemeColor
        ? i.shade === void 0
          ? {
              background: "transparent",
              hover: `var(--mantine-color-${t}-outline-hover)`,
              color: `var(--mantine-color-${t}-outline)`,
              border: `${P(1)} solid var(--mantine-color-${t}-outline)`,
            }
          : {
              background: "transparent",
              hover: Sn(e.colors[i.color][i.shade], 0.05),
              color: `var(--mantine-color-${i.color}-${i.shade})`,
              border: `${P(1)} solid var(--mantine-color-${i.color}-${
                i.shade
              })`,
            }
        : {
            background: "transparent",
            hover: Sn(t, 0.05),
            color: t,
            border: `${P(1)} solid ${t}`,
          };
    if (n === "subtle") {
      if (i.isThemeColor) {
        if (i.shade === void 0)
          return {
            background: "transparent",
            hover: `var(--mantine-color-${t}-light-hover)`,
            color: `var(--mantine-color-${t}-light-color)`,
            border: `${P(1)} solid transparent`,
          };
        const s = e.colors[i.color][i.shade];
        return {
          background: "transparent",
          hover: Sn(s, 0.12),
          color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
          border: `${P(1)} solid transparent`,
        };
      }
      return {
        background: "transparent",
        hover: Sn(t, 0.12),
        color: t,
        border: `${P(1)} solid transparent`,
      };
    }
    return n === "transparent"
      ? i.isThemeColor
        ? i.shade === void 0
          ? {
              background: "transparent",
              hover: "transparent",
              color: `var(--mantine-color-${t}-light-color)`,
              border: `${P(1)} solid transparent`,
            }
          : {
              background: "transparent",
              hover: "transparent",
              color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
              border: `${P(1)} solid transparent`,
            }
        : {
            background: "transparent",
            hover: "transparent",
            color: t,
            border: `${P(1)} solid transparent`,
          }
      : n === "white"
      ? i.isThemeColor
        ? i.shade === void 0
          ? {
              background: "var(--mantine-color-white)",
              hover: Ha(e.white, 0.01),
              color: `var(--mantine-color-${t}-filled)`,
              border: `${P(1)} solid transparent`,
            }
          : {
              background: "var(--mantine-color-white)",
              hover: Ha(e.white, 0.01),
              color: `var(--mantine-color-${i.color}-${i.shade})`,
              border: `${P(1)} solid transparent`,
            }
        : {
            background: "var(--mantine-color-white)",
            hover: Ha(e.white, 0.01),
            color: t,
            border: `${P(1)} solid transparent`,
          }
      : n === "gradient"
      ? {
          background: Hm(r, e),
          hover: Hm(r, e),
          color: "var(--mantine-color-white)",
          border: "none",
        }
      : n === "default"
      ? {
          background: "var(--mantine-color-default)",
          hover: "var(--mantine-color-default-hover)",
          color: "var(--mantine-color-default-color)",
          border: `${P(1)} solid var(--mantine-color-default-border)`,
        }
      : {};
  },
  W_ = {
    dark: [
      "#C9C9C9",
      "#b8b8b8",
      "#828282",
      "#696969",
      "#424242",
      "#3b3b3b",
      "#2e2e2e",
      "#242424",
      "#1f1f1f",
      "#141414",
    ],
    gray: [
      "#f8f9fa",
      "#f1f3f5",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#495057",
      "#343a40",
      "#212529",
    ],
    red: [
      "#fff5f5",
      "#ffe3e3",
      "#ffc9c9",
      "#ffa8a8",
      "#ff8787",
      "#ff6b6b",
      "#fa5252",
      "#f03e3e",
      "#e03131",
      "#c92a2a",
    ],
    pink: [
      "#fff0f6",
      "#ffdeeb",
      "#fcc2d7",
      "#faa2c1",
      "#f783ac",
      "#f06595",
      "#e64980",
      "#d6336c",
      "#c2255c",
      "#a61e4d",
    ],
    grape: [
      "#f8f0fc",
      "#f3d9fa",
      "#eebefa",
      "#e599f7",
      "#da77f2",
      "#cc5de8",
      "#be4bdb",
      "#ae3ec9",
      "#9c36b5",
      "#862e9c",
    ],
    violet: [
      "#f3f0ff",
      "#e5dbff",
      "#d0bfff",
      "#b197fc",
      "#9775fa",
      "#845ef7",
      "#7950f2",
      "#7048e8",
      "#6741d9",
      "#5f3dc4",
    ],
    indigo: [
      "#edf2ff",
      "#dbe4ff",
      "#bac8ff",
      "#91a7ff",
      "#748ffc",
      "#5c7cfa",
      "#4c6ef5",
      "#4263eb",
      "#3b5bdb",
      "#364fc7",
    ],
    blue: [
      "#e7f5ff",
      "#d0ebff",
      "#a5d8ff",
      "#74c0fc",
      "#4dabf7",
      "#339af0",
      "#228be6",
      "#1c7ed6",
      "#1971c2",
      "#1864ab",
    ],
    cyan: [
      "#e3fafc",
      "#c5f6fa",
      "#99e9f2",
      "#66d9e8",
      "#3bc9db",
      "#22b8cf",
      "#15aabf",
      "#1098ad",
      "#0c8599",
      "#0b7285",
    ],
    teal: [
      "#e6fcf5",
      "#c3fae8",
      "#96f2d7",
      "#63e6be",
      "#38d9a9",
      "#20c997",
      "#12b886",
      "#0ca678",
      "#099268",
      "#087f5b",
    ],
    green: [
      "#ebfbee",
      "#d3f9d8",
      "#b2f2bb",
      "#8ce99a",
      "#69db7c",
      "#51cf66",
      "#40c057",
      "#37b24d",
      "#2f9e44",
      "#2b8a3e",
    ],
    lime: [
      "#f4fce3",
      "#e9fac8",
      "#d8f5a2",
      "#c0eb75",
      "#a9e34b",
      "#94d82d",
      "#82c91e",
      "#74b816",
      "#66a80f",
      "#5c940d",
    ],
    yellow: [
      "#fff9db",
      "#fff3bf",
      "#ffec99",
      "#ffe066",
      "#ffd43b",
      "#fcc419",
      "#fab005",
      "#f59f00",
      "#f08c00",
      "#e67700",
    ],
    orange: [
      "#fff4e6",
      "#ffe8cc",
      "#ffd8a8",
      "#ffc078",
      "#ffa94d",
      "#ff922b",
      "#fd7e14",
      "#f76707",
      "#e8590c",
      "#d9480f",
    ],
  },
  $m =
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  Tf = {
    scale: 1,
    fontSmoothing: !0,
    focusRing: "auto",
    white: "#fff",
    black: "#000",
    colors: W_,
    primaryShade: { light: 6, dark: 8 },
    primaryColor: "blue",
    variantColorResolver: G_,
    autoContrast: !1,
    luminanceThreshold: 0.3,
    fontFamily: $m,
    fontFamilyMonospace:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    respectReducedMotion: !1,
    cursorType: "default",
    defaultGradient: { from: "blue", to: "cyan", deg: 45 },
    defaultRadius: "sm",
    activeClassName: "mantine-active",
    focusClassName: "",
    headings: {
      fontFamily: $m,
      fontWeight: "700",
      textWrap: "wrap",
      sizes: {
        h1: { fontSize: P(34), lineHeight: "1.3" },
        h2: { fontSize: P(26), lineHeight: "1.35" },
        h3: { fontSize: P(22), lineHeight: "1.4" },
        h4: { fontSize: P(18), lineHeight: "1.45" },
        h5: { fontSize: P(16), lineHeight: "1.5" },
        h6: { fontSize: P(14), lineHeight: "1.5" },
      },
    },
    fontSizes: { xs: P(12), sm: P(14), md: P(16), lg: P(18), xl: P(20) },
    lineHeights: { xs: "1.4", sm: "1.45", md: "1.55", lg: "1.6", xl: "1.65" },
    radius: { xs: P(2), sm: P(4), md: P(8), lg: P(16), xl: P(32) },
    spacing: { xs: P(10), sm: P(12), md: P(16), lg: P(20), xl: P(32) },
    breakpoints: { xs: "36em", sm: "48em", md: "62em", lg: "75em", xl: "88em" },
    shadows: {
      xs: `0 ${P(1)} ${P(3)} rgba(0, 0, 0, 0.05), 0 ${P(1)} ${P(
        2
      )} rgba(0, 0, 0, 0.1)`,
      sm: `0 ${P(1)} ${P(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${P(
        10
      )} ${P(15)} ${P(-5)}, rgba(0, 0, 0, 0.04) 0 ${P(7)} ${P(7)} ${P(-5)}`,
      md: `0 ${P(1)} ${P(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${P(
        20
      )} ${P(25)} ${P(-5)}, rgba(0, 0, 0, 0.04) 0 ${P(10)} ${P(10)} ${P(-5)}`,
      lg: `0 ${P(1)} ${P(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${P(
        28
      )} ${P(23)} ${P(-7)}, rgba(0, 0, 0, 0.04) 0 ${P(12)} ${P(12)} ${P(-7)}`,
      xl: `0 ${P(1)} ${P(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${P(
        36
      )} ${P(28)} ${P(-7)}, rgba(0, 0, 0, 0.04) 0 ${P(17)} ${P(17)} ${P(-7)}`,
    },
    other: {},
    components: {},
  };
function Bm(t) {
  return t === "auto" || t === "dark" || t === "light";
}
function q_({ key: t = "mantine-color-scheme-value" } = {}) {
  let e;
  return {
    get: (n) => {
      if (typeof window > "u") return n;
      try {
        const r = window.localStorage.getItem(t);
        return Bm(r) ? r : n;
      } catch {
        return n;
      }
    },
    set: (n) => {
      try {
        window.localStorage.setItem(t, n);
      } catch (r) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          r
        );
      }
    },
    subscribe: (n) => {
      (e = (r) => {
        r.storageArea === window.localStorage &&
          r.key === t &&
          Bm(r.newValue) &&
          n(r.newValue);
      }),
        window.addEventListener("storage", e);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", e);
    },
    clear: () => {
      window.localStorage.removeItem(t);
    },
  };
}
const Y_ =
    "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color",
  zm =
    "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function Gl(t) {
  return t < 0 || t > 9 ? !1 : parseInt(t.toString(), 10) === t;
}
function jm(t) {
  if (!(t.primaryColor in t.colors)) throw new Error(Y_);
  if (
    typeof t.primaryShade == "object" &&
    (!Gl(t.primaryShade.dark) || !Gl(t.primaryShade.light))
  )
    throw new Error(zm);
  if (typeof t.primaryShade == "number" && !Gl(t.primaryShade))
    throw new Error(zm);
}
function Q_(t, e) {
  var r;
  if (!e) return jm(t), t;
  const n = yf(t, e);
  return (
    e.fontFamily &&
      !((r = e.headings) != null && r.fontFamily) &&
      (n.headings.fontFamily = e.fontFamily),
    jm(n),
    n
  );
}
const If = S.createContext(null),
  J_ = () => S.useContext(If) || Tf;
function Ko() {
  const t = S.useContext(If);
  if (!t)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return t;
}
function GS({ theme: t, children: e, inherit: n = !0 }) {
  const r = J_(),
    o = S.useMemo(() => Q_(n ? r : Tf, t), [t, r, n]);
  return K.createElement(If.Provider, { value: o }, e);
}
GS.displayName = "@mantine/core/MantineThemeProvider";
function X_() {
  const t = Ko(),
    e = wf(),
    n = pn(t.breakpoints).reduce((r, o) => {
      const i = t.breakpoints[o].includes("px"),
        a = A_(t.breakpoints[o]),
        s = i ? `${a - 0.1}px` : Um(a - 0.1),
        c = i ? `${a}px` : Um(a);
      return `${r}@media (max-width: ${s}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${c}) {.mantine-hidden-from-${o} {display: none !important;}}`;
    }, "");
  return K.createElement("style", {
    "data-mantine-styles": "classes",
    nonce: e == null ? void 0 : e(),
    dangerouslySetInnerHTML: { __html: n },
  });
}
function Wl(t) {
  return Object.entries(t)
    .map(([e, n]) => `${e}: ${n};`)
    .join("");
}
function ql(t, e) {
  return (Array.isArray(t) ? t : [t]).reduce((r, o) => `${o}{${r}}`, e);
}
function Z_(t, e) {
  const n = Wl(t.variables),
    r = n ? ql(e, n) : "",
    o = Wl(t.dark),
    i = o ? ql(`${e}[data-mantine-color-scheme="dark"]`, o) : "",
    a = Wl(t.light),
    s = a ? ql(`${e}[data-mantine-color-scheme="light"]`, a) : "";
  return `${r}${i}${s}`;
}
function eR({ color: t, theme: e, autoContrast: n }) {
  return (typeof n == "boolean" ? n : e.autoContrast) &&
    ua({ color: t || e.primaryColor, theme: e }).isLight
    ? "var(--mantine-color-black)"
    : "var(--mantine-color-white)";
}
function Vm(t, e) {
  return eR({
    color: t.colors[t.primaryColor][qi(t, e)],
    theme: t,
    autoContrast: null,
  });
}
function $a({
  theme: t,
  color: e,
  colorScheme: n,
  name: r = e,
  withColorValues: o = !0,
}) {
  if (!t.colors[e]) return {};
  if (n === "light") {
    const s = qi(t, "light"),
      c = {
        [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-filled)`,
        [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${s})`,
        [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${
          s === 9 ? 8 : s + 1
        })`,
        [`--mantine-color-${r}-light`]: Wr(t.colors[e][s], 0.1),
        [`--mantine-color-${r}-light-hover`]: Wr(t.colors[e][s], 0.12),
        [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${s})`,
        [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${s})`,
        [`--mantine-color-${r}-outline-hover`]: Wr(t.colors[e][s], 0.05),
      };
    return o
      ? {
          [`--mantine-color-${r}-0`]: t.colors[e][0],
          [`--mantine-color-${r}-1`]: t.colors[e][1],
          [`--mantine-color-${r}-2`]: t.colors[e][2],
          [`--mantine-color-${r}-3`]: t.colors[e][3],
          [`--mantine-color-${r}-4`]: t.colors[e][4],
          [`--mantine-color-${r}-5`]: t.colors[e][5],
          [`--mantine-color-${r}-6`]: t.colors[e][6],
          [`--mantine-color-${r}-7`]: t.colors[e][7],
          [`--mantine-color-${r}-8`]: t.colors[e][8],
          [`--mantine-color-${r}-9`]: t.colors[e][9],
          ...c,
        }
      : c;
  }
  const i = qi(t, "dark"),
    a = {
      [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-4)`,
      [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${i})`,
      [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${
        i === 9 ? 8 : i + 1
      })`,
      [`--mantine-color-${r}-light`]: Wr(t.colors[e][Math.max(0, i - 2)], 0.15),
      [`--mantine-color-${r}-light-hover`]: Wr(
        t.colors[e][Math.max(0, i - 2)],
        0.2
      ),
      [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${Math.max(
        i - 5,
        0
      )})`,
      [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${Math.max(
        i - 4,
        0
      )})`,
      [`--mantine-color-${r}-outline-hover`]: Wr(
        t.colors[e][Math.max(i - 4, 0)],
        0.05
      ),
    };
  return o
    ? {
        [`--mantine-color-${r}-0`]: t.colors[e][0],
        [`--mantine-color-${r}-1`]: t.colors[e][1],
        [`--mantine-color-${r}-2`]: t.colors[e][2],
        [`--mantine-color-${r}-3`]: t.colors[e][3],
        [`--mantine-color-${r}-4`]: t.colors[e][4],
        [`--mantine-color-${r}-5`]: t.colors[e][5],
        [`--mantine-color-${r}-6`]: t.colors[e][6],
        [`--mantine-color-${r}-7`]: t.colors[e][7],
        [`--mantine-color-${r}-8`]: t.colors[e][8],
        [`--mantine-color-${r}-9`]: t.colors[e][9],
        ...a,
      }
    : a;
}
function tR(t) {
  return !!t && typeof t == "object" && "mantine-virtual-color" in t;
}
function qr(t, e, n) {
  pn(e).forEach((r) => Object.assign(t, { [`--mantine-${n}-${r}`]: e[r] }));
}
const WS = (t) => {
  const e = qi(t, "light"),
    n =
      t.defaultRadius in t.radius
        ? t.radius[t.defaultRadius]
        : P(t.defaultRadius),
    r = {
      variables: {
        "--mantine-scale": t.scale.toString(),
        "--mantine-cursor-type": t.cursorType,
        "--mantine-color-scheme": "light dark",
        "--mantine-webkit-font-smoothing": t.fontSmoothing
          ? "antialiased"
          : "unset",
        "--mantine-moz-font-smoothing": t.fontSmoothing ? "grayscale" : "unset",
        "--mantine-color-white": t.white,
        "--mantine-color-black": t.black,
        "--mantine-line-height": t.lineHeights.md,
        "--mantine-font-family": t.fontFamily,
        "--mantine-font-family-monospace": t.fontFamilyMonospace,
        "--mantine-font-family-headings": t.headings.fontFamily,
        "--mantine-heading-font-weight": t.headings.fontWeight,
        "--mantine-heading-text-wrap": t.headings.textWrap,
        "--mantine-radius-default": n,
        "--mantine-primary-color-filled": `var(--mantine-color-${t.primaryColor}-filled)`,
        "--mantine-primary-color-filled-hover": `var(--mantine-color-${t.primaryColor}-filled-hover)`,
        "--mantine-primary-color-light": `var(--mantine-color-${t.primaryColor}-light)`,
        "--mantine-primary-color-light-hover": `var(--mantine-color-${t.primaryColor}-light-hover)`,
        "--mantine-primary-color-light-color": `var(--mantine-color-${t.primaryColor}-light-color)`,
      },
      light: {
        "--mantine-primary-color-contrast": Vm(t, "light"),
        "--mantine-color-bright": "var(--mantine-color-black)",
        "--mantine-color-text": t.black,
        "--mantine-color-body": t.white,
        "--mantine-color-error": "var(--mantine-color-red-6)",
        "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
        "--mantine-color-anchor": `var(--mantine-color-${t.primaryColor}-${e})`,
        "--mantine-color-default": "var(--mantine-color-white)",
        "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
        "--mantine-color-default-color": "var(--mantine-color-black)",
        "--mantine-color-default-border": "var(--mantine-color-gray-4)",
        "--mantine-color-dimmed": "var(--mantine-color-gray-6)",
      },
      dark: {
        "--mantine-primary-color-contrast": Vm(t, "dark"),
        "--mantine-color-bright": "var(--mantine-color-white)",
        "--mantine-color-text": "var(--mantine-color-dark-0)",
        "--mantine-color-body": "var(--mantine-color-dark-7)",
        "--mantine-color-error": "var(--mantine-color-red-8)",
        "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
        "--mantine-color-anchor": `var(--mantine-color-${t.primaryColor}-4)`,
        "--mantine-color-default": "var(--mantine-color-dark-6)",
        "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
        "--mantine-color-default-color": "var(--mantine-color-white)",
        "--mantine-color-default-border": "var(--mantine-color-dark-4)",
        "--mantine-color-dimmed": "var(--mantine-color-dark-2)",
      },
    };
  qr(r.variables, t.breakpoints, "breakpoint"),
    qr(r.variables, t.spacing, "spacing"),
    qr(r.variables, t.fontSizes, "font-size"),
    qr(r.variables, t.lineHeights, "line-height"),
    qr(r.variables, t.shadows, "shadow"),
    qr(r.variables, t.radius, "radius"),
    t.colors[t.primaryColor].forEach((i, a) => {
      r.variables[
        `--mantine-primary-color-${a}`
      ] = `var(--mantine-color-${t.primaryColor}-${a})`;
    }),
    pn(t.colors).forEach((i) => {
      const a = t.colors[i];
      if (tR(a)) {
        Object.assign(
          r.light,
          $a({
            theme: t,
            name: a.name,
            color: a.light,
            colorScheme: "light",
            withColorValues: !0,
          })
        ),
          Object.assign(
            r.dark,
            $a({
              theme: t,
              name: a.name,
              color: a.dark,
              colorScheme: "dark",
              withColorValues: !0,
            })
          );
        return;
      }
      a.forEach((s, c) => {
        r.variables[`--mantine-color-${i}-${c}`] = s;
      }),
        Object.assign(
          r.light,
          $a({ theme: t, color: i, colorScheme: "light", withColorValues: !1 })
        ),
        Object.assign(
          r.dark,
          $a({ theme: t, color: i, colorScheme: "dark", withColorValues: !1 })
        );
    });
  const o = t.headings.sizes;
  return (
    pn(o).forEach((i) => {
      (r.variables[`--mantine-${i}-font-size`] = o[i].fontSize),
        (r.variables[`--mantine-${i}-line-height`] = o[i].lineHeight),
        (r.variables[`--mantine-${i}-font-weight`] =
          o[i].fontWeight || t.headings.fontWeight);
    }),
    r
  );
};
function nR({ theme: t, generator: e }) {
  const n = WS(t),
    r = e == null ? void 0 : e(t);
  return r ? yf(n, r) : n;
}
const Yl = WS(Tf);
function rR(t) {
  const e = { variables: {}, light: {}, dark: {} };
  return (
    pn(t.variables).forEach((n) => {
      Yl.variables[n] !== t.variables[n] && (e.variables[n] = t.variables[n]);
    }),
    pn(t.light).forEach((n) => {
      Yl.light[n] !== t.light[n] && (e.light[n] = t.light[n]);
    }),
    pn(t.dark).forEach((n) => {
      Yl.dark[n] !== t.dark[n] && (e.dark[n] = t.dark[n]);
    }),
    e
  );
}
function oR(t) {
  return `
  ${t}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${t}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function qS({ cssVariablesSelector: t, deduplicateCssVariables: e }) {
  const n = Ko(),
    r = wf(),
    o = D_(),
    i = nR({ theme: n, generator: o }),
    a = t === ":root" && e,
    s = a ? rR(i) : i,
    c = Z_(s, t);
  return c
    ? K.createElement("style", {
        "data-mantine-styles": !0,
        nonce: r == null ? void 0 : r(),
        dangerouslySetInnerHTML: { __html: `${c}${a ? "" : oR(t)}` },
      })
    : null;
}
qS.displayName = "@mantine/CssVariables";
function iR() {
  const t = console.error;
  console.error = (...e) => {
    (e.length > 1 &&
      typeof e[0] == "string" &&
      e[0].toLowerCase().includes("extra attributes from the server") &&
      typeof e[1] == "string" &&
      e[1].toLowerCase().includes("data-mantine-color-scheme")) ||
      t(...e);
  };
}
function Yr(t, e) {
  var r;
  const n =
    t !== "auto"
      ? t
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  (r = e()) == null || r.setAttribute("data-mantine-color-scheme", n);
}
function aR({
  manager: t,
  defaultColorScheme: e,
  getRootElement: n,
  forceColorScheme: r,
}) {
  const o = S.useRef(),
    [i, a] = S.useState(() => t.get(e)),
    s = r || i,
    c = S.useCallback(
      (u) => {
        r || (Yr(u, n), a(u), t.set(u));
      },
      [t.set, s, r]
    ),
    l = S.useCallback(() => {
      a(e), Yr(e, n), t.clear();
    }, [t.clear, e]);
  return (
    S.useEffect(
      () => (t.subscribe(c), t.unsubscribe),
      [t.subscribe, t.unsubscribe]
    ),
    jS(() => {
      Yr(t.get(e), n);
    }, []),
    S.useEffect(() => {
      var d;
      if (r) return Yr(r, n), () => {};
      r === void 0 && Yr(i, n),
        (o.current = window.matchMedia("(prefers-color-scheme: dark)"));
      const u = (h) => {
        i === "auto" && Yr(h.matches ? "dark" : "light", n);
      };
      return (
        (d = o.current) == null || d.addEventListener("change", u),
        () => {
          var h;
          return (h = o.current) == null
            ? void 0
            : h.removeEventListener("change", u);
        }
      );
    }, [i, r]),
    { colorScheme: s, setColorScheme: c, clearColorScheme: l }
  );
}
function sR({ respectReducedMotion: t, getRootElement: e }) {
  jS(() => {
    var n;
    t &&
      ((n = e()) == null ||
        n.setAttribute("data-respect-reduced-motion", "true"));
  }, [t]);
}
iR();
function YS({
  theme: t,
  children: e,
  getStyleNonce: n,
  withStaticClasses: r = !0,
  withGlobalClasses: o = !0,
  deduplicateCssVariables: i = !0,
  withCssVariables: a = !0,
  cssVariablesSelector: s = ":root",
  classNamesPrefix: c = "mantine",
  colorSchemeManager: l = q_(),
  defaultColorScheme: u = "light",
  getRootElement: d = () => document.documentElement,
  cssVariablesResolver: h,
  forceColorScheme: v,
}) {
  const {
    colorScheme: g,
    setColorScheme: m,
    clearColorScheme: C,
  } = aR({
    defaultColorScheme: u,
    forceColorScheme: v,
    manager: l,
    getRootElement: d,
  });
  return (
    sR({
      respectReducedMotion: (t == null ? void 0 : t.respectReducedMotion) || !1,
      getRootElement: d,
    }),
    K.createElement(
      KS.Provider,
      {
        value: {
          colorScheme: g,
          setColorScheme: m,
          clearColorScheme: C,
          getRootElement: d,
          classNamesPrefix: c,
          getStyleNonce: n,
          cssVariablesResolver: h,
          cssVariablesSelector: s,
          withStaticClasses: r,
        },
      },
      K.createElement(
        GS,
        { theme: t },
        a &&
          K.createElement(qS, {
            cssVariablesSelector: s,
            deduplicateCssVariables: i,
          }),
        o && K.createElement(X_, null),
        e
      )
    )
  );
}
YS.displayName = "@mantine/core/MantineProvider";
const cR = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never",
};
function lR({ theme: t, options: e, unstyled: n }) {
  return $r(
    (e == null ? void 0 : e.focusable) &&
      !n &&
      (t.focusClassName || cR[t.focusRing]),
    (e == null ? void 0 : e.active) && !n && t.activeClassName
  );
}
function uR({ selector: t, stylesCtx: e, options: n, props: r, theme: o }) {
  return Sf({
    theme: o,
    classNames: n == null ? void 0 : n.classNames,
    props: (n == null ? void 0 : n.props) || r,
    stylesCtx: e,
  })[t];
}
function dR({ selector: t, stylesCtx: e, theme: n, classNames: r, props: o }) {
  return Sf({ theme: n, classNames: r, props: o, stylesCtx: e })[t];
}
function hR({ rootSelector: t, selector: e, className: n }) {
  return t === e ? n : void 0;
}
function fR({ selector: t, classes: e, unstyled: n }) {
  return n ? void 0 : e[t];
}
function pR({
  themeName: t,
  classNamesPrefix: e,
  selector: n,
  withStaticClass: r,
}) {
  return r === !1 ? [] : t.map((o) => `${e}-${o}-${n}`);
}
function mR({ themeName: t, theme: e, selector: n, props: r, stylesCtx: o }) {
  return t.map((i) => {
    var a, s;
    return (s = Sf({
      theme: e,
      classNames: (a = e.components[i]) == null ? void 0 : a.classNames,
      props: r,
      stylesCtx: o,
    })) == null
      ? void 0
      : s[n];
  });
}
function gR({ options: t, classes: e, selector: n, unstyled: r }) {
  return t != null && t.variant && !r ? e[`${n}--${t.variant}`] : void 0;
}
function vR({
  theme: t,
  options: e,
  themeName: n,
  selector: r,
  classNamesPrefix: o,
  classNames: i,
  classes: a,
  unstyled: s,
  className: c,
  rootSelector: l,
  props: u,
  stylesCtx: d,
  withStaticClasses: h,
  headless: v,
}) {
  return $r(
    lR({ theme: t, options: e, unstyled: s || v }),
    mR({ theme: t, themeName: n, selector: r, props: u, stylesCtx: d }),
    gR({ options: e, classes: a, selector: r, unstyled: s }),
    dR({ selector: r, stylesCtx: d, theme: t, classNames: i, props: u }),
    uR({ selector: r, stylesCtx: d, options: e, props: u, theme: t }),
    hR({ rootSelector: l, selector: r, className: c }),
    fR({ selector: r, classes: a, unstyled: s || v }),
    h &&
      !v &&
      pR({
        themeName: n,
        classNamesPrefix: o,
        selector: r,
        withStaticClass: e == null ? void 0 : e.withStaticClass,
      }),
    e == null ? void 0 : e.className
  );
}
function yR({ theme: t, themeName: e, props: n, stylesCtx: r, selector: o }) {
  return e
    .map((i) => {
      var a;
      return Cd({
        theme: t,
        styles: (a = t.components[i]) == null ? void 0 : a.styles,
        props: n,
        stylesCtx: r,
      })[o];
    })
    .reduce((i, a) => ({ ...i, ...a }), {});
}
function wd({ style: t, theme: e }) {
  return Array.isArray(t)
    ? [...t].reduce((n, r) => ({ ...n, ...wd({ style: r, theme: e }) }), {})
    : typeof t == "function"
    ? t(e)
    : t ?? {};
}
function CR(t) {
  return t.reduce(
    (e, n) => (
      n &&
        Object.keys(n).forEach((r) => {
          e[r] = { ...e[r], ...Cf(n[r]) };
        }),
      e
    ),
    {}
  );
}
function SR({
  vars: t,
  varsResolver: e,
  theme: n,
  props: r,
  stylesCtx: o,
  selector: i,
  themeName: a,
  headless: s,
}) {
  var c;
  return (c = CR([
    s ? {} : e == null ? void 0 : e(n, r, o),
    ...a.map((l) => {
      var u, d, h;
      return (h =
        (d = (u = n.components) == null ? void 0 : u[l]) == null
          ? void 0
          : d.vars) == null
        ? void 0
        : h.call(d, n, r, o);
    }),
    t == null ? void 0 : t(n, r, o),
  ])) == null
    ? void 0
    : c[i];
}
function wR({
  theme: t,
  themeName: e,
  selector: n,
  options: r,
  props: o,
  stylesCtx: i,
  rootSelector: a,
  styles: s,
  style: c,
  vars: l,
  varsResolver: u,
  headless: d,
}) {
  return {
    ...yR({ theme: t, themeName: e, props: o, stylesCtx: i, selector: n }),
    ...Cd({ theme: t, styles: s, props: o, stylesCtx: i })[n],
    ...Cd({
      theme: t,
      styles: r == null ? void 0 : r.styles,
      props: (r == null ? void 0 : r.props) || o,
      stylesCtx: i,
    })[n],
    ...SR({
      theme: t,
      props: o,
      stylesCtx: i,
      vars: l,
      varsResolver: u,
      selector: n,
      themeName: e,
      headless: d,
    }),
    ...(a === n ? wd({ style: c, theme: t }) : null),
    ...wd({ style: r == null ? void 0 : r.style, theme: t }),
  };
}
function Go({
  name: t,
  classes: e,
  props: n,
  stylesCtx: r,
  className: o,
  style: i,
  rootSelector: a = "root",
  unstyled: s,
  classNames: c,
  styles: l,
  vars: u,
  varsResolver: d,
}) {
  const h = Ko(),
    v = U_(),
    g = F_(),
    m = H_(),
    C = (Array.isArray(t) ? t : [t]).filter((f) => f);
  return (f, p) => ({
    className: vR({
      theme: h,
      options: p,
      themeName: C,
      selector: f,
      classNamesPrefix: v,
      classNames: c,
      classes: e,
      unstyled: s,
      className: o,
      rootSelector: a,
      props: n,
      stylesCtx: r,
      withStaticClasses: g,
      headless: m,
    }),
    style: wR({
      theme: h,
      themeName: C,
      selector: f,
      options: p,
      props: n,
      stylesCtx: r,
      rootSelector: a,
      styles: l,
      style: i,
      vars: u,
      varsResolver: d,
      headless: m,
    }),
  });
}
function lr(t, e, n) {
  var a;
  const r = Ko(),
    o = (a = r.components[t]) == null ? void 0 : a.defaultProps,
    i = typeof o == "function" ? o(r) : o;
  return { ...e, ...i, ...Cf(n) };
}
function Km(t) {
  return pn(t)
    .reduce((e, n) => (t[n] !== void 0 ? `${e}${T_(n)}:${t[n]};` : e), "")
    .trim();
}
function ER({ selector: t, styles: e, media: n }) {
  const r = e ? Km(e) : "",
    o = Array.isArray(n)
      ? n.map((i) => `@media${i.query}{${t}{${Km(i.styles)}}}`)
      : [];
  return `${r ? `${t}{${r}}` : ""}${o.join("")}`.trim();
}
function TR({ selector: t, styles: e, media: n }) {
  const r = wf();
  return K.createElement("style", {
    "data-mantine-styles": "inline",
    nonce: r == null ? void 0 : r(),
    dangerouslySetInnerHTML: {
      __html: ER({ selector: t, styles: e, media: n }),
    },
  });
}
function IR(t) {
  const {
    m: e,
    mx: n,
    my: r,
    mt: o,
    mb: i,
    ml: a,
    mr: s,
    me: c,
    ms: l,
    p: u,
    px: d,
    py: h,
    pt: v,
    pb: g,
    pl: m,
    pr: C,
    pe: f,
    ps: p,
    bg: y,
    c: w,
    opacity: I,
    ff: k,
    fz: A,
    fw: R,
    lts: j,
    ta: U,
    lh: ee,
    fs: ue,
    tt: Re,
    td: ze,
    w: ge,
    miw: se,
    maw: je,
    h: M,
    mih: B,
    mah: V,
    bgsz: re,
    bgp: q,
    bgr: Ee,
    bga: Te,
    pos: Oe,
    top: ve,
    left: Qe,
    bottom: ft,
    right: Fn,
    inset: Xo,
    display: Br,
    flex: fr,
    hiddenFrom: Zo,
    visibleFrom: zr,
    lightHidden: pr,
    darkHidden: sl,
    ...cl
  } = t;
  return {
    styleProps: Cf({
      m: e,
      mx: n,
      my: r,
      mt: o,
      mb: i,
      ml: a,
      mr: s,
      me: c,
      ms: l,
      p: u,
      px: d,
      py: h,
      pt: v,
      pb: g,
      pl: m,
      pr: C,
      pe: f,
      ps: p,
      bg: y,
      c: w,
      opacity: I,
      ff: k,
      fz: A,
      fw: R,
      lts: j,
      ta: U,
      lh: ee,
      fs: ue,
      tt: Re,
      td: ze,
      w: ge,
      miw: se,
      maw: je,
      h: M,
      mih: B,
      mah: V,
      bgsz: re,
      bgp: q,
      bgr: Ee,
      bga: Te,
      pos: Oe,
      top: ve,
      left: Qe,
      bottom: ft,
      right: Fn,
      inset: Xo,
      display: Br,
      flex: fr,
      hiddenFrom: Zo,
      visibleFrom: zr,
      lightHidden: pr,
      darkHidden: sl,
    }),
    rest: cl,
  };
}
const AR = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "identity", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" },
};
function QS(t, e) {
  const n = ua({ color: t, theme: e });
  return n.color === "dimmed"
    ? "var(--mantine-color-dimmed)"
    : n.color === "bright"
    ? "var(--mantine-color-bright)"
    : n.variable
    ? `var(${n.variable})`
    : n.color;
}
function kR(t, e) {
  const n = ua({ color: t, theme: e });
  return n.isThemeColor && n.shade === void 0
    ? `var(--mantine-color-${n.color}-text)`
    : QS(t, e);
}
const Gm = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)",
};
function _R(t) {
  return typeof t == "string" && t in Gm ? Gm[t] : t;
}
const RR = ["h1", "h2", "h3", "h4", "h5", "h6"];
function bR(t, e) {
  return typeof t == "string" && t in e.fontSizes
    ? `var(--mantine-font-size-${t})`
    : typeof t == "string" && RR.includes(t)
    ? `var(--mantine-${t}-font-size)`
    : typeof t == "number" || typeof t == "string"
    ? P(t)
    : t;
}
function OR(t) {
  return t;
}
const PR = ["h1", "h2", "h3", "h4", "h5", "h6"];
function NR(t, e) {
  return typeof t == "string" && t in e.lineHeights
    ? `var(--mantine-line-height-${t})`
    : typeof t == "string" && PR.includes(t)
    ? `var(--mantine-${t}-line-height)`
    : t;
}
function MR(t) {
  return typeof t == "number" ? P(t) : t;
}
function xR(t, e) {
  if (typeof t == "number") return P(t);
  if (typeof t == "string") {
    const n = t.replace("-", "");
    if (!(n in e.spacing)) return P(t);
    const r = `--mantine-spacing-${n}`;
    return t.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`;
  }
  return t;
}
const Ql = {
  color: QS,
  textColor: kR,
  fontSize: bR,
  spacing: xR,
  identity: OR,
  size: MR,
  lineHeight: NR,
  fontFamily: _R,
};
function Wm(t) {
  return t.replace("(min-width: ", "").replace("em)", "");
}
function LR({ media: t, ...e }) {
  const r = Object.keys(t)
    .sort((o, i) => Number(Wm(o)) - Number(Wm(i)))
    .map((o) => ({ query: o, styles: t[o] }));
  return { ...e, media: r };
}
function DR(t) {
  if (typeof t != "object" || t === null) return !1;
  const e = Object.keys(t);
  return !(e.length === 1 && e[0] === "base");
}
function UR(t) {
  return typeof t == "object" && t !== null
    ? "base" in t
      ? t.base
      : void 0
    : t;
}
function FR(t) {
  return typeof t == "object" && t !== null
    ? pn(t).filter((e) => e !== "base")
    : [];
}
function HR(t, e) {
  return typeof t == "object" && t !== null && e in t ? t[e] : t;
}
function $R({ styleProps: t, data: e, theme: n }) {
  return LR(
    pn(t).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom") return r;
        const i = e[o],
          a = Array.isArray(i.property) ? i.property : [i.property],
          s = UR(t[o]);
        if (!DR(t[o]))
          return (
            a.forEach((l) => {
              r.inlineStyles[l] = Ql[i.type](s, n);
            }),
            r
          );
        r.hasResponsiveStyles = !0;
        const c = FR(t[o]);
        return (
          a.forEach((l) => {
            s && (r.styles[l] = Ql[i.type](s, n)),
              c.forEach((u) => {
                const d = `(min-width: ${n.breakpoints[u]})`;
                r.media[d] = { ...r.media[d], [l]: Ql[i.type](HR(t[o], u), n) };
              });
          }),
          r
        );
      },
      { hasResponsiveStyles: !1, styles: {}, inlineStyles: {}, media: {} }
    )
  );
}
function BR() {
  return `__m__-${S.useId().replace(/:/g, "")}`;
}
function JS(t) {
  return t.startsWith("data-") ? t : `data-${t}`;
}
function zR(t) {
  return Object.keys(t).reduce((e, n) => {
    const r = t[n];
    return (
      r === void 0 || r === "" || r === !1 || r === null || (e[JS(n)] = t[n]), e
    );
  }, {});
}
function XS(t) {
  return t
    ? typeof t == "string"
      ? { [JS(t)]: !0 }
      : Array.isArray(t)
      ? [...t].reduce((e, n) => ({ ...e, ...XS(n) }), {})
      : zR(t)
    : null;
}
function Ed(t, e) {
  return Array.isArray(t)
    ? [...t].reduce((n, r) => ({ ...n, ...Ed(r, e) }), {})
    : typeof t == "function"
    ? t(e)
    : t ?? {};
}
function jR({ theme: t, style: e, vars: n, styleProps: r }) {
  const o = Ed(e, t),
    i = Ed(n, t);
  return { ...o, ...i, ...r };
}
const ZS = S.forwardRef(
  (
    {
      component: t,
      style: e,
      __vars: n,
      className: r,
      variant: o,
      mod: i,
      size: a,
      hiddenFrom: s,
      visibleFrom: c,
      lightHidden: l,
      darkHidden: u,
      renderRoot: d,
      ...h
    },
    v
  ) => {
    const g = Ko(),
      m = t || "div",
      { styleProps: C, rest: f } = IR(h),
      p = BR(),
      y = $R({ styleProps: C, theme: g, data: AR }),
      w = {
        ref: v,
        style: jR({ theme: g, style: e, vars: n, styleProps: y.inlineStyles }),
        className: $r(r, {
          [p]: y.hasResponsiveStyles,
          "mantine-light-hidden": l,
          "mantine-dark-hidden": u,
          [`mantine-hidden-from-${s}`]: s,
          [`mantine-visible-from-${c}`]: c,
        }),
        "data-variant": o,
        "data-size": BS(a) ? void 0 : a || void 0,
        ...XS(i),
        ...f,
      };
    return K.createElement(
      K.Fragment,
      null,
      y.hasResponsiveStyles &&
        K.createElement(TR, {
          selector: `.${p}`,
          styles: y.styles,
          media: y.media,
        }),
      typeof d == "function" ? d(w) : K.createElement(m, { ...w })
    );
  }
);
ZS.displayName = "@mantine/core/Box";
const kt = ZS;
function ew(t) {
  return t;
}
function tw(t) {
  const e = S.forwardRef(t);
  return (e.extend = ew), e;
}
function da(t) {
  const e = S.forwardRef(t);
  return (e.extend = ew), e;
}
var nw = { root: "m_87cf2631" };
const VR = { __staticSelector: "UnstyledButton" },
  Af = da((t, e) => {
    const n = lr("UnstyledButton", VR, t),
      {
        className: r,
        component: o = "button",
        __staticSelector: i,
        unstyled: a,
        classNames: s,
        styles: c,
        style: l,
        ...u
      } = n,
      d = Go({
        name: i,
        props: n,
        classes: nw,
        className: r,
        style: l,
        classNames: s,
        styles: c,
        unstyled: a,
      });
    return K.createElement(kt, {
      ...d("root", { focusable: !0 }),
      component: o,
      ref: e,
      type: o === "button" ? "button" : void 0,
      ...u,
    });
  });
Af.classes = nw;
Af.displayName = "@mantine/core/UnstyledButton";
var rw = { root: "m_1b7284a3" };
const KR = {},
  GR = (t, { radius: e, shadow: n }) => ({
    root: {
      "--paper-radius": e === void 0 ? void 0 : zS(e),
      "--paper-shadow": R_(n),
    },
  }),
  kf = da((t, e) => {
    const n = lr("Paper", KR, t),
      {
        classNames: r,
        className: o,
        style: i,
        styles: a,
        unstyled: s,
        withBorder: c,
        vars: l,
        radius: u,
        shadow: d,
        variant: h,
        mod: v,
        ...g
      } = n,
      m = Go({
        name: "Paper",
        props: n,
        classes: rw,
        className: o,
        style: i,
        classNames: r,
        styles: a,
        unstyled: s,
        vars: l,
        varsResolver: GR,
      });
    return K.createElement(kt, {
      ref: e,
      mod: [{ "data-with-border": c }, v],
      ...m("root"),
      variant: h,
      ...g,
    });
  });
kf.classes = rw;
kf.displayName = "@mantine/core/Paper";
function ow(t) {
  return aw(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Dn(t) {
  var e;
  return (
    (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) ||
    window
  );
}
function iw(t) {
  var e;
  return (e = (aw(t) ? t.ownerDocument : t.document) || window.document) == null
    ? void 0
    : e.documentElement;
}
function aw(t) {
  return t instanceof Node || t instanceof Dn(t).Node;
}
function WR(t) {
  return t instanceof Element || t instanceof Dn(t).Element;
}
function _f(t) {
  return t instanceof HTMLElement || t instanceof Dn(t).HTMLElement;
}
function qm(t) {
  return typeof ShadowRoot > "u"
    ? !1
    : t instanceof ShadowRoot || t instanceof Dn(t).ShadowRoot;
}
function sw(t) {
  const { overflow: e, overflowX: n, overflowY: r, display: o } = Rf(t);
  return (
    /auto|scroll|overlay|hidden|clip/.test(e + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function qR() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function YR(t) {
  return ["html", "body", "#document"].includes(ow(t));
}
function Rf(t) {
  return Dn(t).getComputedStyle(t);
}
function QR(t) {
  if (ow(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || (qm(t) && t.host) || iw(t);
  return qm(e) ? e.host : e;
}
function cw(t) {
  const e = QR(t);
  return YR(e)
    ? t.ownerDocument
      ? t.ownerDocument.body
      : t.body
    : _f(e) && sw(e)
    ? e
    : cw(e);
}
function Qs(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = cw(t),
    i = o === ((r = t.ownerDocument) == null ? void 0 : r.body),
    a = Dn(o);
  return i
    ? e.concat(
        a,
        a.visualViewport || [],
        sw(o) ? o : [],
        a.frameElement && n ? Qs(a.frameElement) : []
      )
    : e.concat(o, Qs(o, [], n));
}
const JR = Math.min,
  XR = Math.max,
  Js = Math.round,
  Ba = Math.floor,
  Xs = (t) => ({ x: t, y: t });
function ZR(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height,
  };
}
function eb(t) {
  const e = Rf(t);
  let n = parseFloat(e.width) || 0,
    r = parseFloat(e.height) || 0;
  const o = _f(t),
    i = o ? t.offsetWidth : n,
    a = o ? t.offsetHeight : r,
    s = Js(n) !== i || Js(r) !== a;
  return s && ((n = i), (r = a)), { width: n, height: r, $: s };
}
function bf(t) {
  return WR(t) ? t : t.contextElement;
}
function Ym(t) {
  const e = bf(t);
  if (!_f(e)) return Xs(1);
  const n = e.getBoundingClientRect(),
    { width: r, height: o, $: i } = eb(e);
  let a = (i ? Js(n.width) : n.width) / r,
    s = (i ? Js(n.height) : n.height) / o;
  return (
    (!a || !Number.isFinite(a)) && (a = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: a, y: s }
  );
}
const tb = Xs(0);
function nb(t) {
  const e = Dn(t);
  return !qR() || !e.visualViewport
    ? tb
    : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function rb(t, e, n) {
  return !1;
}
function Qm(t, e, n, r) {
  e === void 0 && (e = !1);
  const o = t.getBoundingClientRect(),
    i = bf(t);
  let a = Xs(1);
  e && (a = Ym(t));
  const s = rb() ? nb(i) : Xs(0);
  let c = (o.left + s.x) / a.x,
    l = (o.top + s.y) / a.y,
    u = o.width / a.x,
    d = o.height / a.y;
  if (i) {
    const h = Dn(i),
      v = r;
    let g = h,
      m = g.frameElement;
    for (; m && r && v !== g; ) {
      const C = Ym(m),
        f = m.getBoundingClientRect(),
        p = Rf(m),
        y = f.left + (m.clientLeft + parseFloat(p.paddingLeft)) * C.x,
        w = f.top + (m.clientTop + parseFloat(p.paddingTop)) * C.y;
      (c *= C.x),
        (l *= C.y),
        (u *= C.x),
        (d *= C.y),
        (c += y),
        (l += w),
        (g = Dn(m)),
        (m = g.frameElement);
    }
  }
  return ZR({ width: u, height: d, x: c, y: l });
}
function ob(t, e) {
  let n = null,
    r;
  const o = iw(t);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), (n = null);
  }
  function a(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), i();
    const { left: l, top: u, width: d, height: h } = t.getBoundingClientRect();
    if ((s || e(), !d || !h)) return;
    const v = Ba(u),
      g = Ba(o.clientWidth - (l + d)),
      m = Ba(o.clientHeight - (u + h)),
      C = Ba(l),
      p = {
        rootMargin: -v + "px " + -g + "px " + -m + "px " + -C + "px",
        threshold: XR(0, JR(1, c)) || 1,
      };
    let y = !0;
    function w(I) {
      const k = I[0].intersectionRatio;
      if (k !== c) {
        if (!y) return a();
        k
          ? a(!1, k)
          : (r = setTimeout(() => {
              a(!1, 1e-7);
            }, 100));
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(w, { ...p, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(w, p);
    }
    n.observe(t);
  }
  return a(!0), i;
}
function ib(t, e, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: a = typeof ResizeObserver == "function",
      layoutShift: s = typeof IntersectionObserver == "function",
      animationFrame: c = !1,
    } = r,
    l = bf(t),
    u = o || i ? [...(l ? Qs(l) : []), ...Qs(e)] : [];
  u.forEach((f) => {
    o && f.addEventListener("scroll", n, { passive: !0 }),
      i && f.addEventListener("resize", n);
  });
  const d = l && s ? ob(l, n) : null;
  let h = -1,
    v = null;
  a &&
    ((v = new ResizeObserver((f) => {
      let [p] = f;
      p &&
        p.target === l &&
        v &&
        (v.unobserve(e),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var y;
          (y = v) == null || y.observe(e);
        }))),
        n();
    })),
    l && !c && v.observe(l),
    v.observe(e));
  let g,
    m = c ? Qm(t) : null;
  c && C();
  function C() {
    const f = Qm(t);
    m &&
      (f.x !== m.x ||
        f.y !== m.y ||
        f.width !== m.width ||
        f.height !== m.height) &&
      n(),
      (m = f),
      (g = requestAnimationFrame(C));
  }
  return (
    n(),
    () => {
      var f;
      u.forEach((p) => {
        o && p.removeEventListener("scroll", n),
          i && p.removeEventListener("resize", n);
      }),
        d == null || d(),
        (f = v) == null || f.disconnect(),
        (v = null),
        c && cancelAnimationFrame(g);
    }
  );
}
const li = (t) => ({
    in: { opacity: 1, transform: "scale(1)" },
    out: {
      opacity: 0,
      transform: `scale(.9) translateY(${P(t === "bottom" ? 10 : -10)})`,
    },
    transitionProperty: "transform, opacity",
  }),
  za = {
    fade: {
      in: { opacity: 1 },
      out: { opacity: 0 },
      transitionProperty: "opacity",
    },
    "fade-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: `translateY(${P(30)}` },
      transitionProperty: "opacity, transform",
    },
    "fade-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: `translateY(${P(-30)}` },
      transitionProperty: "opacity, transform",
    },
    "fade-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: `translateX(${P(30)}` },
      transitionProperty: "opacity, transform",
    },
    "fade-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: `translateX(${P(-30)}` },
      transitionProperty: "opacity, transform",
    },
    scale: {
      in: { opacity: 1, transform: "scale(1)" },
      out: { opacity: 0, transform: "scale(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-y": {
      in: { opacity: 1, transform: "scaleY(1)" },
      out: { opacity: 0, transform: "scaleY(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-x": {
      in: { opacity: 1, transform: "scaleX(1)" },
      out: { opacity: 0, transform: "scaleX(0)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "skew-up": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: {
        opacity: 0,
        transform: `translateY(${P(-20)}) skew(-10deg, -5deg)`,
      },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "skew-down": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: {
        opacity: 0,
        transform: `translateY(${P(20)}) skew(-10deg, -5deg)`,
      },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-left": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: `translateY(${P(20)}) rotate(-5deg)` },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-right": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: `translateY(${P(20)}) rotate(5deg)` },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(-100%)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(100%)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "slide-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(100%)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "slide-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(-100%)" },
      common: { transformOrigin: "right" },
      transitionProperty: "transform, opacity",
    },
    pop: { ...li("bottom"), common: { transformOrigin: "center center" } },
    "pop-bottom-left": {
      ...li("bottom"),
      common: { transformOrigin: "bottom left" },
    },
    "pop-bottom-right": {
      ...li("bottom"),
      common: { transformOrigin: "bottom right" },
    },
    "pop-top-left": { ...li("top"), common: { transformOrigin: "top left" } },
    "pop-top-right": { ...li("top"), common: { transformOrigin: "top right" } },
  },
  Jm = {
    entering: "in",
    entered: "in",
    exiting: "out",
    exited: "out",
    "pre-exiting": "out",
    "pre-entering": "out",
  };
function ab({ transition: t, state: e, duration: n, timingFunction: r }) {
  const o = { transitionDuration: `${n}ms`, transitionTimingFunction: r };
  return typeof t == "string"
    ? t in za
      ? {
          transitionProperty: za[t].transitionProperty,
          ...o,
          ...za[t].common,
          ...za[t][Jm[e]],
        }
      : {}
    : {
        transitionProperty: t.transitionProperty,
        ...o,
        ...t.common,
        ...t[Jm[e]],
      };
}
function sb({
  duration: t,
  exitDuration: e,
  timingFunction: n,
  mounted: r,
  onEnter: o,
  onExit: i,
  onEntered: a,
  onExited: s,
}) {
  const c = Ko(),
    l = M_(),
    u = c.respectReducedMotion ? l : !1,
    [d, h] = S.useState(u ? 0 : t),
    [v, g] = S.useState(r ? "entered" : "exited"),
    m = S.useRef(-1),
    C = S.useRef(-1),
    f = (p) => {
      const y = p ? o : i,
        w = p ? a : s;
      window.clearTimeout(m.current);
      const I = u ? 0 : p ? t : e;
      h(I),
        I === 0
          ? (typeof y == "function" && y(),
            typeof w == "function" && w(),
            g(p ? "entered" : "exited"))
          : (C.current = requestAnimationFrame(() => {
              y_.flushSync(() => {
                g(p ? "pre-entering" : "pre-exiting");
              }),
                (C.current = requestAnimationFrame(() => {
                  typeof y == "function" && y(),
                    g(p ? "entering" : "exiting"),
                    (m.current = window.setTimeout(() => {
                      typeof w == "function" && w(),
                        g(p ? "entered" : "exited");
                    }, I));
                }));
            }));
    };
  return (
    N_(() => {
      f(r);
    }, [r]),
    S.useEffect(
      () => () => {
        window.clearTimeout(m.current), cancelAnimationFrame(C.current);
      },
      []
    ),
    {
      transitionDuration: d,
      transitionStatus: v,
      transitionTimingFunction: n || "ease",
    }
  );
}
function lw({
  keepMounted: t,
  transition: e = "fade",
  duration: n = 250,
  exitDuration: r = n,
  mounted: o,
  children: i,
  timingFunction: a = "ease",
  onExit: s,
  onEntered: c,
  onEnter: l,
  onExited: u,
}) {
  const {
    transitionDuration: d,
    transitionStatus: h,
    transitionTimingFunction: v,
  } = sb({
    mounted: o,
    exitDuration: r,
    duration: n,
    timingFunction: a,
    onExit: s,
    onEntered: c,
    onEnter: l,
    onExited: u,
  });
  return d === 0
    ? o
      ? K.createElement(K.Fragment, null, i({}))
      : t
      ? i({ display: "none" })
      : null
    : h === "exited"
    ? t
      ? i({ display: "none" })
      : null
    : K.createElement(
        K.Fragment,
        null,
        i(ab({ transition: e, duration: d, state: h, timingFunction: v }))
      );
}
lw.displayName = "@mantine/core/Transition";
var qt = {
  root: "m_5ae2e3c",
  barsLoader: "m_7a2bd4cd",
  bar: "m_870bb79",
  "bars-loader-animation": "m_5d2b3b9d",
  dotsLoader: "m_4e3f22d7",
  dot: "m_870c4af",
  "loader-dots-animation": "m_aac34a1",
  ovalLoader: "m_b34414df",
  "oval-loader-animation": "m_f8e89c4b",
};
const cb = S.forwardRef(({ className: t, ...e }, n) =>
    K.createElement(
      kt,
      { component: "span", className: $r(qt.barsLoader, t), ...e, ref: n },
      K.createElement("span", { className: qt.bar }),
      K.createElement("span", { className: qt.bar }),
      K.createElement("span", { className: qt.bar })
    )
  ),
  lb = S.forwardRef(({ className: t, ...e }, n) =>
    K.createElement(
      kt,
      { component: "span", className: $r(qt.dotsLoader, t), ...e, ref: n },
      K.createElement("span", { className: qt.dot }),
      K.createElement("span", { className: qt.dot }),
      K.createElement("span", { className: qt.dot })
    )
  ),
  ub = S.forwardRef(({ className: t, ...e }, n) =>
    K.createElement(kt, {
      component: "span",
      className: $r(qt.ovalLoader, t),
      ...e,
      ref: n,
    })
  ),
  uw = { bars: cb, oval: ub, dots: lb },
  db = { loaders: uw, type: "oval" },
  hb = (t, { size: e, color: n }) => ({
    root: {
      "--loader-size": xr(e, "loader-size"),
      "--loader-color": n ? Sd(n, t) : void 0,
    },
  }),
  Lc = tw((t, e) => {
    const n = lr("Loader", db, t),
      {
        size: r,
        color: o,
        type: i,
        vars: a,
        className: s,
        style: c,
        classNames: l,
        styles: u,
        unstyled: d,
        loaders: h,
        variant: v,
        children: g,
        ...m
      } = n,
      C = Go({
        name: "Loader",
        props: n,
        classes: qt,
        className: s,
        style: c,
        classNames: l,
        styles: u,
        unstyled: d,
        vars: a,
        varsResolver: hb,
      });
    return g
      ? K.createElement(kt, { ...C("root"), ref: e, ...m }, g)
      : K.createElement(kt, {
          ...C("root"),
          ref: e,
          component: h[i],
          variant: v,
          size: r,
          ...m,
        });
  });
Lc.defaultLoaders = uw;
Lc.classes = qt;
Lc.displayName = "@mantine/core/Loader";
var Dc = {
  root: "m_77c9d27d",
  inner: "m_80f1301b",
  label: "m_811560b9",
  section: "m_a74036a",
  loader: "m_a25b86ee",
  group: "m_80d6d844",
};
const Xm = { orientation: "horizontal" },
  fb = (t, { borderWidth: e }) => ({
    group: { "--button-border-width": P(e) },
  }),
  Of = tw((t, e) => {
    const n = lr("ButtonGroup", Xm, t),
      {
        className: r,
        style: o,
        classNames: i,
        styles: a,
        unstyled: s,
        orientation: c,
        vars: l,
        borderWidth: u,
        variant: d,
        mod: h,
        ...v
      } = lr("ButtonGroup", Xm, t),
      g = Go({
        name: "ButtonGroup",
        props: n,
        classes: Dc,
        className: r,
        style: o,
        classNames: i,
        styles: a,
        unstyled: s,
        vars: l,
        varsResolver: fb,
        rootSelector: "group",
      });
    return K.createElement(kt, {
      ...g("group"),
      ref: e,
      variant: d,
      mod: [{ "data-orientation": c }, h],
      role: "group",
      ...v,
    });
  });
Of.classes = Dc;
Of.displayName = "@mantine/core/ButtonGroup";
const pb = {
    in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${P(1)}))` },
    out: { opacity: 0, transform: "translate(-50%, -200%)" },
    common: { transformOrigin: "center" },
    transitionProperty: "transform, opacity",
  },
  mb = {},
  gb = (
    t,
    {
      radius: e,
      color: n,
      gradient: r,
      variant: o,
      size: i,
      justify: a,
      autoContrast: s,
    }
  ) => {
    const c = t.variantColorResolver({
      color: n || t.primaryColor,
      theme: t,
      gradient: r,
      variant: o || "filled",
      autoContrast: s,
    });
    return {
      root: {
        "--button-justify": a,
        "--button-height": xr(i, "button-height"),
        "--button-padding-x": xr(i, "button-padding-x"),
        "--button-fz":
          i != null && i.includes("compact")
            ? Fm(i.replace("compact-", ""))
            : Fm(i),
        "--button-radius": e === void 0 ? void 0 : zS(e),
        "--button-bg": n || o ? c.background : void 0,
        "--button-hover": n || o ? c.hover : void 0,
        "--button-color": c.color,
        "--button-bd": n || o ? c.border : void 0,
        "--button-hover-color": n || o ? c.hoverColor : void 0,
      },
    };
  },
  Wo = da((t, e) => {
    const n = lr("Button", mb, t),
      {
        style: r,
        vars: o,
        className: i,
        color: a,
        disabled: s,
        children: c,
        leftSection: l,
        rightSection: u,
        fullWidth: d,
        variant: h,
        radius: v,
        loading: g,
        loaderProps: m,
        gradient: C,
        classNames: f,
        styles: p,
        unstyled: y,
        "data-disabled": w,
        autoContrast: I,
        mod: k,
        ...A
      } = n,
      R = Go({
        name: "Button",
        props: n,
        classes: Dc,
        className: i,
        style: r,
        classNames: f,
        styles: p,
        unstyled: y,
        vars: o,
        varsResolver: gb,
      }),
      j = !!l,
      U = !!u;
    return K.createElement(
      Af,
      {
        ref: e,
        ...R("root", { active: !s && !g && !w }),
        unstyled: y,
        variant: h,
        disabled: s || g,
        mod: [
          {
            disabled: s || w,
            loading: g,
            block: d,
            "with-left-section": j,
            "with-right-section": U,
          },
          k,
        ],
        ...A,
      },
      K.createElement(
        lw,
        { mounted: !!g, transition: pb, duration: 150 },
        (ee) =>
          K.createElement(
            kt,
            {
              component: "span",
              ...R("loader", { style: ee }),
              "aria-hidden": !0,
            },
            K.createElement(Lc, {
              color: "var(--button-color)",
              size: "calc(var(--button-height) / 1.8)",
              ...m,
            })
          )
      ),
      K.createElement(
        "span",
        { ...R("inner") },
        l &&
          K.createElement(
            kt,
            { component: "span", ...R("section"), mod: { position: "left" } },
            l
          ),
        K.createElement(
          kt,
          { component: "span", mod: { loading: g }, ...R("label") },
          c
        ),
        u &&
          K.createElement(
            kt,
            { component: "span", ...R("section"), mod: { position: "right" } },
            u
          )
      )
    );
  });
Wo.classes = Dc;
Wo.displayName = "@mantine/core/Button";
Wo.Group = Of;
const [vb, yb] = k_("Card component was not found in tree");
var Pf = { root: "m_e615b15f", section: "m_599a2148" };
const Cb = {},
  Uc = da((t, e) => {
    const n = lr("CardSection", Cb, t),
      {
        classNames: r,
        className: o,
        style: i,
        styles: a,
        vars: s,
        withBorder: c,
        inheritPadding: l,
        mod: u,
        ...d
      } = n,
      h = yb();
    return K.createElement(kt, {
      ref: e,
      mod: [{ "with-border": c, "inherit-padding": l }, u],
      ...h.getStyles("section", {
        className: o,
        style: i,
        styles: a,
        classNames: r,
      }),
      ...d,
    });
  });
Uc.classes = Pf;
Uc.displayName = "@mantine/core/CardSection";
const Sb = {},
  wb = (t, { padding: e }) => ({ root: { "--card-padding": __(e) } }),
  Fc = da((t, e) => {
    const n = lr("Card", Sb, t),
      {
        classNames: r,
        className: o,
        style: i,
        styles: a,
        unstyled: s,
        vars: c,
        children: l,
        padding: u,
        ...d
      } = n,
      h = Go({
        name: "Card",
        props: n,
        classes: Pf,
        className: o,
        style: i,
        classNames: r,
        styles: a,
        unstyled: s,
        vars: c,
        varsResolver: wb,
      }),
      v = S.Children.toArray(l),
      g = v.map((m, C) =>
        typeof m == "object" && m && "type" in m && m.type === Uc
          ? S.cloneElement(m, {
              "data-first-section": C === 0 || void 0,
              "data-last-section": C === v.length - 1 || void 0,
            })
          : m
      );
    return K.createElement(
      vb,
      { value: { getStyles: h } },
      K.createElement(kf, { ref: e, unstyled: s, ...h("root"), ...d }, g)
    );
  });
Fc.classes = Pf;
Fc.displayName = "@mantine/core/Card";
Fc.Section = Uc;
function G() {
  return (
    (G = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    G.apply(this, arguments)
  );
}
function Eb(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(e.indexOf(o) >= 0) && (n[o] = t[o]);
  return n;
}
var Td = S.useLayoutEffect;
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yi() {
  return (
    (Yi = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    Yi.apply(this, arguments)
  );
}
var Yn;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(Yn || (Yn = {}));
const Zm = "popstate";
function Tb(t) {
  t === void 0 && (t = {});
  function e(r, o) {
    let { pathname: i, search: a, hash: s } = r.location;
    return Id(
      "",
      { pathname: i, search: a, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : hw(o);
  }
  return Ab(e, n, null, t);
}
function Be(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function dw(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function Ib() {
  return Math.random().toString(36).substr(2, 8);
}
function eg(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function Id(t, e, n, r) {
  return (
    n === void 0 && (n = null),
    Yi(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof e == "string" ? qo(e) : e,
      { state: n, key: (e && e.key) || r || Ib() }
    )
  );
}
function hw(t) {
  let { pathname: e = "/", search: n = "", hash: r = "" } = t;
  return (
    n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function qo(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
    let r = t.indexOf("?");
    r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))),
      t && (e.pathname = t);
  }
  return e;
}
function Ab(t, e, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    s = Yn.Pop,
    c = null,
    l = u();
  l == null && ((l = 0), a.replaceState(Yi({}, a.state, { idx: l }), ""));
  function u() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    s = Yn.Pop;
    let C = u(),
      f = C == null ? null : C - l;
    (l = C), c && c({ action: s, location: m.location, delta: f });
  }
  function h(C, f) {
    s = Yn.Push;
    let p = Id(m.location, C, f);
    l = u() + 1;
    let y = eg(p, l),
      w = m.createHref(p);
    try {
      a.pushState(y, "", w);
    } catch (I) {
      if (I instanceof DOMException && I.name === "DataCloneError") throw I;
      o.location.assign(w);
    }
    i && c && c({ action: s, location: m.location, delta: 1 });
  }
  function v(C, f) {
    s = Yn.Replace;
    let p = Id(m.location, C, f);
    l = u();
    let y = eg(p, l),
      w = m.createHref(p);
    a.replaceState(y, "", w),
      i && c && c({ action: s, location: m.location, delta: 0 });
  }
  function g(C) {
    let f = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof C == "string" ? C : hw(C);
    return (
      (p = p.replace(/ $/, "%20")),
      Be(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, f)
    );
  }
  let m = {
    get action() {
      return s;
    },
    get location() {
      return t(o, a);
    },
    listen(C) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Zm, d),
        (c = C),
        () => {
          o.removeEventListener(Zm, d), (c = null);
        }
      );
    },
    createHref(C) {
      return e(o, C);
    },
    createURL: g,
    encodeLocation(C) {
      let f = g(C);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: h,
    replace: v,
    go(C) {
      return a.go(C);
    },
  };
  return m;
}
var tg;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(tg || (tg = {}));
function kb(t, e, n) {
  n === void 0 && (n = "/");
  let r = typeof e == "string" ? qo(e) : e,
    o = mw(r.pathname || "/", n);
  if (o == null) return null;
  let i = fw(t);
  _b(i);
  let a = null;
  for (let s = 0; a == null && s < i.length; ++s) {
    let c = Hb(o);
    a = Db(i[s], c);
  }
  return a;
}
function fw(t, e, n, r) {
  e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, a, s) => {
    let c = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    c.relativePath.startsWith("/") &&
      (Be(
        c.relativePath.startsWith(r),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (c.relativePath = c.relativePath.slice(r.length)));
    let l = Ir([r, c.relativePath]),
      u = n.concat(c);
    i.children &&
      i.children.length > 0 &&
      (Be(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + l + '".')
      ),
      fw(i.children, e, u, l)),
      !(i.path == null && !i.index) &&
        e.push({ path: l, score: xb(l, i.index), routesMeta: u });
  };
  return (
    t.forEach((i, a) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, a);
      else for (let c of pw(i.path)) o(i, a, c);
    }),
    e
  );
}
function pw(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [n, ...r] = e,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let a = pw(r.join("/")),
    s = [];
  return (
    s.push(...a.map((c) => (c === "" ? i : [i, c].join("/")))),
    o && s.push(...a),
    s.map((c) => (t.startsWith("/") && c === "" ? "/" : c))
  );
}
function _b(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : Lb(
          e.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Rb = /^:[\w-]+$/,
  bb = 3,
  Ob = 2,
  Pb = 1,
  Nb = 10,
  Mb = -2,
  ng = (t) => t === "*";
function xb(t, e) {
  let n = t.split("/"),
    r = n.length;
  return (
    n.some(ng) && (r += Mb),
    e && (r += Ob),
    n
      .filter((o) => !ng(o))
      .reduce((o, i) => o + (Rb.test(i) ? bb : i === "" ? Pb : Nb), r)
  );
}
function Lb(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, o) => r === e[o])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function Db(t, e) {
  let { routesMeta: n } = t,
    r = {},
    o = "/",
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let s = n[a],
      c = a === n.length - 1,
      l = o === "/" ? e : e.slice(o.length) || "/",
      u = Ub(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
        l
      );
    if (!u) return null;
    Object.assign(r, u.params);
    let d = s.route;
    i.push({
      params: r,
      pathname: Ir([o, u.pathname]),
      pathnameBase: Kb(Ir([o, u.pathnameBase])),
      route: d,
    }),
      u.pathnameBase !== "/" && (o = Ir([o, u.pathnameBase]));
  }
  return i;
}
function Ub(t, e) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, r] = Fb(t.path, t.caseSensitive, t.end),
    o = e.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((l, u, d) => {
      let { paramName: h, isOptional: v } = u;
      if (h === "*") {
        let m = s[d] || "";
        a = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1");
      }
      const g = s[d];
      return (
        v && !g ? (l[h] = void 0) : (l[h] = (g || "").replace(/%2F/g, "/")), l
      );
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: t,
  };
}
function Fb(t, e, n) {
  e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    dw(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, s, c) => (
            r.push({ paramName: s, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    t.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : t !== "" && t !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, e ? void 0 : "i"), r]
  );
}
function Hb(t) {
  try {
    return t
      .split("/")
      .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
      .join("/");
  } catch (e) {
    return (
      dw(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ").")
      ),
      t
    );
  }
}
function mw(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length,
    r = t.charAt(n);
  return r && r !== "/" ? null : t.slice(n) || "/";
}
function $b(t, e) {
  e === void 0 && (e = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof t == "string" ? qo(t) : t;
  return {
    pathname: n ? (n.startsWith("/") ? n : Bb(n, e)) : e,
    search: Gb(r),
    hash: Wb(o),
  };
}
function Bb(t, e) {
  let n = e.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Jl(t, e, n, r) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function zb(t) {
  return t.filter(
    (e, n) => n === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function jb(t, e) {
  let n = zb(t);
  return e
    ? n.map((r, o) => (o === t.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Vb(t, e, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof t == "string"
    ? (o = qo(t))
    : ((o = Yi({}, t)),
      Be(
        !o.pathname || !o.pathname.includes("?"),
        Jl("?", "pathname", "search", o)
      ),
      Be(
        !o.pathname || !o.pathname.includes("#"),
        Jl("#", "pathname", "hash", o)
      ),
      Be(!o.search || !o.search.includes("#"), Jl("#", "search", "hash", o)));
  let i = t === "" || o.pathname === "",
    a = i ? "/" : o.pathname,
    s;
  if (a == null) s = n;
  else {
    let d = e.length - 1;
    if (!r && a.startsWith("..")) {
      let h = a.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      o.pathname = h.join("/");
    }
    s = d >= 0 ? e[d] : "/";
  }
  let c = $b(o, s),
    l = a && a !== "/" && a.endsWith("/"),
    u = (i || a === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (l || u) && (c.pathname += "/"), c;
}
const Ir = (t) => t.join("/").replace(/\/\/+/g, "/"),
  Kb = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Gb = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  Wb = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
function qb(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const gw = ["post", "put", "patch", "delete"];
new Set(gw);
const Yb = ["get", ...gw];
new Set(Yb);
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qi() {
  return (
    (Qi = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    Qi.apply(this, arguments)
  );
}
const Nf = S.createContext(null),
  Qb = S.createContext(null),
  Hc = S.createContext(null),
  $c = S.createContext(null),
  Yo = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  vw = S.createContext(null);
function Bc() {
  return S.useContext($c) != null;
}
function zc() {
  return Bc() || Be(!1), S.useContext($c).location;
}
function yw(t) {
  S.useContext(Hc).static || S.useLayoutEffect(t);
}
function Cw() {
  let { isDataRoute: t } = S.useContext(Yo);
  return t ? l1() : Jb();
}
function Jb() {
  Bc() || Be(!1);
  let t = S.useContext(Nf),
    { basename: e, future: n, navigator: r } = S.useContext(Hc),
    { matches: o } = S.useContext(Yo),
    { pathname: i } = zc(),
    a = JSON.stringify(jb(o, n.v7_relativeSplatPath)),
    s = S.useRef(!1);
  return (
    yw(() => {
      s.current = !0;
    }),
    S.useCallback(
      function (l, u) {
        if ((u === void 0 && (u = {}), !s.current)) return;
        if (typeof l == "number") {
          r.go(l);
          return;
        }
        let d = Vb(l, JSON.parse(a), i, u.relative === "path");
        t == null &&
          e !== "/" &&
          (d.pathname = d.pathname === "/" ? e : Ir([e, d.pathname])),
          (u.replace ? r.replace : r.push)(d, u.state, u);
      },
      [e, r, a, i, t]
    )
  );
}
function Xb(t, e) {
  return Zb(t, e);
}
function Zb(t, e, n, r) {
  Bc() || Be(!1);
  let { navigator: o } = S.useContext(Hc),
    { matches: i } = S.useContext(Yo),
    a = i[i.length - 1],
    s = a ? a.params : {};
  a && a.pathname;
  let c = a ? a.pathnameBase : "/";
  a && a.route;
  let l = zc(),
    u;
  if (e) {
    var d;
    let C = typeof e == "string" ? qo(e) : e;
    c === "/" || ((d = C.pathname) != null && d.startsWith(c)) || Be(!1),
      (u = C);
  } else u = l;
  let h = u.pathname || "/",
    v = h;
  if (c !== "/") {
    let C = c.replace(/^\//, "").split("/");
    v = "/" + h.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let g = kb(t, { pathname: v }),
    m = o1(
      g &&
        g.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, s, C.params),
            pathname: Ir([
              c,
              o.encodeLocation
                ? o.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? c
                : Ir([
                    c,
                    o.encodeLocation
                      ? o.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return e && m
    ? S.createElement(
        $c.Provider,
        {
          value: {
            location: Qi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: Yn.Pop,
          },
        },
        m
      )
    : m;
}
function e1() {
  let t = c1(),
    e = qb(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
      ? t.message
      : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, e),
    n ? S.createElement("pre", { style: o }, n) : null,
    null
  );
}
const t1 = S.createElement(e1, null);
class n1 extends S.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location ||
      (n.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error !== void 0 ? e.error : n.error,
          location: n.location,
          revalidation: e.revalidation || n.revalidation,
        };
  }
  componentDidCatch(e, n) {
    console.error(
      "React Router caught the following error during render",
      e,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          Yo.Provider,
          { value: this.props.routeContext },
          S.createElement(vw.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function r1(t) {
  let { routeContext: e, match: n, children: r } = t,
    o = S.useContext(Nf);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(Yo.Provider, { value: e }, r)
  );
}
function o1(t, e, n, r) {
  var o;
  if (
    (e === void 0 && (e = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    t == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) t = n.matches;
    else return null;
  }
  let a = t,
    s = (o = n) == null ? void 0 : o.errors;
  if (s != null) {
    let u = a.findIndex(
      (d) => d.route.id && (s == null ? void 0 : s[d.route.id])
    );
    u >= 0 || Be(!1), (a = a.slice(0, Math.min(a.length, u + 1)));
  }
  let c = !1,
    l = -1;
  if (n && r && r.v7_partialHydration)
    for (let u = 0; u < a.length; u++) {
      let d = a[u];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (l = u),
        d.route.id)
      ) {
        let { loaderData: h, errors: v } = n,
          g =
            d.route.loader &&
            h[d.route.id] === void 0 &&
            (!v || v[d.route.id] === void 0);
        if (d.route.lazy || g) {
          (c = !0), l >= 0 ? (a = a.slice(0, l + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((u, d, h) => {
    let v,
      g = !1,
      m = null,
      C = null;
    n &&
      ((v = s && d.route.id ? s[d.route.id] : void 0),
      (m = d.route.errorElement || t1),
      c &&
        (l < 0 && h === 0
          ? ((g = !0), (C = null))
          : l === h &&
            ((g = !0), (C = d.route.hydrateFallbackElement || null))));
    let f = e.concat(a.slice(0, h + 1)),
      p = () => {
        let y;
        return (
          v
            ? (y = m)
            : g
            ? (y = C)
            : d.route.Component
            ? (y = S.createElement(d.route.Component, null))
            : d.route.element
            ? (y = d.route.element)
            : (y = u),
          S.createElement(r1, {
            match: d,
            routeContext: { outlet: u, matches: f, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0)
      ? S.createElement(n1, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: v,
          children: p(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Sw = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      t
    );
  })(Sw || {}),
  Zs = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseLoaderData = "useLoaderData"),
      (t.UseActionData = "useActionData"),
      (t.UseRouteError = "useRouteError"),
      (t.UseNavigation = "useNavigation"),
      (t.UseRouteLoaderData = "useRouteLoaderData"),
      (t.UseMatches = "useMatches"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      (t.UseRouteId = "useRouteId"),
      t
    );
  })(Zs || {});
function i1(t) {
  let e = S.useContext(Nf);
  return e || Be(!1), e;
}
function a1(t) {
  let e = S.useContext(Qb);
  return e || Be(!1), e;
}
function s1(t) {
  let e = S.useContext(Yo);
  return e || Be(!1), e;
}
function ww(t) {
  let e = s1(),
    n = e.matches[e.matches.length - 1];
  return n.route.id || Be(!1), n.route.id;
}
function c1() {
  var t;
  let e = S.useContext(vw),
    n = a1(Zs.UseRouteError),
    r = ww(Zs.UseRouteError);
  return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[r];
}
function l1() {
  let { router: t } = i1(Sw.UseNavigateStable),
    e = ww(Zs.UseNavigateStable),
    n = S.useRef(!1);
  return (
    yw(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? t.navigate(o)
              : t.navigate(o, Qi({ fromRouteId: e }, i)));
      },
      [t, e]
    )
  );
}
function as(t) {
  Be(!1);
}
function u1(t) {
  let {
    basename: e = "/",
    children: n = null,
    location: r,
    navigationType: o = Yn.Pop,
    navigator: i,
    static: a = !1,
    future: s,
  } = t;
  Bc() && Be(!1);
  let c = e.replace(/^\/*/, "/"),
    l = S.useMemo(
      () => ({
        basename: c,
        navigator: i,
        static: a,
        future: Qi({ v7_relativeSplatPath: !1 }, s),
      }),
      [c, s, i, a]
    );
  typeof r == "string" && (r = qo(r));
  let {
      pathname: u = "/",
      search: d = "",
      hash: h = "",
      state: v = null,
      key: g = "default",
    } = r,
    m = S.useMemo(() => {
      let C = mw(u, c);
      return C == null
        ? null
        : {
            location: { pathname: C, search: d, hash: h, state: v, key: g },
            navigationType: o,
          };
    }, [c, u, d, h, v, g, o]);
  return m == null
    ? null
    : S.createElement(
        Hc.Provider,
        { value: l },
        S.createElement($c.Provider, { children: n, value: m })
      );
}
function d1(t) {
  let { children: e, location: n } = t;
  return Xb(Ad(e), n);
}
new Promise(() => {});
function Ad(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return (
    S.Children.forEach(t, (r, o) => {
      if (!S.isValidElement(r)) return;
      let i = [...e, o];
      if (r.type === S.Fragment) {
        n.push.apply(n, Ad(r.props.children, i));
        return;
      }
      r.type !== as && Be(!1), !r.props.index || !r.props.children || Be(!1);
      let a = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (a.children = Ad(r.props.children, i)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const h1 = "6";
try {
  window.__reactRouterVersion = h1;
} catch {}
const f1 = "startTransition",
  rg = uu[f1];
function p1(t) {
  let { basename: e, children: n, future: r, window: o } = t,
    i = S.useRef();
  i.current == null && (i.current = Tb({ window: o, v5Compat: !0 }));
  let a = i.current,
    [s, c] = S.useState({ action: a.action, location: a.location }),
    { v7_startTransition: l } = r || {},
    u = S.useCallback(
      (d) => {
        l && rg ? rg(() => c(d)) : c(d);
      },
      [c, l]
    );
  return (
    S.useLayoutEffect(() => a.listen(u), [a, u]),
    S.createElement(u1, {
      basename: e,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: a,
      future: r,
    })
  );
}
var og;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher"),
    (t.useViewTransitionState = "useViewTransitionState");
})(og || (og = {}));
var ig;
(function (t) {
  (t.UseFetcher = "useFetcher"),
    (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(ig || (ig = {}));
const m1 = "/assets/bg_image-DPSEvNsE.jpg",
  g1 = {
    auth: {
      clientId: "1f9df7a6-bc59-489e-aa5a-c009a479cb9d",
      authority:
        "https://login.microsoftonline.com/cef04b19-7776-4a94-b89b-375c77a8f936",
      postLogoutRedirectUri: `${window.location.origin}/login`,
      redirectUri: "http://localhost:3000/login",
      validateAuthority: !0,
      navigateToLoginRequestUrl: !0,
    },
    cache: { cacheLocation: "localStorage", storeAuthStateInCookie: !1 },
    system: {
      loggerOptions: {
        loggerCallback: (t, e, n) => {
          if (!n)
            switch (t) {
              case ce.Error:
                console.error(e);
                return;
              case ce.Info:
                console.info(e);
                return;
              case ce.Verbose:
                console.debug(e);
                return;
              case ce.Warning:
                console.warn(e);
                return;
            }
        },
      },
    },
  },
  Ew = { scopes: ["User.Read"] },
  Tw = S.createContext(),
  v1 = {
    user_id: null,
    name: null,
    email: null,
    roles: null,
    profile_photo: null,
  },
  y1 = (t, e) => {
    var n, r;
    switch (e.type) {
      case "SET_USER":
        return {
          ...t,
          name: (n = e.payload) == null ? void 0 : n.name,
          email: (r = e.payload) == null ? void 0 : r.email,
        };
      case "SET_ID_TOKEN":
        return { ...t, id_token: e.payload };
      case "SET_PROFILE_PHOTO":
        return { ...t, profile_photo: e.payload };
      case "SET_ROLES":
        return { ...t, roles: e.payload };
      case "SET_USER_ID":
        return { ...t, user_id: e.payload };
      default:
        console.log("Incorrect action type");
    }
  },
  C1 = (t) => {
    const [e, n] = S.useReducer(y1, v1);
    return b.jsx(Tw.Provider, { value: [e, n], children: t.children });
  };
function S1() {
  return b.jsx("div", {
    class:
      "fixed bottom-0 left-0 w-full bg-cover bg-no-repeat font-medium text-sm  text-gray-500",
    children: b.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1440",
      height: "60",
      children: [
        b.jsx("path", {
          fill: "#000",
          opacity: "0.85",
          d: "M72,60 C0,0 0,0 648,60z",
        }),
        b.jsx("path", {
          fill: "#e3af32",
          opacity: "0.85",
          d: "M-528,60 C161,-0 161,-0, 881,60z",
        }),
        b.jsx("path", {
          fill: "#000",
          opacity: "0.85",
          d: "M672,60 C1248,0 1248,0, 1968,60z",
        }),
      ],
    }),
  });
}
var Iw = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  ag = K.createContext && K.createContext(Iw),
  w1 = ["attr", "size", "title"];
function E1(t, e) {
  if (t == null) return {};
  var n = T1(t, e),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function T1(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(e.indexOf(o) >= 0) && (n[o] = t[o]);
  return n;
}
function ec() {
  return (
    (ec = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    ec.apply(this, arguments)
  );
}
function sg(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function tc(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? sg(Object(n), !0).forEach(function (r) {
          I1(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : sg(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function I1(t, e, n) {
  return (
    (e = A1(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function A1(t) {
  var e = k1(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function k1(t, e) {
  if (typeof t != "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Aw(t) {
  return (
    t &&
    t.map((e, n) => K.createElement(e.tag, tc({ key: n }, e.attr), Aw(e.child)))
  );
}
function Mf(t) {
  return (e) =>
    K.createElement(_1, ec({ attr: tc({}, t.attr) }, e), Aw(t.child));
}
function _1(t) {
  var e = (n) => {
    var { attr: r, size: o, title: i } = t,
      a = E1(t, w1),
      s = o || n.size || "1em",
      c;
    return (
      n.className && (c = n.className),
      t.className && (c = (c ? c + " " : "") + t.className),
      K.createElement(
        "svg",
        ec(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          a,
          {
            className: c,
            style: tc(tc({ color: t.color || n.color }, n.style), t.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && K.createElement("title", null, i),
        t.children
      )
    );
  };
  return ag !== void 0
    ? K.createElement(ag.Consumer, null, (n) => e(n))
    : e(Iw);
}
function Xl(t) {
  return Mf({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z",
        },
        child: [],
      },
    ],
  })(t);
}
function R1(t) {
  return Mf({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" },
        child: [],
      },
    ],
  })(t);
}
function b1(t) {
  return Mf({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M14.0049 20.0027V22.0027H2.00488V20.0027H14.0049ZM14.5907 0.688965L22.3688 8.46714L20.9546 9.88135L19.894 9.5278L17.4191 12.0027L23.076 17.6595L21.6617 19.0737L16.0049 13.4169L13.6007 15.821L13.8836 16.9524L12.4693 18.3666L4.69117 10.5885L6.10539 9.17425L7.23676 9.45709L13.53 3.16384L13.1765 2.10318L14.5907 0.688965ZM15.2978 4.2245L8.22671 11.2956L11.7622 14.8311L18.8333 7.76003L15.2978 4.2245Z",
        },
        child: [],
      },
    ],
  })(t);
}
function O1() {
  const { instance: t, accounts: e, inProgress: n, logger: r } = xc(),
    o = () => {
      t.logout();
    };
  return b.jsx("nav", {
    className: "bg-black",
    children: b.jsx("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: b.jsxs("div", {
        className: "flex items-center justify-between h-16",
        children: [
          b.jsxs("div", {
            className: "flex items-center",
            children: [
              b.jsx("div", {
                className: "flex-shrink-0 text-white",
                children: "Logo",
              }),
              b.jsx("div", {
                className: "hidden md:block",
                children: b.jsxs("div", {
                  className: "ml-40 flex items-baseline space-x-6",
                  children: [
                    b.jsxs("a", {
                      href: "dashboard",
                      className:
                        "text-white hover:text-yellow-500 flex items-center px-3 py-2 rounded-md text-xs font-small font-avantt",
                      children: [
                        b.jsx(R1, { size: "16", className: "mr-1" }),
                        b.jsx("span", {
                          className: "text-xs",
                          children: "Home ",
                        }),
                      ],
                    }),
                    b.jsxs("a", {
                      href: "pr_request",
                      className:
                        "text-white hover:text-yellow-500 flex items-center px-3 py-2 rounded-md text-xs font-small font-avantt",
                      children: [
                        b.jsx(Xl, { size: "16", className: "mr-1" }),
                        b.jsx("span", {
                          className: "text-xs",
                          children: "PR Request",
                        }),
                      ],
                    }),
                    b.jsxs("a", {
                      href: "gr_confirmation",
                      className:
                        "text-white hover:text-yellow-500 flex items-center px-3 py-2 rounded-md text-xs font-small font-avantt",
                      children: [
                        b.jsx(Xl, { size: "16", className: "mr-1" }),
                        b.jsx("span", {
                          className: "text-xs",
                          children: "GR Confirmation Request",
                        }),
                      ],
                    }),
                    b.jsxs("a", {
                      href: "po_modify",
                      className:
                        "text-white hover:text-yellow-500 flex items-center px-3 py-2 rounded-md text-xs font-small font-avantt",
                      children: [
                        b.jsx(Xl, { size: "16", className: "mr-1" }),
                        b.jsx("span", {
                          className: "text-xs",
                          children: "PO Modification Request",
                        }),
                      ],
                    }),
                    b.jsxs("a", {
                      href: "e-auction",
                      className:
                        "text-white hover:text-yellow-500 flex items-center px-3 py-2 rounded-md text-xs font-small font-avantt",
                      children: [
                        b.jsx(b1, { size: "16", className: "mr-1" }),
                        b.jsx("span", {
                          className: "text-xs",
                          children: "E-Auction Request",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          b.jsx("div", {
            className: "hidden md:block",
            children: b.jsx("div", {
              className: "ml-8 flex items-center ",
              children: b.jsx(Wo, {
                label: "Log out",
                onClick: o,
                overrideClass:
                  "text-black bg-gold hover:bg-gold focus:ring-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-white dark:focus:ring-black",
              }),
            }),
          }),
          b.jsx("div", {
            className: "-mr-2 flex md:hidden",
            children: b.jsxs("button", {
              type: "button",
              className:
                "bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
              "aria-controls": "mobile-menu",
              "aria-expanded": "false",
              children: [
                b.jsx("span", {
                  className: "sr-only",
                  children: "Open main menu",
                }),
                b.jsx("svg", {
                  className: "block h-6 w-6",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "aria-hidden": "true",
                  children: b.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M4 6h16M4 12h16M4 18h16",
                  }),
                }),
                b.jsx("svg", {
                  className: "hidden h-6 w-6",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "aria-hidden": "true",
                  children: b.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M6 18L18 6M6 6l12 12",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
const kw = "/assets/abi_logo_black-C0ksJnAN.png";
function nc({
  header: t,
  footer: e,
  body: n,
  cardClass: r = "",
  headerClass: o = "",
  footerClass: i = "",
  bodyClass: a = "",
}) {
  return b.jsx(Fc, {
    className: r,
    children: b.jsxs("div", {
      children: [
        t && b.jsx("header", { className: `${o}`, children: t }),
        n &&
          b.jsx("div", {
            className: `items-center justify-center ${a} `,
            children: n,
          }),
        e &&
          b.jsx("footer", {
            className: `p-2 justify-center flex-items-center ${i}`,
            children: e,
          }),
      ],
    }),
  });
}
function P1() {
  const t = Cw(),
    { instance: e, accounts: n, inProgress: r, logger: o } = xc(),
    i = HS(),
    a = zc();
  return (
    S.useEffect(() => {
      const c = new URLSearchParams(a.search).get("redirect");
      i && r === Ie.None && t(c || "/dashboard");
    }, [r]),
    !i &&
      r === Ie.None &&
      b.jsx("div", {
        className: "flex justify-center items-center h-screen",
        children: b.jsx(nc, {
          cardClass: "px-2 w-48 md:w-72 h-84 border bg-white rounded-lg",
          headerClass:
            "py-6 flex justify-center items-center font-avantt text-4xl text-yellow-600 font-bold",
          header: "PR-PO",
          body: b.jsxs(b.Fragment, {
            children: [
              b.jsx("hr", {
                className:
                  "h-px w-14 flex justify-center items-center bg-gray-500 border-0 dark:bg-gray-700 mx-auto",
              }),
              b.jsx("div", {
                className:
                  "pt-4 flex justify-center font-avantt font-bold text-lg mb-2",
                children: "Welcome!",
              }),
              b.jsx("div", {
                className: "text-center font-avantt text-xs",
                children: "Please use your AB InBev ID to login",
              }),
              b.jsx("div", {
                className: "p-3",
                children: b.jsx(Wo, {
                  className:
                    "h-8 xs:16  md: w-24  flex justify-center ml-20 items-center bg-black text-white rounded-lg font-avantt font-semibold",
                  onClick: () => e.loginRedirect(Ew),
                  children: "Login",
                }),
              }),
              b.jsx("a", {
                href: "request",
                className:
                  "underline text-black font-avantt flex justify-center items-center font-semibold text-xs pb-4",
                children: b.jsx("span", {
                  className: "text-xs",
                  children: "Request Access?",
                }),
              }),
              b.jsx("div", {
                children: b.jsx("hr", {
                  className:
                    "h-px w-44 flex justify-center items-center bg-gray-500 border-0 dark:bg-gray-700 mx-auto",
                }),
              }),
            ],
          }),
          footerClass: "p-7 h-5 flex justify-center items-center",
          footer: b.jsx("img", {
            src: kw,
            className: "h-5",
            alt: "AB InBev Logo",
          }),
        }),
      })
  );
}
function Lr(t) {
  "@babel/helpers - typeof";
  return (
    (Lr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Lr(t)
  );
}
function N1(t, e) {
  if (Lr(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (Lr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function _w(t) {
  var e = N1(t, "string");
  return Lr(e) == "symbol" ? e : e + "";
}
function mo(t, e, n) {
  return (
    (e = _w(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function cg(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function $(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? cg(Object(n), !0).forEach(function (r) {
          mo(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : cg(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function M1(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function lg(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(t, _w(r.key), r);
  }
}
function x1(t, e, n) {
  return (
    e && lg(t.prototype, e),
    n && lg(t, n),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function kd(t, e) {
  return (
    (kd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    kd(t, e)
  );
}
function L1(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && kd(t, e);
}
function rc(t) {
  return (
    (rc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    rc(t)
  );
}
function Rw() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (Rw = function () {
    return !!t;
  })();
}
function D1(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function U1(t, e) {
  if (e && (Lr(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return D1(t);
}
function F1(t) {
  var e = Rw();
  return function () {
    var r = rc(t),
      o;
    if (e) {
      var i = rc(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return U1(this, o);
  };
}
function _d(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function H1(t) {
  if (Array.isArray(t)) return _d(t);
}
function $1(t) {
  if (
    (typeof Symbol < "u" && t[Symbol.iterator] != null) ||
    t["@@iterator"] != null
  )
    return Array.from(t);
}
function bw(t, e) {
  if (t) {
    if (typeof t == "string") return _d(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (n === "Object" && t.constructor && (n = t.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _d(t, e);
  }
}
function B1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xf(t) {
  return H1(t) || $1(t) || bw(t) || B1();
}
function z1(t) {
  if (t.sheet) return t.sheet;
  for (var e = 0; e < document.styleSheets.length; e++)
    if (document.styleSheets[e].ownerNode === t) return document.styleSheets[e];
}
function j1(t) {
  var e = document.createElement("style");
  return (
    e.setAttribute("data-emotion", t.key),
    t.nonce !== void 0 && e.setAttribute("nonce", t.nonce),
    e.appendChild(document.createTextNode("")),
    e.setAttribute("data-s", ""),
    e
  );
}
var V1 = (function () {
    function t(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var e = t.prototype;
    return (
      (e.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (e.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(j1(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = z1(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (e.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      t
    );
  })(),
  ot = "-ms-",
  oc = "-moz-",
  te = "-webkit-",
  Ow = "comm",
  Lf = "rule",
  Df = "decl",
  K1 = "@import",
  Pw = "@keyframes",
  G1 = "@layer",
  W1 = Math.abs,
  jc = String.fromCharCode,
  q1 = Object.assign;
function Y1(t, e) {
  return Ze(t, 0) ^ 45
    ? (((((((e << 2) ^ Ze(t, 0)) << 2) ^ Ze(t, 1)) << 2) ^ Ze(t, 2)) << 2) ^
        Ze(t, 3)
    : 0;
}
function Nw(t) {
  return t.trim();
}
function Q1(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function ne(t, e, n) {
  return t.replace(e, n);
}
function Rd(t, e) {
  return t.indexOf(e);
}
function Ze(t, e) {
  return t.charCodeAt(e) | 0;
}
function Ji(t, e, n) {
  return t.slice(e, n);
}
function rn(t) {
  return t.length;
}
function Uf(t) {
  return t.length;
}
function ja(t, e) {
  return e.push(t), t;
}
function J1(t, e) {
  return t.map(e).join("");
}
var Vc = 1,
  Fo = 1,
  Mw = 0,
  Ct = 0,
  Me = 0,
  Qo = "";
function Kc(t, e, n, r, o, i, a) {
  return {
    value: t,
    root: e,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Vc,
    column: Fo,
    length: a,
    return: "",
  };
}
function ui(t, e) {
  return q1(Kc("", null, null, "", null, null, 0), t, { length: -t.length }, e);
}
function X1() {
  return Me;
}
function Z1() {
  return (
    (Me = Ct > 0 ? Ze(Qo, --Ct) : 0), Fo--, Me === 10 && ((Fo = 1), Vc--), Me
  );
}
function Rt() {
  return (
    (Me = Ct < Mw ? Ze(Qo, Ct++) : 0), Fo++, Me === 10 && ((Fo = 1), Vc++), Me
  );
}
function mn() {
  return Ze(Qo, Ct);
}
function ss() {
  return Ct;
}
function ha(t, e) {
  return Ji(Qo, t, e);
}
function Xi(t) {
  switch (t) {
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
function xw(t) {
  return (Vc = Fo = 1), (Mw = rn((Qo = t))), (Ct = 0), [];
}
function Lw(t) {
  return (Qo = ""), t;
}
function cs(t) {
  return Nw(ha(Ct - 1, bd(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function eO(t) {
  for (; (Me = mn()) && Me < 33; ) Rt();
  return Xi(t) > 2 || Xi(Me) > 3 ? "" : " ";
}
function tO(t, e) {
  for (
    ;
    --e &&
    Rt() &&
    !(Me < 48 || Me > 102 || (Me > 57 && Me < 65) || (Me > 70 && Me < 97));

  );
  return ha(t, ss() + (e < 6 && mn() == 32 && Rt() == 32));
}
function bd(t) {
  for (; Rt(); )
    switch (Me) {
      case t:
        return Ct;
      case 34:
      case 39:
        t !== 34 && t !== 39 && bd(Me);
        break;
      case 40:
        t === 41 && bd(t);
        break;
      case 92:
        Rt();
        break;
    }
  return Ct;
}
function nO(t, e) {
  for (; Rt() && t + Me !== 57; ) if (t + Me === 84 && mn() === 47) break;
  return "/*" + ha(e, Ct - 1) + "*" + jc(t === 47 ? t : Rt());
}
function rO(t) {
  for (; !Xi(mn()); ) Rt();
  return ha(t, Ct);
}
function oO(t) {
  return Lw(ls("", null, null, null, [""], (t = xw(t)), 0, [0], t));
}
function ls(t, e, n, r, o, i, a, s, c) {
  for (
    var l = 0,
      u = 0,
      d = a,
      h = 0,
      v = 0,
      g = 0,
      m = 1,
      C = 1,
      f = 1,
      p = 0,
      y = "",
      w = o,
      I = i,
      k = r,
      A = y;
    C;

  )
    switch (((g = p), (p = Rt()))) {
      case 40:
        if (g != 108 && Ze(A, d - 1) == 58) {
          Rd((A += ne(cs(p), "&", "&\f")), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += cs(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += eO(g);
        break;
      case 92:
        A += tO(ss() - 1, 7);
        continue;
      case 47:
        switch (mn()) {
          case 42:
          case 47:
            ja(iO(nO(Rt(), ss()), e, n), c);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * m:
        s[l++] = rn(A) * f;
      case 125 * m:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            C = 0;
          case 59 + u:
            f == -1 && (A = ne(A, /\f/g, "")),
              v > 0 &&
                rn(A) - d &&
                ja(
                  v > 32
                    ? dg(A + ";", r, n, d - 1)
                    : dg(ne(A, " ", "") + ";", r, n, d - 2),
                  c
                );
            break;
          case 59:
            A += ";";
          default:
            if (
              (ja((k = ug(A, e, n, l, u, o, s, y, (w = []), (I = []), d)), i),
              p === 123)
            )
              if (u === 0) ls(A, e, k, k, w, i, d, s, I);
              else
                switch (h === 99 && Ze(A, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ls(
                      t,
                      k,
                      k,
                      r && ja(ug(t, k, k, 0, 0, o, s, y, o, (w = []), d), I),
                      o,
                      I,
                      d,
                      s,
                      r ? w : I
                    );
                    break;
                  default:
                    ls(A, k, k, k, [""], I, 0, s, I);
                }
        }
        (l = u = v = 0), (m = f = 1), (y = A = ""), (d = a);
        break;
      case 58:
        (d = 1 + rn(A)), (v = g);
      default:
        if (m < 1) {
          if (p == 123) --m;
          else if (p == 125 && m++ == 0 && Z1() == 125) continue;
        }
        switch (((A += jc(p)), p * m)) {
          case 38:
            f = u > 0 ? 1 : ((A += "\f"), -1);
            break;
          case 44:
            (s[l++] = (rn(A) - 1) * f), (f = 1);
            break;
          case 64:
            mn() === 45 && (A += cs(Rt())),
              (h = mn()),
              (u = d = rn((y = A += rO(ss())))),
              p++;
            break;
          case 45:
            g === 45 && rn(A) == 2 && (m = 0);
        }
    }
  return i;
}
function ug(t, e, n, r, o, i, a, s, c, l, u) {
  for (
    var d = o - 1, h = o === 0 ? i : [""], v = Uf(h), g = 0, m = 0, C = 0;
    g < r;
    ++g
  )
    for (var f = 0, p = Ji(t, d + 1, (d = W1((m = a[g])))), y = t; f < v; ++f)
      (y = Nw(m > 0 ? h[f] + " " + p : ne(p, /&\f/g, h[f]))) && (c[C++] = y);
  return Kc(t, e, n, o === 0 ? Lf : s, c, l, u);
}
function iO(t, e, n) {
  return Kc(t, e, n, Ow, jc(X1()), Ji(t, 2, -2), 0);
}
function dg(t, e, n, r) {
  return Kc(t, e, n, Df, Ji(t, 0, r), Ji(t, r + 1, -1), r);
}
function Ao(t, e) {
  for (var n = "", r = Uf(t), o = 0; o < r; o++) n += e(t[o], o, t, e) || "";
  return n;
}
function aO(t, e, n, r) {
  switch (t.type) {
    case G1:
      if (t.children.length) break;
    case K1:
    case Df:
      return (t.return = t.return || t.value);
    case Ow:
      return "";
    case Pw:
      return (t.return = t.value + "{" + Ao(t.children, r) + "}");
    case Lf:
      t.value = t.props.join(",");
  }
  return rn((n = Ao(t.children, r)))
    ? (t.return = t.value + "{" + n + "}")
    : "";
}
function sO(t) {
  var e = Uf(t);
  return function (n, r, o, i) {
    for (var a = "", s = 0; s < e; s++) a += t[s](n, r, o, i) || "";
    return a;
  };
}
function cO(t) {
  return function (e) {
    e.root || ((e = e.return) && t(e));
  };
}
function lO(t) {
  var e = Object.create(null);
  return function (n) {
    return e[n] === void 0 && (e[n] = t(n)), e[n];
  };
}
var uO = function (e, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = mn()), o === 38 && i === 12 && (n[r] = 1), !Xi(i);

    )
      Rt();
    return ha(e, Ct);
  },
  dO = function (e, n) {
    var r = -1,
      o = 44;
    do
      switch (Xi(o)) {
        case 0:
          o === 38 && mn() === 12 && (n[r] = 1), (e[r] += uO(Ct - 1, n, r));
          break;
        case 2:
          e[r] += cs(o);
          break;
        case 4:
          if (o === 44) {
            (e[++r] = mn() === 58 ? "&\f" : ""), (n[r] = e[r].length);
            break;
          }
        default:
          e[r] += jc(o);
      }
    while ((o = Rt()));
    return e;
  },
  hO = function (e, n) {
    return Lw(dO(xw(e), n));
  },
  hg = new WeakMap(),
  fO = function (e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (
        var n = e.value,
          r = e.parent,
          o = e.column === r.column && e.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(e.props.length === 1 && n.charCodeAt(0) !== 58 && !hg.get(r)) &&
        !o
      ) {
        hg.set(e, !0);
        for (
          var i = [], a = hO(n, i), s = r.props, c = 0, l = 0;
          c < a.length;
          c++
        )
          for (var u = 0; u < s.length; u++, l++)
            e.props[l] = i[c] ? a[c].replace(/&\f/g, s[u]) : s[u] + " " + a[c];
      }
    }
  },
  pO = function (e) {
    if (e.type === "decl") {
      var n = e.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((e.return = ""), (e.value = ""));
    }
  };
function Dw(t, e) {
  switch (Y1(t, e)) {
    case 5103:
      return te + "print-" + t + t;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return te + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return te + t + oc + t + ot + t + t;
    case 6828:
    case 4268:
      return te + t + ot + t + t;
    case 6165:
      return te + t + ot + "flex-" + t + t;
    case 5187:
      return (
        te + t + ne(t, /(\w+).+(:[^]+)/, te + "box-$1$2" + ot + "flex-$1$2") + t
      );
    case 5443:
      return te + t + ot + "flex-item-" + ne(t, /flex-|-self/, "") + t;
    case 4675:
      return (
        te +
        t +
        ot +
        "flex-line-pack" +
        ne(t, /align-content|flex-|-self/, "") +
        t
      );
    case 5548:
      return te + t + ot + ne(t, "shrink", "negative") + t;
    case 5292:
      return te + t + ot + ne(t, "basis", "preferred-size") + t;
    case 6060:
      return (
        te +
        "box-" +
        ne(t, "-grow", "") +
        te +
        t +
        ot +
        ne(t, "grow", "positive") +
        t
      );
    case 4554:
      return te + ne(t, /([^-])(transform)/g, "$1" + te + "$2") + t;
    case 6187:
      return (
        ne(
          ne(ne(t, /(zoom-|grab)/, te + "$1"), /(image-set)/, te + "$1"),
          t,
          ""
        ) + t
      );
    case 5495:
    case 3959:
      return ne(t, /(image-set\([^]*)/, te + "$1$`$1");
    case 4968:
      return (
        ne(
          ne(t, /(.+:)(flex-)?(.*)/, te + "box-pack:$3" + ot + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        te +
        t +
        t
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ne(t, /(.+)-inline(.+)/, te + "$1$2") + t;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (rn(t) - 1 - e > 6)
        switch (Ze(t, e + 1)) {
          case 109:
            if (Ze(t, e + 4) !== 45) break;
          case 102:
            return (
              ne(
                t,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  te +
                  "$2-$3$1" +
                  oc +
                  (Ze(t, e + 3) == 108 ? "$3" : "$2-$3")
              ) + t
            );
          case 115:
            return ~Rd(t, "stretch")
              ? Dw(ne(t, "stretch", "fill-available"), e) + t
              : t;
        }
      break;
    case 4949:
      if (Ze(t, e + 1) !== 115) break;
    case 6444:
      switch (Ze(t, rn(t) - 3 - (~Rd(t, "!important") && 10))) {
        case 107:
          return ne(t, ":", ":" + te) + t;
        case 101:
          return (
            ne(
              t,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                te +
                (Ze(t, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                te +
                "$2$3$1" +
                ot +
                "$2box$3"
            ) + t
          );
      }
      break;
    case 5936:
      switch (Ze(t, e + 11)) {
        case 114:
          return te + t + ot + ne(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return te + t + ot + ne(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 45:
          return te + t + ot + ne(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
      return te + t + ot + t + t;
  }
  return t;
}
var mO = function (e, n, r, o) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case Df:
          e.return = Dw(e.value, e.length);
          break;
        case Pw:
          return Ao([ui(e, { value: ne(e.value, "@", "@" + te) })], o);
        case Lf:
          if (e.length)
            return J1(e.props, function (i) {
              switch (Q1(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Ao(
                    [ui(e, { props: [ne(i, /:(read-\w+)/, ":" + oc + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Ao(
                    [
                      ui(e, {
                        props: [ne(i, /:(plac\w+)/, ":" + te + "input-$1")],
                      }),
                      ui(e, { props: [ne(i, /:(plac\w+)/, ":" + oc + "$1")] }),
                      ui(e, { props: [ne(i, /:(plac\w+)/, ot + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  gO = [mO],
  vO = function (e) {
    var n = e.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (m) {
        var C = m.getAttribute("data-emotion");
        C.indexOf(" ") !== -1 &&
          (document.head.appendChild(m), m.setAttribute("data-s", ""));
      });
    }
    var o = e.stylisPlugins || gO,
      i = {},
      a,
      s = [];
    (a = e.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (m) {
          for (
            var C = m.getAttribute("data-emotion").split(" "), f = 1;
            f < C.length;
            f++
          )
            i[C[f]] = !0;
          s.push(m);
        }
      );
    var c,
      l = [fO, pO];
    {
      var u,
        d = [
          aO,
          cO(function (m) {
            u.insert(m);
          }),
        ],
        h = sO(l.concat(o, d)),
        v = function (C) {
          return Ao(oO(C), h);
        };
      c = function (C, f, p, y) {
        (u = p),
          v(C ? C + "{" + f.styles + "}" : f.styles),
          y && (g.inserted[f.name] = !0);
      };
    }
    var g = {
      key: n,
      sheet: new V1({
        key: n,
        container: a,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint,
      }),
      nonce: e.nonce,
      inserted: i,
      registered: {},
      insert: c,
    };
    return g.sheet.hydrate(s), g;
  },
  Uw = { exports: {} },
  ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ye = typeof Symbol == "function" && Symbol.for,
  Ff = Ye ? Symbol.for("react.element") : 60103,
  Hf = Ye ? Symbol.for("react.portal") : 60106,
  Gc = Ye ? Symbol.for("react.fragment") : 60107,
  Wc = Ye ? Symbol.for("react.strict_mode") : 60108,
  qc = Ye ? Symbol.for("react.profiler") : 60114,
  Yc = Ye ? Symbol.for("react.provider") : 60109,
  Qc = Ye ? Symbol.for("react.context") : 60110,
  $f = Ye ? Symbol.for("react.async_mode") : 60111,
  Jc = Ye ? Symbol.for("react.concurrent_mode") : 60111,
  Xc = Ye ? Symbol.for("react.forward_ref") : 60112,
  Zc = Ye ? Symbol.for("react.suspense") : 60113,
  yO = Ye ? Symbol.for("react.suspense_list") : 60120,
  el = Ye ? Symbol.for("react.memo") : 60115,
  tl = Ye ? Symbol.for("react.lazy") : 60116,
  CO = Ye ? Symbol.for("react.block") : 60121,
  SO = Ye ? Symbol.for("react.fundamental") : 60117,
  wO = Ye ? Symbol.for("react.responder") : 60118,
  EO = Ye ? Symbol.for("react.scope") : 60119;
function Nt(t) {
  if (typeof t == "object" && t !== null) {
    var e = t.$$typeof;
    switch (e) {
      case Ff:
        switch (((t = t.type), t)) {
          case $f:
          case Jc:
          case Gc:
          case qc:
          case Wc:
          case Zc:
            return t;
          default:
            switch (((t = t && t.$$typeof), t)) {
              case Qc:
              case Xc:
              case tl:
              case el:
              case Yc:
                return t;
              default:
                return e;
            }
        }
      case Hf:
        return e;
    }
  }
}
function Fw(t) {
  return Nt(t) === Jc;
}
ae.AsyncMode = $f;
ae.ConcurrentMode = Jc;
ae.ContextConsumer = Qc;
ae.ContextProvider = Yc;
ae.Element = Ff;
ae.ForwardRef = Xc;
ae.Fragment = Gc;
ae.Lazy = tl;
ae.Memo = el;
ae.Portal = Hf;
ae.Profiler = qc;
ae.StrictMode = Wc;
ae.Suspense = Zc;
ae.isAsyncMode = function (t) {
  return Fw(t) || Nt(t) === $f;
};
ae.isConcurrentMode = Fw;
ae.isContextConsumer = function (t) {
  return Nt(t) === Qc;
};
ae.isContextProvider = function (t) {
  return Nt(t) === Yc;
};
ae.isElement = function (t) {
  return typeof t == "object" && t !== null && t.$$typeof === Ff;
};
ae.isForwardRef = function (t) {
  return Nt(t) === Xc;
};
ae.isFragment = function (t) {
  return Nt(t) === Gc;
};
ae.isLazy = function (t) {
  return Nt(t) === tl;
};
ae.isMemo = function (t) {
  return Nt(t) === el;
};
ae.isPortal = function (t) {
  return Nt(t) === Hf;
};
ae.isProfiler = function (t) {
  return Nt(t) === qc;
};
ae.isStrictMode = function (t) {
  return Nt(t) === Wc;
};
ae.isSuspense = function (t) {
  return Nt(t) === Zc;
};
ae.isValidElementType = function (t) {
  return (
    typeof t == "string" ||
    typeof t == "function" ||
    t === Gc ||
    t === Jc ||
    t === qc ||
    t === Wc ||
    t === Zc ||
    t === yO ||
    (typeof t == "object" &&
      t !== null &&
      (t.$$typeof === tl ||
        t.$$typeof === el ||
        t.$$typeof === Yc ||
        t.$$typeof === Qc ||
        t.$$typeof === Xc ||
        t.$$typeof === SO ||
        t.$$typeof === wO ||
        t.$$typeof === EO ||
        t.$$typeof === CO))
  );
};
ae.typeOf = Nt;
Uw.exports = ae;
var TO = Uw.exports,
  Hw = TO,
  IO = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  AO = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  $w = {};
$w[Hw.ForwardRef] = IO;
$w[Hw.Memo] = AO;
var kO = !0;
function _O(t, e, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      t[o] !== void 0 ? e.push(t[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var Bw = function (e, n, r) {
    var o = e.key + "-" + n.name;
    (r === !1 || kO === !1) &&
      e.registered[o] === void 0 &&
      (e.registered[o] = n.styles);
  },
  RO = function (e, n, r) {
    Bw(e, n, r);
    var o = e.key + "-" + n.name;
    if (e.inserted[n.name] === void 0) {
      var i = n;
      do e.insert(n === i ? "." + o : "", i, e.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function bO(t) {
  for (var e = 0, n, r = 0, o = t.length; o >= 4; ++r, o -= 4)
    (n =
      (t.charCodeAt(r) & 255) |
      ((t.charCodeAt(++r) & 255) << 8) |
      ((t.charCodeAt(++r) & 255) << 16) |
      ((t.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (e =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      e ^= (t.charCodeAt(r + 2) & 255) << 16;
    case 2:
      e ^= (t.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (e ^= t.charCodeAt(r) & 255),
        (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16));
  }
  return (
    (e ^= e >>> 13),
    (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)),
    ((e ^ (e >>> 15)) >>> 0).toString(36)
  );
}
var OO = {
    animationIterationCount: 1,
    aspectRatio: 1,
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
  PO = /[A-Z]|^ms/g,
  NO = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  zw = function (e) {
    return e.charCodeAt(1) === 45;
  },
  fg = function (e) {
    return e != null && typeof e != "boolean";
  },
  Zl = lO(function (t) {
    return zw(t) ? t : t.replace(PO, "-$&").toLowerCase();
  }),
  pg = function (e, n) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(NO, function (r, o, i) {
            return (on = { name: o, styles: i, next: on }), o;
          });
    }
    return OO[e] !== 1 && !zw(e) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function Zi(t, e, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (on = { name: n.name, styles: n.styles, next: on }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (on = { name: r.name, styles: r.styles, next: on }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return MO(t, e, n);
    }
    case "function": {
      if (t !== void 0) {
        var i = on,
          a = n(t);
        return (on = i), Zi(t, e, a);
      }
      break;
    }
  }
  return n;
}
function MO(t, e, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Zi(t, e, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object") fg(a) && (r += Zl(i) + ":" + pg(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && e == null)
        for (var s = 0; s < a.length; s++)
          fg(a[s]) && (r += Zl(i) + ":" + pg(i, a[s]) + ";");
      else {
        var c = Zi(t, e, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Zl(i) + ":" + c + ";";
            break;
          }
          default:
            r += i + "{" + c + "}";
        }
      }
    }
  return r;
}
var mg = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  on,
  jw = function (e, n, r) {
    if (
      e.length === 1 &&
      typeof e[0] == "object" &&
      e[0] !== null &&
      e[0].styles !== void 0
    )
      return e[0];
    var o = !0,
      i = "";
    on = void 0;
    var a = e[0];
    a == null || a.raw === void 0
      ? ((o = !1), (i += Zi(r, n, a)))
      : (i += a[0]);
    for (var s = 1; s < e.length; s++) (i += Zi(r, n, e[s])), o && (i += a[s]);
    mg.lastIndex = 0;
    for (var c = "", l; (l = mg.exec(i)) !== null; ) c += "-" + l[1];
    var u = bO(i) + c;
    return { name: u, styles: i, next: on };
  },
  xO = function (e) {
    return e();
  },
  LO = uu.useInsertionEffect ? uu.useInsertionEffect : !1,
  DO = LO || xO,
  Bf = {}.hasOwnProperty,
  Vw = S.createContext(typeof HTMLElement < "u" ? vO({ key: "css" }) : null);
Vw.Provider;
var UO = function (e) {
    return S.forwardRef(function (n, r) {
      var o = S.useContext(Vw);
      return e(n, o, r);
    });
  },
  FO = S.createContext({}),
  Od = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  HO = function (e, n) {
    var r = {};
    for (var o in n) Bf.call(n, o) && (r[o] = n[o]);
    return (r[Od] = e), r;
  },
  $O = function (e) {
    var n = e.cache,
      r = e.serialized,
      o = e.isStringTag;
    return (
      Bw(n, r, o),
      DO(function () {
        return RO(n, r, o);
      }),
      null
    );
  },
  BO = UO(function (t, e, n) {
    var r = t.css;
    typeof r == "string" && e.registered[r] !== void 0 && (r = e.registered[r]);
    var o = t[Od],
      i = [r],
      a = "";
    typeof t.className == "string"
      ? (a = _O(e.registered, i, t.className))
      : t.className != null && (a = t.className + " ");
    var s = jw(i, void 0, S.useContext(FO));
    a += e.key + "-" + s.name;
    var c = {};
    for (var l in t) Bf.call(t, l) && l !== "css" && l !== Od && (c[l] = t[l]);
    return (
      (c.ref = n),
      (c.className = a),
      S.createElement(
        S.Fragment,
        null,
        S.createElement($O, {
          cache: e,
          serialized: s,
          isStringTag: typeof o == "string",
        }),
        S.createElement(o, c)
      )
    );
  }),
  zO = BO,
  z = function (e, n) {
    var r = arguments;
    if (n == null || !Bf.call(n, "css"))
      return S.createElement.apply(void 0, r);
    var o = r.length,
      i = new Array(o);
    (i[0] = zO), (i[1] = HO(e, n));
    for (var a = 2; a < o; a++) i[a] = r[a];
    return S.createElement.apply(null, i);
  };
function zf() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return jw(e);
}
var jO = function () {
  var e = zf.apply(void 0, arguments),
    n = "animation-" + e.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + e.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
};
function VO(t) {
  if (Array.isArray(t)) return t;
}
function KO(t, e) {
  var n =
    t == null
      ? null
      : (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
  if (n != null) {
    var r,
      o,
      i,
      a,
      s = [],
      c = !0,
      l = !1;
    try {
      if (((i = (n = n.call(t)).next), e === 0)) {
        if (Object(n) !== n) return;
        c = !1;
      } else
        for (
          ;
          !(c = (r = i.call(n)).done) && (s.push(r.value), s.length !== e);
          c = !0
        );
    } catch (u) {
      (l = !0), (o = u);
    } finally {
      try {
        if (!c && n.return != null && ((a = n.return()), Object(a) !== a))
          return;
      } finally {
        if (l) throw o;
      }
    }
    return s;
  }
}
function GO() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ke(t, e) {
  return VO(t) || KO(t, e) || bw(t, e) || GO();
}
function vn(t, e) {
  if (t == null) return {};
  var n = Eb(t, e),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function WO(t, e) {
  return (
    e || (e = t.slice(0)),
    Object.freeze(
      Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
    )
  );
}
var qO = [
    "className",
    "clearValue",
    "cx",
    "getStyles",
    "getClassNames",
    "getValue",
    "hasValue",
    "isMulti",
    "isRtl",
    "options",
    "selectOption",
    "selectProps",
    "setValue",
    "theme",
  ],
  ic = function () {};
function YO(t, e) {
  return e ? (e[0] === "-" ? t + e : t + "__" + e) : t;
}
function QO(t, e) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
    o < n;
    o++
  )
    r[o - 2] = arguments[o];
  var i = [].concat(r);
  if (e && t)
    for (var a in e) e.hasOwnProperty(a) && e[a] && i.push("".concat(YO(t, a)));
  return i
    .filter(function (s) {
      return s;
    })
    .map(function (s) {
      return String(s).trim();
    })
    .join(" ");
}
var gg = function (e) {
    return aP(e)
      ? e.filter(Boolean)
      : Lr(e) === "object" && e !== null
      ? [e]
      : [];
  },
  Kw = function (e) {
    e.className,
      e.clearValue,
      e.cx,
      e.getStyles,
      e.getClassNames,
      e.getValue,
      e.hasValue,
      e.isMulti,
      e.isRtl,
      e.options,
      e.selectOption,
      e.selectProps,
      e.setValue,
      e.theme;
    var n = vn(e, qO);
    return $({}, n);
  },
  _e = function (e, n, r) {
    var o = e.cx,
      i = e.getStyles,
      a = e.getClassNames,
      s = e.className;
    return { css: i(n, e), className: o(r ?? {}, a(n, e), s) };
  };
function JO(t, e, n) {
  if (n) {
    var r = n(t, e);
    if (typeof r == "string") return r;
  }
  return t;
}
function nl(t) {
  return [document.documentElement, document.body, window].indexOf(t) > -1;
}
function XO(t) {
  return nl(t) ? window.innerHeight : t.clientHeight;
}
function Gw(t) {
  return nl(t) ? window.pageYOffset : t.scrollTop;
}
function ac(t, e) {
  if (nl(t)) {
    window.scrollTo(0, e);
    return;
  }
  t.scrollTop = e;
}
function ZO(t) {
  var e = getComputedStyle(t),
    n = e.position === "absolute",
    r = /(auto|scroll)/;
  if (e.position === "fixed") return document.documentElement;
  for (var o = t; (o = o.parentElement); )
    if (
      ((e = getComputedStyle(o)),
      !(n && e.position === "static") &&
        r.test(e.overflow + e.overflowY + e.overflowX))
    )
      return o;
  return document.documentElement;
}
function eP(t, e, n, r) {
  return n * ((t = t / r - 1) * t * t + 1) + e;
}
function Va(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200,
    r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ic,
    o = Gw(t),
    i = e - o,
    a = 10,
    s = 0;
  function c() {
    s += a;
    var l = eP(s, o, i, n);
    ac(t, l), s < n ? window.requestAnimationFrame(c) : r(t);
  }
  c();
}
function vg(t, e) {
  var n = t.getBoundingClientRect(),
    r = e.getBoundingClientRect(),
    o = e.offsetHeight / 3;
  r.bottom + o > n.bottom
    ? ac(
        t,
        Math.min(
          e.offsetTop + e.clientHeight - t.offsetHeight + o,
          t.scrollHeight
        )
      )
    : r.top - o < n.top && ac(t, Math.max(e.offsetTop - o, 0));
}
function tP(t) {
  var e = t.getBoundingClientRect();
  return {
    bottom: e.bottom,
    height: e.height,
    left: e.left,
    right: e.right,
    top: e.top,
    width: e.width,
  };
}
function yg() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function nP() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  } catch {
    return !1;
  }
}
var Ww = !1,
  rP = {
    get passive() {
      return (Ww = !0);
    },
  },
  Ka = typeof window < "u" ? window : {};
Ka.addEventListener &&
  Ka.removeEventListener &&
  (Ka.addEventListener("p", ic, rP), Ka.removeEventListener("p", ic, !1));
var oP = Ww;
function iP(t) {
  return t != null;
}
function aP(t) {
  return Array.isArray(t);
}
function Ga(t, e, n) {
  return t ? e : n;
}
var sP = function (e) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      r[o - 1] = arguments[o];
    var i = Object.entries(e).filter(function (a) {
      var s = Ke(a, 1),
        c = s[0];
      return !r.includes(c);
    });
    return i.reduce(function (a, s) {
      var c = Ke(s, 2),
        l = c[0],
        u = c[1];
      return (a[l] = u), a;
    }, {});
  },
  cP = ["children", "innerProps"],
  lP = ["children", "innerProps"];
function uP(t) {
  var e = t.maxHeight,
    n = t.menuEl,
    r = t.minHeight,
    o = t.placement,
    i = t.shouldScroll,
    a = t.isFixedPosition,
    s = t.controlHeight,
    c = ZO(n),
    l = { placement: "bottom", maxHeight: e };
  if (!n || !n.offsetParent) return l;
  var u = c.getBoundingClientRect(),
    d = u.height,
    h = n.getBoundingClientRect(),
    v = h.bottom,
    g = h.height,
    m = h.top,
    C = n.offsetParent.getBoundingClientRect(),
    f = C.top,
    p = a ? window.innerHeight : XO(c),
    y = Gw(c),
    w = parseInt(getComputedStyle(n).marginBottom, 10),
    I = parseInt(getComputedStyle(n).marginTop, 10),
    k = f - I,
    A = p - m,
    R = k + y,
    j = d - y - m,
    U = v - p + y + w,
    ee = y + m - I,
    ue = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (A >= g) return { placement: "bottom", maxHeight: e };
      if (j >= g && !a)
        return i && Va(c, U, ue), { placement: "bottom", maxHeight: e };
      if ((!a && j >= r) || (a && A >= r)) {
        i && Va(c, U, ue);
        var Re = a ? A - w : j - w;
        return { placement: "bottom", maxHeight: Re };
      }
      if (o === "auto" || a) {
        var ze = e,
          ge = a ? k : R;
        return (
          ge >= r && (ze = Math.min(ge - w - s, e)),
          { placement: "top", maxHeight: ze }
        );
      }
      if (o === "bottom")
        return i && ac(c, U), { placement: "bottom", maxHeight: e };
      break;
    case "top":
      if (k >= g) return { placement: "top", maxHeight: e };
      if (R >= g && !a)
        return i && Va(c, ee, ue), { placement: "top", maxHeight: e };
      if ((!a && R >= r) || (a && k >= r)) {
        var se = e;
        return (
          ((!a && R >= r) || (a && k >= r)) && (se = a ? k - I : R - I),
          i && Va(c, ee, ue),
          { placement: "top", maxHeight: se }
        );
      }
      return { placement: "bottom", maxHeight: e };
    default:
      throw new Error('Invalid placement provided "'.concat(o, '".'));
  }
  return l;
}
function dP(t) {
  var e = { bottom: "top", top: "bottom" };
  return t ? e[t] : "bottom";
}
var qw = function (e) {
    return e === "auto" ? "bottom" : e;
  },
  hP = function (e, n) {
    var r,
      o = e.placement,
      i = e.theme,
      a = i.borderRadius,
      s = i.spacing,
      c = i.colors;
    return $(
      ((r = { label: "menu" }),
      mo(r, dP(o), "100%"),
      mo(r, "position", "absolute"),
      mo(r, "width", "100%"),
      mo(r, "zIndex", 1),
      r),
      n
        ? {}
        : {
            backgroundColor: c.neutral0,
            borderRadius: a,
            boxShadow:
              "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
            marginBottom: s.menuGutter,
            marginTop: s.menuGutter,
          }
    );
  },
  Yw = S.createContext(null),
  fP = function (e) {
    var n = e.children,
      r = e.minMenuHeight,
      o = e.maxMenuHeight,
      i = e.menuPlacement,
      a = e.menuPosition,
      s = e.menuShouldScrollIntoView,
      c = e.theme,
      l = S.useContext(Yw) || {},
      u = l.setPortalPlacement,
      d = S.useRef(null),
      h = S.useState(o),
      v = Ke(h, 2),
      g = v[0],
      m = v[1],
      C = S.useState(null),
      f = Ke(C, 2),
      p = f[0],
      y = f[1],
      w = c.spacing.controlHeight;
    return (
      Td(
        function () {
          var I = d.current;
          if (I) {
            var k = a === "fixed",
              A = s && !k,
              R = uP({
                maxHeight: o,
                menuEl: I,
                minHeight: r,
                placement: i,
                shouldScroll: A,
                isFixedPosition: k,
                controlHeight: w,
              });
            m(R.maxHeight), y(R.placement), u == null || u(R.placement);
          }
        },
        [o, i, a, s, r, u, w]
      ),
      n({
        ref: d,
        placerProps: $($({}, e), {}, { placement: p || qw(i), maxHeight: g }),
      })
    );
  },
  pP = function (e) {
    var n = e.children,
      r = e.innerRef,
      o = e.innerProps;
    return z("div", G({}, _e(e, "menu", { menu: !0 }), { ref: r }, o), n);
  },
  mP = pP,
  gP = function (e, n) {
    var r = e.maxHeight,
      o = e.theme.spacing.baseUnit;
    return $(
      {
        maxHeight: r,
        overflowY: "auto",
        position: "relative",
        WebkitOverflowScrolling: "touch",
      },
      n ? {} : { paddingBottom: o, paddingTop: o }
    );
  },
  vP = function (e) {
    var n = e.children,
      r = e.innerProps,
      o = e.innerRef,
      i = e.isMulti;
    return z(
      "div",
      G(
        {},
        _e(e, "menuList", { "menu-list": !0, "menu-list--is-multi": i }),
        { ref: o },
        r
      ),
      n
    );
  },
  Qw = function (e, n) {
    var r = e.theme,
      o = r.spacing.baseUnit,
      i = r.colors;
    return $(
      { textAlign: "center" },
      n
        ? {}
        : {
            color: i.neutral40,
            padding: "".concat(o * 2, "px ").concat(o * 3, "px"),
          }
    );
  },
  yP = Qw,
  CP = Qw,
  SP = function (e) {
    var n = e.children,
      r = n === void 0 ? "No options" : n,
      o = e.innerProps,
      i = vn(e, cP);
    return z(
      "div",
      G(
        {},
        _e(
          $($({}, i), {}, { children: r, innerProps: o }),
          "noOptionsMessage",
          { "menu-notice": !0, "menu-notice--no-options": !0 }
        ),
        o
      ),
      r
    );
  },
  wP = function (e) {
    var n = e.children,
      r = n === void 0 ? "Loading..." : n,
      o = e.innerProps,
      i = vn(e, lP);
    return z(
      "div",
      G(
        {},
        _e($($({}, i), {}, { children: r, innerProps: o }), "loadingMessage", {
          "menu-notice": !0,
          "menu-notice--loading": !0,
        }),
        o
      ),
      r
    );
  },
  EP = function (e) {
    var n = e.rect,
      r = e.offset,
      o = e.position;
    return { left: n.left, position: o, top: r, width: n.width, zIndex: 1 };
  },
  TP = function (e) {
    var n = e.appendTo,
      r = e.children,
      o = e.controlElement,
      i = e.innerProps,
      a = e.menuPlacement,
      s = e.menuPosition,
      c = S.useRef(null),
      l = S.useRef(null),
      u = S.useState(qw(a)),
      d = Ke(u, 2),
      h = d[0],
      v = d[1],
      g = S.useMemo(function () {
        return { setPortalPlacement: v };
      }, []),
      m = S.useState(null),
      C = Ke(m, 2),
      f = C[0],
      p = C[1],
      y = S.useCallback(
        function () {
          if (o) {
            var A = tP(o),
              R = s === "fixed" ? 0 : window.pageYOffset,
              j = A[h] + R;
            (j !== (f == null ? void 0 : f.offset) ||
              A.left !== (f == null ? void 0 : f.rect.left) ||
              A.width !== (f == null ? void 0 : f.rect.width)) &&
              p({ offset: j, rect: A });
          }
        },
        [
          o,
          s,
          h,
          f == null ? void 0 : f.offset,
          f == null ? void 0 : f.rect.left,
          f == null ? void 0 : f.rect.width,
        ]
      );
    Td(
      function () {
        y();
      },
      [y]
    );
    var w = S.useCallback(
      function () {
        typeof l.current == "function" && (l.current(), (l.current = null)),
          o &&
            c.current &&
            (l.current = ib(o, c.current, y, {
              elementResize: "ResizeObserver" in window,
            }));
      },
      [o, y]
    );
    Td(
      function () {
        w();
      },
      [w]
    );
    var I = S.useCallback(
      function (A) {
        (c.current = A), w();
      },
      [w]
    );
    if ((!n && s !== "fixed") || !f) return null;
    var k = z(
      "div",
      G(
        { ref: I },
        _e(
          $($({}, e), {}, { offset: f.offset, position: s, rect: f.rect }),
          "menuPortal",
          { "menu-portal": !0 }
        ),
        i
      ),
      r
    );
    return z(Yw.Provider, { value: g }, n ? gf.createPortal(k, n) : k);
  },
  IP = function (e) {
    var n = e.isDisabled,
      r = e.isRtl;
    return {
      label: "container",
      direction: r ? "rtl" : void 0,
      pointerEvents: n ? "none" : void 0,
      position: "relative",
    };
  },
  AP = function (e) {
    var n = e.children,
      r = e.innerProps,
      o = e.isDisabled,
      i = e.isRtl;
    return z(
      "div",
      G({}, _e(e, "container", { "--is-disabled": o, "--is-rtl": i }), r),
      n
    );
  },
  kP = function (e, n) {
    var r = e.theme.spacing,
      o = e.isMulti,
      i = e.hasValue,
      a = e.selectProps.controlShouldRenderValue;
    return $(
      {
        alignItems: "center",
        display: o && i && a ? "flex" : "grid",
        flex: 1,
        flexWrap: "wrap",
        WebkitOverflowScrolling: "touch",
        position: "relative",
        overflow: "hidden",
      },
      n
        ? {}
        : {
            padding: ""
              .concat(r.baseUnit / 2, "px ")
              .concat(r.baseUnit * 2, "px"),
          }
    );
  },
  _P = function (e) {
    var n = e.children,
      r = e.innerProps,
      o = e.isMulti,
      i = e.hasValue;
    return z(
      "div",
      G(
        {},
        _e(e, "valueContainer", {
          "value-container": !0,
          "value-container--is-multi": o,
          "value-container--has-value": i,
        }),
        r
      ),
      n
    );
  },
  RP = function () {
    return {
      alignItems: "center",
      alignSelf: "stretch",
      display: "flex",
      flexShrink: 0,
    };
  },
  bP = function (e) {
    var n = e.children,
      r = e.innerProps;
    return z(
      "div",
      G({}, _e(e, "indicatorsContainer", { indicators: !0 }), r),
      n
    );
  },
  Cg,
  OP = ["size"],
  PP = ["innerProps", "isRtl", "size"],
  NP = {
    name: "8mmkcg",
    styles:
      "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0",
  },
  Jw = function (e) {
    var n = e.size,
      r = vn(e, OP);
    return z(
      "svg",
      G(
        {
          height: n,
          width: n,
          viewBox: "0 0 20 20",
          "aria-hidden": "true",
          focusable: "false",
          css: NP,
        },
        r
      )
    );
  },
  jf = function (e) {
    return z(
      Jw,
      G({ size: 20 }, e),
      z("path", {
        d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z",
      })
    );
  },
  Xw = function (e) {
    return z(
      Jw,
      G({ size: 20 }, e),
      z("path", {
        d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z",
      })
    );
  },
  Zw = function (e, n) {
    var r = e.isFocused,
      o = e.theme,
      i = o.spacing.baseUnit,
      a = o.colors;
    return $(
      {
        label: "indicatorContainer",
        display: "flex",
        transition: "color 150ms",
      },
      n
        ? {}
        : {
            color: r ? a.neutral60 : a.neutral20,
            padding: i * 2,
            ":hover": { color: r ? a.neutral80 : a.neutral40 },
          }
    );
  },
  MP = Zw,
  xP = function (e) {
    var n = e.children,
      r = e.innerProps;
    return z(
      "div",
      G(
        {},
        _e(e, "dropdownIndicator", { indicator: !0, "dropdown-indicator": !0 }),
        r
      ),
      n || z(Xw, null)
    );
  },
  LP = Zw,
  DP = function (e) {
    var n = e.children,
      r = e.innerProps;
    return z(
      "div",
      G(
        {},
        _e(e, "clearIndicator", { indicator: !0, "clear-indicator": !0 }),
        r
      ),
      n || z(jf, null)
    );
  },
  UP = function (e, n) {
    var r = e.isDisabled,
      o = e.theme,
      i = o.spacing.baseUnit,
      a = o.colors;
    return $(
      { label: "indicatorSeparator", alignSelf: "stretch", width: 1 },
      n
        ? {}
        : {
            backgroundColor: r ? a.neutral10 : a.neutral20,
            marginBottom: i * 2,
            marginTop: i * 2,
          }
    );
  },
  FP = function (e) {
    var n = e.innerProps;
    return z(
      "span",
      G({}, n, _e(e, "indicatorSeparator", { "indicator-separator": !0 }))
    );
  },
  HP = jO(
    Cg ||
      (Cg = WO([
        `
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`,
      ]))
  ),
  $P = function (e, n) {
    var r = e.isFocused,
      o = e.size,
      i = e.theme,
      a = i.colors,
      s = i.spacing.baseUnit;
    return $(
      {
        label: "loadingIndicator",
        display: "flex",
        transition: "color 150ms",
        alignSelf: "center",
        fontSize: o,
        lineHeight: 1,
        marginRight: o,
        textAlign: "center",
        verticalAlign: "middle",
      },
      n ? {} : { color: r ? a.neutral60 : a.neutral20, padding: s * 2 }
    );
  },
  eu = function (e) {
    var n = e.delay,
      r = e.offset;
    return z("span", {
      css: zf(
        {
          animation: ""
            .concat(HP, " 1s ease-in-out ")
            .concat(n, "ms infinite;"),
          backgroundColor: "currentColor",
          borderRadius: "1em",
          display: "inline-block",
          marginLeft: r ? "1em" : void 0,
          height: "1em",
          verticalAlign: "top",
          width: "1em",
        },
        "",
        ""
      ),
    });
  },
  BP = function (e) {
    var n = e.innerProps,
      r = e.isRtl,
      o = e.size,
      i = o === void 0 ? 4 : o,
      a = vn(e, PP);
    return z(
      "div",
      G(
        {},
        _e(
          $($({}, a), {}, { innerProps: n, isRtl: r, size: i }),
          "loadingIndicator",
          { indicator: !0, "loading-indicator": !0 }
        ),
        n
      ),
      z(eu, { delay: 0, offset: r }),
      z(eu, { delay: 160, offset: !0 }),
      z(eu, { delay: 320, offset: !r })
    );
  },
  zP = function (e, n) {
    var r = e.isDisabled,
      o = e.isFocused,
      i = e.theme,
      a = i.colors,
      s = i.borderRadius,
      c = i.spacing;
    return $(
      {
        label: "control",
        alignItems: "center",
        cursor: "default",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        minHeight: c.controlHeight,
        outline: "0 !important",
        position: "relative",
        transition: "all 100ms",
      },
      n
        ? {}
        : {
            backgroundColor: r ? a.neutral5 : a.neutral0,
            borderColor: r ? a.neutral10 : o ? a.primary : a.neutral20,
            borderRadius: s,
            borderStyle: "solid",
            borderWidth: 1,
            boxShadow: o ? "0 0 0 1px ".concat(a.primary) : void 0,
            "&:hover": { borderColor: o ? a.primary : a.neutral30 },
          }
    );
  },
  jP = function (e) {
    var n = e.children,
      r = e.isDisabled,
      o = e.isFocused,
      i = e.innerRef,
      a = e.innerProps,
      s = e.menuIsOpen;
    return z(
      "div",
      G(
        { ref: i },
        _e(e, "control", {
          control: !0,
          "control--is-disabled": r,
          "control--is-focused": o,
          "control--menu-is-open": s,
        }),
        a,
        { "aria-disabled": r || void 0 }
      ),
      n
    );
  },
  VP = jP,
  KP = ["data"],
  GP = function (e, n) {
    var r = e.theme.spacing;
    return n
      ? {}
      : { paddingBottom: r.baseUnit * 2, paddingTop: r.baseUnit * 2 };
  },
  WP = function (e) {
    var n = e.children,
      r = e.cx,
      o = e.getStyles,
      i = e.getClassNames,
      a = e.Heading,
      s = e.headingProps,
      c = e.innerProps,
      l = e.label,
      u = e.theme,
      d = e.selectProps;
    return z(
      "div",
      G({}, _e(e, "group", { group: !0 }), c),
      z(
        a,
        G({}, s, {
          selectProps: d,
          theme: u,
          getStyles: o,
          getClassNames: i,
          cx: r,
        }),
        l
      ),
      z("div", null, n)
    );
  },
  qP = function (e, n) {
    var r = e.theme,
      o = r.colors,
      i = r.spacing;
    return $(
      { label: "group", cursor: "default", display: "block" },
      n
        ? {}
        : {
            color: o.neutral40,
            fontSize: "75%",
            fontWeight: 500,
            marginBottom: "0.25em",
            paddingLeft: i.baseUnit * 3,
            paddingRight: i.baseUnit * 3,
            textTransform: "uppercase",
          }
    );
  },
  YP = function (e) {
    var n = Kw(e);
    n.data;
    var r = vn(n, KP);
    return z("div", G({}, _e(e, "groupHeading", { "group-heading": !0 }), r));
  },
  QP = WP,
  JP = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
  XP = function (e, n) {
    var r = e.isDisabled,
      o = e.value,
      i = e.theme,
      a = i.spacing,
      s = i.colors;
    return $(
      $(
        {
          visibility: r ? "hidden" : "visible",
          transform: o ? "translateZ(0)" : "",
        },
        ZP
      ),
      n
        ? {}
        : {
            margin: a.baseUnit / 2,
            paddingBottom: a.baseUnit / 2,
            paddingTop: a.baseUnit / 2,
            color: s.neutral80,
          }
    );
  },
  eE = {
    gridArea: "1 / 2",
    font: "inherit",
    minWidth: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0,
  },
  ZP = {
    flex: "1 1 auto",
    display: "inline-grid",
    gridArea: "1 / 1 / 2 / 3",
    gridTemplateColumns: "0 min-content",
    "&:after": $(
      {
        content: 'attr(data-value) " "',
        visibility: "hidden",
        whiteSpace: "pre",
      },
      eE
    ),
  },
  eN = function (e) {
    return $(
      {
        label: "input",
        color: "inherit",
        background: 0,
        opacity: e ? 0 : 1,
        width: "100%",
      },
      eE
    );
  },
  tN = function (e) {
    var n = e.cx,
      r = e.value,
      o = Kw(e),
      i = o.innerRef,
      a = o.isDisabled,
      s = o.isHidden,
      c = o.inputClassName,
      l = vn(o, JP);
    return z(
      "div",
      G({}, _e(e, "input", { "input-container": !0 }), {
        "data-value": r || "",
      }),
      z(
        "input",
        G(
          { className: n({ input: !0 }, c), ref: i, style: eN(s), disabled: a },
          l
        )
      )
    );
  },
  nN = tN,
  rN = function (e, n) {
    var r = e.theme,
      o = r.spacing,
      i = r.borderRadius,
      a = r.colors;
    return $(
      { label: "multiValue", display: "flex", minWidth: 0 },
      n
        ? {}
        : {
            backgroundColor: a.neutral10,
            borderRadius: i / 2,
            margin: o.baseUnit / 2,
          }
    );
  },
  oN = function (e, n) {
    var r = e.theme,
      o = r.borderRadius,
      i = r.colors,
      a = e.cropWithEllipsis;
    return $(
      {
        overflow: "hidden",
        textOverflow: a || a === void 0 ? "ellipsis" : void 0,
        whiteSpace: "nowrap",
      },
      n
        ? {}
        : {
            borderRadius: o / 2,
            color: i.neutral80,
            fontSize: "85%",
            padding: 3,
            paddingLeft: 6,
          }
    );
  },
  iN = function (e, n) {
    var r = e.theme,
      o = r.spacing,
      i = r.borderRadius,
      a = r.colors,
      s = e.isFocused;
    return $(
      { alignItems: "center", display: "flex" },
      n
        ? {}
        : {
            borderRadius: i / 2,
            backgroundColor: s ? a.dangerLight : void 0,
            paddingLeft: o.baseUnit,
            paddingRight: o.baseUnit,
            ":hover": { backgroundColor: a.dangerLight, color: a.danger },
          }
    );
  },
  tE = function (e) {
    var n = e.children,
      r = e.innerProps;
    return z("div", r, n);
  },
  aN = tE,
  sN = tE;
function cN(t) {
  var e = t.children,
    n = t.innerProps;
  return z("div", G({ role: "button" }, n), e || z(jf, { size: 14 }));
}
var lN = function (e) {
    var n = e.children,
      r = e.components,
      o = e.data,
      i = e.innerProps,
      a = e.isDisabled,
      s = e.removeProps,
      c = e.selectProps,
      l = r.Container,
      u = r.Label,
      d = r.Remove;
    return z(
      l,
      {
        data: o,
        innerProps: $(
          $(
            {},
            _e(e, "multiValue", {
              "multi-value": !0,
              "multi-value--is-disabled": a,
            })
          ),
          i
        ),
        selectProps: c,
      },
      z(
        u,
        {
          data: o,
          innerProps: $(
            {},
            _e(e, "multiValueLabel", { "multi-value__label": !0 })
          ),
          selectProps: c,
        },
        n
      ),
      z(d, {
        data: o,
        innerProps: $(
          $({}, _e(e, "multiValueRemove", { "multi-value__remove": !0 })),
          {},
          { "aria-label": "Remove ".concat(n || "option") },
          s
        ),
        selectProps: c,
      })
    );
  },
  uN = lN,
  dN = function (e, n) {
    var r = e.isDisabled,
      o = e.isFocused,
      i = e.isSelected,
      a = e.theme,
      s = a.spacing,
      c = a.colors;
    return $(
      {
        label: "option",
        cursor: "default",
        display: "block",
        fontSize: "inherit",
        width: "100%",
        userSelect: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      },
      n
        ? {}
        : {
            backgroundColor: i ? c.primary : o ? c.primary25 : "transparent",
            color: r ? c.neutral20 : i ? c.neutral0 : "inherit",
            padding: ""
              .concat(s.baseUnit * 2, "px ")
              .concat(s.baseUnit * 3, "px"),
            ":active": {
              backgroundColor: r ? void 0 : i ? c.primary : c.primary50,
            },
          }
    );
  },
  hN = function (e) {
    var n = e.children,
      r = e.isDisabled,
      o = e.isFocused,
      i = e.isSelected,
      a = e.innerRef,
      s = e.innerProps;
    return z(
      "div",
      G(
        {},
        _e(e, "option", {
          option: !0,
          "option--is-disabled": r,
          "option--is-focused": o,
          "option--is-selected": i,
        }),
        { ref: a, "aria-disabled": r },
        s
      ),
      n
    );
  },
  fN = hN,
  pN = function (e, n) {
    var r = e.theme,
      o = r.spacing,
      i = r.colors;
    return $(
      { label: "placeholder", gridArea: "1 / 1 / 2 / 3" },
      n
        ? {}
        : {
            color: i.neutral50,
            marginLeft: o.baseUnit / 2,
            marginRight: o.baseUnit / 2,
          }
    );
  },
  mN = function (e) {
    var n = e.children,
      r = e.innerProps;
    return z("div", G({}, _e(e, "placeholder", { placeholder: !0 }), r), n);
  },
  gN = mN,
  vN = function (e, n) {
    var r = e.isDisabled,
      o = e.theme,
      i = o.spacing,
      a = o.colors;
    return $(
      {
        label: "singleValue",
        gridArea: "1 / 1 / 2 / 3",
        maxWidth: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      n
        ? {}
        : {
            color: r ? a.neutral40 : a.neutral80,
            marginLeft: i.baseUnit / 2,
            marginRight: i.baseUnit / 2,
          }
    );
  },
  yN = function (e) {
    var n = e.children,
      r = e.isDisabled,
      o = e.innerProps;
    return z(
      "div",
      G(
        {},
        _e(e, "singleValue", {
          "single-value": !0,
          "single-value--is-disabled": r,
        }),
        o
      ),
      n
    );
  },
  CN = yN,
  SN = {
    ClearIndicator: DP,
    Control: VP,
    DropdownIndicator: xP,
    DownChevron: Xw,
    CrossIcon: jf,
    Group: QP,
    GroupHeading: YP,
    IndicatorsContainer: bP,
    IndicatorSeparator: FP,
    Input: nN,
    LoadingIndicator: BP,
    Menu: mP,
    MenuList: vP,
    MenuPortal: TP,
    LoadingMessage: wP,
    NoOptionsMessage: SP,
    MultiValue: uN,
    MultiValueContainer: aN,
    MultiValueLabel: sN,
    MultiValueRemove: cN,
    Option: fN,
    Placeholder: gN,
    SelectContainer: AP,
    SingleValue: CN,
    ValueContainer: _P,
  },
  wN = function (e) {
    return $($({}, SN), e.components);
  },
  Sg =
    Number.isNaN ||
    function (e) {
      return typeof e == "number" && e !== e;
    };
function EN(t, e) {
  return !!(t === e || (Sg(t) && Sg(e)));
}
function TN(t, e) {
  if (t.length !== e.length) return !1;
  for (var n = 0; n < t.length; n++) if (!EN(t[n], e[n])) return !1;
  return !0;
}
function IN(t, e) {
  e === void 0 && (e = TN);
  var n = null;
  function r() {
    for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
    if (n && n.lastThis === this && e(o, n.lastArgs)) return n.lastResult;
    var a = t.apply(this, o);
    return (n = { lastResult: a, lastArgs: o, lastThis: this }), a;
  }
  return (
    (r.clear = function () {
      n = null;
    }),
    r
  );
}
var AN = {
    name: "7pg0cj-a11yText",
    styles:
      "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap",
  },
  kN = function (e) {
    return z("span", G({ css: AN }, e));
  },
  wg = kN,
  _N = {
    guidance: function (e) {
      var n = e.isSearchable,
        r = e.isMulti,
        o = e.tabSelectsValue,
        i = e.context,
        a = e.isInitialFocus;
      switch (i) {
        case "menu":
          return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(
            o ? ", press Tab to select the option and exit the menu" : "",
            "."
          );
        case "input":
          return a
            ? ""
                .concat(e["aria-label"] || "Select", " is focused ")
                .concat(
                  n ? ",type to refine list" : "",
                  ", press Down to open the menu, "
                )
                .concat(r ? " press left to focus selected values" : "")
            : "";
        case "value":
          return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
        default:
          return "";
      }
    },
    onChange: function (e) {
      var n = e.action,
        r = e.label,
        o = r === void 0 ? "" : r,
        i = e.labels,
        a = e.isDisabled;
      switch (n) {
        case "deselect-option":
        case "pop-value":
        case "remove-value":
          return "option ".concat(o, ", deselected.");
        case "clear":
          return "All selected options have been cleared.";
        case "initial-input-focus":
          return "option"
            .concat(i.length > 1 ? "s" : "", " ")
            .concat(i.join(","), ", selected.");
        case "select-option":
          return a
            ? "option ".concat(o, " is disabled. Select another option.")
            : "option ".concat(o, ", selected.");
        default:
          return "";
      }
    },
    onFocus: function (e) {
      var n = e.context,
        r = e.focused,
        o = e.options,
        i = e.label,
        a = i === void 0 ? "" : i,
        s = e.selectValue,
        c = e.isDisabled,
        l = e.isSelected,
        u = e.isAppleDevice,
        d = function (m, C) {
          return m && m.length
            ? "".concat(m.indexOf(C) + 1, " of ").concat(m.length)
            : "";
        };
      if (n === "value" && s)
        return "value ".concat(a, " focused, ").concat(d(s, r), ".");
      if (n === "menu" && u) {
        var h = c ? " disabled" : "",
          v = "".concat(l ? " selected" : "").concat(h);
        return "".concat(a).concat(v, ", ").concat(d(o, r), ".");
      }
      return "";
    },
    onFilter: function (e) {
      var n = e.inputValue,
        r = e.resultsMessage;
      return "".concat(r).concat(n ? " for search term " + n : "", ".");
    },
  },
  RN = function (e) {
    var n = e.ariaSelection,
      r = e.focusedOption,
      o = e.focusedValue,
      i = e.focusableOptions,
      a = e.isFocused,
      s = e.selectValue,
      c = e.selectProps,
      l = e.id,
      u = e.isAppleDevice,
      d = c.ariaLiveMessages,
      h = c.getOptionLabel,
      v = c.inputValue,
      g = c.isMulti,
      m = c.isOptionDisabled,
      C = c.isSearchable,
      f = c.menuIsOpen,
      p = c.options,
      y = c.screenReaderStatus,
      w = c.tabSelectsValue,
      I = c.isLoading,
      k = c["aria-label"],
      A = c["aria-live"],
      R = S.useMemo(
        function () {
          return $($({}, _N), d || {});
        },
        [d]
      ),
      j = S.useMemo(
        function () {
          var ge = "";
          if (n && R.onChange) {
            var se = n.option,
              je = n.options,
              M = n.removedValue,
              B = n.removedValues,
              V = n.value,
              re = function (ft) {
                return Array.isArray(ft) ? null : ft;
              },
              q = M || se || re(V),
              Ee = q ? h(q) : "",
              Te = je || B || void 0,
              Oe = Te ? Te.map(h) : [],
              ve = $({ isDisabled: q && m(q, s), label: Ee, labels: Oe }, n);
            ge = R.onChange(ve);
          }
          return ge;
        },
        [n, R, m, s, h]
      ),
      U = S.useMemo(
        function () {
          var ge = "",
            se = r || o,
            je = !!(r && s && s.includes(r));
          if (se && R.onFocus) {
            var M = {
              focused: se,
              label: h(se),
              isDisabled: m(se, s),
              isSelected: je,
              options: i,
              context: se === r ? "menu" : "value",
              selectValue: s,
              isAppleDevice: u,
            };
            ge = R.onFocus(M);
          }
          return ge;
        },
        [r, o, h, m, R, i, s, u]
      ),
      ee = S.useMemo(
        function () {
          var ge = "";
          if (f && p.length && !I && R.onFilter) {
            var se = y({ count: i.length });
            ge = R.onFilter({ inputValue: v, resultsMessage: se });
          }
          return ge;
        },
        [i, v, f, R, p, y, I]
      ),
      ue = (n == null ? void 0 : n.action) === "initial-input-focus",
      Re = S.useMemo(
        function () {
          var ge = "";
          if (R.guidance) {
            var se = o ? "value" : f ? "menu" : "input";
            ge = R.guidance({
              "aria-label": k,
              context: se,
              isDisabled: r && m(r, s),
              isMulti: g,
              isSearchable: C,
              tabSelectsValue: w,
              isInitialFocus: ue,
            });
          }
          return ge;
        },
        [k, r, o, g, m, C, f, R, s, w, ue]
      ),
      ze = z(
        S.Fragment,
        null,
        z("span", { id: "aria-selection" }, j),
        z("span", { id: "aria-focused" }, U),
        z("span", { id: "aria-results" }, ee),
        z("span", { id: "aria-guidance" }, Re)
      );
    return z(
      S.Fragment,
      null,
      z(wg, { id: l }, ue && ze),
      z(
        wg,
        {
          "aria-live": A,
          "aria-atomic": "false",
          "aria-relevant": "additions text",
          role: "log",
        },
        a && !ue && ze
      )
    );
  },
  bN = RN,
  Pd = [
    { base: "A", letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ" },
    { base: "AA", letters: "Ꜳ" },
    { base: "AE", letters: "ÆǼǢ" },
    { base: "AO", letters: "Ꜵ" },
    { base: "AU", letters: "Ꜷ" },
    { base: "AV", letters: "ꜸꜺ" },
    { base: "AY", letters: "Ꜽ" },
    { base: "B", letters: "BⒷＢḂḄḆɃƂƁ" },
    { base: "C", letters: "CⒸＣĆĈĊČÇḈƇȻꜾ" },
    { base: "D", letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ" },
    { base: "DZ", letters: "ǱǄ" },
    { base: "Dz", letters: "ǲǅ" },
    { base: "E", letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ" },
    { base: "F", letters: "FⒻＦḞƑꝻ" },
    { base: "G", letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ" },
    { base: "H", letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ" },
    { base: "I", letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ" },
    { base: "J", letters: "JⒿＪĴɈ" },
    { base: "K", letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ" },
    { base: "L", letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ" },
    { base: "LJ", letters: "Ǉ" },
    { base: "Lj", letters: "ǈ" },
    { base: "M", letters: "MⓂＭḾṀṂⱮƜ" },
    { base: "N", letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ" },
    { base: "NJ", letters: "Ǌ" },
    { base: "Nj", letters: "ǋ" },
    { base: "O", letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ" },
    { base: "OI", letters: "Ƣ" },
    { base: "OO", letters: "Ꝏ" },
    { base: "OU", letters: "Ȣ" },
    { base: "P", letters: "PⓅＰṔṖƤⱣꝐꝒꝔ" },
    { base: "Q", letters: "QⓆＱꝖꝘɊ" },
    { base: "R", letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ" },
    { base: "S", letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ" },
    { base: "T", letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ" },
    { base: "TZ", letters: "Ꜩ" },
    { base: "U", letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ" },
    { base: "V", letters: "VⓋＶṼṾƲꝞɅ" },
    { base: "VY", letters: "Ꝡ" },
    { base: "W", letters: "WⓌＷẀẂŴẆẄẈⱲ" },
    { base: "X", letters: "XⓍＸẊẌ" },
    { base: "Y", letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ" },
    { base: "Z", letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ" },
    { base: "a", letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ" },
    { base: "aa", letters: "ꜳ" },
    { base: "ae", letters: "æǽǣ" },
    { base: "ao", letters: "ꜵ" },
    { base: "au", letters: "ꜷ" },
    { base: "av", letters: "ꜹꜻ" },
    { base: "ay", letters: "ꜽ" },
    { base: "b", letters: "bⓑｂḃḅḇƀƃɓ" },
    { base: "c", letters: "cⓒｃćĉċčçḉƈȼꜿↄ" },
    { base: "d", letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ" },
    { base: "dz", letters: "ǳǆ" },
    { base: "e", letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ" },
    { base: "f", letters: "fⓕｆḟƒꝼ" },
    { base: "g", letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ" },
    { base: "h", letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ" },
    { base: "hv", letters: "ƕ" },
    { base: "i", letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı" },
    { base: "j", letters: "jⓙｊĵǰɉ" },
    { base: "k", letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ" },
    { base: "l", letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ" },
    { base: "lj", letters: "ǉ" },
    { base: "m", letters: "mⓜｍḿṁṃɱɯ" },
    { base: "n", letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ" },
    { base: "nj", letters: "ǌ" },
    { base: "o", letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ" },
    { base: "oi", letters: "ƣ" },
    { base: "ou", letters: "ȣ" },
    { base: "oo", letters: "ꝏ" },
    { base: "p", letters: "pⓟｐṕṗƥᵽꝑꝓꝕ" },
    { base: "q", letters: "qⓠｑɋꝗꝙ" },
    { base: "r", letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ" },
    { base: "s", letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ" },
    { base: "t", letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ" },
    { base: "tz", letters: "ꜩ" },
    { base: "u", letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ" },
    { base: "v", letters: "vⓥｖṽṿʋꝟʌ" },
    { base: "vy", letters: "ꝡ" },
    { base: "w", letters: "wⓦｗẁẃŵẇẅẘẉⱳ" },
    { base: "x", letters: "xⓧｘẋẍ" },
    { base: "y", letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ" },
    { base: "z", letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ" },
  ],
  ON = new RegExp(
    "[" +
      Pd.map(function (t) {
        return t.letters;
      }).join("") +
      "]",
    "g"
  ),
  nE = {};
for (var tu = 0; tu < Pd.length; tu++)
  for (var nu = Pd[tu], ru = 0; ru < nu.letters.length; ru++)
    nE[nu.letters[ru]] = nu.base;
var rE = function (e) {
    return e.replace(ON, function (n) {
      return nE[n];
    });
  },
  PN = IN(rE),
  Eg = function (e) {
    return e.replace(/^\s+|\s+$/g, "");
  },
  NN = function (e) {
    return "".concat(e.label, " ").concat(e.value);
  },
  MN = function (e) {
    return function (n, r) {
      if (n.data.__isNew__) return !0;
      var o = $(
          {
            ignoreCase: !0,
            ignoreAccents: !0,
            stringify: NN,
            trim: !0,
            matchFrom: "any",
          },
          e
        ),
        i = o.ignoreCase,
        a = o.ignoreAccents,
        s = o.stringify,
        c = o.trim,
        l = o.matchFrom,
        u = c ? Eg(r) : r,
        d = c ? Eg(s(n)) : s(n);
      return (
        i && ((u = u.toLowerCase()), (d = d.toLowerCase())),
        a && ((u = PN(u)), (d = rE(d))),
        l === "start" ? d.substr(0, u.length) === u : d.indexOf(u) > -1
      );
    };
  },
  xN = ["innerRef"];
function LN(t) {
  var e = t.innerRef,
    n = vn(t, xN),
    r = sP(n, "onExited", "in", "enter", "exit", "appear");
  return z(
    "input",
    G({ ref: e }, r, {
      css: zf(
        {
          label: "dummyInput",
          background: 0,
          border: 0,
          caretColor: "transparent",
          fontSize: "inherit",
          gridArea: "1 / 1 / 2 / 3",
          outline: 0,
          padding: 0,
          width: 1,
          color: "transparent",
          left: -100,
          opacity: 0,
          position: "relative",
          transform: "scale(.01)",
        },
        "",
        ""
      ),
    })
  );
}
var DN = function (e) {
  e.cancelable && e.preventDefault(), e.stopPropagation();
};
function UN(t) {
  var e = t.isEnabled,
    n = t.onBottomArrive,
    r = t.onBottomLeave,
    o = t.onTopArrive,
    i = t.onTopLeave,
    a = S.useRef(!1),
    s = S.useRef(!1),
    c = S.useRef(0),
    l = S.useRef(null),
    u = S.useCallback(
      function (C, f) {
        if (l.current !== null) {
          var p = l.current,
            y = p.scrollTop,
            w = p.scrollHeight,
            I = p.clientHeight,
            k = l.current,
            A = f > 0,
            R = w - I - y,
            j = !1;
          R > f && a.current && (r && r(C), (a.current = !1)),
            A && s.current && (i && i(C), (s.current = !1)),
            A && f > R
              ? (n && !a.current && n(C),
                (k.scrollTop = w),
                (j = !0),
                (a.current = !0))
              : !A &&
                -f > y &&
                (o && !s.current && o(C),
                (k.scrollTop = 0),
                (j = !0),
                (s.current = !0)),
            j && DN(C);
        }
      },
      [n, r, o, i]
    ),
    d = S.useCallback(
      function (C) {
        u(C, C.deltaY);
      },
      [u]
    ),
    h = S.useCallback(function (C) {
      c.current = C.changedTouches[0].clientY;
    }, []),
    v = S.useCallback(
      function (C) {
        var f = c.current - C.changedTouches[0].clientY;
        u(C, f);
      },
      [u]
    ),
    g = S.useCallback(
      function (C) {
        if (C) {
          var f = oP ? { passive: !1 } : !1;
          C.addEventListener("wheel", d, f),
            C.addEventListener("touchstart", h, f),
            C.addEventListener("touchmove", v, f);
        }
      },
      [v, h, d]
    ),
    m = S.useCallback(
      function (C) {
        C &&
          (C.removeEventListener("wheel", d, !1),
          C.removeEventListener("touchstart", h, !1),
          C.removeEventListener("touchmove", v, !1));
      },
      [v, h, d]
    );
  return (
    S.useEffect(
      function () {
        if (e) {
          var C = l.current;
          return (
            g(C),
            function () {
              m(C);
            }
          );
        }
      },
      [e, g, m]
    ),
    function (C) {
      l.current = C;
    }
  );
}
var Tg = ["boxSizing", "height", "overflow", "paddingRight", "position"],
  Ig = {
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
    height: "100%",
  };
function Ag(t) {
  t.preventDefault();
}
function kg(t) {
  t.stopPropagation();
}
function _g() {
  var t = this.scrollTop,
    e = this.scrollHeight,
    n = t + this.offsetHeight;
  t === 0 ? (this.scrollTop = 1) : n === e && (this.scrollTop = t - 1);
}
function Rg() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var bg = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  di = 0,
  Qr = { capture: !1, passive: !1 };
function FN(t) {
  var e = t.isEnabled,
    n = t.accountForScrollbars,
    r = n === void 0 ? !0 : n,
    o = S.useRef({}),
    i = S.useRef(null),
    a = S.useCallback(
      function (c) {
        if (bg) {
          var l = document.body,
            u = l && l.style;
          if (
            (r &&
              Tg.forEach(function (g) {
                var m = u && u[g];
                o.current[g] = m;
              }),
            r && di < 1)
          ) {
            var d = parseInt(o.current.paddingRight, 10) || 0,
              h = document.body ? document.body.clientWidth : 0,
              v = window.innerWidth - h + d || 0;
            Object.keys(Ig).forEach(function (g) {
              var m = Ig[g];
              u && (u[g] = m);
            }),
              u && (u.paddingRight = "".concat(v, "px"));
          }
          l &&
            Rg() &&
            (l.addEventListener("touchmove", Ag, Qr),
            c &&
              (c.addEventListener("touchstart", _g, Qr),
              c.addEventListener("touchmove", kg, Qr))),
            (di += 1);
        }
      },
      [r]
    ),
    s = S.useCallback(
      function (c) {
        if (bg) {
          var l = document.body,
            u = l && l.style;
          (di = Math.max(di - 1, 0)),
            r &&
              di < 1 &&
              Tg.forEach(function (d) {
                var h = o.current[d];
                u && (u[d] = h);
              }),
            l &&
              Rg() &&
              (l.removeEventListener("touchmove", Ag, Qr),
              c &&
                (c.removeEventListener("touchstart", _g, Qr),
                c.removeEventListener("touchmove", kg, Qr)));
        }
      },
      [r]
    );
  return (
    S.useEffect(
      function () {
        if (e) {
          var c = i.current;
          return (
            a(c),
            function () {
              s(c);
            }
          );
        }
      },
      [e, a, s]
    ),
    function (c) {
      i.current = c;
    }
  );
}
var HN = function (e) {
    var n = e.target;
    return (
      n.ownerDocument.activeElement && n.ownerDocument.activeElement.blur()
    );
  },
  $N = {
    name: "1kfdb0e",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0",
  };
function BN(t) {
  var e = t.children,
    n = t.lockEnabled,
    r = t.captureEnabled,
    o = r === void 0 ? !0 : r,
    i = t.onBottomArrive,
    a = t.onBottomLeave,
    s = t.onTopArrive,
    c = t.onTopLeave,
    l = UN({
      isEnabled: o,
      onBottomArrive: i,
      onBottomLeave: a,
      onTopArrive: s,
      onTopLeave: c,
    }),
    u = FN({ isEnabled: n }),
    d = function (v) {
      l(v), u(v);
    };
  return z(S.Fragment, null, n && z("div", { onClick: HN, css: $N }), e(d));
}
var zN = {
    name: "1a0ro4n-requiredInput",
    styles:
      "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%",
  },
  jN = function (e) {
    var n = e.name,
      r = e.onFocus;
    return z("input", {
      required: !0,
      name: n,
      tabIndex: -1,
      "aria-hidden": "true",
      onFocus: r,
      css: zN,
      value: "",
      onChange: function () {},
    });
  },
  VN = jN;
function Vf(t) {
  var e;
  return typeof window < "u" && window.navigator != null
    ? t.test(
        ((e = window.navigator.userAgentData) === null || e === void 0
          ? void 0
          : e.platform) || window.navigator.platform
      )
    : !1;
}
function KN() {
  return Vf(/^iPhone/i);
}
function oE() {
  return Vf(/^Mac/i);
}
function GN() {
  return Vf(/^iPad/i) || (oE() && navigator.maxTouchPoints > 1);
}
function WN() {
  return KN() || GN();
}
function qN() {
  return oE() || WN();
}
var YN = function (e) {
    return e.label;
  },
  QN = function (e) {
    return e.label;
  },
  JN = function (e) {
    return e.value;
  },
  XN = function (e) {
    return !!e.isDisabled;
  },
  ZN = {
    clearIndicator: LP,
    container: IP,
    control: zP,
    dropdownIndicator: MP,
    group: GP,
    groupHeading: qP,
    indicatorsContainer: RP,
    indicatorSeparator: UP,
    input: XP,
    loadingIndicator: $P,
    loadingMessage: CP,
    menu: hP,
    menuList: gP,
    menuPortal: EP,
    multiValue: rN,
    multiValueLabel: oN,
    multiValueRemove: iN,
    noOptionsMessage: yP,
    option: dN,
    placeholder: pN,
    singleValue: vN,
    valueContainer: kP,
  },
  eM = {
    primary: "#2684FF",
    primary75: "#4C9AFF",
    primary50: "#B2D4FF",
    primary25: "#DEEBFF",
    danger: "#DE350B",
    dangerLight: "#FFBDAD",
    neutral0: "hsl(0, 0%, 100%)",
    neutral5: "hsl(0, 0%, 95%)",
    neutral10: "hsl(0, 0%, 90%)",
    neutral20: "hsl(0, 0%, 80%)",
    neutral30: "hsl(0, 0%, 70%)",
    neutral40: "hsl(0, 0%, 60%)",
    neutral50: "hsl(0, 0%, 50%)",
    neutral60: "hsl(0, 0%, 40%)",
    neutral70: "hsl(0, 0%, 30%)",
    neutral80: "hsl(0, 0%, 20%)",
    neutral90: "hsl(0, 0%, 10%)",
  },
  tM = 4,
  iE = 4,
  nM = 38,
  rM = iE * 2,
  oM = { baseUnit: iE, controlHeight: nM, menuGutter: rM },
  ou = { borderRadius: tM, colors: eM, spacing: oM },
  iM = {
    "aria-live": "polite",
    backspaceRemovesValue: !0,
    blurInputOnSelect: yg(),
    captureMenuScroll: !yg(),
    classNames: {},
    closeMenuOnSelect: !0,
    closeMenuOnScroll: !1,
    components: {},
    controlShouldRenderValue: !0,
    escapeClearsValue: !1,
    filterOption: MN(),
    formatGroupLabel: YN,
    getOptionLabel: QN,
    getOptionValue: JN,
    isDisabled: !1,
    isLoading: !1,
    isMulti: !1,
    isRtl: !1,
    isSearchable: !0,
    isOptionDisabled: XN,
    loadingMessage: function () {
      return "Loading...";
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: !1,
    menuPlacement: "bottom",
    menuPosition: "absolute",
    menuShouldBlockScroll: !1,
    menuShouldScrollIntoView: !nP(),
    noOptionsMessage: function () {
      return "No options";
    },
    openMenuOnFocus: !1,
    openMenuOnClick: !0,
    options: [],
    pageSize: 5,
    placeholder: "Select...",
    screenReaderStatus: function (e) {
      var n = e.count;
      return "".concat(n, " result").concat(n !== 1 ? "s" : "", " available");
    },
    styles: {},
    tabIndex: 0,
    tabSelectsValue: !0,
    unstyled: !1,
  };
function Og(t, e, n, r) {
  var o = cE(t, e, n),
    i = lE(t, e, n),
    a = sE(t, e),
    s = sc(t, e);
  return {
    type: "option",
    data: e,
    isDisabled: o,
    isSelected: i,
    label: a,
    value: s,
    index: r,
  };
}
function us(t, e) {
  return t.options
    .map(function (n, r) {
      if ("options" in n) {
        var o = n.options
          .map(function (a, s) {
            return Og(t, a, e, s);
          })
          .filter(function (a) {
            return Ng(t, a);
          });
        return o.length > 0
          ? { type: "group", data: n, options: o, index: r }
          : void 0;
      }
      var i = Og(t, n, e, r);
      return Ng(t, i) ? i : void 0;
    })
    .filter(iP);
}
function aE(t) {
  return t.reduce(function (e, n) {
    return (
      n.type === "group"
        ? e.push.apply(
            e,
            xf(
              n.options.map(function (r) {
                return r.data;
              })
            )
          )
        : e.push(n.data),
      e
    );
  }, []);
}
function Pg(t, e) {
  return t.reduce(function (n, r) {
    return (
      r.type === "group"
        ? n.push.apply(
            n,
            xf(
              r.options.map(function (o) {
                return {
                  data: o.data,
                  id: "".concat(e, "-").concat(r.index, "-").concat(o.index),
                };
              })
            )
          )
        : n.push({ data: r.data, id: "".concat(e, "-").concat(r.index) }),
      n
    );
  }, []);
}
function aM(t, e) {
  return aE(us(t, e));
}
function Ng(t, e) {
  var n = t.inputValue,
    r = n === void 0 ? "" : n,
    o = e.data,
    i = e.isSelected,
    a = e.label,
    s = e.value;
  return (!dE(t) || !i) && uE(t, { label: a, value: s, data: o }, r);
}
function sM(t, e) {
  var n = t.focusedValue,
    r = t.selectValue,
    o = r.indexOf(n);
  if (o > -1) {
    var i = e.indexOf(n);
    if (i > -1) return n;
    if (o < e.length) return e[o];
  }
  return null;
}
function cM(t, e) {
  var n = t.focusedOption;
  return n && e.indexOf(n) > -1 ? n : e[0];
}
var iu = function (e, n) {
    var r,
      o =
        (r = e.find(function (i) {
          return i.data === n;
        })) === null || r === void 0
          ? void 0
          : r.id;
    return o || null;
  },
  sE = function (e, n) {
    return e.getOptionLabel(n);
  },
  sc = function (e, n) {
    return e.getOptionValue(n);
  };
function cE(t, e, n) {
  return typeof t.isOptionDisabled == "function"
    ? t.isOptionDisabled(e, n)
    : !1;
}
function lE(t, e, n) {
  if (n.indexOf(e) > -1) return !0;
  if (typeof t.isOptionSelected == "function") return t.isOptionSelected(e, n);
  var r = sc(t, e);
  return n.some(function (o) {
    return sc(t, o) === r;
  });
}
function uE(t, e, n) {
  return t.filterOption ? t.filterOption(e, n) : !0;
}
var dE = function (e) {
    var n = e.hideSelectedOptions,
      r = e.isMulti;
    return n === void 0 ? r : n;
  },
  lM = 1,
  hE = (function (t) {
    L1(n, t);
    var e = F1(n);
    function n(r) {
      var o;
      if (
        (M1(this, n),
        (o = e.call(this, r)),
        (o.state = {
          ariaSelection: null,
          focusedOption: null,
          focusedOptionId: null,
          focusableOptionsWithIds: [],
          focusedValue: null,
          inputIsHidden: !1,
          isFocused: !1,
          selectValue: [],
          clearFocusValueOnUpdate: !1,
          prevWasFocused: !1,
          inputIsHiddenAfterUpdate: void 0,
          prevProps: void 0,
          instancePrefix: "",
        }),
        (o.blockOptionHover = !1),
        (o.isComposing = !1),
        (o.commonProps = void 0),
        (o.initialTouchX = 0),
        (o.initialTouchY = 0),
        (o.openAfterFocus = !1),
        (o.scrollToFocusedOptionOnUpdate = !1),
        (o.userIsDragging = void 0),
        (o.isAppleDevice = qN()),
        (o.controlRef = null),
        (o.getControlRef = function (c) {
          o.controlRef = c;
        }),
        (o.focusedOptionRef = null),
        (o.getFocusedOptionRef = function (c) {
          o.focusedOptionRef = c;
        }),
        (o.menuListRef = null),
        (o.getMenuListRef = function (c) {
          o.menuListRef = c;
        }),
        (o.inputRef = null),
        (o.getInputRef = function (c) {
          o.inputRef = c;
        }),
        (o.focus = o.focusInput),
        (o.blur = o.blurInput),
        (o.onChange = function (c, l) {
          var u = o.props,
            d = u.onChange,
            h = u.name;
          (l.name = h), o.ariaOnChange(c, l), d(c, l);
        }),
        (o.setValue = function (c, l, u) {
          var d = o.props,
            h = d.closeMenuOnSelect,
            v = d.isMulti,
            g = d.inputValue;
          o.onInputChange("", { action: "set-value", prevInputValue: g }),
            h &&
              (o.setState({ inputIsHiddenAfterUpdate: !v }), o.onMenuClose()),
            o.setState({ clearFocusValueOnUpdate: !0 }),
            o.onChange(c, { action: l, option: u });
        }),
        (o.selectOption = function (c) {
          var l = o.props,
            u = l.blurInputOnSelect,
            d = l.isMulti,
            h = l.name,
            v = o.state.selectValue,
            g = d && o.isOptionSelected(c, v),
            m = o.isOptionDisabled(c, v);
          if (g) {
            var C = o.getOptionValue(c);
            o.setValue(
              v.filter(function (f) {
                return o.getOptionValue(f) !== C;
              }),
              "deselect-option",
              c
            );
          } else if (!m)
            d
              ? o.setValue([].concat(xf(v), [c]), "select-option", c)
              : o.setValue(c, "select-option");
          else {
            o.ariaOnChange(c, { action: "select-option", option: c, name: h });
            return;
          }
          u && o.blurInput();
        }),
        (o.removeValue = function (c) {
          var l = o.props.isMulti,
            u = o.state.selectValue,
            d = o.getOptionValue(c),
            h = u.filter(function (g) {
              return o.getOptionValue(g) !== d;
            }),
            v = Ga(l, h, h[0] || null);
          o.onChange(v, { action: "remove-value", removedValue: c }),
            o.focusInput();
        }),
        (o.clearValue = function () {
          var c = o.state.selectValue;
          o.onChange(Ga(o.props.isMulti, [], null), {
            action: "clear",
            removedValues: c,
          });
        }),
        (o.popValue = function () {
          var c = o.props.isMulti,
            l = o.state.selectValue,
            u = l[l.length - 1],
            d = l.slice(0, l.length - 1),
            h = Ga(c, d, d[0] || null);
          o.onChange(h, { action: "pop-value", removedValue: u });
        }),
        (o.getFocusedOptionId = function (c) {
          return iu(o.state.focusableOptionsWithIds, c);
        }),
        (o.getFocusableOptionsWithIds = function () {
          return Pg(us(o.props, o.state.selectValue), o.getElementId("option"));
        }),
        (o.getValue = function () {
          return o.state.selectValue;
        }),
        (o.cx = function () {
          for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++)
            l[u] = arguments[u];
          return QO.apply(void 0, [o.props.classNamePrefix].concat(l));
        }),
        (o.getOptionLabel = function (c) {
          return sE(o.props, c);
        }),
        (o.getOptionValue = function (c) {
          return sc(o.props, c);
        }),
        (o.getStyles = function (c, l) {
          var u = o.props.unstyled,
            d = ZN[c](l, u);
          d.boxSizing = "border-box";
          var h = o.props.styles[c];
          return h ? h(d, l) : d;
        }),
        (o.getClassNames = function (c, l) {
          var u, d;
          return (u = (d = o.props.classNames)[c]) === null || u === void 0
            ? void 0
            : u.call(d, l);
        }),
        (o.getElementId = function (c) {
          return "".concat(o.state.instancePrefix, "-").concat(c);
        }),
        (o.getComponents = function () {
          return wN(o.props);
        }),
        (o.buildCategorizedOptions = function () {
          return us(o.props, o.state.selectValue);
        }),
        (o.getCategorizedOptions = function () {
          return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
        }),
        (o.buildFocusableOptions = function () {
          return aE(o.buildCategorizedOptions());
        }),
        (o.getFocusableOptions = function () {
          return o.props.menuIsOpen ? o.buildFocusableOptions() : [];
        }),
        (o.ariaOnChange = function (c, l) {
          o.setState({ ariaSelection: $({ value: c }, l) });
        }),
        (o.onMenuMouseDown = function (c) {
          c.button === 0 &&
            (c.stopPropagation(), c.preventDefault(), o.focusInput());
        }),
        (o.onMenuMouseMove = function (c) {
          o.blockOptionHover = !1;
        }),
        (o.onControlMouseDown = function (c) {
          if (!c.defaultPrevented) {
            var l = o.props.openMenuOnClick;
            o.state.isFocused
              ? o.props.menuIsOpen
                ? c.target.tagName !== "INPUT" &&
                  c.target.tagName !== "TEXTAREA" &&
                  o.onMenuClose()
                : l && o.openMenu("first")
              : (l && (o.openAfterFocus = !0), o.focusInput()),
              c.target.tagName !== "INPUT" &&
                c.target.tagName !== "TEXTAREA" &&
                c.preventDefault();
          }
        }),
        (o.onDropdownIndicatorMouseDown = function (c) {
          if (
            !(c && c.type === "mousedown" && c.button !== 0) &&
            !o.props.isDisabled
          ) {
            var l = o.props,
              u = l.isMulti,
              d = l.menuIsOpen;
            o.focusInput(),
              d
                ? (o.setState({ inputIsHiddenAfterUpdate: !u }),
                  o.onMenuClose())
                : o.openMenu("first"),
              c.preventDefault();
          }
        }),
        (o.onClearIndicatorMouseDown = function (c) {
          (c && c.type === "mousedown" && c.button !== 0) ||
            (o.clearValue(),
            c.preventDefault(),
            (o.openAfterFocus = !1),
            c.type === "touchend"
              ? o.focusInput()
              : setTimeout(function () {
                  return o.focusInput();
                }));
        }),
        (o.onScroll = function (c) {
          typeof o.props.closeMenuOnScroll == "boolean"
            ? c.target instanceof HTMLElement &&
              nl(c.target) &&
              o.props.onMenuClose()
            : typeof o.props.closeMenuOnScroll == "function" &&
              o.props.closeMenuOnScroll(c) &&
              o.props.onMenuClose();
        }),
        (o.onCompositionStart = function () {
          o.isComposing = !0;
        }),
        (o.onCompositionEnd = function () {
          o.isComposing = !1;
        }),
        (o.onTouchStart = function (c) {
          var l = c.touches,
            u = l && l.item(0);
          u &&
            ((o.initialTouchX = u.clientX),
            (o.initialTouchY = u.clientY),
            (o.userIsDragging = !1));
        }),
        (o.onTouchMove = function (c) {
          var l = c.touches,
            u = l && l.item(0);
          if (u) {
            var d = Math.abs(u.clientX - o.initialTouchX),
              h = Math.abs(u.clientY - o.initialTouchY),
              v = 5;
            o.userIsDragging = d > v || h > v;
          }
        }),
        (o.onTouchEnd = function (c) {
          o.userIsDragging ||
            (o.controlRef &&
              !o.controlRef.contains(c.target) &&
              o.menuListRef &&
              !o.menuListRef.contains(c.target) &&
              o.blurInput(),
            (o.initialTouchX = 0),
            (o.initialTouchY = 0));
        }),
        (o.onControlTouchEnd = function (c) {
          o.userIsDragging || o.onControlMouseDown(c);
        }),
        (o.onClearIndicatorTouchEnd = function (c) {
          o.userIsDragging || o.onClearIndicatorMouseDown(c);
        }),
        (o.onDropdownIndicatorTouchEnd = function (c) {
          o.userIsDragging || o.onDropdownIndicatorMouseDown(c);
        }),
        (o.handleInputChange = function (c) {
          var l = o.props.inputValue,
            u = c.currentTarget.value;
          o.setState({ inputIsHiddenAfterUpdate: !1 }),
            o.onInputChange(u, { action: "input-change", prevInputValue: l }),
            o.props.menuIsOpen || o.onMenuOpen();
        }),
        (o.onInputFocus = function (c) {
          o.props.onFocus && o.props.onFocus(c),
            o.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
            (o.openAfterFocus || o.props.openMenuOnFocus) &&
              o.openMenu("first"),
            (o.openAfterFocus = !1);
        }),
        (o.onInputBlur = function (c) {
          var l = o.props.inputValue;
          if (o.menuListRef && o.menuListRef.contains(document.activeElement)) {
            o.inputRef.focus();
            return;
          }
          o.props.onBlur && o.props.onBlur(c),
            o.onInputChange("", { action: "input-blur", prevInputValue: l }),
            o.onMenuClose(),
            o.setState({ focusedValue: null, isFocused: !1 });
        }),
        (o.onOptionHover = function (c) {
          if (!(o.blockOptionHover || o.state.focusedOption === c)) {
            var l = o.getFocusableOptions(),
              u = l.indexOf(c);
            o.setState({
              focusedOption: c,
              focusedOptionId: u > -1 ? o.getFocusedOptionId(c) : null,
            });
          }
        }),
        (o.shouldHideSelectedOptions = function () {
          return dE(o.props);
        }),
        (o.onValueInputFocus = function (c) {
          c.preventDefault(), c.stopPropagation(), o.focus();
        }),
        (o.onKeyDown = function (c) {
          var l = o.props,
            u = l.isMulti,
            d = l.backspaceRemovesValue,
            h = l.escapeClearsValue,
            v = l.inputValue,
            g = l.isClearable,
            m = l.isDisabled,
            C = l.menuIsOpen,
            f = l.onKeyDown,
            p = l.tabSelectsValue,
            y = l.openMenuOnFocus,
            w = o.state,
            I = w.focusedOption,
            k = w.focusedValue,
            A = w.selectValue;
          if (!m && !(typeof f == "function" && (f(c), c.defaultPrevented))) {
            switch (((o.blockOptionHover = !0), c.key)) {
              case "ArrowLeft":
                if (!u || v) return;
                o.focusValue("previous");
                break;
              case "ArrowRight":
                if (!u || v) return;
                o.focusValue("next");
                break;
              case "Delete":
              case "Backspace":
                if (v) return;
                if (k) o.removeValue(k);
                else {
                  if (!d) return;
                  u ? o.popValue() : g && o.clearValue();
                }
                break;
              case "Tab":
                if (
                  o.isComposing ||
                  c.shiftKey ||
                  !C ||
                  !p ||
                  !I ||
                  (y && o.isOptionSelected(I, A))
                )
                  return;
                o.selectOption(I);
                break;
              case "Enter":
                if (c.keyCode === 229) break;
                if (C) {
                  if (!I || o.isComposing) return;
                  o.selectOption(I);
                  break;
                }
                return;
              case "Escape":
                C
                  ? (o.setState({ inputIsHiddenAfterUpdate: !1 }),
                    o.onInputChange("", {
                      action: "menu-close",
                      prevInputValue: v,
                    }),
                    o.onMenuClose())
                  : g && h && o.clearValue();
                break;
              case " ":
                if (v) return;
                if (!C) {
                  o.openMenu("first");
                  break;
                }
                if (!I) return;
                o.selectOption(I);
                break;
              case "ArrowUp":
                C ? o.focusOption("up") : o.openMenu("last");
                break;
              case "ArrowDown":
                C ? o.focusOption("down") : o.openMenu("first");
                break;
              case "PageUp":
                if (!C) return;
                o.focusOption("pageup");
                break;
              case "PageDown":
                if (!C) return;
                o.focusOption("pagedown");
                break;
              case "Home":
                if (!C) return;
                o.focusOption("first");
                break;
              case "End":
                if (!C) return;
                o.focusOption("last");
                break;
              default:
                return;
            }
            c.preventDefault();
          }
        }),
        (o.state.instancePrefix =
          "react-select-" + (o.props.instanceId || ++lM)),
        (o.state.selectValue = gg(r.value)),
        r.menuIsOpen && o.state.selectValue.length)
      ) {
        var i = o.getFocusableOptionsWithIds(),
          a = o.buildFocusableOptions(),
          s = a.indexOf(o.state.selectValue[0]);
        (o.state.focusableOptionsWithIds = i),
          (o.state.focusedOption = a[s]),
          (o.state.focusedOptionId = iu(i, a[s]));
      }
      return o;
    }
    return (
      x1(
        n,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.startListeningComposition(),
                this.startListeningToTouch(),
                this.props.closeMenuOnScroll &&
                  document &&
                  document.addEventListener &&
                  document.addEventListener("scroll", this.onScroll, !0),
                this.props.autoFocus && this.focusInput(),
                this.props.menuIsOpen &&
                  this.state.focusedOption &&
                  this.menuListRef &&
                  this.focusedOptionRef &&
                  vg(this.menuListRef, this.focusedOptionRef);
            },
          },
          {
            key: "componentDidUpdate",
            value: function (o) {
              var i = this.props,
                a = i.isDisabled,
                s = i.menuIsOpen,
                c = this.state.isFocused;
              ((c && !a && o.isDisabled) || (c && s && !o.menuIsOpen)) &&
                this.focusInput(),
                c && a && !o.isDisabled
                  ? this.setState({ isFocused: !1 }, this.onMenuClose)
                  : !c &&
                    !a &&
                    o.isDisabled &&
                    this.inputRef === document.activeElement &&
                    this.setState({ isFocused: !0 }),
                this.menuListRef &&
                  this.focusedOptionRef &&
                  this.scrollToFocusedOptionOnUpdate &&
                  (vg(this.menuListRef, this.focusedOptionRef),
                  (this.scrollToFocusedOptionOnUpdate = !1));
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.stopListeningComposition(),
                this.stopListeningToTouch(),
                document.removeEventListener("scroll", this.onScroll, !0);
            },
          },
          {
            key: "onMenuOpen",
            value: function () {
              this.props.onMenuOpen();
            },
          },
          {
            key: "onMenuClose",
            value: function () {
              this.onInputChange("", {
                action: "menu-close",
                prevInputValue: this.props.inputValue,
              }),
                this.props.onMenuClose();
            },
          },
          {
            key: "onInputChange",
            value: function (o, i) {
              this.props.onInputChange(o, i);
            },
          },
          {
            key: "focusInput",
            value: function () {
              this.inputRef && this.inputRef.focus();
            },
          },
          {
            key: "blurInput",
            value: function () {
              this.inputRef && this.inputRef.blur();
            },
          },
          {
            key: "openMenu",
            value: function (o) {
              var i = this,
                a = this.state,
                s = a.selectValue,
                c = a.isFocused,
                l = this.buildFocusableOptions(),
                u = o === "first" ? 0 : l.length - 1;
              if (!this.props.isMulti) {
                var d = l.indexOf(s[0]);
                d > -1 && (u = d);
              }
              (this.scrollToFocusedOptionOnUpdate = !(c && this.menuListRef)),
                this.setState(
                  {
                    inputIsHiddenAfterUpdate: !1,
                    focusedValue: null,
                    focusedOption: l[u],
                    focusedOptionId: this.getFocusedOptionId(l[u]),
                  },
                  function () {
                    return i.onMenuOpen();
                  }
                );
            },
          },
          {
            key: "focusValue",
            value: function (o) {
              var i = this.state,
                a = i.selectValue,
                s = i.focusedValue;
              if (this.props.isMulti) {
                this.setState({ focusedOption: null });
                var c = a.indexOf(s);
                s || (c = -1);
                var l = a.length - 1,
                  u = -1;
                if (a.length) {
                  switch (o) {
                    case "previous":
                      c === 0 ? (u = 0) : c === -1 ? (u = l) : (u = c - 1);
                      break;
                    case "next":
                      c > -1 && c < l && (u = c + 1);
                      break;
                  }
                  this.setState({
                    inputIsHidden: u !== -1,
                    focusedValue: a[u],
                  });
                }
              }
            },
          },
          {
            key: "focusOption",
            value: function () {
              var o =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : "first",
                i = this.props.pageSize,
                a = this.state.focusedOption,
                s = this.getFocusableOptions();
              if (s.length) {
                var c = 0,
                  l = s.indexOf(a);
                a || (l = -1),
                  o === "up"
                    ? (c = l > 0 ? l - 1 : s.length - 1)
                    : o === "down"
                    ? (c = (l + 1) % s.length)
                    : o === "pageup"
                    ? ((c = l - i), c < 0 && (c = 0))
                    : o === "pagedown"
                    ? ((c = l + i), c > s.length - 1 && (c = s.length - 1))
                    : o === "last" && (c = s.length - 1),
                  (this.scrollToFocusedOptionOnUpdate = !0),
                  this.setState({
                    focusedOption: s[c],
                    focusedValue: null,
                    focusedOptionId: this.getFocusedOptionId(s[c]),
                  });
              }
            },
          },
          {
            key: "getTheme",
            value: function () {
              return this.props.theme
                ? typeof this.props.theme == "function"
                  ? this.props.theme(ou)
                  : $($({}, ou), this.props.theme)
                : ou;
            },
          },
          {
            key: "getCommonProps",
            value: function () {
              var o = this.clearValue,
                i = this.cx,
                a = this.getStyles,
                s = this.getClassNames,
                c = this.getValue,
                l = this.selectOption,
                u = this.setValue,
                d = this.props,
                h = d.isMulti,
                v = d.isRtl,
                g = d.options,
                m = this.hasValue();
              return {
                clearValue: o,
                cx: i,
                getStyles: a,
                getClassNames: s,
                getValue: c,
                hasValue: m,
                isMulti: h,
                isRtl: v,
                options: g,
                selectOption: l,
                selectProps: d,
                setValue: u,
                theme: this.getTheme(),
              };
            },
          },
          {
            key: "hasValue",
            value: function () {
              var o = this.state.selectValue;
              return o.length > 0;
            },
          },
          {
            key: "hasOptions",
            value: function () {
              return !!this.getFocusableOptions().length;
            },
          },
          {
            key: "isClearable",
            value: function () {
              var o = this.props,
                i = o.isClearable,
                a = o.isMulti;
              return i === void 0 ? a : i;
            },
          },
          {
            key: "isOptionDisabled",
            value: function (o, i) {
              return cE(this.props, o, i);
            },
          },
          {
            key: "isOptionSelected",
            value: function (o, i) {
              return lE(this.props, o, i);
            },
          },
          {
            key: "filterOption",
            value: function (o, i) {
              return uE(this.props, o, i);
            },
          },
          {
            key: "formatOptionLabel",
            value: function (o, i) {
              if (typeof this.props.formatOptionLabel == "function") {
                var a = this.props.inputValue,
                  s = this.state.selectValue;
                return this.props.formatOptionLabel(o, {
                  context: i,
                  inputValue: a,
                  selectValue: s,
                });
              } else return this.getOptionLabel(o);
            },
          },
          {
            key: "formatGroupLabel",
            value: function (o) {
              return this.props.formatGroupLabel(o);
            },
          },
          {
            key: "startListeningComposition",
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener(
                  "compositionstart",
                  this.onCompositionStart,
                  !1
                ),
                document.addEventListener(
                  "compositionend",
                  this.onCompositionEnd,
                  !1
                ));
            },
          },
          {
            key: "stopListeningComposition",
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener(
                  "compositionstart",
                  this.onCompositionStart
                ),
                document.removeEventListener(
                  "compositionend",
                  this.onCompositionEnd
                ));
            },
          },
          {
            key: "startListeningToTouch",
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener("touchstart", this.onTouchStart, !1),
                document.addEventListener("touchmove", this.onTouchMove, !1),
                document.addEventListener("touchend", this.onTouchEnd, !1));
            },
          },
          {
            key: "stopListeningToTouch",
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener("touchstart", this.onTouchStart),
                document.removeEventListener("touchmove", this.onTouchMove),
                document.removeEventListener("touchend", this.onTouchEnd));
            },
          },
          {
            key: "renderInput",
            value: function () {
              var o = this.props,
                i = o.isDisabled,
                a = o.isSearchable,
                s = o.inputId,
                c = o.inputValue,
                l = o.tabIndex,
                u = o.form,
                d = o.menuIsOpen,
                h = o.required,
                v = this.getComponents(),
                g = v.Input,
                m = this.state,
                C = m.inputIsHidden,
                f = m.ariaSelection,
                p = this.commonProps,
                y = s || this.getElementId("input"),
                w = $(
                  $(
                    $(
                      {
                        "aria-autocomplete": "list",
                        "aria-expanded": d,
                        "aria-haspopup": !0,
                        "aria-errormessage": this.props["aria-errormessage"],
                        "aria-invalid": this.props["aria-invalid"],
                        "aria-label": this.props["aria-label"],
                        "aria-labelledby": this.props["aria-labelledby"],
                        "aria-required": h,
                        role: "combobox",
                        "aria-activedescendant": this.isAppleDevice
                          ? void 0
                          : this.state.focusedOptionId || "",
                      },
                      d && { "aria-controls": this.getElementId("listbox") }
                    ),
                    !a && { "aria-readonly": !0 }
                  ),
                  this.hasValue()
                    ? (f == null ? void 0 : f.action) ===
                        "initial-input-focus" && {
                        "aria-describedby": this.getElementId("live-region"),
                      }
                    : { "aria-describedby": this.getElementId("placeholder") }
                );
              return a
                ? S.createElement(
                    g,
                    G(
                      {},
                      p,
                      {
                        autoCapitalize: "none",
                        autoComplete: "off",
                        autoCorrect: "off",
                        id: y,
                        innerRef: this.getInputRef,
                        isDisabled: i,
                        isHidden: C,
                        onBlur: this.onInputBlur,
                        onChange: this.handleInputChange,
                        onFocus: this.onInputFocus,
                        spellCheck: "false",
                        tabIndex: l,
                        form: u,
                        type: "text",
                        value: c,
                      },
                      w
                    )
                  )
                : S.createElement(
                    LN,
                    G(
                      {
                        id: y,
                        innerRef: this.getInputRef,
                        onBlur: this.onInputBlur,
                        onChange: ic,
                        onFocus: this.onInputFocus,
                        disabled: i,
                        tabIndex: l,
                        inputMode: "none",
                        form: u,
                        value: "",
                      },
                      w
                    )
                  );
            },
          },
          {
            key: "renderPlaceholderOrValue",
            value: function () {
              var o = this,
                i = this.getComponents(),
                a = i.MultiValue,
                s = i.MultiValueContainer,
                c = i.MultiValueLabel,
                l = i.MultiValueRemove,
                u = i.SingleValue,
                d = i.Placeholder,
                h = this.commonProps,
                v = this.props,
                g = v.controlShouldRenderValue,
                m = v.isDisabled,
                C = v.isMulti,
                f = v.inputValue,
                p = v.placeholder,
                y = this.state,
                w = y.selectValue,
                I = y.focusedValue,
                k = y.isFocused;
              if (!this.hasValue() || !g)
                return f
                  ? null
                  : S.createElement(
                      d,
                      G({}, h, {
                        key: "placeholder",
                        isDisabled: m,
                        isFocused: k,
                        innerProps: { id: this.getElementId("placeholder") },
                      }),
                      p
                    );
              if (C)
                return w.map(function (R, j) {
                  var U = R === I,
                    ee = ""
                      .concat(o.getOptionLabel(R), "-")
                      .concat(o.getOptionValue(R));
                  return S.createElement(
                    a,
                    G({}, h, {
                      components: { Container: s, Label: c, Remove: l },
                      isFocused: U,
                      isDisabled: m,
                      key: ee,
                      index: j,
                      removeProps: {
                        onClick: function () {
                          return o.removeValue(R);
                        },
                        onTouchEnd: function () {
                          return o.removeValue(R);
                        },
                        onMouseDown: function (Re) {
                          Re.preventDefault();
                        },
                      },
                      data: R,
                    }),
                    o.formatOptionLabel(R, "value")
                  );
                });
              if (f) return null;
              var A = w[0];
              return S.createElement(
                u,
                G({}, h, { data: A, isDisabled: m }),
                this.formatOptionLabel(A, "value")
              );
            },
          },
          {
            key: "renderClearIndicator",
            value: function () {
              var o = this.getComponents(),
                i = o.ClearIndicator,
                a = this.commonProps,
                s = this.props,
                c = s.isDisabled,
                l = s.isLoading,
                u = this.state.isFocused;
              if (!this.isClearable() || !i || c || !this.hasValue() || l)
                return null;
              var d = {
                onMouseDown: this.onClearIndicatorMouseDown,
                onTouchEnd: this.onClearIndicatorTouchEnd,
                "aria-hidden": "true",
              };
              return S.createElement(
                i,
                G({}, a, { innerProps: d, isFocused: u })
              );
            },
          },
          {
            key: "renderLoadingIndicator",
            value: function () {
              var o = this.getComponents(),
                i = o.LoadingIndicator,
                a = this.commonProps,
                s = this.props,
                c = s.isDisabled,
                l = s.isLoading,
                u = this.state.isFocused;
              if (!i || !l) return null;
              var d = { "aria-hidden": "true" };
              return S.createElement(
                i,
                G({}, a, { innerProps: d, isDisabled: c, isFocused: u })
              );
            },
          },
          {
            key: "renderIndicatorSeparator",
            value: function () {
              var o = this.getComponents(),
                i = o.DropdownIndicator,
                a = o.IndicatorSeparator;
              if (!i || !a) return null;
              var s = this.commonProps,
                c = this.props.isDisabled,
                l = this.state.isFocused;
              return S.createElement(
                a,
                G({}, s, { isDisabled: c, isFocused: l })
              );
            },
          },
          {
            key: "renderDropdownIndicator",
            value: function () {
              var o = this.getComponents(),
                i = o.DropdownIndicator;
              if (!i) return null;
              var a = this.commonProps,
                s = this.props.isDisabled,
                c = this.state.isFocused,
                l = {
                  onMouseDown: this.onDropdownIndicatorMouseDown,
                  onTouchEnd: this.onDropdownIndicatorTouchEnd,
                  "aria-hidden": "true",
                };
              return S.createElement(
                i,
                G({}, a, { innerProps: l, isDisabled: s, isFocused: c })
              );
            },
          },
          {
            key: "renderMenu",
            value: function () {
              var o = this,
                i = this.getComponents(),
                a = i.Group,
                s = i.GroupHeading,
                c = i.Menu,
                l = i.MenuList,
                u = i.MenuPortal,
                d = i.LoadingMessage,
                h = i.NoOptionsMessage,
                v = i.Option,
                g = this.commonProps,
                m = this.state.focusedOption,
                C = this.props,
                f = C.captureMenuScroll,
                p = C.inputValue,
                y = C.isLoading,
                w = C.loadingMessage,
                I = C.minMenuHeight,
                k = C.maxMenuHeight,
                A = C.menuIsOpen,
                R = C.menuPlacement,
                j = C.menuPosition,
                U = C.menuPortalTarget,
                ee = C.menuShouldBlockScroll,
                ue = C.menuShouldScrollIntoView,
                Re = C.noOptionsMessage,
                ze = C.onMenuScrollToTop,
                ge = C.onMenuScrollToBottom;
              if (!A) return null;
              var se = function (Ee, Te) {
                  var Oe = Ee.type,
                    ve = Ee.data,
                    Qe = Ee.isDisabled,
                    ft = Ee.isSelected,
                    Fn = Ee.label,
                    Xo = Ee.value,
                    Br = m === ve,
                    fr = Qe
                      ? void 0
                      : function () {
                          return o.onOptionHover(ve);
                        },
                    Zo = Qe
                      ? void 0
                      : function () {
                          return o.selectOption(ve);
                        },
                    zr = "".concat(o.getElementId("option"), "-").concat(Te),
                    pr = {
                      id: zr,
                      onClick: Zo,
                      onMouseMove: fr,
                      onMouseOver: fr,
                      tabIndex: -1,
                      role: "option",
                      "aria-selected": o.isAppleDevice ? void 0 : ft,
                    };
                  return S.createElement(
                    v,
                    G({}, g, {
                      innerProps: pr,
                      data: ve,
                      isDisabled: Qe,
                      isSelected: ft,
                      key: zr,
                      label: Fn,
                      type: Oe,
                      value: Xo,
                      isFocused: Br,
                      innerRef: Br ? o.getFocusedOptionRef : void 0,
                    }),
                    o.formatOptionLabel(Ee.data, "menu")
                  );
                },
                je;
              if (this.hasOptions())
                je = this.getCategorizedOptions().map(function (q) {
                  if (q.type === "group") {
                    var Ee = q.data,
                      Te = q.options,
                      Oe = q.index,
                      ve = "".concat(o.getElementId("group"), "-").concat(Oe),
                      Qe = "".concat(ve, "-heading");
                    return S.createElement(
                      a,
                      G({}, g, {
                        key: ve,
                        data: Ee,
                        options: Te,
                        Heading: s,
                        headingProps: { id: Qe, data: q.data },
                        label: o.formatGroupLabel(q.data),
                      }),
                      q.options.map(function (ft) {
                        return se(ft, "".concat(Oe, "-").concat(ft.index));
                      })
                    );
                  } else if (q.type === "option")
                    return se(q, "".concat(q.index));
                });
              else if (y) {
                var M = w({ inputValue: p });
                if (M === null) return null;
                je = S.createElement(d, g, M);
              } else {
                var B = Re({ inputValue: p });
                if (B === null) return null;
                je = S.createElement(h, g, B);
              }
              var V = {
                  minMenuHeight: I,
                  maxMenuHeight: k,
                  menuPlacement: R,
                  menuPosition: j,
                  menuShouldScrollIntoView: ue,
                },
                re = S.createElement(fP, G({}, g, V), function (q) {
                  var Ee = q.ref,
                    Te = q.placerProps,
                    Oe = Te.placement,
                    ve = Te.maxHeight;
                  return S.createElement(
                    c,
                    G({}, g, V, {
                      innerRef: Ee,
                      innerProps: {
                        onMouseDown: o.onMenuMouseDown,
                        onMouseMove: o.onMenuMouseMove,
                      },
                      isLoading: y,
                      placement: Oe,
                    }),
                    S.createElement(
                      BN,
                      {
                        captureEnabled: f,
                        onTopArrive: ze,
                        onBottomArrive: ge,
                        lockEnabled: ee,
                      },
                      function (Qe) {
                        return S.createElement(
                          l,
                          G({}, g, {
                            innerRef: function (Fn) {
                              o.getMenuListRef(Fn), Qe(Fn);
                            },
                            innerProps: {
                              role: "listbox",
                              "aria-multiselectable": g.isMulti,
                              id: o.getElementId("listbox"),
                            },
                            isLoading: y,
                            maxHeight: ve,
                            focusedOption: m,
                          }),
                          je
                        );
                      }
                    )
                  );
                });
              return U || j === "fixed"
                ? S.createElement(
                    u,
                    G({}, g, {
                      appendTo: U,
                      controlElement: this.controlRef,
                      menuPlacement: R,
                      menuPosition: j,
                    }),
                    re
                  )
                : re;
            },
          },
          {
            key: "renderFormField",
            value: function () {
              var o = this,
                i = this.props,
                a = i.delimiter,
                s = i.isDisabled,
                c = i.isMulti,
                l = i.name,
                u = i.required,
                d = this.state.selectValue;
              if (u && !this.hasValue() && !s)
                return S.createElement(VN, {
                  name: l,
                  onFocus: this.onValueInputFocus,
                });
              if (!(!l || s))
                if (c)
                  if (a) {
                    var h = d
                      .map(function (m) {
                        return o.getOptionValue(m);
                      })
                      .join(a);
                    return S.createElement("input", {
                      name: l,
                      type: "hidden",
                      value: h,
                    });
                  } else {
                    var v =
                      d.length > 0
                        ? d.map(function (m, C) {
                            return S.createElement("input", {
                              key: "i-".concat(C),
                              name: l,
                              type: "hidden",
                              value: o.getOptionValue(m),
                            });
                          })
                        : S.createElement("input", {
                            name: l,
                            type: "hidden",
                            value: "",
                          });
                    return S.createElement("div", null, v);
                  }
                else {
                  var g = d[0] ? this.getOptionValue(d[0]) : "";
                  return S.createElement("input", {
                    name: l,
                    type: "hidden",
                    value: g,
                  });
                }
            },
          },
          {
            key: "renderLiveRegion",
            value: function () {
              var o = this.commonProps,
                i = this.state,
                a = i.ariaSelection,
                s = i.focusedOption,
                c = i.focusedValue,
                l = i.isFocused,
                u = i.selectValue,
                d = this.getFocusableOptions();
              return S.createElement(
                bN,
                G({}, o, {
                  id: this.getElementId("live-region"),
                  ariaSelection: a,
                  focusedOption: s,
                  focusedValue: c,
                  isFocused: l,
                  selectValue: u,
                  focusableOptions: d,
                  isAppleDevice: this.isAppleDevice,
                })
              );
            },
          },
          {
            key: "render",
            value: function () {
              var o = this.getComponents(),
                i = o.Control,
                a = o.IndicatorsContainer,
                s = o.SelectContainer,
                c = o.ValueContainer,
                l = this.props,
                u = l.className,
                d = l.id,
                h = l.isDisabled,
                v = l.menuIsOpen,
                g = this.state.isFocused,
                m = (this.commonProps = this.getCommonProps());
              return S.createElement(
                s,
                G({}, m, {
                  className: u,
                  innerProps: { id: d, onKeyDown: this.onKeyDown },
                  isDisabled: h,
                  isFocused: g,
                }),
                this.renderLiveRegion(),
                S.createElement(
                  i,
                  G({}, m, {
                    innerRef: this.getControlRef,
                    innerProps: {
                      onMouseDown: this.onControlMouseDown,
                      onTouchEnd: this.onControlTouchEnd,
                    },
                    isDisabled: h,
                    isFocused: g,
                    menuIsOpen: v,
                  }),
                  S.createElement(
                    c,
                    G({}, m, { isDisabled: h }),
                    this.renderPlaceholderOrValue(),
                    this.renderInput()
                  ),
                  S.createElement(
                    a,
                    G({}, m, { isDisabled: h }),
                    this.renderClearIndicator(),
                    this.renderLoadingIndicator(),
                    this.renderIndicatorSeparator(),
                    this.renderDropdownIndicator()
                  )
                ),
                this.renderMenu(),
                this.renderFormField()
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (o, i) {
              var a = i.prevProps,
                s = i.clearFocusValueOnUpdate,
                c = i.inputIsHiddenAfterUpdate,
                l = i.ariaSelection,
                u = i.isFocused,
                d = i.prevWasFocused,
                h = i.instancePrefix,
                v = o.options,
                g = o.value,
                m = o.menuIsOpen,
                C = o.inputValue,
                f = o.isMulti,
                p = gg(g),
                y = {};
              if (
                a &&
                (g !== a.value ||
                  v !== a.options ||
                  m !== a.menuIsOpen ||
                  C !== a.inputValue)
              ) {
                var w = m ? aM(o, p) : [],
                  I = m ? Pg(us(o, p), "".concat(h, "-option")) : [],
                  k = s ? sM(i, p) : null,
                  A = cM(i, w),
                  R = iu(I, A);
                y = {
                  selectValue: p,
                  focusedOption: A,
                  focusedOptionId: R,
                  focusableOptionsWithIds: I,
                  focusedValue: k,
                  clearFocusValueOnUpdate: !1,
                };
              }
              var j =
                  c != null && o !== a
                    ? { inputIsHidden: c, inputIsHiddenAfterUpdate: void 0 }
                    : {},
                U = l,
                ee = u && d;
              return (
                u &&
                  !ee &&
                  ((U = {
                    value: Ga(f, p, p[0] || null),
                    options: p,
                    action: "initial-input-focus",
                  }),
                  (ee = !d)),
                (l == null ? void 0 : l.action) === "initial-input-focus" &&
                  (U = null),
                $(
                  $($({}, y), j),
                  {},
                  { prevProps: o, ariaSelection: U, prevWasFocused: ee }
                )
              );
            },
          },
        ]
      ),
      n
    );
  })(S.Component);
hE.defaultProps = iM;
var uM = [
  "defaultInputValue",
  "defaultMenuIsOpen",
  "defaultValue",
  "inputValue",
  "menuIsOpen",
  "onChange",
  "onInputChange",
  "onMenuClose",
  "onMenuOpen",
  "value",
];
function dM(t) {
  var e = t.defaultInputValue,
    n = e === void 0 ? "" : e,
    r = t.defaultMenuIsOpen,
    o = r === void 0 ? !1 : r,
    i = t.defaultValue,
    a = i === void 0 ? null : i,
    s = t.inputValue,
    c = t.menuIsOpen,
    l = t.onChange,
    u = t.onInputChange,
    d = t.onMenuClose,
    h = t.onMenuOpen,
    v = t.value,
    g = vn(t, uM),
    m = S.useState(s !== void 0 ? s : n),
    C = Ke(m, 2),
    f = C[0],
    p = C[1],
    y = S.useState(c !== void 0 ? c : o),
    w = Ke(y, 2),
    I = w[0],
    k = w[1],
    A = S.useState(v !== void 0 ? v : a),
    R = Ke(A, 2),
    j = R[0],
    U = R[1],
    ee = S.useCallback(
      function (M, B) {
        typeof l == "function" && l(M, B), U(M);
      },
      [l]
    ),
    ue = S.useCallback(
      function (M, B) {
        var V;
        typeof u == "function" && (V = u(M, B)), p(V !== void 0 ? V : M);
      },
      [u]
    ),
    Re = S.useCallback(
      function () {
        typeof h == "function" && h(), k(!0);
      },
      [h]
    ),
    ze = S.useCallback(
      function () {
        typeof d == "function" && d(), k(!1);
      },
      [d]
    ),
    ge = s !== void 0 ? s : f,
    se = c !== void 0 ? c : I,
    je = v !== void 0 ? v : j;
  return $(
    $({}, g),
    {},
    {
      inputValue: ge,
      menuIsOpen: se,
      onChange: ee,
      onInputChange: ue,
      onMenuClose: ze,
      onMenuOpen: Re,
      value: je,
    }
  );
}
var hM = [
  "defaultOptions",
  "cacheOptions",
  "loadOptions",
  "options",
  "isLoading",
  "onInputChange",
  "filterOption",
];
function fM(t) {
  var e = t.defaultOptions,
    n = e === void 0 ? !1 : e,
    r = t.cacheOptions,
    o = r === void 0 ? !1 : r,
    i = t.loadOptions;
  t.options;
  var a = t.isLoading,
    s = a === void 0 ? !1 : a,
    c = t.onInputChange,
    l = t.filterOption,
    u = l === void 0 ? null : l,
    d = vn(t, hM),
    h = d.inputValue,
    v = S.useRef(void 0),
    g = S.useRef(!1),
    m = S.useState(Array.isArray(n) ? n : void 0),
    C = Ke(m, 2),
    f = C[0],
    p = C[1],
    y = S.useState(typeof h < "u" ? h : ""),
    w = Ke(y, 2),
    I = w[0],
    k = w[1],
    A = S.useState(n === !0),
    R = Ke(A, 2),
    j = R[0],
    U = R[1],
    ee = S.useState(void 0),
    ue = Ke(ee, 2),
    Re = ue[0],
    ze = ue[1],
    ge = S.useState([]),
    se = Ke(ge, 2),
    je = se[0],
    M = se[1],
    B = S.useState(!1),
    V = Ke(B, 2),
    re = V[0],
    q = V[1],
    Ee = S.useState({}),
    Te = Ke(Ee, 2),
    Oe = Te[0],
    ve = Te[1],
    Qe = S.useState(void 0),
    ft = Ke(Qe, 2),
    Fn = ft[0],
    Xo = ft[1],
    Br = S.useState(void 0),
    fr = Ke(Br, 2),
    Zo = fr[0],
    zr = fr[1];
  o !== Zo && (ve({}), zr(o)),
    n !== Fn && (p(Array.isArray(n) ? n : void 0), Xo(n)),
    S.useEffect(function () {
      return (
        (g.current = !0),
        function () {
          g.current = !1;
        }
      );
    }, []);
  var pr = S.useCallback(
    function (jr, Vr) {
      if (!i) return Vr();
      var St = i(jr, Vr);
      St &&
        typeof St.then == "function" &&
        St.then(Vr, function () {
          return Vr();
        });
    },
    [i]
  );
  S.useEffect(function () {
    n === !0 &&
      pr(I, function (jr) {
        g.current && (p(jr || []), U(!!v.current));
      });
  }, []);
  var sl = S.useCallback(
      function (jr, Vr) {
        var St = JO(jr, Vr, c);
        if (!St) {
          (v.current = void 0), k(""), ze(""), M([]), U(!1), q(!1);
          return;
        }
        if (o && Oe[St]) k(St), ze(St), M(Oe[St]), U(!1), q(!1);
        else {
          var xE = (v.current = {});
          k(St),
            U(!0),
            q(!Re),
            pr(St, function (ll) {
              g &&
                xE === v.current &&
                ((v.current = void 0),
                U(!1),
                ze(St),
                M(ll || []),
                q(!1),
                ve(ll ? $($({}, Oe), {}, mo({}, St, ll)) : Oe));
            });
        }
      },
      [o, pr, Re, Oe, c]
    ),
    cl = re ? [] : I && Re ? je : f || [];
  return $(
    $({}, d),
    {},
    { options: cl, isLoading: j || s, onInputChange: sl, filterOption: u }
  );
}
var pM = S.forwardRef(function (t, e) {
    var n = fM(t),
      r = dM(n);
    return S.createElement(hE, G({ ref: e }, r));
  }),
  mM = pM;
function Mg({
  options: t = [],
  label: e = "",
  className: n = "",
  value: r,
  placeholder: o = "",
  overrideClass: i = "",
  overrideDropdownClass: a = "",
  fontFamily: s = "inherit",
  ...c
}) {
  const l = { control: (u) => ({ ...u, fontFamily: s }) };
  return b.jsx("div", {
    className: `flex items-center rounded-3xl gap-1 ${i}`,
    children: b.jsx(mM, {
      ...c,
      styles: l,
      className: `w-52 rounded border-1 border-disabled font-semibold${a}`,
      defaultOptions: t,
      placeholder: o ?? "Select",
      closeMenuOnSelect: !0,
      hideSelectedOptions: !0,
      components: { IndicatorSeparator: () => null },
      options: t,
    }),
  });
}
function gM() {
  return b.jsx("div", {
    className:
      "fixed inset-0 overflow-y-auto flex justify-center items-center h-screen",
    children: b.jsx(nc, {
      cardClass:
        "mt-12 p-2 md:p-4 lg:p-8 w-48 md:w-96 border bg-white rounded-lg",
      headerClass:
        "py-8 flex justify-center items-center font-avantt text-4xl text-yellow-600 font-bold",
      header: "PR-PO",
      body: b.jsxs(b.Fragment, {
        children: [
          b.jsx("hr", {
            className:
              "h-px w-14 flex justify-center items-center bg-gray-500 border-0 dark:bg-gray-700 mx-auto",
          }),
          b.jsx("div", {
            className: "pt-2 text-center font-avantt font-bold text-lg",
            children: "Request for Access",
          }),
          b.jsx("div", {
            className: "pt-1 text-center font-avantt text-xs",
            children:
              "You currently do not have access to the PR-PO module, kindly raise request to get access",
          }),
          " ",
          b.jsx("div", {
            className: "flex justify-center items-center",
            children: b.jsx(Mg, {
              overrideClass: "pt-2 flex justify-center items-center w-full",
              fontFamily: " font-avantt",
              placeholder: "Select Zone",
              options: [
                { value: "afr", label: "AFR" },
                { value: "ghq", label: "GHQ" },
              ],
            }),
          }),
          b.jsx("div", {
            className: "flex justify-center items-center",
            children: b.jsx(Mg, {
              overrideClass: "pt-2 flex justify-center items-center w-full",
              fontFamily: " font-avantt",
              placeholder: "Select Role",
              options: [
                { value: "requestor", label: "Requestor" },
                { value: "approver", label: "Approver" },
                { value: "sourcing", label: "Sourcing" },
              ],
            }),
          }),
          b.jsx("div", {
            className: "p-5 flex justify-center items-center w-full",
            children: b.jsx(Wo, {
              className:
                "p-2 h-10 w-fit bg-black text-white rounded-lg font-avantt font-semibold",
              children: "Request Access",
            }),
          }),
        ],
      }),
      footerClass: "p-4 h-5 flex justify-center items-center",
      footer: b.jsx("img", { src: kw, className: "h-5", alt: "AB InBev Logo" }),
    }),
  });
}
function vM() {
  const t = [
    {
      header: "",
      headerClass: "h-5",
      body: 78,
      bodyClass:
        "h-20 ml-2 mr-2 w-28 lg:w-32  bg-slate-200 flex items-center font-avantt font-semibold text-4xl text-black border rounded-md",
      footer: "Draft",
      footerClass:
        "p-2 justify-center items-center h-10 ml-2 !justify-start !bg-transparent text-xs font-avantt font-semibold max-w-fit whitespace-nowrap",
      cardClass: "px-2 w-36 md:w-40 border border-slate-300",
    },
    {
      header: "",
      headerClass: "h-5",
      body: 79,
      bodyClass:
        "h-20 ml-2 mr-2 w-28 lg:w-32 bg-brown-100 flex items-center font-avantt font-semibold text-4xl text-gold-extralight border rounded-md",
      footer: "Pending Approval",
      footerClass:
        "p-2 justify-center items-center h-10 ml-2 !justify-start !bg-transparent text-xs font-avantt font-semibold max-w-fit whitespace-nowrap",
      cardClass: "px-2 w-36 md:w-40 border border-slate-300",
    },
    {
      header: "",
      headerClass: "h-5",
      body: 46,
      bodyClass:
        "h-20 ml-2 mr-2 w-28 lg:w-32 bg-green-100 flex items-center font-avantt font-semibold text-4xl text-green-700 border rounded-md",
      footer: "In Progress",
      footerClass:
        "p-2 justify-center items-center h-10 ml-2 !justify-start !bg-transparent text-xs font-avantt font-semibold max-w-fit whitespace-nowrap",
      cardClass: "px-2 w-36 md:w-40 border border-slate-300",
    },
    {
      header: "",
      headerClass: "h-5",
      body: 33,
      bodyClass:
        "h-20 ml-2 mr-2 w-28 lg:w-32 bg-brown-100 flex items-center font-avantt font-bold text-3xl text-maroon border rounded-md",
      footer: "On Hold",
      footerClass:
        "p-2 justify-center items-center h-10 ml-2 !justify-start !bg-transparent text-xs font-avantt font-semibold max-w-fit whitespace-nowrap",
      cardClass: "px-2 w-36 md:w-40 border border-slate-300",
    },
  ];
  return b.jsxs("div", {
    className:
      "pt-10 px-4 lg:px-10 lg:gap-4 min-h-full border-opacity-60 flex flex-col lg:flex-row justify-between items-start",
    children: [
      b.jsx("div", {
        className: "w-full lg:w-1/2 lg:pr-4 mb-4 lg:mb-0",
        children: b.jsx("div", {
          className: "pl-4 lg:pl-0",
          children: b.jsx(nc, {
            cardClass: "rounded-lg w-full sm:w-auto md:w-96",
            header: b.jsx("div", {
              className: "font-avantt text-md",
              children: "Welcome",
            }),
            body: b.jsx("div", {
              className: "font-avantt text-4xl text-yellow-600 font-bold",
              children: "Samuel J.",
            }),
          }),
        }),
      }),
      b.jsx("div", {
        className: "w-full md:w-1/2",
        children: b.jsx("div", {
          className: "flex lg:flex-row lg:justify-end lg:items-end gap-4",
          children:
            t == null
              ? void 0
              : t.map((e, n) =>
                  b.jsx(
                    nc,
                    {
                      ...e,
                      cardClass: `rounded-lg bg-white ${
                        e == null ? void 0 : e.cardClass
                      }`,
                      header: b.jsx("div", {
                        className: "font-avantt text-md",
                        children: e == null ? void 0 : e.header,
                      }),
                      body: b.jsx("div", {
                        children: e == null ? void 0 : e.body,
                      }),
                      footer: b.jsx("div", {
                        children: e == null ? void 0 : e.footer,
                      }),
                    },
                    n
                  )
                ),
        }),
      }),
    ],
  });
}
function fE(t, e) {
  return function () {
    return t.apply(e, arguments);
  };
}
const { toString: yM } = Object.prototype,
  { getPrototypeOf: Kf } = Object,
  rl = ((t) => (e) => {
    const n = yM.call(e);
    return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  yn = (t) => ((t = t.toLowerCase()), (e) => rl(e) === t),
  ol = (t) => (e) => typeof e === t,
  { isArray: Jo } = Array,
  ea = ol("undefined");
function CM(t) {
  return (
    t !== null &&
    !ea(t) &&
    t.constructor !== null &&
    !ea(t.constructor) &&
    Ut(t.constructor.isBuffer) &&
    t.constructor.isBuffer(t)
  );
}
const pE = yn("ArrayBuffer");
function SM(t) {
  let e;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (e = ArrayBuffer.isView(t))
      : (e = t && t.buffer && pE(t.buffer)),
    e
  );
}
const wM = ol("string"),
  Ut = ol("function"),
  mE = ol("number"),
  il = (t) => t !== null && typeof t == "object",
  EM = (t) => t === !0 || t === !1,
  ds = (t) => {
    if (rl(t) !== "object") return !1;
    const e = Kf(t);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in t) &&
      !(Symbol.iterator in t)
    );
  },
  TM = yn("Date"),
  IM = yn("File"),
  AM = yn("Blob"),
  kM = yn("FileList"),
  _M = (t) => il(t) && Ut(t.pipe),
  RM = (t) => {
    let e;
    return (
      t &&
      ((typeof FormData == "function" && t instanceof FormData) ||
        (Ut(t.append) &&
          ((e = rl(t)) === "formdata" ||
            (e === "object" &&
              Ut(t.toString) &&
              t.toString() === "[object FormData]"))))
    );
  },
  bM = yn("URLSearchParams"),
  OM = (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function fa(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u") return;
  let r, o;
  if ((typeof t != "object" && (t = [t]), Jo(t)))
    for (r = 0, o = t.length; r < o; r++) e.call(null, t[r], r, t);
  else {
    const i = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
      a = i.length;
    let s;
    for (r = 0; r < a; r++) (s = i[r]), e.call(null, t[s], s, t);
  }
}
function gE(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), e === o.toLowerCase())) return o;
  return null;
}
const vE =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  yE = (t) => !ea(t) && t !== vE;
function Nd() {
  const { caseless: t } = (yE(this) && this) || {},
    e = {},
    n = (r, o) => {
      const i = (t && gE(e, o)) || o;
      ds(e[i]) && ds(r)
        ? (e[i] = Nd(e[i], r))
        : ds(r)
        ? (e[i] = Nd({}, r))
        : Jo(r)
        ? (e[i] = r.slice())
        : (e[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && fa(arguments[r], n);
  return e;
}
const PM = (t, e, n, { allOwnKeys: r } = {}) => (
    fa(
      e,
      (o, i) => {
        n && Ut(o) ? (t[i] = fE(o, n)) : (t[i] = o);
      },
      { allOwnKeys: r }
    ),
    t
  ),
  NM = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
  MM = (t, e, n, r) => {
    (t.prototype = Object.create(e.prototype, r)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, "super", { value: e.prototype }),
      n && Object.assign(t.prototype, n);
  },
  xM = (t, e, n, r) => {
    let o, i, a;
    const s = {};
    if (((e = e || {}), t == null)) return e;
    do {
      for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
        (a = o[i]), (!r || r(a, t, e)) && !s[a] && ((e[a] = t[a]), (s[a] = !0));
      t = n !== !1 && Kf(t);
    } while (t && (!n || n(t, e)) && t !== Object.prototype);
    return e;
  },
  LM = (t, e, n) => {
    (t = String(t)),
      (n === void 0 || n > t.length) && (n = t.length),
      (n -= e.length);
    const r = t.indexOf(e, n);
    return r !== -1 && r === n;
  },
  DM = (t) => {
    if (!t) return null;
    if (Jo(t)) return t;
    let e = t.length;
    if (!mE(e)) return null;
    const n = new Array(e);
    for (; e-- > 0; ) n[e] = t[e];
    return n;
  },
  UM = (
    (t) => (e) =>
      t && e instanceof t
  )(typeof Uint8Array < "u" && Kf(Uint8Array)),
  FM = (t, e) => {
    const r = (t && t[Symbol.iterator]).call(t);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      e.call(t, i[0], i[1]);
    }
  },
  HM = (t, e) => {
    let n;
    const r = [];
    for (; (n = t.exec(e)) !== null; ) r.push(n);
    return r;
  },
  $M = yn("HTMLFormElement"),
  BM = (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  xg = (
    ({ hasOwnProperty: t }) =>
    (e, n) =>
      t.call(e, n)
  )(Object.prototype),
  zM = yn("RegExp"),
  CE = (t, e) => {
    const n = Object.getOwnPropertyDescriptors(t),
      r = {};
    fa(n, (o, i) => {
      let a;
      (a = e(o, i, t)) !== !1 && (r[i] = a || o);
    }),
      Object.defineProperties(t, r);
  },
  jM = (t) => {
    CE(t, (e, n) => {
      if (Ut(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = t[n];
      if (Ut(r)) {
        if (((e.enumerable = !1), "writable" in e)) {
          e.writable = !1;
          return;
        }
        e.set ||
          (e.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  VM = (t, e) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return Jo(t) ? r(t) : r(String(t).split(e)), n;
  },
  KM = () => {},
  GM = (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
  au = "abcdefghijklmnopqrstuvwxyz",
  Lg = "0123456789",
  SE = { DIGIT: Lg, ALPHA: au, ALPHA_DIGIT: au + au.toUpperCase() + Lg },
  WM = (t = 16, e = SE.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = e;
    for (; t--; ) n += e[(Math.random() * r) | 0];
    return n;
  };
function qM(t) {
  return !!(
    t &&
    Ut(t.append) &&
    t[Symbol.toStringTag] === "FormData" &&
    t[Symbol.iterator]
  );
}
const YM = (t) => {
    const e = new Array(10),
      n = (r, o) => {
        if (il(r)) {
          if (e.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            e[o] = r;
            const i = Jo(r) ? [] : {};
            return (
              fa(r, (a, s) => {
                const c = n(a, o + 1);
                !ea(c) && (i[s] = c);
              }),
              (e[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(t, 0);
  },
  QM = yn("AsyncFunction"),
  JM = (t) => t && (il(t) || Ut(t)) && Ut(t.then) && Ut(t.catch),
  _ = {
    isArray: Jo,
    isArrayBuffer: pE,
    isBuffer: CM,
    isFormData: RM,
    isArrayBufferView: SM,
    isString: wM,
    isNumber: mE,
    isBoolean: EM,
    isObject: il,
    isPlainObject: ds,
    isUndefined: ea,
    isDate: TM,
    isFile: IM,
    isBlob: AM,
    isRegExp: zM,
    isFunction: Ut,
    isStream: _M,
    isURLSearchParams: bM,
    isTypedArray: UM,
    isFileList: kM,
    forEach: fa,
    merge: Nd,
    extend: PM,
    trim: OM,
    stripBOM: NM,
    inherits: MM,
    toFlatObject: xM,
    kindOf: rl,
    kindOfTest: yn,
    endsWith: LM,
    toArray: DM,
    forEachEntry: FM,
    matchAll: HM,
    isHTMLForm: $M,
    hasOwnProperty: xg,
    hasOwnProp: xg,
    reduceDescriptors: CE,
    freezeMethods: jM,
    toObjectSet: VM,
    toCamelCase: BM,
    noop: KM,
    toFiniteNumber: GM,
    findKey: gE,
    global: vE,
    isContextDefined: yE,
    ALPHABET: SE,
    generateString: WM,
    isSpecCompliantForm: qM,
    toJSONObject: YM,
    isAsyncFn: QM,
    isThenable: JM,
  };
function J(t, e, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = "AxiosError"),
    e && (this.code = e),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
_.inherits(J, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: _.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const wE = J.prototype,
  EE = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((t) => {
  EE[t] = { value: t };
});
Object.defineProperties(J, EE);
Object.defineProperty(wE, "isAxiosError", { value: !0 });
J.from = (t, e, n, r, o, i) => {
  const a = Object.create(wE);
  return (
    _.toFlatObject(
      t,
      a,
      function (c) {
        return c !== Error.prototype;
      },
      (s) => s !== "isAxiosError"
    ),
    J.call(a, t.message, e, n, r, o),
    (a.cause = t),
    (a.name = t.name),
    i && Object.assign(a, i),
    a
  );
};
const XM = null;
function Md(t) {
  return _.isPlainObject(t) || _.isArray(t);
}
function TE(t) {
  return _.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Dg(t, e, n) {
  return t
    ? t
        .concat(e)
        .map(function (o, i) {
          return (o = TE(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : e;
}
function ZM(t) {
  return _.isArray(t) && !t.some(Md);
}
const ex = _.toFlatObject(_, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function al(t, e, n) {
  if (!_.isObject(t)) throw new TypeError("target must be an object");
  (e = e || new FormData()),
    (n = _.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (m, C) {
        return !_.isUndefined(C[m]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || u,
    i = n.dots,
    a = n.indexes,
    c = (n.Blob || (typeof Blob < "u" && Blob)) && _.isSpecCompliantForm(e);
  if (!_.isFunction(o)) throw new TypeError("visitor must be a function");
  function l(g) {
    if (g === null) return "";
    if (_.isDate(g)) return g.toISOString();
    if (!c && _.isBlob(g))
      throw new J("Blob is not supported. Use a Buffer instead.");
    return _.isArrayBuffer(g) || _.isTypedArray(g)
      ? c && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function u(g, m, C) {
    let f = g;
    if (g && !C && typeof g == "object") {
      if (_.endsWith(m, "{}"))
        (m = r ? m : m.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (_.isArray(g) && ZM(g)) ||
        ((_.isFileList(g) || _.endsWith(m, "[]")) && (f = _.toArray(g)))
      )
        return (
          (m = TE(m)),
          f.forEach(function (y, w) {
            !(_.isUndefined(y) || y === null) &&
              e.append(
                a === !0 ? Dg([m], w, i) : a === null ? m : m + "[]",
                l(y)
              );
          }),
          !1
        );
    }
    return Md(g) ? !0 : (e.append(Dg(C, m, i), l(g)), !1);
  }
  const d = [],
    h = Object.assign(ex, {
      defaultVisitor: u,
      convertValue: l,
      isVisitable: Md,
    });
  function v(g, m) {
    if (!_.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(g),
        _.forEach(g, function (f, p) {
          (!(_.isUndefined(f) || f === null) &&
            o.call(e, f, _.isString(p) ? p.trim() : p, m, h)) === !0 &&
            v(f, m ? m.concat(p) : [p]);
        }),
        d.pop();
    }
  }
  if (!_.isObject(t)) throw new TypeError("data must be an object");
  return v(t), e;
}
function Ug(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (r) {
    return e[r];
  });
}
function Gf(t, e) {
  (this._pairs = []), t && al(t, this, e);
}
const IE = Gf.prototype;
IE.append = function (e, n) {
  this._pairs.push([e, n]);
};
IE.toString = function (e) {
  const n = e
    ? function (r) {
        return e.call(this, r, Ug);
      }
    : Ug;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function tx(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function AE(t, e, n) {
  if (!e) return t;
  const r = (n && n.encode) || tx,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(e, n))
      : (i = _.isURLSearchParams(e) ? e.toString() : new Gf(e, n).toString(r)),
    i)
  ) {
    const a = t.indexOf("#");
    a !== -1 && (t = t.slice(0, a)),
      (t += (t.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return t;
}
class Fg {
  constructor() {
    this.handlers = [];
  }
  use(e, n, r) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(e) {
    _.forEach(this.handlers, function (r) {
      r !== null && e(r);
    });
  }
}
const kE = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  nx = typeof URLSearchParams < "u" ? URLSearchParams : Gf,
  rx = typeof FormData < "u" ? FormData : null,
  ox = typeof Blob < "u" ? Blob : null,
  ix = {
    isBrowser: !0,
    classes: { URLSearchParams: nx, FormData: rx, Blob: ox },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  _E = typeof window < "u" && typeof document < "u",
  ax = ((t) => _E && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  sx =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  cx = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: _E,
        hasStandardBrowserEnv: ax,
        hasStandardBrowserWebWorkerEnv: sx,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  un = { ...cx, ...ix };
function lx(t, e) {
  return al(
    t,
    new un.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return un.isNode && _.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      e
    )
  );
}
function ux(t) {
  return _.matchAll(/\w+|\[(\w*)]/g, t).map((e) =>
    e[0] === "[]" ? "" : e[1] || e[0]
  );
}
function dx(t) {
  const e = {},
    n = Object.keys(t);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (e[i] = t[i]);
  return e;
}
function RE(t) {
  function e(n, r, o, i) {
    let a = n[i++];
    if (a === "__proto__") return !0;
    const s = Number.isFinite(+a),
      c = i >= n.length;
    return (
      (a = !a && _.isArray(o) ? o.length : a),
      c
        ? (_.hasOwnProp(o, a) ? (o[a] = [o[a], r]) : (o[a] = r), !s)
        : ((!o[a] || !_.isObject(o[a])) && (o[a] = []),
          e(n, r, o[a], i) && _.isArray(o[a]) && (o[a] = dx(o[a])),
          !s)
    );
  }
  if (_.isFormData(t) && _.isFunction(t.entries)) {
    const n = {};
    return (
      _.forEachEntry(t, (r, o) => {
        e(ux(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function hx(t, e, n) {
  if (_.isString(t))
    try {
      return (e || JSON.parse)(t), _.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(t);
}
const pa = {
  transitional: kE,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (e, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = _.isObject(e);
      if ((i && _.isHTMLForm(e) && (e = new FormData(e)), _.isFormData(e)))
        return o ? JSON.stringify(RE(e)) : e;
      if (
        _.isArrayBuffer(e) ||
        _.isBuffer(e) ||
        _.isStream(e) ||
        _.isFile(e) ||
        _.isBlob(e)
      )
        return e;
      if (_.isArrayBufferView(e)) return e.buffer;
      if (_.isURLSearchParams(e))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          e.toString()
        );
      let s;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return lx(e, this.formSerializer).toString();
        if ((s = _.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return al(
            s ? { "files[]": e } : e,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), hx(e)) : e;
    },
  ],
  transformResponse: [
    function (e) {
      const n = this.transitional || pa.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (e && _.isString(e) && ((r && !this.responseType) || o)) {
        const a = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(e);
        } catch (s) {
          if (a)
            throw s.name === "SyntaxError"
              ? J.from(s, J.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: un.classes.FormData, Blob: un.classes.Blob },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
_.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  pa.headers[t] = {};
});
const fx = _.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  px = (t) => {
    const e = {};
    let n, r, o;
    return (
      t &&
        t
          .split(
            `
`
          )
          .forEach(function (a) {
            (o = a.indexOf(":")),
              (n = a.substring(0, o).trim().toLowerCase()),
              (r = a.substring(o + 1).trim()),
              !(!n || (e[n] && fx[n])) &&
                (n === "set-cookie"
                  ? e[n]
                    ? e[n].push(r)
                    : (e[n] = [r])
                  : (e[n] = e[n] ? e[n] + ", " + r : r));
          }),
      e
    );
  },
  Hg = Symbol("internals");
function hi(t) {
  return t && String(t).trim().toLowerCase();
}
function hs(t) {
  return t === !1 || t == null ? t : _.isArray(t) ? t.map(hs) : String(t);
}
function mx(t) {
  const e = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(t)); ) e[r[1]] = r[2];
  return e;
}
const gx = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function su(t, e, n, r, o) {
  if (_.isFunction(r)) return r.call(this, e, n);
  if ((o && (e = n), !!_.isString(e))) {
    if (_.isString(r)) return e.indexOf(r) !== -1;
    if (_.isRegExp(r)) return r.test(e);
  }
}
function vx(t) {
  return t
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function yx(t, e) {
  const n = _.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function (o, i, a) {
        return this[r].call(this, e, o, i, a);
      },
      configurable: !0,
    });
  });
}
class Ft {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const o = this;
    function i(s, c, l) {
      const u = hi(c);
      if (!u) throw new Error("header name must be a non-empty string");
      const d = _.findKey(o, u);
      (!d || o[d] === void 0 || l === !0 || (l === void 0 && o[d] !== !1)) &&
        (o[d || c] = hs(s));
    }
    const a = (s, c) => _.forEach(s, (l, u) => i(l, u, c));
    return (
      _.isPlainObject(e) || e instanceof this.constructor
        ? a(e, n)
        : _.isString(e) && (e = e.trim()) && !gx(e)
        ? a(px(e), n)
        : e != null && i(n, e, r),
      this
    );
  }
  get(e, n) {
    if (((e = hi(e)), e)) {
      const r = _.findKey(this, e);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return mx(o);
        if (_.isFunction(n)) return n.call(this, o, r);
        if (_.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (((e = hi(e)), e)) {
      const r = _.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || su(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let o = !1;
    function i(a) {
      if (((a = hi(a)), a)) {
        const s = _.findKey(r, a);
        s && (!n || su(r, r[s], s, n)) && (delete r[s], (o = !0));
      }
    }
    return _.isArray(e) ? e.forEach(i) : i(e), o;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!e || su(this, this[i], i, e, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(e) {
    const n = this,
      r = {};
    return (
      _.forEach(this, (o, i) => {
        const a = _.findKey(r, i);
        if (a) {
          (n[a] = hs(o)), delete n[i];
          return;
        }
        const s = e ? vx(i) : String(i).trim();
        s !== i && delete n[i], (n[s] = hs(o)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = Object.create(null);
    return (
      _.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = e && _.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(e) {
    const r = (this[Hg] = this[Hg] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(a) {
      const s = hi(a);
      r[s] || (yx(o, a), (r[s] = !0));
    }
    return _.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
Ft.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
_.reduceDescriptors(Ft.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    },
  };
});
_.freezeMethods(Ft);
function cu(t, e) {
  const n = this || pa,
    r = e || n,
    o = Ft.from(r.headers);
  let i = r.data;
  return (
    _.forEach(t, function (s) {
      i = s.call(n, i, o.normalize(), e ? e.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function bE(t) {
  return !!(t && t.__CANCEL__);
}
function ma(t, e, n) {
  J.call(this, t ?? "canceled", J.ERR_CANCELED, e, n),
    (this.name = "CanceledError");
}
_.inherits(ma, J, { __CANCEL__: !0 });
function Cx(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? t(n)
    : e(
        new J(
          "Request failed with status code " + n.status,
          [J.ERR_BAD_REQUEST, J.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const Sx = un.hasStandardBrowserEnv
  ? {
      write(t, e, n, r, o, i) {
        const a = [t + "=" + encodeURIComponent(e)];
        _.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
          _.isString(r) && a.push("path=" + r),
          _.isString(o) && a.push("domain=" + o),
          i === !0 && a.push("secure"),
          (document.cookie = a.join("; "));
      },
      read(t) {
        const e = document.cookie.match(
          new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
        );
        return e ? decodeURIComponent(e[3]) : null;
      },
      remove(t) {
        this.write(t, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function wx(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Ex(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function OE(t, e) {
  return t && !wx(e) ? Ex(t, e) : e;
}
const Tx = un.hasStandardBrowserEnv
  ? (function () {
      const e = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(i) {
        let a = i;
        return (
          e && (n.setAttribute("href", a), (a = n.href)),
          n.setAttribute("href", a),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (a) {
          const s = _.isString(a) ? o(a) : a;
          return s.protocol === r.protocol && s.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Ix(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (e && e[1]) || "";
}
function Ax(t, e) {
  t = t || 10;
  const n = new Array(t),
    r = new Array(t);
  let o = 0,
    i = 0,
    a;
  return (
    (e = e !== void 0 ? e : 1e3),
    function (c) {
      const l = Date.now(),
        u = r[i];
      a || (a = l), (n[o] = c), (r[o] = l);
      let d = i,
        h = 0;
      for (; d !== o; ) (h += n[d++]), (d = d % t);
      if (((o = (o + 1) % t), o === i && (i = (i + 1) % t), l - a < e)) return;
      const v = u && l - u;
      return v ? Math.round((h * 1e3) / v) : void 0;
    }
  );
}
function $g(t, e) {
  let n = 0;
  const r = Ax(50, 250);
  return (o) => {
    const i = o.loaded,
      a = o.lengthComputable ? o.total : void 0,
      s = i - n,
      c = r(s),
      l = i <= a;
    n = i;
    const u = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: c || void 0,
      estimated: c && a && l ? (a - i) / c : void 0,
      event: o,
    };
    (u[e ? "download" : "upload"] = !0), t(u);
  };
}
const kx = typeof XMLHttpRequest < "u",
  _x =
    kx &&
    function (t) {
      return new Promise(function (n, r) {
        let o = t.data;
        const i = Ft.from(t.headers).normalize();
        let { responseType: a, withXSRFToken: s } = t,
          c;
        function l() {
          t.cancelToken && t.cancelToken.unsubscribe(c),
            t.signal && t.signal.removeEventListener("abort", c);
        }
        let u;
        if (_.isFormData(o)) {
          if (un.hasStandardBrowserEnv || un.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1);
          else if ((u = i.getContentType()) !== !1) {
            const [m, ...C] = u
              ? u
                  .split(";")
                  .map((f) => f.trim())
                  .filter(Boolean)
              : [];
            i.setContentType([m || "multipart/form-data", ...C].join("; "));
          }
        }
        let d = new XMLHttpRequest();
        if (t.auth) {
          const m = t.auth.username || "",
            C = t.auth.password
              ? unescape(encodeURIComponent(t.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(m + ":" + C));
        }
        const h = OE(t.baseURL, t.url);
        d.open(t.method.toUpperCase(), AE(h, t.params, t.paramsSerializer), !0),
          (d.timeout = t.timeout);
        function v() {
          if (!d) return;
          const m = Ft.from(
              "getAllResponseHeaders" in d && d.getAllResponseHeaders()
            ),
            f = {
              data:
                !a || a === "text" || a === "json"
                  ? d.responseText
                  : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: m,
              config: t,
              request: d,
            };
          Cx(
            function (y) {
              n(y), l();
            },
            function (y) {
              r(y), l();
            },
            f
          ),
            (d = null);
        }
        if (
          ("onloadend" in d
            ? (d.onloadend = v)
            : (d.onreadystatechange = function () {
                !d ||
                  d.readyState !== 4 ||
                  (d.status === 0 &&
                    !(d.responseURL && d.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(v);
              }),
          (d.onabort = function () {
            d &&
              (r(new J("Request aborted", J.ECONNABORTED, t, d)), (d = null));
          }),
          (d.onerror = function () {
            r(new J("Network Error", J.ERR_NETWORK, t, d)), (d = null);
          }),
          (d.ontimeout = function () {
            let C = t.timeout
              ? "timeout of " + t.timeout + "ms exceeded"
              : "timeout exceeded";
            const f = t.transitional || kE;
            t.timeoutErrorMessage && (C = t.timeoutErrorMessage),
              r(
                new J(
                  C,
                  f.clarifyTimeoutError ? J.ETIMEDOUT : J.ECONNABORTED,
                  t,
                  d
                )
              ),
              (d = null);
          }),
          un.hasStandardBrowserEnv &&
            (s && _.isFunction(s) && (s = s(t)), s || (s !== !1 && Tx(h))))
        ) {
          const m =
            t.xsrfHeaderName && t.xsrfCookieName && Sx.read(t.xsrfCookieName);
          m && i.set(t.xsrfHeaderName, m);
        }
        o === void 0 && i.setContentType(null),
          "setRequestHeader" in d &&
            _.forEach(i.toJSON(), function (C, f) {
              d.setRequestHeader(f, C);
            }),
          _.isUndefined(t.withCredentials) ||
            (d.withCredentials = !!t.withCredentials),
          a && a !== "json" && (d.responseType = t.responseType),
          typeof t.onDownloadProgress == "function" &&
            d.addEventListener("progress", $g(t.onDownloadProgress, !0)),
          typeof t.onUploadProgress == "function" &&
            d.upload &&
            d.upload.addEventListener("progress", $g(t.onUploadProgress)),
          (t.cancelToken || t.signal) &&
            ((c = (m) => {
              d &&
                (r(!m || m.type ? new ma(null, t, d) : m),
                d.abort(),
                (d = null));
            }),
            t.cancelToken && t.cancelToken.subscribe(c),
            t.signal &&
              (t.signal.aborted ? c() : t.signal.addEventListener("abort", c)));
        const g = Ix(h);
        if (g && un.protocols.indexOf(g) === -1) {
          r(new J("Unsupported protocol " + g + ":", J.ERR_BAD_REQUEST, t));
          return;
        }
        d.send(o || null);
      });
    },
  xd = { http: XM, xhr: _x };
_.forEach(xd, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {}
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Bg = (t) => `- ${t}`,
  Rx = (t) => _.isFunction(t) || t === null || t === !1,
  PE = {
    getAdapter: (t) => {
      t = _.isArray(t) ? t : [t];
      const { length: e } = t;
      let n, r;
      const o = {};
      for (let i = 0; i < e; i++) {
        n = t[i];
        let a;
        if (
          ((r = n),
          !Rx(n) && ((r = xd[(a = String(n)).toLowerCase()]), r === void 0))
        )
          throw new J(`Unknown adapter '${a}'`);
        if (r) break;
        o[a || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([s, c]) =>
            `adapter ${s} ` +
            (c === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let a = e
          ? i.length > 1
            ? `since :
` +
              i.map(Bg).join(`
`)
            : " " + Bg(i[0])
          : "as no adapter specified";
        throw new J(
          "There is no suitable adapter to dispatch the request " + a,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: xd,
  };
function lu(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new ma(null, t);
}
function zg(t) {
  return (
    lu(t),
    (t.headers = Ft.from(t.headers)),
    (t.data = cu.call(t, t.transformRequest)),
    ["post", "put", "patch"].indexOf(t.method) !== -1 &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1),
    PE.getAdapter(t.adapter || pa.adapter)(t).then(
      function (r) {
        return (
          lu(t),
          (r.data = cu.call(t, t.transformResponse, r)),
          (r.headers = Ft.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          bE(r) ||
            (lu(t),
            r &&
              r.response &&
              ((r.response.data = cu.call(t, t.transformResponse, r.response)),
              (r.response.headers = Ft.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const jg = (t) => (t instanceof Ft ? { ...t } : t);
function Ho(t, e) {
  e = e || {};
  const n = {};
  function r(l, u, d) {
    return _.isPlainObject(l) && _.isPlainObject(u)
      ? _.merge.call({ caseless: d }, l, u)
      : _.isPlainObject(u)
      ? _.merge({}, u)
      : _.isArray(u)
      ? u.slice()
      : u;
  }
  function o(l, u, d) {
    if (_.isUndefined(u)) {
      if (!_.isUndefined(l)) return r(void 0, l, d);
    } else return r(l, u, d);
  }
  function i(l, u) {
    if (!_.isUndefined(u)) return r(void 0, u);
  }
  function a(l, u) {
    if (_.isUndefined(u)) {
      if (!_.isUndefined(l)) return r(void 0, l);
    } else return r(void 0, u);
  }
  function s(l, u, d) {
    if (d in e) return r(l, u);
    if (d in t) return r(void 0, l);
  }
  const c = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (l, u) => o(jg(l), jg(u), !0),
  };
  return (
    _.forEach(Object.keys(Object.assign({}, t, e)), function (u) {
      const d = c[u] || o,
        h = d(t[u], e[u], u);
      (_.isUndefined(h) && d !== s) || (n[u] = h);
    }),
    n
  );
}
const NE = "1.6.8",
  Wf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, e) => {
    Wf[t] = function (r) {
      return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
    };
  }
);
const Vg = {};
Wf.transitional = function (e, n, r) {
  function o(i, a) {
    return (
      "[Axios v" +
      NE +
      "] Transitional option '" +
      i +
      "'" +
      a +
      (r ? ". " + r : "")
    );
  }
  return (i, a, s) => {
    if (e === !1)
      throw new J(
        o(a, " has been removed" + (n ? " in " + n : "")),
        J.ERR_DEPRECATED
      );
    return (
      n &&
        !Vg[a] &&
        ((Vg[a] = !0),
        console.warn(
          o(
            a,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      e ? e(i, a, s) : !0
    );
  };
};
function bx(t, e, n) {
  if (typeof t != "object")
    throw new J("options must be an object", J.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      a = e[i];
    if (a) {
      const s = t[i],
        c = s === void 0 || a(s, i, t);
      if (c !== !0)
        throw new J("option " + i + " must be " + c, J.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new J("Unknown option " + i, J.ERR_BAD_OPTION);
  }
}
const Ld = { assertOptions: bx, validators: Wf },
  Bn = Ld.validators;
class Ar {
  constructor(e) {
    (this.defaults = e),
      (this.interceptors = { request: new Fg(), response: new Fg() });
  }
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? i &&
            !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + i)
          : (r.stack = i);
      }
      throw r;
    }
  }
  _request(e, n) {
    typeof e == "string" ? ((n = n || {}), (n.url = e)) : (n = e || {}),
      (n = Ho(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Ld.assertOptions(
        r,
        {
          silentJSONParsing: Bn.transitional(Bn.boolean),
          forcedJSONParsing: Bn.transitional(Bn.boolean),
          clarifyTimeoutError: Bn.transitional(Bn.boolean),
        },
        !1
      ),
      o != null &&
        (_.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Ld.assertOptions(
              o,
              { encode: Bn.function, serialize: Bn.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let a = i && _.merge(i.common, i[n.method]);
    i &&
      _.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete i[g];
        }
      ),
      (n.headers = Ft.concat(a, i));
    const s = [];
    let c = !0;
    this.interceptors.request.forEach(function (m) {
      (typeof m.runWhen == "function" && m.runWhen(n) === !1) ||
        ((c = c && m.synchronous), s.unshift(m.fulfilled, m.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function (m) {
      l.push(m.fulfilled, m.rejected);
    });
    let u,
      d = 0,
      h;
    if (!c) {
      const g = [zg.bind(this), void 0];
      for (
        g.unshift.apply(g, s),
          g.push.apply(g, l),
          h = g.length,
          u = Promise.resolve(n);
        d < h;

      )
        u = u.then(g[d++], g[d++]);
      return u;
    }
    h = s.length;
    let v = n;
    for (d = 0; d < h; ) {
      const g = s[d++],
        m = s[d++];
      try {
        v = g(v);
      } catch (C) {
        m.call(this, C);
        break;
      }
    }
    try {
      u = zg.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, h = l.length; d < h; ) u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(e) {
    e = Ho(this.defaults, e);
    const n = OE(e.baseURL, e.url);
    return AE(n, e.params, e.paramsSerializer);
  }
}
_.forEach(["delete", "get", "head", "options"], function (e) {
  Ar.prototype[e] = function (n, r) {
    return this.request(
      Ho(r || {}, { method: e, url: n, data: (r || {}).data })
    );
  };
});
_.forEach(["post", "put", "patch"], function (e) {
  function n(r) {
    return function (i, a, s) {
      return this.request(
        Ho(s || {}, {
          method: e,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: a,
        })
      );
    };
  }
  (Ar.prototype[e] = n()), (Ar.prototype[e + "Form"] = n(!0));
});
class qf {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const a = new Promise((s) => {
          r.subscribe(s), (i = s);
        }).then(o);
        return (
          (a.cancel = function () {
            r.unsubscribe(i);
          }),
          a
        );
      }),
      e(function (i, a, s) {
        r.reason || ((r.reason = new ma(i, a, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let e;
    return {
      token: new qf(function (o) {
        e = o;
      }),
      cancel: e,
    };
  }
}
function Ox(t) {
  return function (n) {
    return t.apply(null, n);
  };
}
function Px(t) {
  return _.isObject(t) && t.isAxiosError === !0;
}
const Dd = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Dd).forEach(([t, e]) => {
  Dd[e] = t;
});
function ME(t) {
  const e = new Ar(t),
    n = fE(Ar.prototype.request, e);
  return (
    _.extend(n, Ar.prototype, e, { allOwnKeys: !0 }),
    _.extend(n, e, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return ME(Ho(t, o));
    }),
    n
  );
}
const Le = ME(pa);
Le.Axios = Ar;
Le.CanceledError = ma;
Le.CancelToken = qf;
Le.isCancel = bE;
Le.VERSION = NE;
Le.toFormData = al;
Le.AxiosError = J;
Le.Cancel = Le.CanceledError;
Le.all = function (e) {
  return Promise.all(e);
};
Le.spread = Ox;
Le.isAxiosError = Px;
Le.mergeConfig = Ho;
Le.AxiosHeaders = Ft;
Le.formToJSON = (t) => RE(_.isHTMLForm(t) ? new FormData(t) : t);
Le.getAdapter = PE.getAdapter;
Le.HttpStatusCode = Dd;
Le.default = Le;
async function Nx({
  url: t,
  routes: e = "",
  data: n = {},
  config: r = { headers: { Authorization: localStorage.getItem("id_token") } },
}) {
  return await Le.post(`http://localhost:3001/${e}`, n, {
    ...r,
    headers: { ...((r == null ? void 0 : r.headers) ?? {}) },
  })
    .then((o) => {
      var i, a;
      return (i = o == null ? void 0 : o.data) != null && i.success
        ? (a = o == null ? void 0 : o.data) == null
          ? void 0
          : a.data
        : o == null
        ? void 0
        : o.data;
    })
    .catch((o) => console.error(o));
}
const Mx = () => {
  const t = zc(),
    e = Cw(),
    { instance: n, accounts: r, inProgress: o } = xc(),
    i = HS();
  S.useContext(Tw),
    S.useEffect(() => {
      const c = new URLSearchParams(t.search).get("redirect");
      !i && o === Ie.None && e(c ? `/login?redirect=${c}` : "/login");
    }, [o]),
    S.useEffect(() => {
      (r == null ? void 0 : r.length) > 0 && a();
    }, [r, o]);
  const a = async () => {
    n.acquireTokenSilent({ ...Ew, account: r[0] })
      .then(async (s) => {
        localStorage.setItem("id_token", s == null ? void 0 : s.idToken),
          await Nx({
            data: { id_token: s == null ? void 0 : s.idToken },
            routes: "afr_routes/users",
          });
      })
      .catch((s) => {
        console.log(`Error occurred while acquiring token: ${s}`);
      });
  };
  return b.jsxs("div", {
    className: "min-h-screen bg-gray-100 flex flex-col bg-cover",
    style: { backgroundImage: `url(${m1})` },
    children: [
      !["/login"].includes(t == null ? void 0 : t.pathname) && b.jsx(O1, {}),
      b.jsx("div", {
        className: "flex-grow overflow-y-auto bg-cover",
        children: b.jsxs(d1, {
          children: [
            b.jsx(as, { path: "/login", element: b.jsx(P1, {}) }),
            b.jsx(as, { path: "/request", element: b.jsx(gM, {}) }),
            b.jsx(as, { path: "/dashboard", element: b.jsx(vM, {}) }),
          ],
        }),
      }),
      b.jsx(S1, {}),
    ],
  });
};
function xx({ msalInstance: t }) {
  return b.jsx("div", {
    className: "App",
    children: b.jsx(p1, {
      children: b.jsx(E_, {
        instance: t,
        children: b.jsx(YS, {
          children: b.jsx(C1, { children: b.jsx(Mx, {}) }),
        }),
      }),
    }),
  });
}
const Lx = ku.createRoot(document.getElementById("root")),
  Dx = new Ih(g1);
Lx.render(b.jsx(K.StrictMode, { children: b.jsx(xx, { msalInstance: Dx }) }));