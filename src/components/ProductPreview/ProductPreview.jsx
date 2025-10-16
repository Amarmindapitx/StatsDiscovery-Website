"use client";
import React from "react";
import Image from "next/image";
import styles from "./ProductPreview.module.css";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const ProductPreview = () => {
  return (
    <div className={styles.previewContainer}>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[70rem] h-auto rounded-xl p-6 border">
          <CardItem translateZ="100" rotateX={10} rotateZ={-5} className="w-full mt-4">
            <Image
              src="/assets/index_en.png"
              alt="A preview of the StatsDiscovery SEO audit report"
              width={1110}
              height={625}
              className={`${styles.previewImage} rounded-xl group-hover/card:shadow-xl`}
              priority
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10">
         
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default ProductPreview;
