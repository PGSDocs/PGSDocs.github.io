import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'La documentation',
    Svg: require('@site/static/img/feature1.svg').default,
    description: (
      <>
        Découvrez comment utuliser la plateforme, les [completer la prase, etc, completer la prase, etc, completer la prase, etc, completer la prase, etc, completer la prase, etc, completer la prase, etc, completer la prase, etc, completer la prase, etc, completer la prase, etc, completer la prase, etc, completer la prase, etc,].
      </>
    ),
  },
  {
    title: 'Ressources utiles',
    Svg: require('@site/static/img/feature2.svg').default,
    description: (
      <>
        Découvrez tous les liens utiles pour PGS.
      </>
    ),
  },
  {
    title: 'Titre 3',
    Svg: require('@site/static/img/feature3.svg').default,
    description: (
      <>
        Nous traiteraons [completer la prase, etc, completer la prase, etc, completer la prase, etc, completer la prase, etc, completer la prase, etc, completer la prase, etc, completer la prase, etc, completer la prase, etc, completer la prase, etc, completer la prase, etc, completer la prase, etc,].
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
