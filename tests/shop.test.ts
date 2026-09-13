import test from 'node:test';
import assert from 'node:assert/strict';
import {getTotals,sanitizeCart,updateQuantity} from '../lib/shop.ts';
test('empty cart never charges shipping',()=>assert.deepEqual(getTotals({}),{subtotal:0,shipping:0,total:0,count:0}));
test('free shipping activates at the exact threshold',()=>{assert.equal(getTotals({acacia:1}).total,27000);assert.equal(getTotals({acacia:1,wildflower:1}).shipping,0);assert.equal(getTotals({acacia:1,wildflower:1}).total,50000);});
test('untrusted saved cart cannot alter prices or exceed quantity limits',()=>assert.deepEqual(sanitizeCart({acacia:2,gift:21,chestnut:-1,wildflower:1.5,unknown:9}),{acacia:2}));
test('invalid storage shape yields empty cart',()=>{for(const value of [null,[],123,'bad'])assert.deepEqual(sanitizeCart(value),{});});
test('quantity change and removal preserve other products',()=>{const initial={acacia:1,gift:1};const next=updateQuantity(initial,'acacia',2);assert.equal(getTotals(next).total,86000);assert.deepEqual(updateQuantity(next,'acacia',0),{gift:1});assert.deepEqual(initial,{acacia:1,gift:1});});
test('invalid product and quantity are rejected without mutation',()=>{for(const [id,quantity] of [['unknown',1],['acacia',21],['acacia',-1],['gift',1.5]] as const)assert.throws(()=>updateQuantity({},id,quantity));});
