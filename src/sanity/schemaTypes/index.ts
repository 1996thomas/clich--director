import { type SchemaTypeDefinition } from "sanity";
import { film } from "./filmType";
import { photography } from "./photographyType";
import { tag } from "./tagType";
import { settings } from "./settingsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [film, photography, tag, settings],
};
