#!/bin/bash
npm init -y
npm i knex sqlite3
npx knex init
npx knex migrate:latest
npx knex seed:run
