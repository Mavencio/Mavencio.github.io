/**
 * @file jquery.translate.js
 * @brief jQuery plugin to translate text in the client side.
 * @author Manuel Fernandes
 * @site
 * @version 0.9
 * @license MIT license <http://www.opensource.org/licenses/MIT>
 *
 * translate.js is a jQuery plugin to translate text in the client side.
 *
 */

 jQuery(function ($) {
  $.fn.translate = function (options) {
      var that = this; //a reference to ourselves

      var settings = {
          css: "trn",
          lang: "es" /*,
    t: {"translate": {
        pt: "tradução",
        br: "tradução"}
    }*/,
      };
      settings = $.extend(settings, options || {});
      if (settings.css.lastIndexOf(".", 0) !== 0)
          //doesn't start with '.'
          settings.css = "." + settings.css;

      var t = settings.t;

      //public methods
      this.lang = function (l) {
          if (l) {
              settings.lang = l;
              this.translate(settings); //translate everything
          }

          return settings.lang;
      };

      this.get = function (index) {
          var res = index;

          try {
              res = t[index][settings.lang];
          } catch (err) {
              //not found, return index
              return index;
          }

          if (res) return res;
          else return index;
      };

      this.g = this.get;

      //main
      this.find(settings.css).each(function (i) {
          var $this = $(this);

          var trn_key = $this.attr("data-trn-key");
          if (!trn_key) {
              trn_key = $this.html();
              $this.attr("data-trn-key", trn_key); //store key for next time
          }

          $this.html(that.get(trn_key));
      });

      return this;
  };

  var t = {
    // FIXED CONTENT
    nav_01: {
      pt: "Início",
      es: "Inicio",
      en: "Main",
      ru: "Главная",
      gr: "Κύρια"
    },
    nav_01_subtitle: {
      pt: "Principal",
      es: "Principal",
      en: "Homepage",
      ru: "Домашняя Страница",
      gr: "Αρχική Σελίδα"
    },
    nav_02: {
      pt: "O jogo",
      es: "El juego",
      en: "The Game",
      ru: "Игра",
      gr: "Το Παιχνίδι"
    },
    nav_02_subtitle: {
      pt: "Features únicas",
      es: "Features Unicas",
      en: "Unique Features",
      ru: "Особенности",
      gr: "Χαρακτηριστικά"
    },
    nav_03: {
      pt: "Lore",
      es: "Lore",
      en: "Our Lore",
      ru: "История",
      gr: "Ιστορία"
    },
    nav_03_subtitle: {
      pt: "O projeto",
      es: "El proyecto",
      en: "Project History",
      ru: "История Project",
      gr: "Ιστορικό Έργου"
    },
    nav_04: {
      pt: "Crusader",
      es: "Crusader",
      en: "Crusader",
      ru: "Крестоносец",
      gr: "Crusader"
    },
    nav_04_subtitle: {
      pt: "A Crônica",
      es: "La Cronica",
      en: "The Chronicle",
      ru: "Хроника",
      gr: "To Χρονικό"
    },
    nav_05: {
      pt: "Roadmap",
      es: "Roadmap",
      en: "Roadmap",
      ru: "Roadmap",
      gr: "Roadmap"
    },
    nav_05_subtitle: {
      pt: "Nossos Planos",
      es: "Nuestros planes",
      en: "Our Plans",
      ru: "Наши Планы",
      gr: "Τα σχέδιά μας"
    },
    nav_06: {
      pt: "Doações",
      es: "Donaciones",
      en: "Donate",
      ru: "Донат",
      gr: "Δωρεές"
    },
    nav_06_subtitle: {
      pt: "E recompensas",
      es: "Y regalos",
      en: "Get Rewards",
      ru: "Получить Награды",
      gr: "Πάρτε Ανταμοιβές"
    },
    nav_07: {
      pt: "War Packs",
      es: "War Packs",
      en: "War Packs",
      ru: "Боевые паки",
      gr: "War Packs"
    },
    nav_07_subtitle: {
      pt: "Pré-abertura",
      es: "Preapertura",
      en: "Pre-opening",
      ru: "до открытия",
      gr: "Προάνοιγμα"
    },
    nav_08: {
      pt: "Galeria",
      es: "Galería",
      en: "Gallery",
      ru: "Галерея",
      gr: "Συλλογή"
    },
    nav_08_subtitle: {
      pt: "Assista",
      es: "Ver ahora",
      en: "Watch Now",
      ru: "Смотри Сейчас",
      gr: "Παρακολουθήστε Τώρα"
    },

    // HOME
    home_title: {
      pt: "O Retorno do Rei",
      es: "El retorno del Rey",
      en: "The Return of the King",
      ru: "Возвращение Короля",
      gr: "H Επιστροφή του Βασιλιά"
    },
    home_subtitle: {
      pt: "by Project Essence",
      es: "by Project Essence",
      en: "by Project Essence",
      ru: "от Project Essence",
      gr: "από τους δημιουργούς του Project Essence"
    },
    home_desc: {
      pt: "Experimente o maior e mais esperado lançamento do ano, neste inverno!",
      es: "Experimente el lanzamiento más grande y esperado del año, neste invierno!",
      en: "Experience the largest and most anticipated launch of the year, this Winter!",
      ru: "Испытайте крупнейший и самый ожидаемый запуск года этой Зимой!",
      gr: "Ζήστε το μεγαλύτερο και πιο πολυαναμενόμενο λανσάρισμα της χρονιάς, αυτόν τον Χειμώνα"
    },
    
    // FEATURES
    features_title: {
      pt: "O jogo",
      es: "El Juego",
      en: "The game",
      ru: "Игра",
      gr: "To παιχνίδι"
    },
    features_subtitle: {
      pt: "Features únicas",
      es: "Features unicas",
      en: "Unique features",
      ru: "Уникальные Особенности",
      gr: "Μοναδικά Χαρακτηριστικά"
    },
    features_title1: {
      pt: "Rates de XP aprimorados",
      es: "Rates de XP mejoradas",
      en: "Enhanced EXP rates",
      ru: "Усиленный показатель опыта",
      gr: "Ενισχυμένα EXP rates"
    },
    features_content1: {
      pt: "Projetamos os 'Enhanced Rates (rates aprimorados)' para melhorar a jogabilidade geral e as experiências dos jogadores. 'Enhanced EXP' é determinado através de um sistema de exp dinâmico. O sistema de exp é projetado para manter um bom equilíbrio entre os níveis médios do servidor e focado nos principais aspectos de PvP do jogo.",
      es: "Diseñamos 'Enhanced Rates (Rates mejoradas)' para mejorar el juego en general y las experiencias de los jugadores. Lo 'Enhanced EXP' se determina a través de un sistema dinámico de exp. El sistema de experiencia está diseñado para mantener un buen equilibrio entre los niveles medios de los servidores y se centra en los principales aspectos PvP del juego.",
      en: "We have designed the 'Enhanced Rates' to improve overall gameplay and player experiences. Enhanced Exp is determined through a dynamic exp system. The exp system is designed to maintain good balances between the server's average levels and focused on the main PvP aspects of the game.",
      ru: "Мы разработали «Усиленный показатель опыта», чтобы улучшить общий игровой процесс и впечатления игроков. Усиленный показатель опыта определяется через динамическую систему опыта. Система опыта предназначена для поддержания хорошего баланса между средними уровнями сервера и ориентирована на основные аспекты PvP в игре.",
      gr: "Έχουμε σχεδιάσει τα 'Ενισχυμένα Rates' προκειμένου να βελτιώσουμε το συνολικό gameplay και την εμπειρία των παικτών. Το ενισχυμένο EXP καθορίζεται μέσω ενός δυναμικού exp συστήματος. Αυτό το σύστημα exp είναι σχεδιασμένο να διατηρεί αρμονικές ισορροπίες στον μέσο όρο των levels του διακομιστή και εστιάζει στις κύριες PvP πτυχές του παιχνιδιού.",    
    },
    features_title2: {
      pt: "Epic Bosses Modernos",
      es: "Epic Bosses Modernos",
      en: "Modern Epic Bosses",
      ru: "Современные Epic Bosses",
      gr: "Μοντέρνα Epic Bosses"
    },
    features_content2: {
      pt: "Mergulhe no vasto mundo das experiências do Project Warthrone, Epic Raids reformulários que atendem a ambos os fusos horários das regiões EU e SA. Esteja preparado para jogar com a mecânica adequada e espere recompensas promissoras!",
      es: "Sumérgete en el vasto mundo de Project Warthrone y experimenta los Epic Raids recientemente renovadas que se adaptan a las zonas horarias de EU Y SA. Prepárate para jugar con la mecánica adecuada y espera recompensas prometedoras",
      en: "Immerse into the vast world of Project Warthrone and experiences newly revamped Epic Raids that caters towards both EU/SA Timezones. Be prepared to play with proper mechanics and expect promising rewards!",
      ru: "Погрузитесь в огромный мир Project Warthrone и примите участие в недавно обновленных эпических рейдах, которые подходят как для часовых поясов ЕС, так и для Южной Америки. Будьте готовы играть с правильной механикой и получать перспективные награды!",
      gr: "Βυθιστείτε στον απέραντο κόσμο του Project Warthrone και ζήστε την εμπειρία των νέων ανανεωμένων Epic Raids που απεθύνονται και στις δύο ζώνες EU/SΑ. Ετοιμαστείτε να παίξετε με τα κατάλληλα mechanics και αναμένετε πολλά υποσχόμενες ανταμοιβές!",
    },
    features_title3: {
      pt: "In-game Shop por Balance",
      es: "In-game Shop por Balance",
      en: "In-game Shop for Balance",
      ru: "Внутриигровой Магазин Баланса",
      gr: "Εντός παιχνιδιού Κατάστημα για Balance"
    },
    features_content3: {
      pt: "Criamos um novo shop no jogo para ajudá-lo a comprar e vender itens com facilidade. O Auction House permite que você venda seus itens com 'Balanço USD', tornando o F2P totalmente viável.",
      es: "Hemos diseñado un nuevo Shop en el juego completamente nuevo para ayudarlo a comprar y vender equipos con facilidad. Lo Auction House le permite vender con 'Balance USD', lo que hace que F2P sea completamente viable.",
      en: "We have designed an all new in-game auction to help you shop and list equipments with ease. The Auction House allows you to sell with 'USD Currencies', making F2P completely viable.",
      ru: "Мы разработали совершенно новый внутриигровой аукцион, чтобы вам было проще покупать и выставлять снаряжение. Аукционный дом позволяет вам продавать в «долларах США», что делает F2P полностью жизнеспособным.",
      gr: "Έχουμε σχεδιάσει ένα ολοκαίνουργιο εντός παιχνιδιού auction για να σας βοηθήσουμε να πραγματοποιείτε αγορές και να καταχωρείτε εξοπλισμό με ευκολία. Το Auction House σας επιτρέπει να πουλάτε με 'USD νόμισμα', καθιστώντας το F2P εντελώς βιώσιμο.",
    },
    features_title4: {
      pt: "Sistema de Clan DKP",
      es: "Sistema de Clan DKP",
      en: "Free Clan DKP System",
      ru: "Клановая Система DKP",
      gr: "Δωρεάν Clan DKP Σύστημα",
    },
    features_content4: {
      pt: "O Project Warthrone oferece um recurso gratuito que permite que os clãs PVP e PVE distribuam recompensas de Raids de maneira justa entre o clã. O sistema permite que você compre loots obtidos de Raids gastando pontos DKP ganhos pelos participantes.",
      es: "Project Warthrone ofrece una función gratuita que permite a los clanes PVP y PVE distribuir las recompensas de los Raids de manera justa entre el clan. El sistema te permite comprar loots de los Raids de raid gastando los puntos DKP obtenidos por los participantes.",
      en: "Project Warthrone offers a free feature that allows both PVP & PVE clans to distribute raid boss rewards fairly amongst the clan. The system allows you to purchase loots from raid bosses by spending DKP points earned from participating raid bosses.",
      ru: "Project Warthrone предлагает свободную функцию, которая позволяет кланам PVP и PVE справедливо распределять награды рейдовых боссов среди клана. Система позволяет вам покупать добычу с рейдовых боссов, тратя очки DKP, полученные с фарма рейдовых боссов.",
      gr: "Το Project Warthrone προσφέρει ένα δωρεάν χαρακτηριστικό το οποίο επιτρέπει και σε PVP και σε PVE Clans να διανέμουν τα λάφυρα από τα Raid Bosses ανάμεσα στην Clan. Το σύστημα σας επιτρέπει να αγοράζετε λάφυρα από τα Raid Bosses ξοδεύοντας DKP πόντους που αποκτάτε μέσω της συμμετοχής σας σε Raid Bosses.",
    },
    features_title5: {
      pt: "O Warzone",
      es: "El Warzone",
      en: "The Warzone",
      ru: "Зона Боевых Действий",
      gr: "Το Warzone"
    },
    features_content5: {
      pt: "Hunting Zones populares serão escolhidas pelos espíritos da guerra e serão transformadas em 'Warzone'. Compita contra Warzone Guardians e defenda seus spots para lutar por recompensas e experiências massivas.",
      es: "Hunting Zones populares serán elegidas por los espíritus de guerra y se convertirán en la 'Warzone'. Compite contra Warzone Guardians y defiende tus spots para luchar por recompensas y experiencias masivas.",
      en: "Popular hunting zones will be chosen by the war spirits and will be turned into the 'Warzone'. Compete against Warzone Guardians, and defend your spots to fight for massive rewards and experiences.",
      ru: "Популярные зоны охоты будут выбраны духами войны и превращены в «зону боевых действий». Соревнуйтесь со стражами зоны боевых действий и защищайте свои места, чтобы сражаться за огромные награды и опыт.",
      gr: "Δημοφιλείς hunting ζώνες θα επιλεγούν από τα πνεύματα πολέμου και θα μετατραπούν σε 'Warzone'. Αγωνιστείτε εναντίον των Warzone Guardians, και προστατεύστε τα spots σας για να πολεμήσετε για τεράστιες ανταμοιβές και εμπειρίες."
    },  
    features_title6: {
      pt: "Evento GvG Mensal",
      es: "Evento mensual de GvG",
      en: "Monthly GvG Event",
      ru: "Ежемесячный GvG Event",
      gr: "Μηνιαίο GvG Event"
    },
    features_content6: {
      pt: "Eventos Guild vs Guild serão coordenados mensalmente. As guildas participantes serão premiadas com dinheiro e muitas recompensas!",
      es: "Los eventos de Guild contra Guild se coordinarán mensualmente. Los clans participantes recibirán dinero y muchas recompensas!",
      en: "Guild vs Guild Events will be coordinated on a monthly basis. Participating guilds will be awarded with money and many rewards!",
      ru: "События «GvG Event» будут координироваться ежемесячно. Участвующие гильдии будут награждены деньгами и множеством наград!",
      gr: "Guild vs Guild Events θα συντονίζονται σε μηνιαία βάση. Στα guilds που θα συμμετέχουν θα απονέμονται χρήματα και πολλές ανταμοιβές!"
    },

    // LORE
    lore_title: {
      pt: "Lore",
      es: "Lore",
      en: "Our Lore",
      ru: "Наша История",
      gr: "Η Ιστορία μας"
    },
    lore_subtitle: {
      pt: "História do Projeto",
      es: "Historia del proyecto",
      en: "Project History",
      ru: "История Project-а",
      gr: "Ιστορία του Project"
    },
    lore_chapter1: {
      pt: "Capítulo I: A Origem",
      es: "Capítulo I: El Origen",
      en: "Chapter I: The Origin",
      ru: "Глава I: Происхождение",
      gr: "Κεφάλαιο I: Η Προέλευση"
    },
    lore_desc1: {
      pt: "<p>O jovem Dranakis foi enviado aqui em uma missão, uma missão que está intimamente ligada ao seu futuro, enquanto você permaneceu lamentavelmente inconsciente. É o de uma missão que vai governar o Warthrone. O Warthrone já foi uma terra pacífica, aqueles que viveram dentro dela foram as origens do jovem Drakanis. No entanto, as terras foram roubadas pela ameaça que espreita no mundo. O jovem Drakanis procurou recuperar as terras, mas precisará da ajuda de muitos. </p><p>Drakanis convida todos vocês a se juntarem a ele e lutar ao lado dele para recuperar as terras de Warthrone.</p>",
      es: "<p>El joven Dranakis fue enviado aquí en una misión, una misión que está íntimamente ligada a tu futuro, todo mientras tú permaneces lamentablemente inconsciente. Es el de una misión que gobernará el Warthrone. Warthrone fue una vez una tierra pacífica, aquellos que vivieron en ella fueron los orígenes de Young Drakanis. Sin embargo, las tierras fueron robadas por la amenaza que acecha dentro del mundo. Los jóvenes Drakanis intentaron recuperar las tierras, pero necesitarán la ayuda de muchos. </p><p>Drakanis os invita a todos a uniros a él y luchar junto a él para recuperar las tierras de Warthrone.</p>",
      en: "<p>Young Dranakis was sent here on a mission, a mission that is intimately linked to your futures, all while you've remained woefully unaware. It is that of a mission that will rule the Warthrone. The Warthrone was once a peaceful land, those who lived within it were the origins of Young Drakanis. However, the lands were stolen by the threat that lurks within the world. Young Drakanis sought to reclaim the lands but will require assistance from many. </p><p>Drakanis invites you all to join him and fight alongside him to reclaim the lands of Warthrone.</p>",
      ru: "<p>Молодого Дранакиса послали сюда с заданием, которое тесно связано с вашим будущим, пока вы, к сожалению, не подозреваете об этом. Это миссия, которая будет управлять Warthrone. Когда-то Warthrone был мирной землей, и те, кто жил в нем, были предками Молодых Дракани. Однако земли были похищенны угрозой, которая таится в мире. Юные Дракани стремились вернуть себе земли, но им потребуется помощь многих. </p><p>Драканис приглашает всех вас присоединиться к нему и сражаться вместе с ним, чтобы вернуть себе земли Warthrone.</p>",
      gr: "Ο νεαρός Drakanis στάλθηκε εδώ σε μία αποστολή. Μία αποστολή, η οποία είναι άρρηκτα συνδεδεμένη με το μέλλον σας, όλο αυτό το διάστημα που παραμένετε θλιβερά αδαείς. Είναι τέτοιου είδους αποστολή, που θα εξουσιάσει το Warthrone. To Warthrone ήταν κάποτε μία ήσυχη χώρα, όπου ζούσαν οι πρόγονοι του νεαρού Drakanis. Ωστόσο, τα εδάφη αυτά κλάπηκαν από την απειλή που ελλοχεύει στον κόσμο. Ο νεαρός Drakanis επιδίωξε να ανακτήσει τα εδάφη, αλλά θα χρειαστεί βοήθεια από πολλούς. Ο Drakanis σας προσκαλεί όλους να τον ακολουθήσετε και να πολεμήσετε μαζί του, προκειμένου να ανακτήσει τα εδάφη του Warthrone. </p>",
    },
    lore_chapter2: {
      pt: "Capítulo II: A Missão",
      es: "Capítulo II: La Misión",
      en: "Chapter II: The Mission",
      ru: "Глава II: Миссия",
      gr: "Κεφάλαιο II: Η Αποστολή"
    },
    lore_desc2: {
      pt: "<p>Nossa missão é recrutar sua ajuda para enfrentar essa ameaça juntos porque, de certa forma, vocês foram nossos criadores. Sim, vocês foram os criadores de Warthrone. Warthrone já foi uma terra habitada por uma vasta população de aventureiros. Foi você quem fez de Warthrone uma terra harmoniosa e pacífica. Drakanis está em uma missão e a missão é trazer de volta tudo o que foi separado. de uma nova era.</p>",
      es: "<p>Nuestra misión es obtener su ayuda para enfrentar juntos esta amenaza porque, en cierto sentido, ustedes fueron nuestros creadores. Sí, ustedes fueron los creadores de Warthrone. Warthrone fue una vez una tierra habitada por una gran población de aventureros. Eres tú quien ha hecho de Warthrone una vez una tierra armoniosa y pacífica. Drakanis tiene una misión y la misión es recuperar todo lo que se ha separado... y unificado.</p><p>Esperamos sinceramente que te unas a nosotros, ya que nuestro futuro está inextricablemente unido, será el amanecer. de una nueva era.</p>",
      en: "<p>Our mission is to enlist your assistance in facing this threat together because in a sense, you were our creators. Yes you were the creators of Warthrone. Warthrone was once a land lived by the vast population of adventurers. It is you who have made Warthrone once a harmonized and peaceful land. Drakanis is on a mission and the mission is to bring all thats been seperated back.. and unified.</p><p>It is our sincere hope that you will join us as our futures are inextricably linked, it will be the dawn of a new era.</p>",
      ru: "<p>Наша миссия – заручиться вашей помощью, чтобы вместе противостоять этой угрозе, потому что в некотором смысле вы были нашими создателями. Да, вы были создателями Warthrone. Когда-то Warthrone был землей, населенной огромным населением авантюристов. Это вы сделали Warthrone когда-то гармоничной и мирной землей. Драканис выполняет миссию, и миссия состоит в том, чтобы вернуть все, что было разделено... и объединить.</p><p>Мы искренне надеемся, что вы присоединитесь к нам, поскольку наше будущее неразрывно связано, это будет рассвет новой эры.</p>",
      gr: "Η αποστολή μας είναι να ζητήσουμε τη βοήθειά σας, για να αντιμετωπίσουμε μαζί αυτήν την απειλή, αφού κατά μία έννοια ήσασταν οι δημιουργοί μας. Ναι, εσείς ήσασταν οι δημιουργοί του Warthrone. Το Warthrone ήταν κάποτε μία χώρα που κατοικούνταν από έναν τεράστιο πληθυσμό εξερευνητών. Εσείς είστε που κάνατε κάποτε το Warthrone  μια αρμονική και ειρηνική χώρα. Ο Drakanis είναι σε μία αποστολή να επαναφέρει όλα όσα είχαν διαχωρισθεί... ενοποιημένα. Είναι η ειλικρινής ελπίδα μας, ότι θα ενταχθείτε σε εμάς, καθώς το μέλλον μας είναι άρρηκτα συνδεδεμένο, θα είναι η αρχή μιάς νέας εποχής.. "
    },
    lore_chapter3: {
      pt: "Capítulo III: O Retorno do Rei",
      es: "Capítulo III: El Regreso del Rey",
      en: "Chapter III: The Return of the King",
      ru: "Глава III: Возвращение Короля",
      gr: "Κεφάλαιο III: Η Επιστροφή του Βασιλιά"
    },
    lore_desc3: {
      pt: "<p>Nossa missão nos levou a pisar na batalha final no Warthrone. Drakanis e seus muitos seguidores agora estão unidos. O que acontecerá nesta contagem regressiva final? Vamos descobrir juntando-se a nós no Project Warthrone.</p><p>A história será transmitida a cada século. Vamos construir nosso legado juntos. Bem-vindo ao Warthrone!</p>",
      es: "<p>Nuestra misión nos ha llevado a poner un pie en la batalla final en Warthrone. Drakanis y sus muchos seguidores ahora están unidos. ¿Qué pasará en esta cuenta regresiva final? Descúbrelo uniéndote a nosotros en Project Warthrone.</p><p>La historia se transmitirá en cada siglo. Construyamos nuestro legado juntos. ¡Bienvenido a Warthrone!</p>",
      en: "<p>Our mission has led us to the step foot in the final battle at the Warthrone. Drakanis and his many followers are now unified. What will happen in this final countdown. Let's find out by joining us at Project Warthrone.</p><p>The tale will be passed down in every century. Let's build our legacy together. Welcome to Warthrone!</p>",
      ru: "<p>Наша миссия привела нас к финальной битве у Warthrone. Драканис и его многочисленные последователи теперь объединены. Что произойдет в этом финальном отсчете. Давайте узнаем, присоединившись к нам в Project Warthrone.</p><p>История будет передаваться из поколения в поколение. Давайте строить наше наследие вместе. Добро пожаловать в Warthrone!</p>",
      gr: "Η αποστολή μας, μας οδήγησε ένα βήμα πριν την τελική μάχη στο Warthrone. Ο Drakanis και οι πολλοί ακόλουθοί του είναι πλέον ενωμένοι. Τι θα συμβεί στην τελική αντίστροφη μέτρηση; Θα το μάθετε ερχόμενοι μαζί μας στο Project Warthrone. Η ιστορία θα διαδίδεται από γενιά σε γενιά σε ανά τους αιώνες. Ας χτίσουμε μαζί την κληρονομιά μας. Καλώς ήρθατε στο Warthrone!"
    },


    // CRUSADER
    crusader_title1: {
      pt: "Interface de jogo Melhorada",
      es: "Interfaz de Juego Mejorada",
      en: "Improved Game UI",
      ru: "Улучшенный Игровой Интерфейс",
      gr: "Βελτιωμένο Game UI"
    },
    crusader_content1: {
      pt: "Aproveite os novos gráficos de jogo aprimorados e a mecânica exclusiva da nova versão do Crusader, seu jogo mais bonito do que nunca com sistemas automáticos que tornarão sua jogabilidade ainda mais confortável.",
      es: "Disfruta de los nuevos gráficos de juego mejorados y la mecánica exclusiva de la nueva versión de Crusader, tu juego más hermoso que nunca con sistemas automáticos que harán que tu gameplay sea aún más cómodo.",
      en: "Enjoy the new improved game graphics and exclusive mechanics from the new Crusader version, and your game more beautiful than ever with auto-systems that will turn your gameplay even more comfortable.",
      ru: "Наслаждайтесь новой улучшенной игровой графикой и эксклюзивной механикой из новой версии Crusader, а ваша игра станет еще прекраснее с авто-системами, которые сделают ваш игровой процесс еще комфортнее.",
      gr: "Απολαύστε τα νέα βελτιωμένα γραφικά παιχνιδιού και τα αποκλειστικά mechanics από τη νέα Crusader έκδοση, και το παιχνίδι σας θα είναι πιο όμορφο από ποτέ με τα αυτόματα συστήματα, τα οποία θα κάνουν το gameplay σας πιο άνετο."
    },
    crusader_title2: {
      pt: "Immortal Bosses",
      es: "Immortal Bosses",
      en: "Immortal Bosses",
      ru: "Immortal Bosses",
      gr: "Immortal Bosses"
    },
    crusader_content2: {
      pt: "Baium se tornou uma versão perfeita de si mesmo - o Immortal Baium. Apesar de seu nome formidável, o raid ainda pode ser derrotado! No desfiladeiro perto de Goddard, o Gorde Knight aguarda, possuindo também uma forma imortal.",
      es: "Baium se ha convertido en una versión perfecta de sí mismo: el Immortal Baium. A pesar de su formidable apodo, el raid aún puede ser derrotado! En el cañón cerca de Goddard espera el Gorde Knight, que también posee una forma Inmortal.",
      en: "Baium has become a perfect version of himself — an Immortal Baium. Despite his formidable nickname, the boss can still be defeated! In the canyon near Goddard the Gorde Knight awaits, possessing an Immortal form as well.",
      ru: "Баюм стал идеальной версией самого себя — Бессмертным Баюмом. Несмотря на грозное прозвище, босса все же можно победить! В каньоне возле Годдарда ждет Рыцарь Горда, также обладающий Бессмертной формой.",
      gr: "Το Baium έχει γίνει η τέλεια εκδοχή του εαυτού του - ένα Immortal Baium. Παρά το τρομερό όνομά του, το boss μπορεί ακόμα να νικηθεί. Στο φαράγγι κοντά στην Goddard αναμένει ο Gorde Knight, που έχει επίσης μία αθάνατη μορφή."
    },
    crusader_title3: {
      pt: "Underground Labyrinth",
      es: "Underground Labyrinth",
      en: "Underground Labyrinth",
      ru: "Underground Labyrinth",
      gr: "Underground Labyrinth"
    },
    crusader_content3: {
      pt: "Jogadores PK, preparem-se para as consequências! Aqueles que violarem as regras agora serão transportados para o Underground Labyrinth. É impossível escapar deste lugar sombrio até coletar Marcas de Arrependimento dos monstros locais.",
      es: "PKs players, prepárense para las consecuencias! Aquellos que violen las reglas ahora serán transportados al Underground Labyrinth. Es imposible escapar de este lugar sombrío hasta que recolectes Marcas de arrepentimiento de los monstruos locales.",
      en: "Player killers, prepare for the consequences! Those who violate the rules will now be transported to the Underground Labyrinth. It is impossible to escape this gloomy place until you collect Marks of Repentance from local monsters. ",
      ru: "Убийцы игроков, приготовьтесь к последствиям! Те, кто нарушает правила, теперь будут перенесены в Подземный лабиринт. Невозможно выбраться из этого мрачного места, пока вы не соберете Знаки покаяния с местных монстров.",
      gr: "Δολοφόνοι παικτών, προετοιμαστείτε για τις συνέπειες! Όσοι παραβίασαν τους κανόνες θα μεταφέρονται πλέον στον Υπόγειο Λαβύρινθο (Underground Labyrinth). Είναι αδύνατο να ξεφύγετε από αυτό το ζοφερό μέρος, μέχρι να συλλέξετε τα Marks μετάνοιας από τα τοπικά τέρατα."
    },
    crusader_title4: {
      pt: "Tower of Insolence",
      es: "Tower of Insolence",
      en: "Tower of Insolence",
      ru: "Tower of Insolence",
      gr: "Tower of Insolence"
    },
    crusader_content4: {
      pt: "Tower of Insolence foi transformada em uma zona dimensional e dá as boas-vindas a todos acima do nível 80. Caçadores bem-sucedidos podem adquirir Cloaks of Protection aqui.",
      es: "Tower of Insolence se ha convertido en una zona dimensional y da la bienvenida a todos los que superen el nivel 80. Los cazadores exitosos pueden adquirir Cloaks of Protection aquí.",
      en: "Tower of Insolence has been changed into a dimensional zone and welcomes everyone above level 80. Successful hunters can acquire Cloaks of Protection here.",
      ru: "Башня Дерзости была преобразована в пространственную зону и приветствует всех, кто достиг 80-го уровня. Успешные охотники могут приобрести здесь Плащи Защиты.",
      gr: "Το Tower of Insolence έχει μετατραπεί σε μία dimensional ζώνη και καλωσορίζει όλους άνω των 80 level. Εδώ οι επιτυχημένοι κυνηγοί μπορούν να αποκτήσουν Cloaks of Protection. "
    },
    crusader_title5: {
      pt: "Garden of Eva",
      es: "Garden of Eva",
      en: "Garden of Eva",
      ru: "Garden of Eva",
      gr: "Garden of Eva"
    },
    crusader_content5: {
      pt: "Explore um novo local dimensional no nível 76 — Garden of Eva, a deusa que deu origem à raça dos elfos. Salve os jardins dos monstros e obtenha os Eva's Talismans que fortalecerão suas características.",
      es: "Explora una nueva ubicación dimensional en el nivel 76: Gardens of Eva, la diosa que dio origen a la raza de los elfos. Salva los jardines de los monstruos y obtén los Eva's Talismans que fortalecerán tus características.",
      en: "Explore a new dimensional location at the level 76 — Gardens of Eva, the goddess who gave birth to the race of elves. Save the gardens from monsters and obtain Eva's Talismans that will strengthen your characteristics.",
      ru: "Исследуйте новую пространственную локацию на 76 уровне — Сады Евы, богини, давшей начало расе эльфов. Спасите сады от монстров и получите Талисманы Евы, которые усилят ваши характеристики.",
      gr: "Ανακαλύψτε μια νέα dimensional τοποθεσία στο level 76 - Garden of Eva, της Θεάς που γέννησε την φυλή των ξωτικών. Σώστε τους κήπους από τα τέρατα και αποκτήστε Eva's Talismans που θα ενδυναμώσουν τα χαρακτηριστικά σας."
    },
    crusader_title6: {
      pt: "Hierophant, o novo Rei",
      es: "Hierophant, el nuevo Rey",
      en: "Hierophant, the new King",
      ru: "Hierophant, новый Король",
      gr: "Hierophant, ο νέος Βασιλιάς"
    },
    crusader_content6: {
      pt: "Por muitos anos, o Hierophant ofereceu uma mão amiga a seus aliados, tornando-se um dos melhores heróis de suporte. É hora de sair das sombras e provar a si mesmo em uma batalha. Viva o rei do campo de batalha!",
      es: "Durante muchos años el Hierophant estuvo ofreciendo una mano amiga a sus aliados, convirtiéndose en uno de los mejores héroes de apoyo. Ya es hora de salir de las sombras y demostrar su valía en una batalla. Viva el rey del campo de batalla!",
      en: "For many years the Hierophant was offering his allies a helping hand, becoming one of the best support heroes. It is high time to come out of the shadows and prove himself in a battle. Long live the king of the battlefield!",
      ru: "На протяжении многих лет Hierophant протягивал руку помощи своим союзникам, став одним из лучших героев поддержки. Настало время выйти из тени и проявить себя в бою. Да здравствует король поля битвы!",
      gr: "Για πολλά χρόνια ο Hierophant προσέφερε στους συμμάχους του ένα χέρι βοηθείας, καθιστώντας τον έναν από τους καλύτερους support ήρωες. Είναι καιρός να βγει από τη σκιά και να αποδείξει την αξία του στη μάχη. Ζήτω ο Βασιλιάς του πεδίου μάχης!  "
    },

    // ROADMAP
    roadmap_title: {
      pt: "Roadmap",
      es: "Roadmap",
      en: "Roadmap",
      ru: "Roadmap",
      gr: "Roadmap"
    },
    roadmap_subtitle: {
      pt: "O que está planejado",
      es: "Que esta planeado",
      en: "What's planned",
      ru: "Что планируется",
      gr: "Τι είναι σχεδιασμένο"
    },
    roadmap_desc: {
      pt: "Mergulhe fundo no que planejamos ao longo do nosso lançamento! Planeje seu futuro e de seu grupo estando por dentro de tudo que vai acontecer no Project Warthrone!",
      es: "Sumérgete en lo que hemos planeado a lo largo de nuestro lanzamiento! Planifica tu futuro y el de tu grupo estando al tanto de todo lo que sucederá en Project Warthrone!",
      en: "Dive deep into what we have planned throughout our launch! Plan your future and that of your group by being on top of everything that will happen in Project Warthrone!",
      ru: "Погрузитесь в то, что мы запланировали во время нашего запуска! Планируйте свое будущее и будущее своей группы, будучи в курсе всего, что произойдет в Project Warthrone!",
      gr: "Κάντε μια βουτιά σε όσα έχουμε σχεδιάσει για το launch μας. Σχεδιάστε το μέλλον το δικό σας και της ομάδας σας για να βρίσκεστε στην κορυφή όλων όσων θα συμβούν στο Project Warthrone!"
    },
    roadmap_title1: {
      pt: "O retorno do Rei",
      es: "El retorno del Rey",
      en: "The Return of The King",
      ru: "Возвращение Короля",
      gr: "Η Επιστροφή του Βασιλιά"
    },
    roadmap_content1: {
      pt: "<h4>O Retorno do Rei</h4> <p> Somos os criadores da marca. O Project Essence agora está pegando as experiências do passado e combinando com a abordagem moderna para criar longevidade e uma comunidade duradoura. </p><strong>Valores:</strong> <p> A comunidade vem em primeiro lugar: nos dedicamos a aprender e entender as necessidades da comunidade. Acreditamos ter lançado o melhor dos melhores, porém o sucesso do Project Essence é verdadeiramente .. a própria comunidade. </p><strong>Qualidade:</strong> <p> A Project Essence sempre promoveu um trabalho de qualidade. Aprendemos com o passado o que a comunidade quer e só produziremos um trabalho de qualidade em resposta à comunidade. </p><strong>Ação:</strong> <p> Project Essence foi renomeado para Project Warthrone. Nosso principal objetivo é lançar com um propósito. O objetivo é mostrar a todos o novo desenvolvimento e as mudanças que fizemos no Project Warthrone. </p><strong>Entregáveis:</strong> <ul> <li> Lançamento da segunda temporada com o conteúdo mais recente do Crusader e recursos personalizados do Warthrone. </li></ul>",
      es: "<h4>El Retorno del Rey</h4> <p> Somos los creadores de la marca. Project Essence ahora está tomando las experiencias del pasado y combinándolas con el enfoque moderno para crear longevidad y una comunidad duradera. </p><strong>Valores:</strong> <p> La comunidad es lo primero: Nos dedicamos a aprender y comprender las necesidades de la comunidad. Creemos que hemos lanzado lo mejor de lo mejor, sin embargo, el éxito de Project Essence es realmente... la comunidad misma. </p><strong>Calidad:</strong> <p> Project Essence siempre ha estado impulsando un trabajo de calidad. Hemos aprendido del pasado lo que quiere la comunidad y solo produciremos un trabajo de calidad en respuesta a la comunidad. </p><strong>Acción:</strong> <p> Project Essence ahora ha cambiado de nombre a Project Warthrone. Nuestro principal objetivo es lanzar con un propósito. El propósito de mostrar a todos el nuevo desarrollo y los cambios que hemos realizado en Project Warthrone. </p><strong>Entregables:</strong> <ul> <li> Lanzamiento de la temporada 2 con el último contenido de Crusader y características personalizadas de Warthrone. </li></ul>",
      en: "<h4>The Return of The King</h4> <p> We are the originators of the brand. Project Essence is now taking the experiences of the past and combining with the modern approach to create longevity and a long lasting community. </p><strong>Values:</strong> <p> Community Comes First : We are dedicated to learn and understand the needs of the community. We believe we have launched the best of the best, however the successes of Project Essence is truly .. the community itself. </p><strong>Quality:</strong> <p> Project Essence has always been pushing quality work. We have learned from the past what the community wants and will only produce quality work in response to the community. </p><strong>Action:</strong> <p> Project Essence has now rebranded to Project Warthrone. Our main objective is to launch with a purpose. The purpose to show everyone the new development and changes we have made on Project Warthrone. </p><strong>Deliverables:</strong> <ul> <li> Season 2 launch with the latest Crusader content and custom Warthrone features. </li></ul>",
      ru: "<h4>Возвращение Короля</h4> <p> Мы создатели бренда. В настоящее время Project Essence использует прошлый опыт и сочетает его с современным подходом для создания долговечности и прочного сообщества. </p><strong>Ценности:</strong> <p> Сообщество превыше всего. Мы стремимся изучать и понимать потребности сообщества. Мы считаем, что запустили лучших из лучших, однако успехи Project Essence на самом деле связаны с самим сообществом. </p><strong>Качество.</strong> <p> Project Essence всегда стремилась к качеству. Мы узнали, чего хочет сообщество, и будем выполнять качественную работу в ответ на запросы сообщества. </p><strong>Действие:</strong> <p> Project Essence теперь переименован в Project Warthrone. Наша главная цель — запустить с целью. Цель показать всем новые разработки и изменения, которые мы внесли в Project Warthrone. </p><strong>Результаты:</strong> <ul> <li> Сезон 2 начинается с новейшего контента Crusader и пользовательских функций Warthrone. </li></ul>",
      gr: "<h4>Η Επιστροφή του Βασιλια</h4> <p> Είμαστε οι δημιουργοί της μάρκας. Το Project Essence τώρα παίρνει τις εμπειρίες του παρελθόντος και τις συνδυάζει με μοντέρνα προσέγγιση για να δημιουργήσει μακροζωία και μία μακροχρόνια κοινότητα. </p><strong>Αξίες:</strong> <p> Η Κοινότητα έρχεται Πρώτη : Είμαστε αφοσιωμένοι στο να μαθαίνουμε και να καταλαβαίνουμε τις ανάγκες της κοινότητας. Πιστεύουμε ότι έχουμε λανσάρει ό,τι καλύτερο υπάρχει, ωστόσο, οι επιτυχίες του Project Essence στην πραγματικότητα οφειλονται ... στην Κοινότητα την ίδια. </p><strong>Ποιότητα:</strong> <p> Το Project Essence ανέκαθεν προωθούσε την ποιοτική δουλειά. Έχουμε μάθει από το παρελθόν τις ανάγκες της κοινότητας και θα παράγουμε μόνο ποιοτικό έργο ως απάντηση στην κοινότητα. </p><strong>Δράση:</strong> <p> Το Project Essence έχει πλέον μετονομαστεί σε Project Warthrone. Ο κύριος στόχος μας είναι να λανσάρουμε κάτι με σκοπό. Ο σκοπός είναι να δείξουμε σε όλους την νέα εξέλιξη και τις αλλαγές που έχουμε κάνει στο Project Warthrone. </p><strong>Παραδοτέα:</strong> <ul> <li> Η 2η Σεζόν θα ξεκινήσει με το Crusader περιεχόμενο και τα custom features του Warthrone. </li></ul>",
    },
    roadmap_title2: {
      pt: "A Corrida",
      es: "La Prisa",
      en: "The Rush",
      ru: "Спешка",
      gr: "The Rush"
    },
    roadmap_content2: {
      pt: "<h4>A Corrida</h4> <p> O começo é sempre onde está a verdadeira diversão. Durante este estágio do roadmap, você se sentirá nos estágios iniciais do Project Warthrone. É aqui que você estará explorando e desvendando personagens e progressões. </p><strong>Entregáveis:</strong> <ul> <li>Instâncias de masmorras exclusivas de Warthrone e zonas de XP nunca antes vistas.</li></ul>",
      es: "<h4>La Prisa</h4> <p> El comienzo es siempre donde está la verdadera diversión. Durante esta etapa de lo Roadmap, te experimentarás en las primeras etapas apresuradas del Project Warthrone. Aquí es donde explorarás y desentrañarás personajes y progresiones. </p><strong>Entregables:</strong> <ul> <li>Instancias de mazmorras exclusivas de Warthrone y zonas XP nunca antes vistas.</li></ul>",
      en: "<h4>The Rush</h4> <p> The start is always where the real fun is. During this stage of the roadmap you will experience yourself in the early rush stages of Project Warthrone. This is where you will be exploring and unravelling character and progressions. </p><strong>Deliverables:</strong> <ul> <li>Warthrone exclusive dungeon instances and never before seen XP zones.</li></ul>",
      ru: "<h4>Спешка</h4> <p> Начало всегда там, где настоящее веселье. На этом этапе нашего плана действий вы почувствуете себя на ранних стадиях ажиотажа Project Warthrone. Здесь вы будете исследовать и раскрывать характер и прогрессию. </p><strong>Результаты:</strong> <ul> <li>Эксклюзивные подземелья Warthrone и невиданные ранее зоны XP.</li></ul>",
      gr: "<h4> The Rush </h4> <p> H πραγματική διασκέδαση βρίσκεται πάντα στην αρχή. Σε αυτό το στάδιο του roadmap θα βρεθείτε στα πρώτα 'rush' στάδια του Project Warthrone. Εδώ θα εξερευνήσετε και θα ξετυλίξετε χαρακτήρα και προόδους. </p><strong>Παραδοτέα:</strong> <ul> <li>Αποκλειστικά Warthrone Dungeon Instances και XP ζώνες που δεν έχετε ξαναδεί.</li></ui>"
    },
    roadmap_title3: {
      pt: "Iniciação",
      es: "Iniciación",
      en: "Initiation",
      ru: "Начало",
      gr: "Έναρξη"
    },
    roadmap_content3: {
      pt: "<h4>Iniciação</h4> <p> Durante esta fase do roadmap, estamos nos preparando para novos engajamentos dentro do jogo. Durante esta fase, promoveremos os recursos adicionais para aprimorar as experiências de jogo, tornando-as divertidas e cheias de acontecimentos para os jogadores. </p><strong>Entregáveis:</strong> <ul> <li>Novos eventos no jogo, incluindo TvT diário para fornecer ainda mais conteúdo PvP.</li></ul>",
      es: "<h4>Iniciación</h4> <p> Durante esta fase de lo Roadmap, nos estamos preparando para futuros compromisos dentro del juego. Durante esta fase, promoveremos las características adicionales para mejorar las experiencias de juego, haciendo que los jugadores sean divertidos y llenos de acontecimientos. </p><strong>Entregables:</strong> <ul> <li>Eventos nuevos en el juego, incluido TvT diario para proporcionar aún más contenido PvP.</li></ul>",
      en: "<h4>Initiation</h4> <p> During this phase of the roadmap we are preparing for further engagements within the game. During this phase we will promote the additional features to enhance game play experiences making fun and eventful for the players. </p><strong>Deliverables:</strong> <ul> <li>New in game events including daily TvT to provide even more PvP content.</li></ul>",
      ru: "<h4>Начало</h4> <p> На этом этапе нашего плана действий мы готовимся к дальнейшим действиям в игре. На этом этапе мы будем продвигать дополнительные функции, чтобы сделать игровой процесс интереснее и насыщеннее для игроков. </p><strong>Результаты:</strong> <ul> <li>Новые игровые события, включая ежедневные TvT, чтобы предоставить еще больше PvP-контента.</li></ul>",
      gr: "Κατά τη διάρκεια αυτής της φάσης του roadmap, ετοιμαζόμαστε για περαιτέρω εμπλοκή μέσα στο παιχνίδι. Κατά τη διάρκεια της φάσης αυτής, θα προωθήσουμε τα πρόσθετα χαρακτηριστικά για να ενισχύσουμε τις gameplay εμπειρίες που θα κάνουν το παιχνίδι πιο διασκεδαστικό και περιπετειώδες για τους παίκτες. </p><strong>Παραδοτέα:</strong> <ui> <li> Καινούργια event εντός του παιχνιδιού που θα περιλαμβάνουν και καθημερινά TvT για να παρέχουμε ακόμα περισσότερο PvP περιεχόμενο.</li></ul>",
    },
    roadmap_title4: {
      pt: "TheMainEvent",
      es: "TheMainEvent",
      en: "TheMainEvent",
      ru: "TheMainEvent",
      gr: "TheMainEvent"
    },
    roadmap_content4: {
      pt: "<h4>TheMainEvent</h4> <p> Durante esta fase do roadmap, você se encontrará nos estágios maduros de crescimento e experiências de seu personagem. Este estágio do servidor é onde você encontrará o incrível conteúdo de final de jogo da versão Crusader do jogo. No entanto, adicionamos muitas surpresas no final do jogo que irão aprimorar sua experiência nos estágios posteriores do jogo. </p><strong>Entregáveis:</strong> <ul> <li>Servidor mesclado com Warthrone Season 1 e Season 2.</li></ul>",
      es: "<h4>TheMainEvent</h4> <p> Durante esta fase de lo Roadmap, te encontrarás en las etapas maduras del crecimiento y las experiencias de tu personaje. Esta etapa del servidor es donde encontrarás el increíble contenido final de la versión Crusader del juego. Sin embargo, hemos agregado muchas sorpresas al final del juego que mejorarán su experiencia en las etapas posteriores de su juego. </p><strong>Entregables:</strong> <ul> <li>Fusión del servidor con las temporadas 1 y 2 de Warthrone.</li></ul>",
      en: "<h4>TheMainEvent</h4> <p> During this phase of the roadmap you will find yourself in the mature stages of your character growth and experiences. This stage of the server is where you will find the amazing end-game content of the crusader version of the game. However, we have added many end-game surprises that will enhance your experience in the later stages of your game play. </p><strong>Deliverables:</strong> <ul> <li>Server merge with Warthrone Season 1 and Season 2.</li></ul>",
      ru: "<h4>Главное Событие</h4> <p> На этом этапе нашего плана действий вы окажетесь на зрелых стадиях развития и опыта вашего персонажа. На этом этапе сервера вы найдете потрясающий эндгейм-контент версии игры Crusader. Тем не менее, мы добавили много сюрпризов в конце игры, которые сделают ваш опыт более приятным на более поздних этапах игры. </p><strong>Результаты:</strong> <ul> <li>Объединение серверов с Warthrone Season 1 и Season 2.</li></ul>",
      gr: "<h4>TheMainEvent</h4> <p> Κατά τη διάρκεια αυτής της φάσης του roadmap, θα βρεθείτε στα ώριμα στάδια της ανάπτυξης του χαρακτήρα σας και των εμπειριών σας. Αυτό το στάδιο του διακομιστή, είναι αυτό, στο οποίο θα βρείτε το καταπληκτικό end-game περιεχόμενο της Crusader έκδοσης του παιχνιδιού. Ωστόσο, έχουμε προσθέσει πολλές end-game εκπλήξεις, που θα βελτιώσουν την εμπειρία σας στα μεταγενέστερα στάδια του gameplay σας. </p><strong>Παραδοτέα:</strong> <ui> <li> Συγχώνευση των δύο διακομιστών Warthrone Season 1 και Season 2.</li></ul>"
    },
    roadmap_title5: {
      pt: "Consequências",
      es: "Consecuencias",
      en: "Aftermath",
      ru: "Последствие",
      gr: "Επακόλουθο"
    },
    roadmap_content5: {
      pt: "<h4>Consequências</h4> <p> Como sempre nos promovemos, o Project Warthrone terá uma comunidade duradoura. Durante os estágios finais do jogo é onde o jogo realmente começa. Você começará a experimentar onde está sua força com os grandes esforços que colocou em suas engrenagens. Agora você pode experimentar a jogabilidade real. Durante os estágios posteriores, você se preparará para o que chamamos de 'novo começo'. </p><strong>Entregáveis:</strong> <ul> <li>Atualizações do servidor para o conteúdo mais recente do cliente coreano.</li></ul>",
      es: "<h4>Consecuencias</h4> <p> Como siempre nos hemos promocionado, Project Warthrone tendrá una comunidad duradera. Durante las etapas finales del juego es donde realmente comienza el juego. Comenzarás a experimentar dónde reside tu fuerza con los arduos esfuerzos que has puesto en tus engranajes. Ahora puedes experimentar el juego real. Durante las etapas posteriores, se preparará para lo que llamamos el 'nuevo comienzo'. </p><strong>Entregables:</strong> <ul> <li>Actualizaciones del servidor con el contenido más reciente del cliente coreano.</li></ul>",
      en: "<h4>Aftermath</h4> <p> As we have always promoted ourselves, Project Warthrone will have a long-lasting community. During the end-game stages of the game is where the game really begins. You will start to experience where your strength lies with the hard efforts you have put within your gears. Now you get to experience the real gameplay. During the aftermath stages, you will prepare yourself for what we call the 'new beginning'. </p><strong>Deliverables:</strong> <ul> <li>Server updates to the latest content from Korean client.</li></ul>",
      ru: "<h4>Последствие</h4> <p> Поскольку мы всегда рекламировали себя, Project Warthrone будет иметь долгосрочное сообщество. На финальных стадиях игры, игра начинается по-настоящему. Вы начнете ощущать, в чем ваша сила, благодаря упорным усилиям, которые вы вложили в свои механизмы. Теперь вы можете испытать настоящий игровой процесс. На последующих этапах вы подготовитесь к тому, что мы называем «новым началом». </p><strong>Результаты:</strong> <ul> <li>Сервер обновляется до последнего контента от корейского клиента.</li></ul>",
      gr: "<h4>Επακόλουθο</h4> <p> Καθώς ανέκαθεν αυτό έχουμε προωθήσει για εμάς, το Project Warthrone θα έχει μία μακροχρόνια κοινότητα. Κατά τη διάρκεια των end-game σταδίων θα αρχίσει το πραγματικό παιχνίδι. Θα αρχίσετε να αντιλαμβάνεστε τη δύναμή σας με τη σκληρή προσπάθεια που καταβάλλατε για να αποκτήσετε τον εξοπλισμό σας. Τώρα μπορείτε να γευτείτε το πραγματικό gameplay. Κατά τη διάρκεια των επακόλουθων σταδίων, θα προετοιμαστείτε για αυτό που εμείς ονομάζουμε την 'νέα αρχή'. </p><strong>Παραδοτέα:</strong> <ul><li>Ενημέρωση του διακομιστή στο πιο πρόσφατο client από την Κορέα.</li></ul>"
    },

    // PACKS
    banner_pack_title: {
      pt: "Selecione o seu<strong>Pack de abertura</strong>",
      es: "Selecciona tu <strong>Pack de Apertura</strong>",
      en: "Guarantee yours<strong>Opening Pack</strong>",
      ru: "Выберите свой<strong>Открывающий пакет</strong>",
      gr: "Επιλέξτε το δικό σας<strong>Πακέτο ανοίγματος</strong>"
    },
    banner_pack_button: {
      pt: "Garantir",
      es: "Asegurar",
      en: "Guarantee",
      ru: "Выбирать",
      gr: "Επιλέγω"
    },

    pack_title: {
      pt: "Garanta seu War Pack",
      es: "Garantiza tu War Pack",
      en: "Guarantee your War Pack",
      ru: "Гарантия вашего Боевого Набора",
      gr: "Εξασφάλισε το War Pack σου"
    },
    pack1_name: {
      pt: "Pack do Recruta",
      es: "Beginner Pack",
      en: "Beginner Pack",
      ru: "Набор Новичок",
      gr: "Beginner Pack"
    },
    pack2_name: {
      pt: "Pack do Soldado",
      es: "Soldier Pack",
      en: "Soldier Pack",
      ru: "Набор Солдат",
      gr: "Soldier Pack"
    },
    pack3_name: {
      pt: "Pack do Almirante",
      es: "Admiral Pack",
      en: "Admiral Pack",
      ru: "Набор Адмирала",
      gr: "Admiral Pack"
    },
    pack_available_label: {
      pt: "Disponíveis",
      es: "Disponible",
      en: "Available",
      ru: "Доступный",
      gr: "Διαθέσιμο"
    },
    pack_buy_button: {
      pt: "Quero esse",
      es: "Quiero esto",
      en: "I want this",
      ru: "Я хочу это",
      gr: "Το Θέλω"
    },
    pack_attention: {
      pt: "<strong>ATENÇÃO:</strong> você só pode utilizar 1 pack por conta. Após comprar, receberá um código em seu e-mail para reinvindicar seu pack no jogo. ",
      es: "<strong>ATENCIÓN:</strong> solo puedes usar 1 paquete por cuenta. Después de la compra, recibirá un código en su correo electrónico para reclamar su paquete en el juego.",
      en: "<strong>ATTENTION:</strong> you can only use 1 pack per account. After purchasing, you will receive a code in your email to claim your pack in the game.",
      ru: "<strong>ВНИМАНИЕ:</strong> вы можете использовать только 1 набор на одну учетную запись. После покупки вы получите код по электронной почте, чтобы получить свой набор в игре.",
      gr: "<strong>ΠΡΟΣΟΧΗ:</strong> μπορείτε να χρησιμοποιήσετε μόνο ένα 1 πακέτο σε κάθε λογαριασμό. Αφού πραγματοποιηθεί η αγορά θα λάβετε έναν κωδικό στο email σας για να διεκδικήσετε το πακέτο σας στο παιχνίδι."
    },
    pack_terms: {
      pt: "Todas as doações são finais e não reembolsáveis! Você não está comprando nenhum produto, todos os benefícios recebidos no jogo são uma forma de agradecer sua doação voluntária.",
      es: "¡Todas las donaciones son finales y no reembolsables! No estás comprando ningún producto, todos los beneficios recibidos en el juego son una forma de agradecerte por tu donación voluntaria.",
      en: "All donations are final and non-refundable! You are not buying any products, all benefits received in the game are a way to thank you for your voluntary donation.",
      ru: "Все пожертвования являются окончательными и возврату не подлежат! Вы не покупаете никаких продуктов, все преимущества, полученные в игре, являются способом отблагодарить вас за ваше добровольное пожертвование.",
      gr: "Όλες οι δωρεές είναι οριστικές και δεν επιστρέφονται! Δεν αγοράζετε προϊόντα, όλα τα οφέλη που λαμβάνετε στο παιχνίδι είναι ένας τρόπος να σας ευχαριστήσουμε για την εθελοντική σας δωρεά. "
    },
    pack_alert_00: {
      pt: "Valor em Rubles. Você será direcionado para a página de pagamento.",
      es: "El monto es en Rubles. Será redirigido a la página de pago.",
      en: "Amount is in US Rubles. You will be redirected to the payment page.",
      ru: "Сумма указана в рублях США. Вы будете перенаправлены на страницу оплаты.",
      gr: "Το ποσό είναι σε US Rubles. Θα ανακατευθυνθείτε στη σελίδα πληρωμής."
    },
    pack_alert_01: {
      pt: "Valor em Euro. Você será direcionado para a página de pagamento.",
      es: "El monto es en Euro. Será redirigido a la página de pago.",
      en: "Amount is in Euro. You will be redirected to the payment page.",
      ru: "Сумма указана в Евро. Вы будете перенаправлены на страницу оплаты.",
      gr: "Το ποσό είναι σε Ευρώ. Θα ανακατευθυνθείτε στη σελίδα πληρωμής."
    },
    pack_alert_02: {
      pt: "Conta encontrada. Redirecionando para a página de pagamento.",
      es: "Cuenta encontrada. Será redirigido al pago.",
      en: "Account found. You will be redirected to payment.",
      ru: "Аккаунт найден. Вы будете перенаправлены к оплате.",
      gr: "Ο Λογαριασμός σας βρέθηκε. Θα ανακατευθυνθείτε στην πληρωμή."
    },
    pack_alert_03: {
      pt: "Conta não encontrada. Tente novamente.",
      es: "Cuenta no encontrada. Inténtalo de nuevo.",
      en: "Account not found. Please, try again.",
      ru: "Аккаунт не найден. Пожалуйста, попробуйте еще раз.",
      gr: "Ο Λογαριασμός δεν βρέθηκε. Παρακαλώ, προσπαθήστε ξανά."
    },
    pack_alert_04: {
      pt: "Checando sua conta, por favor aguarde...",
      es: "Comprobando el nombre de la cuenta, por favor espere...",
      en: "Checking account name, please wait...",
      ru: "Проверка имени учетной записи, пожалуйста, подождите...",
      gr: "Ελέγχουμε το όνομα λογαριασμού, παρακαλώ περιμένετε..."
    },
    pack_button_guarantee: {
      pt: "Garantir meu pack",
      es: "Garantizar mi pack",
      en: "Guarantee my pack",
      ru: "Гарантия моего набора",
      gr: "Εξασφάλιση του πακέτου μου"
    },
    

    // DONATE
    donate_title: {
      pt: "Plataforma de doação",
      es: "Plataforma de Donación",
      en: "Donation Platform",
      ru: "Платформа для пожертвований",
      gr: "Πλατφόρμα Δωρεών"
    },
    donate_subtitle: {
      pt: "Selecione a sua",
      es: "Selecciona tuya",
      en: "Select your prefered",
      ru: "Выберите предпочитаемый",
      gr: "Επιλέξτε την προτιμώμενη"
    },
    donate_desc: {
      pt: "As doações estão indisponíveis no momento.",
      es: "Las donaciones no están disponibles actualmente.",
      en: "Donations are currently unavailable.",
      ru: "Пожертвования в настоящее время недоступны.",
      gr: "Οι δωρέες δεν είναι διαθέσιμες αυτήν τη στιγμή."
    },
    donate_button: {
      pt: "Pagar agora",
      es: "Pagar ahora",
      en: "Pay now",
      ru: "Оплатить сейчас",
      gr: "Πληρώστε τώρα"
    },
    donate_title2: {
      pt: "Ganhe recompensas em nosso servidor",
      es: "Gane recompensas en nuestro servidor",
      en: "Earn rewards on our server",
      ru: "Зарабатывайте награды на нашем сервере",
      gr: "Αποκτήστε ανταμοιβές στον διακομιστή μας"
    },
    donate_subtitle2: {
      pt: "Faça agora a sua doação",
      es: "Haz tu donación ahora",
      en: "Make your donation now",
      ru: "Сделайте пожертвование сейчас",
      gr: "Κάνε τη δωρεά σου τώρα"
    },

    // GALLERY 
    gallery_title: {
      pt: "Galeria",
      es: "Galeria",
      en: "Gallery",
      ru: "Галерея",
      gr: "Συλλογή"
    },

    // DONATE ALERTS
    alert_gmail: {
      pt: "Um <i><b>gmail.com</b></i> válido precisa ser preenchido!",
      es: "Se debe completar una cuenta <i><b>gmail.com</b></i> válida!",
      en: "A valid <i><b>gmail.com</b></i> account must be filled!",
      ru: "Действительная учетная запись <i><b>gmail.com</b></i> должна быть заполнена!",
      gr: "Ένας έγκυρος <i><b>gmail.com</b></i> λογαριασμός πρέπει να συμπληρωθεί!"
    },
    alert_redirecting: {
      pt: "Redirecionando para a página de pagamento.",
      es: "Redirigiendo a la página de pago.",
      en: "Redirecting to the payment page.",
      ru: "Перенаправление на страницу оплаты.",
      gr: "Ανακατεύθυνση στη σελίδα πληρωμής."
    },
    alert_paymentpage: {
      pt: "Você será redirecionado para a página de pagamento. O preço está em",
      es: "Será redirigido a la página de pago. El precio esta en",
      en: "You will be redirected to the payment page. The price is in",
      ru: "Вы будете перенаправлены на страницу оплаты. Цена указана в",
      gr: "Θα ανακατευθυνθείτε στη σελίδα πληρωμής. Περιλαμβάνεται η τιμή."
    },
    alert_erroroccured: {
      pt: "Ocorreu um erro, os pagamentos não podem ser processados neste momento. Tente novamente mais tarde ou entre em contato com um administrador.",
      es: "Ocurrió un error, los pagos no se pueden procesar en este momento. Vuelva a intentarlo más tarde o póngase en contacto con un administrador.",
      en: "An error occurred, payments cannot be processed at this time. Retry later or contact an administrator.",
      ru: "Произошла ошибка, в настоящее время платежи не могут быть обработаны. Повторите попытку позже или обратитесь к администратору.",
      gr: "Παρουσιάστηκε σφάλμα, δεν είναι δυνατή η επεξεργασία των πληρωμών αυτήν τη στιγμή. Παρακαλώ δοκιμάστε ξανά αργότερα ή επικοινωνήστε με έναν διαχειριστή. "
    },
    alert_validaccountemail: {
      pt: "Uma conta e e-mail válidos devem ser preenchidos!",
      es: "Se debe completar una cuenta y un correo electrónico válidos!",
      en: "A valid account & email must be filled!",
      ru: "Действительная учетная запись и электронная почта должны быть заполнены!",
      gr: "Πρέπει να συμπληρωθούν ένα έγκυρο email και ένας έγκυρος λογαριασμός!"
    },
    alert_validaccount: {
      pt: "Uma conta válida deve ser preenchida!",
      es: "Se debe completar una cuenta válidoa!",
      en: "A valid account must be filled!",
      ru: "Должна быть заполнена действующая учетная запись!",
      gr: "Πρέπει να συμπληρωθεί ένας έγκυρος λογαριασμός!"
    },
    alert_account: {
      pt: "Conta não encontrada. Tente novamente.",
      es: "Cuenta no encontrada. Inténtalo de nuevo.",
      en: "Account not found. Please, try again.",
      ru: "Аккаунт не найден. Пожалуйста, попробуйте еще раз.",
      gr: "Ο Λογαριασμός δεν βρέθηκε. Παρακαλώ, προσπαθήστε ξανά."
    },
    alert_checkingaccount: {
      pt: "Checando sua conta, por favor aguarde...",
      es: "Comprobando el nombre de la cuenta, por favor espere...",
      en: "Checking account name, please wait...",
      ru: "Проверка имени учетной записи, пожалуйста, подождите...",
      gr: "Ελέγχουμε το όνομα λογαριασμού, παρακαλώ περιμένετε..."
    },

    // LABELS
    label_trailer: {
      pt: "Assista agora nosso trailer promocional",
      es: "Mira nuestro tráiler promocional ahora",
      en: "Watch our promo trailer right now",
      ru: "Смотрите наш промо-ролик прямо сейчас",
      gr: "Παρακολουθείστε το promo trailer αυτή τη στιγμή"
    },
    label_join: {
      pt: "Entre na comunidade",
      es: "Únete a la comunidad",
      en: "Join community",
      ru: "Присоединяйтесь к сообществу",
      gr: "Ενταχθείτε στην κοινότητα"
    },
    label_watch: {
      pt: "Assista o vídeo",
      es: "Ver el vídeo",
      en: "Watch the video",
      ru: "Смотреть видео",
      gr: "Παρακολουθήστε το βίντεο"
    },
    label_soon: {
      pt: "Em breve",
      es: "Pronto",
      en: "Coming soon",
      ru: "Вскоре",
      gr: "Έρχεται Σύντομα"
    },
    label_connect: {
      pt: "Jogue agora!",
      es: "Jugar ahora!",
      en: "Play now!",
      ru: "Играть сейчас!",
      gr: "Παίξτε τώρα!"
    },
    label_readmore: {
      pt: "Saiba mais",
      es: "Sepa mas",
      en: "Read more",
      ru: "Читать далее",
      gr: "Διαβάστε περισσότερα"
    },
    label_copy: {
      pt: "Todos os direitos reservados",
      es: "Todos los derechos reservados",
      en: "All rights reserved",
      ru: "Все права защищены",
      gr: "Όλα τα δικαιώματα κατοχυρωμένα"
    },
    label_terms: {
      pt: "Termos e condições",
      es: "Términos y Condiciones",
      en: "Terms & conditions",
      ru: "Условия",
      gr: "Όροι και Προϋποθέσεις"
    },
    label_privacy: {
      pt: "Privacidade",
      es: "Privacidad",
      en: "Privacy Policy",
      ru: "Политика Конфиденциальности",
      gr: "Πολιτική Απορρήτου"
    },
    label_account: {
      pt: "Conta no jogo",
      es: "Cuenta de Juego",
      en: "Game Account",
      ru: "Игровой аккаунт",
      gr: "Λογαριασμός Παιχνιδιού"
    },
    label_amount: {
      pt: "Valor (EUR)",
      es: "Monto (EUR)",
      en: "Amount (EUR)",
      ru: "Сумма (Евро)",
      gr: "Ποσό (EUR)"
    },
    label_email: {
      pt: "Seu E-mail",
      es: "Tuyo Email",
      en: "Your Email",
      ru: "Ваш адрес электронной почты",
      gr: "To Email σας"
    },
  };

  // Langs loader
  var _t = $("body").translate({ lang: "pt", t: t });
  var str = _t.g("translate");

  $.urlParam = function (name) {
    var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.search);

    return results !== null ? results[1] || 0 : false;
  };

  var name_language = localStorage.getItem("language_fullname");
  var classLangsOpen = '.langs .selected';
  var classLangsSelection = '.langs ul li';
  var storage_lang = localStorage.getItem("language_attr");

  // var userLang = navigator.language || navigator.userLanguage;

  // if (userLang.split('-')[0] == "pt" || userLang.split('-')[0] == "en" || userLang.split('-')[0] == "es") {
  //   storage_lang = userLang.split('-')[0];
  //   name_language = userLang.split('-')[0];
  // }

  if (name_language == null || name_language == undefined || name_language == "en") {
    name_language = "EN";
  }
  else if (name_language == "es") {
    name_language = "ES";
  }
  else if (name_language == "pt") {
    name_language = "PT";
  }
  else if (name_language == "gr") {
    name_language = "GR";
  }
  else if (name_language == "ru") {
    name_language = "RU";
  }

  if (storage_lang == null) {
    var storage_lang = "en";
  }

  var lang = storage_lang;
  _t.lang(lang);

  // Langs select box
  $(classLangsOpen).html(name_language);

  $(document).on('click', classLangsOpen, function () {
    $(this).parent().addClass('active');
  });
  $(document).on('click', classLangsSelection, function () {
    var langName = $(this).text();
    $(".loader").show();
    $(".loader div span").css('height', '0').animate({
      height: "100%"
    }, 700, function() {
      $(classLangsOpen).html(langName);
      localStorage.setItem("language_fullname", langName);
      $(".loader").fadeOut();
    });
  });
  $(document).click(function(e){
    if(!$(e.target).closest(classLangsOpen).length > 0 ) {
      $(classLangsOpen).parent().removeClass('active');
    }
  });



  // Apply New Lang
  function selectNewLang(langValue) {
      var lang = langValue;
      _t.lang(lang);

      localStorage.setItem("language_attr", lang);
      storage_lang = lang;
  }

  $(document).on("click", ".lang_selector", function() {
      selectNewLang($(this).attr('data-value'));
  });
  $(document).on("click", ".proceed", function() {
      _t.lang(storage_lang);
  });
});
