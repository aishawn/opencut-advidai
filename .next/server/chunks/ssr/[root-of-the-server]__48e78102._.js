module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/apps/web/src/components/ui/sonner.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Toaster": ()=>Toaster
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$themes$40$0$2e$4$2e$6$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next-themes@0.4.6+6dbf9a050bc9aadb/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/sonner@1.7.4+6dbf9a050bc9aadb/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const Toaster = ({ ...props })=>{
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$2d$themes$40$0$2e$4$2e$6$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        position: "top-center",
        offset: 20,
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        expand: false,
        richColors: true,
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/sonner.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
;
}),
"[project]/apps/web/src/lib/storage/indexeddb-adapter.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "IndexedDBAdapter": ()=>IndexedDBAdapter
});
class IndexedDBAdapter {
    dbName;
    storeName;
    version;
    constructor(dbName, storeName, version = 1){
        this.dbName = dbName;
        this.storeName = storeName;
        this.version = version;
    }
    async getDB() {
        return new Promise((resolve, reject)=>{
            const request = indexedDB.open(this.dbName, this.version);
            request.onerror = ()=>reject(request.error);
            request.onsuccess = ()=>resolve(request.result);
            request.onupgradeneeded = (event)=>{
                const db = event.target.result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    db.createObjectStore(this.storeName, {
                        keyPath: "id"
                    });
                }
            };
        });
    }
    async get(key) {
        const db = await this.getDB();
        const transaction = db.transaction([
            this.storeName
        ], "readonly");
        const store = transaction.objectStore(this.storeName);
        return new Promise((resolve, reject)=>{
            const request = store.get(key);
            request.onerror = ()=>reject(request.error);
            request.onsuccess = ()=>resolve(request.result || null);
        });
    }
    async set(key, value) {
        const db = await this.getDB();
        const transaction = db.transaction([
            this.storeName
        ], "readwrite");
        const store = transaction.objectStore(this.storeName);
        return new Promise((resolve, reject)=>{
            const request = store.put({
                id: key,
                ...value
            });
            request.onerror = ()=>reject(request.error);
            request.onsuccess = ()=>resolve();
        });
    }
    async remove(key) {
        const db = await this.getDB();
        const transaction = db.transaction([
            this.storeName
        ], "readwrite");
        const store = transaction.objectStore(this.storeName);
        return new Promise((resolve, reject)=>{
            const request = store.delete(key);
            request.onerror = ()=>reject(request.error);
            request.onsuccess = ()=>resolve();
        });
    }
    async list() {
        const db = await this.getDB();
        const transaction = db.transaction([
            this.storeName
        ], "readonly");
        const store = transaction.objectStore(this.storeName);
        return new Promise((resolve, reject)=>{
            const request = store.getAllKeys();
            request.onerror = ()=>reject(request.error);
            request.onsuccess = ()=>resolve(request.result);
        });
    }
    async clear() {
        const db = await this.getDB();
        const transaction = db.transaction([
            this.storeName
        ], "readwrite");
        const store = transaction.objectStore(this.storeName);
        return new Promise((resolve, reject)=>{
            const request = store.clear();
            request.onerror = ()=>reject(request.error);
            request.onsuccess = ()=>resolve();
        });
    }
}
}),
"[project]/apps/web/src/lib/storage/opfs-adapter.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "OPFSAdapter": ()=>OPFSAdapter
});
class OPFSAdapter {
    directoryName;
    constructor(directoryName = "media"){
        this.directoryName = directoryName;
    }
    async getDirectory() {
        const opfsRoot = await navigator.storage.getDirectory();
        return await opfsRoot.getDirectoryHandle(this.directoryName, {
            create: true
        });
    }
    async get(key) {
        try {
            const directory = await this.getDirectory();
            const fileHandle = await directory.getFileHandle(key);
            return await fileHandle.getFile();
        } catch (error) {
            if (error.name === "NotFoundError") {
                return null;
            }
            throw error;
        }
    }
    async set(key, file) {
        const directory = await this.getDirectory();
        const fileHandle = await directory.getFileHandle(key, {
            create: true
        });
        const writable = await fileHandle.createWritable();
        await writable.write(file);
        await writable.close();
    }
    async remove(key) {
        try {
            const directory = await this.getDirectory();
            await directory.removeEntry(key);
        } catch (error) {
            if (error.name !== "NotFoundError") {
                throw error;
            }
        }
    }
    async list() {
        const directory = await this.getDirectory();
        const keys = [];
        for await (const name of directory.keys()){
            keys.push(name);
        }
        return keys;
    }
    async clear() {
        const directory = await this.getDirectory();
        for await (const name of directory.keys()){
            await directory.removeEntry(name);
        }
    }
    // Helper method to check OPFS support
    static isSupported() {
        return "storage" in navigator && "getDirectory" in navigator.storage;
    }
}
}),
"[project]/apps/web/src/lib/storage/storage-service.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "StorageService": ()=>StorageService,
    "storageService": ()=>storageService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$indexeddb$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/storage/indexeddb-adapter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$opfs$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/storage/opfs-adapter.ts [app-ssr] (ecmascript)");
;
;
class StorageService {
    projectsAdapter;
    savedSoundsAdapter;
    config;
    constructor(){
        this.config = {
            projectsDb: "video-editor-projects",
            mediaDb: "video-editor-media",
            timelineDb: "video-editor-timelines",
            savedSoundsDb: "video-editor-saved-sounds",
            version: 1
        };
        this.projectsAdapter = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$indexeddb$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IndexedDBAdapter"](this.config.projectsDb, "projects", this.config.version);
        this.savedSoundsAdapter = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$indexeddb$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IndexedDBAdapter"](this.config.savedSoundsDb, "saved-sounds", this.config.version);
    }
    // Helper to get project-specific media adapters
    getProjectMediaAdapters({ projectId }) {
        const mediaMetadataAdapter = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$indexeddb$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IndexedDBAdapter"](`${this.config.mediaDb}-${projectId}`, "media-metadata", this.config.version);
        const mediaFilesAdapter = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$opfs$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OPFSAdapter"](`media-files-${projectId}`);
        return {
            mediaMetadataAdapter,
            mediaFilesAdapter
        };
    }
    // Helper to get project-specific timeline adapter
    getProjectTimelineAdapter({ projectId, sceneId }) {
        const dbName = sceneId ? `${this.config.timelineDb}-${projectId}-${sceneId}` : `${this.config.timelineDb}-${projectId}`;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$indexeddb$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IndexedDBAdapter"](dbName, "timeline", this.config.version);
    }
    // Project operations
    async saveProject({ project }) {
        // Convert TProject to serializable format
        const serializedScenes = project.scenes.map((scene)=>({
                id: scene.id,
                name: scene.name,
                isMain: scene.isMain,
                createdAt: scene.createdAt.toISOString(),
                updatedAt: scene.updatedAt.toISOString()
            }));
        const serializedProject = {
            id: project.id,
            name: project.name,
            thumbnail: project.thumbnail,
            createdAt: project.createdAt.toISOString(),
            updatedAt: project.updatedAt.toISOString(),
            scenes: serializedScenes,
            currentSceneId: project.currentSceneId,
            backgroundColor: project.backgroundColor,
            backgroundType: project.backgroundType,
            blurIntensity: project.blurIntensity,
            bookmarks: project.bookmarks,
            fps: project.fps,
            canvasSize: project.canvasSize,
            canvasMode: project.canvasMode
        };
        await this.projectsAdapter.set(project.id, serializedProject);
    }
    async loadProject({ id }) {
        const serializedProject = await this.projectsAdapter.get(id);
        if (!serializedProject) return null;
        // Now convert serialized scenes back to Scene objects
        const scenes = serializedProject.scenes?.map((scene)=>({
                id: scene.id,
                name: scene.name,
                isMain: scene.isMain,
                createdAt: new Date(scene.createdAt),
                updatedAt: new Date(scene.updatedAt)
            })) || [];
        // Convert back to TProject format
        const project = {
            id: serializedProject.id,
            name: serializedProject.name,
            thumbnail: serializedProject.thumbnail,
            createdAt: new Date(serializedProject.createdAt),
            updatedAt: new Date(serializedProject.updatedAt),
            scenes,
            currentSceneId: serializedProject.currentSceneId || "",
            backgroundColor: serializedProject.backgroundColor,
            backgroundType: serializedProject.backgroundType,
            blurIntensity: serializedProject.blurIntensity,
            bookmarks: serializedProject.bookmarks,
            fps: serializedProject.fps,
            canvasSize: serializedProject.canvasSize,
            canvasMode: serializedProject.canvasMode
        };
        return project;
    }
    async loadAllProjects() {
        const projectIds = await this.projectsAdapter.list();
        const projects = [];
        for (const id of projectIds){
            const project = await this.loadProject({
                id
            });
            if (project) {
                projects.push(project);
            }
        }
        // Sort by last updated (most recent first)
        return projects.sort((a, b)=>b.updatedAt.getTime() - a.updatedAt.getTime());
    }
    async deleteProject({ id }) {
        await this.projectsAdapter.remove(id);
    }
    // Media operations
    async saveMediaFile({ projectId, mediaItem }) {
        const { mediaMetadataAdapter, mediaFilesAdapter } = this.getProjectMediaAdapters({
            projectId
        });
        // Save file to project-specific OPFS
        await mediaFilesAdapter.set(mediaItem.id, mediaItem.file);
        // Save metadata to project-specific IndexedDB
        const metadata = {
            id: mediaItem.id,
            name: mediaItem.name,
            type: mediaItem.type,
            size: mediaItem.file.size,
            lastModified: mediaItem.file.lastModified,
            width: mediaItem.width,
            height: mediaItem.height,
            duration: mediaItem.duration,
            ephemeral: mediaItem.ephemeral
        };
        await mediaMetadataAdapter.set(mediaItem.id, metadata);
    }
    async loadMediaFile({ projectId, id }) {
        const { mediaMetadataAdapter, mediaFilesAdapter } = this.getProjectMediaAdapters({
            projectId
        });
        const [file, metadata] = await Promise.all([
            mediaFilesAdapter.get(id),
            mediaMetadataAdapter.get(id)
        ]);
        if (!file || !metadata) return null;
        let url;
        if (metadata.type === "image" && (!file.type || file.type === "")) {
            try {
                const text = await file.text();
                if (text.trim().startsWith("<svg")) {
                    const svgBlob = new Blob([
                        text
                    ], {
                        type: "image/svg+xml"
                    });
                    url = URL.createObjectURL(svgBlob);
                } else {
                    url = URL.createObjectURL(file);
                }
            } catch  {
                url = URL.createObjectURL(file);
            }
        } else {
            url = URL.createObjectURL(file);
        }
        return {
            id: metadata.id,
            name: metadata.name,
            type: metadata.type,
            file,
            url,
            width: metadata.width,
            height: metadata.height,
            duration: metadata.duration,
            ephemeral: metadata.ephemeral
        };
    }
    async loadAllMediaFiles({ projectId }) {
        const { mediaMetadataAdapter } = this.getProjectMediaAdapters({
            projectId
        });
        const mediaIds = await mediaMetadataAdapter.list();
        const mediaItems = [];
        for (const id of mediaIds){
            const item = await this.loadMediaFile({
                projectId,
                id
            });
            if (item) {
                mediaItems.push(item);
            }
        }
        return mediaItems;
    }
    async deleteMediaFile({ projectId, id }) {
        const { mediaMetadataAdapter, mediaFilesAdapter } = this.getProjectMediaAdapters({
            projectId
        });
        await Promise.all([
            mediaFilesAdapter.remove(id),
            mediaMetadataAdapter.remove(id)
        ]);
    }
    async deleteProjectMedia({ projectId }) {
        const { mediaMetadataAdapter, mediaFilesAdapter } = this.getProjectMediaAdapters({
            projectId
        });
        await Promise.all([
            mediaMetadataAdapter.clear(),
            mediaFilesAdapter.clear()
        ]);
    }
    // Timeline operations - supports both legacy and scene-based storage
    async saveTimeline({ projectId, tracks, sceneId }) {
        const timelineAdapter = this.getProjectTimelineAdapter({
            projectId,
            sceneId
        });
        const timelineData = {
            tracks,
            lastModified: new Date().toISOString()
        };
        await timelineAdapter.set("timeline", timelineData);
    }
    async loadTimeline({ projectId, sceneId }) {
        const timelineAdapter = this.getProjectTimelineAdapter({
            projectId,
            sceneId
        });
        const timelineData = await timelineAdapter.get("timeline");
        return timelineData ? timelineData.tracks : null;
    }
    async deleteProjectTimeline({ projectId }) {
        const timelineAdapter = this.getProjectTimelineAdapter({
            projectId
        });
        await timelineAdapter.remove("timeline");
    }
    // Utility methods
    async clearAllData() {
        // Clear all projects
        await this.projectsAdapter.clear();
    // Note: Project-specific media and timelines will be cleaned up when projects are deleted
    }
    async getStorageInfo() {
        const projectIds = await this.projectsAdapter.list();
        return {
            projects: projectIds.length,
            isOPFSSupported: this.isOPFSSupported(),
            isIndexedDBSupported: this.isIndexedDBSupported()
        };
    }
    async getProjectStorageInfo({ projectId }) {
        const { mediaMetadataAdapter } = this.getProjectMediaAdapters({
            projectId
        });
        const timelineAdapter = this.getProjectTimelineAdapter({
            projectId
        });
        const [mediaIds, timelineData] = await Promise.all([
            mediaMetadataAdapter.list(),
            timelineAdapter.get("timeline")
        ]);
        return {
            mediaItems: mediaIds.length,
            hasTimeline: !!timelineData
        };
    }
    async loadSavedSounds() {
        try {
            const savedSoundsData = await this.savedSoundsAdapter.get("user-sounds");
            return savedSoundsData || {
                sounds: [],
                lastModified: new Date().toISOString()
            };
        } catch (error) {
            console.error("Failed to load saved sounds:", error);
            return {
                sounds: [],
                lastModified: new Date().toISOString()
            };
        }
    }
    async saveSoundEffect({ soundEffect }) {
        try {
            const currentData = await this.loadSavedSounds();
            // Check if sound is already saved
            if (currentData.sounds.some((sound)=>sound.id === soundEffect.id)) {
                return; // Already saved
            }
            const savedSound = {
                id: soundEffect.id,
                name: soundEffect.name,
                username: soundEffect.username,
                previewUrl: soundEffect.previewUrl,
                downloadUrl: soundEffect.downloadUrl,
                duration: soundEffect.duration,
                tags: soundEffect.tags,
                license: soundEffect.license,
                savedAt: new Date().toISOString()
            };
            const updatedData = {
                sounds: [
                    ...currentData.sounds,
                    savedSound
                ],
                lastModified: new Date().toISOString()
            };
            await this.savedSoundsAdapter.set("user-sounds", updatedData);
        } catch (error) {
            console.error("Failed to save sound effect:", error);
            throw error;
        }
    }
    async removeSavedSound({ soundId }) {
        try {
            const currentData = await this.loadSavedSounds();
            const updatedData = {
                sounds: currentData.sounds.filter((sound)=>sound.id !== soundId),
                lastModified: new Date().toISOString()
            };
            await this.savedSoundsAdapter.set("user-sounds", updatedData);
        } catch (error) {
            console.error("Failed to remove saved sound:", error);
            throw error;
        }
    }
    async isSoundSaved({ soundId }) {
        try {
            const currentData = await this.loadSavedSounds();
            return currentData.sounds.some((sound)=>sound.id === soundId);
        } catch (error) {
            console.error("Failed to check if sound is saved:", error);
            return false;
        }
    }
    async clearSavedSounds() {
        try {
            await this.savedSoundsAdapter.remove("user-sounds");
        } catch (error) {
            console.error("Failed to clear saved sounds:", error);
            throw error;
        }
    }
    // Check browser support
    isOPFSSupported() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$opfs$2d$adapter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OPFSAdapter"].isSupported();
    }
    isIndexedDBSupported() {
        return "indexedDB" in window;
    }
    isFullySupported() {
        return this.isIndexedDBSupported() && this.isOPFSSupported();
    }
}
const storageService = new StorageService();
;
}),
"[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Generic utilities
__turbopack_context__.s({
    "cn": ()=>cn,
    "generateUUID": ()=>generateUUID,
    "getPlatformAlternateKey": ()=>getPlatformAlternateKey,
    "getPlatformSpecialKey": ()=>getPlatformSpecialKey,
    "isAppleDevice": ()=>isAppleDevice,
    "isDOMElement": ()=>isDOMElement,
    "isTypableElement": ()=>isTypableElement,
    "uppercase": ()=>uppercase
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tailwind$2d$merge$40$2$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$tailwind$2d$merge$40$2$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function uppercase(str) {
    return str.toUpperCase();
}
function generateUUID() {
    // Use the native crypto.randomUUID if available
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
        return crypto.randomUUID();
    }
    // Secure fallback using crypto.getRandomValues
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    // Set version 4 (UUIDv4)
    bytes[6] = bytes[6] & 0x0f | 0x40;
    // Set variant 10xxxxxx
    bytes[8] = bytes[8] & 0x3f | 0x80;
    const hex = [
        ...bytes
    ].map((b)=>b.toString(16).padStart(2, "0"));
    return hex.slice(0, 4).join("") + "-" + hex.slice(4, 6).join("") + "-" + hex.slice(6, 8).join("") + "-" + hex.slice(8, 10).join("") + "-" + hex.slice(10, 16).join("");
}
function isDOMElement(el) {
    return !!el && (el instanceof Element || el instanceof HTMLElement);
}
function isTypableElement(el) {
    // If content editable, then it is editable
    if (el.isContentEditable) return true;
    // If element is an input and the input is enabled, then it is typable
    if (el.tagName === "INPUT") {
        return !el.disabled;
    }
    // If element is a textarea and the input is enabled, then it is typable
    if (el.tagName === "TEXTAREA") {
        return !el.disabled;
    }
    return false;
}
function isAppleDevice() {
    return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
}
function getPlatformSpecialKey() {
    return isAppleDevice() ? "⌘" : "Ctrl";
}
function getPlatformAlternateKey() {
    return isAppleDevice() ? "⌥" : "Alt";
}
}),
"[project]/apps/web/src/types/timeline.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "canElementGoOnTrack": ()=>canElementGoOnTrack,
    "ensureMainTrack": ()=>ensureMainTrack,
    "getMainTrack": ()=>getMainTrack,
    "sortTracksByOrder": ()=>sortTracksByOrder,
    "validateElementTrackCompatibility": ()=>validateElementTrackCompatibility
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
;
function sortTracksByOrder(tracks) {
    return [
        ...tracks
    ].sort((a, b)=>{
        // Text tracks always go to the top
        if (a.type === "text" && b.type !== "text") return -1;
        if (b.type === "text" && a.type !== "text") return 1;
        // Audio tracks always go to bottom
        if (a.type === "audio" && b.type !== "audio") return 1;
        if (b.type === "audio" && a.type !== "audio") return -1;
        // Main track goes above audio but below text tracks
        if (a.isMain && !b.isMain && b.type !== "audio" && b.type !== "text") return 1;
        if (b.isMain && !a.isMain && a.type !== "audio" && a.type !== "text") return -1;
        // Within same category, maintain creation order
        return 0;
    });
}
function getMainTrack(tracks) {
    return tracks.find((track)=>track.isMain) || null;
}
function ensureMainTrack(tracks) {
    const hasMainTrack = tracks.some((track)=>track.isMain);
    if (!hasMainTrack) {
        // Create main track if it doesn't exist
        const mainTrack = {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateUUID"])(),
            name: "Main Track",
            type: "media",
            elements: [],
            muted: false,
            isMain: true
        };
        return [
            mainTrack,
            ...tracks
        ];
    }
    return tracks;
}
function canElementGoOnTrack(elementType, trackType) {
    if (elementType === "text") {
        return trackType === "text";
    }
    if (elementType === "media") {
        return trackType === "media" || trackType === "audio";
    }
    return false;
}
function validateElementTrackCompatibility(element, track) {
    const isValid = canElementGoOnTrack(element.type, track.type);
    if (!isValid) {
        const errorMessage = element.type === "text" ? "Text elements can only be placed on text tracks" : "Media elements can only be placed on media or audio tracks";
        return {
            isValid: false,
            errorMessage
        };
    }
    return {
        isValid: true
    };
}
}),
"[project]/apps/web/src/lib/editor-utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "findBestCanvasPreset": ()=>findBestCanvasPreset
});
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
function findBestCanvasPreset(aspectRatio) {
    // Calculate aspect ratio for each preset and find the closest match
    let bestMatch = DEFAULT_CANVAS_PRESETS[0]; // Default to 16:9 HD
    let smallestDifference = Math.abs(aspectRatio - bestMatch.width / bestMatch.height);
    for (const preset of DEFAULT_CANVAS_PRESETS){
        const presetAspectRatio = preset.width / preset.height;
        const difference = Math.abs(aspectRatio - presetAspectRatio);
        if (difference < smallestDifference) {
            smallestDifference = difference;
            bestMatch = preset;
        }
    }
    // If the difference is still significant (> 0.1), create a custom size
    // based on the media aspect ratio with a reasonable resolution
    const bestAspectRatio = bestMatch.width / bestMatch.height;
    if (Math.abs(aspectRatio - bestAspectRatio) > 0.1) {
        // Create custom dimensions based on the aspect ratio
        if (aspectRatio > 1) {
            // Landscape - use 1920 width
            return {
                width: 1920,
                height: Math.round(1920 / aspectRatio)
            };
        }
        // Portrait or square - use 1080 height
        return {
            width: Math.round(1080 * aspectRatio),
            height: 1080
        };
    }
    return {
        width: bestMatch.width,
        height: bestMatch.height
    };
}
}),
"[project]/apps/web/src/stores/scene-store.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getMainScene": ()=>getMainScene,
    "useSceneStore": ()=>useSceneStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/storage/storage-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
