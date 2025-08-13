// vite.config.ts
import { defineConfig } from "file:///app/code/node_modules/vite/dist/node/index.js";
import react from "file:///app/code/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { splitVendorChunkPlugin } from "file:///app/code/node_modules/vite/dist/node/index.js";
import { visualizer } from "file:///app/code/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { compress } from "file:///app/code/node_modules/vite-plugin-compress/dist/plugin.js";
var vite_config_default = defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
      babel: {
        plugins: [
          ["@babel/plugin-transform-react-jsx", { runtime: "automatic" }]
        ]
      }
    }),
    splitVendorChunkPlugin(),
    // Compression for better performance
    compress({
      gzip: true,
      brotli: true,
      algorithm: "gzip",
      exclude: [/\.(png|jpg|jpeg|webp|avif|gif|svg)$/]
    }),
    // Bundle analyzer (only in analyze mode)
    process.env.ANALYZE && visualizer({
      filename: "dist/bundle-analysis.html",
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  ].filter(Boolean),
  build: {
    target: "es2015",
    // Enable code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-vendor";
            }
            if (id.includes("lucide-react")) {
              return "icons";
            }
            return "vendor";
          }
          if (id.includes("/src/components/")) {
            return "components";
          }
          if (id.includes("/src/hooks/") || id.includes("/src/utils/")) {
            return "utils";
          }
        },
        // Optimize asset naming for better caching
        assetFileNames: "assets/[name].[hash][extname]",
        chunkFileNames: "js/[name].[hash].js",
        entryFileNames: "js/[name].[hash].js"
      }
    },
    // Enable minification with optimized settings
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug", "console.warn"],
        passes: 2
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },
    // Disable source maps for production
    sourcemap: false,
    // Reduce chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Asset optimization - inline smaller assets
    assetsInlineLimit: 2048,
    // Optimize bundle size
    reportCompressedSize: false,
    // Enable CSS minification
    cssMinify: true
  },
  server: {
    // Enable compression
    cors: true,
    headers: {
      "Cache-Control": "public, max-age=31536000"
    }
  },
  preview: {
    port: 4173,
    cors: true,
    headers: {
      "Cache-Control": "public, max-age=31536000",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block"
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "lucide-react"],
    exclude: ["web-vitals"],
    esbuildOptions: {
      target: "es2015"
    }
  },
  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version || "1.0.0"),
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production")
  },
  // Asset handling
  assetsInclude: ["**/*.woff", "**/*.woff2", "**/*.webp", "**/*.avif"],
  // Enable experimental features for better performance
  esbuild: {
    target: "es2015",
    logOverride: { "this-is-undefined-in-esm": "silent" },
    legalComments: "none",
    treeShaking: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true
  },
  // CSS processing
  css: {
    postcss: {
      plugins: []
    },
    devSourcemap: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvYXBwL2NvZGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9hcHAvY29kZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vYXBwL2NvZGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgc3BsaXRWZW5kb3JDaHVua1BsdWdpbiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJ1xuaW1wb3J0IHsgY29tcHJlc3MgfSBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzcydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCh7XG4gICAgICBqc3hSdW50aW1lOiAnYXV0b21hdGljJyxcbiAgICAgIGJhYmVsOiB7XG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICBbJ0BiYWJlbC9wbHVnaW4tdHJhbnNmb3JtLXJlYWN0LWpzeCcsIHsgcnVudGltZTogJ2F1dG9tYXRpYycgfV1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pLFxuICAgIHNwbGl0VmVuZG9yQ2h1bmtQbHVnaW4oKSxcbiAgICAvLyBDb21wcmVzc2lvbiBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG4gICAgY29tcHJlc3Moe1xuICAgICAgZ3ppcDogdHJ1ZSxcbiAgICAgIGJyb3RsaTogdHJ1ZSxcbiAgICAgIGFsZ29yaXRobTogJ2d6aXAnLFxuICAgICAgZXhjbHVkZTogWy9cXC4ocG5nfGpwZ3xqcGVnfHdlYnB8YXZpZnxnaWZ8c3ZnKSQvXVxuICAgIH0pLFxuICAgIC8vIEJ1bmRsZSBhbmFseXplciAob25seSBpbiBhbmFseXplIG1vZGUpXG4gICAgcHJvY2Vzcy5lbnYuQU5BTFlaRSAmJiB2aXN1YWxpemVyKHtcbiAgICAgIGZpbGVuYW1lOiAnZGlzdC9idW5kbGUtYW5hbHlzaXMuaHRtbCcsXG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgZ3ppcFNpemU6IHRydWUsXG4gICAgICBicm90bGlTaXplOiB0cnVlXG4gICAgfSlcbiAgXS5maWx0ZXIoQm9vbGVhbiksXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXMyMDE1JyxcbiAgICAvLyBFbmFibGUgY29kZSBzcGxpdHRpbmcgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IChpZCkgPT4ge1xuICAgICAgICAgIC8vIENyZWF0ZSBzZXBhcmF0ZSBjaHVua3MgZm9yIGJldHRlciBjYWNoaW5nXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdyZWFjdCcpIHx8IGlkLmluY2x1ZGVzKCdyZWFjdC1kb20nKSkge1xuICAgICAgICAgICAgICByZXR1cm4gJ3JlYWN0LXZlbmRvcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbHVjaWRlLXJlYWN0JykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICdpY29ucydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAndmVuZG9yJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJy9zcmMvY29tcG9uZW50cy8nKSkge1xuICAgICAgICAgICAgcmV0dXJuICdjb21wb25lbnRzJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJy9zcmMvaG9va3MvJykgfHwgaWQuaW5jbHVkZXMoJy9zcmMvdXRpbHMvJykpIHtcbiAgICAgICAgICAgIHJldHVybiAndXRpbHMnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyBPcHRpbWl6ZSBhc3NldCBuYW1pbmcgZm9yIGJldHRlciBjYWNoaW5nXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS5baGFzaF1bZXh0bmFtZV0nLFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2pzL1tuYW1lXS5baGFzaF0uanMnLFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ2pzL1tuYW1lXS5baGFzaF0uanMnXG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBFbmFibGUgbWluaWZpY2F0aW9uIHdpdGggb3B0aW1pemVkIHNldHRpbmdzXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcbiAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICBjb21wcmVzczoge1xuICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWUsXG4gICAgICAgIHB1cmVfZnVuY3M6IFsnY29uc29sZS5sb2cnLCAnY29uc29sZS5pbmZvJywgJ2NvbnNvbGUuZGVidWcnLCAnY29uc29sZS53YXJuJ10sXG4gICAgICAgIHBhc3NlczogMlxuICAgICAgfSxcbiAgICAgIG1hbmdsZToge1xuICAgICAgICBzYWZhcmkxMDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGZvcm1hdDoge1xuICAgICAgICBjb21tZW50czogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIERpc2FibGUgc291cmNlIG1hcHMgZm9yIHByb2R1Y3Rpb25cbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgIC8vIFJlZHVjZSBjaHVuayBzaXplIHdhcm5pbmcgbGltaXRcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDUwMCxcbiAgICAvLyBFbmFibGUgQ1NTIGNvZGUgc3BsaXR0aW5nXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIC8vIEFzc2V0IG9wdGltaXphdGlvbiAtIGlubGluZSBzbWFsbGVyIGFzc2V0c1xuICAgIGFzc2V0c0lubGluZUxpbWl0OiAyMDQ4LFxuICAgIC8vIE9wdGltaXplIGJ1bmRsZSBzaXplXG4gICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IGZhbHNlLFxuICAgIC8vIEVuYWJsZSBDU1MgbWluaWZpY2F0aW9uXG4gICAgY3NzTWluaWZ5OiB0cnVlXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIC8vIEVuYWJsZSBjb21wcmVzc2lvblxuICAgIGNvcnM6IHRydWUsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAncHVibGljLCBtYXgtYWdlPTMxNTM2MDAwJ1xuICAgIH1cbiAgfSxcbiAgcHJldmlldzoge1xuICAgIHBvcnQ6IDQxNzMsXG4gICAgY29yczogdHJ1ZSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ2FjaGUtQ29udHJvbCc6ICdwdWJsaWMsIG1heC1hZ2U9MzE1MzYwMDAnLFxuICAgICAgJ1gtQ29udGVudC1UeXBlLU9wdGlvbnMnOiAnbm9zbmlmZicsXG4gICAgICAnWC1GcmFtZS1PcHRpb25zJzogJ0RFTlknLFxuICAgICAgJ1gtWFNTLVByb3RlY3Rpb24nOiAnMTsgbW9kZT1ibG9jaydcbiAgICB9XG4gIH0sXG4gIC8vIE9wdGltaXplIGRlcGVuZGVuY2llc1xuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdsdWNpZGUtcmVhY3QnXSxcbiAgICBleGNsdWRlOiBbJ3dlYi12aXRhbHMnXSxcbiAgICBlc2J1aWxkT3B0aW9uczoge1xuICAgICAgdGFyZ2V0OiAnZXMyMDE1J1xuICAgIH1cbiAgfSxcbiAgLy8gRGVmaW5lIGdsb2JhbCBjb25zdGFudHNcbiAgZGVmaW5lOiB7XG4gICAgX19BUFBfVkVSU0lPTl9fOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5ucG1fcGFja2FnZV92ZXJzaW9uIHx8ICcxLjAuMCcpLFxuICAgICdwcm9jZXNzLmVudi5OT0RFX0VOVic6IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdwcm9kdWN0aW9uJylcbiAgfSxcbiAgLy8gQXNzZXQgaGFuZGxpbmdcbiAgYXNzZXRzSW5jbHVkZTogWycqKi8qLndvZmYnLCAnKiovKi53b2ZmMicsICcqKi8qLndlYnAnLCAnKiovKi5hdmlmJ10sXG4gIC8vIEVuYWJsZSBleHBlcmltZW50YWwgZmVhdHVyZXMgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICBlc2J1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXMyMDE1JyxcbiAgICBsb2dPdmVycmlkZTogeyAndGhpcy1pcy11bmRlZmluZWQtaW4tZXNtJzogJ3NpbGVudCcgfSxcbiAgICBsZWdhbENvbW1lbnRzOiAnbm9uZScsXG4gICAgdHJlZVNoYWtpbmc6IHRydWUsXG4gICAgbWluaWZ5SWRlbnRpZmllcnM6IHRydWUsXG4gICAgbWluaWZ5U3ludGF4OiB0cnVlLFxuICAgIG1pbmlmeVdoaXRlc3BhY2U6IHRydWVcbiAgfSxcbiAgLy8gQ1NTIHByb2Nlc3NpbmdcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW11cbiAgICB9LFxuICAgIGRldlNvdXJjZW1hcDogZmFsc2VcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNk0sU0FBUyxvQkFBb0I7QUFDMU8sT0FBTyxXQUFXO0FBQ2xCLFNBQVMsOEJBQThCO0FBQ3ZDLFNBQVMsa0JBQWtCO0FBQzNCLFNBQVMsZ0JBQWdCO0FBR3pCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLFlBQVk7QUFBQSxNQUNaLE9BQU87QUFBQSxRQUNMLFNBQVM7QUFBQSxVQUNQLENBQUMscUNBQXFDLEVBQUUsU0FBUyxZQUFZLENBQUM7QUFBQSxRQUNoRTtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELHVCQUF1QjtBQUFBO0FBQUEsSUFFdkIsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsU0FBUyxDQUFDLHFDQUFxQztBQUFBLElBQ2pELENBQUM7QUFBQTtBQUFBLElBRUQsUUFBUSxJQUFJLFdBQVcsV0FBVztBQUFBLE1BQ2hDLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxJQUNkLENBQUM7QUFBQSxFQUNILEVBQUUsT0FBTyxPQUFPO0FBQUEsRUFDaEIsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBO0FBQUEsSUFFUixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjLENBQUMsT0FBTztBQUVwQixjQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDL0IsZ0JBQUksR0FBRyxTQUFTLE9BQU8sS0FBSyxHQUFHLFNBQVMsV0FBVyxHQUFHO0FBQ3BELHFCQUFPO0FBQUEsWUFDVDtBQUNBLGdCQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDL0IscUJBQU87QUFBQSxZQUNUO0FBQ0EsbUJBQU87QUFBQSxVQUNUO0FBQ0EsY0FBSSxHQUFHLFNBQVMsa0JBQWtCLEdBQUc7QUFDbkMsbUJBQU87QUFBQSxVQUNUO0FBQ0EsY0FBSSxHQUFHLFNBQVMsYUFBYSxLQUFLLEdBQUcsU0FBUyxhQUFhLEdBQUc7QUFDNUQsbUJBQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBO0FBQUEsUUFFQSxnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsZUFBZTtBQUFBLFFBQ2YsWUFBWSxDQUFDLGVBQWUsZ0JBQWdCLGlCQUFpQixjQUFjO0FBQUEsUUFDM0UsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLFVBQVU7QUFBQSxNQUNaO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixVQUFVO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsV0FBVztBQUFBO0FBQUEsSUFFWCx1QkFBdUI7QUFBQTtBQUFBLElBRXZCLGNBQWM7QUFBQTtBQUFBLElBRWQsbUJBQW1CO0FBQUE7QUFBQSxJQUVuQixzQkFBc0I7QUFBQTtBQUFBLElBRXRCLFdBQVc7QUFBQSxFQUNiO0FBQUEsRUFDQSxRQUFRO0FBQUE7QUFBQSxJQUVOLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLGlCQUFpQjtBQUFBLElBQ25CO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLE1BQ1AsaUJBQWlCO0FBQUEsTUFDakIsMEJBQTBCO0FBQUEsTUFDMUIsbUJBQW1CO0FBQUEsTUFDbkIsb0JBQW9CO0FBQUEsSUFDdEI7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxTQUFTLGFBQWEsY0FBYztBQUFBLElBQzlDLFNBQVMsQ0FBQyxZQUFZO0FBQUEsSUFDdEIsZ0JBQWdCO0FBQUEsTUFDZCxRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsUUFBUTtBQUFBLElBQ04saUJBQWlCLEtBQUssVUFBVSxRQUFRLElBQUksdUJBQXVCLE9BQU87QUFBQSxJQUMxRSx3QkFBd0IsS0FBSyxVQUFVLFFBQVEsSUFBSSxZQUFZLFlBQVk7QUFBQSxFQUM3RTtBQUFBO0FBQUEsRUFFQSxlQUFlLENBQUMsYUFBYSxjQUFjLGFBQWEsV0FBVztBQUFBO0FBQUEsRUFFbkUsU0FBUztBQUFBLElBQ1AsUUFBUTtBQUFBLElBQ1IsYUFBYSxFQUFFLDRCQUE0QixTQUFTO0FBQUEsSUFDcEQsZUFBZTtBQUFBLElBQ2YsYUFBYTtBQUFBLElBQ2IsbUJBQW1CO0FBQUEsSUFDbkIsY0FBYztBQUFBLElBQ2Qsa0JBQWtCO0FBQUEsRUFDcEI7QUFBQTtBQUFBLEVBRUEsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDO0FBQUEsSUFDWjtBQUFBLElBQ0EsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
