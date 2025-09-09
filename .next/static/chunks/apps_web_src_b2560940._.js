(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/apps/web/src/lib/mediabunny-utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "extractTimelineAudio": ()=>extractTimelineAudio,
    "generateThumbnail": ()=>generateThumbnail,
    "getVideoInfo": ()=>getVideoInfo,
    "initFFmpeg": ()=>initFFmpeg
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$classes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/classes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/media-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/input-format.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/source.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$media$2d$sink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/media-sink.js [app-client] (ecmascript)");
;
;
;
;
let ffmpeg = null;
const initFFmpeg = async ()=>{
    if (ffmpeg) return ffmpeg;
    ffmpeg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$classes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFmpeg"]();
    await ffmpeg.load(); // Use default config
    return ffmpeg;
};
async function generateThumbnail(param) {
    let { videoFile, timeInSeconds } = param;
    const input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"]({
        source: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlobSource"](videoFile),
        formats: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_FORMATS"]
    });
    const videoTrack = await input.getPrimaryVideoTrack();
    if (!videoTrack) {
        throw new Error("No video track found in the file");
    }
    // Check if we can decode this video
    const canDecode = await videoTrack.canDecode();
    if (!canDecode) {
        throw new Error("Video codec not supported for decoding");
    }
    const sink = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$media$2d$sink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoSampleSink"](videoTrack);
    const frame = await sink.getSample(timeInSeconds);
    if (!frame) {
        throw new Error("Could not get frame at specified time");
    }
    const canvas = document.createElement("canvas");
    canvas.width = 320;
    canvas.height = 240;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        throw new Error("Could not get canvas context");
    }
    frame.draw(ctx, 0, 0, 320, 240);
    return new Promise((resolve, reject)=>{
        canvas.toBlob((blob)=>{
            if (blob) {
                resolve(URL.createObjectURL(blob));
            } else {
                reject(new Error("Failed to create thumbnail blob"));
            }
        }, "image/jpeg", 0.8);
    });
}
async function getVideoInfo(param) {
    let { videoFile } = param;
    const input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"]({
        source: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlobSource"](videoFile),
        formats: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_FORMATS"]
    });
    const duration = await input.computeDuration();
    const videoTrack = await input.getPrimaryVideoTrack();
    if (!videoTrack) {
        throw new Error("No video track found in the file");
    }
    // Get frame rate from packet statistics
    const packetStats = await videoTrack.computePacketStats(100);
    const fps = packetStats.averagePacketRate;
    return {
        duration,
        width: videoTrack.displayWidth,
        height: videoTrack.displayHeight,
        fps
    };
}
const extractTimelineAudio = async (onProgress)=>{
    // Create fresh FFmpeg instance for this operation
    const ffmpeg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$classes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FFmpeg"]();
    try {
        await ffmpeg.load();
    } catch (error) {
        console.error("Failed to load fresh FFmpeg instance:", error);
        throw new Error("Unable to initialize audio processing. Please try again.");
    }
    const timeline = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimelineStore"].getState();
    const mediaStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaStore"].getState();
    const tracks = timeline.tracks;
    const totalDuration = timeline.getTotalDuration();
    if (totalDuration === 0) {
        const emptyAudioData = new ArrayBuffer(44);
        return new Blob([
            emptyAudioData
        ], {
            type: "audio/wav"
        });
    }
    if (onProgress) {
        ffmpeg.on("progress", (param)=>{
            let { progress } = param;
            onProgress(progress * 100);
        });
    }
    const audioElements = [];
    for (const track of tracks){
        if (track.muted) continue;
        for (const element of track.elements){
            if (element.type === "media") {
                const mediaFile = mediaStore.mediaFiles.find((m)=>m.id === element.mediaId);
                if (!mediaFile) continue;
                if (mediaFile.type === "video" || mediaFile.type === "audio") {
                    audioElements.push({
                        file: mediaFile.file,
                        startTime: element.startTime,
                        duration: element.duration,
                        trimStart: element.trimStart,
                        trimEnd: element.trimEnd,
                        trackMuted: track.muted || false
                    });
                }
            }
        }
    }
    if (audioElements.length === 0) {
        // Return silent audio if no audio elements
        const silentDuration = Math.max(1, totalDuration); // At least 1 second
        try {
            const silentAudio = await generateSilentAudio(silentDuration);
            return silentAudio;
        } catch (error) {
            console.error("Failed to generate silent audio:", error);
            throw new Error("Unable to generate audio for empty timeline.");
        }
    }
    // Create a complex filter to mix all audio sources
    const inputFiles = [];
    const filterInputs = [];
    try {
        for(let i = 0; i < audioElements.length; i++){
            const element = audioElements[i];
            const inputName = "input_".concat(i, ".").concat(element.file.name.split(".").pop());
            inputFiles.push(inputName);
            try {
                await ffmpeg.writeFile(inputName, new Uint8Array(await element.file.arrayBuffer()));
            } catch (error) {
                console.error("Failed to write file ".concat(element.file.name, ":"), error);
                throw new Error("Unable to process file: ".concat(element.file.name, ". The file may be corrupted or in an unsupported format."));
            }
            const actualStart = element.trimStart;
            const actualDuration = element.duration - element.trimStart - element.trimEnd;
            const filterName = "audio_".concat(i);
            filterInputs.push("[".concat(i, ":a]atrim=start=").concat(actualStart, ":duration=").concat(actualDuration, ",asetpts=PTS-STARTPTS,adelay=").concat(element.startTime * 1000, "|").concat(element.startTime * 1000, "[").concat(filterName, "]"));
        }
        const mixFilter = audioElements.length === 1 ? "[audio_0]aresample=44100,aformat=sample_fmts=s16:channel_layouts=stereo[out]" : "".concat(filterInputs.map((_, i)=>"[audio_".concat(i, "]")).join(""), "amix=inputs=").concat(audioElements.length, ":duration=longest:dropout_transition=2,aresample=44100,aformat=sample_fmts=s16:channel_layouts=stereo[out]");
        const complexFilter = [
            ...filterInputs,
            mixFilter
        ].join(";");
        const outputName = "timeline_audio.wav";
        const ffmpegArgs = [
            ...inputFiles.flatMap((name)=>[
                    "-i",
                    name
                ]),
            "-filter_complex",
            complexFilter,
            "-map",
            "[out]",
            "-t",
            totalDuration.toString(),
            "-c:a",
            "pcm_s16le",
            "-ar",
            "44100",
            outputName
        ];
        try {
            await ffmpeg.exec(ffmpegArgs);
        } catch (error) {
            console.error("FFmpeg execution failed:", error);
            throw new Error("Audio processing failed. Some audio files may be corrupted or incompatible.");
        }
        const data = await ffmpeg.readFile(outputName);
        const blob = new Blob([
            data
        ], {
            type: "audio/wav"
        });
        return blob;
    } catch (error) {
        for (const inputFile of inputFiles){
            try {
                await ffmpeg.deleteFile(inputFile);
            } catch (cleanupError) {
                console.warn("Failed to cleanup file ".concat(inputFile, ":"), cleanupError);
            }
        }
        try {
            await ffmpeg.deleteFile("timeline_audio.wav");
        } catch (cleanupError) {
            console.warn("Failed to cleanup output file:", cleanupError);
        }
        throw error;
    } finally{
        for (const inputFile of inputFiles){
            try {
                await ffmpeg.deleteFile(inputFile);
            } catch (cleanupError) {}
        }
        try {
            await ffmpeg.deleteFile("timeline_audio.wav");
        } catch (cleanupError) {}
    }
};
const generateSilentAudio = async (durationSeconds)=>{
    const ffmpeg = await initFFmpeg();
    const outputName = "silent.wav";
    try {
        await ffmpeg.exec([
            "-f",
            "lavfi",
            "-i",
            "anullsrc=channel_layout=stereo:sample_rate=44100",
            "-t",
            durationSeconds.toString(),
            "-c:a",
            "pcm_s16le",
            outputName
        ]);
        const data = await ffmpeg.readFile(outputName);
        const blob = new Blob([
            data
        ], {
            type: "audio/wav"
        });
        return blob;
    } catch (error) {
        console.error("Failed to generate silent audio:", error);
        throw error;
    } finally{
        try {
            await ffmpeg.deleteFile(outputName);
        } catch (cleanupError) {
        // Silent cleanup
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/lib/media-processing.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "processMediaFiles": ()=>processMediaFiles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/sonner@1.7.4+6dbf9a050bc9aadb/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/media-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mediabunny$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/mediabunny-utils.ts [app-client] (ecmascript)");
;
;
;
async function processMediaFiles(files, onProgress) {
    const fileArray = Array.from(files);
    const processedItems = [];
    const total = fileArray.length;
    let completed = 0;
    for (const file of fileArray){
        const fileType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFileType"])(file);
        if (!fileType) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Unsupported file type: ".concat(file.name));
            continue;
        }
        const url = URL.createObjectURL(file);
        let thumbnailUrl;
        let duration;
        let width;
        let height;
        let fps;
        try {
            if (fileType === "image") {
                const dimensions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageDimensions"])(file);
                width = dimensions.width;
                height = dimensions.height;
            } else if (fileType === "video") {
                try {
                    const videoInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mediabunny$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVideoInfo"])({
                        videoFile: file
                    });
                    duration = videoInfo.duration;
                    width = videoInfo.width;
                    height = videoInfo.height;
                    fps = videoInfo.fps;
                    thumbnailUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mediabunny$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateThumbnail"])({
                        videoFile: file,
                        timeInSeconds: 1
                    });
                } catch (error) {
                    console.warn("Video processing failed", error);
                }
            } else if (fileType === "audio") {
                // For audio, we don't set width/height/fps (they'll be undefined)
                duration = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaDuration"])(file);
            }
            processedItems.push({
                name: file.name,
                type: fileType,
                file,
                url,
                thumbnailUrl,
                duration,
                width,
                height,
                fps
            });
            await new Promise((resolve)=>setTimeout(resolve, 0));
            completed += 1;
            if (onProgress) {
                const percent = Math.round(completed / total * 100);
                onProgress(percent);
            }
        } catch (error) {
            console.error("Error processing file:", file.name, error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to process ".concat(file.name));
            URL.revokeObjectURL(url); // Clean up on error
        }
    }
    return processedItems;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/lib/iconify-api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ICONIFY_HOSTS": ()=>ICONIFY_HOSTS,
    "POPULAR_COLLECTIONS": ()=>POPULAR_COLLECTIONS,
    "buildIconSvgUrl": ()=>buildIconSvgUrl,
    "downloadSvgAsText": ()=>downloadSvgAsText,
    "getCategoriesFromCollections": ()=>getCategoriesFromCollections,
    "getCollection": ()=>getCollection,
    "getCollections": ()=>getCollections,
    "getIconSvgUrl": ()=>getIconSvgUrl,
    "searchIcons": ()=>searchIcons,
    "svgToFile": ()=>svgToFile
});
const ICONIFY_HOSTS = [
    "https://api.iconify.design",
    "https://api.simplesvg.com",
    "https://api.unisvg.com"
];
let currentHost = ICONIFY_HOSTS[0];
async function fetchWithFallback(path) {
    for (const host of ICONIFY_HOSTS){
        try {
            const response = await fetch("".concat(host).concat(path), {
                signal: AbortSignal.timeout(2000)
            });
            if (response.ok) {
                currentHost = host;
                return response;
            }
        } catch (error) {
            console.warn("Failed to fetch from ".concat(host, ":"), error);
        }
    }
    throw new Error("All API hosts failed");
}
async function getCollections(category) {
    try {
        const response = await fetchWithFallback("/collections?pretty=1");
        const data = await response.json();
        if (category) {
            const filtered = Object.fromEntries(Object.entries(data).filter((param)=>{
                let [_key, info] = param;
                return info.category === category;
            }));
            return filtered;
        }
        return data;
    } catch (error) {
        console.error("Failed to fetch collections:", error);
        return {};
    }
}
async function getCollection(prefix) {
    try {
        const response = await fetchWithFallback("/collection?prefix=".concat(prefix, "&pretty=1"));
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch collection ".concat(prefix, ":"), error);
        return null;
    }
}
async function searchIcons(query) {
    let limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 64, prefixes = arguments.length > 2 ? arguments[2] : void 0, category = arguments.length > 3 ? arguments[3] : void 0;
    const params = new URLSearchParams({
        query,
        limit: limit.toString(),
        pretty: "1"
    });
    if (prefixes === null || prefixes === void 0 ? void 0 : prefixes.length) {
        params.append("prefixes", prefixes.join(","));
    }
    if (category) {
        params.append("category", category);
    }
    try {
        const response = await fetchWithFallback("/search?".concat(params));
        return await response.json();
    } catch (error) {
        console.error("Failed to search icons:", error);
        return {
            icons: [],
            total: 0,
            limit,
            start: 0,
            collections: {}
        };
    }
}
function buildIconSvgUrl(host, iconName, params) {
    const [prefix, name] = iconName.includes(":") ? iconName.split(":") : [
        "",
        iconName
    ];
    if (!prefix || !name) {
        throw new Error('Invalid icon name format. Expected "prefix:name"');
    }
    const urlParams = new URLSearchParams();
    if (params === null || params === void 0 ? void 0 : params.color) {
        urlParams.append("color", params.color.replace("#", "%23"));
    }
    if (params === null || params === void 0 ? void 0 : params.width) {
        urlParams.append("width", params.width.toString());
    }
    if (params === null || params === void 0 ? void 0 : params.height) {
        urlParams.append("height", params.height.toString());
    }
    if (params === null || params === void 0 ? void 0 : params.flip) {
        urlParams.append("flip", params.flip);
    }
    if (params === null || params === void 0 ? void 0 : params.rotate) {
        urlParams.append("rotate", params.rotate.toString());
    }
    const queryString = urlParams.toString();
    return "".concat(host, "/").concat(prefix, "/").concat(name, ".svg").concat(queryString ? "?" + queryString : "");
}
function getIconSvgUrl(iconName, params) {
    return buildIconSvgUrl(currentHost, iconName, params);
}
async function downloadSvgAsText(iconName, params) {
    const url = getIconSvgUrl(iconName, params);
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to download SVG: ".concat(response.statusText));
    }
    return await response.text();
}
function svgToFile(svgText, fileName) {
    const blob = new Blob([
        svgText
    ], {
        type: "image/svg+xml"
    });
    return new File([
        blob
    ], fileName, {
        type: "image/svg+xml"
    });
}
const POPULAR_COLLECTIONS = {
    general: [
        {
            prefix: "mdi",
            name: "Material Design Icons"
        },
        {
            prefix: "ic",
            name: "Google Material Icons"
        },
        {
            prefix: "ph",
            name: "Phosphor"
        },
        {
            prefix: "heroicons",
            name: "Heroicons"
        },
        {
            prefix: "lucide",
            name: "Lucide"
        },
        {
            prefix: "tabler",
            name: "Tabler Icons"
        },
        {
            prefix: "fe",
            name: "Feather Icons"
        },
        {
            prefix: "bi",
            name: "Bootstrap Icons"
        }
    ],
    brands: [
        {
            prefix: "simple-icons",
            name: "Simple Icons"
        },
        {
            prefix: "logos",
            name: "SVG Logos"
        },
        {
            prefix: "skill-icons",
            name: "Skill Icons"
        },
        {
            prefix: "devicon",
            name: "Devicon"
        },
        {
            prefix: "fa-brands",
            name: "Font Awesome Brands"
        }
    ],
    emoji: [
        {
            prefix: "noto",
            name: "Noto Emoji"
        },
        {
            prefix: "twemoji",
            name: "Twemoji"
        },
        {
            prefix: "fluent-emoji",
            name: "Fluent Emoji"
        },
        {
            prefix: "fluent-emoji-flat",
            name: "Fluent Emoji Flat"
        },
        {
            prefix: "emojione",
            name: "EmojiOne"
        },
        {
            prefix: "openmoji",
            name: "OpenMoji"
        }
    ]
};
function getCategoriesFromCollections(collections) {
    const categories = new Set();
    Object.values(collections).forEach((collection)=>{
        if (collection.category) {
            categories.add(collection.category);
        }
    });
    return Array.from(categories).sort();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/lib/zk-encryption.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * True zero-knowledge encryption utilities
 * Keys are generated randomly in the browser and never derived from server secrets
 */ __turbopack_context__.s({
    "arrayBufferToBase64": ()=>arrayBufferToBase64,
    "base64ToArrayBuffer": ()=>base64ToArrayBuffer,
    "encryptWithRandomKey": ()=>encryptWithRandomKey
});
async function encryptWithRandomKey(data) {
    // Generate a truly random 256-bit key
    const key = crypto.getRandomValues(new Uint8Array(32));
    // Generate random IV
    const iv = crypto.getRandomValues(new Uint8Array(12));
    // Import the key for encryption
    const cryptoKey = await crypto.subtle.importKey("raw", key, {
        name: "AES-GCM"
    }, false, [
        "encrypt"
    ]);
    // Encrypt the data
    const encryptedResult = await crypto.subtle.encrypt({
        name: "AES-GCM",
        iv
    }, cryptoKey, data);
    // For AES-GCM, we need to append the authentication tag
    // The encrypted result contains both ciphertext and tag
    return {
        encryptedData: encryptedResult,
        key: key.buffer,
        iv: iv.buffer
    };
}
function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for(let i = 0; i < bytes.byteLength; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}
function base64ToArrayBuffer(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i++){
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/lib/time.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Time-related utility functions
__turbopack_context__.s({
    "formatTimeCode": ()=>formatTimeCode,
    "guessTimeCodeFormat": ()=>guessTimeCodeFormat,
    "parseTimeCode": ()=>parseTimeCode
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-client] (ecmascript)");
;
const formatTimeCode = function(timeInSeconds) {
    let format = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "HH:MM:SS:CS", fps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FPS"];
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor(timeInSeconds % 3600 / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const centiseconds = Math.floor(timeInSeconds % 1 * 100);
    const frames = Math.floor(timeInSeconds % 1 * fps);
    switch(format){
        case "MM:SS":
            return "".concat(minutes.toString().padStart(2, "0"), ":").concat(seconds.toString().padStart(2, "0"));
        case "HH:MM:SS":
            return "".concat(hours.toString().padStart(2, "0"), ":").concat(minutes.toString().padStart(2, "0"), ":").concat(seconds.toString().padStart(2, "0"));
        case "HH:MM:SS:CS":
            return "".concat(hours.toString().padStart(2, "0"), ":").concat(minutes.toString().padStart(2, "0"), ":").concat(seconds.toString().padStart(2, "0"), ":").concat(centiseconds.toString().padStart(2, "0"));
        case "HH:MM:SS:FF":
            return "".concat(hours.toString().padStart(2, "0"), ":").concat(minutes.toString().padStart(2, "0"), ":").concat(seconds.toString().padStart(2, "0"), ":").concat(frames.toString().padStart(2, "0"));
    }
};
const parseTimeCode = function(timeCode) {
    let format = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "HH:MM:SS:CS", fps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FPS"];
    if (!timeCode || typeof timeCode !== "string") return null;
    // Remove any extra whitespace
    const cleanTimeCode = timeCode.trim();
    try {
        switch(format){
            case "MM:SS":
                {
                    const parts = cleanTimeCode.split(":");
                    if (parts.length !== 2) return null;
                    const [minutes, seconds] = parts.map((part)=>parseInt(part, 10));
                    if (isNaN(minutes) || isNaN(seconds)) return null;
                    if (minutes < 0 || seconds < 0 || seconds >= 60) return null;
                    return minutes * 60 + seconds;
                }
            case "HH:MM:SS":
                {
                    const parts = cleanTimeCode.split(":");
                    if (parts.length !== 3) return null;
                    const [hours, minutes, seconds] = parts.map((part)=>parseInt(part, 10));
                    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) return null;
                    if (hours < 0 || minutes < 0 || seconds < 0 || minutes >= 60 || seconds >= 60) return null;
                    return hours * 3600 + minutes * 60 + seconds;
                }
            case "HH:MM:SS:CS":
                {
                    const parts = cleanTimeCode.split(":");
                    if (parts.length !== 4) return null;
                    const [hours, minutes, seconds, centiseconds] = parts.map((part)=>parseInt(part, 10));
                    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || isNaN(centiseconds)) return null;
                    if (hours < 0 || minutes < 0 || seconds < 0 || centiseconds < 0 || minutes >= 60 || seconds >= 60 || centiseconds >= 100) return null;
                    return hours * 3600 + minutes * 60 + seconds + centiseconds / 100;
                }
            case "HH:MM:SS:FF":
                {
                    const parts = cleanTimeCode.split(":");
                    if (parts.length !== 4) return null;
                    const [hours, minutes, seconds, frames] = parts.map((part)=>parseInt(part, 10));
                    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || isNaN(frames)) return null;
                    if (hours < 0 || minutes < 0 || seconds < 0 || frames < 0 || minutes >= 60 || seconds >= 60 || frames >= fps) return null;
                    return hours * 3600 + minutes * 60 + seconds + frames / fps;
                }
        }
    } catch (e) {
        return null;
    }
    return null;
};
const guessTimeCodeFormat = (timeCode)=>{
    if (!timeCode || typeof timeCode !== "string") return null;
    const numbers = timeCode.split(":");
    if (!numbers.every((n)=>!isNaN(Number(n)))) return null;
    if (numbers.length === 2) return "MM:SS";
    if (numbers.length === 3) return "HH:MM:SS";
    // todo: how to tell frames apart from cs?
    if (numbers.length === 4) return "HH:MM:SS:FF";
    return null;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/lib/canvas-gradients.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "drawCssBackground": ()=>drawCssBackground
});
function splitBackgroundLayers(input) {
    const layers = [];
    let depth = 0;
    let start = 0;
    for(let i = 0; i < input.length; i += 1){
        const ch = input[i];
        if (ch === "(") depth += 1;
        else if (ch === ")") depth -= 1;
        else if (ch === "," && depth === 0) {
            layers.push(input.slice(start, i).trim());
            start = i + 1;
        }
    }
    layers.push(input.slice(start).trim());
    return layers;
}
function parseColorStop(stop) {
    const s = stop.trim();
    // Handle functional colors like rgba(), rgb(), hsla(), hsl()
    const colorFunctions = [
        "rgba(",
        "rgb(",
        "hsla(",
        "hsl("
    ];
    let color = "";
    let remaining = "";
    for (const fn of colorFunctions){
        if (s.startsWith(fn)) {
            let depth = 0;
            for(let i = 0; i < s.length; i += 1){
                const ch = s[i];
                if (ch === "(") depth += 1;
                else if (ch === ")") {
                    depth -= 1;
                    if (depth === 0) {
                        color = s.slice(0, i + 1);
                        remaining = s.slice(i + 1).trim();
                        break;
                    }
                }
            }
            break;
        }
    }
    if (!color) {
        const parts = s.split(/\s+/);
        color = parts[0];
        remaining = parts.slice(1).join(" ");
    }
    // Convert transparent to transparent white for better blending
    if (color === "transparent") {
        color = "rgba(255, 255, 255, 0)";
    }
    // Parse position if present
    let position;
    if (remaining) {
        const posMatch = remaining.match(/(\d+(?:\.\d+)?)%/);
        if (posMatch) {
            position = parseFloat(posMatch[1]) / 100;
        }
    }
    return {
        color,
        position
    };
}
function parseLinearGradient(layer, width, height) {
    const inside = layer.slice(layer.indexOf("(") + 1, layer.lastIndexOf(")"));
    const parts = splitBackgroundLayers(inside);
    const dir = (parts.shift() || "").trim();
    let x0 = 0, y0 = 0, x1 = width, y1 = 0; // default: to right
    if (dir.endsWith("deg")) {
        const deg = parseFloat(dir);
        const rad = deg * Math.PI / 180;
        const cx = width / 2;
        const cy = height / 2;
        const r = Math.hypot(width, height) / 2;
        x0 = cx - Math.cos(rad) * r;
        y0 = cy - Math.sin(rad) * r;
        x1 = cx + Math.cos(rad) * r;
        y1 = cy + Math.sin(rad) * r;
    } else if (dir.startsWith("to ")) {
        const d = dir.slice(3).trim();
        if (d === "right") {
            x0 = 0;
            y0 = 0;
            x1 = width;
            y1 = 0;
        } else if (d === "left") {
            x0 = width;
            y0 = 0;
            x1 = 0;
            y1 = 0;
        } else if (d === "bottom") {
            x0 = 0;
            y0 = 0;
            x1 = 0;
            y1 = height;
        } else if (d === "top") {
            x0 = 0;
            y0 = height;
            x1 = 0;
            y1 = 0;
        }
    } else {
        // No direction specified, treat as first color
        parts.unshift(dir);
    }
    return {
        x0,
        y0,
        x1,
        y1,
        colors: parts
    };
}
function parseRadialGradient(layer, width, height) {
    const inside = layer.slice(layer.indexOf("(") + 1, layer.lastIndexOf(")"));
    const parts = splitBackgroundLayers(inside);
    const first = (parts.shift() || "").trim();
    let cx = width / 2;
    let cy = height / 2;
    if (first.startsWith("circle at")) {
        const pos = first.replace("circle at", "").trim();
        const coords = pos.split(/\s+/);
        for(let i = 0; i < coords.length; i += 1){
            const coord = coords[i];
            if (coord.endsWith("%")) {
                const val = parseFloat(coord) / 100;
                if (i === 0) cx = val * width;
                else if (i === 1) cy = val * height;
            } else if (coord === "left") cx = 0;
            else if (coord === "right") cx = width;
            else if (coord === "top") cy = 0;
            else if (coord === "bottom") cy = height;
            else if (coord === "center") {
                if (i === 0) cx = width / 2;
                else if (i === 1) cy = height / 2;
            }
        }
    } else {
        parts.unshift(first);
    }
    // Use farthest-corner for radius
    const r = Math.max(Math.hypot(cx, cy), Math.hypot(width - cx, cy), Math.hypot(cx, height - cy), Math.hypot(width - cx, height - cy));
    return {
        cx,
        cy,
        r,
        colors: parts
    };
}
function drawCssBackground(ctx, width, height, css) {
    const layers = splitBackgroundLayers(css).filter(Boolean);
    // Draw layers from last to first (CSS background order)
    for(let i = layers.length - 1; i >= 0; i -= 1){
        const layer = layers[i];
        if (layer.startsWith("linear-gradient(")) {
            const { x0, y0, x1, y1, colors } = parseLinearGradient(layer, width, height);
            const grad = ctx.createLinearGradient(x0, y0, x1, y1);
            const colorStops = colors.map((c)=>parseColorStop(c));
            // Handle positions properly
            for(let j = 0; j < colorStops.length; j += 1){
                const stop = colorStops[j];
                var _stop_position;
                const pos = (_stop_position = stop.position) !== null && _stop_position !== void 0 ? _stop_position : j / Math.max(1, colorStops.length - 1);
                grad.addColorStop(Math.max(0, Math.min(1, pos)), stop.color);
            }
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, width, height);
        } else if (layer.startsWith("radial-gradient(")) {
            const { cx, cy, r, colors } = parseRadialGradient(layer, width, height);
            const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
            const colorStops = colors.map((c)=>parseColorStop(c));
            // Handle positions properly
            for(let j = 0; j < colorStops.length; j += 1){
                const stop = colorStops[j];
                var _stop_position1;
                const pos = (_stop_position1 = stop.position) !== null && _stop_position1 !== void 0 ? _stop_position1 : j / Math.max(1, colorStops.length - 1);
                grad.addColorStop(Math.max(0, Math.min(1, pos)), stop.color);
            }
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, width, height);
        } else if (layer.startsWith("#") || layer.startsWith("rgb") || layer.startsWith("hsl") || layer === "transparent" || layer === "white" || layer === "black") {
            if (layer !== "transparent") {
                ctx.fillStyle = layer;
                ctx.fillRect(0, 0, width, height);
            }
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/lib/timeline-renderer.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "renderTimelineFrame": ()=>renderTimelineFrame
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$video$2d$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/video-cache.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$canvas$2d$gradients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/canvas-gradients.ts [app-client] (ecmascript)");
;
;
const imageElementCache = new Map();
async function getImageElement(mediaItem) {
    const cacheKey = mediaItem.id;
    const cached = imageElementCache.get(cacheKey);
    if (cached) return cached;
    const img = new Image();
    await new Promise((resolve, reject)=>{
        img.onload = ()=>resolve();
        img.onerror = ()=>reject(new Error("Image load failed"));
        img.src = mediaItem.url || URL.createObjectURL(mediaItem.file);
    });
    imageElementCache.set(cacheKey, img);
    return img;
}
async function renderTimelineFrame(param) {
    let { ctx, time, canvasWidth, canvasHeight, tracks, mediaFiles, backgroundColor, backgroundType, blurIntensity, projectCanvasSize } = param;
    // Background
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    if (backgroundColor && backgroundColor !== "transparent" && !backgroundColor.includes("gradient")) {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }
    // If backgroundColor is a CSS gradient string, draw it
    if (backgroundColor && backgroundColor.includes("gradient")) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$canvas$2d$gradients$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawCssBackground"])(ctx, canvasWidth, canvasHeight, backgroundColor);
    }
    const scaleX = projectCanvasSize ? canvasWidth / projectCanvasSize.width : 1;
    const scaleY = projectCanvasSize ? canvasHeight / projectCanvasSize.height : 1;
    const idToMedia = new Map(mediaFiles.map((m)=>[
            m.id,
            m
        ]));
    const active = [];
    for(let t = tracks.length - 1; t >= 0; t -= 1){
        const track = tracks[t];
        for (const element of track.elements){
            if (element.hidden) continue;
            const elementStart = element.startTime;
            const elementEnd = element.startTime + (element.duration - element.trimStart - element.trimEnd);
            if (time >= elementStart && time < elementEnd) {
                let mediaItem = null;
                if (element.type === "media") {
                    mediaItem = element.mediaId === "test" ? null : idToMedia.get(element.mediaId) || null;
                }
                active.push({
                    track,
                    element,
                    mediaItem
                });
            }
        }
    }
    // If background is set to blur, draw the active media as a blurred cover layer first
    if (backgroundType === "blur") {
        const blurPx = Math.max(0, blurIntensity !== null && blurIntensity !== void 0 ? blurIntensity : 8);
        // Find a suitable media element (video/image) among active elements
        const bgCandidate = active.find((param)=>{
            let { element, mediaItem } = param;
            return element.type === "media" && mediaItem !== null && (mediaItem.type === "video" || mediaItem.type === "image");
        });
        if (bgCandidate && bgCandidate.mediaItem) {
            const { element, mediaItem } = bgCandidate;
            try {
                if (mediaItem.type === "video") {
                    const localTime = time - element.startTime + element.trimStart;
                    const frame = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$video$2d$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["videoCache"].getFrameAt(mediaItem.id, mediaItem.file, Math.max(0, localTime));
                    if (frame) {
                        const mediaW = Math.max(1, mediaItem.width || canvasWidth);
                        const mediaH = Math.max(1, mediaItem.height || canvasHeight);
                        const coverScale = Math.max(canvasWidth / mediaW, canvasHeight / mediaH);
                        const drawW = mediaW * coverScale;
                        const drawH = mediaH * coverScale;
                        const drawX = (canvasWidth - drawW) / 2;
                        const drawY = (canvasHeight - drawH) / 2;
                        ctx.save();
                        ctx.filter = "blur(".concat(blurPx, "px)");
                        ctx.drawImage(frame.canvas, drawX, drawY, drawW, drawH);
                        ctx.restore();
                    }
                } else if (mediaItem.type === "image") {
                    const img = await getImageElement(mediaItem);
                    const mediaW = Math.max(1, mediaItem.width || img.naturalWidth || canvasWidth);
                    const mediaH = Math.max(1, mediaItem.height || img.naturalHeight || canvasHeight);
                    const coverScale = Math.max(canvasWidth / mediaW, canvasHeight / mediaH);
                    const drawW = mediaW * coverScale;
                    const drawH = mediaH * coverScale;
                    const drawX = (canvasWidth - drawW) / 2;
                    const drawY = (canvasHeight - drawH) / 2;
                    ctx.save();
                    ctx.filter = "blur(".concat(blurPx, "px)");
                    ctx.drawImage(img, drawX, drawY, drawW, drawH);
                    ctx.restore();
                }
            } catch (e) {
            // Ignore background blur failures; foreground will still render
            }
        }
    }
    for (const { element, mediaItem } of active){
        if (element.type === "media" && mediaItem) {
            if (mediaItem.type === "video") {
                try {
                    const localTime = time - element.startTime + element.trimStart;
                    const frame = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$video$2d$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["videoCache"].getFrameAt(mediaItem.id, mediaItem.file, localTime);
                    if (!frame) continue;
                    const mediaW = Math.max(1, mediaItem.width || canvasWidth);
                    const mediaH = Math.max(1, mediaItem.height || canvasHeight);
                    const containScale = Math.min(canvasWidth / mediaW, canvasHeight / mediaH);
                    const drawW = mediaW * containScale;
                    const drawH = mediaH * containScale;
                    const drawX = (canvasWidth - drawW) / 2;
                    const drawY = (canvasHeight - drawH) / 2;
                    ctx.drawImage(frame.canvas, drawX, drawY, drawW, drawH);
                } catch (error) {
                    console.warn("Failed to render video frame for ".concat(mediaItem.name, ":"), error);
                }
            }
            if (mediaItem.type === "image") {
                const img = new Image();
                await new Promise((resolve, reject)=>{
                    img.onload = ()=>resolve();
                    img.onerror = ()=>reject(new Error("Image load failed"));
                    img.src = mediaItem.url || URL.createObjectURL(mediaItem.file);
                });
                const mediaW = Math.max(1, mediaItem.width || img.naturalWidth || canvasWidth);
                const mediaH = Math.max(1, mediaItem.height || img.naturalHeight || canvasHeight);
                const containScale = Math.min(canvasWidth / mediaW, canvasHeight / mediaH);
                const drawW = mediaW * containScale;
                const drawH = mediaH * containScale;
                const drawX = (canvasWidth - drawW) / 2;
                const drawY = (canvasHeight - drawH) / 2;
                ctx.drawImage(img, drawX, drawY, drawW, drawH);
            }
        }
        if (element.type === "text") {
            const text = element;
            const posX = canvasWidth / 2 + text.x * scaleX;
            const posY = canvasHeight / 2 + text.y * scaleY;
            ctx.save();
            ctx.translate(posX, posY);
            ctx.rotate(text.rotation * Math.PI / 180);
            ctx.globalAlpha = Math.max(0, Math.min(1, text.opacity));
            const px = text.fontSize * scaleX;
            const weight = text.fontWeight === "bold" ? "bold " : "";
            const style = text.fontStyle === "italic" ? "italic " : "";
            ctx.font = "".concat(style).concat(weight).concat(px, "px ").concat(text.fontFamily);
            ctx.fillStyle = text.color;
            ctx.textAlign = text.textAlign;
            ctx.textBaseline = "middle";
            const metrics = ctx.measureText(text.content);
            const hasBoxMetrics = "actualBoundingBoxAscent" in metrics && "actualBoundingBoxDescent" in metrics;
            const ascent = hasBoxMetrics ? metrics.actualBoundingBoxAscent : px * 0.8;
            const descent = hasBoxMetrics ? metrics.actualBoundingBoxDescent : px * 0.2;
            const textW = metrics.width;
            const textH = ascent + descent;
            const padX = 8 * scaleX;
            const padY = 4 * scaleX;
            if (text.backgroundColor) {
                ctx.save();
                ctx.fillStyle = text.backgroundColor;
                let bgLeft = -textW / 2;
                if (ctx.textAlign === "left") bgLeft = 0;
                if (ctx.textAlign === "right") bgLeft = -textW;
                ctx.fillRect(bgLeft - padX, -textH / 2 - padY, textW + padX * 2, textH + padY * 2);
                ctx.restore();
            }
            ctx.fillText(text.content, 0, 0);
            ctx.restore();
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/lib/export.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DEFAULT_EXPORT_OPTIONS": ()=>DEFAULT_EXPORT_OPTIONS,
    "exportProject": ()=>exportProject,
    "getExportFileExtension": ()=>getExportFileExtension,
    "getExportMimeType": ()=>getExportMimeType
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$output$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/output.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$output$2d$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/output-format.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/target.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$media$2d$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/media-source.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$timeline$2d$renderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/timeline-renderer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/media-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const DEFAULT_EXPORT_OPTIONS = {
    format: "mp4",
    quality: "high",
    includeAudio: true
};
const qualityMap = {
    low: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUALITY_LOW"],
    medium: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUALITY_MEDIUM"],
    high: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUALITY_HIGH"],
    very_high: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUALITY_VERY_HIGH"]
};
async function createTimelineAudioBuffer(tracks, mediaFiles, duration) {
    let sampleRate = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 44100;
    // Get Web Audio context
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    // Collect all audio elements from timeline
    const audioElements = [];
    const mediaMap = new Map(mediaFiles.map((m)=>[
            m.id,
            m
        ]));
    for (const track of tracks){
        if (track.muted) continue;
        for (const element of track.elements){
            if (element.type !== "media") continue;
            const mediaElement = element;
            const mediaItem = mediaMap.get(mediaElement.mediaId);
            if (!mediaItem || mediaItem.type !== "audio") continue;
            const visibleDuration = mediaElement.duration - mediaElement.trimStart - mediaElement.trimEnd;
            if (visibleDuration <= 0) continue;
            try {
                // Decode audio file
                const arrayBuffer = await mediaItem.file.arrayBuffer();
                const audioBuffer = await audioContext.decodeAudioData(arrayBuffer.slice(0));
                audioElements.push({
                    buffer: audioBuffer,
                    startTime: mediaElement.startTime,
                    duration: mediaElement.duration,
                    trimStart: mediaElement.trimStart,
                    trimEnd: mediaElement.trimEnd,
                    muted: mediaElement.muted || track.muted || false
                });
            } catch (error) {
                console.warn("Failed to decode audio file ".concat(mediaItem.name, ":"), error);
            }
        }
    }
    if (audioElements.length === 0) {
        return null; // No audio to mix
    }
    // Create output buffer
    const outputChannels = 2; // Stereo
    const outputLength = Math.ceil(duration * sampleRate);
    const outputBuffer = audioContext.createBuffer(outputChannels, outputLength, sampleRate);
    // Mix all audio elements
    for (const element of audioElements){
        if (element.muted) continue;
        const { buffer, startTime, trimStart, trimEnd, duration: elementDuration } = element;
        // Calculate timing
        const sourceStartSample = Math.floor(trimStart * buffer.sampleRate);
        const sourceDuration = elementDuration - trimStart - trimEnd;
        const sourceLengthSamples = Math.floor(sourceDuration * buffer.sampleRate);
        const outputStartSample = Math.floor(startTime * sampleRate);
        // Resample if needed (simple approach)
        const resampleRatio = sampleRate / buffer.sampleRate;
        const resampledLength = Math.floor(sourceLengthSamples * resampleRatio);
        // Mix each channel
        for(let channel = 0; channel < outputChannels; channel++){
            const outputData = outputBuffer.getChannelData(channel);
            const sourceChannel = Math.min(channel, buffer.numberOfChannels - 1);
            const sourceData = buffer.getChannelData(sourceChannel);
            for(let i = 0; i < resampledLength; i++){
                const outputIndex = outputStartSample + i;
                if (outputIndex >= outputLength) break;
                // Simple resampling (could be improved with proper interpolation)
                const sourceIndex = sourceStartSample + Math.floor(i / resampleRatio);
                if (sourceIndex >= sourceData.length) break;
                outputData[outputIndex] += sourceData[sourceIndex];
            }
        }
    }
    return outputBuffer;
}
async function exportProject(options) {
    const { format, quality, fps, includeAudio, onProgress, onCancel } = options;
    try {
        const timelineStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimelineStore"].getState();
        const mediaStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaStore"].getState();
        const projectStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectStore"].getState();
        const { tracks, getTotalDuration } = timelineStore;
        const { mediaFiles } = mediaStore;
        const { activeProject } = projectStore;
        if (!activeProject) {
            return {
                success: false,
                error: "No active project"
            };
        }
        const duration = getTotalDuration();
        if (duration === 0) {
            return {
                success: false,
                error: "Project is empty"
            };
        }
        const exportFps = fps || activeProject.fps || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FPS"];
        const canvasSize = activeProject.canvasSize || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CANVAS_SIZE"];
        const outputFormat = format === "webm" ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$output$2d$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebMOutputFormat"]() : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$output$2d$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mp4OutputFormat"]();
        // BufferTarget for smaller files, StreamTarget for larger ones
        // TODO: Implement StreamTarget
        const output = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$output$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Output"]({
            format: outputFormat,
            target: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferTarget"]()
        });
        // Canvas for rendering
        const canvas = document.createElement("canvas");
        canvas.width = canvasSize.width;
        canvas.height = canvasSize.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            return {
                success: false,
                error: "Failed to create canvas context"
            };
        }
        const videoSource = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$media$2d$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasSource"](canvas, {
            codec: format === "webm" ? "vp9" : "avc",
            bitrate: qualityMap[quality]
        });
        output.addVideoTrack(videoSource, {
            frameRate: exportFps
        });
        // Add audio track if requested (but don't add data yet)
        let audioSource = null;
        let audioBuffer = null;
        if (includeAudio) {
            onProgress === null || onProgress === void 0 ? void 0 : onProgress(0.05); // 5% for audio processing
            audioBuffer = await createTimelineAudioBuffer(tracks, mediaFiles, duration);
            if (audioBuffer) {
                audioSource = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$media$2d$source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioBufferSource"]({
                    codec: format === "webm" ? "opus" : "aac",
                    bitrate: qualityMap[quality]
                });
                output.addAudioTrack(audioSource);
            }
        }
        // Start the output (after all tracks are added)
        await output.start();
        // Now add audio data after starting
        if (audioSource && audioBuffer) {
            await audioSource.add(audioBuffer);
            audioSource.close();
        }
        const totalFrames = Math.ceil(duration * exportFps);
        let cancelled = false;
        // Render each frame
        for(let frameIndex = 0; frameIndex < totalFrames; frameIndex++){
            // Check for cancellation
            if (onCancel === null || onCancel === void 0 ? void 0 : onCancel()) {
                cancelled = true;
                break;
            }
            const time = frameIndex / exportFps;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$timeline$2d$renderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderTimelineFrame"])({
                ctx,
                time,
                canvasWidth: canvas.width,
                canvasHeight: canvas.height,
                tracks,
                mediaFiles,
                backgroundType: activeProject.backgroundType,
                blurIntensity: activeProject.blurIntensity,
                backgroundColor: activeProject.backgroundType === "blur" ? undefined : activeProject.backgroundColor || "#000000",
                projectCanvasSize: canvasSize
            });
            const frameDuration = 1 / exportFps;
            await videoSource.add(time, frameDuration);
            // Adjust progress to account for audio processing (5% at start)
            const videoProgress = includeAudio ? 0.05 + frameIndex / totalFrames * 0.95 : frameIndex / totalFrames;
            onProgress === null || onProgress === void 0 ? void 0 : onProgress(videoProgress);
        }
        if (cancelled) {
            await output.cancel();
            return {
                success: false,
                cancelled: true
            };
        }
        videoSource.close();
        await output.finalize();
        onProgress === null || onProgress === void 0 ? void 0 : onProgress(1);
        return {
            success: true,
            buffer: output.target.buffer || undefined
        };
    } catch (error) {
        console.error("Export failed:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Unknown export error"
        };
    }
}
function getExportMimeType(format) {
    return format === "webm" ? "video/webm" : "video/mp4";
}
function getExportFileExtension(format) {
    return ".".concat(format);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/stores/panel-store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PRESET_CONFIGS": ()=>PRESET_CONFIGS,
    "usePanelStore": ()=>usePanelStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const PRESET_CONFIGS = {
    default: {
        toolsPanel: 25,
        previewPanel: 50,
        propertiesPanel: 25,
        mainContent: 70,
        timeline: 30
    },
    media: {
        toolsPanel: 30,
        previewPanel: 45,
        propertiesPanel: 25,
        mainContent: 100,
        timeline: 25
    },
    inspector: {
        toolsPanel: 30,
        previewPanel: 70,
        propertiesPanel: 30,
        mainContent: 75,
        timeline: 25
    },
    "vertical-preview": {
        toolsPanel: 30,
        previewPanel: 40,
        propertiesPanel: 30,
        mainContent: 75,
        timeline: 25
    }
};
const usePanelStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        ...PRESET_CONFIGS.default,
        activePreset: "default",
        presetCustomSizes: {
            default: {},
            media: {},
            inspector: {},
            "vertical-preview": {}
        },
        resetCounter: 0,
        mediaViewMode: "grid",
        setToolsPanel: (size)=>{
            const { activePreset, presetCustomSizes } = get();
            set({
                toolsPanel: size,
                presetCustomSizes: {
                    ...presetCustomSizes,
                    [activePreset]: {
                        ...presetCustomSizes[activePreset],
                        toolsPanel: size
                    }
                }
            });
        },
        setPreviewPanel: (size)=>{
            const { activePreset, presetCustomSizes } = get();
            set({
                previewPanel: size,
                presetCustomSizes: {
                    ...presetCustomSizes,
                    [activePreset]: {
                        ...presetCustomSizes[activePreset],
                        previewPanel: size
                    }
                }
            });
        },
        setPropertiesPanel: (size)=>{
            const { activePreset, presetCustomSizes } = get();
            set({
                propertiesPanel: size,
                presetCustomSizes: {
                    ...presetCustomSizes,
                    [activePreset]: {
                        ...presetCustomSizes[activePreset],
                        propertiesPanel: size
                    }
                }
            });
        },
        setMainContent: (size)=>{
            const { activePreset, presetCustomSizes } = get();
            set({
                mainContent: size,
                presetCustomSizes: {
                    ...presetCustomSizes,
                    [activePreset]: {
                        ...presetCustomSizes[activePreset],
                        mainContent: size
                    }
                }
            });
        },
        setTimeline: (size)=>{
            const { activePreset, presetCustomSizes } = get();
            set({
                timeline: size,
                presetCustomSizes: {
                    ...presetCustomSizes,
                    [activePreset]: {
                        ...presetCustomSizes[activePreset],
                        timeline: size
                    }
                }
            });
        },
        setMediaViewMode: (mode)=>set({
                mediaViewMode: mode
            }),
        setActivePreset: (preset)=>{
            const { activePreset: currentPreset, presetCustomSizes, toolsPanel, previewPanel, propertiesPanel, mainContent, timeline } = get();
            const updatedPresetCustomSizes = {
                ...presetCustomSizes,
                [currentPreset]: {
                    toolsPanel,
                    previewPanel,
                    propertiesPanel,
                    mainContent,
                    timeline
                }
            };
            const defaultSizes = PRESET_CONFIGS[preset];
            const customSizes = updatedPresetCustomSizes[preset] || {};
            const finalSizes = {
                ...defaultSizes,
                ...customSizes
            };
            set({
                activePreset: preset,
                presetCustomSizes: updatedPresetCustomSizes,
                ...finalSizes
            });
        },
        resetPreset: (preset)=>{
            const { presetCustomSizes, activePreset, resetCounter } = get();
            const defaultSizes = PRESET_CONFIGS[preset];
            const newPresetCustomSizes = {
                ...presetCustomSizes,
                [preset]: {}
            };
            const updates = {
                presetCustomSizes: newPresetCustomSizes,
                resetCounter: resetCounter + 1
            };
            if (preset === activePreset) {
                Object.assign(updates, defaultSizes);
            }
            set(updates);
        },
        getCurrentPresetSizes: ()=>{
            const { toolsPanel, previewPanel, propertiesPanel, mainContent, timeline } = get();
            return {
                toolsPanel,
                previewPanel,
                propertiesPanel,
                mainContent,
                timeline
            };
        }
    }), {
    name: "panel-sizes"
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/stores/sounds-store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useSoundsStore": ()=>useSoundsStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/storage/storage-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/sonner@1.7.4+6dbf9a050bc9aadb/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/media-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/playback-store.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
const useSoundsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        topSoundEffects: [],
        isLoading: false,
        error: null,
        hasLoaded: false,
        showCommercialOnly: true,
        toggleCommercialFilter: ()=>{
            set((state)=>({
                    showCommercialOnly: !state.showCommercialOnly
                }));
        },
        // Search state
        searchQuery: "",
        searchResults: [],
        isSearching: false,
        searchError: null,
        lastSearchQuery: "",
        scrollPosition: 0,
        // Pagination state
        currentPage: 1,
        hasNextPage: false,
        totalCount: 0,
        isLoadingMore: false,
        // Saved sounds state
        savedSounds: [],
        isSavedSoundsLoaded: false,
        isLoadingSavedSounds: false,
        savedSoundsError: null,
        setTopSoundEffects: (sounds)=>set({
                topSoundEffects: sounds
            }),
        setLoading: (loading)=>set({
                isLoading: loading
            }),
        setError: (error)=>set({
                error
            }),
        setHasLoaded: (loaded)=>set({
                hasLoaded: loaded
            }),
        // Search actions
        setSearchQuery: (query)=>set({
                searchQuery: query
            }),
        setSearchResults: (results)=>set({
                searchResults: results,
                currentPage: 1
            }),
        setSearching: (searching)=>set({
                isSearching: searching
            }),
        setSearchError: (error)=>set({
                searchError: error
            }),
        setLastSearchQuery: (query)=>set({
                lastSearchQuery: query
            }),
        setScrollPosition: (position)=>set({
                scrollPosition: position
            }),
        // Pagination actions
        setCurrentPage: (page)=>set({
                currentPage: page
            }),
        setHasNextPage: (hasNext)=>set({
                hasNextPage: hasNext
            }),
        setTotalCount: (count)=>set({
                totalCount: count
            }),
        setLoadingMore: (loading)=>set({
                isLoadingMore: loading
            }),
        appendSearchResults: (results)=>set((state)=>({
                    searchResults: [
                        ...state.searchResults,
                        ...results
                    ]
                })),
        appendTopSounds: (results)=>set((state)=>({
                    topSoundEffects: [
                        ...state.topSoundEffects,
                        ...results
                    ]
                })),
        resetPagination: ()=>set({
                currentPage: 1,
                hasNextPage: false,
                totalCount: 0,
                isLoadingMore: false
            }),
        // Saved sounds actions
        loadSavedSounds: async ()=>{
            if (get().isSavedSoundsLoaded) return;
            try {
                set({
                    isLoadingSavedSounds: true,
                    savedSoundsError: null
                });
                const savedSoundsData = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageService"].loadSavedSounds();
                set({
                    savedSounds: savedSoundsData.sounds,
                    isSavedSoundsLoaded: true,
                    isLoadingSavedSounds: false
                });
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Failed to load saved sounds";
                set({
                    savedSoundsError: errorMessage,
                    isLoadingSavedSounds: false
                });
                console.error("Failed to load saved sounds:", error);
            }
        },
        saveSoundEffect: async (soundEffect)=>{
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageService"].saveSoundEffect({
                    soundEffect
                });
                // Refresh saved sounds
                const savedSoundsData = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageService"].loadSavedSounds();
                set({
                    savedSounds: savedSoundsData.sounds
                });
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Failed to save sound";
                set({
                    savedSoundsError: errorMessage
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to save sound");
                console.error("Failed to save sound:", error);
            }
        },
        removeSavedSound: async (soundId)=>{
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageService"].removeSavedSound({
                    soundId
                });
                // Update local state immediately
                set((state)=>({
                        savedSounds: state.savedSounds.filter((sound)=>sound.id !== soundId)
                    }));
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Failed to remove sound";
                set({
                    savedSoundsError: errorMessage
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to remove sound");
                console.error("Failed to remove sound:", error);
            }
        },
        isSoundSaved: (soundId)=>{
            const { savedSounds } = get();
            return savedSounds.some((sound)=>sound.id === soundId);
        },
        toggleSavedSound: async (soundEffect)=>{
            const { isSoundSaved, saveSoundEffect, removeSavedSound } = get();
            if (isSoundSaved(soundEffect.id)) {
                await removeSavedSound(soundEffect.id);
            } else {
                await saveSoundEffect(soundEffect);
            }
        },
        clearSavedSounds: async ()=>{
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageService"].clearSavedSounds();
                set({
                    savedSounds: [],
                    savedSoundsError: null
                });
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Failed to clear saved sounds";
                set({
                    savedSoundsError: errorMessage
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to clear saved sounds");
                console.error("Failed to clear saved sounds:", error);
            }
        },
        addSoundToTimeline: async (sound)=>{
            const activeProject = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectStore"].getState().activeProject;
            if (!activeProject) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("No active project");
                return false;
            }
            const audioUrl = sound.previewUrl;
            if (!audioUrl) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Sound file not available");
                return false;
            }
            try {
                const response = await fetch(audioUrl);
                if (!response.ok) throw new Error("Failed to download audio: ".concat(response.statusText));
                const blob = await response.blob();
                const file = new File([
                    blob
                ], "".concat(sound.name, ".mp3"), {
                    type: "audio/mpeg"
                });
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaStore"].getState().addMediaFile(activeProject.id, {
                    name: sound.name,
                    type: "audio",
                    file,
                    duration: sound.duration,
                    url: URL.createObjectURL(file)
                });
                const mediaItem = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaStore"].getState().mediaFiles.find((item)=>item.file === file);
                if (!mediaItem) throw new Error("Failed to create media item");
                const success = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimelineStore"].getState().addElementAtTime(mediaItem, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlaybackStore"].getState().currentTime);
                if (success) {
                    return true;
                }
                throw new Error("Failed to add to timeline - check for overlaps");
            } catch (error) {
                console.error("Failed to add sound to timeline:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error instanceof Error ? error.message : "Failed to add sound to timeline", {
                    id: "sound-".concat(sound.id)
                });
                return false;
            }
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/stores/stickers-store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useStickersStore": ()=>useStickersStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$iconify$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/iconify-api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/media-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/playback-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/timeline-constants.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
const MAX_RECENT_STICKERS = 50;
const useStickersStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        searchQuery: "",
        selectedCategory: "all",
        selectedCollection: null,
        viewMode: "browse",
        collections: {},
        currentCollection: null,
        searchResults: null,
        recentStickers: [],
        isLoadingCollections: false,
        isLoadingCollection: false,
        isSearching: false,
        isDownloading: false,
        addingSticker: null,
        setSearchQuery: (query)=>set({
                searchQuery: query
            }),
        setSelectedCategory: (category)=>set({
                selectedCategory: category,
                viewMode: "browse",
                selectedCollection: null,
                currentCollection: null
            }),
        setSelectedCollection: (collection)=>{
            set({
                selectedCollection: collection,
                viewMode: collection ? "collection" : "browse",
                currentCollection: null
            });
            if (collection) {
                get().loadCollection(collection);
            }
        },
        setViewMode: (mode)=>set({
                viewMode: mode
            }),
        loadCollections: async ()=>{
            set({
                isLoadingCollections: true
            });
            try {
                const collections = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$iconify$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCollections"])();
                set({
                    collections
                });
            } catch (error) {
                console.error("Failed to load collections:", error);
            } finally{
                set({
                    isLoadingCollections: false
                });
            }
        },
        loadCollection: async (prefix)=>{
            set({
                isLoadingCollection: true
            });
            try {
                const collection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$iconify$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCollection"])(prefix);
                set({
                    currentCollection: collection
                });
            } catch (error) {
                console.error("Failed to load collection ".concat(prefix, ":"), error);
                set({
                    currentCollection: null
                });
            } finally{
                set({
                    isLoadingCollection: false
                });
            }
        },
        searchStickers: async (query)=>{
            if (!query.trim()) {
                set({
                    searchResults: null,
                    viewMode: "browse"
                });
                return;
            }
            const { selectedCategory } = get();
            set({
                isSearching: true,
                viewMode: "search"
            });
            try {
                let category;
                if (selectedCategory !== "all") {
                    if (selectedCategory === "general") {
                        category = "General";
                    } else if (selectedCategory === "brands") {
                        category = "Brands / Social";
                    } else if (selectedCategory === "emoji") {
                        category = "Emoji";
                    }
                }
                const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$iconify$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchIcons"])(query, 100, undefined, category);
                set({
                    searchResults: results
                });
            } catch (error) {
                console.error("Search failed:", error);
                set({
                    searchResults: null
                });
            } finally{
                set({
                    isSearching: false
                });
            }
        },
        downloadSticker: async (iconName)=>{
            set({
                isDownloading: true
            });
            try {
                const svgText = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$iconify$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadSvgAsText"])(iconName, {
                    width: 200,
                    height: 200
                });
                const fileName = "".concat(iconName.replace(":", "-"), ".svg");
                const file = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$iconify$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["svgToFile"])(svgText, fileName);
                get().addToRecentStickers(iconName);
                return file;
            } catch (error) {
                console.error("Failed to download sticker ".concat(iconName, ":"), error);
                return null;
            } finally{
                set({
                    isDownloading: false
                });
            }
        },
        addStickerToTimeline: async (iconName)=>{
            set({
                addingSticker: iconName
            });
            try {
                const { activeProject } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectStore"].getState();
                if (!activeProject) {
                    throw new Error("No active project");
                }
                const file = await get().downloadSticker(iconName);
                if (!file) {
                    throw new Error("Failed to download sticker");
                }
                const mediaItem = {
                    name: iconName.replace(":", "-"),
                    type: "image",
                    file,
                    url: URL.createObjectURL(file),
                    width: 200,
                    height: 200,
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIMELINE_CONSTANTS"].DEFAULT_IMAGE_DURATION,
                    ephemeral: false
                };
                const { addMediaFile } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaStore"].getState();
                await addMediaFile(activeProject.id, mediaItem);
                const added = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaStore"].getState().mediaFiles.find((m)=>m.url === mediaItem.url && m.name === mediaItem.name);
                if (!added) {
                    throw new Error("Sticker not in media store");
                }
                const { currentTime } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlaybackStore"].getState();
                const { addElementAtTime } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimelineStore"].getState();
                addElementAtTime(added, currentTime);
            } finally{
                set({
                    addingSticker: null
                });
            }
        },
        addToRecentStickers: (iconName)=>{
            set((state)=>{
                const recent = [
                    iconName,
                    ...state.recentStickers.filter((s)=>s !== iconName)
                ];
                return {
                    recentStickers: recent.slice(0, MAX_RECENT_STICKERS)
                };
            });
        },
        clearRecentStickers: ()=>set({
                recentStickers: []
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/stores/editor-store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PLATFORM_LAYOUTS": ()=>PLATFORM_LAYOUTS,
    "useEditorStore": ()=>useEditorStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const PLATFORM_LAYOUTS = {
    tiktok: "TikTok"
};
const DEFAULT_CANVAS_PRESETS = [
    {
        name: "16:9",
        width: 1920,
        height: 1080
    },
    {
        name: "9:16",
        width: 1080,
        height: 1920
    },
    {
        name: "1:1",
        width: 1080,
        height: 1080
    },
    {
        name: "4:3",
        width: 1440,
        height: 1080
    }
];
const useEditorStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        // Initial states
        isInitializing: true,
        isPanelsReady: false,
        canvasPresets: DEFAULT_CANVAS_PRESETS,
        layoutGuide: {
            platform: null
        },
        // Actions
        setInitializing: (loading)=>{
            set({
                isInitializing: loading
            });
        },
        setPanelsReady: (ready)=>{
            set({
                isPanelsReady: ready
            });
        },
        initializeApp: async ()=>{
            console.log("Initializing video editor...");
            set({
                isInitializing: true,
                isPanelsReady: false
            });
            set({
                isPanelsReady: true,
                isInitializing: false
            });
            console.log("Video editor ready");
        },
        setLayoutGuide: (settings)=>{
            set((state)=>({
                    layoutGuide: {
                        ...state.layoutGuide,
                        ...settings
                    }
                }));
        },
        toggleLayoutGuide: (platform)=>{
            set((state)=>({
                    layoutGuide: {
                        platform: state.layoutGuide.platform === platform ? null : platform
                    }
                }));
        }
    }), {
    name: "editor-settings",
    partialize: (state)=>({
            layoutGuide: state.layoutGuide
        })
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/stores/text-properties-store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TEXT_PROPERTIES_TABS": ()=>TEXT_PROPERTIES_TABS,
    "isTextPropertiesTab": ()=>isTextPropertiesTab,
    "useTextPropertiesStore": ()=>useTextPropertiesStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const TEXT_PROPERTIES_TABS = [
    {
        value: "transform",
        label: "Transform"
    },
    {
        value: "style",
        label: "Style"
    }
];
function isTextPropertiesTab(value) {
    return TEXT_PROPERTIES_TABS.some((t)=>t.value === value);
}
const useTextPropertiesStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        activeTab: "transform",
        setActiveTab: (tab)=>set({
                activeTab: tab
            })
    }), {
    name: "text-properties"
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/stores/keybindings-store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultKeybindings": ()=>defaultKeybindings,
    "useKeybindingsStore": ()=>useKeybindingsStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
const defaultKeybindings = {
    space: "toggle-play",
    j: "seek-backward",
    k: "toggle-play",
    l: "seek-forward",
    left: "frame-step-backward",
    right: "frame-step-forward",
    "shift+left": "jump-backward",
    "shift+right": "jump-forward",
    home: "goto-start",
    enter: "goto-start",
    end: "goto-end",
    s: "split-element",
    n: "toggle-snapping",
    "ctrl+a": "select-all",
    "ctrl+d": "duplicate-selected",
    "ctrl+c": "copy-selected",
    "ctrl+v": "paste-selected",
    "ctrl+z": "undo",
    "ctrl+shift+z": "redo",
    "ctrl+y": "redo",
    delete: "delete-selected",
    backspace: "delete-selected"
};
const useKeybindingsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        keybindings: {
            ...defaultKeybindings
        },
        isCustomized: false,
        keybindingsEnabled: true,
        isRecording: false,
        updateKeybinding: (key, action)=>{
            set((state)=>{
                const newKeybindings = {
                    ...state.keybindings
                };
                newKeybindings[key] = action;
                return {
                    keybindings: newKeybindings,
                    isCustomized: true
                };
            });
        },
        removeKeybinding: (key)=>{
            set((state)=>{
                const newKeybindings = {
                    ...state.keybindings
                };
                delete newKeybindings[key];
                return {
                    keybindings: newKeybindings,
                    isCustomized: true
                };
            });
        },
        resetToDefaults: ()=>{
            set({
                keybindings: {
                    ...defaultKeybindings
                },
                isCustomized: false
            });
        },
        enableKeybindings: ()=>{
            set({
                keybindingsEnabled: true
            });
        },
        disableKeybindings: ()=>{
            set({
                keybindingsEnabled: false
            });
        },
        importKeybindings: (config)=>{
            // Validate all keys and actions
            for (const [key, action] of Object.entries(config)){
                // Validate the key format
                if (typeof key !== "string" || key.length === 0) {
                    throw new Error("Invalid key format: ".concat(key));
                }
            }
            set({
                keybindings: {
                    ...config
                },
                isCustomized: true
            });
        },
        exportKeybindings: ()=>{
            return get().keybindings;
        },
        validateKeybinding: (key, action)=>{
            const { keybindings } = get();
            const existingAction = keybindings[key];
            if (existingAction && existingAction !== action) {
                return {
                    key,
                    existingAction,
                    newAction: action
                };
            }
            return null;
        },
        setIsRecording: (isRecording)=>{
            set({
                isRecording
            });
        },
        getKeybindingsForAction: (action)=>{
            const { keybindings } = get();
            return Object.keys(keybindings).filter((key)=>keybindings[key] === action);
        },
        getKeybindingString: (ev)=>{
            return generateKeybindingString(ev);
        }
    }), {
    name: "opencut-keybindings",
    version: 2
}));
// Utility functions
function generateKeybindingString(ev) {
    const target = ev.target;
    // We may or may not have a modifier key
    const modifierKey = getActiveModifier(ev);
    // We will always have a non-modifier key
    const key = getPressedKey(ev);
    if (!key) return null;
    // All key combos backed by modifiers are valid shortcuts (whether currently typing or not)
    if (modifierKey) {
        // If the modifier is shift and the target is an input, we ignore
        if (modifierKey === "shift" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMElement"])(target) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypableElement"])(target)) {
            return null;
        }
        return "".concat(modifierKey, "+").concat(key);
    }
    // no modifier key here then we do not do anything while on input
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDOMElement"])(target) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypableElement"])(target)) return null;
    // single key while not input
    return "".concat(key);
}
function getPressedKey(ev) {
    var _ev_key;
    // Sometimes the property code is not available on the KeyboardEvent object
    const key = ((_ev_key = ev.key) !== null && _ev_key !== void 0 ? _ev_key : "").toLowerCase();
    var _ev_code;
    const code = (_ev_code = ev.code) !== null && _ev_code !== void 0 ? _ev_code : "";
    if (code === "Space" || key === " " || key === "spacebar" || key === "space") return "space";
    // Check arrow keys
    if (key.startsWith("arrow")) {
        return key.slice(5);
    }
    // Check for special keys
    if (key === "tab") return "tab";
    if (key === "home") return "home";
    if (key === "end") return "end";
    if (key === "delete") return "delete";
    if (key === "backspace") return "backspace";
    // Check letter keys
    if (code.startsWith("Key")) {
        const letter = code.slice(3).toLowerCase();
        if (letter.length === 1 && letter >= "a" && letter <= "z") {
            return letter;
        }
    }
    // Check number keys using physical position for AZERTY support
    if (code.startsWith("Digit")) {
        const digit = code.slice(5);
        if (digit.length === 1 && digit >= "0" && digit <= "9") {
            return digit;
        }
    }
    // Fallback for other layouts
    const isDigit = key.length === 1 && key >= "0" && key <= "9";
    if (isDigit) return key;
    // Check if slash, period or enter
    if (key === "/" || key === "." || key === "enter") return key;
    // If no other cases match, this is not a valid key
    return null;
}
function getActiveModifier(ev) {
    const modifierKeys = {
        ctrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAppleDevice"])() ? ev.metaKey : ev.ctrlKey,
        alt: ev.altKey,
        shift: ev.shiftKey
    };
    // active modifier: ctrl | alt | ctrl+alt | ctrl+shift | ctrl+alt+shift | alt+shift
    // modiferKeys object's keys are sorted to match the above order
    const activeModifier = Object.keys(modifierKeys).filter((key)=>modifierKeys[key]).join("+");
    return activeModifier === "" ? null : activeModifier;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/data/colors/solid.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "colors": ()=>colors
});
const colors = [
    "#ffffff",
    "#000000",
    "#ffe2e2",
    "#ffc9c9",
    "#ffa2a2",
    "#ff6467",
    "#fb2c36",
    "#e7000b",
    "#c10007",
    "#9f0712",
    "#82181a",
    "#460809",
    "#fff7ed",
    "#ffedd4",
    "#ffd6a7",
    "#ffb86a",
    "#ff8904",
    "#ff6900",
    "#f54900",
    "#ca3500",
    "#9f2d00",
    "#7e2a0c",
    "#441306",
    "#fffbeb",
    "#fef3c6",
    "#fee685",
    "#ffd230",
    "#ffb900",
    "#fe9a00",
    "#e17100",
    "#bb4d00",
    "#973c00",
    "#7b3306",
    "#461901",
    "#fefce8",
    "#fef9c2",
    "#fff085",
    "#ffdf20",
    "#fdc700",
    "#f0b100",
    "#d08700",
    "#a65f00",
    "#894b00",
    "#733e0a",
    "#432004",
    "#f7fee7",
    "#ecfcca",
    "#d8f999",
    "#bbf451",
    "#9ae600",
    "#7ccf00",
    "#5ea500",
    "#497d00",
    "#3c6300",
    "#35530e",
    "#192e03",
    "#f0fdf4",
    "#dcfce7",
    "#b9f8cf",
    "#7bf1a8",
    "#05df72",
    "#00c950",
    "#00a63e",
    "#008236",
    "#016630",
    "#0d542b",
    "#032e15",
    "#ecfdf5",
    "#d0fae5",
    "#a4f4cf",
    "#5ee9b5",
    "#00d492",
    "#00bc7d",
    "#009966",
    "#007a55",
    "#006045",
    "#004f3b",
    "#002c22",
    "#f0fdfa",
    "#cbfbf1",
    "#96f7e4",
    "#46ecd5",
    "#00d5be",
    "#00bba7",
    "#009689",
    "#00786f",
    "#005f5a",
    "#0b4f4a",
    "#022f2e",
    "#ecfeff",
    "#cefafe",
    "#a2f4fd",
    "#53eafd",
    "#00d3f2",
    "#00b8db",
    "#0092b8",
    "#007595",
    "#005f78",
    "#104e64",
    "#053345",
    "#f0f9ff",
    "#dff2fe",
    "#b8e6fe",
    "#74d4ff",
    "#00bcff",
    "#00a6f4",
    "#0084d1",
    "#0069a8",
    "#00598a",
    "#024a70",
    "#052f4a",
    "#eff6ff",
    "#dbeafe",
    "#bedbff",
    "#8ec5ff",
    "#51a2ff",
    "#2b7fff",
    "#155dfc",
    "#1447e6",
    "#193cb8",
    "#1c398e",
    "#162456",
    "#eef2ff",
    "#e0e7ff",
    "#c6d2ff",
    "#a3b3ff",
    "#7c86ff",
    "#615fff",
    "#4f39f6",
    "#432dd7",
    "#372aac",
    "#312c85",
    "#1e1a4d",
    "#f5f3ff",
    "#ede9fe",
    "#ddd6ff",
    "#c4b4ff",
    "#a684ff",
    "#8e51ff",
    "#7f22fe",
    "#7008e7",
    "#5d0ec0",
    "#4d179a",
    "#2f0d68",
    "#faf5ff",
    "#f3e8ff",
    "#e9d4ff",
    "#dab2ff",
    "#c27aff",
    "#ad46ff",
    "#9810fa",
    "#8200db",
    "#6e11b0",
    "#59168b",
    "#3c0366",
    "#fdf4ff",
    "#fae8ff",
    "#f6cfff",
    "#f4a8ff",
    "#ed6aff",
    "#e12afb",
    "#c800de",
    "#a800b7",
    "#8a0194",
    "#721378",
    "#4b004f",
    "#fdf2f8",
    "#fce7f3",
    "#fccee8",
    "#fda5d5",
    "#fb64b6",
    "#f6339a",
    "#e60076",
    "#c6005c",
    "#a3004c",
    "#861043",
    "#510424",
    "#fff1f2",
    "#ffe4e6",
    "#ffccd3",
    "#ffa1ad",
    "#ff637e",
    "#ff2056",
    "#ec003f",
    "#c70036",
    "#a50036",
    "#8b0836",
    "#4d0218",
    "#f8fafc",
    "#f1f5f9",
    "#e2e8f0",
    "#cad5e2",
    "#90a1b9",
    "#62748e",
    "#45556c",
    "#314158",
    "#1d293d",
    "#0f172b",
    "#020618",
    "#f9fafb",
    "#f3f4f6",
    "#e5e7eb",
    "#d1d5dc",
    "#99a1af",
    "#6a7282",
    "#4a5565",
    "#364153",
    "#1e2939",
    "#101828",
    "#030712",
    "#fafafa",
    "#f4f4f5",
    "#e4e4e7",
    "#d4d4d8",
    "#9f9fa9",
    "#71717b",
    "#52525c",
    "#3f3f46",
    "#27272a",
    "#18181b",
    "#09090b",
    "#f5f5f5",
    "#e5e5e5",
    "#d4d4d4",
    "#a1a1a1",
    "#737373",
    "#525252",
    "#404040",
    "#262626",
    "#171717",
    "#0a0a0a",
    "#fafaf9",
    "#f5f5f4",
    "#e7e5e4",
    "#d6d3d1",
    "#a6a09b",
    "#79716b",
    "#57534d",
    "#44403b",
    "#292524",
    "#1c1917",
    "#0c0a09"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/data/colors/pattern-craft.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// These are the gradients from Pattern Craft (https://patterncraft.fun/)
__turbopack_context__.s({
    "patternCraftGradients": ()=>patternCraftGradients
});
const patternCraftGradients = [
    // Dreamy Sky Pink Glow
    "radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%), radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)",
    // Soft Warm Pastel Texture
    "radial-gradient(circle at 20% 80%, rgba(255, 182, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 244, 214, 0.5) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(255, 182, 153, 0.1) 0%, transparent 50%), #fff8f0",
    // Warm Soft Coral & Cream
    "radial-gradient(circle at 20% 80%, rgba(255, 160, 146, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 244, 228, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(255, 160, 146, 0.15) 0%, transparent 50%), #fef9f7",
    // Soft Green Glow
    "radial-gradient(circle at center, #8FFFB0, transparent), white",
    // Purple Glow Right
    "radial-gradient(circle at top right, rgba(173, 109, 244, 0.5), transparent 70%)",
    // Teal Glow Right
    "radial-gradient(circle at top right, rgba(56, 193, 182, 0.5), transparent 70%)",
    // Warm Orange Glow Right
    "radial-gradient(circle at top right, rgba(255, 140, 60, 0.5), transparent 70%)",
    // Cool Blue Glow Right
    "radial-gradient(circle at top right, rgba(70, 130, 180, 0.5), transparent 70%)",
    // Purple Glow Left
    "radial-gradient(circle at top left, rgba(173, 109, 244, 0.5), transparent 70%)",
    // Pastel Wave
    "linear-gradient(120deg, #d5c5ff 0%, #a7f3d0 50%, #f0f0f0 100%)"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/data/colors/syntax-ui.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// These are the gradients from Syntax UI (https://syntaxui.com/effects/gradients)
__turbopack_context__.s({
    "syntaxUIGradients": ()=>syntaxUIGradients
});
const syntaxUIGradients = [
    // Cyan to Blue gradients
    "linear-gradient(to right, #22d3ee, #0ea5e9, #0284c7)",
    "linear-gradient(to right, #bfdbfe, #a5f3fc)",
    "linear-gradient(to right, #22d3ee, #0ea5e9, #0284c7)",
    // Purple gradients
    "linear-gradient(to right, #e9d5ff, #d8b4fe, #c084fc)",
    "linear-gradient(to right, #c4b5fd, #a78bfa, #8b5cf6)",
    // Blue gradients
    "linear-gradient(to right, #93c5fd, #60a5fa, #3b82f6)",
    "linear-gradient(to right, #93c5fd, #60a5fa, #3b82f6)",
    // Green gradients
    "linear-gradient(to right, #6ee7b7, #34d399, #10b981)",
    "linear-gradient(to right, #d1fae5, #a7f3d0, #6ee7b7)",
    // Red gradient
    "linear-gradient(to right, #fca5a5, #f87171, #ef4444)",
    // Yellow/Orange gradient
    "linear-gradient(to right, #fde68a, #fbbf24, #f59e0b)",
    // Pink gradient
    "linear-gradient(to right, #fbcfe8, #f9a8d4, #f472b6)",
    // Neon radial gradient
    "radial-gradient(circle at bottom left, #ff00ff, #00ffff)"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/constants/font-constants.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DEFAULT_FONT": ()=>DEFAULT_FONT,
    "FONT_OPTIONS": ()=>FONT_OPTIONS,
    "getFontByValue": ()=>getFontByValue,
    "getGoogleFonts": ()=>getGoogleFonts,
    "getSystemFonts": ()=>getSystemFonts
});
const FONT_OPTIONS = [
    // System fonts (always available)
    {
        value: "Arial",
        label: "Arial",
        category: "system",
        hasClassName: false
    },
    {
        value: "Helvetica",
        label: "Helvetica",
        category: "system",
        hasClassName: false
    },
    {
        value: "Times New Roman",
        label: "Times New Roman",
        category: "system",
        hasClassName: false
    },
    {
        value: "Georgia",
        label: "Georgia",
        category: "system",
        hasClassName: false
    },
    // Google Fonts (loaded in layout.tsx)
    {
        value: "Inter",
        label: "Inter",
        category: "google",
        weights: [
            400,
            700
        ],
        hasClassName: true
    },
    {
        value: "Roboto",
        label: "Roboto",
        category: "google",
        weights: [
            400,
            700
        ],
        hasClassName: true
    },
    {
        value: "Open Sans",
        label: "Open Sans",
        category: "google",
        hasClassName: true
    },
    {
        value: "Playfair Display",
        label: "Playfair Display",
        category: "google",
        hasClassName: true
    },
    {
        value: "Comic Neue",
        label: "Comic Neue",
        category: "google",
        hasClassName: false
    }
];
const DEFAULT_FONT = "Arial";
const getFontByValue = (value)=>FONT_OPTIONS.find((font)=>font.value === value);
const getGoogleFonts = ()=>FONT_OPTIONS.filter((font)=>font.category === "google");
const getSystemFonts = ()=>FONT_OPTIONS.filter((font)=>font.category === "system");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/constants/actions.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* An `action` is a unique verb that is associated with certain thing that can be done on OpenCut.
 * For example, toggling playback or seeking.
 */ __turbopack_context__.s({
    "bindAction": ()=>bindAction,
    "invokeAction": ()=>invokeAction,
    "isActionBound": ()=>isActionBound,
    "unbindAction": ()=>unbindAction,
    "useActionHandler": ()=>useActionHandler,
    "useActiveActions": ()=>useActiveActions,
    "useIsActionBound": ()=>useIsActionBound
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
// Simple event emitter for action changes
class ActionEmitter {
    subscribe(listener) {
        this.listeners.push(listener);
        return ()=>{
            this.listeners = this.listeners.filter((l)=>l !== listener);
        };
    }
    emit(actions) {
        this.listeners.forEach((listener)=>listener(actions));
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$swc$2b$helpers$40$0$2e$5$2e$15$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "listeners", []);
    }
}
const actionEmitter = new ActionEmitter();
const boundActions = {};
let currentActiveActions = [];
function updateActiveActions() {
    const newActions = Object.keys(boundActions);
    currentActiveActions = newActions;
    actionEmitter.emit(newActions);
}
function bindAction(action, handler) {
    if (boundActions[action]) {
        var _boundActions_action;
        (_boundActions_action = boundActions[action]) === null || _boundActions_action === void 0 ? void 0 : _boundActions_action.push(handler);
    } else {
        // 'any' assertion because TypeScript doesn't seem to be able to figure out the links.
        boundActions[action] = [
            handler
        ];
    }
    updateActiveActions();
}
const invokeAction = (action, args, trigger)=>{
    var _boundActions_action;
    (_boundActions_action = boundActions[action]) === null || _boundActions_action === void 0 ? void 0 : _boundActions_action.forEach((handler)=>handler(args, trigger));
};
function unbindAction(action, handler) {
    var _boundActions_action, _boundActions_action1;
    // 'any' assertion because TypeScript doesn't seem to be able to figure out the links.
    boundActions[action] = (_boundActions_action = boundActions[action]) === null || _boundActions_action === void 0 ? void 0 : _boundActions_action.filter((x)=>x !== handler);
    if (((_boundActions_action1 = boundActions[action]) === null || _boundActions_action1 === void 0 ? void 0 : _boundActions_action1.length) === 0) {
        delete boundActions[action];
    }
    updateActiveActions();
}
function isActionBound(action) {
    return !!boundActions[action];
}
function useActionHandler(action, handler, isActive) {
    _s();
    const handlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(handler);
    const [isBound, setIsBound] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Update handler ref when handler changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useActionHandler.useEffect": ()=>{
            handlerRef.current = handler;
        }
    }["useActionHandler.useEffect"], [
        handler
    ]);
    // Create a stable handler wrapper
    const stableHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useActionHandler.useCallback[stableHandler]": (args, trigger)=>{
            handlerRef.current(args, trigger);
        }
    }["useActionHandler.useCallback[stableHandler]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useActionHandler.useEffect": ()=>{
            const shouldBind = isActive === undefined || (typeof isActive === "boolean" ? isActive : isActive.current);
            if (shouldBind && !isBound) {
                bindAction(action, stableHandler);
                setIsBound(true);
            } else if (!shouldBind && isBound) {
                unbindAction(action, stableHandler);
                setIsBound(false);
            }
            return ({
                "useActionHandler.useEffect": ()=>{
                    if (isBound) {
                        unbindAction(action, stableHandler);
                        setIsBound(false);
                    }
                }
            })["useActionHandler.useEffect"];
        }
    }["useActionHandler.useEffect"], [
        action,
        stableHandler,
        isActive,
        isBound
    ]);
    // Handle ref-based isActive changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useActionHandler.useEffect": ()=>{
            if (isActive && typeof isActive === "object" && "current" in isActive) {
                // Poll for ref changes
                const interval = setInterval({
                    "useActionHandler.useEffect.interval": ()=>{
                        const shouldBind = isActive.current;
                        if (shouldBind !== isBound) {
                            if (shouldBind) {
                                bindAction(action, stableHandler);
                            } else {
                                unbindAction(action, stableHandler);
                            }
                            setIsBound(shouldBind);
                        }
                    }
                }["useActionHandler.useEffect.interval"], 100);
                return ({
                    "useActionHandler.useEffect": ()=>clearInterval(interval)
                })["useActionHandler.useEffect"];
            }
        }
    }["useActionHandler.useEffect"], [
        action,
        stableHandler,
        isActive,
        isBound
    ]);
}
_s(useActionHandler, "MoAflWElhktpV0fEg0vv1cD+fj0=");
function useActiveActions() {
    _s1();
    const [activeActions, setActiveActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useActiveActions.useEffect": ()=>{
            // Set initial value
            setActiveActions(currentActiveActions);
            // Subscribe to changes
            const unsubscribe = actionEmitter.subscribe(setActiveActions);
            return unsubscribe;
        }
    }["useActiveActions.useEffect"], []);
    return activeActions;
}
_s1(useActiveActions, "GZcDr+y7rAqBB3+i9BKOk/sDI6w=");
function useIsActionBound(action) {
    _s2();
    const [isBound, setIsBound] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useIsActionBound.useState": ()=>isActionBound(action)
    }["useIsActionBound.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsActionBound.useEffect": ()=>{
            const updateBoundState = {
                "useIsActionBound.useEffect.updateBoundState": ()=>{
                    setIsBound(isActionBound(action));
                }
            }["useIsActionBound.useEffect.updateBoundState"];
            // Set initial value
            updateBoundState();
            // Subscribe to changes
            const unsubscribe = actionEmitter.subscribe(updateBoundState);
            return unsubscribe;
        }
    }["useIsActionBound.useEffect"], [
        action
    ]);
    return isBound;
}
_s2(useIsActionBound, "eEPWjVvgECuKltOhYy/gdTQlHAU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/app/editor/[project_id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Editor
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/resizable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$media$2d$panel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/editor/media-panel/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$properties$2d$panel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/editor/properties-panel/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$timeline$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/editor/timeline/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$preview$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/editor/preview-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$editor$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/editor/editor-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$panel$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/panel-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$providers$2f$editor$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/providers/editor-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$playback$2d$controls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/use-playback-controls.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$onboarding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/editor/onboarding.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
function Editor() {
    _s();
    const { toolsPanel, previewPanel, mainContent, timeline, setToolsPanel, setPreviewPanel, setMainContent, setTimeline, propertiesPanel, setPropertiesPanel, activePreset, resetCounter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$panel$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanelStore"])();
    const { activeProject, loadProject, createNewProject, isInvalidProjectId, markProjectIdAsInvalid } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectStore"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const projectId = params.project_id;
    const handledProjectIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const isInitializingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$playback$2d$controls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlaybackControls"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Editor.useEffect": ()=>{
            let isCancelled = false;
            const initProject = {
                "Editor.useEffect.initProject": async ()=>{
                    if (!projectId) {
                        return;
                    }
                    // Prevent duplicate initialization
                    if (isInitializingRef.current) {
                        return;
                    }
                    // Check if project is already loaded
                    if ((activeProject === null || activeProject === void 0 ? void 0 : activeProject.id) === projectId) {
                        return;
                    }
                    // Check global invalid tracking first (most important for preventing duplicates)
                    if (isInvalidProjectId(projectId)) {
                        return;
                    }
                    // Check if we've already handled this project ID locally
                    if (handledProjectIds.current.has(projectId)) {
                        return;
                    }
                    // Mark as initializing to prevent race conditions
                    isInitializingRef.current = true;
                    handledProjectIds.current.add(projectId);
                    try {
                        await loadProject(projectId);
                        // Check if component was unmounted during async operation
                        if (isCancelled) {
                            return;
                        }
                        // Project loaded successfully
                        isInitializingRef.current = false;
                    } catch (error) {
                        // Check if component was unmounted during async operation
                        if (isCancelled) {
                            return;
                        }
                        // More specific error handling - only create new project for actual "not found" errors
                        const isProjectNotFound = error instanceof Error && (error.message.includes("not found") || error.message.includes("does not exist") || error.message.includes("Project not found"));
                        if (isProjectNotFound) {
                            // Mark this project ID as invalid globally BEFORE creating project
                            markProjectIdAsInvalid(projectId);
                            try {
                                const newProjectId = await createNewProject("Untitled Project");
                                // Check again if component was unmounted
                                if (isCancelled) {
                                    return;
                                }
                                router.replace("/editor/".concat(newProjectId));
                            } catch (createError) {
                                console.error("Failed to create new project:", createError);
                            }
                        } else {
                            // For other errors (storage issues, corruption, etc.), don't create new project
                            console.error("Project loading failed with recoverable error:", error);
                            // Remove from handled set so user can retry
                            handledProjectIds.current.delete(projectId);
                        }
                        isInitializingRef.current = false;
                    }
                }
            }["Editor.useEffect.initProject"];
            initProject();
            // Cleanup function to cancel async operations
            return ({
                "Editor.useEffect": ()=>{
                    isCancelled = true;
                    isInitializingRef.current = false;
                }
            })["Editor.useEffect"];
        }
    }["Editor.useEffect"], [
        projectId,
        loadProject,
        createNewProject,
        router,
        isInvalidProjectId,
        markProjectIdAsInvalid
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$providers$2f$editor$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-screen flex flex-col bg-background overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$editor$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorHeader"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-h-0 min-w-0",
                    children: activePreset === "media" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                        direction: "horizontal",
                        className: "h-full w-full gap-[0.18rem] px-3 pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                defaultSize: toolsPanel,
                                minSize: 15,
                                maxSize: 40,
                                onResize: setToolsPanel,
                                className: "min-w-0 rounded-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$media$2d$panel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaPanel"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                withHandle: true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                defaultSize: 100 - toolsPanel,
                                minSize: 60,
                                className: "min-w-0 min-h-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                                    direction: "vertical",
                                    className: "h-full w-full gap-[0.18rem]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                            defaultSize: mainContent,
                                            minSize: 30,
                                            maxSize: 85,
                                            onResize: setMainContent,
                                            className: "min-h-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                                                direction: "horizontal",
                                                className: "h-full w-full gap-[0.19rem]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                                        defaultSize: previewPanel,
                                                        minSize: 30,
                                                        onResize: setPreviewPanel,
                                                        className: "min-w-0 min-h-0 flex-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$preview$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreviewPanel"], {}, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                                        withHandle: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                                        defaultSize: propertiesPanel,
                                                        minSize: 15,
                                                        maxSize: 40,
                                                        onResize: setPropertiesPanel,
                                                        className: "min-w-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$properties$2d$panel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertiesPanel"], {}, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                            withHandle: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                            defaultSize: timeline,
                                            minSize: 15,
                                            maxSize: 70,
                                            onResize: setTimeline,
                                            className: "min-h-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$timeline$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timeline"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 221,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                lineNumber: 176,
                                columnNumber: 15
                            }, this)
                        ]
                    }, "media-".concat(activePreset, "-").concat(resetCounter), true, {
                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                        lineNumber: 159,
                        columnNumber: 13
                    }, this) : activePreset === "inspector" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                        direction: "horizontal",
                        className: "h-full w-full gap-[0.18rem] px-3 pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                defaultSize: 100 - propertiesPanel,
                                minSize: 30,
                                onResize: (size)=>setPropertiesPanel(100 - size),
                                className: "min-w-0 min-h-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                                    direction: "vertical",
                                    className: "h-full w-full gap-[0.18rem]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                            defaultSize: mainContent,
                                            minSize: 30,
                                            maxSize: 85,
                                            onResize: setMainContent,
                                            className: "min-h-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                                                direction: "horizontal",
                                                className: "h-full w-full gap-[0.19rem]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                                        defaultSize: toolsPanel,
                                                        minSize: 15,
                                                        maxSize: 40,
                                                        onResize: setToolsPanel,
                                                        className: "min-w-0 rounded-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$media$2d$panel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaPanel"], {}, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                                        withHandle: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                                        defaultSize: previewPanel,
                                                        minSize: 30,
                                                        onResize: setPreviewPanel,
                                                        className: "min-w-0 min-h-0 flex-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$preview$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreviewPanel"], {}, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                            lineNumber: 278,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                lineNumber: 256,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                            withHandle: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 283,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                            defaultSize: timeline,
                                            minSize: 15,
                                            maxSize: 70,
                                            onResize: setTimeline,
                                            className: "min-h-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$timeline$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timeline"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                lineNumber: 292,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                withHandle: true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                lineNumber: 297,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                defaultSize: propertiesPanel,
                                minSize: 15,
                                maxSize: 40,
                                onResize: setPropertiesPanel,
                                className: "min-w-0 min-h-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$properties$2d$panel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertiesPanel"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                    lineNumber: 306,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                lineNumber: 299,
                                columnNumber: 15
                            }, this)
                        ]
                    }, "inspector-".concat(activePreset, "-").concat(resetCounter), true, {
                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                        lineNumber: 234,
                        columnNumber: 13
                    }, this) : activePreset === "vertical-preview" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                        direction: "horizontal",
                        className: "h-full w-full gap-[0.18rem] px-3 pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                defaultSize: 100 - previewPanel,
                                minSize: 30,
                                onResize: (size)=>setPreviewPanel(100 - size),
                                className: "min-w-0 min-h-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                                    direction: "vertical",
                                    className: "h-full w-full gap-[0.18rem]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                            defaultSize: mainContent,
                                            minSize: 30,
                                            maxSize: 85,
                                            onResize: setMainContent,
                                            className: "min-h-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                                                direction: "horizontal",
                                                className: "h-full w-full gap-[0.19rem]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                                        defaultSize: toolsPanel,
                                                        minSize: 15,
                                                        maxSize: 40,
                                                        onResize: setToolsPanel,
                                                        className: "min-w-0 rounded-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$media$2d$panel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaPanel"], {}, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                            lineNumber: 343,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                                        withHandle: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                                        defaultSize: propertiesPanel,
                                                        minSize: 15,
                                                        maxSize: 40,
                                                        onResize: setPropertiesPanel,
                                                        className: "min-w-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$properties$2d$panel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertiesPanel"], {}, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                lineNumber: 332,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 325,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                            withHandle: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 360,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                            defaultSize: timeline,
                                            minSize: 15,
                                            maxSize: 70,
                                            onResize: setTimeline,
                                            className: "min-h-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$timeline$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timeline"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                lineNumber: 369,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 362,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                lineNumber: 315,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                withHandle: true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                lineNumber: 374,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                defaultSize: previewPanel,
                                minSize: 30,
                                onResize: setPreviewPanel,
                                className: "min-w-0 min-h-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$preview$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreviewPanel"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                    lineNumber: 382,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                lineNumber: 376,
                                columnNumber: 15
                            }, this)
                        ]
                    }, "vertical-preview-".concat(activePreset, "-").concat(resetCounter), true, {
                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                        lineNumber: 310,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                        direction: "vertical",
                        className: "h-full w-full gap-[0.18rem]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                defaultSize: mainContent,
                                minSize: 30,
                                maxSize: 85,
                                onResize: setMainContent,
                                className: "min-h-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                                    direction: "horizontal",
                                    className: "h-full w-full gap-[0.19rem] px-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                            defaultSize: toolsPanel,
                                            minSize: 15,
                                            maxSize: 40,
                                            onResize: setToolsPanel,
                                            className: "min-w-0 rounded-sm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$media$2d$panel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaPanel"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                lineNumber: 411,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 404,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                            withHandle: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 414,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                            defaultSize: previewPanel,
                                            minSize: 30,
                                            onResize: setPreviewPanel,
                                            className: "min-w-0 min-h-0 flex-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$preview$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreviewPanel"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                lineNumber: 423,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                            withHandle: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 426,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                            defaultSize: propertiesPanel,
                                            minSize: 15,
                                            maxSize: 40,
                                            onResize: setPropertiesPanel,
                                            className: "min-w-0 rounded-sm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$properties$2d$panel$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertiesPanel"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                lineNumber: 435,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 428,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                    lineNumber: 399,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                lineNumber: 391,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                withHandle: true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                lineNumber: 440,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                defaultSize: timeline,
                                minSize: 15,
                                maxSize: 70,
                                onResize: setTimeline,
                                className: "min-h-0 px-3 pb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$timeline$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timeline"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                    lineNumber: 450,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                lineNumber: 443,
                                columnNumber: 15
                            }, this)
                        ]
                    }, "default-".concat(activePreset, "-").concat(resetCounter), true, {
                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                        lineNumber: 386,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$onboarding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Onboarding"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                    lineNumber: 455,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
            lineNumber: 155,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_s(Editor, "chHfs8yc0W4FJJZlaRrMyfJGwyQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$panel$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePanelStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$playback$2d$controls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlaybackControls"]
    ];
});
_c = Editor;
var _c;
__turbopack_context__.k.register(_c, "Editor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=apps_web_src_b2560940._.js.map