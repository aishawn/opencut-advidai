(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/muxer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "Muxer": ()=>Muxer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
;
class Muxer {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onTrackClose(track) {}
    validateAndNormalizeTimestamp(track, timestampInSeconds, isKeyFrame) {
        timestampInSeconds += track.source._timestampOffset;
        let timestampInfo = this.trackTimestampInfo.get(track);
        if (!timestampInfo) {
            if (!isKeyFrame) {
                throw new Error('First frame must be a key frame.');
            }
            timestampInfo = {
                maxTimestamp: timestampInSeconds,
                maxTimestampBeforeLastKeyFrame: timestampInSeconds
            };
            this.trackTimestampInfo.set(track, timestampInfo);
        }
        if (timestampInSeconds < 0) {
            throw new Error("Timestamps must be non-negative (got ".concat(timestampInSeconds, "s)."));
        }
        if (isKeyFrame) {
            timestampInfo.maxTimestampBeforeLastKeyFrame = timestampInfo.maxTimestamp;
        }
        if (timestampInSeconds < timestampInfo.maxTimestampBeforeLastKeyFrame) {
            throw new Error("Timestamps cannot be smaller than the highest timestamp of the previous run (a run begins with a" + " key frame and ends right before the next key frame). Got ".concat(timestampInSeconds, "s, but highest") + " timestamp is ".concat(timestampInfo.maxTimestampBeforeLastKeyFrame, "s."));
        }
        timestampInfo.maxTimestamp = Math.max(timestampInfo.maxTimestamp, timestampInSeconds);
        return timestampInSeconds;
    }
    constructor(output){
        this.mutex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncMutex"]();
        /**
         * This field is used to synchronize multiple MediaStreamTracks. They use the same time coordinate system across
         * tracks, and to ensure correct audio-video sync, we must use the same offset for all of them. The reason an offset
         * is needed at all is because the timestamps typically don't start at zero.
         */ this.firstMediaStreamTimestamp = null;
        this.trackTimestampInfo = new WeakMap();
        this.output = output;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/adts/adts-muxer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "AdtsMuxer": ()=>AdtsMuxer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/muxer.js [app-client] (ecmascript)");
;
;
;
class AdtsMuxer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Muxer"] {
    async start() {
    // Nothing needed here
    }
    async getMimeType() {
        return 'audio/aac';
    }
    async addEncodedVideoPacket() {
        throw new Error('ADTS does not support video.');
    }
    async addEncodedAudioPacket(track, packet, meta) {
        // https://wiki.multimedia.cx/index.php/ADTS (last visited: 2025/08/17)
        const release = await this.mutex.acquire();
        try {
            this.validateAndNormalizeTimestamp(track, packet.timestamp, packet.type === 'key');
            if (!this.audioSpecificConfig) {
                var _meta_decoderConfig;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAudioChunkMetadata"])(meta);
                const description = meta === null || meta === void 0 ? void 0 : (_meta_decoderConfig = meta.decoderConfig) === null || _meta_decoderConfig === void 0 ? void 0 : _meta_decoderConfig.description;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(description);
                this.audioSpecificConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAacAudioSpecificConfig"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(description));
                const { objectType, frequencyIndex, channelConfiguration } = this.audioSpecificConfig;
                const profile = objectType - 1;
                this.headerBitstream.writeBits(12, 0b1111_11111111); // Syncword
                this.headerBitstream.writeBits(1, 0); // MPEG Version
                this.headerBitstream.writeBits(2, 0); // Layer
                this.headerBitstream.writeBits(1, 1); // Protection absence
                this.headerBitstream.writeBits(2, profile); // Profile
                this.headerBitstream.writeBits(4, frequencyIndex); // MPEG-4 Sampling Frequency Index
                this.headerBitstream.writeBits(1, 0); // Private bit
                this.headerBitstream.writeBits(3, channelConfiguration); // MPEG-4 Channel Configuration
                this.headerBitstream.writeBits(1, 0); // Originality
                this.headerBitstream.writeBits(1, 0); // Home
                this.headerBitstream.writeBits(1, 0); // Copyright ID bit
                this.headerBitstream.writeBits(1, 0); // Copyright ID start
                this.headerBitstream.skipBits(13); // Frame length
                this.headerBitstream.writeBits(11, 0x7ff); // Buffer fullness
                this.headerBitstream.writeBits(2, 0); // Number of AAC frames minus 1
            // Omit CRC check
            }
            const frameLength = packet.data.byteLength + this.header.byteLength;
            this.headerBitstream.pos = 30;
            this.headerBitstream.writeBits(13, frameLength);
            const startPos = this.writer.getPos();
            this.writer.write(this.header);
            this.writer.write(packet.data);
            if (this.format._options.onFrame) {
                const frameBytes = new Uint8Array(frameLength);
                frameBytes.set(this.header, 0);
                frameBytes.set(packet.data, this.header.byteLength);
                this.format._options.onFrame(frameBytes, startPos);
            }
            await this.writer.flush();
        } finally{
            release();
        }
    }
    async addSubtitleCue() {
        throw new Error('ADTS does not support subtitles.');
    }
    async finalize() {}
    constructor(output, format){
        super(output);
        this.header = new Uint8Array(7);
        this.headerBitstream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bitstream"](this.header);
        this.audioSpecificConfig = null;
        this.format = format;
        this.writer = output._writer;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/subtitles.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "SubtitleParser": ()=>SubtitleParser,
    "formatSubtitleTimestamp": ()=>formatSubtitleTimestamp,
    "inlineTimestampRegex": ()=>inlineTimestampRegex,
    "parseSubtitleTimestamp": ()=>parseSubtitleTimestamp
});
const cueBlockHeaderRegex = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g;
const preambleStartRegex = /^WEBVTT(.|\n)*?\n{2}/;
const inlineTimestampRegex = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
class SubtitleParser {
    parse(text) {
        text = text.replaceAll('\r\n', '\n').replaceAll('\r', '\n');
        cueBlockHeaderRegex.lastIndex = 0;
        let match;
        if (!this.preambleText) {
            if (!preambleStartRegex.test(text)) {
                throw new Error('WebVTT preamble incorrect.');
            }
            match = cueBlockHeaderRegex.exec(text);
            var _match_index;
            const preamble = text.slice(0, (_match_index = match === null || match === void 0 ? void 0 : match.index) !== null && _match_index !== void 0 ? _match_index : text.length).trimEnd();
            if (!preamble) {
                throw new Error('No WebVTT preamble provided.');
            }
            this.preambleText = preamble;
            if (match) {
                text = text.slice(match.index);
                cueBlockHeaderRegex.lastIndex = 0;
            }
        }
        while(match = cueBlockHeaderRegex.exec(text)){
            const notes = text.slice(0, match.index);
            const cueIdentifier = match[1];
            const matchEnd = match.index + match[0].length;
            const bodyStart = text.indexOf('\n', matchEnd) + 1;
            const cueSettings = text.slice(matchEnd, bodyStart).trim();
            let bodyEnd = text.indexOf('\n\n', matchEnd);
            if (bodyEnd === -1) bodyEnd = text.length;
            const startTime = parseSubtitleTimestamp(match[2]);
            const endTime = parseSubtitleTimestamp(match[3]);
            const duration = endTime - startTime;
            const body = text.slice(bodyStart, bodyEnd).trim();
            text = text.slice(bodyEnd).trimStart();
            cueBlockHeaderRegex.lastIndex = 0;
            const cue = {
                timestamp: startTime / 1000,
                duration: duration / 1000,
                text: body,
                identifier: cueIdentifier,
                settings: cueSettings,
                notes
            };
            const meta = {};
            if (!this.preambleEmitted) {
                meta.config = {
                    description: this.preambleText
                };
                this.preambleEmitted = true;
            }
            this.options.output(cue, meta);
        }
    }
    constructor(options){
        this.preambleText = null;
        this.preambleEmitted = false;
        this.options = options;
    }
}
const timestampRegex = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/;
const parseSubtitleTimestamp = (string)=>{
    const match = timestampRegex.exec(string);
    if (!match) throw new Error('Expected match.');
    return 60 * 60 * 1000 * Number(match[1] || '0') + 60 * 1000 * Number(match[2]) + 1000 * Number(match[3]) + Number(match[4]);
};
const formatSubtitleTimestamp = (timestamp)=>{
    const hours = Math.floor(timestamp / (60 * 60 * 1000));
    const minutes = Math.floor(timestamp % (60 * 60 * 1000) / (60 * 1000));
    const seconds = Math.floor(timestamp % (60 * 1000) / 1000);
    const milliseconds = timestamp % 1000;
    return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0') + '.' + milliseconds.toString().padStart(3, '0');
};
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/isobmff/isobmff-boxes.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "IsobmffBoxWriter": ()=>IsobmffBoxWriter,
    "av1C": ()=>av1C,
    "avcC": ()=>avcC,
    "box": ()=>box,
    "colr": ()=>colr,
    "cslg": ()=>cslg,
    "ctts": ()=>ctts,
    "dOps": ()=>dOps,
    "dfLa": ()=>dfLa,
    "dinf": ()=>dinf,
    "dref": ()=>dref,
    "enda": ()=>enda,
    "esds": ()=>esds,
    "frma": ()=>frma,
    "ftyp": ()=>ftyp,
    "fullBox": ()=>fullBox,
    "hdlr": ()=>hdlr,
    "hvcC": ()=>hvcC,
    "mdat": ()=>mdat,
    "mdhd": ()=>mdhd,
    "mdia": ()=>mdia,
    "mfhd": ()=>mfhd,
    "mfra": ()=>mfra,
    "mfro": ()=>mfro,
    "minf": ()=>minf,
    "moof": ()=>moof,
    "moov": ()=>moov,
    "mvex": ()=>mvex,
    "mvhd": ()=>mvhd,
    "nmhd": ()=>nmhd,
    "smhd": ()=>smhd,
    "soundSampleDescription": ()=>soundSampleDescription,
    "stbl": ()=>stbl,
    "stco": ()=>stco,
    "stsc": ()=>stsc,
    "stsd": ()=>stsd,
    "stss": ()=>stss,
    "stsz": ()=>stsz,
    "stts": ()=>stts,
    "subtitleSampleDescription": ()=>subtitleSampleDescription,
    "tfdt": ()=>tfdt,
    "tfhd": ()=>tfhd,
    "tfra": ()=>tfra,
    "tkhd": ()=>tkhd,
    "traf": ()=>traf,
    "trak": ()=>trak,
    "trex": ()=>trex,
    "trun": ()=>trun,
    "txtC": ()=>txtC,
    "url": ()=>url,
    "videoSampleDescription": ()=>videoSampleDescription,
    "vmhd": ()=>vmhd,
    "vpcC": ()=>vpcC,
    "vttC": ()=>vttC,
    "vtta": ()=>vtta,
    "vttc": ()=>vttc,
    "vtte": ()=>vtte,
    "wave": ()=>wave
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$subtitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/subtitles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/isobmff/isobmff-muxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec-data.js [app-client] (ecmascript)");
;
;
;
;
;
class IsobmffBoxWriter {
    writeU32(value) {
        this.helperView.setUint32(0, value, false);
        this.writer.write(this.helper.subarray(0, 4));
    }
    writeU64(value) {
        this.helperView.setUint32(0, Math.floor(value / 2 ** 32), false);
        this.helperView.setUint32(4, value, false);
        this.writer.write(this.helper.subarray(0, 8));
    }
    writeAscii(text) {
        for(let i = 0; i < text.length; i++){
            this.helperView.setUint8(i % 8, text.charCodeAt(i));
            if (i % 8 === 7) this.writer.write(this.helper);
        }
        if (text.length % 8 !== 0) {
            this.writer.write(this.helper.subarray(0, text.length % 8));
        }
    }
    writeBox(box) {
        this.offsets.set(box, this.writer.getPos());
        if (box.contents && !box.children) {
            var _box_size;
            this.writeBoxHeader(box, (_box_size = box.size) !== null && _box_size !== void 0 ? _box_size : box.contents.byteLength + 8);
            this.writer.write(box.contents);
        } else {
            const startPos = this.writer.getPos();
            this.writeBoxHeader(box, 0);
            if (box.contents) this.writer.write(box.contents);
            if (box.children) {
                for (const child of box.children)if (child) this.writeBox(child);
            }
            const endPos = this.writer.getPos();
            var _box_size1;
            const size = (_box_size1 = box.size) !== null && _box_size1 !== void 0 ? _box_size1 : endPos - startPos;
            this.writer.seek(startPos);
            this.writeBoxHeader(box, size);
            this.writer.seek(endPos);
        }
    }
    writeBoxHeader(box, size) {
        this.writeU32(box.largeSize ? 1 : size);
        this.writeAscii(box.type);
        if (box.largeSize) this.writeU64(size);
    }
    measureBoxHeader(box) {
        return 8 + (box.largeSize ? 8 : 0);
    }
    patchBox(box) {
        const boxOffset = this.offsets.get(box);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(boxOffset !== undefined);
        const endPos = this.writer.getPos();
        this.writer.seek(boxOffset);
        this.writeBox(box);
        this.writer.seek(endPos);
    }
    measureBox(box) {
        if (box.contents && !box.children) {
            const headerSize = this.measureBoxHeader(box);
            return headerSize + box.contents.byteLength;
        } else {
            let result = this.measureBoxHeader(box);
            if (box.contents) result += box.contents.byteLength;
            if (box.children) {
                for (const child of box.children)if (child) result += this.measureBox(child);
            }
            return result;
        }
    }
    constructor(writer){
        this.writer = writer;
        this.helper = new Uint8Array(8);
        this.helperView = new DataView(this.helper.buffer);
        /**
         * Stores the position from the start of the file to where boxes elements have been written. This is used to
         * rewrite/edit elements that were already added before, and to measure sizes of things.
         */ this.offsets = new WeakMap();
    }
}
const bytes = new Uint8Array(8);
const view = new DataView(bytes.buffer);
const u8 = (value)=>{
    return [
        (value % 0x100 + 0x100) % 0x100
    ];
};
const u16 = (value)=>{
    view.setUint16(0, value, false);
    return [
        bytes[0],
        bytes[1]
    ];
};
const i16 = (value)=>{
    view.setInt16(0, value, false);
    return [
        bytes[0],
        bytes[1]
    ];
};
const u24 = (value)=>{
    view.setUint32(0, value, false);
    return [
        bytes[1],
        bytes[2],
        bytes[3]
    ];
};
const u32 = (value)=>{
    view.setUint32(0, value, false);
    return [
        bytes[0],
        bytes[1],
        bytes[2],
        bytes[3]
    ];
};
const i32 = (value)=>{
    view.setInt32(0, value, false);
    return [
        bytes[0],
        bytes[1],
        bytes[2],
        bytes[3]
    ];
};
const u64 = (value)=>{
    view.setUint32(0, Math.floor(value / 2 ** 32), false);
    view.setUint32(4, value, false);
    return [
        bytes[0],
        bytes[1],
        bytes[2],
        bytes[3],
        bytes[4],
        bytes[5],
        bytes[6],
        bytes[7]
    ];
};
const fixed_8_8 = (value)=>{
    view.setInt16(0, 2 ** 8 * value, false);
    return [
        bytes[0],
        bytes[1]
    ];
};
const fixed_16_16 = (value)=>{
    view.setInt32(0, 2 ** 16 * value, false);
    return [
        bytes[0],
        bytes[1],
        bytes[2],
        bytes[3]
    ];
};
const fixed_2_30 = (value)=>{
    view.setInt32(0, 2 ** 30 * value, false);
    return [
        bytes[0],
        bytes[1],
        bytes[2],
        bytes[3]
    ];
};
const variableUnsignedInt = (value, byteLength)=>{
    const bytes = [];
    let remaining = value;
    do {
        let byte = remaining & 0x7f;
        remaining >>= 7;
        // If this isn't the first byte we're adding (meaning there will be more bytes after it
        // when we reverse the array), set the continuation bit
        if (bytes.length > 0) {
            byte |= 0x80;
        }
        bytes.push(byte);
        if (byteLength !== undefined) {
            byteLength--;
        }
    }while (remaining > 0 || byteLength)
    // Reverse the array since we built it backwards
    return bytes.reverse();
};
const ascii = function(text) {
    let nullTerminated = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const bytes = Array(text.length).fill(null).map((_, i)=>text.charCodeAt(i));
    if (nullTerminated) bytes.push(0x00);
    return bytes;
};
const lastPresentedSample = (samples)=>{
    let result = null;
    for (const sample of samples){
        if (!result || sample.timestamp > result.timestamp) {
            result = sample;
        }
    }
    return result;
};
const rotationMatrix = (rotationInDegrees)=>{
    const theta = rotationInDegrees * (Math.PI / 180);
    const cosTheta = Math.round(Math.cos(theta));
    const sinTheta = Math.round(Math.sin(theta));
    // Matrices are post-multiplied in ISOBMFF, meaning this is the transpose of your typical rotation matrix
    return [
        cosTheta,
        sinTheta,
        0,
        -sinTheta,
        cosTheta,
        0,
        0,
        0,
        1
    ];
};
const IDENTITY_MATRIX = rotationMatrix(0);
const matrixToBytes = (matrix)=>{
    return [
        fixed_16_16(matrix[0]),
        fixed_16_16(matrix[1]),
        fixed_2_30(matrix[2]),
        fixed_16_16(matrix[3]),
        fixed_16_16(matrix[4]),
        fixed_2_30(matrix[5]),
        fixed_16_16(matrix[6]),
        fixed_16_16(matrix[7]),
        fixed_2_30(matrix[8])
    ];
};
const box = (type, contents, children)=>({
        type,
        contents: contents && new Uint8Array(contents.flat(10)),
        children
    });
const fullBox = (type, version, flags, contents, children)=>box(type, [
        u8(version),
        u24(flags),
        contents !== null && contents !== void 0 ? contents : []
    ], children);
const ftyp = (details)=>{
    // You can find the full logic for this at
    // https://github.com/FFmpeg/FFmpeg/blob/de2fb43e785773738c660cdafb9309b1ef1bc80d/libavformat/movenc.c#L5518
    // Obviously, this lib only needs a small subset of that logic.
    const minorVersion = 0x200;
    if (details.isQuickTime) {
        return box('ftyp', [
            ascii('qt  '),
            u32(minorVersion),
            // Compatible brands
            ascii('qt  ')
        ]);
    }
    if (details.fragmented) {
        return box('ftyp', [
            ascii('iso5'),
            u32(minorVersion),
            // Compatible brands
            ascii('iso5'),
            ascii('iso6'),
            ascii('mp41')
        ]);
    }
    return box('ftyp', [
        ascii('isom'),
        u32(minorVersion),
        // Compatible brands
        ascii('isom'),
        details.holdsAvc ? ascii('avc1') : [],
        ascii('mp41')
    ]);
};
const mdat = (reserveLargeSize)=>({
        type: 'mdat',
        largeSize: reserveLargeSize
    });
const moov = function(trackDatas, creationTime) {
    let fragmented = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    return box('moov', undefined, [
        mvhd(creationTime, trackDatas),
        ...trackDatas.map((x)=>trak(x, creationTime)),
        fragmented ? mvex(trackDatas) : null
    ]);
};
const mvhd = (creationTime, trackDatas)=>{
    const duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intoTimescale"])(Math.max(0, ...trackDatas.filter((x)=>x.samples.length > 0).map((x)=>{
        const lastSample = lastPresentedSample(x.samples);
        return lastSample.timestamp + lastSample.duration;
    })), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_TIMESCALE"]);
    const nextTrackId = Math.max(0, ...trackDatas.map((x)=>x.track.id)) + 1;
    // Conditionally use u64 if u32 isn't enough
    const needsU64 = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isU32"])(creationTime) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isU32"])(duration);
    const u32OrU64 = needsU64 ? u64 : u32;
    return fullBox('mvhd', +needsU64, 0, [
        u32OrU64(creationTime),
        u32OrU64(creationTime),
        u32(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_TIMESCALE"]),
        u32OrU64(duration),
        fixed_16_16(1),
        fixed_8_8(1),
        Array(10).fill(0),
        matrixToBytes(IDENTITY_MATRIX),
        Array(24).fill(0),
        u32(nextTrackId)
    ]);
};
const trak = (trackData, creationTime)=>box('trak', undefined, [
        tkhd(trackData, creationTime),
        mdia(trackData, creationTime)
    ]);
const tkhd = (trackData, creationTime)=>{
    const lastSample = lastPresentedSample(trackData.samples);
    const durationInGlobalTimescale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intoTimescale"])(lastSample ? lastSample.timestamp + lastSample.duration : 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_TIMESCALE"]);
    const needsU64 = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isU32"])(creationTime) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isU32"])(durationInGlobalTimescale);
    const u32OrU64 = needsU64 ? u64 : u32;
    let matrix;
    if (trackData.type === 'video') {
        const rotation = trackData.track.metadata.rotation;
        matrix = rotationMatrix(rotation !== null && rotation !== void 0 ? rotation : 0);
    } else {
        matrix = IDENTITY_MATRIX;
    }
    return fullBox('tkhd', +needsU64, 3, [
        u32OrU64(creationTime),
        u32OrU64(creationTime),
        u32(trackData.track.id),
        u32(0),
        u32OrU64(durationInGlobalTimescale),
        Array(8).fill(0),
        u16(0),
        u16(trackData.track.id),
        fixed_8_8(trackData.type === 'audio' ? 1 : 0),
        u16(0),
        matrixToBytes(matrix),
        fixed_16_16(trackData.type === 'video' ? trackData.info.width : 0),
        fixed_16_16(trackData.type === 'video' ? trackData.info.height : 0)
    ]);
};
const mdia = (trackData, creationTime)=>box('mdia', undefined, [
        mdhd(trackData, creationTime),
        hdlr(trackData),
        minf(trackData)
    ]);
const mdhd = (trackData, creationTime)=>{
    const lastSample = lastPresentedSample(trackData.samples);
    const localDuration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intoTimescale"])(lastSample ? lastSample.timestamp + lastSample.duration : 0, trackData.timescale);
    const needsU64 = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isU32"])(creationTime) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isU32"])(localDuration);
    const u32OrU64 = needsU64 ? u64 : u32;
    let language = 0;
    var _trackData_track_metadata_languageCode;
    for (const character of (_trackData_track_metadata_languageCode = trackData.track.metadata.languageCode) !== null && _trackData_track_metadata_languageCode !== void 0 ? _trackData_track_metadata_languageCode : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNDETERMINED_LANGUAGE"]){
        language <<= 5;
        language += character.charCodeAt(0) - 0x60;
    }
    return fullBox('mdhd', +needsU64, 0, [
        u32OrU64(creationTime),
        u32OrU64(creationTime),
        u32(trackData.timescale),
        u32OrU64(localDuration),
        u16(language),
        u16(0)
    ]);
};
const TRACK_TYPE_TO_COMPONENT_SUBTYPE = {
    video: 'vide',
    audio: 'soun',
    subtitle: 'text'
};
const TRACK_TYPE_TO_HANDLER_NAME = {
    video: 'MediabunnyVideoHandler',
    audio: 'MediabunnySoundHandler',
    subtitle: 'MediabunnyTextHandler'
};
const hdlr = (trackData)=>fullBox('hdlr', 0, 0, [
        ascii('mhlr'),
        ascii(TRACK_TYPE_TO_COMPONENT_SUBTYPE[trackData.type]),
        u32(0),
        u32(0),
        u32(0),
        ascii(TRACK_TYPE_TO_HANDLER_NAME[trackData.type], true)
    ]);
const minf = (trackData)=>box('minf', undefined, [
        TRACK_TYPE_TO_HEADER_BOX[trackData.type](),
        dinf(),
        stbl(trackData)
    ]);
const vmhd = ()=>fullBox('vmhd', 0, 1, [
        u16(0),
        u16(0),
        u16(0),
        u16(0)
    ]);
const smhd = ()=>fullBox('smhd', 0, 0, [
        u16(0),
        u16(0)
    ]);
const nmhd = ()=>fullBox('nmhd', 0, 0);
const TRACK_TYPE_TO_HEADER_BOX = {
    video: vmhd,
    audio: smhd,
    subtitle: nmhd
};
const dinf = ()=>box('dinf', undefined, [
        dref()
    ]);
const dref = ()=>fullBox('dref', 0, 0, [
        u32(1)
    ], [
        url()
    ]);
