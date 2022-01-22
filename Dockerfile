FROM node:16.13-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

FROM node:16.13-slim AS runner
COPY ./scripts/install /install
RUN /install openssl

WORKDIR /app

ENV NODE_ENV production
ARG NEXTAUTH_SECRET
ENV NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
ARG NEXTAUTH_URL
ENV NEXTAUTH_URL=${NEXTAUTH_URL}
ARG NEXT_DATOCMS_API_TOKEN
ENV NEXT_DATOCMS_API_TOKEN=${NEXT_DATOCMS_API_TOKEN}

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run gen
RUN npm run build
RUN cp -r /app/.next/standalone/* ./

USER node

EXPOSE 3000
ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node", "server.js"]
