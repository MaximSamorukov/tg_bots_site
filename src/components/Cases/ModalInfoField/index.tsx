import type { ITGBot } from "@/types";
import React from "react";
import { RequestComponent } from "./components/RequestComponent";
import { DownloadDocsComponent } from "./components/DownloadDocsComponent";
import { ImagesPreviewComponent } from "./components/ImagesPreview";
import { ConditionsComponent } from "./components/ConditionsComponent";
import { RequirementsComponent } from "./components/RequirementsComponent";
import { StackComponent } from "./components/StackComponent";
import { ArchitectureComponent } from "./components/ArchitectureComponent";
import { TitleComponent } from "./components/TitleComponent";
import { DescriptionComponent } from "./components/DescriptionComponent";

type ModalInfoFieldPropsType = {
  type:
    | "paragraph"
    | "title"
    | "images"
    | "architecture"
    | "stack"
    | "requirements"
    | "conditions"
    | "request"
    | "download_docs";
  data: ITGBot["fullData"];
};

export const ModalInfoField: React.FC<ModalInfoFieldPropsType> = ({
  type,
  data,
}) => {
  switch (type) {
    case "architecture":
      return <ArchitectureComponent architecture={data.architecture} />;

    case "title":
      return <TitleComponent title={data.title} />;

    case "paragraph":
      return <DescriptionComponent description={data.description} />;

    case "stack":
      return <StackComponent stack={data.stack} />;

    case "requirements":
      return <RequirementsComponent requirements={data.requirements} />;

    case "conditions":
      return <ConditionsComponent conditions={data.conditions} />;

    case "request":
      return <RequestComponent />;

    case "download_docs":
      return <DownloadDocsComponent />;

    case "images":
      return <ImagesPreviewComponent images={data.images} />;

    default:
      return null;
  }
};
