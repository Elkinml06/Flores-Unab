CREATE TABLE clientes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  telefono TEXT,
  created_at TIMESTAMP DEFAULT now()
);
