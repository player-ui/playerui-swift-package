"use strict";
var StageRevertDataPlugin = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/ts-nested-error@1.2.1/node_modules/ts-nested-error/build/nested-error.js
  var require_nested_error = __commonJS({
    "../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/ts-nested-error@1.2.1/node_modules/ts-nested-error/build/nested-error.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.toError = exports.NestedError = void 0;
      var NestedError4 = class _NestedError extends Error {
        /**
         * Allocates an instance of `NestedError` with the given error `message` and
         * optional `innerError` (which will be automatically coerced using `toError()`).
         *
         * @param message     Laconic error message to attach to the created `NestedError`.
         * @param innerErrors Optional errors that will be wrapped by this higher level
         *                    error. This value will be automatically coerced using `toError()`.
         */
        constructor(message, ...innerErrors) {
          super(message);
          const thisErrorReport = _NestedError.getErrorReport(this);
          if (innerErrors.length === 1) {
            const innerError = toError(innerErrors[0]);
            this.innerErrors = [innerError];
            const errReport = _NestedError.getErrorReport(innerError);
            this.stack = `${thisErrorReport}

======= INNER ERROR =======

${errReport}`;
            return;
          }
          this.innerErrors = innerErrors.map((err) => toError(err));
          const innerErrorReports = this.innerErrors.map((error, idx) => {
            const errReport = _NestedError.getErrorReport(error);
            return `======= INNER ERROR (${idx + 1} of ${innerErrors.length}) =======

${errReport}`;
          }).join("\n\n");
          this.stack = `${thisErrorReport}

${innerErrorReports}`;
        }
        /**
         * Provides the first `Error` of the `innerErrors` (if it exists);
         * otherwise, `null`.
         *
         * @deprecated Please shift to using the `innerErrors` (with an 's') property.
         */
        get innerError() {
          return this.innerErrors.length === 0 ? null : this.innerErrors[0];
        }
        /**
         * Returns the function that accepts any value that was thrown as the first argument and
         * throws it wrapped into `NestedError` or class derived from `NestedError` (provided
         * this method was called directly in the context of that dervied class constructor)
         * with the given `message`.
         * Returned function will pass accepted `Error` object directly to `NestedError`
         * as `innerErrors` by invoking `toError(err)` on it.
         *
         * You'll most likely want to use this method with promises:
         *
         * ```ts
         * userService.getPage().then(
         *     data => console.log(`Hooray! data: ${data}`),
         *     NestedError.rethrow('failed to fetch users page')
         * );
         * ```
         *
         * @param message Message to attach `NestedError` created by the returned function.
         */
        static rethrow(message) {
          return (...errs) => {
            throw new this(message, ...errs);
          };
        }
      };
      exports.NestedError = NestedError4;
      NestedError4.getErrorReport = typeof new Error().stack === "string" ? (err) => err.stack : (err) => `${err.name}: ${err.message}`;
      NestedError4.prototype.name = "NestedError";
      function toError(err) {
        try {
          return err instanceof Error ? err : new Error(`Value that is not an instance of Error was thrown: ${err}`);
        } catch {
          return new Error("Failed to stringify non-instance of Error that was thrown.This is possibly due to the fact that toString() method of the valuedoesn't return a primitive value.");
        }
      }
      exports.toError = toError;
    }
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/arr-flatten@1.1.0/node_modules/arr-flatten/index.js
  var require_arr_flatten = __commonJS({
    "../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/arr-flatten@1.1.0/node_modules/arr-flatten/index.js"(exports, module) {
      "use strict";
      module.exports = function(arr) {
        return flat(arr, []);
      };
      function flat(arr, res) {
        var i = 0, cur;
        var len = arr.length;
        for (; i < len; i++) {
          cur = arr[i];
          Array.isArray(cur) ? flat(cur, res) : res.push(cur);
        }
        return res;
      }
    }
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/parsimmon@1.18.1/node_modules/parsimmon/src/parsimmon.js
  var require_parsimmon = __commonJS({
    "../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/parsimmon@1.18.1/node_modules/parsimmon/src/parsimmon.js"(exports, module) {
      "use strict";
      function Parsimmon(action) {
        if (!(this instanceof Parsimmon)) {
          return new Parsimmon(action);
        }
        this._ = action;
      }
      var _ = Parsimmon.prototype;
      function times(n, f) {
        var i = 0;
        for (i; i < n; i++) {
          f(i);
        }
      }
      function forEach(f, arr) {
        times(arr.length, function(i) {
          f(arr[i], i, arr);
        });
      }
      function reduce(f, seed, arr) {
        forEach(function(elem, i, arr2) {
          seed = f(seed, elem, i, arr2);
        }, arr);
        return seed;
      }
      function map(f, arr) {
        return reduce(
          function(acc, elem, i, a) {
            return acc.concat([f(elem, i, a)]);
          },
          [],
          arr
        );
      }
      function lshiftBuffer(input) {
        var asTwoBytes = reduce(
          function(a, v, i, b) {
            return a.concat(
              i === b.length - 1 ? Buffer.from([v, 0]).readUInt16BE(0) : b.readUInt16BE(i)
            );
          },
          [],
          input
        );
        return Buffer.from(
          map(function(x) {
            return (x << 1 & 65535) >> 8;
          }, asTwoBytes)
        );
      }
      function consumeBitsFromBuffer(n, input) {
        var state = { v: 0, buf: input };
        times(n, function() {
          state = {
            v: state.v << 1 | bitPeekBuffer(state.buf),
            buf: lshiftBuffer(state.buf)
          };
        });
        return state;
      }
      function bitPeekBuffer(input) {
        return input[0] >> 7;
      }
      function sum(numArr) {
        return reduce(
          function(x, y) {
            return x + y;
          },
          0,
          numArr
        );
      }
      function find2(pred, arr) {
        return reduce(
          function(found, elem) {
            return found || (pred(elem) ? elem : found);
          },
          null,
          arr
        );
      }
      function bufferExists() {
        return typeof Buffer !== "undefined";
      }
      function setExists() {
        if (Parsimmon._supportsSet !== void 0) {
          return Parsimmon._supportsSet;
        }
        var exists = typeof Set !== "undefined";
        Parsimmon._supportsSet = exists;
        return exists;
      }
      function ensureBuffer() {
        if (!bufferExists()) {
          throw new Error(
            "Buffer global does not exist; please use webpack if you need to parse Buffers in the browser."
          );
        }
      }
      function bitSeq(alignments) {
        ensureBuffer();
        var totalBits = sum(alignments);
        if (totalBits % 8 !== 0) {
          throw new Error(
            "The bits [" + alignments.join(", ") + "] add up to " + totalBits + " which is not an even number of bytes; the total should be divisible by 8"
          );
        }
        var bytes = totalBits / 8;
        var tooBigRange = find2(function(x) {
          return x > 48;
        }, alignments);
        if (tooBigRange) {
          throw new Error(
            tooBigRange + " bit range requested exceeds 48 bit (6 byte) Number max."
          );
        }
        return new Parsimmon(function(input, i) {
          var newPos = bytes + i;
          if (newPos > input.length) {
            return makeFailure(i, bytes.toString() + " bytes");
          }
          return makeSuccess(
            newPos,
            reduce(
              function(acc, bits) {
                var state = consumeBitsFromBuffer(bits, acc.buf);
                return {
                  coll: acc.coll.concat(state.v),
                  buf: state.buf
                };
              },
              { coll: [], buf: input.slice(i, newPos) },
              alignments
            ).coll
          );
        });
      }
      function bitSeqObj(namedAlignments) {
        ensureBuffer();
        var seenKeys = {};
        var totalKeys = 0;
        var fullAlignments = map(function(item) {
          if (isArray(item)) {
            var pair = item;
            if (pair.length !== 2) {
              throw new Error(
                "[" + pair.join(", ") + "] should be length 2, got length " + pair.length
              );
            }
            assertString(pair[0]);
            assertNumber(pair[1]);
            if (Object.prototype.hasOwnProperty.call(seenKeys, pair[0])) {
              throw new Error("duplicate key in bitSeqObj: " + pair[0]);
            }
            seenKeys[pair[0]] = true;
            totalKeys++;
            return pair;
          } else {
            assertNumber(item);
            return [null, item];
          }
        }, namedAlignments);
        if (totalKeys < 1) {
          throw new Error(
            "bitSeqObj expects at least one named pair, got [" + namedAlignments.join(", ") + "]"
          );
        }
        var namesOnly = map(function(pair) {
          return pair[0];
        }, fullAlignments);
        var alignmentsOnly = map(function(pair) {
          return pair[1];
        }, fullAlignments);
        return bitSeq(alignmentsOnly).map(function(parsed) {
          var namedParsed = map(function(name, i) {
            return [name, parsed[i]];
          }, namesOnly);
          return reduce(
            function(obj, kv) {
              if (kv[0] !== null) {
                obj[kv[0]] = kv[1];
              }
              return obj;
            },
            {},
            namedParsed
          );
        });
      }
      function parseBufferFor(other, length) {
        return new Parsimmon(function(input, i) {
          ensureBuffer();
          if (i + length > input.length) {
            return makeFailure(i, length + " bytes for " + other);
          }
          return makeSuccess(i + length, input.slice(i, i + length));
        });
      }
      function parseBuffer(length) {
        return parseBufferFor("buffer", length).map(function(unsafe) {
          return Buffer.from(unsafe);
        });
      }
      function encodedString(encoding, length) {
        return parseBufferFor("string", length).map(function(buff) {
          return buff.toString(encoding);
        });
      }
      function isInteger(value) {
        return typeof value === "number" && Math.floor(value) === value;
      }
      function assertValidIntegerByteLengthFor(who, length) {
        if (!isInteger(length) || length < 0 || length > 6) {
          throw new Error(who + " requires integer length in range [0, 6].");
        }
      }
      function uintBE(length) {
        assertValidIntegerByteLengthFor("uintBE", length);
        return parseBufferFor("uintBE(" + length + ")", length).map(function(buff) {
          return buff.readUIntBE(0, length);
        });
      }
      function uintLE(length) {
        assertValidIntegerByteLengthFor("uintLE", length);
        return parseBufferFor("uintLE(" + length + ")", length).map(function(buff) {
          return buff.readUIntLE(0, length);
        });
      }
      function intBE(length) {
        assertValidIntegerByteLengthFor("intBE", length);
        return parseBufferFor("intBE(" + length + ")", length).map(function(buff) {
          return buff.readIntBE(0, length);
        });
      }
      function intLE(length) {
        assertValidIntegerByteLengthFor("intLE", length);
        return parseBufferFor("intLE(" + length + ")", length).map(function(buff) {
          return buff.readIntLE(0, length);
        });
      }
      function floatBE() {
        return parseBufferFor("floatBE", 4).map(function(buff) {
          return buff.readFloatBE(0);
        });
      }
      function floatLE() {
        return parseBufferFor("floatLE", 4).map(function(buff) {
          return buff.readFloatLE(0);
        });
      }
      function doubleBE() {
        return parseBufferFor("doubleBE", 8).map(function(buff) {
          return buff.readDoubleBE(0);
        });
      }
      function doubleLE() {
        return parseBufferFor("doubleLE", 8).map(function(buff) {
          return buff.readDoubleLE(0);
        });
      }
      function toArray(arrLike) {
        return Array.prototype.slice.call(arrLike);
      }
      function isParser(obj) {
        return obj instanceof Parsimmon;
      }
      function isArray(x) {
        return {}.toString.call(x) === "[object Array]";
      }
      function isBuffer(x) {
        return bufferExists() && Buffer.isBuffer(x);
      }
      function makeSuccess(index2, value) {
        return {
          status: true,
          index: index2,
          value,
          furthest: -1,
          expected: []
        };
      }
      function makeFailure(index2, expected) {
        if (!isArray(expected)) {
          expected = [expected];
        }
        return {
          status: false,
          index: -1,
          value: null,
          furthest: index2,
          expected
        };
      }
      function mergeReplies(result, last) {
        if (!last) {
          return result;
        }
        if (result.furthest > last.furthest) {
          return result;
        }
        var expected = result.furthest === last.furthest ? union(result.expected, last.expected) : last.expected;
        return {
          status: result.status,
          index: result.index,
          value: result.value,
          furthest: last.furthest,
          expected
        };
      }
      var lineColumnIndex = {};
      function makeLineColumnIndex(input, i) {
        if (isBuffer(input)) {
          return {
            offset: i,
            line: -1,
            column: -1
          };
        }
        if (!(input in lineColumnIndex)) {
          lineColumnIndex[input] = {};
        }
        var inputIndex = lineColumnIndex[input];
        var prevLine = 0;
        var newLines = 0;
        var lineStart = 0;
        var j = i;
        while (j >= 0) {
          if (j in inputIndex) {
            prevLine = inputIndex[j].line;
            if (lineStart === 0) {
              lineStart = inputIndex[j].lineStart;
            }
            break;
          }
          if (
            // Unix LF (\n) or Windows CRLF (\r\n) line ending
            input.charAt(j) === "\n" || // Old Mac CR (\r) line ending
            input.charAt(j) === "\r" && input.charAt(j + 1) !== "\n"
          ) {
            newLines++;
            if (lineStart === 0) {
              lineStart = j + 1;
            }
          }
          j--;
        }
        var lineWeAreUpTo = prevLine + newLines;
        var columnWeAreUpTo = i - lineStart;
        inputIndex[i] = { line: lineWeAreUpTo, lineStart };
        return {
          offset: i,
          line: lineWeAreUpTo + 1,
          column: columnWeAreUpTo + 1
        };
      }
      function union(xs, ys) {
        if (setExists() && Array.from) {
          var set2 = new Set(xs);
          for (var y = 0; y < ys.length; y++) {
            set2.add(ys[y]);
          }
          var arr = Array.from(set2);
          arr.sort();
          return arr;
        }
        var obj = {};
        for (var i = 0; i < xs.length; i++) {
          obj[xs[i]] = true;
        }
        for (var j = 0; j < ys.length; j++) {
          obj[ys[j]] = true;
        }
        var keys = [];
        for (var k in obj) {
          if ({}.hasOwnProperty.call(obj, k)) {
            keys.push(k);
          }
        }
        keys.sort();
        return keys;
      }
      function assertParser(p) {
        if (!isParser(p)) {
          throw new Error("not a parser: " + p);
        }
      }
      function get(input, i) {
        if (typeof input === "string") {
          return input.charAt(i);
        }
        return input[i];
      }
      function assertArray(x) {
        if (!isArray(x)) {
          throw new Error("not an array: " + x);
        }
      }
      function assertNumber(x) {
        if (typeof x !== "number") {
          throw new Error("not a number: " + x);
        }
      }
      function assertRegexp(x) {
        if (!(x instanceof RegExp)) {
          throw new Error("not a regexp: " + x);
        }
        var f = flags(x);
        for (var i = 0; i < f.length; i++) {
          var c = f.charAt(i);
          if (c !== "i" && c !== "m" && c !== "u" && c !== "s") {
            throw new Error('unsupported regexp flag "' + c + '": ' + x);
          }
        }
      }
      function assertFunction(x) {
        if (typeof x !== "function") {
          throw new Error("not a function: " + x);
        }
      }
      function assertString(x) {
        if (typeof x !== "string") {
          throw new Error("not a string: " + x);
        }
      }
      var linesBeforeStringError = 2;
      var linesAfterStringError = 3;
      var bytesPerLine = 8;
      var bytesBefore = bytesPerLine * 5;
      var bytesAfter = bytesPerLine * 4;
      var defaultLinePrefix = "  ";
      function repeat(string2, amount) {
        return new Array(amount + 1).join(string2);
      }
      function formatExpected(expected) {
        if (expected.length === 1) {
          return "Expected:\n\n" + expected[0];
        }
        return "Expected one of the following: \n\n" + expected.join(", ");
      }
      function leftPad(str, pad, char) {
        var add = pad - str.length;
        if (add <= 0) {
          return str;
        }
        return repeat(char, add) + str;
      }
      function toChunks(arr, chunkSize) {
        var length = arr.length;
        var chunks = [];
        var chunkIndex = 0;
        if (length <= chunkSize) {
          return [arr.slice()];
        }
        for (var i = 0; i < length; i++) {
          if (!chunks[chunkIndex]) {
            chunks.push([]);
          }
          chunks[chunkIndex].push(arr[i]);
          if ((i + 1) % chunkSize === 0) {
            chunkIndex++;
          }
        }
        return chunks;
      }
      function rangeFromIndexAndOffsets(i, before, after, length) {
        return {
          // Guard against the negative upper bound for lines included in the output.
          from: i - before > 0 ? i - before : 0,
          to: i + after > length ? length : i + after
        };
      }
      function byteRangeToRange(byteRange) {
        if (byteRange.from === 0 && byteRange.to === 1) {
          return {
            from: byteRange.from,
            to: byteRange.to
          };
        }
        return {
          from: byteRange.from / bytesPerLine,
          // Round `to`, so we don't get float if the amount of bytes is not divisible by `bytesPerLine`
          to: Math.floor(byteRange.to / bytesPerLine)
        };
      }
      function formatGot(input, error) {
        var index2 = error.index;
        var i = index2.offset;
        var verticalMarkerLength = 1;
        var column;
        var lineWithErrorIndex;
        var lines;
        var lineRange;
        var lastLineNumberLabelLength;
        if (i === input.length) {
          return "Got the end of the input";
        }
        if (isBuffer(input)) {
          var byteLineWithErrorIndex = i - i % bytesPerLine;
          var columnByteIndex = i - byteLineWithErrorIndex;
          var byteRange = rangeFromIndexAndOffsets(
            byteLineWithErrorIndex,
            bytesBefore,
            bytesAfter + bytesPerLine,
            input.length
          );
          var bytes = input.slice(byteRange.from, byteRange.to);
          var bytesInChunks = toChunks(bytes.toJSON().data, bytesPerLine);
          var byteLines = map(function(byteRow) {
            return map(function(byteValue) {
              return leftPad(byteValue.toString(16), 2, "0");
            }, byteRow);
          }, bytesInChunks);
          lineRange = byteRangeToRange(byteRange);
          lineWithErrorIndex = byteLineWithErrorIndex / bytesPerLine;
          column = columnByteIndex * 3;
          if (columnByteIndex >= 4) {
            column += 1;
          }
          verticalMarkerLength = 2;
          lines = map(function(byteLine) {
            return byteLine.length <= 4 ? byteLine.join(" ") : byteLine.slice(0, 4).join(" ") + "  " + byteLine.slice(4).join(" ");
          }, byteLines);
          lastLineNumberLabelLength = ((lineRange.to > 0 ? lineRange.to - 1 : lineRange.to) * 8).toString(16).length;
          if (lastLineNumberLabelLength < 2) {
            lastLineNumberLabelLength = 2;
          }
        } else {
          var inputLines = input.split(/\r\n|[\n\r\u2028\u2029]/);
          column = index2.column - 1;
          lineWithErrorIndex = index2.line - 1;
          lineRange = rangeFromIndexAndOffsets(
            lineWithErrorIndex,
            linesBeforeStringError,
            linesAfterStringError,
            inputLines.length
          );
          lines = inputLines.slice(lineRange.from, lineRange.to);
          lastLineNumberLabelLength = lineRange.to.toString().length;
        }
        var lineWithErrorCurrentIndex = lineWithErrorIndex - lineRange.from;
        if (isBuffer(input)) {
          lastLineNumberLabelLength = ((lineRange.to > 0 ? lineRange.to - 1 : lineRange.to) * 8).toString(16).length;
          if (lastLineNumberLabelLength < 2) {
            lastLineNumberLabelLength = 2;
          }
        }
        var linesWithLineNumbers = reduce(
          function(acc, lineSource, index3) {
            var isLineWithError = index3 === lineWithErrorCurrentIndex;
            var prefix = isLineWithError ? "> " : defaultLinePrefix;
            var lineNumberLabel;
            if (isBuffer(input)) {
              lineNumberLabel = leftPad(
                ((lineRange.from + index3) * 8).toString(16),
                lastLineNumberLabelLength,
                "0"
              );
            } else {
              lineNumberLabel = leftPad(
                (lineRange.from + index3 + 1).toString(),
                lastLineNumberLabelLength,
                " "
              );
            }
            return [].concat(
              acc,
              [prefix + lineNumberLabel + " | " + lineSource],
              isLineWithError ? [
                defaultLinePrefix + repeat(" ", lastLineNumberLabelLength) + " | " + leftPad("", column, " ") + repeat("^", verticalMarkerLength)
              ] : []
            );
          },
          [],
          lines
        );
        return linesWithLineNumbers.join("\n");
      }
      function formatError(input, error) {
        return [
          "\n",
          "-- PARSING FAILED " + repeat("-", 50),
          "\n\n",
          formatGot(input, error),
          "\n\n",
          formatExpected(error.expected),
          "\n"
        ].join("");
      }
      function flags(re) {
        if (re.flags !== void 0) {
          return re.flags;
        }
        return [
          re.global ? "g" : "",
          re.ignoreCase ? "i" : "",
          re.multiline ? "m" : "",
          re.unicode ? "u" : "",
          re.sticky ? "y" : ""
        ].join("");
      }
      function anchoredRegexp(re) {
        return RegExp("^(?:" + re.source + ")", flags(re));
      }
      function seq() {
        var parsers = [].slice.call(arguments);
        var numParsers = parsers.length;
        for (var j = 0; j < numParsers; j += 1) {
          assertParser(parsers[j]);
        }
        return Parsimmon(function(input, i) {
          var result;
          var accum = new Array(numParsers);
          for (var j2 = 0; j2 < numParsers; j2 += 1) {
            result = mergeReplies(parsers[j2]._(input, i), result);
            if (!result.status) {
              return result;
            }
            accum[j2] = result.value;
            i = result.index;
          }
          return mergeReplies(makeSuccess(i, accum), result);
        });
      }
      function seqObj() {
        var seenKeys = {};
        var totalKeys = 0;
        var parsers = toArray(arguments);
        var numParsers = parsers.length;
        for (var j = 0; j < numParsers; j += 1) {
          var p = parsers[j];
          if (isParser(p)) {
            continue;
          }
          if (isArray(p)) {
            var isWellFormed = p.length === 2 && typeof p[0] === "string" && isParser(p[1]);
            if (isWellFormed) {
              var key = p[0];
              if (Object.prototype.hasOwnProperty.call(seenKeys, key)) {
                throw new Error("seqObj: duplicate key " + key);
              }
              seenKeys[key] = true;
              totalKeys++;
              continue;
            }
          }
          throw new Error(
            "seqObj arguments must be parsers or [string, parser] array pairs."
          );
        }
        if (totalKeys === 0) {
          throw new Error("seqObj expects at least one named parser, found zero");
        }
        return Parsimmon(function(input, i) {
          var result;
          var accum = {};
          for (var j2 = 0; j2 < numParsers; j2 += 1) {
            var name;
            var parser2;
            if (isArray(parsers[j2])) {
              name = parsers[j2][0];
              parser2 = parsers[j2][1];
            } else {
              name = null;
              parser2 = parsers[j2];
            }
            result = mergeReplies(parser2._(input, i), result);
            if (!result.status) {
              return result;
            }
            if (name) {
              accum[name] = result.value;
            }
            i = result.index;
          }
          return mergeReplies(makeSuccess(i, accum), result);
        });
      }
      function seqMap() {
        var args = [].slice.call(arguments);
        if (args.length === 0) {
          throw new Error("seqMap needs at least one argument");
        }
        var mapper = args.pop();
        assertFunction(mapper);
        return seq.apply(null, args).map(function(results) {
          return mapper.apply(null, results);
        });
      }
      function createLanguage(parsers) {
        var language = {};
        for (var key in parsers) {
          if ({}.hasOwnProperty.call(parsers, key)) {
            (function(key2) {
              var func = function() {
                return parsers[key2](language);
              };
              language[key2] = lazy(func);
            })(key);
          }
        }
        return language;
      }
      function alt() {
        var parsers = [].slice.call(arguments);
        var numParsers = parsers.length;
        if (numParsers === 0) {
          return fail("zero alternates");
        }
        for (var j = 0; j < numParsers; j += 1) {
          assertParser(parsers[j]);
        }
        return Parsimmon(function(input, i) {
          var result;
          for (var j2 = 0; j2 < parsers.length; j2 += 1) {
            result = mergeReplies(parsers[j2]._(input, i), result);
            if (result.status) {
              return result;
            }
          }
          return result;
        });
      }
      function sepBy(parser2, separator) {
        return sepBy1(parser2, separator).or(succeed([]));
      }
      function sepBy1(parser2, separator) {
        assertParser(parser2);
        assertParser(separator);
        var pairs = separator.then(parser2).many();
        return seqMap(parser2, pairs, function(r, rs) {
          return [r].concat(rs);
        });
      }
      _.parse = function(input) {
        if (typeof input !== "string" && !isBuffer(input)) {
          throw new Error(
            ".parse must be called with a string or Buffer as its argument"
          );
        }
        var parseResult = this.skip(eof)._(input, 0);
        var result;
        if (parseResult.status) {
          result = {
            status: true,
            value: parseResult.value
          };
        } else {
          result = {
            status: false,
            index: makeLineColumnIndex(input, parseResult.furthest),
            expected: parseResult.expected
          };
        }
        delete lineColumnIndex[input];
        return result;
      };
      _.tryParse = function(str) {
        var result = this.parse(str);
        if (result.status) {
          return result.value;
        } else {
          var msg = formatError(str, result);
          var err = new Error(msg);
          err.type = "ParsimmonError";
          err.result = result;
          throw err;
        }
      };
      _.assert = function(condition, errorMessage) {
        return this.chain(function(value) {
          return condition(value) ? succeed(value) : fail(errorMessage);
        });
      };
      _.or = function(alternative) {
        return alt(this, alternative);
      };
      _.trim = function(parser2) {
        return this.wrap(parser2, parser2);
      };
      _.wrap = function(leftParser, rightParser) {
        return seqMap(leftParser, this, rightParser, function(left, middle) {
          return middle;
        });
      };
      _.thru = function(wrapper) {
        return wrapper(this);
      };
      _.then = function(next) {
        assertParser(next);
        return seq(this, next).map(function(results) {
          return results[1];
        });
      };
      _.many = function() {
        var self = this;
        return Parsimmon(function(input, i) {
          var accum = [];
          var result = void 0;
          for (; ; ) {
            result = mergeReplies(self._(input, i), result);
            if (result.status) {
              if (i === result.index) {
                throw new Error(
                  "infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause"
                );
              }
              i = result.index;
              accum.push(result.value);
            } else {
              return mergeReplies(makeSuccess(i, accum), result);
            }
          }
        });
      };
      _.tieWith = function(separator) {
        assertString(separator);
        return this.map(function(args) {
          assertArray(args);
          if (args.length) {
            assertString(args[0]);
            var s = args[0];
            for (var i = 1; i < args.length; i++) {
              assertString(args[i]);
              s += separator + args[i];
            }
            return s;
          } else {
            return "";
          }
        });
      };
      _.tie = function() {
        return this.tieWith("");
      };
      _.times = function(min, max) {
        var self = this;
        if (arguments.length < 2) {
          max = min;
        }
        assertNumber(min);
        assertNumber(max);
        return Parsimmon(function(input, i) {
          var accum = [];
          var result = void 0;
          var prevResult = void 0;
          for (var times2 = 0; times2 < min; times2 += 1) {
            result = self._(input, i);
            prevResult = mergeReplies(result, prevResult);
            if (result.status) {
              i = result.index;
              accum.push(result.value);
            } else {
              return prevResult;
            }
          }
          for (; times2 < max; times2 += 1) {
            result = self._(input, i);
            prevResult = mergeReplies(result, prevResult);
            if (result.status) {
              i = result.index;
              accum.push(result.value);
            } else {
              break;
            }
          }
          return mergeReplies(makeSuccess(i, accum), prevResult);
        });
      };
      _.result = function(res) {
        return this.map(function() {
          return res;
        });
      };
      _.atMost = function(n) {
        return this.times(0, n);
      };
      _.atLeast = function(n) {
        return seqMap(this.times(n), this.many(), function(init, rest) {
          return init.concat(rest);
        });
      };
      _.map = function(fn) {
        assertFunction(fn);
        var self = this;
        return Parsimmon(function(input, i) {
          var result = self._(input, i);
          if (!result.status) {
            return result;
          }
          return mergeReplies(makeSuccess(result.index, fn(result.value)), result);
        });
      };
      _.contramap = function(fn) {
        assertFunction(fn);
        var self = this;
        return Parsimmon(function(input, i) {
          var result = self.parse(fn(input.slice(i)));
          if (!result.status) {
            return result;
          }
          return makeSuccess(i + input.length, result.value);
        });
      };
      _.promap = function(f, g) {
        assertFunction(f);
        assertFunction(g);
        return this.contramap(f).map(g);
      };
      _.skip = function(next) {
        return seq(this, next).map(function(results) {
          return results[0];
        });
      };
      _.mark = function() {
        return seqMap(index, this, index, function(start, value, end2) {
          return {
            start,
            value,
            end: end2
          };
        });
      };
      _.node = function(name) {
        return seqMap(index, this, index, function(start, value, end2) {
          return {
            name,
            value,
            start,
            end: end2
          };
        });
      };
      _.sepBy = function(separator) {
        return sepBy(this, separator);
      };
      _.sepBy1 = function(separator) {
        return sepBy1(this, separator);
      };
      _.lookahead = function(x) {
        return this.skip(lookahead(x));
      };
      _.notFollowedBy = function(x) {
        return this.skip(notFollowedBy(x));
      };
      _.desc = function(expected) {
        if (!isArray(expected)) {
          expected = [expected];
        }
        var self = this;
        return Parsimmon(function(input, i) {
          var reply = self._(input, i);
          if (!reply.status) {
            reply.expected = expected;
          }
          return reply;
        });
      };
      _.fallback = function(result) {
        return this.or(succeed(result));
      };
      _.ap = function(other) {
        return seqMap(other, this, function(f, x) {
          return f(x);
        });
      };
      _.chain = function(f) {
        var self = this;
        return Parsimmon(function(input, i) {
          var result = self._(input, i);
          if (!result.status) {
            return result;
          }
          var nextParser = f(result.value);
          return mergeReplies(nextParser._(input, result.index), result);
        });
      };
      function string(str) {
        assertString(str);
        var expected = "'" + str + "'";
        return Parsimmon(function(input, i) {
          var j = i + str.length;
          var head = input.slice(i, j);
          if (head === str) {
            return makeSuccess(j, head);
          } else {
            return makeFailure(i, expected);
          }
        });
      }
      function byte(b) {
        ensureBuffer();
        assertNumber(b);
        if (b > 255) {
          throw new Error(
            "Value specified to byte constructor (" + b + "=0x" + b.toString(16) + ") is larger in value than a single byte."
          );
        }
        var expected = (b > 15 ? "0x" : "0x0") + b.toString(16);
        return Parsimmon(function(input, i) {
          var head = get(input, i);
          if (head === b) {
            return makeSuccess(i + 1, head);
          } else {
            return makeFailure(i, expected);
          }
        });
      }
      function regexp(re, group) {
        assertRegexp(re);
        if (arguments.length >= 2) {
          assertNumber(group);
        } else {
          group = 0;
        }
        var anchored = anchoredRegexp(re);
        var expected = "" + re;
        return Parsimmon(function(input, i) {
          var match = anchored.exec(input.slice(i));
          if (match) {
            if (0 <= group && group <= match.length) {
              var fullMatch = match[0];
              var groupMatch = match[group];
              return makeSuccess(i + fullMatch.length, groupMatch);
            }
            var message = "valid match group (0 to " + match.length + ") in " + expected;
            return makeFailure(i, message);
          }
          return makeFailure(i, expected);
        });
      }
      function succeed(value) {
        return Parsimmon(function(input, i) {
          return makeSuccess(i, value);
        });
      }
      function fail(expected) {
        return Parsimmon(function(input, i) {
          return makeFailure(i, expected);
        });
      }
      function lookahead(x) {
        if (isParser(x)) {
          return Parsimmon(function(input, i) {
            var result = x._(input, i);
            result.index = i;
            result.value = "";
            return result;
          });
        } else if (typeof x === "string") {
          return lookahead(string(x));
        } else if (x instanceof RegExp) {
          return lookahead(regexp(x));
        }
        throw new Error("not a string, regexp, or parser: " + x);
      }
      function notFollowedBy(parser2) {
        assertParser(parser2);
        return Parsimmon(function(input, i) {
          var result = parser2._(input, i);
          var text = input.slice(i, result.index);
          return result.status ? makeFailure(i, 'not "' + text + '"') : makeSuccess(i, null);
        });
      }
      function test(predicate) {
        assertFunction(predicate);
        return Parsimmon(function(input, i) {
          var char = get(input, i);
          if (i < input.length && predicate(char)) {
            return makeSuccess(i + 1, char);
          } else {
            return makeFailure(i, "a character/byte matching " + predicate);
          }
        });
      }
      function oneOf(str) {
        var expected = str.split("");
        for (var idx = 0; idx < expected.length; idx++) {
          expected[idx] = "'" + expected[idx] + "'";
        }
        return test(function(ch) {
          return str.indexOf(ch) >= 0;
        }).desc(expected);
      }
      function noneOf(str) {
        return test(function(ch) {
          return str.indexOf(ch) < 0;
        }).desc("none of '" + str + "'");
      }
      function custom(parsingFunction) {
        return Parsimmon(parsingFunction(makeSuccess, makeFailure));
      }
      function range(begin, end2) {
        return test(function(ch) {
          return begin <= ch && ch <= end2;
        }).desc(begin + "-" + end2);
      }
      function takeWhile(predicate) {
        assertFunction(predicate);
        return Parsimmon(function(input, i) {
          var j = i;
          while (j < input.length && predicate(get(input, j))) {
            j++;
          }
          return makeSuccess(j, input.slice(i, j));
        });
      }
      function lazy(desc, f) {
        if (arguments.length < 2) {
          f = desc;
          desc = void 0;
        }
        var parser2 = Parsimmon(function(input, i) {
          parser2._ = f()._;
          return parser2._(input, i);
        });
        if (desc) {
          return parser2.desc(desc);
        } else {
          return parser2;
        }
      }
      function empty() {
        return fail("fantasy-land/empty");
      }
      _.concat = _.or;
      _.empty = empty;
      _.of = succeed;
      _["fantasy-land/ap"] = _.ap;
      _["fantasy-land/chain"] = _.chain;
      _["fantasy-land/concat"] = _.concat;
      _["fantasy-land/empty"] = _.empty;
      _["fantasy-land/of"] = _.of;
      _["fantasy-land/map"] = _.map;
      var index = Parsimmon(function(input, i) {
        return makeSuccess(i, makeLineColumnIndex(input, i));
      });
      var any = Parsimmon(function(input, i) {
        if (i >= input.length) {
          return makeFailure(i, "any character/byte");
        }
        return makeSuccess(i + 1, get(input, i));
      });
      var all = Parsimmon(function(input, i) {
        return makeSuccess(input.length, input.slice(i));
      });
      var eof = Parsimmon(function(input, i) {
        if (i < input.length) {
          return makeFailure(i, "EOF");
        }
        return makeSuccess(i, null);
      });
      var digit = regexp(/[0-9]/).desc("a digit");
      var digits = regexp(/[0-9]*/).desc("optional digits");
      var letter = regexp(/[a-z]/i).desc("a letter");
      var letters = regexp(/[a-z]*/i).desc("optional letters");
      var optWhitespace = regexp(/\s*/).desc("optional whitespace");
      var whitespace = regexp(/\s+/).desc("whitespace");
      var cr = string("\r");
      var lf = string("\n");
      var crlf = string("\r\n");
      var newline = alt(crlf, lf, cr).desc("newline");
      var end = alt(newline, eof);
      Parsimmon.all = all;
      Parsimmon.alt = alt;
      Parsimmon.any = any;
      Parsimmon.cr = cr;
      Parsimmon.createLanguage = createLanguage;
      Parsimmon.crlf = crlf;
      Parsimmon.custom = custom;
      Parsimmon.digit = digit;
      Parsimmon.digits = digits;
      Parsimmon.empty = empty;
      Parsimmon.end = end;
      Parsimmon.eof = eof;
      Parsimmon.fail = fail;
      Parsimmon.formatError = formatError;
      Parsimmon.index = index;
      Parsimmon.isParser = isParser;
      Parsimmon.lazy = lazy;
      Parsimmon.letter = letter;
      Parsimmon.letters = letters;
      Parsimmon.lf = lf;
      Parsimmon.lookahead = lookahead;
      Parsimmon.makeFailure = makeFailure;
      Parsimmon.makeSuccess = makeSuccess;
      Parsimmon.newline = newline;
      Parsimmon.noneOf = noneOf;
      Parsimmon.notFollowedBy = notFollowedBy;
      Parsimmon.of = succeed;
      Parsimmon.oneOf = oneOf;
      Parsimmon.optWhitespace = optWhitespace;
      Parsimmon.Parser = Parsimmon;
      Parsimmon.range = range;
      Parsimmon.regex = regexp;
      Parsimmon.regexp = regexp;
      Parsimmon.sepBy = sepBy;
      Parsimmon.sepBy1 = sepBy1;
      Parsimmon.seq = seq;
      Parsimmon.seqMap = seqMap;
      Parsimmon.seqObj = seqObj;
      Parsimmon.string = string;
      Parsimmon.succeed = succeed;
      Parsimmon.takeWhile = takeWhile;
      Parsimmon.test = test;
      Parsimmon.whitespace = whitespace;
      Parsimmon["fantasy-land/empty"] = empty;
      Parsimmon["fantasy-land/of"] = succeed;
      Parsimmon.Binary = {
        bitSeq,
        bitSeqObj,
        byte,
        buffer: parseBuffer,
        encodedString,
        uintBE,
        uint8BE: uintBE(1),
        uint16BE: uintBE(2),
        uint32BE: uintBE(4),
        uintLE,
        uint8LE: uintLE(1),
        uint16LE: uintLE(2),
        uint32LE: uintLE(4),
        intBE,
        int8BE: intBE(1),
        int16BE: intBE(2),
        int32BE: intBE(4),
        intLE,
        int8LE: intLE(1),
        int16LE: intLE(2),
        int32LE: intLE(4),
        floatBE: floatBE(),
        floatLE: floatLE(),
        doubleBE: doubleBE(),
        doubleLE: doubleLE()
      };
      module.exports = Parsimmon;
    }
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/TokenError.js
  var require_TokenError = __commonJS({
    "../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/TokenError.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TokenError = void 0;
      var TokenError = class extends Error {
        constructor(message, token) {
          super(message);
          this.message = message;
          this.token = token;
          if (token && token.errors)
            token.errors.push(this);
          else
            throw this;
        }
        inspect() {
          return "SyntaxError: " + this.message;
        }
      };
      exports.TokenError = TokenError;
    }
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Parser.js
  var require_Parser = __commonJS({
    "../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Parser.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Parser = exports.findRuleByName = exports.parseRuleName = exports.escapeRegExp = exports.readToken = void 0;
      var UPPER_SNAKE_RE = /^[A-Z0-9_]+$/;
      var decorationRE = /(\?|\+|\*)$/;
      var preDecorationRE = /^(@|&|!)/;
      var WS_RULE = "WS";
      var TokenError_1 = require_TokenError();
      function readToken(txt, expr) {
        let result = expr.exec(txt);
        if (result && result.index == 0) {
          if (result[0].length == 0 && expr.source.length > 0)
            return null;
          return {
            type: null,
            text: result[0],
            rest: txt.substr(result[0].length),
            start: 0,
            end: result[0].length - 1,
            fullText: result[0],
            errors: [],
            children: [],
            parent: null
          };
        }
        return null;
      }
      exports.readToken = readToken;
      function escapeRegExp(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
      exports.escapeRegExp = escapeRegExp;
      function fixRest(token) {
        token.rest = "";
        token.children && token.children.forEach((c) => fixRest(c));
      }
      function fixPositions(token, start) {
        token.start += start;
        token.end += start;
        token.children && token.children.forEach((c) => fixPositions(c, token.start));
      }
      function agregateErrors(errors, token) {
        if (token.errors && token.errors.length)
          token.errors.forEach((err) => errors.push(err));
        token.children && token.children.forEach((tok) => agregateErrors(errors, tok));
      }
      function parseRuleName(name) {
        let postDecoration = decorationRE.exec(name);
        let preDecoration = preDecorationRE.exec(name);
        let postDecorationText = postDecoration && postDecoration[0] || "";
        let preDecorationText = preDecoration && preDecoration[0] || "";
        let out = {
          raw: name,
          name: name.replace(decorationRE, "").replace(preDecorationRE, ""),
          isOptional: postDecorationText == "?" || postDecorationText == "*",
          allowRepetition: postDecorationText == "+" || postDecorationText == "*",
          atLeastOne: postDecorationText == "+",
          lookupPositive: preDecorationText == "&",
          lookupNegative: preDecorationText == "!",
          pinned: preDecorationText == "@",
          lookup: false,
          isLiteral: false
        };
        out.isLiteral = out.name[0] == "'" || out.name[0] == '"';
        out.lookup = out.lookupNegative || out.lookupPositive;
        return out;
      }
      exports.parseRuleName = parseRuleName;
      function findRuleByName(name, parser2) {
        let parsed = parseRuleName(name);
        return parser2.cachedRules[parsed.name] || null;
      }
      exports.findRuleByName = findRuleByName;
      function stripRules(token, re) {
        if (token.children) {
          let localRules = token.children.filter((x) => x.type && re.test(x.type));
          for (let i = 0; i < localRules.length; i++) {
            let indexOnChildren = token.children.indexOf(localRules[i]);
            if (indexOnChildren != -1) {
              token.children.splice(indexOnChildren, 1);
            }
          }
          token.children.forEach((c) => stripRules(c, re));
        }
      }
      var ignoreMissingRules = ["EOF"];
      var Parser2 = class {
        constructor(grammarRules, options) {
          this.grammarRules = grammarRules;
          this.options = options;
          this.cachedRules = {};
          this.debug = options ? options.debug === true : false;
          let errors = [];
          let neededRules = [];
          grammarRules.forEach((rule) => {
            let parsedName = parseRuleName(rule.name);
            if (parsedName.name in this.cachedRules) {
              errors.push("Duplicated rule " + parsedName.name);
              return;
            } else {
              this.cachedRules[parsedName.name] = rule;
            }
            if (!rule.bnf || !rule.bnf.length) {
              let error = "Missing rule content, rule: " + rule.name;
              if (errors.indexOf(error) == -1)
                errors.push(error);
            } else {
              rule.bnf.forEach((options2) => {
                if (typeof options2[0] === "string") {
                  let parsed = parseRuleName(options2[0]);
                  if (parsed.name == rule.name) {
                    let error = "Left recursion is not allowed, rule: " + rule.name;
                    if (errors.indexOf(error) == -1)
                      errors.push(error);
                  }
                }
                options2.forEach((option) => {
                  if (typeof option == "string") {
                    let name = parseRuleName(option);
                    if (!name.isLiteral && neededRules.indexOf(name.name) == -1 && ignoreMissingRules.indexOf(name.name) == -1)
                      neededRules.push(name.name);
                  }
                });
              });
            }
            if (WS_RULE == rule.name)
              rule.implicitWs = false;
            if (rule.implicitWs) {
              if (neededRules.indexOf(WS_RULE) == -1)
                neededRules.push(WS_RULE);
            }
            if (rule.recover) {
              if (neededRules.indexOf(rule.recover) == -1)
                neededRules.push(rule.recover);
            }
          });
          neededRules.forEach((ruleName) => {
            if (!(ruleName in this.cachedRules)) {
              errors.push("Missing rule " + ruleName);
            }
          });
          if (errors.length)
            throw new Error(errors.join("\n"));
        }
        getAST(txt, target) {
          if (!target) {
            target = this.grammarRules.filter((x) => !x.fragment && x.name.indexOf("%") != 0)[0].name;
          }
          let result = this.parse(txt, target);
          if (result) {
            agregateErrors(result.errors, result);
            fixPositions(result, 0);
            stripRules(result, /^%/);
            if (!this.options || !this.options.keepUpperRules)
              stripRules(result, UPPER_SNAKE_RE);
            let rest = result.rest;
            if (rest) {
              new TokenError_1.TokenError("Unexpected end of input: \n" + rest, result);
            }
            fixRest(result);
            result.rest = rest;
          }
          return result;
        }
        emitSource() {
          return "CANNOT EMIT SOURCE FROM BASE Parser";
        }
        parse(txt, target, recursion = 0) {
          let out = null;
          let type = parseRuleName(target);
          let expr;
          let printable = this.debug && /*!isLiteral &*/
          !UPPER_SNAKE_RE.test(type.name);
          printable && console.log(new Array(recursion).join("\u2502  ") + "Trying to get " + target + " from " + JSON.stringify(txt.split("\n")[0]));
          let realType = type.name;
          let targetLex = findRuleByName(type.name, this);
          if (type.name == "EOF") {
            if (txt.length) {
              return null;
            } else if (txt.length == 0) {
              return {
                type: "EOF",
                text: "",
                rest: "",
                start: 0,
                end: 0,
                fullText: "",
                errors: [],
                children: [],
                parent: null
              };
            }
          }
          try {
            if (!targetLex && type.isLiteral) {
              let src = type.name.trim();
              if (src.startsWith('"')) {
                src = JSON.parse(src);
              } else if (src.startsWith("'")) {
                src = src.replace(/^'(.+)'$/, "$1").replace(/\\'/g, "'");
              }
              if (src === "") {
                return {
                  type: "%%EMPTY%%",
                  text: "",
                  rest: txt,
                  start: 0,
                  end: 0,
                  fullText: "",
                  errors: [],
                  children: [],
                  parent: null
                };
              }
              expr = new RegExp(escapeRegExp(src));
              realType = null;
            }
          } catch (e) {
            if (e instanceof ReferenceError) {
              console.error(e);
            }
            return null;
          }
          if (expr) {
            let result = readToken(txt, expr);
            if (result) {
              result.type = realType;
              return result;
            }
          } else {
            let options = targetLex.bnf;
            if (options instanceof Array) {
              options.forEach((phases) => {
                if (out)
                  return;
                let pinned = null;
                let tmp = {
                  type: type.name,
                  text: "",
                  children: [],
                  end: 0,
                  errors: [],
                  fullText: "",
                  parent: null,
                  start: 0,
                  rest: txt
                };
                if (targetLex.fragment)
                  tmp.fragment = true;
                let tmpTxt = txt;
                let position = 0;
                let allOptional = phases.length > 0;
                let foundSomething = false;
                for (let i = 0; i < phases.length; i++) {
                  if (typeof phases[i] == "string") {
                    let localTarget = parseRuleName(phases[i]);
                    allOptional = allOptional && localTarget.isOptional;
                    let got;
                    let foundAtLeastOne = false;
                    do {
                      got = null;
                      if (targetLex.implicitWs) {
                        got = this.parse(tmpTxt, localTarget.name, recursion + 1);
                        if (!got) {
                          let WS;
                          do {
                            WS = this.parse(tmpTxt, WS_RULE, recursion + 1);
                            if (WS) {
                              tmp.text = tmp.text + WS.text;
                              tmp.end = tmp.text.length;
                              WS.parent = tmp;
                              tmp.children.push(WS);
                              tmpTxt = tmpTxt.substr(WS.text.length);
                              position += WS.text.length;
                            } else {
                              break;
                            }
                          } while (WS && WS.text.length);
                        }
                      }
                      got = got || this.parse(tmpTxt, localTarget.name, recursion + 1);
                      if (localTarget.lookupNegative) {
                        if (got)
                          return;
                        break;
                      }
                      if (localTarget.lookupPositive) {
                        if (!got)
                          return;
                      }
                      if (!got) {
                        if (localTarget.isOptional)
                          break;
                        if (localTarget.atLeastOne && foundAtLeastOne)
                          break;
                      }
                      if (got && targetLex.pinned == i + 1) {
                        pinned = got;
                        printable && console.log(new Array(recursion + 1).join("\u2502  ") + "\u2514\u2500 " + got.type + " PINNED");
                      }
                      if (!got)
                        got = this.parseRecovery(targetLex, tmpTxt, recursion + 1);
                      if (!got) {
                        if (pinned) {
                          out = tmp;
                          got = {
                            type: "SyntaxError",
                            text: tmpTxt,
                            children: [],
                            end: tmpTxt.length,
                            errors: [],
                            fullText: "",
                            parent: null,
                            start: 0,
                            rest: ""
                          };
                          if (tmpTxt.length) {
                            new TokenError_1.TokenError(`Unexpected end of input. Expecting ${localTarget.name} Got: ${tmpTxt}`, got);
                          } else {
                            new TokenError_1.TokenError(`Unexpected end of input. Missing ${localTarget.name}`, got);
                          }
                          printable && console.log(new Array(recursion + 1).join("\u2502  ") + "\u2514\u2500 " + got.type + " " + JSON.stringify(got.text));
                        } else {
                          return;
                        }
                      }
                      foundAtLeastOne = true;
                      foundSomething = true;
                      if (got.type == "%%EMPTY%%") {
                        break;
                      }
                      got.start += position;
                      got.end += position;
                      if (!localTarget.lookupPositive && got.type) {
                        if (got.fragment) {
                          got.children && got.children.forEach((x) => {
                            x.start += position;
                            x.end += position;
                            x.parent = tmp;
                            tmp.children.push(x);
                          });
                        } else {
                          got.parent = tmp;
                          tmp.children.push(got);
                        }
                      }
                      if (localTarget.lookup)
                        got.lookup = true;
                      printable && console.log(new Array(recursion + 1).join("\u2502  ") + "\u2514\u2500 " + got.type + " " + JSON.stringify(got.text));
                      if (!localTarget.lookup && !got.lookup) {
                        tmp.text = tmp.text + got.text;
                        tmp.end = tmp.text.length;
                        tmpTxt = tmpTxt.substr(got.text.length);
                        position += got.text.length;
                      }
                      tmp.rest = tmpTxt;
                    } while (got && localTarget.allowRepetition && tmpTxt.length && !got.lookup);
                  } else {
                    let got = readToken(tmpTxt, phases[i]);
                    if (!got) {
                      return;
                    }
                    printable && console.log(new Array(recursion + 1).join("\u2502  ") + "\u2514> " + JSON.stringify(got.text) + phases[i].source);
                    foundSomething = true;
                    got.start += position;
                    got.end += position;
                    tmp.text = tmp.text + got.text;
                    tmp.end = tmp.text.length;
                    tmpTxt = tmpTxt.substr(got.text.length);
                    position += got.text.length;
                    tmp.rest = tmpTxt;
                  }
                }
                if (foundSomething) {
                  out = tmp;
                  printable && console.log(new Array(recursion).join("\u2502  ") + "\u251C<\u2500\u2534< PUSHING " + out.type + " " + JSON.stringify(out.text));
                }
              });
            }
            if (out && targetLex.simplifyWhenOneChildren && out.children.length == 1) {
              out = out.children[0];
            }
          }
          if (!out) {
            printable && console.log(target + " NOT RESOLVED FROM " + txt);
          }
          return out;
        }
        parseRecovery(recoverableToken, tmpTxt, recursion) {
          if (recoverableToken.recover && tmpTxt.length) {
            let printable = this.debug;
            printable && console.log(new Array(recursion + 1).join("\u2502  ") + "Trying to recover until token " + recoverableToken.recover + " from " + JSON.stringify(tmpTxt.split("\n")[0] + tmpTxt.split("\n")[1]));
            let tmp = {
              type: "SyntaxError",
              text: "",
              children: [],
              end: 0,
              errors: [],
              fullText: "",
              parent: null,
              start: 0,
              rest: ""
            };
            let got;
            do {
              got = this.parse(tmpTxt, recoverableToken.recover, recursion + 1);
              if (got) {
                new TokenError_1.TokenError('Unexpected input: "' + tmp.text + `" Expecting: ${recoverableToken.name}`, tmp);
                break;
              } else {
                tmp.text = tmp.text + tmpTxt[0];
                tmp.end = tmp.text.length;
                tmpTxt = tmpTxt.substr(1);
              }
            } while (!got && tmpTxt.length > 0);
            if (tmp.text.length > 0 && got) {
              printable && console.log(new Array(recursion + 1).join("\u2502  ") + "Recovered text: " + JSON.stringify(tmp.text));
              return tmp;
            }
          }
          return null;
        }
      };
      exports.Parser = Parser2;
      exports.default = Parser2;
    }
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/SemanticHelpers.js
  var require_SemanticHelpers = __commonJS({
    "../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/SemanticHelpers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.findChildrenByType = void 0;
      function findChildrenByType(token, type) {
        return token.children ? token.children.filter((x) => x.type == type) : [];
      }
      exports.findChildrenByType = findChildrenByType;
    }
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Grammars/BNF.js
  var require_BNF = __commonJS({
    "../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Grammars/BNF.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var SemanticHelpers_1 = require_SemanticHelpers();
      var Parser_1 = require_Parser();
      var BNF;
      (function(BNF2) {
        BNF2.RULES = [
          {
            name: "syntax",
            bnf: [["RULE_EOL*", "rule+"]]
          },
          {
            name: "rule",
            bnf: [
              [
                '" "*',
                '"<"',
                "rule-name",
                '">"',
                '" "*',
                '"::="',
                "firstExpression",
                "otherExpression*",
                '" "*',
                "RULE_EOL+",
                '" "*'
              ]
            ]
          },
          {
            name: "firstExpression",
            bnf: [['" "*', "list"]]
          },
          {
            name: "otherExpression",
            bnf: [['" "*', '"|"', '" "*', "list"]]
          },
          {
            name: "RULE_EOL",
            bnf: [['"\\r"'], ['"\\n"']]
          },
          {
            name: "list",
            bnf: [["term", '" "*', "list"], ["term"]]
          },
          {
            name: "term",
            bnf: [["literal"], ['"<"', "rule-name", '">"']]
          },
          {
            name: "literal",
            bnf: [[`'"'`, "RULE_CHARACTER1*", `'"'`], [`"'"`, "RULE_CHARACTER2*", `"'"`]]
          },
          {
            name: "RULE_CHARACTER",
            bnf: [['" "'], ["RULE_LETTER"], ["RULE_DIGIT"], ["RULE_SYMBOL"]]
          },
          {
            name: "RULE_LETTER",
            bnf: [
              ['"A"'],
              ['"B"'],
              ['"C"'],
              ['"D"'],
              ['"E"'],
              ['"F"'],
              ['"G"'],
              ['"H"'],
              ['"I"'],
              ['"J"'],
              ['"K"'],
              ['"L"'],
              ['"M"'],
              ['"N"'],
              ['"O"'],
              ['"P"'],
              ['"Q"'],
              ['"R"'],
              ['"S"'],
              ['"T"'],
              ['"U"'],
              ['"V"'],
              ['"W"'],
              ['"X"'],
              ['"Y"'],
              ['"Z"'],
              ['"a"'],
              ['"b"'],
              ['"c"'],
              ['"d"'],
              ['"e"'],
              ['"f"'],
              ['"g"'],
              ['"h"'],
              ['"i"'],
              ['"j"'],
              ['"k"'],
              ['"l"'],
              ['"m"'],
              ['"n"'],
              ['"o"'],
              ['"p"'],
              ['"q"'],
              ['"r"'],
              ['"s"'],
              ['"t"'],
              ['"u"'],
              ['"v"'],
              ['"w"'],
              ['"x"'],
              ['"y"'],
              ['"z"']
            ]
          },
          {
            name: "RULE_DIGIT",
            bnf: [['"0"'], ['"1"'], ['"2"'], ['"3"'], ['"4"'], ['"5"'], ['"6"'], ['"7"'], ['"8"'], ['"9"']]
          },
          {
            name: "RULE_SYMBOL",
            bnf: [
              ['"-"'],
              ['"_"'],
              ['"!"'],
              ['"#"'],
              ['"$"'],
              ['"%"'],
              ['"&"'],
              ['"("'],
              ['")"'],
              ['"*"'],
              ['"+"'],
              ['","'],
              ['"-"'],
              ['"."'],
              ['"/"'],
              ['":"'],
              ['";"'],
              ['"<"'],
              ['"="'],
              ['">"'],
              ['"?"'],
              ['"@"'],
              ['"["'],
              ['"\\"'],
              ['"]"'],
              ['"^"'],
              ['"_"'],
              ['"`"'],
              ['"{"'],
              ['"|"'],
              ['"}"'],
              ['"~"']
            ]
          },
          {
            name: "RULE_CHARACTER1",
            bnf: [["RULE_CHARACTER"], [`"'"`]]
          },
          {
            name: "RULE_CHARACTER2",
            bnf: [["RULE_CHARACTER"], [`'"'`]]
          },
          {
            name: "rule-name",
            bnf: [["RULE_LETTER", "RULE_CHAR*"]]
          },
          {
            name: "RULE_CHAR",
            bnf: [["RULE_LETTER"], ["RULE_DIGIT"], ['"_"'], ['"-"']]
          }
        ];
        BNF2.defaultParser = new Parser_1.Parser(BNF2.RULES, { debug: false });
        function getAllTerms(expr) {
          let terms = SemanticHelpers_1.findChildrenByType(expr, "term").map((term) => {
            return SemanticHelpers_1.findChildrenByType(term, "literal").concat(SemanticHelpers_1.findChildrenByType(term, "rule-name"))[0].text;
          });
          SemanticHelpers_1.findChildrenByType(expr, "list").forEach((expr2) => {
            terms = terms.concat(getAllTerms(expr2));
          });
          return terms;
        }
        function getRules(source, parser2 = BNF2.defaultParser) {
          let ast = parser2.getAST(source);
          if (!ast)
            throw new Error("Could not parse " + source);
          if (ast.errors && ast.errors.length) {
            throw ast.errors[0];
          }
          let rules = SemanticHelpers_1.findChildrenByType(ast, "rule");
          let ret = rules.map((rule) => {
            let name = SemanticHelpers_1.findChildrenByType(rule, "rule-name")[0].text;
            let expressions = SemanticHelpers_1.findChildrenByType(rule, "firstExpression").concat(SemanticHelpers_1.findChildrenByType(rule, "otherExpression"));
            let bnf = [];
            expressions.forEach((expr) => {
              bnf.push(getAllTerms(expr));
            });
            return {
              name,
              bnf
            };
          });
          if (!ret.some((x) => x.name == "EOL")) {
            ret.push({
              name: "EOL",
              bnf: [['"\\r\\n"', '"\\r"', '"\\n"']]
            });
          }
          return ret;
        }
        BNF2.getRules = getRules;
        function Transform(source, subParser = BNF2.defaultParser) {
          return getRules(source.join(""), subParser);
        }
        BNF2.Transform = Transform;
        class Parser2 extends Parser_1.Parser {
          constructor(source, options) {
            const subParser = options && options.debugRulesParser === true ? new Parser_1.Parser(BNF2.RULES, { debug: true }) : BNF2.defaultParser;
            super(getRules(source, subParser), options);
            this.source = source;
          }
          emitSource() {
            return this.source;
          }
        }
        BNF2.Parser = Parser2;
      })(BNF || (BNF = {}));
      exports.default = BNF;
    }
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Grammars/W3CEBNF.js
  var require_W3CEBNF = __commonJS({
    "../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Grammars/W3CEBNF.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var Parser_1 = require_Parser();
      var BNF;
      (function(BNF2) {
        BNF2.RULES = [
          {
            name: "Grammar",
            bnf: [["RULE_S*", "%Atomic*", "EOF"]]
          },
          {
            name: "%Atomic",
            bnf: [["Production", "RULE_S*"]],
            fragment: true
          },
          {
            name: "Production",
            bnf: [["NCName", "RULE_S*", '"::="', "RULE_WHITESPACE*", "Choice", "RULE_WHITESPACE*", "RULE_EOL+", "RULE_S*"]]
          },
          {
            name: "NCName",
            bnf: [[/[a-zA-Z][a-zA-Z_0-9]*/]]
          },
          {
            name: "Choice",
            bnf: [["SequenceOrDifference", "%_Choice_1*"]],
            fragment: true
          },
          {
            name: "%_Choice_1",
            bnf: [["RULE_WHITESPACE*", '"|"', "RULE_WHITESPACE*", "SequenceOrDifference"]],
            fragment: true
          },
          {
            name: "SequenceOrDifference",
            bnf: [["Item", "RULE_WHITESPACE*", "%_Item_1?"]]
          },
          {
            name: "%_Item_1",
            bnf: [["Minus", "Item"], ["Item*"]],
            fragment: true
          },
          {
            name: "Minus",
            bnf: [['"-"']]
          },
          {
            name: "Item",
            bnf: [["RULE_WHITESPACE*", "%Primary", "PrimaryDecoration?"]],
            fragment: true
          },
          {
            name: "PrimaryDecoration",
            bnf: [['"?"'], ['"*"'], ['"+"']]
          },
          {
            name: "DecorationName",
            bnf: [['"ebnf://"', /[^\x5D#]+/]]
          },
          {
            name: "%Primary",
            bnf: [["NCName"], ["StringLiteral"], ["CharCode"], ["CharClass"], ["SubItem"]],
            fragment: true
          },
          {
            name: "SubItem",
            bnf: [['"("', "RULE_WHITESPACE*", "Choice", "RULE_WHITESPACE*", '")"']]
          },
          {
            name: "StringLiteral",
            bnf: [[`'"'`, /[^"]*/, `'"'`], [`"'"`, /[^']*/, `"'"`]],
            pinned: 1
          },
          {
            name: "CharCode",
            bnf: [['"#x"', /[0-9a-zA-Z]+/]]
          },
          {
            name: "CharClass",
            bnf: [["'['", "'^'?", "%RULE_CharClass_1+", '"]"']]
          },
          {
            name: "%RULE_CharClass_1",
            bnf: [["CharCodeRange"], ["CharRange"], ["CharCode"], ["RULE_Char"]],
            fragment: true
          },
          {
            name: "RULE_Char",
            bnf: [[/\x09/], [/\x0A/], [/\x0D/], [/[\x20-\x5c]/], [/[\x5e-\uD7FF]/], [/[\uE000-\uFFFD]/]]
          },
          {
            name: "CharRange",
            bnf: [["RULE_Char", '"-"', "RULE_Char"]]
          },
          {
            name: "CharCodeRange",
            bnf: [["CharCode", '"-"', "CharCode"]]
          },
          {
            name: "RULE_WHITESPACE",
            bnf: [["%RULE_WHITESPACE_CHAR*"], ["Comment", "RULE_WHITESPACE*"]]
          },
          {
            name: "RULE_S",
            bnf: [["RULE_WHITESPACE", "RULE_S*"], ["RULE_EOL", "RULE_S*"]]
          },
          {
            name: "%RULE_WHITESPACE_CHAR",
            bnf: [[/\x09/], [/\x20/]],
            fragment: true
          },
          {
            name: "Comment",
            bnf: [['"/*"', "%RULE_Comment_Body*", '"*/"']]
          },
          {
            name: "%RULE_Comment_Body",
            bnf: [['!"*/"', /[^*]/]],
            fragment: true
          },
          {
            name: "RULE_EOL",
            bnf: [[/\x0D/, /\x0A/], [/\x0A/], [/\x0D/]]
          },
          {
            name: "Link",
            bnf: [["'['", "Url", "']'"]]
          },
          {
            name: "Url",
            bnf: [[/[^\x5D:/?#]/, '"://"', /[^\x5D#]+/, "%Url1?"]]
          },
          {
            name: "%Url1",
            bnf: [['"#"', "NCName"]],
            fragment: true
          }
        ];
        BNF2.defaultParser = new Parser_1.Parser(BNF2.RULES, { debug: false });
        const preDecorationRE = /^(!|&)/;
        const decorationRE = /(\?|\+|\*)$/;
        const subExpressionRE = /^%/;
        function getBNFRule(name, parser2) {
          if (typeof name == "string") {
            if (preDecorationRE.test(name))
              return "";
            let subexpression = subExpressionRE.test(name);
            if (subexpression) {
              let decoration = decorationRE.exec(name);
              let decorationText = decoration ? decoration[0] + " " : "";
              let lonely = isLonelyRule(name, parser2);
              if (lonely)
                return getBNFBody(name, parser2) + decorationText;
              return "(" + getBNFBody(name, parser2) + ")" + decorationText;
            }
            return name;
          } else {
            return name.source.replace(/\\(?:x|u)([a-zA-Z0-9]+)/g, "#x$1").replace(/\[\\(?:x|u)([a-zA-Z0-9]+)-\\(?:x|u)([a-zA-Z0-9]+)\]/g, "[#x$1-#x$2]");
          }
        }
        function isLonelyRule(name, parser2) {
          let rule = Parser_1.findRuleByName(name, parser2);
          return rule && rule.bnf.length == 1 && rule.bnf[0].length == 1 && (rule.bnf[0][0] instanceof RegExp || rule.bnf[0][0][0] == '"' || rule.bnf[0][0][0] == "'");
        }
        function getBNFChoice(rules, parser2) {
          return rules.map((x) => getBNFRule(x, parser2)).join(" ");
        }
        function getBNFBody(name, parser2) {
          let rule = Parser_1.findRuleByName(name, parser2);
          if (rule)
            return rule.bnf.map((x) => getBNFChoice(x, parser2)).join(" | ");
          return "RULE_NOT_FOUND {" + name + "}";
        }
        function emit(parser2) {
          let acumulator = [];
          parser2.grammarRules.forEach((l) => {
            if (!/^%/.test(l.name)) {
              let recover = l.recover ? " /* { recoverUntil=" + l.recover + " } */" : "";
              acumulator.push(l.name + " ::= " + getBNFBody(l.name, parser2) + recover);
            }
          });
          return acumulator.join("\n");
        }
        BNF2.emit = emit;
        let subitems = 0;
        function restar(total, resta) {
          console.log("reberia restar " + resta + " a " + total);
          throw new Error("Difference not supported yet");
        }
        function convertRegex(txt) {
          return new RegExp(txt.replace(/#x([a-zA-Z0-9]{4})/g, "\\u$1").replace(/#x([a-zA-Z0-9]{3})/g, "\\u0$1").replace(/#x([a-zA-Z0-9]{2})/g, "\\x$1").replace(/#x([a-zA-Z0-9]{1})/g, "\\x0$1"));
        }
        function getSubItems(tmpRules, seq, parentName) {
          let anterior = null;
          let bnfSeq = [];
          seq.children.forEach((x, i) => {
            if (x.type == "Minus") {
              restar(anterior, x);
            } else {
            }
            let decoration = seq.children[i + 1];
            decoration = decoration && decoration.type == "PrimaryDecoration" && decoration.text || "";
            let preDecoration = "";
            switch (x.type) {
              case "SubItem":
                let name = "%" + (parentName + subitems++);
                createRule(tmpRules, x, name);
                bnfSeq.push(preDecoration + name + decoration);
                break;
              case "NCName":
              case "StringLiteral":
                bnfSeq.push(preDecoration + x.text + decoration);
                break;
              case "CharCode":
              case "CharClass":
                if (decoration || preDecoration) {
                  let newRule = {
                    name: "%" + (parentName + subitems++),
                    bnf: [[convertRegex(x.text)]]
                  };
                  tmpRules.push(newRule);
                  bnfSeq.push(preDecoration + newRule.name + decoration);
                } else {
                  bnfSeq.push(convertRegex(x.text));
                }
                break;
              case "PrimaryDecoration":
                break;
              default:
                throw new Error(" HOW SHOULD I PARSE THIS? " + x.type + " -> " + JSON.stringify(x.text));
            }
            anterior = x;
          });
          return bnfSeq;
        }
        function createRule(tmpRules, token, name) {
          let bnf = token.children.filter((x) => x.type == "SequenceOrDifference").map((s) => getSubItems(tmpRules, s, name));
          let rule = {
            name,
            bnf
          };
          let recover = null;
          bnf.forEach((x) => {
            recover = recover || x["recover"];
            delete x["recover"];
          });
          if (name.indexOf("%") == 0)
            rule.fragment = true;
          if (recover)
            rule.recover = recover;
          tmpRules.push(rule);
        }
        function getRules(source, parser2 = BNF2.defaultParser) {
          let ast = parser2.getAST(source);
          if (!ast)
            throw new Error("Could not parse " + source);
          if (ast.errors && ast.errors.length) {
            throw ast.errors[0];
          }
          let tmpRules = [];
          ast.children.filter((x) => x.type == "Production").map((x) => {
            let name = x.children.filter((x2) => x2.type == "NCName")[0].text;
            createRule(tmpRules, x, name);
          });
          return tmpRules;
        }
        BNF2.getRules = getRules;
        function Transform(source, subParser = BNF2.defaultParser) {
          return getRules(source.join(""), subParser);
        }
        BNF2.Transform = Transform;
        class Parser2 extends Parser_1.Parser {
          constructor(source, options) {
            const subParser = options && options.debugRulesParser === true ? new Parser_1.Parser(BNF2.RULES, { debug: true }) : BNF2.defaultParser;
            super(getRules(source, subParser), options);
          }
          emitSource() {
            return emit(this);
          }
        }
        BNF2.Parser = Parser2;
      })(BNF || (BNF = {}));
      exports.default = BNF;
    }
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Grammars/Custom.js
  var require_Custom = __commonJS({
    "../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Grammars/Custom.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var TokenError_1 = require_TokenError();
      var Parser_1 = require_Parser();
      var BNF;
      (function(BNF2) {
        BNF2.RULES = [
          {
            name: "Grammar",
            bnf: [["RULE_S*", "Attributes?", "RULE_S*", "%Atomic*", "EOF"]]
          },
          {
            name: "%Atomic",
            bnf: [["Production", "RULE_S*"]],
            fragment: true
          },
          {
            name: "Production",
            bnf: [
              [
                "NCName",
                "RULE_S*",
                '"::="',
                "RULE_WHITESPACE*",
                "%Choice",
                "RULE_WHITESPACE*",
                "Attributes?",
                "RULE_EOL+",
                "RULE_S*"
              ]
            ]
          },
          {
            name: "NCName",
            bnf: [[/[a-zA-Z][a-zA-Z_0-9]*/]]
          },
          {
            name: "Attributes",
            bnf: [['"{"', "Attribute", "%Attributes*", "RULE_S*", '"}"']]
          },
          {
            name: "%Attributes",
            bnf: [["RULE_S*", '","', "Attribute"]],
            fragment: true
          },
          {
            name: "Attribute",
            bnf: [["RULE_S*", "NCName", "RULE_WHITESPACE*", '"="', "RULE_WHITESPACE*", "AttributeValue"]]
          },
          {
            name: "AttributeValue",
            bnf: [["NCName"], [/[1-9][0-9]*/]]
          },
          {
            name: "%Choice",
            bnf: [["SequenceOrDifference", "%_Choice_1*"]],
            fragment: true
          },
          {
            name: "%_Choice_1",
            bnf: [["RULE_S*", '"|"', "RULE_S*", "SequenceOrDifference"]],
            fragment: true
          },
          {
            name: "SequenceOrDifference",
            bnf: [["%Item", "RULE_WHITESPACE*", "%_Item_1?"]]
          },
          {
            name: "%_Item_1",
            bnf: [["Minus", "%Item"], ["%Item*"]],
            fragment: true
          },
          {
            name: "Minus",
            bnf: [['"-"']]
          },
          {
            name: "%Item",
            bnf: [["RULE_WHITESPACE*", "PrimaryPreDecoration?", "%Primary", "PrimaryDecoration?"]],
            fragment: true
          },
          {
            name: "PrimaryDecoration",
            bnf: [['"?"'], ['"*"'], ['"+"']]
          },
          {
            name: "PrimaryPreDecoration",
            bnf: [['"&"'], ['"!"'], ['"~"']]
          },
          {
            name: "%Primary",
            bnf: [["NCName"], ["StringLiteral"], ["CharCode"], ["CharClass"], ["SubItem"]],
            fragment: true
          },
          {
            name: "SubItem",
            bnf: [['"("', "RULE_S*", "%Choice", "RULE_S*", '")"']]
          },
          {
            name: "StringLiteral",
            bnf: [[`'"'`, /[^"]*/, `'"'`], [`"'"`, /[^']*/, `"'"`]]
          },
          {
            name: "CharCode",
            bnf: [['"#x"', /[0-9a-zA-Z]+/]]
          },
          {
            name: "CharClass",
            bnf: [["'['", "'^'?", "%RULE_CharClass_1+", '"]"']]
          },
          {
            name: "%RULE_CharClass_1",
            bnf: [["CharCodeRange"], ["CharRange"], ["CharCode"], ["RULE_Char"]],
            fragment: true
          },
          {
            name: "RULE_Char",
            bnf: [[/\x09/], [/\x0A/], [/\x0D/], [/[\x20-\x5c]/], [/[\x5e-\uD7FF]/], [/[\uE000-\uFFFD]/]]
          },
          {
            name: "CharRange",
            bnf: [["RULE_Char", '"-"', "RULE_Char"]]
          },
          {
            name: "CharCodeRange",
            bnf: [["CharCode", '"-"', "CharCode"]]
          },
          {
            name: "RULE_WHITESPACE",
            bnf: [["%RULE_WHITESPACE_CHAR*"], ["Comment", "RULE_WHITESPACE*"]]
          },
          {
            name: "RULE_S",
            bnf: [["RULE_WHITESPACE", "RULE_S*"], ["RULE_EOL", "RULE_S*"]]
          },
          {
            name: "%RULE_WHITESPACE_CHAR",
            bnf: [[/\x09/], [/\x20/]],
            fragment: true
          },
          {
            name: "Comment",
            bnf: [['"/*"', "%RULE_Comment_Body*", '"*/"']]
          },
          {
            name: "%RULE_Comment_Body",
            bnf: [[/[^*]/], ['"*"+', /[^/]*/]],
            fragment: true
          },
          {
            name: "RULE_EOL",
            bnf: [[/\x0D/, /\x0A/], [/\x0A/], [/\x0D/]]
          },
          {
            name: "Link",
            bnf: [["'['", "Url", "']'"]]
          },
          {
            name: "Url",
            bnf: [[/[^\x5D:/?#]/, '"://"', /[^\x5D#]+/, "%Url1?"]]
          },
          {
            name: "%Url1",
            bnf: [['"#"', "NCName"]],
            fragment: true
          }
        ];
        BNF2.defaultParser = new Parser_1.Parser(BNF2.RULES, { debug: false });
        const preDecorationRE = /^(!|&)/;
        const decorationRE = /(\?|\+|\*)$/;
        const subExpressionRE = /^%/;
        function getBNFRule(name, parser2) {
          if (typeof name == "string") {
            let decoration = decorationRE.exec(name);
            let preDecoration = preDecorationRE.exec(name);
            let preDecorationText = preDecoration ? preDecoration[0] : "";
            let decorationText = decoration ? decoration[0] + " " : "";
            let subexpression = subExpressionRE.test(name);
            if (subexpression) {
              let lonely = isLonelyRule(name, parser2);
              if (lonely)
                return preDecorationText + getBNFBody(name, parser2) + decorationText;
              return preDecorationText + "(" + getBNFBody(name, parser2) + ")" + decorationText;
            }
            return name.replace(preDecorationRE, preDecorationText);
          } else {
            return name.source.replace(/\\(?:x|u)([a-zA-Z0-9]+)/g, "#x$1").replace(/\[\\(?:x|u)([a-zA-Z0-9]+)-\\(?:x|u)([a-zA-Z0-9]+)\]/g, "[#x$1-#x$2]");
          }
        }
        function isLonelyRule(name, parser2) {
          let rule = Parser_1.findRuleByName(name, parser2);
          return rule && rule.bnf.length == 1 && rule.bnf[0].length == 1 && (rule.bnf[0][0] instanceof RegExp || rule.bnf[0][0][0] == '"' || rule.bnf[0][0][0] == "'");
        }
        function getBNFChoice(rules, parser2) {
          return rules.map((x) => getBNFRule(x, parser2)).join(" ");
        }
        function getBNFBody(name, parser2) {
          let rule = Parser_1.findRuleByName(name, parser2);
          if (rule)
            return rule.bnf.map((x) => getBNFChoice(x, parser2)).join(" | ");
          return "RULE_NOT_FOUND {" + name + "}";
        }
        function emit(parser2) {
          let acumulator = [];
          parser2.grammarRules.forEach((l) => {
            if (!/^%/.test(l.name)) {
              let recover = l.recover ? " { recoverUntil=" + l.recover + " }" : "";
              acumulator.push(l.name + " ::= " + getBNFBody(l.name, parser2) + recover);
            }
          });
          return acumulator.join("\n");
        }
        BNF2.emit = emit;
        let subitems = 0;
        function restar(total, resta) {
          console.log("reberia restar " + resta + " a " + total);
          throw new Error("Difference not supported yet");
        }
        function convertRegex(txt) {
          return new RegExp(txt.replace(/#x([a-zA-Z0-9]{4})/g, "\\u$1").replace(/#x([a-zA-Z0-9]{3})/g, "\\u0$1").replace(/#x([a-zA-Z0-9]{2})/g, "\\x$1").replace(/#x([a-zA-Z0-9]{1})/g, "\\x0$1"));
        }
        function getSubItems(tmpRules, seq, parentName, parentAttributes) {
          let anterior = null;
          let bnfSeq = [];
          seq.children.forEach((x, i) => {
            if (x.type == "Minus") {
              restar(anterior, x);
            } else {
            }
            let decoration = seq.children[i + 1];
            decoration = decoration && decoration.type == "PrimaryDecoration" && decoration.text || "";
            let preDecoration = "";
            if (anterior && anterior.type == "PrimaryPreDecoration") {
              preDecoration = anterior.text;
            }
            let pinned = preDecoration == "~" ? 1 : void 0;
            if (pinned) {
              preDecoration = "";
            }
            switch (x.type) {
              case "SubItem":
                let name = "%" + (parentName + subitems++);
                createRule(tmpRules, x, name, parentAttributes);
                bnfSeq.push(preDecoration + name + decoration);
                break;
              case "NCName":
                bnfSeq.push(preDecoration + x.text + decoration);
                break;
              case "StringLiteral":
                if (decoration || preDecoration || !/^['"/()a-zA-Z0-9&_.:=,+*\-\^\\]+$/.test(x.text)) {
                  bnfSeq.push(preDecoration + x.text + decoration);
                } else {
                  for (const c of x.text.slice(1, -1)) {
                    if (parentAttributes && parentAttributes["ignoreCase"] == "true" && /[a-zA-Z]/.test(c)) {
                      bnfSeq.push(new RegExp("[" + c.toUpperCase() + c.toLowerCase() + "]"));
                    } else {
                      bnfSeq.push(new RegExp(Parser_1.escapeRegExp(c)));
                    }
                  }
                }
                break;
              case "CharCode":
              case "CharClass":
                if (decoration || preDecoration) {
                  let newRule = {
                    name: "%" + (parentName + subitems++),
                    bnf: [[convertRegex(x.text)]],
                    pinned
                  };
                  tmpRules.push(newRule);
                  bnfSeq.push(preDecoration + newRule.name + decoration);
                } else {
                  bnfSeq.push(convertRegex(x.text));
                }
                break;
              case "PrimaryPreDecoration":
              case "PrimaryDecoration":
                break;
              default:
                throw new Error(" HOW SHOULD I PARSE THIS? " + x.type + " -> " + JSON.stringify(x.text));
            }
            anterior = x;
          });
          return bnfSeq;
        }
        function createRule(tmpRules, token, name, parentAttributes = void 0) {
          let attrNode = token.children.filter((x) => x.type == "Attributes")[0];
          let attributes = {};
          if (attrNode) {
            attrNode.children.forEach((x) => {
              let name2 = x.children.filter((x2) => x2.type == "NCName")[0].text;
              if (name2 in attributes) {
                throw new TokenError_1.TokenError("Duplicated attribute " + name2, x);
              } else {
                attributes[name2] = x.children.filter((x2) => x2.type == "AttributeValue")[0].text;
              }
            });
          }
          let bnf = token.children.filter((x) => x.type == "SequenceOrDifference").map((s) => getSubItems(tmpRules, s, name, parentAttributes ? parentAttributes : attributes));
          let rule = {
            name,
            bnf
          };
          if (name.indexOf("%") == 0)
            rule.fragment = true;
          if (attributes["recoverUntil"]) {
            rule.recover = attributes["recoverUntil"];
            if (rule.bnf.length > 1)
              throw new TokenError_1.TokenError("only one-option productions are suitable for error recovering", token);
          }
          if ("pin" in attributes) {
            let num = parseInt(attributes["pin"]);
            if (!isNaN(num)) {
              rule.pinned = num;
            }
            if (rule.bnf.length > 1)
              throw new TokenError_1.TokenError("only one-option productions are suitable for pinning", token);
          }
          if ("ws" in attributes) {
            rule.implicitWs = attributes["ws"] != "explicit";
          } else {
            rule.implicitWs = null;
          }
          rule.fragment = rule.fragment || attributes["fragment"] == "true";
          rule.simplifyWhenOneChildren = attributes["simplifyWhenOneChildren"] == "true";
          tmpRules.push(rule);
        }
        function getRules(source, parser2 = BNF2.defaultParser) {
          let ast = parser2.getAST(source);
          if (!ast)
            throw new Error("Could not parse " + source);
          if (ast.errors && ast.errors.length) {
            throw ast.errors[0];
          }
          let implicitWs = null;
          let attrNode = ast.children.filter((x) => x.type == "Attributes")[0];
          let attributes = {};
          if (attrNode) {
            attrNode.children.forEach((x) => {
              let name = x.children.filter((x2) => x2.type == "NCName")[0].text;
              if (name in attributes) {
                throw new TokenError_1.TokenError("Duplicated attribute " + name, x);
              } else {
                attributes[name] = x.children.filter((x2) => x2.type == "AttributeValue")[0].text;
              }
            });
          }
          implicitWs = attributes["ws"] == "implicit";
          let tmpRules = [];
          ast.children.filter((x) => x.type == "Production").map((x) => {
            let name = x.children.filter((x2) => x2.type == "NCName")[0].text;
            createRule(tmpRules, x, name);
          });
          tmpRules.forEach((rule) => {
            if (rule.implicitWs === null)
              rule.implicitWs = implicitWs;
          });
          return tmpRules;
        }
        BNF2.getRules = getRules;
        function Transform(source, subParser = BNF2.defaultParser) {
          return getRules(source.join(""), subParser);
        }
        BNF2.Transform = Transform;
        class Parser2 extends Parser_1.Parser {
          constructor(source, options) {
            const subParser = options && options.debugRulesParser === true ? new Parser_1.Parser(BNF2.RULES, { debug: true }) : BNF2.defaultParser;
            super(getRules(source, subParser), options);
          }
          emitSource() {
            return emit(this);
          }
        }
        BNF2.Parser = Parser2;
      })(BNF || (BNF = {}));
      exports.default = BNF;
    }
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Grammars/index.js
  var require_Grammars = __commonJS({
    "../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Grammars/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var BNF_1 = require_BNF();
      Object.defineProperty(exports, "BNF", { enumerable: true, get: function() {
        return BNF_1.default;
      } });
      var W3CEBNF_1 = require_W3CEBNF();
      Object.defineProperty(exports, "W3C", { enumerable: true, get: function() {
        return W3CEBNF_1.default;
      } });
      var Custom_1 = require_Custom();
      Object.defineProperty(exports, "Custom", { enumerable: true, get: function() {
        return Custom_1.default;
      } });
    }
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/index.js
  var require_dist = __commonJS({
    "../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var Parser_1 = require_Parser();
      Object.defineProperty(exports, "Parser", { enumerable: true, get: function() {
        return Parser_1.Parser;
      } });
      var TokenError_1 = require_TokenError();
      Object.defineProperty(exports, "TokenError", { enumerable: true, get: function() {
        return TokenError_1.TokenError;
      } });
      exports.Grammars = require_Grammars();
    }
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/timm@1.7.1/node_modules/timm/lib/timm.js
  var require_timm = __commonJS({
    "../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/timm@1.7.1/node_modules/timm/lib/timm.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.clone = clone2;
      exports.addLast = addLast2;
      exports.addFirst = addFirst;
      exports.removeLast = removeLast;
      exports.removeFirst = removeFirst;
      exports.insert = insert;
      exports.removeAt = removeAt2;
      exports.replaceAt = replaceAt;
      exports.getIn = getIn;
      exports.set = set2;
      exports.setIn = setIn8;
      exports.update = update;
      exports.updateIn = updateIn;
      exports.merge = merge;
      exports.mergeDeep = mergeDeep;
      exports.mergeIn = mergeIn;
      exports.omit = omit4;
      exports.addDefaults = addDefaults;
      exports.default = void 0;
      var INVALID_ARGS = "INVALID_ARGS";
      var IS_DEV = false;
      function throwStr(msg) {
        throw new Error(msg);
      }
      function getKeysAndSymbols(obj) {
        const keys = Object.keys(obj);
        if (Object.getOwnPropertySymbols) {
          return keys.concat(Object.getOwnPropertySymbols(obj));
        }
        return keys;
      }
      var hasOwnProperty = {}.hasOwnProperty;
      function clone2(obj0) {
        if (Array.isArray(obj0))
          return obj0.slice();
        const obj = obj0;
        const keys = getKeysAndSymbols(obj);
        const out = {};
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          out[key] = obj[key];
        }
        return out;
      }
      function isObject(o) {
        return o != null && typeof o === "object";
      }
      function addLast2(array, val) {
        if (Array.isArray(val))
          return array.concat(val);
        return array.concat([val]);
      }
      function addFirst(array, val) {
        if (Array.isArray(val))
          return val.concat(array);
        return [val].concat(array);
      }
      function removeLast(array) {
        if (!array.length)
          return array;
        return array.slice(0, array.length - 1);
      }
      function removeFirst(array) {
        if (!array.length)
          return array;
        return array.slice(1);
      }
      function insert(array, idx, val) {
        return array.slice(0, idx).concat(Array.isArray(val) ? val : [val]).concat(array.slice(idx));
      }
      function removeAt2(array, idx) {
        if (idx >= array.length || idx < 0)
          return array;
        return array.slice(0, idx).concat(array.slice(idx + 1));
      }
      function replaceAt(array, idx, newItem) {
        if (array[idx] === newItem)
          return array;
        const len = array.length;
        const result = Array(len);
        for (let i = 0; i < len; i++) {
          result[i] = array[i];
        }
        result[idx] = newItem;
        return result;
      }
      function getIn(obj, path2) {
        if (!Array.isArray(path2)) {
          throwStr(IS_DEV ? "A path array should be provided when calling getIn()" : INVALID_ARGS);
        }
        if (obj == null)
          return void 0;
        let ptr = obj;
        for (let i = 0; i < path2.length; i++) {
          const key = path2[i];
          ptr = ptr != null ? ptr[key] : void 0;
          if (ptr === void 0)
            return ptr;
        }
        return ptr;
      }
      function set2(obj0, key, val) {
        let obj = obj0;
        if (obj == null)
          obj = typeof key === "number" ? [] : {};
        if (obj[key] === val)
          return obj;
        const obj2 = clone2(obj);
        obj2[key] = val;
        return obj2;
      }
      function setIn8(obj, path2, val) {
        if (!path2.length)
          return val;
        return doSetIn(obj, path2, val, 0);
      }
      function doSetIn(obj, path2, val, idx) {
        let newValue;
        const key = path2[idx];
        if (idx === path2.length - 1) {
          newValue = val;
        } else {
          const nestedObj = isObject(obj) && isObject(obj[key]) ? obj[key] : typeof path2[idx + 1] === "number" ? [] : {};
          newValue = doSetIn(nestedObj, path2, val, idx + 1);
        }
        return set2(obj, key, newValue);
      }
      function update(obj, key, fnUpdate) {
        const prevVal = obj == null ? void 0 : obj[key];
        const nextVal = fnUpdate(prevVal);
        return set2(obj, key, nextVal);
      }
      function updateIn(obj, path2, fnUpdate) {
        const prevVal = getIn(obj, path2);
        const nextVal = fnUpdate(prevVal);
        return setIn8(obj, path2, nextVal);
      }
      function merge(a, b, c, d, e, f, ...rest) {
        return rest.length ? doMerge.call(null, false, false, a, b, c, d, e, f, ...rest) : doMerge(false, false, a, b, c, d, e, f);
      }
      function mergeDeep(a, b, c, d, e, f, ...rest) {
        return rest.length ? doMerge.call(null, false, true, a, b, c, d, e, f, ...rest) : doMerge(false, true, a, b, c, d, e, f);
      }
      function mergeIn(a, path2, b, c, d, e, f, ...rest) {
        let prevVal = getIn(a, path2);
        if (prevVal == null)
          prevVal = {};
        let nextVal;
        if (rest.length) {
          nextVal = doMerge.call(null, false, false, prevVal, b, c, d, e, f, ...rest);
        } else {
          nextVal = doMerge(false, false, prevVal, b, c, d, e, f);
        }
        return setIn8(a, path2, nextVal);
      }
      function omit4(obj, attrs) {
        const omitList = Array.isArray(attrs) ? attrs : [attrs];
        let fDoSomething = false;
        for (let i = 0; i < omitList.length; i++) {
          if (hasOwnProperty.call(obj, omitList[i])) {
            fDoSomething = true;
            break;
          }
        }
        if (!fDoSomething)
          return obj;
        const out = {};
        const keys = getKeysAndSymbols(obj);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          if (omitList.indexOf(key) >= 0)
            continue;
          out[key] = obj[key];
        }
        return out;
      }
      function addDefaults(a, b, c, d, e, f, ...rest) {
        return rest.length ? doMerge.call(null, true, false, a, b, c, d, e, f, ...rest) : doMerge(true, false, a, b, c, d, e, f);
      }
      function doMerge(fAddDefaults, fDeep, first, ...rest) {
        let out = first;
        if (!(out != null)) {
          throwStr(IS_DEV ? "At least one object should be provided to merge()" : INVALID_ARGS);
        }
        let fChanged = false;
        for (let idx = 0; idx < rest.length; idx++) {
          const obj = rest[idx];
          if (obj == null)
            continue;
          const keys = getKeysAndSymbols(obj);
          if (!keys.length)
            continue;
          for (let j = 0; j <= keys.length; j++) {
            const key = keys[j];
            if (fAddDefaults && out[key] !== void 0)
              continue;
            let nextVal = obj[key];
            if (fDeep && isObject(out[key]) && isObject(nextVal)) {
              nextVal = doMerge(fAddDefaults, fDeep, out[key], nextVal);
            }
            if (nextVal === void 0 || nextVal === out[key])
              continue;
            if (!fChanged) {
              fChanged = true;
              out = clone2(out);
            }
            out[key] = nextVal;
          }
        }
        return out;
      }
      var timm = {
        clone: clone2,
        addLast: addLast2,
        addFirst,
        removeLast,
        removeFirst,
        insert,
        removeAt: removeAt2,
        replaceAt,
        getIn,
        set: set2,
        setIn: setIn8,
        update,
        updateIn,
        merge,
        mergeDeep,
        mergeIn,
        omit: omit4,
        addDefaults
      };
      var _default = timm;
      exports.default = _default;
    }
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/p-defer@3.0.0/node_modules/p-defer/index.js
  var require_p_defer = __commonJS({
    "../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/p-defer@3.0.0/node_modules/p-defer/index.js"(exports, module) {
      "use strict";
      var pDefer = () => {
        const deferred2 = {};
        deferred2.promise = new Promise((resolve, reject) => {
          deferred2.resolve = resolve;
          deferred2.reject = reject;
        });
        return deferred2;
      };
      module.exports = pDefer;
    }
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/queue-microtask@1.2.3/node_modules/queue-microtask/index.js
  var require_queue_microtask = __commonJS({
    "../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/queue-microtask@1.2.3/node_modules/queue-microtask/index.js"(exports, module) {
      "use strict";
      var promise;
      module.exports = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : global) : (cb) => (promise || (promise = Promise.resolve())).then(cb).catch((err) => setTimeout(() => {
        throw err;
      }, 0));
    }
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/sorted-array@2.0.4/node_modules/sorted-array/sorted-array.js
  var require_sorted_array = __commonJS({
    "../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/sorted-array@2.0.4/node_modules/sorted-array/sorted-array.js"(exports, module) {
      "use strict";
      var SortedArray2 = function() {
        var SortedArray3 = defclass({
          constructor: function(array, compare) {
            this.array = [];
            this.compare = compare || compareDefault;
            var length = array.length, index = 0;
            while (index < length)
              this.insert(array[index++]);
          },
          insert: function(element) {
            var array = this.array, compare = this.compare, high = array.length - 1, low = 0, pos = -1, index, ordering;
            while (high >= low) {
              index = (high + low) / 2 >>> 0;
              ordering = compare(array[index], element);
              if (ordering < 0)
                low = index + 1;
              else if (ordering > 0)
                high = index - 1;
              else {
                pos = index;
                break;
              }
              ;
            }
            if (pos === -1) {
              pos = high;
            }
            pos++;
            high = array.length - 1;
            while (pos < high && compare(element, array[pos]) === 0) {
              pos++;
            }
            index = array.length;
            array.push(element);
            while (index > pos) {
              array[index] = array[--index];
            }
            array[pos] = element;
            return this;
          },
          search: function(element) {
            var array = this.array, compare = this.compare, high = array.length - 1, low = 0, index, ordering;
            while (high >= low) {
              index = (high + low) / 2 >>> 0;
              ordering = compare(array[index], element);
              if (ordering < 0)
                low = index + 1;
              else if (ordering > 0)
                high = index - 1;
              else
                return index;
            }
            return -1;
          },
          remove: function(element) {
            var index = this.search(element);
            if (index >= 0)
              this.array.splice(index, 1);
            return this;
          }
        });
        SortedArray3.comparing = function(property, array) {
          return new SortedArray3(array, function(a, b) {
            return compareDefault(a[property], b[property]);
          });
        };
        return SortedArray3;
        function defclass(prototype) {
          var constructor = prototype.constructor;
          constructor.prototype = prototype;
          return constructor;
        }
        function compareDefault(a, b) {
          if (a < b)
            return -1;
          else if (a > b)
            return 1;
          else
            return 0;
        }
      }();
      if (typeof module === "object")
        module.exports = SortedArray2;
      if (typeof define === "function" && define.amd)
        define(function() {
          return SortedArray2;
        });
    }
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/stage-revert-data/core/src/index.ts
  var src_exports = {};
  __export(src_exports, {
    StageRevertDataPlugin: () => StageRevertDataPlugin
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/tapable-ts@0.2.4/node_modules/tapable-ts/dist/hooks.mjs
  function equalToOrIn(value, check) {
    if (Array.isArray(check)) {
      return check.includes(value);
    }
    return check === value;
  }
  function callTap(tap, args, ctx) {
    if (tap.context) {
      return tap.callback(ctx, ...args);
    }
    return tap.callback(...args);
  }
  var InterceptionManager = class {
    constructor() {
      this.interceptions = [];
      this.interceptionKeySet = /* @__PURE__ */ new Set();
    }
    isUsed() {
      return this.interceptions.length > 0;
    }
    intercept(int) {
      this.interceptions.push(int);
      Object.keys(int).forEach((s) => {
        this.interceptionKeySet.add(s);
      });
    }
    tap(tap) {
      if (this.interceptionKeySet.has("tap")) {
        this.interceptions.forEach((i) => {
          var _a;
          (_a = i.tap) == null ? void 0 : _a.call(i, tap);
        });
      }
    }
    call(ctx, ...args) {
      if (this.interceptionKeySet.has("call")) {
        this.interceptions.forEach((i) => {
          var _a, _b;
          if (i.context) {
            (_a = i.call) == null ? void 0 : _a.call(i, ctx, ...args);
          } else {
            (_b = i.call) == null ? void 0 : _b.call(i, ...args);
          }
        });
      }
    }
    loop(...args) {
      if (this.interceptionKeySet.has("loop")) {
        this.interceptions.forEach((i) => {
          var _a;
          (_a = i.loop) == null ? void 0 : _a.call(i, ...args);
        });
      }
    }
    error(err) {
      if (this.interceptionKeySet.has("error")) {
        if (err instanceof Error) {
          const asError = err;
          this.interceptions.forEach((i) => {
            var _a;
            (_a = i.error) == null ? void 0 : _a.call(i, asError);
          });
        }
      }
    }
    result(r) {
      if (this.interceptionKeySet.has("result")) {
        this.interceptions.forEach((i) => {
          var _a;
          (_a = i.result) == null ? void 0 : _a.call(i, r);
        });
      }
    }
    done() {
      if (this.interceptionKeySet.has("done")) {
        this.interceptions.forEach((i) => {
          var _a;
          (_a = i.done) == null ? void 0 : _a.call(i);
        });
      }
    }
  };
  var Hook = class {
    constructor() {
      this.taps = [];
      this.interceptions = new InterceptionManager();
    }
    tap(options, callback) {
      const resolvedOptions = typeof options === "string" ? {
        name: options,
        context: false
      } : {
        context: false,
        ...options
      };
      const key = Symbol(resolvedOptions.name);
      const tap = {
        key,
        ...resolvedOptions,
        callback
      };
      if (tap.before) {
        let insertionIndex = this.taps.length;
        const beforeSet = new Set(Array.isArray(tap.before) ? tap.before : [tap.before]);
        for (insertionIndex; insertionIndex > 0 && beforeSet.size > 0; insertionIndex--) {
          const t2 = this.taps[insertionIndex - 1];
          if (beforeSet.has(t2.name)) {
            beforeSet.delete(t2.name);
          }
          if (t2.before && equalToOrIn(tap.name, t2.before)) {
            break;
          }
        }
        this.taps.splice(insertionIndex, 0, tap);
      } else {
        this.taps.push(tap);
      }
      this.interceptions.tap(tap);
      return tap;
    }
    untap(tap) {
      this.taps = this.taps.filter((t2) => t2.key !== tap.key);
    }
    isUsed() {
      return this.taps.length > 0 || this.interceptions.isUsed();
    }
    intercept(int) {
      this.interceptions.intercept(int);
    }
  };
  var SyncHook = class extends Hook {
    call(...args) {
      if (!this.isUsed()) {
        return;
      }
      const ctx = {};
      this.interceptions.call(ctx, ...args);
      try {
        this.taps.forEach((t2) => {
          callTap(t2, args, ctx);
        });
      } catch (err) {
        this.interceptions.error(err);
        throw err;
      }
      this.interceptions.done();
    }
  };
  var SyncBailHook = class extends Hook {
    call(...args) {
      if (!this.isUsed()) {
        return;
      }
      const ctx = {};
      this.interceptions.call(ctx, ...args);
      for (let tapIndex = 0; tapIndex < this.taps.length; tapIndex += 1) {
        const rtn = callTap(this.taps[tapIndex], args, ctx);
        if (rtn !== void 0) {
          this.interceptions.result(rtn);
          return rtn;
        }
      }
      this.interceptions.done();
    }
  };
  var SyncWaterfallHook = class extends Hook {
    call(...args) {
      const ctx = {};
      this.interceptions.call(ctx, ...args);
      let [rtn, ...rest] = args;
      for (let tapIndex = 0; tapIndex < this.taps.length; tapIndex += 1) {
        const tapValue = callTap(this.taps[tapIndex], [rtn, ...rest], ctx);
        if (tapValue !== void 0) {
          rtn = tapValue;
        }
      }
      this.interceptions.result(rtn);
      return rtn;
    }
  };

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+player@0.0.0/node_modules/@player-ui/player/dist/index.mjs
  var import_ts_nested_error = __toESM(require_nested_error(), 1);
  var import_arr_flatten = __toESM(require_arr_flatten(), 1);
  var import_parsimmon = __toESM(require_parsimmon(), 1);
  var import_ebnf = __toESM(require_dist(), 1);
  var import_ts_nested_error2 = __toESM(require_nested_error(), 1);

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/dlv@1.1.3/node_modules/dlv/dist/dlv.es.js
  function dlv_es_default(t2, e, l, n, r) {
    for (e = e.split ? e.split(".") : e, n = 0; n < e.length; n++)
      t2 = t2 ? t2[e[n]] : r;
    return t2 === r ? l : t2;
  }

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+player@0.0.0/node_modules/@player-ui/player/dist/index.mjs
  var import_timm = __toESM(require_timm(), 1);
  var import_ts_nested_error3 = __toESM(require_nested_error(), 1);
  var import_timm2 = __toESM(require_timm(), 1);
  var import_timm3 = __toESM(require_timm(), 1);
  var import_timm4 = __toESM(require_timm(), 1);

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/dequal@2.0.3/node_modules/dequal/dist/index.mjs
  var has = Object.prototype.hasOwnProperty;
  function find(iter, tar, key) {
    for (key of iter.keys()) {
      if (dequal(key, tar))
        return key;
    }
  }
  function dequal(foo, bar) {
    var ctor, len, tmp;
    if (foo === bar)
      return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
      if (ctor === Date)
        return foo.getTime() === bar.getTime();
      if (ctor === RegExp)
        return foo.toString() === bar.toString();
      if (ctor === Array) {
        if ((len = foo.length) === bar.length) {
          while (len-- && dequal(foo[len], bar[len]))
            ;
        }
        return len === -1;
      }
      if (ctor === Set) {
        if (foo.size !== bar.size) {
          return false;
        }
        for (len of foo) {
          tmp = len;
          if (tmp && typeof tmp === "object") {
            tmp = find(bar, tmp);
            if (!tmp)
              return false;
          }
          if (!bar.has(tmp))
            return false;
        }
        return true;
      }
      if (ctor === Map) {
        if (foo.size !== bar.size) {
          return false;
        }
        for (len of foo) {
          tmp = len[0];
          if (tmp && typeof tmp === "object") {
            tmp = find(bar, tmp);
            if (!tmp)
              return false;
          }
          if (!dequal(len[1], bar.get(tmp))) {
            return false;
          }
        }
        return true;
      }
      if (ctor === ArrayBuffer) {
        foo = new Uint8Array(foo);
        bar = new Uint8Array(bar);
      } else if (ctor === DataView) {
        if ((len = foo.byteLength) === bar.byteLength) {
          while (len-- && foo.getInt8(len) === bar.getInt8(len))
            ;
        }
        return len === -1;
      }
      if (ArrayBuffer.isView(foo)) {
        if ((len = foo.byteLength) === bar.byteLength) {
          while (len-- && foo[len] === bar[len])
            ;
        }
        return len === -1;
      }
      if (!ctor || typeof foo === "object") {
        len = 0;
        for (ctor in foo) {
          if (has.call(foo, ctor) && ++len && !has.call(bar, ctor))
            return false;
          if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor]))
            return false;
        }
        return Object.keys(bar).length === len;
      }
    }
    return foo !== foo && bar !== bar;
  }

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+player@0.0.0/node_modules/@player-ui/player/dist/index.mjs
  var import_timm5 = __toESM(require_timm(), 1);
  var import_timm6 = __toESM(require_timm(), 1);
  var import_timm7 = __toESM(require_timm(), 1);
  var import_timm8 = __toESM(require_timm(), 1);
  var import_p_defer = __toESM(require_p_defer(), 1);
  var import_p_defer2 = __toESM(require_p_defer(), 1);
  var import_timm9 = __toESM(require_timm(), 1);
  var import_queue_microtask = __toESM(require_queue_microtask(), 1);

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+partial-match-registry@0.0.0/node_modules/@player-ui/partial-match-registry/dist/index.mjs
  var import_sorted_array = __toESM(require_sorted_array(), 1);
  function traverseObj(object, path2 = [], pairs = /* @__PURE__ */ new Map()) {
    for (const key of Object.keys(object)) {
      const val = object[key];
      const nestedPath2 = [...path2, key];
      "";
      if (typeof val === "object") {
        traverseObj(val, nestedPath2, pairs);
      } else {
        pairs.set(nestedPath2, val);
      }
    }
    return pairs;
  }
  function createMatcher(partialObj) {
    const pairs = traverseObj(partialObj);
    const matchFunction = (searchObj) => {
      for (const entry of Array.from(pairs)) {
        const [path2, value] = entry;
        if (dlv_es_default(searchObj, path2) !== value) {
          return false;
        }
      }
      return true;
    };
    matchFunction.count = pairs.size;
    return matchFunction;
  }
  function createBasicMatcher(seed) {
    const matcher = (match) => seed === match;
    matcher.count = 1;
    return matcher;
  }
  var createSortedArray = () => new import_sorted_array.default([], (c) => c.matcher.count);
  var Registry = class {
    constructor(initialSet) {
      this.store = createSortedArray();
      initialSet?.forEach(([match, value]) => {
        this.set(match, value);
      });
    }
    /** Add match -> value mapping to the registry */
    set(match, value) {
      const matcher = typeof match === "object" ? createMatcher(match) : createBasicMatcher(match);
      this.store.insert({
        key: match,
        value,
        matcher
      });
    }
    /** Fetch the best match in the registry */
    get(query2) {
      for (const entry of this.store.array) {
        if (entry.matcher(query2)) {
          return entry.value;
        }
      }
    }
    /** Loop over all entries and run callback */
    forEach(callbackfn) {
      for (const entry of this.store.array) {
        callbackfn(entry);
      }
    }
    /** Reset the items in the registry */
    clear() {
      this.store = createSortedArray();
    }
  };

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+player@0.0.0/node_modules/@player-ui/player/dist/index.mjs
  var __defProp2 = Object.defineProperty;
  var __export2 = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var toValue = (value) => ({
    name: "Value",
    value
  });
  var toExpression = (value) => ({
    name: "Expression",
    value
  });
  var toPath = (path2) => ({
    name: "PathNode",
    path: path2
  });
  var toQuery = (key, value) => ({
    name: "Query",
    key,
    value
  });
  var toConcatenatedNode = (values) => {
    if (values.length === 1) {
      return values[0];
    }
    return {
      name: "Concatenated",
      value: values
    };
  };
  var doubleQuote = import_parsimmon.default.string('"');
  var singleQuote = import_parsimmon.default.string("'");
  var backTick = import_parsimmon.default.string("`");
  var identifier = import_parsimmon.default.regex(/[\w\-@]+/).desc("identifier").map(toValue);
  var path;
  var futurePath = import_parsimmon.default.lazy(() => path);
  var nestedPath = futurePath.trim(import_parsimmon.default.optWhitespace).wrap(import_parsimmon.default.string("{{"), import_parsimmon.default.string("}}")).map(toPath);
  var nestedExpression = import_parsimmon.default.regex(/[^`]*/).wrap(backTick, backTick).map(toExpression);
  var segment = import_parsimmon.default.alt(identifier, nestedPath, nestedExpression).atLeast(1).map(import_arr_flatten.default).map(toConcatenatedNode);
  var optionallyQuotedSegment = import_parsimmon.default.alt(
    import_parsimmon.default.regex(/[^"]*/).wrap(doubleQuote, doubleQuote).map(toValue),
    import_parsimmon.default.regex(/[^']*/).wrap(singleQuote, singleQuote).map(toValue),
    segment
  );
  var query = import_parsimmon.default.seq(
    optionallyQuotedSegment,
    import_parsimmon.default.string("=").times(1, 3).trim(import_parsimmon.default.optWhitespace),
    optionallyQuotedSegment
  ).map(([key, , value]) => toQuery(key, value));
  var brackets = import_parsimmon.default.alt(query, optionallyQuotedSegment).trim(import_parsimmon.default.optWhitespace).wrap(import_parsimmon.default.string("["), import_parsimmon.default.string("]")).many();
  var segmentAndBrackets = import_parsimmon.default.seqMap(segment, brackets, (s, bs) => [s, ...bs]);
  path = import_parsimmon.default.sepBy(segmentAndBrackets, import_parsimmon.default.string(".")).map(import_arr_flatten.default);
  var parser = new import_ebnf.Grammars.W3C.Parser(`
value                      ::= segment_and_bracket (SEGMENT_SEPARATOR segment_and_bracket)*
segment                    ::= concatenated | expression | modelRef | identifier  
concatenated               ::= (expression | modelRef | identifier)+ 
modelRef                   ::= OPEN_CURL OPEN_CURL value CLOSE_CURL CLOSE_CURL 
identifier                 ::= [\\w\\-@]+
query                      ::= WHITESPACE* optionally_quoted_segment WHITESPACE* EQUALS EQUALS? EQUALS? WHITESPACE* optionally_quoted_segment WHITESPACE*
brackets                   ::= OPEN_BRACKET WHITESPACE* (query | optionally_quoted_segment) WHITESPACE* CLOSE_BRACKET 
segment_and_bracket        ::= segment brackets*
quoted_value               ::= [^"']*
optionally_quoted_segment  ::= WHITESPACE* SINGLE_QUOTE quoted_value SINGLE_QUOTE WHITESPACE* | WHITESPACE* DOUBLE_QUOTE quoted_value DOUBLE_QUOTE WHITESPACE* | WHITESPACE* segment WHITESPACE*
expression_value           ::= [^\`]*
expression                 ::= BACK_TICK expression_value BACK_TICK

EQUALS                     ::= "="
SEGMENT_SEPARATOR          ::= "."
SINGLE_QUOTE               ::= "'"
DOUBLE_QUOTE               ::= '"'
WHITESPACE                 ::= " "
OPEN_CURL                  ::= "{"
CLOSE_CURL                 ::= "}" 
OPEN_BRACKET               ::= "[" 
CLOSE_BRACKET              ::= "]"
BACK_TICK                  ::= "\`" 
`);
  var SEGMENT_SEPARATOR = ".";
  var OPEN_CURL = "{";
  var CLOSE_CURL = "}";
  var OPEN_BRACKET = "[";
  var CLOSE_BRACKET = "]";
  var EQUALS = "=";
  var SINGLE_QUOTE = "'";
  var DOUBLE_QUOTE = '"';
  var BACK_TICK = "`";
  var isIdentifierChar = (char) => {
    if (!char) {
      return false;
    }
    const charCode = char.charCodeAt(0);
    const matches = charCode === 32 || // ' '
    charCode === 34 || // "
    charCode === 39 || // '
    charCode === 40 || // (
    charCode === 41 || // )
    charCode === 42 || // *
    charCode === 46 || // .
    charCode === 61 || // =
    charCode === 91 || // [
    charCode === 93 || // ]
    charCode === 96 || // `
    charCode === 123 || // {
    charCode === 125;
    return !matches;
  };
  var parse = (path2) => {
    let index = 1;
    let ch = path2.charAt(0);
    const next = (expected) => {
      if (expected && ch !== expected) {
        throw new Error(`Expected char: ${expected} but got: ${ch}`);
      }
      ch = path2.charAt(index);
      index += 1;
      return ch;
    };
    const whitespace = () => {
      while (ch === " ") {
        next();
      }
    };
    const identifier2 = () => {
      if (!isIdentifierChar(ch)) {
        return;
      }
      let value = ch;
      while (next()) {
        if (!isIdentifierChar(ch)) {
          break;
        }
        value += ch;
      }
      if (value) {
        return toValue(value);
      }
    };
    const expression = () => {
      if (ch === BACK_TICK) {
        next(BACK_TICK);
        let exp = ch;
        while (next()) {
          if (ch === BACK_TICK) {
            break;
          }
          exp += ch;
        }
        next(BACK_TICK);
        if (exp) {
          return toExpression(exp);
        }
      }
    };
    const regex = (match) => {
      if (!ch?.match(match)) {
        return;
      }
      let value = ch;
      while (next()) {
        if (!ch?.match(match)) {
          break;
        }
        value += ch;
      }
      if (value) {
        return toValue(value);
      }
    };
    const nestedPath2 = () => {
      if (ch === OPEN_CURL) {
        next(OPEN_CURL);
        if (ch === OPEN_CURL) {
          next(OPEN_CURL);
          const modelRef = parsePath();
          next(CLOSE_CURL);
          next(CLOSE_CURL);
          return modelRef;
        }
      }
    };
    const simpleSegment = () => nestedPath2() ?? expression() ?? identifier2();
    const segment2 = () => {
      const segments = [];
      let nextSegment = simpleSegment();
      while (nextSegment !== void 0) {
        segments.push(nextSegment);
        nextSegment = simpleSegment();
      }
      if (segments.length === 0) {
        return void 0;
      }
      return toConcatenatedNode(segments);
    };
    const optionallyQuotedSegment2 = () => {
      whitespace();
      if (ch === SINGLE_QUOTE || ch === DOUBLE_QUOTE) {
        const singleQuote2 = ch === SINGLE_QUOTE;
        next(singleQuote2 ? SINGLE_QUOTE : DOUBLE_QUOTE);
        const id = regex(/[^'"]+/);
        next(singleQuote2 ? SINGLE_QUOTE : DOUBLE_QUOTE);
        return id;
      }
      return simpleSegment();
    };
    const equals = () => {
      if (ch !== EQUALS) {
        return false;
      }
      while (ch === EQUALS) {
        next();
      }
      return true;
    };
    const parseBracket = () => {
      if (ch === OPEN_BRACKET) {
        next(OPEN_BRACKET);
        whitespace();
        let value = optionallyQuotedSegment2();
        if (value) {
          whitespace();
          if (equals()) {
            whitespace();
            const second = optionallyQuotedSegment2();
            value = toQuery(value, second);
            whitespace();
          }
        } else {
          throw new Error(`Expected identifier`);
        }
        if (value) {
          next(CLOSE_BRACKET);
        }
        return value;
      }
    };
    const parseSegmentAndBrackets = () => {
      const parsed = [];
      const firstSegment = segment2();
      if (firstSegment) {
        parsed.push(firstSegment);
        let bracketSegment = parseBracket();
        while (bracketSegment !== void 0) {
          parsed.push(bracketSegment);
          bracketSegment = parseBracket();
        }
      }
      return parsed;
    };
    const parsePath = () => {
      const parts = [];
      let nextSegment = parseSegmentAndBrackets();
      while (nextSegment !== void 0) {
        parts.push(...nextSegment);
        if (!ch || ch === CLOSE_CURL) {
          break;
        }
        if (nextSegment.length === 0 && ch) {
          throw new Error(`Unexpected character: ${ch}`);
        }
        next(SEGMENT_SEPARATOR);
        nextSegment = parseSegmentAndBrackets();
      }
      return toPath(parts);
    };
    try {
      const result = parsePath();
      return {
        status: true,
        path: result
      };
    } catch (e) {
      return {
        status: false,
        error: e.message
      };
    }
  };
  function isBinding(binding) {
    return !(typeof binding === "string" || Array.isArray(binding));
  }
  function maybeConvertToNum(i) {
    const asInt = parseInt(i, 10);
    if (isNaN(asInt)) {
      return i;
    }
    return asInt;
  }
  function getBindingSegments(binding) {
    if (Array.isArray(binding)) {
      return binding;
    }
    if (typeof binding === "string") {
      return binding.split(".");
    }
    return binding.asArray();
  }
  function findInArray(array, key, value) {
    return array.findIndex((obj) => {
      if (obj && typeof obj === "object") {
        return obj[key] == value;
      }
      return false;
    });
  }
  var BindingInstance = class _BindingInstance {
    constructor(raw, factory = (rawBinding) => new _BindingInstance(rawBinding)) {
      const split = Array.isArray(raw) ? raw : raw.split(".");
      this.split = split.map((segment2) => {
        if (typeof segment2 === "number") {
          return segment2;
        }
        const tryNum = Number(segment2);
        return isNaN(tryNum) ? segment2 : tryNum;
      });
      Object.freeze(this.split);
      this.joined = this.split.join(".");
      this.factory = factory;
    }
    asArray() {
      return this.split;
    }
    asString() {
      return this.joined;
    }
    /**
     * Check to see if the given binding is a sub-path of the current one
     */
    contains(binding) {
      const bindingAsArray = binding.asArray();
      if (bindingAsArray.length < this.split.length) {
        return false;
      }
      for (let i = 0; i < this.split.length; i++) {
        if (this.split[i] !== bindingAsArray[i]) {
          return false;
        }
      }
      return true;
    }
    relative(binding) {
      return this.asArray().slice(binding.asArray().length);
    }
    parent() {
      return this.factory(this.split.slice(0, -1));
    }
    key() {
      return this.split[this.split.length - 1];
    }
    /**
     * This is a utility method to get a binding that is a descendent of this binding
     *
     * @param relative - The relative path to descend to
     */
    descendent(relative) {
      const descendentSegments = getBindingSegments(relative);
      return this.factory(this.split.concat(descendentSegments));
    }
  };
  function resolveBindingAST(bindingPathNode, options, hooks) {
    const context = {
      updates: {},
      path: []
    };
    function getValueForNode(node) {
      if (node.name === "Value") {
        return node.value;
      }
      if (node.name === "PathNode") {
        const nestedResolvedValue = resolveBindingAST(node, options);
        if (nestedResolvedValue.updates) {
          context.updates = {
            ...context.updates,
            ...nestedResolvedValue.updates
          };
        }
        try {
          return options.convertToPath(
            options.getValue(nestedResolvedValue.path)
          );
        } catch (e) {
          throw new import_ts_nested_error2.NestedError(
            `Unable to resolve path segment: ${nestedResolvedValue.path}`,
            e
          );
        }
      }
      if (node.name === "Expression") {
        try {
          const actualValue = options.evaluate(node.value);
          return options.convertToPath(actualValue);
        } catch (e) {
          throw new import_ts_nested_error2.NestedError(`Unable to resolve path: ${node.value}`, e);
        }
      }
      throw new Error(`Unable to resolve value for node: ${node.name}`);
    }
    function appendPathSegments(segment2) {
      if (typeof segment2 === "string" && segment2.indexOf(".") > -1) {
        segment2.split(".").forEach((i) => {
          context.path.push(maybeConvertToNum(i));
        });
      } else {
        context.path.push(segment2);
      }
    }
    function resolveNode(_node) {
      const resolvedNode = hooks?.beforeResolveNode.call(_node, { ...context, ...options }) ?? _node;
      switch (resolvedNode.name) {
        case "Expression":
        case "PathNode":
          appendPathSegments(getValueForNode(resolvedNode));
          break;
        case "Value":
          appendPathSegments(resolvedNode.value);
          break;
        case "Query": {
          const objToQuery = options.getValue(context.path) ?? [];
          const { key, value } = resolvedNode;
          const resolvedKey = getValueForNode(key);
          const resolvedValue = value && getValueForNode(value);
          const index = findInArray(objToQuery, resolvedKey, resolvedValue);
          if (index === void 0 || index === -1) {
            context.updates[[...context.path, objToQuery.length, resolvedKey].join(".")] = resolvedValue;
            context.path.push(objToQuery.length);
          } else {
            context.path.push(index);
          }
          break;
        }
        case "Concatenated":
          context.path.push(resolvedNode.value.map(getValueForNode).join(""));
          break;
        default:
          throw new Error(`Unsupported node type: ${resolvedNode.name}`);
      }
    }
    bindingPathNode.path.forEach(resolveNode);
    return {
      path: context.path,
      updates: Object.keys(context.updates ?? {}).length > 0 ? context.updates : void 0
    };
  }
  var BINDING_BRACKETS_REGEX = /[\s()*=`{}'"[\]]/;
  var LAZY_BINDING_REGEX = /^[^.]+(\..+)*$/;
  var DEFAULT_OPTIONS = {
    get: () => {
      throw new Error("Not Implemented");
    },
    set: () => {
      throw new Error("Not Implemented");
    },
    evaluate: () => {
      throw new Error("Not Implemented");
    }
  };
  var BindingParser = class {
    constructor(options) {
      this.hooks = {
        skipOptimization: new SyncBailHook(),
        beforeResolveNode: new SyncWaterfallHook()
      };
      this.parserOptions = { ...DEFAULT_OPTIONS, ...options };
      this.cache = {};
      this.parseCache = {};
      this.parse = this.parse.bind(this);
    }
    /**
     * Takes a binding path, parses it, and returns an equivalent, normalized
     * representation of that path.
     */
    normalizePath(path2, resolveOptions) {
      if (!BINDING_BRACKETS_REGEX.test(path2) && LAZY_BINDING_REGEX.test(path2) && this.hooks.skipOptimization.call(path2) !== true) {
        return { path: path2.split("."), updates: void 0 };
      }
      const ast = this.parseCache[path2] ?? parse(path2);
      this.parseCache[path2] = ast;
      if (typeof ast !== "object" || !ast?.status) {
        throw new TypeError(
          `Cannot normalize path "${path2}": ${ast?.error ?? "Unknown Error."}`
        );
      }
      try {
        return resolveBindingAST(ast.path, resolveOptions, this.hooks);
      } catch (e) {
        throw new import_ts_nested_error.NestedError(`Cannot resolve binding: ${path2}`, e);
      }
    }
    getBindingForNormalizedResult(normalized) {
      const normalizedStr = normalized.path.join(".");
      if (this.cache[normalizedStr]) {
        return this.cache[normalizedStr];
      }
      const created = new BindingInstance(
        normalizedStr === "" ? [] : normalized.path,
        this.parse
      );
      this.cache[normalizedStr] = created;
      return created;
    }
    parse(rawBinding, overrides = {}) {
      if (isBinding(rawBinding)) {
        return rawBinding;
      }
      const options = {
        ...this.parserOptions,
        ...overrides
      };
      let updates = {};
      const joined = Array.isArray(rawBinding) ? rawBinding.join(".") : String(rawBinding);
      const normalizeConfig = {
        getValue: (path2) => {
          const normalized2 = this.normalizePath(path2.join("."), normalizeConfig);
          return options.get(this.getBindingForNormalizedResult(normalized2));
        },
        evaluate: (exp) => {
          return options.evaluate(exp);
        },
        convertToPath: (path2) => {
          if (path2 === void 0) {
            throw new Error(
              "Attempted to convert undefined value to binding path"
            );
          }
          if (typeof path2 !== "string" && typeof path2 !== "number" && typeof path2 !== "boolean") {
            throw new Error(
              `Attempting to convert ${typeof path2} to a binding path.`
            );
          }
          const normalized2 = this.normalizePath(String(path2), normalizeConfig);
          if (normalized2.updates) {
            updates = {
              ...updates,
              ...normalized2.updates
            };
          }
          const joinedNormalizedPath = normalized2.path.join(".");
          if (joinedNormalizedPath === "") {
            throw new Error("Nested path resolved to an empty path");
          }
          return joinedNormalizedPath;
        }
      };
      const normalized = this.normalizePath(joined, normalizeConfig);
      if (normalized.updates) {
        updates = {
          ...updates,
          ...normalized.updates
        };
      }
      const updateKeys = Object.keys(updates);
      if (!options.readOnly && updateKeys.length > 0) {
        const updateTransaction = updateKeys.map(
          (updatedBinding) => [
            this.parse(updatedBinding),
            updates[updatedBinding]
          ]
        );
        options.set(updateTransaction);
      }
      return this.getBindingForNormalizedResult(normalized);
    }
  };
  var DependencyTracker = class {
    constructor() {
      this.readDeps = /* @__PURE__ */ new Set();
      this.writeDeps = /* @__PURE__ */ new Set();
      this.namedDependencySets = {};
      this.namedSet = "core";
      this.createSubset("core");
      this.createSubset("children");
    }
    createSubset(name, force = false) {
      if (force || !this.namedDependencySets[name]) {
        this.namedDependencySets[name] = {
          readDeps: /* @__PURE__ */ new Set(),
          writeDeps: /* @__PURE__ */ new Set()
        };
      }
    }
    /** Grab all of the bindings that this depended on */
    getDependencies(name) {
      if (name !== void 0) {
        return this.namedDependencySets?.[name]?.readDeps ?? /* @__PURE__ */ new Set();
      }
      return this.readDeps;
    }
    trackSubset(name) {
      this.createSubset(name);
      this.namedSet = name;
    }
    trackDefault() {
      this.namedSet = "core";
    }
    /** Grab all of the bindings this wrote to */
    getModified(name) {
      if (name !== void 0) {
        return this.namedDependencySets?.[name]?.writeDeps ?? /* @__PURE__ */ new Set();
      }
      return this.writeDeps;
    }
    /**
     * Check to see if the dataModel has read the value at the given binding
     *
     * @param binding - The binding you want to check for
     */
    readsBinding(binding) {
      return this.readDeps.has(binding);
    }
    /**
     * Check to see if the dataModel has written to the binding
     */
    writesBinding(binding) {
      return this.writeDeps.has(binding);
    }
    /** Reset all tracking of dependencies */
    reset() {
      this.readDeps = /* @__PURE__ */ new Set();
      this.writeDeps = /* @__PURE__ */ new Set();
      this.namedDependencySets = {};
      this.namedSet = "core";
      this.createSubset("core", true);
      this.createSubset("children", true);
    }
    addReadDep(binding, namedSet = this.namedSet) {
      if (namedSet) {
        this.namedDependencySets?.[namedSet]?.readDeps.add(binding);
      }
      this.readDeps.add(binding);
    }
    addWriteDep(binding, namedSet = this.namedSet) {
      if (namedSet) {
        this.namedDependencySets?.[namedSet]?.writeDeps.add(binding);
      }
      this.writeDeps.add(binding);
    }
    addChildReadDep(binding) {
      this.addReadDep(binding, "children");
    }
  };
  var DependencyModel = class extends DependencyTracker {
    constructor(rootModel) {
      super();
      this.rootModel = rootModel;
      this.set = this.set.bind(this);
      this.get = this.get.bind(this);
    }
    set(transaction, options) {
      transaction.forEach(([binding]) => this.addWriteDep(binding));
      return this.rootModel.set(transaction, options);
    }
    get(binding, options) {
      this.addReadDep(binding);
      return this.rootModel.get(binding, options);
    }
    delete(binding, options) {
      this.addWriteDep(binding);
      return this.rootModel.delete(binding, options);
    }
  };
  var NOOPDataModel = class {
    get() {
      return void 0;
    }
    set() {
      return [];
    }
    delete() {
    }
  };
  var NOOP_MODEL = new NOOPDataModel();
  var ROOT_BINDING = new BindingInstance([]);
  function withParser(model, parseBinding) {
    function maybeParse(binding, readOnly) {
      const parsed = isBinding(binding) ? binding : parseBinding(binding, {
        get: model.get,
        set: model.set,
        readOnly
      });
      if (!parsed) {
        throw new Error("Unable to parse binding");
      }
      return parsed;
    }
    return {
      get(binding, options) {
        return model.get(maybeParse(binding, true), options);
      },
      set(transaction, options) {
        return model.set(
          transaction.map(([key, val]) => [maybeParse(key, false), val]),
          options
        );
      },
      delete(binding, options) {
        return model.delete(maybeParse(binding, false), options);
      }
    };
  }
  function toModel(middleware, defaultOptions, next) {
    if (!next) {
      return middleware;
    }
    return {
      get: (binding, options) => {
        const resolvedOptions = options ?? defaultOptions;
        if (middleware.get) {
          return middleware.get(binding, resolvedOptions, next);
        }
        return next?.get(binding, resolvedOptions);
      },
      set: (transaction, options) => {
        const resolvedOptions = options ?? defaultOptions;
        if (middleware.set) {
          return middleware.set(transaction, resolvedOptions, next);
        }
        return next?.set(transaction, resolvedOptions);
      },
      delete: (binding, options) => {
        const resolvedOptions = options ?? defaultOptions;
        if (middleware.delete) {
          return middleware.delete(binding, resolvedOptions, next);
        }
        return next?.delete(binding, resolvedOptions);
      }
    };
  }
  function constructModelForPipeline(pipeline) {
    if (pipeline.length === 0) {
      return NOOP_MODEL;
    }
    if (pipeline.length === 1) {
      return toModel(pipeline[0]);
    }
    function createModelWithOptions(options) {
      const model = pipeline.reduce(
        (nextModel, middleware) => toModel(middleware, options, nextModel),
        void 0
      ) ?? NOOP_MODEL;
      return model;
    }
    return {
      get: (binding, options) => {
        return createModelWithOptions(options)?.get(binding, options);
      },
      set: (transaction, options) => {
        return createModelWithOptions(options)?.set(transaction, options);
      },
      delete: (binding, options) => {
        return createModelWithOptions(options)?.delete(binding, options);
      }
    };
  }
  var PipelinedDataModel = class {
    constructor(pipeline = []) {
      this.hooks = {
        onSet: new SyncHook()
      };
      this.pipeline = pipeline;
      this.effectiveDataModel = constructModelForPipeline(this.pipeline);
    }
    setMiddleware(handlers) {
      this.pipeline = handlers;
      this.effectiveDataModel = constructModelForPipeline(handlers);
    }
    addMiddleware(handler) {
      this.pipeline = [...this.pipeline, handler];
      this.effectiveDataModel = constructModelForPipeline(this.pipeline);
    }
    reset(model = {}) {
      this.pipeline.forEach((middleware) => {
        if ("reset" in middleware) {
          middleware.reset?.();
        }
      });
      this.set([[ROOT_BINDING, model]]);
    }
    set(transaction, options) {
      const appliedTransaction = this.effectiveDataModel.set(
        transaction,
        options
      );
      this.hooks.onSet.call(transaction);
      return appliedTransaction;
    }
    get(binding, options) {
      return this.effectiveDataModel.get(binding, options);
    }
    delete(binding, options) {
      return this.effectiveDataModel.delete(binding, options);
    }
  };
  var LocalModel = class {
    constructor(model = {}) {
      this.model = model;
      this.get = this.get.bind(this);
      this.set = this.set.bind(this);
    }
    reset(model = {}) {
      this.model = model;
    }
    get(binding) {
      if (!binding || !binding.asString()) {
        return this.model;
      }
      return dlv_es_default(this.model, binding.asArray());
    }
    set(transaction) {
      const effectiveOperations = [];
      transaction.forEach(([binding, value]) => {
        const oldValue = this.get(binding);
        this.model = (0, import_timm.setIn)(this.model, binding.asArray(), value);
        effectiveOperations.push({ binding, oldValue, newValue: value });
      });
      return effectiveOperations;
    }
    delete(binding) {
      const parentBinding = binding.parent();
      if (parentBinding) {
        const parentValue = this.get(parentBinding);
        if (parentValue !== void 0) {
          if (Array.isArray(parentValue)) {
            this.model = (0, import_timm.setIn)(
              this.model,
              parentBinding.asArray(),
              (0, import_timm.removeAt)(parentValue, binding.key())
            );
          } else {
            this.model = (0, import_timm.setIn)(
              this.model,
              parentBinding.asArray(),
              (0, import_timm.omit)(parentValue, binding.key())
            );
          }
        }
      }
    }
  };
  var ExpNodeOpaqueIdentifier = Symbol("Expression Node ID");
  function isExpressionNode(x) {
    return typeof x === "object" && x !== null && !Array.isArray(x) && x.__id === ExpNodeOpaqueIdentifier;
  }
  var PERIOD_CODE = 46;
  var COMMA_CODE = 44;
  var SQUOTE_CODE = 39;
  var DQUOTE_CODE = 34;
  var OPAREN_CODE = 40;
  var CPAREN_CODE = 41;
  var OBRACK_CODE = 91;
  var CBRACK_CODE = 93;
  var QUMARK_CODE = 63;
  var SEMCOL_CODE = 59;
  var COLON_CODE = 58;
  var OCURL_CODE = 123;
  var CCURL_CODE = 125;
  var t = true;
  var unaryOps = { "-": t, "!": t, "~": t, "+": t };
  var binaryOps = {
    "=": 3,
    "+=": 3,
    "-=": 3,
    "&=": 3,
    "|=": 3,
    // Conditional: 4,
    "||": 5,
    "&&": 6,
    "|": 7,
    "^": 8,
    "&": 9,
    "==": 10,
    "!=": 10,
    "===": 10,
    "!==": 10,
    "<": 11,
    ">": 11,
    "<=": 11,
    ">=": 11,
    "<<": 12,
    ">>": 12,
    ">>>": 12,
    "+": 13,
    "-": 13,
    "*": 14,
    "/": 14,
    "%": 14
  };
  function throwError(message, index) {
    const err = new Error(`${message} at character ${index}`);
    err.index = index;
    err.description = message;
    throw err;
  }
  function createSpanningLocation(start, end) {
    if (!start || !end) {
      return;
    }
    return {
      start: start.start,
      end: end.end
    };
  }
  function getMaxKeyLen(obj) {
    let maxLen = 0;
    Object.keys(obj).forEach((key) => {
      if (key.length > maxLen && Object.prototype.hasOwnProperty.call(obj, key)) {
        maxLen = key.length;
      }
    });
    return maxLen;
  }
  var maxUnopLen = getMaxKeyLen(unaryOps);
  var maxBinopLen = getMaxKeyLen(binaryOps);
  var literals = {
    true: true,
    false: false,
    null: null,
    undefined: void 0
  };
  var thisStr = "this";
  function binaryPrecedence(opVal) {
    return binaryOps[opVal] || 0;
  }
  function createBinaryExpression(operator, left, right, location) {
    let type;
    if (operator === "||" || operator === "&&") {
      type = "LogicalExpression";
    } else if (operator === "=") {
      type = "Assignment";
    } else if (operator === "+=" || operator === "-=" || operator === "&=" || operator === "|=") {
      type = "Modification";
    } else {
      type = "BinaryExpression";
    }
    return {
      __id: ExpNodeOpaqueIdentifier,
      type,
      operator,
      left,
      right,
      location
    };
  }
  function isDecimalDigit(ch) {
    return ch >= 48 && ch <= 57;
  }
  function isIdentifierStart(ch) {
    return ch === 36 || ch === 95 || // `$` and `_`
    ch >= 65 && ch <= 90 || // A...Z
    ch >= 97 && ch <= 122;
  }
  function isIdentifierPart(ch) {
    return ch === 36 || ch === 95 || // `$` and `_`
    ch >= 65 && ch <= 90 || // A...Z
    ch >= 97 && ch <= 122 || // A...z
    ch >= 48 && ch <= 57;
  }
  function isModelRefStart(ch0, ch1) {
    return ch0 === OCURL_CODE && ch1 === OCURL_CODE;
  }
  function parseExpression(expr, options) {
    const strictMode = options?.strict ?? true;
    const charAtFunc = expr.charAt;
    const charCodeAtFunc = expr.charCodeAt;
    const { length } = expr;
    let index = 0;
    const getLocation = (startChar) => {
      return {
        start: {
          character: startChar
        },
        end: {
          character: index
        }
      };
    };
    function exprI(i) {
      return charAtFunc.call(expr, i);
    }
    function exprICode(i) {
      return charCodeAtFunc.call(expr, i);
    }
    function gobbleObjects() {
      const attributes = [];
      let closed = false;
      let shouldDefineKey = true;
      let key;
      let value;
      let chCode;
      const startCharIndex = index;
      ++index;
      while (index < length) {
        gobbleSpaces();
        chCode = exprICode(index);
        if (chCode === CCURL_CODE) {
          if (key) {
            throwError("A key was defined but a value was not", index);
          }
          index++;
          closed = true;
          break;
        } else if (shouldDefineKey) {
          if (chCode !== SQUOTE_CODE && chCode !== DQUOTE_CODE) {
            throwError("An object must start wtih a key", index);
          }
          key = gobbleStringLiteral();
          gobbleSpaces();
          if (exprICode(index) === COLON_CODE) {
            index++;
            shouldDefineKey = false;
          } else {
            throwError("A colon must follow an object key", index);
          }
        } else {
          value = gobbleExpression();
          attributes.push({ key, value });
          gobbleSpaces();
          chCode = exprICode(index);
          if (chCode === COMMA_CODE) {
            index++;
          } else if (chCode !== CCURL_CODE) {
            throwError("Please add a comma to add another key", index);
          }
          shouldDefineKey = true;
          key = void 0;
          value = void 0;
        }
        chCode = exprICode(index);
      }
      if (!closed) {
        throwError(`Unclosed brace in object`, index);
      }
      return {
        __id: ExpNodeOpaqueIdentifier,
        type: "Object",
        attributes,
        location: getLocation(startCharIndex)
      };
    }
    function gobbleSpaces() {
      let ch = exprICode(index);
      while (ch === 32 || ch === 9) {
        ch = exprICode(++index);
      }
    }
    function gobbleExpression() {
      const test = gobbleBinaryExpression();
      gobbleSpaces();
      const startCharIndex = index;
      if (index < length && exprICode(index) === QUMARK_CODE) {
        index++;
        const consequent = gobbleExpression();
        if (!consequent) {
          throwError("Expected expression", index);
        }
        gobbleSpaces();
        if (exprICode(index) === COLON_CODE) {
          index++;
          const alternate = gobbleExpression();
          if (!alternate) {
            throwError("Expected expression", index);
          }
          return {
            __id: ExpNodeOpaqueIdentifier,
            type: "ConditionalExpression",
            test,
            consequent,
            alternate,
            location: getLocation(startCharIndex)
          };
        }
        throwError("Expected :", index);
      }
      return test;
    }
    function gobbleBinaryOp() {
      gobbleSpaces();
      let toCheck = expr.substr(index, maxBinopLen);
      let tcLen = toCheck.length;
      while (tcLen > 0) {
        if (Object.prototype.hasOwnProperty.call(binaryOps, toCheck)) {
          index += tcLen;
          return toCheck;
        }
        toCheck = toCheck.substr(0, --tcLen);
      }
      return false;
    }
    function gobbleBinaryExpression() {
      let node;
      let prec;
      let i;
      let left = gobbleToken();
      let biop = gobbleBinaryOp();
      if (!biop) {
        return left;
      }
      let biopInfo = { value: biop, prec: binaryPrecedence(biop) };
      let right = gobbleToken();
      if (!right) {
        throwError(`Expected expression after ${biop}`, index);
      }
      const stack = [left, biopInfo, right];
      biop = gobbleBinaryOp();
      while (biop) {
        prec = binaryPrecedence(biop);
        if (prec === 0) {
          break;
        }
        biopInfo = { value: biop, prec };
        while (stack.length > 2 && prec <= stack[stack.length - 2].prec) {
          right = stack.pop();
          biop = stack.pop().value;
          left = stack.pop();
          node = createBinaryExpression(
            biop,
            left,
            right,
            createSpanningLocation(left.location, right.location)
          );
          stack.push(node);
        }
        node = gobbleToken();
        if (!node) {
          throwError(`Expected expression after ${biop}`, index);
        }
        stack.push(biopInfo, node);
        biop = gobbleBinaryOp();
      }
      i = stack.length - 1;
      node = stack[i];
      while (i > 1) {
        node = createBinaryExpression(
          stack[i - 1].value,
          stack[i - 2],
          node,
          createSpanningLocation(stack[i - 2].location, node.location)
        );
        i -= 2;
      }
      return node;
    }
    function gobbleToken() {
      gobbleSpaces();
      const ch = exprICode(index);
      const startCharIndex = index;
      if (isDecimalDigit(ch) || ch === PERIOD_CODE) {
        return gobbleNumericLiteral();
      }
      if (ch === SQUOTE_CODE || ch === DQUOTE_CODE) {
        return gobbleStringLiteral();
      }
      if (isIdentifierStart(ch) || ch === OPAREN_CODE) {
        return gobbleVariable();
      }
      if (ch === OBRACK_CODE) {
        return gobbleArray();
      }
      if (isModelRefStart(ch, exprICode(index + 1))) {
        return gobbleModelRef();
      }
      if (ch === OCURL_CODE) {
        return gobbleObjects();
      }
      let toCheck = expr.substr(index, maxUnopLen);
      let tcLen = toCheck.length;
      while (tcLen > 0) {
        if (Object.prototype.hasOwnProperty.call(unaryOps, toCheck)) {
          index += tcLen;
          return {
            __id: ExpNodeOpaqueIdentifier,
            type: "UnaryExpression",
            operator: toCheck,
            argument: gobbleToken(),
            prefix: true,
            location: getLocation(startCharIndex)
          };
        }
        toCheck = toCheck.substr(0, --tcLen);
      }
      return false;
    }
    function gobbleNumericLiteral() {
      let num = "";
      const startCharIndex = index;
      while (isDecimalDigit(exprICode(index))) {
        num += exprI(index++);
      }
      if (exprICode(index) === PERIOD_CODE) {
        num += exprI(index++);
        while (isDecimalDigit(exprICode(index))) {
          num += exprI(index++);
        }
      }
      let ch = exprI(index);
      if (ch === "e" || ch === "E") {
        num += exprI(index++);
        ch = exprI(index);
        if (ch === "+" || ch === "-") {
          num += exprI(index++);
        }
        while (isDecimalDigit(exprICode(index))) {
          num += exprI(index++);
        }
        if (!isDecimalDigit(exprICode(index - 1))) {
          throwError(`Expected exponent (${num}${exprI(index)})`, index);
        }
      }
      const chCode = exprICode(index);
      if (isIdentifierStart(chCode)) {
        throwError(
          `Variable names cannot start with a number (${num}${exprI(index)})`,
          index
        );
      } else if (chCode === PERIOD_CODE) {
        throwError("Unexpected period", index);
      }
      return {
        __id: ExpNodeOpaqueIdentifier,
        type: "Literal",
        value: parseFloat(num),
        raw: num,
        location: getLocation(startCharIndex)
      };
    }
    function gobbleStringLiteral() {
      const quote = exprI(index++);
      let str = "";
      let closed = false;
      const startCharIndex = index;
      while (index < length) {
        let ch = exprI(index++);
        if (ch === quote) {
          closed = true;
          break;
        }
        if (ch !== "\\") {
          str += ch;
          continue;
        }
        ch = exprI(index++);
        switch (ch) {
          case "n":
            str += "\n";
            break;
          case "r":
            str += "\r";
            break;
          case "t":
            str += "	";
            break;
          case "b":
            str += "\b";
            break;
          case "f":
            str += "\f";
            break;
          case "v":
            str += "\v";
            break;
          default:
        }
      }
      if (!closed) {
        throwError(`Unclosed quote after "${str}"`, index);
      }
      return {
        __id: ExpNodeOpaqueIdentifier,
        type: "Literal",
        value: str,
        raw: `${quote}${str}${quote}`,
        location: getLocation(startCharIndex)
      };
    }
    function gobbleModelRef() {
      let str = "";
      let closed = false;
      let openBraceCount = 1;
      const startCharIndex = index;
      index += 2;
      while (index < length) {
        const ch = exprI(index++);
        if (ch === "}" && exprICode(index) === CCURL_CODE) {
          index++;
          openBraceCount--;
          if (openBraceCount === 0) {
            closed = true;
            break;
          }
          str += "}}";
        } else if (ch === "{" && exprICode(index) === OCURL_CODE) {
          openBraceCount++;
          str += "{{";
          index++;
        } else {
          str += ch;
        }
      }
      if (!closed) {
        throwError(`Unclosed brace after "${str}"`, index);
      }
      return {
        __id: ExpNodeOpaqueIdentifier,
        type: "ModelRef",
        ref: str,
        location: getLocation(startCharIndex)
      };
    }
    function gobbleIdentifier() {
      const start = index;
      let ch = exprICode(start);
      if (isIdentifierStart(ch)) {
        index++;
      } else {
        throwError(`Unexpected ${exprI(index)}`, index);
      }
      while (index < length) {
        ch = exprICode(index);
        if (isIdentifierPart(ch)) {
          index++;
        } else {
          break;
        }
      }
      const identifier2 = expr.slice(start, index);
      if (Object.prototype.hasOwnProperty.call(literals, identifier2)) {
        return {
          __id: ExpNodeOpaqueIdentifier,
          type: "Literal",
          value: literals[identifier2],
          raw: identifier2,
          location: getLocation(start)
        };
      }
      if (identifier2 === thisStr) {
        return {
          __id: ExpNodeOpaqueIdentifier,
          type: "ThisExpression",
          location: getLocation(start)
        };
      }
      return {
        __id: ExpNodeOpaqueIdentifier,
        type: "Identifier",
        name: identifier2,
        location: getLocation(start)
      };
    }
    function gobbleArguments(termination) {
      const args = [];
      let charIndex;
      let node;
      while (index < length) {
        gobbleSpaces();
        charIndex = exprICode(index);
        if (charIndex === termination) {
          index++;
          break;
        }
        if (charIndex === COMMA_CODE) {
          index++;
          continue;
        }
        node = gobbleExpression();
        if (!node || node.type === "Compound") {
          throwError("Expected comma", index);
        }
        args.push(node);
      }
      if (strictMode && charIndex !== termination) {
        throwError(`Expected ${String.fromCharCode(termination)}`, index);
      }
      return args;
    }
    function gobbleVariable() {
      let charIndex = exprICode(index);
      let node = charIndex === OPAREN_CODE ? gobbleGroup() : gobbleIdentifier();
      const startCharIndex = index;
      gobbleSpaces();
      charIndex = exprICode(index);
      while (charIndex === PERIOD_CODE || charIndex === OBRACK_CODE || charIndex === OPAREN_CODE) {
        index++;
        if (charIndex === PERIOD_CODE) {
          gobbleSpaces();
          node = {
            __id: ExpNodeOpaqueIdentifier,
            type: "MemberExpression",
            computed: false,
            object: node,
            property: gobbleIdentifier(),
            location: getLocation(startCharIndex)
          };
        } else if (charIndex === OBRACK_CODE) {
          node = {
            __id: ExpNodeOpaqueIdentifier,
            type: "MemberExpression",
            computed: true,
            object: node,
            property: gobbleExpression(),
            location: getLocation(startCharIndex)
          };
          gobbleSpaces();
          charIndex = exprICode(index);
          if (charIndex !== CBRACK_CODE) {
            throwError("Unclosed [", index);
          }
          index++;
        } else if (charIndex === OPAREN_CODE) {
          node = {
            __id: ExpNodeOpaqueIdentifier,
            type: "CallExpression",
            args: gobbleArguments(CPAREN_CODE),
            callTarget: node,
            location: getLocation(startCharIndex)
          };
        }
        gobbleSpaces();
        charIndex = exprICode(index);
      }
      return node;
    }
    function gobbleGroup() {
      index++;
      const node = gobbleExpression();
      gobbleSpaces();
      if (exprICode(index) === CPAREN_CODE) {
        index++;
        return node;
      }
      throwError("Unclosed (", index);
    }
    function gobbleArray() {
      const startCharIndex = index;
      index++;
      return {
        __id: ExpNodeOpaqueIdentifier,
        type: "ArrayExpression",
        elements: gobbleArguments(CBRACK_CODE),
        location: getLocation(startCharIndex)
      };
    }
    const nodes = [];
    try {
      while (index < length) {
        const chIndex = exprICode(index);
        if (chIndex === SEMCOL_CODE || chIndex === COMMA_CODE) {
          index++;
          continue;
        }
        const node = gobbleExpression();
        if (node) {
          nodes.push(node);
        } else if (strictMode && index < length) {
          throwError(`Unexpected "${exprI(index)}"`, index);
        }
      }
      if (nodes.length === 1) {
        return nodes[0];
      }
      return {
        __id: ExpNodeOpaqueIdentifier,
        type: "Compound",
        body: nodes,
        location: getLocation(0)
      };
    } catch (e) {
      if (strictMode || !(e instanceof Error)) {
        throw e;
      }
      return {
        __id: ExpNodeOpaqueIdentifier,
        type: "Compound",
        body: nodes,
        location: getLocation(0),
        error: e
      };
    }
  }
  var evaluator_functions_exports = {};
  __export2(evaluator_functions_exports, {
    conditional: () => conditional,
    deleteDataVal: () => deleteDataVal,
    getDataVal: () => getDataVal,
    setDataVal: () => setDataVal
  });
  var setDataVal = (_context, binding, value) => {
    _context.model.set([[binding, value]]);
  };
  var getDataVal = (_context, binding) => {
    return _context.model.get(binding);
  };
  var deleteDataVal = (_context, binding) => {
    return _context.model.delete(binding);
  };
  var conditional = (ctx, condition, ifTrue, ifFalse) => {
    const resolution = ctx.evaluate(condition);
    if (resolution) {
      return ctx.evaluate(ifTrue);
    }
    if (ifFalse) {
      return ctx.evaluate(ifFalse);
    }
    return null;
  };
  conditional.resolveParams = false;
  function isObjectExpression(expr) {
    if (isExpressionNode(expr)) {
      return false;
    }
    return typeof expr === "object" && expr !== null && !Array.isArray(expr) && "value" in expr;
  }
  var andandOperator = (ctx, a, b) => {
    return ctx.evaluate(a) && ctx.evaluate(b);
  };
  andandOperator.resolveParams = false;
  var ororOperator = (ctx, a, b) => {
    return ctx.evaluate(a) || ctx.evaluate(b);
  };
  ororOperator.resolveParams = false;
  var DEFAULT_BINARY_OPERATORS = {
    // TODO: A lot of these functions used to do type coercion. Not sure if we want to keep that behavior or not.
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "%": (a, b) => a % b,
    // eslint-disable-next-line
    "==": (a, b) => a == b,
    // eslint-disable-next-line
    "!=": (a, b) => a != b,
    ">": (a, b) => a > b,
    ">=": (a, b) => a >= b,
    "<": (a, b) => a < b,
    "<=": (a, b) => a <= b,
    "&&": andandOperator,
    "||": ororOperator,
    "!==": (a, b) => a !== b,
    "===": (a, b) => a === b,
    // eslint-disable-next-line
    "|": (a, b) => a | b,
    // eslint-disable-next-line
    "&": (a, b) => a & b,
    "+=": (a, b) => a + b,
    "-=": (a, b) => a - b,
    // eslint-disable-next-line
    "&=": (a, b) => a & b,
    // eslint-disable-next-line
    "|=": (a, b) => a | b
  };
  var DEFAULT_UNARY_OPERATORS = {
    "-": (a) => -a,
    "+": (a) => Number(a),
    "!": (a) => !a
  };
  var ExpressionEvaluator = class {
    constructor(defaultOptions) {
      this.vars = {};
      this.hooks = {
        /** Resolve an AST node for an expression to a value */
        resolve: new SyncWaterfallHook(),
        /** Gets the options that will be passed in calls to the resolve hook */
        resolveOptions: new SyncWaterfallHook(),
        /** Allows users to change the expression to be evaluated before processing */
        beforeEvaluate: new SyncWaterfallHook(),
        /**
         * An optional means of handling an error in the expression execution
         * Return true if handled, to stop propagation of the error
         */
        onError: new SyncBailHook()
      };
      this.expressionsCache = /* @__PURE__ */ new Map();
      this.operators = {
        binary: new Map(Object.entries(DEFAULT_BINARY_OPERATORS)),
        unary: new Map(Object.entries(DEFAULT_UNARY_OPERATORS)),
        expressions: new Map(
          Object.entries(evaluator_functions_exports)
        )
      };
      this.defaultHookOptions = {
        ...defaultOptions,
        evaluate: (expr) => this.evaluate(expr, this.defaultHookOptions),
        resolveNode: (node) => this._execAST(node, this.defaultHookOptions)
      };
      this.hooks.resolve.tap("ExpressionEvaluator", this._resolveNode.bind(this));
      this.evaluate = this.evaluate.bind(this);
    }
    reset() {
      this.expressionsCache.clear();
    }
    evaluate(expr, options) {
      const resolvedOpts = this.hooks.resolveOptions.call({
        ...this.defaultHookOptions,
        ...options,
        resolveNode: (node) => this._execAST(node, resolvedOpts)
      });
      let expression = this.hooks.beforeEvaluate.call(expr, resolvedOpts) ?? expr;
      while (isObjectExpression(expression)) {
        expression = expression.value;
      }
      if (typeof expression === "number" || typeof expression === "boolean" || expression === void 0 || expression === null) {
        return expression;
      }
      if (isExpressionNode(expression)) {
        return this._execAST(expression, resolvedOpts);
      }
      if (Array.isArray(expression)) {
        return expression.reduce(
          (_nothing, exp) => this.evaluate(exp, options),
          null
        );
      }
      return this._execString(String(expression), resolvedOpts);
    }
    addExpressionFunction(name, handler) {
      this.operators.expressions.set(name, handler);
    }
    addBinaryOperator(operator, handler) {
      this.operators.binary.set(operator, handler);
    }
    addUnaryOperator(operator, handler) {
      this.operators.unary.set(operator, handler);
    }
    setExpressionVariable(name, value) {
      this.vars[name] = value;
    }
    getExpressionVariable(name) {
      return this.vars[name];
    }
    _execAST(node, options) {
      return this.hooks.resolve.call(void 0, node, options);
    }
    _execString(exp, options) {
      if (exp === "") {
        return exp;
      }
      const matches = exp.match(/^@\[(.*)\]@$/);
      let matchedExp = exp;
      if (matches) {
        [, matchedExp] = Array.from(matches);
      }
      let storedAST;
      try {
        storedAST = this.expressionsCache.get(matchedExp) ?? parseExpression(matchedExp, { strict: options.strict });
        this.expressionsCache.set(matchedExp, storedAST);
      } catch (e) {
        if (options.throwErrors || !this.hooks.onError.call(e)) {
          throw new import_ts_nested_error3.NestedError(`Error parsing expression: ${exp}`, e);
        }
        return;
      }
      try {
        return this._execAST(storedAST, options);
      } catch (e) {
        if (options.throwErrors || !this.hooks.onError.call(e)) {
          throw new import_ts_nested_error3.NestedError(`Error evaluating expression: ${exp}`, e);
        }
      }
    }
    _resolveNode(_currentValue, node, options) {
      const { resolveNode, model } = options;
      const expressionContext = {
        ...options,
        evaluate: (expr) => this.evaluate(expr, options)
      };
      if (node.type === "Literal") {
        return node.value;
      }
      if (node.type === "Identifier") {
        return this.vars[node.name];
      }
      if (node.type === "Compound" || node.type === "ThisExpression") {
        throw new Error(`Expression type: ${node.type} is not supported`);
      }
      if (node.type === "BinaryExpression" || node.type === "LogicalExpression") {
        const operator = this.operators.binary.get(node.operator);
        if (operator) {
          if ("resolveParams" in operator) {
            if (operator.resolveParams === false) {
              return operator(expressionContext, node.left, node.right);
            }
            return operator(
              expressionContext,
              resolveNode(node.left),
              resolveNode(node.right)
            );
          }
          return operator(resolveNode(node.left), resolveNode(node.right));
        }
        return;
      }
      if (node.type === "UnaryExpression") {
        const operator = this.operators.unary.get(node.operator);
        if (operator) {
          if ("resolveParams" in operator) {
            return operator(
              expressionContext,
              operator.resolveParams === false ? node.argument : resolveNode(node.argument)
            );
          }
          return operator(resolveNode(node.argument));
        }
        return;
      }
      if (node.type === "Object") {
        const { attributes } = node;
        const resolvedAttributes = {};
        attributes.forEach((attr) => {
          const key = resolveNode(attr.key);
          const value = resolveNode(attr.value);
          resolvedAttributes[key] = value;
        });
        return resolvedAttributes;
      }
      if (node.type === "CallExpression") {
        const expressionName = node.callTarget.name;
        const operator = this.operators.expressions.get(expressionName);
        if (!operator) {
          throw new Error(`Unknown expression function: ${expressionName}`);
        }
        if ("resolveParams" in operator && operator.resolveParams === false) {
          return operator(expressionContext, ...node.args);
        }
        const args = node.args.map((n) => resolveNode(n));
        return operator(expressionContext, ...args);
      }
      if (node.type === "ModelRef") {
        return model.get(node.ref, { context: { model: options.model } });
      }
      if (node.type === "MemberExpression") {
        const obj = resolveNode(node.object);
        const prop = resolveNode(node.property);
        return obj[prop];
      }
      if (node.type === "Assignment") {
        if (node.left.type === "ModelRef") {
          const value = resolveNode(node.right);
          model.set([[node.left.ref, value]]);
          return value;
        }
        if (node.left.type === "Identifier") {
          const value = resolveNode(node.right);
          this.vars[node.left.name] = value;
          return value;
        }
        return;
      }
      if (node.type === "ConditionalExpression") {
        const result = resolveNode(node.test) ? node.consequent : node.alternate;
        return resolveNode(result);
      }
      if (node.type === "ArrayExpression") {
        return node.elements.map((ele) => resolveNode(ele));
      }
      if (node.type === "Modification") {
        const operation = this.operators.binary.get(node.operator);
        if (operation) {
          let newValue;
          if ("resolveParams" in operation) {
            if (operation.resolveParams === false) {
              newValue = operation(expressionContext, node.left, node.right);
            } else {
              newValue = operation(
                expressionContext,
                resolveNode(node.left),
                resolveNode(node.right)
              );
            }
          } else {
            newValue = operation(resolveNode(node.left), resolveNode(node.right));
          }
          if (node.left.type === "ModelRef") {
            model.set([[node.left.ref, newValue]]);
          } else if (node.left.type === "Identifier") {
            this.vars[node.left.name] = newValue;
          }
          return newValue;
        }
        return resolveNode(node.left);
      }
    }
  };
  var TapableLogger = class {
    constructor() {
      this.hooks = {
        trace: new SyncHook(),
        debug: new SyncHook(),
        info: new SyncHook(),
        warn: new SyncHook(),
        error: new SyncHook(),
        log: new SyncHook()
      };
      this.logHandlers = /* @__PURE__ */ new Set();
      this.trace = this.createHandler("trace");
      this.debug = this.createHandler("debug");
      this.info = this.createHandler("info");
      this.warn = this.createHandler("warn");
      this.error = this.createHandler("error");
    }
    createHandler(severity) {
      return (...args) => {
        this.hooks[severity].call(args);
        this.hooks.log.call(severity, args);
        this.logHandlers.forEach((logger) => logger[severity](...args));
      };
    }
    addHandler(logHandler) {
      this.logHandlers.add(logHandler);
    }
    removeHandler(logHandler) {
      this.logHandlers.delete(logHandler);
    }
  };
  var ProxyLogger = class {
    constructor(loggerProvider) {
      this.trace = this.createHandler("trace");
      this.debug = this.createHandler("debug");
      this.info = this.createHandler("info");
      this.warn = this.createHandler("warn");
      this.error = this.createHandler("error");
      this.proxiedLoggerProvider = loggerProvider;
    }
    createHandler(severity) {
      return (...args) => {
        const logger = this.proxiedLoggerProvider();
        logger?.[severity](...args);
      };
    }
  };
  var identify = (val) => val;
  function parse4(schema) {
    const expandedPaths = /* @__PURE__ */ new Map();
    if (!schema.ROOT) {
      return expandedPaths;
    }
    const parseQueue = [{ node: schema.ROOT, path: [], visited: /* @__PURE__ */ new Set() }];
    while (parseQueue.length > 0) {
      const next = parseQueue.shift();
      if (!next) {
        break;
      }
      const { node, path: path2, visited } = next;
      Object.entries(node).forEach(([prop, type]) => {
        const nestedPath2 = [...path2, prop];
        const nestedPathStr = nestedPath2.join(".");
        if (expandedPaths.has(nestedPathStr)) {
          throw new Error(
            "Path has already been processed. There's either a loop somewhere or a bug"
          );
        }
        if (visited.has(type.type)) {
          throw new Error(
            `Path already contained type: ${type.type}. This likely indicates a loop in the schema`
          );
        }
        expandedPaths.set(nestedPathStr, type);
        if (type.isArray) {
          nestedPath2.push("[]");
        }
        if (type.isRecord) {
          nestedPath2.push("{}");
        }
        if (type.type && schema[type.type]) {
          parseQueue.push({
            path: nestedPath2,
            node: schema[type.type],
            visited: /* @__PURE__ */ new Set([...visited, type.type])
          });
        }
      });
    }
    return expandedPaths;
  }
  var SchemaController = class {
    constructor(schema) {
      this.formatters = /* @__PURE__ */ new Map();
      this.types = /* @__PURE__ */ new Map();
      this.schema = /* @__PURE__ */ new Map();
      this.bindingSchemaNormalizedCache = /* @__PURE__ */ new Map();
      this.hooks = {
        resolveTypeForBinding: new SyncWaterfallHook()
      };
      this.schema = schema ? parse4(schema) : /* @__PURE__ */ new Map();
    }
    addFormatters(fns) {
      fns.forEach((def) => {
        this.formatters.set(def.name, def);
      });
    }
    addDataTypes(types) {
      types.forEach((t2) => {
        this.types.set(t2.type, t2);
      });
    }
    getValidationsForBinding(binding) {
      const typeDef = this.getApparentType(binding);
      if (!typeDef?.validation?.length) {
        return void 0;
      }
      return typeDef.validation.map((vRef) => ({
        severity: "error",
        trigger: "change",
        ...vRef
      }));
    }
    normalizeBinding(binding) {
      const cached = this.bindingSchemaNormalizedCache.get(binding);
      if (cached) {
        return cached;
      }
      let bindingArray = binding.asArray();
      let normalized = bindingArray.map((p) => typeof p === "number" ? "[]" : p).join(".");
      if (normalized) {
        this.bindingSchemaNormalizedCache.set(binding, normalized);
        bindingArray = normalized.split(".");
      }
      bindingArray.forEach((item) => {
        const recordBinding = bindingArray.map((p) => p === item ? "{}" : p).join(".");
        if (this.schema.get(recordBinding)) {
          this.bindingSchemaNormalizedCache.set(binding, recordBinding);
          bindingArray = recordBinding.split(".");
          normalized = recordBinding;
        }
      });
      return normalized;
    }
    getType(binding) {
      return this.hooks.resolveTypeForBinding.call(
        this.schema.get(this.normalizeBinding(binding)),
        binding
      );
    }
    getApparentType(binding) {
      const schemaType = this.getType(binding);
      if (schemaType === void 0) {
        return void 0;
      }
      const baseType = this.getTypeDefinition(schemaType?.type);
      if (baseType === void 0) {
        return schemaType;
      }
      return {
        ...baseType,
        ...schemaType,
        validation: [
          ...schemaType.validation ?? [],
          ...baseType.validation ?? []
        ]
      };
    }
    getTypeDefinition(dataType) {
      return this.types.get(dataType);
    }
    getFormatterForType(formatReference) {
      const { type: formatType, ...options } = formatReference;
      const formatter = this.formatters.get(formatType);
      if (!formatter) {
        return;
      }
      return {
        format: formatter.format ? (val) => formatter.format?.(val, options) : identify,
        deformat: formatter.deformat ? (val) => formatter.deformat?.(val, options) : identify
      };
    }
    /**
     * Given a binding, fetch a function that's responsible for formatting, and/or de-formatting the data
     * If no formatter is registered, it will return undefined
     */
    getFormatter(binding) {
      const type = this.getApparentType(binding);
      if (!type?.format) {
        return void 0;
      }
      return this.getFormatterForType(type.format);
    }
  };
  var DOUBLE_OPEN_CURLY = "{{";
  var DOUBLE_CLOSE_CURLY = "}}";
  function findNextExp(str) {
    const expStart = str.indexOf(DOUBLE_OPEN_CURLY);
    if (expStart === -1) {
      return void 0;
    }
    let count = 1;
    let offset = expStart + DOUBLE_OPEN_CURLY.length;
    let workingString = str.substring(expStart + DOUBLE_OPEN_CURLY.length);
    while (count > 0 && workingString.length > 0) {
      const nextCloseCurly = workingString.indexOf(DOUBLE_CLOSE_CURLY);
      if (nextCloseCurly === -1) {
        break;
      }
      const nextOpenCurly = workingString.indexOf(DOUBLE_OPEN_CURLY);
      if (nextOpenCurly !== -1 && nextOpenCurly < nextCloseCurly) {
        count++;
        workingString = workingString.substring(
          nextOpenCurly + DOUBLE_OPEN_CURLY.length
        );
        offset += nextOpenCurly + DOUBLE_OPEN_CURLY.length;
      } else {
        count--;
        workingString = workingString.substring(
          nextCloseCurly + DOUBLE_CLOSE_CURLY.length
        );
        offset += nextCloseCurly + DOUBLE_CLOSE_CURLY.length;
      }
    }
    if (count !== 0) {
      throw new Error(`Unbalanced {{ and }} in exp: ${str}`);
    }
    return {
      start: expStart,
      end: offset
    };
  }
  function resolveExpressionsInString(val, { evaluate }) {
    if (!evaluate) {
      return val;
    }
    const expMatch = /@\[.*?\]@/;
    let newVal = val;
    let match = newVal.match(expMatch);
    while (match !== null) {
      const expStrWithBrackets = match[0];
      const matchStart = newVal.indexOf(expStrWithBrackets);
      const expString = expStrWithBrackets.substr(
        "@[".length,
        expStrWithBrackets.length - "@[".length - "]@".length
      );
      const expValue = evaluate(expString);
      if (matchStart === 0 && expStrWithBrackets === val && typeof expValue !== "string") {
        return expValue;
      }
      newVal = newVal.substr(0, matchStart) + expValue + newVal.substr(matchStart + expStrWithBrackets.length);
      match = newVal.match(expMatch);
    }
    return newVal;
  }
  function resolveDataRefsInString(val, options) {
    const { model, formatted = true } = options;
    let workingString = resolveExpressionsInString(val, options);
    if (!model || typeof workingString !== "string" || workingString.indexOf(DOUBLE_OPEN_CURLY) === -1) {
      return workingString;
    }
    while (workingString.indexOf(DOUBLE_OPEN_CURLY) !== -1) {
      const expLocation = findNextExp(workingString);
      if (!expLocation) {
        return workingString;
      }
      const { start, end } = expLocation;
      const binding = workingString.substring(
        start + DOUBLE_OPEN_CURLY.length,
        end - DOUBLE_OPEN_CURLY.length
      ).trim();
      const evaledVal = model.get(binding, { formatted });
      if (start === 0 && end === workingString.length && typeof evaledVal !== "string") {
        return evaledVal;
      }
      workingString = workingString.substr(0, start) + evaledVal + workingString.substr(end);
    }
    return workingString;
  }
  function traverseObject(val, options) {
    switch (typeof val) {
      case "string": {
        return resolveDataRefsInString(val, options);
      }
      case "object": {
        if (!val)
          return val;
        const keys = Object.keys(val);
        let newVal = val;
        if (keys.length > 0) {
          keys.forEach((key) => {
            newVal = (0, import_timm2.setIn)(
              newVal,
              [key],
              traverseObject(val[key], options)
            );
          });
        }
        return newVal;
      }
      default:
        return val;
    }
  }
  function resolveDataRefs(val, options) {
    return traverseObject(val, options);
  }
  function removeBindingAndChildrenFromMap(sourceMap, binding) {
    const targetMap = new Map(sourceMap);
    const parentBinding = binding.parent();
    const property = binding.key();
    targetMap.forEach((_value, trackedBinding) => {
      if (binding === trackedBinding || binding.contains(trackedBinding)) {
        targetMap.delete(trackedBinding);
      }
    });
    if (typeof property === "number") {
      const bindingsToRewrite = Array.from(sourceMap.keys()).filter((b) => {
        if (parentBinding.contains(b)) {
          const [childIndex] = b.relative(parentBinding);
          return typeof childIndex === "number" && childIndex > property;
        }
        return false;
      }).sort();
      bindingsToRewrite.forEach((trackedBinding) => {
        const [childIndex, ...childPath] = trackedBinding.relative(parentBinding);
        if (typeof childIndex === "number") {
          const newSegments = [childIndex - 1, ...childPath];
          const newChildBinding = parentBinding.descendent(newSegments);
          targetMap.set(newChildBinding, targetMap.get(trackedBinding));
          targetMap.delete(trackedBinding);
        }
      });
    }
    return targetMap;
  }
  var ValidationMiddleware = class {
    constructor(validator, options) {
      this.validator = validator;
      this.shadowModelPaths = /* @__PURE__ */ new Map();
      this.logger = options?.logger;
      this.shouldIncludeInvalid = options?.shouldIncludeInvalid;
    }
    set(transaction, options, next) {
      const asModel = toModel(this, { ...options, includeInvalid: true }, next);
      const nextTransaction = [];
      const includedBindings = /* @__PURE__ */ new Set();
      transaction.forEach(([binding, value]) => {
        this.shadowModelPaths.set(binding, value);
        includedBindings.add(binding);
      });
      const invalidBindings = [];
      this.shadowModelPaths.forEach((value, binding) => {
        const validations = this.validator(binding, asModel);
        if (validations === void 0) {
          nextTransaction.push([binding, value]);
        } else if (validations instanceof Set) {
          validations.forEach((validation) => {
            invalidBindings.push(validation.binding);
            if (!validation.isStrong && validation.binding.asString() === binding.asString()) {
              nextTransaction.push([validation.binding, value]);
            }
          });
        } else if (includedBindings.has(binding)) {
          invalidBindings.push(binding);
          this.logger?.debug(
            `Invalid value for path: ${binding.asString()} - ${validations.severity} - ${validations.message}`
          );
        }
      });
      let validResults = [];
      if (next && nextTransaction.length > 0) {
        nextTransaction.forEach(
          ([binding]) => this.shadowModelPaths.delete(binding)
        );
        const result = next.set(nextTransaction, options);
        if (invalidBindings.length === 0) {
          return result;
        }
        validResults = result;
      }
      const invalidResults = invalidBindings.map((binding) => {
        return {
          binding,
          oldValue: asModel.get(binding),
          newValue: asModel.get(binding),
          force: true
        };
      });
      return [...validResults, ...invalidResults];
    }
    get(binding, options, next) {
      let val = next?.get(binding, options);
      if (this.shouldIncludeInvalid?.(options) ?? options?.includeInvalid === true) {
        this.shadowModelPaths.forEach((shadowValue, shadowBinding) => {
          if (shadowBinding === binding) {
            val = shadowValue;
            return;
          }
          if (binding.contains(shadowBinding)) {
            val = (0, import_timm3.setIn)(val, shadowBinding.relative(binding), shadowValue);
          }
        });
      }
      return val;
    }
    delete(binding, options, next) {
      this.shadowModelPaths = removeBindingAndChildrenFromMap(
        this.shadowModelPaths,
        binding
      );
      return next?.delete(binding, options);
    }
  };
  var ValidatorRegistry = class {
    constructor() {
      this.registry = /* @__PURE__ */ new Map();
    }
    /** Use the given validator name to fetch the handler */
    get(name) {
      return this.registry.get(name);
    }
    /** Register a new validator */
    register(name, handler) {
      this.registry.set(name, handler);
    }
  };
  function hasAsync(obj) {
    return Object.prototype.hasOwnProperty.call(obj, "async");
  }
  function getNodeID(node) {
    if (!node) {
      return;
    }
    if ("value" in node && typeof node.value === "object" && typeof node.value?.id === "string") {
      return node.value.id;
    }
  }
  var EMPTY_NODE = {
    type: "empty"
    /* Empty */
  };
  var Parser = class {
    constructor() {
      this.hooks = {
        /**
         * A hook to interact with an object _before_ parsing it into an AST
         *
         * @param value - The object we're are about to parse
         * @returns - A new value to parse.
         *  If undefined, the original value is used.
         *  If null, we stop parsing this node.
         */
        onParseObject: new SyncWaterfallHook(),
        /**
         * A callback to interact with an AST _after_ we parse it into the AST
         *
         * @param value - The object we parsed
         * @param node - The AST node we generated
         * @returns - A new AST node to use
         *   If undefined, the original value is used.
         *   If null, we ignore this node all together
         */
        onCreateASTNode: new SyncWaterfallHook(),
        determineNodeType: new SyncBailHook(),
        parseNode: new SyncBailHook()
      };
    }
    parseView(value) {
      const viewNode = this.parseObject(
        value,
        "view"
        /* View */
      );
      if (!viewNode) {
        throw new Error("Unable to parse object into a view");
      }
      return viewNode;
    }
    parseAsync(obj, type, options) {
      const parsedAsync = this.parseObject((0, import_timm5.omit)(obj, "async"), type, options);
      const parsedNodeId = getNodeID(parsedAsync);
      if (parsedAsync !== null && parsedNodeId) {
        return this.createASTNode(
          {
            id: parsedNodeId,
            type: "async",
            value: parsedAsync
          },
          obj
        );
      }
      return null;
    }
    createASTNode(node, value) {
      const tapped = this.hooks.onCreateASTNode.call(node, value);
      if (tapped === void 0) {
        return node;
      }
      return tapped;
    }
    /**
     * Checks if there are templated values in the object
     *
     * @param obj - The Parsed Object to check to see if we have a template array type for
     * @param localKey - The key being checked
     */
    hasTemplateValues(obj, localKey) {
      return Object.hasOwnProperty.call(obj, "template") && Array.isArray(obj?.template) && obj.template.length && obj.template.find((tmpl) => tmpl.output === localKey);
    }
    parseObject(obj, type = "value", options = { templateDepth: 0 }) {
      const nodeType = this.hooks.determineNodeType.call(obj);
      if (nodeType !== void 0) {
        const parsedNode = this.hooks.parseNode.call(
          obj,
          type,
          options,
          nodeType
        );
        if (parsedNode) {
          return parsedNode;
        }
      }
      const parseLocalObject = (currentValue, objToParse, path2 = []) => {
        if (typeof objToParse !== "object" || objToParse === null) {
          return { value: objToParse, children: [] };
        }
        const localObj = this.hooks.onParseObject.call(objToParse, type);
        if (!localObj) {
          return currentValue;
        }
        const objEntries = Array.isArray(localObj) ? localObj.map((v, i) => [i, v]) : [
          ...Object.entries(localObj),
          ...Object.getOwnPropertySymbols(localObj).map((s) => [
            s,
            localObj[s]
          ])
        ];
        const defaultValue = {
          children: [],
          value: currentValue
        };
        const newValue = objEntries.reduce((accumulation, current) => {
          const { children: children2, ...rest } = accumulation;
          const [localKey, localValue] = current;
          if (localKey === "asset" && typeof localValue === "object") {
            const assetAST = this.parseObject(
              localValue,
              "asset",
              options
            );
            if (assetAST) {
              return {
                ...rest,
                children: [
                  ...children2,
                  {
                    path: [...path2, "asset"],
                    value: assetAST
                  }
                ]
              };
            }
          } else if (this.hooks.determineNodeType.call(localKey) === "template" && Array.isArray(localValue)) {
            const templateChildren = localValue.map((template) => {
              const templateAST = this.hooks.onCreateASTNode.call(
                {
                  type: "template",
                  depth: options.templateDepth ?? 0,
                  data: template.data,
                  template: template.value,
                  dynamic: template.dynamic ?? false
                },
                template
              );
              if (templateAST?.type === "multi-node") {
                templateAST.values.forEach((v) => {
                  v.parent = templateAST;
                });
              }
              if (templateAST) {
                return {
                  path: [...path2, template.output],
                  value: templateAST
                };
              }
              return;
            }).filter((element) => !!element);
            return {
              ...rest,
              children: [...children2, ...templateChildren]
            };
          } else if (localValue && this.hooks.determineNodeType.call(localValue) === "switch") {
            const localSwitch = this.hooks.parseNode.call(
              localValue,
              "value",
              options,
              "switch"
              /* Switch */
            );
            if (localSwitch && localSwitch.type === "value" && localSwitch.children?.length === 1 && localSwitch.value === void 0) {
              const firstChild = localSwitch.children[0];
              return {
                ...rest,
                children: [
                  ...children2,
                  {
                    path: [...path2, localKey, ...firstChild.path],
                    value: firstChild.value
                  }
                ]
              };
            }
            if (localSwitch) {
              return {
                ...rest,
                children: [
                  ...children2,
                  {
                    path: [...path2, localKey],
                    value: localSwitch
                  }
                ]
              };
            }
          } else if (localValue && hasAsync(localValue)) {
            const localAsync = this.parseAsync(
              localValue,
              "value",
              options
            );
            if (localAsync) {
              children2.push({
                path: [...path2, localKey],
                value: localAsync
              });
            }
          } else if (localValue && Array.isArray(localValue)) {
            const childValues = localValue.map(
              (childVal) => this.parseObject(childVal, "value", options)
            ).filter((child) => !!child);
            if (childValues.length > 0) {
              const multiNode = this.hooks.onCreateASTNode.call(
                {
                  type: "multi-node",
                  override: !this.hasTemplateValues(localObj, localKey),
                  values: childValues
                },
                localValue
              );
              if (multiNode?.type === "multi-node") {
                multiNode.values.forEach((v) => {
                  v.parent = multiNode;
                });
              }
              if (multiNode) {
                return {
                  ...rest,
                  children: [
                    ...children2,
                    {
                      path: [...path2, localKey],
                      value: multiNode
                    }
                  ]
                };
              }
            }
          } else if (localValue && typeof localValue === "object") {
            const determineNodeType = this.hooks.determineNodeType.call(localValue);
            if (determineNodeType === "applicability") {
              const parsedNode = this.hooks.parseNode.call(
                localValue,
                "value",
                options,
                determineNodeType
              );
              if (parsedNode) {
                return {
                  ...rest,
                  children: [
                    ...children2,
                    {
                      path: [...path2, localKey],
                      value: parsedNode
                    }
                  ]
                };
              }
            } else {
              const result = parseLocalObject(accumulation.value, localValue, [
                ...path2,
                localKey
              ]);
              return {
                value: result.value,
                children: [...children2, ...result.children]
              };
            }
          } else {
            const value2 = (0, import_timm5.setIn)(
              accumulation.value,
              [...path2, localKey],
              localValue
            );
            return {
              children: children2,
              value: value2
            };
          }
          return accumulation;
        }, defaultValue);
        return newValue;
      };
      const { value, children } = parseLocalObject(void 0, obj);
      const baseAst = value === void 0 && children.length === 0 ? void 0 : {
        type,
        value
      };
      if (baseAst !== void 0 && children.length > 0) {
        const parent = baseAst;
        parent.children = children;
        children.forEach((child) => {
          child.value.parent = parent;
        });
      }
      return this.hooks.onCreateASTNode.call(baseAst, obj) ?? null;
    }
  };
  function caresAboutDataChanges(dataChanges, dependencies) {
    if (!dataChanges || !dependencies) {
      return true;
    }
    const depArray = Array.from(dependencies.values());
    const dataChangeArray = Array.from(dataChanges.values());
    return depArray.find(
      (dep) => !!dataChangeArray.find(
        (change) => change === dep || change.contains(dep) || dep.contains(change)
      )
    ) !== void 0;
  }
  function toNodeResolveOptions(resolverOptions) {
    return {
      ...resolverOptions,
      data: {
        model: resolverOptions.model,
        formatValue: (ref, value) => {
          if (resolverOptions.formatValue) {
            return resolverOptions.formatValue(ref, value);
          }
          return value;
        },
        format: (bindingLike, value) => resolverOptions.format ? resolverOptions.format(
          isBinding(bindingLike) ? bindingLike : resolverOptions.parseBinding(bindingLike),
          value
        ) : value
      },
      evaluate: (exp) => resolverOptions.evaluator.evaluate(exp, resolverOptions)
    };
  }
  function unpackAndPush(item, initial) {
    if (Array.isArray(item)) {
      item.forEach((i) => {
        unpackAndPush(i, initial);
      });
    } else {
      initial.push(item);
    }
  }
  var withContext = (model) => {
    return {
      get: (binding, options) => {
        return model.get(binding, {
          context: { model },
          ...options
        });
      },
      set: (transaction, options) => {
        return model.set(transaction, {
          context: { model },
          ...options
        });
      },
      delete: (binding, options) => {
        return model.delete(binding, {
          context: { model },
          ...options
        });
      }
    };
  };
  var Resolver = class {
    constructor(root, options) {
      this.hooks = {
        /** A hook to allow skipping of the resolution tree for a specific node */
        skipResolve: new SyncWaterfallHook(),
        /** An event emitted before calculating the next update */
        beforeUpdate: new SyncHook(),
        /** An event emitted after calculating the next update */
        afterUpdate: new SyncHook(),
        /** The options passed to a node to resolve it to an object */
        resolveOptions: new SyncWaterfallHook(),
        /** A hook to transform the AST node into a new AST node before resolving it */
        beforeResolve: new SyncWaterfallHook(),
        /**
         * A hook to transform an AST node into it's resolved value.
         * This runs _before_ any children are resolved
         */
        resolve: new SyncWaterfallHook(),
        /**
         * A hook to transform the resolved value of an AST node.
         * This runs _after_ all children nodes are resolved
         */
        afterResolve: new SyncWaterfallHook(),
        /** Called at the very end of a node's tree being updated */
        afterNodeUpdate: new SyncHook()
      };
      this.root = root;
      this.options = options;
      this.resolveCache = /* @__PURE__ */ new Map();
      this.ASTMap = /* @__PURE__ */ new Map();
      this.logger = options.logger;
      this.idCache = /* @__PURE__ */ new Set();
    }
    getSourceNode(convertedAST) {
      return this.ASTMap.get(convertedAST);
    }
    update(changes) {
      this.hooks.beforeUpdate.call(changes);
      const resolveCache = /* @__PURE__ */ new Map();
      this.idCache.clear();
      const prevASTMap = new Map(this.ASTMap);
      this.ASTMap.clear();
      const updated = this.computeTree(
        this.root,
        void 0,
        changes,
        resolveCache,
        toNodeResolveOptions(this.options),
        void 0,
        prevASTMap
      );
      this.resolveCache = resolveCache;
      this.hooks.afterUpdate.call(updated.value);
      return updated.value;
    }
    getResolveCache() {
      return new Map(this.resolveCache);
    }
    getPreviousResult(node) {
      if (!node) {
        return;
      }
      const isFirstUpdate = this.resolveCache.size === 0;
      const id = getNodeID(node);
      if (id) {
        if (this.idCache.has(id)) {
          if (isFirstUpdate) {
            if (node.type === "asset" || node.type === "view") {
              this.logger?.error(
                `Cache conflict: Found Asset/View nodes that have conflicting ids: ${id}, may cause cache issues.`
              );
            } else if (node.type === "value") {
              this.logger?.info(
                `Cache conflict: Found Value nodes that have conflicting ids: ${id}, may cause cache issues. To improve performance make value node IDs globally unique.`
              );
            }
          }
          return;
        }
        this.idCache.add(id);
      }
      return this.resolveCache.get(node);
    }
    cloneNode(node) {
      const clonedNode = (0, import_timm4.clone)(node);
      Object.keys(clonedNode).forEach((key) => {
        if (key === "parent")
          return;
        const value = clonedNode[key];
        if (typeof value === "object" && value !== null) {
          clonedNode[key] = Array.isArray(value) ? [...value] : { ...value };
        }
      });
      return clonedNode;
    }
    computeTree(node, rawParent, dataChanges, cacheUpdate, options, partiallyResolvedParent, prevASTMap) {
      const dependencyModel = new DependencyModel(options.data.model);
      dependencyModel.trackSubset("core");
      const depModelWithParser = withContext(
        withParser(dependencyModel, this.options.parseBinding)
      );
      const resolveOptions = this.hooks.resolveOptions.call(
        {
          ...options,
          data: {
            ...options.data,
            model: depModelWithParser
          },
          evaluate: (exp) => this.options.evaluator.evaluate(exp, { model: depModelWithParser }),
          node
        },
        node
      );
      const previousResult = this.getPreviousResult(node);
      const previousDeps = previousResult?.dependencies;
      const dataChanged = caresAboutDataChanges(dataChanges, previousDeps);
      const shouldUseLastValue = this.hooks.skipResolve.call(
        !dataChanged,
        node,
        resolveOptions
      );
      const clonedNode = {
        ...this.cloneNode(node),
        parent: partiallyResolvedParent
      };
      const resolvedAST = this.hooks.beforeResolve.call(
        clonedNode,
        resolveOptions
      ) ?? {
        type: "empty"
        /* Empty */
      };
      const isNestedMultiNode = resolvedAST.type === "multi-node" && partiallyResolvedParent?.parent?.type === "multi-node" && partiallyResolvedParent.type === "value";
      if (previousResult && shouldUseLastValue) {
        const update2 = {
          ...previousResult,
          updated: false
        };
        const repopulateASTMapFromCache = (resolvedNode, AST, ASTParent) => {
          const { node: resolvedASTLocal } = resolvedNode;
          this.ASTMap.set(resolvedASTLocal, AST);
          const resolvedUpdate = {
            ...resolvedNode,
            updated: false
          };
          cacheUpdate.set(AST, resolvedUpdate);
          const handleChildNode = (childNode) => {
            const originalChildNode = prevASTMap.get(childNode) ?? childNode;
            const previousChildResult = this.getPreviousResult(originalChildNode);
            if (!previousChildResult)
              return;
            repopulateASTMapFromCache(
              previousChildResult,
              originalChildNode,
              AST
            );
          };
          if ("children" in resolvedASTLocal) {
            resolvedASTLocal.children?.forEach(
              ({ value: childAST }) => handleChildNode(childAST)
            );
          } else if (resolvedASTLocal.type === "multi-node") {
            resolvedASTLocal.values.forEach(handleChildNode);
          }
          this.hooks.afterNodeUpdate.call(AST, ASTParent, resolvedUpdate);
        };
        previousResult.node.parent = partiallyResolvedParent;
        repopulateASTMapFromCache(previousResult, node, rawParent);
        return update2;
      }
      resolvedAST.parent = partiallyResolvedParent;
      resolveOptions.node = resolvedAST;
      this.ASTMap.set(resolvedAST, node);
      let resolved = this.hooks.resolve.call(
        void 0,
        resolvedAST,
        resolveOptions
      );
      let updated = !dequal(previousResult?.value, resolved);
      if (previousResult && !updated) {
        resolved = previousResult?.value;
      }
      const childDependencies = /* @__PURE__ */ new Set();
      dependencyModel.trackSubset("children");
      if ("children" in resolvedAST) {
        const newChildren = resolvedAST.children?.map((child) => {
          const computedChildTree = this.computeTree(
            child.value,
            node,
            dataChanges,
            cacheUpdate,
            resolveOptions,
            resolvedAST,
            prevASTMap
          );
          const {
            dependencies: childTreeDeps,
            node: childNode,
            updated: childUpdated,
            value: childValue
          } = computedChildTree;
          childTreeDeps.forEach((binding) => childDependencies.add(binding));
          if (childValue) {
            if (childNode.type === "multi-node" && !childNode.override) {
              const arr = (0, import_timm4.addLast)(
                dlv_es_default(resolved, child.path, []),
                childValue
              );
              resolved = (0, import_timm4.setIn)(resolved, child.path, arr);
            } else {
              resolved = (0, import_timm4.setIn)(resolved, child.path, childValue);
            }
          }
          updated = updated || childUpdated;
          return { ...child, value: childNode };
        });
        resolvedAST.children = newChildren;
      } else if (resolvedAST.type === "multi-node") {
        const childValue = [];
        const rawParentToPassIn = isNestedMultiNode ? partiallyResolvedParent?.parent : node;
        const newValues = resolvedAST.values.map((mValue) => {
          const mTree = this.computeTree(
            mValue,
            rawParentToPassIn,
            dataChanges,
            cacheUpdate,
            resolveOptions,
            resolvedAST,
            prevASTMap
          );
          if (mTree.value !== void 0 && mTree.value !== null) {
            if (mTree.node.parent?.type === "multi-node" && Array.isArray(mTree.value)) {
              mTree.value.forEach((v) => {
                unpackAndPush(v, childValue);
              });
            } else {
              childValue.push(mTree.value);
            }
          }
          mTree.dependencies.forEach(
            (bindingDep) => childDependencies.add(bindingDep)
          );
          updated = updated || mTree.updated;
          return mTree.node;
        });
        resolvedAST.values = newValues;
        resolved = childValue;
      }
      childDependencies.forEach(
        (bindingDep) => dependencyModel.addChildReadDep(bindingDep)
      );
      dependencyModel.trackSubset("core");
      if (previousResult && !updated) {
        resolved = previousResult?.value;
      }
      resolved = this.hooks.afterResolve.call(resolved, resolvedAST, {
        ...resolveOptions,
        getDependencies: (scope) => dependencyModel.getDependencies(scope)
      });
      const update = {
        node: resolvedAST,
        updated,
        value: resolved,
        dependencies: /* @__PURE__ */ new Set([
          ...dependencyModel.getDependencies(),
          ...childDependencies
        ])
      };
      this.hooks.afterNodeUpdate.call(
        node,
        isNestedMultiNode ? partiallyResolvedParent?.parent : rawParent,
        update
      );
      cacheUpdate.set(node, update);
      return update;
    }
  };
  var CrossfieldProvider = class {
    constructor(initialView, parser2, logger) {
      this.allValidations = /* @__PURE__ */ new Set();
      this.byBinding = /* @__PURE__ */ new Map();
      this.logger = logger;
      this.parse(initialView, parser2);
    }
    parse(contentView, parser2) {
      const xfieldRefs = contentView.validation;
      if (xfieldRefs === void 0) {
        return;
      }
      if (!Array.isArray(xfieldRefs)) {
        this.logger?.warn(
          `Unable to register view validations for id: ${contentView.id}. 'validation' property must be an Array.`
        );
        return;
      }
      xfieldRefs.forEach((vRef) => {
        const withDefaults = {
          trigger: "navigation",
          severity: "error",
          ...vRef
        };
        this.allValidations.add(withDefaults);
        const { ref } = vRef;
        if (ref) {
          const parsed = parser2(ref);
          if (this.byBinding.has(parsed)) {
            this.byBinding.get(parsed)?.push(withDefaults);
          } else {
            this.byBinding.set(parsed, [withDefaults]);
          }
        }
      });
    }
    getValidationsForBinding(binding) {
      return this.byBinding.get(binding);
    }
  };
  var ViewInstance = class {
    constructor(initialView, resolverOptions) {
      this.hooks = {
        onUpdate: new SyncHook(),
        parser: new SyncHook(),
        resolver: new SyncHook(),
        onTemplatePluginCreated: new SyncHook(),
        templatePlugin: new SyncHook()
      };
      this.initialView = initialView;
      this.resolverOptions = resolverOptions;
      this.hooks.onTemplatePluginCreated.tap("view", (templatePlugin) => {
        this.templatePlugin = templatePlugin;
      });
    }
    updateAsync() {
      const update = this.resolver?.update();
      this.lastUpdate = update;
      this.hooks.onUpdate.call(update);
    }
    update(changes) {
      if (this.rootNode === void 0) {
        this.validationProvider = new CrossfieldProvider(
          this.initialView,
          this.resolverOptions.parseBinding,
          this.resolverOptions.logger
        );
        if (this.templatePlugin) {
          this.hooks.templatePlugin.call(this.templatePlugin);
        } else {
          this.resolverOptions.logger?.warn(
            "templatePlugin not set for View, legacy templates may not work"
          );
        }
        const parser2 = new Parser();
        this.hooks.parser.call(parser2);
        this.rootNode = parser2.parseView(this.initialView);
        this.resolver = new Resolver(this.rootNode, {
          ...this.resolverOptions,
          parseNode: parser2.parseObject.bind(parser2)
        });
        this.hooks.resolver.call(this.resolver);
      }
      const update = this.resolver?.update(changes);
      if (this.lastUpdate === update) {
        return this.lastUpdate;
      }
      this.lastUpdate = update;
      this.hooks.onUpdate.call(update);
      return update;
    }
    getValidationsForBinding(binding) {
      return this.validationProvider?.getValidationsForBinding(binding);
    }
  };
  var TemplatePlugin = class {
    constructor(options) {
      this.hooks = {
        resolveTemplateSubstitutions: new SyncWaterfallHook()
      };
      this.options = options;
    }
    parseTemplate(parseObject, node, options) {
      const { template, depth } = node;
      const data = options.data.model.get(node.data);
      if (!data) {
        return null;
      }
      if (!Array.isArray(data)) {
        throw new Error(`Template using '${node.data}' but is not an array`);
      }
      const values = [];
      data.forEach((dataItem, index) => {
        const templateSubstitutions = this.hooks.resolveTemplateSubstitutions.call(
          [
            {
              expression: new RegExp(`_index${depth || ""}_`),
              value: String(index)
            }
          ],
          {
            depth,
            data: dataItem,
            index
          }
        );
        let templateStr = JSON.stringify(template);
        for (const { expression, value } of templateSubstitutions) {
          let flags = "g";
          if (typeof expression === "object") {
            flags = `${expression.flags}${expression.global ? "" : "g"}`;
          }
          templateStr = templateStr.replace(new RegExp(expression, flags), value);
        }
        const parsed = parseObject(JSON.parse(templateStr), "value", {
          templateDepth: node.depth + 1
        });
        if (parsed) {
          values.push(parsed);
        }
      });
      const result = {
        type: "multi-node",
        override: false,
        values
      };
      return result;
    }
    applyParser(parser2) {
      parser2.hooks.onCreateASTNode.tap("template", (node) => {
        if (node && node.type === "template" && !node.dynamic) {
          return this.parseTemplate(
            parser2.parseObject.bind(parser2),
            node,
            this.options
          );
        }
        return node;
      });
      parser2.hooks.determineNodeType.tap("template", (obj) => {
        if (obj === "template") {
          return "template";
        }
      });
      parser2.hooks.parseNode.tap(
        "template",
        (obj, _nodeType, options, determinedNodeType) => {
          if (determinedNodeType === "template") {
            const templateNode = parser2.createASTNode(
              {
                type: "template",
                depth: options.templateDepth ?? 0,
                data: obj.data,
                template: obj.value,
                dynamic: obj.dynamic ?? false
              },
              obj
            );
            if (templateNode) {
              return templateNode;
            }
          }
        }
      );
    }
    applyResolverHooks(resolver) {
      resolver.hooks.beforeResolve.tap("template", (node, options) => {
        if (node && node.type === "template" && node.dynamic) {
          return this.parseTemplate(options.parseNode, node, options);
        }
        return node;
      });
    }
    apply(view) {
      view.hooks.parser.tap("template", this.applyParser.bind(this));
      view.hooks.resolver.tap("template", this.applyResolverHooks.bind(this));
    }
  };
  var createPatternMatcher = (start, end) => {
    return (testStr) => {
      const startLocation = testStr.indexOf(start);
      if (startLocation === -1) {
        return false;
      }
      const endLocation = testStr.indexOf(end);
      if (endLocation === -1) {
        return false;
      }
      return startLocation < endLocation;
    };
  };
  var bindingResolveLookup = createPatternMatcher("{{", "}}");
  var expressionResolveLookup = createPatternMatcher("@[", "]@");
  function hasSomethingToResolve(str) {
    return bindingResolveLookup(str) || expressionResolveLookup(str);
  }
  function resolveString(str, resolveOptions) {
    return hasSomethingToResolve(str) ? resolveDataRefs(str, {
      model: resolveOptions.data.model,
      evaluate: resolveOptions.evaluate
    }) : str;
  }
  function resolveAllRefs(node, resolveOptions, propertiesToSkip) {
    if (node === null || node === void 0 || typeof node !== "object" && typeof node !== "string") {
      return node;
    }
    if (typeof node === "string") {
      return resolveString(node, resolveOptions);
    }
    let newNode = node;
    Object.keys(node).forEach((key) => {
      if (propertiesToSkip.has(key)) {
        return;
      }
      const val = node[key];
      let newVal = val;
      if (typeof val === "object") {
        newVal = resolveAllRefs(val, resolveOptions, propertiesToSkip);
      } else if (typeof val === "string") {
        newVal = resolveString(val, resolveOptions);
      }
      if (newVal !== val) {
        newNode = (0, import_timm6.set)(newNode, key, newVal);
      }
    });
    return newNode;
  }
  var findBasePath = (node, resolver) => {
    const parentNode = node.parent;
    if (!parentNode) {
      return [];
    }
    if ("children" in parentNode) {
      const original = resolver.getSourceNode(node);
      return parentNode.children?.find((child) => child.value === original)?.path ?? [];
    }
    if (parentNode.type !== "multi-node") {
      return [];
    }
    return findBasePath(parentNode, resolver);
  };
  var StringResolverPlugin = class {
    constructor() {
      this.propertiesToSkipCache = /* @__PURE__ */ new Map();
    }
    applyResolver(resolver) {
      resolver.hooks.resolve.tap("string-resolver", (value, node, options) => {
        if (node.type === "empty" || node.type === "unknown") {
          return null;
        }
        if (node.type === "value" || node.type === "asset" || node.type === "view") {
          let propsToSkip;
          if (node.type === "asset" || node.type === "view") {
            propsToSkip = new Set(
              node.plugins?.stringResolver?.propertiesToSkip ?? ["exp"]
            );
            if (node.value?.id) {
              this.propertiesToSkipCache.set(node.value.id, propsToSkip);
            }
          } else if (node.parent?.type === "multi-node" && (node.parent?.parent?.type === "asset" || node.parent?.parent?.type === "view") && node.parent.parent.value?.id && this.propertiesToSkipCache.has(node.parent.parent.value.id)) {
            propsToSkip = this.propertiesToSkipCache.get(
              node.parent.parent.value.id
            );
          } else {
            propsToSkip = /* @__PURE__ */ new Set(["exp"]);
          }
          const nodePath = findBasePath(node, resolver);
          if (nodePath.length > 0 && nodePath.some((segment2) => propsToSkip.has(segment2.toString()))) {
            return node.value;
          }
          return resolveAllRefs(node.value, options, propsToSkip);
        }
        return value;
      });
    }
    apply(view) {
      view.hooks.resolver.tap("string-resolver", this.applyResolver.bind(this));
    }
  };
  var ApplicabilityPlugin = class {
    applyResolver(resolver) {
      resolver.hooks.beforeResolve.tap(
        "applicability",
        (node, options) => {
          let newNode = node;
          if (node?.type === "applicability") {
            const isApplicable = options.evaluate(node.expression);
            if (isApplicable === false) {
              return null;
            }
            newNode = node.value;
          }
          return newNode;
        }
      );
    }
    applyParser(parser2) {
      parser2.hooks.determineNodeType.tap("applicability", (obj) => {
        if (Object.prototype.hasOwnProperty.call(obj, "applicability")) {
          return "applicability";
        }
      });
      parser2.hooks.parseNode.tap(
        "applicability",
        (obj, nodeType, options, determinedNodeType) => {
          if (determinedNodeType === "applicability") {
            const parsedApplicability = parser2.parseObject(
              (0, import_timm7.omit)(obj, "applicability"),
              nodeType,
              options
            );
            if (parsedApplicability !== null) {
              const applicabilityNode = parser2.createASTNode(
                {
                  type: "applicability",
                  expression: obj.applicability,
                  value: parsedApplicability
                },
                obj
              );
              if (applicabilityNode?.type === "applicability") {
                applicabilityNode.value.parent = applicabilityNode;
              }
              return applicabilityNode;
            }
          }
        }
      );
    }
    apply(view) {
      view.hooks.resolver.tap("applicability", this.applyResolver.bind(this));
      view.hooks.parser.tap("applicability", this.applyParser.bind(this));
    }
  };
  var SwitchPlugin = class {
    constructor(options) {
      this.options = options;
    }
    resolveSwitch(node, options) {
      for (const switchCase of node.cases) {
        const isApplicable = options.evaluate(switchCase.case);
        if (isApplicable) {
          return switchCase.value;
        }
      }
      return EMPTY_NODE;
    }
    applyParser(parser2) {
      parser2.hooks.onCreateASTNode.tap("switch", (node) => {
        if (node && node.type === "switch" && !node.dynamic) {
          return this.resolveSwitch(node, this.options);
        }
        return node;
      });
      parser2.hooks.determineNodeType.tap("switch", (obj) => {
        if (Object.prototype.hasOwnProperty.call(obj, "dynamicSwitch") || Object.prototype.hasOwnProperty.call(obj, "staticSwitch")) {
          return "switch";
        }
      });
      parser2.hooks.parseNode.tap(
        "switch",
        (obj, _nodeType, options, determinedNodeType) => {
          if (determinedNodeType === "switch") {
            const dynamic = "dynamicSwitch" in obj;
            const switchContent = "dynamicSwitch" in obj ? obj.dynamicSwitch : obj.staticSwitch;
            const cases = [];
            switchContent.forEach(
              (switchCase) => {
                const { case: switchCaseExpr, ...switchBody } = switchCase;
                const value = parser2.parseObject(
                  switchBody,
                  "value",
                  options
                );
                if (value) {
                  cases.push({
                    case: switchCaseExpr,
                    value
                  });
                }
              }
            );
            const switchAST = parser2.hooks.onCreateASTNode.call(
              {
                type: "switch",
                dynamic,
                cases
              },
              obj
            );
            if (switchAST?.type === "switch") {
              switchAST.cases.forEach((sCase) => {
                sCase.value.parent = switchAST;
              });
            }
            if (switchAST?.type === "empty") {
              return null;
            }
            return switchAST ?? null;
          }
        }
      );
    }
    applyResolver(resolver) {
      resolver.hooks.beforeResolve.tap("switch", (node, options) => {
        if (node && node.type === "switch" && node.dynamic) {
          return this.resolveSwitch(node, options);
        }
        return node;
      });
    }
    apply(view) {
      view.hooks.parser.tap("switch", this.applyParser.bind(this));
      view.hooks.resolver.tap("switch", this.applyResolver.bind(this));
    }
  };
  var FlowInstance = class {
    constructor(id, flow, options) {
      this.isTransitioning = false;
      this.hooks = {
        beforeStart: new SyncBailHook(),
        /** A callback when the onStart node was present */
        onStart: new SyncHook(),
        /** A callback when the onEnd node was present */
        onEnd: new SyncHook(),
        /** A hook to intercept and block a transition */
        skipTransition: new SyncBailHook(),
        /** A chance to manipulate the flow-node used to calculate the given transition used  */
        beforeTransition: new SyncWaterfallHook(),
        /** A chance to manipulate the flow-node calculated after a transition */
        resolveTransitionNode: new SyncWaterfallHook(),
        /** A callback when a transition from 1 state to another was made */
        transition: new SyncHook(),
        /** A callback to run actions after a transition occurs */
        afterTransition: new SyncHook()
      };
      this.id = id;
      this.flow = flow;
      this.log = options?.logger;
      this.history = [];
      this.hooks.transition.tap(
        "startPromise",
        async (_oldState, nextState) => {
          const newState = nextState.value;
          if (this.flowPromise && newState.state_type === "END") {
            this.flowPromise.resolve(newState);
          }
        }
      );
    }
    /** Start the state machine */
    async start() {
      if (this.flowPromise) {
        this.log?.warn("Already called start for flow");
        return this.flowPromise.promise;
      }
      this.flow = this.hooks.beforeStart.call(this.flow) || this.flow;
      if (this.flow.onStart) {
        this.hooks.onStart.call(this.flow.onStart);
      }
      const initialState = this.flow.startState;
      if (!initialState) {
        return Promise.reject(new Error("No 'startState' defined for flow"));
      }
      this.flowPromise = (0, import_p_defer2.default)();
      this.pushHistory(initialState);
      return this.flowPromise.promise;
    }
    transition(transitionValue, options) {
      if (this.isTransitioning) {
        throw new Error(
          `Transitioning while ongoing transition from ${this.currentState?.name} is in progress is not supported`
        );
      }
      if (this.currentState?.value.state_type === "END") {
        this.log?.warn(
          `Skipping transition using ${transitionValue}. Already at and END state`
        );
        return;
      }
      if (this.currentState === void 0) {
        throw new Error("Cannot transition when there's no current state");
      }
      if (options?.force) {
        this.log?.debug(`Forced transition. Skipping validation checks`);
      } else {
        const skipTransition = this.hooks.skipTransition.call(this.currentState);
        if (skipTransition) {
          this.log?.debug(
            `Skipping transition from ${this.currentState.name} b/c hook told us to`
          );
          return;
        }
      }
      const state = this.hooks.beforeTransition.call(
        this.currentState.value,
        transitionValue
      );
      if (!("transitions" in state)) {
        throw new Error(`No transitions defined for ${this.currentState.value}`);
      }
      const { transitions } = state;
      const nextState = transitions[transitionValue] || transitions["*"];
      if (nextState === void 0) {
        this.log?.warn(
          `No transition from ${this.currentState.name} using ${transitionValue} or *`
        );
        return;
      }
      this.log?.debug(
        `Transitioning from ${this.currentState.name} to ${nextState} using ${transitionValue} `
      );
      return this.pushHistory(nextState, options);
    }
    pushHistory(stateName, options) {
      if (!Object.prototype.hasOwnProperty.call(this.flow, stateName)) {
        throw new Error(`No flow definition for: ${stateName} was found.`);
      }
      let nextState = this.flow[stateName];
      if (!this.flow[stateName] || typeof nextState !== "object" || !("state_type" in nextState)) {
        this.log?.error(`Flow doesn't contain any states named: ${stateName}`);
        return;
      }
      const prevState = this.currentState;
      this.isTransitioning = true;
      nextState = this.hooks.resolveTransitionNode.call(nextState);
      const newCurrentState = {
        name: stateName,
        value: nextState
      };
      this.currentState = newCurrentState;
      this.history.push(stateName);
      if (newCurrentState.value.state_type === "END" && this.flow.onEnd) {
        this.hooks.onEnd.call(this.flow.onEnd);
      }
      this.hooks.transition.call(prevState, {
        ...newCurrentState
      });
      this.isTransitioning = false;
      this.hooks.afterTransition.call(this);
    }
  };
  var FlowController = class {
    constructor(navigation, options) {
      this.hooks = {
        flow: new SyncHook()
      };
      this.navigation = navigation;
      this.navStack = [];
      this.log = options?.logger;
      this.start = this.start.bind(this);
      this.run = this.run.bind(this);
      this.transition = this.transition.bind(this);
      this.addNewFlow = this.addNewFlow.bind(this);
    }
    /** Navigate to another state in the state-machine */
    transition(stateTransition, options) {
      if (this.current === void 0) {
        throw new Error("Not currently in a flow. Cannot transition.");
      }
      this.current.transition(stateTransition, options);
    }
    addNewFlow(flow) {
      this.navStack.push(flow);
      this.current = flow;
      this.hooks.flow.call(flow);
    }
    async run(startState) {
      if (!Object.prototype.hasOwnProperty.call(this.navigation, startState)) {
        return Promise.reject(new Error(`No flow defined for: ${startState}`));
      }
      const startFlow = this.navigation[startState];
      if (startFlow === null || typeof startFlow !== "object") {
        return Promise.reject(
          new Error(`Flow: ${startState} needs to be an object`)
        );
      }
      this.log?.debug(`Starting flow: ${startState}`);
      const flow = new FlowInstance(startState, startFlow, { logger: this.log });
      this.addNewFlow(flow);
      flow.hooks.afterTransition.tap("flow-controller", (flowInstance) => {
        if (flowInstance.currentState?.value.state_type === "FLOW") {
          const subflowId = flowInstance.currentState?.value.ref;
          this.log?.debug(`Loading subflow ${subflowId}`);
          this.run(subflowId).then((subFlowEndState) => {
            this.log?.debug(
              `Subflow ended. Using outcome: ${subFlowEndState.outcome}`
            );
            flowInstance.transition(subFlowEndState?.outcome);
          });
        }
      });
      const end = await flow.start();
      this.navStack.pop();
      if (this.navStack.length > 0) {
        const firstItem = 0;
        this.current = this.navStack[firstItem];
      }
      return end;
    }
    async start() {
      if (!this.navigation.BEGIN) {
        return Promise.reject(new Error("Must supply a BEGIN state"));
      }
      return this.run(this.navigation.BEGIN);
    }
  };
  var ANY_CHAR_REGEX = /%([a-zA-Z]+)/g;
  function replaceParams(message, params) {
    return message.slice().replace(ANY_CHAR_REGEX, (keyExpr) => params[keyExpr.slice(1)] || keyExpr);
  }
  var CONTEXT = "validation-binding-tracker";
  var ValidationBindingTrackerViewPlugin = class {
    constructor(options) {
      this.trackedBindings = /* @__PURE__ */ new Set();
      this.options = options;
    }
    /** Fetch the tracked bindings in the current view */
    getBindings() {
      return this.trackedBindings;
    }
    /** Add a binding to the tracked set */
    trackBinding(binding) {
      if (this.trackedBindings.has(binding)) {
        return;
      }
      this.trackedBindings.add(binding);
      this.options.callbacks?.onAdd?.(binding);
    }
    /** Attach hooks to the given resolver */
    applyResolver(resolver) {
      this.trackedBindings.clear();
      const tracked = /* @__PURE__ */ new Map();
      const sections = /* @__PURE__ */ new Map();
      let lastViewUpdateChangeSet;
      const nodeTree = /* @__PURE__ */ new Map();
      let lastComputedBindingTree = /* @__PURE__ */ new Map();
      let currentBindingTree = /* @__PURE__ */ new Map();
      const lastSectionBindingTree = /* @__PURE__ */ new Map();
      function addToTree(child, parent) {
        if (nodeTree.has(parent)) {
          nodeTree.get(parent)?.add(child);
          return;
        }
        nodeTree.set(parent, /* @__PURE__ */ new Set([child]));
      }
      resolver.hooks.beforeUpdate.tap(CONTEXT, (changes) => {
        lastViewUpdateChangeSet = changes;
      });
      resolver.hooks.skipResolve.tap(CONTEXT, (shouldSkip, node) => {
        const trackedBindingsForNode = lastComputedBindingTree.get(node);
        if (!shouldSkip || !lastViewUpdateChangeSet || !trackedBindingsForNode) {
          return shouldSkip;
        }
        const intersection = new Set(
          [...lastViewUpdateChangeSet].filter(
            (b) => trackedBindingsForNode.has(b)
          )
        );
        return intersection.size === 0;
      });
      resolver.hooks.resolveOptions.tap(CONTEXT, (options, node) => {
        if (options.validation === void 0) {
          return options;
        }
        tracked.delete(node);
        const track = (binding) => {
          const parsed = isBinding(binding) ? binding : this.options.parseBinding(binding);
          if (tracked.has(node)) {
            tracked.get(node)?.add(parsed);
          } else {
            tracked.set(node, /* @__PURE__ */ new Set([parsed]));
          }
          let { parent } = node;
          while (parent) {
            if (sections.has(parent)) {
              sections.get(parent)?.add(node);
              break;
            } else {
              parent = parent.parent;
            }
          }
          this.trackedBindings.add(parsed);
          this.options.callbacks?.onAdd?.(parsed);
        };
        return {
          ...options,
          validation: {
            ...options.validation,
            get: (binding, getOptions) => {
              if (getOptions?.track) {
                track(binding);
              }
              const eows = options.validation?._getValidationForBinding(binding)?.getAll(getOptions);
              const firstFieldEOW = eows?.find(
                (eow) => eow.displayTarget === "field" || eow.displayTarget === void 0
              );
              return firstFieldEOW;
            },
            getValidationsForBinding(binding, getOptions) {
              if (getOptions?.track) {
                track(binding);
              }
              return options.validation?._getValidationForBinding(binding)?.getAll(getOptions) ?? [];
            },
            getChildren: (type) => {
              const validations = new Array();
              lastComputedBindingTree.get(node)?.forEach((binding) => {
                const eow = options.validation?._getValidationForBinding(binding)?.get();
                if (eow && (type === void 0 || type === eow.displayTarget)) {
                  validations.push(eow);
                }
              });
              return validations;
            },
            getValidationsForSection: () => {
              const validations = new Array();
              lastSectionBindingTree.get(node)?.forEach((binding) => {
                const eow = options.validation?._getValidationForBinding(binding)?.get();
                if (eow && eow.displayTarget === "section") {
                  validations.push(eow);
                }
              });
              return validations;
            },
            register: (registerOptions) => {
              if (registerOptions?.type === "section") {
                if (!sections.has(node)) {
                  sections.set(node, /* @__PURE__ */ new Set());
                }
              }
            },
            track
          }
        };
      });
      resolver.hooks.afterNodeUpdate.tap(CONTEXT, (node, parent, update) => {
        if (parent) {
          addToTree(node, parent);
        }
        if (update.updated) {
          const newlyComputed = new Set(tracked.get(node));
          nodeTree.get(node)?.forEach((child) => {
            currentBindingTree.get(child)?.forEach((b) => newlyComputed.add(b));
          });
          currentBindingTree.set(node, newlyComputed);
        } else {
          currentBindingTree.set(
            node,
            lastComputedBindingTree.get(node) ?? /* @__PURE__ */ new Set()
          );
        }
        if (node === resolver.root) {
          this.trackedBindings = new Set(currentBindingTree.get(node));
          lastComputedBindingTree = currentBindingTree;
          lastSectionBindingTree.clear();
          sections.forEach((nodeSet, sectionNode) => {
            const temp = /* @__PURE__ */ new Set();
            nodeSet.forEach((n) => {
              tracked.get(n)?.forEach(temp.add, temp);
            });
            lastSectionBindingTree.set(sectionNode, temp);
          });
          nodeTree.clear();
          tracked.clear();
          sections.clear();
          currentBindingTree = /* @__PURE__ */ new Map();
        }
      });
    }
    apply(view) {
      view.hooks.resolver.tap(CONTEXT, this.applyResolver.bind(this));
    }
  };
  var SCHEMA_VALIDATION_PROVIDER_NAME = "schema";
  var VIEW_VALIDATION_PROVIDER_NAME = "view";
  var VALIDATION_PROVIDER_NAME_SYMBOL = Symbol.for(
    "validation-provider-name"
  );
  function isSubset(subset, containingSet) {
    if (subset.size > containingSet.size)
      return false;
    for (const entry of subset)
      if (!containingSet.has(entry))
        return false;
    return true;
  }
  function createStatefulValidationObject(obj) {
    return {
      value: obj,
      type: obj.severity,
      state: "none",
      isBlockingNavigation: false
    };
  }
  var ValidatedBinding = class {
    constructor(possibleValidations, onDismiss, log, weakBindings) {
      this.applicableValidations = [];
      this.validationsByState = {
        load: [],
        change: [],
        navigation: []
      };
      this.onDismiss = onDismiss;
      possibleValidations.forEach((vObj) => {
        const { trigger } = vObj;
        if (this.validationsByState[trigger]) {
          const statefulValidationObject = createStatefulValidationObject(vObj);
          this.validationsByState[trigger].push(statefulValidationObject);
        } else {
          log?.warn(`Unknown validation trigger: ${trigger}`);
        }
      });
      this.weakBindings = weakBindings ?? /* @__PURE__ */ new Set();
    }
    get allValidations() {
      return Object.values(this.validationsByState).flat();
    }
    checkIfBlocking(statefulObj) {
      if (statefulObj.state === "active") {
        const { isBlockingNavigation } = statefulObj;
        return isBlockingNavigation;
      }
      return false;
    }
    getAll() {
      return this.applicableValidations.reduce((all, statefulObj) => {
        if (statefulObj.state === "active" && statefulObj.response) {
          all.push({
            ...statefulObj.response,
            blocking: this.checkIfBlocking(statefulObj)
          });
        }
        return all;
      }, []);
    }
    get() {
      const firstInvalid = this.applicableValidations.find((statefulObj) => {
        return statefulObj.state === "active" && statefulObj.response;
      });
      if (firstInvalid?.state === "active") {
        return {
          ...firstInvalid.response,
          blocking: this.checkIfBlocking(firstInvalid)
        };
      }
    }
    runApplicableValidations(runner, canDismiss, phase) {
      this.applicableValidations = this.applicableValidations.map(
        (originalValue) => {
          if (originalValue.state === "dismissed") {
            return originalValue;
          }
          const blocking = originalValue.value.blocking ?? (originalValue.value.severity === "warning" && "once" || true);
          const obj = (0, import_timm9.setIn)(
            originalValue,
            ["value", "blocking"],
            blocking
          );
          const isBlockingNavigation = blocking === true || blocking === "once" && !canDismiss;
          if (phase === "navigation" && obj.state === "active" && obj.value.blocking !== true) {
            if (obj.value.severity === "warning") {
              const warn = obj;
              if (warn.dismissable && warn.response.dismiss && (warn.response.blocking !== "once" || !warn.response.blocking)) {
                warn.response.dismiss();
              } else {
                if (warn?.response.blocking === "once") {
                  warn.response.blocking = false;
                }
                warn.dismissable = true;
              }
              return warn;
            }
          }
          const response = runner(obj.value);
          const newState = {
            type: obj.type,
            value: obj.value,
            state: response ? "active" : "none",
            isBlockingNavigation,
            dismissable: obj.value.severity === "warning" && phase === "navigation",
            response: response ? {
              ...obj.value,
              message: response.message ?? "Something is broken",
              severity: obj.value.severity,
              displayTarget: obj.value.displayTarget ?? "field"
            } : void 0
          };
          if (newState.state === "active" && obj.value.severity === "warning") {
            newState.response.dismiss = () => {
              newState.state = "dismissed";
              this.onDismiss?.();
            };
          }
          return newState;
        }
      );
    }
    update(phase, canDismiss, runner) {
      const newApplicableValidations = [];
      if (phase === "load" && this.currentPhase !== void 0) {
        return;
      }
      if (this.currentPhase === "navigation" || phase === this.currentPhase) {
        this.runApplicableValidations(runner, canDismiss, phase);
        return;
      }
      if (phase === "load") {
        this.currentPhase = "load";
        this.applicableValidations = [...this.validationsByState.load];
      } else if (phase === "change" && this.currentPhase === "load") {
        this.currentPhase = "change";
        this.applicableValidations = [
          ...this.applicableValidations,
          ...this.validationsByState.change
        ];
      } else if (phase === "navigation" && (this.currentPhase === "load" || this.currentPhase === "change")) {
        this.applicableValidations.forEach((element) => {
          if (!(element.type === "error" && element.state === "active" && element.isBlockingNavigation === false)) {
            newApplicableValidations.push(element);
          }
        });
        this.applicableValidations = [
          ...newApplicableValidations,
          ...this.validationsByState.navigation,
          ...this.currentPhase === "load" ? this.validationsByState.change : []
        ];
        this.currentPhase = "navigation";
      }
      this.runApplicableValidations(runner, canDismiss, phase);
    }
  };
  var ValidationController = class {
    constructor(schema, options) {
      this.hooks = {
        /** A hook called to tap into the validator registry for adding more validators */
        createValidatorRegistry: new SyncHook(),
        /** A callback/event when a new validation is added to the view */
        onAddValidation: new SyncWaterfallHook(),
        /** The inverse of onAddValidation, this is called when a validation is removed from the list */
        onRemoveValidation: new SyncWaterfallHook(),
        resolveValidationProviders: new SyncWaterfallHook(),
        /** A hook called when a binding is added to the tracker */
        onTrackBinding: new SyncHook()
      };
      this.validations = /* @__PURE__ */ new Map();
      this.weakBindingTracker = /* @__PURE__ */ new Set();
      this.schema = schema;
      this.options = options;
      this.reset();
    }
    setOptions(options) {
      this.options = options;
    }
    /** Return the middleware for the data-model to stop propagation of invalid data */
    getDataMiddleware() {
      return [
        {
          set: (transaction, options, next) => {
            return next?.set(transaction, options) ?? [];
          },
          get: (binding, options, next) => {
            return next?.get(binding, options);
          },
          delete: (binding, options, next) => {
            this.validations = removeBindingAndChildrenFromMap(
              this.validations,
              binding
            );
            return next?.delete(binding, options);
          }
        },
        new ValidationMiddleware(
          (binding) => {
            if (!this.options) {
              return;
            }
            this.updateValidationsForBinding(binding, "change", this.options);
            const strongValidation = this.getValidationForBinding(binding);
            if (strongValidation?.get()?.severity === "error") {
              return strongValidation.get();
            }
            const newInvalidBindings = /* @__PURE__ */ new Set();
            this.validations.forEach((weakValidation, strongBinding) => {
              if (caresAboutDataChanges(
                /* @__PURE__ */ new Set([binding]),
                weakValidation.weakBindings
              ) && weakValidation?.get()?.severity === "error") {
                weakValidation?.weakBindings.forEach((weakBinding) => {
                  if (weakBinding === strongBinding) {
                    newInvalidBindings.add({
                      binding: weakBinding,
                      isStrong: true
                    });
                  } else {
                    newInvalidBindings.add({
                      binding: weakBinding,
                      isStrong: false
                    });
                  }
                });
              }
            });
            if (newInvalidBindings.size > 0) {
              return newInvalidBindings;
            }
          },
          { logger: new ProxyLogger(() => this.options?.logger) }
        )
      ];
    }
    getValidationProviders() {
      if (this.providers) {
        return this.providers;
      }
      this.providers = this.hooks.resolveValidationProviders.call([
        {
          source: SCHEMA_VALIDATION_PROVIDER_NAME,
          provider: this.schema
        },
        {
          source: VIEW_VALIDATION_PROVIDER_NAME,
          provider: {
            getValidationsForBinding: (binding) => {
              return this.viewValidationProvider?.getValidationsForBinding?.(
                binding
              );
            },
            getValidationsForView: () => {
              return this.viewValidationProvider?.getValidationsForView?.();
            }
          }
        }
      ]);
      return this.providers;
    }
    reset() {
      this.validations.clear();
      this.tracker = void 0;
    }
    onView(view) {
      this.validations.clear();
      if (!this.options) {
        return;
      }
      const bindingTrackerPlugin = new ValidationBindingTrackerViewPlugin({
        ...this.options,
        callbacks: {
          onAdd: (binding) => {
            if (!this.options || this.getValidationForBinding(binding) !== void 0) {
              return;
            }
            const originalValue = this.options.model.get(binding);
            const withoutDefault = this.options.model.get(binding, {
              ignoreDefaultValue: true
            });
            if (originalValue !== withoutDefault) {
              this.options.model.set([[binding, originalValue]], {
                silent: true
              });
            }
            this.updateValidationsForBinding(
              binding,
              "load",
              this.options,
              () => {
                view.update(/* @__PURE__ */ new Set([binding]));
              }
            );
            this.hooks.onTrackBinding.call(binding);
          }
        }
      });
      this.tracker = bindingTrackerPlugin;
      this.viewValidationProvider = view;
      bindingTrackerPlugin.apply(view);
    }
    updateValidationsForBinding(binding, trigger, validationContext, onDismiss) {
      const context = validationContext ?? this.options;
      if (!context) {
        throw new Error(`Context is required for executing validations`);
      }
      if (trigger === "load") {
        const possibleValidations = this.getValidationProviders().reduce((vals, provider) => {
          vals.push(
            ...provider.provider.getValidationsForBinding?.(binding)?.map((valObj) => ({
              ...valObj,
              [VALIDATION_PROVIDER_NAME_SYMBOL]: provider.source
            })) ?? []
          );
          return vals;
        }, []);
        if (possibleValidations.length === 0) {
          return;
        }
        this.validations.set(
          binding,
          new ValidatedBinding(
            possibleValidations,
            onDismiss,
            this.options?.logger
          )
        );
      }
      const trackedValidations = this.validations.get(binding);
      trackedValidations?.update(trigger, true, (validationObj) => {
        const response = this.validationRunner(validationObj, binding, context);
        if (this.weakBindingTracker.size > 0) {
          const t2 = this.validations.get(binding);
          this.weakBindingTracker.forEach((b) => t2.weakBindings.add(b));
        }
        return response ? { message: response.message } : void 0;
      });
      if (trigger !== "load") {
        this.validations.forEach((validation, vBinding) => {
          if (vBinding !== binding && caresAboutDataChanges(/* @__PURE__ */ new Set([binding]), validation.weakBindings)) {
            validation.update(trigger, true, (validationObj) => {
              const response = this.validationRunner(
                validationObj,
                vBinding,
                context
              );
              return response ? { message: response.message } : void 0;
            });
          }
        });
      }
    }
    validationRunner(validationObj, binding, context = this.options) {
      if (!context) {
        throw new Error("No context provided to validation runner");
      }
      const handler = validationObj.handler ?? this.getValidator(validationObj.type);
      const weakBindings = /* @__PURE__ */ new Set();
      const model = {
        get(b, options) {
          weakBindings.add(isBinding(b) ? binding : context.parseBinding(b));
          return context.model.get(b, { ...options, includeInvalid: true });
        },
        set: context.model.set,
        delete: context.model.delete
      };
      const result = handler?.(
        {
          ...context,
          evaluate: (exp, options = { model }) => context.evaluate(exp, options),
          model,
          validation: validationObj,
          schemaType: this.schema.getType(binding)
        },
        context.model.get(binding, {
          includeInvalid: true,
          formatted: validationObj.dataTarget === "formatted"
        }),
        validationObj
      );
      this.weakBindingTracker = weakBindings;
      if (result) {
        let { message } = result;
        const { parameters } = result;
        if (validationObj.message) {
          message = resolveDataRefs(validationObj.message, {
            model,
            evaluate: context.evaluate
          });
          if (parameters) {
            message = replaceParams(message, parameters);
          }
        }
        return {
          message
        };
      }
    }
    updateValidationsForView(trigger) {
      const isNavigationTrigger = trigger === "navigation";
      const lastActiveBindings = this.activeBindings;
      const updateValidations = (dismissValidations) => {
        this.getBindings().forEach((binding) => {
          this.validations.get(binding)?.update(trigger, dismissValidations, (obj) => {
            if (!this.options) {
              return;
            }
            return this.validationRunner(obj, binding, this.options);
          });
        });
      };
      updateValidations(!isNavigationTrigger);
      if (isNavigationTrigger) {
        const { activeBindings } = this;
        if (isSubset(activeBindings, lastActiveBindings)) {
          updateValidations(true);
        }
      }
    }
    get activeBindings() {
      return new Set(
        Array.from(this.getBindings()).filter(
          (b) => this.validations.get(b)?.get() !== void 0
        )
      );
    }
    getValidator(type) {
      if (this.validatorRegistry) {
        return this.validatorRegistry.get(type);
      }
      const registry = new ValidatorRegistry();
      this.hooks.createValidatorRegistry.call(registry);
      this.validatorRegistry = registry;
      return registry.get(type);
    }
    getBindings() {
      return this.tracker?.getBindings() ?? /* @__PURE__ */ new Set();
    }
    trackBinding(binding) {
      this.tracker?.trackBinding(binding);
    }
    /** Executes all known validations for the tracked bindings using the given model */
    validateView(trigger = "navigation") {
      this.updateValidationsForView(trigger);
      const validations = /* @__PURE__ */ new Map();
      let canTransition = true;
      this.getBindings().forEach((b) => {
        const allValidations = this.getValidationForBinding(b)?.getAll();
        allValidations?.forEach((v) => {
          if (trigger === "navigation" && v.blocking) {
            this.options?.logger.debug(
              `Validation on binding: ${b.asString()} is preventing navigation. ${JSON.stringify(
                v
              )}`
            );
            canTransition = false;
          }
          if (!validations.has(b)) {
            validations.set(b, v);
          }
        });
      });
      return {
        canTransition,
        validations: validations.size ? validations : void 0
      };
    }
    /** Get the current tracked validation for the given binding */
    getValidationForBinding(binding) {
      return this.validations.get(binding);
    }
    forView(parser2) {
      return {
        _getValidationForBinding: (binding) => {
          return this.getValidationForBinding(
            isBinding(binding) ? binding : parser2(binding)
          );
        },
        getAll: () => {
          const bindings = this.getBindings();
          if (bindings.size === 0) {
            return void 0;
          }
          const validationMapping = /* @__PURE__ */ new Map();
          bindings.forEach((b) => {
            const validation = this.getValidationForBinding(b)?.get();
            if (validation) {
              validationMapping.set(b, validation);
            }
          });
          return validationMapping.size === 0 ? void 0 : validationMapping;
        },
        get() {
          throw new Error("Error Access be provided by the view plugin");
        },
        getValidationsForBinding() {
          throw new Error("Error rollup should be provided by the view plugin");
        },
        getChildren() {
          throw new Error("Error rollup should be provided by the view plugin");
        },
        getValidationsForSection() {
          throw new Error("Error rollup should be provided by the view plugin");
        },
        track: () => {
          throw new Error("Tracking should be provided by the view plugin");
        },
        register: () => {
          throw new Error(
            "Section functionality should be provided by the view plugin"
          );
        },
        type: (binding) => this.schema.getType(isBinding(binding) ? binding : parser2(binding))
      };
    }
  };
  var LocalStateStore = class {
    constructor(onUpdate) {
      this.updateCallback = onUpdate;
      this.state = /* @__PURE__ */ new Map();
    }
    removeKey(key) {
      this.state.delete(key);
    }
    reset() {
      this.state.clear();
    }
    useSharedState(key) {
      return (initialState) => {
        if (!this.state.has(key)) {
          this.state.set(key, initialState);
        }
        return [
          this.state.get(key),
          (newState) => {
            const current = this.state.get(key);
            this.state.set(key, newState);
            if (current !== newState) {
              this.updateCallback?.();
            }
          }
        ];
      };
    }
    getLocalStateFunction(key, countKey) {
      return (initialState) => {
        if (!this.state.has(key)) {
          this.state.set(key, []);
        }
        if (!this.state.has(countKey)) {
          this.state.set(countKey, 0);
        }
        const localState = this.state.get(key);
        const oldCount = this.state.get(countKey);
        this.state.set(countKey, oldCount + 1);
        if (localState.length <= oldCount) {
          localState.push(initialState);
        }
        const value = localState[oldCount];
        return [
          value,
          (newState) => {
            const oldValue = localState[oldCount];
            localState[oldCount] = newState;
            if (oldValue !== newState) {
              this.updateCallback?.();
            }
          }
        ];
      };
    }
  };
  function findUp(node, target) {
    if (node === target) {
      return true;
    }
    if (node.parent) {
      return findUp(node.parent, target);
    }
    return false;
  }
  var AssetTransformCorePlugin = class {
    constructor(registry) {
      this.registry = registry;
      this.stateStore = /* @__PURE__ */ new Map();
      this.beforeResolveSymbol = Symbol("before resolve");
      this.resolveSymbol = Symbol("resolve");
      this.beforeResolveCountSymbol = Symbol("before resolve count");
      this.resolveCountSymbol = Symbol("resolve count");
    }
    apply(viewController) {
      viewController.hooks.view.tap("asset-transform", (view) => {
        this.stateStore.clear();
        view.hooks.resolver.tap("asset-transform", (resolver) => {
          let lastUpdatedNode;
          const updateState = (node) => {
            lastUpdatedNode = node;
            view.update(/* @__PURE__ */ new Set());
          };
          const getStore = (node, stepKey) => {
            let store;
            const countKey = stepKey === this.resolveSymbol ? this.resolveCountSymbol : this.beforeResolveCountSymbol;
            const storedState = this.stateStore.get(node);
            if (storedState) {
              store = storedState;
              store.removeKey(countKey);
            } else {
              store = new LocalStateStore(() => {
                updateState(node);
              });
              this.stateStore.set(node, store);
            }
            return {
              useSharedState: (key) => {
                return store.useSharedState(key);
              },
              useLocalState: (initialState) => {
                return store.getLocalStateFunction(
                  stepKey,
                  countKey
                )(initialState);
              }
            };
          };
          resolver.hooks.beforeResolve.tap("asset-transform", (node, options) => {
            if (node && (node.type === "asset" || node.type === "view")) {
              const transform = this.registry.get(node.value);
              if (transform?.beforeResolve) {
                const store = getStore(
                  options.node ?? node,
                  this.beforeResolveSymbol
                );
                return transform.beforeResolve(node, options, store);
              }
            }
            return node;
          });
          resolver.hooks.afterUpdate.tap("asset-transform", () => {
            lastUpdatedNode = void 0;
          });
          resolver.hooks.skipResolve.tap("asset-transform", (skip, node) => {
            if (!skip || !lastUpdatedNode) {
              return skip;
            }
            const isParentOfUpdated = findUp(lastUpdatedNode, node);
            const isChildOfUpdated = findUp(node, lastUpdatedNode);
            return !isParentOfUpdated && !isChildOfUpdated;
          });
          resolver.hooks.afterResolve.tap(
            "asset-transform",
            (value, node, options) => {
              if (node.type !== "asset" && node.type !== "view") {
                return value;
              }
              const originalNode = resolver.getSourceNode(node);
              if (!originalNode) {
                return value;
              }
              const transform = this.registry.get(value);
              if (transform?.resolve) {
                const store = getStore(originalNode, this.resolveSymbol);
                return transform?.resolve(value, options, store);
              }
              return value;
            }
          );
        });
      });
    }
  };
  var ViewController = class {
    constructor(initialViews, options) {
      this.hooks = {
        /** Do any processing before the `View` instance is created */
        resolveView: new SyncWaterfallHook(),
        // The hook right before the View starts resolving. Attach anything custom here
        view: new SyncHook()
      };
      this.transformRegistry = new Registry();
      this.optimizeUpdates = true;
      this.viewOptions = options;
      this.viewMap = initialViews.reduce(
        (viewMap, view) => {
          viewMap[view.id] = view;
          return viewMap;
        },
        {}
      );
      new AssetTransformCorePlugin(this.transformRegistry).apply(this);
      options.flowController.hooks.flow.tap(
        "viewController",
        (flow) => {
          flow.hooks.transition.tap("viewController", (_oldState, newState) => {
            if (newState.value.state_type === "VIEW") {
              this.onView(newState.value);
            } else {
              this.currentView = void 0;
            }
          });
        }
      );
      const update = (updates, silent = false) => {
        if (this.currentView) {
          if (this.optimizeUpdates) {
            this.queueUpdate(updates, silent);
          } else {
            this.currentView.update();
          }
        }
      };
      options.model.hooks.onUpdate.tap(
        "viewController",
        (updates, updateOptions) => {
          update(
            new Set(updates.map((t2) => t2.binding)),
            updateOptions?.silent ?? false
          );
        }
      );
      options.model.hooks.onDelete.tap("viewController", (binding) => {
        const parentBinding = binding.parent();
        const property = binding.key();
        if (typeof property === "number" && parentBinding) {
          update(/* @__PURE__ */ new Set([parentBinding]));
        } else {
          update(/* @__PURE__ */ new Set([binding]));
        }
      });
    }
    queueUpdate(bindings, silent = false) {
      if (this.pendingUpdate?.changedBindings) {
        this.pendingUpdate.changedBindings = /* @__PURE__ */ new Set([
          ...this.pendingUpdate.changedBindings,
          ...bindings
        ]);
      } else {
        this.pendingUpdate = { changedBindings: bindings, scheduled: false };
      }
      if (!this.pendingUpdate.scheduled && !silent) {
        this.pendingUpdate.scheduled = true;
        (0, import_queue_microtask.default)(() => {
          const updates = this.pendingUpdate?.changedBindings;
          this.pendingUpdate = void 0;
          this.currentView?.update(updates);
        });
      }
    }
    getViewForRef(viewRef) {
      if (this.viewMap[viewRef]) {
        return this.viewMap[viewRef];
      }
      const matchingViewId = Object.keys(this.viewMap).find(
        (possibleViewIdMatch) => viewRef === resolveDataRefsInString(possibleViewIdMatch, {
          model: this.viewOptions.model,
          evaluate: this.viewOptions.evaluator.evaluate
        })
      );
      if (matchingViewId && this.viewMap[matchingViewId]) {
        return this.viewMap[matchingViewId];
      }
    }
    onView(state) {
      const viewId = state.ref;
      const source = this.hooks.resolveView.call(
        this.getViewForRef(viewId),
        viewId,
        state
      );
      if (!source) {
        throw new Error(`No view with id ${viewId}`);
      }
      const view = new ViewInstance(source, this.viewOptions);
      this.currentView = view;
      this.hooks.view.call(view);
      view.update();
    }
  };
  var ReadOnlyDataController = class {
    constructor(controller, logger) {
      this.controller = controller;
      this.logger = logger;
    }
    get(binding, options) {
      return this.controller.get(binding, options);
    }
    set(transaction, options) {
      this.logger?.error(
        "Error: Tried to set in a read only instance of the DataController"
      );
      return [];
    }
    delete(binding, options) {
      this.logger?.error(
        "Error: Tried to delete in a read only instance of the DataController"
      );
    }
  };
  var DataController = class {
    constructor(model, options) {
      this.hooks = {
        resolve: new SyncWaterfallHook(),
        resolveDataStages: new SyncWaterfallHook(),
        // On any set or get of an undefined value, redirect the value to be the default
        resolveDefaultValue: new SyncBailHook(),
        onDelete: new SyncHook(),
        onSet: new SyncHook(),
        onGet: new SyncHook(),
        onUpdate: new SyncHook(),
        format: new SyncWaterfallHook(),
        deformat: new SyncWaterfallHook(),
        serialize: new SyncWaterfallHook()
      };
      this.logger = options.logger;
      const middleware = options.middleware || [];
      this.baseMiddleware = [new LocalModel(model), ...middleware];
      this.trash = /* @__PURE__ */ new Set();
      this.pathResolver = options.pathResolver;
    }
    getModel() {
      if (!this.model) {
        const stages = this.hooks.resolveDataStages.call(this.baseMiddleware);
        const model = new PipelinedDataModel();
        model.setMiddleware(stages);
        this.model = model;
      }
      return this.model;
    }
    resolveDataValue(binding, value, deformat) {
      if (deformat) {
        return this.hooks.deformat.call(value, binding);
      }
      return value;
    }
    set(transaction, options) {
      let normalizedTransaction = [];
      if (Array.isArray(transaction)) {
        normalizedTransaction = transaction.map(([binding, value]) => {
          const parsed = this.pathResolver.parse(binding);
          return [
            parsed,
            this.resolveDataValue(parsed, value, Boolean(options?.formatted))
          ];
        });
      } else {
        normalizedTransaction = Object.keys(transaction).map(
          (binding) => {
            const parsed = this.pathResolver.parse(binding);
            const val = transaction[binding];
            return [
              parsed,
              this.resolveDataValue(parsed, val, Boolean(options?.formatted))
            ];
          }
        );
      }
      const setUpdates = normalizedTransaction.reduce(
        (updates, [binding, newVal]) => {
          const oldVal = this.get(binding, { includeInvalid: true });
          const update = {
            binding,
            newValue: newVal,
            oldValue: oldVal
          };
          if (dequal(oldVal, newVal)) {
            this.logger?.debug(
              `Skipping update for path: ${binding.asString()}. Value was unchanged: ${oldVal}`
            );
          } else {
            updates.push(update);
            this.logger?.debug(
              `Setting path: ${binding.asString()} from: ${oldVal} to: ${newVal}`
            );
          }
          return updates;
        },
        []
      );
      const result = this.getModel().set(normalizedTransaction, options);
      const setUpdateBindings = new Set(setUpdates.map((su) => su.binding));
      result.forEach((tr) => {
        if (!setUpdateBindings.has(tr.binding) && (tr.force === true || !dequal(tr.oldValue, tr.newValue))) {
          this.logger?.debug(
            `Path: ${tr.binding.asString()} was changed from: ${tr.oldValue} to: ${tr.newValue}`
          );
          setUpdates.push(tr);
        }
      });
      this.hooks.onSet.call(normalizedTransaction);
      if (setUpdates.length > 0) {
        this.hooks.onUpdate.call(setUpdates, options);
      }
      return result;
    }
    resolve(binding, readOnly) {
      return Array.isArray(binding) || typeof binding === "string" ? this.pathResolver.parse(binding, { readOnly }) : binding;
    }
    get(binding, options) {
      const resolved = binding instanceof BindingInstance ? binding : this.resolve(binding, true);
      let result = this.getModel().get(resolved, options);
      if (result === void 0 && !options?.ignoreDefaultValue) {
        const defaultVal = this.hooks.resolveDefaultValue.call(resolved);
        if (defaultVal !== result) {
          result = defaultVal;
        }
      }
      if (options?.formatted) {
        result = this.hooks.format.call(result, resolved);
      } else if (options?.formatted === false) {
        result = this.hooks.deformat.call(result, resolved);
      }
      this.hooks.onGet.call(binding, result);
      return result;
    }
    delete(binding, options) {
      if (typeof binding !== "string" && !Array.isArray(binding) && !(binding instanceof BindingInstance)) {
        throw new Error("Invalid arguments: delete expects a data path (string)");
      }
      const resolved = binding instanceof BindingInstance ? binding : this.resolve(binding, false);
      const parentBinding = resolved.parent();
      const property = resolved.key();
      const parentValue = this.get(parentBinding);
      const existedBeforeDelete = typeof parentValue === "object" && parentValue !== null && Object.prototype.hasOwnProperty.call(parentValue, property);
      this.getModel().delete(resolved, options);
      if (existedBeforeDelete && !this.get(resolved)) {
        this.trash.add(resolved);
      }
      this.hooks.onDelete.call(resolved);
    }
    serialize() {
      return this.hooks.serialize.call(this.get(""));
    }
    makeReadOnly() {
      return new ReadOnlyDataController(this, this.logger);
    }
  };
  function flatten2(obj, roots = [], sep = ".") {
    return Object.keys(obj).reduce(
      (memo, prop) => ({
        // create a new object
        // include previously returned object
        ...memo,
        ...Object.prototype.toString.call(obj[prop]) === "[object Object]" ? (
          // keep working if value is an object
          flatten2(obj[prop], roots.concat([prop]))
        ) : (
          // include current prop and value and prefix prop with the roots
          { [roots.concat([prop]).join(sep)]: obj[prop] }
        )
      }),
      {}
    );
  }
  function objectToBatchSet(obj) {
    const flattenedObj = flatten2(obj);
    const batchTxn = [];
    Object.keys(flattenedObj).forEach((key) => {
      batchTxn.push([new BindingInstance(key), flattenedObj[key]]);
    });
    return batchTxn;
  }
  var ConstantsController = class {
    constructor() {
      this.store = /* @__PURE__ */ new Map();
      this.tempStore = /* @__PURE__ */ new Map();
    }
    addConstants(data, namespace) {
      if (this.store.has(namespace)) {
        this.store.get(namespace)?.set(objectToBatchSet(data));
      } else {
        this.store.set(namespace, new LocalModel(data));
      }
    }
    getConstants(key, namespace, fallback) {
      const path2 = new BindingInstance(key);
      return this.tempStore.get(namespace)?.get(path2) ?? this.store.get(namespace)?.get(path2) ?? fallback;
    }
    setTemporaryValues(data, namespace) {
      if (this.tempStore.has(namespace)) {
        this.tempStore.get(namespace)?.set(objectToBatchSet(data));
      } else {
        this.tempStore.set(namespace, new LocalModel(data));
      }
    }
    clearTemporaryValues(namespace) {
      if (namespace) {
        this.tempStore.get(namespace)?.reset();
      } else {
        this.tempStore.forEach((value) => {
          value.reset();
        });
      }
    }
  };
  var FlowExpPlugin = class {
    constructor() {
      this.name = "flow-exp-plugin";
    }
    apply(player) {
      let expressionEvaluator;
      const handleEval = (exp) => {
        if (exp) {
          if (typeof exp === "object" && "exp" in exp) {
            expressionEvaluator?.evaluate(exp.exp);
          } else {
            expressionEvaluator?.evaluate(exp);
          }
        }
      };
      player.hooks.expressionEvaluator.tap(this.name, (evaluator) => {
        expressionEvaluator = evaluator;
      });
      player.hooks.flowController.tap(this.name, (fc) => {
        fc.hooks.flow.tap(this.name, (flow) => {
          flow.hooks.onStart.tap(this.name, (exp) => handleEval(exp));
          flow.hooks.onEnd.tap(this.name, (exp) => handleEval(exp));
          flow.hooks.resolveTransitionNode.intercept({
            call: (nextState) => {
              if (nextState?.onStart) {
                handleEval(nextState.onStart);
              }
            }
          });
        });
      });
    }
  };
  var createFormatFunction = (schema) => {
    const handler = (ctx, value, formatName) => {
      return schema.getFormatterForType({ type: formatName })?.format(value) ?? value;
    };
    return handler;
  };
  var DefaultExpPlugin = class {
    constructor() {
      this.name = "flow-exp-plugin";
    }
    apply(player) {
      let formatFunction;
      player.hooks.schema.tap(this.name, (schemaController) => {
        formatFunction = createFormatFunction(schemaController);
      });
      player.hooks.expressionEvaluator.tap(this.name, (expEvaluator) => {
        if (formatFunction) {
          expEvaluator.addExpressionFunction("format", formatFunction);
        }
        expEvaluator.addExpressionFunction("log", (ctx, ...args) => {
          player.logger.info(...args);
        });
        expEvaluator.addExpressionFunction("debug", (ctx, ...args) => {
          player.logger.debug(...args);
        });
        expEvaluator.addExpressionFunction(
          "eval",
          (ctx, ...args) => {
            return ctx.evaluate(...args);
          }
        );
      });
    }
  };
  var NOT_STARTED_STATE = {
    ref: Symbol("not-started"),
    status: "not-started"
  };
  var DefaultViewPlugin = class {
    constructor() {
      this.name = "default-view-plugin";
    }
    apply(player) {
      player.hooks.viewController.tap(this.name, (viewController) => {
        viewController.hooks.view.tap(this.name, (view) => {
          const pluginOptions = toNodeResolveOptions(view.resolverOptions);
          new SwitchPlugin(pluginOptions).apply(view);
          new ApplicabilityPlugin().apply(view);
          new StringResolverPlugin().apply(view);
          const templatePlugin = new TemplatePlugin(pluginOptions);
          templatePlugin.apply(view);
          view.hooks.onTemplatePluginCreated.call(templatePlugin);
        });
      });
    }
  };
  var PLAYER_VERSION = "__VERSION__";
  var COMMIT = "__GIT_COMMIT__";
  var _Player = class _Player2 {
    constructor(config) {
      this.logger = new TapableLogger();
      this.constantsController = new ConstantsController();
      this.state = NOT_STARTED_STATE;
      this.hooks = {
        /** The hook that fires every time we create a new flowController (a new Content blob is passed in) */
        flowController: new SyncHook(),
        /** The hook that updates/handles views */
        viewController: new SyncHook(),
        /** A hook called every-time there's a new view. This is equivalent to the view hook on the view-controller */
        view: new SyncHook(),
        /** Called when an expression evaluator was created */
        expressionEvaluator: new SyncHook(),
        /** The hook that creates and manages data */
        dataController: new SyncHook(),
        /** Called after the schema is created for a flow */
        schema: new SyncHook(),
        /** Manages validations (schema and x-field ) */
        validationController: new SyncHook(),
        /** Manages parsing binding */
        bindingParser: new SyncHook(),
        /** A that's called for state changes in the flow execution */
        state: new SyncHook(),
        /** A hook to access the current flow */
        onStart: new SyncHook(),
        /** A hook for when the flow ends either in success or failure */
        onEnd: new SyncHook(),
        /** Mutate the Content flow before starting */
        resolveFlowContent: new SyncWaterfallHook()
      };
      if (config?.logger) {
        this.logger.addHandler(config.logger);
      }
      this.config = config || {};
      this.config.plugins = [
        new DefaultExpPlugin(),
        new DefaultViewPlugin(),
        ...this.config.plugins || [],
        new FlowExpPlugin()
      ];
      this.config.plugins?.forEach((plugin) => {
        plugin.apply(this);
      });
    }
    /**  Returns currently registered plugins */
    getPlugins() {
      return this.config.plugins ?? [];
    }
    /** Find instance of [Plugin] that has been registered to Player */
    findPlugin(symbol) {
      return this.config.plugins?.find((el) => el.symbol === symbol);
    }
    /** Retrieve an instance of [Plugin] and conditionally invoke [apply] if it exists */
    applyTo(symbol, apply) {
      const plugin = this.findPlugin(symbol);
      if (plugin) {
        apply(plugin);
      }
    }
    /** Register and apply [Plugin] if one with the same symbol is not already registered. */
    registerPlugin(plugin) {
      plugin.apply(this);
      this.config.plugins?.push(plugin);
    }
    /** Returns the current version of the running player */
    getVersion() {
      return _Player2.info.version;
    }
    /** Returns the git commit used to build Player version */
    getCommit() {
      return _Player2.info.commit;
    }
    /**
     * Fetch the current state of Player.
     * It will return either `not-started`, `in-progress`, `completed`
     * with some extra data in each
     */
    getState() {
      return this.state;
    }
    /**
     * A private means of setting the state of Player
     * Calls the hooks for subscribers to listen for this event
     */
    setState(state) {
      this.state = state;
      this.hooks.state.call(state);
    }
    /** Start Player with the given flow */
    setupFlow(userContent) {
      const userFlow = this.hooks.resolveFlowContent.call(userContent);
      const flowController = new FlowController(userFlow.navigation, {
        logger: this.logger
      });
      this.hooks.onStart.call(userFlow);
      this.hooks.flowController.call(flowController);
      let expressionEvaluator;
      let dataController;
      const pathResolver = new BindingParser({
        get: (binding) => {
          return dataController.get(binding);
        },
        set: (transaction) => {
          return dataController.set(transaction);
        },
        evaluate: (expression) => {
          return expressionEvaluator.evaluate(expression);
        }
      });
      this.hooks.bindingParser.call(pathResolver);
      const parseBinding = pathResolver.parse;
      const flowResultDeferred = (0, import_p_defer.default)();
      const schema = new SchemaController(userFlow.schema);
      this.hooks.schema.call(schema);
      const validationController = new ValidationController(schema);
      this.hooks.validationController.call(validationController);
      dataController = new DataController(userFlow.data, {
        pathResolver,
        middleware: validationController.getDataMiddleware(),
        logger: this.logger
      });
      dataController.hooks.format.tap("player", (value, binding) => {
        const formatter = schema.getFormatter(binding);
        return formatter ? formatter.format(value) : value;
      });
      dataController.hooks.deformat.tap("player", (value, binding) => {
        const formatter = schema.getFormatter(binding);
        return formatter ? formatter.deformat(value) : value;
      });
      dataController.hooks.resolveDefaultValue.tap(
        "player",
        (binding) => schema.getApparentType(binding)?.default
      );
      let viewController;
      expressionEvaluator = new ExpressionEvaluator({
        model: dataController,
        logger: this.logger
      });
      this.hooks.expressionEvaluator.call(expressionEvaluator);
      expressionEvaluator.hooks.onError.tap("player", (e) => {
        flowResultDeferred.reject(e);
        return true;
      });
      function resolveStrings(val, formatted) {
        return resolveDataRefs(val, {
          model: dataController,
          evaluate: expressionEvaluator.evaluate,
          formatted
        });
      }
      flowController.hooks.flow.tap("player", (flow) => {
        flow.hooks.beforeTransition.tap("player", (state, transitionVal) => {
          const computedTransitionVal = state.transitions[transitionVal] ? transitionVal : "*";
          if (state.onEnd && state.transitions[computedTransitionVal]) {
            if (typeof state.onEnd === "object" && "exp" in state.onEnd) {
              expressionEvaluator?.evaluate(state.onEnd.exp);
            } else {
              expressionEvaluator?.evaluate(state.onEnd);
            }
          }
          if (!("transitions" in state) || !state.transitions[computedTransitionVal]) {
            return state;
          }
          return (0, import_timm8.setIn)(
            state,
            ["transitions", computedTransitionVal],
            resolveStrings(state.transitions[computedTransitionVal])
          );
        });
        flow.hooks.skipTransition.tap("validation", (currentState) => {
          if (currentState?.value.state_type === "VIEW") {
            const { canTransition, validations } = validationController.validateView("navigation");
            if (!canTransition && validations) {
              const bindings = new Set(validations.keys());
              viewController?.currentView?.update(bindings);
              return true;
            }
          }
          return void 0;
        });
        flow.hooks.resolveTransitionNode.tap("player", (state) => {
          let newState = state;
          if ("ref" in state) {
            newState = (0, import_timm8.setIn)(state, ["ref"], resolveStrings(state.ref));
          }
          if ("param" in state) {
            newState = (0, import_timm8.setIn)(
              state,
              ["param"],
              resolveStrings(state.param, false)
            );
          }
          return newState;
        });
        flow.hooks.transition.tap("player", (_oldState, newState) => {
          if (newState.value.state_type !== "VIEW") {
            validationController.reset();
          }
        });
        flow.hooks.afterTransition.tap("player", (flowInstance) => {
          const value = flowInstance.currentState?.value;
          if (value && value.state_type === "ACTION") {
            const { exp } = value;
            flowController?.transition(
              String(expressionEvaluator?.evaluate(exp))
            );
          }
          expressionEvaluator.reset();
        });
      });
      this.hooks.dataController.call(dataController);
      validationController.setOptions({
        parseBinding,
        model: dataController,
        logger: this.logger,
        evaluate: expressionEvaluator.evaluate,
        constants: this.constantsController
      });
      viewController = new ViewController(userFlow.views || [], {
        evaluator: expressionEvaluator,
        parseBinding,
        transition: flowController.transition,
        model: dataController,
        utils: {
          findPlugin: (pluginSymbol) => {
            return this.findPlugin(pluginSymbol);
          }
        },
        logger: this.logger,
        flowController,
        schema,
        format: (binding, value) => {
          const formatter = schema.getFormatter(binding);
          return formatter?.format ? formatter.format(value) : value;
        },
        formatValue: (ref, value) => {
          const formatter = schema.getFormatterForType(ref);
          return formatter?.format ? formatter.format(value) : value;
        },
        validation: {
          ...validationController.forView(parseBinding),
          type: (b) => schema.getType(parseBinding(b))
        },
        constants: this.constantsController
      });
      viewController.hooks.view.tap("player", (view) => {
        validationController.onView(view);
        this.hooks.view.call(view);
      });
      this.hooks.viewController.call(viewController);
      return {
        start: () => {
          flowController.start().then((endState) => {
            const flowResult = {
              endState: resolveStrings(endState, false),
              data: dataController.serialize()
            };
            return flowResult;
          }).then(flowResultDeferred.resolve).catch((e) => {
            this.logger.error(`Something went wrong: ${e.message}`);
            throw e;
          }).catch(flowResultDeferred.reject).finally(() => this.hooks.onEnd.call());
        },
        state: {
          status: "in-progress",
          flowResult: flowResultDeferred.promise,
          controllers: {
            data: dataController,
            view: viewController,
            flow: flowController,
            schema,
            expression: expressionEvaluator,
            binding: pathResolver,
            validation: validationController
          },
          fail: flowResultDeferred.reject,
          flow: userFlow,
          logger: this.logger
        }
      };
    }
    async start(payload) {
      const ref = Symbol(payload?.id ?? "payload");
      const maybeUpdateState = (newState) => {
        if (this.state.ref !== ref) {
          this.logger.warn(
            `Received update for a flow that's not the current one`
          );
          return newState;
        }
        this.setState(newState);
        return newState;
      };
      this.setState({
        status: "not-started",
        ref
      });
      try {
        const { state, start } = this.setupFlow(payload);
        this.setState({
          ref,
          ...state
        });
        start();
        const endProps = {
          ref,
          status: "completed",
          flow: state.flow,
          controllers: {
            data: state.controllers.data.makeReadOnly()
          }
        };
        return maybeUpdateState({
          ...await state.flowResult,
          ...endProps
        });
      } catch (error) {
        const errorState = {
          status: "error",
          ref,
          flow: payload,
          error
        };
        maybeUpdateState(errorState);
        throw error;
      }
    }
  };
  _Player.info = {
    version: PLAYER_VERSION,
    commit: COMMIT
  };

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/stage-revert-data/core/src/index.ts
  var StageRevertDataPlugin = class {
    constructor() {
      this.name = "stage-revert-data-plugin";
    }
    apply(player) {
      let dataController;
      let commitTransitions;
      let stageData;
      let commitShadowModel = false;
      const GatedDataMiddleware = new ValidationMiddleware(
        () => commitShadowModel ? void 0 : {
          message: "staging data",
          severity: "error"
        },
        { shouldIncludeInvalid: () => true }
      );
      player.hooks.dataController.tap(this.name, (dc) => {
        dataController = dc;
        dc.hooks.resolveDataStages.tap(this.name, (dataPipeline) => {
          return stageData ? [...dataPipeline, GatedDataMiddleware] : [...dataPipeline];
        });
      });
      player.hooks.flowController.tap(this.name, (flowController) => {
        flowController.hooks.flow.tap(this.name, (flow) => {
          flow.hooks.transition.tap(this.name, (from, to) => {
            if (from) {
              if (commitTransitions.includes(to.name)) {
                commitShadowModel = true;
                player.logger.debug(
                  "Shadow Model Data to be committed %s",
                  GatedDataMiddleware.shadowModelPaths
                );
                dataController.set(GatedDataMiddleware.shadowModelPaths);
              }
              commitShadowModel = false;
              GatedDataMiddleware.shadowModelPaths.clear();
            }
          });
        });
      });
      player.hooks.viewController.tap(this.name, (vc) => {
        vc.hooks.resolveView.intercept({
          call: (view, id, state) => {
            stageData = state?.attributes?.stageData;
            commitTransitions = state?.attributes?.commitTransitions;
          }
        });
      });
    }
  };
  return __toCommonJS(src_exports);
})();
/*! Bundled license information:

arr-flatten/index.js:
  (*!
   * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)

queue-microtask/index.js:
  (*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
//# sourceMappingURL=index.global.js.map