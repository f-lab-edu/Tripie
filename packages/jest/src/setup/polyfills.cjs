const {ReadableStream} = require('node:stream/web')
const {TextDecoder, TextEncoder} = require('node:util')

Object.defineProperties(globalThis, {
    TextDecoder: {value: TextDecoder},
    TextEncoder: {value: TextEncoder},
    ReadableStream: {value: ReadableStream},
})

const {Blob, File} = require('node:buffer') // eslint-disable-line import/order

const {fetch, Headers, FormData, Request, Response} = require('undici')

Object.defineProperties(globalThis, {
    fetch: {value: fetch, writable: true},
    Blob: {value: Blob},
    File: {value: File},
    Headers: {value: Headers},
    FormData: {value: FormData},
    Request: {value: Request},
    Response: {value: Response},
})
