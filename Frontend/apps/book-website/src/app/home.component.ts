import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="header">
      <a routerLink="/" class="brand">RISE OF THE SHADOWS</a>

      <nav aria-label="Hauptnavigation">
        <a routerLink="/buecher">Die Bücher →</a>
      </nav>
    </header>

    <main class="hero">
      <span class="background-label">
        Platzhalter für die Hintergrundillustration
      </span>

      <div class="content">
        <p class="eyebrow">Eine neue Young-Adult-Fantasy-Reihe</p>

        <div class="book" aria-label="Buchcover-Platzhalter">
          <strong>RISE OF<br />THE SHADOWS</strong>
          <span>Cover folgt</span>
          <small>BAND 01</small>
        </div>

        <h1>Nicht jeden Schatten<br />musst du allein überwinden.</h1>

        <p class="description">
          Geheimnisse. Neue Freundschaften. Eine Reise, die alles verändert.
        </p>

        <a routerLink="/buecher" class="button">
          Die Geschichte entdecken →
        </a>

        <p class="status">
          Band 1 entsteht gerade · Veröffentlichung noch offen
        </p>
      </div>
    </main>
  `,
  styles: `
    :host {
      display: block;
      background: #111116;
    }

    .header {
      min-height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 20px clamp(20px, 5vw, 80px);
      border-bottom: 1px solid #302937;
    }

    .brand {
      font-weight: 800;
      font-size: 14px;
      letter-spacing: .08em;
    }

    nav a {
      color: #c7b4df;
      font-size: 14px;
    }

    .hero {
      position: relative;
      display: grid;
      place-items: center;
      min-height: calc(100svh - 80px);
      padding: 64px 20px;
      background-color: #25212d;
      /* Später: background-image: url('/bilder/hintergrund.jpg'); */
      background-size: cover;
      background-position: center;
    }

    .background-label {
      position: absolute;
      top: 18px;
      left: 20px;
      font-size: 11px;
      color: #8c8098;
    }

    .content {
      width: 100%;
      max-width: 760px;
      text-align: center;
    }

    .eyebrow {
      margin: 0 0 28px;
      color: #c6afea;
      font-size: 11px;
      letter-spacing: .2em;
      text-transform: uppercase;
    }

    .book {
      width: clamp(190px, 24vw, 260px);
      aspect-ratio: 2 / 3;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: auto;
      padding: 30px 20px;
      background: #17121e;
      border: 1px solid #806895;
      box-shadow: 0 20px 65px #0009;
    }

    .book strong {
      color: #e1d3f2;
      font-size: clamp(24px, 3vw, 30px);
      line-height: 1.15;
      letter-spacing: .03em;
    }

    .book span {
      color: #9685a5;
      font-size: 13px;
    }

    .book small {
      color: #c6afea;
      letter-spacing: .25em;
      font-size: 11px;
    }

    h1 {
      margin: 32px 0 16px;
      font-size: clamp(28px, 4vw, 44px);
      line-height: 1.15;
      letter-spacing: -.03em;
    }

    .description {
      color: #c0b6cb;
      font-size: 15px;
      line-height: 1.6;
    }

    .button {
      display: inline-block;
      margin-top: 16px;
      padding: 14px 24px;
      background: #bea4e8;
      color: #191220;
      border-radius: 5px;
      font-weight: 600;
      font-size: 14px;
    }

    .button:hover {
      background: #ceb8ef;
    }

    .status {
      margin-top: 22px;
      color: #a398af;
      font-size: 12px;
    }

    @media (max-width: 600px) {
      .brand,
      nav a {
        font-size: 11px;
      }

      .hero {
        padding-block: 56px 40px;
      }

      .eyebrow {
        font-size: 9px;
      }
    }
  `,
})
export class HomeComponent { }
