module.exports = {

"[project]/apps/web/src/hooks/use-drag-drop.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useDragDrop": ()=>useDragDrop
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
function useDragDrop(options = {}) {
    const [isDragOver, setIsDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dragCounterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
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
}),
"[project]/apps/web/src/hooks/use-highlight-scroll.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useHighlightScroll": ()=>useHighlightScroll
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useHighlightScroll(highlightId, onClearHighlight, highlightDuration = 1000) {
    const [highlightedId, setHighlightedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const elementRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const registerElement = (id, element)=>{
        if (element) {
            elementRefs.current.set(id, element);
        } else {
            elementRefs.current.delete(id);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!highlightId) return;
        setHighlightedId(highlightId);
        const target = elementRefs.current.get(highlightId);
        target?.scrollIntoView({
            block: "center"
        });
        const timeout = setTimeout(()=>{
            setHighlightedId(null);
            onClearHighlight();
        }, highlightDuration);
        return ()=>clearTimeout(timeout);
    }, [
        highlightId,
        onClearHighlight,
        highlightDuration
    ]);
    return {
        highlightedId,
        registerElement
    };
}
}),
"[project]/apps/web/src/hooks/use-sound-search.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useSoundSearch": ()=>useSoundSearch
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$sounds$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/sounds-store.ts [app-ssr] (ecmascript)");
;
;
function useSoundSearch(query, commercialOnly) {
    const { searchResults, isSearching, searchError, lastSearchQuery, currentPage, hasNextPage, isLoadingMore, totalCount, setSearchResults, setSearching, setSearchError, setLastSearchQuery, setCurrentPage, setHasNextPage, setTotalCount, setLoadingMore, appendSearchResults, appendTopSounds, resetPagination } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$sounds$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSoundsStore"])();
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
            const response = await fetch(`/api/sounds/search?${searchParams.toString()}`);
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
                setSearchError(`Load more failed: ${response.status}`);
            }
        } catch (err) {
            setSearchError(err instanceof Error ? err.message : "Load more failed");
        } finally{
            setLoadingMore(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        const timeoutId = setTimeout(async ()=>{
            try {
                setSearching(true);
                setSearchError(null);
                resetPagination();
                const response = await fetch(`/api/sounds/search?q=${encodeURIComponent(query)}&type=effects&page=1`);
                if (!ignore) {
                    if (response.ok) {
                        const data = await response.json();
                        setSearchResults(data.results);
                        setLastSearchQuery(query);
                        setHasNextPage(!!data.next);
                        setTotalCount(data.count);
                        setCurrentPage(1);
                    } else {
                        setSearchError(`Search failed: ${response.status}`);
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
        }, 300);
        return ()=>{
            clearTimeout(timeoutId);
            ignore = true;
        };
    }, [
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
}),
"[project]/apps/web/src/hooks/use-infinite-scroll.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useInfiniteScroll": ()=>useInfiniteScroll
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useInfiniteScroll({ onLoadMore, hasMore, isLoading, threshold = 200, enabled = true }) {
    const scrollAreaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        if (!enabled) return;
        const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
        const nearBottom = scrollTop + clientHeight >= scrollHeight - threshold;
        if (nearBottom && hasMore && !isLoading) {
            onLoadMore();
        }
    }, [
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
}),
"[project]/apps/web/src/hooks/use-aspect-ratio.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useAspectRatio": ()=>useAspectRatio
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$editor$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/editor-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/media-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-ssr] (ecmascript)");
;
;
;
;
function useAspectRatio() {
    const { canvasPresets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$editor$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEditorStore"])();
    const { activeProject } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"])();
    const { mediaFiles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaStore"])();
    const { tracks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"])();
    const canvasSize = activeProject?.canvasSize || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_CANVAS_SIZE"];
    const canvasMode = activeProject?.canvasMode || "preset";
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
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMediaAspectRatio"])(mediaFile);
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
}),
"[project]/apps/web/src/hooks/use-timeline-zoom.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useTimelineZoom": ()=>useTimelineZoom
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useTimelineZoom({ containerRef, isInTimeline = false }) {
    const [zoomLevel, setZoomLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const handleWheel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        // Only zoom if user is using pinch gesture (ctrlKey or metaKey is true)
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.15 : 0.15;
            setZoomLevel((prev)=>Math.max(0.1, Math.min(10, prev + delta)));
        } else if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            // Don't prevent default - let ScrollArea handle horizontal scrolling
            return;
        }
    // Otherwise, allow normal scrolling
    }, []);
    // Prevent browser zooming in/out when in timeline
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const preventZoom = (e)=>{
            if (isInTimeline && (e.ctrlKey || e.metaKey) && containerRef.current?.contains(e.target)) {
                e.preventDefault();
            }
        };
        document.addEventListener("wheel", preventZoom, {
            passive: false
        });
        return ()=>{
            document.removeEventListener("wheel", preventZoom);
        };
    }, [
        isInTimeline,
        containerRef
    ]);
    return {
        zoomLevel,
        setZoomLevel,
        handleWheel
    };
}
}),
"[project]/apps/web/src/hooks/use-timeline-element-resize.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useTimelineElementResize": ()=>useTimelineElementResize
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/media-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/timeline-constants.ts [app-ssr] (ecmascript)");
;
;
;
;
;
function useTimelineElementResize({ element, track, zoomLevel }) {
    const [resizing, setResizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { mediaFiles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaStore"])();
    const { updateElementStartTime, updateElementTrim, updateElementDuration, pushHistory } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"])();
    // Set up document-level mouse listeners during resize (like proper drag behavior)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!resizing) return;
        const handleDocumentMouseMove = (e)=>{
            updateTrimFromMouseMove({
                clientX: e.clientX
            });
        };
        const handleDocumentMouseUp = ()=>{
            handleResizeEnd();
        };
        // Add document-level listeners for proper drag behavior
        document.addEventListener("mousemove", handleDocumentMouseMove);
        document.addEventListener("mouseup", handleDocumentMouseUp);
        return ()=>{
            document.removeEventListener("mousemove", handleDocumentMouseMove);
            document.removeEventListener("mouseup", handleDocumentMouseUp);
        };
    }, [
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
        if (!resizing) return;
        const deltaX = e.clientX - resizing.startX;
        // Reasonable sensitivity for resize operations - similar to timeline scale
        const deltaTime = deltaX / (50 * zoomLevel);
        // Get project FPS for frame snapping
        const projectStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].getState();
        const projectFps = projectStore.activeProject?.fps || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_FPS"];
        if (resizing.side === "left") {
            // Left resize - different behavior for media vs text/image elements
            const maxAllowed = element.duration - resizing.initialTrimEnd - 0.1;
            const calculated = resizing.initialTrimStart + deltaTime;
            if (calculated >= 0) {
                // Normal trimming within available content
                const newTrimStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["snapTimeToFrame"])(Math.min(maxAllowed, calculated), projectFps);
                const trimDelta = newTrimStart - resizing.initialTrimStart;
                const newStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["snapTimeToFrame"])(element.startTime + trimDelta, projectFps);
                updateElementTrim(track.id, element.id, newTrimStart, resizing.initialTrimEnd, false);
                updateElementStartTime(track.id, element.id, newStartTime, false);
            } else {
                // Trying to extend beyond trimStart = 0
                if (canExtendElementDuration()) {
                    // Text/Image: extend element to the left by moving startTime and increasing duration
                    const extensionAmount = Math.abs(calculated);
                    const maxExtension = element.startTime;
                    const actualExtension = Math.min(extensionAmount, maxExtension);
                    const newStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["snapTimeToFrame"])(element.startTime - actualExtension, projectFps);
                    const newDuration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["snapTimeToFrame"])(element.duration + actualExtension, projectFps);
                    // Keep trimStart at 0 and extend the element
                    updateElementTrim(track.id, element.id, 0, resizing.initialTrimEnd, false);
                    updateElementDuration(track.id, element.id, newDuration, false);
                    updateElementStartTime(track.id, element.id, newStartTime, false);
                } else {
                    // Video/Audio: can't extend beyond original content - limit to trimStart = 0
                    const newTrimStart = 0;
                    const trimDelta = newTrimStart - resizing.initialTrimStart;
                    const newStartTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["snapTimeToFrame"])(element.startTime + trimDelta, projectFps);
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
                    const newDuration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["snapTimeToFrame"])(element.duration + extensionNeeded, projectFps);
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
                const snappedEndTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["snapTimeToFrame"])(desiredEndTime, projectFps);
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
}),
"[project]/apps/web/src/hooks/use-timeline-snapping.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useTimelineSnapping": ()=>useTimelineSnapping
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/timeline-constants.ts [app-ssr] (ecmascript)");
;
;
function useTimelineSnapping({ snapThreshold = 10, enableElementSnapping = true, enablePlayheadSnapping = true } = {}) {
    const findSnapPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((tracks, currentTime, playheadTime, zoomLevel, excludeElementId)=>{
        const snapPoints = [];
        // Add element snap points
        if (enableElementSnapping) {
            tracks.forEach((track)=>{
                track.elements.forEach((element)=>{
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
                });
            });
        }
        // Add playhead snap point
        if (enablePlayheadSnapping) {
            snapPoints.push({
                time: playheadTime,
                type: "playhead"
            });
        }
        return snapPoints;
    }, [
        enableElementSnapping,
        enablePlayheadSnapping
    ]);
    const snapToNearestPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((targetTime, snapPoints, zoomLevel)=>{
        const pixelsPerSecond = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIMELINE_CONSTANTS"].PIXELS_PER_SECOND * zoomLevel;
        const thresholdInSeconds = snapThreshold / pixelsPerSecond;
        let closestSnapPoint = null;
        let closestDistance = Infinity;
        snapPoints.forEach((snapPoint)=>{
            const distance = Math.abs(targetTime - snapPoint.time);
            if (distance < thresholdInSeconds && distance < closestDistance) {
                closestDistance = distance;
                closestSnapPoint = snapPoint;
            }
        });
        return {
            snappedTime: closestSnapPoint ? closestSnapPoint.time : targetTime,
            snapPoint: closestSnapPoint,
            snapDistance: closestDistance
        };
    }, [
        snapThreshold
    ]);
    const snapElementPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((targetTime, tracks, playheadTime, zoomLevel, excludeElementId)=>{
        const snapPoints = findSnapPoints(tracks, targetTime, playheadTime, zoomLevel, excludeElementId);
        return snapToNearestPoint(targetTime, snapPoints, zoomLevel);
    }, [
        findSnapPoints,
        snapToNearestPoint
    ]);
    const snapElementEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((targetTime, elementDuration, tracks, playheadTime, zoomLevel, excludeElementId, snapToStart = true // true for start edge, false for end edge
    )=>{
        const snapPoints = findSnapPoints(tracks, targetTime, playheadTime, zoomLevel, excludeElementId);
        // For end edge snapping, we need to account for element duration
        const effectiveTargetTime = snapToStart ? targetTime : targetTime + elementDuration;
        const snapResult = snapToNearestPoint(effectiveTargetTime, snapPoints, zoomLevel);
        // Adjust the snapped time back for end edge
        if (!snapToStart && snapResult.snapPoint) {
            snapResult.snappedTime = snapResult.snappedTime - elementDuration;
        }
        return snapResult;
    }, [
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
}),
"[project]/apps/web/src/hooks/use-edge-auto-scroll.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useEdgeAutoScroll": ()=>useEdgeAutoScroll
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useEdgeAutoScroll({ isActive, getMouseClientX, rulerScrollRef, tracksScrollRef, contentWidth, edgeThreshold = 100, maxScrollSpeed = 15 }) {
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isActive) {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
            return;
        }
        const step = ()=>{
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
        };
        rafRef.current = requestAnimationFrame(step);
        return ()=>{
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
        };
    }, [
        isActive,
        getMouseClientX,
        rulerScrollRef,
        tracksScrollRef,
        contentWidth,
        edgeThreshold,
        maxScrollSpeed
    ]);
}
}),
"[project]/apps/web/src/hooks/use-timeline-playhead.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useTimelinePlayhead": ()=>useTimelinePlayhead
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/timeline-constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/playback-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$edge$2d$auto$2d$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/use-edge-auto-scroll.ts [app-ssr] (ecmascript)");
;
;
;
;
;
function useTimelinePlayhead({ currentTime, duration, zoomLevel, seek, rulerRef, rulerScrollRef, tracksScrollRef, playheadRef }) {
    // Playhead scrubbing state
    const [isScrubbing, setIsScrubbing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrubTime, setScrubTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Ruler drag detection state
    const [isDraggingRuler, setIsDraggingRuler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasDraggedRuler, setHasDraggedRuler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastMouseXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const playheadPosition = isScrubbing && scrubTime !== null ? scrubTime : currentTime;
    // --- Playhead Scrubbing Handlers ---
    const handlePlayheadMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        e.stopPropagation(); // Prevent ruler drag from triggering
        setIsScrubbing(true);
        handleScrub(e);
    }, [
        duration,
        zoomLevel
    ]);
    // Ruler mouse down handler
    const handleRulerMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        // Only handle left mouse button
        if (e.button !== 0) return;
        // Don't interfere if clicking on the playhead itself
        if (playheadRef?.current?.contains(e.target)) return;
        e.preventDefault();
        setIsDraggingRuler(true);
        setHasDraggedRuler(false);
        // Start scrubbing immediately
        setIsScrubbing(true);
        handleScrub(e);
    }, [
        duration,
        zoomLevel
    ]);
    const handleScrub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
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
        const projectStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].getState();
        const projectFps = projectStore.activeProject?.fps || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_FPS"];
        const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["snapTimeToFrame"])(rawTime, projectFps);
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
    }, [
        duration,
        zoomLevel,
        seek,
        rulerRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$edge$2d$auto$2d$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEdgeAutoScroll"])({
        isActive: isScrubbing,
        getMouseClientX: ()=>lastMouseXRef.current,
        rulerScrollRef,
        tracksScrollRef,
        contentWidth: duration * 50 * zoomLevel
    });
    // Mouse move/up event handlers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isScrubbing) return;
        const onMouseMove = (e)=>{
            handleScrub(e);
            // Mark that we've dragged if ruler drag is active
            if (isDraggingRuler) {
                setHasDraggedRuler(true);
            }
        };
        const onMouseUp = (e)=>{
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
        };
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        // Edge auto-scroll is handled by useEdgeAutoScroll
        return ()=>{
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        // nothing to cleanup for edge auto scroll
        };
    }, [
        isScrubbing,
        scrubTime,
        seek,
        handleScrub,
        isDraggingRuler,
        hasDraggedRuler
    ]);
    // --- Playhead auto-scroll effect (only during playback) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const { isPlaying } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlaybackStore"].getState();
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
    }, [
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
}),
"[project]/apps/web/src/hooks/use-selection-box.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useSelectionBox": ()=>useSelectionBox
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useSelectionBox({ containerRef, playheadRef, onSelectionComplete, isEnabled = true }) {
    const [selectionBox, setSelectionBox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [justFinishedSelecting, setJustFinishedSelecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Mouse down handler to start selection
    const handleMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!isEnabled) return;
        // Only start selection on empty space clicks
        if (e.target.closest(".timeline-element")) {
            return;
        }
        if (playheadRef?.current?.contains(e.target)) {
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
    }, [
        isEnabled,
        playheadRef
    ]);
    // Function to select elements within the selection box
    const selectElementsInBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((startPos, endPos)=>{
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
        timelineElements.forEach((element)=>{
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
        });
        // Always call the callback - with elements or empty array to clear selection
        console.log(JSON.stringify({
            selectElementsInBox: selectedElements.length
        }));
        onSelectionComplete(selectedElements);
    }, [
        containerRef,
        onSelectionComplete
    ]);
    // Effect to track selection box movement
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!selectionBox) return;
        const handleMouseMove = (e)=>{
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
        };
        const handleMouseUp = ()=>{
            console.log(JSON.stringify({
                mouseUp: {
                    wasActive: selectionBox?.isActive
                }
            }));
            // If we had an active selection, mark that we just finished selecting
            if (selectionBox?.isActive) {
                console.log(JSON.stringify({
                    settingJustFinishedSelecting: true
                }));
                setJustFinishedSelecting(true);
                // Clear the flag after a short delay to allow click events to check it
                setTimeout(()=>{
                    console.log(JSON.stringify({
                        clearingJustFinishedSelecting: true
                    }));
                    setJustFinishedSelecting(false);
                }, 50);
            }
            // Don't call selectElementsInBox again - real-time selection already handled it
            // Just clean up the selection box visual
            setSelectionBox(null);
        };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return ()=>{
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [
        selectionBox,
        selectElementsInBox
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!selectionBox?.isActive) return;
        const previousBodyUserSelect = document.body.style.userSelect;
        const container = containerRef.current;
        const previousContainerUserSelect = container?.style.userSelect ?? "";
        document.body.style.userSelect = "none";
        if (container) container.style.userSelect = "none";
        return ()=>{
            document.body.style.userSelect = previousBodyUserSelect;
            if (container) container.style.userSelect = previousContainerUserSelect;
        };
    }, [
        selectionBox?.isActive,
        containerRef
    ]);
    return {
        selectionBox,
        handleMouseDown,
        isSelecting: selectionBox?.isActive || false,
        justFinishedSelecting
    };
}
}),
"[project]/apps/web/src/hooks/use-frame-cache.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useFrameCache": ()=>useFrameCache
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
// Shared singleton cache across hook instances (HMR-safe)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const __frameCacheGlobal = globalThis;
const __sharedFrameCache = __frameCacheGlobal.__sharedFrameCache ?? new Map();
__frameCacheGlobal.__sharedFrameCache = __sharedFrameCache;
function useFrameCache(options = {}) {
    const { maxCacheSize = 300, cacheResolution = 30 } = options; // 10 seconds at 30fps
    const frameCacheRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(__sharedFrameCache);
    // Generate a hash of the timeline state that affects rendering
    const getTimelineHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((time, tracks, mediaFiles, activeProject, sceneId)=>{
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
            backgroundColor: activeProject?.backgroundColor,
            backgroundType: activeProject?.backgroundType,
            blurIntensity: activeProject?.blurIntensity,
            canvasSize: activeProject?.canvasSize
        };
        const hash = {
            activeElements,
            projectState,
            sceneId,
            time: Math.floor(time * cacheResolution) / cacheResolution
        };
        return JSON.stringify(hash);
    }, [
        cacheResolution
    ]);
    // Check if a frame is cached and valid
    const isFrameCached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((time, tracks, mediaFiles, activeProject, sceneId)=>{
        const frameKey = Math.floor(time * cacheResolution);
        const cached = frameCacheRef.current.get(frameKey);
        if (!cached) return false;
        const currentHash = getTimelineHash(time, tracks, mediaFiles, activeProject, sceneId);
        return cached.timelineHash === currentHash;
    }, [
        getTimelineHash,
        cacheResolution
    ]);
    // Get cached frame if available and valid
    const getCachedFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((time, tracks, mediaFiles, activeProject, sceneId)=>{
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
    }, [
        getTimelineHash,
        cacheResolution
    ]);
    // Cache a rendered frame
    const cacheFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((time, imageData, tracks, mediaFiles, activeProject, sceneId)=>{
        const frameKey = Math.floor(time * cacheResolution);
        const timelineHash = getTimelineHash(time, tracks, mediaFiles, activeProject, sceneId);
        // Enforce cache size limit (LRU eviction)
        if (frameCacheRef.current.size >= maxCacheSize) {
            // Remove oldest entries
            const entries = Array.from(frameCacheRef.current.entries());
            entries.sort((a, b)=>a[1].timestamp - b[1].timestamp);
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
    }, [
        getTimelineHash,
        cacheResolution,
        maxCacheSize
    ]);
    // Clear cache when timeline changes significantly
    const invalidateCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        frameCacheRef.current.clear();
    }, []);
    // Get render status for timeline indicator
    const getRenderStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((time, tracks, mediaFiles, activeProject, sceneId)=>{
        return isFrameCached(time, tracks, mediaFiles, activeProject, sceneId) ? "cached" : "not-cached";
    }, [
        isFrameCached
    ]);
    // Pre-render frames around current time
    const preRenderNearbyFrames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (currentTime, tracks, mediaFiles, activeProject, renderFunction, sceneId, range = 3 // seconds
    )=>{
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
        expandedTimes.sort((a, b)=>{
            const da = a >= currentTime ? a - currentTime : currentTime - a + 1e6;
            const db = b >= currentTime ? b - currentTime : currentTime - b + 1e6;
            return da - db;
        });
        // Cap total scheduled renders to avoid jank (e.g., up to 90 frames)
        const CAP = Math.max(30, Math.min(90, cacheResolution * 3));
        const toSchedule = expandedTimes.slice(0, CAP);
        // Pre-render during idle time
        for (const time of toSchedule){
            requestIdleCallback(async ()=>{
                try {
                    const imageData = await renderFunction(time);
                    cacheFrame(time, imageData, tracks, mediaFiles, activeProject, sceneId);
                } catch (error) {
                    console.warn(`Pre-render failed for time ${time}:`, error);
                }
            });
        }
    }, [
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
}),
"[project]/apps/web/src/hooks/use-keyboard-shortcuts-help.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useKeyboardShortcutsHelp": ()=>useKeyboardShortcutsHelp
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$keybindings$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/keybindings-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
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
    return key.replace("ctrl", (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatformSpecialKey"])()).replace("alt", (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlatformAlternateKey"])()).replace("shift", "Shift").replace("left", "←").replace("right", "→").replace("up", "↑").replace("down", "↓").replace("space", "Space").replace("home", "Home").replace("enter", "Enter").replace("end", "End").replace("delete", "Delete").replace("backspace", "Backspace").replace("-", "+");
};
const useKeyboardShortcutsHelp = ()=>{
    const { keybindings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$keybindings$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKeybindingsStore"])();
    const shortcuts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const result = [];
        // Group keybindings by action
        const actionToKeys = {};
        Object.entries(keybindings).forEach(([key, action])=>{
            if (action) {
                if (!actionToKeys[action]) {
                    actionToKeys[action] = [];
                }
                actionToKeys[action].push(formatKey(key));
            }
        });
        // Convert to shortcuts format
        Object.entries(actionToKeys).forEach(([action, keys])=>{
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
        });
        // Sort shortcuts by category first, then by description to ensure consistent ordering
        return result.sort((a, b)=>{
            if (a.category !== b.category) {
                return a.category.localeCompare(b.category);
            }
            return a.description.localeCompare(b.description);
        });
    }, [
        keybindings
    ]);
    return {
        shortcuts
    };
};
}),
"[project]/apps/web/src/hooks/use-keybindings.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "bindings": ()=>bindings,
    "useKeybindingDisabler": ()=>useKeybindingDisabler,
    "useKeybindingsListener": ()=>useKeybindingsListener
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/actions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$keybindings$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/keybindings-store.ts [app-ssr] (ecmascript)");
;
;
;
function useKeybindingsListener() {
    const { keybindings, getKeybindingString, keybindingsEnabled, isRecording } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$keybindings$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKeybindingsStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (ev)=>{
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invokeAction"])(boundAction, actionArgs, "keypress");
        };
        document.addEventListener("keydown", handleKeyDown);
        return ()=>{
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        keybindings,
        getKeybindingString,
        keybindingsEnabled,
        isRecording
    ]);
}
function useKeybindingDisabler() {
    const { disableKeybindings, enableKeybindings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$keybindings$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKeybindingsStore"])();
    return {
        disableKeybindings,
        enableKeybindings
    };
}
const bindings = {};
}),
"[project]/apps/web/src/hooks/use-editor-actions.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useEditorActions": ()=>useEditorActions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/actions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/playback-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/sonner@1.7.4+6dbf9a050bc9aadb/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function useEditorActions() {
    const { tracks, selectedElements, clearSelectedElements, setSelectedElements, deleteSelected, splitSelected, addElementToTrack, snappingEnabled, toggleSnapping, undo, redo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"])();
    const { currentTime, duration, isPlaying, toggle, seek } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlaybackStore"])();
    const { activeProject } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"])();
    // Playback actions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("toggle-play", ()=>{
        toggle();
    }, undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("stop-playback", ()=>{
        if (isPlaying) {
            toggle();
        }
        seek(0);
    }, undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("seek-forward", (args)=>{
        const seconds = args?.seconds ?? 1;
        seek(Math.min(duration, currentTime + seconds));
    }, undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("seek-backward", (args)=>{
        const seconds = args?.seconds ?? 1;
        seek(Math.max(0, currentTime - seconds));
    }, undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("frame-step-forward", ()=>{
        const projectFps = activeProject?.fps || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_FPS"];
        seek(Math.min(duration, currentTime + 1 / projectFps));
    }, undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("frame-step-backward", ()=>{
        const projectFps = activeProject?.fps || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_FPS"];
        seek(Math.max(0, currentTime - 1 / projectFps));
    }, undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("jump-forward", (args)=>{
        const seconds = args?.seconds ?? 5;
        seek(Math.min(duration, currentTime + seconds));
    }, undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("jump-backward", (args)=>{
        const seconds = args?.seconds ?? 5;
        seek(Math.max(0, currentTime - seconds));
    }, undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("goto-start", ()=>{
        seek(0);
    }, undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("goto-end", ()=>{
        seek(duration);
    }, undefined);
    // Timeline editing actions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("split-element", ()=>{
        if (selectedElements.length !== 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Select exactly one element to split");
            return;
        }
        const { trackId, elementId } = selectedElements[0];
        const track = tracks.find((t)=>t.id === trackId);
        const element = track?.elements.find((el)=>el.id === elementId);
        if (element) {
            const effectiveStart = element.startTime;
            const effectiveEnd = element.startTime + (element.duration - element.trimStart - element.trimEnd);
            if (currentTime > effectiveStart && currentTime < effectiveEnd) {
                splitSelected(currentTime, trackId, elementId);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Playhead must be within selected element");
            }
        }
    }, undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("delete-selected", ()=>{
        if (selectedElements.length === 0) {
            return;
        }
        deleteSelected();
    }, undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("select-all", ()=>{
        const allElements = tracks.flatMap((track)=>track.elements.map((element)=>({
                    trackId: track.id,
                    elementId: element.id
                })));
        setSelectedElements(allElements);
    }, undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("duplicate-selected", ()=>{
        if (selectedElements.length !== 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Select exactly one element to duplicate");
            return;
        }
        const { trackId, elementId } = selectedElements[0];
        const track = tracks.find((t)=>t.id === trackId);
        const element = track?.elements.find((el)=>el.id === elementId);
        if (element) {
            const newStartTime = element.startTime + (element.duration - element.trimStart - element.trimEnd) + 0.1;
            const { id, ...elementWithoutId } = element;
            addElementToTrack(trackId, {
                ...elementWithoutId,
                startTime: newStartTime
            });
        }
    }, undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("copy-selected", ()=>{
        if (selectedElements.length === 0) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"].getState().copySelected();
    }, undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("paste-selected", ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"].getState().pasteAtTime(currentTime);
    }, undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("toggle-snapping", ()=>{
        toggleSnapping();
    }, undefined);
    // History actions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("undo", ()=>{
        undo();
    }, undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionHandler"])("redo", ()=>{
        redo();
    }, undefined);
}
}),
"[project]/apps/web/src/hooks/use-playback-controls.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "usePlaybackControls": ()=>usePlaybackControls
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/playback-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/sonner@1.7.4+6dbf9a050bc9aadb/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
const usePlaybackControls = ()=>{
    const { isPlaying, currentTime, play, pause, seek } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlaybackStore"])();
    const { selectedElements, tracks, splitSelected, splitAndKeepLeft, splitAndKeepRight, separateAudio } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"])();
    const handleSplitSelectedElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (selectedElements.length !== 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Select exactly one element to split");
            return;
        }
        const { trackId, elementId } = selectedElements[0];
        const track = tracks.find((t)=>t.id === trackId);
        const element = track?.elements.find((e)=>e.id === elementId);
        if (!element) return;
        const effectiveStart = element.startTime;
        const effectiveEnd = element.startTime + (element.duration - element.trimStart - element.trimEnd);
        if (currentTime <= effectiveStart || currentTime >= effectiveEnd) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Playhead must be within selected element");
            return;
        }
        splitSelected(currentTime, trackId, elementId);
    }, [
        selectedElements,
        tracks,
        currentTime,
        splitSelected
    ]);
    const handleSplitAndKeepLeftCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (selectedElements.length !== 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Select exactly one element");
            return;
        }
        const { trackId, elementId } = selectedElements[0];
        const track = tracks.find((t)=>t.id === trackId);
        const element = track?.elements.find((e)=>e.id === elementId);
        if (!element) return;
        const effectiveStart = element.startTime;
        const effectiveEnd = element.startTime + (element.duration - element.trimStart - element.trimEnd);
        if (currentTime <= effectiveStart || currentTime >= effectiveEnd) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Playhead must be within selected element");
            return;
        }
        splitAndKeepLeft(trackId, elementId, currentTime);
    }, [
        selectedElements,
        tracks,
        currentTime,
        splitAndKeepLeft
    ]);
    const handleSplitAndKeepRightCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (selectedElements.length !== 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Select exactly one element");
            return;
        }
        const { trackId, elementId } = selectedElements[0];
        const track = tracks.find((t)=>t.id === trackId);
        const element = track?.elements.find((e)=>e.id === elementId);
        if (!element) return;
        const effectiveStart = element.startTime;
        const effectiveEnd = element.startTime + (element.duration - element.trimStart - element.trimEnd);
        if (currentTime <= effectiveStart || currentTime >= effectiveEnd) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Playhead must be within selected element");
            return;
        }
        splitAndKeepRight(trackId, elementId, currentTime);
    }, [
        selectedElements,
        tracks,
        currentTime,
        splitAndKeepRight
    ]);
    const handleSeparateAudioCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (selectedElements.length !== 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Select exactly one media element to separate audio");
            return;
        }
        const { trackId, elementId } = selectedElements[0];
        const track = tracks.find((t)=>t.id === trackId);
        if (!track || track.type !== "media") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Select a media element to separate audio");
            return;
        }
        separateAudio(trackId, elementId);
    }, [
        selectedElements,
        tracks,
        separateAudio
    ]);
};
}),
"[project]/apps/web/src/lib/mediabunny-utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "extractTimelineAudio": ()=>extractTimelineAudio,
    "generateThumbnail": ()=>generateThumbnail,
    "getVideoInfo": ()=>getVideoInfo,
    "initFFmpeg": ()=>initFFmpeg
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$empty$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/@ffmpeg+ffmpeg@0.12.15/node_modules/@ffmpeg/ffmpeg/dist/esm/empty.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/media-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/input-format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$source$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/source.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$media$2d$sink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/media-sink.js [app-ssr] (ecmascript)");
;
;
;
;
let ffmpeg = null;
const initFFmpeg = async ()=>{
    if (ffmpeg) return ffmpeg;
    ffmpeg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$empty$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FFmpeg"]();
    await ffmpeg.load(); // Use default config
    return ffmpeg;
};
async function generateThumbnail({ videoFile, timeInSeconds }) {
    const input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"]({
        source: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$source$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BlobSource"](videoFile),
        formats: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_FORMATS"]
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
    const sink = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$media$2d$sink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoSampleSink"](videoTrack);
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
async function getVideoInfo({ videoFile }) {
    const input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"]({
        source: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$source$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BlobSource"](videoFile),
        formats: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_FORMATS"]
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
    const ffmpeg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$ffmpeg$2b$ffmpeg$40$0$2e$12$2e$15$2f$node_modules$2f40$ffmpeg$2f$ffmpeg$2f$dist$2f$esm$2f$empty$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FFmpeg"]();
    try {
        await ffmpeg.load();
    } catch (error) {
        console.error("Failed to load fresh FFmpeg instance:", error);
        throw new Error("Unable to initialize audio processing. Please try again.");
    }
    const timeline = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"].getState();
    const mediaStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaStore"].getState();
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
        ffmpeg.on("progress", ({ progress })=>{
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
            const inputName = `input_${i}.${element.file.name.split(".").pop()}`;
            inputFiles.push(inputName);
            try {
                await ffmpeg.writeFile(inputName, new Uint8Array(await element.file.arrayBuffer()));
            } catch (error) {
                console.error(`Failed to write file ${element.file.name}:`, error);
                throw new Error(`Unable to process file: ${element.file.name}. The file may be corrupted or in an unsupported format.`);
            }
            const actualStart = element.trimStart;
            const actualDuration = element.duration - element.trimStart - element.trimEnd;
            const filterName = `audio_${i}`;
            filterInputs.push(`[${i}:a]atrim=start=${actualStart}:duration=${actualDuration},asetpts=PTS-STARTPTS,adelay=${element.startTime * 1000}|${element.startTime * 1000}[${filterName}]`);
        }
        const mixFilter = audioElements.length === 1 ? `[audio_0]aresample=44100,aformat=sample_fmts=s16:channel_layouts=stereo[out]` : `${filterInputs.map((_, i)=>`[audio_${i}]`).join("")}amix=inputs=${audioElements.length}:duration=longest:dropout_transition=2,aresample=44100,aformat=sample_fmts=s16:channel_layouts=stereo[out]`;
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
                console.warn(`Failed to cleanup file ${inputFile}:`, cleanupError);
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
            `anullsrc=channel_layout=stereo:sample_rate=44100`,
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
}),
"[project]/apps/web/src/lib/media-processing.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "processMediaFiles": ()=>processMediaFiles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/sonner@1.7.4+6dbf9a050bc9aadb/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/media-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mediabunny$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/mediabunny-utils.ts [app-ssr] (ecmascript)");
;
;
;
async function processMediaFiles(files, onProgress) {
    const fileArray = Array.from(files);
    const processedItems = [];
    const total = fileArray.length;
    let completed = 0;
    for (const file of fileArray){
        const fileType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFileType"])(file);
        if (!fileType) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(`Unsupported file type: ${file.name}`);
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
                const dimensions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getImageDimensions"])(file);
                width = dimensions.width;
                height = dimensions.height;
            } else if (fileType === "video") {
                try {
                    const videoInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mediabunny$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVideoInfo"])({
                        videoFile: file
                    });
                    duration = videoInfo.duration;
                    width = videoInfo.width;
                    height = videoInfo.height;
                    fps = videoInfo.fps;
                    thumbnailUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mediabunny$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateThumbnail"])({
                        videoFile: file,
                        timeInSeconds: 1
                    });
                } catch (error) {
                    console.warn("Video processing failed", error);
                }
            } else if (fileType === "audio") {
                // For audio, we don't set width/height/fps (they'll be undefined)
                duration = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMediaDuration"])(file);
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(`Failed to process ${file.name}`);
            URL.revokeObjectURL(url); // Clean up on error
        }
    }
    return processedItems;
}
}),
"[project]/apps/web/src/lib/iconify-api.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
            const response = await fetch(`${host}${path}`, {
                signal: AbortSignal.timeout(2000)
            });
            if (response.ok) {
                currentHost = host;
                return response;
            }
        } catch (error) {
            console.warn(`Failed to fetch from ${host}:`, error);
        }
    }
    throw new Error("All API hosts failed");
}
async function getCollections(category) {
    try {
        const response = await fetchWithFallback("/collections?pretty=1");
        const data = await response.json();
        if (category) {
            const filtered = Object.fromEntries(Object.entries(data).filter(([_key, info])=>info.category === category));
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
        const response = await fetchWithFallback(`/collection?prefix=${prefix}&pretty=1`);
        return await response.json();
    } catch (error) {
        console.error(`Failed to fetch collection ${prefix}:`, error);
        return null;
    }
}
async function searchIcons(query, limit = 64, prefixes, category) {
    const params = new URLSearchParams({
        query,
        limit: limit.toString(),
        pretty: "1"
    });
    if (prefixes?.length) {
        params.append("prefixes", prefixes.join(","));
    }
    if (category) {
        params.append("category", category);
    }
    try {
        const response = await fetchWithFallback(`/search?${params}`);
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
    if (params?.color) {
        urlParams.append("color", params.color.replace("#", "%23"));
    }
    if (params?.width) {
        urlParams.append("width", params.width.toString());
    }
    if (params?.height) {
        urlParams.append("height", params.height.toString());
    }
    if (params?.flip) {
        urlParams.append("flip", params.flip);
    }
    if (params?.rotate) {
        urlParams.append("rotate", params.rotate.toString());
    }
    const queryString = urlParams.toString();
    return `${host}/${prefix}/${name}.svg${queryString ? "?" + queryString : ""}`;
}
function getIconSvgUrl(iconName, params) {
    return buildIconSvgUrl(currentHost, iconName, params);
}
async function downloadSvgAsText(iconName, params) {
    const url = getIconSvgUrl(iconName, params);
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to download SVG: ${response.statusText}`);
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
}),
"[project]/apps/web/src/lib/zk-encryption.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
}),
"[project]/apps/web/src/lib/time.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Time-related utility functions
__turbopack_context__.s({
    "formatTimeCode": ()=>formatTimeCode,
    "guessTimeCodeFormat": ()=>guessTimeCodeFormat,
    "parseTimeCode": ()=>parseTimeCode
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-ssr] (ecmascript)");
;
const formatTimeCode = (timeInSeconds, format = "HH:MM:SS:CS", fps = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_FPS"])=>{
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor(timeInSeconds % 3600 / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const centiseconds = Math.floor(timeInSeconds % 1 * 100);
    const frames = Math.floor(timeInSeconds % 1 * fps);
    switch(format){
        case "MM:SS":
            return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        case "HH:MM:SS":
            return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        case "HH:MM:SS:CS":
            return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${centiseconds.toString().padStart(2, "0")}`;
        case "HH:MM:SS:FF":
            return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${frames.toString().padStart(2, "0")}`;
    }
};
const parseTimeCode = (timeCode, format = "HH:MM:SS:CS", fps = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_FPS"])=>{
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
    } catch  {
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
}),
"[project]/apps/web/src/lib/canvas-gradients.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
                const pos = stop.position ?? j / Math.max(1, colorStops.length - 1);
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
                const pos = stop.position ?? j / Math.max(1, colorStops.length - 1);
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
}),
"[project]/apps/web/src/lib/timeline-renderer.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "renderTimelineFrame": ()=>renderTimelineFrame
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$video$2d$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/video-cache.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$canvas$2d$gradients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/canvas-gradients.ts [app-ssr] (ecmascript)");
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
async function renderTimelineFrame({ ctx, time, canvasWidth, canvasHeight, tracks, mediaFiles, backgroundColor, backgroundType, blurIntensity, projectCanvasSize }) {
    // Background
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    if (backgroundColor && backgroundColor !== "transparent" && !backgroundColor.includes("gradient")) {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }
    // If backgroundColor is a CSS gradient string, draw it
    if (backgroundColor && backgroundColor.includes("gradient")) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$canvas$2d$gradients$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawCssBackground"])(ctx, canvasWidth, canvasHeight, backgroundColor);
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
        const blurPx = Math.max(0, blurIntensity ?? 8);
        // Find a suitable media element (video/image) among active elements
        const bgCandidate = active.find(({ element, mediaItem })=>{
            return element.type === "media" && mediaItem !== null && (mediaItem.type === "video" || mediaItem.type === "image");
        });
        if (bgCandidate && bgCandidate.mediaItem) {
            const { element, mediaItem } = bgCandidate;
            try {
                if (mediaItem.type === "video") {
                    const localTime = time - element.startTime + element.trimStart;
                    const frame = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$video$2d$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["videoCache"].getFrameAt(mediaItem.id, mediaItem.file, Math.max(0, localTime));
                    if (frame) {
                        const mediaW = Math.max(1, mediaItem.width || canvasWidth);
                        const mediaH = Math.max(1, mediaItem.height || canvasHeight);
                        const coverScale = Math.max(canvasWidth / mediaW, canvasHeight / mediaH);
                        const drawW = mediaW * coverScale;
                        const drawH = mediaH * coverScale;
                        const drawX = (canvasWidth - drawW) / 2;
                        const drawY = (canvasHeight - drawH) / 2;
                        ctx.save();
                        ctx.filter = `blur(${blurPx}px)`;
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
                    ctx.filter = `blur(${blurPx}px)`;
                    ctx.drawImage(img, drawX, drawY, drawW, drawH);
                    ctx.restore();
                }
            } catch  {
            // Ignore background blur failures; foreground will still render
            }
        }
    }
    for (const { element, mediaItem } of active){
        if (element.type === "media" && mediaItem) {
            if (mediaItem.type === "video") {
                try {
                    const localTime = time - element.startTime + element.trimStart;
                    const frame = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$video$2d$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["videoCache"].getFrameAt(mediaItem.id, mediaItem.file, localTime);
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
                    console.warn(`Failed to render video frame for ${mediaItem.name}:`, error);
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
            ctx.font = `${style}${weight}${px}px ${text.fontFamily}`;
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
}),
"[project]/apps/web/src/lib/export.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "DEFAULT_EXPORT_OPTIONS": ()=>DEFAULT_EXPORT_OPTIONS,
    "exportProject": ()=>exportProject,
    "getExportFileExtension": ()=>getExportFileExtension,
    "getExportMimeType": ()=>getExportMimeType
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$output$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/output.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$output$2d$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/output-format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/target.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$media$2d$source$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/media-source.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/codec.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$timeline$2d$renderer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/timeline-renderer.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/media-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-ssr] (ecmascript)");
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
    low: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUALITY_LOW"],
    medium: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUALITY_MEDIUM"],
    high: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUALITY_HIGH"],
    very_high: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$codec$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUALITY_VERY_HIGH"]
};
async function createTimelineAudioBuffer(tracks, mediaFiles, duration, sampleRate = 44100) {
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
                console.warn(`Failed to decode audio file ${mediaItem.name}:`, error);
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
        const timelineStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"].getState();
        const mediaStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaStore"].getState();
        const projectStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].getState();
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
        const exportFps = fps || activeProject.fps || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_FPS"];
        const canvasSize = activeProject.canvasSize || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_CANVAS_SIZE"];
        const outputFormat = format === "webm" ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$output$2d$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebMOutputFormat"]() : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$output$2d$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mp4OutputFormat"]();
        // BufferTarget for smaller files, StreamTarget for larger ones
        // TODO: Implement StreamTarget
        const output = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$output$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Output"]({
            format: outputFormat,
            target: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferTarget"]()
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
        const videoSource = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$media$2d$source$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasSource"](canvas, {
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
            onProgress?.(0.05); // 5% for audio processing
            audioBuffer = await createTimelineAudioBuffer(tracks, mediaFiles, duration);
            if (audioBuffer) {
                audioSource = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$media$2d$source$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioBufferSource"]({
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
            if (onCancel?.()) {
                cancelled = true;
                break;
            }
            const time = frameIndex / exportFps;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$timeline$2d$renderer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderTimelineFrame"])({
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
            onProgress?.(videoProgress);
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
        onProgress?.(1);
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
    return `.${format}`;
}
}),
"[project]/apps/web/src/stores/panel-store.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "PRESET_CONFIGS": ()=>PRESET_CONFIGS,
    "usePanelStore": ()=>usePanelStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
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
const usePanelStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
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
}),
"[project]/apps/web/src/stores/sounds-store.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useSoundsStore": ()=>useSoundsStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/storage/storage-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/sonner@1.7.4+6dbf9a050bc9aadb/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/media-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/playback-store.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const useSoundsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
                const savedSoundsData = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].loadSavedSounds();
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
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveSoundEffect({
                    soundEffect
                });
                // Refresh saved sounds
                const savedSoundsData = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].loadSavedSounds();
                set({
                    savedSounds: savedSoundsData.sounds
                });
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Failed to save sound";
                set({
                    savedSoundsError: errorMessage
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to save sound");
                console.error("Failed to save sound:", error);
            }
        },
        removeSavedSound: async (soundId)=>{
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].removeSavedSound({
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
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to remove sound");
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
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].clearSavedSounds();
                set({
                    savedSounds: [],
                    savedSoundsError: null
                });
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Failed to clear saved sounds";
                set({
                    savedSoundsError: errorMessage
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to clear saved sounds");
                console.error("Failed to clear saved sounds:", error);
            }
        },
        addSoundToTimeline: async (sound)=>{
            const activeProject = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].getState().activeProject;
            if (!activeProject) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("No active project");
                return false;
            }
            const audioUrl = sound.previewUrl;
            if (!audioUrl) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Sound file not available");
                return false;
            }
            try {
                const response = await fetch(audioUrl);
                if (!response.ok) throw new Error(`Failed to download audio: ${response.statusText}`);
                const blob = await response.blob();
                const file = new File([
                    blob
                ], `${sound.name}.mp3`, {
                    type: "audio/mpeg"
                });
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaStore"].getState().addMediaFile(activeProject.id, {
                    name: sound.name,
                    type: "audio",
                    file,
                    duration: sound.duration,
                    url: URL.createObjectURL(file)
                });
                const mediaItem = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaStore"].getState().mediaFiles.find((item)=>item.file === file);
                if (!mediaItem) throw new Error("Failed to create media item");
                const success = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"].getState().addElementAtTime(mediaItem, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlaybackStore"].getState().currentTime);
                if (success) {
                    return true;
                }
                throw new Error("Failed to add to timeline - check for overlaps");
            } catch (error) {
                console.error("Failed to add sound to timeline:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error instanceof Error ? error.message : "Failed to add sound to timeline", {
                    id: `sound-${sound.id}`
                });
                return false;
            }
        }
    }));
}),
"[project]/apps/web/src/stores/stickers-store.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useStickersStore": ()=>useStickersStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$iconify$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/iconify-api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/media-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/playback-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/timeline-constants.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const MAX_RECENT_STICKERS = 50;
const useStickersStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
                const collections = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$iconify$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCollections"])();
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
                const collection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$iconify$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCollection"])(prefix);
                set({
                    currentCollection: collection
                });
            } catch (error) {
                console.error(`Failed to load collection ${prefix}:`, error);
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
                const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$iconify$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchIcons"])(query, 100, undefined, category);
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
                const svgText = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$iconify$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadSvgAsText"])(iconName, {
                    width: 200,
                    height: 200
                });
                const fileName = `${iconName.replace(":", "-")}.svg`;
                const file = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$iconify$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svgToFile"])(svgText, fileName);
                get().addToRecentStickers(iconName);
                return file;
            } catch (error) {
                console.error(`Failed to download sticker ${iconName}:`, error);
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
                const { activeProject } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].getState();
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
                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIMELINE_CONSTANTS"].DEFAULT_IMAGE_DURATION,
                    ephemeral: false
                };
                const { addMediaFile } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaStore"].getState();
                await addMediaFile(activeProject.id, mediaItem);
                const added = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaStore"].getState().mediaFiles.find((m)=>m.url === mediaItem.url && m.name === mediaItem.name);
                if (!added) {
                    throw new Error("Sticker not in media store");
                }
                const { currentTime } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlaybackStore"].getState();
                const { addElementAtTime } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"].getState();
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
}),
"[project]/apps/web/src/stores/editor-store.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "PLATFORM_LAYOUTS": ()=>PLATFORM_LAYOUTS,
    "useEditorStore": ()=>useEditorStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
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
const useEditorStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
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
}),
"[project]/apps/web/src/stores/text-properties-store.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "TEXT_PROPERTIES_TABS": ()=>TEXT_PROPERTIES_TABS,
    "isTextPropertiesTab": ()=>isTextPropertiesTab,
    "useTextPropertiesStore": ()=>useTextPropertiesStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
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
const useTextPropertiesStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        activeTab: "transform",
        setActiveTab: (tab)=>set({
                activeTab: tab
            })
    }), {
    name: "text-properties"
}));
}),
"[project]/apps/web/src/stores/keybindings-store.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "defaultKeybindings": ()=>defaultKeybindings,
    "useKeybindingsStore": ()=>useKeybindingsStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
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
const useKeybindingsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
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
                    throw new Error(`Invalid key format: ${key}`);
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
        if (modifierKey === "shift" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDOMElement"])(target) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTypableElement"])(target)) {
            return null;
        }
        return `${modifierKey}+${key}`;
    }
    // no modifier key here then we do not do anything while on input
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDOMElement"])(target) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTypableElement"])(target)) return null;
    // single key while not input
    return `${key}`;
}
function getPressedKey(ev) {
    // Sometimes the property code is not available on the KeyboardEvent object
    const key = (ev.key ?? "").toLowerCase();
    const code = ev.code ?? "";
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
        ctrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAppleDevice"])() ? ev.metaKey : ev.ctrlKey,
        alt: ev.altKey,
        shift: ev.shiftKey
    };
    // active modifier: ctrl | alt | ctrl+alt | ctrl+shift | ctrl+alt+shift | alt+shift
    // modiferKeys object's keys are sorted to match the above order
    const activeModifier = Object.keys(modifierKeys).filter((key)=>modifierKeys[key]).join("+");
    return activeModifier === "" ? null : activeModifier;
}
}),
"[project]/apps/web/src/data/colors/solid.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
}),
"[project]/apps/web/src/data/colors/pattern-craft.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
}),
"[project]/apps/web/src/data/colors/syntax-ui.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
}),
"[project]/apps/web/src/constants/font-constants.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
}),
"[project]/apps/web/src/constants/actions.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
// Simple event emitter for action changes
class ActionEmitter {
    listeners = [];
    subscribe(listener) {
        this.listeners.push(listener);
        return ()=>{
            this.listeners = this.listeners.filter((l)=>l !== listener);
        };
    }
    emit(actions) {
        this.listeners.forEach((listener)=>listener(actions));
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
        boundActions[action]?.push(handler);
    } else {
        // 'any' assertion because TypeScript doesn't seem to be able to figure out the links.
        boundActions[action] = [
            handler
        ];
    }
    updateActiveActions();
}
const invokeAction = (action, args, trigger)=>{
    boundActions[action]?.forEach((handler)=>handler(args, trigger));
};
function unbindAction(action, handler) {
    // 'any' assertion because TypeScript doesn't seem to be able to figure out the links.
    boundActions[action] = boundActions[action]?.filter((x)=>x !== handler);
    if (boundActions[action]?.length === 0) {
        delete boundActions[action];
    }
    updateActiveActions();
}
function isActionBound(action) {
    return !!boundActions[action];
}
function useActionHandler(action, handler, isActive) {
    const handlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(handler);
    const [isBound, setIsBound] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Update handler ref when handler changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        handlerRef.current = handler;
    }, [
        handler
    ]);
    // Create a stable handler wrapper
    const stableHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((args, trigger)=>{
        handlerRef.current(args, trigger);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const shouldBind = isActive === undefined || (typeof isActive === "boolean" ? isActive : isActive.current);
        if (shouldBind && !isBound) {
            bindAction(action, stableHandler);
            setIsBound(true);
        } else if (!shouldBind && isBound) {
            unbindAction(action, stableHandler);
            setIsBound(false);
        }
        return ()=>{
            if (isBound) {
                unbindAction(action, stableHandler);
                setIsBound(false);
            }
        };
    }, [
        action,
        stableHandler,
        isActive,
        isBound
    ]);
    // Handle ref-based isActive changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isActive && typeof isActive === "object" && "current" in isActive) {
            // Poll for ref changes
            const interval = setInterval(()=>{
                const shouldBind = isActive.current;
                if (shouldBind !== isBound) {
                    if (shouldBind) {
                        bindAction(action, stableHandler);
                    } else {
                        unbindAction(action, stableHandler);
                    }
                    setIsBound(shouldBind);
                }
            }, 100);
            return ()=>clearInterval(interval);
        }
    }, [
        action,
        stableHandler,
        isActive,
        isBound
    ]);
}
function useActiveActions() {
    const [activeActions, setActiveActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Set initial value
        setActiveActions(currentActiveActions);
        // Subscribe to changes
        const unsubscribe = actionEmitter.subscribe(setActiveActions);
        return unsubscribe;
    }, []);
    return activeActions;
}
function useIsActionBound(action) {
    const [isBound, setIsBound] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>isActionBound(action));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateBoundState = ()=>{
            setIsBound(isActionBound(action));
        };
        // Set initial value
        updateBoundState();
        // Subscribe to changes
        const unsubscribe = actionEmitter.subscribe(updateBoundState);
        return unsubscribe;
    }, [
        action
    ]);
    return isBound;
}
}),
"[project]/apps/web/src/app/editor/[project_id]/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Editor
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/resizable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$media$2d$panel$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/editor/media-panel/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$properties$2d$panel$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/editor/properties-panel/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$timeline$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/editor/timeline/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$preview$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/editor/preview-panel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$editor$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/editor/editor-header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$panel$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/panel-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$providers$2f$editor$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/providers/editor-provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$playback$2d$controls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/use-playback-controls.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$onboarding$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/editor/onboarding.tsx [app-ssr] (ecmascript)");
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
;
function Editor() {
    const { toolsPanel, previewPanel, mainContent, timeline, setToolsPanel, setPreviewPanel, setMainContent, setTimeline, propertiesPanel, setPropertiesPanel, activePreset, resetCounter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$panel$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePanelStore"])();
    const { activeProject, loadProject, createNewProject, isInvalidProjectId, markProjectIdAsInvalid } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const projectId = params.project_id;
    const handledProjectIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const isInitializingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$use$2d$playback$2d$controls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlaybackControls"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isCancelled = false;
        const initProject = async ()=>{
            if (!projectId) {
                return;
            }
            // Prevent duplicate initialization
            if (isInitializingRef.current) {
                return;
            }
            // Check if project is already loaded
            if (activeProject?.id === projectId) {
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
                        router.replace(`/editor/${newProjectId}`);
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
        };
        initProject();
        // Cleanup function to cancel async operations
        return ()=>{
            isCancelled = true;
            isInitializingRef.current = false;
        };
    }, [
        projectId,
        loadProject,
        createNewProject,
        router,
        isInvalidProjectId,
        markProjectIdAsInvalid
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$providers$2f$editor$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-screen flex flex-col bg-background overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$editor$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditorHeader"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-h-0 min-w-0",
                    children: activePreset === "media" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                        direction: "horizontal",
                        className: "h-full w-full gap-[0.18rem] px-3 pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                defaultSize: toolsPanel,
                                minSize: 15,
                                maxSize: 40,
                                onResize: setToolsPanel,
                                className: "min-w-0 rounded-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$media$2d$panel$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MediaPanel"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                withHandle: true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                defaultSize: 100 - toolsPanel,
                                minSize: 60,
                                className: "min-w-0 min-h-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                                    direction: "vertical",
                                    className: "h-full w-full gap-[0.18rem]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                            defaultSize: mainContent,
                                            minSize: 30,
                                            maxSize: 85,
                                            onResize: setMainContent,
                                            className: "min-h-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                                                direction: "horizontal",
                                                className: "h-full w-full gap-[0.19rem]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                                        defaultSize: previewPanel,
                                                        minSize: 30,
                                                        onResize: setPreviewPanel,
                                                        className: "min-w-0 min-h-0 flex-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$preview$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PreviewPanel"], {}, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                                        withHandle: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                                        defaultSize: propertiesPanel,
                                                        minSize: 15,
                                                        maxSize: 40,
                                                        onResize: setPropertiesPanel,
                                                        className: "min-w-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$properties$2d$panel$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PropertiesPanel"], {}, void 0, false, {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                            withHandle: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                            defaultSize: timeline,
                                            minSize: 15,
                                            maxSize: 70,
                                            onResize: setTimeline,
                                            className: "min-h-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$timeline$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timeline"], {}, void 0, false, {
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
                    }, `media-${activePreset}-${resetCounter}`, true, {
                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                        lineNumber: 159,
                        columnNumber: 13
                    }, this) : activePreset === "inspector" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                        direction: "horizontal",
                        className: "h-full w-full gap-[0.18rem] px-3 pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                defaultSize: 100 - propertiesPanel,
                                minSize: 30,
                                onResize: (size)=>setPropertiesPanel(100 - size),
                                className: "min-w-0 min-h-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                                    direction: "vertical",
                                    className: "h-full w-full gap-[0.18rem]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                            defaultSize: mainContent,
                                            minSize: 30,
                                            maxSize: 85,
                                            onResize: setMainContent,
                                            className: "min-h-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                                                direction: "horizontal",
                                                className: "h-full w-full gap-[0.19rem]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                                        defaultSize: toolsPanel,
                                                        minSize: 15,
                                                        maxSize: 40,
                                                        onResize: setToolsPanel,
                                                        className: "min-w-0 rounded-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$media$2d$panel$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MediaPanel"], {}, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                                        withHandle: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                                        defaultSize: previewPanel,
                                                        minSize: 30,
                                                        onResize: setPreviewPanel,
                                                        className: "min-w-0 min-h-0 flex-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$preview$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PreviewPanel"], {}, void 0, false, {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                            withHandle: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 283,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                            defaultSize: timeline,
                                            minSize: 15,
                                            maxSize: 70,
                                            onResize: setTimeline,
                                            className: "min-h-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$timeline$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timeline"], {}, void 0, false, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                withHandle: true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                lineNumber: 297,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                defaultSize: propertiesPanel,
                                minSize: 15,
                                maxSize: 40,
                                onResize: setPropertiesPanel,
                                className: "min-w-0 min-h-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$properties$2d$panel$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PropertiesPanel"], {}, void 0, false, {
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
                    }, `inspector-${activePreset}-${resetCounter}`, true, {
                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                        lineNumber: 234,
                        columnNumber: 13
                    }, this) : activePreset === "vertical-preview" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                        direction: "horizontal",
                        className: "h-full w-full gap-[0.18rem] px-3 pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                defaultSize: 100 - previewPanel,
                                minSize: 30,
                                onResize: (size)=>setPreviewPanel(100 - size),
                                className: "min-w-0 min-h-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                                    direction: "vertical",
                                    className: "h-full w-full gap-[0.18rem]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                            defaultSize: mainContent,
                                            minSize: 30,
                                            maxSize: 85,
                                            onResize: setMainContent,
                                            className: "min-h-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                                                direction: "horizontal",
                                                className: "h-full w-full gap-[0.19rem]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                                        defaultSize: toolsPanel,
                                                        minSize: 15,
                                                        maxSize: 40,
                                                        onResize: setToolsPanel,
                                                        className: "min-w-0 rounded-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$media$2d$panel$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MediaPanel"], {}, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                            lineNumber: 343,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                                        withHandle: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                                        defaultSize: propertiesPanel,
                                                        minSize: 15,
                                                        maxSize: 40,
                                                        onResize: setPropertiesPanel,
                                                        className: "min-w-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$properties$2d$panel$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PropertiesPanel"], {}, void 0, false, {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                            withHandle: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 360,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                            defaultSize: timeline,
                                            minSize: 15,
                                            maxSize: 70,
                                            onResize: setTimeline,
                                            className: "min-h-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$timeline$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timeline"], {}, void 0, false, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                withHandle: true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                lineNumber: 374,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                defaultSize: previewPanel,
                                minSize: 30,
                                onResize: setPreviewPanel,
                                className: "min-w-0 min-h-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$preview$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PreviewPanel"], {}, void 0, false, {
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
                    }, `vertical-preview-${activePreset}-${resetCounter}`, true, {
                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                        lineNumber: 310,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                        direction: "vertical",
                        className: "h-full w-full gap-[0.18rem]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                defaultSize: mainContent,
                                minSize: 30,
                                maxSize: 85,
                                onResize: setMainContent,
                                className: "min-h-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanelGroup"], {
                                    direction: "horizontal",
                                    className: "h-full w-full gap-[0.19rem] px-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                            defaultSize: toolsPanel,
                                            minSize: 15,
                                            maxSize: 40,
                                            onResize: setToolsPanel,
                                            className: "min-w-0 rounded-sm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$media$2d$panel$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MediaPanel"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                lineNumber: 411,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 404,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                            withHandle: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 414,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                            defaultSize: previewPanel,
                                            minSize: 30,
                                            onResize: setPreviewPanel,
                                            className: "min-w-0 min-h-0 flex-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$preview$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PreviewPanel"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                                lineNumber: 423,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                            withHandle: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                            lineNumber: 426,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                            defaultSize: propertiesPanel,
                                            minSize: 15,
                                            maxSize: 40,
                                            onResize: setPropertiesPanel,
                                            className: "min-w-0 rounded-sm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$properties$2d$panel$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PropertiesPanel"], {}, void 0, false, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizableHandle"], {
                                withHandle: true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                                lineNumber: 440,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$resizable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                defaultSize: timeline,
                                minSize: 15,
                                maxSize: 70,
                                onResize: setTimeline,
                                className: "min-h-0 px-3 pb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$timeline$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timeline"], {}, void 0, false, {
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
                    }, `default-${activePreset}-${resetCounter}`, true, {
                        fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                        lineNumber: 386,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/editor/[project_id]/page.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$editor$2f$onboarding$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Onboarding"], {}, void 0, false, {
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
}),

};

//# sourceMappingURL=apps_web_src_fbda3bf9._.js.map