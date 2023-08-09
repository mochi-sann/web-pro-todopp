# TodoApp

## How to setup

copy `.env` file

```bash
cp .env.example .env.local
```

```bash
docker compose up -d
```

```bash
pnpm install
```

```bash
# setup database
cd packages/database/
pnpm run generate
pnpm run db:migrate:dev

cd ../../
pnpm run build
```
