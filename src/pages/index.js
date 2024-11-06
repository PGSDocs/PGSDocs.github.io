import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import styles from './index.module.css';
import { useState } from 'react';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
        
      <Header />

      <main className={styles.mainContent}>
        <IntroSection />
        <UserSection />
        <DocsSection />
        <HelpSection />
      </main>
    </Layout>
  );
}


function Header() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.HeroBanner)}>
      <div className={styles.HeroContainer}>
        <img 
          src="/img/Idx-HeroImg.png" 
          alt="Illustration de la gestion d'entreprise" 
          className={styles.HeroImage}
        />
        <div className={styles.HeroText}>
          <h1 className={styles.HeroTitle}>
            Transformez la <span className={styles.HeroTitleVar}>gestion</span> de votre entreprise en toute <span className={styles.HeroTitleVar}>simplicité</span>.
          </h1>
          <p className={styles.HeroSubtitle}>
            Optimisez vos opérations avec notre solution intégrée conçue spécialement pour les PME. Pro Gestion Soft vous offre tous les outils nécessaires pour une gestion efficace et fluide.
          </p>
          <div className={styles.HeroBtns}>
            <a
              className=" bt button button--secondary button--lg"
              href="/docs/intro">
              Introduction <i className="fas fa-book"></i>
            </a>
            <Link
              className="button button--primary button--lg"
              href="https://app.progestionsoft.com">
              Essayer gratuitement <i className="fas fa-bolt"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}


