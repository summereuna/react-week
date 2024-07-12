import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@redux/config/configStore";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// RootState 및 AppDispatch 유형을 각 구성 요소로 가져올 수 있지만 애플리케이션에서 사용할 useDispatch 및 useSelector 후크의 형식화된 버전을 만드는 것이 더 좋습니다. 이는 다음과 같은 몇 가지 이유로 중요합니다.
// - useSelector의 경우 매번 (상태: RootState)를 입력할 필요가 없어집니다.
// - useDispatch의 경우 기본 Dispatch 유형이 Thunk에 대해 모릅니다. Thunk를 올바르게 디스패치하려면 Thunk 미들웨어 유형이 포함된 스토어에서 특정 맞춤형 AppDispatch 유형을 사용하고 Dispatch를 사용하여 해당 유형을 사용해야 합니다. 미리 입력된 useDispatch 후크를 추가하면 필요한 곳에 AppDispatch를 가져오는 것을 잊어버릴 수 있습니다.
// 이들은 유형이 아닌 실제 변수이므로 스토어 설정 파일이 아닌 app/hooks.ts와 같은 별도의 파일에 정의하는 것이 중요합니다. 이를 통해 후크를 사용해야 하는 모든 구성 요소 파일로 가져올 수 있으며, 잠재적인 순환 가져오기 종속성 문제를 피할 수 있습니다.

// https://redux-toolkit.js.org/tutorials/typescript
