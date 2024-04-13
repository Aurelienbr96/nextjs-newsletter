import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Newsletter } from "../Newsletter";
import { UserDomainModel } from "@/type/user-model.domain";
import { NewsletterDomainModel } from "@/type/newsletter-model.domain";
import { hasRightText, noRightText } from "../SubscribeButton";

describe("Newsletter", () => {
  it("Should render has right text", () => {
    const newsLetterWithRight1 = {
      ...NewsletterDomainModel.nullPublicNewsletterModel,
      subscriptions: ["RIGHT_1"],
    };
    const userWithRight1 = {
      ...UserDomainModel.nullUser,
      subscriptions: ["RIGHT_1"],
    };
    render(<Newsletter newsletter={newsLetterWithRight1} user={userWithRight1} />);
    expect(screen.getByText(hasRightText)).toBeInTheDocument();
  });

  it("Should render has no right text", () => {
    const newsLetterWithRight1 = {
      ...NewsletterDomainModel.nullPublicNewsletterModel,
      subscriptions: ["RIGHT_1"],
    };
    const userWithRight1 = {
      ...UserDomainModel.nullUser,
      subscriptions: ["RIGHT_2"],
    };
    render(<Newsletter newsletter={newsLetterWithRight1} user={userWithRight1} />);
    expect(screen.getByText(noRightText)).toBeInTheDocument();
  });
});
