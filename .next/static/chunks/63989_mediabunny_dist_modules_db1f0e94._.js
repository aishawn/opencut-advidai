(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/custom-coder.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ /**
 * Base class for custom video decoders. To add your own custom video decoder, extend this class, implement the
 * abstract methods and static `supports` method, and register the decoder using `registerDecoder`.
 * @public
 */ __turbopack_context__.s({
    "CustomAudioDecoder": ()=>CustomAudioDecoder,
    "CustomAudioEncoder": ()=>CustomAudioEncoder,
    "CustomVideoDecoder": ()=>CustomVideoDecoder,
    "CustomVideoEncoder": ()=>CustomVideoEncoder,
    "customAudioDecoders": ()=>customAudioDecoders,
    "customAudioEncoders": ()=>customAudioEncoders,
    "customVideoDecoders": ()=>customVideoDecoders,
    "customVideoEncoders": ()=>customVideoEncoders,
    "registerDecoder": ()=>registerDecoder,
    "registerEncoder": ()=>registerEncoder
});
class CustomVideoDecoder {
    /** Returns true iff the decoder can decode the given codec configuration. */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static supports(codec, config) {
        return false;
    }
}
class CustomAudioDecoder {
    /** Returns true iff the decoder can decode the given codec configuration. */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static supports(codec, config) {
        return false;
    }
}
class CustomVideoEncoder {
    /** Returns true iff the encoder can encode the given codec configuration. */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static supports(codec, config) {
        return false;
    }
}
class CustomAudioEncoder {
    /** Returns true iff the encoder can encode the given codec configuration. */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static supports(codec, config) {
        return false;
    }
}
const customVideoDecoders = [];
const customAudioDecoders = [];
const customVideoEncoders = [];
const customAudioEncoders = [];
const registerDecoder = (decoder)=>{
    if (decoder.prototype instanceof CustomVideoDecoder) {
        const casted = decoder;
        if (customVideoDecoders.includes(casted)) {
            console.warn('Video decoder already registered.');
            return;
        }
        customVideoDecoders.push(casted);
    } else if (decoder.prototype instanceof CustomAudioDecoder) {
        const casted = decoder;
        if (customAudioDecoders.includes(casted)) {
            console.warn('Audio decoder already registered.');
            return;
        }
        customAudioDecoders.push(casted);
    } else {
        throw new TypeError('Decoder must be a CustomVideoDecoder or CustomAudioDecoder.');
    }
};
const registerEncoder = (encoder)=>{
    if (encoder.prototype instanceof CustomVideoEncoder) {
        const casted = encoder;
        if (customVideoEncoders.includes(casted)) {
            console.warn('Video encoder already registered.');
            return;
        }
        customVideoEncoders.push(casted);
    } else if (encoder.prototype instanceof CustomAudioEncoder) {
        const casted = encoder;
        if (customAudioEncoders.includes(casted)) {
            console.warn('Audio encoder already registered.');
            return;
        }
        customAudioEncoders.push(casted);
    } else {
        throw new TypeError('Encoder must be a CustomVideoEncoder or CustomAudioEncoder.');
    }
};
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "AsyncMutex": ()=>AsyncMutex,
    "Bitstream": ()=>Bitstream,
    "COLOR_PRIMARIES_MAP": ()=>COLOR_PRIMARIES_MAP,
    "COLOR_PRIMARIES_MAP_INVERSE": ()=>COLOR_PRIMARIES_MAP_INVERSE,
    "CallSerializer": ()=>CallSerializer,
    "MATRIX_COEFFICIENTS_MAP": ()=>MATRIX_COEFFICIENTS_MAP,
    "MATRIX_COEFFICIENTS_MAP_INVERSE": ()=>MATRIX_COEFFICIENTS_MAP_INVERSE,
    "SECOND_TO_MICROSECOND_FACTOR": ()=>SECOND_TO_MICROSECOND_FACTOR,
    "TRANSFER_CHARACTERISTICS_MAP": ()=>TRANSFER_CHARACTERISTICS_MAP,
    "TRANSFER_CHARACTERISTICS_MAP_INVERSE": ()=>TRANSFER_CHARACTERISTICS_MAP_INVERSE,
    "UNDETERMINED_LANGUAGE": ()=>UNDETERMINED_LANGUAGE,
    "assert": ()=>assert,
    "assertNever": ()=>assertNever,
    "binarySearchExact": ()=>binarySearchExact,
    "binarySearchLessOrEqual": ()=>binarySearchLessOrEqual,
    "bytesToHexString": ()=>bytesToHexString,
    "clamp": ()=>clamp,
    "colorSpaceIsComplete": ()=>colorSpaceIsComplete,
    "computeRationalApproximation": ()=>computeRationalApproximation,
    "findLast": ()=>findLast,
    "findLastIndex": ()=>findLastIndex,
    "getInt24": ()=>getInt24,
    "getUint24": ()=>getUint24,
    "ilog": ()=>ilog,
    "insertSorted": ()=>insertSorted,
    "isAllowSharedBufferSource": ()=>isAllowSharedBufferSource,
    "isIso639Dash2LanguageCode": ()=>isIso639Dash2LanguageCode,
    "isSafari": ()=>isSafari,
    "isU32": ()=>isU32,
    "last": ()=>last,
    "mapAsyncGenerator": ()=>mapAsyncGenerator,
    "mergeObjectsDeeply": ()=>mergeObjectsDeeply,
    "normalizeRotation": ()=>normalizeRotation,
    "promiseWithResolvers": ()=>promiseWithResolvers,
    "readExpGolomb": ()=>readExpGolomb,
    "readSignedExpGolomb": ()=>readSignedExpGolomb,
    "removeItem": ()=>removeItem,
    "retriedFetch": ()=>retriedFetch,
    "reverseBitsU32": ()=>reverseBitsU32,
    "roundToMultiple": ()=>roundToMultiple,
    "roundToPrecision": ()=>roundToPrecision,
    "setInt24": ()=>setInt24,
    "setInt64": ()=>setInt64,
    "setUint24": ()=>setUint24,
    "textEncoder": ()=>textEncoder,
    "toAsyncIterator": ()=>toAsyncIterator,
    "toDataView": ()=>toDataView,
    "toUint8Array": ()=>toUint8Array,
    "validateAnyIterable": ()=>validateAnyIterable,
    "writeBits": ()=>writeBits
});
function assert(x) {
    if (!x) {
        throw new Error('Assertion failed.');
    }
}
const normalizeRotation = (rotation)=>{
    const mappedRotation = (rotation % 360 + 360) % 360;
    if (mappedRotation === 0 || mappedRotation === 90 || mappedRotation === 180 || mappedRotation === 270) {
        return mappedRotation;
    } else {
        throw new Error("Invalid rotation ".concat(rotation, "."));
    }
};
const last = (arr)=>{
    return arr && arr[arr.length - 1];
};
const isU32 = (value)=>{
    return value >= 0 && value < 2 ** 32;
};
class Bitstream {
    seekToByte(byteOffset) {
        this.pos = 8 * byteOffset;
    }
    readBit() {
        const byteIndex = Math.floor(this.pos / 8);
        var _this_bytes_byteIndex;
        const byte = (_this_bytes_byteIndex = this.bytes[byteIndex]) !== null && _this_bytes_byteIndex !== void 0 ? _this_bytes_byteIndex : 0;
        const bitIndex = 0b111 - (this.pos & 0b111);
        const bit = (byte & 1 << bitIndex) >> bitIndex;
        this.pos++;
        return bit;
    }
    readBits(n) {
        if (n === 1) {
            return this.readBit();
        }
        let result = 0;
        for(let i = 0; i < n; i++){
            result <<= 1;
            result |= this.readBit();
        }
        return result;
    }
    writeBits(n, value) {
        const end = this.pos + n;
        for(let i = this.pos; i < end; i++){
            const byteIndex = Math.floor(i / 8);
            let byte = this.bytes[byteIndex];
            const bitIndex = 0b111 - (i & 0b111);
            byte &= ~(1 << bitIndex);
            byte |= (value & 1 << end - i - 1) >> end - i - 1 << bitIndex;
            this.bytes[byteIndex] = byte;
        }
        this.pos = end;
    }
    readAlignedByte() {
        // Ensure we're byte-aligned
        if (this.pos % 8 !== 0) {
            throw new Error('Bitstream is not byte-aligned.');
        }
        const byteIndex = this.pos / 8;
        var _this_bytes_byteIndex;
        const byte = (_this_bytes_byteIndex = this.bytes[byteIndex]) !== null && _this_bytes_byteIndex !== void 0 ? _this_bytes_byteIndex : 0;
        this.pos += 8;
        return byte;
    }
    skipBits(n) {
        this.pos += n;
    }
    getBitsLeft() {
        return this.bytes.length * 8 - this.pos;
    }
    clone() {
        const clone = new Bitstream(this.bytes);
        clone.pos = this.pos;
        return clone;
    }
    constructor(bytes){
        this.bytes = bytes;
        /** Current offset in bits. */ this.pos = 0;
    }
}
const readExpGolomb = (bitstream)=>{
    let leadingZeroBits = 0;
    while(bitstream.readBits(1) === 0 && leadingZeroBits < 32){
        leadingZeroBits++;
    }
    if (leadingZeroBits >= 32) {
        throw new Error('Invalid exponential-Golomb code.');
    }
    const result = (1 << leadingZeroBits) - 1 + bitstream.readBits(leadingZeroBits);
    return result;
};
const readSignedExpGolomb = (bitstream)=>{
    const codeNum = readExpGolomb(bitstream);
    return (codeNum & 1) === 0 ? -(codeNum >> 1) : codeNum + 1 >> 1;
};
const writeBits = (bytes, start, end, value)=>{
    for(let i = start; i < end; i++){
        const byteIndex = Math.floor(i / 8);
        let byte = bytes[byteIndex];
        const bitIndex = 0b111 - (i & 0b111);
        byte &= ~(1 << bitIndex);
        byte |= (value & 1 << end - i - 1) >> end - i - 1 << bitIndex;
        bytes[byteIndex] = byte;
    }
};
const toUint8Array = (source)=>{
    if (source instanceof Uint8Array) {
        return source;
    } else if (source instanceof ArrayBuffer) {
        return new Uint8Array(source);
    } else {
        return new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    }
};
const toDataView = (source)=>{
    if (source instanceof DataView) {
        return source;
    } else if (source instanceof ArrayBuffer) {
        return new DataView(source);
    } else {
        return new DataView(source.buffer, source.byteOffset, source.byteLength);
    }
};
const textEncoder = new TextEncoder();
const invertObject = (object)=>{
    return Object.fromEntries(Object.entries(object).map((param)=>{
        let [key, value] = param;
        return [
            value,
            key
        ];
    }));
};
const COLOR_PRIMARIES_MAP = {
    bt709: 1,
    bt470bg: 5,
    smpte170m: 6,
    bt2020: 9,
    smpte432: 12
};
const COLOR_PRIMARIES_MAP_INVERSE = invertObject(COLOR_PRIMARIES_MAP);
const TRANSFER_CHARACTERISTICS_MAP = {
    'bt709': 1,
    'smpte170m': 6,
    'linear': 8,
    'iec61966-2-1': 13,
    'pg': 16,
    'hlg': 18
};
const TRANSFER_CHARACTERISTICS_MAP_INVERSE = invertObject(TRANSFER_CHARACTERISTICS_MAP);
const MATRIX_COEFFICIENTS_MAP = {
    'rgb': 0,
    'bt709': 1,
    'bt470bg': 5,
    'smpte170m': 6,
    'bt2020-ncl': 9
};
const MATRIX_COEFFICIENTS_MAP_INVERSE = invertObject(MATRIX_COEFFICIENTS_MAP);
const colorSpaceIsComplete = (colorSpace)=>{
    return !!colorSpace && !!colorSpace.primaries && !!colorSpace.transfer && !!colorSpace.matrix && colorSpace.fullRange !== undefined;
};
const isAllowSharedBufferSource = (x)=>{
    return x instanceof ArrayBuffer || typeof SharedArrayBuffer !== 'undefined' && x instanceof SharedArrayBuffer || ArrayBuffer.isView(x);
};
class AsyncMutex {
    async acquire() {
        let resolver;
        const nextPromise = new Promise((resolve)=>{
            resolver = resolve;
        });
        const currentPromiseAlias = this.currentPromise;
        this.currentPromise = nextPromise;
        await currentPromiseAlias;
        return resolver;
    }
    constructor(){
        this.currentPromise = Promise.resolve();
    }
}
const bytesToHexString = (bytes)=>{
    return [
        ...bytes
    ].map((x)=>x.toString(16).padStart(2, '0')).join('');
};
const reverseBitsU32 = (x)=>{
    x = x >> 1 & 0x55555555 | (x & 0x55555555) << 1;
    x = x >> 2 & 0x33333333 | (x & 0x33333333) << 2;
    x = x >> 4 & 0x0f0f0f0f | (x & 0x0f0f0f0f) << 4;
    x = x >> 8 & 0x00ff00ff | (x & 0x00ff00ff) << 8;
    x = x >> 16 & 0x0000ffff | (x & 0x0000ffff) << 16;
    return x >>> 0; // Ensure it's treated as an unsigned 32-bit integer
};
const binarySearchExact = (arr, key, valueGetter)=>{
    let low = 0;
    let high = arr.length - 1;
    let ans = -1;
    while(low <= high){
        const mid = low + high >> 1;
        const midVal = valueGetter(arr[mid]);
        if (midVal === key) {
            ans = mid;
            high = mid - 1; // Continue searching left to find the lowest index
        } else if (midVal < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
};
const binarySearchLessOrEqual = (arr, key, valueGetter)=>{
    let low = 0;
    let high = arr.length - 1;
    let ans = -1;
    while(low <= high){
        const mid = low + (high - low + 1) / 2 | 0;
        const midVal = valueGetter(arr[mid]);
        if (midVal <= key) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
};
const insertSorted = (arr, item, valueGetter)=>{
    const insertionIndex = binarySearchLessOrEqual(arr, valueGetter(item), valueGetter);
    arr.splice(insertionIndex + 1, 0, item); // This even behaves correctly for the -1 case
};
const promiseWithResolvers = ()=>{
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        promise,
        resolve: resolve,
        reject: reject
    };
};
const removeItem = (arr, item)=>{
    const index = arr.indexOf(item);
    if (index !== -1) {
        arr.splice(index, 1);
    }
};
const findLast = (arr, predicate)=>{
    for(let i = arr.length - 1; i >= 0; i--){
        if (predicate(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
};
const findLastIndex = (arr, predicate)=>{
    for(let i = arr.length - 1; i >= 0; i--){
        if (predicate(arr[i])) {
            return i;
        }
    }
    return -1;
};
const toAsyncIterator = async function*(source) {
    if (Symbol.iterator in source) {
        // @ts-expect-error Trust me
        yield* source[Symbol.iterator]();
    } else {
        // @ts-expect-error Trust me
        yield* source[Symbol.asyncIterator]();
    }
};
const validateAnyIterable = (iterable)=>{
    if (!(Symbol.iterator in iterable) && !(Symbol.asyncIterator in iterable)) {
        throw new TypeError('Argument must be an iterable or async iterable.');
    }
};
const assertNever = (x)=>{
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    throw new Error("Unexpected value: ".concat(x));
};
const getUint24 = (view, byteOffset, littleEndian)=>{
    const byte1 = view.getUint8(byteOffset);
    const byte2 = view.getUint8(byteOffset + 1);
    const byte3 = view.getUint8(byteOffset + 2);
    if (littleEndian) {
        return byte1 | byte2 << 8 | byte3 << 16;
    } else {
        return byte1 << 16 | byte2 << 8 | byte3;
    }
};
const getInt24 = (view, byteOffset, littleEndian)=>{
    // The left shift pushes the most significant bit into the sign bit region, and the subsequent right shift
    // then correctly interprets the sign bit.
    return getUint24(view, byteOffset, littleEndian) << 8 >> 8;
};
const setUint24 = (view, byteOffset, value, littleEndian)=>{
    // Ensure the value is within 24-bit unsigned range (0 to 16777215)
    value = value >>> 0; // Convert to unsigned 32-bit
    value = value & 0xFFFFFF; // Mask to 24 bits
    if (littleEndian) {
        view.setUint8(byteOffset, value & 0xFF);
        view.setUint8(byteOffset + 1, value >>> 8 & 0xFF);
        view.setUint8(byteOffset + 2, value >>> 16 & 0xFF);
    } else {
        view.setUint8(byteOffset, value >>> 16 & 0xFF);
        view.setUint8(byteOffset + 1, value >>> 8 & 0xFF);
        view.setUint8(byteOffset + 2, value & 0xFF);
    }
};
const setInt24 = (view, byteOffset, value, littleEndian)=>{
    // Ensure the value is within 24-bit signed range (-8388608 to 8388607)
    value = clamp(value, -8388608, 8388607);
    // Convert negative values to their 24-bit representation
    if (value < 0) {
        value = value + 0x1000000 & 0xFFFFFF;
    }
    setUint24(view, byteOffset, value, littleEndian);
};
const setInt64 = (view, byteOffset, value, littleEndian)=>{
    if (littleEndian) {
        view.setUint32(byteOffset + 0, value, true);
        view.setInt32(byteOffset + 4, Math.floor(value / 2 ** 32), true);
    } else {
        view.setInt32(byteOffset + 0, Math.floor(value / 2 ** 32), true);
        view.setUint32(byteOffset + 4, value, true);
    }
};
const mapAsyncGenerator = (generator, map)=>{
    return {
        async next () {
            const result = await generator.next();
            if (result.done) {
                return {
                    value: undefined,
                    done: true
                };
            } else {
                return {
                    value: map(result.value),
                    done: false
                };
            }
        },
        return () {
            return generator.return();
        },
        throw (error) {
            return generator.throw(error);
        },
        [Symbol.asyncIterator] () {
            return this;
        }
    };
};
const clamp = (value, min, max)=>{
    return Math.max(min, Math.min(max, value));
};
const UNDETERMINED_LANGUAGE = 'und';
const roundToPrecision = (value, digits)=>{
    const factor = 10 ** digits;
    return Math.round(value * factor) / factor;
};
const roundToMultiple = (value, multiple)=>{
    return Math.round(value / multiple) * multiple;
};
const ilog = (x)=>{
    let ret = 0;
    while(x){
        ret++;
        x >>= 1;
    }
    return ret;
};
const ISO_639_2_REGEX = /^[a-z]{3}$/;
const isIso639Dash2LanguageCode = (x)=>{
    return ISO_639_2_REGEX.test(x);
};
const SECOND_TO_MICROSECOND_FACTOR = 1e6 * (1 + Number.EPSILON);
const mergeObjectsDeeply = (a, b)=>{
    const result = {
        ...a
    };
    for(const key in b){
        if (typeof a[key] === 'object' && a[key] !== null && typeof b[key] === 'object' && b[key] !== null) {
            result[key] = mergeObjectsDeeply(a[key], b[key]);
        } else {
            result[key] = b[key];
        }
    }
    return result;
};
const retriedFetch = async (url, requestInit, getRetryDelay)=>{
    let attempts = 0;
    while(true){
        try {
            return await fetch(url, requestInit);
        } catch (error) {
            attempts++;
            const retryDelayInSeconds = getRetryDelay(attempts);
            if (retryDelayInSeconds === null) {
                throw error;
            }
            console.error('Retrying failed fetch. Error:', error);
            if (!Number.isFinite(retryDelayInSeconds) || retryDelayInSeconds < 0) {
                throw new TypeError('Retry delay must be a non-negative finite number.');
            }
            if (retryDelayInSeconds > 0) {
                await new Promise((resolve)=>setTimeout(resolve, 1000 * retryDelayInSeconds));
            }
        }
    }
};
const computeRationalApproximation = (x, maxDenominator)=>{
    // Handle negative numbers
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    let prevNumerator = 0, prevDenominator = 1;
    let currNumerator = 1, currDenominator = 0;
    // Continued fraction algorithm
    let remainder = x;
    while(true){
        const integer = Math.floor(remainder);
        // Calculate next convergent
        const nextNumerator = integer * currNumerator + prevNumerator;
        const nextDenominator = integer * currDenominator + prevDenominator;
        if (nextDenominator > maxDenominator) {
            return {
                numerator: sign * currNumerator,
                denominator: currDenominator
            };
        }
        prevNumerator = currNumerator;
        prevDenominator = currDenominator;
        currNumerator = nextNumerator;
        currDenominator = nextDenominator;
        remainder = 1 / (remainder - integer);
        // Guard against precision issues
        if (!isFinite(remainder)) {
            break;
        }
    }
    return {
        numerator: sign * currNumerator,
        denominator: currDenominator
    };
};
class CallSerializer {
    call(fn) {
        return this.currentPromise = this.currentPromise.then(fn);
    }
    constructor(){
        this.currentPromise = Promise.resolve();
    }
}
let isSafariCache = null;
const isSafari = ()=>{
    var _navigator_vendor, _navigator_userAgent, _navigator_userAgent1, _navigator_userAgent2;
    if (isSafariCache !== null) {
        return isSafariCache;
    }
    const result = !!(typeof navigator !== 'undefined' && ((_navigator_vendor = navigator.vendor) === null || _navigator_vendor === void 0 ? void 0 : _navigator_vendor.match(/apple/i)) && !((_navigator_userAgent = navigator.userAgent) === null || _navigator_userAgent === void 0 ? void 0 : _navigator_userAgent.match(/crios/i)) && !((_navigator_userAgent1 = navigator.userAgent) === null || _navigator_userAgent1 === void 0 ? void 0 : _navigator_userAgent1.match(/fxios/i)) && !((_navigator_userAgent2 = navigator.userAgent) === null || _navigator_userAgent2 === void 0 ? void 0 : _navigator_userAgent2.match(/Opera|OPT\//)));
    isSafariCache = result;
    return result;
};
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "AUDIO_CODECS": ()=>AUDIO_CODECS,
    "NON_PCM_AUDIO_CODECS": ()=>NON_PCM_AUDIO_CODECS,
    "OPUS_INTERNAL_SAMPLE_RATE": ()=>OPUS_INTERNAL_SAMPLE_RATE,
    "PCM_AUDIO_CODECS": ()=>PCM_AUDIO_CODECS,
    "QUALITY_HIGH": ()=>QUALITY_HIGH,
    "QUALITY_LOW": ()=>QUALITY_LOW,
    "QUALITY_MEDIUM": ()=>QUALITY_MEDIUM,
    "QUALITY_VERY_HIGH": ()=>QUALITY_VERY_HIGH,
    "QUALITY_VERY_LOW": ()=>QUALITY_VERY_LOW,
    "Quality": ()=>Quality,
    "SUBTITLE_CODECS": ()=>SUBTITLE_CODECS,
    "VIDEO_CODECS": ()=>VIDEO_CODECS,
    "VP9_LEVEL_TABLE": ()=>VP9_LEVEL_TABLE,
    "aacChannelMap": ()=>aacChannelMap,
    "aacFrequencyTable": ()=>aacFrequencyTable,
    "buildAudioCodecString": ()=>buildAudioCodecString,
    "buildVideoCodecString": ()=>buildVideoCodecString,
    "canEncode": ()=>canEncode,
    "canEncodeAudio": ()=>canEncodeAudio,
    "canEncodeSubtitles": ()=>canEncodeSubtitles,
    "canEncodeVideo": ()=>canEncodeVideo,
    "extractAudioCodecString": ()=>extractAudioCodecString,
    "extractVideoCodecString": ()=>extractVideoCodecString,
    "generateAv1CodecConfigurationFromCodecString": ()=>generateAv1CodecConfigurationFromCodecString,
    "generateVp9CodecConfigurationFromCodecString": ()=>generateVp9CodecConfigurationFromCodecString,
    "getAudioEncoderConfigExtension": ()=>getAudioEncoderConfigExtension,
    "getEncodableAudioCodecs": ()=>getEncodableAudioCodecs,
    "getEncodableCodecs": ()=>getEncodableCodecs,
    "getEncodableSubtitleCodecs": ()=>getEncodableSubtitleCodecs,
    "getEncodableVideoCodecs": ()=>getEncodableVideoCodecs,
    "getFirstEncodableAudioCodec": ()=>getFirstEncodableAudioCodec,
    "getFirstEncodableSubtitleCodec": ()=>getFirstEncodableSubtitleCodec,
    "getFirstEncodableVideoCodec": ()=>getFirstEncodableVideoCodec,
    "getVideoEncoderConfigExtension": ()=>getVideoEncoderConfigExtension,
    "inferCodecFromCodecString": ()=>inferCodecFromCodecString,
    "parseAacAudioSpecificConfig": ()=>parseAacAudioSpecificConfig,
    "parsePcmCodec": ()=>parsePcmCodec,
    "validateAudioChunkMetadata": ()=>validateAudioChunkMetadata,
    "validateSubtitleMetadata": ()=>validateSubtitleMetadata,
    "validateVideoChunkMetadata": ()=>validateVideoChunkMetadata
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$custom$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/custom-coder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
;
;
const VIDEO_CODECS = [
    'avc',
    'hevc',
    'vp9',
    'av1',
    'vp8'
];
const PCM_AUDIO_CODECS = [
    'pcm-s16',
    'pcm-s16be',
    'pcm-s24',
    'pcm-s24be',
    'pcm-s32',
    'pcm-s32be',
    'pcm-f32',
    'pcm-f32be',
    'pcm-f64',
    'pcm-f64be',
    'pcm-u8',
    'pcm-s8',
    'ulaw',
    'alaw'
];
const NON_PCM_AUDIO_CODECS = [
    'aac',
    'opus',
    'mp3',
    'vorbis',
    'flac'
];
const AUDIO_CODECS = [
    ...NON_PCM_AUDIO_CODECS,
    ...PCM_AUDIO_CODECS
];
const SUBTITLE_CODECS = [
    'webvtt'
]; // TODO add the rest
// https://en.wikipedia.org/wiki/Advanced_Video_Coding
const AVC_LEVEL_TABLE = [
    {
        maxMacroblocks: 99,
        maxBitrate: 64000,
        level: 0x0A
    },
    {
        maxMacroblocks: 396,
        maxBitrate: 192000,
        level: 0x0B
    },
    {
        maxMacroblocks: 396,
        maxBitrate: 384000,
        level: 0x0C
    },
    {
        maxMacroblocks: 396,
        maxBitrate: 768000,
        level: 0x0D
    },
    {
        maxMacroblocks: 396,
        maxBitrate: 2000000,
        level: 0x14
    },
    {
        maxMacroblocks: 792,
        maxBitrate: 4000000,
        level: 0x15
    },
    {
        maxMacroblocks: 1620,
        maxBitrate: 4000000,
        level: 0x16
    },
    {
        maxMacroblocks: 1620,
        maxBitrate: 10000000,
        level: 0x1E
    },
    {
        maxMacroblocks: 3600,
        maxBitrate: 14000000,
        level: 0x1F
    },
    {
        maxMacroblocks: 5120,
        maxBitrate: 20000000,
        level: 0x20
    },
    {
        maxMacroblocks: 8192,
        maxBitrate: 20000000,
        level: 0x28
    },
    {
        maxMacroblocks: 8192,
        maxBitrate: 50000000,
        level: 0x29
    },
    {
        maxMacroblocks: 8704,
        maxBitrate: 50000000,
        level: 0x2A
    },
    {
        maxMacroblocks: 22080,
        maxBitrate: 135000000,
        level: 0x32
    },
    {
        maxMacroblocks: 36864,
        maxBitrate: 240000000,
        level: 0x33
    },
    {
        maxMacroblocks: 36864,
        maxBitrate: 240000000,
        level: 0x34
    },
    {
        maxMacroblocks: 139264,
        maxBitrate: 240000000,
        level: 0x3C
    },
    {
        maxMacroblocks: 139264,
        maxBitrate: 480000000,
        level: 0x3D
    },
    {
        maxMacroblocks: 139264,
        maxBitrate: 800000000,
        level: 0x3E
    }
];
// https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding
const HEVC_LEVEL_TABLE = [
    {
        maxPictureSize: 36864,
        maxBitrate: 128000,
        tier: 'L',
        level: 30
    },
    {
        maxPictureSize: 122880,
        maxBitrate: 1500000,
        tier: 'L',
        level: 60
    },
    {
        maxPictureSize: 245760,
        maxBitrate: 3000000,
        tier: 'L',
        level: 63
    },
    {
        maxPictureSize: 552960,
        maxBitrate: 6000000,
        tier: 'L',
        level: 90
    },
    {
        maxPictureSize: 983040,
        maxBitrate: 10000000,
        tier: 'L',
        level: 93
    },
    {
        maxPictureSize: 2228224,
        maxBitrate: 12000000,
        tier: 'L',
        level: 120
    },
    {
        maxPictureSize: 2228224,
        maxBitrate: 30000000,
        tier: 'H',
        level: 120
    },
    {
        maxPictureSize: 2228224,
        maxBitrate: 20000000,
        tier: 'L',
        level: 123
    },
    {
        maxPictureSize: 2228224,
        maxBitrate: 50000000,
        tier: 'H',
        level: 123
    },
    {
        maxPictureSize: 8912896,
        maxBitrate: 25000000,
        tier: 'L',
        level: 150
    },
    {
        maxPictureSize: 8912896,
        maxBitrate: 100000000,
        tier: 'H',
        level: 150
    },
    {
        maxPictureSize: 8912896,
        maxBitrate: 40000000,
        tier: 'L',
        level: 153
    },
    {
        maxPictureSize: 8912896,
        maxBitrate: 160000000,
        tier: 'H',
        level: 153
    },
    {
        maxPictureSize: 8912896,
        maxBitrate: 60000000,
        tier: 'L',
        level: 156
    },
    {
        maxPictureSize: 8912896,
        maxBitrate: 240000000,
        tier: 'H',
        level: 156
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 60000000,
        tier: 'L',
        level: 180
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 240000000,
        tier: 'H',
        level: 180
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 120000000,
        tier: 'L',
        level: 183
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 480000000,
        tier: 'H',
        level: 183
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 240000000,
        tier: 'L',
        level: 186
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 800000000,
        tier: 'H',
        level: 186
    }
];
const VP9_LEVEL_TABLE = [
    {
        maxPictureSize: 36864,
        maxBitrate: 200000,
        level: 10
    },
    {
        maxPictureSize: 73728,
        maxBitrate: 800000,
        level: 11
    },
    {
        maxPictureSize: 122880,
        maxBitrate: 1800000,
        level: 20
    },
    {
        maxPictureSize: 245760,
        maxBitrate: 3600000,
        level: 21
    },
    {
        maxPictureSize: 552960,
        maxBitrate: 7200000,
        level: 30
    },
    {
        maxPictureSize: 983040,
        maxBitrate: 12000000,
        level: 31
    },
    {
        maxPictureSize: 2228224,
        maxBitrate: 18000000,
        level: 40
    },
    {
        maxPictureSize: 2228224,
        maxBitrate: 30000000,
        level: 41
    },
    {
        maxPictureSize: 8912896,
        maxBitrate: 60000000,
        level: 50
    },
    {
        maxPictureSize: 8912896,
        maxBitrate: 120000000,
        level: 51
    },
    {
        maxPictureSize: 8912896,
        maxBitrate: 180000000,
        level: 52
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 180000000,
        level: 60
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 240000000,
        level: 61
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 480000000,
        level: 62
    }
];
// https://en.wikipedia.org/wiki/AV1
const AV1_LEVEL_TABLE = [
    {
        maxPictureSize: 147456,
        maxBitrate: 1500000,
        tier: 'M',
        level: 0
    },
    {
        maxPictureSize: 278784,
        maxBitrate: 3000000,
        tier: 'M',
        level: 1
    },
    {
        maxPictureSize: 665856,
        maxBitrate: 6000000,
        tier: 'M',
        level: 4
    },
    {
        maxPictureSize: 1065024,
        maxBitrate: 10000000,
        tier: 'M',
        level: 5
    },
    {
        maxPictureSize: 2359296,
        maxBitrate: 12000000,
        tier: 'M',
        level: 8
    },
    {
        maxPictureSize: 2359296,
        maxBitrate: 30000000,
        tier: 'H',
        level: 8
    },
    {
        maxPictureSize: 2359296,
        maxBitrate: 20000000,
        tier: 'M',
        level: 9
    },
    {
        maxPictureSize: 2359296,
        maxBitrate: 50000000,
        tier: 'H',
        level: 9
    },
    {
        maxPictureSize: 8912896,
        maxBitrate: 30000000,
        tier: 'M',
        level: 12
    },
    {
        maxPictureSize: 8912896,
        maxBitrate: 100000000,
        tier: 'H',
        level: 12
    },
    {
        maxPictureSize: 8912896,
        maxBitrate: 40000000,
        tier: 'M',
        level: 13
    },
    {
        maxPictureSize: 8912896,
        maxBitrate: 160000000,
        tier: 'H',
        level: 13
    },
    {
        maxPictureSize: 8912896,
        maxBitrate: 60000000,
        tier: 'M',
        level: 14
    },
    {
        maxPictureSize: 8912896,
        maxBitrate: 240000000,
        tier: 'H',
        level: 14
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 60000000,
        tier: 'M',
        level: 15
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 240000000,
        tier: 'H',
        level: 15
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 60000000,
        tier: 'M',
        level: 16
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 240000000,
        tier: 'H',
        level: 16
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 100000000,
        tier: 'M',
        level: 17
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 480000000,
        tier: 'H',
        level: 17
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 160000000,
        tier: 'M',
        level: 18
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 800000000,
        tier: 'H',
        level: 18
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 160000000,
        tier: 'M',
        level: 19
    },
    {
        maxPictureSize: 35651584,
        maxBitrate: 800000000,
        tier: 'H',
        level: 19
    }
];
const VP9_DEFAULT_SUFFIX = '.01.01.01.01.00';
const AV1_DEFAULT_SUFFIX = '.0.110.01.01.01.0';
const buildVideoCodecString = (codec, width, height, bitrate)=>{
    if (codec === 'avc') {
        const profileIndication = 0x64; // High Profile
        const totalMacroblocks = Math.ceil(width / 16) * Math.ceil(height / 16);
        var _AVC_LEVEL_TABLE_find;
        // Determine the level based on the table
        const levelInfo = (_AVC_LEVEL_TABLE_find = AVC_LEVEL_TABLE.find((level)=>totalMacroblocks <= level.maxMacroblocks && bitrate <= level.maxBitrate)) !== null && _AVC_LEVEL_TABLE_find !== void 0 ? _AVC_LEVEL_TABLE_find : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(AVC_LEVEL_TABLE);
        const levelIndication = levelInfo ? levelInfo.level : 0;
        const hexProfileIndication = profileIndication.toString(16).padStart(2, '0');
        const hexProfileCompatibility = '00';
        const hexLevelIndication = levelIndication.toString(16).padStart(2, '0');
        return "avc1.".concat(hexProfileIndication).concat(hexProfileCompatibility).concat(hexLevelIndication);
    } else if (codec === 'hevc') {
        const profilePrefix = ''; // Profile space 0
        const profileIdc = 1; // Main Profile
        const compatibilityFlags = '6'; // Taken from the example in ISO 14496-15
        const pictureSize = width * height;
        var _HEVC_LEVEL_TABLE_find;
        const levelInfo = (_HEVC_LEVEL_TABLE_find = HEVC_LEVEL_TABLE.find((level)=>pictureSize <= level.maxPictureSize && bitrate <= level.maxBitrate)) !== null && _HEVC_LEVEL_TABLE_find !== void 0 ? _HEVC_LEVEL_TABLE_find : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(HEVC_LEVEL_TABLE);
        const constraintFlags = 'B0'; // Progressive source flag
        return 'hev1.' + "".concat(profilePrefix).concat(profileIdc, ".") + "".concat(compatibilityFlags, ".") + "".concat(levelInfo.tier).concat(levelInfo.level, ".") + "".concat(constraintFlags);
    } else if (codec === 'vp8') {
        return 'vp8'; // Easy, this one
    } else if (codec === 'vp9') {
        const profile = '00'; // Profile 0
        const pictureSize = width * height;
        var _VP9_LEVEL_TABLE_find;
        const levelInfo = (_VP9_LEVEL_TABLE_find = VP9_LEVEL_TABLE.find((level)=>pictureSize <= level.maxPictureSize && bitrate <= level.maxBitrate)) !== null && _VP9_LEVEL_TABLE_find !== void 0 ? _VP9_LEVEL_TABLE_find : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(VP9_LEVEL_TABLE);
        const bitDepth = '08'; // 8-bit
        return "vp09.".concat(profile, ".").concat(levelInfo.level.toString().padStart(2, '0'), ".").concat(bitDepth);
    } else if (codec === 'av1') {
        const profile = 0; // Main Profile, single digit
        const pictureSize = width * height;
        var _AV1_LEVEL_TABLE_find;
        const levelInfo = (_AV1_LEVEL_TABLE_find = AV1_LEVEL_TABLE.find((level)=>pictureSize <= level.maxPictureSize && bitrate <= level.maxBitrate)) !== null && _AV1_LEVEL_TABLE_find !== void 0 ? _AV1_LEVEL_TABLE_find : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(AV1_LEVEL_TABLE);
        const level = levelInfo.level.toString().padStart(2, '0');
        const bitDepth = '08'; // 8-bit
        return "av01.".concat(profile, ".").concat(level).concat(levelInfo.tier, ".").concat(bitDepth);
    }
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    throw new TypeError("Unhandled codec '".concat(codec, "'."));
};
const generateVp9CodecConfigurationFromCodecString = (codecString)=>{
    // Reference: https://www.webmproject.org/docs/container/#vp9-codec-feature-metadata-codecprivate
    const parts = codecString.split('.'); // We can derive the required values from the codec string
    const profile = Number(parts[1]);
    const level = Number(parts[2]);
    const bitDepth = Number(parts[3]);
    const chromaSubsampling = parts[4] ? Number(parts[4]) : 1;
    return [
        1,
        1,
        profile,
        2,
        1,
        level,
        3,
        1,
        bitDepth,
        4,
        1,
        chromaSubsampling
    ];
};
const generateAv1CodecConfigurationFromCodecString = (codecString)=>{
    // Reference: https://aomediacodec.github.io/av1-isobmff/
    const parts = codecString.split('.'); // We can derive the required values from the codec string
    const marker = 1;
    const version = 1;
    const firstByte = (marker << 7) + version;
    const profile = Number(parts[1]);
    const levelAndTier = parts[2];
    const level = Number(levelAndTier.slice(0, -1));
    const secondByte = (profile << 5) + level;
    const tier = levelAndTier.slice(-1) === 'H' ? 1 : 0;
    const bitDepth = Number(parts[3]);
    const highBitDepth = bitDepth === 8 ? 0 : 1;
    const twelveBit = 0;
    const monochrome = parts[4] ? Number(parts[4]) : 0;
    const chromaSubsamplingX = parts[5] ? Number(parts[5][0]) : 1;
    const chromaSubsamplingY = parts[5] ? Number(parts[5][1]) : 1;
    const chromaSamplePosition = parts[5] ? Number(parts[5][2]) : 0; // CSP_UNKNOWN
    const thirdByte = (tier << 7) + (highBitDepth << 6) + (twelveBit << 5) + (monochrome << 4) + (chromaSubsamplingX << 3) + (chromaSubsamplingY << 2) + chromaSamplePosition;
    const initialPresentationDelayPresent = 0; // Should be fine
    const fourthByte = initialPresentationDelayPresent;
    return [
        firstByte,
        secondByte,
        thirdByte,
        fourthByte
    ];
};
const extractVideoCodecString = (trackInfo)=>{
    const { codec, codecDescription, colorSpace, avcCodecInfo, hevcCodecInfo, vp9CodecInfo, av1CodecInfo } = trackInfo;
    if (codec === 'avc') {
        if (avcCodecInfo) {
            const bytes = new Uint8Array([
                avcCodecInfo.avcProfileIndication,
                avcCodecInfo.profileCompatibility,
                avcCodecInfo.avcLevelIndication
            ]);
            return "avc1.".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHexString"])(bytes));
        }
        if (!codecDescription || codecDescription.byteLength < 4) {
            throw new TypeError('AVC decoder description is not provided or is not at least 4 bytes long.');
        }
        return "avc1.".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHexString"])(codecDescription.subarray(1, 4)));
    } else if (codec === 'hevc') {
        let generalProfileSpace;
        let generalProfileIdc;
        let compatibilityFlags;
        let generalTierFlag;
        let generalLevelIdc;
        let constraintFlags;
        if (hevcCodecInfo) {
            generalProfileSpace = hevcCodecInfo.generalProfileSpace;
            generalProfileIdc = hevcCodecInfo.generalProfileIdc;
            compatibilityFlags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseBitsU32"])(hevcCodecInfo.generalProfileCompatibilityFlags);
            generalTierFlag = hevcCodecInfo.generalTierFlag;
            generalLevelIdc = hevcCodecInfo.generalLevelIdc;
            constraintFlags = [
                ...hevcCodecInfo.generalConstraintIndicatorFlags
            ];
        } else {
            if (!codecDescription || codecDescription.byteLength < 23) {
                throw new TypeError('HEVC decoder description is not provided or is not at least 23 bytes long.');
            }
            const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDataView"])(codecDescription);
            const profileByte = view.getUint8(1);
            generalProfileSpace = profileByte >> 6 & 0x03;
            generalProfileIdc = profileByte & 0x1F;
            compatibilityFlags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverseBitsU32"])(view.getUint32(2));
            generalTierFlag = profileByte >> 5 & 0x01;
            generalLevelIdc = view.getUint8(12);
            constraintFlags = [];
            for(let i = 0; i < 6; i++){
                constraintFlags.push(view.getUint8(6 + i));
            }
        }
        let codecString = 'hev1.';
        codecString += [
            '',
            'A',
            'B',
            'C'
        ][generalProfileSpace] + generalProfileIdc;
        codecString += '.';
        codecString += compatibilityFlags.toString(16).toUpperCase();
        codecString += '.';
        codecString += generalTierFlag === 0 ? 'L' : 'H';
        codecString += generalLevelIdc;
        while(constraintFlags.length > 0 && constraintFlags[constraintFlags.length - 1] === 0){
            constraintFlags.pop();
        }
        if (constraintFlags.length > 0) {
            codecString += '.';
            codecString += constraintFlags.map((x)=>x.toString(16).toUpperCase()).join('.');
        }
        return codecString;
    } else if (codec === 'vp8') {
        return 'vp8'; // Easy, this one
    } else if (codec === 'vp9') {
        if (!vp9CodecInfo) {
            // Calculate level based on dimensions
            const pictureSize = trackInfo.width * trackInfo.height;
            let level = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(VP9_LEVEL_TABLE).level; // Default to highest level
            for (const entry of VP9_LEVEL_TABLE){
                if (pictureSize <= entry.maxPictureSize) {
                    level = entry.level;
                    break;
                }
            }
            // We don't really know better, so let's return a general-purpose, common codec string and hope for the best
            return "vp09.00.".concat(level.toString().padStart(2, '0'), ".08");
        }
        const profile = vp9CodecInfo.profile.toString().padStart(2, '0');
        const level = vp9CodecInfo.level.toString().padStart(2, '0');
        const bitDepth = vp9CodecInfo.bitDepth.toString().padStart(2, '0');
        const chromaSubsampling = vp9CodecInfo.chromaSubsampling.toString().padStart(2, '0');
        const colourPrimaries = vp9CodecInfo.colourPrimaries.toString().padStart(2, '0');
        const transferCharacteristics = vp9CodecInfo.transferCharacteristics.toString().padStart(2, '0');
        const matrixCoefficients = vp9CodecInfo.matrixCoefficients.toString().padStart(2, '0');
        const videoFullRangeFlag = vp9CodecInfo.videoFullRangeFlag.toString().padStart(2, '0');
        let string = "vp09.".concat(profile, ".").concat(level, ".").concat(bitDepth, ".").concat(chromaSubsampling);
        string += ".".concat(colourPrimaries, ".").concat(transferCharacteristics, ".").concat(matrixCoefficients, ".").concat(videoFullRangeFlag);
        if (string.endsWith(VP9_DEFAULT_SUFFIX)) {
            string = string.slice(0, -VP9_DEFAULT_SUFFIX.length);
        }
        return string;
    } else if (codec === 'av1') {
        if (!av1CodecInfo) {
            // Calculate level based on dimensions
            const pictureSize = trackInfo.width * trackInfo.height;
            let level = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(VP9_LEVEL_TABLE).level; // Default to highest level
            for (const entry of VP9_LEVEL_TABLE){
                if (pictureSize <= entry.maxPictureSize) {
                    level = entry.level;
                    break;
                }
            }
            // We don't really know better, so let's return a general-purpose, common codec string and hope for the best
            return "av01.0.".concat(level.toString().padStart(2, '0'), "M.08");
        }
        // https://aomediacodec.github.io/av1-isobmff/#codecsparam
        const profile = av1CodecInfo.profile; // Single digit
        const level = av1CodecInfo.level.toString().padStart(2, '0');
        const tier = av1CodecInfo.tier ? 'H' : 'M';
        const bitDepth = av1CodecInfo.bitDepth.toString().padStart(2, '0');
        const monochrome = av1CodecInfo.monochrome ? '1' : '0';
        const chromaSubsampling = 100 * av1CodecInfo.chromaSubsamplingX + 10 * av1CodecInfo.chromaSubsamplingY + 1 * (av1CodecInfo.chromaSubsamplingX && av1CodecInfo.chromaSubsamplingY ? av1CodecInfo.chromaSamplePosition : 0);
        // The defaults are 1 (ITU-R BT.709)
        const colorPrimaries = (colorSpace === null || colorSpace === void 0 ? void 0 : colorSpace.primaries) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_PRIMARIES_MAP"][colorSpace.primaries] : 1;
        const transferCharacteristics = (colorSpace === null || colorSpace === void 0 ? void 0 : colorSpace.transfer) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSFER_CHARACTERISTICS_MAP"][colorSpace.transfer] : 1;
        const matrixCoefficients = (colorSpace === null || colorSpace === void 0 ? void 0 : colorSpace.matrix) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MATRIX_COEFFICIENTS_MAP"][colorSpace.matrix] : 1;
        const videoFullRangeFlag = (colorSpace === null || colorSpace === void 0 ? void 0 : colorSpace.fullRange) ? 1 : 0;
        let string = "av01.".concat(profile, ".").concat(level).concat(tier, ".").concat(bitDepth);
        string += ".".concat(monochrome, ".").concat(chromaSubsampling.toString().padStart(3, '0'));
        string += ".".concat(colorPrimaries.toString().padStart(2, '0'));
        string += ".".concat(transferCharacteristics.toString().padStart(2, '0'));
        string += ".".concat(matrixCoefficients.toString().padStart(2, '0'));
        string += ".".concat(videoFullRangeFlag);
        if (string.endsWith(AV1_DEFAULT_SUFFIX)) {
            string = string.slice(0, -AV1_DEFAULT_SUFFIX.length);
        }
        return string;
    }
    throw new TypeError("Unhandled codec '".concat(codec, "'."));
};
const buildAudioCodecString = (codec, numberOfChannels, sampleRate)=>{
    if (codec === 'aac') {
        // If stereo or higher channels and lower sample rate, likely using HE-AAC v2 with PS
        if (numberOfChannels >= 2 && sampleRate <= 24000) {
            return 'mp4a.40.29'; // HE-AAC v2 (AAC LC + SBR + PS)
        }
        // If sample rate is low, likely using HE-AAC v1 with SBR
        if (sampleRate <= 24000) {
            return 'mp4a.40.5'; // HE-AAC v1 (AAC LC + SBR)
        }
        // Default to standard AAC-LC for higher sample rates
        return 'mp4a.40.2'; // AAC-LC
    } else if (codec === 'mp3') {
        return 'mp3';
    } else if (codec === 'opus') {
        return 'opus';
    } else if (codec === 'vorbis') {
        return 'vorbis';
    } else if (codec === 'flac') {
        return 'flac';
    } else if (PCM_AUDIO_CODECS.includes(codec)) {
        return codec;
    }
    throw new TypeError("Unhandled codec '".concat(codec, "'."));
};
const extractAudioCodecString = (trackInfo)=>{
    const { codec, codecDescription, aacCodecInfo } = trackInfo;
    if (codec === 'aac') {
        if (!aacCodecInfo) {
            throw new TypeError('AAC codec info must be provided.');
        }
        if (aacCodecInfo.isMpeg2) {
            return 'mp4a.67';
        } else {
            const audioSpecificConfig = parseAacAudioSpecificConfig(codecDescription);
            return "mp4a.40.".concat(audioSpecificConfig.objectType);
        }
    } else if (codec === 'mp3') {
        return 'mp3';
    } else if (codec === 'opus') {
        return 'opus';
    } else if (codec === 'vorbis') {
        return 'vorbis';
    } else if (codec === 'flac') {
        return 'flac';
    } else if (codec && PCM_AUDIO_CODECS.includes(codec)) {
        return codec;
    }
    throw new TypeError("Unhandled codec '".concat(codec, "'."));
};
const aacFrequencyTable = [
    96000,
    88200,
    64000,
    48000,
    44100,
    32000,
    24000,
    22050,
    16000,
    12000,
    11025,
    8000,
    7350
];
const aacChannelMap = [
    -1,
    1,
    2,
    3,
    4,
    5,
    6,
    8
];
const parseAacAudioSpecificConfig = (bytes)=>{
    if (!bytes || bytes.byteLength < 2) {
        throw new TypeError('AAC description must be at least 2 bytes long.');
    }
    const bitstream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bitstream"](bytes);
    let objectType = bitstream.readBits(5);
    if (objectType === 31) {
        objectType = 32 + bitstream.readBits(6);
    }
    const frequencyIndex = bitstream.readBits(4);
    let sampleRate = null;
    if (frequencyIndex === 15) {
        sampleRate = bitstream.readBits(24);
    } else {
        if (frequencyIndex < aacFrequencyTable.length) {
            sampleRate = aacFrequencyTable[frequencyIndex];
        }
    }
    const channelConfiguration = bitstream.readBits(4);
    let numberOfChannels = null;
    if (channelConfiguration >= 1 && channelConfiguration <= 7) {
        numberOfChannels = aacChannelMap[channelConfiguration];
    }
    return {
        objectType,
        frequencyIndex,
        sampleRate,
        channelConfiguration,
        numberOfChannels
    };
};
const OPUS_INTERNAL_SAMPLE_RATE = 48000;
const PCM_CODEC_REGEX = /^pcm-([usf])(\d+)+(be)?$/;
const parsePcmCodec = (codec)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(PCM_AUDIO_CODECS.includes(codec));
    if (codec === 'ulaw') {
        return {
            dataType: 'ulaw',
            sampleSize: 1,
            littleEndian: true,
            silentValue: 255
        };
    } else if (codec === 'alaw') {
        return {
            dataType: 'alaw',
            sampleSize: 1,
            littleEndian: true,
            silentValue: 213
        };
    }
    const match = PCM_CODEC_REGEX.exec(codec);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(match);
    let dataType;
    if (match[1] === 'u') {
        dataType = 'unsigned';
    } else if (match[1] === 's') {
        dataType = 'signed';
    } else {
        dataType = 'float';
    }
    const sampleSize = Number(match[2]) / 8;
    const littleEndian = match[3] !== 'be';
    const silentValue = codec === 'pcm-u8' ? 2 ** 7 : 0;
    return {
        dataType,
        sampleSize,
        littleEndian,
        silentValue
    };
};
const inferCodecFromCodecString = (codecString)=>{
    // Video codecs
    if (codecString.startsWith('avc1') || codecString.startsWith('avc3')) {
        return 'avc';
    } else if (codecString.startsWith('hev1') || codecString.startsWith('hvc1')) {
        return 'hevc';
    } else if (codecString === 'vp8') {
        return 'vp8';
    } else if (codecString.startsWith('vp09')) {
        return 'vp9';
    } else if (codecString.startsWith('av01')) {
        return 'av1';
    }
    // Audio codecs
    if (codecString.startsWith('mp4a.40') || codecString === 'mp4a.67') {
        return 'aac';
    } else if (codecString === 'mp3' || codecString === 'mp4a.69' || codecString === 'mp4a.6B' || codecString === 'mp4a.6b') {
        return 'mp3';
    } else if (codecString === 'opus') {
        return 'opus';
    } else if (codecString === 'vorbis') {
        return 'vorbis';
    } else if (codecString === 'flac') {
        return 'flac';
    } else if (codecString === 'ulaw') {
        return 'ulaw';
    } else if (codecString === 'alaw') {
        return 'alaw';
    } else if (PCM_CODEC_REGEX.test(codecString)) {
        return codecString;
    }
    // Subtitle codecs
    if (codecString === 'webvtt') {
        return 'webvtt';
    }
    return null;
};
const getVideoEncoderConfigExtension = (codec)=>{
    if (codec === 'avc') {
        return {
            avc: {
                format: 'avc'
            }
        };
    } else if (codec === 'hevc') {
        return {
            hevc: {
                format: 'hevc'
            }
        };
    }
    return {};
};
const getAudioEncoderConfigExtension = (codec)=>{
    if (codec === 'aac') {
        return {
            aac: {
                format: 'aac'
            }
        };
    } else if (codec === 'opus') {
        return {
            opus: {
                format: 'opus'
            }
        };
    }
    return {};
};
class Quality {
    /** @internal */ _toVideoBitrate(codec, width, height) {
        const pixels = width * height;
        const codecEfficiencyFactors = {
            avc: 1.0,
            hevc: 0.6,
            vp9: 0.6,
            av1: 0.4,
            vp8: 1.2
        };
        const referencePixels = 1920 * 1080;
        const referenceBitrate = 3000000;
        const scaleFactor = Math.pow(pixels / referencePixels, 0.95); // Slight non-linear scaling
        const baseBitrate = referenceBitrate * scaleFactor;
        const codecAdjustedBitrate = baseBitrate * codecEfficiencyFactors[codec];
        const finalBitrate = codecAdjustedBitrate * this._factor;
        return Math.ceil(finalBitrate / 1000) * 1000;
    }
    /** @internal */ _toAudioBitrate(codec) {
        if (PCM_AUDIO_CODECS.includes(codec) || codec === 'flac') {
            return undefined;
        }
        const baseRates = {
            aac: 128000,
            opus: 64000,
            mp3: 160000,
            vorbis: 64000
        };
        const baseBitrate = baseRates[codec];
        if (!baseBitrate) {
            throw new Error("Unhandled codec: ".concat(codec));
        }
        let finalBitrate = baseBitrate * this._factor;
        if (codec === 'aac') {
            // AAC only works with specific bitrates, let's find the closest
            const validRates = [
                96000,
                128000,
                160000,
                192000
            ];
            finalBitrate = validRates.reduce((prev, curr)=>Math.abs(curr - finalBitrate) < Math.abs(prev - finalBitrate) ? curr : prev);
        } else if (codec === 'opus' || codec === 'vorbis') {
            finalBitrate = Math.max(6000, finalBitrate);
        } else if (codec === 'mp3') {
            const validRates = [
                8000,
                16000,
                24000,
                32000,
                40000,
                48000,
                64000,
                80000,
                96000,
                112000,
                128000,
                160000,
                192000,
                224000,
                256000,
                320000
            ];
            finalBitrate = validRates.reduce((prev, curr)=>Math.abs(curr - finalBitrate) < Math.abs(prev - finalBitrate) ? curr : prev);
        }
        return Math.round(finalBitrate / 1000) * 1000;
    }
    /** @internal */ constructor(factor){
        this._factor = factor;
    }
}
const QUALITY_VERY_LOW = new Quality(0.3);
const QUALITY_LOW = new Quality(0.6);
const QUALITY_MEDIUM = new Quality(1);
const QUALITY_HIGH = new Quality(2);
const QUALITY_VERY_HIGH = new Quality(4);
const VALID_VIDEO_CODEC_STRING_PREFIXES = [
    'avc1',
    'avc3',
    'hev1',
    'hvc1',
    'vp8',
    'vp09',
    'av01'
];
const AVC_CODEC_STRING_REGEX = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/;
const HEVC_CODEC_STRING_REGEX = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/;
const VP9_CODEC_STRING_REGEX = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/;
const AV1_CODEC_STRING_REGEX = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/;
const validateVideoChunkMetadata = (metadata)=>{
    if (!metadata) {
        throw new TypeError('Video chunk metadata must be provided.');
    }
    if (typeof metadata !== 'object') {
        throw new TypeError('Video chunk metadata must be an object.');
    }
    if (!metadata.decoderConfig) {
        throw new TypeError('Video chunk metadata must include a decoder configuration.');
    }
    if (typeof metadata.decoderConfig !== 'object') {
        throw new TypeError('Video chunk metadata decoder configuration must be an object.');
    }
    if (typeof metadata.decoderConfig.codec !== 'string') {
        throw new TypeError('Video chunk metadata decoder configuration must specify a codec string.');
    }
    if (!VALID_VIDEO_CODEC_STRING_PREFIXES.some((prefix)=>metadata.decoderConfig.codec.startsWith(prefix))) {
        throw new TypeError('Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in' + ' the WebCodecs Codec Registry.');
    }
    if (!Number.isInteger(metadata.decoderConfig.codedWidth) || metadata.decoderConfig.codedWidth <= 0) {
        throw new TypeError('Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).');
    }
    if (!Number.isInteger(metadata.decoderConfig.codedHeight) || metadata.decoderConfig.codedHeight <= 0) {
        throw new TypeError('Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).');
    }
    if (metadata.decoderConfig.description !== undefined) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAllowSharedBufferSource"])(metadata.decoderConfig.description)) {
            throw new TypeError('Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an' + ' ArrayBuffer view.');
        }
    }
    if (metadata.decoderConfig.colorSpace !== undefined) {
        const { colorSpace } = metadata.decoderConfig;
        if (typeof colorSpace !== 'object') {
            throw new TypeError('Video chunk metadata decoder configuration colorSpace, when provided, must be an object.');
        }
        const primariesValues = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_PRIMARIES_MAP"]);
        if (colorSpace.primaries != null && !primariesValues.includes(colorSpace.primaries)) {
            throw new TypeError("Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of" + " ".concat(primariesValues.join(', '), "."));
        }
        const transferValues = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSFER_CHARACTERISTICS_MAP"]);
        if (colorSpace.transfer != null && !transferValues.includes(colorSpace.transfer)) {
            throw new TypeError("Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of" + " ".concat(transferValues.join(', '), "."));
        }
        const matrixValues = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MATRIX_COEFFICIENTS_MAP"]);
        if (colorSpace.matrix != null && !matrixValues.includes(colorSpace.matrix)) {
            throw new TypeError("Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of" + " ".concat(matrixValues.join(', '), "."));
        }
        if (colorSpace.fullRange != null && typeof colorSpace.fullRange !== 'boolean') {
            throw new TypeError('Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.');
        }
    }
    if (metadata.decoderConfig.codec.startsWith('avc1') || metadata.decoderConfig.codec.startsWith('avc3')) {
        // AVC-specific validation
        if (!AVC_CODEC_STRING_REGEX.test(metadata.decoderConfig.codec)) {
            throw new TypeError('Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as' + ' specified in Section 3.4 of RFC 6381.');
        }
    // `description` may or may not be set, depending on if the format is AVCC or Annex B, so don't perform any
    // validation for it.
    // https://www.w3.org/TR/webcodecs-avc-codec-registration
    } else if (metadata.decoderConfig.codec.startsWith('hev1') || metadata.decoderConfig.codec.startsWith('hvc1')) {
        // HEVC-specific validation
        if (!HEVC_CODEC_STRING_REGEX.test(metadata.decoderConfig.codec)) {
            throw new TypeError('Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as' + ' specified in Section E.3 of ISO 14496-15.');
        }
    // `description` may or may not be set, depending on if the format is HEVC or Annex B, so don't perform any
    // validation for it.
    // https://www.w3.org/TR/webcodecs-hevc-codec-registration
    } else if (metadata.decoderConfig.codec.startsWith('vp8')) {
        // VP8-specific validation
        if (metadata.decoderConfig.codec !== 'vp8') {
            throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".');
        }
    } else if (metadata.decoderConfig.codec.startsWith('vp09')) {
        // VP9-specific validation
        if (!VP9_CODEC_STRING_REGEX.test(metadata.decoderConfig.codec)) {
            throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as' + ' specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.');
        }
    } else if (metadata.decoderConfig.codec.startsWith('av01')) {
        // AV1-specific validation
        if (!AV1_CODEC_STRING_REGEX.test(metadata.decoderConfig.codec)) {
            throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as' + ' specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.');
        }
    }
};
const VALID_AUDIO_CODEC_STRING_PREFIXES = [
    'mp4a',
    'mp3',
    'opus',
    'vorbis',
    'flac',
    'ulaw',
    'alaw',
    'pcm'
];
const validateAudioChunkMetadata = (metadata)=>{
    if (!metadata) {
        throw new TypeError('Audio chunk metadata must be provided.');
    }
    if (typeof metadata !== 'object') {
        throw new TypeError('Audio chunk metadata must be an object.');
    }
    if (!metadata.decoderConfig) {
        throw new TypeError('Audio chunk metadata must include a decoder configuration.');
    }
    if (typeof metadata.decoderConfig !== 'object') {
        throw new TypeError('Audio chunk metadata decoder configuration must be an object.');
    }
    if (typeof metadata.decoderConfig.codec !== 'string') {
        throw new TypeError('Audio chunk metadata decoder configuration must specify a codec string.');
    }
    if (!VALID_AUDIO_CODEC_STRING_PREFIXES.some((prefix)=>metadata.decoderConfig.codec.startsWith(prefix))) {
        throw new TypeError('Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in' + ' the WebCodecs Codec Registry.');
    }
    if (!Number.isInteger(metadata.decoderConfig.sampleRate) || metadata.decoderConfig.sampleRate <= 0) {
        throw new TypeError('Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).');
    }
    if (!Number.isInteger(metadata.decoderConfig.numberOfChannels) || metadata.decoderConfig.numberOfChannels <= 0) {
        throw new TypeError('Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).');
    }
    if (metadata.decoderConfig.description !== undefined) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAllowSharedBufferSource"])(metadata.decoderConfig.description)) {
            throw new TypeError('Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an' + ' ArrayBuffer view.');
        }
    }
    if (metadata.decoderConfig.codec.startsWith('mp4a') && metadata.decoderConfig.codec !== 'mp4a.69' && metadata.decoderConfig.codec !== 'mp4a.6B' && metadata.decoderConfig.codec !== 'mp4a.6b') {
        // AAC-specific validation
        const validStrings = [
            'mp4a.40.2',
            'mp4a.40.02',
            'mp4a.40.5',
            'mp4a.40.05',
            'mp4a.40.29',
            'mp4a.67'
        ];
        if (!validStrings.includes(metadata.decoderConfig.codec)) {
            throw new TypeError('Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as' + ' specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.');
        }
        if (!metadata.decoderConfig.description) {
            throw new TypeError('Audio chunk metadata decoder configuration for AAC must include a description, which is expected to be' + ' an AudioSpecificConfig as specified in ISO 14496-3.');
        }
    } else if (metadata.decoderConfig.codec.startsWith('mp3') || metadata.decoderConfig.codec.startsWith('mp4a')) {
        // MP3-specific validation
        if (metadata.decoderConfig.codec !== 'mp3' && metadata.decoderConfig.codec !== 'mp4a.69' && metadata.decoderConfig.codec !== 'mp4a.6B' && metadata.decoderConfig.codec !== 'mp4a.6b') {
            throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or' + ' "mp4a.6B".');
        }
    } else if (metadata.decoderConfig.codec.startsWith('opus')) {
        // Opus-specific validation
        if (metadata.decoderConfig.codec !== 'opus') {
            throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');
        }
        if (metadata.decoderConfig.description && metadata.decoderConfig.description.byteLength < 18) {
            // Description is optional for Opus per-spec, so we shouldn't enforce it
            throw new TypeError('Audio chunk metadata decoder configuration description, when specified, is expected to be an' + ' Identification Header as specified in Section 5.1 of RFC 7845.');
        }
    } else if (metadata.decoderConfig.codec.startsWith('vorbis')) {
        // Vorbis-specific validation
        if (metadata.decoderConfig.codec !== 'vorbis') {
            throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');
        }
        if (!metadata.decoderConfig.description) {
            throw new TypeError('Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to' + ' adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.');
        }
    } else if (metadata.decoderConfig.codec.startsWith('flac')) {
        // FLAC-specific validation
        if (metadata.decoderConfig.codec !== 'flac') {
            throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');
        }
        const minDescriptionSize = 4 + 4 + 34; // 'fLaC' + metadata block header + STREAMINFO block
        if (!metadata.decoderConfig.description || metadata.decoderConfig.description.byteLength < minDescriptionSize) {
            throw new TypeError('Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to' + ' adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.');
        }
    } else if (metadata.decoderConfig.codec.startsWith('pcm') || metadata.decoderConfig.codec.startsWith('ulaw') || metadata.decoderConfig.codec.startsWith('alaw')) {
        // PCM-specific validation
        if (!PCM_AUDIO_CODECS.includes(metadata.decoderConfig.codec)) {
            throw new TypeError('Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM' + " codecs (".concat(PCM_AUDIO_CODECS.join(', '), ")."));
        }
    }
};
const validateSubtitleMetadata = (metadata)=>{
    if (!metadata) {
        throw new TypeError('Subtitle metadata must be provided.');
    }
    if (typeof metadata !== 'object') {
        throw new TypeError('Subtitle metadata must be an object.');
    }
    if (!metadata.config) {
        throw new TypeError('Subtitle metadata must include a config object.');
    }
    if (typeof metadata.config !== 'object') {
        throw new TypeError('Subtitle metadata config must be an object.');
    }
    if (typeof metadata.config.description !== 'string') {
        throw new TypeError('Subtitle metadata config description must be a string.');
    }
};
const canEncode = (codec)=>{
    if (VIDEO_CODECS.includes(codec)) {
        return canEncodeVideo(codec);
    } else if (AUDIO_CODECS.includes(codec)) {
        return canEncodeAudio(codec);
    } else if (SUBTITLE_CODECS.includes(codec)) {
        return canEncodeSubtitles(codec);
    }
    throw new TypeError("Unknown codec '".concat(codec, "'."));
};
const canEncodeVideo = async function(codec) {
    let { width = 1280, height = 720, bitrate = 1e6 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!VIDEO_CODECS.includes(codec)) {
        return false;
    }
    if (!Number.isInteger(width) || width <= 0) {
        throw new TypeError('width must be a positive integer.');
    }
    if (!Number.isInteger(height) || height <= 0) {
        throw new TypeError('height must be a positive integer.');
    }
    if (!(bitrate instanceof Quality) && (!Number.isInteger(bitrate) || bitrate <= 0)) {
        throw new TypeError('bitrate must be a positive integer or a quality.');
    }
    const resolvedBitrate = bitrate instanceof Quality ? bitrate._toVideoBitrate(codec, width, height) : bitrate;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$custom$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customVideoEncoders"].length > 0) {
        const encoderConfig = {
            codec: buildVideoCodecString(codec, width, height, resolvedBitrate),
            width,
            height,
            bitrate: resolvedBitrate,
            ...getVideoEncoderConfigExtension(codec)
        };
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$custom$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customVideoEncoders"].some((x)=>x.supports(codec, encoderConfig))) {
            // There's a custom encoder
            return true;
        }
    }
    if (typeof VideoEncoder === 'undefined') {
        return false;
    }
    const support = await VideoEncoder.isConfigSupported({
        codec: buildVideoCodecString(codec, width, height, resolvedBitrate),
        width,
        height,
        bitrate: resolvedBitrate,
        ...getVideoEncoderConfigExtension(codec)
    });
    return support.supported === true;
};
const canEncodeAudio = async function(codec) {
    let { numberOfChannels = 2, sampleRate = 48000, bitrate = 128e3 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!AUDIO_CODECS.includes(codec)) {
        return false;
    }
    if (!Number.isInteger(numberOfChannels) || numberOfChannels <= 0) {
        throw new TypeError('numberOfChannels must be a positive integer.');
    }
    if (!Number.isInteger(sampleRate) || sampleRate <= 0) {
        throw new TypeError('sampleRate must be a positive integer.');
    }
    if (!(bitrate instanceof Quality) && (!Number.isInteger(bitrate) || bitrate <= 0)) {
        throw new TypeError('bitrate must be a positive integer.');
    }
    const resolvedBitrate = bitrate instanceof Quality ? bitrate._toAudioBitrate(codec) : bitrate;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$custom$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customAudioEncoders"].length > 0) {
        const encoderConfig = {
            codec: buildAudioCodecString(codec, numberOfChannels, sampleRate),
            numberOfChannels,
            sampleRate,
            bitrate: resolvedBitrate,
            ...getAudioEncoderConfigExtension(codec)
        };
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$custom$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customAudioEncoders"].some((x)=>x.supports(codec, encoderConfig))) {
            // There's a custom encoder
            return true;
        }
    }
    if (PCM_AUDIO_CODECS.includes(codec)) {
        return true; // Because we encode these ourselves
    }
    if (typeof AudioEncoder === 'undefined') {
        return false;
    }
    const support = await AudioEncoder.isConfigSupported({
        codec: buildAudioCodecString(codec, numberOfChannels, sampleRate),
        numberOfChannels,
        sampleRate,
        bitrate: resolvedBitrate,
        ...getAudioEncoderConfigExtension(codec)
    });
    return support.supported === true;
};
const canEncodeSubtitles = async (codec)=>{
    if (!SUBTITLE_CODECS.includes(codec)) {
        return false;
    }
    return true;
};
const getEncodableCodecs = async ()=>{
    const [videoCodecs, audioCodecs, subtitleCodecs] = await Promise.all([
        getEncodableVideoCodecs(),
        getEncodableAudioCodecs(),
        getEncodableSubtitleCodecs()
    ]);
    return [
        ...videoCodecs,
        ...audioCodecs,
        ...subtitleCodecs
    ];
};
const getEncodableVideoCodecs = async function() {
    let checkedCodecs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : VIDEO_CODECS, options = arguments.length > 1 ? arguments[1] : void 0;
    const bools = await Promise.all(checkedCodecs.map((codec)=>canEncodeVideo(codec, options)));
    return checkedCodecs.filter((_, i)=>bools[i]);
};
const getEncodableAudioCodecs = async function() {
    let checkedCodecs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : AUDIO_CODECS, options = arguments.length > 1 ? arguments[1] : void 0;
    const bools = await Promise.all(checkedCodecs.map((codec)=>canEncodeAudio(codec, options)));
    return checkedCodecs.filter((_, i)=>bools[i]);
};
const getEncodableSubtitleCodecs = async function() {
    let checkedCodecs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : SUBTITLE_CODECS;
    const bools = await Promise.all(checkedCodecs.map(canEncodeSubtitles));
    return checkedCodecs.filter((_, i)=>bools[i]);
};
const getFirstEncodableVideoCodec = async (checkedCodecs, options)=>{
    for (const codec of checkedCodecs){
        if (await canEncodeVideo(codec, options)) {
            return codec;
        }
    }
    return null;
};
const getFirstEncodableAudioCodec = async (checkedCodecs, options)=>{
    for (const codec of checkedCodecs){
        if (await canEncodeAudio(codec, options)) {
            return codec;
        }
    }
    return null;
};
const getFirstEncodableSubtitleCodec = async (checkedCodecs)=>{
    for (const codec of checkedCodecs){
        if (await canEncodeSubtitles(codec)) {
            return codec;
        }
    }
    return null;
};
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec-data.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "determineVideoPacketType": ()=>determineVideoPacketType,
    "extractAv1CodecInfoFromPacket": ()=>extractAv1CodecInfoFromPacket,
    "extractAvcDecoderConfigurationRecord": ()=>extractAvcDecoderConfigurationRecord,
    "extractHevcDecoderConfigurationRecord": ()=>extractHevcDecoderConfigurationRecord,
    "extractVp9CodecInfoFromPacket": ()=>extractVp9CodecInfoFromPacket,
    "iterateAv1PacketObus": ()=>iterateAv1PacketObus,
    "parseModesFromVorbisSetupPacket": ()=>parseModesFromVorbisSetupPacket,
    "parseOpusIdentificationHeader": ()=>parseOpusIdentificationHeader,
    "parseOpusTocByte": ()=>parseOpusTocByte,
    "serializeAvcDecoderConfigurationRecord": ()=>serializeAvcDecoderConfigurationRecord,
    "serializeHevcDecoderConfigurationRecord": ()=>serializeHevcDecoderConfigurationRecord,
    "transformAnnexBToLengthPrefixed": ()=>transformAnnexBToLengthPrefixed
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
;
;
// References for AVC/HEVC code:
// ISO 14496-15
// Rec. ITU-T H.264
// Rec. ITU-T H.265
// https://stackoverflow.com/questions/24884827
/** Finds all NAL units in an AVC packet in Annex B format. */ const findNalUnitsInAnnexB = (packetData)=>{
    const nalUnits = [];
    let i = 0;
    while(i < packetData.length){
        let startCodePos = -1;
        let startCodeLength = 0;
        for(let j = i; j < packetData.length - 3; j++){
            // Check for 3-byte start code (0x000001)
            if (packetData[j] === 0 && packetData[j + 1] === 0 && packetData[j + 2] === 1) {
                startCodePos = j;
                startCodeLength = 3;
                break;
            }
            // Check for 4-byte start code (0x00000001)
            if (j < packetData.length - 4 && packetData[j] === 0 && packetData[j + 1] === 0 && packetData[j + 2] === 0 && packetData[j + 3] === 1) {
                startCodePos = j;
                startCodeLength = 4;
                break;
            }
        }
        if (startCodePos === -1) {
            break; // No more start codes found
        }
        // If this isn't the first start code, extract the previous NAL unit
        if (i > 0 && startCodePos > i) {
            const nalData = packetData.subarray(i, startCodePos);
            if (nalData.length > 0) {
                nalUnits.push(nalData);
            }
        }
        i = startCodePos + startCodeLength;
    }
    // Extract the last NAL unit if there is one
    if (i < packetData.length) {
        const nalData = packetData.subarray(i);
        if (nalData.length > 0) {
            nalUnits.push(nalData);
        }
    }
    return nalUnits;
};
/** Finds all NAL units in an AVC packet in length-prefixed format. */ const findNalUnitsInLengthPrefixed = (packetData, lengthSize)=>{
    const nalUnits = [];
    let offset = 0;
    const dataView = new DataView(packetData.buffer, packetData.byteOffset, packetData.byteLength);
    while(offset + lengthSize <= packetData.length){
        let nalUnitLength;
        if (lengthSize === 1) {
            nalUnitLength = dataView.getUint8(offset);
        } else if (lengthSize === 2) {
            nalUnitLength = dataView.getUint16(offset, false);
        } else if (lengthSize === 3) {
            nalUnitLength = (dataView.getUint16(offset, false) << 8) + dataView.getUint8(offset + 2);
        } else if (lengthSize === 4) {
            nalUnitLength = dataView.getUint32(offset, false);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNever"])(lengthSize);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false);
        }
        offset += lengthSize;
        const nalUnit = packetData.subarray(offset, offset + nalUnitLength);
        nalUnits.push(nalUnit);
        offset += nalUnitLength;
    }
    return nalUnits;
};
const removeEmulationPreventionBytes = (data)=>{
    const result = [];
    const len = data.length;
    for(let i = 0; i < len; i++){
        // Look for the 0x000003 pattern
        if (i + 2 < len && data[i] === 0x00 && data[i + 1] === 0x00 && data[i + 2] === 0x03) {
            result.push(0x00, 0x00); // Push the first two bytes
            i += 2; // Skip the 0x03 byte
        } else {
            result.push(data[i]);
        }
    }
    return new Uint8Array(result);
};
const transformAnnexBToLengthPrefixed = (packetData)=>{
    const NAL_UNIT_LENGTH_SIZE = 4;
    const nalUnits = findNalUnitsInAnnexB(packetData);
    if (nalUnits.length === 0) {
        // If no NAL units were found, it's not valid Annex B data
        return null;
    }
    let totalSize = 0;
    for (const nalUnit of nalUnits){
        totalSize += NAL_UNIT_LENGTH_SIZE + nalUnit.byteLength;
    }
    const avccData = new Uint8Array(totalSize);
    const dataView = new DataView(avccData.buffer);
    let offset = 0;
    // Write each NAL unit with its length prefix
    for (const nalUnit of nalUnits){
        const length = nalUnit.byteLength;
        dataView.setUint32(offset, length, false);
        offset += 4;
        avccData.set(nalUnit, offset);
        offset += nalUnit.byteLength;
    }
    return avccData;
};
const extractNalUnitTypeForAvc = (data)=>{
    return data[0] & 0x1F;
};
const extractAvcDecoderConfigurationRecord = (packetData)=>{
    try {
        const nalUnits = findNalUnitsInAnnexB(packetData);
        const spsUnits = nalUnits.filter((unit)=>extractNalUnitTypeForAvc(unit) === 7);
        const ppsUnits = nalUnits.filter((unit)=>extractNalUnitTypeForAvc(unit) === 8);
        const spsExtUnits = nalUnits.filter((unit)=>extractNalUnitTypeForAvc(unit) === 13);
        if (spsUnits.length === 0) {
            return null;
        }
        if (ppsUnits.length === 0) {
            return null;
        }
        // Let's get the first SPS for profile and level information
        const spsData = spsUnits[0];
        const bitstream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bitstream"](removeEmulationPreventionBytes(spsData));
        bitstream.skipBits(1); // forbidden_zero_bit
        bitstream.skipBits(2); // nal_ref_idc
        const nal_unit_type = bitstream.readBits(5);
        if (nal_unit_type !== 7) {
            console.error('Invalid SPS NAL unit type');
            return null;
        }
        const profile_idc = bitstream.readAlignedByte();
        const constraint_flags = bitstream.readAlignedByte();
        const level_idc = bitstream.readAlignedByte();
        const record = {
            configurationVersion: 1,
            avcProfileIndication: profile_idc,
            profileCompatibility: constraint_flags,
            avcLevelIndication: level_idc,
            lengthSizeMinusOne: 3,
            sequenceParameterSets: spsUnits,
            pictureParameterSets: ppsUnits,
            chromaFormat: null,
            bitDepthLumaMinus8: null,
            bitDepthChromaMinus8: null,
            sequenceParameterSetExt: null
        };
        if (profile_idc === 100 || profile_idc === 110 || profile_idc === 122 || profile_idc === 144) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // seq_parameter_set_id
            const chroma_format_idc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream);
            if (chroma_format_idc === 3) {
                bitstream.skipBits(1); // separate_colour_plane_flag
            }
            const bit_depth_luma_minus8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream);
            const bit_depth_chroma_minus8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream);
            record.chromaFormat = chroma_format_idc;
            record.bitDepthLumaMinus8 = bit_depth_luma_minus8;
            record.bitDepthChromaMinus8 = bit_depth_chroma_minus8;
            record.sequenceParameterSetExt = spsExtUnits;
        }
        return record;
    } catch (error) {
        console.error('Error building AVC Decoder Configuration Record:', error);
        return null;
    }
};
const serializeAvcDecoderConfigurationRecord = (record)=>{
    const bytes = [];
    // Write header
    bytes.push(record.configurationVersion);
    bytes.push(record.avcProfileIndication);
    bytes.push(record.profileCompatibility);
    bytes.push(record.avcLevelIndication);
    bytes.push(0xFC | record.lengthSizeMinusOne & 0x03); // Reserved bits (6) + lengthSizeMinusOne (2)
    // Reserved bits (3) + numOfSequenceParameterSets (5)
    bytes.push(0xE0 | record.sequenceParameterSets.length & 0x1F);
    // Write SPS
    for (const sps of record.sequenceParameterSets){
        const length = sps.byteLength;
        bytes.push(length >> 8); // High byte
        bytes.push(length & 0xFF); // Low byte
        for(let i = 0; i < length; i++){
            bytes.push(sps[i]);
        }
    }
    bytes.push(record.pictureParameterSets.length);
    // Write PPS
    for (const pps of record.pictureParameterSets){
        const length = pps.byteLength;
        bytes.push(length >> 8); // High byte
        bytes.push(length & 0xFF); // Low byte
        for(let i = 0; i < length; i++){
            bytes.push(pps[i]);
        }
    }
    if (record.avcProfileIndication === 100 || record.avcProfileIndication === 110 || record.avcProfileIndication === 122 || record.avcProfileIndication === 144) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(record.chromaFormat !== null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(record.bitDepthLumaMinus8 !== null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(record.bitDepthChromaMinus8 !== null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(record.sequenceParameterSetExt !== null);
        bytes.push(0xFC | record.chromaFormat & 0x03); // Reserved bits + chroma_format
        bytes.push(0xF8 | record.bitDepthLumaMinus8 & 0x07); // Reserved bits + bit_depth_luma_minus8
        bytes.push(0xF8 | record.bitDepthChromaMinus8 & 0x07); // Reserved bits + bit_depth_chroma_minus8
        bytes.push(record.sequenceParameterSetExt.length);
        // Write SPS Ext
        for (const spsExt of record.sequenceParameterSetExt){
            const length = spsExt.byteLength;
            bytes.push(length >> 8); // High byte
            bytes.push(length & 0xFF); // Low byte
            for(let i = 0; i < length; i++){
                bytes.push(spsExt[i]);
            }
        }
    }
    return new Uint8Array(bytes);
};
const NALU_TYPE_VPS = 32;
const NALU_TYPE_SPS = 33;
const NALU_TYPE_PPS = 34;
const NALU_TYPE_SEI_PREFIX = 39;
const NALU_TYPE_SEI_SUFFIX = 40;
const extractNalUnitTypeForHevc = (data)=>{
    return data[0] >> 1 & 0x3F;
};
const extractHevcDecoderConfigurationRecord = (packetData)=>{
    try {
        const nalUnits = findNalUnitsInAnnexB(packetData);
        const vpsUnits = nalUnits.filter((unit)=>extractNalUnitTypeForHevc(unit) === NALU_TYPE_VPS);
        const spsUnits = nalUnits.filter((unit)=>extractNalUnitTypeForHevc(unit) === NALU_TYPE_SPS);
        const ppsUnits = nalUnits.filter((unit)=>extractNalUnitTypeForHevc(unit) === NALU_TYPE_PPS);
        const seiUnits = nalUnits.filter((unit)=>extractNalUnitTypeForHevc(unit) === NALU_TYPE_SEI_PREFIX || extractNalUnitTypeForHevc(unit) === NALU_TYPE_SEI_SUFFIX);
        if (spsUnits.length === 0 || ppsUnits.length === 0) return null;
        const sps = spsUnits[0];
        const bitstream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bitstream"](removeEmulationPreventionBytes(sps));
        bitstream.skipBits(16); // NAL header
        bitstream.readBits(4); // sps_video_parameter_set_id
        const sps_max_sub_layers_minus1 = bitstream.readBits(3);
        const sps_temporal_id_nesting_flag = bitstream.readBits(1);
        const { general_profile_space, general_tier_flag, general_profile_idc, general_profile_compatibility_flags, general_constraint_indicator_flags, general_level_idc } = parseProfileTierLevel(bitstream, sps_max_sub_layers_minus1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // sps_seq_parameter_set_id
        const chroma_format_idc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream);
        if (chroma_format_idc === 3) bitstream.skipBits(1); // separate_colour_plane_flag
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // pic_width_in_luma_samples
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // pic_height_in_luma_samples
        if (bitstream.readBits(1)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // conf_win_left_offset
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // conf_win_right_offset
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // conf_win_top_offset
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // conf_win_bottom_offset
        }
        const bit_depth_luma_minus8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream);
        const bit_depth_chroma_minus8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // log2_max_pic_order_cnt_lsb_minus4
        const sps_sub_layer_ordering_info_present_flag = bitstream.readBits(1);
        const maxNum = sps_sub_layer_ordering_info_present_flag ? 0 : sps_max_sub_layers_minus1;
        for(let i = maxNum; i <= sps_max_sub_layers_minus1; i++){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // sps_max_dec_pic_buffering_minus1[i]
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // sps_max_num_reorder_pics[i]
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // sps_max_latency_increase_plus1[i]
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // log2_min_luma_coding_block_size_minus3
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // log2_diff_max_min_luma_coding_block_size
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // log2_min_luma_transform_block_size_minus2
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // log2_diff_max_min_luma_transform_block_size
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // max_transform_hierarchy_depth_inter
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // max_transform_hierarchy_depth_intra
        if (bitstream.readBits(1)) {
            if (bitstream.readBits(1)) {
                skipScalingListData(bitstream);
            }
        }
        bitstream.skipBits(1); // amp_enabled_flag
        bitstream.skipBits(1); // sample_adaptive_offset_enabled_flag
        if (bitstream.readBits(1)) {
            bitstream.skipBits(4); // pcm_sample_bit_depth_luma_minus1
            bitstream.skipBits(4); // pcm_sample_bit_depth_chroma_minus1
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // log2_min_pcm_luma_coding_block_size_minus3
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // log2_diff_max_min_pcm_luma_coding_block_size
            bitstream.skipBits(1); // pcm_loop_filter_disabled_flag
        }
        const num_short_term_ref_pic_sets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream);
        skipAllStRefPicSets(bitstream, num_short_term_ref_pic_sets);
        if (bitstream.readBits(1)) {
            const num_long_term_ref_pics_sps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream);
            for(let i = 0; i < num_long_term_ref_pics_sps; i++){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // lt_ref_pic_poc_lsb_sps[i]
                bitstream.skipBits(1); // used_by_curr_pic_lt_sps_flag[i]
            }
        }
        bitstream.skipBits(1); // sps_temporal_mvp_enabled_flag
        bitstream.skipBits(1); // strong_intra_smoothing_enabled_flag
        let min_spatial_segmentation_idc = 0;
        if (bitstream.readBits(1)) {
            min_spatial_segmentation_idc = parseVuiForMinSpatialSegmentationIdc(bitstream, sps_max_sub_layers_minus1);
        }
        // Parse PPS for parallelismType
        let parallelismType = 0;
        if (ppsUnits.length > 0) {
            const pps = ppsUnits[0];
            const ppsBitstream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bitstream"](removeEmulationPreventionBytes(pps));
            ppsBitstream.skipBits(16); // NAL header
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(ppsBitstream); // pps_pic_parameter_set_id
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(ppsBitstream); // pps_seq_parameter_set_id
            ppsBitstream.skipBits(1); // dependent_slice_segments_enabled_flag
            ppsBitstream.skipBits(1); // output_flag_present_flag
            ppsBitstream.skipBits(3); // num_extra_slice_header_bits
            ppsBitstream.skipBits(1); // sign_data_hiding_enabled_flag
            ppsBitstream.skipBits(1); // cabac_init_present_flag
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(ppsBitstream); // num_ref_idx_l0_default_active_minus1
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(ppsBitstream); // num_ref_idx_l1_default_active_minus1
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readSignedExpGolomb"])(ppsBitstream); // init_qp_minus26
            ppsBitstream.skipBits(1); // constrained_intra_pred_flag
            ppsBitstream.skipBits(1); // transform_skip_enabled_flag
            if (ppsBitstream.readBits(1)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(ppsBitstream); // diff_cu_qp_delta_depth
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readSignedExpGolomb"])(ppsBitstream); // pps_cb_qp_offset
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readSignedExpGolomb"])(ppsBitstream); // pps_cr_qp_offset
            ppsBitstream.skipBits(1); // pps_slice_chroma_qp_offsets_present_flag
            ppsBitstream.skipBits(1); // weighted_pred_flag
            ppsBitstream.skipBits(1); // weighted_bipred_flag
            ppsBitstream.skipBits(1); // transquant_bypass_enabled_flag
            const tiles_enabled_flag = ppsBitstream.readBits(1);
            const entropy_coding_sync_enabled_flag = ppsBitstream.readBits(1);
            if (!tiles_enabled_flag && !entropy_coding_sync_enabled_flag) parallelismType = 0;
            else if (tiles_enabled_flag && !entropy_coding_sync_enabled_flag) parallelismType = 2;
            else if (!tiles_enabled_flag && entropy_coding_sync_enabled_flag) parallelismType = 3;
            else parallelismType = 0;
        }
        const arrays = [
            ...vpsUnits.length ? [
                {
                    arrayCompleteness: 1,
                    nalUnitType: NALU_TYPE_VPS,
                    nalUnits: vpsUnits
                }
            ] : [],
            ...spsUnits.length ? [
                {
                    arrayCompleteness: 1,
                    nalUnitType: NALU_TYPE_SPS,
                    nalUnits: spsUnits
                }
            ] : [],
            ...ppsUnits.length ? [
                {
                    arrayCompleteness: 1,
                    nalUnitType: NALU_TYPE_PPS,
                    nalUnits: ppsUnits
                }
            ] : [],
            ...seiUnits.length ? [
                {
                    arrayCompleteness: 1,
                    nalUnitType: extractNalUnitTypeForHevc(seiUnits[0]),
                    nalUnits: seiUnits
                }
            ] : []
        ];
        const record = {
            configurationVersion: 1,
            generalProfileSpace: general_profile_space,
            generalTierFlag: general_tier_flag,
            generalProfileIdc: general_profile_idc,
            generalProfileCompatibilityFlags: general_profile_compatibility_flags,
            generalConstraintIndicatorFlags: general_constraint_indicator_flags,
            generalLevelIdc: general_level_idc,
            minSpatialSegmentationIdc: min_spatial_segmentation_idc,
            parallelismType,
            chromaFormatIdc: chroma_format_idc,
            bitDepthLumaMinus8: bit_depth_luma_minus8,
            bitDepthChromaMinus8: bit_depth_chroma_minus8,
            avgFrameRate: 0,
            constantFrameRate: 0,
            numTemporalLayers: sps_max_sub_layers_minus1 + 1,
            temporalIdNested: sps_temporal_id_nesting_flag,
            lengthSizeMinusOne: 3,
            arrays
        };
        return record;
    } catch (error) {
        console.error('Error building HEVC Decoder Configuration Record:', error);
        return null;
    }
};
const parseProfileTierLevel = (bitstream, maxNumSubLayersMinus1)=>{
    const general_profile_space = bitstream.readBits(2);
    const general_tier_flag = bitstream.readBits(1);
    const general_profile_idc = bitstream.readBits(5);
    let general_profile_compatibility_flags = 0;
    for(let i = 0; i < 32; i++){
        general_profile_compatibility_flags = general_profile_compatibility_flags << 1 | bitstream.readBits(1);
    }
    const general_constraint_indicator_flags = new Uint8Array(6);
    for(let i = 0; i < 6; i++){
        general_constraint_indicator_flags[i] = bitstream.readBits(8);
    }
    const general_level_idc = bitstream.readBits(8);
    const sub_layer_profile_present_flag = [];
    const sub_layer_level_present_flag = [];
    for(let i = 0; i < maxNumSubLayersMinus1; i++){
        sub_layer_profile_present_flag.push(bitstream.readBits(1));
        sub_layer_level_present_flag.push(bitstream.readBits(1));
    }
    if (maxNumSubLayersMinus1 > 0) {
        for(let i = maxNumSubLayersMinus1; i < 8; i++){
            bitstream.skipBits(2); // reserved_zero_2bits
        }
    }
    for(let i = 0; i < maxNumSubLayersMinus1; i++){
        if (sub_layer_profile_present_flag[i]) bitstream.skipBits(88);
        if (sub_layer_level_present_flag[i]) bitstream.skipBits(8);
    }
    return {
        general_profile_space,
        general_tier_flag,
        general_profile_idc,
        general_profile_compatibility_flags,
        general_constraint_indicator_flags,
        general_level_idc
    };
};
const skipScalingListData = (bitstream)=>{
    for(let sizeId = 0; sizeId < 4; sizeId++){
        for(let matrixId = 0; matrixId < (sizeId === 3 ? 2 : 6); matrixId++){
            const scaling_list_pred_mode_flag = bitstream.readBits(1);
            if (!scaling_list_pred_mode_flag) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // scaling_list_pred_matrix_id_delta
            } else {
                const coefNum = Math.min(64, 1 << 4 + (sizeId << 1));
                if (sizeId > 1) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readSignedExpGolomb"])(bitstream); // scaling_list_dc_coef_minus8
                }
                for(let i = 0; i < coefNum; i++){
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readSignedExpGolomb"])(bitstream); // scaling_list_delta_coef
                }
            }
        }
    }
};
const skipAllStRefPicSets = (bitstream, num_short_term_ref_pic_sets)=>{
    const NumDeltaPocs = [];
    for(let stRpsIdx = 0; stRpsIdx < num_short_term_ref_pic_sets; stRpsIdx++){
        NumDeltaPocs[stRpsIdx] = skipStRefPicSet(bitstream, stRpsIdx, num_short_term_ref_pic_sets, NumDeltaPocs);
    }
};
const skipStRefPicSet = (bitstream, stRpsIdx, num_short_term_ref_pic_sets, NumDeltaPocs)=>{
    let NumDeltaPocsThis = 0;
    let inter_ref_pic_set_prediction_flag = 0;
    let RefRpsIdx = 0;
    if (stRpsIdx !== 0) {
        inter_ref_pic_set_prediction_flag = bitstream.readBits(1);
    }
    if (inter_ref_pic_set_prediction_flag) {
        if (stRpsIdx === num_short_term_ref_pic_sets) {
            const delta_idx_minus1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream);
            RefRpsIdx = stRpsIdx - (delta_idx_minus1 + 1);
        } else {
            RefRpsIdx = stRpsIdx - 1;
        }
        bitstream.readBits(1); // delta_rps_sign
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // abs_delta_rps_minus1
        var _NumDeltaPocs_RefRpsIdx;
        // The number of iterations is NumDeltaPocs[RefRpsIdx] + 1
        const numDelta = (_NumDeltaPocs_RefRpsIdx = NumDeltaPocs[RefRpsIdx]) !== null && _NumDeltaPocs_RefRpsIdx !== void 0 ? _NumDeltaPocs_RefRpsIdx : 0;
        for(let j = 0; j <= numDelta; j++){
            const used_by_curr_pic_flag = bitstream.readBits(1);
            if (!used_by_curr_pic_flag) {
                bitstream.readBits(1); // use_delta_flag
            }
        }
        NumDeltaPocsThis = NumDeltaPocs[RefRpsIdx];
    } else {
        const num_negative_pics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream);
        const num_positive_pics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream);
        for(let i = 0; i < num_negative_pics; i++){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // delta_poc_s0_minus1[i]
            bitstream.readBits(1); // used_by_curr_pic_s0_flag[i]
        }
        for(let i = 0; i < num_positive_pics; i++){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // delta_poc_s1_minus1[i]
            bitstream.readBits(1); // used_by_curr_pic_s1_flag[i]
        }
        NumDeltaPocsThis = num_negative_pics + num_positive_pics;
    }
    return NumDeltaPocsThis;
};
const parseVuiForMinSpatialSegmentationIdc = (bitstream, sps_max_sub_layers_minus1)=>{
    if (bitstream.readBits(1)) {
        const aspect_ratio_idc = bitstream.readBits(8);
        if (aspect_ratio_idc === 255) {
            bitstream.readBits(16); // sar_width
            bitstream.readBits(16); // sar_height
        }
    }
    if (bitstream.readBits(1)) {
        bitstream.readBits(1); // overscan_appropriate_flag
    }
    if (bitstream.readBits(1)) {
        bitstream.readBits(3); // video_format
        bitstream.readBits(1); // video_full_range_flag
        if (bitstream.readBits(1)) {
            bitstream.readBits(8); // colour_primaries
            bitstream.readBits(8); // transfer_characteristics
            bitstream.readBits(8); // matrix_coeffs
        }
    }
    if (bitstream.readBits(1)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // chroma_sample_loc_type_top_field
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // chroma_sample_loc_type_bottom_field
    }
    bitstream.readBits(1); // neutral_chroma_indication_flag
    bitstream.readBits(1); // field_seq_flag
    bitstream.readBits(1); // frame_field_info_present_flag
    if (bitstream.readBits(1)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // def_disp_win_left_offset
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // def_disp_win_right_offset
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // def_disp_win_top_offset
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // def_disp_win_bottom_offset
    }
    if (bitstream.readBits(1)) {
        bitstream.readBits(32); // vui_num_units_in_tick
        bitstream.readBits(32); // vui_time_scale
        if (bitstream.readBits(1)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // vui_num_ticks_poc_diff_one_minus1
        }
        if (bitstream.readBits(1)) {
            skipHrdParameters(bitstream, true, sps_max_sub_layers_minus1);
        }
    }
    if (bitstream.readBits(1)) {
        bitstream.readBits(1); // tiles_fixed_structure_flag
        bitstream.readBits(1); // motion_vectors_over_pic_boundaries_flag
        bitstream.readBits(1); // restricted_ref_pic_lists_flag
        const min_spatial_segmentation_idc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream);
        // skip the rest
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // max_bytes_per_pic_denom
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // max_bits_per_min_cu_denom
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // log2_max_mv_length_horizontal
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // log2_max_mv_length_vertical
        return min_spatial_segmentation_idc;
    }
    return 0;
};
const skipHrdParameters = (bitstream, commonInfPresentFlag, maxNumSubLayersMinus1)=>{
    let nal_hrd_parameters_present_flag = false;
    let vcl_hrd_parameters_present_flag = false;
    let sub_pic_hrd_params_present_flag = false;
    if (commonInfPresentFlag) {
        nal_hrd_parameters_present_flag = bitstream.readBits(1) === 1;
        vcl_hrd_parameters_present_flag = bitstream.readBits(1) === 1;
        if (nal_hrd_parameters_present_flag || vcl_hrd_parameters_present_flag) {
            sub_pic_hrd_params_present_flag = bitstream.readBits(1) === 1;
            if (sub_pic_hrd_params_present_flag) {
                bitstream.readBits(8); // tick_divisor_minus2
                bitstream.readBits(5); // du_cpb_removal_delay_increment_length_minus1
                bitstream.readBits(1); // sub_pic_cpb_params_in_pic_timing_sei_flag
                bitstream.readBits(5); // dpb_output_delay_du_length_minus1
            }
            bitstream.readBits(4); // bit_rate_scale
            bitstream.readBits(4); // cpb_size_scale
            if (sub_pic_hrd_params_present_flag) {
                bitstream.readBits(4); // cpb_size_du_scale
            }
            bitstream.readBits(5); // initial_cpb_removal_delay_length_minus1
            bitstream.readBits(5); // au_cpb_removal_delay_length_minus1
            bitstream.readBits(5); // dpb_output_delay_length_minus1
        }
    }
    for(let i = 0; i <= maxNumSubLayersMinus1; i++){
        const fixed_pic_rate_general_flag = bitstream.readBits(1) === 1;
        let fixed_pic_rate_within_cvs_flag = true; // Default assumption if general is true
        if (!fixed_pic_rate_general_flag) {
            fixed_pic_rate_within_cvs_flag = bitstream.readBits(1) === 1;
        }
        let low_delay_hrd_flag = false; // Default assumption
        if (fixed_pic_rate_within_cvs_flag) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // elemental_duration_in_tc_minus1[i]
        } else {
            low_delay_hrd_flag = bitstream.readBits(1) === 1;
        }
        let CpbCnt = 1; // Default if low_delay is true
        if (!low_delay_hrd_flag) {
            const cpb_cnt_minus1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // cpb_cnt_minus1[i]
            CpbCnt = cpb_cnt_minus1 + 1;
        }
        if (nal_hrd_parameters_present_flag) {
            skipSubLayerHrdParameters(bitstream, CpbCnt, sub_pic_hrd_params_present_flag);
        }
        if (vcl_hrd_parameters_present_flag) {
            skipSubLayerHrdParameters(bitstream, CpbCnt, sub_pic_hrd_params_present_flag);
        }
    }
};
const skipSubLayerHrdParameters = (bitstream, CpbCnt, sub_pic_hrd_params_present_flag)=>{
    for(let i = 0; i < CpbCnt; i++){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // bit_rate_value_minus1[i]
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // cpb_size_value_minus1[i]
        if (sub_pic_hrd_params_present_flag) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // cpb_size_du_value_minus1[i]
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readExpGolomb"])(bitstream); // bit_rate_du_value_minus1[i]
        }
        bitstream.readBits(1); // cbr_flag[i]
    }
};
const serializeHevcDecoderConfigurationRecord = (record)=>{
    const bytes = [];
    bytes.push(record.configurationVersion);
    bytes.push((record.generalProfileSpace & 0x3) << 6 | (record.generalTierFlag & 0x1) << 5 | record.generalProfileIdc & 0x1F);
    bytes.push(record.generalProfileCompatibilityFlags >>> 24 & 0xFF);
    bytes.push(record.generalProfileCompatibilityFlags >>> 16 & 0xFF);
    bytes.push(record.generalProfileCompatibilityFlags >>> 8 & 0xFF);
    bytes.push(record.generalProfileCompatibilityFlags & 0xFF);
    bytes.push(...record.generalConstraintIndicatorFlags);
    bytes.push(record.generalLevelIdc & 0xFF);
    bytes.push(0xF0 | record.minSpatialSegmentationIdc >> 8 & 0x0F); // Reserved + high nibble
    bytes.push(record.minSpatialSegmentationIdc & 0xFF); // Low byte
    bytes.push(0xFC | record.parallelismType & 0x03);
    bytes.push(0xFC | record.chromaFormatIdc & 0x03);
    bytes.push(0xF8 | record.bitDepthLumaMinus8 & 0x07);
    bytes.push(0xF8 | record.bitDepthChromaMinus8 & 0x07);
    bytes.push(record.avgFrameRate >> 8 & 0xFF); // High byte
    bytes.push(record.avgFrameRate & 0xFF); // Low byte
    bytes.push((record.constantFrameRate & 0x03) << 6 | (record.numTemporalLayers & 0x07) << 3 | (record.temporalIdNested & 0x01) << 2 | record.lengthSizeMinusOne & 0x03);
    bytes.push(record.arrays.length & 0xFF);
    for (const arr of record.arrays){
        bytes.push((arr.arrayCompleteness & 0x01) << 7 | 0 << 6 | arr.nalUnitType & 0x3F);
        bytes.push(arr.nalUnits.length >> 8 & 0xFF); // High byte
        bytes.push(arr.nalUnits.length & 0xFF); // Low byte
        for (const nal of arr.nalUnits){
            bytes.push(nal.length >> 8 & 0xFF); // High byte
            bytes.push(nal.length & 0xFF); // Low byte
            for(let i = 0; i < nal.length; i++){
                bytes.push(nal[i]);
            }
        }
    }
    return new Uint8Array(bytes);
};
const extractVp9CodecInfoFromPacket = (packet)=>{
    // eslint-disable-next-line @stylistic/max-len
    // https://storage.googleapis.com/downloads.webmproject.org/docs/vp9/vp9-bitstream-specification-v0.7-20170222-draft.pdf
    // http://downloads.webmproject.org/docs/vp9/vp9-bitstream_superframe-and-uncompressed-header_v1.0.pdf
    const bitstream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bitstream"](packet);
    // Frame marker (0b10)
    const frameMarker = bitstream.readBits(2);
    if (frameMarker !== 2) {
        return null;
    }
    // Profile
    const profileLowBit = bitstream.readBits(1);
    const profileHighBit = bitstream.readBits(1);
    const profile = (profileHighBit << 1) + profileLowBit;
    // Skip reserved bit for profile 3
    if (profile === 3) {
        bitstream.skipBits(1);
    }
    // show_existing_frame
    const showExistingFrame = bitstream.readBits(1);
    if (showExistingFrame === 1) {
        return null;
    }
    // frame_type (0 = key frame)
    const frameType = bitstream.readBits(1);
    if (frameType !== 0) {
        return null;
    }
    // Skip show_frame and error_resilient_mode
    bitstream.skipBits(2);
    // Sync code (0x498342)
    const syncCode = bitstream.readBits(24);
    if (syncCode !== 0x498342) {
        return null;
    }
    // Color config
    let bitDepth = 8;
    if (profile >= 2) {
        const tenOrTwelveBit = bitstream.readBits(1);
        bitDepth = tenOrTwelveBit ? 12 : 10;
    }
    // Color space
    const colorSpace = bitstream.readBits(3);
    let chromaSubsampling = 0;
    let videoFullRangeFlag = 0;
    if (colorSpace !== 7) {
        const colorRange = bitstream.readBits(1);
        videoFullRangeFlag = colorRange;
        if (profile === 1 || profile === 3) {
            const subsamplingX = bitstream.readBits(1);
            const subsamplingY = bitstream.readBits(1);
            // 0 = 4:2:0 vertical
            // 1 = 4:2:0 colocated
            // 2 = 4:2:2
            // 3 = 4:4:4
            chromaSubsampling = !subsamplingX && !subsamplingY ? 3 // 0,0 = 4:4:4
             : subsamplingX && !subsamplingY ? 2 // 1,0 = 4:2:2
             : 1; // 1,1 = 4:2:0 colocated (default)
            // Skip reserved bit
            bitstream.skipBits(1);
        } else {
            // For profile 0 and 2, always 4:2:0
            chromaSubsampling = 1; // Using colocated as default
        }
    } else {
        // RGB is always 4:4:4
        chromaSubsampling = 3;
        videoFullRangeFlag = 1;
    }
    // Parse frame size
    const widthMinusOne = bitstream.readBits(16);
    const heightMinusOne = bitstream.readBits(16);
    const width = widthMinusOne + 1;
    const height = heightMinusOne + 1;
    // Calculate level based on dimensions
    const pictureSize = width * height;
    let level = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VP9_LEVEL_TABLE"]).level; // Default to highest level
    for (const entry of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VP9_LEVEL_TABLE"]){
        if (pictureSize <= entry.maxPictureSize) {
            level = entry.level;
            break;
        }
    }
    // Map color_space to standard values
    const matrixCoefficients = colorSpace === 7 ? 0 : colorSpace === 2 ? 1 : colorSpace === 1 ? 6 : 2;
    const colourPrimaries = colorSpace === 2 ? 1 : colorSpace === 1 ? 6 : 2;
    const transferCharacteristics = colorSpace === 2 ? 1 : colorSpace === 1 ? 6 : 2;
    return {
        profile,
        level,
        bitDepth,
        chromaSubsampling,
        videoFullRangeFlag,
        colourPrimaries,
        transferCharacteristics,
        matrixCoefficients
    };
};
function* iterateAv1PacketObus(packet) {
    // https://aomediacodec.github.io/av1-spec/av1-spec.pdf
    const bitstream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bitstream"](packet);
    const readLeb128 = ()=>{
        let value = 0;
        for(let i = 0; i < 8; i++){
            const byte = bitstream.readAlignedByte();
            value |= (byte & 0x7f) << i * 7;
            if (!(byte & 0x80)) {
                break;
            }
            // Spec requirement
            if (i === 7 && byte & 0x80) {
                return null;
            }
        }
        // Spec requirement
        if (value >= 2 ** 32 - 1) {
            return null;
        }
        return value;
    };
    while(bitstream.getBitsLeft() >= 8){
        // Parse OBU header
        bitstream.skipBits(1);
        const obuType = bitstream.readBits(4);
        const obuExtension = bitstream.readBits(1);
        const obuHasSizeField = bitstream.readBits(1);
        bitstream.skipBits(1);
        // Skip extension header if present
        if (obuExtension) {
            bitstream.skipBits(8);
        }
        // Read OBU size if present
        let obuSize;
        if (obuHasSizeField) {
            const obuSizeValue = readLeb128();
            if (obuSizeValue === null) return; // It was invalid
            obuSize = obuSizeValue;
        } else {
            // Calculate remaining bits and convert to bytes, rounding down
            obuSize = Math.floor(bitstream.getBitsLeft() / 8);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(bitstream.pos % 8 === 0);
        yield {
            type: obuType,
            data: packet.subarray(bitstream.pos / 8, bitstream.pos / 8 + obuSize)
        };
        // Move to next OBU
        bitstream.skipBits(obuSize * 8);
    }
}
;
const extractAv1CodecInfoFromPacket = (packet)=>{
    // https://aomediacodec.github.io/av1-spec/av1-spec.pdf
    for (const { type, data } of iterateAv1PacketObus(packet)){
        if (type !== 1) {
            continue; // 1 == OBU_SEQUENCE_HEADER
        }
        const bitstream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bitstream"](data);
        // Read sequence header fields
        const seqProfile = bitstream.readBits(3);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const stillPicture = bitstream.readBits(1);
        const reducedStillPictureHeader = bitstream.readBits(1);
        let seqLevel = 0;
        let seqTier = 0;
        let bufferDelayLengthMinus1 = 0;
        if (reducedStillPictureHeader) {
            seqLevel = bitstream.readBits(5);
        } else {
            // Parse timing_info_present_flag
            const timingInfoPresentFlag = bitstream.readBits(1);
            if (timingInfoPresentFlag) {
                // Skip timing info (num_units_in_display_tick, time_scale, equal_picture_interval)
                bitstream.skipBits(32); // num_units_in_display_tick
                bitstream.skipBits(32); // time_scale
                const equalPictureInterval = bitstream.readBits(1);
                if (equalPictureInterval) {
                    // Skip num_ticks_per_picture_minus_1 (uvlc)
                    // Since this is variable length, we'd need to implement uvlc reading
                    // For now, we'll return null as this is rare
                    return null;
                }
            }
            // Parse decoder_model_info_present_flag
            const decoderModelInfoPresentFlag = bitstream.readBits(1);
            if (decoderModelInfoPresentFlag) {
                // Store buffer_delay_length_minus_1 instead of just skipping
                bufferDelayLengthMinus1 = bitstream.readBits(5);
                bitstream.skipBits(32); // num_units_in_decoding_tick
                bitstream.skipBits(5); // buffer_removal_time_length_minus_1
                bitstream.skipBits(5); // frame_presentation_time_length_minus_1
            }
            // Parse operating_points_cnt_minus_1
            const operatingPointsCntMinus1 = bitstream.readBits(5);
            // For each operating point
            for(let i = 0; i <= operatingPointsCntMinus1; i++){
                // operating_point_idc[i]
                bitstream.skipBits(12);
                // seq_level_idx[i]
                const seqLevelIdx = bitstream.readBits(5);
                if (i === 0) {
                    seqLevel = seqLevelIdx;
                }
                if (seqLevelIdx > 7) {
                    // seq_tier[i]
                    const seqTierTemp = bitstream.readBits(1);
                    if (i === 0) {
                        seqTier = seqTierTemp;
                    }
                }
                if (decoderModelInfoPresentFlag) {
                    // decoder_model_present_for_this_op[i]
                    const decoderModelPresentForThisOp = bitstream.readBits(1);
                    if (decoderModelPresentForThisOp) {
                        const n = bufferDelayLengthMinus1 + 1;
                        bitstream.skipBits(n); // decoder_buffer_delay[op]
                        bitstream.skipBits(n); // encoder_buffer_delay[op]
                        bitstream.skipBits(1); // low_delay_mode_flag[op]
                    }
                }
                // initial_display_delay_present_flag
                const initialDisplayDelayPresentFlag = bitstream.readBits(1);
                if (initialDisplayDelayPresentFlag) {
                    // initial_display_delay_minus_1[i]
                    bitstream.skipBits(4);
                }
            }
        }
        const highBitdepth = bitstream.readBits(1);
        let bitDepth = 8;
        if (seqProfile === 2 && highBitdepth) {
            const twelveBit = bitstream.readBits(1);
            bitDepth = twelveBit ? 12 : 10;
        } else if (seqProfile <= 2) {
            bitDepth = highBitdepth ? 10 : 8;
        }
        let monochrome = 0;
        if (seqProfile !== 1) {
            monochrome = bitstream.readBits(1);
        }
        let chromaSubsamplingX = 1;
        let chromaSubsamplingY = 1;
        let chromaSamplePosition = 0;
        if (!monochrome) {
            if (seqProfile === 0) {
                chromaSubsamplingX = 1;
                chromaSubsamplingY = 1;
            } else if (seqProfile === 1) {
                chromaSubsamplingX = 0;
                chromaSubsamplingY = 0;
            } else {
                if (bitDepth === 12) {
                    chromaSubsamplingX = bitstream.readBits(1);
                    if (chromaSubsamplingX) {
                        chromaSubsamplingY = bitstream.readBits(1);
                    }
                }
            }
            if (chromaSubsamplingX && chromaSubsamplingY) {
                chromaSamplePosition = bitstream.readBits(2);
            }
        }
        return {
            profile: seqProfile,
            level: seqLevel,
            tier: seqTier,
            bitDepth,
            monochrome,
            chromaSubsamplingX,
            chromaSubsamplingY,
            chromaSamplePosition
        };
    }
    return null;
};
const parseOpusIdentificationHeader = (bytes)=>{
    const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDataView"])(bytes);
    const outputChannelCount = view.getUint8(9);
    const preSkip = view.getUint16(10, true);
    const inputSampleRate = view.getUint32(12, true);
    const outputGain = view.getInt16(16, true);
    const channelMappingFamily = view.getUint8(18);
    let channelMappingTable = null;
    if (channelMappingFamily) {
        channelMappingTable = bytes.subarray(19, 19 + 2 + outputChannelCount);
    }
    return {
        outputChannelCount,
        preSkip,
        inputSampleRate,
        outputGain,
        channelMappingFamily,
        channelMappingTable
    };
};
// From https://datatracker.ietf.org/doc/html/rfc6716, in 48 kHz samples
const OPUS_FRAME_DURATION_TABLE = [
    480,
    960,
    1920,
    2880,
    480,
    960,
    1920,
    2880,
    480,
    960,
    1920,
    2880,
    480,
    960,
    480,
    960,
    120,
    240,
    480,
    960,
    120,
    240,
    480,
    960,
    120,
    240,
    480,
    960,
    120,
    240,
    480,
    960
];
const parseOpusTocByte = (packet)=>{
    const config = packet[0] >> 3;
    return {
        durationInSamples: OPUS_FRAME_DURATION_TABLE[config]
    };
};
const parseModesFromVorbisSetupPacket = (setupHeader)=>{
    // Verify that this is a Setup header.
    if (setupHeader.length < 7) {
        throw new Error('Setup header is too short.');
    }
    if (setupHeader[0] !== 5) {
        throw new Error('Wrong packet type in Setup header.');
    }
    const signature = String.fromCharCode(...setupHeader.slice(1, 7));
    if (signature !== 'vorbis') {
        throw new Error('Invalid packet signature in Setup header.');
    }
    // Reverse the entire buffer.
    const bufSize = setupHeader.length;
    const revBuffer = new Uint8Array(bufSize);
    for(let i = 0; i < bufSize; i++){
        revBuffer[i] = setupHeader[bufSize - 1 - i];
    }
    // Initialize a Bitstream on the reversed buffer.
    const bitstream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bitstream"](revBuffer);
    // --- Find the framing bit.
    // In FFmpeg code, we scan until get_bits1() returns 1.
    let gotFramingBit = 0;
    while(bitstream.getBitsLeft() > 97){
        if (bitstream.readBits(1) === 1) {
            gotFramingBit = bitstream.pos;
            break;
        }
    }
    if (gotFramingBit === 0) {
        throw new Error('Invalid Setup header: framing bit not found.');
    }
    // --- Search backwards for a valid mode header.
    // We try to “guess” the number of modes by reading a fixed pattern.
    let modeCount = 0;
    let gotModeHeader = false;
    let lastModeCount = 0;
    while(bitstream.getBitsLeft() >= 97){
        const tempPos = bitstream.pos;
        const a = bitstream.readBits(8);
        const b = bitstream.readBits(16);
        const c = bitstream.readBits(16);
        // If a > 63 or b or c nonzero, assume we’ve gone too far.
        if (a > 63 || b !== 0 || c !== 0) {
            bitstream.pos = tempPos;
            break;
        }
        bitstream.skipBits(1);
        modeCount++;
        if (modeCount > 64) {
            break;
        }
        const bsClone = bitstream.clone();
        const candidate = bsClone.readBits(6) + 1;
        if (candidate === modeCount) {
            gotModeHeader = true;
            lastModeCount = modeCount;
        }
    }
    if (!gotModeHeader) {
        throw new Error('Invalid Setup header: mode header not found.');
    }
    if (lastModeCount > 63) {
        throw new Error("Unsupported mode count: ".concat(lastModeCount, "."));
    }
    const finalModeCount = lastModeCount;
    // --- Reinitialize the bitstream.
    bitstream.pos = 0;
    // Skip the bits up to the found framing bit.
    bitstream.skipBits(gotFramingBit);
    // --- Now read, for each mode (in reverse order), 40 bits then one bit.
    // That one bit is the mode blockflag.
    const modeBlockflags = Array(finalModeCount).fill(0);
    for(let i = finalModeCount - 1; i >= 0; i--){
        bitstream.skipBits(40);
        modeBlockflags[i] = bitstream.readBits(1);
    }
    return {
        modeBlockflags
    };
};
const determineVideoPacketType = async (videoTrack, packet)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(videoTrack.codec);
    switch(videoTrack.codec){
        case 'avc':
            {
                const decoderConfig = await videoTrack.getDecoderConfig();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(decoderConfig);
                let nalUnits;
                if (decoderConfig.description) {
                    // Stream is length-prefixed. Let's extract the size of the length prefix from the decoder config
                    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(decoderConfig.description);
                    const lengthSizeMinusOne = bytes[4] & 0b11;
                    const lengthSize = lengthSizeMinusOne + 1;
                    nalUnits = findNalUnitsInLengthPrefixed(packet.data, lengthSize);
                } else {
                    // Stream is in Annex B format
                    nalUnits = findNalUnitsInAnnexB(packet.data);
                }
                const isKeyframe = nalUnits.some((x)=>extractNalUnitTypeForAvc(x) === 5);
                return isKeyframe ? 'key' : 'delta';
            }
            //TURBOPACK unreachable
            ;
        case 'hevc':
            {
                const decoderConfig = await videoTrack.getDecoderConfig();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(decoderConfig);
                let nalUnits;
                if (decoderConfig.description) {
                    // Stream is length-prefixed. Let's extract the size of the length prefix from the decoder config
                    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(decoderConfig.description);
                    const lengthSizeMinusOne = bytes[21] & 0b11;
                    const lengthSize = lengthSizeMinusOne + 1;
                    nalUnits = findNalUnitsInLengthPrefixed(packet.data, lengthSize);
                } else {
                    // Stream is in Annex B format
                    nalUnits = findNalUnitsInAnnexB(packet.data);
                }
                const isKeyframe = nalUnits.some((x)=>{
                    const type = extractNalUnitTypeForHevc(x);
                    return 16 <= type && type <= 23;
                });
                return isKeyframe ? 'key' : 'delta';
            }
            //TURBOPACK unreachable
            ;
        case 'vp8':
            {
                // VP8, once again, by far the easiest to deal with.
                const frameType = packet.data[0] & 0b1;
                return frameType === 0 ? 'key' : 'delta';
            }
            //TURBOPACK unreachable
            ;
        case 'vp9':
            {
                const bitstream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bitstream"](packet.data);
                if (bitstream.readBits(2) !== 2) {
                    return null;
                }
                ;
                const profileLowBit = bitstream.readBits(1);
                const profileHighBit = bitstream.readBits(1);
                const profile = (profileHighBit << 1) + profileLowBit;
                // Skip reserved bit for profile 3
                if (profile === 3) {
                    bitstream.skipBits(1);
                }
                const showExistingFrame = bitstream.readBits(1);
                if (showExistingFrame) {
                    return null;
                }
                const frameType = bitstream.readBits(1);
                return frameType === 0 ? 'key' : 'delta';
            }
            //TURBOPACK unreachable
            ;
        case 'av1':
            {
                let reducedStillPictureHeader = false;
                for (const { type, data } of iterateAv1PacketObus(packet.data)){
                    if (type === 1) {
                        const bitstream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bitstream"](data);
                        bitstream.skipBits(4);
                        reducedStillPictureHeader = !!bitstream.readBits(1);
                    } else if (type === 3 // OBU_FRAME_HEADER
                     || type === 6 // OBU_FRAME
                     || type === 7 // OBU_REDUNDANT_FRAME_HEADER
                    ) {
                        if (reducedStillPictureHeader) {
                            return 'key';
                        }
                        const bitstream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bitstream"](data);
                        const showExistingFrame = bitstream.readBits(1);
                        if (showExistingFrame) {
                            return null;
                        }
                        const frameType = bitstream.readBits(2);
                        return frameType === 0 ? 'key' : 'delta';
                    }
                }
                return null;
            }
            //TURBOPACK unreachable
            ;
        default:
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNever"])(videoTrack.codec);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false);
            }
            ;
    }
};
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/demuxer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "Demuxer": ()=>Demuxer
});
class Demuxer {
    constructor(input){
        this.input = input;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/packet.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "EncodedPacket": ()=>EncodedPacket,
    "PLACEHOLDER_DATA": ()=>PLACEHOLDER_DATA
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
;
const PLACEHOLDER_DATA = new Uint8Array(0);
class EncodedPacket {
    /** If this packet is a metadata-only packet. Metadata-only packets don't contain their packet data. */ get isMetadataOnly() {
        return this.data === PLACEHOLDER_DATA;
    }
    /** The timestamp of this packet in microseconds. */ get microsecondTimestamp() {
        return Math.trunc(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECOND_TO_MICROSECOND_FACTOR"] * this.timestamp);
    }
    /** The duration of this packet in microseconds. */ get microsecondDuration() {
        return Math.trunc(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECOND_TO_MICROSECOND_FACTOR"] * this.duration);
    }
    /** Converts this packet to an EncodedVideoChunk for use with the WebCodecs API. */ toEncodedVideoChunk() {
        if (this.isMetadataOnly) {
            throw new TypeError('Metadata-only packets cannot be converted to a video chunk.');
        }
        if (typeof EncodedVideoChunk === 'undefined') {
            throw new Error('Your browser does not support EncodedVideoChunk.');
        }
        return new EncodedVideoChunk({
            data: this.data,
            type: this.type,
            timestamp: this.microsecondTimestamp,
            duration: this.microsecondDuration
        });
    }
    /** Converts this packet to an EncodedAudioChunk for use with the WebCodecs API. */ toEncodedAudioChunk() {
        if (this.isMetadataOnly) {
            throw new TypeError('Metadata-only packets cannot be converted to an audio chunk.');
        }
        if (typeof EncodedAudioChunk === 'undefined') {
            throw new Error('Your browser does not support EncodedAudioChunk.');
        }
        return new EncodedAudioChunk({
            data: this.data,
            type: this.type,
            timestamp: this.microsecondTimestamp,
            duration: this.microsecondDuration
        });
    }
    /**
     * Creates an EncodedPacket from an EncodedVideoChunk or EncodedAudioChunk. This method is useful for converting
     * chunks from the WebCodecs API to EncodedPackets.
     */ static fromEncodedChunk(chunk) {
        if (!(chunk instanceof EncodedVideoChunk || chunk instanceof EncodedAudioChunk)) {
            throw new TypeError('chunk must be an EncodedVideoChunk or EncodedAudioChunk.');
        }
        const data = new Uint8Array(chunk.byteLength);
        chunk.copyTo(data);
        var _chunk_duration;
        return new EncodedPacket(data, chunk.type, chunk.timestamp / 1e6, ((_chunk_duration = chunk.duration) !== null && _chunk_duration !== void 0 ? _chunk_duration : 0) / 1e6);
    }
    /** Clones this packet while optionally updating timing information. */ clone(options) {
        if (options !== undefined && (typeof options !== 'object' || options === null)) {
            throw new TypeError('options, when provided, must be an object.');
        }
        if ((options === null || options === void 0 ? void 0 : options.timestamp) !== undefined && !Number.isFinite(options.timestamp)) {
            throw new TypeError('options.timestamp, when provided, must be a number.');
        }
        if ((options === null || options === void 0 ? void 0 : options.duration) !== undefined && !Number.isFinite(options.duration)) {
            throw new TypeError('options.duration, when provided, must be a number.');
        }
        var _options_timestamp, _options_duration;
        return new EncodedPacket(this.data, this.type, (_options_timestamp = options === null || options === void 0 ? void 0 : options.timestamp) !== null && _options_timestamp !== void 0 ? _options_timestamp : this.timestamp, (_options_duration = options === null || options === void 0 ? void 0 : options.duration) !== null && _options_duration !== void 0 ? _options_duration : this.duration, this.sequenceNumber, this.byteLength);
    }
    constructor(/** The encoded data of this packet. */ data, /** The type of this packet. */ type, /**
     * The presentation timestamp of this packet in seconds. May be negative. Samples with negative end timestamps
     * should not be presented.
     */ timestamp, /** The duration of this packet in seconds. */ duration, /**
     * The sequence number indicates the decode order of the packets. Packet A  must be decoded before packet B if A
     * has a lower sequence number than B. If two packets have the same sequence number, they are the same packet.
     * Otherwise, sequence numbers are arbitrary and are not guaranteed to have any meaning besides their relative
     * ordering. Negative sequence numbers mean the sequence number is undefined.
     */ sequenceNumber = -1, byteLength){
        this.data = data;
        this.type = type;
        this.timestamp = timestamp;
        this.duration = duration;
        this.sequenceNumber = sequenceNumber;
        if (data === PLACEHOLDER_DATA && byteLength === undefined) {
            throw new Error('Internal error: byteLength must be explicitly provided when constructing metadata-only packets.');
        }
        if (byteLength === undefined) {
            byteLength = data.byteLength;
        }
        if (!(data instanceof Uint8Array)) {
            throw new TypeError('data must be a Uint8Array.');
        }
        if (type !== 'key' && type !== 'delta') {
            throw new TypeError('type must be either "key" or "delta".');
        }
        if (!Number.isFinite(timestamp)) {
            throw new TypeError('timestamp must be a number.');
        }
        if (!Number.isFinite(duration) || duration < 0) {
            throw new TypeError('duration must be a non-negative number.');
        }
        if (!Number.isFinite(sequenceNumber)) {
            throw new TypeError('sequenceNumber must be a number.');
        }
        if (!Number.isInteger(byteLength) || byteLength < 0) {
            throw new TypeError('byteLength must be a non-negative integer.');
        }
        this.byteLength = byteLength;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/pcm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ // https://github.com/dystopiancode/pcm-g711/blob/master/pcm-g711/g711.c
__turbopack_context__.s({
    "fromAlaw": ()=>fromAlaw,
    "fromUlaw": ()=>fromUlaw,
    "toAlaw": ()=>toAlaw,
    "toUlaw": ()=>toUlaw
});
const toUlaw = (s16)=>{
    const MULAW_MAX = 0x1FFF;
    const MULAW_BIAS = 33;
    let number = s16;
    let mask = 0x1000;
    let sign = 0;
    let position = 12;
    let lsb = 0;
    if (number < 0) {
        number = -number;
        sign = 0x80;
    }
    number += MULAW_BIAS;
    if (number > MULAW_MAX) {
        number = MULAW_MAX;
    }
    while((number & mask) !== mask && position >= 5){
        mask >>= 1;
        position--;
    }
    lsb = number >> position - 4 & 0x0f;
    return ~(sign | position - 5 << 4 | lsb) & 0xFF;
};
const fromUlaw = (u8)=>{
    const MULAW_BIAS = 33;
    let sign = 0;
    let position = 0;
    let number = ~u8;
    if (number & 0x80) {
        number &= ~(1 << 7);
        sign = -1;
    }
    position = ((number & 0xF0) >> 4) + 5;
    const decoded = (1 << position | (number & 0x0F) << position - 4 | 1 << position - 5) - MULAW_BIAS;
    return sign === 0 ? decoded : -decoded;
};
const toAlaw = (s16)=>{
    const ALAW_MAX = 0xFFF;
    let mask = 0x800;
    let sign = 0;
    let position = 11;
    let lsb = 0;
    let number = s16;
    if (number < 0) {
        number = -number;
        sign = 0x80;
    }
    if (number > ALAW_MAX) {
        number = ALAW_MAX;
    }
    while((number & mask) !== mask && position >= 5){
        mask >>= 1;
        position--;
    }
    lsb = number >> (position === 4 ? 1 : position - 4) & 0x0f;
    return (sign | position - 4 << 4 | lsb) ^ 0x55;
};
const fromAlaw = (u8)=>{
    let sign = 0x00;
    let position = 0;
    let number = u8 ^ 0x55;
    if (number & 0x80) {
        number &= ~(1 << 7);
        sign = -1;
    }
    position = ((number & 0xF0) >> 4) + 4;
    let decoded = 0;
    if (position !== 4) {
        decoded = 1 << position | (number & 0x0F) << position - 4 | 1 << position - 5;
    } else {
        decoded = number << 1 | 1;
    }
    return sign === 0 ? decoded : -decoded;
};
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/sample.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "AudioSample": ()=>AudioSample,
    "VideoSample": ()=>VideoSample
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
;
class VideoSample {
    /** The width of the frame in pixels after rotation. */ get displayWidth() {
        return this.rotation % 180 === 0 ? this.codedWidth : this.codedHeight;
    }
    /** The height of the frame in pixels after rotation. */ get displayHeight() {
        return this.rotation % 180 === 0 ? this.codedHeight : this.codedWidth;
    }
    /** The presentation timestamp of the frame in microseconds. */ get microsecondTimestamp() {
        return Math.trunc(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECOND_TO_MICROSECOND_FACTOR"] * this.timestamp);
    }
    /** The duration of the frame in microseconds. */ get microsecondDuration() {
        return Math.trunc(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECOND_TO_MICROSECOND_FACTOR"] * this.duration);
    }
    /** Clones this video sample. */ clone() {
        if (this._closed) {
            throw new Error('VideoSample is closed.');
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this._data !== null);
        if (isVideoFrame(this._data)) {
            return new VideoSample(this._data.clone(), {
                timestamp: this.timestamp,
                duration: this.duration,
                rotation: this.rotation
            });
        } else if (this._data instanceof Uint8Array) {
            return new VideoSample(this._data.slice(), {
                format: this.format,
                codedWidth: this.codedWidth,
                codedHeight: this.codedHeight,
                timestamp: this.timestamp,
                duration: this.duration,
                colorSpace: this.colorSpace,
                rotation: this.rotation
            });
        } else {
            return new VideoSample(this._data, {
                format: this.format,
                codedWidth: this.codedWidth,
                codedHeight: this.codedHeight,
                timestamp: this.timestamp,
                duration: this.duration,
                colorSpace: this.colorSpace,
                rotation: this.rotation
            });
        }
    }
    /**
     * Closes this video sample, releasing held resources. Video samples should be closed as soon as they are not
     * needed anymore.
     */ close() {
        if (this._closed) {
            return;
        }
        if (isVideoFrame(this._data)) {
            this._data.close();
        } else {
            this._data = null; // GC that shit
        }
        this._closed = true;
    }
    /** Returns the number of bytes required to hold this video sample's pixel data. */ allocationSize() {
        if (this._closed) {
            throw new Error('VideoSample is closed.');
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this._data !== null);
        if (isVideoFrame(this._data)) {
            return this._data.allocationSize();
        } else if (this._data instanceof Uint8Array) {
            return this._data.byteLength;
        } else {
            return this.codedWidth * this.codedHeight * 4; // RGBX
        }
    }
    /** Copies this video sample's pixel data to an ArrayBuffer or ArrayBufferView. */ async copyTo(destination) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAllowSharedBufferSource"])(destination)) {
            throw new TypeError('destination must be an ArrayBuffer or an ArrayBuffer view.');
        }
        if (this._closed) {
            throw new Error('VideoSample is closed.');
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this._data !== null);
        if (isVideoFrame(this._data)) {
            await this._data.copyTo(destination);
        } else if (this._data instanceof Uint8Array) {
            const dest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(destination);
            dest.set(this._data);
        } else {
            const canvas = this._data;
            const context = canvas.getContext('2d', {
                alpha: false
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(context);
            const imageData = context.getImageData(0, 0, this.codedWidth, this.codedHeight);
            const dest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(destination);
            dest.set(imageData.data);
        }
    }
    /**
     * Converts this video sample to a VideoFrame for use with the WebCodecs API. The VideoFrame returned by this
     * method *must* be closed separately from this video sample.
     */ toVideoFrame() {
        if (this._closed) {
            throw new Error('VideoSample is closed.');
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this._data !== null);
        if (isVideoFrame(this._data)) {
            return new VideoFrame(this._data, {
                timestamp: this.microsecondTimestamp,
                duration: this.microsecondDuration || undefined
            });
        } else if (this._data instanceof Uint8Array) {
            return new VideoFrame(this._data, {
                format: this.format,
                codedWidth: this.codedWidth,
                codedHeight: this.codedHeight,
                timestamp: this.microsecondTimestamp,
                duration: this.microsecondDuration,
                colorSpace: this.colorSpace
            });
        } else {
            return new VideoFrame(this._data, {
                timestamp: this.microsecondTimestamp,
                duration: this.microsecondDuration
            });
        }
    }
    draw(context, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
        let sx = 0;
        let sy = 0;
        let sWidth = this.displayWidth;
        let sHeight = this.displayHeight;
        let dx = 0;
        let dy = 0;
        let dWidth = this.displayWidth;
        let dHeight = this.displayHeight;
        if (arg5 !== undefined) {
            sx = arg1;
            sy = arg2;
            sWidth = arg3;
            sHeight = arg4;
            dx = arg5;
            dy = arg6;
            if (arg7 !== undefined) {
                dWidth = arg7;
                dHeight = arg8;
            } else {
                dWidth = sWidth;
                dHeight = sHeight;
            }
        } else {
            dx = arg1;
            dy = arg2;
            if (arg3 !== undefined) {
                dWidth = arg3;
                dHeight = arg4;
            }
        }
        if (!(typeof CanvasRenderingContext2D !== 'undefined' && context instanceof CanvasRenderingContext2D || typeof OffscreenCanvasRenderingContext2D !== 'undefined' && context instanceof OffscreenCanvasRenderingContext2D)) {
            throw new TypeError('context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.');
        }
        if (!Number.isFinite(sx)) {
            throw new TypeError('sx must be a number.');
        }
        if (!Number.isFinite(sy)) {
            throw new TypeError('sy must be a number.');
        }
        if (!Number.isFinite(sWidth) || sWidth < 0) {
            throw new TypeError('sWidth must be a non-negative number.');
        }
        if (!Number.isFinite(sHeight) || sHeight < 0) {
            throw new TypeError('sHeight must be a non-negative number.');
        }
        if (!Number.isFinite(dx)) {
            throw new TypeError('dx must be a number.');
        }
        if (!Number.isFinite(dy)) {
            throw new TypeError('dy must be a number.');
        }
        if (!Number.isFinite(dWidth) || dWidth < 0) {
            throw new TypeError('dWidth must be a non-negative number.');
        }
        if (!Number.isFinite(dHeight) || dHeight < 0) {
            throw new TypeError('dHeight must be a non-negative number.');
        }
        if (this._closed) {
            throw new Error('VideoSample is closed.');
        }
        // The provided sx,sy,sWidth,sHeight refer to the final rotated image, but that's not actually how the image is
        // stored. Therefore, we must map these back onto the original, pre-rotation image.
        if (this.rotation === 90) {
            [sx, sy, sWidth, sHeight] = [
                sy,
                this.codedHeight - sx - sWidth,
                sHeight,
                sWidth
            ];
        } else if (this.rotation === 180) {
            [sx, sy] = [
                this.codedWidth - sx - sWidth,
                this.codedHeight - sy - sHeight
            ];
        } else if (this.rotation === 270) {
            [sx, sy, sWidth, sHeight] = [
                this.codedWidth - sy - sHeight,
                sx,
                sHeight,
                sWidth
            ];
        }
        const source = this.toCanvasImageSource();
        context.save();
        const centerX = dx + dWidth / 2;
        const centerY = dy + dHeight / 2;
        context.translate(centerX, centerY);
        context.rotate(this.rotation * Math.PI / 180);
        const aspectRatioChange = this.rotation % 180 === 0 ? 1 : dWidth / dHeight;
        // Scale to compensate for aspect ratio changes when rotated
        context.scale(1 / aspectRatioChange, aspectRatioChange);
        context.drawImage(source, sx, sy, sWidth, sHeight, -dWidth / 2, -dHeight / 2, dWidth, dHeight);
        // Restore the previous transformation state
        context.restore();
    }
    /**
     * Converts this video sample to a CanvasImageSource for drawing to a canvas.
     *
     * You must use the value returned by this method immediately, as any VideoFrame created internally will
     * automatically be closed in the next microtask.
     */ toCanvasImageSource() {
        if (this._closed) {
            throw new Error('VideoSample is closed.');
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this._data !== null);
        if (this._data instanceof Uint8Array) {
            // Requires VideoFrame to be defined
            const videoFrame = this.toVideoFrame();
            queueMicrotask(()=>videoFrame.close()); // Let's automatically close the frame in the next microtask
            return videoFrame;
        } else {
            return this._data;
        }
    }
    /** Sets the rotation metadata of this video sample. */ setRotation(newRotation) {
        if (![
            0,
            90,
            180,
            270
        ].includes(newRotation)) {
            throw new TypeError('newRotation must be 0, 90, 180, or 270.');
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        this.rotation = newRotation;
    }
    /** Sets the presentation timestamp of this video sample, in seconds. */ setTimestamp(newTimestamp) {
        if (!Number.isFinite(newTimestamp)) {
            throw new TypeError('newTimestamp must be a number.');
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        this.timestamp = newTimestamp;
    }
    /** Sets the duration of this video sample, in seconds. */ setDuration(newDuration) {
        if (!Number.isFinite(newDuration) || newDuration < 0) {
            throw new TypeError('newDuration must be a non-negative number.');
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        this.duration = newDuration;
    }
    constructor(data, init){
        /** @internal */ this._closed = false;
        if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
            if (!init || typeof init !== 'object') {
                throw new TypeError('init must be an object.');
            }
            if (!('format' in init) || typeof init.format !== 'string') {
                throw new TypeError('init.format must be a string.');
            }
            if (!Number.isInteger(init.codedWidth) || init.codedWidth <= 0) {
                throw new TypeError('init.codedWidth must be a positive integer.');
            }
            if (!Number.isInteger(init.codedHeight) || init.codedHeight <= 0) {
                throw new TypeError('init.codedHeight must be a positive integer.');
            }
            if (init.rotation !== undefined && ![
                0,
                90,
                180,
                270
            ].includes(init.rotation)) {
                throw new TypeError('init.rotation, when provided, must be 0, 90, 180, or 270.');
            }
            if (!Number.isFinite(init.timestamp)) {
                throw new TypeError('init.timestamp must be a number.');
            }
            if (init.duration !== undefined && (!Number.isFinite(init.duration) || init.duration < 0)) {
                throw new TypeError('init.duration, when provided, must be a non-negative number.');
            }
            this._data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(data).slice(); // Copy it
            this.format = init.format;
            this.codedWidth = init.codedWidth;
            this.codedHeight = init.codedHeight;
            var _init_rotation;
            this.rotation = (_init_rotation = init.rotation) !== null && _init_rotation !== void 0 ? _init_rotation : 0;
            this.timestamp = init.timestamp;
            var _init_duration;
            this.duration = (_init_duration = init.duration) !== null && _init_duration !== void 0 ? _init_duration : 0;
            this.colorSpace = new VideoColorSpace(init.colorSpace);
        } else if (typeof VideoFrame !== 'undefined' && data instanceof VideoFrame) {
            if ((init === null || init === void 0 ? void 0 : init.rotation) !== undefined && ![
                0,
                90,
                180,
                270
            ].includes(init.rotation)) {
                throw new TypeError('init.rotation, when provided, must be 0, 90, 180, or 270.');
            }
            if ((init === null || init === void 0 ? void 0 : init.timestamp) !== undefined && !Number.isFinite(init === null || init === void 0 ? void 0 : init.timestamp)) {
                throw new TypeError('init.timestamp, when provided, must be a number.');
            }
            if ((init === null || init === void 0 ? void 0 : init.duration) !== undefined && (!Number.isFinite(init.duration) || init.duration < 0)) {
                throw new TypeError('init.duration, when provided, must be a non-negative number.');
            }
            this._data = data;
            this.format = data.format;
            this.codedWidth = data.codedWidth;
            this.codedHeight = data.codedHeight;
            var _init_rotation1;
            this.rotation = (_init_rotation1 = init === null || init === void 0 ? void 0 : init.rotation) !== null && _init_rotation1 !== void 0 ? _init_rotation1 : 0;
            var _init_timestamp;
            this.timestamp = (_init_timestamp = init === null || init === void 0 ? void 0 : init.timestamp) !== null && _init_timestamp !== void 0 ? _init_timestamp : data.timestamp / 1e6;
            var _data_duration, _init_duration1;
            this.duration = (_init_duration1 = init === null || init === void 0 ? void 0 : init.duration) !== null && _init_duration1 !== void 0 ? _init_duration1 : ((_data_duration = data.duration) !== null && _data_duration !== void 0 ? _data_duration : 0) / 1e6;
            this.colorSpace = data.colorSpace;
        } else if (typeof HTMLImageElement !== 'undefined' && data instanceof HTMLImageElement || typeof SVGImageElement !== 'undefined' && data instanceof SVGImageElement || typeof ImageBitmap !== 'undefined' && data instanceof ImageBitmap || typeof HTMLVideoElement !== 'undefined' && data instanceof HTMLVideoElement || typeof HTMLCanvasElement !== 'undefined' && data instanceof HTMLCanvasElement || typeof OffscreenCanvas !== 'undefined' && data instanceof OffscreenCanvas) {
            if (!init || typeof init !== 'object') {
                throw new TypeError('init must be an object.');
            }
            if (init.rotation !== undefined && ![
                0,
                90,
                180,
                270
            ].includes(init.rotation)) {
                throw new TypeError('init.rotation, when provided, must be 0, 90, 180, or 270.');
            }
            if (!Number.isFinite(init.timestamp)) {
                throw new TypeError('init.timestamp must be a number.');
            }
            if (init.duration !== undefined && (!Number.isFinite(init.duration) || init.duration < 0)) {
                throw new TypeError('init.duration, when provided, must be a non-negative number.');
            }
            if (typeof VideoFrame !== 'undefined') {
                var _init_duration2;
                return new VideoSample(new VideoFrame(data, {
                    timestamp: Math.trunc(init.timestamp * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECOND_TO_MICROSECOND_FACTOR"]),
                    duration: Math.trunc(((_init_duration2 = init.duration) !== null && _init_duration2 !== void 0 ? _init_duration2 : 0) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECOND_TO_MICROSECOND_FACTOR"])
                }), init);
            }
            let width = 0;
            let height = 0;
            // Determine the dimensions of the thing
            if ('naturalWidth' in data) {
                width = data.naturalWidth;
                height = data.naturalHeight;
            } else if ('videoWidth' in data) {
                width = data.videoWidth;
                height = data.videoHeight;
            } else if ('width' in data) {
                width = Number(data.width);
                height = Number(data.height);
            }
            if (!width || !height) {
                throw new TypeError('Could not determine dimensions.');
            }
            const canvas = new OffscreenCanvas(width, height);
            const context = canvas.getContext('2d', {
                alpha: false,
                willReadFrequently: true
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(context);
            // Draw it to a canvas
            context.drawImage(data, 0, 0);
            this._data = canvas;
            this.format = 'RGBX';
            this.codedWidth = width;
            this.codedHeight = height;
            var _init_rotation2;
            this.rotation = (_init_rotation2 = init.rotation) !== null && _init_rotation2 !== void 0 ? _init_rotation2 : 0;
            this.timestamp = init.timestamp;
            var _init_duration3;
            this.duration = (_init_duration3 = init.duration) !== null && _init_duration3 !== void 0 ? _init_duration3 : 0;
            this.colorSpace = new VideoColorSpace({
                matrix: 'rgb',
                primaries: 'bt709',
                transfer: 'iec61966-2-1',
                fullRange: true
            });
        } else {
            throw new TypeError('Invalid data type: Must be a BufferSource or CanvasImageSource.');
        }
    }
}
const isVideoFrame = (x)=>{
    return typeof VideoFrame !== 'undefined' && x instanceof VideoFrame;
};
const AUDIO_SAMPLE_FORMATS = new Set([
    'f32',
    'f32-planar',
    's16',
    's16-planar',
    's32',
    's32-planar',
    'u8',
    'u8-planar'
]);
class AudioSample {
    /** The presentation timestamp of the sample in microseconds. */ get microsecondTimestamp() {
        return Math.trunc(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECOND_TO_MICROSECOND_FACTOR"] * this.timestamp);
    }
    /** The duration of the sample in microseconds. */ get microsecondDuration() {
        return Math.trunc(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECOND_TO_MICROSECOND_FACTOR"] * this.duration);
    }
    /** Returns the number of bytes required to hold the audio sample's data as specified by the given options. */ allocationSize(options) {
        if (!options || typeof options !== 'object') {
            throw new TypeError('options must be an object.');
        }
        if (!Number.isInteger(options.planeIndex) || options.planeIndex < 0) {
            throw new TypeError('planeIndex must be a non-negative integer.');
        }
        if (options.format !== undefined && !AUDIO_SAMPLE_FORMATS.has(options.format)) {
            throw new TypeError('Invalid format.');
        }
        if (options.frameOffset !== undefined && (!Number.isInteger(options.frameOffset) || options.frameOffset < 0)) {
            throw new TypeError('frameOffset must be a non-negative integer.');
        }
        if (options.frameCount !== undefined && (!Number.isInteger(options.frameCount) || options.frameCount < 0)) {
            throw new TypeError('frameCount must be a non-negative integer.');
        }
        if (this._closed) {
            throw new Error('AudioSample is closed.');
        }
        var _options_format;
        const destFormat = (_options_format = options.format) !== null && _options_format !== void 0 ? _options_format : this.format;
        var _options_frameOffset;
        const frameOffset = (_options_frameOffset = options.frameOffset) !== null && _options_frameOffset !== void 0 ? _options_frameOffset : 0;
        if (frameOffset >= this.numberOfFrames) {
            throw new RangeError('frameOffset out of range');
        }
        const copyFrameCount = options.frameCount !== undefined ? options.frameCount : this.numberOfFrames - frameOffset;
        if (copyFrameCount > this.numberOfFrames - frameOffset) {
            throw new RangeError('frameCount out of range');
        }
        const bytesPerSample = getBytesPerSample(destFormat);
        const isPlanar = formatIsPlanar(destFormat);
        if (isPlanar && options.planeIndex >= this.numberOfChannels) {
            throw new RangeError('planeIndex out of range');
        }
        if (!isPlanar && options.planeIndex !== 0) {
            throw new RangeError('planeIndex out of range');
        }
        const elementCount = isPlanar ? copyFrameCount : copyFrameCount * this.numberOfChannels;
        return elementCount * bytesPerSample;
    }
    /** Copies the audio sample's data to an ArrayBuffer or ArrayBufferView as specified by the given options. */ copyTo(destination, options) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAllowSharedBufferSource"])(destination)) {
            throw new TypeError('destination must be an ArrayBuffer or an ArrayBuffer view.');
        }
        if (!options || typeof options !== 'object') {
            throw new TypeError('options must be an object.');
        }
        if (!Number.isInteger(options.planeIndex) || options.planeIndex < 0) {
            throw new TypeError('planeIndex must be a non-negative integer.');
        }
        if (options.format !== undefined && !AUDIO_SAMPLE_FORMATS.has(options.format)) {
            throw new TypeError('Invalid format.');
        }
        if (options.frameOffset !== undefined && (!Number.isInteger(options.frameOffset) || options.frameOffset < 0)) {
            throw new TypeError('frameOffset must be a non-negative integer.');
        }
        if (options.frameCount !== undefined && (!Number.isInteger(options.frameCount) || options.frameCount < 0)) {
            throw new TypeError('frameCount must be a non-negative integer.');
        }
        if (this._closed) {
            throw new Error('AudioSample is closed.');
        }
        const { planeIndex, format, frameCount: optFrameCount, frameOffset: optFrameOffset } = options;
        const destFormat = format !== null && format !== void 0 ? format : this.format;
        if (!destFormat) throw new Error('Destination format not determined');
        const numFrames = this.numberOfFrames;
        const numChannels = this.numberOfChannels;
        const frameOffset = optFrameOffset !== null && optFrameOffset !== void 0 ? optFrameOffset : 0;
        if (frameOffset >= numFrames) {
            throw new RangeError('frameOffset out of range');
        }
        const copyFrameCount = optFrameCount !== undefined ? optFrameCount : numFrames - frameOffset;
        if (copyFrameCount > numFrames - frameOffset) {
            throw new RangeError('frameCount out of range');
        }
        const destBytesPerSample = getBytesPerSample(destFormat);
        const destIsPlanar = formatIsPlanar(destFormat);
        if (destIsPlanar && planeIndex >= numChannels) {
            throw new RangeError('planeIndex out of range');
        }
        if (!destIsPlanar && planeIndex !== 0) {
            throw new RangeError('planeIndex out of range');
        }
        const destElementCount = destIsPlanar ? copyFrameCount : copyFrameCount * numChannels;
        const requiredSize = destElementCount * destBytesPerSample;
        if (destination.byteLength < requiredSize) {
            throw new RangeError('Destination buffer is too small');
        }
        const destView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDataView"])(destination);
        const writeFn = getWriteFunction(destFormat);
        if (isAudioData(this._data)) {
            if (destIsPlanar) {
                if (destFormat === 'f32-planar') {
                    // Simple, since the browser must support f32-planar, we can just delegate here
                    this._data.copyTo(destination, {
                        planeIndex,
                        frameOffset,
                        frameCount: copyFrameCount,
                        format: 'f32-planar'
                    });
                } else {
                    // Allocate temporary buffer for f32-planar data
                    const tempBuffer = new ArrayBuffer(copyFrameCount * 4);
                    const tempArray = new Float32Array(tempBuffer);
                    this._data.copyTo(tempArray, {
                        planeIndex,
                        frameOffset,
                        frameCount: copyFrameCount,
                        format: 'f32-planar'
                    });
                    // Convert each f32 sample to destination format
                    const tempView = new DataView(tempBuffer);
                    for(let i = 0; i < copyFrameCount; i++){
                        const destOffset = i * destBytesPerSample;
                        const sample = tempView.getFloat32(i * 4, true);
                        writeFn(destView, destOffset, sample);
                    }
                }
            } else {
                // Destination is interleaved.
                // Allocate a temporary Float32Array to hold one channel's worth of data.
                const numCh = numChannels;
                const temp = new Float32Array(copyFrameCount);
                for(let ch = 0; ch < numCh; ch++){
                    this._data.copyTo(temp, {
                        planeIndex: ch,
                        frameOffset,
                        frameCount: copyFrameCount,
                        format: 'f32-planar'
                    });
                    for(let i = 0; i < copyFrameCount; i++){
                        const destIndex = i * numCh + ch;
                        const destOffset = destIndex * destBytesPerSample;
                        writeFn(destView, destOffset, temp[i]);
                    }
                }
            }
        } else {
            // Branch for Uint8Array data (non-AudioData)
            const uint8Data = this._data;
            const srcView = new DataView(uint8Data.buffer, uint8Data.byteOffset, uint8Data.byteLength);
            const srcFormat = this.format;
            const readFn = getReadFunction(srcFormat);
            const srcBytesPerSample = getBytesPerSample(srcFormat);
            const srcIsPlanar = formatIsPlanar(srcFormat);
            for(let i = 0; i < copyFrameCount; i++){
                if (destIsPlanar) {
                    const destOffset = i * destBytesPerSample;
                    let srcOffset;
                    if (srcIsPlanar) {
                        srcOffset = (planeIndex * numFrames + (i + frameOffset)) * srcBytesPerSample;
                    } else {
                        srcOffset = ((i + frameOffset) * numChannels + planeIndex) * srcBytesPerSample;
                    }
                    const normalized = readFn(srcView, srcOffset);
                    writeFn(destView, destOffset, normalized);
                } else {
                    for(let ch = 0; ch < numChannels; ch++){
                        const destIndex = i * numChannels + ch;
                        const destOffset = destIndex * destBytesPerSample;
                        let srcOffset;
                        if (srcIsPlanar) {
                            srcOffset = (ch * numFrames + (i + frameOffset)) * srcBytesPerSample;
                        } else {
                            srcOffset = ((i + frameOffset) * numChannels + ch) * srcBytesPerSample;
                        }
                        const normalized = readFn(srcView, srcOffset);
                        writeFn(destView, destOffset, normalized);
                    }
                }
            }
        }
    }
    /** Clones this audio sample. */ clone() {
        if (this._closed) {
            throw new Error('AudioSample is closed.');
        }
        if (isAudioData(this._data)) {
            const sample = new AudioSample(this._data.clone());
            sample.setTimestamp(this.timestamp); // Make sure the timestamp is precise (beyond microsecond accuracy)
            return sample;
        } else {
            return new AudioSample({
                format: this.format,
                sampleRate: this.sampleRate,
                numberOfFrames: this.numberOfFrames,
                numberOfChannels: this.numberOfChannels,
                timestamp: this.timestamp,
                data: this._data
            });
        }
    }
    /**
     * Closes this audio sample, releasing held resources. Audio samples should be closed as soon as they are not
     * needed anymore.
     */ close() {
        if (this._closed) {
            return;
        }
        if (isAudioData(this._data)) {
            this._data.close();
        } else {
            this._data = new Uint8Array(0);
        }
        this._closed = true;
    }
    /**
     * Converts this audio sample to an AudioData for use with the WebCodecs API. The AudioData returned by this
     * method *must* be closed separately from this audio sample.
     */ toAudioData() {
        if (this._closed) {
            throw new Error('AudioSample is closed.');
        }
        if (isAudioData(this._data)) {
            if (this._data.timestamp === this.microsecondTimestamp) {
                // Timestamp matches, let's just return the data (but cloned)
                return this._data.clone();
            } else {
                // It's impossible to simply change an AudioData's timestamp, so we'll need to create a new one
                if (formatIsPlanar(this.format)) {
                    const size = this.allocationSize({
                        planeIndex: 0,
                        format: this.format
                    });
                    const data = new ArrayBuffer(size * this.numberOfChannels);
                    // We gotta read out each plane individually
                    for(let i = 0; i < this.numberOfChannels; i++){
                        this.copyTo(new Uint8Array(data, i * size, size), {
                            planeIndex: i,
                            format: this.format
                        });
                    }
                    return new AudioData({
                        format: this.format,
                        sampleRate: this.sampleRate,
                        numberOfFrames: this.numberOfFrames,
                        numberOfChannels: this.numberOfChannels,
                        timestamp: this.microsecondTimestamp,
                        data
                    });
                } else {
                    const data = new ArrayBuffer(this.allocationSize({
                        planeIndex: 0,
                        format: this.format
                    }));
                    this.copyTo(data, {
                        planeIndex: 0,
                        format: this.format
                    });
                    return new AudioData({
                        format: this.format,
                        sampleRate: this.sampleRate,
                        numberOfFrames: this.numberOfFrames,
                        numberOfChannels: this.numberOfChannels,
                        timestamp: this.microsecondTimestamp,
                        data
                    });
                }
            }
        } else {
            return new AudioData({
                format: this.format,
                sampleRate: this.sampleRate,
                numberOfFrames: this.numberOfFrames,
                numberOfChannels: this.numberOfChannels,
                timestamp: this.microsecondTimestamp,
                data: this._data
            });
        }
    }
    /** Convert this audio sample to an AudioBuffer for use with the Web Audio API. */ toAudioBuffer() {
        if (this._closed) {
            throw new Error('AudioSample is closed.');
        }
        const audioBuffer = new AudioBuffer({
            numberOfChannels: this.numberOfChannels,
            length: this.numberOfFrames,
            sampleRate: this.sampleRate
        });
        const dataBytes = new Float32Array(this.allocationSize({
            planeIndex: 0,
            format: 'f32-planar'
        }) / 4);
        for(let i = 0; i < this.numberOfChannels; i++){
            this.copyTo(dataBytes, {
                planeIndex: i,
                format: 'f32-planar'
            });
            audioBuffer.copyToChannel(dataBytes, i);
        }
        return audioBuffer;
    }
    /** Sets the presentation timestamp of this audio sample, in seconds. */ setTimestamp(newTimestamp) {
        if (!Number.isFinite(newTimestamp)) {
            throw new TypeError('newTimestamp must be a number.');
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        this.timestamp = newTimestamp;
    }
    /** @internal */ static *_fromAudioBuffer(audioBuffer, timestamp) {
        if (!(audioBuffer instanceof AudioBuffer)) {
            throw new TypeError('audioBuffer must be an AudioBuffer.');
        }
        const MAX_FLOAT_COUNT = 48000 * 5; // 5 seconds of mono 48 kHz audio per sample
        const numberOfChannels = audioBuffer.numberOfChannels;
        const sampleRate = audioBuffer.sampleRate;
        const totalFrames = audioBuffer.length;
        const maxFramesPerChunk = Math.floor(MAX_FLOAT_COUNT / numberOfChannels);
        let currentRelativeFrame = 0;
        let remainingFrames = totalFrames;
        // Create AudioSamples in a chunked fashion so we don't create huge Float32Arrays
        while(remainingFrames > 0){
            const framesToCopy = Math.min(maxFramesPerChunk, remainingFrames);
            const chunkData = new Float32Array(numberOfChannels * framesToCopy);
            for(let channel = 0; channel < numberOfChannels; channel++){
                audioBuffer.copyFromChannel(chunkData.subarray(channel * framesToCopy, (channel + 1) * framesToCopy), channel, currentRelativeFrame);
            }
            yield new AudioSample({
                format: 'f32-planar',
                sampleRate,
                numberOfFrames: framesToCopy,
                numberOfChannels,
                timestamp: timestamp + currentRelativeFrame / sampleRate,
                data: chunkData
            });
            currentRelativeFrame += framesToCopy;
            remainingFrames -= framesToCopy;
        }
    }
    /**
     * Creates AudioSamples from an AudioBuffer, starting at the given timestamp in seconds. Typically creates exactly
     * one sample, but may create multiple if the AudioBuffer is exceedingly large.
     */ static fromAudioBuffer(audioBuffer, timestamp) {
        if (!(audioBuffer instanceof AudioBuffer)) {
            throw new TypeError('audioBuffer must be an AudioBuffer.');
        }
        const MAX_FLOAT_COUNT = 48000 * 5; // 5 seconds of mono 48 kHz audio per sample
        const numberOfChannels = audioBuffer.numberOfChannels;
        const sampleRate = audioBuffer.sampleRate;
        const totalFrames = audioBuffer.length;
        const maxFramesPerChunk = Math.floor(MAX_FLOAT_COUNT / numberOfChannels);
        let currentRelativeFrame = 0;
        let remainingFrames = totalFrames;
        const result = [];
        // Create AudioSamples in a chunked fashion so we don't create huge Float32Arrays
        while(remainingFrames > 0){
            const framesToCopy = Math.min(maxFramesPerChunk, remainingFrames);
            const chunkData = new Float32Array(numberOfChannels * framesToCopy);
            for(let channel = 0; channel < numberOfChannels; channel++){
                audioBuffer.copyFromChannel(chunkData.subarray(channel * framesToCopy, (channel + 1) * framesToCopy), channel, currentRelativeFrame);
            }
            const audioSample = new AudioSample({
                format: 'f32-planar',
                sampleRate,
                numberOfFrames: framesToCopy,
                numberOfChannels,
                timestamp: timestamp + currentRelativeFrame / sampleRate,
                data: chunkData
            });
            result.push(audioSample);
            currentRelativeFrame += framesToCopy;
            remainingFrames -= framesToCopy;
        }
        return result;
    }
    constructor(init){
        /** @internal */ this._closed = false;
        if (isAudioData(init)) {
            if (init.format === null) {
                throw new TypeError('AudioData with null format is not supported.');
            }
            this._data = init;
            this.format = init.format;
            this.sampleRate = init.sampleRate;
            this.numberOfFrames = init.numberOfFrames;
            this.numberOfChannels = init.numberOfChannels;
            this.timestamp = init.timestamp / 1e6;
            this.duration = init.numberOfFrames / init.sampleRate;
        } else {
            if (!init || typeof init !== 'object') {
                throw new TypeError('Invalid AudioDataInit: must be an object.');
            }
            if (!AUDIO_SAMPLE_FORMATS.has(init.format)) {
                throw new TypeError('Invalid AudioDataInit: invalid format.');
            }
            if (!Number.isFinite(init.sampleRate) || init.sampleRate <= 0) {
                throw new TypeError('Invalid AudioDataInit: sampleRate must be > 0.');
            }
            if (!Number.isInteger(init.numberOfChannels) || init.numberOfChannels === 0) {
                throw new TypeError('Invalid AudioDataInit: numberOfChannels must be an integer > 0.');
            }
            if (!Number.isFinite(init === null || init === void 0 ? void 0 : init.timestamp)) {
                throw new TypeError('init.timestamp must be a number.');
            }
            const numberOfFrames = init.data.byteLength / (getBytesPerSample(init.format) * init.numberOfChannels);
            if (!Number.isInteger(numberOfFrames)) {
                throw new TypeError('Invalid AudioDataInit: data size is not a multiple of frame size.');
            }
            this.format = init.format;
            this.sampleRate = init.sampleRate;
            this.numberOfFrames = numberOfFrames;
            this.numberOfChannels = init.numberOfChannels;
            this.timestamp = init.timestamp;
            this.duration = numberOfFrames / init.sampleRate;
            let dataBuffer;
            if (init.data instanceof ArrayBuffer) {
                dataBuffer = new Uint8Array(init.data);
            } else if (ArrayBuffer.isView(init.data)) {
                dataBuffer = new Uint8Array(init.data.buffer, init.data.byteOffset, init.data.byteLength);
            } else {
                throw new TypeError('Invalid AudioDataInit: data is not a BufferSource.');
            }
            const expectedSize = this.numberOfFrames * this.numberOfChannels * getBytesPerSample(this.format);
            if (dataBuffer.byteLength < expectedSize) {
                throw new TypeError('Invalid AudioDataInit: insufficient data size.');
            }
            this._data = dataBuffer;
        }
    }
}
const getBytesPerSample = (format)=>{
    switch(format){
        case 'u8':
        case 'u8-planar':
            return 1;
        case 's16':
        case 's16-planar':
            return 2;
        case 's32':
        case 's32-planar':
            return 4;
        case 'f32':
        case 'f32-planar':
            return 4;
        default:
            throw new Error('Unknown AudioSampleFormat');
    }
};
const formatIsPlanar = (format)=>{
    switch(format){
        case 'u8-planar':
        case 's16-planar':
        case 's32-planar':
        case 'f32-planar':
            return true;
        default:
            return false;
    }
};
const getReadFunction = (format)=>{
    switch(format){
        case 'u8':
        case 'u8-planar':
            return (view, offset)=>(view.getUint8(offset) - 128) / 128;
        case 's16':
        case 's16-planar':
            return (view, offset)=>view.getInt16(offset, true) / 32768;
        case 's32':
        case 's32-planar':
            return (view, offset)=>view.getInt32(offset, true) / 2147483648;
        case 'f32':
        case 'f32-planar':
            return (view, offset)=>view.getFloat32(offset, true);
    }
};
const getWriteFunction = (format)=>{
    switch(format){
        case 'u8':
        case 'u8-planar':
            return (view, offset, value)=>view.setUint8(offset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((value + 1) * 127.5, 0, 255));
        case 's16':
        case 's16-planar':
            return (view, offset, value)=>view.setInt16(offset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(Math.round(value * 32767), -32768, 32767), true);
        case 's32':
        case 's32-planar':
            return (view, offset, value)=>view.setInt32(offset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(Math.round(value * 2147483647), -2147483648, 2147483647), true);
        case 'f32':
        case 'f32-planar':
            return (view, offset, value)=>view.setFloat32(offset, value, true);
    }
};
const isAudioData = (x)=>{
    return typeof AudioData !== 'undefined' && x instanceof AudioData;
};
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/media-sink.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "AudioBufferSink": ()=>AudioBufferSink,
    "AudioSampleSink": ()=>AudioSampleSink,
    "BaseMediaSampleSink": ()=>BaseMediaSampleSink,
    "CanvasSink": ()=>CanvasSink,
    "EncodedPacketSink": ()=>EncodedPacketSink,
    "VideoSampleSink": ()=>VideoSampleSink
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$custom$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/custom-coder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/input-track.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/packet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$pcm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/pcm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/sample.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const validatePacketRetrievalOptions = (options)=>{
    if (!options || typeof options !== 'object') {
        throw new TypeError('options must be an object.');
    }
    if (options.metadataOnly !== undefined && typeof options.metadataOnly !== 'boolean') {
        throw new TypeError('options.metadataOnly, when defined, must be a boolean.');
    }
    if (options.verifyKeyPackets !== undefined && typeof options.verifyKeyPackets !== 'boolean') {
        throw new TypeError('options.verifyKeyPackets, when defined, must be a boolean.');
    }
    if (options.verifyKeyPackets && options.metadataOnly) {
        throw new TypeError('options.verifyKeyPackets and options.metadataOnly cannot be enabled together.');
    }
};
const validateTimestamp = (timestamp)=>{
    if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
        throw new TypeError('timestamp must be a number.'); // It can be non-finite, that's fine
    }
};
const maybeFixPacketType = (track, promise, options)=>{
    if (options.verifyKeyPackets) {
        return promise.then(async (packet)=>{
            if (!packet || packet.type === 'delta') {
                return packet;
            }
            const determinedType = await track.determinePacketType(packet);
            if (determinedType) {
                // @ts-expect-error Technically readonly
                packet.type = determinedType;
            }
            return packet;
        });
    } else {
        return promise;
    }
};
class EncodedPacketSink {
    /**
     * Retrieves the track's first packet (in decode order), or null if it has no packets. The first packet is very
     * likely to be a key packet.
     */ getFirstPacket() {
        let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        validatePacketRetrievalOptions(options);
        return maybeFixPacketType(this._track, this._track._backing.getFirstPacket(options), options);
    }
    /**
     * Retrieves the packet corresponding to the given timestamp, in seconds. More specifically, returns the last packet
     * (in presentation order) with a start timestamp less than or equal to the given timestamp. This method can be
     * used to retrieve a track's last packet using `getPacket(Infinity)`. The method returns null if the timestamp
     * is before the first packet in the track.
     *
     * @param timestamp - The timestamp used for retrieval, in seconds.
     */ getPacket(timestamp) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        validateTimestamp(timestamp);
        validatePacketRetrievalOptions(options);
        return maybeFixPacketType(this._track, this._track._backing.getPacket(timestamp, options), options);
    }
    /**
     * Retrieves the packet following the given packet (in decode order), or null if the given packet is the
     * last packet.
     */ getNextPacket(packet) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(packet instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"])) {
            throw new TypeError('packet must be an EncodedPacket.');
        }
        validatePacketRetrievalOptions(options);
        return maybeFixPacketType(this._track, this._track._backing.getNextPacket(packet, options), options);
    }
    /**
     * Retrieves the key packet corresponding to the given timestamp, in seconds. More specifically, returns the last
     * key packet (in presentation order) with a start timestamp less than or equal to the given timestamp. A key packet
     * is a packet that doesn't require previous packets to be decoded. This method can be used to retrieve a track's
     * last key packet using `getKeyPacket(Infinity)`. The method returns null if the timestamp is before the first
     * key packet in the track.
     *
     * To ensure that the returned packet is guaranteed to be a real key frame, enable `options.verifyKeyPackets`.
     *
     * @param timestamp - The timestamp used for retrieval, in seconds.
     */ async getKeyPacket(timestamp) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        validateTimestamp(timestamp);
        validatePacketRetrievalOptions(options);
        if (!options.verifyKeyPackets) {
            return this._track._backing.getKeyPacket(timestamp, options);
        }
        const packet = await this._track._backing.getKeyPacket(timestamp, options);
        if (!packet || packet.type === 'delta') {
            return packet;
        }
        const determinedType = await this._track.determinePacketType(packet);
        if (determinedType === 'delta') {
            // Try returning the previous key packet (in hopes that it's actually a key packet)
            return this.getKeyPacket(packet.timestamp - 1 / this._track.timeResolution, options);
        }
        return packet;
    }
    /**
     * Retrieves the key packet following the given packet (in decode order), or null if the given packet is the last
     * key packet.
     *
     * To ensure that the returned packet is guaranteed to be a real key frame, enable `options.verifyKeyPackets`.
     */ async getNextKeyPacket(packet) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(packet instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"])) {
            throw new TypeError('packet must be an EncodedPacket.');
        }
        validatePacketRetrievalOptions(options);
        if (!options.verifyKeyPackets) {
            return this._track._backing.getNextKeyPacket(packet, options);
        }
        const nextPacket = await this._track._backing.getNextKeyPacket(packet, options);
        if (!nextPacket || nextPacket.type === 'delta') {
            return nextPacket;
        }
        const determinedType = await this._track.determinePacketType(nextPacket);
        if (determinedType === 'delta') {
            // Try returning the next key packet (in hopes that it's actually a key packet)
            return this.getNextKeyPacket(nextPacket, options);
        }
        return nextPacket;
    }
    /**
     * Creates an async iterator that yields the packets in this track in decode order. To enable fast iteration, this
     * method will intelligently preload packets based on the speed of the consumer.
     *
     * @param startPacket - (optional) The packet from which iteration should begin. This packet will also be yielded.
     * @param endTimestamp - (optional) The timestamp at which iteration should end. This packet will _not_ be yielded.
     */ packets(startPacket, endPacket) {
        let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (startPacket !== undefined && !(startPacket instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"])) {
            throw new TypeError('startPacket must be an EncodedPacket.');
        }
        if (startPacket !== undefined && startPacket.isMetadataOnly && !(options === null || options === void 0 ? void 0 : options.metadataOnly)) {
            throw new TypeError('startPacket can only be metadata-only if options.metadataOnly is enabled.');
        }
        if (endPacket !== undefined && !(endPacket instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"])) {
            throw new TypeError('endPacket must be an EncodedPacket.');
        }
        validatePacketRetrievalOptions(options);
        const packetQueue = [];
        let { promise: queueNotEmpty, resolve: onQueueNotEmpty } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promiseWithResolvers"])();
        let { promise: queueDequeue, resolve: onQueueDequeue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promiseWithResolvers"])();
        let ended = false;
        let terminated = false;
        // This stores errors that are "out of band" in the sense that they didn't occur in the normal flow of this
        // method but instead in a different context. This error should not go unnoticed and must be bubbled up to
        // the consumer.
        let outOfBandError = null;
        const timestamps = [];
        // The queue should always be big enough to hold 1 second worth of packets
        const maxQueueSize = ()=>Math.max(2, timestamps.length);
        // The following is the "pump" process that keeps pumping packets into the queue
        (async ()=>{
            let packet = startPacket !== null && startPacket !== void 0 ? startPacket : await this.getFirstPacket(options);
            while(packet && !terminated){
                if (endPacket && packet.sequenceNumber >= (endPacket === null || endPacket === void 0 ? void 0 : endPacket.sequenceNumber)) {
                    break;
                }
                if (packetQueue.length > maxQueueSize()) {
                    ({ promise: queueDequeue, resolve: onQueueDequeue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promiseWithResolvers"])());
                    await queueDequeue;
                    continue;
                }
                packetQueue.push(packet);
                onQueueNotEmpty();
                ({ promise: queueNotEmpty, resolve: onQueueNotEmpty } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promiseWithResolvers"])());
                packet = await this.getNextPacket(packet, options);
            }
            ended = true;
            onQueueNotEmpty();
        })().catch((error)=>{
            if (!outOfBandError) {
                outOfBandError = error;
                onQueueNotEmpty();
            }
        });
        return {
            async next () {
                while(true){
                    if (terminated) {
                        return {
                            value: undefined,
                            done: true
                        };
                    } else if (outOfBandError) {
                        throw outOfBandError;
                    } else if (packetQueue.length > 0) {
                        const value = packetQueue.shift();
                        const now = performance.now();
                        timestamps.push(now);
                        while(timestamps.length > 0 && now - timestamps[0] >= 1000){
                            timestamps.shift();
                        }
                        onQueueDequeue();
                        return {
                            value,
                            done: false
                        };
                    } else if (ended) {
                        return {
                            value: undefined,
                            done: true
                        };
                    } else {
                        await queueNotEmpty;
                    }
                }
            },
            async return () {
                terminated = true;
                onQueueDequeue();
                onQueueNotEmpty();
                return {
                    value: undefined,
                    done: true
                };
            },
            async throw (error) {
                throw error;
            },
            [Symbol.asyncIterator] () {
                return this;
            }
        };
    }
    constructor(track){
        if (!(track instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputTrack"])) {
            throw new TypeError('track must be an InputTrack.');
        }
        this._track = track;
    }
}
class DecoderWrapper {
    constructor(onSample, onError){
        this.onSample = onSample;
        this.onError = onError;
    }
}
class BaseMediaSampleSink {
    /** @internal */ mediaSamplesInRange() {
        let startTimestamp = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, endTimestamp = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
        validateTimestamp(startTimestamp);
        validateTimestamp(endTimestamp);
        const sampleQueue = [];
        let firstSampleQueued = false;
        let lastSample = null;
        let { promise: queueNotEmpty, resolve: onQueueNotEmpty } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promiseWithResolvers"])();
        let { promise: queueDequeue, resolve: onQueueDequeue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promiseWithResolvers"])();
        let decoderIsFlushed = false;
        let ended = false;
        let terminated = false;
        // This stores errors that are "out of band" in the sense that they didn't occur in the normal flow of this
        // method but instead in a different context. This error should not go unnoticed and must be bubbled up to
        // the consumer.
        let outOfBandError = null;
        // The following is the "pump" process that keeps pumping packets into the decoder
        (async ()=>{
            const decoderError = new Error();
            const decoder = await this._createDecoder((sample)=>{
                onQueueDequeue();
                if (sample.timestamp >= endTimestamp) {
                    ended = true;
                }
                if (ended) {
                    sample.close();
                    return;
                }
                if (lastSample) {
                    if (sample.timestamp > startTimestamp) {
                        // We don't know ahead of time what the first first is. This is because the first first is the
                        // last first whose timestamp is less than or equal to the start timestamp. Therefore we need to
                        // wait for the first first after the start timestamp, and then we'll know that the previous
                        // first was the first first.
                        sampleQueue.push(lastSample);
                        firstSampleQueued = true;
                    } else {
                        lastSample.close();
                    }
                }
                if (sample.timestamp >= startTimestamp) {
                    sampleQueue.push(sample);
                    firstSampleQueued = true;
                }
                lastSample = firstSampleQueued ? null : sample;
                if (sampleQueue.length > 0) {
                    onQueueNotEmpty();
                    ({ promise: queueNotEmpty, resolve: onQueueNotEmpty } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promiseWithResolvers"])());
                }
            }, (error)=>{
                if (!outOfBandError) {
                    error.stack = decoderError.stack; // Provide a more useful stack trace
                    outOfBandError = error;
                    onQueueNotEmpty();
                }
            });
            const packetSink = this._createPacketSink();
            var _ref;
            const keyPacket = (_ref = await packetSink.getKeyPacket(startTimestamp, {
                verifyKeyPackets: true
            })) !== null && _ref !== void 0 ? _ref : await packetSink.getFirstPacket();
            if (!keyPacket) {
                return;
            }
            let currentPacket = keyPacket;
            let endPacket = undefined;
            if (endTimestamp < Infinity) {
                // When an end timestamp is set, we cannot simply use that for the packet iterator due to out-of-order
                // frames (B-frames). Instead, we'll need to keep decoding packets until we get a frame that exceeds
                // this end time. However, we can still put a bound on it: Since key frames are by definition never
                // out of order, we can stop at the first key frame after the end timestamp.
                const packet = await packetSink.getPacket(endTimestamp);
                const keyPacket = !packet ? null : packet.type === 'key' && packet.timestamp === endTimestamp ? packet : await packetSink.getNextKeyPacket(packet, {
                    verifyKeyPackets: true
                });
                if (keyPacket) {
                    endPacket = keyPacket;
                }
            }
            const packets = packetSink.packets(keyPacket, endPacket);
            await packets.next(); // Skip the start packet as we already have it
            while(currentPacket && !ended){
                const maxQueueSize = computeMaxQueueSize(sampleQueue.length);
                if (sampleQueue.length + decoder.getDecodeQueueSize() > maxQueueSize) {
                    ({ promise: queueDequeue, resolve: onQueueDequeue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promiseWithResolvers"])());
                    await queueDequeue;
                    continue;
                }
                decoder.decode(currentPacket);
                const packetResult = await packets.next();
                if (packetResult.done) {
                    break;
                }
                currentPacket = packetResult.value;
            }
            await packets.return();
            if (!terminated) await decoder.flush();
            decoder.close();
            if (!firstSampleQueued && lastSample) {
                sampleQueue.push(lastSample);
            }
            decoderIsFlushed = true;
            onQueueNotEmpty(); // To unstuck the generator
        })().catch((error)=>{
            if (!outOfBandError) {
                outOfBandError = error;
                onQueueNotEmpty();
            }
        });
        return {
            async next () {
                while(true){
                    if (terminated) {
                        return {
                            value: undefined,
                            done: true
                        };
                    } else if (outOfBandError) {
                        throw outOfBandError;
                    } else if (sampleQueue.length > 0) {
                        const value = sampleQueue.shift();
                        onQueueDequeue();
                        return {
                            value,
                            done: false
                        };
                    } else if (!decoderIsFlushed) {
                        await queueNotEmpty;
                    } else {
                        return {
                            value: undefined,
                            done: true
                        };
                    }
                }
            },
            async return () {
                terminated = true;
                ended = true;
                onQueueDequeue();
                onQueueNotEmpty();
                lastSample === null || lastSample === void 0 ? void 0 : lastSample.close();
                for (const sample of sampleQueue){
                    sample.close();
                }
                return {
                    value: undefined,
                    done: true
                };
            },
            async throw (error) {
                throw error;
            },
            [Symbol.asyncIterator] () {
                return this;
            }
        };
    }
    /** @internal */ mediaSamplesAtTimestamps(timestamps) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAnyIterable"])(timestamps);
        const timestampIterator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAsyncIterator"])(timestamps);
        const timestampsOfInterest = [];
        const sampleQueue = [];
        let { promise: queueNotEmpty, resolve: onQueueNotEmpty } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promiseWithResolvers"])();
        let { promise: queueDequeue, resolve: onQueueDequeue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promiseWithResolvers"])();
        let decoderIsFlushed = false;
        let terminated = false;
        // This stores errors that are "out of band" in the sense that they didn't occur in the normal flow of this
        // method but instead in a different context. This error should not go unnoticed and must be bubbled up to
        // the consumer.
        let outOfBandError = null;
        const pushToQueue = (sample)=>{
            sampleQueue.push(sample);
            onQueueNotEmpty();
            ({ promise: queueNotEmpty, resolve: onQueueNotEmpty } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promiseWithResolvers"])());
        };
        // The following is the "pump" process that keeps pumping packets into the decoder
        (async ()=>{
            const decoderError = new Error();
            const decoder = await this._createDecoder((sample)=>{
                onQueueDequeue();
                if (terminated) {
                    sample.close();
                    return;
                }
                let sampleUses = 0;
                while(timestampsOfInterest.length > 0 && sample.timestamp - timestampsOfInterest[0] > -1e-10 // Give it a little epsilon
                ){
                    sampleUses++;
                    timestampsOfInterest.shift();
                }
                if (sampleUses > 0) {
                    for(let i = 0; i < sampleUses; i++){
                        // Clone the sample if we need to emit it multiple times
                        pushToQueue(i < sampleUses - 1 ? sample.clone() : sample);
                    }
                } else {
                    sample.close();
                }
            }, (error)=>{
                if (!outOfBandError) {
                    error.stack = decoderError.stack; // Provide a more useful stack trace
                    outOfBandError = error;
                    onQueueNotEmpty();
                }
            });
            const packetSink = this._createPacketSink();
            let lastPacket = null;
            let lastKeyPacket = null;
            // The end sequence number (inclusive) in the next batch of packets that will be decoded. The batch starts
            // at the last key frame and goes until this sequence number.
            let maxSequenceNumber = -1;
            const decodePackets = async ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(lastKeyPacket);
                // Start at the current key packet
                let currentPacket = lastKeyPacket;
                decoder.decode(currentPacket);
                while(currentPacket.sequenceNumber < maxSequenceNumber){
                    const maxQueueSize = computeMaxQueueSize(sampleQueue.length);
                    while(sampleQueue.length + decoder.getDecodeQueueSize() > maxQueueSize && !terminated){
                        ({ promise: queueDequeue, resolve: onQueueDequeue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promiseWithResolvers"])());
                        await queueDequeue;
                    }
                    if (terminated) {
                        break;
                    }
                    const nextPacket = await packetSink.getNextPacket(currentPacket);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(nextPacket);
                    currentPacket = nextPacket;
                    decoder.decode(nextPacket);
                }
                maxSequenceNumber = -1;
            };
            const flushDecoder = async ()=>{
                await decoder.flush();
                // We don't expect this list to have any elements in it anymore, but in case it does, let's emit
                // nulls for every remaining element, then clear it.
                for(let i = 0; i < timestampsOfInterest.length; i++){
                    pushToQueue(null);
                }
                timestampsOfInterest.length = 0;
            };
            for await (const timestamp of timestampIterator){
                validateTimestamp(timestamp);
                if (terminated) {
                    break;
                }
                const targetPacket = await packetSink.getPacket(timestamp);
                const keyPacket = targetPacket && await packetSink.getKeyPacket(timestamp, {
                    verifyKeyPackets: true
                });
                if (!keyPacket) {
                    if (maxSequenceNumber !== -1) {
                        await decodePackets();
                        await flushDecoder();
                    }
                    pushToQueue(null);
                    lastPacket = null;
                    continue;
                }
                // Check if the key packet has changed or if we're going back in time
                if (lastPacket && (keyPacket.sequenceNumber !== lastKeyPacket.sequenceNumber || targetPacket.timestamp < lastPacket.timestamp)) {
                    await decodePackets();
                    await flushDecoder(); // Always flush here, improves decoder compatibility
                }
                timestampsOfInterest.push(targetPacket.timestamp);
                maxSequenceNumber = Math.max(targetPacket.sequenceNumber, maxSequenceNumber);
                lastPacket = targetPacket;
                lastKeyPacket = keyPacket;
            }
            if (!terminated) {
                if (maxSequenceNumber !== -1) {
                    // We still need to decode packets
                    await decodePackets();
                }
                await flushDecoder();
            }
            decoder.close();
            decoderIsFlushed = true;
            onQueueNotEmpty(); // To unstuck the generator
        })().catch((error)=>{
            if (!outOfBandError) {
                outOfBandError = error;
                onQueueNotEmpty();
            }
        });
        return {
            async next () {
                while(true){
                    if (terminated) {
                        return {
                            value: undefined,
                            done: true
                        };
                    } else if (outOfBandError) {
                        throw outOfBandError;
                    } else if (sampleQueue.length > 0) {
                        const value = sampleQueue.shift();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(value !== undefined);
                        onQueueDequeue();
                        return {
                            value,
                            done: false
                        };
                    } else if (!decoderIsFlushed) {
                        await queueNotEmpty;
                    } else {
                        return {
                            value: undefined,
                            done: true
                        };
                    }
                }
            },
            async return () {
                terminated = true;
                onQueueDequeue();
                onQueueNotEmpty();
                for (const sample of sampleQueue){
                    sample === null || sample === void 0 ? void 0 : sample.close();
                }
                return {
                    value: undefined,
                    done: true
                };
            },
            async throw (error) {
                throw error;
            },
            [Symbol.asyncIterator] () {
                return this;
            }
        };
    }
}
const computeMaxQueueSize = (decodedSampleQueueSize)=>{
    // If we have decoded samples lying around, limit the total queue size to a small value (decoded samples can use up
    // a lot of memory). If not, we're fine with a much bigger queue of encoded packets waiting to be decoded. In fact,
    // some decoders only start flushing out decoded chunks when the packet queue is large enough.
    return decodedSampleQueueSize === 0 ? 40 : 8;
};
class VideoDecoderWrapper extends DecoderWrapper {
    finalizeAndEmitSample(sample) {
        // Round the timestamps to the time resolution
        sample.setTimestamp(Math.round(sample.timestamp * this.timeResolution) / this.timeResolution);
        sample.setDuration(Math.round(sample.duration * this.timeResolution) / this.timeResolution);
        sample.setRotation(this.rotation);
        this.onSample(sample);
    }
    getDecodeQueueSize() {
        if (this.customDecoder) {
            return this.customDecoderQueueSize;
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.decoder);
            return this.decoder.decodeQueueSize;
        }
    }
    decode(packet) {
        if (this.customDecoder) {
            this.customDecoderQueueSize++;
            void this.customDecoderCallSerializer.call(()=>this.customDecoder.decode(packet)).then(()=>this.customDecoderQueueSize--);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.decoder);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafari"])()) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertSorted"])(this.inputTimestamps, packet.timestamp, (x)=>x);
            }
            this.decoder.decode(packet.toEncodedVideoChunk());
        }
    }
    async flush() {
        if (this.customDecoder) {
            await this.customDecoderCallSerializer.call(()=>this.customDecoder.flush());
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.decoder);
            await this.decoder.flush();
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafari"])()) {
            for (const sample of this.sampleQueue){
                this.finalizeAndEmitSample(sample);
            }
            this.sampleQueue.length = 0;
        }
    }
    close() {
        if (this.customDecoder) {
            void this.customDecoderCallSerializer.call(()=>this.customDecoder.close());
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.decoder);
            this.decoder.close();
        }
        for (const sample of this.sampleQueue){
            sample.close();
        }
        this.sampleQueue.length = 0;
    }
    constructor(onSample, onError, codec, decoderConfig, rotation, timeResolution){
        super(onSample, onError);
        this.rotation = rotation;
        this.timeResolution = timeResolution;
        this.decoder = null;
        this.customDecoder = null;
        this.customDecoderCallSerializer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallSerializer"]();
        this.customDecoderQueueSize = 0;
        this.inputTimestamps = []; // Timestamps input into the decoder, sorted.
        this.sampleQueue = []; // Safari-specific thing, check usage.
        const MatchingCustomDecoder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$custom$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customVideoDecoders"].find((x)=>x.supports(codec, decoderConfig));
        if (MatchingCustomDecoder) {
            // @ts-expect-error "Can't create instance of abstract class 🤓"
            this.customDecoder = new MatchingCustomDecoder();
            // @ts-expect-error It's technically readonly
            this.customDecoder.codec = codec;
            // @ts-expect-error It's technically readonly
            this.customDecoder.config = decoderConfig;
            // @ts-expect-error It's technically readonly
            this.customDecoder.onSample = (sample)=>{
                if (!(sample instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoSample"])) {
                    throw new TypeError('The argument passed to onSample must be a VideoSample.');
                }
                this.finalizeAndEmitSample(sample);
            };
            void this.customDecoderCallSerializer.call(()=>this.customDecoder.init());
        } else {
            // Specific handler for the WebCodecs VideoDecoder to iron out browser differences
            const sampleHandler = (sample)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafari"])()) {
                    // For correct B-frame handling, we don't just hand over the frames directly but instead add them to
                    // a queue, because we want to ensure frames are emitted in presentation order. We flush the queue
                    // each time we receive a frame with a timestamp larger than the highest we've seen so far, as we
                    // can sure that is not a B-frame. Typically, WebCodecs automatically guarantees that frames are
                    // emitted in presentation order, but Safari doesn't always follow this rule.
                    if (this.sampleQueue.length > 0 && sample.timestamp >= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(this.sampleQueue).timestamp) {
                        for (const sample of this.sampleQueue){
                            this.finalizeAndEmitSample(sample);
                        }
                        this.sampleQueue.length = 0;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertSorted"])(this.sampleQueue, sample, (x)=>x.timestamp);
                } else {
                    // Assign it the next earliest timestamp from the input. We do this because browsers, by spec, are
                    // required to emit decoded frames in presentation order *while* retaining the timestamp of their
                    // originating EncodedVideoChunk. For files with B-frames but no out-of-order timestamps (like a
                    // missing ctts box, for example), this causes a mismatch. We therefore fix the timestamps and
                    // ensure they are sorted by doing this.
                    const timestamp = this.inputTimestamps.shift();
                    // There's no way we'd have more decoded frames than encoded packets we passed in. Actually, the
                    // correspondence should be 1:1.
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(timestamp !== undefined);
                    sample.setTimestamp(timestamp);
                    this.finalizeAndEmitSample(sample);
                }
            };
            this.decoder = new VideoDecoder({
                output: (frame)=>sampleHandler(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoSample"](frame)),
                error: onError
            });
            this.decoder.configure(decoderConfig);
        }
    }
}
class VideoSampleSink extends BaseMediaSampleSink {
    /** @internal */ async _createDecoder(onSample, onError) {
        if (!await this._videoTrack.canDecode()) {
            throw new Error('This video track cannot be decoded by this browser. Make sure to check decodability before using' + ' a track.');
        }
        const codec = this._videoTrack.codec;
        const rotation = this._videoTrack.rotation;
        const decoderConfig = await this._videoTrack.getDecoderConfig();
        const timeResolution = this._videoTrack.timeResolution;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(codec && decoderConfig);
        return new VideoDecoderWrapper(onSample, onError, codec, decoderConfig, rotation, timeResolution);
    }
    /** @internal */ _createPacketSink() {
        return new EncodedPacketSink(this._videoTrack);
    }
    /**
     * Retrieves the video sample (frame) corresponding to the given timestamp, in seconds. More specifically, returns
     * the last video sample (in presentation order) with a start timestamp less than or equal to the given timestamp.
     * Returns null if the timestamp is before the track's first timestamp.
     *
     * @param timestamp - The timestamp used for retrieval, in seconds.
     */ async getSample(timestamp) {
        validateTimestamp(timestamp);
        for await (const sample of this.mediaSamplesAtTimestamps([
            timestamp
        ])){
            return sample;
        }
        throw new Error('Internal error: Iterator returned nothing.');
    }
    /**
     * Creates an async iterator that yields the video samples (frames) of this track in presentation order. This method
     * will intelligently pre-decode a few frames ahead to enable fast iteration.
     *
     * @param startTimestamp - The timestamp in seconds at which to start yielding samples (inclusive).
     * @param endTimestamp - The timestamp in seconds at which to stop yielding samples (exclusive).
     */ samples() {
        let startTimestamp = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, endTimestamp = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
        return this.mediaSamplesInRange(startTimestamp, endTimestamp);
    }
    /**
     * Creates an async iterator that yields a video sample (frame) for each timestamp in the argument. This method
     * uses an optimized decoding pipeline if these timestamps are monotonically sorted, decoding each packet at most
     * once, and is therefore more efficient than manually getting the sample for every timestamp. The iterator may
     * yield null if no frame is available for a given timestamp.
     *
     * @param timestamps - An iterable or async iterable of timestamps in seconds.
     */ samplesAtTimestamps(timestamps) {
        return this.mediaSamplesAtTimestamps(timestamps);
    }
    constructor(videoTrack){
        if (!(videoTrack instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputVideoTrack"])) {
            throw new TypeError('videoTrack must be an InputVideoTrack.');
        }
        super();
        this._videoTrack = videoTrack;
    }
}
class CanvasSink {
    /** @internal */ _videoSampleToWrappedCanvas(sample) {
        let canvas = this._canvasPool[this._nextCanvasIndex];
        if (!canvas) {
            if (typeof document !== 'undefined') {
                // Prefer an HTMLCanvasElement
                canvas = document.createElement('canvas');
                canvas.width = this._width;
                canvas.height = this._height;
            } else {
                canvas = new OffscreenCanvas(this._width, this._height);
            }
            if (this._canvasPool.length > 0) {
                this._canvasPool[this._nextCanvasIndex] = canvas;
            }
        }
        if (this._canvasPool.length > 0) {
            this._nextCanvasIndex = (this._nextCanvasIndex + 1) % this._canvasPool.length;
        }
        const context = canvas.getContext('2d', {
            alpha: false
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(context);
        context.resetTransform();
        // These variables specify where the final sample will be drawn on the canvas
        let dx;
        let dy;
        let newWidth;
        let newHeight;
        if (this._fit === 'fill') {
            dx = 0;
            dy = 0;
            newWidth = this._width;
            newHeight = this._height;
        } else {
            const [sampleWidth, sampleHeight] = this._rotation % 180 === 0 ? [
                sample.codedWidth,
                sample.codedHeight
            ] : [
                sample.codedHeight,
                sample.codedWidth
            ];
            const scale = this._fit === 'contain' ? Math.min(this._width / sampleWidth, this._height / sampleHeight) : Math.max(this._width / sampleWidth, this._height / sampleHeight);
            newWidth = sampleWidth * scale;
            newHeight = sampleHeight * scale;
            dx = (this._width - newWidth) / 2;
            dy = (this._height - newHeight) / 2;
        }
        const aspectRatioChange = this._rotation % 180 === 0 ? 1 : newWidth / newHeight;
        context.translate(this._width / 2, this._height / 2);
        context.rotate(this._rotation * Math.PI / 180);
        // This aspect ratio compensation is done so that we can draw the sample with the intended dimensions and
        // don't need to think about how those dimensions change after the rotation
        context.scale(1 / aspectRatioChange, aspectRatioChange);
        context.translate(-this._width / 2, -this._height / 2);
        context.drawImage(sample.toCanvasImageSource(), dx, dy, newWidth, newHeight);
        const result = {
            canvas,
            timestamp: sample.timestamp,
            duration: sample.duration
        };
        sample.close();
        return result;
    }
    /**
     * Retrieves a canvas with the video frame corresponding to the given timestamp, in seconds. More specifically,
     * returns the last video frame (in presentation order) with a start timestamp less than or equal to the given
     * timestamp. Returns null if the timestamp is before the track's first timestamp.
     *
     * @param timestamp - The timestamp used for retrieval, in seconds.
     */ async getCanvas(timestamp) {
        validateTimestamp(timestamp);
        const sample = await this._videoSampleSink.getSample(timestamp);
        return sample && this._videoSampleToWrappedCanvas(sample);
    }
    /**
     * Creates an async iterator that yields canvases with the video frames of this track in presentation order. This
     * method will intelligently pre-decode a few frames ahead to enable fast iteration.
     *
     * @param startTimestamp - The timestamp in seconds at which to start yielding canvases (inclusive).
     * @param endTimestamp - The timestamp in seconds at which to stop yielding canvases (exclusive).
     */ canvases() {
        let startTimestamp = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, endTimestamp = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapAsyncGenerator"])(this._videoSampleSink.samples(startTimestamp, endTimestamp), (sample)=>this._videoSampleToWrappedCanvas(sample));
    }
    /**
     * Creates an async iterator that yields a canvas for each timestamp in the argument. This method uses an optimized
     * decoding pipeline if these timestamps are monotonically sorted, decoding each packet at most once, and is
     * therefore more efficient than manually getting the canvas for every timestamp. The iterator may yield null if
     * no frame is available for a given timestamp.
     *
     * @param timestamps - An iterable or async iterable of timestamps in seconds.
     */ canvasesAtTimestamps(timestamps) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapAsyncGenerator"])(this._videoSampleSink.samplesAtTimestamps(timestamps), (sample)=>sample && this._videoSampleToWrappedCanvas(sample));
    }
    constructor(videoTrack, options = {}){
        /** @internal */ this._nextCanvasIndex = 0;
        if (!(videoTrack instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputVideoTrack"])) {
            throw new TypeError('videoTrack must be an InputVideoTrack.');
        }
        if (options && typeof options !== 'object') {
            throw new TypeError('options must be an object.');
        }
        if (options.width !== undefined && (!Number.isInteger(options.width) || options.width <= 0)) {
            throw new TypeError('options.width, when defined, must be a positive integer.');
        }
        if (options.height !== undefined && (!Number.isInteger(options.height) || options.height <= 0)) {
            throw new TypeError('options.height, when defined, must be a positive integer.');
        }
        if (options.fit !== undefined && ![
            'fill',
            'contain',
            'cover'
        ].includes(options.fit)) {
            throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');
        }
        if (options.width !== undefined && options.height !== undefined && options.fit === undefined) {
            throw new TypeError('When both options.width and options.height are provided, options.fit must also be provided.');
        }
        if (options.rotation !== undefined && ![
            0,
            90,
            180,
            270
        ].includes(options.rotation)) {
            throw new TypeError('options.rotation, when provided, must be 0, 90, 180 or 270.');
        }
        if (options.poolSize !== undefined && (typeof options.poolSize !== 'number' || !Number.isInteger(options.poolSize) || options.poolSize < 0)) {
            throw new TypeError('poolSize must be a non-negative integer.');
        }
        var _options_rotation;
        const rotation = (_options_rotation = options.rotation) !== null && _options_rotation !== void 0 ? _options_rotation : videoTrack.rotation;
        let [width, height] = rotation % 180 === 0 ? [
            videoTrack.codedWidth,
            videoTrack.codedHeight
        ] : [
            videoTrack.codedHeight,
            videoTrack.codedWidth
        ];
        const originalAspectRatio = width / height;
        // If width and height aren't defined together, deduce the missing value using the aspect ratio
        if (options.width !== undefined && options.height === undefined) {
            width = options.width;
            height = Math.round(width / originalAspectRatio);
        } else if (options.width === undefined && options.height !== undefined) {
            height = options.height;
            width = Math.round(height * originalAspectRatio);
        } else if (options.width !== undefined && options.height !== undefined) {
            width = options.width;
            height = options.height;
        }
        this._videoTrack = videoTrack;
        this._width = width;
        this._height = height;
        this._rotation = rotation;
        var _options_fit;
        this._fit = (_options_fit = options.fit) !== null && _options_fit !== void 0 ? _options_fit : 'fill';
        this._videoSampleSink = new VideoSampleSink(videoTrack);
        var _options_poolSize;
        this._canvasPool = Array.from({
            length: (_options_poolSize = options.poolSize) !== null && _options_poolSize !== void 0 ? _options_poolSize : 0
        }, ()=>null);
    }
}
class AudioDecoderWrapper extends DecoderWrapper {
    getDecodeQueueSize() {
        if (this.customDecoder) {
            return this.customDecoderQueueSize;
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.decoder);
            return this.decoder.decodeQueueSize;
        }
    }
    decode(packet) {
        if (this.customDecoder) {
            this.customDecoderQueueSize++;
            void this.customDecoderCallSerializer.call(()=>this.customDecoder.decode(packet)).then(()=>this.customDecoderQueueSize--);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.decoder);
            this.decoder.decode(packet.toEncodedAudioChunk());
        }
    }
    flush() {
        if (this.customDecoder) {
            return this.customDecoderCallSerializer.call(()=>this.customDecoder.flush());
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.decoder);
            return this.decoder.flush();
        }
    }
    close() {
        if (this.customDecoder) {
            void this.customDecoderCallSerializer.call(()=>this.customDecoder.close());
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.decoder);
            this.decoder.close();
        }
    }
    constructor(onSample, onError, codec, decoderConfig){
        super(onSample, onError);
        this.decoder = null;
        this.customDecoder = null;
        this.customDecoderCallSerializer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallSerializer"]();
        this.customDecoderQueueSize = 0;
        const sampleHandler = (sample)=>{
            if (sample.numberOfFrames === 0) {
                // We skip zero-data (empty) AudioSamples. These are sometimes emitted, for example, by Firefox when it
                // decodes Vorbis (at the start).
                sample.close();
                return;
            }
            // Round the timestamp to the sample rate
            const sampleRate = decoderConfig.sampleRate;
            sample.setTimestamp(Math.round(sample.timestamp * sampleRate) / sampleRate);
            onSample(sample);
        };
        const MatchingCustomDecoder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$custom$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customAudioDecoders"].find((x)=>x.supports(codec, decoderConfig));
        if (MatchingCustomDecoder) {
            // @ts-expect-error "Can't create instance of abstract class 🤓"
            this.customDecoder = new MatchingCustomDecoder();
            // @ts-expect-error It's technically readonly
            this.customDecoder.codec = codec;
            // @ts-expect-error It's technically readonly
            this.customDecoder.config = decoderConfig;
            // @ts-expect-error It's technically readonly
            this.customDecoder.onSample = (sample)=>{
                if (!(sample instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioSample"])) {
                    throw new TypeError('The argument passed to onSample must be an AudioSample.');
                }
                sampleHandler(sample);
            };
            void this.customDecoderCallSerializer.call(()=>this.customDecoder.init());
        } else {
            this.decoder = new AudioDecoder({
                output: (data)=>sampleHandler(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioSample"](data)),
                error: onError
            });
            this.decoder.configure(decoderConfig);
        }
    }
}
// There are a lot of PCM variants not natively supported by the browser and by AudioData. Therefore we need a simple
// decoder that maps any input PCM format into a PCM format supported by the browser.
class PcmAudioDecoderWrapper extends DecoderWrapper {
    getDecodeQueueSize() {
        return 0;
    }
    decode(packet) {
        const inputView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDataView"])(packet.data);
        const numberOfFrames = packet.byteLength / this.decoderConfig.numberOfChannels / this.inputSampleSize;
        const outputBufferSize = numberOfFrames * this.decoderConfig.numberOfChannels * this.outputSampleSize;
        const outputBuffer = new ArrayBuffer(outputBufferSize);
        const outputView = new DataView(outputBuffer);
        for(let i = 0; i < numberOfFrames * this.decoderConfig.numberOfChannels; i++){
            const inputIndex = i * this.inputSampleSize;
            const outputIndex = i * this.outputSampleSize;
            const value = this.readInputValue(inputView, inputIndex);
            this.writeOutputValue(outputView, outputIndex, value);
        }
        const preciseDuration = numberOfFrames / this.decoderConfig.sampleRate;
        if (this.currentTimestamp === null || Math.abs(packet.timestamp - this.currentTimestamp) >= preciseDuration) {
            // We need to sync with the packet timestamp again
            this.currentTimestamp = packet.timestamp;
        }
        const preciseTimestamp = this.currentTimestamp;
        this.currentTimestamp += preciseDuration;
        const audioSample = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioSample"]({
            format: this.outputFormat,
            data: outputBuffer,
            numberOfChannels: this.decoderConfig.numberOfChannels,
            sampleRate: this.decoderConfig.sampleRate,
            numberOfFrames,
            timestamp: preciseTimestamp
        });
        this.onSample(audioSample);
    }
    async flush() {
    // Do nothing
    }
    close() {
    // Do nothing
    }
    constructor(onSample, onError, decoderConfig){
        super(onSample, onError);
        this.decoderConfig = decoderConfig;
        // Internal state to accumulate a precise current timestamp based on audio durations, not the (potentially
        // inaccurate) sample timestamps.
        this.currentTimestamp = null;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCM_AUDIO_CODECS"].includes(decoderConfig.codec));
        this.codec = decoderConfig.codec;
        const { dataType, sampleSize, littleEndian } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePcmCodec"])(this.codec);
        this.inputSampleSize = sampleSize;
        switch(sampleSize){
            case 1:
                {
                    if (dataType === 'unsigned') {
                        this.readInputValue = (view, byteOffset)=>view.getUint8(byteOffset) - 2 ** 7;
                    } else if (dataType === 'signed') {
                        this.readInputValue = (view, byteOffset)=>view.getInt8(byteOffset);
                    } else if (dataType === 'ulaw') {
                        this.readInputValue = (view, byteOffset)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$pcm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromUlaw"])(view.getUint8(byteOffset));
                    } else if (dataType === 'alaw') {
                        this.readInputValue = (view, byteOffset)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$pcm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromAlaw"])(view.getUint8(byteOffset));
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false);
                    }
                }
                ;
                break;
            case 2:
                {
                    if (dataType === 'unsigned') {
                        this.readInputValue = (view, byteOffset)=>view.getUint16(byteOffset, littleEndian) - 2 ** 15;
                    } else if (dataType === 'signed') {
                        this.readInputValue = (view, byteOffset)=>view.getInt16(byteOffset, littleEndian);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false);
                    }
                }
                ;
                break;
            case 3:
                {
                    if (dataType === 'unsigned') {
                        this.readInputValue = (view, byteOffset)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUint24"])(view, byteOffset, littleEndian) - 2 ** 23;
                    } else if (dataType === 'signed') {
                        this.readInputValue = (view, byteOffset)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInt24"])(view, byteOffset, littleEndian);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false);
                    }
                }
                ;
                break;
            case 4:
                {
                    if (dataType === 'unsigned') {
                        this.readInputValue = (view, byteOffset)=>view.getUint32(byteOffset, littleEndian) - 2 ** 31;
                    } else if (dataType === 'signed') {
                        this.readInputValue = (view, byteOffset)=>view.getInt32(byteOffset, littleEndian);
                    } else if (dataType === 'float') {
                        this.readInputValue = (view, byteOffset)=>view.getFloat32(byteOffset, littleEndian);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false);
                    }
                }
                ;
                break;
            case 8:
                {
                    if (dataType === 'float') {
                        this.readInputValue = (view, byteOffset)=>view.getFloat64(byteOffset, littleEndian);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false);
                    }
                }
                ;
                break;
            default:
                {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNever"])(sampleSize);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false);
                }
                ;
        }
        switch(sampleSize){
            case 1:
                {
                    if (dataType === 'ulaw' || dataType === 'alaw') {
                        this.outputSampleSize = 2;
                        this.outputFormat = 's16';
                        this.writeOutputValue = (view, byteOffset, value)=>view.setInt16(byteOffset, value, true);
                    } else {
                        this.outputSampleSize = 1;
                        this.outputFormat = 'u8';
                        this.writeOutputValue = (view, byteOffset, value)=>view.setUint8(byteOffset, value + 2 ** 7);
                    }
                }
                ;
                break;
            case 2:
                {
                    this.outputSampleSize = 2;
                    this.outputFormat = 's16';
                    this.writeOutputValue = (view, byteOffset, value)=>view.setInt16(byteOffset, value, true);
                }
                ;
                break;
            case 3:
                {
                    this.outputSampleSize = 4;
                    this.outputFormat = 's32';
                    // From https://www.w3.org/TR/webcodecs:
                    // AudioData containing 24-bit samples SHOULD store those samples in s32 or f32. When samples are
                    // stored in s32, each sample MUST be left-shifted by 8 bits.
                    this.writeOutputValue = (view, byteOffset, value)=>view.setInt32(byteOffset, value << 8, true);
                }
                ;
                break;
            case 4:
                {
                    this.outputSampleSize = 4;
                    if (dataType === 'float') {
                        this.outputFormat = 'f32';
                        this.writeOutputValue = (view, byteOffset, value)=>view.setFloat32(byteOffset, value, true);
                    } else {
                        this.outputFormat = 's32';
                        this.writeOutputValue = (view, byteOffset, value)=>view.setInt32(byteOffset, value, true);
                    }
                }
                ;
                break;
            case 8:
                {
                    this.outputSampleSize = 4;
                    this.outputFormat = 'f32';
                    this.writeOutputValue = (view, byteOffset, value)=>view.setFloat32(byteOffset, value, true);
                }
                ;
                break;
            default:
                {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNever"])(sampleSize);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false);
                }
                ;
        }
        ;
    }
}
class AudioSampleSink extends BaseMediaSampleSink {
    /** @internal */ async _createDecoder(onSample, onError) {
        if (!await this._audioTrack.canDecode()) {
            throw new Error('This audio track cannot be decoded by this browser. Make sure to check decodability before using' + ' a track.');
        }
        const codec = this._audioTrack.codec;
        const decoderConfig = await this._audioTrack.getDecoderConfig();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(codec && decoderConfig);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCM_AUDIO_CODECS"].includes(decoderConfig.codec)) {
            return new PcmAudioDecoderWrapper(onSample, onError, decoderConfig);
        } else {
            return new AudioDecoderWrapper(onSample, onError, codec, decoderConfig);
        }
    }
    /** @internal */ _createPacketSink() {
        return new EncodedPacketSink(this._audioTrack);
    }
    /**
     * Retrieves the audio sample corresponding to the given timestamp, in seconds. More specifically, returns
     * the last audio sample (in presentation order) with a start timestamp less than or equal to the given timestamp.
     * Returns null if the timestamp is before the track's first timestamp.
     *
     * @param timestamp - The timestamp used for retrieval, in seconds.
     */ async getSample(timestamp) {
        validateTimestamp(timestamp);
        for await (const sample of this.mediaSamplesAtTimestamps([
            timestamp
        ])){
            return sample;
        }
        throw new Error('Internal error: Iterator returned nothing.');
    }
    /**
     * Creates an async iterator that yields the audio samples of this track in presentation order. This method
     * will intelligently pre-decode a few samples ahead to enable fast iteration.
     *
     * @param startTimestamp - The timestamp in seconds at which to start yielding samples (inclusive).
     * @param endTimestamp - The timestamp in seconds at which to stop yielding samples (exclusive).
     */ samples() {
        let startTimestamp = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, endTimestamp = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
        return this.mediaSamplesInRange(startTimestamp, endTimestamp);
    }
    /**
     * Creates an async iterator that yields an audio sample for each timestamp in the argument. This method
     * uses an optimized decoding pipeline if these timestamps are monotonically sorted, decoding each packet at most
     * once, and is therefore more efficient than manually getting the sample for every timestamp. The iterator may
     * yield null if no sample is available for a given timestamp.
     *
     * @param timestamps - An iterable or async iterable of timestamps in seconds.
     */ samplesAtTimestamps(timestamps) {
        return this.mediaSamplesAtTimestamps(timestamps);
    }
    constructor(audioTrack){
        if (!(audioTrack instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputAudioTrack"])) {
            throw new TypeError('audioTrack must be an InputAudioTrack.');
        }
        super();
        this._audioTrack = audioTrack;
    }
}
class AudioBufferSink {
    /** @internal */ _audioSampleToWrappedArrayBuffer(sample) {
        return {
            buffer: sample.toAudioBuffer(),
            timestamp: sample.timestamp,
            duration: sample.duration
        };
    }
    /**
     * Retrieves the audio buffer corresponding to the given timestamp, in seconds. More specifically, returns
     * the last audio buffer (in presentation order) with a start timestamp less than or equal to the given timestamp.
     * Returns null if the timestamp is before the track's first timestamp.
     *
     * @param timestamp - The timestamp used for retrieval, in seconds.
     */ async getBuffer(timestamp) {
        validateTimestamp(timestamp);
        const data = await this._audioSampleSink.getSample(timestamp);
        return data && this._audioSampleToWrappedArrayBuffer(data);
    }
    /**
     * Creates an async iterator that yields audio buffers of this track in presentation order. This method
     * will intelligently pre-decode a few buffers ahead to enable fast iteration.
     *
     * @param startTimestamp - The timestamp in seconds at which to start yielding buffers (inclusive).
     * @param endTimestamp - The timestamp in seconds at which to stop yielding buffers (exclusive).
     */ buffers() {
        let startTimestamp = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, endTimestamp = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapAsyncGenerator"])(this._audioSampleSink.samples(startTimestamp, endTimestamp), (data)=>this._audioSampleToWrappedArrayBuffer(data));
    }
    /**
     * Creates an async iterator that yields an audio buffer for each timestamp in the argument. This method
     * uses an optimized decoding pipeline if these timestamps are monotonically sorted, decoding each packet at most
     * once, and is therefore more efficient than manually getting the buffer for every timestamp. The iterator may
     * yield null if no buffer is available for a given timestamp.
     *
     * @param timestamps - An iterable or async iterable of timestamps in seconds.
     */ buffersAtTimestamps(timestamps) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapAsyncGenerator"])(this._audioSampleSink.samplesAtTimestamps(timestamps), (data)=>data && this._audioSampleToWrappedArrayBuffer(data));
    }
    constructor(audioTrack){
        if (!(audioTrack instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputAudioTrack"])) {
            throw new TypeError('audioTrack must be an InputAudioTrack.');
        }
        this._audioSampleSink = new AudioSampleSink(audioTrack);
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/input-track.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "InputAudioTrack": ()=>InputAudioTrack,
    "InputTrack": ()=>InputTrack,
    "InputVideoTrack": ()=>InputVideoTrack
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$custom$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/custom-coder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$media$2d$sink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/media-sink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/packet.js [app-client] (ecmascript)");
;
;
;
;
;
class InputTrack {
    /** Returns true iff this track is a video track. */ isVideoTrack() {
        return this instanceof InputVideoTrack;
    }
    /** Returns true iff this track is an audio track. */ isAudioTrack() {
        return this instanceof InputAudioTrack;
    }
    /** The unique ID of this track in the input file. */ get id() {
        return this._backing.getId();
    }
    /** The ISO 639-2/T language code for this track. If the language is unknown, this field is 'und' (undetermined). */ get languageCode() {
        return this._backing.getLanguageCode();
    }
    /**
     * A positive number x such that all timestamps and durations of all packets of this track are
     * integer multiples of 1/x.
     */ get timeResolution() {
        return this._backing.getTimeResolution();
    }
    /**
     * Returns the start timestamp of the first packet of this track, in seconds. While often near zero, this value
     * may be positive or even negative. A negative starting timestamp means the track's timing has been offset. Samples
     * with a negative timestamp should not be presented.
     */ getFirstTimestamp() {
        return this._backing.getFirstTimestamp();
    }
    /** Returns the end timestamp of the last packet of this track, in seconds. */ computeDuration() {
        return this._backing.computeDuration();
    }
    /**
     * Computes aggregate packet statistics for this track, such as average packet rate or bitrate.
     *
     * @param targetPacketCount - This optional parameter sets a target for how many packets this method must have
     * looked at before it can return early; this means, you can use it to aggregate only a subset (prefix) of all
     * packets. This is very useful for getting a great estimate of video frame rate without having to scan through the
     * entire file.
     */ async computePacketStats() {
        let targetPacketCount = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Infinity;
        const sink = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$media$2d$sink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacketSink"](this);
        let startTimestamp = Infinity;
        let endTimestamp = -Infinity;
        let packetCount = 0;
        let totalPacketBytes = 0;
        for await (const packet of sink.packets(undefined, undefined, {
            metadataOnly: true
        })){
            if (packetCount >= targetPacketCount && packet.timestamp >= endTimestamp) {
                break;
            }
            startTimestamp = Math.min(startTimestamp, packet.timestamp);
            endTimestamp = Math.max(endTimestamp, packet.timestamp + packet.duration);
            packetCount++;
            totalPacketBytes += packet.byteLength;
        }
        return {
            packetCount,
            averagePacketRate: packetCount ? Number((packetCount / (endTimestamp - startTimestamp)).toPrecision(16)) : 0,
            averageBitrate: packetCount ? Number((8 * totalPacketBytes / (endTimestamp - startTimestamp)).toPrecision(16)) : 0
        };
    }
    /** @internal */ constructor(backing){
        this._backing = backing;
    }
}
class InputVideoTrack extends InputTrack {
    get type() {
        return 'video';
    }
    get codec() {
        return this._backing.getCodec();
    }
    /** The width in pixels of the track's coded samples, before any transformations or rotations. */ get codedWidth() {
        return this._backing.getCodedWidth();
    }
    /** The height in pixels of the track's coded samples, before any transformations or rotations. */ get codedHeight() {
        return this._backing.getCodedHeight();
    }
    /** The angle in degrees by which the track's frames should be rotated (clockwise). */ get rotation() {
        return this._backing.getRotation();
    }
    /** The width in pixels of the track's frames after rotation. */ get displayWidth() {
        const rotation = this._backing.getRotation();
        return rotation % 180 === 0 ? this._backing.getCodedWidth() : this._backing.getCodedHeight();
    }
    /** The height in pixels of the track's frames after rotation. */ get displayHeight() {
        const rotation = this._backing.getRotation();
        return rotation % 180 === 0 ? this._backing.getCodedHeight() : this._backing.getCodedWidth();
    }
    /** Returns the color space of the track's samples. */ getColorSpace() {
        return this._backing.getColorSpace();
    }
    /** If this method returns true, the track's samples use a high dynamic range (HDR). */ async hasHighDynamicRange() {
        const colorSpace = await this._backing.getColorSpace();
        return colorSpace.primaries === 'bt2020' || colorSpace.primaries === 'smpte432' || colorSpace.transfer === 'pg' || colorSpace.transfer === 'hlg' || colorSpace.matrix === 'bt2020-ncl';
    }
    /**
     * Returns the decoder configuration for decoding the track's packets using a VideoDecoder. Returns null if the
     * track's codec is unknown.
     */ getDecoderConfig() {
        return this._backing.getDecoderConfig();
    }
    async getCodecParameterString() {
        const decoderConfig = await this._backing.getDecoderConfig();
        var _decoderConfig_codec;
        return (_decoderConfig_codec = decoderConfig === null || decoderConfig === void 0 ? void 0 : decoderConfig.codec) !== null && _decoderConfig_codec !== void 0 ? _decoderConfig_codec : null;
    }
    async canDecode() {
        try {
            const decoderConfig = await this._backing.getDecoderConfig();
            if (!decoderConfig) {
                return false;
            }
            const codec = this._backing.getCodec();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(codec !== null);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$custom$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customVideoDecoders"].some((x)=>x.supports(codec, decoderConfig))) {
                return true;
            }
            if (typeof VideoDecoder === 'undefined') {
                return false;
            }
            const support = await VideoDecoder.isConfigSupported(decoderConfig);
            return support.supported === true;
        } catch (error) {
            console.error('Error during decodability check:', error);
            return false;
        }
    }
    async determinePacketType(packet) {
        if (!(packet instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"])) {
            throw new TypeError('packet must be an EncodedPacket.');
        }
        if (packet.isMetadataOnly) {
            throw new TypeError('packet must not be metadata-only to determine its type.');
        }
        if (this.codec === null) {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["determineVideoPacketType"])(this, packet);
    }
    /** @internal */ constructor(backing){
        super(backing);
        this._backing = backing;
    }
}
class InputAudioTrack extends InputTrack {
    get type() {
        return 'audio';
    }
    get codec() {
        return this._backing.getCodec();
    }
    /** The number of audio channels in the track. */ get numberOfChannels() {
        return this._backing.getNumberOfChannels();
    }
    /** The track's audio sample rate in hertz. */ get sampleRate() {
        return this._backing.getSampleRate();
    }
    /**
     * Returns the decoder configuration for decoding the track's packets using an AudioDecoder. Returns null if the
     * track's codec is unknown.
     */ getDecoderConfig() {
        return this._backing.getDecoderConfig();
    }
    async getCodecParameterString() {
        const decoderConfig = await this._backing.getDecoderConfig();
        var _decoderConfig_codec;
        return (_decoderConfig_codec = decoderConfig === null || decoderConfig === void 0 ? void 0 : decoderConfig.codec) !== null && _decoderConfig_codec !== void 0 ? _decoderConfig_codec : null;
    }
    async canDecode() {
        try {
            const decoderConfig = await this._backing.getDecoderConfig();
            if (!decoderConfig) {
                return false;
            }
            const codec = this._backing.getCodec();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(codec !== null);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$custom$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customAudioDecoders"].some((x)=>x.supports(codec, decoderConfig))) {
                return true;
            }
            if (decoderConfig.codec.startsWith('pcm-')) {
                return true; // Since we decode it ourselves
            } else {
                if (typeof AudioDecoder === 'undefined') {
                    return false;
                }
                const support = await AudioDecoder.isConfigSupported(decoderConfig);
                return support.supported === true;
            }
        } catch (error) {
            console.error('Error during decodability check:', error);
            return false;
        }
    }
    async determinePacketType(packet) {
        if (!(packet instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"])) {
            throw new TypeError('packet must be an EncodedPacket.');
        }
        if (this.codec === null) {
            return null;
        }
        return 'key'; // No audio codec with delta packets
    }
    /** @internal */ constructor(backing){
        super(backing);
        this._backing = backing;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/reader.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "Reader": ()=>Reader
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
;
class Reader {
    async loadRange(start, end) {
        var _this_source_onread, _this_source;
        end = Math.min(end, await this.source.getSize());
        if (start >= end) {
            return;
        }
        const matchingLoadingSegment = this.loadingSegments.find((x)=>x.start <= start && x.end >= end);
        if (matchingLoadingSegment) {
            // Simply wait for the existing promise to finish to avoid loading the same range twice
            await matchingLoadingSegment.promise;
            return;
        }
        const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(this.loadedSegments, start, (x)=>x.start);
        if (index !== -1) {
            for(let i = index; i < this.loadedSegments.length; i++){
                const segment = this.loadedSegments[i];
                if (segment.start > start) {
                    break;
                }
                const segmentEncasesRequestedRange = segment.end >= end;
                if (segmentEncasesRequestedRange) {
                    // Nothing to load
                    return;
                }
            }
        }
        (_this_source_onread = (_this_source = this.source).onread) === null || _this_source_onread === void 0 ? void 0 : _this_source_onread.call(_this_source, start, end);
        const bytesPromise = this.source._read(start, end);
        const loadingSegment = {
            start,
            end,
            promise: bytesPromise
        };
        this.loadingSegments.push(loadingSegment);
        const bytes = await bytesPromise;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeItem"])(this.loadingSegments, loadingSegment);
        this.insertIntoLoadedSegments(start, bytes);
    }
    rangeIsLoaded(start, end) {
        if (end <= start) {
            return true;
        }
        const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(this.loadedSegments, start, (x)=>x.start);
        if (index === -1) {
            return false;
        }
        for(let i = index; i < this.loadedSegments.length; i++){
            const segment = this.loadedSegments[i];
            if (segment.start > start) {
                break;
            }
            const segmentEncasesRequestedRange = segment.end >= end;
            if (segmentEncasesRequestedRange) {
                return true;
            }
        }
        return false;
    }
    insertIntoLoadedSegments(start, bytes) {
        const segment = {
            start,
            end: start + bytes.byteLength,
            bytes,
            view: new DataView(bytes.buffer),
            age: this.nextAge++
        };
        let index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(this.loadedSegments, start, (x)=>x.start);
        if (index === -1 || this.loadedSegments[index].start < segment.start) {
            index++;
        }
        // Insert the segment at the right place so that the array remains sorted by start offset
        this.loadedSegments.splice(index, 0, segment);
        this.totalStoredBytes += bytes.byteLength;
        // Remove all other segments from the array that are completely covered by the newly-inserted segment
        for(let i = index + 1; i < this.loadedSegments.length; i++){
            const otherSegment = this.loadedSegments[i];
            if (otherSegment.start >= segment.end) {
                break;
            }
            if (segment.start <= otherSegment.start && otherSegment.end <= segment.end) {
                this.loadedSegments.splice(i, 1);
                i--;
            }
        }
        // If we overshoot the max amount of permitted bytes, let's start evicting the oldest segments
        while(this.totalStoredBytes > this.maxStorableBytes && this.loadedSegments.length > 1){
            let oldestSegment = null;
            let oldestSegmentIndex = -1;
            for(let i = 0; i < this.loadedSegments.length; i++){
                const candidate = this.loadedSegments[i];
                if (!oldestSegment || candidate.age < oldestSegment.age) {
                    oldestSegment = candidate;
                    oldestSegmentIndex = i;
                }
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(oldestSegment);
            this.totalStoredBytes -= oldestSegment.bytes.byteLength;
            this.loadedSegments.splice(oldestSegmentIndex, 1);
        }
    }
    getViewAndOffset(start, end) {
        const startIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(this.loadedSegments, start, (x)=>x.start);
        let segment = null;
        if (startIndex !== -1) {
            for(let i = startIndex; i < this.loadedSegments.length; i++){
                const candidate = this.loadedSegments[i];
                if (candidate.start > start) {
                    break;
                }
                if (end <= candidate.end) {
                    segment = candidate;
                    break;
                }
            }
        }
        if (!segment) {
            throw new Error("No segment loaded for range [".concat(start, ", ").concat(end, ")."));
        }
        segment.age = this.nextAge++;
        return {
            view: segment.view,
            offset: segment.bytes.byteOffset + start - segment.start
        };
    }
    forgetRange(start, end) {
        if (end <= start) {
            return;
        }
        const startIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(this.loadedSegments, start, (x)=>x.start);
        if (startIndex === -1) {
            return;
        }
        const segment = this.loadedSegments[startIndex];
        if (segment.start !== start || segment.end !== end) {
            return;
        }
        this.loadedSegments.splice(startIndex, 1);
        this.totalStoredBytes -= segment.bytes.byteLength;
    }
    constructor(source, maxStorableBytes = Infinity){
        this.source = source;
        this.maxStorableBytes = maxStorableBytes;
        this.loadedSegments = [];
        this.loadingSegments = [];
        this.sourceSizePromise = null;
        this.nextAge = 0;
        this.totalStoredBytes = 0;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/isobmff/isobmff-misc.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "buildIsobmffMimeType": ()=>buildIsobmffMimeType
});
const buildIsobmffMimeType = (info)=>{
    const base = info.hasVideo ? 'video/' : info.hasAudio ? 'audio/' : 'application/';
    let string = base + (info.isQuickTime ? 'quicktime' : 'mp4');
    if (info.codecStrings.length > 0) {
        const uniqueCodecMimeTypes = [
            ...new Set(info.codecStrings)
        ];
        string += '; codecs="'.concat(uniqueCodecMimeTypes.join(', '), '"');
    }
    return string;
};
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/isobmff/isobmff-reader.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "IsobmffReader": ()=>IsobmffReader,
    "MAX_BOX_HEADER_SIZE": ()=>MAX_BOX_HEADER_SIZE,
    "MIN_BOX_HEADER_SIZE": ()=>MIN_BOX_HEADER_SIZE
});
const MIN_BOX_HEADER_SIZE = 8;
const MAX_BOX_HEADER_SIZE = 16;
class IsobmffReader {
    readBytes(length) {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + length);
        this.pos += length;
        return new Uint8Array(view.buffer, offset, length);
    }
    readU8() {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + 1);
        this.pos++;
        return view.getUint8(offset);
    }
    readU16() {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + 2);
        this.pos += 2;
        return view.getUint16(offset, false);
    }
    readI16() {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + 2);
        this.pos += 2;
        return view.getInt16(offset, false);
    }
    readU24() {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + 3);
        this.pos += 3;
        const high = view.getUint16(offset, false);
        const low = view.getUint8(offset + 2);
        return high * 0x100 + low;
    }
    readU32() {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + 4);
        this.pos += 4;
        return view.getUint32(offset, false);
    }
    readI32() {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + 4);
        this.pos += 4;
        return view.getInt32(offset, false);
    }
    readU64() {
        const high = this.readU32();
        const low = this.readU32();
        return high * 0x100000000 + low;
    }
    readI64() {
        const high = this.readI32();
        const low = this.readU32();
        return high * 0x100000000 + low;
    }
    readF64() {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + 8);
        this.pos += 8;
        return view.getFloat64(offset, false);
    }
    readFixed_16_16() {
        return this.readI32() / 0x10000;
    }
    readFixed_2_30() {
        return this.readI32() / 0x40000000;
    }
    readAscii(length) {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + length);
        this.pos += length;
        let str = '';
        for(let i = 0; i < length; i++){
            str += String.fromCharCode(view.getUint8(offset + i));
        }
        return str;
    }
    readIsomVariableInteger() {
        let result = 0;
        for(let i = 0; i < 4; i++){
            result <<= 7;
            const nextByte = this.readU8();
            result |= nextByte & 0x7f;
            if ((nextByte & 0x80) === 0) {
                break;
            }
        }
        return result;
    }
    readBoxHeader() {
        let totalSize = this.readU32();
        const name = this.readAscii(4);
        let headerSize = 8;
        const hasLargeSize = totalSize === 1;
        if (hasLargeSize) {
            totalSize = this.readU64();
            headerSize = 16;
        }
        const contentSize = totalSize - headerSize;
        if (contentSize < 0) {
            return null; // Hardly a box is it
        }
        return {
            name,
            totalSize,
            headerSize,
            contentSize
        };
    }
    constructor(reader){
        this.reader = reader;
        this.pos = 0;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/isobmff/isobmff-demuxer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "IsobmffDemuxer": ()=>IsobmffDemuxer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/demuxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/input-track.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/packet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/reader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/isobmff/isobmff-misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/isobmff/isobmff-reader.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
class IsobmffDemuxer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Demuxer"] {
    async computeDuration() {
        const tracks = await this.getTracks();
        const trackDurations = await Promise.all(tracks.map((x)=>x.computeDuration()));
        return Math.max(0, ...trackDurations);
    }
    async getTracks() {
        await this.readMetadata();
        return this.tracks.map((track)=>track.inputTrack);
    }
    async getMimeType() {
        await this.readMetadata();
        const codecStrings = await Promise.all(this.tracks.map((x)=>x.inputTrack.getCodecParameterString()));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildIsobmffMimeType"])({
            isQuickTime: this.isQuickTime,
            hasVideo: this.tracks.some((x)=>{
                var _x_info;
                return ((_x_info = x.info) === null || _x_info === void 0 ? void 0 : _x_info.type) === 'video';
            }),
            hasAudio: this.tracks.some((x)=>{
                var _x_info;
                return ((_x_info = x.info) === null || _x_info === void 0 ? void 0 : _x_info.type) === 'audio';
            }),
            codecStrings: codecStrings.filter(Boolean)
        });
    }
    readMetadata() {
        var _this_metadataPromise;
        return (_this_metadataPromise = this.metadataPromise) !== null && _this_metadataPromise !== void 0 ? _this_metadataPromise : this.metadataPromise = (async ()=>{
            const sourceSize = await this.metadataReader.reader.source.getSize();
            while(this.metadataReader.pos < sourceSize){
                await this.metadataReader.reader.loadRange(this.metadataReader.pos, this.metadataReader.pos + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_BOX_HEADER_SIZE"]);
                const startPos = this.metadataReader.pos;
                const boxInfo = this.metadataReader.readBoxHeader();
                if (!boxInfo) {
                    break;
                }
                if (boxInfo.name === 'ftyp') {
                    const majorBrand = this.metadataReader.readAscii(4);
                    this.isQuickTime = majorBrand === 'qt  ';
                } else if (boxInfo.name === 'moov') {
                    // Found moov, load it
                    await this.metadataReader.reader.loadRange(this.metadataReader.pos, this.metadataReader.pos + boxInfo.contentSize);
                    this.readContiguousBoxes(boxInfo.contentSize);
                    for (const track of this.tracks){
                        // Modify the edit list offset based on the previous segment durations. They are in different
                        // timescales, so we first convert to seconds and then into the track timescale.
                        const previousSegmentDurationsInSeconds = track.editListPreviousSegmentDurations / this.movieTimescale;
                        track.editListOffset -= Math.round(previousSegmentDurationsInSeconds * track.timescale);
                    }
                    break;
                }
                this.metadataReader.pos = startPos + boxInfo.totalSize;
            }
            if (this.isFragmented) {
                // The last 4 bytes may contain the size of the mfra box at the end of the file
                await this.metadataReader.reader.loadRange(sourceSize - 4, sourceSize);
                this.metadataReader.pos = sourceSize - 4;
                const lastWord = this.metadataReader.readU32();
                const potentialMfraPos = sourceSize - lastWord;
                if (potentialMfraPos >= 0 && potentialMfraPos <= sourceSize - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_BOX_HEADER_SIZE"]) {
                    // Load the header and a bit more, likely covering the entire box
                    await this.metadataReader.reader.loadRange(potentialMfraPos, potentialMfraPos + 2 ** 16);
                    this.metadataReader.pos = potentialMfraPos;
                    const boxInfo = this.metadataReader.readBoxHeader();
                    if (boxInfo && boxInfo.name === 'mfra') {
                        // We found the mfra box, allowing for much better random access. Let's parse it.
                        await this.metadataReader.reader.loadRange(potentialMfraPos, potentialMfraPos + boxInfo.totalSize);
                        this.readContiguousBoxes(boxInfo.contentSize);
                    }
                }
            }
        })();
    }
    getSampleTableForTrack(internalTrack) {
        var _internalTrack_info;
        if (internalTrack.sampleTable) {
            return internalTrack.sampleTable;
        }
        const sampleTable = {
            sampleTimingEntries: [],
            sampleCompositionTimeOffsets: [],
            sampleSizes: [],
            keySampleIndices: null,
            chunkOffsets: [],
            sampleToChunk: [],
            presentationTimestamps: null,
            presentationTimestampIndexMap: null
        };
        internalTrack.sampleTable = sampleTable;
        this.metadataReader.pos = internalTrack.sampleTableByteOffset;
        this.currentTrack = internalTrack;
        this.traverseBox();
        this.currentTrack = null;
        const isPcmCodec = ((_internalTrack_info = internalTrack.info) === null || _internalTrack_info === void 0 ? void 0 : _internalTrack_info.type) === 'audio' && internalTrack.info.codec && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCM_AUDIO_CODECS"].includes(internalTrack.info.codec);
        if (isPcmCodec && sampleTable.sampleCompositionTimeOffsets.length === 0) {
            var _internalTrack_info1;
            // If the audio has PCM samples, the way the samples are defined in the sample table is somewhat
            // suboptimal: Each individual audio sample is its own sample, meaning we can have 48000 samples per second.
            // Because we treat each sample as its own atomic unit that can be decoded, this would lead to a huge
            // amount of very short samples for PCM audio. So instead, we make a transformation: If the audio is in PCM,
            // we say that each chunk (that normally holds many samples) now is one big sample. We can this because
            // the samples in the chunk are contiguous and the format is PCM, so the entire chunk as one thing still
            // encodes valid audio information.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(((_internalTrack_info1 = internalTrack.info) === null || _internalTrack_info1 === void 0 ? void 0 : _internalTrack_info1.type) === 'audio');
            const pcmInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePcmCodec"])(internalTrack.info.codec);
            const newSampleTimingEntries = [];
            const newSampleSizes = [];
            for(let i = 0; i < sampleTable.sampleToChunk.length; i++){
                const chunkEntry = sampleTable.sampleToChunk[i];
                const nextEntry = sampleTable.sampleToChunk[i + 1];
                const chunkCount = (nextEntry ? nextEntry.startChunkIndex : sampleTable.chunkOffsets.length) - chunkEntry.startChunkIndex;
                for(let j = 0; j < chunkCount; j++){
                    const startSampleIndex = chunkEntry.startSampleIndex + j * chunkEntry.samplesPerChunk;
                    const endSampleIndex = startSampleIndex + chunkEntry.samplesPerChunk; // Exclusive, outside of chunk
                    const startTimingEntryIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(sampleTable.sampleTimingEntries, startSampleIndex, (x)=>x.startIndex);
                    const startTimingEntry = sampleTable.sampleTimingEntries[startTimingEntryIndex];
                    const endTimingEntryIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(sampleTable.sampleTimingEntries, endSampleIndex, (x)=>x.startIndex);
                    const endTimingEntry = sampleTable.sampleTimingEntries[endTimingEntryIndex];
                    const firstSampleTimestamp = startTimingEntry.startDecodeTimestamp + (startSampleIndex - startTimingEntry.startIndex) * startTimingEntry.delta;
                    const lastSampleTimestamp = endTimingEntry.startDecodeTimestamp + (endSampleIndex - endTimingEntry.startIndex) * endTimingEntry.delta;
                    const delta = lastSampleTimestamp - firstSampleTimestamp;
                    const lastSampleTimingEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(newSampleTimingEntries);
                    if (lastSampleTimingEntry && lastSampleTimingEntry.delta === delta) {
                        lastSampleTimingEntry.count++;
                    } else {
                        // One sample for the entire chunk
                        newSampleTimingEntries.push({
                            startIndex: chunkEntry.startChunkIndex + j,
                            startDecodeTimestamp: firstSampleTimestamp,
                            count: 1,
                            delta
                        });
                    }
                    // Instead of determining the chunk's size by looping over the samples sizes in the sample table, we
                    // can directly compute it as we know how many PCM frames are in this chunk, and the size of each
                    // PCM frame. This also improves compatibility with some files which fail to write proper sample
                    // size values into their sample tables in the PCM case.
                    const chunkSize = chunkEntry.samplesPerChunk * pcmInfo.sampleSize * internalTrack.info.numberOfChannels;
                    newSampleSizes.push(chunkSize);
                }
                chunkEntry.startSampleIndex = chunkEntry.startChunkIndex;
                chunkEntry.samplesPerChunk = 1;
            }
            sampleTable.sampleTimingEntries = newSampleTimingEntries;
            sampleTable.sampleSizes = newSampleSizes;
        }
        if (sampleTable.sampleCompositionTimeOffsets.length > 0) {
            // If composition time offsets are defined, we must build a list of all presentation timestamps and then
            // sort them
            sampleTable.presentationTimestamps = [];
            for (const entry of sampleTable.sampleTimingEntries){
                for(let i = 0; i < entry.count; i++){
                    sampleTable.presentationTimestamps.push({
                        presentationTimestamp: entry.startDecodeTimestamp + i * entry.delta,
                        sampleIndex: entry.startIndex + i
                    });
                }
            }
            for (const entry of sampleTable.sampleCompositionTimeOffsets){
                for(let i = 0; i < entry.count; i++){
                    const sampleIndex = entry.startIndex + i;
                    const sample = sampleTable.presentationTimestamps[sampleIndex];
                    if (!sample) {
                        continue;
                    }
                    sample.presentationTimestamp += entry.offset;
                }
            }
            sampleTable.presentationTimestamps.sort((a, b)=>a.presentationTimestamp - b.presentationTimestamp);
            sampleTable.presentationTimestampIndexMap = Array(sampleTable.presentationTimestamps.length).fill(-1);
            for(let i = 0; i < sampleTable.presentationTimestamps.length; i++){
                sampleTable.presentationTimestampIndexMap[sampleTable.presentationTimestamps[i].sampleIndex] = i;
            }
        } else {
        // If they're not defined, we can simply use the decode timestamps as presentation timestamps
        }
        return sampleTable;
    }
    async readFragment() {
        const startPos = this.metadataReader.pos;
        await this.metadataReader.reader.loadRange(this.metadataReader.pos, this.metadataReader.pos + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_BOX_HEADER_SIZE"]);
        const moofBoxInfo = this.metadataReader.readBoxHeader();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])((moofBoxInfo === null || moofBoxInfo === void 0 ? void 0 : moofBoxInfo.name) === 'moof');
        const contentStart = this.metadataReader.pos;
        await this.metadataReader.reader.loadRange(contentStart, contentStart + moofBoxInfo.contentSize);
        this.metadataReader.pos = startPos;
        this.traverseBox();
        const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(this.fragments, startPos, (x)=>x.moofOffset);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(index !== -1);
        const fragment = this.fragments[index];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(fragment.moofOffset === startPos);
        // We have read everything in the moof box, there's no need to keep the data around anymore
        // (keep the header tho)
        this.metadataReader.reader.forgetRange(contentStart, contentStart + moofBoxInfo.contentSize);
        // It may be that some tracks don't define the base decode time, i.e. when the fragment begins. This means the
        // only other option is to sum up the duration of all previous fragments.
        for (const [trackId, trackData] of fragment.trackData){
            if (trackData.startTimestampIsFinal) {
                continue;
            }
            const internalTrack = this.tracks.find((x)=>x.id === trackId);
            this.metadataReader.pos = 0;
            let currentFragment = null;
            let lastFragment = null;
            const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(internalTrack.fragments, startPos - 1, (x)=>x.moofOffset);
            if (index !== -1) {
                // Instead of starting at the start of the file, let's start at the previous fragment instead (which
                // already has final timestamps).
                currentFragment = internalTrack.fragments[index];
                lastFragment = currentFragment;
                this.metadataReader.pos = currentFragment.moofOffset + currentFragment.moofSize;
            }
            let nextFragmentIsFirstFragment = this.metadataReader.pos === 0;
            while(this.metadataReader.pos <= startPos - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_BOX_HEADER_SIZE"]){
                if (currentFragment === null || currentFragment === void 0 ? void 0 : currentFragment.nextFragment) {
                    currentFragment = currentFragment.nextFragment;
                    this.metadataReader.pos = currentFragment.moofOffset + currentFragment.moofSize;
                } else {
                    await this.metadataReader.reader.loadRange(this.metadataReader.pos, this.metadataReader.pos + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_BOX_HEADER_SIZE"]);
                    const startPos = this.metadataReader.pos;
                    const boxInfo = this.metadataReader.readBoxHeader();
                    if (!boxInfo) {
                        break;
                    }
                    if (boxInfo.name === 'moof') {
                        const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(this.fragments, startPos, (x)=>x.moofOffset);
                        let fragment;
                        if (index === -1) {
                            this.metadataReader.pos = startPos;
                            fragment = await this.readFragment(); // Recursive call
                        } else {
                            // We already know this fragment
                            fragment = this.fragments[index];
                        }
                        // Even if we already know the fragment, we might not yet know its predecessor; always do this
                        if (currentFragment) currentFragment.nextFragment = fragment;
                        currentFragment = fragment;
                        if (nextFragmentIsFirstFragment) {
                            fragment.isKnownToBeFirstFragment = true;
                            nextFragmentIsFirstFragment = false;
                        }
                    }
                    this.metadataReader.pos = startPos + boxInfo.totalSize;
                }
                if (currentFragment && currentFragment.trackData.has(trackId)) {
                    lastFragment = currentFragment;
                }
            }
            if (lastFragment) {
                const otherTrackData = lastFragment.trackData.get(trackId);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(otherTrackData.startTimestampIsFinal);
                offsetFragmentTrackDataByTimestamp(trackData, otherTrackData.endTimestamp);
            }
            trackData.startTimestampIsFinal = true;
        }
        return fragment;
    }
    readContiguousBoxes(totalSize) {
        const startIndex = this.metadataReader.pos;
        while(this.metadataReader.pos - startIndex <= totalSize - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_BOX_HEADER_SIZE"]){
            const foundBox = this.traverseBox();
            if (!foundBox) {
                break;
            }
        }
    }
    traverseBox() {
        const startPos = this.metadataReader.pos;
        const boxInfo = this.metadataReader.readBoxHeader();
        if (!boxInfo) {
            return false;
        }
        const boxEndPos = startPos + boxInfo.totalSize;
        switch(boxInfo.name){
            case 'mdia':
            case 'minf':
            case 'dinf':
            case 'mfra':
            case 'edts':
                {
                    this.readContiguousBoxes(boxInfo.contentSize);
                }
                ;
                break;
            case 'mvhd':
                {
                    const version = this.metadataReader.readU8();
                    this.metadataReader.pos += 3; // Flags
                    if (version === 1) {
                        this.metadataReader.pos += 8 + 8;
                        this.movieTimescale = this.metadataReader.readU32();
                        this.movieDurationInTimescale = this.metadataReader.readU64();
                    } else {
                        this.metadataReader.pos += 4 + 4;
                        this.movieTimescale = this.metadataReader.readU32();
                        this.movieDurationInTimescale = this.metadataReader.readU32();
                    }
                }
                ;
                break;
            case 'trak':
                {
                    const track = {
                        id: -1,
                        demuxer: this,
                        inputTrack: null,
                        info: null,
                        timescale: -1,
                        durationInMovieTimescale: -1,
                        durationInMediaTimescale: -1,
                        rotation: 0,
                        languageCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNDETERMINED_LANGUAGE"],
                        sampleTableByteOffset: -1,
                        sampleTable: null,
                        fragmentLookupTable: null,
                        currentFragmentState: null,
                        fragments: [],
                        fragmentsWithKeyFrame: [],
                        editListPreviousSegmentDurations: 0,
                        editListOffset: 0
                    };
                    this.currentTrack = track;
                    this.readContiguousBoxes(boxInfo.contentSize);
                    if (track.id !== -1 && track.timescale !== -1 && track.info !== null) {
                        if (track.info.type === 'video' && track.info.width !== -1) {
                            const videoTrack = track;
                            track.inputTrack = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputVideoTrack"](new IsobmffVideoTrackBacking(videoTrack));
                            this.tracks.push(track);
                        } else if (track.info.type === 'audio' && track.info.numberOfChannels !== -1) {
                            const audioTrack = track;
                            track.inputTrack = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputAudioTrack"](new IsobmffAudioTrackBacking(audioTrack));
                            this.tracks.push(track);
                        }
                    }
                    this.currentTrack = null;
                }
                ;
                break;
            case 'tkhd':
                {
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track);
                    const version = this.metadataReader.readU8();
                    const flags = this.metadataReader.readU24();
                    const trackEnabled = (flags & 0x1) !== 0;
                    if (!trackEnabled) {
                        break;
                    }
                    // Skip over creation & modification time to reach the track ID
                    if (version === 0) {
                        this.metadataReader.pos += 8;
                        track.id = this.metadataReader.readU32();
                        this.metadataReader.pos += 4;
                        track.durationInMovieTimescale = this.metadataReader.readU32();
                    } else if (version === 1) {
                        this.metadataReader.pos += 16;
                        track.id = this.metadataReader.readU32();
                        this.metadataReader.pos += 4;
                        track.durationInMovieTimescale = this.metadataReader.readU64();
                    } else {
                        throw new Error("Incorrect track header version ".concat(version, "."));
                    }
                    this.metadataReader.pos += 2 * 4 + 2 + 2 + 2 + 2;
                    const matrix = [
                        this.metadataReader.readFixed_16_16(),
                        this.metadataReader.readFixed_16_16(),
                        this.metadataReader.readFixed_2_30(),
                        this.metadataReader.readFixed_16_16(),
                        this.metadataReader.readFixed_16_16(),
                        this.metadataReader.readFixed_2_30(),
                        this.metadataReader.readFixed_16_16(),
                        this.metadataReader.readFixed_16_16(),
                        this.metadataReader.readFixed_2_30()
                    ];
                    const rotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeRotation"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundToMultiple"])(extractRotationFromMatrix(matrix), 90));
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(rotation === 0 || rotation === 90 || rotation === 180 || rotation === 270);
                    track.rotation = rotation;
                }
                ;
                break;
            case 'elst':
                {
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track);
                    const version = this.metadataReader.readU8();
                    this.metadataReader.pos += 3; // Flags
                    let relevantEntryFound = false;
                    let previousSegmentDurations = 0;
                    const entryCount = this.metadataReader.readU32();
                    for(let i = 0; i < entryCount; i++){
                        const segmentDuration = version === 1 ? this.metadataReader.readU64() : this.metadataReader.readU32();
                        const mediaTime = version === 1 ? this.metadataReader.readI64() : this.metadataReader.readI32();
                        const mediaRate = this.metadataReader.readFixed_16_16();
                        if (segmentDuration === 0) {
                            continue;
                        }
                        if (relevantEntryFound) {
                            console.warn('Unsupported edit list: multiple edits are not currently supported. Only using first edit.');
                            break;
                        }
                        if (mediaTime === -1) {
                            previousSegmentDurations += segmentDuration;
                            continue;
                        }
                        if (mediaRate !== 1) {
                            console.warn('Unsupported edit list entry: media rate must be 1.');
                            break;
                        }
                        track.editListPreviousSegmentDurations = previousSegmentDurations;
                        track.editListOffset = mediaTime;
                        relevantEntryFound = true;
                    }
                }
                ;
                break;
            case 'mdhd':
                {
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track);
                    const version = this.metadataReader.readU8();
                    this.metadataReader.pos += 3; // Flags
                    if (version === 0) {
                        this.metadataReader.pos += 8;
                        track.timescale = this.metadataReader.readU32();
                        track.durationInMediaTimescale = this.metadataReader.readU32();
                    } else if (version === 1) {
                        this.metadataReader.pos += 16;
                        track.timescale = this.metadataReader.readU32();
                        track.durationInMediaTimescale = this.metadataReader.readU64();
                    }
                    let language = this.metadataReader.readU16();
                    if (language > 0) {
                        track.languageCode = '';
                        for(let i = 0; i < 3; i++){
                            track.languageCode = String.fromCharCode(0x60 + (language & 0b11111)) + track.languageCode;
                            language >>= 5;
                        }
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIso639Dash2LanguageCode"])(track.languageCode)) {
                            // Sometimes the bytes are garbage
                            track.languageCode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNDETERMINED_LANGUAGE"];
                        }
                    }
                }
                ;
                break;
            case 'hdlr':
                {
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track);
                    this.metadataReader.pos += 8; // Version + flags + pre-defined
                    const handlerType = this.metadataReader.readAscii(4);
                    if (handlerType === 'vide') {
                        track.info = {
                            type: 'video',
                            width: -1,
                            height: -1,
                            codec: null,
                            codecDescription: null,
                            colorSpace: null,
                            avcCodecInfo: null,
                            hevcCodecInfo: null,
                            vp9CodecInfo: null,
                            av1CodecInfo: null
                        };
                    } else if (handlerType === 'soun') {
                        track.info = {
                            type: 'audio',
                            numberOfChannels: -1,
                            sampleRate: -1,
                            codec: null,
                            codecDescription: null,
                            aacCodecInfo: null
                        };
                    }
                }
                ;
                break;
            case 'stbl':
                {
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track);
                    track.sampleTableByteOffset = startPos;
                    this.readContiguousBoxes(boxInfo.contentSize);
                }
                ;
                break;
            case 'stsd':
                {
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track);
                    if (track.info === null || track.sampleTable) {
                        break;
                    }
                    const stsdVersion = this.metadataReader.readU8();
                    this.metadataReader.pos += 3; // Flags
                    const entries = this.metadataReader.readU32();
                    for(let i = 0; i < entries; i++){
                        const startPos = this.metadataReader.pos;
                        const sampleBoxInfo = this.metadataReader.readBoxHeader();
                        if (!sampleBoxInfo) {
                            break;
                        }
                        const lowercaseBoxName = sampleBoxInfo.name.toLowerCase();
                        if (track.info.type === 'video') {
                            if (lowercaseBoxName === 'avc1') {
                                track.info.codec = 'avc';
                            } else if (lowercaseBoxName === 'hvc1' || lowercaseBoxName === 'hev1') {
                                track.info.codec = 'hevc';
                            } else if (lowercaseBoxName === 'vp08') {
                                track.info.codec = 'vp8';
                            } else if (lowercaseBoxName === 'vp09') {
                                track.info.codec = 'vp9';
                            } else if (lowercaseBoxName === 'av01') {
                                track.info.codec = 'av1';
                            } else {
                                console.warn("Unsupported video codec (sample entry type '".concat(sampleBoxInfo.name, "')."));
                            }
                            this.metadataReader.pos += 6 * 1 + 2 + 2 + 2 + 3 * 4;
                            track.info.width = this.metadataReader.readU16();
                            track.info.height = this.metadataReader.readU16();
                            this.metadataReader.pos += 4 + 4 + 4 + 2 + 32 + 2 + 2;
                            this.readContiguousBoxes(startPos + sampleBoxInfo.totalSize - this.metadataReader.pos);
                        } else {
                            if (lowercaseBoxName === 'mp4a') {
                            // We don't know the codec yet (might be AAC, might be MP3), need to read the esds box
                            } else if (lowercaseBoxName === 'opus') {
                                track.info.codec = 'opus';
                            } else if (lowercaseBoxName === 'flac') {
                                track.info.codec = 'flac';
                            } else if (lowercaseBoxName === 'twos' || lowercaseBoxName === 'sowt' || lowercaseBoxName === 'raw ' || lowercaseBoxName === 'in24' || lowercaseBoxName === 'in32' || lowercaseBoxName === 'fl32' || lowercaseBoxName === 'fl64' || lowercaseBoxName === 'lpcm' || lowercaseBoxName === 'ipcm' // ISO/IEC 23003-5
                             || lowercaseBoxName === 'fpcm' // "
                            ) {
                            // It's PCM
                            // developer.apple.com/documentation/quicktime-file-format/sound_sample_descriptions/
                            } else if (lowercaseBoxName === 'ulaw') {
                                track.info.codec = 'ulaw';
                            } else if (lowercaseBoxName === 'alaw') {
                                track.info.codec = 'alaw';
                            } else {
                                console.warn("Unsupported audio codec (sample entry type '".concat(sampleBoxInfo.name, "')."));
                            }
                            this.metadataReader.pos += 6 * 1 + 2;
                            const version = this.metadataReader.readU16();
                            this.metadataReader.pos += 3 * 2;
                            let channelCount = this.metadataReader.readU16();
                            let sampleSize = this.metadataReader.readU16();
                            this.metadataReader.pos += 2 * 2;
                            // Can't use fixed16_16 as that's signed
                            let sampleRate = this.metadataReader.readU32() / 0x10000;
                            if (stsdVersion === 0 && version > 0) {
                                // Additional QuickTime fields
                                if (version === 1) {
                                    this.metadataReader.pos += 4;
                                    sampleSize = 8 * this.metadataReader.readU32();
                                    this.metadataReader.pos += 2 * 4;
                                } else if (version === 2) {
                                    this.metadataReader.pos += 4;
                                    sampleRate = this.metadataReader.readF64();
                                    channelCount = this.metadataReader.readU32();
                                    this.metadataReader.pos += 4; // Always 0x7f000000
                                    sampleSize = this.metadataReader.readU32();
                                    const flags = this.metadataReader.readU32();
                                    this.metadataReader.pos += 2 * 4;
                                    if (lowercaseBoxName === 'lpcm') {
                                        const bytesPerSample = sampleSize + 7 >> 3;
                                        const isFloat = Boolean(flags & 1);
                                        const isBigEndian = Boolean(flags & 2);
                                        const sFlags = flags & 4 ? -1 : 0; // I guess it means "signed flags" or something?
                                        if (sampleSize > 0 && sampleSize <= 64) {
                                            if (isFloat) {
                                                if (sampleSize === 32) {
                                                    track.info.codec = isBigEndian ? 'pcm-f32be' : 'pcm-f32';
                                                }
                                            } else {
                                                if (sFlags & 1 << bytesPerSample - 1) {
                                                    if (bytesPerSample === 1) {
                                                        track.info.codec = 'pcm-s8';
                                                    } else if (bytesPerSample === 2) {
                                                        track.info.codec = isBigEndian ? 'pcm-s16be' : 'pcm-s16';
                                                    } else if (bytesPerSample === 3) {
                                                        track.info.codec = isBigEndian ? 'pcm-s24be' : 'pcm-s24';
                                                    } else if (bytesPerSample === 4) {
                                                        track.info.codec = isBigEndian ? 'pcm-s32be' : 'pcm-s32';
                                                    }
                                                } else {
                                                    if (bytesPerSample === 1) {
                                                        track.info.codec = 'pcm-u8';
                                                    }
                                                }
                                            }
                                        }
                                        if (track.info.codec === null) {
                                            console.warn('Unsupported PCM format.');
                                        }
                                    }
                                }
                            }
                            track.info.numberOfChannels = channelCount;
                            track.info.sampleRate = sampleRate;
                            // PCM codec assignments
                            if (lowercaseBoxName === 'twos') {
                                if (sampleSize === 8) {
                                    track.info.codec = 'pcm-s8';
                                } else if (sampleSize === 16) {
                                    track.info.codec = 'pcm-s16be';
                                } else {
                                    console.warn("Unsupported sample size ".concat(sampleSize, " for codec 'twos'."));
                                    track.info.codec = null;
                                }
                            } else if (lowercaseBoxName === 'sowt') {
                                if (sampleSize === 8) {
                                    track.info.codec = 'pcm-s8';
                                } else if (sampleSize === 16) {
                                    track.info.codec = 'pcm-s16';
                                } else {
                                    console.warn("Unsupported sample size ".concat(sampleSize, " for codec 'sowt'."));
                                    track.info.codec = null;
                                }
                            } else if (lowercaseBoxName === 'raw ') {
                                track.info.codec = 'pcm-u8';
                            } else if (lowercaseBoxName === 'in24') {
                                track.info.codec = 'pcm-s24be';
                            } else if (lowercaseBoxName === 'in32') {
                                track.info.codec = 'pcm-s32be';
                            } else if (lowercaseBoxName === 'fl32') {
                                track.info.codec = 'pcm-f32be';
                            } else if (lowercaseBoxName === 'fl64') {
                                track.info.codec = 'pcm-f64be';
                            } else if (lowercaseBoxName === 'ipcm') {
                                track.info.codec = 'pcm-s16be'; // Placeholder, will be adjusted by the pcmC box
                            } else if (lowercaseBoxName === 'fpcm') {
                                track.info.codec = 'pcm-f32be'; // Placeholder, will be adjusted by the pcmC box
                            }
                            this.readContiguousBoxes(startPos + sampleBoxInfo.totalSize - this.metadataReader.pos);
                        }
                    }
                }
                ;
                break;
            case 'avcC':
                {
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track && track.info);
                    track.info.codecDescription = this.metadataReader.readBytes(boxInfo.contentSize);
                }
                ;
                break;
            case 'hvcC':
                {
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track && track.info);
                    track.info.codecDescription = this.metadataReader.readBytes(boxInfo.contentSize);
                }
                ;
                break;
            case 'vpcC':
                {
                    var _track_info;
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track && ((_track_info = track.info) === null || _track_info === void 0 ? void 0 : _track_info.type) === 'video');
                    this.metadataReader.pos += 4; // Version + flags
                    const profile = this.metadataReader.readU8();
                    const level = this.metadataReader.readU8();
                    const thirdByte = this.metadataReader.readU8();
                    const bitDepth = thirdByte >> 4;
                    const chromaSubsampling = thirdByte >> 1 & 0b111;
                    const videoFullRangeFlag = thirdByte & 1;
                    const colourPrimaries = this.metadataReader.readU8();
                    const transferCharacteristics = this.metadataReader.readU8();
                    const matrixCoefficients = this.metadataReader.readU8();
                    track.info.vp9CodecInfo = {
                        profile,
                        level,
                        bitDepth,
                        chromaSubsampling,
                        videoFullRangeFlag,
                        colourPrimaries,
                        transferCharacteristics,
                        matrixCoefficients
                    };
                }
                ;
                break;
            case 'av1C':
                {
                    var _track_info1;
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track && ((_track_info1 = track.info) === null || _track_info1 === void 0 ? void 0 : _track_info1.type) === 'video');
                    this.metadataReader.pos += 1; // Marker + version
                    const secondByte = this.metadataReader.readU8();
                    const profile = secondByte >> 5;
                    const level = secondByte & 0b11111;
                    const thirdByte = this.metadataReader.readU8();
                    const tier = thirdByte >> 7;
                    const highBitDepth = thirdByte >> 6 & 1;
                    const twelveBit = thirdByte >> 5 & 1;
                    const monochrome = thirdByte >> 4 & 1;
                    const chromaSubsamplingX = thirdByte >> 3 & 1;
                    const chromaSubsamplingY = thirdByte >> 2 & 1;
                    const chromaSamplePosition = thirdByte & 0b11;
                    // Logic from https://aomediacodec.github.io/av1-spec/av1-spec.pdf
                    const bitDepth = profile === 2 && highBitDepth ? twelveBit ? 12 : 10 : highBitDepth ? 10 : 8;
                    track.info.av1CodecInfo = {
                        profile,
                        level,
                        tier,
                        bitDepth,
                        monochrome,
                        chromaSubsamplingX,
                        chromaSubsamplingY,
                        chromaSamplePosition
                    };
                }
                ;
                break;
            case 'colr':
                {
                    var _track_info2;
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track && ((_track_info2 = track.info) === null || _track_info2 === void 0 ? void 0 : _track_info2.type) === 'video');
                    const colourType = this.metadataReader.readAscii(4);
                    if (colourType !== 'nclx') {
                        break;
                    }
                    const colourPrimaries = this.metadataReader.readU16();
                    const transferCharacteristics = this.metadataReader.readU16();
                    const matrixCoefficients = this.metadataReader.readU16();
                    const fullRangeFlag = Boolean(this.metadataReader.readU8() & 0x80);
                    track.info.colorSpace = {
                        primaries: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_PRIMARIES_MAP_INVERSE"][colourPrimaries],
                        transfer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSFER_CHARACTERISTICS_MAP_INVERSE"][transferCharacteristics],
                        matrix: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MATRIX_COEFFICIENTS_MAP_INVERSE"][matrixCoefficients],
                        fullRange: fullRangeFlag
                    };
                }
                ;
                break;
            case 'wave':
                {
                    this.readContiguousBoxes(boxInfo.contentSize);
                }
                ;
                break;
            case 'esds':
                {
                    var _track_info3;
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track && ((_track_info3 = track.info) === null || _track_info3 === void 0 ? void 0 : _track_info3.type) === 'audio');
                    this.metadataReader.pos += 4; // Version + flags
                    const tag = this.metadataReader.readU8();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(tag === 0x03); // ES Descriptor
                    this.metadataReader.readIsomVariableInteger(); // Length
                    this.metadataReader.pos += 2; // ES ID
                    const mixed = this.metadataReader.readU8();
                    const streamDependenceFlag = (mixed & 0x80) !== 0;
                    const urlFlag = (mixed & 0x40) !== 0;
                    const ocrStreamFlag = (mixed & 0x20) !== 0;
                    if (streamDependenceFlag) {
                        this.metadataReader.pos += 2;
                    }
                    if (urlFlag) {
                        const urlLength = this.metadataReader.readU8();
                        this.metadataReader.pos += urlLength;
                    }
                    if (ocrStreamFlag) {
                        this.metadataReader.pos += 2;
                    }
                    const decoderConfigTag = this.metadataReader.readU8();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(decoderConfigTag === 0x04); // DecoderConfigDescriptor
                    const decoderConfigDescriptorLength = this.metadataReader.readIsomVariableInteger(); // Length
                    const payloadStart = this.metadataReader.pos;
                    const objectTypeIndication = this.metadataReader.readU8();
                    if (objectTypeIndication === 0x40 || objectTypeIndication === 0x67) {
                        track.info.codec = 'aac';
                        track.info.aacCodecInfo = {
                            isMpeg2: objectTypeIndication === 0x67
                        };
                    } else if (objectTypeIndication === 0x69 || objectTypeIndication === 0x6b) {
                        track.info.codec = 'mp3';
                    } else if (objectTypeIndication === 0xdd) {
                        track.info.codec = 'vorbis'; // "nonstandard, gpac uses it" - FFmpeg
                    } else {
                        console.warn("Unsupported audio codec (objectTypeIndication ".concat(objectTypeIndication, ") - discarding track."));
                    }
                    this.metadataReader.pos += 1 + 3 + 4 + 4;
                    if (decoderConfigDescriptorLength > this.metadataReader.pos - payloadStart) {
                        // There's a DecoderSpecificInfo at the end, let's read it
                        const decoderSpecificInfoTag = this.metadataReader.readU8();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(decoderSpecificInfoTag === 0x05); // DecoderSpecificInfo
                        const decoderSpecificInfoLength = this.metadataReader.readIsomVariableInteger();
                        track.info.codecDescription = this.metadataReader.readBytes(decoderSpecificInfoLength);
                        if (track.info.codec === 'aac') {
                            // Let's try to deduce more accurate values directly from the AudioSpecificConfig:
                            const audioSpecificConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAacAudioSpecificConfig"])(track.info.codecDescription);
                            if (audioSpecificConfig.numberOfChannels !== null) {
                                track.info.numberOfChannels = audioSpecificConfig.numberOfChannels;
                            }
                            if (audioSpecificConfig.sampleRate !== null) {
                                track.info.sampleRate = audioSpecificConfig.sampleRate;
                            }
                        }
                    }
                }
                ;
                break;
            case 'enda':
                {
                    var _track_info4;
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track && ((_track_info4 = track.info) === null || _track_info4 === void 0 ? void 0 : _track_info4.type) === 'audio');
                    const littleEndian = this.metadataReader.readU16() & 0xff; // 0xff is from FFmpeg
                    if (littleEndian) {
                        if (track.info.codec === 'pcm-s16be') {
                            track.info.codec = 'pcm-s16';
                        } else if (track.info.codec === 'pcm-s24be') {
                            track.info.codec = 'pcm-s24';
                        } else if (track.info.codec === 'pcm-s32be') {
                            track.info.codec = 'pcm-s32';
                        } else if (track.info.codec === 'pcm-f32be') {
                            track.info.codec = 'pcm-f32';
                        } else if (track.info.codec === 'pcm-f64be') {
                            track.info.codec = 'pcm-f64';
                        }
                    }
                }
                ;
                break;
            case 'pcmC':
                {
                    var _track_info5;
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track && ((_track_info5 = track.info) === null || _track_info5 === void 0 ? void 0 : _track_info5.type) === 'audio');
                    this.metadataReader.pos += 1 + 3; // Version + flags
                    // ISO/IEC 23003-5
                    const formatFlags = this.metadataReader.readU8();
                    const isLittleEndian = Boolean(formatFlags & 0x01);
                    const pcmSampleSize = this.metadataReader.readU8();
                    if (track.info.codec === 'pcm-s16be') {
                        // ipcm
                        if (isLittleEndian) {
                            if (pcmSampleSize === 16) {
                                track.info.codec = 'pcm-s16';
                            } else if (pcmSampleSize === 24) {
                                track.info.codec = 'pcm-s24';
                            } else if (pcmSampleSize === 32) {
                                track.info.codec = 'pcm-s32';
                            } else {
                                console.warn("Invalid ipcm sample size ".concat(pcmSampleSize, "."));
                                track.info.codec = null;
                            }
                        } else {
                            if (pcmSampleSize === 16) {
                                track.info.codec = 'pcm-s16be';
                            } else if (pcmSampleSize === 24) {
                                track.info.codec = 'pcm-s24be';
                            } else if (pcmSampleSize === 32) {
                                track.info.codec = 'pcm-s32be';
                            } else {
                                console.warn("Invalid ipcm sample size ".concat(pcmSampleSize, "."));
                                track.info.codec = null;
                            }
                        }
                    } else if (track.info.codec === 'pcm-f32be') {
                        // fpcm
                        if (isLittleEndian) {
                            if (pcmSampleSize === 32) {
                                track.info.codec = 'pcm-f32';
                            } else if (pcmSampleSize === 64) {
                                track.info.codec = 'pcm-f64';
                            } else {
                                console.warn("Invalid fpcm sample size ".concat(pcmSampleSize, "."));
                                track.info.codec = null;
                            }
                        } else {
                            if (pcmSampleSize === 32) {
                                track.info.codec = 'pcm-f32be';
                            } else if (pcmSampleSize === 64) {
                                track.info.codec = 'pcm-f64be';
                            } else {
                                console.warn("Invalid fpcm sample size ".concat(pcmSampleSize, "."));
                                track.info.codec = null;
                            }
                        }
                    }
                    break;
                }
                ;
            case 'dOps':
                {
                    var _track_info6;
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track && ((_track_info6 = track.info) === null || _track_info6 === void 0 ? void 0 : _track_info6.type) === 'audio');
                    this.metadataReader.pos += 1; // Version
                    // https://www.opus-codec.org/docs/opus_in_isobmff.html
                    const outputChannelCount = this.metadataReader.readU8();
                    const preSkip = this.metadataReader.readU16();
                    const inputSampleRate = this.metadataReader.readU32();
                    const outputGain = this.metadataReader.readI16();
                    const channelMappingFamily = this.metadataReader.readU8();
                    let channelMappingTable;
                    if (channelMappingFamily !== 0) {
                        channelMappingTable = this.metadataReader.readBytes(2 + outputChannelCount);
                    } else {
                        channelMappingTable = new Uint8Array(0);
                    }
                    // https://datatracker.ietf.org/doc/html/draft-ietf-codec-oggopus-06
                    const description = new Uint8Array(8 + 1 + 1 + 2 + 4 + 2 + 1 + channelMappingTable.byteLength);
                    const view = new DataView(description.buffer);
                    view.setUint32(0, 0x4f707573, false); // 'Opus'
                    view.setUint32(4, 0x48656164, false); // 'Head'
                    view.setUint8(8, 1); // Version
                    view.setUint8(9, outputChannelCount);
                    view.setUint16(10, preSkip, true);
                    view.setUint32(12, inputSampleRate, true);
                    view.setInt16(16, outputGain, true);
                    view.setUint8(18, channelMappingFamily);
                    description.set(channelMappingTable, 19);
                    track.info.codecDescription = description;
                    track.info.numberOfChannels = outputChannelCount;
                    track.info.sampleRate = inputSampleRate;
                }
                ;
                break;
            case 'dfLa':
                {
                    var _track_info7;
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track && ((_track_info7 = track.info) === null || _track_info7 === void 0 ? void 0 : _track_info7.type) === 'audio');
                    this.metadataReader.pos += 4; // Version + flags
                    // https://datatracker.ietf.org/doc/rfc9639/
                    const BLOCK_TYPE_MASK = 0x7f;
                    const LAST_METADATA_BLOCK_FLAG_MASK = 0x80;
                    const startPos = this.metadataReader.pos;
                    while(this.metadataReader.pos < boxEndPos){
                        const flagAndType = this.metadataReader.readU8();
                        const metadataBlockLength = this.metadataReader.readU24();
                        const type = flagAndType & BLOCK_TYPE_MASK;
                        // It's a STREAMINFO block; let's extract the actual sample rate and channel count
                        if (type === 0) {
                            this.metadataReader.pos += 10;
                            // Extract sample rate
                            const word = this.metadataReader.readU32();
                            const sampleRate = word >>> 12;
                            const numberOfChannels = (word >> 9 & 0b111) + 1;
                            track.info.sampleRate = sampleRate;
                            track.info.numberOfChannels = numberOfChannels;
                            this.metadataReader.pos += 20;
                        } else {
                            // Simply skip ahead to the next block
                            this.metadataReader.pos += metadataBlockLength;
                        }
                        if (flagAndType & LAST_METADATA_BLOCK_FLAG_MASK) {
                            break;
                        }
                    }
                    const endPos = this.metadataReader.pos;
                    this.metadataReader.pos = startPos;
                    const bytes = this.metadataReader.readBytes(endPos - startPos);
                    const description = new Uint8Array(4 + bytes.byteLength);
                    const view = new DataView(description.buffer);
                    view.setUint32(0, 0x664c6143, false); // 'fLaC'
                    description.set(bytes, 4);
                    // Set the codec description to be 'fLaC' + all metadata blocks
                    track.info.codecDescription = description;
                }
                ;
                break;
            case 'stts':
                {
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track);
                    if (!track.sampleTable) {
                        break;
                    }
                    this.metadataReader.pos += 4; // Version + flags
                    const entryCount = this.metadataReader.readU32();
                    let currentIndex = 0;
                    let currentTimestamp = 0;
                    for(let i = 0; i < entryCount; i++){
                        const sampleCount = this.metadataReader.readU32();
                        const sampleDelta = this.metadataReader.readU32();
                        track.sampleTable.sampleTimingEntries.push({
                            startIndex: currentIndex,
                            startDecodeTimestamp: currentTimestamp,
                            count: sampleCount,
                            delta: sampleDelta
                        });
                        currentIndex += sampleCount;
                        currentTimestamp += sampleCount * sampleDelta;
                    }
                }
                ;
                break;
            case 'ctts':
                {
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track);
                    if (!track.sampleTable) {
                        break;
                    }
                    this.metadataReader.pos += 1 + 3; // Version + flags
                    const entryCount = this.metadataReader.readU32();
                    let sampleIndex = 0;
                    for(let i = 0; i < entryCount; i++){
                        const sampleCount = this.metadataReader.readU32();
                        const sampleOffset = this.metadataReader.readI32();
                        track.sampleTable.sampleCompositionTimeOffsets.push({
                            startIndex: sampleIndex,
                            count: sampleCount,
                            offset: sampleOffset
                        });
                        sampleIndex += sampleCount;
                    }
                }
                ;
                break;
            case 'stsz':
                {
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track);
                    if (!track.sampleTable) {
                        break;
                    }
                    this.metadataReader.pos += 4; // Version + flags
                    const sampleSize = this.metadataReader.readU32();
                    const sampleCount = this.metadataReader.readU32();
                    if (sampleSize === 0) {
                        for(let i = 0; i < sampleCount; i++){
                            const sampleSize = this.metadataReader.readU32();
                            track.sampleTable.sampleSizes.push(sampleSize);
                        }
                    } else {
                        track.sampleTable.sampleSizes.push(sampleSize);
                    }
                }
                ;
                break;
            case 'stz2':
                {
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track);
                    if (!track.sampleTable) {
                        break;
                    }
                    this.metadataReader.pos += 4; // Version + flags
                    this.metadataReader.pos += 3; // Reserved
                    const fieldSize = this.metadataReader.readU8(); // in bits
                    const sampleCount = this.metadataReader.readU32();
                    const bytes = this.metadataReader.readBytes(Math.ceil(sampleCount * fieldSize / 8));
                    const bitstream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bitstream"](bytes);
                    for(let i = 0; i < sampleCount; i++){
                        const sampleSize = bitstream.readBits(fieldSize);
                        track.sampleTable.sampleSizes.push(sampleSize);
                    }
                }
                ;
                break;
            case 'stss':
                {
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track);
                    if (!track.sampleTable) {
                        break;
                    }
                    this.metadataReader.pos += 4; // Version + flags
                    track.sampleTable.keySampleIndices = [];
                    const entryCount = this.metadataReader.readU32();
                    for(let i = 0; i < entryCount; i++){
                        const sampleIndex = this.metadataReader.readU32() - 1; // Convert to 0-indexed
                        track.sampleTable.keySampleIndices.push(sampleIndex);
                    }
                    if (track.sampleTable.keySampleIndices[0] !== 0) {
                        // Some files don't mark the first sample a key sample, which is basically almost always incorrect.
                        // Here, we correct for that mistake:
                        track.sampleTable.keySampleIndices.unshift(0);
                    }
                }
                ;
                break;
            case 'stsc':
                {
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track);
                    if (!track.sampleTable) {
                        break;
                    }
                    this.metadataReader.pos += 4;
                    const entryCount = this.metadataReader.readU32();
                    for(let i = 0; i < entryCount; i++){
                        const startChunkIndex = this.metadataReader.readU32() - 1; // Convert to 0-indexed
                        const samplesPerChunk = this.metadataReader.readU32();
                        const sampleDescriptionIndex = this.metadataReader.readU32();
                        track.sampleTable.sampleToChunk.push({
                            startSampleIndex: -1,
                            startChunkIndex,
                            samplesPerChunk,
                            sampleDescriptionIndex
                        });
                    }
                    let startSampleIndex = 0;
                    for(let i = 0; i < track.sampleTable.sampleToChunk.length; i++){
                        track.sampleTable.sampleToChunk[i].startSampleIndex = startSampleIndex;
                        if (i < track.sampleTable.sampleToChunk.length - 1) {
                            const nextChunk = track.sampleTable.sampleToChunk[i + 1];
                            const chunkCount = nextChunk.startChunkIndex - track.sampleTable.sampleToChunk[i].startChunkIndex;
                            startSampleIndex += chunkCount * track.sampleTable.sampleToChunk[i].samplesPerChunk;
                        }
                    }
                }
                ;
                break;
            case 'stco':
                {
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track);
                    if (!track.sampleTable) {
                        break;
                    }
                    this.metadataReader.pos += 4; // Version + flags
                    const entryCount = this.metadataReader.readU32();
                    for(let i = 0; i < entryCount; i++){
                        const chunkOffset = this.metadataReader.readU32();
                        track.sampleTable.chunkOffsets.push(chunkOffset);
                    }
                }
                ;
                break;
            case 'co64':
                {
                    const track = this.currentTrack;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track);
                    if (!track.sampleTable) {
                        break;
                    }
                    this.metadataReader.pos += 4; // Version + flags
                    const entryCount = this.metadataReader.readU32();
                    for(let i = 0; i < entryCount; i++){
                        const chunkOffset = this.metadataReader.readU64();
                        track.sampleTable.chunkOffsets.push(chunkOffset);
                    }
                }
                ;
                break;
            case 'mvex':
                {
                    this.isFragmented = true;
                    this.readContiguousBoxes(boxInfo.contentSize);
                }
                ;
                break;
            case 'mehd':
                {
                    const version = this.metadataReader.readU8();
                    this.metadataReader.pos += 3; // Flags
                    const fragmentDuration = version === 1 ? this.metadataReader.readU64() : this.metadataReader.readU32();
                    this.movieDurationInTimescale = fragmentDuration;
                }
                ;
                break;
            case 'trex':
                {
                    this.metadataReader.pos += 4; // Version + flags
                    const trackId = this.metadataReader.readU32();
                    const defaultSampleDescriptionIndex = this.metadataReader.readU32();
                    const defaultSampleDuration = this.metadataReader.readU32();
                    const defaultSampleSize = this.metadataReader.readU32();
                    const defaultSampleFlags = this.metadataReader.readU32();
                    // We store these separately rather than in the tracks since the tracks may not exist yet
                    this.fragmentTrackDefaults.push({
                        trackId,
                        defaultSampleDescriptionIndex,
                        defaultSampleDuration,
                        defaultSampleSize,
                        defaultSampleFlags
                    });
                }
                ;
                break;
            case 'tfra':
                {
                    const version = this.metadataReader.readU8();
                    this.metadataReader.pos += 3; // Flags
                    const trackId = this.metadataReader.readU32();
                    const track = this.tracks.find((x)=>x.id === trackId);
                    if (!track) {
                        break;
                    }
                    track.fragmentLookupTable = [];
                    const word = this.metadataReader.readU32();
                    const lengthSizeOfTrafNum = (word & 0b110000) >> 4;
                    const lengthSizeOfTrunNum = (word & 0b001100) >> 2;
                    const lengthSizeOfSampleNum = word & 0b000011;
                    const x = this.metadataReader;
                    const functions = [
                        x.readU8.bind(x),
                        x.readU16.bind(x),
                        x.readU24.bind(x),
                        x.readU32.bind(x)
                    ];
                    const readTrafNum = functions[lengthSizeOfTrafNum];
                    const readTrunNum = functions[lengthSizeOfTrunNum];
                    const readSampleNum = functions[lengthSizeOfSampleNum];
                    const numberOfEntries = this.metadataReader.readU32();
                    for(let i = 0; i < numberOfEntries; i++){
                        const time = version === 1 ? this.metadataReader.readU64() : this.metadataReader.readU32();
                        const moofOffset = version === 1 ? this.metadataReader.readU64() : this.metadataReader.readU32();
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        const trafNumber = readTrafNum();
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        const trunNumber = readTrunNum();
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        const sampleNumber = readSampleNum();
                        track.fragmentLookupTable.push({
                            timestamp: time,
                            moofOffset
                        });
                    }
                }
                ;
                break;
            case 'moof':
                {
                    this.currentFragment = {
                        moofOffset: startPos,
                        moofSize: boxInfo.totalSize,
                        implicitBaseDataOffset: startPos,
                        trackData: new Map(),
                        dataStart: Infinity,
                        dataEnd: 0,
                        nextFragment: null,
                        isKnownToBeFirstFragment: false
                    };
                    this.readContiguousBoxes(boxInfo.contentSize);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertSorted"])(this.fragments, this.currentFragment, (x)=>x.moofOffset);
                    // Compute the byte range of the sample data in this fragment, so we can load the whole fragment at once
                    for (const [, trackData] of this.currentFragment.trackData){
                        const firstSample = trackData.samples[0];
                        const lastSample = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(trackData.samples);
                        this.currentFragment.dataStart = Math.min(this.currentFragment.dataStart, firstSample.byteOffset);
                        this.currentFragment.dataEnd = Math.max(this.currentFragment.dataEnd, lastSample.byteOffset + lastSample.byteSize);
                    }
                    this.currentFragment = null;
                }
                ;
                break;
            case 'traf':
                {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.currentFragment);
                    this.readContiguousBoxes(boxInfo.contentSize);
                    // It is possible that there is no current track, for example when we don't care about the track
                    // referenced in the track fragment header.
                    if (this.currentTrack) {
                        const trackData = this.currentFragment.trackData.get(this.currentTrack.id);
                        if (trackData) {
                            // We know there is sample data for this track in this fragment, so let's add it to the
                            // track's fragments:
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertSorted"])(this.currentTrack.fragments, this.currentFragment, (x)=>x.moofOffset);
                            const hasKeyFrame = trackData.firstKeyFrameTimestamp !== null;
                            if (hasKeyFrame) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertSorted"])(this.currentTrack.fragmentsWithKeyFrame, this.currentFragment, (x)=>x.moofOffset);
                            }
                            const { currentFragmentState } = this.currentTrack;
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(currentFragmentState);
                            if (currentFragmentState.startTimestamp !== null) {
                                offsetFragmentTrackDataByTimestamp(trackData, currentFragmentState.startTimestamp);
                                trackData.startTimestampIsFinal = true;
                            }
                        }
                        this.currentTrack.currentFragmentState = null;
                        this.currentTrack = null;
                    }
                }
                ;
                break;
            case 'tfhd':
                {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.currentFragment);
                    this.metadataReader.pos += 1; // Version
                    const flags = this.metadataReader.readU24();
                    const baseDataOffsetPresent = Boolean(flags & 0x000001);
                    const sampleDescriptionIndexPresent = Boolean(flags & 0x000002);
                    const defaultSampleDurationPresent = Boolean(flags & 0x000008);
                    const defaultSampleSizePresent = Boolean(flags & 0x000010);
                    const defaultSampleFlagsPresent = Boolean(flags & 0x000020);
                    const durationIsEmpty = Boolean(flags & 0x010000);
                    const defaultBaseIsMoof = Boolean(flags & 0x020000);
                    const trackId = this.metadataReader.readU32();
                    const track = this.tracks.find((x)=>x.id === trackId);
                    if (!track) {
                        break;
                    }
                    const defaults = this.fragmentTrackDefaults.find((x)=>x.trackId === trackId);
                    this.currentTrack = track;
                    var _defaults_defaultSampleDescriptionIndex, _defaults_defaultSampleDuration, _defaults_defaultSampleSize, _defaults_defaultSampleFlags;
                    track.currentFragmentState = {
                        baseDataOffset: this.currentFragment.implicitBaseDataOffset,
                        sampleDescriptionIndex: (_defaults_defaultSampleDescriptionIndex = defaults === null || defaults === void 0 ? void 0 : defaults.defaultSampleDescriptionIndex) !== null && _defaults_defaultSampleDescriptionIndex !== void 0 ? _defaults_defaultSampleDescriptionIndex : null,
                        defaultSampleDuration: (_defaults_defaultSampleDuration = defaults === null || defaults === void 0 ? void 0 : defaults.defaultSampleDuration) !== null && _defaults_defaultSampleDuration !== void 0 ? _defaults_defaultSampleDuration : null,
                        defaultSampleSize: (_defaults_defaultSampleSize = defaults === null || defaults === void 0 ? void 0 : defaults.defaultSampleSize) !== null && _defaults_defaultSampleSize !== void 0 ? _defaults_defaultSampleSize : null,
                        defaultSampleFlags: (_defaults_defaultSampleFlags = defaults === null || defaults === void 0 ? void 0 : defaults.defaultSampleFlags) !== null && _defaults_defaultSampleFlags !== void 0 ? _defaults_defaultSampleFlags : null,
                        startTimestamp: null
                    };
                    if (baseDataOffsetPresent) {
                        track.currentFragmentState.baseDataOffset = this.metadataReader.readU64();
                    } else if (defaultBaseIsMoof) {
                        track.currentFragmentState.baseDataOffset = this.currentFragment.moofOffset;
                    }
                    if (sampleDescriptionIndexPresent) {
                        track.currentFragmentState.sampleDescriptionIndex = this.metadataReader.readU32();
                    }
                    if (defaultSampleDurationPresent) {
                        track.currentFragmentState.defaultSampleDuration = this.metadataReader.readU32();
                    }
                    if (defaultSampleSizePresent) {
                        track.currentFragmentState.defaultSampleSize = this.metadataReader.readU32();
                    }
                    if (defaultSampleFlagsPresent) {
                        track.currentFragmentState.defaultSampleFlags = this.metadataReader.readU32();
                    }
                    if (durationIsEmpty) {
                        track.currentFragmentState.defaultSampleDuration = 0;
                    }
                }
                ;
                break;
            case 'tfdt':
                {
                    const track = this.currentTrack;
                    if (!track) {
                        break;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track.currentFragmentState);
                    // break;
                    const version = this.metadataReader.readU8();
                    this.metadataReader.pos += 3; // Flags
                    const baseMediaDecodeTime = version === 0 ? this.metadataReader.readU32() : this.metadataReader.readU64();
                    track.currentFragmentState.startTimestamp = baseMediaDecodeTime;
                }
                ;
                break;
            case 'trun':
                {
                    const track = this.currentTrack;
                    if (!track) {
                        break;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.currentFragment);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track.currentFragmentState);
                    if (this.currentFragment.trackData.has(track.id)) {
                        console.warn('Can\'t have two trun boxes for the same track in one fragment. Ignoring...');
                        break;
                    }
                    const version = this.metadataReader.readU8();
                    const flags = this.metadataReader.readU24();
                    const dataOffsetPresent = Boolean(flags & 0x000001);
                    const firstSampleFlagsPresent = Boolean(flags & 0x000004);
                    const sampleDurationPresent = Boolean(flags & 0x000100);
                    const sampleSizePresent = Boolean(flags & 0x000200);
                    const sampleFlagsPresent = Boolean(flags & 0x000400);
                    const sampleCompositionTimeOffsetsPresent = Boolean(flags & 0x000800);
                    const sampleCount = this.metadataReader.readU32();
                    let dataOffset = track.currentFragmentState.baseDataOffset;
                    if (dataOffsetPresent) {
                        dataOffset += this.metadataReader.readI32();
                    }
                    let firstSampleFlags = null;
                    if (firstSampleFlagsPresent) {
                        firstSampleFlags = this.metadataReader.readU32();
                    }
                    let currentOffset = dataOffset;
                    if (sampleCount === 0) {
                        // Don't associate the fragment with the track if it has no samples, this simplifies other code
                        this.currentFragment.implicitBaseDataOffset = currentOffset;
                        break;
                    }
                    let currentTimestamp = 0;
                    const trackData = {
                        startTimestamp: 0,
                        endTimestamp: 0,
                        firstKeyFrameTimestamp: null,
                        samples: [],
                        presentationTimestamps: [],
                        startTimestampIsFinal: false
                    };
                    this.currentFragment.trackData.set(track.id, trackData);
                    for(let i = 0; i < sampleCount; i++){
                        let sampleDuration;
                        if (sampleDurationPresent) {
                            sampleDuration = this.metadataReader.readU32();
                        } else {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track.currentFragmentState.defaultSampleDuration !== null);
                            sampleDuration = track.currentFragmentState.defaultSampleDuration;
                        }
                        let sampleSize;
                        if (sampleSizePresent) {
                            sampleSize = this.metadataReader.readU32();
                        } else {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track.currentFragmentState.defaultSampleSize !== null);
                            sampleSize = track.currentFragmentState.defaultSampleSize;
                        }
                        let sampleFlags;
                        if (sampleFlagsPresent) {
                            sampleFlags = this.metadataReader.readU32();
                        } else {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track.currentFragmentState.defaultSampleFlags !== null);
                            sampleFlags = track.currentFragmentState.defaultSampleFlags;
                        }
                        if (i === 0 && firstSampleFlags !== null) {
                            sampleFlags = firstSampleFlags;
                        }
                        let sampleCompositionTimeOffset = 0;
                        if (sampleCompositionTimeOffsetsPresent) {
                            if (version === 0) {
                                sampleCompositionTimeOffset = this.metadataReader.readU32();
                            } else {
                                sampleCompositionTimeOffset = this.metadataReader.readI32();
                            }
                        }
                        const isKeyFrame = !(sampleFlags & 0x00010000);
                        trackData.samples.push({
                            presentationTimestamp: currentTimestamp + sampleCompositionTimeOffset,
                            duration: sampleDuration,
                            byteOffset: currentOffset,
                            byteSize: sampleSize,
                            isKeyFrame
                        });
                        currentOffset += sampleSize;
                        currentTimestamp += sampleDuration;
                    }
                    trackData.presentationTimestamps = trackData.samples.map((x, i)=>({
                            presentationTimestamp: x.presentationTimestamp,
                            sampleIndex: i
                        })).sort((a, b)=>a.presentationTimestamp - b.presentationTimestamp);
                    for(let i = 0; i < trackData.presentationTimestamps.length; i++){
                        const currentEntry = trackData.presentationTimestamps[i];
                        const currentSample = trackData.samples[currentEntry.sampleIndex];
                        if (trackData.firstKeyFrameTimestamp === null && currentSample.isKeyFrame) {
                            trackData.firstKeyFrameTimestamp = currentSample.presentationTimestamp;
                        }
                        if (i < trackData.presentationTimestamps.length - 1) {
                            // Update sample durations based on presentation order
                            const nextEntry = trackData.presentationTimestamps[i + 1];
                            currentSample.duration = nextEntry.presentationTimestamp - currentEntry.presentationTimestamp;
                        }
                    }
                    const firstSample = trackData.samples[trackData.presentationTimestamps[0].sampleIndex];
                    const lastSample = trackData.samples[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(trackData.presentationTimestamps).sampleIndex];
                    trackData.startTimestamp = firstSample.presentationTimestamp;
                    trackData.endTimestamp = lastSample.presentationTimestamp + lastSample.duration;
                    this.currentFragment.implicitBaseDataOffset = currentOffset;
                }
                ;
                break;
        }
        this.metadataReader.pos = boxEndPos;
        return true;
    }
    constructor(input){
        super(input);
        this.currentTrack = null;
        this.tracks = [];
        this.metadataPromise = null;
        this.movieTimescale = -1;
        this.movieDurationInTimescale = -1;
        this.isQuickTime = false;
        this.isFragmented = false;
        this.fragmentTrackDefaults = [];
        this.fragments = [];
        this.currentFragment = null;
        this.fragmentLookupMutex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncMutex"]();
        this.metadataReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsobmffReader"](input._mainReader);
        this.chunkReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsobmffReader"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reader"](input.source, 64 * 2 ** 20)); // Max 64 MiB of stored chunks
    }
}
class IsobmffTrackBacking {
    getId() {
        return this.internalTrack.id;
    }
    getCodec() {
        throw new Error('Not implemented on base class.');
    }
    getLanguageCode() {
        return this.internalTrack.languageCode;
    }
    getTimeResolution() {
        return this.internalTrack.timescale;
    }
    async computeDuration() {
        const lastPacket = await this.getPacket(Infinity, {
            metadataOnly: true
        });
        var _lastPacket_timestamp, _lastPacket_duration;
        return ((_lastPacket_timestamp = lastPacket === null || lastPacket === void 0 ? void 0 : lastPacket.timestamp) !== null && _lastPacket_timestamp !== void 0 ? _lastPacket_timestamp : 0) + ((_lastPacket_duration = lastPacket === null || lastPacket === void 0 ? void 0 : lastPacket.duration) !== null && _lastPacket_duration !== void 0 ? _lastPacket_duration : 0);
    }
    async getFirstTimestamp() {
        const firstPacket = await this.getFirstPacket({
            metadataOnly: true
        });
        var _firstPacket_timestamp;
        return (_firstPacket_timestamp = firstPacket === null || firstPacket === void 0 ? void 0 : firstPacket.timestamp) !== null && _firstPacket_timestamp !== void 0 ? _firstPacket_timestamp : 0;
    }
    async getFirstPacket(options) {
        const regularPacket = await this.fetchPacketForSampleIndex(0, options);
        if (regularPacket || !this.internalTrack.demuxer.isFragmented) {
            // If there's a non-fragmented packet, always prefer that
            return regularPacket;
        }
        return this.performFragmentedLookup(()=>{
            var _this_internalTrack_demuxer_fragments_;
            const startFragment = (_this_internalTrack_demuxer_fragments_ = this.internalTrack.demuxer.fragments[0]) !== null && _this_internalTrack_demuxer_fragments_ !== void 0 ? _this_internalTrack_demuxer_fragments_ : null;
            if (startFragment === null || startFragment === void 0 ? void 0 : startFragment.isKnownToBeFirstFragment) {
                // Walk from the very first fragment in the file until we find one with our track in it
                let currentFragment = startFragment;
                while(currentFragment){
                    const trackData = currentFragment.trackData.get(this.internalTrack.id);
                    if (trackData) {
                        return {
                            fragmentIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(this.internalTrack.fragments, currentFragment.moofOffset, (x)=>x.moofOffset),
                            sampleIndex: 0,
                            correctSampleFound: true
                        };
                    }
                    currentFragment = currentFragment.nextFragment;
                }
            }
            return {
                fragmentIndex: -1,
                sampleIndex: -1,
                correctSampleFound: false
            };
        }, -Infinity, Infinity, options);
    }
    mapTimestampIntoTimescale(timestamp) {
        // Do a little rounding to catch cases where the result is very close to an integer. If it is, it's likely
        // that the number was originally an integer divided by the timescale. For stability, it's best
        // to return the integer in this case.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundToPrecision"])(timestamp * this.internalTrack.timescale, 14) + this.internalTrack.editListOffset;
    }
    async getPacket(timestamp, options) {
        const timestampInTimescale = this.mapTimestampIntoTimescale(timestamp);
        const sampleTable = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack);
        const sampleIndex = getSampleIndexForTimestamp(sampleTable, timestampInTimescale);
        const regularPacket = await this.fetchPacketForSampleIndex(sampleIndex, options);
        if (!sampleTableIsEmpty(sampleTable) || !this.internalTrack.demuxer.isFragmented) {
            // Prefer the non-fragmented packet
            return regularPacket;
        }
        return this.performFragmentedLookup(()=>this.findSampleInFragmentsForTimestamp(timestampInTimescale), timestampInTimescale, timestampInTimescale, options);
    }
    async getNextPacket(packet, options) {
        const regularSampleIndex = this.packetToSampleIndex.get(packet);
        if (regularSampleIndex !== undefined) {
            // Prefer the non-fragmented packet
            return this.fetchPacketForSampleIndex(regularSampleIndex + 1, options);
        }
        const locationInFragment = this.packetToFragmentLocation.get(packet);
        if (locationInFragment === undefined) {
            throw new Error('Packet was not created from this track.');
        }
        const trackData = locationInFragment.fragment.trackData.get(this.internalTrack.id);
        const fragmentIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(this.internalTrack.fragments, locationInFragment.fragment.moofOffset, (x)=>x.moofOffset);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(fragmentIndex !== -1);
        return this.performFragmentedLookup(()=>{
            if (locationInFragment.sampleIndex + 1 < trackData.samples.length) {
                // We can simply take the next sample in the fragment
                return {
                    fragmentIndex,
                    sampleIndex: locationInFragment.sampleIndex + 1,
                    correctSampleFound: true
                };
            } else {
                // Walk the list of fragments until we find the next fragment for this track
                let currentFragment = locationInFragment.fragment;
                while(currentFragment.nextFragment){
                    currentFragment = currentFragment.nextFragment;
                    const trackData = currentFragment.trackData.get(this.internalTrack.id);
                    if (trackData) {
                        const fragmentIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(this.internalTrack.fragments, currentFragment.moofOffset, (x)=>x.moofOffset);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(fragmentIndex !== -1);
                        return {
                            fragmentIndex,
                            sampleIndex: 0,
                            correctSampleFound: true
                        };
                    }
                }
                return {
                    fragmentIndex,
                    sampleIndex: -1,
                    correctSampleFound: false
                };
            }
        }, -Infinity, Infinity, options);
    }
    async getKeyPacket(timestamp, options) {
        const timestampInTimescale = this.mapTimestampIntoTimescale(timestamp);
        const sampleTable = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack);
        const sampleIndex = getSampleIndexForTimestamp(sampleTable, timestampInTimescale);
        const keyFrameSampleIndex = sampleIndex === -1 ? -1 : getRelevantKeyframeIndexForSample(sampleTable, sampleIndex);
        const regularPacket = await this.fetchPacketForSampleIndex(keyFrameSampleIndex, options);
        if (!sampleTableIsEmpty(sampleTable) || !this.internalTrack.demuxer.isFragmented) {
            // Prefer the non-fragmented packet
            return regularPacket;
        }
        return this.performFragmentedLookup(()=>this.findKeySampleInFragmentsForTimestamp(timestampInTimescale), timestampInTimescale, timestampInTimescale, options);
    }
    async getNextKeyPacket(packet, options) {
        const regularSampleIndex = this.packetToSampleIndex.get(packet);
        if (regularSampleIndex !== undefined) {
            // Prefer the non-fragmented packet
            const sampleTable = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack);
            const nextKeyFrameSampleIndex = getNextKeyframeIndexForSample(sampleTable, regularSampleIndex);
            return this.fetchPacketForSampleIndex(nextKeyFrameSampleIndex, options);
        }
        const locationInFragment = this.packetToFragmentLocation.get(packet);
        if (locationInFragment === undefined) {
            throw new Error('Packet was not created from this track.');
        }
        const trackData = locationInFragment.fragment.trackData.get(this.internalTrack.id);
        const fragmentIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(this.internalTrack.fragments, locationInFragment.fragment.moofOffset, (x)=>x.moofOffset);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(fragmentIndex !== -1);
        return this.performFragmentedLookup(()=>{
            const nextKeyFrameIndex = trackData.samples.findIndex((x, i)=>x.isKeyFrame && i > locationInFragment.sampleIndex);
            if (nextKeyFrameIndex !== -1) {
                // We can simply take the next key frame in the fragment
                return {
                    fragmentIndex,
                    sampleIndex: nextKeyFrameIndex,
                    correctSampleFound: true
                };
            } else {
                // Walk the list of fragments until we find the next fragment for this track with a key frame
                let currentFragment = locationInFragment.fragment;
                while(currentFragment.nextFragment){
                    currentFragment = currentFragment.nextFragment;
                    const trackData = currentFragment.trackData.get(this.internalTrack.id);
                    if (trackData && trackData.firstKeyFrameTimestamp !== null) {
                        const fragmentIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(this.internalTrack.fragments, currentFragment.moofOffset, (x)=>x.moofOffset);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(fragmentIndex !== -1);
                        const keyFrameIndex = trackData.samples.findIndex((x)=>x.isKeyFrame);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(keyFrameIndex !== -1); // There must be one
                        return {
                            fragmentIndex,
                            sampleIndex: keyFrameIndex,
                            correctSampleFound: true
                        };
                    }
                }
                return {
                    fragmentIndex,
                    sampleIndex: -1,
                    correctSampleFound: false
                };
            }
        }, -Infinity, Infinity, options);
    }
    async fetchPacketForSampleIndex(sampleIndex, options) {
        if (sampleIndex === -1) {
            return null;
        }
        const sampleTable = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack);
        const sampleInfo = getSampleInfo(sampleTable, sampleIndex);
        if (!sampleInfo) {
            return null;
        }
        let data;
        if (options.metadataOnly) {
            data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLACEHOLDER_DATA"];
        } else {
            // Load the entire chunk
            await this.internalTrack.demuxer.chunkReader.reader.loadRange(sampleInfo.chunkOffset, sampleInfo.chunkOffset + sampleInfo.chunkSize);
            this.internalTrack.demuxer.chunkReader.pos = sampleInfo.sampleOffset;
            data = this.internalTrack.demuxer.chunkReader.readBytes(sampleInfo.sampleSize);
        }
        const timestamp = (sampleInfo.presentationTimestamp - this.internalTrack.editListOffset) / this.internalTrack.timescale;
        const duration = sampleInfo.duration / this.internalTrack.timescale;
        const packet = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"](data, sampleInfo.isKeyFrame ? 'key' : 'delta', timestamp, duration, sampleIndex, sampleInfo.sampleSize);
        this.packetToSampleIndex.set(packet, sampleIndex);
        return packet;
    }
    async fetchPacketInFragment(fragment, sampleIndex, options) {
        if (sampleIndex === -1) {
            return null;
        }
        const trackData = fragment.trackData.get(this.internalTrack.id);
        const fragmentSample = trackData.samples[sampleIndex];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(fragmentSample);
        let data;
        if (options.metadataOnly) {
            data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLACEHOLDER_DATA"];
        } else {
            // Load the entire fragment
            await this.internalTrack.demuxer.chunkReader.reader.loadRange(fragment.dataStart, fragment.dataEnd);
            this.internalTrack.demuxer.chunkReader.pos = fragmentSample.byteOffset;
            data = this.internalTrack.demuxer.chunkReader.readBytes(fragmentSample.byteSize);
        }
        const timestamp = (fragmentSample.presentationTimestamp - this.internalTrack.editListOffset) / this.internalTrack.timescale;
        const duration = fragmentSample.duration / this.internalTrack.timescale;
        const packet = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"](data, fragmentSample.isKeyFrame ? 'key' : 'delta', timestamp, duration, fragment.moofOffset + sampleIndex, fragmentSample.byteSize);
        this.packetToFragmentLocation.set(packet, {
            fragment,
            sampleIndex
        });
        return packet;
    }
    findSampleInFragmentsForTimestamp(timestampInTimescale) {
        const fragmentIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(// This array is technically not sorted by start timestamp, but for any reasonable file, it basically is.
        this.internalTrack.fragments, timestampInTimescale, (x)=>x.trackData.get(this.internalTrack.id).startTimestamp);
        let sampleIndex = -1;
        let correctSampleFound = false;
        if (fragmentIndex !== -1) {
            const fragment = this.internalTrack.fragments[fragmentIndex];
            const trackData = fragment.trackData.get(this.internalTrack.id);
            const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(trackData.presentationTimestamps, timestampInTimescale, (x)=>x.presentationTimestamp);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(index !== -1);
            sampleIndex = trackData.presentationTimestamps[index].sampleIndex;
            correctSampleFound = timestampInTimescale < trackData.endTimestamp;
        }
        return {
            fragmentIndex,
            sampleIndex,
            correctSampleFound
        };
    }
    findKeySampleInFragmentsForTimestamp(timestampInTimescale) {
        const indexInKeyFrameFragments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(// This array is technically not sorted by start timestamp, but for any reasonable file, it basically is.
        this.internalTrack.fragmentsWithKeyFrame, timestampInTimescale, (x)=>x.trackData.get(this.internalTrack.id).startTimestamp);
        let fragmentIndex = -1;
        let sampleIndex = -1;
        let correctSampleFound = false;
        if (indexInKeyFrameFragments !== -1) {
            const fragment = this.internalTrack.fragmentsWithKeyFrame[indexInKeyFrameFragments];
            // Now, let's find the actual index of the fragment in the list of ALL fragments, not just key frame ones
            fragmentIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(this.internalTrack.fragments, fragment.moofOffset, (x)=>x.moofOffset);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(fragmentIndex !== -1);
            const trackData = fragment.trackData.get(this.internalTrack.id);
            const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findLastIndex"])(trackData.presentationTimestamps, (x)=>{
                const sample = trackData.samples[x.sampleIndex];
                return sample.isKeyFrame && x.presentationTimestamp <= timestampInTimescale;
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(index !== -1); // It's a key frame fragment, so there must be a key frame
            const entry = trackData.presentationTimestamps[index];
            sampleIndex = entry.sampleIndex;
            correctSampleFound = timestampInTimescale < trackData.endTimestamp;
        }
        return {
            fragmentIndex,
            sampleIndex,
            correctSampleFound
        };
    }
    /** Looks for a packet in the fragments while trying to load as few fragments as possible to retrieve it. */ async performFragmentedLookup(// This function returns the best-matching sample that is currently loaded. Based on this information, we know
    // which fragments we need to load to find the actual match.
    getBestMatch, // The timestamp with which we can search the lookup table
    searchTimestamp, // The timestamp for which we know the correct sample will not come after it
    latestTimestamp, options) {
        const demuxer = this.internalTrack.demuxer;
        const release = await demuxer.fragmentLookupMutex.acquire(); // The algorithm requires exclusivity
        try {
            const { fragmentIndex, sampleIndex, correctSampleFound } = getBestMatch();
            if (correctSampleFound) {
                // The correct sample already exists, easy path.
                const fragment = this.internalTrack.fragments[fragmentIndex];
                return this.fetchPacketInFragment(fragment, sampleIndex, options);
            }
            const metadataReader = demuxer.metadataReader;
            const sourceSize = await metadataReader.reader.source.getSize();
            let prevFragment = null;
            let bestFragmentIndex = fragmentIndex;
            let bestSampleIndex = sampleIndex;
            // Search for a lookup entry; this way, we won't need to start searching from the start of the file
            // but can jump right into the correct fragment (or at least nearby).
            const lookupEntryIndex = this.internalTrack.fragmentLookupTable ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(this.internalTrack.fragmentLookupTable, searchTimestamp, (x)=>x.timestamp) : -1;
            const lookupEntry = lookupEntryIndex !== -1 ? this.internalTrack.fragmentLookupTable[lookupEntryIndex] : null;
            let nextFragmentIsFirstFragment = false;
            if (fragmentIndex === -1) {
                var _lookupEntry_moofOffset;
                metadataReader.pos = (_lookupEntry_moofOffset = lookupEntry === null || lookupEntry === void 0 ? void 0 : lookupEntry.moofOffset) !== null && _lookupEntry_moofOffset !== void 0 ? _lookupEntry_moofOffset : 0;
                nextFragmentIsFirstFragment = metadataReader.pos === 0;
            } else {
                const fragment = this.internalTrack.fragments[fragmentIndex];
                if (!lookupEntry || fragment.moofOffset >= lookupEntry.moofOffset) {
                    metadataReader.pos = fragment.moofOffset + fragment.moofSize;
                    prevFragment = fragment;
                } else {
                    // Use the lookup entry
                    metadataReader.pos = lookupEntry.moofOffset;
                }
            }
            while(metadataReader.pos < sourceSize){
                if (prevFragment) {
                    const trackData = prevFragment.trackData.get(this.internalTrack.id);
                    if (trackData && trackData.startTimestamp > latestTimestamp) {
                        break;
                    }
                    if (prevFragment.nextFragment) {
                        // Skip ahead quickly without needing to read the file again
                        metadataReader.pos = prevFragment.nextFragment.moofOffset + prevFragment.nextFragment.moofSize;
                        prevFragment = prevFragment.nextFragment;
                        continue;
                    }
                }
                // Load the header
                await metadataReader.reader.loadRange(metadataReader.pos, metadataReader.pos + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_BOX_HEADER_SIZE"]);
                const startPos = metadataReader.pos;
                const boxInfo = metadataReader.readBoxHeader();
                if (!boxInfo) {
                    break;
                }
                if (boxInfo.name === 'moof') {
                    const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(demuxer.fragments, startPos, (x)=>x.moofOffset);
                    let fragment;
                    if (index === -1) {
                        // This is the first time we've seen this fragment
                        metadataReader.pos = startPos;
                        fragment = await demuxer.readFragment();
                    } else {
                        // We already know this fragment
                        fragment = demuxer.fragments[index];
                    }
                    // Even if we already know the fragment, we might not yet know its predecessor, so always do this
                    if (prevFragment) prevFragment.nextFragment = fragment;
                    prevFragment = fragment;
                    if (nextFragmentIsFirstFragment) {
                        fragment.isKnownToBeFirstFragment = true;
                        nextFragmentIsFirstFragment = false;
                    }
                    const { fragmentIndex, sampleIndex, correctSampleFound } = getBestMatch();
                    if (correctSampleFound) {
                        const fragment = this.internalTrack.fragments[fragmentIndex];
                        return this.fetchPacketInFragment(fragment, sampleIndex, options);
                    }
                    if (fragmentIndex !== -1) {
                        bestFragmentIndex = fragmentIndex;
                        bestSampleIndex = sampleIndex;
                    }
                }
                metadataReader.pos = startPos + boxInfo.totalSize;
            }
            let result = null;
            const bestFragment = bestFragmentIndex !== -1 ? this.internalTrack.fragments[bestFragmentIndex] : null;
            if (bestFragment) {
                // If we finished looping but didn't find a perfect match, still return the best match we found
                result = await this.fetchPacketInFragment(bestFragment, bestSampleIndex, options);
            }
            // Catch faulty lookup table entries
            if (!result && lookupEntry && (!bestFragment || bestFragment.moofOffset < lookupEntry.moofOffset)) {
                // The lookup table entry lied to us! We found a lookup entry but no fragment there that satisfied
                // the match. In this case, let's search again but using the lookup entry before that.
                const previousLookupEntry = this.internalTrack.fragmentLookupTable[lookupEntryIndex - 1];
                var _previousLookupEntry_timestamp;
                const newSearchTimestamp = (_previousLookupEntry_timestamp = previousLookupEntry === null || previousLookupEntry === void 0 ? void 0 : previousLookupEntry.timestamp) !== null && _previousLookupEntry_timestamp !== void 0 ? _previousLookupEntry_timestamp : -Infinity;
                return this.performFragmentedLookup(getBestMatch, newSearchTimestamp, latestTimestamp, options);
            }
            return result;
        } finally{
            release();
        }
    }
    constructor(internalTrack){
        this.internalTrack = internalTrack;
        this.packetToSampleIndex = new WeakMap();
        this.packetToFragmentLocation = new WeakMap();
    }
}
class IsobmffVideoTrackBacking extends IsobmffTrackBacking {
    getCodec() {
        return this.internalTrack.info.codec;
    }
    getCodedWidth() {
        return this.internalTrack.info.width;
    }
    getCodedHeight() {
        return this.internalTrack.info.height;
    }
    getRotation() {
        return this.internalTrack.rotation;
    }
    async getColorSpace() {
        var _this_internalTrack_info_colorSpace, _this_internalTrack_info_colorSpace1, _this_internalTrack_info_colorSpace2, _this_internalTrack_info_colorSpace3;
        return {
            primaries: (_this_internalTrack_info_colorSpace = this.internalTrack.info.colorSpace) === null || _this_internalTrack_info_colorSpace === void 0 ? void 0 : _this_internalTrack_info_colorSpace.primaries,
            transfer: (_this_internalTrack_info_colorSpace1 = this.internalTrack.info.colorSpace) === null || _this_internalTrack_info_colorSpace1 === void 0 ? void 0 : _this_internalTrack_info_colorSpace1.transfer,
            matrix: (_this_internalTrack_info_colorSpace2 = this.internalTrack.info.colorSpace) === null || _this_internalTrack_info_colorSpace2 === void 0 ? void 0 : _this_internalTrack_info_colorSpace2.matrix,
            fullRange: (_this_internalTrack_info_colorSpace3 = this.internalTrack.info.colorSpace) === null || _this_internalTrack_info_colorSpace3 === void 0 ? void 0 : _this_internalTrack_info_colorSpace3.fullRange
        };
    }
    async getDecoderConfig() {
        if (!this.internalTrack.info.codec) {
            return null;
        }
        var _this_decoderConfigPromise;
        return (_this_decoderConfigPromise = this.decoderConfigPromise) !== null && _this_decoderConfigPromise !== void 0 ? _this_decoderConfigPromise : this.decoderConfigPromise = (async ()=>{
            if (this.internalTrack.info.codec === 'vp9' && !this.internalTrack.info.vp9CodecInfo) {
                const firstPacket = await this.getFirstPacket({});
                this.internalTrack.info.vp9CodecInfo = firstPacket && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractVp9CodecInfoFromPacket"])(firstPacket.data);
            } else if (this.internalTrack.info.codec === 'av1' && !this.internalTrack.info.av1CodecInfo) {
                const firstPacket = await this.getFirstPacket({});
                this.internalTrack.info.av1CodecInfo = firstPacket && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractAv1CodecInfoFromPacket"])(firstPacket.data);
            }
            var _this_internalTrack_info_codecDescription, _this_internalTrack_info_colorSpace;
            return {
                codec: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractVideoCodecString"])(this.internalTrack.info),
                codedWidth: this.internalTrack.info.width,
                codedHeight: this.internalTrack.info.height,
                description: (_this_internalTrack_info_codecDescription = this.internalTrack.info.codecDescription) !== null && _this_internalTrack_info_codecDescription !== void 0 ? _this_internalTrack_info_codecDescription : undefined,
                colorSpace: (_this_internalTrack_info_colorSpace = this.internalTrack.info.colorSpace) !== null && _this_internalTrack_info_colorSpace !== void 0 ? _this_internalTrack_info_colorSpace : undefined
            };
        })();
    }
    constructor(internalTrack){
        super(internalTrack);
        this.decoderConfigPromise = null;
        this.internalTrack = internalTrack;
    }
}
class IsobmffAudioTrackBacking extends IsobmffTrackBacking {
    getCodec() {
        return this.internalTrack.info.codec;
    }
    getNumberOfChannels() {
        return this.internalTrack.info.numberOfChannels;
    }
    getSampleRate() {
        return this.internalTrack.info.sampleRate;
    }
    async getDecoderConfig() {
        if (!this.internalTrack.info.codec) {
            return null;
        }
        var _this_internalTrack_info_codecDescription, _this_decoderConfig;
        return (_this_decoderConfig = this.decoderConfig) !== null && _this_decoderConfig !== void 0 ? _this_decoderConfig : this.decoderConfig = {
            codec: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractAudioCodecString"])(this.internalTrack.info),
            numberOfChannels: this.internalTrack.info.numberOfChannels,
            sampleRate: this.internalTrack.info.sampleRate,
            description: (_this_internalTrack_info_codecDescription = this.internalTrack.info.codecDescription) !== null && _this_internalTrack_info_codecDescription !== void 0 ? _this_internalTrack_info_codecDescription : undefined
        };
    }
    constructor(internalTrack){
        super(internalTrack);
        this.decoderConfig = null;
        this.internalTrack = internalTrack;
    }
}
const getSampleIndexForTimestamp = (sampleTable, timescaleUnits)=>{
    if (sampleTable.presentationTimestamps) {
        const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(sampleTable.presentationTimestamps, timescaleUnits, (x)=>x.presentationTimestamp);
        if (index === -1) {
            return -1;
        }
        return sampleTable.presentationTimestamps[index].sampleIndex;
    } else {
        const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(sampleTable.sampleTimingEntries, timescaleUnits, (x)=>x.startDecodeTimestamp);
        if (index === -1) {
            return -1;
        }
        const entry = sampleTable.sampleTimingEntries[index];
        return entry.startIndex + Math.min(Math.floor((timescaleUnits - entry.startDecodeTimestamp) / entry.delta), entry.count - 1);
    }
};
const getSampleInfo = (sampleTable, sampleIndex)=>{
    const timingEntryIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(sampleTable.sampleTimingEntries, sampleIndex, (x)=>x.startIndex);
    const timingEntry = sampleTable.sampleTimingEntries[timingEntryIndex];
    if (!timingEntry || timingEntry.startIndex + timingEntry.count <= sampleIndex) {
        return null;
    }
    const decodeTimestamp = timingEntry.startDecodeTimestamp + (sampleIndex - timingEntry.startIndex) * timingEntry.delta;
    let presentationTimestamp = decodeTimestamp;
    const offsetEntryIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(sampleTable.sampleCompositionTimeOffsets, sampleIndex, (x)=>x.startIndex);
    const offsetEntry = sampleTable.sampleCompositionTimeOffsets[offsetEntryIndex];
    if (offsetEntry && sampleIndex - offsetEntry.startIndex < offsetEntry.count) {
        presentationTimestamp += offsetEntry.offset;
    }
    const sampleSize = sampleTable.sampleSizes[Math.min(sampleIndex, sampleTable.sampleSizes.length - 1)];
    const chunkEntryIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(sampleTable.sampleToChunk, sampleIndex, (x)=>x.startSampleIndex);
    const chunkEntry = sampleTable.sampleToChunk[chunkEntryIndex];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(chunkEntry);
    const chunkIndex = chunkEntry.startChunkIndex + Math.floor((sampleIndex - chunkEntry.startSampleIndex) / chunkEntry.samplesPerChunk);
    const chunkOffset = sampleTable.chunkOffsets[chunkIndex];
    const startSampleIndexOfChunk = chunkEntry.startSampleIndex + (chunkIndex - chunkEntry.startChunkIndex) * chunkEntry.samplesPerChunk;
    let chunkSize = 0;
    let sampleOffset = chunkOffset;
    if (sampleTable.sampleSizes.length === 1) {
        sampleOffset += sampleSize * (sampleIndex - startSampleIndexOfChunk);
        chunkSize += sampleSize * chunkEntry.samplesPerChunk;
    } else {
        for(let i = startSampleIndexOfChunk; i < startSampleIndexOfChunk + chunkEntry.samplesPerChunk; i++){
            const sampleSize = sampleTable.sampleSizes[i];
            if (i < sampleIndex) {
                sampleOffset += sampleSize;
            }
            chunkSize += sampleSize;
        }
    }
    let duration = timingEntry.delta;
    if (sampleTable.presentationTimestamps) {
        // In order to accurately compute the duration, we need to take the duration to the next sample in presentation
        // order, not in decode order
        const presentationIndex = sampleTable.presentationTimestampIndexMap[sampleIndex];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(presentationIndex !== undefined);
        if (presentationIndex < sampleTable.presentationTimestamps.length - 1) {
            const nextEntry = sampleTable.presentationTimestamps[presentationIndex + 1];
            const nextPresentationTimestamp = nextEntry.presentationTimestamp;
            duration = nextPresentationTimestamp - presentationTimestamp;
        }
    }
    return {
        presentationTimestamp,
        duration,
        sampleOffset,
        sampleSize,
        chunkOffset,
        chunkSize,
        isKeyFrame: sampleTable.keySampleIndices ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(sampleTable.keySampleIndices, sampleIndex, (x)=>x) !== -1 : true
    };
};
const getRelevantKeyframeIndexForSample = (sampleTable, sampleIndex)=>{
    if (!sampleTable.keySampleIndices) {
        return sampleIndex;
    }
    const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(sampleTable.keySampleIndices, sampleIndex, (x)=>x);
    var _sampleTable_keySampleIndices_index;
    return (_sampleTable_keySampleIndices_index = sampleTable.keySampleIndices[index]) !== null && _sampleTable_keySampleIndices_index !== void 0 ? _sampleTable_keySampleIndices_index : -1;
};
const getNextKeyframeIndexForSample = (sampleTable, sampleIndex)=>{
    if (!sampleTable.keySampleIndices) {
        return sampleIndex + 1;
    }
    const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(sampleTable.keySampleIndices, sampleIndex, (x)=>x);
    var _sampleTable_keySampleIndices_;
    return (_sampleTable_keySampleIndices_ = sampleTable.keySampleIndices[index + 1]) !== null && _sampleTable_keySampleIndices_ !== void 0 ? _sampleTable_keySampleIndices_ : -1;
};
const offsetFragmentTrackDataByTimestamp = (trackData, timestamp)=>{
    trackData.startTimestamp += timestamp;
    trackData.endTimestamp += timestamp;
    for (const sample of trackData.samples){
        sample.presentationTimestamp += timestamp;
    }
    for (const entry of trackData.presentationTimestamps){
        entry.presentationTimestamp += timestamp;
    }
};
/** Extracts the rotation component from a transformation matrix, in degrees. */ const extractRotationFromMatrix = (matrix)=>{
    const [m11, , , m21] = matrix;
    const scaleX = Math.hypot(m11, m21);
    const cosTheta = m11 / scaleX;
    const sinTheta = m21 / scaleX;
    // Invert the rotation because matrices are post-multiplied in ISOBMFF
    return -Math.atan2(sinTheta, cosTheta) * (180 / Math.PI);
};
const sampleTableIsEmpty = (sampleTable)=>{
    return sampleTable.sampleSizes.length === 0;
};
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/matroska/ebml.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ /** Wrapper around a number to be able to differentiate it in the writer. */ __turbopack_context__.s({
    "CODEC_STRING_MAP": ()=>CODEC_STRING_MAP,
    "EBMLFloat32": ()=>EBMLFloat32,
    "EBMLFloat64": ()=>EBMLFloat64,
    "EBMLId": ()=>EBMLId,
    "EBMLReader": ()=>EBMLReader,
    "EBMLSignedInt": ()=>EBMLSignedInt,
    "EBMLWriter": ()=>EBMLWriter,
    "LEVEL_0_AND_1_EBML_IDS": ()=>LEVEL_0_AND_1_EBML_IDS,
    "LEVEL_0_EBML_IDS": ()=>LEVEL_0_EBML_IDS,
    "LEVEL_1_EBML_IDS": ()=>LEVEL_1_EBML_IDS,
    "MAX_HEADER_SIZE": ()=>MAX_HEADER_SIZE,
    "MIN_HEADER_SIZE": ()=>MIN_HEADER_SIZE,
    "assertDefinedSize": ()=>assertDefinedSize,
    "measureSignedInt": ()=>measureSignedInt,
    "measureUnsignedInt": ()=>measureUnsignedInt,
    "measureVarInt": ()=>measureVarInt,
    "readVarInt": ()=>readVarInt
});
class EBMLFloat32 {
    constructor(value){
        this.value = value;
    }
}
class EBMLFloat64 {
    constructor(value){
        this.value = value;
    }
}
class EBMLSignedInt {
    constructor(value){
        this.value = value;
    }
}
var EBMLId;
(function(EBMLId) {
    EBMLId[EBMLId["EBML"] = 440786851] = "EBML";
    EBMLId[EBMLId["EBMLVersion"] = 17030] = "EBMLVersion";
    EBMLId[EBMLId["EBMLReadVersion"] = 17143] = "EBMLReadVersion";
    EBMLId[EBMLId["EBMLMaxIDLength"] = 17138] = "EBMLMaxIDLength";
    EBMLId[EBMLId["EBMLMaxSizeLength"] = 17139] = "EBMLMaxSizeLength";
    EBMLId[EBMLId["DocType"] = 17026] = "DocType";
    EBMLId[EBMLId["DocTypeVersion"] = 17031] = "DocTypeVersion";
    EBMLId[EBMLId["DocTypeReadVersion"] = 17029] = "DocTypeReadVersion";
    EBMLId[EBMLId["SeekHead"] = 290298740] = "SeekHead";
    EBMLId[EBMLId["Seek"] = 19899] = "Seek";
    EBMLId[EBMLId["SeekID"] = 21419] = "SeekID";
    EBMLId[EBMLId["SeekPosition"] = 21420] = "SeekPosition";
    EBMLId[EBMLId["Duration"] = 17545] = "Duration";
    EBMLId[EBMLId["Info"] = 357149030] = "Info";
    EBMLId[EBMLId["TimestampScale"] = 2807729] = "TimestampScale";
    EBMLId[EBMLId["MuxingApp"] = 19840] = "MuxingApp";
    EBMLId[EBMLId["WritingApp"] = 22337] = "WritingApp";
    EBMLId[EBMLId["Tracks"] = 374648427] = "Tracks";
    EBMLId[EBMLId["TrackEntry"] = 174] = "TrackEntry";
    EBMLId[EBMLId["TrackNumber"] = 215] = "TrackNumber";
    EBMLId[EBMLId["TrackUID"] = 29637] = "TrackUID";
    EBMLId[EBMLId["TrackType"] = 131] = "TrackType";
    EBMLId[EBMLId["FlagEnabled"] = 185] = "FlagEnabled";
    EBMLId[EBMLId["FlagDefault"] = 136] = "FlagDefault";
    EBMLId[EBMLId["FlagForced"] = 21930] = "FlagForced";
    EBMLId[EBMLId["FlagLacing"] = 156] = "FlagLacing";
    EBMLId[EBMLId["Language"] = 2274716] = "Language";
    EBMLId[EBMLId["CodecID"] = 134] = "CodecID";
    EBMLId[EBMLId["CodecPrivate"] = 25506] = "CodecPrivate";
    EBMLId[EBMLId["CodecDelay"] = 22186] = "CodecDelay";
    EBMLId[EBMLId["SeekPreRoll"] = 22203] = "SeekPreRoll";
    EBMLId[EBMLId["DefaultDuration"] = 2352003] = "DefaultDuration";
    EBMLId[EBMLId["Video"] = 224] = "Video";
    EBMLId[EBMLId["PixelWidth"] = 176] = "PixelWidth";
    EBMLId[EBMLId["PixelHeight"] = 186] = "PixelHeight";
    EBMLId[EBMLId["Audio"] = 225] = "Audio";
    EBMLId[EBMLId["SamplingFrequency"] = 181] = "SamplingFrequency";
    EBMLId[EBMLId["Channels"] = 159] = "Channels";
    EBMLId[EBMLId["BitDepth"] = 25188] = "BitDepth";
    EBMLId[EBMLId["Segment"] = 408125543] = "Segment";
    EBMLId[EBMLId["SimpleBlock"] = 163] = "SimpleBlock";
    EBMLId[EBMLId["BlockGroup"] = 160] = "BlockGroup";
    EBMLId[EBMLId["Block"] = 161] = "Block";
    EBMLId[EBMLId["BlockAdditions"] = 30113] = "BlockAdditions";
    EBMLId[EBMLId["BlockMore"] = 166] = "BlockMore";
    EBMLId[EBMLId["BlockAdditional"] = 165] = "BlockAdditional";
    EBMLId[EBMLId["BlockAddID"] = 238] = "BlockAddID";
    EBMLId[EBMLId["BlockDuration"] = 155] = "BlockDuration";
    EBMLId[EBMLId["ReferenceBlock"] = 251] = "ReferenceBlock";
    EBMLId[EBMLId["Cluster"] = 524531317] = "Cluster";
    EBMLId[EBMLId["Timestamp"] = 231] = "Timestamp";
    EBMLId[EBMLId["Cues"] = 475249515] = "Cues";
    EBMLId[EBMLId["CuePoint"] = 187] = "CuePoint";
    EBMLId[EBMLId["CueTime"] = 179] = "CueTime";
    EBMLId[EBMLId["CueTrackPositions"] = 183] = "CueTrackPositions";
    EBMLId[EBMLId["CueTrack"] = 247] = "CueTrack";
    EBMLId[EBMLId["CueClusterPosition"] = 241] = "CueClusterPosition";
    EBMLId[EBMLId["Colour"] = 21936] = "Colour";
    EBMLId[EBMLId["MatrixCoefficients"] = 21937] = "MatrixCoefficients";
    EBMLId[EBMLId["TransferCharacteristics"] = 21946] = "TransferCharacteristics";
    EBMLId[EBMLId["Primaries"] = 21947] = "Primaries";
    EBMLId[EBMLId["Range"] = 21945] = "Range";
    EBMLId[EBMLId["Projection"] = 30320] = "Projection";
    EBMLId[EBMLId["ProjectionType"] = 30321] = "ProjectionType";
    EBMLId[EBMLId["ProjectionPoseRoll"] = 30325] = "ProjectionPoseRoll";
    EBMLId[EBMLId["Attachments"] = 423732329] = "Attachments";
    EBMLId[EBMLId["Chapters"] = 272869232] = "Chapters";
    EBMLId[EBMLId["Tags"] = 307544935] = "Tags";
})(EBMLId || (EBMLId = {}));
const LEVEL_0_EBML_IDS = [
    EBMLId.EBML,
    EBMLId.Segment
];
const LEVEL_1_EBML_IDS = [
    EBMLId.SeekHead,
    EBMLId.Info,
    EBMLId.Cluster,
    EBMLId.Tracks,
    EBMLId.Cues,
    EBMLId.Attachments,
    EBMLId.Chapters,
    EBMLId.Tags
];
const LEVEL_0_AND_1_EBML_IDS = [
    ...LEVEL_0_EBML_IDS,
    ...LEVEL_1_EBML_IDS
];
const measureUnsignedInt = (value)=>{
    if (value < 1 << 8) {
        return 1;
    } else if (value < 1 << 16) {
        return 2;
    } else if (value < 1 << 24) {
        return 3;
    } else if (value < 2 ** 32) {
        return 4;
    } else if (value < 2 ** 40) {
        return 5;
    } else {
        return 6;
    }
};
const measureSignedInt = (value)=>{
    if (value >= -(1 << 6) && value < 1 << 6) {
        return 1;
    } else if (value >= -(1 << 13) && value < 1 << 13) {
        return 2;
    } else if (value >= -(1 << 20) && value < 1 << 20) {
        return 3;
    } else if (value >= -(1 << 27) && value < 1 << 27) {
        return 4;
    } else if (value >= -(2 ** 34) && value < 2 ** 34) {
        return 5;
    } else {
        return 6;
    }
};
const measureVarInt = (value)=>{
    if (value < (1 << 7) - 1) {
        /** Top bit is set, leaving 7 bits to hold the integer, but we can't store
         * 127 because "all bits set to one" is a reserved value. Same thing for the
         * other cases below:
         */ return 1;
    } else if (value < (1 << 14) - 1) {
        return 2;
    } else if (value < (1 << 21) - 1) {
        return 3;
    } else if (value < (1 << 28) - 1) {
        return 4;
    } else if (value < 2 ** 35 - 1) {
        return 5;
    } else if (value < 2 ** 42 - 1) {
        return 6;
    } else {
        throw new Error('EBML varint size not supported ' + value);
    }
};
class EBMLWriter {
    writeByte(value) {
        this.helperView.setUint8(0, value);
        this.writer.write(this.helper.subarray(0, 1));
    }
    writeFloat32(value) {
        this.helperView.setFloat32(0, value, false);
        this.writer.write(this.helper.subarray(0, 4));
    }
    writeFloat64(value) {
        this.helperView.setFloat64(0, value, false);
        this.writer.write(this.helper);
    }
    writeUnsignedInt(value) {
        let width = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : measureUnsignedInt(value);
        let pos = 0;
        // Each case falls through:
        switch(width){
            case 6:
                // Need to use division to access >32 bits of floating point var
                this.helperView.setUint8(pos++, value / 2 ** 40 | 0);
            // eslint-disable-next-line no-fallthrough
            case 5:
                this.helperView.setUint8(pos++, value / 2 ** 32 | 0);
            // eslint-disable-next-line no-fallthrough
            case 4:
                this.helperView.setUint8(pos++, value >> 24);
            // eslint-disable-next-line no-fallthrough
            case 3:
                this.helperView.setUint8(pos++, value >> 16);
            // eslint-disable-next-line no-fallthrough
            case 2:
                this.helperView.setUint8(pos++, value >> 8);
            // eslint-disable-next-line no-fallthrough
            case 1:
                this.helperView.setUint8(pos++, value);
                break;
            default:
                throw new Error('Bad unsigned int size ' + width);
        }
        this.writer.write(this.helper.subarray(0, pos));
    }
    writeSignedInt(value) {
        let width = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : measureSignedInt(value);
        if (value < 0) {
            // Two's complement stuff
            value += 2 ** (width * 8);
        }
        this.writeUnsignedInt(value, width);
    }
    writeVarInt(value) {
        let width = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : measureVarInt(value);
        let pos = 0;
        switch(width){
            case 1:
                this.helperView.setUint8(pos++, 1 << 7 | value);
                break;
            case 2:
                this.helperView.setUint8(pos++, 1 << 6 | value >> 8);
                this.helperView.setUint8(pos++, value);
                break;
            case 3:
                this.helperView.setUint8(pos++, 1 << 5 | value >> 16);
                this.helperView.setUint8(pos++, value >> 8);
                this.helperView.setUint8(pos++, value);
                break;
            case 4:
                this.helperView.setUint8(pos++, 1 << 4 | value >> 24);
                this.helperView.setUint8(pos++, value >> 16);
                this.helperView.setUint8(pos++, value >> 8);
                this.helperView.setUint8(pos++, value);
                break;
            case 5:
                /**
                 * JavaScript converts its doubles to 32-bit integers for bitwise
                 * operations, so we need to do a division by 2^32 instead of a
                 * right-shift of 32 to retain those top 3 bits
                 */ this.helperView.setUint8(pos++, 1 << 3 | value / 2 ** 32 & 0x7);
                this.helperView.setUint8(pos++, value >> 24);
                this.helperView.setUint8(pos++, value >> 16);
                this.helperView.setUint8(pos++, value >> 8);
                this.helperView.setUint8(pos++, value);
                break;
            case 6:
                this.helperView.setUint8(pos++, 1 << 2 | value / 2 ** 40 & 0x3);
                this.helperView.setUint8(pos++, value / 2 ** 32 | 0);
                this.helperView.setUint8(pos++, value >> 24);
                this.helperView.setUint8(pos++, value >> 16);
                this.helperView.setUint8(pos++, value >> 8);
                this.helperView.setUint8(pos++, value);
                break;
            default:
                throw new Error('Bad EBML varint size ' + width);
        }
        this.writer.write(this.helper.subarray(0, pos));
    }
    writeAsciiString(str) {
        this.writer.write(new Uint8Array(str.split('').map((x)=>x.charCodeAt(0))));
    }
    writeEBML(data) {
        if (data === null) return;
        if (data instanceof Uint8Array) {
            this.writer.write(data);
        } else if (Array.isArray(data)) {
            for (const elem of data){
                this.writeEBML(elem);
            }
        } else {
            this.offsets.set(data, this.writer.getPos());
            this.writeUnsignedInt(data.id); // ID field
            if (Array.isArray(data.data)) {
                const sizePos = this.writer.getPos();
                var _data_size;
                const sizeSize = data.size === -1 ? 1 : (_data_size = data.size) !== null && _data_size !== void 0 ? _data_size : 4;
                if (data.size === -1) {
                    // Write the reserved all-one-bits marker for unknown/unbounded size.
                    this.writeByte(0xff);
                } else {
                    this.writer.seek(this.writer.getPos() + sizeSize);
                }
                const startPos = this.writer.getPos();
                this.dataOffsets.set(data, startPos);
                this.writeEBML(data.data);
                if (data.size !== -1) {
                    const size = this.writer.getPos() - startPos;
                    const endPos = this.writer.getPos();
                    this.writer.seek(sizePos);
                    this.writeVarInt(size, sizeSize);
                    this.writer.seek(endPos);
                }
            } else if (typeof data.data === 'number') {
                var _data_size1;
                const size = (_data_size1 = data.size) !== null && _data_size1 !== void 0 ? _data_size1 : measureUnsignedInt(data.data);
                this.writeVarInt(size);
                this.writeUnsignedInt(data.data, size);
            } else if (typeof data.data === 'string') {
                this.writeVarInt(data.data.length);
                this.writeAsciiString(data.data);
            } else if (data.data instanceof Uint8Array) {
                this.writeVarInt(data.data.byteLength, data.size);
                this.writer.write(data.data);
            } else if (data.data instanceof EBMLFloat32) {
                this.writeVarInt(4);
                this.writeFloat32(data.data.value);
            } else if (data.data instanceof EBMLFloat64) {
                this.writeVarInt(8);
                this.writeFloat64(data.data.value);
            } else if (data.data instanceof EBMLSignedInt) {
                var _data_size2;
                const size = (_data_size2 = data.size) !== null && _data_size2 !== void 0 ? _data_size2 : measureSignedInt(data.data.value);
                this.writeVarInt(size);
                this.writeSignedInt(data.data.value, size);
            }
        }
    }
    constructor(writer){
        this.writer = writer;
        this.helper = new Uint8Array(8);
        this.helperView = new DataView(this.helper.buffer);
        /**
         * Stores the position from the start of the file to where EBML elements have been written. This is used to
         * rewrite/edit elements that were already added before, and to measure sizes of things.
         */ this.offsets = new WeakMap();
        /** Same as offsets, but stores position where the element's data starts (after ID and size fields). */ this.dataOffsets = new WeakMap();
    }
}
const MAX_VAR_INT_SIZE = 8;
const MIN_HEADER_SIZE = 2; // 1-byte ID and 1-byte size
const MAX_HEADER_SIZE = 2 * MAX_VAR_INT_SIZE; // 8-byte ID and 8-byte size
class EBMLReader {
    readBytes(length) {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + length);
        this.pos += length;
        return new Uint8Array(view.buffer, offset, length);
    }
    readU8() {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + 1);
        this.pos++;
        return view.getUint8(offset);
    }
    readS16() {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + 2);
        this.pos += 2;
        return view.getInt16(offset, false);
    }
    readVarIntSize() {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + 1);
        const firstByte = view.getUint8(offset);
        if (firstByte === 0) {
            return null; // Invalid VINT
        }
        let width = 1;
        let mask = 0x80;
        while((firstByte & mask) === 0){
            width++;
            mask >>= 1;
        }
        return width;
    }
    readVarInt() {
        // Read the first byte to determine the width of the variable-length integer
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + 1);
        const firstByte = view.getUint8(offset);
        if (firstByte === 0) {
            return null; // Invalid VINT
        }
        // Find the position of VINT_MARKER, which determines the width
        let width = 1;
        let mask = 1 << 7;
        while((firstByte & mask) === 0){
            width++;
            mask >>= 1;
        }
        const { view: fullView, offset: fullOffset } = this.reader.getViewAndOffset(this.pos, this.pos + width);
        // First byte's value needs the marker bit cleared
        let value = firstByte & mask - 1;
        // Read remaining bytes
        for(let i = 1; i < width; i++){
            value *= 1 << 8;
            value += fullView.getUint8(fullOffset + i);
        }
        this.pos += width;
        return value;
    }
    readUnsignedInt(width) {
        if (width < 1 || width > 8) {
            throw new Error('Bad unsigned int size ' + width);
        }
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + width);
        let value = 0;
        // Read bytes from most significant to least significant
        for(let i = 0; i < width; i++){
            value *= 1 << 8;
            value += view.getUint8(offset + i);
        }
        this.pos += width;
        return value;
    }
    readSignedInt(width) {
        let value = this.readUnsignedInt(width);
        // If the highest bit is set, convert from two's complement
        if (value & 1 << width * 8 - 1) {
            value -= 2 ** (width * 8);
        }
        return value;
    }
    readFloat(width) {
        if (width === 0) {
            return 0;
        }
        if (width !== 4 && width !== 8) {
            throw new Error('Bad float size ' + width);
        }
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + width);
        const value = width === 4 ? view.getFloat32(offset, false) : view.getFloat64(offset, false);
        this.pos += width;
        return value;
    }
    readAsciiString(length) {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + length);
        this.pos += length;
        // Actual string length might be shorter due to null terminators
        let strLength = 0;
        while(strLength < length && view.getUint8(offset + strLength) !== 0){
            strLength += 1;
        }
        return String.fromCharCode(...new Uint8Array(view.buffer, offset, strLength));
    }
    readElementId() {
        const size = this.readVarIntSize();
        if (size === null) {
            return null;
        }
        const id = this.readUnsignedInt(size);
        return id;
    }
    readElementSize() {
        let size = this.readU8();
        if (size === 0xff) {
            size = null;
        } else {
            this.pos--;
            size = this.readVarInt();
            // In some (livestreamed) files, this is the value of the size field. While this technically is just a very
            // large number, it is intended to behave like the reserved size 0xFF, meaning the size is undefined. We
            // catch the number here. Note that it cannot be perfectly represented as a double, but the comparison works
            // nonetheless.
            // eslint-disable-next-line no-loss-of-precision
            if (size === 0x00ffffffffffffff) {
                size = null;
            }
        }
        return size;
    }
    readElementHeader() {
        const id = this.readElementId();
        if (id === null) {
            return null;
        }
        const size = this.readElementSize();
        return {
            id,
            size
        };
    }
    /** Returns the byte offset in the file of the next element with a matching ID. */ async searchForNextElementId(ids, until) {
        const loadChunkSize = 2 ** 20; // 1 MiB
        const idsSet = new Set(ids);
        while(this.pos <= until - MIN_HEADER_SIZE){
            if (!this.reader.rangeIsLoaded(this.pos, Math.min(this.pos + MAX_HEADER_SIZE, until))) {
                await this.reader.loadRange(this.pos, Math.min(this.pos + loadChunkSize, until));
            }
            const elementStartPos = this.pos;
            const elementHeader = this.readElementHeader();
            if (!elementHeader) {
                break;
            }
            if (idsSet.has(elementHeader.id)) {
                return elementStartPos;
            }
            assertDefinedSize(elementHeader.size);
            this.pos += elementHeader.size;
        }
        return null;
    }
    /** Searches for the next occurrence of an element ID using a naive byte-wise search. */ async resync(ids, until) {
        const loadChunkSize = 2 ** 20; // 1 MiB
        const idsSet = new Set(ids);
        while(this.pos <= until - MIN_HEADER_SIZE){
            if (!this.reader.rangeIsLoaded(this.pos, Math.min(this.pos + MAX_HEADER_SIZE, until))) {
                await this.reader.loadRange(this.pos, Math.min(this.pos + loadChunkSize, until));
            }
            const elementStartPos = this.pos;
            const elementId = this.readElementId();
            if (elementId !== null && idsSet.has(elementId)) {
                return elementStartPos;
            }
            this.pos = elementStartPos + 1;
        }
        return null;
    }
    constructor(reader){
        this.reader = reader;
        this.pos = 0;
    }
}
const CODEC_STRING_MAP = {
    'avc': 'V_MPEG4/ISO/AVC',
    'hevc': 'V_MPEGH/ISO/HEVC',
    'vp8': 'V_VP8',
    'vp9': 'V_VP9',
    'av1': 'V_AV1',
    'aac': 'A_AAC',
    'mp3': 'A_MPEG/L3',
    'opus': 'A_OPUS',
    'vorbis': 'A_VORBIS',
    'flac': 'A_FLAC',
    'pcm-u8': 'A_PCM/INT/LIT',
    'pcm-s16': 'A_PCM/INT/LIT',
    'pcm-s16be': 'A_PCM/INT/BIG',
    'pcm-s24': 'A_PCM/INT/LIT',
    'pcm-s24be': 'A_PCM/INT/BIG',
    'pcm-s32': 'A_PCM/INT/LIT',
    'pcm-s32be': 'A_PCM/INT/BIG',
    'pcm-f32': 'A_PCM/FLOAT/IEEE',
    'pcm-f64': 'A_PCM/FLOAT/IEEE',
    'webvtt': 'S_TEXT/WEBVTT'
};
const readVarInt = (data, offset)=>{
    if (offset >= data.length) {
        throw new Error('Offset out of bounds.');
    }
    // Read the first byte to determine the width of the variable-length integer
    const firstByte = data[offset];
    // Find the position of VINT_MARKER, which determines the width
    let width = 1;
    let mask = 1 << 7;
    while((firstByte & mask) === 0 && width < 8){
        width++;
        mask >>= 1;
    }
    if (offset + width > data.length) {
        throw new Error('VarInt extends beyond data bounds.');
    }
    // First byte's value needs the marker bit cleared
    let value = firstByte & mask - 1;
    // Read remaining bytes
    for(let i = 1; i < width; i++){
        value *= 1 << 8;
        value += data[offset + i];
    }
    return {
        value,
        width
    };
};
function assertDefinedSize(size) {
    if (size === null) {
        throw new Error('Undefined element size is used in a place where it is not supported.');
    }
}
;
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/matroska/matroska-misc.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "buildMatroskaMimeType": ()=>buildMatroskaMimeType
});
const buildMatroskaMimeType = (info)=>{
    const base = info.hasVideo ? 'video/' : info.hasAudio ? 'audio/' : 'application/';
    let string = base + (info.isWebM ? 'webm' : 'x-matroska');
    if (info.codecStrings.length > 0) {
        const uniqueCodecMimeTypes = [
            ...new Set(info.codecStrings.filter(Boolean))
        ];
        string += '; codecs="'.concat(uniqueCodecMimeTypes.join(', '), '"');
    }
    return string;
};
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/matroska/matroska-demuxer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "MatroskaDemuxer": ()=>MatroskaDemuxer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/demuxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/input-track.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/packet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/reader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/matroska/ebml.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$matroska$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/matroska/matroska-misc.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var BlockLacing;
(function(BlockLacing) {
    BlockLacing[BlockLacing["None"] = 0] = "None";
    BlockLacing[BlockLacing["Xiph"] = 1] = "Xiph";
    BlockLacing[BlockLacing["FixedSize"] = 2] = "FixedSize";
    BlockLacing[BlockLacing["Ebml"] = 3] = "Ebml";
})(BlockLacing || (BlockLacing = {}));
const METADATA_ELEMENTS = [
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].SeekHead,
        flag: 'seekHeadSeen'
    },
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Info,
        flag: 'infoSeen'
    },
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Tracks,
        flag: 'tracksSeen'
    },
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Cues,
        flag: 'cuesSeen'
    }
];
const MAX_RESYNC_LENGTH = 10 * 2 ** 20; // 10 MiB
class MatroskaDemuxer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Demuxer"] {
    async computeDuration() {
        const tracks = await this.getTracks();
        const trackDurations = await Promise.all(tracks.map((x)=>x.computeDuration()));
        return Math.max(0, ...trackDurations);
    }
    async getTracks() {
        await this.readMetadata();
        return this.segments.flatMap((segment)=>segment.tracks.map((track)=>track.inputTrack));
    }
    async getMimeType() {
        await this.readMetadata();
        const tracks = await this.getTracks();
        const codecStrings = await Promise.all(tracks.map((x)=>x.getCodecParameterString()));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$matroska$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatroskaMimeType"])({
            isWebM: this.isWebM,
            hasVideo: this.segments.some((segment)=>segment.tracks.some((x)=>{
                    var _x_info;
                    return ((_x_info = x.info) === null || _x_info === void 0 ? void 0 : _x_info.type) === 'video';
                })),
            hasAudio: this.segments.some((segment)=>segment.tracks.some((x)=>{
                    var _x_info;
                    return ((_x_info = x.info) === null || _x_info === void 0 ? void 0 : _x_info.type) === 'audio';
                })),
            codecStrings: codecStrings.filter(Boolean)
        });
    }
    readMetadata() {
        var _this_readMetadataPromise;
        return (_this_readMetadataPromise = this.readMetadataPromise) !== null && _this_readMetadataPromise !== void 0 ? _this_readMetadataPromise : this.readMetadataPromise = (async ()=>{
            this.metadataReader.pos = 0;
            const fileSize = await this.input.source.getSize();
            // Loop over all top-level elements in the file
            while(this.metadataReader.pos <= fileSize - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEADER_SIZE"]){
                await this.metadataReader.reader.loadRange(this.metadataReader.pos, this.metadataReader.pos + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEADER_SIZE"]);
                const header = this.metadataReader.readElementHeader();
                if (!header) {
                    break; // Zero padding at the end of the file triggers this, for example
                }
                const id = header.id;
                let size = header.size;
                const startPos = this.metadataReader.pos;
                if (id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].EBML) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertDefinedSize"])(size);
                    await this.metadataReader.reader.loadRange(this.metadataReader.pos, this.metadataReader.pos + size);
                    this.readContiguousElements(this.metadataReader, size);
                } else if (id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Segment) {
                    await this.readSegment(size);
                    if (size === null) {
                        break;
                    }
                } else if (id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Cluster) {
                    // Clusters are not a top-level element in Matroska, but some files contain a Segment whose size
                    // doesn't contain any of the clusters that follow it. In the case, we apply the following logic: if
                    // we find a top-level cluster, attribute it to the previous segment.
                    if (size === null) {
                        // Just in case this is one of those weird sizeless clusters, let's do our best and still try to
                        // determine its size.
                        const nextElementPos = await this.clusterReader.searchForNextElementId(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVEL_0_AND_1_EBML_IDS"], fileSize);
                        size = (nextElementPos !== null && nextElementPos !== void 0 ? nextElementPos : fileSize) - startPos;
                    }
                    const lastSegment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(this.segments);
                    if (lastSegment) {
                        // Extend the previous segment's size
                        lastSegment.elementEndPos = startPos + size;
                    }
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertDefinedSize"])(size);
                this.metadataReader.pos = startPos + size;
            }
        })();
    }
    async readSegment(dataSize) {
        const segmentDataStart = this.metadataReader.pos;
        this.currentSegment = {
            seekHeadSeen: false,
            infoSeen: false,
            tracksSeen: false,
            cuesSeen: false,
            timestampScale: -1,
            timestampFactor: -1,
            duration: -1,
            seekEntries: [],
            tracks: [],
            cuePoints: [],
            dataStartPos: segmentDataStart,
            elementEndPos: dataSize === null ? await this.input.source.getSize() // Assume it goes until the end of the file
             : segmentDataStart + dataSize,
            clusterSeekStartPos: segmentDataStart,
            clusters: [],
            clusterLookupMutex: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncMutex"]()
        };
        this.segments.push(this.currentSegment);
        // Let's load a good amount of data, enough for all segment metadata to likely fit into (minus cues)
        await this.metadataReader.reader.loadRange(this.metadataReader.pos, this.metadataReader.pos + 2 ** 14);
        let clusterEncountered = false;
        while(this.metadataReader.pos <= this.currentSegment.elementEndPos - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEADER_SIZE"]){
            await this.metadataReader.reader.loadRange(this.metadataReader.pos, this.metadataReader.pos + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEADER_SIZE"]);
            const elementStartPos = this.metadataReader.pos;
            const header = this.metadataReader.readElementHeader();
            if (!header || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVEL_1_EBML_IDS"].includes(header.id)) {
                // Potential junk. Let's try to resync
                this.metadataReader.pos = elementStartPos;
                const nextPos = await this.metadataReader.resync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVEL_1_EBML_IDS"], Math.min(this.currentSegment.elementEndPos, this.metadataReader.pos + MAX_RESYNC_LENGTH));
                if (nextPos) {
                    this.metadataReader.pos = nextPos;
                    continue;
                } else {
                    break; // Resync failed
                }
            }
            const { id, size } = header;
            const dataStartPos = this.metadataReader.pos;
            const metadataElementIndex = METADATA_ELEMENTS.findIndex((x)=>x.id === id);
            if (metadataElementIndex !== -1) {
                const field = METADATA_ELEMENTS[metadataElementIndex].flag;
                this.currentSegment[field] = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertDefinedSize"])(size);
                await this.metadataReader.reader.loadRange(this.metadataReader.pos, this.metadataReader.pos + size);
                this.readContiguousElements(this.metadataReader, size);
            } else if (id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Cluster) {
                if (!clusterEncountered) {
                    clusterEncountered = true;
                    this.currentSegment.clusterSeekStartPos = elementStartPos;
                }
            }
            if (size !== null) {
                this.metadataReader.pos = dataStartPos + size;
            }
            if (this.currentSegment.infoSeen && this.currentSegment.tracksSeen && this.currentSegment.cuesSeen) {
                break;
            }
            if (this.currentSegment.seekHeadSeen) {
                let hasInfo = this.currentSegment.infoSeen;
                let hasTracks = this.currentSegment.tracksSeen;
                let hasCues = this.currentSegment.cuesSeen;
                for (const entry of this.currentSegment.seekEntries){
                    if (entry.id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Info) {
                        hasInfo = true;
                    } else if (entry.id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Tracks) {
                        hasTracks = true;
                    } else if (entry.id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Cues) {
                        hasCues = true;
                    }
                }
                if (hasInfo && hasTracks && hasCues) {
                    break;
                }
            }
            if (size === null) {
                break;
            }
        }
        if (!clusterEncountered) {
            const seekEntry = this.currentSegment.seekEntries.find((entry)=>entry.id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Cluster);
            if (seekEntry) {
                // The seek head points us to the first cluster, nice
                this.currentSegment.clusterSeekStartPos = segmentDataStart + seekEntry.segmentPosition;
            } else {
                this.currentSegment.clusterSeekStartPos = this.metadataReader.pos;
            }
        }
        // Use the seek head to read missing metadata elements
        for (const target of METADATA_ELEMENTS){
            if (this.currentSegment[target.flag]) continue;
            const seekEntry = this.currentSegment.seekEntries.find((entry)=>entry.id === target.id);
            if (!seekEntry) continue;
            this.metadataReader.pos = segmentDataStart + seekEntry.segmentPosition;
            await this.metadataReader.reader.loadRange(this.metadataReader.pos, this.metadataReader.pos + 2 ** 12);
            const header = this.metadataReader.readElementHeader();
            if (!header) continue;
            const { id, size } = header;
            if (id !== target.id) continue;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertDefinedSize"])(size);
            this.currentSegment[target.flag] = true;
            await this.metadataReader.reader.loadRange(this.metadataReader.pos, this.metadataReader.pos + size);
            this.readContiguousElements(this.metadataReader, size);
        }
        if (this.currentSegment.timestampScale === -1) {
            // TimestampScale element is missing. Technically an invalid file, but let's default to the typical value,
            // which is 1e6.
            this.currentSegment.timestampScale = 1e6;
            this.currentSegment.timestampFactor = 1e9 / 1e6;
        }
        // Put default tracks first
        this.currentSegment.tracks.sort((a, b)=>Number(b.isDefault) - Number(a.isDefault));
        // Sort cue points by cluster position (required for the next algorithm)
        this.currentSegment.cuePoints.sort((a, b)=>a.clusterPosition - b.clusterPosition);
        // Now, let's distribute the cue points to each track. Ideally, each track has their own cue point, but some
        // Matroska files may only specify cue points for a single track. In this case, we still wanna use those cue
        // points for all tracks.
        const allTrackIds = this.currentSegment.tracks.map((x)=>x.id);
        const remainingTrackIds = new Set();
        let lastClusterPosition = null;
        let lastCuePoint = null;
        for (const cuePoint of this.currentSegment.cuePoints){
            if (cuePoint.clusterPosition !== lastClusterPosition) {
                for (const id of remainingTrackIds){
                    // These tracks didn't receive a cue point for the last cluster, so let's give them one
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(lastCuePoint);
                    const track = this.currentSegment.tracks.find((x)=>x.id === id);
                    track.cuePoints.push(lastCuePoint);
                }
                for (const id of allTrackIds){
                    remainingTrackIds.add(id);
                }
            }
            lastCuePoint = cuePoint;
            if (!remainingTrackIds.has(cuePoint.trackId)) {
                continue;
            }
            const track = this.currentSegment.tracks.find((x)=>x.id === cuePoint.trackId);
            track.cuePoints.push(cuePoint);
            remainingTrackIds.delete(cuePoint.trackId);
            lastClusterPosition = cuePoint.clusterPosition;
        }
        for (const id of remainingTrackIds){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(lastCuePoint);
            const track = this.currentSegment.tracks.find((x)=>x.id === id);
            track.cuePoints.push(lastCuePoint);
        }
        for (const track of this.currentSegment.tracks){
            // Sort cue points by time
            track.cuePoints.sort((a, b)=>a.time - b.time);
        }
        this.currentSegment = null;
    }
    async readCluster(segment) {
        await this.metadataReader.reader.loadRange(this.metadataReader.pos, this.metadataReader.pos + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEADER_SIZE"]);
        const elementStartPos = this.metadataReader.pos;
        const elementHeader = this.metadataReader.readElementHeader();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(elementHeader);
        const id = elementHeader.id;
        let size = elementHeader.size;
        const dataStartPos = this.metadataReader.pos;
        if (size === null) {
            // The cluster's size is undefined (can happen in livestreamed files). We'd still like to know the size of
            // it, so we have no other choice but to iterate over the EBML structure until we find an element at level
            // 0 or 1, indicating the end of the cluster (all elements inside the cluster are at level 2).
            this.clusterReader.pos = dataStartPos;
            const nextElementPos = await this.clusterReader.searchForNextElementId(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVEL_0_AND_1_EBML_IDS"], segment.elementEndPos);
            size = (nextElementPos !== null && nextElementPos !== void 0 ? nextElementPos : segment.elementEndPos) - dataStartPos;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Cluster);
        // Load the entire cluster
        this.clusterReader.pos = dataStartPos;
        await this.clusterReader.reader.loadRange(this.clusterReader.pos, this.clusterReader.pos + size);
        const cluster = {
            elementStartPos,
            elementEndPos: dataStartPos + size,
            dataStartPos,
            timestamp: -1,
            trackData: new Map(),
            nextCluster: null,
            isKnownToBeFirstCluster: false
        };
        this.currentCluster = cluster;
        this.readContiguousElements(this.clusterReader, size);
        for (const [trackId, trackData] of cluster.trackData){
            var _segment_tracks_find;
            const track = (_segment_tracks_find = segment.tracks.find((x)=>x.id === trackId)) !== null && _segment_tracks_find !== void 0 ? _segment_tracks_find : null;
            // This must hold, as track datas only get created if a block for that track is encountered
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(trackData.blocks.length > 0);
            let blockReferencesExist = false;
            let hasLacedBlocks = false;
            for(let i = 0; i < trackData.blocks.length; i++){
                const block = trackData.blocks[i];
                block.timestamp += cluster.timestamp;
                blockReferencesExist || (blockReferencesExist = block.referencedTimestamps.length > 0);
                hasLacedBlocks || (hasLacedBlocks = block.lacing !== BlockLacing.None);
            }
            if (blockReferencesExist) {
                trackData.blocks = sortBlocksByReferences(trackData.blocks);
            }
            trackData.presentationTimestamps = trackData.blocks.map((block, i)=>({
                    timestamp: block.timestamp,
                    blockIndex: i
                })).sort((a, b)=>a.timestamp - b.timestamp);
            for(let i = 0; i < trackData.presentationTimestamps.length; i++){
                const currentEntry = trackData.presentationTimestamps[i];
                const currentBlock = trackData.blocks[currentEntry.blockIndex];
                if (trackData.firstKeyFrameTimestamp === null && currentBlock.isKeyFrame) {
                    trackData.firstKeyFrameTimestamp = currentBlock.timestamp;
                }
                if (i < trackData.presentationTimestamps.length - 1) {
                    // Update block durations based on presentation order
                    const nextEntry = trackData.presentationTimestamps[i + 1];
                    currentBlock.duration = nextEntry.timestamp - currentBlock.timestamp;
                } else if (currentBlock.duration === 0) {
                    if ((track === null || track === void 0 ? void 0 : track.defaultDuration) != null) {
                        if (currentBlock.lacing === BlockLacing.None) {
                            currentBlock.duration = track.defaultDuration;
                        } else {
                        // Handled by the lace resolution code
                        }
                    }
                }
            }
            if (hasLacedBlocks) {
                // Perform lace resolution. Here, we expand each laced block into multiple blocks where each contains
                // one frame of the lace. We do this after determining block timestamps so we can properly distribute
                // the block's duration across the laced frames.
                this.expandLacedBlocks(trackData.blocks, track);
                // Recompute since blocks have changed
                trackData.presentationTimestamps = trackData.blocks.map((block, i)=>({
                        timestamp: block.timestamp,
                        blockIndex: i
                    })).sort((a, b)=>a.timestamp - b.timestamp);
            }
            const firstBlock = trackData.blocks[trackData.presentationTimestamps[0].blockIndex];
            const lastBlock = trackData.blocks[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(trackData.presentationTimestamps).blockIndex];
            trackData.startTimestamp = firstBlock.timestamp;
            trackData.endTimestamp = lastBlock.timestamp + lastBlock.duration;
            if (track) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertSorted"])(track.clusters, cluster, (x)=>x.elementStartPos);
                const hasKeyFrame = trackData.firstKeyFrameTimestamp !== null;
                if (hasKeyFrame) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertSorted"])(track.clustersWithKeyFrame, cluster, (x)=>x.elementStartPos);
                }
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertSorted"])(segment.clusters, cluster, (x)=>x.elementStartPos);
        this.currentCluster = null;
        return cluster;
    }
    getTrackDataInCluster(cluster, trackNumber) {
        let trackData = cluster.trackData.get(trackNumber);
        if (!trackData) {
            trackData = {
                startTimestamp: 0,
                endTimestamp: 0,
                firstKeyFrameTimestamp: null,
                blocks: [],
                presentationTimestamps: []
            };
            cluster.trackData.set(trackNumber, trackData);
        }
        return trackData;
    }
    expandLacedBlocks(blocks, track) {
        // https://www.matroska.org/technical/notes.html#block-lacing
        for(let blockIndex = 0; blockIndex < blocks.length; blockIndex++){
            const originalBlock = blocks[blockIndex];
            if (originalBlock.lacing === BlockLacing.None) {
                continue;
            }
            const data = originalBlock.data;
            let pos = 0;
            const frameSizes = [];
            const frameCount = data[pos] + 1;
            pos++;
            switch(originalBlock.lacing){
                case BlockLacing.Xiph:
                    {
                        let totalUsedSize = 0;
                        // Xiph lacing, just like in Ogg
                        for(let i = 0; i < frameCount - 1; i++){
                            let frameSize = 0;
                            while(pos < data.length){
                                const value = data[pos];
                                frameSize += value;
                                pos++;
                                if (value < 255) {
                                    frameSizes.push(frameSize);
                                    totalUsedSize += frameSize;
                                    break;
                                }
                            }
                        }
                        // Compute the last frame's size from whatever's left
                        frameSizes.push(data.length - (pos + totalUsedSize));
                    }
                    ;
                    break;
                case BlockLacing.FixedSize:
                    {
                        // Fixed size lacing: all frames have same size
                        const totalDataSize = data.length - 1; // Minus the frame count byte
                        const frameSize = Math.floor(totalDataSize / frameCount);
                        for(let i = 0; i < frameCount; i++){
                            frameSizes.push(frameSize);
                        }
                    }
                    ;
                    break;
                case BlockLacing.Ebml:
                    {
                        // EBML lacing: first size absolute, subsequent ones are coded as signed differences from the last
                        const firstResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarInt"])(data, pos);
                        let currentSize = firstResult.value;
                        frameSizes.push(currentSize);
                        pos += firstResult.width;
                        let totalUsedSize = currentSize;
                        for(let i = 1; i < frameCount - 1; i++){
                            const diffResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readVarInt"])(data, pos);
                            const unsignedDiff = diffResult.value;
                            const bias = (1 << diffResult.width * 7 - 1) - 1; // Typo-corrected version of 2^((7*n)-1)^-1
                            const diff = unsignedDiff - bias;
                            currentSize += diff;
                            frameSizes.push(currentSize);
                            pos += diffResult.width;
                            totalUsedSize += currentSize;
                        }
                        // Compute the last frame's size from whatever's left
                        frameSizes.push(data.length - (pos + totalUsedSize));
                    }
                    ;
                    break;
                default:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(frameSizes.length === frameCount);
            blocks.splice(blockIndex, 1); // Remove the original block
            let dataOffset = pos;
            // Now, let's insert each frame as its own block
            for(let i = 0; i < frameCount; i++){
                const frameSize = frameSizes[i];
                const frameData = data.subarray(dataOffset, dataOffset + frameSize);
                var _track_defaultDuration;
                const blockDuration = originalBlock.duration || frameCount * ((_track_defaultDuration = track === null || track === void 0 ? void 0 : track.defaultDuration) !== null && _track_defaultDuration !== void 0 ? _track_defaultDuration : 0);
                // Distribute timestamps evenly across the block duration
                const frameTimestamp = originalBlock.timestamp + blockDuration * i / frameCount;
                const frameDuration = blockDuration / frameCount;
                blocks.splice(blockIndex + i, 0, {
                    timestamp: frameTimestamp,
                    duration: frameDuration,
                    isKeyFrame: originalBlock.isKeyFrame,
                    referencedTimestamps: originalBlock.referencedTimestamps,
                    data: frameData,
                    lacing: BlockLacing.None
                });
                dataOffset += frameSize;
            }
            blockIndex += frameCount; // Skip the blocks we just added
            blockIndex--;
        }
    }
    readContiguousElements(reader, totalSize) {
        const startIndex = reader.pos;
        while(reader.pos - startIndex <= totalSize - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEADER_SIZE"]){
            const foundElement = this.traverseElement(reader);
            if (!foundElement) {
                break;
            }
        }
    }
    traverseElement(reader) {
        const header = reader.readElementHeader();
        if (!header) {
            return false;
        }
        const { id, size } = header;
        const dataStartPos = reader.pos;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertDefinedSize"])(size);
        switch(id){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].DocType:
                {
                    this.isWebM = reader.readAsciiString(size) === 'webm';
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Seek:
                {
                    if (!this.currentSegment) break;
                    const seekEntry = {
                        id: -1,
                        segmentPosition: -1
                    };
                    this.currentSegment.seekEntries.push(seekEntry);
                    this.readContiguousElements(reader, size);
                    if (seekEntry.id === -1 || seekEntry.segmentPosition === -1) {
                        this.currentSegment.seekEntries.pop();
                    }
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].SeekID:
                {
                    var _this_currentSegment;
                    const lastSeekEntry = (_this_currentSegment = this.currentSegment) === null || _this_currentSegment === void 0 ? void 0 : _this_currentSegment.seekEntries[this.currentSegment.seekEntries.length - 1];
                    if (!lastSeekEntry) break;
                    lastSeekEntry.id = reader.readUnsignedInt(size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].SeekPosition:
                {
                    var _this_currentSegment1;
                    const lastSeekEntry = (_this_currentSegment1 = this.currentSegment) === null || _this_currentSegment1 === void 0 ? void 0 : _this_currentSegment1.seekEntries[this.currentSegment.seekEntries.length - 1];
                    if (!lastSeekEntry) break;
                    lastSeekEntry.segmentPosition = reader.readUnsignedInt(size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].TimestampScale:
                {
                    if (!this.currentSegment) break;
                    this.currentSegment.timestampScale = reader.readUnsignedInt(size);
                    this.currentSegment.timestampFactor = 1e9 / this.currentSegment.timestampScale;
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Duration:
                {
                    if (!this.currentSegment) break;
                    this.currentSegment.duration = reader.readFloat(size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].TrackEntry:
                {
                    if (!this.currentSegment) break;
                    this.currentTrack = {
                        id: -1,
                        segment: this.currentSegment,
                        demuxer: this,
                        clusters: [],
                        clustersWithKeyFrame: [],
                        cuePoints: [],
                        isDefault: false,
                        inputTrack: null,
                        codecId: null,
                        codecPrivate: null,
                        defaultDuration: null,
                        languageCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNDETERMINED_LANGUAGE"],
                        info: null
                    };
                    this.readContiguousElements(reader, size);
                    if (this.currentTrack && this.currentTrack.id !== -1 && this.currentTrack.codecId && this.currentTrack.info) {
                        const slashIndex = this.currentTrack.codecId.indexOf('/');
                        const codecIdWithoutSuffix = slashIndex === -1 ? this.currentTrack.codecId : this.currentTrack.codecId.slice(0, slashIndex);
                        if (this.currentTrack.info.type === 'video' && this.currentTrack.info.width !== -1 && this.currentTrack.info.height !== -1) {
                            if (this.currentTrack.codecId === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CODEC_STRING_MAP"].avc) {
                                this.currentTrack.info.codec = 'avc';
                                this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate;
                            } else if (this.currentTrack.codecId === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CODEC_STRING_MAP"].hevc) {
                                this.currentTrack.info.codec = 'hevc';
                                this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate;
                            } else if (codecIdWithoutSuffix === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CODEC_STRING_MAP"].vp8) {
                                this.currentTrack.info.codec = 'vp8';
                            } else if (codecIdWithoutSuffix === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CODEC_STRING_MAP"].vp9) {
                                this.currentTrack.info.codec = 'vp9';
                            } else if (codecIdWithoutSuffix === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CODEC_STRING_MAP"].av1) {
                                this.currentTrack.info.codec = 'av1';
                            }
                            const videoTrack = this.currentTrack;
                            const inputTrack = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputVideoTrack"](new MatroskaVideoTrackBacking(videoTrack));
                            this.currentTrack.inputTrack = inputTrack;
                            this.currentSegment.tracks.push(this.currentTrack);
                        } else if (this.currentTrack.info.type === 'audio' && this.currentTrack.info.numberOfChannels !== -1 && this.currentTrack.info.sampleRate !== -1) {
                            if (codecIdWithoutSuffix === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CODEC_STRING_MAP"].aac) {
                                this.currentTrack.info.codec = 'aac';
                                this.currentTrack.info.aacCodecInfo = {
                                    isMpeg2: this.currentTrack.codecId.includes('MPEG2')
                                };
                                this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate;
                            } else if (this.currentTrack.codecId === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CODEC_STRING_MAP"].mp3) {
                                this.currentTrack.info.codec = 'mp3';
                            } else if (codecIdWithoutSuffix === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CODEC_STRING_MAP"].opus) {
                                this.currentTrack.info.codec = 'opus';
                                this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate;
                            } else if (codecIdWithoutSuffix === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CODEC_STRING_MAP"].vorbis) {
                                this.currentTrack.info.codec = 'vorbis';
                                this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate;
                            } else if (codecIdWithoutSuffix === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CODEC_STRING_MAP"].flac) {
                                this.currentTrack.info.codec = 'flac';
                                this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate;
                            } else if (this.currentTrack.codecId === 'A_PCM/INT/LIT') {
                                if (this.currentTrack.info.bitDepth === 8) {
                                    this.currentTrack.info.codec = 'pcm-u8';
                                } else if (this.currentTrack.info.bitDepth === 16) {
                                    this.currentTrack.info.codec = 'pcm-s16';
                                } else if (this.currentTrack.info.bitDepth === 24) {
                                    this.currentTrack.info.codec = 'pcm-s24';
                                } else if (this.currentTrack.info.bitDepth === 32) {
                                    this.currentTrack.info.codec = 'pcm-s32';
                                }
                            } else if (this.currentTrack.codecId === 'A_PCM/INT/BIG') {
                                if (this.currentTrack.info.bitDepth === 8) {
                                    this.currentTrack.info.codec = 'pcm-u8';
                                } else if (this.currentTrack.info.bitDepth === 16) {
                                    this.currentTrack.info.codec = 'pcm-s16be';
                                } else if (this.currentTrack.info.bitDepth === 24) {
                                    this.currentTrack.info.codec = 'pcm-s24be';
                                } else if (this.currentTrack.info.bitDepth === 32) {
                                    this.currentTrack.info.codec = 'pcm-s32be';
                                }
                            } else if (this.currentTrack.codecId === 'A_PCM/FLOAT/IEEE') {
                                if (this.currentTrack.info.bitDepth === 32) {
                                    this.currentTrack.info.codec = 'pcm-f32';
                                } else if (this.currentTrack.info.bitDepth === 64) {
                                    this.currentTrack.info.codec = 'pcm-f64';
                                }
                            }
                            const audioTrack = this.currentTrack;
                            const inputTrack = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputAudioTrack"](new MatroskaAudioTrackBacking(audioTrack));
                            this.currentTrack.inputTrack = inputTrack;
                            this.currentSegment.tracks.push(this.currentTrack);
                        }
                    }
                    this.currentTrack = null;
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].TrackNumber:
                {
                    if (!this.currentTrack) break;
                    this.currentTrack.id = reader.readUnsignedInt(size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].TrackType:
                {
                    if (!this.currentTrack) break;
                    const type = reader.readUnsignedInt(size);
                    if (type === 1) {
                        this.currentTrack.info = {
                            type: 'video',
                            width: -1,
                            height: -1,
                            rotation: 0,
                            codec: null,
                            codecDescription: null,
                            colorSpace: null
                        };
                    } else if (type === 2) {
                        this.currentTrack.info = {
                            type: 'audio',
                            numberOfChannels: -1,
                            sampleRate: -1,
                            bitDepth: -1,
                            codec: null,
                            codecDescription: null,
                            aacCodecInfo: null
                        };
                    }
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].FlagEnabled:
                {
                    if (!this.currentTrack) break;
                    const enabled = reader.readUnsignedInt(size);
                    if (!enabled) {
                        this.currentSegment.tracks.pop();
                        this.currentTrack = null;
                    }
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].FlagDefault:
                {
                    if (!this.currentTrack) break;
                    this.currentTrack.isDefault = !!reader.readUnsignedInt(size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].CodecID:
                {
                    if (!this.currentTrack) break;
                    this.currentTrack.codecId = reader.readAsciiString(size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].CodecPrivate:
                {
                    if (!this.currentTrack) break;
                    this.currentTrack.codecPrivate = reader.readBytes(size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].DefaultDuration:
                {
                    if (!this.currentTrack) break;
                    this.currentTrack.defaultDuration = this.currentTrack.segment.timestampFactor * reader.readUnsignedInt(size) / 1e9;
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Language:
                {
                    if (!this.currentTrack) break;
                    this.currentTrack.languageCode = reader.readAsciiString(size);
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIso639Dash2LanguageCode"])(this.currentTrack.languageCode)) {
                        this.currentTrack.languageCode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNDETERMINED_LANGUAGE"];
                    }
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Video:
                {
                    var _this_currentTrack_info, _this_currentTrack;
                    if (((_this_currentTrack = this.currentTrack) === null || _this_currentTrack === void 0 ? void 0 : (_this_currentTrack_info = _this_currentTrack.info) === null || _this_currentTrack_info === void 0 ? void 0 : _this_currentTrack_info.type) !== 'video') break;
                    this.readContiguousElements(reader, size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].PixelWidth:
                {
                    var _this_currentTrack_info1, _this_currentTrack1;
                    if (((_this_currentTrack1 = this.currentTrack) === null || _this_currentTrack1 === void 0 ? void 0 : (_this_currentTrack_info1 = _this_currentTrack1.info) === null || _this_currentTrack_info1 === void 0 ? void 0 : _this_currentTrack_info1.type) !== 'video') break;
                    this.currentTrack.info.width = reader.readUnsignedInt(size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].PixelHeight:
                {
                    var _this_currentTrack_info2, _this_currentTrack2;
                    if (((_this_currentTrack2 = this.currentTrack) === null || _this_currentTrack2 === void 0 ? void 0 : (_this_currentTrack_info2 = _this_currentTrack2.info) === null || _this_currentTrack_info2 === void 0 ? void 0 : _this_currentTrack_info2.type) !== 'video') break;
                    this.currentTrack.info.height = reader.readUnsignedInt(size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Colour:
                {
                    var _this_currentTrack_info3, _this_currentTrack3;
                    if (((_this_currentTrack3 = this.currentTrack) === null || _this_currentTrack3 === void 0 ? void 0 : (_this_currentTrack_info3 = _this_currentTrack3.info) === null || _this_currentTrack_info3 === void 0 ? void 0 : _this_currentTrack_info3.type) !== 'video') break;
                    this.currentTrack.info.colorSpace = {};
                    this.readContiguousElements(reader, size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].MatrixCoefficients:
                {
                    var _this_currentTrack_info4, _this_currentTrack4;
                    if (((_this_currentTrack4 = this.currentTrack) === null || _this_currentTrack4 === void 0 ? void 0 : (_this_currentTrack_info4 = _this_currentTrack4.info) === null || _this_currentTrack_info4 === void 0 ? void 0 : _this_currentTrack_info4.type) !== 'video' || !this.currentTrack.info.colorSpace) break;
                    const matrixCoefficients = reader.readUnsignedInt(size);
                    var _MATRIX_COEFFICIENTS_MAP_INVERSE_matrixCoefficients;
                    const mapped = (_MATRIX_COEFFICIENTS_MAP_INVERSE_matrixCoefficients = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MATRIX_COEFFICIENTS_MAP_INVERSE"][matrixCoefficients]) !== null && _MATRIX_COEFFICIENTS_MAP_INVERSE_matrixCoefficients !== void 0 ? _MATRIX_COEFFICIENTS_MAP_INVERSE_matrixCoefficients : null;
                    this.currentTrack.info.colorSpace.matrix = mapped;
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Range:
                {
                    var _this_currentTrack_info5, _this_currentTrack5;
                    if (((_this_currentTrack5 = this.currentTrack) === null || _this_currentTrack5 === void 0 ? void 0 : (_this_currentTrack_info5 = _this_currentTrack5.info) === null || _this_currentTrack_info5 === void 0 ? void 0 : _this_currentTrack_info5.type) !== 'video' || !this.currentTrack.info.colorSpace) break;
                    this.currentTrack.info.colorSpace.fullRange = reader.readUnsignedInt(size) === 2;
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].TransferCharacteristics:
                {
                    var _this_currentTrack_info6, _this_currentTrack6;
                    if (((_this_currentTrack6 = this.currentTrack) === null || _this_currentTrack6 === void 0 ? void 0 : (_this_currentTrack_info6 = _this_currentTrack6.info) === null || _this_currentTrack_info6 === void 0 ? void 0 : _this_currentTrack_info6.type) !== 'video' || !this.currentTrack.info.colorSpace) break;
                    const transferCharacteristics = reader.readUnsignedInt(size);
                    var _TRANSFER_CHARACTERISTICS_MAP_INVERSE_transferCharacteristics;
                    const mapped = (_TRANSFER_CHARACTERISTICS_MAP_INVERSE_transferCharacteristics = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSFER_CHARACTERISTICS_MAP_INVERSE"][transferCharacteristics]) !== null && _TRANSFER_CHARACTERISTICS_MAP_INVERSE_transferCharacteristics !== void 0 ? _TRANSFER_CHARACTERISTICS_MAP_INVERSE_transferCharacteristics : null;
                    this.currentTrack.info.colorSpace.transfer = mapped;
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Primaries:
                {
                    var _this_currentTrack_info7, _this_currentTrack7;
                    if (((_this_currentTrack7 = this.currentTrack) === null || _this_currentTrack7 === void 0 ? void 0 : (_this_currentTrack_info7 = _this_currentTrack7.info) === null || _this_currentTrack_info7 === void 0 ? void 0 : _this_currentTrack_info7.type) !== 'video' || !this.currentTrack.info.colorSpace) break;
                    const primaries = reader.readUnsignedInt(size);
                    var _COLOR_PRIMARIES_MAP_INVERSE_primaries;
                    const mapped = (_COLOR_PRIMARIES_MAP_INVERSE_primaries = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_PRIMARIES_MAP_INVERSE"][primaries]) !== null && _COLOR_PRIMARIES_MAP_INVERSE_primaries !== void 0 ? _COLOR_PRIMARIES_MAP_INVERSE_primaries : null;
                    this.currentTrack.info.colorSpace.primaries = mapped;
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Projection:
                {
                    var _this_currentTrack_info8, _this_currentTrack8;
                    if (((_this_currentTrack8 = this.currentTrack) === null || _this_currentTrack8 === void 0 ? void 0 : (_this_currentTrack_info8 = _this_currentTrack8.info) === null || _this_currentTrack_info8 === void 0 ? void 0 : _this_currentTrack_info8.type) !== 'video') break;
                    this.readContiguousElements(reader, size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].ProjectionPoseRoll:
                {
                    var _this_currentTrack_info9, _this_currentTrack9;
                    if (((_this_currentTrack9 = this.currentTrack) === null || _this_currentTrack9 === void 0 ? void 0 : (_this_currentTrack_info9 = _this_currentTrack9.info) === null || _this_currentTrack_info9 === void 0 ? void 0 : _this_currentTrack_info9.type) !== 'video') break;
                    const rotation = reader.readFloat(size);
                    const flippedRotation = -rotation; // Convert counter-clockwise to clockwise
                    try {
                        this.currentTrack.info.rotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeRotation"])(flippedRotation);
                    } catch (e) {
                    // It wasn't a valid rotation
                    }
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Audio:
                {
                    var _this_currentTrack_info10, _this_currentTrack10;
                    if (((_this_currentTrack10 = this.currentTrack) === null || _this_currentTrack10 === void 0 ? void 0 : (_this_currentTrack_info10 = _this_currentTrack10.info) === null || _this_currentTrack_info10 === void 0 ? void 0 : _this_currentTrack_info10.type) !== 'audio') break;
                    this.readContiguousElements(reader, size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].SamplingFrequency:
                {
                    var _this_currentTrack_info11, _this_currentTrack11;
                    if (((_this_currentTrack11 = this.currentTrack) === null || _this_currentTrack11 === void 0 ? void 0 : (_this_currentTrack_info11 = _this_currentTrack11.info) === null || _this_currentTrack_info11 === void 0 ? void 0 : _this_currentTrack_info11.type) !== 'audio') break;
                    this.currentTrack.info.sampleRate = reader.readFloat(size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Channels:
                {
                    var _this_currentTrack_info12, _this_currentTrack12;
                    if (((_this_currentTrack12 = this.currentTrack) === null || _this_currentTrack12 === void 0 ? void 0 : (_this_currentTrack_info12 = _this_currentTrack12.info) === null || _this_currentTrack_info12 === void 0 ? void 0 : _this_currentTrack_info12.type) !== 'audio') break;
                    this.currentTrack.info.numberOfChannels = reader.readUnsignedInt(size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].BitDepth:
                {
                    var _this_currentTrack_info13, _this_currentTrack13;
                    if (((_this_currentTrack13 = this.currentTrack) === null || _this_currentTrack13 === void 0 ? void 0 : (_this_currentTrack_info13 = _this_currentTrack13.info) === null || _this_currentTrack_info13 === void 0 ? void 0 : _this_currentTrack_info13.type) !== 'audio') break;
                    this.currentTrack.info.bitDepth = reader.readUnsignedInt(size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].CuePoint:
                {
                    if (!this.currentSegment) break;
                    this.readContiguousElements(reader, size);
                    this.currentCueTime = null;
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].CueTime:
                {
                    this.currentCueTime = reader.readUnsignedInt(size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].CueTrackPositions:
                {
                    if (this.currentCueTime === null) break;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.currentSegment);
                    const cuePoint = {
                        time: this.currentCueTime,
                        trackId: -1,
                        clusterPosition: -1
                    };
                    this.currentSegment.cuePoints.push(cuePoint);
                    this.readContiguousElements(reader, size);
                    if (cuePoint.trackId === -1 || cuePoint.clusterPosition === -1) {
                        this.currentSegment.cuePoints.pop();
                    }
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].CueTrack:
                {
                    var _this_currentSegment2;
                    const lastCuePoint = (_this_currentSegment2 = this.currentSegment) === null || _this_currentSegment2 === void 0 ? void 0 : _this_currentSegment2.cuePoints[this.currentSegment.cuePoints.length - 1];
                    if (!lastCuePoint) break;
                    lastCuePoint.trackId = reader.readUnsignedInt(size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].CueClusterPosition:
                {
                    var _this_currentSegment3;
                    const lastCuePoint = (_this_currentSegment3 = this.currentSegment) === null || _this_currentSegment3 === void 0 ? void 0 : _this_currentSegment3.cuePoints[this.currentSegment.cuePoints.length - 1];
                    if (!lastCuePoint) break;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.currentSegment);
                    lastCuePoint.clusterPosition = this.currentSegment.dataStartPos + reader.readUnsignedInt(size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Timestamp:
                {
                    if (!this.currentCluster) break;
                    this.currentCluster.timestamp = reader.readUnsignedInt(size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].SimpleBlock:
                {
                    if (!this.currentCluster) break;
                    const trackNumber = reader.readVarInt();
                    if (trackNumber === null) break;
                    const relativeTimestamp = reader.readS16();
                    const flags = reader.readU8();
                    const isKeyFrame = !!(flags & 0x80);
                    const lacing = flags >> 1 & 0x3; // If the block is laced, we'll expand it later
                    const trackData = this.getTrackDataInCluster(this.currentCluster, trackNumber);
                    trackData.blocks.push({
                        timestamp: relativeTimestamp,
                        duration: 0,
                        isKeyFrame,
                        referencedTimestamps: [],
                        data: reader.readBytes(size - (reader.pos - dataStartPos)),
                        lacing
                    });
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].BlockGroup:
                {
                    if (!this.currentCluster) break;
                    this.readContiguousElements(reader, size);
                    if (this.currentBlock) {
                        for(let i = 0; i < this.currentBlock.referencedTimestamps.length; i++){
                            this.currentBlock.referencedTimestamps[i] += this.currentBlock.timestamp;
                        }
                        this.currentBlock = null;
                    }
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Block:
                {
                    if (!this.currentCluster) break;
                    const trackNumber = reader.readVarInt();
                    if (trackNumber === null) break;
                    const relativeTimestamp = reader.readS16();
                    const flags = reader.readU8();
                    const lacing = flags >> 1 & 0x3; // If the block is laced, we'll expand it later
                    const trackData = this.getTrackDataInCluster(this.currentCluster, trackNumber);
                    this.currentBlock = {
                        timestamp: relativeTimestamp,
                        duration: 0,
                        isKeyFrame: true,
                        referencedTimestamps: [],
                        data: reader.readBytes(size - (reader.pos - dataStartPos)),
                        lacing
                    };
                    trackData.blocks.push(this.currentBlock);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].BlockDuration:
                {
                    if (!this.currentBlock) break;
                    this.currentBlock.duration = reader.readUnsignedInt(size);
                }
                ;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].ReferenceBlock:
                {
                    if (!this.currentBlock) break;
                    this.currentBlock.isKeyFrame = false;
                    const relativeTimestamp = reader.readSignedInt(size);
                    // We'll offset this by the block's timestamp later
                    this.currentBlock.referencedTimestamps.push(relativeTimestamp);
                }
                ;
                break;
        }
        reader.pos = dataStartPos + size;
        return true;
    }
    constructor(input){
        super(input);
        this.readMetadataPromise = null;
        this.segments = [];
        this.currentSegment = null;
        this.currentTrack = null;
        this.currentCluster = null;
        this.currentBlock = null;
        this.currentCueTime = null;
        this.isWebM = false;
        this.metadataReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLReader"](input._mainReader);
        // Max 64 MiB of stored clusters
        this.clusterReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLReader"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reader"](input.source, 64 * 2 ** 20));
    }
}
class MatroskaTrackBacking {
    getId() {
        return this.internalTrack.id;
    }
    getCodec() {
        throw new Error('Not implemented on base class.');
    }
    async computeDuration() {
        const lastPacket = await this.getPacket(Infinity, {
            metadataOnly: true
        });
        var _lastPacket_timestamp, _lastPacket_duration;
        return ((_lastPacket_timestamp = lastPacket === null || lastPacket === void 0 ? void 0 : lastPacket.timestamp) !== null && _lastPacket_timestamp !== void 0 ? _lastPacket_timestamp : 0) + ((_lastPacket_duration = lastPacket === null || lastPacket === void 0 ? void 0 : lastPacket.duration) !== null && _lastPacket_duration !== void 0 ? _lastPacket_duration : 0);
    }
    getLanguageCode() {
        return this.internalTrack.languageCode;
    }
    async getFirstTimestamp() {
        const firstPacket = await this.getFirstPacket({
            metadataOnly: true
        });
        var _firstPacket_timestamp;
        return (_firstPacket_timestamp = firstPacket === null || firstPacket === void 0 ? void 0 : firstPacket.timestamp) !== null && _firstPacket_timestamp !== void 0 ? _firstPacket_timestamp : 0;
    }
    getTimeResolution() {
        return this.internalTrack.segment.timestampFactor;
    }
    async getFirstPacket(options) {
        return this.performClusterLookup(()=>{
            var _this_internalTrack_segment_clusters_;
            const startCluster = (_this_internalTrack_segment_clusters_ = this.internalTrack.segment.clusters[0]) !== null && _this_internalTrack_segment_clusters_ !== void 0 ? _this_internalTrack_segment_clusters_ : null;
            if (startCluster === null || startCluster === void 0 ? void 0 : startCluster.isKnownToBeFirstCluster) {
                // Walk from the very first cluster in the file until we find one with our track in it
                let currentCluster = startCluster;
                while(currentCluster){
                    const trackData = currentCluster.trackData.get(this.internalTrack.id);
                    if (trackData) {
                        return {
                            clusterIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(this.internalTrack.clusters, currentCluster.elementStartPos, (x)=>x.elementStartPos),
                            blockIndex: 0,
                            correctBlockFound: true
                        };
                    }
                    currentCluster = currentCluster.nextCluster;
                }
            }
            return {
                clusterIndex: -1,
                blockIndex: -1,
                correctBlockFound: false
            };
        }, -Infinity, Infinity, options);
    }
    intoTimescale(timestamp) {
        // Do a little rounding to catch cases where the result is very close to an integer. If it is, it's likely
        // that the number was originally an integer divided by the timescale. For stability, it's best
        // to return the integer in this case.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundToPrecision"])(timestamp * this.internalTrack.segment.timestampFactor, 14);
    }
    async getPacket(timestamp, options) {
        const timestampInTimescale = this.intoTimescale(timestamp);
        return this.performClusterLookup(()=>this.findBlockInClustersForTimestamp(timestampInTimescale), timestampInTimescale, timestampInTimescale, options);
    }
    async getNextPacket(packet, options) {
        const locationInCluster = this.packetToClusterLocation.get(packet);
        if (locationInCluster === undefined) {
            throw new Error('Packet was not created from this track.');
        }
        const trackData = locationInCluster.cluster.trackData.get(this.internalTrack.id);
        const clusterIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(this.internalTrack.clusters, locationInCluster.cluster.elementStartPos, (x)=>x.elementStartPos);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(clusterIndex !== -1);
        return this.performClusterLookup(()=>{
            if (locationInCluster.blockIndex + 1 < trackData.blocks.length) {
                // We can simply take the next block in the cluster
                return {
                    clusterIndex,
                    blockIndex: locationInCluster.blockIndex + 1,
                    correctBlockFound: true
                };
            } else {
                // Walk the list of clusters until we find the next cluster for this track
                let currentCluster = locationInCluster.cluster;
                while(currentCluster.nextCluster){
                    currentCluster = currentCluster.nextCluster;
                    const trackData = currentCluster.trackData.get(this.internalTrack.id);
                    if (trackData) {
                        const clusterIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(this.internalTrack.clusters, currentCluster.elementStartPos, (x)=>x.elementStartPos);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(clusterIndex !== -1);
                        return {
                            clusterIndex,
                            blockIndex: 0,
                            correctBlockFound: true
                        };
                    }
                }
                return {
                    clusterIndex,
                    blockIndex: -1,
                    correctBlockFound: false
                };
            }
        }, -Infinity, Infinity, options);
    }
    async getKeyPacket(timestamp, options) {
        const timestampInTimescale = this.intoTimescale(timestamp);
        return this.performClusterLookup(()=>this.findKeyBlockInClustersForTimestamp(timestampInTimescale), timestampInTimescale, timestampInTimescale, options);
    }
    async getNextKeyPacket(packet, options) {
        const locationInCluster = this.packetToClusterLocation.get(packet);
        if (locationInCluster === undefined) {
            throw new Error('Packet was not created from this track.');
        }
        const trackData = locationInCluster.cluster.trackData.get(this.internalTrack.id);
        const clusterIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(this.internalTrack.clusters, locationInCluster.cluster.elementStartPos, (x)=>x.elementStartPos);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(clusterIndex !== -1);
        return this.performClusterLookup(()=>{
            const nextKeyFrameIndex = trackData.blocks.findIndex((x, i)=>x.isKeyFrame && i > locationInCluster.blockIndex);
            if (nextKeyFrameIndex !== -1) {
                // We can simply take the next key frame in the cluster
                return {
                    clusterIndex,
                    blockIndex: nextKeyFrameIndex,
                    correctBlockFound: true
                };
            } else {
                // Walk the list of clusters until we find the next cluster for this track with a key frame
                let currentCluster = locationInCluster.cluster;
                while(currentCluster.nextCluster){
                    currentCluster = currentCluster.nextCluster;
                    const trackData = currentCluster.trackData.get(this.internalTrack.id);
                    if (trackData && trackData.firstKeyFrameTimestamp !== null) {
                        const clusterIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(this.internalTrack.clusters, currentCluster.elementStartPos, (x)=>x.elementStartPos);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(clusterIndex !== -1);
                        const keyFrameIndex = trackData.blocks.findIndex((x)=>x.isKeyFrame);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(keyFrameIndex !== -1); // There must be one
                        return {
                            clusterIndex,
                            blockIndex: keyFrameIndex,
                            correctBlockFound: true
                        };
                    }
                }
                return {
                    clusterIndex,
                    blockIndex: -1,
                    correctBlockFound: false
                };
            }
        }, -Infinity, Infinity, options);
    }
    async fetchPacketInCluster(cluster, blockIndex, options) {
        if (blockIndex === -1) {
            return null;
        }
        const trackData = cluster.trackData.get(this.internalTrack.id);
        const block = trackData.blocks[blockIndex];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(block);
        const data = options.metadataOnly ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLACEHOLDER_DATA"] : block.data;
        const timestamp = block.timestamp / this.internalTrack.segment.timestampFactor;
        const duration = block.duration / this.internalTrack.segment.timestampFactor;
        const packet = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"](data, block.isKeyFrame ? 'key' : 'delta', timestamp, duration, cluster.dataStartPos + blockIndex, block.data.byteLength);
        this.packetToClusterLocation.set(packet, {
            cluster,
            blockIndex
        });
        return packet;
    }
    findBlockInClustersForTimestamp(timestampInTimescale) {
        const clusterIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(// This array is technically not sorted by start timestamp, but for any reasonable file, it basically is.
        this.internalTrack.clusters, timestampInTimescale, (x)=>x.trackData.get(this.internalTrack.id).startTimestamp);
        let blockIndex = -1;
        let correctBlockFound = false;
        if (clusterIndex !== -1) {
            const cluster = this.internalTrack.clusters[clusterIndex];
            const trackData = cluster.trackData.get(this.internalTrack.id);
            const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(trackData.presentationTimestamps, timestampInTimescale, (x)=>x.timestamp);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(index !== -1);
            blockIndex = trackData.presentationTimestamps[index].blockIndex;
            correctBlockFound = timestampInTimescale < trackData.endTimestamp;
        }
        return {
            clusterIndex,
            blockIndex,
            correctBlockFound
        };
    }
    findKeyBlockInClustersForTimestamp(timestampInTimescale) {
        const indexInKeyFrameClusters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(// This array is technically not sorted by start timestamp, but for any reasonable file, it basically is.
        this.internalTrack.clustersWithKeyFrame, timestampInTimescale, (x)=>x.trackData.get(this.internalTrack.id).firstKeyFrameTimestamp);
        let clusterIndex = -1;
        let blockIndex = -1;
        let correctBlockFound = false;
        if (indexInKeyFrameClusters !== -1) {
            const cluster = this.internalTrack.clustersWithKeyFrame[indexInKeyFrameClusters];
            // Now, let's find the actual index of the cluster in the list of ALL clusters, not just key frame ones
            clusterIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(this.internalTrack.clusters, cluster.elementStartPos, (x)=>x.elementStartPos);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(clusterIndex !== -1);
            const trackData = cluster.trackData.get(this.internalTrack.id);
            const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findLastIndex"])(trackData.presentationTimestamps, (x)=>{
                const block = trackData.blocks[x.blockIndex];
                return block.isKeyFrame && x.timestamp <= timestampInTimescale;
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(index !== -1); // It's a key frame cluster, so there must be a key frame
            const entry = trackData.presentationTimestamps[index];
            blockIndex = entry.blockIndex;
            correctBlockFound = timestampInTimescale < trackData.endTimestamp;
        }
        return {
            clusterIndex,
            blockIndex,
            correctBlockFound
        };
    }
    /** Looks for a packet in the clusters while trying to load as few clusters as possible to retrieve it. */ async performClusterLookup(// This function returns the best-matching block that is currently loaded. Based on this information, we know
    // which clusters we need to load to find the actual match.
    getBestMatch, // The timestamp with which we can search the lookup table
    searchTimestamp, // The timestamp for which we know the correct block will not come after it
    latestTimestamp, options) {
        const { demuxer, segment } = this.internalTrack;
        const release = await segment.clusterLookupMutex.acquire(); // The algorithm requires exclusivity
        try {
            const { clusterIndex, blockIndex, correctBlockFound } = getBestMatch();
            if (correctBlockFound) {
                // The correct block already exists, easy path.
                const cluster = this.internalTrack.clusters[clusterIndex];
                return this.fetchPacketInCluster(cluster, blockIndex, options);
            }
            // We use the metadata reader to find the cluster, but the cluster reader to load the cluster
            const metadataReader = demuxer.metadataReader;
            const clusterReader = demuxer.clusterReader;
            let prevCluster = null;
            let bestClusterIndex = clusterIndex;
            let bestBlockIndex = blockIndex;
            // Search for a cue point; this way, we won't need to start searching from the start of the file
            // but can jump right into the correct cluster (or at least nearby).
            const cuePointIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(this.internalTrack.cuePoints, searchTimestamp, (x)=>x.time);
            const cuePoint = cuePointIndex !== -1 ? this.internalTrack.cuePoints[cuePointIndex] : null;
            let nextClusterIsFirstCluster = false;
            if (clusterIndex === -1) {
                var _cuePoint_clusterPosition;
                metadataReader.pos = (_cuePoint_clusterPosition = cuePoint === null || cuePoint === void 0 ? void 0 : cuePoint.clusterPosition) !== null && _cuePoint_clusterPosition !== void 0 ? _cuePoint_clusterPosition : segment.clusterSeekStartPos;
                nextClusterIsFirstCluster = metadataReader.pos === segment.clusterSeekStartPos;
            } else {
                const cluster = this.internalTrack.clusters[clusterIndex];
                if (!cuePoint || cluster.elementStartPos >= cuePoint.clusterPosition) {
                    metadataReader.pos = cluster.elementEndPos;
                    prevCluster = cluster;
                } else {
                    // Use the lookup entry
                    metadataReader.pos = cuePoint.clusterPosition;
                }
            }
            while(metadataReader.pos <= segment.elementEndPos - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEADER_SIZE"]){
                if (prevCluster) {
                    const trackData = prevCluster.trackData.get(this.internalTrack.id);
                    if (trackData && trackData.startTimestamp > latestTimestamp) {
                        break;
                    }
                    if (prevCluster.nextCluster) {
                        // Skip ahead quickly without needing to read the file again
                        metadataReader.pos = prevCluster.nextCluster.elementEndPos;
                        prevCluster = prevCluster.nextCluster;
                        continue;
                    }
                }
                // Load the header
                await metadataReader.reader.loadRange(metadataReader.pos, metadataReader.pos + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_HEADER_SIZE"]);
                const elementStartPos = metadataReader.pos;
                const elementHeader = metadataReader.readElementHeader();
                if (!elementHeader || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVEL_1_EBML_IDS"].includes(elementHeader.id)) {
                    // There's an element here that shouldn't be here (or Void). Might be garbage. In this case, let's
                    // try and resync to the next valid element.
                    metadataReader.pos = elementStartPos;
                    const nextPos = await metadataReader.resync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVEL_1_EBML_IDS"], Math.min(segment.elementEndPos, metadataReader.pos + MAX_RESYNC_LENGTH));
                    if (nextPos) {
                        metadataReader.pos = nextPos;
                        continue;
                    } else {
                        break; // Resync failed
                    }
                }
                const id = elementHeader.id;
                let size = elementHeader.size;
                const dataStartPos = metadataReader.pos;
                if (id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Cluster) {
                    const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(segment.clusters, elementStartPos, (x)=>x.elementStartPos);
                    let cluster;
                    if (index === -1) {
                        // This is the first time we've seen this cluster
                        metadataReader.pos = elementStartPos;
                        cluster = await demuxer.readCluster(segment);
                    } else {
                        // We already know this cluster
                        cluster = segment.clusters[index];
                    }
                    // Even if we already know the cluster, we might not yet know its predecessor, so always do this
                    if (prevCluster) prevCluster.nextCluster = cluster;
                    prevCluster = cluster;
                    if (nextClusterIsFirstCluster) {
                        cluster.isKnownToBeFirstCluster = true;
                        nextClusterIsFirstCluster = false;
                    }
                    const { clusterIndex, blockIndex, correctBlockFound } = getBestMatch();
                    if (correctBlockFound) {
                        const cluster = this.internalTrack.clusters[clusterIndex];
                        return this.fetchPacketInCluster(cluster, blockIndex, options);
                    }
                    if (clusterIndex !== -1) {
                        bestClusterIndex = clusterIndex;
                        bestBlockIndex = blockIndex;
                    }
                }
                if (size === null) {
                    // Undefined element size (can happen in livestreamed files). In this case, we need to do some
                    // searching to determine the actual size of the element.
                    if (id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Cluster) {
                        // The cluster should have already computed its length, we can just copy that result
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(prevCluster);
                        size = prevCluster.elementEndPos - dataStartPos;
                    } else {
                        // Search for the next element at level 0 or 1
                        clusterReader.pos = dataStartPos;
                        const nextElementPos = await clusterReader.searchForNextElementId(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEVEL_0_AND_1_EBML_IDS"], segment.elementEndPos);
                        size = (nextElementPos !== null && nextElementPos !== void 0 ? nextElementPos : segment.elementEndPos) - dataStartPos;
                    }
                    const endPos = dataStartPos + size;
                    if (endPos > segment.elementEndPos - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEADER_SIZE"]) {
                        break;
                    } else {
                        // Check the next element. If it's a new segment, we know this segment ends here. The new
                        // segment is just ignored, since we're likely in a livestreamed file and thus only care about
                        // the first segment.
                        clusterReader.pos = endPos;
                        const elementId = clusterReader.readElementId();
                        if (elementId === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Segment) {
                            segment.elementEndPos = endPos;
                            break;
                        }
                    }
                }
                metadataReader.pos = dataStartPos + size;
            }
            let result = null;
            const bestCluster = bestClusterIndex !== -1 ? this.internalTrack.clusters[bestClusterIndex] : null;
            if (bestCluster) {
                // If we finished looping but didn't find a perfect match, still return the best match we found
                result = await this.fetchPacketInCluster(bestCluster, bestBlockIndex, options);
            }
            // Catch faulty cue points
            if (!result && cuePoint && (!bestCluster || bestCluster.elementStartPos < cuePoint.clusterPosition)) {
                // The cue point lied to us! We found a cue point but no cluster there that satisfied the match. In this
                // case, let's search again but using the cue point before that.
                const previousCuePoint = this.internalTrack.cuePoints[cuePointIndex - 1];
                var _previousCuePoint_time;
                const newSearchTimestamp = (_previousCuePoint_time = previousCuePoint === null || previousCuePoint === void 0 ? void 0 : previousCuePoint.time) !== null && _previousCuePoint_time !== void 0 ? _previousCuePoint_time : -Infinity;
                return this.performClusterLookup(getBestMatch, newSearchTimestamp, latestTimestamp, options);
            }
            return result;
        } finally{
            release();
        }
    }
    constructor(internalTrack){
        this.internalTrack = internalTrack;
        this.packetToClusterLocation = new WeakMap();
    }
}
class MatroskaVideoTrackBacking extends MatroskaTrackBacking {
    getCodec() {
        return this.internalTrack.info.codec;
    }
    getCodedWidth() {
        return this.internalTrack.info.width;
    }
    getCodedHeight() {
        return this.internalTrack.info.height;
    }
    getRotation() {
        return this.internalTrack.info.rotation;
    }
    async getColorSpace() {
        var _this_internalTrack_info_colorSpace, _this_internalTrack_info_colorSpace1, _this_internalTrack_info_colorSpace2, _this_internalTrack_info_colorSpace3;
        return {
            primaries: (_this_internalTrack_info_colorSpace = this.internalTrack.info.colorSpace) === null || _this_internalTrack_info_colorSpace === void 0 ? void 0 : _this_internalTrack_info_colorSpace.primaries,
            transfer: (_this_internalTrack_info_colorSpace1 = this.internalTrack.info.colorSpace) === null || _this_internalTrack_info_colorSpace1 === void 0 ? void 0 : _this_internalTrack_info_colorSpace1.transfer,
            matrix: (_this_internalTrack_info_colorSpace2 = this.internalTrack.info.colorSpace) === null || _this_internalTrack_info_colorSpace2 === void 0 ? void 0 : _this_internalTrack_info_colorSpace2.matrix,
            fullRange: (_this_internalTrack_info_colorSpace3 = this.internalTrack.info.colorSpace) === null || _this_internalTrack_info_colorSpace3 === void 0 ? void 0 : _this_internalTrack_info_colorSpace3.fullRange
        };
    }
    async getDecoderConfig() {
        if (!this.internalTrack.info.codec) {
            return null;
        }
        var _this_decoderConfigPromise;
        return (_this_decoderConfigPromise = this.decoderConfigPromise) !== null && _this_decoderConfigPromise !== void 0 ? _this_decoderConfigPromise : this.decoderConfigPromise = (async ()=>{
            let firstPacket = null;
            const needsPacketForAdditionalInfo = this.internalTrack.info.codec === 'vp9' || this.internalTrack.info.codec === 'av1' || this.internalTrack.info.codec === 'avc' && !this.internalTrack.info.codecDescription || this.internalTrack.info.codec === 'hevc' && !this.internalTrack.info.codecDescription;
            if (needsPacketForAdditionalInfo) {
                firstPacket = await this.getFirstPacket({});
            }
            var _this_internalTrack_info_codecDescription, _this_internalTrack_info_colorSpace;
            return {
                codec: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractVideoCodecString"])({
                    width: this.internalTrack.info.width,
                    height: this.internalTrack.info.height,
                    codec: this.internalTrack.info.codec,
                    codecDescription: this.internalTrack.info.codecDescription,
                    colorSpace: this.internalTrack.info.colorSpace,
                    avcCodecInfo: this.internalTrack.info.codec === 'avc' && firstPacket ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractAvcDecoderConfigurationRecord"])(firstPacket.data) : null,
                    hevcCodecInfo: this.internalTrack.info.codec === 'hevc' && firstPacket ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractHevcDecoderConfigurationRecord"])(firstPacket.data) : null,
                    vp9CodecInfo: this.internalTrack.info.codec === 'vp9' && firstPacket ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractVp9CodecInfoFromPacket"])(firstPacket.data) : null,
                    av1CodecInfo: this.internalTrack.info.codec === 'av1' && firstPacket ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractAv1CodecInfoFromPacket"])(firstPacket.data) : null
                }),
                codedWidth: this.internalTrack.info.width,
                codedHeight: this.internalTrack.info.height,
                description: (_this_internalTrack_info_codecDescription = this.internalTrack.info.codecDescription) !== null && _this_internalTrack_info_codecDescription !== void 0 ? _this_internalTrack_info_codecDescription : undefined,
                colorSpace: (_this_internalTrack_info_colorSpace = this.internalTrack.info.colorSpace) !== null && _this_internalTrack_info_colorSpace !== void 0 ? _this_internalTrack_info_colorSpace : undefined
            };
        })();
    }
    constructor(internalTrack){
        super(internalTrack);
        this.decoderConfigPromise = null;
        this.internalTrack = internalTrack;
    }
}
class MatroskaAudioTrackBacking extends MatroskaTrackBacking {
    getCodec() {
        return this.internalTrack.info.codec;
    }
    getNumberOfChannels() {
        return this.internalTrack.info.numberOfChannels;
    }
    getSampleRate() {
        return this.internalTrack.info.sampleRate;
    }
    async getDecoderConfig() {
        if (!this.internalTrack.info.codec) {
            return null;
        }
        var _this_internalTrack_info_codecDescription, _this_decoderConfig;
        return (_this_decoderConfig = this.decoderConfig) !== null && _this_decoderConfig !== void 0 ? _this_decoderConfig : this.decoderConfig = {
            codec: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractAudioCodecString"])({
                codec: this.internalTrack.info.codec,
                codecDescription: this.internalTrack.info.codecDescription,
                aacCodecInfo: this.internalTrack.info.aacCodecInfo
            }),
            numberOfChannels: this.internalTrack.info.numberOfChannels,
            sampleRate: this.internalTrack.info.sampleRate,
            description: (_this_internalTrack_info_codecDescription = this.internalTrack.info.codecDescription) !== null && _this_internalTrack_info_codecDescription !== void 0 ? _this_internalTrack_info_codecDescription : undefined
        };
    }
    constructor(internalTrack){
        super(internalTrack);
        this.decoderConfig = null;
        this.internalTrack = internalTrack;
    }
}
/** Sorts blocks such that referenced blocks come before the blocks that reference them. */ const sortBlocksByReferences = (blocks)=>{
    const timestampToBlock = new Map();
    for(let i = 0; i < blocks.length; i++){
        const block = blocks[i];
        timestampToBlock.set(block.timestamp, block);
    }
    const processedBlocks = new Set();
    const result = [];
    const processBlock = (block)=>{
        if (processedBlocks.has(block)) {
            return;
        }
        // Marking the block as processed here already; prevents this algorithm from dying on cycles
        processedBlocks.add(block);
        for(let j = 0; j < block.referencedTimestamps.length; j++){
            const timestamp = block.referencedTimestamps[j];
            const otherBlock = timestampToBlock.get(timestamp);
            if (!otherBlock) {
                continue;
            }
            processBlock(otherBlock);
        }
        result.push(block);
    };
    for(let i = 0; i < blocks.length; i++){
        processBlock(blocks[i]);
    }
    return result;
};
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/shared/mp3-misc.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "FRAME_HEADER_SIZE": ()=>FRAME_HEADER_SIZE,
    "INFO": ()=>INFO,
    "MPEG_V1_BITRATES": ()=>MPEG_V1_BITRATES,
    "MPEG_V2_BITRATES": ()=>MPEG_V2_BITRATES,
    "SAMPLING_RATES": ()=>SAMPLING_RATES,
    "XING": ()=>XING,
    "computeMp3FrameSize": ()=>computeMp3FrameSize,
    "getXingOffset": ()=>getXingOffset,
    "readFrameHeader": ()=>readFrameHeader
});
const FRAME_HEADER_SIZE = 4;
const MPEG_V1_BITRATES = {
    // Layer 3
    1: [
        -1,
        32,
        40,
        48,
        56,
        64,
        80,
        96,
        112,
        128,
        160,
        192,
        224,
        256,
        320,
        -1
    ],
    // Layer 2
    2: [
        -1,
        32,
        48,
        56,
        64,
        80,
        96,
        112,
        128,
        160,
        192,
        224,
        256,
        320,
        384,
        -1
    ],
    // Layer 1
    3: [
        -1,
        32,
        64,
        96,
        128,
        160,
        192,
        224,
        256,
        288,
        320,
        352,
        384,
        416,
        448,
        -1
    ]
};
const MPEG_V2_BITRATES = {
    // Layer 3
    1: [
        -1,
        32,
        48,
        56,
        64,
        80,
        96,
        112,
        128,
        144,
        160,
        176,
        192,
        224,
        256,
        -1
    ],
    // Layer 2
    2: [
        -1,
        8,
        16,
        24,
        32,
        40,
        48,
        56,
        64,
        80,
        96,
        112,
        128,
        144,
        160,
        -1
    ],
    // Layer 1
    3: [
        -1,
        8,
        16,
        24,
        32,
        40,
        48,
        56,
        64,
        80,
        96,
        112,
        128,
        144,
        160,
        -1
    ]
};
const SAMPLING_RATES = {
    // MPEG Version 2.5
    0: [
        11025,
        12000,
        8000,
        -1
    ],
    // MPEG Version 2 (ISO/IEC 13818-3)
    2: [
        22050,
        24000,
        16000,
        -1
    ],
    // MPEG Version 1 (ISO/IEC 11172-3)
    3: [
        44100,
        48000,
        32000,
        -1
    ]
};
const XING = 0x58696e67;
const INFO = 0x496e666f;
const computeMp3FrameSize = (layer, bitrate, sampleRate, padding)=>{
    if (layer === 3) {
        // Layer 1
        return Math.floor((12 * bitrate / sampleRate + padding) * 4);
    } else {
        return Math.floor(144 * bitrate / sampleRate + padding);
    }
};
const getXingOffset = (mpegVersionId, channel)=>{
    return mpegVersionId === 3 ? channel === 3 ? 21 : 36 : channel === 3 ? 13 : 21;
};
const readFrameHeader = (word, reader)=>{
    var _MPEG_V1_BITRATES_layer, _MPEG_V2_BITRATES_layer, _SAMPLING_RATES_mpegVersionId;
    const startPos = reader.pos;
    const firstByte = word >>> 24;
    const secondByte = word >>> 16 & 0xff;
    const thirdByte = word >>> 8 & 0xff;
    const fourthByte = word & 0xff;
    if (firstByte !== 0xff && secondByte !== 0xff && thirdByte !== 0xff && fourthByte !== 0xff) {
        reader.pos += 4;
        return null;
    }
    reader.pos += 1;
    if (firstByte !== 0xff) {
        return null;
    }
    if ((secondByte & 0xe0) !== 0xe0) {
        return null;
    }
    const mpegVersionId = secondByte >> 3 & 0x3;
    const layer = secondByte >> 1 & 0x3;
    const bitrateIndex = thirdByte >> 4 & 0xf;
    const frequencyIndex = thirdByte >> 2 & 0x3;
    const padding = thirdByte >> 1 & 0x1;
    const channel = fourthByte >> 6 & 0x3;
    const modeExtension = fourthByte >> 4 & 0x3;
    const copyright = fourthByte >> 3 & 0x1;
    const original = fourthByte >> 2 & 0x1;
    const emphasis = fourthByte & 0x3;
    const kilobitRate = mpegVersionId === 3 ? (_MPEG_V1_BITRATES_layer = MPEG_V1_BITRATES[layer]) === null || _MPEG_V1_BITRATES_layer === void 0 ? void 0 : _MPEG_V1_BITRATES_layer[bitrateIndex] : (_MPEG_V2_BITRATES_layer = MPEG_V2_BITRATES[layer]) === null || _MPEG_V2_BITRATES_layer === void 0 ? void 0 : _MPEG_V2_BITRATES_layer[bitrateIndex];
    if (!kilobitRate || kilobitRate === -1) {
        return null;
    }
    const bitrate = kilobitRate * 1000;
    const sampleRate = (_SAMPLING_RATES_mpegVersionId = SAMPLING_RATES[mpegVersionId]) === null || _SAMPLING_RATES_mpegVersionId === void 0 ? void 0 : _SAMPLING_RATES_mpegVersionId[frequencyIndex];
    if (!sampleRate || sampleRate === -1) {
        return null;
    }
    const frameLength = computeMp3FrameSize(layer, bitrate, sampleRate, padding);
    if (reader.fileSize !== null && reader.fileSize - startPos < frameLength) {
        // The frame doesn't fit into the rest of the file
        return null;
    }
    let audioSamplesInFrame;
    if (mpegVersionId === 3) {
        audioSamplesInFrame = layer === 3 ? 384 : 1152;
    } else {
        if (layer === 3) {
            audioSamplesInFrame = 384;
        } else if (layer === 2) {
            audioSamplesInFrame = 1152;
        } else {
            audioSamplesInFrame = 576;
        }
    }
    return {
        startPos: startPos,
        totalSize: frameLength,
        mpegVersionId,
        layer,
        bitrate,
        frequencyIndex,
        sampleRate,
        channel,
        modeExtension,
        copyright,
        original,
        emphasis,
        audioSamplesInFrame
    };
};
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/mp3/mp3-reader.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "Mp3Reader": ()=>Mp3Reader,
    "decodeSynchsafe": ()=>decodeSynchsafe
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/shared/mp3-misc.js [app-client] (ecmascript)");
;
;
class Mp3Reader {
    readBytes(length) {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + length);
        this.pos += length;
        return new Uint8Array(view.buffer, offset, length);
    }
    readU16() {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + 2);
        this.pos += 2;
        return view.getUint16(offset, false);
    }
    readU32() {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + 4);
        this.pos += 4;
        return view.getUint32(offset, false);
    }
    readAscii(length) {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + length);
        this.pos += length;
        let str = '';
        for(let i = 0; i < length; i++){
            str += String.fromCharCode(view.getUint8(offset + i));
        }
        return str;
    }
    readId3() {
        const tag = this.readAscii(3);
        if (tag !== 'ID3') {
            this.pos -= 3;
            return null;
        }
        this.pos += 3;
        const size = decodeSynchsafe(this.readU32());
        return {
            size
        };
    }
    readNextFrameHeader(until) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.fileSize);
        until !== null && until !== void 0 ? until : until = this.fileSize;
        while(this.pos <= until - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_HEADER_SIZE"]){
            const word = this.readU32();
            this.pos -= 4;
            const header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readFrameHeader"])(word, this);
            if (header) {
                return header;
            }
        }
        return null;
    }
    constructor(reader){
        this.reader = reader;
        this.pos = 0;
        this.fileSize = null;
    }
}
const decodeSynchsafe = (synchsafed)=>{
    let mask = 0x7f000000;
    let unsynchsafed = 0;
    while(mask !== 0){
        unsynchsafed >>= 1;
        unsynchsafed |= synchsafed & mask;
        mask >>= 8;
    }
    return unsynchsafed;
};
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/mp3/mp3-demuxer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "Mp3Demuxer": ()=>Mp3Demuxer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/demuxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/input-track.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/packet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/shared/mp3-misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$mp3$2f$mp3$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/mp3/mp3-reader.js [app-client] (ecmascript)");
;
;
;
;
;
;
class Mp3Demuxer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Demuxer"] {
    async readMetadata() {
        var _this_metadataPromise;
        return (_this_metadataPromise = this.metadataPromise) !== null && _this_metadataPromise !== void 0 ? _this_metadataPromise : this.metadataPromise = (async ()=>{
            this.fileSize = await this.input.source.getSize();
            this.reader.fileSize = this.fileSize;
            // Keep loading until we find the first frame header
            while(!this.firstFrameHeader && this.lastLoadedPos < this.fileSize){
                await this.loadNextChunk();
            }
            // There has to be a frame if this demuxer got selected
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.firstFrameHeader);
            this.tracks = [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputAudioTrack"](new Mp3AudioTrackBacking(this))
            ];
        })();
    }
    /** Loads the next 0.5 MiB of frames. */ async loadNextChunk() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.lastLoadedPos < this.fileSize);
        const chunkSize = 0.5 * 1024 * 1024; // 0.5 MiB
        const endPos = Math.min(this.lastLoadedPos + chunkSize, this.fileSize);
        await this.reader.reader.loadRange(this.lastLoadedPos, endPos);
        this.lastLoadedPos = endPos;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.lastLoadedPos <= this.fileSize);
        if (this.reader.pos === 0) {
            // First time, let's see if there's an ID3 tag
            const id3Tag = this.reader.readId3();
            if (id3Tag) {
                this.reader.pos += id3Tag.size;
            }
        }
        this.parseFramesFromLoadedData();
    }
    parseFramesFromLoadedData() {
        while(true){
            const startPos = this.reader.pos;
            const header = this.reader.readNextFrameHeader();
            if (!header) {
                break;
            }
            // Check if the entire frame fits in the loaded data
            if (header.startPos + header.totalSize > this.lastLoadedPos) {
                // Frame doesn't fit, reset positions and stop
                this.reader.pos = startPos;
                this.lastLoadedPos = startPos; // Snap this back too so that the next read is frame-aligned
                break;
            }
            const xingOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXingOffset"])(header.mpegVersionId, header.channel);
            this.reader.pos = header.startPos + xingOffset;
            const word = this.reader.readU32();
            const isXing = word === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XING"] || word === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INFO"];
            this.reader.pos = header.startPos + header.totalSize - 1; // -1 in case the frame is 1 byte too short
            if (isXing) {
                continue;
            }
            if (!this.firstFrameHeader) {
                this.firstFrameHeader = header;
            }
            const sampleDuration = header.audioSamplesInFrame / header.sampleRate;
            const sample = {
                timestamp: this.nextTimestampInSamples / header.sampleRate,
                duration: sampleDuration,
                dataStart: header.startPos,
                dataSize: header.totalSize
            };
            this.loadedSamples.push(sample);
            this.nextTimestampInSamples += header.audioSamplesInFrame;
        }
    }
    async getMimeType() {
        return 'audio/mpeg';
    }
    async getTracks() {
        await this.readMetadata();
        return this.tracks;
    }
    async computeDuration() {
        await this.readMetadata();
        const track = this.tracks[0];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track);
        return track.computeDuration();
    }
    constructor(input){
        super(input);
        this.metadataPromise = null;
        this.firstFrameHeader = null;
        this.loadedSamples = []; // All samples from the start of the file to lastLoadedPos
        this.tracks = [];
        this.readingMutex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncMutex"]();
        this.lastLoadedPos = 0;
        this.fileSize = 0;
        this.nextTimestampInSamples = 0;
        this.reader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$mp3$2f$mp3$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mp3Reader"](input._mainReader);
    }
}
class Mp3AudioTrackBacking {
    getId() {
        return 1;
    }
    async getFirstTimestamp() {
        return 0;
    }
    getTimeResolution() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.demuxer.firstFrameHeader);
        return this.demuxer.firstFrameHeader.sampleRate / this.demuxer.firstFrameHeader.audioSamplesInFrame;
    }
    async computeDuration() {
        const lastPacket = await this.getPacket(Infinity, {
            metadataOnly: true
        });
        var _lastPacket_timestamp, _lastPacket_duration;
        return ((_lastPacket_timestamp = lastPacket === null || lastPacket === void 0 ? void 0 : lastPacket.timestamp) !== null && _lastPacket_timestamp !== void 0 ? _lastPacket_timestamp : 0) + ((_lastPacket_duration = lastPacket === null || lastPacket === void 0 ? void 0 : lastPacket.duration) !== null && _lastPacket_duration !== void 0 ? _lastPacket_duration : 0);
    }
    getLanguageCode() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNDETERMINED_LANGUAGE"];
    }
    getCodec() {
        return 'mp3';
    }
    getNumberOfChannels() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.demuxer.firstFrameHeader);
        return this.demuxer.firstFrameHeader.channel === 3 ? 1 : 2;
    }
    getSampleRate() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.demuxer.firstFrameHeader);
        return this.demuxer.firstFrameHeader.sampleRate;
    }
    async getDecoderConfig() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.demuxer.firstFrameHeader);
        return {
            codec: 'mp3',
            numberOfChannels: this.demuxer.firstFrameHeader.channel === 3 ? 1 : 2,
            sampleRate: this.demuxer.firstFrameHeader.sampleRate
        };
    }
    getPacketAtIndex(sampleIndex, options) {
        if (sampleIndex === -1) {
            return null;
        }
        const rawSample = this.demuxer.loadedSamples[sampleIndex];
        if (!rawSample) {
            return null;
        }
        let data;
        if (options.metadataOnly) {
            data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLACEHOLDER_DATA"];
        } else {
            this.demuxer.reader.pos = rawSample.dataStart;
            data = this.demuxer.reader.readBytes(rawSample.dataSize);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"](data, 'key', rawSample.timestamp, rawSample.duration, sampleIndex, rawSample.dataSize);
    }
    async getFirstPacket(options) {
        return this.getPacketAtIndex(0, options);
    }
    async getNextPacket(packet, options) {
        const release = await this.demuxer.readingMutex.acquire();
        try {
            const sampleIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(this.demuxer.loadedSamples, packet.timestamp, (x)=>x.timestamp);
            if (sampleIndex === -1) {
                throw new Error('Packet was not created from this track.');
            }
            const nextIndex = sampleIndex + 1;
            // Ensure the next sample exists
            while(nextIndex >= this.demuxer.loadedSamples.length && this.demuxer.lastLoadedPos < this.demuxer.fileSize){
                await this.demuxer.loadNextChunk();
            }
            return this.getPacketAtIndex(nextIndex, options);
        } finally{
            release();
        }
    }
    async getPacket(timestamp, options) {
        const release = await this.demuxer.readingMutex.acquire();
        try {
            while(true){
                const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(this.demuxer.loadedSamples, timestamp, (x)=>x.timestamp);
                if (index === -1 && this.demuxer.loadedSamples.length > 0) {
                    // We're before the first sample
                    return null;
                }
                if (this.demuxer.lastLoadedPos === this.demuxer.fileSize) {
                    // All data is loaded, return what we found
                    return this.getPacketAtIndex(index, options);
                }
                if (index >= 0 && index + 1 < this.demuxer.loadedSamples.length) {
                    // The next packet also exists, we're done
                    return this.getPacketAtIndex(index, options);
                }
                // Otherwise, keep loading data
                await this.demuxer.loadNextChunk();
            }
        } finally{
            release();
        }
    }
    getKeyPacket(timestamp, options) {
        return this.getPacket(timestamp, options);
    }
    getNextKeyPacket(packet, options) {
        return this.getNextPacket(packet, options);
    }
    constructor(demuxer){
        this.demuxer = demuxer;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/ogg/ogg-misc.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "OGGS": ()=>OGGS,
    "buildOggMimeType": ()=>buildOggMimeType,
    "computeOggPageCrc": ()=>computeOggPageCrc,
    "extractSampleMetadata": ()=>extractSampleMetadata
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
;
;
const OGGS = 0x5367674f; // 'OggS'
const OGG_CRC_POLYNOMIAL = 0x04c11db7;
const OGG_CRC_TABLE = new Uint32Array(256);
for(let n = 0; n < 256; n++){
    let crc = n << 24;
    for(let k = 0; k < 8; k++){
        crc = crc & 0x80000000 ? crc << 1 ^ OGG_CRC_POLYNOMIAL : crc << 1;
    }
    OGG_CRC_TABLE[n] = crc >>> 0 & 0xffffffff;
}
const computeOggPageCrc = (bytes)=>{
    const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDataView"])(bytes);
    const originalChecksum = view.getUint32(22, true);
    view.setUint32(22, 0, true); // Zero out checksum field
    let crc = 0;
    for(let i = 0; i < bytes.length; i++){
        const byte = bytes[i];
        crc = (crc << 8 ^ OGG_CRC_TABLE[crc >>> 24 ^ byte]) >>> 0;
    }
    view.setUint32(22, originalChecksum, true); // Restore checksum field
    return crc;
};
const extractSampleMetadata = (data, codecInfo, vorbisLastBlocksize)=>{
    let durationInSamples = 0;
    let currentBlocksize = null;
    if (data.length > 0) {
        // To know sample duration, we'll need to peak inside the packet
        if (codecInfo.codec === 'vorbis') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(codecInfo.vorbisInfo);
            const vorbisModeCount = codecInfo.vorbisInfo.modeBlockflags.length;
            const bitCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ilog"])(vorbisModeCount - 1);
            const modeMask = (1 << bitCount) - 1 << 1;
            const modeNumber = (data[0] & modeMask) >> 1;
            if (modeNumber >= codecInfo.vorbisInfo.modeBlockflags.length) {
                throw new Error('Invalid mode number.');
            }
            // In Vorbis, packet duration also depends on the blocksize of the previous packet
            let prevBlocksize = vorbisLastBlocksize;
            const blockflag = codecInfo.vorbisInfo.modeBlockflags[modeNumber];
            currentBlocksize = codecInfo.vorbisInfo.blocksizes[blockflag];
            if (blockflag === 1) {
                const prevMask = (modeMask | 0x1) + 1;
                const flag = data[0] & prevMask ? 1 : 0;
                prevBlocksize = codecInfo.vorbisInfo.blocksizes[flag];
            }
            durationInSamples = prevBlocksize !== null ? prevBlocksize + currentBlocksize >> 2 : 0; // The first sample outputs no audio data and therefore has a duration of 0
        } else if (codecInfo.codec === 'opus') {
            const toc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseOpusTocByte"])(data);
            durationInSamples = toc.durationInSamples;
        }
    }
    return {
        durationInSamples,
        vorbisBlockSize: currentBlocksize
    };
};
const buildOggMimeType = (info)=>{
    let string = 'audio/ogg';
    if (info.codecStrings) {
        const uniqueCodecMimeTypes = [
            ...new Set(info.codecStrings)
        ];
        string += '; codecs="'.concat(uniqueCodecMimeTypes.join(', '), '"');
    }
    return string;
};
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/ogg/ogg-reader.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "MAX_PAGE_HEADER_SIZE": ()=>MAX_PAGE_HEADER_SIZE,
    "MAX_PAGE_SIZE": ()=>MAX_PAGE_SIZE,
    "MIN_PAGE_HEADER_SIZE": ()=>MIN_PAGE_HEADER_SIZE,
    "OggReader": ()=>OggReader
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/ogg/ogg-misc.js [app-client] (ecmascript)");
;
const MIN_PAGE_HEADER_SIZE = 27;
const MAX_PAGE_HEADER_SIZE = 27 + 255;
const MAX_PAGE_SIZE = MAX_PAGE_HEADER_SIZE + 255 * 255;
class OggReader {
    readBytes(length) {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + length);
        this.pos += length;
        return new Uint8Array(view.buffer, offset, length);
    }
    readU8() {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + 1);
        this.pos += 1;
        return view.getUint8(offset);
    }
    readU32() {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + 4);
        this.pos += 4;
        return view.getUint32(offset, true);
    }
    readI32() {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + 4);
        this.pos += 4;
        return view.getInt32(offset, true);
    }
    readI64() {
        const low = this.readU32();
        const high = this.readI32();
        return high * 0x100000000 + low;
    }
    readAscii(length) {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + length);
        this.pos += length;
        let str = '';
        for(let i = 0; i < length; i++){
            str += String.fromCharCode(view.getUint8(offset + i));
        }
        return str;
    }
    readPageHeader() {
        const startPos = this.pos;
        const capturePattern = this.readU32();
        if (capturePattern !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OGGS"]) {
            return null;
        }
        this.pos += 1; // Version
        const headerType = this.readU8();
        const granulePosition = this.readI64();
        const serialNumber = this.readU32();
        const sequenceNumber = this.readU32();
        const checksum = this.readU32();
        const numberPageSegments = this.readU8();
        const lacingValues = new Uint8Array(numberPageSegments);
        for(let i = 0; i < numberPageSegments; i++){
            lacingValues[i] = this.readU8();
        }
        const headerSize = 27 + numberPageSegments;
        const dataSize = lacingValues.reduce((a, b)=>a + b, 0);
        const totalSize = headerSize + dataSize;
        return {
            headerStartPos: startPos,
            totalSize,
            dataStartPos: startPos + headerSize,
            dataSize,
            headerType,
            granulePosition,
            serialNumber,
            sequenceNumber,
            checksum,
            lacingValues
        };
    }
    findNextPageHeader(until) {
        while(this.pos < until - (4 - 1)){
            const word = this.readU32();
            const firstByte = word & 0xff;
            const secondByte = word >>> 8 & 0xff;
            const thirdByte = word >>> 16 & 0xff;
            const fourthByte = word >>> 24 & 0xff;
            const O = 0x4f; // 'O'
            if (firstByte !== O && secondByte !== O && thirdByte !== O && fourthByte !== O) {
                continue;
            }
            this.pos -= 4;
            if (word === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OGGS"]) {
                // We have found the capture pattern
                return true;
            }
            this.pos += 1;
        }
        return false;
    }
    constructor(reader){
        this.reader = reader;
        this.pos = 0;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/ogg/ogg-demuxer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "OggDemuxer": ()=>OggDemuxer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/demuxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/input-track.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/packet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/reader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/ogg/ogg-misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/ogg/ogg-reader.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
class OggDemuxer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Demuxer"] {
    async readMetadata() {
        var _this_metadataPromise;
        return (_this_metadataPromise = this.metadataPromise) !== null && _this_metadataPromise !== void 0 ? _this_metadataPromise : this.metadataPromise = (async ()=>{
            this.fileSize = await this.input.source.getSize();
            while(this.reader.pos < this.fileSize - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_PAGE_HEADER_SIZE"]){
                await this.reader.reader.loadRange(this.reader.pos, this.reader.pos + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_PAGE_HEADER_SIZE"]);
                const page = this.reader.readPageHeader();
                if (!page) {
                    break;
                }
                const isBos = !!(page.headerType & 0x02);
                if (!isBos) {
                    break;
                }
                this.bitstreams.push({
                    serialNumber: page.serialNumber,
                    bosPage: page,
                    description: null,
                    numberOfChannels: -1,
                    sampleRate: -1,
                    codecInfo: {
                        codec: null,
                        vorbisInfo: null,
                        opusInfo: null
                    },
                    lastMetadataPacket: null
                });
                this.reader.pos = page.headerStartPos + page.totalSize;
            }
            for (const bitstream of this.bitstreams){
                const firstPacket = await this.readPacket(this.reader, bitstream.bosPage, 0);
                if (!firstPacket) {
                    continue;
                }
                if (// Check for Vorbis
                firstPacket.data.byteLength >= 7 && firstPacket.data[0] === 0x01 // Packet type 1 = identification header
                 && firstPacket.data[1] === 0x76 // 'v'
                 && firstPacket.data[2] === 0x6f // 'o'
                 && firstPacket.data[3] === 0x72 // 'r'
                 && firstPacket.data[4] === 0x62 // 'b'
                 && firstPacket.data[5] === 0x69 // 'i'
                 && firstPacket.data[6] === 0x73 // 's'
                ) {
                    await this.readVorbisMetadata(firstPacket, bitstream);
                } else if (// Check for Opus
                firstPacket.data.byteLength >= 8 && firstPacket.data[0] === 0x4f // 'O'
                 && firstPacket.data[1] === 0x70 // 'p'
                 && firstPacket.data[2] === 0x75 // 'u'
                 && firstPacket.data[3] === 0x73 // 's'
                 && firstPacket.data[4] === 0x48 // 'H'
                 && firstPacket.data[5] === 0x65 // 'e'
                 && firstPacket.data[6] === 0x61 // 'a'
                 && firstPacket.data[7] === 0x64 // 'd'
                ) {
                    await this.readOpusMetadata(firstPacket, bitstream);
                }
                if (bitstream.codecInfo.codec !== null) {
                    this.tracks.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputAudioTrack"](new OggAudioTrackBacking(bitstream, this)));
                }
            }
        })();
    }
    async readVorbisMetadata(firstPacket, bitstream) {
        let nextPacketPosition = await this.findNextPacketStart(this.reader, firstPacket);
        if (!nextPacketPosition) {
            return;
        }
        const secondPacket = await this.readPacket(this.reader, nextPacketPosition.startPage, nextPacketPosition.startSegmentIndex);
        if (!secondPacket) {
            return;
        }
        nextPacketPosition = await this.findNextPacketStart(this.reader, secondPacket);
        if (!nextPacketPosition) {
            return;
        }
        const thirdPacket = await this.readPacket(this.reader, nextPacketPosition.startPage, nextPacketPosition.startSegmentIndex);
        if (!thirdPacket) {
            return;
        }
        if (secondPacket.data[0] !== 0x03 || thirdPacket.data[0] !== 0x05) {
            return;
        }
        const lacingValues = [];
        const addBytesToSegmentTable = (bytes)=>{
            while(true){
                lacingValues.push(Math.min(255, bytes));
                if (bytes < 255) {
                    break;
                }
                bytes -= 255;
            }
        };
        addBytesToSegmentTable(firstPacket.data.length);
        addBytesToSegmentTable(secondPacket.data.length);
        // We don't add the last packet to the segment table, as it is assumed to be whatever bytes remain
        const description = new Uint8Array(1 + lacingValues.length + firstPacket.data.length + secondPacket.data.length + thirdPacket.data.length);
        description[0] = lacingValues.length;
        description.set(lacingValues, 1);
        description.set(firstPacket.data, 1 + lacingValues.length);
        description.set(secondPacket.data, 1 + lacingValues.length + firstPacket.data.length);
        description.set(thirdPacket.data, 1 + lacingValues.length + firstPacket.data.length + secondPacket.data.length);
        bitstream.codecInfo.codec = 'vorbis';
        bitstream.description = description;
        bitstream.lastMetadataPacket = thirdPacket;
        const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDataView"])(firstPacket.data);
        bitstream.numberOfChannels = view.getUint8(11);
        bitstream.sampleRate = view.getUint32(12, true);
        const blockSizeByte = view.getUint8(28);
        bitstream.codecInfo.vorbisInfo = {
            blocksizes: [
                1 << (blockSizeByte & 0xf),
                1 << (blockSizeByte >> 4)
            ],
            modeBlockflags: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseModesFromVorbisSetupPacket"])(thirdPacket.data).modeBlockflags
        };
    }
    async readOpusMetadata(firstPacket, bitstream) {
        // From https://datatracker.ietf.org/doc/html/rfc7845#section-5:
        // "An Ogg Opus logical stream contains exactly two mandatory header packets: an identification header and a
        // comment header."
        const nextPacketPosition = await this.findNextPacketStart(this.reader, firstPacket);
        if (!nextPacketPosition) {
            return;
        }
        const secondPacket = await this.readPacket(this.reader, nextPacketPosition.startPage, nextPacketPosition.startSegmentIndex);
        if (!secondPacket) {
            return;
        }
        // We don't make use of the comment header's data
        bitstream.codecInfo.codec = 'opus';
        bitstream.description = firstPacket.data;
        bitstream.lastMetadataPacket = secondPacket;
        const header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseOpusIdentificationHeader"])(firstPacket.data);
        bitstream.numberOfChannels = header.outputChannelCount;
        bitstream.sampleRate = header.inputSampleRate;
        bitstream.codecInfo.opusInfo = {
            preSkip: header.preSkip
        };
    }
    async readPacket(reader, startPage, startSegmentIndex) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(startSegmentIndex < startPage.lacingValues.length);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.fileSize);
        let startDataOffset = 0;
        for(let i = 0; i < startSegmentIndex; i++){
            startDataOffset += startPage.lacingValues[i];
        }
        let currentPage = startPage;
        let currentDataOffset = startDataOffset;
        let currentSegmentIndex = startSegmentIndex;
        const chunks = [];
        outer: while(true){
            // Load the entire page data
            await reader.reader.loadRange(currentPage.dataStartPos, currentPage.dataStartPos + currentPage.dataSize);
            reader.pos = currentPage.dataStartPos;
            const pageData = reader.readBytes(currentPage.dataSize);
            while(true){
                if (currentSegmentIndex === currentPage.lacingValues.length) {
                    chunks.push(pageData.subarray(startDataOffset, currentDataOffset));
                    break;
                }
                const lacingValue = currentPage.lacingValues[currentSegmentIndex];
                currentDataOffset += lacingValue;
                if (lacingValue < 255) {
                    chunks.push(pageData.subarray(startDataOffset, currentDataOffset));
                    break outer;
                }
                currentSegmentIndex++;
            }
            // The packet extends to the next page; let's find it
            while(true){
                reader.pos = currentPage.headerStartPos + currentPage.totalSize;
                if (reader.pos >= this.fileSize - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_PAGE_HEADER_SIZE"]) {
                    return null;
                }
                await reader.reader.loadRange(reader.pos, reader.pos + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_PAGE_HEADER_SIZE"]);
                const nextPage = reader.readPageHeader();
                if (!nextPage) {
                    return null;
                }
                currentPage = nextPage;
                if (currentPage.serialNumber === startPage.serialNumber) {
                    break;
                }
            }
            startDataOffset = 0;
            currentDataOffset = 0;
            currentSegmentIndex = 0;
        }
        const totalPacketSize = chunks.reduce((sum, chunk)=>sum + chunk.length, 0);
        const packetData = new Uint8Array(totalPacketSize);
        let offset = 0;
        for(let i = 0; i < chunks.length; i++){
            const chunk = chunks[i];
            packetData.set(chunk, offset);
            offset += chunk.length;
        }
        return {
            data: packetData,
            endPage: currentPage,
            endSegmentIndex: currentSegmentIndex
        };
    }
    async findNextPacketStart(reader, lastPacket) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.fileSize !== null);
        // If there's another segment in the same page, return it
        if (lastPacket.endSegmentIndex < lastPacket.endPage.lacingValues.length - 1) {
            return {
                startPage: lastPacket.endPage,
                startSegmentIndex: lastPacket.endSegmentIndex + 1
            };
        }
        const isEos = !!(lastPacket.endPage.headerType & 0x04);
        if (isEos) {
            // The page is marked as the last page of the logical bitstream, so we won't find anything beyond it
            return null;
        }
        // Otherwise, search for the next page belonging to the same bitstream
        reader.pos = lastPacket.endPage.headerStartPos + lastPacket.endPage.totalSize;
        while(true){
            if (reader.pos >= this.fileSize - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_PAGE_HEADER_SIZE"]) {
                return null;
            }
            await reader.reader.loadRange(reader.pos, reader.pos + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_PAGE_HEADER_SIZE"]);
            const nextPage = reader.readPageHeader();
            if (!nextPage) {
                return null;
            }
            if (nextPage.serialNumber === lastPacket.endPage.serialNumber) {
                return {
                    startPage: nextPage,
                    startSegmentIndex: 0
                };
            }
            reader.pos = nextPage.headerStartPos + nextPage.totalSize;
        }
    }
    async getMimeType() {
        await this.readMetadata();
        const codecStrings = await Promise.all(this.tracks.map((x)=>x.getCodecParameterString()));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildOggMimeType"])({
            codecStrings: codecStrings.filter(Boolean)
        });
    }
    async getTracks() {
        await this.readMetadata();
        return this.tracks;
    }
    async computeDuration() {
        const tracks = await this.getTracks();
        const trackDurations = await Promise.all(tracks.map((x)=>x.computeDuration()));
        return Math.max(0, ...trackDurations);
    }
    constructor(input){
        super(input);
        /**
         * Lots of reading operations require multiple async reads and thus need to be mutually exclusive to avoid
         * conflicts in reader position.
         */ this.readingMutex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncMutex"]();
        this.metadataPromise = null;
        this.fileSize = null;
        this.bitstreams = [];
        this.tracks = [];
        // We don't need a persistent metadata reader as we read all metadata once at the start and then never again
        this.reader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OggReader"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reader"](input.source, 64 * 2 ** 20));
    }
}
class OggAudioTrackBacking {
    getId() {
        return this.bitstream.serialNumber;
    }
    getNumberOfChannels() {
        return this.bitstream.numberOfChannels;
    }
    getSampleRate() {
        return this.bitstream.sampleRate;
    }
    getTimeResolution() {
        return this.bitstream.sampleRate;
    }
    getCodec() {
        return this.bitstream.codecInfo.codec;
    }
    async getDecoderConfig() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.bitstream.codecInfo.codec);
        var _this_bitstream_description;
        return {
            codec: this.bitstream.codecInfo.codec,
            numberOfChannels: this.bitstream.numberOfChannels,
            sampleRate: this.bitstream.sampleRate,
            description: (_this_bitstream_description = this.bitstream.description) !== null && _this_bitstream_description !== void 0 ? _this_bitstream_description : undefined
        };
    }
    getLanguageCode() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNDETERMINED_LANGUAGE"];
    }
    async getFirstTimestamp() {
        return 0;
    }
    async computeDuration() {
        const lastPacket = await this.getPacket(Infinity, {
            metadataOnly: true
        });
        var _lastPacket_timestamp, _lastPacket_duration;
        return ((_lastPacket_timestamp = lastPacket === null || lastPacket === void 0 ? void 0 : lastPacket.timestamp) !== null && _lastPacket_timestamp !== void 0 ? _lastPacket_timestamp : 0) + ((_lastPacket_duration = lastPacket === null || lastPacket === void 0 ? void 0 : lastPacket.duration) !== null && _lastPacket_duration !== void 0 ? _lastPacket_duration : 0);
    }
    granulePositionToTimestampInSamples(granulePosition) {
        if (this.bitstream.codecInfo.codec === 'opus') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.bitstream.codecInfo.opusInfo);
            return granulePosition - this.bitstream.codecInfo.opusInfo.preSkip;
        }
        return granulePosition;
    }
    createEncodedPacketFromOggPacket(packet, additional, options) {
        if (!packet) {
            return null;
        }
        const { durationInSamples, vorbisBlockSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractSampleMetadata"])(packet.data, this.bitstream.codecInfo, additional.vorbisLastBlocksize);
        const encodedPacket = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"](options.metadataOnly ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLACEHOLDER_DATA"] : packet.data, 'key', Math.max(0, additional.timestampInSamples) / this.internalSampleRate, durationInSamples / this.internalSampleRate, packet.endPage.headerStartPos + packet.endSegmentIndex, packet.data.byteLength);
        this.encodedPacketToMetadata.set(encodedPacket, {
            packet,
            timestampInSamples: additional.timestampInSamples,
            durationInSamples,
            vorbisBlockSize
        });
        return encodedPacket;
    }
    async getFirstPacket(options) {
        let exclusive = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        const release = exclusive ? await this.demuxer.readingMutex.acquire() : null;
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.bitstream.lastMetadataPacket);
            const packetPosition = await this.demuxer.findNextPacketStart(this.demuxer.reader, this.bitstream.lastMetadataPacket);
            if (!packetPosition) {
                return null;
            }
            let timestampInSamples = 0;
            if (this.bitstream.codecInfo.codec === 'opus') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.bitstream.codecInfo.opusInfo);
                timestampInSamples -= this.bitstream.codecInfo.opusInfo.preSkip;
            }
            const packet = await this.demuxer.readPacket(this.demuxer.reader, packetPosition.startPage, packetPosition.startSegmentIndex);
            return this.createEncodedPacketFromOggPacket(packet, {
                timestampInSamples,
                vorbisLastBlocksize: null
            }, options);
        } finally{
            release === null || release === void 0 ? void 0 : release();
        }
    }
    async getNextPacket(prevPacket, options) {
        const release = await this.demuxer.readingMutex.acquire();
        try {
            const prevMetadata = this.encodedPacketToMetadata.get(prevPacket);
            if (!prevMetadata) {
                throw new Error('Packet was not created from this track.');
            }
            const packetPosition = await this.demuxer.findNextPacketStart(this.demuxer.reader, prevMetadata.packet);
            if (!packetPosition) {
                return null;
            }
            const timestampInSamples = prevMetadata.timestampInSamples + prevMetadata.durationInSamples;
            const packet = await this.demuxer.readPacket(this.demuxer.reader, packetPosition.startPage, packetPosition.startSegmentIndex);
            return this.createEncodedPacketFromOggPacket(packet, {
                timestampInSamples,
                vorbisLastBlocksize: prevMetadata.vorbisBlockSize
            }, options);
        } finally{
            release();
        }
    }
    async getPacket(timestamp, options) {
        const release = await this.demuxer.readingMutex.acquire();
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.demuxer.fileSize !== null);
            const timestampInSamples = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundToPrecision"])(timestamp * this.internalSampleRate, 14);
            if (timestampInSamples === 0) {
                // Fast path for timestamp 0 - avoids binary search when playing back from the start
                return this.getFirstPacket(options, false);
            }
            if (timestampInSamples < 0) {
                // There's nothing here
                return null;
            }
            const reader = this.demuxer.reader;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.bitstream.lastMetadataPacket);
            const startPosition = await this.demuxer.findNextPacketStart(reader, this.bitstream.lastMetadataPacket);
            if (!startPosition) {
                return null;
            }
            let lowPage = startPosition.startPage;
            let high = this.demuxer.fileSize;
            const lowPages = [
                lowPage
            ];
            // First, let's perform a binary serach (bisection search) on the file to find the approximate page where
            // we'll find the packet. We want to find a page whose end packet position is less than or equal to the
            // packet position we're searching for.
            // Outer loop: Does the binary serach
            outer: while(lowPage.headerStartPos + lowPage.totalSize < high){
                const low = lowPage.headerStartPos;
                const mid = Math.floor((low + high) / 2);
                let searchStartPos = mid;
                // Inner loop: Does a linear forward scan if the page cannot be found immediately
                while(true){
                    const until = Math.min(searchStartPos + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_PAGE_SIZE"], high - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_PAGE_HEADER_SIZE"]);
                    await reader.reader.loadRange(searchStartPos, until);
                    reader.pos = searchStartPos;
                    const found = reader.findNextPageHeader(until);
                    if (!found) {
                        high = mid + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_PAGE_HEADER_SIZE"];
                        continue outer;
                    }
                    await reader.reader.loadRange(reader.pos, reader.pos + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_PAGE_HEADER_SIZE"]);
                    const page = reader.readPageHeader();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(page);
                    let pageValid = false;
                    if (page.serialNumber === this.bitstream.serialNumber) {
                        // Serial numbers are basically random numbers, and the chance of finding a fake page with
                        // matching serial number is astronomically low, so we can be pretty sure this page is legit.
                        pageValid = true;
                    } else {
                        await reader.reader.loadRange(page.headerStartPos, page.headerStartPos + page.totalSize);
                        // Validate the page by checking checksum
                        reader.pos = page.headerStartPos;
                        const bytes = reader.readBytes(page.totalSize);
                        const crc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeOggPageCrc"])(bytes);
                        pageValid = crc === page.checksum;
                    }
                    if (!pageValid) {
                        // Keep searching for a valid page
                        searchStartPos = page.headerStartPos + 4; // 'OggS' is 4 bytes
                        continue;
                    }
                    if (pageValid && page.serialNumber !== this.bitstream.serialNumber) {
                        // Page is valid but from a different bitstream, so keep searching forward until we find one
                        // belonging to the our bitstream
                        searchStartPos = page.headerStartPos + page.totalSize;
                        continue;
                    }
                    const isContinuationPage = page.granulePosition === -1;
                    if (isContinuationPage) {
                        // No packet ends on this page - keep looking
                        searchStartPos = page.headerStartPos + page.totalSize;
                        continue;
                    }
                    // The page is valid and belongs to our bitstream; let's check its granule position to see where we
                    // need to take the bisection search.
                    if (this.granulePositionToTimestampInSamples(page.granulePosition) > timestampInSamples) {
                        high = page.headerStartPos;
                    } else {
                        lowPage = page;
                        lowPages.push(page);
                    }
                    continue outer;
                }
            }
            // Now we have the last page with a packet position <= the packet position we're looking for, but there
            // might be multiple pages with the packet position, in which case we actually need to find the first of
            // such pages. We'll do this in two steps: First, let's find the latest page we know with an earlier packet
            // position, and then linear scan ourselves forward until we find the correct page.
            let lowerPage = startPosition.startPage;
            for (const otherLowPage of lowPages){
                if (otherLowPage.granulePosition === lowPage.granulePosition) {
                    break;
                }
                if (!lowerPage || otherLowPage.headerStartPos > lowerPage.headerStartPos) {
                    lowerPage = otherLowPage;
                }
            }
            let currentPage = lowerPage;
            // Keep track of the pages we traversed, we need these later for backwards seeking
            const previousPages = [
                currentPage
            ];
            while(true){
                // This loop must terminate as we'll eventually reach lowPage
                if (currentPage.serialNumber === this.bitstream.serialNumber && currentPage.granulePosition === lowPage.granulePosition) {
                    break;
                }
                reader.pos = currentPage.headerStartPos + currentPage.totalSize;
                await reader.reader.loadRange(reader.pos, reader.pos + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_PAGE_HEADER_SIZE"]);
                const nextPage = reader.readPageHeader();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(nextPage);
                currentPage = nextPage;
                if (currentPage.serialNumber === this.bitstream.serialNumber) {
                    previousPages.push(currentPage);
                }
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(currentPage.granulePosition !== -1);
            let currentSegmentIndex = null;
            let currentTimestampInSamples;
            let currentTimestampIsCorrect;
            // These indicate the end position of the packet that the granule position belongs to
            let endPage = currentPage;
            let endSegmentIndex = 0;
            if (currentPage.headerStartPos === startPosition.startPage.headerStartPos) {
                currentTimestampInSamples = this.granulePositionToTimestampInSamples(0);
                currentTimestampIsCorrect = true;
                currentSegmentIndex = 0;
            } else {
                currentTimestampInSamples = 0; // Placeholder value! We'll refine it once we can
                currentTimestampIsCorrect = false;
                // Find the segment index of the next packet
                for(let i = currentPage.lacingValues.length - 1; i >= 0; i--){
                    const value = currentPage.lacingValues[i];
                    if (value < 255) {
                        // We know the last packet ended at i, so the next one starts at i + 1
                        currentSegmentIndex = i + 1;
                        break;
                    }
                }
                // This must hold: Since this page has a granule position set, that means there must be a packet that
                // ends in this page.
                if (currentSegmentIndex === null) {
                    throw new Error('Invalid page with granule position: no packets end on this page.');
                }
                endSegmentIndex = currentSegmentIndex - 1;
                const pseudopacket = {
                    data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLACEHOLDER_DATA"],
                    endPage,
                    endSegmentIndex
                };
                const nextPosition = await this.demuxer.findNextPacketStart(reader, pseudopacket);
                if (nextPosition) {
                    // Let's rewind a single step (packet) - this previous packet ensures that we'll correctly compute
                    // the duration for the packet we're looking for.
                    const endPosition = findPreviousPacketEndPosition(previousPages, currentPage, currentSegmentIndex);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(endPosition);
                    const startPosition = findPacketStartPosition(previousPages, endPosition.page, endPosition.segmentIndex);
                    if (startPosition) {
                        currentPage = startPosition.page;
                        currentSegmentIndex = startPosition.segmentIndex;
                    }
                } else {
                    // There is no next position, which means we're looking for the last packet in the bitstream. The
                    // granule position on the last page tends to be fucky, so let's instead start the search on the
                    // page before that. So let's loop until we find a packet that ends in a previous page.
                    while(true){
                        const endPosition = findPreviousPacketEndPosition(previousPages, currentPage, currentSegmentIndex);
                        if (!endPosition) {
                            break;
                        }
                        const startPosition = findPacketStartPosition(previousPages, endPosition.page, endPosition.segmentIndex);
                        if (!startPosition) {
                            break;
                        }
                        currentPage = startPosition.page;
                        currentSegmentIndex = startPosition.segmentIndex;
                        if (endPosition.page.headerStartPos !== endPage.headerStartPos) {
                            endPage = endPosition.page;
                            endSegmentIndex = endPosition.segmentIndex;
                            break;
                        }
                    }
                }
            }
            let lastEncodedPacket = null;
            let lastEncodedPacketMetadata = null;
            // Alright, now it's time for the final, granular seek: We keep iterating over packets until we've found the
            // one with the correct timestamp - i.e., the last one with a timestamp <= the timestamp we're looking for.
            while(currentPage !== null){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(currentSegmentIndex !== null);
                const packet = await this.demuxer.readPacket(reader, currentPage, currentSegmentIndex);
                if (!packet) {
                    break;
                }
                // We might need to skip the packet if it's a metadata one
                const skipPacket = currentPage.headerStartPos === startPosition.startPage.headerStartPos && currentSegmentIndex < startPosition.startSegmentIndex;
                if (!skipPacket) {
                    var _lastEncodedPacketMetadata_vorbisBlockSize;
                    let encodedPacket = this.createEncodedPacketFromOggPacket(packet, {
                        timestampInSamples: currentTimestampInSamples,
                        vorbisLastBlocksize: (_lastEncodedPacketMetadata_vorbisBlockSize = lastEncodedPacketMetadata === null || lastEncodedPacketMetadata === void 0 ? void 0 : lastEncodedPacketMetadata.vorbisBlockSize) !== null && _lastEncodedPacketMetadata_vorbisBlockSize !== void 0 ? _lastEncodedPacketMetadata_vorbisBlockSize : null
                    }, options);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(encodedPacket);
                    let encodedPacketMetadata = this.encodedPacketToMetadata.get(encodedPacket);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(encodedPacketMetadata);
                    if (!currentTimestampIsCorrect && packet.endPage.headerStartPos === endPage.headerStartPos && packet.endSegmentIndex === endSegmentIndex) {
                        // We know this packet end timestamp can be derived from the page's granule position
                        currentTimestampInSamples = this.granulePositionToTimestampInSamples(currentPage.granulePosition);
                        currentTimestampIsCorrect = true;
                        var _lastEncodedPacketMetadata_vorbisBlockSize1;
                        // Let's backpatch the packet we just created with the correct timestamp
                        encodedPacket = this.createEncodedPacketFromOggPacket(packet, {
                            timestampInSamples: currentTimestampInSamples - encodedPacketMetadata.durationInSamples,
                            vorbisLastBlocksize: (_lastEncodedPacketMetadata_vorbisBlockSize1 = lastEncodedPacketMetadata === null || lastEncodedPacketMetadata === void 0 ? void 0 : lastEncodedPacketMetadata.vorbisBlockSize) !== null && _lastEncodedPacketMetadata_vorbisBlockSize1 !== void 0 ? _lastEncodedPacketMetadata_vorbisBlockSize1 : null
                        }, options);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(encodedPacket);
                        encodedPacketMetadata = this.encodedPacketToMetadata.get(encodedPacket);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(encodedPacketMetadata);
                    } else {
                        currentTimestampInSamples += encodedPacketMetadata.durationInSamples;
                    }
                    lastEncodedPacket = encodedPacket;
                    lastEncodedPacketMetadata = encodedPacketMetadata;
                    if (currentTimestampIsCorrect && (// Next timestamp will be too late
                    Math.max(currentTimestampInSamples, 0) > timestampInSamples || Math.max(encodedPacketMetadata.timestampInSamples, 0) === timestampInSamples)) {
                        break;
                    }
                }
                const nextPosition = await this.demuxer.findNextPacketStart(reader, packet);
                if (!nextPosition) {
                    break;
                }
                currentPage = nextPosition.startPage;
                currentSegmentIndex = nextPosition.startSegmentIndex;
            }
            return lastEncodedPacket;
        } finally{
            release();
        }
    }
    getKeyPacket(timestamp, options) {
        return this.getPacket(timestamp, options);
    }
    getNextKeyPacket(packet, options) {
        return this.getNextPacket(packet, options);
    }
    constructor(bitstream, demuxer){
        this.bitstream = bitstream;
        this.demuxer = demuxer;
        this.encodedPacketToMetadata = new WeakMap();
        // Opus always uses a fixed sample rate for its internal calculations, even if the actual rate is different
        this.internalSampleRate = bitstream.codecInfo.codec === 'opus' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OPUS_INTERNAL_SAMPLE_RATE"] : bitstream.sampleRate;
    }
}
/** Finds the start position of a packet given its end position. */ const findPacketStartPosition = (pageList, endPage, endSegmentIndex)=>{
    let page = endPage;
    let segmentIndex = endSegmentIndex;
    outer: while(true){
        segmentIndex--;
        for(segmentIndex; segmentIndex >= 0; segmentIndex--){
            const lacingValue = page.lacingValues[segmentIndex];
            if (lacingValue < 255) {
                segmentIndex++; // We know the last packet starts here
                break outer;
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(segmentIndex === -1);
        const pageStartsWithFreshPacket = !(page.headerType & 0x01);
        if (pageStartsWithFreshPacket) {
            // Fast exit: We know we don't need to look in the previous page
            segmentIndex = 0;
            break;
        }
        const previousPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findLast"])(pageList, (x)=>x.headerStartPos < page.headerStartPos);
        if (!previousPage) {
            return null;
        }
        page = previousPage;
        segmentIndex = page.lacingValues.length;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(segmentIndex !== -1);
    if (segmentIndex === page.lacingValues.length) {
        // Wrap back around to the first segment of the next page
        const nextPage = pageList[pageList.indexOf(page) + 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(nextPage);
        page = nextPage;
        segmentIndex = 0;
    }
    return {
        page,
        segmentIndex
    };
};
/** Finds the end position of a packet given the start position of the following packet. */ const findPreviousPacketEndPosition = (pageList, startPage, startSegmentIndex)=>{
    if (startSegmentIndex > 0) {
        // Easy
        return {
            page: startPage,
            segmentIndex: startSegmentIndex - 1
        };
    }
    const previousPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findLast"])(pageList, (x)=>x.headerStartPos < startPage.headerStartPos);
    if (!previousPage) {
        return null;
    }
    return {
        page: previousPage,
        segmentIndex: previousPage.lacingValues.length - 1
    };
};
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/wave/riff-reader.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "RiffReader": ()=>RiffReader
});
class RiffReader {
    readBytes(length) {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + length);
        this.pos += length;
        return new Uint8Array(view.buffer, offset, length);
    }
    readU16() {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + 2);
        this.pos += 2;
        return view.getUint16(offset, this.littleEndian);
    }
    readU32() {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + 4);
        this.pos += 4;
        return view.getUint32(offset, this.littleEndian);
    }
    readU64() {
        let low;
        let high;
        if (this.littleEndian) {
            low = this.readU32();
            high = this.readU32();
        } else {
            high = this.readU32();
            low = this.readU32();
        }
        return high * 0x100000000 + low;
    }
    readAscii(length) {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + length);
        this.pos += length;
        let str = '';
        for(let i = 0; i < length; i++){
            str += String.fromCharCode(view.getUint8(offset + i));
        }
        return str;
    }
    constructor(reader){
        this.reader = reader;
        this.pos = 0;
        this.littleEndian = true;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/wave/wave-demuxer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "WaveDemuxer": ()=>WaveDemuxer,
    "WaveFormat": ()=>WaveFormat
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/demuxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/input-track.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/packet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/reader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$wave$2f$riff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/wave/riff-reader.js [app-client] (ecmascript)");
;
;
;
;
;
;
var WaveFormat;
(function(WaveFormat) {
    WaveFormat[WaveFormat["PCM"] = 1] = "PCM";
    WaveFormat[WaveFormat["IEEE_FLOAT"] = 3] = "IEEE_FLOAT";
    WaveFormat[WaveFormat["ALAW"] = 6] = "ALAW";
    WaveFormat[WaveFormat["MULAW"] = 7] = "MULAW";
    WaveFormat[WaveFormat["EXTENSIBLE"] = 65534] = "EXTENSIBLE";
})(WaveFormat || (WaveFormat = {}));
class WaveDemuxer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Demuxer"] {
    async readMetadata() {
        var _this_metadataPromise;
        return (_this_metadataPromise = this.metadataPromise) !== null && _this_metadataPromise !== void 0 ? _this_metadataPromise : this.metadataPromise = (async ()=>{
            const actualFileSize = await this.metadataReader.reader.source.getSize();
            const riffType = this.metadataReader.readAscii(4);
            this.metadataReader.littleEndian = riffType !== 'RIFX';
            const isRf64 = riffType === 'RF64';
            const outerChunkSize = this.metadataReader.readU32();
            let totalFileSize = isRf64 ? actualFileSize : Math.min(outerChunkSize + 8, actualFileSize);
            const format = this.metadataReader.readAscii(4);
            if (format !== 'WAVE') {
                throw new Error('Invalid WAVE file - wrong format');
            }
            this.metadataReader.pos = 12;
            let chunksRead = 0;
            let dataChunkSize = null;
            while(this.metadataReader.pos < totalFileSize){
                await this.metadataReader.reader.loadRange(this.metadataReader.pos, this.metadataReader.pos + 8);
                const chunkId = this.metadataReader.readAscii(4);
                const chunkSize = this.metadataReader.readU32();
                const startPos = this.metadataReader.pos;
                if (isRf64 && chunksRead === 0 && chunkId !== 'ds64') {
                    throw new Error('Invalid RF64 file: First chunk must be "ds64".');
                }
                if (chunkId === 'fmt ') {
                    await this.parseFmtChunk(chunkSize);
                } else if (chunkId === 'data') {
                    dataChunkSize !== null && dataChunkSize !== void 0 ? dataChunkSize : dataChunkSize = chunkSize;
                    this.dataStart = this.metadataReader.pos;
                    this.dataSize = Math.min(dataChunkSize, totalFileSize - this.dataStart);
                } else if (chunkId === 'ds64') {
                    // File and data chunk sizes are defined in here instead
                    const riffChunkSize = this.metadataReader.readU64();
                    dataChunkSize = this.metadataReader.readU64();
                    totalFileSize = Math.min(riffChunkSize + 8, actualFileSize);
                }
                this.metadataReader.pos = startPos + chunkSize + (chunkSize & 1); // Handle padding
                chunksRead++;
            }
            if (!this.audioInfo) {
                throw new Error('Invalid WAVE file - missing "fmt " chunk');
            }
            if (this.dataStart === -1) {
                throw new Error('Invalid WAVE file - missing "data" chunk');
            }
            const blockSize = this.audioInfo.blockSizeInBytes;
            this.dataSize = Math.floor(this.dataSize / blockSize) * blockSize;
            this.tracks.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputAudioTrack"](new WaveAudioTrackBacking(this)));
        })();
    }
    async parseFmtChunk(size) {
        await this.metadataReader.reader.loadRange(this.metadataReader.pos, this.metadataReader.pos + size);
        let formatTag = this.metadataReader.readU16();
        const numChannels = this.metadataReader.readU16();
        const sampleRate = this.metadataReader.readU32();
        this.metadataReader.pos += 4; // Bytes per second
        const blockAlign = this.metadataReader.readU16();
        let bitsPerSample;
        if (size === 14) {
            bitsPerSample = 8;
        } else {
            bitsPerSample = this.metadataReader.readU16();
        }
        // Handle WAVEFORMATEXTENSIBLE
        if (size >= 18 && formatTag !== 0x0165) {
            const cbSize = this.metadataReader.readU16();
            const remainingSize = size - 18;
            const extensionSize = Math.min(remainingSize, cbSize);
            if (extensionSize >= 22 && formatTag === WaveFormat.EXTENSIBLE) {
                // Parse WAVEFORMATEXTENSIBLE
                this.metadataReader.pos += 2 + 4;
                const subFormat = this.metadataReader.readBytes(16);
                // Get actual format from subFormat GUID
                formatTag = subFormat[0] | subFormat[1] << 8;
            }
        }
        if (formatTag === WaveFormat.MULAW || formatTag === WaveFormat.ALAW) {
            bitsPerSample = 8;
        }
        this.audioInfo = {
            format: formatTag,
            numberOfChannels: numChannels,
            sampleRate,
            sampleSizeInBytes: Math.ceil(bitsPerSample / 8),
            blockSizeInBytes: blockAlign
        };
    }
    getCodec() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.audioInfo);
        if (this.audioInfo.format === WaveFormat.MULAW) {
            return 'ulaw';
        }
        if (this.audioInfo.format === WaveFormat.ALAW) {
            return 'alaw';
        }
        if (this.audioInfo.format === WaveFormat.PCM) {
            // All formats are little-endian
            if (this.audioInfo.sampleSizeInBytes === 1) {
                return 'pcm-u8';
            } else if (this.audioInfo.sampleSizeInBytes === 2) {
                return 'pcm-s16';
            } else if (this.audioInfo.sampleSizeInBytes === 3) {
                return 'pcm-s24';
            } else if (this.audioInfo.sampleSizeInBytes === 4) {
                return 'pcm-s32';
            }
        }
        if (this.audioInfo.format === WaveFormat.IEEE_FLOAT) {
            if (this.audioInfo.sampleSizeInBytes === 4) {
                return 'pcm-f32';
            }
        }
        return null;
    }
    async getMimeType() {
        return 'audio/wav';
    }
    async computeDuration() {
        await this.readMetadata();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.audioInfo);
        const numberOfBlocks = this.dataSize / this.audioInfo.blockSizeInBytes;
        return numberOfBlocks / this.audioInfo.sampleRate;
    }
    async getTracks() {
        await this.readMetadata();
        return this.tracks;
    }
    constructor(input){
        super(input);
        this.metadataPromise = null;
        this.dataStart = -1;
        this.dataSize = -1;
        this.audioInfo = null;
        this.tracks = [];
        this.metadataReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$wave$2f$riff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiffReader"](input._mainReader);
        this.chunkReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$wave$2f$riff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiffReader"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reader"](input.source, 64 * 2 ** 20));
    }
}
const PACKET_SIZE_IN_FRAMES = 2048;
class WaveAudioTrackBacking {
    getId() {
        return 1;
    }
    getCodec() {
        return this.demuxer.getCodec();
    }
    async getDecoderConfig() {
        const codec = this.demuxer.getCodec();
        if (!codec) {
            return null;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.demuxer.audioInfo);
        return {
            codec,
            numberOfChannels: this.demuxer.audioInfo.numberOfChannels,
            sampleRate: this.demuxer.audioInfo.sampleRate
        };
    }
    computeDuration() {
        return this.demuxer.computeDuration();
    }
    getNumberOfChannels() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.demuxer.audioInfo);
        return this.demuxer.audioInfo.numberOfChannels;
    }
    getSampleRate() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.demuxer.audioInfo);
        return this.demuxer.audioInfo.sampleRate;
    }
    getTimeResolution() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.demuxer.audioInfo);
        return this.demuxer.audioInfo.sampleRate;
    }
    getLanguageCode() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNDETERMINED_LANGUAGE"];
    }
    async getFirstTimestamp() {
        return 0;
    }
    async getPacketAtIndex(packetIndex, options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.demuxer.audioInfo);
        const startOffset = packetIndex * PACKET_SIZE_IN_FRAMES * this.demuxer.audioInfo.blockSizeInBytes;
        if (startOffset >= this.demuxer.dataSize) {
            return null;
        }
        const sizeInBytes = Math.min(PACKET_SIZE_IN_FRAMES * this.demuxer.audioInfo.blockSizeInBytes, this.demuxer.dataSize - startOffset);
        let data;
        if (options.metadataOnly) {
            data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLACEHOLDER_DATA"];
        } else {
            const sizeOfOnePacket = PACKET_SIZE_IN_FRAMES * this.demuxer.audioInfo.blockSizeInBytes;
            const chunkSize = Math.ceil(2 ** 19 / sizeOfOnePacket) * sizeOfOnePacket;
            const chunkStart = Math.floor(startOffset / chunkSize) * chunkSize;
            const chunkEnd = chunkStart + chunkSize;
            // Always load large 0.5 MiB chunks instead of just the required packet
            await this.demuxer.chunkReader.reader.loadRange(this.demuxer.dataStart + chunkStart, this.demuxer.dataStart + chunkEnd);
            this.demuxer.chunkReader.pos = this.demuxer.dataStart + startOffset;
            data = this.demuxer.chunkReader.readBytes(sizeInBytes);
        }
        const timestamp = packetIndex * PACKET_SIZE_IN_FRAMES / this.demuxer.audioInfo.sampleRate;
        const duration = sizeInBytes / this.demuxer.audioInfo.blockSizeInBytes / this.demuxer.audioInfo.sampleRate;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"](data, 'key', timestamp, duration, packetIndex, sizeInBytes);
    }
    getFirstPacket(options) {
        return this.getPacketAtIndex(0, options);
    }
    getPacket(timestamp, options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.demuxer.audioInfo);
        const packetIndex = Math.floor(timestamp * this.demuxer.audioInfo.sampleRate / PACKET_SIZE_IN_FRAMES);
        return this.getPacketAtIndex(packetIndex, options);
    }
    getNextPacket(packet, options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.demuxer.audioInfo);
        const packetIndex = Math.round(packet.timestamp * this.demuxer.audioInfo.sampleRate / PACKET_SIZE_IN_FRAMES);
        return this.getPacketAtIndex(packetIndex + 1, options);
    }
    getKeyPacket(timestamp, options) {
        return this.getPacket(timestamp, options);
    }
    getNextKeyPacket(packet, options) {
        return this.getNextPacket(packet, options);
    }
    constructor(demuxer){
        this.demuxer = demuxer;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/adts/adts-reader.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "AdtsReader": ()=>AdtsReader,
    "MAX_FRAME_HEADER_SIZE": ()=>MAX_FRAME_HEADER_SIZE
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
;
const MAX_FRAME_HEADER_SIZE = 9;
class AdtsReader {
    readBytes(length) {
        const { view, offset } = this.reader.getViewAndOffset(this.pos, this.pos + length);
        this.pos += length;
        return new Uint8Array(view.buffer, offset, length);
    }
    readFrameHeader() {
        // https://wiki.multimedia.cx/index.php/ADTS (last visited: 2025/08/17)
        const startPos = this.pos;
        const bytes = this.readBytes(9); // 9 with CRC, 7 without CRC
        const bitstream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bitstream"](bytes);
        const syncword = bitstream.readBits(12);
        if (syncword !== 0b1111_11111111) {
            return null;
        }
        bitstream.skipBits(1); // MPEG version
        const layer = bitstream.readBits(2);
        if (layer !== 0) {
            return null;
        }
        const protectionAbsence = bitstream.readBits(1);
        const objectType = bitstream.readBits(2) + 1;
        const samplingFrequencyIndex = bitstream.readBits(4);
        if (samplingFrequencyIndex === 15) {
            return null;
        }
        bitstream.skipBits(1); // Private bit
        const channelConfiguration = bitstream.readBits(3);
        if (channelConfiguration === 0) {
            throw new Error('ADTS frames with channel configuration 0 are not supported.');
        }
        bitstream.skipBits(1); // Originality
        bitstream.skipBits(1); // Home
        bitstream.skipBits(1); // Copyright ID bit
        bitstream.skipBits(1); // Copyright ID start
        const frameLength = bitstream.readBits(13);
        bitstream.skipBits(11); // Buffer fullness
        const numberOfAacFrames = bitstream.readBits(2) + 1;
        if (numberOfAacFrames !== 1) {
            throw new Error('ADTS frames with more than one AAC frame are not supported.');
        }
        let crcCheck = null;
        if (protectionAbsence === 1) {
            this.pos -= 2;
        } else {
            crcCheck = bitstream.readBits(16);
        }
        return {
            objectType,
            samplingFrequencyIndex,
            channelConfiguration,
            frameLength,
            numberOfAacFrames,
            crcCheck,
            startPos
        };
    }
    constructor(reader){
        this.reader = reader;
        this.pos = 0;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/adts/adts-demuxer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "AdtsDemuxer": ()=>AdtsDemuxer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/demuxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/input-track.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/packet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$adts$2f$adts$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/adts/adts-reader.js [app-client] (ecmascript)");
;
;
;
;
;
;
const SAMPLES_PER_AAC_FRAME = 1024;
class AdtsDemuxer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Demuxer"] {
    async readMetadata() {
        var _this_metadataPromise;
        return (_this_metadataPromise = this.metadataPromise) !== null && _this_metadataPromise !== void 0 ? _this_metadataPromise : this.metadataPromise = (async ()=>{
            this.fileSize = await this.input.source.getSize();
            await this.loadNextChunk();
            // There has to be a frame if this demuxer got selected
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.firstFrameHeader);
            // Create the single audio track
            this.tracks = [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputAudioTrack"](new AdtsAudioTrackBacking(this))
            ];
        })();
    }
    async loadNextChunk() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.lastLoadedPos < this.fileSize);
        const chunkSize = 0.5 * 1024 * 1024; // 0.5 MiB
        const endPos = Math.min(this.lastLoadedPos + chunkSize, this.fileSize);
        await this.reader.reader.loadRange(this.lastLoadedPos, endPos);
        this.lastLoadedPos = endPos;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.lastLoadedPos <= this.fileSize);
        this.parseFramesFromLoadedData();
    }
    parseFramesFromLoadedData() {
        while(this.reader.pos <= this.fileSize - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$adts$2f$adts$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_FRAME_HEADER_SIZE"]){
            const startPos = this.reader.pos;
            const header = this.reader.readFrameHeader();
            if (!header) {
                break;
            }
            // Check if the entire frame fits in the loaded data
            if (startPos + header.frameLength > this.lastLoadedPos) {
                // Frame doesn't fit, reset positions and stop
                this.reader.pos = startPos;
                this.lastLoadedPos = startPos;
                break;
            }
            if (!this.firstFrameHeader) {
                this.firstFrameHeader = header;
            }
            const sampleRate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aacFrequencyTable"][header.samplingFrequencyIndex];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(sampleRate !== undefined);
            const sampleDuration = SAMPLES_PER_AAC_FRAME / sampleRate;
            const headerSize = header.crcCheck ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$adts$2f$adts$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_FRAME_HEADER_SIZE"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$adts$2f$adts$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_FRAME_HEADER_SIZE"] - 2;
            const sample = {
                timestamp: this.nextTimestampInSamples / sampleRate,
                duration: sampleDuration,
                dataStart: startPos + headerSize,
                dataSize: header.frameLength - headerSize
            };
            this.loadedSamples.push(sample);
            this.nextTimestampInSamples += SAMPLES_PER_AAC_FRAME;
            this.reader.pos = startPos + header.frameLength;
        }
    }
    async getMimeType() {
        return 'audio/aac';
    }
    async getTracks() {
        await this.readMetadata();
        return this.tracks;
    }
    async computeDuration() {
        await this.readMetadata();
        const track = this.tracks[0];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track);
        return track.computeDuration();
    }
    constructor(input){
        super(input);
        this.metadataPromise = null;
        this.firstFrameHeader = null;
        this.loadedSamples = []; // All samples from the start of the file to lastLoadedPos
        this.tracks = [];
        this.readingMutex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncMutex"]();
        this.lastLoadedPos = 0;
        this.fileSize = 0;
        this.nextTimestampInSamples = 0;
        this.reader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$adts$2f$adts$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdtsReader"](input._mainReader);
    }
}
class AdtsAudioTrackBacking {
    getId() {
        return 1;
    }
    async getFirstTimestamp() {
        return 0;
    }
    getTimeResolution() {
        const sampleRate = this.getSampleRate();
        return sampleRate / SAMPLES_PER_AAC_FRAME;
    }
    async computeDuration() {
        const lastPacket = await this.getPacket(Infinity, {
            metadataOnly: true
        });
        var _lastPacket_timestamp, _lastPacket_duration;
        return ((_lastPacket_timestamp = lastPacket === null || lastPacket === void 0 ? void 0 : lastPacket.timestamp) !== null && _lastPacket_timestamp !== void 0 ? _lastPacket_timestamp : 0) + ((_lastPacket_duration = lastPacket === null || lastPacket === void 0 ? void 0 : lastPacket.duration) !== null && _lastPacket_duration !== void 0 ? _lastPacket_duration : 0);
    }
    getLanguageCode() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNDETERMINED_LANGUAGE"];
    }
    getCodec() {
        return 'aac';
    }
    getNumberOfChannels() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.demuxer.firstFrameHeader);
        const numberOfChannels = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aacChannelMap"][this.demuxer.firstFrameHeader.channelConfiguration];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(numberOfChannels !== undefined);
        return numberOfChannels;
    }
    getSampleRate() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.demuxer.firstFrameHeader);
        const sampleRate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aacFrequencyTable"][this.demuxer.firstFrameHeader.samplingFrequencyIndex];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(sampleRate !== undefined);
        return sampleRate;
    }
    async getDecoderConfig() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.demuxer.firstFrameHeader);
        const bytes = new Uint8Array(3); // 19 bits max
        const bitstream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bitstream"](bytes);
        const { objectType, samplingFrequencyIndex, channelConfiguration } = this.demuxer.firstFrameHeader;
        if (objectType > 31) {
            bitstream.writeBits(5, 31);
            bitstream.writeBits(6, objectType - 32);
        } else {
            bitstream.writeBits(5, objectType);
        }
        bitstream.writeBits(4, samplingFrequencyIndex); // samplingFrequencyIndex === 15 is forbidden
        bitstream.writeBits(4, channelConfiguration);
        return {
            codec: "mp4a.40.".concat(this.demuxer.firstFrameHeader.objectType),
            numberOfChannels: this.getNumberOfChannels(),
            sampleRate: this.getSampleRate(),
            description: bytes.subarray(0, Math.ceil((bitstream.pos - 1) / 8))
        };
    }
    getPacketAtIndex(sampleIndex, options) {
        if (sampleIndex === -1) {
            return null;
        }
        const rawSample = this.demuxer.loadedSamples[sampleIndex];
        if (!rawSample) {
            return null;
        }
        let data;
        if (options.metadataOnly) {
            data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLACEHOLDER_DATA"];
        } else {
            this.demuxer.reader.pos = rawSample.dataStart;
            data = this.demuxer.reader.readBytes(rawSample.dataSize);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"](data, 'key', rawSample.timestamp, rawSample.duration, sampleIndex, rawSample.dataSize);
    }
    async getFirstPacket(options) {
        return this.getPacketAtIndex(0, options);
    }
    async getNextPacket(packet, options) {
        const release = await this.demuxer.readingMutex.acquire();
        try {
            const sampleIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchExact"])(this.demuxer.loadedSamples, packet.timestamp, (x)=>x.timestamp);
            if (sampleIndex === -1) {
                throw new Error('Packet was not created from this track.');
            }
            const nextIndex = sampleIndex + 1;
            // Ensure the next sample exists
            while(nextIndex >= this.demuxer.loadedSamples.length && this.demuxer.lastLoadedPos < this.demuxer.fileSize){
                await this.demuxer.loadNextChunk();
            }
            return this.getPacketAtIndex(nextIndex, options);
        } finally{
            release();
        }
    }
    async getPacket(timestamp, options) {
        const release = await this.demuxer.readingMutex.acquire();
        try {
            while(true){
                const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binarySearchLessOrEqual"])(this.demuxer.loadedSamples, timestamp, (x)=>x.timestamp);
                if (index === -1 && this.demuxer.loadedSamples.length > 0) {
                    // We're before the first sample
                    return null;
                }
                if (this.demuxer.lastLoadedPos === this.demuxer.fileSize) {
                    // All data is loaded, return what we found
                    return this.getPacketAtIndex(index, options);
                }
                if (index >= 0 && index + 1 < this.demuxer.loadedSamples.length) {
                    // The next packet also exists, we're done
                    return this.getPacketAtIndex(index, options);
                }
                // Otherwise, keep loading data
                await this.demuxer.loadNextChunk();
            }
        } finally{
            release();
        }
    }
    getKeyPacket(timestamp, options) {
        return this.getPacket(timestamp, options);
    }
    getNextKeyPacket(packet, options) {
        return this.getNextPacket(packet, options);
    }
    constructor(demuxer){
        this.demuxer = demuxer;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/input-format.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "ADTS": ()=>ADTS,
    "ALL_FORMATS": ()=>ALL_FORMATS,
    "AdtsInputFormat": ()=>AdtsInputFormat,
    "InputFormat": ()=>InputFormat,
    "IsobmffInputFormat": ()=>IsobmffInputFormat,
    "MATROSKA": ()=>MATROSKA,
    "MP3": ()=>MP3,
    "MP4": ()=>MP4,
    "MatroskaInputFormat": ()=>MatroskaInputFormat,
    "Mp3InputFormat": ()=>Mp3InputFormat,
    "Mp4InputFormat": ()=>Mp4InputFormat,
    "OGG": ()=>OGG,
    "OggInputFormat": ()=>OggInputFormat,
    "QTFF": ()=>QTFF,
    "QuickTimeInputFormat": ()=>QuickTimeInputFormat,
    "WAVE": ()=>WAVE,
    "WEBM": ()=>WEBM,
    "WaveInputFormat": ()=>WaveInputFormat,
    "WebMInputFormat": ()=>WebMInputFormat
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/isobmff/isobmff-demuxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/isobmff/isobmff-reader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/matroska/ebml.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$matroska$2d$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/matroska/matroska-demuxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$mp3$2f$mp3$2d$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/mp3/mp3-demuxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/shared/mp3-misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$mp3$2f$mp3$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/mp3/mp3-reader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/ogg/ogg-demuxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/ogg/ogg-reader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$wave$2f$riff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/wave/riff-reader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$wave$2f$wave$2d$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/wave/wave-demuxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$adts$2f$adts$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/adts/adts-reader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$adts$2f$adts$2d$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/adts/adts-demuxer.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
class InputFormat {
}
class IsobmffInputFormat extends InputFormat {
    /** @internal */ async _getMajorBrand(input) {
        const sourceSize = await input._mainReader.source.getSize();
        if (sourceSize < 12) {
            return null;
        }
        const isobmffReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsobmffReader"](input._mainReader);
        isobmffReader.pos = 4;
        const fourCc = isobmffReader.readAscii(4);
        if (fourCc !== 'ftyp') {
            return null;
        }
        return isobmffReader.readAscii(4);
    }
    /** @internal */ _createDemuxer(input) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsobmffDemuxer"](input);
    }
}
class Mp4InputFormat extends IsobmffInputFormat {
    /** @internal */ async _canReadInput(input) {
        const majorBrand = await this._getMajorBrand(input);
        return !!majorBrand && majorBrand !== 'qt  ';
    }
    get name() {
        return 'MP4';
    }
    get mimeType() {
        return 'video/mp4';
    }
}
class QuickTimeInputFormat extends IsobmffInputFormat {
    /** @internal */ async _canReadInput(input) {
        const majorBrand = await this._getMajorBrand(input);
        return majorBrand === 'qt  ';
    }
    get name() {
        return 'QuickTime File Format';
    }
    get mimeType() {
        return 'video/quicktime';
    }
}
function foo() {
    return 5;
}
class MatroskaInputFormat extends InputFormat {
    /** @internal */ async isSupportedEBMLOfDocType(input, desiredDocType) {
        const sourceSize = await input._mainReader.source.getSize();
        if (sourceSize < 8) {
            return false;
        }
        const ebmlReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLReader"](input._mainReader);
        const varIntSize = ebmlReader.readVarIntSize();
        if (varIntSize === null) {
            return false;
        }
        foo();
        if (varIntSize < 1 || varIntSize > 8) {
            return false;
        }
        const id = ebmlReader.readUnsignedInt(varIntSize);
        if (id !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].EBML) {
            return false;
        }
        const dataSize = ebmlReader.readElementSize();
        if (dataSize === null) {
            return false; // Miss me with that shit
        }
        const startPos = ebmlReader.pos;
        while(ebmlReader.pos <= startPos + dataSize - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_HEADER_SIZE"]){
            const header = ebmlReader.readElementHeader();
            if (!header) break;
            const { id, size } = header;
            const dataStartPos = ebmlReader.pos;
            if (size === null) return false;
            switch(id){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].EBMLVersion:
                    {
                        const ebmlVersion = ebmlReader.readUnsignedInt(size);
                        if (ebmlVersion !== 1) {
                            return false;
                        }
                    }
                    ;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].EBMLReadVersion:
                    {
                        const ebmlReadVersion = ebmlReader.readUnsignedInt(size);
                        if (ebmlReadVersion !== 1) {
                            return false;
                        }
                    }
                    ;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].DocType:
                    {
                        const docType = ebmlReader.readAsciiString(size);
                        if (docType !== desiredDocType) {
                            return false;
                        }
                    }
                    ;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].DocTypeVersion:
                    {
                        const docTypeVersion = ebmlReader.readUnsignedInt(size);
                        if (docTypeVersion > 4) {
                            return false;
                        }
                    }
                    ;
                    break;
            }
            ebmlReader.pos = dataStartPos + size;
        }
        return true;
    }
    /** @internal */ _canReadInput(input) {
        return this.isSupportedEBMLOfDocType(input, 'matroska');
    }
    /** @internal */ _createDemuxer(input) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$matroska$2d$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatroskaDemuxer"](input);
    }
    get name() {
        return 'Matroska';
    }
    get mimeType() {
        return 'video/x-matroska';
    }
}
class WebMInputFormat extends MatroskaInputFormat {
    /** @internal */ _canReadInput(input) {
        return this.isSupportedEBMLOfDocType(input, 'webm');
    }
    get name() {
        return 'WebM';
    }
    get mimeType() {
        return 'video/webm';
    }
}
class Mp3InputFormat extends InputFormat {
    /** @internal */ async _canReadInput(input) {
        const sourceSize = await input._mainReader.source.getSize();
        if (sourceSize < 4) {
            return false;
        }
        const mp3Reader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$mp3$2f$mp3$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mp3Reader"](input._mainReader);
        mp3Reader.fileSize = sourceSize;
        const id3Tag = mp3Reader.readId3();
        if (id3Tag) {
            mp3Reader.pos += id3Tag.size;
        }
        const framesStartPos = mp3Reader.pos;
        await mp3Reader.reader.loadRange(mp3Reader.pos, mp3Reader.pos + 4096);
        const firstHeader = mp3Reader.readNextFrameHeader(Math.min(framesStartPos + 4096, sourceSize));
        if (!firstHeader) {
            return false;
        }
        if (id3Tag) {
            // If there was an ID3 tag at the start, we can be pretty sure this is MP3 by now
            return true;
        }
        // Fine, we found one frame header, but we're still not entirely sure this is MP3. Let's check if we can find
        // another header right after it:
        mp3Reader.pos = firstHeader.startPos + firstHeader.totalSize;
        await mp3Reader.reader.loadRange(mp3Reader.pos, mp3Reader.pos + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_HEADER_SIZE"]);
        const secondHeader = mp3Reader.readNextFrameHeader(mp3Reader.pos + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAME_HEADER_SIZE"]);
        if (!secondHeader) {
            return false;
        }
        // In a well-formed MP3 file, we'd expect these two frames to share some similarities:
        if (firstHeader.channel !== secondHeader.channel || firstHeader.sampleRate !== secondHeader.sampleRate) {
            return false;
        }
        // We have found two matching consecutive MP3 frames, a strong indicator that this is an MP3 file
        return true;
    }
    /** @internal */ _createDemuxer(input) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$mp3$2f$mp3$2d$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mp3Demuxer"](input);
    }
    get name() {
        return 'MP3';
    }
    get mimeType() {
        return 'audio/mpeg';
    }
}
class WaveInputFormat extends InputFormat {
    /** @internal */ async _canReadInput(input) {
        const sourceSize = await input._mainReader.source.getSize();
        if (sourceSize < 12) {
            return false;
        }
        const riffReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$wave$2f$riff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiffReader"](input._mainReader);
        const riffType = riffReader.readAscii(4);
        if (riffType !== 'RIFF' && riffType !== 'RIFX' && riffType !== 'RF64') {
            return false;
        }
        riffReader.pos = 8;
        const format = riffReader.readAscii(4);
        return format === 'WAVE';
    }
    /** @internal */ _createDemuxer(input) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$wave$2f$wave$2d$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaveDemuxer"](input);
    }
    get name() {
        return 'WAVE';
    }
    get mimeType() {
        return 'audio/wav';
    }
}
class OggInputFormat extends InputFormat {
    /** @internal */ async _canReadInput(input) {
        const sourceSize = await input._mainReader.source.getSize();
        if (sourceSize < 4) {
            return false;
        }
        const oggReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OggReader"](input._mainReader);
        return oggReader.readAscii(4) === 'OggS';
    }
    /** @internal */ _createDemuxer(input) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OggDemuxer"](input);
    }
    get name() {
        return 'Ogg';
    }
    get mimeType() {
        return 'application/ogg';
    }
}
class AdtsInputFormat extends InputFormat {
    /** @internal */ async _canReadInput(input) {
        const sourceSize = await input._mainReader.source.getSize();
        if (sourceSize < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$adts$2f$adts$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_FRAME_HEADER_SIZE"]) {
            return false;
        }
        const adtsReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$adts$2f$adts$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdtsReader"](input._mainReader);
        const firstHeader = adtsReader.readFrameHeader();
        if (!firstHeader) {
            return false;
        }
        if (sourceSize < firstHeader.frameLength + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$adts$2f$adts$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_FRAME_HEADER_SIZE"]) {
            return false;
        }
        adtsReader.pos = firstHeader.frameLength;
        await adtsReader.reader.loadRange(adtsReader.pos, adtsReader.pos + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$adts$2f$adts$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_FRAME_HEADER_SIZE"]);
        const secondHeader = adtsReader.readFrameHeader();
        if (!secondHeader) {
            return false;
        }
        return firstHeader.objectType === secondHeader.objectType && firstHeader.samplingFrequencyIndex === secondHeader.samplingFrequencyIndex && firstHeader.channelConfiguration === secondHeader.channelConfiguration;
    }
    /** @internal */ _createDemuxer(input) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$adts$2f$adts$2d$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdtsDemuxer"](input);
    }
    get name() {
        return 'ADTS';
    }
    get mimeType() {
        return 'audio/aac';
    }
}
const MP4 = new Mp4InputFormat();
const QTFF = new QuickTimeInputFormat();
const MATROSKA = new MatroskaInputFormat();
const WEBM = new WebMInputFormat();
const MP3 = new Mp3InputFormat();
const WAVE = new WaveInputFormat();
const OGG = new OggInputFormat();
const ADTS = new AdtsInputFormat();
const ALL_FORMATS = [
    MP4,
    QTFF,
    MATROSKA,
    WEBM,
    WAVE,
    OGG,
    MP3,
    ADTS
];
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/source.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "BlobSource": ()=>BlobSource,
    "BufferSource": ()=>BufferSource,
    "Source": ()=>Source,
    "StreamSource": ()=>StreamSource,
    "UrlSource": ()=>UrlSource
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
;
class Source {
    /**
     * Resolves with the total size of the file in bytes. This function is memoized, meaning only the first call
     * will retrieve the size.
     */ getSize() {
        var _this__sizePromise;
        return (_this__sizePromise = this._sizePromise) !== null && _this__sizePromise !== void 0 ? _this__sizePromise : this._sizePromise = this._retrieveSize();
    }
    constructor(){
        /** @internal */ this._sizePromise = null;
        /** Called each time data is requested from the source. */ this.onread = null;
    }
}
class BufferSource extends Source {
    /** @internal */ async _read(start, end) {
        return this._bytes.subarray(start, end);
    }
    /** @internal */ async _retrieveSize() {
        return this._bytes.byteLength;
    }
    constructor(buffer){
        if (!(buffer instanceof ArrayBuffer) && !(buffer instanceof Uint8Array)) {
            throw new TypeError('buffer must be an ArrayBuffer or Uint8Array.');
        }
        super();
        this._bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
    }
}
class StreamSource extends Source {
    /** @internal */ async _read(start, end) {
        return this._options.read(start, end);
    }
    /** @internal */ async _retrieveSize() {
        return this._options.getSize();
    }
    constructor(options){
        if (!options || typeof options !== 'object') {
            throw new TypeError('options must be an object.');
        }
        if (typeof options.read !== 'function') {
            throw new TypeError('options.read must be a function.');
        }
        if (typeof options.getSize !== 'function') {
            throw new TypeError('options.getSize must be a function.');
        }
        super();
        this._options = options;
    }
}
class BlobSource extends Source {
    /** @internal */ async _read(start, end) {
        const slice = this._blob.slice(start, end);
        const buffer = await slice.arrayBuffer();
        return new Uint8Array(buffer);
    }
    /** @internal */ async _retrieveSize() {
        return this._blob.size;
    }
    constructor(blob){
        if (!(blob instanceof Blob)) {
            throw new TypeError('blob must be a Blob.');
        }
        super();
        this._blob = blob;
    }
}
class UrlSource extends Source {
    /** @internal */ async _makeRequest(range) {
        const headers = {};
        if (range) {
            headers['Range'] = "bytes=".concat(range.start, "-").concat(range.end - 1);
        }
        if (this._nextUrlVersion !== null) {
            this._url.searchParams.set('mediabunny_version', this._nextUrlVersion.toString());
            this._nextUrlVersion++;
        }
        var _this__options_requestInit, _this__options_getRetryDelay;
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retriedFetch"])(this._url, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeObjectsDeeply"])((_this__options_requestInit = this._options.requestInit) !== null && _this__options_requestInit !== void 0 ? _this__options_requestInit : {}, {
            method: 'GET',
            headers
        }), (_this__options_getRetryDelay = this._options.getRetryDelay) !== null && _this__options_getRetryDelay !== void 0 ? _this__options_getRetryDelay : ()=>null);
        if (!response.ok) {
            throw new Error("Error fetching ".concat(this._url, ": ").concat(response.status, " ").concat(response.statusText));
        }
        const buffer = await response.arrayBuffer();
        if (response.status === 206 && range && buffer.byteLength !== range.end - range.start && this._nextUrlVersion === null) {
            // We did a range request but it resolved with the wrong range; in Chromium, this can be due to a caching
            // bug (https://issues.chromium.org/issues/436025873). Let's circumvent the cache for the rest of the
            // session by appending a version to the URL.
            this._nextUrlVersion = 1;
            return this._makeRequest(range);
        }
        if (response.status === 200) {
            // The server didn't return 206 Partial Content, so it's not a range response
            this._fullData = buffer;
        }
        return {
            response: buffer,
            statusCode: response.status
        };
    }
    /** @internal */ async _read(start, end) {
        if (this._fullData) {
            return new Uint8Array(this._fullData, start, end - start);
        }
        const { response, statusCode } = await this._makeRequest({
            start,
            end
        });
        // If server doesn't support range requests, it will return 200 instead of 206. In that case, let's manually
        // slice the response.
        if (statusCode === 200) {
            const fullData = new Uint8Array(response);
            return fullData.subarray(start, end);
        }
        return new Uint8Array(response);
    }
    /** @internal */ async _retrieveSize() {
        if (this._fullData) {
            return this._fullData.byteLength;
        }
        // First, try a HEAD request to get the size
        try {
            var _this__options_requestInit, _this__options_getRetryDelay;
            const headResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retriedFetch"])(this._url, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeObjectsDeeply"])((_this__options_requestInit = this._options.requestInit) !== null && _this__options_requestInit !== void 0 ? _this__options_requestInit : {}, {
                method: 'HEAD'
            }), (_this__options_getRetryDelay = this._options.getRetryDelay) !== null && _this__options_getRetryDelay !== void 0 ? _this__options_getRetryDelay : ()=>null);
            if (headResponse.ok) {
                const contentLength = headResponse.headers.get('Content-Length');
                if (contentLength) {
                    return parseInt(contentLength);
                }
            }
        } catch (e) {
        // We tried
        }
        var _this__options_requestInit1, _this__options_getRetryDelay1;
        // Try a range request to get the Content-Range header
        const rangeResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retriedFetch"])(this._url, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeObjectsDeeply"])((_this__options_requestInit1 = this._options.requestInit) !== null && _this__options_requestInit1 !== void 0 ? _this__options_requestInit1 : {}, {
            method: 'GET',
            headers: {
                Range: 'bytes=0-0'
            }
        }), (_this__options_getRetryDelay1 = this._options.getRetryDelay) !== null && _this__options_getRetryDelay1 !== void 0 ? _this__options_getRetryDelay1 : ()=>null);
        if (rangeResponse.status === 206) {
            const contentRange = rangeResponse.headers.get('Content-Range');
            if (contentRange) {
                const match = contentRange.match(/bytes \d+-\d+\/(\d+)/);
                if (match && match[1]) {
                    return parseInt(match[1]);
                }
            }
        } else if (rangeResponse.status === 200) {
            // The server just returned the whole thing
            this._fullData = await rangeResponse.arrayBuffer();
            if (this._fullData.byteLength !== 1) {
                return this._fullData.byteLength;
            } else {
            // The server responded with 200, but returned only the requested range, so skip the response
            }
        }
        // If the range request didn't provide the size, make a full GET request
        const { response } = await this._makeRequest();
        return response.byteLength;
    }
    constructor(url, options = {}){
        if (typeof url !== 'string' && !(url instanceof URL)) {
            throw new TypeError('url must be a string or URL.');
        }
        if (!options || typeof options !== 'object') {
            throw new TypeError('options must be an object.');
        }
        if (options.requestInit !== undefined && (!options.requestInit || typeof options.requestInit !== 'object')) {
            throw new TypeError('options.requestInit, when provided, must be an object.');
        }
        if (options.getRetryDelay !== undefined && typeof options.getRetryDelay !== 'function') {
            throw new TypeError('options.getRetryDelay, when provided, must be a function.');
        }
        super();
        /** @internal */ this._fullData = null;
        /** @internal */ this._nextUrlVersion = null;
        this._url = url instanceof URL ? url : new URL(url);
        this._options = options;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/input.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "Input": ()=>Input
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/input-format.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/reader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/source.js [app-client] (ecmascript)");
;
;
;
;
class Input {
    /** @internal */ _getDemuxer() {
        var _this__demuxerPromise;
        return (_this__demuxerPromise = this._demuxerPromise) !== null && _this__demuxerPromise !== void 0 ? _this__demuxerPromise : this._demuxerPromise = (async ()=>{
            await this._mainReader.loadRange(0, 4096); // Load the first 4 kiB so we can determine the format
            for (const format of this._formats){
                const canRead = await format._canReadInput(this);
                if (canRead) {
                    this._format = format;
                    return format._createDemuxer(this);
                }
            }
            throw new Error('Input has an unsupported or unrecognizable format.');
        })();
    }
    /**
     * Returns the source from which this input file reads its data. This is the same source that was passed to the
     * constructor.
     */ get source() {
        return this._source;
    }
    /**
     * Returns the format of the input file. You can compare this result directly to the InputFormat singletons or use
     * `instanceof` checks for subset-aware logic (for example, `format instanceof MatroskaInputFormat` is true for
     * both MKV and WebM).
     */ async getFormat() {
        await this._getDemuxer();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this._format);
        return this._format;
    }
    /**
     * Computes the duration of the input file, in seconds. More precisely, returns the largest end timestamp among
     * all tracks.
     */ async computeDuration() {
        const demuxer = await this._getDemuxer();
        return demuxer.computeDuration();
    }
    /** Returns the list of all tracks of this input file. */ async getTracks() {
        const demuxer = await this._getDemuxer();
        return demuxer.getTracks();
    }
    /** Returns the list of all video tracks of this input file. */ async getVideoTracks() {
        const tracks = await this.getTracks();
        return tracks.filter((x)=>x.isVideoTrack());
    }
    /** Returns the primary video track of this input file, or null if there are no video tracks. */ async getPrimaryVideoTrack() {
        const tracks = await this.getTracks();
        var _tracks_find;
        return (_tracks_find = tracks.find((x)=>x.isVideoTrack())) !== null && _tracks_find !== void 0 ? _tracks_find : null;
    }
    /** Returns the list of all audio tracks of this input file. */ async getAudioTracks() {
        const tracks = await this.getTracks();
        return tracks.filter((x)=>x.isAudioTrack());
    }
    /** Returns the primary audio track of this input file, or null if there are no audio tracks. */ async getPrimaryAudioTrack() {
        const tracks = await this.getTracks();
        var _tracks_find;
        return (_tracks_find = tracks.find((x)=>x.isAudioTrack())) !== null && _tracks_find !== void 0 ? _tracks_find : null;
    }
    /** Returns the full MIME type of this input file, including track codecs. */ async getMimeType() {
        const demuxer = await this._getDemuxer();
        return demuxer.getMimeType();
    }
    constructor(options){
        /** @internal */ this._demuxerPromise = null;
        /** @internal */ this._format = null;
        if (!options || typeof options !== 'object') {
            throw new TypeError('options must be an object.');
        }
        if (!Array.isArray(options.formats) || options.formats.some((x)=>!(x instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputFormat"]))) {
            throw new TypeError('options.formats must be an array of InputFormat.');
        }
        if (!(options.source instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Source"])) {
            throw new TypeError('options.source must be a Source.');
        }
        this._formats = options.formats;
        this._source = options.source;
        this._mainReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reader"](options.source);
    }
}
}),
}]);

//# sourceMappingURL=63989_mediabunny_dist_modules_db1f0e94._.js.map