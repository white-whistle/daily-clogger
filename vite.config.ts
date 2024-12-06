import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	// for gh pages without dns
	// base: "/daily-clogger/",
	base: "/",
	plugins: [react()],
})
