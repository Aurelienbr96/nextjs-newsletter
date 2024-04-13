export const subscriptionsGuard = (userRight: Array<string>, newsletterSubscription: Array<string>) => {
  if (newsletterSubscription.length === 0) return true;

  return userRight?.some((subscription) => newsletterSubscription.includes(subscription));
};
