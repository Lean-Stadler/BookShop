import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header>
      <a routerLink="/" class="brand">RISE OF THE SHADOWS</a>
      <a routerLink="/">← Startseite</a>
    </header>

    <main>
      <p class="eyebrow">Die Buchreihe</p>
      <h1>Der Anfang einer neuen Geschichte.</h1>

      <article class="book-detail">
        <div class="cover" aria-label="Buchcover-Platzhalter">
          <strong>RISE OF<br />THE SHADOWS</strong>
          <span>Cover folgt</span>
          <small>BAND 01</small>
        </div>

        <div class="info">
          <span class="badge">In Arbeit</span>
          <h2>Rise of the Shadows</h2>
          <p class="subtitle">Band 1 · Young-Adult-Fantasy</p>

          <p>
            Elyas’ Leben verändert sich, als geheimnisvolle Schatten,
            schwierige Freundschaften und unerwartete Herausforderungen
            seinen Alltag auf den Kopf stellen.
          </p>

          <p>
            Mit Isabella, Kai und Julia begegnet er Menschen, die Teil
            seiner Reise werden. Eine Geschichte über Veränderung,
            Freundschaft und den Mut, neue Wege zu gehen.
          </p>

          <p class="notice">
            Ein Veröffentlichungstermin steht noch nicht fest.
            Weitere Bände sind geplant.
          </p>

          <div class="actions">
            <button disabled>Noch nicht erhältlich</button>
            <button class="outline" disabled>Leseprobe folgt</button>
          </div>

          <p class="note">
            Nach der Veröffentlichung findest du hier die Amazon-Kauflinks
            und eine kostenlose PDF-Leseprobe.
          </p>
        </div>
      </article>
    </main>
  `,
  styles: `
    :host {
      display: block;
      min-height: 100svh;
      background: #111116;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      padding: 24px clamp(20px, 5vw, 80px);
      border-bottom: 1px solid #302937;
      font-size: 13px;
    }

    .brand {
      font-weight: 800;
      letter-spacing: .06em;
    }

    header a:last-child {
      color: #c6afea;
    }

    main {
      max-width: 1100px;
      margin: auto;
      padding: 64px 24px;
    }

    .eyebrow {
      color: #c6afea;
      text-transform: uppercase;
      letter-spacing: .18em;
      font-size: 11px;
    }

    h1 {
      font-size: clamp(28px, 4vw, 42px);
      line-height: 1.2;
      margin-bottom: 36px;
    }

    .book-detail {
      display: grid;
      grid-template-columns: 260px 1fr;
      gap: 48px;
      padding: 36px;
      background: #1b1822;
      border: 1px solid #38303f;
      border-radius: 8px;
    }

    .cover {
      aspect-ratio: 2 / 3;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 30px 20px;
      text-align: center;
      background: #17121e;
      border: 1px solid #806895;
    }

    .cover strong {
      font-size: 28px;
      line-height: 1.2;
      color: #e1d3f2;
    }

    .cover span {
      color: #9685a5;
      font-size: 13px;
    }

    .cover small {
      color: #c6afea;
      letter-spacing: .25em;
    }

    .info {
      align-self: center;
    }

    .badge {
      display: inline-block;
      padding: 5px 12px;
      border: 1px solid #554065;
      border-radius: 4px;
      color: #c6afea;
      font-size: 12px;
    }

    h2 {
      margin: 18px 0 8px;
      font-size: 30px;
    }

    p {
      color: #bdb2c8;
      line-height: 1.7;
    }

    .subtitle,
    .note {
      font-size: 13px;
    }

    .notice {
      padding-top: 18px;
      border-top: 1px solid #38303f;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-block: 24px;
    }

    button {
      padding: 13px 18px;
      border: 1px solid #bea4e8;
      border-radius: 5px;
      background: #bea4e8;
      color: #191220;
      font: inherit;
      font-size: 13px;
      opacity: .55;
      cursor: not-allowed;
    }

    .outline {
      background: transparent;
      color: #d6c7e8;
    }

    @media (max-width: 700px) {
      .book-detail {
        grid-template-columns: 1fr;
        padding: 24px;
        gap: 30px;
      }

      .cover {
        width: min(240px, 100%);
        margin: auto;
      }

      header {
        font-size: 11px;
      }
    }
  `,
})
export class BooksComponent { }
