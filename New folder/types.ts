import { ReactNode } from "react";

export interface NavItem {
  label: string;
  path: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}