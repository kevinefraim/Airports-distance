export const formatMiles = (text: string) => {
  const miles = text.split(" ")[0];

  return Math.round(
    miles.includes(".")
      ? +miles.replace(".", "") * 0.868976
      : +miles.replace(",", ".") * 0.868976
  );
};
