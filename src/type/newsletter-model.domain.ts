export namespace NewsletterDomainModel {
  export type NewsletterModel = {
    id: string;
    image: string;
    description: string;
    title: string;
    site: string;
    subscriptions: string[];
  };

  export type PublicNewsletterModel = Omit<NewsletterModel, "site">;

  export type GroupedNewslettersModel = {
    [site: string]: Omit<NewsletterModel, "site">[];
  };

  export const nullPublicNewsletterModel: PublicNewsletterModel = {
    id: "",
    image: "http://nullimage.com",
    description: "",
    title: "",
    subscriptions: [],
  };
}
