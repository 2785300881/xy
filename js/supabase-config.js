// supabase-config.js
const SUPABASE_URL = 'https://sgwbztuizxowiacpwzmy.supabase.co';
const SUPABASE_ANON_KEY = '.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3enBlc3Nhc3N2bW5uYnJuZWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0MjU0MTQsImV4cCI6MjA0ODAwMTQxNH0.8lRwB_XmU0b0zPwzu1VqgEwV5qg0g5q5q5q5q5q5q5';

// 创建 Supabase 客户端
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);