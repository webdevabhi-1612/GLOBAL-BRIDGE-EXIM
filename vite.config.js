import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/GLOBAL-BRIDGE-EXIM/',
  plugins: [react(),
    tailwindcss()
  ],
server: {
    allowedHosts: true, // Bypasses Cloudflare host blocking
    host: true,         // Exposes server to network
    cors: true,         // Prevents cross-origin asset blocking
    hmr: {
      clientPort: 443,  // CRITICAL FIX: Forces websocket to use the tunnel's secure port
    }
  }
})
