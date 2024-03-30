FROM node:20-alpine AS base
RUN apk update

FROM base AS builder
WORKDIR /app
COPY ./apps/transaction-service .

RUN yarn install
RUN yarn build

FROM base AS prod
WORKDIR /app
COPY --from=builder /app/build .
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/yarn.lock yarn.lock
COPY --from=builder /app/prisma /app/prisma
COPY --from=builder /app/scripts /app/scripts

RUN ls -la /app

RUN yarn install
RUN yarn prisma:generate

CMD ["node", "./scripts/postbuild.js"]
CMD ["node", "index.js"]