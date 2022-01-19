FROM node:16.13-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

FROM node:16.13-slim AS runner
COPY ./scripts/install /install
RUN /install openssl

WORKDIR /app

ENV NODE_ENV production

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build
RUN cp -r /app/.next/standalone/* ./

USER node

EXPOSE 3000
ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node", "server.js"]
