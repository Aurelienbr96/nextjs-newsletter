type Props = {
  title: string;
  content: string;
};

export const Header = ({ title, content }: Props) => (
  <header className="text-center bg-light-grey rounded-lg p-5 lg:w-[960px]">
    <h1 className="text-title font-bold">{title.toUpperCase()}</h1>
    <p className="mt-2">{content}</p>
  </header>
);
