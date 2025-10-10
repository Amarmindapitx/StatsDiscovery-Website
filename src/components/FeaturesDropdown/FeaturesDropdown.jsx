import React from 'react';
import Link from 'next/link';
import styles from './FeaturesDropdown.module.css';
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

const features = [
  {
    title: "SEO Audit",
    href: "/seo-audit",
    description: "Comprehensively audit a site and generate White Label Reports or Embed.",
  },
  {
    title: "White Label Reports",
    href: "/reports",
    description: "Create beautiful branded SEO Audits in PDF for your clients.",
  },
  {
    title: "Keyword Research",
    href: "/keyword-research",
    description: "Find opportunities with search volume, competition and CPC data.",
  },
  {
    title: "Backlink Research",
    href: "/backlink-research",
    description: "Discover link building opportunities and analyze backlink profiles.",
  },
  {
    title: "SEO Crawler",
    href: "/seo-crawler",
    description: "Scan every page of your site for problems that could be holding it back.",
  },
  {
    title: "Embeddable Audit Tool",
    href: "/embed",
    description: "Generate more leads and sales directly from your site.",
  },
];

const FeaturesDropdown = () => {
  return (
    <ul className={styles.contentGrid}>
      {features.map((feature) => (
        <ListItem key={feature.title} title={feature.title} href={feature.href}>
          {feature.description}
        </ListItem>
      ))}
    </ul>
  );
};

const ListItem = React.forwardRef(({ title, href, children }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} ref={ref} className={styles.listItem}>
          <div className={styles.itemTitle}>{title}</div>
          <p className={styles.itemDescription}>{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default FeaturesDropdown;