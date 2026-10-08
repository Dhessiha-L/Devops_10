const express=require('express');const cors=require('cors');const mysql=require('mysql2/promise');
const app=express();app.use(cors());app.use(express.json());
const pool=mysql.createPool({host:process.env.DB_HOST||'mysql',user:process.env.DB_USER||'realestate',password:process.env.DB_PASSWORD||'realestate123',database:process.env.DB_NAME||'realestate',waitForConnections:true,connectionLimit:5});
app.get('/api/health',(req,res)=>res.json({status:'ok'}));
app.get('/api/dashboard',async(req,res)=>{try{const [rows]=await pool.query('SELECT * FROM projects ORDER BY id');const active=rows.filter(x=>x.status==='Active').length;const total=rows.length;const progress=Math.round(rows.reduce((a,x)=>a+x.progress,0)/total);const budget=Math.round(rows.reduce((a,x)=>a+x.budget_used,0)/total);res.json({stats:{active,total,progress,budget},projects:rows})}catch(e){res.status(500).json({error:e.message})}});
const port=process.env.PORT||4000;app.listen(port,()=>console.log(`API running on ${port}`));
