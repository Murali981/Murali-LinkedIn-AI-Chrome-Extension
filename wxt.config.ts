// // wxt.config.ts
// import { defineConfig } from "wxt";

// export default defineConfig({
//   manifest: {
//     permissions: ["activeTab"],
//     content_scripts: [
//       {
//         matches: ["*://*.linkedin.com/*"],
//         js: ["./entrypoints/content/index.tsx"],
//       },
//     ],
//     web_accessible_resources: [
//       {
//         resources: ["assets/*"],
//         matches: ["*://*.linkedin.com/*"],
//       },
//     ],
//   },
// });

// wxt.config.ts
import { defineConfig } from "wxt";

// export default defineConfig({
//   manifest: {
//     permissions: ["activeTab"],
//     content_scripts: [
//       {
//         matches: ["*://*.linkedin.com/*"],
//         js: ["./entrypoints/content.tsx"],
//       },
//     ],
//   },
//   // // Development settings
//   // dev: {
//   //   browserConsole: true,
//   //   vaultPath: ".vault",
//   // },
// });

// wxt.config.ts

// export default defineConfig({
//   manifest: {
//     name: "LinkedIn AI Reply",
//     description: "AI-powered reply suggestions for LinkedIn messages",
//     version: "1.0.0",
//     manifest_version: 3,
//     permissions: ["activeTab"],
//     content_scripts: [
//       {
//         matches: ["*://*.linkedin.com/*"],
//         js: ["./entrypoints/content/index.tsx"],
//       },
//     ],
//   },
// });

export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  runner: {
    startUrls: ["https://linkedin.com"],
  },
});

// wxt.config.ts

// export default defineConfig({
//   manifest: {
//     name: "LinkedIn AI Reply",
//     version: "1.0.0",
//     description: "AI-powered reply suggestions for LinkedIn messages",
//     permissions: ["activeTab"],
//     content_scripts: [
//       {
//         matches: ["*://*.linkedin.com/*"],
//         js: ["./entrypoints/content.tsx"],
//       },
//     ],
//   },
//   modules: ["@wxt-dev/module-react"],
//   runner: {
//     startUrls: ["https://linkedin.com/messaging"],
//   },
// });
