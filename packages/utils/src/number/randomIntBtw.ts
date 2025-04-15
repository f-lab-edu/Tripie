/** start (default 8) 와 end(default 15)  사이 랜던 숫자*/
const randomIntBtw = (start = 8, end = 15) => {
  // 시작과 끝이 같다면 해당 숫자 리턴
  if (start === end) {
    return start;
  }

  // 소수점 자리들은 버린다.
  const roundedStart = Math.floor(start);
  const roundedEnd = Math.floor(end);

  // 두 수 모두 음수 일 경우
  if (start < 0 && end < 0) {
    const maxNum = Math.max(Math.abs(roundedStart), Math.abs(roundedEnd));
    const minNum = Math.min(Math.abs(roundedStart), Math.abs(roundedEnd));
    return -(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    // 두 수 모두 양수
  } else if (start >= 0 && end >= 0) {
    const maxNum = Math.max(roundedStart, roundedEnd);
    const minNum = Math.min(roundedStart, roundedEnd);
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  }
  // 한 수만 음수일 경우
  const [minNum, maxNum] = [roundedStart, roundedEnd].sort();
  const arr = Array.from({ length: maxNum - minNum }, (_, i) => minNum + i);
  // 랜덤 배열의 인덱스
  const index = Math.floor(Math.random() * (arr.length - 0 + 1)) + 0;
  return arr[index];
};
export default randomIntBtw;
