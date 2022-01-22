import { Injectable } from '@angular/core';

@Injectable()
export class VillanosService{
    private villanos: Villano[] = [
        {
          nombre: "Joker",
          bio: "The Joker (traducido como 'el Comodín' y 'el Guasón' en Hispanoamérica entre las décadas de los '50 y '80) es un personaje de ficción, perteneciente a DC Comics y el archienemigo de Batman. Es uno de los villanos más influyentes en la historia de los cómics, y uno de los mejor reconocidos a nivel masivo. Una amenaza para héroes y villanos, Joker es uno de los antagonistas más siniestros y peligrosos del Universo DC.",
          img: "assets/img/joker.png",
          aparicion: "1940-04-01",
          casa:"DC"
        },
        {
          nombre: "Ultron",
          bio: "Ultron  fue una inteligencia artificial, es un androide diseñado por Hank Pym para traer la paz y el orden en el mundo. Pero él sintió la necesidad de destruir a la humanidad y por ello se convirtió en uno de los enemigos más formidables de los Vengadores. Ultrón casi tuvo éxito, pero sus planes fueron estropeados por los Vengadores y fue destruido por Visión. El cuerpo físico de Ultron está hecho de una aleación duradera y ha manifestado varios superpoderes. Estos varían entre diferentes historias, pero generalmente incluyen fuerza, velocidad y agilidad sobrehumanas, vuelo y proyección de energía.  ",
          img: "assets/img/ultron.png",
          aparicion: "1968-01-01",
          casa:"Marvel"
        },
        {
          nombre: "Venom",
          bio: "El personaje es un extraterrestre sensible simbionte con una forma amorfa, semi-líquido, que sobrevive mediante la unión con un huésped, por lo general humano. Esta forma de vida dual recibe poderes mejorados y generalmente se refiere a sí misma como «Venom». Una deformación descomunal y retorcida de Spider-Man, Venom es el resultado de un simbionte alienígena fusionado con un humano que guarda rencor contra Peter Parker. Esta combinación ha demostrado ser casi letal para el trepador de paredes en numerosas ocasiones. El simbionte se fusionó con otros anfitriones, sobre todo Eddie Brock, su segundo y más infame anfitrión, con quien se convirtió en Venom y uno de los archienemigos de Spider-Man.",
          img: "assets/img/venom.png",
          aparicion: "1988-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Thanos",
          bio: "Thanos fue un señor de la guerra y genocida de Titán, cuyo objetivo principal era traer estabilidad al universo, ya que creía que su enorme población inevitablemente agotaría todo el suministro de recursos disponibles y eso condenaría a las especies a morir. Para cumplir dicha misión, Thanos se dedicó a buscar las Gemas del Infinito, ya que sus capacidades le ayudarían a matar directa y aleatoriamente a la mitad de la vida en el universo, Thanos optó por buscar las Gemas personalmente, iniciando la Guerra del Infinito.",
          img: "assets/img/thanos.png",
          aparicion: "1973-02-01",
          casa:"Marvel"
        },
        {
          nombre: "Lex Luthor",
          bio: " Luthor, conocido simplemente como Lex Luthor, es un supervillano y el archienemigo de Superman. Fue creado por Jerome Siegel y Joe Shuster, y su primera aparición fue en Action Comics Nº 23 en 1940. Su historia ha sido varias veces cambiada o revisada desde su creación, y su actual origen canónico es el que se cuenta en la nueva continuidad del universo DC. En la nueva continuidad, Lex aparece como un asesor del gobierno contratado para investigar y reducir a Superman. Finalmente termina siendo apresado por sus crímenes al ser derrotado por el Hombre de Acero.En la actualidad forma parte de la Liga de la Justicia tras vencer al Sindicato del Crimen. Aunque este Luthor es proveniente de otra tierra del multiverso DC.",
          img: "assets/img/luthor.png",
          aparicion: "1940-01-01",
          casa:"DC"
        },
        {
          nombre: "Hela",
          bio: "Hela es un personaje ficticio, la diosa niflheimana de la muerte en el universo de Marvel Comics, basada en la diosa nórdica del mismo nombre. La soberana de Helheim y Niflheim, el personaje ha sido una enemiga frecuente de Thor. Hela a menudo trató de ampliar su poder a los muertos que viven en Valhalla también. Estos intentos a menudo llevaron a Hela en conflicto con Odín o su hijo Thor. Hela gobernó el reino y planeó crear un Imperio Asgardiano conquistando otros planetas. Cuando la gente de Asgard se negó a inclinarse ante ella, Hela masacró a los Einherjar, y esclavizó al pueblo, mientras reclutaba a Skurge para que fuera su Ejecutor.",
          img: "assets/img/hela.png",
          aparicion: "1964-03-01",
          casa:"Marvel"
        },
        {
          nombre: "Loki",
          bio: "Él es el hermano adoptado y, a menudo, el enemigo del superhéroe Thor, Él se ganó una reputación como el Dios de las Mentiras y organizó un plan para hacer que Odín destierre a Thor, convirtiéndose en el sucesor del trono de Asgard, mientras descubría su verdadero pasado. Loki tuvo éxito y asumió el trono cuando Odín cayó en el Sueño de Odín y decidió alistarse para destruir Jotunheim, sin embargo, como Thor fue ayudado por los Tres Guerreros a regresar a Asgard, Loki lo confrontó y, cuando sus planes fueron desaprobados por Odín, él se dejó caer al vacío durante el Duelo en el Puente Arcoíris.",
          img: "assets/img/loki.png",
          aparicion: "1962-02-01",
          casa:"Marvel"
        }
      ];
      constructor(){
        console.log("Servicio listo para consumir");
      }

      getVillanos():Villano[]{
        return this.villanos;
      }

      getVillano(idx: number){
        return this.villanos[idx];
      }
      
      
}

export interface Villano{
    nombre:string;
    bio:string;
    img:string;
    aparicion:string;
    casa:string;
    idx?: number;
}