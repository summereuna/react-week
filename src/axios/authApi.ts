import { getCookie, removeCookie } from "@/utils/cookie";
import axios from "axios";

const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true, // 현재 api에서는 사용 불가
});

// 요청 보내기 전
authApi.interceptors.request.use(
  (config) => {
    const token = getCookie("accessToken");

    //토큰 있는 경우, 즉 로그인 된 경우에만 인가 설정
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 받기 전
authApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    //토큰 만료시간 확인해보니 60분임
    //만료되면 메세지 띄우고 쿠키 삭제하기 / 일단 쿠키도 60분으로 설정해 두긴함
    //로컬 스토리지에 저장해둔 아이디도 함께 삭제해서 로그인 풀리게
    const token = getCookie("accessToken");

    if (
      !token &&
      error.response.status === 401 &&
      error.response.data.message ===
        "토큰이 만료되었습니다. 다시 로그인 해주세요." //이거 포함하면 로그인 인증 에러랑 분기 처리 가능
    ) {
      const { message } = error.response.data;
      alert(message);
      localStorage.removeItem("USER_ID");
      removeCookie("accessToken", { path: "/" });
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default authApi;

//CORS는 기본적으로 보안상의 이유로 쿠키를 request로 보낼 수 없도록 설계되었다.
//하지만, 다른 도메인을 가진 API 서버에 자신을 인증해야 하는 정상적인 응답을 받을 수 있는 상황에서는 쿠키를 통한 인증이 필요하므로, 해당 설정 해줘야함
//그리고 헤더에 자동으로 쿠키 넣기 위함도 있음
//하지만!! 지금 상태에서 withCredentials: true는 사용 불가!!! cors 오류 !!
//예예.. cors 오류 안뜨게 도메인 허용하는 설정을 백엔드에서 해줘야 하는데 현재 백엔드에서 설정을 바꿀 수 없는 api 사용중이다 보니 이건 못쓴다.
//HTTPOnly도 마찬가지로 못씀 ^_^ 나중에 프로젝트 주차에서 사용해보도록 하자~
