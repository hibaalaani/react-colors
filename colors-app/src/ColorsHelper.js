import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  //   //Clone starterPalette but override colors
  //   let newPalette = { ...starterPalette, colors: {} };
  //   //Loop original colors
  //   starterPalette.colors.forEach((c) => {
  //     //Loop from -4 (darkest) to +4 (brigthest)
  //     for (let i = -4; i <= 4; i++) {
  //       //Label shades 0 through 8
  //       const shade = (i + 4).toString();
  //       //Produce darker/brighter color with chroma. Multiply i by (3/4) to avoid black and white
  //       const newColor = chroma(c.color).darken(i * (3 / 4));
  //       //Create string for each format
  //       const newColorObj = {
  //         id: `${c.name} ${shade}`,
  //         hex: newColor.hex(),
  //         rgb: newColor.css(),
  //         rgba: newColor.css("rgba"),
  //       };
  //       //Create array inside objects if not present
  //       newPalette.colors[shade] = newPalette.colors[shade] || [];
  //       //Push the new color
  //       newPalette.colors[shade].push(newColorObj);
  //     }
  //   });
  //   return newPalette;

  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newPalette;
}
function getRange(hexColor) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

function getScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}

export { generatePalette };
