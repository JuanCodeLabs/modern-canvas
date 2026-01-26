import React, { createContext, useContext, ReactNode } from 'react';

type SocialLinksType = {
  github: string;
  linkedin: string;
  email: string;
};

const defaultSocialLinks: SocialLinksType = {
  github:   'https://github.com/JuanCodeLabs',
  linkedin: 'https://www.linkedin.com/in/juan-diaz-5804aa203/',
  email:    'mailto:jdiazpalma1@gmail.com',
};

const SocialLinksContext = createContext<SocialLinksType>(defaultSocialLinks);

type SocialLinksProviderProps = {
  children: ReactNode;
  overrides?: Partial<SocialLinksType>;
};

export const SocialLinksProvider: React.FC<SocialLinksProviderProps> = ({
  children,
  overrides = {},
}) => {
  const value = {
    ...defaultSocialLinks,
    ...overrides,
  };

  return (
    <SocialLinksContext.Provider value={value}>
      {children}
    </SocialLinksContext.Provider>
  );
};

export const useSocialLinks = (): SocialLinksType => {
  const context = useContext(SocialLinksContext);
  if (context === undefined) {
    throw new Error('useSocialLinks must be used within a SocialLinksProvider');
  }
  return context;
};

export default SocialLinksContext;
