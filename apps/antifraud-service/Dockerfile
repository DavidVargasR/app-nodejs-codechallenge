FROM node:20-alpine AS base
RUN apk update

FROM base AS builder
WORKDIR /app
COPY ./apps/antifraud-service .

RUN yarn install
RUN yarn build

FROM base AS prod
WORKDIR /app
COPY --from=builder /app/build .
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/yarn.lock yarn.lock

RUN yarn install --production

CMD ["node", "index.js"]