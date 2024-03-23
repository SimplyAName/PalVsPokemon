# This image should build the svelte project and then passed onto another container to run it
FROM node:20-alpine AS build 
LABEL author="Michael Loney"

ENV NODE_ENV docker

WORKDIR /home/node/build

COPY . .

RUN npm ci
RUN npx prisma generate
RUN npm run build

### ========================================== ###
FROM node:20-alpine AS production
LABEL author="Michael Loney"

WORKDIR /home/SvelteKit
ENV NODE_ENV production

COPY --from=build /home/node/build/build .
COPY --from=build /home/node/build/package.json .
COPY --from=build /home/node/build/package-lock.json .
COPY --from=build /home/node/build/prisma prisma
COPY --from=build /home/node/build/.env.docker .env

COPY ./orchestration/docker-startup.sh ./docker-startup.sh

EXPOSE 3000

CMD ["./docker-startup.sh"]