function getMainScene({ scenes }) {
    return scenes.find((scene)=>scene.isMain) || null;
}
function ensureMainScene(scenes) {
    const hasMain = scenes.some((scene)=>scene.isMain);
    if (!hasMain) {
        const mainScene = {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateUUID"])(),
            name: "Main scene",
            isMain: true,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        return [
            mainScene,
            ...scenes
        ];
    }
    return scenes;
}
const useSceneStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        currentScene: null,
        scenes: [],
        createScene: async ({ name, isMain = false })=>{
            const { scenes } = get();
            const newScene = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateUUID"])(),
                name,
                isMain,
                isBackground: false,
                createdAt: new Date(),
                updatedAt: new Date()
            };
            const updatedScenes = [
                ...scenes,
                newScene
            ];
            const projectStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].getState();
            const { activeProject } = projectStore;
            if (!activeProject) {
                throw new Error("No active project");
            }
            const updatedProject = {
                ...activeProject,
                scenes: updatedScenes,
                updatedAt: new Date()
            };
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveProject({
                    project: updatedProject
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].setState({
                    activeProject: updatedProject
                });
                set({
                    scenes: updatedScenes
                });
                return newScene.id;
            } catch (error) {
                console.error("Failed to create scene:", error);
                throw error;
            }
        },
        deleteScene: async ({ sceneId })=>{
            const { scenes, currentScene } = get();
            const sceneToDelete = scenes.find((s)=>s.id === sceneId);
            if (!sceneToDelete) {
                throw new Error("Scene not found");
            }
            if (sceneToDelete.isMain) {
                throw new Error("Cannot delete main scene");
            }
            const updatedScenes = scenes.filter((s)=>s.id !== sceneId);
            // Determine new current scene if we're deleting the current one
            let newCurrentScene = currentScene;
            if (currentScene?.id === sceneId) {
                newCurrentScene = getMainScene({
                    scenes: updatedScenes
                });
            }
            // Update project
            const projectStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].getState();
            const { activeProject } = projectStore;
            if (!activeProject) {
                throw new Error("No active project");
            }
            const updatedProject = {
                ...activeProject,
                scenes: updatedScenes,
                updatedAt: new Date()
            };
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveProject({
                    project: updatedProject
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].setState({
                    activeProject: updatedProject
                });
                set({
                    scenes: updatedScenes,
                    currentScene: newCurrentScene
                });
                // If we switched scenes, load the new scene's timeline
                if (newCurrentScene && newCurrentScene.id !== currentScene?.id) {
                    const timelineStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"].getState();
                    await timelineStore.loadProjectTimeline({
                        projectId: activeProject.id,
                        sceneId: newCurrentScene.id
                    });
                }
            } catch (error) {
                console.error("Failed to delete scene:", error);
                throw error;
            }
        },
        renameScene: async ({ sceneId, name })=>{
            const { scenes } = get();
            const updatedScenes = scenes.map((scene)=>scene.id === sceneId ? {
                    ...scene,
                    name,
                    updatedAt: new Date()
                } : scene);
            // Update project
            const projectStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].getState();
            const { activeProject } = projectStore;
            if (!activeProject) {
                throw new Error("No active project");
            }
            const updatedProject = {
                ...activeProject,
                scenes: updatedScenes,
                updatedAt: new Date()
            };
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveProject({
                    project: updatedProject
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].setState({
                    activeProject: updatedProject
                });
                set({
                    scenes: updatedScenes,
                    currentScene: updatedScenes.find((s)=>s.id === sceneId) || null
                });
            } catch (error) {
                console.error("Failed to rename scene:", error);
                throw error;
            }
        },
        switchToScene: async ({ sceneId })=>{
            const { scenes } = get();
            const targetScene = scenes.find((s)=>s.id === sceneId);
            if (!targetScene) {
                throw new Error("Scene not found");
            }
            const timelineStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"].getState();
            const projectStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].getState();
            const { activeProject } = projectStore;
            const { currentScene } = get();
            if (activeProject && currentScene) {
                await timelineStore.saveProjectTimeline({
                    projectId: activeProject.id,
                    sceneId: currentScene.id
                });
            }
            if (activeProject) {
                await timelineStore.loadProjectTimeline({
                    projectId: activeProject.id,
                    sceneId
                });
                const updatedProject = {
                    ...activeProject,
                    currentSceneId: sceneId,
                    updatedAt: new Date()
                };
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveProject({
                    project: updatedProject
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].setState({
                    activeProject: updatedProject
                });
            }
            set({
                currentScene: targetScene
            });
        },
        getMainScene: ()=>{
            const { scenes } = get();
            return scenes.find((scene)=>scene.isMain) || null;
        },
        getCurrentScene: ()=>{
            return get().currentScene;
        },
        loadProjectScenes: async ({ projectId })=>{
            try {
                const project = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].loadProject({
                    id: projectId
                });
                if (project?.scenes) {
                    const ensuredScenes = project.scenes.map((scene)=>({
                            ...scene,
                            isMain: scene.isMain || false
                        }));
                    const currentScene = ensuredScenes.find((s)=>s.id === project.currentSceneId) || ensuredScenes[0];
                    set({
                        scenes: ensuredScenes,
                        currentScene
                    });
                }
            } catch (error) {
                console.error("Failed to load project scenes:", error);
                set({
                    scenes: [],
                    currentScene: null
                });
            }
        },
        initializeScenes: ({ scenes, currentSceneId })=>{
            const ensuredScenes = ensureMainScene(scenes);
            const currentScene = currentSceneId ? ensuredScenes.find((s)=>s.id === currentSceneId) : null;
            const fallbackScene = getMainScene({
                scenes: ensuredScenes
            });
            set({
                scenes: ensuredScenes,
                currentScene: currentScene || fallbackScene
            });
            if (ensuredScenes.length > scenes.length) {
                const projectStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].getState();
                const { activeProject } = projectStore;
                if (activeProject) {
                    const updatedProject = {
                        ...activeProject,
                        scenes: ensuredScenes,
                        updatedAt: new Date()
                    };
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveProject({
                        project: updatedProject
                    }).then(()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].setState({
                            activeProject: updatedProject
                        });
                    }).catch((error)=>{
                        console.error("Failed to save project with background scene:", error);
                    });
                }
            }
        },
        clearScenes: ()=>{
            set({
                scenes: [],
                currentScene: null
            });
        }
    }));
}),
"[project]/apps/web/src/constants/timeline-constants.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "FPS_PRESETS": ()=>FPS_PRESETS,
    "TIMELINE_CONSTANTS": ()=>TIMELINE_CONSTANTS,
    "TRACK_COLORS": ()=>TRACK_COLORS,
    "TRACK_HEIGHTS": ()=>TRACK_HEIGHTS,
    "frameToTime": ()=>frameToTime,
    "getCumulativeHeightBefore": ()=>getCumulativeHeightBefore,
    "getFrameDuration": ()=>getFrameDuration,
    "getTotalTracksHeight": ()=>getTotalTracksHeight,
    "getTrackColors": ()=>getTrackColors,
    "getTrackElementClasses": ()=>getTrackElementClasses,
    "getTrackHeight": ()=>getTrackHeight,
    "snapTimeToFrame": ()=>snapTimeToFrame,
    "timeToFrame": ()=>timeToFrame
});
const TRACK_COLORS = {
    media: {
        solid: "bg-blue-500",
        background: "",
        border: ""
    },
    text: {
        solid: "bg-[#5DBAA0]",
        background: "bg-[#5DBAA0]",
        border: ""
    },
    audio: {
        solid: "bg-green-500",
        background: "bg-[#915DBE]",
        border: ""
    }
};
function getTrackColors(type) {
    return TRACK_COLORS[type];
}
function getTrackElementClasses(type) {
    const colors = getTrackColors(type);
    return `${colors.background} ${colors.border}`;
}
const TRACK_HEIGHTS = {
    media: 60,
    text: 25,
    audio: 50
};
function getTrackHeight(type) {
    return TRACK_HEIGHTS[type];
}
function getCumulativeHeightBefore(tracks, trackIndex) {
    const GAP = 4; // 4px gap between tracks (equivalent to Tailwind's gap-1)
    return tracks.slice(0, trackIndex).reduce((sum, track)=>sum + getTrackHeight(track.type) + GAP, 0);
}
function getTotalTracksHeight(tracks) {
    const GAP = 4; // 4px gap between tracks (equivalent to Tailwind's gap-1)
    const tracksHeight = tracks.reduce((sum, track)=>sum + getTrackHeight(track.type), 0);
    const gapsHeight = Math.max(0, tracks.length - 1) * GAP; // n-1 gaps for n tracks
    return tracksHeight + gapsHeight;
}
const TIMELINE_CONSTANTS = {
    ELEMENT_MIN_WIDTH: 80,
    PIXELS_PER_SECOND: 50,
    TRACK_HEIGHT: 60,
    DEFAULT_TEXT_DURATION: 5,
    DEFAULT_IMAGE_DURATION: 5,
    ZOOM_LEVELS: [
        0.25,
        0.5,
        1,
        1.5,
        2,
        3,
        4
    ]
};
const FPS_PRESETS = [
    {
        value: "24",
        label: "24 fps"
    },
    {
        value: "25",
        label: "25 fps"
    },
    {
        value: "30",
        label: "30 fps"
    },
    {
        value: "60",
        label: "60 fps"
    },
    {
        value: "120",
        label: "120 fps"
    }
];
function timeToFrame(time, fps) {
    return Math.round(time * fps);
}
function frameToTime(frame, fps) {
    return frame / fps;
}
function snapTimeToFrame(time, fps) {
    if (fps <= 0) return time; // Fallback for invalid FPS
    const frame = timeToFrame(time, fps);
    return frameToTime(frame, fps);
}
function getFrameDuration(fps) {
    return 1 / fps;
}
}),
"[project]/apps/web/src/lib/timeline.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "checkElementOverlaps": ()=>checkElementOverlaps,
    "resolveElementOverlaps": ()=>resolveElementOverlaps
});
const checkElementOverlaps = (elements)=>{
    // Sort elements by start time
    const sortedElements = [
        ...elements
    ].sort((a, b)=>a.startTime - b.startTime);
    for(let i = 0; i < sortedElements.length - 1; i++){
        const current = sortedElements[i];
        const next = sortedElements[i + 1];
        const currentEnd = current.startTime + (current.duration - current.trimStart - current.trimEnd);
        // Check if current element overlaps with next element
        if (currentEnd > next.startTime) return true; // Overlap detected
    }
    return false; // No overlaps
};
const resolveElementOverlaps = (elements)=>{
    // Sort elements by start time
    const sortedElements = [
        ...elements
    ].sort((a, b)=>a.startTime - b.startTime);
    const resolvedElements = [];
    for(let i = 0; i < sortedElements.length; i++){
        const current = {
            ...sortedElements[i]
        };
        if (resolvedElements.length > 0) {
            const previous = resolvedElements[resolvedElements.length - 1];
            const previousEnd = previous.startTime + (previous.duration - previous.trimStart - previous.trimEnd);
            // If current element would overlap with previous, push it after previous ends
            if (current.startTime < previousEnd) {
                current.startTime = previousEnd;
            }
        }
        resolvedElements.push(current);
    }
    return resolvedElements;
};
}),
"[project]/apps/web/src/constants/text-constants.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "DEFAULT_TEXT_ELEMENT": ()=>DEFAULT_TEXT_ELEMENT
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/timeline-constants.ts [app-ssr] (ecmascript)");
;
const DEFAULT_TEXT_ELEMENT = {
    type: "text",
    name: "Text",
    content: "Default Text",
    fontSize: 48,
    fontFamily: "Arial",
    color: "#ffffff",
    backgroundColor: "transparent",
    textAlign: "center",
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
    x: 0,
    y: 0,
    rotation: 0,
    opacity: 1,
    duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIMELINE_CONSTANTS"].DEFAULT_TEXT_DURATION,
    startTime: 0,
    trimStart: 0,
    trimEnd: 0
};
}),
"[project]/apps/web/src/stores/playback-store.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "usePlaybackStore": ()=>usePlaybackStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-ssr] (ecmascript)");
;
;
;
let playbackTimer = null;
const startTimer = (store)=>{
    if (playbackTimer) cancelAnimationFrame(playbackTimer);
    // Use requestAnimationFrame for smoother updates
    const updateTime = ()=>{
        const state = store();
        if (state.isPlaying && state.currentTime < state.duration) {
            const now = performance.now();
            const delta = (now - lastUpdate) / 1000; // Convert to seconds
            lastUpdate = now;
            const newTime = state.currentTime + delta * state.speed;
            // Get actual content duration from timeline store
            const actualContentDuration = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"].getState().getTotalDuration();
            // Stop at actual content end, not timeline duration (which has 10s minimum)
            // It was either this or reducing default min timeline to 1 second
            const effectiveDuration = actualContentDuration > 0 ? actualContentDuration : state.duration;
            if (newTime >= effectiveDuration) {
                // When content completes, pause just before the end so we can see the last frame
                const projectFps = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].getState().activeProject?.fps;
                if (!projectFps) console.error("Project FPS is not set, assuming " + __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_FPS"] + "fps");
                const frameOffset = 1 / (projectFps ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_FPS"]); // Stop 1 frame before end based on project FPS
                const stopTime = Math.max(0, effectiveDuration - frameOffset);
                state.pause();
                state.setCurrentTime(stopTime);
                // Notify video elements to sync with end position
                window.dispatchEvent(new CustomEvent("playback-seek", {
                    detail: {
                        time: stopTime
                    }
                }));
            } else {
                state.setCurrentTime(newTime);
                // Notify video elements to sync
                window.dispatchEvent(new CustomEvent("playback-update", {
                    detail: {
                        time: newTime
                    }
                }));
            }
        }
        playbackTimer = requestAnimationFrame(updateTime);
    };
    let lastUpdate = performance.now();
    playbackTimer = requestAnimationFrame(updateTime);
};
const stopTimer = ()=>{
    if (playbackTimer) {
        cancelAnimationFrame(playbackTimer);
        playbackTimer = null;
    }
};
const usePlaybackStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        isPlaying: false,
        currentTime: 0,
        duration: 0,
        volume: 1,
        muted: false,
        previousVolume: 1,
        speed: 1.0,
        play: ()=>{
            const state = get();
            const actualContentDuration = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"].getState().getTotalDuration();
            const effectiveDuration = actualContentDuration > 0 ? actualContentDuration : state.duration;
            if (effectiveDuration > 0) {
                const fps = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].getState().activeProject?.fps ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_FPS"];
                const frameOffset = 1 / fps;
                const endThreshold = Math.max(0, effectiveDuration - frameOffset);
                if (state.currentTime >= endThreshold) {
                    get().seek(0);
                }
            }
            set({
                isPlaying: true
            });
            startTimer(get);
        },
        pause: ()=>{
            set({
                isPlaying: false
            });
            stopTimer();
        },
        toggle: ()=>{
            const { isPlaying } = get();
            if (isPlaying) {
                get().pause();
            } else {
                get().play();
            }
        },
        seek: (time)=>{
            const { duration } = get();
            const clampedTime = Math.max(0, Math.min(duration, time));
            set({
                currentTime: clampedTime
            });
            const event = new CustomEvent("playback-seek", {
                detail: {
                    time: clampedTime
                }
            });
            window.dispatchEvent(event);
        },
        setVolume: (volume)=>set((state)=>({
                    volume: Math.max(0, Math.min(1, volume)),
                    muted: volume === 0,
                    previousVolume: volume > 0 ? volume : state.previousVolume
                })),
        setSpeed: (speed)=>{
            const newSpeed = Math.max(0.1, Math.min(2.0, speed));
            set({
                speed: newSpeed
            });
            const event = new CustomEvent("playback-speed", {
                detail: {
                    speed: newSpeed
                }
            });
            window.dispatchEvent(event);
        },
        setDuration: (duration)=>set({
                duration
            }),
        setCurrentTime: (time)=>set({
                currentTime: time
            }),
        mute: ()=>{
            const { volume, previousVolume } = get();
            set({
                muted: true,
                previousVolume: volume > 0 ? volume : previousVolume,
                volume: 0
            });
        },
        unmute: ()=>{
            const { previousVolume } = get();
            set({
                muted: false,
                volume: previousVolume ?? 1
            });
        },
        toggleMute: ()=>{
            const { muted } = get();
            if (muted) {
                get().unmute();
            } else {
                get().mute();
            }
        }
    }));
}),
"[project]/apps/web/src/components/editor/media-panel/store.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "tabs": ()=>tabs,
    "useMediaPanelStore": ()=>useMediaPanelStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$captions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CaptionsIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.468.0+f4eacebf2041cd4f/node_modules/lucide-react/dist/esm/icons/captions.js [app-ssr] (ecmascript) <export default as CaptionsIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.468.0+f4eacebf2041cd4f/node_modules/lucide-react/dist/esm/icons/arrow-left-right.js [app-ssr] (ecmascript) <export default as ArrowLeftRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.468.0+f4eacebf2041cd4f/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as SparklesIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StickerIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.468.0+f4eacebf2041cd4f/node_modules/lucide-react/dist/esm/icons/sticker.js [app-ssr] (ecmascript) <export default as StickerIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MusicIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.468.0+f4eacebf2041cd4f/node_modules/lucide-react/dist/esm/icons/music.js [app-ssr] (ecmascript) <export default as MusicIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.468.0+f4eacebf2041cd4f/node_modules/lucide-react/dist/esm/icons/video.js [app-ssr] (ecmascript) <export default as VideoIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$blend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BlendIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.468.0+f4eacebf2041cd4f/node_modules/lucide-react/dist/esm/icons/blend.js [app-ssr] (ecmascript) <export default as BlendIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontalIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.468.0+f4eacebf2041cd4f/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-ssr] (ecmascript) <export default as SlidersHorizontalIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TypeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.468.0+f4eacebf2041cd4f/node_modules/lucide-react/dist/esm/icons/type.js [app-ssr] (ecmascript) <export default as TypeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingsIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.468.0+f4eacebf2041cd4f/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as SettingsIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
