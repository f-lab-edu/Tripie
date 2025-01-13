export function decodeUnicodes(input: string) {
  return input
    .replace(/u([0-9A-Fa-f]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replaceAll('트리플', 'Tripie')
    .replaceAll('트리플', 'Tripie')
    .replaceAll('n-', '\n-')
    .replaceAll('n✔️', '\n✔️')
    .replaceAll('.n', '.\n')
    .replaceAll('n·', '\n·');
}
