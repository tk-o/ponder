export $(grep -v '^#' .env.local | xargs) && rm -rf data/ && docker-compose up --detach && tsup-node && (node dist/subgraph.js $1 || true) && docker-compose down