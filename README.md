# Mobilnova — Landing-Page (Warteliste)

Statische Info-/Warteliste-Seite für **Mobilnova**. Zum Hosten auf **GitHub Pages** vorbereitet.
Alles in diesem `site/`-Ordner wird veröffentlicht.

## Dateien
- `index.html` — die Landing-Page (alles inline, keine externen Abhängigkeiten)
- `impressum.html`, `datenschutz.html` — Rechtstexte (**Platzhalter ausfüllen!**)
- `404.html` — Fehlerseite
- `robots.txt` — Suchmaschinen-Hinweise
- `CNAME` — deine eigene Domain (aktuell `mobilnova.de` — anpassen oder löschen)

---

## 1. Formular verbinden (Formspree) — WICHTIG
GitHub Pages kann Formulare nicht selbst verarbeiten. Damit Anmeldungen ankommen:

1. Auf <https://formspree.io> kostenlos anmelden, neues Formular anlegen, Ziel-Postfach `info@glanz-aufbereitung.de`.
2. Du bekommst eine Adresse wie `https://formspree.io/f/xldbzabc`.
3. In `index.html` die Zeile suchen:
   ```js
   var FORM_ENDPOINT = "";
   ```
   und deine Adresse eintragen:
   ```js
   var FORM_ENDPOINT = "https://formspree.io/f/xldbzabc";
   ```
4. Die allererste Anmeldung bestätigt Formspree einmalig per E-Mail (Aktivierung).

Ohne diesen Schritt zeigt das Formular nur einen Hinweis, dass es noch nicht verbunden ist.

## 2. Auf GitHub Pages veröffentlichen
1. Neues **öffentliches** Repository anlegen (z. B. `mobilnova-site`).
2. Den **Inhalt** dieses `site/`-Ordners hochladen (nicht den Ordner selbst) — per Web-Upload
   („Add file → Upload files") oder per Git.
3. Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch `main`, Ordner `/ (root)` → **Save**.
4. Nach ~1 Minute live unter `https://<dein-name>.github.io/mobilnova-site/`.

## 3. Eigene Domain (optional)
1. In **Settings → Pages → Custom domain** deine Domain eintragen (z. B. `mobilnova.de`).
   Die Datei `CNAME` in diesem Ordner muss denselben Domainnamen enthalten (sonst löschen).
2. Beim Domain-Anbieter DNS setzen:
   - Wurzeldomain (`mobilnova.de`): vier A-Records auf `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153` (GitHub-Pages-IPs).
   - Alternativ Subdomain (`www.mobilnova.de` oder `app.mobilnova.de`): ein CNAME auf `<dein-name>.github.io`.
3. In den Pages-Einstellungen **„Enforce HTTPS"** aktivieren (nach DNS-Prüfung verfügbar).

## 4. Vor dem echten Start (Pflicht in DE)
- `impressum.html` und `datenschutz.html`: alle **rot markierten Platzhalter** ausfüllen und den gelben
  Hinweiskasten oben entfernen. Für eine gewerbliche Seite mit E-Mail-Erfassung sind Impressum und
  Datenschutzerklärung gesetzlich vorgeschrieben.

---
Quelle/Build: erzeugt aus `../artifact.html`. Bei Textänderungen dort ändern und `index.html` neu ableiten.
