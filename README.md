# 온꿀 ONGGUL

따뜻한 크림·브라운 컬러와 오리지널 꿀 사진으로 구성한 한국어 반응형 쇼핑몰 시안입니다.

## 실행

- `npm install`
- `npm run dev` — http://localhost:3000
- `npm run build` — 배포 빌드
- `npm run typecheck` — 타입 검사
- `npm test` — 장바구니 계산·수량·저장 데이터 검증

## 구현 기능

상품 검색, 종류별 필터, 맛 비교 상세 팝업, 선물 컬렉션, FAQ, 장바구니 담기·삭제·수량 변경, 같은 브라우저의 장바구니 저장, 배송비 계산, 실제 결제 없는 주문 미리보기. 접근 가능한 Base UI 기반 팝업과 패널, 반응형 레이아웃, 키보드 포커스, 모션 감소 설정을 지원합니다.

## 실제 판매로 전환할 때

현재 브랜드·가격·상품 설명·사진·배송 정책은 시안입니다. 사업자 및 실제 상품 정보, 원산지·필수 표시사항, 배송·반품 정책, 약관·개인정보 정책을 확정하고 결제 서비스와 서버의 주문·재고 관리 기능을 연결해야 합니다. 현재 개인정보는 수집하지 않으며 실제 주문·결제·배송은 발생하지 않습니다. 가격은 클라이언트 예시 데이터로 실제 거래에 사용하면 안 됩니다.

## 이미지

내장 Imagegen으로 제작한 프로젝트 전용 이미지이며 실제 판매 상품을 촬영한 사진은 아닙니다.

- `public/images/hero.png`: Premium Korean honey still life; two ivory-labeled 온꿀 / ONGGUL glass jars, pale gold and amber honey, wooden dipper, honeycomb on ceramic, white wildflowers, beige limestone, warm natural sun and botanical shadows. No UI or promotional text.
- `public/images/catalog.png`: Four equal catalog panels on warm ivory: ACACIA, WILDFLOWER, CHESTNUT jars labeled 온꿀, and two-jar kraft gift box. Consistent realistic studio photography with soft shadows. Displayed through CSS background positioning.
- `public/og.png`: Warm ivory social card, espresso serif 온꿀 and ONGGUL, exact copy 자연의 온기를, 당신의 하루에; honey jar, dipper, and white flowers.

## 검증 범위

프로덕션 빌드, TypeScript, 장바구니 테스트 6개, 로컬 HTTP 응답 확인. 브라우저 시각·클릭 테스트는 수행하지 않았습니다.

지원 브라우저에서 `document.modelContext`를 감지하여 `add_honey_to_cart` 도구를 등록합니다. 실제 결제가 아닌 시연 장바구니 작업이며 일반 UI와 상태를 공유합니다. 현재 환경에는 지원되는 WebMCP 검증 컨텍스트가 없어 이 도구의 등록·실행 계약 검증은 미수행입니다.
