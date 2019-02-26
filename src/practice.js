'use strict';

const knex = require('knex'); 
require('dotenv').config(); 

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL 
});

console.log('connection sucessful'); 

const qry =knexInstance.select('product_id', 'name', 'price', 'category')
  .from('amazong_products')
  .where({name: 'Point of view gun'})
  .first()
  .toQuery(); 

console.log(qry); 

