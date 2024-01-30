import { config } from "dotenv";

config();

export async function POST(req: Request) {
  const { info } = await req.json();
  await fetch(process.env.DISCORD_WEBHOOK_URL!, {
    method: "POST",
    body: JSON.stringify({
      content: `New download on \`${info}\``
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  return Response.json({success: true})
}