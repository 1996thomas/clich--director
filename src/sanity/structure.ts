import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        type: "film",
        title: "Filmographie",
        S,
        context,
        createIntent: true,
      }),
      S.documentTypeListItem("photography").title("Photos"),
      S.documentTypeListItem("setting").title("Settings"),
    ]);
