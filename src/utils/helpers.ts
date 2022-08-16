/* formatToNauticalMiles function receives a distance text like "1.560 m" and format it to nautical miles */

export const formatMiles = (text: string) => {
  const miles = text.split(" ")[0];

  return Math.round(
    miles.includes(".")
      ? +miles.replace(".", "") * 0.868976
      : +miles.replace(",", ".") * 0.868976
  );
};
