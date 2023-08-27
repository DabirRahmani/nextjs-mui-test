"use client";
import { TextField } from "@mui/material";
import { MainItemCard } from "@/conponents/cards/item-card";
import * as LocalData from "../item-data.json";
import { useState } from "react";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  return (
    <main>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "80%", marginTop: 24 }}>
          <TextField
            id="search"
            sx={{ direction: "rtl" }}
            dir="rtl"
            placeholder="جست و جو آیتم"
            type="search"
            fullWidth
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          placeContent: "center",
          width: "100%",
        }}
      >
        {Object.values(LocalData)
          .slice(0, 24)
          .filter((it) => {
            if (it.name.includes(searchText)) return true;
            else return false;
          })
          .map((i) => {
            return (
              <MainItemCard key={i.id} id={i.id} src={i.src} title={i.name} />
            );
          })}
      </div>
    </main>
  );
}
