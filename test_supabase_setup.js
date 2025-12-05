
import { createClient } from '@supabase/supabase-js';

// Credentials provided by the user
const supabaseUrl = 'https://jwycwzvkvogeavfdkbab.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3eWN3enZrdm9nZWF2ZmRrYmFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4NDMyNTQsImV4cCI6MjA4MDQxOTI1NH0.mBtfiydIA-0mKADF7inBX_P1GOmorrqD59GtO_vKPjI';

const supabase = createClient(supabaseUrl, supabaseKey);

async function verifySetup() {
    console.log("1. Testing Connection & Auth...");

    // 1. Try to Sign Up (Beta Test)
    const email = 'gopikrishnayalavarthi531@gmail.com';
    const password = 'TestPassword123!'; // Temporary password for testing

    const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
    });

    if (authError) {
        console.log("   [Auth Status]: " + authError.message);
    } else {
        console.log("   [Auth Status]: Signup Successful! User ID: " + (authData.user?.id || 'Created'));
        console.log("   Please check your email to confirm the signup if confirmation is enabled.");
    }

    console.log("\n2. Checking Database Tables...");

    // 2. Check 'products' table
    const { data: products, error: productsError } = await supabase
        .from('products')
        .select('*')
        .limit(1);

    if (productsError) {
        console.error("   [Products Table]: FAILED - " + productsError.message);
        console.log("   -> This confirms the 'products' table does not exist yet.");
    } else {
        console.log("   [Products Table]: SUCCESS - Found " + products.length + " rows.");
    }

    // 3. Check 'orders' table
    const { data: orders, error: ordersError } = await supabase
        .from('orders')
        .select('*')
        .limit(1);

    if (ordersError) {
        console.error("   [Orders Table]: FAILED - " + ordersError.message);
        console.log("   -> This confirms the 'orders' table does not exist yet.");
    } else {
        console.log("   [Orders Table]: SUCCESS - Found " + orders.length + " rows.");
    }
}

verifySetup();
