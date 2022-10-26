import { Injectable } from "@nestjs/common";
import { Media } from "./media.model";

@Injectable()
export class MediaService {
  private mediaItems: Media[] = [];

  generateSlug(title: string, year: number) {
    // TODO: if another media exists with same title and year, append a sequence number
    // 'replaceAll' requires 'es2021' or later
    // For now, if return an error if key already exists
    return title.toLowerCase().replaceAll(' ', '-');
  }


  async insertMediaItem(title: string, year: number, synopsis: string) {
    const slug = this.generateSlug(title, year);
    if (this.mediaItems.find((u) => u.slug == slug && u.year == year) == undefined) {
      const item = new Media(slug, year, title, synopsis);
      this.mediaItems.push(item);
      return {
        "slug": slug,
        "year": year
      };
    }
    else {
      return "Entry: " + slug + "-" + year + " already exists!";
    }
  }

  getMediaItems() {
    return {
      "Count": this.mediaItems.length,
      "Content": this.mediaItems
    };
  }

  getMediaItem(slug: string, year: number) {
    const item = this.mediaItems.find((u) => u.slug == slug && u.year == year);
    if (item == undefined) {
      return "Entry: " + slug + "-" + year + " not found!";
    }

    return item;
  }

  // When `mediaItems` Array is large, async/await comes handy 
  async updateMediaItem(slug: string, year: number, title: string, synopsis: string) {
    const item = this.mediaItems.find((u) => u.slug == slug && u.year == year);
    if (item == undefined)
      return "Entry: " + slug + "-" + year + " not found!";

    item.title = title;
    item.synopsis = synopsis;
    return item;
  }

  deleteMediaItem(slug: string, year: number) {
    const index = this.mediaItems.findIndex((u) => u.slug == slug);
    if (index == -1) {
      return "Entry: " + slug + "-" + year + " not found!";
    }

    this.mediaItems.splice(index, 1);
    return "Entry deleted!";
  }
}
