import { defineCliConfig } from "sanity/cli";

// Env-parameterized; the human running `sanity` CLI commands (init, deploy)
// sets NEXT_PUBLIC_SANITY_PROJECT_ID locally. No deployment.appId — that was
// tied to the old fivitech project and must not be carried over.
export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  },
});
