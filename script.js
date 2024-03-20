const vocabularies = [
    { term: "laus, laudis", definition: ["das Lob", "der Ruhm"] },
    { term: "tot", definition: ["so viele"] },
    { term: "longus, longa, longum", definition: ["lang", "weit"] },
    { term: "provincia, provinciae", definition: ["die Provinz"] },
    { term: "simul", definition: ["sobald"] },
    { term: "pes, pedis", definition: ["der Fuß"] },
    { term: "singulus, singula, singulum", definition: ["je ein", "jeder einzelne"] },
    { term: "conficere, conficio, confeci, confectum", definition: ["erledigen", "fertig machen", "beenden"] },
    { term: "nimium", definition: ["zu", "allzu", "allzu (sehr)"] },
    { term: "felix, felix, felix. Genitiv:felicis", definition: ["glücklich", "Glück bringend", "erfolgreich"] },
    { term: "sedere, sedeo, sedi", definition: ["sitzen"] },
    { term: "cupidus, cupida, cupidum", definition: ["gierig", "begierig", "begierig (nach)"] },
    { term: "qualis, qualis, quale", definition: ["wie (beschaffen)", "was für ein"] },
    { term: "facere, facio, feci, factum", definition: ["machen", "tun", "handeln"] },
    { term: "mons, montis, Gen. Plural:-ium", definition: ["der Berg"] },
    { term: "similis, similis, simile", definition: ["ähnlich"] },
    { term: "minor, minor, minus, Genitiv:minoris", definition: ["kleiner", "geringer"] },
    { term: "poeta, poetae", definition: ["der Dichter"] },
    { term: "parum", definition: ["(zu) wenig", "wenig"] },
    { term: "nondum", definition: ["noch nicht"] },
    { term: "ducere, duco, duxi, ductum", definition: ["führen", "ziehen"] },
    { term: "idoneus, idonea, idoneum", definition: ["geeignet", "passend"] },
    { term: "paratus, parata, paratum", definition: ["bereit (für/zu)", "bereit"] },
    { term: "imponere, impono, imposui, impositum", definition: ["auferlegen","hineinsetzen"] },
    { term: "tempus agere, tempus ago", definition: ["die Zeit verbringen", "die Zeit vertreiben"] },
    { term: "mollis, mollis, molle", definition: ["weich", "angenehm", "freundlich"] },
    { term: "agere, ago, egi, actum", definition: ["handeln", "treiben", "verhandeln"] },
    { term: "liber, libri", definition: ["das Buch"] },
    { term: "modo", definition: ["eben (noch)", "nur", "eben"] },
    { term: "idem, eadem, idem, Gen.:eiusdem, Dat.:eidem", definition: ["derselbe", "der gleiche"] },
    { term: "unde", definition: ["woher"] },
    { term: "ea, quae", definition: ["das, was"] },
    { term: "emere, emo, emi, emptum", definition: ["kaufen"] },
    { term: "os, oris", definition: ["der Mund", "das Gesicht"] },
    { term: "tegere, tego, texi, tectum", definition: ["bedecken", "schützen","verbergen"] },
    { term: "invidia, invidiae", definition: ["der Neid", "der Hass"] },
    { term: "praeesse, praesum, praefui", definition: ["leiten","an der Spitze stehen"] },
    { term: "obses, obsidis", definition: ["die Geisel" ]},
    { term: "princeps, principis", definition: ["der erste", "der führende Mann", "der Kaiser"]},
    { term: "quantus, quanta, quantum", definition: ["wie groß", "wie viel"]},
    { term: "plebs, plebis", definition: ["das (einfache) Volk", "das Volk"] },
    { term: "rapere, rapio, rapui, raptum", definition: ["rauben", "wegrauben", "wegreißen", "wegführen"]},
    { term: "auctoritas, auctoritatis", definition: ["das Ansehen", "der Einfluss", "die Macht", "die Autorität"] },
    { term: "contendere, contendo, contendi", definition: ["eilen", "sich anstrengen", "kämpfen","behaupten" ]},
    { term: "-ne (im indir. Fragesatz)", definition: ["ob"] },
    { term: "nihil nisi", definition: ["nichts als", "nur"]},
    { term: "poscere, posco, poposci", definition: ["fordern", "verlangen"] },
    { term: "cum (Subj. mit Konj.)", definition: ["als","nachdem", "obwohl", "während", "weil"] },
    { term: "terra, terrae", definition: ["die Erde", "das Land"]},
    { term: "ut (Subj. m. Konj.)", definition: ["dass", "sodass", "damit", "um...zu"] },
    { term: "insidiae, insidiarum (Pl.)", definition: ["die Falle", "das Attentat", "die Hinterlist" ]},
    { term: "conscribere, conscribo, conscripsi, conscriptum", definition: ["aufschreiben", "verfassen"] },
    { term: "milites conscribere, milites conscribo", definition: ["Soldaten anwerben"] },
    { term: "amicitia, amicitiae", definition: ["die Freundschaft" ]},
    { term: "auxilia, auxiliorum (Pl.)", definition: ["die Hilfstruppen" ]},
    { term: "iungere, iungo, iunxi, iunctum", definition: ["verbinden", "vereinigen"] },
    { term: "dux, ducis", definition: ["der Anführer", "die Anführerin"]},
    { term: "ne (Subj. m. Konj.)", definition: ["dass"] },
    { term: "timere, ne (mit. Konj.)", definition: ["fürchten, dass" ]},
    { term: "facile", definition: ["leicht (zu tun)", "einfach", "leicht" ]},
    { term: "deserere, desero, deserui, desertum", definition: ["verlassen", "im Stich lassen"] },
    { term: "frequens, frequens, frequens, Gen.:frequentis", definition: ["häufig", "zahlreich"] },
    { term: "ne (Subj. m. Konj.) <siehe Lösung hier falls unsicher>", definition: ["dass nicht", "damit nicht"] },
    { term: "vicus, vici", definition: ["das Dorf", "die Gasse"] },
    { term: "egregius, egregia, egregium", definition: ["ausgezeichnet", "wundervoll", "hervorragend"] },
    { term: "gerere, gero, gessi, gestum", definition: ["ausführen","führen", "tragen"] },
    { term: "utrum ... an(im ind. Fragesatz)", definition: ["ob...oder", "ob ... oder"] },
    { term: "servitus, servitutis", definition: ["die Sklaverei"] },
    { term: "libertas, libertatis", definition: ["die Freiheit"] },
    { term: "efficere, efficio, effeci, effectum", definition: ["bewirken", "herstellen"] },
    { term: "cupiditas, cupiditatis", definition: ["das Verlangen (nach)", "das Verlangen", "die Leidenschaft", "das Streben (nach)"] },
    { term: "adducere, adduco, adduxi, adductum", definition: ["heranführen", "veranlassen"] },
    { term: "deficere, deficio, defeci, defectum", definition: ["fehlen", "verlassen", "abnehmen", "abfallen (von)", "abfallen"] },
    { term: "castra, castrorum", definition: ["das Lager"] },
    // weitere Vokabeln hier hinzufügen
  ];
  
  
  const vocabList = document.getElementById("vocabList");
  const checkAnswersBtn = document.getElementById("checkAnswers");
  const repeatTestBtn = document.getElementById("repeatTest");
  
  function generateVocabInputs() {
    vocabularies.forEach((vocab, index) => {
      const li = document.createElement("li");
      const input = document.createElement("input");
      input.setAttribute("data-index", index);
      li.textContent = vocab.term + ": ";
      li.appendChild(input);
      vocabList.appendChild(li);
    });
  }
  
  function checkAnswers() {
    vocabularies.forEach((vocab, index) => {
      const userInput = document.querySelector(`input[data-index="${index}"]`).value.trim();
      const li = document.querySelector(`li:nth-child(${index + 1})`);
      if (userInput.toLowerCase() === vocab.definition.toLowerCase()) {
        li.classList.add("correct");
      } else {
        li.classList.add("wrong");
      }
    });
}
  
  
  function repeatTest() {
    vocabList.innerHTML = "";
    generateVocabInputs();
  }
  
  checkAnswersBtn.addEventListener("click", checkAnswers);
  repeatTestBtn.addEventListener("click", repeatTest);
  
  generateVocabInputs();
  
  const showAnswersBtn = document.getElementById("showAnswers");

