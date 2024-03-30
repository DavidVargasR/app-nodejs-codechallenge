const { Client } = require("pg");
const { exec } = require("child_process");

async function setupDatabase() {
  const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "postgres",
    port: 5432,
  });

  await client.connect();

  await client.query(`
    DROP DATABASE IF EXISTS davidvargasyape;
    CREATE DATABASE davidvargasyape;
    INSERT INTO public.transaction_type values(1, 'Guid');
    INSERT INTO public.transaction_status values(1, 'PENDING');
    INSERT INTO public.transaction_status values(2, 'APPROVED');
    INSERT INTO public.transaction_status values(3, 'REJECTED');
  `);
  await client.end();

  exec("yarn prisma migrate dev --name inicial");
}

setupDatabase();
