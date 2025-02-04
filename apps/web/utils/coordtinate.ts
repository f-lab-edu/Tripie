/**
 *
 *  ["37°00′N", "127°30′E"] 와 같이 좌표를 표시하는 continentl을 aws 지도에 맞게
 *  숫자형으로 변환하여 리턴
 */
const dmsToDecimal = (coords: string[]): number[] => {
  const regex = /(\d+)°(\d+)[′|']([NSEW])/i;
  const match = coords.map(coord => coord.match(regex));

  if (!match || match.length === 0 || match[0] == null) {
    return [];
  }

  const coordinates = match.reduce((acc, curr) => {
    let [, degrees, minutes, direction] = curr as string[];
    const decimalDegrees = +(parseInt(degrees, 10) + (minutes ? parseInt(minutes, 10) / 60 : 0)).toPrecision(5);

    // S(북)과 W(서)는 음수
    if (direction?.toUpperCase() === 'S' || direction?.toUpperCase() === 'W') {
      acc?.push(-decimalDegrees);
    } else {
      acc?.push(decimalDegrees);
    }
    return acc;
  }, [] as number[]);

  return coordinates;
};

export default dmsToDecimal;
