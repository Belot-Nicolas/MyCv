import React from "react";
import "./MyProjects.css";

import SiteProject11 from "../../assets/imgProjetct/SiteProject11.jpg";
import SiteProject12 from "../../assets/imgProjetct/SiteProject12.jpg";
import SiteProject13 from "../../assets/imgProjetct/SiteProject13.jpg";
import SiteProject14 from "../../assets/imgProjetct/SiteProject14.jpg";
import SiteProject15 from "../../assets/imgProjetct/SiteProject15.jpg";

import SiteProject21 from "../../assets/imgProjetct/SiteProject21.jpg";
import SiteProject22 from "../../assets/imgProjetct/SiteProject22.jpg";
import SiteResProject23 from "../../assets/imgProjetct/SiteResProject23.jpg";
import SiteResProject24 from "../../assets/imgProjetct/SiteResProject24.jpg";

import SiteProject31 from "../../assets/imgProjetct/SiteProject31.jpg";
import SiteProject32 from "../../assets/imgProjetct/SiteProject32.jpg";
import SiteProject33 from "../../assets/imgProjetct/SiteProject33.jpg";
import SiteProject34 from "../../assets/imgProjetct/SiteProject34.jpg";

import ProjectH1 from "../../assets/imgProjetct/ProjectH1.jpg"
import ProjectH2 from "../../assets/imgProjetct/ProjectH2.jpg"



const MyProjects = () => {
  return (
    <div className="MyProjects">
      <h2> &#8249;MesProjets /&#8250;</h2>
      <div className="project1">
        <div className="paragraph"  data-aos="zoom-out" data-aos-delay="800">
          <p className="titleProject">Voyage à Cuba:</p>
          <p>
            Voici le premier site que j'ai crée, avec trois collègues, pour le
            projet 1 de la formation. <br />
            Ce site a été créé en HTML et CSS et à pour vocation d'aidé les
            aventuriers dans leur voyage à Cuba.
          </p>
        </div>

        <div className="image-container"  data-aos="zoom-out" data-aos-delay="800">
          <img src={SiteProject11} alt="voyage a cuba" className="image" />
          <img src={SiteProject12} alt="voyage a cuba" className="image" />
          <img src={SiteProject13} alt="voyage a cuba" className="image" />
          <img src={SiteProject14} alt="voyage a cuba" className="image" />
          <img src={SiteProject15} alt="voyage a cuba" className="image" />
        </div>
      </div>

      <div className="project2">
        <div className="paragraph"  data-aos="zoom-in" data-aos-delay="800">
          <p className="titleProject">HpEat:</p>
          <p>
            Voici le deuxième projet de formation. <br/> HpEat est un site de commande
            en ligne sur le thème de Harry Potter &#40; vous l'avez sûrement
            deviné &#41;. <br/> Nous nous sommes inspiré d'une célèbre application qui a
            le même bute, mais pour les modus. <br/> HpEat a été développé avec
            React.js, une API extérieure. <br/> Menu filtrant les plats par type, un panier, un compte utilisateur  et le site et responcive !
          </p>
        </div>

        <div className="image-container"  data-aos="zoom-in" data-aos-delay="800">
          <img src={SiteProject21} alt="hpeat" className="image" />
          <img src={SiteProject22} alt="hpeat" className="image" />
          <img src={SiteResProject23} alt="hpeat" className="image" />
          <img src={SiteResProject24} alt="hpeat" className="image" />
        </div>
      </div>

      <div className="project3">
        <div className="paragraph"  data-aos="zoom-out" data-aos-delay="800">
          <p className="titleProject">Prev33:</p>
          <p>Prev33 est le dernier projet réalisé pour la formation
             avec un client réel. <br/>
              Cette société propose des formations en sécurité
               et sécurité incendie pour les entreprises. <br/>
            Notre porteur de projet voulait une refonte totale de son site. 
            Le moin de click possible pour accède aux fiches formation,
             sympathiques a navigué, et personnalisable par l'administrateur
              était les maîtres-mots du projet. 
            La parti visible du site à était développer avec React.js,
            la partit base de données avec MySql et les routes pour relier les deux nous avons utilisé Node.js (Express.js) </p>
        </div>

        <div className="image-container"  data-aos="zoom-out" data-aos-delay="800">
          <img src={SiteProject31} alt="prev33" className="image" />
          <img src={SiteProject32} alt="prev33" className="image" />
          <img src={SiteProject33} alt="prev33" className="image" />
          <img src={SiteProject34} alt="prev33" className="image" />
        </div>
        
        <div className="paragraph"  data-aos="zoom-out" data-aos-delay="800">
          <p className="titleProject">Hitman:</p>
          <p>Hitman est un side project.<br/>
             Ce site présente les personnages et les missions du jeux vidéo Hitman. <br/>
             Mais surtout, c'est un cite où j'implémente tout ce que j'ai appris durant la formation. <br/>
            Développer avec React.js pour la parti frontend, Node.js express.js et MySql pour le backend.
            À terme, l'administrateur pourra modifier les personnages et les mission présente, les supprimer, et les ajoutés. 
          </p>
        
        </div>

        <div className="image-container"  data-aos="zoom-out" data-aos-delay="800">
          <img src={ProjectH1} alt="hitman" className="image" />
          <img src={ProjectH2} alt="hitman" className="image" />
          
        </div>
        
      </div>
    </div>
  );
};

export default MyProjects;
