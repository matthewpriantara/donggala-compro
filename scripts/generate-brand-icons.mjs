import { ImageResponse } from "next/og.js";
import { createElement } from "react";
import { readFile, writeFile } from "node:fs/promises";
const logo = await readFile(
  new URL("../public/images/donggala-logo-mark.png", import.meta.url),
);
for (const [name, size] of [
  ["icon", 32],
  ["apple-icon", 180],
]) {
  const image = new ImageResponse(
    createElement(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          background: "#041d2a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "18%",
        },
      },
      createElement("img", {
        src: `data:image/png;base64,${logo.toString("base64")}`,
        width: size * 0.75,
        height: size * 0.85,
      }),
    ),
    { width: size, height: size },
  );
  const bytes = new Uint8Array(await image.arrayBuffer());
  await writeFile(new URL(`../app/${name}.png`, import.meta.url), bytes);
  console.log(`${name}.png: ${bytes.length} bytes`);
}
