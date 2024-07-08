interface AiData {
  contextItemIndex: string;
  Day: string;
  Time: string;
  Activity: string;
  City: string;
  Type: string;
  Comments: string;
}
interface AiTable {
  data: AiData[];
}
interface Data {
  title: string;
  description: string;
}
interface RecommendedHotel {
  data: Data[];
}
interface RecommendedTour {
  data: Data[];
}

interface ParsedResult {
  ai_table: AiTable;
  recommended_hotels: RecommendedHotel;
  recommended_tours: RecommendedTour;
}

export const formatToJSON = (input: string): ParsedResult => {
  let cleanInput = input
    .replaceAll(/"""/g, "")
    .replace(/header\s+/g, "")
    .trim();

  // Split the input by sections
  const sections = cleanInput.split("ai_cards");

  // Parse the ai_table section
  const aiTableSection = sections[0]
    .split("ai_table")[1]
    .trim()
    .replace("Recommended Hotels", "");

  // return aiTableSection;
  const aiTableJSON = JSON.parse(aiTableSection);

  // Parse the recommended hotels section
  const recommendedHotelsSection = sections[1]
    .trim()
    .replace("Recommended Tours", "");
  const recommendedHotelsJSON = JSON.parse(recommendedHotelsSection);

  // Parse the recommended tours section
  const recommendedToursSection = sections[2].trim();
  const recommendedToursJSON = JSON.parse(recommendedToursSection);

  return {
    ai_table: aiTableJSON,
    recommended_hotels: recommendedHotelsJSON,
    recommended_tours: recommendedToursJSON,
  };
};
