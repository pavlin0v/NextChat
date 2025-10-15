import fs from "fs";
import path from "path";
import { RU_MASKS } from "./ru";

import { type BuiltinMask } from "./typing";

const BUILTIN_MASKS: Record<string, BuiltinMask[]> = {
  ru: RU_MASKS,
};

const dirname = path.dirname(__filename);

fs.writeFile(
  dirname + "/../../public/masks.json",
  JSON.stringify(BUILTIN_MASKS, null, 4),
  function (error) {
    if (error) {
      console.error("[Build] failed to build masks", error);
    }
  },
);
