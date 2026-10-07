export type GuideLink = {
  label: string;
  href: string;
};

export type GuideSection = {
  id: string;
  title: string;
  description: string;
  steps?: string[];
  note?: string;
  image?: string;
  imageAlt?: string;
  link?: GuideLink;
};

export type Guide = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  sections: GuideSection[];
};
