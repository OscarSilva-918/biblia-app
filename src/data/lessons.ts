import type { Lesson } from '../types/lesson';

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Introducción al Evangelio de Lucas",
    description: "Conoce al autor de Lucas, el propósito del evangelio y su contexto.",
    content: `
# Introducción al Evangelio de Lucas

## ¿Quién fue Lucas?
Lucas fue un médico y seguidor cercano de Pablo. A diferencia de los otros evangelistas, Lucas no fue uno de los doce apóstoles, pero dedicó mucho tiempo a investigar y compilar los eventos de la vida de Jesús. Su evangelio es único porque se enfoca en la compasión de Jesús hacia los marginados, las mujeres, los pobres y los pecadores.

## El Propósito de Lucas
Lucas escribió su evangelio para proporcionar un relato ordenado y detallado de la vida, ministerio, muerte y resurrección de Jesús. En el primer capítulo, Lucas menciona que su intención es dar certeza a aquellos que han aprendido acerca de Jesús, basándose en testigos oculares y en la enseñanza de los apóstoles.

> **Versículo clave**: Lucas 1:1-4  
> _"Puesto que muchos han tratado de poner en orden la narración de las cosas que entre nosotros han sido ciertísimas, tal como nos lo enseñaron los que desde el principio lo vieron con sus ojos, y fueron ministros de la palabra, me ha parecido a mí también, después de haber investigado con todo esmero, escribirte ordenadamente, excelentísimo Teófilo, para que conozcas bien la verdad de las cosas en las cuales has sido instruido."_

## El Contexto Histórico
El evangelio fue escrito en un tiempo en el que el Imperio Romano gobernaba sobre Israel. La gente vivía bajo la opresión del imperio, y muchos esperaban la llegada del Mesías que los liberaría. Lucas presenta a Jesús como el Salvador prometido, quien vino a traer liberación no solo para los judíos, sino para todas las naciones.

## El Mensaje Central
A través de su evangelio, Lucas subraya que Jesús vino a buscar y salvar lo que se había perdido, ofreciendo perdón, sanidad y esperanza a todos los que se arrepienten. Lucas también destaca el poder del Espíritu Santo y la importancia de la oración y la compasión en la vida cristiana.

Al leer este evangelio, podemos ver cómo Jesús, el Hijo de Dios, transformó vidas y nos dio el ejemplo perfecto de cómo vivir conforme al Reino de Dios.
    `,
    progress: 0,
    quiz: {
      questions: [
        {
          id: 1,
          question: "¿Quién fue Lucas y qué papel desempeñó en la recopilación del evangelio?",
          answers: [
            { id: 1, text: "Un compañero de Pedro que escribió el evangelio en latín", isCorrect: false },
            { id: 2, text: "Un médico y seguidor de Pablo que recopiló los relatos de testigos oculares", isCorrect: true },
            { id: 3, text: "Uno de los doce apóstoles que escribió su propio evangelio", isCorrect: false },
            { id: 4, text: "Un sacerdote que narró los hechos de Jesús basándose solo en historias populares", isCorrect: false },
            
          ]
        },
        {
          id: 2,
          question: "¿Cuál era el propósito principal del Evangelio de Lucas?",
          answers: [
            { id: 1, text: "Convencer a los judíos de que Jesús era el Mesías", isCorrect: false },
            { id: 2, text: "Proporcionar un relato ordenado y detallado para dar certeza sobre la vida de Jesús", isCorrect: true },
            { id: 3, text: "Contar historias sobre milagros, sin importar el contexto histórico", isCorrect: false },
            { id: 4, text: "Reforzar la autoridad de los apóstoles sobre la iglesia primitiva", isCorrect: false }
          ]
        },
        {
          id: 3,
          question: "¿Qué mensaje central destaca Lucas en su evangelio?",
          answers: [
            { id: 1, text: "Jesús vino a buscar y salvar lo que se había perdido", isCorrect: true },
            { id: 2, text: "El amor y el perdón son solo para los judíos", isCorrect: false },
            { id: 3, text: "El evangelio está solo para los que siguen estrictamente la ley judía", isCorrect: false },
            { id: 4, text: "Jesús rechaza a los pecadores y a los pobres", isCorrect: false }
          ]
        }
      ]
    }
  },
  {
    id: 2,
    title: "El Nacimiento de Jesús",
    description: "Explora el nacimiento de Jesús, el anuncio de su llegada y el cumplimiento de las profecías.",
    content: `
  # El Nacimiento de Jesús
  
  ## El Anuncio del Nacimiento de Juan y Jesús
  En el evangelio de Lucas, el nacimiento de Juan el Bautista y el de Jesús están vinculados por la obra de Dios. El ángel Gabriel anunció a Zacarías que su esposa Isabel, a pesar de su edad avanzada, daría a luz a Juan, quien sería el precursor del Mesías. Más tarde, Gabriel también se le aparece a María para anunciarle que ella sería la madre del Salvador, concebido por el Espíritu Santo.
  
  > **Versículo clave**: Lucas 1:31-33  
  > _"Y ahora concebirás en tu vientre, y darás a luz un hijo, y llamarás su nombre Jesús. Este será grande, y será llamado Hijo del Altísimo; y el Señor Dios le dará el trono de David su padre; y reinará sobre la casa de Jacob para siempre, y su reino no tendrá fin."_
  
  ## El Nacimiento de Jesús en Belén
  Cumpliendo con las profecías, Jesús nació en Belén, un pequeño pueblo de Judea. María y José viajaron allí debido a un decreto del emperador César Augusto, quien había ordenado un censo. Aunque Belén era una ciudad pequeña, la llegada de Jesús no fue pasada por alto. Jesús nació en un pesebre porque no había lugar para ellos en la posada.
  
  > **Versículo clave**: Lucas 2:7  
  > _"Y dio a luz a su hijo primogénito, y lo envolvió en pañales, y lo acostó en un pesebre, porque no había lugar para ellos en el mesón."_
  
  ## El Anuncio a los Pastores
  Esa misma noche, un ángel apareció a unos pastores en el campo y les dio la buena nueva del nacimiento de Jesús. Los pastores, al escuchar este mensaje, fueron a Belén y encontraron al niño en el pesebre, tal como el ángel les había dicho. Ellos fueron testigos de este acontecimiento tan especial y difundieron la noticia a todos los que encontraron.
  
  > **Versículo clave**: Lucas 2:10-11  
  > _"Pero el ángel les dijo: No temáis, porque he aquí os doy nuevas de gran gozo, que será para todo el pueblo: que os ha nacido hoy, en la ciudad de David, un Salvador, que es Cristo el Señor."_
  
  ## La Presentación de Jesús en el Templo
  Ocho días después de su nacimiento, Jesús fue llevado al templo en Jerusalén para ser presentado ante el Señor, como lo requería la ley de Moisés. Allí, un anciano llamado Simeón, que esperaba la consolación de Israel, reconoció a Jesús como el Mesías prometido. También la profetisa Ana, una mujer anciana que servía en el templo, dio gracias a Dios y habló del niño a todos los que esperaban la redención de Jerusalén.
  
  > **Versículo clave**: Lucas 2:29-32  
  > _"Ahora, Señor, despides a tu siervo en paz, conforme a tu palabra; porque han visto mis ojos tu salvación, la cual has preparado en presencia de todos los pueblos; luz para revelación a los gentiles, y gloria de tu pueblo Israel."_
  
  En resumen, el nacimiento de Jesús no solo cumple las profecías, sino que es un evento que trae alegría y esperanza a todos los pueblos. Jesús, el Salvador del mundo, vino a traer salvación, y su llegada fue anunciada a los humildes pastores y celebrada en el templo por los justos.
  
    `,
    progress: 0,
    quiz: {
      questions: [
        {
          id: 1,
          question: "¿Dónde nació Jesús según el evangelio de Lucas?",
          answers: [
            { id: 1, text: "En Jerusalén", isCorrect: false },
            { id: 2, text: "En Nazaret", isCorrect: false },
            { id: 3, text: "En Belén", isCorrect: true },
            { id: 4, text: "En Capernaúm", isCorrect: false }
          ]
        },
        {
          id: 2,
          question: "¿Qué le dijo el ángel a los pastores cuando les anunció el nacimiento de Jesús?",
          answers: [
            { id: 1, text: "No temáis, porque os traigo buenas nuevas de gran gozo", isCorrect: true },
            { id: 2, text: "Venid y adorad al Niño en Belén", isCorrect: false },
            { id: 3, text: "Que se alegraran por la salvación que traería el niño", isCorrect: false },
            { id: 4, text: "Que se marcharan a sus casas", isCorrect: false }
          ]
        },
        {
          id: 3,
          question: "¿Qué reconoció Simeón cuando vio a Jesús en el templo?",
          answers: [
            { id: 1, text: "Que era el Mesías prometido", isCorrect: true },
            { id: 2, text: "Que sería un rey terrenal", isCorrect: false },
            { id: 3, text: "Que traería riqueza al pueblo de Israel", isCorrect: false },
            { id: 4, text: "Que salvaría solo a los judíos", isCorrect: false }
          ]
        },
        {
          id: 4,
          question: "¿Quiénes fueron los primeros en recibir la noticia del nacimiento de Jesús?",
          answers: [
            { id: 1, text: "Los sacerdotes del templo", isCorrect: false },
            { id: 2, text: "Los pastores", isCorrect: true },
            { id: 3, text: "Los magos de oriente", isCorrect: false },
            { id: 4, text: "Los discípulos de Jesús", isCorrect: false }
          ]
        }
      ]
    }
  },
  {
    id: 3,
    title: "El Ministerio de Jesús en Galilea",
    description: "Explora los primeros pasos del ministerio de Jesús, sus enseñanzas, milagros y la llamada de sus discípulos.",
    content: `
  # El Ministerio de Jesús en Galilea
  
  ## El Bautismo de Jesús
  El ministerio de Jesús en Galilea comienza con su bautismo en el río Jordán por Juan el Bautista. Este evento marca el inicio de su misión pública. Durante el bautismo, el Espíritu Santo descendió sobre Jesús en forma de paloma, y una voz del cielo proclamó: _"Tú eres mi Hijo amado; en ti tengo complacencia."_ (Lucas 3:22).
  
  > **Versículo clave**: Lucas 3:22  
  > _"Y el Espíritu Santo descendió sobre él en forma corporal, como una paloma; y una voz vino del cielo, que decía: Tú eres mi Hijo amado; en ti tengo complacencia."_
  
  ## La Tentación de Jesús
  Después de su bautismo, Jesús fue guiado por el Espíritu Santo al desierto, donde fue tentado por el diablo durante 40 días. Jesús resistió las tentaciones, usando la palabra de Dios para rechazar cada oferta de Satanás, demostrando su obediencia al Padre.
  
  > **Versículo clave**: Lucas 4:4  
  > _"Y Jesús le respondió, diciendo: Escrito está: No sólo de pan vivirá el hombre, sino de toda palabra de Dios."_
  
  ## La Comienzo de su Ministerio Público
  Jesús comenzó su ministerio público predicando en las sinagogas de Galilea. En Nazaret, su ciudad natal, leyó un pasaje de Isaías en la sinagoga, proclamando que Él era el cumplimiento de la profecía. Al principio, las personas se asombraron, pero pronto comenzaron a rechazarle.
  
  > **Versículo clave**: Lucas 4:18-19  
  > _"El Espíritu del Señor está sobre mí, por cuanto me ha ungido para dar buenas nuevas a los pobres; me ha enviado a sanar a los quebrantados de corazón, a pregonar libertad a los cautivos, y vista a los ciegos; a poner en libertad a los oprimidos, a predicar el año agradable del Señor."_
  
  ## Llamado de los Primeros Discípulos
  Jesús llamó a varios discípulos a seguirle. Entre ellos se encontraban Pedro, Juan y Santiago, quienes, después de un milagro en el que Jesús les mostró una gran pesca, dejaron todo y siguieron a Jesús.
  
  > **Versículo clave**: Lucas 5:10-11  
  > _"Y Jesús dijo a Simón: No temas; desde ahora serás pescador de hombres. Y cuando trajeron a tierra las barcas, dejándolo todo, le siguieron."_
  
  ## Milagros y Enseñanzas
  A lo largo de su ministerio en Galilea, Jesús realizó numerosos milagros, sanando enfermos, resucitando muertos, y expulsando demonios. También enseñó a las multitudes a través de parábolas, explicando el Reino de Dios y llamando al arrepentimiento.
  
  > **Versículo clave**: Lucas 7:22  
  > _"Respondiendo Jesús, les dijo: Id y haced saber a Juan lo que habéis visto y oído: los ciegos ven, los cojos andan, los leprosos son limpios, los sordos oyen, los muertos son resucitados, a los pobres es anunciado el evangelio."_
  
  ## La Confesión de Pedro
  En uno de los momentos clave de su ministerio, Jesús preguntó a sus discípulos quién decían que Él era. Pedro respondió: _"El Cristo de Dios"_. Jesús les reveló que sería necesario sufrir y morir antes de ser glorificado.
  
  > **Versículo clave**: Lucas 9:20  
  > _"Él les dijo: Y vosotros, ¿quién decís que soy? Pedro, respondiendo, dijo: El Cristo de Dios."_
  
  En resumen, el ministerio de Jesús en Galilea estuvo marcado por sus enseñanzas sobre el Reino de Dios, sus milagros que demostraron su autoridad y su llamado a los discípulos para seguirle y ser partícipes de su misión. A lo largo de esta sección, Jesús enseñó sobre la importancia del arrepentimiento, la fe, y el amor a Dios y al prójimo.
  
    `,
    progress: 0,
    quiz: {
      questions: [
        {
          id: 1,
          question: "¿Quién bautizó a Jesús en el río Jordán?",
          answers: [
            { id: 1, text: "Pedro", isCorrect: false },
            { id: 2, text: "Juan el Bautista", isCorrect: true },
            { id: 3, text: "Jesucristo mismo", isCorrect: false },
            { id: 4, text: "El Espíritu Santo", isCorrect: false }
          ]
        },
        {
          id: 2,
          question: "¿Qué hizo Jesús para resistir las tentaciones del diablo en el desierto?",
          answers: [
            { id: 1, text: "Usó su poder divino para rechazar al diablo", isCorrect: false },
            { id: 2, text: "Habló con el diablo, pero no resistió", isCorrect: false },
            { id: 3, text: "Usó la palabra de Dios para rechazar cada tentación", isCorrect: true },
            { id: 4, text: "Se retiró y se fue al desierto a orar", isCorrect: false }
          ]
        },
        {
          id: 3,
          question: "¿Qué milagro realizó Jesús para llamar a los primeros discípulos?",
          answers: [
            { id: 1, text: "Caminó sobre el agua", isCorrect: false },
            { id: 2, text: "Resucitó a un muerto", isCorrect: false },
            { id: 3, text: "Realizó una gran pesca en el mar de Galilea", isCorrect: true },
            { id: 4, text: "Sanó a un ciego", isCorrect: false }
          ]
        },
        {
          id: 4,
          question: "¿Qué reveló Jesús a sus discípulos cuando les preguntó quién decía la gente que Él era?",
          answers: [
            { id: 1, text: "Que Él era el Cristo de Dios", isCorrect: true },
            { id: 2, text: "Que Él era el Rey de los Judíos", isCorrect: false },
            { id: 3, text: "Que Él era el Mesías prometido", isCorrect: false },
            { id: 4, text: "Que Él era un profeta mayor que Moisés", isCorrect: false }
          ]
        }
      ]
    }
  },
  {
    id: 4,
    title: "El Viaje de Jesús a Jerusalén",
    description: "Estudia el viaje de Jesús a Jerusalén, sus enseñanzas y milagros durante el camino, y su preparación para el sacrificio final.",
    content: `
  # El Viaje de Jesús a Jerusalén
  
  ## La Resolución de Jesús
  En Lucas 9:51, se nos dice que Jesús "resolvió firmemente ir a Jerusalén", marcando el comienzo de su viaje hacia la ciudad donde se cumpliría su misión de redención. A lo largo de este viaje, Jesús enseñó a sus discípulos y a las multitudes acerca del Reino de Dios, la fe, y la salvación.
  
  > **Versículo clave**: Lucas 9:51  
  > _"Aconteció que, cuando se acercaba el tiempo de su ascensión, él resolvió ir a Jerusalén."_
  
  ## Enseñanzas y Advertencias
  Durante su viaje, Jesús enseñó sobre el Reino de Dios, la importancia de la humildad, el perdón, y la necesidad de seguirle con un corazón sincero. También advirtió a sus seguidores acerca de las pruebas que enfrentarían al seguirle y les habló sobre la importancia de la oración.
  
  > **Versículo clave**: Lucas 11:9-10  
  > _"Y yo os digo: Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá. Porque todo aquel que pide, recibe; y el que busca, halla; y al que llama, se le abrirá."_
  
  ## La Parábola del Buen Samaritano
  En una de las historias más conocidas, Jesús contó la parábola del buen samaritano para enseñar la importancia de amar al prójimo, sin importar su nacionalidad o condición social. En esta parábola, un samaritano demuestra amor y compasión hacia un judío herido, mientras que un sacerdote y un levita lo pasan por alto.
  
  > **Versículo clave**: Lucas 10:33-34  
  > _"Pero un samaritano, que iba de camino, vino cerca de él; y viéndole, fue movido a misericordia, y acercándose, vendó sus heridas, echándoles aceite y vino; y poniéndole sobre su propia cabalgadura, lo llevó al mesón, y cuidó de él."_
  
  ## La Parábola del Hijo Pródigo
  En otra famosa parábola, Jesús habló sobre el hijo pródigo, un joven que pidió su herencia y malgastó todo en una vida de pecado. Al final, regresó arrepentido, y su padre lo recibió con los brazos abiertos, enseñando la lección sobre el arrepentimiento y el perdón divino.
  
  > **Versículo clave**: Lucas 15:20  
  > _"Y levantándose, vino a su padre; y cuando aún estaba lejos, lo vio su padre, y fue movido a misericordia, y corrió, y se echó sobre su cuello, y le besó."_
  
  ## La Entrada Triunfal a Jerusalén
  El viaje culminó con la entrada triunfal de Jesús a Jerusalén, donde fue recibido como un rey por la multitud que proclamaba: _"¡Bendito el rey que viene en el nombre del Señor!"_ (Lucas 19:38). Este evento marcó el inicio de la última semana de su vida en la tierra.
  
  > **Versículo clave**: Lucas 19:38  
  > _"Diciendo: ¡Bendito el rey que viene en el nombre del Señor! Paz en el cielo, y gloria en las alturas."_
  
  En resumen, el viaje de Jesús a Jerusalén fue una serie de enseñanzas, advertencias y milagros, mientras se acercaba a su destino final. A lo largo del viaje, Jesús continuó proclamando el mensaje del Reino de Dios y preparando a sus seguidores para lo que estaba por venir.
  
    `,
    progress: 0,
    quiz: {
      questions: [
        {
          id: 1,
          question: "¿Qué resolvió firmemente hacer Jesús en Lucas 9:51?",
          answers: [
            { id: 1, text: "Ir a Galilea", isCorrect: false },
            { id: 2, text: "Ir a Jerusalén", isCorrect: true },
            { id: 3, text: "Retirarse a orar", isCorrect: false },
            { id: 4, text: "Llamar a los discípulos", isCorrect: false }
          ]
        },
        {
          id: 2,
          question: "¿Qué enseña la parábola del buen samaritano?",
          answers: [
            { id: 1, text: "Amar al prójimo, sin importar su nacionalidad o condición social", isCorrect: true },
            { id: 2, text: "La importancia de la justicia en la sociedad", isCorrect: false },
            { id: 3, text: "La necesidad de ayudar solo a aquellos de nuestra misma fe", isCorrect: false },
            { id: 4, text: "La importancia de la riqueza para hacer el bien", isCorrect: false }
          ]
        },
        {
          id: 3,
          question: "¿Qué hizo el padre del hijo pródigo cuando lo vio regresar?",
          answers: [
            { id: 1, text: "Lo reprendió severamente", isCorrect: false },
            { id: 2, text: "Lo abrazó y lo perdonó", isCorrect: true },
            { id: 3, text: "Lo ignoró", isCorrect: false },
            { id: 4, text: "Le quitó la herencia", isCorrect: false }
          ]
        },
        {
          id: 4,
          question: "¿Qué proclamó la multitud cuando Jesús entró en Jerusalén?",
          answers: [
            { id: 1, text: "¡Bendito el rey que viene en el nombre del Señor!", isCorrect: true },
            { id: 2, text: "¡Hosanna en las alturas!", isCorrect: false },
            { id: 3, text: "¡Salvación para todos!", isCorrect: false },
            { id: 4, text: "¡Bendito sea el Mesías!", isCorrect: false }
          ]
        }
      ]
    }
  },  
  {
    id: 5,
    title: "La Última Semana de Jesús en Jerusalén",
    description: "Estudia los eventos clave de la última semana de Jesús en Jerusalén, incluyendo su enseñanza en el templo, la última cena, y su sacrificio en la cruz.",
    content: `
  # La Última Semana de Jesús en Jerusalén
  
  ## La Entrada Triunfal
  La semana comenzó con la entrada triunfal de Jesús en Jerusalén, donde fue aclamado como el rey. La multitud proclamaba _"¡Bendito el rey que viene en el nombre del Señor!"_, reconociendo a Jesús como el Mesías prometido. Sin embargo, a pesar de la celebración, Jesús sabía que su misión estaba a punto de culminar en sacrificio.
  
  > **Versículo clave**: Lucas 19:38  
  > _"Diciendo: ¡Bendito el rey que viene en el nombre del Señor! Paz en el cielo, y gloria en las alturas."_
  
  ## La Purificación del Templo
  Jesús purificó el templo, expulsando a los mercaderes y diciendo que la casa de su Padre debía ser una casa de oración, no una cueva de ladrones. Esta acción fue una de las principales razones por las que las autoridades religiosas se sintieron amenazadas por él.
  
  > **Versículo clave**: Lucas 19:46  
  > _"Escrito está: 'Mi casa será casa de oración, pero vosotros la habéis hecho cueva de ladrones.'"_
  
  ## Las Enseñanzas en el Templo
  Durante los días siguientes, Jesús enseñó en el templo y desafió a los líderes religiosos. Les habló sobre la importancia de la fe, el arrepentimiento, y el juicio de Dios. También pronunció varias parábolas, incluyendo la parábola de los labradores malvados, que hablaba sobre el rechazo de los líderes religiosos a los mensajeros de Dios.
  
  > **Versículo clave**: Lucas 20:9  
  > _"Entonces empezó a decir al pueblo esta parábola: Un hombre plantó una viña, la arrendó a unos labradores y se fue lejos por mucho tiempo."_
  
  ## La Última Cena
  En la víspera de su arresto, Jesús celebró la Pascua con sus discípulos, instituyendo lo que conocemos como la Santa Cena. Durante esta cena, Jesús compartió el pan y el vino con sus discípulos, diciendo que estos símbolos representaban su cuerpo y su sangre, que serían dados por la salvación de la humanidad.
  
  > **Versículo clave**: Lucas 22:19-20  
  > _"Y tomó el pan, y dio gracias, y lo partió, y les dio, diciendo: 'Este es mi cuerpo, que por vosotros es dado; haced esto en memoria de mí.' De igual manera, después de haber cenado, tomó la copa, diciendo: 'Esta copa es el nuevo pacto en mi sangre, que por vosotros se derrama.'"_
  
  ## La Oración en el Getsemaní
  Después de la cena, Jesús se retiró al monte de los Olivos para orar. Allí, en el jardín de Getsemaní, luchó en su alma, pidiendo a su Padre que, si era posible, pasara de él el cáliz del sufrimiento. Sin embargo, aceptó la voluntad de Dios, reconociendo que su sacrificio era necesario para la redención de la humanidad.
  
  > **Versículo clave**: Lucas 22:42  
  > _"Padre, si quieres, pasa de mí esta copa; pero no se haga mi voluntad, sino la tuya."_
  
  ## El Arresto y el Juicio
  Jesús fue arrestado por las autoridades religiosas y llevado ante el Sanedrín, donde fue acusado de blasfemia. Luego fue entregado a Pilato, el gobernador romano, quien, aunque no encontraba culpabilidad en él, lo condenó a muerte por presión de la multitud.
  
  > **Versículo clave**: Lucas 23:1-2  
  > _"Entonces se levantaron contra él y lo trajeron ante Pilato, diciendo: 'Hemos hallado que este pervierte a la nación, y que prohíbe dar tributo a César, diciendo que él mismo es Cristo, el rey.'"_
  
  ## La Crucifixión y la Muerte de Jesús
  Jesús fue condenado a ser crucificado y, tras un sufrimiento indescriptible, murió en la cruz. Al morir, Jesús exclamó: _"Padre, en tus manos encomiendo mi espíritu."_
  
  > **Versículo clave**: Lucas 23:46  
  > _"Y Jesús, clamando a gran voz, dijo: 'Padre, en tus manos encomiendo mi espíritu.' Y habiendo dicho esto, expiró."_
  
  ## La Resurrección y la Esperanza
  Tres días después de su muerte, Jesús resucitó de entre los muertos, venciendo al pecado y a la muerte. Su resurrección es la base de nuestra esperanza como cristianos, pues asegura nuestra salvación y vida eterna.
  
  > **Versículo clave**: Lucas 24:6-7  
  > _"No está aquí, sino que ha resucitado. Acordaos de lo que os habló cuando aún estaba en Galilea, diciendo: 'Es necesario que el Hijo del Hombre sea entregado en manos de hombres pecadores, y que sea crucificado, y al tercer día resucite.'"_
  
    `,
    progress: 0,
    quiz: {
      questions: [
        {
          id: 1,
          question: "¿Qué proclamaba la multitud cuando Jesús entró en Jerusalén?",
          answers: [
            { id: 1, text: "¡Bendito el rey que viene en el nombre del Señor!", isCorrect: true },
            { id: 2, text: "¡Hosanna en las alturas!", isCorrect: false },
            { id: 3, text: "¡Salvación para todos!", isCorrect: false },
            { id: 4, text: "¡Bendito sea el Mesías!", isCorrect: false }
          ]
        },
        {
          id: 2,
          question: "¿Qué hizo Jesús en el templo de Jerusalén?",
          answers: [
            { id: 1, text: "Expulsó a los mercaderes y dijo que la casa de su Padre sería casa de oración", isCorrect: true },
            { id: 2, text: "Hizo milagros y sanó a los enfermos", isCorrect: false },
            { id: 3, text: "Enseñó a los discípulos", isCorrect: false },
            { id: 4, text: "Ofreció sacrificios", isCorrect: false }
          ]
        },
        {
          id: 3,
          question: "¿Qué institución Jesús estableció en la última cena?",
          answers: [
            { id: 1, text: "El bautismo", isCorrect: false },
            { id: 2, text: "La oración del Padre Nuestro", isCorrect: false },
            { id: 3, text: "La Santa Cena", isCorrect: true },
            { id: 4, text: "El ayuno", isCorrect: false }
          ]
        },
        {
          id: 4,
          question: "¿Qué pidió Jesús en Getsemaní?",
          answers: [
            { id: 1, text: "Que se le librara de la crucifixión si era posible", isCorrect: true },
            { id: 2, text: "Que los discípulos no se durmieran", isCorrect: false },
            { id: 3, text: "Que el juicio se llevara a cabo rápidamente", isCorrect: false },
            { id: 4, text: "Que el reino de Dios llegara pronto", isCorrect: false }
          ]
        },
        {
          id: 5,
          question: "¿Qué exclamó Jesús antes de morir?",
          answers: [
            { id: 1, text: "Padre, en tus manos encomiendo mi espíritu", isCorrect: true },
            { id: 2, text: "Está consumado", isCorrect: false },
            { id: 3, text: "Padre, perdona a los que me crucifican", isCorrect: false },
            { id: 4, text: "Espera la resurrección", isCorrect: false }
          ]
        }
      ]
    }
  },
  {
    id: 6,
    title: "La Resurrección de Jesús y su Aparición a los Discípulos",
    description: "Estudia los eventos de la resurrección de Jesús, su aparición a las mujeres, a los discípulos en el camino a Emaús, y su comisión final a los apóstoles.",
    content: `
  # La Resurrección de Jesús y su Aparición a los Discípulos
  
  ## La Resurrección de Jesús
  El domingo temprano, las mujeres que habían seguido a Jesús fueron al sepulcro y encontraron la piedra removida y el cuerpo de Jesús ausente. Un ángel les reveló que Jesús había resucitado, como Él mismo lo había predicho. La resurrección de Jesús es el fundamento de nuestra fe cristiana, ya que demuestra su victoria sobre el pecado y la muerte.
  
  > **Versículo clave**: Lucas 24:5-6  
  > _"Pero ellos, aterrados, se inclinaron hacia el suelo, y les dijeron: ¿Por qué buscáis entre los muertos al que vive? No está aquí, sino que ha resucitado. Acordaos de lo que os habló cuando aún estaba en Galilea."_
  
  ## La Aparición a las Mujeres
  Jesús se apareció primero a las mujeres que estaban en el sepulcro. Les dio la noticia de su resurrección y las envió a contarles a los discípulos lo que había sucedido. Este hecho subraya el papel crucial de las mujeres en el ministerio de Jesús.
  
  > **Versículo clave**: Lucas 24:9  
  > _"Y volviendo del sepulcro, dieron nuevas de todas estas cosas a los once y a todos los demás."_
  
  ## La Aparición a los Discípulos en el Camino a Emaús
  Dos discípulos que viajaban hacia Emaús fueron alcanzados por Jesús, aunque no lo reconocieron de inmediato. A través de las Escrituras, Jesús les explicó cómo el Mesías debía sufrir y resucitar. Finalmente, al partir el pan con ellos, sus ojos fueron abiertos y lo reconocieron. Esto les llevó a regresar rápidamente a Jerusalén para contarles a los demás discípulos sobre su encuentro con el resucitado.
  
  > **Versículo clave**: Lucas 24:30-31  
  > _"Y aconteció que, estando sentados con ellos a la mesa, tomó el pan, y lo bendijo, y lo partió, y les dio. Entonces les fueron abiertos los ojos, y le conocieron; mas él desapareció de su vista."_
  
  ## La Aparición a los Discípulos en Jerusalén
  Jesús se apareció a los discípulos reunidos en Jerusalén, mostrándoles sus heridas y demostrando que Él era verdaderamente resucitado en cuerpo. Los discípulos, al principio aterrados, se llenaron de gozo al ver a Jesús vivo. Jesús les dio paz, les enseñó acerca de las Escrituras y les mostró cómo Él había cumplido las profecías del Antiguo Testamento sobre su muerte y resurrección.
  
  > **Versículo clave**: Lucas 24:36-39  
  > _"Mientras ellos hablaban de estas cosas, Jesús se puso en medio de ellos, y les dijo: Paz a vosotros. Entonces se espantaron y se atemorizaron, y pensaban que veían espíritu. Pero él les dijo: ¿Por qué estáis turbados, y vienen a vuestro corazón estos pensamientos? Mirad mis manos y mis pies, que soy yo mismo; palpad y ved, porque un espíritu no tiene carne ni huesos, como veis que yo tengo."_
  
  ## La Gran Comisión
  Antes de ascender al cielo, Jesús dio a sus discípulos la gran comisión de predicar el evangelio a todas las naciones. Les dio el mandato de bautizar en el nombre del Padre, del Hijo y del Espíritu Santo, y les prometió que estaría con ellos siempre, hasta el fin del mundo. Esta comisión se convirtió en la misión central de la iglesia cristiana.
  
  > **Versículo clave**: Lucas 24:46-48  
  > _"Y les dijo: Así está escrito, que el Cristo padecería, y resucitaría de los muertos al tercer día, y que en su nombre se predicaría el arrepentimiento y el perdón de pecados en todas las naciones, comenzando desde Jerusalén. Y vosotros sois testigos de estas cosas."_
  
  ## La Ascensión de Jesús
  Finalmente, Jesús ascendió al cielo en presencia de sus discípulos. Mientras lo observaban, dos ángeles les aparecieron y les aseguraron que Jesús volvería de la misma manera en que se fue. La ascensión de Jesús es un recordatorio de que Él ahora está en el cielo, intercediendo por nosotros, y que un día regresará para juzgar al mundo.
  
  > **Versículo clave**: Lucas 24:51  
  > _"Y aconteció que bendiciéndolos, se apartó de ellos, y fue llevado arriba al cielo."_
  
    `,
    progress: 0,
    quiz: {
      questions: [
        {
          id: 1,
          question: "¿Qué encontraron las mujeres en el sepulcro de Jesús?",
          answers: [
            { id: 1, text: "La piedra removida y el cuerpo de Jesús ausente", isCorrect: true },
            { id: 2, text: "A Jesús resucitado", isCorrect: false },
            { id: 3, text: "La tumba cerrada y sellada", isCorrect: false },
            { id: 4, text: "El cuerpo de Jesús aún allí", isCorrect: false }
          ]
        },
        {
          id: 2,
          question: "¿A quién se apareció Jesús en primer lugar después de su resurrección?",
          answers: [
            { id: 1, text: "A las mujeres que fueron al sepulcro", isCorrect: true },
            { id: 2, text: "A Pedro", isCorrect: false },
            { id: 3, text: "A los discípulos en el camino a Emaús", isCorrect: false },
            { id: 4, text: "A los once apóstoles", isCorrect: false }
          ]
        },
        {
          id: 3,
          question: "¿Qué le explicó Jesús a los dos discípulos en el camino a Emaús?",
          answers: [
            { id: 1, text: "Les explicó las Escrituras y cómo Él debía sufrir y resucitar", isCorrect: true },
            { id: 2, text: "Les explicó cómo predicar el evangelio", isCorrect: false },
            { id: 3, text: "Les explicó cómo deben orar", isCorrect: false },
            { id: 4, text: "Les dio instrucciones para fundar la iglesia", isCorrect: false }
          ]
        },
        {
          id: 4,
          question: "¿Qué mensaje les dio Jesús a sus discípulos antes de ascender al cielo?",
          answers: [
            { id: 1, text: "Que predicaran el arrepentimiento y el perdón de pecados en todas las naciones", isCorrect: true },
            { id: 2, text: "Que esperaran el fin del mundo", isCorrect: false },
            { id: 3, text: "Que oraran sin cesar", isCorrect: false },
            { id: 4, text: "Que construyeran un templo en su honor", isCorrect: false }
          ]
        },
        {
          id: 5,
          question: "¿Qué sucedió después de que Jesús ascendió al cielo?",
          answers: [
            { id: 1, text: "Dos ángeles les aseguraron que Jesús regresaría", isCorrect: true },
            { id: 2, text: "Los discípulos fueron a predicar a todas las naciones", isCorrect: false },
            { id: 3, text: "Los discípulos se dispersaron", isCorrect: false },
            { id: 4, text: "Jesús les dijo que no lo siguieran", isCorrect: false }
          ]
        }
      ]
    }
  }
  
];
