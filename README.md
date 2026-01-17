# Tripie ✈️

<p align="center">
<a href="https://tripie-mauve.vercel.app/">
<img width="168"  alt="image"  src="https://github.com/user-attachments/assets/cb57b080-d5ed-468f-ac23-56ffb6c47eec"/></a>
</div>
</p>

<img width="1146" alt="image" src="https://github.com/user-attachments/assets/84a9202f-c288-4aab-bb03-0aeda59f8ca8" />

## Table of Content

- [Introduction](https://github.com/Pyotato/Tripie?tab=readme-ov-file#introduction)
- [Features](https://github.com/Pyotato/Tripie?tab=readme-ov-file#features)
- [Demo](https://github.com/Pyotato/Tripie?tab=readme-ov-file#-%EB%8D%B0%EB%AA%A8-%EC%98%81%EC%83%81-%EB%B3%B4%EA%B8%B0)
- [Screenshots](https://github.com/Pyotato/Tripie?tab=readme-ov-file#screenshots)
- [Development Process](https://github.com/Pyotato/Tripie?tab=readme-ov-file#development-process)

### Introduction

| Description                      | Techs                                                                                                                                                                                                                                                                                |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Front                            | ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white) ![Reactjs](https://shields.io/badge/react-black?logo=react&style=flat) ![Nextjs](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white&style=flat) |
| State management & data fetching | ![Tanstack Query](https://img.shields.io/badge/-tanstack%20Query-FF4154?style=flat&logo=react%20query&logoColor=white) ![ky badge](https://img.shields.io/badge/ky-red.svg)                                                                                                          |
| Build & Deployment               | ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white)                                                                                                                                                                                  |
| Version Control                  | ![Turborepo](https://img.shields.io/badge/-Turborepo-EF4444?style=flat&logo=turborepo&logoColor=white&style=flat)                                                                                                                                                                    |
| Testing                          | ![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=fff&style=flat) ![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=fff&style=flat)                                                                                       |
| Styling                          | ![Sass Badge](https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff&style=for-the-badge&style=flat) ![motion framer](https://img.shields.io/badge/Framer-05F?logo=framer&logoColor=fff&style=flat)                                                                           |
| APIs                             | ![Aws](https://img.shields.io/badge/AWS-%23FF9900.svg?logo=amazon-web-services&logoColor=white&style=flat) ![openai](https://img.shields.io/badge/ChatGPT-74aa9c?logo=openai&logoColor=white&style=flat)                                                                             |
| Database                         | ![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black&style=flat) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white&style=flat)                                              |

<b>Tripie(트리피)는 다음과 같은 기능을 제공합니다.</b>

- `비로그인` : 트리플에서 웹스크래핑한 여행 지역에 대한 팁 (여행 지역, 일정, 장소 및 음식점 정보)
- `로그인` : github 또는 카카오로 로그인 시 챗지피티 기반의 여행 일정을 추천받을 수 있습니다.

### Features

<!--
#### 📼 데모 영상 보기

[![Watch the video](https://github.com/user-attachments/assets/19ddf60c-8c43-4ef0-9761-53caab4d8752)](https://www.youtube.com/watch?v=1u26NxKxHNQ)
-->

#### Screenshots

##### 랜딩 페이지 : 트리피 서비스에 대한 설명과 링크

<img width="1146" alt="image" src="https://github.com/user-attachments/assets/1596b195-3c67-4dae-a0c9-d230b3b5d076" />

- `/#Process` : 여행 일정 서비스 이용할 떼 지역 > 나라 > 도시 > 기간 > 동행자 > 여행 스타일 순으로 선택 시 예시 여행 일정 흐름을 보여줍니다.

  - <img width="1146" alt="image" src="https://github.com/user-attachments/assets/e8d2bec8-3740-4518-b7ec-24c0ad39df47" />
  - <img width="1146" alt="image" src="https://github.com/user-attachments/assets/51c4ae54-f7a3-4d21-9e18-d9e05225b24c" />
  - <img width="1146" alt="image" src="https://github.com/user-attachments/assets/b88b7e3f-be69-43c6-85f2-cca36d4c906a" />
  - <img width="1146" alt="image" src="https://github.com/user-attachments/assets/7fc12ff1-1ad1-47e7-bd37-2e1e5ac66407" />

- `/#Sevices` : 서비스 중 여행지에 대한 팁을 "도시별 여행 정보"에서 확인할 수 있습니다. 보여질 나라는 랜덤으로 선택됩니다.

  - <img width="1146" alt="image" src="https://github.com/user-attachments/assets/58b1dcda-6eff-45d8-bfe5-b581f4ba7fc4" />

- `/#our work` : (더미) 업적

  - <img width="1146" alt="image" src="https://github.com/user-attachments/assets/76ac84d7-0288-4a3c-a666-cf2d2c71c847" />

- `/#plans` : (더미) 구독 시 서비스

  - <img width="1146" alt="image" src="https://github.com/user-attachments/assets/b746c7c7-3bbb-4098-b98b-fdb976396f73" />

- `/#Contacts` : 관리자 이메일 연락, 클릭 시 메일을 보낼 수 있습니다.

  - <img width="1146" alt="image" src="https://github.com/user-attachments/assets/23c45faa-9d41-4517-856a-b19543fef2a4" />
  - <img width="1146" alt="image" src="https://github.com/user-attachments/assets/019ebd8e-087e-4659-a830-29f774dc7a67" />

- <a href='https://tripie-mauve.vercel.app/regions'>여행 정보 페이지</a> : 트리플 앱에서 스크래핑한 여행 정보와 팁, SEO를 위해 메타태그 설정이 되어 있습니다. (공유 시 해당 og 정보로 공유)
  - `/regions` : <a href="https://tripie-mauve.vercel.app/regions/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD"></a>
    - <img width="1153" alt="image" src="https://github.com/user-attachments/assets/3b016698-9372-4049-a69f-be5682ae40fb" />
  - `/regions/대한민국` : <a href="https://tripie-mauve.vercel.app/regions/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD">대한민국</a> 선택시
    <img width="1153" alt="image" src="https://github.com/user-attachments/assets/1bd7da2f-6104-48f3-9b2e-bb136f4c98d9" />
  - `/regions/대한민국/location/제주도 ID` : <a href="https://tripie-mauve.vercel.app/regions/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD/location/759174cc-0814-4400-a420-5668a0517edd">대한민국, 제주도</a> 선택시
    <img width="1153" alt="image" src="https://github.com/user-attachments/assets/329f0343-adb0-4051-9795-8516ca7c0dc0" />

##### 여행 정보 상세 페이지

- 여행 정보 상세 페이지 (`regions/지역ID/articles/기사ID`):
  - <a href='https://tripie-mauve.vercel.app/regions/759174cc-0814-4400-a420-5668a0517edd/articles/841db340-ffb6-4774-8265-45f559f37e2b'>제주 여행 코스 짜는 방법</a> 카드를 클릭하면 해당 게시물 페이지로 이동합니다.
    - 여행 일정에 대한 정보가 포함될 시, 다음과 같이 카드와 지도로 해당 위치에 대한 정보를 확인할 수 있습니다.
      <img width="1153" alt="image" src="https://github.com/user-attachments/assets/39a938b0-47b1-4238-82a9-3b034c682a99" />
      <img width="1153" alt="image" src="https://github.com/user-attachments/assets/1f6768c5-539f-4243-9982-afdadc75ad5c" />
  - 여행 정보 상세 페이지 : <a href='https://tripie-mauve.vercel.app/regions/759174cc-0814-4400-a420-5668a0517edd/articles/80d42ed4-2f18-43a0-90a5-5b09e6e4ee17'>여름 제주 인생샷 명소 BEST 7</a> 카드를 클릭하면 해당 게시물 페이지로 이동합니다.
    - 이미지가 여러 개일 경우 캐로솔로 제공됩니다. 버튼과 스크롤로 동작합니다.
      <img width="1153" alt="image" src="https://github.com/user-attachments/assets/91993428-257c-4a5e-af69-f9a1dc839071" />
- 여행 (식당) 정보 상세 페이지 (`regions/지역ID/restaurants/기사ID`):
  - <a href='https://tripie-mauve.vercel.app/regions/1f08fbaf-be2c-4766-a64c-18af53649282/restaurants/48097ef1-64f3-4d69-9133-38623b942589'>오쇼쿠지도코로 이마킨</a>와 같은 음식점 링크를 타고 가면
    - 해당 장소의 사진과 메뉴 등의 정보,
      <img width="1153" alt="image" src="https://github.com/user-attachments/assets/f2e0a8d1-2b15-46cf-afe9-01f567a4b6d1" />
      <img width="1153" alt="image" src="https://github.com/user-attachments/assets/4b11a52b-7dd0-46b6-8c54-9e11e90cb71d" />
    - 전화번호나 웹사이트 등의 기본 정보,
      <img width="1153" alt="image" src="https://github.com/user-attachments/assets/4f56f93c-7ac5-4d88-b010-054756839b38" />
    - 팁, 휴무일, 이용 팁, 가는 방법 등의 정보를 보여줍니다.
      <img width="1153" alt="image" src="https://github.com/user-attachments/assets/c4a64daa-7b1d-4309-8d3b-5bcf6a25cf9e" />
    - 소셜 리뷰
      <img width="1153" alt="image" src="https://github.com/user-attachments/assets/531132d4-522d-4e78-8656-b1a8df5bd26d" />

##### 여행 일정 추천 페이지

- 챗지피티를 활용해 여행 일정을 짜주고 해당 여행 일정을 지도에서 설명과 함께 확인 가능합니다. 퍼널 구조를 활용해 구현했습니다.

  - 네비게이션에서 `AI추천 맞춤 일정` 클릭 시, 새로운 탭에서 페이지가 열립니다.
    <img width="1153" alt="image" src="https://github.com/user-attachments/assets/122e44d0-4a3b-4321-9460-d35b85812fc9" />
    <img width="1153" alt="image" src="https://github.com/user-attachments/assets/9d69b8a2-dd70-44f0-af85-099001afbcb5" />

- `지역 (region)` > 아시아 선택 시 (`/trip-planner?trip-plan.step=CONTINENT`)

  - <img width="1153" alt="image" src="https://github.com/user-attachments/assets/f7581cda-bdb2-4354-a3ae-61ecf98f8113" />

- `나라 (country)` > 싱가포르 선택시 (`/trip-planner?trip-plan.step=COUNTRY `)

  - <img width="1153" alt="image" src="https://github.com/user-attachments/assets/d7968d16-c679-41cb-91ea-de5cab59cad5" />

- `도시 (city)` > 전체 선택시 (`/trip-planner?trip-plan.step=CITY`)

  - <img width="1153" alt="image" src="https://github.com/user-attachments/assets/28fdf58d-8d75-4916-b605-a1195312e45f" />

- `기간 (duration)` > (시작: 3/5/2025 12:00:00 PM, 끝: 3/6/2025 11:59:59 PM) 선택 시 (`/trip-planner?trip-plan.step=DURATION`)

  - <img width="1153" alt="image" src="https://github.com/user-attachments/assets/66877944-b13f-45ab-9b5f-9570552bda28" />

- `동반 (companion)` > 친구와 선택 시 (`/trip-planner?trip-plan.step=COMPANION`)

  - <img width="1153" alt="image" src="https://github.com/user-attachments/assets/66877944-b13f-45ab-9b5f-9570552bda28" />

- `여행 테마 (preference)` > SNS 핫플레이스, 관광보다 먹방, 여행지 느낌 물씬, 유명 관광지는 필수 선택 시 (`/trip-planner?trip-plan.step=PREFERENCE`)

  - <img width="1153" alt="image" src="https://github.com/user-attachments/assets/f7313db2-9a6f-4123-97f8-d90ca54ba9f8" />

- 선택 로딩 화면 (임시, 수정 예정)

  - <img width="1153" alt="image" src="https://github.com/user-attachments/assets/6ae12714-7e31-474e-8e00-1fdb5f0509cc" />

- 여행 일정
  <img width="1153" alt="image" src="https://github.com/user-attachments/assets/d1234890-09c5-40e5-9b0e-66d28d6adb54" />

- 여행 일정 (1일)
  <img width="1153" alt="image" src="https://github.com/user-attachments/assets/a05a2a08-a9f3-469f-8456-a626a87a8954" />

- 여행 일정 (2일)
  <img width="1153" alt="image" src="https://github.com/user-attachments/assets/8f632f8f-5a0d-4b48-b096-da60ebbd984b" />

- 링크 클릭시 구글 검색결과가 새로운 창으로 열어집니다.
  <img width="1153" alt="image" src="https://github.com/user-attachments/assets/01a0d214-be84-448a-ba3e-b70834bf2e72" />
  <img width="959" alt="image" src="https://github.com/user-attachments/assets/ba5280bc-489a-4db1-885e-72205b8275db" />

- <a href='https://tripie-mauve.vercel.app/trip-planner/2025-03-04T16:40:37.887Z-cm64hcr040000qyrjxkk6xynx'> 👉 해당 여행 일정 보기</a>
  - 비로그인 혹은 만든이의 일정이 아닌 경우, 공유는 가능하나 `로그인하고 일정 추천받아보기` 혹은 해당 유저의 사용 정보가 나옵니다.
    <img width="1154" alt="image" src="https://github.com/user-attachments/assets/1e7b33e4-18f9-464b-a769-b2b6a2685068" />

#### 에러 페이지들

- <a href="https://tripie-mauve.vercel.app/trip-planner/not-enough-tokens">여행 일정 토큰을 모두 사용했을 경우, </a>
  <img width="1154" alt="image" src="https://github.com/user-attachments/assets/c63c1d45-72d5-4a74-b02b-67a182145fa4" />
- 500 에러
  <img width="1154" alt="image" src="https://github.com/user-attachments/assets/1c072401-3050-4f16-b600-57b24f3d804c" />
- 404 에러
  <img width="1154" alt="image" src="https://github.com/user-attachments/assets/6452f2d4-e400-406b-b504-b68246932b4f" />

### 테스트 계정

로그인 테스트 계정
아이디 : test
비밀번호 = test12345!

### Development Process

<!-- - 자세한 구현 과정은 [블로그](https://pyotato-dev.tistory.com/entry/spotify-api-VINYLIFY-%EC%8A%A4%ED%8F%AC%ED%8B%B0%ED%8C%8C%EC%9D%B4-api%ED%99%9C%EC%9A%A9%ED%95%9C-%EA%B2%80%EC%83%89-%EC%9E%AC%EC%83%9D-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8)에서 살펴보실 수 있습니다. (업데이트 중, COMING SOON!)
- [1탄 : spotify dev 계정 만들기](https://pyotato-dev.tistory.com/entry/spotify-api-VINYLIFY-%EC%8A%A4%ED%8F%AC%ED%8B%B0%ED%8C%8C%EC%9D%B4-api%ED%99%9C%EC%9A%A9%ED%95%9C-%EA%B2%80%EC%83%89-%EC%9E%AC%EC%83%9D-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B81-%EC%A4%80%EB%B9%84%EB%AC%BCspotify-dev-%EA%B3%84%EC%A0%95-application)
- [2탄 : spotify api authorization 담당 서버(1) vercel로 배포](https://pyotato-dev.tistory.com/entry/spotify-api-VINYLIFY-%EC%8A%A4%ED%8F%AC%ED%8B%B0%ED%8C%8C%EC%9D%B4-api%ED%99%9C%EC%9A%A9%ED%95%9C-%EA%B2%80%EC%83%89-%EC%9E%AC%EC%83%9D-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B82-%EC%A4%80%EB%B9%84%EB%AC%BC-authorization%EC%9D%84-%EB%8B%B4%EB%8B%B9%ED%95%A0-%EC%84%9C%EB%B2%84)
- [3탄 : spotify api authorization 담당 서버(2) 코드 작성](https://pyotato-dev.tistory.com/entry/spotify-api-VINYLIFY-%EC%8A%A4%ED%8F%AC%ED%8B%B0%ED%8C%8C%EC%9D%B4-api%ED%99%9C%EC%9A%A9%ED%95%9C-%EA%B2%80%EC%83%89-%EC%9E%AC%EC%83%9D-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B83-%EC%A4%80%EB%B9%84%EB%AC%BC-authorization%EC%9D%84-%EB%8B%B4%EB%8B%B9%ED%95%A0-%EC%84%9C%EB%B2%84-%EC%BD%94%EB%93%9C)
- [4탄 : eslint + prettier + commitlint 설정 (+husky)](https://pyotato-dev.tistory.com/entry/spotify-api-VINYLIFY-%EC%8A%A4%ED%8F%AC%ED%8B%B0%ED%8C%8C%EC%9D%B4-api%ED%99%9C%EC%9A%A9%ED%95%9C-%EA%B2%80%EC%83%89-%EC%9E%AC%EC%83%9D-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B84-eslint-prettier-commitlint-%EC%84%A4%EC%A0%95-husky)
- [5탄 : react router 설정](https://pyotato-dev.tistory.com/entry/spotify-api-VINYLIFY-%EC%8A%A4%ED%8F%AC%ED%8B%B0%ED%8C%8C%EC%9D%B4-api%ED%99%9C%EC%9A%A9%ED%95%9C-%EA%B2%80%EC%83%89-%EC%9E%AC%EC%83%9D-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B85-react-router-%EC%84%A4%EC%A0%95)
- [6탄 : tanstack query 설정](https://pyotato-dev.tistory.com/entry/spotify-api-VINYLIFY-%EC%8A%A4%ED%8F%AC%ED%8B%B0%ED%8C%8C%EC%9D%B4-api%ED%99%9C%EC%9A%A9%ED%95%9C-%EA%B2%80%EC%83%89-%EC%9E%AC%EC%83%9D-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B86)
- [7탄 : sentry 설정](https://pyotato-dev.tistory.com/entry/spotify-api-VINYLIFY-%EC%8A%A4%ED%8F%AC%ED%8B%B0%ED%8C%8C%EC%9D%B4-api%ED%99%9C%EC%9A%A9%ED%95%9C-%EA%B2%80%EC%83%89-%EC%9E%AC%EC%83%9D-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B87-Sentry-%EC%84%A4%EC%A0%95)
-->
