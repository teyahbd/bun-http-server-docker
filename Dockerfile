FROM oven/bun

WORKDIR /app/

COPY package*.json bun.lockb ./
RUN bun install
COPY . .

CMD ["bun", "start"]

EXPOSE 3000