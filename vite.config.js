import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    build: {
        manifest: true,
        outDir: "public/build",
        rollupOptions: {
            input: "resources/js/app.js",
        },
    },
    optimizeDeps: {
        exclude: ["js-big-decimal"],
    },
    plugins: [
        react(),
        svgr({
            // Set it to `true` to export React component as default.
            // Notice that it will override the default behavior of Vite.
            exportAsDefault: false,

            // svgr options: https://react-svgr.com/docs/options/
            svgrOptions: {
                // ...
            },

            // esbuild options, to transform jsx to js
            esbuildOptions: {
                // ...
            },

            //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include. By default all svg files will be included.
            include: "**/*.svg",

            //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore. By default no files are ignored.
            exclude: "",
        }),
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
});
