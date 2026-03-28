"use client"
import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Clock3,
  Users,
  Trophy,
  ChevronRight,
  ShieldCheck,
  Target,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stats = [
  { label: "Coaching Focus", value: "Clarity + Composure" },
  { label: "Format", value: "Private, Group, School" },
  { label: "Approach", value: "Real-world + Practical" },
  { label: "Mission", value: "Train Thinking, Not Just Moves" },
];

const signaturePoints = [
  {
    icon: Clock3,
    title: "Pause Before the Move",
    text: "Students learn to slow down, assess the position, and think with intention.",
  },
  {
    icon: Target,
    title: "See Patterns Clearly",
    text: "Instruction emphasizes recognition, planning, and practical next-step thinking.",
  },
  {
    icon: Brain,
    title: "Respond Under Pressure",
    text: "Students practice composure, not panic, especially when the position gets uncomfortable.",
  },
];

const programs = [
  {
    title: "Private Coaching",
    badge: "Limited Spots",
    icon: Users,
    text: "One-on-one sessions focused on the student’s exact needs—focus, discipline, and real improvement.",
  },
  {
    title: "Small Group Training",
    badge: "6-Week Focus Program",
    icon: Brain,
    text: "Structured group sessions that build awareness, pattern recognition, and confidence through interaction.",
  },
  {
    title: "School Demo & Programs",
    badge: "Best for Schools",
    icon: ShieldCheck,
    text: "On-site demos and school partnerships that introduce chess as a tool for focus and decision-making.",
  },
  {
    title: "Tournament Prep",
    badge: "Competition Ready",
    icon: Trophy,
    text: "Preparation for real competition—strategy, composure, and learning how to handle pressure the right way.",
  },
];

const sessionFlow = [
  "10 min → how they think / get to know the student",
  "20 min → guided instruction (real positions + patterns)",
  "20 min → applied play (decision-making under pressure)",
  "10 min → review (what worked + what changes)",
];

const momentum = [
  "Elementary team: 3rd at GAPPS Region, 5th at GAPPS State",
  "Middle school team: 2nd at GAPPS Region, 1st at GAPPS State",
  "Parents already requesting private and offseason coaching",
  "School demos and enrichment partnerships actively expanding",
];

const outcomes = [
  "Improved focus and attention span",
  "Better decision-making under pressure",
  "Stronger patience, evaluation, and self-control",
  "Clearer thinking before acting",
  "Greater confidence in competitive settings",
  "A healthy blend of discipline, creativity, and resilience",
];

const audiences = [
  {
    title: "Parents",
    text: "For families who want more than just a game. This builds focus, patience, and better decision-making your child can carry into school and everyday life.",
  },
  {
    title: "Schools & Homeschool Groups",
    text: "Structured, engaging programming that reinforces concentration, composure, and critical thinking in a format students actually respond to.",
  },
  {
    title: "Competitive Players",
    text: "For players ready to level up—tournament prep, strategy, composure under pressure, and learning how to win the right way.",
  },
];

const fitItems = [
  "Students who need more focus and patience",
  "Families looking for meaningful enrichment, not busywork",
  "Schools, microschools, and homeschool groups that want a strong instructional partner",
  "Players preparing for tournaments, clubs, and competitive growth",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="sectionTitle">{title}</h2>
      <p className="sectionDescription">{description}</p>
    </motion.div>
  );
}

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`panel ${className}`.trim()}>{children}</div>;
}

