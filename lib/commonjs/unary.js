"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrpcUnaryCall = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _abort = new WeakMap();

class GrpcUnaryCall {
  constructor(method, data, requestHeaders, headers, response, trailers, abort) {
    _defineProperty(this, "method", void 0);

    _defineProperty(this, "requestHeaders", void 0);

    _defineProperty(this, "request", void 0);

    _defineProperty(this, "headers", void 0);

    _defineProperty(this, "response", void 0);

    _defineProperty(this, "trailers", void 0);

    _abort.set(this, {
      writable: true,
      value: void 0
    });

    this.method = method;
    this.request = data;
    this.requestHeaders = requestHeaders;
    this.headers = headers;
    this.response = response;
    this.trailers = trailers;

    _classPrivateFieldSet(this, _abort, abort);
  }

  then(onfulfilled, onrejected) {
    return this.completedPromise().then(value => onfulfilled ? Promise.resolve(onfulfilled(value)) : value, reason => onrejected ? Promise.resolve(onrejected(reason)) : Promise.reject(reason));
  }

  cancel() {
    _classPrivateFieldGet(this, _abort).abort();
  }

  async completedPromise() {
    const [headers, response, trailers] = await Promise.all([this.headers, this.response, this.trailers]);
    return {
      method: this.method,
      requestHeaders: this.requestHeaders,
      request: this.request,
      headers,
      trailers,
      response: response,
      status: 0
    };
  }

}

exports.GrpcUnaryCall = GrpcUnaryCall;
//# sourceMappingURL=unary.js.map