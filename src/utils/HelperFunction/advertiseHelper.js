import { ADVERTISE_EMENTITIES, FILTERBAR_HOMETYPE, PARKING_TYPE } from "../Constants/global";

export function propertyTypeNameHandler(value) {
  const selectedOption = FILTERBAR_HOMETYPE.find((option) => option.value === value);
  return selectedOption ? selectedOption.label : "Unknown";
}
export function parkingTypeNameHandler(value) {
  const selectedOption = PARKING_TYPE.find((option) => option.value === value);
  return selectedOption ? selectedOption.label : "Unknown";
}
export function amenitiesHandler(values) {
  let temp = [];
  values?.map((value) => {
    const selectedOption = ADVERTISE_EMENTITIES.find((option) => option.id === value);
    if (selectedOption) {
      temp.push(selectedOption.label);
    }
  });
  return temp;
}
