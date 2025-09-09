(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/apps/web/src/hooks/use-drag-drop.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useDragDrop": ()=>useDragDrop
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
// Helper function to check if drag contains files from external sources (not internal app drags)
const containsFiles = (dataTransfer)=>{
    // Check if this is an internal app drag (media item)
    if (dataTransfer.types.includes("application/x-media-item")) {
        return false;
    }
    // Only show overlay for external file drags
    return dataTransfer.types.includes("Files");
};
function useDragDrop() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const [isDragOver, setIsDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dragCounterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const handleDragEnter = (e)=>{
        e.preventDefault();
        // Only handle external file drags, not internal app element drags
        if (!containsFiles(e.dataTransfer)) {
            return;
        }
        dragCounterRef.current += 1;
        if (!isDragOver) {
            setIsDragOver(true);
        }
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        // Only handle file drags
        if (!containsFiles(e.dataTransfer)) {
            return;
        }
    };
    const handleDragLeave = (e)=>{
        e.preventDefault();
        // Only handle file drags
        if (!containsFiles(e.dataTransfer)) {
            return;
        }
        dragCounterRef.current -= 1;
        if (dragCounterRef.current === 0) {
            setIsDragOver(false);
        }
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        setIsDragOver(false);
        dragCounterRef.current = 0;
        // Only handle file drops
        if (options.onDrop && e.dataTransfer.files && containsFiles(e.dataTransfer)) {
            options.onDrop(e.dataTransfer.files);
        }
    };
    const dragProps = {
        onDragEnter: handleDragEnter,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop
    };
    return {
        isDragOver,
        dragProps
    };
}
_s(useDragDrop, "XH8FEYOHBzFLFgj/KpUHbsThiHE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/hooks/use-highlight-scroll.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useHighlightScroll": ()=>useHighlightScroll
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useHighlightScroll(highlightId, onClearHighlight) {
    let highlightDuration = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1000;
    _s();
    const [highlightedId, setHighlightedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const elementRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const registerElement = (id, element)=>{
        if (element) {
            elementRefs.current.set(id, element);
        } else {
            elementRefs.current.delete(id);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHighlightScroll.useEffect": ()=>{
            if (!highlightId) return;
            setHighlightedId(highlightId);
            const target = elementRefs.current.get(highlightId);
            target === null || target === void 0 ? void 0 : target.scrollIntoView({
                block: "center"
            });
            const timeout = setTimeout({
                "useHighlightScroll.useEffect.timeout": ()=>{
                    setHighlightedId(null);
                    onClearHighlight();
                }
            }["useHighlightScroll.useEffect.timeout"], highlightDuration);
            return ({
                "useHighlightScroll.useEffect": ()=>clearTimeout(timeout)
            })["useHighlightScroll.useEffect"];
        }
    }["useHighlightScroll.useEffect"], [
        highlightId,
        onClearHighlight,
        highlightDuration
    ]);
    return {
        highlightedId,
        registerElement
    };
}
_s(useHighlightScroll, "6tbLOA8nRZX5vsrRlobgpn5MrDk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/hooks/use-sound-search.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useSoundSearch": ()=>useSoundSearch
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$sounds$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/sounds-store.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useSoundSearch(query, commercialOnly) {
    _s();
    const { searchResults, isSearching, searchError, lastSearchQuery, currentPage, hasNextPage, isLoadingMore, totalCount, setSearchResults, setSearching, setSearchError, setLastSearchQuery, setCurrentPage, setHasNextPage, setTotalCount, setLoadingMore, appendSearchResults, appendTopSounds, resetPagination } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$sounds$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSoundsStore"])();
    // Load more function for infinite scroll
    const loadMore = async ()=>{
        if (isLoadingMore || !hasNextPage) return;
        try {
            setLoadingMore(true);
            const nextPage = currentPage + 1;
            const searchParams = new URLSearchParams({
                page: nextPage.toString(),
                type: "effects"
            });
            if (query.trim()) {
                searchParams.set("q", query);
            }
            searchParams.set("commercial_only", commercialOnly.toString());
            const response = await fetch("/api/sounds/search?".concat(searchParams.toString()));
            if (response.ok) {
                const data = await response.json();
                // Append to appropriate array based on whether we have a query
                if (query.trim()) {
                    appendSearchResults(data.results);
                } else {
                    appendTopSounds(data.results);
                }
                setCurrentPage(nextPage);
                setHasNextPage(!!data.next);
                setTotalCount(data.count);
            } else {
                setSearchError("Load more failed: ".concat(response.status));
            }
        } catch (err) {
            setSearchError(err instanceof Error ? err.message : "Load more failed");
        } finally{
            setLoadingMore(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSoundSearch.useEffect": ()=>{
            if (!query.trim()) {
                setSearchResults([]);
                setSearchError(null);
                setLastSearchQuery("");
                // Don't reset pagination here - top sounds pagination is managed by prefetcher
                return;
            }
            // If we already searched for this query and have results, don't search again
            if (query === lastSearchQuery && searchResults.length > 0) {
                return;
            }
            let ignore = false;
            const timeoutId = setTimeout({
                "useSoundSearch.useEffect.timeoutId": async ()=>{
                    try {
                        setSearching(true);
                        setSearchError(null);
                        resetPagination();
                        const response = await fetch("/api/sounds/search?q=".concat(encodeURIComponent(query), "&type=effects&page=1"));
                        if (!ignore) {
                            if (response.ok) {
                                const data = await response.json();
                                setSearchResults(data.results);
                                setLastSearchQuery(query);
                                setHasNextPage(!!data.next);
                                setTotalCount(data.count);
                                setCurrentPage(1);
                            } else {
                                setSearchError("Search failed: ".concat(response.status));
                            }
                        }
                    } catch (err) {
                        if (!ignore) {
                            setSearchError(err instanceof Error ? err.message : "Search failed");
                        }
                    } finally{
                        if (!ignore) {
                            setSearching(false);
                        }
                    }
                }
            }["useSoundSearch.useEffect.timeoutId"], 300);
            return ({
                "useSoundSearch.useEffect": ()=>{
                    clearTimeout(timeoutId);
                    ignore = true;
                }
            })["useSoundSearch.useEffect"];
        }
    }["useSoundSearch.useEffect"], [
        query,
        lastSearchQuery,
        searchResults.length,
        setSearchResults,
        setSearching,
        setSearchError,
        setLastSearchQuery,
        setCurrentPage,
        setHasNextPage,
        setTotalCount,
        resetPagination
    ]);
    return {
        results: searchResults,
        isLoading: isSearching,
        error: searchError,
        loadMore,
        hasNextPage,
        isLoadingMore,
        totalCount
    };
}
_s(useSoundSearch, "gVfTWAd7FicL6Y8FzMUmCg7XQpA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$sounds$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSoundsStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/hooks/use-infinite-scroll.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useInfiniteScroll": ()=>useInfiniteScroll
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useInfiniteScroll(param) {
    let { onLoadMore, hasMore, isLoading, threshold = 200, enabled = true } = param;
    _s();
    const scrollAreaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInfiniteScroll.useCallback[handleScroll]": (event)=>{
            if (!enabled) return;
            const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
            const nearBottom = scrollTop + clientHeight >= scrollHeight - threshold;
            if (nearBottom && hasMore && !isLoading) {
                onLoadMore();
            }
        }
    }["useInfiniteScroll.useCallback[handleScroll]"], [
        onLoadMore,
        hasMore,
        isLoading,
        threshold,
        enabled
    ]);
    return {
        scrollAreaRef,
        handleScroll
    };
}
_s(useInfiniteScroll, "iGddA6LBSxPiVqYTjPq6T5Nlp9c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/hooks/use-aspect-ratio.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAspectRatio": ()=>useAspectRatio
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$editor$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/editor-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/media-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useAspectRatio() {
    _s();
    const { canvasPresets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$editor$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])();
    const { activeProject } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectStore"])();
    const { mediaFiles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaStore"])();
    const { tracks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimelineStore"])();
    const canvasSize = (activeProject === null || activeProject === void 0 ? void 0 : activeProject.canvasSize) || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_CANVAS_SIZE"];
    const canvasMode = (activeProject === null || activeProject === void 0 ? void 0 : activeProject.canvasMode) || "preset";
    // Find the current preset based on canvas size
    const currentPreset = canvasPresets.find((preset)=>preset.width === canvasSize.width && preset.height === canvasSize.height);
    // Get the original aspect ratio from the first video/image in timeline
    const getOriginalAspectRatio = ()=>{
        // Find first video or image in timeline
        for (const track of tracks){
            for (const element of track.elements){
                if (element.type === "media") {
                    const mediaFile = mediaFiles.find((file)=>file.id === element.mediaId);
                    if (mediaFile && (mediaFile.type === "video" || mediaFile.type === "image")) {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaAspectRatio"])(mediaFile);
                    }
                }
            }
        }
        return 16 / 9; // Default aspect ratio
    };
    // Get current aspect ratio
    const getCurrentAspectRatio = ()=>{
        return canvasSize.width / canvasSize.height;
    };
    // Format aspect ratio as a readable string
    const formatAspectRatio = (aspectRatio)=>{
        // Check if it matches a common aspect ratio
        const ratios = [
            {
                ratio: 16 / 9,
                label: "16:9"
            },
            {
                ratio: 9 / 16,
                label: "9:16"
            },
            {
                ratio: 1,
                label: "1:1"
            },
            {
                ratio: 4 / 3,
                label: "4:3"
            },
            {
                ratio: 3 / 4,
                label: "3:4"
            },
            {
                ratio: 21 / 9,
                label: "21:9"
            }
        ];
        for (const { ratio, label } of ratios){
            if (Math.abs(aspectRatio - ratio) < 0.01) {
                return label;
            }
        }
        // If not a common ratio, format as decimal
        return aspectRatio.toFixed(2);
    };
    // Check if current mode is "Original"
    const isOriginal = canvasMode === "original";
    // Get display name for current aspect ratio
    const getDisplayName = ()=>{
        // If explicitly set to original mode, always show "Original"
        if (canvasMode === "original") {
            return "Original";
        }
        if (currentPreset) {
            return currentPreset.name;
        }
        return formatAspectRatio(getCurrentAspectRatio());
    };
    return {
        currentPreset,
        canvasMode,
        isOriginal,
        getCurrentAspectRatio,
        getOriginalAspectRatio,
        formatAspectRatio,
        getDisplayName,
        canvasSize,
        canvasPresets
    };
}
_s(useAspectRatio, "cKNXmkFi6/asycoN5E8wxbYqhzk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$editor$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimelineStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/hooks/use-timeline-zoom.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useTimelineZoom": ()=>useTimelineZoom
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useTimelineZoom(param) {
    let { containerRef, isInTimeline = false } = param;
    _s();
    const [zoomLevel, setZoomLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const handleWheel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimelineZoom.useCallback[handleWheel]": (e)=>{
            // Only zoom if user is using pinch gesture (ctrlKey or metaKey is true)
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                const delta = e.deltaY > 0 ? -0.15 : 0.15;
                setZoomLevel({
                    "useTimelineZoom.useCallback[handleWheel]": (prev)=>Math.max(0.1, Math.min(10, prev + delta))
                }["useTimelineZoom.useCallback[handleWheel]"]);
            } else if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                // Don't prevent default - let ScrollArea handle horizontal scrolling
                return;
            }
        // Otherwise, allow normal scrolling
        }
    }["useTimelineZoom.useCallback[handleWheel]"], []);
    // Prevent browser zooming in/out when in timeline
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTimelineZoom.useEffect": ()=>{
            const preventZoom = {
                "useTimelineZoom.useEffect.preventZoom": (e)=>{
                    var _containerRef_current;
                    if (isInTimeline && (e.ctrlKey || e.metaKey) && ((_containerRef_current = containerRef.current) === null || _containerRef_current === void 0 ? void 0 : _containerRef_current.contains(e.target))) {
                        e.preventDefault();
                    }
                }
            }["useTimelineZoom.useEffect.preventZoom"];
            document.addEventListener("wheel", preventZoom, {
                passive: false
            });
            return ({
                "useTimelineZoom.useEffect": ()=>{
                    document.removeEventListener("wheel", preventZoom);
                }
            })["useTimelineZoom.useEffect"];
        }
    }["useTimelineZoom.useEffect"], [
        isInTimeline,
        containerRef
    ]);
    return {
        zoomLevel,
        setZoomLevel,
        handleWheel
    };
}
_s(useTimelineZoom, "VeUiYr74tCuUE+TiBT/myb5dgQg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/hooks/use-timeline-element-resize.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useTimelineElementResize": ()=>useTimelineElementResize
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/media-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/timeline-constants.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function useTimelineElementResize(param) {
    let { element, track, zoomLevel } = param;
    _s();
    const [resizing, setResizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { mediaFiles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaStore"])();
    const { updateElementStartTime, updateElementTrim, updateElementDuration, pushHistory } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimelineStore"])();
    // Set up document-level mouse listeners during resize (like proper drag behavior)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTimelineElementResize.useEffect": ()=>{
            if (!resizing) return;
            const handleDocumentMouseMove = {
                "useTimelineElementResize.useEffect.handleDocumentMouseMove": (e)=>{
                    updateTrimFromMouseMove({
                        clientX: e.clientX
                    });
                }
            }["useTimelineElementResize.useEffect.handleDocumentMouseMove"];
            const handleDocumentMouseUp = {
                "useTimelineElementResize.useEffect.handleDocumentMouseUp": ()=>{
                    handleResizeEnd();
                }
            }["useTimelineElementResize.useEffect.handleDocumentMouseUp"];
            // Add document-level listeners for proper drag behavior
            document.addEventListener("mousemove", handleDocumentMouseMove);
            document.addEventListener("mouseup", handleDocumentMouseUp);
            return ({
                "useTimelineElementResize.useEffect": ()=>{
                    document.removeEventListener("mousemove", handleDocumentMouseMove);
                    document.removeEventListener("mouseup", handleDocumentMouseUp);
                }
            })["useTimelineElementResize.useEffect"];
        }
    }["useTimelineElementResize.useEffect"], [
        resizing
    ]); // Re-run when resizing state changes
    const handleResizeStart = (e, elementId, side)=>{
        e.stopPropagation();
        e.preventDefault();
        // Push history once at the start of the resize operation
        pushHistory();
        setResizing({
            elementId,
            side,
            startX: e.clientX,
            initialTrimStart: element.trimStart,
            initialTrimEnd: element.trimEnd
        });
    };
    const canExtendElementDuration = ()=>{
        // Text elements can always be extended
        if (element.type === "text") {
            return true;
        }
        // Media elements - check the media type
        if (element.type === "media") {
            const mediaFile = mediaFiles.find((file)=>file.id === element.mediaId);
            if (!mediaFile) return false;
            // Images can be extended (static content)
            if (mediaFile.type === "image") {
                return true;
            }
            // Videos and audio cannot be extended beyond their natural duration
            // (no additional content exists)
            return false;
        }
        return false;
    };
    const updateTrimFromMouseMove = (e)=>{
        var _projectStore_activeProject;
        if (!resizing) return;
        const deltaX = e.clientX - resizing.startX;
        // Reasonable sensitivity for resize operations - similar to timeline scale
        const deltaTime = deltaX / (50 * zoomLevel);
        // Get project FPS for frame snapping
        const projectStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectStore"].getState();
        const projectFps = ((_projectStore_activeProject = projectStore.activeProject) === null || _projectStore_activeProject === void 0 ? void 0 : _projectStore_activeProject.fps) || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FPS"];
        if (resizing.side === "left") {
            // Left resize - different behavior for media vs text/image elements
            const maxAllowed = element.duration - resizing.initialTrimEnd - 0.1;
            const calculated = resizing.initialTrimStart + deltaTime;
            if (calculated >= 0) {
                // Normal trimming within available content
                const newTrimStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapTimeToFrame"])(Math.min(maxAllowed, calculated), projectFps);
                const trimDelta = newTrimStart - resizing.initialTrimStart;
                const newStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapTimeToFrame"])(element.startTime + trimDelta, projectFps);
                updateElementTrim(track.id, element.id, newTrimStart, resizing.initialTrimEnd, false);
                updateElementStartTime(track.id, element.id, newStartTime, false);
            } else {
                // Trying to extend beyond trimStart = 0
                if (canExtendElementDuration()) {
                    // Text/Image: extend element to the left by moving startTime and increasing duration
                    const extensionAmount = Math.abs(calculated);
                    const maxExtension = element.startTime;
                    const actualExtension = Math.min(extensionAmount, maxExtension);
                    const newStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapTimeToFrame"])(element.startTime - actualExtension, projectFps);
                    const newDuration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapTimeToFrame"])(element.duration + actualExtension, projectFps);
                    // Keep trimStart at 0 and extend the element
                    updateElementTrim(track.id, element.id, 0, resizing.initialTrimEnd, false);
                    updateElementDuration(track.id, element.id, newDuration, false);
                    updateElementStartTime(track.id, element.id, newStartTime, false);
                } else {
                    // Video/Audio: can't extend beyond original content - limit to trimStart = 0
                    const newTrimStart = 0;
                    const trimDelta = newTrimStart - resizing.initialTrimStart;
                    const newStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapTimeToFrame"])(element.startTime + trimDelta, projectFps);
                    updateElementTrim(track.id, element.id, newTrimStart, resizing.initialTrimEnd, false);
                    updateElementStartTime(track.id, element.id, newStartTime, false);
                }
            }
        } else {
            // Right resize - can extend duration for supported element types
            const calculated = resizing.initialTrimEnd - deltaTime;
            if (calculated < 0) {
                // We're trying to extend beyond original duration
                if (canExtendElementDuration()) {
                    // Extend the duration instead of reducing trimEnd further
                    const extensionNeeded = Math.abs(calculated);
                    const newDuration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapTimeToFrame"])(element.duration + extensionNeeded, projectFps);
                    const newTrimEnd = 0; // Reset trimEnd to 0 since we're extending
                    // Update duration first, then trim
                    updateElementDuration(track.id, element.id, newDuration, false);
                    updateElementTrim(track.id, element.id, resizing.initialTrimStart, newTrimEnd, false);
                } else {
                    // Can't extend - just set trimEnd to 0 (maximum possible extension)
                    updateElementTrim(track.id, element.id, resizing.initialTrimStart, 0, false);
                }
            } else {
                // Normal trimming within original duration
                // Calculate the desired end time based on mouse movement
                const currentEndTime = element.startTime + element.duration - element.trimStart - element.trimEnd;
                const desiredEndTime = currentEndTime + deltaTime;
                // Snap the desired end time to frame
                const snappedEndTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapTimeToFrame"])(desiredEndTime, projectFps);
                // Calculate what trimEnd should be to achieve this snapped end time
                const newTrimEnd = Math.max(0, element.duration - element.trimStart - (snappedEndTime - element.startTime));
                // Ensure we don't trim more than available content (leave at least 0.1s visible)
                const maxTrimEnd = element.duration - element.trimStart - 0.1;
                const finalTrimEnd = Math.min(maxTrimEnd, newTrimEnd);
                updateElementTrim(track.id, element.id, element.trimStart, finalTrimEnd, false);
            }
        }
    };
    const handleResizeEnd = ()=>{
        setResizing(null);
    };
    return {
        resizing,
        isResizing: resizing !== null,
        handleResizeStart,
        // Return empty handlers since we use document listeners now
        handleResizeMove: ()=>{},
        handleResizeEnd: ()=>{}
    };
}
_s(useTimelineElementResize, "DLppCwn2SG4JLWoVfWSlqtD/OFg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimelineStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/hooks/use-timeline-snapping.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useTimelineSnapping": ()=>useTimelineSnapping
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/timeline-constants.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useTimelineSnapping() {
    let { snapThreshold = 10, enableElementSnapping = true, enablePlayheadSnapping = true } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const findSnapPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimelineSnapping.useCallback[findSnapPoints]": (tracks, currentTime, playheadTime, zoomLevel, excludeElementId)=>{
            const snapPoints = [];
            // Add element snap points
            if (enableElementSnapping) {
                tracks.forEach({
                    "useTimelineSnapping.useCallback[findSnapPoints]": (track)=>{
                        track.elements.forEach({
                            "useTimelineSnapping.useCallback[findSnapPoints]": (element)=>{
                                // Skip the element being dragged
                                if (element.id === excludeElementId) return;
                                const elementStart = element.startTime;
                                const elementEnd = element.startTime + (element.duration - element.trimStart - element.trimEnd);
                                snapPoints.push({
                                    time: elementStart,
                                    type: "element-start",
                                    elementId: element.id,
                                    trackId: track.id
                                }, {
                                    time: elementEnd,
                                    type: "element-end",
                                    elementId: element.id,
                                    trackId: track.id
                                });
                            }
                        }["useTimelineSnapping.useCallback[findSnapPoints]"]);
                    }
                }["useTimelineSnapping.useCallback[findSnapPoints]"]);
            }
            // Add playhead snap point
            if (enablePlayheadSnapping) {
                snapPoints.push({
                    time: playheadTime,
                    type: "playhead"
                });
            }
            return snapPoints;
        }
    }["useTimelineSnapping.useCallback[findSnapPoints]"], [
        enableElementSnapping,
        enablePlayheadSnapping
    ]);
    const snapToNearestPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimelineSnapping.useCallback[snapToNearestPoint]": (targetTime, snapPoints, zoomLevel)=>{
            const pixelsPerSecond = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIMELINE_CONSTANTS"].PIXELS_PER_SECOND * zoomLevel;
            const thresholdInSeconds = snapThreshold / pixelsPerSecond;
            let closestSnapPoint = null;
            let closestDistance = Infinity;
            snapPoints.forEach({
                "useTimelineSnapping.useCallback[snapToNearestPoint]": (snapPoint)=>{
                    const distance = Math.abs(targetTime - snapPoint.time);
                    if (distance < thresholdInSeconds && distance < closestDistance) {
                        closestDistance = distance;
                        closestSnapPoint = snapPoint;
                    }
                }
            }["useTimelineSnapping.useCallback[snapToNearestPoint]"]);
            return {
                snappedTime: closestSnapPoint ? closestSnapPoint.time : targetTime,
                snapPoint: closestSnapPoint,
                snapDistance: closestDistance
            };
        }
    }["useTimelineSnapping.useCallback[snapToNearestPoint]"], [
        snapThreshold
    ]);
    const snapElementPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimelineSnapping.useCallback[snapElementPosition]": (targetTime, tracks, playheadTime, zoomLevel, excludeElementId)=>{
            const snapPoints = findSnapPoints(tracks, targetTime, playheadTime, zoomLevel, excludeElementId);
            return snapToNearestPoint(targetTime, snapPoints, zoomLevel);
        }
    }["useTimelineSnapping.useCallback[snapElementPosition]"], [
        findSnapPoints,
        snapToNearestPoint
    ]);
    const snapElementEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimelineSnapping.useCallback[snapElementEdge]": function(targetTime, elementDuration, tracks, playheadTime, zoomLevel, excludeElementId) {
            let snapToStart = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : true // true for start edge, false for end edge
            ;
            const snapPoints = findSnapPoints(tracks, targetTime, playheadTime, zoomLevel, excludeElementId);
            // For end edge snapping, we need to account for element duration
            const effectiveTargetTime = snapToStart ? targetTime : targetTime + elementDuration;
            const snapResult = snapToNearestPoint(effectiveTargetTime, snapPoints, zoomLevel);
            // Adjust the snapped time back for end edge
            if (!snapToStart && snapResult.snapPoint) {
                snapResult.snappedTime = snapResult.snappedTime - elementDuration;
            }
            return snapResult;
        }
    }["useTimelineSnapping.useCallback[snapElementEdge]"], [
        findSnapPoints,
        snapToNearestPoint
    ]);
    return {
        snapElementPosition,
        snapElementEdge,
        findSnapPoints,
        snapToNearestPoint
    };
}
_s(useTimelineSnapping, "fAYJdrOmOvS5SPYdB+L6cSzpODE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/hooks/use-edge-auto-scroll.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useEdgeAutoScroll": ()=>useEdgeAutoScroll
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useEdgeAutoScroll(param) {
    let { isActive, getMouseClientX, rulerScrollRef, tracksScrollRef, contentWidth, edgeThreshold = 100, maxScrollSpeed = 15 } = param;
    _s();
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEdgeAutoScroll.useEffect": ()=>{
            if (!isActive) {
                if (rafRef.current) {
                    cancelAnimationFrame(rafRef.current);
                    rafRef.current = null;
                }
                return;
            }
            const step = {
                "useEdgeAutoScroll.useEffect.step": ()=>{
                    const rulerViewport = rulerScrollRef.current;
                    const tracksViewport = tracksScrollRef.current;
                    if (!rulerViewport || !tracksViewport) {
                        rafRef.current = requestAnimationFrame(step);
                        return;
                    }
                    const viewportRect = rulerViewport.getBoundingClientRect();
                    const mouseX = getMouseClientX();
                    const mouseXRelative = mouseX - viewportRect.left;
                    const viewportWidth = rulerViewport.clientWidth;
                    const intrinsicContentWidth = rulerViewport.scrollWidth;
                    const effectiveContentWidth = Math.max(contentWidth, intrinsicContentWidth);
                    const scrollMax = Math.max(0, effectiveContentWidth - viewportWidth);
                    let scrollSpeed = 0;
                    if (mouseXRelative < edgeThreshold && rulerViewport.scrollLeft > 0) {
                        const edgeDistance = Math.max(0, mouseXRelative);
                        const intensity = 1 - edgeDistance / edgeThreshold;
                        scrollSpeed = -maxScrollSpeed * intensity;
                    } else if (mouseXRelative > viewportWidth - edgeThreshold && rulerViewport.scrollLeft < scrollMax) {
                        const edgeDistance = Math.max(0, viewportWidth - edgeThreshold - mouseXRelative);
                        const intensity = 1 - edgeDistance / edgeThreshold;
                        scrollSpeed = maxScrollSpeed * intensity;
                    }
                    if (scrollSpeed !== 0) {
                        const newScrollLeft = Math.max(0, Math.min(scrollMax, rulerViewport.scrollLeft + scrollSpeed));
                        rulerViewport.scrollLeft = newScrollLeft;
                        tracksViewport.scrollLeft = newScrollLeft;
                    }
                    rafRef.current = requestAnimationFrame(step);
                }
            }["useEdgeAutoScroll.useEffect.step"];
            rafRef.current = requestAnimationFrame(step);
            return ({
                "useEdgeAutoScroll.useEffect": ()=>{
                    if (rafRef.current) {
                        cancelAnimationFrame(rafRef.current);
                        rafRef.current = null;
                    }
                }
            })["useEdgeAutoScroll.useEffect"];
        }
    }["useEdgeAutoScroll.useEffect"], [
        isActive,
        getMouseClientX,
        rulerScrollRef,
        tracksScrollRef,
        contentWidth,
        edgeThreshold,
        maxScrollSpeed
    ]);
}
_s(useEdgeAutoScroll, "fdJLlAKv8CKQtVv/jAJY+BX1wEc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/hooks/use-timeline-playhead.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useTimelinePlayhead": ()=>useTimelinePlayhead
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/timeline-constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/playback-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$edge$2d$auto$2d$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/use-edge-auto-scroll.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function useTimelinePlayhead(param) {
    let { currentTime, duration, zoomLevel, seek, rulerRef, rulerScrollRef, tracksScrollRef, playheadRef } = param;
    _s();
    // Playhead scrubbing state
    const [isScrubbing, setIsScrubbing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrubTime, setScrubTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Ruler drag detection state
    const [isDraggingRuler, setIsDraggingRuler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasDraggedRuler, setHasDraggedRuler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastMouseXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const playheadPosition = isScrubbing && scrubTime !== null ? scrubTime : currentTime;
    // --- Playhead Scrubbing Handlers ---
    const handlePlayheadMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimelinePlayhead.useCallback[handlePlayheadMouseDown]": (e)=>{
            e.preventDefault();
            e.stopPropagation(); // Prevent ruler drag from triggering
            setIsScrubbing(true);
            handleScrub(e);
        }
    }["useTimelinePlayhead.useCallback[handlePlayheadMouseDown]"], [
        duration,
        zoomLevel
    ]);
    // Ruler mouse down handler
    const handleRulerMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimelinePlayhead.useCallback[handleRulerMouseDown]": (e)=>{
            var _playheadRef_current;
            // Only handle left mouse button
            if (e.button !== 0) return;
            // Don't interfere if clicking on the playhead itself
            if (playheadRef === null || playheadRef === void 0 ? void 0 : (_playheadRef_current = playheadRef.current) === null || _playheadRef_current === void 0 ? void 0 : _playheadRef_current.contains(e.target)) return;
            e.preventDefault();
            setIsDraggingRuler(true);
            setHasDraggedRuler(false);
            // Start scrubbing immediately
            setIsScrubbing(true);
            handleScrub(e);
        }
    }["useTimelinePlayhead.useCallback[handleRulerMouseDown]"], [
        duration,
        zoomLevel
    ]);
    const handleScrub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimelinePlayhead.useCallback[handleScrub]": (e)=>{
            var _projectStore_activeProject;
            const ruler = rulerRef.current;
            if (!ruler) return;
            const rect = ruler.getBoundingClientRect();
            const rawX = e.clientX - rect.left;
            // Get the timeline content width based on duration and zoom
            const timelineContentWidth = duration * 50 * zoomLevel; // TIMELINE_CONSTANTS.PIXELS_PER_SECOND = 50
            // Constrain x to be within the timeline content bounds
            const x = Math.max(0, Math.min(timelineContentWidth, rawX));
            const rawTime = Math.max(0, Math.min(duration, x / (50 * zoomLevel)));
            // Use frame snapping for playhead scrubbing
            const projectStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectStore"].getState();
            const projectFps = ((_projectStore_activeProject = projectStore.activeProject) === null || _projectStore_activeProject === void 0 ? void 0 : _projectStore_activeProject.fps) || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FPS"];
            const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapTimeToFrame"])(rawTime, projectFps);
            // Debug logging
            if (rawX < 0 || x !== rawX) {
                console.log("PLAYHEAD DEBUG:", JSON.stringify({
                    mouseX: e.clientX,
                    rulerLeft: rect.left,
                    rawX,
                    constrainedX: x,
                    timelineContentWidth,
                    rawTime,
                    finalTime: time,
                    duration,
                    zoomLevel,
                    playheadPx: time * 50 * zoomLevel
                }));
            }
            setScrubTime(time);
            seek(time); // update video preview in real time
            // Store mouse position for auto-scrolling
            lastMouseXRef.current = e.clientX;
        }
    }["useTimelinePlayhead.useCallback[handleScrub]"], [
        duration,
        zoomLevel,
        seek,
        rulerRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$edge$2d$auto$2d$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEdgeAutoScroll"])({
        isActive: isScrubbing,
        getMouseClientX: {
            "useTimelinePlayhead.useEdgeAutoScroll": ()=>lastMouseXRef.current
        }["useTimelinePlayhead.useEdgeAutoScroll"],
        rulerScrollRef,
        tracksScrollRef,
        contentWidth: duration * 50 * zoomLevel
    });
    // Mouse move/up event handlers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTimelinePlayhead.useEffect": ()=>{
            if (!isScrubbing) return;
            const onMouseMove = {
                "useTimelinePlayhead.useEffect.onMouseMove": (e)=>{
                    handleScrub(e);
                    // Mark that we've dragged if ruler drag is active
                    if (isDraggingRuler) {
                        setHasDraggedRuler(true);
                    }
                }
            }["useTimelinePlayhead.useEffect.onMouseMove"];
            const onMouseUp = {
                "useTimelinePlayhead.useEffect.onMouseUp": (e)=>{
                    setIsScrubbing(false);
                    if (scrubTime !== null) seek(scrubTime); // finalize seek
                    setScrubTime(null);
                    // Handle ruler click vs drag
                    if (isDraggingRuler) {
                        setIsDraggingRuler(false);
                        // If we didn't drag, treat it as a click-to-seek
                        if (!hasDraggedRuler) {
                            handleScrub(e);
                        }
                        setHasDraggedRuler(false);
                    }
                }
            }["useTimelinePlayhead.useEffect.onMouseUp"];
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
            // Edge auto-scroll is handled by useEdgeAutoScroll
            return ({
                "useTimelinePlayhead.useEffect": ()=>{
                    window.removeEventListener("mousemove", onMouseMove);
                    window.removeEventListener("mouseup", onMouseUp);
                // nothing to cleanup for edge auto scroll
                }
            })["useTimelinePlayhead.useEffect"];
        }
    }["useTimelinePlayhead.useEffect"], [
        isScrubbing,
        scrubTime,
        seek,
        handleScrub,
        isDraggingRuler,
        hasDraggedRuler
    ]);
    // --- Playhead auto-scroll effect (only during playback) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTimelinePlayhead.useEffect": ()=>{
            const { isPlaying } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlaybackStore"].getState();
            // Only auto-scroll during playback, not during manual interactions
            if (!isPlaying || isScrubbing) return;
            const rulerViewport = rulerScrollRef.current;
            const tracksViewport = tracksScrollRef.current;
            if (!rulerViewport || !tracksViewport) return;
            const playheadPx = playheadPosition * 50 * zoomLevel; // TIMELINE_CONSTANTS.PIXELS_PER_SECOND = 50
            const viewportWidth = rulerViewport.clientWidth;
            const scrollMin = 0;
            const scrollMax = rulerViewport.scrollWidth - viewportWidth;
            // Only auto-scroll if playhead is completely out of view (no buffer)
            const needsScroll = playheadPx < rulerViewport.scrollLeft || playheadPx > rulerViewport.scrollLeft + viewportWidth;
            if (needsScroll) {
                // Center the playhead in the viewport
                const desiredScroll = Math.max(scrollMin, Math.min(scrollMax, playheadPx - viewportWidth / 2));
                rulerViewport.scrollLeft = tracksViewport.scrollLeft = desiredScroll;
            }
        }
    }["useTimelinePlayhead.useEffect"], [
        playheadPosition,
        duration,
        zoomLevel,
        rulerScrollRef,
        tracksScrollRef,
        isScrubbing
    ]);
    return {
        playheadPosition,
        handlePlayheadMouseDown,
        handleRulerMouseDown,
        isDraggingRuler
    };
}
_s(useTimelinePlayhead, "QgH3Za+1yeOYAYOfoEm2SbLdxnc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$edge$2d$auto$2d$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEdgeAutoScroll"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/hooks/use-selection-box.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useSelectionBox": ()=>useSelectionBox
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useSelectionBox(param) {
    let { containerRef, playheadRef, onSelectionComplete, isEnabled = true } = param;
    _s();
    const [selectionBox, setSelectionBox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [justFinishedSelecting, setJustFinishedSelecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Mouse down handler to start selection
    const handleMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSelectionBox.useCallback[handleMouseDown]": (e)=>{
            var _playheadRef_current;
            if (!isEnabled) return;
            // Only start selection on empty space clicks
            if (e.target.closest(".timeline-element")) {
                return;
            }
            if (playheadRef === null || playheadRef === void 0 ? void 0 : (_playheadRef_current = playheadRef.current) === null || _playheadRef_current === void 0 ? void 0 : _playheadRef_current.contains(e.target)) {
                return;
            }
            if (e.target.closest("[data-track-labels]")) {
                return;
            }
            // Don't start selection when clicking in the ruler area - this interferes with playhead dragging
            if (e.target.closest("[data-ruler-area]")) {
                return;
            }
            setSelectionBox({
                startPos: {
                    x: e.clientX,
                    y: e.clientY
                },
                currentPos: {
                    x: e.clientX,
                    y: e.clientY
                },
                isActive: false
            });
        }
    }["useSelectionBox.useCallback[handleMouseDown]"], [
        isEnabled,
        playheadRef
    ]);
    // Function to select elements within the selection box
    const selectElementsInBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSelectionBox.useCallback[selectElementsInBox]": (startPos, endPos)=>{
            if (!containerRef.current) return;
            const container = containerRef.current;
            const containerRect = container.getBoundingClientRect();
            // Calculate selection rectangle in container coordinates
            const startX = startPos.x - containerRect.left;
            const startY = startPos.y - containerRect.top;
            const endX = endPos.x - containerRect.left;
            const endY = endPos.y - containerRect.top;
            const selectionRect = {
                left: Math.min(startX, endX),
                top: Math.min(startY, endY),
                right: Math.max(startX, endX),
                bottom: Math.max(startY, endY)
            };
            // Find all timeline elements within the selection rectangle
            const timelineElements = container.querySelectorAll(".timeline-element");
            const selectedElements = [];
            timelineElements.forEach({
                "useSelectionBox.useCallback[selectElementsInBox]": (element)=>{
                    const elementRect = element.getBoundingClientRect();
                    // Use absolute coordinates for more accurate intersection detection
                    const elementAbsolute = {
                        left: elementRect.left,
                        top: elementRect.top,
                        right: elementRect.right,
                        bottom: elementRect.bottom
                    };
                    const selectionAbsolute = {
                        left: startPos.x,
                        top: startPos.y,
                        right: endPos.x,
                        bottom: endPos.y
                    };
                    // Normalize selection rectangle (handle dragging in any direction)
                    const normalizedSelection = {
                        left: Math.min(selectionAbsolute.left, selectionAbsolute.right),
                        top: Math.min(selectionAbsolute.top, selectionAbsolute.bottom),
                        right: Math.max(selectionAbsolute.left, selectionAbsolute.right),
                        bottom: Math.max(selectionAbsolute.top, selectionAbsolute.bottom)
                    };
                    const elementId = element.getAttribute("data-element-id");
                    const trackId = element.getAttribute("data-track-id");
                    // Check if element intersects with selection rectangle (any overlap)
                    // Using absolute coordinates for more precise detection
                    const intersects = !(elementAbsolute.right < normalizedSelection.left || elementAbsolute.left > normalizedSelection.right || elementAbsolute.bottom < normalizedSelection.top || elementAbsolute.top > normalizedSelection.bottom);
                    if (intersects && elementId && trackId) {
                        selectedElements.push({
                            trackId,
                            elementId
                        });
                    }
                }
            }["useSelectionBox.useCallback[selectElementsInBox]"]);
            // Always call the callback - with elements or empty array to clear selection
            console.log(JSON.stringify({
                selectElementsInBox: selectedElements.length
            }));
            onSelectionComplete(selectedElements);
        }
    }["useSelectionBox.useCallback[selectElementsInBox]"], [
        containerRef,
        onSelectionComplete
    ]);
    // Effect to track selection box movement
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSelectionBox.useEffect": ()=>{
            if (!selectionBox) return;
            const handleMouseMove = {
                "useSelectionBox.useEffect.handleMouseMove": (e)=>{
                    const deltaX = Math.abs(e.clientX - selectionBox.startPos.x);
                    const deltaY = Math.abs(e.clientY - selectionBox.startPos.y);
                    // Start selection if mouse moved more than 5px
                    const shouldActivate = deltaX > 5 || deltaY > 5;
                    const newSelectionBox = {
                        ...selectionBox,
                        currentPos: {
                            x: e.clientX,
                            y: e.clientY
                        },
                        isActive: shouldActivate || selectionBox.isActive
                    };
                    setSelectionBox(newSelectionBox);
                    // Real-time visual feedback: update selection as we drag
                    if (newSelectionBox.isActive) {
                        selectElementsInBox(newSelectionBox.startPos, newSelectionBox.currentPos);
                    }
                }
            }["useSelectionBox.useEffect.handleMouseMove"];
            const handleMouseUp = {
                "useSelectionBox.useEffect.handleMouseUp": ()=>{
                    console.log(JSON.stringify({
                        mouseUp: {
                            wasActive: selectionBox === null || selectionBox === void 0 ? void 0 : selectionBox.isActive
                        }
                    }));
                    // If we had an active selection, mark that we just finished selecting
                    if (selectionBox === null || selectionBox === void 0 ? void 0 : selectionBox.isActive) {
                        console.log(JSON.stringify({
                            settingJustFinishedSelecting: true
                        }));
                        setJustFinishedSelecting(true);
                        // Clear the flag after a short delay to allow click events to check it
                        setTimeout({
                            "useSelectionBox.useEffect.handleMouseUp": ()=>{
                                console.log(JSON.stringify({
                                    clearingJustFinishedSelecting: true
                                }));
                                setJustFinishedSelecting(false);
                            }
                        }["useSelectionBox.useEffect.handleMouseUp"], 50);
                    }
                    // Don't call selectElementsInBox again - real-time selection already handled it
                    // Just clean up the selection box visual
                    setSelectionBox(null);
                }
            }["useSelectionBox.useEffect.handleMouseUp"];
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
            return ({
                "useSelectionBox.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseup", handleMouseUp);
                }
            })["useSelectionBox.useEffect"];
        }
    }["useSelectionBox.useEffect"], [
        selectionBox,
        selectElementsInBox
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSelectionBox.useEffect": ()=>{
            if (!(selectionBox === null || selectionBox === void 0 ? void 0 : selectionBox.isActive)) return;
            const previousBodyUserSelect = document.body.style.userSelect;
            const container = containerRef.current;
            var _container_style_userSelect;
            const previousContainerUserSelect = (_container_style_userSelect = container === null || container === void 0 ? void 0 : container.style.userSelect) !== null && _container_style_userSelect !== void 0 ? _container_style_userSelect : "";
            document.body.style.userSelect = "none";
            if (container) container.style.userSelect = "none";
            return ({
                "useSelectionBox.useEffect": ()=>{
                    document.body.style.userSelect = previousBodyUserSelect;
                    if (container) container.style.userSelect = previousContainerUserSelect;
                }
            })["useSelectionBox.useEffect"];
        }
    }["useSelectionBox.useEffect"], [
        selectionBox === null || selectionBox === void 0 ? void 0 : selectionBox.isActive,
        containerRef
    ]);
    return {
        selectionBox,
        handleMouseDown,
        isSelecting: (selectionBox === null || selectionBox === void 0 ? void 0 : selectionBox.isActive) || false,
        justFinishedSelecting
    };
}
_s(useSelectionBox, "VsjTjsRlp6NiXSJLC+RrJXwrOBc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/hooks/use-frame-cache.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFrameCache": ()=>useFrameCache
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
// Shared singleton cache across hook instances (HMR-safe)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const __frameCacheGlobal = globalThis;
var __frameCacheGlobal___sharedFrameCache;
const __sharedFrameCache = (__frameCacheGlobal___sharedFrameCache = __frameCacheGlobal.__sharedFrameCache) !== null && __frameCacheGlobal___sharedFrameCache !== void 0 ? __frameCacheGlobal___sharedFrameCache : new Map();
__frameCacheGlobal.__sharedFrameCache = __sharedFrameCache;
function useFrameCache() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const { maxCacheSize = 300, cacheResolution = 30 } = options; // 10 seconds at 30fps
    const frameCacheRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(__sharedFrameCache);
    // Generate a hash of the timeline state that affects rendering
    const getTimelineHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFrameCache.useCallback[getTimelineHash]": (time, tracks, mediaFiles, activeProject, sceneId)=>{
            // Get elements that are active at this time
            const activeElements = [];
            for (const track of tracks){
                if (track.muted) continue;
                for (const element of track.elements){
                    // Check if element has hidden property (some elements might not have it)
                    const isHidden = "hidden" in element ? element.hidden : false;
                    if (isHidden) continue;
                    const elementStart = element.startTime;
                    const elementEnd = element.startTime + (element.duration - element.trimStart - element.trimEnd);
                    if (time >= elementStart && time < elementEnd) {
                        if (element.type === "media") {
                            const mediaElement = element;
                            activeElements.push({
                                id: element.id,
                                type: element.type,
                                startTime: element.startTime,
                                duration: element.duration,
                                trimStart: element.trimStart,
                                trimEnd: element.trimEnd,
                                mediaId: mediaElement.mediaId
                            });
                        } else if (element.type === "text") {
                            const textElement = element;
                            activeElements.push({
                                id: element.id,
                                type: element.type,
                                startTime: element.startTime,
                                duration: element.duration,
                                trimStart: element.trimStart,
                                trimEnd: element.trimEnd,
                                content: textElement.content,
                                fontSize: textElement.fontSize,
                                fontFamily: textElement.fontFamily,
                                color: textElement.color,
                                backgroundColor: textElement.backgroundColor,
                                x: textElement.x,
                                y: textElement.y,
                                rotation: textElement.rotation,
                                opacity: textElement.opacity
                            });
                        }
                    }
                }
            }
            // Include project settings that affect rendering
            const projectState = {
                backgroundColor: activeProject === null || activeProject === void 0 ? void 0 : activeProject.backgroundColor,
                backgroundType: activeProject === null || activeProject === void 0 ? void 0 : activeProject.backgroundType,
                blurIntensity: activeProject === null || activeProject === void 0 ? void 0 : activeProject.blurIntensity,
                canvasSize: activeProject === null || activeProject === void 0 ? void 0 : activeProject.canvasSize
            };
            const hash = {
                activeElements,
                projectState,
                sceneId,
                time: Math.floor(time * cacheResolution) / cacheResolution
            };
            return JSON.stringify(hash);
        }
    }["useFrameCache.useCallback[getTimelineHash]"], [
        cacheResolution
    ]);
    // Check if a frame is cached and valid
    const isFrameCached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFrameCache.useCallback[isFrameCached]": (time, tracks, mediaFiles, activeProject, sceneId)=>{
            const frameKey = Math.floor(time * cacheResolution);
            const cached = frameCacheRef.current.get(frameKey);
            if (!cached) return false;
            const currentHash = getTimelineHash(time, tracks, mediaFiles, activeProject, sceneId);
            return cached.timelineHash === currentHash;
        }
    }["useFrameCache.useCallback[isFrameCached]"], [
        getTimelineHash,
        cacheResolution
    ]);
    // Get cached frame if available and valid
    const getCachedFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFrameCache.useCallback[getCachedFrame]": (time, tracks, mediaFiles, activeProject, sceneId)=>{
            const frameKey = Math.floor(time * cacheResolution);
            const cached = frameCacheRef.current.get(frameKey);
            if (!cached) {
                return null;
            }
            const currentHash = getTimelineHash(time, tracks, mediaFiles, activeProject, sceneId);
            console.log(cached.timelineHash === currentHash);
            if (cached.timelineHash !== currentHash) {
                // Cache is stale, remove it
                console.log("Cache miss - hash mismatch:", JSON.stringify({
                    cachedHash: cached.timelineHash.slice(0, 100),
                    currentHash: currentHash.slice(0, 100)
                }));
                frameCacheRef.current.delete(frameKey);
                return null;
            }
            return cached.imageData;
        }
    }["useFrameCache.useCallback[getCachedFrame]"], [
        getTimelineHash,
        cacheResolution
    ]);
    // Cache a rendered frame
    const cacheFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFrameCache.useCallback[cacheFrame]": (time, imageData, tracks, mediaFiles, activeProject, sceneId)=>{
            const frameKey = Math.floor(time * cacheResolution);
            const timelineHash = getTimelineHash(time, tracks, mediaFiles, activeProject, sceneId);
            // Enforce cache size limit (LRU eviction)
            if (frameCacheRef.current.size >= maxCacheSize) {
                // Remove oldest entries
                const entries = Array.from(frameCacheRef.current.entries());
                entries.sort({
                    "useFrameCache.useCallback[cacheFrame]": (a, b)=>a[1].timestamp - b[1].timestamp
                }["useFrameCache.useCallback[cacheFrame]"]);
                // Remove oldest 20% of entries
                const toRemove = Math.floor(entries.length * 0.2);
                for(let i = 0; i < toRemove; i++){
                    frameCacheRef.current.delete(entries[i][0]);
                }
            }
            frameCacheRef.current.set(frameKey, {
                imageData,
                timelineHash,
                timestamp: Date.now()
            });
        }
    }["useFrameCache.useCallback[cacheFrame]"], [
        getTimelineHash,
        cacheResolution,
        maxCacheSize
    ]);
    // Clear cache when timeline changes significantly
    const invalidateCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFrameCache.useCallback[invalidateCache]": ()=>{
            frameCacheRef.current.clear();
        }
    }["useFrameCache.useCallback[invalidateCache]"], []);
    // Get render status for timeline indicator
    const getRenderStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFrameCache.useCallback[getRenderStatus]": (time, tracks, mediaFiles, activeProject, sceneId)=>{
            return isFrameCached(time, tracks, mediaFiles, activeProject, sceneId) ? "cached" : "not-cached";
        }
    }["useFrameCache.useCallback[getRenderStatus]"], [
        isFrameCached
    ]);
    // Pre-render frames around current time
    const preRenderNearbyFrames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFrameCache.useCallback[preRenderNearbyFrames]": async function(currentTime, tracks, mediaFiles, activeProject, renderFunction, sceneId) {
            let range = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 3 // seconds
            ;
            const framesToPreRender = [];
            // Calculate frames to pre-render (around current time)
            for(let offset = -range; offset <= range; offset += 1 / cacheResolution){
                const time = currentTime + offset;
                if (time < 0) continue;
                if (!isFrameCached(time, tracks, mediaFiles, activeProject, sceneId)) {
                    framesToPreRender.push(time);
                }
            }
            // Expand to full 1-second buckets to avoid fragmented tiny cache regions
            const secondsToPreRender = new Set();
            for (const t of framesToPreRender){
                secondsToPreRender.add(Math.floor(t));
            }
            const expandedTimes = [];
            for (const s of secondsToPreRender){
                for(let k = 0; k < cacheResolution; k++){
                    const t = s + k / cacheResolution;
                    if (t < 0) continue;
                    if (!isFrameCached(t, tracks, mediaFiles, activeProject, sceneId)) {
                        expandedTimes.push(t);
                    }
                }
            }
            // Sort forward-first near currentTime to improve perceived responsiveness
            expandedTimes.sort({
                "useFrameCache.useCallback[preRenderNearbyFrames]": (a, b)=>{
                    const da = a >= currentTime ? a - currentTime : currentTime - a + 1e6;
                    const db = b >= currentTime ? b - currentTime : currentTime - b + 1e6;
                    return da - db;
                }
            }["useFrameCache.useCallback[preRenderNearbyFrames]"]);
            // Cap total scheduled renders to avoid jank (e.g., up to 90 frames)
            const CAP = Math.max(30, Math.min(90, cacheResolution * 3));
            const toSchedule = expandedTimes.slice(0, CAP);
            // Pre-render during idle time
            for (const time of toSchedule){
                requestIdleCallback({
                    "useFrameCache.useCallback[preRenderNearbyFrames]": async ()=>{
                        try {
                            const imageData = await renderFunction(time);
                            cacheFrame(time, imageData, tracks, mediaFiles, activeProject, sceneId);
                        } catch (error) {
                            console.warn("Pre-render failed for time ".concat(time, ":"), error);
                        }
                    }
                }["useFrameCache.useCallback[preRenderNearbyFrames]"]);
            }
        }
    }["useFrameCache.useCallback[preRenderNearbyFrames]"], [
        isFrameCached,
        cacheFrame,
        cacheResolution
    ]);
    return {
        isFrameCached,
        getCachedFrame,
        cacheFrame,
        invalidateCache,
        getRenderStatus,
        preRenderNearbyFrames,
        cacheSize: frameCacheRef.current.size
    };
}
_s(useFrameCache, "bGu+IwXJRtogLbqpzsQP86waizo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/hooks/use-keyboard-shortcuts-help.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useKeyboardShortcutsHelp": ()=>useKeyboardShortcutsHelp
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$keybindings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/keybindings-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Map actions to their descriptions and categories
const actionDescriptions = {
    "toggle-play": {
        description: "Play/Pause",
        category: "Playback"
    },
    "stop-playback": {
        description: "Stop playback",
        category: "Playback"
    },
    "seek-forward": {
        description: "Seek forward 1 second",
        category: "Playback"
    },
    "seek-backward": {
        description: "Seek backward 1 second",
        category: "Playback"
    },
    "frame-step-forward": {
        description: "Frame step forward",
        category: "Navigation"
    },
    "frame-step-backward": {
        description: "Frame step backward",
        category: "Navigation"
    },
    "jump-forward": {
        description: "Jump forward 5 seconds",
        category: "Navigation"
    },
    "jump-backward": {
        description: "Jump backward 5 seconds",
        category: "Navigation"
    },
    "goto-start": {
        description: "Go to timeline start",
        category: "Navigation"
    },
    "goto-end": {
        description: "Go to timeline end",
        category: "Navigation"
    },
    "split-element": {
        description: "Split element at playhead",
        category: "Editing"
    },
    "delete-selected": {
        description: "Delete selected elements",
        category: "Editing"
    },
    "select-all": {
        description: "Select all elements",
        category: "Selection"
    },
    "duplicate-selected": {
        description: "Duplicate selected element",
        category: "Selection"
    },
    "toggle-snapping": {
        description: "Toggle snapping",
        category: "Editing"
    },
    undo: {
        description: "Undo",
        category: "History"
    },
    redo: {
        description: "Redo",
        category: "History"
    },
    "copy-selected": {
        description: "Copy selected elements",
        category: "Editing"
    },
    "paste-selected": {
        description: "Paste elements at playhead",
        category: "Editing"
    }
};
// Convert key binding format to display format
const formatKey = (key)=>{
    return key.replace("ctrl", (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformSpecialKey"])()).replace("alt", (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatformAlternateKey"])()).replace("shift", "Shift").replace("left", "←").replace("right", "→").replace("up", "↑").replace("down", "↓").replace("space", "Space").replace("home", "Home").replace("enter", "Enter").replace("end", "End").replace("delete", "Delete").replace("backspace", "Backspace").replace("-", "+");
};
const useKeyboardShortcutsHelp = ()=>{
    _s();
    const { keybindings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$keybindings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeybindingsStore"])();
    const shortcuts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useKeyboardShortcutsHelp.useMemo[shortcuts]": ()=>{
            const result = [];
            // Group keybindings by action
            const actionToKeys = {};
            Object.entries(keybindings).forEach({
                "useKeyboardShortcutsHelp.useMemo[shortcuts]": (param)=>{
                    let [key, action] = param;
                    if (action) {
                        if (!actionToKeys[action]) {
                            actionToKeys[action] = [];
                        }
                        actionToKeys[action].push(formatKey(key));
                    }
                }
            }["useKeyboardShortcutsHelp.useMemo[shortcuts]"]);
            // Convert to shortcuts format
            Object.entries(actionToKeys).forEach({
                "useKeyboardShortcutsHelp.useMemo[shortcuts]": (param)=>{
                    let [action, keys] = param;
                    const actionInfo = actionDescriptions[action];
                    if (actionInfo) {
                        result.push({
                            id: action,
                            keys,
                            description: actionInfo.description,
                            category: actionInfo.category,
                            action: action
                        });
                    }
                }
            }["useKeyboardShortcutsHelp.useMemo[shortcuts]"]);
            // Sort shortcuts by category first, then by description to ensure consistent ordering
            return result.sort({
                "useKeyboardShortcutsHelp.useMemo[shortcuts]": (a, b)=>{
                    if (a.category !== b.category) {
                        return a.category.localeCompare(b.category);
                    }
                    return a.description.localeCompare(b.description);
                }
            }["useKeyboardShortcutsHelp.useMemo[shortcuts]"]);
        }
    }["useKeyboardShortcutsHelp.useMemo[shortcuts]"], [
        keybindings
    ]);
    return {
        shortcuts
    };
};
_s(useKeyboardShortcutsHelp, "AV8yP7vXv07e/d+E0YTFRx4eQBQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$keybindings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeybindingsStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/hooks/use-keybindings.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "bindings": ()=>bindings,
    "useKeybindingDisabler": ()=>useKeybindingDisabler,
    "useKeybindingsListener": ()=>useKeybindingsListener
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$keybindings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/keybindings-store.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
function useKeybindingsListener() {
    _s();
    const { keybindings, getKeybindingString, keybindingsEnabled, isRecording } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$keybindings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeybindingsStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKeybindingsListener.useEffect": ()=>{
            const handleKeyDown = {
                "useKeybindingsListener.useEffect.handleKeyDown": (ev)=>{
                    // Do not check keybinds if the mode is disabled
                    if (!keybindingsEnabled) return;
                    // ignore key events if user is changing keybindings
                    if (isRecording) return;
                    const binding = getKeybindingString(ev);
                    if (!binding) return;
                    const boundAction = keybindings[binding];
                    if (!boundAction) return;
                    const activeElement = document.activeElement;
                    const isTextInput = activeElement && (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA" || activeElement.isContentEditable);
                    if (isTextInput) return;
                    ev.preventDefault();
                    // Handle actions with default arguments
                    let actionArgs;
                    if (boundAction === "seek-forward") {
                        actionArgs = {
                            seconds: 1
                        };
                    } else if (boundAction === "seek-backward") {
                        actionArgs = {
                            seconds: 1
                        };
                    } else if (boundAction === "jump-forward") {
                        actionArgs = {
                            seconds: 5
                        };
                    } else if (boundAction === "jump-backward") {
                        actionArgs = {
                            seconds: 5
                        };
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invokeAction"])(boundAction, actionArgs, "keypress");
                }
            }["useKeybindingsListener.useEffect.handleKeyDown"];
            document.addEventListener("keydown", handleKeyDown);
            return ({
                "useKeybindingsListener.useEffect": ()=>{
                    document.removeEventListener("keydown", handleKeyDown);
                }
            })["useKeybindingsListener.useEffect"];
        }
    }["useKeybindingsListener.useEffect"], [
        keybindings,
        getKeybindingString,
        keybindingsEnabled,
        isRecording
    ]);
}
_s(useKeybindingsListener, "ZgTClrDWkUrbhZ6gkzWB1JAGPKk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$keybindings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeybindingsStore"]
    ];
});
function useKeybindingDisabler() {
    _s1();
    const { disableKeybindings, enableKeybindings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$keybindings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeybindingsStore"])();
    return {
        disableKeybindings,
        enableKeybindings
    };
}
_s1(useKeybindingDisabler, "+fyEygis/djW/Tl1ioKb2Erk9bw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$keybindings$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeybindingsStore"]
    ];
});
const bindings = {};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/hooks/use-editor-actions.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useEditorActions": ()=>useEditorActions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/playback-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/sonner@1.7.4+6dbf9a050bc9aadb/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function useEditorActions() {
    _s();
    const { tracks, selectedElements, clearSelectedElements, setSelectedElements, deleteSelected, splitSelected, addElementToTrack, snappingEnabled, toggleSnapping, undo, redo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimelineStore"])();
    const { currentTime, duration, isPlaying, toggle, seek } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlaybackStore"])();
    const { activeProject } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectStore"])();
    // Playback actions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("toggle-play", {
        "useEditorActions.useActionHandler": ()=>{
            toggle();
        }
    }["useEditorActions.useActionHandler"], undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("stop-playback", {
        "useEditorActions.useActionHandler": ()=>{
            if (isPlaying) {
                toggle();
            }
            seek(0);
        }
    }["useEditorActions.useActionHandler"], undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("seek-forward", {
        "useEditorActions.useActionHandler": (args)=>{
            var _args_seconds;
            const seconds = (_args_seconds = args === null || args === void 0 ? void 0 : args.seconds) !== null && _args_seconds !== void 0 ? _args_seconds : 1;
            seek(Math.min(duration, currentTime + seconds));
        }
    }["useEditorActions.useActionHandler"], undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("seek-backward", {
        "useEditorActions.useActionHandler": (args)=>{
            var _args_seconds;
            const seconds = (_args_seconds = args === null || args === void 0 ? void 0 : args.seconds) !== null && _args_seconds !== void 0 ? _args_seconds : 1;
            seek(Math.max(0, currentTime - seconds));
        }
    }["useEditorActions.useActionHandler"], undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("frame-step-forward", {
        "useEditorActions.useActionHandler": ()=>{
            const projectFps = (activeProject === null || activeProject === void 0 ? void 0 : activeProject.fps) || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FPS"];
            seek(Math.min(duration, currentTime + 1 / projectFps));
        }
    }["useEditorActions.useActionHandler"], undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("frame-step-backward", {
        "useEditorActions.useActionHandler": ()=>{
            const projectFps = (activeProject === null || activeProject === void 0 ? void 0 : activeProject.fps) || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FPS"];
            seek(Math.max(0, currentTime - 1 / projectFps));
        }
    }["useEditorActions.useActionHandler"], undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("jump-forward", {
        "useEditorActions.useActionHandler": (args)=>{
            var _args_seconds;
            const seconds = (_args_seconds = args === null || args === void 0 ? void 0 : args.seconds) !== null && _args_seconds !== void 0 ? _args_seconds : 5;
            seek(Math.min(duration, currentTime + seconds));
        }
    }["useEditorActions.useActionHandler"], undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("jump-backward", {
        "useEditorActions.useActionHandler": (args)=>{
            var _args_seconds;
            const seconds = (_args_seconds = args === null || args === void 0 ? void 0 : args.seconds) !== null && _args_seconds !== void 0 ? _args_seconds : 5;
            seek(Math.max(0, currentTime - seconds));
        }
    }["useEditorActions.useActionHandler"], undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("goto-start", {
        "useEditorActions.useActionHandler": ()=>{
            seek(0);
        }
    }["useEditorActions.useActionHandler"], undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("goto-end", {
        "useEditorActions.useActionHandler": ()=>{
            seek(duration);
        }
    }["useEditorActions.useActionHandler"], undefined);
    // Timeline editing actions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("split-element", {
        "useEditorActions.useActionHandler": ()=>{
            if (selectedElements.length !== 1) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Select exactly one element to split");
                return;
            }
            const { trackId, elementId } = selectedElements[0];
            const track = tracks.find({
                "useEditorActions.useActionHandler.track": (t)=>t.id === trackId
            }["useEditorActions.useActionHandler.track"]);
            const element = track === null || track === void 0 ? void 0 : track.elements.find({
                "useEditorActions.useActionHandler": (el)=>el.id === elementId
            }["useEditorActions.useActionHandler"]);
            if (element) {
                const effectiveStart = element.startTime;
                const effectiveEnd = element.startTime + (element.duration - element.trimStart - element.trimEnd);
                if (currentTime > effectiveStart && currentTime < effectiveEnd) {
                    splitSelected(currentTime, trackId, elementId);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Playhead must be within selected element");
                }
            }
        }
    }["useEditorActions.useActionHandler"], undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("delete-selected", {
        "useEditorActions.useActionHandler": ()=>{
            if (selectedElements.length === 0) {
                return;
            }
            deleteSelected();
        }
    }["useEditorActions.useActionHandler"], undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("select-all", {
        "useEditorActions.useActionHandler": ()=>{
            const allElements = tracks.flatMap({
                "useEditorActions.useActionHandler.allElements": (track)=>track.elements.map({
                        "useEditorActions.useActionHandler.allElements": (element)=>({
                                trackId: track.id,
                                elementId: element.id
                            })
                    }["useEditorActions.useActionHandler.allElements"])
            }["useEditorActions.useActionHandler.allElements"]);
            setSelectedElements(allElements);
        }
    }["useEditorActions.useActionHandler"], undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("duplicate-selected", {
        "useEditorActions.useActionHandler": ()=>{
            if (selectedElements.length !== 1) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Select exactly one element to duplicate");
                return;
            }
            const { trackId, elementId } = selectedElements[0];
            const track = tracks.find({
                "useEditorActions.useActionHandler.track": (t)=>t.id === trackId
            }["useEditorActions.useActionHandler.track"]);
            const element = track === null || track === void 0 ? void 0 : track.elements.find({
                "useEditorActions.useActionHandler": (el)=>el.id === elementId
            }["useEditorActions.useActionHandler"]);
            if (element) {
                const newStartTime = element.startTime + (element.duration - element.trimStart - element.trimEnd) + 0.1;
                const { id, ...elementWithoutId } = element;
                addElementToTrack(trackId, {
                    ...elementWithoutId,
                    startTime: newStartTime
                });
            }
        }
    }["useEditorActions.useActionHandler"], undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("copy-selected", {
        "useEditorActions.useActionHandler": ()=>{
            if (selectedElements.length === 0) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimelineStore"].getState().copySelected();
        }
    }["useEditorActions.useActionHandler"], undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("paste-selected", {
        "useEditorActions.useActionHandler": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimelineStore"].getState().pasteAtTime(currentTime);
        }
    }["useEditorActions.useActionHandler"], undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("toggle-snapping", {
        "useEditorActions.useActionHandler": ()=>{
            toggleSnapping();
        }
    }["useEditorActions.useActionHandler"], undefined);
    // History actions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("undo", {
        "useEditorActions.useActionHandler": ()=>{
            undo();
        }
    }["useEditorActions.useActionHandler"], undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"])("redo", {
        "useEditorActions.useActionHandler": ()=>{
            redo();
        }
    }["useEditorActions.useActionHandler"], undefined);
}
_s(useEditorActions, "vy9u9np57pDDbAAqPkzGSsYrEKs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimelineStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlaybackStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProjectStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionHandler"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/web/src/hooks/use-playback-controls.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "usePlaybackControls": ()=>usePlaybackControls
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/playback-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/sonner@1.7.4+6dbf9a050bc9aadb/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const usePlaybackControls = ()=>{
    _s();
    const { isPlaying, currentTime, play, pause, seek } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlaybackStore"])();
    const { selectedElements, tracks, splitSelected, splitAndKeepLeft, splitAndKeepRight, separateAudio } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimelineStore"])();
    const handleSplitSelectedElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlaybackControls.useCallback[handleSplitSelectedElement]": ()=>{
            if (selectedElements.length !== 1) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Select exactly one element to split");
                return;
            }
            const { trackId, elementId } = selectedElements[0];
            const track = tracks.find({
                "usePlaybackControls.useCallback[handleSplitSelectedElement].track": (t)=>t.id === trackId
            }["usePlaybackControls.useCallback[handleSplitSelectedElement].track"]);
            const element = track === null || track === void 0 ? void 0 : track.elements.find({
                "usePlaybackControls.useCallback[handleSplitSelectedElement]": (e)=>e.id === elementId
            }["usePlaybackControls.useCallback[handleSplitSelectedElement]"]);
            if (!element) return;
            const effectiveStart = element.startTime;
            const effectiveEnd = element.startTime + (element.duration - element.trimStart - element.trimEnd);
            if (currentTime <= effectiveStart || currentTime >= effectiveEnd) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Playhead must be within selected element");
                return;
            }
            splitSelected(currentTime, trackId, elementId);
        }
    }["usePlaybackControls.useCallback[handleSplitSelectedElement]"], [
        selectedElements,
        tracks,
        currentTime,
        splitSelected
    ]);
    const handleSplitAndKeepLeftCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlaybackControls.useCallback[handleSplitAndKeepLeftCallback]": ()=>{
            if (selectedElements.length !== 1) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Select exactly one element");
                return;
            }
            const { trackId, elementId } = selectedElements[0];
            const track = tracks.find({
                "usePlaybackControls.useCallback[handleSplitAndKeepLeftCallback].track": (t)=>t.id === trackId
            }["usePlaybackControls.useCallback[handleSplitAndKeepLeftCallback].track"]);
            const element = track === null || track === void 0 ? void 0 : track.elements.find({
                "usePlaybackControls.useCallback[handleSplitAndKeepLeftCallback]": (e)=>e.id === elementId
            }["usePlaybackControls.useCallback[handleSplitAndKeepLeftCallback]"]);
            if (!element) return;
            const effectiveStart = element.startTime;
            const effectiveEnd = element.startTime + (element.duration - element.trimStart - element.trimEnd);
            if (currentTime <= effectiveStart || currentTime >= effectiveEnd) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Playhead must be within selected element");
                return;
            }
            splitAndKeepLeft(trackId, elementId, currentTime);
        }
    }["usePlaybackControls.useCallback[handleSplitAndKeepLeftCallback]"], [
        selectedElements,
        tracks,
        currentTime,
        splitAndKeepLeft
    ]);
    const handleSplitAndKeepRightCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlaybackControls.useCallback[handleSplitAndKeepRightCallback]": ()=>{
            if (selectedElements.length !== 1) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Select exactly one element");
                return;
            }
            const { trackId, elementId } = selectedElements[0];
            const track = tracks.find({
                "usePlaybackControls.useCallback[handleSplitAndKeepRightCallback].track": (t)=>t.id === trackId
            }["usePlaybackControls.useCallback[handleSplitAndKeepRightCallback].track"]);
            const element = track === null || track === void 0 ? void 0 : track.elements.find({
                "usePlaybackControls.useCallback[handleSplitAndKeepRightCallback]": (e)=>e.id === elementId
            }["usePlaybackControls.useCallback[handleSplitAndKeepRightCallback]"]);
            if (!element) return;
            const effectiveStart = element.startTime;
            const effectiveEnd = element.startTime + (element.duration - element.trimStart - element.trimEnd);
            if (currentTime <= effectiveStart || currentTime >= effectiveEnd) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Playhead must be within selected element");
                return;
            }
            splitAndKeepRight(trackId, elementId, currentTime);
        }
    }["usePlaybackControls.useCallback[handleSplitAndKeepRightCallback]"], [
        selectedElements,
        tracks,
        currentTime,
        splitAndKeepRight
    ]);
    const handleSeparateAudioCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlaybackControls.useCallback[handleSeparateAudioCallback]": ()=>{
            if (selectedElements.length !== 1) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Select exactly one media element to separate audio");
                return;
            }
            const { trackId, elementId } = selectedElements[0];
            const track = tracks.find({
                "usePlaybackControls.useCallback[handleSeparateAudioCallback].track": (t)=>t.id === trackId
            }["usePlaybackControls.useCallback[handleSeparateAudioCallback].track"]);
            if (!track || track.type !== "media") {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Select a media element to separate audio");
                return;
            }
            separateAudio(trackId, elementId);
        }
    }["usePlaybackControls.useCallback[handleSeparateAudioCallback]"], [
        selectedElements,
        tracks,
        separateAudio
    ]);
};
_s(usePlaybackControls, "foyY3ADKOmWfZa5wGeC9Fd5Lp3o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlaybackStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimelineStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=apps_web_src_hooks_3b6490da._.js.map