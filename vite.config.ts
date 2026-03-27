import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { Mode, plugin as mdPlugin } from "vite-plugin-markdown";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), mdPlugin({ mode: [Mode.MARKDOWN] })],
});