;
const tabs = {
    media: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoIcon$3e$__["VideoIcon"],
        label: "Media"
    },
    sounds: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MusicIcon$3e$__["MusicIcon"],
        label: "Sounds"
    },
    text: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TypeIcon$3e$__["TypeIcon"],
        label: "Text"
    },
    stickers: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sticker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__StickerIcon$3e$__["StickerIcon"],
        label: "Stickers"
    },
    effects: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"],
        label: "Effects"
    },
    transitions: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRightIcon$3e$__["ArrowLeftRightIcon"],
        label: "Transitions"
    },
    captions: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$captions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CaptionsIcon$3e$__["CaptionsIcon"],
        label: "Captions"
    },
    filters: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$blend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BlendIcon$3e$__["BlendIcon"],
        label: "Filters"
    },
    adjustment: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontalIcon$3e$__["SlidersHorizontalIcon"],
        label: "Adjustment"
    },
    settings: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingsIcon$3e$__["SettingsIcon"],
        label: "Settings"
    }
};
const useMediaPanelStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        activeTab: "media",
        setActiveTab: (tab)=>set({
                activeTab: tab
            }),
        highlightMediaId: null,
        requestRevealMedia: (mediaId)=>set({
                activeTab: "media",
                highlightMediaId: mediaId
            }),
        clearHighlight: ()=>set({
                highlightMediaId: null
            })
    }));
}),
"[project]/apps/web/src/stores/timeline-store.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useTimelineStore": ()=>useTimelineStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/types/timeline.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/media-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$editor$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/editor-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/storage/storage-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$scene$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/scene-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/timeline-constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/timeline.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$text$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/text-constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/playback-store.ts [app-ssr] (ecmascript)");
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
// Helper function to manage element naming with suffixes
const getElementNameWithSuffix = (originalName, suffix)=>{
    // Remove existing suffixes to prevent accumulation
    const baseName = originalName.replace(/ \(left\)$/i, "").replace(/ \(right\)$/i, "").replace(/ \(audio\)$/i, "").replace(/ \(split \d+\)$/i, "");
    return `${baseName} (${suffix})`;
};
const useTimelineStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>{
    // Helper to update tracks and maintain ordering
    const updateTracks = (newTracks)=>{
        const tracksWithMain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureMainTrack"])(newTracks);
        const sortedTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortTracksByOrder"])(tracksWithMain);
        set({
            _tracks: tracksWithMain,
            tracks: sortedTracks
        });
    };
    // Helper to auto-save timeline changes
    const autoSaveTimeline = async ()=>{
        const activeProject = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].getState().activeProject;
        const currentScene = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$scene$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneStore"].getState().currentScene;
        if (activeProject && currentScene) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveTimeline({
                    projectId: activeProject.id,
                    tracks: get()._tracks,
                    sceneId: currentScene.id
                });
            } catch (error) {
                console.error("Failed to auto-save timeline:", error);
            }
        } else {
            console.warn("Auto-save skipped - missing activeProject or currentScene:", {
                hasProject: !!activeProject,
                hasScene: !!currentScene,
                sceneName: currentScene?.name
            });
        }
    };
    // Helper to update tracks and auto-save
    const updateTracksAndSave = (newTracks)=>{
        updateTracks(newTracks);
        // Auto-save in background
        setTimeout(autoSaveTimeline, 100);
    };
    // Initialize with proper track ordering
    const initialTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureMainTrack"])([]);
    const sortedInitialTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortTracksByOrder"])(initialTracks);
    return {
        _tracks: initialTracks,
        tracks: sortedInitialTracks,
        history: [],
        redoStack: [],
        selectedElements: [],
        rippleEditingEnabled: false,
        clipboard: null,
        // Snapping settings defaults
        snappingEnabled: true,
        getSortedTracks: ()=>{
            const { _tracks } = get();
            const tracksWithMain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureMainTrack"])(_tracks);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortTracksByOrder"])(tracksWithMain);
        },
        pushHistory: ()=>{
            const { _tracks, history } = get();
            set({
                history: [
                    ...history,
                    JSON.parse(JSON.stringify(_tracks))
                ],
                redoStack: []
            });
        },
        undo: ()=>{
            const { history, redoStack, _tracks } = get();
            if (history.length === 0) return;
            const prev = history[history.length - 1];
            updateTracksAndSave(prev);
            set({
                history: history.slice(0, -1),
                redoStack: [
                    ...redoStack,
                    JSON.parse(JSON.stringify(_tracks))
                ]
            });
        },
        selectElement: (trackId, elementId, multi = false)=>{
            set((state)=>{
                const exists = state.selectedElements.some((c)=>c.trackId === trackId && c.elementId === elementId);
                if (multi) {
                    return exists ? {
                        selectedElements: state.selectedElements.filter((c)=>!(c.trackId === trackId && c.elementId === elementId))
                    } : {
                        selectedElements: [
                            ...state.selectedElements,
                            {
                                trackId,
                                elementId
                            }
                        ]
                    };
                }
                return {
                    selectedElements: [
                        {
                            trackId,
                            elementId
                        }
                    ]
                };
            });
        },
        deselectElement: (trackId, elementId)=>{
            set((state)=>({
                    selectedElements: state.selectedElements.filter((c)=>!(c.trackId === trackId && c.elementId === elementId))
                }));
        },
        clearSelectedElements: ()=>{
            set({
                selectedElements: []
            });
        },
        setSelectedElements: (elements)=>set({
                selectedElements: elements
            }),
        addTrack: (type)=>{
            get().pushHistory();
            const trackName = type === "media" ? "Media Track" : type === "text" ? "Text Track" : type === "audio" ? "Audio Track" : "Track";
            const newTrack = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateUUID"])(),
                name: trackName,
                type,
                elements: [],
                muted: false
            };
            updateTracksAndSave([
                ...get()._tracks,
                newTrack
            ]);
            return newTrack.id;
        },
        insertTrackAt: (type, index)=>{
            get().pushHistory();
            const trackName = type === "media" ? "Media Track" : type === "text" ? "Text Track" : type === "audio" ? "Audio Track" : "Track";
            const newTrack = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateUUID"])(),
                name: trackName,
                type,
                elements: [],
                muted: false
            };
            const newTracks = [
                ...get()._tracks
            ];
            newTracks.splice(index, 0, newTrack);
            updateTracksAndSave(newTracks);
            return newTrack.id;
        },
        removeTrack: (trackId)=>{
            const { rippleEditingEnabled } = get();
            if (rippleEditingEnabled) {
                get().removeTrackWithRipple(trackId);
            } else {
                get().pushHistory();
                updateTracksAndSave(get()._tracks.filter((track)=>track.id !== trackId));
            }
        },
        removeTrackWithRipple: (trackId)=>{
            const { _tracks } = get();
            const trackToRemove = _tracks.find((t)=>t.id === trackId);
            if (!trackToRemove) return;
            get().pushHistory();
            const occupiedRanges = trackToRemove.elements.map((element)=>({
                    startTime: element.startTime,
                    endTime: element.startTime + (element.duration - element.trimStart - element.trimEnd)
                }));
            occupiedRanges.sort((a, b)=>a.startTime - b.startTime);
            const mergedRanges = [];
            for (const range of occupiedRanges){
                if (mergedRanges.length === 0) {
                    mergedRanges.push({
                        startTime: range.startTime,
                        endTime: range.endTime,
                        duration: range.endTime - range.startTime
                    });
                } else {
                    const lastRange = mergedRanges[mergedRanges.length - 1];
                    if (range.startTime <= lastRange.endTime) {
                        lastRange.endTime = Math.max(lastRange.endTime, range.endTime);
                        lastRange.duration = lastRange.endTime - lastRange.startTime;
                    } else {
                        mergedRanges.push({
                            startTime: range.startTime,
                            endTime: range.endTime,
                            duration: range.endTime - range.startTime
                        });
                    }
                }
            }
            const updatedTracks = _tracks.filter((track)=>track.id !== trackId).map((track)=>{
                const updatedElements = track.elements.map((element)=>{
                    let newStartTime = element.startTime;
                    for(let i = mergedRanges.length - 1; i >= 0; i--){
                        const gap = mergedRanges[i];
                        if (newStartTime >= gap.endTime) {
                            newStartTime -= gap.duration;
                        }
                    }
                    return {
                        ...element,
                        startTime: Math.max(0, newStartTime)
                    };
                });
                const hasOverlaps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkElementOverlaps"])(updatedElements);
                if (hasOverlaps) {
                    const resolvedElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveElementOverlaps"])(updatedElements);
                    return {
                        ...track,
                        elements: resolvedElements
                    };
                }
                return {
                    ...track,
                    elements: updatedElements
                };
            });
            updateTracksAndSave(updatedTracks);
        },
        addElementToTrack: (trackId, elementData)=>{
            get().pushHistory();
            const track = get()._tracks.find((t)=>t.id === trackId);
            if (!track) {
                console.error("Track not found:", trackId);
                return;
            }
            const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateElementTrackCompatibility"])(elementData, track);
            if (!validation.isValid) {
                console.error(validation.errorMessage);
                return;
            }
            if (elementData.type === "media" && !elementData.mediaId) {
                console.error("Media element must have mediaId");
                return;
            }
            if (elementData.type === "text" && !elementData.content) {
                console.error("Text element must have content");
                return;
            }
            const currentState = get();
            const totalElementsInTimeline = currentState._tracks.reduce((total, track)=>total + track.elements.length, 0);
            const isFirstElement = totalElementsInTimeline === 0;
            const newElement = {
                ...elementData,
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateUUID"])(),
                startTime: elementData.startTime,
                trimStart: elementData.trimStart ?? 0,
                trimEnd: elementData.trimEnd ?? 0,
                ...elementData.type === "media" ? {
                    muted: elementData.muted ?? false
                } : {}
            };
            if (isFirstElement && newElement.type === "media") {
                const mediaStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaStore"].getState();
                const mediaItem = mediaStore.mediaFiles.find((item)=>item.id === newElement.mediaId);
                if (mediaItem && (mediaItem.type === "image" || mediaItem.type === "video")) {
                    const projectStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].getState();
                    projectStore.updateCanvasSize((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$editor$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findBestCanvasPreset"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMediaAspectRatio"])(mediaItem)), "original");
                }
                if (mediaItem && mediaItem.type === "video" && mediaItem.fps) {
                    const projectStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].getState();
                    if (projectStore.activeProject) {
                        projectStore.updateProjectFps(mediaItem.fps);
                    }
                }
            }
            updateTracksAndSave(get()._tracks.map((track)=>track.id === trackId ? {
                    ...track,
                    elements: [
                        ...track.elements,
                        newElement
                    ]
                } : track));
            get().selectElement(trackId, newElement.id);
        },
        removeElementFromTrackWithRipple: (trackId, elementId, pushHistory = true)=>{
            const { _tracks, rippleEditingEnabled } = get();
            if (!rippleEditingEnabled) {
                // Inline non-ripple removal logic
                if (pushHistory) get().pushHistory();
                updateTracksAndSave(_tracks.map((track)=>track.id === trackId ? {
                        ...track,
                        elements: track.elements.filter((element)=>element.id !== elementId)
                    } : track).filter((track)=>track.elements.length > 0));
                return;
            }
            const track = _tracks.find((t)=>t.id === trackId);
            const element = track?.elements.find((e)=>e.id === elementId);
            if (!element || !track) return;
            if (pushHistory) get().pushHistory();
            const elementStartTime = element.startTime;
            const elementDuration = element.duration - element.trimStart - element.trimEnd;
            const elementEndTime = elementStartTime + elementDuration;
            const updatedTracks = _tracks.map((currentTrack)=>{
                const shouldApplyRipple = currentTrack.id === trackId;
                const updatedElements = currentTrack.elements.filter((currentElement)=>{
                    if (currentElement.id === elementId && currentTrack.id === trackId) {
                        return false;
                    }
                    return true;
                }).map((currentElement)=>{
                    if (!shouldApplyRipple) {
                        return currentElement;
                    }
                    if (currentElement.startTime >= elementEndTime) {
                        return {
                            ...currentElement,
                            startTime: Math.max(0, currentElement.startTime - elementDuration)
                        };
                    }
                    return currentElement;
                });
                const hasOverlaps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkElementOverlaps"])(updatedElements);
                if (hasOverlaps) {
                    const resolvedElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveElementOverlaps"])(updatedElements);
                    return {
                        ...currentTrack,
                        elements: resolvedElements
                    };
                }
                return {
                    ...currentTrack,
                    elements: updatedElements
                };
            }).filter((track)=>track.elements.length > 0 || track.isMain);
            updateTracksAndSave(updatedTracks);
        },
        moveElementToTrack: (fromTrackId, toTrackId, elementId)=>{
            get().pushHistory();
            const fromTrack = get()._tracks.find((track)=>track.id === fromTrackId);
            const toTrack = get()._tracks.find((track)=>track.id === toTrackId);
            const elementToMove = fromTrack?.elements.find((element)=>element.id === elementId);
            if (!elementToMove || !toTrack) return;
            const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateElementTrackCompatibility"])(elementToMove, toTrack);
            if (!validation.isValid) {
                console.error(validation.errorMessage);
                return;
            }
            const newTracks = get()._tracks.map((track)=>{
                if (track.id === fromTrackId) {
                    return {
                        ...track,
                        elements: track.elements.filter((element)=>element.id !== elementId)
                    };
                }
                if (track.id === toTrackId) {
                    return {
                        ...track,
                        elements: [
                            ...track.elements,
                            elementToMove
                        ]
                    };
                }
                return track;
            }).filter((track)=>track.elements.length > 0);
            updateTracksAndSave(newTracks);
        },
        updateElementTrim: (trackId, elementId, trimStart, trimEnd, pushHistory = true)=>{
            if (pushHistory) get().pushHistory();
            updateTracksAndSave(get()._tracks.map((track)=>track.id === trackId ? {
                    ...track,
                    elements: track.elements.map((element)=>element.id === elementId ? {
                            ...element,
                            trimStart,
                            trimEnd
                        } : element)
                } : track));
        },
        updateElementDuration: (trackId, elementId, duration, pushHistory = true)=>{
            if (pushHistory) get().pushHistory();
            updateTracksAndSave(get()._tracks.map((track)=>track.id === trackId ? {
                    ...track,
                    elements: track.elements.map((element)=>element.id === elementId ? {
                            ...element,
                            duration
                        } : element)
                } : track));
        },
        updateElementStartTime: (trackId, elementId, startTime, pushHistory = true)=>{
            if (pushHistory) get().pushHistory();
            const clampedStartTime = Math.max(0, startTime);
            updateTracksAndSave(get()._tracks.map((track)=>track.id === trackId ? {
                    ...track,
                    elements: track.elements.map((element)=>element.id === elementId ? {
                            ...element,
                            startTime: clampedStartTime
                        } : element)
                } : track));
        },
        updateElementStartTimeWithRipple: (trackId, elementId, newStartTime)=>{
            const { _tracks, rippleEditingEnabled } = get();
            if (!rippleEditingEnabled) {
                get().updateElementStartTime(trackId, elementId, newStartTime);
                return;
            }
            const track = _tracks.find((t)=>t.id === trackId);
            const element = track?.elements.find((e)=>e.id === elementId);
            if (!element || !track) return;
            get().pushHistory();
            const oldStartTime = element.startTime;
            const oldEndTime = element.startTime + (element.duration - element.trimStart - element.trimEnd);
            const newEndTime = newStartTime + (element.duration - element.trimStart - element.trimEnd);
            const timeDelta = newStartTime - oldStartTime;
            const updatedTracks = _tracks.map((currentTrack)=>{
                const shouldApplyRipple = currentTrack.id === trackId;
                const updatedElements = currentTrack.elements.map((currentElement)=>{
                    if (currentElement.id === elementId && currentTrack.id === trackId) {
                        return {
                            ...currentElement,
                            startTime: Math.max(0, newStartTime)
                        };
                    }
                    if (!shouldApplyRipple) {
                        return currentElement;
                    }
                    const currentElementStart = currentElement.startTime;
                    const currentElementEnd = currentElement.startTime + (currentElement.duration - currentElement.trimStart - currentElement.trimEnd);
                    if (timeDelta > 0) {
                        if (currentElementStart >= oldEndTime) {
                            return {
                                ...currentElement,
                                startTime: currentElementStart + timeDelta
                            };
                        }
                    } else if (timeDelta < 0) {
                        if (currentElementStart >= newEndTime && currentElementStart >= oldStartTime) {
                            return {
                                ...currentElement,
                                startTime: Math.max(0, currentElementStart + timeDelta)
                            };
                        }
                    }
                    return currentElement;
                });
                const hasOverlaps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkElementOverlaps"])(updatedElements);
                if (hasOverlaps) {
                    const resolvedElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveElementOverlaps"])(updatedElements);
                    return {
                        ...currentTrack,
                        elements: resolvedElements
                    };
                }
                return {
                    ...currentTrack,
                    elements: updatedElements
                };
            });
            updateTracksAndSave(updatedTracks);
        },
        toggleTrackMute: (trackId)=>{
            get().pushHistory();
            updateTracksAndSave(get()._tracks.map((track)=>track.id === trackId ? {
                    ...track,
                    muted: !track.muted
                } : track));
        },
        updateTextElement: (trackId, elementId, updates)=>{
            get().pushHistory();
            updateTracksAndSave(get()._tracks.map((track)=>track.id === trackId ? {
                    ...track,
                    elements: track.elements.map((element)=>element.id === elementId && element.type === "text" ? {
                            ...element,
                            ...updates
                        } : element)
                } : track));
        },
        // Split element and keep only the left portion
        splitAndKeepLeft: (trackId, elementId, splitTime)=>{
            const { _tracks } = get();
            const track = _tracks.find((t)=>t.id === trackId);
            const element = track?.elements.find((c)=>c.id === elementId);
            if (!element) return;
            const effectiveStart = element.startTime;
            const effectiveEnd = element.startTime + (element.duration - element.trimStart - element.trimEnd);
            if (splitTime <= effectiveStart || splitTime >= effectiveEnd) return;
            get().pushHistory();
            const relativeTime = splitTime - element.startTime;
            const durationToRemove = element.duration - element.trimStart - element.trimEnd - relativeTime;
            updateTracksAndSave(get()._tracks.map((track)=>track.id === trackId ? {
                    ...track,
                    elements: track.elements.map((c)=>c.id === elementId ? {
                            ...c,
                            trimEnd: c.trimEnd + durationToRemove,
                            name: getElementNameWithSuffix(c.name, "left")
                        } : c)
                } : track));
        },
        // Split element and keep only the right portion
        splitAndKeepRight: (trackId, elementId, splitTime)=>{
            const { _tracks } = get();
            const track = _tracks.find((t)=>t.id === trackId);
            const element = track?.elements.find((c)=>c.id === elementId);
            if (!element) return;
            const effectiveStart = element.startTime;
            const effectiveEnd = element.startTime + (element.duration - element.trimStart - element.trimEnd);
            if (splitTime <= effectiveStart || splitTime >= effectiveEnd) return;
            get().pushHistory();
            const relativeTime = splitTime - element.startTime;
            updateTracksAndSave(get()._tracks.map((track)=>track.id === trackId ? {
                    ...track,
                    elements: track.elements.map((c)=>c.id === elementId ? {
                            ...c,
                            startTime: splitTime,
                            trimStart: c.trimStart + relativeTime,
                            name: getElementNameWithSuffix(c.name, "right")
                        } : c)
                } : track));
        },
        // Extract audio from video element to an audio track
        separateAudio: (trackId, elementId)=>{
            const { _tracks } = get();
            const track = _tracks.find((t)=>t.id === trackId);
            const element = track?.elements.find((c)=>c.id === elementId);
            if (!element || track?.type !== "media") return null;
            get().pushHistory();
            const existingAudioTrack = _tracks.find((t)=>t.type === "audio");
            const audioElementId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateUUID"])();
            if (existingAudioTrack) {
                updateTracksAndSave(get()._tracks.map((track)=>track.id === existingAudioTrack.id ? {
                        ...track,
                        elements: [
                            ...track.elements,
                            {
                                ...element,
                                id: audioElementId,
                                name: getElementNameWithSuffix(element.name, "audio")
                            }
                        ]
                    } : track));
            } else {
                const newAudioTrack = {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateUUID"])(),
                    name: "Audio Track",
                    type: "audio",
                    elements: [
                        {
                            ...element,
                            id: audioElementId,
                            name: getElementNameWithSuffix(element.name, "audio")
                        }
                    ],
                    muted: false
                };
                updateTracksAndSave([
                    ...get()._tracks,
                    newAudioTrack
                ]);
            }
            return audioElementId;
        },
        // Replace media for an element
        replaceElementMedia: async (trackId, elementId, newFile)=>{
            const { _tracks } = get();
            const track = _tracks.find((t)=>t.id === trackId);
            const element = track?.elements.find((c)=>c.id === elementId);
            if (!element) {
                return {
                    success: false,
                    error: "Timeline element not found"
                };
            }
            if (element.type !== "media") {
                return {
                    success: false,
                    error: "Replace is only available for media clips"
                };
            }
            try {
                const mediaStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaStore"].getState();
                const projectStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"].getState();
                if (!projectStore.activeProject) {
                    return {
                        success: false,
                        error: "No active project found"
                    };
                }
                const { getFileType, getImageDimensions, generateVideoThumbnail, getMediaDuration } = await __turbopack_context__.r("[project]/apps/web/src/stores/media-store.ts [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i);
                const fileType = getFileType(newFile);
                if (!fileType) {
                    return {
                        success: false,
                        error: "Unsupported file type. Please select a video, audio, or image file."
                    };
                }
                const mediaData = {
                    name: newFile.name,
                    type: fileType,
                    file: newFile,
                    url: URL.createObjectURL(newFile)
                };
                try {
                    if (fileType === "image") {
                        const { width, height } = await getImageDimensions(newFile);
                        mediaData.width = width;
                        mediaData.height = height;
                    } else if (fileType === "video") {
                        const [duration, { thumbnailUrl, width, height }] = await Promise.all([
                            getMediaDuration(newFile),
                            generateVideoThumbnail(newFile)
                        ]);
                        mediaData.duration = duration;
                        mediaData.thumbnailUrl = thumbnailUrl;
                        mediaData.width = width;
                        mediaData.height = height;
                    } else if (fileType === "audio") {
                        mediaData.duration = await getMediaDuration(newFile);
                    }
                } catch (error) {
                    return {
                        success: false,
                        error: `Failed to process ${fileType} file: ${error instanceof Error ? error.message : "Unknown error"}`
                    };
                }
                try {
                    await mediaStore.addMediaFile(projectStore.activeProject.id, mediaData);
                } catch (error) {
                    return {
                        success: false,
                        error: `Failed to add media to project: ${error instanceof Error ? error.message : "Unknown error"}`
                    };
                }
                const newMediaItem = mediaStore.mediaFiles.find((item)=>item.file === newFile);
                if (!newMediaItem) {
                    return {
                        success: false,
                        error: "Failed to create media item in project. Please try again."
                    };
                }
                get().pushHistory();
                updateTracksAndSave(_tracks.map((track)=>track.id === trackId ? {
                        ...track,
                        elements: track.elements.map((c)=>c.id === elementId ? {
                                ...c,
                                mediaId: newMediaItem.id,
                                name: newMediaItem.name,
                                duration: newMediaItem.duration || c.duration
                            } : c)
                    } : track));
                return {
                    success: true
                };
            } catch (error) {
                console.error("Failed to replace element media:", error);
                return {
                    success: false,
                    error: `Unexpected error: ${error instanceof Error ? error.message : "Unknown error"}`
                };
            }
        },
        getTotalDuration: ()=>{
            const { _tracks } = get();
            if (_tracks.length === 0) return 0;
            const trackEndTimes = _tracks.map((track)=>track.elements.reduce((maxEnd, element)=>{
                    const elementEnd = element.startTime + element.duration - element.trimStart - element.trimEnd;
                    return Math.max(maxEnd, elementEnd);
                }, 0));
            return Math.max(...trackEndTimes, 0);
        },
        getProjectThumbnail: async (projectId)=>{
            try {
                const project = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].loadProject({
                    id: projectId
                });
                if (!project) return null;
                // For scene-based projects, use main scene timeline
                // For legacy projects, use legacy timeline format
                let sceneId;
                if (project.scenes && project.scenes.length > 0) {
                    const mainScene = project.scenes.find((s)=>s.isMain);
                    sceneId = mainScene?.id;
                }
                const tracks = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].loadTimeline({
                    projectId,
                    sceneId
                });
                const mediaItems = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].loadAllMediaFiles({
                    projectId
                });
                if (!tracks || !mediaItems.length) return null;
                const firstMediaElement = tracks.flatMap((track)=>track.elements).filter((element)=>element.type === "media").sort((a, b)=>a.startTime - b.startTime)[0];
                if (!firstMediaElement) return null;
                const mediaFile = mediaItems.find((item)=>item.id === firstMediaElement.mediaId);
                if (!mediaFile) return null;
                if (mediaFile.type === "video" && mediaFile.file) {
                    const { generateVideoThumbnail } = await __turbopack_context__.r("[project]/apps/web/src/stores/media-store.ts [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i);
                    const { thumbnailUrl } = await generateVideoThumbnail(mediaFile.file);
                    return thumbnailUrl;
                }
                if (mediaFile.type === "image" && mediaFile.url) {
                    return mediaFile.url;
                }
                return null;
            } catch (error) {
                console.error("Failed to get project thumbnail:", error);
                return null;
            }
        },
        redo: ()=>{
            const { redoStack } = get();
            if (redoStack.length === 0) return;
            const next = redoStack[redoStack.length - 1];
            updateTracksAndSave(next);
            set({
                redoStack: redoStack.slice(0, -1)
            });
        },
        dragState: {
            isDragging: false,
            elementId: null,
            trackId: null,
            startMouseX: 0,
            startElementTime: 0,
            clickOffsetTime: 0,
            currentTime: 0
        },
        setDragState: (dragState)=>set((state)=>({
                    dragState: {
                        ...state.dragState,
                        ...dragState
                    }
                })),
        startDrag: (elementId, trackId, startMouseX, startElementTime, clickOffsetTime)=>{
            set({
                dragState: {
                    isDragging: true,
                    elementId,
                    trackId,
                    startMouseX,
                    startElementTime,
                    clickOffsetTime,
                    currentTime: startElementTime
                }
            });
        },
        updateDragTime: (currentTime)=>{
            set((state)=>({
                    dragState: {
                        ...state.dragState,
                        currentTime
                    }
                }));
        },
        endDrag: ()=>{
            set({
                dragState: {
                    isDragging: false,
                    elementId: null,
                    trackId: null,
                    startMouseX: 0,
                    startElementTime: 0,
                    clickOffsetTime: 0,
                    currentTime: 0
                }
            });
        },
        loadProjectTimeline: async ({ projectId, sceneId })=>{
            try {
                const tracks = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].loadTimeline({
                    projectId,
                    sceneId
                });
                if (tracks) {
                    updateTracks(tracks);
                } else {
                    const defaultTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureMainTrack"])([]);
                    updateTracks(defaultTracks);
                }
                set({
                    history: [],
                    redoStack: []
                });
            } catch (error) {
                console.error("Failed to load timeline:", error);
                const defaultTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureMainTrack"])([]);
                updateTracks(defaultTracks);
                set({
                    history: [],
                    redoStack: []
                });
            }
        },
        saveProjectTimeline: async ({ projectId, sceneId })=>{
            const { _tracks } = get();
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveTimeline({
                    projectId,
                    tracks: _tracks,
                    sceneId
                });
            } catch (error) {
                console.error("Failed to save timeline:", error);
            }
        },
        clearTimeline: ()=>{
            const defaultTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureMainTrack"])([]);
            updateTracks(defaultTracks);
            set({
                history: [],
                redoStack: [],
                selectedElements: [],
                clipboard: null
            });
        },
        // Snapping actions
        toggleSnapping: ()=>{
            set((state)=>({
                    snappingEnabled: !state.snappingEnabled
                }));
        },
        // Ripple editing functions
        toggleRippleEditing: ()=>{
            set((state)=>({
                    rippleEditingEnabled: !state.rippleEditingEnabled
                }));
        },
        checkElementOverlap: (trackId, startTime, duration, excludeElementId)=>{
            const track = get()._tracks.find((t)=>t.id === trackId);
            if (!track) return false;
            const overlap = track.elements.some((element)=>{
                const elementEnd = element.startTime + element.duration - element.trimStart - element.trimEnd;
                if (element.id === excludeElementId) {
                    return false;
                }
                return startTime >= element.startTime && startTime < elementEnd || startTime + duration > element.startTime && startTime + duration <= elementEnd || startTime < element.startTime && startTime + duration > elementEnd;
            });
            return overlap;
        },
        findOrCreateTrack: (trackType)=>{
            if (trackType === "text") {
                return get().insertTrackAt(trackType, 0);
            }
            const existingTrack = get()._tracks.find((t)=>t.type === trackType);
            if (existingTrack) {
                return existingTrack.id;
            }
            return get().addTrack(trackType);
        },
        addElementAtTime: (item, currentTime = 0)=>{
            if (item.type === "text") {
                const targetTrackId = get().insertTrackAt("text", 0);
                get().addElementToTrack(targetTrackId, buildTextElement(item, currentTime));
                return true;
            }
            const media = item;
            const trackType = media.type === "audio" ? "audio" : "media";
            const targetTrackId = get().insertTrackAt(trackType, 0);
            get().addElementToTrack(targetTrackId, {
                type: "media",
                mediaId: media.id,
                name: media.name,
                duration: media.duration || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIMELINE_CONSTANTS"].DEFAULT_IMAGE_DURATION,
                startTime: currentTime,
                trimStart: 0,
                trimEnd: 0,
                muted: false
            });
            return true;
        },
        addElementToNewTrack: (item)=>{
            if (item.type === "text") {
                const targetTrackId = get().insertTrackAt("text", 0);
                get().addElementToTrack(targetTrackId, buildTextElement(item, 0));
                return true;
            }
            const media = item;
            const trackType = media.type === "audio" ? "audio" : "media";
            const targetTrackId = get().insertTrackAt(trackType, 0);
            get().addElementToTrack(targetTrackId, {
                type: "media",
                mediaId: media.id,
                name: media.name,
                duration: media.duration || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIMELINE_CONSTANTS"].DEFAULT_IMAGE_DURATION,
                startTime: 0,
                trimStart: 0,
                trimEnd: 0,
                muted: false
            });
            return true;
        },
        copySelected: ()=>{
            const { selectedElements, _tracks } = get();
            if (selectedElements.length === 0) return;
            const items = [];
            for (const { trackId, elementId } of selectedElements){
                const track = _tracks.find((t)=>t.id === trackId);
                const element = track?.elements.find((e)=>e.id === elementId);
                if (!track || !element) continue;
                // Prepare a creation-friendly copy without id
                const { id: _id, ...rest } = element;
                items.push({
                    trackType: track.type,
                    element: rest
                });
            }
            set({
                clipboard: {
                    items
                }
            });
        },
        pasteAtTime: (time)=>{
            const { clipboard } = get();
            if (!clipboard || clipboard.items.length === 0) return;
            // Determine reference start time offset based on earliest element in clipboard
            const minStart = Math.min(...clipboard.items.map((x)=>x.element.startTime));
            get().pushHistory();
            for (const item of clipboard.items){
                const targetTrackId = get().findOrCreateTrack(item.trackType);
                const relativeOffset = item.element.startTime - minStart;
                const startTime = Math.max(0, time + relativeOffset);
                // Ensure no overlap on target track
                const duration = item.element.duration - item.element.trimStart - item.element.trimEnd;
                const hasOverlap = get().checkElementOverlap(targetTrackId, startTime, duration);
                if (hasOverlap) {
                    // If overlap, nudge forward slightly until free (simple resolve)
                    let candidate = startTime;
                    let safety = 0;
                    while(get().checkElementOverlap(targetTrackId, candidate, duration) && safety < 1000){
                        candidate += 0.01;
                        safety += 1;
                    }
                    get().addElementToTrack(targetTrackId, {
                        ...item.element,
                        startTime: candidate
                    });
                } else {
                    get().addElementToTrack(targetTrackId, {
                        ...item.element,
                        startTime
                    });
                }
            }
        },
        deleteSelected: (trackId, elementId)=>{
            const { selectedElements, rippleEditingEnabled } = get();
            const elementsToDelete = trackId && elementId ? [
                {
                    trackId,
                    elementId
                }
            ] : selectedElements.length > 0 ? selectedElements : [];
            if (elementsToDelete.length === 0) return;
            get().pushHistory();
            if (rippleEditingEnabled) {
                for (const { trackId: tId, elementId: eId } of elementsToDelete){
                    get().removeElementFromTrackWithRipple(tId, eId, false);
                }
            } else {
                updateTracksAndSave(get()._tracks.map((track)=>({
                        ...track,
                        elements: track.elements.filter((element)=>!elementsToDelete.some(({ trackId: tId, elementId: eId })=>track.id === tId && element.id === eId))
                    })).filter((track)=>track.elements.length > 0));
            }
            get().clearSelectedElements();
        },
        splitSelected: (splitTime, trackId, elementId)=>{
            const { selectedElements, _tracks } = get();
            const elementsToProcess = trackId && elementId ? [
                {
                    trackId,
                    elementId
                }
            ] : selectedElements.length > 0 ? selectedElements : [];
            if (elementsToProcess.length === 0) return;
            const elementsToSplit = [];
            for (const { trackId: tId, elementId: eId } of elementsToProcess){
                const track = _tracks.find((t)=>t.id === tId);
                const element = track?.elements.find((e)=>e.id === eId);
                if (!track || !element) continue;
                const effectiveStart = element.startTime;
                const effectiveEnd = element.startTime + (element.duration - element.trimStart - element.trimEnd);
                if (splitTime > effectiveStart && splitTime < effectiveEnd) {
                    elementsToSplit.push({
                        trackId: tId,
                        elementId: eId,
                        element
                    });
                }
            }
            if (elementsToSplit.length === 0) {
                const { toast } = __turbopack_context__.r("[project]/node_modules/.bun/sonner@1.7.4+6dbf9a050bc9aadb/node_modules/sonner/dist/index.js [app-ssr] (ecmascript)");
                const isMultiple = elementsToProcess.length > 1;
                toast.error(isMultiple ? "Playhead must be within all selected elements to split" : "Playhead must be within element to split");
                return;
            }
            get().pushHistory();
            updateTracksAndSave(get()._tracks.map((track)=>{
                const elementsToSplitInTrack = elementsToSplit.filter(({ trackId: tId })=>tId === track.id);
                if (elementsToSplitInTrack.length === 0) return track;
                return {
                    ...track,
                    elements: track.elements.flatMap((c)=>{
                        const elementToSplit = elementsToSplitInTrack.find(({ elementId: eId })=>eId === c.id);
                        if (!elementToSplit) return [
                            c
                        ];
                        const relativeTime = splitTime - elementToSplit.element.startTime;
                        const firstDuration = relativeTime;
                        const secondDuration = elementToSplit.element.duration - elementToSplit.element.trimStart - elementToSplit.element.trimEnd - relativeTime;
                        const secondElementId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateUUID"])();
                        return [
                            {
                                ...c,
                                trimEnd: c.trimEnd + secondDuration,
                                name: getElementNameWithSuffix(c.name, "left")
                            },
                            {
                                ...c,
                                id: secondElementId,
                                startTime: splitTime,
                                trimStart: c.trimStart + firstDuration,
                                name: getElementNameWithSuffix(c.name, "right")
                            }
                        ];
                    })
                };
            }));
        },
        toggleSelectedHidden: (trackId, elementId)=>{
            const { selectedElements, _tracks } = get();
            const elementsToProcess = trackId && elementId ? [
                {
                    trackId,
                    elementId
                }
            ] : selectedElements.length > 0 ? selectedElements : [];
            if (elementsToProcess.length === 0) return;
            get().pushHistory();
            const shouldHide = elementsToProcess.some(({ trackId: tId, elementId: eId })=>{
                const track = _tracks.find((t)=>t.id === tId);
                const element = track?.elements.find((e)=>e.id === eId);
                return element && !element.hidden;
            });
            updateTracksAndSave(_tracks.map((track)=>({
                    ...track,
                    elements: track.elements.map((element)=>{
                        const shouldUpdate = elementsToProcess.some(({ trackId: tId, elementId: eId })=>track.id === tId && element.id === eId);
                        return shouldUpdate && element.hidden !== shouldHide ? {
                            ...element,
                            hidden: shouldHide
                        } : element;
                    })
                })));
        },
        toggleSelectedMuted: (trackId, elementId)=>{
            const { selectedElements, _tracks } = get();
            const elementsToProcess = trackId && elementId ? [
                {
                    trackId,
                    elementId
                }
            ] : selectedElements.length > 0 ? selectedElements : [];
            if (elementsToProcess.length === 0) return;
            get().pushHistory();
            const audioElements = elementsToProcess.filter(({ trackId: tId, elementId: eId })=>{
                const track = _tracks.find((t)=>t.id === tId);
                const element = track?.elements.find((e)=>e.id === eId);
                return element?.type === "media";
            });
            if (audioElements.length === 0) return;
            const shouldMute = audioElements.some(({ trackId: tId, elementId: eId })=>{
                const track = _tracks.find((t)=>t.id === tId);
                const element = track?.elements.find((e)=>e.id === eId);
                return element?.type === "media" && !element.muted;
            });
            updateTracksAndSave(_tracks.map((track)=>({
                    ...track,
                    elements: track.elements.map((element)=>{
                        const shouldUpdate = audioElements.some(({ trackId: tId, elementId: eId })=>track.id === tId && element.id === eId);
                        return shouldUpdate && element.type === "media" && element.muted !== shouldMute ? {
                            ...element,
                            muted: shouldMute
                        } : element;
                    })
                })));
        },
        duplicateElement: (trackId, elementId)=>{
            const { _tracks } = get();
            const track = _tracks.find((t)=>t.id === trackId);
            const element = track?.elements.find((e)=>e.id === elementId);
            if (!track || !element) return;
            const { id, ...elementWithoutId } = element;
            const effectiveDuration = element.duration - element.trimStart - element.trimEnd;
            get().addElementToTrack(trackId, {
                ...elementWithoutId,
                name: `${element.name} (copy)`,
                startTime: element.startTime + effectiveDuration + 0.1
            });
        },
        revealElementInMedia: (elementId)=>{
            const { useMediaPanelStore } = __turbopack_context__.r("[project]/apps/web/src/components/editor/media-panel/store.ts [app-ssr] (ecmascript)");
            const { requestRevealMedia } = useMediaPanelStore.getState();
            const { _tracks } = get();
            const element = _tracks.flatMap((track)=>track.elements).find((el)=>el.id === elementId);
            if (element?.type === "media") {
                requestRevealMedia(element.mediaId);
            }
        },
        replaceElementWithFile: async (trackId, elementId, file)=>{
            try {
                const result = await get().replaceElementMedia(trackId, elementId, file);
                if (result.success) {
                    const { toast } = await __turbopack_context__.r("[project]/node_modules/.bun/sonner@1.7.4+6dbf9a050bc9aadb/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i);
                    toast.success("Clip replaced successfully");
                } else {
                    const { toast } = await __turbopack_context__.r("[project]/node_modules/.bun/sonner@1.7.4+6dbf9a050bc9aadb/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i);
                    toast.error(result.error || "Failed to replace clip");
                }
            } catch (error) {
                console.error("Unexpected error replacing clip:", error);
                const { toast } = await __turbopack_context__.r("[project]/node_modules/.bun/sonner@1.7.4+6dbf9a050bc9aadb/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i);
                toast.error(`Unexpected error: ${error instanceof Error ? error.message : "Unknown error"}`);
            }
        },
        getContextMenuState: (trackId, elementId)=>{
            const { selectedElements, _tracks } = get();
            const { currentTime } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$playback$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlaybackStore"].getState();
            const { mediaFiles } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaStore"].getState();
            const isMultipleSelected = selectedElements.length > 1;
            const isCurrentElementSelected = selectedElements.some((sel)=>sel.trackId === trackId && sel.elementId === elementId);
            const hasAudioElements = selectedElements.some(({ trackId: tId, elementId: eId })=>{
                const selectedTrack = _tracks.find((t)=>t.id === tId);
                const selectedElement = selectedTrack?.elements.find((e)=>e.id === eId);
                if (selectedElement?.type !== "media") return false;
                const mediaElement = selectedElement;
                const mediaItem = mediaFiles.find((file)=>file.id === mediaElement.mediaId);
                return mediaItem?.type === "audio" || mediaItem?.type === "video";
            });
            const canSplitSelected = selectedElements.every(({ trackId: tId, elementId: eId })=>{
                const selectedTrack = _tracks.find((t)=>t.id === tId);
                const selectedElement = selectedTrack?.elements.find((e)=>e.id === eId);
                if (!selectedElement) return false;
                const effectiveStart = selectedElement.startTime;
                const effectiveEnd = selectedElement.startTime + (selectedElement.duration - selectedElement.trimStart - selectedElement.trimEnd);
                return currentTime > effectiveStart && currentTime < effectiveEnd;
            });
            return {
                isMultipleSelected,
                isCurrentElementSelected,
                hasAudioElements,
                canSplitSelected,
                currentTime
            };
        }
    };
});
function buildTextElement(raw, startTime) {
    const t = raw;
    return {
        type: "text",
        name: t.name ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$text$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TEXT_ELEMENT"].name,
        content: t.content ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$text$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TEXT_ELEMENT"].content,
        duration: t.duration ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$timeline$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIMELINE_CONSTANTS"].DEFAULT_TEXT_DURATION,
        startTime,
        trimStart: 0,
        trimEnd: 0,
        fontSize: typeof t.fontSize === "number" ? t.fontSize : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$text$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TEXT_ELEMENT"].fontSize,
        fontFamily: t.fontFamily ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$text$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TEXT_ELEMENT"].fontFamily,
        color: t.color ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$text$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TEXT_ELEMENT"].color,
        backgroundColor: t.backgroundColor ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$text$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TEXT_ELEMENT"].backgroundColor,
        textAlign: t.textAlign ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$text$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TEXT_ELEMENT"].textAlign,
        fontWeight: t.fontWeight ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$text$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TEXT_ELEMENT"].fontWeight,
        fontStyle: t.fontStyle ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$text$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TEXT_ELEMENT"].fontStyle,
        textDecoration: t.textDecoration ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$text$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TEXT_ELEMENT"].textDecoration,
        x: typeof t.x === "number" ? t.x : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$text$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TEXT_ELEMENT"].x,
        y: typeof t.y === "number" ? t.y : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$text$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TEXT_ELEMENT"].y,
        rotation: typeof t.rotation === "number" ? t.rotation : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$text$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TEXT_ELEMENT"].rotation,
        opacity: typeof t.opacity === "number" ? t.opacity : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$text$2d$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_TEXT_ELEMENT"].opacity
    };
}
}),
"[project]/apps/web/src/lib/video-cache.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "VideoCache": ()=>VideoCache,
    "videoCache": ()=>videoCache
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/input-format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$source$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/source.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$media$2d$sink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/mediabunny@1.9.3/node_modules/mediabunny/dist/modules/src/media-sink.js [app-ssr] (ecmascript)");
;
class VideoCache {
    sinks = new Map();
    initPromises = new Map();
    async getFrameAt(mediaId, file, time) {
        await this.ensureSink(mediaId, file);
        const sinkData = this.sinks.get(mediaId);
        if (!sinkData) return null;
        if (sinkData.currentFrame && this.isFrameValid(sinkData.currentFrame, time)) {
            return sinkData.currentFrame;
        }
        if (sinkData.iterator && sinkData.currentFrame && time >= sinkData.lastTime && time < sinkData.lastTime + 2.0) {
            const frame = await this.iterateToTime(sinkData, time);
            if (frame) return frame;
        }
        return await this.seekToTime(sinkData, time);
    }
    isFrameValid(frame, time) {
        return time >= frame.timestamp && time < frame.timestamp + frame.duration;
    }
    async iterateToTime(sinkData, targetTime) {
        if (!sinkData.iterator) return null;
        try {
            while(true){
                const { value: frame, done } = await sinkData.iterator.next();
                if (done || !frame) break;
                sinkData.currentFrame = frame;
                sinkData.lastTime = frame.timestamp;
                if (this.isFrameValid(frame, targetTime)) {
                    return frame;
                }
                if (frame.timestamp > targetTime + 1.0) break;
            }
        } catch (error) {
            console.warn("Iterator failed, will restart:", error);
            sinkData.iterator = null;
        }
        return null;
    }
    async seekToTime(sinkData, time) {
        try {
            if (sinkData.iterator) {
                await sinkData.iterator.return();
                sinkData.iterator = null;
            }
            sinkData.iterator = sinkData.sink.canvases(time);
            sinkData.lastTime = time;
            const { value: frame } = await sinkData.iterator.next();
            if (frame) {
                sinkData.currentFrame = frame;
                return frame;
            }
        } catch (error) {
            console.warn("Failed to seek video:", error);
        }
        return null;
    }
    async ensureSink(mediaId, file) {
        if (this.sinks.has(mediaId)) return;
        if (this.initPromises.has(mediaId)) {
            await this.initPromises.get(mediaId);
            return;
        }
        const initPromise = this.initializeSink(mediaId, file);
        this.initPromises.set(mediaId, initPromise);
        try {
            await initPromise;
        } finally{
            this.initPromises.delete(mediaId);
        }
    }
    async initializeSink(mediaId, file) {
        try {
            const input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"]({
                source: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$source$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BlobSource"](file),
                formats: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$input$2d$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_FORMATS"]
            });
            const videoTrack = await input.getPrimaryVideoTrack();
            if (!videoTrack) {
                throw new Error("No video track found");
            }
            const canDecode = await videoTrack.canDecode();
            if (!canDecode) {
                throw new Error("Video codec not supported for decoding");
            }
            const sink = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$mediabunny$40$1$2e$9$2e$3$2f$node_modules$2f$mediabunny$2f$dist$2f$modules$2f$src$2f$media$2d$sink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasSink"](videoTrack, {
                poolSize: 3,
                fit: "contain"
            });
            this.sinks.set(mediaId, {
                sink,
                iterator: null,
                currentFrame: null,
                lastTime: -1
            });
        } catch (error) {
            console.error(`Failed to initialize video sink for ${mediaId}:`, error);
            throw error;
        }
    }
    clearVideo(mediaId) {
        const sinkData = this.sinks.get(mediaId);
        if (sinkData) {
            if (sinkData.iterator) {
                sinkData.iterator.return();
            }
            this.sinks.delete(mediaId);
        }
        this.initPromises.delete(mediaId);
    }
    clearAll() {
        for (const [mediaId] of this.sinks){
            this.clearVideo(mediaId);
        }
    }
    getStats() {
        return {
            totalSinks: this.sinks.size,
            activeSinks: Array.from(this.sinks.values()).filter((s)=>s.iterator).length,
            cachedFrames: Array.from(this.sinks.values()).filter((s)=>s.currentFrame).length
        };
    }
}
const videoCache = new VideoCache();
}),
"[project]/apps/web/src/stores/media-store.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "generateVideoThumbnail": ()=>generateVideoThumbnail,
    "getFileType": ()=>getFileType,
    "getImageDimensions": ()=>getImageDimensions,
    "getMediaAspectRatio": ()=>getMediaAspectRatio,
    "getMediaDuration": ()=>getMediaDuration,
    "useMediaStore": ()=>useMediaStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/storage/storage-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$video$2d$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/video-cache.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const getFileType = (file)=>{
    const { type } = file;
    if (type.startsWith("image/")) {
        return "image";
    }
    if (type.startsWith("video/")) {
        return "video";
    }
    if (type.startsWith("audio/")) {
        return "audio";
    }
    return null;
};
const getImageDimensions = (file)=>{
    return new Promise((resolve, reject)=>{
        const img = new window.Image();
        img.addEventListener("load", ()=>{
            const width = img.naturalWidth;
            const height = img.naturalHeight;
            resolve({
                width,
                height
            });
            img.remove();
        });
        img.addEventListener("error", ()=>{
            reject(new Error("Could not load image"));
            img.remove();
        });
        img.src = URL.createObjectURL(file);
    });
};
const generateVideoThumbnail = (file)=>{
    return new Promise((resolve, reject)=>{
        const video = document.createElement("video");
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            reject(new Error("Could not get canvas context"));
            return;
        }
        video.addEventListener("loadedmetadata", ()=>{
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            // Seek to 1 second or 10% of duration, whichever is smaller
            video.currentTime = Math.min(1, video.duration * 0.1);
        });
        video.addEventListener("seeked", ()=>{
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const thumbnailUrl = canvas.toDataURL("image/jpeg", 0.8);
            const width = video.videoWidth;
            const height = video.videoHeight;
            resolve({
                thumbnailUrl,
                width,
                height
            });
            // Cleanup
            video.remove();
            canvas.remove();
        });
        video.addEventListener("error", ()=>{
            reject(new Error("Could not load video"));
            video.remove();
            canvas.remove();
        });
        video.src = URL.createObjectURL(file);
        video.load();
    });
};
const getMediaDuration = (file)=>{
    return new Promise((resolve, reject)=>{
        const element = document.createElement(file.type.startsWith("video/") ? "video" : "audio");
        element.addEventListener("loadedmetadata", ()=>{
            resolve(element.duration);
            element.remove();
        });
        element.addEventListener("error", ()=>{
            reject(new Error("Could not load media"));
            element.remove();
        });
        element.src = URL.createObjectURL(file);
        element.load();
    });
};
const getMediaAspectRatio = (item)=>{
    if (item.width && item.height) {
        return item.width / item.height;
    }
    return 16 / 9; // Default aspect ratio
};
const useMediaStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        mediaFiles: [],
        isLoading: false,
        addMediaFile: async (projectId, file)=>{
            const newItem = {
                ...file,
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateUUID"])()
            };
            // Add to local state immediately for UI responsiveness
            set((state)=>({
                    mediaFiles: [
                        ...state.mediaFiles,
                        newItem
                    ]
                }));
            // Save to persistent storage in background
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveMediaFile({
                    projectId,
                    mediaItem: newItem
                });
            } catch (error) {
                console.error("Failed to save media item:", error);
                // Remove from local state if save failed
                set((state)=>({
                        mediaFiles: state.mediaFiles.filter((media)=>media.id !== newItem.id)
                    }));
            }
        },
        removeMediaFile: async (projectId, id)=>{
            const state = get();
            const item = state.mediaFiles.find((media)=>media.id === id);
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$video$2d$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["videoCache"].clearVideo(id);
            // Cleanup object URLs to prevent memory leaks
            if (item?.url) {
                URL.revokeObjectURL(item.url);
                if (item.thumbnailUrl) {
                    URL.revokeObjectURL(item.thumbnailUrl);
                }
            }
            // 1) Remove from local state immediately
            set((state)=>({
                    mediaFiles: state.mediaFiles.filter((media)=>media.id !== id)
                }));
            // 2) Cascade into the timeline: remove any elements using this media ID
            const timeline = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"].getState();
            const { tracks, deleteSelected, setSelectedElements } = timeline;
            // Find all elements that reference this media
            const elementsToRemove = [];
            for (const track of tracks){
                for (const el of track.elements){
                    if (el.type === "media" && el.mediaId === id) {
                        elementsToRemove.push({
                            trackId: track.id,
                            elementId: el.id
                        });
                    }
                }
            }
            // If there are elements to remove, use unified delete function
            if (elementsToRemove.length > 0) {
                setSelectedElements(elementsToRemove);
                deleteSelected();
            }
            // 3) Remove from persistent storage
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].deleteMediaFile({
                    projectId,
                    id
                });
            } catch (error) {
                console.error("Failed to delete media item:", error);
            }
        },
        loadProjectMedia: async (projectId)=>{
            set({
                isLoading: true
            });
            try {
                const mediaItems = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].loadAllMediaFiles({
                    projectId
                });
                // Regenerate thumbnails for video items
                const updatedMediaItems = await Promise.all(mediaItems.map(async (item)=>{
                    if (item.type === "video" && item.file) {
                        try {
                            const { thumbnailUrl, width, height } = await generateVideoThumbnail(item.file);
                            return {
                                ...item,
                                thumbnailUrl,
                                width: width || item.width,
                                height: height || item.height
                            };
                        } catch (error) {
                            console.error(`Failed to regenerate thumbnail for video ${item.id}:`, error);
                            return item;
                        }
                    }
                    return item;
                }));
                set({
                    mediaFiles: updatedMediaItems
                });
            } catch (error) {
                console.error("Failed to load media items:", error);
            } finally{
                set({
                    isLoading: false
                });
            }
        },
        clearProjectMedia: async (projectId)=>{
            const state = get();
            // Cleanup all object URLs
            state.mediaFiles.forEach((item)=>{
                if (item.url) {
                    URL.revokeObjectURL(item.url);
                }
                if (item.thumbnailUrl) {
                    URL.revokeObjectURL(item.thumbnailUrl);
                }
            });
            // Clear local state
            set({
                mediaFiles: []
            });
            // Clear persistent storage
            try {
                const mediaIds = state.mediaFiles.map((item)=>item.id);
                await Promise.all(mediaIds.map((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].deleteMediaFile({
                        projectId,
                        id
                    })));
            } catch (error) {
                console.error("Failed to clear media items from storage:", error);
            }
        },
        clearAllMedia: ()=>{
            const state = get();
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$video$2d$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["videoCache"].clearAll();
            // Cleanup all object URLs
            state.mediaFiles.forEach((item)=>{
                if (item.url) {
                    URL.revokeObjectURL(item.url);
                }
                if (item.thumbnailUrl) {
                    URL.revokeObjectURL(item.thumbnailUrl);
                }
            });
            // Clear local state
            set({
                mediaFiles: []
            });
        }
    }));
}),
"[project]/apps/web/src/stores/project-store.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "DEFAULT_CANVAS_SIZE": ()=>DEFAULT_CANVAS_SIZE,
    "DEFAULT_FPS": ()=>DEFAULT_FPS,
    "createMainScene": ()=>createMainScene,
    "useProjectStore": ()=>useProjectStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/zustand@5.0.6+0e2fb8dbc083adda/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/storage/storage-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/sonner@1.7.4+6dbf9a050bc9aadb/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/media-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/timeline-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$scene$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/scene-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const DEFAULT_CANVAS_SIZE = {
    width: 1920,
    height: 1080
};
const DEFAULT_FPS = 30;
function createMainScene() {
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateUUID"])(),
        name: "Main Scene",
        isMain: true,
        createdAt: new Date(),
        updatedAt: new Date()
    };
}
const createDefaultProject = (name)=>{
    const mainScene = createMainScene();
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateUUID"])(),
        name,
        thumbnail: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        scenes: [
            mainScene
        ],
        currentSceneId: mainScene.id,
        backgroundColor: "#000000",
        backgroundType: "color",
        blurIntensity: 8,
        bookmarks: [],
        fps: DEFAULT_FPS,
        canvasSize: DEFAULT_CANVAS_SIZE,
        canvasMode: "preset"
    };
};
const useProjectStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$zustand$40$5$2e$0$2e$6$2b$0e2fb8dbc083adda$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        activeProject: null,
        savedProjects: [],
        isLoading: true,
        isInitialized: false,
        invalidProjectIds: new Set(),
        // Implementation of bookmark methods
        toggleBookmark: async (time)=>{
            const { activeProject } = get();
            if (!activeProject) return;
            // Round time to the nearest frame
            const fps = activeProject.fps || DEFAULT_FPS;
            const frameTime = Math.round(time * fps) / fps;
            const bookmarks = activeProject.bookmarks || [];
            let updatedBookmarks;
            // Check if already bookmarked
            const bookmarkIndex = bookmarks.findIndex((bookmark)=>Math.abs(bookmark - frameTime) < 0.001);
            if (bookmarkIndex !== -1) {
                // Remove bookmark
                updatedBookmarks = bookmarks.filter((_, i)=>i !== bookmarkIndex);
            } else {
                // Add bookmark
                updatedBookmarks = [
                    ...bookmarks,
                    frameTime
                ].sort((a, b)=>a - b);
            }
            const updatedProject = {
                ...activeProject,
                bookmarks: updatedBookmarks,
                updatedAt: new Date()
            };
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveProject({
                    project: updatedProject
                });
                set({
                    activeProject: updatedProject
                });
                await get().loadAllProjects(); // Refresh the list
            } catch (error) {
                console.error("Failed to update project bookmarks:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to update bookmarks", {
                    description: "Please try again"
                });
            }
        },
        isBookmarked: (time)=>{
            const { activeProject } = get();
            if (!activeProject || !activeProject.bookmarks) return false;
            // Round time to the nearest frame
            const fps = activeProject.fps || DEFAULT_FPS;
            const frameTime = Math.round(time * fps) / fps;
            return activeProject.bookmarks.some((bookmark)=>Math.abs(bookmark - frameTime) < 0.001);
        },
        removeBookmark: async (time)=>{
            const { activeProject } = get();
            if (!activeProject || !activeProject.bookmarks) return;
            // Round time to the nearest frame
            const fps = activeProject.fps || DEFAULT_FPS;
            const frameTime = Math.round(time * fps) / fps;
            const updatedBookmarks = activeProject.bookmarks.filter((bookmark)=>Math.abs(bookmark - frameTime) >= 0.001);
            if (updatedBookmarks.length === activeProject.bookmarks.length) {
                // No bookmark found to remove
                return;
            }
            const updatedProject = {
                ...activeProject,
                bookmarks: updatedBookmarks,
                updatedAt: new Date()
            };
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveProject({
                    project: updatedProject
                });
                set({
                    activeProject: updatedProject
                });
                await get().loadAllProjects(); // Refresh the list
            } catch (error) {
                console.error("Failed to update project bookmarks:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to remove bookmark", {
                    description: "Please try again"
                });
            }
        },
        createNewProject: async (name)=>{
            const newProject = createDefaultProject(name);
            set({
                activeProject: newProject
            });
            const mediaStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaStore"].getState();
            const timelineStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"].getState();
            const sceneStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$scene$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneStore"].getState();
            mediaStore.clearAllMedia();
            timelineStore.clearTimeline();
            sceneStore.initializeScenes({
                scenes: newProject.scenes,
                currentSceneId: newProject.currentSceneId
            });
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveProject({
                    project: newProject
                });
                // Reload all projects to update the list
                await get().loadAllProjects();
                return newProject.id;
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to save new project");
                throw error;
            }
        },
        loadProject: async (id)=>{
            if (!get().isInitialized) {
                set({
                    isLoading: true
                });
            }
            // Prevent flicker when switching projects - clear all stores
            const mediaStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaStore"].getState();
            const timelineStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"].getState();
            const sceneStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$scene$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneStore"].getState();
            mediaStore.clearAllMedia();
            timelineStore.clearTimeline();
            sceneStore.clearScenes();
            try {
                const project = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].loadProject({
                    id
                });
                if (project) {
                    set({
                        activeProject: project
                    });
                    let currentScene = null;
                    if (project.scenes && project.scenes.length > 0) {
                        sceneStore.initializeScenes({
                            scenes: project.scenes,
                            currentSceneId: project.currentSceneId
                        });
                        // Get current scene directly from project data (don't rely on store state)
                        currentScene = project.scenes.find((s)=>s.id === project.currentSceneId) || project.scenes.find((s)=>s.isMain) || project.scenes[0];
                    }
                    await Promise.all([
                        mediaStore.loadProjectMedia(id),
                        timelineStore.loadProjectTimeline({
                            projectId: id,
                            sceneId: currentScene?.id
                        })
                    ]);
                } else {
                    throw new Error(`Project with id ${id} not found`);
                }
            } catch (error) {
                console.error("Failed to load project:", error);
                throw error; // Re-throw so the editor page can handle it
            } finally{
                set({
                    isLoading: false
                });
            }
        },
        saveCurrentProject: async ()=>{
            const { activeProject } = get();
            if (!activeProject) return;
            try {
                const timelineStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"].getState();
                const sceneStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$scene$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneStore"].getState();
                const currentScene = sceneStore.currentScene;
                await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveProject({
                        project: activeProject
                    }),
                    timelineStore.saveProjectTimeline({
                        projectId: activeProject.id,
                        sceneId: currentScene?.id
                    })
                ]);
                await get().loadAllProjects(); // Refresh the list
            } catch (error) {
                console.error("Failed to save project:", error);
            }
        },
        loadAllProjects: async ()=>{
            if (!get().isInitialized) {
                set({
                    isLoading: true
                });
            }
            try {
                const projects = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].loadAllProjects();
                set({
                    savedProjects: projects
                });
            } catch (error) {
                console.error("Failed to load projects:", error);
            } finally{
                set({
                    isLoading: false,
                    isInitialized: true
                });
            }
        },
        deleteProject: async (id)=>{
            try {
                await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].deleteProjectMedia({
                        projectId: id
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].deleteProjectTimeline({
                        projectId: id
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].deleteProject({
                        id
                    })
                ]);
                await get().loadAllProjects(); // Refresh the list
                // If deleted active project, close it and clear data
                const { activeProject } = get();
                if (activeProject?.id === id) {
                    set({
                        activeProject: null
                    });
                    const mediaStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaStore"].getState();
                    const timelineStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"].getState();
                    const sceneStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$scene$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneStore"].getState();
                    mediaStore.clearAllMedia();
                    timelineStore.clearTimeline();
                    sceneStore.clearScenes();
                }
            } catch (error) {
                console.error("Failed to delete project:", error);
            }
        },
        closeProject: ()=>{
            set({
                activeProject: null
            });
            const mediaStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$media$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaStore"].getState();
            const timelineStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$timeline$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTimelineStore"].getState();
            const sceneStore = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$scene$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneStore"].getState();
            mediaStore.clearAllMedia();
            timelineStore.clearTimeline();
            sceneStore.clearScenes();
        },
        renameProject: async (id, name)=>{
            const { savedProjects } = get();
            // Find the project to rename
            const projectToRename = savedProjects.find((p)=>p.id === id);
            if (!projectToRename) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Project not found", {
                    description: "Please try again"
                });
                return;
            }
            const updatedProject = {
                ...projectToRename,
                name,
                updatedAt: new Date()
            };
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveProject({
                    project: updatedProject
                });
                await get().loadAllProjects();
                // Update activeProject if same project
                const { activeProject } = get();
                if (activeProject?.id === id) {
                    set({
                        activeProject: updatedProject
                    });
                }
            } catch (error) {
                console.error("Failed to rename project:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to rename project", {
                    description: error instanceof Error ? error.message : "Please try again"
                });
            }
        },
        duplicateProject: async (projectId)=>{
            try {
                const project = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].loadProject({
                    id: projectId
                });
                if (!project) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Project not found", {
                        description: "Please try again"
                    });
                    throw new Error("Project not found");
                }
                const { savedProjects } = get();
                // Extract the base name (remove any existing numbering)
                const numberMatch = project.name.match(/^\((\d+)\)\s+(.+)$/);
                const baseName = numberMatch ? numberMatch[2] : project.name;
                const existingNumbers = [];
                // Check for pattern "(number) baseName" in existing projects
                savedProjects.forEach((p)=>{
                    const match = p.name.match(/^\((\d+)\)\s+(.+)$/);
                    if (match && match[2] === baseName) {
                        existingNumbers.push(parseInt(match[1], 10));
                    }
                });
                const nextNumber = existingNumbers.length > 0 ? Math.max(...existingNumbers) + 1 : 1;
                const newProject = {
                    ...project,
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateUUID"])(),
                    name: `(${nextNumber}) ${baseName}`,
                    createdAt: new Date(),
                    updatedAt: new Date()
                };
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveProject({
                    project: newProject
                });
                await get().loadAllProjects();
                return newProject.id;
            } catch (error) {
                console.error("Failed to duplicate project:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to duplicate project", {
                    description: error instanceof Error ? error.message : "Please try again"
                });
                throw error;
            }
        },
        updateProjectBackground: async (backgroundColor)=>{
            const { activeProject } = get();
            if (!activeProject) return;
            const updatedProject = {
                ...activeProject,
                backgroundColor,
                updatedAt: new Date()
            };
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveProject({
                    project: updatedProject
                });
                set({
                    activeProject: updatedProject
                });
                await get().loadAllProjects();
            } catch (error) {
                console.error("Failed to update project background:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to update background", {
                    description: "Please try again"
                });
            }
        },
        updateBackgroundType: async (type, options)=>{
            const { activeProject } = get();
            if (!activeProject) return;
            const updatedProject = {
                ...activeProject,
                backgroundType: type,
                ...options?.backgroundColor && {
                    backgroundColor: options.backgroundColor
                },
                ...options?.blurIntensity !== undefined && {
                    blurIntensity: options.blurIntensity
                },
                updatedAt: new Date()
            };
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveProject({
                    project: updatedProject
                });
                set({
                    activeProject: updatedProject
                });
                await get().loadAllProjects();
            } catch (error) {
                console.error("Failed to update background type:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to update background", {
                    description: "Please try again"
                });
            }
        },
        updateProjectFps: async (fps)=>{
            const { activeProject } = get();
            if (!activeProject) return;
            const updatedProject = {
                ...activeProject,
                fps,
                updatedAt: new Date()
            };
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveProject({
                    project: updatedProject
                });
                set({
                    activeProject: updatedProject
                });
                await get().loadAllProjects();
            } catch (error) {
                console.error("Failed to update project FPS:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to update project FPS", {
                    description: "Please try again"
                });
            }
        },
        updateCanvasSize: async (size, mode)=>{
            const { activeProject } = get();
            if (!activeProject) return;
            const updatedProject = {
                ...activeProject,
                canvasSize: size,
                canvasMode: mode,
                updatedAt: new Date()
            };
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveProject({
                    project: updatedProject
                });
                set({
                    activeProject: updatedProject
                });
                await get().loadAllProjects();
            } catch (error) {
                console.error("Failed to update canvas size:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to update canvas size", {
                    description: "Please try again"
                });
            }
        },
        getFilteredAndSortedProjects: (searchQuery, sortOption)=>{
            const { savedProjects } = get();
            const filteredProjects = savedProjects.filter((project)=>project.name.toLowerCase().includes(searchQuery.toLowerCase()));
            const sortedProjects = [
                ...filteredProjects
            ].sort((a, b)=>{
                const [key, order] = sortOption.split("-");
                if (key !== "createdAt" && key !== "name") {
                    console.warn(`Invalid sort key: ${key}`);
                    return 0;
                }
                const aValue = a[key];
                const bValue = b[key];
                if (aValue === undefined || bValue === undefined) return 0;
                if (order === "asc") {
                    if (aValue < bValue) return -1;
                    if (aValue > bValue) return 1;
                    return 0;
                }
                if (aValue > bValue) return -1;
                if (aValue < bValue) return 1;
                return 0;
            });
            return sortedProjects;
        },
        // Global invalid project ID tracking
        isInvalidProjectId: (id)=>{
            const invalidIds = get().invalidProjectIds || new Set();
            return invalidIds.has(id);
        },
        markProjectIdAsInvalid: (id)=>{
            set((state)=>({
                    invalidProjectIds: new Set([
                        ...state.invalidProjectIds || new Set(),
                        id
                    ])
                }));
        },
        clearInvalidProjectIds: ()=>{
            set({
                invalidProjectIds: new Set()
            });
        }
    }));
}),
"[project]/apps/web/src/components/storage-provider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "StorageProvider": ()=>StorageProvider,
    "useStorage": ()=>useStorage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/project-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/storage/storage-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/sonner@1.7.4+6dbf9a050bc9aadb/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const StorageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function useStorage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(StorageContext);
    if (!context) {
        throw new Error("useStorage must be used within StorageProvider");
    }
    return context;
}
function StorageProvider({ children }) {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        isInitialized: false,
        isLoading: true,
        hasSupport: false,
        error: null
    });
    const loadAllProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$project$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectStore"])((state)=>state.loadAllProjects);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initializeStorage = async ()=>{
            setStatus((prev)=>({
                    ...prev,
                    isLoading: true
                }));
            try {
                // Check browser support
                const hasSupport = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].isFullySupported();
                if (!hasSupport) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$sonner$40$1$2e$7$2e$4$2b$6dbf9a050bc9aadb$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning("Storage not fully supported. Some features may not work.");
                }
                // Load saved projects (media will be loaded when a project is loaded)
                await loadAllProjects();
                setStatus({
                    isInitialized: true,
                    isLoading: false,
                    hasSupport,
                    error: null
                });
            } catch (error) {
                console.error("Failed to initialize storage:", error);
                setStatus({
                    isInitialized: false,
                    isLoading: false,
                    hasSupport: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].isFullySupported(),
                    error: error instanceof Error ? error.message : "Unknown error"
                });
            }
        };
        initializeStorage();
    }, [
        loadAllProjects
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StorageContext.Provider, {
        value: status,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/storage-provider.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/apps/web/src/components/ui/dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Dialog": ()=>Dialog,
    "DialogClose": ()=>DialogClose,
    "DialogContent": ()=>DialogContent,
    "DialogDescription": ()=>DialogDescription,
    "DialogFooter": ()=>DialogFooter,
    "DialogHeader": ()=>DialogHeader,
    "DialogOverlay": ()=>DialogOverlay,
    "DialogPortal": ()=>DialogPortal,
    "DialogTitle": ()=>DialogTitle,
    "DialogTrigger": ()=>DialogTrigger
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$14$2b$b41f8805ee63d2ff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@radix-ui+react-dialog@1.1.14+b41f8805ee63d2ff/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript) <export * as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/lucide-react@0.468.0+f4eacebf2041cd4f/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$14$2b$b41f8805ee63d2ff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Root;
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$14$2b$b41f8805ee63d2ff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Trigger;
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$14$2b$b41f8805ee63d2ff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Portal;
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$14$2b$b41f8805ee63d2ff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close;
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$14$2b$b41f8805ee63d2ff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Overlay, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-250 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$14$2b$b41f8805ee63d2ff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Overlay.displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$14$2b$b41f8805ee63d2ff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Content, {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] p-6 z-250 grid w-[calc(100%-2rem)] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-popover shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 rounded-lg", className),
                onCloseAutoFocus: (e)=>{
                    e.stopPropagation();
                    e.preventDefault();
                },
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$14$2b$b41f8805ee63d2ff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
                        className: "absolute right-4 top-4 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$lucide$2d$react$40$0$2e$468$2e$0$2b$f4eacebf2041cd4f$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
                                lineNumber: 53,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
                                lineNumber: 54,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
                        lineNumber: 52,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
                lineNumber: 39,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
        lineNumber: 37,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$14$2b$b41f8805ee63d2ff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Content.displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
        lineNumber: 65,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
        lineNumber: 79,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$14$2b$b41f8805ee63d2ff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Title, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
        lineNumber: 93,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$14$2b$b41f8805ee63d2ff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Title.displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$14$2b$b41f8805ee63d2ff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Description, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/dialog.tsx",
        lineNumber: 108,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$14$2b$b41f8805ee63d2ff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Description.displayName;
;
}),
"[project]/apps/web/src/components/ui/progress.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Progress": ()=>Progress
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$progress$40$1$2e$1$2e$7$2b$b41f8805ee63d2ff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Progress$3e$__ = __turbopack_context__.i("[project]/node_modules/.bun/@radix-ui+react-progress@1.1.7+b41f8805ee63d2ff/node_modules/@radix-ui/react-progress/dist/index.mjs [app-ssr] (ecmascript) <export * as Progress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Progress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, value, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$progress$40$1$2e$1$2e$7$2b$b41f8805ee63d2ff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Progress$3e$__["Progress"].Root, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative h-2 w-full overflow-hidden rounded-full bg-accent", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$progress$40$1$2e$1$2e$7$2b$b41f8805ee63d2ff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Progress$3e$__["Progress"].Indicator, {
            className: "h-full w-full flex-1 bg-foreground transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ui/progress.tsx",
            lineNumber: 20,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/progress.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Progress.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f40$radix$2d$ui$2b$react$2d$progress$40$1$2e$1$2e$7$2b$b41f8805ee63d2ff$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Progress$3e$__["Progress"].Root.displayName;
;
}),
"[project]/apps/web/src/components/providers/migrators/scenes-migrator.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ScenesMigrator": ()=>ScenesMigrator
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@15.4.5+6dbf9a050bc9aadb/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/storage/storage-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/progress.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ScenesMigrator({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMigrating, setIsMigrating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        current: 0,
        total: 0,
        currentProjectName: ""
    });
    const shouldCheckMigration = pathname.startsWith("/editor") || pathname.startsWith("/projects");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!shouldCheckMigration) return;
        checkAndMigrateProjects();
    }, [
        shouldCheckMigration
    ]);
    const checkAndMigrateProjects = async ()=>{
        try {
            const projects = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].loadAllProjects();
            const legacyProjects = projects.filter((project)=>!project.scenes || project.scenes.length === 0);
            if (legacyProjects.length === 0) {
                // No migration needed
                return;
            }
            setIsMigrating(true);
            setProgress({
                current: 0,
                total: legacyProjects.length,
                currentProjectName: ""
            });
            // Migrate each legacy project
            for(let i = 0; i < legacyProjects.length; i++){
                const project = legacyProjects[i];
                setProgress({
                    current: i,
                    total: legacyProjects.length,
                    currentProjectName: project.name
                });
                await migrateLegacyProject(project);
            }
            setProgress({
                current: legacyProjects.length,
                total: legacyProjects.length,
                currentProjectName: "Complete!"
            });
            setTimeout(()=>{
                setIsMigrating(false);
            }, 1000);
        } catch (error) {
            console.error("Migration failed:", error);
            setIsMigrating(false);
        }
    };
    const migrateLegacyProject = async (project)=>{
        try {
            const mainScene = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateUUID"])(),
                name: "Main Scene",
                isMain: true,
                createdAt: new Date(),
                updatedAt: new Date()
            };
            const migratedProject = {
                ...project,
                scenes: [
                    mainScene
                ],
                currentSceneId: mainScene.id,
                updatedAt: new Date()
            };
            // Load existing timeline data (legacy format)
            const legacyTimeline = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].loadTimeline({
                projectId: project.id
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveProject({
                project: migratedProject
            });
            // If timeline data, migrate it to the main scene
            if (legacyTimeline && legacyTimeline.length > 0) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].saveTimeline({
                    projectId: project.id,
                    tracks: legacyTimeline,
                    sceneId: mainScene.id
                });
            }
            // Clean up legacy timeline storage
            await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$storage$2f$storage$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageService"].deleteProjectTimeline({
                projectId: project.id
            });
        } catch (error) {
            console.error(`Failed to migrate project ${project.name}:`, error);
            throw error;
        }
    };
    if (!shouldCheckMigration) {
        return children;
    }
    if (isMigrating) {
        const progressPercent = progress.total > 0 ? progress.current / progress.total * 100 : 0;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
            open: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "sm:max-w-md",
                onPointerDownOutside: (e)=>e.preventDefault(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Updating Projects"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/providers/migrators/scenes-migrator.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                children: "We're adding scene support to your projects. This will only take a moment."
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/providers/migrators/scenes-migrator.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/providers/migrators/scenes-migrator.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Progress"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/providers/migrators/scenes-migrator.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    progress.current,
                                                    " of ",
                                                    progress.total
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/components/providers/migrators/scenes-migrator.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/providers/migrators/scenes-migrator.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                        value: progressPercent,
                                        className: "w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/providers/migrators/scenes-migrator.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/providers/migrators/scenes-migrator.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            progress.currentProjectName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$15$2e$4$2e$5$2b$6dbf9a050bc9aadb$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-muted-foreground",
                                children: progress.current < progress.total ? `Updating: ${progress.currentProjectName}` : progress.currentProjectName
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/providers/migrators/scenes-migrator.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/providers/migrators/scenes-migrator.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/providers/migrators/scenes-migrator.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/providers/migrators/scenes-migrator.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this);
    }
    return children;
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__48e78102._.js.map