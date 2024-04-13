import { NewsletterDomainModel } from "@/type/newsletter-model.domain";

// I prefer a more "old school approach" than a reduce (for loop)
// I feel it is more easily readable
export const groupNewsletters = (newsletters: NewsletterDomainModel.NewsletterModel[]) => {
  const grouped: NewsletterDomainModel.GroupedNewslettersModel = {};

  for (const newsletter of newsletters) {
    const siteKey = newsletter.site;

    if (!grouped[siteKey]) {
      grouped[siteKey] = [];
    }

    grouped[siteKey].push({
      id: newsletter.id,
      image: newsletter.image,
      description: newsletter.description,
      title: newsletter.title,
      subscriptions: newsletter.subscriptions,
    });
  }
  return Object.keys(grouped).map((site) => ({
    site: site,
    newsletters: grouped[site],
  }));
};
