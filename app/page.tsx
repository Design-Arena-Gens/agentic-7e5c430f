import { generativePrompt, projectMeta, scenes, timeline } from './lib/story';

const jsonPrompt = JSON.stringify(generativePrompt, null, 2);

export default function Home() {
  return (
    <main>
      <div className="container">
        <section className="hero">
          <h1 className="hero-title">Stay Tuned: The Tiger — Concept Film Bible</h1>
          <p className="hero-subtitle">
            A cinematic roadmap for the House of Astrid brand drop, translating the visual grammar of
            Gucci&apos;s &quot;Stay Tuned: THE TIGER&quot; into an original, deploy-ready treatment with scene-level
            generative prompts.
          </p>
          <div className="meta-grid">
            <div className="meta-card">
              <span className="meta-label">Brand</span>
              <span className="meta-value">{projectMeta.brand}</span>
            </div>
            <div className="meta-card">
              <span className="meta-label">Runtime</span>
              <span className="meta-value">{projectMeta.runtime}</span>
            </div>
            <div className="meta-card">
              <span className="meta-label">Campaign Tagline</span>
              <span className="meta-value">{projectMeta.campaignTagline}</span>
            </div>
            <div className="meta-card">
              <span className="meta-label">Tone</span>
              <span className="meta-value">{projectMeta.toneDescriptors.join(' · ')}</span>
            </div>
          </div>
        </section>

        <section className="script-section">
          <div>
            <p className="section-title">Narrative Spine</p>
            <h2 className="scene-title">{projectMeta.logline}</h2>
          </div>
          <div className="timeline">
            {timeline.map((moment) => (
              <div className="timeline-item" key={moment.id}>
                <div className="timeline-time">{moment.timecode}</div>
                <div className="timeline-detail">
                  <strong>{moment.title}</strong>
                  <p className="scene-description">{moment.keyBeat}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="script-section">
          <p className="section-title">Scene Treatment</p>
          <div className="script-grid">
            {scenes.map((scene) => (
              <article className="scene-card" key={scene.id}>
                <div className="scene-header">
                  <h3 className="scene-title">{scene.title}</h3>
                  <span className="scene-duration">{scene.timecode}</span>
                </div>
                <p className="scene-description">{scene.synopsis}</p>
                <div className="tag-list">
                  <span className="tag">Locale</span>
                  <span>{scene.locale}</span>
                </div>
                <div className="tag-list">
                  <span className="tag">Camera</span>
                  <span>{scene.camera}</span>
                </div>
                <div className="tag-list">
                  <span className="tag">Lighting</span>
                  <span>{scene.lighting}</span>
                </div>
                <div className="tag-list">
                  <span className="tag">Motion</span>
                  <span>{scene.motion}</span>
                </div>
                <div className="tag-list">
                  <span className="tag">Wardrobe</span>
                  <span>{scene.wardrobe}</span>
                </div>
                <div className="tag-list">
                  <span className="tag">Sound</span>
                  <span>{scene.sound}</span>
                </div>
                <div className="tag-list">
                  <span className="tag">Motifs</span>
                  <span>{scene.visualMotifs.join(' · ')}</span>
                </div>
                <p className="scene-description">{scene.notes}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="script-section">
          <p className="section-title">Generative Prompt JSON</p>
          <pre className="json-block">{jsonPrompt}</pre>
        </section>
      </div>
    </main>
  );
}