export default function YourMoveChessAcademyWebsite() {
  return (
    <div className="pageShell">
      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #071424;
          color: #ffffff;
        }
        a { color: inherit; }
      `}</style>

      <style jsx>{`
        .pageShell {
          min-height: 100vh;
          color: #fff;
          background-color: #071424;
          background-image:
            radial-gradient(circle at 20% 15%, rgba(212,175,55,0.10), transparent 18%),
            radial-gradient(circle at 82% 18%, rgba(212,175,55,0.08), transparent 16%),
            radial-gradient(circle at 50% 100%, rgba(212,175,55,0.07), transparent 24%),
            linear-gradient(180deg, rgba(12,28,50,0.96) 0%, rgba(8,20,37,0.98) 100%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)' opacity='0.11'/%3E%3C/svg%3E"),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='900' viewBox='0 0 900 900'%3E%3Cg fill='rgba(212,175,55,0.08)'%3E%3Cpath d='M655 180c27 0 47 18 54 40 8 23 1 48-18 66-17 16-39 23-62 18 15-15 24-33 24-55 0-24-8-47-24-69 8 0 18 0 26 0zm-7 26c8 17 12 33 12 47 0 13-4 25-12 37 12 0 24-4 34-14 11-11 15-25 11-39-4-16-18-31-45-31z'/%3E%3Cpath d='M598 628c0-119 91-212 206-212-13 23-20 50-20 77 0 90 74 164 164 164-36 103-131 176-244 176-59 0-105-17-146-54 28-10 58-15 90-15 91 0 169 41 235 114-56-111-145-170-263-170-8 0-15 0-22 1z'/%3E%3C/g%3E%3C/svg%3E"),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='900' viewBox='0 0 900 900'%3E%3Cg fill='rgba(212,175,55,0.07)'%3E%3Cpath d='M188 705c28-3 53-15 75-37 31-32 46-70 45-113-1-31-8-58-22-83-18-32-30-60-34-85h121c-4 25-16 53-34 85-14 25-21 52-22 83-1 43 14 81 45 113 22 22 47 34 75 37v23H188v-23zm151-374V222h34v-27c0-11-9-20-20-20h-32c-11 0-20 9-20 20v27h38v109h-75v31h185v-31h-110z'/%3E%3C/g%3E%3C/svg%3E");
          background-size: auto, auto, auto, cover, 240px 240px, 760px 760px, 620px 620px;
          background-position: top left, top right, bottom center, center, center, right 4% top 180px, left -40px bottom 180px;
          background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat, no-repeat, no-repeat;
        }
        .container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .heroSection {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(212,175,55,0.18);
        }
        .heroOverlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(212,175,55,0.12), transparent 24%),
            radial-gradient(circle at top left, rgba(212,175,55,0.08), transparent 18%),
            linear-gradient(180deg, rgba(7,20,36,0.35), rgba(7,20,36,0.05));
          pointer-events: none;
        }
        .topBar {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 24px 0;
        }
        .brandName {
          font-size: 12px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #d0d5dd;
        }
        .brandTag {
          margin-top: 6px;
          font-size: 12px;
          color: #98a2b3;
        }
        .navActions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .heroGrid {
          position: relative;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          padding: 28px 0 96px;
        }
        .pill {
          display: inline-flex;
          align-items: center;
          border: 1px solid rgba(212,175,55,0.25);
          background: rgba(212,175,55,0.07);
          color: #e7c86a;
          border-radius: 999px;
          padding: 10px 16px;
          font-size: 14px;
        }
        .heroTitle {
          margin: 18px 0 0;
          font-size: 64px;
          line-height: 1.02;
          letter-spacing: -0.03em;
          font-weight: 700;
        }
        .heroTitleMuted {
          display: block;
          color: #cbd5e1;
        }
        .heroText,
        .sectionDescription,
        .bodyText {
          color: #c8d1dd;
          line-height: 1.8;
          font-size: 18px;
        }
        .heroText { max-width: 760px; margin-top: 24px; }
        .heroActions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 28px;
        }
        .button,
        .buttonSecondary,
        .buttonGhost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 18px;
          padding: 14px 22px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: 160ms ease;
          cursor: pointer;
        }
        .button {
          background: linear-gradient(180deg, rgba(212,175,55,0.34), rgba(212,175,55,0.16));
          border: 1px solid rgba(212,175,55,0.32);
          color: #fff;
        }
        .button:hover { transform: translateY(-1px); background: linear-gradient(180deg, rgba(212,175,55,0.40), rgba(212,175,55,0.20)); }
        .buttonSecondary,
        .buttonGhost {
          background: transparent;
          border: 1px solid rgba(212,175,55,0.25);
          color: #fff;
        }
        .buttonSecondary:hover,
        .buttonGhost:hover { background: rgba(212,175,55,0.08); }
        .statsGrid,
        .programGrid,
        .threeGrid,
        .fourGrid,
        .twoGrid,
        .contactGrid,
        .outcomeGrid {
          display: grid;
          gap: 16px;
        }
        .statsGrid { grid-template-columns: repeat(4, minmax(0, 1fr)); margin-top: 34px; }
        .programGrid { grid-template-columns: repeat(4, minmax(0, 1fr)); margin-top: 34px; }
        .threeGrid { grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 34px; }
        .fourGrid { grid-template-columns: repeat(4, minmax(0, 1fr)); margin-top: 34px; }
        .twoGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 34px; }
        .outcomeGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .contactGrid { grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 34px; }
        .panel {
          border: 1px solid rgba(212,175,55,0.22);
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
          backdrop-filter: blur(10px);
          border-radius: 28px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.28);
        }
        .panelInner { padding: 24px; }
        .darkCard {
          border: 1px solid rgba(212,175,55,0.18);
          background: rgba(7,20,36,0.74);
          border-radius: 22px;
          padding: 18px;
        }
        .section {
          padding: 84px 0;
        }
        .sectionBand {
          padding: 84px 0;
          border-top: 1px solid rgba(212,175,55,0.16);
          border-bottom: 1px solid rgba(212,175,55,0.16);
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
        }
        .eyebrow {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: #d7be73;
        }
        .sectionTitle {
          margin: 14px 0 0;
          font-size: 44px;
          line-height: 1.08;
          letter-spacing: -0.03em;
        }
        .sectionDescription {
          max-width: 760px;
          margin-top: 16px;
        }
        .badge {
          display: inline-flex;
          border: 1px solid rgba(212,175,55,0.26);
          background: rgba(212,175,55,0.08);
          color: #e7c86a;
          border-radius: 999px;
          padding: 7px 12px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
        }
        .iconWrap {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: rgba(255,255,255,0.08);
          margin-top: 18px;
        }
        .cardTitle {
          margin: 18px 0 0;
          font-size: 24px;
          line-height: 1.2;
        }
        .cardText {
          margin: 12px 0 0;
          color: #c8d1dd;
          font-size: 15px;
          line-height: 1.8;
        }
        .heroSideTitle {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #98a2b3;
        }
        .contactPanel {
          border-top: 1px solid rgba(212,175,55,0.16);
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015));
          padding: 84px 0;
        }
        .ctaWrap {
          border: 1px solid rgba(212,175,55,0.22);
          background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025));
          border-radius: 32px;
          box-shadow: 0 18px 60px rgba(0,0,0,0.34);
          backdrop-filter: blur(12px);
          padding: 34px;
        }
        .ctaGrid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: center;
        }
        .formGrid {
          display: grid;
          gap: 14px;
          max-width: 760px;
          margin-top: 34px;
        }
        .input,
        .textarea {
          width: 100%;
          border-radius: 18px;
          border: 1px solid rgba(212,175,55,0.18);
          background: rgba(7,20,36,0.82);
          color: #fff;
          padding: 15px 16px;
          font-size: 15px;
          outline: none;
        }
        .input::placeholder,
        .textarea::placeholder { color: #98a2b3; }
        .textarea { min-height: 140px; resize: vertical; }
        .inlineIcon {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
        }
        .smallMuted {
          margin-top: 10px;
          color: #c8d1dd;
          line-height: 1.7;
          word-break: break-word;
        }
        @media (max-width: 1100px) {
          .heroGrid,
          .ctaGrid,
          .twoGrid { grid-template-columns: 1fr; }
          .statsGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .programGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .threeGrid { grid-template-columns: 1fr; }
          .contactGrid { grid-template-columns: 1fr; }
        }
        @media (max-width: 760px) {
          .container { padding: 0 18px; }
          .topBar { flex-direction: column; align-items: flex-start; }
          .navActions { width: 100%; }
          .heroTitle { font-size: 42px; }
          .sectionTitle { font-size: 34px; }
          .statsGrid,
          .programGrid,
          .fourGrid,
          .outcomeGrid { grid-template-columns: 1fr; }
          .section,
          .sectionBand,
          .contactPanel { padding: 64px 0; }
          .heroGrid { padding-bottom: 72px; }
          .ctaWrap { padding: 24px; }
        }
      `}</style>

      <section className="heroSection">
        <div className="heroOverlay" />
        <div className="container">
          <div className="topBar">
            <div>
              <div className="brandName">Your Move Chess Academy</div>
              <div className="brandTag">Focus • Decision-Making • Composure Under Pressure</div>
            </div>
            <div className="navActions">
              <a className="buttonGhost" href="https://www.facebook.com/61580977966743" target="_blank" rel="noreferrer">
                Facebook Page
              </a>
              <a className="button" href="#request">
                Book an Intro Visit
              </a>
            </div>
          </div>

          <div className="heroGrid">
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <div className="pill">Chess instruction that carries far beyond the board</div>
              <h1 className="heroTitle">
                Build sharper thinkers.
                <span className="heroTitleMuted">Train better decisions.</span>
              </h1>
              <p className="heroText">
                Your Move Chess Academy helps students develop focus, patience, evaluation, and confidence through structured chess instruction. The goal is bigger than winning games: it is learning how to slow down, think clearly, and respond well under pressure.
              </p>
              <div className="pill" style={{ marginTop: 18 }}>
                Students learn to think before they move — consistently.
              </div>

              <div className="heroActions">
                <a className="button" href="#request">
                  Start With an Intro Session <ChevronRight size={18} />
                </a>
                <a className="buttonSecondary" href="https://www.facebook.com/61580977966743" target="_blank" rel="noreferrer">
                  Visit Facebook
                </a>
              </div>

              <div className="statsGrid">
                {stats.map((stat) => (
                  <Panel key={stat.label}>
                    <div className="panelInner">
                      <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "#98a2b3" }}>
                        {stat.label}
                      </div>
                      <div style={{ marginTop: 10, fontSize: 16, fontWeight: 600 }}>{stat.value}</div>
                    </div>
                  </Panel>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <Panel>
                <div className="panelInner">
                  <div className="heroSideTitle">Signature Philosophy</div>
                  <h2 style={{ margin: "14px 0 0", fontSize: 32 }}>Focus &amp; Decision Training</h2>
                  <p className="bodyText" style={{ marginTop: 14 }}>
                    Chess is the vehicle. Real growth comes from learning to prepare, concentrate, evaluate each move, and capitalize with purpose.
                  </p>

                  <div style={{ display: "grid", gap: 14, marginTop: 20 }}>
                    {signaturePoints.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="darkCard">
                          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                            <div className="iconWrap" style={{ marginTop: 0 }}>
                              <Icon size={20} />
                            </div>
                            <div>
                              <div style={{ fontWeight: 600 }}>{item.title}</div>
                              <div className="cardText" style={{ marginTop: 6 }}>
                                {item.text}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Panel>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twoGrid">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <div className="eyebrow">Meet the Coach</div>
            <h2 className="sectionTitle">Coach Adam</h2>
            <p className="bodyText" style={{ marginTop: 20 }}>
              I don’t just teach chess. I teach how to think before you move.
            </p>
            <p className="bodyText" style={{ marginTop: 14 }}>
              Every student is different. Some need confidence. Some need discipline. Some just need to slow down and actually see what’s in front of them. My job is to read that quickly and build them up from there.
            </p>
            <p className="bodyText" style={{ marginTop: 14 }}>
              Chess is the tool. Focus, patience, and decision-making—that’s the real training. If a student can learn to pause, evaluate, and act with purpose on the board, they can carry that into school, sports, and life.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <Panel>
              <div className="panelInner">
                <div className="heroSideTitle">Focus &amp; Decision Training</div>
                <div style={{ display: "grid", gap: 14, marginTop: 18 }}>
                  {[
                    "Prepare before acting",
                    "Evaluate every move with intent",
                    "Capitalize when opportunity shows",
                    "Stay composed under pressure",
                  ].map((item) => (
                    <div key={item} className="darkCard">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Panel>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What a Session Looks Like"
            title="Structured. Calm. Intentional."
            description="Every session follows a clear flow so students build real thinking habits—not just moves."
          />
          <div style={{ display: "grid", gap: 14, maxWidth: 760, marginTop: 34 }}>
            {sessionFlow.map((item) => (
              <div key={item} className="darkCard">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Programs"
            title="Clear paths for families, schools, and growing players"
            description="Each program is built with purpose. No fluff. Just focused development based on where the student is and where they need to go."
          />

          <div className="programGrid">
            {programs.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                  <Panel>
                    <div className="panelInner">
                      <div className="badge">{item.badge}</div>
                      <div className="iconWrap">
                        <Icon size={24} />
                      </div>
                      <h3 className="cardTitle">{item.title}</h3>
                      <p className="cardText">{item.text}</p>
                    </div>
                  </Panel>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twoGrid">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <div className="eyebrow" style={{ color: "#e7c86a" }}>Proof of Momentum</div>
            <h2 className="sectionTitle">Built on real results and real demand</h2>
            <p className="sectionDescription">
              The academy is still in its early growth stage, so formal testimonials are coming later. What already exists is strong proof: championship-level student results, repeat interest from families, and growing demand for private coaching and school partnerships.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <div className="outcomeGrid">
              {momentum.map((item) => (
                <div key={item} className="darkCard">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="sectionBand">
        <div className="container twoGrid">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <div className="eyebrow" style={{ color: "#e7c86a" }}>Why Families and Schools Choose It</div>
            <h2 className="sectionTitle">The value goes far beyond chess</h2>
            <p className="sectionDescription">
              Students do not just learn openings, tactics, and endgames. They learn how to hold themselves together, evaluate better options, and make more confident decisions with less emotional drift.
            </p>
            <p className="sectionDescription" style={{ marginTop: 14 }}>
              For schools, that means a program that reinforces focus, patience, composure, and healthy decision-making in a format students actually engage with.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <div className="outcomeGrid">
              {outcomes.map((item) => (
                <div key={item} className="darkCard">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Who This Is For"
            title="Clear fit. Clear results."
            description="This is not one-size-fits-all instruction. Each lane is built with a specific outcome in mind."
          />

          <div className="threeGrid">
            {audiences.map((item) => (
              <Panel key={item.title}>
                <div className="panelInner">
                  <h3 className="cardTitle" style={{ marginTop: 0 }}>{item.title}</h3>
                  <p className="cardText">{item.text}</p>
                </div>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twoGrid">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <div className="eyebrow">About the Academy</div>
            <h2 className="sectionTitle">Led by a coach who teaches the student, not just the board</h2>
            <p className="sectionDescription">
              Your Move Chess Academy is built around adaptive teaching, clear communication, and practical growth. Instruction is designed to meet each student where they are while steadily raising the level of focus, awareness, and discipline.
            </p>
            <p className="sectionDescription" style={{ marginTop: 14 }}>
              The coaching style combines fundamentals, pattern recognition, and real-world composure. Students are challenged, encouraged, and taught how to think well before they move.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <Panel>
              <div className="panelInner">
                <div className="heroSideTitle">Best Fit</div>
                <div style={{ display: "grid", gap: 14, marginTop: 18 }}>
                  {fitItems.map((item) => (
                    <div key={item} className="darkCard">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Panel>
          </motion.div>
        </div>
      </section>

      <section className="section" id="request">
        <div className="container">
          <SectionHeading
            eyebrow="Get Started"
            title="Request an Intro Session or School Conversation"
            description="Simple. Reach out, we connect, and we build the right setup for your student, family, school, homeschool group, or enrichment program."
          />

          <form className="formGrid" onSubmit={(e) => e.preventDefault()}>
            <input className="input" placeholder="Name" />
            <input className="input" placeholder="Email" />
            <input className="input" placeholder="Phone" />
            <textarea
              className="textarea"
              placeholder="What are you looking for? (Private coaching, 6-week group, school demo, tournament prep, etc.)"
            />
            <button className="button" type="submit" style={{ width: "fit-content" }}>
              Send Request
            </button>
          </form>
        </div>
      </section>

      <section className="contactPanel">
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="ctaWrap">
            <div className="ctaGrid">
              <div>
                <div className="eyebrow" style={{ color: "#e7c86a" }}>Let’s Build Something Strong</div>
                <h2 className="sectionTitle" style={{ marginTop: 12 }}>
                  Ready to bring Your Move Chess Academy to your student, family, or school?
                </h2>
                <p className="sectionDescription">
                  Reach out to schedule an intro session, discuss school programming, or build a custom training format that fits your goals.
                </p>
              </div>
              <a className="button" href="#request">Book a Conversation</a>
            </div>

            <div className="contactGrid">
              <div className="darkCard">
                <div className="inlineIcon"><Mail size={16} /> Contact Email</div>
                <div className="smallMuted">yourmovechessacademy@gmail.com</div>
              </div>
              <div className="darkCard">
                <div className="inlineIcon"><Phone size={16} /> Phone</div>
                <div className="smallMuted">(215) 378-5350<br />Alt: (470) 429-7731</div>
              </div>
              <div className="darkCard">
                <div className="inlineIcon"><MapPin size={16} /> Service Area</div>
                <div className="smallMuted">Based in Coweta County, serving Coweta and surrounding counties*</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
