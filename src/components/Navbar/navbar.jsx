"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';
import { FaLock } from 'react-icons/fa';
import FeaturesDropdown from '@/components/FeaturesDropdown/FeaturesDropdown';
import ResourcesDropdown from '@/components/ResourcesDropdown/ResourcesDropdown';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className={styles.navContainer}>
        
        {/* ✅ Logo */}
        <Link href="/">
          <Image 
            src="/assets/logo.png" 
            alt="StatsDiscovery Logo" 
            width={180} 
            height={40}
          />
        </Link>

        {/* ✅ Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="gap-1 md:gap-4">
            
            {/* Features Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <FeaturesDropdown />
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Pricing Link */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/pricing">Pricing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Resources Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ResourcesDropdown />
              </NavigationMenuContent>
            </NavigationMenuItem>
            
          </NavigationMenuList>
        </NavigationMenu>

        {/* ✅ Right Section */}
        <div className={styles.rightSection}>
          <Link href="/login" className={styles.loginLink}>
            <FaLock /> Login
          </Link>
          <Link href="/premium-trial" className={styles.ctaButton}>
            Premium - Free Trial
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
