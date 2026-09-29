import { db } from "../config/db.js";
import { shortenedLinksTable } from "../drizzle/schema.js";

export const getShortenedUrlFromDb = async () => {
  try {
    const users = await db.select().from(shortenedLinksTable); // fetch all users
    console.log("@@@ getShortenedUrlFromDb shorteneedUrl File", users);
    return users;
  } catch (err) {
    console.log("@@@ error while fetching the shortened url link file", err);
  }
};

export const saveShortenedUrlIntoDb = async (finalShortCode, url) => {
  try {
    const addedShortenerUrlLinkDbRes = await db
      .insert(shortenedLinksTable)
      .values({ shortCode: finalShortCode, url: url }); // single data insert

    console.log(
      "@@@ saveShortenedUrlIntoDb response",
      addedShortenerUrlLinkDbRes,
    );
  } catch (err) {
    console.log("Error while saving the shortened url into json file", err);
  }
};
