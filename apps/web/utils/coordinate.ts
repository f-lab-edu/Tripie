/**
 *
 *  ["37°00′N", "127°30′E"] 와 같이 좌표를 표시하는 continentl을 aws 지도에 맞게
 *  숫자형으로 변환하여 리턴
 */
const dmsToDecimalLatLng = (coords: string[]): number[] => {
  const regex = /^\d+°(?:\s*\d+?[′|'])?[NSEW]$/i; // 숫자(시)(방향)

  // Validate all inputs
  if (!coords.every(coord => regex.test(coord)) || coords.length !== 2) {
    return [];
  }

  const match = coords.map(coord => coord.match(/^(\d+)°(?:\s*(\d+)?[′|'])?([NSEW])$/i));

  if (!match || match.length === 0 || match.every(m => m == null)) {
    return [];
  }

  const coordinates = match.reduce((acc, curr) => {
    if (!curr) return acc;
    let [, degrees, minutes, direction] = curr as string[];
    const decimalDegrees = +(parseInt(degrees, 10) + (minutes ? parseInt(minutes, 10) / 60 : 0)).toPrecision(5);

    // S(남)과 W(서)는 음수
    if (direction?.toUpperCase() === 'S' || direction?.toUpperCase() === 'W') {
      acc.push(-decimalDegrees);
    } else {
      acc.push(decimalDegrees);
    }
    return acc;
  }, [] as number[]);

  const validRange = ([lat, lng]: number[]) => {
    return lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
  };

  if (coordinates.length !== 2 || !validRange(coordinates)) {
    return [];
  }

  return coordinates;
};

export default dmsToDecimalLatLng;
