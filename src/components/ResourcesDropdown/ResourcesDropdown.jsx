// src/components/ResourcesDropdown/ResourcesDropdown.jsx

import React from 'react';
import Link from 'next/link';
import styles from './ResourcesDropdown.module.css';
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

const resources = [
  { title: "Blog", href: "/blog" },
  { title: "StatsDiscovery Guides", href: "/guides" },
  { title: "Product Videos (YouTube)", href: "/videos" },
  { title: "SEO Concepts", href: "/seo-concepts" },
  { title: "Agency Guides", href: "/agency-guides" },
  { title: "Live Chat", href: "/contact" },
];

const ResourcesDropdown = () => {
  return (
    <ul className={styles.grid}>
      {resources.map((resource) => (
        <ListItem key={resource.title} title={resource.title} href={resource.href} />
      ))}
    </ul>
  );
};

const ListItem = React.forwardRef(({ title, href }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} ref={ref} className={styles.listItem}>
          <div className={styles.itemTitle}>{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default ResourcesDropdown;