function IntroCpn({ link, iconSrc, title, description, bgSrc }) {
  return (
    <Link
      to={link}
      className={styles.IntroCard}
      style={{
        position: 'relative',
        color: 'transparent',
      }}
    >
      <div
        className={styles.IntroBGImg}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(${bgSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className={styles.iconContainer}>
        <img src={iconSrc} alt={title} className={styles.IntroIcone} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}

function IntroSection() {
  return (
    <section className={styles.IntroSection}>
      <h1><i className="fas fa-rocket"></i> Trouvez l'inspiration</h1>
      <p>Adoptez-nous et adaptez-vous dans un monde en constante évolution.</p>
      <div className={styles.IntroContainer}>
        <IntroCpn
          link="https://progestionsoft.com"
          iconSrc="/img/Idx-IntroDesc.png"
          title="Qu'est-ce que c'est ?"
          description="Pro Gestion Soft est une solution intégrée conçue pour faciliter la gestion des PME. Elle offre des outils adaptés pour optimiser les ressources humaines, la facturation, et bien plus encore."         
          bgSrc="/img/feature1.svg"
        />
        <IntroCpn
          link="https://app.progestionsoft.com"
          iconSrc="./img/Idx-IntroProd.png" 
          title="Booster votre productivité"
          description="Avec une expérience utilisateur intuitive, des fonctionnalités personnalisées et des outils efficaces pour la gestion des tâches et de la communication, Pro Gestion Soft aide les équipes à travailler plus efficacement."
          bgSrc="/img/feature2.svg"
        />
        <IntroCpn
          link="https://hire.progestionsoft.com"
          iconSrc="../img/Idx-IntroExpl.png"
          title="Explorer le marché d'emploi"
          description="De nombreuses entreprises qui nous font confiance proposent des opportunités d'emploi, permettant ainsi à plusieurs personnes de trouver un travail qui leur convient."
          bgSrc="/img/feature3.svg"
        />
      </div>
    </section>
  );
}


function UserCpn({ icon, title, description }) {
  return (
    <div className={styles.UserCard}>
      <h3><i className={icon}></i> - {title}</h3>
      <p>{description}</p>
    </div>
  );
}

function UserSection() {
  return (
    <section className={styles.UserSection}>
      <div className={styles.UserText}>
          <h1>Résoudre les défis de gestion <i className="fas fa-puzzle-piece"></i></h1>
          <p>Simplifier la gestion d'entreprise avec des solutions adaptées à divers professionnels pour optimiser leur efficacité.</p>
       
          <UserCpn
            icon="fas fa-folder-open"
            title="Conçu pour les spécialistes des ressources humaines"
            description="Pro Gestion Soft facilite la gestion des employés, du recrutement à la paie, en fournissant des outils adaptés pour suivre la performance et les besoins de chaque membre de l'équipe."
          />
          <UserCpn
            icon="fas fa-calculator"
            title="Adapté aux secrétaires comptables"
            description="Grâce à ses fonctionnalités de facturation et de gestion des dépenses, Pro Gestion Soft permet aux secrétaires comptables de gérer efficacement les finances de l'entreprise tout en assurant la conformité aux normes comptables."
          />
          <UserCpn
            icon="fas fa-laptop"
            title="Flexibilité pour divers postes"
            description="Que ce soit pour la gestion des tâches, l'organisation des documents ou la communication d'équipe, Pro Gestion Soft offre des outils personnalisables qui s'adaptent aux besoins de chaque rôle au sein de l'entreprise."
          />
      </div>

      <div className={styles.UserImgContainer}>
        <img 
          src="/img/Idx-UserImg.png" 
          alt="Illustration de la gestion d'entreprise" 
          className={styles.UserImg}
        />
      </div>
    </section>
  );
}


function DocsCpn({ icon, title, link, description }) {
  return (
    <div className={styles.DocsCard}>
        <div className={styles.DocsCardTitle}>
          <h3><i className={icon}></i> | {title}</h3>
          <a href={link} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-arrow-right" style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
        </a>
        </div>
      <p>{description}</p>
    </div>
  );
}

function DocsSection() {
  return (
    <section className={styles.DocsSection}>
      <h1>Lire la documentation <i className="fas fa-bookmark"></i></h1>
      <div className={styles.DocsContainer}>
        <div>
          <DocsCpn
            icon="fas fa-sign-in-alt"
            title="Authentification"
            description="Créez un compte ou connectez-vous. L'inscription est simple et rapide."
            link="/docs/auth"
          />
          <DocsCpn
            icon="fas fa-user-plus"
            title="Ajouter un collaborateur"
            description="Invitez facilement des membres de votre équipe sur Pro Gestion Soft pour collaborer et partager les responsabilités. Vous pouvez assigner des rôles à chaque collaborateur, leur donnant accès aux sections dont ils ont besoin pour contribuer efficacement."
            link="/docs/flow/invite"
          />
          <DocsCpn
            icon="fas fa-sign-in-alt"
            title="Supprimer votre compte"
            description="Si vous décidez de ne plus utiliser Pro Gestion Soft, vous pouvez supprimer définitivement votre compte. Cette action est irréversible et supprimera toutes vos données de notre système. Assurez-vous d'avoir sauvegardé les informations importantes avant de procéder."
            link="/docs/account/delete"
          />
        </div>

        <div>
          <DocsCpn
            icon="fas fa-check-circle"
            title="Vérifier votre compte"
            description="Pour garantir la sécurité de votre compte, nous vous envoyons un e-mail de vérification après l’inscription. Cliquez sur le lien dans cet e-mail pour vérifier votre adresse. Cette étape est essentielle pour activer votre compte et vous assurer un accès sécurisé."
            link="/docs/account/kyc"
          />
          <DocsCpn
            icon="fas fa-envelope"
            title="Ajouter un courriel"
            description="Pour renforcer la sécurité et la communication, vous pouvez ajouter une adresse e-mail supplémentaire à votre compte. Cette fonctionnalité vous permet de recevoir des notifications importantes et d’améliorer la récupération de compte en cas de besoin."
            link="/docs/work/addMail"
          />
          <DocsCpn
            icon="fas fa-file-alt"
            title="Gérer les candidatures"
            description="Simplifiez votre processus de recrutement en suivant et en gérant les candidatures directement sur Pro Gestion Soft. Publiez des offres, évaluez les candidats, et suivez chaque étape du processus de recrutement. Accédez aux CV et aux notes d’évaluation pour prendre des décisions éclairées."
            link="/docs/hire/manage"
          />
        </div>
      </div>
      <a
        className="button button--link button--lg"
        href="/docs/intro">
        Lire plus <i className="fas fa-arrow-right"></i>
      </a>
    </section>
  );
}


function HelpCpn({ icon, title, description, link, linkText }) {
  return (
    <div className={styles.HelpCard}>
      <h3><i className={icon}></i> {title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
    </div>
  );
}

function HelpSection() {
  const supportData = {
    technical: [
      {
        icon: "fas fa-tools",
        title: "Ticket technique",
        description: "Vous pouvez créer un ticket si vous disposez déjà d'un compte. C'est un excellent moyen de suivre vos requêtes de manière formelle.",
        link: "https://app.progestionsoft.com/support",
        linkText: "Créer un ticket",
      },
      {
        icon: "fas fa-file-signature",
        title: "Formulaire d'aide",
        description: "Remplissez notre formulaire de contact pour nous poser toutes vos questions.",
        link: "https://progestionsoft.com",
        linkText: "Remplir le formulaire",
      },
    ],
    direct: [
      {
        icon: "fas fa-envelope-open",
        title: "Email",
        description: "Contactez notre équipe de support via support@progestionsoft.com pour obtenir des réponses à vos questions.",
        link: "mailto:support@progestionsoft.com",
        linkText: "Envoyer un email",
      },
      {
        icon: "fas fa-phone",
        title: "Appel téléphone",
        description: "Appelez-nous directement au 22952535380 pour une assistance en temps réel.",
        link: "tel:+22952535380",
        linkText: "Appeler le support",
      },
    ],
    community: [
      {
        icon: "fas fa-comment-dots",
        title: "Forum",
        description: "Poser votre préoccupation à la communauté et trouvez une approche de solution très rapidement.",
        link: "https://progestionsoft.com/forum",
        linkText: "Accéder au forum",
      },
      {
        icon: "fab fa-discord",
        title: "Discord",
        description: "Rejoignez notre serveur Discord pour discuter avec d'autres utilisateurs et échanger des astuces.",
        link: "https://votre-invitation-discord.com",
        linkText: "Rejoindre Discord",
      },
    ],
  };

  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <section className={styles.HelpSection}>
      <div className={styles.HelpImgContainer}>
        <img
          src="/img/Idx-HelpImg.png"
          alt="Illustration de la gestion d'entreprise"
          className={styles.HelpImg}
        />
      </div>

      <div className={styles.HelpText}>
        <h1><i className=" fas fa-headset"></i> Comment pouvons-nous vous aider ?</h1>
        <p>Explorez nos options de support pour obtenir l'assistance nécessaire.</p>

        <Tabs defaultValue="all" values={[
          { label: 'Tous les canaux', value: 'all' },
          { label: 'Support technique', value: 'technical' },
          { label: 'Contact direct', value: 'direct' },
          { label: 'Communauté', value: 'community' },
        ]}>
          <TabItem value="all">
            <div className={styles.HelpContCard}>
              {Object.values(supportData).flat().slice(0, showMore ? undefined : 3).map((item, index) => (
                <HelpCpn
                  key={index}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  linkText={item.linkText}
                  icon={item.icon}
                />
              ))}
            </div>
            {Object.values(supportData).flat().length > 3 && (
              <button className={styles.ToggleButton} onClick={handleToggle}>
                {showMore ? 'Voir moins' : 'Voir plus'}
              </button>
            )}
          </TabItem>

          {Object.entries(supportData).map(([key, items]) => (
            <TabItem value={key} key={key}>
              <div className={styles.HelpContCard}>
                {items.slice(0, showMore ? undefined : 3).map((item, index) => (
                  <HelpCpn
                    key={index}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    linkText={item.linkText}
                    icon={item.icon}
                  />
                ))}
              </div>
              {items.length > 3 && (
                <button className={styles.ToggleButton} onClick={handleToggle}>
                  {showMore ? 'Voir moins' : 'Voir plus'}
                </button>
              )}
            </TabItem>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

