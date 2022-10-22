import { InfoTxt } from "./InfoTxt";
import { Grid, GridItem, Image } from "@chakra-ui/react";
export function Info() {
  return (
    <div>
      <Grid templateColumns={["1fr", "1fr", "1fr 1fr 1fr"]} gap={20}>
        <GridItem colSpan={1}>
          <InfoTxt />
        </GridItem>
        <GridItem colSpan={2}>
          <Image
            src="./imgs/InfoImg.png"
            fallbackSrc="./imgs/fall.jpg"
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </GridItem>
      </Grid>
    </div>
  );
}
