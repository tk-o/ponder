import { ponder } from "@/generated";

ponder.on("ArtGobblers:ArtGobbled", async ({ event, context }) => {
  await context.entities.GobbledArt.insert(
    `${event.params.nft}-${event.params.id}`,
    {
      user: event.params.user,
    }
  );
});
