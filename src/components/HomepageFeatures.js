import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Anfänger',
    Svg: require('../../static/img/undraw_explore.svg').default,
    description: (
      <>
        Sind Sie neu bei Bitcoin? Wir helfen Ihnen bei allen Fragen, die Sie haben. Vereinbaren Sie einen Termin und fragen Sie uns.
      </>
    ),
  },
  {
    title: 'Themen',
    Svg: require('../../static/img/undraw_questions.svg').default,
    description: (
      <>
         Wir helfen Ihnen bei allen Themen rund um den Bitcoin. Hardware Wallets, Software Wallets, die Blockchain, Nodes, Mining, ... Bei Fragen zu Steuern und Investitionen können wir keine Beratung geben.
      </>
    ),
  },
  {
    title: 'Komplexe Fragen',
    Svg: require('../../static/img/undraw_bitcoin.svg').default,
    description: (
      <>
       Wenn Sie nicht sicher sind, ob wir Ihnen helfen können, schicken Sie uns einfach eine E-Mail und wir melden uns bei Ihnen. Wenn Sie einen Termin gebucht haben und wir Ihnen nicht helfen können, wird Ihr Geld zurückerstattet.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
