!(function(t) {
  var e = {}
  function n(i) {
    if (e[i]) return e[i].exports
    var r = (e[i] = { i: i, l: !1, exports: {} })
    return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
  }
  ;(n.m = t),
    (n.c = e),
    (n.d = function(t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i })
    }),
    (n.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t
      var i = Object.create(null)
      if (
        (n.r(i),
        Object.defineProperty(i, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var r in t)
          n.d(
            i,
            r,
            function(e) {
              return t[e]
            }.bind(null, r)
          )
      return i
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return n.d(e, 'a', e), e
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (n.p = ''),
    n((n.s = 0))
})([
  function(t, e, n) {
    'use strict'
    n.r(e)
    n(5)
    var i = (function() {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
      }
    })()
    var r = (function() {
      function t(e, n) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function')
        })(this, t),
          (this.x = e),
          (this.y = n)
      }
      return (
        i(t, [
          {
            key: 'setPoint',
            value: function(t) {
              ;(this.x = t.x), (this.y = t.y)
            }
          },
          {
            key: 'setX',
            value: function(t) {
              this.x = t
            }
          },
          {
            key: 'setY',
            value: function(t) {
              this.y = t
            }
          }
        ]),
        t
      )
    })()
    var o = function t(e, n) {
      !(function(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function')
      })(this, t),
        (this.w = e),
        (this.h = n)
    }
    function s(t, e, n, i, r) {
      return Math.min(Math.max(((r - i) * (t - e)) / (n - e) + i, i), r)
    }
    var a = (function() {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
      }
      return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
      }
    })()
    var u = (function() {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 0.08
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function')
          })(this, t),
            (this.prev = 0),
            (this.smoothing = e)
        }
        return (
          a(t, [
            {
              key: 'next',
              value: function(t, e) {
                if (e) return (this.prev = t), t
                if (Math.abs(t - this.prev) > 0.003) {
                  var n = this.prev + this.smoothing * (t - this.prev)
                  return (this.prev = n), n
                }
                return (this.prev = t), this.prev
              }
            }
          ]),
          t
        )
      })(),
      c = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i)
          }
        }
        return function(e, n, i) {
          return n && t(e.prototype, n), i && t(e, i), e
        }
      })()
    var h = (function() {
        function t(e, n) {
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function')
          })(this, t),
            (this.index = e),
            (this.total = n),
            (this.scaleIndex = this.index / (this.total - 1)),
            (this.a = new r(0, 0)),
            (this.b = new r(1e3, 1e3)),
            (this.c = new r(0, 1e3)),
            (this.center = new r(0, 0)),
            (this.bounds = new o(0, 0))
          var i = s(e, 0, n - 1, 0.05, 0.25)
          ;(this.rotationSmoothed = new u(i)), (this.rotation = 0)
        }
        return (
          c(t, [
            {
              key: 'updateCenter',
              value: function(t, e, n, i) {
                var r = (t.x / i.w) * e,
                  o = e / 2,
                  a = this.scaleIndex,
                  u = (t.y - i.h / 2) * -(0.5 - a),
                  c = a * r,
                  h = a * o + u
                this.a.setX(c - n.x), this.a.setY(h - n.y)
                var f = s(1 - a, 0, 1, r, e),
                  l = s(1 - a, 0, 1, o, e) + u
                this.b.setX(f - n.x), this.b.setY(l - n.y)
                var d = s(a, 0, 1, 0, r),
                  p = e - a * o + u
                this.c.setX(d - n.x), this.c.setY(p - n.y)
                var v = (this.a.x + this.b.x + this.c.x) / 3,
                  y = (this.a.y + this.b.y + this.c.y) / 3
                this.center.setX(v), this.center.setY(y)
              }
            },
            {
              key: 'updateRotation',
              value: function(t) {
                this.rotation = this.rotationSmoothed.next(t)
              }
            },
            {
              key: 'updateBounds',
              value: function(t) {
                this.bounds = t
              }
            }
          ]),
          t
        )
      })(),
      f = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i)
          }
        }
        return function(e, n, i) {
          return n && t(e.prototype, n), i && t(e, i), e
        }
      })()
    var l = (function() {
        function t(e) {
          !(function(t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function')
          })(this, t),
            (this.target = e),
            (this.timeBefore = 0),
            (this.pointNow = new r(0, 0)),
            (this.pointBefore = new r(0, 0)),
            (this._velocity = 0),
            (this._rawVelocity = 0),
            (this._smoothX = new u(0.13)),
            (this._smoothY = new u(0.13)),
            (this.pointSmoothed = new r(0, 0)),
            this.init()
        }
        return (
          f(t, [
            {
              key: 'init',
              value: function() {
                var t = this
                this.target.addEventListener('mousemove', function(e) {
                  return t.handleMouseMove(e)
                })
              }
            },
            {
              key: 'handleMouseMove',
              value: function(t) {
                this.pointNow.setPoint({ x: t.clientX, y: t.clientY })
                var e = Date.now(),
                  n = e - this.timeBefore,
                  i = this.pointNow.x - this.pointBefore.x,
                  r = i * i,
                  o = (Math.sqrt(r) / n) * 100
                i < 0 && (o *= -1),
                  (this._rawVelocity = s(o, -500, 500, -10, 10)),
                  this.pointBefore.setPoint(this.pointNow),
                  (this.timeBefore = e)
              }
            },
            {
              key: 'step',
              value: function() {
                var t = this._smoothX.next(this.pointNow.x),
                  e = this._smoothY.next(this.pointNow.y)
                this.pointSmoothed.setPoint({ x: t, y: e })
              }
            },
            {
              key: 'getPosition',
              value: function() {
                return { x: this.pointSmoothed.x, y: this.pointSmoothed.y }
              }
            },
            {
              key: 'getAndResetVelocity',
              value: function() {
                var t = this._rawVelocity
                return (this._rawVelocity = 0), t
              }
            }
          ]),
          t
        )
      })(),
      d = (function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i)
          }
        }
        return function(e, n, i) {
          return n && t(e.prototype, n), i && t(e, i), e
        }
      })()
    var p = (function() {
      function t(e, n) {
        !(function(t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function')
        })(this, t),
          (this.debug = n),
          (this.canvas = e),
          (this.context = this.canvas.getContext('2d')),
          (this.timeLast = null),
          (this.timeDelta = 0),
          (this.stepCounter = 0),
          (this.mouse = new l(this.canvas)),
          (this.size = new o(0, 0)),
          (this.rotation = 0),
          (this.interactionStep = 0),
          (this.triangles = []),
          (this.sideLength = 0),
          (this.contextTranslate = new r()),
          (this.clickInput = new u(0.02)),
          this.init()
      }
      return (
        d(t, [
          {
            key: 'init',
            value: function() {
              for (var t = 0; t < 161; t++) this.triangles.push(new h(t, 161))
              this.attachEventListeners(),
                this.setDimensions(),
                this.updateBounds(),
                this.frame()
            }
          },
          {
            key: 'setDimensions',
            value: function() {
              ;(this.canvas.style.width = window.innerWidth + 'px'),
                (this.canvas.style.height = window.innerHeight + 'px'),
                (this.size.w = this.canvas.offsetWidth),
                (this.size.h = this.canvas.offsetHeight),
                (this.canvas.width = this.size.w),
                (this.canvas.height = this.size.h),
                (this.sideLength = Math.max(this.size.w, this.size.h)),
                this.size.w > this.size.h
                  ? (this.contextTranslate.setX(0),
                    this.contextTranslate.setY((this.size.w - this.size.h) / 2))
                  : (this.contextTranslate.setX(
                      (this.size.h - this.size.w) / 2
                    ),
                    this.contextTranslate.setY(0))
            }
          },
          {
            key: 'updateBounds',
            value: function() {
              var t = this
              this.triangles.forEach(function(e) {
                e.updateBounds(t.size)
              })
            }
          },
          {
            key: 'attachEventListeners',
            value: function() {
              var t = this
              this.canvas.addEventListener('click', function() {
                ;(t.rotation -= 22.5), t.clickInput.next(1)
              }),
                window.addEventListener('debouncedResize', function() {
                  t.setDimensions(), t.updateBounds()
                })
            }
          },
          {
            key: 'frame',
            value: function(t) {
              var e = this
              this.timeLast || (this.timeLast = t)
              var n = t - this.timeLast
              ;(this.timeDelta = n / 1e3),
                (this.timeLast = t),
                this.timeDelta &&
                  (this.stepCounter = this.stepCounter + this.timeDelta),
                this.mouse.step(),
                Math.abs(this.mouse.getAndResetVelocity()) > 8 &&
                  (this.rotation -= 11.25)
              this.clickInput.next(0)
              var i = this.context
              i.clearRect(0, 0, this.size.w, this.size.h)
              this.triangles.forEach(function(t, n) {
                i.save(),
                  t.updateCenter(
                    e.mouse.getPosition(),
                    e.sideLength,
                    e.contextTranslate,
                    e.size
                  ),
                  t.updateRotation(e.rotation),
                  i.translate(t.center.x, t.center.y),
                  i.rotate((t.rotation * Math.PI) / 180),
                  i.translate(-t.center.x, -t.center.y),
                  i.beginPath(),
                  i.moveTo(t.a.x, t.a.y),
                  i.lineTo(t.b.x, t.b.y),
                  i.lineTo(t.c.x, t.c.y),
                  i.closePath()
                var r = (14 * e.stepCounter + 40 * t.scaleIndex) % 360,
                  o = 10 * (1 - (t.rotation % 3.75) / 22.5) + 50
                ;(i.lineWidth = 1.5),
                  (i.strokeStyle = 'hsl(' + r + ', 100%, ' + o + '%)'),
                  i.stroke(),
                  i.restore()
              }),
                window.requestAnimationFrame(function(t) {
                  e.frame(t)
                })
            }
          }
        ]),
        t
      )
    })()
    window.addEventListener('canvasready', function(t) {
      ;(function(t, e, n) {
        var i = !1
        ;(n = n || window).addEventListener(t, function() {
          i ||
            ((i = !0),
            requestAnimationFrame(function() {
              n.dispatchEvent(new CustomEvent(e)), (i = !1)
            }))
        })
      })('resize', 'debouncedResize')
      var e = document.getElementById('canvas'),
        n = document.getElementById('debug')
      new p(e, n)
    })
  },
  function(t, e) {
    t.exports = function(t) {
      var e = 'undefined' != typeof window && window.location
      if (!e) throw new Error('fixUrls requires window.location')
      if (!t || 'string' != typeof t) return t
      var n = e.protocol + '//' + e.host,
        i = n + e.pathname.replace(/\/[^\/]*$/, '/')
      return t.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(t, e) {
          var r,
            o = e
              .trim()
              .replace(/^"(.*)"$/, function(t, e) {
                return e
              })
              .replace(/^'(.*)'$/, function(t, e) {
                return e
              })
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)
            ? t
            : ((r =
                0 === o.indexOf('//')
                  ? o
                  : 0 === o.indexOf('/')
                    ? n + o
                    : i + o.replace(/^\.\//, '')),
              'url(' + JSON.stringify(r) + ')')
        }
      )
    }
  },
  function(t, e, n) {
    var i = {},
      r = (function(t) {
        var e
        return function() {
          return void 0 === e && (e = t.apply(this, arguments)), e
        }
      })(function() {
        return window && document && document.all && !window.atob
      }),
      o = (function(t) {
        var e = {}
        return function(t) {
          if ('function' == typeof t) return t()
          if (void 0 === e[t]) {
            var n = function(t) {
              return document.querySelector(t)
            }.call(this, t)
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head
              } catch (t) {
                n = null
              }
            e[t] = n
          }
          return e[t]
        }
      })(),
      s = null,
      a = 0,
      u = [],
      c = n(1)
    function h(t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
          o = i[r.id]
        if (o) {
          o.refs++
          for (var s = 0; s < o.parts.length; s++) o.parts[s](r.parts[s])
          for (; s < r.parts.length; s++) o.parts.push(y(r.parts[s], e))
        } else {
          var a = []
          for (s = 0; s < r.parts.length; s++) a.push(y(r.parts[s], e))
          i[r.id] = { id: r.id, refs: 1, parts: a }
        }
      }
    }
    function f(t, e) {
      for (var n = [], i = {}, r = 0; r < t.length; r++) {
        var o = t[r],
          s = e.base ? o[0] + e.base : o[0],
          a = { css: o[1], media: o[2], sourceMap: o[3] }
        i[s] ? i[s].parts.push(a) : n.push((i[s] = { id: s, parts: [a] }))
      }
      return n
    }
    function l(t, e) {
      var n = o(t.insertInto)
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        )
      var i = u[u.length - 1]
      if ('top' === t.insertAt)
        i
          ? i.nextSibling
            ? n.insertBefore(e, i.nextSibling)
            : n.appendChild(e)
          : n.insertBefore(e, n.firstChild),
          u.push(e)
      else if ('bottom' === t.insertAt) n.appendChild(e)
      else {
        if ('object' != typeof t.insertAt || !t.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          )
        var r = o(t.insertInto + ' ' + t.insertAt.before)
        n.insertBefore(e, r)
      }
    }
    function d(t) {
      if (null === t.parentNode) return !1
      t.parentNode.removeChild(t)
      var e = u.indexOf(t)
      e >= 0 && u.splice(e, 1)
    }
    function p(t) {
      var e = document.createElement('style')
      return (
        void 0 === t.attrs.type && (t.attrs.type = 'text/css'),
        v(e, t.attrs),
        l(t, e),
        e
      )
    }
    function v(t, e) {
      Object.keys(e).forEach(function(n) {
        t.setAttribute(n, e[n])
      })
    }
    function y(t, e) {
      var n, i, r, o
      if (e.transform && t.css) {
        if (!(o = e.transform(t.css))) return function() {}
        t.css = o
      }
      if (e.singleton) {
        var u = a++
        ;(n = s || (s = p(e))),
          (i = b.bind(null, n, u, !1)),
          (r = b.bind(null, n, u, !0))
      } else
        t.sourceMap &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        'function' == typeof URL.revokeObjectURL &&
        'function' == typeof Blob &&
        'function' == typeof btoa
          ? ((n = (function(t) {
              var e = document.createElement('link')
              return (
                void 0 === t.attrs.type && (t.attrs.type = 'text/css'),
                (t.attrs.rel = 'stylesheet'),
                v(e, t.attrs),
                l(t, e),
                e
              )
            })(e)),
            (i = function(t, e, n) {
              var i = n.css,
                r = n.sourceMap,
                o = void 0 === e.convertToAbsoluteUrls && r
              ;(e.convertToAbsoluteUrls || o) && (i = c(i))
              r &&
                (i +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                  ' */')
              var s = new Blob([i], { type: 'text/css' }),
                a = t.href
              ;(t.href = URL.createObjectURL(s)), a && URL.revokeObjectURL(a)
            }.bind(null, n, e)),
            (r = function() {
              d(n), n.href && URL.revokeObjectURL(n.href)
            }))
          : ((n = p(e)),
            (i = function(t, e) {
              var n = e.css,
                i = e.media
              i && t.setAttribute('media', i)
              if (t.styleSheet) t.styleSheet.cssText = n
              else {
                for (; t.firstChild; ) t.removeChild(t.firstChild)
                t.appendChild(document.createTextNode(n))
              }
            }.bind(null, n)),
            (r = function() {
              d(n)
            }))
      return (
        i(t),
        function(e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap
            )
              return
            i((t = e))
          } else r()
        }
      )
    }
    t.exports = function(t, e) {
      if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
        throw new Error(
          'The style-loader cannot be used in a non-browser environment'
        )
      ;((e = e || {}).attrs = 'object' == typeof e.attrs ? e.attrs : {}),
        e.singleton || 'boolean' == typeof e.singleton || (e.singleton = r()),
        e.insertInto || (e.insertInto = 'head'),
        e.insertAt || (e.insertAt = 'bottom')
      var n = f(t, e)
      return (
        h(n, e),
        function(t) {
          for (var r = [], o = 0; o < n.length; o++) {
            var s = n[o]
            ;(a = i[s.id]).refs--, r.push(a)
          }
          t && h(f(t, e), e)
          for (o = 0; o < r.length; o++) {
            var a
            if (0 === (a = r[o]).refs) {
              for (var u = 0; u < a.parts.length; u++) a.parts[u]()
              delete i[a.id]
            }
          }
        }
      )
    }
    var m = (function() {
      var t = []
      return function(e, n) {
        return (t[e] = n), t.filter(Boolean).join('\n')
      }
    })()
    function b(t, e, n, i) {
      var r = n ? '' : i.css
      if (t.styleSheet) t.styleSheet.cssText = m(e, r)
      else {
        var o = document.createTextNode(r),
          s = t.childNodes
        s[e] && t.removeChild(s[e]),
          s.length ? t.insertBefore(o, s[e]) : t.appendChild(o)
      }
    }
  },
  function(t, e) {
    t.exports = function(t) {
      var e = []
      return (
        (e.toString = function() {
          return this.map(function(e) {
            var n = (function(t, e) {
              var n = t[1] || '',
                i = t[3]
              if (!i) return n
              if (e && 'function' == typeof btoa) {
                var r = (function(t) {
                    return (
                      '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(t)))) +
                      ' */'
                    )
                  })(i),
                  o = i.sources.map(function(t) {
                    return '/*# sourceURL=' + i.sourceRoot + t + ' */'
                  })
                return [n]
                  .concat(o)
                  .concat([r])
                  .join('\n')
              }
              return [n].join('\n')
            })(e, t)
            return e[2] ? '@media ' + e[2] + '{' + n + '}' : n
          }).join('')
        }),
        (e.i = function(t, n) {
          'string' == typeof t && (t = [[null, t, '']])
          for (var i = {}, r = 0; r < this.length; r++) {
            var o = this[r][0]
            'number' == typeof o && (i[o] = !0)
          }
          for (r = 0; r < t.length; r++) {
            var s = t[r]
            ;('number' == typeof s[0] && i[s[0]]) ||
              (n && !s[2]
                ? (s[2] = n)
                : n && (s[2] = '(' + s[2] + ') and (' + n + ')'),
              e.push(s))
          }
        }),
        e
      )
    }
  },
  function(t, e, n) {
    ;(t.exports = n(3)(!1)).push([
      t.i,
      'html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}body{margin:0;padding:0;overflow:hidden}#canvas{width:100vw;height:100vh}#debug{position:absolute;top:0;left:0;z-index:10;pointer-events:none}',
      ''
    ])
  },
  function(t, e, n) {
    var i = n(4)
    'string' == typeof i && (i = [[t.i, i, '']])
    var r = { hmr: !0, transform: void 0, insertInto: void 0 }
    n(2)(i, r)
    i.locals && (t.exports = i.locals)
  }
])
//# sourceMappingURL=bundle.bb63e110380fe0c6828a.js.map
