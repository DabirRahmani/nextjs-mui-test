import Image from "next/image";
import { Card, Typography } from "@mui/material";
import Link from "next/link";

interface inputs {
  src: string;
  title: string;
  id: number | string;
}

export const MainItemCard = ({ src, title, id }: inputs) => {
  return (
    <Link href={`/item/${id}`}>
      <Card
        style={{
          position: "relative",
          borderRadius: 16,
          margin: 16,
        }}
        sx={{
          width: { xs: 150, md: 200, lg: 250 },
          height: { xs: 150, md: 200, lg: 250 },
        }}
        className="main-card"
      >
        <Image alt="alt" src={src} fill sizes="(max-width: 250px)" />
        <div
          style={{
            position: "absolute",
            bottom: 8,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "RGBA(0,0,0,0.5)",
              borderRadius: 16,
              padding: 8,
              width: "80%",
              textAlign: "center",
            }}
          >
            <Typography
              color="white"
              sx={{ fontSize: { xs: 12, md: 16, lg: 20 } }}
              variant="h6"
            >
              {title}
            </Typography>
          </div>
        </div>
      </Card>
    </Link>
  );
};
