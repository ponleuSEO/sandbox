type HomePageContent = {
  navigation: string[];
  home: {
    title: string;
    description: string;
  };
};

type AboutPageContent = {
  introduction: string;
  title1: string;
  companyName: string;
  service: string[];
};

type LocaleContent = {
  homepage: HomePageContent;
  about: AboutPageContent;
};

export type { LocaleContent };
