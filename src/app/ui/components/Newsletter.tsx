"use client";

import { NewsletterDomainModel } from "@/type/newsletter-model.domain";
import { UserDomainModel } from "@/type/user-model.domain";
import { subscriptionsGuard } from "@/utils/guards/subscriptions.guard";
import Image from "next/image";
import { SubscribeButton } from "./SubscribeButton";

type Props = {
  newsletter: NewsletterDomainModel.PublicNewsletterModel;
  user: UserDomainModel.UserModel;
};

export const Newsletter = ({ newsletter, user }: Props) => (
  <article className="flex flex-col items-center w-full lg:w-[300px] relative lg:mr-7 mt-8" key={newsletter.id}>
    <h1 className="absolute top-20 text-title text-white drop-shadow-lg text-center">{newsletter.title}</h1>
    <Image src={newsletter.image} alt={`image article ${newsletter.title}`} width={300} height={200} className="h-[200px]" />
    <p className="text-center min-h-[78px] mt-[15px]">{newsletter.description}</p>
    <SubscribeButton hasRight={subscriptionsGuard(user.subscriptions, newsletter.subscriptions)} />
  </article>
);