showAnswersBtn.addEventListener("click", () => {
    vocabularies.forEach((vocab, index) => {
        const input = document.querySelector(`input[data-index="${index}"]`);
        input.value = vocab.definition;
    });
});
function checkAnswers() {
    vocabularies.forEach((vocab, index) => {
        const userInput = document.querySelector(`input[data-index="${index}"]`).value.trim();
        const input = document.querySelector(`input[data-index="${index}"]`);
        let isCorrect = false;

        // Überprüfe, ob die Benutzerantwort mit einer der Definitionen übereinstimmt
        if (vocab.definition.constructor === Array) {
            isCorrect = vocab.definition.some(def => def.toLowerCase() === userInput.toLowerCase());
        } else {
            isCorrect = userInput.toLowerCase() === vocab.definition.toLowerCase();
        }

        if (isCorrect) {
            input.classList.add("correct");
            input.classList.remove("wrong");
        } else {
            input.classList.add("wrong");
            input.classList.remove("correct");
        }
    });
}
function generateVocabInputs() {
    vocabularies.forEach((vocab, index) => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.setAttribute("data-index", index);
        input.addEventListener("keydown", handleEnterKey);
        li.textContent = vocab.term + ": ";
        li.appendChild(input);
        vocabList.appendChild(li);
    });
}

function handleEnterKey(event) {
    if (event.key === "Enter") {
        const currentIndex = parseInt(event.target.getAttribute("data-index"));
        const nextIndex = currentIndex + 1;

        // Überprüfe, ob es ein nächstes Eingabefeld gibt
        const nextInput = document.querySelector(`input[data-index="${nextIndex}"]`);
        if (nextInput) {
            nextInput.focus(); // Verschiebe den Fokus auf das nächste Eingabefeld
        }
    }
}

// Weitere Funktionen und Event-Listener bleiben unverändert
function generateVocabInputs() {
    vocabularies.forEach((vocab, index) => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.setAttribute("data-index", index);
        input.addEventListener("keydown", handleEnterKey);

        // Erzeuge Span-Elemente für Term und Doppelpunkt
        const termSpan = document.createElement("span");
        termSpan.classList.add("term");
        termSpan.textContent = vocab.term;
        
        const colonSpan = document.createElement("span");
        colonSpan.classList.add("colon");
        colonSpan.textContent = ": ";

        li.appendChild(termSpan);
        li.appendChild(colonSpan);
        li.appendChild(input);
        vocabList.appendChild(li);
    });
}
