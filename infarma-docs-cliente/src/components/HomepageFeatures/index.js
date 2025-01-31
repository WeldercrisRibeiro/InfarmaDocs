import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Fácil de Navegar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Todos os manuais disponíveis de forma rápida e online.
      </>
    ),
  },
  {
    title: 'Acesse de qualquer lugar!',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    
    description: (
      <>
        Todos os documentos estão disponivel para estudo via WEB.
      </>
    ),
  },
  {
    title: 'Powered by Weldercris',
    Svg: require('@site/static/img/azul.svg').default,
    description: (
      <>
        Todos os direitos reservados a Infarma Sistemas.
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
