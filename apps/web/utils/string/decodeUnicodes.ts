/**
 * 트리플 앱에서 스크래핑해온 문자열 데이터를 포멧팅
 * */
function decodeUnicodes(input: string): string {
  return input
    .replace(/u([0-9A-Fa-f]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replaceAll('트리플', 'Tripie')
    .replaceAll('트리플', 'Tripie')
    .replaceAll('n-', '\n-')
    .replaceAll('n✔️', '\n✔️')
    .replaceAll('.n', '.\n')
    .replaceAll('n·', '\n·');
}

export default decodeUnicodes;
