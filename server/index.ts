import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  try {
    console.log('Initializing server...');
    const server = await registerRoutes(app);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      console.error('Server error:', err);
      res.status(status).json({ message });
    });

  // In development, we'll use Vite's dev server for serving frontend assets
  // and proxy API requests to the Express server
  if (app.get("env") === "production") {
    serveStatic(app);
  }

    // Using port 3000 as it's a common development port and may have better compatibility
    const port = parseInt(process.env.PORT || '3000', 10);
    console.log(`Attempting to start server on port ${port}...`);
    
    server.listen(port, '127.0.0.1', () => {
      console.log(`Server is running at http://localhost:${port}`);
      console.log('Press Ctrl+C to stop the server');
    }).on('error', (err: NodeJS.ErrnoException) => {
      console.error('Failed to start server:', err);
      if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Please try a different port.`);
      } else if (err.code === 'EACCES') {
        console.error(`Port ${port} requires elevated privileges. Try a port above 1024.`);
      }
      process.exit(1);
    });
  } catch (error) {
    console.error('Fatal error during server initialization:', error);
    process.exit(1);
  }
})();
