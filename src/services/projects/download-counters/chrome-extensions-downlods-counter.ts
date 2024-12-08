import * as cheerio from "cheerio";
import type {
  DownloadsCounterResult,
  DownloadsCounter,
} from "./downloads-counter";

export class ChromeExtensionsDownloadsCounter implements DownloadsCounter {
  constructor(private extensionId: string) {}

  async getCount(): Promise<DownloadsCounterResult> {
    const response = await fetch(
      `https://chrome-stats.com/d/${this.extensionId}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64; rv:132.0) Gecko/20100101 Firefox/132.0",
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `Google Chrome downloads counter failed for ${this.extensionId}. Error code: ${response.status}`,
      );
    }

    return await response.text().then((text) => {
      const $ = cheerio.load(text);

      const extractedText = $(
        `.d-flex.align-items-center > div > span.light-bold:contains("Users:") + a[href="/d/${this.extensionId}/trends"]`,
      )
        .first()
        .text()
        .trim()
        .replaceAll(/\D/g, "");

      if (!extractedText) {
        throw new Error(
          "Could not find the HTML node representing active users on Chrome Web Store",
        );
      }

      const downloadsNumber = parseInt(extractedText);

      return {
        downloads: downloadsNumber,
        source: "Weekly active users on Chrome Web Store",
      };
    });
  }
}
