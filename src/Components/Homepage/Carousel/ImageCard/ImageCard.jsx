import React from "react";
import { Image, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import { DataContext } from "../../../../Contexts/DataContext";
export default function ImageCard() {
  const { imageItemData1 } = useContext(DataContext);
  return (
    <>
      <Stack direction="row" style={{ margin: "25px auto", width: "90%" }}>
        {imageItemData1?.map((item) => (
          <Image
            boxSize="120px"
            objectFit="cover"
            src={item.img}
            alt={item.title}
            style={{ borderRadius: "4px", border: "1px solid #ccc" }}
          />
        ))}
      </Stack>
    </>
  );
}
