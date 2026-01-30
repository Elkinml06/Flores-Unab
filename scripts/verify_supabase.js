
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Configurar dotenv para leer .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Error: Variables de entorno VITE_SUPABASE_URL o VITE_SUPABASE_PUBLISHABLE_KEY no encontradas.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
    console.log('🔄 Probando conexión a Supabase...');
    console.log(`📡 URL: ${supabaseUrl}`);

    // Intentar leer la tabla 'clientes' (o cualquier tabla pública)
    // Usamos count para no traer datos sensibles innecesariamente, solo verificar acceso
    const { count, error } = await supabase
        .from('clientes')
        .select('*', { count: 'exact', head: true });

    if (error) {
        console.error('❌ Error conectando a Supabase:', error.message);
    } else {
        console.log('✅ Conexión exitosa. Supabase está respondiendo correctamente.');
        console.log(`📊 Número de registros en tabla 'clientes': ${count}`);
    }
}

testConnection();
