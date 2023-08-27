"use client";
import { Card, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import * as ItemData from "../../../item-data.json";

const ItemDataArray = Object.values(ItemData);

export default function ItemPage({ params: { id } }: any) {
  const theme = useTheme();

  const mormd = useMediaQuery(theme.breakpoints.up("md"));
  const morsm = useMediaQuery(theme.breakpoints.up("sm"));

  const { name, src } = ItemDataArray[id - 1];
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <Card
        style={{
          margin: 24,
          marginBottom: 24,
          borderRadius: 4,
          display: "inline-block",
          textAlign: "center",
          maxWidth: 800,
        }}
      >
        <Grid container columns={12}>
          <Grid item xs={12} sm={4}>
            <img
              width="100%"
              src={src}
              loading="lazy"
              style={{
                marginLeft: mormd ? 32 : morsm ? 12 : 0,
                marginTop: mormd ? 32 : morsm ? 12 : 0,
                borderRadius: morsm ? 16 : 4,
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: mormd ? 80 : morsm ? 30 : 20,
              paddingRight: mormd ? 80 : morsm ? 30 : 20,
            }}
          >
            <Typography
              style={{ marginTop: 24 }}
              textAlign="center"
              variant="h6"
            >
              {name}
            </Typography>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                marginLeft: 32,
                marginRight: 32,
              }}
            >
              <Typography fontWeight="" variant="body1">
                موجودی:
              </Typography>
              <Typography fontWeight="bold" variant="body1">
                10
              </Typography>
            </div>

            <Typography padding={1} variant="body1">
              یک متن که قرار است انقدر طولانی باشد تا چندین خط شود. یک متن که
              قرار است انقدر طولانی باشد تا چندین خط شود. یک متن که قرار است
              انقدر طولانی باشد تا چندین خط شود. یک متن که قرار است انقدر طولانی
              باشد تا چندین خط شود. یک متن که قرار است انقدر طولانی باشد تا
              چندین خط شود یک متن که قرار است انقدر طولانی باشد تا چندین خط شود.
              یک متن که قرار است انقدر طولانی باشد تا چندین خط شود. یک متن که
              قرار است انقدر طولانی باشد تا چندین خط شود. یک متن که قرار است
              انقدر طولانی باشد تا چندین خط شود. یک متن که قرار است انقدر طولانی
              باشد تا چندین خط شود
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
