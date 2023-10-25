// index.mjs
var kB = Object.create;
var RA = Object.defineProperty;
var FB = Object.getOwnPropertyDescriptor;
var HB = Object.getOwnPropertyNames;
var iB = Object.getPrototypeOf;
var oB = Object.prototype.hasOwnProperty;
var NB = (E, G) => () => (G || E((G = { exports: {} }).exports, G), G.exports);
var YB = (E, G, D, o) => {
  if (G && typeof G == "object" || typeof G == "function")
    for (let F of HB(G))
      !oB.call(E, F) && F !== D && RA(E, F, { get: () => G[F], enumerable: !(o = FB(G, F)) || o.enumerable });
  return E;
};
var cB = (E, G, D) => (D = E != null ? kB(iB(E)) : {}, YB(G || !E || !E.__esModule ? RA(D, "default", { value: E, enumerable: true }) : D, E));
var OA = NB((gQ, uA) => {
  var XB = Object.create, CA = Object.defineProperty, xB = Object.getOwnPropertyDescriptor, eB = Object.getOwnPropertyNames, mB = Object.getPrototypeOf, nB = Object.prototype.hasOwnProperty, DA = (E, G) => () => (G || E((G = { exports: {} }).exports, G), G.exports), fB = (E, G) => {
    for (var D in G)
      CA(E, D, { get: G[D], enumerable: true });
  }, lA = (E, G, D, o) => {
    if (G && typeof G == "object" || typeof G == "function")
      for (let F of eB(G))
        !nB.call(E, F) && F !== D && CA(E, F, { get: () => G[F], enumerable: !(o = xB(G, F)) || o.enumerable });
    return E;
  }, uB = (E, G, D) => (D = E != null ? XB(mB(E)) : {}, lA(G || !E || !E.__esModule ? CA(D, "default", { value: E, enumerable: true }) : D, E)), OB = (E) => lA(CA({}, "__esModule", { value: true }), E), jB = DA((E) => {
    "use strict";
    E.byteLength = a, E.toByteArray = d, E.fromByteArray = K;
    var G = [], D = [], o = typeof Uint8Array < "u" ? Uint8Array : Array, F = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (N = 0, H = F.length; N < H; ++N)
      G[N] = F[N], D[F.charCodeAt(N)] = N;
    var N, H;
    D["-".charCodeAt(0)] = 62, D["_".charCodeAt(0)] = 63;
    function g(i) {
      var Y = i.length;
      if (Y % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var c = i.indexOf("=");
      c === -1 && (c = Y);
      var S = c === Y ? 0 : 4 - c % 4;
      return [c, S];
    }
    function a(i) {
      var Y = g(i), c = Y[0], S = Y[1];
      return (c + S) * 3 / 4 - S;
    }
    function y(i, Y, c) {
      return (Y + c) * 3 / 4 - c;
    }
    function d(i) {
      var Y, c = g(i), S = c[0], p = c[1], s = new o(y(i, S, p)), M = 0, W = p > 0 ? S - 4 : S, V;
      for (V = 0; V < W; V += 4)
        Y = D[i.charCodeAt(V)] << 18 | D[i.charCodeAt(V + 1)] << 12 | D[i.charCodeAt(V + 2)] << 6 | D[i.charCodeAt(V + 3)], s[M++] = Y >> 16 & 255, s[M++] = Y >> 8 & 255, s[M++] = Y & 255;
      return p === 2 && (Y = D[i.charCodeAt(V)] << 2 | D[i.charCodeAt(V + 1)] >> 4, s[M++] = Y & 255), p === 1 && (Y = D[i.charCodeAt(V)] << 10 | D[i.charCodeAt(V + 1)] << 4 | D[i.charCodeAt(V + 2)] >> 2, s[M++] = Y >> 8 & 255, s[M++] = Y & 255), s;
    }
    function h(i) {
      return G[i >> 18 & 63] + G[i >> 12 & 63] + G[i >> 6 & 63] + G[i & 63];
    }
    function U(i, Y, c) {
      for (var S, p = [], s = Y; s < c; s += 3)
        S = (i[s] << 16 & 16711680) + (i[s + 1] << 8 & 65280) + (i[s + 2] & 255), p.push(h(S));
      return p.join("");
    }
    function K(i) {
      for (var Y, c = i.length, S = c % 3, p = [], s = 16383, M = 0, W = c - S; M < W; M += s)
        p.push(U(i, M, M + s > W ? W : M + s));
      return S === 1 ? (Y = i[c - 1], p.push(G[Y >> 2] + G[Y << 4 & 63] + "==")) : S === 2 && (Y = (i[c - 2] << 8) + i[c - 1], p.push(G[Y >> 10] + G[Y >> 4 & 63] + G[Y << 2 & 63] + "=")), p.join("");
    }
  }), vB = DA((E) => {
    E.read = function(G, D, o, F, N) {
      var H, g, a = N * 8 - F - 1, y = (1 << a) - 1, d = y >> 1, h = -7, U = o ? N - 1 : 0, K = o ? -1 : 1, i = G[D + U];
      for (U += K, H = i & (1 << -h) - 1, i >>= -h, h += a; h > 0; H = H * 256 + G[D + U], U += K, h -= 8)
        ;
      for (g = H & (1 << -h) - 1, H >>= -h, h += F; h > 0; g = g * 256 + G[D + U], U += K, h -= 8)
        ;
      if (H === 0)
        H = 1 - d;
      else {
        if (H === y)
          return g ? NaN : (i ? -1 : 1) * (1 / 0);
        g = g + Math.pow(2, F), H = H - d;
      }
      return (i ? -1 : 1) * g * Math.pow(2, H - F);
    }, E.write = function(G, D, o, F, N, H) {
      var g, a, y, d = H * 8 - N - 1, h = (1 << d) - 1, U = h >> 1, K = N === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, i = F ? 0 : H - 1, Y = F ? 1 : -1, c = D < 0 || D === 0 && 1 / D < 0 ? 1 : 0;
      for (D = Math.abs(D), isNaN(D) || D === 1 / 0 ? (a = isNaN(D) ? 1 : 0, g = h) : (g = Math.floor(Math.log(D) / Math.LN2), D * (y = Math.pow(2, -g)) < 1 && (g--, y *= 2), g + U >= 1 ? D += K / y : D += K * Math.pow(2, 1 - U), D * y >= 2 && (g++, y /= 2), g + U >= h ? (a = 0, g = h) : g + U >= 1 ? (a = (D * y - 1) * Math.pow(2, N), g = g + U) : (a = D * Math.pow(2, U - 1) * Math.pow(2, N), g = 0)); N >= 8; G[o + i] = a & 255, i += Y, a /= 256, N -= 8)
        ;
      for (g = g << N | a, d += N; d > 0; G[o + i] = g & 255, i += Y, g /= 256, d -= 8)
        ;
      G[o + i - Y] |= c * 128;
    };
  }), TB = DA((E) => {
    "use strict";
    var G = jB(), D = vB(), o = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    E.Buffer = g, E.SlowBuffer = p, E.INSPECT_MAX_BYTES = 50;
    var F = 2147483647;
    E.kMaxLength = F, g.TYPED_ARRAY_SUPPORT = N(), !g.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function N() {
      try {
        let A = new Uint8Array(1), B = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(B, Uint8Array.prototype), Object.setPrototypeOf(A, B), A.foo() === 42;
      } catch {
        return false;
      }
    }
    Object.defineProperty(g.prototype, "parent", { enumerable: true, get: function() {
      if (g.isBuffer(this))
        return this.buffer;
    } }), Object.defineProperty(g.prototype, "offset", { enumerable: true, get: function() {
      if (g.isBuffer(this))
        return this.byteOffset;
    } });
    function H(A) {
      if (A > F)
        throw new RangeError('The value "' + A + '" is invalid for option "size"');
      let B = new Uint8Array(A);
      return Object.setPrototypeOf(B, g.prototype), B;
    }
    function g(A, B, Q) {
      if (typeof A == "number") {
        if (typeof B == "string")
          throw new TypeError('The "string" argument must be of type string. Received type number');
        return h(A);
      }
      return a(A, B, Q);
    }
    g.poolSize = 8192;
    function a(A, B, Q) {
      if (typeof A == "string")
        return U(A, B);
      if (ArrayBuffer.isView(A))
        return i(A);
      if (A == null)
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof A);
      if (e(A, ArrayBuffer) || A && e(A.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (e(A, SharedArrayBuffer) || A && e(A.buffer, SharedArrayBuffer)))
        return Y(A, B, Q);
      if (typeof A == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      let C = A.valueOf && A.valueOf();
      if (C != null && C !== A)
        return g.from(C, B, Q);
      let I = c(A);
      if (I)
        return I;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof A[Symbol.toPrimitive] == "function")
        return g.from(A[Symbol.toPrimitive]("string"), B, Q);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof A);
    }
    g.from = function(A, B, Q) {
      return a(A, B, Q);
    }, Object.setPrototypeOf(g.prototype, Uint8Array.prototype), Object.setPrototypeOf(g, Uint8Array);
    function y(A) {
      if (typeof A != "number")
        throw new TypeError('"size" argument must be of type number');
      if (A < 0)
        throw new RangeError('The value "' + A + '" is invalid for option "size"');
    }
    function d(A, B, Q) {
      return y(A), A <= 0 ? H(A) : B !== void 0 ? typeof Q == "string" ? H(A).fill(B, Q) : H(A).fill(B) : H(A);
    }
    g.alloc = function(A, B, Q) {
      return d(A, B, Q);
    };
    function h(A) {
      return y(A), H(A < 0 ? 0 : S(A) | 0);
    }
    g.allocUnsafe = function(A) {
      return h(A);
    }, g.allocUnsafeSlow = function(A) {
      return h(A);
    };
    function U(A, B) {
      if ((typeof B != "string" || B === "") && (B = "utf8"), !g.isEncoding(B))
        throw new TypeError("Unknown encoding: " + B);
      let Q = s(A, B) | 0, C = H(Q), I = C.write(A, B);
      return I !== Q && (C = C.slice(0, I)), C;
    }
    function K(A) {
      let B = A.length < 0 ? 0 : S(A.length) | 0, Q = H(B);
      for (let C = 0; C < B; C += 1)
        Q[C] = A[C] & 255;
      return Q;
    }
    function i(A) {
      if (e(A, Uint8Array)) {
        let B = new Uint8Array(A);
        return Y(B.buffer, B.byteOffset, B.byteLength);
      }
      return K(A);
    }
    function Y(A, B, Q) {
      if (B < 0 || A.byteLength < B)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (A.byteLength < B + (Q || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let C;
      return B === void 0 && Q === void 0 ? C = new Uint8Array(A) : Q === void 0 ? C = new Uint8Array(A, B) : C = new Uint8Array(A, B, Q), Object.setPrototypeOf(C, g.prototype), C;
    }
    function c(A) {
      if (g.isBuffer(A)) {
        let B = S(A.length) | 0, Q = H(B);
        return Q.length === 0 || A.copy(Q, 0, 0, B), Q;
      }
      if (A.length !== void 0)
        return typeof A.length != "number" || wA(A.length) ? H(0) : K(A);
      if (A.type === "Buffer" && Array.isArray(A.data))
        return K(A.data);
    }
    function S(A) {
      if (A >= F)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + F.toString(16) + " bytes");
      return A | 0;
    }
    function p(A) {
      return +A != A && (A = 0), g.alloc(+A);
    }
    g.isBuffer = function(A) {
      return A != null && A._isBuffer === true && A !== g.prototype;
    }, g.compare = function(A, B) {
      if (e(A, Uint8Array) && (A = g.from(A, A.offset, A.byteLength)), e(B, Uint8Array) && (B = g.from(B, B.offset, B.byteLength)), !g.isBuffer(A) || !g.isBuffer(B))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (A === B)
        return 0;
      let Q = A.length, C = B.length;
      for (let I = 0, w = Math.min(Q, C); I < w; ++I)
        if (A[I] !== B[I]) {
          Q = A[I], C = B[I];
          break;
        }
      return Q < C ? -1 : C < Q ? 1 : 0;
    }, g.isEncoding = function(A) {
      switch (String(A).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, g.concat = function(A, B) {
      if (!Array.isArray(A))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (A.length === 0)
        return g.alloc(0);
      let Q;
      if (B === void 0)
        for (B = 0, Q = 0; Q < A.length; ++Q)
          B += A[Q].length;
      let C = g.allocUnsafe(B), I = 0;
      for (Q = 0; Q < A.length; ++Q) {
        let w = A[Q];
        if (e(w, Uint8Array))
          I + w.length > C.length ? (g.isBuffer(w) || (w = g.from(w)), w.copy(C, I)) : Uint8Array.prototype.set.call(C, w, I);
        else if (g.isBuffer(w))
          w.copy(C, I);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        I += w.length;
      }
      return C;
    };
    function s(A, B) {
      if (g.isBuffer(A))
        return A.length;
      if (ArrayBuffer.isView(A) || e(A, ArrayBuffer))
        return A.byteLength;
      if (typeof A != "string")
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof A);
      let Q = A.length, C = arguments.length > 2 && arguments[2] === true;
      if (!C && Q === 0)
        return 0;
      let I = false;
      for (; ; )
        switch (B) {
          case "ascii":
          case "latin1":
          case "binary":
            return Q;
          case "utf8":
          case "utf-8":
            return EA(A).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Q * 2;
          case "hex":
            return Q >>> 1;
          case "base64":
            return aA(A).length;
          default:
            if (I)
              return C ? -1 : EA(A).length;
            B = ("" + B).toLowerCase(), I = true;
        }
    }
    g.byteLength = s;
    function M(A, B, Q) {
      let C = false;
      if ((B === void 0 || B < 0) && (B = 0), B > this.length || ((Q === void 0 || Q > this.length) && (Q = this.length), Q <= 0) || (Q >>>= 0, B >>>= 0, Q <= B))
        return "";
      for (A || (A = "utf8"); ; )
        switch (A) {
          case "hex":
            return BB(this, B, Q);
          case "utf8":
          case "utf-8":
            return FA(this, B, Q);
          case "ascii":
            return $A(this, B, Q);
          case "latin1":
          case "binary":
            return AB(this, B, Q);
          case "base64":
            return rA(this, B, Q);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return QB(this, B, Q);
          default:
            if (C)
              throw new TypeError("Unknown encoding: " + A);
            A = (A + "").toLowerCase(), C = true;
        }
    }
    g.prototype._isBuffer = true;
    function W(A, B, Q) {
      let C = A[B];
      A[B] = A[Q], A[Q] = C;
    }
    g.prototype.swap16 = function() {
      let A = this.length;
      if (A % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let B = 0; B < A; B += 2)
        W(this, B, B + 1);
      return this;
    }, g.prototype.swap32 = function() {
      let A = this.length;
      if (A % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let B = 0; B < A; B += 4)
        W(this, B, B + 3), W(this, B + 1, B + 2);
      return this;
    }, g.prototype.swap64 = function() {
      let A = this.length;
      if (A % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let B = 0; B < A; B += 8)
        W(this, B, B + 7), W(this, B + 1, B + 6), W(this, B + 2, B + 5), W(this, B + 3, B + 4);
      return this;
    }, g.prototype.toString = function() {
      let A = this.length;
      return A === 0 ? "" : arguments.length === 0 ? FA(this, 0, A) : M.apply(this, arguments);
    }, g.prototype.toLocaleString = g.prototype.toString, g.prototype.equals = function(A) {
      if (!g.isBuffer(A))
        throw new TypeError("Argument must be a Buffer");
      return this === A ? true : g.compare(this, A) === 0;
    }, g.prototype.inspect = function() {
      let A = "", B = E.INSPECT_MAX_BYTES;
      return A = this.toString("hex", 0, B).replace(/(.{2})/g, "$1 ").trim(), this.length > B && (A += " ... "), "<Buffer " + A + ">";
    }, o && (g.prototype[o] = g.prototype.inspect), g.prototype.compare = function(A, B, Q, C, I) {
      if (e(A, Uint8Array) && (A = g.from(A, A.offset, A.byteLength)), !g.isBuffer(A))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof A);
      if (B === void 0 && (B = 0), Q === void 0 && (Q = A ? A.length : 0), C === void 0 && (C = 0), I === void 0 && (I = this.length), B < 0 || Q > A.length || C < 0 || I > this.length)
        throw new RangeError("out of range index");
      if (C >= I && B >= Q)
        return 0;
      if (C >= I)
        return -1;
      if (B >= Q)
        return 1;
      if (B >>>= 0, Q >>>= 0, C >>>= 0, I >>>= 0, this === A)
        return 0;
      let w = I - C, k = Q - B, R = Math.min(w, k), t = this.slice(C, I), J = A.slice(B, Q);
      for (let L = 0; L < R; ++L)
        if (t[L] !== J[L]) {
          w = t[L], k = J[L];
          break;
        }
      return w < k ? -1 : k < w ? 1 : 0;
    };
    function V(A, B, Q, C, I) {
      if (A.length === 0)
        return -1;
      if (typeof Q == "string" ? (C = Q, Q = 0) : Q > 2147483647 ? Q = 2147483647 : Q < -2147483648 && (Q = -2147483648), Q = +Q, wA(Q) && (Q = I ? 0 : A.length - 1), Q < 0 && (Q = A.length + Q), Q >= A.length) {
        if (I)
          return -1;
        Q = A.length - 1;
      } else if (Q < 0)
        if (I)
          Q = 0;
        else
          return -1;
      if (typeof B == "string" && (B = g.from(B, C)), g.isBuffer(B))
        return B.length === 0 ? -1 : T(A, B, Q, C, I);
      if (typeof B == "number")
        return B = B & 255, typeof Uint8Array.prototype.indexOf == "function" ? I ? Uint8Array.prototype.indexOf.call(A, B, Q) : Uint8Array.prototype.lastIndexOf.call(A, B, Q) : T(A, [B], Q, C, I);
      throw new TypeError("val must be string, number or Buffer");
    }
    function T(A, B, Q, C, I) {
      let w = 1, k = A.length, R = B.length;
      if (C !== void 0 && (C = String(C).toLowerCase(), C === "ucs2" || C === "ucs-2" || C === "utf16le" || C === "utf-16le")) {
        if (A.length < 2 || B.length < 2)
          return -1;
        w = 2, k /= 2, R /= 2, Q /= 2;
      }
      function t(L, l) {
        return w === 1 ? L[l] : L.readUInt16BE(l * w);
      }
      let J;
      if (I) {
        let L = -1;
        for (J = Q; J < k; J++)
          if (t(A, J) === t(B, L === -1 ? 0 : J - L)) {
            if (L === -1 && (L = J), J - L + 1 === R)
              return L * w;
          } else
            L !== -1 && (J -= J - L), L = -1;
      } else
        for (Q + R > k && (Q = k - R), J = Q; J >= 0; J--) {
          let L = true;
          for (let l = 0; l < R; l++)
            if (t(A, J + l) !== t(B, l)) {
              L = false;
              break;
            }
          if (L)
            return J;
        }
      return -1;
    }
    g.prototype.includes = function(A, B, Q) {
      return this.indexOf(A, B, Q) !== -1;
    }, g.prototype.indexOf = function(A, B, Q) {
      return V(this, A, B, Q, true);
    }, g.prototype.lastIndexOf = function(A, B, Q) {
      return V(this, A, B, Q, false);
    };
    function jA(A, B, Q, C) {
      Q = Number(Q) || 0;
      let I = A.length - Q;
      C ? (C = Number(C), C > I && (C = I)) : C = I;
      let w = B.length;
      C > w / 2 && (C = w / 2);
      let k;
      for (k = 0; k < C; ++k) {
        let R = parseInt(B.substr(k * 2, 2), 16);
        if (wA(R))
          return k;
        A[Q + k] = R;
      }
      return k;
    }
    function vA(A, B, Q, C) {
      return _(EA(B, A.length - Q), A, Q, C);
    }
    function TA(A, B, Q, C) {
      return _(EB(B), A, Q, C);
    }
    function PA(A, B, Q, C) {
      return _(aA(B), A, Q, C);
    }
    function zA(A, B, Q, C) {
      return _(wB(B, A.length - Q), A, Q, C);
    }
    g.prototype.write = function(A, B, Q, C) {
      if (B === void 0)
        C = "utf8", Q = this.length, B = 0;
      else if (Q === void 0 && typeof B == "string")
        C = B, Q = this.length, B = 0;
      else if (isFinite(B))
        B = B >>> 0, isFinite(Q) ? (Q = Q >>> 0, C === void 0 && (C = "utf8")) : (C = Q, Q = void 0);
      else
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      let I = this.length - B;
      if ((Q === void 0 || Q > I) && (Q = I), A.length > 0 && (Q < 0 || B < 0) || B > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      C || (C = "utf8");
      let w = false;
      for (; ; )
        switch (C) {
          case "hex":
            return jA(this, A, B, Q);
          case "utf8":
          case "utf-8":
            return vA(this, A, B, Q);
          case "ascii":
          case "latin1":
          case "binary":
            return TA(this, A, B, Q);
          case "base64":
            return PA(this, A, B, Q);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return zA(this, A, B, Q);
          default:
            if (w)
              throw new TypeError("Unknown encoding: " + C);
            C = ("" + C).toLowerCase(), w = true;
        }
    }, g.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    function rA(A, B, Q) {
      return B === 0 && Q === A.length ? G.fromByteArray(A) : G.fromByteArray(A.slice(B, Q));
    }
    function FA(A, B, Q) {
      Q = Math.min(A.length, Q);
      let C = [], I = B;
      for (; I < Q; ) {
        let w = A[I], k = null, R = w > 239 ? 4 : w > 223 ? 3 : w > 191 ? 2 : 1;
        if (I + R <= Q) {
          let t, J, L, l;
          switch (R) {
            case 1:
              w < 128 && (k = w);
              break;
            case 2:
              t = A[I + 1], (t & 192) === 128 && (l = (w & 31) << 6 | t & 63, l > 127 && (k = l));
              break;
            case 3:
              t = A[I + 1], J = A[I + 2], (t & 192) === 128 && (J & 192) === 128 && (l = (w & 15) << 12 | (t & 63) << 6 | J & 63, l > 2047 && (l < 55296 || l > 57343) && (k = l));
              break;
            case 4:
              t = A[I + 1], J = A[I + 2], L = A[I + 3], (t & 192) === 128 && (J & 192) === 128 && (L & 192) === 128 && (l = (w & 15) << 18 | (t & 63) << 12 | (J & 63) << 6 | L & 63, l > 65535 && l < 1114112 && (k = l));
          }
        }
        k === null ? (k = 65533, R = 1) : k > 65535 && (k -= 65536, C.push(k >>> 10 & 1023 | 55296), k = 56320 | k & 1023), C.push(k), I += R;
      }
      return _A(C);
    }
    var HA = 4096;
    function _A(A) {
      let B = A.length;
      if (B <= HA)
        return String.fromCharCode.apply(String, A);
      let Q = "", C = 0;
      for (; C < B; )
        Q += String.fromCharCode.apply(String, A.slice(C, C += HA));
      return Q;
    }
    function $A(A, B, Q) {
      let C = "";
      Q = Math.min(A.length, Q);
      for (let I = B; I < Q; ++I)
        C += String.fromCharCode(A[I] & 127);
      return C;
    }
    function AB(A, B, Q) {
      let C = "";
      Q = Math.min(A.length, Q);
      for (let I = B; I < Q; ++I)
        C += String.fromCharCode(A[I]);
      return C;
    }
    function BB(A, B, Q) {
      let C = A.length;
      (!B || B < 0) && (B = 0), (!Q || Q < 0 || Q > C) && (Q = C);
      let I = "";
      for (let w = B; w < Q; ++w)
        I += GB[A[w]];
      return I;
    }
    function QB(A, B, Q) {
      let C = A.slice(B, Q), I = "";
      for (let w = 0; w < C.length - 1; w += 2)
        I += String.fromCharCode(C[w] + C[w + 1] * 256);
      return I;
    }
    g.prototype.slice = function(A, B) {
      let Q = this.length;
      A = ~~A, B = B === void 0 ? Q : ~~B, A < 0 ? (A += Q, A < 0 && (A = 0)) : A > Q && (A = Q), B < 0 ? (B += Q, B < 0 && (B = 0)) : B > Q && (B = Q), B < A && (B = A);
      let C = this.subarray(A, B);
      return Object.setPrototypeOf(C, g.prototype), C;
    };
    function b(A, B, Q) {
      if (A % 1 !== 0 || A < 0)
        throw new RangeError("offset is not uint");
      if (A + B > Q)
        throw new RangeError("Trying to access beyond buffer length");
    }
    g.prototype.readUintLE = g.prototype.readUIntLE = function(A, B, Q) {
      A = A >>> 0, B = B >>> 0, Q || b(A, B, this.length);
      let C = this[A], I = 1, w = 0;
      for (; ++w < B && (I *= 256); )
        C += this[A + w] * I;
      return C;
    }, g.prototype.readUintBE = g.prototype.readUIntBE = function(A, B, Q) {
      A = A >>> 0, B = B >>> 0, Q || b(A, B, this.length);
      let C = this[A + --B], I = 1;
      for (; B > 0 && (I *= 256); )
        C += this[A + --B] * I;
      return C;
    }, g.prototype.readUint8 = g.prototype.readUInt8 = function(A, B) {
      return A = A >>> 0, B || b(A, 1, this.length), this[A];
    }, g.prototype.readUint16LE = g.prototype.readUInt16LE = function(A, B) {
      return A = A >>> 0, B || b(A, 2, this.length), this[A] | this[A + 1] << 8;
    }, g.prototype.readUint16BE = g.prototype.readUInt16BE = function(A, B) {
      return A = A >>> 0, B || b(A, 2, this.length), this[A] << 8 | this[A + 1];
    }, g.prototype.readUint32LE = g.prototype.readUInt32LE = function(A, B) {
      return A = A >>> 0, B || b(A, 4, this.length), (this[A] | this[A + 1] << 8 | this[A + 2] << 16) + this[A + 3] * 16777216;
    }, g.prototype.readUint32BE = g.prototype.readUInt32BE = function(A, B) {
      return A = A >>> 0, B || b(A, 4, this.length), this[A] * 16777216 + (this[A + 1] << 16 | this[A + 2] << 8 | this[A + 3]);
    }, g.prototype.readBigUInt64LE = m(function(A) {
      A = A >>> 0, O(A, "offset");
      let B = this[A], Q = this[A + 7];
      (B === void 0 || Q === void 0) && P(A, this.length - 8);
      let C = B + this[++A] * 2 ** 8 + this[++A] * 2 ** 16 + this[++A] * 2 ** 24, I = this[++A] + this[++A] * 2 ** 8 + this[++A] * 2 ** 16 + Q * 2 ** 24;
      return BigInt(C) + (BigInt(I) << BigInt(32));
    }), g.prototype.readBigUInt64BE = m(function(A) {
      A = A >>> 0, O(A, "offset");
      let B = this[A], Q = this[A + 7];
      (B === void 0 || Q === void 0) && P(A, this.length - 8);
      let C = B * 2 ** 24 + this[++A] * 2 ** 16 + this[++A] * 2 ** 8 + this[++A], I = this[++A] * 2 ** 24 + this[++A] * 2 ** 16 + this[++A] * 2 ** 8 + Q;
      return (BigInt(C) << BigInt(32)) + BigInt(I);
    }), g.prototype.readIntLE = function(A, B, Q) {
      A = A >>> 0, B = B >>> 0, Q || b(A, B, this.length);
      let C = this[A], I = 1, w = 0;
      for (; ++w < B && (I *= 256); )
        C += this[A + w] * I;
      return I *= 128, C >= I && (C -= Math.pow(2, 8 * B)), C;
    }, g.prototype.readIntBE = function(A, B, Q) {
      A = A >>> 0, B = B >>> 0, Q || b(A, B, this.length);
      let C = B, I = 1, w = this[A + --C];
      for (; C > 0 && (I *= 256); )
        w += this[A + --C] * I;
      return I *= 128, w >= I && (w -= Math.pow(2, 8 * B)), w;
    }, g.prototype.readInt8 = function(A, B) {
      return A = A >>> 0, B || b(A, 1, this.length), this[A] & 128 ? (255 - this[A] + 1) * -1 : this[A];
    }, g.prototype.readInt16LE = function(A, B) {
      A = A >>> 0, B || b(A, 2, this.length);
      let Q = this[A] | this[A + 1] << 8;
      return Q & 32768 ? Q | 4294901760 : Q;
    }, g.prototype.readInt16BE = function(A, B) {
      A = A >>> 0, B || b(A, 2, this.length);
      let Q = this[A + 1] | this[A] << 8;
      return Q & 32768 ? Q | 4294901760 : Q;
    }, g.prototype.readInt32LE = function(A, B) {
      return A = A >>> 0, B || b(A, 4, this.length), this[A] | this[A + 1] << 8 | this[A + 2] << 16 | this[A + 3] << 24;
    }, g.prototype.readInt32BE = function(A, B) {
      return A = A >>> 0, B || b(A, 4, this.length), this[A] << 24 | this[A + 1] << 16 | this[A + 2] << 8 | this[A + 3];
    }, g.prototype.readBigInt64LE = m(function(A) {
      A = A >>> 0, O(A, "offset");
      let B = this[A], Q = this[A + 7];
      (B === void 0 || Q === void 0) && P(A, this.length - 8);
      let C = this[A + 4] + this[A + 5] * 2 ** 8 + this[A + 6] * 2 ** 16 + (Q << 24);
      return (BigInt(C) << BigInt(32)) + BigInt(B + this[++A] * 2 ** 8 + this[++A] * 2 ** 16 + this[++A] * 2 ** 24);
    }), g.prototype.readBigInt64BE = m(function(A) {
      A = A >>> 0, O(A, "offset");
      let B = this[A], Q = this[A + 7];
      (B === void 0 || Q === void 0) && P(A, this.length - 8);
      let C = (B << 24) + this[++A] * 2 ** 16 + this[++A] * 2 ** 8 + this[++A];
      return (BigInt(C) << BigInt(32)) + BigInt(this[++A] * 2 ** 24 + this[++A] * 2 ** 16 + this[++A] * 2 ** 8 + Q);
    }), g.prototype.readFloatLE = function(A, B) {
      return A = A >>> 0, B || b(A, 4, this.length), D.read(this, A, true, 23, 4);
    }, g.prototype.readFloatBE = function(A, B) {
      return A = A >>> 0, B || b(A, 4, this.length), D.read(this, A, false, 23, 4);
    }, g.prototype.readDoubleLE = function(A, B) {
      return A = A >>> 0, B || b(A, 8, this.length), D.read(this, A, true, 52, 8);
    }, g.prototype.readDoubleBE = function(A, B) {
      return A = A >>> 0, B || b(A, 8, this.length), D.read(this, A, false, 52, 8);
    };
    function q(A, B, Q, C, I, w) {
      if (!g.isBuffer(A))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (B > I || B < w)
        throw new RangeError('"value" argument is out of bounds');
      if (Q + C > A.length)
        throw new RangeError("Index out of range");
    }
    g.prototype.writeUintLE = g.prototype.writeUIntLE = function(A, B, Q, C) {
      if (A = +A, B = B >>> 0, Q = Q >>> 0, !C) {
        let k = Math.pow(2, 8 * Q) - 1;
        q(this, A, B, Q, k, 0);
      }
      let I = 1, w = 0;
      for (this[B] = A & 255; ++w < Q && (I *= 256); )
        this[B + w] = A / I & 255;
      return B + Q;
    }, g.prototype.writeUintBE = g.prototype.writeUIntBE = function(A, B, Q, C) {
      if (A = +A, B = B >>> 0, Q = Q >>> 0, !C) {
        let k = Math.pow(2, 8 * Q) - 1;
        q(this, A, B, Q, k, 0);
      }
      let I = Q - 1, w = 1;
      for (this[B + I] = A & 255; --I >= 0 && (w *= 256); )
        this[B + I] = A / w & 255;
      return B + Q;
    }, g.prototype.writeUint8 = g.prototype.writeUInt8 = function(A, B, Q) {
      return A = +A, B = B >>> 0, Q || q(this, A, B, 1, 255, 0), this[B] = A & 255, B + 1;
    }, g.prototype.writeUint16LE = g.prototype.writeUInt16LE = function(A, B, Q) {
      return A = +A, B = B >>> 0, Q || q(this, A, B, 2, 65535, 0), this[B] = A & 255, this[B + 1] = A >>> 8, B + 2;
    }, g.prototype.writeUint16BE = g.prototype.writeUInt16BE = function(A, B, Q) {
      return A = +A, B = B >>> 0, Q || q(this, A, B, 2, 65535, 0), this[B] = A >>> 8, this[B + 1] = A & 255, B + 2;
    }, g.prototype.writeUint32LE = g.prototype.writeUInt32LE = function(A, B, Q) {
      return A = +A, B = B >>> 0, Q || q(this, A, B, 4, 4294967295, 0), this[B + 3] = A >>> 24, this[B + 2] = A >>> 16, this[B + 1] = A >>> 8, this[B] = A & 255, B + 4;
    }, g.prototype.writeUint32BE = g.prototype.writeUInt32BE = function(A, B, Q) {
      return A = +A, B = B >>> 0, Q || q(this, A, B, 4, 4294967295, 0), this[B] = A >>> 24, this[B + 1] = A >>> 16, this[B + 2] = A >>> 8, this[B + 3] = A & 255, B + 4;
    };
    function iA(A, B, Q, C, I) {
      hA(B, C, I, A, Q, 7);
      let w = Number(B & BigInt(4294967295));
      A[Q++] = w, w = w >> 8, A[Q++] = w, w = w >> 8, A[Q++] = w, w = w >> 8, A[Q++] = w;
      let k = Number(B >> BigInt(32) & BigInt(4294967295));
      return A[Q++] = k, k = k >> 8, A[Q++] = k, k = k >> 8, A[Q++] = k, k = k >> 8, A[Q++] = k, Q;
    }
    function oA(A, B, Q, C, I) {
      hA(B, C, I, A, Q, 7);
      let w = Number(B & BigInt(4294967295));
      A[Q + 7] = w, w = w >> 8, A[Q + 6] = w, w = w >> 8, A[Q + 5] = w, w = w >> 8, A[Q + 4] = w;
      let k = Number(B >> BigInt(32) & BigInt(4294967295));
      return A[Q + 3] = k, k = k >> 8, A[Q + 2] = k, k = k >> 8, A[Q + 1] = k, k = k >> 8, A[Q] = k, Q + 8;
    }
    g.prototype.writeBigUInt64LE = m(function(A, B = 0) {
      return iA(this, A, B, BigInt(0), BigInt("0xffffffffffffffff"));
    }), g.prototype.writeBigUInt64BE = m(function(A, B = 0) {
      return oA(this, A, B, BigInt(0), BigInt("0xffffffffffffffff"));
    }), g.prototype.writeIntLE = function(A, B, Q, C) {
      if (A = +A, B = B >>> 0, !C) {
        let R = Math.pow(2, 8 * Q - 1);
        q(this, A, B, Q, R - 1, -R);
      }
      let I = 0, w = 1, k = 0;
      for (this[B] = A & 255; ++I < Q && (w *= 256); )
        A < 0 && k === 0 && this[B + I - 1] !== 0 && (k = 1), this[B + I] = (A / w >> 0) - k & 255;
      return B + Q;
    }, g.prototype.writeIntBE = function(A, B, Q, C) {
      if (A = +A, B = B >>> 0, !C) {
        let R = Math.pow(2, 8 * Q - 1);
        q(this, A, B, Q, R - 1, -R);
      }
      let I = Q - 1, w = 1, k = 0;
      for (this[B + I] = A & 255; --I >= 0 && (w *= 256); )
        A < 0 && k === 0 && this[B + I + 1] !== 0 && (k = 1), this[B + I] = (A / w >> 0) - k & 255;
      return B + Q;
    }, g.prototype.writeInt8 = function(A, B, Q) {
      return A = +A, B = B >>> 0, Q || q(this, A, B, 1, 127, -128), A < 0 && (A = 255 + A + 1), this[B] = A & 255, B + 1;
    }, g.prototype.writeInt16LE = function(A, B, Q) {
      return A = +A, B = B >>> 0, Q || q(this, A, B, 2, 32767, -32768), this[B] = A & 255, this[B + 1] = A >>> 8, B + 2;
    }, g.prototype.writeInt16BE = function(A, B, Q) {
      return A = +A, B = B >>> 0, Q || q(this, A, B, 2, 32767, -32768), this[B] = A >>> 8, this[B + 1] = A & 255, B + 2;
    }, g.prototype.writeInt32LE = function(A, B, Q) {
      return A = +A, B = B >>> 0, Q || q(this, A, B, 4, 2147483647, -2147483648), this[B] = A & 255, this[B + 1] = A >>> 8, this[B + 2] = A >>> 16, this[B + 3] = A >>> 24, B + 4;
    }, g.prototype.writeInt32BE = function(A, B, Q) {
      return A = +A, B = B >>> 0, Q || q(this, A, B, 4, 2147483647, -2147483648), A < 0 && (A = 4294967295 + A + 1), this[B] = A >>> 24, this[B + 1] = A >>> 16, this[B + 2] = A >>> 8, this[B + 3] = A & 255, B + 4;
    }, g.prototype.writeBigInt64LE = m(function(A, B = 0) {
      return iA(this, A, B, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), g.prototype.writeBigInt64BE = m(function(A, B = 0) {
      return oA(this, A, B, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function NA(A, B, Q, C, I, w) {
      if (Q + C > A.length)
        throw new RangeError("Index out of range");
      if (Q < 0)
        throw new RangeError("Index out of range");
    }
    function YA(A, B, Q, C, I) {
      return B = +B, Q = Q >>> 0, I || NA(A, B, Q, 4, 34028234663852886e22, -34028234663852886e22), D.write(A, B, Q, C, 23, 4), Q + 4;
    }
    g.prototype.writeFloatLE = function(A, B, Q) {
      return YA(this, A, B, true, Q);
    }, g.prototype.writeFloatBE = function(A, B, Q) {
      return YA(this, A, B, false, Q);
    };
    function cA(A, B, Q, C, I) {
      return B = +B, Q = Q >>> 0, I || NA(A, B, Q, 8, 17976931348623157e292, -17976931348623157e292), D.write(A, B, Q, C, 52, 8), Q + 8;
    }
    g.prototype.writeDoubleLE = function(A, B, Q) {
      return cA(this, A, B, true, Q);
    }, g.prototype.writeDoubleBE = function(A, B, Q) {
      return cA(this, A, B, false, Q);
    }, g.prototype.copy = function(A, B, Q, C) {
      if (!g.isBuffer(A))
        throw new TypeError("argument should be a Buffer");
      if (Q || (Q = 0), !C && C !== 0 && (C = this.length), B >= A.length && (B = A.length), B || (B = 0), C > 0 && C < Q && (C = Q), C === Q || A.length === 0 || this.length === 0)
        return 0;
      if (B < 0)
        throw new RangeError("targetStart out of bounds");
      if (Q < 0 || Q >= this.length)
        throw new RangeError("Index out of range");
      if (C < 0)
        throw new RangeError("sourceEnd out of bounds");
      C > this.length && (C = this.length), A.length - B < C - Q && (C = A.length - B + Q);
      let I = C - Q;
      return this === A && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(B, Q, C) : Uint8Array.prototype.set.call(A, this.subarray(Q, C), B), I;
    }, g.prototype.fill = function(A, B, Q, C) {
      if (typeof A == "string") {
        if (typeof B == "string" ? (C = B, B = 0, Q = this.length) : typeof Q == "string" && (C = Q, Q = this.length), C !== void 0 && typeof C != "string")
          throw new TypeError("encoding must be a string");
        if (typeof C == "string" && !g.isEncoding(C))
          throw new TypeError("Unknown encoding: " + C);
        if (A.length === 1) {
          let w = A.charCodeAt(0);
          (C === "utf8" && w < 128 || C === "latin1") && (A = w);
        }
      } else
        typeof A == "number" ? A = A & 255 : typeof A == "boolean" && (A = Number(A));
      if (B < 0 || this.length < B || this.length < Q)
        throw new RangeError("Out of range index");
      if (Q <= B)
        return this;
      B = B >>> 0, Q = Q === void 0 ? this.length : Q >>> 0, A || (A = 0);
      let I;
      if (typeof A == "number")
        for (I = B; I < Q; ++I)
          this[I] = A;
      else {
        let w = g.isBuffer(A) ? A : g.from(A, C), k = w.length;
        if (k === 0)
          throw new TypeError('The value "' + A + '" is invalid for argument "value"');
        for (I = 0; I < Q - B; ++I)
          this[I + B] = w[I % k];
      }
      return this;
    };
    var u = {};
    function IA(A, B, Q) {
      u[A] = class extends Q {
        constructor() {
          super(), Object.defineProperty(this, "message", { value: B.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${A}]`, this.stack, delete this.name;
        }
        get code() {
          return A;
        }
        set code(C) {
          Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: C, writable: true });
        }
        toString() {
          return `${this.name} [${A}]: ${this.message}`;
        }
      };
    }
    IA("ERR_BUFFER_OUT_OF_BOUNDS", function(A) {
      return A ? `${A} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError), IA("ERR_INVALID_ARG_TYPE", function(A, B) {
      return `The "${A}" argument must be of type number. Received type ${typeof B}`;
    }, TypeError), IA("ERR_OUT_OF_RANGE", function(A, B, Q) {
      let C = `The value of "${A}" is out of range.`, I = Q;
      return Number.isInteger(Q) && Math.abs(Q) > 2 ** 32 ? I = UA(String(Q)) : typeof Q == "bigint" && (I = String(Q), (Q > BigInt(2) ** BigInt(32) || Q < -(BigInt(2) ** BigInt(32))) && (I = UA(I)), I += "n"), C += ` It must be ${B}. Received ${I}`, C;
    }, RangeError);
    function UA(A) {
      let B = "", Q = A.length, C = A[0] === "-" ? 1 : 0;
      for (; Q >= C + 4; Q -= 3)
        B = `_${A.slice(Q - 3, Q)}${B}`;
      return `${A.slice(0, Q)}${B}`;
    }
    function CB(A, B, Q) {
      O(B, "offset"), (A[B] === void 0 || A[B + Q] === void 0) && P(B, A.length - (Q + 1));
    }
    function hA(A, B, Q, C, I, w) {
      if (A > Q || A < B) {
        let k = typeof B == "bigint" ? "n" : "", R;
        throw w > 3 ? B === 0 || B === BigInt(0) ? R = `>= 0${k} and < 2${k} ** ${(w + 1) * 8}${k}` : R = `>= -(2${k} ** ${(w + 1) * 8 - 1}${k}) and < 2 ** ${(w + 1) * 8 - 1}${k}` : R = `>= ${B}${k} and <= ${Q}${k}`, new u.ERR_OUT_OF_RANGE("value", R, A);
      }
      CB(C, I, w);
    }
    function O(A, B) {
      if (typeof A != "number")
        throw new u.ERR_INVALID_ARG_TYPE(B, "number", A);
    }
    function P(A, B, Q) {
      throw Math.floor(A) !== A ? (O(A, Q), new u.ERR_OUT_OF_RANGE(Q || "offset", "an integer", A)) : B < 0 ? new u.ERR_BUFFER_OUT_OF_BOUNDS() : new u.ERR_OUT_OF_RANGE(Q || "offset", `>= ${Q ? 1 : 0} and <= ${B}`, A);
    }
    var gB = /[^+/0-9A-Za-z-_]/g;
    function IB(A) {
      if (A = A.split("=")[0], A = A.trim().replace(gB, ""), A.length < 2)
        return "";
      for (; A.length % 4 !== 0; )
        A = A + "=";
      return A;
    }
    function EA(A, B) {
      B = B || 1 / 0;
      let Q, C = A.length, I = null, w = [];
      for (let k = 0; k < C; ++k) {
        if (Q = A.charCodeAt(k), Q > 55295 && Q < 57344) {
          if (!I) {
            if (Q > 56319) {
              (B -= 3) > -1 && w.push(239, 191, 189);
              continue;
            } else if (k + 1 === C) {
              (B -= 3) > -1 && w.push(239, 191, 189);
              continue;
            }
            I = Q;
            continue;
          }
          if (Q < 56320) {
            (B -= 3) > -1 && w.push(239, 191, 189), I = Q;
            continue;
          }
          Q = (I - 55296 << 10 | Q - 56320) + 65536;
        } else
          I && (B -= 3) > -1 && w.push(239, 191, 189);
        if (I = null, Q < 128) {
          if ((B -= 1) < 0)
            break;
          w.push(Q);
        } else if (Q < 2048) {
          if ((B -= 2) < 0)
            break;
          w.push(Q >> 6 | 192, Q & 63 | 128);
        } else if (Q < 65536) {
          if ((B -= 3) < 0)
            break;
          w.push(Q >> 12 | 224, Q >> 6 & 63 | 128, Q & 63 | 128);
        } else if (Q < 1114112) {
          if ((B -= 4) < 0)
            break;
          w.push(Q >> 18 | 240, Q >> 12 & 63 | 128, Q >> 6 & 63 | 128, Q & 63 | 128);
        } else
          throw new Error("Invalid code point");
      }
      return w;
    }
    function EB(A) {
      let B = [];
      for (let Q = 0; Q < A.length; ++Q)
        B.push(A.charCodeAt(Q) & 255);
      return B;
    }
    function wB(A, B) {
      let Q, C, I, w = [];
      for (let k = 0; k < A.length && !((B -= 2) < 0); ++k)
        Q = A.charCodeAt(k), C = Q >> 8, I = Q % 256, w.push(I), w.push(C);
      return w;
    }
    function aA(A) {
      return G.toByteArray(IB(A));
    }
    function _(A, B, Q, C) {
      let I;
      for (I = 0; I < C && !(I + Q >= B.length || I >= A.length); ++I)
        B[I + Q] = A[I];
      return I;
    }
    function e(A, B) {
      return A instanceof B || A != null && A.constructor != null && A.constructor.name != null && A.constructor.name === B.name;
    }
    function wA(A) {
      return A !== A;
    }
    var GB = function() {
      let A = "0123456789abcdef", B = new Array(256);
      for (let Q = 0; Q < 16; ++Q) {
        let C = Q * 16;
        for (let I = 0; I < 16; ++I)
          B[C + I] = A[Q] + A[I];
      }
      return B;
    }();
    function m(A) {
      return typeof BigInt > "u" ? DB : A;
    }
    function DB() {
      throw new Error("BigInt not supported");
    }
  }), WA = {};
  fB(WA, { CharacterClassRanges: () => pA, IsNotUriSafe: () => tA, IsSimpleDigit: () => PB, IsUnicodeNonPrintableTest: () => VA, UnicodeAlphabet: () => x, decodeToString: () => BQ, decodeToUint8Array: () => fA, encode: () => AQ, isLittleEndian: () => qA, makeAlphabet: () => xA });
  uA.exports = OB(WA);
  var bA = uB(TB()), VA = /[\u0000-\u0008\u1c80-\u1c86\u000B-\u001F\u007F-\u009F\u2000-\u200F\u2028-\u202F\u205F-\u206F\u3000\uFEFF\u{E0100}-\u{E01EF}]/u, tA = /[&$\+,:;~"`'=\?@#\s<>/\[\]\{\}|\\\^%]/u, PB = /[0-9]/, pA = ["a-z", "\u03B1-\u03C9", "\u0430-\u044F", "\u4E00-\u9FAF"], zB = new RegExp(`^[${pA.join("")}]*$`, "iu"), qA = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, kA = 2 ** 16, XA = kA - 1;
  function* rB(E = kA, G = true, D = true) {
    for (let o = 0; o < E; o++) {
      let F = String.fromCodePoint(o);
      G && zB.test(F) && !VA.test(F) && D && !tA.test(F) && o < E && (yield F);
    }
  }
  var xA = (E = kA, G = true, D = true) => [...rB(E, G, D)].join(""), x = xA(), _B = XA - x.length, eA = Math.floor(XA / x.length);
  if (eA > 3)
    throw new Error("The Unicode alphabet is too small to represent all possible symbols");
  var mA = Math.round(_B / eA), v = Math.floor(Math.log2(x.length)) / 2, nA = 1, $B = 0, AQ = (E) => {
    if (typeof E == "string") {
      let U = bA.Buffer.from(E), K = U.buffer.slice(U.byteOffset, U.byteOffset + U.byteLength);
      E = new Uint8Array(K);
    }
    let G = new DataView(E.buffer), D = [], o = 0, F = "";
    E.byteLength & 1 ? D.push(nA) : D.push($B);
    let N = Math.ceil(E.byteLength), H = E.byteLength, g = N & 1 ? N + 1 : N, a = g / Uint16Array.BYTES_PER_ELEMENT, y = a <= v, d = 0, h = 0;
    for (let U = 0; U < g; U += Uint16Array.BYTES_PER_ELEMENT) {
      h++;
      let K = U / Uint16Array.BYTES_PER_ELEMENT, i = U === 0 || h === v, Y = K === a - 1, c = K === 0, S = i && K >= 0, p = H - U === 1;
      U === 0 && (D.push("0".charCodeAt(0)), d++);
      let s = p ? G.getUint8(U) : G.getUint16(U, qA);
      if (typeof x[s] > "u") {
        let M = 1;
        for (; ; ) {
          let W = s - mA * M;
          if (typeof x[W] < "u") {
            D.push(x.charAt(W)), F = M.toString(2).padStart(2, "0") + F;
            break;
          }
          if (++M, M === 9)
            throw new Error("Encoder failed to encode the input value after 9 attempts: " + s);
        }
      } else
        D.push(x.charAt(s)), F = "00" + F;
      if (S || Y) {
        let M = o * v - v, W = parseInt(F, 2), V = M + d, T = !Number.isNaN(W) && V >= 1;
        T && (D[M + d] = x.charAt(W), h = 0), T && !Y && !c && (F = "", y || (D.push("0".charCodeAt(0)), d++)), o++;
      }
    }
    return D.join("");
  }, fA = (E) => {
    if (!E || !E.length)
      return new Uint8Array();
    let G = [], D = [], o = !!(E.charCodeAt(0) & nA), F = [], N = 0;
    for (let H = 1; H < E.length - 1; H++) {
      if ((H - 1) % v === 0) {
        let K = E[H + N];
        if (typeof K > "u")
          break;
        let i = x.indexOf(K).toString(2).padStart(16, "0").match(/.{1,2}/g).map((c) => parseInt(c, 2)).reverse();
        N++;
        let Y = H + N;
        for (let c = 0; c < v; c++)
          F[Y + c] = i[c];
      }
      let g = H + N;
      if (typeof E[g] > "u")
        break;
      let a = E.charAt(g), y = H + 1 >= E.length - N, d = x.indexOf(a) + mA * F[g], h = d & 255, U = d >> 8;
      if (o && y) {
        D.push(h);
        break;
      } else
        D.push(h), D.push(U);
      G.push(d);
    }
    return new Uint8Array(D);
  }, BQ = (E) => bA.Buffer.from(fA(E)).toString();
});
var UB = (() => {
  for (var E = new Uint8Array(128), G = 0; G < 64; G++)
    E[G < 26 ? G + 65 : G < 52 ? G + 71 : G < 62 ? G - 4 : G * 4 - 205] = G;
  return (D) => {
    for (var o = D.length, F = new Uint8Array((o - (D[o - 1] == "=") - (D[o - 2] == "=")) * 3 / 4 | 0), N = 0, H = 0; N < o; ) {
      var g = E[D.charCodeAt(N++)], a = E[D.charCodeAt(N++)], y = E[D.charCodeAt(N++)], d = E[D.charCodeAt(N++)];
      F[H++] = g << 2 | a >> 4, F[H++] = a << 4 | y >> 2, F[H++] = y << 6 | d;
    }
    return F;
  };
})();
var aB = (E) => WebAssembly.instantiate(hB, E).then((G) => G.instance.exports);
var LA = async (E, G = { quality: 11 }) => (await JA(), MB(E, G));
var Z;
var JA = async () => (Z || (Z = await aB({ "./brotli_wasm_bg.js": { __wbindgen_string_new: SB, __wbg_stack_0ddaca5d1abfb52f: VB, __wbg_new_693216e109162396: WB, __wbg_error_09919627ac0992f5: tB, __wbindgen_object_drop_ref: pB, __wbindgen_rethrow: qB, __wbindgen_is_undefined: yB, __wbindgen_is_object: KB, __wbindgen_json_serialize: lB, __wbindgen_throw: bB } })), Z);
var X = new Array(32).fill(void 0);
X.push(void 0, null, true, false);
function r(E) {
  return X[E];
}
var RB = TextDecoder;
var dA = new RB("utf-8", { ignoreBOM: true, fatal: true });
dA.decode();
var $ = null;
function j() {
  return ($ === null || $.buffer !== Z.memory.buffer) && ($ = new Uint8Array(Z.memory.buffer)), $;
}
function GA(E, G) {
  return dA.decode(j().subarray(E, E + G));
}
var z = X.length;
function MA(E) {
  z === X.length && X.push(X.length + 1);
  let G = z;
  return z = X[G], X[G] = E, G;
}
var f = 0;
var LB = TextEncoder;
var BA = new LB();
var sB = typeof BA.encodeInto == "function" ? function(E, G) {
  return BA.encodeInto(E, G);
} : function(E, G) {
  let D = BA.encode(E);
  return G.set(D), { read: E.length, written: D.length };
};
function ZA(E, G, D) {
  if (D === void 0) {
    let g = BA.encode(E), a = G(g.length);
    return j().subarray(a, a + g.length).set(g), f = g.length, a;
  }
  let o = E.length, F = G(o), N = j(), H = 0;
  for (; H < o; H++) {
    let g = E.charCodeAt(H);
    if (g > 127)
      break;
    N[F + H] = g;
  }
  if (H !== o) {
    H !== 0 && (E = E.slice(H)), F = D(F, o, o = H + E.length * 3);
    let g = j().subarray(F + H, F + o);
    H += sB(E, g).written ?? 0;
  }
  return f = H, F;
}
var AA = null;
function n() {
  return (AA === null || AA.buffer !== Z.memory.buffer) && (AA = new Int32Array(Z.memory.buffer)), AA;
}
function JB(E) {
  E < 36 || (X[E] = z, z = E);
}
function yA(E) {
  let G = r(E);
  return JB(E), G;
}
function KA(E, G) {
  let D = G(E.length * 1);
  return j().set(E, D / 1), f = E.length, D;
}
var QA = 32;
function dB(E) {
  if (QA == 1)
    throw new Error("out of js stack");
  return X[--QA] = E, QA;
}
function SA(E, G) {
  return j().subarray(E / 1, E / 1 + G);
}
function MB(E, G) {
  try {
    let g = Z.__wbindgen_add_to_stack_pointer(-16);
    var D = KA(E, Z.__wbindgen_malloc), o = f;
    Z.compress(g, D, o, dB(G));
    var F = n()[g / 4 + 0], N = n()[g / 4 + 1], H = SA(F, N).slice();
    return Z.__wbindgen_free(F, N * 1), H;
  } finally {
    Z.__wbindgen_add_to_stack_pointer(16), X[QA++] = void 0;
  }
}
function yB(E) {
  var G = r(E) === void 0;
  return G;
}
function KB(E) {
  let G = r(E);
  var D = typeof G == "object" && G !== null;
  return D;
}
function SB(E, G) {
  var D = GA(E, G);
  return MA(D);
}
function lB(E, G) {
  let D = r(G);
  var o = JSON.stringify(D === void 0 ? null : D), F = ZA(o, Z.__wbindgen_malloc, Z.__wbindgen_realloc), N = f;
  n()[E / 4 + 1] = N, n()[E / 4 + 0] = F;
}
function WB() {
  var E = new Error();
  return MA(E);
}
function bB(E, G) {
  throw new Error(GA(E, G));
}
function VB(E, G) {
  var D = r(G).stack, o = ZA(D, Z.__wbindgen_malloc, Z.__wbindgen_realloc), F = f;
  n()[E / 4 + 1] = F, n()[E / 4 + 0] = o;
}
function tB(E, G) {
  try {
    console.error(GA(E, G));
  } finally {
    Z.__wbindgen_free(E, G);
  }
}
function pB(E) {
  yA(E);
}
function qB(E) {
  throw yA(E);
}
var gA = cB(OA());
var GQ = async (E) => (0, gA.encode)(await LA(E));

// index.js
async function brotliCompress(input) {
  let compressed = await GQ(input);
  return compressed;
}
var testText = "Halo dunia";
brotliCompress(testText).then((hasil) => {
  console.log(hasil);
});
