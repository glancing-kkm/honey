export const products = [
  { id:'acacia', name:'아카시아 꿀', english:'ACACIA', note:'맑고 은은한 꽃향 · 부드러운 단맛', description:'은은한 꽃향과 부드러운 단맛으로 처음 만나는 꿀로도 좋아요. 플레인 요거트, 따뜻한 차와 함께 가볍게 즐겨보세요.', weight:'500g', price:24000, category:'daily', badge:'DAILY BEST', index:0, floral:3, intensity:1, pairing:'요거트 · 차 · 과일' },
  { id:'wildflower', name:'야생화 꿀', english:'WILDFLOWER', note:'다채로운 꽃향 · 균형 잡힌 단맛', description:'여러 꽃이 어우러진 다채로운 향을 담았어요. 바삭한 토스트나 팬케이크에 한 스푼을 더하면 평범한 아침이 특별해집니다.', weight:'500g', price:26000, category:'daily', badge:'FLORAL', index:1, floral:5, intensity:3, pairing:'토스트 · 팬케이크 · 그래놀라' },
  { id:'chestnut', name:'밤 꿀', english:'CHESTNUT', note:'묵직한 나무 향 · 쌉싸름한 여운', description:'짙은 색만큼 깊고 묵직한 풍미, 마지막에 남는 쌉싸름한 여운. 치즈나 견과류와 함께 천천히 음미해보세요.', weight:'500g', price:29000, category:'rich', badge:'DEEP & RICH', index:2, floral:2, intensity:5, pairing:'치즈 · 견과류 · 호밀빵' },
  { id:'gift', name:'온꿀 두 가지 선물 세트', english:'THE HONEY DUO', note:'마음을 나누는 두 가지 달콤함', description:'부드러운 아카시아 꿀과 향긋한 야생화 꿀을 한 상자에 담았어요. 정갈한 포장으로 고마운 마음을 전해보세요.', weight:'250g × 2', price:38000, category:'gift', badge:'FOR YOU', index:3, floral:4, intensity:2, pairing:'아카시아 250g + 야생화 250g · 선물 상자' },
] as const;
export type Product = typeof products[number];
export type Cart = Record<string, number>;
export function sanitizeCart(value: unknown): Cart {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  return Object.fromEntries(Object.entries(value).filter(([id, qty]) => products.some(p=>p.id===id) && typeof qty==='number' && Number.isInteger(qty) && qty>0 && qty<=20));
}
export function getTotals(cart: Cart) {
  const clean=sanitizeCart(cart);
  const subtotal=products.reduce((sum,p)=>sum+p.price*(clean[p.id]||0),0);
  const shipping=subtotal===0||subtotal>=50000?0:3000;
  return {subtotal,shipping,total:subtotal+shipping,count:Object.values(clean).reduce((a,b)=>a+b,0)};
}
export function updateQuantity(cart: Cart,id:string,quantity:number): Cart {
  if (!products.some(p=>p.id===id)||!Number.isInteger(quantity)||quantity<0||quantity>20) throw new Error('상품과 수량(0~20)을 확인해주세요.');
  const next={...sanitizeCart(cart)};
  if(quantity===0) delete next[id]; else next[id]=quantity;
  return next;
}
export const won=(value:number)=>value.toLocaleString('ko-KR');
