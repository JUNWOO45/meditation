<h1 align="center">Welcome to meditation 👋</h1>
<p>
  <a href="https://meditation-for-developer.firebaseapp.com/" target="_blank">
    <img alt="Version" src="https://img.shields.io/badge/meditation-0.0.3-brightgreen">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Simple Angular Meditation Application 

### ✨ [Demo](https://meditation-for-developer.firebaseapp.com)

## Feature

* 바닷소리, 빗소리 명상
* 다크모드 지원

## Todo

* Welcome 컴포넌트 삭제 - WOW페이지 빠르게 접근
* 비디오를 background에서 보이도록 수정 - 모바일환경에서 특히 불편
* 회원가입, 로그인 기능 구현 - firebase authentication 사용
* 사용자인증 구현 후, 지난 명상 or 통계 탭 구현

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Release Note
0.0.3
* 로그인 및 로그아웃 (더미) 테스트 및 라우팅 처리
* Angular CanActivate 가드 사용 -> 미로그인 시 명상 탭 접근 권한 검사

0.0.2
* 다크모드 추가

0.0.1
* 모바일 환경 대응
* 빗소리 / 바닷소리 오디오 및 비디오 추가
