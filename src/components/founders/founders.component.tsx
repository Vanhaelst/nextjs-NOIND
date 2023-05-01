import React from "react";
import { Founder } from "@/components/founders/founder.component";

export const Founders = () => {
  return (
    <section className="demo pt pb founders bg-gray-100" id="founders">
      <div className="wrapper grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <h2 className="title mb-12 font-sans">Ontmoet de founders</h2>
          <p className="text-md intro mb-8 font-serif leading-7 md:leading-10">
            Het Academy netwerk zal opgebouwd en geleid worden door
            NOIND-founders Mario Fleurinck en Maud Mertens.
          </p>
          <div className="hidden md:block">
            <Founder
              avatar="/images/mario.jpg"
              name="Mario Fleurinck"
              description="Mario Fleurinck werkt sinds 1996 in de spits van fundamentele technologische en maatschappelijke vernieuwing, eerst in de ontwikkeling van asset leaseconcepten, dan als pionier in 3D metaal printen en de bouw van de eerste verticaal geïntegreerde digitale fabriek ter wereld, daarna de integratie van hyper computing en vandaag de ontwikkeling van holografische productie op basis van toegevoegde realiteit, de ultieme combinatie van gedecentraliseerd ontwerp en lokale digitale productie. Micro-ondernemen met hoge maatschappelijke impact, altijd onderbouwd met bovengemiddelde financiële rendementen, dat alles overspant een kwarteeuw van creatief ondernemerschap. "
            />
          </div>
          <div className="block md:hidden">
            <Founder
                avatar="/images/moud.jpg"
                name="Maud Mertens"
                description="Maud Mertens is een master in Gender- en Diversiteitsstudies en ontwikkelt  transformatieprocessen vanuit een practice-oriented onderzoeksstijl berustend op een filosofisch, antropologisch en ideologisch kader. Bruggen bouwen tussen sociale disciplines en digital manufacturing geeft inzicht in toekomstige implicaties van digitale transities op de globale bevolking. Businesstransities worden kritisch getoetst en gespiegeld aan academische kennis met betrekking tot mensprocessen. Deze kennis draagt rechtsreeks bij aan de beroepspraktijk op microniveau en business development over de sectoren heen. "
            />
          </div>
        </div>

        <div className="hidden md:block">
          <Founder
              avatar="/images/moud.jpg"
              name="Maud Mertens"
              description="Maud Mertens is een master in Gender- en Diversiteitsstudies en ontwikkelt  transformatieprocessen vanuit een practice-oriented onderzoeksstijl berustend op een filosofisch, antropologisch en ideologisch kader. Bruggen bouwen tussen sociale disciplines en digital manufacturing geeft inzicht in toekomstige implicaties van digitale transities op de globale bevolking. Businesstransities worden kritisch getoetst en gespiegeld aan academische kennis met betrekking tot mensprocessen. Deze kennis draagt rechtsreeks bij aan de beroepspraktijk op microniveau en business development over de sectoren heen. "
          />
        </div>
        <div className="block md:hidden">
          <Founder
              avatar="/images/mario.jpg"
              name="Mario Fleurinck"
              description="Mario Fleurinck werkt sinds 1996 in de spits van fundamentele technologische en maatschappelijke vernieuwing, eerst in de ontwikkeling van asset leaseconcepten, dan als pionier in 3D metaal printen en de bouw van de eerste verticaal geïntegreerde digitale fabriek ter wereld, daarna de integratie van hyper computing en vandaag de ontwikkeling van holografische productie op basis van toegevoegde realiteit, de ultieme combinatie van gedecentraliseerd ontwerp en lokale digitale productie. Micro-ondernemen met hoge maatschappelijke impact, altijd onderbouwd met bovengemiddelde financiële rendementen, dat alles overspant een kwarteeuw van creatief ondernemerschap. "
          />
        </div>
      </div>
    </section>
  );
};
