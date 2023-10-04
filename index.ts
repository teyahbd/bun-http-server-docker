import snakeMe from "./snakeMe";

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const reqPath = new URL(req.url).pathname;

    if (reqPath !== "/snake_me") return new Response(null, { status: 404 });
    if (req.method !== "POST") return new Response(null, { status: 405 });

    const reqBody = await req.json();

    const resBody = snakeMe(reqBody);

    return new Response(JSON.stringify(resBody), { status: 201 });
  },
  error() {
    return new Response(null, { status: 500 });
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
