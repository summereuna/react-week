/**
 * \n으로 작성된 새 줄 문자열을 br요소로 변환하여 텍스트 문자열 형식으로 포맷하는 함수
 * @param {string} text - 포맷할 텍스트
 * @returns {React.ReactNode} br요소로 포맷된 텍스트
 */
const formatNewLineText = (text: string) => {
  return text.split("\n").map((line, index) => (
    <div key={index}>
      {line}
      <br />
    </div>
  ));
};

export default formatNewLineText;