const url = ()=>fullBox('url ', 0, 1); // Self-reference flag enabled
const stbl = (trackData)=>{
    const needsCtts = trackData.compositionTimeOffsetTable.length > 1 || trackData.compositionTimeOffsetTable.some((x)=>x.sampleCompositionTimeOffset !== 0);
    return box('stbl', undefined, [
        stsd(trackData),
        stts(trackData),
        needsCtts ? ctts(trackData) : null,
        needsCtts ? cslg(trackData) : null,
        stsc(trackData),
        stsz(trackData),
        stco(trackData),
        stss(trackData)
    ]);
};
const stsd = (trackData)=>{
    let sampleDescription;
    if (trackData.type === 'video') {
        sampleDescription = videoSampleDescription(VIDEO_CODEC_TO_BOX_NAME[trackData.track.source._codec], trackData);
    } else if (trackData.type === 'audio') {
        const boxName = audioCodecToBoxName(trackData.track.source._codec, trackData.muxer.isQuickTime);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(boxName);
        sampleDescription = soundSampleDescription(boxName, trackData);
    } else if (trackData.type === 'subtitle') {
        sampleDescription = subtitleSampleDescription(SUBTITLE_CODEC_TO_BOX_NAME[trackData.track.source._codec], trackData);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(sampleDescription);
    return fullBox('stsd', 0, 0, [
        u32(1)
    ], [
        sampleDescription
    ]);
};
const videoSampleDescription = (compressionType, trackData)=>box(compressionType, [
        Array(6).fill(0),
        u16(1),
        u16(0),
        u16(0),
        Array(12).fill(0),
        u16(trackData.info.width),
        u16(trackData.info.height),
        u32(0x00480000),
        u32(0x00480000),
        u32(0),
        u16(1),
        Array(32).fill(0),
        u16(0x0018),
        i16(0xffff)
    ], [
        VIDEO_CODEC_TO_CONFIGURATION_BOX[trackData.track.source._codec](trackData),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorSpaceIsComplete"])(trackData.info.decoderConfig.colorSpace) ? colr(trackData) : null
    ]);
const colr = (trackData)=>box('colr', [
        ascii('nclx'),
        u16(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_PRIMARIES_MAP"][trackData.info.decoderConfig.colorSpace.primaries]),
        u16(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSFER_CHARACTERISTICS_MAP"][trackData.info.decoderConfig.colorSpace.transfer]),
        u16(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MATRIX_COEFFICIENTS_MAP"][trackData.info.decoderConfig.colorSpace.matrix]),
        u8((trackData.info.decoderConfig.colorSpace.fullRange ? 1 : 0) << 7)
    ]);
const avcC = (trackData)=>trackData.info.decoderConfig && box('avcC', [
        // For AVC, description is an AVCDecoderConfigurationRecord, so nothing else to do here
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(trackData.info.decoderConfig.description)
    ]);
const hvcC = (trackData)=>trackData.info.decoderConfig && box('hvcC', [
        // For HEVC, description is an HEVCDecoderConfigurationRecord, so nothing else to do here
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(trackData.info.decoderConfig.description)
    ]);
const vpcC = (trackData)=>{
    var _decoderConfig_colorSpace, _decoderConfig_colorSpace1, _decoderConfig_colorSpace2, _decoderConfig_colorSpace3;
    // Reference: https://www.webmproject.org/vp9/mp4/
    if (!trackData.info.decoderConfig) {
        return null;
    }
    const decoderConfig = trackData.info.decoderConfig;
    const parts = decoderConfig.codec.split('.'); // We can derive the required values from the codec string
    const profile = Number(parts[1]);
    const level = Number(parts[2]);
    const bitDepth = Number(parts[3]);
    const chromaSubsampling = parts[4] ? Number(parts[4]) : 1; // 4:2:0 colocated with luma (0,0)
    var _decoderConfig_colorSpace_fullRange;
    const videoFullRangeFlag = parts[8] ? Number(parts[8]) : Number((_decoderConfig_colorSpace_fullRange = (_decoderConfig_colorSpace = decoderConfig.colorSpace) === null || _decoderConfig_colorSpace === void 0 ? void 0 : _decoderConfig_colorSpace.fullRange) !== null && _decoderConfig_colorSpace_fullRange !== void 0 ? _decoderConfig_colorSpace_fullRange : 0);
    const thirdByte = (bitDepth << 4) + (chromaSubsampling << 1) + videoFullRangeFlag;
    const colourPrimaries = parts[5] ? Number(parts[5]) : ((_decoderConfig_colorSpace1 = decoderConfig.colorSpace) === null || _decoderConfig_colorSpace1 === void 0 ? void 0 : _decoderConfig_colorSpace1.primaries) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_PRIMARIES_MAP"][decoderConfig.colorSpace.primaries] : 2; // Default to undetermined
    const transferCharacteristics = parts[6] ? Number(parts[6]) : ((_decoderConfig_colorSpace2 = decoderConfig.colorSpace) === null || _decoderConfig_colorSpace2 === void 0 ? void 0 : _decoderConfig_colorSpace2.transfer) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSFER_CHARACTERISTICS_MAP"][decoderConfig.colorSpace.transfer] : 2;
    const matrixCoefficients = parts[7] ? Number(parts[7]) : ((_decoderConfig_colorSpace3 = decoderConfig.colorSpace) === null || _decoderConfig_colorSpace3 === void 0 ? void 0 : _decoderConfig_colorSpace3.matrix) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MATRIX_COEFFICIENTS_MAP"][decoderConfig.colorSpace.matrix] : 2;
    return fullBox('vpcC', 1, 0, [
        u8(profile),
        u8(level),
        u8(thirdByte),
        u8(colourPrimaries),
        u8(transferCharacteristics),
        u8(matrixCoefficients),
        u16(0)
    ]);
};
const av1C = (trackData)=>{
    return box('av1C', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateAv1CodecConfigurationFromCodecString"])(trackData.info.decoderConfig.codec));
};
const soundSampleDescription = (compressionType, trackData)=>{
    var _audioCodecToConfigurationBox;
    let version = 0;
    let contents;
    let sampleSizeInBits = 16;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCM_AUDIO_CODECS"].includes(trackData.track.source._codec)) {
        const codec = trackData.track.source._codec;
        const { sampleSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePcmCodec"])(codec);
        sampleSizeInBits = 8 * sampleSize;
        if (sampleSizeInBits > 16) {
            version = 1;
        }
    }
    if (version === 0) {
        contents = [
            Array(6).fill(0),
            u16(1),
            u16(version),
            u16(0),
            u32(0),
            u16(trackData.info.numberOfChannels),
            u16(sampleSizeInBits),
            u16(0),
            u16(0),
            u16(trackData.info.sampleRate < 2 ** 16 ? trackData.info.sampleRate : 0),
            u16(0)
        ];
    } else {
        contents = [
            Array(6).fill(0),
            u16(1),
            u16(version),
            u16(0),
            u32(0),
            u16(trackData.info.numberOfChannels),
            u16(Math.min(sampleSizeInBits, 16)),
            u16(0),
            u16(0),
            u16(trackData.info.sampleRate < 2 ** 16 ? trackData.info.sampleRate : 0),
            u16(0),
            u32(1),
            u32(sampleSizeInBits / 8),
            u32(trackData.info.numberOfChannels * sampleSizeInBits / 8),
            u32(2)
        ];
    }
    var _audioCodecToConfigurationBox1;
    return box(compressionType, contents, [
        (_audioCodecToConfigurationBox1 = (_audioCodecToConfigurationBox = audioCodecToConfigurationBox(trackData.track.source._codec, trackData.muxer.isQuickTime)) === null || _audioCodecToConfigurationBox === void 0 ? void 0 : _audioCodecToConfigurationBox(trackData)) !== null && _audioCodecToConfigurationBox1 !== void 0 ? _audioCodecToConfigurationBox1 : null
    ]);
};
const esds = (trackData)=>{
    // We build up the bytes in a layered way which reflects the nested structure
    let objectTypeIndication;
    switch(trackData.track.source._codec){
        case 'aac':
            {
                objectTypeIndication = 0x40;
            }
            ;
            break;
        case 'mp3':
            {
                objectTypeIndication = 0x6b;
            }
            ;
            break;
        case 'vorbis':
            {
                objectTypeIndication = 0xdd;
            }
            ;
            break;
        default:
            throw new Error("Unhandled audio codec: ".concat(trackData.track.source._codec));
    }
    let bytes = [
        ...u8(objectTypeIndication),
        ...u8(0x15),
        ...u24(0),
        ...u32(0),
        ...u32(0)
    ];
    if (trackData.info.decoderConfig.description) {
        const description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(trackData.info.decoderConfig.description);
        // Add the decoder description to the end
        bytes = [
            ...bytes,
            ...u8(0x05),
            ...variableUnsignedInt(description.byteLength),
            ...description
        ];
    }
    bytes = [
        ...u16(1),
        ...u8(0x00),
        ...u8(0x04),
        ...variableUnsignedInt(bytes.length),
        ...bytes,
        ...u8(0x06),
        ...u8(0x01),
        ...u8(0x02)
    ];
    bytes = [
        ...u8(0x03),
        ...variableUnsignedInt(bytes.length),
        ...bytes
    ];
    return fullBox('esds', 0, 0, bytes);
};
const wave = (trackData)=>{
    return box('wave', undefined, [
        frma(trackData),
        enda(trackData),
        box('\x00\x00\x00\x00')
    ]);
};
const frma = (trackData)=>{
    return box('frma', [
        ascii(audioCodecToBoxName(trackData.track.source._codec, trackData.muxer.isQuickTime))
    ]);
};
const enda = (trackData)=>{
    const { littleEndian } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePcmCodec"])(trackData.track.source._codec);
    return box('enda', [
        u16(+littleEndian)
    ]);
};
const dOps = (trackData)=>{
    var _trackData_info_decoderConfig;
    let outputChannelCount = trackData.info.numberOfChannels;
    // Default PreSkip, should be at least 80 milliseconds worth of playback, measured in 48000 Hz samples
    let preSkip = 3840;
    let inputSampleRate = trackData.info.sampleRate;
    let outputGain = 0;
    let channelMappingFamily = 0;
    let channelMappingTable = new Uint8Array(0);
    // Read preskip and from codec private data from the encoder
    // https://www.rfc-editor.org/rfc/rfc7845#section-5
    const description = (_trackData_info_decoderConfig = trackData.info.decoderConfig) === null || _trackData_info_decoderConfig === void 0 ? void 0 : _trackData_info_decoderConfig.description;
    if (description) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(description.byteLength >= 18);
        const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(description);
        const header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseOpusIdentificationHeader"])(bytes);
        outputChannelCount = header.outputChannelCount;
        preSkip = header.preSkip;
        inputSampleRate = header.inputSampleRate;
        outputGain = header.outputGain;
        channelMappingFamily = header.channelMappingFamily;
        if (header.channelMappingTable) {
            channelMappingTable = header.channelMappingTable;
        }
    }
    // https://www.opus-codec.org/docs/opus_in_isobmff.html
    return box('dOps', [
        u8(0),
        u8(outputChannelCount),
        u16(preSkip),
        u32(inputSampleRate),
        i16(outputGain),
        u8(channelMappingFamily),
        ...channelMappingTable
    ]);
};
const dfLa = (trackData)=>{
    var _trackData_info_decoderConfig;
    const description = (_trackData_info_decoderConfig = trackData.info.decoderConfig) === null || _trackData_info_decoderConfig === void 0 ? void 0 : _trackData_info_decoderConfig.description;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(description);
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(description);
    return fullBox('dfLa', 0, 0, [
        ...bytes.subarray(4)
    ]);
};
/** PCM Configuration Box, ISO/IEC 23003-5. */ const pcmC = (trackData)=>{
    const { littleEndian, sampleSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePcmCodec"])(trackData.track.source._codec);
    const formatFlags = +littleEndian;
    return fullBox('pcmC', 0, 0, [
        u8(formatFlags),
        u8(8 * sampleSize)
    ]);
};
const subtitleSampleDescription = (compressionType, trackData)=>box(compressionType, [
        Array(6).fill(0),
        u16(1)
    ], [
        SUBTITLE_CODEC_TO_CONFIGURATION_BOX[trackData.track.source._codec](trackData)
    ]);
const vttC = (trackData)=>box('vttC', [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEncoder"].encode(trackData.info.config.description)
    ]);
const txtC = (textConfig)=>fullBox('txtC', 0, 0, [
        ...textConfig,
        0
    ]);
const stts = (trackData)=>{
    return fullBox('stts', 0, 0, [
        u32(trackData.timeToSampleTable.length),
        trackData.timeToSampleTable.map((x)=>[
                u32(x.sampleCount),
                u32(x.sampleDelta)
            ])
    ]);
};
const stss = (trackData)=>{
    if (trackData.samples.every((x)=>x.type === 'key')) return null; // No stss box -> every frame is a key frame
    const keySamples = [
        ...trackData.samples.entries()
    ].filter((param)=>{
        let [, sample] = param;
        return sample.type === 'key';
    });
    return fullBox('stss', 0, 0, [
        u32(keySamples.length),
        keySamples.map((param)=>{
            let [index] = param;
            return u32(index + 1);
        })
    ]);
};
const stsc = (trackData)=>{
    return fullBox('stsc', 0, 0, [
        u32(trackData.compactlyCodedChunkTable.length),
        trackData.compactlyCodedChunkTable.map((x)=>[
                u32(x.firstChunk),
                u32(x.samplesPerChunk),
                u32(1)
            ])
    ]);
};
const stsz = (trackData)=>{
    if (trackData.type === 'audio' && trackData.info.requiresPcmTransformation) {
        const { sampleSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePcmCodec"])(trackData.track.source._codec);
        // With PCM, every sample has the same size
        return fullBox('stsz', 0, 0, [
            u32(sampleSize * trackData.info.numberOfChannels),
            u32(trackData.samples.reduce((acc, x)=>acc + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intoTimescale"])(x.duration, trackData.timescale), 0))
        ]);
    }
    return fullBox('stsz', 0, 0, [
        u32(0),
        u32(trackData.samples.length),
        trackData.samples.map((x)=>u32(x.size))
    ]);
};
const stco = (trackData)=>{
    if (trackData.finalizedChunks.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(trackData.finalizedChunks).offset >= 2 ** 32) {
        // If the file is large, use the co64 box
        return fullBox('co64', 0, 0, [
            u32(trackData.finalizedChunks.length),
            trackData.finalizedChunks.map((x)=>u64(x.offset))
        ]);
    }
    return fullBox('stco', 0, 0, [
        u32(trackData.finalizedChunks.length),
        trackData.finalizedChunks.map((x)=>u32(x.offset))
    ]);
};
const ctts = (trackData)=>{
    return fullBox('ctts', 1, 0, [
        u32(trackData.compositionTimeOffsetTable.length),
        trackData.compositionTimeOffsetTable.map((x)=>[
                u32(x.sampleCount),
                i32(x.sampleCompositionTimeOffset)
            ])
    ]);
};
const cslg = (trackData)=>{
    let leastDecodeToDisplayDelta = Infinity;
    let greatestDecodeToDisplayDelta = -Infinity;
    let compositionStartTime = Infinity;
    let compositionEndTime = -Infinity;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(trackData.compositionTimeOffsetTable.length > 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(trackData.samples.length > 0);
    for(let i = 0; i < trackData.compositionTimeOffsetTable.length; i++){
        const entry = trackData.compositionTimeOffsetTable[i];
        leastDecodeToDisplayDelta = Math.min(leastDecodeToDisplayDelta, entry.sampleCompositionTimeOffset);
        greatestDecodeToDisplayDelta = Math.max(greatestDecodeToDisplayDelta, entry.sampleCompositionTimeOffset);
    }
    for(let i = 0; i < trackData.samples.length; i++){
        const sample = trackData.samples[i];
        compositionStartTime = Math.min(compositionStartTime, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intoTimescale"])(sample.timestamp, trackData.timescale));
        compositionEndTime = Math.max(compositionEndTime, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intoTimescale"])(sample.timestamp + sample.duration, trackData.timescale));
    }
    const compositionToDtsShift = Math.max(-leastDecodeToDisplayDelta, 0);
    if (compositionEndTime >= 2 ** 31) {
        // For very large files, the composition end time can't be represented in i32, so let's just scrap the box in
        // that case. QuickTime fails to read the file if there's a cslg box with version 1, so that's sadly not an
        // option.
        return null;
    }
    return fullBox('cslg', 0, 0, [
        i32(compositionToDtsShift),
        i32(leastDecodeToDisplayDelta),
        i32(greatestDecodeToDisplayDelta),
        i32(compositionStartTime),
        i32(compositionEndTime)
    ]);
};
const mvex = (trackDatas)=>{
    return box('mvex', undefined, trackDatas.map(trex));
};
const trex = (trackData)=>{
    return fullBox('trex', 0, 0, [
        u32(trackData.track.id),
        u32(1),
        u32(0),
        u32(0),
        u32(0)
    ]);
};
const moof = (sequenceNumber, trackDatas)=>{
    return box('moof', undefined, [
        mfhd(sequenceNumber),
        ...trackDatas.map(traf)
    ]);
};
const mfhd = (sequenceNumber)=>{
    return fullBox('mfhd', 0, 0, [
        u32(sequenceNumber)
    ]);
};
const fragmentSampleFlags = (sample)=>{
    let byte1 = 0;
    let byte2 = 0;
    const byte3 = 0;
    const byte4 = 0;
    const sampleIsDifferenceSample = sample.type === 'delta';
    byte2 |= +sampleIsDifferenceSample;
    if (sampleIsDifferenceSample) {
        byte1 |= 1; // There is redundant coding in this sample
    } else {
        byte1 |= 2; // There is no redundant coding in this sample
    }
    // Note that there are a lot of other flags to potentially set here, but most are irrelevant / non-necessary
    return byte1 << 24 | byte2 << 16 | byte3 << 8 | byte4;
};
const traf = (trackData)=>{
    return box('traf', undefined, [
        tfhd(trackData),
        tfdt(trackData),
        trun(trackData)
    ]);
};
const tfhd = (trackData)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(trackData.currentChunk);
    let tfFlags = 0;
    tfFlags |= 0x00008; // Default sample duration present
    tfFlags |= 0x00010; // Default sample size present
    tfFlags |= 0x00020; // Default sample flags present
    tfFlags |= 0x20000; // Default base is moof
    var _trackData_currentChunk_samples_;
    // Prefer the second sample over the first one, as the first one is a sync sample and therefore the "odd one out"
    const referenceSample = (_trackData_currentChunk_samples_ = trackData.currentChunk.samples[1]) !== null && _trackData_currentChunk_samples_ !== void 0 ? _trackData_currentChunk_samples_ : trackData.currentChunk.samples[0];
    const referenceSampleInfo = {
        duration: referenceSample.timescaleUnitsToNextSample,
        size: referenceSample.size,
        flags: fragmentSampleFlags(referenceSample)
    };
    return fullBox('tfhd', 0, tfFlags, [
        u32(trackData.track.id),
        u32(referenceSampleInfo.duration),
        u32(referenceSampleInfo.size),
        u32(referenceSampleInfo.flags)
    ]);
};
const tfdt = (trackData)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(trackData.currentChunk);
    return fullBox('tfdt', 1, 0, [
        u64((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intoTimescale"])(trackData.currentChunk.startTimestamp, trackData.timescale))
    ]);
};
const trun = (trackData)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(trackData.currentChunk);
    const allSampleDurations = trackData.currentChunk.samples.map((x)=>x.timescaleUnitsToNextSample);
    const allSampleSizes = trackData.currentChunk.samples.map((x)=>x.size);
    const allSampleFlags = trackData.currentChunk.samples.map(fragmentSampleFlags);
    const allSampleCompositionTimeOffsets = trackData.currentChunk.samples.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intoTimescale"])(x.timestamp - x.decodeTimestamp, trackData.timescale));
    const uniqueSampleDurations = new Set(allSampleDurations);
    const uniqueSampleSizes = new Set(allSampleSizes);
    const uniqueSampleFlags = new Set(allSampleFlags);
    const uniqueSampleCompositionTimeOffsets = new Set(allSampleCompositionTimeOffsets);
    const firstSampleFlagsPresent = uniqueSampleFlags.size === 2 && allSampleFlags[0] !== allSampleFlags[1];
    const sampleDurationPresent = uniqueSampleDurations.size > 1;
    const sampleSizePresent = uniqueSampleSizes.size > 1;
    const sampleFlagsPresent = !firstSampleFlagsPresent && uniqueSampleFlags.size > 1;
    const sampleCompositionTimeOffsetsPresent = uniqueSampleCompositionTimeOffsets.size > 1 || [
        ...uniqueSampleCompositionTimeOffsets
    ].some((x)=>x !== 0);
    let flags = 0;
    flags |= 0x0001; // Data offset present
    flags |= 0x0004 * +firstSampleFlagsPresent; // First sample flags present
    flags |= 0x0100 * +sampleDurationPresent; // Sample duration present
    flags |= 0x0200 * +sampleSizePresent; // Sample size present
    flags |= 0x0400 * +sampleFlagsPresent; // Sample flags present
    flags |= 0x0800 * +sampleCompositionTimeOffsetsPresent; // Sample composition time offsets present
    return fullBox('trun', 1, flags, [
        u32(trackData.currentChunk.samples.length),
        u32(trackData.currentChunk.offset - trackData.currentChunk.moofOffset || 0),
        firstSampleFlagsPresent ? u32(allSampleFlags[0]) : [],
        trackData.currentChunk.samples.map((_, i)=>[
                sampleDurationPresent ? u32(allSampleDurations[i]) : [],
                sampleSizePresent ? u32(allSampleSizes[i]) : [],
                sampleFlagsPresent ? u32(allSampleFlags[i]) : [],
                // Sample composition time offsets
                sampleCompositionTimeOffsetsPresent ? i32(allSampleCompositionTimeOffsets[i]) : []
            ])
    ]);
};
const mfra = (trackDatas)=>{
    return box('mfra', undefined, [
        ...trackDatas.map(tfra),
        mfro()
    ]);
};
const tfra = (trackData, trackIndex)=>{
    const version = 1; // Using this version allows us to use 64-bit time and offset values
    return fullBox('tfra', version, 0, [
        u32(trackData.track.id),
        u32(0b111111),
        u32(trackData.finalizedChunks.length),
        trackData.finalizedChunks.map((chunk)=>[
                u64((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intoTimescale"])(chunk.samples[0].timestamp, trackData.timescale)),
                u64(chunk.moofOffset),
                u32(trackIndex + 1),
                u32(1),
                u32(1)
            ])
    ]);
};
const mfro = ()=>{
    return fullBox('mfro', 0, 0, [
        // This value needs to be overwritten manually from the outside, where the actual size of the enclosing mfra box
        // is known
        u32(0)
    ]);
};
const vtte = ()=>box('vtte');
const vttc = (payload, timestamp, identifier, settings, sourceId)=>box('vttc', undefined, [
        sourceId !== null ? box('vsid', [
            i32(sourceId)
        ]) : null,
        identifier !== null ? box('iden', [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEncoder"].encode(identifier)
        ]) : null,
        timestamp !== null ? box('ctim', [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEncoder"].encode((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$subtitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSubtitleTimestamp"])(timestamp))
        ]) : null,
        settings !== null ? box('sttg', [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEncoder"].encode(settings)
        ]) : null,
        box('payl', [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEncoder"].encode(payload)
        ])
    ]);
const vtta = (notes)=>box('vtta', [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEncoder"].encode(notes)
    ]);
const VIDEO_CODEC_TO_BOX_NAME = {
    avc: 'avc1',
    hevc: 'hvc1',
    vp8: 'vp08',
    vp9: 'vp09',
    av1: 'av01'
};
const VIDEO_CODEC_TO_CONFIGURATION_BOX = {
    avc: avcC,
    hevc: hvcC,
    vp8: vpcC,
    vp9: vpcC,
    av1: av1C
};
const audioCodecToBoxName = (codec, isQuickTime)=>{
    switch(codec){
        case 'aac':
            return 'mp4a';
        case 'mp3':
            return 'mp4a';
        case 'opus':
            return 'Opus';
        case 'vorbis':
            return 'mp4a';
        case 'flac':
            return 'fLaC';
        case 'ulaw':
            return 'ulaw';
        case 'alaw':
            return 'alaw';
        case 'pcm-u8':
            return 'raw ';
        case 'pcm-s8':
            return 'sowt';
    }
    // Logic diverges here
    if (isQuickTime) {
        switch(codec){
            case 'pcm-s16':
                return 'sowt';
            case 'pcm-s16be':
                return 'twos';
            case 'pcm-s24':
                return 'in24';
            case 'pcm-s24be':
                return 'in24';
            case 'pcm-s32':
                return 'in32';
            case 'pcm-s32be':
                return 'in32';
            case 'pcm-f32':
                return 'fl32';
            case 'pcm-f32be':
                return 'fl32';
            case 'pcm-f64':
                return 'fl64';
            case 'pcm-f64be':
                return 'fl64';
        }
    } else {
        switch(codec){
            case 'pcm-s16':
                return 'ipcm';
            case 'pcm-s16be':
                return 'ipcm';
            case 'pcm-s24':
                return 'ipcm';
            case 'pcm-s24be':
                return 'ipcm';
            case 'pcm-s32':
                return 'ipcm';
            case 'pcm-s32be':
                return 'ipcm';
            case 'pcm-f32':
                return 'fpcm';
            case 'pcm-f32be':
                return 'fpcm';
            case 'pcm-f64':
                return 'fpcm';
            case 'pcm-f64be':
                return 'fpcm';
        }
    }
};
const audioCodecToConfigurationBox = (codec, isQuickTime)=>{
    switch(codec){
        case 'aac':
            return esds;
        case 'mp3':
            return esds;
        case 'opus':
            return dOps;
        case 'vorbis':
            return esds;
        case 'flac':
            return dfLa;
    }
    // Logic diverges here
    if (isQuickTime) {
        switch(codec){
            case 'pcm-s24':
                return wave;
            case 'pcm-s24be':
                return wave;
            case 'pcm-s32':
                return wave;
            case 'pcm-s32be':
                return wave;
            case 'pcm-f32':
                return wave;
            case 'pcm-f32be':
                return wave;
            case 'pcm-f64':
                return wave;
            case 'pcm-f64be':
                return wave;
        }
    } else {
        switch(codec){
            case 'pcm-s16':
                return pcmC;
            case 'pcm-s16be':
                return pcmC;
            case 'pcm-s24':
                return pcmC;
            case 'pcm-s24be':
                return pcmC;
            case 'pcm-s32':
                return pcmC;
            case 'pcm-s32be':
                return pcmC;
            case 'pcm-f32':
                return pcmC;
            case 'pcm-f32be':
                return pcmC;
            case 'pcm-f64':
                return pcmC;
            case 'pcm-f64be':
                return pcmC;
        }
    }
    return null;
};
const SUBTITLE_CODEC_TO_BOX_NAME = {
    webvtt: 'wvtt'
};
const SUBTITLE_CODEC_TO_CONFIGURATION_BOX = {
    webvtt: vttC
};
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/writer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "BufferTargetWriter": ()=>BufferTargetWriter,
    "StreamTargetWriter": ()=>StreamTargetWriter,
    "Writer": ()=>Writer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
;
class Writer {
    start() {}
    maybeTrackWrites(data) {
        if (!this.trackedWrites) {
            return;
        }
        // Handle negative relative write positions
        let pos = this.getPos();
        if (pos < this.trackedStart) {
            if (pos + data.byteLength <= this.trackedStart) {
                return;
            }
            data = data.subarray(this.trackedStart - pos);
            pos = 0;
        }
        const neededSize = pos + data.byteLength - this.trackedStart;
        let newLength = this.trackedWrites.byteLength;
        while(newLength < neededSize){
            newLength *= 2;
        }
        // Check if we need to resize the buffer
        if (newLength !== this.trackedWrites.byteLength) {
            const copy = new Uint8Array(newLength);
            copy.set(this.trackedWrites, 0);
            this.trackedWrites = copy;
        }
        this.trackedWrites.set(data, pos - this.trackedStart);
        this.trackedEnd = Math.max(this.trackedEnd, pos + data.byteLength);
    }
    startTrackingWrites() {
        this.trackedWrites = new Uint8Array(2 ** 10);
        this.trackedStart = this.getPos();
        this.trackedEnd = this.trackedStart;
    }
    stopTrackingWrites() {
        if (!this.trackedWrites) {
            throw new Error('Internal error: Can\'t get tracked writes since nothing was tracked.');
        }
        const slice = this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart);
        const result = {
            data: slice,
            start: this.trackedStart,
            end: this.trackedEnd
        };
        this.trackedWrites = null;
        return result;
    }
    constructor(){
        /** Setting this to true will cause the writer to ensure data is written in a strictly monotonic, streamable way. */ this.ensureMonotonicity = false;
        this.trackedWrites = null;
        this.trackedStart = -1;
        this.trackedEnd = -1;
    }
}
const ARRAY_BUFFER_INITIAL_SIZE = 2 ** 16;
const ARRAY_BUFFER_MAX_SIZE = 2 ** 32;
class BufferTargetWriter extends Writer {
    ensureSize(size) {
        let newLength = this.buffer.byteLength;
        while(newLength < size)newLength *= 2;
        if (newLength === this.buffer.byteLength) return;
        if (newLength > ARRAY_BUFFER_MAX_SIZE) {
            throw new Error("ArrayBuffer exceeded maximum size of ".concat(ARRAY_BUFFER_MAX_SIZE, " bytes. Please consider using another") + " target.");
        }
        if (this.supportsResize) {
            // Use resize if it exists
            // @ts-expect-error Don't want to bump "lib" in tsconfig
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            this.buffer.resize(newLength);
        // The Uint8Array scales automatically
        } else {
            const newBuffer = new ArrayBuffer(newLength);
            const newBytes = new Uint8Array(newBuffer);
            newBytes.set(this.bytes, 0);
            this.buffer = newBuffer;
            this.bytes = newBytes;
        }
    }
    write(data) {
        this.maybeTrackWrites(data);
        this.ensureSize(this.pos + data.byteLength);
        this.bytes.set(data, this.pos);
        this.pos += data.byteLength;
        this.maxPos = Math.max(this.maxPos, this.pos);
    }
    seek(newPos) {
        this.pos = newPos;
    }
    getPos() {
        return this.pos;
    }
    async flush() {}
    async finalize() {
        this.ensureSize(this.pos);
        this.target.buffer = this.buffer.slice(0, Math.max(this.maxPos, this.pos));
    }
    async close() {}
    getSlice(start, end) {
        return this.bytes.slice(start, end);
    }
    constructor(target){
        super();
        this.pos = 0;
        this.maxPos = 0;
        this.target = target;
        this.supportsResize = 'resize' in new ArrayBuffer(0);
        if (this.supportsResize) {
            try {
                // @ts-expect-error Don't want to bump "lib" in tsconfig
                this.buffer = new ArrayBuffer(ARRAY_BUFFER_INITIAL_SIZE, {
                    maxByteLength: ARRAY_BUFFER_MAX_SIZE
                });
            } catch (e) {
                this.buffer = new ArrayBuffer(ARRAY_BUFFER_INITIAL_SIZE);
                this.supportsResize = false;
            }
        } else {
            this.buffer = new ArrayBuffer(ARRAY_BUFFER_INITIAL_SIZE);
        }
        this.bytes = new Uint8Array(this.buffer);
    }
}
const DEFAULT_CHUNK_SIZE = 2 ** 24;
const MAX_CHUNKS_AT_ONCE = 2;
class StreamTargetWriter extends Writer {
    start() {
        this.writer = this.target._writable.getWriter();
    }
    write(data) {
        if (this.pos > this.lastWriteEnd) {
            const paddingBytesNeeded = this.pos - this.lastWriteEnd;
            this.pos = this.lastWriteEnd;
            this.write(new Uint8Array(paddingBytesNeeded));
        }
        this.maybeTrackWrites(data);
        this.sections.push({
            data: data.slice(),
            start: this.pos
        });
        this.pos += data.byteLength;
        this.lastWriteEnd = Math.max(this.lastWriteEnd, this.pos);
    }
    seek(newPos) {
        this.pos = newPos;
    }
    getPos() {
        return this.pos;
    }
    async flush() {
        if (this.pos > this.lastWriteEnd) {
            // There's a "void" between the last written byte and the next byte we're about to write. Let's pad that
            // void with zeroes explicitly.
            const paddingBytesNeeded = this.pos - this.lastWriteEnd;
            this.pos = this.lastWriteEnd;
            this.write(new Uint8Array(paddingBytesNeeded));
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.writer);
        if (this.sections.length === 0) return;
        const chunks = [];
        const sorted = [
            ...this.sections
        ].sort((a, b)=>a.start - b.start);
        chunks.push({
            start: sorted[0].start,
            size: sorted[0].data.byteLength
        });
        // Figure out how many contiguous chunks we have
        for(let i = 1; i < sorted.length; i++){
            const lastChunk = chunks[chunks.length - 1];
            const section = sorted[i];
            if (section.start <= lastChunk.start + lastChunk.size) {
                lastChunk.size = Math.max(lastChunk.size, section.start + section.data.byteLength - lastChunk.start);
            } else {
                chunks.push({
                    start: section.start,
                    size: section.data.byteLength
                });
            }
        }
        for (const chunk of chunks){
            chunk.data = new Uint8Array(chunk.size);
            // Make sure to write the data in the correct order for correct overwriting
            for (const section of this.sections){
                // Check if the section is in the chunk
                if (chunk.start <= section.start && section.start < chunk.start + chunk.size) {
                    chunk.data.set(section.data, section.start - chunk.start);
                }
            }
            if (this.writer.desiredSize !== null && this.writer.desiredSize <= 0) {
                await this.writer.ready; // Allow the writer to apply backpressure
            }
            if (this.chunked) {
                // Let's first gather the data into bigger chunks before writing it
                this.writeDataIntoChunks(chunk.data, chunk.start);
                this.tryToFlushChunks();
            } else {
                if (this.ensureMonotonicity && chunk.start !== this.lastFlushEnd) {
                    throw new Error('Internal error: Monotonicity violation.');
                }
                // Write out the data immediately
                void this.writer.write({
                    type: 'write',
                    data: chunk.data,
                    position: chunk.start
                });
                this.lastFlushEnd = chunk.start + chunk.data.byteLength;
            }
        }
        this.sections.length = 0;
    }
    writeDataIntoChunks(data, position) {
        // First, find the chunk to write the data into, or create one if none exists
        let chunkIndex = this.chunks.findIndex((x)=>x.start <= position && position < x.start + this.chunkSize);
        if (chunkIndex === -1) chunkIndex = this.createChunk(position);
        const chunk = this.chunks[chunkIndex];
        // Figure out how much to write to the chunk, and then write to the chunk
        const relativePosition = position - chunk.start;
        const toWrite = data.subarray(0, Math.min(this.chunkSize - relativePosition, data.byteLength));
        chunk.data.set(toWrite, relativePosition);
        // Create a section describing the region of data that was just written to
        const section = {
            start: relativePosition,
            end: relativePosition + toWrite.byteLength
        };
        this.insertSectionIntoChunk(chunk, section);
        // Queue chunk for flushing to target if it has been fully written to
        if (chunk.written[0].start === 0 && chunk.written[0].end === this.chunkSize) {
            chunk.shouldFlush = true;
        }
        // Make sure we don't hold too many chunks in memory at once to keep memory usage down
        if (this.chunks.length > MAX_CHUNKS_AT_ONCE) {
            // Flush all but the last chunk
            for(let i = 0; i < this.chunks.length - 1; i++){
                this.chunks[i].shouldFlush = true;
            }
            this.tryToFlushChunks();
        }
        // If the data didn't fit in one chunk, recurse with the remaining data
        if (toWrite.byteLength < data.byteLength) {
            this.writeDataIntoChunks(data.subarray(toWrite.byteLength), position + toWrite.byteLength);
        }
    }
    insertSectionIntoChunk(chunk, section) {
        let low = 0;
        let high = chunk.written.length - 1;
        let index = -1;
        // Do a binary search to find the last section with a start not larger than `section`'s start
        while(low <= high){
            const mid = Math.floor(low + (high - low + 1) / 2);
            if (chunk.written[mid].start <= section.start) {
                low = mid + 1;
                index = mid;
            } else {
                high = mid - 1;
            }
        }
        // Insert the new section
        chunk.written.splice(index + 1, 0, section);
        if (index === -1 || chunk.written[index].end < section.start) index++;
        // Merge overlapping sections
        while(index < chunk.written.length - 1 && chunk.written[index].end >= chunk.written[index + 1].start){
            chunk.written[index].end = Math.max(chunk.written[index].end, chunk.written[index + 1].end);
            chunk.written.splice(index + 1, 1);
        }
    }
    createChunk(includesPosition) {
        const start = Math.floor(includesPosition / this.chunkSize) * this.chunkSize;
        const chunk = {
            start,
            data: new Uint8Array(this.chunkSize),
            written: [],
            shouldFlush: false
        };
        this.chunks.push(chunk);
        this.chunks.sort((a, b)=>a.start - b.start);
        return this.chunks.indexOf(chunk);
    }
    tryToFlushChunks() {
        let force = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.writer);
        for(let i = 0; i < this.chunks.length; i++){
            const chunk = this.chunks[i];
            if (!chunk.shouldFlush && !force) continue;
            for (const section of chunk.written){
                const position = chunk.start + section.start;
                if (this.ensureMonotonicity && position !== this.lastFlushEnd) {
                    throw new Error('Internal error: Monotonicity violation.');
                }
                void this.writer.write({
                    type: 'write',
                    data: chunk.data.subarray(section.start, section.end),
                    position
                });
                this.lastFlushEnd = chunk.start + section.end;
            }
            this.chunks.splice(i--, 1);
        }
    }
    finalize() {
        if (this.chunked) {
            this.tryToFlushChunks(true);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.writer);
        return this.writer.close();
    }
    async close() {
        var _this_writer;
        return (_this_writer = this.writer) === null || _this_writer === void 0 ? void 0 : _this_writer.close();
    }
    constructor(target){
        super();
        this.pos = 0;
        this.sections = [];
        this.lastWriteEnd = 0;
        this.lastFlushEnd = 0;
        this.writer = null;
        /**
         * The data is divided up into fixed-size chunks, whose contents are first filled in RAM and then flushed out.
         * A chunk is flushed if all of its contents have been written.
         */ this.chunks = [];
        this.target = target;
        var _target__options_chunked;
        this.chunked = (_target__options_chunked = target._options.chunked) !== null && _target__options_chunked !== void 0 ? _target__options_chunked : false;
        var _target__options_chunkSize;
        this.chunkSize = (_target__options_chunkSize = target._options.chunkSize) !== null && _target__options_chunkSize !== void 0 ? _target__options_chunkSize : DEFAULT_CHUNK_SIZE;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/target.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "BufferTarget": ()=>BufferTarget,
    "StreamTarget": ()=>StreamTarget,
    "Target": ()=>Target
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$writer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/writer.js [app-client] (ecmascript)");
;
class Target {
    constructor(){
        /** @internal */ this._output = null;
    }
}
class BufferTarget extends Target {
    /** @internal */ _createWriter() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$writer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferTargetWriter"](this);
    }
    constructor(){
        super(...arguments);
        /** Stores the final output buffer. Until the output is finalized, this will be null. */ this.buffer = null;
    }
}
class StreamTarget extends Target {
    /** @internal */ _createWriter() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$writer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamTargetWriter"](this);
    }
    constructor(writable, options = {}){
        super();
        if (!(writable instanceof WritableStream)) {
            throw new TypeError('StreamTarget requires a WritableStream instance.');
        }
        if (options != null && typeof options !== 'object') {
            throw new TypeError('StreamTarget options, when provided, must be an object.');
        }
        if (options.chunked !== undefined && typeof options.chunked !== 'boolean') {
            throw new TypeError('options.chunked, when provided, must be a boolean.');
        }
        if (options.chunkSize !== undefined && (!Number.isInteger(options.chunkSize) || options.chunkSize < 1024)) {
            throw new TypeError('options.chunkSize, when provided, must be an integer and not smaller than 1024.');
        }
        this._writable = writable;
        this._options = options;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/isobmff/isobmff-muxer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "GLOBAL_TIMESCALE": ()=>GLOBAL_TIMESCALE,
    "IsobmffMuxer": ()=>IsobmffMuxer,
    "intoTimescale": ()=>intoTimescale
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/isobmff/isobmff-boxes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/muxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$writer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/writer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$output$2d$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/output-format.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$subtitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/subtitles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/target.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec-data.js [app-client] (ecmascript)");
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
;
;
const GLOBAL_TIMESCALE = 1000;
const TIMESTAMP_OFFSET = 2_082_844_800; // Seconds between Jan 1 1904 and Jan 1 1970
const intoTimescale = function(timeInSeconds, timescale) {
    let round = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const value = timeInSeconds * timescale;
    return round ? Math.round(value) : value;
};
class IsobmffMuxer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Muxer"] {
    async start() {
        const release = await this.mutex.acquire();
        const holdsAvc = this.output._tracks.some((x)=>x.type === 'video' && x.source._codec === 'avc');
        // Write the header
        {
            if (this.format._options.onFtyp) {
                this.writer.startTrackingWrites();
            }
            this.boxWriter.writeBox((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ftyp"])({
                isQuickTime: this.isQuickTime,
                holdsAvc: holdsAvc,
                fragmented: this.isFragmented
            }));
            if (this.format._options.onFtyp) {
                const { data, start } = this.writer.stopTrackingWrites();
                this.format._options.onFtyp(data, start);
            }
        }
        if (this.fastStart === 'in-memory') {
            this.mdat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdat"])(false);
        } else if (this.isFragmented) {
        // We write the moov box once we write out the first fragment to make sure we get the decoder configs
        } else {
            if (this.format._options.onMdat) {
                this.writer.startTrackingWrites();
            }
            this.mdat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdat"])(true); // Reserve large size by default, can refine this when finalizing.
            this.boxWriter.writeBox(this.mdat);
        }
        await this.writer.flush();
        release();
    }
    allTracksAreKnown() {
        for (const track of this.output._tracks){
            if (!track.source._closed && !this.trackDatas.some((x)=>x.track === track)) {
                return false; // We haven't seen a sample from this open track yet
            }
        }
        return true;
    }
    async getMimeType() {
        await this.allTracksKnown.promise;
        const codecStrings = this.trackDatas.map((trackData)=>{
            if (trackData.type === 'video') {
                return trackData.info.decoderConfig.codec;
            } else if (trackData.type === 'audio') {
                return trackData.info.decoderConfig.codec;
            } else {
                const map = {
                    webvtt: 'wvtt'
                };
                return map[trackData.track.source._codec];
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildIsobmffMimeType"])({
            isQuickTime: this.isQuickTime,
            hasVideo: this.trackDatas.some((x)=>x.type === 'video'),
            hasAudio: this.trackDatas.some((x)=>x.type === 'audio'),
            codecStrings
        });
    }
    getVideoTrackData(track, packet, meta) {
        const existingTrackData = this.trackDatas.find((x)=>x.track === track);
        if (existingTrackData) {
            return existingTrackData;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateVideoChunkMetadata"])(meta);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta.decoderConfig);
        const decoderConfig = {
            ...meta.decoderConfig
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(decoderConfig.codedWidth !== undefined);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(decoderConfig.codedHeight !== undefined);
        let requiresAnnexBTransformation = false;
        if (track.source._codec === 'avc' && !decoderConfig.description) {
            // ISOBMFF can only hold AVC in the AVCC format, not in Annex B, but the missing description indicates
            // Annex B. This means we'll need to do some converterino.
            const decoderConfigurationRecord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractAvcDecoderConfigurationRecord"])(packet.data);
            if (!decoderConfigurationRecord) {
                throw new Error('Couldn\'t extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are' + ' in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or' + ' provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15)' + ' and ensure the packets are in AVCC format.');
            }
            decoderConfig.description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAvcDecoderConfigurationRecord"])(decoderConfigurationRecord);
            requiresAnnexBTransformation = true;
        } else if (track.source._codec === 'hevc' && !decoderConfig.description) {
            // ISOBMFF can only hold HEVC in the HEVC format, not in Annex B, but the missing description indicates
            // Annex B. This means we'll need to do some converterino.
            const decoderConfigurationRecord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractHevcDecoderConfigurationRecord"])(packet.data);
            if (!decoderConfigurationRecord) {
                throw new Error('Couldn\'t extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets' + ' are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or' + ' provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15)' + ' and ensure the packets are in HEVC format.');
            }
            decoderConfig.description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeHevcDecoderConfigurationRecord"])(decoderConfigurationRecord);
            requiresAnnexBTransformation = true;
        }
        var _track_metadata_frameRate;
        // The frame rate set by the user may not be an integer. Since timescale is an integer, we'll approximate the
        // frame time (inverse of frame rate) with a rational number, then use that approximation's denominator
        // as the timescale.
        const timescale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeRationalApproximation"])(1 / ((_track_metadata_frameRate = track.metadata.frameRate) !== null && _track_metadata_frameRate !== void 0 ? _track_metadata_frameRate : 57600), 1e6).denominator;
        const newTrackData = {
            muxer: this,
            track,
            type: 'video',
            info: {
                width: decoderConfig.codedWidth,
                height: decoderConfig.codedHeight,
                decoderConfig: decoderConfig,
                requiresAnnexBTransformation
            },
            timescale,
            samples: [],
            sampleQueue: [],
            timestampProcessingQueue: [],
            timeToSampleTable: [],
            compositionTimeOffsetTable: [],
            lastTimescaleUnits: null,
            lastSample: null,
            finalizedChunks: [],
            currentChunk: null,
            compactlyCodedChunkTable: []
        };
        this.trackDatas.push(newTrackData);
        this.trackDatas.sort((a, b)=>a.track.id - b.track.id);
        if (this.allTracksAreKnown()) {
            this.allTracksKnown.resolve();
        }
        return newTrackData;
    }
    getAudioTrackData(track, meta) {
        const existingTrackData = this.trackDatas.find((x)=>x.track === track);
        if (existingTrackData) {
            return existingTrackData;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAudioChunkMetadata"])(meta);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta.decoderConfig);
        const newTrackData = {
            muxer: this,
            track,
            type: 'audio',
            info: {
                numberOfChannels: meta.decoderConfig.numberOfChannels,
                sampleRate: meta.decoderConfig.sampleRate,
                decoderConfig: meta.decoderConfig,
                requiresPcmTransformation: !this.isFragmented && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCM_AUDIO_CODECS"].includes(track.source._codec)
            },
            timescale: meta.decoderConfig.sampleRate,
            samples: [],
            sampleQueue: [],
            timestampProcessingQueue: [],
            timeToSampleTable: [],
            compositionTimeOffsetTable: [],
            lastTimescaleUnits: null,
            lastSample: null,
            finalizedChunks: [],
            currentChunk: null,
            compactlyCodedChunkTable: []
        };
        this.trackDatas.push(newTrackData);
        this.trackDatas.sort((a, b)=>a.track.id - b.track.id);
        if (this.allTracksAreKnown()) {
            this.allTracksKnown.resolve();
        }
        return newTrackData;
    }
    getSubtitleTrackData(track, meta) {
        const existingTrackData = this.trackDatas.find((x)=>x.track === track);
        if (existingTrackData) {
            return existingTrackData;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSubtitleMetadata"])(meta);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta.config);
        const newTrackData = {
            muxer: this,
            track,
            type: 'subtitle',
            info: {
                config: meta.config
            },
            timescale: 1000,
            samples: [],
            sampleQueue: [],
            timestampProcessingQueue: [],
            timeToSampleTable: [],
            compositionTimeOffsetTable: [],
            lastTimescaleUnits: null,
            lastSample: null,
            finalizedChunks: [],
            currentChunk: null,
            compactlyCodedChunkTable: [],
            lastCueEndTimestamp: 0,
            cueQueue: [],
            nextSourceId: 0,
            cueToSourceId: new WeakMap()
        };
        this.trackDatas.push(newTrackData);
        this.trackDatas.sort((a, b)=>a.track.id - b.track.id);
        if (this.allTracksAreKnown()) {
            this.allTracksKnown.resolve();
        }
        return newTrackData;
    }
    async addEncodedVideoPacket(track, packet, meta) {
        const release = await this.mutex.acquire();
        try {
            const trackData = this.getVideoTrackData(track, packet, meta);
            let packetData = packet.data;
            if (trackData.info.requiresAnnexBTransformation) {
                const transformedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformAnnexBToLengthPrefixed"])(packetData);
                if (!transformedData) {
                    throw new Error('Failed to transform packet data. Make sure all packets are provided in Annex B format, as' + ' specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.');
                }
                packetData = transformedData;
            }
            const timestamp = this.validateAndNormalizeTimestamp(trackData.track, packet.timestamp, packet.type === 'key');
            const internalSample = this.createSampleForTrack(trackData, packetData, timestamp, packet.duration, packet.type);
            await this.registerSample(trackData, internalSample);
        } finally{
            release();
        }
    }
    async addEncodedAudioPacket(track, packet, meta) {
        const release = await this.mutex.acquire();
        try {
            const trackData = this.getAudioTrackData(track, meta);
            const timestamp = this.validateAndNormalizeTimestamp(trackData.track, packet.timestamp, packet.type === 'key');
            const internalSample = this.createSampleForTrack(trackData, packet.data, timestamp, packet.duration, packet.type);
            if (trackData.info.requiresPcmTransformation) {
                await this.maybePadWithSilence(trackData, timestamp);
            }
            await this.registerSample(trackData, internalSample);
        } finally{
            release();
        }
    }
    async maybePadWithSilence(trackData, untilTimestamp) {
        // The PCM transformation assumes that all samples are contiguous. This is not something that is enforced, so
        // we need to pad the "holes" in between samples (and before the first sample) with additional
        // "silence samples".
        const lastSample = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(trackData.samples);
        const lastEndTimestamp = lastSample ? lastSample.timestamp + lastSample.duration : 0;
        const delta = untilTimestamp - lastEndTimestamp;
        const deltaInTimescale = intoTimescale(delta, trackData.timescale);
        if (deltaInTimescale > 0) {
            const { sampleSize, silentValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePcmCodec"])(trackData.info.decoderConfig.codec);
            const samplesNeeded = deltaInTimescale * trackData.info.numberOfChannels;
            const data = new Uint8Array(sampleSize * samplesNeeded).fill(silentValue);
            const paddingSample = this.createSampleForTrack(trackData, new Uint8Array(data.buffer), lastEndTimestamp, delta, 'key');
            await this.registerSample(trackData, paddingSample);
        }
    }
    async addSubtitleCue(track, cue, meta) {
        const release = await this.mutex.acquire();
        try {
            const trackData = this.getSubtitleTrackData(track, meta);
            this.validateAndNormalizeTimestamp(trackData.track, cue.timestamp, true);
            if (track.source._codec === 'webvtt') {
                trackData.cueQueue.push(cue);
                await this.processWebVTTCues(trackData, cue.timestamp);
            } else {
            // TODO
            }
        } finally{
            release();
        }
    }
    async processWebVTTCues(trackData, until) {
        // WebVTT cues need to undergo special processing as empty sections need to be padded out with samples, and
        // overlapping samples require special logic. The algorithm produces the format specified in ISO 14496-30.
        while(trackData.cueQueue.length > 0){
            const timestamps = new Set([]);
            for (const cue of trackData.cueQueue){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(cue.timestamp <= until);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(trackData.lastCueEndTimestamp <= cue.timestamp + cue.duration);
                timestamps.add(Math.max(cue.timestamp, trackData.lastCueEndTimestamp)); // Start timestamp
                timestamps.add(cue.timestamp + cue.duration); // End timestamp
            }
            const sortedTimestamps = [
                ...timestamps
            ].sort((a, b)=>a - b);
            // These are the timestamps of the next sample we'll create:
            const sampleStart = sortedTimestamps[0];
            var _sortedTimestamps_;
            const sampleEnd = (_sortedTimestamps_ = sortedTimestamps[1]) !== null && _sortedTimestamps_ !== void 0 ? _sortedTimestamps_ : sampleStart;
            if (until < sampleEnd) {
                break;
            }
            // We may need to pad out empty space with an vtte box
            if (trackData.lastCueEndTimestamp < sampleStart) {
                this.auxWriter.seek(0);
                const box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vtte"])();
                this.auxBoxWriter.writeBox(box);
                const body = this.auxWriter.getSlice(0, this.auxWriter.getPos());
                const sample = this.createSampleForTrack(trackData, body, trackData.lastCueEndTimestamp, sampleStart - trackData.lastCueEndTimestamp, 'key');
                await this.registerSample(trackData, sample);
                trackData.lastCueEndTimestamp = sampleStart;
            }
            this.auxWriter.seek(0);
            for(let i = 0; i < trackData.cueQueue.length; i++){
                const cue = trackData.cueQueue[i];
                if (cue.timestamp >= sampleEnd) {
                    break;
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$subtitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineTimestampRegex"].lastIndex = 0;
                const containsTimestamp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$subtitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineTimestampRegex"].test(cue.text);
                const endTimestamp = cue.timestamp + cue.duration;
                let sourceId = trackData.cueToSourceId.get(cue);
                if (sourceId === undefined && sampleEnd < endTimestamp) {
                    // We know this cue will appear in more than one sample, therefore we need to mark it with a
                    // unique ID
                    sourceId = trackData.nextSourceId++;
                    trackData.cueToSourceId.set(cue, sourceId);
                }
                if (cue.notes) {
                    // Any notes/comments are included in a special vtta box
                    const box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vtta"])(cue.notes);
                    this.auxBoxWriter.writeBox(box);
                }
                var _cue_identifier, _cue_settings;
                const box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vttc"])(cue.text, containsTimestamp ? sampleStart : null, (_cue_identifier = cue.identifier) !== null && _cue_identifier !== void 0 ? _cue_identifier : null, (_cue_settings = cue.settings) !== null && _cue_settings !== void 0 ? _cue_settings : null, sourceId !== null && sourceId !== void 0 ? sourceId : null);
                this.auxBoxWriter.writeBox(box);
                if (endTimestamp === sampleEnd) {
                    // The cue won't appear in any future sample, so we're done with it
                    trackData.cueQueue.splice(i--, 1);
                }
            }
            const body = this.auxWriter.getSlice(0, this.auxWriter.getPos());
            const sample = this.createSampleForTrack(trackData, body, sampleStart, sampleEnd - sampleStart, 'key');
            await this.registerSample(trackData, sample);
            trackData.lastCueEndTimestamp = sampleEnd;
        }
    }
    createSampleForTrack(trackData, data, timestamp, duration, type) {
        const sample = {
            timestamp,
            decodeTimestamp: timestamp,
            duration,
            data,
            size: data.byteLength,
            type,
            timescaleUnitsToNextSample: intoTimescale(duration, trackData.timescale)
        };
        return sample;
    }
    processTimestamps(trackData, nextSample) {
        if (trackData.timestampProcessingQueue.length === 0) {
            return;
        }
        if (trackData.type === 'audio' && trackData.info.requiresPcmTransformation) {
            let totalDuration = 0;
            // Compute the total duration in the track timescale (which is equal to the amount of PCM audio samples)
            // and simply say that's how many new samples there are.
            for(let i = 0; i < trackData.timestampProcessingQueue.length; i++){
                const sample = trackData.timestampProcessingQueue[i];
                const duration = intoTimescale(sample.duration, trackData.timescale);
                totalDuration += duration;
            }
            if (trackData.timeToSampleTable.length === 0) {
                trackData.timeToSampleTable.push({
                    sampleCount: totalDuration,
                    sampleDelta: 1
                });
            } else {
                const lastEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(trackData.timeToSampleTable);
                lastEntry.sampleCount += totalDuration;
            }
            trackData.timestampProcessingQueue.length = 0;
            return;
        }
        const sortedTimestamps = trackData.timestampProcessingQueue.map((x)=>x.timestamp).sort((a, b)=>a - b);
        for(let i = 0; i < trackData.timestampProcessingQueue.length; i++){
            const sample = trackData.timestampProcessingQueue[i];
            // Since the user only supplies presentation time, but these may be out of order, we reverse-engineer from
            // that a sensible decode timestamp. The notion of a decode timestamp doesn't really make sense
            // (presentation timestamp & decode order are all you need), but it is a concept in ISOBMFF so we need to
            // model it.
            sample.decodeTimestamp = sortedTimestamps[i];
            if (!this.isFragmented && trackData.lastTimescaleUnits === null) {
                // In non-fragmented files, the first decode timestamp is always zero. If the first presentation
                // timestamp isn't zero, we'll simply use the composition time offset to achieve it.
                sample.decodeTimestamp = 0;
            }
            const sampleCompositionTimeOffset = intoTimescale(sample.timestamp - sample.decodeTimestamp, trackData.timescale);
            const durationInTimescale = intoTimescale(sample.duration, trackData.timescale);
            if (trackData.lastTimescaleUnits !== null) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(trackData.lastSample);
                const timescaleUnits = intoTimescale(sample.decodeTimestamp, trackData.timescale, false);
                const delta = Math.round(timescaleUnits - trackData.lastTimescaleUnits);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(delta >= 0);
                trackData.lastTimescaleUnits += delta;
                trackData.lastSample.timescaleUnitsToNextSample = delta;
                if (!this.isFragmented) {
                    let lastTableEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(trackData.timeToSampleTable);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(lastTableEntry);
                    if (lastTableEntry.sampleCount === 1) {
                        lastTableEntry.sampleDelta = delta;
                        const entryBefore = trackData.timeToSampleTable[trackData.timeToSampleTable.length - 2];
                        if (entryBefore && entryBefore.sampleDelta === delta) {
                            // If the delta is the same as the previous one, merge the two entries
                            entryBefore.sampleCount++;
                            trackData.timeToSampleTable.pop();
                            lastTableEntry = entryBefore;
                        }
                    } else if (lastTableEntry.sampleDelta !== delta) {
                        // The delta has changed, so we need a new entry to reach the current sample
                        lastTableEntry.sampleCount--;
                        trackData.timeToSampleTable.push(lastTableEntry = {
                            sampleCount: 1,
                            sampleDelta: delta
                        });
                    }
                    if (lastTableEntry.sampleDelta === durationInTimescale) {
                        // The sample's duration matches the delta, so we can increment the count
                        lastTableEntry.sampleCount++;
                    } else {
                        // Add a new entry in order to maintain the last sample's true duration
                        trackData.timeToSampleTable.push({
                            sampleCount: 1,
                            sampleDelta: durationInTimescale
                        });
                    }
                    const lastCompositionTimeOffsetTableEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(trackData.compositionTimeOffsetTable);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(lastCompositionTimeOffsetTableEntry);
                    if (lastCompositionTimeOffsetTableEntry.sampleCompositionTimeOffset === sampleCompositionTimeOffset) {
                        // Simply increment the count
                        lastCompositionTimeOffsetTableEntry.sampleCount++;
                    } else {
                        // The composition time offset has changed, so create a new entry with the new composition time
                        // offset
                        trackData.compositionTimeOffsetTable.push({
                            sampleCount: 1,
                            sampleCompositionTimeOffset: sampleCompositionTimeOffset
                        });
                    }
                }
            } else {
                // Decode timestamp of the first sample
                trackData.lastTimescaleUnits = intoTimescale(sample.decodeTimestamp, trackData.timescale, false);
                if (!this.isFragmented) {
                    trackData.timeToSampleTable.push({
                        sampleCount: 1,
                        sampleDelta: durationInTimescale
                    });
                    trackData.compositionTimeOffsetTable.push({
                        sampleCount: 1,
                        sampleCompositionTimeOffset: sampleCompositionTimeOffset
                    });
                }
            }
            trackData.lastSample = sample;
        }
        trackData.timestampProcessingQueue.length = 0;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(trackData.lastSample);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(trackData.lastTimescaleUnits !== null);
        if (nextSample !== undefined && trackData.lastSample.timescaleUnitsToNextSample === 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(nextSample.type === 'key');
            // Given the next sample, we can make a guess about the duration of the last sample. This avoids having
            // the last sample's duration in each fragment be "0" for fragmented files. The guess we make here is
            // actually correct most of the time, since typically, no delta frame with a lower timestamp follows the key
            // frame (although it can happen).
            const timescaleUnits = intoTimescale(nextSample.timestamp, trackData.timescale, false);
            const delta = Math.round(timescaleUnits - trackData.lastTimescaleUnits);
            trackData.lastSample.timescaleUnitsToNextSample = delta;
        }
    }
    async registerSample(trackData, sample) {
        if (sample.type === 'key') {
            this.processTimestamps(trackData, sample);
        }
        trackData.timestampProcessingQueue.push(sample);
        if (this.isFragmented) {
            trackData.sampleQueue.push(sample);
            await this.interleaveSamples();
        } else {
            await this.addSampleToTrack(trackData, sample);
        }
    }
    async addSampleToTrack(trackData, sample) {
        if (!this.isFragmented) {
            trackData.samples.push(sample);
        }
        let beginNewChunk = false;
        if (!trackData.currentChunk) {
            beginNewChunk = true;
        } else {
            // Timestamp don't need to be monotonic (think B-frames), so we may need to update the start timestamp of
            // the chunk
            trackData.currentChunk.startTimestamp = Math.min(trackData.currentChunk.startTimestamp, sample.timestamp);
            const currentChunkDuration = sample.timestamp - trackData.currentChunk.startTimestamp;
            if (this.isFragmented) {
                // We can only finalize this fragment (and begin a new one) if we know that each track will be able to
                // start the new one with a key frame.
                const keyFrameQueuedEverywhere = this.trackDatas.every((otherTrackData)=>{
                    if (trackData === otherTrackData) {
                        return sample.type === 'key';
                    }
                    const firstQueuedSample = otherTrackData.sampleQueue[0];
                    if (firstQueuedSample) {
                        return firstQueuedSample.type === 'key';
                    }
                    return otherTrackData.track.source._closed;
                });
                if (currentChunkDuration >= this.minimumFragmentDuration && keyFrameQueuedEverywhere && sample.timestamp > this.maxWrittenTimestamp) {
                    beginNewChunk = true;
                    await this.finalizeFragment();
                }
            } else {
                beginNewChunk = currentChunkDuration >= 0.5; // Chunk is long enough, we need a new one
            }
        }
        if (beginNewChunk) {
            if (trackData.currentChunk) {
                await this.finalizeCurrentChunk(trackData);
            }
            trackData.currentChunk = {
                startTimestamp: sample.timestamp,
                samples: [],
                offset: null,
                moofOffset: null
            };
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(trackData.currentChunk);
        trackData.currentChunk.samples.push(sample);
        if (this.isFragmented) {
            this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, sample.timestamp);
        }
    }
    async finalizeCurrentChunk(trackData) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!this.isFragmented);
        if (!trackData.currentChunk) return;
        trackData.finalizedChunks.push(trackData.currentChunk);
        this.finalizedChunks.push(trackData.currentChunk);
        let sampleCount = trackData.currentChunk.samples.length;
        if (trackData.type === 'audio' && trackData.info.requiresPcmTransformation) {
            sampleCount = trackData.currentChunk.samples.reduce((acc, sample)=>acc + intoTimescale(sample.duration, trackData.timescale), 0);
        }
        if (trackData.compactlyCodedChunkTable.length === 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["last"])(trackData.compactlyCodedChunkTable).samplesPerChunk !== sampleCount) {
            trackData.compactlyCodedChunkTable.push({
                firstChunk: trackData.finalizedChunks.length,
                samplesPerChunk: sampleCount
            });
        }
        if (this.fastStart === 'in-memory') {
            trackData.currentChunk.offset = 0; // We'll compute the proper offset when finalizing
            return;
        }
        // Write out the data
        trackData.currentChunk.offset = this.writer.getPos();
        for (const sample of trackData.currentChunk.samples){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(sample.data);
            this.writer.write(sample.data);
            sample.data = null; // Can be GC'd
        }
        await this.writer.flush();
    }
    async interleaveSamples() {
        let isFinalCall = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.isFragmented);
        if (!isFinalCall) {
            if (!this.allTracksAreKnown()) {
                return; // We can't interleave yet as we don't yet know how many tracks we'll truly have
            }
        }
        outer: while(true){
            let trackWithMinTimestamp = null;
            let minTimestamp = Infinity;
            for (const trackData of this.trackDatas){
                if (!isFinalCall && trackData.sampleQueue.length === 0 && !trackData.track.source._closed) {
                    break outer;
                }
                if (trackData.sampleQueue.length > 0 && trackData.sampleQueue[0].timestamp < minTimestamp) {
                    trackWithMinTimestamp = trackData;
                    minTimestamp = trackData.sampleQueue[0].timestamp;
                }
            }
            if (!trackWithMinTimestamp) {
                break;
            }
            const sample = trackWithMinTimestamp.sampleQueue.shift();
            await this.addSampleToTrack(trackWithMinTimestamp, sample);
        }
    }
    async finalizeFragment() {
        let flushWriter = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.isFragmented);
        const fragmentNumber = this.nextFragmentNumber++;
        if (fragmentNumber === 1) {
            if (this.format._options.onMoov) {
                this.writer.startTrackingWrites();
            }
            // Write the moov box now that we have all decoder configs
            const movieBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moov"])(this.trackDatas, this.creationTime, true);
            this.boxWriter.writeBox(movieBox);
            if (this.format._options.onMoov) {
                const { data, start } = this.writer.stopTrackingWrites();
                this.format._options.onMoov(data, start);
            }
        }
        // Not all tracks need to be present in every fragment
        const tracksInFragment = this.trackDatas.filter((x)=>x.currentChunk);
        // Create an initial moof box and measure it; we need this to know where the following mdat box will begin
        const moofBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moof"])(fragmentNumber, tracksInFragment);
        const moofOffset = this.writer.getPos();
        const mdatStartPos = moofOffset + this.boxWriter.measureBox(moofBox);
        let currentPos = mdatStartPos + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_BOX_HEADER_SIZE"];
        let fragmentStartTimestamp = Infinity;
        for (const trackData of tracksInFragment){
            trackData.currentChunk.offset = currentPos;
            trackData.currentChunk.moofOffset = moofOffset;
            for (const sample of trackData.currentChunk.samples){
                currentPos += sample.size;
            }
            fragmentStartTimestamp = Math.min(fragmentStartTimestamp, trackData.currentChunk.startTimestamp);
        }
        const mdatSize = currentPos - mdatStartPos;
        const needsLargeMdatSize = mdatSize >= 2 ** 32;
        if (needsLargeMdatSize) {
            // Shift all offsets by 8. Previously, all chunks were shifted assuming the large box size, but due to what
            // I suspect is a bug in WebKit, it failed in Safari (when livestreaming with MSE, not for static playback).
            for (const trackData of tracksInFragment){
                trackData.currentChunk.offset += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_BOX_HEADER_SIZE"] - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_BOX_HEADER_SIZE"];
            }
        }
        if (this.format._options.onMoof) {
            this.writer.startTrackingWrites();
        }
        const newMoofBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moof"])(fragmentNumber, tracksInFragment);
        this.boxWriter.writeBox(newMoofBox);
        if (this.format._options.onMoof) {
            const { data, start } = this.writer.stopTrackingWrites();
            this.format._options.onMoof(data, start, fragmentStartTimestamp);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.writer.getPos() === mdatStartPos);
        if (this.format._options.onMdat) {
            this.writer.startTrackingWrites();
        }
        const mdatBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mdat"])(needsLargeMdatSize);
        mdatBox.size = mdatSize;
        this.boxWriter.writeBox(mdatBox);
        this.writer.seek(mdatStartPos + (needsLargeMdatSize ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_BOX_HEADER_SIZE"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_BOX_HEADER_SIZE"]));
        // Write sample data
        for (const trackData of tracksInFragment){
            for (const sample of trackData.currentChunk.samples){
                this.writer.write(sample.data);
                sample.data = null; // Can be GC'd
            }
        }
        if (this.format._options.onMdat) {
            const { data, start } = this.writer.stopTrackingWrites();
            this.format._options.onMdat(data, start);
        }
        for (const trackData of tracksInFragment){
            trackData.finalizedChunks.push(trackData.currentChunk);
            this.finalizedChunks.push(trackData.currentChunk);
            trackData.currentChunk = null;
        }
        if (flushWriter) {
            await this.writer.flush();
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    async onTrackClose(track) {
        const release = await this.mutex.acquire();
        if (track.type === 'subtitle' && track.source._codec === 'webvtt') {
            const trackData = this.trackDatas.find((x)=>x.track === track);
            if (trackData) {
                await this.processWebVTTCues(trackData, Infinity);
            }
        }
        if (this.allTracksAreKnown()) {
            this.allTracksKnown.resolve();
        }
        if (this.isFragmented) {
            // Since a track is now closed, we may be able to write out chunks that were previously waiting
            await this.interleaveSamples();
        }
        release();
    }
    /** Finalizes the file, making it ready for use. Must be called after all video and audio chunks have been added. */ async finalize() {
        const release = await this.mutex.acquire();
        this.allTracksKnown.resolve();
        for (const trackData of this.trackDatas){
            if (trackData.type === 'subtitle' && trackData.track.source._codec === 'webvtt') {
                await this.processWebVTTCues(trackData, Infinity);
            }
        }
        if (this.isFragmented) {
            await this.interleaveSamples(true);
            for (const trackData of this.trackDatas){
                this.processTimestamps(trackData);
            }
            await this.finalizeFragment(false); // Don't flush the last fragment as we will flush it with the mfra box
        } else {
            for (const trackData of this.trackDatas){
                this.processTimestamps(trackData);
                await this.finalizeCurrentChunk(trackData);
            }
        }
        if (this.fastStart === 'in-memory') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.mdat);
            let mdatSize;
            // We know how many chunks there are, but computing the chunk positions requires an iterative approach:
            // In order to know where the first chunk should go, we first need to know the size of the moov box. But we
            // cannot write a proper moov box without first knowing all chunk positions. So, we generate a tentative
            // moov box with placeholder values (0) for the chunk offsets to be able to compute its size. If it then
            // turns out that appending all chunks exceeds 4 GiB, we need to repeat this process, now with the co64 box
            // being used in the moov box instead, which will make it larger. After that, we definitely know the final
            // size of the moov box and can compute the proper chunk positions.
            for(let i = 0; i < 2; i++){
                const movieBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moov"])(this.trackDatas, this.creationTime);
                const movieBoxSize = this.boxWriter.measureBox(movieBox);
                mdatSize = this.boxWriter.measureBox(this.mdat);
                let currentChunkPos = this.writer.getPos() + movieBoxSize + mdatSize;
                for (const chunk of this.finalizedChunks){
                    chunk.offset = currentChunkPos;
                    for (const { data } of chunk.samples){
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(data);
                        currentChunkPos += data.byteLength;
                        mdatSize += data.byteLength;
                    }
                }
                if (currentChunkPos < 2 ** 32) break;
                if (mdatSize >= 2 ** 32) this.mdat.largeSize = true;
            }
            if (this.format._options.onMoov) {
                this.writer.startTrackingWrites();
            }
            const movieBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moov"])(this.trackDatas, this.creationTime);
            this.boxWriter.writeBox(movieBox);
            if (this.format._options.onMoov) {
                const { data, start } = this.writer.stopTrackingWrites();
                this.format._options.onMoov(data, start);
            }
            if (this.format._options.onMdat) {
                this.writer.startTrackingWrites();
            }
            this.mdat.size = mdatSize;
            this.boxWriter.writeBox(this.mdat);
            for (const chunk of this.finalizedChunks){
                for (const sample of chunk.samples){
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(sample.data);
                    this.writer.write(sample.data);
                    sample.data = null;
                }
            }
            if (this.format._options.onMdat) {
                const { data, start } = this.writer.stopTrackingWrites();
                this.format._options.onMdat(data, start);
            }
        } else if (this.isFragmented) {
            // Append the mfra box to the end of the file for better random access
            const startPos = this.writer.getPos();
            const mfraBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mfra"])(this.trackDatas);
            this.boxWriter.writeBox(mfraBox);
            // Patch the 'size' field of the mfro box at the end of the mfra box now that we know its actual size
            const mfraBoxSize = this.writer.getPos() - startPos;
            this.writer.seek(this.writer.getPos() - 4);
            this.boxWriter.writeU32(mfraBoxSize);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.mdat);
            const mdatPos = this.boxWriter.offsets.get(this.mdat);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(mdatPos !== undefined);
            const mdatSize = this.writer.getPos() - mdatPos;
            this.mdat.size = mdatSize;
            this.mdat.largeSize = mdatSize >= 2 ** 32; // Only use the large size if we need it
            this.boxWriter.patchBox(this.mdat);
            if (this.format._options.onMdat) {
                const { data, start } = this.writer.stopTrackingWrites();
                this.format._options.onMdat(data, start);
            }
            if (this.format._options.onMoov) {
                this.writer.startTrackingWrites();
            }
            const movieBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moov"])(this.trackDatas, this.creationTime);
            this.boxWriter.writeBox(movieBox);
            if (this.format._options.onMoov) {
                const { data, start } = this.writer.stopTrackingWrites();
                this.format._options.onMoov(data, start);
            }
        }
        release();
    }
    constructor(output, format){
        super(output);
        this.auxTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferTarget"]();
        this.auxWriter = this.auxTarget._createWriter();
        this.auxBoxWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsobmffBoxWriter"](this.auxWriter);
        this.mdat = null;
        this.trackDatas = [];
        this.allTracksKnown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promiseWithResolvers"])();
        this.creationTime = Math.floor(Date.now() / 1000) + TIMESTAMP_OFFSET;
        this.finalizedChunks = [];
        this.nextFragmentNumber = 1;
        // Only relevant for fragmented files, to make sure new fragments start with the highest timestamp seen so far
        this.maxWrittenTimestamp = -Infinity;
        this.format = format;
        this.writer = output._writer;
        this.boxWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsobmffBoxWriter"](this.writer);
        this.isQuickTime = format instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$output$2d$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MovOutputFormat"];
        // If the fastStart option isn't defined, enable in-memory fast start if the target is an ArrayBuffer, as the
        // memory usage remains identical
        const fastStartDefault = this.writer instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$writer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferTargetWriter"] ? 'in-memory' : false;
        var _format__options_fastStart;
        this.fastStart = (_format__options_fastStart = format._options.fastStart) !== null && _format__options_fastStart !== void 0 ? _format__options_fastStart : fastStartDefault;
        this.isFragmented = this.fastStart === 'fragmented';
        if (this.fastStart === 'in-memory' || this.isFragmented) {
            this.writer.ensureMonotonicity = true;
        }
        var _format__options_minimumFragmentDuration;
        this.minimumFragmentDuration = (_format__options_minimumFragmentDuration = format._options.minimumFragmentDuration) !== null && _format__options_minimumFragmentDuration !== void 0 ? _format__options_minimumFragmentDuration : 1;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/matroska/matroska-muxer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "MatroskaMuxer": ()=>MatroskaMuxer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/matroska/ebml.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$matroska$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/matroska/matroska-misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$output$2d$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/output-format.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$subtitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/subtitles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/muxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec-data.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const MIN_CLUSTER_TIMESTAMP_MS = -(2 ** 15);
const MAX_CLUSTER_TIMESTAMP_MS = 2 ** 15 - 1;
const APP_NAME = 'https://github.com/Vanilagy/mediabunny';
const SEGMENT_SIZE_BYTES = 6;
const CLUSTER_SIZE_BYTES = 5;
const TRACK_TYPE_MAP = {
    video: 1,
    audio: 2,
    subtitle: 17
};
class MatroskaMuxer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Muxer"] {
    async start() {
        const release = await this.mutex.acquire();
        this.writeEBMLHeader();
        if (!this.format._options.appendOnly) {
            this.createSeekHead();
        }
        this.createSegmentInfo();
        this.createCues();
        await this.writer.flush();
        release();
    }
    writeEBMLHeader() {
        if (this.format._options.onEbmlHeader) {
            this.writer.startTrackingWrites();
        }
        const ebmlHeader = {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].EBML,
            data: [
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].EBMLVersion,
                    data: 1
                },
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].EBMLReadVersion,
                    data: 1
                },
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].EBMLMaxIDLength,
                    data: 4
                },
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].EBMLMaxSizeLength,
                    data: 8
                },
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].DocType,
                    data: this.format instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$output$2d$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebMOutputFormat"] ? 'webm' : 'matroska'
                },
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].DocTypeVersion,
                    data: 2
                },
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].DocTypeReadVersion,
                    data: 2
                }
            ]
        };
        this.ebmlWriter.writeEBML(ebmlHeader);
        if (this.format._options.onEbmlHeader) {
            const { data, start } = this.writer.stopTrackingWrites(); // start should be 0
            this.format._options.onEbmlHeader(data, start);
        }
    }
    /**
     * Creates a SeekHead element which is positioned near the start of the file and allows the media player to seek to
     * relevant sections more easily. Since we don't know the positions of those sections yet, we'll set them later.
     */ createSeekHead() {
        const kaxCues = new Uint8Array([
            0x1c,
            0x53,
            0xbb,
            0x6b
        ]);
        const kaxInfo = new Uint8Array([
            0x15,
            0x49,
            0xa9,
            0x66
        ]);
        const kaxTracks = new Uint8Array([
            0x16,
            0x54,
            0xae,
            0x6b
        ]);
        const seekHead = {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].SeekHead,
            data: [
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Seek,
                    data: [
                        {
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].SeekID,
                            data: kaxCues
                        },
                        {
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].SeekPosition,
                            size: 5,
                            data: 0
                        }
                    ]
                },
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Seek,
                    data: [
                        {
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].SeekID,
                            data: kaxInfo
                        },
                        {
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].SeekPosition,
                            size: 5,
                            data: 0
                        }
                    ]
                },
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Seek,
                    data: [
                        {
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].SeekID,
                            data: kaxTracks
                        },
                        {
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].SeekPosition,
                            size: 5,
                            data: 0
                        }
                    ]
                }
            ]
        };
        this.seekHead = seekHead;
    }
    createSegmentInfo() {
        const segmentDuration = {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Duration,
            data: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLFloat64"](0)
        };
        this.segmentDuration = segmentDuration;
        const segmentInfo = {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Info,
            data: [
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].TimestampScale,
                    data: 1e6
                },
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].MuxingApp,
                    data: APP_NAME
                },
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].WritingApp,
                    data: APP_NAME
                },
                !this.format._options.appendOnly ? segmentDuration : null
            ]
        };
        this.segmentInfo = segmentInfo;
    }
    createTracks() {
        const tracksElement = {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Tracks,
            data: []
        };
        this.tracksElement = tracksElement;
        for (const trackData of this.trackDatas){
            const codecId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CODEC_STRING_MAP"][trackData.track.source._codec];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(codecId);
            let seekPreRollNs = 0;
            if (trackData.type === 'audio' && trackData.track.source._codec === 'opus') {
                seekPreRollNs = 1e6 * 80; // In "Matroska ticks" (nanoseconds)
                const description = trackData.info.decoderConfig.description;
                if (description) {
                    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(description);
                    const header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseOpusIdentificationHeader"])(bytes);
                    // Use the preSkip value from the header
                    seekPreRollNs = Math.round(1e9 * (header.preSkip / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OPUS_INTERNAL_SAMPLE_RATE"]));
                }
            }
            var _trackData_track_metadata_languageCode;
            tracksElement.data.push({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].TrackEntry,
                data: [
                    {
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].TrackNumber,
                        data: trackData.track.id
                    },
                    {
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].TrackUID,
                        data: trackData.track.id
                    },
                    {
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].TrackType,
                        data: TRACK_TYPE_MAP[trackData.type]
                    },
                    {
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].FlagLacing,
                        data: 0
                    },
                    {
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Language,
                        data: (_trackData_track_metadata_languageCode = trackData.track.metadata.languageCode) !== null && _trackData_track_metadata_languageCode !== void 0 ? _trackData_track_metadata_languageCode : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNDETERMINED_LANGUAGE"]
                    },
                    {
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].CodecID,
                        data: codecId
                    },
                    {
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].CodecDelay,
                        data: 0
                    },
                    {
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].SeekPreRoll,
                        data: seekPreRollNs
                    },
                    trackData.type === 'video' ? this.videoSpecificTrackInfo(trackData) : null,
                    trackData.type === 'audio' ? this.audioSpecificTrackInfo(trackData) : null,
                    trackData.type === 'subtitle' ? this.subtitleSpecificTrackInfo(trackData) : null
                ]
            });
        }
    }
    videoSpecificTrackInfo(trackData) {
        const { frameRate, rotation } = trackData.track.metadata;
        const elements = [
            trackData.info.decoderConfig.description ? {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].CodecPrivate,
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(trackData.info.decoderConfig.description)
            } : null,
            frameRate ? {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].DefaultDuration,
                data: 1e9 / frameRate
            } : null
        ];
        // Convert from clockwise to counter-clockwise
        const flippedRotation = rotation ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeRotation"])(-rotation) : 0;
        const colorSpace = trackData.info.decoderConfig.colorSpace;
        const videoElement = {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Video,
            data: [
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].PixelWidth,
                    data: trackData.info.width
                },
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].PixelHeight,
                    data: trackData.info.height
                },
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorSpaceIsComplete"])(colorSpace) ? {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Colour,
                    data: [
                        {
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].MatrixCoefficients,
                            data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MATRIX_COEFFICIENTS_MAP"][colorSpace.matrix]
                        },
                        {
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].TransferCharacteristics,
                            data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSFER_CHARACTERISTICS_MAP"][colorSpace.transfer]
                        },
                        {
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Primaries,
                            data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_PRIMARIES_MAP"][colorSpace.primaries]
                        },
                        {
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Range,
                            data: colorSpace.fullRange ? 2 : 1
                        }
                    ]
                } : null,
                flippedRotation ? {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Projection,
                    data: [
                        {
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].ProjectionType,
                            data: 0
                        },
                        {
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].ProjectionPoseRoll,
                            data: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLFloat32"]((flippedRotation + 180) % 360 - 180)
                        }
                    ]
                } : null
            ]
        };
        elements.push(videoElement);
        return elements;
    }
    audioSpecificTrackInfo(trackData) {
        const pcmInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCM_AUDIO_CODECS"].includes(trackData.track.source._codec) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePcmCodec"])(trackData.track.source._codec) : null;
        return [
            trackData.info.decoderConfig.description ? {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].CodecPrivate,
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(trackData.info.decoderConfig.description)
            } : null,
            {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Audio,
                data: [
                    {
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].SamplingFrequency,
                        data: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLFloat32"](trackData.info.sampleRate)
                    },
                    {
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Channels,
                        data: trackData.info.numberOfChannels
                    },
                    pcmInfo ? {
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].BitDepth,
                        data: 8 * pcmInfo.sampleSize
                    } : null
                ]
            }
        ];
    }
    subtitleSpecificTrackInfo(trackData) {
        return [
            {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].CodecPrivate,
                data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEncoder"].encode(trackData.info.config.description)
            }
        ];
    }
    createSegment() {
        const segment = {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Segment,
            size: this.format._options.appendOnly ? -1 : SEGMENT_SIZE_BYTES,
            data: [
                !this.format._options.appendOnly ? this.seekHead : null,
                this.segmentInfo,
                this.tracksElement
            ]
        };
        this.segment = segment;
        if (this.format._options.onSegmentHeader) {
            this.writer.startTrackingWrites();
        }
        this.ebmlWriter.writeEBML(segment);
        if (this.format._options.onSegmentHeader) {
            const { data, start } = this.writer.stopTrackingWrites();
            this.format._options.onSegmentHeader(data, start);
        }
    }
    createCues() {
        this.cues = {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Cues,
            data: []
        };
    }
    get segmentDataOffset() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.segment);
        return this.ebmlWriter.dataOffsets.get(this.segment);
    }
    allTracksAreKnown() {
        for (const track of this.output._tracks){
            if (!track.source._closed && !this.trackDatas.some((x)=>x.track === track)) {
                return false; // We haven't seen a sample from this open track yet
            }
        }
        return true;
    }
    async getMimeType() {
        await this.allTracksKnown.promise;
        const codecStrings = this.trackDatas.map((trackData)=>{
            if (trackData.type === 'video') {
                return trackData.info.decoderConfig.codec;
            } else if (trackData.type === 'audio') {
                return trackData.info.decoderConfig.codec;
            } else {
                const map = {
                    webvtt: 'wvtt'
                };
                return map[trackData.track.source._codec];
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$matroska$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatroskaMimeType"])({
            isWebM: this.format instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$output$2d$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebMOutputFormat"],
            hasVideo: this.trackDatas.some((x)=>x.type === 'video'),
            hasAudio: this.trackDatas.some((x)=>x.type === 'audio'),
            codecStrings
        });
    }
    getVideoTrackData(track, meta) {
        const existingTrackData = this.trackDatas.find((x)=>x.track === track);
        if (existingTrackData) {
            return existingTrackData;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateVideoChunkMetadata"])(meta);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta.decoderConfig);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta.decoderConfig.codedWidth !== undefined);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta.decoderConfig.codedHeight !== undefined);
        const newTrackData = {
            track,
            type: 'video',
            info: {
                width: meta.decoderConfig.codedWidth,
                height: meta.decoderConfig.codedHeight,
                decoderConfig: meta.decoderConfig
            },
            chunkQueue: [],
            lastWrittenMsTimestamp: null
        };
        if (track.source._codec === 'vp9') {
            // https://www.webmproject.org/docs/container specifies that VP9 "SHOULD" make use of the CodecPrivate
            // field. Since WebCodecs makes no use of the description field for VP9, we need to derive it ourselves:
            newTrackData.info.decoderConfig = {
                ...newTrackData.info.decoderConfig,
                description: new Uint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateVp9CodecConfigurationFromCodecString"])(newTrackData.info.decoderConfig.codec))
            };
        } else if (track.source._codec === 'av1') {
            // Per https://github.com/ietf-wg-cellar/matroska-specification/blob/master/codec/av1.md, AV1 requires
            // CodecPrivate to be set, but WebCodecs makes no use of the description field for AV1. Thus, let's derive
            // it ourselves:
            newTrackData.info.decoderConfig = {
                ...newTrackData.info.decoderConfig,
                description: new Uint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateAv1CodecConfigurationFromCodecString"])(newTrackData.info.decoderConfig.codec))
            };
        }
        this.trackDatas.push(newTrackData);
        this.trackDatas.sort((a, b)=>a.track.id - b.track.id);
        if (this.allTracksAreKnown()) {
            this.allTracksKnown.resolve();
        }
        return newTrackData;
    }
    getAudioTrackData(track, meta) {
        const existingTrackData = this.trackDatas.find((x)=>x.track === track);
        if (existingTrackData) {
            return existingTrackData;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAudioChunkMetadata"])(meta);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta.decoderConfig);
        const newTrackData = {
            track,
            type: 'audio',
            info: {
                numberOfChannels: meta.decoderConfig.numberOfChannels,
                sampleRate: meta.decoderConfig.sampleRate,
                decoderConfig: meta.decoderConfig
            },
            chunkQueue: [],
            lastWrittenMsTimestamp: null
        };
        this.trackDatas.push(newTrackData);
        this.trackDatas.sort((a, b)=>a.track.id - b.track.id);
        if (this.allTracksAreKnown()) {
            this.allTracksKnown.resolve();
        }
        return newTrackData;
    }
    getSubtitleTrackData(track, meta) {
        const existingTrackData = this.trackDatas.find((x)=>x.track === track);
        if (existingTrackData) {
            return existingTrackData;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateSubtitleMetadata"])(meta);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta.config);
        const newTrackData = {
            track,
            type: 'subtitle',
            info: {
                config: meta.config
            },
            chunkQueue: [],
            lastWrittenMsTimestamp: null
        };
        this.trackDatas.push(newTrackData);
        this.trackDatas.sort((a, b)=>a.track.id - b.track.id);
        if (this.allTracksAreKnown()) {
            this.allTracksKnown.resolve();
        }
        return newTrackData;
    }
    async addEncodedVideoPacket(track, packet, meta) {
        const release = await this.mutex.acquire();
        try {
            const trackData = this.getVideoTrackData(track, meta);
            const isKeyFrame = packet.type === 'key';
            let timestamp = this.validateAndNormalizeTimestamp(trackData.track, packet.timestamp, isKeyFrame);
            let duration = packet.duration;
            if (track.metadata.frameRate !== undefined) {
                // Constrain the time values to the frame rate
                timestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundToMultiple"])(timestamp, 1 / track.metadata.frameRate);
                duration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundToMultiple"])(duration, 1 / track.metadata.frameRate);
            }
            const videoChunk = this.createInternalChunk(packet.data, timestamp, duration, packet.type);
            if (track.source._codec === 'vp9') this.fixVP9ColorSpace(trackData, videoChunk);
            trackData.chunkQueue.push(videoChunk);
            await this.interleaveChunks();
        } finally{
            release();
        }
    }
    async addEncodedAudioPacket(track, packet, meta) {
        const release = await this.mutex.acquire();
        try {
            const trackData = this.getAudioTrackData(track, meta);
            const isKeyFrame = packet.type === 'key';
            const timestamp = this.validateAndNormalizeTimestamp(trackData.track, packet.timestamp, isKeyFrame);
            const audioChunk = this.createInternalChunk(packet.data, timestamp, packet.duration, packet.type);
            trackData.chunkQueue.push(audioChunk);
            await this.interleaveChunks();
        } finally{
            release();
        }
    }
    async addSubtitleCue(track, cue, meta) {
        const release = await this.mutex.acquire();
        try {
            const trackData = this.getSubtitleTrackData(track, meta);
            const timestamp = this.validateAndNormalizeTimestamp(trackData.track, cue.timestamp, true);
            let bodyText = cue.text;
            const timestampMs = Math.round(timestamp * 1000);
            // Replace in-body timestamps so that they're relative to the cue start time
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$subtitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineTimestampRegex"].lastIndex = 0;
            bodyText = bodyText.replace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$subtitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inlineTimestampRegex"], (match)=>{
                const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$subtitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSubtitleTimestamp"])(match.slice(1, -1));
                const offsetTime = time - timestampMs;
                return "<".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$subtitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSubtitleTimestamp"])(offsetTime), ">");
            });
            const body = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEncoder"].encode(bodyText);
            var _cue_settings, _cue_identifier, _cue_notes;
            const additions = "".concat((_cue_settings = cue.settings) !== null && _cue_settings !== void 0 ? _cue_settings : '', "\n").concat((_cue_identifier = cue.identifier) !== null && _cue_identifier !== void 0 ? _cue_identifier : '', "\n").concat((_cue_notes = cue.notes) !== null && _cue_notes !== void 0 ? _cue_notes : '');
            const subtitleChunk = this.createInternalChunk(body, timestamp, cue.duration, 'key', additions.trim() ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textEncoder"].encode(additions) : null);
            trackData.chunkQueue.push(subtitleChunk);
            await this.interleaveChunks();
        } finally{
            release();
        }
    }
    async interleaveChunks() {
        let isFinalCall = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        if (!isFinalCall) {
            if (!this.allTracksAreKnown()) {
                return; // We can't interleave yet as we don't yet know how many tracks we'll truly have
            }
        }
        outer: while(true){
            let trackWithMinTimestamp = null;
            let minTimestamp = Infinity;
            for (const trackData of this.trackDatas){
                if (!isFinalCall && trackData.chunkQueue.length === 0 && !trackData.track.source._closed) {
                    break outer;
                }
                if (trackData.chunkQueue.length > 0 && trackData.chunkQueue[0].timestamp < minTimestamp) {
                    trackWithMinTimestamp = trackData;
                    minTimestamp = trackData.chunkQueue[0].timestamp;
                }
            }
            if (!trackWithMinTimestamp) {
                break;
            }
            const chunk = trackWithMinTimestamp.chunkQueue.shift();
            this.writeBlock(trackWithMinTimestamp, chunk);
        }
        if (!isFinalCall) {
            await this.writer.flush();
        }
    }
    /**
     * Due to [a bug in Chromium](https://bugs.chromium.org/p/chromium/issues/detail?id=1377842), VP9 streams often
     * lack color space information. This method patches in that information.
     */ fixVP9ColorSpace(trackData, chunk) {
        // http://downloads.webmproject.org/docs/vp9/vp9-bitstream_superframe-and-uncompressed-header_v1.0.pdf
        if (chunk.type !== 'key') return;
        if (!trackData.info.decoderConfig.colorSpace || !trackData.info.decoderConfig.colorSpace.matrix) return;
        const bitstream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bitstream"](chunk.data);
        bitstream.skipBits(2);
        const profileLowBit = bitstream.readBits(1);
        const profileHighBit = bitstream.readBits(1);
        const profile = (profileHighBit << 1) + profileLowBit;
        if (profile === 3) bitstream.skipBits(1);
        const showExistingFrame = bitstream.readBits(1);
        if (showExistingFrame) return;
        const frameType = bitstream.readBits(1);
        if (frameType !== 0) return; // Just to be sure
        bitstream.skipBits(2);
        const syncCode = bitstream.readBits(24);
        if (syncCode !== 0x498342) return;
        if (profile >= 2) bitstream.skipBits(1);
        const colorSpaceID = {
            rgb: 7,
            bt709: 2,
            bt470bg: 1,
            smpte170m: 3
        }[trackData.info.decoderConfig.colorSpace.matrix];
        // The bitstream position is now at the start of the color space bits.
        // We can use the global writeBits function here as requested.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBits"])(chunk.data, bitstream.pos, bitstream.pos + 3, colorSpaceID);
    }
    /** Converts a read-only external chunk into an internal one for easier use. */ createInternalChunk(data, timestamp, duration, type) {
        let additions = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null;
        const internalChunk = {
            data,
            type,
            timestamp,
            duration,
            additions
        };
        return internalChunk;
    }
    /** Writes a block containing media data to the file. */ writeBlock(trackData, chunk) {
        // Due to the interlacing algorithm, this code will be run once we've seen one chunk from every media track.
        if (!this.segment) {
            this.createTracks();
            this.createSegment();
        }
        const msTimestamp = Math.round(1000 * chunk.timestamp);
        // We wanna only finalize this cluster (and begin a new one) if we know that each track will be able to
        // start the new one with a key frame.
        const keyFrameQueuedEverywhere = this.trackDatas.every((otherTrackData)=>{
            if (trackData === otherTrackData) {
                return chunk.type === 'key';
            }
            const firstQueuedSample = otherTrackData.chunkQueue[0];
            if (firstQueuedSample) {
                return firstQueuedSample.type === 'key';
            }
            return otherTrackData.track.source._closed;
        });
        let shouldCreateNewCluster = false;
        if (!this.currentCluster) {
            shouldCreateNewCluster = true;
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.currentClusterStartMsTimestamp !== null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.currentClusterMaxMsTimestamp !== null);
            const relativeTimestamp = msTimestamp - this.currentClusterStartMsTimestamp;
            var _this_format__options_minimumClusterDuration;
            shouldCreateNewCluster = keyFrameQueuedEverywhere && msTimestamp > this.currentClusterMaxMsTimestamp && relativeTimestamp >= 1000 * ((_this_format__options_minimumClusterDuration = this.format._options.minimumClusterDuration) !== null && _this_format__options_minimumClusterDuration !== void 0 ? _this_format__options_minimumClusterDuration : 1) || relativeTimestamp > MAX_CLUSTER_TIMESTAMP_MS;
        }
        if (shouldCreateNewCluster) {
            this.createNewCluster(msTimestamp);
        }
        const relativeTimestamp = msTimestamp - this.currentClusterStartMsTimestamp;
        if (relativeTimestamp < MIN_CLUSTER_TIMESTAMP_MS) {
            // The block lies too far in the past, it's not representable within this cluster
            return;
        }
        const prelude = new Uint8Array(4);
        const view = new DataView(prelude.buffer);
        // 0x80 to indicate it's the last byte of a multi-byte number
        view.setUint8(0, 0x80 | trackData.track.id);
        view.setInt16(1, relativeTimestamp, false);
        const msDuration = Math.round(1000 * chunk.duration);
        if (msDuration === 0 && !chunk.additions) {
            // No duration or additions, we can write out a SimpleBlock
            view.setUint8(3, Number(chunk.type === 'key') << 7); // Flags (keyframe flag only present for SimpleBlock)
            const simpleBlock = {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].SimpleBlock,
                data: [
                    prelude,
                    chunk.data
                ]
            };
            this.ebmlWriter.writeEBML(simpleBlock);
        } else {
            const blockGroup = {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].BlockGroup,
                data: [
                    {
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Block,
                        data: [
                            prelude,
                            chunk.data
                        ]
                    },
                    chunk.type === 'delta' ? {
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].ReferenceBlock,
                        data: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLSignedInt"](trackData.lastWrittenMsTimestamp - msTimestamp)
                    } : null,
                    chunk.additions ? {
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].BlockAdditions,
                        data: [
                            {
                                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].BlockMore,
                                data: [
                                    {
                                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].BlockAdditional,
                                        data: chunk.additions
                                    },
                                    {
                                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].BlockAddID,
                                        data: 1
                                    }
                                ]
                            }
                        ]
                    } : null,
                    msDuration > 0 ? {
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].BlockDuration,
                        data: msDuration
                    } : null
                ]
            };
            this.ebmlWriter.writeEBML(blockGroup);
        }
        this.duration = Math.max(this.duration, msTimestamp + msDuration);
        trackData.lastWrittenMsTimestamp = msTimestamp;
        if (!this.trackDatasInCurrentCluster.has(trackData)) {
            this.trackDatasInCurrentCluster.set(trackData, {
                firstMsTimestamp: msTimestamp
            });
        }
        this.currentClusterMaxMsTimestamp = Math.max(this.currentClusterMaxMsTimestamp, msTimestamp);
    }
    /** Creates a new Cluster element to contain media chunks. */ createNewCluster(msTimestamp) {
        if (this.currentCluster) {
            this.finalizeCurrentCluster();
        }
        if (this.format._options.onCluster) {
            this.writer.startTrackingWrites();
        }
        this.currentCluster = {
            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Cluster,
            size: this.format._options.appendOnly ? -1 : CLUSTER_SIZE_BYTES,
            data: [
                {
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].Timestamp,
                    data: msTimestamp
                }
            ]
        };
        this.ebmlWriter.writeEBML(this.currentCluster);
        this.currentClusterStartMsTimestamp = msTimestamp;
        this.currentClusterMaxMsTimestamp = msTimestamp;
        this.trackDatasInCurrentCluster.clear();
    }
    finalizeCurrentCluster() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.currentCluster);
        if (!this.format._options.appendOnly) {
            const clusterSize = this.writer.getPos() - this.ebmlWriter.dataOffsets.get(this.currentCluster);
            const endPos = this.writer.getPos();
            // Write the size now that we know it
            this.writer.seek(this.ebmlWriter.offsets.get(this.currentCluster) + 4);
            this.ebmlWriter.writeVarInt(clusterSize, CLUSTER_SIZE_BYTES);
            this.writer.seek(endPos);
        }
        if (this.format._options.onCluster) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.currentClusterStartMsTimestamp !== null);
            const { data, start } = this.writer.stopTrackingWrites();
            this.format._options.onCluster(data, start, this.currentClusterStartMsTimestamp / 1000);
        }
        const clusterOffsetFromSegment = this.ebmlWriter.offsets.get(this.currentCluster) - this.segmentDataOffset;
        // Group tracks by their first timestamp and create a CuePoint for each unique timestamp
        const groupedByTimestamp = new Map();
        for (const [trackData, { firstMsTimestamp }] of this.trackDatasInCurrentCluster){
            if (!groupedByTimestamp.has(firstMsTimestamp)) {
                groupedByTimestamp.set(firstMsTimestamp, []);
            }
            groupedByTimestamp.get(firstMsTimestamp).push(trackData);
        }
        const groupedAndSortedByTimestamp = [
            ...groupedByTimestamp.entries()
        ].sort((a, b)=>a[0] - b[0]);
        // Add CuePoints to the Cues element for better seeking
        for (const [msTimestamp, trackDatas] of groupedAndSortedByTimestamp){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.cues);
            this.cues.data.push({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].CuePoint,
                data: [
                    {
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].CueTime,
                        data: msTimestamp
                    },
                    // Create CueTrackPositions for each track that starts at this timestamp
                    ...trackDatas.map((trackData)=>{
                        return {
                            id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].CueTrackPositions,
                            data: [
                                {
                                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].CueTrack,
                                    data: trackData.track.id
                                },
                                {
                                    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLId"].CueClusterPosition,
                                    data: clusterOffsetFromSegment
                                }
                            ]
                        };
                    })
                ]
            });
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    async onTrackClose() {
        const release = await this.mutex.acquire();
        if (this.allTracksAreKnown()) {
            this.allTracksKnown.resolve();
        }
        // Since a track is now closed, we may be able to write out chunks that were previously waiting
        await this.interleaveChunks();
        release();
    }
    /** Finalizes the file, making it ready for use. Must be called after all media chunks have been added. */ async finalize() {
        const release = await this.mutex.acquire();
        this.allTracksKnown.resolve();
        if (!this.segment) {
            this.createTracks();
            this.createSegment();
        }
        // Flush any remaining queued chunks to the file
        await this.interleaveChunks(true);
        if (this.currentCluster) {
            this.finalizeCurrentCluster();
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.cues);
        this.ebmlWriter.writeEBML(this.cues);
        if (!this.format._options.appendOnly) {
            const endPos = this.writer.getPos();
            // Write the Segment size
            const segmentSize = this.writer.getPos() - this.segmentDataOffset;
            this.writer.seek(this.ebmlWriter.offsets.get(this.segment) + 4);
            this.ebmlWriter.writeVarInt(segmentSize, SEGMENT_SIZE_BYTES);
            // Write the duration of the media to the Segment
            this.segmentDuration.data = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLFloat64"](this.duration);
            this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration));
            this.ebmlWriter.writeEBML(this.segmentDuration);
            // Fill in SeekHead position data and write it again
            this.seekHead.data[0].data[1].data = this.ebmlWriter.offsets.get(this.cues) - this.segmentDataOffset;
            this.seekHead.data[1].data[1].data = this.ebmlWriter.offsets.get(this.segmentInfo) - this.segmentDataOffset;
            this.seekHead.data[2].data[1].data = this.ebmlWriter.offsets.get(this.tracksElement) - this.segmentDataOffset;
            this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead));
            this.ebmlWriter.writeEBML(this.seekHead);
            this.writer.seek(endPos);
        }
        release();
    }
    constructor(output, format){
        super(output);
        this.trackDatas = [];
        this.allTracksKnown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promiseWithResolvers"])();
        this.segment = null;
        this.segmentInfo = null;
        this.seekHead = null;
        this.tracksElement = null;
        this.segmentDuration = null;
        this.cues = null;
        this.currentCluster = null;
        this.currentClusterStartMsTimestamp = null;
        this.currentClusterMaxMsTimestamp = null;
        this.trackDatasInCurrentCluster = new Map();
        this.duration = 0;
        this.writer = output._writer;
        this.format = format;
        this.ebmlWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$ebml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBMLWriter"](this.writer);
        if (this.format._options.appendOnly) {
            this.writer.ensureMonotonicity = true;
        }
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/mp3/mp3-writer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "Mp3Writer": ()=>Mp3Writer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/shared/mp3-misc.js [app-client] (ecmascript)");
;
class Mp3Writer {
    writeU32(value) {
        this.helperView.setUint32(0, value, false);
        this.writer.write(this.helper.subarray(0, 4));
    }
    writeXingFrame(data) {
        var _SAMPLING_RATES_data_mpegVersionId;
        const startPos = this.writer.getPos();
        const firstByte = 0xff;
        const secondByte = 0xe0 | data.mpegVersionId << 3 | data.layer << 1;
        const bitrateGroup = data.mpegVersionId === 3 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MPEG_V1_BITRATES"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MPEG_V2_BITRATES"];
        const bitrates = bitrateGroup === null || bitrateGroup === void 0 ? void 0 : bitrateGroup[data.layer];
        if (!bitrates) {
            throw new Error('Invalid MPEG version and layer combination.');
        }
        const sampleRate = (_SAMPLING_RATES_data_mpegVersionId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLING_RATES"][data.mpegVersionId]) === null || _SAMPLING_RATES_data_mpegVersionId === void 0 ? void 0 : _SAMPLING_RATES_data_mpegVersionId[data.frequencyIndex];
        if (!sampleRate || sampleRate === -1) {
            throw new Error('Invalid MPEG version and frequency index combination.');
        }
        const padding = 0;
        const neededBytes = 155;
        // Let's find the lowest bitrate for which the frame size is sufficiently large to fit all the data
        const bitrateIndex = bitrates.findIndex((kbr)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeMp3FrameSize"])(data.layer, 1000 * kbr, sampleRate, padding) >= neededBytes;
        });
        if (bitrateIndex === -1) {
            throw new Error('No suitable bitrate found.');
        }
        const thirdByte = bitrateIndex << 4 | data.frequencyIndex << 2 | padding << 1;
        const fourthByte = data.channel << 6 | data.modeExtension << 4 | data.copyright << 3 | data.original << 2 | data.emphasis;
        this.helper[0] = firstByte;
        this.helper[1] = secondByte;
        this.helper[2] = thirdByte;
        this.helper[3] = fourthByte;
        this.writer.write(this.helper.subarray(0, 4));
        const xingOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXingOffset"])(data.mpegVersionId, data.channel);
        this.writer.seek(startPos + xingOffset);
        this.writeU32(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XING"]);
        let flags = 0;
        if (data.frameCount !== null) {
            flags |= 1;
        }
        if (data.fileSize !== null) {
            flags |= 2;
        }
        if (data.toc !== null) {
            flags |= 4;
        }
        this.writeU32(flags);
        var _data_frameCount;
        this.writeU32((_data_frameCount = data.frameCount) !== null && _data_frameCount !== void 0 ? _data_frameCount : 0);
        var _data_fileSize;
        this.writeU32((_data_fileSize = data.fileSize) !== null && _data_fileSize !== void 0 ? _data_fileSize : 0);
        var _data_toc;
        this.writer.write((_data_toc = data.toc) !== null && _data_toc !== void 0 ? _data_toc : new Uint8Array(100));
        const frameSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeMp3FrameSize"])(data.layer, 1000 * bitrates[bitrateIndex], sampleRate, padding);
        this.writer.seek(startPos + frameSize);
    }
    constructor(writer){
        this.writer = writer;
        this.helper = new Uint8Array(8);
        this.helperView = new DataView(this.helper.buffer);
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/mp3/mp3-muxer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "Mp3Muxer": ()=>Mp3Muxer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/muxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/shared/mp3-misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$mp3$2f$mp3$2d$writer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/mp3/mp3-writer.js [app-client] (ecmascript)");
;
;
;
;
class Mp3Muxer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Muxer"] {
    async start() {
    // Nothing needed here
    }
    async getMimeType() {
        return 'audio/mpeg';
    }
    async addEncodedVideoPacket() {
        throw new Error('MP3 does not support video.');
    }
    async addEncodedAudioPacket(track, packet) {
        const release = await this.mutex.acquire();
        try {
            const writeXingHeader = this.format._options.xingHeader !== false;
            if (!this.xingFrameData && writeXingHeader) {
                const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDataView"])(packet.data);
                if (view.byteLength < 4) {
                    throw new Error('Invalid MP3 header in sample.');
                }
                const word = view.getUint32(0, false);
                const header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readFrameHeader"])(word, {
                    pos: 0,
                    fileSize: null
                });
                if (!header) {
                    throw new Error('Invalid MP3 header in sample.');
                }
                const xingOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXingOffset"])(header.mpegVersionId, header.channel);
                if (view.byteLength >= xingOffset + 4) {
                    const word = view.getUint32(xingOffset, false);
                    const isXing = word === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XING"] || word === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$shared$2f$mp3$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INFO"];
                    if (isXing) {
                        // This is not a data frame, so let's completely ignore this sample
                        return;
                    }
                }
                this.xingFrameData = {
                    mpegVersionId: header.mpegVersionId,
                    layer: header.layer,
                    frequencyIndex: header.frequencyIndex,
                    channel: header.channel,
                    modeExtension: header.modeExtension,
                    copyright: header.copyright,
                    original: header.original,
                    emphasis: header.emphasis,
                    frameCount: null,
                    fileSize: null,
                    toc: null
                };
                // Write a Xing frame because this muxer doesn't make any bitrate constraints, meaning we don't know if
                // this will be a constant or variable bitrate file. Therefore, always write the Xing frame.
                this.mp3Writer.writeXingFrame(this.xingFrameData);
                this.frameCount++;
            }
            this.validateAndNormalizeTimestamp(track, packet.timestamp, packet.type === 'key');
            this.writer.write(packet.data);
            this.frameCount++;
            await this.writer.flush();
            if (writeXingHeader) {
                this.framePositions.push(this.writer.getPos());
            }
        } finally{
            release();
        }
    }
    async addSubtitleCue() {
        throw new Error('MP3 does not support subtitles.');
    }
    async finalize() {
        if (!this.xingFrameData) {
            return;
        }
        const release = await this.mutex.acquire();
        const endPos = this.writer.getPos();
        this.writer.seek(0);
        const toc = new Uint8Array(100);
        for(let i = 0; i < 100; i++){
            const index = Math.floor(this.framePositions.length * (i / 100));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(index !== -1 && index < this.framePositions.length);
            const byteOffset = this.framePositions[index];
            toc[i] = 256 * (byteOffset / endPos);
        }
        this.xingFrameData.frameCount = this.frameCount;
        this.xingFrameData.fileSize = endPos;
        this.xingFrameData.toc = toc;
        if (this.format._options.onXingFrame) {
            this.writer.startTrackingWrites();
        }
        this.mp3Writer.writeXingFrame(this.xingFrameData);
        if (this.format._options.onXingFrame) {
            const { data, start } = this.writer.stopTrackingWrites();
            this.format._options.onXingFrame(data, start);
        }
        this.writer.seek(endPos);
        release();
    }
    constructor(output, format){
        super(output);
        this.xingFrameData = null;
        this.frameCount = 0;
        this.framePositions = [];
        this.format = format;
        this.writer = output._writer;
        this.mp3Writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$mp3$2f$mp3$2d$writer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mp3Writer"](output._writer);
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/ogg/ogg-muxer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "OggMuxer": ()=>OggMuxer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec-data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/muxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/ogg/ogg-misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/ogg/ogg-reader.js [app-client] (ecmascript)");
;
;
;
;
;
;
const PAGE_SIZE_TARGET = 8192;
class OggMuxer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Muxer"] {
    async start() {
    // Nothin'
    }
    async getMimeType() {
        await this.allTracksKnown.promise;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildOggMimeType"])({
            codecStrings: this.trackDatas.map((x)=>x.codecInfo.codec)
        });
    }
    addEncodedVideoPacket() {
        throw new Error('Video tracks are not supported.');
    }
    getTrackData(track, meta) {
        const existingTrackData = this.trackDatas.find((td)=>td.track === track);
        if (existingTrackData) {
            return existingTrackData;
        }
        // Give the track a unique random serial number
        let serialNumber;
        do {
            serialNumber = Math.floor(2 ** 32 * Math.random());
        }while (this.trackDatas.some((td)=>td.serialNumber === serialNumber))
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(track.source._codec === 'vorbis' || track.source._codec === 'opus');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAudioChunkMetadata"])(meta);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta.decoderConfig);
        const newTrackData = {
            track,
            serialNumber,
            internalSampleRate: track.source._codec === 'opus' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OPUS_INTERNAL_SAMPLE_RATE"] : meta.decoderConfig.sampleRate,
            codecInfo: {
                codec: track.source._codec,
                vorbisInfo: null,
                opusInfo: null
            },
            vorbisLastBlocksize: null,
            packetQueue: [],
            currentTimestampInSamples: 0,
            pagesWritten: 0,
            currentGranulePosition: 0,
            currentLacingValues: [],
            currentPageData: [],
            currentPageSize: 27,
            currentPageStartsWithFreshPacket: true
        };
        this.queueHeaderPackets(newTrackData, meta);
        this.trackDatas.push(newTrackData);
        if (this.allTracksAreKnown()) {
            this.allTracksKnown.resolve();
        }
        return newTrackData;
    }
    queueHeaderPackets(trackData, meta) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta.decoderConfig);
        if (trackData.track.source._codec === 'vorbis') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta.decoderConfig.description);
            const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(meta.decoderConfig.description);
            if (bytes[0] !== 2) {
                throw new TypeError('First byte of Vorbis decoder description must be 2.');
            }
            let pos = 1;
            const readPacketLength = ()=>{
                let length = 0;
                while(true){
                    const value = bytes[pos++];
                    if (value === undefined) {
                        throw new TypeError('Vorbis decoder description is too short.');
                    }
                    length += value;
                    if (value < 255) {
                        return length;
                    }
                }
            };
            const identificationHeaderLength = readPacketLength();
            const commentHeaderLength = readPacketLength();
            const setupHeaderLength = bytes.length - pos; // Setup header fills the remaining bytes
            if (setupHeaderLength <= 0) {
                throw new TypeError('Vorbis decoder description is too short.');
            }
            const identificationHeader = bytes.subarray(pos, pos += identificationHeaderLength);
            const commentHeader = bytes.subarray(pos, pos += commentHeaderLength);
            const setupHeader = bytes.subarray(pos);
            trackData.packetQueue.push({
                data: identificationHeader,
                endGranulePosition: 0,
                timestamp: 0,
                forcePageFlush: true
            }, {
                data: commentHeader,
                endGranulePosition: 0,
                timestamp: 0,
                forcePageFlush: false
            }, {
                data: setupHeader,
                endGranulePosition: 0,
                timestamp: 0,
                forcePageFlush: true
            });
            const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDataView"])(identificationHeader);
            const blockSizeByte = view.getUint8(28);
            trackData.codecInfo.vorbisInfo = {
                blocksizes: [
                    1 << (blockSizeByte & 0xf),
                    1 << (blockSizeByte >> 4)
                ],
                modeBlockflags: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseModesFromVorbisSetupPacket"])(setupHeader).modeBlockflags
            };
        } else if (trackData.track.source._codec === 'opus') {
            if (!meta.decoderConfig.description) {
                throw new TypeError('For Ogg, Opus decoder description is required.');
            }
            const identificationHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUint8Array"])(meta.decoderConfig.description);
            const commentHeader = new Uint8Array(8 + 4 + 4);
            const view = new DataView(commentHeader.buffer);
            view.setUint32(0, 0x4f707573, false); // 'Opus'
            view.setUint32(4, 0x54616773, false); // 'Tags'
            view.setUint32(8, 0, true); // Vendor String Length
            view.setUint32(12, 0, true); // User Comment List Length
            trackData.packetQueue.push({
                data: identificationHeader,
                endGranulePosition: 0,
                timestamp: 0,
                forcePageFlush: true
            }, {
                data: commentHeader,
                endGranulePosition: 0,
                timestamp: 0,
                forcePageFlush: true
            });
            trackData.codecInfo.opusInfo = {
                preSkip: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2d$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseOpusIdentificationHeader"])(identificationHeader).preSkip
            };
        }
    }
    async addEncodedAudioPacket(track, packet, meta) {
        const release = await this.mutex.acquire();
        try {
            const trackData = this.getTrackData(track, meta);
            this.validateAndNormalizeTimestamp(trackData.track, packet.timestamp, packet.type === 'key');
            const currentTimestampInSamples = trackData.currentTimestampInSamples;
            const { durationInSamples, vorbisBlockSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractSampleMetadata"])(packet.data, trackData.codecInfo, trackData.vorbisLastBlocksize);
            trackData.currentTimestampInSamples += durationInSamples;
            trackData.vorbisLastBlocksize = vorbisBlockSize;
            trackData.packetQueue.push({
                data: packet.data,
                endGranulePosition: trackData.currentTimestampInSamples,
                timestamp: currentTimestampInSamples / trackData.internalSampleRate,
                forcePageFlush: false
            });
            await this.interleavePages();
        } finally{
            release();
        }
    }
    addSubtitleCue() {
        throw new Error('Subtitle tracks are not supported.');
    }
    allTracksAreKnown() {
        for (const track of this.output._tracks){
            if (!track.source._closed && !this.trackDatas.some((x)=>x.track === track)) {
                return false; // We haven't seen a sample from this open track yet
            }
        }
        return true;
    }
    async interleavePages() {
        let isFinalCall = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        if (!this.bosPagesWritten) {
            if (!this.allTracksAreKnown()) {
                return; // We can't interleave yet as we don't yet know how many tracks we'll truly have
            }
            // Write the header page for all bitstreams
            for (const trackData of this.trackDatas){
                while(trackData.packetQueue.length > 0){
                    const packet = trackData.packetQueue.shift();
                    this.writePacket(trackData, packet, false);
                    if (packet.forcePageFlush) {
                        break;
                    }
                }
            }
            this.bosPagesWritten = true;
        }
        outer: while(true){
            let trackWithMinTimestamp = null;
            let minTimestamp = Infinity;
            for (const trackData of this.trackDatas){
                if (!isFinalCall && trackData.packetQueue.length <= 1 // Limit is 1, not 0, for correct EOS flag logic
                 && !trackData.track.source._closed) {
                    break outer;
                }
                if (trackData.packetQueue.length > 0 && trackData.packetQueue[0].timestamp < minTimestamp) {
                    trackWithMinTimestamp = trackData;
                    minTimestamp = trackData.packetQueue[0].timestamp;
                }
            }
            if (!trackWithMinTimestamp) {
                break;
            }
            const packet = trackWithMinTimestamp.packetQueue.shift();
            const isFinalPacket = trackWithMinTimestamp.packetQueue.length === 0;
            this.writePacket(trackWithMinTimestamp, packet, isFinalPacket);
        }
        if (!isFinalCall) {
            await this.writer.flush();
        }
    }
    writePacket(trackData, packet, isFinalPacket) {
        let remainingLength = packet.data.length;
        let dataStartOffset = 0;
        let dataOffset = 0;
        while(true){
            if (trackData.currentLacingValues.length === 0 && dataStartOffset > 0) {
                // This is a packet spanning multiple pages
                trackData.currentPageStartsWithFreshPacket = false;
            }
            const segmentSize = Math.min(255, remainingLength);
            trackData.currentLacingValues.push(segmentSize);
            trackData.currentPageSize++;
            dataOffset += segmentSize;
            const segmentIsLastOfPacket = remainingLength < 255;
            if (trackData.currentLacingValues.length === 255) {
                // The page is full, we need to add part of the packet data and then flush the page
                const slice = packet.data.subarray(dataStartOffset, dataOffset);
                dataStartOffset = dataOffset;
                trackData.currentPageData.push(slice);
                trackData.currentPageSize += slice.length;
                this.writePage(trackData, isFinalPacket && segmentIsLastOfPacket);
                if (segmentIsLastOfPacket) {
                    return;
                }
            }
            if (segmentIsLastOfPacket) {
                break;
            }
            remainingLength -= 255;
        }
        const slice = packet.data.subarray(dataStartOffset);
        trackData.currentPageData.push(slice);
        trackData.currentPageSize += slice.length;
        trackData.currentGranulePosition = packet.endGranulePosition;
        if (trackData.currentPageSize >= PAGE_SIZE_TARGET || packet.forcePageFlush) {
            this.writePage(trackData, isFinalPacket);
        }
    }
    writePage(trackData, isEos) {
        this.pageView.setUint32(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OGGS"], true); // Capture pattern
        this.pageView.setUint8(4, 0); // Version
        let headerType = 0;
        if (!trackData.currentPageStartsWithFreshPacket) {
            headerType |= 1;
        }
        if (trackData.pagesWritten === 0) {
            headerType |= 2; // Beginning of stream
        }
        if (isEos) {
            headerType |= 4; // End of stream
        }
        this.pageView.setUint8(5, headerType); // Header type
        const granulePosition = trackData.currentLacingValues.every((x)=>x === 255) ? -1 // No packets end on this page
         : trackData.currentGranulePosition;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setInt64"])(this.pageView, 6, granulePosition, true); // Granule position
        this.pageView.setUint32(14, trackData.serialNumber, true); // Serial number
        this.pageView.setUint32(18, trackData.pagesWritten, true); // Page sequence number
        this.pageView.setUint32(22, 0, true); // Checksum placeholder
        this.pageView.setUint8(26, trackData.currentLacingValues.length); // Number of page segments
        this.pageBytes.set(trackData.currentLacingValues, 27);
        let pos = 27 + trackData.currentLacingValues.length;
        for (const data of trackData.currentPageData){
            this.pageBytes.set(data, pos);
            pos += data.length;
        }
        const slice = this.pageBytes.subarray(0, pos);
        const crc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeOggPageCrc"])(slice);
        this.pageView.setUint32(22, crc, true); // Checksum
        trackData.pagesWritten++;
        trackData.currentLacingValues.length = 0;
        trackData.currentPageData.length = 0;
        trackData.currentPageSize = 27;
        trackData.currentPageStartsWithFreshPacket = true;
        if (this.format._options.onPage) {
            this.writer.startTrackingWrites();
        }
        this.writer.write(slice);
        if (this.format._options.onPage) {
            const { data, start } = this.writer.stopTrackingWrites();
            this.format._options.onPage(data, start, trackData.track.source);
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    async onTrackClose() {
        const release = await this.mutex.acquire();
        if (this.allTracksAreKnown()) {
            this.allTracksKnown.resolve();
        }
        // Since a track is now closed, we may be able to write out chunks that were previously waiting
        await this.interleavePages();
        release();
    }
    async finalize() {
        const release = await this.mutex.acquire();
        this.allTracksKnown.resolve();
        await this.interleavePages(true);
        for (const trackData of this.trackDatas){
            if (trackData.currentLacingValues.length > 0) {
                this.writePage(trackData, true);
            }
        }
        release();
    }
    constructor(output, format){
        super(output);
        this.trackDatas = [];
        this.bosPagesWritten = false;
        this.allTracksKnown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promiseWithResolvers"])();
        this.pageBytes = new Uint8Array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$reader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_PAGE_SIZE"]);
        this.pageView = new DataView(this.pageBytes.buffer);
        this.format = format;
        this.writer = output._writer;
        this.writer.ensureMonotonicity = true; // Ogg is always monotonically written!
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/wave/riff-writer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "RiffWriter": ()=>RiffWriter
});
class RiffWriter {
    writeU16(value) {
        this.helperView.setUint16(0, value, true);
        this.writer.write(this.helper.subarray(0, 2));
    }
    writeU32(value) {
        this.helperView.setUint32(0, value, true);
        this.writer.write(this.helper.subarray(0, 4));
    }
    writeU64(value) {
        this.helperView.setUint32(0, value, true);
        this.helperView.setUint32(4, Math.floor(value / 2 ** 32), true);
        this.writer.write(this.helper);
    }
    writeAscii(text) {
        this.writer.write(new TextEncoder().encode(text));
    }
    constructor(writer){
        this.writer = writer;
        this.helper = new Uint8Array(8);
        this.helperView = new DataView(this.helper.buffer);
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/wave/wave-muxer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "WaveMuxer": ()=>WaveMuxer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/muxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$wave$2f$wave$2d$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/wave/wave-demuxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$wave$2f$riff$2d$writer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/wave/riff-writer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
;
;
;
;
;
class WaveMuxer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Muxer"] {
    async start() {
    // Nothing needed here - we'll write the header with the first sample
    }
    async getMimeType() {
        return 'audio/wav';
    }
    async addEncodedVideoPacket() {
        throw new Error('WAVE does not support video.');
    }
    async addEncodedAudioPacket(track, packet, meta) {
        const release = await this.mutex.acquire();
        try {
            if (!this.headerWritten) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAudioChunkMetadata"])(meta);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(meta.decoderConfig);
                this.writeHeader(track, meta.decoderConfig);
                this.sampleRate = meta.decoderConfig.sampleRate;
                this.headerWritten = true;
            }
            this.validateAndNormalizeTimestamp(track, packet.timestamp, packet.type === 'key');
            if (!this.isRf64 && this.writer.getPos() + packet.data.byteLength >= 2 ** 32) {
                throw new Error('Adding more audio data would exceed the maximum RIFF size of 4 GiB. To write larger files, use' + ' RF64 by setting `large: true` in the WavOutputFormatOptions.');
            }
            this.writer.write(packet.data);
            this.dataSize += packet.data.byteLength;
            this.sampleCount += Math.round(packet.duration * this.sampleRate);
            await this.writer.flush();
        } finally{
            release();
        }
    }
    async addSubtitleCue() {
        throw new Error('WAVE does not support subtitles.');
    }
    writeHeader(track, config) {
        if (this.format._options.onHeader) {
            this.writer.startTrackingWrites();
        }
        let format;
        const codec = track.source._codec;
        const pcmInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePcmCodec"])(codec);
        if (pcmInfo.dataType === 'ulaw') {
            format = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$wave$2f$wave$2d$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaveFormat"].MULAW;
        } else if (pcmInfo.dataType === 'alaw') {
            format = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$wave$2f$wave$2d$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaveFormat"].ALAW;
        } else if (pcmInfo.dataType === 'float') {
            format = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$wave$2f$wave$2d$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaveFormat"].IEEE_FLOAT;
        } else {
            format = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$wave$2f$wave$2d$demuxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaveFormat"].PCM;
        }
        const channels = config.numberOfChannels;
        const sampleRate = config.sampleRate;
        const blockSize = pcmInfo.sampleSize * channels;
        // RIFF header
        this.riffWriter.writeAscii(this.isRf64 ? 'RF64' : 'RIFF');
        if (this.isRf64) {
            this.riffWriter.writeU32(0xffffffff); // Not used in RF64
        } else {
            this.riffWriter.writeU32(0); // File size placeholder
        }
        this.riffWriter.writeAscii('WAVE');
        if (this.isRf64) {
            this.riffWriter.writeAscii('ds64');
            this.riffWriter.writeU32(28); // Chunk size
            this.riffWriter.writeU64(0); // RIFF size placeholder
            this.riffWriter.writeU64(0); // Data size placeholder
            this.riffWriter.writeU64(0); // Sample count placeholder
            this.riffWriter.writeU32(0); // Table length
        // Empty table
        }
        // fmt chunk
        this.riffWriter.writeAscii('fmt ');
        this.riffWriter.writeU32(16); // Chunk size
        this.riffWriter.writeU16(format);
        this.riffWriter.writeU16(channels);
        this.riffWriter.writeU32(sampleRate);
        this.riffWriter.writeU32(sampleRate * blockSize); // Bytes per second
        this.riffWriter.writeU16(blockSize);
        this.riffWriter.writeU16(8 * pcmInfo.sampleSize);
        // data chunk
        this.riffWriter.writeAscii('data');
        if (this.isRf64) {
            this.riffWriter.writeU32(0xffffffff); // Not used in RF64
        } else {
            this.riffWriter.writeU32(0); // Data size placeholder
        }
        if (this.format._options.onHeader) {
            const { data, start } = this.writer.stopTrackingWrites();
            this.format._options.onHeader(data, start);
        }
    }
    async finalize() {
        const release = await this.mutex.acquire();
        const endPos = this.writer.getPos();
        if (this.isRf64) {
            // Write riff size
            this.writer.seek(20);
            this.riffWriter.writeU64(endPos - 8);
            // Write data size
            this.writer.seek(28);
            this.riffWriter.writeU64(this.dataSize);
            // Write sample count
            this.writer.seek(36);
            this.riffWriter.writeU64(this.sampleCount);
        } else {
            // Write file size
            this.writer.seek(4);
            this.riffWriter.writeU32(endPos - 8);
            // Write data chunk size
            this.writer.seek(40);
            this.riffWriter.writeU32(this.dataSize);
        }
        this.writer.seek(endPos);
        release();
    }
    constructor(output, format){
        super(output);
        this.headerWritten = false;
        this.dataSize = 0;
        this.sampleRate = null;
        this.sampleCount = 0;
        this.format = format;
        this.writer = output._writer;
        this.riffWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$wave$2f$riff$2d$writer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiffWriter"](output._writer);
        this.isRf64 = !!format._options.large;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/output-format.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "AdtsOutputFormat": ()=>AdtsOutputFormat,
    "IsobmffOutputFormat": ()=>IsobmffOutputFormat,
    "MkvOutputFormat": ()=>MkvOutputFormat,
    "MovOutputFormat": ()=>MovOutputFormat,
    "Mp3OutputFormat": ()=>Mp3OutputFormat,
    "Mp4OutputFormat": ()=>Mp4OutputFormat,
    "OggOutputFormat": ()=>OggOutputFormat,
    "OutputFormat": ()=>OutputFormat,
    "WavOutputFormat": ()=>WavOutputFormat,
    "WebMOutputFormat": ()=>WebMOutputFormat
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$adts$2f$adts$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/adts/adts-muxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/isobmff/isobmff-muxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$matroska$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/matroska/matroska-muxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$mp3$2f$mp3$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/mp3/mp3-muxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/ogg/ogg-muxer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$wave$2f$wave$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/wave/wave-muxer.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class OutputFormat {
    /** Returns a list of video codecs that this output format can contain. */ getSupportedVideoCodecs() {
        return this.getSupportedCodecs().filter((codec)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIDEO_CODECS"].includes(codec));
    }
    /** Returns a list of audio codecs that this output format can contain. */ getSupportedAudioCodecs() {
        return this.getSupportedCodecs().filter((codec)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_CODECS"].includes(codec));
    }
    /** Returns a list of subtitle codecs that this output format can contain. */ getSupportedSubtitleCodecs() {
        return this.getSupportedCodecs().filter((codec)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBTITLE_CODECS"].includes(codec));
    }
    /** @internal */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _codecUnsupportedHint(codec) {
        return '';
    }
}
class IsobmffOutputFormat extends OutputFormat {
    getSupportedTrackCounts() {
        return {
            video: {
                min: 0,
                max: Infinity
            },
            audio: {
                min: 0,
                max: Infinity
            },
            subtitle: {
                min: 0,
                max: Infinity
            },
            total: {
                min: 1,
                max: 2 ** 32 - 1
            }
        };
    }
    get supportsVideoRotationMetadata() {
        return true;
    }
    /** @internal */ _createMuxer(output) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$isobmff$2f$isobmff$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsobmffMuxer"](output, this);
    }
    constructor(options = {}){
        if (!options || typeof options !== 'object') {
            throw new TypeError('options must be an object.');
        }
        if (options.fastStart !== undefined && ![
            false,
            'in-memory',
            'fragmented'
        ].includes(options.fastStart)) {
            throw new TypeError('options.fastStart, when provided, must be false, "in-memory", or "fragmented".');
        }
        if (options.minimumFragmentDuration !== undefined && (!Number.isFinite(options.minimumFragmentDuration) || options.minimumFragmentDuration < 0)) {
            throw new TypeError('options.minimumFragmentDuration, when provided, must be a non-negative number.');
        }
        if (options.onFtyp !== undefined && typeof options.onFtyp !== 'function') {
            throw new TypeError('options.onFtyp, when provided, must be a function.');
        }
        if (options.onMoov !== undefined && typeof options.onMoov !== 'function') {
            throw new TypeError('options.onMoov, when provided, must be a function.');
        }
        if (options.onMdat !== undefined && typeof options.onMdat !== 'function') {
            throw new TypeError('options.onMdat, when provided, must be a function.');
        }
        if (options.onMoof !== undefined && typeof options.onMoof !== 'function') {
            throw new TypeError('options.onMoof, when provided, must be a function.');
        }
        super();
        this._options = options;
    }
}
class Mp4OutputFormat extends IsobmffOutputFormat {
    /** @internal */ get _name() {
        return 'MP4';
    }
    get fileExtension() {
        return '.mp4';
    }
    get mimeType() {
        return 'video/mp4';
    }
    getSupportedCodecs() {
        return [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIDEO_CODECS"],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NON_PCM_AUDIO_CODECS"],
            // These are supported via ISO/IEC 23003-5
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
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBTITLE_CODECS"]
        ];
    }
    /** @internal */ _codecUnsupportedHint(codec) {
        if (new MovOutputFormat().getSupportedCodecs().includes(codec)) {
            return ' Switching to MOV will grant support for this codec.';
        }
        return '';
    }
}
class MovOutputFormat extends IsobmffOutputFormat {
    /** @internal */ get _name() {
        return 'MOV';
    }
    get fileExtension() {
        return '.mov';
    }
    get mimeType() {
        return 'video/quicktime';
    }
    getSupportedCodecs() {
        return [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIDEO_CODECS"],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_CODECS"]
        ];
    }
    /** @internal */ _codecUnsupportedHint(codec) {
        if (new Mp4OutputFormat().getSupportedCodecs().includes(codec)) {
            return ' Switching to MP4 will grant support for this codec.';
        }
        return '';
    }
}
class MkvOutputFormat extends OutputFormat {
    /** @internal */ _createMuxer(output) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$matroska$2f$matroska$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatroskaMuxer"](output, this);
    }
    /** @internal */ get _name() {
        return 'Matroska';
    }
    getSupportedTrackCounts() {
        return {
            video: {
                min: 0,
                max: Infinity
            },
            audio: {
                min: 0,
                max: Infinity
            },
            subtitle: {
                min: 0,
                max: Infinity
            },
            total: {
                min: 1,
                max: 127
            }
        };
    }
    get fileExtension() {
        return '.mkv';
    }
    get mimeType() {
        return 'video/x-matroska';
    }
    getSupportedCodecs() {
        return [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIDEO_CODECS"],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NON_PCM_AUDIO_CODECS"],
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCM_AUDIO_CODECS"].filter((codec)=>![
                    'pcm-s8',
                    'pcm-f32be',
                    'pcm-f64be',
                    'ulaw',
                    'alaw'
                ].includes(codec)),
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBTITLE_CODECS"]
        ];
    }
    get supportsVideoRotationMetadata() {
        // While it technically does support it with ProjectionPoseRoll, many players appear to ignore this value
        return false;
    }
    constructor(options = {}){
        if (!options || typeof options !== 'object') {
            throw new TypeError('options must be an object.');
        }
        if (options.appendOnly !== undefined && typeof options.appendOnly !== 'boolean') {
            throw new TypeError('options.appendOnly, when provided, must be a boolean.');
        }
        if (options.minimumClusterDuration !== undefined && (!Number.isFinite(options.minimumClusterDuration) || options.minimumClusterDuration < 0)) {
            throw new TypeError('options.minimumClusterDuration, when provided, must be a non-negative number.');
        }
        if (options.onEbmlHeader !== undefined && typeof options.onEbmlHeader !== 'function') {
            throw new TypeError('options.onEbmlHeader, when provided, must be a function.');
        }
        if (options.onSegmentHeader !== undefined && typeof options.onSegmentHeader !== 'function') {
            throw new TypeError('options.onHeader, when provided, must be a function.');
        }
        if (options.onCluster !== undefined && typeof options.onCluster !== 'function') {
            throw new TypeError('options.onCluster, when provided, must be a function.');
        }
        super();
        this._options = options;
    }
}
class WebMOutputFormat extends MkvOutputFormat {
    getSupportedCodecs() {
        return [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIDEO_CODECS"].filter((codec)=>[
                    'vp8',
                    'vp9',
                    'av1'
                ].includes(codec)),
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_CODECS"].filter((codec)=>[
                    'opus',
                    'vorbis'
                ].includes(codec)),
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBTITLE_CODECS"]
        ];
    }
    /** @internal */ get _name() {
        return 'WebM';
    }
    get fileExtension() {
        return '.webm';
    }
    get mimeType() {
        return 'video/webm';
    }
    /** @internal */ _codecUnsupportedHint(codec) {
        if (new MkvOutputFormat().getSupportedCodecs().includes(codec)) {
            return ' Switching to MKV will grant support for this codec.';
        }
        return '';
    }
}
class Mp3OutputFormat extends OutputFormat {
    /** @internal */ _createMuxer(output) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$mp3$2f$mp3$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mp3Muxer"](output, this);
    }
    /** @internal */ get _name() {
        return 'MP3';
    }
    getSupportedTrackCounts() {
        return {
            video: {
                min: 0,
                max: 0
            },
            audio: {
                min: 1,
                max: 1
            },
            subtitle: {
                min: 0,
                max: 0
            },
            total: {
                min: 1,
                max: 1
            }
        };
    }
    get fileExtension() {
        return '.mp3';
    }
    get mimeType() {
        return 'audio/mpeg';
    }
    getSupportedCodecs() {
        return [
            'mp3'
        ];
    }
    get supportsVideoRotationMetadata() {
        return false;
    }
    constructor(options = {}){
        if (!options || typeof options !== 'object') {
            throw new TypeError('options must be an object.');
        }
        if (options.xingHeader !== undefined && typeof options.xingHeader !== 'boolean') {
            throw new TypeError('options.xingHeader, when provided, must be a boolean.');
        }
        if (options.onXingFrame !== undefined && typeof options.onXingFrame !== 'function') {
            throw new TypeError('options.onXingFrame, when provided, must be a function.');
        }
        super();
        this._options = options;
    }
}
class WavOutputFormat extends OutputFormat {
    /** @internal */ _createMuxer(output) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$wave$2f$wave$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaveMuxer"](output, this);
    }
    /** @internal */ get _name() {
        return 'WAVE';
    }
    getSupportedTrackCounts() {
        return {
            video: {
                min: 0,
                max: 0
            },
            audio: {
                min: 1,
                max: 1
            },
            subtitle: {
                min: 0,
                max: 0
            },
            total: {
                min: 1,
                max: 1
            }
        };
    }
    get fileExtension() {
        return '.wav';
    }
    get mimeType() {
        return 'audio/wav';
    }
    getSupportedCodecs() {
        return [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCM_AUDIO_CODECS"].filter((codec)=>[
                    'pcm-s16',
                    'pcm-s24',
                    'pcm-s32',
                    'pcm-f32',
                    'pcm-u8',
                    'ulaw',
                    'alaw'
                ].includes(codec))
        ];
    }
    get supportsVideoRotationMetadata() {
        return false;
    }
    constructor(options = {}){
        if (!options || typeof options !== 'object') {
            throw new TypeError('options must be an object.');
        }
        if (options.large !== undefined && typeof options.large !== 'boolean') {
            throw new TypeError('options.large, when provided, must be a boolean.');
        }
        if (options.onHeader !== undefined && typeof options.onHeader !== 'function') {
            throw new TypeError('options.onHeader, when provided, must be a function.');
        }
        super();
        this._options = options;
    }
}
class OggOutputFormat extends OutputFormat {
    /** @internal */ _createMuxer(output) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$ogg$2f$ogg$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OggMuxer"](output, this);
    }
    /** @internal */ get _name() {
        return 'Ogg';
    }
    getSupportedTrackCounts() {
        return {
            video: {
                min: 0,
                max: 0
            },
            audio: {
                min: 0,
                max: Infinity
            },
            subtitle: {
                min: 0,
                max: 0
            },
            total: {
                min: 1,
                max: 2 ** 32
            }
        };
    }
    get fileExtension() {
        return '.ogg';
    }
    get mimeType() {
        return 'application/ogg';
    }
    getSupportedCodecs() {
        return [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_CODECS"].filter((codec)=>[
                    'vorbis',
                    'opus'
                ].includes(codec))
        ];
    }
    get supportsVideoRotationMetadata() {
        return false;
    }
    constructor(options = {}){
        if (!options || typeof options !== 'object') {
            throw new TypeError('options must be an object.');
        }
        if (options.onPage !== undefined && typeof options.onPage !== 'function') {
            throw new TypeError('options.onPage, when provided, must be a function.');
        }
        super();
        this._options = options;
    }
}
class AdtsOutputFormat extends OutputFormat {
    /** @internal */ _createMuxer(output) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$adts$2f$adts$2d$muxer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdtsMuxer"](output, this);
    }
    /** @internal */ get _name() {
        return 'ADTS';
    }
    getSupportedTrackCounts() {
        return {
            video: {
                min: 0,
                max: 0
            },
            audio: {
                min: 1,
                max: 1
            },
            subtitle: {
                min: 0,
                max: 0
            },
            total: {
                min: 1,
                max: 1
            }
        };
    }
    get fileExtension() {
        return '.aac';
    }
    get mimeType() {
        return 'audio/aac';
    }
    getSupportedCodecs() {
        return [
            'aac'
        ];
    }
    get supportsVideoRotationMetadata() {
        return false;
    }
    constructor(options = {}){
        if (!options || typeof options !== 'object') {
            throw new TypeError('options must be an object.');
        }
        if (options.onFrame !== undefined && typeof options.onFrame !== 'function') {
            throw new TypeError('options.onFrame, when provided, must be a function.');
        }
        super();
        this._options = options;
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/media-source.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "AudioBufferSource": ()=>AudioBufferSource,
    "AudioSampleSource": ()=>AudioSampleSource,
    "AudioSource": ()=>AudioSource,
    "CanvasSource": ()=>CanvasSource,
    "EncodedAudioPacketSource": ()=>EncodedAudioPacketSource,
    "EncodedVideoPacketSource": ()=>EncodedVideoPacketSource,
    "MediaSource": ()=>MediaSource,
    "MediaStreamAudioTrackSource": ()=>MediaStreamAudioTrackSource,
    "MediaStreamVideoTrackSource": ()=>MediaStreamVideoTrackSource,
    "SubtitleSource": ()=>SubtitleSource,
    "TextSubtitleSource": ()=>TextSubtitleSource,
    "VideoSampleSource": ()=>VideoSampleSource,
    "VideoSource": ()=>VideoSource
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$subtitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/subtitles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$pcm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/pcm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$custom$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/custom-coder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/packet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/sample.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class MediaSource {
    /** @internal */ _ensureValidAdd() {
        if (!this._connectedTrack) {
            throw new Error('Source is not connected to an output track.');
        }
        if (this._connectedTrack.output.state === 'canceled') {
            throw new Error('Output has been canceled.');
        }
        if (this._connectedTrack.output.state === 'finalizing' || this._connectedTrack.output.state === 'finalized') {
            throw new Error('Output has been finalized.');
        }
        if (this._connectedTrack.output.state === 'pending') {
            throw new Error('Output has not started.');
        }
        if (this._closed) {
            throw new Error('Source is closed.');
        }
    }
    /** @internal */ async _start() {}
    /** @internal */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async _flushAndClose(forceClose) {}
    /**
     * Closes this source. This prevents future samples from being added and signals to the output file that no further
     * samples will come in for this track. Calling `.close()` is optional but recommended after adding the
     * last sample - for improved performance and reduced memory usage.
     */ close() {
        if (this._closingPromise) {
            return;
        }
        const connectedTrack = this._connectedTrack;
        if (!connectedTrack) {
            throw new Error('Cannot call close without connecting the source to an output track.');
        }
        if (connectedTrack.output.state === 'pending') {
            throw new Error('Cannot call close before output has been started.');
        }
        this._closingPromise = (async ()=>{
            await this._flushAndClose(false);
            this._closed = true;
            if (connectedTrack.output.state === 'finalizing' || connectedTrack.output.state === 'finalized') {
                return;
            }
            connectedTrack.output._muxer.onTrackClose(connectedTrack);
        })();
    }
    /** @internal */ async _flushOrWaitForOngoingClose(forceClose) {
        if (this._closingPromise) {
            // Since closing also flushes, we don't want to do it twice
            return this._closingPromise;
        } else {
            return this._flushAndClose(forceClose);
        }
    }
    constructor(){
        /** @internal */ this._connectedTrack = null;
        /** @internal */ this._closingPromise = null;
        /** @internal */ this._closed = false;
        /**
         * @internal
         * A time offset in seconds that is added to all timestamps generated by this source.
         */ this._timestampOffset = 0;
    }
}
class VideoSource extends MediaSource {
    constructor(codec){
        super();
        /** @internal */ this._connectedTrack = null;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIDEO_CODECS"].includes(codec)) {
            throw new TypeError("Invalid video codec '".concat(codec, "'. Must be one of: ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIDEO_CODECS"].join(', '), "."));
        }
        this._codec = codec;
    }
}
class EncodedVideoPacketSource extends VideoSource {
    /**
     * Adds an encoded packet to the output video track. Packets must be added in *decode order*, while a packet's
     * timestamp must be its *presentation timestamp*. B-frames are handled automatically.
     *
     * @param meta - Additional metadata from the encoder. You should pass this for the first call, including a valid
     * decoder config.
     *
     * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
     * to respect writer and encoder backpressure.
     */ add(packet, meta) {
        if (!(packet instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"])) {
            throw new TypeError('packet must be an EncodedPacket.');
        }
        if (packet.isMetadataOnly) {
            throw new TypeError('Metadata-only packets cannot be added.');
        }
        if (meta !== undefined && (!meta || typeof meta !== 'object')) {
            throw new TypeError('meta, when provided, must be an object.');
        }
        this._ensureValidAdd();
        return this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack, packet, meta);
    }
    constructor(codec){
        super(codec);
    }
}
const validateVideoEncodingConfig = (config)=>{
    if (!config || typeof config !== 'object') {
        throw new TypeError('Encoding config must be an object.');
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIDEO_CODECS"].includes(config.codec)) {
        throw new TypeError("Invalid video codec '".concat(config.codec, "'. Must be one of: ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIDEO_CODECS"].join(', '), "."));
    }
    if (!(config.bitrate instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quality"]) && (!Number.isInteger(config.bitrate) || config.bitrate <= 0)) {
        throw new TypeError('config.bitrate must be a positive integer or a quality.');
    }
    if (config.latencyMode !== undefined && ![
        'quality',
        'realtime'
    ].includes(config.latencyMode)) {
        throw new TypeError('config.latencyMode, when provided, must be \'quality\' or \'realtime\'.');
    }
    if (config.keyFrameInterval !== undefined && (!Number.isFinite(config.keyFrameInterval) || config.keyFrameInterval < 0)) {
        throw new TypeError('config.keyFrameInterval, when provided, must be a non-negative number.');
    }
    if (config.fullCodecString !== undefined && typeof config.fullCodecString !== 'string') {
        throw new TypeError('config.fullCodecString, when provided, must be a string.');
    }
    if (config.fullCodecString !== undefined && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inferCodecFromCodecString"])(config.fullCodecString) !== config.codec) {
        throw new TypeError("config.fullCodecString, when provided, must be a string that matches the specified codec" + " (".concat(config.codec, ")."));
    }
    if (config.onEncodedPacket !== undefined && typeof config.onEncodedPacket !== 'function') {
        throw new TypeError('config.onEncodedChunk, when provided, must be a function.');
    }
    if (config.onEncoderConfig !== undefined && typeof config.onEncoderConfig !== 'function') {
        throw new TypeError('config.onEncoderConfig, when provided, must be a function.');
    }
};
class VideoEncoderWrapper {
    async add(videoSample, shouldClose, encodeOptions) {
        try {
            this.checkForEncoderError();
            this.source._ensureValidAdd();
            // Ensure video sample size remains constant
            if (this.lastWidth !== null && this.lastHeight !== null) {
                if (videoSample.codedWidth !== this.lastWidth || videoSample.codedHeight !== this.lastHeight) {
                    throw new Error("Video sample size must remain constant. Expected ".concat(this.lastWidth, "x").concat(this.lastHeight, ",") + " got ".concat(videoSample.codedWidth, "x").concat(videoSample.codedHeight, "."));
                }
            } else {
                this.lastWidth = videoSample.codedWidth;
                this.lastHeight = videoSample.codedHeight;
            }
            if (!this.encoderInitialized) {
                if (!this.ensureEncoderPromise) {
                    void this.ensureEncoder(videoSample);
                }
                // No, this "if" statement is not useless. Sometimes, the above call to `ensureEncoder` might have
                // synchronously completed and the encoder is already initialized. In this case, we don't need to await
                // the promise anymore. This also fixes nasty async race condition bugs when multiple code paths are
                // calling this method: It's important that the call that initialized the encoder go through this
                // code first.
                if (!this.encoderInitialized) {
                    await this.ensureEncoderPromise;
                }
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.encoderInitialized);
            var _this_encodingConfig_keyFrameInterval;
            const keyFrameInterval = (_this_encodingConfig_keyFrameInterval = this.encodingConfig.keyFrameInterval) !== null && _this_encodingConfig_keyFrameInterval !== void 0 ? _this_encodingConfig_keyFrameInterval : 5;
            const multipleOfKeyFrameInterval = Math.floor(videoSample.timestamp / keyFrameInterval);
            // Ensure a key frame every keyFrameInterval seconds. It is important that all video tracks follow the same
            // "key frame" rhythm, because aligned key frames are required to start new fragments in ISOBMFF or clusters
            // in Matroska (or at least desirable).
            const finalEncodeOptions = {
                ...encodeOptions,
                keyFrame: (encodeOptions === null || encodeOptions === void 0 ? void 0 : encodeOptions.keyFrame) || keyFrameInterval === 0 || multipleOfKeyFrameInterval !== this.lastMultipleOfKeyFrameInterval
            };
            this.lastMultipleOfKeyFrameInterval = multipleOfKeyFrameInterval;
            if (this.customEncoder) {
                this.customEncoderQueueSize++;
                // We clone the sample so it cannot be closed on us from the outside before it reaches the encoder
                const clonedSample = videoSample.clone();
                const promise = this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(clonedSample, finalEncodeOptions)).then(()=>this.customEncoderQueueSize--).catch((error)=>{
                    var _this_encoderError;
                    return (_this_encoderError = this.encoderError) !== null && _this_encoderError !== void 0 ? _this_encoderError : this.encoderError = error;
                }).finally(()=>{
                    clonedSample.close();
                // `videoSample` gets closed in the finally block at the end of the method
                });
                if (this.customEncoderQueueSize >= 4) {
                    await promise;
                }
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.encoder);
                const videoFrame = videoSample.toVideoFrame();
                this.encoder.encode(videoFrame, finalEncodeOptions);
                videoFrame.close();
                if (shouldClose) {
                    videoSample.close();
                }
                // We need to do this after sending the frame to the encoder as the frame otherwise might be closed
                if (this.encoder.encodeQueueSize >= 4) {
                    await new Promise((resolve)=>this.encoder.addEventListener('dequeue', resolve, {
                            once: true
                        }));
                }
            }
            await this.muxer.mutex.currentPromise; // Allow the writer to apply backpressure
        } finally{
            if (shouldClose) {
                // Make sure it's always closed, even if there was an error
                videoSample.close();
            }
        }
    }
    async ensureEncoder(videoSample) {
        if (this.encoder) {
            return;
        }
        return this.ensureEncoderPromise = (async ()=>{
            var _this_source__connectedTrack, _this_encodingConfig_onEncoderConfig, _this_encodingConfig;
            const width = videoSample.codedWidth;
            const height = videoSample.codedHeight;
            const bitrate = this.encodingConfig.bitrate instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quality"] ? this.encodingConfig.bitrate._toVideoBitrate(this.encodingConfig.codec, width, height) : this.encodingConfig.bitrate;
            var _this_encodingConfig_fullCodecString;
            const encoderConfig = {
                codec: (_this_encodingConfig_fullCodecString = this.encodingConfig.fullCodecString) !== null && _this_encodingConfig_fullCodecString !== void 0 ? _this_encodingConfig_fullCodecString : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildVideoCodecString"])(this.encodingConfig.codec, width, height, bitrate),
                width,
                height,
                bitrate,
                framerate: (_this_source__connectedTrack = this.source._connectedTrack) === null || _this_source__connectedTrack === void 0 ? void 0 : _this_source__connectedTrack.metadata.frameRate,
                latencyMode: this.encodingConfig.latencyMode,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVideoEncoderConfigExtension"])(this.encodingConfig.codec)
            };
            (_this_encodingConfig_onEncoderConfig = (_this_encodingConfig = this.encodingConfig).onEncoderConfig) === null || _this_encodingConfig_onEncoderConfig === void 0 ? void 0 : _this_encodingConfig_onEncoderConfig.call(_this_encodingConfig, encoderConfig);
            const MatchingCustomEncoder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$custom$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customVideoEncoders"].find((x)=>x.supports(this.encodingConfig.codec, encoderConfig));
            if (MatchingCustomEncoder) {
                // @ts-expect-error "Can't create instance of abstract class 🤓"
                this.customEncoder = new MatchingCustomEncoder();
                // @ts-expect-error It's technically readonly
                this.customEncoder.codec = this.encodingConfig.codec;
                // @ts-expect-error It's technically readonly
                this.customEncoder.config = encoderConfig;
                // @ts-expect-error It's technically readonly
                this.customEncoder.onPacket = (packet, meta)=>{
                    var _this_encodingConfig_onEncodedPacket, _this_encodingConfig;
                    if (!(packet instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"])) {
                        throw new TypeError('The first argument passed to onPacket must be an EncodedPacket.');
                    }
                    if (meta !== undefined && (!meta || typeof meta !== 'object')) {
                        throw new TypeError('The second argument passed to onPacket must be an object or undefined.');
                    }
                    (_this_encodingConfig_onEncodedPacket = (_this_encodingConfig = this.encodingConfig).onEncodedPacket) === null || _this_encodingConfig_onEncodedPacket === void 0 ? void 0 : _this_encodingConfig_onEncodedPacket.call(_this_encodingConfig, packet, meta);
                    void this.muxer.addEncodedVideoPacket(this.source._connectedTrack, packet, meta);
                };
                await this.customEncoder.init();
            } else {
                if (typeof VideoEncoder === 'undefined') {
                    throw new Error('VideoEncoder is not supported by this browser.');
                }
                const support = await VideoEncoder.isConfigSupported(encoderConfig);
                if (!support.supported) {
                    throw new Error("This specific encoder configuration (".concat(encoderConfig.codec, ", ").concat(encoderConfig.bitrate, " bps,") + " ".concat(encoderConfig.width, "x").concat(encoderConfig.height, ") is not supported by this browser. Consider") + " using another codec or changing your video parameters.");
                }
                this.encoder = new VideoEncoder({
                    output: (chunk, meta)=>{
                        var _this_encodingConfig_onEncodedPacket, _this_encodingConfig;
                        const packet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"].fromEncodedChunk(chunk);
                        (_this_encodingConfig_onEncodedPacket = (_this_encodingConfig = this.encodingConfig).onEncodedPacket) === null || _this_encodingConfig_onEncodedPacket === void 0 ? void 0 : _this_encodingConfig_onEncodedPacket.call(_this_encodingConfig, packet, meta);
                        void this.muxer.addEncodedVideoPacket(this.source._connectedTrack, packet, meta);
                    },
                    error: (error)=>{
                        error.stack = new Error().stack; // Provide a more useful stack trace
                        var _this_encoderError;
                        (_this_encoderError = this.encoderError) !== null && _this_encoderError !== void 0 ? _this_encoderError : this.encoderError = error;
                    }
                });
                this.encoder.configure(encoderConfig);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.source._connectedTrack);
            this.muxer = this.source._connectedTrack.output._muxer;
            this.encoderInitialized = true;
        })();
    }
    async flushAndClose(forceClose) {
        this.checkForEncoderError();
        if (this.customEncoder) {
            if (!forceClose) {
                void this.customEncoderCallSerializer.call(()=>this.customEncoder.flush());
            }
            await this.customEncoderCallSerializer.call(()=>this.customEncoder.close());
        } else if (this.encoder) {
            if (!forceClose) {
                await this.encoder.flush();
            }
            this.encoder.close();
        }
        this.checkForEncoderError();
    }
    getQueueSize() {
        if (this.customEncoder) {
            return this.customEncoderQueueSize;
        } else {
            var _this_encoder;
            var _this_encoder_encodeQueueSize;
            return (_this_encoder_encodeQueueSize = (_this_encoder = this.encoder) === null || _this_encoder === void 0 ? void 0 : _this_encoder.encodeQueueSize) !== null && _this_encoder_encodeQueueSize !== void 0 ? _this_encoder_encodeQueueSize : 0;
        }
    }
    checkForEncoderError() {
        if (this.encoderError) {
            throw this.encoderError;
        }
    }
    constructor(source, encodingConfig){
        this.source = source;
        this.encodingConfig = encodingConfig;
        this.ensureEncoderPromise = null;
        this.encoderInitialized = false;
        this.encoder = null;
        this.muxer = null;
        this.lastMultipleOfKeyFrameInterval = -1;
        this.lastWidth = null;
        this.lastHeight = null;
        this.customEncoder = null;
        this.customEncoderCallSerializer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallSerializer"]();
        this.customEncoderQueueSize = 0;
        /**
         * Encoders typically throw their errors "out of band", meaning asynchronously in some other execution context.
         * However, we want to surface these errors to the user within the normal control flow, so they don't go uncaught.
         * So, we keep track of the encoder error and throw it as soon as we get the chance.
         */ this.encoderError = null;
    }
}
class VideoSampleSource extends VideoSource {
    /**
     * Encodes a video sample (frame) and then adds it to the output.
     *
     * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
     * to respect writer and encoder backpressure.
     */ add(videoSample, encodeOptions) {
        if (!(videoSample instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoSample"])) {
            throw new TypeError('videoSample must be a VideoSample.');
        }
        return this._encoder.add(videoSample, false, encodeOptions);
    }
    /** @internal */ _flushAndClose(forceClose) {
        return this._encoder.flushAndClose(forceClose);
    }
    constructor(encodingConfig){
        validateVideoEncodingConfig(encodingConfig);
        super(encodingConfig.codec);
        this._encoder = new VideoEncoderWrapper(this, encodingConfig);
    }
}
class CanvasSource extends VideoSource {
    /**
     * Captures the current canvas state as a video sample (frame), encodes it and adds it to the output.
     *
     * @param timestamp - The timestamp of the sample, in seconds.
     * @param duration - The duration of the sample, in seconds.
     *
     * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
     * to respect writer and encoder backpressure.
     */ add(timestamp) {
        let duration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, encodeOptions = arguments.length > 2 ? arguments[2] : void 0;
        if (!Number.isFinite(timestamp) || timestamp < 0) {
            throw new TypeError('timestamp must be a non-negative number.');
        }
        if (!Number.isFinite(duration) || duration < 0) {
            throw new TypeError('duration must be a non-negative number.');
        }
        const sample = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoSample"](this._canvas, {
            timestamp,
            duration
        });
        return this._encoder.add(sample, true, encodeOptions);
    }
    /** @internal */ _flushAndClose(forceClose) {
        return this._encoder.flushAndClose(forceClose);
    }
    constructor(canvas, encodingConfig){
        if (!(typeof HTMLCanvasElement !== 'undefined' && canvas instanceof HTMLCanvasElement) && !(typeof OffscreenCanvas !== 'undefined' && canvas instanceof OffscreenCanvas)) {
            throw new TypeError('canvas must be an HTMLCanvasElement or OffscreenCanvas.');
        }
        validateVideoEncodingConfig(encodingConfig);
        super(encodingConfig.codec);
        this._encoder = new VideoEncoderWrapper(this, encodingConfig);
        this._canvas = canvas;
    }
}
class MediaStreamVideoTrackSource extends VideoSource {
    /** A promise that rejects upon any error within this source. This promise never resolves. */ get errorPromise() {
        this._errorPromiseAccessed = true;
        return this._promiseWithResolvers.promise;
    }
    /** @internal */ async _start() {
        if (!this._errorPromiseAccessed) {
            console.warn('Make sure not to ignore the `errorPromise` field on MediaStreamVideoTrackSource, so that any internal' + ' errors get bubbled up properly.');
        }
        this._abortController = new AbortController();
        let firstVideoFrameTimestamp = null;
        let errored = false;
        const onVideoFrame = (videoFrame)=>{
            if (errored) {
                videoFrame.close();
                return;
            }
            if (firstVideoFrameTimestamp === null) {
                firstVideoFrameTimestamp = videoFrame.timestamp / 1e6;
                const muxer = this._connectedTrack.output._muxer;
                if (muxer.firstMediaStreamTimestamp === null) {
                    muxer.firstMediaStreamTimestamp = performance.now() / 1000;
                    this._timestampOffset = -firstVideoFrameTimestamp;
                } else {
                    this._timestampOffset = performance.now() / 1000 - muxer.firstMediaStreamTimestamp - firstVideoFrameTimestamp;
                }
            }
            if (this._encoder.getQueueSize() >= 4) {
                // Drop frames if the encoder is overloaded
                videoFrame.close();
                return;
            }
            void this._encoder.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoSample"](videoFrame), true).catch((error)=>{
                var _this__abortController;
                errored = true;
                (_this__abortController = this._abortController) === null || _this__abortController === void 0 ? void 0 : _this__abortController.abort();
                this._promiseWithResolvers.reject(error);
                if (this._workerTrackId !== null) {
                    // Tell the worker to stop the track
                    sendMessageToMediaStreamTrackProcessorWorker({
                        type: 'stopTrack',
                        trackId: this._workerTrackId
                    });
                }
            });
        };
        if (typeof MediaStreamTrackProcessor !== 'undefined') {
            // We can do it here directly, perfect
            const processor = new MediaStreamTrackProcessor({
                track: this._track
            });
            const consumer = new WritableStream({
                write: onVideoFrame
            });
            processor.readable.pipeTo(consumer, {
                signal: this._abortController.signal
            }).catch((error)=>{
                // Handle AbortError silently
                if (error instanceof DOMException && error.name === 'AbortError') return;
                this._promiseWithResolvers.reject(error);
            });
        } else {
            // It might still be supported in a worker, so let's check that
            const supportedInWorker = await mediaStreamTrackProcessorIsSupportedInWorker();
            if (supportedInWorker) {
                this._workerTrackId = nextMediaStreamTrackProcessorWorkerId++;
                sendMessageToMediaStreamTrackProcessorWorker({
                    type: 'videoTrack',
                    trackId: this._workerTrackId,
                    track: this._track
                }, [
                    this._track
                ]);
                this._workerListener = (event)=>{
                    const message = event.data;
                    if (message.type === 'videoFrame' && message.trackId === this._workerTrackId) {
                        onVideoFrame(message.videoFrame);
                    } else if (message.type === 'error' && message.trackId === this._workerTrackId) {
                        this._promiseWithResolvers.reject(message.error);
                    }
                };
                mediaStreamTrackProcessorWorker.addEventListener('message', this._workerListener);
            } else {
                throw new Error('MediaStreamTrackProcessor is required but not supported by this browser.');
            }
        }
    }
    /** @internal */ async _flushAndClose(forceClose) {
        if (this._abortController) {
            this._abortController.abort();
            this._abortController = null;
        }
        if (this._workerTrackId !== null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this._workerListener);
            sendMessageToMediaStreamTrackProcessorWorker({
                type: 'stopTrack',
                trackId: this._workerTrackId
            });
            // Wait for the worker to stop the track
            await new Promise((resolve)=>{
                const listener = (event)=>{
                    const message = event.data;
                    if (message.type === 'trackStopped' && message.trackId === this._workerTrackId) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this._workerListener);
                        mediaStreamTrackProcessorWorker.removeEventListener('message', this._workerListener);
                        mediaStreamTrackProcessorWorker.removeEventListener('message', listener);
                        resolve();
                    }
                };
                mediaStreamTrackProcessorWorker.addEventListener('message', listener);
            });
        }
        await this._encoder.flushAndClose(forceClose);
    }
    constructor(track, encodingConfig){
        if (!(track instanceof MediaStreamTrack) || track.kind !== 'video') {
            throw new TypeError('track must be a video MediaStreamTrack.');
        }
        validateVideoEncodingConfig(encodingConfig);
        encodingConfig = {
            ...encodingConfig,
            latencyMode: 'realtime'
        };
        super(encodingConfig.codec);
        /** @internal */ this._abortController = null;
        /** @internal */ this._workerTrackId = null;
        /** @internal */ this._workerListener = null;
        /** @internal */ this._promiseWithResolvers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promiseWithResolvers"])();
        /** @internal */ this._errorPromiseAccessed = false;
        this._encoder = new VideoEncoderWrapper(this, encodingConfig);
        this._track = track;
    }
}
class AudioSource extends MediaSource {
    constructor(codec){
        super();
        /** @internal */ this._connectedTrack = null;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_CODECS"].includes(codec)) {
            throw new TypeError("Invalid audio codec '".concat(codec, "'. Must be one of: ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_CODECS"].join(', '), "."));
        }
        this._codec = codec;
    }
}
class EncodedAudioPacketSource extends AudioSource {
    /**
     * Adds an encoded packet to the output audio track. Packets must be added in *decode order*.
     *
     * @param meta - Additional metadata from the encoder. You should pass this for the first call, including a valid
     * decoder config.
     *
     * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
     * to respect writer and encoder backpressure.
     */ add(packet, meta) {
        if (!(packet instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"])) {
            throw new TypeError('packet must be an EncodedPacket.');
        }
        if (packet.isMetadataOnly) {
            throw new TypeError('Metadata-only packets cannot be added.');
        }
        if (meta !== undefined && (!meta || typeof meta !== 'object')) {
            throw new TypeError('meta, when provided, must be an object.');
        }
        this._ensureValidAdd();
        return this._connectedTrack.output._muxer.addEncodedAudioPacket(this._connectedTrack, packet, meta);
    }
    constructor(codec){
        super(codec);
    }
}
const validateAudioEncodingConfig = (config)=>{
    if (!config || typeof config !== 'object') {
        throw new TypeError('Encoding config must be an object.');
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_CODECS"].includes(config.codec)) {
        throw new TypeError("Invalid audio codec '".concat(config.codec, "'. Must be one of: ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AUDIO_CODECS"].join(', '), "."));
    }
    if (config.bitrate === undefined && (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCM_AUDIO_CODECS"].includes(config.codec) || config.codec === 'flac')) {
        throw new TypeError('config.bitrate must be provided for compressed audio codecs.');
    }
    if (config.bitrate !== undefined && !(config.bitrate instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quality"]) && (!Number.isInteger(config.bitrate) || config.bitrate <= 0)) {
        throw new TypeError('config.bitrate, when provided, must be a positive integer or a quality.');
    }
    if (config.fullCodecString !== undefined && typeof config.fullCodecString !== 'string') {
        throw new TypeError('config.fullCodecString, when provided, must be a string.');
    }
    if (config.fullCodecString !== undefined && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inferCodecFromCodecString"])(config.fullCodecString) !== config.codec) {
        throw new TypeError("config.fullCodecString, when provided, must be a string that matches the specified codec" + " (".concat(config.codec, ")."));
    }
    if (config.onEncodedPacket !== undefined && typeof config.onEncodedPacket !== 'function') {
        throw new TypeError('config.onEncodedChunk, when provided, must be a function.');
    }
    if (config.onEncoderConfig !== undefined && typeof config.onEncoderConfig !== 'function') {
        throw new TypeError('config.onEncoderConfig, when provided, must be a function.');
    }
};
class AudioEncoderWrapper {
    async add(audioSample, shouldClose) {
        try {
            this.checkForEncoderError();
            this.source._ensureValidAdd();
            // Ensure audio parameters remain constant
            if (this.lastNumberOfChannels !== null && this.lastSampleRate !== null) {
                if (audioSample.numberOfChannels !== this.lastNumberOfChannels || audioSample.sampleRate !== this.lastSampleRate) {
                    throw new Error("Audio parameters must remain constant. Expected ".concat(this.lastNumberOfChannels, " channels at") + " ".concat(this.lastSampleRate, " Hz, got ").concat(audioSample.numberOfChannels, " channels at") + " ".concat(audioSample.sampleRate, " Hz."));
                }
            } else {
                this.lastNumberOfChannels = audioSample.numberOfChannels;
                this.lastSampleRate = audioSample.sampleRate;
            }
            if (!this.encoderInitialized) {
                if (!this.ensureEncoderPromise) {
                    void this.ensureEncoder(audioSample);
                }
                // No, this "if" statement is not useless. Sometimes, the above call to `ensureEncoder` might have
                // synchronously completed and the encoder is already initialized. In this case, we don't need to await
                // the promise anymore. This also fixes nasty async race condition bugs when multiple code paths are
                // calling this method: It's important that the call that initialized the encoder go through this
                // code first.
                if (!this.encoderInitialized) {
                    await this.ensureEncoderPromise;
                }
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.encoderInitialized);
            if (this.customEncoder) {
                this.customEncoderQueueSize++;
                // We clone the sample so it cannot be closed on us from the outside before it reaches the encoder
                const clonedSample = audioSample.clone();
                const promise = this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(clonedSample)).then(()=>this.customEncoderQueueSize--).catch((error)=>{
                    var _this_encoderError;
                    return (_this_encoderError = this.encoderError) !== null && _this_encoderError !== void 0 ? _this_encoderError : this.encoderError = error;
                }).finally(()=>{
                    clonedSample.close();
                // `audioSample` gets closed in the finally block at the end of the method
                });
                if (this.customEncoderQueueSize >= 4) {
                    await promise;
                }
                await this.muxer.mutex.currentPromise; // Allow the writer to apply backpressure
            } else if (this.isPcmEncoder) {
                await this.doPcmEncoding(audioSample, shouldClose);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.encoder);
                const audioData = audioSample.toAudioData();
                this.encoder.encode(audioData);
                audioData.close();
                if (shouldClose) {
                    audioSample.close();
                }
                if (this.encoder.encodeQueueSize >= 4) {
                    await new Promise((resolve)=>this.encoder.addEventListener('dequeue', resolve, {
                            once: true
                        }));
                }
                await this.muxer.mutex.currentPromise; // Allow the writer to apply backpressure
            }
        } finally{
            if (shouldClose) {
                // Make sure it's always closed, even if there was an error
                audioSample.close();
            }
        }
    }
    async doPcmEncoding(audioSample, shouldClose) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.outputSampleSize);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.writeOutputValue);
        // Need to extract data from the audio data before we close it
        const { numberOfChannels, numberOfFrames, sampleRate, timestamp } = audioSample;
        const CHUNK_SIZE = 2048;
        const outputs = [];
        // Prepare all of the output buffers, each being bounded by CHUNK_SIZE so we don't generate huge packets
        for(let frame = 0; frame < numberOfFrames; frame += CHUNK_SIZE){
            const frameCount = Math.min(CHUNK_SIZE, audioSample.numberOfFrames - frame);
            const outputSize = frameCount * numberOfChannels * this.outputSampleSize;
            const outputBuffer = new ArrayBuffer(outputSize);
            const outputView = new DataView(outputBuffer);
            outputs.push({
                frameCount,
                view: outputView
            });
        }
        const allocationSize = audioSample.allocationSize({
            planeIndex: 0,
            format: 'f32-planar'
        });
        const floats = new Float32Array(allocationSize / Float32Array.BYTES_PER_ELEMENT);
        for(let i = 0; i < numberOfChannels; i++){
            audioSample.copyTo(floats, {
                planeIndex: i,
                format: 'f32-planar'
            });
            for(let j = 0; j < outputs.length; j++){
                const { frameCount, view } = outputs[j];
                for(let k = 0; k < frameCount; k++){
                    this.writeOutputValue(view, (k * numberOfChannels + i) * this.outputSampleSize, floats[j * CHUNK_SIZE + k]);
                }
            }
        }
        if (shouldClose) {
            audioSample.close();
        }
        const meta = {
            decoderConfig: {
                codec: this.encodingConfig.codec,
                numberOfChannels,
                sampleRate
            }
        };
        for(let i = 0; i < outputs.length; i++){
            var _this_encodingConfig_onEncodedPacket, _this_encodingConfig;
            const { frameCount, view } = outputs[i];
            const outputBuffer = view.buffer;
            const startFrame = i * CHUNK_SIZE;
            const packet = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"](new Uint8Array(outputBuffer), 'key', timestamp + startFrame / sampleRate, frameCount / sampleRate);
            (_this_encodingConfig_onEncodedPacket = (_this_encodingConfig = this.encodingConfig).onEncodedPacket) === null || _this_encodingConfig_onEncodedPacket === void 0 ? void 0 : _this_encodingConfig_onEncodedPacket.call(_this_encodingConfig, packet, meta);
            await this.muxer.addEncodedAudioPacket(this.source._connectedTrack, packet, meta); // With backpressure
        }
    }
    ensureEncoder(audioSample) {
        if (this.encoderInitialized) {
            return;
        }
        return this.ensureEncoderPromise = (async ()=>{
            var _this_encodingConfig_onEncoderConfig, _this_encodingConfig;
            const { numberOfChannels, sampleRate } = audioSample;
            const bitrate = this.encodingConfig.bitrate instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quality"] ? this.encodingConfig.bitrate._toAudioBitrate(this.encodingConfig.codec) : this.encodingConfig.bitrate;
            var _this_encodingConfig_fullCodecString;
            const encoderConfig = {
                codec: (_this_encodingConfig_fullCodecString = this.encodingConfig.fullCodecString) !== null && _this_encodingConfig_fullCodecString !== void 0 ? _this_encodingConfig_fullCodecString : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildAudioCodecString"])(this.encodingConfig.codec, numberOfChannels, sampleRate),
                numberOfChannels,
                sampleRate,
                bitrate,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAudioEncoderConfigExtension"])(this.encodingConfig.codec)
            };
            (_this_encodingConfig_onEncoderConfig = (_this_encodingConfig = this.encodingConfig).onEncoderConfig) === null || _this_encodingConfig_onEncoderConfig === void 0 ? void 0 : _this_encodingConfig_onEncoderConfig.call(_this_encodingConfig, encoderConfig);
            const MatchingCustomEncoder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$custom$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customAudioEncoders"].find((x)=>x.supports(this.encodingConfig.codec, encoderConfig));
            if (MatchingCustomEncoder) {
                // @ts-expect-error "Can't create instance of abstract class 🤓"
                this.customEncoder = new MatchingCustomEncoder();
                // @ts-expect-error It's technically readonly
                this.customEncoder.codec = this.encodingConfig.codec;
                // @ts-expect-error It's technically readonly
                this.customEncoder.config = encoderConfig;
                // @ts-expect-error It's technically readonly
                this.customEncoder.onPacket = (packet, meta)=>{
                    var _this_encodingConfig_onEncodedPacket, _this_encodingConfig;
                    if (!(packet instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"])) {
                        throw new TypeError('The first argument passed to onPacket must be an EncodedPacket.');
                    }
                    if (meta !== undefined && (!meta || typeof meta !== 'object')) {
                        throw new TypeError('The second argument passed to onPacket must be an object or undefined.');
                    }
                    (_this_encodingConfig_onEncodedPacket = (_this_encodingConfig = this.encodingConfig).onEncodedPacket) === null || _this_encodingConfig_onEncodedPacket === void 0 ? void 0 : _this_encodingConfig_onEncodedPacket.call(_this_encodingConfig, packet, meta);
                    void this.muxer.addEncodedAudioPacket(this.source._connectedTrack, packet, meta);
                };
                await this.customEncoder.init();
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCM_AUDIO_CODECS"].includes(this.encodingConfig.codec)) {
                this.initPcmEncoder();
            } else {
                if (typeof AudioEncoder === 'undefined') {
                    throw new Error('AudioEncoder is not supported by this browser.');
                }
                const support = await AudioEncoder.isConfigSupported(encoderConfig);
                if (!support.supported) {
                    throw new Error("This specific encoder configuration (".concat(encoderConfig.codec, ", ").concat(encoderConfig.bitrate, " bps,") + " ".concat(encoderConfig.numberOfChannels, " channels, ").concat(encoderConfig.sampleRate, " Hz) is not") + " supported by this browser. Consider using another codec or changing your audio parameters.");
                }
                this.encoder = new AudioEncoder({
                    output: (chunk, meta)=>{
                        var _this_encodingConfig_onEncodedPacket, _this_encodingConfig;
                        const packet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$packet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodedPacket"].fromEncodedChunk(chunk);
                        (_this_encodingConfig_onEncodedPacket = (_this_encodingConfig = this.encodingConfig).onEncodedPacket) === null || _this_encodingConfig_onEncodedPacket === void 0 ? void 0 : _this_encodingConfig_onEncodedPacket.call(_this_encodingConfig, packet, meta);
                        void this.muxer.addEncodedAudioPacket(this.source._connectedTrack, packet, meta);
                    },
                    error: (error)=>{
                        error.stack = new Error().stack; // Provide a more useful stack trace
                        var _this_encoderError;
                        (_this_encoderError = this.encoderError) !== null && _this_encoderError !== void 0 ? _this_encoderError : this.encoderError = error;
                    }
                });
                this.encoder.configure(encoderConfig);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this.source._connectedTrack);
            this.muxer = this.source._connectedTrack.output._muxer;
            this.encoderInitialized = true;
        })();
    }
    initPcmEncoder() {
        this.isPcmEncoder = true;
        const codec = this.encodingConfig.codec;
        const { dataType, sampleSize, littleEndian } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePcmCodec"])(codec);
        this.outputSampleSize = sampleSize;
        // All these functions receive a float sample as input and map it into the desired format
        switch(sampleSize){
            case 1:
                {
                    if (dataType === 'unsigned') {
                        this.writeOutputValue = (view, byteOffset, value)=>view.setUint8(byteOffset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((value + 1) * 127.5, 0, 255));
                    } else if (dataType === 'signed') {
                        this.writeOutputValue = (view, byteOffset, value)=>{
                            view.setInt8(byteOffset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(Math.round(value * 128), -128, 127));
                        };
                    } else if (dataType === 'ulaw') {
                        this.writeOutputValue = (view, byteOffset, value)=>{
                            const int16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(Math.floor(value * 32767), -32768, 32767);
                            view.setUint8(byteOffset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$pcm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toUlaw"])(int16));
                        };
                    } else if (dataType === 'alaw') {
                        this.writeOutputValue = (view, byteOffset, value)=>{
                            const int16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(Math.floor(value * 32767), -32768, 32767);
                            view.setUint8(byteOffset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$pcm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toAlaw"])(int16));
                        };
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false);
                    }
                }
                ;
                break;
            case 2:
                {
                    if (dataType === 'unsigned') {
                        this.writeOutputValue = (view, byteOffset, value)=>view.setUint16(byteOffset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((value + 1) * 32767.5, 0, 65535), littleEndian);
                    } else if (dataType === 'signed') {
                        this.writeOutputValue = (view, byteOffset, value)=>view.setInt16(byteOffset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(Math.round(value * 32767), -32768, 32767), littleEndian);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false);
                    }
                }
                ;
                break;
            case 3:
                {
                    if (dataType === 'unsigned') {
                        this.writeOutputValue = (view, byteOffset, value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUint24"])(view, byteOffset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((value + 1) * 8388607.5, 0, 16777215), littleEndian);
                    } else if (dataType === 'signed') {
                        this.writeOutputValue = (view, byteOffset, value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setInt24"])(view, byteOffset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(Math.round(value * 8388607), -8388608, 8388607), littleEndian);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false);
                    }
                }
                ;
                break;
            case 4:
                {
                    if (dataType === 'unsigned') {
                        this.writeOutputValue = (view, byteOffset, value)=>view.setUint32(byteOffset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((value + 1) * 2147483647.5, 0, 4294967295), littleEndian);
                    } else if (dataType === 'signed') {
                        this.writeOutputValue = (view, byteOffset, value)=>view.setInt32(byteOffset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(Math.round(value * 2147483647), -2147483648, 2147483647), littleEndian);
                    } else if (dataType === 'float') {
                        this.writeOutputValue = (view, byteOffset, value)=>view.setFloat32(byteOffset, value, littleEndian);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(false);
                    }
                }
                ;
                break;
            case 8:
                {
                    if (dataType === 'float') {
                        this.writeOutputValue = (view, byteOffset, value)=>view.setFloat64(byteOffset, value, littleEndian);
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
    }
    async flushAndClose(forceClose) {
        this.checkForEncoderError();
        if (this.customEncoder) {
            if (!forceClose) {
                void this.customEncoderCallSerializer.call(()=>this.customEncoder.flush());
            }
            await this.customEncoderCallSerializer.call(()=>this.customEncoder.close());
        } else if (this.encoder) {
            if (!forceClose) {
                await this.encoder.flush();
            }
            this.encoder.close();
        }
        this.checkForEncoderError();
    }
    getQueueSize() {
        if (this.customEncoder) {
            return this.customEncoderQueueSize;
        } else if (this.isPcmEncoder) {
            return 0;
        } else {
            var _this_encoder;
            var _this_encoder_encodeQueueSize;
            return (_this_encoder_encodeQueueSize = (_this_encoder = this.encoder) === null || _this_encoder === void 0 ? void 0 : _this_encoder.encodeQueueSize) !== null && _this_encoder_encodeQueueSize !== void 0 ? _this_encoder_encodeQueueSize : 0;
        }
    }
    checkForEncoderError() {
        if (this.encoderError) {
            throw this.encoderError;
        }
    }
    constructor(source, encodingConfig){
        this.source = source;
        this.encodingConfig = encodingConfig;
        this.ensureEncoderPromise = null;
        this.encoderInitialized = false;
        this.encoder = null;
        this.muxer = null;
        this.lastNumberOfChannels = null;
        this.lastSampleRate = null;
        this.isPcmEncoder = false;
        this.outputSampleSize = null;
        this.writeOutputValue = null;
        this.customEncoder = null;
        this.customEncoderCallSerializer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallSerializer"]();
        this.customEncoderQueueSize = 0;
        /**
         * Encoders typically throw their errors "out of band", meaning asynchronously in some other execution context.
         * However, we want to surface these errors to the user within the normal control flow, so they don't go uncaught.
         * So, we keep track of the encoder error and throw it as soon as we get the chance.
         */ this.encoderError = null;
    }
}
class AudioSampleSource extends AudioSource {
    /**
     * Encodes an audio sample and then adds it to the output.
     *
     * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
     * to respect writer and encoder backpressure.
     */ add(audioSample) {
        if (!(audioSample instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioSample"])) {
            throw new TypeError('audioSample must be an AudioSample.');
        }
        return this._encoder.add(audioSample, false);
    }
    /** @internal */ _flushAndClose(forceClose) {
        return this._encoder.flushAndClose(forceClose);
    }
    constructor(encodingConfig){
        validateAudioEncodingConfig(encodingConfig);
        super(encodingConfig.codec);
        this._encoder = new AudioEncoderWrapper(this, encodingConfig);
    }
}
class AudioBufferSource extends AudioSource {
    /**
     * Converts an AudioBuffer to audio samples, encodes them and adds them to the output. The first AudioBuffer will
     * be played at timestamp 0, and any subsequent AudioBuffer will have a timestamp equal to the total duration of
     * all previous AudioBuffers.
     *
     * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
     * to respect writer and encoder backpressure.
     */ async add(audioBuffer) {
        if (!(audioBuffer instanceof AudioBuffer)) {
            throw new TypeError('audioBuffer must be an AudioBuffer.');
        }
        const iterator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioSample"]._fromAudioBuffer(audioBuffer, this._accumulatedTime);
        this._accumulatedTime += audioBuffer.duration;
        for (const audioSample of iterator){
            await this._encoder.add(audioSample, true);
        }
    }
    /** @internal */ _flushAndClose(forceClose) {
        return this._encoder.flushAndClose(forceClose);
    }
    constructor(encodingConfig){
        validateAudioEncodingConfig(encodingConfig);
        super(encodingConfig.codec);
        /** @internal */ this._accumulatedTime = 0;
        this._encoder = new AudioEncoderWrapper(this, encodingConfig);
    }
}
class MediaStreamAudioTrackSource extends AudioSource {
    /** A promise that rejects upon any error within this source. This promise never resolves. */ get errorPromise() {
        this._errorPromiseAccessed = true;
        return this._promiseWithResolvers.promise;
    }
    /** @internal */ async _start() {
        if (!this._errorPromiseAccessed) {
            console.warn('Make sure not to ignore the `errorPromise` field on MediaStreamVideoTrackSource, so that any internal' + ' errors get bubbled up properly.');
        }
        this._abortController = new AbortController();
        if (typeof MediaStreamTrackProcessor !== 'undefined') {
            // Great, MediaStreamTrackProcessor is supported, this is the preferred way of doing things
            let firstAudioDataTimestamp = null;
            const processor = new MediaStreamTrackProcessor({
                track: this._track
            });
            const consumer = new WritableStream({
                write: (audioData)=>{
                    if (firstAudioDataTimestamp === null) {
                        firstAudioDataTimestamp = audioData.timestamp / 1e6;
                        const muxer = this._connectedTrack.output._muxer;
                        if (muxer.firstMediaStreamTimestamp === null) {
                            muxer.firstMediaStreamTimestamp = performance.now() / 1000;
                            this._timestampOffset = -firstAudioDataTimestamp;
                        } else {
                            this._timestampOffset = performance.now() / 1000 - muxer.firstMediaStreamTimestamp - firstAudioDataTimestamp;
                        }
                    }
                    if (this._encoder.getQueueSize() >= 4) {
                        // Drop data if the encoder is overloaded
                        audioData.close();
                        return;
                    }
                    void this._encoder.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioSample"](audioData), true).catch((error)=>{
                        var _this__abortController;
                        (_this__abortController = this._abortController) === null || _this__abortController === void 0 ? void 0 : _this__abortController.abort();
                        this._promiseWithResolvers.reject(error);
                    });
                }
            });
            processor.readable.pipeTo(consumer, {
                signal: this._abortController.signal
            }).catch((error)=>{
                // Handle AbortError silently
                if (error instanceof DOMException && error.name === 'AbortError') return;
                this._promiseWithResolvers.reject(error);
            });
        } else {
            // Let's fall back to an AudioContext approach
            // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this._audioContext = new AudioContext({
                sampleRate: this._track.getSettings().sampleRate
            });
            const sourceNode = this._audioContext.createMediaStreamSource(new MediaStream([
                this._track
            ]));
            this._scriptProcessorNode = this._audioContext.createScriptProcessor(4096);
            if (this._audioContext.state === 'suspended') {
                await this._audioContext.resume();
            }
            sourceNode.connect(this._scriptProcessorNode);
            this._scriptProcessorNode.connect(this._audioContext.destination);
            let audioReceived = false;
            let totalDuration = 0;
            this._scriptProcessorNode.onaudioprocess = (event)=>{
                const iterator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$sample$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioSample"]._fromAudioBuffer(event.inputBuffer, totalDuration);
                totalDuration += event.inputBuffer.duration;
                for (const audioSample of iterator){
                    if (!audioReceived) {
                        audioReceived = true;
                        const muxer = this._connectedTrack.output._muxer;
                        if (muxer.firstMediaStreamTimestamp === null) {
                            muxer.firstMediaStreamTimestamp = performance.now() / 1000;
                        } else {
                            this._timestampOffset = performance.now() / 1000 - muxer.firstMediaStreamTimestamp;
                        }
                    }
                    if (this._encoder.getQueueSize() >= 4) {
                        // Drop data if the encoder is overloaded
                        audioSample.close();
                        continue;
                    }
                    void this._encoder.add(audioSample, true).catch((error)=>{
                        void this._audioContext.suspend();
                        this._promiseWithResolvers.reject(error);
                    });
                }
            };
        }
    }
    /** @internal */ async _flushAndClose(forceClose) {
        if (this._abortController) {
            this._abortController.abort();
            this._abortController = null;
        }
        if (this._audioContext) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this._scriptProcessorNode);
            this._scriptProcessorNode.disconnect();
            await this._audioContext.suspend();
        }
        await this._encoder.flushAndClose(forceClose);
    }
    constructor(track, encodingConfig){
        if (!(track instanceof MediaStreamTrack) || track.kind !== 'audio') {
            throw new TypeError('track must be an audio MediaStreamTrack.');
        }
        validateAudioEncodingConfig(encodingConfig);
        super(encodingConfig.codec);
        /** @internal */ this._abortController = null;
        /** @internal */ this._audioContext = null;
        /** @internal */ this._scriptProcessorNode = null; // Deprecated but goated
        /** @internal */ this._promiseWithResolvers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["promiseWithResolvers"])();
        /** @internal */ this._errorPromiseAccessed = false;
        this._encoder = new AudioEncoderWrapper(this, encodingConfig);
        this._track = track;
    }
}
const mediaStreamTrackProcessorWorkerCode = ()=>{
    const sendMessage = (message, transfer)=>{
        if (transfer) {
            self.postMessage(message, {
                transfer
            });
        } else {
            self.postMessage(message);
        }
    };
    // Immediately send a message to the main thread, letting them know of the support
    sendMessage({
        type: 'support',
        supported: typeof MediaStreamTrackProcessor !== 'undefined'
    });
    const abortControllers = new Map();
    const stoppedTracks = new Set();
    self.addEventListener('message', (event)=>{
        const message = event.data;
        switch(message.type){
            case 'videoTrack':
                {
                    const processor = new MediaStreamTrackProcessor({
                        track: message.track
                    });
                    const consumer = new WritableStream({
                        write: (videoFrame)=>{
                            if (stoppedTracks.has(message.trackId)) {
                                videoFrame.close();
                                return;
                            }
                            // Send it to the main thread
                            sendMessage({
                                type: 'videoFrame',
                                trackId: message.trackId,
                                videoFrame
                            }, [
                                videoFrame
                            ]);
                        }
                    });
                    const abortController = new AbortController();
                    abortControllers.set(message.trackId, abortController);
                    processor.readable.pipeTo(consumer, {
                        signal: abortController.signal
                    }).catch((error)=>{
                        // Handle AbortError silently
                        if (error instanceof DOMException && error.name === 'AbortError') return;
                        sendMessage({
                            type: 'error',
                            trackId: message.trackId,
                            error
                        });
                    });
                }
                ;
                break;
            case 'stopTrack':
                {
                    const abortController = abortControllers.get(message.trackId);
                    if (abortController) {
                        abortController.abort();
                        abortControllers.delete(message.trackId);
                    }
                    stoppedTracks.add(message.trackId);
                    sendMessage({
                        type: 'trackStopped',
                        trackId: message.trackId
                    });
                }
                ;
                break;
            default:
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNever"])(message);
        }
    });
};
let nextMediaStreamTrackProcessorWorkerId = 0;
let mediaStreamTrackProcessorWorker = null;
const initMediaStreamTrackProcessorWorker = ()=>{
    const blob = new Blob([
        "(".concat(mediaStreamTrackProcessorWorkerCode.toString(), ")()")
    ], {
        type: 'application/javascript'
    });
    const url = URL.createObjectURL(blob);
    mediaStreamTrackProcessorWorker = new Worker(url);
};
let mediaStreamTrackProcessorIsSupportedInWorkerCache = null;
const mediaStreamTrackProcessorIsSupportedInWorker = async ()=>{
    if (mediaStreamTrackProcessorIsSupportedInWorkerCache !== null) {
        return mediaStreamTrackProcessorIsSupportedInWorkerCache;
    }
    if (!mediaStreamTrackProcessorWorker) {
        initMediaStreamTrackProcessorWorker();
    }
    return new Promise((resolve)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(mediaStreamTrackProcessorWorker);
        const listener = (event)=>{
            const message = event.data;
            if (message.type === 'support') {
                mediaStreamTrackProcessorIsSupportedInWorkerCache = message.supported;
                mediaStreamTrackProcessorWorker.removeEventListener('message', listener);
                resolve(message.supported);
            }
        };
        mediaStreamTrackProcessorWorker.addEventListener('message', listener);
    });
};
const sendMessageToMediaStreamTrackProcessorWorker = (message, transfer)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(mediaStreamTrackProcessorWorker);
    if (transfer) {
        mediaStreamTrackProcessorWorker.postMessage(message, transfer);
    } else {
        mediaStreamTrackProcessorWorker.postMessage(message);
    }
};
class SubtitleSource extends MediaSource {
    constructor(codec){
        super();
        /** @internal */ this._connectedTrack = null;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBTITLE_CODECS"].includes(codec)) {
            throw new TypeError("Invalid subtitle codec '".concat(codec, "'. Must be one of: ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBTITLE_CODECS"].join(', '), "."));
        }
        this._codec = codec;
    }
}
class TextSubtitleSource extends SubtitleSource {
    /**
     * Parses the subtitle text according to the specified codec and adds it to the output track. You don't have to
     * add the entire subtitle file at once here; you can provide it in chunks.
     *
     * @returns A Promise that resolves once the output is ready to receive more samples. You should await this Promise
     * to respect writer and encoder backpressure.
     */ add(text) {
        if (typeof text !== 'string') {
            throw new TypeError('text must be a string.');
        }
        this._ensureValidAdd();
        this._parser.parse(text);
        return this._connectedTrack.output._muxer.mutex.currentPromise;
    }
    constructor(codec){
        super(codec);
        this._parser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$subtitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubtitleParser"]({
            codec,
            output: (cue, metadata)=>{
                var _this__connectedTrack;
                return (_this__connectedTrack = this._connectedTrack) === null || _this__connectedTrack === void 0 ? void 0 : _this__connectedTrack.output._muxer.addSubtitleCue(this._connectedTrack, cue, metadata);
            }
        });
    }
}
}),
"[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/output.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*!
 * Copyright (c) 2025-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */ __turbopack_context__.s({
    "ALL_TRACK_TYPES": ()=>ALL_TRACK_TYPES,
    "Output": ()=>Output
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$output$2d$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/output-format.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$media$2d$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/media-source.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/target.js [app-client] (ecmascript)");
;
;
;
;
const ALL_TRACK_TYPES = [
    'video',
    'audio',
    'subtitle'
];
const validateBaseTrackMetadata = (metadata)=>{
    if (!metadata || typeof metadata !== 'object') {
        throw new TypeError('metadata must be an object.');
    }
    if (metadata.languageCode !== undefined && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIso639Dash2LanguageCode"])(metadata.languageCode)) {
        throw new TypeError('metadata.languageCode must be a three-letter, ISO 639-2/T language code.');
    }
};
class Output {
    /** Adds a video track to the output with the given source. Must be called before output is started. */ addVideoTrack(source) {
        let metadata = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(source instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$media$2d$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoSource"])) {
            throw new TypeError('source must be a VideoSource.');
        }
        validateBaseTrackMetadata(metadata);
        if (metadata.rotation !== undefined && ![
            0,
            90,
            180,
            270
        ].includes(metadata.rotation)) {
            throw new TypeError("Invalid video rotation: ".concat(metadata.rotation, ". Has to be 0, 90, 180 or 270."));
        }
        if (!this.format.supportsVideoRotationMetadata && metadata.rotation) {
            throw new Error("".concat(this.format._name, " does not support video rotation metadata."));
        }
        if (metadata.frameRate !== undefined && (!Number.isFinite(metadata.frameRate) || metadata.frameRate <= 0)) {
            throw new TypeError("Invalid video frame rate: ".concat(metadata.frameRate, ". Must be a positive number."));
        }
        this._addTrack('video', source, metadata);
    }
    /** Adds an audio track to the output with the given source. Must be called before output is started. */ addAudioTrack(source) {
        let metadata = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(source instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$media$2d$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioSource"])) {
            throw new TypeError('source must be an AudioSource.');
        }
        validateBaseTrackMetadata(metadata);
        this._addTrack('audio', source, metadata);
    }
    /** Adds a subtitle track to the output with the given source. Must be called before output is started. */ addSubtitleTrack(source) {
        let metadata = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(source instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$media$2d$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubtitleSource"])) {
            throw new TypeError('source must be a SubtitleSource.');
        }
        validateBaseTrackMetadata(metadata);
        this._addTrack('subtitle', source, metadata);
    }
    /** @internal */ _addTrack(type, source, metadata) {
        if (this.state !== 'pending') {
            throw new Error('Cannot add track after output has been started or canceled.');
        }
        if (source._connectedTrack) {
            throw new Error('Source is already used for a track.');
        }
        // Verify maximum track count constraints
        const supportedTrackCounts = this.format.getSupportedTrackCounts();
        const presentTracksOfThisType = this._tracks.reduce((count, track)=>count + (track.type === type ? 1 : 0), 0);
        const maxCount = supportedTrackCounts[type].max;
        if (presentTracksOfThisType === maxCount) {
            throw new Error(maxCount === 0 ? "".concat(this.format._name, " does not support ").concat(type, " tracks.") : "".concat(this.format._name, " does not support more than ").concat(maxCount, " ").concat(type, " track") + "".concat(maxCount === 1 ? '' : 's', "."));
        }
        const maxTotalCount = supportedTrackCounts.total.max;
        if (this._tracks.length === maxTotalCount) {
            throw new Error("".concat(this.format._name, " does not support more than ").concat(maxTotalCount, " tracks") + "".concat(maxTotalCount === 1 ? '' : 's', " in total."));
        }
        const track = {
            id: this._tracks.length + 1,
            output: this,
            type,
            source: source,
            metadata
        };
        if (track.type === 'video') {
            const supportedVideoCodecs = this.format.getSupportedVideoCodecs();
            if (supportedVideoCodecs.length === 0) {
                throw new Error("".concat(this.format._name, " does not support video tracks.") + this.format._codecUnsupportedHint(track.source._codec));
            } else if (!supportedVideoCodecs.includes(track.source._codec)) {
                throw new Error("Codec '".concat(track.source._codec, "' cannot be contained within ").concat(this.format._name, ". Supported") + " video codecs are: ".concat(supportedVideoCodecs.map((codec)=>"'".concat(codec, "'")).join(', '), ".") + this.format._codecUnsupportedHint(track.source._codec));
            }
        } else if (track.type === 'audio') {
            const supportedAudioCodecs = this.format.getSupportedAudioCodecs();
            if (supportedAudioCodecs.length === 0) {
                throw new Error("".concat(this.format._name, " does not support audio tracks.") + this.format._codecUnsupportedHint(track.source._codec));
            } else if (!supportedAudioCodecs.includes(track.source._codec)) {
                throw new Error("Codec '".concat(track.source._codec, "' cannot be contained within ").concat(this.format._name, ". Supported") + " audio codecs are: ".concat(supportedAudioCodecs.map((codec)=>"'".concat(codec, "'")).join(', '), ".") + this.format._codecUnsupportedHint(track.source._codec));
            }
        } else if (track.type === 'subtitle') {
            const supportedSubtitleCodecs = this.format.getSupportedSubtitleCodecs();
            if (supportedSubtitleCodecs.length === 0) {
                throw new Error("".concat(this.format._name, " does not support subtitle tracks.") + this.format._codecUnsupportedHint(track.source._codec));
            } else if (!supportedSubtitleCodecs.includes(track.source._codec)) {
                throw new Error("Codec '".concat(track.source._codec, "' cannot be contained within ").concat(this.format._name, ". Supported") + " subtitle codecs are: ".concat(supportedSubtitleCodecs.map((codec)=>"'".concat(codec, "'")).join(', '), ".") + this.format._codecUnsupportedHint(track.source._codec));
            }
        }
        this._tracks.push(track);
        source._connectedTrack = track;
    }
    /**
     * Starts the creation of the output file. This method should be called after all tracks have been added. Only after
     * the output has started can media samples be added to the tracks.
     *
     * @returns A promise that resolves when the output has successfully started and is ready to receive media samples.
     */ async start() {
        // Verify minimum track count constraints
        const supportedTrackCounts = this.format.getSupportedTrackCounts();
        for (const trackType of ALL_TRACK_TYPES){
            const presentTracksOfThisType = this._tracks.reduce((count, track)=>count + (track.type === trackType ? 1 : 0), 0);
            const minCount = supportedTrackCounts[trackType].min;
            if (presentTracksOfThisType < minCount) {
                throw new Error(minCount === supportedTrackCounts[trackType].max ? "".concat(this.format._name, " requires exactly ").concat(minCount, " ").concat(trackType) + " track".concat(minCount === 1 ? '' : 's', ".") : "".concat(this.format._name, " requires at least ").concat(minCount, " ").concat(trackType) + " track".concat(minCount === 1 ? '' : 's', "."));
            }
        }
        const totalMinCount = supportedTrackCounts.total.min;
        if (this._tracks.length < totalMinCount) {
            throw new Error(totalMinCount === supportedTrackCounts.total.max ? "".concat(this.format._name, " requires exactly ").concat(totalMinCount, " track") + "".concat(totalMinCount === 1 ? '' : 's', ".") : "".concat(this.format._name, " requires at least ").concat(totalMinCount, " track") + "".concat(totalMinCount === 1 ? '' : 's', "."));
        }
        if (this.state === 'canceled') {
            throw new Error('Output has been canceled.');
        }
        if (this._startPromise) {
            console.warn('Output has already been started.');
            return this._startPromise;
        }
        return this._startPromise = (async ()=>{
            this.state = 'started';
            this._writer.start();
            const release = await this._mutex.acquire();
            await this._muxer.start();
            const promises = this._tracks.map((track)=>track.source._start());
            await Promise.all(promises);
            release();
        })();
    }
    /**
     * Resolves with the full MIME type of the output file, including track codecs.
     *
     * The returned promise will resolve only once the precise codec strings of all tracks are known.
     */ getMimeType() {
        return this._muxer.getMimeType();
    }
    /**
     * Cancels the creation of the output file, releasing internal resources like encoders and preventing further
     * samples from being added.
     *
     * @returns A promise that resolves once all internal resources have been released.
     */ async cancel() {
        if (this._cancelPromise) {
            console.warn('Output has already been canceled.');
            return this._cancelPromise;
        } else if (this.state === 'finalizing' || this.state === 'finalized') {
            console.warn('Output has already been finalized.');
            return;
        }
        return this._cancelPromise = (async ()=>{
            this.state = 'canceled';
            const release = await this._mutex.acquire();
            const promises = this._tracks.map((x)=>x.source._flushOrWaitForOngoingClose(true)); // Force close
            await Promise.all(promises);
            await this._writer.close();
            release();
        })();
    }
    /**
     * Finalizes the output file. This method must be called after all media samples across all tracks have been added.
     * Once the Promise returned by this method completes, the output file is ready.
     */ async finalize() {
        if (this.state === 'pending') {
            throw new Error('Cannot finalize before starting.');
        }
        if (this.state === 'canceled') {
            throw new Error('Cannot finalize after canceling.');
        }
        if (this._finalizePromise) {
            console.warn('Output has already been finalized.');
            return this._finalizePromise;
        }
        return this._finalizePromise = (async ()=>{
            this.state = 'finalizing';
            const release = await this._mutex.acquire();
            const promises = this._tracks.map((x)=>x.source._flushOrWaitForOngoingClose(false));
            await Promise.all(promises);
            await this._muxer.finalize();
            await this._writer.flush();
            await this._writer.finalize();
            this.state = 'finalized';
            release();
        })();
    }
    constructor(options){
        /** The current state of the output. */ this.state = 'pending';
        /** @internal */ this._tracks = [];
        /** @internal */ this._startPromise = null;
        /** @internal */ this._cancelPromise = null;
        /** @internal */ this._finalizePromise = null;
        /** @internal */ this._mutex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncMutex"]();
        if (!options || typeof options !== 'object') {
            throw new TypeError('options must be an object.');
        }
        if (!(options.format instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$output$2d$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutputFormat"])) {
            throw new TypeError('options.format must be an OutputFormat.');
        }
        if (!(options.target instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Target"])) {
            throw new TypeError('options.target must be a Target.');
        }
        if (options.target._output) {
            throw new Error('Target is already used for another output.');
        }
        options.target._output = this;
        this.format = options.format;
        this.target = options.target;
        this._writer = options.target._createWriter();
        this._muxer = options.format._createMuxer(this);
    }
}
}),
}]);

//# sourceMappingURL=63989_mediabunny_dist_modules_src_23eb2e3e._.js.map