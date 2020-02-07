<h1 align="center">Welcome to meditation 👋</h1>
<p>
  <a href="https://meditation-for-developer.firebaseapp.com/" target="_blank">
    <img alt="Version" src="https://img.shields.io/badge/meditation-0.1.0-green">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Simple Angular Meditation Application 

### ✨ [Demo](https://meditation-for-developer.firebaseapp.com)

## Feature

* 바닷소리, 빗소리, 기차 통근 소리, 가위로 머리자르는 소리
* 다크모드 지원

## Todo

* Welcome 컴포넌트 삭제 - WOW페이지 빠르게 접근
* 비디오를 background에서 보이도록 수정 - 모바일환경에서 특히 불편
* 회원가입, 로그인 기능 구현 - firebase authentication 사용
* 사용자인증 구현 후, 지난 소리조합 불러오기, 가장 많이 듣는 소리를 볼 수 있도록 통계 탭 추가

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Release Note
0.1.1
* 사운드 아이콘 전면 교체

0.1.0
* mp4 비디오 기능 삭제
* 동시에 여러 오디오를 중첩시켜 청취할 수 있도록 변경
* 오디오 반복재생하도록 수정
* 기차 통근 소리, 가위로 머리자르는 소리, 겨울바다 파도소리, 여름 해변 추가 / 파도 소리 삭제

0.0.3
* 로그인 및 로그아웃 (더미) 테스트 및 라우팅 처리
* Angular CanActivate 가드 사용 -> 미로그인 시 명상 탭 접근 권한 검사

0.0.2
* 다크모드 추가

0.0.1
* 모바일 환경 대응
* 빗소리 / 바닷소리 오디오 및 비디오 추가
