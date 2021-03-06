import React, { useEffect, useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Overlay from "./components/Overlay/Overlay";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Devsam - a full stack javascript developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Overlay />
      <Hero />
      <div className={`container ${styles.sectionEducation}`} id="education">
        <h2 className={`${styles.educationTitle} ${styles.textColorAnimation}`}>
          Education
        </h2>
        <ul className={styles.educationList}>
          <li className={styles.educationItem}>
            <span className={styles.educationYear}>2007 - 2013</span>
            <span className={styles.educationName}>
              SD Al-Irsyad Al-Islamiyyah
            </span>
          </li>
          <li className={styles.educationItem}>
            <span className={styles.educationYear}>2013 - 2015</span>
            <span className={styles.educationName}>SMP Islam Pekalongan</span>
          </li>
          <li className={styles.educationItem}>
            <span className={styles.educationYear}>2015 - 2018</span>
            <span className={styles.educationName}>SMK N 2 Pekalongan</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
