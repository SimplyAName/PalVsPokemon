#!/bin/sh

echo "Pushing to database"
npx prisma db push

echo "Seeding to database"
npx prisma db seed

echo "Starting node"
node .