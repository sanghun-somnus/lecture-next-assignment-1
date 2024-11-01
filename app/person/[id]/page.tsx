import { getPersonData } from "@/helper";
import { SearchParams } from "next/dist/server/request/search-params";
import styles from "./page.module.css";
import Image from "next/image";

import Header from "@/components/Header";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Navigation from "@/components/Navigation";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { name } = await searchParams;
  return {
    title: `${name}`,
  };
}

export default async function PersonPage({
  params,
}: {
  params: Promise<PersonParams>;
}) {
  const { id } = await params;
  const person = await getPersonData(id);
  return (
    <div className={styles.container}>
      <main>
        <Navigation />
        <Header text={person.name} />
        <Section>
          <Image
            src={person.squareImage}
            width={400}
            height={400}
            alt={person.name}
            priority
          />
          <div className={styles.info}>
            <span>Country: {person.country}</span>
            <span>Networth: {person.netWorth}</span>
            <p>Bio: {person.bio.join(" ")}</p>
          </div>
        </Section>
        <Section>
          <ul className={styles.asset_list}>
            {person.financialAssets.map((asset, index) => (
              <Card key={index}>
                <li className={styles.asset}>
                  <span>TICKER: {asset.ticker}</span>
                  <span>Shares: {asset.numberOfShares}</span>
                  <span>
                    Share Price: {asset.sharePrice.toFixed(2)}{" "}
                    {asset.currencyCode}
                  </span>
                </li>
              </Card>
            ))}
          </ul>
        </Section>
      </main>
    </div>
  );
}
