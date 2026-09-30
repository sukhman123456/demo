// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Synchronize uploaded salon interior photos
try {
  const uploadsDir = "C:/Users/hp/.gemini/antigravity-ide/brain/664d684c-6fcd-4802-aa06-30d6c6da269f/.user_uploaded";
  const publicDest = path.resolve("./public/images/salon");
  const assetsDest = path.resolve("./src/assets/salon");

  if (fs.existsSync(uploadsDir)) {
    fs.mkdirSync(publicDest, { recursive: true });
    fs.mkdirSync(assetsDest, { recursive: true });

    const mapping = {
      "salon-waiting-lounge.jpg": "media_1790701570203.jpg",
      "salon-pedicure-basin.jpg": "media_1790701576927.jpg",
      "salon-reception.jpg": "media_1790701580553.jpg",
      "salon-makeup-studio.jpg": "media_1790701584925.jpg",
      "salon-styling-wash.jpg": "media_1790701591668.jpg",
    };

    for (const [destName, srcName] of Object.entries(mapping)) {
      const srcFile = path.join(uploadsDir, srcName);
      if (fs.existsSync(srcFile)) {
        fs.copyFileSync(srcFile, path.join(publicDest, destName));
        fs.copyFileSync(srcFile, path.join(assetsDest, destName));
      }
    }
  }

  // Also sync generated service images
  const brainDir = "C:/Users/hp/.gemini/antigravity-ide/brain/664d684c-6fcd-4802-aa06-30d6c6da269f";
  const servicesPublic = path.resolve("./public/images/services");
  const servicesAssets = path.resolve("./src/assets/services");
  fs.mkdirSync(servicesPublic, { recursive: true });
  fs.mkdirSync(servicesAssets, { recursive: true });

  const generatedServiceFiles = {
    "skincare-facial.jpg": "skincare_facial_1790703889915.jpg",
    "eyebrow-threading.jpg": "eyebrow_threading_1790700151278.jpg",
    "grooming-shave.jpg": "grooming_shave_1790703985992.jpg",
  };

  for (const [destName, srcName] of Object.entries(generatedServiceFiles)) {
    const srcPath = path.join(brainDir, srcName);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, path.join(servicesPublic, destName));
      fs.copyFileSync(srcPath, path.join(servicesAssets, destName));
    }
  }
} catch (e) {
  console.error("Salon image copy error:", e);
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});

