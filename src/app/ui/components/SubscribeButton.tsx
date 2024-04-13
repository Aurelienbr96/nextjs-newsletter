"use client";
import clsx from "clsx";
type Props = {
  hasRight: boolean;
};

export const hasRightText = "S'inscrire";
export const noRightText = "S'abonner";

export const SubscribeButton = ({ hasRight }: Props) => {
  return (
    <button
      className={`${clsx("rounded-full leading-6 py-2 px-8", {
        "bg-yellow": !hasRight,
        "bg-dark-red text-white": hasRight,
      })}`}
    >
      {hasRight ? hasRightText : noRightText}
    </button>
  );
};
