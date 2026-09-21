import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "aubx2pik",
    dataset: "production",
  },
  studioHost: "aliceinboyabagi2",
  deployment: {
    autoUpdates: true,
  },
});
