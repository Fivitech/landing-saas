import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./sanity/schemas";

// Env-parameterized so Studio and the runtime read client always point at the
// SAME project. Falls back to a harmless placeholder so importing this module
// (e.g. during `next build`) never crashes when no Sanity env is set.
// @sanity/code-input and @sanity/table are intentionally omitted (not installed).
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "default",
  title: "Fivitech FXCRM Blog",

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
