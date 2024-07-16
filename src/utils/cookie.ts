import { Cookies } from "react-cookie";

const cookies = new Cookies();

interface CookieOptions {
  path?: string;
  domain?: string;
  maxAge?: number;
  expires?: Date;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
}

export const setCookie = (
  name: string,
  value: string,
  options?: CookieOptions
) => {
  return cookies.set(name, value, options);
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

//removeCookie에서는 setCookie에서 저장한 모든 내용을 지워야 하기 때문에 key와 options을 꼭 받아 와야 한다.
export const removeCookie = (name: string, options?: CookieOptions) => {
  return cookies.remove(name, options);
};

//쿠키 옵션
// path: 쿠키의 유효 경로
// domain: 쿠키의 유효 도메인
// maxAge: 쿠키의 만료 시간 (초 단위)
// expires: 쿠키의 만료 날짜 (Date 객체)
// secure: HTTPS 연결에서만 쿠키 전송 여부
// sameSite: 쿠키의 SameSite 정책 설정
// - sameSite: Lax
// 쿠키가 크로스 사이트 요청과 함께 전송되는 방식을 제어
//사용자가 직접 행동을 취한 경우에만 쿠키를 전송합니다.(내가 getCookie로 받아오기 위함)
//CSRF 공격에 대한 보호를 강화하는 설정
