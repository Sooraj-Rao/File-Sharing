export const Random = () => {
  let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let small = caps.toLowerCase();
  let total = caps + small;
  let short = "";
  for (let i = 0; i < 7; i++) {
    const ele = Math.floor(Math.random() * total.length);
    short += total.charAt(ele);
  }
  return short;
};
